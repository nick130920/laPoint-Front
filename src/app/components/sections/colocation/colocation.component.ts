import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ColocationPlanFeature {
  name: string;
}

interface ColocationPlan {
  name: string;
  price: number;
  subtitle: string;
  features: ColocationPlanFeature[];
}

@Component({
  selector: 'app-colocation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-gradient-to-b from-sky-600 to-sky-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl font-bold text-center mb-2">
          <span class="text-white">Servicios de </span>
          <span class="text-cyan-300">Colocación</span>
        </h2>
        <p class="text-xl text-white text-center mb-12">Obtén tu espacio</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          @for (plan of plans; track $index) {
            <div class="bg-white rounded-3xl p-8 shadow-xl">
              <h3 class="text-2xl font-semibold mb-8 text-center text-black">{{plan.name}}</h3>
              <div class="text-center mb-8">
                <span class="text-6xl font-bold text-black">$ {{plan.price.toLocaleString()}}</span>
                <p class="text-gray-600 mt-2">{{plan.subtitle}}</p>
              </div>
              <div class="space-y-4 mb-8">
                <p class="text-lg text-black">Tu plan incluye:</p>
                @for (feature of plan.features; track $index) {
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span class="text-black">{{feature.name}}</span>
                  </div>
                }
              </div>
              <button class="w-full py-3 px-6 text-white bg-cyan-400 hover:bg-cyan-500 rounded-xl transition duration-200">
                Inicia Ahora
              </button>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ColocationComponent {
  plans: ColocationPlan[] = [
    {
      name: 'Mensual',
      price: 495000,
      subtitle: 'por rack, por mes',
      features: [
        { name: 'Servicio al Cliente 24/7' },
        { name: 'Back Up' },
        { name: 'Libreria Personal' }
      ]
    },
    {
      name: 'Anual',
      price: 435000,
      subtitle: 'por rack, por mes',
      features: [
        { name: 'Servicio al Cliente 24/7' },
        { name: 'Back Up' },
        { name: 'Libreria Personal' }
      ]
    }
  ];
} 