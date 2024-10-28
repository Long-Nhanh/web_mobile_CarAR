/*! For license information please see animated.bundle.js.LICENSE.txt */
(()=>{
    var t = {
        537: ()=>{
            document.addEventListener("DOMContentLoaded", (function() {
                var t = document.querySelectorAll("[data-section-anchor]");
                function e(t) {
                    var e = t.offsetTop;
                    e -= 60,
                    window.scrollTo({
                        top: e,
                        behavior: "smooth"
                    })
                }
                function a() {
                    var a = window.location.hash.substring(1).toLowerCase();
                    if (a) {
                        var n = document.querySelector('[data-section-anchor="' + a + '"]');
                        n || t.forEach((function(t) {
                            t.dataset.sectionAnchor.toLowerCase() === a && (n = t)
                        }
                        )),
                        n && e(n)
                    }
                }
                window.addEventListener("hashchange", a),
                setTimeout(a, 0),
                document.addEventListener("click", (function(a) {
                    if (n = a.target.getAttribute("href")) {
                        var n, i = n.substring(1).toLowerCase();
                        (n = document.querySelector('[data-section-anchor="' + i + '"]')) || t.forEach((function(t) {
                            t.dataset.sectionAnchor.toLowerCase() === i && (n = t)
                        }
                        )),
                        n && (e(n),
                        history.pushState(null, null, "#" + i),
                        a.preventDefault())
                    }
                }
                ))
            }
            ))
        }
        ,
        438: ()=>{
            function t() {
                return "true" === localStorage.getItem("audioPlaying")
            }
            function e(t) {
                localStorage.setItem("audioPlaying", t)
            }
            const a = document.querySelector(".lamborghini__sound")
              , n = document.getElementById("lamborghini__audio");
            let i = t()
              , o = a.getAttribute("data-sound-off")
              , s = a.getAttribute("data-sound-on");
            a.textContent = i ? s : o,
            a.addEventListener("click", (function() {
                i = !i,
                a.textContent = i ? s : o,
                n && (i ? n.play() : n.pause()),
                e(i)
            }
            )),
            window.onbeforeunload = function() {
                e(i)
            }
            ;
            t() && (i = !0,
            a.textContent = o,
            n && ("undefined" != typeof Storage && (sessionStorage.getItem("musicTime") && (n.currentTime = sessionStorage.getItem("musicTime")),
            n.addEventListener("timeupdate", (function() {
                sessionStorage.setItem("musicTime", n.currentTime)
            }
            ))),
            n.play()))
        }
        ,
        839: ()=>{
            document.querySelector(".lamborghini__language");
            let t = document.querySelector(".lamborghini__language-container");
            document.querySelector(".lamborghini__language-container-wrapper");
            t && (document.onclick = function(e) {
                "lamborghiniLanguage" === e.target.id && ("none" === t.style.display ? gsap.fromTo(t, {
                    display: "none",
                    yPercent: 10
                }, {
                    duration: .1,
                    display: "flex",
                    yPercent: 0
                }) : gsap.fromTo(t, {
                    display: "flex",
                    yPercent: 0
                }, {
                    duration: .1,
                    display: "none",
                    yPercent: 10
                })),
                "lamborghiniLanguageContainer" !== e.target.id && "lamborghiniLanguage" !== e.target.id && "none" !== t.style.display && gsap.fromTo(t, {
                    display: "flex",
                    yPercent: 0
                }, {
                    duration: .1,
                    display: "none",
                    yPercent: 10
                })
            }
            )
        }
        ,
        773: function(t) {
            t.exports = function() {
                "use strict";
                function t(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = arguments[e];
                        for (var n in a)
                            t[n] = a[n]
                    }
                    return t
                }
                var e = {
                    read: function(t) {
                        return t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                    },
                    write: function(t) {
                        return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                    }
                };
                function a(n, i) {
                    function o(e, a, o) {
                        if ("undefined" != typeof document) {
                            "number" == typeof (o = t({}, i, o)).expires && (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                            o.expires && (o.expires = o.expires.toUTCString()),
                            e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape),
                            a = n.write(a, e);
                            var s = "";
                            for (var l in o)
                                o[l] && (s += "; " + l,
                                !0 !== o[l] && (s += "=" + o[l].split(";")[0]));
                            return document.cookie = e + "=" + a + s
                        }
                    }
                    function s(t) {
                        if ("undefined" != typeof document && (!arguments.length || t)) {
                            for (var a = document.cookie ? document.cookie.split("; ") : [], i = {}, o = 0; o < a.length; o++) {
                                var s = a[o].split("=")
                                  , l = s.slice(1).join("=");
                                '"' === l[0] && (l = l.slice(1, -1));
                                try {
                                    var r = e.read(s[0]);
                                    if (i[r] = n.read(l, r),
                                    t === r)
                                        break
                                } catch (t) {}
                            }
                            return t ? i[t] : i
                        }
                    }
                    return Object.create({
                        set: o,
                        get: s,
                        remove: function(e, a) {
                            o(e, "", t({}, a, {
                                expires: -1
                            }))
                        },
                        withAttributes: function(e) {
                            return a(this.converter, t({}, this.attributes, e))
                        },
                        withConverter: function(e) {
                            return a(t({}, this.converter, e), this.attributes)
                        }
                    }, {
                        attributes: {
                            value: Object.freeze(i)
                        },
                        converter: {
                            value: Object.freeze(n)
                        }
                    })
                }
                return a(e, {
                    path: "/"
                })
            }()
        },
        20: ()=>{
            window.onpageshow = function(t) {
                t.persisted && (document.body.classList.remove("modal-open"),
                tl_popup.time(0).kill())
            }
            ;
            const t = document.querySelectorAll(".lamborghini__miau-card-video");
            document.querySelectorAll(".lamborghini__miau-card-image");
            const e = gsap.timeline({
                reversed: !1
            });
            var a, n, i;
            a = "(min-width: 768px)",
            n = function(e) {
                e ? [].forEach.call(t, (function(t) {
                    let e = null
                      , a = t.closest(".lamborghini__miau-card-wrapper");
                    a.addEventListener("mouseenter", (()=>{
                        t.muted = !0,
                        t.currentTime = 0,
                        t.play()
                    }
                    )),
                    a.addEventListener("mouseleave", (()=>{
                        clearTimeout(e),
                        e = null,
                        t.currentTime = 0,
                        t.pause(),
                        t.load()
                    }
                    ))
                }
                )) : [].forEach.call(t, (function(t) {
                    t.src = t.querySelector("source").getAttribute("data-src"),
                    t.play()
                }
                ))
            }
            ,
            (i = window.matchMedia(a)).addListener((function(t) {
                return n(t.matches)
            }
            )),
            n(i.matches);
            let o = document.querySelectorAll(".lamborghini__miau-card")
              , s = document.querySelector(".lamborghini__modal-overlay")
              , l = document.querySelector(".lamborghini__modal");
            function r(t) {
                if (!t.getClientRects().length)
                    return {
                        top: 0,
                        left: 0
                    };
                let e = t.getBoundingClientRect()
                  , a = t.ownerDocument.defaultView;
                return {
                    top: e.top + a.pageYOffset - document.documentElement.clientTop,
                    left: e.left + a.pageXOffset - document.documentElement.clientLeft
                }
            }
            const u = [];
            document.querySelectorAll("[data-section-anchor]");
            if (s || l) {
                e.set([s, l], {
                    autoAlpha: 0
                }),
                o.forEach(((t,e)=>{
                    t.onclick = function(t) {
                        this.dataset.url;
                        const e = this.getAttribute("data-url")
                          , a = this.getAttribute("data-anchor");
                        if ("" != e)
                            !function(t, e) {
                                var a = function(t, e) {
                                    var a = e.getBoundingClientRect()
                                      , n = t.getBoundingClientRect();
                                    gsap.set(t, {
                                        x: 0,
                                        y: 0,
                                        width: a.width,
                                        height: a.height
                                    });
                                    var i = t.getBoundingClientRect();
                                    return gsap.set(t, {
                                        width: n.width,
                                        height: n.height
                                    }),
                                    {
                                        left: a.left - i.left,
                                        top: a.top - i.top,
                                        width: i.width,
                                        height: i.height
                                    }
                                }(l, t);
                                let n;
                                gsap.set(l, {
                                    x: a.left,
                                    y: a.top,
                                    width: a.width,
                                    height: a.height
                                }),
                                tl_popup = gsap.timeline({
                                    reversed: !1,
                                    clearProps: !0,
                                    onComplete: function() {
                                        this.time(0).kill(),
                                        setTimeout((()=>{
                                            location.href = t.dataset.url
                                        }
                                        ), "100")
                                    }
                                }),
                                tl_popup.set(".lamborghini__modal-card-mask", {
                                    rotation: .1
                                }).set(".lamborghini__navigation_head", {
                                    y: 0
                                }).set(".lamborghini__settings-bar", {
                                    y: 0
                                }),
                                tl_popup.to(s, .1, {
                                    autoAlpha: 1,
                                    visibility: "visible"
                                }),
                                tl_popup.to(l, 1.4, {
                                    x: 0,
                                    y: 0,
                                    width: "100vw",
                                    height: "100vh",
                                    autoAlpha: 1,
                                    visibility: "visible"
                                });
                                let i, o = document.querySelector(".lamborghini__modal-video"), r = document.querySelector(".lamborghini__modal-image"), u = document.querySelector(".lamborghini__modal-card-mask");
                                "IMG" == e.target.tagName ? (o.style.display = "none",
                                i = r,
                                n = e.target.src,
                                urlMobile = t.querySelector(".lamborghini__miau-card-image-srcset").srcset,
                                r.querySelector("img").src = window.innerWidth <= 767 ? urlMobile : n) : (r.style.display = "none",
                                i = o,
                                n = e.target.querySelector("source").src,
                                urlMobile = e.target.querySelector("source").getAttribute("data-src"),
                                o.src = window.innerWidth <= 767 ? urlMobile : n,
                                o.play());
                                tl_popup.from(i, {
                                    scale: 1,
                                    duration: 1,
                                    ease: "none"
                                }).to(u, {
                                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                    height: "100vh",
                                    duration: 1,
                                    ease: "none"
                                }, 0).to(u, {
                                    scale: 1.1,
                                    width: "100vw",
                                    duration: 1.5,
                                    ease: "none"
                                }, .7).to(".lamborghini__navigation_head", {
                                    duration: .5,
                                    autoAlpha: 0,
                                    y: -200
                                }, 1.5).to(".lamborghini__settings-bar", {
                                    duration: .5,
                                    autoAlpha: 0,
                                    y: 200
                                }, 1.5).to("body", {
                                    autoAlpha: 0,
                                    duration: .2,
                                    onComplete: function(t) {
                                        document.body.classList.add("modal-open")
                                    }
                                }, 1.7),
                                s.dataset.url = t.dataset.url
                            }(this, t);
                        else {
                            const t = a.replace(/^#/, "").replace(/[.*+?^${}()|[\]\\]/g, "-")
                              , e = document.querySelector(`[data-section-anchor=${t}]`);
                            null != e && (async(t,e,a)=>{
                                u.forEach((t=>t.disable())),
                                await gsap.to(window, {
                                    scrollTo: {
                                        y: r(t).top - t.clientHeight + 300,
                                        autoKill: !1
                                    }
                                }),
                                u.forEach((t=>t.enable()))
                            }
                            )(e)
                        }
                    }
                }
                ))
            }
        }
        ,
        968: ()=>{
            var t = {
                windowHeight: window.innerHeight,
                windowWidth: window.innerWidth,
                isMobile: !1,
                isTouch: !1,
                $body: document.querySelector("body"),
                culture: "en",
                navtoggle: document.querySelector(".menu"),
                tl_navigation: gsap.timeline({
                    reversed: !0
                }),
                sub_navigation_animate_in_effect: "Circ.easeOut",
                main_link_animate_in_effect: "Circ.easeOut",
                tl_sub_navigation: gsap.timeline({
                    reversed: !1
                }),
                hasValidMobileWidth: window.innerWidth <= 776,
                hasCookieLoader: !1,
                cursor: document.querySelector(".cursor"),
                follower: document.querySelector(".cursor-follower"),
                detectDevice: function() {
                    var e;
                    e = navigator.userAgent || navigator.vendor || window.opera,
                    (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t.isMobile = !0),
                    navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? (t.isTouch = !0,
                    t.$body.classList.add("touch")) : t.$body.classList.add("no-touch")
                },
                clickNavLink: function() {
                    t.navtoggle && t.navtoggle.addEventListener("click", (()=>{
                        t.tl_navigation.reversed() ? (t.tl_navigation.play(),
                        document.querySelector("html").classList.add("lamborghini__nav-active")) : (t.tl_navigation.reverse(.2),
                        t.resetNavigation(),
                        document.querySelector("html").classList.remove("lamborghini__nav-active"))
                    }
                    ))
                },
                subMenuNavLink: function() {
                    gsap.utils.toArray(".lamborghini__nav-item").forEach((e=>{
                        var a = e.querySelector(".lamborghini__main-link")
                          , n = e.querySelector(".lamborghini__submenu")
                          , i = e.querySelector(".lamborghini__scroller")
                          , o = e.classList.contains("lamborghini__has-submenu");
                        a.addEventListener("click", (function(s) {
                            t.resetNavigation(),
                            o && t.playNavigation(e, a, n, i, o)
                        }
                        ))
                    }
                    ))
                },
                mainNavigation: function() {
                    t.tl_navigation.set(".lamborghini__nav-item", {
                        x: "random([-3000,3000])"
                    }),
                    t.tl_navigation.set(".lamborghini__nav-item-1", {
                        x: -2e3
                    }).set(".lamborghini__nav-item-2", {
                        x: -2200
                    }).set(".lamborghini__nav-item-3", {
                        x: 3200
                    }).set(".lamborghini__nav-item-4", {
                        x: 2800
                    }).set(".lamborghini__nav-item-5", {
                        x: -2600
                    }),
                    t.tl_navigation.to(".edges", {
                        duration: .5,
                        opacity: 0,
                        ease: "power.inOut"
                    }).to(".line1", {
                        duration: .05,
                        strokeDasharray: "90 207",
                        strokeDashoffset: "-134"
                    }).to(".line2", {
                        duration: .05,
                        strokeDasharray: "1 60",
                        strokeDashoffset: "-10"
                    }, "-=0.2").to(".line3", {
                        duration: .05,
                        strokeDasharray: "90 207",
                        strokeDashoffset: "-134"
                    }, "-=0.3").to(".lamborghini__nav-bar__overlay", {
                        duration: .3,
                        opacity: 1,
                        height: "100vh",
                        ease: "power.inOut"
                    }, "-=0.2").to(".lamborghini__nav-bar", {
                        duration: .1,
                        opacity: 1,
                        height: "100vh",
                        position: "fixed",
                        backgroundColor: "#000",
                        ease: "power.inOut"
                    }, "-=0.4").to("nav", {
                        duration: .1,
                        opacity: 1,
                        display: "block"
                    }, "-=0.3").to(".lamborghini__nav-item", {
                        stagger: .1,
                        keyframes: [t.hasValidMobileWidth ? {
                            x: 0,
                            y: 0,
                            duration: 2,
                            yoyo: !0,
                            display: "block",
                            ease: "power4.out(2,2)",
                            stagger: .01
                        } : {
                            x: 0,
                            y: 0,
                            duration: 2,
                            yoyo: !0,
                            display: "flex",
                            ease: "power4.out(2,2)",
                            stagger: .01
                        }]
                    }, "-=0.2")
                },
                resetNavigation: function() {
                    document.querySelectorAll(".lamborghini__nav-item").forEach((t=>{
                        t.classList.remove("active")
                    }
                    )),
                    t.tl_sub_navigation.to(".lamborghini__submenu", {
                        duration: .5,
                        x: 2e3,
                        display: "none",
                        ease: "Power4.easeOut"
                    }, "-=0.4"),
                    t.hasValidMobileWidth || t.tl_sub_navigation.to(".lamborghini__main-link", {
                        duration: .5,
                        x: 0,
                        autoAlpha: 1,
                        width: "100%",
                        ease: "Circ.easeOut",
                        display: "block"
                    }, "-=0.4")
                },
                playNavigation: function(e, a, n, i, o) {
                    t.hasValidMobileWidth ? t.tl_sub_navigation.to(a, {
                        duration: .2,
                        display: "block",
                        ease: "Circ.easeOut"
                    }) : t.tl_sub_navigation.to(a, {
                        duration: .2,
                        x: -1e3,
                        autoAlpha: 0,
                        width: 0,
                        ease: "Circ.easeOut",
                        position: "absolute"
                    }, "-=0.2"),
                    t.tl_sub_navigation.fromTo(n, {
                        x: 2e3
                    }, {
                        duration: 1.2,
                        x: 0,
                        display: "flex",
                        ease: "'Power4.inOut'",
                        onStart: t=>{}
                        ,
                        onUpdate: e=>{
                            setTimeout((function() {
                                Draggable.create(i, {
                                    type: t.hasValidMobileWidth ? "scroll" : "x, scroll",
                                    lockAxis: "x",
                                    bounds: n,
                                    allowEventDefault: !0
                                })
                            }
                            ), 200)
                        }
                        ,
                        onComplete: a=>{
                            for (var i = n.children, o = 0, s = 0; s < i.length; s++)
                                o += parseInt(i[s].offsetWidth, 10);
                            o >= document.body.clientWidth && (e.classList.add("active"),
                            t.movingArrow(e))
                        }
                    }, "-=0.2")
                },
                subMenuNavLinkClose: function() {
                    gsap.utils.toArray(".lamborghini__subitem").forEach((t=>{
                        t.querySelector("a").addEventListener("click", (function(t) {
                            t.preventDefault(),
                            TweenMax.to(".lamborghini__sub-nav-bar__overlay", {
                                delay: 0,
                                ease: "power.inOut",
                                opacity: 1,
                                autoAlpha: 1,
                                duration: 1
                            });
                            const e = this.getAttribute("href");
                            setTimeout((function() {
                                window.location = e
                            }
                            ), 1e3)
                        }
                        ))
                    }
                    ))
                },
                closeMenuAnimated: function(e) {
                    t.tl_sub_navigation.fromTo(e, .5, {
                        opacity: 1,
                        x: 2e3
                    }, {
                        opacity: 1,
                        duration: .5,
                        x: 0,
                        display: "flex",
                        ease: "power.inOut"
                    })
                },
                preloaderMenu: function() {
                    gsap.timeline().set(".lamborghini__navigation_head", {
                        y: -50
                    }),
                    gsap.timeline().set(".lamborghini__settings-bar", {
                        y: 80
                    }),
                    gsap.timeline().set(".lamborghini-logo", {
                        y: 100
                    }),
                    gsap.timeline().to(".lamborghini__navigation_head", {
                        delay: 1,
                        y: 0
                    }),
                    gsap.timeline().to(".lamborghini__settings-bar", {
                        delay: 1,
                        y: 0
                    }),
                    gsap.timeline().to(".lamborghini-logo", {
                        delay: 1.2,
                        y: 0
                    })
                },
                customCursor: function() {
                    document.body.style.cursor = "none";
                    var e = 0
                      , a = 0
                      , n = 0
                      , i = 0;
                    TweenMax.to({}, .01, {
                        repeat: -1,
                        onRepeat: function() {
                            e += (n - e) / 6,
                            a += (i - a) / 6,
                            TweenMax.set(t.follower, {
                                css: {
                                    left: e - 15,
                                    top: a - 15
                                }
                            }),
                            TweenMax.set(t.cursor, {
                                css: {
                                    left: n,
                                    top: i
                                }
                            })
                        }
                    }),
                    document.addEventListener("mousemove", (function(t) {
                        n = t.clientX,
                        i = t.clientY
                    }
                    ))
                },
                customCursorInit: function(e) {
                    const a = document.querySelectorAll(e);
                    a.forEach((e=>e.addEventListener("mouseenter", (function() {
                        t.cursor.classList.add("active"),
                        t.follower.classList.add("active")
                    }
                    )))),
                    a.forEach((e=>e.addEventListener("mouseleave", (function() {
                        t.cursor.classList.remove("active"),
                        t.follower.classList.remove("active")
                    }
                    )))),
                    a.forEach((e=>e.addEventListener("click", (function() {
                        t.follower.classList.add("clicked"),
                        setTimeout((function() {
                            t.follower.classList.remove("clicked")
                        }
                        ), 500)
                    }
                    ))))
                },
                movingArrow: function(t) {
                    let e = t
                      , a = e.querySelector(".lamborghini__arrow-right span");
                    gsap.set(e, {
                        autoAlpha: 0,
                        x: -50
                    }),
                    gsap.to(e, {
                        autoAlpha: 1,
                        x: 0
                    }, 2),
                    gsap.fromTo(a, {
                        x: -5,
                        repeat: -1,
                        duration: 1
                    }, {
                        x: 0,
                        repeat: -1,
                        duration: 1,
                        ease: "Circ.easeOut"
                    });
                    gsap.timeline({
                        scrollTrigger: {
                            start: "top top"
                        }
                    })
                },
                init: function() {
                    t.detectDevice(),
                    t.mainNavigation(),
                    t.clickNavLink(),
                    t.subMenuNavLink(),
                    t.subMenuNavLinkClose(),
                    t.customCursor(),
                    t.customCursorInit(".link, .lamborghini__subitem a, a"),
                    t.hasValidMobileWidth
                }
            };
            window.onload = function() {
                t.init()
            }
        }
        ,
        147: ()=>{
            window.addEventListener("DOMContentLoaded", (function(t) {
                tl_nav_effect = gsap.timeline(),
                tl_nav_effect.set(".lamborghini__navigation_head", {
                    y: -200
                }).set(".lamborghini__settings-bar", {
                    y: 200
                }),
                tl_nav_effect.to(".lamborghini__navigation_head", {
                    duration: .5,
                    y: 0
                }, 1).to(".lamborghini__settings-bar", {
                    duration: .5,
                    y: 0
                }, 1)
            }
            ))
        }
        ,
        747: ()=>{
            const t = (()=>{
                const t = navigator.userAgent;
                return /android/i.test(t) ? "android" : /iPad|iPhone|iPod/.test(t) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 ? "ios" : "other"
            }
            )();
            gsap.timeline();
            "android" == t && document.querySelectorAll(".lamborghini__panel-video__360").forEach((t=>{
                mobileVideo360 = t.querySelector(".lamborghini__video-scroll.lamborghini__mobile"),
                mobileVideo360.classList.remove("lamborghini__video-scroll"),
                mobileVideo360.setAttribute("autoplay", "true"),
                mobileVideo360.setAttribute("loop", "true");
                let e = mobileVideo360.getAttribute("andloop");
                mobileVideo360.loop = "false" === e
            }
            ));
            const e = document.querySelectorAll(".lamborghini__layout");
            let a = window.innerWidth
              , n = window.innerHeight;
            const i = document.querySelectorAll(".lamborghini__miau");
            i.length > 0 && i.forEach((t=>{
                const e = t.querySelector(".lamborghini__miau-card-wrapper-outter").getBoundingClientRect().width
                  , n = t.querySelectorAll(".lamborghini__miau-card-wrapper-outter").length
                  , i = t.querySelector(".lamborghini__miau-cards");
                t.style.width = (100 + e) * n + "px",
                i.style.width = (100 + e) * n + "px",
                i.offsetWidth > .9 * a ? g("(max-width: 768px)", (function(e) {
                    e ? (t.style.marginLeft = "50px",
                    t.style.marginRight = "50px") : (t.style.marginLeft = "250px",
                    t.style.marginRight = "250px")
                }
                )) : (t.style.marginLeft = (1.35 * a - i.offsetWidth) / 2 + "px",
                t.style.marginRight = (1.35 * a - i.offsetWidth) / 2 + "px")
            }
            ));
            document.getElementById("lamborghini__audio"),
            document.querySelector(".lamborghini__sound");
            let o, s, l, r = document.querySelector(".lamborghini__scroll"), u = document.querySelector("#Path-2"), c = document.querySelector("#Path-2-Copy"), d = document.querySelector("#Path-2-Copy-2"), _ = gsap.timeline({
                repeat: -1,
                paused: !0
            }).set(d, {
                y: -15
            }).fromTo(d, {
                opacity: 0
            }, {
                opacity: 1,
                duration: .6,
                delay: .5
            }).to(d, {
                y: 0,
                duration: 1
            }, "<+0.1").to(u, {
                opacity: 1,
                duration: .6
            }, "<+0.1").to(c, {
                opacity: 1,
                duration: .6
            }, "<+0.1").to(u, {
                opacity: 0,
                y: 5,
                duration: .6,
                ease: "power3.out"
            }).to(c, {
                opacity: 0,
                y: 5,
                duration: .6,
                ease: "power3.out"
            }, "<+0.1").to(d, {
                opacity: 0,
                duration: .6
            }, "<+0.1");
            function g(t, e) {
                var a = window.matchMedia(t);
                a.addListener((function(t) {
                    return e(t.matches)
                }
                )),
                e(a.matches)
            }
            if (gsap.set(r, {
                autoAlpha: 0,
                y: -50
            }),
            gsap.to(r, {
                autoAlpha: 1,
                y: 0,
                onComplete: ()=>_.restart()
            }, 2),
            gsap.set(d, {
                y: -15
            }),
            gsap.set(u, {
                opacity: 0
            }),
            gsap.set(c, {
                opacity: 0
            }),
            gsap.timeline({
                scrollTrigger: {
                    start: "1px top",
                    trigger: "body"
                }
            }).to(r, {
                autoAlpha: 0
            }),
            !e[0].classList.contains("lamborghini__unintro")) {
                const t = e[0].querySelector(".lamborghini__component");
                t.classList.contains("lamborghini__iv-section") && (o = t),
                t.classList.contains("lamborghini__panel-video") && (s = t)
            }
            if (e[0].classList.contains("lamborghini__unintro")) {
                const t = e[0].querySelector(".lamborghini__component");
                t.classList.contains("lamborghini__unintro-left") && (l = t)
            }
            function p(t, e, a, n) {
                var i = function(n) {
                    t.removeEventListener(e, i),
                    a.apply(this, arguments)
                };
                return t.addEventListener(e, i, n),
                i
            }
            e.forEach((e=>{
                if (!e.classList.contains("lamborghini__unintro")) {
                    const n = e.querySelectorAll("section");
                    n.forEach(((e,i)=>{
                        if (e.classList.contains("lamborghini__panel-video")) {
                            let o;
                            const l = e.querySelector(".lamborghini__video-scroll.lamborghini__desktop")
                              , r = e.querySelector(".lamborghini__video-scroll.lamborghini__mobile");
                            o = l && a > 768 ? l : r && a < 769 ? r : e.querySelector(".lamborghini__video-scroll");
                            let u = "+=400%";
                            p(document.documentElement, "touchstart", (function(t) {
                                o.play(),
                                o.pause()
                            }
                            ));
                            let c = gsap.timeline();
                            ScrollTrigger.create({
                                trigger: e,
                                start: "top top",
                                end: u,
                                pin: !0,
                                pinSpacing: !1,
                                toggleClass: "lamborghini__active-section",
                                animation: c,
                                scrub: !0,
                                id: `section_${i}`,
                                onEnter: ()=>{
                                    "android" == t && document.querySelectorAll(".lamborghini__panel-video__360").forEach((t=>{
                                        mobileVideo360 = t.querySelector(".lamborghini__mobile"),
                                        mobileVideo360.play()
                                    }
                                    ))
                                }
                            }),
                            0 == i && s == e ? c.fromTo(e, {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 1,
                                delay: 0,
                                duration: 1,
                                ease: "none"
                            }, 0) : c.fromTo(e, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                duration: 1,
                                ease: "none"
                            }, 0),
                            i <= n.length - 1 && c.fromTo(e, {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                duration: 1,
                                ease: "none"
                            }, u);
                            let d = gsap.timeline();
                            if (ScrollTrigger.create({
                                trigger: e,
                                start: "top 1%",
                                end: u,
                                scrub: !0,
                                animation: d
                            }),
                            o.readyState > 0) {
                                let t = e.querySelector(".lamborghini__panel-video-text-wrapper");
                                if (document.querySelectorAll(".lamborghini__panel-video-inner").forEach((t=>{
                                    t.style.display = "flex",
                                    t.style.flexDirection = "column"
                                }
                                )),
                                t.children.length > 0)
                                    for (let e = 1; e <= t.children.length; e++) {
                                        let a = t.querySelector(".lamborghini__panel-video-text:nth-child(" + e + ")");
                                        d.from(a, {
                                            y: 50,
                                            autoAlpha: 0,
                                            duration: 1
                                        }, "<+=50%").to(a, {
                                            y: 50,
                                            autoAlpha: 0,
                                            delay: 1,
                                            duration: 1,
                                            ease: "none"
                                        }, "<+=" + o.duration / t.children.length * 95 + "%")
                                    }
                                u = "+=" + 100 * o.duration + "%",
                                d.fromTo(o, {
                                    currentTime: 0
                                }, {
                                    currentTime: o.duration,
                                    ease: "none",
                                    duration: ()=>o.duration + 1
                                }, 1)
                            } else
                                p(o, "loadedmetadata", (()=>{
                                    let t = e.querySelector(".lamborghini__panel-video-text-wrapper");
                                    if (document.querySelectorAll(".lamborghini__panel-video-inner").forEach((t=>{
                                        t.style.display = "flex",
                                        t.style.flexDirection = "column"
                                    }
                                    )),
                                    t.children.length > 0)
                                        for (let e = 1; e <= t.children.length; e++) {
                                            let a = t.querySelector(".lamborghini__panel-video-text:nth-child(" + e + ")");
                                            d.from(a, {
                                                y: 50,
                                                autoAlpha: 0,
                                                duration: 1
                                            }, "<+=50%").to(a, {
                                                y: 50,
                                                autoAlpha: 0,
                                                delay: 1,
                                                duration: 1,
                                                ease: "none"
                                            }, "<+=" + o.duration / t.children.length * 95 + "%")
                                        }
                                    u = "+=" + 100 * o.duration + "%",
                                    d.fromTo(o, {
                                        currentTime: 0
                                    }, {
                                        currentTime: o.duration,
                                        ease: "none",
                                        duration: ()=>o.duration + 1
                                    }, 1)
                                }
                                ))
                        } else {
                            let t, a;
                            g("(max-width: 768px)", (function(e) {
                                t = e ? `+=${window.innerHeight}` : "+=100%"
                            }
                            ));
                            const n = gsap.timeline({
                                scrollTrigger: {
                                    trigger: e,
                                    pin: !0,
                                    id: `section_${i}`,
                                    scrub: !0,
                                    start: "top top",
                                    onEnterBack: ()=>{
                                        e.querySelectorAll(".lamborghini__panel-video").forEach((t=>{
                                            t.play()
                                        }
                                        ))
                                    }
                                    ,
                                    onEnter: ()=>{
                                        e.querySelectorAll(".lamborghini__panel-video").forEach((t=>{
                                            t.play()
                                        }
                                        ))
                                    }
                                    ,
                                    onUpdate: t=>{
                                        a = t.direction
                                    }
                                    ,
                                    end: t,
                                    pinSpacing: !1
                                }
                            })
                              , s = e.querySelector(".lamborghini__iv-section-description-wrapper");
                            0 == i && o == e ? (gsap.fromTo(s, {
                                autoAlpha: 0,
                                y: 50
                            }, {
                                autoAlpha: 1,
                                y: 0,
                                delay: 1,
                                duration: 1,
                                ease: "ease"
                            }),
                            n.fromTo(e, {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                duration: 1,
                                ease: "power1.in"
                            }, 4),
                            n.fromTo(s, {
                                autoAlpha: 1,
                                y: 0
                            }, {
                                autoAlpha: 0,
                                y: 50,
                                duration: 1.5,
                                ease: "none"
                            }, 1.5)) : (n.fromTo(e, {
                                autoAlpha: 0
                            }, {
                                autoAlpha: 1,
                                duration: 1,
                                ease: "none"
                            }, 0),
                            n.add((function() {
                                1 == a && e.classList.add("lamborghini__active-section"),
                                -1 == a && e.classList.remove("lamborghini__active-section")
                            }
                            )),
                            n.fromTo(e, {
                                autoAlpha: 1
                            }, {
                                autoAlpha: 0,
                                duration: 1,
                                ease: "none"
                            }, 8),
                            n.fromTo(s, {
                                autoAlpha: 0,
                                y: 50
                            }, {
                                autoAlpha: 1,
                                y: 0,
                                duration: 1,
                                ease: "none"
                            }, 2),
                            n.to(s, {
                                autoAlpha: 0,
                                y: 50,
                                duration: 1,
                                ease: "none"
                            }, 7))
                        }
                    }
                    ))
                }
            }
            )),
            e.length && e.forEach(((t,e)=>{
                if (t.classList.contains("lamborghini__unintro") && e > 0) {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: t,
                            start: "top top",
                            scrub: !0
                        }
                    }).from(t, {
                        autoAlpha: 0,
                        duration: .03
                    }).to(t, {
                        autoAlpha: 1,
                        duration: 1
                    })
                }
            }
            ));
            const m = document.querySelectorAll(".lamborghini__unintro")
              , f = document.querySelector("footer");
            m.forEach(((t,e)=>{
                let a;
                const n = t.querySelectorAll(".lamborghini__unintro-component")
                  , i = t.querySelector(".lamborghini__unintro-iv-component");
                if (i) {
                    let t = i.querySelectorAll("section").length;
                    i.style.minWidth = 60 * t + "vw"
                }
                let o = 0;
                function s() {
                    o = 0,
                    n.forEach(((t,e)=>{
                        o += t.offsetWidth,
                        o += gsap.getProperty(t, "marginLeft"),
                        o += gsap.getProperty(t, "marginRight"),
                        o += gsap.getProperty(t, "paddingLeft"),
                        o += gsap.getProperty(t, "paddingRight")
                    }
                    ))
                }
                let l;
                s(),
                ScrollTrigger.addEventListener("refreshInit", s),
                t.style.height = "100vh",
                a = gsap.timeline({
                    scrollTrigger: {
                        trigger: t,
                        pin: !0,
                        scrub: !0,
                        start: "top top",
                        id: `unintroTimeline${e}`,
                        invalidateOnRefresh: !0,
                        toggleClass: "lamborghini__active-section",
                        end: ()=>i ? "+=" + (o + window.innerWidth) : (f.classList.contains("footer-horizontal"),
                        "+=" + o)
                    }
                });
                let r, u = [];
                n.forEach(((t,a)=>{
                    t.classList.contains("lamborghini__unintro-iv-component") && (l = a,
                    r = t),
                    e > l && u.push(t)
                }
                )),
                f.classList.contains("footer-horizontal") ? a.to(n, {
                    x: ()=>o > window.innerWidth ? "" + (window.innerWidth - o) : "0",
                    ease: "none"
                }, 0) : a.to(n, {
                    x: ()=>o > window.innerWidth ? "" + (window.innerWidth - o) : "0",
                    ease: "none"
                }, .05),
                n.forEach(((t,a)=>{
                    let n = gsap.getProperty(t, "paddingRight") + gsap.getProperty(t, "paddingLeft") + gsap.getProperty(t, "marginRight") + gsap.getProperty(t, "marginRight");
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: t,
                            start: ()=>"top top-=" + (t.offsetLeft + (t.offsetWidth + n)) * (o / (o - window.innerWidth)),
                            id: `${e}horizontalPanel${a}`
                        }
                    })
                }
                ));
                const c = t.querySelectorAll(".lamborghini__unintro-component");
                c.forEach(((e,n)=>{
                    let i = c.length - 1
                      , o = gsap.timeline({
                        scrollTrigger: {
                            trigger: e,
                            start: ()=>0 == n ? "left left" : n == i ? window.innerWidth > 1600 ? "right 95%" : window.innerWidth > 1400 ? "right 100%" : window.innerWidth > 768 ? "right 80%" : window.innerWidth > 640 ? "right 90%" : "right 95%" : "left 80%",
                            containerAnimation: a,
                            scrub: !0,
                            invalidateOnRefresh: !0,
                            end: ()=>n == i ? "right 90%" : "right 20%"
                        }
                    });
                    if (e.classList.contains("lamborghini__unintro-left")) {
                        let t = e.querySelector(".lamborghini__intro-text")
                          , a = e.querySelector(".lamborghini__panel-asset");
                        0 == n ? document.getElementsByClassName("lamborghini__vertical-scroll").length > 0 ? (o.set(a, {
                            autoAlpha: 1
                        }),
                        gsap.fromTo(t, {
                            y: 50,
                            autoAlpha: 0
                        }, {
                            y: 0,
                            autoAlpha: 1,
                            duration: 2,
                            ease: "none"
                        }, 2),
                        o.fromTo(t, {
                            autoAlpha: 1,
                            y: 0
                        }, {
                            y: 50,
                            autoAlpha: 0,
                            duration: 1,
                            ease: "none"
                        }, 2.6),
                        o.fromTo(a, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            duration: 1,
                            ease: "none"
                        }, 5)) : (o.set(a, {
                            autoAlpha: 1
                        }),
                        gsap.fromTo(t, {
                            y: 50,
                            autoAlpha: 0
                        }, {
                            y: 0,
                            autoAlpha: 1,
                            duration: 2,
                            ease: "none"
                        }),
                        o.fromTo(t, {
                            autoAlpha: 1,
                            y: 0
                        }, {
                            y: 50,
                            autoAlpha: 0,
                            duration: .5,
                            ease: "none"
                        }, .5),
                        o.fromTo(a, {
                            autoAlpha: 1
                        }, {
                            autoAlpha: 0,
                            duration: 1,
                            ease: "none"
                        }, 5)) : (o.set(t, {
                            y: 50,
                            autoAlpha: 0
                        }),
                        o.to(a, {
                            autoAlpha: 1,
                            duration: 1,
                            ease: "none"
                        }, 0),
                        o.fromTo(t, {
                            y: 50,
                            autoAlpha: 0
                        }, {
                            y: 0,
                            autoAlpha: 1,
                            duration: 1,
                            ease: "none"
                        }, 1.2),
                        o.fromTo(t, {
                            y: 0,
                            autoAlpha: 1
                        }, {
                            y: 50,
                            autoAlpha: 0,
                            duration: 1,
                            ease: "none"
                        }, 4),
                        o.to(a, {
                            autoAlpha: 0,
                            duration: 1,
                            ease: "none"
                        }, 5))
                    }
                    n == i && o.to(t, {
                        autoAlpha: 0,
                        duration: 1,
                        ease: "none"
                    })
                }
                ))
            }
            ));
            const v = document.querySelector(".footer-scroll_wrap")
              , b = (document.querySelector(".footer-wrapper"),
            document.querySelector(".footer-scroll_wrap"));
            let h = !0;
            if (e[e.length - 1].classList.contains("lamborghini__unintro") && f.classList.contains("footer-horizontal") && (b && (window.innerWidth <= 768 ? b.style.top = "-100vh" : b.style.top = "-200vh"),
            h = !1),
            f.classList.contains("footer-horizontal")) {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: f,
                        scrub: !0,
                        pin: !0,
                        start: ()=>{
                            let t = "top top";
                            return e[e.length - 1].classList.contains("lamborghini__unintro") && (t = window.innerWidth <= 768 ? ScrollTrigger.getById("unintroTimeline" + (m.length - 1)).end : ScrollTrigger.getById("unintroTimeline" + (m.length - 1)).end - n),
                            t
                        }
                        ,
                        end: ()=>{
                            let t = "+=100%";
                            return e[e.length - 1].classList.contains("lamborghini__unintro") && (t = window.innerWidth <= 768 ? "+=100%" : "+=200%"),
                            t
                        }
                        ,
                        pinSpacing: h
                    }
                }).fromTo(v, {
                    xPercent: 100
                }, {
                    xPercent: 0,
                    duration: 1,
                    ease: "none"
                })
            } else {
                const t = gsap.timeline({
                    scrollTrigger: {
                        trigger: f,
                        scrub: !0,
                        start: ()=>{
                            let t = "top top";
                            return e[e.length - 1].classList.contains("lamborghini__unintro") && (t = ScrollTrigger.getById("unintroTimeline" + (m.length - 1)).end),
                            t
                        }
                        ,
                        end: "+=" + window.innerHeight
                    }
                });
                t.fromTo(v, {
                    autoAlpha: 0
                }, {
                    autoAlpha: 1,
                    duration: .1,
                    ease: "none"
                }),
                t.to(v, {
                    autoAlpha: 1,
                    duration: 1,
                    ease: "none"
                })
            }
            ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                onUpdate: function() {
                    document.querySelectorAll(".pin-spacer").forEach((t=>{
                        const e = t.querySelector(".lamborghini__active-section");
                        t.style.pointerEvents = e ? "auto" : "none"
                    }
                    ))
                }
            }),
            e[e.length - 1].classList.contains("lamborghini__unintro") || (document.querySelector("footer").style.height = "150vh")
        }
        ,
        352: ()=>{
            let t = document.querySelectorAll(".lamborghini__panel-engine-video");
            t && t.forEach(((t,e)=>{
                let a = t.querySelector(".lamborghini__panel-engine-video-text-wrapper")
                  , n = gsap.timeline();
                ScrollTrigger.create({
                    trigger: t,
                    start: "top top",
                    end: "+=400%",
                    pin: !0,
                    pinSpacing: !1,
                    toggleClass: "lamborghini__active-section",
                    animation: n,
                    scrub: !0,
                    id: `sectionEngine_${e}`
                });
                let i = document.querySelectorAll(".lamborghini__layout");
                if (i.length > 1 && (i[0].querySelector(".lamborghini__component").classList.contains("lamborghini__panel-engine-video") && 0 == e ? n.from(t, {
                    autoAlpha: 1,
                    duration: 1,
                    ease: "none"
                }, 0) : n.from(t, {
                    autoAlpha: 0,
                    duration: 1,
                    ease: "none"
                }, 0)),
                a.children.length > 0)
                    for (let e = 1; e <= a.children.length; e++) {
                        let a = t.querySelector(".lamborghini__panel-engine-video-text:nth-child(" + e + ")");
                        1 === e ? n.from(a, {
                            y: 50,
                            autoAlpha: 0,
                            duration: 1
                        }, 0).to(a, {
                            y: 50,
                            autoAlpha: 0,
                            delay: 1,
                            duration: 1,
                            ease: "none"
                        }) : n.from(a, {
                            y: 50,
                            autoAlpha: 0,
                            duration: 1
                        }, ">+=0.5").to(a, {
                            y: 50,
                            autoAlpha: 0,
                            delay: 1,
                            duration: 1,
                            ease: "none"
                        })
                    }
                n.to(t, {
                    autoAlpha: 0,
                    duration: 1,
                    ease: "none"
                }, ">-1")
            }
            ))
        }
        ,
        129: ()=>{
            const t = document.documentElement.lang;
            let e, a;
            const n = document.querySelector(".lamborghini__fuel_fc-text")
              , i = document.querySelector(".lamborghini__fuel_em-text")
              , o = document.querySelector(".lamborghini__fuel_info-small-wrapper");
            let s, l, r, u, c, d;
            null != o && (s = o.querySelector(".lamborghini__fuel_info-model"),
            l = o.querySelector(".lamborghini__fuel_info-consumption-data"),
            r = o.querySelector(".lamborghini__fuel_info-emissions-data"),
            u = o.querySelector(".lamborghini__fuel_info-level"),
            c = o.querySelector(".lamborghini__fuel_info-consumption .lamborghini__fuel_info-label"),
            d = o.querySelector(".lamborghini__fuel_info-emissions .lamborghini__fuel_info-label"));
            const _ = document.querySelector(".lamborghini__fuel_info-big-wrapper")
              , g = (document.querySelector(".showLevel.showLevelMulti .lamborghini__fuel_info-big-wrapper"),
            document.querySelector(".lamborghini__fuel_info-arrow-open"))
              , p = document.querySelector(".lamborghini__fuel_info-arrow-close");
            let m, f, v, b, h = "", y = 1e5, w = 0, A = 1e5, S = 0, L = "", k = "";
            if (mockData.length >= 1 && (L = (new DOMParser).parseFromString(mockData[0].model, "text/html").documentElement.textContent,
            b = isNaN(mockData[0].consumption) ? "" : "&nbsp;1/100 km",
            k = isNaN(mockData[0].emissions) ? "" : "&nbsp;g/km"),
            n && (e = document.querySelector(".lamborghini__fuel_fc-text").innerHTML),
            i && (a = document.querySelector(".lamborghini__fuel_em-text").innerHTML),
            mockData.length >= 1) {
                if (mockData.length > 1)
                    for (let t = 0; t < mockData.length; t++) {
                        let e = Number(mockData[t].emissions);
                        mockData[t].emissions < y && (y = e),
                        mockData[t].emissions > w && (w = e);
                        let a = Number(mockData[t].consumption);
                        mockData[t].consumption < A && (A = a),
                        mockData[t].consumption > S && (S = a)
                    }
                mockData.length || document.querySelector(".lamborghini__fuel_info").classList.add("dp_none"),
                g && g.addEventListener("click", (()=>{
                    g.classList.add("dp_none"),
                    p.classList.remove("dp_none"),
                    o.style.display = "none",
                    _.style.display = "flex"
                }
                )),
                p && p.addEventListener("click", (()=>{
                    g.classList.remove("dp_none"),
                    p.classList.add("dp_none"),
                    o.style.display = "flex",
                    _.style.display = "none"
                }
                )),
                function() {
                    for (let n = 0; n < mockData.length; n++) {
                        if (1 === mockData.length) {
                            let n = (new DOMParser).parseFromString(mockData[0].model, "text/html").documentElement.textContent;
                            if (s.innerText = n,
                            p.classList.add("dp_none"),
                            mockData[0].emissions > 0 && (h = "A",
                            f = 1,
                            m = "#38b045"),
                            mockData[0].emissions > 100 && (h = "B",
                            f = 2,
                            m = "#3dc330"),
                            mockData[0].emissions > 200 && (h = "C",
                            f = 3,
                            m = "#abe030"),
                            mockData[0].emissions > 300 && (h = "D",
                            f = 4,
                            m = "#f6fa3a"),
                            mockData[0].emissions > 400 && (h = "E",
                            f = 5,
                            m = "#f2bc2e"),
                            mockData[0].emissions > 500 && (h = "F",
                            f = 6,
                            m = "#ee6620"),
                            mockData[0].emissions > 600 && (h = "G",
                            f = 7,
                            m = "#ed371b"),
                            window.innerWidth > 768) {
                                l && (l.innerHTML = mockData[0].consumption),
                                isNaN(mockData[0].consumption) || l.insertAdjacentText("afterend", " 1/100 km"),
                                r.innerHTML = mockData[0].emissions,
                                isNaN(mockData[0].emissions) || r.insertAdjacentText("afterend", " g/km"),
                                null != u && u.classList.add("dp_none"),
                                g.classList.add("dp_none"),
                                c.classList.remove("dp_none"),
                                d.classList.remove("dp_none"),
                                s.classList.remove("dp_none"),
                                null != u && null != u && (u.classList.remove("dp_none"),
                                "fr" === t && (null != m && (u.style.background = `${m}`,
                                u.style.setProperty("--levelBgColor", m)),
                                null != h && (u.innerText = h))),
                                g.classList.remove("dp_none"),
                                c.classList.add("dp_none"),
                                d.classList.add("dp_none");
                                const n = document.createElement("div");
                                let i, o;
                                n.classList.add("lamborghini__fuel_info-big-item"),
                                n.innerHTML = `\n              <div class="lamborghini__fuel_info-model">${L}</div>\n              <div class="lamborghini__fuel_info-icon lamborghini__fuel_info-consumption">\n                <img src="/media/cjjnkhfn/fc.svg" alt="">\n                <span class="lamborghini__fuel_info-label">${e}</span>\n                <span class="lamborghini__fuel_info-consumption-data">${mockData[0].consumption}</span>${b}\n              </div>\n              <div class="lamborghini__fuel_info-icon lamborghini__fuel_info-emissions">\n                <img src="/media/iyrjzrpl/c02.svg" alt="">\n                <span class="lamborghini__fuel_info-label">${a}</span>\n                <span class="lamborghini__fuel_info-emissions-data">${mockData[0].emissions}</span>${k}\n              </div>\n            `,
                                "fr" !== t || isNaN(mockData[0].emissions) || (document.querySelector(".lamborghini__fuel_info-wrap").classList.add("showLevel"),
                                n.innerHTML += '\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span></div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              '),
                                _.appendChild(n),
                                f && (i = document.querySelector(`.lamborghini__fuel_info-level-item:nth-child(${f}) span`),
                                o = document.querySelector(`.lamborghini__fuel_info-level-item:nth-child(${f})`),
                                i && (document.querySelector(`.lamborghini__fuel_info-level-item:nth-child(${f}) span`).innerHTML = mockData[0].emissions + "<span>gCO<sub>2</sub>/km</span>",
                                document.querySelector(`.lamborghini__fuel_info-level-item:nth-child(${f})`).classList.add("active")))
                            } else {
                                document.querySelector(".lamborghini__fuel_info-wrap") && document.querySelector(".lamborghini__fuel_info-wrap").classList.add("showLevel"),
                                g.classList.remove("dp_none"),
                                l.innerText = mockData[0].consumption,
                                isNaN(mockData[0].consumption) || l.insertAdjacentText("afterend", " 1/100 km"),
                                r.innerText = mockData[0].emissions,
                                isNaN(mockData[0].emissions) || r.insertAdjacentText("afterend", " g/km"),
                                null != u && u.classList.add("dp_none"),
                                c.classList.add("dp_none"),
                                d.classList.add("dp_none"),
                                s.classList.add("dp_none"),
                                "fr" === t && null != u && (u.classList.remove("dp_none"),
                                u.style.background = `${m}`,
                                u.style.setProperty("--levelBgColor", m),
                                u.innerText = h);
                                const n = document.createElement("div");
                                let i, o;
                                n.classList.add("lamborghini__fuel_info-big-item"),
                                n.innerHTML = `\n            <div class="lamborghini__fuel_info-model">${L}</div>\n            <div class="lamborghini__fuel_info-icon lamborghini__fuel_info-consumption">\n              <img src="/media/cjjnkhfn/fc.svg" alt="">\n              <span class="lamborghini__fuel_info-label">${e}</span>\n              <span class="lamborghini__fuel_info-consumption-data">${mockData[0].consumption}</span>${b}\n            </div>\n            <div class="lamborghini__fuel_info-icon lamborghini__fuel_info-emissions">\n              <img src="/media/iyrjzrpl/c02.svg" alt="">\n              <span class="lamborghini__fuel_info-label">${a}</span>\n              <span class="lamborghini__fuel_info-emissions-data">${mockData[0].emissions}</span>${k}\n            </div>\n          `,
                                "fr" === t && (n.innerHTML += '\n              <div class="lamborghini__fuel_info-big-level">\n                <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                <div class="lamborghini__fuel_info-level-item">E <span></span></div>\n                <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n              </div>\n            '),
                                _.appendChild(n),
                                f && (i = document.querySelector(`.lamborghini__fuel_info-level-item:nth-child(${f}) span`),
                                o = document.querySelector(`.lamborghini__fuel_info-level-item:nth-child(${f})`)),
                                i && (i.innerHTML = mockData[0].emissions + "<span>gCO<sub>2</sub>/km</span>",
                                o.classList.add("active"))
                            }
                        }
                        if (mockData.length > 1) {
                            s && (s.innerText = mockData[n].model,
                            p && p.classList.add("dp_none")),
                            Number(mockData[n].emissions) > 100 && (v = 1),
                            Number(mockData[n].emissions) > 150 && (v = 2),
                            Number(mockData[n].emissions) > 200 && (v = 3),
                            Number(mockData[n].emissions) > 250 && (v = 4),
                            Number(mockData[n].emissions) > 300 && (v = 5),
                            Number(mockData[n].emissions) > 350 && (v = 6),
                            Number(mockData[n].emissions) > 400 && (v = 7),
                            Number(w) > 0 && (h = "A",
                            f = 1,
                            m = "#38b045"),
                            Number(w) > 150 && (h = "B",
                            f = 2,
                            m = "#3dc330"),
                            Number(w) > 200 && (h = "C",
                            f = 3,
                            m = "#abe030"),
                            Number(w) > 250 && (h = "D",
                            f = 4,
                            m = "#f6fa3a"),
                            Number(w) > 300 && (h = "E",
                            f = 5,
                            m = "#f2bc2e"),
                            Number(w) > 350 && (h = "F",
                            f = 6,
                            m = "#ee6620"),
                            Number(w) > 400 && (h = "G",
                            f = 7,
                            m = "#ed371b"),
                            s && (s.classList.add("dp_none"),
                            null != l && (l.innerText = `${A} - ${S}`,
                            isNaN(A) || isNaN(S) || l.append("  1/100 km"))),
                            r && (r.innerText = `${y} - ${w}`,
                            isNaN(y) || isNaN(w) || r.append(" g/km")),
                            c && c.classList.add("dp_none"),
                            d && d.classList.add("dp_none"),
                            null != u && u.classList.add("dp_none"),
                            "fr" === t && (null != u && (u.classList.remove("dp_none"),
                            u.style.background = `${m}`,
                            u.style.setProperty("--levelBgColor", m),
                            u.innerText = h),
                            g.classList.remove("dp_none"),
                            c.classList.add("dp_none"),
                            d.classList.add("dp_none"));
                            let i = (new DOMParser).parseFromString(mockData[n].model, "text/html").documentElement.textContent
                              , o = isNaN(mockData[n].consumption) ? "" : "&nbsp;1/100 km"
                              , b = isNaN(mockData[n].emissions) ? "" : "&nbsp;g/km";
                            const L = document.createElement("div");
                            L.classList.add("lamborghini__fuel_info-big-item"),
                            L.innerHTML = `\n            <div class="lamborghini__fuel_info-model">${i}</div>\n            <div class="lamborghini__fuel_info-icon lamborghini__fuel_info-consumption">\n              <img src="/media/cjjnkhfn/fc.svg" alt="">\n              <span class="lamborghini__fuel_info-label">${e}</span>\n              <span class="lamborghini__fuel_info-consumption-data">${mockData[n].consumption}</span>${o}\n            <div class="lamborghini__fuel_info-icon lamborghini__fuel_info-emissions">\n              <img src="/media/iyrjzrpl/c02.svg" alt="">\n              <span class="lamborghini__fuel_info-label">${a}</span>\n              <span class="lamborghini__fuel_info-emissions-data">${mockData[n].emissions}</span>${b}\n            </div>\n          `,
                            document.querySelector(".lamborghini__fuel_info-wrap") && (document.querySelector(".lamborghini__fuel_info-wrap").classList.add("showLevel"),
                            document.querySelector(".lamborghini__fuel_info-wrap").classList.add("showLevelMulti")),
                            1 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item active">A <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              `),
                            2 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item active">B <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              `),
                            3 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item active">C <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              `),
                            4 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item active">D <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              `),
                            5 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item active">E <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              `),
                            6 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item active">F <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">G <span></span> </div>\n                </div>\n              `),
                            7 != v || "fr" !== t || isNaN(mockData[n].emissions) || (L.innerHTML += `\n                <div class="lamborghini__fuel_info-big-level">\n                  <div class="lamborghini__fuel_info-level-item">A <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">B <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">C <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">D <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">E <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item">F <span></span> </div>\n                  <div class="lamborghini__fuel_info-level-item active">G <span>${mockData[n].emissions}<span>gCO<sub>2</sub>/km</span></span> </div>\n                </div>\n              `),
                            _ && _.appendChild(L)
                        }
                    }
                }()
            }
        }
        ,
        789: ()=>{
            const t = document.querySelectorAll(".lamborghini__comp-button-modal")
              , e = document.querySelector(".lamborghini__iv_popup");
            let a = !1
              , n = gsap.timeline({
                paused: !0
            });
            function i(t) {
                t.preventDefault();
                const i = t.target
                  , o = document.createElement("div");
                o.classList.add("lamborghini__textmodal-overlay"),
                e.appendChild(o);
                const s = document.createElement("div");
                s.classList.add("lamborghini__textmodal-wrap"),
                o.appendChild(s);
                const l = document.createElement("div");
                l.classList.add("lamborghini__textmodal-wrap-mobile"),
                s.appendChild(l);
                const r = document.createElement("div");
                r.classList.add("lamborghini__textmodal-close-btn"),
                s.appendChild(r);
                const u = document.createElement("div");
                u.classList.add("lamborghini__textmodal-close-btn-rel"),
                r.appendChild(u);
                const c = document.createElement("span");
                u.appendChild(c);
                const d = document.createElement("span");
                u.appendChild(d);
                const _ = document.createElement("div");
                _.classList.add("lamborghini__textmodal-imageBlock"),
                l.appendChild(_);
                const g = document.createElement("img")
                  , p = i.dataset.modalimage;
                g.setAttribute("src", p),
                g.classList.add("lamborghini__textmodal-image"),
                _.appendChild(g);
                const m = document.createElement("div");
                m.classList.add("lamborghini__textmodal-imageBlockTitle");
                const f = i.dataset.modaltitle;
                m.innerText = f,
                _.appendChild(m);
                const v = document.createElement("div");
                v.classList.add("lamborghini__textmodal-imageBlockSubTitle");
                const b = i.dataset.modalsubline;
                v.innerText = b,
                _.appendChild(v);
                const h = document.createElement("div");
                h.classList.add("lamborghini__textmodal-text");
                const y = i.nextSibling.nextSibling.innerText;
                h.innerText = y,
                l.appendChild(h),
                gsap.set(["body", "html"], {
                    overflow: "hidden"
                }),
                gsap.to(e, {
                    autoAlpha: 1,
                    duration: .4
                }),
                gsap.timeline({}).from(g, {
                    opacity: 0,
                    y: 50,
                    duration: 1
                }).from(m, {
                    opacity: 0,
                    y: 50,
                    duration: 1
                }, "0.4").from(v, {
                    opacity: 0,
                    y: 50,
                    duration: 1
                }, "0.6").from(h, {
                    opacity: 0,
                    y: 50,
                    duration: 1
                }, "<0.2").from(r, {
                    opacity: 0,
                    duration: 1,
                    onComplete: ()=>a = !0
                }, "<0.4"),
                n = gsap.timeline({
                    paused: !0
                }),
                n.to(g, {
                    autoAlpha: 0,
                    y: 50,
                    duration: 1
                }),
                n.to(m, {
                    autoAlpha: 0,
                    y: 50,
                    duration: 1
                }, "<0.2"),
                n.to(v, {
                    autoAlpha: 0,
                    y: 50,
                    duration: 1
                }, "<<0.4"),
                n.to(h, {
                    autoAlpha: 0,
                    y: 50,
                    duration: 1
                }, "<0.2"),
                n.to(r, {
                    autoAlpha: 0,
                    duration: 1
                }, "<0.4"),
                n.to(".lamborghini__iv_popup", {
                    autoAlpha: 0,
                    duration: .7
                }),
                n.set(["body", "html"], {
                    overflowY: "auto",
                    onComplete: ()=>{
                        isAnimating = !1,
                        o.remove(),
                        a = !1
                    }
                }),
                document.querySelector(".lamborghini__textmodal-close-btn").addEventListener("click", (()=>{
                    n.restart()
                }
                ))
            }
            t.forEach((t=>{
                t.addEventListener("click", i)
            }
            ))
        }
        ,
        452: ()=>{
            const t = document.querySelector(".lamborghini__section_nav");
            if (t) {
                const n = document.querySelectorAll(".lamborghini__subnav-anchorpoint")
                  , i = document.querySelector(".lamborghini__subnav-items")
                  , o = document.querySelector(".lamborghini__section_nav-inner-wrapper").getBoundingClientRect().width / 2
                  , s = document.querySelector(".lamborghini__section_nav-line-selector")
                  , l = document.querySelector(".lamborghini__section_nav-arrow-prev")
                  , r = document.querySelector(".lamborghini__section_nav-arrow-next");
                let u = 1
                  , c = 1
                  , d = window.innerHeight
                  , _ = window.innerWidth;
                const g = document.createElement("div");
                g.classList.add("lamborghini__section_nav_overlay"),
                t.insertBefore(g, t.firstChild);
                let p = [];
                n.forEach(((t,e)=>{
                    const a = document.createElement("a");
                    if (a.classList.add("lamborghini__subnav-item"),
                    a.setAttribute("href", "#section" + (e + 1)),
                    a.setAttribute("data-navid", e + 1),
                    t.setAttribute("id", "section" + (e + 1)),
                    t.setAttribute("data-id", e + 1),
                    t.getAttribute("data-section")) {
                        let a = t.getAttribute("data-section").replace(/\s+/g, "-");
                        p.push({
                            id: e,
                            section: a
                        })
                    }
                    t.classList.contains("lamborghini__unintro-component") && a.classList.add("unitro_link"),
                    a.innerHTML += e < 9 ? "0" + (e + 1) : e + 1,
                    a.innerHTML += " " + t.dataset.section,
                    window.innerWidth < 768 && (a.style.opacity = "0"),
                    0 === e && (a.classList.add("active"),
                    window.innerWidth < 768 && gsap.to(a, {
                        autoAlpha: 1
                    })),
                    i.appendChild(a)
                }
                ));
                const m = document.querySelectorAll(".lamborghini__subnav-item")
                  , f = m.length;
                for (let A = 1; A < m.length; A++)
                    m[A].style.left = o * A + "px";
                m[1] && (m[1].style.transform = "translate(-50%,0)"),
                m[2] && (m[2].style.transform = "translate(-100%,0)");
                let v = gsap.timeline({
                    paused: !0,
                    defaults: {
                        duration: 1,
                        ease: "none"
                    }
                });
                for (let S = 1; S <= f; S++)
                    f > 3 ? (v.addLabel("label" + S),
                    1 === S && (v.to(".lamborghini__subnav-items", {
                        x: 0 * -o
                    }),
                    v.to(s, {
                        left: "50%",
                        xPercent: -50
                    }, "<")),
                    2 === S && (v.to(".lamborghini__subnav-items", {
                        x: -o * (S - 1)
                    }),
                    v.to(m[S - 1], {
                        xPercent: 0
                    }, "<"),
                    v.to(m[S], {
                        xPercent: 50
                    }, "<"),
                    v.to(m[S + 1], {
                        xPercent: -100
                    }, "<"),
                    v.to(s, {
                        left: "0%",
                        xPercent: 0
                    }, "<"),
                    v.to(s, {
                        left: "50%",
                        xPercent: -50,
                        duration: 1,
                        ease: "power3.inOut"
                    })),
                    3 === S && S != f - 1 && (v.to(".lamborghini__subnav-items", {
                        x: -o * (S - 1)
                    }),
                    v.to(m[S - 1], {
                        xPercent: 100
                    }, "<"),
                    v.to(m[S], {
                        xPercent: -50
                    }, "<"),
                    v.to(m[S + 1], {
                        xPercent: -100
                    }, "<"),
                    v.to(s, {
                        left: "0%",
                        xPercent: 0
                    }, "<"),
                    v.to(s, {
                        left: "50%",
                        xPercent: -50,
                        duration: 1,
                        ease: "power3.inOut"
                    })),
                    S > 3 && S < f && S != f - 1 && (v.to(".lamborghini__subnav-items", {
                        x: -o * (S - 1)
                    }),
                    v.to(m[S - 1], {
                        xPercent: 0
                    }, "<"),
                    v.to(m[S], {
                        xPercent: -50
                    }, "<"),
                    v.to(m[S + 1], {
                        xPercent: -100
                    }, "<"),
                    v.to(s, {
                        left: "0%",
                        xPercent: 0
                    }, "<"),
                    v.to(s, {
                        left: "50%",
                        xPercent: -50,
                        duration: 1,
                        ease: "power3.inOut"
                    })),
                    parseInt(S + 1) == f && v.to(s, {
                        left: "100%",
                        xPercent: -100,
                        duration: 1,
                        ease: "power3.inOut"
                    }),
                    S === f && (v.to(s, {
                        left: "100%",
                        xPercent: -100,
                        duration: 1,
                        ease: "power3.inOut"
                    }),
                    v.addLabel("label" + parseInt(S + 1)))) : (v.addLabel("label" + S),
                    1 === S && v.to(s, {
                        left: "50%",
                        xPercent: -50
                    }, "<"),
                    2 === S && v.to(s, {
                        left: "100%",
                        xPercent: -100,
                        duration: 1,
                        ease: "power3.inOut"
                    }),
                    3 === S && v.to(s, {
                        left: "100%",
                        xPercent: -100,
                        duration: 1,
                        ease: "power3.inOut"
                    }),
                    v.addLabel("label" + parseFloat(S + 1)));
                let b = [];
                document.querySelectorAll(".lamborghini__unintro").forEach(((t,e)=>{
                    let a = [];
                    t.querySelectorAll(".lamborghini__unintro-component").forEach(((t,n)=>{
                        if (ScrollTrigger.getById(`${e}horizontalPanel${n}`)) {
                            let i;
                            ScrollTrigger.getById(`${e}horizontalPanel${n - 1}`) && (i = ScrollTrigger.getById(`${e}horizontalPanel${n - 1}`).start),
                            a.push({
                                id: t.getAttribute("data-id"),
                                pos: i
                            })
                        }
                    }
                    )),
                    b.push(a)
                }
                ));
                const h = b.map((t=>t.filter((t=>null !== t.id))));
                function e(t, e) {
                    for (let a = 1; a <= f; a++)
                        t === a && 1 === e && v.tweenTo("label" + parseInt(a + 1)).timeScale(u),
                        t === a && -1 === e && v.tweenTo("label" + a).timeScale(u)
                }
                function a(t) {
                    m.forEach((e=>{
                        e.classList.remove("active"),
                        window.innerWidth < 768 && gsap.to(e, {
                            autoAlpha: 0
                        }),
                        e.dataset.navid == t && (e.classList.add("active"),
                        window.innerWidth < 768 && gsap.to(e, {
                            autoAlpha: 1
                        }))
                    }
                    ))
                }
                n.forEach(((t,n)=>{
                    let i = parseInt(t.dataset.id);
                    ScrollTrigger.create({
                        trigger: t,
                        id: "subnav_" + i,
                        invalidateOnRefresh: !0,
                        start: ()=>function(t) {
                            let e = "top top";
                            document.querySelectorAll(".lamborghini__layout").forEach(((a,n)=>{
                                if (!a.classList.contains("lamborghini__unintro")) {
                                    const n = a.querySelectorAll(".lamborghini__component");
                                    let i;
                                    n.forEach(((t,e)=>{
                                        t.classList.contains("lamborghini__iv-section") && (i = e)
                                    }
                                    )),
                                    n.forEach(((a,n)=>{
                                        if (a.hasAttribute("data-id")) {
                                            let n = parseInt(a.getAttribute("data-id"));
                                            t === n - 1 && (e = a.getBoundingClientRect().top)
                                        }
                                    }
                                    ))
                                }
                            }
                            ));
                            for (let a = 0; a < h.length; a++) {
                                t === parseInt(h[a][0].id) - 1 && (e = ScrollTrigger.getById(`unintroTimeline${a}`).start + 1);
                                for (let n = 0; n < h[a].length; n++)
                                    t === parseInt(h[a][n].id - 1) && h[a][n].pos && (e = h[a][n].pos);
                                t === parseInt(h[a][h[a].length - 1].id) && ScrollTrigger.getById(`unintroTimeline${a}`) && (e = parseInt(ScrollTrigger.getById(`unintroTimeline${a}`).end + d / 3))
                            }
                            return e
                        }(i),
                        onUpdate: t=>{
                            let e = Math.abs(t.getVelocity());
                            u = e > 4e3 ? 6 : 1
                        }
                        ,
                        onEnter: ()=>{
                            i && (c++,
                            a(i + 1),
                            e(i, 1))
                        }
                        ,
                        onLeaveBack: ()=>{
                            i && (c--,
                            a(i),
                            e(i, -1))
                        }
                    })
                }
                ));
                let y = [];
                document.querySelectorAll(".lamborghini__subnav-item").forEach(((t,e)=>{
                    t.classList.contains("unitro_link") && y.push(e + 1)
                }
                )),
                m.forEach(((t,e)=>{
                    t.addEventListener("click", (a=>{
                        if (a.preventDefault(),
                        "undefined" != typeof isModal && ivModalTimeline.restart(),
                        0 === e)
                            gsap.timeline().to(".lamborghini__section_nav_overlay", {
                                autoAlpha: 1,
                                duration: .3,
                                ease: "none",
                                onComplete: ()=>{
                                    gsap.to(window, {
                                        scrollTo: 0,
                                        duration: .2,
                                        ease: "none"
                                    })
                                }
                            }).to(".lamborghini__section_nav_overlay", {
                                autoAlpha: 0,
                                duration: .3,
                                ease: "none"
                            }, "<+=1");
                        else {
                            let a = t.dataset.navid - 1;
                            a && (t.classList.contains("unitro_link") ? gsap.timeline().to(".lamborghini__section_nav_overlay", {
                                autoAlpha: 1,
                                duration: .3,
                                ease: "none",
                                onComplete: ()=>{
                                    gsap.to(window, {
                                        scrollTo: ()=>y[0] === e + 1 ? _ > 768 ? ScrollTrigger.getById(`subnav_${a}`).start + d / 10 : ScrollTrigger.getById(`subnav_${a}`).start + 20 : ScrollTrigger.getById(`subnav_${a}`).start + 2,
                                        duration: .2,
                                        ease: "none"
                                    })
                                }
                            }).to(".lamborghini__section_nav_overlay", {
                                autoAlpha: 0,
                                duration: .3,
                                ease: "none"
                            }, "<+=1") : gsap.timeline().to(".lamborghini__section_nav_overlay", {
                                autoAlpha: 1,
                                duration: .3,
                                ease: "none",
                                onComplete: ()=>{
                                    gsap.to(window, {
                                        scrollTo: ScrollTrigger.getById(`subnav_${a}`).start + d / 2.4,
                                        duration: .2,
                                        ease: "none"
                                    })
                                }
                            }).to(".lamborghini__section_nav_overlay", {
                                autoAlpha: 0,
                                duration: .3,
                                ease: "none"
                            }, "<+=1"))
                        }
                    }
                    ))
                }
                )),
                r.addEventListener("click", (t=>{
                    t.preventDefault(),
                    "undefined" != typeof isModal && ivModalTimeline.restart(),
                    c < f && (y.includes(c + 1) ? gsap.timeline().to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "none",
                        onComplete: ()=>{
                            gsap.to(window, {
                                scrollTo: ()=>y[0] === c + 1 ? _ > 768 ? ScrollTrigger.getById(`subnav_${c}`).start + d / 10 : ScrollTrigger.getById(`subnav_${c}`).start + 20 : ScrollTrigger.getById(`subnav_${c}`).start + 2,
                                duration: .2,
                                ease: "none"
                            })
                        }
                    }).to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 0,
                        duration: .3,
                        ease: "none"
                    }, "<+=1") : gsap.timeline().to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "none",
                        onComplete: ()=>{
                            gsap.to(window, {
                                scrollTo: ScrollTrigger.getById(`subnav_${c}`).start + d / 2.4,
                                duration: .2,
                                ease: "none"
                            })
                        }
                    }).to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 0,
                        duration: .3,
                        ease: "none"
                    }, "<+=1"))
                }
                )),
                l.addEventListener("click", (t=>{
                    t.preventDefault(),
                    "undefined" != typeof isModal && ivModalTimeline.restart(),
                    2 === c && gsap.timeline().to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "none",
                        onComplete: ()=>{
                            gsap.to(window, {
                                scrollTo: 0,
                                duration: .2,
                                ease: "none"
                            })
                        }
                    }).to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 0,
                        duration: .3,
                        ease: "none"
                    }, "<+=1");
                    for (let t = 3; t <= f; t++)
                        c > 2 && c === t && (y.includes(c - 1) ? gsap.timeline().to(".lamborghini__section_nav_overlay", {
                            autoAlpha: 1,
                            duration: .3,
                            ease: "none",
                            onComplete: ()=>{
                                gsap.to(window, {
                                    scrollTo: ()=>y[0] === c - 1 ? _ > 768 ? ScrollTrigger.getById("subnav_" + (t - 2)).start + d / 10 : ScrollTrigger.getById("subnav_" + (t - 2)).start + 20 : ScrollTrigger.getById("subnav_" + (t - 2)).start + 2,
                                    duration: .2,
                                    ease: "none"
                                })
                            }
                        }).to(".lamborghini__section_nav_overlay", {
                            autoAlpha: 0,
                            duration: .3,
                            ease: "none"
                        }, "<+=1") : gsap.timeline().to(".lamborghini__section_nav_overlay", {
                            autoAlpha: 1,
                            duration: .3,
                            ease: "none",
                            onComplete: ()=>{
                                gsap.to(window, {
                                    scrollTo: ScrollTrigger.getById("subnav_" + (t - 2)).start + d / 2.4,
                                    duration: .2,
                                    ease: "none"
                                })
                            }
                        }).to(".lamborghini__section_nav_overlay", {
                            autoAlpha: 0,
                            duration: .3,
                            ease: "none"
                        }, "<+=1"));
                    c === f + 1 && (y.includes(c - 1) ? gsap.timeline().to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "none",
                        onComplete: ()=>{
                            gsap.to(window, {
                                scrollTo: ()=>y[0] === c - 1 ? ScrollTrigger.getById("subnav_" + (c - 2)).start + d / 10 : ScrollTrigger.getById("subnav_" + (c - 2)).start + 2,
                                duration: .2,
                                ease: "none"
                            })
                        }
                    }).to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 0,
                        duration: .3,
                        ease: "none"
                    }, "<+=1") : gsap.timeline().to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 1,
                        duration: .3,
                        ease: "none",
                        onComplete: ()=>{
                            gsap.to(window, {
                                scrollTo: ScrollTrigger.getById("subnav_" + (c - 2)).start + d / 2.4,
                                duration: .2,
                                ease: "none"
                            })
                        }
                    }).to(".lamborghini__section_nav_overlay", {
                        autoAlpha: 0,
                        duration: .3,
                        ease: "none"
                    }, "<+=1"))
                }
                ));
                const w = ()=>{
                    let t = window.location.hash
                      , e = 0;
                    const a = t.toLowerCase()
                      , n = p.find((t=>"#" + t.section.toLowerCase() === a));
                    n && (e = n.id),
                    e && e > 0 && e < m.length ? y.includes(e + 1) ? gsap.to(window, {
                        scrollTo: ()=>y[0] === e + 1 ? _ > 768 ? ScrollTrigger.getById(`subnav_${e}`).start + d / 10 : ScrollTrigger.getById(`subnav_${e}`).start + 20 : ScrollTrigger.getById(`subnav_${e}`).start + 2,
                        duration: .2,
                        ease: "none"
                    }) : gsap.to(window, {
                        scrollTo: ScrollTrigger.getById(`subnav_${e}`).start + d / 2.4,
                        duration: .2,
                        ease: "none"
                    }) : gsap.to(window, {
                        scrollTo: 0,
                        duration: .2,
                        ease: "none"
                    })
                }
                ;
                window.addEventListener("load", w, !1),
                window.onhashchange = w
            }
        }
        ,
        368: ()=>{
            var t = document.querySelector("html");
            new VenoBox({
                selector: ".popup-item",
                bgcolor: "transparent",
                navSpeed: 200,
                shareStyle: "block",
                toolsBackground: "rgba(0, 0, 0, 0.5)",
                toolsBackground: "transparent",
                toolsColor: "#fff",
                numeration: !0,
                infinigall: !0,
                share: !0,
                onPreOpen: function(e) {
                    t.classList.add("vbox-open")
                },
                onPreClose: function(e) {
                    t.classList.remove("vbox-open")
                }
            })
        }
        ,
        786: ()=>{
            !function() {
                document.querySelectorAll(".youtube-video-player");
                for (var t = document.querySelectorAll(".youtube-video-wrapper"), e = 0; e < t.length; e++)
                    t[e].addEventListener("click", (function(t) {
                        a(this.getAttribute("data-youtube-id"), this, t)
                    }
                    ));
                function a(t, e, a) {
                    var n = e.querySelector(".youtube-video-player")
                      , i = e.querySelector(".youtube-video-cover")
                      , o = e.querySelector(".youtube-video-button")
                      , s = e.nextElementSibling;
                    {
                        var l;
                        n.style.display = "block",
                        o.style.display = "none",
                        i.style.display = "none";
                        function r() {
                            l = new YT.Player(n,{
                                videoId: t,
                                playerVars: {
                                    modestbranding: 1,
                                    autohide: 1,
                                    showinfo: 0,
                                    controls: 1,
                                    autoplay: 1
                                },
                                events: {
                                    onReady: u,
                                    onError: c
                                }
                            })
                        }
                        function u(t) {
                            !0,
                            l.playVideo()
                        }
                        function c(t) {
                            console.log("Video playback failed")
                        }
                        window.YT && window.YT.Player ? r() : window.onYouTubeIframeAPIReady = r,
                        s.classList.contains("youtube-content") && (s.style.display = "none")
                    }
                }
            }()
        }
        ,
        591: ()=>{}
        ,
        171: ()=>{}
        ,
        421: ()=>{}
        ,
        35: ()=>{}
        ,
        976: ()=>{}
    }
      , e = {};
    function a(n) {
        var i = e[n];
        if (void 0 !== i)
            return i.exports;
        var o = e[n] = {
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, a),
        o.exports
    }
    a(786),
    a(537),
    a(147),
    a(747),
    a(20),
    a(352),
    a(368),
    a(789),
    a(968),
    a(773),
    a(129),
    a(438),
    a(839),
    a(452),
    a(421),
    a(976),
    a(171),
    a(35);
    a(591)
}
)();
