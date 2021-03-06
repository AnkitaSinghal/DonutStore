import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./donuts/donuts.module').then(m => m.DonutsModule),
        pathMatch: 'full',
    },
    {
        path: 'donuts/:donutId',
        loadChildren: () => import('./donut/donut.module').then(m => m.DonutModule),
    },
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
    { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
