import "../index.css";
import "../App.css";

function SelectMenu2() {
  return (
    <div
      className="bg-gray3 flex items-center grid grid-flow-col justify-stretch rounded-b-lg"
      style={{ fontSize: "14px" }}
    >
      <button className="flex items-center justify-center py-3 border-r border-gray-300">
        <h1>연장하기</h1>
      </button>
      <button className="flex items-center justify-center py-3 text-white bg-gray0 rounded-br-lg border-gray-300 border-b border-gray0">
        <h1>취소하기</h1>
      </button>
    </div>
  );
}

export default SelectMenu2;
