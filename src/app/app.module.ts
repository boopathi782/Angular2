import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppoimentcreateComponent } from './appoimentcreate/appoimentcreate.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
// import { MyFilterPipePipe } from './pipes/my-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppoimentcreateComponent,
    /* MyFilterPipePipe */
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
