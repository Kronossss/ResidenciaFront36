import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ComprasService {

  private apiUrl = 'http://localhost:3000/shopping-list';

  constructor(private http: HttpClient) {}

  getItens(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  adicionarItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  editarItem(id: number, nome: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { nome });
  }

  marcarComprado(id: number, comprado: boolean): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, { comprado });
  }

  excluirItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
  
}

