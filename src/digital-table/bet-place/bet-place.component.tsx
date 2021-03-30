import React from 'react';
import { PureComponent, ReactNode } from 'react';

import { createChunks } from '../../utils/chunk';

import { MoneyStack } from '../money-stack/money-stack.component';

const classNames = require('classnames');

export enum BetPlaceType {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D'
}

export type BetPlaceProps = Readonly<{
  type: BetPlaceType;
  allMoney: string[];
  angle: string;
}>;

export class BetPlace extends PureComponent<BetPlaceProps> {
  render() {
    const { angle, allMoney } = this.props;
    const classes = classNames(
      'mdl-mp-bet-place',
      `bet-place_${angle}`
    );
    const layers = createChunks(allMoney, 13);

    return (
      <div className={classes}>
        <div className="bet-place-layers">
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
      <div className="bet-place-layer">
        <div className="left">
          {left.map(amount => <MoneyStack amount={amount}/>)}
        </div>
        <div className="center">
          {center.map(amount => <MoneyStack amount={amount}/>)}
        </div>
        <div className="right">
          {right.map(amount => <MoneyStack amount={amount}/>)}
        </div>
      </div>
    )
  }
}

