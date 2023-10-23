import { useState } from "react";
import { department, grade } from "../static/info";
import Dropdown from "../components/Dropdown";

function SignupPage() {
  const initialUserName = sessionStorage.getItem("kakaoUserName") || "";
  const [formState, setFormState] = useState({
    grade: "",
    name: initialUserName,
    department: "",
  });

  const handleSelectChange = (name, value) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleNameChange = (e) => {
    setFormState({
      ...formState,
      name: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("입력한 회원가입 정보:", formState);
  };

  const isFormComplete =
    formState.name && formState.grade && formState.department;
  const buttonClasses = isFormComplete
    ? "bg-primary text-white"
    : "bg-gray1 text-gray-black";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-0">
      <div className="flex flex-col gap-[10px] items-center ">
        <h2 className="mb-8 semibold text-lg text-center">회원가입</h2>
        <h1 className="text-3xl semibold">자리있소융</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg w-full max-w-md flex flex-col justify-around h-[70vh]"
      >
        {/* section */}
        <section className="flex flex-col gap-5">
          <div
            className={`w-full relative h-[70px] flex flex-col justify-center items-start p-8 px-4 gap-2 
          ring-2 rounded-lg `}
          >
            <label htmlFor="name" className="text-sm font-medium text-gray-600">
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleNameChange}
              className={`w-full text-lg flex justify-between items-center px-0 border-0 outline-none`}
              placeholder="이름을 입력하세요"
            />
          </div>
          <Dropdown
            label="학년"
            options={grade}
            selected={formState.grade}
            onOptionSelect={(value) => handleSelectChange("grade", value)}
          />

          <Dropdown
            label="학과"
            options={department}
            selected={formState.department}
            onOptionSelect={(value) => handleSelectChange("department", value)}
          />
        </section>
        <button
          type="submit"
          disabled={!isFormComplete}
          onClick={handleSubmit}
          className={`p-4 py-[10px] semibold w-full rounded ${buttonClasses} mt-4`}
        >
          가입하기
        </button>
      </form>
    </section>
  );
}

export default SignupPage;
