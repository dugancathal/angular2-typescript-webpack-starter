import {AppComponent} from "../app/app.component";
import {TestBed} from "@angular/core/testing";

describe("AppComponent", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  it("presents the title based on the underlying attribute", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerText).toContain("Hello, Angular");
  
    fixture.componentInstance.title = "Hello, World!";
    fixture.detectChanges();

    expect(fixture.nativeElement.innerText).toContain("Hello, World");
  });
});