import { ClientProductDetailComponent } from './web/client-product-detail/client-product-detail.component';
import { ClientProductsComponent } from './web/client-products/client-products.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      // {
      //   // path: '',
      //   // redirectTo: 'phones',
      //   // pathMatch: 'full'
      // },
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
