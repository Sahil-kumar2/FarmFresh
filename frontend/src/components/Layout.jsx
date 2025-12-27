export default function Layout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="text-xl font-semibold text-green-700">
            🌱 FarmFresh
          </h1>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="text-sm text-gray-600 hover:text-red-500"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          {title}
        </h2>
        {children}
      </main>
    </div>
  );
}
