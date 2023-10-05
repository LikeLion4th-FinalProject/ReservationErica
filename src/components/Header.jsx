import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate(-1);
  const location = useLocation();
  let visible = true; // 헤더 상황 따라 보이게 할 지 결정하는 변수

  switch (location.pathname) {
    case "/mypage/0":
      visible = false;
      break;
    default:
      visible = true;
  }

  return (
    <>
      {visible ? (
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
      ) : (
        <div className="h-[100px] w-full flex items-center justify-between px-4">
          <h1
            className="bold text-gray0 flex-[1.6] text-center"
            style={{ fontSize: "18px" }}
          >
            마이 페이지
          </h1>
        </div>
      )}
    </>
  );
}

export default Header;
