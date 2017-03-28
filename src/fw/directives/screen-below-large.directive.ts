
import {Directive, Input, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";
import {ScreenService} from "../services/screen.service";
import {Subscription} from "rxjs";
@Directive({
  selector: '[screenLarge]'
})
export class ScreenBelowLarge implements OnDestroy{
  ngOnDestroy(): void {
    this._screenSubsription.unsubscribe();
  }
  private _hasView = false;
  private _screenSubsription: Subscription;

  constructor(private viewContainter: ViewContainerRef,
              private template: TemplateRef<Object>,
              private screenSerive: ScreenService
  ) {
    this._screenSubsription = screenSerive.resize$.subscribe(() => this._hasView = false);
  }

  @Input()
  set screenLarge(condition) {
    condition = this.screenSerive.screenWidth < this.screenSerive.largeBreakePoint;

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
