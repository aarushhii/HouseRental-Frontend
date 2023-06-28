import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from './pages/Landing/Landing';
import SignUp from "./pages/Login/signup";
import SignIn from "./pages/Login/signin";
import Property from "./pages/Property/Property";
import ComplaintsPage from "./pages/Complaint/ComplaintsPage";
import AddProperty from "./pages/Forms/addProperty/addProperty";
import RaiseComplaint from "./pages/Forms/raiseComplaint/raiseComplaint";
import AddTenant from "./pages/Forms/AddTenant/addTenant";
import { AuthProvider } from "./context/AuthContext";
import { Dashboard } from '@mui/icons-material';


function App() {
  return (
      <>
          <Router>
            <AuthProvider>
              <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/property" element={<Property />} />
                  <Route path="/complaints" element={<ComplaintsPage />} />
                  <Route path="/addproperty" element={<AddProperty />} />
                  <Route path="/raisecomplaint" element={<RaiseComplaint />} />
                  <Route path="/addtenant" element={<AddTenant />} />
              </Routes>
            </AuthProvider>
          </Router>
      </>
  );
};


export default App;