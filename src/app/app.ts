import { bootstrapModule  } from './core/NgModule';
import { ComponentModule } from './Components/ComponentModule';
import { NgModule } from './core/NgModule';

@NgModule({
    imports: [ComponentModule]
})
class AppModule{}

bootstrapModule(AppModule);