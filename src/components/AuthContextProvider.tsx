import React, {ReactChildren, useContext, useEffect, useState, FunctionComponent} from "react";
import {User} from "@supabase/supabase-js";
import AuthProvider from "../providers/authProvider";
import {supabase} from "../helpers/supabaseWrapper";

interface IAuthContext {
    user: User | null,
    login: () => void,
    logout: () => void,
    getUserAvatarUrl: () => string | null;
    getUserName: () => string | null;
}

const AuthContext = React.createContext<IAuthContext>({
    user: null,
    login: () => {},
    logout: () => {},
    getUserAvatarUrl: () => null,
    getUserName: () => null,
});

export function useAuth() {
    return useContext(AuthContext);
}

type AuthContextProviderProps = {

}

export const AuthContextProvider: FunctionComponent<AuthContextProviderProps> = (
    {children}
) => {
    const authProvider = new AuthProvider();
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // try to set the user immediately if token already in local storage
        setUser(authProvider.getUser());

        // in case the user just logged in, listen for the SIGNED_IN event after redirection from google auth, then set the current user
        const authStateChangeListener = supabase.auth.onAuthStateChange((event, session) => {
            if (event === 'SIGNED_IN') setUser(authProvider.getUser())
        })
        // remove the listener after 60 seconds by default
        setTimeout(() => {
            authStateChangeListener.data?.unsubscribe()
        }, 60 * 1000)

        // remove the listener on unmount
        return () => {
            authStateChangeListener.data?.unsubscribe();
        }
    }, [])

    function getUserName(): string | null {
        if (!user) {
            return null;
        }
        if (!user.identities || user.identities.length === 0){
            return null;
        }

        return user.identities[0].identity_data.name;
    }

    function getUserAvatarUrl(): string | null {
        if (!user) {
            return null;
        }
        if (!user.identities || user.identities.length === 0){
            return null;
        }

        return user.identities[0].identity_data.avatar_url
    }

    const signOut = async () => {
        const {error} = await authProvider.logout();
        if (error) {
            console.error(error);
            return;
        }
        setUser(null);
    }

    const signIn = async () => {
        const {session, user, provider, error} = await authProvider.login();
        if (error) {
            console.error(error);
            return;
        }
        setUser(user);
    }
    return (
        <AuthContext.Provider value={{
            user: user,
            login: signIn,
            logout: signOut,
            getUserAvatarUrl: getUserAvatarUrl,
            getUserName: getUserName,
        }}>
            {children}
        </AuthContext.Provider>
    )
}