import React from "react";
import {useForm} from "react-hook-form"

const PrivacyPolicy = () => {
  return (
    <div
      style={{
        width: "312px",
        backgroundColor: "white",
        boxShadow:
          "0px 1px 2px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.06)",
        borderRadius: "12px",
        padding: "24px",
        gap: "4px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <span>Friedrichsgracht 58-110</span>
      <span>10178 Berlin, Germany</span>
    </div>
  );
};

export default PrivacyPolicy;
