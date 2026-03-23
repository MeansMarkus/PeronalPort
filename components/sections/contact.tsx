"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Download } from "lucide-react";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const { ref, isInView } = useSectionInView();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50">
              Let&apos;s work together
            </h2>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
              Have a project in mind or just want to chat? Drop me a message and
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Form */}
            <Card className="md:col-span-3">
              <CardContent className="p-6 sm:p-8">
                {submitted ? (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="text-xl font-semibold text-zinc-100 mb-2">
                      Message sent!
                    </h3>
                    <p className="text-zinc-400">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-zinc-300 mb-1.5"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-zinc-300 mb-1.5"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-zinc-300 mb-1.5"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Sidebar links */}
            <div className="md:col-span-2 space-y-4">
              <Card className="hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all">
                <CardContent className="p-5">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/80">
                      <Github className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">GitHub</p>
                      <p className="text-xs text-zinc-500">@markus</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all">
                <CardContent className="p-5">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/80">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">LinkedIn</p>
                      <p className="text-xs text-zinc-500">/in/markus</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all">
                <CardContent className="p-5">
                  <a
                    href="mailto:hello@markus.dev"
                    className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-800/80">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-xs text-zinc-500">hello@markus.dev</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 transition-all">
                <CardContent className="p-5">
                  <a
                    href="/Markus_Means_Resume_OU2026.pdf"
                    download
                    className="flex items-center gap-3 text-zinc-300 hover:text-accent transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10">
                      <Download className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Resume</p>
                      <p className="text-xs text-zinc-500">Download PDF</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}