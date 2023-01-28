import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogoImg from "./components/LogoImg";
import DropdownMode from "./components/navbar/DropdownMode";
import Navbar from "./components/navbar/Navbar";
import Auth from "./hooks/auth/Auth";
import NotifyModal from "./modals/notifyModal/NotifyModal";
import UserDetailsModal from "./modals/userDetailsModal/UserDetailsModal";
import { FirebaseAuthLanding } from "./pages/authentication/firebase/FirebaseAuthLanding"; // not needed anymore
import ForgotPassword from "./pages/authentication/forgetPassword/ForgotPassword";
import SignIn from "./pages/authentication/signIn/SignIn";
import GoogleCallback from "./pages/authentication/signUp/google/GoogleCallback";
import SignUp from "./pages/authentication/signUp/SignUp";
import UpdateEmailPassword from "./pages/authentication/updateEmailPassword/UpdateEmailPassword";
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
import ProfileNotification from "./pages/profile/subpages/ProfileNotification";
import ProfilePayments from "./pages/profile/subpages/ProfilePayments";
import ProfilePersonalInformation from "./pages/profile/subpages/ProfilePersonalInformation/ProfilePersonalInformation";
import ReviewsOffer from "./pages/reviews/reviewsOffer/ReviewsOffer";
import ReviewsUser from "./pages/reviews/reviewsUser/ReviewsUser";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import TipsAndTricks from "./pages/tipsAndTricks/TipsAndTricks";
import Upload from "./pages/upload/Upload";
import UserOffers from "./pages/userOffers/UserOffers";

export default function App() {
  // for auth
  // useAuthInitial();
  // useAuthObserver();

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {/* auth */}
      {/* <Auth /> */}
      <div className="flex h-full w-full items-center justify-center bg-white dark:bg-dmGrey900">
        <div className="relative flex  w-full max-w-[1440px] flex-col items-center overflow-scroll bg-white dark:bg-dmGrey900">
          <Router>
            {/* dark/light mode */}
            <div className="hidden" aria-hidden="true">
              <DropdownMode />
            </div>

            {/* modals */}
            <Navbar />
            <NotifyModal />
            <UserDetailsModal />
            <Toaster />

            {/* logo */}
            <LogoImg />

            {/* routes  */}
            <Routes>
              <Route path="/explore/map" element={<Map />} />
              <Route path="/explore/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route
                path="/offer-details/:offerId"
                element={<OfferDetails />}
              />

              <Route path="/users-offers" element={<UserOffers />} />
              <Route path="/upload" element={<Upload />} />

              <Route path="/chat" element={<Chat />} />
              <Route path="/chat/sidebar" element={<ChatSidebar />} />
              <Route path="/chat/chat-main/:chatId" element={<ChatMain />} />

              <Route path="/" element={<Homepage />} />
              <Route path="/homepage" element={<Homepage />} />

              <Route path="/profile" element={<Profile />} />
              <Route
                path="/profile/personal-information"
                element={<ProfilePersonalInformation />}
              />
              <Route path="/profile/payments" element={<ProfilePayments />} />
              <Route
                path="/profile/notification"
                element={<ProfileNotification />}
              />

              <Route path="/reviews/user" element={<ReviewsUser />} />
              <Route path="/reviews/offer" element={<ReviewsOffer />} />

              <Route path="/help" element={<Help />} />
              <Route path="/tips-and-tricks" element={<TipsAndTricks />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route
                path="/firebase-auth-landing"
                element={<FirebaseAuthLanding />}
              />

              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/sign-up/google-callback"
                element={<GoogleCallback />}
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/update-email" element={<UpdateEmailPassword />} />
              <Route
                path="/update-password"
                element={<UpdateEmailPassword />}
              />

              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
