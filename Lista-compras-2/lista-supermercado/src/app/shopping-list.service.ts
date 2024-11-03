import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ShoppingItem {
  id: number;
  title: string;
  userId: number;
  included: boolean;
}

@Injectable({ providedIn: 'root' })
export class ShoppingListService {

  private apiUrl = 'http://localhost:3000/shopping-list';

  constructor(private http: HttpClient) {}

  // Método para obter todos os itens
  getItems(): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(this.apiUrl);
  }

  // Método para adicionar um item
  addItem(item: ShoppingItem): Observable<ShoppingItem> {
    return this.http.post<ShoppingItem>(this.apiUrl, item);
  }

  // Método para editar um item
  editItem(itemId: number, item: ShoppingItem): Observable<ShoppingItem> {
    return this.http.put<ShoppingItem>(`${this.apiUrl}/${itemId}`, item);
  }

  // Método para alternar o status de um item (comprado/não comprado)
  toggleItemStatus(item: ShoppingItem): Observable<ShoppingItem> {
    return this.http.put<ShoppingItem>(`${this.apiUrl}/${item.id}`, {
      ...item,
      included: !item.included
    });
  }

  // Método para obter itens não comprados
  getUnboughtItems(): Observable<ShoppingItem[]> {
    return this.getItems().pipe(
      map(items => items.filter(item => !item.included))
    );
  }

  // Método para obter itens comprados
  getBoughtItems(): Observable<ShoppingItem[]> {
    return this.getItems().pipe(
      map(items => items.filter(item => item.included))
    );
  }
}