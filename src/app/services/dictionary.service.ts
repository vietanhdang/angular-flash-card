import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DictionaryResponse } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) {}

  getDefinition(word: string): Observable<DictionaryResponse[]> {
    return this.http.get<DictionaryResponse[]>(`${this.apiUrl}${word}`);
  }
}
