import {
    i,
    _ as _taggedTemplateLiteral,
    a as _decorate,
    s,
    e,
    x,
    b as e$1,
    c as _inherits,
    d as _createSuper,
    f as _createClass,
    g as _classCallCheck,
    h as _assertThisInitialized
} from "./query-assigned-elements-79b59cb5.js";
var commonjsGlobal = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

function getDefaultExportFromCjs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var lib = {},
    scene = {},
    debug = {},
    containers = {},
    settings = {},
    util = (Object.defineProperty(settings, "__esModule", {
        value: !0
    }), settings.settings = void 0, settings.settings = {
        debug: !1,
        gravity: 800,
        zIndex: 99999,
        respectReducedMotion: !0
    }, {}),
    config$1 = {};

function overrideDefaults(e, t) {
    return Object.assign({}, e, t)
}
Object.defineProperty(config$1, "__esModule", {
    value: !0
}), config$1.overrideDefaults = void 0, config$1.overrideDefaults = overrideDefaults;
var rotation = {},
    components = {},
    circle = {},
    Circle = (Object.defineProperty(circle, "__esModule", {
        value: !0
    }), circle.Circle = void 0, function() {
        function e(e, t, r) {
            void 0 === r && (r = 0), this.x = e, this.y = t, this.radius = r
        }
        return e.zero = new e(0, 0), e
    }()),
    color = (circle.Circle = Circle, {}),
    math = {},
    math_1$5 = (! function(r) {
        function i(e, t, r) {
            return (1 - r) * e + r * t
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.approximately = r.clamp = r.invlerp = r.slerp = r.lerp = r.epsilon = r.rad2deg = r.deg2rad = void 0, r.deg2rad = Math.PI / 180, r.rad2deg = 180 / Math.PI, r.epsilon = 1e-6, r.lerp = i, r.slerp = function(e, t, r) {
            return i(e, t, (1 - Math.cos(r * Math.PI)) / 2)
        }, r.invlerp = function(e, t, r) {
            return (r - e) / (t - e)
        }, r.clamp = function(e, t, r) {
            return Math.min(r, Math.max(t, e))
        }, r.approximately = function(e, t) {
            return Math.abs(e - t) < r.epsilon
        }
    }(math), Object.defineProperty(color, "__esModule", {
        value: !0
    }), color.Color = void 0, math),
    Color = function() {
        function o(e, t, r) {
            this.values = new Float32Array(3), this.rgb = [e, t, r]
        }
        return Object.defineProperty(o.prototype, "r", {
            get: function() {
                return this.values[0]
            },
            set: function(e) {
                this.values[0] = Math.floor(e)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(o.prototype, "g", {
            get: function() {
                return this.values[1]
            },
            set: function(e) {
                this.values[1] = Math.floor(e)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(o.prototype, "b", {
            get: function() {
                return this.values[2]
            },
            set: function(e) {
                this.values[2] = Math.floor(e)
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(o.prototype, "rgb", {
            get: function() {
                return [this.r, this.g, this.b]
            },
            set: function(e) {
                this.r = e[0], this.g = e[1], this.b = e[2]
            },
            enumerable: !1,
            configurable: !0
        }), o.prototype.mix = function(e, t) {
            return new o(math_1$5.lerp(this.r, e.r, t = void 0 === t ? .5 : t), math_1$5.lerp(this.g, e.g, t), math_1$5.lerp(this.b, e.b, t))
        }, o.prototype.toHex = function() {
            function e(e) {
                return e.toString(16).padStart(2, "0")
            }
            return "#" + e(this.r) + e(this.g) + e(this.b)
        }, o.prototype.toString = function() {
            return "rgb(" + this.values.join(", ") + ")"
        }, o.fromHex = function(e) {
            return e.startsWith("#") && (e = e.substr(1)), new o(parseInt(e.substr(0, 2), 16), parseInt(e.substr(2, 2), 16), parseInt(e.substr(4, 2), 16))
        }, o.fromHsl = function(e, t, r) {
            var i, n;
            return e /= 360, r /= 100, 0 === (t /= 100) ? new o(r, r, r) : new o((n = function(e) {
                return Math.min(255, 256 * e)
            })((i = function(e, t, r) {
                return r < 0 && (r += 1), 1 < r && --r, r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            })(t = 2 * r - (r = r < .5 ? r * (1 + t) : r + t - r * t), r, e + 1 / 3)), n(i(t, r, e)), n(i(t, r, e - 1 / 3)))
        }, o.white = new o(255, 255, 255), o.black = new o(0, 0, 0), o
    }(),
    gradient = (color.Color = Color, {}),
    spline = {},
    math_1$4 = (Object.defineProperty(spline, "__esModule", {
        value: !0
    }), spline.Spline = void 0, math),
    Spline = function() {
        function e() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (0 === e.length) throw new Error("Splines require at least one key.");
            if (Array.isArray(e[0])) throw new Error("You are trying to pass an array to the spline constructor, which is not supported. Try to spread the array into the constructor instead.");
            this.keys = e
        }
        return e.prototype.evaluate = function(t) {
            if (0 === this.keys.length) throw new Error("Attempt to evaluate a spline with no keys.");
            var e, r, i;
            return 1 === this.keys.length ? this.keys[0].value : 0 === (i = (r = this.keys.sort(function(e, t) {
                return e.time - t.time
            })).findIndex(function(e) {
                return e.time > t
            })) ? r[0].value : -1 === i ? r[r.length - 1].value : (e = r[i - 1], r = r[i], i = math_1$4.invlerp(e.time, r.time, t), this.interpolate(e.value, r.value, i))
        }, e
    }(),
    __extends$1 = (spline.Spline = Spline, commonjsGlobal && commonjsGlobal.__extends || function() {
        var i = function(e, t) {
            return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(e, t) {
                    e.__proto__ = t
                } : function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }))(e, t)
        };
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function r() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }
    }()),
    __spreadArray$2 = commonjsGlobal && commonjsGlobal.__spreadArray || function(e, t) {
        for (var r = 0, i = t.length, n = e.length; r < i; r++, n++) e[n] = t[r];
        return e
    },
    spline_1$1 = (Object.defineProperty(gradient, "__esModule", {
        value: !0
    }), gradient.Gradient = void 0, spline),
    Gradient = function(e) {
        function i() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends$1(i, e), i.prototype.interpolate = function(e, t, r) {
            return e.mix(t, r)
        }, i.solid = function(e) {
            return new i({
                value: e,
                time: .5
            })
        }, i.simple = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var r = 1 / (e.length - 1);
            return new(i.bind.apply(i, __spreadArray$2([void 0], e.map(function(e, t) {
                return {
                    value: e,
                    time: t * r
                }
            }))))
        }, i
    }(spline.Spline),
    numericSpline = (gradient.Gradient = Gradient, {}),
    __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
        var i = function(e, t) {
            return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function(e, t) {
                    e.__proto__ = t
                } : function(e, t) {
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }))(e, t)
        };
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

            function r() {
                this.constructor = e
            }
            i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }
    }(),
    math_1$3 = (Object.defineProperty(numericSpline, "__esModule", {
        value: !0
    }), numericSpline.NumericSpline = void 0, math),
    spline_1 = spline,
    NumericSpline = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.interpolate = function(e, t, r) {
            return math_1$3.slerp(e, t, r)
        }, t
    }(spline.Spline),
    rect = (numericSpline.NumericSpline = NumericSpline, {}),
    Rect = (Object.defineProperty(rect, "__esModule", {
        value: !0
    }), rect.Rect = void 0, function() {
        function t(e, t, r, i) {
            void 0 === r && (r = 0), void 0 === i && (i = 0), this.x = e, this.y = t, this.width = r, this.height = i
        }
        return t.fromScreen = function() {
            return new t(window.scrollX, window.scrollY, window.innerWidth, window.innerHeight)
        }, t.fromElement = function(e) {
            e = e.getBoundingClientRect();
            return new t(window.scrollX + e.x, window.scrollY + e.y, e.width, e.height)
        }, t.zero = new t(0, 0), t
    }()),
    vector = (rect.Rect = Rect, {}),
    __spreadArray$1 = commonjsGlobal && commonjsGlobal.__spreadArray || function(e, t) {
        for (var r = 0, i = t.length, n = e.length; r < i; r++, n++) e[n] = t[r];
        return e
    },
    math_1$2 = (Object.defineProperty(vector, "__esModule", {
        value: !0
    }), vector.Vector = void 0, math),
    Vector = function() {
        function t(e, t, r) {
            void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = 0), this.values = new Float32Array(3), this.xyz = [e, t, r]
        }
        return Object.defineProperty(t.prototype, "x", {
            get: function() {
                return this.values[0]
            },
            set: function(e) {
                this.values[0] = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "y", {
            get: function() {
                return this.values[1]
            },
            set: function(e) {
                this.values[1] = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "z", {
            get: function() {
                return this.values[2]
            },
            set: function(e) {
                this.values[2] = e
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(t.prototype, "xyz", {
            get: function() {
                return [this.x, this.y, this.z]
            },
            set: function(e) {
                this.values[0] = e[0], this.values[1] = e[1], this.values[2] = e[2]
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.magnitude = function() {
            return Math.sqrt(this.sqrMagnitude())
        }, t.prototype.sqrMagnitude = function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }, t.prototype.add = function(e) {
            return new t(this.x + e.x, this.y + e.y, this.z + e.z)
        }, t.prototype.subtract = function(e) {
            return new t(this.x - e.x, this.y - e.y, this.z - e.z)
        }, t.prototype.scale = function(e) {
            return "number" == typeof e ? new t(this.x * e, this.y * e, this.z * e) : new t(this.x * e.x, this.y * e.y, this.z * e.z)
        }, t.prototype.normalized = function() {
            var e = this.magnitude();
            return 0 !== e ? this.scale(1 / e) : new(t.bind.apply(t, __spreadArray$1([void 0], this.xyz)))
        }, t.prototype.angle = function(e) {
            return math_1$2.rad2deg * Math.acos((this.x * e.x + this.y * e.y + this.z * e.z) / (this.magnitude() * e.magnitude()))
        }, t.prototype.cross = function(e) {
            return new t(this.y * e.z - this.z * e.y, this.z * e.x - this.x * e.z, this.x * e.y - this.y * e.x)
        }, t.prototype.dot = function(e) {
            return this.magnitude() * e.magnitude() * Math.cos(math_1$2.deg2rad * this.angle(e))
        }, t.prototype.toString = function() {
            return "Vector(" + this.values.join(", ") + ")"
        }, t.from2dAngle = function(e) {
            return new t(Math.cos(e * math_1$2.deg2rad), Math.sin(e * math_1$2.deg2rad))
        }, t.zero = new t(0, 0, 0), t.one = new t(1, 1, 1), t.right = new t(1, 0, 0), t.up = new t(0, 1, 0), t.forward = new t(0, 0, 1), t
    }(),
    components_1$5 = (vector.Vector = Vector, ! function(e) {
        var i = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r), Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, i) {
                e[i = void 0 === i ? r : i] = t[r]
            }),
            t = commonjsGlobal && commonjsGlobal.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t(circle, e), t(color, e), t(gradient, e), t(numericSpline, e), t(rect, e), t(vector, e)
    }(components), Object.defineProperty(rotation, "__esModule", {
        value: !0
    }), rotation.rotationToNormal = void 0, components),
    math_1$1 = math;

function rotationToNormal(e) {
    var t = e.x * math_1$1.deg2rad,
        e = e.y * math_1$1.deg2rad,
        e = new components_1$5.Vector(Math.cos(e), 0, Math.sin(e)),
        t = new components_1$5.Vector(0, Math.cos(t), Math.sin(t));
    return e.cross(t)
}
rotation.rotationToNormal = rotationToNormal;
var rules = {},
    lazy = (Object.defineProperty(rules, "__esModule", {
        value: !0
    }), rules.despawningRules = void 0, rules.despawningRules = {
        lifetime: function(e) {
            return e.lifetime <= 0
        },
        bounds: function(e) {
            var t = document.documentElement.scrollHeight;
            return e.location.y > t
        }
    }, {}),
    Lazy = (Object.defineProperty(lazy, "__esModule", {
        value: !0
    }), lazy.Lazy = void 0, function() {
        function r(e, t) {
            void 0 === t && (t = r.defaultExists), this.factory = e, this.exists = t
        }
        return Object.defineProperty(r.prototype, "current", {
            get: function() {
                return this.exists(this.value) || (this.value = this.factory()), this.value
            },
            enumerable: !1,
            configurable: !0
        }), r.defaultExists = function(e) {
            return void 0 !== e
        }, r
    }()),
    __spreadArray = (lazy.Lazy = Lazy, ! function(e) {
        var i = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r), Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, i) {
                e[i = void 0 === i ? r : i] = t[r]
            }),
            t = commonjsGlobal && commonjsGlobal.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t(config$1, e), t(rotation, e), t(rules, e), t(lazy, e)
    }(util), ! function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.particleContainer = e.debugContainer = e.rootContainer = void 0;
        var t = settings,
            r = util;

        function i(e) {
            return e && e.isConnected
        }

        function n(e, t, r) {
            var i = document.createElement("div");
            return i.id = "party-js-" + e, Object.assign(i.style, t), r.appendChild(i)
        }
        e.rootContainer = new r.Lazy(function() {
            return n("container", {
                position: "fixed",
                left: "0",
                top: "0",
                height: "100vh",
                width: "100vw",
                pointerEvents: "none",
                userSelect: "none",
                zIndex: t.settings.zIndex.toString()
            }, document.body)
        }, i), e.debugContainer = new r.Lazy(function() {
            return n("debug", {
                position: "absolute",
                top: "0",
                left: "0",
                margin: "0.5em",
                padding: "0.5em 1em",
                border: "2px solid rgb(0, 0, 0, 0.2)",
                background: "rgb(0, 0, 0, 0.1)",
                color: "#555",
                fontFamily: "monospace"
            }, e.rootContainer.current)
        }, i), e.particleContainer = new r.Lazy(function() {
            return n("particles", {
                width: "100%",
                height: "100%",
                overflow: "hidden",
                perspective: "1200px"
            }, e.rootContainer.current)
        }, i)
    }(containers), commonjsGlobal && commonjsGlobal.__spreadArray || function(e, t) {
        for (var r = 0, i = t.length, n = e.length; r < i; r++, n++) e[n] = t[r];
        return e
    }),
    containers_1 = (Object.defineProperty(debug, "__esModule", {
        value: !0
    }), debug.Debug = void 0, containers),
    settings_1$1 = settings,
    Debug = function() {
        function e(e) {
            this.scene = e, this.refreshRate = 8, this.refreshTimer = 1 / this.refreshRate
        }
        return e.prototype.tick = function(e) {
            var t = containers_1.debugContainer.current,
                r = settings_1$1.settings.debug ? "block" : "none";
            t.style.display !== r && (t.style.display = r), settings_1$1.settings.debug && (this.refreshTimer += e, this.refreshTimer > 1 / this.refreshRate) && (this.refreshTimer = 0, t.innerHTML = this.getDebugInformation(e).join("<br>"))
        }, e.prototype.getDebugInformation = function(e) {
            var t = this.scene.emitters.length,
                r = this.scene.emitters.reduce(function(e, t) {
                    return e + t.particles.length
                }, 0),
                e = ["<b>party.js Debug</b>", "--------------", "FPS: " + Math.round(1 / e), "Emitters: " + t, "Particles: " + r],
                t = this.scene.emitters.map(function(e) {
                    return ["⭯: " + (e.currentLoop + 1) + "/" + (0 <= e.options.loops ? e.options.loops : "∞"), "Σp: " + e.particles.length, e.isExpired ? "<i>expired</i>" : "Σt: " + e.durationTimer.toFixed(3) + "s"].join(", ")
                });
            return e.push.apply(e, __spreadArray(["--------------"], t)), e
        }, e
    }(),
    emitter = (debug.Debug = Debug, {}),
    variation = {},
    random = {},
    components_1$4 = (Object.defineProperty(random, "__esModule", {
        value: !0
    }), random.randomInsideCircle = random.randomInsideRect = random.randomUnitVector = random.pick = random.randomRange = void 0, components),
    math_1 = math;

function randomRange(e, t) {
    return math_1.lerp(e = void 0 === e ? 0 : e, t = void 0 === t ? 1 : t, Math.random())
}

function pick(e) {
    return 0 === e.length ? void 0 : e[Math.floor(Math.random() * e.length)]
}

function randomUnitVector() {
    var e = randomRange(0, 2 * Math.PI),
        t = randomRange(-1, 1);
    return new components_1$4.Vector(Math.sqrt(1 - t * t) * Math.cos(e), Math.sqrt(1 - t * t) * Math.sin(e), t)
}

function randomInsideRect(e) {
    return new components_1$4.Vector(e.x + randomRange(0, e.width), e.y + randomRange(0, e.height))
}

function randomInsideCircle(e) {
    var t = randomRange(0, 2 * Math.PI),
        r = randomRange(0, e.radius);
    return new components_1$4.Vector(e.x + Math.cos(t) * r, e.y + Math.sin(t) * r)
}
random.randomRange = randomRange, random.pick = pick, random.randomUnitVector = randomUnitVector, random.randomInsideRect = randomInsideRect, random.randomInsideCircle = randomInsideCircle, Object.defineProperty(variation, "__esModule", {
    value: !0
}), variation.gradientSample = variation.splineSample = variation.skewRelative = variation.skew = variation.range = variation.evaluateVariation = void 0;
var random_1$1 = random;

function evaluateVariation(e) {
    return Array.isArray(e) ? random_1$1.pick(e) : "function" == typeof e ? e() : e
}

function range(e, t) {
    return function() {
        return random_1$1.randomRange(e, t)
    }
}

function skew(e, t) {
    return function() {
        return e + random_1$1.randomRange(-t, t)
    }
}

function skewRelative(e, t) {
    return function() {
        return e * (1 + random_1$1.randomRange(-t, t))
    }
}

function splineSample(e) {
    return function() {
        return e.evaluate(Math.random())
    }
}

function gradientSample(e) {
    return splineSample(e)
}
variation.evaluateVariation = evaluateVariation, variation.range = range, variation.skew = skew, variation.skewRelative = skewRelative, variation.splineSample = splineSample, variation.gradientSample = gradientSample;
var options = {},
    emitterOptions = {},
    rules_1 = (Object.defineProperty(emitterOptions, "__esModule", {
        value: !0
    }), emitterOptions.getDefaultEmitterOptions = void 0, rules);

function getDefaultEmitterOptions() {
    return {
        duration: 5,
        loops: 1,
        useGravity: !0,
        maxParticles: 300,
        despawningRules: [rules_1.despawningRules.lifetime, rules_1.despawningRules.bounds],
        modules: []
    }
}
emitterOptions.getDefaultEmitterOptions = getDefaultEmitterOptions;
var emissionOptions = {},
    sources = {},
    components_1$3 = (Object.defineProperty(sources, "__esModule", {
        value: !0
    }), sources.circleSource = sources.rectSource = sources.mouseSource = sources.elementSource = sources.dynamicSource = void 0, components),
    random_1 = random;

function dynamicSource(e) {
    if (e instanceof HTMLElement) return elementSource(e);
    if (e instanceof components_1$3.Circle) return circleSource(e);
    if (e instanceof components_1$3.Rect) return rectSource(e);
    if (e instanceof MouseEvent) return mouseSource(e);
    throw new Error("Cannot infer the source type of '" + e + "'.")
}

function elementSource(e) {
    return function() {
        return random_1.randomInsideRect(components_1$3.Rect.fromElement(e))
    }
}

function mouseSource(e) {
    return function() {
        return new components_1$3.Vector(window.scrollX + e.clientX, window.scrollY + e.clientY)
    }
}

function rectSource(e) {
    return function() {
        return random_1.randomInsideRect(e)
    }
}

function circleSource(e) {
    return function() {
        return random_1.randomInsideCircle(e)
    }
}
sources.dynamicSource = dynamicSource, sources.elementSource = elementSource, sources.mouseSource = mouseSource, sources.rectSource = rectSource, sources.circleSource = circleSource, Object.defineProperty(emissionOptions, "__esModule", {
    value: !0
}), emissionOptions.getDefaultEmissionOptions = void 0;
var components_1$2 = components,
    sources_1 = sources;

function getDefaultEmissionOptions() {
    return {
        rate: 10,
        angle: 0,
        bursts: [],
        sourceSampler: sources_1.rectSource(components_1$2.Rect.zero),
        initialLifetime: 5,
        initialSpeed: 5,
        initialSize: 1,
        initialRotation: components_1$2.Vector.zero,
        initialColor: components_1$2.Color.white
    }
}
emissionOptions.getDefaultEmissionOptions = getDefaultEmissionOptions;
var renderOptions = {};

function getDefaultRendererOptions() {
    return {
        shapeFactory: "square",
        applyColor: defaultApplyColor,
        applyOpacity: defaultApplyOpacity,
        applyLighting: defaultApplyLighting,
        applyTransform: defaultApplyTransform
    }
}

function defaultApplyColor(e, t) {
    var r = e.toHex();
    switch (t.nodeName.toLowerCase()) {
        case "div":
            t.style.background = r;
            break;
        case "svg":
            t.style.fill = t.style.color = r;
            break;
        default:
            t.style.color = r
    }
}

function defaultApplyOpacity(e, t) {
    t.style.opacity = e.toString()
}

function defaultApplyLighting(e, t) {
    t.style.filter = "brightness(" + (.5 + Math.abs(e)) + ")"
}

function defaultApplyTransform(e, t) {
    t.style.transform = "translateX(" + (e.location.x - window.scrollX).toFixed(3) + "px) translateY(" + (e.location.y - window.scrollY).toFixed(3) + "px) translateZ(" + e.location.z.toFixed(3) + "px) rotateX(" + e.rotation.x.toFixed(3) + "deg) rotateY(" + e.rotation.y.toFixed(3) + "deg) rotateZ(" + e.rotation.z.toFixed(3) + "deg) scale(" + e.size.toFixed(3) + ")"
}
Object.defineProperty(renderOptions, "__esModule", {
        value: !0
    }), renderOptions.getDefaultRendererOptions = void 0, renderOptions.getDefaultRendererOptions = getDefaultRendererOptions,
    function(e) {
        var i = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, r, i) {
                void 0 === i && (i = r), Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, i) {
                e[i = void 0 === i ? r : i] = t[r]
            }),
            t = commonjsGlobal && commonjsGlobal.__exportStar || function(e, t) {
                for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), t(emitterOptions, e), t(emissionOptions, e), t(renderOptions, e)
    }(options);
var hasRequiredRenderer, hasRequiredScene, particle = {},
    components_1$1 = (Object.defineProperty(particle, "__esModule", {
        value: !0
    }), particle.Particle = void 0, components),
    config_1$1 = config$1,
    Particle = function(e) {
        e = config_1$1.overrideDefaults({
            lifetime: 0,
            size: 1,
            location: components_1$1.Vector.zero,
            rotation: components_1$1.Vector.zero,
            velocity: components_1$1.Vector.zero,
            color: components_1$1.Color.white,
            opacity: 1
        }, e), this.id = Symbol(), this.size = this.initialSize = e.size, this.lifetime = this.initialLifetime = e.lifetime, this.rotation = this.initialRotation = e.rotation, this.location = e.location, this.velocity = e.velocity, this.color = e.color, this.opacity = e.opacity
    },
    vector_1 = (particle.Particle = Particle, Object.defineProperty(emitter, "__esModule", {
        value: !0
    }), emitter.Emitter = void 0, vector),
    settings_1 = settings,
    variation_1 = variation,
    config_1 = config$1,
    options_1 = options,
    particle_1 = particle,
    Emitter = function() {
        function e(e) {
            this.particles = [], this.currentLoop = 0, this.durationTimer = 0, this.emissionTimer = 0, this.attemptedBurstIndices = [], this.options = config_1.overrideDefaults(options_1.getDefaultEmitterOptions(), null == e ? void 0 : e.emitterOptions), this.emission = config_1.overrideDefaults(options_1.getDefaultEmissionOptions(), null == e ? void 0 : e.emissionOptions), this.renderer = config_1.overrideDefaults(options_1.getDefaultRendererOptions(), null == e ? void 0 : e.rendererOptions)
        }
        return Object.defineProperty(e.prototype, "isExpired", {
            get: function() {
                return 0 <= this.options.loops && this.currentLoop >= this.options.loops
            },
            enumerable: !1,
            configurable: !0
        }), Object.defineProperty(e.prototype, "canRemove", {
            get: function() {
                return 0 === this.particles.length
            },
            enumerable: !1,
            configurable: !0
        }), e.prototype.clearParticles = function() {
            return this.particles.splice(0).length
        }, e.prototype.tick = function(r) {
            if (!this.isExpired && (this.durationTimer += r, this.durationTimer >= this.options.duration && (this.currentLoop++, this.durationTimer = 0, this.attemptedBurstIndices = []), !this.isExpired)) {
                for (var e = 0, t = 0, i = this.emission.bursts; t < i.length; t++) {
                    var n = i[t];
                    if (n.time <= this.durationTimer && !this.attemptedBurstIndices.includes(e)) {
                        for (var o = variation_1.evaluateVariation(n.count), a = 0; a < o; a++) this.emitParticle();
                        this.attemptedBurstIndices.push(e)
                    }
                    e++
                }
                this.emissionTimer += r;
                for (var s = 1 / this.emission.rate; this.emissionTimer > s;) this.emissionTimer -= s, this.emitParticle()
            }
            for (var l = this, a = this.particles.length - 1; 0 <= a; a--) ! function(e) {
                var t = l.particles[e];
                l.tickParticle(t, r), l.options.despawningRules.some(function(e) {
                    return e(t)
                }) && l.particles.splice(e, 1)
            }(a)
        }, e.prototype.tickParticle = function(e, t) {
            e.lifetime -= t, this.options.useGravity && (e.velocity = e.velocity.add(vector_1.Vector.up.scale(settings_1.settings.gravity * t))), e.location = e.location.add(e.velocity.scale(t));
            for (var r = 0, i = this.options.modules; r < i.length; r++)(0, i[r])(e)
        }, e.prototype.emitParticle = function() {
            var e = new particle_1.Particle({
                location: this.emission.sourceSampler(),
                lifetime: variation_1.evaluateVariation(this.emission.initialLifetime),
                velocity: vector_1.Vector.from2dAngle(variation_1.evaluateVariation(this.emission.angle)).scale(variation_1.evaluateVariation(this.emission.initialSpeed)),
                size: variation_1.evaluateVariation(this.emission.initialSize),
                rotation: variation_1.evaluateVariation(this.emission.initialRotation),
                color: variation_1.evaluateVariation(this.emission.initialColor)
            });
            return this.particles.push(e), this.particles.length > this.options.maxParticles && this.particles.shift(), e
        }, e
    }(),
    renderer = (emitter.Emitter = Emitter, {}),
    shapes = {};

function requireRenderer() {
    var e, t, r, i, n;
    return hasRequiredRenderer || (hasRequiredRenderer = 1, Object.defineProperty(renderer, "__esModule", {
        value: !0
    }), renderer.Renderer = void 0, e = requireLib(), t = vector, r = containers, i = shapes, n = util, o.prototype.begin = function() {
        this.renderedParticles = []
    }, o.prototype.end = function() {
        for (var e = this.elements.keys(), t = e.next(); !t.done;) {
            var r = t.value;
            this.renderedParticles.includes(r) || (this.elements.get(r).remove(), this.elements.delete(r)), t = e.next()
        }
        return this.renderedParticles.length
    }, o.prototype.renderParticle = function(e, t) {
        var r, i;
        this.enabled && (t = t.renderer, r = this.elements.has(e.id) ? this.elements.get(e.id) : this.createParticleElement(e, t), t.applyColor && t.applyColor(e.color, r), t.applyOpacity && t.applyOpacity(e.opacity, r), t.applyLighting && (i = n.rotationToNormal(e.rotation).dot(this.light), t.applyLighting(i, r)), t.applyTransform && t.applyTransform(e, r), this.renderedParticles.push(e.id))
    }, o.prototype.createParticleElement = function(e, t) {
        t = i.resolveShapeFactory(t.shapeFactory).cloneNode(!0);
        return t.style.position = "absolute", this.elements.set(e.id, r.particleContainer.current.appendChild(t)), t
    }, renderer.Renderer = o), renderer;

    function o() {
        this.elements = new Map, this.light = new t.Vector(0, 0, 1), this.enabled = !0, this.enabled = !e.settings.respectReducedMotion || !window.matchMedia("(prefers-reduced-motion)").matches
    }
}

