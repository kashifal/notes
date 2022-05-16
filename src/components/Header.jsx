import React, { useEffect, useState } from "react";

const Header = (props) => {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    props.getMode(mode);
  }, [mode]);
  return (
    <div className={mode === true ? "dark-head" : "header"}>
      <div className="header-banner">
        <div className="logo">
          <h3>makeTodo</h3>
        </div>
        <div className="dark">
          <i
            onClick={() => setMode(mode ? false : true)}
            className={mode === true ? "fa fa-moon-o" : "fa fa-sun-o"}
          ></i>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
