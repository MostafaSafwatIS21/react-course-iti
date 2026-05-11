import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SignupForm } from "./components/signup-form";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Home Go to <Link to="/register">Register</Link>
            </div>
          }
        />
        <Route path="/register" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
