import { bootstrapModule  } from './core/NgModule';
import { ComponentModule } from './Components/ComponentModule';
import { ServicesModule } from './Services/Services';
import { NgModule } from './core/NgModule';

@NgModule({
    imports: [ComponentModule, ServicesModule]
})
class AppModule{
    constructor($locationProvider: any){
        //$locationProvider.html5Mode(true);
    }
}

bootstrapModule(AppModule);