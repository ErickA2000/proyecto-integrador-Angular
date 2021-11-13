import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/about/about.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
