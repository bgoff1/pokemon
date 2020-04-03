import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';

import { PipesModule } from '@pipes';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, MatTabsModule, RouterModule, PipesModule],
  exports: [FooterComponent]
})
export class FooterModule {}
