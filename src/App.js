import { Routes, Route } from "react-router-dom";

import { Navbar } from "./routes/Navbar/Navbar.component";
import { Main } from "./routes/Main/Main.component";
import { AppStyled } from "./App.styles";
import { SignIn } from "./routes/SignIn/SignIn.component";
import { SignUp } from "./routes/Signup/SignUp.component";

function App() {
    return (
        <AppStyled>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Main />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Route>
            </Routes>
        </AppStyled>
    );
}

export default App;
