import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-setup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test-setup.component.html',
  styleUrl: './test-setup.component.css',
})
export class TestSetupComponent {
  // TODO: Thêm @Output() để emit event khi start test
  // TODO: Thêm property để track số câu hỏi được chọn
}
