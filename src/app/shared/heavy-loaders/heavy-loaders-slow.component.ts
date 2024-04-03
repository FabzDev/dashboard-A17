import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `<section [ngClass]="['w-full h-[600px]', cssClass]"></section>`,
})
export class HeavyLoadersSlowComponent {

  @Input({required: true})
  public cssClass!: string;

  constructor(){
    console.log('HeavyLoader Slow Component');
    const now = Date.now();
    while(Date.now() - now < 3000 ){}
    console.log('HeavyLoader end');
  }

}
