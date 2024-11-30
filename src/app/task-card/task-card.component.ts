import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { Task } from '../task';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField
  ],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task: Task;
}
