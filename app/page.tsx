import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
  return (

      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] relative py-12 overflow-hidden">
        {/* Global Styles */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
              box-shadow: 0 0 20px rgba(255, 28, 247, 0.3);
              transform: scale(1);
            }
            50% { 
              box-shadow: 0 0 40px rgba(255, 28, 247, 0.6);
              transform: scale(1.02);
            }
          }
          
          @keyframes gradient-shift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          @keyframes slide-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient-shift 4s ease infinite;
          }
          
          .animate-slide-up {
            animation: slide-up 0.8s ease-out forwards;
          }
          
          .animate-rotate {
            animation: rotate 20s linear infinite;
          }
          
          .card-hover {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .card-hover:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 25px 50px rgba(139, 92, 246, 0.3);
          }
          
          .shimmer {
            position: relative;
            overflow: hidden;
          }
          
          .shimmer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.1),
              transparent
            );
            transform: translateX(-100%);
            animation: shimmer 2s infinite;
          }
          
          .text-glow {
            text-shadow: 0 0 20px rgba(255, 28, 247, 0.5);
          }
          
          .button-hover {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .button-hover::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: left 0.5s;
          }
          
          .button-hover:hover::before {
            left: 100%;
          }
          
          .button-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
          }
        `}</style>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main glow effect */}
          <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-radial from-purple-600/30 to-transparent rounded-full blur-3xl z-0 animate-pulse-glow"></div>
          
          {/* Rotating gradient orbs */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute bottom-40 right-10 w-24 h-24 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Rotating border element */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-500/10 rounded-full animate-rotate"></div>
        </div>
        
        {/* Nova Logo with enhanced animations */}
        <div className="mb-8 z-10 animate-slide-up animate-float shimmer">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-md blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            <Image 
              src="/logo.avif" 
              alt="Nova Bundler Logo" 
              width={100} 
              height={100} 
              className="rounded-md relative z-10 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        
        {/* Main Heading with enhanced effects */}
        <div className="animate-slide-up z-10" style={{animationDelay: '0.2s'}}>
          <h1 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-center mb-4 tracking-wider relative">
            <span className="text-glow">Nova</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF1CF7] via-[#b249f8] to-[#FF1CF7] animate-gradient text-glow">
              Bundler
            </span>
          </h1>
        </div>
        
        {/* Subtitle with slide animation */}
        <div className="max-w-3xl text-center mb-12 z-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <p className="text-default-500 text-lg leading-relaxed">
            Supercharge token launches with NovaBundler — the fast, seamless multi-chain bundler and volume bot for developers and crypto enthusiasts.
          </p>
        </div>
        
        {/* Enhanced Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-5xl z-10">
          {/* Card 1 */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 flex flex-col items-center text-center card-hover shimmer animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="mb-4 bg-purple-800/30 p-3 rounded-full animate-pulse-glow">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 hover:scale-110">
                <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
                <path d="M9 9h6M9 12h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-300" />
              </svg>
            </div>
            <h2 className="font-righteous text-xl mb-2 tracking-wide text-glow">Create Token</h2>
            <p className="text-default-500 text-sm leading-relaxed">
              Easily generate new Solana SPL tokens with customizable parameters for various purposes.
            </p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 flex flex-col items-center text-center card-hover shimmer animate-slide-up" style={{animationDelay: '0.8s'}}>
            <div className="mb-4 bg-purple-800/30 p-3 rounded-full animate-pulse-glow" style={{animationDelay: '0.5s'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 hover:scale-110">
                <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
                <path d="M12 8v8M8 10v4M16 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-300" />
              </svg>
            </div>
            <h2 className="font-righteous text-xl mb-2 tracking-wide text-glow">Create Market ID</h2>
            <p className="text-default-500 text-sm leading-relaxed">
              Generate a market ID for your token for only 0.1 SOL, ensuring your token is listed correctly at the lowest price!
            </p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 flex flex-col items-center text-center card-hover shimmer animate-slide-up" style={{animationDelay: '1s'}}>
            <div className="mb-4 bg-purple-800/30 p-3 rounded-full animate-pulse-glow" style={{animationDelay: '1s'}}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 hover:scale-110">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
                <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300" />
              </svg>
            </div>
            <h2 className="font-righteous text-xl mb-2 tracking-wide text-glow">Launch and Bundle Liquidity Pool</h2>
            <p className="text-default-500 text-sm leading-relaxed">
              Initiate and bundle your liquidity pool, automatically sniping and securing a significant supply to provide stability and enhance traders' confidence
            </p>
          </div>
        </div>
        
        {/* Enhanced Telegram Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 z-10 mb-8 animate-slide-up" style={{animationDelay: '1.2s'}}>
          {/* Bot Button */}
          <Link
            className={`${buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
              size: "lg",
            })} button-hover`}
            href="https://t.me/NovaBundlerBot?start=start"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.39.81-.59 3.17-1.38 5.29-2.29 6.38-2.73 3.03-1.22 3.66-1.43 4.08-1.44.09 0 .29.02.42.19.11.13.13.31.15.44-.01.05-.01.1-.02.13z" />
              </svg>
              <span className="font-righteous tracking-wide">Connect with Bot</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M13 5l7 7-7 7M5 12h15" />
              </svg>
            </div>
          </Link>
          
          {/* Channel Button */}
          <Link
            className={`${buttonStyles({
              radius: "full",
              variant: "bordered",
              size: "lg",
            })} button-hover border-purple-500/50 hover:border-purple-400`}
            href="https://t.me/NovaBundler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.5s'}}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.39.81-.59 3.17-1.38 5.29-2.29 6.38-2.73 3.03-1.22 3.66-1.43 4.08-1.44.09 0 .29.02.42.19.11.13.13.31.15.44-.01.05-.01.1-.02.13z" />
              </svg>
              <span className="font-righteous tracking-wide">Join Channel</span>
            </div>
          </Link>
        </div>
        
        {/* Enhanced Community Badge */}
        <div className="flex items-center justify-center gap-2 text-default-500 z-10 animate-slide-up" style={{animationDelay: '1.4s'}}>
          <span className="transition-colors duration-300 hover:text-default-400">Part of the</span>
          <Link 
            href="https://t.me/NovaBundler" 
            className="text-purple-400 hover:text-purple-300 font-righteous tracking-wide transition-all duration-300 hover:scale-105 text-glow"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nova Bundler
          </Link>
          <span className="transition-colors duration-300 hover:text-default-400">community</span>
        </div>
      </section>
    </>
  );
}
