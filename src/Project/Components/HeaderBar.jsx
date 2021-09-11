import React from "react";

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="h1">{this.props.title}</h1>
            </div>
        )
    }
}

export default HeaderBar;