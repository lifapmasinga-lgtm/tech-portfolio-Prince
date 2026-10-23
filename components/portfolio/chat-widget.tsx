'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { MessageCircleHeart, Send, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const suggestions = ['Are you available for work?', 'What are your strongest skills?', 'Tell me about your certifications']

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const listRef = useRef<HTMLDivElement>(null)
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })
  const busy = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || busy) return
    sendMessage({ text: trimmed })
    setInput('')
  }

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Ask about Masinga PL"
          className="fixed bottom-24 right-4 z-50 flex h-[min(520px,70vh)] w-[min(380px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border bg-card shadow-2xl shadow-primary/20"
        >
          <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
            <div>
              <p className="font-serif text-lg font-semibold">Ask me anything</p>
              <p className="text-xs opacity-90">Availability, skills, experience</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-full p-1 hover:bg-primary-foreground/15">
              <X className="size-5" />
            </button>
          </div>

          <div ref={listRef} className="flex flex-1 flex-col gap-3 overflow-y-auto p-4" aria-live="polite">
            {messages.length === 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-sm text-muted-foreground">{'Hi! I can tell you about Masinga’s availability, skills and experience.'}</p>
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-2xl border border-primary/30 bg-accent/50 px-3 py-2 text-left text-sm text-accent-foreground hover:bg-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  'max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm leading-relaxed',
                  m.role === 'user' ? 'self-end bg-primary text-primary-foreground' : 'self-start bg-muted',
                )}
              >
                {m.parts.map((part, i) => (part.type === 'text' ? <span key={i}>{part.text}</span> : null))}
              </div>
            ))}
            {status === 'submitted' && (
              <div className="self-start rounded-2xl bg-muted px-3.5 py-2 text-sm text-muted-foreground">Typing...</div>
            )}
            {error && <p className="text-sm text-destructive">Something went wrong. Please try again.</p>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t p-3"
          >
            <label htmlFor="chat-input" className="sr-only">
              Your question
            </label>
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about availability..."
              maxLength={500}
              className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus-visible:border-ring"
            />
            <Button type="submit" size="icon" className="rounded-full" disabled={busy || !input.trim()} aria-label="Send">
              <Send />
            </Button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat assistant'}
        aria-expanded={open}
        className="fixed bottom-5 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
      >
        {open ? <X className="size-6" /> : <MessageCircleHeart className="size-6" />}
      </button>
    </>
  )
}
