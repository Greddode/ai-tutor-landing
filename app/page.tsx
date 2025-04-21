import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Brain, Zap, BookOpen, Users, Shield } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 lg:pt-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="hero-gradient absolute inset-0 z-0"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Learn Faster with <span className="gradient-text">Arcane Knowledge AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Personalized learning experiences powered by advanced AI. Master any subject at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 py-6">
                Pre-order Now
              </Button>
            </Link>
            <Link href="#features">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="relative mx-auto max-w-5xl rounded-xl border bg-card p-2 shadow-2xl">
            <div className="rounded-lg bg-black/80 p-4 md:p-8">
              <div className="h-[300px] md:h-[400px] flex items-center justify-center">
                <div className="max-w-md mx-auto bg-card rounded-lg p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <Brain className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Arcane Knowledge AI</h3>
                      <p className="text-sm text-muted-foreground">Your personal learning assistant</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-sm">How do I solve this quadratic equation: 2x² + 5x - 3 = 0?</p>
                    </div>
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <p className="text-sm">
                        To solve this quadratic equation, we'll use the quadratic formula:
                        <br />
                        <br />x = (-b ± √(b² - 4ac)) / 2a
                        <br />
                        <br />
                        Where a=2, b=5, and c=-3
                        <br />
                        <br />
                        Let me walk you through the steps...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Learning Features</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our AI tutor combines cutting-edge technology with effective teaching methods to help you master any
              subject.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Personalized Learning</CardTitle>
                <CardDescription>
                  AI adapts to your learning style and pace to provide a customized experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our AI analyzes your strengths and weaknesses to create a learning path that's unique to you, ensuring
                  efficient progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Instant Feedback</CardTitle>
                <CardDescription>Get immediate responses to your questions and solutions to problems.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  No more waiting for answers. Our AI provides real-time feedback and explanations to keep your learning
                  momentum going.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Comprehensive Subjects</CardTitle>
                <CardDescription>From math and science to languages and humanities, we cover it all.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Whatever you're studying, our AI tutor has the knowledge to help you understand concepts and solve
                  problems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>Engage in natural conversations that make learning enjoyable.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Our conversational AI makes learning feel like chatting with a knowledgeable friend, making complex
                  topics approachable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Privacy Focused</CardTitle>
                <CardDescription>Your data is secure and your learning history is private.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  We prioritize your privacy and ensure that your personal information and learning data are protected.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Check className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your improvement with detailed analytics and insights.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Track your learning journey with visual progress reports that highlight your achievements and areas
                  for growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the plan that fits your learning needs. Pre-order now for exclusive early access benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Basic</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $9.99
                  <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>100 AI tutor conversations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Basic subjects coverage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Standard response time</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup?plan=basic" className="w-full">
                  <Button className="w-full">Pre-order Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-primary">
              <CardHeader className="bg-primary/10">
                <div className="text-center text-sm font-medium text-primary mb-2">MOST POPULAR</div>
                <CardTitle>Premium</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $19.99
                  <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Unlimited AI tutor conversations</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>All subjects coverage</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Priority response time</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Advanced learning analytics</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup?plan=premium" className="w-full">
                  <Button className="w-full">Pre-order Now</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <div className="mt-4 flex items-baseline text-5xl font-bold">
                  $49.99
                  <span className="ml-1 text-lg font-medium text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Team accounts (up to 5 users)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Custom learning paths</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    <span>Dedicated support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/signup?plan=enterprise" className="w-full">
                  <Button className="w-full">Pre-order Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our AI Tutor service.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">When will AI Tutor be available?</h3>
              <p>
                AI Tutor is currently in development. By pre-ordering, you'll secure early access as soon as we launch.
                We're aiming for a release in the coming months.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What subjects does AI Tutor cover?</h3>
              <p>
                AI Tutor will cover a wide range of subjects including mathematics, sciences, languages, humanities, and
                more. Our goal is to provide comprehensive support across the educational spectrum.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How does the pre-order process work?</h3>
              <p>
                When you pre-order, you'll create an account and select your preferred plan. Your payment method will be
                securely stored, but you won't be charged until the service launches. Pre-order customers will receive
                exclusive benefits and early access.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Can I cancel my pre-order?</h3>
              <p>
                Yes, you can cancel your pre-order at any time before the service launches with no charge. After launch,
                our standard cancellation policy will apply.
              </p>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Is there a mobile app available?</h3>
              <p>
                We're developing web and mobile versions simultaneously. The service will be accessible on all devices
                with a modern web browser, and dedicated mobile apps are planned for future releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
            Join the waitlist today and be among the first to experience the future of personalized education.
          </p>
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-6">
              Pre-order Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Arcane Knowledge AI</h3>
              <p className="text-muted-foreground">
                Revolutionizing education with AI-powered personalized learning experiences.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Arcane Knowledge AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
