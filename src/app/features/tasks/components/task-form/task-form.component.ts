import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuillModule, QuillModules } from 'ngx-quill';
import { Delta } from 'quill/core';
import { ICreateTask, ITaskFormData, TaskStatus } from '@features/tasks/models/task.model';
import { futureOrTodayValidator, noWhitespaceValidator } from '@shared/validators/form.validators';
import { TASK_STATUS, TASK_STATUS_LABELS } from '@shared/constants/task-status.constants';

@Component({
  selector: 'app-task-form',
  imports: [QuillModule, ReactiveFormsModule, FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss',
})
export class TaskFormComponent implements OnInit {
  @Input() taskId: string | null = null;

  @Input() isLoading = false;
  @Input() formLabel: string = 'Save';
  @Output() submitTaskForm = new EventEmitter<ITaskFormData>();

  isSubmitted = signal(false);

  modules: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
    ],
  };

  readonly taskStatusLabels = TASK_STATUS_LABELS;
  readonly taskStatuses = TASK_STATUS;

  private _fb = inject(FormBuilder);

  taskForm = this._fb.group({
    title: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        noWhitespaceValidator,
      ],
    ],
    description: ['', [Validators.required, Validators.maxLength(100)]],
    deadline: ['', [Validators.required, futureOrTodayValidator]],
    status: ['PENDING', [Validators.required]],
  });

  submitForm() {
    this.isSubmitted.set(true);

    if (this.taskForm.valid) {
      const formData = this.taskForm.getRawValue() as ITaskFormData;
      console.log('Form Data:', formData);

      this.submitTaskForm.emit(formData);
    } else {
      this.taskForm.markAllAsTouched();
      this.taskForm.markAsDirty();
    }
  }

  // error getter
  get getTitleError(): string {
    const title = this.taskForm.controls.title;

    if (!this.isSubmitted()) {
      return '';
    }

    if (title.hasError('required')) {
      return 'Title is required';
    }

    if (title.hasError('whitespace')) {
      return 'Title cannot contain only whitespace';
    }

    if (title.hasError('minlength')) {
      return 'Title must be at least 3 characters';
    }

    if (title.hasError('maxlength')) {
      return 'Title cannot exceed 15 characters';
    }

    return '';
  }

  get getDescriptionError(): string {
    const description = this.taskForm.controls.description;

    if (!this.isSubmitted()) {
      return '';
    }

    if (description.hasError('required')) {
      return 'Title is required';
    }

    if (description.hasError('maxlength')) {
      return 'Description cannot exceed 100 characters';
    }

    return '';
  }

  get getDeadlineError(): string {
    const deadline = this.taskForm.controls.deadline;

    if (!this.isSubmitted()) {
      return '';
    }

    if (deadline.hasError('required')) {
      return 'Deadline is required';
    }

    if (deadline.hasError('pastDate')) {
      return 'Deadline cannot be in the past';
    }

    return '';
  }

  get getStatusError(): string {
    const status = this.taskForm.controls.status;

    if (!this.isSubmitted()) {
      return '';
    }

    if (status.hasError('required')) {
      return 'Status is required';
    }

    return '';
  }

  ngOnInit(): void {
    if (this.taskId) {
      // fetch task data
      // patch the from with fetched data
    }
  }
}
