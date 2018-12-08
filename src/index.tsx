import * as React from "react";
import * as ReactDOM from "react-dom";

import { Greeter } from "src/components/Greeter";
import "./styles.scss";

const App: React.SFC<{}> = () => <Greeter target="foo" />;

ReactDOM.render(<App />, document.getElementById("root"));
