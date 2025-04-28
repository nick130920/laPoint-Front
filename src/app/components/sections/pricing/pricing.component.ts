import { CommonModule, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

interface PlanFeature {
  name: string;
}

interface Plan {
  name: string;
  price: number;
  features: PlanFeature[];
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-16 bg-gradient-to-b from-sky-600 to-sky-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-5xl font-bold text-white text-center mb-2">Servidores</h2>
        <p class="text-xl text-white text-center mb-12">Tu primer mes es GRATIS</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (plan of plans; track $index) {
            <div class="bg-white rounded-3xl p-8 shadow-xl">
              <h3 class="text-2xl font-semibold mb-8 text-center text-black">{{plan.name}}</h3>
              <div class="text-center mb-8">
                <span class="text-6xl font-bold text-black">$ {{plan.price.toLocaleString()}}</span>
                <p class="text-gray-600 mt-2 ">por mes</p>
              </div>
              <div class="space-y-4 mb-8">
                <p class="text-lg text-black">Tu plan incluye</p>
                <div *ngFor="let feature of plan.features" class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-black">{{feature.name}}</span>
                </div>
              </div>
              <button class="w-full py-3 px-6 text-white bg-cyan-400 hover:bg-cyan-500 rounded-xl transition duration-200">
                Inicia ahora
              </button>
            </div>
          }
        </div>

        <div class="text-center mt-12">
          <button class="inline-flex items-center px-8 py-3 rounded-full bg-cyan-400 hover:bg-cyan-500 text-white font-medium transition duration-200">
            CREA TU PLAN PERSONALIZADO
          </button>
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
export class PricingComponent {
  plans: Plan[] = [
    {
      name: 'Basico',
      price: 428000,
      features: [
        { name: '8 GB RAM' },
        { name: '480 GB DISK' },
        { name: '4 VCPU' }
      ]
    },
    {
      name: 'Premium',
      price: 598000,
      features: [
        { name: '16 GB RAM' },
        { name: '480 GB DISK' },
        { name: '8 VCPU' }
      ]
    },
    {
      name: 'Profesional',
      price: 726000,
      features: [
        { name: '8 GB RAM' },
        { name: '1024 GB DISK' },
        { name: '8 VCPU' }
      ]
    }
  ];
}
