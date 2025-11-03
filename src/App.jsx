import HeaderNav from './components/HeaderNav.jsx';
import HeroSpline from './components/HeroSpline.jsx';
import HighlightsSections from './components/HighlightsSections.jsx';
import BlogContactSection from './components/BlogContactSection.jsx';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-[#0A0F24] font-sans">
      <HeaderNav />
      <main>
        <HeroSpline />
        <HighlightsSections />
        <section id="about" className="relative bg-[#0A0F24] py-20 text-blue-50">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-semibold sm:text-4xl">About Nexyra</h2>
              <p className="mt-3 text-blue-200/80">
                We are a team of offensive security engineers and blue‑team operators building a safer
                digital future. Our mission is simple: relentlessly reduce risk for modern
                enterprises with precision, transparency, and speed.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6 text-center">
                <div className="mx-auto h-2 w-24 rounded bg-cyan-400/40" />
                <p className="mt-3 text-sm text-blue-200/80">CREST/OSCP/OSWE certified engineers</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6 text-center">
                <div className="mx-auto h-2 w-24 rounded bg-cyan-400/40" />
                <p className="mt-3 text-sm text-blue-200/80">Partners across cloud and DevSecOps ecosystems</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0B1330]/60 p-6 text-center">
                <div className="mx-auto h-2 w-24 rounded bg-cyan-400/40" />
                <p className="mt-3 text-sm text-blue-200/80">Global delivery with 24/7 support</p>
              </div>
            </div>
          </div>
        </section>
        <BlogContactSection />
      </main>
    </div>
  );
}

export default App;
