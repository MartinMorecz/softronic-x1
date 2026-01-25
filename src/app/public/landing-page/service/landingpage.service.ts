import {inject, Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WaitingListComponent} from "../waiting-list/waiting-list.component";

@Injectable({
  providedIn: 'root',
})
export class LandingpageService {

  private dialog = inject(MatDialog);

  joinWaitingList() {
      this.dialog.open(WaitingListComponent, {
        width: '425px',         // matches sm:max-w-[425px]
        maxWidth: 'calc(100vw - 32px)',
        autoFocus: false,       // feels more like shadcn
        restoreFocus: true,
        panelClass: [
          'softronic-dialog-panel', // custom class for Tailwind styling
        ],
      });
  }

  getInvolved() {
    this.dialog.open(WaitingListComponent, {
      width: '425px',         // matches sm:max-w-[425px]
      maxWidth: 'calc(100vw - 32px)',
      autoFocus: false,       // feels more like shadcn
      restoreFocus: true,
      panelClass: [
        'softronic-dialog-panel', // custom class for Tailwind styling
      ],
    });
  }
}
