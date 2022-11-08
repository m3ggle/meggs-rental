// import Spline from "@splinetool/react-spline";
import { useState } from "react";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Catalog from "./pages/catalog/Catalog";
import Chat from "./pages/chat/Chat"
import Favorites from "./pages/favorites/Favorites";
import ForgotPassword from "./pages/forgetPassword/ForgotPassword";
import Homepage from "./pages/homepage/Homepage";
import Map from "./pages/map/Map";
import NotFound from "./pages/notFound/NotFound"
import OfferDetails from "./pages/offerDetails/OfferDetails";
import Profile from "./pages/profile/Profile"
import SignIn from "./pages/signIn/SignIn"
import SignUp from "./pages/signUp/SignUp"
import Upload from "./pages/upload/Upload"
import UserOffers from "./pages/userOffers/UserOffers"
import ChatInfo from "./pages/chat/view/ChatInfo"
import ChatMain from "./pages/chat/view/ChatMain"
import ChatSidebar from "./pages/chat/view/ChatSidebar"

export default function App() {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="relative flex h-screen w-full flex-col items-center overflow-scroll bg-white bg-cover bg-center p-40 dark:bg-dmGrey900">
      <Router>
        <Navbar isOpen={isOpen} closeModal={closeModal} />
        <Logo isOpen={isOpen} openModal={openModal} />
        <Routes>
          <Route path="/explore/map" element={<Map />} />
          <Route path="/explore/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/offer-details" element={<OfferDetails />} />

          <Route path="/user-offers" element={<UserOffers />} />
          <Route path="/upload" element={<Upload />} />
          
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/sidebar" element={<ChatSidebar />} />
          <Route path="/chat/chat-info" element={<ChatInfo />} />
          <Route path="/chat/chat-main" element={<ChatMain />} />

          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
