if (!self.define) {
    let e, i = {};
    const r = (r, d) => (r = new URL(r + ".js", d).href, i[r] || new Promise((i => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = r, e.onload = i, document.head.appendChild(e)
        } else e = r, importScripts(r), i()
    })).then((() => {
        let e = i[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e
    })));
    self.define = (d, n) => {
        const c = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (i[c]) return;
        let s = {};
        const f = e => r(e, c),
            o = {
                module: {
                    uri: c
                },
                exports: s,
                require: f
            };
        i[c] = Promise.all(d.map((e => o[e] || f(e)))).then((e => (n(...e), s)))
    }
}
define(["./workbox-637af682"], (function (e) {
    "use strict";
    self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{
        url: "css/bootstrap.css",
        revision: "38a2854dbb05dcc50711edb289c78398"
    }, {
        url: "img/qr_128.png",
        revision: "d270ce963fe77087331891d245f6e7e7"
    }, {
        url: "img/qr_144.png",
        revision: "acce2cc4bd915ea11187d54334c46052"
    }, {
        url: "img/qr_152.png",
        revision: "13abd636d870aedcfe57784e1c47eb5e"
    }, {
        url: "img/qr_192.png",
        revision: "4a83f24f38edc9a39af2db71c700ee9a"
    }, {
        url: "img/qr_256.png",
        revision: "c98dad2dafe952218b1165b9a8e636fc"
    }, {
        url: "img/qr_384.png",
        revision: "81dcb7e79d926cc0f2dacd0e64584f56"
    }, {
        url: "img/qr_512.png",
        revision: "39f55e0bd4e3999e7d7d964f51b1a1ec"
    }, {
        url: "img/qr_72.png",
        revision: "e7422389ddc6d995292fb1502a6aa58e"
    }, {
        url: "img/qr_96.png",
        revision: "04fee0588e442d027cfd1f711f4693a8"
    }, {
        url: "img/Untitled.png",
        revision: "40413a0a79880d45162e048a59101ccd"
    }, {
        url: "index.html",
        revision: "bd750035bf652c816f48e0aa040f61af"
    }, {
        url: "js/Service_Worker.js",
        revision: "5147a114dd18fd4d3a1ee478ac17a862"
    }, {
        url: "js/sw.js",
        revision: "861f80b0a16e1dbe76bb40d39733e807"
    }, {
        url: "manifest.json",
        revision: "d2e1414fdc3e2dac652d0fc880afcc4b"
    }, {
        url: "offline.html",
        revision: "a80df2c525e9a2907d4cf933ef940f66"
    }], {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    })
}));
//# sourceMappingURL=sw.js.map