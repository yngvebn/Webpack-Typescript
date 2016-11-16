import { IModule } from 'angular';
export function Service(module: IModule) {
    return (service: any) => {
        if (!service) return;
        if (!service.name) {
            service.name = service.toString().match(/^function\s*([^\s(]+)/)[1];
        }
        var serviceName: string = camelize(service.name);
        module.service(serviceName, service);
        
        function camelize(str: string): string {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
        }
    }
}
