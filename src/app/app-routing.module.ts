import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackComponent } from './components/stack/stack.component';
import { QueueComponent } from './components/queue/queue.component';
import { AppComponent } from './app.component';
const routes: Routes = [
{ path: 'stack', component: StackComponent },
{ path: 'queue', component: QueueComponent },
{ path: '', component: AppComponent},
{ path: '**', component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
