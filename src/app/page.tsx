export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full border border-gray-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Premium Plan
          </h2>
          <p className="text-gray-600 mb-6">
            Everything you need to get started
          </p>

          <div className="mb-8">
            <span className="text-4xl font-bold text-gray-900">$29</span>
            <span className="text-gray-600 ml-2">/month</span>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
