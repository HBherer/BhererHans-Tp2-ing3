import React from "react";

class HeaderPage extends React.Component {
    render() {
        return (
            <div className="header">
                <h1 className="h1">{this.props.title}</h1>
            </div>
        )
    }
}

export default HeaderPage;