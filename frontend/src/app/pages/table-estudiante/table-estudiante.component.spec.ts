import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEstudianteComponent } from './table-estudiante.component';

describe('TableEstudianteComponent', () => {
  let component: TableEstudianteComponent;
  let fixture: ComponentFixture<TableEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
