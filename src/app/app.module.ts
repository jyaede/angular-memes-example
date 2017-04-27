import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import 'rxjs/Rx';

import { MemesService } from './memes.service';

import { AppComponent } from './app.component';
import { CreateComponent } from './modals/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [
    MemesService
  ],
  entryComponents: [
    CreateComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
