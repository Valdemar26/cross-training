import {Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef} from '@angular/core';

import {RedButtonComponent} from './components/red-button/red-button.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('buttonContainer', {static: true, read: ViewContainerRef}) public buttonContainer: ViewContainerRef;
  componentRef: ComponentRef<any>;

  constructor(
    private viewContainerRef: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {

  }


  public generateDynamicRedButton(): void {
    this.buttonContainer.clear();

    const factory = this.resolver.resolveComponentFactory(RedButtonComponent);
    this.componentRef = this.buttonContainer.createComponent(factory);

    this.componentRef.instance.parentRef = this.componentRef;
  }
}
