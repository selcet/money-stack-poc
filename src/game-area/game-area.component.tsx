import * as React from 'react';
import { PureComponent } from 'react';

import './game-area.scss';

const classNames = require('classnames');

export class MdlPocGameArea extends PureComponent<MdlPocGameArea.Props> {
  render() {
    const { perspectiveView } = this.props;
    const classes = classNames('mdl-mp-game-area', perspectiveViewToClassName(perspectiveView));
    return (
      <div className={classes}>
        <div className="styles2">
          MDL POC
        </div>
      </div>
    );
  }
}

export namespace MdlPocGameArea {
  // non-const because of enumToSelectOptions in storybook
  export enum PerspectiveView {
    front,
    topBetting,
    topDrop,
  }

  export enum MoneyStackPositions {
    leftTop,
    leftMiddle,
    leftBottom,
    centralLeft1,
    centralRight1,
    centralLeft2,
    centralRight2,
    centralLeft3,
    centralRight3,
    centralLeft4,
    centralRight4,
    centralLeft5,
    centralRight5,
  }

  export type Props = Readonly<{
    perspectiveView: PerspectiveView;
    moneyStackPositions?: MoneyStackPositions;
  }>;
}

function assertNever(x: never): never {
  throw new Error('Unexpected value. Should have been never.');
}

function perspectiveViewToClassName(view: MdlPocGameArea.PerspectiveView): string {
  switch (view) {
    case MdlPocGameArea.PerspectiveView.topBetting:
      return 'mdl-mp-game-area_view-top-betting';
    case MdlPocGameArea.PerspectiveView.topDrop:
      return 'mdl-mp-game-area_view-top-betting';
    case MdlPocGameArea.PerspectiveView.front:
      return 'mdl-mp-game-area_view-front';
    default:
      return assertNever(view);
  }
}
