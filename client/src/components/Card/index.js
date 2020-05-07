// import react
import React from "react";

// Card function component - deconstruct props
function Card({ icon, title, children }) {
  // return JSX
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h3>
          <strong>
            <i className={`fa fa-${icon}`} aria-hidden="true" /> {title}
          </strong>
        </h3>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
}

// export Card component
export default Card;
