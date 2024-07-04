import { createContext, useContext, useState } from "react";

export const backgroundContext = createContext()

// export const backgroundProvider = ({ children }) => {



//     return (
//         <>
//             <backgroundContext.Provider value={{}}>
//                 {children}

//             </backgroundContext.Provider >



//         </>
//     )

// }


// export const useBackground = () => useContext()

export default backgroundContext
