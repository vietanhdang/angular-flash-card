import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.css',
})
export class ControlsComponent {
  // TODO: Thêm @Output() để emit events: onPrevious, onNext, onShuffle
  @Input() currentIndex: number = 0;
  @Input() totalCards: number = 0;

  @Output() onPrevious = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();
  @Output() onShuffle = new EventEmitter<void>();

  get progress(): number {
    return this.totalCards > 0 ? ((this.currentIndex + 1) / this.totalCards) * 100 : 0;
  }

  get disablePrevious(): boolean {
    return this.currentIndex <= 0;
  }

  get disableNext(): boolean {
    return this.currentIndex >= this.totalCards - 1;
  }

  onPreviousClick() {
    this.onPrevious.emit();
  }

  onNextClick() {
    this.onNext.emit();
  }

  onShuffleClick() {
    this.onShuffle.emit();
  }
}
