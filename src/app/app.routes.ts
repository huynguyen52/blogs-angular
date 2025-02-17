import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UsersComponent } from './pages/users/users.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { InboxComponent } from './pages/inbox/inbox.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },
      {
        path: 'inbox',
        component: InboxComponent,
      },
    ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
  },
];
