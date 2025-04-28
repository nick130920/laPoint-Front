import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { RatingModule } from 'primeng/rating';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CarouselModule, RatingModule, FormsModule],
  template: `
    <section class="py-16 bg-gradient-to-b from-white to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Encabezado -->
        <div class="text-center mb-16">
          <h2 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Nuestros Testimonios
          </h2>
          <p class="text-lg text-gray-600">
            Lo que dicen sobre nosotros
          </p>
        </div>

        <!-- Carrusel de Testimonios -->
        <div class="mb-20">
          <p-carousel 
            [value]="testimonials" 
            [numVisible]="3"
            [numScroll]="1" 
            [circular]="true"
            [autoplayInterval]="5000"
            [showNavigators]="true"
            [showIndicators]="true"
            [responsiveOptions]="responsiveOptions"
            styleClass="custom-carousel"
          >
            <ng-template let-testimonial pTemplate="item">
              <div class="p-4">
                <div class="bg-white rounded-2xl shadow-lg p-6 h-full">
                  <div class="flex flex-col h-full">
                    <div class="mb-4 text-cyan-500 text-4xl">
                      <i class="pi pi-quote-left"></i>
                    </div>
                    <p class="text-gray-600 mb-6 flex-grow">
                      {{ testimonial.comment }}
                    </p>
                    <div>
                      <h4 class="text-xl font-semibold text-gray-900 mb-1">
                        {{ testimonial.name }}
                      </h4>
                      <p class="text-gray-500 mb-2">
                        {{ testimonial.company }}
                      </p>
                      <p-rating 
                        [ngModel]="testimonial.rating" 
                        [readonly]="true" 
                        [stars]="5"
                    
                      ></p-rating>
                    </div>
                  </div>
                </div>
              </div>
            </ng-template>
          </p-carousel>
        </div>

        <!-- Estadísticas -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-500 mb-2">30+</div>
            <p class="text-gray-600">Años de Experiencia</p>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-500 mb-2">900000+</div>
            <p class="text-gray-600">Usuarios Activos</p>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-500 mb-2">300+</div>
            <p class="text-gray-600">Clientes Satisfechos</p>
          </div>
          <div class="p-6">
            <div class="text-4xl font-bold text-cyan-500 mb-2">50+</div>
            <p class="text-gray-600">Soluciones de software de vanguardia</p>
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
      .p-carousel-prev,
      .p-carousel-next {
        background: white;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        color: #0891b2;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        &:hover {
          background: #f0f9ff;
          color: #0e7490;
        }
        &:focus {
          box-shadow: 0 0 0 2px #e0f2fe;
        }
      }
      
      .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
        color: #06b6d4;
      }
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      comment: 'Las soluciones en la nube de LaPoint han transformado nuestras operaciones comerciales. Sus servicios confiables y seguros nos han permitido escalar sin esfuerzo',
      name: 'Luis Davila',
      company: 'Lotería de Bogotá',
      rating: 5
    },
    {
      comment: 'Asociarnos con LaPoint ha sido un cambio radical. Su soporte 24/7 y sus robustos sistemas de respaldo nos brindan tranquilidad',
      name: 'Patricia Luango',
      company: 'Para la Ciudad de Bello',
      rating: 5
    },
    {
      comment: 'Gracias al almacenamiento en la nube escalable de LaPoint, hemos optimizado nuestra gestión de datos y reducido los costos significativamente.',
      name: 'Julio Cesar Franco',
      company: 'Para la CAR de Cundinamarca',
      rating: 5
    },
    {
      comment: 'Las soluciones de nube híbrida de LaPoint se integraron perfectamente con nuestra infraestructura existente, mejorando nuestro rendimiento y seguridad.',
      name: 'Julian',
      company: 'Para la Lotería de Medellín',
      rating: 5
    },
    {
      comment: 'Los servicios de coubicación que ofrece LaPoint son de primera categoría. Sus instalaciones de vanguardia garantizan que nuestros datos estén siempre seguros y accesibles.',
      name: 'Daniel Jaramillo',
      company: 'CEO de AmericaTec',
      rating: 5
    },
    {
      comment: 'Con los servicios de gestión de LaPoint, podemos centrarnos en nuestro negocio principal mientras ellos gestionan nuestra infraestructura de TI de manera eficiente.',
      name: 'Federico Jaramillo',
      company: 'CEO de Dataware',
      rating: 5
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];
} 