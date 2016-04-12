import {AppComponent} from "../app/app.component";
import {componentSuite} from "./support/controller-test";

componentSuite((componentTest) => {
    describe("AppComponent", () => {
        it("does things", componentTest(AppComponent, (component) => {
            expect(component.title).toEqual("Hello, Angular");
        }));
    });
});
