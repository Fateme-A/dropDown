import React, { useEffect, useRef, useState } from "react";

const DGXDropdown = ({
  onSelect,
  options,
  value,
  placeholder,
  className = "",
}) => {
  const [showList, setShowList] = useState(false);
  const dropdownRef = useRef(null);

  const handleClick = () => {
    setShowList((prev) => !prev);
  };

  const selectItem = (item) => {
    onSelect(item);
    setShowList(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowList(false);
    }
  };

  useEffect(() => {
    showList ? document.addEventListener("click", handleClickOutside) :
     document.removeEventListener("click", handleClickOutside);
  }, [showList]);

  const renderDropdownItems = () => {
    return options.map((item) => (
      <div
        key={item.key}
        className="item size text"
        onClick={() => selectItem(item)}
      >
        {item.name}
      </div>
    ));
  };

  return (
    <div
      className={`drop-down ${!!className ? className : ""}`}
      ref={dropdownRef}
    >
      <div
        className={`input size text color ${showList && "active"}`}
        onClick={handleClick}
      >
        {!value
          ? placeholder
          : options.find((item) => item.key === value)?.name}
      </div>
      {showList && (
        <div className="list size color">{renderDropdownItems()}</div>
      )}
    </div>
  );
};

export default DGXDropdown;
