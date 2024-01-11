import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoglalasokGETComponent } from './foglalasok-get/foglalasok-get.component';
import { FoglalasokPOSTComponent } from './foglalasok-post/foglalasok-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'foglalasokGET', component: FoglalasokGETComponent },
  { path: 'foglalasokPOST', component: FoglalasokPOSTComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
