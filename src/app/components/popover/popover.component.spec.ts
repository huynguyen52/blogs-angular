import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { PopoverComponent } from './popover.component';

class TestPopoverComponent extends PopoverComponent {
  get _isOpen() {
    return this.isOpen;
  }
}

describe('PopoverComponent', () => {
  let component: TestPopoverComponent;
  let fixture: MockedComponentFixture<TestPopoverComponent>;

  beforeEach(() => MockBuilder(TestPopoverComponent));

  beforeEach(() => {
    fixture = MockRender(TestPopoverComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the popover', () => {
    component.open();
    expect(component._isOpen).toBe(true);
  });

  it('should close the popover', () => {
    component.open(); // Ensure it is open first
    component.close();
    expect(component._isOpen).toBe(false);
  });
});
