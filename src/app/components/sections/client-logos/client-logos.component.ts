import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-client-logos',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  template: `
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-semibold text-center text-white mb-8">
          Algunos de Nuestros Clientes
        </h2>
        <div class="overflow-hidden w-full">
            <div class="flex gap-20 scroll-logos">
              <ng-container *ngFor="let logo of logos">
                <div class="h-16 flex-none flex items-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img [src]="logo.src" [alt]="logo.alt" class="h-full w-auto">
                </div>
              </ng-container>

              <!-- Duplicamos para el efecto loop infinito -->
              <ng-container *ngFor="let logo of logos">
                <div class="h-16 flex items-center grayscale hover:grayscale-0 transition-all duration-300">
                  <img [src]="logo.src" [alt]="logo.alt" class="h-full w-auto">
                </div>
              </ng-container>
            </div>
          </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    .scroll-logos {
      animation: scrollLeft 20s linear infinite;
    }

    @keyframes scrollLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `]
})
export class ClientLogosComponent {
  logos = [
    { src: 'assets/logos/positiva.png', alt: 'Positiva' },
    { src: 'assets/logos/valor.png', alt: 'Valor' },
    { src: 'assets/logos/inder.png', alt: 'INDER' },
    { src: 'assets/logos/gobierno-colombia.png', alt: 'Gobierno de Colombia' }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
