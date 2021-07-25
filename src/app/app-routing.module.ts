import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartseiteComponent} from "./startseite/startseite.component";

const routes: Routes = [
  {
    path: '',
    component: StartseiteComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
