import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl p-8 shadow-xl">
          <h2 class="text-5xl font-bold text-cyan-400 mb-12">Te Contactamos</h2>

          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700">
                Nombre <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                formControlName="nombre"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
                [class.border-red-500]="isFieldInvalid('nombre')"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Correo <span class="text-red-500">*</span>
              </label>
              <input
                type="email"
                formControlName="correo"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
                [class.border-red-500]="isFieldInvalid('correo')"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Mensaje <span class="text-red-500">*</span>
              </label>
              <textarea
                rows="4"
                formControlName="mensaje"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400"
                [class.border-red-500]="isFieldInvalid('mensaje')"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="w-32 py-3 px-6 text-white bg-cyan-400 hover:bg-cyan-500 rounded-xl transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                [disabled]="contactForm.invalid || isSubmitting"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    /* Estilos para los inputs */
    input, textarea {
     padding: 12px;
    }

    /* Animación del botón */
    button {
      transform: translateY(0);
      transition: transform 0.2s;
    }

    button:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
    }
  `]
})

export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private readonly fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && (field.dirty ) : false;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Aquí iría la lógica para enviar el formulario
      console.log(this.contactForm.value);

      // Simulamos el envío
      setTimeout(() => {
        this.isSubmitting = false;
        this.contactForm.reset();
      }, 1000);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }
}
