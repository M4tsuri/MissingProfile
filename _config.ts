import lume from "lume/mod.ts";
import metas from "lume/plugins/metas.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

import mdKatex from "https://jspm.dev/markdown-it-texmath";
import mdAttrs from "https://jspm.dev/markdown-it-attrs";
import mdDeflist from "https://jspm.dev/markdown-it-deflist";

const site = lume({
    location: new URL("https://m4tsuri.com")
}, {
    markdown: {
        plugins: [mdKatex, mdAttrs, mdDeflist],
        keepDefaultPlugins: true
    }
});

site.use(metas())
site.use(codeHighlight())

// load remote css files, this site is not very famous so we use a offline version here
site.remoteFile("missing.min.css", "https://the.missing.style/v1.0.3/missing.min.css");

// copy css files
site.copy("missing.min.css")

// copy images
site.copy("static", ".")

// copy OpenPGP WKD files
site.copy("static/.well-known", ".well-known");

site.ignore("README.md")

export default site;
