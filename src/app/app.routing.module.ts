import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { MasterComponent } from './master/master.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryComponent } from './category/category.component';
import { TypeComponent } from './type/type.component';
import { DealComponent } from './deal/deal.component';
import { DealPicComponent } from './deal-pic/deal-pic.component';
import { AuthGuard } from './auth/auth.guard';

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'master/:id',component:MasterComponent},
  {path:'header',component:HeaderComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'login',component:LoginComponent},
  {path:'rigister',component:RegisterComponent},
  {path:'category',component:CategoryComponent,canActivate: [AuthGuard]},
  {path:'type',component:TypeComponent,canActivate: [AuthGuard]},
  {path:'deal',component:DealComponent,canActivate: [AuthGuard]},
  {path:'dealPic',component:DealPicComponent,canActivate: [AuthGuard]}
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
