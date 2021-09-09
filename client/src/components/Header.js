import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from "./Payments";

//this.props.auth contém os dados do usuário
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (<li><a href="/auth/google"> Entrar com Google </a></li>);
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{margin: '0 10px' }}>
                        Credist: {this.props.auth.credits}
                    </li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
                        Node Project
                    </Link>
                    <ul className = "right">
                        { this.renderContent()}
                    </ul>
                </div>
            </nav>
        );  
    }
}

function mapStateToProps({ auth }) {
    return { auth }; //auth: state.auth
}
//Em react se usa className ao inves de class como no css
export default connect(mapStateToProps)(Header);