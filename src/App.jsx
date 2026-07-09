import { useState } from 'react'
import { Layout, BookOpen, Settings, Briefcase, GraduationCap, Lightbulb, Code, Plus } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('portfolio')

  const tabs = [
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'prompts', label: 'Prompt Library', icon: BookOpen },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-height-screen bg-background text-white font-sans">
      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-white/10 px-4 py-2 flex justify-around items-center z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
        {tabs.map((tab) => {
          const Icon = tab.icon
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col md:flex-row items-center gap-1 md:gap-3 px-4 py-2 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'text-primary bg-primary/10'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] md:text-sm font-medium">{tab.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-4 pb-24 md:pt-24 md:pb-8">
        {activeTab === 'portfolio' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <header className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Portfolio</h1>
              <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-transform active:scale-95">
                <Plus size={20} />
                <span>Add Entry</span>
              </button>
            </header>
            
            {/* Stats Bar Placeholder */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['Skills', 'Projects', 'Experience', 'Ideas', 'Education'].map((cat) => (
                <div key={cat} className="bg-card p-4 rounded-xl border border-white/5 text-center">
                  <div className="text-white/60 text-sm">{cat}</div>
                  <div className="text-2xl font-bold mt-1">0</div>
                </div>
              ))}
            </div>

            <div className="text-center py-20 text-white/40">
              <div className="text-xl">Your timeline is empty</div>
              <p className="mt-2">Click "Add Entry" to start building your portfolio.</p>
            </div>
          </div>
        )}

        {activeTab === 'prompts' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold mb-8">Prompt Library</h1>
            <div className="bg-card p-8 rounded-2xl border border-white/5 text-center">
              <BookOpen size={48} className="mx-auto text-secondary mb-4 opacity-50" />
              <div className="text-xl">Coming Soon</div>
              <p className="text-white/40 mt-2">Generate structured prompts from your portfolio data.</p>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>
            <div className="space-y-4 max-w-2xl">
              <div className="bg-card p-6 rounded-2xl border border-white/5 flex justify-between items-center">
                <div>
                  <div className="font-bold">Export Data</div>
                  <div className="text-sm text-white/60">Download your portfolio as JSON or CSV</div>
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">JSON</button>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">CSV</button>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-2xl border border-white/5 flex justify-between items-center">
                <div>
                  <div className="font-bold">Import Data</div>
                  <div className="text-sm text-white/60">Load data from a previously exported JSON file</div>
                </div>
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">Import</button>
              </div>

              <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 flex justify-between items-center mt-12">
                <div>
                  <div className="font-bold text-red-500">Danger Zone</div>
                  <div className="text-sm text-red-400/80">Permanently delete all entries from this browser</div>
                </div>
                <button className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors">Clear All</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
