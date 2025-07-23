// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import {jwtDecode} from "jwt-decode";

// interface AuthContextType {
//   userId: string | null;
// }

// const AuthContext = createContext<AuthContextType>({ userId: null });

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded: any = jwtDecode(token);
//         setUserId(decoded.userId);
//       } catch (err) {
//         console.error("Invalid token");
//         setUserId(null);
//       }
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ userId }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";

interface AuthContextType {
  userId: string | null;
}

const AuthContext = createContext<AuthContextType>({ userId: null });

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        if (decoded && decoded.userId) {
          setUserId(decoded.userId);
        } else {
          setUserId(null);
        }
      } catch (err) {
        console.error("Invalid token", err);
        setUserId(null);
      }
    } else {
      setUserId(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ userId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
