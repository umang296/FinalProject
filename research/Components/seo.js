//IMPORT

//COMPONENT CODES
export const seo = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="seo-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 rounded overflow-hidden">
            <h3 class="fw-bold text-center p-2 m-0 fs-6">Search Engine Optimization (SEO)</h3>
            <img src="research/images/SEO.jpeg" alt="Search Engine Optimization concept graphic">
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            <p class="fs-6 mb-1">5 ways to improve a website's visibility on search engines
              (see <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener">Google's SEO Starter Guide</a>):</p>
            <ol class="fs-6 lh-sm">
              <li><strong>Descriptive titles & meta descriptions</strong> &ndash; use relevant keywords in the
                page title and meta description so search engines and users know what the page is about.</li>
              <li><strong>Clean, semantic HTML</strong> &ndash; use proper heading levels (h1, h2, h3) and
                descriptive alt text on images so search engines can understand page structure and content.</li>
              <li><strong>Quality, original content</strong> &ndash; write useful, up-to-date content that
                answers what users are searching for, rather than thin or duplicate pages.</li>
              <li><strong>Fast, mobile-friendly pages</strong> &ndash; compress images, minify CSS/JS, and use
                responsive design, since page speed and mobile usability directly affect ranking.</li>
              <li><strong>Backlinks & internal linking</strong> &ndash; earn links from other reputable sites
                and link between your own pages to help search engines discover and rank your content.</li>
            </ol>
          </div>

        </div>
      </div>
    `;
    //Return HTML view
    return ui;

  },

  //--------------------------------------------
  //Functions
  addEvent() {
    document.getElementById('seo-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

}
