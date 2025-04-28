import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule],
  template: `
    <header class="fixed w-11/12 z-50 rounded-full bg-sky-800 backdrop-blur-sm shadow-sm mx-16 mt-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-14">
          <div class="flex-shrink-0">
            <a routerLink="/" class="flex items-center">
              <img src="assets/logos/logo.png" alt="LaPoint" class="h-7 w-auto" height="528">
            </a>
          </div>

          <nav class="hidden md:flex space-x-8 text-md">
            <a routerLink="/"
               routerLinkActive="text-blue-600"
               [routerLinkActiveOptions]="{exact: true}"
               class="text-white hover:text-blue-600 px-3 py-2 rounded-lg transition-colors">
              Inicio
            </a>
            <a routerLink="/servicios"
               routerLinkActive="text-blue-600"
               class="text-white hover:text-blue-600 px-3 py-2 rounded-lg transition-colors">
              Servicios
            </a>
            <a routerLink="/nosotros"
               routerLinkActive="text-blue-600"
               class="text-white hover:text-blue-600 px-3 py-2 rounded-lg transition-colors">
              Nosotros
            </a>

          </nav>

          <div class="flex items-center space-x-4">
            <a routerLink="/contacto"
               routerLinkActive="text-blue-600"
               class="bg-white text-blue-950 hover:text-blue-900 px-3 py-2 rounded-full transition-colors">
              Contáctanos
            </a>
            <!-- <button pButton
                     label="Iniciar Sesión"
                     class="p-button-text p-button-rounded">
             </button>
             <button pButton
                     label="Registrarse"
                     class="p-button-rounded bg-blue-600 hover:bg-blue-700">
             </button>-->
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {}
