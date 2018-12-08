import * as React from "react";

interface IGreeterProps {
  target: string;
}

export const Greeter: React.SFC<IGreeterProps> = ({ target }) => (
  <>
    <h1>Hello {target}</h1>
    <p>This is a good broiler plait</p>
  </>
);
