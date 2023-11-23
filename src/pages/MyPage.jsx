import '../index.css';
import '../App.css';

import Profile from '../components/mypage/Profile';
import MypageCard from '../components/mypage/MypageCard';

function MyPage() {
  return (
    <div className='px-4 rounded-b-lg rounded-2xl'>
      <Profile />
      <div>
        <p
          className='semibold'
          style={{ fontSize: '18px', marginBottom: '10px' }}
        >
          이용 및 예약 현황
        </p>
      </div>
      <MypageCard />
    </div>
  );
}

export default MyPage;
