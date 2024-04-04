import { booleanAttribute, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-2xl font-medium mb-5 ">{{rootTitle}}</h1>`
})
export class TitleComponent {
  @Input({ required: true }) public rootTitle = 'Título';
  // @Input({ transform: booleanAttribute }) public withShadow=false;
}
