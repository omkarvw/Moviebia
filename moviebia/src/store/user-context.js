import React, { useCallback, useEffect } from "react";

let logoutTimer;

const UserContext = React.createContext({
    // refreshToken: "",
    userName: "",
    accessToken: "",
    isLoggedIn: false,
    login: (accessToken, freeTokenNumber, userName) => { },
    logout: () => { },
});

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpirationDate);

    if (remainingTime <= 60000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null;
    }
    return {
        token: storedToken,
        duration: remainingTime
    }
}

export const UserContextProvider = (props) => {

    const tokenData = retrieveStoredToken();
    const initialToken = tokenData ? tokenData.token : null;
    const [accessToken, setAccessToken] = React.useState(initialToken);
    const userIsLoggedIn = !!accessToken;
    const [userName, setUserName] = React.useState("");

    const logoutHandler = useCallback(() => {
        setAccessToken("");
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (accessToken, freeTokenNumber, userName) => {
        setAccessToken(accessToken);
        localStorage.setItem('token', accessToken);
        setUserName(userName);
        const expirationTime = 60000 * 60 * 24
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
        localStorage.setItem('expirationTime', expirationTime);
    }



    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    const contextValue = {
        // refreshToken: refreshToken,
        accessToken: accessToken,
        isLoggedIn: userIsLoggedIn,
        userName: userName,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <UserContext.Provider value={contextValue}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;