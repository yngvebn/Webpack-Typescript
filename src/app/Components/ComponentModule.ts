import { MainComponent } from './MainComponent/MainComponent';
import {NgModule} from '../core';
import uiRouter from 'angular-ui-router';

@NgModule({
  imports: [uiRouter],
  declarations: [ MainComponent ]
})
class ComponentModule { }

export {ComponentModule}