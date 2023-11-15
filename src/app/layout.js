import React from "react";

import "./styles.css";

function RootLayout({ children }) {
  const timestamp = new Date().toLocaleString();

  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on {new Date().toLocaleString()}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
