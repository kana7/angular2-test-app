import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
 } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template: `
      <ng-content></ng-content>
      <hr>
      <p #boundParagraph>{{bindable}}</p>
      <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  @ViewChild('boundParagraph')
  boundParagraph : HTMLElement;

  @ContentChild('boundContent')
  boundContent : HTMLElement;

  @Input() bindable = 1000;

  constructor() { }
  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnOnInit');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngAfterContentInit');
    this.log(this.boundContent);
  }

  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
    this.log(this.boundParagraph);
  }

  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  private log(hook){
    console.log(hook);
  }

}
