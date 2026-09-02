import { Overlay } from '@angular/cdk/overlay';
import { inject, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private overlay = inject(Overlay);
  private injector = inject(Injector);

  open(data: { taskId: string; commentId: string }) {
    const ovlerlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),

      scrollStrategy: this.overlay.scrollStrategies.block(),
    });

    
  }
}
