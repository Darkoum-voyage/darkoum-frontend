import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';  // Import your Dashboard component
import { AppRoutingModule } from './app-routing.module';  // Import AppRoutingModule
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule for HTTP requests
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DashboardComponent,  // Declare your Dashboard component
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,  // Import AppRoutingModule
        HttpClientModule,  // Import HttpClientModule
        FormsModule,  // Import FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
