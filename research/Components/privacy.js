//IMPORT

//COMPONENT CODES
export const privacy = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="privacy-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 rounded overflow-hidden">
            <h3 class="fw-bold text-center p-2 m-0 fs-6">Privacy & Privacy Policy</h3>
            <img src="research/images/PP.jpeg" alt="Privacy Policy typed on a typewriter">
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            <p class="fs-6 mb-1"><strong>What is a Privacy Policy?</strong> A public statement explaining what
              personal information a website collects, why, how it's stored, and what rights users have over it.
              In NZ this is governed by the <a href="https://www.privacy.org.nz/privacy-principles/" target="_blank" rel="noopener">Privacy Act 2020</a>,
              which sets out 13 Information Privacy Principles (IPPs):</p>
            <ol class="fs-6 lh-sm" style="font-size:0.8rem;">
              <li>Purpose &ndash; only collect info for a lawful, necessary reason.</li>
              <li>Source &ndash; collect directly from the person where possible.</li>
              <li>Collection notice &ndash; tell people what/why when collecting directly.</li>
              <li>Manner of collection &ndash; must be lawful, fair, not unreasonably intrusive.</li>
              <li>Storage & security &ndash; keep information safe from loss or misuse.</li>
              <li>Access &ndash; people can request their own information.</li>
              <li>Correction &ndash; people can request corrections to their information.</li>
              <li>Accuracy &ndash; check info is accurate before using it.</li>
              <li>Retention &ndash; don't keep info longer than needed.</li>
              <li>Use limits &ndash; only use info for the purpose it was collected.</li>
              <li>Disclosure limits &ndash; don't share info outside that purpose without reason.</li>
              <li>Disclosure outside NZ &ndash; extra care sending data overseas.</li>
              <li>Unique identifiers &ndash; don't misuse IDs like passport/IRD numbers.</li>
            </ol>
            <p class="fs-6 mb-1"><strong>This site's short Privacy Policy:</strong></p>
            <ol class="fs-6 lh-sm">
              <li>We only collect the information you submit through our forms (e.g. name, address, contact details).</li>
              <li>We never sell or share your information with third parties.</li>
              <li>Cookies are used only to improve your browsing experience.</li>
              <li>You can request access to, or deletion of, any data we hold about you at any time.</li>
              <li>Data is stored securely and only kept as long as necessary.</li>
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
    document.getElementById('privacy-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

}
