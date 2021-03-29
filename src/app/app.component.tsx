import React from 'react';
import { Component } from 'react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { timer } from 'rxjs';

import { MdlPocGameArea } from '../game-area/game-area.component';

import './app.scss';

class Test {
  @observable
  private _test = 0;

  get test(): number {
    return this._test;
  }

  @action
  changeTest(newValue: number): void {
    this._test = newValue;
  }
}

@observer
export class App extends Component {

  private readonly _testInst = new Test();

  componentDidMount() {
    timer(0, 1000).subscribe(
      value => this._testInst.changeTest(value)
    );
  }

  render() {
    return <div className="mdl-mp-root">
      <div className="mdl-mp-timer">{this._testInst.test}</div>
      <MdlPocGameArea perspectiveView={MdlPocGameArea.PerspectiveView.front}/>
    </div>;
  }
}

