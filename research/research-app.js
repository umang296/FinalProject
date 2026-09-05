//IMPORT
import { nav } from "./Components/nav.js";
import { footer } from "./Components/footer.js";
import { copyright } from "./Components/copyright.js";
import { privacy } from "./Components/privacy.js";
import { seo } from "./Components/seo.js";
import { hosting } from "./Components/hosting.js";
import { maintenance } from "./Components/maintenance.js";
import { security } from "./Components/security.js";

//Component Integrations
document.getElementById("nav-component").innerHTML = nav.renderUI();

document.getElementById('footer-component').innerHTML = footer.renderUI();

//
document.getElementById('copyright-component').innerHTML = copyright.renderUI();
copyright.addEvent();

//
document.getElementById('privacy-component').innerHTML = privacy.renderUI();
privacy.addEvent();

//
document.getElementById('seo-component').innerHTML = seo.renderUI();
seo.addEvent();

//
document.getElementById('hosting-component').innerHTML = hosting.renderUI();
hosting.addEvent();

//
document.getElementById('maintenance-component').innerHTML = maintenance.renderUI();
maintenance.addEvent();

//
document.getElementById('security-component').innerHTML = security.renderUI();
security.addEvent();
