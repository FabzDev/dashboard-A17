import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'dashboard-change-detection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``,
})
export default class ChangeDetectionComponent {
  public frameworkAsProperty = { framework: 'Angular', release: '2016' };
  public frameworkAsSignal = signal({ framework: 'Angular', release: 2016 });
  public frameworkAsTitle = computed( () => `Framework: ${this.frameworkAsSignal().framework}`)
  constructor(){
    setTimeout(() => {

      console.log('done');
      this.frameworkAsSignal.update( value => ({...value, framework:'SolidJs'}))

    }, 3000);
  }
}
