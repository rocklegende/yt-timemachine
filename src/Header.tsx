import logo from "./logo.png";
import React, {useState} from "react";
import {useAuth} from "./AuthContextProvider";
import {Link} from "react-router-dom";
import {useData} from "./DataContextProvider";

export default function Header() {
    const auth = useAuth();
    const dataContext = useData();
    const dataProvider = dataContext.dataProvider;

    const [year, setYear] = useState<number>(dataProvider.year);

    const changeYear = (newYear: number) => {
        setYear(newYear);
        dataProvider.changeYear(newYear);
        console.log(dataProvider);
    }

    return (
        <header className="App-header">
            <div className={"header-flex-container"}>
                <div className={"logo-and-label-container"}>
                    <Link to={"/"} style={{height: "100%"}}>
                        <img src={logo} className="App-logo" alt="logo"/>
                    </Link>
                    <h3 aria-label={"title"}>YouTube time machine</h3>
                </div>
                {/*<div className={"youtube-year-selector-container"}>*/}
                {/*    <label htmlFor={"youtube-year-selector"} style={{marginRight: "0.5rem"}}>bring me back to</label>*/}
                {/*    <select*/}
                {/*        name="youtube-year-selector"*/}
                {/*        id="youtube-year-selector"*/}
                {/*        value={`${year}`}*/}
                {/*        className={"youtube-year-selector"}*/}
                {/*        onChange={(e) => changeYear(parseInt(e.target.value))}*/}
                {/*    >*/}
                {/*        <option value="2008">2008</option>*/}
                {/*        <option value="2009">2009</option>*/}
                {/*        <option value="2010">2010</option>*/}
                {/*        <option value="2011">2011</option>*/}
                {/*        <option value="2012">2012</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
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