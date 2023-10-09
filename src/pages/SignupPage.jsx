import { useState } from "react";

function SignupPage() {
  const [formState, setFormState] = useState({
    grade: "",
    name: "",
    department: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formState);
  };

  return (
    <section className="min-h-screen flex items-start justify-center p-4 py-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg w-full max-w-md "
      >
        <h2 className="text-3xl mb-8 font-semibold text-primary text-center">
          회원가입
        </h2>
        <div className="mb-5">
          <label
            htmlFor="grade"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            학년
          </label>
          <input
            type="text"
            id="grade"
            name="grade"
            value={formState.grade}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="학년을 입력하세요"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="이름을 입력하세요"
          />
        </div>
        <div className="mb-7">
          <label
            htmlFor="department"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            소속
          </label>
          <select
            id="department"
            name="department"
            value={formState.department}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>
              학과/학부를 선택하세요.
            </option>
            <option value="computer_science">컴퓨터학부</option>
            <option value="ict_convergence">ICT 융합학부</option>
            <option value="ai">인공지능학과</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          회원가입
        </button>
      </form>
    </section>
  );
}

export default SignupPage;
