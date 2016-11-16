
    import { Component } from '../core/Component';
    import { app } from '../app';


module MainComponent{
    @Component(app, {
        template: '<h1>Hello Component</h1>'
    })
    class MainComponent{
        constructor() {
            console.log('test');
        }
    }

}

export default MainComponent;