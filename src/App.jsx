import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Editor from './components/pages/Editor';
import EventTicket from './components/pages/EventTicket';
import Events from './components/pages/Events';
import TitleSelection from './components/pages/TitleSelection';
import Introduction from './components/pages/Introduction';
import Submission from './components/pages/Submission';

import RoleChooseContainer from "./components/auth/Register/components/RoleChoose/RoleChooseContainer";
import RegisterContainer from "./components/auth/Register";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";
import Login from "./components/auth/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/title" element={<TitleSelection />} />
      <Route path="/submission" element={<Submission />} />
      <Route path="/events" element={<Events />} />
      <Route path="/eventTicket" element={<EventTicket />} />
      <Route path="/editor" element={<Editor />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterContainer />} />
      <Route path="/role-register" element={<RoleChooseContainer />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
