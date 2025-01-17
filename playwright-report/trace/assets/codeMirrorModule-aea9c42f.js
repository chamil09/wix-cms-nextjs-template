import { n as fu, o as cu } from './wsPort-fb5048bf.js';
var fa = { exports: {} };
(function (An, pi) {
  (function (X, lt) {
    An.exports = lt();
  })(cu, function () {
    var X = navigator.userAgent,
      lt = navigator.platform,
      ue = /gecko\/\d/i.test(X),
      Be = /MSIE \d/.test(X),
      Lt = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(X),
      ye = /Edge\/(\d+)/.exec(X),
      L = Be || Lt || ye,
      Y = L && (Be ? document.documentMode || 6 : +(ye || Lt)[1]),
      W = !ye && /WebKit\//.test(X),
      Ue = W && /Qt\/\d+\.\d+/.test(X),
      Ze = !ye && /Chrome\/(\d+)/.exec(X),
      at = Ze && +Ze[1],
      Ne = /Opera\//.test(X),
      mt = /Apple Computer/.test(navigator.vendor),
      Te = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(X),
      Ge = /PhantomJS/.test(X),
      ie = mt && (/Mobile\/\w+/.test(X) || navigator.maxTouchPoints > 2),
      Ce = /Android/.test(X),
      We =
        ie || Ce || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(X),
      me = ie || /Mac/.test(lt),
      st = /\bCrOS\b/.test(X),
      he = /win/i.test(lt),
      be = Ne && X.match(/Version\/(\d*\.\d*)/);
    be && (be = Number(be[1])), be && be >= 15 && ((Ne = !1), (W = !0));
    var Bt = me && (Ue || (Ne && (be == null || be < 12.11))),
      Tt = ue || (L && Y >= 9);
    function ut(e) {
      return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
    }
    var ve = function (e, t) {
      var n = e.className,
        r = ut(t).exec(n);
      if (r) {
        var i = n.slice(r.index + r[0].length);
        e.className = n.slice(0, r.index) + (i ? r[1] + i : '');
      }
    };
    function S(e) {
      for (var t = e.childNodes.length; t > 0; --t) e.removeChild(e.firstChild);
      return e;
    }
    function F(e, t) {
      return S(e).appendChild(t);
    }
    function p(e, t, n, r) {
      var i = document.createElement(e);
      if (
        (n && (i.className = n),
        r && (i.style.cssText = r),
        typeof t == 'string')
      )
        i.appendChild(document.createTextNode(t));
      else if (t) for (var o = 0; o < t.length; ++o) i.appendChild(t[o]);
      return i;
    }
    function M(e, t, n, r) {
      var i = p(e, t, n, r);
      return i.setAttribute('role', 'presentation'), i;
    }
    var D;
    document.createRange
      ? (D = function (e, t, n, r) {
          var i = document.createRange();
          return i.setEnd(r || e, n), i.setStart(e, t), i;
        })
      : (D = function (e, t, n) {
          var r = document.body.createTextRange();
          try {
            r.moveToElementText(e.parentNode);
          } catch {
            return r;
          }
          return (
            r.collapse(!0),
            r.moveEnd('character', n),
            r.moveStart('character', t),
            r
          );
        });
    function m(e, t) {
      if ((t.nodeType == 3 && (t = t.parentNode), e.contains))
        return e.contains(t);
      do if ((t.nodeType == 11 && (t = t.host), t == e)) return !0;
      while ((t = t.parentNode));
    }
    function g(e) {
      var t;
      try {
        t = e.activeElement;
      } catch {
        t = e.body || null;
      }
      for (; t && t.shadowRoot && t.shadowRoot.activeElement; )
        t = t.shadowRoot.activeElement;
      return t;
    }
    function C(e, t) {
      var n = e.className;
      ut(t).test(n) || (e.className += (n ? ' ' : '') + t);
    }
    function z(e, t) {
      for (var n = e.split(' '), r = 0; r < n.length; r++)
        n[r] && !ut(n[r]).test(t) && (t += ' ' + n[r]);
      return t;
    }
    var K = function (e) {
      e.select();
    };
    ie
      ? (K = function (e) {
          (e.selectionStart = 0), (e.selectionEnd = e.value.length);
        })
      : L &&
        (K = function (e) {
          try {
            e.select();
          } catch {}
        });
    function Q(e) {
      return e.display.wrapper.ownerDocument;
    }
    function Fe(e) {
      return Q(e).defaultView;
    }
    function Ae(e) {
      var t = Array.prototype.slice.call(arguments, 1);
      return function () {
        return e.apply(null, t);
      };
    }
    function G(e, t, n) {
      t || (t = {});
      for (var r in e)
        e.hasOwnProperty(r) &&
          (n !== !1 || !t.hasOwnProperty(r)) &&
          (t[r] = e[r]);
      return t;
    }
    function _(e, t, n, r, i) {
      t == null && ((t = e.search(/[^\s\u00a0]/)), t == -1 && (t = e.length));
      for (var o = r || 0, l = i || 0; ; ) {
        var a = e.indexOf('	', o);
        if (a < 0 || a >= t) return l + (t - o);
        (l += a - o), (l += n - (l % n)), (o = a + 1);
      }
    }
    var J = function () {
      (this.id = null),
        (this.f = null),
        (this.time = 0),
        (this.handler = Ae(this.onTimeout, this));
    };
    (J.prototype.onTimeout = function (e) {
      (e.id = 0),
        e.time <= +new Date()
          ? e.f()
          : setTimeout(e.handler, e.time - +new Date());
    }),
      (J.prototype.set = function (e, t) {
        this.f = t;
        var n = +new Date() + e;
        (!this.id || n < this.time) &&
          (clearTimeout(this.id),
          (this.id = setTimeout(this.handler, e)),
          (this.time = n));
      });
    function $(e, t) {
      for (var n = 0; n < e.length; ++n) if (e[n] == t) return n;
      return -1;
    }
    var Mr = 50,
      se = {
        toString: function () {
          return 'CodeMirror.Pass';
        },
      },
      pe = { scroll: !1 },
      Et = { origin: '*mouse' },
      It = { origin: '+move' };
    function bt(e, t, n) {
      for (var r = 0, i = 0; ; ) {
        var o = e.indexOf('	', r);
        o == -1 && (o = e.length);
        var l = o - r;
        if (o == e.length || i + l >= t) return r + Math.min(l, t - i);
        if (((i += o - r), (i += n - (i % n)), (r = o + 1), i >= t)) return r;
      }
    }
    var ft = [''];
    function pt(e) {
      for (; ft.length <= e; ) ft.push(te(ft) + ' ');
      return ft[e];
    }
    function te(e) {
      return e[e.length - 1];
    }
    function Ut(e, t) {
      for (var n = [], r = 0; r < e.length; r++) n[r] = t(e[r], r);
      return n;
    }
    function Oe(e, t, n) {
      for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; ) r++;
      e.splice(r, 0, t);
    }
    function Kt() {}
    function vr(e, t) {
      var n;
      return (
        Object.create
          ? (n = Object.create(e))
          : ((Kt.prototype = e), (n = new Kt())),
        t && G(t, n),
        n
      );
    }
    var Qr =
      /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function tr(e) {
      return (
        /\w/.test(e) ||
        (e > '' && (e.toUpperCase() != e.toLowerCase() || Qr.test(e)))
      );
    }
    function Gt(e, t) {
      return t
        ? t.source.indexOf('\\w') > -1 && tr(e)
          ? !0
          : t.test(e)
        : tr(e);
    }
    function U(e) {
      for (var t in e) if (e.hasOwnProperty(t) && e[t]) return !1;
      return !0;
    }
    var q =
      /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function H(e) {
      return e.charCodeAt(0) >= 768 && q.test(e);
    }
    function re(e, t, n) {
      for (; (n < 0 ? t > 0 : t < e.length) && H(e.charAt(t)); ) t += n;
      return t;
    }
    function V(e, t, n) {
      for (var r = t > n ? -1 : 1; ; ) {
        if (t == n) return t;
        var i = (t + n) / 2,
          o = r < 0 ? Math.ceil(i) : Math.floor(i);
        if (o == t) return e(o) ? t : n;
        e(o) ? (n = o) : (t = o + r);
      }
    }
    function vt(e, t, n, r) {
      if (!e) return r(t, n, 'ltr', 0);
      for (var i = !1, o = 0; o < e.length; ++o) {
        var l = e[o];
        ((l.from < n && l.to > t) || (t == n && l.to == t)) &&
          (r(
            Math.max(l.from, t),
            Math.min(l.to, n),
            l.level == 1 ? 'rtl' : 'ltr',
            o
          ),
          (i = !0));
      }
      i || r(t, n, 'ltr');
    }
    var xt = null;
    function wt(e, t, n) {
      var r;
      xt = null;
      for (var i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.from < t && o.to > t) return i;
        o.to == t && (o.from != o.to && n == 'before' ? (r = i) : (xt = i)),
          o.from == t && (o.from != o.to && n != 'before' ? (r = i) : (xt = i));
      }
      return r ?? xt;
    }
    var vi = (function () {
      var e =
          'bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN',
        t =
          'nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111';
      function n(u) {
        return u <= 247
          ? e.charAt(u)
          : 1424 <= u && u <= 1524
          ? 'R'
          : 1536 <= u && u <= 1785
          ? t.charAt(u - 1536)
          : 1774 <= u && u <= 2220
          ? 'r'
          : 8192 <= u && u <= 8203
          ? 'w'
          : u == 8204
          ? 'b'
          : 'L';
      }
      var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,
        i = /[stwN]/,
        o = /[LRr]/,
        l = /[Lb1n]/,
        a = /[1n]/;
      function s(u, c, h) {
        (this.level = u), (this.from = c), (this.to = h);
      }
      return function (u, c) {
        var h = c == 'ltr' ? 'L' : 'R';
        if (u.length == 0 || (c == 'ltr' && !r.test(u))) return !1;
        for (var b = u.length, y = [], w = 0; w < b; ++w)
          y.push(n(u.charCodeAt(w)));
        for (var k = 0, T = h; k < b; ++k) {
          var N = y[k];
          N == 'm' ? (y[k] = T) : (T = N);
        }
        for (var E = 0, A = h; E < b; ++E) {
          var I = y[E];
          I == '1' && A == 'r'
            ? (y[E] = 'n')
            : o.test(I) && ((A = I), I == 'r' && (y[E] = 'R'));
        }
        for (var B = 1, R = y[0]; B < b - 1; ++B) {
          var ee = y[B];
          ee == '+' && R == '1' && y[B + 1] == '1'
            ? (y[B] = '1')
            : ee == ',' &&
              R == y[B + 1] &&
              (R == '1' || R == 'n') &&
              (y[B] = R),
            (R = ee);
        }
        for (var ce = 0; ce < b; ++ce) {
          var _e = y[ce];
          if (_e == ',') y[ce] = 'N';
          else if (_e == '%') {
            var xe = void 0;
            for (xe = ce + 1; xe < b && y[xe] == '%'; ++xe);
            for (
              var dt =
                  (ce && y[ce - 1] == '!') || (xe < b && y[xe] == '1')
                    ? '1'
                    : 'N',
                nt = ce;
              nt < xe;
              ++nt
            )
              y[nt] = dt;
            ce = xe - 1;
          }
        }
        for (var Me = 0, it = h; Me < b; ++Me) {
          var Ke = y[Me];
          it == 'L' && Ke == '1' ? (y[Me] = 'L') : o.test(Ke) && (it = Ke);
        }
        for (var Ie = 0; Ie < b; ++Ie)
          if (i.test(y[Ie])) {
            var De = void 0;
            for (De = Ie + 1; De < b && i.test(y[De]); ++De);
            for (
              var Se = (Ie ? y[Ie - 1] : h) == 'L',
                ot = (De < b ? y[De] : h) == 'L',
                jr = Se == ot ? (Se ? 'L' : 'R') : h,
                pr = Ie;
              pr < De;
              ++pr
            )
              y[pr] = jr;
            Ie = De - 1;
          }
        for (var je = [], Rt, Re = 0; Re < b; )
          if (l.test(y[Re])) {
            var so = Re;
            for (++Re; Re < b && l.test(y[Re]); ++Re);
            je.push(new s(0, so, Re));
          } else {
            var er = Re,
              Lr = je.length,
              Tr = c == 'rtl' ? 1 : 0;
            for (++Re; Re < b && y[Re] != 'L'; ++Re);
            for (var $e = er; $e < Re; )
              if (a.test(y[$e])) {
                er < $e && (je.splice(Lr, 0, new s(1, er, $e)), (Lr += Tr));
                var Zr = $e;
                for (++$e; $e < Re && a.test(y[$e]); ++$e);
                je.splice(Lr, 0, new s(2, Zr, $e)), (Lr += Tr), (er = $e);
              } else ++$e;
            er < Re && je.splice(Lr, 0, new s(1, er, Re));
          }
        return (
          c == 'ltr' &&
            (je[0].level == 1 &&
              (Rt = u.match(/^\s+/)) &&
              ((je[0].from = Rt[0].length),
              je.unshift(new s(0, 0, Rt[0].length))),
            te(je).level == 1 &&
              (Rt = u.match(/\s+$/)) &&
              ((te(je).to -= Rt[0].length),
              je.push(new s(0, b - Rt[0].length, b)))),
          c == 'rtl' ? je.reverse() : je
        );
      };
    })();
    function kt(e, t) {
      var n = e.order;
      return n == null && (n = e.order = vi(e.text, t)), n;
    }
    var On = [],
      O = function (e, t, n) {
        if (e.addEventListener) e.addEventListener(t, n, !1);
        else if (e.attachEvent) e.attachEvent('on' + t, n);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || On).concat(n);
        }
      };
    function Jr(e, t) {
      return (e._handlers && e._handlers[t]) || On;
    }
    function qe(e, t, n) {
      if (e.removeEventListener) e.removeEventListener(t, n, !1);
      else if (e.detachEvent) e.detachEvent('on' + t, n);
      else {
        var r = e._handlers,
          i = r && r[t];
        if (i) {
          var o = $(i, n);
          o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)));
        }
      }
    }
    function de(e, t) {
      var n = Jr(e, t);
      if (n.length)
        for (
          var r = Array.prototype.slice.call(arguments, 2), i = 0;
          i < n.length;
          ++i
        )
          n[i].apply(null, r);
    }
    function we(e, t, n) {
      return (
        typeof t == 'string' &&
          (t = {
            type: t,
            preventDefault: function () {
              this.defaultPrevented = !0;
            },
          }),
        de(e, n || t.type, e, t),
        Vr(t) || t.codemirrorIgnore
      );
    }
    function En(e) {
      var t = e._handlers && e._handlers.cursorActivity;
      if (t)
        for (
          var n =
              e.curOp.cursorActivityHandlers ||
              (e.curOp.cursorActivityHandlers = []),
            r = 0;
          r < t.length;
          ++r
        )
          $(n, t[r]) == -1 && n.push(t[r]);
    }
    function Qe(e, t) {
      return Jr(e, t).length > 0;
    }
    function Je(e) {
      (e.prototype.on = function (t, n) {
        O(this, t, n);
      }),
        (e.prototype.off = function (t, n) {
          qe(this, t, n);
        });
    }
    function Xe(e) {
      e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
    }
    function gr(e) {
      e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
    }
    function Vr(e) {
      return e.defaultPrevented != null
        ? e.defaultPrevented
        : e.returnValue == !1;
    }
    function qt(e) {
      Xe(e), gr(e);
    }
    function et(e) {
      return e.target || e.srcElement;
    }
    function $r(e) {
      var t = e.which;
      return (
        t == null &&
          (e.button & 1
            ? (t = 1)
            : e.button & 2
            ? (t = 3)
            : e.button & 4 && (t = 2)),
        me && e.ctrlKey && t == 1 && (t = 3),
        t
      );
    }
    var gi = (function () {
        if (L && Y < 9) return !1;
        var e = p('div');
        return 'draggable' in e || 'dragDrop' in e;
      })(),
      St;
    function yi(e) {
      if (St == null) {
        var t = p('span', '​');
        F(e, p('span', [t, document.createTextNode('x')])),
          e.firstChild.offsetHeight != 0 &&
            (St = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(L && Y < 8));
      }
      var n = St
        ? p('span', '​')
        : p(
            'span',
            ' ',
            null,
            'display: inline-block; width: 1px; margin-right: -1px'
          );
      return n.setAttribute('cm-text', ''), n;
    }
    var Dr;
    function In(e) {
      if (Dr != null) return Dr;
      var t = F(e, document.createTextNode('AخA')),
        n = D(t, 0, 1).getBoundingClientRect(),
        r = D(t, 1, 2).getBoundingClientRect();
      return S(e), !n || n.left == n.right ? !1 : (Dr = r.right - n.right < 3);
    }
    var en =
        `

b`.split(/\n/).length != 3
          ? function (e) {
              for (var t = 0, n = [], r = e.length; t <= r; ) {
                var i = e.indexOf(
                  `
`,
                  t
                );
                i == -1 && (i = e.length);
                var o = e.slice(t, e.charAt(i - 1) == '\r' ? i - 1 : i),
                  l = o.indexOf('\r');
                l != -1
                  ? (n.push(o.slice(0, l)), (t += l + 1))
                  : (n.push(o), (t = i + 1));
              }
              return n;
            }
          : function (e) {
              return e.split(/\r\n?|\n/);
            },
      rr = window.getSelection
        ? function (e) {
            try {
              return e.selectionStart != e.selectionEnd;
            } catch {
              return !1;
            }
          }
        : function (e) {
            var t;
            try {
              t = e.ownerDocument.selection.createRange();
            } catch {}
            return !t || t.parentElement() != e
              ? !1
              : t.compareEndPoints('StartToEnd', t) != 0;
          },
      Wt = (function () {
        var e = p('div');
        return 'oncopy' in e
          ? !0
          : (e.setAttribute('oncopy', 'return;'),
            typeof e.oncopy == 'function');
      })(),
      Ft = null;
    function Wn(e) {
      if (Ft != null) return Ft;
      var t = F(e, p('span', 'x')),
        n = t.getBoundingClientRect(),
        r = D(t, 0, 1).getBoundingClientRect();
      return (Ft = Math.abs(n.left - r.left) > 1);
    }
    var Mt = {},
      nr = {};
    function Fn(e, t) {
      arguments.length > 2 &&
        (t.dependencies = Array.prototype.slice.call(arguments, 2)),
        (Mt[e] = t);
    }
    function Nr(e, t) {
      nr[e] = t;
    }
    function ct(e) {
      if (typeof e == 'string' && nr.hasOwnProperty(e)) e = nr[e];
      else if (e && typeof e.name == 'string' && nr.hasOwnProperty(e.name)) {
        var t = nr[e.name];
        typeof t == 'string' && (t = { name: t }),
          (e = vr(t, e)),
          (e.name = t.name);
      } else {
        if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
          return ct('application/xml');
        if (typeof e == 'string' && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
          return ct('application/json');
      }
      return typeof e == 'string' ? { name: e } : e || { name: 'null' };
    }
    function Xt(e, t) {
      t = ct(t);
      var n = Mt[t.name];
      if (!n) return Xt(e, 'text/plain');
      var r = n(e, t);
      if (ir.hasOwnProperty(t.name)) {
        var i = ir[t.name];
        for (var o in i)
          i.hasOwnProperty(o) &&
            (r.hasOwnProperty(o) && (r['_' + o] = r[o]), (r[o] = i[o]));
      }
      if (
        ((r.name = t.name),
        t.helperType && (r.helperType = t.helperType),
        t.modeProps)
      )
        for (var l in t.modeProps) r[l] = t.modeProps[l];
      return r;
    }
    var ir = {};
    function Pn(e, t) {
      var n = ir.hasOwnProperty(e) ? ir[e] : (ir[e] = {});
      G(t, n);
    }
    function Yt(e, t) {
      if (t === !0) return t;
      if (e.copyState) return e.copyState(t);
      var n = {};
      for (var r in t) {
        var i = t[r];
        i instanceof Array && (i = i.concat([])), (n[r] = i);
      }
      return n;
    }
    function or(e, t) {
      for (var n; e.innerMode && ((n = e.innerMode(t)), !(!n || n.mode == e)); )
        (t = n.state), (e = n.mode);
      return n || { mode: e, state: t };
    }
    function tn(e, t, n) {
      return e.startState ? e.startState(t, n) : !0;
    }
    var ke = function (e, t, n) {
      (this.pos = this.start = 0),
        (this.string = e),
        (this.tabSize = t || 8),
        (this.lastColumnPos = this.lastColumnValue = 0),
        (this.lineStart = 0),
        (this.lineOracle = n);
    };
    (ke.prototype.eol = function () {
      return this.pos >= this.string.length;
    }),
      (ke.prototype.sol = function () {
        return this.pos == this.lineStart;
      }),
      (ke.prototype.peek = function () {
        return this.string.charAt(this.pos) || void 0;
      }),
      (ke.prototype.next = function () {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }),
      (ke.prototype.eat = function (e) {
        var t = this.string.charAt(this.pos),
          n;
        if (
          (typeof e == 'string'
            ? (n = t == e)
            : (n = t && (e.test ? e.test(t) : e(t))),
          n)
        )
          return ++this.pos, t;
      }),
      (ke.prototype.eatWhile = function (e) {
        for (var t = this.pos; this.eat(e); );
        return this.pos > t;
      }),
      (ke.prototype.eatSpace = function () {
        for (
          var e = this.pos;
          /[\s\u00a0]/.test(this.string.charAt(this.pos));

        )
          ++this.pos;
        return this.pos > e;
      }),
      (ke.prototype.skipToEnd = function () {
        this.pos = this.string.length;
      }),
      (ke.prototype.skipTo = function (e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1) return (this.pos = t), !0;
      }),
      (ke.prototype.backUp = function (e) {
        this.pos -= e;
      }),
      (ke.prototype.column = function () {
        return (
          this.lastColumnPos < this.start &&
            ((this.lastColumnValue = _(
              this.string,
              this.start,
              this.tabSize,
              this.lastColumnPos,
              this.lastColumnValue
            )),
            (this.lastColumnPos = this.start)),
          this.lastColumnValue -
            (this.lineStart ? _(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (ke.prototype.indentation = function () {
        return (
          _(this.string, null, this.tabSize) -
          (this.lineStart ? _(this.string, this.lineStart, this.tabSize) : 0)
        );
      }),
      (ke.prototype.match = function (e, t, n) {
        if (typeof e == 'string') {
          var r = function (l) {
              return n ? l.toLowerCase() : l;
            },
            i = this.string.substr(this.pos, e.length);
          if (r(i) == r(e)) return t !== !1 && (this.pos += e.length), !0;
        } else {
          var o = this.string.slice(this.pos).match(e);
          return o && o.index > 0
            ? null
            : (o && t !== !1 && (this.pos += o[0].length), o);
        }
      }),
      (ke.prototype.current = function () {
        return this.string.slice(this.start, this.pos);
      }),
      (ke.prototype.hideFirstChars = function (e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }),
      (ke.prototype.lookAhead = function (e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }),
      (ke.prototype.baseToken = function () {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      });
    function P(e, t) {
      if (((t -= e.first), t < 0 || t >= e.size))
        throw new Error(
          'There is no line ' + (t + e.first) + ' in the document.'
        );
      for (var n = e; !n.lines; )
        for (var r = 0; ; ++r) {
          var i = n.children[r],
            o = i.chunkSize();
          if (t < o) {
            n = i;
            break;
          }
          t -= o;
        }
      return n.lines[t];
    }
    function jt(e, t, n) {
      var r = [],
        i = t.line;
      return (
        e.iter(t.line, n.line + 1, function (o) {
          var l = o.text;
          i == n.line && (l = l.slice(0, n.ch)),
            i == t.line && (l = l.slice(t.ch)),
            r.push(l),
            ++i;
        }),
        r
      );
    }
    function Ar(e, t, n) {
      var r = [];
      return (
        e.iter(t, n, function (i) {
          r.push(i.text);
        }),
        r
      );
    }
    function Ct(e, t) {
      var n = t - e.height;
      if (n) for (var r = e; r; r = r.parent) r.height += n;
    }
    function le(e) {
      if (e.parent == null) return null;
      for (
        var t = e.parent, n = $(t.lines, e), r = t.parent;
        r;
        t = r, r = r.parent
      )
        for (var i = 0; r.children[i] != t; ++i) n += r.children[i].chunkSize();
      return n + t.first;
    }
    function Pt(e, t) {
      var n = e.first;
      e: do {
        for (var r = 0; r < e.children.length; ++r) {
          var i = e.children[r],
            o = i.height;
          if (t < o) {
            e = i;
            continue e;
          }
          (t -= o), (n += i.chunkSize());
        }
        return n;
      } while (!e.lines);
      for (var l = 0; l < e.lines.length; ++l) {
        var a = e.lines[l],
          s = a.height;
        if (t < s) break;
        t -= s;
      }
      return n + l;
    }
    function f(e, t) {
      return t >= e.first && t < e.first + e.size;
    }
    function d(e, t) {
      return String(e.lineNumberFormatter(t + e.firstLineNumber));
    }
    function v(e, t, n) {
      if ((n === void 0 && (n = null), !(this instanceof v)))
        return new v(e, t, n);
      (this.line = e), (this.ch = t), (this.sticky = n);
    }
    function x(e, t) {
      return e.line - t.line || e.ch - t.ch;
    }
    function j(e, t) {
      return e.sticky == t.sticky && x(e, t) == 0;
    }
    function ne(e) {
      return v(e.line, e.ch);
    }
    function oe(e, t) {
      return x(e, t) < 0 ? t : e;
    }
    function Ee(e, t) {
      return x(e, t) < 0 ? e : t;
    }
    function gt(e, t) {
      return Math.max(e.first, Math.min(t, e.first + e.size - 1));
    }
    function Z(e, t) {
      if (t.line < e.first) return v(e.first, 0);
      var n = e.first + e.size - 1;
      return t.line > n
        ? v(n, P(e, n).text.length)
        : ca(t, P(e, t.line).text.length);
    }
    function ca(e, t) {
      var n = e.ch;
      return n == null || n > t ? v(e.line, t) : n < 0 ? v(e.line, 0) : e;
    }
    function fo(e, t) {
      for (var n = [], r = 0; r < t.length; r++) n[r] = Z(e, t[r]);
      return n;
    }
    var zn = function (e, t) {
        (this.state = e), (this.lookAhead = t);
      },
      zt = function (e, t, n, r) {
        (this.state = t),
          (this.doc = e),
          (this.line = n),
          (this.maxLookAhead = r || 0),
          (this.baseTokens = null),
          (this.baseTokenPos = 1);
      };
    (zt.prototype.lookAhead = function (e) {
      var t = this.doc.getLine(this.line + e);
      return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
    }),
      (zt.prototype.baseToken = function (e) {
        if (!this.baseTokens) return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ''),
          size: this.baseTokens[this.baseTokenPos] - e,
        };
      }),
      (zt.prototype.nextLine = function () {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }),
      (zt.fromSaved = function (e, t, n) {
        return t instanceof zn
          ? new zt(e, Yt(e.mode, t.state), n, t.lookAhead)
          : new zt(e, Yt(e.mode, t), n);
      }),
      (zt.prototype.save = function (e) {
        var t = e !== !1 ? Yt(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new zn(t, this.maxLookAhead) : t;
      });
    function co(e, t, n, r) {
      var i = [e.state.modeGen],
        o = {};
      mo(
        e,
        t.text,
        e.doc.mode,
        n,
        function (u, c) {
          return i.push(u, c);
        },
        o,
        r
      );
      for (
        var l = n.state,
          a = function (u) {
            n.baseTokens = i;
            var c = e.state.overlays[u],
              h = 1,
              b = 0;
            (n.state = !0),
              mo(
                e,
                t.text,
                c.mode,
                n,
                function (y, w) {
                  for (var k = h; b < y; ) {
                    var T = i[h];
                    T > y && i.splice(h, 1, y, i[h + 1], T),
                      (h += 2),
                      (b = Math.min(y, T));
                  }
                  if (w)
                    if (c.opaque)
                      i.splice(k, h - k, y, 'overlay ' + w), (h = k + 2);
                    else
                      for (; k < h; k += 2) {
                        var N = i[k + 1];
                        i[k + 1] = (N ? N + ' ' : '') + 'overlay ' + w;
                      }
                },
                o
              ),
              (n.state = l),
              (n.baseTokens = null),
              (n.baseTokenPos = 1);
          },
          s = 0;
        s < e.state.overlays.length;
        ++s
      )
        a(s);
      return { styles: i, classes: o.bgClass || o.textClass ? o : null };
    }
    function ho(e, t, n) {
      if (!t.styles || t.styles[0] != e.state.modeGen) {
        var r = rn(e, le(t)),
          i =
            t.text.length > e.options.maxHighlightLength &&
            Yt(e.doc.mode, r.state),
          o = co(e, t, r);
        i && (r.state = i),
          (t.stateAfter = r.save(!i)),
          (t.styles = o.styles),
          o.classes
            ? (t.styleClasses = o.classes)
            : t.styleClasses && (t.styleClasses = null),
          n === e.doc.highlightFrontier &&
            (e.doc.modeFrontier = Math.max(
              e.doc.modeFrontier,
              ++e.doc.highlightFrontier
            ));
      }
      return t.styles;
    }
    function rn(e, t, n) {
      var r = e.doc,
        i = e.display;
      if (!r.mode.startState) return new zt(r, !0, t);
      var o = ha(e, t, n),
        l = o > r.first && P(r, o - 1).stateAfter,
        a = l ? zt.fromSaved(r, l, o) : new zt(r, tn(r.mode), o);
      return (
        r.iter(o, t, function (s) {
          mi(e, s.text, a);
          var u = a.line;
          (s.stateAfter =
            u == t - 1 || u % 5 == 0 || (u >= i.viewFrom && u < i.viewTo)
              ? a.save()
              : null),
            a.nextLine();
        }),
        n && (r.modeFrontier = a.line),
        a
      );
    }
    function mi(e, t, n, r) {
      var i = e.doc.mode,
        o = new ke(t, e.options.tabSize, n);
      for (o.start = o.pos = r || 0, t == '' && po(i, n.state); !o.eol(); )
        bi(i, o, n.state), (o.start = o.pos);
    }
    function po(e, t) {
      if (e.blankLine) return e.blankLine(t);
      if (e.innerMode) {
        var n = or(e, t);
        if (n.mode.blankLine) return n.mode.blankLine(n.state);
      }
    }
    function bi(e, t, n, r) {
      for (var i = 0; i < 10; i++) {
        r && (r[0] = or(e, n).mode);
        var o = e.token(t, n);
        if (t.pos > t.start) return o;
      }
      throw new Error('Mode ' + e.name + ' failed to advance stream.');
    }
    var vo = function (e, t, n) {
      (this.start = e.start),
        (this.end = e.pos),
        (this.string = e.current()),
        (this.type = t || null),
        (this.state = n);
    };
    function go(e, t, n, r) {
      var i = e.doc,
        o = i.mode,
        l;
      t = Z(i, t);
      var a = P(i, t.line),
        s = rn(e, t.line, n),
        u = new ke(a.text, e.options.tabSize, s),
        c;
      for (r && (c = []); (r || u.pos < t.ch) && !u.eol(); )
        (u.start = u.pos),
          (l = bi(o, u, s.state)),
          r && c.push(new vo(u, l, Yt(i.mode, s.state)));
      return r ? c : new vo(u, l, s.state);
    }
    function yo(e, t) {
      if (e)
        for (;;) {
          var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
          if (!n) break;
          e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
          var r = n[1] ? 'bgClass' : 'textClass';
          t[r] == null
            ? (t[r] = n[2])
            : new RegExp('(?:^|\\s)' + n[2] + '(?:$|\\s)').test(t[r]) ||
              (t[r] += ' ' + n[2]);
        }
      return e;
    }
    function mo(e, t, n, r, i, o, l) {
      var a = n.flattenSpans;
      a == null && (a = e.options.flattenSpans);
      var s = 0,
        u = null,
        c = new ke(t, e.options.tabSize, r),
        h,
        b = e.options.addModeClass && [null];
      for (t == '' && yo(po(n, r.state), o); !c.eol(); ) {
        if (
          (c.pos > e.options.maxHighlightLength
            ? ((a = !1),
              l && mi(e, t, r, c.pos),
              (c.pos = t.length),
              (h = null))
            : (h = yo(bi(n, c, r.state, b), o)),
          b)
        ) {
          var y = b[0].name;
          y && (h = 'm-' + (h ? y + ' ' + h : y));
        }
        if (!a || u != h) {
          for (; s < c.start; ) (s = Math.min(c.start, s + 5e3)), i(s, u);
          u = h;
        }
        c.start = c.pos;
      }
      for (; s < c.pos; ) {
        var w = Math.min(c.pos, s + 5e3);
        i(w, u), (s = w);
      }
    }
    function ha(e, t, n) {
      for (
        var r,
          i,
          o = e.doc,
          l = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100),
          a = t;
        a > l;
        --a
      ) {
        if (a <= o.first) return o.first;
        var s = P(o, a - 1),
          u = s.stateAfter;
        if (
          u &&
          (!n || a + (u instanceof zn ? u.lookAhead : 0) <= o.modeFrontier)
        )
          return a;
        var c = _(s.text, null, e.options.tabSize);
        (i == null || r > c) && ((i = a - 1), (r = c));
      }
      return i;
    }
    function da(e, t) {
      if (
        ((e.modeFrontier = Math.min(e.modeFrontier, t)),
        !(e.highlightFrontier < t - 10))
      ) {
        for (var n = e.first, r = t - 1; r > n; r--) {
          var i = P(e, r).stateAfter;
          if (i && (!(i instanceof zn) || r + i.lookAhead < t)) {
            n = r + 1;
            break;
          }
        }
        e.highlightFrontier = Math.min(e.highlightFrontier, n);
      }
    }
    var bo = !1,
      Zt = !1;
    function pa() {
      bo = !0;
    }
    function va() {
      Zt = !0;
    }
    function Hn(e, t, n) {
      (this.marker = e), (this.from = t), (this.to = n);
    }
    function nn(e, t) {
      if (e)
        for (var n = 0; n < e.length; ++n) {
          var r = e[n];
          if (r.marker == t) return r;
        }
    }
    function ga(e, t) {
      for (var n, r = 0; r < e.length; ++r)
        e[r] != t && (n || (n = [])).push(e[r]);
      return n;
    }
    function ya(e, t, n) {
      var r =
        n &&
        window.WeakSet &&
        (n.markedSpans || (n.markedSpans = new WeakSet()));
      r && e.markedSpans && r.has(e.markedSpans)
        ? e.markedSpans.push(t)
        : ((e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t]),
          r && r.add(e.markedSpans)),
        t.marker.attachLine(e);
    }
    function ma(e, t, n) {
      var r;
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            l = o.marker,
            a = o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
          if (
            a ||
            (o.from == t &&
              l.type == 'bookmark' &&
              (!n || !o.marker.insertLeft))
          ) {
            var s = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
            (r || (r = [])).push(new Hn(l, o.from, s ? null : o.to));
          }
        }
      return r;
    }
    function ba(e, t, n) {
      var r;
      if (e)
        for (var i = 0; i < e.length; ++i) {
          var o = e[i],
            l = o.marker,
            a = o.to == null || (l.inclusiveRight ? o.to >= t : o.to > t);
          if (
            a ||
            (o.from == t && l.type == 'bookmark' && (!n || o.marker.insertLeft))
          ) {
            var s =
              o.from == null || (l.inclusiveLeft ? o.from <= t : o.from < t);
            (r || (r = [])).push(
              new Hn(l, s ? null : o.from - t, o.to == null ? null : o.to - t)
            );
          }
        }
      return r;
    }
    function xi(e, t) {
      if (t.full) return null;
      var n = f(e, t.from.line) && P(e, t.from.line).markedSpans,
        r = f(e, t.to.line) && P(e, t.to.line).markedSpans;
      if (!n && !r) return null;
      var i = t.from.ch,
        o = t.to.ch,
        l = x(t.from, t.to) == 0,
        a = ma(n, i, l),
        s = ba(r, o, l),
        u = t.text.length == 1,
        c = te(t.text).length + (u ? i : 0);
      if (a)
        for (var h = 0; h < a.length; ++h) {
          var b = a[h];
          if (b.to == null) {
            var y = nn(s, b.marker);
            y ? u && (b.to = y.to == null ? null : y.to + c) : (b.to = i);
          }
        }
      if (s)
        for (var w = 0; w < s.length; ++w) {
          var k = s[w];
          if ((k.to != null && (k.to += c), k.from == null)) {
            var T = nn(a, k.marker);
            T || ((k.from = c), u && (a || (a = [])).push(k));
          } else (k.from += c), u && (a || (a = [])).push(k);
        }
      a && (a = xo(a)), s && s != a && (s = xo(s));
      var N = [a];
      if (!u) {
        var E = t.text.length - 2,
          A;
        if (E > 0 && a)
          for (var I = 0; I < a.length; ++I)
            a[I].to == null &&
              (A || (A = [])).push(new Hn(a[I].marker, null, null));
        for (var B = 0; B < E; ++B) N.push(A);
        N.push(s);
      }
      return N;
    }
    function xo(e) {
      for (var t = 0; t < e.length; ++t) {
        var n = e[t];
        n.from != null &&
          n.from == n.to &&
          n.marker.clearWhenEmpty !== !1 &&
          e.splice(t--, 1);
      }
      return e.length ? e : null;
    }
    function xa(e, t, n) {
      var r = null;
      if (
        (e.iter(t.line, n.line + 1, function (y) {
          if (y.markedSpans)
            for (var w = 0; w < y.markedSpans.length; ++w) {
              var k = y.markedSpans[w].marker;
              k.readOnly && (!r || $(r, k) == -1) && (r || (r = [])).push(k);
            }
        }),
        !r)
      )
        return null;
      for (var i = [{ from: t, to: n }], o = 0; o < r.length; ++o)
        for (var l = r[o], a = l.find(0), s = 0; s < i.length; ++s) {
          var u = i[s];
          if (!(x(u.to, a.from) < 0 || x(u.from, a.to) > 0)) {
            var c = [s, 1],
              h = x(u.from, a.from),
              b = x(u.to, a.to);
            (h < 0 || (!l.inclusiveLeft && !h)) &&
              c.push({ from: u.from, to: a.from }),
              (b > 0 || (!l.inclusiveRight && !b)) &&
                c.push({ from: a.to, to: u.to }),
              i.splice.apply(i, c),
              (s += c.length - 3);
          }
        }
      return i;
    }
    function wo(e) {
      var t = e.markedSpans;
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.detachLine(e);
        e.markedSpans = null;
      }
    }
    function ko(e, t) {
      if (t) {
        for (var n = 0; n < t.length; ++n) t[n].marker.attachLine(e);
        e.markedSpans = t;
      }
    }
    function _n(e) {
      return e.inclusiveLeft ? -1 : 0;
    }
    function Rn(e) {
      return e.inclusiveRight ? 1 : 0;
    }
    function wi(e, t) {
      var n = e.lines.length - t.lines.length;
      if (n != 0) return n;
      var r = e.find(),
        i = t.find(),
        o = x(r.from, i.from) || _n(e) - _n(t);
      if (o) return -o;
      var l = x(r.to, i.to) || Rn(e) - Rn(t);
      return l || t.id - e.id;
    }
    function So(e, t) {
      var n = Zt && e.markedSpans,
        r;
      if (n)
        for (var i = void 0, o = 0; o < n.length; ++o)
          (i = n[o]),
            i.marker.collapsed &&
              (t ? i.from : i.to) == null &&
              (!r || wi(r, i.marker) < 0) &&
              (r = i.marker);
      return r;
    }
    function Co(e) {
      return So(e, !0);
    }
    function Bn(e) {
      return So(e, !1);
    }
    function wa(e, t) {
      var n = Zt && e.markedSpans,
        r;
      if (n)
        for (var i = 0; i < n.length; ++i) {
          var o = n[i];
          o.marker.collapsed &&
            (o.from == null || o.from < t) &&
            (o.to == null || o.to > t) &&
            (!r || wi(r, o.marker) < 0) &&
            (r = o.marker);
        }
      return r;
    }
    function Lo(e, t, n, r, i) {
      var o = P(e, t),
        l = Zt && o.markedSpans;
      if (l)
        for (var a = 0; a < l.length; ++a) {
          var s = l[a];
          if (s.marker.collapsed) {
            var u = s.marker.find(0),
              c = x(u.from, n) || _n(s.marker) - _n(i),
              h = x(u.to, r) || Rn(s.marker) - Rn(i);
            if (
              !((c >= 0 && h <= 0) || (c <= 0 && h >= 0)) &&
              ((c <= 0 &&
                (s.marker.inclusiveRight && i.inclusiveLeft
                  ? x(u.to, n) >= 0
                  : x(u.to, n) > 0)) ||
                (c >= 0 &&
                  (s.marker.inclusiveRight && i.inclusiveLeft
                    ? x(u.from, r) <= 0
                    : x(u.from, r) < 0)))
            )
              return !0;
          }
        }
    }
    function Dt(e) {
      for (var t; (t = Co(e)); ) e = t.find(-1, !0).line;
      return e;
    }
    function ka(e) {
      for (var t; (t = Bn(e)); ) e = t.find(1, !0).line;
      return e;
    }
    function Sa(e) {
      for (var t, n; (t = Bn(e)); )
        (e = t.find(1, !0).line), (n || (n = [])).push(e);
      return n;
    }
    function ki(e, t) {
      var n = P(e, t),
        r = Dt(n);
      return n == r ? t : le(r);
    }
    function To(e, t) {
      if (t > e.lastLine()) return t;
      var n = P(e, t),
        r;
      if (!lr(e, n)) return t;
      for (; (r = Bn(n)); ) n = r.find(1, !0).line;
      return le(n) + 1;
    }
    function lr(e, t) {
      var n = Zt && t.markedSpans;
      if (n) {
        for (var r = void 0, i = 0; i < n.length; ++i)
          if (((r = n[i]), !!r.marker.collapsed)) {
            if (r.from == null) return !0;
            if (
              !r.marker.widgetNode &&
              r.from == 0 &&
              r.marker.inclusiveLeft &&
              Si(e, t, r)
            )
              return !0;
          }
      }
    }
    function Si(e, t, n) {
      if (n.to == null) {
        var r = n.marker.find(1, !0);
        return Si(e, r.line, nn(r.line.markedSpans, n.marker));
      }
      if (n.marker.inclusiveRight && n.to == t.text.length) return !0;
      for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
        if (
          ((i = t.markedSpans[o]),
          i.marker.collapsed &&
            !i.marker.widgetNode &&
            i.from == n.to &&
            (i.to == null || i.to != n.from) &&
            (i.marker.inclusiveLeft || n.marker.inclusiveRight) &&
            Si(e, t, i))
        )
          return !0;
    }
    function Qt(e) {
      e = Dt(e);
      for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
        var i = n.lines[r];
        if (i == e) break;
        t += i.height;
      }
      for (var o = n.parent; o; n = o, o = n.parent)
        for (var l = 0; l < o.children.length; ++l) {
          var a = o.children[l];
          if (a == n) break;
          t += a.height;
        }
      return t;
    }
    function Un(e) {
      if (e.height == 0) return 0;
      for (var t = e.text.length, n, r = e; (n = Co(r)); ) {
        var i = n.find(0, !0);
        (r = i.from.line), (t += i.from.ch - i.to.ch);
      }
      for (r = e; (n = Bn(r)); ) {
        var o = n.find(0, !0);
        (t -= r.text.length - o.from.ch),
          (r = o.to.line),
          (t += r.text.length - o.to.ch);
      }
      return t;
    }
    function Ci(e) {
      var t = e.display,
        n = e.doc;
      (t.maxLine = P(n, n.first)),
        (t.maxLineLength = Un(t.maxLine)),
        (t.maxLineChanged = !0),
        n.iter(function (r) {
          var i = Un(r);
          i > t.maxLineLength && ((t.maxLineLength = i), (t.maxLine = r));
        });
    }
    var Or = function (e, t, n) {
      (this.text = e), ko(this, t), (this.height = n ? n(this) : 1);
    };
    (Or.prototype.lineNo = function () {
      return le(this);
    }),
      Je(Or);
    function Ca(e, t, n, r) {
      (e.text = t),
        e.stateAfter && (e.stateAfter = null),
        e.styles && (e.styles = null),
        e.order != null && (e.order = null),
        wo(e),
        ko(e, n);
      var i = r ? r(e) : 1;
      i != e.height && Ct(e, i);
    }
    function La(e) {
      (e.parent = null), wo(e);
    }
    var Ta = {},
      Ma = {};
    function Mo(e, t) {
      if (!e || /^\s*$/.test(e)) return null;
      var n = t.addModeClass ? Ma : Ta;
      return n[e] || (n[e] = e.replace(/\S+/g, 'cm-$&'));
    }
    function Do(e, t) {
      var n = M('span', null, null, W ? 'padding-right: .1px' : null),
        r = {
          pre: M('pre', [n], 'CodeMirror-line'),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption('lineWrapping'),
        };
      t.measure = {};
      for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
        var o = i ? t.rest[i - 1] : t.line,
          l = void 0;
        (r.pos = 0),
          (r.addToken = Na),
          In(e.display.measure) &&
            (l = kt(o, e.doc.direction)) &&
            (r.addToken = Oa(r.addToken, l)),
          (r.map = []);
        var a = t != e.display.externalMeasured && le(o);
        Ea(o, r, ho(e, o, a)),
          o.styleClasses &&
            (o.styleClasses.bgClass &&
              (r.bgClass = z(o.styleClasses.bgClass, r.bgClass || '')),
            o.styleClasses.textClass &&
              (r.textClass = z(o.styleClasses.textClass, r.textClass || ''))),
          r.map.length == 0 &&
            r.map.push(0, 0, r.content.appendChild(yi(e.display.measure))),
          i == 0
            ? ((t.measure.map = r.map), (t.measure.cache = {}))
            : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
              (t.measure.caches || (t.measure.caches = [])).push({}));
      }
      if (W) {
        var s = r.content.lastChild;
        (/\bcm-tab\b/.test(s.className) ||
          (s.querySelector && s.querySelector('.cm-tab'))) &&
          (r.content.className = 'cm-tab-wrap-hack');
      }
      return (
        de(e, 'renderLine', e, t.line, r.pre),
        r.pre.className &&
          (r.textClass = z(r.pre.className, r.textClass || '')),
        r
      );
    }
    function Da(e) {
      var t = p('span', '•', 'cm-invalidchar');
      return (
        (t.title = '\\u' + e.charCodeAt(0).toString(16)),
        t.setAttribute('aria-label', t.title),
        t
      );
    }
    function Na(e, t, n, r, i, o, l) {
      if (t) {
        var a = e.splitSpaces ? Aa(t, e.trailingSpace) : t,
          s = e.cm.state.specialChars,
          u = !1,
          c;
        if (!s.test(t))
          (e.col += t.length),
            (c = document.createTextNode(a)),
            e.map.push(e.pos, e.pos + t.length, c),
            L && Y < 9 && (u = !0),
            (e.pos += t.length);
        else {
          c = document.createDocumentFragment();
          for (var h = 0; ; ) {
            s.lastIndex = h;
            var b = s.exec(t),
              y = b ? b.index - h : t.length - h;
            if (y) {
              var w = document.createTextNode(a.slice(h, h + y));
              L && Y < 9 ? c.appendChild(p('span', [w])) : c.appendChild(w),
                e.map.push(e.pos, e.pos + y, w),
                (e.col += y),
                (e.pos += y);
            }
            if (!b) break;
            h += y + 1;
            var k = void 0;
            if (b[0] == '	') {
              var T = e.cm.options.tabSize,
                N = T - (e.col % T);
              (k = c.appendChild(p('span', pt(N), 'cm-tab'))),
                k.setAttribute('role', 'presentation'),
                k.setAttribute('cm-text', '	'),
                (e.col += N);
            } else
              b[0] == '\r' ||
              b[0] ==
                `
`
                ? ((k = c.appendChild(
                    p('span', b[0] == '\r' ? '␍' : '␤', 'cm-invalidchar')
                  )),
                  k.setAttribute('cm-text', b[0]),
                  (e.col += 1))
                : ((k = e.cm.options.specialCharPlaceholder(b[0])),
                  k.setAttribute('cm-text', b[0]),
                  L && Y < 9 ? c.appendChild(p('span', [k])) : c.appendChild(k),
                  (e.col += 1));
            e.map.push(e.pos, e.pos + 1, k), e.pos++;
          }
        }
        if (
          ((e.trailingSpace = a.charCodeAt(t.length - 1) == 32),
          n || r || i || u || o || l)
        ) {
          var E = n || '';
          r && (E += r), i && (E += i);
          var A = p('span', [c], E, o);
          if (l)
            for (var I in l)
              l.hasOwnProperty(I) &&
                I != 'style' &&
                I != 'class' &&
                A.setAttribute(I, l[I]);
          return e.content.appendChild(A);
        }
        e.content.appendChild(c);
      }
    }
    function Aa(e, t) {
      if (e.length > 1 && !/  /.test(e)) return e;
      for (var n = t, r = '', i = 0; i < e.length; i++) {
        var o = e.charAt(i);
        o == ' ' &&
          n &&
          (i == e.length - 1 || e.charCodeAt(i + 1) == 32) &&
          (o = ' '),
          (r += o),
          (n = o == ' ');
      }
      return r;
    }
    function Oa(e, t) {
      return function (n, r, i, o, l, a, s) {
        i = i ? i + ' cm-force-border' : 'cm-force-border';
        for (var u = n.pos, c = u + r.length; ; ) {
          for (
            var h = void 0, b = 0;
            b < t.length && ((h = t[b]), !(h.to > u && h.from <= u));
            b++
          );
          if (h.to >= c) return e(n, r, i, o, l, a, s);
          e(n, r.slice(0, h.to - u), i, o, null, a, s),
            (o = null),
            (r = r.slice(h.to - u)),
            (u = h.to);
        }
      };
    }
    function No(e, t, n, r) {
      var i = !r && n.widgetNode;
      i && e.map.push(e.pos, e.pos + t, i),
        !r &&
          e.cm.display.input.needsContentAttribute &&
          (i || (i = e.content.appendChild(document.createElement('span'))),
          i.setAttribute('cm-marker', n.id)),
        i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)),
        (e.pos += t),
        (e.trailingSpace = !1);
    }
    function Ea(e, t, n) {
      var r = e.markedSpans,
        i = e.text,
        o = 0;
      if (!r) {
        for (var l = 1; l < n.length; l += 2)
          t.addToken(t, i.slice(o, (o = n[l])), Mo(n[l + 1], t.cm.options));
        return;
      }
      for (
        var a = i.length, s = 0, u = 1, c = '', h, b, y = 0, w, k, T, N, E;
        ;

      ) {
        if (y == s) {
          (w = k = T = b = ''), (E = null), (N = null), (y = 1 / 0);
          for (var A = [], I = void 0, B = 0; B < r.length; ++B) {
            var R = r[B],
              ee = R.marker;
            if (ee.type == 'bookmark' && R.from == s && ee.widgetNode)
              A.push(ee);
            else if (
              R.from <= s &&
              (R.to == null ||
                R.to > s ||
                (ee.collapsed && R.to == s && R.from == s))
            ) {
              if (
                (R.to != null &&
                  R.to != s &&
                  y > R.to &&
                  ((y = R.to), (k = '')),
                ee.className && (w += ' ' + ee.className),
                ee.css && (b = (b ? b + ';' : '') + ee.css),
                ee.startStyle && R.from == s && (T += ' ' + ee.startStyle),
                ee.endStyle &&
                  R.to == y &&
                  (I || (I = [])).push(ee.endStyle, R.to),
                ee.title && ((E || (E = {})).title = ee.title),
                ee.attributes)
              )
                for (var ce in ee.attributes)
                  (E || (E = {}))[ce] = ee.attributes[ce];
              ee.collapsed && (!N || wi(N.marker, ee) < 0) && (N = R);
            } else R.from > s && y > R.from && (y = R.from);
          }
          if (I)
            for (var _e = 0; _e < I.length; _e += 2)
              I[_e + 1] == y && (k += ' ' + I[_e]);
          if (!N || N.from == s)
            for (var xe = 0; xe < A.length; ++xe) No(t, 0, A[xe]);
          if (N && (N.from || 0) == s) {
            if (
              (No(
                t,
                (N.to == null ? a + 1 : N.to) - s,
                N.marker,
                N.from == null
              ),
              N.to == null)
            )
              return;
            N.to == s && (N = !1);
          }
        }
        if (s >= a) break;
        for (var dt = Math.min(a, y); ; ) {
          if (c) {
            var nt = s + c.length;
            if (!N) {
              var Me = nt > dt ? c.slice(0, dt - s) : c;
              t.addToken(
                t,
                Me,
                h ? h + w : w,
                T,
                s + Me.length == y ? k : '',
                b,
                E
              );
            }
            if (nt >= dt) {
              (c = c.slice(dt - s)), (s = dt);
              break;
            }
            (s = nt), (T = '');
          }
          (c = i.slice(o, (o = n[u++]))), (h = Mo(n[u++], t.cm.options));
        }
      }
    }
    function Ao(e, t, n) {
      (this.line = t),
        (this.rest = Sa(t)),
        (this.size = this.rest ? le(te(this.rest)) - n + 1 : 1),
        (this.node = this.text = null),
        (this.hidden = lr(e, t));
    }
    function Kn(e, t, n) {
      for (var r = [], i, o = t; o < n; o = i) {
        var l = new Ao(e.doc, P(e.doc, o), o);
        (i = o + l.size), r.push(l);
      }
      return r;
    }
    var Er = null;
    function Ia(e) {
      Er
        ? Er.ops.push(e)
        : (e.ownsGroup = Er = { ops: [e], delayedCallbacks: [] });
    }
    function Wa(e) {
      var t = e.delayedCallbacks,
        n = 0;
      do {
        for (; n < t.length; n++) t[n].call(null);
        for (var r = 0; r < e.ops.length; r++) {
          var i = e.ops[r];
          if (i.cursorActivityHandlers)
            for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
              i.cursorActivityHandlers[i.cursorActivityCalled++].call(
                null,
                i.cm
              );
        }
      } while (n < t.length);
    }
    function Fa(e, t) {
      var n = e.ownsGroup;
      if (n)
        try {
          Wa(n);
        } finally {
          (Er = null), t(n);
        }
    }
    var on = null;
    function Pe(e, t) {
      var n = Jr(e, t);
      if (n.length) {
        var r = Array.prototype.slice.call(arguments, 2),
          i;
        Er
          ? (i = Er.delayedCallbacks)
          : on
          ? (i = on)
          : ((i = on = []), setTimeout(Pa, 0));
        for (
          var o = function (a) {
              i.push(function () {
                return n[a].apply(null, r);
              });
            },
            l = 0;
          l < n.length;
          ++l
        )
          o(l);
      }
    }
    function Pa() {
      var e = on;
      on = null;
      for (var t = 0; t < e.length; ++t) e[t]();
    }
    function Oo(e, t, n, r) {
      for (var i = 0; i < t.changes.length; i++) {
        var o = t.changes[i];
        o == 'text'
          ? Ha(e, t)
          : o == 'gutter'
          ? Io(e, t, n, r)
          : o == 'class'
          ? Li(e, t)
          : o == 'widget' && _a(e, t, r);
      }
      t.changes = null;
    }
    function ln(e) {
      return (
        e.node == e.text &&
          ((e.node = p('div', null, null, 'position: relative')),
          e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
          e.node.appendChild(e.text),
          L && Y < 8 && (e.node.style.zIndex = 2)),
        e.node
      );
    }
    function za(e, t) {
      var n = t.bgClass
        ? t.bgClass + ' ' + (t.line.bgClass || '')
        : t.line.bgClass;
      if ((n && (n += ' CodeMirror-linebackground'), t.background))
        n
          ? (t.background.className = n)
          : (t.background.parentNode.removeChild(t.background),
            (t.background = null));
      else if (n) {
        var r = ln(t);
        (t.background = r.insertBefore(p('div', null, n), r.firstChild)),
          e.display.input.setUneditable(t.background);
      }
    }
    function Eo(e, t) {
      var n = e.display.externalMeasured;
      return n && n.line == t.line
        ? ((e.display.externalMeasured = null),
          (t.measure = n.measure),
          n.built)
        : Do(e, t);
    }
    function Ha(e, t) {
      var n = t.text.className,
        r = Eo(e, t);
      t.text == t.node && (t.node = r.pre),
        t.text.parentNode.replaceChild(r.pre, t.text),
        (t.text = r.pre),
        r.bgClass != t.bgClass || r.textClass != t.textClass
          ? ((t.bgClass = r.bgClass), (t.textClass = r.textClass), Li(e, t))
          : n && (t.text.className = n);
    }
    function Li(e, t) {
      za(e, t),
        t.line.wrapClass
          ? (ln(t).className = t.line.wrapClass)
          : t.node != t.text && (t.node.className = '');
      var n = t.textClass
        ? t.textClass + ' ' + (t.line.textClass || '')
        : t.line.textClass;
      t.text.className = n || '';
    }
    function Io(e, t, n, r) {
      if (
        (t.gutter && (t.node.removeChild(t.gutter), (t.gutter = null)),
        t.gutterBackground &&
          (t.node.removeChild(t.gutterBackground), (t.gutterBackground = null)),
        t.line.gutterClass)
      ) {
        var i = ln(t);
        (t.gutterBackground = p(
          'div',
          null,
          'CodeMirror-gutter-background ' + t.line.gutterClass,
          'left: ' +
            (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
            'px; width: ' +
            r.gutterTotalWidth +
            'px'
        )),
          e.display.input.setUneditable(t.gutterBackground),
          i.insertBefore(t.gutterBackground, t.text);
      }
      var o = t.line.gutterMarkers;
      if (e.options.lineNumbers || o) {
        var l = ln(t),
          a = (t.gutter = p(
            'div',
            null,
            'CodeMirror-gutter-wrapper',
            'left: ' +
              (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) +
              'px'
          ));
        if (
          (a.setAttribute('aria-hidden', 'true'),
          e.display.input.setUneditable(a),
          l.insertBefore(a, t.text),
          t.line.gutterClass && (a.className += ' ' + t.line.gutterClass),
          e.options.lineNumbers &&
            (!o || !o['CodeMirror-linenumbers']) &&
            (t.lineNumber = a.appendChild(
              p(
                'div',
                d(e.options, n),
                'CodeMirror-linenumber CodeMirror-gutter-elt',
                'left: ' +
                  r.gutterLeft['CodeMirror-linenumbers'] +
                  'px; width: ' +
                  e.display.lineNumInnerWidth +
                  'px'
              )
            )),
          o)
        )
          for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
            var u = e.display.gutterSpecs[s].className,
              c = o.hasOwnProperty(u) && o[u];
            c &&
              a.appendChild(
                p(
                  'div',
                  [c],
                  'CodeMirror-gutter-elt',
                  'left: ' +
                    r.gutterLeft[u] +
                    'px; width: ' +
                    r.gutterWidth[u] +
                    'px'
                )
              );
          }
      }
    }
    function _a(e, t, n) {
      t.alignable && (t.alignable = null);
      for (
        var r = ut('CodeMirror-linewidget'), i = t.node.firstChild, o = void 0;
        i;
        i = o
      )
        (o = i.nextSibling), r.test(i.className) && t.node.removeChild(i);
      Wo(e, t, n);
    }
    function Ra(e, t, n, r) {
      var i = Eo(e, t);
      return (
        (t.text = t.node = i.pre),
        i.bgClass && (t.bgClass = i.bgClass),
        i.textClass && (t.textClass = i.textClass),
        Li(e, t),
        Io(e, t, n, r),
        Wo(e, t, r),
        t.node
      );
    }
    function Wo(e, t, n) {
      if ((Fo(e, t.line, t, n, !0), t.rest))
        for (var r = 0; r < t.rest.length; r++) Fo(e, t.rest[r], t, n, !1);
    }
    function Fo(e, t, n, r, i) {
      if (t.widgets)
        for (var o = ln(n), l = 0, a = t.widgets; l < a.length; ++l) {
          var s = a[l],
            u = p(
              'div',
              [s.node],
              'CodeMirror-linewidget' + (s.className ? ' ' + s.className : '')
            );
          s.handleMouseEvents || u.setAttribute('cm-ignore-events', 'true'),
            Ba(s, u, n, r),
            e.display.input.setUneditable(u),
            i && s.above
              ? o.insertBefore(u, n.gutter || n.text)
              : o.appendChild(u),
            Pe(s, 'redraw');
        }
    }
    function Ba(e, t, n, r) {
      if (e.noHScroll) {
        (n.alignable || (n.alignable = [])).push(t);
        var i = r.wrapperWidth;
        (t.style.left = r.fixedPos + 'px'),
          e.coverGutter ||
            ((i -= r.gutterTotalWidth),
            (t.style.paddingLeft = r.gutterTotalWidth + 'px')),
          (t.style.width = i + 'px');
      }
      e.coverGutter &&
        ((t.style.zIndex = 5),
        (t.style.position = 'relative'),
        e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + 'px'));
    }
    function an(e) {
      if (e.height != null) return e.height;
      var t = e.doc.cm;
      if (!t) return 0;
      if (!m(document.body, e.node)) {
        var n = 'position: relative;';
        e.coverGutter &&
          (n += 'margin-left: -' + t.display.gutters.offsetWidth + 'px;'),
          e.noHScroll &&
            (n += 'width: ' + t.display.wrapper.clientWidth + 'px;'),
          F(t.display.measure, p('div', [e.node], null, n));
      }
      return (e.height = e.node.parentNode.offsetHeight);
    }
    function Jt(e, t) {
      for (var n = et(t); n != e.wrapper; n = n.parentNode)
        if (
          !n ||
          (n.nodeType == 1 && n.getAttribute('cm-ignore-events') == 'true') ||
          (n.parentNode == e.sizer && n != e.mover)
        )
          return !0;
    }
    function Gn(e) {
      return e.lineSpace.offsetTop;
    }
    function Ti(e) {
      return e.mover.offsetHeight - e.lineSpace.offsetHeight;
    }
    function Po(e) {
      if (e.cachedPaddingH) return e.cachedPaddingH;
      var t = F(e.measure, p('pre', 'x', 'CodeMirror-line-like')),
        n = window.getComputedStyle
          ? window.getComputedStyle(t)
          : t.currentStyle,
        r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
      return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
    }
    function Ht(e) {
      return Mr - e.display.nativeBarWidth;
    }
    function yr(e) {
      return e.display.scroller.clientWidth - Ht(e) - e.display.barWidth;
    }
    function Mi(e) {
      return e.display.scroller.clientHeight - Ht(e) - e.display.barHeight;
    }
    function Ua(e, t, n) {
      var r = e.options.lineWrapping,
        i = r && yr(e);
      if (!t.measure.heights || (r && t.measure.width != i)) {
        var o = (t.measure.heights = []);
        if (r) {
          t.measure.width = i;
          for (
            var l = t.text.firstChild.getClientRects(), a = 0;
            a < l.length - 1;
            a++
          ) {
            var s = l[a],
              u = l[a + 1];
            Math.abs(s.bottom - u.bottom) > 2 &&
              o.push((s.bottom + u.top) / 2 - n.top);
          }
        }
        o.push(n.bottom - n.top);
      }
    }
    function zo(e, t, n) {
      if (e.line == t) return { map: e.measure.map, cache: e.measure.cache };
      if (e.rest) {
        for (var r = 0; r < e.rest.length; r++)
          if (e.rest[r] == t)
            return { map: e.measure.maps[r], cache: e.measure.caches[r] };
        for (var i = 0; i < e.rest.length; i++)
          if (le(e.rest[i]) > n)
            return {
              map: e.measure.maps[i],
              cache: e.measure.caches[i],
              before: !0,
            };
      }
    }
    function Ka(e, t) {
      t = Dt(t);
      var n = le(t),
        r = (e.display.externalMeasured = new Ao(e.doc, t, n));
      r.lineN = n;
      var i = (r.built = Do(e, r));
      return (r.text = i.pre), F(e.display.lineMeasure, i.pre), r;
    }
    function Ho(e, t, n, r) {
      return _t(e, Ir(e, t), n, r);
    }
    function Di(e, t) {
      if (t >= e.display.viewFrom && t < e.display.viewTo)
        return e.display.view[xr(e, t)];
      var n = e.display.externalMeasured;
      if (n && t >= n.lineN && t < n.lineN + n.size) return n;
    }
    function Ir(e, t) {
      var n = le(t),
        r = Di(e, n);
      r && !r.text
        ? (r = null)
        : r && r.changes && (Oo(e, r, n, Ii(e)), (e.curOp.forceUpdate = !0)),
        r || (r = Ka(e, t));
      var i = zo(r, t, n);
      return {
        line: t,
        view: r,
        rect: null,
        map: i.map,
        cache: i.cache,
        before: i.before,
        hasHeights: !1,
      };
    }
    function _t(e, t, n, r, i) {
      t.before && (n = -1);
      var o = n + (r || ''),
        l;
      return (
        t.cache.hasOwnProperty(o)
          ? (l = t.cache[o])
          : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
            t.hasHeights || (Ua(e, t.view, t.rect), (t.hasHeights = !0)),
            (l = qa(e, t, n, r)),
            l.bogus || (t.cache[o] = l)),
        {
          left: l.left,
          right: l.right,
          top: i ? l.rtop : l.top,
          bottom: i ? l.rbottom : l.bottom,
        }
      );
    }
    var _o = { left: 0, right: 0, top: 0, bottom: 0 };
    function Ro(e, t, n) {
      for (var r, i, o, l, a, s, u = 0; u < e.length; u += 3)
        if (
          ((a = e[u]),
          (s = e[u + 1]),
          t < a
            ? ((i = 0), (o = 1), (l = 'left'))
            : t < s
            ? ((i = t - a), (o = i + 1))
            : (u == e.length - 3 || (t == s && e[u + 3] > t)) &&
              ((o = s - a), (i = o - 1), t >= s && (l = 'right')),
          i != null)
        ) {
          if (
            ((r = e[u + 2]),
            a == s && n == (r.insertLeft ? 'left' : 'right') && (l = n),
            n == 'left' && i == 0)
          )
            for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
              (r = e[(u -= 3) + 2]), (l = 'left');
          if (n == 'right' && i == s - a)
            for (
              ;
              u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft;

            )
              (r = e[(u += 3) + 2]), (l = 'right');
          break;
        }
      return {
        node: r,
        start: i,
        end: o,
        collapse: l,
        coverStart: a,
        coverEnd: s,
      };
    }
    function Ga(e, t) {
      var n = _o;
      if (t == 'left')
        for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++);
      else
        for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--);
      return n;
    }
    function qa(e, t, n, r) {
      var i = Ro(t.map, n, r),
        o = i.node,
        l = i.start,
        a = i.end,
        s = i.collapse,
        u;
      if (o.nodeType == 3) {
        for (var c = 0; c < 4; c++) {
          for (; l && H(t.line.text.charAt(i.coverStart + l)); ) --l;
          for (
            ;
            i.coverStart + a < i.coverEnd &&
            H(t.line.text.charAt(i.coverStart + a));

          )
            ++a;
          if (
            (L && Y < 9 && l == 0 && a == i.coverEnd - i.coverStart
              ? (u = o.parentNode.getBoundingClientRect())
              : (u = Ga(D(o, l, a).getClientRects(), r)),
            u.left || u.right || l == 0)
          )
            break;
          (a = l), (l = l - 1), (s = 'right');
        }
        L && Y < 11 && (u = Xa(e.display.measure, u));
      } else {
        l > 0 && (s = r = 'right');
        var h;
        e.options.lineWrapping && (h = o.getClientRects()).length > 1
          ? (u = h[r == 'right' ? h.length - 1 : 0])
          : (u = o.getBoundingClientRect());
      }
      if (L && Y < 9 && !l && (!u || (!u.left && !u.right))) {
        var b = o.parentNode.getClientRects()[0];
        b
          ? (u = {
              left: b.left,
              right: b.left + Fr(e.display),
              top: b.top,
              bottom: b.bottom,
            })
          : (u = _o);
      }
      for (
        var y = u.top - t.rect.top,
          w = u.bottom - t.rect.top,
          k = (y + w) / 2,
          T = t.view.measure.heights,
          N = 0;
        N < T.length - 1 && !(k < T[N]);
        N++
      );
      var E = N ? T[N - 1] : 0,
        A = T[N],
        I = {
          left: (s == 'right' ? u.right : u.left) - t.rect.left,
          right: (s == 'left' ? u.left : u.right) - t.rect.left,
          top: E,
          bottom: A,
        };
      return (
        !u.left && !u.right && (I.bogus = !0),
        e.options.singleCursorHeightPerLine || ((I.rtop = y), (I.rbottom = w)),
        I
      );
    }
    function Xa(e, t) {
      if (
        !window.screen ||
        screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI ||
        !Wn(e)
      )
        return t;
      var n = screen.logicalXDPI / screen.deviceXDPI,
        r = screen.logicalYDPI / screen.deviceYDPI;
      return {
        left: t.left * n,
        right: t.right * n,
        top: t.top * r,
        bottom: t.bottom * r,
      };
    }
    function Bo(e) {
      if (
        e.measure &&
        ((e.measure.cache = {}), (e.measure.heights = null), e.rest)
      )
        for (var t = 0; t < e.rest.length; t++) e.measure.caches[t] = {};
    }
    function Uo(e) {
      (e.display.externalMeasure = null), S(e.display.lineMeasure);
      for (var t = 0; t < e.display.view.length; t++) Bo(e.display.view[t]);
    }
    function sn(e) {
      Uo(e),
        (e.display.cachedCharWidth =
          e.display.cachedTextHeight =
          e.display.cachedPaddingH =
            null),
        e.options.lineWrapping || (e.display.maxLineChanged = !0),
        (e.display.lineNumChars = null);
    }
    function Ko(e) {
      return Ze && Ce
        ? -(
            e.body.getBoundingClientRect().left -
            parseInt(getComputedStyle(e.body).marginLeft)
          )
        : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
    }
    function Go(e) {
      return Ze && Ce
        ? -(
            e.body.getBoundingClientRect().top -
            parseInt(getComputedStyle(e.body).marginTop)
          )
        : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
    }
    function Ni(e) {
      var t = Dt(e),
        n = t.widgets,
        r = 0;
      if (n) for (var i = 0; i < n.length; ++i) n[i].above && (r += an(n[i]));
      return r;
    }
    function qn(e, t, n, r, i) {
      if (!i) {
        var o = Ni(t);
        (n.top += o), (n.bottom += o);
      }
      if (r == 'line') return n;
      r || (r = 'local');
      var l = Qt(t);
      if (
        (r == 'local' ? (l += Gn(e.display)) : (l -= e.display.viewOffset),
        r == 'page' || r == 'window')
      ) {
        var a = e.display.lineSpace.getBoundingClientRect();
        l += a.top + (r == 'window' ? 0 : Go(Q(e)));
        var s = a.left + (r == 'window' ? 0 : Ko(Q(e)));
        (n.left += s), (n.right += s);
      }
      return (n.top += l), (n.bottom += l), n;
    }
    function qo(e, t, n) {
      if (n == 'div') return t;
      var r = t.left,
        i = t.top;
      if (n == 'page') (r -= Ko(Q(e))), (i -= Go(Q(e)));
      else if (n == 'local' || !n) {
        var o = e.display.sizer.getBoundingClientRect();
        (r += o.left), (i += o.top);
      }
      var l = e.display.lineSpace.getBoundingClientRect();
      return { left: r - l.left, top: i - l.top };
    }
    function Xn(e, t, n, r, i) {
      return r || (r = P(e.doc, t.line)), qn(e, r, Ho(e, r, t.ch, i), n);
    }
    function Nt(e, t, n, r, i, o) {
      (r = r || P(e.doc, t.line)), i || (i = Ir(e, r));
      function l(w, k) {
        var T = _t(e, i, w, k ? 'right' : 'left', o);
        return k ? (T.left = T.right) : (T.right = T.left), qn(e, r, T, n);
      }
      var a = kt(r, e.doc.direction),
        s = t.ch,
        u = t.sticky;
      if (
        (s >= r.text.length
          ? ((s = r.text.length), (u = 'before'))
          : s <= 0 && ((s = 0), (u = 'after')),
        !a)
      )
        return l(u == 'before' ? s - 1 : s, u == 'before');
      function c(w, k, T) {
        var N = a[k],
          E = N.level == 1;
        return l(T ? w - 1 : w, E != T);
      }
      var h = wt(a, s, u),
        b = xt,
        y = c(s, h, u == 'before');
      return b != null && (y.other = c(s, b, u != 'before')), y;
    }
    function Xo(e, t) {
      var n = 0;
      (t = Z(e.doc, t)), e.options.lineWrapping || (n = Fr(e.display) * t.ch);
      var r = P(e.doc, t.line),
        i = Qt(r) + Gn(e.display);
      return { left: n, right: n, top: i, bottom: i + r.height };
    }
    function Ai(e, t, n, r, i) {
      var o = v(e, t, n);
      return (o.xRel = i), r && (o.outside = r), o;
    }
    function Oi(e, t, n) {
      var r = e.doc;
      if (((n += e.display.viewOffset), n < 0))
        return Ai(r.first, 0, null, -1, -1);
      var i = Pt(r, n),
        o = r.first + r.size - 1;
      if (i > o)
        return Ai(r.first + r.size - 1, P(r, o).text.length, null, 1, 1);
      t < 0 && (t = 0);
      for (var l = P(r, i); ; ) {
        var a = Ya(e, l, i, t, n),
          s = wa(l, a.ch + (a.xRel > 0 || a.outside > 0 ? 1 : 0));
        if (!s) return a;
        var u = s.find(1);
        if (u.line == i) return u;
        l = P(r, (i = u.line));
      }
    }
    function Yo(e, t, n, r) {
      r -= Ni(t);
      var i = t.text.length,
        o = V(
          function (l) {
            return _t(e, n, l - 1).bottom <= r;
          },
          i,
          0
        );
      return (
        (i = V(
          function (l) {
            return _t(e, n, l).top > r;
          },
          o,
          i
        )),
        { begin: o, end: i }
      );
    }
    function jo(e, t, n, r) {
      n || (n = Ir(e, t));
      var i = qn(e, t, _t(e, n, r), 'line').top;
      return Yo(e, t, n, i);
    }
    function Ei(e, t, n, r) {
      return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t;
    }
    function Ya(e, t, n, r, i) {
      i -= Qt(t);
      var o = Ir(e, t),
        l = Ni(t),
        a = 0,
        s = t.text.length,
        u = !0,
        c = kt(t, e.doc.direction);
      if (c) {
        var h = (e.options.lineWrapping ? Za : ja)(e, t, n, o, c, r, i);
        (u = h.level != 1),
          (a = u ? h.from : h.to - 1),
          (s = u ? h.to : h.from - 1);
      }
      var b = null,
        y = null,
        w = V(
          function (B) {
            var R = _t(e, o, B);
            return (
              (R.top += l),
              (R.bottom += l),
              Ei(R, r, i, !1)
                ? (R.top <= i && R.left <= r && ((b = B), (y = R)), !0)
                : !1
            );
          },
          a,
          s
        ),
        k,
        T,
        N = !1;
      if (y) {
        var E = r - y.left < y.right - r,
          A = E == u;
        (w = b + (A ? 0 : 1)),
          (T = A ? 'after' : 'before'),
          (k = E ? y.left : y.right);
      } else {
        !u && (w == s || w == a) && w++,
          (T =
            w == 0
              ? 'after'
              : w == t.text.length
              ? 'before'
              : _t(e, o, w - (u ? 1 : 0)).bottom + l <= i == u
              ? 'after'
              : 'before');
        var I = Nt(e, v(n, w, T), 'line', t, o);
        (k = I.left), (N = i < I.top ? -1 : i >= I.bottom ? 1 : 0);
      }
      return (w = re(t.text, w, 1)), Ai(n, w, T, N, r - k);
    }
    function ja(e, t, n, r, i, o, l) {
      var a = V(
          function (h) {
            var b = i[h],
              y = b.level != 1;
            return Ei(
              Nt(
                e,
                v(n, y ? b.to : b.from, y ? 'before' : 'after'),
                'line',
                t,
                r
              ),
              o,
              l,
              !0
            );
          },
          0,
          i.length - 1
        ),
        s = i[a];
      if (a > 0) {
        var u = s.level != 1,
          c = Nt(
            e,
            v(n, u ? s.from : s.to, u ? 'after' : 'before'),
            'line',
            t,
            r
          );
        Ei(c, o, l, !0) && c.top > l && (s = i[a - 1]);
      }
      return s;
    }
    function Za(e, t, n, r, i, o, l) {
      var a = Yo(e, t, r, l),
        s = a.begin,
        u = a.end;
      /\s/.test(t.text.charAt(u - 1)) && u--;
      for (var c = null, h = null, b = 0; b < i.length; b++) {
        var y = i[b];
        if (!(y.from >= u || y.to <= s)) {
          var w = y.level != 1,
            k = _t(e, r, w ? Math.min(u, y.to) - 1 : Math.max(s, y.from)).right,
            T = k < o ? o - k + 1e9 : k - o;
          (!c || h > T) && ((c = y), (h = T));
        }
      }
      return (
        c || (c = i[i.length - 1]),
        c.from < s && (c = { from: s, to: c.to, level: c.level }),
        c.to > u && (c = { from: c.from, to: u, level: c.level }),
        c
      );
    }
    var mr;
    function Wr(e) {
      if (e.cachedTextHeight != null) return e.cachedTextHeight;
      if (mr == null) {
        mr = p('pre', null, 'CodeMirror-line-like');
        for (var t = 0; t < 49; ++t)
          mr.appendChild(document.createTextNode('x')), mr.appendChild(p('br'));
        mr.appendChild(document.createTextNode('x'));
      }
      F(e.measure, mr);
      var n = mr.offsetHeight / 50;
      return n > 3 && (e.cachedTextHeight = n), S(e.measure), n || 1;
    }
    function Fr(e) {
      if (e.cachedCharWidth != null) return e.cachedCharWidth;
      var t = p('span', 'xxxxxxxxxx'),
        n = p('pre', [t], 'CodeMirror-line-like');
      F(e.measure, n);
      var r = t.getBoundingClientRect(),
        i = (r.right - r.left) / 10;
      return i > 2 && (e.cachedCharWidth = i), i || 10;
    }
    function Ii(e) {
      for (
        var t = e.display,
          n = {},
          r = {},
          i = t.gutters.clientLeft,
          o = t.gutters.firstChild,
          l = 0;
        o;
        o = o.nextSibling, ++l
      ) {
        var a = e.display.gutterSpecs[l].className;
        (n[a] = o.offsetLeft + o.clientLeft + i), (r[a] = o.clientWidth);
      }
      return {
        fixedPos: Wi(t),
        gutterTotalWidth: t.gutters.offsetWidth,
        gutterLeft: n,
        gutterWidth: r,
        wrapperWidth: t.wrapper.clientWidth,
      };
    }
    function Wi(e) {
      return (
        e.scroller.getBoundingClientRect().left -
        e.sizer.getBoundingClientRect().left
      );
    }
    function Zo(e) {
      var t = Wr(e.display),
        n = e.options.lineWrapping,
        r =
          n && Math.max(5, e.display.scroller.clientWidth / Fr(e.display) - 3);
      return function (i) {
        if (lr(e.doc, i)) return 0;
        var o = 0;
        if (i.widgets)
          for (var l = 0; l < i.widgets.length; l++)
            i.widgets[l].height && (o += i.widgets[l].height);
        return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t;
      };
    }
    function Fi(e) {
      var t = e.doc,
        n = Zo(e);
      t.iter(function (r) {
        var i = n(r);
        i != r.height && Ct(r, i);
      });
    }
    function br(e, t, n, r) {
      var i = e.display;
      if (!n && et(t).getAttribute('cm-not-content') == 'true') return null;
      var o,
        l,
        a = i.lineSpace.getBoundingClientRect();
      try {
        (o = t.clientX - a.left), (l = t.clientY - a.top);
      } catch {
        return null;
      }
      var s = Oi(e, o, l),
        u;
      if (r && s.xRel > 0 && (u = P(e.doc, s.line).text).length == s.ch) {
        var c = _(u, u.length, e.options.tabSize) - u.length;
        s = v(
          s.line,
          Math.max(0, Math.round((o - Po(e.display).left) / Fr(e.display)) - c)
        );
      }
      return s;
    }
    function xr(e, t) {
      if (t >= e.display.viewTo || ((t -= e.display.viewFrom), t < 0))
        return null;
      for (var n = e.display.view, r = 0; r < n.length; r++)
        if (((t -= n[r].size), t < 0)) return r;
    }
    function tt(e, t, n, r) {
      t == null && (t = e.doc.first),
        n == null && (n = e.doc.first + e.doc.size),
        r || (r = 0);
      var i = e.display;
      if (
        (r &&
          n < i.viewTo &&
          (i.updateLineNumbers == null || i.updateLineNumbers > t) &&
          (i.updateLineNumbers = t),
        (e.curOp.viewChanged = !0),
        t >= i.viewTo)
      )
        Zt && ki(e.doc, t) < i.viewTo && sr(e);
      else if (n <= i.viewFrom)
        Zt && To(e.doc, n + r) > i.viewFrom
          ? sr(e)
          : ((i.viewFrom += r), (i.viewTo += r));
      else if (t <= i.viewFrom && n >= i.viewTo) sr(e);
      else if (t <= i.viewFrom) {
        var o = Yn(e, n, n + r, 1);
        o
          ? ((i.view = i.view.slice(o.index)),
            (i.viewFrom = o.lineN),
            (i.viewTo += r))
          : sr(e);
      } else if (n >= i.viewTo) {
        var l = Yn(e, t, t, -1);
        l ? ((i.view = i.view.slice(0, l.index)), (i.viewTo = l.lineN)) : sr(e);
      } else {
        var a = Yn(e, t, t, -1),
          s = Yn(e, n, n + r, 1);
        a && s
          ? ((i.view = i.view
              .slice(0, a.index)
              .concat(Kn(e, a.lineN, s.lineN))
              .concat(i.view.slice(s.index))),
            (i.viewTo += r))
          : sr(e);
      }
      var u = i.externalMeasured;
      u &&
        (n < u.lineN
          ? (u.lineN += r)
          : t < u.lineN + u.size && (i.externalMeasured = null));
    }
    function ar(e, t, n) {
      e.curOp.viewChanged = !0;
      var r = e.display,
        i = e.display.externalMeasured;
      if (
        (i &&
          t >= i.lineN &&
          t < i.lineN + i.size &&
          (r.externalMeasured = null),
        !(t < r.viewFrom || t >= r.viewTo))
      ) {
        var o = r.view[xr(e, t)];
        if (o.node != null) {
          var l = o.changes || (o.changes = []);
          $(l, n) == -1 && l.push(n);
        }
      }
    }
    function sr(e) {
      (e.display.viewFrom = e.display.viewTo = e.doc.first),
        (e.display.view = []),
        (e.display.viewOffset = 0);
    }
    function Yn(e, t, n, r) {
      var i = xr(e, t),
        o,
        l = e.display.view;
      if (!Zt || n == e.doc.first + e.doc.size) return { index: i, lineN: n };
      for (var a = e.display.viewFrom, s = 0; s < i; s++) a += l[s].size;
      if (a != t) {
        if (r > 0) {
          if (i == l.length - 1) return null;
          (o = a + l[i].size - t), i++;
        } else o = a - t;
        (t += o), (n += o);
      }
      for (; ki(e.doc, n) != n; ) {
        if (i == (r < 0 ? 0 : l.length - 1)) return null;
        (n += r * l[i - (r < 0 ? 1 : 0)].size), (i += r);
      }
      return { index: i, lineN: n };
    }
    function Qa(e, t, n) {
      var r = e.display,
        i = r.view;
      i.length == 0 || t >= r.viewTo || n <= r.viewFrom
        ? ((r.view = Kn(e, t, n)), (r.viewFrom = t))
        : (r.viewFrom > t
            ? (r.view = Kn(e, t, r.viewFrom).concat(r.view))
            : r.viewFrom < t && (r.view = r.view.slice(xr(e, t))),
          (r.viewFrom = t),
          r.viewTo < n
            ? (r.view = r.view.concat(Kn(e, r.viewTo, n)))
            : r.viewTo > n && (r.view = r.view.slice(0, xr(e, n)))),
        (r.viewTo = n);
    }
    function Qo(e) {
      for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
        var i = t[r];
        !i.hidden && (!i.node || i.changes) && ++n;
      }
      return n;
    }
    function un(e) {
      e.display.input.showSelection(e.display.input.prepareSelection());
    }
    function Jo(e, t) {
      t === void 0 && (t = !0);
      var n = e.doc,
        r = {},
        i = (r.cursors = document.createDocumentFragment()),
        o = (r.selection = document.createDocumentFragment()),
        l = e.options.$customCursor;
      l && (t = !0);
      for (var a = 0; a < n.sel.ranges.length; a++)
        if (!(!t && a == n.sel.primIndex)) {
          var s = n.sel.ranges[a];
          if (
            !(
              s.from().line >= e.display.viewTo ||
              s.to().line < e.display.viewFrom
            )
          ) {
            var u = s.empty();
            if (l) {
              var c = l(e, s);
              c && Pi(e, c, i);
            } else (u || e.options.showCursorWhenSelecting) && Pi(e, s.head, i);
            u || Ja(e, s, o);
          }
        }
      return r;
    }
    function Pi(e, t, n) {
      var r = Nt(e, t, 'div', null, null, !e.options.singleCursorHeightPerLine),
        i = n.appendChild(p('div', ' ', 'CodeMirror-cursor'));
      if (
        ((i.style.left = r.left + 'px'),
        (i.style.top = r.top + 'px'),
        (i.style.height =
          Math.max(0, r.bottom - r.top) * e.options.cursorHeight + 'px'),
        /\bcm-fat-cursor\b/.test(e.getWrapperElement().className))
      ) {
        var o = Xn(e, t, 'div', null, null),
          l = o.right - o.left;
        i.style.width = (l > 0 ? l : e.defaultCharWidth()) + 'px';
      }
      if (r.other) {
        var a = n.appendChild(
          p('div', ' ', 'CodeMirror-cursor CodeMirror-secondarycursor')
        );
        (a.style.display = ''),
          (a.style.left = r.other.left + 'px'),
          (a.style.top = r.other.top + 'px'),
          (a.style.height = (r.other.bottom - r.other.top) * 0.85 + 'px');
      }
    }
    function jn(e, t) {
      return e.top - t.top || e.left - t.left;
    }
    function Ja(e, t, n) {
      var r = e.display,
        i = e.doc,
        o = document.createDocumentFragment(),
        l = Po(e.display),
        a = l.left,
        s = Math.max(r.sizerWidth, yr(e) - r.sizer.offsetLeft) - l.right,
        u = i.direction == 'ltr';
      function c(A, I, B, R) {
        I < 0 && (I = 0),
          (I = Math.round(I)),
          (R = Math.round(R)),
          o.appendChild(
            p(
              'div',
              null,
              'CodeMirror-selected',
              'position: absolute; left: ' +
                A +
                `px;
                             top: ` +
                I +
                'px; width: ' +
                (B ?? s - A) +
                `px;
                             height: ` +
                (R - I) +
                'px'
            )
          );
      }
      function h(A, I, B) {
        var R = P(i, A),
          ee = R.text.length,
          ce,
          _e;
        function xe(Me, it) {
          return Xn(e, v(A, Me), 'div', R, it);
        }
        function dt(Me, it, Ke) {
          var Ie = jo(e, R, null, Me),
            De = (it == 'ltr') == (Ke == 'after') ? 'left' : 'right',
            Se =
              Ke == 'after'
                ? Ie.begin
                : Ie.end - (/\s/.test(R.text.charAt(Ie.end - 1)) ? 2 : 1);
          return xe(Se, De)[De];
        }
        var nt = kt(R, i.direction);
        return (
          vt(nt, I || 0, B ?? ee, function (Me, it, Ke, Ie) {
            var De = Ke == 'ltr',
              Se = xe(Me, De ? 'left' : 'right'),
              ot = xe(it - 1, De ? 'right' : 'left'),
              jr = I == null && Me == 0,
              pr = B == null && it == ee,
              je = Ie == 0,
              Rt = !nt || Ie == nt.length - 1;
            if (ot.top - Se.top <= 3) {
              var Re = (u ? jr : pr) && je,
                so = (u ? pr : jr) && Rt,
                er = Re ? a : (De ? Se : ot).left,
                Lr = so ? s : (De ? ot : Se).right;
              c(er, Se.top, Lr - er, Se.bottom);
            } else {
              var Tr, $e, Zr, uo;
              De
                ? ((Tr = u && jr && je ? a : Se.left),
                  ($e = u ? s : dt(Me, Ke, 'before')),
                  (Zr = u ? a : dt(it, Ke, 'after')),
                  (uo = u && pr && Rt ? s : ot.right))
                : ((Tr = u ? dt(Me, Ke, 'before') : a),
                  ($e = !u && jr && je ? s : Se.right),
                  (Zr = !u && pr && Rt ? a : ot.left),
                  (uo = u ? dt(it, Ke, 'after') : s)),
                c(Tr, Se.top, $e - Tr, Se.bottom),
                Se.bottom < ot.top && c(a, Se.bottom, null, ot.top),
                c(Zr, ot.top, uo - Zr, ot.bottom);
            }
            (!ce || jn(Se, ce) < 0) && (ce = Se),
              jn(ot, ce) < 0 && (ce = ot),
              (!_e || jn(Se, _e) < 0) && (_e = Se),
              jn(ot, _e) < 0 && (_e = ot);
          }),
          { start: ce, end: _e }
        );
      }
      var b = t.from(),
        y = t.to();
      if (b.line == y.line) h(b.line, b.ch, y.ch);
      else {
        var w = P(i, b.line),
          k = P(i, y.line),
          T = Dt(w) == Dt(k),
          N = h(b.line, b.ch, T ? w.text.length + 1 : null).end,
          E = h(y.line, T ? 0 : null, y.ch).start;
        T &&
          (N.top < E.top - 2
            ? (c(N.right, N.top, null, N.bottom), c(a, E.top, E.left, E.bottom))
            : c(N.right, N.top, E.left - N.right, N.bottom)),
          N.bottom < E.top && c(a, N.bottom, null, E.top);
      }
      n.appendChild(o);
    }
    function zi(e) {
      if (e.state.focused) {
        var t = e.display;
        clearInterval(t.blinker);
        var n = !0;
        (t.cursorDiv.style.visibility = ''),
          e.options.cursorBlinkRate > 0
            ? (t.blinker = setInterval(function () {
                e.hasFocus() || Pr(e),
                  (t.cursorDiv.style.visibility = (n = !n) ? '' : 'hidden');
              }, e.options.cursorBlinkRate))
            : e.options.cursorBlinkRate < 0 &&
              (t.cursorDiv.style.visibility = 'hidden');
      }
    }
    function Vo(e) {
      e.hasFocus() || (e.display.input.focus(), e.state.focused || _i(e));
    }
    function Hi(e) {
      (e.state.delayingBlurEvent = !0),
        setTimeout(function () {
          e.state.delayingBlurEvent &&
            ((e.state.delayingBlurEvent = !1), e.state.focused && Pr(e));
        }, 100);
    }
    function _i(e, t) {
      e.state.delayingBlurEvent &&
        !e.state.draggingText &&
        (e.state.delayingBlurEvent = !1),
        e.options.readOnly != 'nocursor' &&
          (e.state.focused ||
            (de(e, 'focus', e, t),
            (e.state.focused = !0),
            C(e.display.wrapper, 'CodeMirror-focused'),
            !e.curOp &&
              e.display.selForContextMenu != e.doc.sel &&
              (e.display.input.reset(),
              W &&
                setTimeout(function () {
                  return e.display.input.reset(!0);
                }, 20)),
            e.display.input.receivedFocus()),
          zi(e));
    }
    function Pr(e, t) {
      e.state.delayingBlurEvent ||
        (e.state.focused &&
          (de(e, 'blur', e, t),
          (e.state.focused = !1),
          ve(e.display.wrapper, 'CodeMirror-focused')),
        clearInterval(e.display.blinker),
        setTimeout(function () {
          e.state.focused || (e.display.shift = !1);
        }, 150));
    }
    function Zn(e) {
      for (
        var t = e.display,
          n = t.lineDiv.offsetTop,
          r = Math.max(0, t.scroller.getBoundingClientRect().top),
          i = t.lineDiv.getBoundingClientRect().top,
          o = 0,
          l = 0;
        l < t.view.length;
        l++
      ) {
        var a = t.view[l],
          s = e.options.lineWrapping,
          u = void 0,
          c = 0;
        if (!a.hidden) {
          if (((i += a.line.height), L && Y < 8)) {
            var h = a.node.offsetTop + a.node.offsetHeight;
            (u = h - n), (n = h);
          } else {
            var b = a.node.getBoundingClientRect();
            (u = b.bottom - b.top),
              !s &&
                a.text.firstChild &&
                (c =
                  a.text.firstChild.getBoundingClientRect().right - b.left - 1);
          }
          var y = a.line.height - u;
          if (
            (y > 0.005 || y < -0.005) &&
            (i < r && (o -= y), Ct(a.line, u), $o(a.line), a.rest)
          )
            for (var w = 0; w < a.rest.length; w++) $o(a.rest[w]);
          if (c > e.display.sizerWidth) {
            var k = Math.ceil(c / Fr(e.display));
            k > e.display.maxLineLength &&
              ((e.display.maxLineLength = k),
              (e.display.maxLine = a.line),
              (e.display.maxLineChanged = !0));
          }
        }
      }
      Math.abs(o) > 2 && (t.scroller.scrollTop += o);
    }
    function $o(e) {
      if (e.widgets)
        for (var t = 0; t < e.widgets.length; ++t) {
          var n = e.widgets[t],
            r = n.node.parentNode;
          r && (n.height = r.offsetHeight);
        }
    }
    function Qn(e, t, n) {
      var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
      r = Math.floor(r - Gn(e));
      var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight,
        o = Pt(t, r),
        l = Pt(t, i);
      if (n && n.ensure) {
        var a = n.ensure.from.line,
          s = n.ensure.to.line;
        a < o
          ? ((o = a), (l = Pt(t, Qt(P(t, a)) + e.wrapper.clientHeight)))
          : Math.min(s, t.lastLine()) >= l &&
            ((o = Pt(t, Qt(P(t, s)) - e.wrapper.clientHeight)), (l = s));
      }
      return { from: o, to: Math.max(l, o + 1) };
    }
    function Va(e, t) {
      if (!we(e, 'scrollCursorIntoView')) {
        var n = e.display,
          r = n.sizer.getBoundingClientRect(),
          i = null,
          o = n.wrapper.ownerDocument;
        if (
          (t.top + r.top < 0
            ? (i = !0)
            : t.bottom + r.top >
                (o.defaultView.innerHeight || o.documentElement.clientHeight) &&
              (i = !1),
          i != null && !Ge)
        ) {
          var l = p(
            'div',
            '​',
            null,
            `position: absolute;
                         top: ` +
              (t.top - n.viewOffset - Gn(e.display)) +
              `px;
                         height: ` +
              (t.bottom - t.top + Ht(e) + n.barHeight) +
              `px;
                         left: ` +
              t.left +
              'px; width: ' +
              Math.max(2, t.right - t.left) +
              'px;'
          );
          e.display.lineSpace.appendChild(l),
            l.scrollIntoView(i),
            e.display.lineSpace.removeChild(l);
        }
      }
    }
    function $a(e, t, n, r) {
      r == null && (r = 0);
      var i;
      !e.options.lineWrapping &&
        t == n &&
        ((n = t.sticky == 'before' ? v(t.line, t.ch + 1, 'before') : t),
        (t = t.ch
          ? v(t.line, t.sticky == 'before' ? t.ch - 1 : t.ch, 'after')
          : t));
      for (var o = 0; o < 5; o++) {
        var l = !1,
          a = Nt(e, t),
          s = !n || n == t ? a : Nt(e, n);
        i = {
          left: Math.min(a.left, s.left),
          top: Math.min(a.top, s.top) - r,
          right: Math.max(a.left, s.left),
          bottom: Math.max(a.bottom, s.bottom) + r,
        };
        var u = Ri(e, i),
          c = e.doc.scrollTop,
          h = e.doc.scrollLeft;
        if (
          (u.scrollTop != null &&
            (cn(e, u.scrollTop), Math.abs(e.doc.scrollTop - c) > 1 && (l = !0)),
          u.scrollLeft != null &&
            (wr(e, u.scrollLeft),
            Math.abs(e.doc.scrollLeft - h) > 1 && (l = !0)),
          !l)
        )
          break;
      }
      return i;
    }
    function es(e, t) {
      var n = Ri(e, t);
      n.scrollTop != null && cn(e, n.scrollTop),
        n.scrollLeft != null && wr(e, n.scrollLeft);
    }
    function Ri(e, t) {
      var n = e.display,
        r = Wr(e.display);
      t.top < 0 && (t.top = 0);
      var i =
          e.curOp && e.curOp.scrollTop != null
            ? e.curOp.scrollTop
            : n.scroller.scrollTop,
        o = Mi(e),
        l = {};
      t.bottom - t.top > o && (t.bottom = t.top + o);
      var a = e.doc.height + Ti(n),
        s = t.top < r,
        u = t.bottom > a - r;
      if (t.top < i) l.scrollTop = s ? 0 : t.top;
      else if (t.bottom > i + o) {
        var c = Math.min(t.top, (u ? a : t.bottom) - o);
        c != i && (l.scrollTop = c);
      }
      var h = e.options.fixedGutter ? 0 : n.gutters.offsetWidth,
        b =
          e.curOp && e.curOp.scrollLeft != null
            ? e.curOp.scrollLeft
            : n.scroller.scrollLeft - h,
        y = yr(e) - n.gutters.offsetWidth,
        w = t.right - t.left > y;
      return (
        w && (t.right = t.left + y),
        t.left < 10
          ? (l.scrollLeft = 0)
          : t.left < b
          ? (l.scrollLeft = Math.max(0, t.left + h - (w ? 0 : 10)))
          : t.right > y + b - 3 && (l.scrollLeft = t.right + (w ? 0 : 10) - y),
        l
      );
    }
    function Bi(e, t) {
      t != null &&
        (Jn(e),
        (e.curOp.scrollTop =
          (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) +
          t));
    }
    function zr(e) {
      Jn(e);
      var t = e.getCursor();
      e.curOp.scrollToPos = {
        from: t,
        to: t,
        margin: e.options.cursorScrollMargin,
      };
    }
    function fn(e, t, n) {
      (t != null || n != null) && Jn(e),
        t != null && (e.curOp.scrollLeft = t),
        n != null && (e.curOp.scrollTop = n);
    }
    function ts(e, t) {
      Jn(e), (e.curOp.scrollToPos = t);
    }
    function Jn(e) {
      var t = e.curOp.scrollToPos;
      if (t) {
        e.curOp.scrollToPos = null;
        var n = Xo(e, t.from),
          r = Xo(e, t.to);
        el(e, n, r, t.margin);
      }
    }
    function el(e, t, n, r) {
      var i = Ri(e, {
        left: Math.min(t.left, n.left),
        top: Math.min(t.top, n.top) - r,
        right: Math.max(t.right, n.right),
        bottom: Math.max(t.bottom, n.bottom) + r,
      });
      fn(e, i.scrollLeft, i.scrollTop);
    }
    function cn(e, t) {
      Math.abs(e.doc.scrollTop - t) < 2 ||
        (ue || Ki(e, { top: t }), tl(e, t, !0), ue && Ki(e), pn(e, 100));
    }
    function tl(e, t, n) {
      (t = Math.max(
        0,
        Math.min(
          e.display.scroller.scrollHeight - e.display.scroller.clientHeight,
          t
        )
      )),
        !(e.display.scroller.scrollTop == t && !n) &&
          ((e.doc.scrollTop = t),
          e.display.scrollbars.setScrollTop(t),
          e.display.scroller.scrollTop != t &&
            (e.display.scroller.scrollTop = t));
    }
    function wr(e, t, n, r) {
      (t = Math.max(
        0,
        Math.min(
          t,
          e.display.scroller.scrollWidth - e.display.scroller.clientWidth
        )
      )),
        !(
          (n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r
        ) &&
          ((e.doc.scrollLeft = t),
          ll(e),
          e.display.scroller.scrollLeft != t &&
            (e.display.scroller.scrollLeft = t),
          e.display.scrollbars.setScrollLeft(t));
    }
    function hn(e) {
      var t = e.display,
        n = t.gutters.offsetWidth,
        r = Math.round(e.doc.height + Ti(e.display));
      return {
        clientHeight: t.scroller.clientHeight,
        viewHeight: t.wrapper.clientHeight,
        scrollWidth: t.scroller.scrollWidth,
        clientWidth: t.scroller.clientWidth,
        viewWidth: t.wrapper.clientWidth,
        barLeft: e.options.fixedGutter ? n : 0,
        docHeight: r,
        scrollHeight: r + Ht(e) + t.barHeight,
        nativeBarWidth: t.nativeBarWidth,
        gutterWidth: n,
      };
    }
    var kr = function (e, t, n) {
      this.cm = n;
      var r = (this.vert = p(
          'div',
          [p('div', null, null, 'min-width: 1px')],
          'CodeMirror-vscrollbar'
        )),
        i = (this.horiz = p(
          'div',
          [p('div', null, null, 'height: 100%; min-height: 1px')],
          'CodeMirror-hscrollbar'
        ));
      (r.tabIndex = i.tabIndex = -1),
        e(r),
        e(i),
        O(r, 'scroll', function () {
          r.clientHeight && t(r.scrollTop, 'vertical');
        }),
        O(i, 'scroll', function () {
          i.clientWidth && t(i.scrollLeft, 'horizontal');
        }),
        (this.checkedZeroWidth = !1),
        L &&
          Y < 8 &&
          (this.horiz.style.minHeight = this.vert.style.minWidth = '18px');
    };
    (kr.prototype.update = function (e) {
      var t = e.scrollWidth > e.clientWidth + 1,
        n = e.scrollHeight > e.clientHeight + 1,
        r = e.nativeBarWidth;
      if (n) {
        (this.vert.style.display = 'block'),
          (this.vert.style.bottom = t ? r + 'px' : '0');
        var i = e.viewHeight - (t ? r : 0);
        this.vert.firstChild.style.height =
          Math.max(0, e.scrollHeight - e.clientHeight + i) + 'px';
      } else
        (this.vert.scrollTop = 0),
          (this.vert.style.display = ''),
          (this.vert.firstChild.style.height = '0');
      if (t) {
        (this.horiz.style.display = 'block'),
          (this.horiz.style.right = n ? r + 'px' : '0'),
          (this.horiz.style.left = e.barLeft + 'px');
        var o = e.viewWidth - e.barLeft - (n ? r : 0);
        this.horiz.firstChild.style.width =
          Math.max(0, e.scrollWidth - e.clientWidth + o) + 'px';
      } else
        (this.horiz.style.display = ''),
          (this.horiz.firstChild.style.width = '0');
      return (
        !this.checkedZeroWidth &&
          e.clientHeight > 0 &&
          (r == 0 && this.zeroWidthHack(), (this.checkedZeroWidth = !0)),
        { right: n ? r : 0, bottom: t ? r : 0 }
      );
    }),
      (kr.prototype.setScrollLeft = function (e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
          this.disableHoriz &&
            this.enableZeroWidthBar(this.horiz, this.disableHoriz, 'horiz');
      }),
      (kr.prototype.setScrollTop = function (e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e),
          this.disableVert &&
            this.enableZeroWidthBar(this.vert, this.disableVert, 'vert');
      }),
      (kr.prototype.zeroWidthHack = function () {
        var e = me && !Te ? '12px' : '18px';
        (this.horiz.style.height = this.vert.style.width = e),
          (this.horiz.style.visibility = this.vert.style.visibility = 'hidden'),
          (this.disableHoriz = new J()),
          (this.disableVert = new J());
      }),
      (kr.prototype.enableZeroWidthBar = function (e, t, n) {
        e.style.visibility = '';
        function r() {
          var i = e.getBoundingClientRect(),
            o =
              n == 'vert'
                ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2)
                : document.elementFromPoint(
                    (i.right + i.left) / 2,
                    i.bottom - 1
                  );
          o != e ? (e.style.visibility = 'hidden') : t.set(1e3, r);
        }
        t.set(1e3, r);
      }),
      (kr.prototype.clear = function () {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      });
    var dn = function () {};
    (dn.prototype.update = function () {
      return { bottom: 0, right: 0 };
    }),
      (dn.prototype.setScrollLeft = function () {}),
      (dn.prototype.setScrollTop = function () {}),
      (dn.prototype.clear = function () {});
    function Hr(e, t) {
      t || (t = hn(e));
      var n = e.display.barWidth,
        r = e.display.barHeight;
      rl(e, t);
      for (
        var i = 0;
        (i < 4 && n != e.display.barWidth) || r != e.display.barHeight;
        i++
      )
        n != e.display.barWidth && e.options.lineWrapping && Zn(e),
          rl(e, hn(e)),
          (n = e.display.barWidth),
          (r = e.display.barHeight);
    }
    function rl(e, t) {
      var n = e.display,
        r = n.scrollbars.update(t);
      (n.sizer.style.paddingRight = (n.barWidth = r.right) + 'px'),
        (n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + 'px'),
        (n.heightForcer.style.borderBottom = r.bottom + 'px solid transparent'),
        r.right && r.bottom
          ? ((n.scrollbarFiller.style.display = 'block'),
            (n.scrollbarFiller.style.height = r.bottom + 'px'),
            (n.scrollbarFiller.style.width = r.right + 'px'))
          : (n.scrollbarFiller.style.display = ''),
        r.bottom &&
        e.options.coverGutterNextToScrollbar &&
        e.options.fixedGutter
          ? ((n.gutterFiller.style.display = 'block'),
            (n.gutterFiller.style.height = r.bottom + 'px'),
            (n.gutterFiller.style.width = t.gutterWidth + 'px'))
          : (n.gutterFiller.style.display = '');
    }
    var nl = { native: kr, null: dn };
    function il(e) {
      e.display.scrollbars &&
        (e.display.scrollbars.clear(),
        e.display.scrollbars.addClass &&
          ve(e.display.wrapper, e.display.scrollbars.addClass)),
        (e.display.scrollbars = new nl[e.options.scrollbarStyle](
          function (t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
              O(t, 'mousedown', function () {
                e.state.focused &&
                  setTimeout(function () {
                    return e.display.input.focus();
                  }, 0);
              }),
              t.setAttribute('cm-not-content', 'true');
          },
          function (t, n) {
            n == 'horizontal' ? wr(e, t) : cn(e, t);
          },
          e
        )),
        e.display.scrollbars.addClass &&
          C(e.display.wrapper, e.display.scrollbars.addClass);
    }
    var rs = 0;
    function Sr(e) {
      (e.curOp = {
        cm: e,
        viewChanged: !1,
        startHeight: e.doc.height,
        forceUpdate: !1,
        updateInput: 0,
        typing: !1,
        changeObjs: null,
        cursorActivityHandlers: null,
        cursorActivityCalled: 0,
        selectionChanged: !1,
        updateMaxLine: !1,
        scrollLeft: null,
        scrollTop: null,
        scrollToPos: null,
        focus: !1,
        id: ++rs,
        markArrays: null,
      }),
        Ia(e.curOp);
    }
    function Cr(e) {
      var t = e.curOp;
      t &&
        Fa(t, function (n) {
          for (var r = 0; r < n.ops.length; r++) n.ops[r].cm.curOp = null;
          ns(n);
        });
    }
    function ns(e) {
      for (var t = e.ops, n = 0; n < t.length; n++) is(t[n]);
      for (var r = 0; r < t.length; r++) os(t[r]);
      for (var i = 0; i < t.length; i++) ls(t[i]);
      for (var o = 0; o < t.length; o++) as(t[o]);
      for (var l = 0; l < t.length; l++) ss(t[l]);
    }
    function is(e) {
      var t = e.cm,
        n = t.display;
      fs(t),
        e.updateMaxLine && Ci(t),
        (e.mustUpdate =
          e.viewChanged ||
          e.forceUpdate ||
          e.scrollTop != null ||
          (e.scrollToPos &&
            (e.scrollToPos.from.line < n.viewFrom ||
              e.scrollToPos.to.line >= n.viewTo)) ||
          (n.maxLineChanged && t.options.lineWrapping)),
        (e.update =
          e.mustUpdate &&
          new Vn(
            t,
            e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos },
            e.forceUpdate
          ));
    }
    function os(e) {
      e.updatedDisplay = e.mustUpdate && Ui(e.cm, e.update);
    }
    function ls(e) {
      var t = e.cm,
        n = t.display;
      e.updatedDisplay && Zn(t),
        (e.barMeasure = hn(t)),
        n.maxLineChanged &&
          !t.options.lineWrapping &&
          ((e.adjustWidthTo = Ho(t, n.maxLine, n.maxLine.text.length).left + 3),
          (t.display.sizerWidth = e.adjustWidthTo),
          (e.barMeasure.scrollWidth = Math.max(
            n.scroller.clientWidth,
            n.sizer.offsetLeft + e.adjustWidthTo + Ht(t) + t.display.barWidth
          )),
          (e.maxScrollLeft = Math.max(
            0,
            n.sizer.offsetLeft + e.adjustWidthTo - yr(t)
          ))),
        (e.updatedDisplay || e.selectionChanged) &&
          (e.preparedSelection = n.input.prepareSelection());
    }
    function as(e) {
      var t = e.cm;
      e.adjustWidthTo != null &&
        ((t.display.sizer.style.minWidth = e.adjustWidthTo + 'px'),
        e.maxScrollLeft < t.doc.scrollLeft &&
          wr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
        (t.display.maxLineChanged = !1));
      var n = e.focus && e.focus == g(Q(t));
      e.preparedSelection &&
        t.display.input.showSelection(e.preparedSelection, n),
        (e.updatedDisplay || e.startHeight != t.doc.height) &&
          Hr(t, e.barMeasure),
        e.updatedDisplay && qi(t, e.barMeasure),
        e.selectionChanged && zi(t),
        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
        n && Vo(e.cm);
    }
    function ss(e) {
      var t = e.cm,
        n = t.display,
        r = t.doc;
      if (
        (e.updatedDisplay && ol(t, e.update),
        n.wheelStartX != null &&
          (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) &&
          (n.wheelStartX = n.wheelStartY = null),
        e.scrollTop != null && tl(t, e.scrollTop, e.forceScroll),
        e.scrollLeft != null && wr(t, e.scrollLeft, !0, !0),
        e.scrollToPos)
      ) {
        var i = $a(
          t,
          Z(r, e.scrollToPos.from),
          Z(r, e.scrollToPos.to),
          e.scrollToPos.margin
        );
        Va(t, i);
      }
      var o = e.maybeHiddenMarkers,
        l = e.maybeUnhiddenMarkers;
      if (o)
        for (var a = 0; a < o.length; ++a)
          o[a].lines.length || de(o[a], 'hide');
      if (l)
        for (var s = 0; s < l.length; ++s)
          l[s].lines.length && de(l[s], 'unhide');
      n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
        e.changeObjs && de(t, 'changes', t, e.changeObjs),
        e.update && e.update.finish();
    }
    function ht(e, t) {
      if (e.curOp) return t();
      Sr(e);
      try {
        return t();
      } finally {
        Cr(e);
      }
    }
    function ze(e, t) {
      return function () {
        if (e.curOp) return t.apply(e, arguments);
        Sr(e);
        try {
          return t.apply(e, arguments);
        } finally {
          Cr(e);
        }
      };
    }
    function Ve(e) {
      return function () {
        if (this.curOp) return e.apply(this, arguments);
        Sr(this);
        try {
          return e.apply(this, arguments);
        } finally {
          Cr(this);
        }
      };
    }
    function He(e) {
      return function () {
        var t = this.cm;
        if (!t || t.curOp) return e.apply(this, arguments);
        Sr(t);
        try {
          return e.apply(this, arguments);
        } finally {
          Cr(t);
        }
      };
    }
    function pn(e, t) {
      e.doc.highlightFrontier < e.display.viewTo &&
        e.state.highlight.set(t, Ae(us, e));
    }
    function us(e) {
      var t = e.doc;
      if (!(t.highlightFrontier >= e.display.viewTo)) {
        var n = +new Date() + e.options.workTime,
          r = rn(e, t.highlightFrontier),
          i = [];
        t.iter(
          r.line,
          Math.min(t.first + t.size, e.display.viewTo + 500),
          function (o) {
            if (r.line >= e.display.viewFrom) {
              var l = o.styles,
                a =
                  o.text.length > e.options.maxHighlightLength
                    ? Yt(t.mode, r.state)
                    : null,
                s = co(e, o, r, !0);
              a && (r.state = a), (o.styles = s.styles);
              var u = o.styleClasses,
                c = s.classes;
              c ? (o.styleClasses = c) : u && (o.styleClasses = null);
              for (
                var h =
                    !l ||
                    l.length != o.styles.length ||
                    (u != c &&
                      (!u ||
                        !c ||
                        u.bgClass != c.bgClass ||
                        u.textClass != c.textClass)),
                  b = 0;
                !h && b < l.length;
                ++b
              )
                h = l[b] != o.styles[b];
              h && i.push(r.line), (o.stateAfter = r.save()), r.nextLine();
            } else
              o.text.length <= e.options.maxHighlightLength && mi(e, o.text, r),
                (o.stateAfter = r.line % 5 == 0 ? r.save() : null),
                r.nextLine();
            if (+new Date() > n) return pn(e, e.options.workDelay), !0;
          }
        ),
          (t.highlightFrontier = r.line),
          (t.modeFrontier = Math.max(t.modeFrontier, r.line)),
          i.length &&
            ht(e, function () {
              for (var o = 0; o < i.length; o++) ar(e, i[o], 'text');
            });
      }
    }
    var Vn = function (e, t, n) {
      var r = e.display;
      (this.viewport = t),
        (this.visible = Qn(r, e.doc, t)),
        (this.editorIsHidden = !r.wrapper.offsetWidth),
        (this.wrapperHeight = r.wrapper.clientHeight),
        (this.wrapperWidth = r.wrapper.clientWidth),
        (this.oldDisplayWidth = yr(e)),
        (this.force = n),
        (this.dims = Ii(e)),
        (this.events = []);
    };
    (Vn.prototype.signal = function (e, t) {
      Qe(e, t) && this.events.push(arguments);
    }),
      (Vn.prototype.finish = function () {
        for (var e = 0; e < this.events.length; e++)
          de.apply(null, this.events[e]);
      });
    function fs(e) {
      var t = e.display;
      !t.scrollbarsClipped &&
        t.scroller.offsetWidth &&
        ((t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth),
        (t.heightForcer.style.height = Ht(e) + 'px'),
        (t.sizer.style.marginBottom = -t.nativeBarWidth + 'px'),
        (t.sizer.style.borderRightWidth = Ht(e) + 'px'),
        (t.scrollbarsClipped = !0));
    }
    function cs(e) {
      if (e.hasFocus()) return null;
      var t = g(Q(e));
      if (!t || !m(e.display.lineDiv, t)) return null;
      var n = { activeElt: t };
      if (window.getSelection) {
        var r = Fe(e).getSelection();
        r.anchorNode &&
          r.extend &&
          m(e.display.lineDiv, r.anchorNode) &&
          ((n.anchorNode = r.anchorNode),
          (n.anchorOffset = r.anchorOffset),
          (n.focusNode = r.focusNode),
          (n.focusOffset = r.focusOffset));
      }
      return n;
    }
    function hs(e) {
      if (
        !(!e || !e.activeElt || e.activeElt == g(e.activeElt.ownerDocument)) &&
        (e.activeElt.focus(),
        !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) &&
          e.anchorNode &&
          m(document.body, e.anchorNode) &&
          m(document.body, e.focusNode))
      ) {
        var t = e.activeElt.ownerDocument,
          n = t.defaultView.getSelection(),
          r = t.createRange();
        r.setEnd(e.anchorNode, e.anchorOffset),
          r.collapse(!1),
          n.removeAllRanges(),
          n.addRange(r),
          n.extend(e.focusNode, e.focusOffset);
      }
    }
    function Ui(e, t) {
      var n = e.display,
        r = e.doc;
      if (t.editorIsHidden) return sr(e), !1;
      if (
        !t.force &&
        t.visible.from >= n.viewFrom &&
        t.visible.to <= n.viewTo &&
        (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) &&
        n.renderedView == n.view &&
        Qo(e) == 0
      )
        return !1;
      al(e) && (sr(e), (t.dims = Ii(e)));
      var i = r.first + r.size,
        o = Math.max(t.visible.from - e.options.viewportMargin, r.first),
        l = Math.min(i, t.visible.to + e.options.viewportMargin);
      n.viewFrom < o &&
        o - n.viewFrom < 20 &&
        (o = Math.max(r.first, n.viewFrom)),
        n.viewTo > l && n.viewTo - l < 20 && (l = Math.min(i, n.viewTo)),
        Zt && ((o = ki(e.doc, o)), (l = To(e.doc, l)));
      var a =
        o != n.viewFrom ||
        l != n.viewTo ||
        n.lastWrapHeight != t.wrapperHeight ||
        n.lastWrapWidth != t.wrapperWidth;
      Qa(e, o, l),
        (n.viewOffset = Qt(P(e.doc, n.viewFrom))),
        (e.display.mover.style.top = n.viewOffset + 'px');
      var s = Qo(e);
      if (
        !a &&
        s == 0 &&
        !t.force &&
        n.renderedView == n.view &&
        (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo)
      )
        return !1;
      var u = cs(e);
      return (
        s > 4 && (n.lineDiv.style.display = 'none'),
        ds(e, n.updateLineNumbers, t.dims),
        s > 4 && (n.lineDiv.style.display = ''),
        (n.renderedView = n.view),
        hs(u),
        S(n.cursorDiv),
        S(n.selectionDiv),
        (n.gutters.style.height = n.sizer.style.minHeight = 0),
        a &&
          ((n.lastWrapHeight = t.wrapperHeight),
          (n.lastWrapWidth = t.wrapperWidth),
          pn(e, 400)),
        (n.updateLineNumbers = null),
        !0
      );
    }
    function ol(e, t) {
      for (var n = t.viewport, r = !0; ; r = !1) {
        if (!r || !e.options.lineWrapping || t.oldDisplayWidth == yr(e)) {
          if (
            (n &&
              n.top != null &&
              (n = {
                top: Math.min(e.doc.height + Ti(e.display) - Mi(e), n.top),
              }),
            (t.visible = Qn(e.display, e.doc, n)),
            t.visible.from >= e.display.viewFrom &&
              t.visible.to <= e.display.viewTo)
          )
            break;
        } else r && (t.visible = Qn(e.display, e.doc, n));
        if (!Ui(e, t)) break;
        Zn(e);
        var i = hn(e);
        un(e), Hr(e, i), qi(e, i), (t.force = !1);
      }
      t.signal(e, 'update', e),
        (e.display.viewFrom != e.display.reportedViewFrom ||
          e.display.viewTo != e.display.reportedViewTo) &&
          (t.signal(
            e,
            'viewportChange',
            e,
            e.display.viewFrom,
            e.display.viewTo
          ),
          (e.display.reportedViewFrom = e.display.viewFrom),
          (e.display.reportedViewTo = e.display.viewTo));
    }
    function Ki(e, t) {
      var n = new Vn(e, t);
      if (Ui(e, n)) {
        Zn(e), ol(e, n);
        var r = hn(e);
        un(e), Hr(e, r), qi(e, r), n.finish();
      }
    }
    function ds(e, t, n) {
      var r = e.display,
        i = e.options.lineNumbers,
        o = r.lineDiv,
        l = o.firstChild;
      function a(w) {
        var k = w.nextSibling;
        return (
          W && me && e.display.currentWheelTarget == w
            ? (w.style.display = 'none')
            : w.parentNode.removeChild(w),
          k
        );
      }
      for (var s = r.view, u = r.viewFrom, c = 0; c < s.length; c++) {
        var h = s[c];
        if (!h.hidden)
          if (!h.node || h.node.parentNode != o) {
            var b = Ra(e, h, u, n);
            o.insertBefore(b, l);
          } else {
            for (; l != h.node; ) l = a(l);
            var y = i && t != null && t <= u && h.lineNumber;
            h.changes &&
              ($(h.changes, 'gutter') > -1 && (y = !1), Oo(e, h, u, n)),
              y &&
                (S(h.lineNumber),
                h.lineNumber.appendChild(
                  document.createTextNode(d(e.options, u))
                )),
              (l = h.node.nextSibling);
          }
        u += h.size;
      }
      for (; l; ) l = a(l);
    }
    function Gi(e) {
      var t = e.gutters.offsetWidth;
      (e.sizer.style.marginLeft = t + 'px'), Pe(e, 'gutterChanged', e);
    }
    function qi(e, t) {
      (e.display.sizer.style.minHeight = t.docHeight + 'px'),
        (e.display.heightForcer.style.top = t.docHeight + 'px'),
        (e.display.gutters.style.height =
          t.docHeight + e.display.barHeight + Ht(e) + 'px');
    }
    function ll(e) {
      var t = e.display,
        n = t.view;
      if (
        !(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))
      ) {
        for (
          var r = Wi(t) - t.scroller.scrollLeft + e.doc.scrollLeft,
            i = t.gutters.offsetWidth,
            o = r + 'px',
            l = 0;
          l < n.length;
          l++
        )
          if (!n[l].hidden) {
            e.options.fixedGutter &&
              (n[l].gutter && (n[l].gutter.style.left = o),
              n[l].gutterBackground && (n[l].gutterBackground.style.left = o));
            var a = n[l].alignable;
            if (a) for (var s = 0; s < a.length; s++) a[s].style.left = o;
          }
        e.options.fixedGutter && (t.gutters.style.left = r + i + 'px');
      }
    }
    function al(e) {
      if (!e.options.lineNumbers) return !1;
      var t = e.doc,
        n = d(e.options, t.first + t.size - 1),
        r = e.display;
      if (n.length != r.lineNumChars) {
        var i = r.measure.appendChild(
            p(
              'div',
              [p('div', n)],
              'CodeMirror-linenumber CodeMirror-gutter-elt'
            )
          ),
          o = i.firstChild.offsetWidth,
          l = i.offsetWidth - o;
        return (
          (r.lineGutter.style.width = ''),
          (r.lineNumInnerWidth = Math.max(o, r.lineGutter.offsetWidth - l) + 1),
          (r.lineNumWidth = r.lineNumInnerWidth + l),
          (r.lineNumChars = r.lineNumInnerWidth ? n.length : -1),
          (r.lineGutter.style.width = r.lineNumWidth + 'px'),
          Gi(e.display),
          !0
        );
      }
      return !1;
    }
    function Xi(e, t) {
      for (var n = [], r = !1, i = 0; i < e.length; i++) {
        var o = e[i],
          l = null;
        if (
          (typeof o != 'string' && ((l = o.style), (o = o.className)),
          o == 'CodeMirror-linenumbers')
        )
          if (t) r = !0;
          else continue;
        n.push({ className: o, style: l });
      }
      return (
        t && !r && n.push({ className: 'CodeMirror-linenumbers', style: null }),
        n
      );
    }
    function sl(e) {
      var t = e.gutters,
        n = e.gutterSpecs;
      S(t), (e.lineGutter = null);
      for (var r = 0; r < n.length; ++r) {
        var i = n[r],
          o = i.className,
          l = i.style,
          a = t.appendChild(p('div', null, 'CodeMirror-gutter ' + o));
        l && (a.style.cssText = l),
          o == 'CodeMirror-linenumbers' &&
            ((e.lineGutter = a),
            (a.style.width = (e.lineNumWidth || 1) + 'px'));
      }
      (t.style.display = n.length ? '' : 'none'), Gi(e);
    }
    function vn(e) {
      sl(e.display), tt(e), ll(e);
    }
    function ps(e, t, n, r) {
      var i = this;
      (this.input = n),
        (i.scrollbarFiller = p('div', null, 'CodeMirror-scrollbar-filler')),
        i.scrollbarFiller.setAttribute('cm-not-content', 'true'),
        (i.gutterFiller = p('div', null, 'CodeMirror-gutter-filler')),
        i.gutterFiller.setAttribute('cm-not-content', 'true'),
        (i.lineDiv = M('div', null, 'CodeMirror-code')),
        (i.selectionDiv = p(
          'div',
          null,
          null,
          'position: relative; z-index: 1'
        )),
        (i.cursorDiv = p('div', null, 'CodeMirror-cursors')),
        (i.measure = p('div', null, 'CodeMirror-measure')),
        (i.lineMeasure = p('div', null, 'CodeMirror-measure')),
        (i.lineSpace = M(
          'div',
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          'position: relative; outline: none'
        ));
      var o = M('div', [i.lineSpace], 'CodeMirror-lines');
      (i.mover = p('div', [o], null, 'position: relative')),
        (i.sizer = p('div', [i.mover], 'CodeMirror-sizer')),
        (i.sizerWidth = null),
        (i.heightForcer = p(
          'div',
          null,
          null,
          'position: absolute; height: ' + Mr + 'px; width: 1px;'
        )),
        (i.gutters = p('div', null, 'CodeMirror-gutters')),
        (i.lineGutter = null),
        (i.scroller = p(
          'div',
          [i.sizer, i.heightForcer, i.gutters],
          'CodeMirror-scroll'
        )),
        i.scroller.setAttribute('tabIndex', '-1'),
        (i.wrapper = p(
          'div',
          [i.scrollbarFiller, i.gutterFiller, i.scroller],
          'CodeMirror'
        )),
        Ze && at >= 105 && (i.wrapper.style.clipPath = 'inset(0px)'),
        i.wrapper.setAttribute('translate', 'no'),
        L &&
          Y < 8 &&
          ((i.gutters.style.zIndex = -1), (i.scroller.style.paddingRight = 0)),
        !W && !(ue && We) && (i.scroller.draggable = !0),
        e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)),
        (i.viewFrom = i.viewTo = t.first),
        (i.reportedViewFrom = i.reportedViewTo = t.first),
        (i.view = []),
        (i.renderedView = null),
        (i.externalMeasured = null),
        (i.viewOffset = 0),
        (i.lastWrapHeight = i.lastWrapWidth = 0),
        (i.updateLineNumbers = null),
        (i.nativeBarWidth = i.barHeight = i.barWidth = 0),
        (i.scrollbarsClipped = !1),
        (i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null),
        (i.alignWidgets = !1),
        (i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null),
        (i.maxLine = null),
        (i.maxLineLength = 0),
        (i.maxLineChanged = !1),
        (i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null),
        (i.shift = !1),
        (i.selForContextMenu = null),
        (i.activeTouch = null),
        (i.gutterSpecs = Xi(r.gutters, r.lineNumbers)),
        sl(i),
        n.init(i);
    }
    var $n = 0,
      Vt = null;
    L ? (Vt = -0.53) : ue ? (Vt = 15) : Ze ? (Vt = -0.7) : mt && (Vt = -1 / 3);
    function ul(e) {
      var t = e.wheelDeltaX,
        n = e.wheelDeltaY;
      return (
        t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
        n == null && e.detail && e.axis == e.VERTICAL_AXIS
          ? (n = e.detail)
          : n == null && (n = e.wheelDelta),
        { x: t, y: n }
      );
    }
    function vs(e) {
      var t = ul(e);
      return (t.x *= Vt), (t.y *= Vt), t;
    }
    function fl(e, t) {
      Ze &&
        at == 102 &&
        (e.display.chromeScrollHack == null
          ? (e.display.sizer.style.pointerEvents = 'none')
          : clearTimeout(e.display.chromeScrollHack),
        (e.display.chromeScrollHack = setTimeout(function () {
          (e.display.chromeScrollHack = null),
            (e.display.sizer.style.pointerEvents = '');
        }, 100)));
      var n = ul(t),
        r = n.x,
        i = n.y,
        o = Vt;
      t.deltaMode === 0 && ((r = t.deltaX), (i = t.deltaY), (o = 1));
      var l = e.display,
        a = l.scroller,
        s = a.scrollWidth > a.clientWidth,
        u = a.scrollHeight > a.clientHeight;
      if ((r && s) || (i && u)) {
        if (i && me && W) {
          e: for (var c = t.target, h = l.view; c != a; c = c.parentNode)
            for (var b = 0; b < h.length; b++)
              if (h[b].node == c) {
                e.display.currentWheelTarget = c;
                break e;
              }
        }
        if (r && !ue && !Ne && o != null) {
          i && u && cn(e, Math.max(0, a.scrollTop + i * o)),
            wr(e, Math.max(0, a.scrollLeft + r * o)),
            (!i || (i && u)) && Xe(t),
            (l.wheelStartX = null);
          return;
        }
        if (i && o != null) {
          var y = i * o,
            w = e.doc.scrollTop,
            k = w + l.wrapper.clientHeight;
          y < 0
            ? (w = Math.max(0, w + y - 50))
            : (k = Math.min(e.doc.height, k + y + 50)),
            Ki(e, { top: w, bottom: k });
        }
        $n < 20 &&
          t.deltaMode !== 0 &&
          (l.wheelStartX == null
            ? ((l.wheelStartX = a.scrollLeft),
              (l.wheelStartY = a.scrollTop),
              (l.wheelDX = r),
              (l.wheelDY = i),
              setTimeout(function () {
                if (l.wheelStartX != null) {
                  var T = a.scrollLeft - l.wheelStartX,
                    N = a.scrollTop - l.wheelStartY,
                    E =
                      (N && l.wheelDY && N / l.wheelDY) ||
                      (T && l.wheelDX && T / l.wheelDX);
                  (l.wheelStartX = l.wheelStartY = null),
                    E && ((Vt = (Vt * $n + E) / ($n + 1)), ++$n);
                }
              }, 200))
            : ((l.wheelDX += r), (l.wheelDY += i)));
      }
    }
    var yt = function (e, t) {
      (this.ranges = e), (this.primIndex = t);
    };
    (yt.prototype.primary = function () {
      return this.ranges[this.primIndex];
    }),
      (yt.prototype.equals = function (e) {
        if (e == this) return !0;
        if (
          e.primIndex != this.primIndex ||
          e.ranges.length != this.ranges.length
        )
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t],
            r = e.ranges[t];
          if (!j(n.anchor, r.anchor) || !j(n.head, r.head)) return !1;
        }
        return !0;
      }),
      (yt.prototype.deepCopy = function () {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new ae(ne(this.ranges[t].anchor), ne(this.ranges[t].head));
        return new yt(e, this.primIndex);
      }),
      (yt.prototype.somethingSelected = function () {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty()) return !0;
        return !1;
      }),
      (yt.prototype.contains = function (e, t) {
        t || (t = e);
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (x(t, r.from()) >= 0 && x(e, r.to()) <= 0) return n;
        }
        return -1;
      });
    var ae = function (e, t) {
      (this.anchor = e), (this.head = t);
    };
    (ae.prototype.from = function () {
      return Ee(this.anchor, this.head);
    }),
      (ae.prototype.to = function () {
        return oe(this.anchor, this.head);
      }),
      (ae.prototype.empty = function () {
        return (
          this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
        );
      });
    function At(e, t, n) {
      var r = e && e.options.selectionsMayTouch,
        i = t[n];
      t.sort(function (b, y) {
        return x(b.from(), y.from());
      }),
        (n = $(t, i));
      for (var o = 1; o < t.length; o++) {
        var l = t[o],
          a = t[o - 1],
          s = x(a.to(), l.from());
        if (r && !l.empty() ? s > 0 : s >= 0) {
          var u = Ee(a.from(), l.from()),
            c = oe(a.to(), l.to()),
            h = a.empty() ? l.from() == l.head : a.from() == a.head;
          o <= n && --n, t.splice(--o, 2, new ae(h ? c : u, h ? u : c));
        }
      }
      return new yt(t, n);
    }
    function ur(e, t) {
      return new yt([new ae(e, t || e)], 0);
    }
    function fr(e) {
      return e.text
        ? v(
            e.from.line + e.text.length - 1,
            te(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
          )
        : e.to;
    }
    function cl(e, t) {
      if (x(e, t.from) < 0) return e;
      if (x(e, t.to) <= 0) return fr(t);
      var n = e.line + t.text.length - (t.to.line - t.from.line) - 1,
        r = e.ch;
      return e.line == t.to.line && (r += fr(t).ch - t.to.ch), v(n, r);
    }
    function Yi(e, t) {
      for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
        var i = e.sel.ranges[r];
        n.push(new ae(cl(i.anchor, t), cl(i.head, t)));
      }
      return At(e.cm, n, e.sel.primIndex);
    }
    function hl(e, t, n) {
      return e.line == t.line
        ? v(n.line, e.ch - t.ch + n.ch)
        : v(n.line + (e.line - t.line), e.ch);
    }
    function gs(e, t, n) {
      for (var r = [], i = v(e.first, 0), o = i, l = 0; l < t.length; l++) {
        var a = t[l],
          s = hl(a.from, i, o),
          u = hl(fr(a), i, o);
        if (((i = a.to), (o = u), n == 'around')) {
          var c = e.sel.ranges[l],
            h = x(c.head, c.anchor) < 0;
          r[l] = new ae(h ? u : s, h ? s : u);
        } else r[l] = new ae(s, s);
      }
      return new yt(r, e.sel.primIndex);
    }
    function ji(e) {
      (e.doc.mode = Xt(e.options, e.doc.modeOption)), gn(e);
    }
    function gn(e) {
      e.doc.iter(function (t) {
        t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
      }),
        (e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first),
        pn(e, 100),
        e.state.modeGen++,
        e.curOp && tt(e);
    }
    function dl(e, t) {
      return (
        t.from.ch == 0 &&
        t.to.ch == 0 &&
        te(t.text) == '' &&
        (!e.cm || e.cm.options.wholeLineUpdateBefore)
      );
    }
    function Zi(e, t, n, r) {
      function i(E) {
        return n ? n[E] : null;
      }
      function o(E, A, I) {
        Ca(E, A, I, r), Pe(E, 'change', E, t);
      }
      function l(E, A) {
        for (var I = [], B = E; B < A; ++B) I.push(new Or(u[B], i(B), r));
        return I;
      }
      var a = t.from,
        s = t.to,
        u = t.text,
        c = P(e, a.line),
        h = P(e, s.line),
        b = te(u),
        y = i(u.length - 1),
        w = s.line - a.line;
      if (t.full)
        e.insert(0, l(0, u.length)), e.remove(u.length, e.size - u.length);
      else if (dl(e, t)) {
        var k = l(0, u.length - 1);
        o(h, h.text, y),
          w && e.remove(a.line, w),
          k.length && e.insert(a.line, k);
      } else if (c == h)
        if (u.length == 1)
          o(c, c.text.slice(0, a.ch) + b + c.text.slice(s.ch), y);
        else {
          var T = l(1, u.length - 1);
          T.push(new Or(b + c.text.slice(s.ch), y, r)),
            o(c, c.text.slice(0, a.ch) + u[0], i(0)),
            e.insert(a.line + 1, T);
        }
      else if (u.length == 1)
        o(c, c.text.slice(0, a.ch) + u[0] + h.text.slice(s.ch), i(0)),
          e.remove(a.line + 1, w);
      else {
        o(c, c.text.slice(0, a.ch) + u[0], i(0)),
          o(h, b + h.text.slice(s.ch), y);
        var N = l(1, u.length - 1);
        w > 1 && e.remove(a.line + 1, w - 1), e.insert(a.line + 1, N);
      }
      Pe(e, 'change', e, t);
    }
    function cr(e, t, n) {
      function r(i, o, l) {
        if (i.linked)
          for (var a = 0; a < i.linked.length; ++a) {
            var s = i.linked[a];
            if (s.doc != o) {
              var u = l && s.sharedHist;
              (n && !u) || (t(s.doc, u), r(s.doc, i, u));
            }
          }
      }
      r(e, null, !0);
    }
    function pl(e, t) {
      if (t.cm) throw new Error('This document is already in use.');
      (e.doc = t),
        (t.cm = e),
        Fi(e),
        ji(e),
        vl(e),
        (e.options.direction = t.direction),
        e.options.lineWrapping || Ci(e),
        (e.options.mode = t.modeOption),
        tt(e);
    }
    function vl(e) {
      (e.doc.direction == 'rtl' ? C : ve)(e.display.lineDiv, 'CodeMirror-rtl');
    }
    function ys(e) {
      ht(e, function () {
        vl(e), tt(e);
      });
    }
    function ei(e) {
      (this.done = []),
        (this.undone = []),
        (this.undoDepth = e ? e.undoDepth : 1 / 0),
        (this.lastModTime = this.lastSelTime = 0),
        (this.lastOp = this.lastSelOp = null),
        (this.lastOrigin = this.lastSelOrigin = null),
        (this.generation = this.maxGeneration = e ? e.maxGeneration : 1);
    }
    function Qi(e, t) {
      var n = { from: ne(t.from), to: fr(t), text: jt(e, t.from, t.to) };
      return (
        ml(e, n, t.from.line, t.to.line + 1),
        cr(
          e,
          function (r) {
            return ml(r, n, t.from.line, t.to.line + 1);
          },
          !0
        ),
        n
      );
    }
    function gl(e) {
      for (; e.length; ) {
        var t = te(e);
        if (t.ranges) e.pop();
        else break;
      }
    }
    function ms(e, t) {
      if (t) return gl(e.done), te(e.done);
      if (e.done.length && !te(e.done).ranges) return te(e.done);
      if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
        return e.done.pop(), te(e.done);
    }
    function yl(e, t, n, r) {
      var i = e.history;
      i.undone.length = 0;
      var o = +new Date(),
        l,
        a;
      if (
        (i.lastOp == r ||
          (i.lastOrigin == t.origin &&
            t.origin &&
            ((t.origin.charAt(0) == '+' &&
              i.lastModTime >
                o - (e.cm ? e.cm.options.historyEventDelay : 500)) ||
              t.origin.charAt(0) == '*'))) &&
        (l = ms(i, i.lastOp == r))
      )
        (a = te(l.changes)),
          x(t.from, t.to) == 0 && x(t.from, a.to) == 0
            ? (a.to = fr(t))
            : l.changes.push(Qi(e, t));
      else {
        var s = te(i.done);
        for (
          (!s || !s.ranges) && ti(e.sel, i.done),
            l = { changes: [Qi(e, t)], generation: i.generation },
            i.done.push(l);
          i.done.length > i.undoDepth;

        )
          i.done.shift(), i.done[0].ranges || i.done.shift();
      }
      i.done.push(n),
        (i.generation = ++i.maxGeneration),
        (i.lastModTime = i.lastSelTime = o),
        (i.lastOp = i.lastSelOp = r),
        (i.lastOrigin = i.lastSelOrigin = t.origin),
        a || de(e, 'historyAdded');
    }
    function bs(e, t, n, r) {
      var i = t.charAt(0);
      return (
        i == '*' ||
        (i == '+' &&
          n.ranges.length == r.ranges.length &&
          n.somethingSelected() == r.somethingSelected() &&
          new Date() - e.history.lastSelTime <=
            (e.cm ? e.cm.options.historyEventDelay : 500))
      );
    }
    function xs(e, t, n, r) {
      var i = e.history,
        o = r && r.origin;
      n == i.lastSelOp ||
      (o &&
        i.lastSelOrigin == o &&
        ((i.lastModTime == i.lastSelTime && i.lastOrigin == o) ||
          bs(e, o, te(i.done), t)))
        ? (i.done[i.done.length - 1] = t)
        : ti(t, i.done),
        (i.lastSelTime = +new Date()),
        (i.lastSelOrigin = o),
        (i.lastSelOp = n),
        r && r.clearRedo !== !1 && gl(i.undone);
    }
    function ti(e, t) {
      var n = te(t);
      (n && n.ranges && n.equals(e)) || t.push(e);
    }
    function ml(e, t, n, r) {
      var i = t['spans_' + e.id],
        o = 0;
      e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function (l) {
        l.markedSpans &&
          ((i || (i = t['spans_' + e.id] = {}))[o] = l.markedSpans),
          ++o;
      });
    }
    function ws(e) {
      if (!e) return null;
      for (var t, n = 0; n < e.length; ++n)
        e[n].marker.explicitlyCleared
          ? t || (t = e.slice(0, n))
          : t && t.push(e[n]);
      return t ? (t.length ? t : null) : e;
    }
    function ks(e, t) {
      var n = t['spans_' + e.id];
      if (!n) return null;
      for (var r = [], i = 0; i < t.text.length; ++i) r.push(ws(n[i]));
      return r;
    }
    function bl(e, t) {
      var n = ks(e, t),
        r = xi(e, t);
      if (!n) return r;
      if (!r) return n;
      for (var i = 0; i < n.length; ++i) {
        var o = n[i],
          l = r[i];
        if (o && l)
          e: for (var a = 0; a < l.length; ++a) {
            for (var s = l[a], u = 0; u < o.length; ++u)
              if (o[u].marker == s.marker) continue e;
            o.push(s);
          }
        else l && (n[i] = l);
      }
      return n;
    }
    function _r(e, t, n) {
      for (var r = [], i = 0; i < e.length; ++i) {
        var o = e[i];
        if (o.ranges) {
          r.push(n ? yt.prototype.deepCopy.call(o) : o);
          continue;
        }
        var l = o.changes,
          a = [];
        r.push({ changes: a });
        for (var s = 0; s < l.length; ++s) {
          var u = l[s],
            c = void 0;
          if ((a.push({ from: u.from, to: u.to, text: u.text }), t))
            for (var h in u)
              (c = h.match(/^spans_(\d+)$/)) &&
                $(t, Number(c[1])) > -1 &&
                ((te(a)[h] = u[h]), delete u[h]);
        }
      }
      return r;
    }
    function Ji(e, t, n, r) {
      if (r) {
        var i = e.anchor;
        if (n) {
          var o = x(t, i) < 0;
          o != x(n, i) < 0 ? ((i = t), (t = n)) : o != x(t, n) < 0 && (t = n);
        }
        return new ae(i, t);
      } else return new ae(n || t, t);
    }
    function ri(e, t, n, r, i) {
      i == null && (i = e.cm && (e.cm.display.shift || e.extend)),
        Ye(e, new yt([Ji(e.sel.primary(), t, n, i)], 0), r);
    }
    function xl(e, t, n) {
      for (
        var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0;
        o < e.sel.ranges.length;
        o++
      )
        r[o] = Ji(e.sel.ranges[o], t[o], null, i);
      var l = At(e.cm, r, e.sel.primIndex);
      Ye(e, l, n);
    }
    function Vi(e, t, n, r) {
      var i = e.sel.ranges.slice(0);
      (i[t] = n), Ye(e, At(e.cm, i, e.sel.primIndex), r);
    }
    function wl(e, t, n, r) {
      Ye(e, ur(t, n), r);
    }
    function Ss(e, t, n) {
      var r = {
        ranges: t.ranges,
        update: function (i) {
          this.ranges = [];
          for (var o = 0; o < i.length; o++)
            this.ranges[o] = new ae(Z(e, i[o].anchor), Z(e, i[o].head));
        },
        origin: n && n.origin,
      };
      return (
        de(e, 'beforeSelectionChange', e, r),
        e.cm && de(e.cm, 'beforeSelectionChange', e.cm, r),
        r.ranges != t.ranges ? At(e.cm, r.ranges, r.ranges.length - 1) : t
      );
    }
    function kl(e, t, n) {
      var r = e.history.done,
        i = te(r);
      i && i.ranges ? ((r[r.length - 1] = t), ni(e, t, n)) : Ye(e, t, n);
    }
    function Ye(e, t, n) {
      ni(e, t, n), xs(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
    }
    function ni(e, t, n) {
      (Qe(e, 'beforeSelectionChange') ||
        (e.cm && Qe(e.cm, 'beforeSelectionChange'))) &&
        (t = Ss(e, t, n));
      var r =
        (n && n.bias) ||
        (x(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
      Sl(e, Ll(e, t, r, !0)),
        !(n && n.scroll === !1) &&
          e.cm &&
          e.cm.getOption('readOnly') != 'nocursor' &&
          zr(e.cm);
    }
    function Sl(e, t) {
      t.equals(e.sel) ||
        ((e.sel = t),
        e.cm &&
          ((e.cm.curOp.updateInput = 1),
          (e.cm.curOp.selectionChanged = !0),
          En(e.cm)),
        Pe(e, 'cursorActivity', e));
    }
    function Cl(e) {
      Sl(e, Ll(e, e.sel, null, !1));
    }
    function Ll(e, t, n, r) {
      for (var i, o = 0; o < t.ranges.length; o++) {
        var l = t.ranges[o],
          a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o],
          s = ii(e, l.anchor, a && a.anchor, n, r),
          u = l.head == l.anchor ? s : ii(e, l.head, a && a.head, n, r);
        (i || s != l.anchor || u != l.head) &&
          (i || (i = t.ranges.slice(0, o)), (i[o] = new ae(s, u)));
      }
      return i ? At(e.cm, i, t.primIndex) : t;
    }
    function Rr(e, t, n, r, i) {
      var o = P(e, t.line);
      if (o.markedSpans)
        for (var l = 0; l < o.markedSpans.length; ++l) {
          var a = o.markedSpans[l],
            s = a.marker,
            u = 'selectLeft' in s ? !s.selectLeft : s.inclusiveLeft,
            c = 'selectRight' in s ? !s.selectRight : s.inclusiveRight;
          if (
            (a.from == null || (u ? a.from <= t.ch : a.from < t.ch)) &&
            (a.to == null || (c ? a.to >= t.ch : a.to > t.ch))
          ) {
            if (i && (de(s, 'beforeCursorEnter'), s.explicitlyCleared))
              if (o.markedSpans) {
                --l;
                continue;
              } else break;
            if (!s.atomic) continue;
            if (n) {
              var h = s.find(r < 0 ? 1 : -1),
                b = void 0;
              if (
                ((r < 0 ? c : u) &&
                  (h = Tl(e, h, -r, h && h.line == t.line ? o : null)),
                h &&
                  h.line == t.line &&
                  (b = x(h, n)) &&
                  (r < 0 ? b < 0 : b > 0))
              )
                return Rr(e, h, t, r, i);
            }
            var y = s.find(r < 0 ? -1 : 1);
            return (
              (r < 0 ? u : c) && (y = Tl(e, y, r, y.line == t.line ? o : null)),
              y ? Rr(e, y, t, r, i) : null
            );
          }
        }
      return t;
    }
    function ii(e, t, n, r, i) {
      var o = r || 1,
        l =
          Rr(e, t, n, o, i) ||
          (!i && Rr(e, t, n, o, !0)) ||
          Rr(e, t, n, -o, i) ||
          (!i && Rr(e, t, n, -o, !0));
      return l || ((e.cantEdit = !0), v(e.first, 0));
    }
    function Tl(e, t, n, r) {
      return n < 0 && t.ch == 0
        ? t.line > e.first
          ? Z(e, v(t.line - 1))
          : null
        : n > 0 && t.ch == (r || P(e, t.line)).text.length
        ? t.line < e.first + e.size - 1
          ? v(t.line + 1, 0)
          : null
        : new v(t.line, t.ch + n);
    }
    function Ml(e) {
      e.setSelection(v(e.firstLine(), 0), v(e.lastLine()), pe);
    }
    function Dl(e, t, n) {
      var r = {
        canceled: !1,
        from: t.from,
        to: t.to,
        text: t.text,
        origin: t.origin,
        cancel: function () {
          return (r.canceled = !0);
        },
      };
      return (
        n &&
          (r.update = function (i, o, l, a) {
            i && (r.from = Z(e, i)),
              o && (r.to = Z(e, o)),
              l && (r.text = l),
              a !== void 0 && (r.origin = a);
          }),
        de(e, 'beforeChange', e, r),
        e.cm && de(e.cm, 'beforeChange', e.cm, r),
        r.canceled
          ? (e.cm && (e.cm.curOp.updateInput = 2), null)
          : { from: r.from, to: r.to, text: r.text, origin: r.origin }
      );
    }
    function Br(e, t, n) {
      if (e.cm) {
        if (!e.cm.curOp) return ze(e.cm, Br)(e, t, n);
        if (e.cm.state.suppressEdits) return;
      }
      if (
        !(
          (Qe(e, 'beforeChange') || (e.cm && Qe(e.cm, 'beforeChange'))) &&
          ((t = Dl(e, t, !0)), !t)
        )
      ) {
        var r = bo && !n && xa(e, t.from, t.to);
        if (r)
          for (var i = r.length - 1; i >= 0; --i)
            Nl(e, {
              from: r[i].from,
              to: r[i].to,
              text: i ? [''] : t.text,
              origin: t.origin,
            });
        else Nl(e, t);
      }
    }
    function Nl(e, t) {
      if (!(t.text.length == 1 && t.text[0] == '' && x(t.from, t.to) == 0)) {
        var n = Yi(e, t);
        yl(e, t, n, e.cm ? e.cm.curOp.id : NaN), yn(e, t, n, xi(e, t));
        var r = [];
        cr(e, function (i, o) {
          !o && $(r, i.history) == -1 && (Il(i.history, t), r.push(i.history)),
            yn(i, t, null, xi(i, t));
        });
      }
    }
    function oi(e, t, n) {
      var r = e.cm && e.cm.state.suppressEdits;
      if (!(r && !n)) {
        for (
          var i = e.history,
            o,
            l = e.sel,
            a = t == 'undo' ? i.done : i.undone,
            s = t == 'undo' ? i.undone : i.done,
            u = 0;
          u < a.length &&
          ((o = a[u]), !(n ? o.ranges && !o.equals(e.sel) : !o.ranges));
          u++
        );
        if (u != a.length) {
          for (i.lastOrigin = i.lastSelOrigin = null; ; )
            if (((o = a.pop()), o.ranges)) {
              if ((ti(o, s), n && !o.equals(e.sel))) {
                Ye(e, o, { clearRedo: !1 });
                return;
              }
              l = o;
            } else if (r) {
              a.push(o);
              return;
            } else break;
          var c = [];
          ti(l, s),
            s.push({ changes: c, generation: i.generation }),
            (i.generation = o.generation || ++i.maxGeneration);
          for (
            var h = Qe(e, 'beforeChange') || (e.cm && Qe(e.cm, 'beforeChange')),
              b = function (k) {
                var T = o.changes[k];
                if (((T.origin = t), h && !Dl(e, T, !1)))
                  return (a.length = 0), {};
                c.push(Qi(e, T));
                var N = k ? Yi(e, T) : te(a);
                yn(e, T, N, bl(e, T)),
                  !k &&
                    e.cm &&
                    e.cm.scrollIntoView({ from: T.from, to: fr(T) });
                var E = [];
                cr(e, function (A, I) {
                  !I &&
                    $(E, A.history) == -1 &&
                    (Il(A.history, T), E.push(A.history)),
                    yn(A, T, null, bl(A, T));
                });
              },
              y = o.changes.length - 1;
            y >= 0;
            --y
          ) {
            var w = b(y);
            if (w) return w.v;
          }
        }
      }
    }
    function Al(e, t) {
      if (
        t != 0 &&
        ((e.first += t),
        (e.sel = new yt(
          Ut(e.sel.ranges, function (i) {
            return new ae(
              v(i.anchor.line + t, i.anchor.ch),
              v(i.head.line + t, i.head.ch)
            );
          }),
          e.sel.primIndex
        )),
        e.cm)
      ) {
        tt(e.cm, e.first, e.first - t, t);
        for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
          ar(e.cm, r, 'gutter');
      }
    }
    function yn(e, t, n, r) {
      if (e.cm && !e.cm.curOp) return ze(e.cm, yn)(e, t, n, r);
      if (t.to.line < e.first) {
        Al(e, t.text.length - 1 - (t.to.line - t.from.line));
        return;
      }
      if (!(t.from.line > e.lastLine())) {
        if (t.from.line < e.first) {
          var i = t.text.length - 1 - (e.first - t.from.line);
          Al(e, i),
            (t = {
              from: v(e.first, 0),
              to: v(t.to.line + i, t.to.ch),
              text: [te(t.text)],
              origin: t.origin,
            });
        }
        var o = e.lastLine();
        t.to.line > o &&
          (t = {
            from: t.from,
            to: v(o, P(e, o).text.length),
            text: [t.text[0]],
            origin: t.origin,
          }),
          (t.removed = jt(e, t.from, t.to)),
          n || (n = Yi(e, t)),
          e.cm ? Cs(e.cm, t, r) : Zi(e, t, r),
          ni(e, n, pe),
          e.cantEdit && ii(e, v(e.firstLine(), 0)) && (e.cantEdit = !1);
      }
    }
    function Cs(e, t, n) {
      var r = e.doc,
        i = e.display,
        o = t.from,
        l = t.to,
        a = !1,
        s = o.line;
      e.options.lineWrapping ||
        ((s = le(Dt(P(r, o.line)))),
        r.iter(s, l.line + 1, function (y) {
          if (y == i.maxLine) return (a = !0), !0;
        })),
        r.sel.contains(t.from, t.to) > -1 && En(e),
        Zi(r, t, n, Zo(e)),
        e.options.lineWrapping ||
          (r.iter(s, o.line + t.text.length, function (y) {
            var w = Un(y);
            w > i.maxLineLength &&
              ((i.maxLine = y),
              (i.maxLineLength = w),
              (i.maxLineChanged = !0),
              (a = !1));
          }),
          a && (e.curOp.updateMaxLine = !0)),
        da(r, o.line),
        pn(e, 400);
      var u = t.text.length - (l.line - o.line) - 1;
      t.full
        ? tt(e)
        : o.line == l.line && t.text.length == 1 && !dl(e.doc, t)
        ? ar(e, o.line, 'text')
        : tt(e, o.line, l.line + 1, u);
      var c = Qe(e, 'changes'),
        h = Qe(e, 'change');
      if (h || c) {
        var b = {
          from: o,
          to: l,
          text: t.text,
          removed: t.removed,
          origin: t.origin,
        };
        h && Pe(e, 'change', e, b),
          c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(b);
      }
      e.display.selForContextMenu = null;
    }
    function Ur(e, t, n, r, i) {
      var o;
      r || (r = n),
        x(r, n) < 0 && ((o = [r, n]), (n = o[0]), (r = o[1])),
        typeof t == 'string' && (t = e.splitLines(t)),
        Br(e, { from: n, to: r, text: t, origin: i });
    }
    function Ol(e, t, n, r) {
      n < e.line ? (e.line += r) : t < e.line && ((e.line = t), (e.ch = 0));
    }
    function El(e, t, n, r) {
      for (var i = 0; i < e.length; ++i) {
        var o = e[i],
          l = !0;
        if (o.ranges) {
          o.copied || ((o = e[i] = o.deepCopy()), (o.copied = !0));
          for (var a = 0; a < o.ranges.length; a++)
            Ol(o.ranges[a].anchor, t, n, r), Ol(o.ranges[a].head, t, n, r);
          continue;
        }
        for (var s = 0; s < o.changes.length; ++s) {
          var u = o.changes[s];
          if (n < u.from.line)
            (u.from = v(u.from.line + r, u.from.ch)),
              (u.to = v(u.to.line + r, u.to.ch));
          else if (t <= u.to.line) {
            l = !1;
            break;
          }
        }
        l || (e.splice(0, i + 1), (i = 0));
      }
    }
    function Il(e, t) {
      var n = t.from.line,
        r = t.to.line,
        i = t.text.length - (r - n) - 1;
      El(e.done, n, r, i), El(e.undone, n, r, i);
    }
    function mn(e, t, n, r) {
      var i = t,
        o = t;
      return (
        typeof t == 'number' ? (o = P(e, gt(e, t))) : (i = le(t)),
        i == null ? null : (r(o, i) && e.cm && ar(e.cm, i, n), o)
      );
    }
    function bn(e) {
      (this.lines = e), (this.parent = null);
      for (var t = 0, n = 0; n < e.length; ++n)
        (e[n].parent = this), (t += e[n].height);
      this.height = t;
    }
    bn.prototype = {
      chunkSize: function () {
        return this.lines.length;
      },
      removeInner: function (e, t) {
        for (var n = e, r = e + t; n < r; ++n) {
          var i = this.lines[n];
          (this.height -= i.height), La(i), Pe(i, 'delete');
        }
        this.lines.splice(e, t);
      },
      collapse: function (e) {
        e.push.apply(e, this.lines);
      },
      insertInner: function (e, t, n) {
        (this.height += n),
          (this.lines = this.lines
            .slice(0, e)
            .concat(t)
            .concat(this.lines.slice(e)));
        for (var r = 0; r < t.length; ++r) t[r].parent = this;
      },
      iterN: function (e, t, n) {
        for (var r = e + t; e < r; ++e) if (n(this.lines[e])) return !0;
      },
    };
    function xn(e) {
      this.children = e;
      for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
        var i = e[r];
        (t += i.chunkSize()), (n += i.height), (i.parent = this);
      }
      (this.size = t), (this.height = n), (this.parent = null);
    }
    xn.prototype = {
      chunkSize: function () {
        return this.size;
      },
      removeInner: function (e, t) {
        this.size -= t;
        for (var n = 0; n < this.children.length; ++n) {
          var r = this.children[n],
            i = r.chunkSize();
          if (e < i) {
            var o = Math.min(t, i - e),
              l = r.height;
            if (
              (r.removeInner(e, o),
              (this.height -= l - r.height),
              i == o && (this.children.splice(n--, 1), (r.parent = null)),
              (t -= o) == 0)
            )
              break;
            e = 0;
          } else e -= i;
        }
        if (
          this.size - t < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof bn))
        ) {
          var a = [];
          this.collapse(a),
            (this.children = [new bn(a)]),
            (this.children[0].parent = this);
        }
      },
      collapse: function (e) {
        for (var t = 0; t < this.children.length; ++t)
          this.children[t].collapse(e);
      },
      insertInner: function (e, t, n) {
        (this.size += t.length), (this.height += n);
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e <= o) {
            if ((i.insertInner(e, t, n), i.lines && i.lines.length > 50)) {
              for (
                var l = (i.lines.length % 25) + 25, a = l;
                a < i.lines.length;

              ) {
                var s = new bn(i.lines.slice(a, (a += 25)));
                (i.height -= s.height),
                  this.children.splice(++r, 0, s),
                  (s.parent = this);
              }
              (i.lines = i.lines.slice(0, l)), this.maybeSpill();
            }
            break;
          }
          e -= o;
        }
      },
      maybeSpill: function () {
        if (!(this.children.length <= 10)) {
          var e = this;
          do {
            var t = e.children.splice(e.children.length - 5, 5),
              n = new xn(t);
            if (e.parent) {
              (e.size -= n.size), (e.height -= n.height);
              var i = $(e.parent.children, e);
              e.parent.children.splice(i + 1, 0, n);
            } else {
              var r = new xn(e.children);
              (r.parent = e), (e.children = [r, n]), (e = r);
            }
            n.parent = e.parent;
          } while (e.children.length > 10);
          e.parent.maybeSpill();
        }
      },
      iterN: function (e, t, n) {
        for (var r = 0; r < this.children.length; ++r) {
          var i = this.children[r],
            o = i.chunkSize();
          if (e < o) {
            var l = Math.min(t, o - e);
            if (i.iterN(e, l, n)) return !0;
            if ((t -= l) == 0) break;
            e = 0;
          } else e -= o;
        }
      },
    };
    var wn = function (e, t, n) {
      if (n) for (var r in n) n.hasOwnProperty(r) && (this[r] = n[r]);
      (this.doc = e), (this.node = t);
    };
    (wn.prototype.clear = function () {
      var e = this.doc.cm,
        t = this.line.widgets,
        n = this.line,
        r = le(n);
      if (!(r == null || !t)) {
        for (var i = 0; i < t.length; ++i) t[i] == this && t.splice(i--, 1);
        t.length || (n.widgets = null);
        var o = an(this);
        Ct(n, Math.max(0, n.height - o)),
          e &&
            (ht(e, function () {
              Wl(e, n, -o), ar(e, r, 'widget');
            }),
            Pe(e, 'lineWidgetCleared', e, this, r));
      }
    }),
      (wn.prototype.changed = function () {
        var e = this,
          t = this.height,
          n = this.doc.cm,
          r = this.line;
        this.height = null;
        var i = an(this) - t;
        i &&
          (lr(this.doc, r) || Ct(r, r.height + i),
          n &&
            ht(n, function () {
              (n.curOp.forceUpdate = !0),
                Wl(n, r, i),
                Pe(n, 'lineWidgetChanged', n, e, le(r));
            }));
      }),
      Je(wn);
    function Wl(e, t, n) {
      Qt(t) < ((e.curOp && e.curOp.scrollTop) || e.doc.scrollTop) && Bi(e, n);
    }
    function Ls(e, t, n, r) {
      var i = new wn(e, n, r),
        o = e.cm;
      return (
        o && i.noHScroll && (o.display.alignWidgets = !0),
        mn(e, t, 'widget', function (l) {
          var a = l.widgets || (l.widgets = []);
          if (
            (i.insertAt == null
              ? a.push(i)
              : a.splice(Math.min(a.length, Math.max(0, i.insertAt)), 0, i),
            (i.line = l),
            o && !lr(e, l))
          ) {
            var s = Qt(l) < e.scrollTop;
            Ct(l, l.height + an(i)),
              s && Bi(o, i.height),
              (o.curOp.forceUpdate = !0);
          }
          return !0;
        }),
        o && Pe(o, 'lineWidgetAdded', o, i, typeof t == 'number' ? t : le(t)),
        i
      );
    }
    var Fl = 0,
      hr = function (e, t) {
        (this.lines = []), (this.type = t), (this.doc = e), (this.id = ++Fl);
      };
    (hr.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        var e = this.doc.cm,
          t = e && !e.curOp;
        if ((t && Sr(e), Qe(this, 'clear'))) {
          var n = this.find();
          n && Pe(this, 'clear', n.from, n.to);
        }
        for (var r = null, i = null, o = 0; o < this.lines.length; ++o) {
          var l = this.lines[o],
            a = nn(l.markedSpans, this);
          e && !this.collapsed
            ? ar(e, le(l), 'text')
            : e && (a.to != null && (i = le(l)), a.from != null && (r = le(l))),
            (l.markedSpans = ga(l.markedSpans, a)),
            a.from == null &&
              this.collapsed &&
              !lr(this.doc, l) &&
              e &&
              Ct(l, Wr(e.display));
        }
        if (e && this.collapsed && !e.options.lineWrapping)
          for (var s = 0; s < this.lines.length; ++s) {
            var u = Dt(this.lines[s]),
              c = Un(u);
            c > e.display.maxLineLength &&
              ((e.display.maxLine = u),
              (e.display.maxLineLength = c),
              (e.display.maxLineChanged = !0));
          }
        r != null && e && this.collapsed && tt(e, r, i + 1),
          (this.lines.length = 0),
          (this.explicitlyCleared = !0),
          this.atomic &&
            this.doc.cantEdit &&
            ((this.doc.cantEdit = !1), e && Cl(e.doc)),
          e && Pe(e, 'markerCleared', e, this, r, i),
          t && Cr(e),
          this.parent && this.parent.clear();
      }
    }),
      (hr.prototype.find = function (e, t) {
        e == null && this.type == 'bookmark' && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
          var o = this.lines[i],
            l = nn(o.markedSpans, this);
          if (l.from != null && ((n = v(t ? o : le(o), l.from)), e == -1))
            return n;
          if (l.to != null && ((r = v(t ? o : le(o), l.to)), e == 1)) return r;
        }
        return n && { from: n, to: r };
      }),
      (hr.prototype.changed = function () {
        var e = this,
          t = this.find(-1, !0),
          n = this,
          r = this.doc.cm;
        !t ||
          !r ||
          ht(r, function () {
            var i = t.line,
              o = le(t.line),
              l = Di(r, o);
            if (
              (l &&
                (Bo(l), (r.curOp.selectionChanged = r.curOp.forceUpdate = !0)),
              (r.curOp.updateMaxLine = !0),
              !lr(n.doc, i) && n.height != null)
            ) {
              var a = n.height;
              n.height = null;
              var s = an(n) - a;
              s && Ct(i, i.height + s);
            }
            Pe(r, 'markerChanged', r, e);
          });
      }),
      (hr.prototype.attachLine = function (e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || $(t.maybeHiddenMarkers, this) == -1) &&
            (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(
              this
            );
        }
        this.lines.push(e);
      }),
      (hr.prototype.detachLine = function (e) {
        if (
          (this.lines.splice($(this.lines, e), 1),
          !this.lines.length && this.doc.cm)
        ) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }),
      Je(hr);
    function Kr(e, t, n, r, i) {
      if (r && r.shared) return Ts(e, t, n, r, i);
      if (e.cm && !e.cm.curOp) return ze(e.cm, Kr)(e, t, n, r, i);
      var o = new hr(e, i),
        l = x(t, n);
      if ((r && G(r, o, !1), l > 0 || (l == 0 && o.clearWhenEmpty !== !1)))
        return o;
      if (
        (o.replacedWith &&
          ((o.collapsed = !0),
          (o.widgetNode = M('span', [o.replacedWith], 'CodeMirror-widget')),
          r.handleMouseEvents ||
            o.widgetNode.setAttribute('cm-ignore-events', 'true'),
          r.insertLeft && (o.widgetNode.insertLeft = !0)),
        o.collapsed)
      ) {
        if (
          Lo(e, t.line, t, n, o) ||
          (t.line != n.line && Lo(e, n.line, t, n, o))
        )
          throw new Error(
            'Inserting collapsed marker partially overlapping an existing one'
          );
        va();
      }
      o.addToHistory &&
        yl(e, { from: t, to: n, origin: 'markText' }, e.sel, NaN);
      var a = t.line,
        s = e.cm,
        u;
      if (
        (e.iter(a, n.line + 1, function (h) {
          s &&
            o.collapsed &&
            !s.options.lineWrapping &&
            Dt(h) == s.display.maxLine &&
            (u = !0),
            o.collapsed && a != t.line && Ct(h, 0),
            ya(
              h,
              new Hn(o, a == t.line ? t.ch : null, a == n.line ? n.ch : null),
              e.cm && e.cm.curOp
            ),
            ++a;
        }),
        o.collapsed &&
          e.iter(t.line, n.line + 1, function (h) {
            lr(e, h) && Ct(h, 0);
          }),
        o.clearOnEnter &&
          O(o, 'beforeCursorEnter', function () {
            return o.clear();
          }),
        o.readOnly &&
          (pa(),
          (e.history.done.length || e.history.undone.length) &&
            e.clearHistory()),
        o.collapsed && ((o.id = ++Fl), (o.atomic = !0)),
        s)
      ) {
        if ((u && (s.curOp.updateMaxLine = !0), o.collapsed))
          tt(s, t.line, n.line + 1);
        else if (
          o.className ||
          o.startStyle ||
          o.endStyle ||
          o.css ||
          o.attributes ||
          o.title
        )
          for (var c = t.line; c <= n.line; c++) ar(s, c, 'text');
        o.atomic && Cl(s.doc), Pe(s, 'markerAdded', s, o);
      }
      return o;
    }
    var kn = function (e, t) {
      (this.markers = e), (this.primary = t);
      for (var n = 0; n < e.length; ++n) e[n].parent = this;
    };
    (kn.prototype.clear = function () {
      if (!this.explicitlyCleared) {
        this.explicitlyCleared = !0;
        for (var e = 0; e < this.markers.length; ++e) this.markers[e].clear();
        Pe(this, 'clear');
      }
    }),
      (kn.prototype.find = function (e, t) {
        return this.primary.find(e, t);
      }),
      Je(kn);
    function Ts(e, t, n, r, i) {
      (r = G(r)), (r.shared = !1);
      var o = [Kr(e, t, n, r, i)],
        l = o[0],
        a = r.widgetNode;
      return (
        cr(e, function (s) {
          a && (r.widgetNode = a.cloneNode(!0)),
            o.push(Kr(s, Z(s, t), Z(s, n), r, i));
          for (var u = 0; u < s.linked.length; ++u)
            if (s.linked[u].isParent) return;
          l = te(o);
        }),
        new kn(o, l)
      );
    }
    function Pl(e) {
      return e.findMarks(
        v(e.first, 0),
        e.clipPos(v(e.lastLine())),
        function (t) {
          return t.parent;
        }
      );
    }
    function Ms(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n],
          i = r.find(),
          o = e.clipPos(i.from),
          l = e.clipPos(i.to);
        if (x(o, l)) {
          var a = Kr(e, o, l, r.primary, r.primary.type);
          r.markers.push(a), (a.parent = r);
        }
      }
    }
    function Ds(e) {
      for (
        var t = function (r) {
            var i = e[r],
              o = [i.primary.doc];
            cr(i.primary.doc, function (s) {
              return o.push(s);
            });
            for (var l = 0; l < i.markers.length; l++) {
              var a = i.markers[l];
              $(o, a.doc) == -1 &&
                ((a.parent = null), i.markers.splice(l--, 1));
            }
          },
          n = 0;
        n < e.length;
        n++
      )
        t(n);
    }
    var Ns = 0,
      rt = function (e, t, n, r, i) {
        if (!(this instanceof rt)) return new rt(e, t, n, r, i);
        n == null && (n = 0),
          xn.call(this, [new bn([new Or('', null)])]),
          (this.first = n),
          (this.scrollTop = this.scrollLeft = 0),
          (this.cantEdit = !1),
          (this.cleanGeneration = 1),
          (this.modeFrontier = this.highlightFrontier = n);
        var o = v(n, 0);
        (this.sel = ur(o)),
          (this.history = new ei(null)),
          (this.id = ++Ns),
          (this.modeOption = t),
          (this.lineSep = r),
          (this.direction = i == 'rtl' ? 'rtl' : 'ltr'),
          (this.extend = !1),
          typeof e == 'string' && (e = this.splitLines(e)),
          Zi(this, { from: o, to: o, text: e }),
          Ye(this, ur(o), pe);
      };
    (rt.prototype = vr(xn.prototype, {
      constructor: rt,
      iter: function (e, t, n) {
        n
          ? this.iterN(e - this.first, t - e, n)
          : this.iterN(this.first, this.first + this.size, e);
      },
      insert: function (e, t) {
        for (var n = 0, r = 0; r < t.length; ++r) n += t[r].height;
        this.insertInner(e - this.first, t, n);
      },
      remove: function (e, t) {
        this.removeInner(e - this.first, t);
      },
      getValue: function (e) {
        var t = Ar(this, this.first, this.first + this.size);
        return e === !1 ? t : t.join(e || this.lineSeparator());
      },
      setValue: He(function (e) {
        var t = v(this.first, 0),
          n = this.first + this.size - 1;
        Br(
          this,
          {
            from: t,
            to: v(n, P(this, n).text.length),
            text: this.splitLines(e),
            origin: 'setValue',
            full: !0,
          },
          !0
        ),
          this.cm && fn(this.cm, 0, 0),
          Ye(this, ur(t), pe);
      }),
      replaceRange: function (e, t, n, r) {
        (t = Z(this, t)), (n = n ? Z(this, n) : t), Ur(this, e, t, n, r);
      },
      getRange: function (e, t, n) {
        var r = jt(this, Z(this, e), Z(this, t));
        return n === !1
          ? r
          : n === ''
          ? r.join('')
          : r.join(n || this.lineSeparator());
      },
      getLine: function (e) {
        var t = this.getLineHandle(e);
        return t && t.text;
      },
      getLineHandle: function (e) {
        if (f(this, e)) return P(this, e);
      },
      getLineNumber: function (e) {
        return le(e);
      },
      getLineHandleVisualStart: function (e) {
        return typeof e == 'number' && (e = P(this, e)), Dt(e);
      },
      lineCount: function () {
        return this.size;
      },
      firstLine: function () {
        return this.first;
      },
      lastLine: function () {
        return this.first + this.size - 1;
      },
      clipPos: function (e) {
        return Z(this, e);
      },
      getCursor: function (e) {
        var t = this.sel.primary(),
          n;
        return (
          e == null || e == 'head'
            ? (n = t.head)
            : e == 'anchor'
            ? (n = t.anchor)
            : e == 'end' || e == 'to' || e === !1
            ? (n = t.to())
            : (n = t.from()),
          n
        );
      },
      listSelections: function () {
        return this.sel.ranges;
      },
      somethingSelected: function () {
        return this.sel.somethingSelected();
      },
      setCursor: He(function (e, t, n) {
        wl(this, Z(this, typeof e == 'number' ? v(e, t || 0) : e), null, n);
      }),
      setSelection: He(function (e, t, n) {
        wl(this, Z(this, e), Z(this, t || e), n);
      }),
      extendSelection: He(function (e, t, n) {
        ri(this, Z(this, e), t && Z(this, t), n);
      }),
      extendSelections: He(function (e, t) {
        xl(this, fo(this, e), t);
      }),
      extendSelectionsBy: He(function (e, t) {
        var n = Ut(this.sel.ranges, e);
        xl(this, fo(this, n), t);
      }),
      setSelections: He(function (e, t, n) {
        if (e.length) {
          for (var r = [], i = 0; i < e.length; i++)
            r[i] = new ae(
              Z(this, e[i].anchor),
              Z(this, e[i].head || e[i].anchor)
            );
          t == null && (t = Math.min(e.length - 1, this.sel.primIndex)),
            Ye(this, At(this.cm, r, t), n);
        }
      }),
      addSelection: He(function (e, t, n) {
        var r = this.sel.ranges.slice(0);
        r.push(new ae(Z(this, e), Z(this, t || e))),
          Ye(this, At(this.cm, r, r.length - 1), n);
      }),
      getSelection: function (e) {
        for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
          var i = jt(this, t[r].from(), t[r].to());
          n = n ? n.concat(i) : i;
        }
        return e === !1 ? n : n.join(e || this.lineSeparator());
      },
      getSelections: function (e) {
        for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
          var i = jt(this, n[r].from(), n[r].to());
          e !== !1 && (i = i.join(e || this.lineSeparator())), (t[r] = i);
        }
        return t;
      },
      replaceSelection: function (e, t, n) {
        for (var r = [], i = 0; i < this.sel.ranges.length; i++) r[i] = e;
        this.replaceSelections(r, t, n || '+input');
      },
      replaceSelections: He(function (e, t, n) {
        for (var r = [], i = this.sel, o = 0; o < i.ranges.length; o++) {
          var l = i.ranges[o];
          r[o] = {
            from: l.from(),
            to: l.to(),
            text: this.splitLines(e[o]),
            origin: n,
          };
        }
        for (
          var a = t && t != 'end' && gs(this, r, t), s = r.length - 1;
          s >= 0;
          s--
        )
          Br(this, r[s]);
        a ? kl(this, a) : this.cm && zr(this.cm);
      }),
      undo: He(function () {
        oi(this, 'undo');
      }),
      redo: He(function () {
        oi(this, 'redo');
      }),
      undoSelection: He(function () {
        oi(this, 'undo', !0);
      }),
      redoSelection: He(function () {
        oi(this, 'redo', !0);
      }),
      setExtending: function (e) {
        this.extend = e;
      },
      getExtending: function () {
        return this.extend;
      },
      historySize: function () {
        for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
          e.done[r].ranges || ++t;
        for (var i = 0; i < e.undone.length; i++) e.undone[i].ranges || ++n;
        return { undo: t, redo: n };
      },
      clearHistory: function () {
        var e = this;
        (this.history = new ei(this.history)),
          cr(
            this,
            function (t) {
              return (t.history = e.history);
            },
            !0
          );
      },
      markClean: function () {
        this.cleanGeneration = this.changeGeneration(!0);
      },
      changeGeneration: function (e) {
        return (
          e &&
            (this.history.lastOp =
              this.history.lastSelOp =
              this.history.lastOrigin =
                null),
          this.history.generation
        );
      },
      isClean: function (e) {
        return this.history.generation == (e || this.cleanGeneration);
      },
      getHistory: function () {
        return { done: _r(this.history.done), undone: _r(this.history.undone) };
      },
      setHistory: function (e) {
        var t = (this.history = new ei(this.history));
        (t.done = _r(e.done.slice(0), null, !0)),
          (t.undone = _r(e.undone.slice(0), null, !0));
      },
      setGutterMarker: He(function (e, t, n) {
        return mn(this, e, 'gutter', function (r) {
          var i = r.gutterMarkers || (r.gutterMarkers = {});
          return (i[t] = n), !n && U(i) && (r.gutterMarkers = null), !0;
        });
      }),
      clearGutter: He(function (e) {
        var t = this;
        this.iter(function (n) {
          n.gutterMarkers &&
            n.gutterMarkers[e] &&
            mn(t, n, 'gutter', function () {
              return (
                (n.gutterMarkers[e] = null),
                U(n.gutterMarkers) && (n.gutterMarkers = null),
                !0
              );
            });
        });
      }),
      lineInfo: function (e) {
        var t;
        if (typeof e == 'number') {
          if (!f(this, e) || ((t = e), (e = P(this, e)), !e)) return null;
        } else if (((t = le(e)), t == null)) return null;
        return {
          line: t,
          handle: e,
          text: e.text,
          gutterMarkers: e.gutterMarkers,
          textClass: e.textClass,
          bgClass: e.bgClass,
          wrapClass: e.wrapClass,
          widgets: e.widgets,
        };
      },
      addLineClass: He(function (e, t, n) {
        return mn(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
          var i =
            t == 'text'
              ? 'textClass'
              : t == 'background'
              ? 'bgClass'
              : t == 'gutter'
              ? 'gutterClass'
              : 'wrapClass';
          if (!r[i]) r[i] = n;
          else {
            if (ut(n).test(r[i])) return !1;
            r[i] += ' ' + n;
          }
          return !0;
        });
      }),
      removeLineClass: He(function (e, t, n) {
        return mn(this, e, t == 'gutter' ? 'gutter' : 'class', function (r) {
          var i =
              t == 'text'
                ? 'textClass'
                : t == 'background'
                ? 'bgClass'
                : t == 'gutter'
                ? 'gutterClass'
                : 'wrapClass',
            o = r[i];
          if (o)
            if (n == null) r[i] = null;
            else {
              var l = o.match(ut(n));
              if (!l) return !1;
              var a = l.index + l[0].length;
              r[i] =
                o.slice(0, l.index) +
                  (!l.index || a == o.length ? '' : ' ') +
                  o.slice(a) || null;
            }
          else return !1;
          return !0;
        });
      }),
      addLineWidget: He(function (e, t, n) {
        return Ls(this, e, t, n);
      }),
      removeLineWidget: function (e) {
        e.clear();
      },
      markText: function (e, t, n) {
        return Kr(this, Z(this, e), Z(this, t), n, (n && n.type) || 'range');
      },
      setBookmark: function (e, t) {
        var n = {
          replacedWith: t && (t.nodeType == null ? t.widget : t),
          insertLeft: t && t.insertLeft,
          clearWhenEmpty: !1,
          shared: t && t.shared,
          handleMouseEvents: t && t.handleMouseEvents,
        };
        return (e = Z(this, e)), Kr(this, e, e, n, 'bookmark');
      },
      findMarksAt: function (e) {
        e = Z(this, e);
        var t = [],
          n = P(this, e.line).markedSpans;
        if (n)
          for (var r = 0; r < n.length; ++r) {
            var i = n[r];
            (i.from == null || i.from <= e.ch) &&
              (i.to == null || i.to >= e.ch) &&
              t.push(i.marker.parent || i.marker);
          }
        return t;
      },
      findMarks: function (e, t, n) {
        (e = Z(this, e)), (t = Z(this, t));
        var r = [],
          i = e.line;
        return (
          this.iter(e.line, t.line + 1, function (o) {
            var l = o.markedSpans;
            if (l)
              for (var a = 0; a < l.length; a++) {
                var s = l[a];
                !(
                  (s.to != null && i == e.line && e.ch >= s.to) ||
                  (s.from == null && i != e.line) ||
                  (s.from != null && i == t.line && s.from >= t.ch)
                ) &&
                  (!n || n(s.marker)) &&
                  r.push(s.marker.parent || s.marker);
              }
            ++i;
          }),
          r
        );
      },
      getAllMarks: function () {
        var e = [];
        return (
          this.iter(function (t) {
            var n = t.markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r].from != null && e.push(n[r].marker);
          }),
          e
        );
      },
      posFromIndex: function (e) {
        var t,
          n = this.first,
          r = this.lineSeparator().length;
        return (
          this.iter(function (i) {
            var o = i.text.length + r;
            if (o > e) return (t = e), !0;
            (e -= o), ++n;
          }),
          Z(this, v(n, t))
        );
      },
      indexFromPos: function (e) {
        e = Z(this, e);
        var t = e.ch;
        if (e.line < this.first || e.ch < 0) return 0;
        var n = this.lineSeparator().length;
        return (
          this.iter(this.first, e.line, function (r) {
            t += r.text.length + n;
          }),
          t
        );
      },
      copy: function (e) {
        var t = new rt(
          Ar(this, this.first, this.first + this.size),
          this.modeOption,
          this.first,
          this.lineSep,
          this.direction
        );
        return (
          (t.scrollTop = this.scrollTop),
          (t.scrollLeft = this.scrollLeft),
          (t.sel = this.sel),
          (t.extend = !1),
          e &&
            ((t.history.undoDepth = this.history.undoDepth),
            t.setHistory(this.getHistory())),
          t
        );
      },
      linkedDoc: function (e) {
        e || (e = {});
        var t = this.first,
          n = this.first + this.size;
        e.from != null && e.from > t && (t = e.from),
          e.to != null && e.to < n && (n = e.to);
        var r = new rt(
          Ar(this, t, n),
          e.mode || this.modeOption,
          t,
          this.lineSep,
          this.direction
        );
        return (
          e.sharedHist && (r.history = this.history),
          (this.linked || (this.linked = [])).push({
            doc: r,
            sharedHist: e.sharedHist,
          }),
          (r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }]),
          Ms(r, Pl(this)),
          r
        );
      },
      unlinkDoc: function (e) {
        if ((e instanceof ge && (e = e.doc), this.linked))
          for (var t = 0; t < this.linked.length; ++t) {
            var n = this.linked[t];
            if (n.doc == e) {
              this.linked.splice(t, 1), e.unlinkDoc(this), Ds(Pl(this));
              break;
            }
          }
        if (e.history == this.history) {
          var r = [e.id];
          cr(
            e,
            function (i) {
              return r.push(i.id);
            },
            !0
          ),
            (e.history = new ei(null)),
            (e.history.done = _r(this.history.done, r)),
            (e.history.undone = _r(this.history.undone, r));
        }
      },
      iterLinkedDocs: function (e) {
        cr(this, e);
      },
      getMode: function () {
        return this.mode;
      },
      getEditor: function () {
        return this.cm;
      },
      splitLines: function (e) {
        return this.lineSep ? e.split(this.lineSep) : en(e);
      },
      lineSeparator: function () {
        return (
          this.lineSep ||
          `
`
        );
      },
      setDirection: He(function (e) {
        e != 'rtl' && (e = 'ltr'),
          e != this.direction &&
            ((this.direction = e),
            this.iter(function (t) {
              return (t.order = null);
            }),
            this.cm && ys(this.cm));
      }),
    })),
      (rt.prototype.eachLine = rt.prototype.iter);
    var zl = 0;
    function As(e) {
      var t = this;
      if ((Hl(t), !(we(t, e) || Jt(t.display, e)))) {
        Xe(e), L && (zl = +new Date());
        var n = br(t, e, !0),
          r = e.dataTransfer.files;
        if (!(!n || t.isReadOnly()))
          if (r && r.length && window.FileReader && window.File)
            for (
              var i = r.length,
                o = Array(i),
                l = 0,
                a = function () {
                  ++l == i &&
                    ze(t, function () {
                      n = Z(t.doc, n);
                      var y = {
                        from: n,
                        to: n,
                        text: t.doc.splitLines(
                          o
                            .filter(function (w) {
                              return w != null;
                            })
                            .join(t.doc.lineSeparator())
                        ),
                        origin: 'paste',
                      };
                      Br(t.doc, y), kl(t.doc, ur(Z(t.doc, n), Z(t.doc, fr(y))));
                    })();
                },
                s = function (y, w) {
                  if (
                    t.options.allowDropFileTypes &&
                    $(t.options.allowDropFileTypes, y.type) == -1
                  ) {
                    a();
                    return;
                  }
                  var k = new FileReader();
                  (k.onerror = function () {
                    return a();
                  }),
                    (k.onload = function () {
                      var T = k.result;
                      if (/[\x00-\x08\x0e-\x1f]{2}/.test(T)) {
                        a();
                        return;
                      }
                      (o[w] = T), a();
                    }),
                    k.readAsText(y);
                },
                u = 0;
              u < r.length;
              u++
            )
              s(r[u], u);
          else {
            if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
              t.state.draggingText(e),
                setTimeout(function () {
                  return t.display.input.focus();
                }, 20);
              return;
            }
            try {
              var c = e.dataTransfer.getData('Text');
              if (c) {
                var h;
                if (
                  (t.state.draggingText &&
                    !t.state.draggingText.copy &&
                    (h = t.listSelections()),
                  ni(t.doc, ur(n, n)),
                  h)
                )
                  for (var b = 0; b < h.length; ++b)
                    Ur(t.doc, '', h[b].anchor, h[b].head, 'drag');
                t.replaceSelection(c, 'around', 'paste'),
                  t.display.input.focus();
              }
            } catch {}
          }
      }
    }
    function Os(e, t) {
      if (L && (!e.state.draggingText || +new Date() - zl < 100)) {
        qt(t);
        return;
      }
      if (
        !(we(e, t) || Jt(e.display, t)) &&
        (t.dataTransfer.setData('Text', e.getSelection()),
        (t.dataTransfer.effectAllowed = 'copyMove'),
        t.dataTransfer.setDragImage && !mt)
      ) {
        var n = p('img', null, null, 'position: fixed; left: 0; top: 0;');
        (n.src =
          'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
          Ne &&
            ((n.width = n.height = 1),
            e.display.wrapper.appendChild(n),
            (n._top = n.offsetTop)),
          t.dataTransfer.setDragImage(n, 0, 0),
          Ne && n.parentNode.removeChild(n);
      }
    }
    function Es(e, t) {
      var n = br(e, t);
      if (n) {
        var r = document.createDocumentFragment();
        Pi(e, n, r),
          e.display.dragCursor ||
            ((e.display.dragCursor = p(
              'div',
              null,
              'CodeMirror-cursors CodeMirror-dragcursors'
            )),
            e.display.lineSpace.insertBefore(
              e.display.dragCursor,
              e.display.cursorDiv
            )),
          F(e.display.dragCursor, r);
      }
    }
    function Hl(e) {
      e.display.dragCursor &&
        (e.display.lineSpace.removeChild(e.display.dragCursor),
        (e.display.dragCursor = null));
    }
    function _l(e) {
      if (document.getElementsByClassName) {
        for (
          var t = document.getElementsByClassName('CodeMirror'), n = [], r = 0;
          r < t.length;
          r++
        ) {
          var i = t[r].CodeMirror;
          i && n.push(i);
        }
        n.length &&
          n[0].operation(function () {
            for (var o = 0; o < n.length; o++) e(n[o]);
          });
      }
    }
    var Rl = !1;
    function Is() {
      Rl || (Ws(), (Rl = !0));
    }
    function Ws() {
      var e;
      O(window, 'resize', function () {
        e == null &&
          (e = setTimeout(function () {
            (e = null), _l(Fs);
          }, 100));
      }),
        O(window, 'blur', function () {
          return _l(Pr);
        });
    }
    function Fs(e) {
      var t = e.display;
      (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null),
        (t.scrollbarsClipped = !1),
        e.setSize();
    }
    for (
      var dr = {
          3: 'Pause',
          8: 'Backspace',
          9: 'Tab',
          13: 'Enter',
          16: 'Shift',
          17: 'Ctrl',
          18: 'Alt',
          19: 'Pause',
          20: 'CapsLock',
          27: 'Esc',
          32: 'Space',
          33: 'PageUp',
          34: 'PageDown',
          35: 'End',
          36: 'Home',
          37: 'Left',
          38: 'Up',
          39: 'Right',
          40: 'Down',
          44: 'PrintScrn',
          45: 'Insert',
          46: 'Delete',
          59: ';',
          61: '=',
          91: 'Mod',
          92: 'Mod',
          93: 'Mod',
          106: '*',
          107: '=',
          109: '-',
          110: '.',
          111: '/',
          145: 'ScrollLock',
          173: '-',
          186: ';',
          187: '=',
          188: ',',
          189: '-',
          190: '.',
          191: '/',
          192: '`',
          219: '[',
          220: '\\',
          221: ']',
          222: "'",
          224: 'Mod',
          63232: 'Up',
          63233: 'Down',
          63234: 'Left',
          63235: 'Right',
          63272: 'Delete',
          63273: 'Home',
          63275: 'End',
          63276: 'PageUp',
          63277: 'PageDown',
          63302: 'Insert',
        },
        Sn = 0;
      Sn < 10;
      Sn++
    )
      dr[Sn + 48] = dr[Sn + 96] = String(Sn);
    for (var li = 65; li <= 90; li++) dr[li] = String.fromCharCode(li);
    for (var Cn = 1; Cn <= 12; Cn++) dr[Cn + 111] = dr[Cn + 63235] = 'F' + Cn;
    var $t = {};
    ($t.basic = {
      Left: 'goCharLeft',
      Right: 'goCharRight',
      Up: 'goLineUp',
      Down: 'goLineDown',
      End: 'goLineEnd',
      Home: 'goLineStartSmart',
      PageUp: 'goPageUp',
      PageDown: 'goPageDown',
      Delete: 'delCharAfter',
      Backspace: 'delCharBefore',
      'Shift-Backspace': 'delCharBefore',
      Tab: 'defaultTab',
      'Shift-Tab': 'indentAuto',
      Enter: 'newlineAndIndent',
      Insert: 'toggleOverwrite',
      Esc: 'singleSelection',
    }),
      ($t.pcDefault = {
        'Ctrl-A': 'selectAll',
        'Ctrl-D': 'deleteLine',
        'Ctrl-Z': 'undo',
        'Shift-Ctrl-Z': 'redo',
        'Ctrl-Y': 'redo',
        'Ctrl-Home': 'goDocStart',
        'Ctrl-End': 'goDocEnd',
        'Ctrl-Up': 'goLineUp',
        'Ctrl-Down': 'goLineDown',
        'Ctrl-Left': 'goGroupLeft',
        'Ctrl-Right': 'goGroupRight',
        'Alt-Left': 'goLineStart',
        'Alt-Right': 'goLineEnd',
        'Ctrl-Backspace': 'delGroupBefore',
        'Ctrl-Delete': 'delGroupAfter',
        'Ctrl-S': 'save',
        'Ctrl-F': 'find',
        'Ctrl-G': 'findNext',
        'Shift-Ctrl-G': 'findPrev',
        'Shift-Ctrl-F': 'replace',
        'Shift-Ctrl-R': 'replaceAll',
        'Ctrl-[': 'indentLess',
        'Ctrl-]': 'indentMore',
        'Ctrl-U': 'undoSelection',
        'Shift-Ctrl-U': 'redoSelection',
        'Alt-U': 'redoSelection',
        fallthrough: 'basic',
      }),
      ($t.emacsy = {
        'Ctrl-F': 'goCharRight',
        'Ctrl-B': 'goCharLeft',
        'Ctrl-P': 'goLineUp',
        'Ctrl-N': 'goLineDown',
        'Ctrl-A': 'goLineStart',
        'Ctrl-E': 'goLineEnd',
        'Ctrl-V': 'goPageDown',
        'Shift-Ctrl-V': 'goPageUp',
        'Ctrl-D': 'delCharAfter',
        'Ctrl-H': 'delCharBefore',
        'Alt-Backspace': 'delWordBefore',
        'Ctrl-K': 'killLine',
        'Ctrl-T': 'transposeChars',
        'Ctrl-O': 'openLine',
      }),
      ($t.macDefault = {
        'Cmd-A': 'selectAll',
        'Cmd-D': 'deleteLine',
        'Cmd-Z': 'undo',
        'Shift-Cmd-Z': 'redo',
        'Cmd-Y': 'redo',
        'Cmd-Home': 'goDocStart',
        'Cmd-Up': 'goDocStart',
        'Cmd-End': 'goDocEnd',
        'Cmd-Down': 'goDocEnd',
        'Alt-Left': 'goGroupLeft',
        'Alt-Right': 'goGroupRight',
        'Cmd-Left': 'goLineLeft',
        'Cmd-Right': 'goLineRight',
        'Alt-Backspace': 'delGroupBefore',
        'Ctrl-Alt-Backspace': 'delGroupAfter',
        'Alt-Delete': 'delGroupAfter',
        'Cmd-S': 'save',
        'Cmd-F': 'find',
        'Cmd-G': 'findNext',
        'Shift-Cmd-G': 'findPrev',
        'Cmd-Alt-F': 'replace',
        'Shift-Cmd-Alt-F': 'replaceAll',
        'Cmd-[': 'indentLess',
        'Cmd-]': 'indentMore',
        'Cmd-Backspace': 'delWrappedLineLeft',
        'Cmd-Delete': 'delWrappedLineRight',
        'Cmd-U': 'undoSelection',
        'Shift-Cmd-U': 'redoSelection',
        'Ctrl-Up': 'goDocStart',
        'Ctrl-Down': 'goDocEnd',
        fallthrough: ['basic', 'emacsy'],
      }),
      ($t.default = me ? $t.macDefault : $t.pcDefault);
    function Ps(e) {
      var t = e.split(/-(?!$)/);
      e = t[t.length - 1];
      for (var n, r, i, o, l = 0; l < t.length - 1; l++) {
        var a = t[l];
        if (/^(cmd|meta|m)$/i.test(a)) o = !0;
        else if (/^a(lt)?$/i.test(a)) n = !0;
        else if (/^(c|ctrl|control)$/i.test(a)) r = !0;
        else if (/^s(hift)?$/i.test(a)) i = !0;
        else throw new Error('Unrecognized modifier name: ' + a);
      }
      return (
        n && (e = 'Alt-' + e),
        r && (e = 'Ctrl-' + e),
        o && (e = 'Cmd-' + e),
        i && (e = 'Shift-' + e),
        e
      );
    }
    function zs(e) {
      var t = {};
      for (var n in e)
        if (e.hasOwnProperty(n)) {
          var r = e[n];
          if (/^(name|fallthrough|(de|at)tach)$/.test(n)) continue;
          if (r == '...') {
            delete e[n];
            continue;
          }
          for (var i = Ut(n.split(' '), Ps), o = 0; o < i.length; o++) {
            var l = void 0,
              a = void 0;
            o == i.length - 1
              ? ((a = i.join(' ')), (l = r))
              : ((a = i.slice(0, o + 1).join(' ')), (l = '...'));
            var s = t[a];
            if (!s) t[a] = l;
            else if (s != l) throw new Error('Inconsistent bindings for ' + a);
          }
          delete e[n];
        }
      for (var u in t) e[u] = t[u];
      return e;
    }
    function Gr(e, t, n, r) {
      t = ai(t);
      var i = t.call ? t.call(e, r) : t[e];
      if (i === !1) return 'nothing';
      if (i === '...') return 'multi';
      if (i != null && n(i)) return 'handled';
      if (t.fallthrough) {
        if (Object.prototype.toString.call(t.fallthrough) != '[object Array]')
          return Gr(e, t.fallthrough, n, r);
        for (var o = 0; o < t.fallthrough.length; o++) {
          var l = Gr(e, t.fallthrough[o], n, r);
          if (l) return l;
        }
      }
    }
    function Bl(e) {
      var t = typeof e == 'string' ? e : dr[e.keyCode];
      return t == 'Ctrl' || t == 'Alt' || t == 'Shift' || t == 'Mod';
    }
    function Ul(e, t, n) {
      var r = e;
      return (
        t.altKey && r != 'Alt' && (e = 'Alt-' + e),
        (Bt ? t.metaKey : t.ctrlKey) && r != 'Ctrl' && (e = 'Ctrl-' + e),
        (Bt ? t.ctrlKey : t.metaKey) && r != 'Mod' && (e = 'Cmd-' + e),
        !n && t.shiftKey && r != 'Shift' && (e = 'Shift-' + e),
        e
      );
    }
    function Kl(e, t) {
      if (Ne && e.keyCode == 34 && e.char) return !1;
      var n = dr[e.keyCode];
      return n == null || e.altGraphKey
        ? !1
        : (e.keyCode == 3 && e.code && (n = e.code), Ul(n, e, t));
    }
    function ai(e) {
      return typeof e == 'string' ? $t[e] : e;
    }
    function qr(e, t) {
      for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
        for (var o = t(n[i]); r.length && x(o.from, te(r).to) <= 0; ) {
          var l = r.pop();
          if (x(l.from, o.from) < 0) {
            o.from = l.from;
            break;
          }
        }
        r.push(o);
      }
      ht(e, function () {
        for (var a = r.length - 1; a >= 0; a--)
          Ur(e.doc, '', r[a].from, r[a].to, '+delete');
        zr(e);
      });
    }
    function $i(e, t, n) {
      var r = re(e.text, t + n, n);
      return r < 0 || r > e.text.length ? null : r;
    }
    function eo(e, t, n) {
      var r = $i(e, t.ch, n);
      return r == null ? null : new v(t.line, r, n < 0 ? 'after' : 'before');
    }
    function to(e, t, n, r, i) {
      if (e) {
        t.doc.direction == 'rtl' && (i = -i);
        var o = kt(n, t.doc.direction);
        if (o) {
          var l = i < 0 ? te(o) : o[0],
            a = i < 0 == (l.level == 1),
            s = a ? 'after' : 'before',
            u;
          if (l.level > 0 || t.doc.direction == 'rtl') {
            var c = Ir(t, n);
            u = i < 0 ? n.text.length - 1 : 0;
            var h = _t(t, c, u).top;
            (u = V(
              function (b) {
                return _t(t, c, b).top == h;
              },
              i < 0 == (l.level == 1) ? l.from : l.to - 1,
              u
            )),
              s == 'before' && (u = $i(n, u, 1));
          } else u = i < 0 ? l.to : l.from;
          return new v(r, u, s);
        }
      }
      return new v(r, i < 0 ? n.text.length : 0, i < 0 ? 'before' : 'after');
    }
    function Hs(e, t, n, r) {
      var i = kt(t, e.doc.direction);
      if (!i) return eo(t, n, r);
      n.ch >= t.text.length
        ? ((n.ch = t.text.length), (n.sticky = 'before'))
        : n.ch <= 0 && ((n.ch = 0), (n.sticky = 'after'));
      var o = wt(i, n.ch, n.sticky),
        l = i[o];
      if (
        e.doc.direction == 'ltr' &&
        l.level % 2 == 0 &&
        (r > 0 ? l.to > n.ch : l.from < n.ch)
      )
        return eo(t, n, r);
      var a = function (N, E) {
          return $i(t, N instanceof v ? N.ch : N, E);
        },
        s,
        u = function (N) {
          return e.options.lineWrapping
            ? ((s = s || Ir(e, t)), jo(e, t, s, N))
            : { begin: 0, end: t.text.length };
        },
        c = u(n.sticky == 'before' ? a(n, -1) : n.ch);
      if (e.doc.direction == 'rtl' || l.level == 1) {
        var h = (l.level == 1) == r < 0,
          b = a(n, h ? 1 : -1);
        if (
          b != null &&
          (h ? b <= l.to && b <= c.end : b >= l.from && b >= c.begin)
        ) {
          var y = h ? 'before' : 'after';
          return new v(n.line, b, y);
        }
      }
      var w = function (N, E, A) {
          for (
            var I = function (ce, _e) {
              return _e
                ? new v(n.line, a(ce, 1), 'before')
                : new v(n.line, ce, 'after');
            };
            N >= 0 && N < i.length;
            N += E
          ) {
            var B = i[N],
              R = E > 0 == (B.level != 1),
              ee = R ? A.begin : a(A.end, -1);
            if (
              (B.from <= ee && ee < B.to) ||
              ((ee = R ? B.from : a(B.to, -1)), A.begin <= ee && ee < A.end)
            )
              return I(ee, R);
          }
        },
        k = w(o + r, r, c);
      if (k) return k;
      var T = r > 0 ? c.end : a(c.begin, -1);
      return T != null &&
        !(r > 0 && T == t.text.length) &&
        ((k = w(r > 0 ? 0 : i.length - 1, r, u(T))), k)
        ? k
        : null;
    }
    var Ln = {
      selectAll: Ml,
      singleSelection: function (e) {
        return e.setSelection(e.getCursor('anchor'), e.getCursor('head'), pe);
      },
      killLine: function (e) {
        return qr(e, function (t) {
          if (t.empty()) {
            var n = P(e.doc, t.head.line).text.length;
            return t.head.ch == n && t.head.line < e.lastLine()
              ? { from: t.head, to: v(t.head.line + 1, 0) }
              : { from: t.head, to: v(t.head.line, n) };
          } else return { from: t.from(), to: t.to() };
        });
      },
      deleteLine: function (e) {
        return qr(e, function (t) {
          return {
            from: v(t.from().line, 0),
            to: Z(e.doc, v(t.to().line + 1, 0)),
          };
        });
      },
      delLineLeft: function (e) {
        return qr(e, function (t) {
          return { from: v(t.from().line, 0), to: t.from() };
        });
      },
      delWrappedLineLeft: function (e) {
        return qr(e, function (t) {
          var n = e.charCoords(t.head, 'div').top + 5,
            r = e.coordsChar({ left: 0, top: n }, 'div');
          return { from: r, to: t.from() };
        });
      },
      delWrappedLineRight: function (e) {
        return qr(e, function (t) {
          var n = e.charCoords(t.head, 'div').top + 5,
            r = e.coordsChar(
              { left: e.display.lineDiv.offsetWidth + 100, top: n },
              'div'
            );
          return { from: t.from(), to: r };
        });
      },
      undo: function (e) {
        return e.undo();
      },
      redo: function (e) {
        return e.redo();
      },
      undoSelection: function (e) {
        return e.undoSelection();
      },
      redoSelection: function (e) {
        return e.redoSelection();
      },
      goDocStart: function (e) {
        return e.extendSelection(v(e.firstLine(), 0));
      },
      goDocEnd: function (e) {
        return e.extendSelection(v(e.lastLine()));
      },
      goLineStart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return Gl(e, t.head.line);
          },
          { origin: '+move', bias: 1 }
        );
      },
      goLineStartSmart: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return ql(e, t.head);
          },
          { origin: '+move', bias: 1 }
        );
      },
      goLineEnd: function (e) {
        return e.extendSelectionsBy(
          function (t) {
            return _s(e, t.head.line);
          },
          { origin: '+move', bias: -1 }
        );
      },
      goLineRight: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5;
          return e.coordsChar(
            { left: e.display.lineDiv.offsetWidth + 100, top: n },
            'div'
          );
        }, It);
      },
      goLineLeft: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5;
          return e.coordsChar({ left: 0, top: n }, 'div');
        }, It);
      },
      goLineLeftSmart: function (e) {
        return e.extendSelectionsBy(function (t) {
          var n = e.cursorCoords(t.head, 'div').top + 5,
            r = e.coordsChar({ left: 0, top: n }, 'div');
          return r.ch < e.getLine(r.line).search(/\S/) ? ql(e, t.head) : r;
        }, It);
      },
      goLineUp: function (e) {
        return e.moveV(-1, 'line');
      },
      goLineDown: function (e) {
        return e.moveV(1, 'line');
      },
      goPageUp: function (e) {
        return e.moveV(-1, 'page');
      },
      goPageDown: function (e) {
        return e.moveV(1, 'page');
      },
      goCharLeft: function (e) {
        return e.moveH(-1, 'char');
      },
      goCharRight: function (e) {
        return e.moveH(1, 'char');
      },
      goColumnLeft: function (e) {
        return e.moveH(-1, 'column');
      },
      goColumnRight: function (e) {
        return e.moveH(1, 'column');
      },
      goWordLeft: function (e) {
        return e.moveH(-1, 'word');
      },
      goGroupRight: function (e) {
        return e.moveH(1, 'group');
      },
      goGroupLeft: function (e) {
        return e.moveH(-1, 'group');
      },
      goWordRight: function (e) {
        return e.moveH(1, 'word');
      },
      delCharBefore: function (e) {
        return e.deleteH(-1, 'codepoint');
      },
      delCharAfter: function (e) {
        return e.deleteH(1, 'char');
      },
      delWordBefore: function (e) {
        return e.deleteH(-1, 'word');
      },
      delWordAfter: function (e) {
        return e.deleteH(1, 'word');
      },
      delGroupBefore: function (e) {
        return e.deleteH(-1, 'group');
      },
      delGroupAfter: function (e) {
        return e.deleteH(1, 'group');
      },
      indentAuto: function (e) {
        return e.indentSelection('smart');
      },
      indentMore: function (e) {
        return e.indentSelection('add');
      },
      indentLess: function (e) {
        return e.indentSelection('subtract');
      },
      insertTab: function (e) {
        return e.replaceSelection('	');
      },
      insertSoftTab: function (e) {
        for (
          var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0;
          i < n.length;
          i++
        ) {
          var o = n[i].from(),
            l = _(e.getLine(o.line), o.ch, r);
          t.push(pt(r - (l % r)));
        }
        e.replaceSelections(t);
      },
      defaultTab: function (e) {
        e.somethingSelected()
          ? e.indentSelection('add')
          : e.execCommand('insertTab');
      },
      transposeChars: function (e) {
        return ht(e, function () {
          for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
            if (t[r].empty()) {
              var i = t[r].head,
                o = P(e.doc, i.line).text;
              if (o) {
                if (
                  (i.ch == o.length && (i = new v(i.line, i.ch - 1)), i.ch > 0)
                )
                  (i = new v(i.line, i.ch + 1)),
                    e.replaceRange(
                      o.charAt(i.ch - 1) + o.charAt(i.ch - 2),
                      v(i.line, i.ch - 2),
                      i,
                      '+transpose'
                    );
                else if (i.line > e.doc.first) {
                  var l = P(e.doc, i.line - 1).text;
                  l &&
                    ((i = new v(i.line, 1)),
                    e.replaceRange(
                      o.charAt(0) +
                        e.doc.lineSeparator() +
                        l.charAt(l.length - 1),
                      v(i.line - 1, l.length - 1),
                      i,
                      '+transpose'
                    ));
                }
              }
              n.push(new ae(i, i));
            }
          e.setSelections(n);
        });
      },
      newlineAndIndent: function (e) {
        return ht(e, function () {
          for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
            e.replaceRange(
              e.doc.lineSeparator(),
              t[n].anchor,
              t[n].head,
              '+input'
            );
          t = e.listSelections();
          for (var r = 0; r < t.length; r++)
            e.indentLine(t[r].from().line, null, !0);
          zr(e);
        });
      },
      openLine: function (e) {
        return e.replaceSelection(
          `
`,
          'start'
        );
      },
      toggleOverwrite: function (e) {
        return e.toggleOverwrite();
      },
    };
    function Gl(e, t) {
      var n = P(e.doc, t),
        r = Dt(n);
      return r != n && (t = le(r)), to(!0, e, r, t, 1);
    }
    function _s(e, t) {
      var n = P(e.doc, t),
        r = ka(n);
      return r != n && (t = le(r)), to(!0, e, n, t, -1);
    }
    function ql(e, t) {
      var n = Gl(e, t.line),
        r = P(e.doc, n.line),
        i = kt(r, e.doc.direction);
      if (!i || i[0].level == 0) {
        var o = Math.max(n.ch, r.text.search(/\S/)),
          l = t.line == n.line && t.ch <= o && t.ch;
        return v(n.line, l ? 0 : o, n.sticky);
      }
      return n;
    }
    function si(e, t, n) {
      if (typeof t == 'string' && ((t = Ln[t]), !t)) return !1;
      e.display.input.ensurePolled();
      var r = e.display.shift,
        i = !1;
      try {
        e.isReadOnly() && (e.state.suppressEdits = !0),
          n && (e.display.shift = !1),
          (i = t(e) != se);
      } finally {
        (e.display.shift = r), (e.state.suppressEdits = !1);
      }
      return i;
    }
    function Rs(e, t, n) {
      for (var r = 0; r < e.state.keyMaps.length; r++) {
        var i = Gr(t, e.state.keyMaps[r], n, e);
        if (i) return i;
      }
      return (
        (e.options.extraKeys && Gr(t, e.options.extraKeys, n, e)) ||
        Gr(t, e.options.keyMap, n, e)
      );
    }
    var Bs = new J();
    function Tn(e, t, n, r) {
      var i = e.state.keySeq;
      if (i) {
        if (Bl(t)) return 'handled';
        if (
          (/\'$/.test(t)
            ? (e.state.keySeq = null)
            : Bs.set(50, function () {
                e.state.keySeq == i &&
                  ((e.state.keySeq = null), e.display.input.reset());
              }),
          Xl(e, i + ' ' + t, n, r))
        )
          return !0;
      }
      return Xl(e, t, n, r);
    }
    function Xl(e, t, n, r) {
      var i = Rs(e, t, r);
      return (
        i == 'multi' && (e.state.keySeq = t),
        i == 'handled' && Pe(e, 'keyHandled', e, t, n),
        (i == 'handled' || i == 'multi') && (Xe(n), zi(e)),
        !!i
      );
    }
    function Yl(e, t) {
      var n = Kl(t, !0);
      return n
        ? t.shiftKey && !e.state.keySeq
          ? Tn(e, 'Shift-' + n, t, function (r) {
              return si(e, r, !0);
            }) ||
            Tn(e, n, t, function (r) {
              if (typeof r == 'string' ? /^go[A-Z]/.test(r) : r.motion)
                return si(e, r);
            })
          : Tn(e, n, t, function (r) {
              return si(e, r);
            })
        : !1;
    }
    function Us(e, t, n) {
      return Tn(e, "'" + n + "'", t, function (r) {
        return si(e, r, !0);
      });
    }
    var ro = null;
    function jl(e) {
      var t = this;
      if (
        !(e.target && e.target != t.display.input.getField()) &&
        ((t.curOp.focus = g(Q(t))), !we(t, e))
      ) {
        L && Y < 11 && e.keyCode == 27 && (e.returnValue = !1);
        var n = e.keyCode;
        t.display.shift = n == 16 || e.shiftKey;
        var r = Yl(t, e);
        Ne &&
          ((ro = r ? n : null),
          !r &&
            n == 88 &&
            !Wt &&
            (me ? e.metaKey : e.ctrlKey) &&
            t.replaceSelection('', null, 'cut')),
          ue &&
            !me &&
            !r &&
            n == 46 &&
            e.shiftKey &&
            !e.ctrlKey &&
            document.execCommand &&
            document.execCommand('cut'),
          n == 18 &&
            !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) &&
            Ks(t);
      }
    }
    function Ks(e) {
      var t = e.display.lineDiv;
      C(t, 'CodeMirror-crosshair');
      function n(r) {
        (r.keyCode == 18 || !r.altKey) &&
          (ve(t, 'CodeMirror-crosshair'),
          qe(document, 'keyup', n),
          qe(document, 'mouseover', n));
      }
      O(document, 'keyup', n), O(document, 'mouseover', n);
    }
    function Zl(e) {
      e.keyCode == 16 && (this.doc.sel.shift = !1), we(this, e);
    }
    function Ql(e) {
      var t = this;
      if (
        !(e.target && e.target != t.display.input.getField()) &&
        !(
          Jt(t.display, e) ||
          we(t, e) ||
          (e.ctrlKey && !e.altKey) ||
          (me && e.metaKey)
        )
      ) {
        var n = e.keyCode,
          r = e.charCode;
        if (Ne && n == ro) {
          (ro = null), Xe(e);
          return;
        }
        if (!(Ne && (!e.which || e.which < 10) && Yl(t, e))) {
          var i = String.fromCharCode(r ?? n);
          i != '\b' && (Us(t, e, i) || t.display.input.onKeyPress(e));
        }
      }
    }
    var Gs = 400,
      no = function (e, t, n) {
        (this.time = e), (this.pos = t), (this.button = n);
      };
    no.prototype.compare = function (e, t, n) {
      return this.time + Gs > e && x(t, this.pos) == 0 && n == this.button;
    };
    var Mn, Dn;
    function qs(e, t) {
      var n = +new Date();
      return Dn && Dn.compare(n, e, t)
        ? ((Mn = Dn = null), 'triple')
        : Mn && Mn.compare(n, e, t)
        ? ((Dn = new no(n, e, t)), (Mn = null), 'double')
        : ((Mn = new no(n, e, t)), (Dn = null), 'single');
    }
    function Jl(e) {
      var t = this,
        n = t.display;
      if (!(we(t, e) || (n.activeTouch && n.input.supportsTouch()))) {
        if ((n.input.ensurePolled(), (n.shift = e.shiftKey), Jt(n, e))) {
          W ||
            ((n.scroller.draggable = !1),
            setTimeout(function () {
              return (n.scroller.draggable = !0);
            }, 100));
          return;
        }
        if (!io(t, e)) {
          var r = br(t, e),
            i = $r(e),
            o = r ? qs(r, i) : 'single';
          Fe(t).focus(),
            i == 1 && t.state.selectingText && t.state.selectingText(e),
            !(r && Xs(t, i, r, o, e)) &&
              (i == 1
                ? r
                  ? js(t, r, o, e)
                  : et(e) == n.scroller && Xe(e)
                : i == 2
                ? (r && ri(t.doc, r),
                  setTimeout(function () {
                    return n.input.focus();
                  }, 20))
                : i == 3 && (Tt ? t.display.input.onContextMenu(e) : Hi(t)));
        }
      }
    }
    function Xs(e, t, n, r, i) {
      var o = 'Click';
      return (
        r == 'double'
          ? (o = 'Double' + o)
          : r == 'triple' && (o = 'Triple' + o),
        (o = (t == 1 ? 'Left' : t == 2 ? 'Middle' : 'Right') + o),
        Tn(e, Ul(o, i), i, function (l) {
          if ((typeof l == 'string' && (l = Ln[l]), !l)) return !1;
          var a = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), (a = l(e, n) != se);
          } finally {
            e.state.suppressEdits = !1;
          }
          return a;
        })
      );
    }
    function Ys(e, t, n) {
      var r = e.getOption('configureMouse'),
        i = r ? r(e, t, n) : {};
      if (i.unit == null) {
        var o = st ? n.shiftKey && n.metaKey : n.altKey;
        i.unit = o
          ? 'rectangle'
          : t == 'single'
          ? 'char'
          : t == 'double'
          ? 'word'
          : 'line';
      }
      return (
        (i.extend == null || e.doc.extend) &&
          (i.extend = e.doc.extend || n.shiftKey),
        i.addNew == null && (i.addNew = me ? n.metaKey : n.ctrlKey),
        i.moveOnDrag == null && (i.moveOnDrag = !(me ? n.altKey : n.ctrlKey)),
        i
      );
    }
    function js(e, t, n, r) {
      L ? setTimeout(Ae(Vo, e), 0) : (e.curOp.focus = g(Q(e)));
      var i = Ys(e, n, r),
        o = e.doc.sel,
        l;
      e.options.dragDrop &&
      gi &&
      !e.isReadOnly() &&
      n == 'single' &&
      (l = o.contains(t)) > -1 &&
      (x((l = o.ranges[l]).from(), t) < 0 || t.xRel > 0) &&
      (x(l.to(), t) > 0 || t.xRel < 0)
        ? Zs(e, r, t, i)
        : Qs(e, r, t, i);
    }
    function Zs(e, t, n, r) {
      var i = e.display,
        o = !1,
        l = ze(e, function (u) {
          W && (i.scroller.draggable = !1),
            (e.state.draggingText = !1),
            e.state.delayingBlurEvent &&
              (e.hasFocus() ? (e.state.delayingBlurEvent = !1) : Hi(e)),
            qe(i.wrapper.ownerDocument, 'mouseup', l),
            qe(i.wrapper.ownerDocument, 'mousemove', a),
            qe(i.scroller, 'dragstart', s),
            qe(i.scroller, 'drop', l),
            o ||
              (Xe(u),
              r.addNew || ri(e.doc, n, null, null, r.extend),
              (W && !mt) || (L && Y == 9)
                ? setTimeout(function () {
                    i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }),
                      i.input.focus();
                  }, 20)
                : i.input.focus());
        }),
        a = function (u) {
          o =
            o ||
            Math.abs(t.clientX - u.clientX) + Math.abs(t.clientY - u.clientY) >=
              10;
        },
        s = function () {
          return (o = !0);
        };
      W && (i.scroller.draggable = !0),
        (e.state.draggingText = l),
        (l.copy = !r.moveOnDrag),
        O(i.wrapper.ownerDocument, 'mouseup', l),
        O(i.wrapper.ownerDocument, 'mousemove', a),
        O(i.scroller, 'dragstart', s),
        O(i.scroller, 'drop', l),
        (e.state.delayingBlurEvent = !0),
        setTimeout(function () {
          return i.input.focus();
        }, 20),
        i.scroller.dragDrop && i.scroller.dragDrop();
    }
    function Vl(e, t, n) {
      if (n == 'char') return new ae(t, t);
      if (n == 'word') return e.findWordAt(t);
      if (n == 'line') return new ae(v(t.line, 0), Z(e.doc, v(t.line + 1, 0)));
      var r = n(e, t);
      return new ae(r.from, r.to);
    }
    function Qs(e, t, n, r) {
      L && Hi(e);
      var i = e.display,
        o = e.doc;
      Xe(t);
      var l,
        a,
        s = o.sel,
        u = s.ranges;
      if (
        (r.addNew && !r.extend
          ? ((a = o.sel.contains(n)), a > -1 ? (l = u[a]) : (l = new ae(n, n)))
          : ((l = o.sel.primary()), (a = o.sel.primIndex)),
        r.unit == 'rectangle')
      )
        r.addNew || (l = new ae(n, n)), (n = br(e, t, !0, !0)), (a = -1);
      else {
        var c = Vl(e, n, r.unit);
        r.extend ? (l = Ji(l, c.anchor, c.head, r.extend)) : (l = c);
      }
      r.addNew
        ? a == -1
          ? ((a = u.length),
            Ye(o, At(e, u.concat([l]), a), { scroll: !1, origin: '*mouse' }))
          : u.length > 1 && u[a].empty() && r.unit == 'char' && !r.extend
          ? (Ye(o, At(e, u.slice(0, a).concat(u.slice(a + 1)), 0), {
              scroll: !1,
              origin: '*mouse',
            }),
            (s = o.sel))
          : Vi(o, a, l, Et)
        : ((a = 0), Ye(o, new yt([l], 0), Et), (s = o.sel));
      var h = n;
      function b(A) {
        if (x(h, A) != 0)
          if (((h = A), r.unit == 'rectangle')) {
            for (
              var I = [],
                B = e.options.tabSize,
                R = _(P(o, n.line).text, n.ch, B),
                ee = _(P(o, A.line).text, A.ch, B),
                ce = Math.min(R, ee),
                _e = Math.max(R, ee),
                xe = Math.min(n.line, A.line),
                dt = Math.min(e.lastLine(), Math.max(n.line, A.line));
              xe <= dt;
              xe++
            ) {
              var nt = P(o, xe).text,
                Me = bt(nt, ce, B);
              ce == _e
                ? I.push(new ae(v(xe, Me), v(xe, Me)))
                : nt.length > Me &&
                  I.push(new ae(v(xe, Me), v(xe, bt(nt, _e, B))));
            }
            I.length || I.push(new ae(n, n)),
              Ye(o, At(e, s.ranges.slice(0, a).concat(I), a), {
                origin: '*mouse',
                scroll: !1,
              }),
              e.scrollIntoView(A);
          } else {
            var it = l,
              Ke = Vl(e, A, r.unit),
              Ie = it.anchor,
              De;
            x(Ke.anchor, Ie) > 0
              ? ((De = Ke.head), (Ie = Ee(it.from(), Ke.anchor)))
              : ((De = Ke.anchor), (Ie = oe(it.to(), Ke.head)));
            var Se = s.ranges.slice(0);
            (Se[a] = Js(e, new ae(Z(o, Ie), De))), Ye(o, At(e, Se, a), Et);
          }
      }
      var y = i.wrapper.getBoundingClientRect(),
        w = 0;
      function k(A) {
        var I = ++w,
          B = br(e, A, !0, r.unit == 'rectangle');
        if (B)
          if (x(B, h) != 0) {
            (e.curOp.focus = g(Q(e))), b(B);
            var R = Qn(i, o);
            (B.line >= R.to || B.line < R.from) &&
              setTimeout(
                ze(e, function () {
                  w == I && k(A);
                }),
                150
              );
          } else {
            var ee = A.clientY < y.top ? -20 : A.clientY > y.bottom ? 20 : 0;
            ee &&
              setTimeout(
                ze(e, function () {
                  w == I && ((i.scroller.scrollTop += ee), k(A));
                }),
                50
              );
          }
      }
      function T(A) {
        (e.state.selectingText = !1),
          (w = 1 / 0),
          A && (Xe(A), i.input.focus()),
          qe(i.wrapper.ownerDocument, 'mousemove', N),
          qe(i.wrapper.ownerDocument, 'mouseup', E),
          (o.history.lastSelOrigin = null);
      }
      var N = ze(e, function (A) {
          A.buttons === 0 || !$r(A) ? T(A) : k(A);
        }),
        E = ze(e, T);
      (e.state.selectingText = E),
        O(i.wrapper.ownerDocument, 'mousemove', N),
        O(i.wrapper.ownerDocument, 'mouseup', E);
    }
    function Js(e, t) {
      var n = t.anchor,
        r = t.head,
        i = P(e.doc, n.line);
      if (x(n, r) == 0 && n.sticky == r.sticky) return t;
      var o = kt(i);
      if (!o) return t;
      var l = wt(o, n.ch, n.sticky),
        a = o[l];
      if (a.from != n.ch && a.to != n.ch) return t;
      var s = l + ((a.from == n.ch) == (a.level != 1) ? 0 : 1);
      if (s == 0 || s == o.length) return t;
      var u;
      if (r.line != n.line)
        u = (r.line - n.line) * (e.doc.direction == 'ltr' ? 1 : -1) > 0;
      else {
        var c = wt(o, r.ch, r.sticky),
          h = c - l || (r.ch - n.ch) * (a.level == 1 ? -1 : 1);
        c == s - 1 || c == s ? (u = h < 0) : (u = h > 0);
      }
      var b = o[s + (u ? -1 : 0)],
        y = u == (b.level == 1),
        w = y ? b.from : b.to,
        k = y ? 'after' : 'before';
      return n.ch == w && n.sticky == k ? t : new ae(new v(n.line, w, k), r);
    }
    function $l(e, t, n, r) {
      var i, o;
      if (t.touches) (i = t.touches[0].clientX), (o = t.touches[0].clientY);
      else
        try {
          (i = t.clientX), (o = t.clientY);
        } catch {
          return !1;
        }
      if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
        return !1;
      r && Xe(t);
      var l = e.display,
        a = l.lineDiv.getBoundingClientRect();
      if (o > a.bottom || !Qe(e, n)) return Vr(t);
      o -= a.top - l.viewOffset;
      for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
        var u = l.gutters.childNodes[s];
        if (u && u.getBoundingClientRect().right >= i) {
          var c = Pt(e.doc, o),
            h = e.display.gutterSpecs[s];
          return de(e, n, e, c, h.className, t), Vr(t);
        }
      }
    }
    function io(e, t) {
      return $l(e, t, 'gutterClick', !0);
    }
    function ea(e, t) {
      Jt(e.display, t) ||
        Vs(e, t) ||
        we(e, t, 'contextmenu') ||
        Tt ||
        e.display.input.onContextMenu(t);
    }
    function Vs(e, t) {
      return Qe(e, 'gutterContextMenu')
        ? $l(e, t, 'gutterContextMenu', !1)
        : !1;
    }
    function ta(e) {
      (e.display.wrapper.className =
        e.display.wrapper.className.replace(/\s*cm-s-\S+/g, '') +
        e.options.theme.replace(/(^|\s)\s*/g, ' cm-s-')),
        sn(e);
    }
    var Xr = {
        toString: function () {
          return 'CodeMirror.Init';
        },
      },
      ra = {},
      ui = {};
    function $s(e) {
      var t = e.optionHandlers;
      function n(r, i, o, l) {
        (e.defaults[r] = i),
          o &&
            (t[r] = l
              ? function (a, s, u) {
                  u != Xr && o(a, s, u);
                }
              : o);
      }
      (e.defineOption = n),
        (e.Init = Xr),
        n(
          'value',
          '',
          function (r, i) {
            return r.setValue(i);
          },
          !0
        ),
        n(
          'mode',
          null,
          function (r, i) {
            (r.doc.modeOption = i), ji(r);
          },
          !0
        ),
        n('indentUnit', 2, ji, !0),
        n('indentWithTabs', !1),
        n('smartIndent', !0),
        n(
          'tabSize',
          4,
          function (r) {
            gn(r), sn(r), tt(r);
          },
          !0
        ),
        n('lineSeparator', null, function (r, i) {
          if (((r.doc.lineSep = i), !!i)) {
            var o = [],
              l = r.doc.first;
            r.doc.iter(function (s) {
              for (var u = 0; ; ) {
                var c = s.text.indexOf(i, u);
                if (c == -1) break;
                (u = c + i.length), o.push(v(l, c));
              }
              l++;
            });
            for (var a = o.length - 1; a >= 0; a--)
              Ur(r.doc, i, o[a], v(o[a].line, o[a].ch + i.length));
          }
        }),
        n(
          'specialChars',
          /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g,
          function (r, i, o) {
            (r.state.specialChars = new RegExp(
              i.source + (i.test('	') ? '' : '|	'),
              'g'
            )),
              o != Xr && r.refresh();
          }
        ),
        n(
          'specialCharPlaceholder',
          Da,
          function (r) {
            return r.refresh();
          },
          !0
        ),
        n('electricChars', !0),
        n(
          'inputStyle',
          We ? 'contenteditable' : 'textarea',
          function () {
            throw new Error(
              'inputStyle can not (yet) be changed in a running editor'
            );
          },
          !0
        ),
        n(
          'spellcheck',
          !1,
          function (r, i) {
            return (r.getInputField().spellcheck = i);
          },
          !0
        ),
        n(
          'autocorrect',
          !1,
          function (r, i) {
            return (r.getInputField().autocorrect = i);
          },
          !0
        ),
        n(
          'autocapitalize',
          !1,
          function (r, i) {
            return (r.getInputField().autocapitalize = i);
          },
          !0
        ),
        n('rtlMoveVisually', !he),
        n('wholeLineUpdateBefore', !0),
        n(
          'theme',
          'default',
          function (r) {
            ta(r), vn(r);
          },
          !0
        ),
        n('keyMap', 'default', function (r, i, o) {
          var l = ai(i),
            a = o != Xr && ai(o);
          a && a.detach && a.detach(r, l), l.attach && l.attach(r, a || null);
        }),
        n('extraKeys', null),
        n('configureMouse', null),
        n('lineWrapping', !1, tu, !0),
        n(
          'gutters',
          [],
          function (r, i) {
            (r.display.gutterSpecs = Xi(i, r.options.lineNumbers)), vn(r);
          },
          !0
        ),
        n(
          'fixedGutter',
          !0,
          function (r, i) {
            (r.display.gutters.style.left = i ? Wi(r.display) + 'px' : '0'),
              r.refresh();
          },
          !0
        ),
        n(
          'coverGutterNextToScrollbar',
          !1,
          function (r) {
            return Hr(r);
          },
          !0
        ),
        n(
          'scrollbarStyle',
          'native',
          function (r) {
            il(r),
              Hr(r),
              r.display.scrollbars.setScrollTop(r.doc.scrollTop),
              r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
          },
          !0
        ),
        n(
          'lineNumbers',
          !1,
          function (r, i) {
            (r.display.gutterSpecs = Xi(r.options.gutters, i)), vn(r);
          },
          !0
        ),
        n('firstLineNumber', 1, vn, !0),
        n(
          'lineNumberFormatter',
          function (r) {
            return r;
          },
          vn,
          !0
        ),
        n('showCursorWhenSelecting', !1, un, !0),
        n('resetSelectionOnContextMenu', !0),
        n('lineWiseCopyCut', !0),
        n('pasteLinesPerSelection', !0),
        n('selectionsMayTouch', !1),
        n('readOnly', !1, function (r, i) {
          i == 'nocursor' && (Pr(r), r.display.input.blur()),
            r.display.input.readOnlyChanged(i);
        }),
        n('screenReaderLabel', null, function (r, i) {
          (i = i === '' ? null : i),
            r.display.input.screenReaderLabelChanged(i);
        }),
        n(
          'disableInput',
          !1,
          function (r, i) {
            i || r.display.input.reset();
          },
          !0
        ),
        n('dragDrop', !0, eu),
        n('allowDropFileTypes', null),
        n('cursorBlinkRate', 530),
        n('cursorScrollMargin', 0),
        n('cursorHeight', 1, un, !0),
        n('singleCursorHeightPerLine', !0, un, !0),
        n('workTime', 100),
        n('workDelay', 100),
        n('flattenSpans', !0, gn, !0),
        n('addModeClass', !1, gn, !0),
        n('pollInterval', 100),
        n('undoDepth', 200, function (r, i) {
          return (r.doc.history.undoDepth = i);
        }),
        n('historyEventDelay', 1250),
        n(
          'viewportMargin',
          10,
          function (r) {
            return r.refresh();
          },
          !0
        ),
        n('maxHighlightLength', 1e4, gn, !0),
        n('moveInputWithCursor', !0, function (r, i) {
          i || r.display.input.resetPosition();
        }),
        n('tabindex', null, function (r, i) {
          return (r.display.input.getField().tabIndex = i || '');
        }),
        n('autofocus', null),
        n(
          'direction',
          'ltr',
          function (r, i) {
            return r.doc.setDirection(i);
          },
          !0
        ),
        n('phrases', null);
    }
    function eu(e, t, n) {
      var r = n && n != Xr;
      if (!t != !r) {
        var i = e.display.dragFunctions,
          o = t ? O : qe;
        o(e.display.scroller, 'dragstart', i.start),
          o(e.display.scroller, 'dragenter', i.enter),
          o(e.display.scroller, 'dragover', i.over),
          o(e.display.scroller, 'dragleave', i.leave),
          o(e.display.scroller, 'drop', i.drop);
      }
    }
    function tu(e) {
      e.options.lineWrapping
        ? (C(e.display.wrapper, 'CodeMirror-wrap'),
          (e.display.sizer.style.minWidth = ''),
          (e.display.sizerWidth = null))
        : (ve(e.display.wrapper, 'CodeMirror-wrap'), Ci(e)),
        Fi(e),
        tt(e),
        sn(e),
        setTimeout(function () {
          return Hr(e);
        }, 100);
    }
    function ge(e, t) {
      var n = this;
      if (!(this instanceof ge)) return new ge(e, t);
      (this.options = t = t ? G(t) : {}), G(ra, t, !1);
      var r = t.value;
      typeof r == 'string'
        ? (r = new rt(r, t.mode, null, t.lineSeparator, t.direction))
        : t.mode && (r.modeOption = t.mode),
        (this.doc = r);
      var i = new ge.inputStyles[t.inputStyle](this),
        o = (this.display = new ps(e, r, i, t));
      (o.wrapper.CodeMirror = this),
        ta(this),
        t.lineWrapping &&
          (this.display.wrapper.className += ' CodeMirror-wrap'),
        il(this),
        (this.state = {
          keyMaps: [],
          overlays: [],
          modeGen: 0,
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          pasteIncoming: -1,
          cutIncoming: -1,
          selectingText: !1,
          draggingText: !1,
          highlight: new J(),
          keySeq: null,
          specialChars: null,
        }),
        t.autofocus && !We && o.input.focus(),
        L &&
          Y < 11 &&
          setTimeout(function () {
            return n.display.input.reset(!0);
          }, 20),
        ru(this),
        Is(),
        Sr(this),
        (this.curOp.forceUpdate = !0),
        pl(this, r),
        (t.autofocus && !We) || this.hasFocus()
          ? setTimeout(function () {
              n.hasFocus() && !n.state.focused && _i(n);
            }, 20)
          : Pr(this);
      for (var l in ui) ui.hasOwnProperty(l) && ui[l](this, t[l], Xr);
      al(this), t.finishInit && t.finishInit(this);
      for (var a = 0; a < oo.length; ++a) oo[a](this);
      Cr(this),
        W &&
          t.lineWrapping &&
          getComputedStyle(o.lineDiv).textRendering == 'optimizelegibility' &&
          (o.lineDiv.style.textRendering = 'auto');
    }
    (ge.defaults = ra), (ge.optionHandlers = ui);
    function ru(e) {
      var t = e.display;
      O(t.scroller, 'mousedown', ze(e, Jl)),
        L && Y < 11
          ? O(
              t.scroller,
              'dblclick',
              ze(e, function (s) {
                if (!we(e, s)) {
                  var u = br(e, s);
                  if (!(!u || io(e, s) || Jt(e.display, s))) {
                    Xe(s);
                    var c = e.findWordAt(u);
                    ri(e.doc, c.anchor, c.head);
                  }
                }
              })
            )
          : O(t.scroller, 'dblclick', function (s) {
              return we(e, s) || Xe(s);
            }),
        O(t.scroller, 'contextmenu', function (s) {
          return ea(e, s);
        }),
        O(t.input.getField(), 'contextmenu', function (s) {
          t.scroller.contains(s.target) || ea(e, s);
        });
      var n,
        r = { end: 0 };
      function i() {
        t.activeTouch &&
          ((n = setTimeout(function () {
            return (t.activeTouch = null);
          }, 1e3)),
          (r = t.activeTouch),
          (r.end = +new Date()));
      }
      function o(s) {
        if (s.touches.length != 1) return !1;
        var u = s.touches[0];
        return u.radiusX <= 1 && u.radiusY <= 1;
      }
      function l(s, u) {
        if (u.left == null) return !0;
        var c = u.left - s.left,
          h = u.top - s.top;
        return c * c + h * h > 20 * 20;
      }
      O(t.scroller, 'touchstart', function (s) {
        if (!we(e, s) && !o(s) && !io(e, s)) {
          t.input.ensurePolled(), clearTimeout(n);
          var u = +new Date();
          (t.activeTouch = {
            start: u,
            moved: !1,
            prev: u - r.end <= 300 ? r : null,
          }),
            s.touches.length == 1 &&
              ((t.activeTouch.left = s.touches[0].pageX),
              (t.activeTouch.top = s.touches[0].pageY));
        }
      }),
        O(t.scroller, 'touchmove', function () {
          t.activeTouch && (t.activeTouch.moved = !0);
        }),
        O(t.scroller, 'touchend', function (s) {
          var u = t.activeTouch;
          if (
            u &&
            !Jt(t, s) &&
            u.left != null &&
            !u.moved &&
            new Date() - u.start < 300
          ) {
            var c = e.coordsChar(t.activeTouch, 'page'),
              h;
            !u.prev || l(u, u.prev)
              ? (h = new ae(c, c))
              : !u.prev.prev || l(u, u.prev.prev)
              ? (h = e.findWordAt(c))
              : (h = new ae(v(c.line, 0), Z(e.doc, v(c.line + 1, 0)))),
              e.setSelection(h.anchor, h.head),
              e.focus(),
              Xe(s);
          }
          i();
        }),
        O(t.scroller, 'touchcancel', i),
        O(t.scroller, 'scroll', function () {
          t.scroller.clientHeight &&
            (cn(e, t.scroller.scrollTop),
            wr(e, t.scroller.scrollLeft, !0),
            de(e, 'scroll', e));
        }),
        O(t.scroller, 'mousewheel', function (s) {
          return fl(e, s);
        }),
        O(t.scroller, 'DOMMouseScroll', function (s) {
          return fl(e, s);
        }),
        O(t.wrapper, 'scroll', function () {
          return (t.wrapper.scrollTop = t.wrapper.scrollLeft = 0);
        }),
        (t.dragFunctions = {
          enter: function (s) {
            we(e, s) || qt(s);
          },
          over: function (s) {
            we(e, s) || (Es(e, s), qt(s));
          },
          start: function (s) {
            return Os(e, s);
          },
          drop: ze(e, As),
          leave: function (s) {
            we(e, s) || Hl(e);
          },
        });
      var a = t.input.getField();
      O(a, 'keyup', function (s) {
        return Zl.call(e, s);
      }),
        O(a, 'keydown', ze(e, jl)),
        O(a, 'keypress', ze(e, Ql)),
        O(a, 'focus', function (s) {
          return _i(e, s);
        }),
        O(a, 'blur', function (s) {
          return Pr(e, s);
        });
    }
    var oo = [];
    ge.defineInitHook = function (e) {
      return oo.push(e);
    };
    function Nn(e, t, n, r) {
      var i = e.doc,
        o;
      n == null && (n = 'add'),
        n == 'smart' && (i.mode.indent ? (o = rn(e, t).state) : (n = 'prev'));
      var l = e.options.tabSize,
        a = P(i, t),
        s = _(a.text, null, l);
      a.stateAfter && (a.stateAfter = null);
      var u = a.text.match(/^\s*/)[0],
        c;
      if (!r && !/\S/.test(a.text)) (c = 0), (n = 'not');
      else if (
        n == 'smart' &&
        ((c = i.mode.indent(o, a.text.slice(u.length), a.text)),
        c == se || c > 150)
      ) {
        if (!r) return;
        n = 'prev';
      }
      n == 'prev'
        ? t > i.first
          ? (c = _(P(i, t - 1).text, null, l))
          : (c = 0)
        : n == 'add'
        ? (c = s + e.options.indentUnit)
        : n == 'subtract'
        ? (c = s - e.options.indentUnit)
        : typeof n == 'number' && (c = s + n),
        (c = Math.max(0, c));
      var h = '',
        b = 0;
      if (e.options.indentWithTabs)
        for (var y = Math.floor(c / l); y; --y) (b += l), (h += '	');
      if ((b < c && (h += pt(c - b)), h != u))
        return (
          Ur(i, h, v(t, 0), v(t, u.length), '+input'), (a.stateAfter = null), !0
        );
      for (var w = 0; w < i.sel.ranges.length; w++) {
        var k = i.sel.ranges[w];
        if (k.head.line == t && k.head.ch < u.length) {
          var T = v(t, u.length);
          Vi(i, w, new ae(T, T));
          break;
        }
      }
    }
    var Ot = null;
    function fi(e) {
      Ot = e;
    }
    function lo(e, t, n, r, i) {
      var o = e.doc;
      (e.display.shift = !1), r || (r = o.sel);
      var l = +new Date() - 200,
        a = i == 'paste' || e.state.pasteIncoming > l,
        s = en(t),
        u = null;
      if (a && r.ranges.length > 1)
        if (
          Ot &&
          Ot.text.join(`
`) == t
        ) {
          if (r.ranges.length % Ot.text.length == 0) {
            u = [];
            for (var c = 0; c < Ot.text.length; c++)
              u.push(o.splitLines(Ot.text[c]));
          }
        } else
          s.length == r.ranges.length &&
            e.options.pasteLinesPerSelection &&
            (u = Ut(s, function (N) {
              return [N];
            }));
      for (var h = e.curOp.updateInput, b = r.ranges.length - 1; b >= 0; b--) {
        var y = r.ranges[b],
          w = y.from(),
          k = y.to();
        y.empty() &&
          (n && n > 0
            ? (w = v(w.line, w.ch - n))
            : e.state.overwrite && !a
            ? (k = v(
                k.line,
                Math.min(P(o, k.line).text.length, k.ch + te(s).length)
              ))
            : a &&
              Ot &&
              Ot.lineWise &&
              Ot.text.join(`
`) ==
                s.join(`
`) &&
              (w = k = v(w.line, 0)));
        var T = {
          from: w,
          to: k,
          text: u ? u[b % u.length] : s,
          origin:
            i || (a ? 'paste' : e.state.cutIncoming > l ? 'cut' : '+input'),
        };
        Br(e.doc, T), Pe(e, 'inputRead', e, T);
      }
      t && !a && ia(e, t),
        zr(e),
        e.curOp.updateInput < 2 && (e.curOp.updateInput = h),
        (e.curOp.typing = !0),
        (e.state.pasteIncoming = e.state.cutIncoming = -1);
    }
    function na(e, t) {
      var n = e.clipboardData && e.clipboardData.getData('Text');
      if (n)
        return (
          e.preventDefault(),
          !t.isReadOnly() &&
            !t.options.disableInput &&
            t.hasFocus() &&
            ht(t, function () {
              return lo(t, n, 0, null, 'paste');
            }),
          !0
        );
    }
    function ia(e, t) {
      if (!(!e.options.electricChars || !e.options.smartIndent))
        for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
          var i = n.ranges[r];
          if (
            !(
              i.head.ch > 100 ||
              (r && n.ranges[r - 1].head.line == i.head.line)
            )
          ) {
            var o = e.getModeAt(i.head),
              l = !1;
            if (o.electricChars) {
              for (var a = 0; a < o.electricChars.length; a++)
                if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                  l = Nn(e, i.head.line, 'smart');
                  break;
                }
            } else
              o.electricInput &&
                o.electricInput.test(
                  P(e.doc, i.head.line).text.slice(0, i.head.ch)
                ) &&
                (l = Nn(e, i.head.line, 'smart'));
            l && Pe(e, 'electricInput', e, i.head.line);
          }
        }
    }
    function oa(e) {
      for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
        var i = e.doc.sel.ranges[r].head.line,
          o = { anchor: v(i, 0), head: v(i + 1, 0) };
        n.push(o), t.push(e.getRange(o.anchor, o.head));
      }
      return { text: t, ranges: n };
    }
    function la(e, t, n, r) {
      e.setAttribute('autocorrect', n ? '' : 'off'),
        e.setAttribute('autocapitalize', r ? '' : 'off'),
        e.setAttribute('spellcheck', !!t);
    }
    function aa() {
      var e = p(
          'textarea',
          null,
          null,
          'position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none'
        ),
        t = p(
          'div',
          [e],
          null,
          'overflow: hidden; position: relative; width: 3px; height: 0px;'
        );
      return (
        W ? (e.style.width = '1000px') : e.setAttribute('wrap', 'off'),
        ie && (e.style.border = '1px solid black'),
        la(e),
        t
      );
    }
    function nu(e) {
      var t = e.optionHandlers,
        n = (e.helpers = {});
      (e.prototype = {
        constructor: e,
        focus: function () {
          Fe(this).focus(), this.display.input.focus();
        },
        setOption: function (r, i) {
          var o = this.options,
            l = o[r];
          (o[r] == i && r != 'mode') ||
            ((o[r] = i),
            t.hasOwnProperty(r) && ze(this, t[r])(this, i, l),
            de(this, 'optionChange', this, r));
        },
        getOption: function (r) {
          return this.options[r];
        },
        getDoc: function () {
          return this.doc;
        },
        addKeyMap: function (r, i) {
          this.state.keyMaps[i ? 'push' : 'unshift'](ai(r));
        },
        removeKeyMap: function (r) {
          for (var i = this.state.keyMaps, o = 0; o < i.length; ++o)
            if (i[o] == r || i[o].name == r) return i.splice(o, 1), !0;
        },
        addOverlay: Ve(function (r, i) {
          var o = r.token ? r : e.getMode(this.options, r);
          if (o.startState) throw new Error('Overlays may not be stateful.');
          Oe(
            this.state.overlays,
            {
              mode: o,
              modeSpec: r,
              opaque: i && i.opaque,
              priority: (i && i.priority) || 0,
            },
            function (l) {
              return l.priority;
            }
          ),
            this.state.modeGen++,
            tt(this);
        }),
        removeOverlay: Ve(function (r) {
          for (var i = this.state.overlays, o = 0; o < i.length; ++o) {
            var l = i[o].modeSpec;
            if (l == r || (typeof r == 'string' && l.name == r)) {
              i.splice(o, 1), this.state.modeGen++, tt(this);
              return;
            }
          }
        }),
        indentLine: Ve(function (r, i, o) {
          typeof i != 'string' &&
            typeof i != 'number' &&
            (i == null
              ? (i = this.options.smartIndent ? 'smart' : 'prev')
              : (i = i ? 'add' : 'subtract')),
            f(this.doc, r) && Nn(this, r, i, o);
        }),
        indentSelection: Ve(function (r) {
          for (var i = this.doc.sel.ranges, o = -1, l = 0; l < i.length; l++) {
            var a = i[l];
            if (a.empty())
              a.head.line > o &&
                (Nn(this, a.head.line, r, !0),
                (o = a.head.line),
                l == this.doc.sel.primIndex && zr(this));
            else {
              var s = a.from(),
                u = a.to(),
                c = Math.max(o, s.line);
              o = Math.min(this.lastLine(), u.line - (u.ch ? 0 : 1)) + 1;
              for (var h = c; h < o; ++h) Nn(this, h, r);
              var b = this.doc.sel.ranges;
              s.ch == 0 &&
                i.length == b.length &&
                b[l].from().ch > 0 &&
                Vi(this.doc, l, new ae(s, b[l].to()), pe);
            }
          }
        }),
        getTokenAt: function (r, i) {
          return go(this, r, i);
        },
        getLineTokens: function (r, i) {
          return go(this, v(r), i, !0);
        },
        getTokenTypeAt: function (r) {
          r = Z(this.doc, r);
          var i = ho(this, P(this.doc, r.line)),
            o = 0,
            l = (i.length - 1) / 2,
            a = r.ch,
            s;
          if (a == 0) s = i[2];
          else
            for (;;) {
              var u = (o + l) >> 1;
              if ((u ? i[u * 2 - 1] : 0) >= a) l = u;
              else if (i[u * 2 + 1] < a) o = u + 1;
              else {
                s = i[u * 2 + 2];
                break;
              }
            }
          var c = s ? s.indexOf('overlay ') : -1;
          return c < 0 ? s : c == 0 ? null : s.slice(0, c - 1);
        },
        getModeAt: function (r) {
          var i = this.doc.mode;
          return i.innerMode
            ? e.innerMode(i, this.getTokenAt(r).state).mode
            : i;
        },
        getHelper: function (r, i) {
          return this.getHelpers(r, i)[0];
        },
        getHelpers: function (r, i) {
          var o = [];
          if (!n.hasOwnProperty(i)) return o;
          var l = n[i],
            a = this.getModeAt(r);
          if (typeof a[i] == 'string') l[a[i]] && o.push(l[a[i]]);
          else if (a[i])
            for (var s = 0; s < a[i].length; s++) {
              var u = l[a[i][s]];
              u && o.push(u);
            }
          else
            a.helperType && l[a.helperType]
              ? o.push(l[a.helperType])
              : l[a.name] && o.push(l[a.name]);
          for (var c = 0; c < l._global.length; c++) {
            var h = l._global[c];
            h.pred(a, this) && $(o, h.val) == -1 && o.push(h.val);
          }
          return o;
        },
        getStateAfter: function (r, i) {
          var o = this.doc;
          return (
            (r = gt(o, r ?? o.first + o.size - 1)), rn(this, r + 1, i).state
          );
        },
        cursorCoords: function (r, i) {
          var o,
            l = this.doc.sel.primary();
          return (
            r == null
              ? (o = l.head)
              : typeof r == 'object'
              ? (o = Z(this.doc, r))
              : (o = r ? l.from() : l.to()),
            Nt(this, o, i || 'page')
          );
        },
        charCoords: function (r, i) {
          return Xn(this, Z(this.doc, r), i || 'page');
        },
        coordsChar: function (r, i) {
          return (r = qo(this, r, i || 'page')), Oi(this, r.left, r.top);
        },
        lineAtHeight: function (r, i) {
          return (
            (r = qo(this, { top: r, left: 0 }, i || 'page').top),
            Pt(this.doc, r + this.display.viewOffset)
          );
        },
        heightAtLine: function (r, i, o) {
          var l = !1,
            a;
          if (typeof r == 'number') {
            var s = this.doc.first + this.doc.size - 1;
            r < this.doc.first
              ? (r = this.doc.first)
              : r > s && ((r = s), (l = !0)),
              (a = P(this.doc, r));
          } else a = r;
          return (
            qn(this, a, { top: 0, left: 0 }, i || 'page', o || l).top +
            (l ? this.doc.height - Qt(a) : 0)
          );
        },
        defaultTextHeight: function () {
          return Wr(this.display);
        },
        defaultCharWidth: function () {
          return Fr(this.display);
        },
        getViewport: function () {
          return { from: this.display.viewFrom, to: this.display.viewTo };
        },
        addWidget: function (r, i, o, l, a) {
          var s = this.display;
          r = Nt(this, Z(this.doc, r));
          var u = r.bottom,
            c = r.left;
          if (
            ((i.style.position = 'absolute'),
            i.setAttribute('cm-ignore-events', 'true'),
            this.display.input.setUneditable(i),
            s.sizer.appendChild(i),
            l == 'over')
          )
            u = r.top;
          else if (l == 'above' || l == 'near') {
            var h = Math.max(s.wrapper.clientHeight, this.doc.height),
              b = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
            (l == 'above' || r.bottom + i.offsetHeight > h) &&
            r.top > i.offsetHeight
              ? (u = r.top - i.offsetHeight)
              : r.bottom + i.offsetHeight <= h && (u = r.bottom),
              c + i.offsetWidth > b && (c = b - i.offsetWidth);
          }
          (i.style.top = u + 'px'),
            (i.style.left = i.style.right = ''),
            a == 'right'
              ? ((c = s.sizer.clientWidth - i.offsetWidth),
                (i.style.right = '0px'))
              : (a == 'left'
                  ? (c = 0)
                  : a == 'middle' &&
                    (c = (s.sizer.clientWidth - i.offsetWidth) / 2),
                (i.style.left = c + 'px')),
            o &&
              es(this, {
                left: c,
                top: u,
                right: c + i.offsetWidth,
                bottom: u + i.offsetHeight,
              });
        },
        triggerOnKeyDown: Ve(jl),
        triggerOnKeyPress: Ve(Ql),
        triggerOnKeyUp: Zl,
        triggerOnMouseDown: Ve(Jl),
        execCommand: function (r) {
          if (Ln.hasOwnProperty(r)) return Ln[r].call(null, this);
        },
        triggerElectric: Ve(function (r) {
          ia(this, r);
        }),
        findPosH: function (r, i, o, l) {
          var a = 1;
          i < 0 && ((a = -1), (i = -i));
          for (
            var s = Z(this.doc, r), u = 0;
            u < i && ((s = ao(this.doc, s, a, o, l)), !s.hitSide);
            ++u
          );
          return s;
        },
        moveH: Ve(function (r, i) {
          var o = this;
          this.extendSelectionsBy(function (l) {
            return o.display.shift || o.doc.extend || l.empty()
              ? ao(o.doc, l.head, r, i, o.options.rtlMoveVisually)
              : r < 0
              ? l.from()
              : l.to();
          }, It);
        }),
        deleteH: Ve(function (r, i) {
          var o = this.doc.sel,
            l = this.doc;
          o.somethingSelected()
            ? l.replaceSelection('', null, '+delete')
            : qr(this, function (a) {
                var s = ao(l, a.head, r, i, !1);
                return r < 0
                  ? { from: s, to: a.head }
                  : { from: a.head, to: s };
              });
        }),
        findPosV: function (r, i, o, l) {
          var a = 1,
            s = l;
          i < 0 && ((a = -1), (i = -i));
          for (var u = Z(this.doc, r), c = 0; c < i; ++c) {
            var h = Nt(this, u, 'div');
            if (
              (s == null ? (s = h.left) : (h.left = s),
              (u = sa(this, h, a, o)),
              u.hitSide)
            )
              break;
          }
          return u;
        },
        moveV: Ve(function (r, i) {
          var o = this,
            l = this.doc,
            a = [],
            s = !this.display.shift && !l.extend && l.sel.somethingSelected();
          if (
            (l.extendSelectionsBy(function (c) {
              if (s) return r < 0 ? c.from() : c.to();
              var h = Nt(o, c.head, 'div');
              c.goalColumn != null && (h.left = c.goalColumn), a.push(h.left);
              var b = sa(o, h, r, i);
              return (
                i == 'page' &&
                  c == l.sel.primary() &&
                  Bi(o, Xn(o, b, 'div').top - h.top),
                b
              );
            }, It),
            a.length)
          )
            for (var u = 0; u < l.sel.ranges.length; u++)
              l.sel.ranges[u].goalColumn = a[u];
        }),
        findWordAt: function (r) {
          var i = this.doc,
            o = P(i, r.line).text,
            l = r.ch,
            a = r.ch;
          if (o) {
            var s = this.getHelper(r, 'wordChars');
            (r.sticky == 'before' || a == o.length) && l ? --l : ++a;
            for (
              var u = o.charAt(l),
                c = Gt(u, s)
                  ? function (h) {
                      return Gt(h, s);
                    }
                  : /\s/.test(u)
                  ? function (h) {
                      return /\s/.test(h);
                    }
                  : function (h) {
                      return !/\s/.test(h) && !Gt(h);
                    };
              l > 0 && c(o.charAt(l - 1));

            )
              --l;
            for (; a < o.length && c(o.charAt(a)); ) ++a;
          }
          return new ae(v(r.line, l), v(r.line, a));
        },
        toggleOverwrite: function (r) {
          (r != null && r == this.state.overwrite) ||
            ((this.state.overwrite = !this.state.overwrite)
              ? C(this.display.cursorDiv, 'CodeMirror-overwrite')
              : ve(this.display.cursorDiv, 'CodeMirror-overwrite'),
            de(this, 'overwriteToggle', this, this.state.overwrite));
        },
        hasFocus: function () {
          return this.display.input.getField() == g(Q(this));
        },
        isReadOnly: function () {
          return !!(this.options.readOnly || this.doc.cantEdit);
        },
        scrollTo: Ve(function (r, i) {
          fn(this, r, i);
        }),
        getScrollInfo: function () {
          var r = this.display.scroller;
          return {
            left: r.scrollLeft,
            top: r.scrollTop,
            height: r.scrollHeight - Ht(this) - this.display.barHeight,
            width: r.scrollWidth - Ht(this) - this.display.barWidth,
            clientHeight: Mi(this),
            clientWidth: yr(this),
          };
        },
        scrollIntoView: Ve(function (r, i) {
          r == null
            ? ((r = { from: this.doc.sel.primary().head, to: null }),
              i == null && (i = this.options.cursorScrollMargin))
            : typeof r == 'number'
            ? (r = { from: v(r, 0), to: null })
            : r.from == null && (r = { from: r, to: null }),
            r.to || (r.to = r.from),
            (r.margin = i || 0),
            r.from.line != null
              ? ts(this, r)
              : el(this, r.from, r.to, r.margin);
        }),
        setSize: Ve(function (r, i) {
          var o = this,
            l = function (s) {
              return typeof s == 'number' || /^\d+$/.test(String(s))
                ? s + 'px'
                : s;
            };
          r != null && (this.display.wrapper.style.width = l(r)),
            i != null && (this.display.wrapper.style.height = l(i)),
            this.options.lineWrapping && Uo(this);
          var a = this.display.viewFrom;
          this.doc.iter(a, this.display.viewTo, function (s) {
            if (s.widgets) {
              for (var u = 0; u < s.widgets.length; u++)
                if (s.widgets[u].noHScroll) {
                  ar(o, a, 'widget');
                  break;
                }
            }
            ++a;
          }),
            (this.curOp.forceUpdate = !0),
            de(this, 'refresh', this);
        }),
        operation: function (r) {
          return ht(this, r);
        },
        startOperation: function () {
          return Sr(this);
        },
        endOperation: function () {
          return Cr(this);
        },
        refresh: Ve(function () {
          var r = this.display.cachedTextHeight;
          tt(this),
            (this.curOp.forceUpdate = !0),
            sn(this),
            fn(this, this.doc.scrollLeft, this.doc.scrollTop),
            Gi(this.display),
            (r == null ||
              Math.abs(r - Wr(this.display)) > 0.5 ||
              this.options.lineWrapping) &&
              Fi(this),
            de(this, 'refresh', this);
        }),
        swapDoc: Ve(function (r) {
          var i = this.doc;
          return (
            (i.cm = null),
            this.state.selectingText && this.state.selectingText(),
            pl(this, r),
            sn(this),
            this.display.input.reset(),
            fn(this, r.scrollLeft, r.scrollTop),
            (this.curOp.forceScroll = !0),
            Pe(this, 'swapDoc', this, i),
            i
          );
        }),
        phrase: function (r) {
          var i = this.options.phrases;
          return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r;
        },
        getInputField: function () {
          return this.display.input.getField();
        },
        getWrapperElement: function () {
          return this.display.wrapper;
        },
        getScrollerElement: function () {
          return this.display.scroller;
        },
        getGutterElement: function () {
          return this.display.gutters;
        },
      }),
        Je(e),
        (e.registerHelper = function (r, i, o) {
          n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), (n[r][i] = o);
        }),
        (e.registerGlobalHelper = function (r, i, o, l) {
          e.registerHelper(r, i, l), n[r]._global.push({ pred: o, val: l });
        });
    }
    function ao(e, t, n, r, i) {
      var o = t,
        l = n,
        a = P(e, t.line),
        s = i && e.direction == 'rtl' ? -n : n;
      function u() {
        var E = t.line + s;
        return E < e.first || E >= e.first + e.size
          ? !1
          : ((t = new v(E, t.ch, t.sticky)), (a = P(e, E)));
      }
      function c(E) {
        var A;
        if (r == 'codepoint') {
          var I = a.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
          if (isNaN(I)) A = null;
          else {
            var B = n > 0 ? I >= 55296 && I < 56320 : I >= 56320 && I < 57343;
            A = new v(
              t.line,
              Math.max(0, Math.min(a.text.length, t.ch + n * (B ? 2 : 1))),
              -n
            );
          }
        } else i ? (A = Hs(e.cm, a, t, n)) : (A = eo(a, t, n));
        if (A == null)
          if (!E && u()) t = to(i, e.cm, a, t.line, s);
          else return !1;
        else t = A;
        return !0;
      }
      if (r == 'char' || r == 'codepoint') c();
      else if (r == 'column') c(!0);
      else if (r == 'word' || r == 'group')
        for (
          var h = null,
            b = r == 'group',
            y = e.cm && e.cm.getHelper(t, 'wordChars'),
            w = !0;
          !(n < 0 && !c(!w));
          w = !1
        ) {
          var k =
              a.text.charAt(t.ch) ||
              `
`,
            T = Gt(k, y)
              ? 'w'
              : b &&
                k ==
                  `
`
              ? 'n'
              : !b || /\s/.test(k)
              ? null
              : 'p';
          if ((b && !w && !T && (T = 's'), h && h != T)) {
            n < 0 && ((n = 1), c(), (t.sticky = 'after'));
            break;
          }
          if ((T && (h = T), n > 0 && !c(!w))) break;
        }
      var N = ii(e, t, o, l, !0);
      return j(o, N) && (N.hitSide = !0), N;
    }
    function sa(e, t, n, r) {
      var i = e.doc,
        o = t.left,
        l;
      if (r == 'page') {
        var a = Math.min(
            e.display.wrapper.clientHeight,
            Fe(e).innerHeight || i(e).documentElement.clientHeight
          ),
          s = Math.max(a - 0.5 * Wr(e.display), 3);
        l = (n > 0 ? t.bottom : t.top) + n * s;
      } else r == 'line' && (l = n > 0 ? t.bottom + 3 : t.top - 3);
      for (var u; (u = Oi(e, o, l)), !!u.outside; ) {
        if (n < 0 ? l <= 0 : l >= i.height) {
          u.hitSide = !0;
          break;
        }
        l += n * 5;
      }
      return u;
    }
    var fe = function (e) {
      (this.cm = e),
        (this.lastAnchorNode =
          this.lastAnchorOffset =
          this.lastFocusNode =
          this.lastFocusOffset =
            null),
        (this.polling = new J()),
        (this.composing = null),
        (this.gracePeriod = !1),
        (this.readDOMTimeout = null);
    };
    (fe.prototype.init = function (e) {
      var t = this,
        n = this,
        r = n.cm,
        i = (n.div = e.lineDiv);
      (i.contentEditable = !0),
        la(
          i,
          r.options.spellcheck,
          r.options.autocorrect,
          r.options.autocapitalize
        );
      function o(a) {
        for (var s = a.target; s; s = s.parentNode) {
          if (s == i) return !0;
          if (/\bCodeMirror-(?:line)?widget\b/.test(s.className)) break;
        }
        return !1;
      }
      O(i, 'paste', function (a) {
        !o(a) ||
          we(r, a) ||
          na(a, r) ||
          (Y <= 11 &&
            setTimeout(
              ze(r, function () {
                return t.updateFromDOM();
              }),
              20
            ));
      }),
        O(i, 'compositionstart', function (a) {
          t.composing = { data: a.data, done: !1 };
        }),
        O(i, 'compositionupdate', function (a) {
          t.composing || (t.composing = { data: a.data, done: !1 });
        }),
        O(i, 'compositionend', function (a) {
          t.composing &&
            (a.data != t.composing.data && t.readFromDOMSoon(),
            (t.composing.done = !0));
        }),
        O(i, 'touchstart', function () {
          return n.forceCompositionEnd();
        }),
        O(i, 'input', function () {
          t.composing || t.readFromDOMSoon();
        });
      function l(a) {
        if (!(!o(a) || we(r, a))) {
          if (r.somethingSelected())
            fi({ lineWise: !1, text: r.getSelections() }),
              a.type == 'cut' && r.replaceSelection('', null, 'cut');
          else if (r.options.lineWiseCopyCut) {
            var s = oa(r);
            fi({ lineWise: !0, text: s.text }),
              a.type == 'cut' &&
                r.operation(function () {
                  r.setSelections(s.ranges, 0, pe),
                    r.replaceSelection('', null, 'cut');
                });
          } else return;
          if (a.clipboardData) {
            a.clipboardData.clearData();
            var u = Ot.text.join(`
`);
            if (
              (a.clipboardData.setData('Text', u),
              a.clipboardData.getData('Text') == u)
            ) {
              a.preventDefault();
              return;
            }
          }
          var c = aa(),
            h = c.firstChild;
          r.display.lineSpace.insertBefore(c, r.display.lineSpace.firstChild),
            (h.value = Ot.text.join(`
`));
          var b = g(i.ownerDocument);
          K(h),
            setTimeout(function () {
              r.display.lineSpace.removeChild(c),
                b.focus(),
                b == i && n.showPrimarySelection();
            }, 50);
        }
      }
      O(i, 'copy', l), O(i, 'cut', l);
    }),
      (fe.prototype.screenReaderLabelChanged = function (e) {
        e
          ? this.div.setAttribute('aria-label', e)
          : this.div.removeAttribute('aria-label');
      }),
      (fe.prototype.prepareSelection = function () {
        var e = Jo(this.cm, !1);
        return (e.focus = g(this.div.ownerDocument) == this.div), e;
      }),
      (fe.prototype.showSelection = function (e, t) {
        !e ||
          !this.cm.display.view.length ||
          ((e.focus || t) && this.showPrimarySelection(),
          this.showMultipleSelections(e));
      }),
      (fe.prototype.getSelection = function () {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }),
      (fe.prototype.showPrimarySelection = function () {
        var e = this.getSelection(),
          t = this.cm,
          n = t.doc.sel.primary(),
          r = n.from(),
          i = n.to();
        if (
          t.display.viewTo == t.display.viewFrom ||
          r.line >= t.display.viewTo ||
          i.line < t.display.viewFrom
        ) {
          e.removeAllRanges();
          return;
        }
        var o = ci(t, e.anchorNode, e.anchorOffset),
          l = ci(t, e.focusNode, e.focusOffset);
        if (
          !(
            o &&
            !o.bad &&
            l &&
            !l.bad &&
            x(Ee(o, l), r) == 0 &&
            x(oe(o, l), i) == 0
          )
        ) {
          var a = t.display.view,
            s = (r.line >= t.display.viewFrom && ua(t, r)) || {
              node: a[0].measure.map[2],
              offset: 0,
            },
            u = i.line < t.display.viewTo && ua(t, i);
          if (!u) {
            var c = a[a.length - 1].measure,
              h = c.maps ? c.maps[c.maps.length - 1] : c.map;
            u = {
              node: h[h.length - 1],
              offset: h[h.length - 2] - h[h.length - 3],
            };
          }
          if (!s || !u) {
            e.removeAllRanges();
            return;
          }
          var b = e.rangeCount && e.getRangeAt(0),
            y;
          try {
            y = D(s.node, s.offset, u.offset, u.node);
          } catch {}
          y &&
            (!ue && t.state.focused
              ? (e.collapse(s.node, s.offset),
                y.collapsed || (e.removeAllRanges(), e.addRange(y)))
              : (e.removeAllRanges(), e.addRange(y)),
            b && e.anchorNode == null
              ? e.addRange(b)
              : ue && this.startGracePeriod()),
            this.rememberSelection();
        }
      }),
      (fe.prototype.startGracePeriod = function () {
        var e = this;
        clearTimeout(this.gracePeriod),
          (this.gracePeriod = setTimeout(function () {
            (e.gracePeriod = !1),
              e.selectionChanged() &&
                e.cm.operation(function () {
                  return (e.cm.curOp.selectionChanged = !0);
                });
          }, 20));
      }),
      (fe.prototype.showMultipleSelections = function (e) {
        F(this.cm.display.cursorDiv, e.cursors),
          F(this.cm.display.selectionDiv, e.selection);
      }),
      (fe.prototype.rememberSelection = function () {
        var e = this.getSelection();
        (this.lastAnchorNode = e.anchorNode),
          (this.lastAnchorOffset = e.anchorOffset),
          (this.lastFocusNode = e.focusNode),
          (this.lastFocusOffset = e.focusOffset);
      }),
      (fe.prototype.selectionInEditor = function () {
        var e = this.getSelection();
        if (!e.rangeCount) return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return m(this.div, t);
      }),
      (fe.prototype.focus = function () {
        this.cm.options.readOnly != 'nocursor' &&
          ((!this.selectionInEditor() ||
            g(this.div.ownerDocument) != this.div) &&
            this.showSelection(this.prepareSelection(), !0),
          this.div.focus());
      }),
      (fe.prototype.blur = function () {
        this.div.blur();
      }),
      (fe.prototype.getField = function () {
        return this.div;
      }),
      (fe.prototype.supportsTouch = function () {
        return !0;
      }),
      (fe.prototype.receivedFocus = function () {
        var e = this,
          t = this;
        this.selectionInEditor()
          ? setTimeout(function () {
              return e.pollSelection();
            }, 20)
          : ht(this.cm, function () {
              return (t.cm.curOp.selectionChanged = !0);
            });
        function n() {
          t.cm.state.focused &&
            (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n));
        }
        this.polling.set(this.cm.options.pollInterval, n);
      }),
      (fe.prototype.selectionChanged = function () {
        var e = this.getSelection();
        return (
          e.anchorNode != this.lastAnchorNode ||
          e.anchorOffset != this.lastAnchorOffset ||
          e.focusNode != this.lastFocusNode ||
          e.focusOffset != this.lastFocusOffset
        );
      }),
      (fe.prototype.pollSelection = function () {
        if (
          !(
            this.readDOMTimeout != null ||
            this.gracePeriod ||
            !this.selectionChanged()
          )
        ) {
          var e = this.getSelection(),
            t = this.cm;
          if (
            Ce &&
            Ze &&
            this.cm.display.gutterSpecs.length &&
            iu(e.anchorNode)
          ) {
            this.cm.triggerOnKeyDown({
              type: 'keydown',
              keyCode: 8,
              preventDefault: Math.abs,
            }),
              this.blur(),
              this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var n = ci(t, e.anchorNode, e.anchorOffset),
              r = ci(t, e.focusNode, e.focusOffset);
            n &&
              r &&
              ht(t, function () {
                Ye(t.doc, ur(n, r), pe),
                  (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
              });
          }
        }
      }),
      (fe.prototype.pollContent = function () {
        this.readDOMTimeout != null &&
          (clearTimeout(this.readDOMTimeout), (this.readDOMTimeout = null));
        var e = this.cm,
          t = e.display,
          n = e.doc.sel.primary(),
          r = n.from(),
          i = n.to();
        if (
          (r.ch == 0 &&
            r.line > e.firstLine() &&
            (r = v(r.line - 1, P(e.doc, r.line - 1).length)),
          i.ch == P(e.doc, i.line).text.length &&
            i.line < e.lastLine() &&
            (i = v(i.line + 1, 0)),
          r.line < t.viewFrom || i.line > t.viewTo - 1)
        )
          return !1;
        var o, l, a;
        r.line == t.viewFrom || (o = xr(e, r.line)) == 0
          ? ((l = le(t.view[0].line)), (a = t.view[0].node))
          : ((l = le(t.view[o].line)), (a = t.view[o - 1].node.nextSibling));
        var s = xr(e, i.line),
          u,
          c;
        if (
          (s == t.view.length - 1
            ? ((u = t.viewTo - 1), (c = t.lineDiv.lastChild))
            : ((u = le(t.view[s + 1].line) - 1),
              (c = t.view[s + 1].node.previousSibling)),
          !a)
        )
          return !1;
        for (
          var h = e.doc.splitLines(ou(e, a, c, l, u)),
            b = jt(e.doc, v(l, 0), v(u, P(e.doc, u).text.length));
          h.length > 1 && b.length > 1;

        )
          if (te(h) == te(b)) h.pop(), b.pop(), u--;
          else if (h[0] == b[0]) h.shift(), b.shift(), l++;
          else break;
        for (
          var y = 0,
            w = 0,
            k = h[0],
            T = b[0],
            N = Math.min(k.length, T.length);
          y < N && k.charCodeAt(y) == T.charCodeAt(y);

        )
          ++y;
        for (
          var E = te(h),
            A = te(b),
            I = Math.min(
              E.length - (h.length == 1 ? y : 0),
              A.length - (b.length == 1 ? y : 0)
            );
          w < I &&
          E.charCodeAt(E.length - w - 1) == A.charCodeAt(A.length - w - 1);

        )
          ++w;
        if (h.length == 1 && b.length == 1 && l == r.line)
          for (
            ;
            y &&
            y > r.ch &&
            E.charCodeAt(E.length - w - 1) == A.charCodeAt(A.length - w - 1);

          )
            y--, w++;
        (h[h.length - 1] = E.slice(0, E.length - w).replace(/^\u200b+/, '')),
          (h[0] = h[0].slice(y).replace(/\u200b+$/, ''));
        var B = v(l, y),
          R = v(u, b.length ? te(b).length - w : 0);
        if (h.length > 1 || h[0] || x(B, R))
          return Ur(e.doc, h, B, R, '+input'), !0;
      }),
      (fe.prototype.ensurePolled = function () {
        this.forceCompositionEnd();
      }),
      (fe.prototype.reset = function () {
        this.forceCompositionEnd();
      }),
      (fe.prototype.forceCompositionEnd = function () {
        this.composing &&
          (clearTimeout(this.readDOMTimeout),
          (this.composing = null),
          this.updateFromDOM(),
          this.div.blur(),
          this.div.focus());
      }),
      (fe.prototype.readFromDOMSoon = function () {
        var e = this;
        this.readDOMTimeout == null &&
          (this.readDOMTimeout = setTimeout(function () {
            if (((e.readDOMTimeout = null), e.composing))
              if (e.composing.done) e.composing = null;
              else return;
            e.updateFromDOM();
          }, 80));
      }),
      (fe.prototype.updateFromDOM = function () {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) &&
          ht(this.cm, function () {
            return tt(e.cm);
          });
      }),
      (fe.prototype.setUneditable = function (e) {
        e.contentEditable = 'false';
      }),
      (fe.prototype.onKeyPress = function (e) {
        e.charCode == 0 ||
          this.composing ||
          (e.preventDefault(),
          this.cm.isReadOnly() ||
            ze(this.cm, lo)(
              this.cm,
              String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode),
              0
            ));
      }),
      (fe.prototype.readOnlyChanged = function (e) {
        this.div.contentEditable = String(e != 'nocursor');
      }),
      (fe.prototype.onContextMenu = function () {}),
      (fe.prototype.resetPosition = function () {}),
      (fe.prototype.needsContentAttribute = !0);
    function ua(e, t) {
      var n = Di(e, t.line);
      if (!n || n.hidden) return null;
      var r = P(e.doc, t.line),
        i = zo(n, r, t.line),
        o = kt(r, e.doc.direction),
        l = 'left';
      if (o) {
        var a = wt(o, t.ch);
        l = a % 2 ? 'right' : 'left';
      }
      var s = Ro(i.map, t.ch, l);
      return (s.offset = s.collapse == 'right' ? s.end : s.start), s;
    }
    function iu(e) {
      for (var t = e; t; t = t.parentNode)
        if (/CodeMirror-gutter-wrapper/.test(t.className)) return !0;
      return !1;
    }
    function Yr(e, t) {
      return t && (e.bad = !0), e;
    }
    function ou(e, t, n, r, i) {
      var o = '',
        l = !1,
        a = e.doc.lineSeparator(),
        s = !1;
      function u(y) {
        return function (w) {
          return w.id == y;
        };
      }
      function c() {
        l && ((o += a), s && (o += a), (l = s = !1));
      }
      function h(y) {
        y && (c(), (o += y));
      }
      function b(y) {
        if (y.nodeType == 1) {
          var w = y.getAttribute('cm-text');
          if (w) {
            h(w);
            return;
          }
          var k = y.getAttribute('cm-marker'),
            T;
          if (k) {
            var N = e.findMarks(v(r, 0), v(i + 1, 0), u(+k));
            N.length &&
              (T = N[0].find(0)) &&
              h(jt(e.doc, T.from, T.to).join(a));
            return;
          }
          if (y.getAttribute('contenteditable') == 'false') return;
          var E = /^(pre|div|p|li|table|br)$/i.test(y.nodeName);
          if (!/^br$/i.test(y.nodeName) && y.textContent.length == 0) return;
          E && c();
          for (var A = 0; A < y.childNodes.length; A++) b(y.childNodes[A]);
          /^(pre|p)$/i.test(y.nodeName) && (s = !0), E && (l = !0);
        } else y.nodeType == 3 && h(y.nodeValue.replace(/\u200b/g, '').replace(/\u00a0/g, ' '));
      }
      for (; b(t), t != n; ) (t = t.nextSibling), (s = !1);
      return o;
    }
    function ci(e, t, n) {
      var r;
      if (t == e.display.lineDiv) {
        if (((r = e.display.lineDiv.childNodes[n]), !r))
          return Yr(e.clipPos(v(e.display.viewTo - 1)), !0);
        (t = null), (n = 0);
      } else
        for (r = t; ; r = r.parentNode) {
          if (!r || r == e.display.lineDiv) return null;
          if (r.parentNode && r.parentNode == e.display.lineDiv) break;
        }
      for (var i = 0; i < e.display.view.length; i++) {
        var o = e.display.view[i];
        if (o.node == r) return lu(o, t, n);
      }
    }
    function lu(e, t, n) {
      var r = e.text.firstChild,
        i = !1;
      if (!t || !m(r, t)) return Yr(v(le(e.line), 0), !0);
      if (t == r && ((i = !0), (t = r.childNodes[n]), (n = 0), !t)) {
        var o = e.rest ? te(e.rest) : e.line;
        return Yr(v(le(o), o.text.length), i);
      }
      var l = t.nodeType == 3 ? t : null,
        a = t;
      for (
        !l &&
        t.childNodes.length == 1 &&
        t.firstChild.nodeType == 3 &&
        ((l = t.firstChild), n && (n = l.nodeValue.length));
        a.parentNode != r;

      )
        a = a.parentNode;
      var s = e.measure,
        u = s.maps;
      function c(T, N, E) {
        for (var A = -1; A < (u ? u.length : 0); A++)
          for (var I = A < 0 ? s.map : u[A], B = 0; B < I.length; B += 3) {
            var R = I[B + 2];
            if (R == T || R == N) {
              var ee = le(A < 0 ? e.line : e.rest[A]),
                ce = I[B] + E;
              return (E < 0 || R != T) && (ce = I[B + (E ? 1 : 0)]), v(ee, ce);
            }
          }
      }
      var h = c(l, a, n);
      if (h) return Yr(h, i);
      for (
        var b = a.nextSibling, y = l ? l.nodeValue.length - n : 0;
        b;
        b = b.nextSibling
      ) {
        if (((h = c(b, b.firstChild, 0)), h)) return Yr(v(h.line, h.ch - y), i);
        y += b.textContent.length;
      }
      for (var w = a.previousSibling, k = n; w; w = w.previousSibling) {
        if (((h = c(w, w.firstChild, -1)), h))
          return Yr(v(h.line, h.ch + k), i);
        k += w.textContent.length;
      }
    }
    var Le = function (e) {
      (this.cm = e),
        (this.prevInput = ''),
        (this.pollingFast = !1),
        (this.polling = new J()),
        (this.hasSelection = !1),
        (this.composing = null),
        (this.resetting = !1);
    };
    (Le.prototype.init = function (e) {
      var t = this,
        n = this,
        r = this.cm;
      this.createField(e);
      var i = this.textarea;
      e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild),
        ie && (i.style.width = '0px'),
        O(i, 'input', function () {
          L && Y >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
        }),
        O(i, 'paste', function (l) {
          we(r, l) ||
            na(l, r) ||
            ((r.state.pasteIncoming = +new Date()), n.fastPoll());
        });
      function o(l) {
        if (!we(r, l)) {
          if (r.somethingSelected())
            fi({ lineWise: !1, text: r.getSelections() });
          else if (r.options.lineWiseCopyCut) {
            var a = oa(r);
            fi({ lineWise: !0, text: a.text }),
              l.type == 'cut'
                ? r.setSelections(a.ranges, null, pe)
                : ((n.prevInput = ''),
                  (i.value = a.text.join(`
`)),
                  K(i));
          } else return;
          l.type == 'cut' && (r.state.cutIncoming = +new Date());
        }
      }
      O(i, 'cut', o),
        O(i, 'copy', o),
        O(e.scroller, 'paste', function (l) {
          if (!(Jt(e, l) || we(r, l))) {
            if (!i.dispatchEvent) {
              (r.state.pasteIncoming = +new Date()), n.focus();
              return;
            }
            var a = new Event('paste');
            (a.clipboardData = l.clipboardData), i.dispatchEvent(a);
          }
        }),
        O(e.lineSpace, 'selectstart', function (l) {
          Jt(e, l) || Xe(l);
        }),
        O(i, 'compositionstart', function () {
          var l = r.getCursor('from');
          n.composing && n.composing.range.clear(),
            (n.composing = {
              start: l,
              range: r.markText(l, r.getCursor('to'), {
                className: 'CodeMirror-composing',
              }),
            });
        }),
        O(i, 'compositionend', function () {
          n.composing &&
            (n.poll(), n.composing.range.clear(), (n.composing = null));
        });
    }),
      (Le.prototype.createField = function (e) {
        (this.wrapper = aa()), (this.textarea = this.wrapper.firstChild);
      }),
      (Le.prototype.screenReaderLabelChanged = function (e) {
        e
          ? this.textarea.setAttribute('aria-label', e)
          : this.textarea.removeAttribute('aria-label');
      }),
      (Le.prototype.prepareSelection = function () {
        var e = this.cm,
          t = e.display,
          n = e.doc,
          r = Jo(e);
        if (e.options.moveInputWithCursor) {
          var i = Nt(e, n.sel.primary().head, 'div'),
            o = t.wrapper.getBoundingClientRect(),
            l = t.lineDiv.getBoundingClientRect();
          (r.teTop = Math.max(
            0,
            Math.min(t.wrapper.clientHeight - 10, i.top + l.top - o.top)
          )),
            (r.teLeft = Math.max(
              0,
              Math.min(t.wrapper.clientWidth - 10, i.left + l.left - o.left)
            ));
        }
        return r;
      }),
      (Le.prototype.showSelection = function (e) {
        var t = this.cm,
          n = t.display;
        F(n.cursorDiv, e.cursors),
          F(n.selectionDiv, e.selection),
          e.teTop != null &&
            ((this.wrapper.style.top = e.teTop + 'px'),
            (this.wrapper.style.left = e.teLeft + 'px'));
      }),
      (Le.prototype.reset = function (e) {
        if (!(this.contextMenuPending || (this.composing && e))) {
          var t = this.cm;
          if (((this.resetting = !0), t.somethingSelected())) {
            this.prevInput = '';
            var n = t.getSelection();
            (this.textarea.value = n),
              t.state.focused && K(this.textarea),
              L && Y >= 9 && (this.hasSelection = n);
          } else
            e ||
              ((this.prevInput = this.textarea.value = ''),
              L && Y >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }),
      (Le.prototype.getField = function () {
        return this.textarea;
      }),
      (Le.prototype.supportsTouch = function () {
        return !1;
      }),
      (Le.prototype.focus = function () {
        if (
          this.cm.options.readOnly != 'nocursor' &&
          (!We || g(this.textarea.ownerDocument) != this.textarea)
        )
          try {
            this.textarea.focus();
          } catch {}
      }),
      (Le.prototype.blur = function () {
        this.textarea.blur();
      }),
      (Le.prototype.resetPosition = function () {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }),
      (Le.prototype.receivedFocus = function () {
        this.slowPoll();
      }),
      (Le.prototype.slowPoll = function () {
        var e = this;
        this.pollingFast ||
          this.polling.set(this.cm.options.pollInterval, function () {
            e.poll(), e.cm.state.focused && e.slowPoll();
          });
      }),
      (Le.prototype.fastPoll = function () {
        var e = !1,
          t = this;
        t.pollingFast = !0;
        function n() {
          var r = t.poll();
          !r && !e
            ? ((e = !0), t.polling.set(60, n))
            : ((t.pollingFast = !1), t.slowPoll());
        }
        t.polling.set(20, n);
      }),
      (Le.prototype.poll = function () {
        var e = this,
          t = this.cm,
          n = this.textarea,
          r = this.prevInput;
        if (
          this.contextMenuPending ||
          this.resetting ||
          !t.state.focused ||
          (rr(n) && !r && !this.composing) ||
          t.isReadOnly() ||
          t.options.disableInput ||
          t.state.keySeq
        )
          return !1;
        var i = n.value;
        if (i == r && !t.somethingSelected()) return !1;
        if (
          (L && Y >= 9 && this.hasSelection === i) ||
          (me && /[\uf700-\uf7ff]/.test(i))
        )
          return t.display.input.reset(), !1;
        if (t.doc.sel == t.display.selForContextMenu) {
          var o = i.charCodeAt(0);
          if ((o == 8203 && !r && (r = '​'), o == 8666))
            return this.reset(), this.cm.execCommand('undo');
        }
        for (
          var l = 0, a = Math.min(r.length, i.length);
          l < a && r.charCodeAt(l) == i.charCodeAt(l);

        )
          ++l;
        return (
          ht(t, function () {
            lo(
              t,
              i.slice(l),
              r.length - l,
              null,
              e.composing ? '*compose' : null
            ),
              i.length > 1e3 ||
              i.indexOf(`
`) > -1
                ? (n.value = e.prevInput = '')
                : (e.prevInput = i),
              e.composing &&
                (e.composing.range.clear(),
                (e.composing.range = t.markText(
                  e.composing.start,
                  t.getCursor('to'),
                  { className: 'CodeMirror-composing' }
                )));
          }),
          !0
        );
      }),
      (Le.prototype.ensurePolled = function () {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }),
      (Le.prototype.onKeyPress = function () {
        L && Y >= 9 && (this.hasSelection = null), this.fastPoll();
      }),
      (Le.prototype.onContextMenu = function (e) {
        var t = this,
          n = t.cm,
          r = n.display,
          i = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var o = br(n, e),
          l = r.scroller.scrollTop;
        if (!o || Ne) return;
        var a = n.options.resetSelectionOnContextMenu;
        a && n.doc.sel.contains(o) == -1 && ze(n, Ye)(n.doc, ur(o), pe);
        var s = i.style.cssText,
          u = t.wrapper.style.cssText,
          c = t.wrapper.offsetParent.getBoundingClientRect();
        (t.wrapper.style.cssText = 'position: static'),
          (i.style.cssText =
            `position: absolute; width: 30px; height: 30px;
      top: ` +
            (e.clientY - c.top - 5) +
            'px; left: ' +
            (e.clientX - c.left - 5) +
            `px;
      z-index: 1000; background: ` +
            (L ? 'rgba(255, 255, 255, .05)' : 'transparent') +
            `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`);
        var h;
        W && (h = i.ownerDocument.defaultView.scrollY),
          r.input.focus(),
          W && i.ownerDocument.defaultView.scrollTo(null, h),
          r.input.reset(),
          n.somethingSelected() || (i.value = t.prevInput = ' '),
          (t.contextMenuPending = y),
          (r.selForContextMenu = n.doc.sel),
          clearTimeout(r.detectingSelectAll);
        function b() {
          if (i.selectionStart != null) {
            var k = n.somethingSelected(),
              T = '​' + (k ? i.value : '');
            (i.value = '⇚'),
              (i.value = T),
              (t.prevInput = k ? '' : '​'),
              (i.selectionStart = 1),
              (i.selectionEnd = T.length),
              (r.selForContextMenu = n.doc.sel);
          }
        }
        function y() {
          if (
            t.contextMenuPending == y &&
            ((t.contextMenuPending = !1),
            (t.wrapper.style.cssText = u),
            (i.style.cssText = s),
            L && Y < 9 && r.scrollbars.setScrollTop((r.scroller.scrollTop = l)),
            i.selectionStart != null)
          ) {
            (!L || (L && Y < 9)) && b();
            var k = 0,
              T = function () {
                r.selForContextMenu == n.doc.sel &&
                i.selectionStart == 0 &&
                i.selectionEnd > 0 &&
                t.prevInput == '​'
                  ? ze(n, Ml)(n)
                  : k++ < 10
                  ? (r.detectingSelectAll = setTimeout(T, 500))
                  : ((r.selForContextMenu = null), r.input.reset());
              };
            r.detectingSelectAll = setTimeout(T, 200);
          }
        }
        if ((L && Y >= 9 && b(), Tt)) {
          qt(e);
          var w = function () {
            qe(window, 'mouseup', w), setTimeout(y, 20);
          };
          O(window, 'mouseup', w);
        } else setTimeout(y, 50);
      }),
      (Le.prototype.readOnlyChanged = function (e) {
        e || this.reset(),
          (this.textarea.disabled = e == 'nocursor'),
          (this.textarea.readOnly = !!e);
      }),
      (Le.prototype.setUneditable = function () {}),
      (Le.prototype.needsContentAttribute = !1);
    function au(e, t) {
      if (
        ((t = t ? G(t) : {}),
        (t.value = e.value),
        !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
        !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
        t.autofocus == null)
      ) {
        var n = g(e.ownerDocument);
        t.autofocus =
          n == e || (e.getAttribute('autofocus') != null && n == document.body);
      }
      function r() {
        e.value = a.getValue();
      }
      var i;
      if (e.form && (O(e.form, 'submit', r), !t.leaveSubmitMethodAlone)) {
        var o = e.form;
        i = o.submit;
        try {
          var l = (o.submit = function () {
            r(), (o.submit = i), o.submit(), (o.submit = l);
          });
        } catch {}
      }
      (t.finishInit = function (s) {
        (s.save = r),
          (s.getTextArea = function () {
            return e;
          }),
          (s.toTextArea = function () {
            (s.toTextArea = isNaN),
              r(),
              e.parentNode.removeChild(s.getWrapperElement()),
              (e.style.display = ''),
              e.form &&
                (qe(e.form, 'submit', r),
                !t.leaveSubmitMethodAlone &&
                  typeof e.form.submit == 'function' &&
                  (e.form.submit = i));
          });
      }),
        (e.style.display = 'none');
      var a = ge(function (s) {
        return e.parentNode.insertBefore(s, e.nextSibling);
      }, t);
      return a;
    }
    function su(e) {
      (e.off = qe),
        (e.on = O),
        (e.wheelEventPixels = vs),
        (e.Doc = rt),
        (e.splitLines = en),
        (e.countColumn = _),
        (e.findColumn = bt),
        (e.isWordChar = tr),
        (e.Pass = se),
        (e.signal = de),
        (e.Line = Or),
        (e.changeEnd = fr),
        (e.scrollbarModel = nl),
        (e.Pos = v),
        (e.cmpPos = x),
        (e.modes = Mt),
        (e.mimeModes = nr),
        (e.resolveMode = ct),
        (e.getMode = Xt),
        (e.modeExtensions = ir),
        (e.extendMode = Pn),
        (e.copyState = Yt),
        (e.startState = tn),
        (e.innerMode = or),
        (e.commands = Ln),
        (e.keyMap = $t),
        (e.keyName = Kl),
        (e.isModifierKey = Bl),
        (e.lookupKey = Gr),
        (e.normalizeKeyMap = zs),
        (e.StringStream = ke),
        (e.SharedTextMarker = kn),
        (e.TextMarker = hr),
        (e.LineWidget = wn),
        (e.e_preventDefault = Xe),
        (e.e_stopPropagation = gr),
        (e.e_stop = qt),
        (e.addClass = C),
        (e.contains = m),
        (e.rmClass = ve),
        (e.keyNames = dr);
    }
    $s(ge), nu(ge);
    var uu = 'iter insert remove copy getEditor constructor'.split(' ');
    for (var hi in rt.prototype)
      rt.prototype.hasOwnProperty(hi) &&
        $(uu, hi) < 0 &&
        (ge.prototype[hi] = (function (e) {
          return function () {
            return e.apply(this.doc, arguments);
          };
        })(rt.prototype[hi]));
    return (
      Je(rt),
      (ge.inputStyles = { textarea: Le, contenteditable: fe }),
      (ge.defineMode = function (e) {
        !ge.defaults.mode && e != 'null' && (ge.defaults.mode = e),
          Fn.apply(this, arguments);
      }),
      (ge.defineMIME = Nr),
      ge.defineMode('null', function () {
        return {
          token: function (e) {
            return e.skipToEnd();
          },
        };
      }),
      ge.defineMIME('text/plain', 'null'),
      (ge.defineExtension = function (e, t) {
        ge.prototype[e] = t;
      }),
      (ge.defineDocExtension = function (e, t) {
        rt.prototype[e] = t;
      }),
      (ge.fromTextArea = au),
      su(ge),
      (ge.version = '5.65.9'),
      ge
    );
  });
})(fa);
var di = fa.exports;
const du = fu(di);
(function (An, pi) {
  (function (X) {
    X(di);
  })(function (X) {
    X.defineMode('javascript', function (lt, ue) {
      var Be = lt.indentUnit,
        Lt = ue.statementIndent,
        ye = ue.jsonld,
        L = ue.json || ye,
        Y = ue.trackScope !== !1,
        W = ue.typescript,
        Ue = ue.wordCharacters || /[\w$\xa1-\uffff]/,
        Ze = (function () {
          function f(Ee) {
            return { type: Ee, style: 'keyword' };
          }
          var d = f('keyword a'),
            v = f('keyword b'),
            x = f('keyword c'),
            j = f('keyword d'),
            ne = f('operator'),
            oe = { type: 'atom', style: 'atom' };
          return {
            if: f('if'),
            while: d,
            with: d,
            else: v,
            do: v,
            try: v,
            finally: v,
            return: j,
            break: j,
            continue: j,
            new: f('new'),
            delete: x,
            void: x,
            throw: x,
            debugger: f('debugger'),
            var: f('var'),
            const: f('var'),
            let: f('var'),
            function: f('function'),
            catch: f('catch'),
            for: f('for'),
            switch: f('switch'),
            case: f('case'),
            default: f('default'),
            in: ne,
            typeof: ne,
            instanceof: ne,
            true: oe,
            false: oe,
            null: oe,
            undefined: oe,
            NaN: oe,
            Infinity: oe,
            this: f('this'),
            class: f('class'),
            super: f('atom'),
            yield: x,
            export: f('export'),
            import: f('import'),
            extends: x,
            await: x,
          };
        })(),
        at = /[+\-*&%=<>!?|~^@]/,
        Ne =
          /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
      function mt(f) {
        for (var d = !1, v, x = !1; (v = f.next()) != null; ) {
          if (!d) {
            if (v == '/' && !x) return;
            v == '[' ? (x = !0) : x && v == ']' && (x = !1);
          }
          d = !d && v == '\\';
        }
      }
      var Te, Ge;
      function ie(f, d, v) {
        return (Te = f), (Ge = v), d;
      }
      function Ce(f, d) {
        var v = f.next();
        if (v == '"' || v == "'") return (d.tokenize = We(v)), d.tokenize(f, d);
        if (v == '.' && f.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))
          return ie('number', 'number');
        if (v == '.' && f.match('..')) return ie('spread', 'meta');
        if (/[\[\]{}\(\),;\:\.]/.test(v)) return ie(v);
        if (v == '=' && f.eat('>')) return ie('=>', 'operator');
        if (v == '0' && f.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))
          return ie('number', 'number');
        if (/\d/.test(v))
          return (
            f.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),
            ie('number', 'number')
          );
        if (v == '/')
          return f.eat('*')
            ? ((d.tokenize = me), me(f, d))
            : f.eat('/')
            ? (f.skipToEnd(), ie('comment', 'comment'))
            : Pt(f, d, 1)
            ? (mt(f),
              f.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
              ie('regexp', 'string-2'))
            : (f.eat('='), ie('operator', 'operator', f.current()));
        if (v == '`') return (d.tokenize = st), st(f, d);
        if (v == '#' && f.peek() == '!')
          return f.skipToEnd(), ie('meta', 'meta');
        if (v == '#' && f.eatWhile(Ue)) return ie('variable', 'property');
        if (
          (v == '<' && f.match('!--')) ||
          (v == '-' && f.match('->') && !/\S/.test(f.string.slice(0, f.start)))
        )
          return f.skipToEnd(), ie('comment', 'comment');
        if (at.test(v))
          return (
            (v != '>' || !d.lexical || d.lexical.type != '>') &&
              (f.eat('=')
                ? (v == '!' || v == '=') && f.eat('=')
                : /[<>*+\-|&?]/.test(v) && (f.eat(v), v == '>' && f.eat(v))),
            v == '?' && f.eat('.')
              ? ie('.')
              : ie('operator', 'operator', f.current())
          );
        if (Ue.test(v)) {
          f.eatWhile(Ue);
          var x = f.current();
          if (d.lastType != '.') {
            if (Ze.propertyIsEnumerable(x)) {
              var j = Ze[x];
              return ie(j.type, j.style, x);
            }
            if (
              x == 'async' &&
              f.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, !1)
            )
              return ie('async', 'keyword', x);
          }
          return ie('variable', 'variable', x);
        }
      }
      function We(f) {
        return function (d, v) {
          var x = !1,
            j;
          if (ye && d.peek() == '@' && d.match(Ne))
            return (v.tokenize = Ce), ie('jsonld-keyword', 'meta');
          for (; (j = d.next()) != null && !(j == f && !x); )
            x = !x && j == '\\';
          return x || (v.tokenize = Ce), ie('string', 'string');
        };
      }
      function me(f, d) {
        for (var v = !1, x; (x = f.next()); ) {
          if (x == '/' && v) {
            d.tokenize = Ce;
            break;
          }
          v = x == '*';
        }
        return ie('comment', 'comment');
      }
      function st(f, d) {
        for (var v = !1, x; (x = f.next()) != null; ) {
          if (!v && (x == '`' || (x == '$' && f.eat('{')))) {
            d.tokenize = Ce;
            break;
          }
          v = !v && x == '\\';
        }
        return ie('quasi', 'string-2', f.current());
      }
      var he = '([{}])';
      function be(f, d) {
        d.fatArrowAt && (d.fatArrowAt = null);
        var v = f.string.indexOf('=>', f.start);
        if (!(v < 0)) {
          if (W) {
            var x = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
              f.string.slice(f.start, v)
            );
            x && (v = x.index);
          }
          for (var j = 0, ne = !1, oe = v - 1; oe >= 0; --oe) {
            var Ee = f.string.charAt(oe),
              gt = he.indexOf(Ee);
            if (gt >= 0 && gt < 3) {
              if (!j) {
                ++oe;
                break;
              }
              if (--j == 0) {
                Ee == '(' && (ne = !0);
                break;
              }
            } else if (gt >= 3 && gt < 6) ++j;
            else if (Ue.test(Ee)) ne = !0;
            else if (/["'\/`]/.test(Ee))
              for (; ; --oe) {
                if (oe == 0) return;
                var Z = f.string.charAt(oe - 1);
                if (Z == Ee && f.string.charAt(oe - 2) != '\\') {
                  oe--;
                  break;
                }
              }
            else if (ne && !j) {
              ++oe;
              break;
            }
          }
          ne && !j && (d.fatArrowAt = oe);
        }
      }
      var Bt = {
        atom: !0,
        number: !0,
        variable: !0,
        string: !0,
        regexp: !0,
        this: !0,
        import: !0,
        'jsonld-keyword': !0,
      };
      function Tt(f, d, v, x, j, ne) {
        (this.indented = f),
          (this.column = d),
          (this.type = v),
          (this.prev = j),
          (this.info = ne),
          x != null && (this.align = x);
      }
      function ut(f, d) {
        if (!Y) return !1;
        for (var v = f.localVars; v; v = v.next) if (v.name == d) return !0;
        for (var x = f.context; x; x = x.prev)
          for (var v = x.vars; v; v = v.next) if (v.name == d) return !0;
      }
      function ve(f, d, v, x, j) {
        var ne = f.cc;
        for (
          S.state = f,
            S.stream = j,
            S.marked = null,
            S.cc = ne,
            S.style = d,
            f.lexical.hasOwnProperty('align') || (f.lexical.align = !0);
          ;

        ) {
          var oe = ne.length ? ne.pop() : L ? se : $;
          if (oe(v, x)) {
            for (; ne.length && ne[ne.length - 1].lex; ) ne.pop()();
            return S.marked
              ? S.marked
              : v == 'variable' && ut(f, x)
              ? 'variable-2'
              : d;
          }
        }
      }
      var S = { state: null, column: null, marked: null, cc: null };
      function F() {
        for (var f = arguments.length - 1; f >= 0; f--) S.cc.push(arguments[f]);
      }
      function p() {
        return F.apply(null, arguments), !0;
      }
      function M(f, d) {
        for (var v = d; v; v = v.next) if (v.name == f) return !0;
        return !1;
      }
      function D(f) {
        var d = S.state;
        if (((S.marked = 'def'), !!Y)) {
          if (d.context) {
            if (d.lexical.info == 'var' && d.context && d.context.block) {
              var v = m(f, d.context);
              if (v != null) {
                d.context = v;
                return;
              }
            } else if (!M(f, d.localVars)) {
              d.localVars = new z(f, d.localVars);
              return;
            }
          }
          ue.globalVars &&
            !M(f, d.globalVars) &&
            (d.globalVars = new z(f, d.globalVars));
        }
      }
      function m(f, d) {
        if (d)
          if (d.block) {
            var v = m(f, d.prev);
            return v ? (v == d.prev ? d : new C(v, d.vars, !0)) : null;
          } else return M(f, d.vars) ? d : new C(d.prev, new z(f, d.vars), !1);
        else return null;
      }
      function g(f) {
        return (
          f == 'public' ||
          f == 'private' ||
          f == 'protected' ||
          f == 'abstract' ||
          f == 'readonly'
        );
      }
      function C(f, d, v) {
        (this.prev = f), (this.vars = d), (this.block = v);
      }
      function z(f, d) {
        (this.name = f), (this.next = d);
      }
      var K = new z('this', new z('arguments', null));
      function Q() {
        (S.state.context = new C(S.state.context, S.state.localVars, !1)),
          (S.state.localVars = K);
      }
      function Fe() {
        (S.state.context = new C(S.state.context, S.state.localVars, !0)),
          (S.state.localVars = null);
      }
      Q.lex = Fe.lex = !0;
      function Ae() {
        (S.state.localVars = S.state.context.vars),
          (S.state.context = S.state.context.prev);
      }
      Ae.lex = !0;
      function G(f, d) {
        var v = function () {
          var x = S.state,
            j = x.indented;
          if (x.lexical.type == 'stat') j = x.lexical.indented;
          else
            for (
              var ne = x.lexical;
              ne && ne.type == ')' && ne.align;
              ne = ne.prev
            )
              j = ne.indented;
          x.lexical = new Tt(j, S.stream.column(), f, null, x.lexical, d);
        };
        return (v.lex = !0), v;
      }
      function _() {
        var f = S.state;
        f.lexical.prev &&
          (f.lexical.type == ')' && (f.indented = f.lexical.indented),
          (f.lexical = f.lexical.prev));
      }
      _.lex = !0;
      function J(f) {
        function d(v) {
          return v == f
            ? p()
            : f == ';' || v == '}' || v == ')' || v == ']'
            ? F()
            : p(d);
        }
        return d;
      }
      function $(f, d) {
        return f == 'var'
          ? p(G('vardef', d), qt, J(';'), _)
          : f == 'keyword a'
          ? p(G('form'), Et, $, _)
          : f == 'keyword b'
          ? p(G('form'), $, _)
          : f == 'keyword d'
          ? S.stream.match(/^\s*$/, !1)
            ? p()
            : p(G('stat'), bt, J(';'), _)
          : f == 'debugger'
          ? p(J(';'))
          : f == '{'
          ? p(G('}'), Fe, xt, _, Ae)
          : f == ';'
          ? p()
          : f == 'if'
          ? (S.state.lexical.info == 'else' &&
              S.state.cc[S.state.cc.length - 1] == _ &&
              S.state.cc.pop()(),
            p(G('form'), Et, $, _, Dr))
          : f == 'function'
          ? p(Wt)
          : f == 'for'
          ? p(G('form'), Fe, In, $, Ae, _)
          : f == 'class' || (W && d == 'interface')
          ? ((S.marked = 'keyword'), p(G('form', f == 'class' ? f : d), Fn, _))
          : f == 'variable'
          ? W && d == 'declare'
            ? ((S.marked = 'keyword'), p($))
            : W &&
              (d == 'module' || d == 'enum' || d == 'type') &&
              S.stream.match(/^\s*\w/, !1)
            ? ((S.marked = 'keyword'),
              d == 'enum'
                ? p(Ar)
                : d == 'type'
                ? p(Wn, J('operator'), O, J(';'))
                : p(G('form'), et, J('{'), G('}'), xt, _, _))
            : W && d == 'namespace'
            ? ((S.marked = 'keyword'), p(G('form'), se, $, _))
            : W && d == 'abstract'
            ? ((S.marked = 'keyword'), p($))
            : p(G('stat'), Gt)
          : f == 'switch'
          ? p(G('form'), Et, J('{'), G('}', 'switch'), Fe, xt, _, _, Ae)
          : f == 'case'
          ? p(se, J(':'))
          : f == 'default'
          ? p(J(':'))
          : f == 'catch'
          ? p(G('form'), Q, Mr, $, _, Ae)
          : f == 'export'
          ? p(G('stat'), ir, _)
          : f == 'import'
          ? p(G('stat'), Yt, _)
          : f == 'async'
          ? p($)
          : d == '@'
          ? p(se, $)
          : F(G('stat'), se, J(';'), _);
      }
      function Mr(f) {
        if (f == '(') return p(Mt, J(')'));
      }
      function se(f, d) {
        return It(f, d, !1);
      }
      function pe(f, d) {
        return It(f, d, !0);
      }
      function Et(f) {
        return f != '(' ? F() : p(G(')'), bt, J(')'), _);
      }
      function It(f, d, v) {
        if (S.state.fatArrowAt == S.stream.start) {
          var x = v ? Kt : Oe;
          if (f == '(') return p(Q, G(')'), V(Mt, ')'), _, J('=>'), x, Ae);
          if (f == 'variable') return F(Q, et, J('=>'), x, Ae);
        }
        var j = v ? pt : ft;
        return Bt.hasOwnProperty(f)
          ? p(j)
          : f == 'function'
          ? p(Wt, j)
          : f == 'class' || (W && d == 'interface')
          ? ((S.marked = 'keyword'), p(G('form'), nr, _))
          : f == 'keyword c' || f == 'async'
          ? p(v ? pe : se)
          : f == '('
          ? p(G(')'), bt, J(')'), _, j)
          : f == 'operator' || f == 'spread'
          ? p(v ? pe : se)
          : f == '['
          ? p(G(']'), jt, _, j)
          : f == '{'
          ? vt(q, '}', null, j)
          : f == 'quasi'
          ? F(te, j)
          : f == 'new'
          ? p(vr(v))
          : p();
      }
      function bt(f) {
        return f.match(/[;\}\)\],]/) ? F() : F(se);
      }
      function ft(f, d) {
        return f == ',' ? p(bt) : pt(f, d, !1);
      }
      function pt(f, d, v) {
        var x = v == !1 ? ft : pt,
          j = v == !1 ? se : pe;
        if (f == '=>') return p(Q, v ? Kt : Oe, Ae);
        if (f == 'operator')
          return /\+\+|--/.test(d) || (W && d == '!')
            ? p(x)
            : W && d == '<' && S.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
            ? p(G('>'), V(O, '>'), _, x)
            : d == '?'
            ? p(se, J(':'), j)
            : p(j);
        if (f == 'quasi') return F(te, x);
        if (f != ';') {
          if (f == '(') return vt(pe, ')', 'call', x);
          if (f == '.') return p(U, x);
          if (f == '[') return p(G(']'), bt, J(']'), _, x);
          if (W && d == 'as') return (S.marked = 'keyword'), p(O, x);
          if (f == 'regexp')
            return (
              (S.state.lastType = S.marked = 'operator'),
              S.stream.backUp(S.stream.pos - S.stream.start - 1),
              p(j)
            );
        }
      }
      function te(f, d) {
        return f != 'quasi'
          ? F()
          : d.slice(d.length - 2) != '${'
          ? p(te)
          : p(bt, Ut);
      }
      function Ut(f) {
        if (f == '}')
          return (S.marked = 'string-2'), (S.state.tokenize = st), p(te);
      }
      function Oe(f) {
        return be(S.stream, S.state), F(f == '{' ? $ : se);
      }
      function Kt(f) {
        return be(S.stream, S.state), F(f == '{' ? $ : pe);
      }
      function vr(f) {
        return function (d) {
          return d == '.'
            ? p(f ? tr : Qr)
            : d == 'variable' && W
            ? p(Xe, f ? pt : ft)
            : F(f ? pe : se);
        };
      }
      function Qr(f, d) {
        if (d == 'target') return (S.marked = 'keyword'), p(ft);
      }
      function tr(f, d) {
        if (d == 'target') return (S.marked = 'keyword'), p(pt);
      }
      function Gt(f) {
        return f == ':' ? p(_, $) : F(ft, J(';'), _);
      }
      function U(f) {
        if (f == 'variable') return (S.marked = 'property'), p();
      }
      function q(f, d) {
        if (f == 'async') return (S.marked = 'property'), p(q);
        if (f == 'variable' || S.style == 'keyword') {
          if (((S.marked = 'property'), d == 'get' || d == 'set')) return p(H);
          var v;
          return (
            W &&
              S.state.fatArrowAt == S.stream.start &&
              (v = S.stream.match(/^\s*:\s*/, !1)) &&
              (S.state.fatArrowAt = S.stream.pos + v[0].length),
            p(re)
          );
        } else {
          if (f == 'number' || f == 'string')
            return (S.marked = ye ? 'property' : S.style + ' property'), p(re);
          if (f == 'jsonld-keyword') return p(re);
          if (W && g(d)) return (S.marked = 'keyword'), p(q);
          if (f == '[') return p(se, wt, J(']'), re);
          if (f == 'spread') return p(pe, re);
          if (d == '*') return (S.marked = 'keyword'), p(q);
          if (f == ':') return F(re);
        }
      }
      function H(f) {
        return f != 'variable' ? F(re) : ((S.marked = 'property'), p(Wt));
      }
      function re(f) {
        if (f == ':') return p(pe);
        if (f == '(') return F(Wt);
      }
      function V(f, d, v) {
        function x(j, ne) {
          if (v ? v.indexOf(j) > -1 : j == ',') {
            var oe = S.state.lexical;
            return (
              oe.info == 'call' && (oe.pos = (oe.pos || 0) + 1),
              p(function (Ee, gt) {
                return Ee == d || gt == d ? F() : F(f);
              }, x)
            );
          }
          return j == d || ne == d
            ? p()
            : v && v.indexOf(';') > -1
            ? F(f)
            : p(J(d));
        }
        return function (j, ne) {
          return j == d || ne == d ? p() : F(f, x);
        };
      }
      function vt(f, d, v) {
        for (var x = 3; x < arguments.length; x++) S.cc.push(arguments[x]);
        return p(G(d, v), V(f, d), _);
      }
      function xt(f) {
        return f == '}' ? p() : F($, xt);
      }
      function wt(f, d) {
        if (W) {
          if (f == ':') return p(O);
          if (d == '?') return p(wt);
        }
      }
      function vi(f, d) {
        if (W && (f == ':' || d == 'in')) return p(O);
      }
      function kt(f) {
        if (W && f == ':')
          return S.stream.match(/^\s*\w+\s+is\b/, !1) ? p(se, On, O) : p(O);
      }
      function On(f, d) {
        if (d == 'is') return (S.marked = 'keyword'), p();
      }
      function O(f, d) {
        if (d == 'keyof' || d == 'typeof' || d == 'infer' || d == 'readonly')
          return (S.marked = 'keyword'), p(d == 'typeof' ? pe : O);
        if (f == 'variable' || d == 'void') return (S.marked = 'type'), p(Je);
        if (d == '|' || d == '&') return p(O);
        if (f == 'string' || f == 'number' || f == 'atom') return p(Je);
        if (f == '[') return p(G(']'), V(O, ']', ','), _, Je);
        if (f == '{') return p(G('}'), qe, _, Je);
        if (f == '(') return p(V(Qe, ')'), Jr, Je);
        if (f == '<') return p(V(O, '>'), O);
        if (f == 'quasi') return F(we, Je);
      }
      function Jr(f) {
        if (f == '=>') return p(O);
      }
      function qe(f) {
        return f.match(/[\}\)\]]/)
          ? p()
          : f == ',' || f == ';'
          ? p(qe)
          : F(de, qe);
      }
      function de(f, d) {
        if (f == 'variable' || S.style == 'keyword')
          return (S.marked = 'property'), p(de);
        if (d == '?' || f == 'number' || f == 'string') return p(de);
        if (f == ':') return p(O);
        if (f == '[') return p(J('variable'), vi, J(']'), de);
        if (f == '(') return F(Ft, de);
        if (!f.match(/[;\}\)\],]/)) return p();
      }
      function we(f, d) {
        return f != 'quasi'
          ? F()
          : d.slice(d.length - 2) != '${'
          ? p(we)
          : p(O, En);
      }
      function En(f) {
        if (f == '}')
          return (S.marked = 'string-2'), (S.state.tokenize = st), p(we);
      }
      function Qe(f, d) {
        return (f == 'variable' && S.stream.match(/^\s*[?:]/, !1)) || d == '?'
          ? p(Qe)
          : f == ':'
          ? p(O)
          : f == 'spread'
          ? p(Qe)
          : F(O);
      }
      function Je(f, d) {
        if (d == '<') return p(G('>'), V(O, '>'), _, Je);
        if (d == '|' || f == '.' || d == '&') return p(O);
        if (f == '[') return p(O, J(']'), Je);
        if (d == 'extends' || d == 'implements')
          return (S.marked = 'keyword'), p(O);
        if (d == '?') return p(O, J(':'), O);
      }
      function Xe(f, d) {
        if (d == '<') return p(G('>'), V(O, '>'), _, Je);
      }
      function gr() {
        return F(O, Vr);
      }
      function Vr(f, d) {
        if (d == '=') return p(O);
      }
      function qt(f, d) {
        return d == 'enum'
          ? ((S.marked = 'keyword'), p(Ar))
          : F(et, wt, St, yi);
      }
      function et(f, d) {
        if (W && g(d)) return (S.marked = 'keyword'), p(et);
        if (f == 'variable') return D(d), p();
        if (f == 'spread') return p(et);
        if (f == '[') return vt(gi, ']');
        if (f == '{') return vt($r, '}');
      }
      function $r(f, d) {
        return f == 'variable' && !S.stream.match(/^\s*:/, !1)
          ? (D(d), p(St))
          : (f == 'variable' && (S.marked = 'property'),
            f == 'spread'
              ? p(et)
              : f == '}'
              ? F()
              : f == '['
              ? p(se, J(']'), J(':'), $r)
              : p(J(':'), et, St));
      }
      function gi() {
        return F(et, St);
      }
      function St(f, d) {
        if (d == '=') return p(pe);
      }
      function yi(f) {
        if (f == ',') return p(qt);
      }
      function Dr(f, d) {
        if (f == 'keyword b' && d == 'else') return p(G('form', 'else'), $, _);
      }
      function In(f, d) {
        if (d == 'await') return p(In);
        if (f == '(') return p(G(')'), en, _);
      }
      function en(f) {
        return f == 'var' ? p(qt, rr) : f == 'variable' ? p(rr) : F(rr);
      }
      function rr(f, d) {
        return f == ')'
          ? p()
          : f == ';'
          ? p(rr)
          : d == 'in' || d == 'of'
          ? ((S.marked = 'keyword'), p(se, rr))
          : F(se, rr);
      }
      function Wt(f, d) {
        if (d == '*') return (S.marked = 'keyword'), p(Wt);
        if (f == 'variable') return D(d), p(Wt);
        if (f == '(') return p(Q, G(')'), V(Mt, ')'), _, kt, $, Ae);
        if (W && d == '<') return p(G('>'), V(gr, '>'), _, Wt);
      }
      function Ft(f, d) {
        if (d == '*') return (S.marked = 'keyword'), p(Ft);
        if (f == 'variable') return D(d), p(Ft);
        if (f == '(') return p(Q, G(')'), V(Mt, ')'), _, kt, Ae);
        if (W && d == '<') return p(G('>'), V(gr, '>'), _, Ft);
      }
      function Wn(f, d) {
        if (f == 'keyword' || f == 'variable')
          return (S.marked = 'type'), p(Wn);
        if (d == '<') return p(G('>'), V(gr, '>'), _);
      }
      function Mt(f, d) {
        return (
          d == '@' && p(se, Mt),
          f == 'spread'
            ? p(Mt)
            : W && g(d)
            ? ((S.marked = 'keyword'), p(Mt))
            : W && f == 'this'
            ? p(wt, St)
            : F(et, wt, St)
        );
      }
      function nr(f, d) {
        return f == 'variable' ? Fn(f, d) : Nr(f, d);
      }
      function Fn(f, d) {
        if (f == 'variable') return D(d), p(Nr);
      }
      function Nr(f, d) {
        if (d == '<') return p(G('>'), V(gr, '>'), _, Nr);
        if (d == 'extends' || d == 'implements' || (W && f == ','))
          return d == 'implements' && (S.marked = 'keyword'), p(W ? O : se, Nr);
        if (f == '{') return p(G('}'), ct, _);
      }
      function ct(f, d) {
        if (
          f == 'async' ||
          (f == 'variable' &&
            (d == 'static' || d == 'get' || d == 'set' || (W && g(d))) &&
            S.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
        )
          return (S.marked = 'keyword'), p(ct);
        if (f == 'variable' || S.style == 'keyword')
          return (S.marked = 'property'), p(Xt, ct);
        if (f == 'number' || f == 'string') return p(Xt, ct);
        if (f == '[') return p(se, wt, J(']'), Xt, ct);
        if (d == '*') return (S.marked = 'keyword'), p(ct);
        if (W && f == '(') return F(Ft, ct);
        if (f == ';' || f == ',') return p(ct);
        if (f == '}') return p();
        if (d == '@') return p(se, ct);
      }
      function Xt(f, d) {
        if (d == '!' || d == '?') return p(Xt);
        if (f == ':') return p(O, St);
        if (d == '=') return p(pe);
        var v = S.state.lexical.prev,
          x = v && v.info == 'interface';
        return F(x ? Ft : Wt);
      }
      function ir(f, d) {
        return d == '*'
          ? ((S.marked = 'keyword'), p(P, J(';')))
          : d == 'default'
          ? ((S.marked = 'keyword'), p(se, J(';')))
          : f == '{'
          ? p(V(Pn, '}'), P, J(';'))
          : F($);
      }
      function Pn(f, d) {
        if (d == 'as') return (S.marked = 'keyword'), p(J('variable'));
        if (f == 'variable') return F(pe, Pn);
      }
      function Yt(f) {
        return f == 'string'
          ? p()
          : f == '('
          ? F(se)
          : f == '.'
          ? F(ft)
          : F(or, tn, P);
      }
      function or(f, d) {
        return f == '{'
          ? vt(or, '}')
          : (f == 'variable' && D(d),
            d == '*' && (S.marked = 'keyword'),
            p(ke));
      }
      function tn(f) {
        if (f == ',') return p(or, tn);
      }
      function ke(f, d) {
        if (d == 'as') return (S.marked = 'keyword'), p(or);
      }
      function P(f, d) {
        if (d == 'from') return (S.marked = 'keyword'), p(se);
      }
      function jt(f) {
        return f == ']' ? p() : F(V(pe, ']'));
      }
      function Ar() {
        return F(G('form'), et, J('{'), G('}'), V(Ct, '}'), _, _);
      }
      function Ct() {
        return F(et, St);
      }
      function le(f, d) {
        return (
          f.lastType == 'operator' ||
          f.lastType == ',' ||
          at.test(d.charAt(0)) ||
          /[,.]/.test(d.charAt(0))
        );
      }
      function Pt(f, d, v) {
        return (
          (d.tokenize == Ce &&
            /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
              d.lastType
            )) ||
          (d.lastType == 'quasi' &&
            /\{\s*$/.test(f.string.slice(0, f.pos - (v || 0))))
        );
      }
      return {
        startState: function (f) {
          var d = {
            tokenize: Ce,
            lastType: 'sof',
            cc: [],
            lexical: new Tt((f || 0) - Be, 0, 'block', !1),
            localVars: ue.localVars,
            context: ue.localVars && new C(null, null, !1),
            indented: f || 0,
          };
          return (
            ue.globalVars &&
              typeof ue.globalVars == 'object' &&
              (d.globalVars = ue.globalVars),
            d
          );
        },
        token: function (f, d) {
          if (
            (f.sol() &&
              (d.lexical.hasOwnProperty('align') || (d.lexical.align = !1),
              (d.indented = f.indentation()),
              be(f, d)),
            d.tokenize != me && f.eatSpace())
          )
            return null;
          var v = d.tokenize(f, d);
          return Te == 'comment'
            ? v
            : ((d.lastType =
                Te == 'operator' && (Ge == '++' || Ge == '--') ? 'incdec' : Te),
              ve(d, v, Te, Ge, f));
        },
        indent: function (f, d) {
          if (f.tokenize == me || f.tokenize == st) return X.Pass;
          if (f.tokenize != Ce) return 0;
          var v = d && d.charAt(0),
            x = f.lexical,
            j;
          if (!/^\s*else\b/.test(d))
            for (var ne = f.cc.length - 1; ne >= 0; --ne) {
              var oe = f.cc[ne];
              if (oe == _) x = x.prev;
              else if (oe != Dr && oe != Ae) break;
            }
          for (
            ;
            (x.type == 'stat' || x.type == 'form') &&
            (v == '}' ||
              ((j = f.cc[f.cc.length - 1]) &&
                (j == ft || j == pt) &&
                !/^[,\.=+\-*:?[\(]/.test(d)));

          )
            x = x.prev;
          Lt && x.type == ')' && x.prev.type == 'stat' && (x = x.prev);
          var Ee = x.type,
            gt = v == Ee;
          return Ee == 'vardef'
            ? x.indented +
                (f.lastType == 'operator' || f.lastType == ','
                  ? x.info.length + 1
                  : 0)
            : Ee == 'form' && v == '{'
            ? x.indented
            : Ee == 'form'
            ? x.indented + Be
            : Ee == 'stat'
            ? x.indented + (le(f, d) ? Lt || Be : 0)
            : x.info == 'switch' && !gt && ue.doubleIndentSwitch != !1
            ? x.indented + (/^(?:case|default)\b/.test(d) ? Be : 2 * Be)
            : x.align
            ? x.column + (gt ? 0 : 1)
            : x.indented + (gt ? 0 : Be);
        },
        electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
        blockCommentStart: L ? null : '/*',
        blockCommentEnd: L ? null : '*/',
        blockCommentContinue: L ? null : ' * ',
        lineComment: L ? null : '//',
        fold: 'brace',
        closeBrackets: '()[]{}\'\'""``',
        helperType: L ? 'json' : 'javascript',
        jsonldMode: ye,
        jsonMode: L,
        expressionAllowed: Pt,
        skipExpression: function (f) {
          ve(f, 'atom', 'atom', 'true', new X.StringStream('', 2, null));
        },
      };
    }),
      X.registerHelper('wordChars', 'javascript', /[\w$]/),
      X.defineMIME('text/javascript', 'javascript'),
      X.defineMIME('text/ecmascript', 'javascript'),
      X.defineMIME('application/javascript', 'javascript'),
      X.defineMIME('application/x-javascript', 'javascript'),
      X.defineMIME('application/ecmascript', 'javascript'),
      X.defineMIME('application/json', { name: 'javascript', json: !0 }),
      X.defineMIME('application/x-json', { name: 'javascript', json: !0 }),
      X.defineMIME('application/manifest+json', {
        name: 'javascript',
        json: !0,
      }),
      X.defineMIME('application/ld+json', { name: 'javascript', jsonld: !0 }),
      X.defineMIME('text/typescript', { name: 'javascript', typescript: !0 }),
      X.defineMIME('application/typescript', {
        name: 'javascript',
        typescript: !0,
      });
  });
})();
(function (An, pi) {
  (function (X) {
    X(di);
  })(function (X) {
    function lt(Y) {
      return new RegExp('^((' + Y.join(')|(') + '))\\b');
    }
    var ue = lt(['and', 'or', 'not', 'is']),
      Be = [
        'as',
        'assert',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'lambda',
        'pass',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',
        'in',
      ],
      Lt = [
        'abs',
        'all',
        'any',
        'bin',
        'bool',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'filter',
        'float',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'hex',
        'id',
        'input',
        'int',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'locals',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'property',
        'range',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'vars',
        'zip',
        '__import__',
        'NotImplemented',
        'Ellipsis',
        '__debug__',
      ];
    X.registerHelper(
      'hintWords',
      'python',
      Be.concat(Lt).concat(['exec', 'print'])
    );
    function ye(Y) {
      return Y.scopes[Y.scopes.length - 1];
    }
    X.defineMode('python', function (Y, W) {
      for (
        var Ue = 'error',
          Ze =
            W.delimiters || W.singleDelimiters || /^[\(\)\[\]\{\}@,:`=;\.\\]/,
          at = [
            W.singleOperators,
            W.doubleOperators,
            W.doubleDelimiters,
            W.tripleDelimiters,
            W.operators ||
              /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
          ],
          Ne = 0;
        Ne < at.length;
        Ne++
      )
        at[Ne] || at.splice(Ne--, 1);
      var mt = W.hangingIndent || Y.indentUnit,
        Te = Be,
        Ge = Lt;
      W.extra_keywords != null && (Te = Te.concat(W.extra_keywords)),
        W.extra_builtins != null && (Ge = Ge.concat(W.extra_builtins));
      var ie = !(W.version && Number(W.version) < 3);
      if (ie) {
        var Ce =
          W.identifiers || /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
        (Te = Te.concat([
          'nonlocal',
          'False',
          'True',
          'None',
          'async',
          'await',
        ])),
          (Ge = Ge.concat(['ascii', 'bytes', 'exec', 'print']));
        var We = new RegExp(
          `^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|"{3}|['"]))`,
          'i'
        );
      } else {
        var Ce = W.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/;
        (Te = Te.concat(['exec', 'print'])),
          (Ge = Ge.concat([
            'apply',
            'basestring',
            'buffer',
            'cmp',
            'coerce',
            'execfile',
            'file',
            'intern',
            'long',
            'raw_input',
            'reduce',
            'reload',
            'unichr',
            'unicode',
            'xrange',
            'False',
            'True',
            'None',
          ]));
        var We = new RegExp(`^(([rubf]|(ur)|(br))?('{3}|"{3}|['"]))`, 'i');
      }
      var me = lt(Te),
        st = lt(Ge);
      function he(M, D) {
        var m = M.sol() && D.lastToken != '\\';
        if ((m && (D.indent = M.indentation()), m && ye(D).type == 'py')) {
          var g = ye(D).offset;
          if (M.eatSpace()) {
            var C = M.indentation();
            return (
              C > g
                ? ut(D)
                : C < g && S(M, D) && M.peek() != '#' && (D.errorToken = !0),
              null
            );
          } else {
            var z = be(M, D);
            return g > 0 && S(M, D) && (z += ' ' + Ue), z;
          }
        }
        return be(M, D);
      }
      function be(M, D, m) {
        if (M.eatSpace()) return null;
        if (!m && M.match(/^#.*/)) return 'comment';
        if (M.match(/^[0-9\.]/, !1)) {
          var g = !1;
          if (
            (M.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) && (g = !0),
            M.match(/^[\d_]+\.\d*/) && (g = !0),
            M.match(/^\.\d+/) && (g = !0),
            g)
          )
            return M.eat(/J/i), 'number';
          var C = !1;
          if (
            (M.match(/^0x[0-9a-f_]+/i) && (C = !0),
            M.match(/^0b[01_]+/i) && (C = !0),
            M.match(/^0o[0-7_]+/i) && (C = !0),
            M.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) && (M.eat(/J/i), (C = !0)),
            M.match(/^0(?![\dx])/i) && (C = !0),
            C)
          )
            return M.eat(/L/i), 'number';
        }
        if (M.match(We)) {
          var z = M.current().toLowerCase().indexOf('f') !== -1;
          return z
            ? ((D.tokenize = Bt(M.current(), D.tokenize)), D.tokenize(M, D))
            : ((D.tokenize = Tt(M.current(), D.tokenize)), D.tokenize(M, D));
        }
        for (var K = 0; K < at.length; K++)
          if (M.match(at[K])) return 'operator';
        return M.match(Ze)
          ? 'punctuation'
          : D.lastToken == '.' && M.match(Ce)
          ? 'property'
          : M.match(me) || M.match(ue)
          ? 'keyword'
          : M.match(st)
          ? 'builtin'
          : M.match(/^(self|cls)\b/)
          ? 'variable-2'
          : M.match(Ce)
          ? D.lastToken == 'def' || D.lastToken == 'class'
            ? 'def'
            : 'variable'
          : (M.next(), m ? null : Ue);
      }
      function Bt(M, D) {
        for (; 'rubf'.indexOf(M.charAt(0).toLowerCase()) >= 0; )
          M = M.substr(1);
        var m = M.length == 1,
          g = 'string';
        function C(K) {
          return function (Q, Fe) {
            var Ae = be(Q, Fe, !0);
            return (
              Ae == 'punctuation' &&
                (Q.current() == '{'
                  ? (Fe.tokenize = C(K + 1))
                  : Q.current() == '}' &&
                    (K > 1 ? (Fe.tokenize = C(K - 1)) : (Fe.tokenize = z))),
              Ae
            );
          };
        }
        function z(K, Q) {
          for (; !K.eol(); )
            if ((K.eatWhile(/[^'"\{\}\\]/), K.eat('\\'))) {
              if ((K.next(), m && K.eol())) return g;
            } else {
              if (K.match(M)) return (Q.tokenize = D), g;
              if (K.match('{{')) return g;
              if (K.match('{', !1))
                return (Q.tokenize = C(0)), K.current() ? g : Q.tokenize(K, Q);
              if (K.match('}}')) return g;
              if (K.match('}')) return Ue;
              K.eat(/['"]/);
            }
          if (m) {
            if (W.singleLineStringErrors) return Ue;
            Q.tokenize = D;
          }
          return g;
        }
        return (z.isString = !0), z;
      }
      function Tt(M, D) {
        for (; 'rubf'.indexOf(M.charAt(0).toLowerCase()) >= 0; )
          M = M.substr(1);
        var m = M.length == 1,
          g = 'string';
        function C(z, K) {
          for (; !z.eol(); )
            if ((z.eatWhile(/[^'"\\]/), z.eat('\\'))) {
              if ((z.next(), m && z.eol())) return g;
            } else {
              if (z.match(M)) return (K.tokenize = D), g;
              z.eat(/['"]/);
            }
          if (m) {
            if (W.singleLineStringErrors) return Ue;
            K.tokenize = D;
          }
          return g;
        }
        return (C.isString = !0), C;
      }
      function ut(M) {
        for (; ye(M).type != 'py'; ) M.scopes.pop();
        M.scopes.push({
          offset: ye(M).offset + Y.indentUnit,
          type: 'py',
          align: null,
        });
      }
      function ve(M, D, m) {
        var g = M.match(/^[\s\[\{\(]*(?:#|$)/, !1) ? null : M.column() + 1;
        D.scopes.push({ offset: D.indent + mt, type: m, align: g });
      }
      function S(M, D) {
        for (
          var m = M.indentation();
          D.scopes.length > 1 && ye(D).offset > m;

        ) {
          if (ye(D).type != 'py') return !0;
          D.scopes.pop();
        }
        return ye(D).offset != m;
      }
      function F(M, D) {
        M.sol() && ((D.beginningOfLine = !0), (D.dedent = !1));
        var m = D.tokenize(M, D),
          g = M.current();
        if (D.beginningOfLine && g == '@')
          return M.match(Ce, !1) ? 'meta' : ie ? 'operator' : Ue;
        if (
          (/\S/.test(g) && (D.beginningOfLine = !1),
          (m == 'variable' || m == 'builtin') &&
            D.lastToken == 'meta' &&
            (m = 'meta'),
          (g == 'pass' || g == 'return') && (D.dedent = !0),
          g == 'lambda' && (D.lambda = !0),
          g == ':' &&
            !D.lambda &&
            ye(D).type == 'py' &&
            M.match(/^\s*(?:#|$)/, !1) &&
            ut(D),
          g.length == 1 && !/string|comment/.test(m))
        ) {
          var C = '[({'.indexOf(g);
          if (
            (C != -1 && ve(M, D, '])}'.slice(C, C + 1)),
            (C = '])}'.indexOf(g)),
            C != -1)
          )
            if (ye(D).type == g) D.indent = D.scopes.pop().offset - mt;
            else return Ue;
        }
        return (
          D.dedent &&
            M.eol() &&
            ye(D).type == 'py' &&
            D.scopes.length > 1 &&
            D.scopes.pop(),
          m
        );
      }
      var p = {
        startState: function (M) {
          return {
            tokenize: he,
            scopes: [{ offset: M || 0, type: 'py', align: null }],
            indent: M || 0,
            lastToken: null,
            lambda: !1,
            dedent: 0,
          };
        },
        token: function (M, D) {
          var m = D.errorToken;
          m && (D.errorToken = !1);
          var g = F(M, D);
          return (
            g &&
              g != 'comment' &&
              (D.lastToken =
                g == 'keyword' || g == 'punctuation' ? M.current() : g),
            g == 'punctuation' && (g = null),
            M.eol() && D.lambda && (D.lambda = !1),
            m ? g + ' ' + Ue : g
          );
        },
        indent: function (M, D) {
          if (M.tokenize != he) return M.tokenize.isString ? X.Pass : 0;
          var m = ye(M),
            g =
              m.type == D.charAt(0) ||
              (m.type == 'py' &&
                !M.dedent &&
                /^(else:|elif |except |finally:)/.test(D));
          return m.align != null
            ? m.align - (g ? 1 : 0)
            : m.offset - (g ? mt : 0);
        },
        electricInput: /^\s*([\}\]\)]|else:|elif |except |finally:)$/,
        closeBrackets: { triples: `'"` },
        lineComment: '#',
        fold: 'indent',
      };
      return p;
    }),
      X.defineMIME('text/x-python', 'python');
    var L = function (Y) {
      return Y.split(' ');
    };
    X.defineMIME('text/x-cython', {
      name: 'python',
      extra_keywords: L(
        'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'
      ),
    });
  });
})();
(function (An, pi) {
  (function (X) {
    X(di);
  })(function (X) {
    function lt(m, g, C, z, K, Q) {
      (this.indented = m),
        (this.column = g),
        (this.type = C),
        (this.info = z),
        (this.align = K),
        (this.prev = Q);
    }
    function ue(m, g, C, z) {
      var K = m.indented;
      return (
        m.context &&
          m.context.type == 'statement' &&
          C != 'statement' &&
          (K = m.context.indented),
        (m.context = new lt(K, g, C, z, null, m.context))
      );
    }
    function Be(m) {
      var g = m.context.type;
      return (
        (g == ')' || g == ']' || g == '}') && (m.indented = m.context.indented),
        (m.context = m.context.prev)
      );
    }
    function Lt(m, g, C) {
      if (
        g.prevToken == 'variable' ||
        g.prevToken == 'type' ||
        /\S(?:[^- ]>|[*\]])\s*$|\*$/.test(m.string.slice(0, C)) ||
        (g.typeAtEndOfLine && m.column() == m.indentation())
      )
        return !0;
    }
    function ye(m) {
      for (;;) {
        if (!m || m.type == 'top') return !0;
        if (m.type == '}' && m.prev.info != 'namespace') return !1;
        m = m.prev;
      }
    }
    X.defineMode('clike', function (m, g) {
      var C = m.indentUnit,
        z = g.statementIndentUnit || C,
        K = g.dontAlignCalls,
        Q = g.keywords || {},
        Fe = g.types || {},
        Ae = g.builtin || {},
        G = g.blockKeywords || {},
        _ = g.defKeywords || {},
        J = g.atoms || {},
        $ = g.hooks || {},
        Mr = g.multiLineStrings,
        se = g.indentStatements !== !1,
        pe = g.indentSwitch !== !1,
        Et = g.namespaceSeparator,
        It = g.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
        bt = g.numberStart || /[\d\.]/,
        ft =
          g.number ||
          /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
        pt = g.isOperatorChar || /[+\-*&%=<>!?|\/]/,
        te = g.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
        Ut = g.isReservedIdentifier || !1,
        Oe,
        Kt;
      function vr(U, q) {
        var H = U.next();
        if ($[H]) {
          var re = $[H](U, q);
          if (re !== !1) return re;
        }
        if (H == '"' || H == "'") return (q.tokenize = Qr(H)), q.tokenize(U, q);
        if (bt.test(H)) {
          if ((U.backUp(1), U.match(ft))) return 'number';
          U.next();
        }
        if (It.test(H)) return (Oe = H), null;
        if (H == '/') {
          if (U.eat('*')) return (q.tokenize = tr), tr(U, q);
          if (U.eat('/')) return U.skipToEnd(), 'comment';
        }
        if (pt.test(H)) {
          for (; !U.match(/^\/[\/*]/, !1) && U.eat(pt); );
          return 'operator';
        }
        if ((U.eatWhile(te), Et)) for (; U.match(Et); ) U.eatWhile(te);
        var V = U.current();
        return Y(Q, V)
          ? (Y(G, V) && (Oe = 'newstatement'), Y(_, V) && (Kt = !0), 'keyword')
          : Y(Fe, V)
          ? 'type'
          : Y(Ae, V) || (Ut && Ut(V))
          ? (Y(G, V) && (Oe = 'newstatement'), 'builtin')
          : Y(J, V)
          ? 'atom'
          : 'variable';
      }
      function Qr(U) {
        return function (q, H) {
          for (var re = !1, V, vt = !1; (V = q.next()) != null; ) {
            if (V == U && !re) {
              vt = !0;
              break;
            }
            re = !re && V == '\\';
          }
          return (vt || !(re || Mr)) && (H.tokenize = null), 'string';
        };
      }
      function tr(U, q) {
        for (var H = !1, re; (re = U.next()); ) {
          if (re == '/' && H) {
            q.tokenize = null;
            break;
          }
          H = re == '*';
        }
        return 'comment';
      }
      function Gt(U, q) {
        g.typeFirstDefinitions &&
          U.eol() &&
          ye(q.context) &&
          (q.typeAtEndOfLine = Lt(U, q, U.pos));
      }
      return {
        startState: function (U) {
          return {
            tokenize: null,
            context: new lt((U || 0) - C, 0, 'top', null, !1),
            indented: 0,
            startOfLine: !0,
            prevToken: null,
          };
        },
        token: function (U, q) {
          var H = q.context;
          if (
            (U.sol() &&
              (H.align == null && (H.align = !1),
              (q.indented = U.indentation()),
              (q.startOfLine = !0)),
            U.eatSpace())
          )
            return Gt(U, q), null;
          Oe = Kt = null;
          var re = (q.tokenize || vr)(U, q);
          if (re == 'comment' || re == 'meta') return re;
          if (
            (H.align == null && (H.align = !0),
            Oe == ';' ||
              Oe == ':' ||
              (Oe == ',' && U.match(/^\s*(?:\/\/.*)?$/, !1)))
          )
            for (; q.context.type == 'statement'; ) Be(q);
          else if (Oe == '{') ue(q, U.column(), '}');
          else if (Oe == '[') ue(q, U.column(), ']');
          else if (Oe == '(') ue(q, U.column(), ')');
          else if (Oe == '}') {
            for (; H.type == 'statement'; ) H = Be(q);
            for (H.type == '}' && (H = Be(q)); H.type == 'statement'; )
              H = Be(q);
          } else
            Oe == H.type
              ? Be(q)
              : se &&
                (((H.type == '}' || H.type == 'top') && Oe != ';') ||
                  (H.type == 'statement' && Oe == 'newstatement')) &&
                ue(q, U.column(), 'statement', U.current());
          if (
            (re == 'variable' &&
              (q.prevToken == 'def' ||
                (g.typeFirstDefinitions &&
                  Lt(U, q, U.start) &&
                  ye(q.context) &&
                  U.match(/^\s*\(/, !1))) &&
              (re = 'def'),
            $.token)
          ) {
            var V = $.token(U, q, re);
            V !== void 0 && (re = V);
          }
          return (
            re == 'def' && g.styleDefs === !1 && (re = 'variable'),
            (q.startOfLine = !1),
            (q.prevToken = Kt ? 'def' : re || Oe),
            Gt(U, q),
            re
          );
        },
        indent: function (U, q) {
          if ((U.tokenize != vr && U.tokenize != null) || U.typeAtEndOfLine)
            return X.Pass;
          var H = U.context,
            re = q && q.charAt(0),
            V = re == H.type;
          if (
            (H.type == 'statement' && re == '}' && (H = H.prev),
            g.dontIndentStatements)
          )
            for (
              ;
              H.type == 'statement' && g.dontIndentStatements.test(H.info);

            )
              H = H.prev;
          if ($.indent) {
            var vt = $.indent(U, H, q, C);
            if (typeof vt == 'number') return vt;
          }
          var xt = H.prev && H.prev.info == 'switch';
          if (g.allmanIndentation && /[{(]/.test(re)) {
            for (; H.type != 'top' && H.type != '}'; ) H = H.prev;
            return H.indented;
          }
          return H.type == 'statement'
            ? H.indented + (re == '{' ? 0 : z)
            : H.align && (!K || H.type != ')')
            ? H.column + (V ? 0 : 1)
            : H.type == ')' && !V
            ? H.indented + z
            : H.indented +
              (V ? 0 : C) +
              (!V && xt && !/^(?:case|default)\b/.test(q) ? C : 0);
        },
        electricInput: pe
          ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
          : /^\s*[{}]$/,
        blockCommentStart: '/*',
        blockCommentEnd: '*/',
        blockCommentContinue: ' * ',
        lineComment: '//',
        fold: 'brace',
      };
    });
    function L(m) {
      for (var g = {}, C = m.split(' '), z = 0; z < C.length; ++z) g[C[z]] = !0;
      return g;
    }
    function Y(m, g) {
      return typeof m == 'function' ? m(g) : m.propertyIsEnumerable(g);
    }
    var W =
        'auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran',
      Ue =
        'alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq',
      Ze =
        'bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available',
      at =
        'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT',
      Ne = L('int long char short double float unsigned signed void bool'),
      mt = L('SEL instancetype id Class Protocol BOOL');
    function Te(m) {
      return Y(Ne, m) || /.+_t$/.test(m);
    }
    function Ge(m) {
      return Te(m) || Y(mt, m);
    }
    var ie = 'case do else for if switch while struct enum union',
      Ce = 'struct enum union';
    function We(m, g) {
      if (!g.startOfLine) return !1;
      for (var C, z = null; (C = m.peek()); ) {
        if (C == '\\' && m.match(/^.$/)) {
          z = We;
          break;
        } else if (C == '/' && m.match(/^\/[\/\*]/, !1)) break;
        m.next();
      }
      return (g.tokenize = z), 'meta';
    }
    function me(m, g) {
      return g.prevToken == 'type' ? 'type' : !1;
    }
    function st(m) {
      return !m || m.length < 2 || m[0] != '_'
        ? !1
        : m[1] == '_' || m[1] !== m[1].toLowerCase();
    }
    function he(m) {
      return m.eatWhile(/[\w\.']/), 'number';
    }
    function be(m, g) {
      if ((m.backUp(1), m.match(/^(?:R|u8R|uR|UR|LR)/))) {
        var C = m.match(/^"([^\s\\()]{0,16})\(/);
        return C
          ? ((g.cpp11RawStringDelim = C[1]), (g.tokenize = ut), ut(m, g))
          : !1;
      }
      return m.match(/^(?:u8|u|U|L)/)
        ? m.match(/^["']/, !1)
          ? 'string'
          : !1
        : (m.next(), !1);
    }
    function Bt(m) {
      var g = /(\w+)::~?(\w+)$/.exec(m);
      return g && g[1] == g[2];
    }
    function Tt(m, g) {
      for (var C; (C = m.next()) != null; )
        if (C == '"' && !m.eat('"')) {
          g.tokenize = null;
          break;
        }
      return 'string';
    }
    function ut(m, g) {
      var C = g.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&'),
        z = m.match(new RegExp('.*?\\)' + C + '"'));
      return z ? (g.tokenize = null) : m.skipToEnd(), 'string';
    }
    function ve(m, g) {
      typeof m == 'string' && (m = [m]);
      var C = [];
      function z(Q) {
        if (Q) for (var Fe in Q) Q.hasOwnProperty(Fe) && C.push(Fe);
      }
      z(g.keywords),
        z(g.types),
        z(g.builtin),
        z(g.atoms),
        C.length &&
          ((g.helperType = m[0]), X.registerHelper('hintWords', m[0], C));
      for (var K = 0; K < m.length; ++K) X.defineMIME(m[K], g);
    }
    ve(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
      name: 'clike',
      keywords: L(W),
      types: Te,
      blockKeywords: L(ie),
      defKeywords: L(Ce),
      typeFirstDefinitions: !0,
      atoms: L('NULL true false'),
      isReservedIdentifier: st,
      hooks: { '#': We, '*': me },
      modeProps: { fold: ['brace', 'include'] },
    }),
      ve(['text/x-c++src', 'text/x-c++hdr'], {
        name: 'clike',
        keywords: L(W + ' ' + Ue),
        types: Te,
        blockKeywords: L(ie + ' class try catch'),
        defKeywords: L(Ce + ' class namespace'),
        typeFirstDefinitions: !0,
        atoms: L('true false NULL nullptr'),
        dontIndentStatements: /^template$/,
        isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
        isReservedIdentifier: st,
        hooks: {
          '#': We,
          '*': me,
          u: be,
          U: be,
          L: be,
          R: be,
          0: he,
          1: he,
          2: he,
          3: he,
          4: he,
          5: he,
          6: he,
          7: he,
          8: he,
          9: he,
          token: function (m, g, C) {
            if (
              C == 'variable' &&
              m.peek() == '(' &&
              (g.prevToken == ';' ||
                g.prevToken == null ||
                g.prevToken == '}') &&
              Bt(m.current())
            )
              return 'def';
          },
        },
        namespaceSeparator: '::',
        modeProps: { fold: ['brace', 'include'] },
      }),
      ve('text/x-java', {
        name: 'clike',
        keywords: L(
          'abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface'
        ),
        types: L(
          'var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void'
        ),
        blockKeywords: L('catch class do else finally for if switch try while'),
        defKeywords: L('class interface enum @interface'),
        typeFirstDefinitions: !0,
        atoms: L('true false null'),
        number:
          /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
        hooks: {
          '@': function (m) {
            return m.match('interface', !1)
              ? !1
              : (m.eatWhile(/[\w\$_]/), 'meta');
          },
          '"': function (m, g) {
            return m.match(/""$/) ? ((g.tokenize = S), g.tokenize(m, g)) : !1;
          },
        },
        modeProps: { fold: ['brace', 'import'] },
      }),
      ve('text/x-csharp', {
        name: 'clike',
        keywords: L(
          'abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield'
        ),
        types: L(
          'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong'
        ),
        blockKeywords: L(
          'catch class do else finally for foreach if struct switch try while'
        ),
        defKeywords: L('class interface namespace struct var'),
        typeFirstDefinitions: !0,
        atoms: L('true false null'),
        hooks: {
          '@': function (m, g) {
            return m.eat('"')
              ? ((g.tokenize = Tt), Tt(m, g))
              : (m.eatWhile(/[\w\$_]/), 'meta');
          },
        },
      });
    function S(m, g) {
      for (var C = !1; !m.eol(); ) {
        if (!C && m.match('"""')) {
          g.tokenize = null;
          break;
        }
        C = m.next() == '\\' && !C;
      }
      return 'string';
    }
    function F(m) {
      return function (g, C) {
        for (var z; (z = g.next()); )
          if (z == '*' && g.eat('/'))
            if (m == 1) {
              C.tokenize = null;
              break;
            } else return (C.tokenize = F(m - 1)), C.tokenize(g, C);
          else if (z == '/' && g.eat('*'))
            return (C.tokenize = F(m + 1)), C.tokenize(g, C);
        return 'comment';
      };
    }
    ve('text/x-scala', {
      name: 'clike',
      keywords: L(
        'abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble'
      ),
      types: L(
        'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void'
      ),
      multiLineStrings: !0,
      blockKeywords: L(
        'catch class enum do else finally for forSome if match switch try while'
      ),
      defKeywords: L('class enum def object package trait type val var'),
      atoms: L('true false null'),
      indentStatements: !1,
      indentSwitch: !1,
      isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
      hooks: {
        '@': function (m) {
          return m.eatWhile(/[\w\$_]/), 'meta';
        },
        '"': function (m, g) {
          return m.match('""') ? ((g.tokenize = S), g.tokenize(m, g)) : !1;
        },
        "'": function (m) {
          return m.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
        },
        '=': function (m, g) {
          var C = g.context;
          return C.type == '}' && C.align && m.eat('>')
            ? ((g.context = new lt(
                C.indented,
                C.column,
                C.type,
                C.info,
                null,
                C.prev
              )),
              'operator')
            : !1;
        },
        '/': function (m, g) {
          return m.eat('*') ? ((g.tokenize = F(1)), g.tokenize(m, g)) : !1;
        },
      },
      modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } },
    });
    function p(m) {
      return function (g, C) {
        for (var z = !1, K, Q = !1; !g.eol(); ) {
          if (!m && !z && g.match('"')) {
            Q = !0;
            break;
          }
          if (m && g.match('"""')) {
            Q = !0;
            break;
          }
          (K = g.next()),
            !z && K == '$' && g.match('{') && g.skipTo('}'),
            (z = !z && K == '\\' && !m);
        }
        return (Q || !m) && (C.tokenize = null), 'string';
      };
    }
    ve('text/x-kotlin', {
      name: 'clike',
      keywords: L(
        'package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value'
      ),
      types: L(
        'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit'
      ),
      intendSwitch: !1,
      indentStatements: !1,
      multiLineStrings: !0,
      number:
        /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
      blockKeywords: L(
        'catch class do else finally for if where try while enum'
      ),
      defKeywords: L('class val var object interface fun'),
      atoms: L('true false null this'),
      hooks: {
        '@': function (m) {
          return m.eatWhile(/[\w\$_]/), 'meta';
        },
        '*': function (m, g) {
          return g.prevToken == '.' ? 'variable' : 'operator';
        },
        '"': function (m, g) {
          return (g.tokenize = p(m.match('""'))), g.tokenize(m, g);
        },
        '/': function (m, g) {
          return m.eat('*') ? ((g.tokenize = F(1)), g.tokenize(m, g)) : !1;
        },
        indent: function (m, g, C, z) {
          var K = C && C.charAt(0);
          if ((m.prevToken == '}' || m.prevToken == ')') && C == '')
            return m.indented;
          if (
            (m.prevToken == 'operator' && C != '}' && m.context.type != '}') ||
            (m.prevToken == 'variable' && K == '.') ||
            ((m.prevToken == '}' || m.prevToken == ')') && K == '.')
          )
            return z * 2 + g.indented;
          if (g.align && g.type == '}')
            return g.indented + (m.context.type == (C || '').charAt(0) ? 0 : z);
        },
      },
      modeProps: { closeBrackets: { triples: '"' } },
    }),
      ve(['x-shader/x-vertex', 'x-shader/x-fragment'], {
        name: 'clike',
        keywords: L(
          'sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout'
        ),
        types: L(
          'float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4'
        ),
        blockKeywords: L('for while do if else struct'),
        builtin: L(
          'radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4'
        ),
        atoms: L(
          'true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers'
        ),
        indentSwitch: !1,
        hooks: { '#': We },
        modeProps: { fold: ['brace', 'include'] },
      }),
      ve('text/x-nesc', {
        name: 'clike',
        keywords: L(
          W +
            ' as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends'
        ),
        types: Te,
        blockKeywords: L(ie),
        atoms: L('null true false'),
        hooks: { '#': We },
        modeProps: { fold: ['brace', 'include'] },
      }),
      ve('text/x-objectivec', {
        name: 'clike',
        keywords: L(W + ' ' + Ze),
        types: Ge,
        builtin: L(at),
        blockKeywords: L(
          ie +
            ' @synthesize @try @catch @finally @autoreleasepool @synchronized'
        ),
        defKeywords: L(Ce + ' @interface @implementation @protocol @class'),
        dontIndentStatements: /^@.*$/,
        typeFirstDefinitions: !0,
        atoms: L('YES NO NULL Nil nil true false nullptr'),
        isReservedIdentifier: st,
        hooks: { '#': We, '*': me },
        modeProps: { fold: ['brace', 'include'] },
      }),
      ve('text/x-objectivec++', {
        name: 'clike',
        keywords: L(W + ' ' + Ze + ' ' + Ue),
        types: Ge,
        builtin: L(at),
        blockKeywords: L(
          ie +
            ' @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch'
        ),
        defKeywords: L(
          Ce + ' @interface @implementation @protocol @class class namespace'
        ),
        dontIndentStatements: /^@.*$|^template$/,
        typeFirstDefinitions: !0,
        atoms: L('YES NO NULL Nil nil true false nullptr'),
        isReservedIdentifier: st,
        hooks: {
          '#': We,
          '*': me,
          u: be,
          U: be,
          L: be,
          R: be,
          0: he,
          1: he,
          2: he,
          3: he,
          4: he,
          5: he,
          6: he,
          7: he,
          8: he,
          9: he,
          token: function (m, g, C) {
            if (
              C == 'variable' &&
              m.peek() == '(' &&
              (g.prevToken == ';' ||
                g.prevToken == null ||
                g.prevToken == '}') &&
              Bt(m.current())
            )
              return 'def';
          },
        },
        namespaceSeparator: '::',
        modeProps: { fold: ['brace', 'include'] },
      }),
      ve('text/x-squirrel', {
        name: 'clike',
        keywords: L(
          'base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static'
        ),
        types: Te,
        blockKeywords: L(
          'case catch class else for foreach if switch try while'
        ),
        defKeywords: L('function local class'),
        typeFirstDefinitions: !0,
        atoms: L('true false null'),
        hooks: { '#': We },
        modeProps: { fold: ['brace', 'include'] },
      });
    var M = null;
    function D(m) {
      return function (g, C) {
        for (var z = !1, K, Q = !1; !g.eol(); ) {
          if (!z && g.match('"') && (m == 'single' || g.match('""'))) {
            Q = !0;
            break;
          }
          if (!z && g.match('``')) {
            (M = D(m)), (Q = !0);
            break;
          }
          (K = g.next()), (z = m == 'single' && !z && K == '\\');
        }
        return Q && (C.tokenize = null), 'string';
      };
    }
    ve('text/x-ceylon', {
      name: 'clike',
      keywords: L(
        'abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while'
      ),
      types: function (m) {
        var g = m.charAt(0);
        return g === g.toUpperCase() && g !== g.toLowerCase();
      },
      blockKeywords: L(
        'case catch class dynamic else finally for function if interface module new object switch try while'
      ),
      defKeywords: L(
        'class dynamic function interface module object package value'
      ),
      builtin: L(
        'abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable'
      ),
      isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
      isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
      numberStart: /[\d#$]/,
      number:
        /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
      multiLineStrings: !0,
      typeFirstDefinitions: !0,
      atoms: L('true false null larger smaller equal empty finished'),
      indentSwitch: !1,
      styleDefs: !1,
      hooks: {
        '@': function (m) {
          return m.eatWhile(/[\w\$_]/), 'meta';
        },
        '"': function (m, g) {
          return (
            (g.tokenize = D(m.match('""') ? 'triple' : 'single')),
            g.tokenize(m, g)
          );
        },
        '`': function (m, g) {
          return !M || !m.match('`')
            ? !1
            : ((g.tokenize = M), (M = null), g.tokenize(m, g));
        },
        "'": function (m) {
          return m.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
        },
        token: function (m, g, C) {
          if ((C == 'variable' || C == 'type') && g.prevToken == '.')
            return 'variable-2';
        },
      },
      modeProps: { fold: ['brace', 'import'], closeBrackets: { triples: '"' } },
    });
  });
})();
export { du as default };
