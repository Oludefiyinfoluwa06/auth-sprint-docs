import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Auth Sprint Logo"
            width={40}
            height={40}
          />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Auth Sprint</h1>
            <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Scaffold auth in seconds</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#quickstart" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Quickstart</a>
          <a href="#commands" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Commands</a>
          <a href="#templates" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Templates</a>
          <a href="#contribute" className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium">Contribute</a>
        </nav>
      </div>
    </header>
  );
}
