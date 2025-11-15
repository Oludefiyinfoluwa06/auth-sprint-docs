import CodeBlock from './CodeBlock'

export default function Hero() {
  const install = `# one-off use
npx auth-sprint

# install globally
npm install -g auth-sprint
auth-sprint

# run locally
node index.js`

  return (
    <section className="w-full max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">Generate auth boilerplate in seconds</h2>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">Auth Sprint is a lightweight CLI that scaffolds authentication controllers, routes and middleware for supported frameworks (currently: Express). Get your authentication system running in minutes, not hours.</p>
      </div>

      <div className="mt-12">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide mb-3">Install & Run</h3>
        <CodeBlock code={install} language="bash" />
      </div>
    </section>
  )
}
