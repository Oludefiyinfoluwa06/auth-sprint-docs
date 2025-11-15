import CodeBlock from './CodeBlock';
import { Rocket, Lock } from 'lucide-react';

export default function Commands() {
  const usage = `# Interactive
    npx auth-sprint

    # Flags
    auth-sprint -f express.js -s jwt
    auth-sprint --framework express.js --strategy jwt
  `;

  return (
    <section id="commands" className="w-full max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
      <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Commands & Options</h3>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">The CLI accepts flags or runs interactively when flags are omitted. Choose the approach that works best for your workflow.</p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Framework
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-2"><strong>-f, --framework</strong></p>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Specify the framework (e.g., <code className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded text-xs font-mono">express.js</code>).</p>
        </div>
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
          <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Strategy
          </h4>
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-2"><strong>-s, --strategy</strong></p>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Specify the strategy (e.g., <code className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded text-xs font-mono">jwt</code>).</p>
        </div>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Usage Examples</h4>
        <CodeBlock code={usage} />
      </div>
    </section>
  );
}
