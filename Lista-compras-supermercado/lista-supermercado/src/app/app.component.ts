import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newItem: string = '';
  editingItem: number | null = null;
  editingText: string = '';

  constructor(public shoppingListService: ShoppingListService) {}

  addItem() {
    if (this.newItem.trim()) {
      this.shoppingListService.addItem(this.newItem.trim());
      this.newItem = '';
    }
  }

  startEditing(index: number) {
    this.editingItem = index;
    this.editingText = this.shoppingListService.items()[index].name; // Correção aqui
  }

  saveEdit(index: number) {
    if (this.editingText.trim()) {
      this.shoppingListService.editItem(index, this.editingText.trim());
      this.editingItem = null;
      this.editingText = '';
    }
  }

  toggleBought(index: number) {
    this.shoppingListService.toggleBought(index);
  }

  deleteItem(index: number) {
    this.shoppingListService.deleteItem(index);
  }
}
