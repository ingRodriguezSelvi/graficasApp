import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes  = [
  {
    path:'graphs',
    loadChildren: () => import('./graphics/graphics.module').then(module => module.GraphicsModule)
  },
  {
    path:'**',
    redirectTo: 'graphs'
  }
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports:  [RouterModule]
})
export class AppRoutingModule { }
