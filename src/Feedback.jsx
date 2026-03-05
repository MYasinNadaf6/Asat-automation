import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Feedback() {
  const [state, handleSubmit] = useForm("xgolgzpl");
  
  if (state.succeeded) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl text-amber-500 font-bold">Message Sent!</h2>
        <p className="text-gray-400">Thanks for reaching out to ASAT Automation.</p>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/2 p-8 bg-zinc-900/50 rounded-xl border border-amber-950/50">
      <h2 className="text-2xl text-amber-50 mb-6 font-semibold">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-amber-50/70 text-sm">Email Address</label>
          <input
            id="email"
            type="email" 
            name="email"
            className="p-3 rounded bg-black border border-amber-900 text-white focus:outline-none focus:border-amber-500"
            placeholder="your@email.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-amber-50/70 text-sm">Message</label>
          <textarea
            id="message"
            name="message"
            className="p-3 rounded bg-black border border-amber-900 text-white h-32 focus:outline-none focus:border-amber-500"
            placeholder="How can we help you?"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          className="bg-amber-800 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded transition-all disabled:opacity-50"
        >
          {state.submitting ? "Sending..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}