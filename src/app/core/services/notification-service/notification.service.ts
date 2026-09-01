import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

export interface ConfirmOptions {
  title: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  confirm(options: ConfirmOptions) {
    return Swal.fire({
      title: options.title,
      text: options.text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: options.confirmButtonText ?? 'Confirm',
      cancelButtonText: options.cancelButtonText ?? 'Cancel',
    }).then((result) => result.isConfirmed);
  }

  success(text: string = 'Success') {
    Swal.fire({
      icon: 'success',
      title: text,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
