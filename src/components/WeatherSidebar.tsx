import { useState } from "react";

export default function WeatherPanel() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="sidebar">

        <div
            className={`sidebar-item ${openMenu === "prognoser och varningar" ? "open" : ""}`}
            onClick={() => toggleMenu("prognoser och varningar")}
        >
            <span>Prognoser och varningar</span>
            <span className="chevron">⌄</span>
        </div>

      {openMenu === "prognoser och varningar" && (
        <div className="submenu">
          <div className="submenu-item">Varningar och medelanden</div>
          <div className="submenu-item">Väderprognos</div>
          <div className="submenu-item">Meteorologens kommentarer</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => toggleMenu("radar och satellit")}>
        <span>Radar och satellit</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "radar och satellit" && (
        <div className="submenu">
          <div className="submenu-item">Radar med blixt</div>
          <div className="submenu-item">Satellit</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => toggleMenu("väder till havs")}>
        <span>Väder till havs</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "väder till havs" && (
        <div className="submenu">
          <div className="submenu-item">Sjörapporten</div>
          <div className="submenu-item">Hav- och kustväder</div>
          <div className="submenu-item">Vattenstånd och vågor</div>
        </div>
      )}

      <div className="sidebar-item" onClick={() => toggleMenu("observationer")}>
        <span>Observationer</span>
        <span className="chevron">⌄</span>
      </div>
      {openMenu === "observationer" && (
        <div className="submenu">
          <div className="submenu-item">Observationer</div>
          <div className="submenu-item">Kustobservationer</div>
        </div>
      )}
    </div>

  );
}