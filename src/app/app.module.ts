import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutes } from './config/routes';

import { QueryService } from './services/query.service';
import { MetaService } from './services/meta.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { ArtistComponent } from './pages/artist/artist.component';
import { MusicComponent } from './pages/music/music.component';
import { SearchComponent } from './pages/search/search.component';
import { XPathComponent } from './pages/x-path/x-path.component';
import { HeadPanelComponent } from './common-components/head-panel/head-panel.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UploadComponent } from './pages/auth/partials/upload/upload.component';
import { ListComponent } from './pages/auth/partials/list/list.component';
import { UploadStateComponent } from './pages/auth/partials/upload-state/upload-state.component';
import { CustomDatePipe } from './pipe/custom-date.pipe';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ArtistComponent,
    MusicComponent,
    SearchComponent,
    XPathComponent,
    HeadPanelComponent,
    AuthComponent,
    UploadComponent,
    ListComponent,
    UploadStateComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [QueryService, AuthService, AuthGuard, CustomDatePipe, MetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
