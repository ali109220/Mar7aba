import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { MarhabaService } from './marhaba.service';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Location } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';
import { DealComponent } from './deal/deal.component';
import { DealPicComponent } from './deal-pic/deal-pic.component';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    MasterComponent,
    DetailComponent,
    FooterComponent,
    CategoryComponent,
    TypeComponent,
    DealComponent,
    DealPicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([]),
    AppRoutingModule//,
    //FileSaver
  ],
  providers: [
    MarhabaService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
