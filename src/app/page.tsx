import type { Metadata } from "next";
import "./globals.css";
import InstallCommand from "../components/InstallCommand";
import GitHubStars from "../components/GitHubStars";
import TerminalDemo from "../components/TerminalDemo";

export const metadata: Metadata = {
  title: "envswitch - Switch between .env files instantly",
  description: "A blazing fast CLI tool to switch between environment files",
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Disclaimer Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 px-4 py-2 text-center text-sm"
        style={{ 
          background: 'linear-gradient(90deg, #ff6b6b, #ffa500)',
          color: '#000'
        }}>
        ⚠️ This project was vibe-coded and might not work properly.{' '}
        <a 
          href="https://github.com/8xu/envswitch/issues" 
          target="_blank"
          className="underline font-bold hover:opacity-80"
        >
          Open an issue
        </a> if you find bugs.
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 px-6 overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px),
                             linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-30 blur-[100px]" 
          style={{ background: 'var(--accent)' }} 
        />

        <div className="relative max-w-5xl mx-auto">
          {/* Logo / Brand */}
          <div className="mb-8 flex items-center gap-4 opacity-0 animate-fade-in-up">
            <span className="text-sm" style={{ color: 'var(--accent)' }}>
              ● CLI_TOOL_v1.0
            </span>
            <GitHubStars />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up animate-delay-100" 
            style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            env<span className="gradient-text">switch</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 max-w-2xl opacity-0 animate-fade-in-up animate-delay-200" 
            style={{ color: 'var(--text-secondary)' }}>
            Switch between .env files in milliseconds. <br/>
            No more manually copying files.
          </p>

          {/* Terminal Demo */}
          <TerminalDemo />

          {/* Quick install */}
          <div className="opacity-0 animate-fade-in-up animate-delay-400">
            <InstallCommand command="curl -fsSL https://raw.githubusercontent.com/8xu/envswitch/main/install.sh | bash" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6" style={{ background: 'var(--bg-secondary)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            Features<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lightning Fast",
                desc: "Switch environments in milliseconds. No overhead, just speed.",
                icon: "⚡"
              },
              {
                title: "Auto-Discovery",
                desc: "Automatically finds your .envs directory. Works where you work.",
                icon: "🔍"
              },
              {
                title: "Safe & Smart",
                desc: "Backs up your current .env before switching. Never lose your config.",
                icon: "🛡️"
              },
              {
                title: "Zero Config",
                desc: "Works out of the box. No configuration files needed.",
                icon: "✨"
              }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-xl transition-all duration-300 hover:glow"
                style={{ 
                  background: 'var(--bg-tertiary)', 
                  border: '1px solid var(--border)'
                }}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get Started<span style={{ color: 'var(--accent)' }}>.</span>
          </h2>

          <p className="text-xl mb-12 max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            Install in one command. Works on macOS, Linux, and Windows.
          </p>

          {/* Step 1 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="mr-4 px-3 py-1 rounded text-sm" 
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}>
                01
              </span>
              Run the installer
            </h3>
            <div className="terminal-window max-w-2xl">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
              </div>
              <div className="terminal-body">
                <code>
                  <span style={{ color: 'var(--accent)' }}>$</span> curl -fsSL https://raw.githubusercontent.com/8xu/envswitch/main/install.sh | bash
                </code>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="mr-4 px-3 py-1 rounded text-sm" 
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}>
                02
              </span>
              Create your environments
            </h3>
            <div className="terminal-window max-w-2xl">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
              </div>
              <div className="terminal-body">
                <code>
                  <span style={{ color: 'var(--text-secondary)' }}># Create .envs directory</span><br/>
                  $ mkdir .envs<br/><br/>
                  <span style={{ color: 'var(--text-secondary)' }}># Add your environment files</span><br/>
                  $ cp .env .envs/.env.staging<br/>
                  $ cp .env .envs/.env.production
                </code>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4">
              <span className="mr-4 px-3 py-1 rounded text-sm" 
                style={{ background: 'var(--accent)', color: 'var(--bg-primary)' }}>
                03
              </span>
              Start switching
            </h3>
            <div className="terminal-window max-w-2xl">
              <div className="terminal-header">
                <span className="terminal-dot terminal-dot-red" />
                <span className="terminal-dot terminal-dot-yellow" />
                <span className="terminal-dot terminal-dot-green" />
              </div>
              <div className="terminal-body">
                <code>
                  <span style={{ color: 'var(--accent)' }}>$</span> envswitch staging<br/>
                  Switched to staging environment<br/><br/>
                  <span style={{ color: 'var(--accent)' }}>$</span> envswitch production<br/>
                  Switched to production environment<span className="animate-blink">_</span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span style={{ color: 'var(--accent)' }}>●</span>
            <span>envswitch</span>
          </div>
          <p style={{ color: 'var(--text-secondary)' }} className="text-sm">
            Built by <a href="https://github.com/8xu" className="hover:text-white transition-colors">8xu</a>
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/8xu/envswitch" 
              className="text-sm hover:text-white transition-colors"
              style={{ color: 'var(--text-secondary)' }}>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
