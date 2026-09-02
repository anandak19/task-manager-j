import { Component, output, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-comments-form',
  imports: [ReactiveFormsModule],
  templateUrl: './comments-form.component.html',
  styleUrl: './comments-form.component.scss',
})
export class CommentsFormComponent {
  readonly commentSubmitted = output<string>();
  readonly cancelled = output<void>();

  readonly commentForm = new FormGroup({
    text: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(500)],
    }),
  });

  readonly isSubmitted = signal(false);

  submitComment(): void {
    this.isSubmitted.set(true);

    if (this.commentForm.invalid) {
      this.commentForm.markAllAsTouched();
      return;
    }

    const { text } = this.commentForm.getRawValue();

    this.commentSubmitted.emit(text.trim());

    this.commentForm.reset();
    this.isSubmitted.set(false);
  }

  cancel(): void {
    this.commentForm.reset();
    this.isSubmitted.set(false);
    this.cancelled.emit();
  }

  get textError(): string {
    const text = this.commentForm.controls.text;

    if (!this.isSubmitted()) {
      return '';
    }

    if (text.hasError('required')) {
      return 'Comment is required';
    }

    if (text.hasError('maxlength')) {
      return 'Comment cannot exceed 500 characters';
    }

    return '';
  }
}
