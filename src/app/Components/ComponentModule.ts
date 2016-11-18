import {IModule, module} from 'angular'
import { MainComponent } from './MainComponent/MainComponent';
import {NgModule} from '../core/NgModule';

@NgModule({
  declarations: [ MainComponent ]
})
class ComponentModule { 
}

export {ComponentModule}