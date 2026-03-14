import { useState } from "react";
import { VirtualList } from "./components/VirtualList";
import { RegularList } from "./components/RegularList";

function App() {
  const [showVirtual, setShowVirtual] = useState(true);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px'}}>
      <h1>Производительность</h1>
      <div style={{ marginBottom: '20px' }}>
        <button
        onClick={() => setShowVirtual(true)}
        style={{ padding: '10px 20px', background: showVirtual ? '#2196F3': '#eee', color: showVirtual ? 'white': 'black'}}
        >
          Виртуальный список
        </button>
        <button
        onClick={() => setShowVirtual(false)}
        style={{ padding: "10px 20px", background: ! showVirtual ? '#F44336': '#eee', color: ! showVirtual ? 'white': 'black' }}>
          Обычный список
        </button>
      </div>

      {showVirtual ? <VirtualList itemCount={10000} /> : <RegularList itemCount={10000} />}
    </div>
  );
}

export default App;
