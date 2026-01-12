import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { HostListener } from '@angular/core';
// import { RouterLink } from '@angular/router';

import { HeaderComponent } from '../../layouts/header/header.component';

// Import các component con
import { StatsComponent } from './components/stats/stats.component';
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ModeToggleComponent } from './components/mode-toggle/mode-toggle.component';
import { TestSetupComponent } from './components/test-setup/test-setup.component';
import { TestQuestionComponent } from './components/test-question/test-question.component';
import { TestResultsComponent } from './components/test-results/test-results.component';

import { Card } from '../../models/card.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    // RouterLink,
    StatsComponent,
    FlashcardComponent,
    ControlsComponent,
    ModeToggleComponent,
    TestSetupComponent,
    TestQuestionComponent,
    TestResultsComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cards: Card[] = []; // Mảng chứa các thẻ từ vựng
  currentIndex: number = -1; // Chỉ số thẻ hiện tại
  isFlipped: boolean = false; // Trạng thái lật thẻ
  autoFlipEnabled: boolean = false; // Trạng thái bật/tắt tự động lật thẻ
  totalCards: number = 0; // Tổng số thẻ
  currentCard: Card | null = null;
  autoPlaySub?: Subscription;

  constructor(private cdr: ChangeDetectorRef) {}

  onFileLoaded(loadedCards: Card[]) {
    if (loadedCards.length === 0) {
      alert('The loaded file contains no cards.');
      return;
    }

    this.cards = loadedCards;
    this.currentIndex = 0;
    this.isFlipped = false;
    this.totalCards = this.cards.length;
    this.displayCard();
  }

  displayCard() {
    this.currentCard = this.cards[this.currentIndex];
    this.cdr.detectChanges();
  }

  handleFlip() {
    this.isFlipped = !this.isFlipped;
    this.cdr.detectChanges();
  }

  handlePrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isFlipped = false;
      this.displayCard();
    }
  }

  handleNext() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.isFlipped = false;
      this.displayCard();
    }
  }

  handleShuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    this.currentIndex = 0;
    this.isFlipped = false;
    this.displayCard();
  }

  handleAutoPlay() {
    if (this.autoPlaySub) {
      // Stop auto play
      this.autoPlaySub.unsubscribe();
      this.autoPlaySub = undefined;
    } else {
      // Start auto play
      this.autoPlaySub = interval(this.autoFlipEnabled ? 2000 : 3000).subscribe(() => {
        if (this.autoFlipEnabled && !this.isFlipped) {
          this.handleFlip();
        } else {
          this.handleNext();
        }
      }); // 2s with auto-flip, 3s without
    }
  }

  handleAutoFlip(enabled: boolean) {
    this.autoFlipEnabled = enabled;

    // If auto play is running, restart it with new timing
    if (this.autoPlaySub) {
      this.handleAutoPlay(); // Stop
      this.handleAutoPlay(); // Start with new timing
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyPress(event: KeyboardEvent) {
    if (!this.currentCard) return;

    switch (event.key) {
      case 'ArrowRight':
        this.handleNext();
        break;
      case 'ArrowLeft':
        this.handlePrevious();
        break;
      case ' ':
      case 'Enter':
        event.preventDefault();
        this.handleFlip();
        break;
      case 's':
      case 'S':
        this.handleShuffle();
        break;
    }
  }
}
