import React from 'react';
import { PureComponent } from 'react';

import { BetPlace, BetPlaceType } from './bet-place/bet-place.component';

export class DigitalTable extends PureComponent {
  render() {
    const moneyAmount = new Array(50);

    return (
      <div className="mdl-mp-digital-table">
        <BetPlace type={BetPlaceType.A} allMoney={moneyAmount} angle="45"/>
        <BetPlace type={BetPlaceType.B} allMoney={moneyAmount} angle="0"/>
        <BetPlace type={BetPlaceType.C} allMoney={moneyAmount} angle="0"/>
        <BetPlace type={BetPlaceType.D} allMoney={moneyAmount} angle="-45"/>
      </div>
    )
  }
}