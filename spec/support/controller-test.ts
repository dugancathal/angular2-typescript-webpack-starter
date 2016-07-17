import {inject} from "@angular/core/testing";
import {TestComponentBuilder, ComponentFixture} from "@angular/compiler/testing";

export type ComponentTestIt = (ComponentRef, ElementRef, ComponentFixture) => void;
export type ComponentTestFunction = (any, ComponentTestIt) => Function;
type Suite = (ComponentTestFunction) => void;

export const componentTest:ComponentTestFunction = (componentClass:any, testCallback:ComponentTestIt) => {
    let compileDirectiveAndRunTest:Function = inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        tcb.createAsync(componentClass).then((fixture) => {
            let component = fixture.componentInstance,
                element = fixture.nativeElement;

            fixture.detectChanges();
            testCallback(component, element, fixture);
        });
    });

    return compileDirectiveAndRunTest;
};

export function compTest(desc:string, component:any, test:ComponentTestIt) {
    it(desc, () => componentTest(component, test)());
}