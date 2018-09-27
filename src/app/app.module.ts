import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RecipesPage } from '../pages/recipes/recipes';
import { AboutPage } from '../pages/about/about';
import { FavoritesPage } from '../pages/favorites/favorites';
import { SettingsPage } from '../pages/settings/settings';
import { RecipeDetailPage } from '../pages/recipe-detail/recipe-detail';

import { RecipesService } from '../providers/recipes.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecipesPage,
    AboutPage,
    FavoritesPage,
    SettingsPage,
    RecipeDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecipesPage,
    AboutPage,
    FavoritesPage,
    SettingsPage,
    RecipeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RecipesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
