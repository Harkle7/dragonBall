import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Goku1Component } from './relacionados/padre-hijo/goku1/goku1.component';
import { Gohan1Component } from './relacionados/padre-hijo/gohan1/gohan1.component';
import { Goku2Component } from './relacionados/hijo-padre/goku2/goku2.component';
import { Gohan2Component } from './relacionados/hijo-padre/gohan2/gohan2.component';
import { Gohan3Component } from './relacionados/hermanos/gohan3/gohan3.component';
import { Goku3Component } from './relacionados/hermanos/goku3/goku3.component';
import { Goten3Component } from './relacionados/hermanos/goten3/goten3.component';

const routes: Routes = [
  { path: 'padre-hijo', component: Goku1Component },
  { path: 'hijo-padre', component: Goku2Component },
  { path: 'hermanos', component: Goku3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    Goku1Component,
    Gohan1Component,
    Goku2Component,
    Gohan2Component,
    Gohan3Component,
    Goku3Component,
    Goten3Component
  ]
})
export class AppRoutingModule {}
