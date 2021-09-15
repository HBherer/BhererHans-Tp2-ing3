import React from "react";

class HeaderPage extends React.Component {
    render() {
        return (
            <header className="header">
                <h1 className="h1">{this.props.title}</h1>
            </header>
        )
    }
}

export default HeaderPage;