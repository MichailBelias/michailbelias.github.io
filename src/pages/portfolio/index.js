import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta, youtubeChannel } from "../../content_option";
import { FaYoutube } from 'react-icons/fa';

const YouTubeEmbed = ({ videoId, description }) => (
  <div className="video-container">
    <iframe
      width="100%"
      height="250"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={description}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
    <div className="video-description">
      <h3>{description}</h3>
    </div>
  </div>
);

const YouTubeChannelBanner = ({ url, description }) => (
  <div className="youtube-channel-banner">
    <a href={url} target="_blank" rel="noopener noreferrer" className="channel-link">
      <FaYoutube className="youtube-icon" />
      <span>Tech With M</span>
    </a>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noopener noreferrer" className="subscribe-button">
      Subscribe to Channel
    </a>
  </div>
);

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content="Explore Md. Moniruzzaman's portfolio of Java and Spring Boot projects, enterprise solutions, and software engineering work" />
          {meta.keywords && <meta name="keywords" content={meta.keywords} />}
          {meta.canonical && <link rel="canonical" href={`${meta.canonical}/portfolio`} />}
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "mainEntity": {
                  "@type": "ItemList",
                  "itemListElement": [
                    ${dataportfolio.map((project, index) => `
                      {
                        "@type": "CreativeWork",
                        "position": ${index + 1},
                        "url": "${meta.canonical}/portfolio",
                        "name": "${project.title}",
                        "description": "${project.description}"
                      }`).join(',')}
                  ]
                }
              }
            `}
          </script>
        </Helmet>
        
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <YouTubeChannelBanner url={youtubeChannel.url} description={youtubeChannel.description} />
          </Col>
        </Row>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            <h1 className="display-4 mb-4">Featured Videos</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="video-grid">
          {dataportfolio.map((data, i) => (
            <Col key={i} lg="6" className="mb-4">
              <YouTubeEmbed
                videoId={data.videoId}
                description={data.description}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
