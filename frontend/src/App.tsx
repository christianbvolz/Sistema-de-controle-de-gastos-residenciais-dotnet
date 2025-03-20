import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserListPage from "./pages/userList/userList";
import TransactionListPage from "./pages/transactionList/transactionList";
import ContextProvider from "./context/contextProvider";

function App() {
 
  return (
   <ContextProvider>
    <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/transactions" element={<TransactionListPage />} />
      </Routes>
   </ContextProvider>  
  );
}

export default App;
