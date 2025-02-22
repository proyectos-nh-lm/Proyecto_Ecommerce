!(function (h) {
	"use strict";
	function s(e, t, n) {
		for (var r, o, a, e = h(e), n = e.clone(t, n), i = e.find("textarea").add(e.filter("textarea")), l = n.find("textarea").add(n.filter("textarea")), c = e.find("select").add(e.filter("select")), d = n.find("select").add(n.filter("select")), s = e.find("canvas").add(e.filter("canvas")), f = n.find("canvas").add(n.filter("canvas")), p = 0, u = i.length; p < u; ++p) h(l[p]).val(h(i[p]).val());
		for (p = 0, u = c.length; p < u; ++p) for (r = 0, o = c[p].options.length; r < o; ++r) !0 === c[p].options[r].selected && (d[p].options[r].selected = !0);
		for (p = 0, u = s.length; p < u; ++p) (a = s[p].getContext("2d")) && (f[p].getContext("2d").drawImage(s[p], 0, 0), h(f[p]).attr("data-jquery-print", a.canvas.toDataURL()));
		return n;
	}
	function f(t) {
		var n = h("");
		try {
			n = s(t);
		} catch (e) {
			n = h("<span />").html(t);
		}
		return n;
	}
	function p(t, e, n) {
		var r = h.Deferred();
		try {
			t = t.contentWindow || t.contentDocument || t;
			try {
				t.resizeTo(window.innerWidth, window.innerHeight);
			} catch (e) {
				console.warn(e);
			}
			var o = t.document || t.contentDocument || t;
			n.doctype && o.write(n.doctype), o.write(e);
			try {
				for (var a = o.querySelectorAll("canvas"), i = 0; i < a.length; i++) {
					var l = a[i].getContext("2d"),
						c = new Image();
					(c.onload = function () {
						l.drawImage(c, 0, 0);
					}),
						(c.src = a[i].getAttribute("data-jquery-print"));
				}
			} catch (e) {
				console.warn(e);
			}
			o.close();
			var d = !1,
				s = function () {
					if (!d) {
						t.focus();
						try {
							t.document.execCommand("print", !1, null) || t.print(), h("body").focus();
						} catch (e) {
							t.print();
						}
						t.close(), (d = !0), r.resolve();
					}
				};
			h(t).on("load", s), setTimeout(s, n.timeout);
		} catch (e) {
			r.reject(e);
		}
		return r;
	}
	function u(e, t) {
		return p(window.open(), e, t).always(function () {
			try {
				t.deferred.resolve();
			} catch (e) {
				console.warn("Error notifying deferred", e);
			}
		});
	}
	function y(e) {
		return "object" == typeof Node ? e instanceof Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
	}
	h.print = h.fn.print = function () {
		var e = this;
		y((e = e instanceof h ? e.get(0) : e)) ? ((o = h(e)), 0 < arguments.length && (t = arguments[0])) : 0 < arguments.length ? (y((o = h(arguments[0]))[0]) ? 1 < arguments.length && (t = arguments[1]) : ((t = arguments[0]), (o = h("html")))) : (o = h("html"));
		var e = { globalStyles: !0, mediaPrint: !1, stylesheet: null, noPrintSelector: ".no-print", iframe: !0, append: null, prepend: null, manuallyCopyFormValues: !0, deferred: h.Deferred(), timeout: 750, title: null, doctype: "<!doctype html>" },
			t = h.extend({}, e, t || {}),
			n = h("");
		if ((t.globalStyles ? (n = h("style, link, meta, base, title")) : t.mediaPrint && (n = h("link[media=print]")), t.stylesheet)) {
			(h.isArray || Array.isArray)(t.stylesheet) || (t.stylesheet = [t.stylesheet]);
			for (var r = 0; r < t.stylesheet.length; r++) n = h.merge(n, h('<link rel="stylesheet" href="' + t.stylesheet[r] + '">'));
		}
		var o = s(o, !0, !0);
		(o = h("<span/>").append(o)).find(t.noPrintSelector).remove(),
			o.append(s(n)),
			t.title && (0 === (d = h("title", o)).length && ((d = h("<title />")), o.append(d)), d.text(t.title)),
			o.append(f(t.append)),
			o.prepend(f(t.prepend)),
			t.manuallyCopyFormValues &&
				(o.find("input").each(function () {
					var e = h(this);
					e.is("[type='radio']") || e.is("[type='checkbox']") ? e.prop("checked") && e.attr("checked", "checked") : e.attr("value", e.val());
				}),
				o.find("select").each(function () {
					h(this).find(":selected").attr("selected", "selected");
				}),
				o.find("textarea").each(function () {
					var e = h(this);
					e.text(e.val());
				}));
		var a,
			i,
			l,
			c,
			d = o.html();
		try {
			t.deferred.notify("generated_markup", d, o);
		} catch (e) {
			console.warn("Error notifying deferred", e);
		}
		if ((o.remove(), t.iframe))
			try {
				(a = d),
					(l = h((i = t).iframe + "")),
					(c = l.length),
					p((l = 0 === c ? h('<iframe height="0" width="0" border="0" wmode="Opaque"/>').prependTo("body").css({ position: "absolute", top: -999, left: -999 }) : l).get(0), a, i)
						.done(function () {
							setTimeout(function () {
								0 === c && l.remove();
							}, 1e3);
						})
						.fail(function (e) {
							console.error("Failed to print from iframe", e), u(a, i);
						})
						.always(function () {
							try {
								i.deferred.resolve();
							} catch (e) {
								console.warn("Error notifying deferred", e);
							}
						});
			} catch (e) {
				console.error("Failed to print from iframe", e.stack, e.message), u(d, t);
			}
		else u(d, t);
		return this;
	};
})(jQuery);
