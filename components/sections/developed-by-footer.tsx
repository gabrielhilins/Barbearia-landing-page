
import Image from "next/image";

export function DevelopedByFooter() {
  return (
    <footer className="w-full py-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <p className="text-sm text-white/60">
          Desenvolvido por
        </p>
        <a href="https://seusite.com" target="_blank" rel="noopener noreferrer">
            <Image
            src="/Wordmark SVG.svg"
            alt="GGABS"
            width={80}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
            />
        </a>
      </div>
    </footer>
  );
}
