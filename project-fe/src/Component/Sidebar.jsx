import React from "react";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  let navigate = useNavigate();
  const logout = () => {
    let loginSignupClass = document.querySelector(".ls-remove");
    loginSignupClass.className = "login-signup";
    console.log(loginSignupClass);
    let headClass = document.querySelector(".head");
    headClass.className = "head1";
    localStorage.setItem("user", "");
    navigate("/");
  };
  return (
    <div class="sidebar">
      <div class="sidebar-content">
        <img
          class="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAiCAYAAACqVHINAAAABHNCSVQICAgIfAhkiAAAAjZJREFUSEu1lj1IHFEUhR2wEIloYSGCsChEJAYTAoqCGDAoBCL+BBLSWRqEVBY2Foq9naWVkDpCGlEECy0UTGxcjPiDxSYkFlkhFsL6HXm7mHVn3nV298Jlduedc7+5b97Mm6CixJHJZBKUHCL7yA4yEZSKQfE6ak2Tk/k1SwIB8JTCK2RtoYsuGgKgh8JLYQBBi4IAeEKNz1GAUkCWKdLpu6+xO6GLYYrP+wBFdQJE0/S4bBAANRRftQBidwLkOeaFckNGAUyUG/IBgNIUsVYX0/WO6kpTxIW8pfqYiRD3iaeTEbx6TkwRt5M3VFeaIi7kNdWVpgho/Z9TnnL8Qi4HQfAtyo1nkPEBE0H3BMOvAuKvnJsBdlaoEJ5XnO9/COQoRPyX8xOAtvPHgbzknNIU6mTPo1RHmsZc4Onlj9IUgmx6lGnGPwE6zOrwdPNbO6IpBNH8++InkPE7EG1UXT5TdlwQ7c/VBsMioA3p8LzgoLREWpAplK0G9RmQWQd5xlFpiZQgej3oQ8wSc4Au8LQj1meQJZKCNKD8aFGjWQJyjKeN30pLrN2+VjC959BkcKwD2UWvvd2yv/9Bv5WFNGLS96svdjDtAGlG2OITM76NPp17QTqj1n9UfMe0jzaBSBkVB2hTEvz3FnY3VFcZFkmMSQPkHN2PbJF7r3q3EMJu6jHmEw8k10EoxC2EKjcdWnl34yQCoqnR+FX+NERuWlxxJYZ68pHLlObZdasLuHT5m/PXYXN8A0QF5eZCS3rAAAAAAElFTkSuQmCC"
          alt="logo"
        />
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/profile")}>Profile</li>
          {/* <li>Timesheet</li>
          <li>Project</li> */}
          {/* <li>
            <div class="cust-option">
              Leave
              <div class="my-icon">
                <i
                  class="material-icons menu-drop-down"
                  //   style="font-size: 20px; color: white; outline: none"
                >
                  expand_more
                </i>
              </div>
            </div>
          </li>
          <div class="option-content">
            <div class="option-menu">
              <p>Sick leave</p>
              <p>Personal leave</p>
              <p>General leave</p>
            </div>
          </div>
          <li>Work from home</li>
          <li>
            <div class="cust-option">
              Approvals
              <div class="my-icon">
                <i
                  class="material-icons menu-drop-down2"
                  //   style="font-size: 20px; color: white; outline: none"
                >
                  expand_more
                </i>
              </div>
            </div>
          </li>
          <div class="option-content2">
            <div class="option-menu2">
              <p>PM</p>
              <p>HR</p>
              <p>CTO</p>
            </div>
          </div>
          <li>
            <div class="cust-option">
              Setting
              <div class="my-icon">
                <i
                  class="material-icons menu-drop-down3"
                  //   style="font-size: 20px; color: white; outline: none"
                >
                  expand_more
                </i>
              </div>
            </div>
          </li>
          <div class="option-content3">
            <div class="option-menu3">
              <p>Notifaction</p>
              <p>Profile</p>
              <p>Account</p>
              <p>Calender</p>
            </div>
          </div>
          <li>Resourcing</li>
          <li>Access Control</li> */}
        </ul>
      </div>
      <div onClick={logout} className="logout">
        Logout
      </div>
    </div>
  );
}

export default Sidebar;
