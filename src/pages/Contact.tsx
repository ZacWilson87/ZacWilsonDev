import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Github, Linkedin } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Layout from "@/components/layout/Layout";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Me | ZacWilsonDev";
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const emailBody = `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
    `.trim();

    const mailtoLink = `mailto:zilson1987+dev@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    form.reset();
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 gradient-heading text-center">
            Get In Touch
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Have a question or want to work together? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-1 space-y-6">
              <Card className="bg-card border border-muted p-6">
                <h3 className="text-xl font-medium text-portfolio-green mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="text-foreground">zilson1987+dev@gmail.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Location
                    </p>
                    <p className="text-foreground">Fayetteville, AR</p>
                  </div>
                </div>

                <div className="mt-8 w-full">
                  <h3 className="text-xl font-medium text-portfolio-pink mb-4">
                    Let's Connect
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/ZacWilson87"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-green transition-colors flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/zachery-wilson-792bb01b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-pink transition-colors flex items-center"
                    >
                      <Linkedin className="h-4 w-4 mr-1" />
                      LinkedIn
                    </a>
                    <a
                      href="https://seedgeni.us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-portfolio-green transition-colors"
                    >
                      SeedGenius
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="md:col-span-2 bg-card border border-muted p-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="bg-muted"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              {...field}
                              className="bg-muted"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="bg-muted"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            {...field}
                            className="bg-muted min-h-32"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-portfolio-green to-portfolio-pink hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
