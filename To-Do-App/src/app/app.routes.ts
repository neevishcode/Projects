import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path:"lazy-loading",
    loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule)
    }
];
