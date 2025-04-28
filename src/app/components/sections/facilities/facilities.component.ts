import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import {Carousel} from 'primeng/carousel';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, GalleriaModule, Carousel],
  template: `
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Nuestras Instalaciones
          </h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Contamos con un Data Center Totalmente Potenciado Ubicado en Zona Franca, Colombia
          </p>
        </div>
        <p-carousel
          [value]="images"
          [numVisible]="4"
          [numScroll]="1"
          [circular]="true"
          [autoplayInterval]="13000"
          [showIndicators]="true"
          [showNavigators]="true"
        >
          <ng-template pTemplate="item" let-image>
            <div class="p-4 flex justify-center">
              <img
                [src]="image.src"
                [alt]="image.alt"
                class="rounded-2xl shadow-xl max-h-[300px] w-auto object-cover"
              />
            </div>
          </ng-template>
        </p-carousel>

      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FacilitiesComponent {
  images = [
    {
      src: 'assets/datacenter/rack1.jpg',
      alt: 'Rack de servidores con múltiples unidades'
    },
    {
      src: 'assets/datacenter/rack2.jpg',
      alt: 'Detalle de servidores en rack'
    },
    {
      src: 'assets/datacenter/pasillo.jpg',
      alt: 'Pasillo del centro de datos'
    },
    {
      src: 'assets/datacenter/rack3.jpg',
      alt: 'Vista lateral de rack de servidores'
    }
  ];
}
