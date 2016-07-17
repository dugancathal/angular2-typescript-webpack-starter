import {AppComponent} from "../app/app.component";
import {compTest} from "./support/controller-test";

describe("AppComponent", () => {
  compTest("presents the title based on the underlying attribute", AppComponent, (component, domEl, fixture) => {
    expect(domEl.innerText).toContain("Hello, Angular");
  
    component.title = "Hello, World!";
    fixture.detectChanges();
  
    expect(domEl.innerText).toContain("Hello, World");
  });
});