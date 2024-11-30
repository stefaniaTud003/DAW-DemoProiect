import { Component, EventEmitter, Output } from '@angular/core';
import { TaskStatus } from '../task-status';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  statuses = Object.values(TaskStatus);
  @Output() selectedStatus: EventEmitter<TaskStatus> = new EventEmitter();

  selectStatus = (status: TaskStatus) => {
    this.selectedStatus.emit(status);
  }
}
