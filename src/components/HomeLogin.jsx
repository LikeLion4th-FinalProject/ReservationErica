import { kakaoURL } from "../static";
import { BiSolidMessageRounded } from "react-icons/bi";

function HomeLogin() {
  
  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  }
    return (
      <section className={`flex absolute flex-col justify-center items-center h-[100vh] z-[99] bg-white w-full top-0 left-0 gap-4`}>
        <h1 className="text-[40px] bold text-primary mb-12">
          자리 있소융
        </h1>
        <h4 className="mb-6 text-gray0 text-[14px]">카카오톡으로 로그인해주세요</h4>
        <div
          onClick={handleKakaoLogin}
          className='flex items-center p-4 py-3 justify-center w-4/5 rounded-[8px] bg-yellow-300 cursor-pointer text-black font-bold focus:outline-none focus:shadow-outline'
        >
          <BiSolidMessageRounded className="mr-2" color="#47292B"/>
          <span className="text-[#47292B]">카카오로 로그인</span>
        </div>
        <div className="py-4 h-1/5">

        </div>
    </section>
  )
}

export default HomeLogin