import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

function Header({ title }) {
  const navigate = useNavigate(-1);
  const location = useLocation();
  const [headerName, setHeaderName] = useState("Home");

  let headerContent;

  if (location.pathname === "/mypage/0") {
    headerName === "마이 페이지";
    headerContent = (
      <div className="h-[80px] w-full flex items-center justify-between px-4">
        <h1 className="text-gray0 flex-[1.6] text-center">마이 페이지</h1>
      </div>
    );
  } else if (location.pathname === "/suggest") {
    headerName === "건의내역";
    headerContent = (
      <section className="h-[56px] w-full flex items-center justify-between px-4">
        <div className="w-full flex items-center justify-between">
          <FaArrowLeft
            onClick={() => navigate(-1)}
            size={24}
            className="text-gray0 cursor-pointer flex-[0.2]"
          />
          <h1 className="text-gray0 flex-[1.6] text-center">건의내역</h1>
          <div className="flex-[0.2]"></div>
        </div>
      </section>
    );
  } else if (location.pathname === "/detailsuggest") {
    headerName === "건의 세부내용";
    headerContent = (
      <section className="h-[56px] w-full flex items-center justify-between px-4">
        <div className="w-full flex items-center justify-between">
          <FaArrowLeft
            onClick={() => navigate(-1)}
            size={24}
            className="text-gray0 cursor-pointer flex-[0.2]"
          />
          <h1 className="text-gray0 flex-[1.6] text-center">건의 세부내용</h1>
          <div className="flex-[0.2]"></div>
        </div>
      </section>
    );
  } else {
    headerName === "Home";
    headerContent = (
      <section className="h-[56px] w-full flex items-center justify-between px-4">
        <div className="w-full flex items-center justify-between">
          <FaArrowLeft
            onClick={() => navigate(-1)}
            size={24}
            className="text-gray0 cursor-pointer flex-[0.2]"
          />
          <h1 className="text-gray0 flex-[1.6] text-center">{title}</h1>
          <div className="flex-[0.2]"></div>
        </div>
      </section>
    );
  }

  return <>{headerContent}</>;
}

export default Header;
