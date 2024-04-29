import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

export interface QRResponse {
  text: string;
  type: string;
  format: string;
  errorCorrectionLevel: string;
  result: string;
}
@Injectable({
  providedIn: 'root',
})
export class QRServiceService {
  private readonly http = inject(HttpClient);
  private readonly BACKEND_URL = 'https://api.everrest.educata.dev/qrcode';

  crateQr(text: string) {
    return this.http.post<QRResponse>(`${this.BACKEND_URL}/generate`, {
      text,
    });
  }
}
