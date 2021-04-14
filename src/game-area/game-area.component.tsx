import * as React from 'react';
import { PureComponent } from 'react';
import { BetPlace, BetPlaceType } from '../bet-place/bet-place.component';

import { assertNever } from '../utils/asserts';

import { createMoneyStacksArray } from '../utils/mock-array';

import './game-area.scss';

const classNames = require('classnames');

const serverStackAmount: number = 40;
const stackInOneLayer: number = 13;

export class MdlPocGameArea extends PureComponent<MdlPocGameArea.Props> {
  readonly state: Readonly<{totalAmount: number}>;

  constructor(props: MdlPocGameArea.Props) {
    super(props);
    this.state = {totalAmount: 0};
    // @ts-ignore
    // window.updateTotalAmount = (totalAmount) => this.setState({...this.state, totalAmount});
  }

  componentDidMount() {
    if (serverStackAmount > stackInOneLayer) {
      this.iterableUpdateTotalAmount(serverStackAmount);
    } else {
      this.updateTotalAmount(serverStackAmount);
    }
  }

  render() {
    const { perspectiveView } = this.props;
    const classes = classNames(
      'mdl-mp-game-area',
      this.perspectiveViewToClassName(perspectiveView),
    );
    const moneyStacks = createMoneyStacksArray(1, this.state.totalAmount);

    return (
      <div className={classes}>
        <div className="mdl-mp-game-area__bet-place">
          <BetPlace type={BetPlaceType.A} allMoney={moneyStacks} angle="45"/>
        </div>
      </div>
    );
  }

  private updateTotalAmount(totalAmount: number): void {
    this.setState({...this.state, totalAmount});
  };

  private iterableUpdateTotalAmount(totalAmount: number) {
    let iterator: number = 0;

    let iterableUpdate = (setInterval(() => {
      if (iterator >= totalAmount) {
        clearInterval(iterableUpdate);
      }

      this.updateTotalAmount(iterator);
      iterator++;
    }, 100));
  }

  private perspectiveViewToClassName(view: MdlPocGameArea.PerspectiveView): string {
    switch (view) {
      case MdlPocGameArea.PerspectiveView.topBetting:
        return 'mdl-mp-game-area_view-top-betting';
      case MdlPocGameArea.PerspectiveView.topDrop:
        return 'mdl-mp-game-area_view-top-drop';
      case MdlPocGameArea.PerspectiveView.front:
        return 'mdl-mp-game-area_view-front';
      default:
        return assertNever(view);
    }
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
