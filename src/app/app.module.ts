import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { NetworkGraphComponent } from './components/network-graph/network-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    NetworkGraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
