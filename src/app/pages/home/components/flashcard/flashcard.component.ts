import { Component, EventEmitter, Input, Output, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card, DictionaryResponse } from '../../../../models/card.model';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.css',
})
export class FlashcardComponent {
  @Input() card: Card | null = null;
  @Input() dictionaryData: DictionaryResponse | null = null;
  @Input() isFlipped: boolean = false;
  @Output() flipCard = new EventEmitter<void>();

  isLoadingAudio: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  onFlip() {
    this.flipCard.emit();
  }

  playPronunciation(event: MouseEvent) {
    event.stopPropagation(); // ngăn click lan ra ngoài
    if (this.dictionaryData && this.dictionaryData.phonetics.length > 0) {
      const audioUrl = this.dictionaryData.phonetics.find((p) => p.audio)?.audio;
      if (audioUrl) {
        this.isLoadingAudio = true;
        const audio = new Audio(audioUrl);
        audio
          .play()
          .catch((error) => {
            console.error('Error playing audio:', error);
          })
          .finally(() => {
            setTimeout(() => {
              this.isLoadingAudio = false;
              this.cdr.detectChanges();
            }, 1000);
          });
      }
    }
  }

  get pronunciationAvailable(): boolean {
    return this.dictionaryData !== null && this.dictionaryData.phonetics.some((p) => p.audio);
  }
}
