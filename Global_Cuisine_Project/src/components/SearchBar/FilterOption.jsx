import React, { useEffect, useState } from "react";
import "./FilterOption.css";

export default function FilterOption({
  title,
  filters,
  updateOptions,
  showFilter,
}) {
  const [open, setOpen] = useState(false);

  
  useEffect(() => { // när filtermenyn stängs så stänger den alla filtermenyer som lämnats öppna
    setOpen(false)
  }, [showFilter])

  const onClick = () => {
    setOpen(!open);
  };

  
  const ShowFilter = () => { // komponent som visar alla options inuti filtret
    return (
      <div className={"filter-container" + (open ? " open" : "")}>
        {open ? (
          filters.map((item) => (
            <button
              key={item}
              onClick={() => updateOptions(item, title)}
              className="filter-btn"
            >
              {item}
            </button>
          ))
        ) : (
          <></>
        )}
      </div>
    );
  };

  return (
    <>
      <button className="menu-item-btn" onClick={onClick}>
        {title.toUpperCase()}
      </button>
      <ShowFilter />
    </>
  );
}
