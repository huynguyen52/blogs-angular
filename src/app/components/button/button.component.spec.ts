import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let fixture: MockedComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  beforeEach(() => MockBuilder(ButtonComponent));

  beforeEach(() => {
    fixture = MockRender(ButtonComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default type as "button"', () => {
    component.type = 'button';
    fixture.detectChanges();
    expect(component.type).toBe('button');
  });

  it('should have default type as "button"', () => {
    component.type = 'button';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button').type).toBe('button');
  });
});
