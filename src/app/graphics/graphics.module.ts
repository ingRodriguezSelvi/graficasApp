  /* Angular Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  /* Componentes */
import { GraphicsRoutingModule } from './graphics-routing.module';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDoubleComponent } from './pages/barras-double/barras-double.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraphicBarraComponent } from './components/graphic-barra/graphic-barra.component';

  /* Librerias de terceros */
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    BarrasComponent,
    BarrasDoubleComponent,
    DonaComponent,
    DonaHttpComponent,
    GraphicBarraComponent
  ],
  imports: [
    CommonModule,
    GraphicsRoutingModule,
    NgChartsModule
  ]
})
export class GraphicsModule { }
