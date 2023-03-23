import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: 'content',
    component: ContentComponent,
    data: {
      title: 'content'
    }
  },
  {
    path: 'content/1',
    component: ContentComponent,
    data: {
      title: 'content 1',
    },
  },
  {
    path: 'content/2',
    component: ContentComponent,
    data: {
      title: 'content 2',
    },
  },
  {
    path: 'content/1/category/2',
    component: ContentComponent,
    data: {
      title: 'content 1 category 2',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
