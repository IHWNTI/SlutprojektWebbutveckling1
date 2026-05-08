
export default function MenuSidebar() {
  return (
    <div>

    <div className="sidebar">
        <div className="sidebar-item active">
<span>Flight tracker map <span className="badge-live">live</span></span>
        </div>

        <div className="sidebar-item">
        <span>Aviation data</span>
        <span className="chevron"><i className="ti ti-chevron-down" aria-hidden="true"></i></span>
        </div>
        <div id="aviation-sub" className="submenu">
        <div className="submenu-item">Airlines</div>
        <div className="submenu-item">Airports</div>
        <div className="submenu-item">Aircraft</div>
        </div>

        <div className="sidebar-item">
        <span>Email alerts <i className="ti ti-lock icon-badge" style={{ color: "#f5a623" }} aria-hidden="true"></i></span>
        </div>

        <div className="sidebar-item">
        <span>Subscription plans <i className="ti ti-trophy icon-badge" style={{ color: "#2ecc71" }} aria-hidden="true"></i></span>
        </div>

        <div className="sidebar-item">
        <span>Add coverage</span>
        <span className="chevron"><i className="ti ti-chevron-down" aria-hidden="true"></i></span>
        </div>
        <div id="coverage-sub" className="submenu">
        <div className="submenu-item">By region</div>
        <div className="submenu-item">By airport</div>
        </div>

        <div className="sidebar-item">
        <span>Commercial services & API</span>
        <span className="chevron"><i className="ti ti-chevron-down" aria-hidden="true"></i></span>
        </div>
        <div id="api-sub" className="submenu">
        <div className="submenu-item">API documentation</div>
        <div className      ="submenu-item">Pricing</div>
        <div className="submenu-item">Contact sales</div>
        </div>

        <div className      ="sidebar-item">Press & media center</div>

        <div className="sidebar-item">
        <span>About</span>
        <span className="chevron"><i className="ti ti-chevron-down" aria-hidden="true"></i></span>
        </div>
        <div id="about-sub" className="submenu">
        <div className="submenu-item">Our team</div>
        <div className="submenu-item">Careers</div>
        </div>

        <hr className="sidebar-divider"/>

        <div className="sidebar-item">MyFR24 – flight logbook</div>
        <div className="sidebar-item">JetPhotos – aviation photos</div>
        <div className="sidebar-item" style={{ borderBottom: "none" }}>Forum</div>
    </div>
    </div> 
    );
}