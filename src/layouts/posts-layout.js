import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Helmet } from "react-helmet";
import "../styles/reset.css";
import "../styles/index.css";
import { AppLayout } from "./app-layout";

const components = {};

export default function PostLayout({ children, pageContext }) {
  const { frontmatter } = pageContext;

  return (
    <MDXProvider components={components}>
      <AppLayout>
        <Helmet>
          <html lang="en" />

          <title>{frontmatter.title}</title>

          <meta name="description" content={frontmatter.excerpt} />
          <meta property="og:description" content={frontmatter.excerpt} />

          <meta
            name="keywords"
            content="HTML, CSS, JavaScript, Accessibility, A11y, e2e, tests, testing, React, React Native"
          />

          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:image" content={frontmatter.metaImage} />

          <meta name="author" content="Marvin Frachet" />
        </Helmet>

        <main aria-labelledby="title" className="wrapper">
          <h1 id="title">{frontmatter.title}</h1>
          {children}
        </main>
      </AppLayout>
    </MDXProvider>
  );
}
