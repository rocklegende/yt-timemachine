import {supabase} from "./supabaseWrapper";
import {User} from "@supabase/supabase-js";

export default class AuthProvider {
    getUser = (): User | null => {
        return supabase.auth.user();
    };

    login = async () => {
        const res = await supabase.auth.signIn({
            provider: "google"
        })
        return res;
    };

    logout = async () => {
        return supabase.auth.signOut()
    };
}