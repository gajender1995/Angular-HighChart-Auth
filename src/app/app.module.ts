import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.route';
import { AuthService } from './login/auth.service';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartService } from './user/chart.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
