import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mode-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mode-toggle.component.html',
  styleUrl: './mode-toggle.component.css',
})
export class ModeToggleComponent {
  // TODO: Thêm @Output() để emit events: onAutoPlay, onAutoFlipChange
  // TODO: Thêm properties cho auto play và auto flip state
  @Output() onAutoPlay = new EventEmitter<void>();
  @Output() onAutoFlipChangeEvent = new EventEmitter<boolean>();

  onAutoPlayClick() {
    this.onAutoPlay.emit();
  }

  onAutoFlipChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.onAutoFlipChangeEvent.emit(inputElement.checked);
  }
}
