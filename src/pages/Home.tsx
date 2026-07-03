import { useState } from "react";
import { trpc } from "@/providers/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import {
  Globe,
  Users,
  Heart,
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ChevronRight,
  Handshake,
  BookOpen,
  Award,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ProgramsSection />
      <ImpactSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Mission", id: "mission" },
    { label: "Programs", id: "programs" },
    { label: "Impact", id: "impact" },
    { label: "Events", id: "events" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3"
          >
            <img src="/efce-logo.png" alt="EFCE" className="h-10 w-auto" />
            <span className="hidden sm:block font-semibold text-[#003399] text-sm tracking-wide">
              EUROPEAN FOUNDATION FOR CIVIC ENGAGEMENT
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="px-3 py-2 text-sm text-gray-600 hover:text-[#003399] transition-colors rounded-md hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/admin"
              className="ml-2 px-4 py-2 text-sm bg-[#003399] text-white rounded-md hover:bg-[#002266] transition-colors"
            >
              Admin Portal
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-800 mb-1" />
            <div className="w-5 h-0.5 bg-gray-800 mb-1" />
            <div className="w-5 h-0.5 bg-gray-800" />
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-[#003399] hover:bg-gray-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
            <a
              href="/admin"
              className="block w-full text-center px-4 py-2 text-sm bg-[#003399] text-white rounded-md mt-2"
            >
              Admin Portal
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-16 min-h-[92vh] flex items-center bg-gradient-to-br from-[#003399] via-[#0044cc] to-[#0066ff] overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 border border-white rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-white rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-[#FFCC00] text-[#003399] hover:bg-[#FFCC00] font-semibold px-4 py-1">
              Strengthening European Democracy
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Empowering Citizens.
              <br />
              <span className="text-[#FFCC00]">Building Europe.</span>
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
              The European Foundation for Civic Engagement supports civil society
              organisations across the EU in promoting democratic participation,
              civic education, and active citizenship.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollTo("programs")}
                className="bg-[#FFCC00] text-[#003399] hover:bg-[#e6b800] font-semibold px-6 py-3 h-auto text-base"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-6 py-3 h-auto text-base"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                <img
                  src="/efce-logo.png"
                  alt="EFCE Logo"
                  className="w-64 h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#003399] rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#003399]">27</p>
                    <p className="text-xs text-gray-500">EU Member States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge variant="outline" className="mb-4 border-[#003399] text-[#003399]">
              About EFCE
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              A Foundation Dedicated to{" "}
              <span className="text-[#003399]">European Civic Life</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The European Foundation for Civic Engagement (EFCE) is an independent,
              non-partisan organisation established to strengthen democratic culture
              and civic participation across the European Union. We provide funding,
              expertise, and networking opportunities to civil society organisations
              working on the ground in all 27 EU member states.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our work spans citizenship education, democratic innovation, European
              remembrance, and the promotion of EU values. Through targeted grant
              programmes, capacity building, and cross-border partnerships, we empower
              citizens to engage actively in the democratic life of their communities
              and of Europe as a whole.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-[#003399]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Independent</h4>
                  <p className="text-sm text-gray-500">Autonomous from EU institutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-[#FFCC00]" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Pan-European</h4>
                  <p className="text-sm text-gray-500">Active across all 27 EU states</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Handshake className="h-5 w-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Collaborative</h4>
                  <p className="text-sm text-gray-500">Partnering with 500+ CSOs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Impact-Driven</h4>
                  <p className="text-sm text-gray-500">Evidence-based programming</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8">
              <img
                src="/efce-logo.png"
                alt="EFCE"
                className="w-full max-w-sm mx-auto mb-8"
              />
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-[#003399]" />
                      <span className="text-sm font-medium text-gray-700">Grants Awarded</span>
                    </div>
                    <span className="text-lg font-bold text-[#003399]">2,847</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-[#003399]" />
                      <span className="text-sm font-medium text-gray-700">Countries Reached</span>
                    </div>
                    <span className="text-lg font-bold text-[#003399]">27</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-[#003399]" />
                      <span className="text-sm font-medium text-gray-700">Euro Invested</span>
                    </div>
                    <span className="text-lg font-bold text-[#003399]">&euro;420M+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const pillars = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Civic Education",
      description:
        "Supporting programmes that educate citizens about democratic processes, EU institutions, and the rights and responsibilities of active citizenship.",
      color: "bg-blue-50 text-[#003399]",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Democratic Participation",
      description:
        "Funding initiatives that increase voter turnout, encourage youth engagement in politics, and support underrepresented communities in civic life.",
      color: "bg-yellow-50 text-amber-600",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "European Values",
      description:
        "Promoting respect for human dignity, freedom, democracy, equality, the rule of law, and human rights across all EU member states.",
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Cross-Border Cooperation",
      description:
        "Facilitating partnerships between civil society organisations from different EU countries to foster mutual understanding and transnational projects.",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Social Inclusion",
      description:
        "Supporting projects that combat discrimination, promote gender equality, and ensure that all citizens can participate fully in civic and democratic life.",
      color: "bg-red-50 text-red-500",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Capacity Building",
      description:
        "Providing training, resources, and mentorship to civil society organisations to strengthen their operational effectiveness and long-term sustainability.",
      color: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section id="mission" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#003399] text-[#003399]">
            Our Mission
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Six Pillars of <span className="text-[#003399]">Civic Engagement</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our work is built on six interconnected pillars that together form a
            comprehensive approach to strengthening European democracy from the ground up.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <Card
              key={i}
              className="border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  {pillar.icon}
                </div>
                <CardTitle className="text-lg">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const { data: grants } = trpc.grants.list.useQuery();

  const formatCurrency = (val: string | null) => {
    if (!val) return "N/A";
    const num = parseFloat(val);
    if (num >= 1_000_000) return `\u20ac${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `\u20ac${(num / 1_000).toFixed(0)}K`;
    return `\u20ac${num}`;
  };

  const formatDate = (date: Date | null) => {
    if (!date) return "TBD";
    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#003399] text-[#003399]">
            Funding Opportunities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Active <span className="text-[#003399]">Grant Programmes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply for funding to support your civic engagement projects. Our grants
            are open to civil society organisations across all EU member states.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {grants?.map((grant) => (
            <Card
              key={grant.id}
              className="border border-gray-100 hover:border-[#003399]/30 transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-[#003399] text-white hover:bg-[#003399]">
                    Open
                  </Badge>
                  <span className="text-xs text-gray-400 font-mono">
                    {grant.reference}
                  </span>
                </div>
                <CardTitle className="text-lg leading-tight">
                  {grant.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-6 line-clamp-3">
                  {grant.summary}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Budget</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(grant.totalBudget)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Grant Range</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(grant.minGrantAmount)} -{" "}
                      {formatCurrency(grant.maxGrantAmount)}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Deadline</span>
                    <span className="font-semibold text-red-600">
                      {formatDate(grant.deadline)}
                    </span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-[#003399] hover:bg-[#002266]">
                  Apply Now <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}

          {!grants?.length && (
            <>
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border border-gray-100">
                  <CardHeader>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-2" />
                    <div className="h-6 w-full bg-gray-200 rounded animate-pulse" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                      <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const { data: stats } = trpc.stats.list.useQuery();

  const formatValue = (metric: string, value: number) => {
    if (metric === "euro_invested") return `\u20ac${(value / 1_000_000).toFixed(0)}M+`;
    if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (value >= 1_000) return `${(value / 1_000).toFixed(0)},${String(value % 1000).padStart(3, "0")}`;
    return String(value);
  };

  return (
    <section id="impact" className="py-20 bg-[#003399] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#FFCC00] text-[#003399] hover:bg-[#FFCC00]">
            Our Impact
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Making a Difference Across Europe
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Since our establishment, EFCE has invested in thousands of projects that
            have strengthened civic engagement and democratic participation throughout
            the European Union.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats?.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#FFCC00] mb-2">
                {formatValue(stat.metric, stat.value)}
              </div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}

          {!stats?.length && [
            { label: "Grants Awarded", value: "2,847" },
            { label: "EU Countries", value: "27" },
            { label: "Civic Projects", value: "15,620" },
            { label: "Euro Invested", value: "\u20ac420M+" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#FFCC00] mb-2">
                {s.value}
              </div>
              <div className="text-blue-200 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const { data: eventsList } = trpc.events.list.useQuery();

  const formatDate = (date: Date | null) => {
    if (!date) return { day: "TBD", month: "TBD" };
    const d = new Date(date);
    return {
      day: d.getDate().toString(),
      month: d.toLocaleDateString("en-GB", { month: "short" }),
    };
  };

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#003399] text-[#003399]">
            Upcoming Events
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Us at Our <span className="text-[#003399]">Next Events</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Connect with fellow civic engagement practitioners, share best practices,
            and explore new opportunities for collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsList?.map((event) => {
            const date = formatDate(event.eventDate);
            return (
              <Card
                key={event.id}
                className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className="flex">
                  <div className="w-20 bg-[#003399] flex flex-col items-center justify-center text-white flex-shrink-0">
                    <span className="text-2xl font-bold">{date.day}</span>
                    <span className="text-xs uppercase">{date.month}</span>
                  </div>
                  <div className="p-5 flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <MapPin className="h-3.5 w-3.5" />
                      {event.location}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}

          {!eventsList?.length && [
            {
              title: "European Civic Engagement Summit 2025",
              location: "Brussels, Belgium",
              description:
                "Annual gathering of civic leaders, policymakers and civil society organisations to discuss the future of European democracy.",
              day: "22",
              month: "Sep",
            },
            {
              title: "Youth Participation Forum",
              location: "Lisbon, Portugal",
              description:
                "A forum dedicated to empowering young Europeans to participate actively in democratic processes and civic life.",
              day: "15",
              month: "Oct",
            },
            {
              title: "European Volunteer Centre Conference",
              location: "Vienna, Austria",
              description:
                "Conference focusing on volunteering as a tool for civic engagement and social cohesion in Europe.",
              day: "05",
              month: "Nov",
            },
          ].map((event, i) => (
            <Card
              key={i}
              className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="flex">
                <div className="w-20 bg-[#003399] flex flex-col items-center justify-center text-white flex-shrink-0">
                  <span className="text-2xl font-bold">{event.day}</span>
                  <span className="text-xs uppercase">{event.month}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const utils = trpc.useUtils();
  const createContact = trpc.contacts.create.useMutation({
    onSuccess: () => {
      toast.success("Message sent successfully! We'll be in touch soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      utils.contacts.list.invalidate();
    },
    onError: (err) => {
      toast.error("Failed to send message: " + err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    createContact.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-[#003399] text-[#003399]">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#003399]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether you have questions about our programmes, want to partner with us,
            or need assistance with an application, we are here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#003399]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Headquarters</p>
                    <p className="text-sm text-gray-500">
                      Rue de la Loi 170
                      <br />
                      1040 Brussels, Belgium
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[#003399]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-500">info@efce.eu.cc</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#003399]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-500">+32 2 286 14 11</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm text-gray-500">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>09:00 - 17:30 CET</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="border border-gray-100">
              <CardContent className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your full name"
                        className="h-11"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="h-11"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="What is this regarding?"
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us how we can help you..."
                      className="min-h-[140px] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={createContact.isPending}
                    className="bg-[#003399] hover:bg-[#002266] px-8 h-11"
                  >
                    {createContact.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src="/efce-logo.png" alt="EFCE" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The European Foundation for Civic Engagement strengthens democratic
              culture and civic participation across the European Union.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Grant Programmes
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Application Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Reporting Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" /> info@efce.eu.cc
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" /> +32 2 286 14 11
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Brussels, Belgium
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> Mon-Fri 09:00-17:30 CET
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} European Foundation for Civic Engagement.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>EU Regulation 2015/847 Compliant</span>
            <span>|</span>
            <a href="/admin" className="hover:text-white transition-colors">
              Admin Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
