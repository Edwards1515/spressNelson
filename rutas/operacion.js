var router = require('express').Router();
const Restaurantes = require('../modelos/restaurantes.js');
const Promociones = require('../modelos/promociones.js');




//REQ 7 Crear una nueva promoción y vincularla con uno de los restaurantes existentes LISTO
router.post('/crearPromocion', async (req, res) => {
    let miNuevoPromocion = new Promociones({
        nombre: req.body.nombre,
        carta: req.body.carta,
        premium: req.body.premium,
        activo: req.body.activo,
        fechaInactivar: req.body.fechaInactivar,
        idRestaurante: req.body.idRestaurante
    });

    miNuevoPromocion.save()
        .then((nodo) => {
            res.json({
                status: "ok",
                nodoCreado: nodo
            });
        })
        .catch((err) => {
            res.json({
                status: "fail",
                error: err
            });
        });
});

//REQ 8 Actualizar un solo campo a la vez de restaurantes LISTO
router.put('/actualizarDatoDeUnRestaurante/:id', async (req, res) => {

    Restaurantes.findByIdAndUpdate(req.params.id,
        req.body.queryUpdate)
        .then(() => {
            res.json({
                "status": "ok",

        });
        })
        .catch((err) => {
            res.json({
                "status": "fail",
                "error": err
            });
        });


});


//Obtener todos los restaurantes
router.get('/obtenerTodosLosRestaurantes', async (req, res) => {

    Restaurantes.find()
        .then((losNodos) => {
            res.json({
                "status": "ok",
                "Restaurantes": losNodos
            });
        })
        .catch((err) => {
            res.json({
                "status": "fail",
                "error": err
            });
        });

});

router.get('/obtenerPromociones', async (req, res) => {

    Promociones.find()
        .then((losNodos) => {
            res.json({
                "status": "ok",
                "Promo": losNodos
            });
        })
        .catch((err) => {
            res.json({
                "status": "fail",
                "error": err
            });
        });

});




module.exports = router;
