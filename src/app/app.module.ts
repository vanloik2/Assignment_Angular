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
    LayoutAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
