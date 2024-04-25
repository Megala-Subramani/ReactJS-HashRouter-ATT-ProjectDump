import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BubbleChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (!data) return;

    // Set up the chart dimensions
    const width = 800;
    const height = 600;

    // Create SVG container
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Use a projection suitable for the United States
    const projection = d3.geoAlbersUsa()
      .translate([width / 2, height / 2])
      .scale(1200);

    // Create a path generator
    const path = d3.geoPath().projection(projection);

    // Scale for circle sizes
    const radiusScale = d3.scaleSqrt()
      .domain([0, d3.max(data, d => d.population)])
      .range([0, 30]);

    // Draw map
    svg.selectAll('path')
      .data(data.features)
      .enter().append('path')
      .attr('d', path)
      .attr('fill', '#ccc')
      .attr('stroke', '#fff');

    // Draw bubbles
    svg.selectAll('circle')
      .data(data.features)
      .enter().append('circle')
      .attr('cx', d => projection(d3.geoCentroid(d))[0])
      .attr('cy', d => projection(d3.geoCentroid(d))[1])
      .attr('r', d => radiusScale(d.population))
      .attr('fill', 'blue');

  }, [data]);

  return <div ref={chartRef}></div>;
};

export default BubbleChart;