import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';
import { MockBuilder, MockRender, MockedComponentFixture } from 'ng-mocks';

describe('BlogsComponent', () => {
  let component: BlogsComponent;
  let fixture: MockedComponentFixture<BlogsComponent>;

  beforeEach(() => MockBuilder(BlogsComponent));

  beforeEach(() => {
    fixture = MockRender(BlogsComponent);
    component = fixture.point.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
