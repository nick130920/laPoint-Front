import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutUsComponent } from './components/sections/about/about-us.component';
import { ClientLogosComponent } from './components/sections/client-logos/client-logos.component';
import { CloudServicesComponent } from './components/sections/cloud-services/cloud-services.component';
import { ColocationComponent } from './components/sections/colocation/colocation.component';
import { ContactComponent } from "./components/sections/contact/contact.component";
import { FacilitiesComponent } from './components/sections/facilities/facilities.component';
import { FeaturesComponent } from './components/sections/features/features.component';
import { HeroComponent } from './components/sections/hero/hero.component';
import { PricingComponent } from './components/sections/pricing/pricing.component';
import { ServiceCardsComponent } from './components/sections/service-cards/service-cards.component';
import { ServicesComponent } from './components/sections/services/services.component';
import { TestimonialsComponent } from './components/sections/testimonials/testimonials.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ClientLogosComponent,
    ServiceCardsComponent,
    AboutUsComponent,
    ServicesComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FacilitiesComponent,
    PricingComponent,
    CloudServicesComponent,
    ColocationComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-header></app-header>
    <main>
      <div class="bg-gradient-to-b from-cyan-500 to-blue-500">
        <app-hero></app-hero>
        <app-client-logos></app-client-logos>
      </div>
      <app-service-cards></app-service-cards>
      <app-about-us></app-about-us>
      <app-services></app-services>
      <app-features></app-features>
      <app-testimonials></app-testimonials>
      <app-facilities></app-facilities>
      <app-pricing></app-pricing>
      <app-cloud-services></app-cloud-services>
      <app-colocation></app-colocation>
      <app-contact></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class AppComponent {
  title = 'LaPoint';
}
