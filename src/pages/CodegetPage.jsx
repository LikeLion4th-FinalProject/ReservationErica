function CodegetPage() {
  const code = new URL(window.location.href).searchParams.get("code");
  return <div>{code && code}</div>;
}

export default CodegetPage;
