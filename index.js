import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import Redbox from "redbox-react";
import { ThemeProvider } from "mineral-ui/themes";
// import "./index.css";
// import App from "./App";
//
// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")
// );

import Presentation from "./presentation";

const CustomErrorReporter = ({ error }) => <Redbox error={ error } />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <ThemeProvider>
      <Presentation />
    </ThemeProvider>
  </AppContainer>,
  document.getElementById("root"),
);

if (module.hot) {
  module.hot.accept("./presentation", () => {
    const NextPresentation = require("./presentation").default; ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <ThemeProvider>
          <NextPresentation />
        </ThemeProvider>
      </AppContainer>,
      document.getElementById("root"),
    );
  });
}
