import { authApi } from '../apis/axios'
class AuthService {
    Login(login) {
        return authApi.post("/login", login);
    }

    SignUp(signUp) {
        return authApi.post("/signup", {...signUp,role:"user"});
    }

    LoginWithGoogle(email, verified) {
        return authApi.post("/loginWithGoogle", { email, verified });
    }

    SignUpWithGoogle(username, profile, email, verified) {
        return authApi.post("/signUpWithGoogle", { username, profile, email, role: "user" });
    }
}

export default new AuthService()