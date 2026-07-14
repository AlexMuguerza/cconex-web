import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Sectors from "@/components/Sectors";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<Hero />
			<Sectors />
			<Clients />
			<About />
			<Services />
			<HowWeWork />
			<Projects />
			<Stats />
			<Certifications />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}
