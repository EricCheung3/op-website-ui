import {OpaqueToken} from 'angular2/core';

export interface Config {
  apiHost: string;
};

export const CONFIG:Config = {
  apiHost: '<%= API_HOST %>'
};

export let APP_CONFIG = new OpaqueToken('app.config');
