import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: MockedComponentFixture<MenuComponent>;

  beforeEach(() => MockBuilder(MenuComponent));
  beforeEach(() => {
    fixture = MockRender(MenuComponent);
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
