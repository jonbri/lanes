import { Pin, BowlingBall } from "lanes-ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Pin>{0}</Pin>
      <Pin>{1}</Pin>
      <br />
      <BowlingBall index={0} />
      <BowlingBall index={1} />
    </div>
  );
}
