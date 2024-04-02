import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'dashboard-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public controlSignal = signal(true);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Quik', 'React']);
  public emptyFrameworks = signal([]);

  toggleButton(){
    this.controlSignal.update( value => !value )
  }
}
