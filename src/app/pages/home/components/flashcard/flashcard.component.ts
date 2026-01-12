import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Card } from '../../../../models/card.model';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrl: './flashcard.component.css',
})
export class FlashcardComponent {
  // TODO: Thêm @Input() để nhận card data từ parent
  // TODO: Thêm @Output() để emit events (flip, speaker click)
  // TODO: Định nghĩa properties: word, pronunciation, meaning, wordType
  @Input() card: Card | null = null;
  @Input() isFlipped: boolean = false;
  @Output() flipCard = new EventEmitter<void>();

  onFlip() {
    this.flipCard.emit();
  }
}
