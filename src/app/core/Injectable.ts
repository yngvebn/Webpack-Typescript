import {IModule, module } from 'angular';
export function Injectable() {
    return (service: any, key?: any) => {
        Reflect.defineMetadata('custom:service', {}, service, key);
        
        let servicesModule: IModule;
        try { servicesModule = module('___services') } catch (error) { servicesModule = module('___services', []); }

        /*if (!service) return;
        if (!service.name) {
            service.name = service.toString().match(/^function\s*([^\s(]+)/)[1];
        }
        var serviceName: string = camelize(service.name);*/
        //servicesModule.service(serviceName, service);
        
    }
}
