import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-red-button',
  templateUrl: './red-button.component.html',
  styleUrls: ['./red-button.component.scss']
})
export class RedButtonComponent implements OnInit {

  @Input() parentRef;

  public ngOnInit(): void {
    console.log(this.parentRef);
  }

  public destroyDynamicRedButton(): void {
    this.parentRef.destroy();
    this.parentRef = null;
  }
}
