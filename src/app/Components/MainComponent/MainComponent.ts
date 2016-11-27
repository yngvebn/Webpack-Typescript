import { Route, Component} from  '../../core'
import {MainService} from './MainService';
import {TestService} from '../../Services'

@Component({
    templateUrl: require('./MainComponent.tpl.html')
})
@Route({
    url: '/',
    isDefault: true
})
export class MainComponent {
    constructor(mainService: MainService, testService: TestService) {
        console.log('Main Loaded!!');
        this.greeting = mainService.getGreeting();
    }

    greeting: string;
}