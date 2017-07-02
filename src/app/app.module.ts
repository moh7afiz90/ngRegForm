import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'signIn', component: SignInComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}

  
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignInComponent,
    ContactComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
