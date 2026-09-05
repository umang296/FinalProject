//IMPORT

//COMPONENT CODES
export const copyright = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="copyright-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <!-- Card front-->
          <div class="flip-card-front position-absolute w-100 h-100 rounded overflow-hidden">
            <h3 class="fw-bold text-center p-2 m-0 fs-6">Copyright, CC Licences & Fair Dealing</h3>
            <img src="research/images/SOR.jpeg" alt="The spectrum of rights: copyright, creative commons, public domain">
          </div>

          <!-- Card back -->
          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            <ol class="fs-6 lh-sm">
              <li><strong>Copyright basics:</strong> copyright protects original work (text, images, code, music)
                automatically the moment it is created, in New Zealand under the
                <a href="https://www.legislation.govt.nz/act/public/1994/0143/latest/whole.html" target="_blank" rel="noopener">Copyright Act 1994</a>.
                No registration is needed &mdash; the owner alone can copy, publish, adapt or perform the work.</li>
              <li><strong>Creative Commons (CC) &mdash; 4 conditions:</strong> CC licences are built from four
                conditions that creators mix and match:
                <strong>Attribution (BY)</strong> &ndash; must credit the creator;
                <strong>ShareAlike (SA)</strong> &ndash; derivatives must use the same licence;
                <strong>NonCommercial (NC)</strong> &ndash; no commercial use allowed;
                <strong>NoDerivatives (ND)</strong> &ndash; the work can't be altered.
                These combine into six actual licences (e.g. CC BY, CC BY-SA, CC BY-NC, CC BY-ND, CC BY-NC-SA,
                CC BY-NC-ND) &mdash; see <a href="https://creativecommons.org/share-your-work/cclicenses/" target="_blank" rel="noopener">creativecommons.org</a>.</li>
              <li><strong>Fair Dealing (NZ's equivalent to "fair use"):</strong> NZ law does not have a US-style
                "fair use" test. Instead, ss 42&ndash;43 of the Copyright Act 1994 allow limited, unlicensed use
                for specific purposes: research or private study, criticism or review, and news reporting &mdash;
                provided the use is "fair" and sufficiently acknowledges the source. See the
                <a href="https://www.copyright.co.nz/" target="_blank" rel="noopener">Copyright Licensing NZ fact sheet</a> on fair dealing.</li>
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
    // Flip cards on click
    document.getElementById('copyright-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

}
