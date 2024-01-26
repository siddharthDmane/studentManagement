import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes,RouterModule, } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { DatastoreService } from './datastore.service';
import { FetchComponent } from './fetch/fetch.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http'
import { HttpreqService } from './httpreq.service';

const routes: Routes =[
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"edit",component:EditComponent},
  {path:"fetch",component:FetchComponent},
  {path:"fetchUsers",component:UserComponent},
  {path:"fetchAdmins",component:AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    HomeComponent,
    FetchComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [DatastoreService,HttpreqService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
