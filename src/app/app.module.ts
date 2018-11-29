import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './services/login/login.service';
import { HomeComponent } from './components/home/home.component';
import { LayoutFooterComponent } from './components/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { ListElementsComponent } from './components/elements/list-elements/list-elements.component';
import { RegisterComponent } from './components/register/register.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ListCartItemsComponent } from './components/cart/list-cart-items/list-cart-items.component';
import { AddElementComponent } from './components/elements/add-element/add-element.component';
import { UpdateElementComponent } from './components/elements/update-element/update-element.component';
import { DeleteElementComponent } from './components/elements/delete-element/delete-element.component';
import { LayoutOffersComponent } from './components/layout-offers/layout-offers.component';
import { LayoutFlyMenuComponent } from './components/layout-fly-menu/layout-fly-menu.component';

@NgModule({
  exports: [
    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ]
})
export class CustomMaterialModule { }


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    ListElementsComponent,
    AddElementComponent,
    UpdateElementComponent,
    DeleteElementComponent,
    RegisterComponent,
    TrackerComponent,
    WishlistComponent,
    ListCartItemsComponent,
    LayoutOffersComponent,
    LayoutFlyMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CustomMaterialModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
