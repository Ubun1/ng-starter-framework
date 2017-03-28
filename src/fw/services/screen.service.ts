import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable()
export class ScreenService {

  private _resizeSource: Subject<null>;
  private _largeBreakePoint: number = 800;
  private _screenWidth: number = 1000;
  private _screenHeigh: number = 800;

  get resize$(): Observable<null> {
    return this._resizeSource.asObservable();
  }

  get screenWidth(): number {
    return this._screenWidth;
  }
  get screenHeigh(): number {
    return this._screenHeigh;
  }

  get largeBreakePoint(): number {
    return this._largeBreakePoint;
  }

  constructor() {
    try {
      this._resizeSource = new Subject<null>();
      this._screenHeigh = window.innerHeight;
      this._screenWidth = window.innerWidth;
      window.addEventListener('resize', (event) => {
        this._screenWidth = window.innerWidth;
        this._screenHeigh = window.innerHeight;
        this._resizeSource.next();
      })
    }
    catch (e) {
      //default values for heigh and weigh
    }
  }
    tisLarge() : boolean {
      return this._screenWidth >= this._largeBreakePoint;
    }
}
