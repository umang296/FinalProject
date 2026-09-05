//IMPORT

//COMPONENT CODES
export const security = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <div class="flip-card position-relative" id="security-card">
        <div class="flip-card-inner position-relative w-100 h-100">

          <div class="flip-card-front position-absolute w-100 h-100 rounded overflow-hidden">
            <h3 class="fw-bold text-center p-2 m-0 fs-6">Web Security</h3>
            <img src="research/images/WS.jpeg" alt="Web security concept graphic">
          </div>

          <div class="flip-card-back position-absolute w-100 h-100 p-3 rounded overflow-y-auto">
            <p class="fs-6 mb-1">5 common cyber attacks and preventive measures
              (see <a href="https://owasp.org/www-project-top-ten/" target="_blank" rel="noopener">OWASP Top 10</a>):</p>
            <ol class="fs-6 lh-sm">
              <li><strong>Phishing</strong> &ndash; fake emails/sites trick users into giving up credentials.
                <em>Prevention:</em> staff training, email filtering, multi-factor authentication (MFA).</li>
              <li><strong>SQL Injection</strong> &ndash; malicious SQL is inserted through input fields to access
                or damage a database. <em>Prevention:</em> parameterised queries, input validation/sanitisation.</li>
              <li><strong>Cross-Site Scripting (XSS)</strong> &ndash; attackers inject scripts into pages viewed
                by other users. <em>Prevention:</em> sanitise/escape user input and output, use a Content
                Security Policy (CSP).</li>
              <li><strong>Malware / Ransomware</strong> &ndash; malicious software that damages systems or locks
                data for ransom. <em>Prevention:</em> updated antivirus, regular backups, restricted permissions.</li>
              <li><strong>DDoS (Distributed Denial of Service)</strong> &ndash; flooding a server with traffic to
                take it offline. <em>Prevention:</em> firewalls, rate limiting, and DDoS-mitigation/CDN services.</li>
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
    document.getElementById('security-card').addEventListener('click', function() {
      this.classList.toggle("flipped");
    });
  },

}
