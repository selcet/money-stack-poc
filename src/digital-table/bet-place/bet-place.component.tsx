import React from 'react';
import { PureComponent, ReactNode } from 'react';

import { createChunks } from '../../utils/chunk';

import { MoneyStack } from '../money-stack/money-stack.component';

import './bet-place.scss';

const classNames = require('classnames');

export enum BetPlaceType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export type BetPlaceProps = Readonly<{
  allMoney: string[];
  angle: string;
  type: BetPlaceType;
}>;

export class BetPlace extends PureComponent<BetPlaceProps> {
  render() {
    const { allMoney, angle, type } = this.props;
    const classes = classNames(
      'mdl-mp-bet-place',
      `mdl-mp-bet-place_${angle} mdl-mp-bet-place_${type}`
    );
    const layers = createChunks(allMoney, 13);

    return (
      <div className={classes}>
        <div className="mdl-mp-bet-place__layers">
          {layers.map(this.renderLayer)}
        </div>
      </div>
    )
  }

  private readonly renderLayer = (layerMoney: string[]): ReactNode => {
    const left = layerMoney.slice(0, 3);
    const center = layerMoney.slice(3, 8);
    const right = layerMoney.slice(9, 14);

    return (
      <div className="mdl-mp-bet-place__layer">
        <div className="mdl-mp-bet-place__column mdl-mp-bet-place__column_left">
          {left.map(amount => <MoneyStack amount={amount}/>)}
        </div>
        <div className="mdl-mp-bet-place__column mdl-mp-bet-place__column_center">
          {center.map(amount => <MoneyStack amount={amount}/>)}
        </div>
        <div className="mdl-mp-bet-place__column mdl-mp-bet-place__column_right">
          {right.map(amount => <MoneyStack amount={amount}/>)}
        </div>
      </div>
    )
  }
}

