import { useEffect, useState } from "react";
import dayjs from "dayjs";

export default function Clock() {
  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center max-h-[7dvh] flex flex-col justify-center px-2 items-center text-white">
      <div className="text-lg tracking-wide">
        {now.format("hh:mm A")}
      </div>
      <div className="text-sm opacity-80">
        {now.format("ddd, MMM D YYYY")}
      </div>
    </div>
  );
}
