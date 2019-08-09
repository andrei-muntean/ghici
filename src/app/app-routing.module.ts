import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { RiddleViewComponent } from './riddle-view/riddle-view.component';
import { FinalViewComponent } from './final-view/final-view.component';

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
  },
  {
      path: 'finalview',
      component: FinalViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
