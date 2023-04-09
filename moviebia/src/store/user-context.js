import React, { useCallback, useEffect } from "react";

let logoutTimer;

const UserContext = React.createContext({
    // refreshToken: "",
    accessToken: "",
    isLoggedIn: false,
    freeTokenNumber: 0,
    clearToken: () => { },
    login: (accessToken, freeTokenNumber) => { },
    logout: () => { },
    increaseTokenNumber: () => { },
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
    const [freeTokenNumber, setFreeTokenNumber] = React.useState(0);
    const userIsLoggedIn = !!accessToken;

    const logoutHandler = useCallback(() => {
        setAccessToken("");
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    const loginHandler = (accessToken, freeTokenNumber, expirationTime) => {
        setAccessToken(accessToken);
        localStorage.setItem('token', accessToken);
        setFreeTokenNumber(freeTokenNumber);
        const remainingTime = calculateRemainingTime(expirationTime);
        logoutTimer = setTimeout(logoutHandler, remainingTime);
        localStorage.setItem('expirationTime', expirationTime);
    }

    const clearTokenHandler = () => {
        setFreeTokenNumber(0);
        // logic to calculate amount of SOL to be transferred by company
        // logic to transfer the SOL from company to user
    }

    const increaseTokenNumber = () => {
        setFreeTokenNumber(freeTokenNumber + 10);
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
        freeTokenNumber: freeTokenNumber,
        login: loginHandler,
        logout: logoutHandler,
        clearToken: clearTokenHandler,
        increaseTokenNumber: increaseTokenNumber,
    }

    return <UserContext.Provider value={contextValue}>
        {props.children}
    </UserContext.Provider>
}

export default UserContext;
