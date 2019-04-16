import React from "react";

const LanguageNav = props => {
  return (
    <select onChange={props.handleLanguageChange}>
      <option value="fr">FR</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageNav;
