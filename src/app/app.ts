import { module, IModule  } from 'angular';
import uirouter from 'angular-ui-router';

import { MainComponent } from './Components';
import { ComponentModule } from './Components/module';

let app:IModule = module('app', [
    ComponentModule.name,
    uirouter
]);

export { app };
