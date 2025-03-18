import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { title, subtitle } from "@/components/primitives";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] relative py-12">
      {/* Background glow effect */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-radial from-purple-600/30 to-transparent rounded-full blur-3xl z-0"></div>
      
      {/* Nova Logo - Using logo.avif */}
      <div className="mb-8 z-10">
        <Image 
          src="/logo.avif" 
          alt="Nova Bundler Logo" 
          width={100} 
          height={100} 
          className="rounded-md"
        />
      </div>
      
      {/* Main Heading - Using Righteous font */}
      <h1 className="font-righteous text-4xl md:text-5xl lg:text-6xl text-center mb-4 z-10 tracking-wider">
        Nova <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF1CF7] to-[#b249f8]">Bundler</span>
      </h1>
      
      {/* Subtitle - Added from the image */}
      <div className="max-w-3xl text-center mb-12 z-10">
        <p className="text-default-500 text-lg">
          Supercharge token launches with NovaBundler — the fast, seamless multi-chain bundler and volume bot for developers and crypto enthusiasts.
        </p>
      </div>
      
      {/* Feature Cards - Added from the image */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 w-full max-w-5xl z-10">
        {/* Card 1 */}
        <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 flex flex-col items-center text-center">
          <div className="mb-4 bg-purple-800/30 p-3 rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
              <path d="M9 9h6M9 12h6M9 15h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-300" />
            </svg>
          </div>
          <h2 className="font-righteous text-xl mb-2 tracking-wide">Create Token</h2>
          <p className="text-default-500 text-sm">
            Easily generate new Solana SPL tokens with customizable parameters for various purposes.
          </p>
        </div>
        
        {/* Card 2 */}
        <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 flex flex-col items-center text-center">
          <div className="mb-4 bg-purple-800/30 p-3 rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L20 7V17L12 22L4 17V7L12 2Z" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
              <path d="M12 8v8M8 10v4M16 10v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-300" />
            </svg>
          </div>
          <h2 className="font-righteous text-xl mb-2 tracking-wide">Create Market ID</h2>
          <p className="text-default-500 text-sm">
            Generate a market ID for your token for only 0.1 SOL, ensuring your token is listed correctly at the lowest price!
          </p>
        </div>
        
        {/* Card 3 */}
        <div className="bg-purple-900/30 backdrop-blur-sm p-8 rounded-xl border border-purple-800/50 flex flex-col items-center text-center">
          <div className="mb-4 bg-purple-800/30 p-3 rounded-full">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" className="text-purple-300" />
              <path d="M12 6v6l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-300" />
            </svg>
          </div>
          <h2 className="font-righteous text-xl mb-2 tracking-wide">Launch and Bundle Liquidity Pool</h2>
          <p className="text-default-500 text-sm">
            Initiate and bundle your liquidity pool, automatically sniping and securing a significant supply to provide stability and enhance traders' confidence
          </p>
        </div>
      </div>
      
      {/* Telegram Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 z-10 mb-8">
        {/* Bot Button */}
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
          href="https://t.me/NovaBundlerBot?start=start"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.39.81-.59 3.17-1.38 5.29-2.29 6.38-2.73 3.03-1.22 3.66-1.43 4.08-1.44.09 0 .29.02.42.19.11.13.13.31.15.44-.01.05-.01.1-.02.13z" />
            </svg>
            <span className="font-righteous tracking-wide">Connect with Bot</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M13 5l7 7-7 7M5 12h15" />
            </svg>
          </div>
        </Link>
        
        {/* Channel Button */}
        <Link
          className={buttonStyles({
            radius: "full",
            variant: "bordered",
            size: "lg",
          })}
          href="https://t.me/NovaBundler"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.45-1.17.44-.39-.01-1.13-.22-1.68-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.39.81-.59 3.17-1.38 5.29-2.29 6.38-2.73 3.03-1.22 3.66-1.43 4.08-1.44.09 0 .29.02.42.19.11.13.13.31.15.44-.01.05-.01.1-.02.13z" />
            </svg>
            <span className="font-righteous tracking-wide">Join Channel</span>
          </div>
        </Link>
      </div>
      
      {/* Community Badge */}
      <div className="flex items-center justify-center gap-2 text-default-500 z-10">
        <span>Part of the</span>
        <Link 
          href="https://t.me/NovaBundler" 
          className="text-purple-400 hover:text-purple-300 font-righteous tracking-wide"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nova Bundler
        </Link>
        <span>community</span>
      </div>
    </section>
  );
}
