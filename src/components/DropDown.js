import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export default function DropDown({ setTryLogin }) {
  const { phone, LogoutUser } = useAuth();
  return (
    <div className="flex justify-end mr-40">
      <div className="login-dropdown w-1/6 z-2  pt-6 pb-2 flex flex-col gap-2  bg-[#FFFFFF] ">
        <div>
          <div className="px-6">My Account</div>
          <div className="px-6">{phone}</div>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/account/orders">
            <button
              onClick={() => {
                setTryLogin(false);
              }}
              className="text-left hover:bg-[#F8F8F8] px-6"
            >
              My Orders
            </button>
          </Link>
          <Link to="/account/addresses">
            <button
              onClick={() => {
                setTryLogin(false);
              }}
              className="text-left hover:bg-[#F8F8F8] px-6"
            >
              Saved Addresses
            </button>
          </Link>
          <Link to="/account/wallet">
            <button
              onClick={() => {
                setTryLogin(false);
              }}
              className="flex justify-between hover:bg-[#F8F8F8] px-6"
            >
              <div>My Wallet</div>
              {/* <div>$0</div> */}
            </button>
          </Link>
          <Link to="/account/faqs">
            <button
              onClick={() => {
                setTryLogin(false);
              }}
              className="text-left hover:bg-[#F8F8F8] px-6"
            >
              FAQ's
            </button>
          </Link>
          <Link to="account/privacy">
            <button
              onClick={() => {
                setTryLogin(false);
              }}
              className="text-left hover:bg-[#F8F8F8] px-6"
            >
              Account Privacy
            </button>
          </Link>
          <Link>
            <button
              className="text-left hover:bg-[#F8F8F8] px-6"
              onClick={() => {
                LogoutUser();
                setTryLogin(false);
              }}
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
