import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'pages-view-transition-1',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <shared-title rootTitle="View Transition 1" />

<section class="flex justify-start">

  <img
    srcset="https://picsum.photos/id/237/200/300"
    alt="Picsum"
    width="200"
    height="300"
  >

  <div
     style="width: 14rem; height: 14rem;"
     class="bg-blue-500"
  ></div>


</section>
  `
})
export default class ViewTransitionComponent1 {

}
