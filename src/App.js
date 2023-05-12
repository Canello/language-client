import { Routes, Route } from "react-router-dom";

import { Navbar } from "./routes/Navbar/Navbar.component";
import { Main } from "./routes/Main/Main.component";
import { AppStyled } from "./App.styles";

function App() {
    return (
        <AppStyled>
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Main />} />
                </Route>
            </Routes>
        </AppStyled>
    );
}

export default App;