function requireScene() {
    var e, t, r;
    return hasRequiredScene || (hasRequiredScene = 1, Object.defineProperty(scene, "__esModule", {
        value: !0
    }), scene.Scene = void 0, e = debug, t = emitter, r = requireRenderer(), i.prototype.createEmitter = function(e) {
        e = new t.Emitter(e);
        return this.emitters.push(e), e
    }, i.prototype.clearEmitters = function() {
        return this.emitters.splice(0).length
    }, i.prototype.clearParticles = function() {
        return this.emitters.reduce(function(e, t) {
            return e + t.clearParticles()
        }, 0)
    }, i.prototype.scheduleTick = function() {
        this.scheduledTickId = window.requestAnimationFrame(this.tick)
    }, i.prototype.cancelTick = function() {
        window.cancelAnimationFrame(this.scheduledTickId)
    }, i.prototype.tick = function(e) {
        var t = (e - this.lastTickTimestamp) / 1e3;
        try {
            for (var r = 0; r < this.emitters.length; r++)(o = this.emitters[r]).tick(t), o.isExpired && o.canRemove && this.emitters.splice(r--, 1)
        } catch (e) {
            console.error("An error occurred while updating the scene's emitters:\n\"" + e + '"')
        }
        try {
            this.renderer.begin();
            for (var i = 0, n = this.emitters; i < n.length; i++)
                for (var o = n[i], a = 0, s = o.particles; a < s.length; a++) {
                    var l = s[a];
                    this.renderer.renderParticle(l, o)
                }
            this.renderer.end()
        } catch (e) {
            console.error("An error occurred while rendering the scene's particles:\n\"" + e + '"')
        }
        this.debug.tick(t), this.lastTickTimestamp = e, this.scheduleTick()
    }, scene.Scene = i), scene;

    function i() {
        this.emitters = [], this.debug = new e.Debug(this), this.renderer = new r.Renderer, this.scheduledTickId = void 0, this.lastTickTimestamp = performance.now(), this.tick = this.tick.bind(this), this.scheduleTick()
    }
}! function(i) {
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), i.resolveShapeFactory = i.resolvableShapes = void 0;
    var n = variation;
    i.resolvableShapes = {
        square: '<div style="height: 10px; width: 10px;"></div>',
        rectangle: '<div style="height: 6px; width: 10px;"></div>',
        circle: '<svg viewBox="0 0 2 2" width="10" height="10"><circle cx="1" cy="1" r="1" fill="currentColor"/></svg>',
        roundedSquare: '<div style="height: 10px; width: 10px; border-radius: 3px;"></div>',
        roundedRectangle: '<div style="height: 6px; width: 10px; border-radius: 3px;"></div>',
        star: '<svg viewBox="0 0 512 512" width="15" height="15"><polygon fill="currentColor" points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842"/></svg>'
    }, i.resolveShapeFactory = function(e) {
        if ("string" != typeof(e = n.evaluateVariation(e))) return e;
        var t, r = i.resolvableShapes[e];
        if (r) return (t = document.createElement("div")).innerHTML = r, t.firstElementChild;
        throw new Error("Failed to resolve shape key '" + e + "'. Did you forget to add it to the 'resolvableShapes' lookup?")
    }
}(shapes);
var hasRequiredConfetti, templates = {},
    confetti = {},
    modules = {},
    components_1 = (Object.defineProperty(modules, "__esModule", {
        value: !0
    }), modules.ModuleBuilder = void 0, components),
    ModuleBuilder = function() {
        function e() {
            this.factor = "lifetime", this.isRelative = !1
        }
        return e.prototype.drive = function(e) {
            return this.driverKey = e, this
        }, e.prototype.through = function(e) {
            return this.factor = e, this
        }, e.prototype.by = function(e) {
            return this.driverValue = e, this
        }, e.prototype.relative = function(e) {
            return this.isRelative = e = void 0 === e ? !0 : e, this
        }, e.prototype.build = function() {
            var t = this;
            if (void 0 === this.driverKey) throw new Error("No driving key was provided in the module builder. Did you forget a '.drive()' call?");
            if (void 0 === this.driverValue) throw new Error("No driving value was provided in the module builder. Did you forget a '.through()' call?");
            return function(e) {
                updateDrivenProperty(e, t.driverKey, evaluateModuleDriver(t.driverValue, calculateModuleFactor(t.factor, e), e), t.isRelative)
            }
        }, e
    }();

function evaluateModuleDriver(e, t, r) {
    return "object" == typeof e && "evaluate" in e ? e.evaluate(t) : "function" == typeof e ? e(t, r) : e
}

function calculateModuleFactor(e, t) {
    switch (e) {
        case "lifetime":
            return t.initialLifetime - t.lifetime;
        case "relativeLifetime":
            return (t.initialLifetime - t.lifetime) / t.initialLifetime;
        case "size":
            return t.size;
        default:
            throw new Error("Invalid driving factor '" + e + "'.")
    }
}

function updateDrivenProperty(e, t, r, i) {
    if (i = void 0 === i ? !1 : i) {
        i = e["initial" + t[0].toUpperCase() + t.substr(1)];
        if (void 0 === i) throw new Error("Unable to use relative chaining with key '" + t + "'; no initial value exists.");
        if (r instanceof components_1.Vector) updateDrivenProperty(e, t, i.add(r));
        else {
            if ("number" != typeof r) throw new Error("Unable to use relative chaining with particle key '" + t + "'; no relative operation for '" + r + "' could be inferred.");
            updateDrivenProperty(e, t, i * r)
        }
    } else e[t] = r
}

function requireConfetti() {
    var r, i, n, o, a, s, l;
    return hasRequiredConfetti || (hasRequiredConfetti = 1, Object.defineProperty(confetti, "__esModule", {
        value: !0
    }), confetti.confetti = void 0, r = requireLib(), i = components, n = modules, o = random, a = sources, s = variation, l = util, confetti.confetti = function(e, t) {
        return t = l.overrideDefaults({
            count: s.range(20, 40),
            spread: s.range(35, 45),
            speed: s.range(300, 600),
            size: s.skew(1, .2),
            rotation: function() {
                return o.randomUnitVector().scale(180)
            },
            color: function() {
                return i.Color.fromHsl(o.randomRange(0, 360), 100, 70)
            },
            modules: [(new n.ModuleBuilder).drive("size").by(function(e) {
                return Math.min(1, 3 * e)
            }).relative().build(), (new n.ModuleBuilder).drive("rotation").by(function(e) {
                return new i.Vector(140, 200, 260).scale(e)
            }).relative().build()],
            shapes: ["square", "circle"]
        }, t), r.scene.current.createEmitter({
            emitterOptions: {
                loops: 1,
                duration: 8,
                modules: t.modules
            },
            emissionOptions: {
                rate: 0,
                bursts: [{
                    time: 0,
                    count: t.count
                }],
                sourceSampler: a.dynamicSource(e),
                angle: s.skew(-90, s.evaluateVariation(t.spread)),
                initialLifetime: 8,
                initialSpeed: t.speed,
                initialSize: t.size,
                initialRotation: t.rotation,
                initialColor: t.color
            },
            rendererOptions: {
                shapeFactory: t.shapes
            }
        })
    }), confetti
}
modules.ModuleBuilder = ModuleBuilder;
var hasRequiredSparkles, hasRequiredTemplates, hasRequiredLib, sparkles = {};

function requireSparkles() {
    var r, i, n, o, a, s, l;
    return hasRequiredSparkles || (hasRequiredSparkles = 1, Object.defineProperty(sparkles, "__esModule", {
        value: !0
    }), sparkles.sparkles = void 0, r = requireLib(), i = components, n = modules, o = random, a = sources, s = variation, l = util, sparkles.sparkles = function(e, t) {
        return t = l.overrideDefaults({
            lifetime: s.range(1, 2),
            count: s.range(10, 20),
            speed: s.range(100, 200),
            size: s.range(.8, 1.8),
            rotation: function() {
                return new i.Vector(0, 0, o.randomRange(0, 360))
            },
            color: function() {
                return i.Color.fromHsl(50, 100, o.randomRange(55, 85))
            },
            modules: [(new n.ModuleBuilder).drive("rotation").by(function(e) {
                return new i.Vector(0, 0, 200).scale(e)
            }).relative().build(), (new n.ModuleBuilder).drive("size").by(new i.NumericSpline({
                time: 0,
                value: 0
            }, {
                time: .3,
                value: 1
            }, {
                time: .7,
                value: 1
            }, {
                time: 1,
                value: 0
            })).through("relativeLifetime").relative().build(), (new n.ModuleBuilder).drive("opacity").by(new i.NumericSpline({
                time: 0,
                value: 1
            }, {
                time: .5,
                value: 1
            }, {
                time: 1,
                value: 0
            })).through("relativeLifetime").build()],
            shapes: "star"
        }, t), r.scene.current.createEmitter({
            emitterOptions: {
                loops: 1,
                duration: 3,
                useGravity: !1,
                modules: t.modules
            },
            emissionOptions: {
                rate: 0,
                bursts: [{
                    time: 0,
                    count: t.count
                }],
                sourceSampler: a.dynamicSource(e),
                angle: s.range(0, 360),
                initialLifetime: t.lifetime,
                initialSpeed: t.speed,
                initialSize: t.size,
                initialRotation: t.rotation,
                initialColor: t.color
            },
            rendererOptions: {
                applyLighting: void 0,
                shapeFactory: t.shapes
            }
        })
    }), sparkles
}

function requireTemplates() {
    var e, i, t;
    return hasRequiredTemplates || (hasRequiredTemplates = 1, e = templates, i = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        e[i = void 0 === i ? r : i] = t[r]
    }), t = commonjsGlobal && commonjsGlobal.__exportStar || function(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    }), t(requireConfetti(), e), t(requireSparkles(), e)), templates
}

function requireLib() {
    var e, i, t, r, n, o, a, s;
    return hasRequiredLib || (hasRequiredLib = 1, e = lib, i = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(e, t, r, i) {
        void 0 === i && (i = r), Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[r]
            }
        })
    } : function(e, t, r, i) {
        e[i = void 0 === i ? r : i] = t[r]
    }), t = commonjsGlobal && commonjsGlobal.__exportStar || function(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || i(t, e, r)
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = e.forceInit = e.util = e.math = e.random = e.sources = e.variation = e.Emitter = e.Particle = e.settings = e.scene = void 0, r = requireScene(), n = util, t(components, e), t(requireTemplates(), e), t(shapes, e), t(modules, e), e.scene = new n.Lazy(function() {
        if ("undefined" == typeof document || "undefined" == typeof window) throw new Error("It seems like you are trying to run party.js in a non-browser-like environment, which is not supported.");
        return new r.Scene
    }), o = settings, Object.defineProperty(e, "settings", {
        enumerable: !0,
        get: function() {
            return o.settings
        }
    }), a = particle, Object.defineProperty(e, "Particle", {
        enumerable: !0,
        get: function() {
            return a.Particle
        }
    }), s = emitter, Object.defineProperty(e, "Emitter", {
        enumerable: !0,
        get: function() {
            return s.Emitter
        }
    }), e.variation = variation, e.sources = sources, e.random = random, e.math = math, e.util = util, e.forceInit = function() {
        e.scene.current
    }, e.default = requireLib()), lib
}
var _templateObject$1, _templateObject, libExports = requireLib(),
    party = getDefaultExportFromCjs(libExports),
    config = {
        controlName: "Confetti Plugin v2",
        groupName: "Starter Kit",
        fallbackDisableSubmit: !1,
        description: "Enjoy the Confetti on the Form to celebrate",
        version: "1.0",
        properties: {
            startPartyTrigger: {
                type: "boolean",
                title: "Enable the Effect"
            },
            typeofEffect: {
                type: "string",
                enum: ["Confetti", "Sparkle"],
                title: "Select the Effect"
            }
        },
        events: ["ntx-value-change"],
        standardProperties: {
            fieldLabel: !0,
            defaultValue: !0
        }
    },
    styles = i(_templateObject$1 = _templateObject$1 || _taggedTemplateLiteral(["\n\t:host {\n\t\tdisplay: block;\n\t\ttext-align: center;\n\t}\n"])),
    Confetti = _decorate([e$1("confetti-form")], function(i, n) {
        return {
            F: function() {
                _inherits(r, n);
                var t = _createSuper(r);

                function r() {
                    var e;
                    return _classCallCheck(this, r), e = t.call(this), i(_assertThisInitialized(e)), e.sampleProperty = "", e
                }
                return _createClass(r)
            }(),
            d: [{
                kind: "field",
                static: !0,
                key: "getMetaConfig",
                value: function() {
                    return function() {
                        return config
                    }
                }
            }, {
                kind: "field",
                static: !0,
                key: "styles",
                value: function() {
                    return styles
                }
            }, {
                kind: "field",
                decorators: [e({
                    type: String
                })],
                key: "sampleProperty",
                value: void 0
            }, {
                kind: "field",
                decorators: [e({
                    type: Boolean
                })],
                key: "startPartyTrigger",
                value: void 0
            }, {
                kind: "field",
                decorators: [e({
                    type: String
                })],
                key: "typeofEffect",
                value: void 0
            }, {
                kind: "method",
                key: "render",
                value: function() {
                    return !0 === this.startPartyTrigger && this.startParty(), x(_templateObject = _templateObject || _taggedTemplateLiteral([' <div id="party-container"></div> ']))
                }
            }, {
                kind: "method",
                key: "startParty",
                value: function() {
                    var e = null == (e = this.shadowRoot) ? void 0 : e.getElementById("party-container");
                    e && ("Sparkle" === this.typeofEffect ? party.sparkles(e, {
                        count: 50,
                        speed: party.variation.range(50, 300)
                    }) : party.confetti(e, {
                        count: party.variation.range(20, 60)
                    }))
                }
            }]
        }
    }, s);
