import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuillTextPipe } from '@core/pipes/quill-text/quill-text-pipe';
import { StatusLabelPipe } from '@core/pipes/status-label-pipe';
import { ITask } from '@features/tasks/models/task.model';

@Component({
  selector: 'app-task-card',
  imports: [DatePipe, StatusLabelPipe, QuillTextPipe, RouterLink],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: ITask;
}
