import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { UsersComponent } from './users.component';
import { User } from '../../models/user';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: MockedComponentFixture<UsersComponent>;

  beforeEach(() => MockBuilder(UsersComponent));
  beforeEach(() => {
    fixture = MockRender(UsersComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize users', () => {
    expect(component.users()?.length).toEqual(2);
  });

  it('should open modal and close popover on actions change', () => {
    jest.spyOn(component.modal, 'openModal');
    jest.spyOn(component.popover, 'close');

    component.onActionsChange([]);

    expect(component.modal.openModal).toHaveBeenCalled();
    expect(component.popover.close).toHaveBeenCalled();
  });

  it('should reset form and selected menu item on modal change', () => {
    jest.spyOn(component.createUserForm, 'resetForm');

    component.onModalChanged(false);

    expect(component.createUserForm.resetForm).toHaveBeenCalled();
    expect(component.selectedMenuItem()).toEqual([]);
  });

  it('should update selected rows on row selection change', () => {
    const users: User[] = [
      {
        id: '1',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        phone: '1234567890',
        company: 'TestCompany',
      },
    ];
    component.onRowSelectionChange(users);

    expect(component.selectedRows()).toEqual(users);
  });
});
