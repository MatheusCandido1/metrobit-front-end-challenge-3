import { Header } from "./layout/Header"
import { Hero } from "./layout/Hero"
import { MainContent } from "./layout/MainContent"
import { ExtraContent } from "./layout/ExtraContent"
import { Sidebar } from "./layout/Sidebar"
import { Footer } from "./layout/Footer"
import { RelatedImages } from "./layout/RelatedImages"
import { RelatedPosts } from "./layout/RelatedPosts"

function App() {
  return (
    <main>
      <Header />
      <section className="content">
        <div className="hero-sidebar">
          <Hero />
          <Sidebar />
        </div>
        <div className="main-content-extra-content">
          <MainContent />
          <ExtraContent />
        </div>
      </section>

      <section className="related-content">
        <RelatedImages />
        <RelatedPosts />
      </section>

      <Footer />
    </main>
  )
}

export default App
