import { UserServiceService } from './user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ListSearchDeleteComponent } from './list-search-delete/list-search-delete.component';
import { FormsModule } from '@angular/forms';
import { UpdateformComponent } from './updateform/updateform.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterformComponent,
    UpdateformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
