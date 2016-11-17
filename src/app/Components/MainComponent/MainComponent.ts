import { IModule, module } from 'angular';
import Component from '../../core/Component';
import { ComponentModule } from '../module';

@Component(ComponentModule, {
    template: '<h1>Hello Component</h1>'
})
export default class MainComponent{
    constructor() {
        console.log('test');
    }
}
