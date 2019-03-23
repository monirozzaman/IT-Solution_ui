import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './user/home/home.component';
import { GarmentsComponent } from './user/garments/garments.component';
import { MarketComponent } from './user/market/market.component';
import { ProfileComponent } from './user/profile/profile.component';
import { RentComponent } from './user/rent/rent.component';
import { IndexComponent } from './user/index/index.component';
import { JobsComponent } from './user/jobs/jobs.component';
import { NewsComponent } from './user/news/news.component';
import { BuynowComponent } from './user/buynow/buynow.component';
import { GraphicsComponent } from './user/graphics/graphics.component';
import { AdvertisementComponent } from './user/advertisement/advertisement.component';
import { TrainingComponent } from './user/training/training.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { DhakaComponent } from './user/dhaka/dhaka.component';
import { ChittagongComponent } from './user/chittagong/chittagong.component';
import { SylethComponent } from './user/syleth/syleth.component';
import { KhulnaComponent } from './user/khulna/khulna.component';
import { BarishalComponent } from './user/barishal/barishal.component';
import { MymensinghComponent } from './user/mymensingh/mymensingh.component';
import { RajshahiComponent } from './user/rajshahi/rajshahi.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'garments', component: GarmentsComponent},
  {path: 'market', component: MarketComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'rent', component: RentComponent},
  {path: 'index', component: IndexComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'buy', component: BuynowComponent},
  {path: 'graphics', component: GraphicsComponent},
  {path: 'advertisement', component: AdvertisementComponent},
  {path: 'training', component: TrainingComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},

  {path: 'dhaka', component: DhakaComponent},
  {path: 'chittagong', component: ChittagongComponent},
  {path: 'syleth', component: SylethComponent},
  {path: 'khulna', component: KhulnaComponent},
  {path: 'barishal', component: BarishalComponent},
  {path: 'mymensingh', component: MymensinghComponent},
  {path: 'rajshahi', component: RajshahiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
                    HomeComponent, 
                    GarmentsComponent, 
                    MarketComponent,
                    ProfileComponent,
                    RentComponent, 
                    IndexComponent, 
                    JobsComponent, 
                    NewsComponent, 
                    BuynowComponent,
                    GraphicsComponent,
                    AdvertisementComponent, 
                    TrainingComponent, 
                    RegistrationComponent, 
                    LoginComponent,
                    DhakaComponent,
                    ChittagongComponent,
                    SylethComponent,
                    KhulnaComponent,
                    BarishalComponent,
                    MymensinghComponent,
                    RajshahiComponent
                  ];
