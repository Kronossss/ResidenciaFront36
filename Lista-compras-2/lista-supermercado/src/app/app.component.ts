import { Component } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  newItem: string = '';
  editingText: string = '';
  editingIndex: number | null = null; // Para editar itens

  constructor(private shoppingListService: ShoppingListService) {}

  // Adicionar item à lista
  addItem() {
    if (this.newItem.trim()) {
      const item = {
        id: 0, // ID gerado pelo backend
        title: this.newItem.trim(),
        userId: 1, // Exemplo: ID de um usuário logado
        included: false
      };
      this.shoppingListService.addItem(item).subscribe(() => {
        this.newItem = '';
        this.loadItems();
      });
    }
  }

  // Carregar todos os itens
  loadItems() {
    this.shoppingListService.getItems().subscribe(items => {
      console.log(items); // Verifique os itens retornados
    });
  }

  // Editar um item
  editItem(index: number) {
    if (this.editingText.trim()) {
      const item = {
        title: this.editingText.trim(),
        included: false,
        userId: 1, // Exemplo: ID de um usuário logado
        id: index // ID do item a ser editado
      };
      this.shoppingListService.editItem(index, item).subscribe(() => {
        this.editingText = '';
        this.loadItems();
      });
    }
  }

  // Alternar status de um item (comprado/não comprado)
  toggleItemStatus(item: any) {
    this.shoppingListService.toggleItemStatus(item).subscribe(() => {
      this.loadItems();
    });
  }

  // Obter itens não comprados
  getUnboughtItems() {
    this.shoppingListService.getUnboughtItems().subscribe(items => {
      console.log("Unbought Items:", items);
    });
  }

  // Obter itens comprados
  getBoughtItems() {
    this.shoppingListService.getBoughtItems().subscribe(items => {
      console.log("Bought Items:", items);
    });
  }
}