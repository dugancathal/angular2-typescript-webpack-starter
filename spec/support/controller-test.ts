import {TestComponentBuilder, inject, beforeEach} from "angular2/testing";

export const componentSuite = (suite) => {
    let componentTest = (componentClass, callback) => {
        let tcb;
        beforeEach(inject([TestComponentBuilder], (_tcb) => {
            tcb = _tcb
        }));

        return (done) => {
            tcb.createAsync(componentClass).then((fixture) => {
                let component = fixture.componentInstance,
                    element = fixture.nativeElement;

                fixture.detectChanges();
                callback(component, element, fixture);
                done();
            }).catch(e => done.fail(e));
        }
    };

    suite(componentTest);
};