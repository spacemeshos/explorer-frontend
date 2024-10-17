// @flow
/**
 * Spacemesh API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v2alpha1
 *
 * NOTE: This class is auto generated by OpenAPI-Generator
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export type ConfigurationParameters = {
    apiKey?: string | (name: string) => string;
    username?: string;
    password?: string;
    accessToken?: string | (name: string, scopes?: string[]) => string;
    basePath?: string;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey: string | (name: string) => string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken: string | ((name: string, scopes?: string[]) => string);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath: string;

    constructor(param: ConfigurationParameters = {}) {
        if (param.apiKey) {
            this.apiKey = param.apiKey;
        }
        if (param.username) {
            this.username = param.username;
        }
        if (param.password) {
            this.password = param.password;
        }
        if (param.accessToken) {
            this.accessToken = param.accessToken;
        }
        if (param.basePath) {
            this.basePath = param.basePath;
        }
    }
}
