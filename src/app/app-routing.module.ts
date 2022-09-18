import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrumaCardComponent } from './components/truma-card/truma-card.component';
import { TrumaComponent } from './components/truma/truma.component';
import { TrumotComponent } from './components/trumot/trumot.component';

const routes: Routes = [
  {path: '', component: TrumaCardComponent},
  {path: 'truma-card', component: TrumaCardComponent},
  {path: 'trumot', component: TrumotComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
