import { Component } from '@angular/core';
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
  editingItem: number | null = null; // Índice do item que está sendo editado na lista completa
  editingText: string = '';

  constructor(public shoppingListService: ShoppingListService) {}

  addItem() {
    if (this.newItem.trim()) {
      this.shoppingListService.addItem(this.newItem.trim());
      this.newItem = '';
    }
  }

  startEditing(index: number) {
    const unboughtItems = this.shoppingListService.getUnboughtItems();
    const itemIndex = this.shoppingListService.items().indexOf(unboughtItems[index]); // Pega o índice na lista completa
    this.editingItem = itemIndex; // Armazena o índice do item na lista completa
    this.editingText = unboughtItems[index].name; // Preenche o campo de edição com o texto atual do item
  }

  saveEdit(index: number) {
    if (this.editingText.trim()) {
      this.shoppingListService.editItem(index, this.editingText.trim()); // Atualiza o item na lista completa
      this.editingItem = null; // Limpa o índice de edição
      this.editingText = '';   // Limpa o texto da edição
    }
  }

  toggleBought(index: number, isBought: boolean) {
    const items = isBought 
      ? this.shoppingListService.getBoughtItems()
      : this.shoppingListService.getUnboughtItems();

    const itemIndex = this.shoppingListService.items().indexOf(items[index]);
    this.shoppingListService.toggleBought(itemIndex);
  }

  deleteItem(index: number, isBought: boolean) {
    const items = isBought 
      ? this.shoppingListService.getBoughtItems()
      : this.shoppingListService.getUnboughtItems();

    const itemIndex = this.shoppingListService.items().indexOf(items[index]);
    this.shoppingListService.deleteItem(itemIndex);
  }

  getUnboughtItems() {
    return this.shoppingListService.getUnboughtItems();
  }

  getBoughtItems() {
    return this.shoppingListService.getBoughtItems();
  }
}
