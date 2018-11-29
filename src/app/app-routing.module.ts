import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ListElementsComponent } from './components/elements/list-elements/list-elements.component';
import { RegisterComponent } from './components/register/register.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ListCartItemsComponent } from './components/cart/list-cart-items/list-cart-items.component';
import { AddElementComponent } from './components/elements/add-element/add-element.component';
import { UpdateElementComponent } from './components/elements/update-element/update-element.component';
import { DeleteElementComponent } from './components/elements/delete-element/delete-element.component';

const childRoutes: Routes = [
  { path: 'elements', component: ListElementsComponent },
  { path: 'elements/add', component: AddElementComponent },
  { path: 'elements/:id/update', component: UpdateElementComponent },
  { path: 'elements/:id/delete', component: DeleteElementComponent },
  { path: 'tracker', component: TrackerComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: ListCartItemsComponent }
];

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], children: childRoutes },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
