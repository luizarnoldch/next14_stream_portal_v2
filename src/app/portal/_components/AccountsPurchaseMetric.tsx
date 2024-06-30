"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

import { PureComponent, ReactNode } from "react";

type Props = {};

const data = [
  {
    name: "Jan",
    money: 4000,
  },
  {
    name: "Feb",
    money: 3000,
  },
  {
    name: "Mar",
    money: 2000,
  },
  {
    name: "Apr",
    money: 2780,
  },
  {
    name: "May",
    money: 1890,
  },
  {
    name: "Jun",
    money: 2390,
  },
  {
    name: "Jul",
    money: 3490,
  },
  {
    name: "Aug",
    money: 4300,
  },
  {
    name: "Sep",
    money: 4800,
  },
  {
    name: "Oct",
    money: 5200,
  },
  {
    name: "Nov",
    money: 6100,
  },
  {
    name: "Dec",
    money: 7000,
  },
];


export default class AccountMetric extends PureComponent {
  render(): ReactNode {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="money"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
