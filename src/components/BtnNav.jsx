import { AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

function BtnNav() {
  const location = useLocation();

  const isReservationPage = location.pathname.startsWith("/reservation");
  const isMyPage = location.pathname.startsWith("/mypage");
  const isReserveDetailPage = location.pathname.startsWith("/reservation/");

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
      {!isReserveDetailPage && visible ? (
        <section
          className={`sticky bottom-0 left-0 right-0 z-50 flex justify-around items-center text-gray0 border-t-[1px] border-gray1 w-full h-[50px]`}
        >
          <Link
            to={"/reservation"}
            className={`flex items-center flex-col justify-center w-full h-full ${
              isReservationPage ? "bg-gray0 text-white" : "bg-white text-gray0"
            }`}
          >
            <AiOutlineCheck className="text-lg" />
            <span className="text-btn">예약하기</span>
          </Link>
          <Link
            to={"/mypage/:id"}
            className={`flex items-center flex-col justify-center w-full h-full ${
              isMyPage ? "bg-gray0 text-white" : "bg-white text-gray0"
            }`}
          >
            <AiOutlineUser className="text-lg" />
            <span className="text-btn">마이페이지</span>
          </Link>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default BtnNav;
