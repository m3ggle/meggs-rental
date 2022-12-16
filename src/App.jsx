import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import DropdownMode from "./components/navbar/DropdownMode";
import Navbar from "./components/navbar/Navbar";
import ForgotPassword from "./pages/authentication/forgetPassword/ForgotPassword";
import SignIn from "./pages/authentication/signIn/SignIn";
import SignUp from "./pages/authentication/signUp/SignUp";
import Chat from "./pages/chat/Chat";
import ChatMain from "./pages/chat/view/chatMain/ChatMain";
import ChatSidebar from "./pages/chat/view/chatSidebar/ChatSidebar";
import Catalog from "./pages/explore/catalog/Catalog";
import Map from "./pages/explore/map/Map";
import Favorites from "./pages/favorites/Favorites";
import Help from "./pages/help/Help";
import Homepage from "./pages/homepage/Homepage";
import NotFound from "./pages/notFound/NotFound";
import OfferDetails from "./pages/offerDetails/OfferDetails";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Profile from "./pages/profile/Profile";
import ProfileAccount from "./pages/profile/subpages/ProfileAccount";
import ProfileNotification from "./pages/profile/subpages/ProfileNotification";
import ProfilePayments from "./pages/profile/subpages/ProfilePayments";
import ProfileReviews from "./pages/profile/subpages/ProfileReviews";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Upload from "./pages/upload/Upload";
import UserOffers from "./pages/userOffers/UserOffers";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-full w-full items-center justify-center bg-white dark:bg-dmGrey900">
        <div className="relative flex  w-full max-w-[1440px] flex-col items-center overflow-scroll bg-white dark:bg-dmGrey900">
          <Router>
            <div className="hidden" aria-hidden="true">
              <DropdownMode />
            </div>
            <Navbar />
            <Logo />
            <Routes>
              <Route path="/explore/map" element={<Map />} />
              <Route path="/explore/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route
                path="/offer-details/:offerId"
                element={<OfferDetails />}
              />

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
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
}
