import React from "react";
import CroppedPic from "../../../assets/img/croppedPic.webp";
import HomepageComment from "./HomepageComment";
import HomepageSocial from "./HomepageSocial";

const HomepageAbout = () => {
  return (
    <div className="relative flex w-full gap-x-6 bg-white py-[100px] px-14">
      <div className="flex w-full flex-col items-center gap-y-6">
        <h2 className="text text-5xl">Our Vision</h2>
        <div className="flex w-full gap-x-3">
          <img
            className="h-[88px] w-[88px] min-w-[88px] rounded-full bg-blue-200 bg-cover bg-center"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            alt="profile"
          />
          <div className="w-full rounded-[24px] bg-white p-6 shadow">
            <span className="text-base text-lmGrey600">
              Congue egestas tempus id habitasse et quam netus rhoncus. Vitae
              enim euismod morbi varius consequat interdum sit phasellus in.
              Ipsum semper tempus arcu odio eu eros nunc. Morbi id id at
              ullamcorper viverra.
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center py-6">
        <img src={CroppedPic} alt="cropped bmw" />
      </div>

      <div className="absolute bottom-[160px] left-[160px] w-fit z-10">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          comment="Augue fringilla viverra id tristique malesuada cras urna."
          association="Nele Langrock, Co-Founder"
          commentWidth="360px"
        />
      </div>

      <div className="absolute bottom-[360px] left-[220px] w-fit opacity-50 z-10">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
          comment="Sapien ac risus amet lectus. A pulvinar mauris ultricies duis mus in. Nunc mollis praesent et."
          association="Maria Bierhoff"
          commentWidth="400px"
        />
      </div>

      <div className="absolute bottom-[480px] left-[640px] w-fit opacity-90 z-10">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          comment="Urna, arcu augue placerat facilisis elit enim. "
          association="Alina Mertens"
          commentWidth="240px"
        />
      </div>

      <div className="absolute bottom-[200px] right-[132px] w-fit z-10">
        <HomepageComment
          photoUrl="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          comment="Pharetra tellus proin aenean diam metus, morbi. Dignissim malesuada blandittincidunt."
          association="Gustavo Bravo, CEO"
          commentWidth="360px"
        />
      </div>

      <div className="absolute top-[120px] left-[752px] w-fit opacity-70">
        <HomepageSocial icon="fa-brands fa-github" />
      </div>
      
      <div className="absolute top-[420px] left-[12px] w-fit opacity-40">
        <HomepageSocial icon="fa-brands fa-instagram" />
      </div>
      
      <div className="absolute bottom-[252px] left-[528px] w-fit opacity-20">
        <HomepageSocial icon="fa-brands fa-youtube" />
      </div>
    </div>
  );
};

export default HomepageAbout;
