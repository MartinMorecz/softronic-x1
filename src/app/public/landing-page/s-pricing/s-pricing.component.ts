import {Component, inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {SubscriptionComponent} from "../../subscription/subscription.component";
import {LandingpageService} from "../service/landingpage.service";

@Component({
  selector: 's-pricing',
  imports: [
    MatButton
  ],
  templateUrl: './s-pricing.component.html',
})
export class SPricingComponent {

  private dialog = inject(MatDialog);
  private landingpageService: LandingpageService = inject(LandingpageService);


  doSubscribe(){
    // const dialogRef = this.dialog.open(SubscriptionComponent,
    //     {
    //       width: '400px',
    //       minHeight: '600px'
    //     });
    // dialogRef.afterClosed().subscribe(result => {
    //   if (result) {
    //     console.log(`Dialog result: ${result}`);
    //   }
    // })
    this.landingpageService.joinWaitingList()
  }
}
