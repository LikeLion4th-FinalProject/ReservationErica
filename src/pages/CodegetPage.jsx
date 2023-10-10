import useKakaoLogin from "../hooks/useKakaoLogin";

function CodegetPage() {
  const code = new URL(window.location.href).searchParams.get("code");
  const userData = useKakaoLogin(code);

  return (
    <div>{userData && <h2>Welcome, {userData.properties.nickname}!</h2>}</div>
  );
}

export default CodegetPage;
4;
