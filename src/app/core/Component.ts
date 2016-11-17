import { IModule, extend } from 'angular';

export default function Component(module: angular.IModule, options: {
    controllerAs?: string,
    template?: string,
    templates?: {
        small: string;
        medium: string;
        large: string;
        max: string;
    },
    templateUrl?: string,
    bindings?: any,
}) {
    return (controller: any) => {

        if (!controller.name) {
            controller.name = controller.toString().match(/^function\s*([^\s(]+)/)[1];
        }
        var selector = camelize(controller.name.replace('Component', ''));

        function camelize(str: string): string {
            return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter: string, index: number) => { return (index === 0 ? letter.toLowerCase() : letter.toUpperCase()); }).replace(/\s+/g, '');
        }
        options.controllerAs = options.controllerAs || 'ctrl';

        module.component(selector, extend(options, { controller: controller }));
    };
}

