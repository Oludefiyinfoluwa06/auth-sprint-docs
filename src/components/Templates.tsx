import React from 'react'
import { Gamepad2, Lock, Route } from 'lucide-react'

export default function Templates() {
  const repoBase = 'https://github.com/Oludefiyinfoluwa06/auth-boilerplate-cli/blob/develop/auth-sprint-cli/auth-templates/express.js'

  return (
    <section id="templates" className="w-full max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Built-in Templates</h3>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">Explore the generated auth module to understand the structure and customize for your needs.</p>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <a href={`${repoBase}/controllers/authController.js`} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            <Gamepad2 className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Auth Controller
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Handles register and login operations using bcrypt and JWT tokens.</p>
        </a>
        <a href={`${repoBase}/middlewares/auth.js`} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 group-hover:text-amber-600 dark:group-hover:text-amber-400">
            <Lock className="w-6 h-6 text-amber-600 dark:text-amber-400" /> Auth Middleware
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Verifies JWT tokens and protects routes from unauthorized access.</p>
        </a>
        <a href={`${repoBase}/routes/auth.js`} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800 hover:shadow-md transition-shadow">
          <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2 group-hover:text-green-600 dark:group-hover:text-green-400">
            <Route className="w-6 h-6 text-green-600 dark:text-green-400" /> Auth Routes
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Express router with `/register` and `/login` endpoints and validation.</p>
        </a>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
        <p className="text-slate-700 dark:text-slate-300 text-sm">Generated files are copied into your project root when you run the CLI. After generation, set <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-xs font-mono">JWT_SECRET</code> and <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded text-xs font-mono">JWT_EXPIRES_IN</code> in your environment.</p>
      </div>
    </section>
  )
}
