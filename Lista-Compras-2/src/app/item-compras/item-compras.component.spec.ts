import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComprasComponent } from './item-compras.component';

describe('ItemComprasComponent', () => {
  let component: ItemComprasComponent;
  let fixture: ComponentFixture<ItemComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
