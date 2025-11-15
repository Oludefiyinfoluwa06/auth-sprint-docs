export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Auth Sprint</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Generate JWT auth boilerplate in seconds for your Express.js projects.</p>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#quickstart" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Quick Start</a></li>
              <li><a href="#commands" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Commands</a></li>
              <li><a href="#templates" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Templates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/Oludefiyinfoluwa06/auth-sprint-cli" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">GitHub</a></li>
              <li><a href="https://github.com/Oludefiyinfoluwa06/auth-sprint-cli/issues" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Report Issues</a></li>
              <li><a href="https://github.com/Oludefiyinfoluwa06/auth-sprint-cli/discussions" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400">Discussions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} &bull; Olude Fiyinfoluwa</p>
        </div>
      </div>
    </footer>
  );
}
