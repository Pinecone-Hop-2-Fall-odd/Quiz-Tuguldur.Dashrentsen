export default function SignUp() {
  return (
    <div className="bg-gray w-screen h-screen flex justify-center items-center">
      <div className="w-[400px] h-[400px] bg-[#9f8cca]  flex flex-col items-center pt-[20px] gap-[30px] ">
        <h1 className="text-[30px]">SignUp</h1>
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          placeholder="Username"
          className="bg-gray border-solid border-gray border-[1px] w-[300px] h-[60px] "
        ></input>
        <input
          type="text"
          id="passwordInput"
          name="passwordInput"
          placeholder="Password"
          className="bg-gray border-solid border-gray border-[1px] w-[300px] h-[60px] "
        ></input>
        <button className="text-white bg-[#7e6df3] w-[300px] h-[50px]">Sign Up</button>
      </div>
    </div>
  );
}
