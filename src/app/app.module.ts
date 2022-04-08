import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminHeaderComponent } from './layout/admin/admin-header/admin-header.component';
import { AdminMainComponent } from './layout/admin/admin-main/admin-main.component';
import { AdminAsideComponent } from './layout/admin/admin-aside/admin-aside.component';
import { AdminFooterComponent } from './layout/admin/admin-footer/admin-footer.component';
import { ClientHeaderComponent } from './layout/client/client-header/client-header.component';
import { ClientFooterComponent } from './layout/client/client-footer/client-footer.component';
import { ClientMainComponent } from './layout/client/client-main/client-main.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { ClientAsideComponent } from './layout/client/client-aside/client-aside.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { BtnStatusComponent } from './components/btn-status/btn-status.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './product-form/product-form.component';
import { ClientProductsComponent } from './web/client-products/client-products.component';
import { ClientProductDetailComponent } from './web/client-product-detail/client-product-detail.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    AdminMainComponent,
    AdminAsideComponent,
    AdminFooterComponent,
    ClientHeaderComponent,
    ClientFooterComponent,
    ClientMainComponent,
    LayoutAdminComponent,
    ClientAsideComponent,
    LayoutClientComponent,
    UsersComponent,
    ProductsComponent,
    BtnStatusComponent,
    ProductFormComponent,
    ClientProductsComponent,
    ClientProductDetailComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
