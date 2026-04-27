export default function SearchBar() {
  return (
    <div className="w-full p-4 bg-white shadow">
      <input
        type="text"
        placeholder="Sök plats..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
}