import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css',
})
export class StatsComponent {
  @Input() currentCard: number = 0;
  @Input() totalCards: number = 0;

  get progressPercent(): number {
    return Math.round(this.totalCards > 0 ? (this.currentCard / this.totalCards) * 100 : 0);
  }
}
