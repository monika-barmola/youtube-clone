import React from 'react';
import { Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar, user }) => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/register');
    };

    const handleUserClick = () => {
        navigate(`/channel/${user}`);
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
      <header className="header">
        <div className="header-left" onClick={handleHomeClick}>
          <Menu className="menu-icon" onClick={toggleSidebar} />
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo.png"
            alt="YouTube Logo"
            className="logo"
          />
          <h1 className="header-title">YouTube Clone</h1>
        </div>

        <div className="header-right">
          {user ? (
            <span className="sign-in-button" onClick={handleUserClick}>{user}</span>
          ) : (
            <button className="sign-in-button" onClick={handleSignInClick}>Sign In</button>
          )}
        </div>
      </header>
    );
};

export default Header;