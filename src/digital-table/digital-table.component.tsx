import React from 'react';
import { PureComponent } from 'react';

import { BetPlace, BetPlaceType } from './bet-place/bet-place.component';

import './digital-table.scss';

export class DigitalTable extends PureComponent {
  render() {
    const moneyAmount = this.createMockArray(1, 50);

    return (
      <div className="mdl-mp-digital-table">
        <BetPlace type={BetPlaceType.A} allMoney={moneyAmount} angle="45"/>
        {/*<BetPlace type={BetPlaceType.B} allMoney={moneyAmount} angle="0"/>*/}
        {/*<BetPlace type={BetPlaceType.C} allMoney={moneyAmount} angle="0"/>*/}
        {/*<BetPlace type={BetPlaceType.D} allMoney={moneyAmount} angle="-45"/>*/}
      </div>
    )
  }

  private createMockArray(start: number, end: number): string[] {
    return Array(end - start + 1).fill(start).map((_, idx) => (start + idx).toString());
  }
}