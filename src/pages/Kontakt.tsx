import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Nachricht gesendet!", description: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen." });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-widest text-primary">Kontakt</span>
              <h1 className="mt-4 font-display text-4xl font-bold md:text-5xl">Lassen Sie uns sprechen</h1>
              <p className="mt-4 text-muted-foreground">Kontaktieren Sie uns für eine kostenlose Erstberatung.</p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Input placeholder="Ihr Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                  <Input type="email" placeholder="E-Mail-Adresse *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <Input type="tel" placeholder="Telefonnummer" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                  <SelectTrigger><SelectValue placeholder="Gewünschte Leistung" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technische-seo">Technische SEO</SelectItem>
                    <SelectItem value="on-page">On-Page Optimierung</SelectItem>
                    <SelectItem value="off-page">Off-Page / Linkbuilding</SelectItem>
                    <SelectItem value="content">Content Marketing</SelectItem>
                    <SelectItem value="lokal">Lokale SEO</SelectItem>
                    <SelectItem value="international">Internationale SEO</SelectItem>
                    <SelectItem value="sea">Google Ads (SEA)</SelectItem>
                    <SelectItem value="leads">Lead-Generierung</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce SEO</SelectItem>
                    <SelectItem value="geo">AI-Search (GEO)</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea placeholder="Ihre Nachricht *" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                <Button type="submit" size="lg" className="w-full rounded-full">Nachricht senden</Button>
              </form>

              <div className="space-y-8">
                <div className="rounded-xl border border-border/50 bg-card p-8">
                  <h3 className="font-display text-lg font-semibold">TrafficWerk</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Inhaber Thomas Kinne</p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>Taradeauer Str. 11, 85244 Röhrmoos</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Mail className="h-4 w-4 shrink-0 text-primary" />
                      <span>info@trafficwerk.de</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-primary" />
                      <span>+49 (0) 8139 999 000</span>
                    </div>
                  </div>
                </div>
                <div className="h-64 overflow-hidden rounded-xl border border-border/50 bg-secondary/50">
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    <MapPin className="mr-2 h-5 w-5" /> Kartenansicht
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
