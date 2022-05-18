import React from "react";

export const UserContext = React.createContext(
    {
        user: "null",
        setUser: () => {},
        selBarName: "null",
        setSelBarName: () => {},
    }
);