import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'pages-view-transition-2',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title rootTitle="View Transition 2" />

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        width="200"
        height="300"
        style="view-transition-name: hero1"
      />

      <div class="fixed bottom-10 right-20 bg-purple-500 w-40 h-40 rounded"
      style="view-transition-name: hero2"></div>
    </section>
  `,
})
export default class ViewTransitionComponent2 {}
