import React from 'react';

var Button = function (_a) {
    var onClick = _a.onClick, className = _a.className, children = _a.children;
    return (React.createElement("button", { onClick: onClick, className: className }, children));
};

var Text = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement("span", { className: className }, children));
};

export { Button, Text };
//# sourceMappingURL=index.esm.js.map
