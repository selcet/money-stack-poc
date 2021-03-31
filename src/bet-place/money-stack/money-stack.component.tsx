import React from 'react';
import { PureComponent } from 'react';

import './money-stack.scss';

export type MoneyStackProps = Readonly<{
  amount: string;
}>;

export class MoneyStack extends PureComponent<MoneyStackProps> {
  render() {
    return (
      <div className="mdl-mp-money-stack">{this.props.amount}</div>
    )
  }
}