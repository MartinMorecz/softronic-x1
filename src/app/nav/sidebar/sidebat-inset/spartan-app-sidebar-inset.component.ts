import {Component} from '@angular/core';
import {
  HlmSidebar,
  HlmSidebarContent,
  HlmSidebarFooter,
  HlmSidebarHeader,
  HlmSidebarMenu,
  HlmSidebarMenuButton,
  HlmSidebarMenuItem,
  HlmSidebarWrapper
} from "@spartan-ng/helm/sidebar";
import {NgIcon} from "@ng-icons/core";
import {NavMain} from "../shared/nav-main";
import {NavSecondary} from "../shared/nav-secondary";
import {NavUser} from "../shared/nav-user";
import {data} from "../shared/data";

@Component({
  selector: 'spartan-app-sidebar-inset',
  imports: [
    HlmSidebarWrapper,
    HlmSidebar,
    HlmSidebarHeader,
    HlmSidebarMenu,
    HlmSidebarMenuItem,
    HlmSidebarMenuButton,
    NgIcon,
    HlmSidebarContent,
    HlmSidebarFooter,
    NavMain,
    NavSecondary,
    NavUser
  ],
  template: `
    <div hlmSidebarWrapper>
      <hlm-sidebar variant="inset">
        <hlm-sidebar-header>
          <ul hlmSidebarMenu>
            <li hlmSidebarMenuItem>
              <a hlmSidebarMenuButton size="lg" href="#">
                <div
                    class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                >
                  <ng-icon name="lucideCommand" class="text-base"/>
                </div>
                <div class="grid flex-1 text-left text-sm leading-tight">
                  <span class="truncate font-medium">Softronic</span>
                  <span class="truncate text-xs">Device Monitoring Platform</span>
                </div>
              </a>
            </li>
          </ul>
        </hlm-sidebar-header>

        <hlm-sidebar-content>
          <spartan-nav-main [items]="data.navMain"/>
<!--          <spartan-nav-projects [projects]="data.projects"/>-->
          <spartan-nav-secondary class="mt-auto" [items]="data.navSecondary"/>
        </hlm-sidebar-content>
        <hlm-sidebar-footer>
          <spartan-nav-user [user]="data.user"/>
        </hlm-sidebar-footer>
      </hlm-sidebar>
      <ng-content/>
    </div>
  `,
  styles: ``,
})
export class SpartanAppSidebarInsetComponent {
  public readonly data = data;
}
