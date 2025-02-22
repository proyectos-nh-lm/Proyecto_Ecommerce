!(function (t, e) {
	"object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? (exports.Quill = e()) : (t.Quill = e());
})("undefined" != typeof self ? self : this, function () {
	return (
		(r = {}),
		(o.m = n =
			[
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = n(17),
						r = n(18),
						i = n(19),
						l = n(48),
						a = n(49),
						s = n(50),
						u = n(51),
						c = n(52),
						f = n(11),
						h = n(29),
						p = n(30),
						d = n(28),
						d = { Scope: (n = n(1)).Scope, create: n.create, find: n.find, query: n.query, register: n.register, Container: o.default, Format: r.default, Leaf: i.default, Embed: u.default, Scroll: l.default, Block: s.default, Inline: a.default, Text: c.default, Attributor: { Attribute: f.default, Class: h.default, Style: p.default, Store: d.default } };
					e.default = d;
				},
				function (t, o, e) {
					"use strict";
					function r(t, e) {
						var n;
						if ((void 0 === e && (e = u.ANY), "string" == typeof t)) n = p[t] || c[t];
						else if (t instanceof Text || t.nodeType === Node.TEXT_NODE) n = p.text;
						else if ("number" == typeof t) t & u.LEVEL & u.BLOCK ? (n = p.block) : t & u.LEVEL & u.INLINE && (n = p.inline);
						else if (t instanceof HTMLElement) {
							var o,
								r = (t.getAttribute("class") || "").split(/\s+/);
							for (o in r) if ((n = f[r[o]])) break;
							n = n || h[t.tagName];
						}
						return null != n && e & u.LEVEL & n.scope && e & u.TYPE & n.scope ? n : null;
					}
					var i,
						n =
							(this && this.__extends) ||
							((i =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								i(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(o, "__esModule", { value: !0 });
					var l,
						a = (n(s, (l = Error)), s);
					function s(t) {
						var e = this;
						return (t = "[Parchment] " + t), ((e = l.call(this, t) || this).message = t), (e.name = e.constructor.name), e;
					}
					o.ParchmentError = a;
					var u,
						c = {},
						f = {},
						h = {},
						p = {};
					(o.DATA_KEY = "__blot"),
						((n = u = o.Scope || (o.Scope = {}))[(n.TYPE = 3)] = "TYPE"),
						(n[(n.LEVEL = 12)] = "LEVEL"),
						(n[(n.ATTRIBUTE = 13)] = "ATTRIBUTE"),
						(n[(n.BLOT = 14)] = "BLOT"),
						(n[(n.INLINE = 7)] = "INLINE"),
						(n[(n.BLOCK = 11)] = "BLOCK"),
						(n[(n.BLOCK_BLOT = 10)] = "BLOCK_BLOT"),
						(n[(n.INLINE_BLOT = 6)] = "INLINE_BLOT"),
						(n[(n.BLOCK_ATTRIBUTE = 9)] = "BLOCK_ATTRIBUTE"),
						(n[(n.INLINE_ATTRIBUTE = 5)] = "INLINE_ATTRIBUTE"),
						(n[(n.ANY = 15)] = "ANY"),
						(o.create = function (t, e) {
							var n = r(t);
							if (null == n) throw new a("Unable to create " + t + " blot");
							return new n(t instanceof Node || t.nodeType === Node.TEXT_NODE ? t : n.create(e), e);
						}),
						(o.find = function t(e, n) {
							return void 0 === n && (n = !1), null == e ? null : null != e[o.DATA_KEY] ? e[o.DATA_KEY].blot : n ? t(e.parentNode, n) : null;
						}),
						(o.query = r),
						(o.register = function e() {
							for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
							if (1 < t.length)
								return t.map(function (t) {
									return e(t);
								});
							var o = t[0];
							if ("string" != typeof o.blotName && "string" != typeof o.attrName) throw new a("Invalid definition");
							if ("abstract" === o.blotName) throw new a("Cannot register abstract class");
							return (
								"string" == typeof (p[o.blotName || o.attrName] = o).keyName
									? (c[o.keyName] = o)
									: (null != o.className && (f[o.className] = o),
									  null != o.tagName &&
											(Array.isArray(o.tagName)
												? (o.tagName = o.tagName.map(function (t) {
														return t.toUpperCase();
												  }))
												: (o.tagName = o.tagName.toUpperCase()),
											(Array.isArray(o.tagName) ? o.tagName : [o.tagName]).forEach(function (t) {
												(null != h[t] && null != o.className) || (h[t] = o);
											}))),
								o
							);
						});
				},
				function (t, e) {
					"use strict";
					function c(t) {
						return "function" == typeof Array.isArray ? Array.isArray(t) : "[object Array]" === i.call(t);
					}
					function f(t) {
						if (t && "[object Object]" === i.call(t)) {
							var e,
								n = r.call(t, "constructor"),
								o = t.constructor && t.constructor.prototype && r.call(t.constructor.prototype, "isPrototypeOf");
							if (!t.constructor || n || o) {
								for (e in t);
								return void 0 === e || r.call(t, e);
							}
						}
					}
					var r = Object.prototype.hasOwnProperty,
						i = Object.prototype.toString;
					t.exports = function t() {
						var e,
							n,
							o,
							r,
							i,
							l = arguments[0],
							a = 1,
							s = arguments.length,
							u = !1;
						for ("boolean" == typeof l && ((u = l), (l = arguments[1] || {}), (a = 2)), (null == l || ("object" != typeof l && "function" != typeof l)) && (l = {}); a < s; ++a) if (null != (e = arguments[a])) for (n in e) (i = l[n]), (o = e[n]), l !== o && (u && o && (f(o) || (r = c(o))) ? ((i = r ? ((r = !1), i && c(i) ? i : []) : i && f(i) ? i : {}), (l[n] = t(u, i, o))) : void 0 !== o && (l[n] = o));
						return l;
					};
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					function a(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						return null == t ? e : ("function" == typeof t.formats && (e = (0, c.default)(e, t.formats())), null == t.parent || "scroll" == t.parent.blotName || t.parent.statics.scope !== t.statics.scope ? e : a(t.parent, e));
					}
					function s(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : s(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.BlockEmbed = e.bubbleFormats = void 0);
					function u(t, e, n) {
						return e && v(t.prototype, e), n && v(t, n), t;
					}
					var c = o(n(2)),
						f = o(n(4)),
						h = o(n(0)),
						p = o(n(14)),
						d = o(n(5)),
						y = o(n(8));
					function b() {
						return r(this, b), i(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments));
					}
					function v(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(n =
						(l(b, h.default.Embed),
						u(b, [
							{
								key: "attach",
								value: function () {
									s(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "attach", this).call(this), (this.attributes = new h.default.Attributor.Store(this.domNode));
								},
							},
							{
								key: "delta",
								value: function () {
									return new f.default().insert(this.value(), (0, c.default)(this.formats(), this.attributes.values()));
								},
							},
							{
								key: "format",
								value: function (t, e) {
									null != (t = h.default.query(t, h.default.Scope.BLOCK_ATTRIBUTE)) && this.attributes.attribute(t, e);
								},
							},
							{
								key: "formatAt",
								value: function (t, e, n, o) {
									this.format(n, o);
								},
							},
							{
								key: "insertAt",
								value: function (t, e, n) {
									var o;
									"string" == typeof e && e.endsWith("\n") ? ((o = h.default.create(g.blotName)), this.parent.insertBefore(o, 0 === t ? this : this.next), o.insertAt(0, e.slice(0, -1))) : s(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "insertAt", this).call(this, t, e, n);
								},
							},
						]),
						b)).scope = h.default.Scope.BLOCK_BLOT;
					var g =
						(l(m, h.default.Block),
						u(m, [
							{
								key: "delta",
								value: function () {
									return (
										null == this.cache.delta &&
											(this.cache.delta = this.descendants(h.default.Leaf)
												.reduce(function (t, e) {
													return 0 === e.length() ? t : t.insert(e.value(), a(e));
												}, new f.default())
												.insert("\n", a(this))),
										this.cache.delta
									);
								},
							},
							{
								key: "deleteAt",
								value: function (t, e) {
									s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "deleteAt", this).call(this, t, e), (this.cache = {});
								},
							},
							{
								key: "formatAt",
								value: function (t, e, n, o) {
									e <= 0 || (h.default.query(n, h.default.Scope.BLOCK) ? t + e === this.length() && this.format(n, o) : s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "formatAt", this).call(this, t, Math.min(e, this.length() - t - 1), n, o), (this.cache = {}));
								},
							},
							{
								key: "insertAt",
								value: function (t, e, n) {
									if (null != n) return s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "insertAt", this).call(this, t, e, n);
									var o;
									0 !== e.length &&
										(0 < (e = (n = e.split("\n")).shift()).length && (t < this.length() - 1 || null == this.children.tail ? s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "insertAt", this).call(this, Math.min(t, this.length() - 1), e) : this.children.tail.insertAt(this.children.tail.length(), e), (this.cache = {})),
										(o = this),
										n.reduce(function (t, e) {
											return (o = o.split(t, !0)).insertAt(0, e), e.length;
										}, t + e.length));
								},
							},
							{
								key: "insertBefore",
								value: function (t, e) {
									var n = this.children.head;
									s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "insertBefore", this).call(this, t, e), n instanceof p.default && n.remove(), (this.cache = {});
								},
							},
							{
								key: "length",
								value: function () {
									return null == this.cache.length && (this.cache.length = s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "length", this).call(this) + 1), this.cache.length;
								},
							},
							{
								key: "moveChildren",
								value: function (t, e) {
									s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "moveChildren", this).call(this, t, e), (this.cache = {});
								},
							},
							{
								key: "optimize",
								value: function (t) {
									s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "optimize", this).call(this, t), (this.cache = {});
								},
							},
							{
								key: "path",
								value: function (t) {
									return s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "path", this).call(this, t, !0);
								},
							},
							{
								key: "removeChild",
								value: function (t) {
									s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "removeChild", this).call(this, t), (this.cache = {});
								},
							},
							{
								key: "split",
								value: function (t) {
									var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
									if (e && (0 === t || t >= this.length() - 1)) {
										var n = this.clone();
										return 0 === t ? (this.parent.insertBefore(n, this), this) : (this.parent.insertBefore(n, this.next), n);
									}
									return (e = s(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "split", this).call(this, t, e)), (this.cache = {}), e;
								},
							},
						]),
						m);
					function m(t) {
						return r(this, m), ((t = i(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, t))).cache = {}), t;
					}
					(g.blotName = "block"), (g.tagName = "P"), (g.defaultChild = "break"), (g.allowedChildren = [d.default, h.default.Embed, y.default]), (e.bubbleFormats = a), (e.BlockEmbed = n), (e.default = g);
				},
				function (t, e, n) {
					function s(t) {
						Array.isArray(t) ? (this.ops = t) : null != t && Array.isArray(t.ops) ? (this.ops = t.ops) : (this.ops = []);
					}
					var u = n(54),
						c = n(12),
						o = n(2),
						f = n(20),
						r = String.fromCharCode(0);
					(s.prototype.insert = function (t, e) {
						var n = {};
						return 0 === t.length ? this : ((n.insert = t), null != e && "object" == typeof e && 0 < Object.keys(e).length && (n.attributes = e), this.push(n));
					}),
						(s.prototype.delete = function (t) {
							return t <= 0 ? this : this.push({ delete: t });
						}),
						(s.prototype.retain = function (t, e) {
							return t <= 0 ? this : ((t = { retain: t }), null != e && "object" == typeof e && 0 < Object.keys(e).length && (t.attributes = e), this.push(t));
						}),
						(s.prototype.push = function (t) {
							var e = this.ops.length,
								n = this.ops[e - 1];
							if (((t = o(!0, {}, t)), "object" == typeof n)) {
								if ("number" == typeof t.delete && "number" == typeof n.delete) return (this.ops[e - 1] = { delete: n.delete + t.delete }), this;
								if ("number" == typeof n.delete && null != t.insert && (--e, "object" != typeof (n = this.ops[e - 1]))) return this.ops.unshift(t), this;
								if (c(t.attributes, n.attributes)) {
									if ("string" == typeof t.insert && "string" == typeof n.insert) return (this.ops[e - 1] = { insert: n.insert + t.insert }), "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
									if ("number" == typeof t.retain && "number" == typeof n.retain) return (this.ops[e - 1] = { retain: n.retain + t.retain }), "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes), this;
								}
							}
							return e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t), this;
						}),
						(s.prototype.chop = function () {
							var t = this.ops[this.ops.length - 1];
							return t && t.retain && !t.attributes && this.ops.pop(), this;
						}),
						(s.prototype.filter = function (t) {
							return this.ops.filter(t);
						}),
						(s.prototype.forEach = function (t) {
							this.ops.forEach(t);
						}),
						(s.prototype.map = function (t) {
							return this.ops.map(t);
						}),
						(s.prototype.partition = function (e) {
							var n = [],
								o = [];
							return (
								this.forEach(function (t) {
									(e(t) ? n : o).push(t);
								}),
								[n, o]
							);
						}),
						(s.prototype.reduce = function (t, e) {
							return this.ops.reduce(t, e);
						}),
						(s.prototype.changeLength = function () {
							return this.reduce(function (t, e) {
								return e.insert ? t + f.length(e) : e.delete ? t - e.delete : t;
							}, 0);
						}),
						(s.prototype.length = function () {
							return this.reduce(function (t, e) {
								return t + f.length(e);
							}, 0);
						}),
						(s.prototype.slice = function (t, e) {
							(t = t || 0), "number" != typeof e && (e = 1 / 0);
							for (var n, o = [], r = f.iterator(this.ops), i = 0; i < e && r.hasNext(); ) i < t ? (n = r.next(t - i)) : ((n = r.next(e - i)), o.push(n)), (i += f.length(n));
							return new s(o);
						}),
						(s.prototype.compose = function (t) {
							for (var e, n, o, r, i = f.iterator(this.ops), l = f.iterator(t.ops), a = new s(); i.hasNext() || l.hasNext(); ) "insert" === l.peekType() ? a.push(l.next()) : "delete" === i.peekType() ? a.push(i.next()) : ((r = Math.min(i.peekLength(), l.peekLength())), (e = i.next(r)), "number" == typeof (n = l.next(r)).retain ? ((o = {}), "number" == typeof e.retain ? (o.retain = r) : (o.insert = e.insert), (r = f.attributes.compose(e.attributes, n.attributes, "number" == typeof e.retain)) && (o.attributes = r), a.push(o)) : "number" == typeof n.delete && "number" == typeof e.retain && a.push(n));
							return a.chop();
						}),
						(s.prototype.concat = function (t) {
							var e = new s(this.ops.slice());
							return 0 < t.ops.length && (e.push(t.ops[0]), (e.ops = e.ops.concat(t.ops.slice(1)))), e;
						}),
						(s.prototype.diff = function (n, t) {
							if (this.ops === n.ops) return new s();
							var e = [this, n].map(function (e) {
									return e
										.map(function (t) {
											if (null != t.insert) return "string" == typeof t.insert ? t.insert : r;
											throw new Error("diff() called " + (e === n ? "on" : "with") + " non-document");
										})
										.join("");
								}),
								i = new s(),
								t = u(e[0], e[1], t),
								l = f.iterator(this.ops),
								a = f.iterator(n.ops);
							return (
								t.forEach(function (t) {
									for (var e = t[1].length; 0 < e; ) {
										var n = 0;
										switch (t[0]) {
											case u.INSERT:
												(n = Math.min(a.peekLength(), e)), i.push(a.next(n));
												break;
											case u.DELETE:
												(n = Math.min(e, l.peekLength())), l.next(n), i.delete(n);
												break;
											case u.EQUAL:
												var n = Math.min(l.peekLength(), a.peekLength(), e),
													o = l.next(n),
													r = a.next(n);
												c(o.insert, r.insert) ? i.retain(n, f.attributes.diff(o.attributes, r.attributes)) : i.push(r).delete(n);
										}
										e -= n;
									}
								}),
								i.chop()
							);
						}),
						(s.prototype.eachLine = function (t, e) {
							e = e || "\n";
							for (var n = f.iterator(this.ops), o = new s(), r = 0; n.hasNext(); ) {
								if ("insert" !== n.peekType()) return;
								var i = n.peek(),
									l = f.length(i) - n.peekLength();
								if ((l = "string" == typeof i.insert ? i.insert.indexOf(e, l) - l : -1) < 0) o.push(n.next());
								else if (0 < l) o.push(n.next(l));
								else {
									if (!1 === t(o, n.next(1).attributes || {}, r)) return;
									(r += 1), (o = new s());
								}
							}
							0 < o.length() && t(o, {}, r);
						}),
						(s.prototype.transform = function (t, e) {
							if (((e = !!e), "number" == typeof t)) return this.transformPosition(t, e);
							for (var n = f.iterator(this.ops), o = f.iterator(t.ops), r = new s(); n.hasNext() || o.hasNext(); )
								if ("insert" !== n.peekType() || (!e && "insert" === o.peekType()))
									if ("insert" === o.peekType()) r.push(o.next());
									else {
										var i = Math.min(n.peekLength(), o.peekLength()),
											l = n.next(i),
											a = o.next(i);
										if (l.delete) continue;
										a.delete ? r.push(a) : r.retain(i, f.attributes.transform(l.attributes, a.attributes, e));
									}
								else r.retain(f.length(n.next()));
							return r.chop();
						}),
						(s.prototype.transformPosition = function (t, e) {
							e = !!e;
							for (var n = f.iterator(this.ops), o = 0; n.hasNext() && o <= t; ) {
								var r = n.peekLength(),
									i = n.peekType();
								n.next(), "delete" !== i ? ("insert" === i && (o < t || !e) && (t += r), (o += r)) : (t -= Math.min(r, t - o));
							}
							return t;
						}),
						(t.exports = s);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function i(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : i(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = function (t, e, n) {
							return e && u(t.prototype, e), n && u(t, n), t;
						},
						l = o(n(8)),
						a = o(n(0));
					function s() {
						return (
							(function (t) {
								if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((r =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(s, a.default.Inline),
						r(
							s,
							[
								{
									key: "formatAt",
									value: function (t, e, n, o) {
										var r;
										s.compare(this.statics.blotName, n) < 0 && a.default.query(n, a.default.Scope.BLOT) ? ((r = this.isolate(t, e)), o && r.wrap(n, o)) : i(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "formatAt", this).call(this, t, e, n, o);
									},
								},
								{
									key: "optimize",
									value: function (t) {
										i(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "optimize", this).call(this, t), this.parent instanceof s && 0 < s.compare(this.statics.blotName, this.parent.statics.blotName) && ((t = this.parent.isolate(this.offset(), this.length())), this.moveChildren(t), t.wrap(this));
									},
								},
							],
							[
								{
									key: "compare",
									value: function (t, e) {
										var n = s.order.indexOf(t),
											o = s.order.indexOf(e);
										return 0 <= n || 0 <= o ? n - o : t === e ? 0 : t < e ? -1 : 1;
									},
								},
							]
						),
						s)).allowedChildren = [r, a.default.Embed, l.default]),
						(r.order = ["cursor", "inline", "underline", "strike", "italic", "bold", "script", "link", "code"]),
						(e.default = r);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function i(t, e, n) {
						return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
					}
					function l(t, n) {
						if ((n = (0, _.default)(!0, { container: t, modules: { clipboard: !0, keyboard: !0, history: !0 } }, n)).theme && n.theme !== k.DEFAULTS.theme) {
							if (((n.theme = k.import("themes/" + n.theme)), null == n.theme)) throw new Error("Invalid theme " + n.theme + ". Did you register it?");
						} else n.theme = w.default;
						var e = (0, _.default)(!0, {}, n.theme.DEFAULTS);
						return (
							[e, n].forEach(function (e) {
								(e.modules = e.modules || {}),
									Object.keys(e.modules).forEach(function (t) {
										!0 === e.modules[t] && (e.modules[t] = {});
									});
							}),
							(t = Object.keys(e.modules)
								.concat(Object.keys(n.modules))
								.reduce(function (t, e) {
									var n = k.import("modules/" + e);
									return null == n ? x.error("Cannot load " + e + " module. Are you sure you registered it?") : (t[e] = n.DEFAULTS || {}), t;
								}, {})),
							null != n.modules && n.modules.toolbar && n.modules.toolbar.constructor !== Object && (n.modules.toolbar = { container: n.modules.toolbar }),
							(n = (0, _.default)(!0, {}, k.DEFAULTS, { modules: t }, e, n)),
							["bounds", "container", "scrollingContainer"].forEach(function (t) {
								"string" == typeof n[t] && (n[t] = document.querySelector(n[t]));
							}),
							(n.modules = Object.keys(n.modules).reduce(function (t, e) {
								return n.modules[e] && (t[e] = n.modules[e]), t;
							}, {})),
							n
						);
					}
					function a(t, e, n, o) {
						if (this.options.strict && !this.isEnabled() && e === y.default.sources.USER) return new p.default();
						var r = null == n ? null : this.getSelection(),
							i = this.editor.delta,
							t = t();
						return null != r && (!0 === n && (n = r.index), null == o ? (r = u(r, t, e)) : 0 !== o && (r = u(r, n, o, e)), this.setSelection(r, y.default.sources.SILENT)), 0 < t.length() && ((r = [y.default.events.TEXT_CHANGE, t, i, e]), (i = this.emitter).emit.apply(i, [y.default.events.EDITOR_CHANGE].concat(r)), e !== y.default.sources.SILENT && (e = this.emitter).emit.apply(e, r)), t;
					}
					function s(t, e, n, o, r) {
						var i = {};
						return "number" == typeof t.index && "number" == typeof t.length ? ("number" != typeof e && ((r = o), (o = n), (n = e)), (e = t.length), (t = t.index)) : "number" != typeof e && ((r = o), (o = n), (n = e), (e = 0)), "object" === (void 0 === n ? "undefined" : c(n)) ? ((i = n), (r = o)) : "string" == typeof n && (null != o ? (i[n] = o) : (r = n)), [t, e, i, (r = r || y.default.sources.API)];
					}
					function u(t, e, n, o) {
						if (null == t) return null;
						var r,
							i = void 0,
							l =
								e instanceof p.default
									? ((r = [t.index, t.index + t.length].map(function (t) {
											return e.transformPosition(t, o !== y.default.sources.USER);
									  })),
									  (i = (r = f(r, 2))[0]),
									  r[1])
									: ((t = [t.index, t.index + t.length].map(function (t) {
											return t < e || (t === e && o === y.default.sources.USER) ? t : 0 <= n ? t + n : Math.max(e, t + n);
									  })),
									  (i = (t = f(t, 2))[0]),
									  t[1]);
						return new g.Range(i, l - i);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.overload = e.expandConfig = void 0);
					function r(t, e, n) {
						return e && h(t.prototype, e), n && h(t, n), t;
					}
					var c =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								  },
						f = function (t, e) {
							if (Array.isArray(t)) return t;
							if (Symbol.iterator in Object(t))
								return (function (t, e) {
									var n = [],
										o = !0,
										r = !1,
										i = void 0;
									try {
										for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
									} catch (t) {
										(r = !0), (i = t);
									} finally {
										try {
											!o && a.return && a.return();
										} finally {
											if (r) throw i;
										}
									}
									return n;
								})(t, e);
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						};
					function h(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					n(53);
					var p = o(n(4)),
						d = o(n(57)),
						y = o(n(9)),
						b = o(n(7)),
						v = o(n(0)),
						g = n(22),
						m = o(g),
						_ = o(n(2)),
						O = o(n(10)),
						w = o(n(32)),
						x = (0, O.default)("quill"),
						k =
							(r(E, null, [
								{
									key: "debug",
									value: function (t) {
										!0 === t && (t = "log"), O.default.level(t);
									},
								},
								{
									key: "find",
									value: function (t) {
										return t.__quill || v.default.find(t);
									},
								},
								{
									key: "import",
									value: function (t) {
										return null == this.imports[t] && x.error("Cannot import " + t + ". Are you sure it was registered?"), this.imports[t];
									},
								},
								{
									key: "register",
									value: function (e, n) {
										var t,
											o = this,
											r = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
										"string" != typeof e
											? "string" == typeof (t = e.attrName || e.blotName)
												? this.register("formats/" + t, e, n)
												: Object.keys(e).forEach(function (t) {
														o.register(t, e[t], n);
												  })
											: (null == this.imports[e] || r || x.warn("Overwriting " + e + " with", n), (this.imports[e] = n), (e.startsWith("blots/") || e.startsWith("formats/")) && "abstract" !== n.blotName ? v.default.register(n) : e.startsWith("modules") && "function" == typeof n.register && n.register());
									},
								},
							]),
							r(E, [
								{
									key: "addContainer",
									value: function (t) {
										var e,
											n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
										return "string" == typeof t && ((e = t), (t = document.createElement("div")).classList.add(e)), this.container.insertBefore(t, n), t;
									},
								},
								{
									key: "blur",
									value: function () {
										this.selection.setRange(null);
									},
								},
								{
									key: "deleteText",
									value: function (t, e, n) {
										var o = this,
											r = s(t, e, n),
											r = f(r, 4);
										return (
											(t = r[0]),
											(e = r[1]),
											(n = r[3]),
											a.call(
												this,
												function () {
													return o.editor.deleteText(t, e);
												},
												n,
												t,
												-1 * e
											)
										);
									},
								},
								{
									key: "disable",
									value: function () {
										this.enable(!1);
									},
								},
								{
									key: "enable",
									value: function () {
										var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
										this.scroll.enable(t), this.container.classList.toggle("ql-disabled", !t);
									},
								},
								{
									key: "focus",
									value: function () {
										var t = this.scrollingContainer.scrollTop;
										this.selection.focus(), (this.scrollingContainer.scrollTop = t), this.scrollIntoView();
									},
								},
								{
									key: "format",
									value: function (n, o) {
										var r = this,
											t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : y.default.sources.API;
										return a.call(
											this,
											function () {
												var t = r.getSelection(!0),
													e = new p.default();
												if (null == t) return e;
												if (v.default.query(n, v.default.Scope.BLOCK)) e = r.editor.formatLine(t.index, t.length, i({}, n, o));
												else {
													if (0 === t.length) return r.selection.format(n, o), e;
													e = r.editor.formatText(t.index, t.length, i({}, n, o));
												}
												return r.setSelection(t, y.default.sources.SILENT), e;
											},
											t
										);
									},
								},
								{
									key: "formatLine",
									value: function (t, e, n, o, r) {
										var i,
											l = this,
											o = s(t, e, n, o, r),
											o = f(o, 4);
										return (
											(t = o[0]),
											(e = o[1]),
											(i = o[2]),
											(r = o[3]),
											a.call(
												this,
												function () {
													return l.editor.formatLine(t, e, i);
												},
												r,
												t,
												0
											)
										);
									},
								},
								{
									key: "formatText",
									value: function (t, e, n, o, r) {
										var i,
											l = this,
											o = s(t, e, n, o, r),
											o = f(o, 4);
										return (
											(t = o[0]),
											(e = o[1]),
											(i = o[2]),
											(r = o[3]),
											a.call(
												this,
												function () {
													return l.editor.formatText(t, e, i);
												},
												r,
												t,
												0
											)
										);
									},
								},
								{
									key: "getBounds",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
											e = "number" == typeof t ? this.selection.getBounds(t, e) : this.selection.getBounds(t.index, t.length),
											t = this.container.getBoundingClientRect();
										return { bottom: e.bottom - t.top, height: e.height, left: e.left - t.left, right: e.right - t.left, top: e.top - t.top, width: e.width };
									},
								},
								{
									key: "getContents",
									value: function () {
										var t = s((e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0), 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e),
											e = (t = f(t, 2))[0],
											n = t[1];
										return this.editor.getContents(e, n);
									},
								},
								{
									key: "getFormat",
									value: function () {
										var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : this.getSelection(!0),
											e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
										return "number" == typeof t ? this.editor.getFormat(t, e) : this.editor.getFormat(t.index, t.length);
									},
								},
								{
									key: "getIndex",
									value: function (t) {
										return t.offset(this.scroll);
									},
								},
								{
									key: "getLength",
									value: function () {
										return this.scroll.length();
									},
								},
								{
									key: "getLeaf",
									value: function (t) {
										return this.scroll.leaf(t);
									},
								},
								{
									key: "getLine",
									value: function (t) {
										return this.scroll.line(t);
									},
								},
								{
									key: "getLines",
									value: function () {
										var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
											e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE;
										return "number" != typeof t ? this.scroll.lines(t.index, t.length) : this.scroll.lines(t, e);
									},
								},
								{
									key: "getModule",
									value: function (t) {
										return this.theme.modules[t];
									},
								},
								{
									key: "getSelection",
									value: function () {
										return 0 < arguments.length && void 0 !== arguments[0] && arguments[0] && this.focus(), this.update(), this.selection.getRange()[0];
									},
								},
								{
									key: "getText",
									value: function () {
										var t = s((e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0), 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.getLength() - e),
											e = (t = f(t, 2))[0],
											n = t[1];
										return this.editor.getText(e, n);
									},
								},
								{
									key: "hasFocus",
									value: function () {
										return this.selection.hasFocus();
									},
								},
								{
									key: "insertEmbed",
									value: function (t, e, n) {
										var o = this,
											r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : E.sources.API;
										return a.call(
											this,
											function () {
												return o.editor.insertEmbed(t, e, n);
											},
											r,
											t
										);
									},
								},
								{
									key: "insertText",
									value: function (t, e, n, o, r) {
										var i,
											l = this,
											o = s(t, 0, n, o, r),
											o = f(o, 4);
										return (
											(t = o[0]),
											(i = o[2]),
											(r = o[3]),
											a.call(
												this,
												function () {
													return l.editor.insertText(t, e, i);
												},
												r,
												t,
												e.length
											)
										);
									},
								},
								{
									key: "isEnabled",
									value: function () {
										return !this.container.classList.contains("ql-disabled");
									},
								},
								{
									key: "off",
									value: function () {
										return this.emitter.off.apply(this.emitter, arguments);
									},
								},
								{
									key: "on",
									value: function () {
										return this.emitter.on.apply(this.emitter, arguments);
									},
								},
								{
									key: "once",
									value: function () {
										return this.emitter.once.apply(this.emitter, arguments);
									},
								},
								{
									key: "pasteHTML",
									value: function (t, e, n) {
										this.clipboard.dangerouslyPasteHTML(t, e, n);
									},
								},
								{
									key: "removeFormat",
									value: function (t, e, n) {
										var o = this,
											r = s(t, e, n),
											r = f(r, 4);
										return (
											(t = r[0]),
											(e = r[1]),
											(n = r[3]),
											a.call(
												this,
												function () {
													return o.editor.removeFormat(t, e);
												},
												n,
												t
											)
										);
									},
								},
								{
									key: "scrollIntoView",
									value: function () {
										this.selection.scrollIntoView(this.scrollingContainer);
									},
								},
								{
									key: "setContents",
									value: function (o) {
										var r = this,
											t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y.default.sources.API;
										return a.call(
											this,
											function () {
												o = new p.default(o);
												var t = r.getLength(),
													e = r.editor.deleteText(0, t),
													n = r.editor.applyDelta(o);
												return null != (t = n.ops[n.ops.length - 1]) && "string" == typeof t.insert && "\n" === t.insert[t.insert.length - 1] && (r.editor.deleteText(r.getLength() - 1, 1), n.delete(1)), e.compose(n);
											},
											t
										);
									},
								},
								{
									key: "setSelection",
									value: function (t, e, n) {
										var o;
										null == t ? this.selection.setRange(null, e || E.sources.API) : ((o = s(t, e, n)), (t = (o = f(o, 4))[0]), (e = o[1]), (n = o[3]), this.selection.setRange(new g.Range(t, e), n), n !== y.default.sources.SILENT && this.selection.scrollIntoView(this.scrollingContainer));
									},
								},
								{
									key: "setText",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y.default.sources.API,
											t = new p.default().insert(t);
										return this.setContents(t, e);
									},
								},
								{
									key: "update",
									value: function () {
										var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : y.default.sources.USER,
											e = this.scroll.update(t);
										return this.selection.update(t), e;
									},
								},
								{
									key: "updateContents",
									value: function (t) {
										var e = this,
											n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : y.default.sources.API;
										return a.call(
											this,
											function () {
												return (t = new p.default(t)), e.editor.applyDelta(t, n);
											},
											n,
											!0
										);
									},
								},
							]),
							E);
					function E(t) {
						var r = this,
							e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						if (
							((function (t) {
								if (!(t instanceof E)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(this.options = l(t, e)),
							(this.container = this.options.container),
							null == this.container)
						)
							return x.error("Invalid Quill container", t);
						this.options.debug && E.debug(this.options.debug),
							(t = this.container.innerHTML.trim()),
							this.container.classList.add("ql-container"),
							(this.container.innerHTML = ""),
							((this.container.__quill = this).root = this.addContainer("ql-editor")),
							this.root.classList.add("ql-blank"),
							this.root.setAttribute("data-gramm", !1),
							(this.scrollingContainer = this.options.scrollingContainer || this.root),
							(this.emitter = new y.default()),
							(this.scroll = v.default.create(this.root, { emitter: this.emitter, whitelist: this.options.formats })),
							(this.editor = new d.default(this.scroll)),
							(this.selection = new m.default(this.scroll, this.emitter)),
							(this.theme = new this.options.theme(this, this.options)),
							(this.keyboard = this.theme.addModule("keyboard")),
							(this.clipboard = this.theme.addModule("clipboard")),
							(this.history = this.theme.addModule("history")),
							this.theme.init(),
							this.emitter.on(y.default.events.EDITOR_CHANGE, function (t) {
								t === y.default.events.TEXT_CHANGE && r.root.classList.toggle("ql-blank", r.editor.isBlank());
							}),
							this.emitter.on(y.default.events.SCROLL_UPDATE, function (t, e) {
								var n = r.selection.lastRange,
									o = n && 0 === n.length ? n.index : void 0;
								a.call(
									r,
									function () {
										return r.editor.update(null, e, o);
									},
									t
								);
							}),
							(t = this.clipboard.convert("<div class='ql-editor' style=\"white-space: normal;\">" + t + "<p><br></p></div>")),
							this.setContents(t),
							this.history.clear(),
							this.options.placeholder && this.root.setAttribute("data-placeholder", this.options.placeholder),
							this.options.readOnly && this.disable();
					}
					(k.DEFAULTS = { bounds: null, formats: null, modules: {}, placeholder: "", readOnly: !1, scrollingContainer: null, strict: !0, theme: "default" }), (k.events = y.default.events), (k.sources = y.default.sources), (k.version = "1.3.6"), (k.imports = { delta: p.default, parchment: v.default, "core/module": b.default, "core/theme": w.default }), (e.expandConfig = l), (e.overload = s), (e.default = k);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
						(function (t) {
							if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
						})(this),
							(this.quill = t),
							(this.options = e);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (o.DEFAULTS = {}), (e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function o() {
						return (
							(function (t) {
								if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(o, ((n = n(0)) && n.__esModule ? n : { default: n }).default.Text),
						(n = o),
						(e.default = n);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = function (t, e, n) {
							return e && a(t.prototype, e), n && a(t, n), t;
						},
						i = o(n(58)),
						l = (0, o(n(10)).default)("quill:events");
					function a(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					function s() {
						!(function (t) {
							if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
						})(this);
						var t = (function (t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
						})(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this));
						return (t.listeners = {}), t.on("error", l.error), t;
					}
					["selectionchange", "mousedown", "mouseup", "click"].forEach(function (t) {
						document.addEventListener(t, function () {
							for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
							[].slice.call(document.querySelectorAll(".ql-container")).forEach(function (t) {
								t.__quill && t.__quill.emitter && (t = t.__quill.emitter).handleDOM.apply(t, e);
							});
						});
					}),
						(function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(s, i.default),
						r(s, [
							{
								key: "emit",
								value: function () {
									l.log.apply(l, arguments),
										(function t(e, n, o) {
											null === e && (e = Function.prototype);
											var r = Object.getOwnPropertyDescriptor(e, n);
											return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
										})(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "emit", this).apply(this, arguments);
								},
							},
							{
								key: "handleDOM",
								value: function (n) {
									for (var t = arguments.length, o = Array(1 < t ? t - 1 : 0), e = 1; e < t; e++) o[e - 1] = arguments[e];
									(this.listeners[n.type] || []).forEach(function (t) {
										var e = t.node,
											t = t.handler;
										(n.target !== e && !e.contains(n.target)) || t.apply(void 0, [n].concat(o));
									});
								},
							},
							{
								key: "listenDOM",
								value: function (t, e, n) {
									this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push({ node: e, handler: n });
								},
							},
						]),
						((r = s).events = { EDITOR_CHANGE: "editor-change", SCROLL_BEFORE_UPDATE: "scroll-before-update", SCROLL_OPTIMIZE: "scroll-optimize", SCROLL_UPDATE: "scroll-update", SELECTION_CHANGE: "selection-change", TEXT_CHANGE: "text-change" }),
						(r.sources = { API: "api", SILENT: "silent", USER: "user" }),
						(e.default = r);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						if (i.indexOf(t) <= i.indexOf(l)) {
							for (var e, n = arguments.length, o = Array(1 < n ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
							(e = console)[t].apply(e, o);
						}
					}
					function r(n) {
						return i.reduce(function (t, e) {
							return (t[e] = o.bind(console, e, n)), t;
						}, {});
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i = ["error", "warn", "log", "info"],
						l = "warn";
					(o.level = r.level =
						function (t) {
							l = t;
						}),
						(e.default = r);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = n(1),
						n =
							((r.keys = function (t) {
								return [].map.call(t.attributes, function (t) {
									return t.name;
								});
							}),
							(r.prototype.add = function (t, e) {
								return !!this.canAdd(t, e) && (t.setAttribute(this.keyName, e), !0);
							}),
							(r.prototype.canAdd = function (t, e) {
								return null != o.query(t, o.Scope.BLOT & (this.scope | o.Scope.TYPE)) && (null == this.whitelist || ("string" == typeof e ? -1 < this.whitelist.indexOf(e.replace(/["']/g, "")) : -1 < this.whitelist.indexOf(e)));
							}),
							(r.prototype.remove = function (t) {
								t.removeAttribute(this.keyName);
							}),
							(r.prototype.value = function (t) {
								var e = t.getAttribute(this.keyName);
								return this.canAdd(t, e) && e ? e : "";
							}),
							r);
					function r(t, e, n) {
						void 0 === n && (n = {}), (this.attrName = t), (this.keyName = e), (e = o.Scope.TYPE & o.Scope.ATTRIBUTE), null != n.scope ? (this.scope = (n.scope & o.Scope.LEVEL) | e) : (this.scope = o.Scope.ATTRIBUTE), null != n.whitelist && (this.whitelist = n.whitelist);
					}
					e.default = n;
				},
				function (t, e, n) {
					function a(t) {
						return null == t;
					}
					function s(t) {
						return t && "object" == typeof t && "number" == typeof t.length && "function" == typeof t.copy && "function" == typeof t.slice && !(0 < t.length && "number" != typeof t[0]);
					}
					var u = Array.prototype.slice,
						c = n(55),
						f = n(56),
						h = (t.exports = function (t, e, n) {
							return (
								(n = n || {}),
								t === e ||
									(t instanceof Date && e instanceof Date
										? t.getTime() === e.getTime()
										: !t || !e || ("object" != typeof t && "object" != typeof e)
										? n.strict
											? t === e
											: t == e
										: (function (t, e, n) {
												var o, r;
												if (a(t) || a(e)) return !1;
												if (t.prototype !== e.prototype) return !1;
												if (f(t)) return !!f(e) && ((t = u.call(t)), (e = u.call(e)), h(t, e, n));
												if (s(t)) {
													if (!s(e)) return !1;
													if (t.length !== e.length) return !1;
													for (o = 0; o < t.length; o++) if (t[o] !== e[o]) return !1;
													return !0;
												}
												try {
													var i = c(t),
														l = c(e);
												} catch (t) {
													return !1;
												}
												if (i.length != l.length) return !1;
												for (i.sort(), l.sort(), o = i.length - 1; 0 <= o; o--) if (i[o] != l[o]) return !1;
												for (o = i.length - 1; 0 <= o; o--) if (((r = i[o]), !h(t[r], e[r], n))) return !1;
												return typeof t == typeof e;
										  })(t, e, n))
							);
						});
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					function a(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : a(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.Code = void 0);
					function s(t, e) {
						if (Array.isArray(t)) return t;
						if (Symbol.iterator in Object(t))
							return (function (t, e) {
								var n = [],
									o = !0,
									r = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
								} catch (t) {
									(r = !0), (i = t);
								} finally {
									try {
										!o && a.return && a.return();
									} finally {
										if (r) throw i;
									}
								}
								return n;
							})(t, e);
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
					var u = function (t, e, n) {
							return e && b(t.prototype, e), n && b(t, n), t;
						},
						c = o(n(4)),
						f = o(n(0)),
						h = o(n(3)),
						p = o(n(5)),
						d = o(n(8));
					function y() {
						return r(this, y), i(this, (y.__proto__ || Object.getPrototypeOf(y)).apply(this, arguments));
					}
					function b(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					function v() {
						return r(this, v), i(this, (v.__proto__ || Object.getPrototypeOf(v)).apply(this, arguments));
					}
					((p = (l(y, p.default), y)).blotName = "code"),
						(p.tagName = "CODE"),
						l(v, h.default),
						u(
							v,
							[
								{
									key: "delta",
									value: function () {
										var n = this,
											t = this.domNode.textContent;
										return (t = t.endsWith("\n") ? t.slice(0, -1) : t).split("\n").reduce(function (t, e) {
											return t.insert(e).insert("\n", n.formats());
										}, new c.default());
									},
								},
								{
									key: "format",
									value: function (t, e) {
										var n;
										(t === this.statics.blotName && e) || ((n = this.descendant(d.default, this.length() - 1)), null != (n = s(n, 1)[0]) && n.deleteAt(n.length() - 1, 1), a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "format", this).call(this, t, e));
									},
								},
								{
									key: "formatAt",
									value: function (t, e, n, o) {
										var r, i, l, a;
										0 === e || null == f.default.query(n, f.default.Scope.BLOCK) || (n === this.statics.blotName && o === this.statics.formats(this.domNode)) || (a = this.newlineIndex(t)) < 0 || t + e <= a || ((i = a - (r = this.newlineIndex(t, !0) + 1) + 1), (a = (l = this.isolate(r, i)).next), l.format(n, o), a instanceof v && a.formatAt(0, t - r + e - i, n, o));
									},
								},
								{
									key: "insertAt",
									value: function (t, e, n) {
										null == n && ((n = this.descendant(d.default, t)), (n = (t = s(n, 2))[0]), (t = t[1]), n.insertAt(t, e));
									},
								},
								{
									key: "length",
									value: function () {
										var t = this.domNode.textContent.length;
										return this.domNode.textContent.endsWith("\n") ? t : t + 1;
									},
								},
								{
									key: "newlineIndex",
									value: function (t) {
										if (1 < arguments.length && void 0 !== arguments[1] && arguments[1]) return this.domNode.textContent.slice(0, t).lastIndexOf("\n");
										var e = this.domNode.textContent.slice(t).indexOf("\n");
										return -1 < e ? t + e : -1;
									},
								},
								{
									key: "optimize",
									value: function (t) {
										this.domNode.textContent.endsWith("\n") || this.appendChild(f.default.create("text", "\n")), a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "optimize", this).call(this, t);
										var e = this.next;
										null != e && e.prev === this && e.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === e.statics.formats(e.domNode) && (e.optimize(t), e.moveChildren(this), e.remove());
									},
								},
								{
									key: "replace",
									value: function (t) {
										a(v.prototype.__proto__ || Object.getPrototypeOf(v.prototype), "replace", this).call(this, t),
											[].slice.call(this.domNode.querySelectorAll("*")).forEach(function (t) {
												var e = f.default.find(t);
												null == e ? t.parentNode.removeChild(t) : e instanceof f.default.Embed ? e.remove() : e.unwrap();
											});
									},
								},
							],
							[
								{
									key: "create",
									value: function (t) {
										return (t = a(v.__proto__ || Object.getPrototypeOf(v), "create", this).call(this, t)).setAttribute("spellcheck", !1), t;
									},
								},
								{
									key: "formats",
									value: function () {
										return !0;
									},
								},
							]
						),
						((u = v).blotName = "code-block"),
						(u.tagName = "PRE"),
						(u.TAB = "  "),
						(e.Code = p),
						(e.default = u);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
						return e && i(t.prototype, e), n && i(t, n), t;
					};
					function r() {
						return (
							(function (t) {
								if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
						);
					}
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((o =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(r, ((n = n(0)) && n.__esModule ? n : { default: n }).default.Embed),
						o(
							r,
							[
								{
									key: "insertInto",
									value: function (t, e) {
										0 === t.children.length
											? (function t(e, n, o) {
													null === e && (e = Function.prototype);
													var r = Object.getOwnPropertyDescriptor(e, n);
													return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
											  })(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "insertInto", this).call(this, t, e)
											: this.remove();
									},
								},
								{
									key: "length",
									value: function () {
										return 0;
									},
								},
								{
									key: "value",
									value: function () {
										return "";
									},
								},
							],
							[{ key: "value", value: function () {} }]
						),
						r)).blotName = "break"),
						(o.tagName = "BR"),
						(e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function o(t, e) {
						var n = document.createElement("a");
						return (n.href = t), (n = n.href.slice(0, n.href.indexOf(":"))), -1 < e.indexOf(n);
					}
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.sanitize = e.default = void 0);
					var i = function (t, e, n) {
						return e && a(t.prototype, e), n && a(t, n), t;
					};
					function l() {
						return (
							(function (t) {
								if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
						);
					}
					function a(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((i =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(l, ((n = n(5)) && n.__esModule ? n : { default: n }).default),
						i(
							l,
							[
								{
									key: "format",
									value: function (t, e) {
										if (t !== this.statics.blotName || !e) return r(l.prototype.__proto__ || Object.getPrototypeOf(l.prototype), "format", this).call(this, t, e);
										(e = this.constructor.sanitize(e)), this.domNode.setAttribute("href", e);
									},
								},
							],
							[
								{
									key: "create",
									value: function (t) {
										var e = r(l.__proto__ || Object.getPrototypeOf(l), "create", this).call(this, t);
										return (t = this.sanitize(t)), e.setAttribute("href", t), e.setAttribute("target", "_blank"), e;
									},
								},
								{
									key: "formats",
									value: function (t) {
										return t.getAttribute("href");
									},
								},
								{
									key: "sanitize",
									value: function (t) {
										return o(t, this.PROTOCOL_WHITELIST) ? t : this.SANITIZED_URL;
									},
								},
							]
						),
						l)).blotName = "link"),
						(i.tagName = "A"),
						(i.SANITIZED_URL = "about:blank"),
						(i.PROTOCOL_WHITELIST = ["http", "https", "mailto", "tel"]),
						(e.default = i),
						(e.sanitize = o);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						t.setAttribute(e, !("true" === t.getAttribute(e)));
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								  },
						l = function (t, e, n) {
							return e && f(t.prototype, e), n && f(t, n), t;
						},
						a = o(n(25)),
						s = o(n(106)),
						u = 0,
						l =
							(l(c, [
								{
									key: "togglePicker",
									value: function () {
										this.container.classList.toggle("ql-expanded"), r(this.label, "aria-expanded"), r(this.options, "aria-hidden");
									},
								},
								{
									key: "buildItem",
									value: function (t) {
										var e = this,
											n = document.createElement("span");
										return (
											(n.tabIndex = "0"),
											n.setAttribute("role", "button"),
											n.classList.add("ql-picker-item"),
											t.hasAttribute("value") && n.setAttribute("data-value", t.getAttribute("value")),
											t.textContent && n.setAttribute("data-label", t.textContent),
											n.addEventListener("click", function () {
												e.selectItem(n, !0);
											}),
											n.addEventListener("keydown", function (t) {
												switch (t.keyCode) {
													case a.default.keys.ENTER:
														e.selectItem(n, !0), t.preventDefault();
														break;
													case a.default.keys.ESCAPE:
														e.escape(), t.preventDefault();
												}
											}),
											n
										);
									},
								},
								{
									key: "buildLabel",
									value: function () {
										var t = document.createElement("span");
										return t.classList.add("ql-picker-label"), (t.innerHTML = s.default), (t.tabIndex = "0"), t.setAttribute("role", "button"), t.setAttribute("aria-expanded", "false"), this.container.appendChild(t), t;
									},
								},
								{
									key: "buildOptions",
									value: function () {
										var n = this,
											o = document.createElement("span");
										o.classList.add("ql-picker-options"),
											o.setAttribute("aria-hidden", "true"),
											(o.tabIndex = "-1"),
											(o.id = "ql-picker-options-" + u),
											(u += 1),
											this.label.setAttribute("aria-controls", o.id),
											(this.options = o),
											[].slice.call(this.select.options).forEach(function (t) {
												var e = n.buildItem(t);
												o.appendChild(e), !0 === t.selected && n.selectItem(e);
											}),
											this.container.appendChild(o);
									},
								},
								{
									key: "buildPicker",
									value: function () {
										var e = this;
										[].slice.call(this.select.attributes).forEach(function (t) {
											e.container.setAttribute(t.name, t.value);
										}),
											this.container.classList.add("ql-picker"),
											(this.label = this.buildLabel()),
											this.buildOptions();
									},
								},
								{
									key: "escape",
									value: function () {
										var t = this;
										this.close(),
											setTimeout(function () {
												return t.label.focus();
											}, 1);
									},
								},
								{
									key: "close",
									value: function () {
										this.container.classList.remove("ql-expanded"), this.label.setAttribute("aria-expanded", "false"), this.options.setAttribute("aria-hidden", "true");
									},
								},
								{
									key: "selectItem",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
											n = this.container.querySelector(".ql-selected");
										t !== n && (null != n && n.classList.remove("ql-selected"), null != t && (t.classList.add("ql-selected"), (this.select.selectedIndex = [].indexOf.call(t.parentNode.children, t)), t.hasAttribute("data-value") ? this.label.setAttribute("data-value", t.getAttribute("data-value")) : this.label.removeAttribute("data-value"), t.hasAttribute("data-label") ? this.label.setAttribute("data-label", t.getAttribute("data-label")) : this.label.removeAttribute("data-label"), e)) && ("function" == typeof Event ? this.select.dispatchEvent(new Event("change")) : "object" === ("undefined" == typeof Event ? "undefined" : i(Event)) && ((e = document.createEvent("Event")).initEvent("change", !0, !0), this.select.dispatchEvent(e)), this.close());
									},
								},
								{
									key: "update",
									value: function () {
										var t,
											e = void 0;
										-1 < this.select.selectedIndex ? ((t = this.container.querySelector(".ql-picker-options").children[this.select.selectedIndex]), (e = this.select.options[this.select.selectedIndex]), this.selectItem(t)) : this.selectItem(null), (e = null != e && e !== this.select.querySelector("option[selected]")), this.label.classList.toggle("ql-active", e);
									},
								},
							]),
							c);
					function c(t) {
						var e = this;
						(function (t) {
							if (!(t instanceof c)) throw new TypeError("Cannot call a class as a function");
						})(this),
							(this.select = t),
							(this.container = document.createElement("span")),
							this.buildPicker(),
							(this.select.style.display = "none"),
							this.select.parentNode.insertBefore(this.container, this.select),
							this.label.addEventListener("mousedown", function () {
								e.togglePicker();
							}),
							this.label.addEventListener("keydown", function (t) {
								switch (t.keyCode) {
									case a.default.keys.ENTER:
										e.togglePicker();
										break;
									case a.default.keys.ESCAPE:
										e.escape(), t.preventDefault();
								}
							}),
							this.select.addEventListener("change", this.update.bind(this));
					}
					function f(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.default = l;
				},
				function (t, e, n) {
					"use strict";
					function i(e) {
						var n = u.find(e);
						if (null == n)
							try {
								n = u.create(e);
							} catch (t) {
								(n = u.create(u.Scope.INLINE)),
									[].slice.call(e.childNodes).forEach(function (t) {
										n.domNode.appendChild(t);
									}),
									e.parentNode && e.parentNode.replaceChild(n.domNode, e),
									n.attach();
							}
						return n;
					}
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var l,
						a = n(47),
						s = n(27),
						u = n(1),
						r =
							(r(c, (l = s.default)),
							(c.prototype.appendChild = function (t) {
								this.insertBefore(t);
							}),
							(c.prototype.attach = function () {
								l.prototype.attach.call(this),
									this.children.forEach(function (t) {
										t.attach();
									});
							}),
							(c.prototype.build = function () {
								var n = this;
								(this.children = new a.default()),
									[].slice
										.call(this.domNode.childNodes)
										.reverse()
										.forEach(function (t) {
											try {
												var e = i(t);
												n.insertBefore(e, n.children.head || void 0);
											} catch (t) {
												if (t instanceof u.ParchmentError) return;
												throw t;
											}
										});
							}),
							(c.prototype.deleteAt = function (t, e) {
								if (0 === t && e === this.length()) return this.remove();
								this.children.forEachAt(t, e, function (t, e, n) {
									t.deleteAt(e, n);
								});
							}),
							(c.prototype.descendant = function (t, e) {
								var e = (n = this.children.find(e))[0],
									n = n[1];
								return (null == t.blotName && t(e)) || (null != t.blotName && e instanceof t) ? [e, n] : e instanceof c ? e.descendant(t, n) : [null, -1];
							}),
							(c.prototype.descendants = function (o, t, e) {
								void 0 === t && (t = 0), void 0 === e && (e = Number.MAX_VALUE);
								var r = [],
									i = e;
								return (
									this.children.forEachAt(t, e, function (t, e, n) {
										((null == o.blotName && o(t)) || (null != o.blotName && t instanceof o)) && r.push(t), t instanceof c && (r = r.concat(t.descendants(o, e, i))), (i -= n);
									}),
									r
								);
							}),
							(c.prototype.detach = function () {
								this.children.forEach(function (t) {
									t.detach();
								}),
									l.prototype.detach.call(this);
							}),
							(c.prototype.formatAt = function (t, e, o, r) {
								this.children.forEachAt(t, e, function (t, e, n) {
									t.formatAt(e, n, o, r);
								});
							}),
							(c.prototype.insertAt = function (t, e, n) {
								var t = (o = this.children.find(t))[0],
									o = o[1];
								t ? t.insertAt(o, e, n) : ((n = null == n ? u.create("text", e) : u.create(e, n)), this.appendChild(n));
							}),
							(c.prototype.insertBefore = function (e, t) {
								if (
									null != this.statics.allowedChildren &&
									!this.statics.allowedChildren.some(function (t) {
										return e instanceof t;
									})
								)
									throw new u.ParchmentError("Cannot insert " + e.statics.blotName + " into " + this.statics.blotName);
								e.insertInto(this, t);
							}),
							(c.prototype.length = function () {
								return this.children.reduce(function (t, e) {
									return t + e.length();
								}, 0);
							}),
							(c.prototype.moveChildren = function (e, n) {
								this.children.forEach(function (t) {
									e.insertBefore(t, n);
								});
							}),
							(c.prototype.optimize = function (t) {
								var e;
								l.prototype.optimize.call(this, t), 0 === this.children.length && (null != this.statics.defaultChild ? ((e = u.create(this.statics.defaultChild)), this.appendChild(e), e.optimize(t)) : this.remove());
							}),
							(c.prototype.path = function (t, e) {
								void 0 === e && (e = !1);
								var n = (o = this.children.find(t, e))[0],
									o = o[1],
									t = [[this, t]];
								return n instanceof c ? t.concat(n.path(o, e)) : (null != n && t.push([n, o]), t);
							}),
							(c.prototype.removeChild = function (t) {
								this.children.remove(t);
							}),
							(c.prototype.replace = function (t) {
								t instanceof c && t.moveChildren(this), l.prototype.replace.call(this, t);
							}),
							(c.prototype.split = function (t, o) {
								if (!(o = void 0 !== o && o)) {
									if (0 === t) return this;
									if (t === this.length()) return this.next;
								}
								var r = this.clone();
								return (
									this.parent.insertBefore(r, this.next),
									this.children.forEachAt(t, this.length(), function (t, e, n) {
										(t = t.split(e, o)), r.appendChild(t);
									}),
									r
								);
							}),
							(c.prototype.unwrap = function () {
								this.moveChildren(this.parent, this.next), this.remove();
							}),
							(c.prototype.update = function (t, e) {
								var n = this,
									o = [],
									r = [];
								t.forEach(function (t) {
									t.target === n.domNode && "childList" === t.type && (o.push.apply(o, t.addedNodes), r.push.apply(r, t.removedNodes));
								}),
									r.forEach(function (t) {
										(null != t.parentNode && "IFRAME" !== t.tagName && document.body.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY) || (null != (t = u.find(t)) && ((null != t.domNode.parentNode && t.domNode.parentNode !== n.domNode) || t.detach()));
									}),
									o
										.filter(function (t) {
											return t.parentNode == n.domNode;
										})
										.sort(function (t, e) {
											return t === e ? 0 : t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : -1;
										})
										.forEach(function (t) {
											var e = null;
											null != t.nextSibling && (e = u.find(t.nextSibling)), ((t = i(t)).next == e && null != t.next) || (null != t.parent && t.parent.removeChild(n), n.insertBefore(t, e || void 0));
										});
							}),
							c);
					function c(t) {
						return (t = l.call(this, t) || this).build(), t;
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i,
						l = n(11),
						a = n(28),
						s = n(17),
						u = n(1),
						r =
							(r(c, (i = s.default)),
							(c.formats = function (t) {
								return "string" == typeof this.tagName || (Array.isArray(this.tagName) ? t.tagName.toLowerCase() : void 0);
							}),
							(c.prototype.format = function (t, e) {
								var n = u.query(t);
								n instanceof l.default ? this.attributes.attribute(n, e) : e && (null == n || (t === this.statics.blotName && this.formats()[t] === e) || this.replaceWith(t, e));
							}),
							(c.prototype.formats = function () {
								var t = this.attributes.values(),
									e = this.statics.formats(this.domNode);
								return null != e && (t[this.statics.blotName] = e), t;
							}),
							(c.prototype.replaceWith = function (t, e) {
								return (e = i.prototype.replaceWith.call(this, t, e)), this.attributes.copy(e), e;
							}),
							(c.prototype.update = function (t, e) {
								var n = this;
								i.prototype.update.call(this, t, e),
									t.some(function (t) {
										return t.target === n.domNode && "attributes" === t.type;
									}) && this.attributes.build();
							}),
							(c.prototype.wrap = function (t, e) {
								return (e = i.prototype.wrap.call(this, t, e)) instanceof c && e.statics.scope === this.statics.scope && this.attributes.move(e), e;
							}),
							c);
					function c(t) {
						return ((t = i.call(this, t) || this).attributes = new a.default(t.domNode)), t;
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i,
						l = n(27),
						n = n(1),
						n =
							(r(a, (i = l.default)),
							(a.value = function (t) {
								return !0;
							}),
							(a.prototype.index = function (t, e) {
								return this.domNode === t || this.domNode.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY ? Math.min(e, 1) : -1;
							}),
							(a.prototype.position = function (t, e) {
								var n = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
								return 0 < t && (n += 1), [this.parent.domNode, n];
							}),
							(a.prototype.value = function () {
								return ((t = {})[this.statics.blotName] = this.statics.value(this.domNode) || !0), t;
								var t;
							}),
							(a.scope = n.Scope.INLINE_BLOT),
							a);
					function a() {
						return (null !== i && i.apply(this, arguments)) || this;
					}
					e.default = n;
				},
				function (t, e, n) {
					function o(t) {
						(this.ops = t), (this.index = 0), (this.offset = 0);
					}
					var r = n(12),
						i = n(2),
						l = {
							attributes: {
								compose: function (t, e, n) {
									"object" != typeof t && (t = {});
									var o,
										r = i(!0, {}, (e = "object" != typeof e ? {} : e));
									for (o in (n ||
										(r = Object.keys(r).reduce(function (t, e) {
											return null != r[e] && (t[e] = r[e]), t;
										}, {})),
									t))
										void 0 !== t[o] && void 0 === e[o] && (r[o] = t[o]);
									return 0 < Object.keys(r).length ? r : void 0;
								},
								diff: function (n, o) {
									"object" != typeof n && (n = {}), "object" != typeof o && (o = {});
									var t = Object.keys(n)
										.concat(Object.keys(o))
										.reduce(function (t, e) {
											return r(n[e], o[e]) || (t[e] = void 0 === o[e] ? null : o[e]), t;
										}, {});
									return 0 < Object.keys(t).length ? t : void 0;
								},
								transform: function (n, o, t) {
									return "object" != typeof n
										? o
										: "object" == typeof o
										? t
											? ((t = Object.keys(o).reduce(function (t, e) {
													return void 0 === n[e] && (t[e] = o[e]), t;
											  }, {})),
											  0 < Object.keys(t).length ? t : void 0)
											: o
										: void 0;
								},
							},
							iterator: function (t) {
								return new o(t);
							},
							length: function (t) {
								return "number" == typeof t.delete ? t.delete : "number" == typeof t.retain ? t.retain : "string" == typeof t.insert ? t.insert.length : 1;
							},
						};
					(o.prototype.hasNext = function () {
						return this.peekLength() < 1 / 0;
					}),
						(o.prototype.next = function (t) {
							t = t || 1 / 0;
							var e = this.ops[this.index];
							if (e) {
								var n = this.offset,
									o = l.length(e);
								return (o - n <= t ? ((t = o - n), (this.index += 1), (this.offset = 0)) : (this.offset += t), "number" == typeof e.delete) ? { delete: t } : ((o = {}), e.attributes && (o.attributes = e.attributes), "number" == typeof e.retain ? (o.retain = t) : "string" == typeof e.insert ? (o.insert = e.insert.substr(n, t)) : (o.insert = e.insert), o);
							}
							return { retain: 1 / 0 };
						}),
						(o.prototype.peek = function () {
							return this.ops[this.index];
						}),
						(o.prototype.peekLength = function () {
							return this.ops[this.index] ? l.length(this.ops[this.index]) - this.offset : 1 / 0;
						}),
						(o.prototype.peekType = function () {
							return this.ops[this.index] ? ("number" == typeof this.ops[this.index].delete ? "delete" : "number" == typeof this.ops[this.index].retain ? "retain" : "insert") : "retain";
						}),
						(t.exports = l);
				},
				function (t, e) {
					var n = (function () {
						"use strict";
						function m(t, e) {
							return null != e && t instanceof e;
						}
						function _(t, p, e, d, y) {
							"object" == typeof p && ((e = p.depth), (d = p.prototype), (y = p.includeNonEnumerable), (p = p.circular));
							var b = [],
								v = [],
								g = "undefined" != typeof Buffer;
							return (
								void 0 === p && (p = !0),
								(function o(t, r) {
									if (null === t) return null;
									if (0 === r) return t;
									var n, e, i;
									if ("object" != typeof t) return t;
									if (m(t, w)) n = new w();
									else if (m(t, x)) n = new x();
									else if (m(t, k))
										n = new k(function (e, n) {
											t.then(
												function (t) {
													e(o(t, r - 1));
												},
												function (t) {
													n(o(t, r - 1));
												}
											);
										});
									else if (_.__isArray(t)) n = [];
									else if (_.__isRegExp(t)) (n = new RegExp(t.source, O(t))), t.lastIndex && (n.lastIndex = t.lastIndex);
									else if (_.__isDate(t)) n = new Date(t.getTime());
									else {
										if (g && Buffer.isBuffer(t)) return (n = new Buffer(t.length)), t.copy(n), n;
										m(t, Error) ? (n = Object.create(t)) : void 0 === d ? ((e = Object.getPrototypeOf(t)), (n = Object.create(e))) : ((n = Object.create(d)), (e = d));
									}
									if (p) {
										var l = b.indexOf(t);
										if (-1 != l) return v[l];
										b.push(t), v.push(n);
									}
									for (s in (m(t, w) &&
										t.forEach(function (t, e) {
											(e = o(e, r - 1)), (t = o(t, r - 1)), n.set(e, t);
										}),
									m(t, x) &&
										t.forEach(function (t) {
											(t = o(t, r - 1)), n.add(t);
										}),
									t))
										((i = e ? Object.getOwnPropertyDescriptor(e, s) : i) && null == i.set) || (n[s] = o(t[s], r - 1));
									if (Object.getOwnPropertySymbols)
										for (var a = Object.getOwnPropertySymbols(t), s = 0; s < a.length; s++) {
											var u = a[s];
											((f = Object.getOwnPropertyDescriptor(t, u)) && !f.enumerable && !y) || ((n[u] = o(t[u], r - 1)), f.enumerable || Object.defineProperty(n, u, { enumerable: !1 }));
										}
									if (y)
										for (var c = Object.getOwnPropertyNames(t), s = 0; s < c.length; s++) {
											var f,
												h = c[s];
											((f = Object.getOwnPropertyDescriptor(t, h)) && f.enumerable) || ((n[h] = o(t[h], r - 1)), Object.defineProperty(n, h, { enumerable: !1 }));
										}
									return n;
								})(t, (e = void 0 === e ? 1 / 0 : e))
							);
						}
						function e(t) {
							return Object.prototype.toString.call(t);
						}
						function O(t) {
							var e = "";
							return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e;
						}
						var w, x, k;
						try {
							w = Map;
						} catch (m) {
							w = function () {};
						}
						try {
							x = Set;
						} catch (m) {
							x = function () {};
						}
						try {
							k = Promise;
						} catch (m) {
							k = function () {};
						}
						return (
							(_.clonePrototype = function (t) {
								return null === t ? null : ((e.prototype = t), new e());
								function e() {}
							}),
							(_.__objToStr = e),
							(_.__isDate = function (t) {
								return "object" == typeof t && "[object Date]" === e(t);
							}),
							(_.__isArray = function (t) {
								return "object" == typeof t && "[object Array]" === e(t);
							}),
							(_.__isRegExp = function (t) {
								return "object" == typeof t && "[object RegExp]" === e(t);
							}),
							(_.__getRegExpFlags = O),
							_
						);
					})();
					"object" == typeof t && t.exports && (t.exports = n);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function i(t) {
						if (Array.isArray(t)) {
							for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
							return n;
						}
						return Array.from(t);
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function l(t, e) {
						try {
							e.parentNode;
						} catch (t) {
							return;
						}
						return e instanceof Text && (e = e.parentNode), t.contains(e);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.Range = void 0);
					function s(t, e) {
						if (Array.isArray(t)) return t;
						if (Symbol.iterator in Object(t))
							return (function (t, e) {
								var n = [],
									o = !0,
									r = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
								} catch (t) {
									(r = !0), (i = t);
								} finally {
									try {
										!o && a.return && a.return();
									} finally {
										if (r) throw i;
									}
								}
								return n;
							})(t, e);
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
					var a = function (t, e, n) {
							return e && b(t.prototype, e), n && b(t, n), t;
						},
						u = o(n(0)),
						c = o(n(21)),
						f = o(n(12)),
						h = o(n(9)),
						p = (0, o(n(10)).default)("quill:selection"),
						d = function t(e) {
							var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
							r(this, t), (this.index = e), (this.length = n);
						},
						a =
							(a(y, [
								{
									key: "handleComposition",
									value: function () {
										var e = this;
										this.root.addEventListener("compositionstart", function () {
											e.composing = !0;
										}),
											this.root.addEventListener("compositionend", function () {
												var t;
												(e.composing = !1),
													e.cursor.parent &&
														(t = e.cursor.restore()) &&
														setTimeout(function () {
															e.setNativeRange(t.startNode, t.startOffset, t.endNode, t.endOffset);
														}, 1);
											});
									},
								},
								{
									key: "handleDragging",
									value: function () {
										var t = this;
										this.emitter.listenDOM("mousedown", document.body, function () {
											t.mouseDown = !0;
										}),
											this.emitter.listenDOM("mouseup", document.body, function () {
												(t.mouseDown = !1), t.update(h.default.sources.USER);
											});
									},
								},
								{
									key: "focus",
									value: function () {
										this.hasFocus() || (this.root.focus(), this.setRange(this.savedRange));
									},
								},
								{
									key: "format",
									value: function (t, e) {
										if (null == this.scroll.whitelist || this.scroll.whitelist[t]) {
											this.scroll.update();
											var n = this.getNativeRange();
											if (null != n && n.native.collapsed && !u.default.query(t, u.default.Scope.BLOCK)) {
												if (n.start.node !== this.cursor.textNode) {
													var o,
														r = u.default.find(n.start.node, !1);
													if (null == r) return;
													r instanceof u.default.Leaf ? ((o = r.split(n.start.offset)), r.parent.insertBefore(this.cursor, o)) : r.insertBefore(this.cursor, n.start.node), this.cursor.attach();
												}
												this.cursor.format(t, e), this.scroll.optimize(), this.setNativeRange(this.cursor.textNode, this.cursor.textNode.data.length), this.update();
											}
										}
									},
								},
								{
									key: "getBounds",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
											n = this.scroll.length();
										t = Math.min(t, n - 1);
										var e = Math.min(t + e, n - 1) - t,
											o = void 0,
											r = this.scroll.leaf(t),
											i = s(r, 2),
											n = i[0],
											r = i[1];
										if (null == n) return null;
										if (((i = n.position(r, !0)), (o = (i = s(i, 2))[0]), (r = i[1]), (i = document.createRange()), 0 < e)) {
											i.setStart(o, r);
											var l = this.scroll.leaf(t + e),
												a = s(l, 2),
												n = a[0],
												r = a[1];
											return null == n ? null : ((l = n.position(r, !0)), (o = (a = s(l, 2))[0]), (r = a[1]), i.setEnd(o, r), i.getBoundingClientRect());
										}
										return (l = "left"), (a = void 0), o instanceof Text ? (r < o.data.length ? (i.setStart(o, r), i.setEnd(o, r + 1)) : (i.setStart(o, r - 1), i.setEnd(o, r), (l = "right")), (a = i.getBoundingClientRect())) : ((a = n.domNode.getBoundingClientRect()), 0 < r && (l = "right")), { bottom: a.top + a.height, height: a.height, left: a[l], right: a[l], top: a.top, width: 0 };
									},
								},
								{
									key: "getNativeRange",
									value: function () {
										var t = document.getSelection();
										return null == t || t.rangeCount <= 0 || null == (t = t.getRangeAt(0)) ? null : ((t = this.normalizeNative(t)), p.info("getNativeRange", t), t);
									},
								},
								{
									key: "getRange",
									value: function () {
										var t = this.getNativeRange();
										return null == t ? [null, null] : [this.normalizedToRange(t), t];
									},
								},
								{
									key: "hasFocus",
									value: function () {
										return document.activeElement === this.root;
									},
								},
								{
									key: "normalizedToRange",
									value: function (t) {
										var r = this,
											e = [[t.start.node, t.start.offset]];
										return (
											t.native.collapsed || e.push([t.end.node, t.end.offset]),
											(t = e.map(function (t) {
												var e = (o = s(t, 2))[0],
													n = o[1],
													o = (t = u.default.find(e, !0)).offset(r.scroll);
												return 0 === n ? o : t instanceof u.default.Container ? o + t.length() : o + t.index(e, n);
											})),
											(e = Math.min(Math.max.apply(Math, i(t)), this.scroll.length() - 1)),
											(t = Math.min.apply(Math, [e].concat(i(t)))),
											new d(t, e - t)
										);
									},
								},
								{
									key: "normalizeNative",
									value: function (t) {
										return l(this.root, t.startContainer) && (t.collapsed || l(this.root, t.endContainer))
											? ([(t = { start: { node: t.startContainer, offset: t.startOffset }, end: { node: t.endContainer, offset: t.endOffset }, native: t }).start, t.end].forEach(function (t) {
													for (var e = t.node, n = t.offset; !(e instanceof Text) && 0 < e.childNodes.length; )
														if (e.childNodes.length > n) (e = e.childNodes[n]), (n = 0);
														else {
															if (e.childNodes.length !== n) break;
															n = (e = e.lastChild) instanceof Text ? e.data.length : e.childNodes.length + 1;
														}
													(t.node = e), (t.offset = n);
											  }),
											  t)
											: null;
									},
								},
								{
									key: "rangeToNative",
									value: function (t) {
										var o = this,
											t = t.collapsed ? [t.index] : [t.index, t.index + t.length],
											r = [],
											i = this.scroll.length();
										return (
											t.forEach(function (t, e) {
												t = Math.min(i - 1, t);
												var n = o.scroll.leaf(t),
													n = (t = s(n, 2))[0],
													t = t[1],
													e = n.position(t, 0 !== e),
													n = (e = s(e, 2))[0],
													t = e[1];
												r.push(n, t);
											}),
											(r = r.length < 2 ? r.concat(r) : r)
										);
									},
								},
								{
									key: "scrollIntoView",
									value: function (t) {
										var e,
											n,
											o,
											r,
											i = this.lastRange;
										null == i || (null != (e = this.getBounds(i.index, i.length)) && ((o = this.scroll.length() - 1), (r = this.scroll.line(Math.min(i.index, o))), (r = n = s(r, 1)[0]), 0 < i.length && ((o = this.scroll.line(Math.min(i.index + i.length, o))), (r = s(o, 1)[0])), null != n && null != r && ((r = t.getBoundingClientRect()), e.top < r.top ? (t.scrollTop -= r.top - e.top) : e.bottom > r.bottom && (t.scrollTop += e.bottom - r.bottom))));
									},
								},
								{
									key: "setNativeRange",
									value: function (t, e) {
										var n,
											o,
											r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : t,
											i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : e,
											l = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
										p.info("setNativeRange", t, e, r, i), (null == t || (null != this.root.parentNode && null != t.parentNode && null != r.parentNode)) && null != (n = document.getSelection()) && (null != t ? (this.hasFocus() || this.root.focus(), (null != (o = (this.getNativeRange() || {}).native) && !l && t === o.startContainer && e === o.startOffset && r === o.endContainer && i === o.endOffset) || ("BR" == t.tagName && ((e = [].indexOf.call(t.parentNode.childNodes, t)), (t = t.parentNode)), "BR" == r.tagName && ((i = [].indexOf.call(r.parentNode.childNodes, r)), (r = r.parentNode)), (o = document.createRange()).setStart(t, e), o.setEnd(r, i), n.removeAllRanges(), n.addRange(o))) : (n.removeAllRanges(), this.root.blur(), document.body.focus()));
									},
								},
								{
									key: "setRange",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
											n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : h.default.sources.API;
										"string" == typeof e && ((n = e), (e = !1)), p.info("setRange", t), null != t ? ((t = this.rangeToNative(t)), this.setNativeRange.apply(this, i(t).concat([e]))) : this.setNativeRange(null), this.update(n);
									},
								},
								{
									key: "update",
									value: function () {
										var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : h.default.sources.USER,
											e = this.lastRange,
											n = this.getRange(),
											n = (o = s(n, 2))[0],
											o = o[1];
										(this.lastRange = n), null != this.lastRange && (this.savedRange = this.lastRange), (0, f.default)(e, this.lastRange) || (!this.composing && null != o && o.native.collapsed && o.start.node !== this.cursor.textNode && this.cursor.restore(), (o = [h.default.events.SELECTION_CHANGE, (0, c.default)(this.lastRange), (0, c.default)(e), t]), (e = this.emitter).emit.apply(e, [h.default.events.EDITOR_CHANGE].concat(o)), t !== h.default.sources.SILENT && (t = this.emitter).emit.apply(t, o));
									},
								},
							]),
							y);
					function y(t, e) {
						var i = this;
						r(this, y),
							(this.emitter = e),
							(this.scroll = t),
							(this.composing = !1),
							(this.mouseDown = !1),
							(this.root = this.scroll.domNode),
							(this.cursor = u.default.create("cursor", this)),
							(this.lastRange = this.savedRange = new d(0, 0)),
							this.handleComposition(),
							this.handleDragging(),
							this.emitter.listenDOM("selectionchange", document, function () {
								i.mouseDown || setTimeout(i.update.bind(i, h.default.sources.USER), 1);
							}),
							this.emitter.on(h.default.events.EDITOR_CHANGE, function (t, e) {
								t === h.default.events.TEXT_CHANGE && 0 < e.length() && i.update(h.default.sources.SILENT);
							}),
							this.emitter.on(h.default.events.SCROLL_BEFORE_UPDATE, function () {
								var t;
								!i.hasFocus() ||
									(null != (t = i.getNativeRange()) &&
										t.start.node !== i.cursor.textNode &&
										i.emitter.once(h.default.events.SCROLL_UPDATE, function () {
											try {
												i.setNativeRange(t.start.node, t.start.offset, t.end.node, t.end.offset);
											} catch (t) {}
										}));
							}),
							this.emitter.on(h.default.events.SCROLL_OPTIMIZE, function (t, e) {
								var n, o, r;
								e.range && ((n = (r = e.range).startNode), (o = r.startOffset), (e = r.endNode), (r = r.endOffset), i.setNativeRange(n, o, e, r));
							}),
							this.update(h.default.sources.SILENT);
					}
					function b(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(e.Range = d), (e.default = a);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = o(n(0)),
						i = n(3),
						n = o(i);
					function l() {
						return (
							(function (t) {
								if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (l.__proto__ || Object.getPrototypeOf(l)).apply(this, arguments))
						);
					}
					((r =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(l, r.default.Container),
						l)).allowedChildren = [n.default, i.BlockEmbed, r]),
						(e.default = r);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.ColorStyle = e.ColorClass = e.ColorAttributor = void 0);
					var o = function (t, e, n) {
							return e && l(t.prototype, e), n && l(t, n), t;
						},
						r =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(i, (n = (r = n(0)) && r.__esModule ? r : { default: r }).default.Attributor.Style),
							o(i, [
								{
									key: "value",
									value: function (t) {
										return (t = (function t(e, n, o) {
											null === e && (e = Function.prototype);
											var r = Object.getOwnPropertyDescriptor(e, n);
											return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
										})(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "value", this).call(this, t)).startsWith("rgb(")
											? "#" +
													(t = t.replace(/^[^\d]+/, "").replace(/[^\d]+$/, ""))
														.split(",")
														.map(function (t) {
															return ("00" + parseInt(t).toString(16)).slice(-2);
														})
														.join("")
											: t;
									},
								},
							]),
							i),
						o = new n.default.Attributor.Class("color", "ql-color", { scope: n.default.Scope.INLINE }),
						n = new r("color", "color", { scope: n.default.Scope.INLINE });
					function i() {
						return (
							(function (t) {
								if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
						);
					}
					function l(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(e.ColorAttributor = r), (e.ColorClass = o), (e.ColorStyle = n);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
					}
					function i(n, o) {
						var t = n === N.keys.LEFT ? "prefix" : "suffix",
							e = { key: n, shiftKey: o, altKey: null };
						return (
							r(e, t, /^$/),
							r(e, "handler", function (t) {
								var e = t.index;
								return n === N.keys.RIGHT && (e += t.length + 1), (e = this.quill.getLeaf(e)), !(y(e, 1)[0] instanceof O.default.Embed && (n === N.keys.LEFT ? (o ? this.quill.setSelection(t.index - 1, t.length + 1, w.default.sources.USER) : this.quill.setSelection(t.index - 1, w.default.sources.USER)) : o ? this.quill.setSelection(t.index, t.length + 1, w.default.sources.USER) : this.quill.setSelection(t.index + t.length + 1, w.default.sources.USER), 1));
							}),
							e
						);
					}
					function l(t, e) {
						var n, o, r;
						0 === t.index || this.quill.getLength() <= 1 || ((n = this.quill.getLine(t.index)), (o = y(n, 1)[0]), (r = {}), 0 === e.offset && ((n = this.quill.getLine(t.index - 1)), null != (n = y(n, 1)[0]) && 1 < n.length() && ((n = o.formats()), (o = this.quill.getFormat(t.index - 1, 1)), (r = _.default.attributes.diff(n, o) || {}))), (e = /[\uD800-\uDBFF][\uDC00-\uDFFF]$/.test(e.prefix) ? 2 : 1), this.quill.deleteText(t.index - e, e, w.default.sources.USER), 0 < Object.keys(r).length && this.quill.formatLine(t.index - e, e, r, w.default.sources.USER), this.quill.focus());
					}
					function a(t, e) {
						var n,
							o,
							r,
							i,
							l = /^[\uD800-\uDBFF][\uDC00-\uDFFF]/.test(e.suffix) ? 2 : 1;
						t.index >= this.quill.getLength() - l || ((r = {}), (i = 0), (n = this.quill.getLine(t.index)), (o = y(n, 1)[0]), e.offset >= o.length() - 1 && ((n = this.quill.getLine(t.index + 1)), (e = y(n, 1)[0]) && ((n = o.formats()), (o = this.quill.getFormat(t.index, 1)), (r = _.default.attributes.diff(n, o) || {}), (i = e.length()))), this.quill.deleteText(t.index, l, w.default.sources.USER), 0 < Object.keys(r).length && this.quill.formatLine(t.index + i - 1, l, r, w.default.sources.USER));
					}
					function s(t) {
						var e,
							n = this.quill.getLines(t),
							o = {};
						1 < n.length && ((e = n[0].formats()), (n = n[n.length - 1].formats()), (o = _.default.attributes.diff(n, e) || {})), this.quill.deleteText(t, w.default.sources.USER), 0 < Object.keys(o).length && this.quill.formatLine(t.index, 1, o, w.default.sources.USER), this.quill.setSelection(t.index, w.default.sources.SILENT), this.quill.focus();
					}
					function u(t, n) {
						var e = this;
						0 < t.length && this.quill.scroll.deleteAt(t.index, t.length);
						var o = Object.keys(n.format).reduce(function (t, e) {
							return O.default.query(e, O.default.Scope.BLOCK) && !Array.isArray(n.format[e]) && (t[e] = n.format[e]), t;
						}, {});
						this.quill.insertText(t.index, "\n", o, w.default.sources.USER),
							this.quill.setSelection(t.index + 1, w.default.sources.SILENT),
							this.quill.focus(),
							Object.keys(n.format).forEach(function (t) {
								null == o[t] && (Array.isArray(n.format[t]) || ("link" !== t && e.quill.format(t, n.format[t], w.default.sources.USER)));
							});
					}
					function c(s) {
						return {
							key: N.keys.TAB,
							shiftKey: !s,
							format: { "code-block": !0 },
							handler: function (t) {
								var n,
									o = O.default.query("code-block"),
									r = t.index,
									i = t.length,
									t = this.quill.scroll.descendant(o, r),
									l = (t = y(t, 2))[0],
									a = t[1];
								null != l &&
									((t = this.quill.getIndex(l)),
									(n = l.newlineIndex(a, !0) + 1),
									(t = l.newlineIndex(t + a + i)),
									(t = l.domNode.textContent.slice(n, t).split("\n")),
									(a = 0),
									t.forEach(function (t, e) {
										s ? (l.insertAt(n + a, o.TAB), (a += o.TAB.length), 0 === e ? (r += o.TAB.length) : (i += o.TAB.length)) : t.startsWith(o.TAB) && (l.deleteAt(n + a, o.TAB.length), (a -= o.TAB.length), 0 === e ? (r -= o.TAB.length) : (i -= o.TAB.length)), (a += t.length + 1);
									}),
									this.quill.update(w.default.sources.USER),
									this.quill.setSelection(r, i, w.default.sources.SILENT));
							},
						};
					}
					function f(n) {
						return {
							key: n[0].toUpperCase(),
							shortKey: !0,
							handler: function (t, e) {
								this.quill.format(n, !e.format[n], w.default.sources.USER);
							},
						};
					}
					function h(t) {
						if ("string" == typeof t || "number" == typeof t) return h({ key: t });
						if ("string" == typeof (t = "object" === (void 0 === t ? "undefined" : d(t)) ? (0, b.default)(t, !1) : t).key)
							if (null != N.keys[t.key.toUpperCase()]) t.key = N.keys[t.key.toUpperCase()];
							else {
								if (1 !== t.key.length) return null;
								t.key = t.key.toUpperCase().charCodeAt(0);
							}
						return t.shortKey && ((t[E] = t.shortKey), delete t.shortKey), t;
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.SHORTKEY = e.default = void 0);
					function p(t, e, n) {
						return e && A(t.prototype, e), n && A(t, n), t;
					}
					var d =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								  },
						y = function (t, e) {
							if (Array.isArray(t)) return t;
							if (Symbol.iterator in Object(t))
								return (function (t, e) {
									var n = [],
										o = !0,
										r = !1,
										i = void 0;
									try {
										for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
									} catch (t) {
										(r = !0), (i = t);
									} finally {
										try {
											!o && a.return && a.return();
										} finally {
											if (r) throw i;
										}
									}
									return n;
								})(t, e);
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						},
						b = o(n(21)),
						v = o(n(12)),
						g = o(n(2)),
						m = o(n(4)),
						_ = o(n(20)),
						O = o(n(0)),
						w = o(n(6)),
						x = o(n(10)),
						n = o(n(7)),
						k = (0, x.default)("quill:keyboard"),
						E = /Mac/i.test(navigator.platform) ? "metaKey" : "ctrlKey",
						N =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(j, n.default),
							p(j, null, [
								{
									key: "match",
									value: function (e, n) {
										return (
											(n = h(n)),
											!["altKey", "ctrlKey", "metaKey", "shiftKey"].some(function (t) {
												return !!n[t] !== e[t] && null !== n[t];
											}) && n.key === (e.which || e.keyCode)
										);
									},
								},
							]),
							p(j, [
								{
									key: "addBinding",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
											n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
											t = h(t);
										if (null == t || null == t.key) return k.warn("Attempted to add invalid keyboard binding", t);
										"function" == typeof e && (e = { handler: e }), "function" == typeof n && (n = { handler: n }), (t = (0, g.default)(t, e, n)), (this.bindings[t.key] = this.bindings[t.key] || []), this.bindings[t.key].push(t);
									},
								},
								{
									key: "listen",
									value: function () {
										var c = this;
										this.quill.root.addEventListener("keydown", function (e) {
											var t, n, o, r, i, l, a, s, u;
											e.defaultPrevented ||
												((s = e.which || e.keyCode),
												0 ===
													(t = (c.bindings[s] || []).filter(function (t) {
														return j.match(e, t);
													})).length ||
													(null != (n = c.quill.getSelection()) &&
														c.quill.hasFocus() &&
														((i = c.quill.getLine(n.index)),
														(o = (a = y(i, 2))[0]),
														(r = a[1]),
														(l = c.quill.getLeaf(n.index)),
														(i = (s = y(l, 2))[0]),
														(a = s[1]),
														(l = 0 === n.length ? [i, a] : c.quill.getLeaf(n.index + n.length)),
														(l = (s = y(l, 2))[0]),
														(s = s[1]),
														(a = i instanceof O.default.Text ? i.value().slice(0, a) : ""),
														(s = l instanceof O.default.Text ? l.value().slice(s) : ""),
														(u = { collapsed: 0 === n.length, empty: 0 === n.length && o.length() <= 1, format: c.quill.getFormat(n), offset: r, prefix: a, suffix: s }),
														t.some(function (e) {
															if (null != e.collapsed && e.collapsed !== u.collapsed) return !1;
															if (null != e.empty && e.empty !== u.empty) return !1;
															if (null != e.offset && e.offset !== u.offset) return !1;
															if (Array.isArray(e.format)) {
																if (
																	e.format.every(function (t) {
																		return null == u.format[t];
																	})
																)
																	return !1;
															} else if (
																"object" === d(e.format) &&
																!Object.keys(e.format).every(function (t) {
																	return !0 === e.format[t] ? null != u.format[t] : !1 === e.format[t] ? null == u.format[t] : (0, v.default)(e.format[t], u.format[t]);
																})
															)
																return !1;
															return !((null != e.prefix && !e.prefix.test(u.prefix)) || (null != e.suffix && !e.suffix.test(u.suffix)) || !0 === e.handler.call(c, n, u));
														}) && e.preventDefault())));
										});
									},
								},
							]),
							j);
					function j(e, t) {
						!(function (t) {
							if (!(t instanceof j)) throw new TypeError("Cannot call a class as a function");
						})(this);
						var n = (function (t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
						})(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this, e, t));
						return (
							(n.bindings = {}),
							Object.keys(n.options.bindings).forEach(function (t) {
								("list autofill" !== t || null == e.scroll.whitelist || e.scroll.whitelist.list) && n.options.bindings[t] && n.addBinding(n.options.bindings[t]);
							}),
							n.addBinding({ key: j.keys.ENTER, shiftKey: null }, u),
							n.addBinding({ key: j.keys.ENTER, metaKey: null, ctrlKey: null, altKey: null }, function () {}),
							/Firefox/i.test(navigator.userAgent) ? (n.addBinding({ key: j.keys.BACKSPACE }, { collapsed: !0 }, l), n.addBinding({ key: j.keys.DELETE }, { collapsed: !0 }, a)) : (n.addBinding({ key: j.keys.BACKSPACE }, { collapsed: !0, prefix: /^.?$/ }, l), n.addBinding({ key: j.keys.DELETE }, { collapsed: !0, suffix: /^.?$/ }, a)),
							n.addBinding({ key: j.keys.BACKSPACE }, { collapsed: !1 }, s),
							n.addBinding({ key: j.keys.DELETE }, { collapsed: !1 }, s),
							n.addBinding({ key: j.keys.BACKSPACE, altKey: null, ctrlKey: null, metaKey: null, shiftKey: null }, { collapsed: !0, offset: 0 }, l),
							n.listen(),
							n
						);
					}
					function A(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(N.keys = { BACKSPACE: 8, TAB: 9, ENTER: 13, ESCAPE: 27, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 }),
						(N.DEFAULTS = {
							bindings: {
								bold: f("bold"),
								italic: f("italic"),
								underline: f("underline"),
								indent: {
									key: N.keys.TAB,
									format: ["blockquote", "indent", "list"],
									handler: function (t, e) {
										if (e.collapsed && 0 !== e.offset) return !0;
										this.quill.format("indent", "+1", w.default.sources.USER);
									},
								},
								outdent: {
									key: N.keys.TAB,
									shiftKey: !0,
									format: ["blockquote", "indent", "list"],
									handler: function (t, e) {
										if (e.collapsed && 0 !== e.offset) return !0;
										this.quill.format("indent", "-1", w.default.sources.USER);
									},
								},
								"outdent backspace": {
									key: N.keys.BACKSPACE,
									collapsed: !0,
									shiftKey: null,
									metaKey: null,
									ctrlKey: null,
									altKey: null,
									format: ["indent", "list"],
									offset: 0,
									handler: function (t, e) {
										null != e.format.indent ? this.quill.format("indent", "-1", w.default.sources.USER) : null != e.format.list && this.quill.format("list", !1, w.default.sources.USER);
									},
								},
								"indent code-block": c(!0),
								"outdent code-block": c(!1),
								"remove tab": {
									key: N.keys.TAB,
									shiftKey: !0,
									collapsed: !0,
									prefix: /\t$/,
									handler: function (t) {
										this.quill.deleteText(t.index - 1, 1, w.default.sources.USER);
									},
								},
								tab: {
									key: N.keys.TAB,
									handler: function (t) {
										this.quill.history.cutoff();
										var e = new m.default().retain(t.index).delete(t.length).insert("\t");
										this.quill.updateContents(e, w.default.sources.USER), this.quill.history.cutoff(), this.quill.setSelection(t.index + 1, w.default.sources.SILENT);
									},
								},
								"list empty enter": {
									key: N.keys.ENTER,
									collapsed: !0,
									format: ["list"],
									empty: !0,
									handler: function (t, e) {
										this.quill.format("list", !1, w.default.sources.USER), e.format.indent && this.quill.format("indent", !1, w.default.sources.USER);
									},
								},
								"checklist enter": {
									key: N.keys.ENTER,
									collapsed: !0,
									format: { list: "checked" },
									handler: function (t) {
										var e = this.quill.getLine(t.index),
											n = (o = y(e, 2))[0],
											e = o[1],
											o = (0, g.default)({}, n.formats(), { list: "checked" }),
											e = new m.default()
												.retain(t.index)
												.insert("\n", o)
												.retain(n.length() - e - 1)
												.retain(1, { list: "unchecked" });
										this.quill.updateContents(e, w.default.sources.USER), this.quill.setSelection(t.index + 1, w.default.sources.SILENT), this.quill.scrollIntoView();
									},
								},
								"header enter": {
									key: N.keys.ENTER,
									collapsed: !0,
									format: ["header"],
									suffix: /^$/,
									handler: function (t, e) {
										var n = this.quill.getLine(t.index),
											n = (o = y(n, 2))[0],
											o = o[1],
											o = new m.default()
												.retain(t.index)
												.insert("\n", e.format)
												.retain(n.length() - o - 1)
												.retain(1, { header: null });
										this.quill.updateContents(o, w.default.sources.USER), this.quill.setSelection(t.index + 1, w.default.sources.SILENT), this.quill.scrollIntoView();
									},
								},
								"list autofill": {
									key: " ",
									collapsed: !0,
									format: { list: !1 },
									prefix: /^\s*?(\d+\.|-|\*|\[ ?\]|\[x\])$/,
									handler: function (t, e) {
										var n = e.prefix.length,
											o = this.quill.getLine(t.index),
											r = y(o, 2),
											o = r[0];
										if (n < (r = r[1])) return !0;
										var i = void 0;
										switch (e.prefix.trim()) {
											case "[]":
											case "[ ]":
												i = "unchecked";
												break;
											case "[x]":
												i = "checked";
												break;
											case "-":
											case "*":
												i = "bullet";
												break;
											default:
												i = "ordered";
										}
										this.quill.insertText(t.index, " ", w.default.sources.USER),
											this.quill.history.cutoff(),
											(r = new m.default()
												.retain(t.index - r)
												.delete(n + 1)
												.retain(o.length() - 2 - r)
												.retain(1, { list: i })),
											this.quill.updateContents(r, w.default.sources.USER),
											this.quill.history.cutoff(),
											this.quill.setSelection(t.index - n, w.default.sources.SILENT);
									},
								},
								"code exit": {
									key: N.keys.ENTER,
									collapsed: !0,
									format: ["code-block"],
									prefix: /\n\n$/,
									suffix: /^\s+$/,
									handler: function (t) {
										var e = this.quill.getLine(t.index),
											e = (n = y(e, 2))[0],
											n = n[1],
											n = new m.default()
												.retain(t.index + e.length() - n - 2)
												.retain(1, { "code-block": null })
												.delete(1);
										this.quill.updateContents(n, w.default.sources.USER);
									},
								},
								"embed left": i(N.keys.LEFT, !1),
								"embed left shift": i(N.keys.LEFT, !0),
								"embed right": i(N.keys.RIGHT, !1),
								"embed right shift": i(N.keys.RIGHT, !0),
							},
						}),
						(e.default = N),
						(e.SHORTKEY = E);
				},
				function (t, e, n) {
					"use strict";
					t.exports = { align: { "": n(75), center: n(76), right: n(77), justify: n(78) }, background: n(79), blockquote: n(80), bold: n(81), clean: n(82), code: n(40), "code-block": n(40), color: n(83), direction: { "": n(84), rtl: n(85) }, float: { center: n(86), full: n(87), left: n(88), right: n(89) }, formula: n(90), header: { 1: n(91), 2: n(92) }, italic: n(93), image: n(94), indent: { "+1": n(95), "-1": n(96) }, link: n(97), list: { ordered: n(98), bullet: n(99), check: n(100) }, script: { sub: n(101), super: n(102) }, strike: n(103), underline: n(104), video: n(105) };
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = n(1),
						n =
							(Object.defineProperty(o.prototype, "statics", {
								get: function () {
									return this.constructor;
								},
								enumerable: !0,
								configurable: !0,
							}),
							(o.create = function (t) {
								if (null == this.tagName) throw new r.ParchmentError("Blot definition missing tagName");
								return (t = Array.isArray(this.tagName) ? ("string" == typeof t && ((t = t.toUpperCase()), parseInt(t).toString() === t && (t = parseInt(t))), "number" == typeof t ? document.createElement(this.tagName[t - 1]) : -1 < this.tagName.indexOf(t) ? document.createElement(t) : document.createElement(this.tagName[0])) : document.createElement(this.tagName)), this.className && t.classList.add(this.className), t;
							}),
							(o.prototype.attach = function () {
								null != this.parent && (this.scroll = this.parent.scroll);
							}),
							(o.prototype.clone = function () {
								var t = this.domNode.cloneNode(!1);
								return r.create(t);
							}),
							(o.prototype.detach = function () {
								null != this.parent && this.parent.removeChild(this), delete this.domNode[r.DATA_KEY];
							}),
							(o.prototype.deleteAt = function (t, e) {
								this.isolate(t, e).remove();
							}),
							(o.prototype.formatAt = function (t, e, n, o) {
								(t = this.isolate(t, e)), null != r.query(n, r.Scope.BLOT) && o ? t.wrap(n, o) : null != r.query(n, r.Scope.ATTRIBUTE) && ((e = r.create(this.statics.scope)), t.wrap(e), e.format(n, o));
							}),
							(o.prototype.insertAt = function (t, e, n) {
								(n = null == n ? r.create("text", e) : r.create(e, n)), (t = this.split(t)), this.parent.insertBefore(n, t);
							}),
							(o.prototype.insertInto = function (t, e) {
								void 0 === e && (e = null), null != this.parent && this.parent.children.remove(this);
								var n = null;
								t.children.insertBefore(this, e), null != e && (n = e.domNode), (this.domNode.parentNode == t.domNode && this.domNode.nextSibling == n) || t.domNode.insertBefore(this.domNode, n), (this.parent = t), this.attach();
							}),
							(o.prototype.isolate = function (t, e) {
								return (t = this.split(t)).split(e), t;
							}),
							(o.prototype.length = function () {
								return 1;
							}),
							(o.prototype.offset = function (t) {
								return void 0 === t && (t = this.parent), null == this.parent || this == t ? 0 : this.parent.children.offset(this) + this.parent.offset(t);
							}),
							(o.prototype.optimize = function (t) {
								null != this.domNode[r.DATA_KEY] && delete this.domNode[r.DATA_KEY].mutations;
							}),
							(o.prototype.remove = function () {
								null != this.domNode.parentNode && this.domNode.parentNode.removeChild(this.domNode), this.detach();
							}),
							(o.prototype.replace = function (t) {
								null != t.parent && (t.parent.insertBefore(this, t.next), t.remove());
							}),
							(o.prototype.replaceWith = function (t, e) {
								return (t = "string" == typeof t ? r.create(t, e) : t).replace(this), t;
							}),
							(o.prototype.split = function (t, e) {
								return 0 === t ? this : this.next;
							}),
							(o.prototype.update = function (t, e) {}),
							(o.prototype.wrap = function (t, e) {
								return (t = "string" == typeof t ? r.create(t, e) : t), null != this.parent && this.parent.insertBefore(t, this.next), t.appendChild(this), t;
							}),
							(o.blotName = "abstract"),
							o);
					function o(t) {
						(this.domNode = t), (this.domNode[r.DATA_KEY] = { blot: this });
					}
					e.default = n;
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = n(11),
						i = n(29),
						l = n(30),
						a = n(1),
						n =
							((o.prototype.attribute = function (t, e) {
								e ? t.add(this.domNode, e) && (null != t.value(this.domNode) ? (this.attributes[t.attrName] = t) : delete this.attributes[t.attrName]) : (t.remove(this.domNode), delete this.attributes[t.attrName]);
							}),
							(o.prototype.build = function () {
								var e = this;
								this.attributes = {};
								var t = r.default.keys(this.domNode),
									n = i.default.keys(this.domNode),
									o = l.default.keys(this.domNode);
								t.concat(n)
									.concat(o)
									.forEach(function (t) {
										(t = a.query(t, a.Scope.ATTRIBUTE)) instanceof r.default && (e.attributes[t.attrName] = t);
									});
							}),
							(o.prototype.copy = function (n) {
								var o = this;
								Object.keys(this.attributes).forEach(function (t) {
									var e = o.attributes[t].value(o.domNode);
									n.format(t, e);
								});
							}),
							(o.prototype.move = function (t) {
								var e = this;
								this.copy(t),
									Object.keys(this.attributes).forEach(function (t) {
										e.attributes[t].remove(e.domNode);
									}),
									(this.attributes = {});
							}),
							(o.prototype.values = function () {
								var n = this;
								return Object.keys(this.attributes).reduce(function (t, e) {
									return (t[e] = n.attributes[e].value(n.domNode)), t;
								}, {});
							}),
							o);
					function o(t) {
						(this.attributes = {}), (this.domNode = t), this.build();
					}
					e.default = n;
				},
				function (t, e, n) {
					"use strict";
					function o(t, e) {
						return (t.getAttribute("class") || "").split(/\s+/).filter(function (t) {
							return 0 === t.indexOf(e + "-");
						});
					}
					var r,
						i =
							(this && this.__extends) ||
							((r =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var l,
						n = n(11),
						i =
							(i(a, (l = n.default)),
							(a.keys = function (t) {
								return (t.getAttribute("class") || "").split(/\s+/).map(function (t) {
									return t.split("-").slice(0, -1).join("-");
								});
							}),
							(a.prototype.add = function (t, e) {
								return !!this.canAdd(t, e) && (this.remove(t), t.classList.add(this.keyName + "-" + e), !0);
							}),
							(a.prototype.remove = function (e) {
								o(e, this.keyName).forEach(function (t) {
									e.classList.remove(t);
								}),
									0 === e.classList.length && e.removeAttribute("class");
							}),
							(a.prototype.value = function (t) {
								var e = (o(t, this.keyName)[0] || "").slice(this.keyName.length + 1);
								return this.canAdd(t, e) ? e : "";
							}),
							a);
					function a() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					e.default = i;
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						var e = t.split("-"),
							t = e
								.slice(1)
								.map(function (t) {
									return t[0].toUpperCase() + t.slice(1);
								})
								.join("");
						return e[0] + t;
					}
					var r,
						i =
							(this && this.__extends) ||
							((r =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var l,
						n = n(11),
						i =
							(i(a, (l = n.default)),
							(a.keys = function (t) {
								return (t.getAttribute("style") || "").split(";").map(function (t) {
									return t.split(":")[0].trim();
								});
							}),
							(a.prototype.add = function (t, e) {
								return !!this.canAdd(t, e) && ((t.style[o(this.keyName)] = e), !0);
							}),
							(a.prototype.remove = function (t) {
								(t.style[o(this.keyName)] = ""), t.getAttribute("style") || t.removeAttribute("style");
							}),
							(a.prototype.value = function (t) {
								var e = t.style[o(this.keyName)];
								return this.canAdd(t, e) ? e : "";
							}),
							a);
					function a() {
						return (null !== l && l.apply(this, arguments)) || this;
					}
					e.default = i;
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i = function (t, e, n) {
							return e && u(t.prototype, e), n && u(t, n), t;
						},
						l = o(n(0)),
						a = o(n(8));
					function s(t, e) {
						return (
							(function (t) {
								if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
							})(this),
							((t = (function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t))).selection = e),
							(t.textNode = document.createTextNode(s.CONTENTS)),
							t.domNode.appendChild(t.textNode),
							(t._length = 0),
							t
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((i =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(s, l.default.Embed),
						i(s, null, [{ key: "value", value: function () {} }]),
						i(s, [
							{
								key: "detach",
								value: function () {
									null != this.parent && this.parent.removeChild(this);
								},
							},
							{
								key: "format",
								value: function (t, e) {
									if (0 !== this._length) return r(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "format", this).call(this, t, e);
									for (var n = this, o = 0; null != n && n.statics.scope !== l.default.Scope.BLOCK_BLOT; ) (o += n.offset(n.parent)), (n = n.parent);
									null != n && ((this._length = s.CONTENTS.length), n.optimize(), n.formatAt(o, s.CONTENTS.length, t, e), (this._length = 0));
								},
							},
							{
								key: "index",
								value: function (t, e) {
									return t === this.textNode ? 0 : r(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "index", this).call(this, t, e);
								},
							},
							{
								key: "length",
								value: function () {
									return this._length;
								},
							},
							{
								key: "position",
								value: function () {
									return [this.textNode, this.textNode.data.length];
								},
							},
							{
								key: "remove",
								value: function () {
									r(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "remove", this).call(this), (this.parent = null);
								},
							},
							{
								key: "restore",
								value: function () {
									if (!this.selection.composing && null != this.parent) {
										var t = this.textNode,
											e = this.selection.getNativeRange(),
											n = void 0,
											o = void 0,
											r = void 0;
										for (null != e && e.start.node === t && e.end.node === t && ((e = [t, e.start.offset, e.end.offset]), (n = e[0]), (o = e[1]), (r = e[2])); null != this.domNode.lastChild && this.domNode.lastChild !== this.textNode; ) this.domNode.parentNode.insertBefore(this.domNode.lastChild, this.domNode);
										if ((this.textNode.data !== s.CONTENTS && ((i = this.textNode.data.split(s.CONTENTS).join("")), this.next instanceof a.default ? ((n = this.next.domNode), this.next.insertAt(0, i), (this.textNode.data = s.CONTENTS)) : ((this.textNode.data = i), this.parent.insertBefore(l.default.create(this.textNode), this), (this.textNode = document.createTextNode(s.CONTENTS)), this.domNode.appendChild(this.textNode))), this.remove(), null != o)) {
											var i = [o, r].map(function (t) {
													return Math.max(0, Math.min(n.data.length, t - 1));
												}),
												o = (i = (function (t, e) {
													if (Array.isArray(t)) return t;
													if (Symbol.iterator in Object(t))
														return (function (t, e) {
															var n = [],
																o = !0,
																r = !1,
																i = void 0;
															try {
																for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
															} catch (t) {
																(r = !0), (i = t);
															} finally {
																try {
																	!o && a.return && a.return();
																} finally {
																	if (r) throw i;
																}
															}
															return n;
														})(t, e);
													throw new TypeError("Invalid attempt to destructure non-iterable instance");
												})(i, 2))[0],
												r = i[1];
											return { startNode: n, startOffset: o, endNode: n, endOffset: r };
										}
									}
								},
							},
							{
								key: "update",
								value: function (t, e) {
									var n = this;
									!t.some(function (t) {
										return "characterData" === t.type && t.target === n.textNode;
									}) ||
										((t = this.restore()) && (e.range = t));
								},
							},
							{
								key: "value",
								value: function () {
									return "";
								},
							},
						]),
						s)).blotName = "cursor"),
						(i.className = "ql-cursor"),
						(i.tagName = "span"),
						(i.CONTENTS = "\ufeff"),
						(e.default = i);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o =
						(i(r.prototype, [
							{
								key: "init",
								value: function () {
									var e = this;
									Object.keys(this.options.modules).forEach(function (t) {
										null == e.modules[t] && e.addModule(t);
									});
								},
							},
							{
								key: "addModule",
								value: function (t) {
									var e = this.quill.constructor.import("modules/" + t);
									return (this.modules[t] = new e(this.quill, this.options.modules[t] || {})), this.modules[t];
								},
							},
						]),
						r);
					function r(t, e) {
						(function (t) {
							if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
						})(this),
							(this.quill = t),
							(this.options = e),
							(this.modules = {});
					}
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(o.DEFAULTS = { modules: {} }), (o.themes = { default: o }), (e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = function (t, e, n) {
							return e && u(t.prototype, e), n && u(t, n), t;
						},
						i = o(n(0)),
						l = o(n(8)),
						a = "\ufeff",
						r =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(s, i.default.Embed),
							r(s, [
								{
									key: "index",
									value: function (t, e) {
										return t === this.leftGuard
											? 0
											: t === this.rightGuard
											? 1
											: (function t(e, n, o) {
													null === e && (e = Function.prototype);
													var r = Object.getOwnPropertyDescriptor(e, n);
													return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
											  })(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "index", this).call(this, t, e);
									},
								},
								{
									key: "restore",
									value: function (t) {
										var e,
											n = void 0,
											o = void 0,
											r = t.data.split(a).join("");
										return t === this.leftGuard ? (n = this.prev instanceof l.default ? ((e = this.prev.length()), this.prev.insertAt(e, r), { startNode: this.prev.domNode, startOffset: e + r.length }) : ((o = document.createTextNode(r)), this.parent.insertBefore(i.default.create(o), this), { startNode: o, startOffset: r.length })) : t === this.rightGuard && (n = this.next instanceof l.default ? (this.next.insertAt(0, r), { startNode: this.next.domNode, startOffset: r.length }) : ((o = document.createTextNode(r)), this.parent.insertBefore(i.default.create(o), this.next), { startNode: o, startOffset: r.length })), (t.data = a), n;
									},
								},
								{
									key: "update",
									value: function (t, e) {
										var n = this;
										t.forEach(function (t) {
											"characterData" !== t.type || (t.target !== n.leftGuard && t.target !== n.rightGuard) || ((t = n.restore(t.target)) && (e.range = t));
										});
									},
								},
							]),
							s);
					function s(t) {
						!(function (t) {
							if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
						})(this);
						var e = (function (t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
						})(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t));
						return (
							(e.contentNode = document.createElement("span")),
							e.contentNode.setAttribute("contenteditable", !1),
							[].slice.call(e.domNode.childNodes).forEach(function (t) {
								e.contentNode.appendChild(t);
							}),
							(e.leftGuard = document.createTextNode(a)),
							(e.rightGuard = document.createTextNode(a)),
							e.domNode.appendChild(e.leftGuard),
							e.domNode.appendChild(e.contentNode),
							e.domNode.appendChild(e.rightGuard),
							e
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.AlignStyle = e.AlignClass = e.AlignAttribute = void 0);
					var o = (i = n(0)) && i.__esModule ? i : { default: i },
						r = { scope: o.default.Scope.BLOCK, whitelist: ["right", "center", "justify"] },
						n = new o.default.Attributor.Attribute("align", "align", r),
						i = new o.default.Attributor.Class("align", "ql-align", r),
						r = new o.default.Attributor.Style("align", "text-align", r);
					(e.AlignAttribute = n), (e.AlignClass = i), (e.AlignStyle = r);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.BackgroundStyle = e.BackgroundClass = void 0);
					var o = (r = n(0)) && r.__esModule ? r : { default: r },
						r = n(24),
						n = new o.default.Attributor.Class("background", "ql-bg", { scope: o.default.Scope.INLINE }),
						o = new r.ColorAttributor("background", "background-color", { scope: o.default.Scope.INLINE });
					(e.BackgroundClass = n), (e.BackgroundStyle = o);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.DirectionStyle = e.DirectionClass = e.DirectionAttribute = void 0);
					var o = (i = n(0)) && i.__esModule ? i : { default: i },
						r = { scope: o.default.Scope.BLOCK, whitelist: ["rtl"] },
						n = new o.default.Attributor.Attribute("direction", "dir", r),
						i = new o.default.Attributor.Class("direction", "ql-direction", r),
						r = new o.default.Attributor.Style("direction", "direction", r);
					(e.DirectionAttribute = n), (e.DirectionClass = i), (e.DirectionStyle = r);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.FontClass = e.FontStyle = void 0);
					var o,
						r,
						i,
						l = (a = n(0)) && a.__esModule ? a : { default: a },
						n = { scope: l.default.Scope.INLINE, whitelist: ["serif", "monospace"] },
						a = new l.default.Attributor.Class("font", "ql-font", n),
						n =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(s, l.default.Attributor.Style),
							(o = s),
							(r = [
								{
									key: "value",
									value: function (t) {
										return (function t(e, n, o) {
											null === e && (e = Function.prototype);
											var r = Object.getOwnPropertyDescriptor(e, n);
											return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
										})(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "value", this)
											.call(this, t)
											.replace(/["']/g, "");
									},
								},
							]) && u(o.prototype, r),
							i && u(o, i),
							new s("font", "font-family", n));
					function s() {
						return (
							(function (t) {
								if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(e.FontStyle = n), (e.FontClass = a);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.SizeStyle = e.SizeClass = void 0);
					var o = new (n = (o = n(0)) && o.__esModule ? o : { default: o }).default.Attributor.Class("size", "ql-size", { scope: n.default.Scope.INLINE, whitelist: ["small", "large", "huge"] }),
						n = new n.default.Attributor.Style("size", "font-size", { scope: n.default.Scope.INLINE, whitelist: ["10px", "18px", "32px"] });
					(e.SizeClass = o), (e.SizeStyle = n);
				},
				function (t, e, n) {
					"use strict";
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
						return e && l(t.prototype, e), n && l(t, n), t;
					};
					function i() {
						return (
							(function (t) {
								if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (i.__proto__ || Object.getPrototypeOf(i)).apply(this, arguments))
						);
					}
					function l(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((o =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(i, ((n = n(5)) && n.__esModule ? n : { default: n }).default),
						o(
							i,
							[
								{
									key: "optimize",
									value: function (t) {
										r(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "optimize", this).call(this, t), this.domNode.tagName !== this.statics.tagName[0] && this.replaceWith(this.statics.blotName);
									},
								},
							],
							[
								{
									key: "create",
									value: function () {
										return r(i.__proto__ || Object.getPrototypeOf(i), "create", this).call(this);
									},
								},
								{
									key: "formats",
									value: function () {
										return !0;
									},
								},
							]
						),
						i)).blotName = "bold"),
						(o.tagName = ["STRONG", "B"]),
						(e.default = o);
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <polyline class="ql-even ql-stroke" points="5 7 3 9 5 11"></polyline> <polyline class="ql-even ql-stroke" points="13 7 15 9 13 11"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>';
				},
				function (t, e, n) {
					"use strict";
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
							return e && l(t.prototype, e), n && l(t, n), t;
						},
						o =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(i, ((n = n(16)) && n.__esModule ? n : { default: n }).default),
							o(i, [
								{
									key: "buildItem",
									value: function (t) {
										var e = r(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "buildItem", this).call(this, t);
										return (e.style.backgroundColor = t.getAttribute("value") || ""), e;
									},
								},
								{
									key: "selectItem",
									value: function (t, e) {
										r(i.prototype.__proto__ || Object.getPrototypeOf(i.prototype), "selectItem", this).call(this, t, e), (e = this.label.querySelector(".ql-color-label")), (t = (t && t.getAttribute("data-value")) || ""), e && ("line" === e.tagName ? (e.style.stroke = t) : (e.style.fill = t));
									},
								},
							]),
							i);
					function i(t, e) {
						return (
							(function (t) {
								if (!(t instanceof i)) throw new TypeError("Cannot call a class as a function");
							})(this),
							((t = (function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, t))).label.innerHTML = e),
							t.container.classList.add("ql-color-picker"),
							[].slice.call(t.container.querySelectorAll(".ql-picker-item"), 0, 7).forEach(function (t) {
								t.classList.add("ql-primary");
							}),
							t
						);
					}
					function l(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.default = o;
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t;
						},
						o =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(r, ((n = n(16)) && n.__esModule ? n : { default: n }).default),
							o(r, [
								{
									key: "selectItem",
									value: function (t, e) {
										(function t(e, n, o) {
											null === e && (e = Function.prototype);
											var r = Object.getOwnPropertyDescriptor(e, n);
											return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
										})(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "selectItem", this).call(this, t, e),
											(t = t || this.defaultItem),
											(this.label.innerHTML = t.innerHTML);
									},
								},
							]),
							r);
					function r(t, e) {
						return (
							(function (t) {
								if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(t = (function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, t))).container.classList.add("ql-icon-picker"),
							[].forEach.call(t.container.querySelectorAll(".ql-picker-item"), function (t) {
								t.innerHTML = e[t.getAttribute("data-value") || ""];
							}),
							(t.defaultItem = t.container.querySelector(".ql-selected")),
							t.selectItem(t.defaultItem),
							t
						);
					}
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.default = o;
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o =
						(i(r.prototype, [
							{
								key: "hide",
								value: function () {
									this.root.classList.add("ql-hidden");
								},
							},
							{
								key: "position",
								value: function (t) {
									var e = t.left + t.width / 2 - this.root.offsetWidth / 2,
										n = t.bottom + this.quill.root.scrollTop;
									(this.root.style.left = e + "px"), (this.root.style.top = n + "px"), this.root.classList.remove("ql-flip");
									var o = this.boundsContainer.getBoundingClientRect(),
										r = this.root.getBoundingClientRect(),
										i = 0;
									return r.right > o.right && ((i = o.right - r.right), (this.root.style.left = e + i + "px")), r.left < o.left && ((i = o.left - r.left), (this.root.style.left = e + i + "px")), r.bottom > o.bottom && ((r = r.bottom - r.top), (r = t.bottom - t.top + r), (this.root.style.top = n - r + "px"), this.root.classList.add("ql-flip")), i;
								},
							},
							{
								key: "show",
								value: function () {
									this.root.classList.remove("ql-editing"), this.root.classList.remove("ql-hidden");
								},
							},
						]),
						r);
					function r(t, e) {
						var n = this;
						(function (t) {
							if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
						})(this),
							(this.quill = t),
							(this.boundsContainer = e || document.body),
							(this.root = t.addContainer("ql-tooltip")),
							(this.root.innerHTML = this.constructor.TEMPLATE),
							this.quill.root === this.quill.scrollingContainer &&
								this.quill.root.addEventListener("scroll", function () {
									n.root.style.marginTop = -1 * n.quill.root.scrollTop + "px";
								}),
							this.hide();
					}
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.default = o;
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					function a(n, t, e) {
						var o = 2 < arguments.length && void 0 !== e && e;
						t.forEach(function (t) {
							var e = document.createElement("option");
							t === o ? e.setAttribute("selected", "selected") : e.setAttribute("value", t), n.appendChild(e);
						});
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.BaseTooltip = void 0);
					var s = function (t, e, n) {
							return e && k(t.prototype, e), n && k(t, n), t;
						},
						u = o(n(2)),
						c = o(n(4)),
						f = o(n(9)),
						h = o(n(25)),
						p = o(n(32)),
						d = o(n(41)),
						y = o(n(42)),
						b = o(n(16)),
						v = o(n(43)),
						g = [!1, "center", "right", "justify"],
						m = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"],
						_ = [!1, "serif", "monospace"],
						O = ["1", "2", "3", !1],
						w = ["small", !1, "large", "huge"];
					function x(n, t) {
						r(this, x);
						var o = i(this, (x.__proto__ || Object.getPrototypeOf(x)).call(this, n, t)),
							t = function t(e) {
								if (!document.body.contains(n.root)) return document.body.removeEventListener("click", t);
								null == o.tooltip || o.tooltip.root.contains(e.target) || document.activeElement === o.tooltip.textbox || o.quill.hasFocus() || o.tooltip.hide(),
									null != o.pickers &&
										o.pickers.forEach(function (t) {
											t.container.contains(e.target) || t.close();
										});
							};
						return n.emitter.listenDOM("click", document.body, t), o;
					}
					function k(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					function E(t, e) {
						return r(this, E), ((e = i(this, (E.__proto__ || Object.getPrototypeOf(E)).call(this, t, e))).textbox = e.root.querySelector('input[type="text"]')), e.listen(), e;
					}
					((n =
						(l(x, p.default),
						s(x, [
							{
								key: "addModule",
								value: function (t) {
									var e = (function t(e, n, o) {
										null === e && (e = Function.prototype);
										var r = Object.getOwnPropertyDescriptor(e, n);
										return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
									})(x.prototype.__proto__ || Object.getPrototypeOf(x.prototype), "addModule", this).call(this, t);
									return "toolbar" === t && this.extendToolbar(e), e;
								},
							},
							{
								key: "buildButtons",
								value: function (t, o) {
									t.forEach(function (n) {
										(n.getAttribute("class") || "").split(/\s+/).forEach(function (t) {
											var e;
											t.startsWith("ql-") && ((t = t.slice("ql-".length)), null != o[t]) && ("direction" === t ? (n.innerHTML = o[t][""] + o[t].rtl) : "string" == typeof o[t] ? (n.innerHTML = o[t]) : null != (e = n.value || "") && o[t][e] && (n.innerHTML = o[t][e]));
										});
									});
								},
							},
							{
								key: "buildPickers",
								value: function (t, n) {
									var e = this;
									(this.pickers = t.map(function (t) {
										if (t.classList.contains("ql-align")) return null == t.querySelector("option") && a(t, g), new y.default(t, n.align);
										if (t.classList.contains("ql-background") || t.classList.contains("ql-color")) {
											var e = t.classList.contains("ql-background") ? "background" : "color";
											return null == t.querySelector("option") && a(t, m, "background" == e ? "#ffffff" : "#000000"), new d.default(t, n[e]);
										}
										return null == t.querySelector("option") && (t.classList.contains("ql-font") ? a(t, _) : t.classList.contains("ql-header") ? a(t, O) : t.classList.contains("ql-size") && a(t, w)), new b.default(t);
									})),
										this.quill.on(f.default.events.EDITOR_CHANGE, function () {
											e.pickers.forEach(function (t) {
												t.update();
											});
										});
								},
							},
						]),
						x)).DEFAULTS = (0, u.default)(!0, {}, p.default.DEFAULTS, {
						modules: {
							toolbar: {
								handlers: {
									formula: function () {
										this.quill.theme.tooltip.edit("formula");
									},
									image: function () {
										var n = this,
											o = this.container.querySelector("input.ql-image[type=file]");
										null == o &&
											((o = document.createElement("input")).setAttribute("type", "file"),
											o.setAttribute("accept", "image/png, image/gif, image/jpeg, image/bmp, image/x-icon"),
											o.classList.add("ql-image"),
											o.addEventListener("change", function () {
												var t;
												null != o.files &&
													null != o.files[0] &&
													(((t = new FileReader()).onload = function (t) {
														var e = n.quill.getSelection(!0);
														n.quill.updateContents(new c.default().retain(e.index).delete(e.length).insert({ image: t.target.result }), f.default.sources.USER), n.quill.setSelection(e.index + 1, f.default.sources.SILENT), (o.value = "");
													}),
													t.readAsDataURL(o.files[0]));
											}),
											this.container.appendChild(o)),
											o.click();
									},
									video: function () {
										this.quill.theme.tooltip.edit("video");
									},
								},
							},
						},
					})),
						l(E, v.default),
						s(E, [
							{
								key: "listen",
								value: function () {
									var e = this;
									this.textbox.addEventListener("keydown", function (t) {
										h.default.match(t, "enter") ? (e.save(), t.preventDefault()) : h.default.match(t, "escape") && (e.cancel(), t.preventDefault());
									});
								},
							},
							{
								key: "cancel",
								value: function () {
									this.hide();
								},
							},
							{
								key: "edit",
								value: function () {
									var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "link",
										e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
									this.root.classList.remove("ql-hidden"), this.root.classList.add("ql-editing"), null != e ? (this.textbox.value = e) : t !== this.root.getAttribute("data-mode") && (this.textbox.value = ""), this.position(this.quill.getBounds(this.quill.selection.savedRange)), this.textbox.select(), this.textbox.setAttribute("placeholder", this.textbox.getAttribute("data-" + t) || ""), this.root.setAttribute("data-mode", t);
								},
							},
							{
								key: "restoreFocus",
								value: function () {
									var t = this.quill.scrollingContainer.scrollTop;
									this.quill.focus(), (this.quill.scrollingContainer.scrollTop = t);
								},
							},
							{
								key: "save",
								value: function () {
									var t = this.textbox.value;
									switch (this.root.getAttribute("data-mode")) {
										case "link":
											var e = this.quill.root.scrollTop;
											this.linkRange ? (this.quill.formatText(this.linkRange, "link", t, f.default.sources.USER), delete this.linkRange) : (this.restoreFocus(), this.quill.format("link", t, f.default.sources.USER)), (this.quill.root.scrollTop = e);
											break;
										case "video":
											t = (e = (n = t).match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || n.match(/^(?:(https?):\/\/)?(?:(?:www|m)\.)?youtu\.be\/([a-zA-Z0-9_-]+)/)) ? (e[1] || "https") + "://www.youtube.com/embed/" + e[2] + "?showinfo=0" : (e = n.match(/^(?:(https?):\/\/)?(?:www\.)?vimeo\.com\/(\d+)/)) ? (e[1] || "https") + "://player.vimeo.com/video/" + e[2] + "/" : n;
										case "formula":
											if (!t) break;
											var n = this.quill.getSelection(!0);
											null != n && ((n = n.index + n.length), this.quill.insertEmbed(n, this.root.getAttribute("data-mode"), t, f.default.sources.USER), "formula" === this.root.getAttribute("data-mode") && this.quill.insertText(n + 1, " ", f.default.sources.USER), this.quill.setSelection(n + 2, f.default.sources.USER));
									}
									(this.textbox.value = ""), this.hide();
								},
							},
						]),
						(s = E),
						(e.BaseTooltip = s),
						(e.default = n);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = o(n(46)),
						i = n(34),
						l = n(36),
						a = n(62),
						s = o(n(63)),
						u = o(n(64)),
						c = n(65),
						f = o(c),
						h = n(35),
						p = n(24),
						d = n(37),
						y = n(38),
						b = o(n(39)),
						v = o(n(66)),
						g = o(n(15)),
						m = o(n(67)),
						_ = o(n(68)),
						O = o(n(69)),
						w = o(n(70)),
						x = o(n(71)),
						k = n(13),
						E = o(k),
						N = o(n(72)),
						j = o(n(73)),
						A = o(n(74)),
						q = o(n(26)),
						T = o(n(16)),
						P = o(n(41)),
						S = o(n(42)),
						C = o(n(43)),
						L = o(n(107)),
						n = o(n(108));
					r.default.register({ "attributors/attribute/direction": l.DirectionAttribute, "attributors/class/align": i.AlignClass, "attributors/class/background": h.BackgroundClass, "attributors/class/color": p.ColorClass, "attributors/class/direction": l.DirectionClass, "attributors/class/font": d.FontClass, "attributors/class/size": y.SizeClass, "attributors/style/align": i.AlignStyle, "attributors/style/background": h.BackgroundStyle, "attributors/style/color": p.ColorStyle, "attributors/style/direction": l.DirectionStyle, "attributors/style/font": d.FontStyle, "attributors/style/size": y.SizeStyle }, !0), r.default.register({ "formats/align": i.AlignClass, "formats/direction": l.DirectionClass, "formats/indent": a.IndentClass, "formats/background": h.BackgroundStyle, "formats/color": p.ColorStyle, "formats/font": d.FontClass, "formats/size": y.SizeClass, "formats/blockquote": s.default, "formats/code-block": E.default, "formats/header": u.default, "formats/list": f.default, "formats/bold": b.default, "formats/code": k.Code, "formats/italic": v.default, "formats/link": g.default, "formats/script": m.default, "formats/strike": _.default, "formats/underline": O.default, "formats/image": w.default, "formats/video": x.default, "formats/list/item": c.ListItem, "modules/formula": N.default, "modules/syntax": j.default, "modules/toolbar": A.default, "themes/bubble": L.default, "themes/snow": n.default, "ui/icons": q.default, "ui/picker": T.default, "ui/icon-picker": S.default, "ui/color-picker": P.default, "ui/tooltip": C.default }, !0), (e.default = r.default);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var r = o(n(0)),
						i = o(n(6)),
						l = n(3),
						a = o(l),
						s = o(n(14)),
						u = o(n(23)),
						c = o(n(31)),
						f = o(n(33)),
						h = o(n(5)),
						p = o(n(59)),
						d = o(n(8)),
						y = o(n(60)),
						b = o(n(61)),
						n = o(n(25));
					i.default.register({ "blots/block": a.default, "blots/block/embed": l.BlockEmbed, "blots/break": s.default, "blots/container": u.default, "blots/cursor": c.default, "blots/embed": f.default, "blots/inline": h.default, "blots/scroll": p.default, "blots/text": d.default, "modules/clipboard": y.default, "modules/history": b.default, "modules/keyboard": n.default }), r.default.register(a.default, s.default, c.default, h.default, p.default, d.default), (e.default = i.default);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o =
						((r.prototype.append = function () {
							for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
							this.insertBefore(t[0], null), 1 < t.length && this.append.apply(this, t.slice(1));
						}),
						(r.prototype.contains = function (t) {
							for (var e, n = this.iterator(); (e = n()); ) if (e === t) return !0;
							return !1;
						}),
						(r.prototype.insertBefore = function (t, e) {
							t && (null != (t.next = e) ? ((t.prev = e.prev), null != e.prev && (e.prev.next = t), (e.prev = t), e === this.head && (this.head = t)) : null != this.tail ? (((this.tail.next = t).prev = this.tail), (this.tail = t)) : ((t.prev = null), (this.head = this.tail = t)), (this.length += 1));
						}),
						(r.prototype.offset = function (t) {
							for (var e = 0, n = this.head; null != n; ) {
								if (n === t) return e;
								(e += n.length()), (n = n.next);
							}
							return -1;
						}),
						(r.prototype.remove = function (t) {
							this.contains(t) && (null != t.prev && (t.prev.next = t.next), null != t.next && (t.next.prev = t.prev), t === this.head && (this.head = t.next), t === this.tail && (this.tail = t.prev), --this.length);
						}),
						(r.prototype.iterator = function (e) {
							return (
								void 0 === e && (e = this.head),
								function () {
									var t = e;
									return null != e && (e = e.next), t;
								}
							);
						}),
						(r.prototype.find = function (t, e) {
							void 0 === e && (e = !1);
							for (var n, o = this.iterator(); (n = o()); ) {
								var r = n.length();
								if (t < r || (e && t === r && (null == n.next || 0 !== n.next.length()))) return [n, t];
								t -= r;
							}
							return [null, 0];
						}),
						(r.prototype.forEach = function (t) {
							for (var e, n = this.iterator(); (e = n()); ) t(e);
						}),
						(r.prototype.forEachAt = function (t, e, n) {
							if (!(e <= 0))
								for (var o, r = this.find(t), i = r[0], l = t - r[1], a = this.iterator(i); (o = a()) && l < t + e; ) {
									var s = o.length();
									l < t ? n(o, t - l, Math.min(e, l + s - t)) : n(o, 0, Math.min(s, t + e - l)), (l += s);
								}
						}),
						(r.prototype.map = function (n) {
							return this.reduce(function (t, e) {
								return t.push(n(e)), t;
							}, []);
						}),
						(r.prototype.reduce = function (t, e) {
							for (var n, o = this.iterator(); (n = o()); ) e = t(e, n);
							return e;
						}),
						r);
					function r() {
						(this.head = this.tail = null), (this.length = 0);
					}
					e.default = o;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var s,
						u = n(17),
						c = n(1),
						i = { attributes: !0, characterData: !0, characterDataOldValue: !0, childList: !0, subtree: !0 },
						r =
							(r(l, (s = u.default)),
							(l.prototype.detach = function () {
								s.prototype.detach.call(this), this.observer.disconnect();
							}),
							(l.prototype.deleteAt = function (t, e) {
								this.update(),
									0 === t && e === this.length()
										? this.children.forEach(function (t) {
												t.remove();
										  })
										: s.prototype.deleteAt.call(this, t, e);
							}),
							(l.prototype.formatAt = function (t, e, n, o) {
								this.update(), s.prototype.formatAt.call(this, t, e, n, o);
							}),
							(l.prototype.insertAt = function (t, e, n) {
								this.update(), s.prototype.insertAt.call(this, t, e, n);
							}),
							(l.prototype.optimize = function (t, e) {
								var n = this;
								void 0 === t && (t = []), void 0 === e && (e = {}), s.prototype.optimize.call(this, e);
								for (var o = [].slice.call(this.observer.takeRecords()); 0 < o.length; ) t.push(o.pop());
								for (
									var r = function (t, e) {
											void 0 === e && (e = !0), null != t && t !== n && null != t.domNode.parentNode && (null == t.domNode[c.DATA_KEY].mutations && (t.domNode[c.DATA_KEY].mutations = []), e && r(t.parent));
										},
										i = function (t) {
											null != t.domNode[c.DATA_KEY] && null != t.domNode[c.DATA_KEY].mutations && (t instanceof u.default && t.children.forEach(i), t.optimize(e));
										},
										l = t,
										a = 0;
									0 < l.length;
									a += 1
								) {
									if (100 <= a) throw new Error("[Parchment] Maximum optimize iterations reached");
									for (
										l.forEach(function (t) {
											var e = c.find(t.target, !0);
											null != e &&
												(e.domNode === t.target &&
													("childList" === t.type
														? (r(c.find(t.previousSibling, !1)),
														  [].forEach.call(t.addedNodes, function (t) {
																(t = c.find(t, !1)),
																	r(t, !1),
																	t instanceof u.default &&
																		t.children.forEach(function (t) {
																			r(t, !1);
																		});
														  }))
														: "attributes" === t.type && r(e.prev)),
												r(e));
										}),
											this.children.forEach(i),
											o = (l = [].slice.call(this.observer.takeRecords())).slice();
										0 < o.length;

									)
										t.push(o.pop());
								}
							}),
							(l.prototype.update = function (t, e) {
								var n = this;
								void 0 === e && (e = {}),
									(t = t || this.observer.takeRecords())
										.map(function (t) {
											var e = c.find(t.target, !0);
											return null == e ? null : null == e.domNode[c.DATA_KEY].mutations ? ((e.domNode[c.DATA_KEY].mutations = [t]), e) : (e.domNode[c.DATA_KEY].mutations.push(t), null);
										})
										.forEach(function (t) {
											null != t && t !== n && null != t.domNode[c.DATA_KEY] && t.update(t.domNode[c.DATA_KEY].mutations || [], e);
										}),
									null != this.domNode[c.DATA_KEY].mutations && s.prototype.update.call(this, this.domNode[c.DATA_KEY].mutations, e),
									this.optimize(t, e);
							}),
							(l.blotName = "scroll"),
							(l.defaultChild = "block"),
							(l.scope = c.Scope.BLOCK_BLOT),
							(l.tagName = "DIV"),
							l);
					function l(t) {
						var e = s.call(this, t) || this;
						return (
							((e.scroll = e).observer = new MutationObserver(function (t) {
								e.update(t);
							})),
							e.observer.observe(e.domNode, i),
							e.attach(),
							e
						);
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i,
						l = n(18),
						a = n(1),
						r =
							(r(s, (i = l.default)),
							(s.formats = function (t) {
								if (t.tagName !== s.tagName) return i.formats.call(this, t);
							}),
							(s.prototype.format = function (t, e) {
								var n = this;
								t !== this.statics.blotName || e
									? i.prototype.format.call(this, t, e)
									: (this.children.forEach(function (t) {
											t instanceof l.default || (t = t.wrap(s.blotName, !0)), n.attributes.copy(t);
									  }),
									  this.unwrap());
							}),
							(s.prototype.formatAt = function (t, e, n, o) {
								null != this.formats()[n] || a.query(n, a.Scope.ATTRIBUTE) ? this.isolate(t, e).format(n, o) : i.prototype.formatAt.call(this, t, e, n, o);
							}),
							(s.prototype.optimize = function (t) {
								i.prototype.optimize.call(this, t);
								var e = this.formats();
								if (0 === Object.keys(e).length) return this.unwrap();
								(t = this.next) instanceof s &&
									t.prev === this &&
									(function (t, e) {
										if (Object.keys(t).length === Object.keys(e).length) {
											for (var n in t) if (t[n] !== e[n]) return;
											return 1;
										}
									})(e, t.formats()) &&
									(t.moveChildren(this), t.remove());
							}),
							(s.blotName = "inline"),
							(s.scope = a.Scope.INLINE_BLOT),
							(s.tagName = "SPAN"),
							s);
					function s() {
						return (null !== i && i.apply(this, arguments)) || this;
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i,
						l = n(18),
						a = n(1),
						r =
							(r(s, (i = l.default)),
							(s.formats = function (t) {
								var e = a.query(s.blotName).tagName;
								if (t.tagName !== e) return i.formats.call(this, t);
							}),
							(s.prototype.format = function (t, e) {
								null != a.query(t, a.Scope.BLOCK) && (t !== this.statics.blotName || e ? i.prototype.format.call(this, t, e) : this.replaceWith(s.blotName));
							}),
							(s.prototype.formatAt = function (t, e, n, o) {
								null != a.query(n, a.Scope.BLOCK) ? this.format(n, o) : i.prototype.formatAt.call(this, t, e, n, o);
							}),
							(s.prototype.insertAt = function (t, e, n) {
								null == n || null != a.query(e, a.Scope.INLINE) ? i.prototype.insertAt.call(this, t, e, n) : ((t = this.split(t)), (n = a.create(e, n)), t.parent.insertBefore(n, t));
							}),
							(s.prototype.update = function (t, e) {
								navigator.userAgent.match(/Trident/) ? this.build() : i.prototype.update.call(this, t, e);
							}),
							(s.blotName = "block"),
							(s.scope = a.Scope.BLOCK_BLOT),
							(s.tagName = "P"),
							s);
					function s() {
						return (null !== i && i.apply(this, arguments)) || this;
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i,
						n = n(19),
						r =
							(r(l, (i = n.default)),
							(l.formats = function (t) {}),
							(l.prototype.format = function (t, e) {
								i.prototype.formatAt.call(this, 0, this.length(), t, e);
							}),
							(l.prototype.formatAt = function (t, e, n, o) {
								0 === t && e === this.length() ? this.format(n, o) : i.prototype.formatAt.call(this, t, e, n, o);
							}),
							(l.prototype.formats = function () {
								return this.statics.formats(this.domNode);
							}),
							l);
					function l() {
						return (null !== i && i.apply(this, arguments)) || this;
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r =
							(this && this.__extends) ||
							((o =
								Object.setPrototypeOf ||
								({ __proto__: [] } instanceof Array &&
									function (t, e) {
										t.__proto__ = e;
									}) ||
								function (t, e) {
									for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
								}),
							function (t, e) {
								function n() {
									this.constructor = t;
								}
								o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
							});
					Object.defineProperty(e, "__esModule", { value: !0 });
					var i,
						l = n(19),
						a = n(1),
						r =
							(r(s, (i = l.default)),
							(s.create = function (t) {
								return document.createTextNode(t);
							}),
							(s.value = function (t) {
								return (t = t.data).normalize ? t.normalize() : t;
							}),
							(s.prototype.deleteAt = function (t, e) {
								this.domNode.data = this.text = this.text.slice(0, t) + this.text.slice(t + e);
							}),
							(s.prototype.index = function (t, e) {
								return this.domNode === t ? e : -1;
							}),
							(s.prototype.insertAt = function (t, e, n) {
								null == n ? ((this.text = this.text.slice(0, t) + e + this.text.slice(t)), (this.domNode.data = this.text)) : i.prototype.insertAt.call(this, t, e, n);
							}),
							(s.prototype.length = function () {
								return this.text.length;
							}),
							(s.prototype.optimize = function (t) {
								i.prototype.optimize.call(this, t), (this.text = this.statics.value(this.domNode)), 0 === this.text.length ? this.remove() : this.next instanceof s && this.next.prev === this && (this.insertAt(this.length(), this.next.value()), this.next.remove());
							}),
							(s.prototype.position = function (t, e) {
								return void 0 === e && (e = !1), [this.domNode, t];
							}),
							(s.prototype.split = function (t, e) {
								if (!(e = void 0 !== e && e)) {
									if (0 === t) return this;
									if (t === this.length()) return this.next;
								}
								return (t = a.create(this.domNode.splitText(t))), this.parent.insertBefore(t, this.next), (this.text = this.statics.value(this.domNode)), t;
							}),
							(s.prototype.update = function (t, e) {
								var n = this;
								t.some(function (t) {
									return "characterData" === t.type && t.target === n.domNode;
								}) && (this.text = this.statics.value(this.domNode));
							}),
							(s.prototype.value = function () {
								return this.text;
							}),
							(s.blotName = "text"),
							(s.scope = a.Scope.INLINE_BLOT),
							s);
					function s(t) {
						return ((t = i.call(this, t) || this).text = t.statics.value(t.domNode)), t;
					}
					e.default = r;
				},
				function (t, e, n) {
					"use strict";
					var o,
						r = document.createElement("div");
					r.classList.toggle("test-class", !1),
						r.classList.contains("test-class") &&
							((o = DOMTokenList.prototype.toggle),
							(DOMTokenList.prototype.toggle = function (t, e) {
								return 1 < arguments.length && !this.contains(t) == !e ? e : o.call(this, t);
							})),
						String.prototype.startsWith ||
							(String.prototype.startsWith = function (t, e) {
								return (e = e || 0), this.substr(e, t.length) === t;
							}),
						String.prototype.endsWith ||
							(String.prototype.endsWith = function (t, e) {
								var n = this.toString();
								return ("number" != typeof e || !isFinite(e) || Math.floor(e) !== e || e > n.length) && (e = n.length), (e -= t.length), -1 !== (t = n.indexOf(t, e)) && t === e;
							}),
						Array.prototype.find ||
							Object.defineProperty(Array.prototype, "find", {
								value: function (t) {
									if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
									if ("function" != typeof t) throw new TypeError("predicate must be a function");
									for (var e, n = Object(this), o = n.length >>> 0, r = arguments[1], i = 0; i < o; i++) if (((e = n[i]), t.call(r, e, i, n))) return e;
								},
							}),
						document.addEventListener("DOMContentLoaded", function () {
							document.execCommand("enableObjectResizing", !1, !1), document.execCommand("autoUrlDetect", !1, !1);
						});
				},
				function (t, e) {
					function a(t, e, n) {
						if (t == e) return t ? [[u, t]] : [];
						(n < 0 || t.length < n) && (n = null);
						var o = h(t, e),
							r = t.substring(0, o),
							o = p((t = t.substring(o)), (e = e.substring(o))),
							i = t.substring(t.length - o),
							e = (function (t, e) {
								if (!t) return [[j, e]];
								if (!e) return [[N, t]];
								var n = t.length > e.length ? t : e,
									o = t.length > e.length ? e : t;
								if (-1 != (r = n.indexOf(o)))
									return (
										(i = [
											[j, n.substring(0, r)],
											[u, o],
											[j, n.substring(r + o.length)],
										]),
										t.length > e.length && (i[0][0] = i[2][0] = N),
										i
									);
								if (1 == o.length)
									return [
										[N, t],
										[j, e],
									];
								if (
									(l = (function (t, e) {
										function n(t, e, n) {
											for (var o, r, i, l, a = t.substring(n, n + Math.floor(t.length / 4)), s = -1, u = ""; -1 != (s = e.indexOf(a, s + 1)); ) {
												var c = h(t.substring(n), e.substring(s)),
													f = p(t.substring(0, n), e.substring(0, s));
												u.length < f + c && ((u = e.substring(s - f, s) + e.substring(s, s + c)), (o = t.substring(0, n - f)), (r = t.substring(n + c)), (i = e.substring(0, s - f)), (l = e.substring(s + c)));
											}
											return 2 * u.length >= t.length ? [o, r, i, l, u] : null;
										}
										var o = t.length > e.length ? t : e,
											r = t.length > e.length ? e : t;
										if (o.length < 4 || 2 * r.length < o.length) return null;
										var i,
											l,
											a,
											s,
											u = n(o, r, Math.ceil(o.length / 4)),
											o = n(o, r, Math.ceil(o.length / 2));
										return u || o ? ((o = !o || (u && u[4].length > o[4].length) ? u : o), t.length > e.length ? ((i = o[0]), (l = o[1]), (a = o[2]), (s = o[3])) : ((a = o[0]), (s = o[1]), (i = o[2]), (l = o[3])), [i, l, a, s, o[4]]) : null;
									})(t, e))
								) {
									var n = l[0],
										r = l[1],
										i = l[2],
										o = l[3],
										l = l[4],
										i = a(n, i),
										o = a(r, o);
									return i.concat([[u, l]], o);
								}
								return (function (t, e) {
									for (var n = t.length, o = e.length, r = Math.ceil((n + o) / 2), i = r, l = 2 * r, a = new Array(l), s = new Array(l), u = 0; u < l; u++) (a[u] = -1), (s[u] = -1);
									a[i + 1] = 0;
									for (var c = n - o, f = c % 2 != (s[i + 1] = 0), h = 0, p = 0, d = 0, y = 0, b = 0; b < r; b++) {
										for (var v = -b + h; v <= b - p; v += 2) {
											for (var g = i + v, m = (k = v == -b || (v != b && a[g - 1] < a[g + 1]) ? a[g + 1] : a[g - 1] + 1) - v; k < n && m < o && t.charAt(k) == e.charAt(m); ) k++, m++;
											if (n < (a[g] = k)) p += 2;
											else if (o < m) h += 2;
											else if (f) {
												var _ = i + c - v;
												if (0 <= _ && _ < l && -1 != s[_] && (w = n - s[_]) <= k) return E(t, e, k, m);
											}
										}
										for (var O = -b + d; O <= b - y; O += 2) {
											for (var w, _ = i + O, x = (w = O == -b || (O != b && s[_ - 1] < s[_ + 1]) ? s[_ + 1] : s[_ - 1] + 1) - O; w < n && x < o && t.charAt(n - w - 1) == e.charAt(o - x - 1); ) w++, x++;
											if (n < (s[_] = w)) y += 2;
											else if (o < x) d += 2;
											else if (!f && 0 <= (g = i + c - O) && g < l && -1 != a[g]) {
												var k = a[g],
													m = i + k - g;
												if ((w = n - w) <= k) return E(t, e, k, m);
											}
										}
									}
									return [
										[N, t],
										[j, e],
									];
								})(t, e);
							})((t = t.substring(0, t.length - o)), (e = e.substring(0, e.length - o)));
						return (
							r && e.unshift([u, r]),
							i && e.push([u, i]),
							(function t(e) {
								e.push([u, ""]);
								for (var n, o = 0, r = 0, i = 0, l = "", a = ""; o < e.length; )
									switch (e[o][0]) {
										case j:
											i++, (a += e[o][1]), o++;
											break;
										case N:
											r++, (l += e[o][1]), o++;
											break;
										case u:
											1 < r + i ? (0 !== r && 0 !== i && (0 !== (n = h(a, l)) && (0 < o - r - i && e[o - r - i - 1][0] == u ? (e[o - r - i - 1][1] += a.substring(0, n)) : (e.splice(0, 0, [u, a.substring(0, n)]), o++), (a = a.substring(n)), (l = l.substring(n))), 0 !== (n = p(a, l)) && ((e[o][1] = a.substring(a.length - n) + e[o][1]), (a = a.substring(0, a.length - n)), (l = l.substring(0, l.length - n)))), 0 === r ? e.splice(o - i, r + i, [j, a]) : 0 === i ? e.splice(o - r, r + i, [N, l]) : e.splice(o - r - i, r + i, [N, l], [j, a]), (o = o - r - i + (r ? 1 : 0) + (i ? 1 : 0) + 1)) : 0 !== o && e[o - 1][0] == u ? ((e[o - 1][1] += e[o][1]), e.splice(o, 1)) : o++, (r = i = 0), (a = l = "");
									}
								"" === e[e.length - 1][1] && e.pop();
								for (var s = !1, o = 1; o < e.length - 1; ) e[o - 1][0] == u && e[o + 1][0] == u && (e[o][1].substring(e[o][1].length - e[o - 1][1].length) == e[o - 1][1] ? ((e[o][1] = e[o - 1][1] + e[o][1].substring(0, e[o][1].length - e[o - 1][1].length)), (e[o + 1][1] = e[o - 1][1] + e[o + 1][1]), e.splice(o - 1, 1), (s = !0)) : e[o][1].substring(0, e[o + 1][1].length) == e[o + 1][1] && ((e[o - 1][1] += e[o + 1][1]), (e[o][1] = e[o][1].substring(e[o + 1][1].length) + e[o + 1][1]), e.splice(o + 1, 1), (s = !0))), o++;
								s && t(e);
							})(e),
							(function (t) {
								function e(t) {
									return 56320 <= t.charCodeAt(0) && t.charCodeAt(0) <= 57343;
								}
								for (var n, o = !1, r = 2; r < t.length; r += 1) t[r - 2][0] === u && 55296 <= (n = t[r - 2][1]).charCodeAt(n.length - 1) && n.charCodeAt(n.length - 1) <= 56319 && t[r - 1][0] === N && e(t[r - 1][1]) && t[r][0] === j && e(t[r][1]) && ((o = !0), (t[r - 1][1] = t[r - 2][1].slice(-1) + t[r - 1][1]), (t[r][1] = t[r - 2][1].slice(-1) + t[r][1]), (t[r - 2][1] = t[r - 2][1].slice(0, -1)));
								if (!o) return t;
								for (var i = [], r = 0; r < t.length; r += 1) 0 < t[r][1].length && i.push(t[r]);
								return i;
							})(
								(e =
									null != n
										? ((i = (r = (function (t, e) {
												if (0 === e) return [u, t];
												for (var n = 0, o = 0; o < t.length; o++) {
													var r = t[o];
													if (r[0] === N || r[0] === u) {
														var i = n + r[1].length;
														if (e === i) return [o + 1, t];
														if (e < i) {
															t = t.slice();
															var l = e - n,
																a = [r[0], r[1].slice(0, l)],
																l = [r[0], r[1].slice(l)];
															return t.splice(o, 1, a, l), [o + 1, t];
														}
														n = i;
													}
												}
												throw new Error("cursor_pos is out of bounds!");
										  })((t = e), (o = n)))[1]),
										  (n = r[0]),
										  (o = i[n]),
										  (r = i[n + 1]),
										  null == o || o[0] !== u ? t : null != r && o[1] + r[1] === r[1] + o[1] ? (i.splice(n, 2, r, o), l(i, n, 2)) : null == r || 0 !== r[1].indexOf(o[1]) ? t : (i.splice(n, 2, [r[0], o[1]], [0, o[1]]), 0 < (o = r[1].slice(o[1].length)).length && i.splice(n + 2, 0, [r[0], o]), l(i, n, 3)))
										: e)
							)
						);
					}
					function E(t, e, n, o) {
						var r = t.substring(0, n),
							i = e.substring(0, o),
							n = t.substring(n),
							o = e.substring(o),
							i = a(r, i),
							o = a(n, o);
						return i.concat(o);
					}
					function h(t, e) {
						if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
						for (var n = 0, o = Math.min(t.length, e.length), r = o, i = 0; n < r; ) t.substring(i, r) == e.substring(i, r) ? (i = n = r) : (o = r), (r = Math.floor((o - n) / 2 + n));
						return r;
					}
					function p(t, e) {
						if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
						for (var n = 0, o = Math.min(t.length, e.length), r = o, i = 0; n < r; ) t.substring(t.length - r, t.length - i) == e.substring(e.length - r, e.length - i) ? (i = n = r) : (o = r), (r = Math.floor((o - n) / 2 + n));
						return r;
					}
					function l(t, e, n) {
						for (var o, r, i = e + n - 1; 0 <= i && e - 1 <= i; i--) i + 1 < t.length && ((o = t[i]), (r = t[i + 1]), o[0] === r[1] && t.splice(i, 2, [o[0], o[1] + r[1]]));
						return t;
					}
					var N = -1,
						j = 1,
						u = 0,
						n = a;
					(n.INSERT = j), (n.DELETE = N), (n.EQUAL = u), (t.exports = n);
				},
				function (t, e) {
					function n(t) {
						var e,
							n = [];
						for (e in t) n.push(e);
						return n;
					}
					(t.exports = "function" == typeof Object.keys ? Object.keys : n).shim = n;
				},
				function (t, e) {
					function n(t) {
						return "[object Arguments]" == Object.prototype.toString.call(t);
					}
					function o(t) {
						return (t && "object" == typeof t && "number" == typeof t.length && Object.prototype.hasOwnProperty.call(t, "callee") && !Object.prototype.propertyIsEnumerable.call(t, "callee")) || !1;
					}
					var r =
						"[object Arguments]" ==
						(function () {
							return Object.prototype.toString.call(arguments);
						})();
					((e = t.exports = r ? n : o).supported = n), (e.unsupported = o);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					function c(t, e) {
						if (Array.isArray(t)) return t;
						if (Symbol.iterator in Object(t))
							return (function (t, e) {
								var n = [],
									o = !0,
									r = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
								} catch (t) {
									(r = !0), (i = t);
								} finally {
									try {
										!o && a.return && a.return();
									} finally {
										if (r) throw i;
									}
								}
								return n;
							})(t, e);
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
					var f =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								  },
						r = function (t, e, n) {
							return e && _(t.prototype, e), n && _(t, n), t;
						},
						h = o(n(4)),
						p = o(n(20)),
						d = o(n(0)),
						u = o(n(13)),
						a = o(n(31)),
						y = n(3),
						b = o(y),
						i = o(n(14)),
						v = o(n(21)),
						s = o(n(12)),
						g = o(n(2)),
						m = /^[ -~]*$/,
						r =
							(r(l, [
								{
									key: "applyDelta",
									value: function (t) {
										var a = this,
											s = !1;
										this.scroll.update();
										var u = this.scroll.length();
										return (
											this.scroll.batchStart(),
											(t = t.reduce(function (t, e) {
												if (1 !== e.insert) return null == e.attributes || (!0 !== e.attributes.list && !0 !== e.attributes.bullet) || ((e = (0, v.default)(e)).attributes.list ? (e.attributes.list = "ordered") : ((e.attributes.list = "bullet"), delete e.attributes.bullet)), "string" != typeof e.insert ? t.push(e) : ((n = e.insert.replace(/\r\n/g, "\n").replace(/\r/g, "\n")), t.insert(n, e.attributes));
												var n = (0, v.default)(e.attributes);
												return delete n.image, t.insert({ image: e.attributes.image }, n);
											}, new h.default())).reduce(function (e, t) {
												var n = t.retain || t.delete || t.insert.length || 1,
													o = t.attributes || {};
												if (null != t.insert) {
													if ("string" == typeof t.insert) {
														(i = t.insert).endsWith("\n") && s && ((s = !1), (i = i.slice(0, -1))), u <= e && !i.endsWith("\n") && (s = !0), a.scroll.insertAt(e, i);
														var r = a.scroll.line(e),
															i = (l = c(r, 2))[0],
															r = l[1],
															l = (0, g.default)({}, (0, y.bubbleFormats)(i));
														i instanceof b.default && ((r = i.descendant(d.default.Leaf, r)), (r = c(r, 1)[0]), (l = (0, g.default)(l, (0, y.bubbleFormats)(r)))), (o = p.default.attributes.diff(l, o) || {});
													} else if ("object" === f(t.insert)) {
														if (null == (l = Object.keys(t.insert)[0])) return e;
														a.scroll.insertAt(e, l, t.insert[l]);
													}
													u += n;
												}
												return (
													Object.keys(o).forEach(function (t) {
														a.scroll.formatAt(e, n, t, o[t]);
													}),
													e + n
												);
											}, 0),
											t.reduce(function (t, e) {
												return "number" == typeof e.delete ? (a.scroll.deleteAt(t, e.delete), t) : t + (e.retain || e.insert.length || 1);
											}, 0),
											this.scroll.batchEnd(),
											this.update(t)
										);
									},
								},
								{
									key: "deleteText",
									value: function (t, e) {
										return this.scroll.deleteAt(t, e), this.update(new h.default().retain(t).delete(e));
									},
								},
								{
									key: "formatLine",
									value: function (l, e) {
										var a = this,
											s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
										return (
											this.scroll.update(),
											Object.keys(s).forEach(function (r) {
												var t, i;
												(null != a.scroll.whitelist && !a.scroll.whitelist[r]) ||
													((t = a.scroll.lines(l, Math.max(e, 1))),
													(i = e),
													t.forEach(function (t) {
														var e,
															n,
															o = t.length();
														t instanceof u.default ? ((e = l - t.offset(a.scroll)), (n = t.newlineIndex(e + i) - e + 1), t.formatAt(e, n, r, s[r])) : t.format(r, s[r]), (i -= o);
													}));
											}),
											this.scroll.optimize(),
											this.update(new h.default().retain(l).retain(e, (0, v.default)(s)))
										);
									},
								},
								{
									key: "formatText",
									value: function (e, n) {
										var o = this,
											r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
										return (
											Object.keys(r).forEach(function (t) {
												o.scroll.formatAt(e, n, t, r[t]);
											}),
											this.update(new h.default().retain(e).retain(n, (0, v.default)(r)))
										);
									},
								},
								{
									key: "getContents",
									value: function (t, e) {
										return this.delta.slice(t, t + e);
									},
								},
								{
									key: "getDelta",
									value: function () {
										return this.scroll.lines().reduce(function (t, e) {
											return t.concat(e.delta());
										}, new h.default());
									},
								},
								{
									key: "getFormat",
									value: function (t) {
										var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
											n = [],
											o = [];
										return (
											0 === e
												? this.scroll.path(t).forEach(function (t) {
														(t = c(t, 1)[0]) instanceof b.default ? n.push(t) : t instanceof d.default.Leaf && o.push(t);
												  })
												: ((n = this.scroll.lines(t, e)), (o = this.scroll.descendants(d.default.Leaf, t, e))),
											(e = [n, o].map(function (t) {
												if (0 === t.length) return {};
												for (var e = (0, y.bubbleFormats)(t.shift()); 0 < Object.keys(e).length; ) {
													var n = t.shift();
													if (null == n) return e;
													e = (function (n, o) {
														return Object.keys(o).reduce(function (t, e) {
															return null == n[e] || (o[e] === n[e] ? (t[e] = o[e]) : Array.isArray(o[e]) ? o[e].indexOf(n[e]) < 0 && (t[e] = o[e].concat([n[e]])) : (t[e] = [o[e], n[e]])), t;
														}, {});
													})((0, y.bubbleFormats)(n), e);
												}
												return e;
											})),
											g.default.apply(g.default, e)
										);
									},
								},
								{
									key: "getText",
									value: function (t, e) {
										return this.getContents(t, e)
											.filter(function (t) {
												return "string" == typeof t.insert;
											})
											.map(function (t) {
												return t.insert;
											})
											.join("");
									},
								},
								{
									key: "insertEmbed",
									value: function (t, e, n) {
										return this.scroll.insertAt(t, e, n), this.update(new h.default().retain(t).insert(((t = n), (n = e) in (e = {}) ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e)));
									},
								},
								{
									key: "insertText",
									value: function (e, n) {
										var o = this,
											r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
										return (
											(n = n.replace(/\r\n/g, "\n").replace(/\r/g, "\n")),
											this.scroll.insertAt(e, n),
											Object.keys(r).forEach(function (t) {
												o.scroll.formatAt(e, n.length, t, r[t]);
											}),
											this.update(new h.default().retain(e).insert(n, (0, v.default)(r)))
										);
									},
								},
								{
									key: "isBlank",
									value: function () {
										if (0 == this.scroll.children.length) return !0;
										if (1 < this.scroll.children.length) return !1;
										var t = this.scroll.children.head;
										return t.statics.blotName === b.default.blotName && !(1 < t.children.length) && t.children.head instanceof i.default;
									},
								},
								{
									key: "removeFormat",
									value: function (t, e) {
										var n = this.getText(t, e),
											o = this.scroll.line(t + e),
											r = (l = c(o, 2))[0],
											i = l[1],
											o = 0,
											l = new h.default();
										return (
											null != r &&
												((o = r instanceof u.default ? r.newlineIndex(i) - i + 1 : r.length() - i),
												(l = r
													.delta()
													.slice(i, i + o - 1)
													.insert("\n"))),
											(l = this.getContents(t, e + o).diff(new h.default().insert(n).concat(l))),
											(l = new h.default().retain(t).concat(l)),
											this.applyDelta(l)
										);
									},
								},
								{
									key: "update",
									value: function (t) {
										var n,
											e,
											o,
											r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
											i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
											l = this.delta;
										return (
											1 === r.length && "characterData" === r[0].type && r[0].target.data.match(m) && d.default.find(r[0].target)
												? ((o = d.default.find(r[0].target)),
												  (n = (0, y.bubbleFormats)(o)),
												  (e = o.offset(this.scroll)),
												  (r = r[0].oldValue.replace(a.default.CONTENTS, "")),
												  (r = new h.default().insert(r)),
												  (o = new h.default().insert(o.value())),
												  (t = new h.default()
														.retain(e)
														.concat(r.diff(o, i))
														.reduce(function (t, e) {
															return e.insert ? t.insert(e.insert, n) : t.push(e);
														}, new h.default())),
												  (this.delta = l.compose(t)))
												: ((this.delta = this.getDelta()), (t && (0, s.default)(l.compose(t), this.delta)) || (t = l.diff(this.delta, i))),
											t
										);
									},
								},
							]),
							l);
					function l(t) {
						(function (t) {
							if (!(t instanceof l)) throw new TypeError("Cannot call a class as a function");
						})(this),
							(this.scroll = t),
							(this.delta = this.getDelta());
					}
					function _(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.default = r;
				},
				function (t, e) {
					"use strict";
					function s() {}
					function o(t, e, n) {
						(this.fn = t), (this.context = e), (this.once = n || !1);
					}
					function n() {
						(this._events = new s()), (this._eventsCount = 0);
					}
					var r = Object.prototype.hasOwnProperty,
						p = "~";
					Object.create && ((s.prototype = Object.create(null)), new s().__proto__ || (p = !1)),
						(n.prototype.eventNames = function () {
							var t,
								e,
								n = [];
							if (0 === this._eventsCount) return n;
							for (e in (t = this._events)) r.call(t, e) && n.push(p ? e.slice(1) : e);
							return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(t)) : n;
						}),
						(n.prototype.listeners = function (t, e) {
							var t = p ? p + t : t,
								n = this._events[t];
							if (e) return !!n;
							if (!n) return [];
							if (n.fn) return [n.fn];
							for (var o = 0, r = n.length, i = new Array(r); o < r; o++) i[o] = n[o].fn;
							return i;
						}),
						(n.prototype.emit = function (t, e, n, o, r, i) {
							var l = p ? p + t : t;
							if (!this._events[l]) return !1;
							var a,
								s = this._events[l],
								u = arguments.length;
							if (s.fn) {
								switch ((s.once && this.removeListener(t, s.fn, void 0, !0), u)) {
									case 1:
										return s.fn.call(s.context), !0;
									case 2:
										return s.fn.call(s.context, e), !0;
									case 3:
										return s.fn.call(s.context, e, n), !0;
									case 4:
										return s.fn.call(s.context, e, n, o), !0;
									case 5:
										return s.fn.call(s.context, e, n, o, r), !0;
									case 6:
										return s.fn.call(s.context, e, n, o, r, i), !0;
								}
								for (h = 1, a = new Array(u - 1); h < u; h++) a[h - 1] = arguments[h];
								s.fn.apply(s.context, a);
							} else
								for (var c, f = s.length, h = 0; h < f; h++)
									switch ((s[h].once && this.removeListener(t, s[h].fn, void 0, !0), u)) {
										case 1:
											s[h].fn.call(s[h].context);
											break;
										case 2:
											s[h].fn.call(s[h].context, e);
											break;
										case 3:
											s[h].fn.call(s[h].context, e, n);
											break;
										case 4:
											s[h].fn.call(s[h].context, e, n, o);
											break;
										default:
											if (!a) for (c = 1, a = new Array(u - 1); c < u; c++) a[c - 1] = arguments[c];
											s[h].fn.apply(s[h].context, a);
									}
							return !0;
						}),
						(n.prototype.on = function (t, e, n) {
							return (n = new o(e, n || this)), (t = p ? p + t : t), this._events[t] ? (this._events[t].fn ? (this._events[t] = [this._events[t], n]) : this._events[t].push(n)) : ((this._events[t] = n), this._eventsCount++), this;
						}),
						(n.prototype.once = function (t, e, n) {
							return (n = new o(e, n || this, !0)), (t = p ? p + t : t), this._events[t] ? (this._events[t].fn ? (this._events[t] = [this._events[t], n]) : this._events[t].push(n)) : ((this._events[t] = n), this._eventsCount++), this;
						}),
						(n.prototype.removeListener = function (t, e, n, o) {
							if (((t = p ? p + t : t), !this._events[t])) return this;
							if (!e) return 0 == --this._eventsCount ? (this._events = new s()) : delete this._events[t], this;
							var r = this._events[t];
							if (r.fn) r.fn !== e || (o && !r.once) || (n && r.context !== n) || (0 == --this._eventsCount ? (this._events = new s()) : delete this._events[t]);
							else {
								for (var i = 0, l = [], a = r.length; i < a; i++) (r[i].fn !== e || (o && !r[i].once) || (n && r[i].context !== n)) && l.push(r[i]);
								l.length ? (this._events[t] = 1 === l.length ? l[0] : l) : 0 == --this._eventsCount ? (this._events = new s()) : delete this._events[t];
							}
							return this;
						}),
						(n.prototype.removeAllListeners = function (t) {
							return t ? ((t = p ? p + t : t), this._events[t] && (0 == --this._eventsCount ? (this._events = new s()) : delete this._events[t])) : ((this._events = new s()), (this._eventsCount = 0)), this;
						}),
						(n.prototype.off = n.prototype.removeListener),
						(n.prototype.addListener = n.prototype.on),
						(n.prototype.setMaxListeners = function () {
							return this;
						}),
						(n.prefixed = p),
						(n.EventEmitter = n),
						void 0 !== t && (t.exports = n);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function l(t) {
						return t instanceof f.default || t instanceof c.BlockEmbed;
					}
					function a(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : a(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					function s(t, e) {
						if (Array.isArray(t)) return t;
						if (Symbol.iterator in Object(t))
							return (function (t, e) {
								var n = [],
									o = !0,
									r = !1,
									i = void 0;
								try {
									for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
								} catch (t) {
									(r = !0), (i = t);
								} finally {
									try {
										!o && a.return && a.return();
									} finally {
										if (r) throw i;
									}
								}
								return n;
							})(t, e);
						throw new TypeError("Invalid attempt to destructure non-iterable instance");
					}
					var r = function (t, e, n) {
							return e && y(t.prototype, e), n && y(t, n), t;
						},
						u = o(n(0)),
						i = o(n(9)),
						c = n(3),
						f = o(c),
						h = o(n(14)),
						p = o(n(13)),
						n = o(n(23));
					function d(t, e) {
						return (
							(function (t) {
								if (!(t instanceof d)) throw new TypeError("Cannot call a class as a function");
							})(this),
							((t = (function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, t))).emitter = e.emitter),
							Array.isArray(e.whitelist) &&
								(t.whitelist = e.whitelist.reduce(function (t, e) {
									return (t[e] = !0), t;
								}, {})),
							t.domNode.addEventListener("DOMNodeInserted", function () {}),
							t.optimize(),
							t.enable(),
							t
						);
					}
					function y(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((r =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(d, u.default.Scroll),
						r(d, [
							{
								key: "batchStart",
								value: function () {
									this.batch = !0;
								},
							},
							{
								key: "batchEnd",
								value: function () {
									(this.batch = !1), this.optimize();
								},
							},
							{
								key: "deleteAt",
								value: function (t, e) {
									var n = this.line(t),
										o = (r = s(n, 2))[0],
										n = r[1],
										r = this.line(t + e),
										r = s(r, 1)[0];
									if ((a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "deleteAt", this).call(this, t, e), null != r && o !== r && 0 < n)) {
										if (o instanceof c.BlockEmbed || r instanceof c.BlockEmbed) return void this.optimize();
										if (o instanceof p.default) {
											if (-1 < (n = o.newlineIndex(o.length(), !0)) && (o = o.split(n + 1)) === r) return void this.optimize();
										} else r instanceof p.default && -1 < (i = r.newlineIndex(0)) && r.split(i + 1);
										var i = r.children.head instanceof h.default ? null : r.children.head;
										o.moveChildren(r, i), o.remove();
									}
									this.optimize();
								},
							},
							{
								key: "enable",
								value: function () {
									var t = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
									this.domNode.setAttribute("contenteditable", t);
								},
							},
							{
								key: "formatAt",
								value: function (t, e, n, o) {
									(null != this.whitelist && !this.whitelist[n]) || (a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "formatAt", this).call(this, t, e, n, o), this.optimize());
								},
							},
							{
								key: "insertAt",
								value: function (t, e, n) {
									var o;
									(null != n && null != this.whitelist && !this.whitelist[e]) || (t >= this.length() ? (null == n || null == u.default.query(e, u.default.Scope.BLOCK) ? ((o = u.default.create(this.statics.defaultChild)), this.appendChild(o), null == n && e.endsWith("\n") && (e = e.slice(0, -1)), o.insertAt(0, e, n)) : ((o = u.default.create(e, n)), this.appendChild(o))) : a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "insertAt", this).call(this, t, e, n), this.optimize());
								},
							},
							{
								key: "insertBefore",
								value: function (t, e) {
									var n;
									t.statics.scope === u.default.Scope.INLINE_BLOT && ((n = u.default.create(this.statics.defaultChild)).appendChild(t), (t = n)), a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "insertBefore", this).call(this, t, e);
								},
							},
							{
								key: "leaf",
								value: function (t) {
									return this.path(t).pop() || [null, -1];
								},
							},
							{
								key: "line",
								value: function (t) {
									return t === this.length() ? this.line(t - 1) : this.descendant(l, t);
								},
							},
							{
								key: "lines",
								value: function () {
									return (function o(t, e, n) {
										var r = [],
											i = n;
										return (
											t.children.forEachAt(e, n, function (t, e, n) {
												l(t) ? r.push(t) : t instanceof u.default.Container && (r = r.concat(o(t, e, i))), (i -= n);
											}),
											r
										);
									})(this, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE);
								},
							},
							{
								key: "optimize",
								value: function () {
									var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
										e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
									!0 !== this.batch && (a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "optimize", this).call(this, t, e), 0 < t.length && this.emitter.emit(i.default.events.SCROLL_OPTIMIZE, t, e));
								},
							},
							{
								key: "path",
								value: function (t) {
									return a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "path", this)
										.call(this, t)
										.slice(1);
								},
							},
							{
								key: "update",
								value: function (t) {
									var e;
									!0 !== this.batch && ((e = i.default.sources.USER), "string" == typeof t && (e = t), 0 < (t = Array.isArray(t) ? t : this.observer.takeRecords()).length && this.emitter.emit(i.default.events.SCROLL_BEFORE_UPDATE, e, t), a(d.prototype.__proto__ || Object.getPrototypeOf(d.prototype), "update", this).call(this, t.concat([])), 0 < t.length && this.emitter.emit(i.default.events.SCROLL_UPDATE, e, t));
								},
							},
						]),
						d)).blotName = "scroll"),
						(r.className = "ql-editor"),
						(r.tagName = "DIV"),
						(r.defaultChild = "block"),
						(r.allowedChildren = [f.default, c.BlockEmbed, n.default]),
						(e.default = r);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e, n) {
						return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
					}
					function l(t, n, o) {
						return "object" === (void 0 === n ? "undefined" : y(n))
							? Object.keys(n).reduce(function (t, e) {
									return l(t, e, n[e]);
							  }, t)
							: t.reduce(function (t, e) {
									return e.attributes && e.attributes[n] ? t.push(e) : t.insert(e.insert, (0, g.default)({}, r({}, n, o), e.attributes));
							  }, new m.default());
					}
					function i(t) {
						return t.nodeType !== Node.ELEMENT_NODE ? {} : t["__ql-computed-style"] || (t["__ql-computed-style"] = window.getComputedStyle(t));
					}
					function a(t, e) {
						for (var n = "", o = t.ops.length - 1; 0 <= o && n.length < e.length; --o) {
							var r = t.ops[o];
							if ("string" != typeof r.insert) break;
							n = r.insert + n;
						}
						return n.slice(-1 * e.length) === e;
					}
					function s(t) {
						return 0 !== t.childNodes.length && -1 < ["block", "list-item"].indexOf(i(t).display);
					}
					function u(t, e, n) {
						return l(n, t, !0);
					}
					function c(n, t) {
						var e = _.default.Attributor.Attribute.keys(n),
							o = _.default.Attributor.Class.keys(n),
							r = _.default.Attributor.Style.keys(n),
							i = {};
						return (
							e
								.concat(o)
								.concat(r)
								.forEach(function (t) {
									var e = _.default.query(t, _.default.Scope.ATTRIBUTE);
									(null != e && ((i[e.attrName] = e.value(n)), i[e.attrName])) || (null == (e = C[t]) || (e.attrName !== t && e.keyName !== t) || (i[e.attrName] = e.value(n) || void 0), null == (e = L[t]) || (e.attrName !== t && e.keyName !== t) || ((e = L[t]), (i[e.attrName] = e.value(n) || void 0)));
								}),
							0 < Object.keys(i).length ? l(t, i) : t
						);
					}
					function f(t, e) {
						var n,
							o,
							r = _.default.query(t);
						return null == r || (r.prototype instanceof _.default.Embed ? ((n = {}), null != (o = r.value(t)) && ((n[r.blotName] = o), (e = new m.default().insert(n, r.formats(t))))) : "function" == typeof r.formats && (e = l(e, r.blotName, r.formats(t)))), e;
					}
					function h(t, e) {
						return a(e, "\n") || ((s(t) || (0 < e.length() && t.nextSibling && s(t.nextSibling))) && e.insert("\n")), e;
					}
					function p(t, e) {
						var n;
						return s(t) && null != t.nextElementSibling && !a(e, "\n\n") && ((n = t.offsetHeight + parseFloat(i(t).marginTop) + parseFloat(i(t).marginBottom)), t.nextElementSibling.offsetTop > t.offsetTop + 1.5 * n && e.insert("\n")), e;
					}
					function d(t, e) {
						var n,
							o = t.data;
						return "O:P" === t.parentNode.tagName
							? e.insert(o.trim())
							: 0 === o.trim().length && t.parentNode.classList.contains("ql-clipboard")
							? e
							: (i(t.parentNode).whiteSpace.startsWith("pre") ||
									((n = function (t, e) {
										return (e = e.replace(/[^\u00a0]/g, "")).length < 1 && t ? " " : e;
									}),
									(o = (o = o.replace(/\r\n/g, " ").replace(/\n/g, " ")).replace(/\s\s+/g, n.bind(n, !0))),
									((null == t.previousSibling && s(t.parentNode)) || (null != t.previousSibling && s(t.previousSibling))) && (o = o.replace(/^\s+/, n.bind(n, !1))),
									((null == t.nextSibling && s(t.parentNode)) || (null != t.nextSibling && s(t.nextSibling))) && (o = o.replace(/\s+$/, n.bind(n, !1)))),
							  e.insert(o));
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.matchText = e.matchSpacing = e.matchNewline = e.matchBlot = e.matchAttributor = e.default = void 0);
					var y =
							"function" == typeof Symbol && "symbol" == typeof Symbol.iterator
								? function (t) {
										return typeof t;
								  }
								: function (t) {
										return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
								  },
						b = function (t, e) {
							if (Array.isArray(t)) return t;
							if (Symbol.iterator in Object(t))
								return (function (t, e) {
									var n = [],
										o = !0,
										r = !1,
										i = void 0;
									try {
										for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
									} catch (t) {
										(r = !0), (i = t);
									} finally {
										try {
											!o && a.return && a.return();
										} finally {
											if (r) throw i;
										}
									}
									return n;
								})(t, e);
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						},
						v = function (t, e, n) {
							return e && R(t.prototype, e), n && R(t, n), t;
						},
						g = o(n(2)),
						m = o(n(4)),
						_ = o(n(0)),
						O = o(n(6)),
						w = o(n(10)),
						x = o(n(7)),
						k = n(34),
						E = n(35),
						N = o(n(13)),
						j = n(24),
						A = n(36),
						q = n(37),
						n = n(38),
						T = (0, w.default)("quill:clipboard"),
						P = "__ql-matcher",
						S = [
							[Node.TEXT_NODE, d],
							[Node.TEXT_NODE, h],
							[
								"br",
								function (t, e) {
									return a(e, "\n") || e.insert("\n"), e;
								},
							],
							[Node.ELEMENT_NODE, h],
							[Node.ELEMENT_NODE, f],
							[Node.ELEMENT_NODE, p],
							[Node.ELEMENT_NODE, c],
							[
								Node.ELEMENT_NODE,
								function (t, e) {
									var n = {},
										o = t.style || {};
									return o.fontStyle && "italic" === i(t).fontStyle && (n.italic = !0), o.fontWeight && (i(t).fontWeight.startsWith("bold") || 700 <= parseInt(i(t).fontWeight)) && (n.bold = !0), 0 < Object.keys(n).length && (e = l(e, n)), 0 < parseFloat(o.textIndent || 0) ? new m.default().insert("\t").concat(e) : e;
								},
							],
							[
								"li",
								function (t, e) {
									var n = _.default.query(t);
									if (null == n || "list-item" !== n.blotName || !a(e, "\n")) return e;
									for (var o = -1, r = t.parentNode; !r.classList.contains("ql-clipboard"); ) "list" === (_.default.query(r) || {}).blotName && (o += 1), (r = r.parentNode);
									return o <= 0 ? e : e.compose(new m.default().retain(e.length() - 1).retain(1, { indent: o }));
								},
							],
							["b", u.bind(u, "bold")],
							["i", u.bind(u, "italic")],
							[
								"style",
								function () {
									return new m.default();
								},
							],
						],
						C = [k.AlignAttribute, A.DirectionAttribute].reduce(function (t, e) {
							return (t[e.keyName] = e), t;
						}, {}),
						L = [k.AlignStyle, E.BackgroundStyle, j.ColorStyle, A.DirectionStyle, q.FontStyle, n.SizeStyle].reduce(function (t, e) {
							return (t[e.keyName] = e), t;
						}, {});
					function M(t, n) {
						!(function (t) {
							if (!(t instanceof M)) throw new TypeError("Cannot call a class as a function");
						})(this);
						var o = (function (t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
						})(this, (M.__proto__ || Object.getPrototypeOf(M)).call(this, t, n));
						return (
							o.quill.root.addEventListener("paste", o.onPaste.bind(o)),
							(o.container = o.quill.addContainer("ql-clipboard")),
							o.container.setAttribute("contenteditable", !0),
							o.container.setAttribute("tabindex", -1),
							(o.matchers = []),
							S.concat(o.options.matchers).forEach(function (t) {
								var t = (e = b(t, 2))[0],
									e = e[1];
								(!n.matchVisual && e === p) || o.addMatcher(t, e);
							}),
							o
						);
					}
					function R(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((v =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(M, x.default),
						v(M, [
							{
								key: "addMatcher",
								value: function (t, e) {
									this.matchers.push([t, e]);
								},
							},
							{
								key: "convert",
								value: function (t) {
									if ("string" == typeof t) return (this.container.innerHTML = t.replace(/\>\r?\n +\</g, "><")), this.convert();
									if ((t = this.quill.getFormat(this.quill.selection.savedRange.index))[N.default.blotName]) {
										var e = this.container.innerText;
										return (this.container.innerHTML = ""), new m.default().insert(e, r({}, N.default.blotName, t[N.default.blotName]));
									}
									return (
										(e = this.prepareMatching()),
										(e = (t = b(e, 2))[0]),
										(t = t[1]),
										a(
											(t = (function o(r, i, l) {
												return r.nodeType === r.TEXT_NODE
													? l.reduce(function (t, e) {
															return e(r, t);
													  }, new m.default())
													: r.nodeType === r.ELEMENT_NODE
													? [].reduce.call(
															r.childNodes || [],
															function (t, n) {
																var e = o(n, i, l);
																return (
																	n.nodeType === r.ELEMENT_NODE &&
																		((e = i.reduce(function (t, e) {
																			return e(n, t);
																		}, e)),
																		(e = (n[P] || []).reduce(function (t, e) {
																			return e(n, t);
																		}, e))),
																	t.concat(e)
																);
															},
															new m.default()
													  )
													: new m.default();
											})(this.container, e, t)),
											"\n"
										) &&
											null == t.ops[t.ops.length - 1].attributes &&
											(t = t.compose(new m.default().retain(t.length() - 1).delete(1))),
										T.log("convert", this.container.innerHTML, t),
										(this.container.innerHTML = ""),
										t
									);
								},
							},
							{
								key: "dangerouslyPasteHTML",
								value: function (t, e) {
									var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : O.default.sources.API;
									"string" == typeof t ? (this.quill.setContents(this.convert(t), e), this.quill.setSelection(0, O.default.sources.SILENT)) : ((e = this.convert(e)), this.quill.updateContents(new m.default().retain(t).concat(e), n), this.quill.setSelection(t + e.length(), O.default.sources.SILENT));
								},
							},
							{
								key: "onPaste",
								value: function (t) {
									var e,
										n,
										o,
										r = this;
									!t.defaultPrevented &&
										this.quill.isEnabled() &&
										((e = this.quill.getSelection()),
										(n = new m.default().retain(e.index)),
										(o = this.quill.scrollingContainer.scrollTop),
										this.container.focus(),
										this.quill.selection.update(O.default.sources.SILENT),
										setTimeout(function () {
											(n = n.concat(r.convert()).delete(e.length)), r.quill.updateContents(n, O.default.sources.USER), r.quill.setSelection(n.length() - e.length, O.default.sources.SILENT), (r.quill.scrollingContainer.scrollTop = o), r.quill.focus();
										}, 1));
								},
							},
							{
								key: "prepareMatching",
								value: function () {
									var o = this,
										r = [],
										i = [];
									return (
										this.matchers.forEach(function (t) {
											var e = (t = b(t, 2))[0],
												n = t[1];
											switch (e) {
												case Node.TEXT_NODE:
													i.push(n);
													break;
												case Node.ELEMENT_NODE:
													r.push(n);
													break;
												default:
													[].forEach.call(o.container.querySelectorAll(e), function (t) {
														(t[P] = t[P] || []), t[P].push(n);
													});
											}
										}),
										[r, i]
									);
								},
							},
						]),
						M)).DEFAULTS = { matchers: [], matchVisual: !0 }),
						(e.default = v),
						(e.matchAttributor = c),
						(e.matchBlot = f),
						(e.matchNewline = h),
						(e.matchSpacing = p),
						(e.matchText = d);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t) {
						var e = t.reduce(function (t, e) {
								return t + (e.delete || 0);
							}, 0),
							e = t.length() - e;
						return (
							null != (t = t.ops[t.ops.length - 1]) &&
								(null != t.insert
									? "string" == typeof t.insert && t.insert.endsWith("\n")
									: null != t.attributes &&
									  Object.keys(t.attributes).some(function (t) {
											return null != l.default.query(t, l.default.Scope.BLOCK);
									  })) &&
								--e,
							e
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.getLastChangeIndex = e.default = void 0);
					var i = function (t, e, n) {
							return e && u(t.prototype, e), n && u(t, n), t;
						},
						l = o(n(0)),
						a = o(n(6));
					function s(t, e) {
						!(function (t) {
							if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
						})(this);
						var r = (function (t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
						})(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t, e));
						return (
							(r.lastRecorded = 0),
							(r.ignoreChange = !1),
							r.clear(),
							r.quill.on(a.default.events.EDITOR_CHANGE, function (t, e, n, o) {
								t !== a.default.events.TEXT_CHANGE || r.ignoreChange || (r.options.userOnly && o !== a.default.sources.USER ? r.transform(e) : r.record(e, n));
							}),
							r.quill.keyboard.addBinding({ key: "Z", shortKey: !0 }, r.undo.bind(r)),
							r.quill.keyboard.addBinding({ key: "Z", shortKey: !0, shiftKey: !0 }, r.redo.bind(r)),
							/Win/i.test(navigator.platform) && r.quill.keyboard.addBinding({ key: "Y", shortKey: !0 }, r.redo.bind(r)),
							r
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((i =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(s, o(n(7)).default),
						i(s, [
							{
								key: "change",
								value: function (t, e) {
									var n;
									0 !== this.stack[t].length && ((n = this.stack[t].pop()), this.stack[e].push(n), (this.lastRecorded = 0), (this.ignoreChange = !0), this.quill.updateContents(n[t], a.default.sources.USER), (this.ignoreChange = !1), (t = r(n[t])), this.quill.setSelection(t));
								},
							},
							{
								key: "clear",
								value: function () {
									this.stack = { undo: [], redo: [] };
								},
							},
							{
								key: "cutoff",
								value: function () {
									this.lastRecorded = 0;
								},
							},
							{
								key: "record",
								value: function (t, e) {
									var n, o;
									0 !== t.ops.length && ((this.stack.redo = []), (o = this.quill.getContents().diff(e)), (n = Date.now()), this.lastRecorded + this.options.delay > n && 0 < this.stack.undo.length ? ((e = this.stack.undo.pop()), (o = o.compose(e.undo)), (t = e.redo.compose(t))) : (this.lastRecorded = n), this.stack.undo.push({ redo: t, undo: o }), this.stack.undo.length > this.options.maxStack && this.stack.undo.shift());
								},
							},
							{
								key: "redo",
								value: function () {
									this.change("redo", "undo");
								},
							},
							{
								key: "transform",
								value: function (e) {
									this.stack.undo.forEach(function (t) {
										(t.undo = e.transform(t.undo, !0)), (t.redo = e.transform(t.redo, !0));
									}),
										this.stack.redo.forEach(function (t) {
											(t.undo = e.transform(t.undo, !0)), (t.redo = e.transform(t.redo, !0));
										});
								},
							},
							{
								key: "undo",
								value: function () {
									this.change("undo", "redo");
								},
							},
						]),
						s)).DEFAULTS = { delay: 1e3, maxStack: 100, userOnly: !1 }),
						(e.default = i),
						(e.getLastChangeIndex = r);
				},
				function (t, e, n) {
					"use strict";
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.IndentClass = void 0);
					var o,
						i,
						l,
						n =
							((function (t, e) {
								if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
								(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
							})(a, (n = (n = n(0)) && n.__esModule ? n : { default: n }).default.Attributor.Class),
							(o = a),
							(i = [
								{
									key: "add",
									value: function (t, e) {
										var n;
										return ("+1" !== e && "-1" !== e) || ((n = this.value(t) || 0), (e = "+1" === e ? n + 1 : n - 1)), 0 === e ? (this.remove(t), !0) : r(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "add", this).call(this, t, e);
									},
								},
								{
									key: "canAdd",
									value: function (t, e) {
										return r(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, t, e) || r(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "canAdd", this).call(this, t, parseInt(e));
									},
								},
								{
									key: "value",
									value: function (t) {
										return parseInt(r(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "value", this).call(this, t)) || void 0;
									},
								},
							]) && s(o.prototype, i),
							l && s(o, l),
							new a("indent", "ql-indent", { scope: n.default.Scope.BLOCK, whitelist: [1, 2, 3, 4, 5, 6, 7, 8] }));
					function a() {
						return (
							(function (t) {
								if (!(t instanceof a)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments))
						);
					}
					function s(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					e.IndentClass = n;
				},
				function (t, e, n) {
					"use strict";
					function o() {
						return (
							(function (t) {
								if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(o, ((n = n(3)) && n.__esModule ? n : { default: n }).default),
						((n = o).blotName = "blockquote"),
						(n.tagName = "blockquote"),
						(e.default = n);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
						return e && i(t.prototype, e), n && i(t, n), t;
					};
					function r() {
						return (
							(function (t) {
								if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
						);
					}
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((o =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(r, ((n = n(3)) && n.__esModule ? n : { default: n }).default),
						o(r, null, [
							{
								key: "formats",
								value: function (t) {
									return this.tagName.indexOf(t.tagName) + 1;
								},
							},
						]),
						r)).blotName = "header"),
						(o.tagName = ["H1", "H2", "H3", "H4", "H5", "H6"]),
						(e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					function a(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : a(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.ListItem = void 0);
					function s(t, e, n) {
						return e && p(t.prototype, e), n && p(t, n), t;
					}
					var u = o(n(0)),
						c = o(n(3)),
						n = o(n(23)),
						f =
							(l(h, c.default),
							s(
								h,
								[
									{
										key: "format",
										value: function (t, e) {
											t !== d.blotName || e ? a(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "format", this).call(this, t, e) : this.replaceWith(u.default.create(this.statics.scope));
										},
									},
									{
										key: "remove",
										value: function () {
											null == this.prev && null == this.next ? this.parent.remove() : a(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "remove", this).call(this);
										},
									},
									{
										key: "replaceWith",
										value: function (t, e) {
											return this.parent.isolate(this.offset(this.parent), this.length()), t === this.parent.statics.blotName ? (this.parent.replaceWith(t, e), this) : (this.parent.unwrap(), a(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "replaceWith", this).call(this, t, e));
										},
									},
								],
								[
									{
										key: "formats",
										value: function (t) {
											return t.tagName === this.tagName ? void 0 : a(h.__proto__ || Object.getPrototypeOf(h), "formats", this).call(this, t);
										},
									},
								]
							),
							h);
					function h() {
						return r(this, h), i(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
					}
					function p(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(f.blotName = "list-item"), (f.tagName = "LI");
					var d =
						(l(y, n.default),
						s(y, null, [
							{
								key: "create",
								value: function (t) {
									var e = "ordered" === t ? "OL" : "UL",
										e = a(y.__proto__ || Object.getPrototypeOf(y), "create", this).call(this, e);
									return ("checked" !== t && "unchecked" !== t) || e.setAttribute("data-checked", "checked" === t), e;
								},
							},
							{
								key: "formats",
								value: function (t) {
									return "OL" === t.tagName ? "ordered" : "UL" === t.tagName ? (t.hasAttribute("data-checked") ? ("true" === t.getAttribute("data-checked") ? "checked" : "unchecked") : "bullet") : void 0;
								},
							},
						]),
						s(y, [
							{
								key: "format",
								value: function (t, e) {
									0 < this.children.length && this.children.tail.format(t, e);
								},
							},
							{
								key: "formats",
								value: function () {
									return (t = {}), (e = this.statics.blotName), (n = this.statics.formats(this.domNode)), e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
									var t, e, n;
								},
							},
							{
								key: "insertBefore",
								value: function (t, e) {
									t instanceof f ? a(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "insertBefore", this).call(this, t, e) : ((e = null == e ? this.length() : e.offset(this)), (e = this.split(e)).parent.insertBefore(t, e));
								},
							},
							{
								key: "optimize",
								value: function (t) {
									a(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "optimize", this).call(this, t), null != (t = this.next) && t.prev === this && t.statics.blotName === this.statics.blotName && t.domNode.tagName === this.domNode.tagName && t.domNode.getAttribute("data-checked") === this.domNode.getAttribute("data-checked") && (t.moveChildren(this), t.remove());
								},
							},
							{
								key: "replace",
								value: function (t) {
									var e;
									t.statics.blotName !== this.statics.blotName && ((e = u.default.create(this.statics.defaultChild)), t.moveChildren(e), this.appendChild(e)), a(y.prototype.__proto__ || Object.getPrototypeOf(y.prototype), "replace", this).call(this, t);
								},
							},
						]),
						y);
					function y(n) {
						function t(t) {
							var e;
							t.target.parentNode === n && ((e = o.statics.formats(n)), (t = u.default.find(t.target)), "checked" === e ? t.format("list", "unchecked") : "unchecked" === e && t.format("list", "checked"));
						}
						r(this, y);
						var o = i(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, n));
						return n.addEventListener("touchstart", t), n.addEventListener("mousedown", t), o;
					}
					(d.blotName = "list"), (d.scope = u.default.Scope.BLOCK_BLOT), (d.tagName = ["OL", "UL"]), (d.defaultChild = "list-item"), (d.allowedChildren = [f]), (e.ListItem = f), (e.default = d);
				},
				function (t, e, n) {
					"use strict";
					function o() {
						return (
							(function (t) {
								if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(o, ((n = n(39)) && n.__esModule ? n : { default: n }).default),
						((n = o).blotName = "italic"),
						(n.tagName = ["EM", "I"]),
						(e.default = n);
				},
				function (t, e, n) {
					"use strict";
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
						return e && i(t.prototype, e), n && i(t, n), t;
					};
					function r() {
						return (
							(function (t) {
								if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (r.__proto__ || Object.getPrototypeOf(r)).apply(this, arguments))
						);
					}
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((o =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(r, ((n = n(5)) && n.__esModule ? n : { default: n }).default),
						o(r, null, [
							{
								key: "create",
								value: function (t) {
									return "super" === t
										? document.createElement("sup")
										: "sub" === t
										? document.createElement("sub")
										: (function t(e, n, o) {
												null === e && (e = Function.prototype);
												var r = Object.getOwnPropertyDescriptor(e, n);
												return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
										  })(r.__proto__ || Object.getPrototypeOf(r), "create", this).call(this, t);
								},
							},
							{
								key: "formats",
								value: function (t) {
									return "SUB" === t.tagName ? "sub" : "SUP" === t.tagName ? "super" : void 0;
								},
							},
						]),
						r)).blotName = "script"),
						(o.tagName = ["SUB", "SUP"]),
						(e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function o() {
						return (
							(function (t) {
								if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(o, ((n = n(5)) && n.__esModule ? n : { default: n }).default),
						((n = o).blotName = "strike"),
						(n.tagName = "S"),
						(e.default = n);
				},
				function (t, e, n) {
					"use strict";
					function o() {
						return (
							(function (t) {
								if (!(t instanceof o)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (o.__proto__ || Object.getPrototypeOf(o)).apply(this, arguments))
						);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }),
						(function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(o, ((n = n(5)) && n.__esModule ? n : { default: n }).default),
						((n = o).blotName = "underline"),
						(n.tagName = "U"),
						(e.default = n);
				},
				function (t, e, n) {
					"use strict";
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
							return e && u(t.prototype, e), n && u(t, n), t;
						},
						i = (i = n(0)) && i.__esModule ? i : { default: i },
						l = n(15),
						a = ["alt", "height", "width"];
					function s() {
						return (
							(function (t) {
								if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((o =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(s, i.default.Embed),
						o(
							s,
							[
								{
									key: "format",
									value: function (t, e) {
										-1 < a.indexOf(t) ? (e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t)) : r(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "format", this).call(this, t, e);
									},
								},
							],
							[
								{
									key: "create",
									value: function (t) {
										var e = r(s.__proto__ || Object.getPrototypeOf(s), "create", this).call(this, t);
										return "string" == typeof t && e.setAttribute("src", this.sanitize(t)), e;
									},
								},
								{
									key: "formats",
									value: function (n) {
										return a.reduce(function (t, e) {
											return n.hasAttribute(e) && (t[e] = n.getAttribute(e)), t;
										}, {});
									},
								},
								{
									key: "match",
									value: function (t) {
										return /\.(jpe?g|gif|png)$/.test(t) || /^data:image\/.+;base64/.test(t);
									},
								},
								{
									key: "sanitize",
									value: function (t) {
										return (0, l.sanitize)(t, ["http", "https", "data"]) ? t : "//:0";
									},
								},
								{
									key: "value",
									value: function (t) {
										return t.getAttribute("src");
									},
								},
							]
						),
						s)).blotName = "image"),
						(o.tagName = "IMG"),
						(e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function r(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : r(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					var o = function (t, e, n) {
							return e && u(t.prototype, e), n && u(t, n), t;
						},
						i = n(3),
						l = (n = n(15)) && n.__esModule ? n : { default: n },
						a = ["height", "width"];
					function s() {
						return (
							(function (t) {
								if (!(t instanceof s)) throw new TypeError("Cannot call a class as a function");
							})(this),
							(function (t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
							})(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
						);
					}
					function u(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((o =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(s, i.BlockEmbed),
						o(
							s,
							[
								{
									key: "format",
									value: function (t, e) {
										-1 < a.indexOf(t) ? (e ? this.domNode.setAttribute(t, e) : this.domNode.removeAttribute(t)) : r(s.prototype.__proto__ || Object.getPrototypeOf(s.prototype), "format", this).call(this, t, e);
									},
								},
							],
							[
								{
									key: "create",
									value: function (t) {
										var e = r(s.__proto__ || Object.getPrototypeOf(s), "create", this).call(this, t);
										return e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", !0), e.setAttribute("src", this.sanitize(t)), e;
									},
								},
								{
									key: "formats",
									value: function (n) {
										return a.reduce(function (t, e) {
											return n.hasAttribute(e) && (t[e] = n.getAttribute(e)), t;
										}, {});
									},
								},
								{
									key: "sanitize",
									value: function (t) {
										return l.default.sanitize(t);
									},
								},
								{
									key: "value",
									value: function (t) {
										return t.getAttribute("src");
									},
								},
							]
						),
						s)).blotName = "video"),
						(o.className = "ql-video"),
						(o.tagName = "IFRAME"),
						(e.default = o);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.FormulaBlot = void 0);
					var a = function (t, e, n) {
							return e && h(t.prototype, e), n && h(t, n), t;
						},
						s = o(n(33)),
						u = o(n(6)),
						n = o(n(7)),
						c =
							(l(f, s.default),
							a(f, null, [
								{
									key: "create",
									value: function (t) {
										var e = (function t(e, n, o) {
											null === e && (e = Function.prototype);
											var r = Object.getOwnPropertyDescriptor(e, n);
											return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
										})(f.__proto__ || Object.getPrototypeOf(f), "create", this).call(this, t);
										return "string" == typeof t && (window.katex.render(t, e, { throwOnError: !1, errorColor: "#f00" }), e.setAttribute("data-value", t)), e;
									},
								},
								{
									key: "value",
									value: function (t) {
										return t.getAttribute("data-value");
									},
								},
							]),
							f);
					function f() {
						return r(this, f), i(this, (f.__proto__ || Object.getPrototypeOf(f)).apply(this, arguments));
					}
					function h(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					function p() {
						r(this, p);
						var t = i(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this));
						if (null == window.katex) throw new Error("Formula module requires KaTeX.");
						return t;
					}
					(c.blotName = "formula"),
						(c.className = "ql-formula"),
						(c.tagName = "SPAN"),
						l(p, n.default),
						a(p, null, [
							{
								key: "register",
								value: function () {
									u.default.register(c, !0);
								},
							},
						]),
						(a = p),
						(e.FormulaBlot = c),
						(e.default = a);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.CodeToken = e.CodeBlock = void 0);
					var a = function (t, e, n) {
							return e && p(t.prototype, e), n && p(t, n), t;
						},
						s = o(n(0)),
						u = o(n(6)),
						c = o(n(7)),
						f =
							(l(h, o(n(13)).default),
							a(h, [
								{
									key: "replaceWith",
									value: function (t) {
										(this.domNode.textContent = this.domNode.textContent),
											this.attach(),
											(function t(e, n, o) {
												null === e && (e = Function.prototype);
												var r = Object.getOwnPropertyDescriptor(e, n);
												return void 0 !== r ? ("value" in r ? r.value : void 0 !== (r = r.get) ? r.call(o) : void 0) : null === (e = Object.getPrototypeOf(e)) ? void 0 : t(e, n, o);
											})(h.prototype.__proto__ || Object.getPrototypeOf(h.prototype), "replaceWith", this).call(this, t);
									},
								},
								{
									key: "highlight",
									value: function (t) {
										var e = this.domNode.textContent;
										this.cachedText !== e && ((0 < e.trim().length || null == this.cachedText) && ((this.domNode.innerHTML = t(e)), this.domNode.normalize(), this.attach()), (this.cachedText = e));
									},
								},
							]),
							h);
					function h() {
						return r(this, h), i(this, (h.__proto__ || Object.getPrototypeOf(h)).apply(this, arguments));
					}
					function p(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					f.className = "ql-syntax";
					var d = new s.default.Attributor.Class("token", "hljs", { scope: s.default.Scope.INLINE });
					function y(t, e) {
						r(this, y);
						var n = i(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, t, e));
						if ("function" != typeof n.options.highlight) throw new Error("Syntax module requires highlight.js. Please include the library on the page before Quill.");
						var o = null;
						return (
							n.quill.on(u.default.events.SCROLL_OPTIMIZE, function () {
								clearTimeout(o),
									(o = setTimeout(function () {
										n.highlight(), (o = null);
									}, n.options.interval));
							}),
							n.highlight(),
							n
						);
					}
					((a =
						(l(y, c.default),
						a(y, null, [
							{
								key: "register",
								value: function () {
									u.default.register(d, !0), u.default.register(f, !0);
								},
							},
						]),
						a(y, [
							{
								key: "highlight",
								value: function () {
									var t,
										e = this;
									this.quill.selection.composing ||
										(this.quill.update(u.default.sources.USER),
										(t = this.quill.getSelection()),
										this.quill.scroll.descendants(f).forEach(function (t) {
											t.highlight(e.options.highlight);
										}),
										this.quill.update(u.default.sources.SILENT),
										null != t && this.quill.setSelection(t, u.default.sources.SILENT));
								},
							},
						]),
						y)).DEFAULTS = {
						highlight:
							null == window.hljs
								? null
								: function (t) {
										return window.hljs.highlightAuto(t).value;
								  },
						interval: 1e3,
					}),
						(e.CodeBlock = f),
						(e.CodeToken = d),
						(e.default = a);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function a(t, e, n) {
						var o = document.createElement("button");
						o.setAttribute("type", "button"), o.classList.add("ql-" + e), null != n && (o.value = n), t.appendChild(o);
					}
					function i(e, t) {
						(t = Array.isArray(t[0]) ? t : [t]).forEach(function (t) {
							var l = document.createElement("span");
							l.classList.add("ql-formats"),
								t.forEach(function (t) {
									var e, n, o, r, i;
									"string" == typeof t
										? a(l, t)
										: ((n = t[(e = Object.keys(t)[0])]),
										  Array.isArray(n)
												? ((o = l),
												  (r = e),
												  (t = n),
												  (i = document.createElement("select")).classList.add("ql-" + r),
												  t.forEach(function (t) {
														var e = document.createElement("option");
														!1 !== t ? e.setAttribute("value", t) : e.setAttribute("selected", "selected"), i.appendChild(e);
												  }),
												  o.appendChild(i))
												: a(l, e, n));
								}),
								e.appendChild(l);
						});
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.addControls = e.default = void 0);
					var s = function (t, e) {
							if (Array.isArray(t)) return t;
							if (Symbol.iterator in Object(t))
								return (function (t, e) {
									var n = [],
										o = !0,
										r = !1,
										i = void 0;
									try {
										for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
									} catch (t) {
										(r = !0), (i = t);
									} finally {
										try {
											!o && a.return && a.return();
										} finally {
											if (r) throw i;
										}
									}
									return n;
								})(t, e);
							throw new TypeError("Invalid attempt to destructure non-iterable instance");
						},
						l = function (t, e, n) {
							return e && y(t.prototype, e), n && y(t, n), t;
						},
						u = o(n(4)),
						c = o(n(0)),
						f = o(n(6)),
						h = o(n(10)),
						n = o(n(7)),
						p = (0, h.default)("quill:toolbar");
					function d(t, e) {
						!(function (t) {
							if (!(t instanceof d)) throw new TypeError("Cannot call a class as a function");
						})(this);
						var n = r(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this, t, e));
						if ((Array.isArray(n.options.container) ? (i((o = document.createElement("div")), n.options.container), t.container.parentNode.insertBefore(o, t.container), (n.container = o)) : "string" == typeof n.options.container ? (n.container = document.querySelector(n.options.container)) : (n.container = n.options.container), n.container instanceof HTMLElement))
							return (
								n.container.classList.add("ql-toolbar"),
								(n.controls = []),
								(n.handlers = {}),
								Object.keys(n.options.handlers).forEach(function (t) {
									n.addHandler(t, n.options.handlers[t]);
								}),
								[].forEach.call(n.container.querySelectorAll("button, select"), function (t) {
									n.attach(t);
								}),
								n.quill.on(f.default.events.EDITOR_CHANGE, function (t, e) {
									t === f.default.events.SELECTION_CHANGE && n.update(e);
								}),
								n.quill.on(f.default.events.SCROLL_OPTIMIZE, function () {
									var t = n.quill.selection.getRange(),
										t = s(t, 1)[0];
									n.update(t);
								}),
								n
							);
						var o = p.error("Container required for toolbar", n.options);
						return r(n, o);
					}
					function y(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					((l =
						((function (t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
						})(d, n.default),
						l(d, [
							{
								key: "addHandler",
								value: function (t, e) {
									this.handlers[t] = e;
								},
							},
							{
								key: "attach",
								value: function (i) {
									var l = this,
										a = [].find.call(i.classList, function (t) {
											return 0 === t.indexOf("ql-");
										});
									if (a) {
										if (((a = a.slice("ql-".length)), "BUTTON" === i.tagName && i.setAttribute("type", "button"), null == this.handlers[a])) {
											if (null != this.quill.scroll.whitelist && null == this.quill.scroll.whitelist[a]) return void p.warn("ignoring attaching to disabled format", a, i);
											if (null == c.default.query(a)) return void p.warn("ignoring attaching to nonexistent format", a, i);
										}
										var t = "SELECT" === i.tagName ? "change" : "click";
										i.addEventListener(t, function (t) {
											var e = void 0;
											if ("SELECT" === i.tagName) {
												if (i.selectedIndex < 0) return;
												var n = i.options[i.selectedIndex],
													e = !n.hasAttribute("selected") && (n.value || !1);
											} else (e = !i.classList.contains("ql-active") && (i.value || !i.hasAttribute("value"))), t.preventDefault();
											l.quill.focus();
											var o = l.quill.selection.getRange(),
												r = s(o, 1)[0];
											if (null != l.handlers[a]) l.handlers[a].call(l, e);
											else if (c.default.query(a).prototype instanceof c.default.Embed) {
												if (!(e = prompt("Enter " + a))) return;
												l.quill.updateContents(
													new u.default()
														.retain(r.index)
														.delete(r.length)
														.insert(((n = e), (t = a) in (o = {}) ? Object.defineProperty(o, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (o[t] = n), o)),
													f.default.sources.USER
												);
											} else l.quill.format(a, e, f.default.sources.USER);
											l.update(r);
										}),
											this.controls.push([a, i]);
									}
								},
							},
							{
								key: "update",
								value: function (r) {
									var i = null == r ? {} : this.quill.getFormat(r);
									this.controls.forEach(function (t) {
										var e,
											n = s(t, 2),
											o = n[0];
										"SELECT" === (t = n[1]).tagName ? ((e = void 0), null == r ? (e = null) : null == i[o] ? (e = t.querySelector("option[selected]")) : Array.isArray(i[o]) || ("string" == typeof (n = i[o]) && (n = n.replace(/\"/g, '\\"')), (e = t.querySelector('option[value="' + n + '"]'))), null == e ? ((t.value = ""), (t.selectedIndex = -1)) : (e.selected = !0)) : null == r ? t.classList.remove("ql-active") : t.hasAttribute("value") ? ((e = i[o] === t.getAttribute("value") || (null != i[o] && i[o].toString() === t.getAttribute("value")) || (null == i[o] && !t.getAttribute("value"))), t.classList.toggle("ql-active", e)) : t.classList.toggle("ql-active", null != i[o]);
									});
								},
							},
						]),
						d)).DEFAULTS = {}),
						(l.DEFAULTS = {
							container: null,
							handlers: {
								clean: function () {
									var t,
										e = this,
										n = this.quill.getSelection();
									null != n &&
										(0 == n.length
											? ((t = this.quill.getFormat()),
											  Object.keys(t).forEach(function (t) {
													null != c.default.query(t, c.default.Scope.INLINE) && e.quill.format(t, !1);
											  }))
											: this.quill.removeFormat(n, f.default.sources.USER));
								},
								direction: function (t) {
									var e = this.quill.getFormat().align;
									"rtl" === t && null == e ? this.quill.format("align", "right", f.default.sources.USER) : t || "right" !== e || this.quill.format("align", !1, f.default.sources.USER), this.quill.format("direction", t, f.default.sources.USER);
								},
								indent: function (t) {
									var e = this.quill.getSelection(),
										n = this.quill.getFormat(e),
										e = parseInt(n.indent || 0);
									("+1" !== t && "-1" !== t) || ((t = "+1" === t ? 1 : -1), "rtl" === n.direction && (t *= -1), this.quill.format("indent", e + t, f.default.sources.USER));
								},
								link: function (t) {
									!0 === t && (t = prompt("Enter link URL:")), this.quill.format("link", t, f.default.sources.USER);
								},
								list: function (t) {
									var e = this.quill.getSelection(),
										e = this.quill.getFormat(e);
									"check" === t ? ("checked" === e.list || "unchecked" === e.list ? this.quill.format("list", !1, f.default.sources.USER) : this.quill.format("list", "unchecked", f.default.sources.USER)) : this.quill.format("list", t, f.default.sources.USER);
								},
							},
						}),
						(e.default = l),
						(e.addControls = i);
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <g class="ql-fill ql-color-label"> <polygon points="6 6.868 6 6 5 6 5 7 5.942 7 6 6.868"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points="6.817 5 6 5 6 6 6.38 6 6.817 5"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points="4 11.439 4 11 3 11 3 12 3.755 12 4 11.439"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points="4.63 10 4 10 4 11 4.192 11 4.63 10"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points="13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points="12 6.868 12 6 11.62 6 12 6.868"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points="12.933 9 13 9 13 8 12.495 8 12.933 9"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points="5.5 13 9 5 12.5 13"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <rect class="ql-fill ql-stroke" height=3 width=3 x=4 y=5></rect> <rect class="ql-fill ql-stroke" height=3 width=3 x=11 y=5></rect> <path class="ql-even ql-fill ql-stroke" d=M7,8c0,4.031-3,5-3,5></path> <path class="ql-even ql-fill ql-stroke" d=M14,8c0,4.031-3,5-3,5></path> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>';
				},
				function (t, e) {
					t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-color-label ql-stroke ql-transparent" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points="5.5 11 9 3 12.5 11"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="3 11 5 9 3 7 3 11"></polygon> <line class="ql-stroke ql-fill" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <polygon class="ql-stroke ql-fill" points="15 12 13 10 15 8 15 12"></polygon> <line class="ql-stroke ql-fill" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform="translate(24 18) rotate(-180)"/> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M10,4V14a1,1,0,0,1-2,0V10H3v4a1,1,0,0,1-2,0V4A1,1,0,0,1,3,4V8H8V4a1,1,0,0,1,2,0Zm6.06787,9.209H14.98975V7.59863a.54085.54085,0,0,0-.605-.60547h-.62744a1.01119,1.01119,0,0,0-.748.29688L11.645,8.56641a.5435.5435,0,0,0-.022.8584l.28613.30762a.53861.53861,0,0,0,.84717.0332l.09912-.08789a1.2137,1.2137,0,0,0,.2417-.35254h.02246s-.01123.30859-.01123.60547V13.209H12.041a.54085.54085,0,0,0-.605.60547v.43945a.54085.54085,0,0,0,.605.60547h4.02686a.54085.54085,0,0,0,.605-.60547v-.43945A.54085.54085,0,0,0,16.06787,13.209Z /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewBox="0 0 18 18"> <path class=ql-fill d=M16.73975,13.81445v.43945a.54085.54085,0,0,1-.605.60547H11.855a.58392.58392,0,0,1-.64893-.60547V14.0127c0-2.90527,3.39941-3.42187,3.39941-4.55469a.77675.77675,0,0,0-.84717-.78125,1.17684,1.17684,0,0,0-.83594.38477c-.2749.26367-.561.374-.85791.13184l-.4292-.34082c-.30811-.24219-.38525-.51758-.1543-.81445a2.97155,2.97155,0,0,1,2.45361-1.17676,2.45393,2.45393,0,0,1,2.68408,2.40918c0,2.45312-3.1792,2.92676-3.27832,3.93848h2.79443A.54085.54085,0,0,1,16.73975,13.81445ZM9,3A.99974.99974,0,0,0,8,4V8H3V4A1,1,0,0,0,1,4V14a1,1,0,0,0,2,0V10H8v4a1,1,0,0,0,2,0V4A.99974.99974,0,0,0,9,3Z /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class="ql-fill ql-stroke" points="3 7 3 11 5 9 3 7"></polyline> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="5 7 5 11 3 9 5 7"></polyline> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class="ql-even ql-stroke" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class="ql-even ql-stroke" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class="ql-stroke ql-thin" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class="ql-stroke ql-thin" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class="ql-stroke ql-thin" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>';
				},
				function (t, e) {
					t.exports = '<svg class="" viewbox="0 0 18 18"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points="3 4 4 5 6 3"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points="3 14 4 15 6 13"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points="3 9 4 10 6 8"></polyline> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <line class="ql-stroke ql-thin" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>';
				},
				function (t, e) {
					t.exports = '<svg viewbox="0 0 18 18"> <polygon class=ql-stroke points="7 11 9 13 11 11 7 11"></polygon> <polygon class=ql-stroke points="7 7 9 5 11 7 7 7"></polygon> </svg>';
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function i(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function l(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function r(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					function a(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : a(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = e.BubbleTooltip = void 0);
					function s(t, e, n) {
						return e && v(t.prototype, e), n && v(t, n), t;
					}
					var u = o(n(2)),
						c = o(n(9)),
						f = n(44),
						h = o(f),
						p = n(22),
						d = o(n(26)),
						y = [
							["bold", "italic", "link"],
							[{ header: 1 }, { header: 2 }, "blockquote"],
						];
					function b(t, e) {
						return i(this, b), null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = y), (e = l(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this, t, e))).quill.container.classList.add("ql-bubble"), e;
					}
					function v(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(n =
						(r(b, h.default),
						s(b, [
							{
								key: "extendToolbar",
								value: function (t) {
									(this.tooltip = new g(this.quill, this.options.bounds)), this.tooltip.root.appendChild(t.container), this.buildButtons([].slice.call(t.container.querySelectorAll("button")), d.default), this.buildPickers([].slice.call(t.container.querySelectorAll("select")), d.default);
								},
							},
						]),
						b)).DEFAULTS = (0, u.default)(!0, {}, h.default.DEFAULTS, {
						modules: {
							toolbar: {
								handlers: {
									link: function (t) {
										t ? this.quill.theme.tooltip.edit() : this.quill.format("link", !1);
									},
								},
							},
						},
					});
					var g =
						(r(m, f.BaseTooltip),
						s(m, [
							{
								key: "listen",
								value: function () {
									var e = this;
									a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "listen", this).call(this),
										this.root.querySelector(".ql-close").addEventListener("click", function () {
											e.root.classList.remove("ql-editing");
										}),
										this.quill.on(c.default.events.SCROLL_OPTIMIZE, function () {
											setTimeout(function () {
												var t;
												e.root.classList.contains("ql-hidden") || (null != (t = e.quill.getSelection()) && e.position(e.quill.getBounds(t)));
											}, 1);
										});
								},
							},
							{
								key: "cancel",
								value: function () {
									this.show();
								},
							},
							{
								key: "position",
								value: function (t) {
									var e = a(m.prototype.__proto__ || Object.getPrototypeOf(m.prototype), "position", this).call(this, t);
									if ((((t = this.root.querySelector(".ql-tooltip-arrow")).style.marginLeft = ""), 0 === e)) return e;
									t.style.marginLeft = -1 * e - t.offsetWidth / 2 + "px";
								},
							},
						]),
						m);
					function m(t, e) {
						i(this, m);
						var r = l(this, (m.__proto__ || Object.getPrototypeOf(m)).call(this, t, e));
						return (
							r.quill.on(c.default.events.EDITOR_CHANGE, function (t, e, n, o) {
								t === c.default.events.SELECTION_CHANGE && (null != e && 0 < e.length && o === c.default.sources.USER ? (r.show(), (r.root.style.left = "0px"), (r.root.style.width = ""), (r.root.style.width = r.root.offsetWidth + "px"), 1 === (t = r.quill.getLines(e.index, e.length)).length ? r.position(r.quill.getBounds(e)) : ((o = t[t.length - 1]), (t = r.quill.getIndex(o)), (e = Math.min(o.length() - 1, e.index + e.length - t)), (e = r.quill.getBounds(new p.Range(t, e))), r.position(e))) : document.activeElement !== r.textbox && r.quill.hasFocus() && r.hide());
							}),
							r
						);
					}
					(g.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>', '<div class="ql-tooltip-editor">', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-close"></a>', "</div>"].join("")), (e.BubbleTooltip = g), (e.default = n);
				},
				function (t, e, n) {
					"use strict";
					function o(t) {
						return t && t.__esModule ? t : { default: t };
					}
					function r(t, e) {
						if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
					}
					function i(t, e) {
						if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
					}
					function l(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						(t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
					}
					function a(t, e, n) {
						null === t && (t = Function.prototype);
						var o = Object.getOwnPropertyDescriptor(t, e);
						return void 0 !== o ? ("value" in o ? o.value : void 0 !== (o = o.get) ? o.call(n) : void 0) : null === (t = Object.getPrototypeOf(t)) ? void 0 : a(t, e, n);
					}
					Object.defineProperty(e, "__esModule", { value: !0 });
					function s(t, e, n) {
						return e && g(t.prototype, e), n && g(t, n), t;
					}
					var u = o(n(2)),
						c = o(n(9)),
						f = n(44),
						h = o(f),
						p = o(n(15)),
						d = n(22),
						y = o(n(26)),
						b = [[{ header: ["1", "2", "3", !1] }], ["bold", "italic", "underline", "link"], [{ list: "ordered" }, { list: "bullet" }], ["clean"]];
					function v(t, e) {
						return r(this, v), null != e.modules.toolbar && null == e.modules.toolbar.container && (e.modules.toolbar.container = b), (e = i(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, t, e))).quill.container.classList.add("ql-snow"), e;
					}
					function g(t, e) {
						for (var n = 0; n < e.length; n++) {
							var o = e[n];
							(o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
						}
					}
					(n =
						(l(v, h.default),
						s(v, [
							{
								key: "extendToolbar",
								value: function (n) {
									n.container.classList.add("ql-snow"),
										this.buildButtons([].slice.call(n.container.querySelectorAll("button")), y.default),
										this.buildPickers([].slice.call(n.container.querySelectorAll("select")), y.default),
										(this.tooltip = new m(this.quill, this.options.bounds)),
										n.container.querySelector(".ql-link") &&
											this.quill.keyboard.addBinding({ key: "K", shortKey: !0 }, function (t, e) {
												n.handlers.link.call(n, !e.format.link);
											});
								},
							},
						]),
						v)).DEFAULTS = (0, u.default)(!0, {}, h.default.DEFAULTS, {
						modules: {
							toolbar: {
								handlers: {
									link: function (t) {
										t ? null != (t = this.quill.getSelection()) && 0 != t.length && ((t = this.quill.getText(t)), /^\S+@\S+\.\S+$/.test(t) && 0 !== t.indexOf("mailto:") && (t = "mailto:" + t), this.quill.theme.tooltip.edit("link", t)) : this.quill.format("link", !1);
									},
								},
							},
						},
					});
					var m =
						(l(_, f.BaseTooltip),
						s(_, [
							{
								key: "listen",
								value: function () {
									var r = this;
									a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "listen", this).call(this),
										this.root.querySelector("a.ql-action").addEventListener("click", function (t) {
											r.root.classList.contains("ql-editing") ? r.save() : r.edit("link", r.preview.textContent), t.preventDefault();
										}),
										this.root.querySelector("a.ql-remove").addEventListener("click", function (t) {
											var e;
											null != r.linkRange && ((e = r.linkRange), r.restoreFocus(), r.quill.formatText(e, "link", !1, c.default.sources.USER), delete r.linkRange), t.preventDefault(), r.hide();
										}),
										this.quill.on(c.default.events.SELECTION_CHANGE, function (t, e, n) {
											if (null != t) {
												if (0 === t.length && n === c.default.sources.USER) {
													var o = (n = (function (t, e) {
															if (Array.isArray(t)) return t;
															if (Symbol.iterator in Object(t))
																return (function (t, e) {
																	var n = [],
																		o = !0,
																		r = !1,
																		i = void 0;
																	try {
																		for (var l, a = t[Symbol.iterator](); !(o = (l = a.next()).done) && (n.push(l.value), !e || n.length !== e); o = !0);
																	} catch (t) {
																		(r = !0), (i = t);
																	} finally {
																		try {
																			!o && a.return && a.return();
																		} finally {
																			if (r) throw i;
																		}
																	}
																	return n;
																})(t, e);
															throw new TypeError("Invalid attempt to destructure non-iterable instance");
														})((o = r.quill.scroll.descendant(p.default, t.index)), 2))[0],
														n = n[1];
													if (null != o) return (r.linkRange = new d.Range(t.index - n, o.length())), (o = p.default.formats(o.domNode)), (r.preview.textContent = o), r.preview.setAttribute("href", o), r.show(), void r.position(r.quill.getBounds(r.linkRange));
												} else delete r.linkRange;
												r.hide();
											}
										});
								},
							},
							{
								key: "show",
								value: function () {
									a(_.prototype.__proto__ || Object.getPrototypeOf(_.prototype), "show", this).call(this), this.root.removeAttribute("data-mode");
								},
							},
						]),
						_);
					function _(t, e) {
						return r(this, _), ((e = i(this, (_.__proto__ || Object.getPrototypeOf(_)).call(this, t, e))).preview = e.root.querySelector("a.ql-preview")), e;
					}
					(m.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join("")), (e.default = n);
				},
			]),
		(o.c = r),
		(o.d = function (t, e, n) {
			o.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
		}),
		(o.n = function (t) {
			var e =
				t && t.__esModule
					? function () {
							return t.default;
					  }
					: function () {
							return t;
					  };
			return o.d(e, "a", e), e;
		}),
		(o.o = function (t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		}),
		(o.p = ""),
		o((o.s = 45)).default
	);
	function o(t) {
		if (r[t]) return r[t].exports;
		var e = (r[t] = { i: t, l: !1, exports: {} });
		return n[t].call(e.exports, e, e.exports, o), (e.l = !0), e.exports;
	}
	var n, r;
});
