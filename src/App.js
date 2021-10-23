import React, { lazy, Suspense } from 'react';
const Transaction = lazy(() => import('./Pages/Transaction/Transaction'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Transaction />
      </Suspense>
    </div>
  );
}

export default App;