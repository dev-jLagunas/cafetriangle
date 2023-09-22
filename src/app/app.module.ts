import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { GalleryHomeComponent } from './gallery-home/gallery-home.component';
import { InfoComponent } from './info/info.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { GalleryMainComponent } from './gallery-main/gallery-main.component';
import { LandingComponent } from './landing/landing.component';
import { MenuFullComponent } from './menu-full/menu-full.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gallery', component: GalleryMainComponent },
  { path: 'full_menu', component: MenuFullComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    GalleryHomeComponent,
    InfoComponent,
    MenuHomeComponent,
    GalleryMainComponent,
    LandingComponent,
    MenuFullComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
