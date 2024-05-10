import React, { useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../../redux/actions";
import LoginModal from "../LoginModal";
import RegisterModal from "../RegisterModal";

function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const openSignupModal = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const closeModal = () => {
    setShowLoginModal(false);
    setShowSignupModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutSuccess());
  };

  return (
    <nav>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={openLoginModal}>Login</button>
      )}
      {showLoginModal && (
        <LoginModal onClose={closeModal} onSignupClick={openSignupModal} />
      )}

      {showSignupModal && (
        <RegisterModal onClose={closeModal} onLoginClick={openLoginModal} />
      )}
    </nav>
  );
}

export default Header;
