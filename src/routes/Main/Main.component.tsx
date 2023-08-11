import React, { useContext } from "react";
import { AppPage } from "./subcomponents/AppPage.component";
import { LandingPage } from "./subcomponents/LandingPage.component";
import { UserContext } from "../../contexts/user.context";

export const Main: React.FC = () => {
    const { user } = useContext(UserContext);

    return user ? <AppPage /> : <LandingPage />;
};
