import { useState } from 'react';
import { INITIAL_PROJECT_MATCHES } from './data/grantData';
import { GrantItem } from './types';
import { HeaderNav } from './components/HeaderNav';
import { PriorityScreen } from './components/PriorityScreen';
import { GrantsDirectoryScreen } from './components/GrantsDirectoryScreen';

export default function App() {
  const [items, setItems] = useState<GrantItem[]>(INITIAL_PROJECT_MATCHES);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [activeScreen, setActiveScreen] = useState<'priority' | 'directory'>('priority');

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setItems((prev) => {
      const updated = [...prev];
      const temp = updated[index];
      updated[index] = updated[index - 1];
      updated[index - 1] = temp;
      return updated;
    });
    // Sorting priority resets the saved state so user must click save again
    setIsSaved(false);
  };

  const handleMoveDown = (index: number) => {
    if (index >= items.length - 1) return;
    setItems((prev) => {
      const updated = [...prev];
      const temp = updated[index];
      updated[index] = updated[index + 1];
      updated[index + 1] = temp;
      return updated;
    });
    // Sorting priority resets the saved state so user must click save again
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
  };

  const handleReset = () => {
    setItems(INITIAL_PROJECT_MATCHES);
    setIsSaved(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-start items-center text-gray-900 font-sans antialiased">
      {/* Phone container shell: responsive, optimized for mobile screens & readable at arm's length */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 shadow-2xl border-x border-gray-200 flex flex-col">
        <HeaderNav
          activeScreen={activeScreen}
          onSelectScreen={setActiveScreen}
        />

        <main className="flex-1 flex flex-col">
          {activeScreen === 'priority' ? (
            <PriorityScreen
              items={items}
              isSaved={isSaved}
              onMoveUp={handleMoveUp}
              onMoveDown={handleMoveDown}
              onSave={handleSave}
              onReset={handleReset}
            />
          ) : (
            <GrantsDirectoryScreen />
          )}
        </main>
      </div>
    </div>
  );
}
