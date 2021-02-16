import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackComponent } from '../app/stack/stack.component';
import { AppComponent } from './app.component'
const routes: Routes = [  
{ path: 'stack', component: StackComponent },
{ path: '', component: AppComponent},
{ path: '**', component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
