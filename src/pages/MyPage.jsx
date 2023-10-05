import "../index.css";
import "../App.css";

import Profile from "../components/Profile.jsx";
import PlaceCard from "../components/PlaceCard.jsx";
import MypageCard from "../components/MypageCard.jsx";

function MyPage() {
  return (
    <div>
      <Profile />

      <div>
        <p
          className="semibold"
          style={{ fontSize: "18px", marginBottom: "10px" }}
        >
          이용 및 예약 현황
        </p>
      </div>

      <MypageCard />
    </div>
  );
}

export default MyPage;
