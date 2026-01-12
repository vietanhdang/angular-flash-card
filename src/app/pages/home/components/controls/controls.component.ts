import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() onPrevious = new EventEmitter<void>();
  @Output() onNext = new EventEmitter<void>();
  @Output() onShuffle = new EventEmitter<void>();

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
