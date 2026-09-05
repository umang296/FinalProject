//IMPORT

//COMPONENT CODES
export const footer = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <!-- FOOTER -->
      <footer class="container-fluid" style="background-color: var(--navbar-color);">
        <div class="row align-items-center">
          <!--Social media icons section: on small screen it takes up entire row and centralized. -->
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center d-lg-block">
            <h3>
              <span class="bi bi-linkedin text-info m-1"></span>
              <span class="bi bi-facebook text-success m-1"></span>
              <span class="bi bi-twitter text-info m-1"></span>
              <span class="bi bi-youtube text-danger m-1"></span>
            </h3>
          </div>

          <!--Author name section -->
          <div class="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <p class="fs-6 mb-0">&copy; 2026 Umang Maharjan</p>
          </div>

          <!--Privacy policy section-->
          <div class="col-12 col-md-4 d-flex justify-content-center justify-content-md-end align-items-center pe-md-3">
            <button type="button" class="btn btn-link fs-6 fw-bold text-dark text-decoration-none p-0" data-bs-toggle="modal" data-bs-target="#privacyModal">
              Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      <!-- PRIVACY POLICY MODAL -->
      <div class="modal fade" id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title fw-bold" id="privacyModalLabel">
                <span class="bi bi-shield-lock me-2"></span>Privacy Policy
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="font-size: 0.95rem; line-height: 1.7;">
              <p><strong>Disclosure of Personal Information</strong><br />
              We do not sell, trade, or otherwise share your personal information with
              outside parties, except where required by law or to provide a service
              you've specifically requested.</p>
              <p><strong>Protection of Personal Information</strong><br />
              We take the security of your personal information seriously and take
              reasonable steps to protect it from misuse, loss, or unauthorised access.</p>
              <p><strong>Your Rights to Access Your Personal Information</strong><br />
              You have the right to access, correct, or request deletion of your personal
              information at any time. To do so, please contact us using the details below.</p>
              <p><strong>Changes to This Policy</strong><br />
              This Privacy Policy may be updated from time to time. Any changes will be
              posted on this page along with an updated effective date.</p>
              <p><strong>Contact</strong><br />
              If you have any questions or concerns about this Privacy Policy,
              please contact <strong>Umang Maharjan</strong> at
              <a href="mailto:umang@maharjan.com">umang@maharjan.com</a></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">
                <span class="bi bi-check2 me-1"></span>Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    //Return HTML view
    return ui;

  },

  //--------------------------------------------
  //Functions
}