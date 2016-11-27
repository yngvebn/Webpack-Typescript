import { Route, Component} from  '../../../core'
import {MainComponent} from '../MainComponent'

@Component({
    templateUrl: require('./ChildComponent.tpl.html')
})
@Route({
    url: 'child',
    parent: MainComponent
})
export class ChildComponent {
    constructor() {
        console.log('Child Component!');
    }

    greeting: string;
}