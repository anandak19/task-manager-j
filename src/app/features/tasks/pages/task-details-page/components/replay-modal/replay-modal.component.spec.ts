import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayModalComponent } from './replay-modal.component';

describe('ReplayModalComponent', () => {
  let component: ReplayModalComponent;
  let fixture: ComponentFixture<ReplayModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReplayModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReplayModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
