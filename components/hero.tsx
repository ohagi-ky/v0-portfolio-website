export function Hero() {
  return (
    <section className="relative h-96 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/images/header-keion.png" alt="Hero background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance">Kouen Yoshimura's Portfolio</h1>
        {/* ... existing code ... */}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
