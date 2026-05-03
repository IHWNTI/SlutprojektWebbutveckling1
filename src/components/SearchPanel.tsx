export default function SearchPanel() {
  return (
    <div className="panel">
      <div className="tabs">
        <button className="active">Sök resa</button>
        <button>Sök hållplats</button>
      </div>

      <div className="inputs">
        <input value="Regementsgatan (Uppsala)" readOnly />
        <input value="Uppsala Centralstation" readOnly />
      </div>

      <div className="time">
        <button>Res nu</button>
        <button className="active">Avresa kl.</button>
        <button>Ankomst kl.</button>
      </div>

      <div className="datetime">
        <input type="date" defaultValue="2026-03-25" />
        <input type="time" defaultValue="15:00" />
      </div>

      <button className="searchBtn">Sök</button>
    </div>
  );
}