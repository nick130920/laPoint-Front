import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Lista de características -->
          <div class="space-y-8">
            <!-- Seguridad -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                  <i class="pi pi-lock text-2xl text-white"></i>
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                  Mantenemos su información Segura
                </h3>
                <p class="text-gray-600">
                  Nuestro sistema, que cuenta con la certificación internacional ISO 27001 mantiene su información segura
                </p>
              </div>
            </div>

            <!-- Servicio 24/7 -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                  <i class="pi pi-clock text-2xl text-white"></i>
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                  Servicio al cliente 24/7
                </h3>
                <p class="text-gray-600">
                  Estamos siempre para usted, todos los días, a todas horas
                </p>
              </div>
            </div>

            <!-- Backup -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center">
                  <i class="pi pi-database text-2xl text-white"></i>
                </div>
              </div>
              <div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-2">
                  Backup
                </h3>
                <p class="text-gray-600">
                  Toda tu información tiene un backup constante, protegiendo su información
                </p>
              </div>
            </div>
          </div>

          <!-- Imagen del Data Center -->
          <div class="relative">
            <div class="relative w-full h-[600px]">
              <div class="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(0,212,255,0.5)_0%,_transparent_90%)] blur-3xl rounded-full"></div>
              <img
                src="assets/datacenter.png"
                alt="Data Center LaPoint"
                class="relative w-full h-full object-contain"
              />
            </div>
            <!-- Efecto de brillo -->
<!--            <div class="absolute -inset-x-20 top-0 h-[600px] bg-radial from-cyan-400/30 to-blue-500/30 blur-3xl -z-10"></div>-->
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    :host ::ng-deep {
      .pi {
        font-weight: bold;
      }
    }
  `]
})
export class FeaturesComponent {}
