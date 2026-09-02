import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsFormComponent } from './comments-form.component';

describe('CommentsFormComponent', () => {
  let component: CommentsFormComponent;
  let fixture: ComponentFixture<CommentsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentsFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
