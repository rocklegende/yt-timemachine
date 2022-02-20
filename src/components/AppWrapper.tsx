import {AuthContextProvider} from "./AuthContextProvider";
import {ReactNotifications} from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import DataContextProvider from "./DataContextProvider";

export function AppWrapper() {
    return (
        <BrowserRouter>
            <DataContextProvider>
                <AuthContextProvider>
                    <ReactNotifications/>
                    <App/>
                </AuthContextProvider>
            </DataContextProvider>
        </BrowserRouter>

    )
}