//IMPORT

//COMPONENT CODES
export const nav = {

  //--------------------------------------------
  //Data properties
  //--------------------------------------------

  //Component User Interface (UI)
  renderUI() {
    //Build HTML view
    let ui = `
      <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid px-3 px-md-4">
          <!-- Brand -->
          <a class="navbar-brand" href="index.html">
            <span class="bi bi-globe fs-3 me-1"></span>ITWD6.408
          </a>

          <!-- Mobile search button (visible on small) -->
          <button class="btn btn-search d-inline d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
            <span class="bi bi-search fs-3"></span>
          </button>

          <!-- Toggler -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Nav links -->
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav fs-6 gap-1">
              <li class="nav-item">
                <a class="nav-link" href="index.html">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="form.html">FORMS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="WebAPI.html">WebAPI</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="jsdemo.html">JAVASCRIPT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="my-research.html">RESEARCH</a>
              </li>
            </ul>
          </div>

          <!-- Desktop search button (large screens) -->
          <button class="btn btn-search d-none d-lg-inline-block" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSearch" aria-expanded="false" aria-controls="collapseSearch">
            <span class="bi bi-search fs-3"></span>
          </button>
        </div>
      </nav>

      <!-- Collapsible Search Bar -->
      <div class="collapse" id="collapseSearch">
        <div class="container py-2">
          <div class="card card-body shadow-sm">
            <form class="d-flex" role="search" method="get" action="https://www.google.com/search">
              <input class="form-control me-2" type="search" name="q" placeholder="Search the site…" aria-label="Search" required>
              <button class="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    `;
    //return HTML view
    return ui;

  },

  //Functions
  //--------------------------------------------

}