"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { portfolioData } from "@/data/portfolio";
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const socialIcons: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
};

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container relative z-10 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              Let&apos;s <span className="text-gold">connect</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg text-muted-foreground mb-10 max-w-lg font-sans"
            >
              Have a project in mind or want to collaborate? I&apos;d love to
              hear from you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-border/60 bg-card/50">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="text-2xl font-heading font-semibold mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground mb-6 font-sans">
                        Thanks for reaching out. I&apos;ll get back to you soon.
                      </p>
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      noValidate
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-sans text-sm">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className={`font-sans ${
                            errors.name ? "border-destructive" : ""
                          }`}
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
                        />
                        {errors.name && (
                          <p
                            id="name-error"
                            role="alert"
                            className="text-sm text-destructive font-sans"
                          >
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-sans text-sm">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          {...register("email")}
                          className={`font-sans ${
                            errors.email ? "border-destructive" : ""
                          }`}
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={
                            errors.email ? "email-error" : undefined
                          }
                        />
                        {errors.email && (
                          <p
                            id="email-error"
                            role="alert"
                            className="text-sm text-destructive font-sans"
                          >
                            {errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="font-sans text-sm">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project..."
                          rows={5}
                          {...register("message")}
                          className={`font-sans ${
                            errors.message ? "border-destructive" : ""
                          }`}
                          aria-invalid={errors.message ? "true" : "false"}
                          aria-describedby={
                            errors.message ? "message-error" : undefined
                          }
                        />
                        {errors.message && (
                          <p
                            id="message-error"
                            role="alert"
                            className="text-sm text-destructive font-sans"
                          >
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-1" />

          <div className="lg:col-span-4">
            <div className="relative h-full flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-sm font-mono font-medium tracking-wider uppercase text-muted-foreground/60 mb-4">
                  Get in touch
                </h3>

                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="font-medium font-sans text-sm">
                      {portfolioData.email}
                    </p>
                    <p className="text-xs text-muted-foreground font-sans">
                      Email me
                    </p>
                  </div>
                </a>

                <div className="pt-4">
                  <h4 className="text-sm font-mono font-medium tracking-wider uppercase text-muted-foreground/60 mb-4">
                    Follow me
                  </h4>
                  <div className="flex gap-3">
                    {portfolioData.socials.map((social) => {
                      const Icon = socialIcons[social.icon] || ArrowRight;
                      return (
                        <motion.div
                          key={social.name}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full"
                            asChild
                          >
                            <a
                              href={social.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={social.name}
                            >
                              <Icon className="w-4 h-4" />
                            </a>
                          </Button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
