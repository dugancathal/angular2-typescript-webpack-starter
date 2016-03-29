import {TestComponentBuilder, inject} from "angular2/testing";

export const controllerSuite = (suite) => {
    return () => {
        let controllerTest = (componentClass, callback) => {
            let tcb;
            inject([TestComponentBuilder], (_tcb) => {
                console.log("In here");
                tcb = _tcb
            });

            return function (done) {
                tcb.createAsync(componentClass).then((fixture) => {
                    let component = fixture.componentInstance,
                        element = fixture.nativeElement;

                    fixture.detectChanges();
                    callback(component, element, fixture)
                    done();
                }).catch(e => done.fail(e));
            }
        };
        
        suite(controllerTest);
    }
};