import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TopicPageRoutingModule } from './topic/topic-routing.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'task/:id',
    loadChildren: () => import('./topic/topic.module').then( m => m.TopicPageModule)
  },
  {
    path: 'add-topic',
    loadChildren: () => import('./add-topic/add-topic.module').then( m => m.AddTopicPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
