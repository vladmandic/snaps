/*
  snaps
  homepage: <https://github.com/vladmandic/snaps>
  author: <https://github.com/vladmandic>'
*/

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/@vladmandic+pilogger@0.4.6/node_modules/@vladmandic/pilogger/dist/pilogger.js
var require_pilogger = __commonJS({
  "node_modules/.pnpm/@vladmandic+pilogger@0.4.6/node_modules/@vladmandic/pilogger/dist/pilogger.js"(exports, module2) {
    "use strict";
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export2 = (target, all) => {
      for (var name2 in all)
        __defProp2(target, name2, { get: all[name2], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var require_dayjs_min = __commonJS2({
      "node_modules/.pnpm/dayjs@1.11.4/node_modules/dayjs/dayjs.min.js"(exports2, module22) {
        !function(t, e) {
          "object" == typeof exports2 && "undefined" != typeof module22 ? module22.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
        }(exports2, function() {
          "use strict";
          var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", $ = "Invalid Date", l = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t2, e2, n2) {
            var r2 = String(t2);
            return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
          }, g = { s: m, z: function(t2) {
            var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
            return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
          }, m: function t2(e2, n2) {
            if (e2.date() < n2.date())
              return -t2(n2, e2);
            var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
            return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
          }, a: function(t2) {
            return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
          }, p: function(t2) {
            return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
          }, u: function(t2) {
            return void 0 === t2;
          } }, v = "en", D = {};
          D[v] = M;
          var p = function(t2) {
            return t2 instanceof _;
          }, S = function t2(e2, n2, r2) {
            var i2;
            if (!e2)
              return v;
            if ("string" == typeof e2) {
              var s2 = e2.toLowerCase();
              D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
              var u2 = e2.split("-");
              if (!i2 && u2.length > 1)
                return t2(u2[0]);
            } else {
              var a2 = e2.name;
              D[a2] = e2, i2 = a2;
            }
            return !r2 && i2 && (v = i2), i2 || !r2 && v;
          }, w = function(t2, e2) {
            if (p(t2))
              return t2.clone();
            var n2 = "object" == typeof e2 ? e2 : {};
            return n2.date = t2, n2.args = arguments, new _(n2);
          }, O = g;
          O.l = S, O.i = p, O.w = function(t2, e2) {
            return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
          };
          var _ = function() {
            function M2(t2) {
              this.$L = S(t2.locale, null, true), this.parse(t2);
            }
            var m2 = M2.prototype;
            return m2.parse = function(t2) {
              this.$d = function(t3) {
                var e2 = t3.date, n2 = t3.utc;
                if (null === e2)
                  return new Date(NaN);
                if (O.u(e2))
                  return new Date();
                if (e2 instanceof Date)
                  return new Date(e2);
                if ("string" == typeof e2 && !/Z$/i.test(e2)) {
                  var r2 = e2.match(l);
                  if (r2) {
                    var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                    return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
                  }
                }
                return new Date(e2);
              }(t2), this.$x = t2.x || {}, this.init();
            }, m2.init = function() {
              var t2 = this.$d;
              this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
            }, m2.$utils = function() {
              return O;
            }, m2.isValid = function() {
              return !(this.$d.toString() === $);
            }, m2.isSame = function(t2, e2) {
              var n2 = w(t2);
              return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
            }, m2.isAfter = function(t2, e2) {
              return w(t2) < this.startOf(e2);
            }, m2.isBefore = function(t2, e2) {
              return this.endOf(e2) < w(t2);
            }, m2.$g = function(t2, e2, n2) {
              return O.u(t2) ? this[e2] : this.set(n2, t2);
            }, m2.unix = function() {
              return Math.floor(this.valueOf() / 1e3);
            }, m2.valueOf = function() {
              return this.$d.getTime();
            }, m2.startOf = function(t2, e2) {
              var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), $2 = function(t3, e3) {
                var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
                return r2 ? i2 : i2.endOf(a);
              }, l2 = function(t3, e3) {
                return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
              }, y2 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
              switch (h2) {
                case c:
                  return r2 ? $2(1, 0) : $2(31, 11);
                case f:
                  return r2 ? $2(1, M3) : $2(0, M3 + 1);
                case o:
                  var v2 = this.$locale().weekStart || 0, D2 = (y2 < v2 ? y2 + 7 : y2) - v2;
                  return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
                case a:
                case d:
                  return l2(g2 + "Hours", 0);
                case u:
                  return l2(g2 + "Minutes", 1);
                case s:
                  return l2(g2 + "Seconds", 2);
                case i:
                  return l2(g2 + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }, m2.endOf = function(t2) {
              return this.startOf(t2, false);
            }, m2.$set = function(t2, e2) {
              var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], l2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
              if (o2 === f || o2 === c) {
                var y2 = this.clone().set(d, 1);
                y2.$d[$2](l2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
              } else
                $2 && this.$d[$2](l2);
              return this.init(), this;
            }, m2.set = function(t2, e2) {
              return this.clone().$set(t2, e2);
            }, m2.get = function(t2) {
              return this[O.p(t2)]();
            }, m2.add = function(r2, h2) {
              var d2, $2 = this;
              r2 = Number(r2);
              var l2 = O.p(h2), y2 = function(t2) {
                var e2 = w($2);
                return O.w(e2.date(e2.date() + Math.round(t2 * r2)), $2);
              };
              if (l2 === f)
                return this.set(f, this.$M + r2);
              if (l2 === c)
                return this.set(c, this.$y + r2);
              if (l2 === a)
                return y2(1);
              if (l2 === o)
                return y2(7);
              var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[l2] || 1, m3 = this.$d.getTime() + r2 * M3;
              return O.w(m3, this);
            }, m2.subtract = function(t2, e2) {
              return this.add(-1 * t2, e2);
            }, m2.format = function(t2) {
              var e2 = this, n2 = this.$locale();
              if (!this.isValid())
                return n2.invalidDate || $;
              var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
                return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
              }, c2 = function(t3) {
                return O.s(s2 % 12 || 12, t3, "0");
              }, d2 = n2.meridiem || function(t3, e3, n3) {
                var r3 = t3 < 12 ? "AM" : "PM";
                return n3 ? r3.toLowerCase() : r3;
              }, l2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
              return r2.replace(y, function(t3, e3) {
                return e3 || l2[t3] || i2.replace(":", "");
              });
            }, m2.utcOffset = function() {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }, m2.diff = function(r2, d2, $2) {
              var l2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, g2 = this - M3, v2 = O.m(this, M3);
              return v2 = (l2 = {}, l2[c] = v2 / 12, l2[f] = v2, l2[h] = v2 / 3, l2[o] = (g2 - m3) / 6048e5, l2[a] = (g2 - m3) / 864e5, l2[u] = g2 / n, l2[s] = g2 / e, l2[i] = g2 / t, l2)[y2] || g2, $2 ? v2 : O.a(v2);
            }, m2.daysInMonth = function() {
              return this.endOf(f).$D;
            }, m2.$locale = function() {
              return D[this.$L];
            }, m2.locale = function(t2, e2) {
              if (!t2)
                return this.$L;
              var n2 = this.clone(), r2 = S(t2, e2, true);
              return r2 && (n2.$L = r2), n2;
            }, m2.clone = function() {
              return O.w(this.$d, this);
            }, m2.toDate = function() {
              return new Date(this.valueOf());
            }, m2.toJSON = function() {
              return this.isValid() ? this.toISOString() : null;
            }, m2.toISOString = function() {
              return this.$d.toISOString();
            }, m2.toString = function() {
              return this.$d.toUTCString();
            }, M2;
          }(), T = _.prototype;
          return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
            T[t2[1]] = function(e2) {
              return this.$g(e2, t2[0], t2[1]);
            };
          }), w.extend = function(t2, e2) {
            return t2.$i || (t2(e2, _, w), t2.$i = true), w;
          }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
            return w(1e3 * t2);
          }, w.en = D[v], w.Ls = D, w.p = {}, w;
        });
      }
    });
    var pilogger_exports = {};
    __export2(pilogger_exports, {
      access: () => access,
      accessFile: () => accessFile,
      assert: () => assert,
      blank: () => blank,
      client: () => client,
      clientFile: () => clientFile,
      configure: () => configure2,
      console: () => console,
      data: () => data3,
      debug: () => debug,
      error: () => error3,
      fatal: () => fatal,
      header: () => header,
      headerJson: () => headerJson2,
      info: () => info2,
      logFile: () => logFile2,
      options: () => options2,
      print: () => print,
      ring: () => ring,
      state: () => state2,
      tags: () => tags,
      timed: () => timed,
      verbose: () => verbose,
      warn: () => warn3
    });
    module2.exports = __toCommonJS(pilogger_exports);
    var os2 = __toESM2(require("os"));
    var fs3 = __toESM2(require("fs"));
    var path3 = __toESM2(require("path"));
    var import_dayjs = __toESM2(require_dayjs_min());
    var ANSI_BACKGROUND_OFFSET = 10;
    var wrapAnsi16 = (offset = 0) => (code) => `\x1B[${code + offset}m`;
    var wrapAnsi256 = (offset = 0) => (code) => `\x1B[${38 + offset};5;${code}m`;
    var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\x1B[${38 + offset};2;${red};${green};${blue}m`;
    function assembleStyles() {
      const codes = /* @__PURE__ */ new Map();
      const styles2 = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      styles2.color.gray = styles2.color.blackBright;
      styles2.bgColor.bgGray = styles2.bgColor.bgBlackBright;
      styles2.color.grey = styles2.color.blackBright;
      styles2.bgColor.bgGrey = styles2.bgColor.bgBlackBright;
      for (const [groupName, group] of Object.entries(styles2)) {
        for (const [styleName, style] of Object.entries(group)) {
          styles2[styleName] = {
            open: `\x1B[${style[0]}m`,
            close: `\x1B[${style[1]}m`
          };
          group[styleName] = styles2[styleName];
          codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles2, groupName, {
          value: group,
          enumerable: false
        });
      }
      Object.defineProperty(styles2, "codes", {
        value: codes,
        enumerable: false
      });
      styles2.color.close = "\x1B[39m";
      styles2.bgColor.close = "\x1B[49m";
      styles2.color.ansi = wrapAnsi16();
      styles2.color.ansi256 = wrapAnsi256();
      styles2.color.ansi16m = wrapAnsi16m();
      styles2.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
      styles2.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
      Object.defineProperties(styles2, {
        rgbToAnsi256: {
          value: (red, green, blue) => {
            if (red === green && green === blue) {
              if (red < 8) {
                return 16;
              }
              if (red > 248) {
                return 231;
              }
              return Math.round((red - 8) / 247 * 24) + 232;
            }
            return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
          },
          enumerable: false
        },
        hexToRgb: {
          value: (hex) => {
            const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
            if (!matches) {
              return [0, 0, 0];
            }
            let { colorString } = matches.groups;
            if (colorString.length === 3) {
              colorString = [...colorString].map((character) => character + character).join("");
            }
            const integer = Number.parseInt(colorString, 16);
            return [
              integer >> 16 & 255,
              integer >> 8 & 255,
              integer & 255
            ];
          },
          enumerable: false
        },
        hexToAnsi256: {
          value: (hex) => styles2.rgbToAnsi256(...styles2.hexToRgb(hex)),
          enumerable: false
        },
        ansi256ToAnsi: {
          value: (code) => {
            if (code < 8) {
              return 30 + code;
            }
            if (code < 16) {
              return 90 + (code - 8);
            }
            let red;
            let green;
            let blue;
            if (code >= 232) {
              red = ((code - 232) * 10 + 8) / 255;
              green = red;
              blue = red;
            } else {
              code -= 16;
              const remainder = code % 36;
              red = Math.floor(code / 36) / 5;
              green = Math.floor(remainder / 6) / 5;
              blue = remainder % 6 / 5;
            }
            const value = Math.max(red, green, blue) * 2;
            if (value === 0) {
              return 30;
            }
            let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
            if (value === 2) {
              result += 60;
            }
            return result;
          },
          enumerable: false
        },
        rgbToAnsi: {
          value: (red, green, blue) => styles2.ansi256ToAnsi(styles2.rgbToAnsi256(red, green, blue)),
          enumerable: false
        },
        hexToAnsi: {
          value: (hex) => styles2.ansi256ToAnsi(styles2.hexToAnsi256(hex)),
          enumerable: false
        }
      });
      return styles2;
    }
    var ansiStyles = assembleStyles();
    var ansi_styles_default = ansiStyles;
    var import_node_process = __toESM2(require("process"), 1);
    var import_node_os = __toESM2(require("os"), 1);
    var import_node_tty = __toESM2(require("tty"), 1);
    function hasFlag(flag, argv = import_node_process.default.argv) {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    }
    var { env } = import_node_process.default;
    var flagForceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      flagForceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      flagForceColor = 1;
    }
    function envForceColor() {
      if ("FORCE_COLOR" in env) {
        if (env.FORCE_COLOR === "true") {
          return 1;
        }
        if (env.FORCE_COLOR === "false") {
          return 0;
        }
        return env.FORCE_COLOR.length === 0 ? 1 : Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
      const noFlagForceColor = envForceColor();
      if (noFlagForceColor !== void 0) {
        flagForceColor = noFlagForceColor;
      }
      const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
      if (forceColor === 0) {
        return 0;
      }
      if (sniffFlags) {
        if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
          return 3;
        }
        if (hasFlag("color=256")) {
          return 2;
        }
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (import_node_process.default.platform === "win32") {
        const osRelease = import_node_os.default.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if ("TF_BUILD" in env && "AGENT_NAME" in env) {
        return 1;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version2 = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version2 >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function createSupportsColor(stream, options22 = {}) {
      const level = _supportsColor(stream, {
        streamIsTTY: stream && stream.isTTY,
        ...options22
      });
      return translateLevel(level);
    }
    var supportsColor = {
      stdout: createSupportsColor({ isTTY: import_node_tty.default.isatty(1) }),
      stderr: createSupportsColor({ isTTY: import_node_tty.default.isatty(2) })
    };
    var supports_color_default = supportsColor;
    function stringReplaceAll(string, substring, replacer) {
      let index2 = string.indexOf(substring);
      if (index2 === -1) {
        return string;
      }
      const substringLength = substring.length;
      let endIndex = 0;
      let returnValue = "";
      do {
        returnValue += string.substr(endIndex, index2 - endIndex) + substring + replacer;
        endIndex = index2 + substringLength;
        index2 = string.indexOf(substring, endIndex);
      } while (index2 !== -1);
      returnValue += string.slice(endIndex);
      return returnValue;
    }
    function stringEncaseCRLFWithFirstIndex(string, prefix, postfix, index2) {
      let endIndex = 0;
      let returnValue = "";
      do {
        const gotCR = string[index2 - 1] === "\r";
        returnValue += string.substr(endIndex, (gotCR ? index2 - 1 : index2) - endIndex) + prefix + (gotCR ? "\r\n" : "\n") + postfix;
        endIndex = index2 + 1;
        index2 = string.indexOf("\n", endIndex);
      } while (index2 !== -1);
      returnValue += string.slice(endIndex);
      return returnValue;
    }
    var { stdout: stdoutColor, stderr: stderrColor } = supports_color_default;
    var GENERATOR = Symbol("GENERATOR");
    var STYLER = Symbol("STYLER");
    var IS_EMPTY = Symbol("IS_EMPTY");
    var levelMapping = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ];
    var styles = /* @__PURE__ */ Object.create(null);
    var applyOptions = (object, options22 = {}) => {
      if (options22.level && !(Number.isInteger(options22.level) && options22.level >= 0 && options22.level <= 3)) {
        throw new Error("The `level` option should be an integer from 0 to 3");
      }
      const colorLevel = stdoutColor ? stdoutColor.level : 0;
      object.level = options22.level === void 0 ? colorLevel : options22.level;
    };
    var Chalk = class {
      constructor(options22) {
        return chalkFactory(options22);
      }
    };
    var chalkFactory = (options22) => {
      const chalk3 = (...strings) => strings.join(" ");
      applyOptions(chalk3, options22);
      Object.setPrototypeOf(chalk3, createChalk.prototype);
      return chalk3;
    };
    function createChalk(options22) {
      return chalkFactory(options22);
    }
    Object.setPrototypeOf(createChalk.prototype, Function.prototype);
    for (const [styleName, style] of Object.entries(ansi_styles_default)) {
      styles[styleName] = {
        get() {
          const builder = createBuilder(this, createStyler(style.open, style.close, this[STYLER]), this[IS_EMPTY]);
          Object.defineProperty(this, styleName, { value: builder });
          return builder;
        }
      };
    }
    styles.visible = {
      get() {
        const builder = createBuilder(this, this[STYLER], true);
        Object.defineProperty(this, "visible", { value: builder });
        return builder;
      }
    };
    var getModelAnsi = (model, level, type, ...arguments_) => {
      if (model === "rgb") {
        if (level === "ansi16m") {
          return ansi_styles_default[type].ansi16m(...arguments_);
        }
        if (level === "ansi256") {
          return ansi_styles_default[type].ansi256(ansi_styles_default.rgbToAnsi256(...arguments_));
        }
        return ansi_styles_default[type].ansi(ansi_styles_default.rgbToAnsi(...arguments_));
      }
      if (model === "hex") {
        return getModelAnsi("rgb", level, type, ...ansi_styles_default.hexToRgb(...arguments_));
      }
      return ansi_styles_default[type][model](...arguments_);
    };
    var usedModels = ["rgb", "hex", "ansi256"];
    for (const model of usedModels) {
      styles[model] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level], "color", ...arguments_), ansi_styles_default.color.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
      const bgModel = "bg" + model[0].toUpperCase() + model.slice(1);
      styles[bgModel] = {
        get() {
          const { level } = this;
          return function(...arguments_) {
            const styler = createStyler(getModelAnsi(model, levelMapping[level], "bgColor", ...arguments_), ansi_styles_default.bgColor.close, this[STYLER]);
            return createBuilder(this, styler, this[IS_EMPTY]);
          };
        }
      };
    }
    var proto = Object.defineProperties(() => {
    }, {
      ...styles,
      level: {
        enumerable: true,
        get() {
          return this[GENERATOR].level;
        },
        set(level) {
          this[GENERATOR].level = level;
        }
      }
    });
    var createStyler = (open, close, parent) => {
      let openAll;
      let closeAll;
      if (parent === void 0) {
        openAll = open;
        closeAll = close;
      } else {
        openAll = parent.openAll + open;
        closeAll = close + parent.closeAll;
      }
      return {
        open,
        close,
        openAll,
        closeAll,
        parent
      };
    };
    var createBuilder = (self2, _styler, _isEmpty) => {
      const builder = (...arguments_) => applyStyle(builder, arguments_.length === 1 ? "" + arguments_[0] : arguments_.join(" "));
      Object.setPrototypeOf(builder, proto);
      builder[GENERATOR] = self2;
      builder[STYLER] = _styler;
      builder[IS_EMPTY] = _isEmpty;
      return builder;
    };
    var applyStyle = (self2, string) => {
      if (self2.level <= 0 || !string) {
        return self2[IS_EMPTY] ? "" : string;
      }
      let styler = self2[STYLER];
      if (styler === void 0) {
        return string;
      }
      const { openAll, closeAll } = styler;
      if (string.includes("\x1B")) {
        while (styler !== void 0) {
          string = stringReplaceAll(string, styler.close, styler.open);
          styler = styler.parent;
        }
      }
      const lfIndex = string.indexOf("\n");
      if (lfIndex !== -1) {
        string = stringEncaseCRLFWithFirstIndex(string, closeAll, openAll, lfIndex);
      }
      return openAll + string + closeAll;
    };
    Object.defineProperties(createChalk.prototype, styles);
    var chalk = createChalk();
    var chalkStderr = createChalk({ level: stderrColor ? stderrColor.level : 0 });
    var import_console = require("console");
    var chalk2 = new Chalk({ level: 2 });
    var ring = [];
    var options2 = {
      dateFormat: "YYYY-MM-DD HH:mm:ss",
      ringLength: 100,
      console: true,
      timeStamp: true
    };
    var streams = {
      logFile: false,
      accessFile: false,
      clientFile: false,
      logStream: void 0,
      accessStream: void 0,
      clientStream: void 0
    };
    var tags = {
      blank: "",
      continue: ":     ",
      info: chalk2.cyan("INFO: "),
      warn: chalk2.yellow("WARN: "),
      data: chalk2.green("DATA: "),
      error: chalk2.red("ERROR:"),
      fatal: chalk2.bold.red("FATAL:"),
      assert: chalk2.italic.bold.red("ASSERT:"),
      timed: chalk2.magentaBright("TIMED:"),
      state: chalk2.magenta("STATE:"),
      verbose: chalk2.bgGray.yellowBright("VERB: "),
      debug: chalk2.bgGray.redBright("DEBUG:"),
      console: chalk2.gray("CONSOLE:")
    };
    var inspectOptions = {
      showHidden: false,
      depth: 5,
      colors: true,
      showProxy: true,
      maxArrayLength: 1024,
      maxStringLength: 10240,
      breakLength: 200,
      compact: 64,
      sorted: false,
      getters: false
    };
    var logger = new import_console.Console({
      stdout: process.stdout,
      stderr: process.stderr,
      ignoreErrors: true,
      inspectOptions
    });
    function stringify(message) {
      let str = "";
      try {
        str = JSON.stringify(message);
      } catch (e) {
      }
      return str;
    }
    function combineMessages(...messages) {
      let msg = "";
      for (const message of messages) {
        msg += typeof message === "object" ? stringify(message) : message;
        msg += " ";
      }
      return msg;
    }
    function print(...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options2.dateFormat);
      if (options2.console) {
        if (options2.timeStamp)
          logger.log(time, ...messages);
        else
          logger.log(...messages);
      }
    }
    function logFile2(file) {
      if (typeof file !== "string")
        return;
      options2.logFile = file;
      streams.logFile = true;
      streams.logStream = fs3.createWriteStream(path3.resolve(options2.logFile || ""), { flags: "a" });
      if (streams.logStream) {
        streams.logStream.on("error", (e) => {
          print(tags.error, "Cannot open application log", options2.logFile, e);
          streams.logFile = false;
        });
      }
    }
    function accessFile(file) {
      if (typeof file !== "string")
        return;
      options2.accessFile = file;
      streams.accessFile = true;
      streams.accessStream = fs3.createWriteStream(path3.resolve(options2.accessFile), { flags: "a" });
      if (streams.accessStream) {
        streams.accessStream.on("error", (e) => {
          print(tags.error, "Cannot open application log", options2.accessFile, e);
          streams.accessFile = false;
        });
      }
    }
    function clientFile(file) {
      if (typeof file !== "string")
        return;
      options2.clientFile = file;
      streams.clientFile = true;
      streams.clientStream = fs3.createWriteStream(path3.resolve(options2.clientFile), { flags: "a" });
      if (streams.clientStream) {
        streams.clientStream.on("error", (e) => {
          print(tags.error, "Cannot open application log", options2.clientFile, e);
          streams.clientFile = false;
        });
      }
    }
    async function timed(t0, ...messages) {
      if (arguments.length < 2) {
        messages = [t0];
        t0 = process.hrtime.bigint();
      }
      const t1 = process.hrtime.bigint();
      let elapsed = 0;
      try {
        elapsed = parseInt((t1 - t0).toString());
      } catch (e) {
      }
      elapsed = Math.round(elapsed / 1e6);
      const time = (0, import_dayjs.default)(Date.now()).format(options2.dateFormat);
      if (options2.console)
        logger.log(time, tags.timed, `${elapsed.toLocaleString()} ms`, ...messages);
      if (streams.logFile && streams.logStream)
        streams.logStream.write(`${tags.timed} ${time} ${elapsed.toLocaleString()} ms ${combineMessages(...messages)}
`);
    }
    async function log4(tag, ...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options2.dateFormat);
      if (tags[tag])
        print(tags[tag], ...messages);
      else
        print(...messages);
      if (streams.logFile && streams.logStream)
        streams.logStream.write(`${time} ${tags[tag]} ${combineMessages(...messages)}
`);
      ring.push({ tag, time, msg: combineMessages(...messages) });
      if (ring.length > options2.ringLength)
        ring.shift();
    }
    async function assert(res, exp, ...messages) {
      if (res !== exp)
        log4("assert", ...messages, { res, exp });
    }
    async function access(...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options2.dateFormat);
      if (streams.accessFile && streams.accessStream)
        streams.accessStream.write(`${time} ${combineMessages(...messages)}
`);
    }
    async function client(...messages) {
      const time = (0, import_dayjs.default)(Date.now()).format(options2.dateFormat);
      if (streams.clientFile && streams.clientStream)
        streams.clientStream.write(`${time} ${combineMessages(...messages)}
`);
    }
    function configure2(userOptions) {
      if (!userOptions)
        return;
      if (userOptions.dateFormat)
        options2.dateFormat = userOptions.dateFormat;
      if (userOptions.ringLength)
        options2.ringLength = userOptions.ringLength;
      if (userOptions.logFile)
        logFile2(userOptions.logFile);
      if (userOptions.accessFile)
        accessFile(userOptions.accessFile);
      if (userOptions.clientFile)
        clientFile(userOptions.clientFile);
      if (userOptions.inspect)
        inspectOptions = { ...inspectOptions, ...userOptions.inspect };
      logger = new import_console.Console({
        stdout: process.stdout,
        stderr: process.stderr,
        ignoreErrors: true,
        inspectOptions
      });
    }
    function header() {
      const f = "./package.json";
      if (!fs3.existsSync(f))
        return;
      const node = JSON.parse(fs3.readFileSync(f).toString());
      process.title = node.name;
      log4("info", node.name, "version", node.version);
      log4("info", "User:", os2.userInfo().username, "Platform:", process.platform, "Arch:", process.arch, "Node:", process.version);
      if (options2.logFile && streams.logFile)
        print(tags.state, "Application log:", path3.resolve(options2.logFile));
      if (options2.accessFile && streams.accessFile)
        print(tags.state, "Access log:", path3.resolve(options2.accessFile));
      if (options2.clientFile && streams.clientFile)
        print(tags.state, "Client log:", path3.resolve(options2.clientFile));
    }
    function headerJson2() {
      const f = "./package.json";
      if (!fs3.existsSync(f))
        return;
      const node = JSON.parse(fs3.readFileSync(f).toString());
      process.title = node.name;
      log4("info", { application: node.name, version: node.version });
      log4("info", { user: os2.userInfo().username, platform: process.platform, arch: process.arch, node: process.version });
      if (options2.logFile || options2.accessFile || options2.clientFile)
        print(tags.state, { log: path3.resolve(options2.logFile || ""), access: path3.resolve(options2.accessFile || ""), client: path3.resolve(options2.clientFile || "") });
    }
    var blank = (...message) => log4("blank", ...message);
    var info2 = (...message) => log4("info", ...message);
    var state2 = (...message) => log4("state", ...message);
    var data3 = (...message) => log4("data", ...message);
    var warn3 = (...message) => log4("warn", ...message);
    var error3 = (...message) => log4("error", ...message);
    var fatal = (...message) => log4("fatal", ...message);
    var verbose = (...message) => log4("verbose", ...message);
    var debug = (...message) => log4("debug", ...message);
    var console = (...message) => log4("console", ...message);
  }
});

// node/snaps.ts
var fs2 = __toESM(require("fs"));
var path2 = __toESM(require("path"));
var import_sharp = __toESM(require("sharp"));
var log3 = __toESM(require_pilogger());

// node/httpd.ts
var fs = __toESM(require("fs"));
var zlib = __toESM(require("zlib"));
var http = __toESM(require("http"));
var http2 = __toESM(require("http2"));
var path = __toESM(require("path"));
var log = __toESM(require_pilogger());
var options;
var mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".wasm": "application/wasm",
  ".webmanifest": "application/manifest+json"
};
function handle(url) {
  url = url.split(/[?#]/)[0];
  const result = { ok: false, stat: null, file: "", redirect: null };
  const checkFile = (f) => {
    result.file = f;
    if (fs.existsSync(f)) {
      result.stat = fs.statSync(f);
      if (result.stat["isFile"]()) {
        result.ok = true;
        return true;
      }
    }
    return false;
  };
  const checkFolder = (f) => {
    result.file = f;
    if (fs.existsSync(f)) {
      result.stat = fs.statSync(f);
      if (result.stat["isDirectory"]()) {
        result.ok = true;
        return true;
      }
    }
    return false;
  };
  return new Promise((resolve) => {
    if (checkFolder(path.join(process.cwd(), options.documentRoot, url)) && checkFile(path.join(process.cwd(), options.documentRoot, url, options.defaultFile))) {
      result.redirect = path.join(url, options.defaultFile);
      resolve(result);
    } else if (checkFile(path.join(process.cwd(), options.documentRoot, url)))
      resolve(result);
    else if (checkFile(path.join(process.cwd(), options.documentRoot, url, options.defaultFile)))
      resolve(result);
    else if (checkFile(path.join(process.cwd(), options.documentRoot, options.defaultFolder, url)))
      resolve(result);
    else if (checkFile(path.join(process.cwd(), options.documentRoot, options.defaultFolder, url, options.defaultFile)))
      resolve(result);
    else if (checkFolder(path.join(process.cwd(), options.documentRoot, url)))
      resolve(result);
    else if (checkFolder(path.join(process.cwd(), options.documentRoot, options.defaultFolder, url)))
      resolve(result);
    else if (checkFolder(path.join(path.dirname(path.join(process.cwd(), options.documentRoot, options.defaultFolder, url, options.defaultFile, url)))))
      resolve(result);
    else
      resolve(result);
  });
}
async function httpRequest(req, res) {
  const url = decodeURI(req.url);
  handle(url).then((result) => {
    const forwarded = (req.headers["forwarded"] || "").match(/for="\[(.*)\]:/);
    const remote = (Array.isArray(forwarded) ? forwarded[1] : null) || req.headers["x-forwarded-for"] || req.ip || req.socket.remoteAddress;
    const protocol = req.headers[":scheme"]?.toUpperCase() || "HTTP";
    if (!result || !result.ok || !result.stat) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("Error 404: Not Found\n", "utf-8");
      log.warn(`${protocol}:`, { method: req.method, ver: req.httpVersion, status: res.statusCode, url, remote });
    } else if (result.redirect) {
      res.writeHead(301, { Location: result.redirect });
      res.end();
      log.data(`${protocol}:`, { method: req.method, ver: req.httpVersion, status: res.statusCode, url, redirect: result.redirect, remote });
    } else {
      const input = encodeURIComponent(result.file).replace(/\*/g, "").replace(/\?/g, "").replace(/%2F/g, "/").replace(/%40/g, "@").replace(/%20/g, " ").replace(/%3A/g, ":").replace(/%5C/g, "\\");
      if (result?.stat?.isFile()) {
        const ext = String(path.extname(input)).toLowerCase();
        const contentType = mime[ext] || "application/octet-stream";
        const rangeRequest = req.headers["range"];
        const range = rangeRequest?.replace("bytes=", "").split("-") || [0, result.stat.size - 1];
        const rangeStart = parseInt(range[0] || 0);
        const rangeEnd = parseInt(range[1] || result.stat.size - 1);
        const acceptBrotli = req.headers["accept-encoding"] ? req.headers["accept-encoding"].includes("br") : false;
        const rangeHeader = !rangeRequest ? {} : {
          "Content-Range": "bytes " + rangeStart + "-" + rangeEnd + "/" + result.stat.size,
          "Accept-Ranges": "bytes",
          "Content-Length": rangeEnd - rangeStart + 1
        };
        const corsHeader = !options.cors ? {} : {
          "Cross-Origin-Embedder-Policy": "require-corp",
          "Cross-Origin-Opener-Policy": "same-origin"
        };
        res.writeHead(rangeRequest ? 206 : 200, {
          "Content-Size": result.stat.size,
          "Content-Language": "en",
          "Content-Type": contentType,
          "Content-Encoding": acceptBrotli && !rangeRequest ? "br" : "",
          "Last-Modified": result.stat.mtime.toUTCString(),
          "Cache-Control": "no-cache",
          "X-Content-Type-Options": "nosniff",
          "Content-Security-Policy": "media-src 'self' http: https: data:",
          "`Service-Worker-Allowed": "/",
          ...corsHeader,
          ...rangeHeader
        });
        const compress = zlib.createBrotliCompress({ params: { [zlib.constants.BROTLI_PARAM_QUALITY]: 5 } });
        const stream = !rangeRequest ? fs.createReadStream(input) : fs.createReadStream(input, { start: rangeStart, end: rangeEnd });
        if (!acceptBrotli || rangeRequest)
          stream.pipe(res);
        else
          stream.pipe(compress).pipe(res);
        const rangeJSON = rangeRequest ? { range: { start: rangeStart, end: rangeEnd, size: rangeEnd - rangeStart + 1 } } : {};
        log.data(`${protocol}:`, { method: req.method, ver: req.httpVersion, status: res.statusCode, mime: contentType.replace("; charset=utf-8", ""), size: result.stat.size, ...rangeJSON, url, remote });
      }
      if (result?.stat?.isDirectory()) {
        res.writeHead(200, { "Content-Language": "en", "Content-Type": "application/json; charset=utf-8", "Last-Modified": result.stat.mtime, "Cache-Control": "no-cache", "X-Content-Type-Options": "nosniff" });
        let dir = fs.readdirSync(input);
        dir = dir.map((f) => path.join(decodeURI(req.url), f));
        res.end(JSON.stringify(dir), "utf-8");
        log.data(`${protocol}:`, { method: req.method, ver: req.httpVersion, status: res.statusCode, mime: "directory/json", size: result.stat.size, url, remote });
      }
    }
  });
}
async function start(config) {
  options = {
    insecureHTTPParser: false,
    ...config
  };
  if (fs.existsSync(options.sslKey) && fs.existsSync(options.sslCrt)) {
    options.key = fs.readFileSync(options.sslKey);
    options.cert = fs.readFileSync(options.sslCrt);
  } else {
    try {
      const home = require.resolve("@vladmandic/build");
      options.sslKey = path.join(path.dirname(home), "..", options.sslKey);
      options.sslCrt = path.join(path.dirname(home), "..", options.sslCrt);
      options.key = fs.existsSync(options.sslKey) ? fs.readFileSync(options.sslKey) : null;
      options.cert = fs.existsSync(options.sslCrt) ? fs.readFileSync(options.sslCrt) : null;
    } catch {
    }
  }
  if (!options.key || !options.cert)
    log.warn("cannot read SSL certificate");
  if (options.httpPort && options.httpPort > 0) {
    await new Promise((resolve) => {
      const server1 = http.createServer(options, httpRequest);
      server1.on("listening", () => {
        log.state("http:", { port: options.httpPort, root: options.documentRoot });
        resolve(true);
      });
      server1.on("error", (err) => {
        log.error("http:", err.message || err);
        resolve(false);
      });
      server1.listen(options.httpPort);
    });
  }
  if (options.httpsPort && options.httpsPort > 0 && options.key && options.cert) {
    await new Promise((resolve) => {
      const server2 = http2.createSecureServer(options, httpRequest);
      server2.on("listening", () => {
        log.state("https:", { port: options.httpsPort, root: options.documentRoot, sslKey: options.sslKey, sslCrt: options.sslCrt });
        resolve(true);
      });
      server2.on("error", (err) => {
        log.error("https:", err.message || err);
        resolve(false);
      });
      server2.listen(options.httpsPort);
    });
  }
}

