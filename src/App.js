import { Routes, Route } from "react-router-dom";

import { Navbar } from "./routes/Navbar/Navbar.component";
import { Main } from "./routes/Main/Main.component";
import { AppStyled } from "./App.styles";
import { SignIn } from "./routes/SignIn/SignIn.component";
import { SignUp } from "./routes/Signup/SignUp.component";
import { Profile } from "./routes/Profile/Profile.component";
import { ROUTES } from "./utils/constants";

function App() {
    return (
        <AppStyled>
            <Routes>
                <Route path={ROUTES.main} element={<Navbar />}>
                    <Route index element={<Main />} />
                    <Route path={ROUTES.signIn} element={<SignIn />} />
                    <Route path={ROUTES.signUp} element={<SignUp />} />
                    <Route path={ROUTES.profile} element={<Profile />} />
                </Route>
            </Routes>
        </AppStyled>
    );
}

export default App;
