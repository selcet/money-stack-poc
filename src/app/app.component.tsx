import React from 'react';
import { Component } from 'react';

import { MdlPocGameArea } from '../game-area/game-area.component';

import './app.scss';

export class App extends Component {
  render() {
    return (
      <div className="mdl-mp-root">
        <MdlPocGameArea perspectiveView={MdlPocGameArea.PerspectiveView.front}/>
      </div>
    )
  }
}

