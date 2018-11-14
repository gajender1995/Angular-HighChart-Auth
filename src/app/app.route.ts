import { Routes , RouterModule  } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';

const route : Routes = [
  { path : 'login' , component : LoginComponent },
  { path : 'user' , component :  UserComponent    }, 
  { path : '**' , redirectTo : ''}
]


export const routing = RouterModule.forRoot(route);

//canActivate : [AuthGuard]