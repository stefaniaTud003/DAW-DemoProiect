import { Component,Input } from '@angular/core';
import { Task } from '../task';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() tasks: Task[];
}
