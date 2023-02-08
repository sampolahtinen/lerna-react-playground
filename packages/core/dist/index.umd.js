'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function (_a) {
    var onClick = _a.onClick, className = _a.className, children = _a.children;
    return (React__default["default"].createElement("button", { onClick: onClick, className: className }, children));
};

var Text = function (_a) {
    var className = _a.className, children = _a.children;
    return (React__default["default"].createElement("span", { className: className }, children));
};

exports.Button = Button;
exports.Text = Text;
//# sourceMappingURL=index.umd.js.map
