import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

interface Geometry {
  type: string;
  id?: string;
  arcs?: number[][];
  properties?: { [key: string]: any };
}


interface Topology {
  type: string;
  transform: {
    scale: [number, number];
    translate: [number, number];
  };
  objects: {
    states: {
      type: string;
      geometries: Geometry[];
    };
  };
  arcs: number[][][];
}

const USMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const width = 700;
  const height = 450;

  useEffect(() => {
    // Load TopoJSON data
    d3.json<Topology>('/states-10m.json').then((topology: any) => {
        console.log(topology);
        // const projection = d3.geoAlbersUsa().fitSize([width, height], topology);
        const projection = d3.geoAlbersUsa().scale(700).translate([width/2, height/2]);
        // const projection = d3.geoAlbersUsa().fitSize([width, height], { type: 'FeatureCollection', features: topology });
        console.log(projection);
        const pathGenerator  = d3.geoPath().projection(projection);
      const svg = d3.select(svgRef.current);
      const str = topojson.feature(topology, topology.objects.states).features;
      console.log(str);
      // Draw map
      svg
        .selectAll('path')
        .data(topojson.feature(topology, topology.objects.states).features)
        .enter()
        .append('path')
        .attr('d', (d: any) => pathGenerator(d) || '')
        .attr('stroke', 'white')
        .attr('fill', 'lightblue');
    });
  }, [width, height]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
};

export default USMap;