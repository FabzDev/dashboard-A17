import { booleanAttribute, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl font-medium mb-5">{{rootTitle}}</h1>`,
  styles: ``
})
export class TitleComponent {
  @Input({ required: true }) public rootTitle = 'Título';
  // @Input({ transform: booleanAttribute }) public withShadow=false;
}
