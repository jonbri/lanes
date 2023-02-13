import { ReactNode, CSSProperties, forwardRef } from "react";
import { useBallStyle } from "lanes-style";

// test
export interface BallProps {
  children?: ReactNode;
  style: CSSProperties;
}
export const Ball = forwardRef<HTMLDivElement, BallProps>(
  ({ children, style }, ref) => {
    const ballStyle = useBallStyle();
    return (
      <div
        ref={ref}
        style={{
          ...ballStyle,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }
);

Ball.displayName = "Ball";
