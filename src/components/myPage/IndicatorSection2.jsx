import { INDICATOR_STYLE, indicators2 } from "../../styles/static";
import { BsFillCircleFill } from "react-icons/bs";

export default function IndicatorSection2() {
  return (
    <section className=" bg-gray4 h-[40px] mt-2 py-[14px] flex gap-[7px] text-btn justify-start">
      {indicators2.map((indicator2, index) => (
        <div key={index} className={INDICATOR_STYLE}>
          <BsFillCircleFill size={10} color={indicator2.color} />
          <p className="text-xs">{indicator2.text}</p>
        </div>
      ))}
    </section>
  );
}
