import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatrizCAFPGComponent } from './matriz-ca-fpg/matriz-ca-fpg.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatrizMaqsWsSComponent } from './matriz-maqs-ws-s/matriz-maqs-ws-s.component';
import { ErrorComponent } from './error/error.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';
import { ErrorModalComponent } from './error-modal/error-modal.component';
import { WheelDirective } from './wheel.directive';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { AddTechnoModalComponent } from './add-techno-modal/add-techno-modal.component';
import { MatrizMseShComponent } from './matriz-mse-sh/matriz-mse-sh.component';
import { MatrizL751Component } from './matriz-l-751/matriz-l-751.component';
import { MatrizLPSSemiautoComponent } from './matriz-lps-semiauto/matriz-lps-semiauto.component';
import { MatrizLPSAutoComponent } from './matriz-lps-auto/matriz-lps-auto.component';
import { MatrizWSAComponent } from './matriz-wsa/matriz-wsa.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a la ruta de la pagina principal por defecto
  { path: 'home', component: HomePageComponent }, 
  { path: 'matriz-MSE-SH', component: MatrizMseShComponent },
  { path: 'matriz-L751', component: MatrizL751Component },
  { path: 'matriz-MAQS-WS-S', component: MatrizMaqsWsSComponent },
  { path: 'matriz-CA-FPG', component: MatrizCAFPGComponent },
  { path: 'matriz-LPS-SEMIAUTOMATICA', component: MatrizLPSSemiautoComponent },
  { path: 'matriz-LPS-AUTOMATICAS', component: MatrizLPSAutoComponent },
  { path: 'matriz-WSA', component: MatrizWSAComponent },
  { path: 'error', component: ErrorComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    MatrizCAFPGComponent,
    HomePageComponent,
    MatrizMaqsWsSComponent,
    ErrorComponent,
    ConfirmationModalComponent,
    SuccessModalComponent,
    ErrorModalComponent,
    WheelDirective,
    DeleteModalComponent,
    AddTechnoModalComponent,
    MatrizMseShComponent,
    MatrizL751Component,
    MatrizLPSSemiautoComponent,
    MatrizLPSAutoComponent,
    MatrizWSAComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
