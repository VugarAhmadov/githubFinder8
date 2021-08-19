import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Components
import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';

// Services
import { GithubService } from './services/github.service';

// FontAwesome
import { faSearch, faInfoCircle, faMapMarkerAlt, faEnvelope, faGlobe, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt} from '@fortawesome/free-regular-svg-icons';

// PrimeNG components
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    AutoCompleteModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch, faInfoCircle, faMapMarkerAlt, faEnvelope, faGlobe, faBuilding, faCalendarAlt);
  }
}
