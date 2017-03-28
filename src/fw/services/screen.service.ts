import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {serializePaths} from "@angular/router/src/url_tree";

@Injectable()
export class ScreenService {

  private _resizeSource: Subject<null>;
  private _largeBreakePoints: number = 800;
  private _screenWidth: number = 1000;
  private _screenHeigh: number = 800;

  get resize$(): Observable<null> {
    return this._resizeSource.asObservable();
  }

  get screenWidth(): number {
    return this._sreenWidth;
  }
  get screenHeigh(): number {
    return this._screenHeigh;
  }

  get largeBreakePoints(): number {
    return this._largeBreakePoints;
  }

  constructor() {
    try {
      this._resizeSource = new Subject<null>();
      this._screenHeigh = window.innerHeight;
      this._screenWidth = window.innerWidth;
      window.addEventListener('recize', (event) => {
        this._sreenWidth = window.innerWidth;
        this._screenHeigh = window.innerHeight;
        this._resizeSource.next();
      })
    }
    catch (e) {
      //default values for heigh and weigh
    }
  }
    isLarge() : boolean {
      return this._screenWidth >= this._largeBreakePoints;
    }
}
