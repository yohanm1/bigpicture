// settings.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private apiKey: string = "";

  saveApiKey(apiKey: string): void {
    this.apiKey = apiKey;
    // TODO: save data to backend service
  }

  getApiKey(): string {
    return this.apiKey;
    // TODO: get data from backend service
  }
}
