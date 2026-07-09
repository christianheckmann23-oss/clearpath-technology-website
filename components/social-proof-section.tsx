import Script from "next/script";

const FB_POST_URL =
  "https://www.facebook.com/permalink.php?story_fbid=pfbid034uXvXhSBVBreMQMmiw8zU7T5aWT4pnMSANBjWjZDpWNcHKPwCQyhMUzbAcv4qqsVl&id=61591804792398";

export function SocialProofSection() {
  return (
    <section className="social-proof-section">
      <div className="container">
        <span className="case-eyebrow">From Our Page</span>
        <h2>
          Real work.
          <br />
          <em>Real feedback.</em>
        </h2>
        <div className="fb-embed-wrap">
          <div id="fb-root" />
          <div className="fb-post" data-href={FB_POST_URL} data-width="auto" data-show-text="true" />
        </div>
      </div>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
    </section>
  );
}
