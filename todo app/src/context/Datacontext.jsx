import { createContext, useEffect, useState } from "react";
export const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Load todos array from local storage on component mount
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []); // Empty dependency array to run only on component mount
  const storeTokenInLs = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(localStorage.getItem("token"));
  };
  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token"); 
    window.location.reload();

    return;
  };

  let isLoggedIn = !!token;
  return (
    <DataContext.Provider
      value={{
        storeTokenInLs,
        isLoggedIn,
        todos,
        setTodos,
        logoutUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
