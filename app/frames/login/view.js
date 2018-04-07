"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class default_1 extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { login: "" };
    }
    render() {
        return React.createElement("div", null,
            "Login: ",
            React.createElement("input", { type: "text", value: this.state.login, onChange: (e) => this.setState({ login: e.target.value }) }),
            React.createElement("button", { onClick: () => this.props.dispatch("login", this.state.login) }, "Login"));
    }
}
exports.default = default_1;
