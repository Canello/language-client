import { AppPage } from "./subcomponents/AppPage.component";
import { LandingPage } from "./subcomponents/LandingPage.component";

export const Main = () => {
    const isLoggedIn = true;

    return isLoggedIn ? <AppPage /> : <LandingPage />;
};
