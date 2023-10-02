import { RiAlarmWarningLine } from "react-icons/ri";

function PlaceCard({ title }) {
  return (
    <section className="w-full h-[200px] flex flex-col bg-gray4 shadow-md rounded-2xl">
      <div className="flex justify-between items-center px-4 scroll-pr-32 py-2 border-b-[1px] border-gray1">
        <h1 className="text-lg">SMASH0</h1>
        <button className="flex items-center p-1 px-2 rounded-full bg-gray3 text-btn text-red">
          <RiAlarmWarningLine size={12} />
          건의하기
        </button>
      </div>
    </section>
  );
}

export default PlaceCard;
