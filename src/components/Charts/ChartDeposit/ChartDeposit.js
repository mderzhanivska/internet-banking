import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

import Styles from './ChartDeposit.module.scss';

const data01 = [
  { name: 'Group A', value: 10, fill: '#0a4c90' },
  { name: 'Group B', value: 80, fill: '#b1d8ff' },
];
const data02 = [
  { name: 'Group A', value: 10, fill: '#0465c8' },
  { name: 'Group B', value: 80, fill: '#63aaf2' },
];

const inner = data01;
const outer = data02;

const ChartDeposit = () => (
  <div className={Styles.box_img}>
    <div className={Styles.chart}>
      <ResponsiveContainer>
        <PieChart width="100%" height="100%">
          <Pie
            data={inner}
            cx="50%"
            cy="50%"
            innerRadius="55%"
            outerRadius="71%"
            stroke={0}
          />
          <Pie
            data={outer}
            cx="50%"
            cy="50%"
            innerRadius="70%"
            outerRadius="100%"
            stroke={0}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default ChartDeposit;