// package.json
var name = "@vladmandic/snaps";
var version = "0.1.0";

// config.json
var config_exports = {};
__export(config_exports, {
  default: () => config_default,
  documentRoot: () => documentRoot,
  folder: () => folder,
  httpPort: () => httpPort,
  httpsPort: () => httpsPort,
  index: () => index,
  interval: () => interval,
  log: () => log2,
  quality: () => quality,
  resizeWidth: () => resizeWidth,
  secrets: () => secrets,
  sslCrt: () => sslCrt,
  sslKey: () => sslKey
});
var secrets = "secrets.json";
var log2 = "snaps.log";
var folder = "images";
var index = "images/index.json";
var interval = 2;
var httpPort = 8e3;
var httpsPort = 8001;
var documentRoot = "public";
var sslKey = "node_modules/@vladmandic/build/cert/https.key";
var sslCrt = "node_modules/@vladmandic/build/cert/https.crt";
var resizeWidth = 1280;
var quality = 60;
var config_default = {
  secrets,
  log: log2,
  folder,
  index,
  interval,
  httpPort,
  httpsPort,
  documentRoot,
  sslKey,
  sslCrt,
  resizeWidth,
  quality
};

// node/snaps.ts
var seq = {};
var initSequence = (name2) => {
  const dir = fs2.readdirSync(folder);
  let last = 0;
  for (const f of dir) {
    if (!f.startsWith(`${name2}-`))
      continue;
    const current = Number(f.replace(`${name2}-`, "").split(".")[0]);
    if (current > last)
      last = current;
  }
  last++;
  log3.info("sequence:", { name: name2, start: last });
  return last;
};
var ts = () => {
  const d = new Date();
  const pad = (v) => v.toString().padStart(2, "0");
  return `${d.getFullYear()}:${pad(d.getMonth() + 1)}:${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
};
var getExif = () => ({
  IFD0: { Software: `${name} ${version}` },
  IFD2: { DateTimeOriginal: ts(), OffsetTime: (new Date().getTimezoneOffset() / 60).toString() }
});
async function saveImage(name2, res) {
  const data3 = await res.blob();
  if (data3.type !== "image/jpeg" && data3.type !== "image/png") {
    log3.warn("unrecognized file type:", { name: name2, data: data3 });
    return;
  }
  if (!seq[name2])
    seq[name2] = initSequence(name2);
  const num = seq[name2].toString().padStart(5, "0");
  const file = path2.join(folder, `${name2}-${num}.jpg`);
  const buffer = new Uint8Array(await data3.arrayBuffer());
  const metadata = await (0, import_sharp.default)(buffer).metadata();
  const image = await (0, import_sharp.default)(buffer).normalize().resize(resizeWidth, null).jpeg({ quality, mozjpeg: true }).withMetadata({ exif: getExif() }).toFile(file);
  seq[name2]++;
  const rec = { seq: num, file, date: new Date(), input: { name: name2, size: data3.size, type: data3.type, resolution: [metadata.width, metadata.height] }, output: { size: image.size, resolution: [image.width, image.height] } };
  fs2.appendFileSync(index, JSON.stringify(rec) + "\n");
  log3.data("image:", rec);
}
async function runInterval(secrets2) {
  for (const [name2, url] of Object.entries(secrets2)) {
    fetch(url).then((res) => saveImage(name2, res)).catch((err) => log3.warn("fetch:", { host: err?.cause?.hostname, syscall: err?.cause?.syscall, code: err?.cause?.code }));
  }
}
async function main() {
  log3.configure({ inspect: { breakLength: 500 } });
  if (log2?.length > 0)
    log3.logFile(log2);
  log3.headerJson();
  if (!fs2.existsSync(secrets)) {
    log3.error("cannot read secrets:", secrets);
    process.exit(1);
  }
  if (!fs2.existsSync(folder) || !fs2.statSync(folder).isDirectory()) {
    log3.error("desitnation folder does not exist:", folder);
    process.exit(1);
  }
  const data3 = fs2.readFileSync(secrets, "utf8");
  const secrets2 = JSON.parse(data3);
  await start(config_exports);
  setInterval(() => runInterval(secrets2), interval * 1e3);
  ts();
}
main();
//# sourceMappingURL=snaps.js.map