export {
    Confetti
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmV0dGktZm9ybS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9zZXR0aW5ncy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvdXRpbC9jb25maWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL2NvbXBvbmVudHMvY2lyY2xlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9jb21wb25lbnRzL2NvbG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9zeXN0ZW1zL21hdGguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL2NvbXBvbmVudHMvc3BsaW5lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9jb21wb25lbnRzL2dyYWRpZW50LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9jb21wb25lbnRzL251bWVyaWNTcGxpbmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL2NvbXBvbmVudHMvcmVjdC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvY29tcG9uZW50cy92ZWN0b3IuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3V0aWwvcm90YXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL2NvbXBvbmVudHMvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3V0aWwvcnVsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3V0aWwvbGF6eS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvZGVidWcuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3V0aWwvaW5kZXguanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL2NvbnRhaW5lcnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3N5c3RlbXMvcmFuZG9tLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9zeXN0ZW1zL3ZhcmlhdGlvbi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvcGFydGljbGVzL29wdGlvbnMvZW1pdHRlck9wdGlvbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3N5c3RlbXMvc291cmNlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvcGFydGljbGVzL29wdGlvbnMvZW1pc3Npb25PcHRpb25zLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9wYXJ0aWNsZXMvb3B0aW9ucy9yZW5kZXJPcHRpb25zLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9wYXJ0aWNsZXMvb3B0aW9ucy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvcGFydGljbGVzL3BhcnRpY2xlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9wYXJ0aWNsZXMvZW1pdHRlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvcGFydGljbGVzL3JlbmRlcmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi9zY2VuZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvc3lzdGVtcy9zaGFwZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3N5c3RlbXMvbW9kdWxlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvdGVtcGxhdGVzL2NvbmZldHRpLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3BhcnR5LWpzL2xpYi90ZW1wbGF0ZXMvc3BhcmtsZXMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcGFydHktanMvbGliL3RlbXBsYXRlcy9pbmRleC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9wYXJ0eS1qcy9saWIvaW5kZXguanMiLCIuLi8uLi9zcmMvY29tcG9uZW50cy9jb25mZXR0aS1mb3JtL2NvbmZldHRpLWZvcm0uY29uZmlnLnRzIiwiLi4vLi4vc3JjL2NvbXBvbmVudHMvY29uZmV0dGktZm9ybS9jb25mZXR0aS1mb3JtLnN0eWxlcy50cyIsIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbmZldHRpLWZvcm0vY29uZmV0dGktZm9ybS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnNldHRpbmdzID0gdm9pZCAwO1xyXG5leHBvcnRzLnNldHRpbmdzID0ge1xyXG4gICAgZGVidWc6IGZhbHNlLFxyXG4gICAgZ3Jhdml0eTogODAwLFxyXG4gICAgekluZGV4OiA5OTk5OSxcclxuICAgIHJlc3BlY3RSZWR1Y2VkTW90aW9uOiB0cnVlLFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLm92ZXJyaWRlRGVmYXVsdHMgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBSZXBsYWNlcyB0aGUgc3VwcGxpZWQgZGVmYXVsdHMgd2l0aCB0aGUgcHJvcGVydGllcyBzcGVjaWZpZWQgaW4gdGhlIG92ZXJyaWRlcy5cclxuICogVGhpcyByZXR1cm5zIGEgbmV3IG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIG92ZXJyaWRlRGVmYXVsdHMoZGVmYXVsdHMsIG92ZXJyaWRlcykge1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvdmVycmlkZXMpO1xyXG59XHJcbmV4cG9ydHMub3ZlcnJpZGVEZWZhdWx0cyA9IG92ZXJyaWRlRGVmYXVsdHM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2lyY2xlID0gdm9pZCAwO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNpcmNsZS5cclxuICovXHJcbnZhciBDaXJjbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgY2lyY2xlIGF0IHRoZSBzcGVjaWZpZWQgY29vcmRpbmF0ZXMsIHdpdGggYSBkZWZhdWx0IHJhZGl1cyBvZiAwLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDaXJjbGUoeCwgeSwgcmFkaXVzKSB7XHJcbiAgICAgICAgaWYgKHJhZGl1cyA9PT0gdm9pZCAwKSB7IHJhZGl1cyA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICB9XHJcbiAgICBDaXJjbGUuemVybyA9IG5ldyBDaXJjbGUoMCwgMCk7XHJcbiAgICByZXR1cm4gQ2lyY2xlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Db2xvciA9IHZvaWQgMDtcclxudmFyIG1hdGhfMSA9IHJlcXVpcmUoXCIuLi9zeXN0ZW1zL21hdGhcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgY29sb3IgY29uc2lzdGluZyBvZiBSR0IgdmFsdWVzLiBUaGUgY29tcG9uZW50cyBvZiBpdCBhcmVcclxuICogcmVwcmVzZW50ZWQgYXMgaW50ZWdlcnMgaW4gdGhlIHJhbmdlIDAgdG8gMjU1LlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c1xyXG4gKiBjb25zdCBhID0gbmV3IENvbG9yKDEyLCA1OSwgMjE5KTtcclxuICogY29uc3QgYiA9IENvbG9yLmZyb21IZXgoXCIjZmZhNjhkXCIpO1xyXG4gKiBjb25zdCByZXN1bHQgPSBhLm1peChiKTtcclxuICogYGBgXHJcbiAqL1xyXG52YXIgQ29sb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29sb3IgaW5zdGFuY2UgZnJvbSB0aGUgc3BlY2lmaWVkIFJHQiBjb21wb25lbnRzLlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDb2xvcihyLCBnLCBiKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KDMpO1xyXG4gICAgICAgIHRoaXMucmdiID0gW3IsIGcsIGJdO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSByLWNvbXBvbmVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1swXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vZGlmaWVzIHRoZSByLWNvbXBvbmVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgICAgICogTm90ZSB0aGF0IHRoaXMgYWxzbyBmbG9vcnMgdGhlIHZhbHVlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWzBdID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgXCJnXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBnLWNvbXBvbmVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vZGlmaWVzIHRoZSBnLWNvbXBvbmVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgICAgICogTm90ZSB0aGF0IHRoaXMgYWxzbyBmbG9vcnMgdGhlIHZhbHVlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWzFdID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgXCJiXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSBiLWNvbXBvbmVudCBvZiB0aGUgY29sb3IuXHJcbiAgICAgICAgICogTm90ZSB0aGF0IHRoaXMgYWxzbyBmbG9vcnMgdGhlIHZhbHVlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMl07XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2RpZmllcyB0aGUgYi1jb21wb25lbnQgb2YgdGhlIGNvbG9yLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWzJdID0gTWF0aC5mbG9vcih2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgXCJyZ2JcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHJnYi1jb21wb25lbnRzIG9mIHRoZSBjb2xvciwgYnVuZGxlZCBhcyBhIGNvcGllZCBhcnJheS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNpbXVsdGFuZW91c2x5IHVwZGF0ZXMgdGhlIHJnYi1jb21wb25lbnRzIG9mIHRoZSBjb2xvciwgYnkgcGFzc2luZyBhbiBhcnJheS5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5yID0gdmFsdWVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmcgPSB2YWx1ZXNbMV07XHJcbiAgICAgICAgICAgIHRoaXMuYiA9IHZhbHVlc1syXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvKipcclxuICAgICAqIE1peGVzIHRoZSB0d28gY29sb3IgdG9nZXRoZXIgd2l0aCBhbiBvcHRpb25hbCBtaXhpbmcgd2VpZ2h0LlxyXG4gICAgICogVGhpcyB3ZWlnaHQgaXMgMC41IGJ5IGRlZmF1bHQsIHBlcmZlY3RseSBhdmVyYWdpbmcgdGhlIGNvbG9yLlxyXG4gICAgICovXHJcbiAgICBDb2xvci5wcm90b3R5cGUubWl4ID0gZnVuY3Rpb24gKGNvbG9yLCB3ZWlnaHQpIHtcclxuICAgICAgICBpZiAod2VpZ2h0ID09PSB2b2lkIDApIHsgd2VpZ2h0ID0gMC41OyB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihtYXRoXzEubGVycCh0aGlzLnIsIGNvbG9yLnIsIHdlaWdodCksIG1hdGhfMS5sZXJwKHRoaXMuZywgY29sb3IuZywgd2VpZ2h0KSwgbWF0aF8xLmxlcnAodGhpcy5iLCBjb2xvci5iLCB3ZWlnaHQpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGhleGFkZWNpbWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBjb2xvciwgcHJlZml4ZWQgYnkgJyMnLlxyXG4gICAgICovXHJcbiAgICBDb2xvci5wcm90b3R5cGUudG9IZXggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGhleCA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiB2LnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7IH07XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgaGV4KHRoaXMucikgKyBoZXgodGhpcy5nKSArIGhleCh0aGlzLmIpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIGZvcm1hdHRlZCByZXByZXNlbnRhdGlvbiBvZiB0aGUgY29sb3IuXHJcbiAgICAgKi9cclxuICAgIENvbG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJyZ2IoXCIgKyB0aGlzLnZhbHVlcy5qb2luKFwiLCBcIikgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjb2xvciBmcm9tIHRoZSBzcGVjaWZpZWQgaGV4YWRlY2ltYWwgc3RyaW5nLlxyXG4gICAgICogVGhpcyBzdHJpbmcgY2FuIG9wdGlvbmFsbHkgYmUgcHJlZml4ZWQgYnkgJyMnLlxyXG4gICAgICovXHJcbiAgICBDb2xvci5mcm9tSGV4ID0gZnVuY3Rpb24gKGhleCkge1xyXG4gICAgICAgIGlmIChoZXguc3RhcnRzV2l0aChcIiNcIikpIHtcclxuICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcihwYXJzZUludChoZXguc3Vic3RyKDAsIDIpLCAxNiksIHBhcnNlSW50KGhleC5zdWJzdHIoMiwgMiksIDE2KSwgcGFyc2VJbnQoaGV4LnN1YnN0cig0LCAyKSwgMTYpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBjb2xvciBmcm9tIHRoZSBzcGVjaWZpZWQgSFNMIGNvbXBvbmVudHMuXHJcbiAgICAgKlxyXG4gICAgICogQHNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTQ5MzA2MC81NTA3NjI0XHJcbiAgICAgKi9cclxuICAgIENvbG9yLmZyb21Ic2wgPSBmdW5jdGlvbiAoaCwgcywgbCkge1xyXG4gICAgICAgIGggLz0gMzYwO1xyXG4gICAgICAgIHMgLz0gMTAwO1xyXG4gICAgICAgIGwgLz0gMTAwO1xyXG4gICAgICAgIGlmIChzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IobCwgbCwgbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaHVlMnJnYiA9IGZ1bmN0aW9uIChwLCBxLCB0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdCArPSAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPiAxKVxyXG4gICAgICAgICAgICAgICAgICAgIHQgLT0gMTtcclxuICAgICAgICAgICAgICAgIGlmICh0IDwgMSAvIDYpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHAgKyAocSAtIHApICogNiAqIHQ7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA8IDEgLyAyKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxO1xyXG4gICAgICAgICAgICAgICAgaWYgKHQgPCAyIC8gMylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcCArIChxIC0gcCkgKiAoMiAvIDMgLSB0KSAqIDY7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHRvMjU1ID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIE1hdGgubWluKDI1NSwgMjU2ICogdik7IH07XHJcbiAgICAgICAgICAgIHZhciBxID0gbCA8IDAuNSA/IGwgKiAoMSArIHMpIDogbCArIHMgLSBsICogcztcclxuICAgICAgICAgICAgdmFyIHAgPSAyICogbCAtIHE7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3IodG8yNTUoaHVlMnJnYihwLCBxLCBoICsgMSAvIDMpKSwgdG8yNTUoaHVlMnJnYihwLCBxLCBoKSksIHRvMjU1KGh1ZTJyZ2IocCwgcSwgaCAtIDEgLyAzKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgKDEsIDEsIDEpLlxyXG4gICAgICovXHJcbiAgICBDb2xvci53aGl0ZSA9IG5ldyBDb2xvcigyNTUsIDI1NSwgMjU1KTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyAoMCwgMCwgMCkuXHJcbiAgICAgKi9cclxuICAgIENvbG9yLmJsYWNrID0gbmV3IENvbG9yKDAsIDAsIDApO1xyXG4gICAgcmV0dXJuIENvbG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLkNvbG9yID0gQ29sb3I7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuYXBwcm94aW1hdGVseSA9IGV4cG9ydHMuY2xhbXAgPSBleHBvcnRzLmludmxlcnAgPSBleHBvcnRzLnNsZXJwID0gZXhwb3J0cy5sZXJwID0gZXhwb3J0cy5lcHNpbG9uID0gZXhwb3J0cy5yYWQyZGVnID0gZXhwb3J0cy5kZWcycmFkID0gdm9pZCAwO1xyXG4vKipcclxuICogQ29uc3RhbnQgY29lZmZpY2llbnQgdG8gY29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnMuXHJcbiAqL1xyXG5leHBvcnRzLmRlZzJyYWQgPSBNYXRoLlBJIC8gMTgwO1xyXG4vKipcclxuICogQ29uc3RhbnQgY29lZmZpY2llbnQgdG8gY29udmVydCByYWRpYW5zIHRvIGRlZ3JlZXMuXHJcbiAqL1xyXG5leHBvcnRzLnJhZDJkZWcgPSAxODAgLyBNYXRoLlBJO1xyXG4vKipcclxuICogQSBzbWFsbCB2YWx1ZSB0byBhcHByb3hpbWF0ZWx5IGNvbXBhcmUgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0cy5lcHNpbG9uID0gMC4wMDAwMDE7XHJcbi8qKlxyXG4gKiBMaW5lYXJseSBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIGFuZCBiIGJ5IHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcclxuICAgIHJldHVybiAoMSAtIHQpICogYSArIHQgKiBiO1xyXG59XHJcbmV4cG9ydHMubGVycCA9IGxlcnA7XHJcbi8qKlxyXG4gKiBTbW9vdGhseSBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIGFuZCBiIGJ5IHQgKHVzaW5nIGNvc2luZSBpbnRlcnBvbGF0aW9uKS5cclxuICovXHJcbmZ1bmN0aW9uIHNsZXJwKGEsIGIsIHQpIHtcclxuICAgIHJldHVybiBsZXJwKGEsIGIsICgxIC0gTWF0aC5jb3ModCAqIE1hdGguUEkpKSAvIDIpO1xyXG59XHJcbmV4cG9ydHMuc2xlcnAgPSBzbGVycDtcclxuLyoqXHJcbiAqIEludmVyc2VseSBsZXJwcyB2IGJldHdlZW4gYSBhbmQgYiB0byBmaW5kIHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpbnZsZXJwKGEsIGIsIHYpIHtcclxuICAgIHJldHVybiAodiAtIGEpIC8gKGIgLSBhKTtcclxufVxyXG5leHBvcnRzLmludmxlcnAgPSBpbnZsZXJwO1xyXG4vKipcclxuICogQ2xhbXBzIHRoZSBzcGVjaWZpZWQgdmFsdWUgYmV0d2VlbiBhIG1pbmltdW0gYW5kIGEgbWF4aW11bS5cclxuICovXHJcbmZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xyXG59XHJcbmV4cG9ydHMuY2xhbXAgPSBjbGFtcDtcclxuLyoqXHJcbiAqIENoZWNrcyBpZiBhIGlzIGFwcHJveGltYXRlbHkgZXF1YWwgdG8gYi5cclxuICovXHJcbmZ1bmN0aW9uIGFwcHJveGltYXRlbHkoYSwgYikge1xyXG4gICAgcmV0dXJuIE1hdGguYWJzKGEgLSBiKSA8IGV4cG9ydHMuZXBzaWxvbjtcclxufVxyXG5leHBvcnRzLmFwcHJveGltYXRlbHkgPSBhcHByb3hpbWF0ZWx5O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNwbGluZSA9IHZvaWQgMDtcclxudmFyIG1hdGhfMSA9IHJlcXVpcmUoXCIuLi9zeXN0ZW1zL21hdGhcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgc3BsaW5lIHRoYXQgY2FuIGJlIHVzZWQgdG8gY29udGludWVvdXNseSBldmFsdWF0ZSBhIGZ1bmN0aW9uXHJcbiAqIGJldHdlZW4ga2V5cy4gVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gaXMga2VwdCBnZW5lcmljLCBzbyB0aGUgZnVuY3Rpb25hbGl0eVxyXG4gKiBjYW4gZWFzaWx5IGJlIGltcGxlbWVudGVkIGZvciBzaW1pbGFyIGNvbnN0cnVjdHMsIHN1Y2ggYXMgZ3JhZGllbnRzLlxyXG4gKi9cclxudmFyIFNwbGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzcGxpbmUgaW5zdGFuY2UsIHVzaW5nIHRoZSBzcGVjaWZpZWQga2V5cy5cclxuICAgICAqIE5vdGUgdGhhdCB5b3UgaGF2ZSB0byBwYXNzIGF0IGxlYXN0IG9uZSBrZXkuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFNwbGluZSgpIHtcclxuICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGtleXNbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNwbGluZXMgcmVxdWlyZSBhdCBsZWFzdCBvbmUga2V5LlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5c1swXSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSB0cnlpbmcgdG8gcGFzcyBhbiBhcnJheSB0byB0aGUgc3BsaW5lIGNvbnN0cnVjdG9yLCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkLiBcIiArXHJcbiAgICAgICAgICAgICAgICBcIlRyeSB0byBzcHJlYWQgdGhlIGFycmF5IGludG8gdGhlIGNvbnN0cnVjdG9yIGluc3RlYWQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmtleXMgPSBrZXlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBFdmFsdWF0ZXMgdGhlIHNwbGluZSBhdCB0aGUgZ2l2ZW4gdGltZS5cclxuICAgICAqL1xyXG4gICAgU3BsaW5lLnByb3RvdHlwZS5ldmFsdWF0ZSA9IGZ1bmN0aW9uICh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMua2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBldmFsdWF0ZSBhIHNwbGluZSB3aXRoIG5vIGtleXMuXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5rZXlzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAvLyBUaGUgc3BsaW5lIG9ubHkgY29udGFpbnMgb25lIGtleSwgdGhlcmVmb3JlIGlzIGNvbnN0YW50LlxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlzWzBdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTb3J0IHRoZSBrZXlzIGFuZCBmaWd1cmUgb3V0IHRoZSBmaXJzdCBrZXkgYWJvdmUgdGhlIHBhc3NlZCB0aW1lLlxyXG4gICAgICAgIHZhciBhc2NlbmRpbmdLZXlzID0gdGhpcy5rZXlzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEudGltZSAtIGIudGltZTsgfSk7XHJcbiAgICAgICAgdmFyIHVwcGVyS2V5SW5kZXggPSBhc2NlbmRpbmdLZXlzLmZpbmRJbmRleChmdW5jdGlvbiAoZykgeyByZXR1cm4gZy50aW1lID4gdGltZTsgfSk7XHJcbiAgICAgICAgLy8gSWYgdGhlIGZvdW5kIGluZGV4IGlzIGVpdGhlciAwIG9yIC0xLCB0aGUgc3BlY2lmaWVkIHRpbWUgZmFsbHMgb3V0XHJcbiAgICAgICAgLy8gb2YgdGhlIHJhbmdlIG9mIHRoZSBzdXBwbGllZCBrZXlzLiBJbiB0aGF0IGNhc2UsIHRoZSB2YWx1ZSBvZiB0aGVcclxuICAgICAgICAvLyBuZWFyZXN0IGFwcGxpY2FudCBrZXkgaXMgcmV0dXJuZWQuXHJcbiAgICAgICAgaWYgKHVwcGVyS2V5SW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFzY2VuZGluZ0tleXNbMF0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1cHBlcktleUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXNjZW5kaW5nS2V5c1thc2NlbmRpbmdLZXlzLmxlbmd0aCAtIDFdLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBPdGhlcndpc2UsIGZpbmQgdGhlIGJvdW5kaW5nIGtleXMsIGFuZCBleHRyYXBvbGF0ZSB0aGUgdGltZSBiZXR3ZWVuXHJcbiAgICAgICAgLy8gdGhlIHR3by4gVGhpcyBpcyB0aGVuIHVzZWQgdG8gaW50ZXJwb2xhdGUgYmV0d2VlbiB0aGUgdHdvIGtleXMsXHJcbiAgICAgICAgLy8gdXNpbmcgdGhlIHByb3ZpZGVkIGltcGxlbWVudGF0aW9uLlxyXG4gICAgICAgIHZhciBsb3dlcktleSA9IGFzY2VuZGluZ0tleXNbdXBwZXJLZXlJbmRleCAtIDFdO1xyXG4gICAgICAgIHZhciB1cHBlcktleSA9IGFzY2VuZGluZ0tleXNbdXBwZXJLZXlJbmRleF07XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lZFRpbWUgPSBtYXRoXzEuaW52bGVycChsb3dlcktleS50aW1lLCB1cHBlcktleS50aW1lLCB0aW1lKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnBvbGF0ZShsb3dlcktleS52YWx1ZSwgdXBwZXJLZXkudmFsdWUsIGNvbnRhaW5lZFRpbWUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBTcGxpbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU3BsaW5lID0gU3BsaW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX3NwcmVhZEFycmF5ID0gKHRoaXMgJiYgdGhpcy5fX3NwcmVhZEFycmF5KSB8fCBmdW5jdGlvbiAodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdyYWRpZW50ID0gdm9pZCAwO1xyXG52YXIgc3BsaW5lXzEgPSByZXF1aXJlKFwiLi9zcGxpbmVcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgZ3JhZGllbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG11bHRpcGxlIGNvbG9yLlxyXG4gKi9cclxudmFyIEdyYWRpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKEdyYWRpZW50LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gR3JhZGllbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcnBvbGF0ZXMgYmV0d2VlbiB0d28gY29sb3Igb24gdGhlIGdyYWRpZW50LlxyXG4gICAgICovXHJcbiAgICBHcmFkaWVudC5wcm90b3R5cGUuaW50ZXJwb2xhdGUgPSBmdW5jdGlvbiAoYSwgYiwgdCkge1xyXG4gICAgICAgIHJldHVybiBhLm1peChiLCB0KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBzb2xpZCBncmFkaWVudCBmcm9tIHRoZSBnaXZlbiBjb2xvci5cclxuICAgICAqL1xyXG4gICAgR3JhZGllbnQuc29saWQgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyYWRpZW50KHsgdmFsdWU6IGNvbG9yLCB0aW1lOiAwLjUgfSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgZ3JhZGllbnQgd2l0aCBldmVubHkgc3BhY2VkIGtleXMgZnJvbSB0aGUgZ2l2ZW4gY29sb3JzLlxyXG4gICAgICovXHJcbiAgICBHcmFkaWVudC5zaW1wbGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbG9ycyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbG9yc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RlcCA9IDEgLyAoY29sb3JzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiBuZXcgKEdyYWRpZW50LmJpbmQuYXBwbHkoR3JhZGllbnQsIF9fc3ByZWFkQXJyYXkoW3ZvaWQgMF0sIGNvbG9ycy5tYXAoZnVuY3Rpb24gKGNvbG9yLCBpbmRleCkgeyByZXR1cm4gKHtcclxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yLFxyXG4gICAgICAgICAgICB0aW1lOiBpbmRleCAqIHN0ZXAsXHJcbiAgICAgICAgfSk7IH0pKSkpKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdyYWRpZW50O1xyXG59KHNwbGluZV8xLlNwbGluZSkpO1xyXG5leHBvcnRzLkdyYWRpZW50ID0gR3JhZGllbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk51bWVyaWNTcGxpbmUgPSB2b2lkIDA7XHJcbnZhciBtYXRoXzEgPSByZXF1aXJlKFwiLi4vc3lzdGVtcy9tYXRoXCIpO1xyXG52YXIgc3BsaW5lXzEgPSByZXF1aXJlKFwiLi9zcGxpbmVcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgc3BsaW5lIHRoYXQgY2FuIHRha2UgbnVtZXJpYyB2YWx1ZXMuXHJcbiAqL1xyXG52YXIgTnVtZXJpY1NwbGluZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhOdW1lcmljU3BsaW5lLCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gTnVtZXJpY1NwbGluZSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFNtb290aGx5IGludGVycG9sYXRlcyBiZXR3ZWVuIHR3byBrZXlzIG9uIHRoZSBzcGxpbmUuXHJcbiAgICAgKi9cclxuICAgIE51bWVyaWNTcGxpbmUucHJvdG90eXBlLmludGVycG9sYXRlID0gZnVuY3Rpb24gKGEsIGIsIHQpIHtcclxuICAgICAgICByZXR1cm4gbWF0aF8xLnNsZXJwKGEsIGIsIHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBOdW1lcmljU3BsaW5lO1xyXG59KHNwbGluZV8xLlNwbGluZSkpO1xyXG5leHBvcnRzLk51bWVyaWNTcGxpbmUgPSBOdW1lcmljU3BsaW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJlY3QgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVjdGFuZ2xlIHdpdGggYW4gb3JpZ2luIGFuZCBzaXplLlxyXG4gKi9cclxudmFyIFJlY3QgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBpZiAod2lkdGggPT09IHZvaWQgMCkgeyB3aWR0aCA9IDA7IH1cclxuICAgICAgICBpZiAoaGVpZ2h0ID09PSB2b2lkIDApIHsgaGVpZ2h0ID0gMDsgfVxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBuZXcgZG9jdW1lbnQtc3BhY2UgcmVjdGFuZ2xlIGZyb20gdGhlIHZpZXdwb3J0J3MgYm91bmRzLlxyXG4gICAgICovXHJcbiAgICBSZWN0LmZyb21TY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWN0KHdpbmRvdy5zY3JvbGxYLCB3aW5kb3cuc2Nyb2xsWSwgd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgbmV3IGRvY3VtZW50LXNwYWNlIHJlY3RhbmdsZSBmcm9tIHRoZSBzcGVjaWZpZWQgZWxlbWVudC5cclxuICAgICAqL1xyXG4gICAgUmVjdC5mcm9tRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHIgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVjdCh3aW5kb3cuc2Nyb2xsWCArIHIueCwgd2luZG93LnNjcm9sbFkgKyByLnksIHIud2lkdGgsIHIuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBSZWN0Lnplcm8gPSBuZXcgUmVjdCgwLCAwKTtcclxuICAgIHJldHVybiBSZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLlJlY3QgPSBSZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVmVjdG9yID0gdm9pZCAwO1xyXG52YXIgbWF0aF8xID0gcmVxdWlyZShcIi4uL3N5c3RlbXMvbWF0aFwiKTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBzdHJ1Y3R1cmUgdXNlZCB0byBwcm9jZXNzIHZlY3RvcnMuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIE5vdGUgdGhhdCB0aGUgb3BlcmF0aW9ucyBpbiB0aGlzIGNsYXNzIHdpbGwgKipub3QqKiBtb2RpZnkgdGhlIG9yaWdpbmFsIHZlY3RvcixcclxuICogZXhjZXB0IGZvciB0aGUgcHJvcGVydHkgYXNzaWdubWVudHMuIFRoaXMgaXMgdG8gZW5zdXJlIHRoYXQgdmVjdG9ycyBhcmUgbm90XHJcbiAqIHVuaW50ZW50aW9uYWxseSBtb2RpZmllZC5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgdHNcclxuICogY29uc3QgdmVjdG9yQSA9IG5ldyBWZWN0b3IoMSwgMywgNSk7XHJcbiAqIGNvbnN0IHZlY3RvckIgPSBuZXcgVmVjdG9yKDIsIDMsIDEpO1xyXG4gKiBjb25zdCB2ZWN0b3JDID0gdmVjdG9yQS5hZGQodmVjdG9yQik7IC8vICgzLCA2LCA2KVxyXG4gKiBgYGBcclxuICovXHJcbnZhciBWZWN0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgdmVjdG9yIHdpdGggb3B0aW9uYWwgeC0sIHktLCBhbmQgei1jb21wb25lbnRzLlxyXG4gICAgICogT21pdHRlZCBjb21wb25lbnRzIGFyZSBkZWZhdWx0ZWQgdG8gMC5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yKHgsIHksIHopIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMDsgfVxyXG4gICAgICAgIGlmICh6ID09PSB2b2lkIDApIHsgeiA9IDA7IH1cclxuICAgICAgICB0aGlzLnZhbHVlcyA9IG5ldyBGbG9hdDMyQXJyYXkoMyk7XHJcbiAgICAgICAgdGhpcy54eXogPSBbeCwgeSwgel07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ4XCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBSZXR1cm5zIHRoZSB4LWNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBNb2RpZmllcyB0aGUgeC1jb21wb25lbnQgb2YgdGhlIHZlY3Rvci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IucHJvdG90eXBlLCBcInlcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHktY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1sxXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIE1vZGlmaWVzIHRoZSB5LWNvbXBvbmVudCBvZiB0aGUgdmVjdG9yLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWzFdID0gdmFsdWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3Rvci5wcm90b3R5cGUsIFwielwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUmV0dXJucyB0aGUgei1jb21wb25lbnQgb2YgdGhlIHZlY3Rvci5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzWzJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogTW9kaWZpZXMgdGhlIHotY29tcG9uZW50IG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbMl0gPSB2YWx1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yLnByb3RvdHlwZSwgXCJ4eXpcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFJldHVybnMgdGhlIHh5ei1jb21wb25lbnRzIG9mIHRoZSB2ZWN0b3IsIGJ1bmRsZWQgYXMgYSBjb3BpZWQgYXJyYXkuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnksIHRoaXMuel07XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTaW11bHRhbmVvdXNseSB1cGRhdGVzIHRoZSB4eXotY29tcG9uZW50cyBvZiB0aGUgdmVjdG9yLCBieSBwYXNzaW5nIGFuIGFycmF5LlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1swXSA9IHZhbHVlc1swXTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNbMV0gPSB2YWx1ZXNbMV07XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzWzJdID0gdmFsdWVzWzJdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWN0b3IuXHJcbiAgICAgKi9cclxuICAgIFZlY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXJNYWduaXR1ZGUoKSk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBzcXVhcmVkIGxlbmd0aCBvZiB0aGUgdmVjdG9yLlxyXG4gICAgICovXHJcbiAgICBWZWN0b3IucHJvdG90eXBlLnNxck1hZ25pdHVkZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55ICsgdGhpcy56ICogdGhpcy56O1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogQWRkcyB0aGUgdHdvIHZlY3RvcnMgdG9nZXRoZXIsIGNvbXBvbmVudC13aXNlLlxyXG4gICAgICovXHJcbiAgICBWZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnggKyB2ZWN0b3IueCwgdGhpcy55ICsgdmVjdG9yLnksIHRoaXMueiArIHZlY3Rvci56KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFN1YnRyYWN0cyB0aGUgcmlnaHQgdmVjdG9yIGZyb20gdGhlIGxlZnQgb25lLCBjb21wb25lbnQtd2lzZS5cclxuICAgICAqL1xyXG4gICAgVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uICh2ZWN0b3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih0aGlzLnggLSB2ZWN0b3IueCwgdGhpcy55IC0gdmVjdG9yLnksIHRoaXMueiAtIHZlY3Rvci56KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNjYWxlcyB0aGUgbGVmdGhhbmQgdmVjdG9yIGJ5IGFub3RoZXIgdmVjdG9yIG9yIGJ5IGEgbnVtYmVyLlxyXG4gICAgICovXHJcbiAgICBWZWN0b3IucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHNjYWxhcikge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygc2NhbGFyID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHRoaXMueCAqIHNjYWxhciwgdGhpcy55ICogc2NhbGFyLCB0aGlzLnogKiBzY2FsYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy54ICogc2NhbGFyLngsIHRoaXMueSAqIHNjYWxhci55LCB0aGlzLnogKiBzY2FsYXIueik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogTm9ybWFsaXplcyB0aGUgdmVjdG9yIHRvIGEgbGVuZ3RoIG9mIDEuIElmIHRoZSBsZW5ndGggd2FzIHByZXZpb3VzbHkgemVybyxcclxuICAgICAqIHRoZW4gYSB6ZXJvLWxlbmd0aCB2ZWN0b3Igd2lsbCBiZSByZXR1cm5lZC5cclxuICAgICAqL1xyXG4gICAgVmVjdG9yLnByb3RvdHlwZS5ub3JtYWxpemVkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBtYWduaXR1ZGUgPSB0aGlzLm1hZ25pdHVkZSgpO1xyXG4gICAgICAgIGlmIChtYWduaXR1ZGUgIT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUoMSAvIG1hZ25pdHVkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgKFZlY3Rvci5iaW5kLmFwcGx5KFZlY3RvciwgX19zcHJlYWRBcnJheShbdm9pZCAwXSwgdGhpcy54eXopKSkoKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGFuZ2xlIGJldHdlZW4gdHdvIHZlY3RvcnMsIGluIGRlZ3JlZXMuXHJcbiAgICAgKi9cclxuICAgIFZlY3Rvci5wcm90b3R5cGUuYW5nbGUgPSBmdW5jdGlvbiAodmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChtYXRoXzEucmFkMmRlZyAqXHJcbiAgICAgICAgICAgIE1hdGguYWNvcygodGhpcy54ICogdmVjdG9yLnggKyB0aGlzLnkgKiB2ZWN0b3IueSArIHRoaXMueiAqIHZlY3Rvci56KSAvXHJcbiAgICAgICAgICAgICAgICAodGhpcy5tYWduaXR1ZGUoKSAqIHZlY3Rvci5tYWduaXR1ZGUoKSkpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIGNyb3NzLXByb2R1Y3Qgb2YgdHdvIHZlY3RvcnMuXHJcbiAgICAgKi9cclxuICAgIFZlY3Rvci5wcm90b3R5cGUuY3Jvc3MgPSBmdW5jdGlvbiAodmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IodGhpcy55ICogdmVjdG9yLnogLSB0aGlzLnogKiB2ZWN0b3IueSwgdGhpcy56ICogdmVjdG9yLnggLSB0aGlzLnggKiB2ZWN0b3IueiwgdGhpcy54ICogdmVjdG9yLnkgLSB0aGlzLnkgKiB2ZWN0b3IueCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBkb3QtcHJvZHVjdCBvZiB0d28gdmVjdG9ycy5cclxuICAgICAqL1xyXG4gICAgVmVjdG9yLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodmVjdG9yKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLm1hZ25pdHVkZSgpICpcclxuICAgICAgICAgICAgdmVjdG9yLm1hZ25pdHVkZSgpICpcclxuICAgICAgICAgICAgTWF0aC5jb3MobWF0aF8xLmRlZzJyYWQgKiB0aGlzLmFuZ2xlKHZlY3RvcikpKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBmb3JtYXR0ZWQgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZlY3Rvci5cclxuICAgICAqL1xyXG4gICAgVmVjdG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJWZWN0b3IoXCIgKyB0aGlzLnZhbHVlcy5qb2luKFwiLCBcIikgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgdmVjdG9yIGZyb20gYW4gYW5nbGUsIGluIGRlZ3JlZXMuIE5vdGUgdGhhdCB0aGUgei1jb21wb25lbnQgd2lsbCBiZSB6ZXJvLlxyXG4gICAgICovXHJcbiAgICBWZWN0b3IuZnJvbTJkQW5nbGUgPSBmdW5jdGlvbiAoYW5nbGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcihNYXRoLmNvcyhhbmdsZSAqIG1hdGhfMS5kZWcycmFkKSwgTWF0aC5zaW4oYW5nbGUgKiBtYXRoXzEuZGVnMnJhZCkpO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyAoMCwgMCwgMCkuXHJcbiAgICAgKi9cclxuICAgIFZlY3Rvci56ZXJvID0gbmV3IFZlY3RvcigwLCAwLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyAoMSwgMSwgMSkuXHJcbiAgICAgKi9cclxuICAgIFZlY3Rvci5vbmUgPSBuZXcgVmVjdG9yKDEsIDEsIDEpO1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zICgxLCAwLCAwKS5cclxuICAgICAqL1xyXG4gICAgVmVjdG9yLnJpZ2h0ID0gbmV3IFZlY3RvcigxLCAwLCAwKTtcclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyAoMCwgMSwgMCkuXHJcbiAgICAgKi9cclxuICAgIFZlY3Rvci51cCA9IG5ldyBWZWN0b3IoMCwgMSwgMCk7XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgKDAsIDAsIDEpLlxyXG4gICAgICovXHJcbiAgICBWZWN0b3IuZm9yd2FyZCA9IG5ldyBWZWN0b3IoMCwgMCwgMSk7XHJcbiAgICByZXR1cm4gVmVjdG9yO1xyXG59KCkpO1xyXG5leHBvcnRzLlZlY3RvciA9IFZlY3RvcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5yb3RhdGlvblRvTm9ybWFsID0gdm9pZCAwO1xyXG52YXIgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHNcIik7XHJcbnZhciBtYXRoXzEgPSByZXF1aXJlKFwiLi4vc3lzdGVtcy9tYXRoXCIpO1xyXG4vKipcclxuICogQ29udmVydHMgdGhlIHNwZWNpZmllZCBldWxlciByb3RhdGlvbiAoaW4gZGVncmVlcykgaW50byB0aGUgY29ycmVzcG9uZGluZyBub3JtYWwgdmVjdG9yLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBUaGUgbm9ybWFsIGlzIGNhbGN1bGF0ZWQgYnkgcGxhY2luZyBhIChmaWd1cmF0aXZlKSBwbGFuZSBpbiBhIGNvb3JkaW5hdGUtc3lzdGVtJ3NcclxuICogb3JpZ2luLCBhbmQgcm90YXRpbmcgaXQgYnkgdGhlIHNwZWNpZmllZCBhbmdsZXMuIE5vdGUgdGhhdCB0aGUgei1jb21wb25lbnQgb2YgdGhlXHJcbiAqIHJvdGF0aW9uIGlzIGlycmVsZXZhbnQgZm9yIHRoZSBub3JtYWwgYW5kIGNhbiBiZSBpZ25vcmVkLiBUaGVuLCB0d28gdmVjdG9yc1xyXG4gKiBkZXNjcmliaW5nIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcGxhbmUgYXJlIGNhbGN1bGF0ZWQuIFRoZWlyIGNyb3NzIHByb2R1Y3RcclxuICogZGVub3RlcyB0aGUgbm9ybWFsIHZlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHJvdGF0aW9uIFRoZSBldWxlciByb3RhdGlvbiBhbmdsZXMgKGluIGRlZ3JlZXMpIHRvIGNhbGN1bGF0ZSB0aGUgbm9ybWFsIGZvci5cclxuICovXHJcbmZ1bmN0aW9uIHJvdGF0aW9uVG9Ob3JtYWwocm90YXRpb24pIHtcclxuICAgIHZhciBhbHBoYSA9IHJvdGF0aW9uLnggKiBtYXRoXzEuZGVnMnJhZDtcclxuICAgIHZhciBiZXRhID0gcm90YXRpb24ueSAqIG1hdGhfMS5kZWcycmFkO1xyXG4gICAgdmFyIGEgPSBuZXcgY29tcG9uZW50c18xLlZlY3RvcihNYXRoLmNvcyhiZXRhKSwgMCwgTWF0aC5zaW4oYmV0YSkpO1xyXG4gICAgdmFyIGIgPSBuZXcgY29tcG9uZW50c18xLlZlY3RvcigwLCBNYXRoLmNvcyhhbHBoYSksIE1hdGguc2luKGFscGhhKSk7XHJcbiAgICByZXR1cm4gYS5jcm9zcyhiKTtcclxufVxyXG5leHBvcnRzLnJvdGF0aW9uVG9Ob3JtYWwgPSByb3RhdGlvblRvTm9ybWFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NpcmNsZVwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb2xvclwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9ncmFkaWVudFwiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9udW1lcmljU3BsaW5lXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3JlY3RcIiksIGV4cG9ydHMpO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdmVjdG9yXCIpLCBleHBvcnRzKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5kZXNwYXduaW5nUnVsZXMgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBDb250YWlucyBhIHNldCBvZiBwcmUtZGVmaW5lZCBwYXJ0aWNsZSBkZXNwYXduaW5nIHJ1bGVzLlxyXG4gKi9cclxuZXhwb3J0cy5kZXNwYXduaW5nUnVsZXMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEEgcnVsZSB0aGF0IGRlc3Bhd25zIGEgcGFydGljbGUgb25jZSBpdHMgbGlmZXRpbWUgaXMgb3Zlci5cclxuICAgICAqL1xyXG4gICAgbGlmZXRpbWU6IGZ1bmN0aW9uIChwYXJ0aWNsZSkge1xyXG4gICAgICAgIHJldHVybiBwYXJ0aWNsZS5saWZldGltZSA8PSAwO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQSBydWxlIHRoYXQgZGVzcGF3bnMgYSBwYXJ0aWNsZSBvbmNlIGl0cyB5LWNvb3JkaW5hdGUgaXMgb3V0c2lkZSBvZiB0aGUgZG9jdW1lbnQuXHJcbiAgICAgKi9cclxuICAgIGJvdW5kczogZnVuY3Rpb24gKHBhcnRpY2xlKSB7XHJcbiAgICAgICAgLy8gR2V0IGRvY3VtZW50IGhlaWdodDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ0MDc3Nzc3LzU1MDc2MjRcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICByZXR1cm4gcGFydGljbGUubG9jYXRpb24ueSA+IGhlaWdodDtcclxuICAgIH0sXHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTGF6eSA9IHZvaWQgMDtcclxuLyoqXHJcbiAqIEEgd3JhcHBlciBjbGFzcyB0byBsYXppbHkgaW5pdGlhbGl6ZSBhIHZhbHVlLlxyXG4gKiBTdXBwb3J0cyBjdXN0b20gZmFjdG9yeSBhbmQgcHJlZGljYXRlIG1ldGhvZHMuXHJcbiAqL1xyXG52YXIgTGF6eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExhenkoZmFjdG9yeSwgZXhpc3RzKSB7XHJcbiAgICAgICAgaWYgKGV4aXN0cyA9PT0gdm9pZCAwKSB7IGV4aXN0cyA9IExhenkuZGVmYXVsdEV4aXN0czsgfVxyXG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IGZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy5leGlzdHMgPSBleGlzdHM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGF6eS5wcm90b3R5cGUsIFwiY3VycmVudFwiLCB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhlIGxhenkgb2JqZWN0LiBXaWxsIGJlIGluaXRpYWxpemVkLCBpZiB0aGUgJ2V4aXN0cydcclxuICAgICAgICAgKiBwcmVkaWNhdGUgZG9lc24ndCBtYXRjaC5cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4aXN0cyh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZmFjdG9yeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExhenkuZGVmYXVsdEV4aXN0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExhenk7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTGF6eSA9IExhenk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19zcHJlYWRBcnJheSA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheSkgfHwgZnVuY3Rpb24gKHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5EZWJ1ZyA9IHZvaWQgMDtcclxudmFyIGNvbnRhaW5lcnNfMSA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lcnNcIik7XHJcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4vc2V0dGluZ3NcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgdXRpbGl0eSBtb2R1bGUgdG8gdmlldyBkZWJ1ZyBpbmZvcm1hdGlvbiBpbnNpZGUgdGhlIERPTS5cclxuICogVGhpcyBpcyBkaXNhYmxlZCBieSBkZWZhdWx0IGFuZCBuZWVkcyB0byBtYW51YWxseSBiZSBlbmFibGVkIGJ5IHNldHRpbmdcclxuICogdGhlICcuZW5hYmxlZCcgZmllbGQgdG8gdHJ1ZS5cclxuICpcclxuICogV2hpbGUgZGlzYWJsZWQsIHRoZSB1dGlsaXR5IHdpbGwgbm90IGZldGNoIHN0YXRzIGFuZCB1cGRhdGUgaXRzZWxmLlxyXG4gKi9cclxudmFyIERlYnVnID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZWdpc3RlcnMgYSBuZXcgZGVidWcgdXRpbGl0eSB0aGF0IGlzIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBzY2VuZS5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2NlbmUgVGhlIHNjZW5lIHRvIGF0dGFjaCB0by5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gRGVidWcoc2NlbmUpIHtcclxuICAgICAgICB0aGlzLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIHJhdGUgYXQgd2hpY2ggdGhlIGRlYnVnIGludGVyZmFjZSBzaG91bGQgcmVmcmVzaCBpdHNlbGYgKHBlciBzZWNvbmQpLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMucmVmcmVzaFJhdGUgPSA4O1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSB0aW1lciBjb3VudGluZyBkb3duIHRvIHJlZnJlc2hlcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlZnJlc2hUaW1lciA9IDEgLyB0aGlzLnJlZnJlc2hSYXRlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYSB0aWNrIGV2ZW50IGluIHRoZSBpbnRlcmZhY2UuIFRoaXMgY2hlY2tzIGlmIGVub3VnaCBoYXMgcGFzc2VkIHRvXHJcbiAgICAgKiB0cmlnZ2VyIGEgcmVmcmVzaCwgYW5kIGlmIHNvLCBmZXRjaGVzIHRoZSBkZWJ1ZyBpbmZvcm1hdGlvbiBhbmQgdXBkYXRlcyB0aGUgRE9NLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkZWx0YSBUaGUgdGltZSB0aGF0IGhhcyBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpY2suXHJcbiAgICAgKi9cclxuICAgIERlYnVnLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKGRlbHRhKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGNvbnRhaW5lcnNfMS5kZWJ1Z0NvbnRhaW5lci5jdXJyZW50O1xyXG4gICAgICAgIC8vIElmIHRoZSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgZG9lcyBub3QgbWF0Y2ggdGhlIHN0eWxlIGluZmVycmVkIGZyb20gdGhlXHJcbiAgICAgICAgLy8gZW5hYmxlZC1zdGF0ZSwgdXBkYXRlIGl0LlxyXG4gICAgICAgIHZhciBkaXNwbGF5U3R5bGUgPSBzZXR0aW5nc18xLnNldHRpbmdzLmRlYnVnID8gXCJibG9ja1wiIDogXCJub25lXCI7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ICE9PSBkaXNwbGF5U3R5bGUpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5U3R5bGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2V0dGluZ3NfMS5zZXR0aW5ncy5kZWJ1Zykge1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaW50ZXJmYWNlIGlzIG5vdCBlbmFibGVkLCBkb24ndCBmZXRjaCBvciB1cGRhdGUgYW55IGluZm9zLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaFRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLnJlZnJlc2hUaW1lciA+IDEgLyB0aGlzLnJlZnJlc2hSYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRpbWVyID0gMDtcclxuICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBjb250YWluZXIgd2l0aCB0aGUgZmV0Y2hlZCBpbmZvcm1hdGlvbiBqb2luZWQgb24gbGluZSBicmVha3MuXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLmdldERlYnVnSW5mb3JtYXRpb24oZGVsdGEpLmpvaW4oXCI8YnI+XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIEZldGNoZXMgdGhlIGRlYnVnIGluZm9ybWF0aW9uIGZyb20gdGhlIHNwZWNpZmllZCBkZWx0YSBhbmQgdGhlIGxpbmtlZCBzY2VuZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiBkZWJ1Z2dpbmcgaW5mb3JtYXRpb24sIGZvcm1hdHRlZCBhcyBIVE1MLlxyXG4gICAgICovXHJcbiAgICBEZWJ1Zy5wcm90b3R5cGUuZ2V0RGVidWdJbmZvcm1hdGlvbiA9IGZ1bmN0aW9uIChkZWx0YSkge1xyXG4gICAgICAgIC8vIENvdW50IGVtaXR0ZXJzIGFuZCBwYXJ0aWNsZXMuXHJcbiAgICAgICAgdmFyIGVtaXR0ZXJzID0gdGhpcy5zY2VuZS5lbWl0dGVycy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHBhcnRpY2xlcyA9IHRoaXMuc2NlbmUuZW1pdHRlcnMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cikgeyByZXR1cm4gYWNjICsgY3VyLnBhcnRpY2xlcy5sZW5ndGg7IH0sIDApO1xyXG4gICAgICAgIHZhciBpbmZvcyA9IFtcclxuICAgICAgICAgICAgXCI8Yj5wYXJ0eS5qcyBEZWJ1ZzwvYj5cIixcclxuICAgICAgICAgICAgXCItLS0tLS0tLS0tLS0tLVwiLFxyXG4gICAgICAgICAgICBcIkZQUzogXCIgKyBNYXRoLnJvdW5kKDEgLyBkZWx0YSksXHJcbiAgICAgICAgICAgIFwiRW1pdHRlcnM6IFwiICsgZW1pdHRlcnMsXHJcbiAgICAgICAgICAgIFwiUGFydGljbGVzOiBcIiArIHBhcnRpY2xlcyxcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vIEVtaXR0ZXIgaW5mb3JtYXRpb25zIGFyZSBmb3JtYXR0ZWQgdXNpbmcgdGhlaXIgaW5kZXgsIGludGVybmFsIHRpbWVyXHJcbiAgICAgICAgLy8gYW5kIHRvdGFsIHBhcnRpY2xlIGNvdW50LlxyXG4gICAgICAgIHZhciBlbWl0dGVySW5mb3MgPSB0aGlzLnNjZW5lLmVtaXR0ZXJzLm1hcChmdW5jdGlvbiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyB0aGUgY3VycmVudCBsb29wIGFuZCB0aGUgdG90YWwgbG9vcHMuXHJcbiAgICAgICAgICAgICAgICBcIlxcdTJCNkY6IFwiICsgKGVtaXR0ZXJbXCJjdXJyZW50TG9vcFwiXSArIDEpICsgXCIvXCIgKyAoZW1pdHRlci5vcHRpb25zLmxvb3BzID49IDAgPyBlbWl0dGVyLm9wdGlvbnMubG9vcHMgOiBcIuKInlwiKSxcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIGFtb3VudCBvZiBwYXJ0aWNsZSBjb250YWluZWQuXHJcbiAgICAgICAgICAgICAgICBcIlxcdTAzQTNwOiBcIiArIGVtaXR0ZXIucGFydGljbGVzLmxlbmd0aCxcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgdGhlIGludGVybmFsIHRpbWVyLlxyXG4gICAgICAgICAgICAgICAgIWVtaXR0ZXIuaXNFeHBpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcIlxcdTAzQTN0OiBcIiArIGVtaXR0ZXJbXCJkdXJhdGlvblRpbWVyXCJdLnRvRml4ZWQoMykgKyBcInNcIlxyXG4gICAgICAgICAgICAgICAgICAgIDogXCI8aT5leHBpcmVkPC9pPlwiLFxyXG4gICAgICAgICAgICBdLmpvaW4oXCIsIFwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpbmZvcy5wdXNoLmFwcGx5KGluZm9zLCBfX3NwcmVhZEFycmF5KFtcIi0tLS0tLS0tLS0tLS0tXCJdLCBlbWl0dGVySW5mb3MpKTtcclxuICAgICAgICByZXR1cm4gaW5mb3M7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlYnVnO1xyXG59KCkpO1xyXG5leHBvcnRzLkRlYnVnID0gRGVidWc7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19leHBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2V4cG9ydFN0YXIpIHx8IGZ1bmN0aW9uKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29uZmlnXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3JvdGF0aW9uXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3J1bGVzXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xhenlcIiksIGV4cG9ydHMpO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnBhcnRpY2xlQ29udGFpbmVyID0gZXhwb3J0cy5kZWJ1Z0NvbnRhaW5lciA9IGV4cG9ydHMucm9vdENvbnRhaW5lciA9IHZvaWQgMDtcclxudmFyIHNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9zZXR0aW5nc1wiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcbi8qKlxyXG4gKiBUaGUgcHJlZml4IHRvIGFwcGx5IHRvIHRoZSBjb250YWluZXJzLlxyXG4gKi9cclxudmFyIGNvbnRhaW5lclByZWZpeCA9IFwicGFydHktanMtXCI7XHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdGhlIHNwZWNpZmllZCBjb250YWluZXIgaXMgJ2FjdGl2ZScsIG1lYW5pbmcgbm90IHVuZGVmaW5lZCBhbmQgYXR0YWNoZWQgdG8gdGhlIERPTS5cclxuICovXHJcbmZ1bmN0aW9uIGlzQ29udGFpbmVyQWN0aXZlKGNvbnRhaW5lcikge1xyXG4gICAgcmV0dXJuIGNvbnRhaW5lciAmJiBjb250YWluZXIuaXNDb25uZWN0ZWQ7XHJcbn1cclxuLyoqXHJcbiAqIEEgZ2VuZXJpYyBmYWN0b3J5IG1ldGhvZCBmb3IgY3JlYXRpbmcgYSBET00gY29udGFpbmVyLiBQcmVmaXhlcyB0aGUgc3BlY2lmaWVkIG5hbWUgd2l0aCB0aGVcclxuICogY29udGFpbmVyIHByZWZpeCwgYXBwbGllcyB0aGUgc3R5bGVzIGFuZCBhZGRzIGl0IHVuZGVyIHRoZSBwYXJlbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBtYWtlQ29udGFpbmVyKG5hbWUsIHN0eWxlcywgcGFyZW50KSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhaW5lci5pZCA9IGNvbnRhaW5lclByZWZpeCArIG5hbWU7XHJcbiAgICBPYmplY3QuYXNzaWduKGNvbnRhaW5lci5zdHlsZSwgc3R5bGVzKTtcclxuICAgIHJldHVybiBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxufVxyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgcm9vdCBjb250YWluZXIgZm9yIERPTSBlbGVtZW50cyBvZiB0aGUgbGlicmFyeS5cclxuICovXHJcbmV4cG9ydHMucm9vdENvbnRhaW5lciA9IG5ldyB1dGlsXzEuTGF6eShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbWFrZUNvbnRhaW5lcihcImNvbnRhaW5lclwiLCB7XHJcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcclxuICAgICAgICBsZWZ0OiBcIjBcIixcclxuICAgICAgICB0b3A6IFwiMFwiLFxyXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXHJcbiAgICAgICAgcG9pbnRlckV2ZW50czogXCJub25lXCIsXHJcbiAgICAgICAgdXNlclNlbGVjdDogXCJub25lXCIsXHJcbiAgICAgICAgekluZGV4OiBzZXR0aW5nc18xLnNldHRpbmdzLnpJbmRleC50b1N0cmluZygpLFxyXG4gICAgfSwgZG9jdW1lbnQuYm9keSk7XHJcbn0sIGlzQ29udGFpbmVyQWN0aXZlKTtcclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgdGhlIGRlYnVnZ2luZyBjb250YWluZXIgb2YgdGhlIGxpYnJhcnksIG9ubHkgYWN0aXZlIGlmIGRlYnVnZ2luZyBpcyBlbmFibGVkLlxyXG4gKi9cclxuZXhwb3J0cy5kZWJ1Z0NvbnRhaW5lciA9IG5ldyB1dGlsXzEuTGF6eShmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gbWFrZUNvbnRhaW5lcihcImRlYnVnXCIsIHtcclxuICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgIHRvcDogXCIwXCIsXHJcbiAgICAgICAgbGVmdDogXCIwXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAuNWVtXCIsXHJcbiAgICAgICAgcGFkZGluZzogXCIwLjVlbSAxZW1cIixcclxuICAgICAgICBib3JkZXI6IFwiMnB4IHNvbGlkIHJnYigwLCAwLCAwLCAwLjIpXCIsXHJcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZ2IoMCwgMCwgMCwgMC4xKVwiLFxyXG4gICAgICAgIGNvbG9yOiBcIiM1NTVcIixcclxuICAgICAgICBmb250RmFtaWx5OiBcIm1vbm9zcGFjZVwiLFxyXG4gICAgfSwgZXhwb3J0cy5yb290Q29udGFpbmVyLmN1cnJlbnQpO1xyXG59LCBpc0NvbnRhaW5lckFjdGl2ZSk7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIHRoZSBwYXJ0aWNsZSBjb250YWluZXIgb2YgdGhlIGxpYnJhcnkuXHJcbiAqIFRoaXMgaXMgd2hlcmUgdGhlIHBhcnRpY2xlIERPTSBlbGVtZW50cyBnZXQgcmVuZGVyZWQgaW50by5cclxuICovXHJcbmV4cG9ydHMucGFydGljbGVDb250YWluZXIgPSBuZXcgdXRpbF8xLkxhenkoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIG1ha2VDb250YWluZXIoXCJwYXJ0aWNsZXNcIiwge1xyXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgIHBlcnNwZWN0aXZlOiBcIjEyMDBweFwiLFxyXG4gICAgfSwgZXhwb3J0cy5yb290Q29udGFpbmVyLmN1cnJlbnQpO1xyXG59LCBpc0NvbnRhaW5lckFjdGl2ZSk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmFuZG9tSW5zaWRlQ2lyY2xlID0gZXhwb3J0cy5yYW5kb21JbnNpZGVSZWN0ID0gZXhwb3J0cy5yYW5kb21Vbml0VmVjdG9yID0gZXhwb3J0cy5waWNrID0gZXhwb3J0cy5yYW5kb21SYW5nZSA9IHZvaWQgMDtcclxudmFyIGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzXCIpO1xyXG52YXIgbWF0aF8xID0gcmVxdWlyZShcIi4vbWF0aFwiKTtcclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb20gdmFsdWUgZnJvbSBtaW4gdG8gbWF4LlxyXG4gKi9cclxuZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcclxuICAgIGlmIChtaW4gPT09IHZvaWQgMCkgeyBtaW4gPSAwOyB9XHJcbiAgICBpZiAobWF4ID09PSB2b2lkIDApIHsgbWF4ID0gMTsgfVxyXG4gICAgcmV0dXJuIG1hdGhfMS5sZXJwKG1pbiwgbWF4LCBNYXRoLnJhbmRvbSgpKTtcclxufVxyXG5leHBvcnRzLnJhbmRvbVJhbmdlID0gcmFuZG9tUmFuZ2U7XHJcbi8qKlxyXG4gKiBQaWNrcyBhIHJhbmRvbSBlbGVtZW50IGZyb20gdGhlIHNwZWNpZmllZCBhcnJheS4gUmV0dXJucyB1bmRlZmluZWQgaWYgdGhlIGFycmF5IGlzIGVtcHR5LlxyXG4gKi9cclxuZnVuY3Rpb24gcGljayhhcnIpIHtcclxuICAgIHJldHVybiBhcnIubGVuZ3RoID09PSAwXHJcbiAgICAgICAgPyB1bmRlZmluZWRcclxuICAgICAgICA6IGFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKV07XHJcbn1cclxuZXhwb3J0cy5waWNrID0gcGljaztcclxuLyoqXHJcbiAqIFJldHVybnMgYSByYW5kb20gdW5pdCB2ZWN0b3IuXHJcbiAqL1xyXG5mdW5jdGlvbiByYW5kb21Vbml0VmVjdG9yKCkge1xyXG4gICAgdmFyIHRoZXRhID0gcmFuZG9tUmFuZ2UoMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgdmFyIHogPSByYW5kb21SYW5nZSgtMSwgMSk7XHJcbiAgICByZXR1cm4gbmV3IGNvbXBvbmVudHNfMS5WZWN0b3IoTWF0aC5zcXJ0KDEgLSB6ICogeikgKiBNYXRoLmNvcyh0aGV0YSksIE1hdGguc3FydCgxIC0geiAqIHopICogTWF0aC5zaW4odGhldGEpLCB6KTtcclxufVxyXG5leHBvcnRzLnJhbmRvbVVuaXRWZWN0b3IgPSByYW5kb21Vbml0VmVjdG9yO1xyXG4vKipcclxuICogUmV0dXJucyBhIHJhbmRvbSBwb2ludCBpbnNpZGUgdGhlIGdpdmVuIHJlY3QuXHJcbiAqL1xyXG5mdW5jdGlvbiByYW5kb21JbnNpZGVSZWN0KHJlY3QpIHtcclxuICAgIHJldHVybiBuZXcgY29tcG9uZW50c18xLlZlY3RvcihyZWN0LnggKyByYW5kb21SYW5nZSgwLCByZWN0LndpZHRoKSwgcmVjdC55ICsgcmFuZG9tUmFuZ2UoMCwgcmVjdC5oZWlnaHQpKTtcclxufVxyXG5leHBvcnRzLnJhbmRvbUluc2lkZVJlY3QgPSByYW5kb21JbnNpZGVSZWN0O1xyXG5mdW5jdGlvbiByYW5kb21JbnNpZGVDaXJjbGUoY2lyY2xlKSB7XHJcbiAgICB2YXIgdGhldGEgPSByYW5kb21SYW5nZSgwLCAyICogTWF0aC5QSSk7XHJcbiAgICB2YXIgcmFkaXVzID0gcmFuZG9tUmFuZ2UoMCwgY2lyY2xlLnJhZGl1cyk7XHJcbiAgICByZXR1cm4gbmV3IGNvbXBvbmVudHNfMS5WZWN0b3IoY2lyY2xlLnggKyBNYXRoLmNvcyh0aGV0YSkgKiByYWRpdXMsIGNpcmNsZS55ICsgTWF0aC5zaW4odGhldGEpICogcmFkaXVzKTtcclxufVxyXG5leHBvcnRzLnJhbmRvbUluc2lkZUNpcmNsZSA9IHJhbmRvbUluc2lkZUNpcmNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5ncmFkaWVudFNhbXBsZSA9IGV4cG9ydHMuc3BsaW5lU2FtcGxlID0gZXhwb3J0cy5za2V3UmVsYXRpdmUgPSBleHBvcnRzLnNrZXcgPSBleHBvcnRzLnJhbmdlID0gZXhwb3J0cy5ldmFsdWF0ZVZhcmlhdGlvbiA9IHZvaWQgMDtcclxudmFyIHJhbmRvbV8xID0gcmVxdWlyZShcIi4vcmFuZG9tXCIpO1xyXG4vKipcclxuICogUmV0dXJucyBhIHZhbHVlIGluc3RhbmNlIG9mIGEgdmFyaWF0aW9uLlxyXG4gKi9cclxuZnVuY3Rpb24gZXZhbHVhdGVWYXJpYXRpb24odmFyaWF0aW9uKSB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YXJpYXRpb24pKVxyXG4gICAgICAgIHJldHVybiByYW5kb21fMS5waWNrKHZhcmlhdGlvbik7XHJcbiAgICBpZiAodHlwZW9mIHZhcmlhdGlvbiA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIHJldHVybiB2YXJpYXRpb24oKTtcclxuICAgIHJldHVybiB2YXJpYXRpb247XHJcbn1cclxuZXhwb3J0cy5ldmFsdWF0ZVZhcmlhdGlvbiA9IGV2YWx1YXRlVmFyaWF0aW9uO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHZhcmlhdGlvbiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSByYW5kb20gbnVtYmVyIGZyb20gbWluIHRvIG1heC5cclxuICovXHJcbmZ1bmN0aW9uIHJhbmdlKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmFuZG9tXzEucmFuZG9tUmFuZ2UobWluLCBtYXgpOyB9O1xyXG59XHJcbmV4cG9ydHMucmFuZ2UgPSByYW5nZTtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB2YXJpYXRpb24gZnVuY3Rpb24gdGhhdCBza2V3cyB0aGUgc3BlY2lmaWVkIHZhbHVlIGJ5IGEgc3BlY2lmaWVkLCBhYnNvbHV0ZVxyXG4gKiBhbW91bnQuIFRoaXMgbWVhbnMgdGhhdCBpbnN0ZWFkIG9mIHRoZSB2YWx1ZSBpdHNlbGYsIGEgcmFuZG9tIG51bWJlciB0aGF0IGRldmlhdGVzXHJcbiAqIGF0IG1vc3QgYnkgdGhlIHNwZWNpZmllZCBhbW91bnQgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIElmIHlvdSB3YW50IHRvIHNrZXcgYnkgYSBwZXJjZW50YWdlIGluc3RlYWQsIHVzZSBgc2tld1JlbGF0aXZlYC5cclxuICovXHJcbmZ1bmN0aW9uIHNrZXcodmFsdWUsIGFtb3VudCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlICsgcmFuZG9tXzEucmFuZG9tUmFuZ2UoLWFtb3VudCwgYW1vdW50KTsgfTtcclxufVxyXG5leHBvcnRzLnNrZXcgPSBza2V3O1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHZhcmlhdGlvbiBmdW5jdGlvbiB0aGF0IHNrZXdzIHRoZSBzcGVjaWZpZWQgdmFsdWUgYnkgYSBzcGVjaWZpZWQgcGVyY2VudGFnZS5cclxuICogVGhpcyBtZWFucyB0aGF0IGluc3RlYWQgb2YgdGhlIHZhbHVlIGl0c2VsZiwgYSByYW5kb20gbnVtYmVyIHRoYXQgZGV2aWF0ZXMgYnkgYSBtYXhpbXVtXHJcbiAqIG9mIHRoZSBzcGVjaWZpZWQgcGVyY2VudGFnZSBpcyByZXR1cm5lZC5cclxuICovXHJcbmZ1bmN0aW9uIHNrZXdSZWxhdGl2ZSh2YWx1ZSwgcGVyY2VudGFnZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHZhbHVlICogKDEgKyByYW5kb21fMS5yYW5kb21SYW5nZSgtcGVyY2VudGFnZSwgcGVyY2VudGFnZSkpOyB9O1xyXG59XHJcbmV4cG9ydHMuc2tld1JlbGF0aXZlID0gc2tld1JlbGF0aXZlO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHZhcmlhdGlvbiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSByYW5kb20gc2FtcGxlIGZyb20gdGhlIGdpdmVuIHNwbGluZS5cclxuICpcclxuICogQHBhcmFtIHNwbGluZSBUaGUgc3BsaW5lIHRvIHNhbXBsZSBmcm9tLlxyXG4gKi9cclxuZnVuY3Rpb24gc3BsaW5lU2FtcGxlKHNwbGluZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNwbGluZS5ldmFsdWF0ZShNYXRoLnJhbmRvbSgpKTsgfTtcclxufVxyXG5leHBvcnRzLnNwbGluZVNhbXBsZSA9IHNwbGluZVNhbXBsZTtcclxuLyoqXHJcbiAqIENyZWF0ZXMgYSB2YXJpYXRpb24gZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgcmFuZG9tIHNhbXBsZSBmcm9tIHRoZSBnaXZlbiBncmFkaWVudC5cclxuICpcclxuICogQHJlbWFya3NcclxuICogVGhpcyBmdW5jdGlvbiBpcyBhbiBhbGlhcyBmb3IgdGhlIHNwbGluZSB2YXJpYXRpb24sIHNpbmNlIGEgZ3JhZGllbnQgaXMganVzdFxyXG4gKiBhIHNwbGluZSB1bmRlciB0aGUgaG9vZC5cclxuICpcclxuICogQHBhcmFtIGdyYWRpZW50IFRoZSBncmFkaWVudCB0byBzYW1wbGUgZnJvbS5cclxuICovXHJcbmZ1bmN0aW9uIGdyYWRpZW50U2FtcGxlKGdyYWRpZW50KSB7XHJcbiAgICByZXR1cm4gc3BsaW5lU2FtcGxlKGdyYWRpZW50KTtcclxufVxyXG5leHBvcnRzLmdyYWRpZW50U2FtcGxlID0gZ3JhZGllbnRTYW1wbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0RGVmYXVsdEVtaXR0ZXJPcHRpb25zID0gdm9pZCAwO1xyXG52YXIgcnVsZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi91dGlsL3J1bGVzXCIpO1xyXG4vKipcclxuICogUmV0dXJucyB0aGUgZGVmYXVsdCBzZXQgb2YgZW1pdHRlciBvcHRpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdEVtaXR0ZXJPcHRpb25zKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkdXJhdGlvbjogNSxcclxuICAgICAgICBsb29wczogMSxcclxuICAgICAgICB1c2VHcmF2aXR5OiB0cnVlLFxyXG4gICAgICAgIG1heFBhcnRpY2xlczogMzAwLFxyXG4gICAgICAgIGRlc3Bhd25pbmdSdWxlczogW3J1bGVzXzEuZGVzcGF3bmluZ1J1bGVzLmxpZmV0aW1lLCBydWxlc18xLmRlc3Bhd25pbmdSdWxlcy5ib3VuZHNdLFxyXG4gICAgICAgIG1vZHVsZXM6IFtdLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmdldERlZmF1bHRFbWl0dGVyT3B0aW9ucyA9IGdldERlZmF1bHRFbWl0dGVyT3B0aW9ucztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jaXJjbGVTb3VyY2UgPSBleHBvcnRzLnJlY3RTb3VyY2UgPSBleHBvcnRzLm1vdXNlU291cmNlID0gZXhwb3J0cy5lbGVtZW50U291cmNlID0gZXhwb3J0cy5keW5hbWljU291cmNlID0gdm9pZCAwO1xyXG52YXIgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHNcIik7XHJcbnZhciByYW5kb21fMSA9IHJlcXVpcmUoXCIuL3JhbmRvbVwiKTtcclxuLyoqXHJcbiAqIER5bmFtaWNhbGx5IGluZmVycyBhIHNvdXJjZSBzYW1wbGVyIGZvciB0aGUgc3BlY2lmaWVkIHNvdXJjZSB0eXBlLlxyXG4gKi9cclxuZnVuY3Rpb24gZHluYW1pY1NvdXJjZShzb3VyY2UpIHtcclxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50U291cmNlKHNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgY29tcG9uZW50c18xLkNpcmNsZSkge1xyXG4gICAgICAgIHJldHVybiBjaXJjbGVTb3VyY2Uoc291cmNlKTtcclxuICAgIH1cclxuICAgIGlmIChzb3VyY2UgaW5zdGFuY2VvZiBjb21wb25lbnRzXzEuUmVjdCkge1xyXG4gICAgICAgIHJldHVybiByZWN0U291cmNlKHNvdXJjZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc291cmNlIGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBtb3VzZVNvdXJjZShzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGluZmVyIHRoZSBzb3VyY2UgdHlwZSBvZiAnXCIgKyBzb3VyY2UgKyBcIicuXCIpO1xyXG59XHJcbmV4cG9ydHMuZHluYW1pY1NvdXJjZSA9IGR5bmFtaWNTb3VyY2U7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2FtcGxlciB0byByZXRyaWV2ZSByYW5kb20gcG9pbnRzIGluc2lkZSBhIHNwZWNpZmllZCBIVE1MRWxlbWVudC5cclxuICovXHJcbmZ1bmN0aW9uIGVsZW1lbnRTb3VyY2Uoc291cmNlKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmFuZG9tXzEucmFuZG9tSW5zaWRlUmVjdChjb21wb25lbnRzXzEuUmVjdC5mcm9tRWxlbWVudChzb3VyY2UpKTsgfTtcclxufVxyXG5leHBvcnRzLmVsZW1lbnRTb3VyY2UgPSBlbGVtZW50U291cmNlO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNhbXBsZXIgdG8gcmV0cmlldmUgdGhlIHBvc2l0aW9uIG9mIGEgbW91c2UgZXZlbnQuXHJcbiAqL1xyXG5mdW5jdGlvbiBtb3VzZVNvdXJjZShzb3VyY2UpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb21wb25lbnRzXzEuVmVjdG9yKHdpbmRvdy5zY3JvbGxYICsgc291cmNlLmNsaWVudFgsIHdpbmRvdy5zY3JvbGxZICsgc291cmNlLmNsaWVudFkpO1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLm1vdXNlU291cmNlID0gbW91c2VTb3VyY2U7XHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgc2FtcGxlciB0byByZXRyaWV2ZSByYW5kb20gcG9pbnRzIGluc2lkZSBhIHNwZWNpZmllZCByZWN0YW5nbGUuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWN0U291cmNlKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJhbmRvbV8xLnJhbmRvbUluc2lkZVJlY3Qoc291cmNlKTsgfTtcclxufVxyXG5leHBvcnRzLnJlY3RTb3VyY2UgPSByZWN0U291cmNlO1xyXG4vKipcclxuICogQ3JlYXRlcyBhIHNhbXBsZXIgdG8gcmV0cmlldmUgcmFuZG9tIHBvaW50cyBpbnNpZGUgYSBzcGVjaWZpZWQgY2lyY2xlLlxyXG4gKi9cclxuZnVuY3Rpb24gY2lyY2xlU291cmNlKHNvdXJjZSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJhbmRvbV8xLnJhbmRvbUluc2lkZUNpcmNsZShzb3VyY2UpOyB9O1xyXG59XHJcbmV4cG9ydHMuY2lyY2xlU291cmNlID0gY2lyY2xlU291cmNlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldERlZmF1bHRFbWlzc2lvbk9wdGlvbnMgPSB2b2lkIDA7XHJcbnZhciBjb21wb25lbnRzXzEgPSByZXF1aXJlKFwiLi4vLi4vY29tcG9uZW50c1wiKTtcclxudmFyIHNvdXJjZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi9zeXN0ZW1zL3NvdXJjZXNcIik7XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHNldCBvZiBlbWlzc2lvbiBvcHRpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdEVtaXNzaW9uT3B0aW9ucygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmF0ZTogMTAsXHJcbiAgICAgICAgYW5nbGU6IDAsXHJcbiAgICAgICAgYnVyc3RzOiBbXSxcclxuICAgICAgICBzb3VyY2VTYW1wbGVyOiBzb3VyY2VzXzEucmVjdFNvdXJjZShjb21wb25lbnRzXzEuUmVjdC56ZXJvKSxcclxuICAgICAgICBpbml0aWFsTGlmZXRpbWU6IDUsXHJcbiAgICAgICAgaW5pdGlhbFNwZWVkOiA1LFxyXG4gICAgICAgIGluaXRpYWxTaXplOiAxLFxyXG4gICAgICAgIGluaXRpYWxSb3RhdGlvbjogY29tcG9uZW50c18xLlZlY3Rvci56ZXJvLFxyXG4gICAgICAgIGluaXRpYWxDb2xvcjogY29tcG9uZW50c18xLkNvbG9yLndoaXRlLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmdldERlZmF1bHRFbWlzc2lvbk9wdGlvbnMgPSBnZXREZWZhdWx0RW1pc3Npb25PcHRpb25zO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldERlZmF1bHRSZW5kZXJlck9wdGlvbnMgPSB2b2lkIDA7XHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBkZWZhdWx0IHNldCBvZiByZW5kZXJlciBvcHRpb25zLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0RGVmYXVsdFJlbmRlcmVyT3B0aW9ucygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hhcGVGYWN0b3J5OiBcInNxdWFyZVwiLFxyXG4gICAgICAgIGFwcGx5Q29sb3I6IGRlZmF1bHRBcHBseUNvbG9yLFxyXG4gICAgICAgIGFwcGx5T3BhY2l0eTogZGVmYXVsdEFwcGx5T3BhY2l0eSxcclxuICAgICAgICBhcHBseUxpZ2h0aW5nOiBkZWZhdWx0QXBwbHlMaWdodGluZyxcclxuICAgICAgICBhcHBseVRyYW5zZm9ybTogZGVmYXVsdEFwcGx5VHJhbnNmb3JtLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmdldERlZmF1bHRSZW5kZXJlck9wdGlvbnMgPSBnZXREZWZhdWx0UmVuZGVyZXJPcHRpb25zO1xyXG4vKipcclxuICogQXBwbGllcyB0aGUgc3BlY2lmaWVkIGNvbG9yIHRvIHRoZSBlbGVtZW50LlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGF3YXJlIG9mIHRoZSBlbGVtZW50J3Mgbm9kZSB0eXBlOlxyXG4gKiAtIGBkaXZgIGVsZW1lbnRzIGhhdmUgdGhlaXIgYGJhY2tncm91bmRgIHNldC5cclxuICogLSBgc3ZnYCBlbGVtZW50cyBoYXZlIHRoZWlyIGBmaWxsYCBhbmQgYGNvbG9yYCBzZXQuXHJcbiAqIC0gT3RoZXIgZWxlbWVudHMgaGF2ZSB0aGVpciBgY29sb3JgIHNldC5cclxuICovXHJcbmZ1bmN0aW9uIGRlZmF1bHRBcHBseUNvbG9yKGNvbG9yLCBlbGVtZW50KSB7XHJcbiAgICB2YXIgaGV4ID0gY29sb3IudG9IZXgoKTtcclxuICAgIC8vIE5vdGUgdGhhdCBieSBkZWZhdWx0LCBIVE1MIG5vZGUgbmFtZXMgYXJlIHVwcGVyY2FzZS5cclxuICAgIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSBcImRpdlwiOlxyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBoZXg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJzdmdcIjpcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5maWxsID0gZWxlbWVudC5zdHlsZS5jb2xvciA9IGhleDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGhleDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIEFwcGxpZXMgdGhlIHNwZWNpZmllZCBvcGFjaXR5IHRvIHRoZSBlbGVtZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gZGVmYXVsdEFwcGx5T3BhY2l0eShvcGFjaXR5LCBlbGVtZW50KSB7XHJcbiAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcGFjaXR5LnRvU3RyaW5nKCk7XHJcbn1cclxuLyoqXHJcbiAqIEFwcGxpZXMgdGhlIHNwZWNpZmllZCBsaWdodGluZyB0byB0aGUgZWxlbWVudCBhcyBhIGJyaWdodG5lc3MgZmlsdGVyLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgYW4gYW1iaWVudCBsaWdodCB3aXRoIGludGVuc2l0eSAwLjUsIGFuZCB0aGF0IHRoZVxyXG4gKiBwYXJ0aWNsZSBzaG91bGQgYmUgbGl0IGZyb20gYm90aCBzaWRlcy4gVGhlIGJyaWdodG5lc3MgZmlsdGVyIGNhbiBleGNlZWQgMSxcclxuICogdG8gZ2l2ZSB0aGUgcGFydGljbGVzIGEgXCJnbG9zc3lcIiBmZWVsLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVmYXVsdEFwcGx5TGlnaHRpbmcobGlnaHRpbmcsIGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gXCJicmlnaHRuZXNzKFwiICsgKDAuNSArIE1hdGguYWJzKGxpZ2h0aW5nKSkgKyBcIilcIjtcclxufVxyXG4vKipcclxuICogQXBwbGllcyB0aGUgc3BlY2lmaWVkIHRyYW5zZm9ybSB0byB0aGUgZWxlbWVudCBhcyBhIDNEIENTUyB0cmFuc2Zvcm0uXHJcbiAqIEFsc28gdGFrZXMgaW50byBhY2NvdW50IHRoZSBjdXJyZW50IHdpbmRvdyBzY3JvbGwsIHRvIG1ha2Ugc3VyZSB0aGF0IHBhcnRpY2xlcyBhcmVcclxuICogcmVuZGVyZWQgaW5zaWRlIG9mIHRoZSBmaXhlZCBjb250YWluZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWZhdWx0QXBwbHlUcmFuc2Zvcm0ocGFydGljbGUsIGVsZW1lbnQpIHtcclxuICAgIGVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID1cclxuICAgICAgICAvLyBNYWtlIHN1cmUgdG8gdGFrZSB3aW5kb3cgc2Nyb2xsaW5nIGludG8gYWNjb3VudC5cclxuICAgICAgICBcInRyYW5zbGF0ZVgoXCIgKyAocGFydGljbGUubG9jYXRpb24ueCAtIHdpbmRvdy5zY3JvbGxYKS50b0ZpeGVkKDMpICsgXCJweCkgXCIgK1xyXG4gICAgICAgICAgICAoXCJ0cmFuc2xhdGVZKFwiICsgKHBhcnRpY2xlLmxvY2F0aW9uLnkgLSB3aW5kb3cuc2Nyb2xsWSkudG9GaXhlZCgzKSArIFwicHgpIFwiKSArXHJcbiAgICAgICAgICAgIChcInRyYW5zbGF0ZVooXCIgKyBwYXJ0aWNsZS5sb2NhdGlvbi56LnRvRml4ZWQoMykgKyBcInB4KSBcIikgK1xyXG4gICAgICAgICAgICAoXCJyb3RhdGVYKFwiICsgcGFydGljbGUucm90YXRpb24ueC50b0ZpeGVkKDMpICsgXCJkZWcpIFwiKSArXHJcbiAgICAgICAgICAgIChcInJvdGF0ZVkoXCIgKyBwYXJ0aWNsZS5yb3RhdGlvbi55LnRvRml4ZWQoMykgKyBcImRlZykgXCIpICtcclxuICAgICAgICAgICAgKFwicm90YXRlWihcIiArIHBhcnRpY2xlLnJvdGF0aW9uLnoudG9GaXhlZCgzKSArIFwiZGVnKSBcIikgK1xyXG4gICAgICAgICAgICAoXCJzY2FsZShcIiArIHBhcnRpY2xlLnNpemUudG9GaXhlZCgzKSArIFwiKVwiKTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VtaXR0ZXJPcHRpb25zXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2VtaXNzaW9uT3B0aW9uc1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9yZW5kZXJPcHRpb25zXCIpLCBleHBvcnRzKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5QYXJ0aWNsZSA9IHZvaWQgMDtcclxudmFyIGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzXCIpO1xyXG52YXIgY29uZmlnXzEgPSByZXF1aXJlKFwiLi4vdXRpbC9jb25maWdcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGFuIGVtaXR0ZWQgcGFydGljbGUuXHJcbiAqL1xyXG52YXIgUGFydGljbGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYSBuZXcgcGFydGljbGUgaW5zdGFuY2UgdGhyb3VnaCB0aGUgc3BlY2lmaWVkIG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFBhcnRpY2xlKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgcG9wdWxhdGVkT3B0aW9ucyA9IGNvbmZpZ18xLm92ZXJyaWRlRGVmYXVsdHMoe1xyXG4gICAgICAgICAgICBsaWZldGltZTogMCxcclxuICAgICAgICAgICAgc2l6ZTogMSxcclxuICAgICAgICAgICAgbG9jYXRpb246IGNvbXBvbmVudHNfMS5WZWN0b3IuemVybyxcclxuICAgICAgICAgICAgcm90YXRpb246IGNvbXBvbmVudHNfMS5WZWN0b3IuemVybyxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IGNvbXBvbmVudHNfMS5WZWN0b3IuemVybyxcclxuICAgICAgICAgICAgY29sb3I6IGNvbXBvbmVudHNfMS5Db2xvci53aGl0ZSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICAvLyBHZW5lcmF0ZSBhIHN5bWJvbGljIElELlxyXG4gICAgICAgIHRoaXMuaWQgPSBTeW1ib2woKTtcclxuICAgICAgICAvLyBBc3NpZ24gdmFyaW91cyBwcm9wZXJ0aWVzLCB0b2dldGhlciB3aXRoIHNvbWUgaW5pdGlhbHMgZm9yIGxhdGVyIHJlZmVyZW5jZS5cclxuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmluaXRpYWxTaXplID0gcG9wdWxhdGVkT3B0aW9ucy5zaXplO1xyXG4gICAgICAgIHRoaXMubGlmZXRpbWUgPSB0aGlzLmluaXRpYWxMaWZldGltZSA9IHBvcHVsYXRlZE9wdGlvbnMubGlmZXRpbWU7XHJcbiAgICAgICAgdGhpcy5yb3RhdGlvbiA9IHRoaXMuaW5pdGlhbFJvdGF0aW9uID0gcG9wdWxhdGVkT3B0aW9ucy5yb3RhdGlvbjtcclxuICAgICAgICB0aGlzLmxvY2F0aW9uID0gcG9wdWxhdGVkT3B0aW9ucy5sb2NhdGlvbjtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gcG9wdWxhdGVkT3B0aW9ucy52ZWxvY2l0eTtcclxuICAgICAgICB0aGlzLmNvbG9yID0gcG9wdWxhdGVkT3B0aW9ucy5jb2xvcjtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSBwb3B1bGF0ZWRPcHRpb25zLm9wYWNpdHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUGFydGljbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUGFydGljbGUgPSBQYXJ0aWNsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FbWl0dGVyID0gdm9pZCAwO1xyXG52YXIgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy92ZWN0b3JcIik7XHJcbnZhciBzZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL3NldHRpbmdzXCIpO1xyXG52YXIgdmFyaWF0aW9uXzEgPSByZXF1aXJlKFwiLi4vc3lzdGVtcy92YXJpYXRpb25cIik7XHJcbnZhciBjb25maWdfMSA9IHJlcXVpcmUoXCIuLi91dGlsL2NvbmZpZ1wiKTtcclxudmFyIG9wdGlvbnNfMSA9IHJlcXVpcmUoXCIuL29wdGlvbnNcIik7XHJcbnZhciBwYXJ0aWNsZV8xID0gcmVxdWlyZShcIi4vcGFydGljbGVcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGFuIGVtaXR0ZXIgdGhhdCBpcyByZXNwb25zaWJsZSBmb3Igc3Bhd25pbmcgYW5kIHVwZGF0aW5nIHBhcnRpY2xlcy5cclxuICpcclxuICogUGFydGljbGVzIHRoZW1zZWx2ZXMgYXJlIGp1c3QgZGF0YS1ob2xkZXJzLCB3aXRoIHRoZSBzeXN0ZW0gYWN0aW5nIHVwb24gdGhlbSBhbmRcclxuICogbW9kaWZ5aW5nIHRoZW0uIFRoZSBtb2RpZmljYXRpb25zIGFyZSBkb25lIG1haW5seSB2aWEgbW9kdWxlcywgdGhhdCB1c2UgdGhlXHJcbiAqIHBhcnRpY2xlJ3MgZGF0YSB0b2dldGhlciB3aXRoIHNvbWUgZnVuY3Rpb24gdG8gYXBwbHkgdGVtcG9yYWwgdHJhbnNpdGlvbnMuXHJcbiAqXHJcbiAqIEBzZWUgUGFydGljbGVcclxuICogQHNlZSBQYXJ0aWNsZU1vZGlmaWVyTW9kdWxlXHJcbiAqL1xyXG52YXIgRW1pdHRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBhIG5ldyBlbWl0dGVyLCB1c2luZyBkZWZhdWx0IG9wdGlvbnMuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIEVtaXR0ZXIob3B0aW9ucykge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBwYXJ0aWNsZXMgY3VycmVudGx5IGNvbnRhaW5lZCB3aXRoaW4gdGhlIHN5c3RlbS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudExvb3AgPSAwOyAvLyBUaGUgY3VycmVudCBsb29wIGluZGV4LlxyXG4gICAgICAgIHRoaXMuZHVyYXRpb25UaW1lciA9IDA7IC8vIE1lYXN1cmVzIHRoZSBjdXJyZW50IHJ1bnRpbWUgZHVyYXRpb24sIHRvIGFsbG93IGxvb3BzIHRvIHJlc2V0LlxyXG4gICAgICAgIHRoaXMuZW1pc3Npb25UaW1lciA9IDA7IC8vIE1lYXN1cmVzIHRoZSBjdXJyZW50IGVtaXNzaW9uIHRpbWVyLCB0byBhbGxvdyBzcGF3bmluZyBwYXJ0aWNsZXMgaW4gaW50ZXJ2YWxzLlxyXG4gICAgICAgIHRoaXMuYXR0ZW1wdGVkQnVyc3RJbmRpY2VzID0gW107IC8vIFRoZSBpbmRpY2VzIG9mIHRoZSBwYXJ0aWNsZSBidXJzdHMgdGhhdCB3ZXJlIGF0dGVtcHRlZCB0aGlzIGxvb3AuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gY29uZmlnXzEub3ZlcnJpZGVEZWZhdWx0cyhvcHRpb25zXzEuZ2V0RGVmYXVsdEVtaXR0ZXJPcHRpb25zKCksIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5lbWl0dGVyT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5lbWlzc2lvbiA9IGNvbmZpZ18xLm92ZXJyaWRlRGVmYXVsdHMob3B0aW9uc18xLmdldERlZmF1bHRFbWlzc2lvbk9wdGlvbnMoKSwgb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmVtaXNzaW9uT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IGNvbmZpZ18xLm92ZXJyaWRlRGVmYXVsdHMob3B0aW9uc18xLmdldERlZmF1bHRSZW5kZXJlck9wdGlvbnMoKSwgb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLnJlbmRlcmVyT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRW1pdHRlci5wcm90b3R5cGUsIFwiaXNFeHBpcmVkXCIsIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDaGVja3MgaWYgdGhlIGVtaXR0ZXIgaXMgYWxyZWFkeSBleHBpcmVkIGFuZCBjYW4gYmUgcmVtb3ZlZC5cclxuICAgICAgICAgKiBFeHBpcmVkIGVtaXR0ZXJzIGRvIG5vdCBlbWl0IG5ldyBwYXJ0aWNsZXMuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5vcHRpb25zLmxvb3BzID49IDAgJiYgdGhpcy5jdXJyZW50TG9vcCA+PSB0aGlzLm9wdGlvbnMubG9vcHMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbWl0dGVyLnByb3RvdHlwZSwgXCJjYW5SZW1vdmVcIiwge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrcyBpZiB0aGUgZW1pdHRlciBjYW4gc2FmZWx5IGJlIHJlbW92ZWQuXHJcbiAgICAgICAgICogVGhpcyBpcyB0cnVlIGlmIG5vIG1vcmUgcGFydGljbGVzIGFyZSBhY3RpdmUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcnRpY2xlcy5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgYWxsIHBhcnRpY2xlcyBpbnNpZGUgdGhlIGVtaXR0ZXIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjbGVhcmVkIHBhcnRpY2xlcy5cclxuICAgICAqL1xyXG4gICAgRW1pdHRlci5wcm90b3R5cGUuY2xlYXJQYXJ0aWNsZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFydGljbGVzLnNwbGljZSgwKS5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBQcm9jZXNzZXMgYSB0aWNrIG9mIHRoZSBlbWl0dGVyLCB1c2luZyB0aGUgZWxhcHNlZCB0aW1lLlxyXG4gICAgICpcclxuICAgICAqIEByZW1hcmtzXHJcbiAgICAgKiBUaGlzIGhhbmRsZXMgYSBmZXcgdGhpbmdzLCBuYW1lbHk6XHJcbiAgICAgKiAtIEluY3JlbWVudGluZyB0aGUgZHVyYXRpb24gdGltZXIgYW5kIHBvdGVudGlhbGx5IGluY3JlbWVudGluZyB0aGUgbG9vcC5cclxuICAgICAqIC0gSGFuZGxpbmcgcGFydGljbGUgYnVyc3RzICYgZW1pc3Npb25zLlxyXG4gICAgICogLSBEZXNwYXduaW5nIHBhcnRpY2xlcyBjb25kaXRpb25hbGx5LlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBkZWx0YSBUaGUgdGltZSwgaW4gc2Vjb25kcywgcGFzc2VkIHNpbmNlIHRoZSBsYXN0IHRpY2suXHJcbiAgICAgKi9cclxuICAgIEVtaXR0ZXIucHJvdG90eXBlLnRpY2sgPSBmdW5jdGlvbiAoZGVsdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNFeHBpcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb25UaW1lciArPSBkZWx0YTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZHVyYXRpb25UaW1lciA+PSB0aGlzLm9wdGlvbnMuZHVyYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExvb3ArKztcclxuICAgICAgICAgICAgICAgIC8vIFRvIHN0YXJ0IGEgbmV3IGxvb3AsIHRoZSBkdXJhdGlvbiB0aW1lciBhbmQgYXR0ZW1wdGVkIGJ1cnN0cyBhcmUgcmVzZXQuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uVGltZXIgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hdHRlbXB0ZWRCdXJzdEluZGljZXMgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHRoZSBleHBpcnkgYWdhaW4sIGluIGNhc2UgdGhlIGFkZGVkIGxvb3Agb3IgZHVyYXRpb24gY2hhbmdlZCBzb21ldGhpbmcuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0V4cGlyZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgYnVyc3RzLCBhdHRlbXB0aW5nIHRvIGV4ZWN1dGUgdGhlbSBpZiB0aGUgdGltZSBpcyByZWFkeS5cclxuICAgICAgICAgICAgICAgIHZhciBidXJzdEluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLmVtaXNzaW9uLmJ1cnN0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYnVyc3QgPSBfYVtfaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1cnN0LnRpbWUgPD0gdGhpcy5kdXJhdGlvblRpbWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhcyB0aGUgYnVyc3QgYWxyZWFkeSBiZWVuIGF0dGVtcHRlZD8gSWYgbm90IC4uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYXR0ZW1wdGVkQnVyc3RJbmRpY2VzLmluY2x1ZGVzKGJ1cnN0SW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIHRoZSBidXJzdCwgZW1pdHRpbmcgYSB2YXJpYWJsZSBhbW91bnQgb2YgcGFydGljbGVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gdmFyaWF0aW9uXzEuZXZhbHVhdGVWYXJpYXRpb24oYnVyc3QuY291bnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0UGFydGljbGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmsgdGhlIGJ1cnN0IGFzIGF0dGVtcHRlZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0ZW1wdGVkQnVyc3RJbmRpY2VzLnB1c2goYnVyc3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnVyc3RJbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIHRoZSAnZW1pc3Npb24gb3ZlciB0aW1lJy4gQnkgdXNpbmcgYSB3aGlsZS1sb29wIGluc3RlYWQgb2YgYSBzaW1wbGVcclxuICAgICAgICAgICAgICAgIC8vIGlmLWNvbmRpdGlvbiwgd2UgdGFrZSBoaWdoIGRlbHRhcyBpbnRvIGFjY291bnQsIGFuZCBlbnN1cmUgdGhhdCB0aGUgY29ycmVjdFxyXG4gICAgICAgICAgICAgICAgLy8gbnVtYmVyIG9mIHBhcnRpY2xlcyB3aWxsIGNvbnNpc3RlbnRseSBiZSBlbWl0dGVkLlxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWlzc2lvblRpbWVyICs9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRlbGF5ID0gMSAvIHRoaXMuZW1pc3Npb24ucmF0ZTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLmVtaXNzaW9uVGltZXIgPiBkZWxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pc3Npb25UaW1lciAtPSBkZWxheTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRQYXJ0aWNsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICAgICAgdmFyIHBhcnRpY2xlID0gdGhpc18xLnBhcnRpY2xlc1tpXTtcclxuICAgICAgICAgICAgdGhpc18xLnRpY2tQYXJ0aWNsZShwYXJ0aWNsZSwgZGVsdGEpO1xyXG4gICAgICAgICAgICAvLyBQYXJ0aWNsZXMgc2hvdWxkIGJlIGRlc3Bhd25lZCAoaS5lLiByZW1vdmVkIGZyb20gdGhlIGNvbGxlY3Rpb24pIGlmIGFueSBvZlxyXG4gICAgICAgICAgICAvLyB0aGUgZGVzcGF3bmluZyBydWxlcyBhcHBseSB0byB0aGVtLlxyXG4gICAgICAgICAgICBpZiAodGhpc18xLm9wdGlvbnMuZGVzcGF3bmluZ1J1bGVzLnNvbWUoZnVuY3Rpb24gKHJ1bGUpIHsgcmV0dXJuIHJ1bGUocGFydGljbGUpOyB9KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc18xLnBhcnRpY2xlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0aGlzXzEgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLnBhcnRpY2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm1zIGFuIGludGVybmFsIHRpY2sgZm9yIHRoZSBwYXJ0aWNsZS5cclxuICAgICAqXHJcbiAgICAgKiBAcmVtYXJrc1xyXG4gICAgICogVGhpcyBtZXRob2QgY29udHJvbHMgdGhlIHBhcnRpY2xlJ3MgbGlmZXRpbWUsIGxvY2F0aW9uIGFuZCB2ZWxvY2l0eSwgYWNjb3JkaW5nXHJcbiAgICAgKiB0byB0aGUgZWxhcHNlZCBkZWx0YSBhbmQgdGhlIGNvbmZpZ3VyYXRpb24uIEFkZGl0aW9uYWxseSwgZWFjaCBvZiB0aGUgZW1pdHRlcidzXHJcbiAgICAgKiBtb2R1bGVzIGlzIGFwcGxpZWQgdG8gdGhlIHBhcnRpY2xlLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXJ0aWNsZSBUaGUgcGFydGljbGUgdG8gYXBwbHkgdGhlIHRpY2sgZm9yLlxyXG4gICAgICogQHBhcmFtIGRlbHRhIFRoZSB0aW1lLCBpbiBzZWNvbmRzLCBwYXNzZWQgc2luY2UgdGhlIGxhc3QgdGljay5cclxuICAgICAqL1xyXG4gICAgRW1pdHRlci5wcm90b3R5cGUudGlja1BhcnRpY2xlID0gZnVuY3Rpb24gKHBhcnRpY2xlLCBkZWx0YSkge1xyXG4gICAgICAgIHBhcnRpY2xlLmxpZmV0aW1lIC09IGRlbHRhO1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMudXNlR3Jhdml0eSkge1xyXG4gICAgICAgICAgICAvLyBBcHBseSBncmF2aXRhdGlvbmFsIGFjY2VsZXJhdGlvbiB0byB0aGUgcGFydGljbGUuXHJcbiAgICAgICAgICAgIHBhcnRpY2xlLnZlbG9jaXR5ID0gcGFydGljbGUudmVsb2NpdHkuYWRkKHZlY3Rvcl8xLlZlY3Rvci51cC5zY2FsZShzZXR0aW5nc18xLnNldHRpbmdzLmdyYXZpdHkgKiBkZWx0YSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBcHBseSB0aGUgcGFydGljbGUncyB2ZWxvY2l0eSB0byBpdHMgbG9jYXRpb24uXHJcbiAgICAgICAgcGFydGljbGUubG9jYXRpb24gPSBwYXJ0aWNsZS5sb2NhdGlvbi5hZGQocGFydGljbGUudmVsb2NpdHkuc2NhbGUoZGVsdGEpKTtcclxuICAgICAgICAvLyBBcHBseSB0aGUgbW9kdWxlcyB0byB0aGUgcGFydGljbGUuXHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMub3B0aW9ucy5tb2R1bGVzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICB2YXIgbW9kdWxlRnVuY3Rpb24gPSBfYVtfaV07XHJcbiAgICAgICAgICAgIG1vZHVsZUZ1bmN0aW9uKHBhcnRpY2xlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBFbWl0cyBhIHBhcnRpY2xlIHVzaW5nIHRoZSByZWdpc3RlcmVkIHNldHRpbmdzLlxyXG4gICAgICogQWxzbyBtYXkgZGVzcGF3biBhIHBhcnRpY2xlIGlmIHRoZSBtYXhpbXVtIG51bWJlciBvZiBwYXJ0aWNsZXMgaXMgZXhjZWVkZWQuXHJcbiAgICAgKi9cclxuICAgIEVtaXR0ZXIucHJvdG90eXBlLmVtaXRQYXJ0aWNsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgcGFydGljbGUgPSBuZXcgcGFydGljbGVfMS5QYXJ0aWNsZSh7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiB0aGlzLmVtaXNzaW9uLnNvdXJjZVNhbXBsZXIoKSxcclxuICAgICAgICAgICAgbGlmZXRpbWU6IHZhcmlhdGlvbl8xLmV2YWx1YXRlVmFyaWF0aW9uKHRoaXMuZW1pc3Npb24uaW5pdGlhbExpZmV0aW1lKSxcclxuICAgICAgICAgICAgdmVsb2NpdHk6IHZlY3Rvcl8xLlZlY3Rvci5mcm9tMmRBbmdsZSh2YXJpYXRpb25fMS5ldmFsdWF0ZVZhcmlhdGlvbih0aGlzLmVtaXNzaW9uLmFuZ2xlKSkuc2NhbGUodmFyaWF0aW9uXzEuZXZhbHVhdGVWYXJpYXRpb24odGhpcy5lbWlzc2lvbi5pbml0aWFsU3BlZWQpKSxcclxuICAgICAgICAgICAgc2l6ZTogdmFyaWF0aW9uXzEuZXZhbHVhdGVWYXJpYXRpb24odGhpcy5lbWlzc2lvbi5pbml0aWFsU2l6ZSksXHJcbiAgICAgICAgICAgIHJvdGF0aW9uOiB2YXJpYXRpb25fMS5ldmFsdWF0ZVZhcmlhdGlvbih0aGlzLmVtaXNzaW9uLmluaXRpYWxSb3RhdGlvbiksXHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXJpYXRpb25fMS5ldmFsdWF0ZVZhcmlhdGlvbih0aGlzLmVtaXNzaW9uLmluaXRpYWxDb2xvciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSk7XHJcbiAgICAgICAgLy8gRW5zdXJlIHRoYXQgbm8gbW9yZSBwYXJ0aWNsZXMgdGhhbiAnbWF4UGFydGljbGVzJyBjYW4gZXhpc3QuXHJcbiAgICAgICAgaWYgKHRoaXMucGFydGljbGVzLmxlbmd0aCA+IHRoaXMub3B0aW9ucy5tYXhQYXJ0aWNsZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnRpY2xlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFbWl0dGVyO1xyXG59KCkpO1xyXG5leHBvcnRzLkVtaXR0ZXIgPSBFbWl0dGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlJlbmRlcmVyID0gdm9pZCAwO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG52YXIgdmVjdG9yXzEgPSByZXF1aXJlKFwiLi4vY29tcG9uZW50cy92ZWN0b3JcIik7XHJcbnZhciBjb250YWluZXJzXzEgPSByZXF1aXJlKFwiLi4vY29udGFpbmVyc1wiKTtcclxudmFyIHNoYXBlc18xID0gcmVxdWlyZShcIi4uL3N5c3RlbXMvc2hhcGVzXCIpO1xyXG52YXIgdXRpbF8xID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XHJcbi8qKlxyXG4gKiBSZXByZXNlbnRzIGEgcmVuZGVyZXIgdXNlZCB0byBkcmF3IHBhcnRpY2xlcyB0byB0aGUgRE9NIHZpYSBIVE1MXHJcbiAqIGVsZW1lbnRzLiBBZGRpdGlvbmFsbHksIGl0IGlzIHJlc3BvbnNpYmxlIGZvciBwdXJnaW5nIHRoZSBlbGVtZW50c1xyXG4gKiBvZiBkZXN0cm95ZWQgcGFydGljbGVzIGZyb20gdGhlIERPTS5cclxuICovXHJcbnZhciBSZW5kZXJlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlbmRlcmVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBsb29rdXAgb2YgZWxlbWVudHMgY3VycmVudGx5IGhhbmRsZWQgYnkgdGhlIHJlbmRlcmVyLCB3aXRoIHRoZVxyXG4gICAgICAgICAqIHBhcnRpY2xlIElEIGFzIGtleSBhbmQgYSBIVE1MRWxlbWVudCBhcyB0aGUgdmFsdWUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IG5ldyBNYXAoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbm9ybWFsaXplZCBkaXJlY3Rpb24gdGhlIGxpZ2h0IGNvbWVzIGZyb20uXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5saWdodCA9IG5ldyB2ZWN0b3JfMS5WZWN0b3IoMCwgMCwgMSk7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogV2hldGhlciBvciBub3QgdGhlIHJlbmRlcmVyIHNob3VsZCBhY3R1YWxseSBkcmF3IHBhcnRpY2xlcy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIFJlc3BlY3QgdGhhdCB1c2VycyBtaWdodCBwcmVmZXIgcmVkdWNlZCBtb3Rpb24uXHJcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQG1lZGlhL3ByZWZlcnMtcmVkdWNlZC1tb3Rpb25cclxuICAgICAgICB0aGlzLmVuYWJsZWQgPVxyXG4gICAgICAgICAgICAhX18xLnNldHRpbmdzLnJlc3BlY3RSZWR1Y2VkTW90aW9uIHx8XHJcbiAgICAgICAgICAgICAgICAhd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1yZWR1Y2VkLW1vdGlvbilcIikubWF0Y2hlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQmVnaW5zIGEgbmV3IHJlbmRlciBibG9jay4gRHVyaW5nIHRoZSByZW5kZXJpbmcgcGhhc2UsIGEgbGlzdCBvZiByZW5kZXJlZCBwYXJ0aWNsZXNcclxuICAgICAqIGlzIHRyYWNrZWQsIHNvIHRoYXQgc3RhbGUgcGFydGljbGVzIGNhbiBiZSByZW1vdmVkIGxhdGVyLlxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUuYmVnaW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlZFBhcnRpY2xlcyA9IFtdO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogVGVybWluYXRlcyBhbiBleGlzdGluZyByZW5kZXIgYmxvY2suIFRoaXMgY2hlY2tzIHdoaWNoIHBhcnRpY2xlcyB3ZXJlIHJlbmRlcmVkXHJcbiAgICAgKiBkdXJpbmcgdGhlIGJsb2NrIGFuZCBwdXJnZXMgYWxsIHVudXNlZCBIVE1MRWxlbWVudHMgZnJvbSB0aGUgRE9NLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBhbW91bnQgb2YgcGFydGljbGVzIHRoYXQgd2VyZSByZW5kZXJlZC5cclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmVuZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgaXQgPSB0aGlzLmVsZW1lbnRzLmtleXMoKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gaXQubmV4dCgpO1xyXG4gICAgICAgIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcclxuICAgICAgICAgICAgdmFyIGlkID0gcmVzdWx0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMucmVuZGVyZWRQYXJ0aWNsZXMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmdldChpZCkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzdWx0ID0gaXQubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJlZFBhcnRpY2xlcy5sZW5ndGg7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBSZW5kZXJzIGFuIGluZGl2aWR1YWwgcGFydGljbGUgdG8gdGhlIERPTS4gSWYgdGhlIHBhcnRpY2xlIGlzIHJlbmRlcmVkIGZvciB0aGUgZmlyc3RcclxuICAgICAqIHRpbWUsIGEgSFRNTEVsZW1lbnQgd2lsbCBiZSBjcmVhdGVkIHVzaW5nIHRoZSBlbWl0dGVyJ3MgcmVuZGVyIHNldHRpbmdzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBwYXJ0aWNsZSBUaGUgcGFydGljbGUgdG8gYmUgcmVuZGVyZWQuXHJcbiAgICAgKiBAcGFyYW0gZW1pdHRlciBUaGUgc3lzdGVtIGNvbnRhaW5pbmcgdGhlIHBhcnRpY2xlLlxyXG4gICAgICovXHJcbiAgICBSZW5kZXJlci5wcm90b3R5cGUucmVuZGVyUGFydGljbGUgPSBmdW5jdGlvbiAocGFydGljbGUsIGVtaXR0ZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBvcHRpb25zID0gZW1pdHRlci5yZW5kZXJlcjtcclxuICAgICAgICAvLyBFbnN1cmUgdGhhdCBhbiBlbGVtZW50IGZvciB0aGUgcGFydGljbGUgZXhpc3RzLlxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50cy5oYXMocGFydGljbGUuaWQpXHJcbiAgICAgICAgICAgID8gdGhpcy5lbGVtZW50cy5nZXQocGFydGljbGUuaWQpXHJcbiAgICAgICAgICAgIDogdGhpcy5jcmVhdGVQYXJ0aWNsZUVsZW1lbnQocGFydGljbGUsIG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmFwcGx5Q29sb3IpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgb2ZmZXIgYSBjb2xvcmluZyBtZXRob2QsIGFwcGx5IGl0LlxyXG4gICAgICAgICAgICBvcHRpb25zLmFwcGx5Q29sb3IocGFydGljbGUuY29sb3IsIGVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucy5hcHBseU9wYWNpdHkpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgb2ZmZXIgYW4gb3BhY2l0eSBtb2RpZnlpbmcgbWV0aG9kLCBhcHBseSBpdC5cclxuICAgICAgICAgICAgb3B0aW9ucy5hcHBseU9wYWNpdHkocGFydGljbGUub3BhY2l0eSwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmFwcGx5TGlnaHRpbmcpIHtcclxuICAgICAgICAgICAgLy8gSWYgdGhlIG9wdGlvbnMgb2ZmZXIgYSBsaWdodGluZyBtZXRob2QsIGFwcGx5IGl0LlxyXG4gICAgICAgICAgICAvLyBMaWdodGluZyBpcyBjYWxjdWxhdGVkIGFzIGEgY29tYmluYXRpb24gb2YgdGhlIHBhcnRpY2xlJ3Mgbm9ybWFsXHJcbiAgICAgICAgICAgIC8vIGRpcmVjdGlvbiBhbmQgdGhlIGxpZ2h0aW5nIGRpcmVjdGlvbi5cclxuICAgICAgICAgICAgdmFyIG5vcm1hbCA9IHV0aWxfMS5yb3RhdGlvblRvTm9ybWFsKHBhcnRpY2xlLnJvdGF0aW9uKTtcclxuICAgICAgICAgICAgdmFyIGxpZ2h0aW5nQ29lZmZpY2llbnQgPSBub3JtYWwuZG90KHRoaXMubGlnaHQpO1xyXG4gICAgICAgICAgICBvcHRpb25zLmFwcGx5TGlnaHRpbmcobGlnaHRpbmdDb2VmZmljaWVudCwgZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvcHRpb25zLmFwcGx5VHJhbnNmb3JtKSB7XHJcbiAgICAgICAgICAgIC8vIElmIHRoZSBvcHRpb25zIG9mZmVyIGEgdHJhbnNmb3JtYXRpb24gbWV0aG9kLCBhcHBseSBpdC5cclxuICAgICAgICAgICAgLy8gVGhpcyBlbnN1cmVzIHRoZSBwYXJ0aWNsZSBpcyByZW5kZXJlZCBhdCB0aGUgY29ycmVjdCBwb3NpdGlvbiB3aXRoIHRoZSBjb3JyZWN0IHJvdGF0aW9uLlxyXG4gICAgICAgICAgICBvcHRpb25zLmFwcGx5VHJhbnNmb3JtKHBhcnRpY2xlLCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gTWFyayB0aGUgcGFydGljbGUgYXMgcmVuZGVyZWQuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlZFBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlLmlkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgdGhlIEhUTUxFbGVtZW50IGZvciBhIHBhcnRpY2xlIHRoYXQgZG9lcyBub3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAqL1xyXG4gICAgUmVuZGVyZXIucHJvdG90eXBlLmNyZWF0ZVBhcnRpY2xlRWxlbWVudCA9IGZ1bmN0aW9uIChwYXJ0aWNsZSwgb3B0aW9ucykge1xyXG4gICAgICAgIC8vIFJlc29sdmUgdGhlIGVsZW1lbnQgcmV0dXJuZWQgZnJvbSB0aGUgZmFjdG9yeS5cclxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBzaGFwZXNfMS5yZXNvbHZlU2hhcGVGYWN0b3J5KG9wdGlvbnMuc2hhcGVGYWN0b3J5KTtcclxuICAgICAgICAvLyBDbG9uZSB0aGUgbm9kZSB0byBlbnN1cmUgd2UgZG8gbm90IGJyZWFrIGV4aXN0aW5nIGVsZW1lbnRzLlxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gcmVzb2x2ZWQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBlbGVtZW50cyBjYW4gYmUgXCJzdGFja2VkXCIgb250b3Agb2YgZWFjaG90aGVyLlxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgdGhlIG5ldyBlbGVtZW50IGluIHRoZSBtYXAsIHdoaWxlIGFwcGVuZGluZyB0aGUgbmV3IGVsZW1lbnQgdG8gdGhlIERPTS5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzLnNldChwYXJ0aWNsZS5pZCwgY29udGFpbmVyc18xLnBhcnRpY2xlQ29udGFpbmVyLmN1cnJlbnQuYXBwZW5kQ2hpbGQoZWxlbWVudCkpO1xyXG4gICAgICAgIHJldHVybiBlbGVtZW50O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSZW5kZXJlcjtcclxufSgpKTtcclxuZXhwb3J0cy5SZW5kZXJlciA9IFJlbmRlcmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlNjZW5lID0gdm9pZCAwO1xyXG52YXIgZGVidWdfMSA9IHJlcXVpcmUoXCIuL2RlYnVnXCIpO1xyXG52YXIgZW1pdHRlcl8xID0gcmVxdWlyZShcIi4vcGFydGljbGVzL2VtaXR0ZXJcIik7XHJcbnZhciByZW5kZXJlcl8xID0gcmVxdWlyZShcIi4vcGFydGljbGVzL3JlbmRlcmVyXCIpO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIHNjZW5lIHRoYXQgY29udGFpbnMgZW1pdHRlcnMgYW5kIHRoZWlyIHBhcnRpY2xlcy5cclxuICpcclxuICogU2NlbmVzIGFyZSByZXNwb25zaWJsZSBmb3Igc3Bhd25pbmcgYW5kIHVwZGF0aW5nIGVtaXR0ZXJzLCBhbmRcclxuICogcmVtb3ZpbmcgdGhlbSBvbmNlIHRoZXkgYXJlIGRvbmUuXHJcbiAqXHJcbiAqIFNjZW5lcyBhcmUgbm90IGV4cGxpY2l0ZWx5IHByZXNlbnQgaW4gdGhlIERPTSBhcyBhbiBlbGVtZW50LCBvbmx5XHJcbiAqIHRoZSBjb250YWluZWQgcGFydGljbGVzIGFyZS5cclxuICovXHJcbnZhciBTY2VuZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZXMgYSBuZXcgc2NlbmUgYW5kIHN0YXJ0cyB0aGUgdGlja2luZyBqb2IuXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIFNjZW5lKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBlbWl0dGVycyBjdXJyZW50bHkgcHJlc2VudCBpbiB0aGUgc2NlbmUuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5lbWl0dGVycyA9IFtdO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBkZWJ1ZyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHNjZW5lLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZGVidWcgPSBuZXcgZGVidWdfMS5EZWJ1Zyh0aGlzKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgcmVuZGVyZXIgYXNzb2NpYXRlZCB3aXRoIHRoZSBzY2VuZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IHJlbmRlcmVyXzEuUmVuZGVyZXIoKTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgSUQgb2YgdGhlIGN1cnJlbnRseSBzY2hlZHVsZWQgdGljay5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNjaGVkdWxlZFRpY2tJZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IHRpY2ssIHVzZWQgdG8gY2FsY3VsYXRlIGRlbHRhcy5cclxuICAgICAgICAgKlxyXG4gICAgICAgICAqIEBpbml0aWFsVmFsdWUgYHBlcmZvcm1hbmNlLm5vdygpYCAodGltZSBvcmlnaW4pXHJcbiAgICAgICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRE9NSGlnaFJlc1RpbWVTdGFtcFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMubGFzdFRpY2tUaW1lc3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAvLyBFbnN1cmUgdGhlIHNjZW5lIGNvbnRleHQgaXMgcHJlc2VydmVkIG9uIHRoZSB0aWNrLlxyXG4gICAgICAgIHRoaXMudGljayA9IHRoaXMudGljay5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVUaWNrKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBuZXcsIGRlZmF1bHQgZW1pdHRlciBvYmplY3QuXHJcbiAgICAgKi9cclxuICAgIFNjZW5lLnByb3RvdHlwZS5jcmVhdGVFbWl0dGVyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgICB2YXIgZW1pdHRlciA9IG5ldyBlbWl0dGVyXzEuRW1pdHRlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXJzLnB1c2goZW1pdHRlcik7XHJcbiAgICAgICAgcmV0dXJuIGVtaXR0ZXI7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhcnMgYWxsIGVtaXR0ZXJzIGZyb20gdGhlIHNjZW5lLlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2xlYXJlZCBlbWl0dGVycy5cclxuICAgICAqL1xyXG4gICAgU2NlbmUucHJvdG90eXBlLmNsZWFyRW1pdHRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1pdHRlcnMuc3BsaWNlKDApLmxlbmd0aDtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIENsZWFycyB0aGUgcGFydGljbGVzIGZyb20gYWxsIGVtaXR0ZXJzIGluIHRoZSBzY2VuZS5cclxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGRvZXMgbm90IHJlbW92ZSB0aGUgYWN0dWFsIGVtaXR0ZXIgb2JqZWN0cyB0aG91Z2guXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIG51bWJlciBvZiBjbGVhcmVkIHBhcnRpY2xlcy5cclxuICAgICAqL1xyXG4gICAgU2NlbmUucHJvdG90eXBlLmNsZWFyUGFydGljbGVzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXJzLnJlZHVjZShmdW5jdGlvbiAoc3VtLCBlbWl0dGVyKSB7IHJldHVybiBzdW0gKyBlbWl0dGVyLmNsZWFyUGFydGljbGVzKCk7IH0sIDApO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU2NoZWR1bGVzIGEgdGljayBpbiB0aGUgc2NlbmUuXHJcbiAgICAgKi9cclxuICAgIFNjZW5lLnByb3RvdHlwZS5zY2hlZHVsZVRpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZWRUaWNrSWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudGljayk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDYW5jZWxzIGEgcGVuZGluZyB0aWNrIG9wZXJhdGlvbi5cclxuICAgICAqL1xyXG4gICAgU2NlbmUucHJvdG90eXBlLmNhbmNlbFRpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuc2NoZWR1bGVkVGlja0lkKTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFByb2Nlc3NlcyBhIHRpY2sgY3ljbGUsIHVwZGF0aW5nIGFsbCBlbWl0dGVycyBjb250YWluZWQgaW4gdGhlIHNjZW5lLlxyXG4gICAgICogVGhpcyBpcyBoYW5kbGVkIGFzIGEgSlMgYW5pbWF0aW9uIGZyYW1lIGV2ZW50LCBoZW5jZSB0aGUgcGFzc2VkIHRpbWVzdGFtcC5cclxuICAgICAqXHJcbiAgICAgKiBAcmVtYXJrc1xyXG4gICAgICogVGhlIGVtaXR0ZXIgdGlja2luZyBhbmQgcGFydGljbGUgcmVuZGVyaW5nIGlzIHJ1biB1c2luZyB0cnktY2F0Y2ggYmxvY2tzLFxyXG4gICAgICogdG8gZW5zdXJlIHRoYXQgd2UgY2FuIHJlY292ZXIgZnJvbSBwb3RlbnRpYWwgZXJyb3JzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB0aW1lc3RhbXAgVGhlIGN1cnJlbnQgdGltZXN0YW1wIG9mIHRoZSBhbmltYXRpb24gZnJhbWUuXHJcbiAgICAgKi9cclxuICAgIFNjZW5lLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZWxhcHNlZCBkZWx0YSBhbmQgY29udmVydCBpdCB0byBzZWNvbmRzLlxyXG4gICAgICAgIHZhciBkZWx0YSA9ICh0aW1lc3RhbXAgLSB0aGlzLmxhc3RUaWNrVGltZXN0YW1wKSAvIDEwMDA7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gUGVyZm9ybSB0aWNrcyBmb3IgYWxsIHRoZSBlbWl0dGVycyBpbiB0aGUgc2NlbmUuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbWl0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVtaXR0ZXIgPSB0aGlzLmVtaXR0ZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgZW1pdHRlci50aWNrKGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbWl0dGVyLmlzRXhwaXJlZCAmJiBlbWl0dGVyLmNhblJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlcnMuc3BsaWNlKGktLSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSB1cGRhdGluZyB0aGUgc2NlbmUncyBlbWl0dGVyczpcXG5cXFwiXCIgKyBlcnJvciArIFwiXFxcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gSW5zdHJ1Y3QgdGhlIHJlbmRlcmVyIHRvIGRyYXcgdGhlIHBhcnRpY2xlcyBvZiBhbGwgc3lzdGVtcy5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5iZWdpbigpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5lbWl0dGVyczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbWl0dGVyID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IGVtaXR0ZXIucGFydGljbGVzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0aWNsZSA9IF9jW19iXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlclBhcnRpY2xlKHBhcnRpY2xlLCBlbWl0dGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlbmRlcmluZyB0aGUgc2NlbmUncyBwYXJ0aWNsZXM6XFxuXFxcIlwiICsgZXJyb3IgKyBcIlxcXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFBlcmZvcm0gYSB0aWNrIG9uIHRoZSBkZWJ1ZyBpbnRlcmZhY2VcclxuICAgICAgICB0aGlzLmRlYnVnLnRpY2soZGVsdGEpO1xyXG4gICAgICAgIC8vIFNhdmUgdGhlIHRpbWVzdGFtcCBhcyB0aGUgbGFzdCB0aWNrIHRpbWVzdGFtcCBhbmQgc2NoZWR1bGUgYSBuZXcgdGljay5cclxuICAgICAgICB0aGlzLmxhc3RUaWNrVGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVUaWNrKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNjZW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLlNjZW5lID0gU2NlbmU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMucmVzb2x2ZVNoYXBlRmFjdG9yeSA9IGV4cG9ydHMucmVzb2x2YWJsZVNoYXBlcyA9IHZvaWQgMDtcclxudmFyIHZhcmlhdGlvbl8xID0gcmVxdWlyZShcIi4vdmFyaWF0aW9uXCIpO1xyXG4vKipcclxuICogUmVwcmVzZW50cyB0aGUgbG9va3VwIHRoYXQgbWFwcyByZXNvbHZlYWJsZSBlbGVtZW50IGtleXMgdG8gdGhlaXIgSFRNTCBzdHJpbmdzLlxyXG4gKlxyXG4gKiBAcmVtYXJrc1xyXG4gKiBUaGUgZGVmYXVsdCBzaGFwZXMgYXJlIG1hZGUgdG8gZml0IGluc2lkZSBhIGRpbWVuc2lvbiBvZiAxMHgxMCBwaXhlbHMsIGV4Y2VwdFxyXG4gKiB0aGUgJ3N0YXInIHNoYXBlLCB3aGljaCBleGNlZWRzIGl0IHNsaWdodGx5LlxyXG4gKi9cclxuZXhwb3J0cy5yZXNvbHZhYmxlU2hhcGVzID0ge1xyXG4gICAgc3F1YXJlOiBcIjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTBweDsgd2lkdGg6IDEwcHg7XFxcIj48L2Rpdj5cIixcclxuICAgIHJlY3RhbmdsZTogXCI8ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDZweDsgd2lkdGg6IDEwcHg7XFxcIj48L2Rpdj5cIixcclxuICAgIGNpcmNsZTogXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCAyIDJcXFwiIHdpZHRoPVxcXCIxMFxcXCIgaGVpZ2h0PVxcXCIxMFxcXCI+PGNpcmNsZSBjeD1cXFwiMVxcXCIgY3k9XFxcIjFcXFwiIHI9XFxcIjFcXFwiIGZpbGw9XFxcImN1cnJlbnRDb2xvclxcXCIvPjwvc3ZnPlwiLFxyXG4gICAgcm91bmRlZFNxdWFyZTogXCI8ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDEwcHg7IHdpZHRoOiAxMHB4OyBib3JkZXItcmFkaXVzOiAzcHg7XFxcIj48L2Rpdj5cIixcclxuICAgIHJvdW5kZWRSZWN0YW5nbGU6IFwiPGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiA2cHg7IHdpZHRoOiAxMHB4OyBib3JkZXItcmFkaXVzOiAzcHg7XFxcIj48L2Rpdj5cIixcclxuICAgIHN0YXI6IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgNTEyIDUxMlxcXCIgd2lkdGg9XFxcIjE1XFxcIiBoZWlnaHQ9XFxcIjE1XFxcIj48cG9seWdvbiBmaWxsPVxcXCJjdXJyZW50Q29sb3JcXFwiIHBvaW50cz1cXFwiNTEyLDE5Ny44MTYgMzI1Ljk2MSwxODUuNTg1IDI1NS44OTgsOS41NjkgMTg1LjgzNSwxODUuNTg1IDAsMTk3LjgxNiAxNDIuNTM0LDMxOC44NDIgOTUuNzYyLDUwMi40MzEgMjU1Ljg5OCw0MDEuMjEgNDE2LjAzNSw1MDIuNDMxIDM2OS4yNjMsMzE4Ljg0MlxcXCIvPjwvc3ZnPlwiLFxyXG59O1xyXG4vKipcclxuICogUmVzb2x2ZXMgdGhlIHNwZWNpZmllZCBlbGVtZW50IGZhY3RvcnkgdXNpbmcgdGhlIHJlc29sdmFibGUgZWxlbWVudHMsIGlmIG5lZWRlZC5cclxuICovXHJcbmZ1bmN0aW9uIHJlc29sdmVTaGFwZUZhY3RvcnkoZmFjdG9yeSkge1xyXG4gICAgLy8gUmV0cmlldmUgdGhlIHVucmVzb2x2ZWQgZWxlbWVudCBmcm9tIHRoZSBmYWN0b3J5LlxyXG4gICAgdmFyIHNoYXBlID0gdmFyaWF0aW9uXzEuZXZhbHVhdGVWYXJpYXRpb24oZmFjdG9yeSk7XHJcbiAgICAvLyBJZiBhIHN0cmluZyBpcyByZXR1cm5lZCwgd2UgbmVlZCB0byByZXNvbHZlIHRoZSBlbGVtZW50LiBUaGlzIG1lYW5zXHJcbiAgICAvLyBsb29raW5nIHVwIHRoZSBzdHJpbmcgaW4gdGhlIHJlc29sdmVyIGxvb2t1cC4gSWYgdGhlIGtleSB3YXMgbm90XHJcbiAgICAvLyByZXNvbHZhYmxlLCB3ZSB0aHJvdyBhbiBlcnJvci5cclxuICAgIGlmICh0eXBlb2Ygc2hhcGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICB2YXIgcmVzb2x2ZWQgPSBleHBvcnRzLnJlc29sdmFibGVTaGFwZXNbc2hhcGVdO1xyXG4gICAgICAgIGlmICghcmVzb2x2ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHJlc29sdmUgc2hhcGUga2V5ICdcIiArIHNoYXBlICsgXCInLiBEaWQgeW91IGZvcmdldCB0byBhZGQgaXQgdG8gdGhlICdyZXNvbHZhYmxlU2hhcGVzJyBsb29rdXA/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBXZSdyZSBpbiBsdWNrLCB3ZSBjYW4gcmVzb2x2ZSB0aGUgZWxlbWVudCEgV2UgY3JlYXRlIGEgZHVtbXkgPGRpdj4gZWxlbWVudFxyXG4gICAgICAgIC8vIHRvIHNldCB0aGUgaW5uZXJIVE1MIG9mLCBhbmQgcmV0dXJuIHRoZSBmaXJzdCBlbGVtZW50IGNoaWxkLlxyXG4gICAgICAgIHZhciBkdW1teSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZHVtbXkuaW5uZXJIVE1MID0gcmVzb2x2ZWQ7XHJcbiAgICAgICAgcmV0dXJuIGR1bW15LmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNoYXBlO1xyXG59XHJcbmV4cG9ydHMucmVzb2x2ZVNoYXBlRmFjdG9yeSA9IHJlc29sdmVTaGFwZUZhY3Rvcnk7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuTW9kdWxlQnVpbGRlciA9IHZvaWQgMDtcclxudmFyIGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzXCIpO1xyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGJ1aWxkZXIgZm9yIHBhcnRpY2xlIG1vZHVsZXMuIFJldHVybnMgYW4gZXZhbHVhdGFibGUgbW9kdWxlXHJcbiAqIGZ1bmN0aW9uLCB0aGF0IGNhbiBiZSBjb25zdW1lZCBieSBlbWl0dGVycy5cclxuICpcclxuICogQHJlbWFya3NcclxuICogTm90IGFsbCBwcm9wZXJ0aWVzIGNhbiBiZSBkcml2ZW4uIFR5cGVTY3JpcHQgd2lsbCB2YWxpZGF0ZSB0aGlzIGF0IGNvbXBpbGUgdGltZSxcclxuICogYnV0IG5vIGludGVybmFsIHZhbGlkYXRpb24gaXMgcGVyZm9ybWVkIGR1ZSB0byBwZXJmb3JtYW5jZSByZWFzb25zLiBBbHNvLCBub3RlXHJcbiAqIHRoYXQgdGhlIGRyaXZpbmcgZmFjdG9yIGlzIFwibGlmZXRpbWVcIiBieSBkZWZhdWx0LlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGB0c1xyXG4gKiBuZXcgTW9kdWxlQnVpbGRlcigpXHJcbiAqICAgICAuZHJpdmUoXCJzaXplXCIpXHJcbiAqICAgICAuYnkoKHQpID0+IHQgKiAyKVxyXG4gKiAgICAgLnRocm91Z2goXCJsaWZldGltZVwiKVxyXG4gKiAgICAgLmJ1aWxkKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxudmFyIE1vZHVsZUJ1aWxkZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNb2R1bGVCdWlsZGVyKCkge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBmYWN0b3IgZHJpdmluZyB0aGUgYnVpbHQgZnVuY3Rpb24uXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAZGVmYXVsdFZhbHVlIFwibGlmZXRpbWVcIlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuZmFjdG9yID0gXCJsaWZldGltZVwiO1xyXG4gICAgICAgIHRoaXMuaXNSZWxhdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBTcGVjaWZpZXMgdGhlIGtleSBpbiB0aGUgcGFydGljbGUgdGhhdCBzaG91bGQgYmUgZHJpdmVuLlxyXG4gICAgICpcclxuICAgICAqIEByZW1hcmtzXHJcbiAgICAgKiBOb3RlIHRoYXQgbm90IGFsbCBvZiBhIHBhcnRpY2xlJ3MgcHJvcGVydGllcyBhcmUgZHJpdmFibGUgdGhyb3VnaCBtb2R1bGVzLiBJZiB5b3VcclxuICAgICAqIG5lZWQgZnVsbCBjb250cm9sIG9mIGEgcGFydGljbGUgaW5zaWRlIG9mIGEgbW9kdWxlLCB5b3UgY2FuIHVzZSBhIG1vZHVsZSBmdW5jdGlvbiBkaXJlY3RseS5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2hhaW5lZCBidWlsZGVyIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBNb2R1bGVCdWlsZGVyLnByb3RvdHlwZS5kcml2ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICB0aGlzLmRyaXZlcktleSA9IGtleTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgZmFjdG9yIHRvIGRyaXZlIHRoZSBldmFsdWF0ZWQgdmFsdWUgYnkuIFN1cHBvcnRzIFwibGlmZXRpbWVcIiBhbmQgXCJzaXplXCIuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMgVGhlIGNoYWluZWQgYnVpbGRlciBpbnN0YW5jZS5cclxuICAgICAqL1xyXG4gICAgTW9kdWxlQnVpbGRlci5wcm90b3R5cGUudGhyb3VnaCA9IGZ1bmN0aW9uIChmYWN0b3IpIHtcclxuICAgICAgICB0aGlzLmZhY3RvciA9IGZhY3RvcjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIFNwZWNpZmllcyB0aGUgdmFsdWUgdG8gZHJpdmUgdGhlIG1vZHVsZSBiZWhhdmlvdXIgYnkuIFRoaXMgY2FuIGJlIGEgY29uc3RhbnQsXHJcbiAgICAgKiBhIHNwbGluZSBvciBhbiBldmFsdWFibGUgZnVuY3Rpb24uIE5vdGUgdGhhdCBpbiB0aGUgbGFzdCBjYXNlLCB0aGUgZHJpdmluZ1xyXG4gICAgICogZmFjdG9yIGlzIHBhc3NlZCBhcyBhIHBhcmFtZXRlci5cclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyBUaGUgY2hhaW5lZCBidWlsZGVyIGluc3RhbmNlLlxyXG4gICAgICovXHJcbiAgICBNb2R1bGVCdWlsZGVyLnByb3RvdHlwZS5ieSA9IGZ1bmN0aW9uIChkcml2ZXIpIHtcclxuICAgICAgICB0aGlzLmRyaXZlclZhbHVlID0gZHJpdmVyO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIG1vZHVsZSBmdW5jdGlvbiBpcyBzdXBwb3NlZCB0byBhY3QgcmVsYXRpdmUgdG8gdGhlXHJcbiAgICAgKiBwcm9wZXJ0aWVzIGluaXRpYWwgdmFsdWUuXHJcbiAgICAgKlxyXG4gICAgICogQHJlbWFya3NcclxuICAgICAqIE5vdGUgdGhhdCB0aGlzIGlzIG9ubHkgcG9zc2libGUgaWYgYW4gXCJpbml0aWFsKlwiIHByb3BlcnR5IGV4aXN0cyBvbiB0aGVcclxuICAgICAqIHBhcnRpY2xlIG9iamVjdC4gVGhlIG9wZXJhdGlvbiBhcHBsaWVkIHRvIHRoZSBpbml0aWFsIGFuZCBuZXcgdmFsdWVcclxuICAgICAqIGlzIGRlcGVuZGFudCBvbiB0aGVpciB0eXBlOlxyXG4gICAgICogLSBgVmVjdG9yYDogQm90aCB2ZWN0b3JzIGFyZSBhZGRlZC5cclxuICAgICAqIC0gYG51bWJlcmA6IEJvdGggbnVtYmVycyBhcmUgbXVsdGlwbGllZC5cclxuICAgICAqXHJcbiAgICAgKiBGb3IgbW9yZSBhZHZhbmNlZCByZWxhdGl2ZSBjdXN0b21pemF0aW9ucywgY29uc2lkZXIgdXNpbmcgdGhlIHBhcnRpY2xlXHJcbiAgICAgKiBvYmplY3QgaW4gdGhlIGRyaXZlciB2YWx1ZSBmdW5jdGlvbiBpbnN0ZWFkLCBsaWtlOlxyXG4gICAgICogYGBgdHNcclxuICAgICAqIC5ieSgodCwgcCkgPT4gcC5pbml0aWFsU2l6ZSArIHQgKiAyKTtcclxuICAgICAqIGBgYFxyXG4gICAgICovXHJcbiAgICBNb2R1bGVCdWlsZGVyLnByb3RvdHlwZS5yZWxhdGl2ZSA9IGZ1bmN0aW9uIChpc1JlbGF0aXZlKSB7XHJcbiAgICAgICAgaWYgKGlzUmVsYXRpdmUgPT09IHZvaWQgMCkgeyBpc1JlbGF0aXZlID0gdHJ1ZTsgfVxyXG4gICAgICAgIHRoaXMuaXNSZWxhdGl2ZSA9IGlzUmVsYXRpdmU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBDb25zdW1lcyB0aGUgYnVpbGRlciBhbmQgcmV0dXJucyBhbiBldmFsdWF0YWJsZSBtb2R1bGUgZnVuY3Rpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHJlbWFya3NcclxuICAgICAqIE5vdGUgdGhhdCB5b3UgbmVlZCB0byBzcGVjaWZ5IHRoZSBkcml2aW5nIGtleSBhbmQgdmFsdWUsIG90aGVyd2lzZSBhbiBlcnJvclxyXG4gICAgICogd2lsbCBiZSB0aHJvd24uXHJcbiAgICAgKi9cclxuICAgIE1vZHVsZUJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRyaXZlcktleSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBkcml2aW5nIGtleSB3YXMgcHJvdmlkZWQgaW4gdGhlIG1vZHVsZSBidWlsZGVyLiBEaWQgeW91IGZvcmdldCBhICcuZHJpdmUoKScgY2FsbD9cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5kcml2ZXJWYWx1ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBkcml2aW5nIHZhbHVlIHdhcyBwcm92aWRlZCBpbiB0aGUgbW9kdWxlIGJ1aWxkZXIuIERpZCB5b3UgZm9yZ2V0IGEgJy50aHJvdWdoKCknIGNhbGw/XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcnRpY2xlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURyaXZlblByb3BlcnR5KHBhcnRpY2xlLCBfdGhpcy5kcml2ZXJLZXksIGV2YWx1YXRlTW9kdWxlRHJpdmVyKF90aGlzLmRyaXZlclZhbHVlLCBjYWxjdWxhdGVNb2R1bGVGYWN0b3IoX3RoaXMuZmFjdG9yLCBwYXJ0aWNsZSksIHBhcnRpY2xlKSwgX3RoaXMuaXNSZWxhdGl2ZSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTW9kdWxlQnVpbGRlcjtcclxufSgpKTtcclxuZXhwb3J0cy5Nb2R1bGVCdWlsZGVyID0gTW9kdWxlQnVpbGRlcjtcclxuLyoqXHJcbiAqIEV2YWx1YXRlcyB0aGUgbW9kdWxlIGRyaXZlciB1c2luZyBhIHNwZWNpZmllZCBmYWN0b3IuXHJcbiAqL1xyXG5mdW5jdGlvbiBldmFsdWF0ZU1vZHVsZURyaXZlcihkcml2ZXIsIGZhY3RvciwgcGFydGljbGUpIHtcclxuICAgIGlmICh0eXBlb2YgZHJpdmVyID09PSBcIm9iamVjdFwiICYmIFwiZXZhbHVhdGVcIiBpbiBkcml2ZXIpIHtcclxuICAgICAgICByZXR1cm4gZHJpdmVyLmV2YWx1YXRlKGZhY3Rvcik7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGRyaXZlciA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGRyaXZlcihmYWN0b3IsIHBhcnRpY2xlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkcml2ZXI7XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgYSBtb2R1bGUgZmFjdG9yIHVzaW5nIGEgc3BlY2lmaWVkIHBhcnRpY2xlIGFzIGNvbnRleHQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhdGVNb2R1bGVGYWN0b3IoZmFjdG9yLCBwYXJ0aWNsZSkge1xyXG4gICAgc3dpdGNoIChmYWN0b3IpIHtcclxuICAgICAgICBjYXNlIFwibGlmZXRpbWVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnRpY2xlLmluaXRpYWxMaWZldGltZSAtIHBhcnRpY2xlLmxpZmV0aW1lO1xyXG4gICAgICAgIGNhc2UgXCJyZWxhdGl2ZUxpZmV0aW1lXCI6XHJcbiAgICAgICAgICAgIHJldHVybiAoKHBhcnRpY2xlLmluaXRpYWxMaWZldGltZSAtIHBhcnRpY2xlLmxpZmV0aW1lKSAvXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWNsZS5pbml0aWFsTGlmZXRpbWUpO1xyXG4gICAgICAgIGNhc2UgXCJzaXplXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJ0aWNsZS5zaXplO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZHJpdmluZyBmYWN0b3IgJ1wiICsgZmFjdG9yICsgXCInLlwiKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogVXBkYXRlcyBhIGRyaXZlbiBwcm9wZXJ0eSBvZiBhIHBhcnRpY2xlIHVzaW5nIHRoZSBzcGVjaWZpZWQgdmFsdWUuXHJcbiAqXHJcbiAqIEByZW1hcmtzXHJcbiAqIElmIHRoZSBvcGVyYXRpb24gaXMgbWFya2VkIGFzIHJlbGF0aXZlLCB0aGUgZnVuY3Rpb24gaW5mZXJzIHRoZSBuZXcgdmFsdWVcclxuICogdGhyb3VnaCB0aGUgdmFsdWUncyB0eXBlLiBOb3RlIHRoYXQgcmVsYXRpdmUgcHJvcGVydGllcyBtdXN0IGhhdmUgYVxyXG4gKiBjb3JyZXNwb25kaW5nIFwiaW5pdGlhbCpcIiB2YWx1ZSBpbiB0aGUgcGFydGljbGUncyBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlRHJpdmVuUHJvcGVydHkocGFydGljbGUsIGtleSwgdmFsdWUsIHJlbGF0aXZlKSB7XHJcbiAgICBpZiAocmVsYXRpdmUgPT09IHZvaWQgMCkgeyByZWxhdGl2ZSA9IGZhbHNlOyB9XHJcbiAgICBpZiAoIXJlbGF0aXZlKSB7XHJcbiAgICAgICAgcGFydGljbGVba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGluaXRpYWwgPSBwYXJ0aWNsZVtcImluaXRpYWxcIiArIGtleVswXS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKV07XHJcbiAgICAgICAgaWYgKHR5cGVvZiBpbml0aWFsID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byB1c2UgcmVsYXRpdmUgY2hhaW5pbmcgd2l0aCBrZXkgJ1wiICsga2V5ICsgXCInOyBubyBpbml0aWFsIHZhbHVlIGV4aXN0cy5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIGNvbXBvbmVudHNfMS5WZWN0b3IpIHtcclxuICAgICAgICAgICAgdXBkYXRlRHJpdmVuUHJvcGVydHkocGFydGljbGUsIGtleSwgaW5pdGlhbC5hZGQodmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZURyaXZlblByb3BlcnR5KHBhcnRpY2xlLCBrZXksIGluaXRpYWwgKiB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gdXNlIHJlbGF0aXZlIGNoYWluaW5nIHdpdGggcGFydGljbGUga2V5ICdcIiArIGtleSArIFwiJzsgbm8gcmVsYXRpdmUgb3BlcmF0aW9uIGZvciAnXCIgKyB2YWx1ZSArIFwiJyBjb3VsZCBiZSBpbmZlcnJlZC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuY29uZmV0dGkgPSB2b2lkIDA7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi4vXCIpO1xyXG52YXIgY29tcG9uZW50c18xID0gcmVxdWlyZShcIi4uL2NvbXBvbmVudHNcIik7XHJcbnZhciBtb2R1bGVzXzEgPSByZXF1aXJlKFwiLi4vc3lzdGVtcy9tb2R1bGVzXCIpO1xyXG52YXIgcmFuZG9tID0gcmVxdWlyZShcIi4uL3N5c3RlbXMvcmFuZG9tXCIpO1xyXG52YXIgc291cmNlcyA9IHJlcXVpcmUoXCIuLi9zeXN0ZW1zL3NvdXJjZXNcIik7XHJcbnZhciB2YXJpYXRpb24gPSByZXF1aXJlKFwiLi4vc3lzdGVtcy92YXJpYXRpb25cIik7XHJcbnZhciB1dGlsID0gcmVxdWlyZShcIi4uL3V0aWxcIik7XHJcbi8qKlxyXG4gKiBUaGUgc3RhbmRhcmQgY29uZmV0dGkgdGVtcGxhdGUuXHJcbiAqXHJcbiAqIEBwYXJhbSBzb3VyY2UgVGhlIHNvdXJjZSB0byBlbWl0IHRoZSBjb25mZXR0aSBmcm9tLlxyXG4gKiBAcGFyYW0gb3B0aW9ucyBUaGUgKG9wdGlvbmFsKSBjb25maWd1cmF0aW9uIG92ZXJyaWRlcy5cclxuICovXHJcbmZ1bmN0aW9uIGNvbmZldHRpKHNvdXJjZSwgb3B0aW9ucykge1xyXG4gICAgdmFyIHBvcHVsYXRlZCA9IHV0aWwub3ZlcnJpZGVEZWZhdWx0cyh7XHJcbiAgICAgICAgY291bnQ6IHZhcmlhdGlvbi5yYW5nZSgyMCwgNDApLFxyXG4gICAgICAgIHNwcmVhZDogdmFyaWF0aW9uLnJhbmdlKDM1LCA0NSksXHJcbiAgICAgICAgc3BlZWQ6IHZhcmlhdGlvbi5yYW5nZSgzMDAsIDYwMCksXHJcbiAgICAgICAgc2l6ZTogdmFyaWF0aW9uLnNrZXcoMSwgMC4yKSxcclxuICAgICAgICByb3RhdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmFuZG9tLnJhbmRvbVVuaXRWZWN0b3IoKS5zY2FsZSgxODApOyB9LFxyXG4gICAgICAgIGNvbG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21wb25lbnRzXzEuQ29sb3IuZnJvbUhzbChyYW5kb20ucmFuZG9tUmFuZ2UoMCwgMzYwKSwgMTAwLCA3MCk7IH0sXHJcbiAgICAgICAgbW9kdWxlczogW1xyXG4gICAgICAgICAgICBuZXcgbW9kdWxlc18xLk1vZHVsZUJ1aWxkZXIoKVxyXG4gICAgICAgICAgICAgICAgLmRyaXZlKFwic2l6ZVwiKVxyXG4gICAgICAgICAgICAgICAgLmJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiBNYXRoLm1pbigxLCB0ICogMyk7IH0pXHJcbiAgICAgICAgICAgICAgICAucmVsYXRpdmUoKVxyXG4gICAgICAgICAgICAgICAgLmJ1aWxkKCksXHJcbiAgICAgICAgICAgIG5ldyBtb2R1bGVzXzEuTW9kdWxlQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuZHJpdmUoXCJyb3RhdGlvblwiKVxyXG4gICAgICAgICAgICAgICAgLmJ5KGZ1bmN0aW9uICh0KSB7IHJldHVybiBuZXcgY29tcG9uZW50c18xLlZlY3RvcigxNDAsIDIwMCwgMjYwKS5zY2FsZSh0KTsgfSlcclxuICAgICAgICAgICAgICAgIC5yZWxhdGl2ZSgpXHJcbiAgICAgICAgICAgICAgICAuYnVpbGQoKSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHNoYXBlczogW1wic3F1YXJlXCIsIFwiY2lyY2xlXCJdLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICB2YXIgZW1pdHRlciA9IF9fMS5zY2VuZS5jdXJyZW50LmNyZWF0ZUVtaXR0ZXIoe1xyXG4gICAgICAgIGVtaXR0ZXJPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGxvb3BzOiAxLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogOCxcclxuICAgICAgICAgICAgbW9kdWxlczogcG9wdWxhdGVkLm1vZHVsZXMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWlzc2lvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgcmF0ZTogMCxcclxuICAgICAgICAgICAgYnVyc3RzOiBbeyB0aW1lOiAwLCBjb3VudDogcG9wdWxhdGVkLmNvdW50IH1dLFxyXG4gICAgICAgICAgICBzb3VyY2VTYW1wbGVyOiBzb3VyY2VzLmR5bmFtaWNTb3VyY2Uoc291cmNlKSxcclxuICAgICAgICAgICAgYW5nbGU6IHZhcmlhdGlvbi5za2V3KC05MCwgdmFyaWF0aW9uLmV2YWx1YXRlVmFyaWF0aW9uKHBvcHVsYXRlZC5zcHJlYWQpKSxcclxuICAgICAgICAgICAgaW5pdGlhbExpZmV0aW1lOiA4LFxyXG4gICAgICAgICAgICBpbml0aWFsU3BlZWQ6IHBvcHVsYXRlZC5zcGVlZCxcclxuICAgICAgICAgICAgaW5pdGlhbFNpemU6IHBvcHVsYXRlZC5zaXplLFxyXG4gICAgICAgICAgICBpbml0aWFsUm90YXRpb246IHBvcHVsYXRlZC5yb3RhdGlvbixcclxuICAgICAgICAgICAgaW5pdGlhbENvbG9yOiBwb3B1bGF0ZWQuY29sb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW5kZXJlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgc2hhcGVGYWN0b3J5OiBwb3B1bGF0ZWQuc2hhcGVzLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBlbWl0dGVyO1xyXG59XHJcbmV4cG9ydHMuY29uZmV0dGkgPSBjb25mZXR0aTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5zcGFya2xlcyA9IHZvaWQgMDtcclxudmFyIF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxudmFyIGNvbXBvbmVudHNfMSA9IHJlcXVpcmUoXCIuLi9jb21wb25lbnRzXCIpO1xyXG52YXIgbW9kdWxlc18xID0gcmVxdWlyZShcIi4uL3N5c3RlbXMvbW9kdWxlc1wiKTtcclxudmFyIHJhbmRvbSA9IHJlcXVpcmUoXCIuLi9zeXN0ZW1zL3JhbmRvbVwiKTtcclxudmFyIHNvdXJjZXMgPSByZXF1aXJlKFwiLi4vc3lzdGVtcy9zb3VyY2VzXCIpO1xyXG52YXIgdmFyaWF0aW9uID0gcmVxdWlyZShcIi4uL3N5c3RlbXMvdmFyaWF0aW9uXCIpO1xyXG52YXIgdXRpbCA9IHJlcXVpcmUoXCIuLi91dGlsXCIpO1xyXG4vKipcclxuICogVGhlIHN0YW5kYXJkIHNwYXJrbGVzIHRlbXBsYXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0gc291cmNlIFRoZSBzb3VyY2UgdG8gZW1pdCB0aGUgc3BhcmtsZXMgZnJvbS5cclxuICogQHBhcmFtIG9wdGlvbnMgVGhlIChvcHRpb25hbCkgY29uZmlndXJhdGlvbiBvdmVycmlkZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiBzcGFya2xlcyhzb3VyY2UsIG9wdGlvbnMpIHtcclxuICAgIHZhciBwb3B1bGF0ZWQgPSB1dGlsLm92ZXJyaWRlRGVmYXVsdHMoe1xyXG4gICAgICAgIGxpZmV0aW1lOiB2YXJpYXRpb24ucmFuZ2UoMSwgMiksXHJcbiAgICAgICAgY291bnQ6IHZhcmlhdGlvbi5yYW5nZSgxMCwgMjApLFxyXG4gICAgICAgIHNwZWVkOiB2YXJpYXRpb24ucmFuZ2UoMTAwLCAyMDApLFxyXG4gICAgICAgIHNpemU6IHZhcmlhdGlvbi5yYW5nZSgwLjgsIDEuOCksXHJcbiAgICAgICAgcm90YXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBjb21wb25lbnRzXzEuVmVjdG9yKDAsIDAsIHJhbmRvbS5yYW5kb21SYW5nZSgwLCAzNjApKTsgfSxcclxuICAgICAgICBjb2xvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tcG9uZW50c18xLkNvbG9yLmZyb21Ic2woNTAsIDEwMCwgcmFuZG9tLnJhbmRvbVJhbmdlKDU1LCA4NSkpOyB9LFxyXG4gICAgICAgIG1vZHVsZXM6IFtcclxuICAgICAgICAgICAgbmV3IG1vZHVsZXNfMS5Nb2R1bGVCdWlsZGVyKClcclxuICAgICAgICAgICAgICAgIC5kcml2ZShcInJvdGF0aW9uXCIpXHJcbiAgICAgICAgICAgICAgICAuYnkoZnVuY3Rpb24gKHQpIHsgcmV0dXJuIG5ldyBjb21wb25lbnRzXzEuVmVjdG9yKDAsIDAsIDIwMCkuc2NhbGUodCk7IH0pXHJcbiAgICAgICAgICAgICAgICAucmVsYXRpdmUoKVxyXG4gICAgICAgICAgICAgICAgLmJ1aWxkKCksXHJcbiAgICAgICAgICAgIG5ldyBtb2R1bGVzXzEuTW9kdWxlQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuZHJpdmUoXCJzaXplXCIpXHJcbiAgICAgICAgICAgICAgICAuYnkobmV3IGNvbXBvbmVudHNfMS5OdW1lcmljU3BsaW5lKHsgdGltZTogMCwgdmFsdWU6IDAgfSwgeyB0aW1lOiAwLjMsIHZhbHVlOiAxIH0sIHsgdGltZTogMC43LCB2YWx1ZTogMSB9LCB7IHRpbWU6IDEsIHZhbHVlOiAwIH0pKVxyXG4gICAgICAgICAgICAgICAgLnRocm91Z2goXCJyZWxhdGl2ZUxpZmV0aW1lXCIpXHJcbiAgICAgICAgICAgICAgICAucmVsYXRpdmUoKVxyXG4gICAgICAgICAgICAgICAgLmJ1aWxkKCksXHJcbiAgICAgICAgICAgIG5ldyBtb2R1bGVzXzEuTW9kdWxlQnVpbGRlcigpXHJcbiAgICAgICAgICAgICAgICAuZHJpdmUoXCJvcGFjaXR5XCIpXHJcbiAgICAgICAgICAgICAgICAuYnkobmV3IGNvbXBvbmVudHNfMS5OdW1lcmljU3BsaW5lKHsgdGltZTogMCwgdmFsdWU6IDEgfSwgeyB0aW1lOiAwLjUsIHZhbHVlOiAxIH0sIHsgdGltZTogMSwgdmFsdWU6IDAgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhyb3VnaChcInJlbGF0aXZlTGlmZXRpbWVcIilcclxuICAgICAgICAgICAgICAgIC5idWlsZCgpLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc2hhcGVzOiBcInN0YXJcIixcclxuICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgdmFyIGVtaXR0ZXIgPSBfXzEuc2NlbmUuY3VycmVudC5jcmVhdGVFbWl0dGVyKHtcclxuICAgICAgICBlbWl0dGVyT3B0aW9uczoge1xyXG4gICAgICAgICAgICBsb29wczogMSxcclxuICAgICAgICAgICAgZHVyYXRpb246IDMsXHJcbiAgICAgICAgICAgIHVzZUdyYXZpdHk6IGZhbHNlLFxyXG4gICAgICAgICAgICBtb2R1bGVzOiBwb3B1bGF0ZWQubW9kdWxlcyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtaXNzaW9uT3B0aW9uczoge1xyXG4gICAgICAgICAgICByYXRlOiAwLFxyXG4gICAgICAgICAgICBidXJzdHM6IFt7IHRpbWU6IDAsIGNvdW50OiBwb3B1bGF0ZWQuY291bnQgfV0sXHJcbiAgICAgICAgICAgIHNvdXJjZVNhbXBsZXI6IHNvdXJjZXMuZHluYW1pY1NvdXJjZShzb3VyY2UpLFxyXG4gICAgICAgICAgICBhbmdsZTogdmFyaWF0aW9uLnJhbmdlKDAsIDM2MCksXHJcbiAgICAgICAgICAgIGluaXRpYWxMaWZldGltZTogcG9wdWxhdGVkLmxpZmV0aW1lLFxyXG4gICAgICAgICAgICBpbml0aWFsU3BlZWQ6IHBvcHVsYXRlZC5zcGVlZCxcclxuICAgICAgICAgICAgaW5pdGlhbFNpemU6IHBvcHVsYXRlZC5zaXplLFxyXG4gICAgICAgICAgICBpbml0aWFsUm90YXRpb246IHBvcHVsYXRlZC5yb3RhdGlvbixcclxuICAgICAgICAgICAgaW5pdGlhbENvbG9yOiBwb3B1bGF0ZWQuY29sb3IsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW5kZXJlck9wdGlvbnM6IHtcclxuICAgICAgICAgICAgYXBwbHlMaWdodGluZzogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBzaGFwZUZhY3Rvcnk6IHBvcHVsYXRlZC5zaGFwZXMsXHJcbiAgICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGVtaXR0ZXI7XHJcbn1cclxuZXhwb3J0cy5zcGFya2xlcyA9IHNwYXJrbGVzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGV4cG9ydHMsIHApKSBfX2NyZWF0ZUJpbmRpbmcoZXhwb3J0cywgbSwgcCk7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2NvbmZldHRpXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3NwYXJrbGVzXCIpLCBleHBvcnRzKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuZm9yY2VJbml0ID0gZXhwb3J0cy51dGlsID0gZXhwb3J0cy5tYXRoID0gZXhwb3J0cy5yYW5kb20gPSBleHBvcnRzLnNvdXJjZXMgPSBleHBvcnRzLnZhcmlhdGlvbiA9IGV4cG9ydHMuRW1pdHRlciA9IGV4cG9ydHMuUGFydGljbGUgPSBleHBvcnRzLnNldHRpbmdzID0gZXhwb3J0cy5zY2VuZSA9IHZvaWQgMDtcclxudmFyIHNjZW5lXzEgPSByZXF1aXJlKFwiLi9zY2VuZVwiKTtcclxudmFyIHV0aWxfMSA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9jb21wb25lbnRzXCIpLCBleHBvcnRzKTtcclxuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RlbXBsYXRlc1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zeXN0ZW1zL3NoYXBlc1wiKSwgZXhwb3J0cyk7XHJcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zeXN0ZW1zL21vZHVsZXNcIiksIGV4cG9ydHMpO1xyXG4vLyBDcmVhdGUgdGhlIGxhenktaW5pdGlhbGl6aW5nIHNjZW5lLlxyXG5leHBvcnRzLnNjZW5lID0gbmV3IHV0aWxfMS5MYXp5KGZ1bmN0aW9uICgpIHtcclxuICAgIC8vIFRoZSBsaWJyYXJ5IHJlcXVpcmVzIHRoZSB1c2Ugb2YgdGhlIERPTSwgaGVuY2UgaXQgY2Fubm90IHJ1biBpbiBub24tYnJvd3NlciBlbnZpcm9ubWVudHMuXHJcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJdCBzZWVtcyBsaWtlIHlvdSBhcmUgdHJ5aW5nIHRvIHJ1biBwYXJ0eS5qcyBpbiBhIG5vbi1icm93c2VyLWxpa2UgZW52aXJvbm1lbnQsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBzY2VuZV8xLlNjZW5lKCk7XHJcbn0pO1xyXG52YXIgc2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL3NldHRpbmdzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJzZXR0aW5nc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0dGluZ3NfMS5zZXR0aW5nczsgfSB9KTtcclxudmFyIHBhcnRpY2xlXzEgPSByZXF1aXJlKFwiLi9wYXJ0aWNsZXMvcGFydGljbGVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlBhcnRpY2xlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBwYXJ0aWNsZV8xLlBhcnRpY2xlOyB9IH0pO1xyXG52YXIgZW1pdHRlcl8xID0gcmVxdWlyZShcIi4vcGFydGljbGVzL2VtaXR0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkVtaXR0ZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtaXR0ZXJfMS5FbWl0dGVyOyB9IH0pO1xyXG5leHBvcnRzLnZhcmlhdGlvbiA9IHJlcXVpcmUoXCIuL3N5c3RlbXMvdmFyaWF0aW9uXCIpO1xyXG5leHBvcnRzLnNvdXJjZXMgPSByZXF1aXJlKFwiLi9zeXN0ZW1zL3NvdXJjZXNcIik7XHJcbmV4cG9ydHMucmFuZG9tID0gcmVxdWlyZShcIi4vc3lzdGVtcy9yYW5kb21cIik7XHJcbmV4cG9ydHMubWF0aCA9IHJlcXVpcmUoXCIuL3N5c3RlbXMvbWF0aFwiKTtcclxuZXhwb3J0cy51dGlsID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuLyoqXHJcbiAqIEZvcmNlcyB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIG90aGVyd2lzZSBsYXp5IHNjZW5lLlxyXG4gKi9cclxuZnVuY3Rpb24gZm9yY2VJbml0KCkge1xyXG4gICAgZXhwb3J0cy5zY2VuZS5jdXJyZW50O1xyXG59XHJcbmV4cG9ydHMuZm9yY2VJbml0ID0gZm9yY2VJbml0O1xyXG5leHBvcnRzLmRlZmF1bHQgPSByZXF1aXJlKFwiLi9cIik7XHJcbiIsImltcG9ydCB7IHR5cGUgUGx1Z2luQ29udHJhY3QgfSBmcm9tICdAbmludGV4L2Zvcm0tcGx1Z2luLWNvbnRyYWN0JztcblxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGx1Z2luQ29udHJhY3QgPSB7XG5cdGNvbnRyb2xOYW1lOiAnX19wbHVnaW5Db250cm9sTmFtZV9fJyxcblx0Z3JvdXBOYW1lOiAnX19wbHVnaW5Hcm91cE5hbWVfXycsXG5cdGZhbGxiYWNrRGlzYWJsZVN1Ym1pdDogZmFsc2UsXG5cdGRlc2NyaXB0aW9uOiAnRW5qb3kgdGhlIENvbmZldHRpIG9uIHRoZSBGb3JtIHRvIGNlbGVicmF0ZScsXG5cdHZlcnNpb246ICcxLjAnLFxuXHRwcm9wZXJ0aWVzOiB7XG5cdFx0c3RhcnRQYXJ0eVRyaWdnZXI6IHtcblx0XHRcdHR5cGU6ICdib29sZWFuJyxcblx0XHRcdHRpdGxlOiAnRW5hYmxlIHRoZSBFZmZlY3QnLFxuXHRcdH0sXG5cdFx0dHlwZW9mRWZmZWN0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGVudW06IFsnQ29uZmV0dGknLCAnU3BhcmtsZSddLFxuXHRcdFx0dGl0bGU6ICdTZWxlY3QgdGhlIEVmZmVjdFx0Jyxcblx0XHR9LFxuXHR9LFxuXHRldmVudHM6IFsnbnR4LXZhbHVlLWNoYW5nZSddLFxuXHRzdGFuZGFyZFByb3BlcnRpZXM6IHtcblx0XHRmaWVsZExhYmVsOiB0cnVlLFxuXHRcdGRlZmF1bHRWYWx1ZTogdHJ1ZSxcblx0fSxcbn07XG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xuXG5leHBvcnQgY29uc3Qgc3R5bGVzID0gY3NzYFxuXHQ6aG9zdCB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG5gO1xuIiwiaW1wb3J0IHsgdHlwZSBQbHVnaW5Db250cmFjdCB9IGZyb20gJ0BuaW50ZXgvZm9ybS1wbHVnaW4tY29udHJhY3QnO1xuaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XG5pbXBvcnQgeyBjdXN0b21FbGVtZW50LCBwcm9wZXJ0eSB9IGZyb20gJ2xpdC9kZWNvcmF0b3JzLmpzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCBwYXJ0eSBmcm9tICdwYXJ0eS1qcyc7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2NvbmZldHRpLWZvcm0uY29uZmlnJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4vY29uZmV0dGktZm9ybS5zdHlsZXMnO1xuXG5AY3VzdG9tRWxlbWVudCgncGx1Z2luLWVsZW1lbnRuYW1lJylcbmV4cG9ydCBjbGFzcyBDb25mZXR0aSBleHRlbmRzIExpdEVsZW1lbnQge1xuXHRzdGF0aWMgZ2V0TWV0YUNvbmZpZyA9ICgpOiBQcm9taXNlPFBsdWdpbkNvbnRyYWN0PiB8IFBsdWdpbkNvbnRyYWN0ID0+IGNvbmZpZztcblxuXHRzdGF0aWMgb3ZlcnJpZGUgc3R5bGVzID0gc3R5bGVzO1xuXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuXHRkZWNsYXJlIHNhbXBsZVByb3BlcnR5OiBzdHJpbmc7XG5cblx0QHByb3BlcnR5KHsgdHlwZTogQm9vbGVhbiB9KVxuXHRkZWNsYXJlIHN0YXJ0UGFydHlUcmlnZ2VyOiBib29sZWFuO1xuXG5cdEBwcm9wZXJ0eSh7IHR5cGU6IFN0cmluZyB9KVxuXHRkZWNsYXJlIHR5cGVvZkVmZmVjdDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5zYW1wbGVQcm9wZXJ0eSA9ICcnO1xuXHR9XG5cblx0b3ZlcnJpZGUgcmVuZGVyKCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0UGFydHlUcmlnZ2VyID09PSB0cnVlKSB7XG5cdFx0XHR0aGlzLnN0YXJ0UGFydHkoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaHRtbGAgPGRpdiBpZD1cInBhcnR5LWNvbnRhaW5lclwiPjwvZGl2PiBgO1xuXHR9XG5cblx0Ly8gRnVuY3Rpb24gdG8gc3RhcnQgdGhlIHBhcnR5IHVzaW5nIHBhcnR5LmpzXG5cdHN0YXJ0UGFydHkoKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290Py5nZXRFbGVtZW50QnlJZCgncGFydHktY29udGFpbmVyJyk7XG5cblx0XHRpZiAoY29udGFpbmVyKSB7XG5cdFx0XHRpZiAodGhpcy50eXBlb2ZFZmZlY3QgPT09ICdTcGFya2xlJykge1xuXHRcdFx0XHRwYXJ0eS5zcGFya2xlcyhjb250YWluZXIsIHtcblx0XHRcdFx0XHRjb3VudDogNTAsXG5cdFx0XHRcdFx0c3BlZWQ6IHBhcnR5LnZhcmlhdGlvbi5yYW5nZSg1MCwgMzAwKSxcblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJ0eS5jb25mZXR0aShjb250YWluZXIsIHtcblx0XHRcdFx0XHRjb3VudDogcGFydHkudmFyaWF0aW9uLnJhbmdlKDIwLCA2MCksXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwic2V0dGluZ3MiLCJ2YWx1ZSIsImRlYnVnIiwiZ3Jhdml0eSIsInpJbmRleCIsInJlc3BlY3RSZWR1Y2VkTW90aW9uIiwib3ZlcnJpZGVEZWZhdWx0cyIsImRlZmF1bHRzIiwib3ZlcnJpZGVzIiwiYXNzaWduIiwiY29uZmlnIiwiQ2lyY2xlIiwiY2lyY2xlIiwieCIsInkiLCJyYWRpdXMiLCJ0aGlzIiwiemVybyIsIm1hdGhfMSIsImxlcnAiLCJhIiwiYiIsInQiLCJleHBvcnRzIiwiYXBwcm94aW1hdGVseSIsImNsYW1wIiwic2xlcnAiLCJyYWQyZGVnIiwiZGVnMnJhZCIsIk1hdGgiLCJQSSIsImVwc2lsb24iLCJjb3MiLCJpbnZsZXJwIiwidiIsIm1pbiIsIm1heCIsImFicyIsImNvbG9yIiwiQ29sb3IiLCJyZXF1aXJlJCQwIiwiciIsImciLCJ2YWx1ZXMiLCJGbG9hdDMyQXJyYXkiLCJyZ2IiLCJwcm90b3R5cGUiLCJnZXQiLCJzZXQiLCJmbG9vciIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJtaXgiLCJ3ZWlnaHQiLCJ0b0hleCIsImhleCIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJqb2luIiwiZnJvbUhleCIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJwYXJzZUludCIsImZyb21Ic2wiLCJoIiwicyIsImwiLCJodWUycmdiIiwidG8yNTUiLCJwIiwicSIsIndoaXRlIiwiYmxhY2siLCJzcGxpbmUiLCJTcGxpbmUiLCJrZXlzIiwiX2kiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJFcnJvciIsIkFycmF5IiwiaXNBcnJheSIsImV2YWx1YXRlIiwidGltZSIsImxvd2VyS2V5IiwidXBwZXJLZXkiLCJjb250YWluZWRUaW1lIiwidXBwZXJLZXlJbmRleCIsImFzY2VuZGluZ0tleXMiLCJzb3J0IiwiZmluZEluZGV4IiwiaW50ZXJwb2xhdGUiLCJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiZCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiX18iLCJjb25zdHJ1Y3RvciIsImNyZWF0ZSIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJpIiwiaWwiLCJqIiwic3BsaW5lXzEiLCJncmFkaWVudCIsIkdyYWRpZW50IiwiX3N1cGVyIiwiYXBwbHkiLCJzb2xpZCIsInNpbXBsZSIsImNvbG9ycyIsInN0ZXAiLCJiaW5kIiwibWFwIiwiaW5kZXgiLCJudW1lcmljU3BsaW5lIiwiTnVtZXJpY1NwbGluZSIsInJlcXVpcmUkJDEiLCJSZWN0IiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZnJvbVNjcmVlbiIsIndpbmRvdyIsInNjcm9sbFgiLCJzY3JvbGxZIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZnJvbUVsZW1lbnQiLCJlbGVtZW50IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidmVjdG9yIiwiVmVjdG9yIiwieiIsInh5eiIsIm1hZ25pdHVkZSIsInNxcnQiLCJzcXJNYWduaXR1ZGUiLCJhZGQiLCJzdWJ0cmFjdCIsInNjYWxlIiwic2NhbGFyIiwibm9ybWFsaXplZCIsImFuZ2xlIiwiYWNvcyIsImNyb3NzIiwiZG90IiwiZnJvbTJkQW5nbGUiLCJzaW4iLCJvbmUiLCJyaWdodCIsInVwIiwiZm9yd2FyZCIsImNvbXBvbmVudHNfMSIsIl9fY3JlYXRlQmluZGluZyIsIm8iLCJtIiwiayIsImsyIiwidW5kZWZpbmVkIiwiX19leHBvcnRTdGFyIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwicmVxdWlyZSQkNSIsInJvdGF0aW9uIiwicm90YXRpb25Ub05vcm1hbCIsImFscGhhIiwiYmV0YSIsInJ1bGVzIiwiZGVzcGF3bmluZ1J1bGVzIiwibGlmZXRpbWUiLCJwYXJ0aWNsZSIsImJvdW5kcyIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwibG9jYXRpb24iLCJMYXp5IiwibGF6eSIsImZhY3RvcnkiLCJleGlzdHMiLCJkZWZhdWx0RXhpc3RzIiwicGFydGljbGVDb250YWluZXIiLCJkZWJ1Z0NvbnRhaW5lciIsInJvb3RDb250YWluZXIiLCJzZXR0aW5nc18xIiwidXRpbF8xIiwiaXNDb250YWluZXJBY3RpdmUiLCJjb250YWluZXIiLCJpc0Nvbm5lY3RlZCIsIm1ha2VDb250YWluZXIiLCJuYW1lIiwic3R5bGVzIiwicGFyZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsInBvaW50ZXJFdmVudHMiLCJ1c2VyU2VsZWN0IiwiYm9keSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiZm9udEZhbWlseSIsImN1cnJlbnQiLCJvdmVyZmxvdyIsInBlcnNwZWN0aXZlIiwiY29udGFpbmVyc18xIiwiRGVidWciLCJzY2VuZSIsInJlZnJlc2hSYXRlIiwicmVmcmVzaFRpbWVyIiwidGljayIsImRlbHRhIiwiZGlzcGxheVN0eWxlIiwiZGlzcGxheSIsImlubmVySFRNTCIsImdldERlYnVnSW5mb3JtYXRpb24iLCJlbWl0dGVycyIsInBhcnRpY2xlcyIsInJlZHVjZSIsImFjYyIsImN1ciIsImluZm9zIiwicm91bmQiLCJlbWl0dGVySW5mb3MiLCJlbWl0dGVyIiwib3B0aW9ucyIsImxvb3BzIiwiaXNFeHBpcmVkIiwidG9GaXhlZCIsInB1c2giLCJyYW5kb20iLCJyYW5kb21JbnNpZGVDaXJjbGUiLCJyYW5kb21JbnNpZGVSZWN0IiwicmFuZG9tVW5pdFZlY3RvciIsInBpY2siLCJyYW5kb21SYW5nZSIsImFyciIsInRoZXRhIiwidmFyaWF0aW9uIiwiZ3JhZGllbnRTYW1wbGUiLCJzcGxpbmVTYW1wbGUiLCJza2V3UmVsYXRpdmUiLCJza2V3IiwicmFuZ2UiLCJldmFsdWF0ZVZhcmlhdGlvbiIsInJhbmRvbV8xIiwiYW1vdW50IiwicGVyY2VudGFnZSIsInJ1bGVzXzEiLCJlbWl0dGVyT3B0aW9ucyIsImdldERlZmF1bHRFbWl0dGVyT3B0aW9ucyIsImR1cmF0aW9uIiwidXNlR3Jhdml0eSIsIm1heFBhcnRpY2xlcyIsIm1vZHVsZXMiLCJzb3VyY2VzIiwiY2lyY2xlU291cmNlIiwicmVjdFNvdXJjZSIsIm1vdXNlU291cmNlIiwiZWxlbWVudFNvdXJjZSIsImR5bmFtaWNTb3VyY2UiLCJzb3VyY2UiLCJIVE1MRWxlbWVudCIsIk1vdXNlRXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsImVtaXNzaW9uT3B0aW9ucyIsImdldERlZmF1bHRFbWlzc2lvbk9wdGlvbnMiLCJzb3VyY2VzXzEiLCJyYXRlIiwiYnVyc3RzIiwic291cmNlU2FtcGxlciIsImluaXRpYWxMaWZldGltZSIsImluaXRpYWxTcGVlZCIsImluaXRpYWxTaXplIiwiaW5pdGlhbFJvdGF0aW9uIiwiaW5pdGlhbENvbG9yIiwiZ2V0RGVmYXVsdFJlbmRlcmVyT3B0aW9ucyIsInNoYXBlRmFjdG9yeSIsImFwcGx5Q29sb3IiLCJkZWZhdWx0QXBwbHlDb2xvciIsImFwcGx5T3BhY2l0eSIsImRlZmF1bHRBcHBseU9wYWNpdHkiLCJhcHBseUxpZ2h0aW5nIiwiZGVmYXVsdEFwcGx5TGlnaHRpbmciLCJhcHBseVRyYW5zZm9ybSIsImRlZmF1bHRBcHBseVRyYW5zZm9ybSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJmaWxsIiwib3BhY2l0eSIsImxpZ2h0aW5nIiwiZmlsdGVyIiwidHJhbnNmb3JtIiwic2l6ZSIsInJlbmRlck9wdGlvbnMiLCJQYXJ0aWNsZSIsImNvbmZpZ18xIiwicG9wdWxhdGVkT3B0aW9ucyIsInZlbG9jaXR5IiwiU3ltYm9sIiwidmVjdG9yXzEiLCJFbWl0dGVyIiwidmFyaWF0aW9uXzEiLCJvcHRpb25zXzEiLCJwYXJ0aWNsZV8xIiwiY3VycmVudExvb3AiLCJkdXJhdGlvblRpbWVyIiwiZW1pc3Npb25UaW1lciIsImF0dGVtcHRlZEJ1cnN0SW5kaWNlcyIsImVtaXNzaW9uIiwicmVuZGVyZXIiLCJyZW5kZXJlck9wdGlvbnMiLCJjbGVhclBhcnRpY2xlcyIsInNwbGljZSIsImJ1cnN0SW5kZXgiLCJfYSIsImJ1cnN0IiwiaW5jbHVkZXMiLCJjb3VudCIsImVtaXRQYXJ0aWNsZSIsImRlbGF5IiwidGhpc18xIiwiX2xvb3BfMSIsInRpY2tQYXJ0aWNsZSIsInNvbWUiLCJydWxlIiwibW9kdWxlRnVuY3Rpb24iLCJzaGlmdCIsIl9fMSIsInNoYXBlc18xIiwiUmVuZGVyZXIiLCJiZWdpbiIsInJlbmRlcmVkUGFydGljbGVzIiwiZW5kIiwiaXQiLCJlbGVtZW50cyIsInJlc3VsdCIsIm5leHQiLCJkb25lIiwicmVtb3ZlIiwiZGVsZXRlIiwicmVuZGVyUGFydGljbGUiLCJsaWdodGluZ0NvZWZmaWNpZW50IiwiZW5hYmxlZCIsImhhcyIsImNyZWF0ZVBhcnRpY2xlRWxlbWVudCIsImxpZ2h0IiwicmVzb2x2ZVNoYXBlRmFjdG9yeSIsImNsb25lTm9kZSIsIk1hcCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZGVidWdfMSIsImVtaXR0ZXJfMSIsInJlbmRlcmVyXzEiLCJTY2VuZSIsImNyZWF0ZUVtaXR0ZXIiLCJjbGVhckVtaXR0ZXJzIiwic3VtIiwic2NoZWR1bGVUaWNrIiwic2NoZWR1bGVkVGlja0lkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsVGljayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwidGltZXN0YW1wIiwibGFzdFRpY2tUaW1lc3RhbXAiLCJjYW5SZW1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJfYiIsIl9jIiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXNvbHZhYmxlU2hhcGVzIiwic3F1YXJlIiwicmVjdGFuZ2xlIiwicm91bmRlZFNxdWFyZSIsInJvdW5kZWRSZWN0YW5nbGUiLCJzdGFyIiwic2hhcGUiLCJkdW1teSIsInJlc29sdmVkIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJNb2R1bGVCdWlsZGVyIiwiZmFjdG9yIiwiaXNSZWxhdGl2ZSIsImRyaXZlIiwia2V5IiwiZHJpdmVyS2V5IiwidGhyb3VnaCIsImJ5IiwiZHJpdmVyIiwiZHJpdmVyVmFsdWUiLCJyZWxhdGl2ZSIsImJ1aWxkIiwiX3RoaXMiLCJ1cGRhdGVEcml2ZW5Qcm9wZXJ0eSIsImV2YWx1YXRlTW9kdWxlRHJpdmVyIiwiY2FsY3VsYXRlTW9kdWxlRmFjdG9yIiwiaW5pdGlhbCIsInRvVXBwZXJDYXNlIiwibW9kdWxlc18xIiwidXRpbCIsImNvbmZldHRpXzEiLCJjb25mZXR0aSIsInJlcXVpcmUkJDYiLCJwb3B1bGF0ZWQiLCJzcHJlYWQiLCJzcGVlZCIsInNoYXBlcyIsInNwYXJrbGVzXzEiLCJzcGFya2xlcyIsInNjZW5lXzEiLCJkZWZhdWx0IiwiZm9yY2VJbml0IiwibWF0aCIsInJlcXVpcmUkJDciLCJyZXF1aXJlJCQ4IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDEzIiwiY29udHJvbE5hbWUiLCJncm91cE5hbWUiLCJmYWxsYmFja0Rpc2FibGVTdWJtaXQiLCJkZXNjcmlwdGlvbiIsInZlcnNpb24iLCJwcm9wZXJ0aWVzIiwic3RhcnRQYXJ0eVRyaWdnZXIiLCJ0eXBlIiwidGl0bGUiLCJ0eXBlb2ZFZmZlY3QiLCJlbnVtIiwiZXZlbnRzIiwic3RhbmRhcmRQcm9wZXJ0aWVzIiwiZmllbGRMYWJlbCIsImRlZmF1bHRWYWx1ZSIsImNzcyIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJDb25mZXR0aSIsIl9kZWNvcmF0ZSIsImN1c3RvbUVsZW1lbnQiLCJfaW5pdGlhbGl6ZSIsIl9MaXRFbGVtZW50IiwiRiIsIl9pbmhlcml0cyIsIl9jcmVhdGVTdXBlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzYW1wbGVQcm9wZXJ0eSIsIl9jcmVhdGVDbGFzcyIsImtpbmQiLCJzdGF0aWMiLCJkZWNvcmF0b3JzIiwicHJvcGVydHkiLCJCb29sZWFuIiwic3RhcnRQYXJ0eSIsImh0bWwiLCJfdGhpcyRzaGFkb3dSb290Iiwic2hhZG93Um9vdCIsImdldEVsZW1lbnRCeUlkIiwicGFydHkiLCJMaXRFbGVtZW50Il0sIm1hcHBpbmdzIjoiNGlCQUNBQSxPQUFPQyxlQUFlQyxTQUFTLGFBQWMsQ0FBRUMsTUFBTyxDQUFBLENBQUksQ0FBRSxFQUM1Q0QsU0FBQUEsU0FBRyxLQUFBLEVBQ25CQSxTQUFBQSxTQUFtQixDQUNmRSxNQUFPLENBQUEsRUFDUEMsUUFBUyxJQUNUQyxPQUFRLE1BQ1JDLHFCQUFzQixDQUFBLENBQzFCLGtCQ0RBLFNBQVNDLGlCQUFpQkMsRUFBVUMsR0FDaEMsT0FBT1YsT0FBT1csT0FBTyxHQUFJRixFQUFVQyxDQUFTLENBQ2hELENBUkFWLE9BQU9DLGVBQWVXLFNBQVMsYUFBYyxDQUFFVCxNQUFPLENBQUEsQ0FBSSxDQUFFLEVBQ3BDUyxTQUFBSixpQkFBRyxLQUFBLEVBUTNCSSxTQUFBSixpQkFBMkJBLHlEQ0p2QkssUUFMSmIsT0FBT0MsZUFBZWEsT0FBUyxhQUFjLENBQUVYLE1BQU8sQ0FBQSxDQUFJLENBQUUsRUFDOUNXLE9BQUFELE9BQUcsS0FBQSxFQUlXLFdBSXhCLFNBQVNBLEVBQU9FLEVBQUdDLEVBQUdDLEdBQ0gsS0FBQSxJQUFYQSxJQUFxQkEsRUFBUyxHQUNsQ0MsS0FBS0gsRUFBSUEsRUFDVEcsS0FBS0YsRUFBSUEsRUFDVEUsS0FBS0QsT0FBU0EsQ0FDakIsQ0FFRCxPQURBSixFQUFPTSxLQUFPLElBQUlOLEVBQU8sRUFBRyxDQUFDLEVBQ3RCQSxDQUNYLEVBQUcsVUFDSEMsT0FBQUQsT0FBaUJBLG1CQ2hCYk8sdUJDZUosU0FBU0MsRUFBS0MsRUFBR0MsRUFBR0MsR0FDaEIsT0FBUSxFQUFJQSxHQUFLRixFQUFJRSxFQUFJRCxDQUM1QixDQW5CRHZCLE9BQU9DLGVBQWN3QixFQUFVLGFBQWMsQ0FBRXRCLE1BQU8sQ0FBQSxDQUFJLENBQUUsRUFDNURzQixFQUF3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QUFFLFdBQUEsQ0FFOUJDLEVBQVMsQ0FBRTFCLEtBQU0xVixNQUFPLENBQUMsR0FBQytTLElBQUEsaUJBQUFsWixNQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUFvZCxLQUFBLFFBQUFFLFdBQUEsQ0FHMUJDLEVBQVMsQ0FBRTFCLEtBQU0yQixPQUFRLENBQUMsR0FBQ3RFLElBQUEsb0JBQUFsWixNQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUFvZCxLQUFBLFFBQUFFLFdBQUEsQ0FHM0JDLEVBQVMsQ0FBRTFCLEtBQU0xVixNQUFPLENBQUMsR0FBQytTLElBQUEsZUFBQWxaLE1BQUEsS0FBQSxDQUFBLEVBQUEsQ0FBQW9kLEtBQUEsU0FBQWxFLElBQUEsU0FBQWxaLE1BUTNCLFdBS0MsTUFKK0IsQ0FBQSxJQUEzQmUsS0FBSzZhLG1CQUNSN2EsS0FBSzBjLFdBQVUsRUFHVEMsRUFBSXBCLGdCQUFBQSxpQkFBQUMsdUJBQUEsQ0FBQSxxQ0FBQSxDQUFBLENBQ1osQ0FBQyxFQUFBLENBQUFhLEtBQUEsU0FBQWxFLElBQUEsYUFBQWxaLE1BR0QsV0FBYSxJQUNObU0sRUFBUyxPQUFBd1IsRUFBRzVjLEtBQUs2YyxtQkFBTEQsRUFBaUJFLGVBQWUsaUJBQWlCLEVBRS9EMVIsSUFDdUIsWUFBdEJwTCxLQUFLZ2IsYUFDUitCLE1BQU1wRCxTQUFTdk8sRUFBVyxDQUN6QjBJLE1BQU8sR0FDUDBGLE1BQU91RCxNQUFNbE8sVUFBVUssTUFBTSxHQUFJLEdBQUcsQ0FDckMsQ0FBQyxFQUVENk4sTUFBTTNELFNBQVNoTyxFQUFXLENBQ3pCMEksTUFBT2lKLE1BQU1sTyxVQUFVSyxNQUFNLEdBQUksRUFBRSxDQUNwQyxDQUFDLEVBR0osQ0FBQyxFQUFBLENBQUEsRUEzQzRCOE4sQ0FBVSIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswLDEsMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDE0LDE1LDE2LDE3LDE4LDE5LDIwLDIxLDIyLDIzLDI0LDI1LDI2LDI3LDI4LDI5LDMwLDMxLDMyLDMzXX0=