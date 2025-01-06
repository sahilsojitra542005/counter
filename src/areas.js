import React, { useState } from 'react';

const Areas = () => {
  const [circleRadius, setCircleRadius] = useState('');
  const [squareSide, setSquareSide] = useState('');
  const [rectangleLength, setRectangleLength] = useState('');
  const [rectangleWidth, setRectangleWidth] = useState('');
  const [circleArea, setCircleArea] = useState(null);
  const [squareArea, setSquareArea] = useState(null);
  const [rectangleArea, setRectangleArea] = useState(null);

  const calculateCircleArea = () => {
    const radius = parseFloat(circleRadius);
    if (!isNaN(radius)) {
      const area = Math.PI * Math.pow(radius, 2);
      setCircleArea(area.toFixed(2));
    } else {
      setCircleArea(null);
    }
  };

  const calculateSquareArea = () => {
    const side = parseFloat(squareSide);
    if (!isNaN(side)) {
      const area = Math.pow(side, 2);
      setSquareArea(area.toFixed(2));
    } else {
      setSquareArea(null);
    }
  };

  const calculateRectangleArea = () => {
    const length = parseFloat(rectangleLength);
    const width = parseFloat(rectangleWidth);
    if (!isNaN(length) && !isNaN(width)) {
      const area = length * width;
      setRectangleArea(area.toFixed(2));
    } else {
      setRectangleArea(null);
    }
  };

  return (
    <div>
      <h1>Area Calculator</h1>

      <div>
        <label>Circle Radius:</label>
        <input
          type="number"
          value={circleRadius}
          onChange={(e) => setCircleRadius(e.target.value)}
        />
        <button onClick={calculateCircleArea}>Calculate Circle Area</button>
        {circleArea !== null && <p>Circle Area: {circleArea}</p>}
      </div>

      <div>
        <label>Square Side:</label>
        <input
          type="number"
          value={squareSide}
          onChange={(e) => setSquareSide(e.target.value)}
        />
        <button onClick={calculateSquareArea}>Calculate Square Area</button>
        {squareArea !== null && <p>Square Area: {squareArea}</p>}
      </div>

      <div>
        <label>Rectangle Length:</label>
        <input
          type="number"
          value={rectangleLength}
          onChange={(e) => setRectangleLength(e.target.value)}
        />
        <label>Width:</label>
        <input
          type="number"
          value={rectangleWidth}
          onChange={(e) => setRectangleWidth(e.target.value)}
        />
        <button onClick={calculateRectangleArea}>Calculate Rectangle Area</button>
        {rectangleArea !== null && <p>Rectangle Area: {rectangleArea}</p>}
      </div>
    </div>
  );
};

export default Areas;
