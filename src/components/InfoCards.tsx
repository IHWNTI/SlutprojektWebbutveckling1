export default function InfoCards() {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">

      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold">Buss 1</h2>
        <p>Status: I tid</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold">Buss 2</h2>
        <p>Status: Försenad</p>
      </div>

      <div className="bg-white p-4 shadow rounded">
        <h2 className="font-bold">Buss 3</h2>
        <p>Status: Kommer snart</p>
      </div>

    </div>
  );
}