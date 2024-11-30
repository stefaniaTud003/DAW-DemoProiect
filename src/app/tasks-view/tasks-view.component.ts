import { Component } from '@angular/core';
import { TaskGridComponent } from '../task-grid/task-grid.component';
import { Task } from '../task';
import { TaskStatus } from '../task-status';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-tasks-view',
  standalone: true,
  imports: [TaskGridComponent, TaskListComponent],
  templateUrl: './tasks-view.component.html',
  styleUrl: './tasks-view.component.scss'
})
export class TasksViewComponent {
  tasks: Task[] = [
  {
    id: "01",
    title: "task 1",
    description: "description of task 1",
    status: TaskStatus.ToDo
  },
  {
    id: "02",
    title: "task 2",
    description: "description of task 2",
    status: TaskStatus.InProgress
  },
  {
    id: "03",
    title: "task 3",
    description: "description of task 3",
    status: TaskStatus.Done
  }];
}