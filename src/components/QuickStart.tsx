import CodeBlock from './CodeBlock';

export default function QuickStart() {
  const cmd = `npx auth-sprint -f express.js -s jwt`;

  const mountExample = `// app.js
    import express from 'express'
    import authRoutes from './auth-templates/express.js/routes/auth.js'
    import auth from './auth-templates/express.js/middlewares/auth.js'

    const app = express()
    app.use(express.json())
    app.use('/api/auth', authRoutes)

    app.get('/protected', auth, (req, res) => res.json({ msg: 'Protected' }))

    app.listen(3000)
  `;

  return (
    <section id="quickstart" className="w-full max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12">Quickstart</h3>
      <div className="bg-blue-50 dark:bg-slate-900/50 rounded-lg p-8 border border-blue-100 dark:border-blue-900/50 mb-10">
        <ol className="space-y-4 text-base text-slate-700 dark:text-slate-300">
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">1</span>
            <span>Ensure your project&rsquo;s framework has been setup (for example, <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono">Express.js</code>)</span>
          </li>
          <li className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-sm">2</span>
            <span>Run the generator with your framework and strategy:</span>
          </li>
        </ol>
      </div>

      <div className="mb-10">
        <CodeBlock code={cmd} />
      </div>

      <div className="bg-amber-50 dark:bg-slate-900/50 rounded-lg p-6 border border-amber-100 dark:border-amber-900/50 mb-10">
        <p className="text-base text-slate-700 dark:text-slate-300 mb-3"><strong className="text-slate-900 dark:text-white">After generation:</strong> Add environment variables to <code className="bg-slate-200 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono">.env</code>:</p>
        <CodeBlock code={`JWT_SECRET=your_secret_here\nJWT_EXPIRES_IN=3600s`} />
      </div>

      <div>
        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Mount generated routes</h4>
        <CodeBlock code={mountExample} />
      </div>
    </section>
  );
}
