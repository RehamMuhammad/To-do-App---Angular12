import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoListComponent } from './view-todo-list.component';

describe('ViewTodoListComponent', () => {
  let component: ViewTodoListComponent;
  let fixture: ComponentFixture<ViewTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTodoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
