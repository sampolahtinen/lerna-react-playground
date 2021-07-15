import React from 'react';
import styled from 'styled-components';

var Button = function (_a) {
    var onClick = _a.onClick, className = _a.className, children = _a.children;
    return (React.createElement("button", { onClick: onClick, className: className }, children));
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Text = function (_a) {
    var className = _a.className, children = _a.children;
    return (React.createElement(StyledSpan, { className: className }, children));
};
var StyledSpan = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: red;\n  font-size: 20px;\n"], ["\n  color: red;\n  font-size: 20px;\n"])));
var templateObject_1;

export { Button, Text };
//# sourceMappingURL=index.esm.js.map
