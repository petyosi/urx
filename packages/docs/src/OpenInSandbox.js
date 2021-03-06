import * as React from "react";

const indexTsx = `
import * as React from "react";
import { render } from "react-dom";

import App from "./example";

const rootElement = document.getElementById("root");
render(\<App />, rootElement);
`;

const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
	<title>urx Example</title>
</head>
<body>
	<div id="root"></div>
</body>
</html>
`;

const packageJson = {
  name: "urx-example",
  version: "1.0.0",
  description: "urx example",
  keywords: ["typescript", "urx", "starter"],
  main: "src/example.ts",
  dependencies: {
    "@virtuoso.dev/urx": "latest",
    "@virtuoso.dev/react-urx": "latest",
  },
  devDependencies: {
    "parcel-bundler": "^1.6.1",
  },
  scripts: {
    start: "parcel index.html --open",
    build: "parcel build index.html",
  },
};

function openInSandbox(e) {
  const code = e.target.parentElement.nextElementSibling.querySelector(
    ".prism-code"
  ).innerText;

  fetch("https://codesandbox.io/api/v1/sandboxes/define?json=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      files: {
        "package.json": {
          content: packageJson,
        },

        "src/example.ts": {
          content: code,
        },

        "/index.html": {
          content: '<div id="root"></div>',
        },
      },
    }),
  })
    .then((x) => x.json())
    .then((data) => {
      window.open(
        `https://codesandbox.io/s/${data.sandbox_id}?file=/src/example.ts`,
        "_blank"
      );
    });
}

export default () => {
  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <button className="open-in-sandbox" onClick={openInSandbox}>
        Open in Sandbox
      </button>
    </div>
  );
};
