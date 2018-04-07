import { IViewProps } from "neweb";
import React = require("react");
export default class extends React.Component<IViewProps<any, any>, {
    login: string;
}> {
    state = { login: "" };
    render() {
        return <div>Login: <input type="text"
            value={this.state.login}
            onChange={(e) => this.setState({ login: e.target.value })} />
            <button onClick={() => this.props.dispatch("login", this.state.login)}>Login</button>
        </div>;
    }
}
