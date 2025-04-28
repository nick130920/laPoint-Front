import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-service-cards',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Diseño Web -->
          <div class="bg-sky-600 rounded-lg overflow-hidden text-white hover:shadow-xl transition-shadow">
            <div class="p-8 flex flex-col items-center justify-center">
              <div class="size-20 bg-white rounded-full flex items-center justify-center mb-6">
                <i class="pi pi-desktop icon-size text-sky-500"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Diseña tu Página Web</h3>
              <p class="mb-6">Realiza tu plan personalizado con nosotros y lleva tu marca a un siguiente nivel con tu nueva imagen</p>
              <p-button label="Cotízala aquí" styleClass="bg-white! text-sky-950!"></p-button>
            </div>
          </div>

          <!-- Máquina Virtual -->
          <div class="bg-sky-600 rounded-lg overflow-hidden text-white hover:shadow-xl transition-shadow">
            <div class="p-8 flex flex-col items-center justify-center">
              <div class="size-20 bg-white rounded-full flex items-center justify-center mb-6">
                <i class="pi pi-server icon-size text-sky-500"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Obtén tu Máquina Virtual</h3>
              <p class="mb-6">Cualquier proyecto que quieras hacer realidad, estamos aquí para darte las herramientas para hacerlo realidad</p>
              <p-button label="Cotízala aquí" styleClass="bg-white! text-sky-950!"></p-button>
            </div>
          </div>

          <!-- Almacenamiento -->
          <div class="bg-sky-600 rounded-lg overflow-hidden text-white hover:shadow-xl transition-shadow">
            <div class="p-8 flex flex-col items-center justify-center">
              <div class="size-20 bg-white rounded-full flex items-center justify-center mb-6">
                <i class="pi pi-cloud icon-size text-sky-500"></i>
              </div>
              <h3 class="text-xl font-bold mb-4">Guarda tus documentos</h3>
              <p class="mb-6">Te brindamos espacio en nuestra nube, las primeras 200 GB GRATIS</p>
              <p-button label="Cotízala aquí" styleClass="bg-white! text-sky-950!"></p-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    .icon-size {
      font-size: 2.5rem !important;
    }
  `]
})
export class ServiceCardsComponent {}
