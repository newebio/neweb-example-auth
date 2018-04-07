"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class default_1 extends React.Component {
    render() {
        return React.createElement("div", null,
            "Index page::",
            this.props.data.login,
            React.createElement("button", { onClick: () => this.props.dispatch("logout") }, "Logout"));
    }
}
exports.default = default_1;
