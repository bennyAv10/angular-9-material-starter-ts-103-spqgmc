import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { FirendListComponent } from './firend-list/firend-list.component';
import { FriendListModule } from './firend-list/friend-list.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NewsFeedModule,
    FriendListModule,
    RouterModule.forRoot([
      { path: '', component: NewsFeedComponent },
      { path: 'dog/:id', component: NewsFeedComponent },
      { path: 'friends', component: FirendListComponent },
    ]),
    NavBarModule,
  ],
})
export class AppModule {}
