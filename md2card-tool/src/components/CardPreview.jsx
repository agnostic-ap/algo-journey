import React, { forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CardPreview = forwardRef(({ markdown, theme = 'light', padding = 'p-8' }, ref) => {

  // Define theme styles
  const themeStyles = {
    light: 'bg-white text-gray-900 shadow-2xl',
    dark: 'bg-gray-900 text-white shadow-2xl shadow-black/50',
    gradient: 'bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-2xl',
  }

  const containerClass = themeStyles[theme] || themeStyles.light

  return (
    <div
      ref={ref}
      className={`${containerClass} ${padding} rounded-xl min-w-[480px] max-w-2xl transition-all duration-300`}
    >
      <div className={`prose ${theme === 'dark' || theme === 'gradient' ? 'prose-invert' : ''} prose-sm max-w-none`}>
        <ReactMarkdown
          components={{
            code ({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  className="rounded-md shadow-lg my-4"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={`${className} bg-black/10 px-1 py-0.5 rounded text-[0.9em]`} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  )
})

CardPreview.displayName = 'CardPreview'

export default CardPreview

