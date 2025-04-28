import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RotatingTextComponent } from '../../shared/rotating-text/rotating-text.component';
import {StyleClass} from 'primeng/styleclass';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, RotatingTextComponent],
  template: `
    <section id="inicio" class="pt-52 pb-44 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="text-center md:text-left">
            <h1 class="text-7xl md:text-7xl font-bold mb-6">
              TODO EN UNO
              <app-rotating-text
                [words]="rotatingWords"
                [interval]="2000"
                class="block text-7xl md:text-7xl mt-2"
              ></app-rotating-text>
            </h1>
            <p class="text-3xl mb-8">Digitaliza tu negocio de la mano de LaPoint</p>
            <p-button styleClass="p-button-lg bg-white! text-sky-900! hover:bg-blue-50 text-2xl">
              Empieza HOY
            </p-button>
          </div>
          <div class="hidden md:block">
            <div class="relative">
              <div class="servers-grid opacity-20"></div>
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
    .servers-grid {
      height: 400px;
      width: 100%;
      background-image: url('data:image/svg+xml,%3Csvg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect x="20" y="20" width="160" height="40" rx="4" stroke="%23FFFFFF" stroke-width="2"/%3E%3Crect x="30" y="35" width="60" height="10" rx="2" fill="%23FFFFFF" fill-opacity="0.3"/%3E%3Ccircle cx="160" cy="40" r="4" fill="%23FFFFFF"/%3E%3Ccircle cx="145" cy="40" r="4" fill="%23FFFFFF"/%3E%3Crect x="20" y="80" width="160" height="40" rx="4" stroke="%23FFFFFF" stroke-width="2"/%3E%3Crect x="30" y="95" width="60" height="10" rx="2" fill="%23FFFFFF" fill-opacity="0.3"/%3E%3Ccircle cx="160" cy="100" r="4" fill="%23FFFFFF"/%3E%3Ccircle cx="145" cy="100" r="4" fill="%23FFFFFF"/%3E%3Crect x="20" y="140" width="160" height="40" rx="4" stroke="%23FFFFFF" stroke-width="2"/%3E%3Crect x="30" y="155" width="60" height="10" rx="2" fill="%23FFFFFF" fill-opacity="0.3"/%3E%3Ccircle cx="160" cy="160" r="4" fill="%23FFFFFF"/%3E%3Ccircle cx="145" cy="160" r="4" fill="%23FFFFFF"/%3E%3C/svg%3E');
      background-repeat: repeat;
      background-size: 200px 200px;
      animation: slide 20s linear infinite;
    }
    @keyframes slide {
      from {
        background-position: 0 0;
      }
      to {
        background-position: 0 400px;
      }
    }
  `]
})
export class HeroComponent {
  rotatingWords = ["Servicios Cloud", "Almacenamiento", "Servidores", "Seguridad", "Respaldo"];
}
