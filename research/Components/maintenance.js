//IMPORT

//COMPONENT CODES
export const maintenance = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="maintenance-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 rounded overflow-hidden">
            <h3 class="fw-bold text-center p-2 m-0 fs-6">Web Performance & Maintenance</h3>
            <img src="research/images/WPAM.jpeg" alt="Website performance and maintenance graphic">
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            <p class="fs-6 mb-1"><strong>5 ways to reduce page loading time:</strong></p>
            <ol class="fs-6 lh-sm">
              <li>Compress and correctly size images (e.g. WebP format) before uploading.</li>
              <li>Minify and bundle CSS/JavaScript files to cut down file size and requests.</li>
              <li>Use browser caching and a Content Delivery Network (CDN) for static assets.</li>
              <li>Limit render-blocking scripts &ndash; load non-critical JS with <code>defer</code>/<code>async</code>.</li>
              <li>Choose fast, reliable hosting and enable server-side compression (e.g. Gzip/Brotli).</li>
            </ol>
            <p class="fs-6 mb-1"><strong>5 important website maintenance tasks:</strong></p>
            <ol class="fs-6 lh-sm">
              <li>Regularly back up the site and database.</li>
              <li>Update software, plugins, and dependencies to patch vulnerabilities.</li>
              <li>Check for and fix broken links and 404 errors.</li>
              <li>Monitor uptime, load speed and analytics to catch issues early.</li>
              <li>Review and refresh content to keep information accurate and relevant.</li>
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
    document.getElementById('maintenance-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

}
