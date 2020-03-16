import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from './sidebar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatSidenavModule,
    MatRippleModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {}
