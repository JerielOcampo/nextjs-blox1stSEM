import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>"Hello sir, I am Jeriel D. Ocampo from Minalin, Pampanga and I am 20 yrs old. My hobbies are playing video games and building a whole pc (especially those are for gaming). And as for my favorite food, I am not that kind of picky eater but I like foods that are spicy.
        I took up IT because it's really been my desire to take it since I was in High School. I have been amazed how pc parts work together to have a desired output. And also because of the benefits I can get after I graduated because I know in the future it will be on demand
        In the next 10 years maybe I'll find myself working or owning a business that I really really love, which is building PC's. It may be need more time than 10 years but I'll try my best to be in that position.
        It will be about how systems like codes or algorithms  can communicate with each other. It might be different but it's what comes to my mind when I saw our subject name.
        As of now I don't think I'll request anything but if I have one I will try my best to approach you sir by email or FB messenger."</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}