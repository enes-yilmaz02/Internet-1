import { UrunduzenlesilComponent } from './components/urunduzenlesil/urunduzenlesil.component';
import { KatduzenlesilComponent } from './components/katduzenlesil/katduzenlesil.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'katduzenlesil/:katId/:islem', component: KatduzenlesilComponent },
  { path: 'urunduzenlesil/:urunId/:islem', component: UrunduzenlesilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
