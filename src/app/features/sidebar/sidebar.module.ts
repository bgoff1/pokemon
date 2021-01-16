import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from '@pipes';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

const materialModules = [
  MatSidenavModule,
  MatRippleModule,
  MatDividerModule,
  MatIconModule
];

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    PipesModule,
    ...materialModules
  ],
  exports: [SidebarComponent]
})
export class SidebarModule {}
