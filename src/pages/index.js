import { graphql, Link } from "gatsby";
import * as React from "react";
import { AppLayout } from "../layouts/app-layout";
import { formatDate } from "../utils/formatDate";
import { ProjectCard } from "../components/ProjectCard";
import { Helmet } from "react-helmet";

const IndexPage = ({ data }) => {
  const {
    allMdx: { edges },
    github: {
      viewer: { pinnedItems },
    },
  } = data;

  const title = "Marvin Frachet personal website";
  const personalImage = "https://avatars.githubusercontent.com/u/3874873?v=4";
  const description =
    "Frontend developer, mostly React, testing automation and ethical programming.";

  return (
    <AppLayout>
      <Helmet>
        <html lang="en" />

        <title>{title}</title>
        <meta name="description" content={description} />
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
        <div className="intro">
          <img
            className="avatar not-mobile"
            src={personalImage}
            alt=""
            aria-hidden
            width="100px"
            height="100px"
          />

          <img
            className="avatar mobile-only"
            src={personalImage}
            alt=""
            aria-hidden
            width="200px"
            height="200px"
          />
          <div>
            <h1 id="title">Marvin Frachet</h1>
            <p className="subtitle">
              Staff Frontend Engineer at{" "}
              <a
                href="https://openclassrooms.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <strong>OpenClassrooms</strong>
              </a>{" "}
              — previously{" "}
              <a
                href="https://strapi.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <strong>@Strapijs</strong>
              </a>{" "}
              and{" "}
              <a
                href="https://www.gatsbyjs.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <strong>@Gatsbyjs</strong>
              </a>
            </p>
          </div>
        </div>

        <section aria-labelledby="blog" className="section">
          <h2 id="blog">Latest posts</h2>

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

          <Link to="/blog" className="btn read-all">
            See all posts →
          </Link>
        </section>

        <section aria-labelledby="repos" className="section">
          <h2 id="repos">Personal projects</h2>

          <div className="card-grid">
            {pinnedItems.edges.map(({ node: repo }) => (
              <ProjectCard project={repo} key={repo.id} />
            ))}
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

export const query = graphql`
  query IndexData {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: "post" } } }
      limit: 3
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
    github {
      viewer {
        pinnedItems(first: 6) {
          edges {
            node {
              ... on GitHub_Repository {
                id
                name
                description
                stargazerCount
                url
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
