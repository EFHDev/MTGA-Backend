'use strict'
const { launcherRoutes } = require(`./controllers/routes/launcher`);
const { renderHomePage } = require(`./controllers/handlers/home`);
const { html } = require(`./utilities/response`);

/**
 * coreRoutes list
 */
let coreRoutes = {
    '/': async (url, info, sessionID) => {
        await html(reply, renderHomePage(), "");
        return true;
    }
};
module.exports.coreRoutes = coreRoutes;

/**
 * Adds routes to the coreRoutes object
 */
function impregnateCoreRoutes() {
    for (const route in launcherRoutes) {
        coreRoutes[route] = launcherRoutes[route];
    }
}
impregnateCoreRoutes();