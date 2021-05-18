import React from 'react';
import { ResponsiveContainer, PieChart, Pie } from 'recharts';

import Styles from './ChartCredit.module.scss';

const data01 = [
  { name: 'Group A', value: 20, fill: '#09555B' },
  { name: 'Group B', value: 100, fill: '#7ff2f9' },
];
const data02 = [
  { name: 'Group A', value: 20, fill: '#0d6f76' },
  { name: 'Group B', value: 100, fill: '#2dc1cb' },
];

const inner = data01;
const outer = data02;

const ChartCredit = () => (
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

export default ChartCredit;
