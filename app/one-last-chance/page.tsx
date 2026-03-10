'use client'

import { useState, useRef, useCallback } from 'react'

export default function LastChancePage() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [yesClicked, setYesClicked] = useState(false)
  const [noAttempts, setNoAttempts] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const moveNoButton = useCallback(() => {
    const container = containerRef.current
    const noButton = noButtonRef.current
    if (!container || !noButton) return

    const containerRect = container.getBoundingClientRect()
    const buttonW = noButton.offsetWidth
    const buttonH = noButton.offsetHeight

    const maxX = containerRect.width - buttonW
    const maxY = containerRect.height - buttonH

    // Get current absolute position of the button within the container
    const currentX = noPosition.x
    const currentY = noPosition.y

    // Try random positions, avoiding current location
    let newX: number, newY: number
    let attempts = 0
    do {
      newX = Math.random() * maxX - maxX / 2
      newY = Math.random() * maxY - maxY / 2
      attempts++
    } while (
      attempts < 20 &&
      Math.abs(newX - currentX) < 80 &&
      Math.abs(newY - currentY) < 40
    )

    // Clamp to container bounds (relative to center)
    newX = Math.max(-maxX / 2, Math.min(maxX / 2, newX))
    newY = Math.max(-maxY / 2, Math.min(maxY / 2, newY))

    setNoPosition({ x: newX, y: newY })
    setNoAttempts((prev) => prev + 1)
  }, [noPosition])

  const handleYes = async () => {
    await fetch('/api/yes', { method: 'POST' })
    setYesClicked(true)
  }

  const messages = [
    'Are you sure? 🥺',
    'Think again...',
    'Please reconsider 💔',
    "Don't do this...",
    'Come on... 😢',
    'Last warning! 😭',
    'Pretty please? 🙏',
    "My heart can't take it!",
  ]

  if (yesClicked) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-rose-50 px-4">
        <div className="text-center animate-bounce-in">
          <div className="text-7xl mb-6">🥰</div>
          <h1
            className="text-4xl font-bold text-rose-500 mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            She said YES!
          </h1>
          <p
            className="text-rose-400 text-lg max-w-sm mx-auto"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            I knew you still cared. Let&apos;s make this work, together. 💕
          </p>
          <div className="mt-8 flex justify-center gap-2 text-3xl">
            {'❤️❤️❤️'.split('').map((heart, i) => (
              <span
                key={i}
                className="inline-block"
                style={{
                  animation: `heartPop 0.5s ease ${i * 0.15}s both`,
                }}
              >
                {heart}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes heartPop {
            0% { transform: scale(0); opacity: 0; }
            60% { transform: scale(1.3); }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-rose-50 px-4 py-12 overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at top, #fff1f4 0%, #ffe4ea 50%, #ffd6e0 100%)',
      }}
    >
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-200 select-none"
            style={{
              left: `${10 + i * 12}%`,
              fontSize: `${14 + (i % 3) * 10}px`,
              animation: `floatUp ${4 + (i % 3)}s ease-in-out ${i * 0.7}s infinite`,
              opacity: 0.4,
            }}
          >
            ♥
          </div>
        ))}
      </div>

      {/* Card */}
      <div className="relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-rose-200 p-8 sm:p-12 max-w-md w-full text-center border border-rose-100">
        {/* Emoji */}
        <div
          className="text-6xl mb-4"
          style={{ animation: 'softPulse 2s ease-in-out infinite' }}
        >
          💔
        </div>

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl font-bold text-rose-500 mb-3 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          One Last Chance?
        </h1>

        {/* Message */}
        <p
          className="text-rose-400 text-base sm:text-lg mb-2 leading-relaxed"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          I know I messed up. I know sorry isn&apos;t enough. But I&apos;m
          asking — no, begging — for just one more chance to prove how much you
          mean to me.
        </p>

        {noAttempts > 0 && (
          <p
            className="text-rose-300 text-sm mt-2 mb-1 italic transition-all"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            {messages[Math.min(noAttempts - 1, messages.length - 1)]}
          </p>
        )}

        <p
          className="text-rose-300 text-sm mt-3 mb-8"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Will you give us another try?
        </p>

        {/* Buttons container */}
        <div
          ref={containerRef}
          className="relative flex items-center justify-center"
          style={{ height: '120px' }}
        >
          {/* YES button — static, center-left */}
          <button
            onClick={handleYes}
            className="absolute z-10 px-8 py-3 rounded-full bg-rose-400 hover:bg-rose-500 active:scale-95 text-white font-bold text-lg shadow-lg shadow-rose-200 transition-all duration-150"
            style={{
              fontFamily: "'Georgia', serif",
              left: 'calc(50% - 120px)',
              transform: 'translateX(-50%)',
            }}
          >
            Yes 💕
          </button>

          {/* NO button — moves on hover/touch */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
            className="absolute z-10 px-8 py-3 rounded-full border-2 border-rose-200 text-rose-300 font-bold text-lg bg-white/60 hover:bg-rose-50 transition-all duration-300 select-none"
            style={{
              fontFamily: "'Georgia', serif",
              right: 'calc(50% - 120px)',
              transform: `translate(calc(50% + ${noPosition.x}px), ${noPosition.y}px)`,
              transition:
                'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s',
            }}
          >
            No 🚫
          </button>
        </div>

        {/* Footer note */}
        {noAttempts >= 3 && (
          <p
            className="text-rose-200 text-xs mt-4 italic"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            (the No button keeps running away... maybe that means something 🥺)
          </p>
        )}
      </div>

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10%  { opacity: 0.4; }
          90%  { opacity: 0.4; }
          100% { transform: translateY(-10vh) rotate(20deg); opacity: 0; }
        }
        @keyframes softPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.12); }
        }
      `}</style>
    </div>
  )
}
