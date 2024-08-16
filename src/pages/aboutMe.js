import * as React from "react"
import { graphql } from "gatsby"

import PageTemplate from "./page-templates/pageTemplate"

const AboutMe = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PageTemplate
      location={location}
      pageTitle={"About Me"}
      pageSeo={"About"}
      tabIndex={3}
    >
      <div>
        <h2>Who am I</h2>
        <p>Greetings, visitor! I'm Bao, also known as Jason, currently pursuing my studies in electrical engineering at
          Toronto Metropolitan University (TMU). Nature, particularly Physics and Maths, has always captivated my
          interest. Back in secondary school, I delved into the world of Mathematics, and it became a passion.</p>
        <p>As a curious kid, topics like chip design and software engineering always fascinated me. When the time came
          to choose a major for university, it was a no-brainer – engineering it was!</p>
        <p>Beyond academics, I enjoy expanding my skill set. Whether it's diving into new programming languages or
          exploring the latest technology trends, I love learning. Occasionally, I embark on DIY projects found online,
          turning free time into a fun and creative outlet. When I'm not occupied with studies or projects, you'll find
          me working out, sipping on coffee or Coke, indulging in croissants, and taking nighttime strolls around the
          city. Neon Genesis Evangelion holds the title of my all-time favorite anime.</p>
        <p>I am a perfectionist. I want to solve the problems in my hands in perfect ways, which is, however, not
          achievable in many situations. I also apply Bellman Equation in the optimization of my life, which is a Markov
          decision process, but the future discount factor in the equation might be small and I would often be trapped
          in local optimum.</p>
        <figure>
          <img src="https://wallpapercave.com/wp/wp3063142.jpg" alt="Cute Image" />
          <figcaption style={{ textAlign: "center", color: "#888" }}>My most favourite dish</figcaption>
        </figure>
        <h2>About This Site</h2>
        <p>This is the second time I build my personal website. The <anop
          href="https://my-personal-website-git-main-giabaocorn20.vercel.app/">first one</anop> was built by vanilla
          Next.js. However, I found that it is not flexible enough for me to customize the website, and I realized I
          wanted a static blog rather than a website that's full of UI elements. Therefore, I decided to build my
          website with GatsbyJS, which is a static site generator based on ReactJS. I also use Github to host my
          website. The source code of this website is available on my GitHub.
        </p>
        <p>This website is built to:</p>
        <ul>
          <li>Discuss the mathematics and the technical details of machine learning, deep learning, and computer science
            theories.
          </li>
          <li>Document the implementation of algorithms for solving real problems.</li>
          <li>Present my independent research projects.</li>
          <li>Record my personal achievements.</li>
        </ul>
        <p>It should be noted that all the contents of this website are solely my own and do not express the views or
          opinions of my employer.</p>

        <h2>Citations</h2>
        <p>If you would like to cite the blog posts and articles on this site or repositories on my GitHub, please use
          the URLs. I will not change the URLs, unless someday GitHub does not exist.</p>

        <h2>Contact Me</h2>
        <p>If you have any questions or critical comments regarding my blog posts, please post your questions under the
          blog post...</p>
        <p>For private questions, please contact me via my personal Email.</p>
      </div>

    </PageTemplate>
  )
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
