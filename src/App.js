import React from 'react';
import { Layout, Settings, Activity, ShieldCheck } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Utility Dashboard</h1>
        <p className="text-gray-600">All your tools in one place.</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Widget 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Activity className="text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold">Unit Converter</h2>
          </div>
          <p className="text-gray-600 mb-4">Quickly convert between metric and imperial units.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Open Tool</button>
        </div>

        {/* Widget 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <ShieldCheck className="text-green-500 mr-2" />
            <h2 className="text-xl font-semibold">Password Gen</h2>
          </div>
          <p className="text-gray-600 mb-4">Generate secure passwords with custom parameters.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Open Tool</button>
        </div>

        {/* Widget 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <Layout className="text-purple-500 mr-2" />
            <h2 className="text-xl font-semibold">To-Do List</h2>
          </div>
          <p className="text-gray-600 mb-4">Stay organized with a simple, persistent to-do list.</p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition">Open Tool</button>
        </div>
      </div>
    </div>
  );
}

export default App;
