import { FormsModule } from '@angular/forms';
import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { DropdownOption } from '../../models/components';
import { ChipsListComponent } from '../chips-list/chips-list.component';
import { MenuComponent } from '../menu/menu.component';
import { PopoverComponent } from '../popover/popover.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { DropdownInputComponent } from './dropdown-input.component';

describe('DropdownInputComponent', () => {
  let component: DropdownInputComponent;
  let fixture: MockedComponentFixture<DropdownInputComponent>;

  beforeEach(async () => {
    await MockBuilder(DropdownInputComponent)
      .keep(PopoverComponent)
      .keep(MenuComponent)
      .keep(FormsModule)
      .keep(TextFieldComponent)
      .keep(ChipsListComponent);
  });

  beforeEach(() => {
    fixture = MockRender(DropdownInputComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write value', () => {
    const values: DropdownOption[] = [{ label: 'Option 1', value: '1' }];
    component.writeValue(values);
    expect(component.selectedMenuItems).toEqual(values);
  });

  it('should register onChange function', () => {
    const fn = jest.fn();
    component.registerOnChange(fn);
    component.onChange([{ label: 'Option 1', value: '1' }]);
    expect(fn).toHaveBeenCalledWith([{ label: 'Option 1', value: '1' }]);
  });

  it('should register onTouched function', () => {
    const fn = jest.fn();
    component.registerOnTouched(fn);
    component.onTouched();
    expect(fn).toHaveBeenCalled();
  });

  it('should select menu item and close popover', () => {
    const fn = jest.fn();
    component.registerOnChange(fn);
    jest.spyOn(component.popover, 'close');
    const menuItems: DropdownOption[] = [{ label: 'Option 1', value: '1' }];
    component.selectMenuItem(menuItems);
    expect(fn).toHaveBeenCalledWith(menuItems);
    expect(component.popover.close).toHaveBeenCalled();
  });

  it('should handle remove chip', () => {
    component.selectedMenuItems = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ];
    component.handleRemoveChip('1');
    expect(component.selectedMenuItems).toEqual([
      { label: 'Option 2', value: '2' },
    ]);
  });
});
