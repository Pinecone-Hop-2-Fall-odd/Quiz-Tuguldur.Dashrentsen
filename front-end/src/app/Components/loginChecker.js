export default function loginChecker() {
  const token = localStorage.getItem("token");
  if (token == null) {
    console.log("Log in false");
  }

  return <div></div>;
}
