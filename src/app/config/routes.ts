import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { IndexComponent } from '../pages/index/index.component';
import { ArtistComponent } from '../pages/artist/artist.component';
import { MusicComponent } from '../pages/music/music.component';
import { SearchComponent } from '../pages/search/search.component';
import { XPathComponent } from '../pages/x-path/x-path.component';
import { AuthComponent } from '../pages/auth/auth.component';
import { AuthGuard } from '../guards/auth.guard';
import { UploadComponent } from '../pages/auth/partials/upload/upload.component';
import { ListComponent } from '../pages/auth/partials/list/list.component';
import { UploadStateComponent } from '../pages/auth/partials/upload-state/upload-state.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'artist/:artist', component: ArtistComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'music', component: MusicComponent },
  { path: 'search', component: SearchComponent },
  { path: 'search/:q', component: SearchComponent },
  { path: 'login', component: XPathComponent },
  {
    path: 'panel', component: AuthComponent, canActivate: [AuthGuard], children: [
      { path: 'upload', component: UploadComponent },
      { path: 'table', component: ListComponent },
      { path: 'upload-state', component: UploadStateComponent },
      { path: 'upload-state/:page', component: UploadStateComponent }
    ]
  }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
