import React from 'react'
import { 
  Dumbbell, 
  ArrowRight, 
  Calendar, 
  Zap, 
  Brain, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  LogIn, 
  Plus, 
  Minus 
} from 'lucide-react'
import { Head, Link, usePage } from '@inertiajs/react'

export default function Home() {
  const { auth } = usePage().props 
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)

  const faqs = [
    {
      question: "What happens in a typical session?",
      answer: "Each session is a mix of hot seats, strategy discussions, and tactical planning. You'll get direct feedback on your marketing initiatives, brainstorm new ideas, and leave with clear action items."
    },
    {
      question: "Do I need to attend every session?",
      answer: "Not at all! Join whenever you can - the flexible schedule is designed to fit around your busy founder life. Most members attend 2-3 sessions per week."
    },
    {
      question: "What if I'm just starting with marketing?",
      answer: "Perfect timing! We'll help you avoid common pitfalls and focus on high-impact activities from day one. No prior marketing experience required."
    },
    {
      question: "Is this only for SaaS founders?",
      answer: "Yes, the program is specifically designed for SaaS founders. This focus allows us to provide targeted advice and share relevant case studies."
    },
    {
      question: "What's the refund policy?",
      answer: "While we require a 3-month commitment, we offer a 100% money-back guarantee if you attend at least 6 sessions in your first month and don't find value."
    }
  ]

  return (
    <>
      <Head title="SaaS Marketing Gym" />
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
        {/* Hero Section */}
        <div className="fixed inset-0 noise pointer-events-none"></div>
        
        <header className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 p-6 z-50">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-6 h-6 text-primary" />
                <span className="font-bold text-xl">SaaS Marketing Gym</span>
              </div>
              <div className="flex items-center gap-4">
                {auth ? (
                  <Link 
                    href="/logout" 
                    method="delete" 
                    as="button"
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-full"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Log Out</span>
                  </Link>
                ) : (
                  <Link 
                    href="/login" 
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors px-4 py-2 rounded-full"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Log In</span>
                  </Link>
                )}
                <a 
                  href="https://forms.gle/xvJVXJ2ht6MuEQfBA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-dark hover:bg-black text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </div>

          <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <div className="text-primary inline-block bg-gradient-to-r from-primary/10 to-secondary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
                UPDATE: Cohort 2 is sold out! Join the waitlist for Cohort 3 🚀
              </div>
              <h1 className="bg-test text-5xl font-bold mb-8 leading-tight">
                You know you should be{' '}
                <span className="relative inline-block mx-4">
                  <span className="gradient-text">"doing more marketing"</span>
                  <div className="absolute -bottom-2 left-0 w-full h-4 bg-secondary opacity-20 -rotate-2"></div>
                </span>
              </h1>
              <p className="text-2xl mb-12 text-gray-600">
                But if you knew exactly what to do or how to do it, your SaaS would be earning $100K/month by now.
              </p>
              <div className="flex gap-6">
                <a
                  href="https://forms.gle/xvJVXJ2ht6MuEQfBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
                alt="Marketing strategy session"
                className="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6">
                <div className="bg-white p-4 rounded-2xl shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=150"
                    alt="Success metrics"
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

          <div className="absolute -right-64 top-32 w-[800px] h-[800px] bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -left-64 -bottom-64 w-[800px] h-[800px] bg-gradient-to-r from-accent/30 to-primary/30 rounded-full blur-3xl opacity-20"></div>
        </header>

        {/* Problem Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl mb-8 text-gray-700">
                And it's not that you're a control freak… but you want to do your marketing yourself, because no one else <em>really</em> understands your product like you do.
              </p>
              <p className="text-2xl mb-8 text-gray-700">
                Honestly, half the time you spend on "marketing" is just staring at your ideas list (what's Levels up to?) or scrolling Twitter/Bluesky, agonizing over what to do.
              </p>
              <h2 className="text-4xl font-bold mb-8 gradient-text">
                You need to get out of your own way and just DO MORE MARKETING STUFF.
              </h2>
            </div>
          </div>
        </section>

        {/* Additional Copy Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 gradient-text text-center">
                Stop Overthinking, Start Marketing
              </h2>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">You're not alone in this.</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Every founder goes through the same struggles:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      <span className="text-lg">Spending hours reading marketing blogs but never implementing anything</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      <span className="text-lg">Getting stuck in analysis paralysis trying to pick the "perfect" marketing strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      <span className="text-lg">Feeling like you're always behind on marketing while your competitors seem to have it all figured out</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-3xl shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">What makes us different?</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    We're not here to sell you a magic formula or one-size-fits-all solution. Instead, we provide:
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      <span className="text-lg">Daily accountability and feedback from experienced SaaS marketers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      <span className="text-lg">A supportive community of founders who understand your challenges</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                      <span className="text-lg">Practical, actionable advice you can implement immediately</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coaches Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h2 className="text-5xl font-bold mb-6 gradient-text">Meet Your Coaches</h2>
              <p className="text-xl text-gray-600">
                SaaS Marketing Gym is high-level SaaS marketing expertise on tap.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <div className="card-hover">
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200"
                    alt="Colleen"
                    className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">Colleen</h3>
                  <p className="text-secondary font-medium mb-6">Technical Founder & Marketing Expert</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-2">Advisory Strengths:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>Tools + tech knowhow, including LinkedIn Sales Navigator</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>Consistency and accountability, AKA helping you get out of your own way</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>Living that ✨technical founder lyfe✨</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="card-hover">
                <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-transparent rounded-3xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
                    alt="Lianna"
                    className="w-32 h-32 rounded-full mb-6 border-4 border-white shadow-lg object-cover"
                  />
                  <h3 className="text-2xl font-bold mb-2">Lianna</h3>
                  <p className="text-secondary font-medium mb-6">Conversion Copywriting Specialist</p>
                  <div className="space-y-4">
                    <h4 className="font-semibold mb-2">Advisory Strengths:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>Conversion copywriting for bootstrapped SaaS</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>Creative marketing strategy, including content ideas that won't make you cringe</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                        <span>Identifying your unique value proposition (UVP)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 gradient-text">How It Works</h2>
              <p className="text-xl text-gray-600">
                It's simple: an intimate daily Zoom call with up to 8 SaaS founders like you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="group card-hover">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Daily Sessions</h3>
                  <p className="text-gray-600">Mon, Tue, Wed, Fri from 11AM-12:30PM Central. Join whenever you can.</p>
                </div>
              </div>

              <div className="group card-hover">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-secondary bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Small Group</h3>
                  <p className="text-gray-600">Limited to 8 founders for maximum attention and results.</p>
                </div>
              </div>

              <div className="group card-hover">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="w-16 h-16 bg-accent bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                  <p className="text-gray-600">Get personalized advice and actionable strategies in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 bg-dark text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-8">Ready to Level Up?</h2>
              <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl mb-12">
                <div className="text-6xl font-bold mb-4">$1,500<span className="text-2xl">/mo</span></div>
                <p className="text-xl mb-6">3-month commitment</p>
                <div className="text-gray-300 mb-8">
                  That's a steal compared to our usual $600/hour combined rate!
                </div>
                <a 
                  href="https://forms.gle/xvJVXJ2ht6MuEQfBA"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="bg-white text-dark px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <div className="text-sm text-gray-400">
                Price will increase for future cohorts — but your rate stays locked in!
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto grid gap-8">
              <div className="card-hover">
                <blockquote className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=100"
                      alt="Rob Walling"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xl mb-4">
                        "If you're looking for interesting and funny website/email copy I recommend Lianna Patch."
                      </p>
                      <footer className="font-medium text-gray-700">- Rob Walling</footer>
                    </div>
                  </div>
                </blockquote>
              </div>
              <div className="card-hover">
                <blockquote className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                      alt="Keith Perhac"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xl mb-4">
                        "Anything Colleen and Lianna are doing, I want to be involved in."
                      </p>
                      <footer className="font-medium text-gray-700">- Keith Perhac, Founder, Segmetrics</footer>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-5xl font-bold mb-12 gradient-text text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <button
                      className="w-full px-6 py-4 flex items-center justify-between text-left"
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    >
                      <span className="font-semibold text-lg">{faq.question}</span>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 text-primary" />
                      ) : (
                        <Plus className="w-5 h-5 text-primary" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-5 h-5 text-primary" />
                <span className="font-bold">SaaS Marketing Gym</span>
              </div>
              <a 
                href="mailto:saasmarketinggym@gmail.com"
                className="text-sm text-gray-600 hover:text-primary transition"
              >
                saasmarketinggym@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
