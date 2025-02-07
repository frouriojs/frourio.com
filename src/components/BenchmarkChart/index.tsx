import { useColorMode } from '@docusaurus/theme-common';
import React from 'react';

const BenchmarkChart = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      {Chart && (
        <Chart options={chartOptions(colorMode)} series={chartSeries} type="bar" height={280} />
      )}
    </>
  );
};

export default BenchmarkChart;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const Chart = 'window' in global ? require('react-apexcharts').default : null;

const filterByWindowWidth = (array: (number | string)[]) => {
  if ('window' in global && window.innerWidth >= 600) return array;
  return array.slice(0, 3);
};

const benchmarks: { category: string; data: number; color: string }[] = [
  {
    category: 'frourio',
    data: 47219.2,
    color: '#08c6d6',
  },
  {
    category: 'fastify',
    data: 47077.6,
    color: '#999',
  },
  {
    category: 'frourio-express',
    data: 9934.6,
    color: '#08c6d6',
  },
  {
    category: 'express',
    data: 10402.6,
    color: '#999',
  },
  {
    category: 'polka',
    data: 48052.0,
    color: '#999',
  },
].sort((a, b) => b.data - a.data);

const chartSeries = [
  {
    name: '2025-02-07',
    data: filterByWindowWidth(benchmarks.map((val) => val.data)),
  },
];

const colors = filterByWindowWidth(benchmarks.map((val) => val.color));
const categories = filterByWindowWidth(benchmarks.map((val) => val.category));

const chartOptions = (theme: 'light' | 'dark') => ({
  chart: {
    type: 'bar',
    toolbar: {
      show: false,
    },
    fontFamily: 'inherit',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      distributed: true,
      dataLabels: {
        position: 'top',
      },
    },
  },
  colors,
  legend: {
    show: false,
  },
  xaxis: {
    title: {
      text: 'Request/sec',
      style: {
        fontWeight: 'bold',
        color: '#999',
      },
    },
    categories,
    labels: {
      style: {
        colors: ['#999'],
      },
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: true,
    offsetX: -8,
    style: {
      fontSize: '12px',
      colors: ['#fff'],
    },
  },
  yaxis: {
    labels: {
      style: {
        colors,
        fontSize: '14px',
        fontWeight: 'bold',
      },
    },
  },
  tooltip: {
    theme,
  },
});
