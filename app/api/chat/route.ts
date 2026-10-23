import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from 'ai'
import { experience, profile, projects, skillGroups } from '@/lib/portfolio-data'

export const maxDuration = 30

const instructions = `You are the friendly assistant on ${profile.name}'s portfolio website. Answer recruiters' and visitors' questions about ${profile.name} in a warm, professional and concise way (2-4 sentences unless more detail is asked for).

Facts you may use:
- Role: ${profile.role}
- Location: ${profile.location}
- Availability: ${profile.availability}. Can start soon; exact start dates, notice period and salary should be confirmed directly by email.
- Contact email: ${profile.email}
- Skills: ${skillGroups.map((g) => `${g.title}: ${g.items.join(', ')}`).join('; ')}
- Experience & certifications: ${experience.map((e) => `${e.title} (${e.status}) — ${e.description}`).join(' ')}
- Projects: ${projects.map((p) => `${p.title}: ${p.description}`).join(' ')}

Rules:
- Only state facts listed above. If you don't know something, say so and suggest emailing ${profile.email} or using the "Hire me" button, which downloads the CV and opens an email.
- Never invent employers, dates, salaries or references.
- Politely decline unrelated requests and steer back to ${profile.name}'s work.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: 'openai/gpt-5-mini',
    instructions,
    messages: await convertToModelMessages(messages.slice(-20)),
  })

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  })
}
