import { useState } from "react";

export default function MenuSidebar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">

      <div className="sidebar-item active">
        <span>Flight tracker map <span className="badge-live">live</span></span>
      </div>

      {/* Aviation */}
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

      {/* Coverage */}
      <div className="sidebar-item" onClick={() => toggleMenu("coverage")}>
        <span>Add coverage</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "coverage" && (
        <div className="submenu">
          <div className="submenu-item">By region</div>
          <div className="submenu-item">By airport</div>
        </div>
      )}

      {/* API */}
      <div className="sidebar-item" onClick={() => toggleMenu("api")}>
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

      {/* About */}
      <div className="sidebar-item" onClick={() => toggleMenu("about")}>
        <span>About</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "about" && (
        <div className="submenu">
          <div className="submenu-item">Our team</div>
          <div className="submenu-item">Careers</div>
        </div>
      )}

    </div>
  );
}