import { MainComponent } from './MainComponent/MainComponent';
import {ChildComponent} from './MainComponent/ChildComponent/ChildComponent';
import {NgModule} from '../core';
import uiRouter from 'angular-ui-router';
import {MainService} from './MainComponent/MainService';

@NgModule({
  imports: [ uiRouter ],
  declarations: [ MainComponent, ChildComponent ],
  providers: [ MainService ]
})
class ComponentModule { }

export {ComponentModule}