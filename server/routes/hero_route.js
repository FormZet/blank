module.exports = (app) => {
    const hero_controller = require("../controllers/hero_controller");

    const multer = require("multer");
    const upload = multer({
        dest: "./uploads"
    });

    app.post('/api/hero', async (req, res, next) => {
        let response = await hero_controller.createHero(
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

    app.route("/api/hero")
        .get(async (req, res, next) => {
            let response = await hero_controller.getHeroByName(req.query.name);

            if (!response.isError) {
                res.json({
                    hero: response.hero.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route("/api/hero")
        .put(async (req, res, next) => {
            let response = await hero_controller.updateHero(req.body.oldName, req.body.newName, req.body.newDesc);

            console.log("Back to Route", response);
            if (!response.isError) {
                res.json({
                    hero: response.get_public_data()
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route("/api/hero")
        .delete(async (req, res, next) => {
            let response = await hero_controller.deleteHero(req.query.name);

            if (!response.isError) {
                res.json({
                    response: response
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });

    app.route("/api/hero/all")
        .get(async (req, res, next) => {
            let response = await hero_controller.getAllHeros();
            if (!response.isError) {
                res.json({
                    heros: response.heros
                });
            } else {
                res.status(500);
                res.json(response);
            }
        });
};

