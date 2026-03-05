import React, { useRef, useState, useEffect } from "react";

export default function IconNav({ items = [], selected, onSelect, homeContent = null, initial = "home" }) {
  const isControlled = selected !== undefined;
  const [internalSelected, setInternalSelected] = useState(initial);
  const currentSelected = isControlled ? selected : internalSelected;

  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const measure = () => {
      if (!contentRef.current) return setContentHeight(0);
      const el = contentRef.current.querySelector(".iconnav__content-inner");
      if (!el) return setContentHeight(0);
      setContentHeight(el.scrollHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [currentSelected, items]);

  // When selection changes, remove keyboard focus from icon buttons to avoid :focus transform sticking
  useEffect(() => {
    if (!containerRef.current) return;
    const buttons = containerRef.current.querySelectorAll(".iconnav__button");
    buttons.forEach((b) => b.blur());
  }, [currentSelected]);

  const changeSelection = (id) => {
    if (isControlled) {
      onSelect?.(id);
    } else {
      setInternalSelected(id);
    }
  };

  const handleClick = (id) => {
    if (id === currentSelected) {
      // clicking the active icon returns to home
      changeSelection("home");
      return;
    }
    changeSelection(id);
  };

  const active = currentSelected === "home" ? { id: "home", content: homeContent } : items.find((it) => it.id === currentSelected) ?? null;
  const isOpen = currentSelected != null;

  return (
    <div className="iconnav" ref={containerRef}>
      <div className="iconnav__bar" role="tablist" aria-label="Main navigation">
        {items.map((it) => (
          <button
            key={it.id}
            role="tab"
            aria-selected={currentSelected === it.id}
            className={`iconnav__button ${currentSelected === it.id ? "iconnav__button--active" : ""}`}
            onClick={() => handleClick(it.id)}
            title={it.label}
            type="button"
          >
            <img src={it.img} alt="" className="iconnav__img" aria-hidden="true" />
            <div className="iconnav__label">{it.label}</div>
          </button>
        ))}
      </div>

      <div className="iconnav__divider" aria-hidden="true" />

      <div
        className={`iconnav__content ${isOpen ? "iconnav__content--open" : ""}`}
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
        ref={contentRef}
        aria-live="polite"
      >
        <div className="iconnav__content-inner">{active ? active.content : null}</div>
      </div>
    </div>
  );
}