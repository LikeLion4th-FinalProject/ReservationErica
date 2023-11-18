

function HomeLogin() {
    return (
      <section>
           <button
          onClick={handleKakaoLogin}
          className='bg-yellow-300 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
        >
          카카오로 로그인
        </button>
    </section>
  )
}

export default HomeLogin