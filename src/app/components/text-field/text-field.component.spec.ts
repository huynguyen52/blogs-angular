import {
  MockBuilder,
  MockRender,
  MockedComponentFixture,
  ngMocks,
} from 'ng-mocks';
import { TextFieldComponent } from './text-field.component';

describe('TextFieldComponent', () => {
  let component: TextFieldComponent;
  let fixture: MockedComponentFixture<TextFieldComponent>;

  beforeEach(() => MockBuilder(TextFieldComponent));

  beforeEach(() => {
    fixture = MockRender(TextFieldComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write value to the input', () => {
    const value = 'test value';
    component.writeValue(value);
    expect(component.value).toBe(value);
  });

  it('should write value to the input with default', () => {
    component.writeValue('');
    expect(component.value).toBe('');
  });

  it('should register onChange function', () => {
    const fn = jest.fn();
    component.registerOnChange(fn);
    // const event = { target: { value: 'new value' } } as Event<HTMLInputElement>;
    const event = ngMocks.event('input');
    component.handleChange({
      target: { value: 'new value' },
    } as unknown as Event);
    expect(fn).toHaveBeenCalledWith('new value');
  });

  it('should register onTouched function', () => {
    const fn = jest.fn();
    component.registerOnTouched(fn);
    component.handleTouched();
    expect(fn).toHaveBeenCalled();
  });

  it('should set disabled state', () => {
    component.setDisabledState?.(true);
    expect(component.isDisabled).toBe(true);
    component.setDisabledState?.(false);
    expect(component.isDisabled).toBe(false);
  });

  it('should handle value changes in the input', () => {
    const event = { target: { value: 'changed value' } } as unknown as Event;
    component.handleChange(event);
    expect(component.value).toBe('changed value');
  });
});
