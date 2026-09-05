//IMPORT

//COMPONENT CODES
export const hosting = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="hosting-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 rounded overflow-hidden">
            <h3 class="fw-bold text-center p-2 m-0 fs-6">Web Publishing & Hosting</h3>
            <img src="research/images/WH.jpeg" alt="Web hosting concept graphic">
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            <p class="fs-6 mb-1">5 major factors to consider when choosing a web hosting provider:</p>
            <ol class="fs-6 lh-sm">
              <li><strong>Uptime & reliability</strong> &ndash; look for a guaranteed uptime (e.g. 99.9%), since
                downtime means visitors and customers can't reach your site.</li>
              <li><strong>Speed & server location</strong> &ndash; servers closer to your target audience and
                fast hardware/CDN support reduce page load times.</li>
              <li><strong>Security features</strong> &ndash; free SSL certificates, firewalls, malware scanning
                and regular backups protect the site and its data.</li>
              <li><strong>Scalability</strong> &ndash; the ability to upgrade from shared hosting to VPS/cloud
                hosting as traffic grows, without migrating providers.</li>
              <li><strong>Support & cost</strong> &ndash; responsive 24/7 support and pricing that fits the
                budget, including renewal costs after any introductory discount.</li>
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
    document.getElementById('hosting-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

}
