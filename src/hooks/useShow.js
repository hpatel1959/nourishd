import { useState } from "react";

export default function useShow() {
  const [value, setValue] = useState(false);

  function showValue() {
    setValue(true);
    setTimeout(() => {
      setValue(false);
    }, 2000);
  }

  return [value, showValue];
}
