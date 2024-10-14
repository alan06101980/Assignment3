import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { MarketModule } from './modules/market/market.module';
import { CoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    MarketModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
