import {Component} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {HlmSidebarInset} from "@spartan-ng/helm/sidebar";
import {provideIcons} from "@ng-icons/core";
import {lucideAlertOctagon, lucideCompass, lucideListCheck, lucideLogOut, lucideSettings2} from "@ng-icons/lucide";
import {SpartanAppSidebarInsetComponent} from "./sidebat-inset/spartan-app-sidebar-inset.component";
import {SpartanSiteHeaderInsetComponent} from "./sidebat-inset/spartan-site-header-inset.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-shell',
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        SpartanAppSidebarInsetComponent,
        SpartanSiteHeaderInsetComponent,
        HlmSidebarInset,
        RouterOutlet
    ],
    templateUrl: './app-shell.component.html',
    providers: [
        provideIcons({lucideLogOut, lucideCompass, lucideAlertOctagon, lucideSettings2, lucideListCheck})
    ]
})
export class AppShellComponent {

}
