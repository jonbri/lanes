import * as React from "react";
import { usePinStyle } from "lanes-style";
export interface PinProps {
  children?: number;
}
export const Pin = ({ children = 0 }: PinProps) => {
  const pinStyle = usePinStyle();
  return <span style={pinStyle}>{children}</span>;
};
