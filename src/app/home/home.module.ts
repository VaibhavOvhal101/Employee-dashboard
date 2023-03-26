import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainComponent } from './main/main.component'
import { HomeroutingModule } from './home-routing.module'

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, HomeroutingModule],
  exports: [MainComponent],
})
export class HomeModule {}
