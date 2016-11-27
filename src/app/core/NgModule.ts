import { IModule, extend, module, bootstrap as ngBootstrap } from 'angular';
import { ui } from 'angular';
import uiRouter from 'angular-ui-router';

import 'reflect-metadata';

function NgModule(options: {
    declarations?: any[],
    providers?: any[],
    imports?: any[]
}) {
    return (controller: any) => {
        function createModuleName(ctrl: any) {
            if (typeof ctrl === "string") return ctrl;
            if (!ctrl.name) {
                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
            }
            return ctrl.name;
        }

        function createComponentSelector(ctrl: any): string {
            if (!ctrl.name) {
                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
            }
            var selector = camelize(ctrl.name.replace('Component', ''));

            return selector;
        }

        function camelize(str: string): string {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
        }

        function registerRoute(ctrl, module: IModule, routeOptions) {
            if (module.requires.indexOf(uiRouter) === -1) {
                throw new Error(`Module '${module.name}' must import module 'uiRouter' in order to use @Route`)
            }
            if (!ctrl.name) {
                ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
            }
            let state: ui.IState = {
                url: routeOptions.url,
                name: (routeOptions.name || ctrl.name.replace('Component', '')),
                component: camelize(ctrl.name.replace('Component', ''))
            }
            if (routeOptions.parent) {
                let parentRouteOptions = Reflect.getMetadata("custom:route", routeOptions.parent);
                if (parentRouteOptions) {
                    if (!routeOptions.parent.name) {
                        routeOptions.parent.name = routeOptions.parent.toString().match(/^function\s*([^\s(]+)/)[1];
                    }
                    state.parent = (parentRouteOptions.name || routeOptions.parent.name.replace('Component', '')); 
                }
            }
            module.config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider: ui.IUrlRouterProvider, $stateProvider: ui.IStateProvider) => {
                $stateProvider.state(state);
                if (routeOptions.isDefault) {
                    $urlRouterProvider.otherwise(routeOptions.url);
                }
            }])
            console.log('register state::', state);
        }

        let moduleNames = (options.imports || []).map(element => {
            return createModuleName(element);
        });

        let thisModule: IModule = module(createModuleName(controller), moduleNames);
        console.log(`${thisModule.name}.config`, controller);
        thisModule.config(controller);
        console.log(thisModule.name, options.providers);
        (options.providers || []).forEach((service) => {
            if (service) {
                let name = service.toString().match(/^function\s*([^\s(]+)/)[1];
                var serviceName: string = camelize(name);
                console.log(`${thisModule.name}.service(${serviceName})`);
                thisModule.service(serviceName, service);
            }
        });


        (options.declarations || []).forEach((declaration) => {
            let componentOptions = Reflect.getMetadata("custom:component", declaration);
            componentOptions.controller = declaration;
            thisModule.component(createComponentSelector(declaration), componentOptions);

            let routeOptions = Reflect.getMetadata("custom:route", declaration);
            if (routeOptions) {
                registerRoute(declaration, thisModule, routeOptions);
            }
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
        if (typeof ctrl === "string") return ctrl;
        if (!ctrl.name) {
            ctrl.name = ctrl.toString().match(/^function\s*([^\s(]+)/)[1];
        }
        return ctrl.name;
    }
}
export { NgModule, INgModule, bootstrapModule }
