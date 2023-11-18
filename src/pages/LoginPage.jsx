import { useLocation } from 'react-router-dom';
import { kakaoURL } from '../static';

function LoginPage() {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } }; // `from` 정보가 없을 경우 기본값 설정

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <div className='flex justify-center h-[60vh] border-t-[1px] rounded-xl shadow-xl '>
      <div className='p-4 bg-white w-80'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Login</h1>

        {from.pathname !== '/' && (
          <div className='mb-8 text-center text-red-500'>
            로그인이 필요한 페이지입니다.
            <br />
            계속하려면 로그인 해주세요.
          </div>
        )}
        <div className='mb-4 flex flex-col'>
          <label className='w-full text-sm font-bold mb-2' htmlFor='username'>
            아이디
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='username'
            type='text'
            placeholder='Username'
          />
        </div>

        <div className='mb-6'>
          <label className='text-sm font-bold mb-2' htmlFor='password'>
            비밀번호
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
            id='password'
            type='password'
            placeholder='********'
          />
        </div>

        <div className='mb-4'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'>
            로그인
          </button>
        </div>

        <button
          onClick={handleKakaoLogin}
          className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
        >
          카카오로 로그인
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
