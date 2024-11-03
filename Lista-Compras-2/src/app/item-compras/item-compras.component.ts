import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComprasService } from '../compras.service';

@Component({
  selector: 'app-item-compras',
  templateUrl: './item-compras.component.html',
  styleUrls: ['./item-compras.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ItemComprasComponent {
  @Input() item: any;
  @Output() itemExcluido = new EventEmitter<void>();
  editMode: boolean = false;
  newName: string = '';

  constructor(private comprasService: ComprasService) {}

  editar() {
    this.editMode = true;
    this.newName = this.item.nome;
  }

  salvarEdicao() {
    if (this.newName) {
      this.comprasService.editarItem(this.item.id, this.newName).subscribe(() => {
        this.item.nome = this.newName;
        this.editMode = false;
      });
    }
  }

  cancelarEdicao() {
    this.editMode = false;
  }

  marcarComprado() {
    const itemId = this.item.id;
    console.log(`Tentando marcar como comprado item com ID: ${itemId}`);

    this.comprasService.marcarComprado(itemId, !this.item.comprado).subscribe({
      next: () => {
        this.item.comprado = !this.item.comprado;
        console.log(`Item com ID ${itemId} marcado como comprado.`);
      },
      error: (error) => {
        console.error(`Erro ao tentar marcar como comprado item com ID ${itemId}:`, error);
      }
    });
  }

  excluir() {
    const itemId = this.item.id;
    console.log(`Tentando excluir item com ID: ${itemId}`);

    this.comprasService.excluirItem(itemId).subscribe({
      next: () => {
        console.log(`Item com ID ${itemId} excluído com sucesso.`);
        this.itemExcluido.emit();
      },
      error: (error) => {
        console.error(`Erro ao tentar excluir item com ID ${itemId}:`, error);
      }
    });
  }
}







