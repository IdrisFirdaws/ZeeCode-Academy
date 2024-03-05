import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import "./styles/global.scss";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);

  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });

    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index path="/" element={<SignIn user={user} />}></Route>
          <Route
            path="/private"
            element={
              <ProtectedRoutes user={user}>
                <Home></Home>
              </ProtectedRoutes>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
