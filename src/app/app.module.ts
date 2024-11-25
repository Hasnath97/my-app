import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ServerComponent } from './server/server.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DatablindingComponent } from './datablinding/datablinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventComponent } from './event/event.component';
import { EmplyeeComponent } from './emplyee/emplyee.component';
import { EmployeeeComponent } from './employeee/employeee.component';
import { StoreComponent } from './store/store.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { AmazonComponent } from './amazon/amazon.component';
import { MailComponent } from './mail/mail.component';
import { PinComponent } from './pin/pin.component';
import { WheatherComponent } from './wheather/wheather.component';
import { BlogComponent } from './blog/blog.component';
import { ImdbComponent } from './imdb/imdb.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SchoolComponent } from './school/school.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    ServerComponent,
    WelcomeComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DatablindingComponent,
    DirectivesComponent,
    EventComponent,
    EmplyeeComponent,
    EmployeeeComponent,
    StoreComponent,
    VehicleComponent,
    AccountComponent,
    AmazonComponent,
    MailComponent,
    PinComponent,
    WheatherComponent,
    BlogComponent,
    ImdbComponent,
    PokemonComponent,
    CreateVehicleComponent,
    CreateAccountComponent,
    SchoolComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
