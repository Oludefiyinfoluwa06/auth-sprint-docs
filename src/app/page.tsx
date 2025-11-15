import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickStart from '@/components/QuickStart';
import Commands from '@/components/Commands';
import Templates from '@/components/Templates';
import Footer from '@/components/Footer';
import { Wrench, Bug, MessageCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50">
      <Header />

      <main className="w-full">
        <Hero />

        <div className="border-t border-slate-200 dark:border-slate-800"></div>

        <QuickStart />

        <div className="border-t border-slate-200 dark:border-slate-800"></div>

        <Commands />

        <div className="border-t border-slate-200 dark:border-slate-800"></div>

        <Templates />

        <div className="border-t border-slate-200 dark:border-slate-800"></div>

        <section id="contribute" className="w-full max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Contribute & Build</h3>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">Join the community and help shape the future of auth scaffolding. Whether you&rsquo;re adding features, templates, or documentation—all contributions are welcome.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Wrench className="w-5 h-5 text-slate-600 dark:text-slate-400" /> Code
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Fork the repo, add features or templates, and open a pull request. Tests use Jest and interactive prompts use Inquirer.</p>
              <a href="https://github.com/Oludefiyinfoluwa06/auth-sprint-cli" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                View on GitHub →
              </a>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <Bug className="w-5 h-5 text-slate-600 dark:text-slate-400" /> Issues
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Found a bug? Have a feature request? Open an issue and help us improve the tool.</p>
              <a href="https://github.com/Oludefiyinfoluwa06/auth-sprint-cli/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                Report Issue →
              </a>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-slate-600 dark:text-slate-400" /> Discuss
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">Share ideas, ask questions, and discuss improvements with the community.</p>
              <a href="https://github.com/Oludefiyinfoluwa06/auth-sprint-cli/discussions" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                Join Discussion →
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
