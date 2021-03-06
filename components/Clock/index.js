import { useState } from "react";
import { intervalToDuration } from "date-fns";

export default function Clock({ releaseDate }) {
  function calcTimeRemaining() {
    return intervalToDuration({
      start: Date.now(),
      end: releaseDate,
    });
  }

  const [time, setTime] = useState(calcTimeRemaining());

  setTimeout(() => {
    setTime(calcTimeRemaining());
  }, 1000);

  return (
    <span>
      {time.days > 0 && (time.days > 1 ? time.days + " dias, " : " 1 dia, ")}
      {time.hours > 0 &&
        (time.hours > 1 ? time.hours + " horas, " : " 1 hora, ")}
      {time.minutes > 0 &&
        (time.minutes > 1 ? time.minutes + " minutos" : "1 minuto")}
      {time.seconds == 1 ? " e 1 segundo" : " e " + time.seconds + " segundos"}
    </span>
  );
}
