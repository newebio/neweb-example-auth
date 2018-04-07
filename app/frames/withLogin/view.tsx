import { IViewProps } from "neweb";
import React = require("react");
export default class extends React.Component<IViewProps<any, any>, {

}> {
    render() {
        return <div>Index page::{this.props.data.login}
            <button onClick={() => this.props.dispatch("logout")}>Logout</button>
        </div>;
    }
}
