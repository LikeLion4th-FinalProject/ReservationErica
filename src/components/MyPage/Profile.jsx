import '../../index.css';
import '../../App.css';

// import Image from '../../assets/';
import SelectMenu from './SelectMenu.jsx';
import profileTemp1 from '../../assets/alertHYU.png';
import profileTemp2 from '../../assets/familyHYU.png';
import profileTemp3 from '../../assets/sorryHYU.png';
import profileTemp4 from '../../assets/studyHYU.png';
import profileTemp5 from '../../assets/taskHYU.png';
const profileImagePaths = [
  profileTemp1,
  profileTemp2,
  profileTemp3,
  profileTemp4,
  profileTemp5,
];

const randomIndex = Math.floor(Math.random() * profileImagePaths.length);
const randomImagePath = profileImagePaths[randomIndex];

function Profile() {
  const username = sessionStorage.getItem('username');
  // 학번 정보 가져오기, 아직 없는 듯?
  // const schoolnum = sessionStorage.getItem("schoolnum");
  // 학과 정보 가져오기, 아직 없는 듯?
  // const major = sessionStorage.getItem("major");

  return (
    <section className='w-full flex-col bg-gray4 rounded-2xl mt-4 mb-10 items-center'>
      <div className='flex items-center px-4 py-6'>
        <div className='mx-4'>
          <img src={randomImagePath} style={{ width: '88px' }} />
        </div>
        <div>
          <div className='flex items-center'>
            <h3 className='semibold mx-2' style={{ fontSize: '20px' }}>
              {username}
            </h3>
          </div>
          {/* <div className="flex mt-2">
            <div className="mx-2 text-gray-500">
              <h5>학번</h5>
              <h5>학과</h5>
            </div>
            <div className="mx-1">
              <h5>3030234352</h5>
              <h5>우주여행학과</h5>
            </div>
          </div> */}
        </div>
      </div>
      <SelectMenu />
    </section>
  );
}

export default Profile;
