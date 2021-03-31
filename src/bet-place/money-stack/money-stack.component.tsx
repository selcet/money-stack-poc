import React from 'react';
import { FC } from 'react';

import './money-stack.scss';

export type MoneyStackProps = Readonly<{
  orientation?: string
}>;

export const MoneyStack: FC<MoneyStackProps> = ({orientation}) => {
  return <div className={`mdl-mp-money-stack mdl-mp-money-stack_${orientation}`}/>;
}