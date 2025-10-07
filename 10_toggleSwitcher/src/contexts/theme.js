import { createContext,useContext } from "react";
export const themeContext= createContext({
    themeMode:"Light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});

export const ThemeProvider= themeContext.Provider

export default function useTheme(){
    return useContext(themeContext)
}

{/*UserContext.js*/}

// import React from "react";
// const UserContext=React.createContext();
// export default UserContext;





{/*UserContextProvider.jsx*/}

// import React, { useState } from "react";
// import UserContext from "./UserContext";

// const UserContextProvide=({children})=>{
//     const[user,setUser]=useState(null);
//     return(
//         <UserContext.Provider value={{user,setUser}}>
//             {children}
//         </UserContext.Provider>
//     )
// }

// export default UserContextProvide;