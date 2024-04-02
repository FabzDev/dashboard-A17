import { Component, Input, signal, WritableSignal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'dashboard-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public controlSignal = signal(true);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Quik', 'React']);
  public emptyFrameworks = signal([]);

  public controlFlowTitle = signal<string>('Control Flow');

  toggleButton(){
    this.controlSignal.update( value => !value )
  }
}
