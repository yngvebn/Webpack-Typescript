import {Injectable} from '../../core';

@Injectable()
export class MainService{
    constructor(){}

    getGreeting(){
        return "Hello from service!"
    }
}