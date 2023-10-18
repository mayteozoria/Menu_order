"use client"
import { useState, FormEvent, ChangeEvent} from "react"
import { useRouter } from "next/navigation"
import React from 'react'

const initState = {
  name: "",
  email: "",
  message: "",
}

const ContactPage = () => {
    const [data, setData] = useState(initState)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(JSON.stringify(data))
      const { name, email, message } = data

      const res = await fetch('http://localhost:3000/api/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, email, message
            })
        })

        const result = await res.json()
        console.log(result)

        // Navigate to thank you 
        router.push(`/thank-you/`)
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

      const name = e.target.name

      setData(prevData => ({
          ...prevData,
          [name]: e.target.value
      }))
  }

  const canSave = [...Object.values(data)].every(Boolean)

  const content = (
    <section className="bg-blue-800 text-white" >
      <form onSubmit={handleSubmit} className="flex flex-col mx-auto max-w-3xl p-20">
          <h1 className="text-2xl mb-12">Contact Us</h1>

          <label className="text-4xl mb-12" htmlFor="name">Name:</label>
          <input
              className="p-3 mb-6 text-2xl rounded-2xl text-black"
              type="text"
              id="name"
              name="name"
              placeholder=""
              // pattern="([A-Z])[\w+.]{1,}"
              value={data.name}
              onChange={handleChange}
              autoFocus
          />

          <label className="text-4xl mb-12" htmlFor="email">Email:</label>
          <input
              className="p-3 mb-6 text-2xl rounded-2xl text-black"
              type="email"
              id="email"
              name="email"
              placeholder="Jane@yoursite.com"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              value={data.email}
              onChange={handleChange}
          />

          <label className="text-4xl mb-12" htmlFor="message">Message:</label>
          <textarea
              className="p-12 mb-12 text-2xl rounded-4xl text-black"
              id="message"
              name="message"
              placeholder="Your message here..."
              rows={5}
              cols={33}
              value={data.message}
              onChange={handleChange}
          />

          <button
              className="p-3 mb-6 text-2xl rounded-2xl text-black border-solid border-white border-2 max-w-xs bg-slate-400 hover:cursor-pointer hover:bg-slate-300 disabled:hidden"
              disabled={!canSave}
          >Submit</button>
        </form>
      </section>
  )
  return content
}

export default ContactPage
