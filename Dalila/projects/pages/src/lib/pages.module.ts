import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { HomepageComponent } from './homepage/homepage.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomepageComponent
  ],
  imports: [
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
