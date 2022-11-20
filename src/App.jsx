import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DropdownMode from "./components/DropdownMode";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Chat from "./pages/chat/Chat";
import ChatMain from "./pages/chat/view/chatMain/ChatMain";
import ChatSidebar from "./pages/chat/view/chatSidebar/ChatSidebar";
import Catalog from "./pages/explore/catalog/Catalog";
import Map from "./pages/explore/map/Map";
import Favorites from "./pages/favorites/Favorites";
import ForgotPassword from "./pages/forgetPassword/ForgotPassword";
import Help from "./pages/help/Help";
import Homepage from "./pages/homepage/Homepage";
import NotFound from "./pages/notFound/NotFound";
import OfferDetails from "./pages/offerDetails/OfferDetails";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Profile from "./pages/profile/Profile";
import ProfileAccount from "./pages/profile/subPages/ProfileAccount";
import ProfileNotification from "./pages/profile/subPages/ProfileNotification";
import ProfilePayments from "./pages/profile/subPages/ProfilePayments";
import ProfileReviews from "./pages/profile/subPages/ProfileReviews";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Upload from "./pages/upload/Upload";
import UserOffers from "./pages/userOffers/UserOffers";

export default function App() {
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div className="flex h-full w-full items-center justify-center bg-white dark:bg-dmGrey900">
      <div className="relative flex  w-full max-w-[1440px] flex-col items-center overflow-scroll bg-white dark:bg-dmGrey900">
        <Router>
          <div className="hidden" aria-hidden="true">
            <DropdownMode />
          </div>
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
            <Route path="/chat/chat-main/:chatId" element={<ChatMain />} />

            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/account" element={<ProfileAccount />} />
            <Route path="/profile/payments" element={<ProfilePayments />} />
            <Route path="/profile/reviews" element={<ProfileReviews />} />
            <Route
              path="/profile/notification"
              element={<ProfileNotification />}
            />

            <Route path="/help" element={<Help />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
