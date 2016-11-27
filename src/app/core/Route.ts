import { IModule, extend } from 'angular';
import 'reflect-metadata';

export function Route(options: {
    url: string,
    isDefault?: boolean,
    parent?: any
}) {
    return (controller: any, key?) => {
        Reflect.defineMetadata('custom:route', options, controller, key);
        
    };
}
