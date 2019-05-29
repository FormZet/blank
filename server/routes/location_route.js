module.exports = (app) => {
    const location_controller = require("../controllers/location_controller");

    const multer = require("multer");
    const upload = multer({
        dest: "./uploads"
    });

    app.post('/api/hero', async (req, res, next) => {
        let response = await location_controller.createPlace(
            req.body.name,
            req.body.pic,
            req.body.role,
            req.body.desc,
            req.body.universeId
        );

        if (!response.isError) {
            res.json({
                hero: response
            });
        } else {
            res.status(500);
            res.json(response);
        }
    });

    app.post('/api/location', async (req, res, next) => {
        let response = await location_controller.createPlace(
            req.body.name,
            req.body.pic,
            req.body.role,
            req.body.desc,
            req.body.universeId
        );

        if (!response.isError) {
            res.json({
                hero: response
            });
        } else {
            res.status(500);
            res.json(response);
        }
    });

    app.post("/api/place", upload.single("image"), async (req, res, next) => {
        console.log(req.file);

        let response = await location_controller.createPlace(
            req.body.name,
            req.body.address,
            req.body.lat,
            req.body.lng,
            req.body.pic,
            req.body.architector,
            req.body.style,
            req.body.desc
        );

        console.log('THIS IS THE RESPONSE ON CREATE', response);

        if (!response.isError) {
            res.json({
                place: response
            });
        } else {
            res.status(500);
            res.json(response);
        }
    });

    app.route("/api/place")
        .get(async (req, res, next) => {
            let response = await location_controller.getPlaceByName(req.query.name);

            if (!response.isError) {
                res.json({
                    place: response.place.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route("/api/place")
        .put(async (req, res, next) => {
            let response = await location_controller.updatePlace(req.body.oldName, req.body.newName, req.body.newDesc);

            console.log("Back to Route", response);
            if (!response.isError) {
                res.json({
                    place: response.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route("/api/place")
        .delete(async (req, res, next) => {
            let response = await location_controller.deletePlace(req.query.name);

            if (!response.isError) {
                res.json({
                    response: response
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route("/api/place/all")
        .get(async (req, res, next) => {
            let response = await location_controller.getAllPlaces();
            if (!response.isError) {
                res.json({
                    places: response.places
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });
};

