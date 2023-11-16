import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function BtnNav() {
  const location = useLocation();

  const isReservationPage = location.pathname.startsWith("/reservation");
  const isMyPage = location.pathname.includes("mypage");

  let visible = true;

  switch (location.pathname) {
    case "/mypage/before-suggest":
      visible = false;
      break;
    case "/mypage/before-reserve":
      visible = false;
      break;
    case "/mypage/suggest":
      visible = false;
      break;
    default:
      visible = true;
  }

  return (
    <>
      {visible ? (
        <section
          className={`sticky bottom-0 left-0 right-0 z-50 flex justify-around items-center  w-full h-[50px]`}
        >
          <Link
            to={"/reservation"}
            className={`flex items-center flex-col justify-center w-full h-full ${
              isReservationPage ? " text-myblue" : "bg-white text-gray0"
            }`}
          >
            <AiOutlineCheck className="text-lg" size={23} />
            <span className="text-btn">예약하기</span>
          </Link>
          <Link
            to={"/mypage/:id"}
            className={`flex items-center flex-col justify-center w-full h-full`}
          >
            {isMyPage ? (
              <>
                <BiSolidUser className="text-lg text-myblue" size={23} />
                <span className="text-btn text-myblue">마이페이지</span>
              </>
            ) : (
              <>
                <AiOutlineUser className="text-lg text-gray0" size={23} />
                <span className="text-btn">마이페이지</span>
              </>
            )}
          </Link>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default BtnNav;
