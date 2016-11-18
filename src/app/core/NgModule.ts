import { IModule, extend, module, bootstrap as ngBootstrap } from 'angular';
import 'reflect-metadata';

function NgModule(options: {
    declarations?: any[],
    imports?: any[]
}) {
    return (controller: any) => {

        function createModuleName(ctrl: any) {
            if (!ctrl.name) {
                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
            }
            return camelize(ctrl.name.replace('Component', ''));

            function camelize(str: string): string {
                return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
            }
        }

        function createComponentSelector(ctrl: any): string{
            if (!ctrl.name) {
                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
            }
            var selector = camelize(ctrl.name.replace('Component', ''));

            function camelize(str: string): string {
                return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
            }

            return selector;
        }

        let moduleNames = (options.imports || []).map(element => {
            return createModuleName(element);
        });
        let thisModule: IModule = module(createModuleName(controller), moduleNames);
        (options.declarations || []).forEach((declaration) => {
            let componentOptions = Reflect.getMetadata("custom:component", declaration);
            componentOptions.controller = declaration;
            thisModule.component(createComponentSelector(declaration), componentOptions);
        })
    };
}
class INgModule {
    name: string;
}

function bootstrapModule(modules: any, element?: string | Element | JQuery | Document) {
    if (!element) {
        element = document;
    }
    if (!(modules instanceof Array)) {
        modules = [modules];
    }
    ngBootstrap(element, modules.map(m => createModuleName(m)));

    function createModuleName(ctrl: any) {
        if (!ctrl.name) {
            ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
        }
        return camelize(ctrl.name.replace('Component', ''));

        function camelize(str: string): string {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
        }
    }
}
export { NgModule, INgModule, bootstrapModule }
