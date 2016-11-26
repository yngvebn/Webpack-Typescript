import { Route, Component} from  '../../core'
import {MainService} from './MainService';

@Component({
    templateUrl: require('./MainComponent.tpl.html')
})
@Route({
    url: '/',
    isDefault: true
})
export class MainComponent {
    constructor(mainService: MainService) {
        console.log('Main Component!');
        this.greeting = mainService.getGreeting();
    }

    greeting: string;
}