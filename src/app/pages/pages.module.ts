import { NgModule } from '@angular/core';
import { NbCardModule, NbMenuModule } from '@nebular/theme';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from 'app/@theme/theme.module';
import { RepositorioModule } from './repositorio/repositorio.module';
import { ComposicionModule } from './composicion/composicion.module';

@NgModule({
    imports: [
        PagesRoutingModule,
        NbMenuModule,
        MiscellaneousModule,
        ThemeModule,
        NbCardModule,
        RepositorioModule,
        ComposicionModule,
    ],
  declarations: [
    PagesComponent,
    HomeComponent,
  ],
})
export class PagesModule {
}
