import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Quote } from '../interface/quote';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private readonly http = inject(HttpClient);
  readonly quoteUrl = 'https://api.everrest.educata.dev/quote/random';

  getRandomQuote() {
    return this.http.get<Quote>(`${this.quoteUrl}`);
  }
}
