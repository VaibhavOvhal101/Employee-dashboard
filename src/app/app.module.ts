import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
// import { MainComponent } from './home/main/main.component'
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
// import { AuthGuard } from './auth.guard'
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { ConfirmationService, PrimeIcons } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, DialogBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HomeModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    PasswordModule,
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    PaginatorModule,
    InputTextModule,
    // MainComponent,
    Ng2SearchPipeModule,
    ConfirmDialogModule,
    TooltipModule,
    MessagesModule


  ],
  providers: [ServiceService, PrimeIcons, ConfirmationService],
  bootstrap: [AppComponent],
})
export class AppModule { }
