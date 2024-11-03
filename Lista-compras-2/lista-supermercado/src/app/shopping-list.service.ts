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

  getItems(userId: number): Observable<ShoppingItem[]> {
    return this.http.get<ShoppingItem[]>(`${this.apiUrl}?userId=${userId}`);
  }

  addItem(item: ShoppingItem): Observable<ShoppingItem> {
    return this.http.post<ShoppingItem>(this.apiUrl, item);
  }

  deleteItem(itemId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${itemId}`);
  }

  toggleItemStatus(item: ShoppingItem): Observable<ShoppingItem> {
    return this.http.put<ShoppingItem>(`${this.apiUrl}/${item.id}`, {
      ...item,
      included: !item.included
    });
  }
}