import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, CardModule],
  template: `
    <section class="py-16 bg-gradient-to-b from-white to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Descubra Nuestros Servicios
          </h2>
          <p class="text-lg text-gray-600">
            Te brindamos soluciones personalizadas y seguras para tu nube
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Servicios de colocación -->
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <div class="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <i class="pi pi-server icon-size text-white"></i>
              </div>
              <h3 class="text-2xl font-semibold text-cyan-500 mb-4">
                Servicios de colocación de servidores y administración
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Servicios de coubicación seguros y escalables con vigilancia 24/7, acceso biométrico y extinción de incendios.
                Opciones de espacio flexibles: desde servidores individuales hasta suites completas. Las conexiones de red y
                alimentación redundantes garantizan el máximo tiempo de actividad y fiabilidad.
              </p>
            </div>
          </div>

          <!-- Servicios de Hosting -->
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <div class="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <i class="pi pi-globe icon-size text-white"></i>
              </div>
              <h3 class="text-2xl font-semibold text-cyan-500 mb-4">
                Servicios de Hosting y diseño de Pagina Web
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Te acompañamos en el desarrollo digital de tu negocio de principio a fin. Planeamos la mejor manera de estar
                en la web de una manera eficiente para captar clientes y nosotros mismos hacemos el hosting de tu sitio web.
              </p>
            </div>
          </div>

          <!-- Servicios de Nube -->
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <div class="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <i class="pi pi-cloud icon-size text-white"></i>
              </div>
              <h3 class="text-2xl font-semibold text-cyan-500 mb-4">
                Servicios de Nube
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Las soluciones de nube híbrida se integran con su infraestructura existente. Almacenamiento en la nube
                escalable y VPS: alternativas rentables y fiables a los servidores físicos.
              </p>
            </div>
          </div>

          <!-- Servicios de Red -->
          <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="p-6">
              <div class="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <i class="pi pi-sitemap icon-size text-white"></i>
              </div>
              <h3 class="text-2xl font-semibold text-cyan-500 mb-4">
                Servicios de Red
              </h3>
              <p class="text-gray-600 leading-relaxed">
                Conectividad de alta velocidad para un rendimiento óptimo. Protección contra DDoS e interconexión fluida con
                los principales proveedores y redes de la nube para una mayor conectividad y seguridad.
              </p>
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
      font-size: 2rem !important;
    }
  `]
})
export class ServicesComponent {}
