import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, ButtonModule, CardModule],
  template: `
    <section class="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-8">
            Sobre Nosotros
          </h2>
          <p class="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Bienvenido a LaPoint, su socio de confianza en soluciones para centros de datos con más de 30 años de experiencia.
            Hoy en día, un almacenamiento seguro y confiable es crucial. Nuestras instalaciones de vanguardia ofrecen los más
            altos niveles de seguridad, eficiencia y disponibilidad. En LaPoint, ofrecemos espacio de centro de datos a medida
            y un soporte excepcional para impulsar el crecimiento de su negocio.
          </p>
        </div>

        <div class="mt-16 text-center">
          <button pButton
                  label="Conoce más sobre nosotros"
                  class="p-button-rounded p-button-lg bg-gradient-to-r from-cyan-500 to-blue-600 border-none hover:shadow-lg transition-shadow duration-300">
          </button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
    :host ::ng-deep {
      .p-button {
        background: linear-gradient(to right, var(--cyan-500), var(--blue-600));
        border: none;
        &:hover {
          background: linear-gradient(to right, var(--cyan-600), var(--blue-700));
        }
      }
    }
  `]
})
export class AboutUsComponent {}
