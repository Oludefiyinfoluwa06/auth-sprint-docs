'use client'
import { useState } from 'react'

export default function CodeBlock({ code, language = 'bash' }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (e) {
      // ignore
    }
  }

  return (
    <div className="relative w-full rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden bg-slate-50 dark:bg-slate-900 shadow-sm">
      <div className="absolute right-3 top-3 z-10">
        <button 
          onClick={onCopy} 
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded text-xs font-semibold shadow-md"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto text-sm bg-slate-950 dark:bg-slate-900 text-slate-50 leading-relaxed">
        <code className="font-mono text-sm">
          {code}
        </code>
      </pre>
    </div>
  )
}
