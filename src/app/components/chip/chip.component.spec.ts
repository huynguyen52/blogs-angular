import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: MockedComponentFixture<ChipComponent>;

  beforeEach(() => MockBuilder(ChipComponent));

  beforeEach(() => {
    fixture = MockRender(ChipComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy;
  });

  it('should emit onClearChip event when onRemove is called', () => {
    jest.spyOn(component.onClearChip, 'emit');
    const event = new Event('click');
    component.onRemove(event);
    expect(component.onClearChip.emit).toHaveBeenCalled();
  });

  it('should stop event propagation when onRemove is called', () => {
    const event = new Event('click');
    jest.spyOn(event, 'stopPropagation');
    component.onRemove(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
