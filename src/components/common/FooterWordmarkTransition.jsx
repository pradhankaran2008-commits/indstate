import React from 'react';

/**
 * FooterWordmarkTransition
 * 
 * A full-width visual transition section that renders a large, outlined
 * "INDSTATE" wordmark bridging the white page background into the dark
 * footer below. The wordmark uses Fraunces (the site's display font)
 * in stroke-only treatment with a subtle navy-tinted outline.
 * 
 * This component should be placed directly above the <Footer /> in the
 * layout — it visually bleeds into the footer's dark background.
 */
export default function FooterWordmarkTransition() {
  return (
    <section className="footer-wordmark-section" aria-hidden="true">
      {/* White upper half — wordmark sits here */}
      <div className="footer-wordmark-upper">
        <div className="footer-wordmark-text-wrap">
          <span className="footer-wordmark-text">INDSTATE</span>
        </div>
      </div>

      {/* Dark strip — clean bridge into footer, no text */}
      <div className="footer-wordmark-lower" />
    </section>
  );
}
