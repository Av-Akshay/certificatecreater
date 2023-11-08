import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogIn from "./pages/login/LogIn";
import Registration from "./pages/registration/Registration";
import CertificateGenerator from "./pages/certificate-generate/CertificateGenerator";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/certificates" element={<CertificateGenerator />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
