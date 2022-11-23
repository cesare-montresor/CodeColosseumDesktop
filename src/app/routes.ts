import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
    { path: 'editor', loadChildren: () => import('./views/editor/editor.module').then(m => m.EditorModule) },
];