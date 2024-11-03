import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComprasService } from '../compras.service';
import { ItemComprasComponent } from '../item-compras/item-compras.component';


@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ItemComprasComponent] // Certifique-se de importar o FormsModule
})

export class ListaComprasComponent implements OnInit {
  itens: any[] = [];

  constructor(private comprasService: ComprasService) {}

  ngOnInit() {
    this.loadItens();
  }

  adicionarItem(nome: string) {
    if (nome) {
      const newItem = { nome, comprado: false, userId: 1 }; // Adapte conforme necessário
      this.comprasService.adicionarItem(newItem).subscribe(() => {
        this.loadItens();
      });
    }
  }

  loadItens() {
    this.comprasService.getItens().subscribe(data => {
      this.itens = data;
    });
  }

  marcarComprado(id: number) {
    const item = this.itens.find(i => i.id === id);
    if (item) {
      this.comprasService.marcarComprado(id, !item.comprado).subscribe(() => {
        this.loadItens();
      });
    }
  }

  excluirItem(id: number) {
    this.comprasService.excluirItem(id).subscribe(() => {
      this.loadItens();
    });
  }


  editarItem(id: number, nome: string) {
    this.comprasService.editarItem(id, nome).subscribe(() => {
      this.loadItens();
    });
  }

}



