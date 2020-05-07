// import React
import React from "react";
// import external stylesheet
import "./style.css";

// This component exports both the List and ListItem components

// export List component
export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

// export ListItem component
export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
