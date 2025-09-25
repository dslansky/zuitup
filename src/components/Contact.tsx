"use client";

import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/Toast";

const FormSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone"),
  occasion: z.enum(["Shabbos", "Yom Tov", "Bar Mitzvah", "Wedding", "Other"]),
  message: z.string().min(5, "Please add a short message"),
});

type FormValues = z.infer<typeof FormSchema>;

export default function Contact() {
  const { showSuccess, showError } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: { occasion: "Shabbos" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");
      showSuccess("We received your message.", "Thanks!");
      reset();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Something went wrong";
      showError(message);
    }
  }
  return (
    <section id="contact" className="py-24">
      <div className="container-standard grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="font-serif text-3xl text-z-navy mb-2">Contact / Book a Fitting</h2>
          <p className="text-z-ink/80 mb-6">Questions or ready to start? We’d love to help.</p>
          <a href="https://wa.me/19178734717" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-500 text-white px-5 py-3 text-sm hover:bg-green-600">Message on WhatsApp</a>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-z-silver/30 rounded-2xl p-6 grid gap-4">
          <div>
            <label className="block text-sm text-z-ink/80 mb-1">Name</label>
            <Input placeholder="Your full name" {...register("fullName")} />
            {errors.fullName && <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>}
          </div>
          <div>
            <label className="block text-sm text-z-ink/80 mb-1">Email</label>
            <Input type="email" placeholder="you@example.com" {...register("email")} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm text-z-ink/80 mb-1">Message</label>
            <Textarea rows={5} placeholder="Tell us about your Zuit" {...register("message")} />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-z-ink/80 mb-1">Phone</label>
              <Input placeholder="(555) 555-5555" {...register("phone")} />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block text-sm text-z-ink/80 mb-1">Occasion</label>
              <select className="w-full rounded-2xl border border-z-silver/40 bg-white px-3 py-2 text-z-ink focus:outline-none focus:ring-2 focus:ring-z-gold/40" {...register("occasion")}>
                {(["Shabbos", "Yom Tov", "Bar Mitzvah", "Wedding", "Other"]).map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              {errors.occasion && <p className="mt-1 text-xs text-red-600">{errors.occasion.message}</p>}
            </div>
          </div>
          <Button variant="primary" className="justify-self-start" disabled={isSubmitting}>{isSubmitting ? "Sending…" : "Send"}</Button>
        </form>
      </div>
    </section>
  );
}


