import { useEffect, useState } from "react";
import { emailRegex } from "../../../../../../helper/emailRegex";

export const useMainFirstLogic = () => {
  const [showButton, setShowButton] = useState(false);
  const [email, setEmail] = useState("");

  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const handleChange = (e) => setEmail(e.target.value);

  useEffect(() => {
    if (email.match(emailRegex) && !showButton) {
      setShowButton(true);
      return;
    }

    if (!showButton) {
      setShowButton(false);
      return;
    }

    setShowButton(false);
  }, [email]);

  return { email, handleChange, showButton, isOpen, openModal, closeModal };
};
