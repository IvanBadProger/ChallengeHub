import { SITE_CONFIG } from "../../data/config";

interface LogoProps { asLink?: boolean }

export function Logo({ asLink = true }: LogoProps) {
  const content = <>
    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
      <span className="text-white font-bold text-lg">CH</span>
    </div>
    <div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
        {SITE_CONFIG.name}
      </h1>
      <p className="text-sm text-gray-500 hidden sm:block">
        {SITE_CONFIG.tagline}
      </p>
    </div>
  </>

  if (asLink) {
    return (
      <a href="/" className="flex items-center space-x-3 group">
        {content}
      </a>
    )
  }

  return (
    <div className="flex items-center space-x-3 group">
      {content}
    </div>
  )
}