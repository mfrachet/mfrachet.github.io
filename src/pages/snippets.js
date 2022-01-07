import * as React from "react";
import { Helmet } from "react-helmet";
import { AppLayout } from "../layouts/app-layout";
import { formatDate } from "../utils/formatDate";
import { Link, graphql } from "gatsby";

const SnippetPage = ({ data }) => {
  const {
    allMdx: { edges },
  } = data;

  const title = "Marvin Frachet | Snippets";
  const personalImage = "https://avatars.githubusercontent.com/u/3874873?v=4";
  const description =
    "Code snippets and tricks about React, testing, accessibility and a lot of other things";

  return (
    <AppLayout>
      <Helmet>
        <html lang="en" />

        <title>{title}</title>
        <meta name="description" content="Blog posts that I've written" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Accessibility, A11y, e2e, tests, testing, React, React Native"
        />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={personalImage} />
        <meta property="og:description" content={description} />

        <meta name="author" content="Marvin Frachet" />
      </Helmet>

      <main aria-labelledby="title" className="wrapper">
        <h1 id="title">{"Code snippets & tricks"}</h1>

        <p>
          Many of these snippets and tricks are taken from other developers, and
          I probably don't remember all of the sources. If you feel that I've
          used the snippet without mentions,{" "}
          <a href="mailto:marvin.frachet@protonmail.com">
            feel free to reach out to me
          </a>{" "}
          so that I can correct this mistake.
        </p>

        <ul>
          {edges.map(({ node: post }) => {
            const date = formatDate(new Date(post.frontmatter.date));

            return (
              <li key={post.slug}>
                <Link to={`/${post.slug}`}>{post.frontmatter.title}</Link>{" "}
                <small>— published the</small>{" "}
                <time dateTime={date}>{date}</time>
              </li>
            );
          })}
        </ul>
      </main>
    </AppLayout>
  );
};

export const query = graphql`
  query SnippetPage {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: "snippet" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          slug
        }
      }
    }
  }
`;

export default SnippetPage;
