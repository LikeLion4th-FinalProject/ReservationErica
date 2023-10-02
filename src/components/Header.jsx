import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ title }) {
  const navigate = useNavigate(-1);
  return (
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

export default Header;
