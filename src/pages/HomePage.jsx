import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="about">
        <div className="about__inner">
          <div className="about__left">
            <p className="about__label">Who we are</p>
            <h2 className="about__heading">
              A small <em>studio</em> with a careful eye for proportion,
              light and <em>material</em>
            </h2>
          </div>
          <div className="about__right">
            <p className="about__body">
              Alrich is an independent architecture practice based in Bratislava,
              working across residential, cultural and small commercial projects.
              Each commission begins with a long conversation about how a place is
              used, where the light falls, and what stays once the noise has settled.
            </p>
            <p className="about__body">
              We build slowly, with a small team and a short list of trusted
              craftspeople. The result is quiet, durable architecture made to be
              lived in for decades, not photographed once.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
