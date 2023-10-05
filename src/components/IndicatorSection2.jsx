import { INDICATOR_STYLE, indicators } from "../styles/static";
import { BsFillCircleFill } from "react-icons/bs";

export default function IndicatorSection2() {
  return (
    <section className="w-full bg-gray4 h-[40px] mt-2 py-[14px] flex gap-[7px] text-btn justify-start gap-4">
      {indicators.map((indicator, index) => (
        <div key={index} className={INDICATOR_STYLE}>
          <BsFillCircleFill size={10} className={indicator.color} />
          <p className="text-sm">{indicator.text}</p>
        </div>
      ))}
    </section>
  );
}
