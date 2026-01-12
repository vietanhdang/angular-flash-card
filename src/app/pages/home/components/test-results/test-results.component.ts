import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-results.component.html',
  styleUrl: './test-results.component.css',
})
export class TestResultsComponent {
  // TODO: Thêm @Input() để nhận kết quả test, wrong answers
  // TODO: Thêm @Output() để emit events: onReviewMistakes, onRetryMistakes, onNewTest, onBackToStudy
  // TODO: Định nghĩa properties: score, correctAnswers, totalQuestions, grade
}
