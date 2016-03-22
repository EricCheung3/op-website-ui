import {join} from 'path';
import {argv} from 'yargs';
import {SeedConfig, normalizeDependencies} from './seed.config';

export class ProjectConfig extends SeedConfig {
    API_HOST = getBackendApiHost();
    PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

    constructor() {
        super();
        // this.APP_TITLE = 'Put name of your app here';
        let additional_deps: Array<any> = [
            // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
            // {src: 'lodash/lodash.min.js', inject: 'libs'},
            { src: 'bootstrap/dist/js/bootstrap.min.js', inject: 'libs' },
            { src: 'bootstrap/dist/css/bootstrap.min.css', inject: true }, // inject into css section
        ];

        this.DEV_NPM_DEPENDENCIES = this.DEV_DEPENDENCIES.concat(normalizeDependencies(additional_deps));
        this.PROD_NPM_DEPENDENCIES = this.PROD_NPM_DEPENDENCIES.concat(normalizeDependencies(additional_deps));

        this.APP_ASSETS = [
            // {src: `${this.ASSETS_SRC}/css/toastr.min.css`, inject: true},
            // {src: `${this.APP_DEST}/assets/scss/global.css`, inject: true},
            { src: `${this.ASSETS_SRC}/main.css`, inject: true },
        ];

        this.DEV_DEPENDENCIES = this.DEV_NPM_DEPENDENCIES.concat(this.APP_ASSETS);
        this.PROD_DEPENDENCIES = this.PROD_NPM_DEPENDENCIES.concat(this.APP_ASSETS);
    }
}

function getBackendApiHost() {
    let backend = argv['backend'] || 'cloud-dev';
    if (backend === 'local') {
        return 'http://localhost:7800';
    } else if (backend === 'local-docker') {
        return 'http://api.openprice.io';
    } else if (backend === 'cloud-dev') {
        return 'https://dev-api.theopenprice.com';
    } else if (backend === 'cloud-prod') {
        return 'https://api.theopenprice.com';
    }
    return 'https://dev-api.theopenprice.com'; // default to cloud dev env
}

