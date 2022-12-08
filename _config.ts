import lume from "lume/mod.ts";

const site = lume({
    location: new URL("https://m4tsuri.com")
});

// load remote css files
site.remoteFile("missing-prism.min.css", "https://the.missing.style/v1.0.3/missing-prism.min.css")
    .remoteFile("missing.min.css", "https://the.missing.style/v1.0.3/missing.min.css");

// copy css files
site.copy("missing.min.css")
    .copy("missing-prism.min.css")

// copy images
site.copy("static", ".")

// copy OpenPGP WKD files
site.copy("static/.well-known", ".well-known");

export default site;
