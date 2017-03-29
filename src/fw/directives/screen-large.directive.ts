
import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";
import {ScreenService} from "../services/screen.service";
import {Subscription} from "rxjs";
@Directive({
  selector: '[screenLarge]'
})
export class ScreenLarge implements OnDestroy{
  ngOnDestroy(): void {
    this._screenSubscription.unsubscribe();
  }
  private _hasView = false;
  private _screenSubscription: Subscription;
  constructor(private viewContainter: ViewContainerRef,
              private template: TemplateRef<Object>,
              private screenSerive: ScreenService
  ) {
    this._screenSubscription = screenSerive.resize$.subscribe(() => this.screenLarge = true);
  }

  @Input()
  set screenLarge(condition) {
      condition = this.screenSerive.screenWidth >=this.screenSerive.largeBreakePoint;

      if (condition && !this._hasView) {
        this._hasView = true;
        this.viewContainter.createEmbeddedView(this.template);
      }
      else if (!condition && this._hasView) {
        this._hasView = false;
        this.viewContainter.clear();
      }
  }
}
