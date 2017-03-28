
import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {ScreenService} from "../services/screen.service";
@Directive({
  selector: '[screenLarge]'
})
export class ScreenLarge {
  private _hasView = false;

  constructor(private viewContainter: ViewContainerRef,
              private template: TemplateRef<Object>,
              private screenSerive: ScreenService
  ) {
    screenSerive.resize$.subscribe(() => this._hasView = false);
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
