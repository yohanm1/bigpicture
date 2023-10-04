// openai.service.ts
import { Injectable } from '@angular/core';
import * as OpenAI from 'openai';
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  constructor(private settingsService: SettingsService) {}

  async generateText(prompt: string): Promise<string> {
    const apiKey = this.settingsService.getApiKey();
    const openai = new OpenAI(apiKey);
    
    const gptResponse = await openai.complete({
      engine: 'text-davinci-002',
      prompt: prompt,
      max_tokens: 150,
    });
    return gptResponse.choices[0].text.trim();
  }
}
