var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import PropTypes from 'prop-types';
import React, { Component } from 'preact-compat';
import Hits from './Hits.js';

var InfiniteHits = function (_Component) {
  _inherits(InfiniteHits, _Component);

  function InfiniteHits() {
    _classCallCheck(this, InfiniteHits);

    return _possibleConstructorReturn(this, (InfiniteHits.__proto__ || Object.getPrototypeOf(InfiniteHits)).apply(this, arguments));
  }

  _createClass(InfiniteHits, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          cssClasses = _props.cssClasses,
          hits = _props.hits,
          results = _props.results,
          showMore = _props.showMore,
          showMoreLabel = _props.showMoreLabel,
          templateProps = _props.templateProps;

      var btn = this.props.isLastPage ? React.createElement(
        'button',
        { disabled: true },
        showMoreLabel
      ) : React.createElement(
        'button',
        { onClick: showMore },
        showMoreLabel
      );

      return React.createElement(
        'div',
        null,
        React.createElement(Hits, {
          cssClasses: cssClasses,
          hits: hits,
          results: results,
          templateProps: templateProps
        }),
        React.createElement(
          'div',
          { className: cssClasses.showmore },
          btn
        )
      );
    }
  }]);

  return InfiniteHits;
}(Component);

export default InfiniteHits;