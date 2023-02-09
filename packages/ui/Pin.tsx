import * as React from "react";
export interface PinProps {
  children?: number;
}
export const Pin = ({ children = 0 }: PinProps) => {
  return <span>{children}</span>;
};
