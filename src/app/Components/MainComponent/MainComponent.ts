import { IComponentOptions, IController, IComponentController } from 'angular';
import {Component} from  '../../core/Component'

@Component({
    template: "<h1>Hello component</h1>"
})
class MainComponent {
    constructor() {
        console.log('Main Component!');
    }
}
console.log('loaded main component-file');

export { MainComponent }