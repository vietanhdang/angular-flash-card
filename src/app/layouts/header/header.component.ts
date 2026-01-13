import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Card } from '../../models/card.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() fileLoaded = new EventEmitter<Card[]>();
  @Output() testModeChange = new EventEmitter<boolean>();
  @Input() testMode: boolean = false;
  fileName: string = 'No file selected';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files === null || input.files.length === 0) {
      console.log('No file selected');
      return;
    }
    const file = input.files[0];
    if (file.type !== 'application/json') {
      console.error('Please select a valid JSON file.');
      return;
    }

    this.loadFromFile(file);
  }

  loadFromFile(file: File): void {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        this.fileLoaded.emit(json as Card[]);
        this.fileName = file.name;
      } catch (error) {
        console.error('Error parsing JSON file:', error);
      }
    };

    reader.onerror = (e) => {
      console.error('Error reading file:', e);
    };

    reader.readAsText(file);
  }

  downloadSample() {
    fetch('sample_flashcards.json')
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sample_flashcards.json';
        a.click();
        window.URL.revokeObjectURL(url);
      });
  }

  onTestModeChange(isTestMode: boolean) {
    this.testModeChange.emit(isTestMode);
  }
}
