import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolveDialogComponent } from './evolve-dialog.component';

describe('EvolveDialogComponent', () => {
  let component: EvolveDialogComponent;
  let fixture: ComponentFixture<EvolveDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvolveDialogComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvolveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
