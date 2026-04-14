import React, {useState, useEffect} from "react";

// React components
import IconNav from "./components/IconNav";

// images for the navbar
import asgardIcon from "./icons/asgard.svg";
import societyIcon from "./icons/society.svg";
import thorIcon   from "./icons/thor.svg";
import citationIcon from "./icons/citation.svg";

// main content
import Home from './pages/Home';
import Asgard from './pages/Asgard';
import Society from './pages/Society';
import Thor from './pages/Thor';
import Citations from './pages/Citations';

// dev pages
// import testIcon from "./icons/test.svg";
// import LayoutTest from "./pages/LayoutTest";


export default function App() {
  // activeId is controlled selection. Start at "home".
  const [activeId, setActiveId] = useState("home");

  // Add / remove icons here (sections)
  const navItems = [
    { id: "asgard", label: "Asgard", img: asgardIcon, content: <Asgard /> },
    { id: "society", label: "Myth & Culture", img: societyIcon, content: <Society /> },
    { id: "thor", label: "Thor", img: thorIcon, content: <Thor /> },
    { id: "citations", label: "Citations", img: citationIcon, content: <Citations /> },
    // dev pages
    // { id: "layout", label: "LayoutTest", img: testIcon, content: <LayoutTest /> },
  ];

  // scrolling to top automatically
  const goHome = () => {
    setActiveId('home');
    window.scrollTo({
      top: 0,
    });
  };
 
  // Create the page
  return (
    <>
      {/* HOME BUTTON */}
      <button
        onClick={goHome}
        className="home-button"
        style={{
          position: "fixed",
          top: "20px",
          left: "25px",
          zIndex: 1000
        }}
      >
        HOME
      </button>

      {/* MAIN SITE LAYOUT */}
      <div style={{ width: "100%" }}>
        <IconNav
          items={navItems}
          selected={activeId}
          onSelect={setActiveId}
          homeContent={<Home />}
        />
      </div>
    </>
  );
}