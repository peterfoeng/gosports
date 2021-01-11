import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'sports', loadChildren: () => import('./sports/sports.module').then(m => m.SportsModule) },
    { path: 'sports/:id', loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
