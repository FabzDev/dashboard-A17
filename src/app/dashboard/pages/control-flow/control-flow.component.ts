import { Component, signal } from '@angular/core';

@Component({
  selector: 'dashboard-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public controlSignal = signal(true);

  toggleButton(){
    this.controlSignal.update( value => !value )
  }
}
