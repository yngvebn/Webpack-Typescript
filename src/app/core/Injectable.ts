import {IModule, module } from 'angular';
export function Injectable() {
    return (service: any) => {
        let servicesModule: IModule;
        try { servicesModule = module('___services') } catch (error) { servicesModule = module('___services', []); }

        if (!service) return;
        if (!service.name) {
            service.name = service.toString().match(/^function\s*([^\s(]+)/)[1];
        }
        var serviceName: string = camelize(service.name);
        servicesModule.service(serviceName, service);
        
        function camelize(str: string): string {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
        }
    }
}
