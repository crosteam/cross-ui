import Keycloak from "keycloak-js";

let initOptions = {
    url: 'http://localhost:8080',
    realm: 'Crossteam',
    clientId: 'cross-ui',
    onLoad: 'login-required',
    enableLogging: true,
    checkLoginIframe: true,
    flow: 'standard'
}
const keycloakInstance = new Keycloak(initOptions);


/**
 * Initializes Keycloak instance and calls the provided
 * function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
function Authenticate(callback: Function, error: Function) {
    console.log('start keycloak');
    keycloakInstance
        .init({onLoad: "login-required"})
        .then(auth => {
            console.log("authenticate: " + auth)
            if (auth) {
                callback();
            }
        })
        .catch((e) => {
            error(e);
        });
}


export default Authenticate;