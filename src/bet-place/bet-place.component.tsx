import React from 'react';
import { PureComponent, ReactNode } from 'react';

import { createChunks } from '../utils/chunk';

import { MoneyStack } from './money-stack/money-stack.component';

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
    // eslint-disable-next-line
    const layers = createChunks(allMoney, 13);

    return (
      <div className={classes}>
        <div className="mdl-mp-bet-place__layers">
          {layers.map((moneyStacks, index) => {
            return this.renderLayer(moneyStacks, index);
          })}
        </div>
      </div>
    )
  }

  private readonly renderLayer = (moneyStacks: string[], index: number): ReactNode => {
    const formatted = moneyStacks;//.map((_, i) => (i + (index * 13) + 1));
    const left = formatted.slice(0, 3);
    const center = formatted.slice(3, 8);
    const right = formatted.slice(8, 13);
    const classes = classNames('mdl-mp-bet-place__layer', `mdl-mp-bet-place__layer_${index + 1}`);

    return (
      <div className={classes} key={index}>
        <div className="mdl-mp-bet-place__column mdl-mp-bet-place__column_left">
          {this.renderMoneyStack(left, 'left')}
        </div>
        <div className="mdl-mp-bet-place__column mdl-mp-bet-place__column_center">
          {this.renderMoneyStack(center, 'center')}
        </div>
        <div className="mdl-mp-bet-place__column mdl-mp-bet-place__column_right">
          {this.renderMoneyStack(right, 'right')}
        </div>
      </div>
    )
  }

  private renderMoneyStack(moneyStack: string[], orientation: string): ReactNode {
    return moneyStack.map((index) =>
      <div className="mdl-mp-bet-place__money-stack" key={index}>
        <MoneyStack orientation={orientation} id={index}/>
      </div>
    );
  }
}

