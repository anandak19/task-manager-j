import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '@features/tasks/models/task.model';
import { TASK_STATUS_LABELS } from '@shared/constants/task-status.constants';

@Pipe({
  name: 'statusLabel',
})
export class StatusLabelPipe implements PipeTransform {
  transform(value: TaskStatus): unknown {
    if (!value) return '';

    return TASK_STATUS_LABELS[value] || value;
  }
}
