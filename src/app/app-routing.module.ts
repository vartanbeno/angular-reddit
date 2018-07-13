import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ResultsComponent } from './results/results.component';
 
export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'result/:subreddits/:numberOfPosts/:sort', component: ResultsComponent },
  { path: 'result/:subreddits/:numberOfPosts/:sort/:timespan', component: ResultsComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
