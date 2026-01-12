import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-question.component.html',
  styleUrl: './test-question.component.css',
})
export class TestQuestionComponent {
  // TODO: Thêm @Input() để nhận question data, current question, total
  // TODO: Thêm @Output() để emit events: onAnswer, onNext
  // TODO: Định nghĩa properties: word, pronunciation, answers[], selectedAnswer
}
