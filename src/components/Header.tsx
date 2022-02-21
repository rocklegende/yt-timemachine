import logo from "../images/logo.png";
import React from "react";
import {useAuth} from "./AuthContextProvider";
import {Link} from "react-router-dom";

export default function Header() {
    const auth = useAuth();

    return (
        <header className="App-header">
            <div className={"header-flex-container"}>
                <div className={"logo-and-label-container"}>
                    <Link to={"/"} style={{height: "100%"}}>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                    <span className={"web-site-title"} aria-label={"title"}>YouTube time machine</span>
                </div>
                <div className={"auth-information"}>
                    {auth.user ? (
                        <>
                            <a
                                className="header-user-profile-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                <img className={"user-avatar"} src={auth.getUserAvatarUrl() || "example.jpeg"}/>
                            </a>
                            <button onClick={() => auth.logout()}>
                                Sign out
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                className="App-link"
                                onClick={() => auth.login()}
                            >
                                Sign in
                            </button>
                        </>
                    )}

                </div>
            </div>



        </header>
    )
}