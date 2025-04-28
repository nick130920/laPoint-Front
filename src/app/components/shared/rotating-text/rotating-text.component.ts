import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative h-16 perspective-1000">
      <div
        [@rotateAnimation]="animationState"
        class="absolute w-fit text-center transform-gpu will-change-transform  bg-blue-900"
      >
        <span class="text-4xl font-bold text-white">{{ words[currentIndex] }}</span>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
    .perspective-1000 {
      perspective: 1000px;
    }
    .transform-gpu {
      transform-style: preserve-3d;
      backface-visibility: hidden;
      will-change: transform, opacity;
    }
  `],
  animations: [
    trigger('rotateAnimation', [
      state('in', style({
        opacity: 1,
        transform: 'rotateX(0deg) translateY(0)',
        filter: 'blur(0px)'
      })),
      state('out', style({
        opacity: 0,
        transform: 'rotateX(90deg) translateY(-20px)',
        filter: 'blur(10px)'
      })),
      transition('in => out', [
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)')
      ]),
      transition('out => in', [
        style({
          opacity: 0,
          transform: 'rotateX(-90deg) translateY(20px)',
          filter: 'blur(10px)'
        }),
        animate('500ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class RotatingTextComponent implements OnInit, OnDestroy {
  @Input() words: string[] = [];
  @Input() interval: number = 2000;

  currentIndex = 0;
  animationState = 'in';
  private intervalId: any;

  ngOnInit() {
    this.startRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startRotation() {
    this.intervalId = setInterval(() => {
      this.animationState = 'out';
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.words.length;
        this.animationState = 'in';
      }, 500);
    }, this.interval);
  }
}
