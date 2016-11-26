import { IModule, extend } from 'angular';
import 'reflect-metadata';

export function Component(options: {
    controllerAs?: string,
    template?: string,
    templateUrl?: any,
    bindings?: any,
}) {
    return (controller: any, key?) => {
        Reflect.defineMetadata('custom:component', options, controller, key);
        
        if (!controller.name) {
            controller.name = controller.toString().match(/^function\s*([^\s(]+)/)[1];
        }

        options.controllerAs = options.controllerAs || '$ctrl';
    };
}
