import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataProviderService } from './services/data-provider.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    DataProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
