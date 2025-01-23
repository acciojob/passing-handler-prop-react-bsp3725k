import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [selectionStyle, setSelectionStyle] = useState({});

  const handleClick = () => {
    applyColor(setSelectionStyle); // Update the style when clicked
  };

  return (
    <div
      className="selection-box"
      style={selectionStyle} // Apply the dynamic style here
      onClick={handleClick}
    >
    Selection {/* Updated text */}
    </div>
  );
};

export default Selection;
