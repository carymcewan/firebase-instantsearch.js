import React from 'preact-compat';
import PropTypes from 'prop-types';

var GeoSearchToggle = function GeoSearchToggle(_ref) {
  var classNameLabel = _ref.classNameLabel,
      classNameInput = _ref.classNameInput,
      checked = _ref.checked,
      onToggle = _ref.onToggle,
      children = _ref.children;
  return React.createElement(
    'label',
    { className: classNameLabel },
    React.createElement('input', {
      className: classNameInput,
      type: 'checkbox',
      checked: checked,
      onChange: onToggle
    }),
    children
  );
};

export default GeoSearchToggle;