import { IndexComponent } from './web/index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ClientProductDetailComponent } from './web/client-product-detail/client-product-detail.component';
import { ClientProductsComponent } from './web/client-products/client-products.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'admin',
      //   pathMatch: 'full'
      // },
      // {
      //   path: '',
      //   component: ProfileComponent
      // },
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'phones',
        component: ClientProductsComponent
      },
      {
        path: 'phones/detail/:id',
        component: ClientProductDetailComponent
      }
    ]
  },
  {
    path: 'admin',
    component : LayoutAdminComponent,
    children : [
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/create',
        component: ProductFormComponent
      },{
        path: 'products/detail/:id',
        component : ProductDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
