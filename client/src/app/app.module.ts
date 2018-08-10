import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {BackendService} from './backend.service';
import {TicketsModule} from './tickets/tickets.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import {PageNotFoundComponent} from './NotFound/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TicketsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
