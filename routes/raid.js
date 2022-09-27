const { logger, Response, writeFile, stringify } = require("../utilities");
const { RaidController } = require("../lib/controllers/RaidController");

module.exports = async function serverRoutes(app, _opts) {

    // /client/raid/profile/save
    app.post(`/raid/profile/save`, async (request, reply) => {
        //writeFile("./saveInformation.json", stringify(request.body));
        await RaidController.raidProfileSave(request, reply);
    });

}