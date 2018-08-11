import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import{HttpClientModule} from "@angular/common/http"
import{RouterModule,Routes} from "@angular/router"


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppService } from './app.service';
import { SampleComponent } from './sample/sample.component';



@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SampleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"home",component:TasksComponent},
      {path:"sample",component:SampleComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
