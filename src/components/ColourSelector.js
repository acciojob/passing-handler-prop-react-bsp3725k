import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, label, classname } = config; // Ensure 'classname' is extracted here

  return (
    <button
      className={classname} // Use the 'classname' from config for styling
      onClick={() => selectNextBackground({ background })} // Pass the selected background
    >
      {label} {/* Display the label text */}
    </button>
  );
};

export default ColourSelector;
