import { useState } from "react";
import DateDropdown from "../components/DateDropdown";
import IndicatorSection from "../components/IndicatorSection";
import PlaceCard from "../components/PlaceCard";

function ReserveHome() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section className="mt-4 relative">
      <DateDropdown
        onDateSelect={setSelectedDate}
        selectedDate={selectedDate}
      />
      <IndicatorSection />
      <div className="px-4 mt-5">
        <PlaceCard />
      </div>
    </section>
  );
}

export default ReserveHome;
