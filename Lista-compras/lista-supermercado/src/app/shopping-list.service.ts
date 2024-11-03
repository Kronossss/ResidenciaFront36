// src/app/shopping-list.service.ts

import { Injectable, signal } from '@angular/core';

interface ShoppingItem {
  name: string;
  bought: boolean;
}

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  items = signal<ShoppingItem[]>([]);

  addItem(item: string) {
    const currentItems = this.items();
    this.items.set([...currentItems, { name: item, bought: false }]);
  }

  editItem(index: number, newName: string) {
    const currentItems = this.items();
    currentItems[index].name = newName;
    this.items.set([...currentItems]);
  }

  toggleBought(index: number) {
    const currentItems = this.items();
    currentItems[index].bought = !currentItems[index].bought;
    this.items.set([...currentItems]);
  }

  deleteItem(index: number) {
    const currentItems = this.items();
    currentItems.splice(index, 1);
    this.items.set([...currentItems]);
  }

  getBoughtItems() {
    return this.items().filter(item => item.bought);
  }

  getUnboughtItems() {
    return this.items().filter(item => !item.bought);
  }
}
