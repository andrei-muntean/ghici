import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { RiddleViewComponent } from './riddle-view/riddle-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homeview',
    pathMatch: 'full'
  },
  {
      path: 'homeview',
      component: HomeViewComponent
  },
  {
      path: 'riddleview',
      component: RiddleViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
