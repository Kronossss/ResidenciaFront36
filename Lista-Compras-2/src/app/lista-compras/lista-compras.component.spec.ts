import { ComponentFixture, TestBed } from '@angular/core/testing';


import { ListaComprasComponent } from './lista-compras.component';


describe('ListaComprasComponent', () => {
  let fixture: ComponentFixture<ListaComprasComponent>;
  let component: ListaComprasComponent;
  


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
