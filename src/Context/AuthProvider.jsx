import { createContext } from "react"

 export const AuthContext=createContext(null) 

const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider  value={AuthInfo} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider