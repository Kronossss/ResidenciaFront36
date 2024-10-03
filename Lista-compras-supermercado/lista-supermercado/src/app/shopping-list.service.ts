import { Injectable, signal } from '@angular/core';

interface ShoppingItem {
  name: string;
  bought: boolean;
}

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  items = signal<ShoppingItem[]>([]);

  addItem(item: string) {
    const currentItems = this.items(); // Obtém os itens atuais
    this.items.set([...currentItems, { name: item, bought: false }]);
  }

  editItem(index: number, newName: string) {
    const currentItems = this.items();
    currentItems[index].name = newName;
    this.items.set([...currentItems]); // Atualiza o sinal com a nova lista
  }

  toggleBought(index: number) {
    const currentItems = this.items();
    currentItems[index].bought = !currentItems[index].bought;
    this.items.set([...currentItems]); // Atualiza o sinal
  }

  deleteItem(index: number) {
    const currentItems = this.items();
    currentItems.splice(index, 1); // Remove o item
    this.items.set([...currentItems]); // Atualiza o sinal com a lista nova
  }

  getBoughtItems() {
    return this.items().filter(item => item.bought);
  }

  getUnboughtItems() {
    return this.items().filter(item => !item.bought);
  }
}
