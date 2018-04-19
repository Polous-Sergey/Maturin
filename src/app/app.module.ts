import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FoterComponent } from './foter/foter.component';
import { HeaderSearchMenuComponent } from './main-content/header-search-menu/header-search-menu.component';
import { HeaderMainMenuComponent } from './main-content/header-main-menu/header-main-menu.component';
import { CarouselTopComponent } from './main-content/carousel-top/carousel-top.component';


@NgModule({
    declarations: [
        AppComponent,
        TopMenuComponent,
        MainContentComponent,
        FoterComponent,
        HeaderSearchMenuComponent,
        HeaderMainMenuComponent,
        CarouselTopComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
