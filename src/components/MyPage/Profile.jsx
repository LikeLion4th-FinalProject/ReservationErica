import "../../index.css";
import "../../App.css";

import Icon1 from "../../static/scroll-text.svg";
import Icon2 from "../../static/siren.svg";
import Image from "../../static/profile_image.png";

import SelectMenu from "./SelectMenu.jsx";

function Profile() {
  const username = sessionStorage.getItem("username");
  // 학번 정보 가져오기, 아직 없는 듯?
  // const schoolnum = sessionStorage.getItem("schoolnum");
  // 학과 정보 가져오기, 아직 없는 듯?
  // const major = sessionStorage.getItem("major");

  return (
    <section className="w-full flex-col bg-gray4 rounded-2xl mt-4 mb-10 items-center">
      <div className="flex items-center px-4 py-6">
        <div className="mx-4">
          <img src={Image} style={{ width: "88px" }} />
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="semibold mx-2" style={{ fontSize: "20px" }}>
              {username}
            </h3>
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
