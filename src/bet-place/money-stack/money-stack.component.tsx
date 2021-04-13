import React from 'react';
import { FC } from 'react';

import './money-stack.scss';

export type MoneyStackProps = Readonly<{
  orientation: string;
  id: string;
}>;

export const MoneyStack: FC<MoneyStackProps> = ({orientation, id}) => {
  return (
    <div className={`mdl-mp-money-stack mdl-mp-money-stack_${orientation} mdl-mp-money-stack_${id}`}/>
  )
}