import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PipesModule } from '@pipes';
import { FooterComponent } from './footer.component';

const materialModules = [MatTabsModule];

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, ...materialModules, PipesModule],
  exports: [FooterComponent]
})
export class FooterModule {}
