import "../index.css";
import "../App.css";

import Icon1 from "../static/icon1.png";
import Icon2 from "../static/icon2.png";
import Icon3 from "../static/icon3.png";
import Image from "../static/profile_image.png";

import SelectMenu from "../components/SelectMenu.jsx";

function Profile() {
  return (
    <section className="w-full flex-col bg-gray4 rounded-2xl border-[1px] mb-10 items-center">
      <div className="flex items-center px-4 py-6">
        <div className="mx-4">
          <img src={Image} style={{ width: "88px" }} />
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="semibold mx-2" style={{ fontSize: "20px" }}>
              김아무개
            </h3>
            <div className="p-1 px-2 mx-2 my-2 border text-gray-500 rounded-full bg-gray3 text-btn tracking-wider gap-1">
              <span>제재수 0</span>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="mx-2 text-gray-500">
              <h5>학번</h5>
              <h5>학과</h5>
            </div>
            <div className="mx-1">
              <h5>3030234352</h5>
              <h5>우주여행학과</h5>
            </div>
          </div>
        </div>
      </div>
      <SelectMenu />
    </section>
  );
}

export default Profile;
