export default function MapControls() {
  return (
    <div className="flex gap-2 p-2 bg-white shadow justify-center">
      <button className="px-3 py-1 bg-blue-500 text-white rounded">
        Lager
      </button>
      <button className="px-3 py-1 bg-green-500 text-white rounded">
        Zoom +
      </button>
      <button className="px-3 py-1 bg-green-500 text-white rounded">
        Zoom -
      </button>
      <button className="px-3 py-1 bg-gray-500 text-white rounded">
        Info
      </button>
    </div>
  );
}