import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetOfferCards } from "../../../api/supabase/useGetOfferCards";
import Btn from "../../../components/common/Btn";
import DesktopOfferCard from "../../../components/offerCard/nonResponsive/desktopOfferCard/DesktopOfferCard";
import MobileOfferCard from "../../../components/offerCard/nonResponsive/mobileOfferCard/MobileOfferCard";
import SpecialHomepageOfferCard from "../../../components/offerCard/nonResponsive/specialHomepageOfferCard/SpecialHomepageOfferCard";
import TabletOfferCard from "../../../components/offerCard/nonResponsive/tabletOfferCard/TabletOfferCard";
import { useWindowSize } from "../../../hooks/useWindowSize";


const HomepageHero = () => {
  const offerIds = [
    "fb91e500-9d3e-4604-8e42-5bc3ad86bb21",
    "a6f1eef7-bf24-4044-b8e3-4b73946f0650",
    "adb589db-d842-4c1e-95cf-e1357a3e5938",
    "840bd5bb-5609-43c9-bde9-c53906e61ebb",
    "11c2e1c0-dec8-42e4-a26e-4707a5af4304",
    "ef7c26bd-24cb-4b63-a9e6-d8be86c95647",
  ];
  const { offers, isLoading } = useGetOfferCards(offerIds);

  const windowSize = useWindowSize();

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate("/explore/catalog");
  };

  return (
    <div
      id="hero"
      className="700:max-h-none relative flex h-screen max-h-[740px] w-full flex-col justify-center gap-y-8 bg-white py-16 px-6 dark:bg-dmGrey900 700:min-h-[1100px] 700:gap-y-6 700:py-[100px] 700:px-11 1200:h-screen 1200:min-h-screen 1200:flex-row 1200:items-center 1200:justify-start 1200:px-14"
    >
      {/* text */}
      <div className="z-30 mt-14 flex w-full flex-col gap-y-5 700:mt-10 700:w-[712px] 700:gap-y-6 1200:mt-0 1200:gap-y-9">
        <h1 className="text-[40px] font-bold leading-[48px] -tracking-[1.2%] text-lmGrey900 drop-shadow dark:text-dmGrey25 700:text-[60px] 700:leading-[60px] 700:-tracking-[1.5%] 1200:text-[80px] 1200:leading-[80px] 1200:tracking-[1%]">
          Drive what you want, where and when you want!
        </h1>
        <h3 className="text-lg text-lmGrey800 drop-shadow-sm dark:text-dmGrey25 700:text-3xl 1200:text-4xl">
          Nisi facilisis mauris lacus sit arcu enim. Commodo faucibus tincidunt
          morbi risus imperdiet tincidunt.
        </h3>
        {windowSize.width > 700 ? (
          <button
            onClick={handleGetStarted}
            className="flex w-fit items-center justify-center gap-x-2 rounded-lg bg-gradient-to-r from-[#0180FE] to-[#2591FE] py-3 px-4 text-lg font-semibold text-white shadow duration-300 hover:scale-101 hover:from-[#0173E5] hover:to-[#0B84FE] hover:shadow-lg active:scale-99 active:shadow-sm"
          >
            Get Started
            <i className="fa-solid fa-chevron-right text-[16px]" />
          </button>
        ) : (
          <div className="w-fit">
            <Btn
              type="button"
              uiType="primary"
              title="Get Started"
              onClick={handleGetStarted}
            />
          </div>
        )}
      </div>

      {/* offer cards */}
      <div className="relative flex h-fit w-full flex-grow items-center justify-center 700:justify-start 1200:absolute 1200:right-[56px] 1200:h-[80%] 1200:w-[620px]">
        {!isLoading && (
          <>
            <div className="absolute left-[20px] top-0 hidden opacity-40 1200:flex">
              <TabletOfferCard
                offerInformation={
                  offers.filter(
                    (offer) =>
                      offer?.id === "fb91e500-9d3e-4604-8e42-5bc3ad86bb21"
                  )[0]
                }
                index={0}
              />
            </div>

            <div className="absolute left-auto -top-12 z-20 scale-50 700:left-[30%] 700:top-[120px] 700:scale-100 1200:left-[160px] 1200:top-[135px]">
              <SpecialHomepageOfferCard
                offerInformation={
                  offers.filter(
                    (offer) =>
                      offer?.id === "a6f1eef7-bf24-4044-b8e3-4b73946f0650"
                  )[0]
                }
                index={0}
              />
            </div>

            <div className="absolute -left-[124px] -top-[100px] scale-50 opacity-80 700:-left-[44px] 700:top-0 700:scale-100 1200:left-auto 1200:right-0 1200:top-[60px]">
              <DesktopOfferCard
                offerInformation={
                  offers.filter(
                    (offer) =>
                      offer?.id === "adb589db-d842-4c1e-95cf-e1357a3e5938"
                  )[0]
                }
                index={0}
              />
            </div>

            <div className="absolute -top-[180px] -right-24 flex scale-50 flex-col gap-y-2 700:left-[64%] 700:top-[60px] 700:w-[360px] 700:scale-100 1200:top-auto 1200:-left-8 1200:-bottom-20">
              <div className="">
                <MobileOfferCard
                  offerInformation={
                    offers.filter(
                      (offer) =>
                        offer?.id === "840bd5bb-5609-43c9-bde9-c53906e61ebb"
                    )[0]
                  }
                  index={0}
                />
              </div>
              <div className="opacity-60">
                <MobileOfferCard
                  offerInformation={
                    offers.filter(
                      (offer) =>
                        offer?.id === "11c2e1c0-dec8-42e4-a26e-4707a5af4304"
                    )[0]
                  }
                  index={0}
                />
              </div>
              <div className="opacity-30">
                <MobileOfferCard
                  offerInformation={
                    offers.filter(
                      (offer) =>
                        offer?.id === "ef7c26bd-24cb-4b63-a9e6-d8be86c95647"
                    )[0]
                  }
                  index={0}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HomepageHero;

/*
vw in dresden: 
adb589db-d842-4c1e-95cf-e1357a3e5938

3 in berlin:
840bd5bb-5609-43c9-bde9-c53906e61ebb
11c2e1c0-dec8-42e4-a26e-4707a5af4304
ef7c26bd-24cb-4b63-a9e6-d8be86c95647

in paris:
a6f1eef7-bf24-4044-b8e3-4b73946f0650

in madrid:
fb91e500-9d3e-4604-8e42-5bc3ad86bb21

array:
[fb91e500-9d3e-4604-8e42-5bc3ad86bb21, a6f1eef7-bf24-4044-b8e3-4b73946f0650, adb589db-d842-4c1e-95cf-e1357a3e5938, 840bd5bb-5609-43c9-bde9-c53906e61ebb, 11c2e1c0-dec8-42e4-a26e-4707a5af4304, ef7c26bd-24cb-4b63-a9e6-d8be86c95647]
*/

/*

[
  {"id":"fb91e500-9d3e-4604-8e42-5bc3ad86bb21","offer_status":"available","offer_name":"(Test) Lamborghini Countach","transmission":"Manual","amount_seats":2,"latitude":40.423425,"longitude":-3.682713,"formatted":"Calle De Núñez De Balboa 16","picture_urls":["https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDEud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTM4NiwiZXhwIjoxOTg5MDUxMzg2fQ.zXQA4lQGo28VYQsChvKdv9KiSDKQDOqLvrHwOpeCA10","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDIud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQxMSwiZXhwIjoxOTg5MDUxNDExfQ.djdU2b17LMlHDjMcqFIXzzgeuOdEhaIyHm1JZlyzPIo","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDMud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ0NywiZXhwIjoxOTg5MDUxNDQ3fQ.Snx833z5I-r0YYqOWqGwtpw0S0RMVjh_qUD9GcN5jjI","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ1OSwiZXhwIjoxOTg5MDUxNDU5fQ.igRXHMJZH2KncqErwyZjwx-6369QmQWj6m8EcHNKhN0","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDUud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ2OSwiZXhwIjoxOTg5MDUxNDY5fQ.GHumSJ3e1SKqw2s2dMcDWCEWjafaJLG6hgjj0yL2Ab0&t=2023-01-14T10%3A17%3A49.943Z"],"day_price":30,"week_price":250,"month_price":400
},
{
  "id":"a6f1eef7-bf24-4044-b8e3-4b73946f0650","offer_status":"available","offer_name":"(Test) Lamborghini Countach","transmission":"Manual","amount_seats":2,"latitude":48.856126,"longitude":2.322049,"formatted":"85 Rue De Grenelle","picture_urls":["https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach1.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDEud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTM4NiwiZXhwIjoxOTg5MDUxMzg2fQ.zXQA4lQGo28VYQsChvKdv9KiSDKQDOqLvrHwOpeCA10","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach2.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDIud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQxMSwiZXhwIjoxOTg5MDUxNDExfQ.djdU2b17LMlHDjMcqFIXzzgeuOdEhaIyHm1JZlyzPIo","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach3.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDMud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ0NywiZXhwIjoxOTg5MDUxNDQ3fQ.Snx833z5I-r0YYqOWqGwtpw0S0RMVjh_qUD9GcN5jjI","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach4.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDQud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ1OSwiZXhwIjoxOTg5MDUxNDU5fQ.igRXHMJZH2KncqErwyZjwx-6369QmQWj6m8EcHNKhN0","https://cymyxcckynyeemdvnckd.supabase.co/storage/v1/object/sign/user-offers/lamborghini_countach5.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1c2VyLW9mZmVycy9sYW1ib3JnaGluaV9jb3VudGFjaDUud2VicCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzY5MTQ2OSwiZXhwIjoxOTg5MDUxNDY5fQ.GHumSJ3e1SKqw2s2dMcDWCEWjafaJLG6hgjj0yL2Ab0&t=2023-01-14T10%3A17%3A49.943Z"],"day_price":30,"week_price":250,"month_price":400}]

*/
