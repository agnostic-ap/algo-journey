import { useState, useRef } from 'react'
import { toPng } from 'html-to-image'
import CardPreview from './components/CardPreview'
import { Download, Palette, Type } from 'lucide-react'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('# Hello World\n\nStart typing to create your card...\n\n```javascript\nconsole.log("Code blocks supported!");\n```')
  const [theme, setTheme] = useState('light')
  const cardRef = useRef(null)

  const handleExport = async () => {
    if (cardRef.current === null) return
    
    try {
      const dataUrl = await toPng(cardRef.current, { cacheBust: true, pixelRatio: 2 })
      const link = document.createElement('a')
      link.download = 'knowledge-card.png'
      link.href = dataUrl
      link.click()
    } catch (err) {
      console.error('Failed to export image', err)
    }
  }

  const themes = [
    { id: 'light', name: 'Light', class: 'bg-white border border-gray-200' },
    { id: 'dark', name: 'Dark', class: 'bg-gray-900 border border-gray-700' },
    { id: 'gradient', name: 'Gradient', class: 'bg-gradient-to-br from-purple-500 to-pink-500' },
  ]

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b p-4 flex items-center justify-between z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-gray-800 tracking-tight">MD2Card</h1>
        </div>
        
        {/* Toolbar */}
        <div className="flex items-center gap-4 bg-gray-50 px-4 py-1.5 rounded-full border">
           <div className="flex items-center gap-2">
              <Palette size={18} className="text-gray-500" />
              <span className="text-sm font-medium text-gray-600 mr-2">Theme:</span>
              <div className="flex gap-1">
                {themes.map(t => (
                  <button 
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`w-6 h-6 rounded-full ${t.class} ${theme === t.id ? 'ring-2 ring-blue-500 ring-offset-2' : ''} transition-all`}
                    title={t.name}
                  />
                ))}
              </div>
           </div>
        </div>

        <div className="flex items-center gap-2">
          <button 
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium text-sm"
            onClick={handleExport}
          >
            <Download size={16} />
            Export Image
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 flex overflow-hidden">
        {/* Editor Pane */}
        <div className="w-1/2 h-full border-r bg-white flex flex-col">
          <div className="p-2 border-b bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider flex justify-between items-center">
             <span>Markdown Input</span>
             <Type size={14} className="text-gray-400" />
          </div>
          <textarea
            className="flex-1 w-full h-full p-6 resize-none focus:outline-none font-mono text-sm text-gray-800 leading-relaxed"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
            spellCheck={false}
          />
        </div>

        {/* Preview Pane */}
        <div className="w-1/2 h-full bg-gray-200 p-8 flex items-center justify-center overflow-auto relative">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10" style={{
             backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
             backgroundSize: '20px 20px'
           }}>
           </div>
           
           {/* Card Preview Container */}
           <div className="relative z-10 transform transition-all duration-200">
             <CardPreview 
                ref={cardRef}
                markdown={markdown} 
                theme={theme} 
             />
           </div>
        </div>
      </main>
    </div>
  )
}

export default App
