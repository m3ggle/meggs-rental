import React from "react";
import CroppedPic from "../../../assets/img/croppedPic.webp";
import { useWindowSize } from "../../../hooks/useWindowSize";
import HomepageComment from "./HomepageComment";
import HomepageSocial from "./HomepageSocial";

const HomepageAbout = () => {
  const windowSize = useWindowSize()
  
  return (
    <div
      id="about"
      className="relative flex h-[800px] w-full gap-x-6 bg-white px-6 py-16 700:py-[100px] 700:px-11 1000:h-fit 1200:px-14"
    >
      <div className="flex w-full flex-col items-start gap-y-6 1000:items-center">
        <h2 className="text-4xl font-semibold -tracking-[1.2%] text-lmGrey800 drop-shadow 700:text-[40px] 700:leading-[40px] 1200:text-5xl">
          Our Vision
        </h2>
        <div className="flex w-full gap-x-3">
          <img
            className="h-[60px] w-[60px] rounded-full bg-blue-200 bg-cover bg-center 700:h-[88px] 700:w-[88px] 700:min-w-[88px]"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt="profile"
          />
          <div className="w-full max-w-[480px] rounded-[24px] bg-white p-6 shadow">
            <span className="text-base text-lmGrey600">
              Congue egestas tempus id habitasse et quam netus rhoncus. Vitae
              enim euismod morbi varius consequat interdum sit phasellus in.
              Ipsum semper tempus arcu odio eu eros nunc. Morbi id id at
              ullamcorper viverra.
            </span>
          </div>
        </div>
      </div>
      <div className="hidden w-full items-center justify-center py-6 1000:flex">
        <img src={CroppedPic} alt="cropped bmw" />
      </div>

      <div className="absolute bottom-[60px] left-8 z-10 w-fit 400:bottom-[100px] 400:left-14 700:bottom-[120px] 700:left-[160px]">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          comment="Augue fringilla viverra id tristique malesuada cras urna."
          association="Nele Langrock, Co-Founder"
          commentWidth="360px"
        />
      </div>

      <div
        className="absolute bottom-[292px] right-[0%] z-10 w-fit opacity-50 400:bottom-[320px] 500:bottom-[360px] 500:right-[24%] 1200:right-[40%]"
        // className="absolute bottom-[292px] 400:bottom-[320px] left-[12%] 500:bottom-[360px] 500:left-[24%] z-10 w-fit opacity-50"
        // className="absolute bottom-[360px] left-[220px] z-10 w-fit opacity-50"
      >
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
          comment="Sapien ac risus amet lectus. A pulvinar mauris ultricies duis mus in. Nunc mollis praesent et."
          association="Maria Bierhoff"
          commentWidth={windowSize.width > 600 ? "400px" : "320px"}
        />
      </div>

      <div className="absolute bottom-[180px] right-0 z-10 w-fit opacity-90 400:bottom-[220px] 1000:bottom-[480px] 1000:right-auto 1000:left-[640px]">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          comment="Urna, arcu augue placerat facilisis elit enim. "
          association="Alina Mertens"
          commentWidth="240px"
        />
      </div>

      <div className="absolute bottom-[200px] right-[132px] z-10 hidden w-fit 1200:flex">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          comment="Pharetra tellus proin aenean diam metus, morbi. Dignissim malesuada blandittincidunt."
          association="Gustavo Bravo, CEO"
          commentWidth="360px"
        />
      </div>

      <div className="absolute -top-10 left-[68%] w-fit opacity-70 400:top-[4%]">
        {/* <div className="absolute top-[120px] left-[752px] w-fit opacity-70"> */}
        <HomepageSocial icon="fa-brands fa-github" />
      </div>

      <div className="absolute -bottom-10 right-[60px] z-20 w-fit opacity-40 500:bottom-auto 500:right-auto 500:top-[420px] 500:left-[12px] ">
        <HomepageSocial icon="fa-brands fa-instagram" />
      </div>

      <div className="absolute -bottom-10 right-[144px] z-20 hidden w-fit opacity-20 400:bottom-6 500:flex 1000:right-auto 1000:bottom-[252px] 1000:left-[528px]">
        <HomepageSocial icon="fa-brands fa-youtube" />
      </div>
    </div>
  );
};

export default HomepageAbout;
