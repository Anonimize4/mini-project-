

import Header from './components/Header';

function App() {
  return (
    <div className="pt-16 min-h-screen bg-blue-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Welcome to Samuel's Portfolio</h1>
        <p className="text-white mb-4">This is the main content area.</p>
      </main>
    </div>
  );
}

export default App;
