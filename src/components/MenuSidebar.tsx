import { useState } from "react";
import { Link } from "react-router-dom";
import type { MenuSidebarProps } from "../type/MapControlsProps";


export default function MenuSidebar({ sidebarOpen }: MenuSidebarProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>

      <div className="sidebar-item active">
        <Link to="/map"><span>Map <span className="badge-live">live</span></span></Link>
      </div>

        <div
            className={`sidebar-item ${openMenu === "aviation" ? "open" : ""}`}
            onClick={() => toggleMenu("aviation")}
        >
            <span>Aviation data</span>
            <span className="chevron">⌄</span>
        </div>

      {openMenu === "aviation" && (
        <div className="submenu">
          <div className="submenu-item">Airlines</div>
          <div className="submenu-item">Airports</div>
          <div className="submenu-item">Aircraft</div>
        </div>
      )}


      <div className={`sidebar-item ${openMenu === "coverage" ? "open" : ""}`}
        onClick={() => toggleMenu("coverage")}>
        <span>Add coverage</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "coverage" && (
        <div className="submenu">
          <div className="submenu-item">By region</div>
          <div className="submenu-item">By airport</div>
        </div>
      )}


      <div className={`sidebar-item ${openMenu === "api" ? "open" : ""}`}
        onClick={() => toggleMenu("api")}>
        <span>Commercial services & API</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "api" && (
        <div className="submenu">
          <div className="submenu-item">API documentation</div>
          <div className="submenu-item">Pricing</div>
          <div className="submenu-item">Contact sales</div>
        </div>
      )}

      <div className={`sidebar-item ${openMenu === "pages" ? "open" : ""}`}
        onClick={() => toggleMenu("pages")}>
        <span>Pages</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "pages" && (
        <div className="submenu">
          <Link to="/"><div className="submenu-item">Home</div></Link>
          <Link to="/map"><div className="submenu-item">Map</div></Link>
          <Link to="/dashboard"><div className="submenu-item">Dashboard</div></Link>
        </div>
      )}
       
    </div>
  );
}