import { Helmet } from "react-helmet-async";
import Hero1 from "../../components/Hero1/Hero1";
import SecH2andTxt from "../../components/SecH2andTxt/SecH2andTxt";
import content from "../../content.json";

const HomePage = () => {
  const head = content.head;
  const heroSection = content.hero;
  const textSec1 = content.textSections.find(
    (section) => section.id === "textSec1"
  );
  const textSec2 = content.textSections.find(
    (section) => section.id === "textSec2"
  );
  const textSec3 = content.textSections.find(
    (section) => section.id === "textSec3"
  );

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta property="og:locale" content="tr-TR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={head.url} />
        <meta property="og:title" content={head.title} />
        <meta property="og:image" content="/img/logo.webp" />
        <meta property="og:description" content={head.description} />

        <meta property="og:site_name" content={head.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={head.title} />
        <meta name="twitter:description" content={head.description} />

        <link rel="alternate" href={head.url} hrefLang="tr" />
        <link rel="alternate" href={head.url} hrefLang="x-default" />
        <meta name="msapplication-TileImage" content="/img/logo.webp" />

        <meta name="description" content={head.description} />
        <link rel="icon" href="/favicon.webp" type="image/x-icon" />
        <link rel="canonical" href={head.url} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: head.name,
              url: head.url,
              description: head.description,
              publisher: {
                "@type": "Organization",
                name: head.name,
                logo: {
                  "@type": "ImageObject",
                  url: "/img/logo.webp",
                  width: 300,
                  height: 60,
                },
              },
              mainEntity: {
                "@type": "WebPage",
                name: head.name,
                description: head.description,
                url: head.url,
              },
            }),
          }}
        ></script>
      </Helmet>
      <Hero1
        heading={heroSection.heading}
        paragraphs={heroSection.paragraphs}
      />
      <SecH2andTxt
        heading={textSec1.heading}
        paragraphs={textSec1.paragraphs}
      />
      <SecH2andTxt
        heading={textSec2.heading}
        paragraphs={textSec2.paragraphs}
      />
      <SecH2andTxt
        heading={textSec3.heading}
        paragraphs={textSec3.paragraphs}
      />
    </>
  );
};

export default HomePage;
