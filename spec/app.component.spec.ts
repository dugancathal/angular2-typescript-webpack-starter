import {AppComponent} from "../app/app.component";
import {TestComponentBuilder, beforeEachProviders, inject, beforeEach} from "angular2/testing";

describe("AppComponent", function () {
    let tcb;

    beforeEachProviders(() => [
        TestComponentBuilder,
        AppComponent
    ]);

    beforeEach(inject([TestComponentBuilder], function(_tcb) {
        tcb = _tcb
    }));


    it("has a title", function (done) {
        tcb.createAsync(AppComponent).then(function(fixture) {
            let component = fixture.componentInstance,
                element = fixture.nativeElement;

            fixture.detectChanges();
            expect(component.title).toEqual("Hello, Angular");
            expect(element.querySelector('h1').innerText).toEqual(component.title);
            done();
        }).catch(e => fail(e));
    });
});