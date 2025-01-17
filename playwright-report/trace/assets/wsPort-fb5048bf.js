var Pp = Object.defineProperty;
var Mp = (e, t, n) =>
  t in e
    ? Pp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ee = (e, t, n) => (Mp(e, typeof t != 'symbol' ? t + '' : t, n), n);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = n(o);
    fetch(o.href, s);
  }
})();
var On =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function Cu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Lu = { exports: {} },
  Ts = {},
  Au = { exports: {} },
  M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gr = Symbol.for('react.element'),
  Op = Symbol.for('react.portal'),
  Up = Symbol.for('react.fragment'),
  Fp = Symbol.for('react.strict_mode'),
  zp = Symbol.for('react.profiler'),
  Hp = Symbol.for('react.provider'),
  Bp = Symbol.for('react.context'),
  jp = Symbol.for('react.forward_ref'),
  Vp = Symbol.for('react.suspense'),
  Wp = Symbol.for('react.memo'),
  Gp = Symbol.for('react.lazy'),
  $c = Symbol.iterator;
function Qp(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = ($c && e[$c]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var $u = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qu = Object.assign,
  Ru = {};
function Gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ru),
    (this.updater = n || $u);
}
Gn.prototype.isReactComponent = {};
Gn.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
Gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Iu() {}
Iu.prototype = Gn.prototype;
function Ll(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Ru),
    (this.updater = n || $u);
}
var Al = (Ll.prototype = new Iu());
Al.constructor = Ll;
qu(Al, Gn.prototype);
Al.isPureReactComponent = !0;
var qc = Array.isArray,
  Du = Object.prototype.hasOwnProperty,
  $l = { current: null },
  Pu = { key: !0, ref: !0, __self: !0, __source: !0 };
function Mu(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (s = '' + t.key),
    t))
      Du.call(t, r) && !Pu.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var c = Array(l), a = 0; a < l; a++) c[a] = arguments[a + 2];
    o.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Gr,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: $l.current,
  };
}
function Kp(e, t) {
  return {
    $$typeof: Gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ql(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Gr;
}
function Xp(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Rc = /\/+/g;
function Qs(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Xp('' + e.key)
    : t.toString(36);
}
function Co(e, t, n, r, o) {
  var s = typeof e;
  (s === 'undefined' || s === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Gr:
          case Op:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (o = o(i)),
      (e = r === '' ? '.' + Qs(i, 0) : r),
      qc(o)
        ? ((n = ''),
          e != null && (n = e.replace(Rc, '$&/') + '/'),
          Co(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (ql(o) &&
            (o = Kp(
              o,
              n +
                (!o.key || (i && i.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Rc, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), qc(e)))
    for (var l = 0; l < e.length; l++) {
      s = e[l];
      var c = r + Qs(s, l);
      i += Co(s, t, n, c, o);
    }
  else if (((c = Qp(e)), typeof c == 'function'))
    for (e = c.call(e), l = 0; !(s = e.next()).done; )
      (s = s.value), (c = r + Qs(s, l++)), (i += Co(s, t, n, c, o));
  else if (s === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function to(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Co(e, r, '', '', function (s) {
      return t.call(n, s, o++);
    }),
    r
  );
}
function Jp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Te = { current: null },
  Lo = { transition: null },
  Yp = {
    ReactCurrentDispatcher: Te,
    ReactCurrentBatchConfig: Lo,
    ReactCurrentOwner: $l,
  };
M.Children = {
  map: to,
  forEach: function (e, t, n) {
    to(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      to(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      to(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ql(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
M.Component = Gn;
M.Fragment = Up;
M.Profiler = zp;
M.PureComponent = Ll;
M.StrictMode = Fp;
M.Suspense = Vp;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yp;
M.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = qu({}, e.props),
    o = e.key,
    s = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (i = $l.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (c in t)
      Du.call(t, c) &&
        !Pu.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && l !== void 0 ? l[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    l = Array(c);
    for (var a = 0; a < c; a++) l[a] = arguments[a + 2];
    r.children = l;
  }
  return { $$typeof: Gr, type: e.type, key: o, ref: s, props: r, _owner: i };
};
M.createContext = function (e) {
  return (
    (e = {
      $$typeof: Bp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Hp, _context: e }),
    (e.Consumer = e)
  );
};
M.createElement = Mu;
M.createFactory = function (e) {
  var t = Mu.bind(null, e);
  return (t.type = e), t;
};
M.createRef = function () {
  return { current: null };
};
M.forwardRef = function (e) {
  return { $$typeof: jp, render: e };
};
M.isValidElement = ql;
M.lazy = function (e) {
  return { $$typeof: Gp, _payload: { _status: -1, _result: e }, _init: Jp };
};
M.memo = function (e, t) {
  return { $$typeof: Wp, type: e, compare: t === void 0 ? null : t };
};
M.startTransition = function (e) {
  var t = Lo.transition;
  Lo.transition = {};
  try {
    e();
  } finally {
    Lo.transition = t;
  }
};
M.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
M.useCallback = function (e, t) {
  return Te.current.useCallback(e, t);
};
M.useContext = function (e) {
  return Te.current.useContext(e);
};
M.useDebugValue = function () {};
M.useDeferredValue = function (e) {
  return Te.current.useDeferredValue(e);
};
M.useEffect = function (e, t) {
  return Te.current.useEffect(e, t);
};
M.useId = function () {
  return Te.current.useId();
};
M.useImperativeHandle = function (e, t, n) {
  return Te.current.useImperativeHandle(e, t, n);
};
M.useInsertionEffect = function (e, t) {
  return Te.current.useInsertionEffect(e, t);
};
M.useLayoutEffect = function (e, t) {
  return Te.current.useLayoutEffect(e, t);
};
M.useMemo = function (e, t) {
  return Te.current.useMemo(e, t);
};
M.useReducer = function (e, t, n) {
  return Te.current.useReducer(e, t, n);
};
M.useRef = function (e) {
  return Te.current.useRef(e);
};
M.useState = function (e) {
  return Te.current.useState(e);
};
M.useSyncExternalStore = function (e, t, n) {
  return Te.current.useSyncExternalStore(e, t, n);
};
M.useTransition = function () {
  return Te.current.useTransition();
};
M.version = '18.1.0';
Au.exports = M;
var q = Au.exports;
const An = Cu(q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zp = q,
  em = Symbol.for('react.element'),
  tm = Symbol.for('react.fragment'),
  nm = Object.prototype.hasOwnProperty,
  rm = Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  om = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ou(e, t, n) {
  var r,
    o = {},
    s = null,
    i = null;
  n !== void 0 && (s = '' + n),
    t.key !== void 0 && (s = '' + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) nm.call(t, r) && !om.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: em,
    type: e,
    key: s,
    ref: i,
    props: o,
    _owner: rm.current,
  };
}
Ts.Fragment = tm;
Ts.jsx = Ou;
Ts.jsxs = Ou;
Lu.exports = Ts;
var Rl = Lu.exports;
const an = Rl.Fragment,
  y = Rl.jsx,
  A = Rl.jsxs;
function sm(e, t, n, r) {
  const [o, s] = An.useState(n);
  return (
    An.useEffect(() => {
      let i = !1;
      return (
        r !== void 0 && s(r),
        e().then((l) => {
          i || s(l);
        }),
        () => {
          i = !0;
        }
      );
    }, t),
    o
  );
}
function bs() {
  const e = An.useRef(null),
    [t, n] = An.useState(new DOMRect(0, 0, 10, 10));
  return (
    An.useLayoutEffect(() => {
      const r = e.current;
      if (!r) return;
      const o = new ResizeObserver((s) => {
        const i = s[s.length - 1];
        i && i.contentRect && n(i.contentRect);
      });
      return o.observe(r), () => o.disconnect();
    }, [e]),
    [t, e]
  );
}
function Un(e) {
  if (!isFinite(e)) return '-';
  if (e === 0) return '0';
  if (e < 1e3) return e.toFixed(0) + 'ms';
  const t = e / 1e3;
  if (t < 60) return t.toFixed(1) + 's';
  const n = t / 60;
  if (n < 60) return n.toFixed(1) + 'm';
  const r = n / 60;
  return r < 24 ? r.toFixed(1) + 'h' : (r / 24).toFixed(1) + 'd';
}
function Uu(e, t, n, r, o) {
  let s = r || 0,
    i = o !== void 0 ? o : e.length;
  for (; s < i; ) {
    const l = (s + i) >> 1;
    n(t, e[l]) >= 0 ? (s = l + 1) : (i = l);
  }
  return i;
}
function im(e) {
  const t = document.createElement('textarea');
  (t.style.position = 'absolute'),
    (t.style.zIndex = '-1000'),
    (t.value = e),
    document.body.appendChild(t),
    t.select(),
    document.execCommand('copy'),
    t.remove();
}
function JJ(e, t) {
  const n = Nr.getObject(e, t),
    [r, o] = An.useState(n);
  return [
    r,
    (i) => {
      Nr.setObject(e, i), o(i);
    },
  ];
}
class lm {
  getString(t, n) {
    return localStorage[t] || n;
  }
  setString(t, n) {
    (localStorage[t] = n), window.saveSettings && window.saveSettings();
  }
  getObject(t, n) {
    if (!localStorage[t]) return n;
    try {
      return JSON.parse(localStorage[t]);
    } catch {
      return n;
    }
  }
  setObject(t, n) {
    (localStorage[t] = JSON.stringify(n)),
      window.saveSettings && window.saveSettings();
  }
}
const Nr = new lm();
function YJ() {
  if (document.playwrightThemeInitialized) return;
  (document.playwrightThemeInitialized = !0),
    document.defaultView.addEventListener(
      'focus',
      (n) => {
        n.target.document.nodeType === Node.DOCUMENT_NODE &&
          document.body.classList.remove('inactive');
      },
      !1
    ),
    document.defaultView.addEventListener(
      'blur',
      (n) => {
        document.body.classList.add('inactive');
      },
      !1
    );
  const e = Nr.getString('theme', 'light-mode'),
    t = window.matchMedia('(prefers-color-scheme: dark)');
  (e === 'dark-mode' || t.matches) && document.body.classList.add('dark-mode');
}
const Il = new Set();
function ZJ() {
  const e = Nr.getString('theme', 'light-mode');
  let t;
  e === 'dark-mode' ? (t = 'light-mode') : (t = 'dark-mode'),
    e && document.body.classList.remove(e),
    document.body.classList.add(t),
    Nr.setString('theme', t);
  for (const n of Il) n(t);
}
function eY(e) {
  Il.add(e);
}
function tY(e) {
  Il.delete(e);
}
function nY() {
  return document.body.classList.contains('dark-mode')
    ? 'dark-mode'
    : 'light-mode';
}
var Fu = { exports: {} },
  Fe = {},
  zu = { exports: {} },
  Hu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, D) {
    var P = C.length;
    C.push(D);
    e: for (; 0 < P; ) {
      var V = (P - 1) >>> 1,
        le = C[V];
      if (0 < o(le, D)) (C[V] = D), (C[P] = le), (P = V);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0],
      P = C.pop();
    if (P !== D) {
      C[0] = P;
      e: for (var V = 0, le = C.length, Zr = le >>> 1; V < Zr; ) {
        var Vt = 2 * (V + 1) - 1,
          Gs = C[Vt],
          Wt = Vt + 1,
          eo = C[Wt];
        if (0 > o(Gs, P))
          Wt < le && 0 > o(eo, Gs)
            ? ((C[V] = eo), (C[Wt] = P), (V = Wt))
            : ((C[V] = Gs), (C[Vt] = P), (V = Vt));
        else if (Wt < le && 0 > o(eo, P)) (C[V] = eo), (C[Wt] = P), (V = Wt);
        else break e;
      }
    }
    return D;
  }
  function o(C, D) {
    var P = C.sortIndex - D.sortIndex;
    return P !== 0 ? P : C.id - D.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var i = Date,
      l = i.now();
    e.unstable_now = function () {
      return i.now() - l;
    };
  }
  var c = [],
    a = [],
    u = 1,
    h = null,
    d = 3,
    v = !1,
    m = !1,
    E = !1,
    S = typeof setTimeout == 'function' ? setTimeout : null,
    p = typeof clearTimeout == 'function' ? clearTimeout : null,
    f = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(C) {
    for (var D = n(a); D !== null; ) {
      if (D.callback === null) r(a);
      else if (D.startTime <= C)
        r(a), (D.sortIndex = D.expirationTime), t(c, D);
      else break;
      D = n(a);
    }
  }
  function w(C) {
    if (((E = !1), g(C), !m))
      if (n(c) !== null) (m = !0), ee(k);
      else {
        var D = n(a);
        D !== null && Se(w, D.startTime - C);
      }
  }
  function k(C, D) {
    (m = !1), E && ((E = !1), p(N), (N = -1)), (v = !0);
    var P = d;
    try {
      for (
        g(D), h = n(c);
        h !== null && (!(h.expirationTime > D) || (C && !H()));

      ) {
        var V = h.callback;
        if (typeof V == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var le = V(h.expirationTime <= D);
          (D = e.unstable_now()),
            typeof le == 'function' ? (h.callback = le) : h === n(c) && r(c),
            g(D);
        } else r(c);
        h = n(c);
      }
      if (h !== null) var Zr = !0;
      else {
        var Vt = n(a);
        Vt !== null && Se(w, Vt.startTime - D), (Zr = !1);
      }
      return Zr;
    } finally {
      (h = null), (d = P), (v = !1);
    }
  }
  var b = !1,
    x = null,
    N = -1,
    R = 5,
    I = -1;
  function H() {
    return !(e.unstable_now() - I < R);
  }
  function T() {
    if (x !== null) {
      var C = e.unstable_now();
      I = C;
      var D = !0;
      try {
        D = x(!0, C);
      } finally {
        D ? L() : ((b = !1), (x = null));
      }
    } else b = !1;
  }
  var L;
  if (typeof f == 'function')
    L = function () {
      f(T);
    };
  else if (typeof MessageChannel < 'u') {
    var U = new MessageChannel(),
      X = U.port2;
    (U.port1.onmessage = T),
      (L = function () {
        X.postMessage(null);
      });
  } else
    L = function () {
      S(T, 0);
    };
  function ee(C) {
    (x = C), b || ((b = !0), L());
  }
  function Se(C, D) {
    N = S(function () {
      C(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || v || ((m = !0), ee(k));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (R = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (C) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = d;
      }
      var P = d;
      d = D;
      try {
        return C();
      } finally {
        d = P;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var P = d;
      d = C;
      try {
        return D();
      } finally {
        d = P;
      }
    }),
    (e.unstable_scheduleCallback = function (C, D, P) {
      var V = e.unstable_now();
      switch (
        (typeof P == 'object' && P !== null
          ? ((P = P.delay), (P = typeof P == 'number' && 0 < P ? V + P : V))
          : (P = V),
        C)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = P + le),
        (C = {
          id: u++,
          callback: D,
          priorityLevel: C,
          startTime: P,
          expirationTime: le,
          sortIndex: -1,
        }),
        P > V
          ? ((C.sortIndex = P),
            t(a, C),
            n(c) === null &&
              C === n(a) &&
              (E ? (p(N), (N = -1)) : (E = !0), Se(w, P - V)))
          : ((C.sortIndex = le), t(c, C), m || v || ((m = !0), ee(k))),
        C
      );
    }),
    (e.unstable_shouldYield = H),
    (e.unstable_wrapCallback = function (C) {
      var D = d;
      return function () {
        var P = d;
        d = D;
        try {
          return C.apply(this, arguments);
        } finally {
          d = P;
        }
      };
    });
})(Hu);
zu.exports = Hu;
var cm = zu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bu = q,
  Ue = cm;
function _(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var ju = new Set(),
  Cr = {};
function un(e, t) {
  Fn(e, t), Fn(e + 'Capture', t);
}
function Fn(e, t) {
  for (Cr[e] = t, e = 0; e < t.length; e++) ju.add(t[e]);
}
var St = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  _i = Object.prototype.hasOwnProperty,
  am =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ic = {},
  Dc = {};
function um(e) {
  return _i.call(Dc, e)
    ? !0
    : _i.call(Ic, e)
    ? !1
    : am.test(e)
    ? (Dc[e] = !0)
    : ((Ic[e] = !0), !1);
}
function fm(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function dm(e, t, n, r) {
  if (t === null || typeof t > 'u' || fm(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function be(e, t, n, r, o, s, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = i);
}
var he = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    he[e] = new be(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  he[t] = new be(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  he[e] = new be(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  he[e] = new be(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    he[e] = new be(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  he[e] = new be(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  he[e] = new be(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  he[e] = new be(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  he[e] = new be(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Dl = /[\-:]([a-z])/g;
function Pl(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Dl, Pl);
    he[t] = new be(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Dl, Pl);
    he[t] = new be(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Dl, Pl);
  he[t] = new be(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  he[e] = new be(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new be(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  he[e] = new be(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ml(e, t, n, r) {
  var o = he.hasOwnProperty(t) ? he[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (dm(t, n, o, r) && (n = null),
    r || o === null
      ? um(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var kt = Bu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  no = Symbol.for('react.element'),
  gn = Symbol.for('react.portal'),
  vn = Symbol.for('react.fragment'),
  Ol = Symbol.for('react.strict_mode'),
  Ni = Symbol.for('react.profiler'),
  Vu = Symbol.for('react.provider'),
  Wu = Symbol.for('react.context'),
  Ul = Symbol.for('react.forward_ref'),
  Ci = Symbol.for('react.suspense'),
  Li = Symbol.for('react.suspense_list'),
  Fl = Symbol.for('react.memo'),
  _t = Symbol.for('react.lazy'),
  Gu = Symbol.for('react.offscreen'),
  Pc = Symbol.iterator;
function Zn(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Pc && e[Pc]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var K = Object.assign,
  Ks;
function dr(e) {
  if (Ks === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ks = (t && t[1]) || '';
    }
  return (
    `
` +
    Ks +
    e
  );
}
var Xs = !1;
function Js(e, t) {
  if (!e || Xs) return '';
  Xs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          s = r.stack.split(`
`),
          i = o.length - 1,
          l = s.length - 1;
        1 <= i && 0 <= l && o[i] !== s[l];

      )
        l--;
      for (; 1 <= i && 0 <= l; i--, l--)
        if (o[i] !== s[l]) {
          if (i !== 1 || l !== 1)
            do
              if ((i--, l--, 0 > l || o[i] !== s[l])) {
                var c =
                  `
` + o[i].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    c.includes('<anonymous>') &&
                    (c = c.replace('<anonymous>', e.displayName)),
                  c
                );
              }
            while (1 <= i && 0 <= l);
          break;
        }
    }
  } finally {
    (Xs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? dr(e) : '';
}
function hm(e) {
  switch (e.tag) {
    case 5:
      return dr(e.type);
    case 16:
      return dr('Lazy');
    case 13:
      return dr('Suspense');
    case 19:
      return dr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Js(e.type, !1)), e;
    case 11:
      return (e = Js(e.type.render, !1)), e;
    case 1:
      return (e = Js(e.type, !0)), e;
    default:
      return '';
  }
}
function Ai(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case vn:
      return 'Fragment';
    case gn:
      return 'Portal';
    case Ni:
      return 'Profiler';
    case Ol:
      return 'StrictMode';
    case Ci:
      return 'Suspense';
    case Li:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Wu:
        return (e.displayName || 'Context') + '.Consumer';
      case Vu:
        return (e._context.displayName || 'Context') + '.Provider';
      case Ul:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Fl:
        return (
          (t = e.displayName || null), t !== null ? t : Ai(e.type) || 'Memo'
        );
      case _t:
        (t = e._payload), (e = e._init);
        try {
          return Ai(e(t));
        } catch {}
    }
  return null;
}
function pm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Ai(t);
    case 8:
      return t === Ol ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function Ut(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Qu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function mm(e) {
  var t = Qu(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (i) {
          (r = '' + i), s.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ro(e) {
  e._valueTracker || (e._valueTracker = mm(e));
}
function Ku(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Qu(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Qo(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function $i(e, t) {
  var n = t.checked;
  return K({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Mc(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Xu(e, t) {
  (t = t.checked), t != null && Ml(e, 'checked', t, !1);
}
function qi(e, t) {
  Xu(e, t);
  var n = Ut(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? Ri(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Ri(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Oc(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function Ri(e, t, n) {
  (t !== 'number' || Qo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var hr = Array.isArray;
function $n(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Ut(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ii(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(_(91));
  return K({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Uc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(_(92));
      if (hr(n)) {
        if (1 < n.length) throw Error(_(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function Ju(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Fc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Yu(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Di(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Yu(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var oo,
  Zu = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        oo = oo || document.createElement('div'),
          oo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var yr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(yr).forEach(function (e) {
  gm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (yr[t] = yr[e]);
  });
});
function ef(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (yr.hasOwnProperty(e) && yr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function tf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = ef(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var vm = K(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Pi(e, t) {
  if (t) {
    if (vm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(_(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(_(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(_(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(_(62));
  }
}
function Mi(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Oi = null;
function zl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ui = null,
  qn = null,
  Rn = null;
function zc(e) {
  if ((e = Xr(e))) {
    if (typeof Ui != 'function') throw Error(_(280));
    var t = e.stateNode;
    t && ((t = As(t)), Ui(e.stateNode, e.type, t));
  }
}
function nf(e) {
  qn ? (Rn ? Rn.push(e) : (Rn = [e])) : (qn = e);
}
function rf() {
  if (qn) {
    var e = qn,
      t = Rn;
    if (((Rn = qn = null), zc(e), t)) for (e = 0; e < t.length; e++) zc(t[e]);
  }
}
function of(e, t) {
  return e(t);
}
function sf() {}
var Ys = !1;
function lf(e, t, n) {
  if (Ys) return e(t, n);
  Ys = !0;
  try {
    return of(e, t, n);
  } finally {
    (Ys = !1), (qn !== null || Rn !== null) && (sf(), rf());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = As(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(_(231, t, typeof n));
  return n;
}
var Fi = !1;
if (St)
  try {
    var er = {};
    Object.defineProperty(er, 'passive', {
      get: function () {
        Fi = !0;
      },
    }),
      window.addEventListener('test', er, er),
      window.removeEventListener('test', er, er);
  } catch {
    Fi = !1;
  }
function ym(e, t, n, r, o, s, i, l, c) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (u) {
    this.onError(u);
  }
}
var wr = !1,
  Ko = null,
  Xo = !1,
  zi = null,
  wm = {
    onError: function (e) {
      (wr = !0), (Ko = e);
    },
  };
function Sm(e, t, n, r, o, s, i, l, c) {
  (wr = !1), (Ko = null), ym.apply(wm, arguments);
}
function Em(e, t, n, r, o, s, i, l, c) {
  if ((Sm.apply(this, arguments), wr)) {
    if (wr) {
      var a = Ko;
      (wr = !1), (Ko = null);
    } else throw Error(_(198));
    Xo || ((Xo = !0), (zi = a));
  }
}
function fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function cf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Hc(e) {
  if (fn(e) !== e) throw Error(_(188));
}
function xm(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = fn(e)), t === null)) throw Error(_(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var s = o.alternate;
    if (s === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === s.child) {
      for (s = o.child; s; ) {
        if (s === n) return Hc(o), e;
        if (s === r) return Hc(o), t;
        s = s.sibling;
      }
      throw Error(_(188));
    }
    if (n.return !== r.return) (n = o), (r = s);
    else {
      for (var i = !1, l = o.child; l; ) {
        if (l === n) {
          (i = !0), (n = o), (r = s);
          break;
        }
        if (l === r) {
          (i = !0), (r = o), (n = s);
          break;
        }
        l = l.sibling;
      }
      if (!i) {
        for (l = s.child; l; ) {
          if (l === n) {
            (i = !0), (n = s), (r = o);
            break;
          }
          if (l === r) {
            (i = !0), (r = s), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!i) throw Error(_(189));
      }
    }
    if (n.alternate !== r) throw Error(_(190));
  }
  if (n.tag !== 3) throw Error(_(188));
  return n.stateNode.current === n ? e : t;
}
function af(e) {
  return (e = xm(e)), e !== null ? uf(e) : null;
}
function uf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ff = Ue.unstable_scheduleCallback,
  Bc = Ue.unstable_cancelCallback,
  km = Ue.unstable_shouldYield,
  Tm = Ue.unstable_requestPaint,
  Y = Ue.unstable_now,
  bm = Ue.unstable_getCurrentPriorityLevel,
  Hl = Ue.unstable_ImmediatePriority,
  df = Ue.unstable_UserBlockingPriority,
  Jo = Ue.unstable_NormalPriority,
  _m = Ue.unstable_LowPriority,
  hf = Ue.unstable_IdlePriority,
  _s = null,
  at = null;
function Nm(e) {
  if (at && typeof at.onCommitFiberRoot == 'function')
    try {
      at.onCommitFiberRoot(_s, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : Am,
  Cm = Math.log,
  Lm = Math.LN2;
function Am(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Cm(e) / Lm) | 0)) | 0;
}
var so = 64,
  io = 4194304;
function pr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Yo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    s = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var l = i & ~o;
    l !== 0 ? (r = pr(l)) : ((s &= i), s !== 0 && (r = pr(s)));
  } else (i = n & ~o), i !== 0 ? (r = pr(i)) : s !== 0 && (r = pr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (s = t & -t), o >= s || (o === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - nt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function $m(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var i = 31 - nt(s),
      l = 1 << i,
      c = o[i];
    c === -1
      ? (!(l & n) || l & r) && (o[i] = $m(l, t))
      : c <= t && (e.expiredLanes |= l),
      (s &= ~l);
  }
}
function Hi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function pf() {
  var e = so;
  return (so <<= 1), !(so & 4194240) && (so = 64), e;
}
function Zs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - nt(t)),
    (e[t] = n);
}
function Rm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - nt(n),
      s = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~s);
  }
}
function Bl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - nt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var F = 0;
function mf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gf,
  jl,
  vf,
  yf,
  wf,
  Bi = !1,
  lo = [],
  Rt = null,
  It = null,
  Dt = null,
  $r = new Map(),
  qr = new Map(),
  Ct = [],
  Im =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function jc(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Rt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      It = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Dt = null;
      break;
    case 'pointerover':
    case 'pointerout':
      $r.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      qr.delete(t.pointerId);
  }
}
function tr(e, t, n, r, o, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [o],
      }),
      t !== null && ((t = Xr(t)), t !== null && jl(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Dm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Rt = tr(Rt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (It = tr(It, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Dt = tr(Dt, e, t, n, r, o)), !0;
    case 'pointerover':
      var s = o.pointerId;
      return $r.set(s, tr($r.get(s) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (s = o.pointerId), qr.set(s, tr(qr.get(s) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Sf(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = cf(n)), t !== null)) {
          (e.blockedOn = t),
            wf(e.priority, function () {
              vf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ji(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Oi = r), n.target.dispatchEvent(r), (Oi = null);
    } else return (t = Xr(n)), t !== null && jl(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Vc(e, t, n) {
  Ao(e) && n.delete(t);
}
function Pm() {
  (Bi = !1),
    Rt !== null && Ao(Rt) && (Rt = null),
    It !== null && Ao(It) && (It = null),
    Dt !== null && Ao(Dt) && (Dt = null),
    $r.forEach(Vc),
    qr.forEach(Vc);
}
function nr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Bi ||
      ((Bi = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, Pm)));
}
function Rr(e) {
  function t(o) {
    return nr(o, e);
  }
  if (0 < lo.length) {
    nr(lo[0], e);
    for (var n = 1; n < lo.length; n++) {
      var r = lo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && nr(Rt, e),
      It !== null && nr(It, e),
      Dt !== null && nr(Dt, e),
      $r.forEach(t),
      qr.forEach(t),
      n = 0;
    n < Ct.length;
    n++
  )
    (r = Ct[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ct.length && ((n = Ct[0]), n.blockedOn === null); )
    Sf(n), n.blockedOn === null && Ct.shift();
}
var In = kt.ReactCurrentBatchConfig,
  Zo = !0;
function Mm(e, t, n, r) {
  var o = F,
    s = In.transition;
  In.transition = null;
  try {
    (F = 1), Vl(e, t, n, r);
  } finally {
    (F = o), (In.transition = s);
  }
}
function Om(e, t, n, r) {
  var o = F,
    s = In.transition;
  In.transition = null;
  try {
    (F = 4), Vl(e, t, n, r);
  } finally {
    (F = o), (In.transition = s);
  }
}
function Vl(e, t, n, r) {
  if (Zo) {
    var o = ji(e, t, n, r);
    if (o === null) ai(e, t, r, es, n), jc(e, r);
    else if (Dm(o, e, t, n, r)) r.stopPropagation();
    else if ((jc(e, r), t & 4 && -1 < Im.indexOf(e))) {
      for (; o !== null; ) {
        var s = Xr(o);
        if (
          (s !== null && gf(s),
          (s = ji(e, t, n, r)),
          s === null && ai(e, t, r, es, n),
          s === o)
        )
          break;
        o = s;
      }
      o !== null && r.stopPropagation();
    } else ai(e, t, r, null, n);
  }
}
var es = null;
function ji(e, t, n, r) {
  if (((es = null), (e = zl(r)), (e = Jt(e)), e !== null))
    if (((t = fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = cf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (es = e), null;
}
function Ef(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (bm()) {
        case Hl:
          return 1;
        case df:
          return 4;
        case Jo:
        case _m:
          return 16;
        case hf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  Wl = null,
  $o = null;
function xf() {
  if ($o) return $o;
  var e,
    t = Wl,
    n = t.length,
    r,
    o = 'value' in $t ? $t.value : $t.textContent,
    s = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === o[s - r]; r++);
  return ($o = o.slice(e, 1 < r ? 1 - r : void 0));
}
function qo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function co() {
  return !0;
}
function Wc() {
  return !1;
}
function ze(e) {
  function t(n, r, o, s, i) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = i),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(s) : s[l]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? co
        : Wc),
      (this.isPropagationStopped = Wc),
      this
    );
  }
  return (
    K(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = co));
      },
      persist: function () {},
      isPersistent: co,
    }),
    t
  );
}
var Qn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Gl = ze(Qn),
  Kr = K({}, Qn, { view: 0, detail: 0 }),
  Um = ze(Kr),
  ei,
  ti,
  rr,
  Ns = K({}, Kr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ql,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== rr &&
            (rr && e.type === 'mousemove'
              ? ((ei = e.screenX - rr.screenX), (ti = e.screenY - rr.screenY))
              : (ti = ei = 0),
            (rr = e)),
          ei);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : ti;
    },
  }),
  Gc = ze(Ns),
  Fm = K({}, Ns, { dataTransfer: 0 }),
  zm = ze(Fm),
  Hm = K({}, Kr, { relatedTarget: 0 }),
  ni = ze(Hm),
  Bm = K({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  jm = ze(Bm),
  Vm = K({}, Qn, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wm = ze(Vm),
  Gm = K({}, Qn, { data: 0 }),
  Qc = ze(Gm),
  Qm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Km = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Xm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Jm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Xm[e]) ? !!t[e] : !1;
}
function Ql() {
  return Jm;
}
var Ym = K({}, Kr, {
    key: function (e) {
      if (e.key) {
        var t = Qm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = qo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Km[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ql,
    charCode: function (e) {
      return e.type === 'keypress' ? qo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? qo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Zm = ze(Ym),
  eg = K({}, Ns, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Kc = ze(eg),
  tg = K({}, Kr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ql,
  }),
  ng = ze(tg),
  rg = K({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  og = ze(rg),
  sg = K({}, Ns, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ig = ze(sg),
  lg = [9, 13, 27, 32],
  Kl = St && 'CompositionEvent' in window,
  Sr = null;
St && 'documentMode' in document && (Sr = document.documentMode);
var cg = St && 'TextEvent' in window && !Sr,
  kf = St && (!Kl || (Sr && 8 < Sr && 11 >= Sr)),
  Xc = String.fromCharCode(32),
  Jc = !1;
function Tf(e, t) {
  switch (e) {
    case 'keyup':
      return lg.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function bf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var yn = !1;
function ag(e, t) {
  switch (e) {
    case 'compositionend':
      return bf(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Jc = !0), Xc);
    case 'textInput':
      return (e = t.data), e === Xc && Jc ? null : e;
    default:
      return null;
  }
}
function ug(e, t) {
  if (yn)
    return e === 'compositionend' || (!Kl && Tf(e, t))
      ? ((e = xf()), ($o = Wl = $t = null), (yn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return kf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var fg = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!fg[e.type] : t === 'textarea';
}
function _f(e, t, n, r) {
  nf(r),
    (t = ts(t, 'onChange')),
    0 < t.length &&
      ((n = new Gl('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Er = null,
  Ir = null;
function dg(e) {
  Mf(e, 0);
}
function Cs(e) {
  var t = En(e);
  if (Ku(t)) return e;
}
function hg(e, t) {
  if (e === 'change') return t;
}
var Nf = !1;
if (St) {
  var ri;
  if (St) {
    var oi = 'oninput' in document;
    if (!oi) {
      var Zc = document.createElement('div');
      Zc.setAttribute('oninput', 'return;'),
        (oi = typeof Zc.oninput == 'function');
    }
    ri = oi;
  } else ri = !1;
  Nf = ri && (!document.documentMode || 9 < document.documentMode);
}
function ea() {
  Er && (Er.detachEvent('onpropertychange', Cf), (Ir = Er = null));
}
function Cf(e) {
  if (e.propertyName === 'value' && Cs(Ir)) {
    var t = [];
    _f(t, Ir, e, zl(e)), lf(dg, t);
  }
}
function pg(e, t, n) {
  e === 'focusin'
    ? (ea(), (Er = t), (Ir = n), Er.attachEvent('onpropertychange', Cf))
    : e === 'focusout' && ea();
}
function mg(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Cs(Ir);
}
function gg(e, t) {
  if (e === 'click') return Cs(t);
}
function vg(e, t) {
  if (e === 'input' || e === 'change') return Cs(t);
}
function yg(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var rt = typeof Object.is == 'function' ? Object.is : yg;
function Dr(e, t) {
  if (rt(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!_i.call(t, o) || !rt(e[o], t[o])) return !1;
  }
  return !0;
}
function ta(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function na(e, t) {
  var n = ta(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ta(n);
  }
}
function Lf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Lf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Af() {
  for (var e = window, t = Qo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qo(e.document);
  }
  return t;
}
function Xl(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function wg(e) {
  var t = Af(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Lf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Xl(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          s = Math.min(r.start, o);
        (r = r.end === void 0 ? s : Math.min(r.end, o)),
          !e.extend && s > r && ((o = r), (r = s), (s = o)),
          (o = na(n, s));
        var i = na(n, r);
        o &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sg = St && 'documentMode' in document && 11 >= document.documentMode,
  wn = null,
  Vi = null,
  xr = null,
  Wi = !1;
function ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wi ||
    wn == null ||
    wn !== Qo(r) ||
    ((r = wn),
    'selectionStart' in r && Xl(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (xr && Dr(xr, r)) ||
      ((xr = r),
      (r = ts(Vi, 'onSelect')),
      0 < r.length &&
        ((t = new Gl('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = wn))));
}
function ao(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Sn = {
    animationend: ao('Animation', 'AnimationEnd'),
    animationiteration: ao('Animation', 'AnimationIteration'),
    animationstart: ao('Animation', 'AnimationStart'),
    transitionend: ao('Transition', 'TransitionEnd'),
  },
  si = {},
  $f = {};
St &&
  (($f = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Sn.animationend.animation,
    delete Sn.animationiteration.animation,
    delete Sn.animationstart.animation),
  'TransitionEvent' in window || delete Sn.transitionend.transition);
function Ls(e) {
  if (si[e]) return si[e];
  if (!Sn[e]) return e;
  var t = Sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in $f) return (si[e] = t[n]);
  return e;
}
var qf = Ls('animationend'),
  Rf = Ls('animationiteration'),
  If = Ls('animationstart'),
  Df = Ls('transitionend'),
  Pf = new Map(),
  oa =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function Ht(e, t) {
  Pf.set(e, t), un(t, [e]);
}
for (var ii = 0; ii < oa.length; ii++) {
  var li = oa[ii],
    Eg = li.toLowerCase(),
    xg = li[0].toUpperCase() + li.slice(1);
  Ht(Eg, 'on' + xg);
}
Ht(qf, 'onAnimationEnd');
Ht(Rf, 'onAnimationIteration');
Ht(If, 'onAnimationStart');
Ht('dblclick', 'onDoubleClick');
Ht('focusin', 'onFocus');
Ht('focusout', 'onBlur');
Ht(Df, 'onTransitionEnd');
Fn('onMouseEnter', ['mouseout', 'mouseover']);
Fn('onMouseLeave', ['mouseout', 'mouseover']);
Fn('onPointerEnter', ['pointerout', 'pointerover']);
Fn('onPointerLeave', ['pointerout', 'pointerover']);
un(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
un(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
un('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
un(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
un(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
un(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var mr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  kg = new Set('cancel close invalid load scroll toggle'.split(' ').concat(mr));
function sa(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Em(r, t, void 0, e), (e.currentTarget = null);
}
function Mf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var l = r[i],
            c = l.instance,
            a = l.currentTarget;
          if (((l = l.listener), c !== s && o.isPropagationStopped())) break e;
          sa(o, l, a), (s = c);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((l = r[i]),
            (c = l.instance),
            (a = l.currentTarget),
            (l = l.listener),
            c !== s && o.isPropagationStopped())
          )
            break e;
          sa(o, l, a), (s = c);
        }
    }
  }
  if (Xo) throw ((e = zi), (Xo = !1), (zi = null), e);
}
function B(e, t) {
  var n = t[Ji];
  n === void 0 && (n = t[Ji] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Of(t, e, 2, !1), n.add(r));
}
function ci(e, t, n) {
  var r = 0;
  t && (r |= 4), Of(n, e, r, t);
}
var uo = '_reactListening' + Math.random().toString(36).slice(2);
function Pr(e) {
  if (!e[uo]) {
    (e[uo] = !0),
      ju.forEach(function (n) {
        n !== 'selectionchange' && (kg.has(n) || ci(n, !1, e), ci(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[uo] || ((t[uo] = !0), ci('selectionchange', !1, t));
  }
}
function Of(e, t, n, r) {
  switch (Ef(t)) {
    case 1:
      var o = Mm;
      break;
    case 4:
      o = Om;
      break;
    default:
      o = Vl;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Fi ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function ai(e, t, n, r, o) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var c = i.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = i.stateNode.containerInfo),
              c === o || (c.nodeType === 8 && c.parentNode === o))
            )
              return;
            i = i.return;
          }
        for (; l !== null; ) {
          if (((i = Jt(l)), i === null)) return;
          if (((c = i.tag), c === 5 || c === 6)) {
            r = s = i;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  lf(function () {
    var a = s,
      u = zl(n),
      h = [];
    e: {
      var d = Pf.get(e);
      if (d !== void 0) {
        var v = Gl,
          m = e;
        switch (e) {
          case 'keypress':
            if (qo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            v = Zm;
            break;
          case 'focusin':
            (m = 'focus'), (v = ni);
            break;
          case 'focusout':
            (m = 'blur'), (v = ni);
            break;
          case 'beforeblur':
          case 'afterblur':
            v = ni;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            v = Gc;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            v = zm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            v = ng;
            break;
          case qf:
          case Rf:
          case If:
            v = jm;
            break;
          case Df:
            v = og;
            break;
          case 'scroll':
            v = Um;
            break;
          case 'wheel':
            v = ig;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            v = Wm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            v = Kc;
        }
        var E = (t & 4) !== 0,
          S = !E && e === 'scroll',
          p = E ? (d !== null ? d + 'Capture' : null) : d;
        E = [];
        for (var f = a, g; f !== null; ) {
          g = f;
          var w = g.stateNode;
          if (
            (g.tag === 5 &&
              w !== null &&
              ((g = w),
              p !== null && ((w = Ar(f, p)), w != null && E.push(Mr(f, w, g)))),
            S)
          )
            break;
          f = f.return;
        }
        0 < E.length &&
          ((d = new v(d, m, null, n, u)), h.push({ event: d, listeners: E }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (v = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Oi &&
            (m = n.relatedTarget || n.fromElement) &&
            (Jt(m) || m[Et]))
        )
          break e;
        if (
          (v || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          v
            ? ((m = n.relatedTarget || n.toElement),
              (v = a),
              (m = m ? Jt(m) : null),
              m !== null &&
                ((S = fn(m)), m !== S || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((v = null), (m = a)),
          v !== m)
        ) {
          if (
            ((E = Gc),
            (w = 'onMouseLeave'),
            (p = 'onMouseEnter'),
            (f = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((E = Kc),
              (w = 'onPointerLeave'),
              (p = 'onPointerEnter'),
              (f = 'pointer')),
            (S = v == null ? d : En(v)),
            (g = m == null ? d : En(m)),
            (d = new E(w, f + 'leave', v, n, u)),
            (d.target = S),
            (d.relatedTarget = g),
            (w = null),
            Jt(u) === a &&
              ((E = new E(p, f + 'enter', m, n, u)),
              (E.target = g),
              (E.relatedTarget = S),
              (w = E)),
            (S = w),
            v && m)
          )
            t: {
              for (E = v, p = m, f = 0, g = E; g; g = dn(g)) f++;
              for (g = 0, w = p; w; w = dn(w)) g++;
              for (; 0 < f - g; ) (E = dn(E)), f--;
              for (; 0 < g - f; ) (p = dn(p)), g--;
              for (; f--; ) {
                if (E === p || (p !== null && E === p.alternate)) break t;
                (E = dn(E)), (p = dn(p));
              }
              E = null;
            }
          else E = null;
          v !== null && ia(h, d, v, E, !1),
            m !== null && S !== null && ia(h, S, m, E, !0);
        }
      }
      e: {
        if (
          ((d = a ? En(a) : window),
          (v = d.nodeName && d.nodeName.toLowerCase()),
          v === 'select' || (v === 'input' && d.type === 'file'))
        )
          var k = hg;
        else if (Yc(d))
          if (Nf) k = vg;
          else {
            k = mg;
            var b = pg;
          }
        else
          (v = d.nodeName) &&
            v.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (k = gg);
        if (k && (k = k(e, a))) {
          _f(h, k, n, u);
          break e;
        }
        b && b(e, d, a),
          e === 'focusout' &&
            (b = d._wrapperState) &&
            b.controlled &&
            d.type === 'number' &&
            Ri(d, 'number', d.value);
      }
      switch (((b = a ? En(a) : window), e)) {
        case 'focusin':
          (Yc(b) || b.contentEditable === 'true') &&
            ((wn = b), (Vi = a), (xr = null));
          break;
        case 'focusout':
          xr = Vi = wn = null;
          break;
        case 'mousedown':
          Wi = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Wi = !1), ra(h, n, u);
          break;
        case 'selectionchange':
          if (Sg) break;
        case 'keydown':
        case 'keyup':
          ra(h, n, u);
      }
      var x;
      if (Kl)
        e: {
          switch (e) {
            case 'compositionstart':
              var N = 'onCompositionStart';
              break e;
            case 'compositionend':
              N = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              N = 'onCompositionUpdate';
              break e;
          }
          N = void 0;
        }
      else
        yn
          ? Tf(e, n) && (N = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (N = 'onCompositionStart');
      N &&
        (kf &&
          n.locale !== 'ko' &&
          (yn || N !== 'onCompositionStart'
            ? N === 'onCompositionEnd' && yn && (x = xf())
            : (($t = u),
              (Wl = 'value' in $t ? $t.value : $t.textContent),
              (yn = !0))),
        (b = ts(a, N)),
        0 < b.length &&
          ((N = new Qc(N, e, null, n, u)),
          h.push({ event: N, listeners: b }),
          x ? (N.data = x) : ((x = bf(n)), x !== null && (N.data = x)))),
        (x = cg ? ag(e, n) : ug(e, n)) &&
          ((a = ts(a, 'onBeforeInput')),
          0 < a.length &&
            ((u = new Qc('onBeforeInput', 'beforeinput', null, n, u)),
            h.push({ event: u, listeners: a }),
            (u.data = x)));
    }
    Mf(h, t);
  });
}
function Mr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ts(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      s = o.stateNode;
    o.tag === 5 &&
      s !== null &&
      ((o = s),
      (s = Ar(e, n)),
      s != null && r.unshift(Mr(e, s, o)),
      (s = Ar(e, t)),
      s != null && r.push(Mr(e, s, o))),
      (e = e.return);
  }
  return r;
}
function dn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ia(e, t, n, r, o) {
  for (var s = t._reactName, i = []; n !== null && n !== r; ) {
    var l = n,
      c = l.alternate,
      a = l.stateNode;
    if (c !== null && c === r) break;
    l.tag === 5 &&
      a !== null &&
      ((l = a),
      o
        ? ((c = Ar(n, s)), c != null && i.unshift(Mr(n, c, l)))
        : o || ((c = Ar(n, s)), c != null && i.push(Mr(n, c, l)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Tg = /\r\n?/g,
  bg = /\u0000|\uFFFD/g;
function la(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Tg,
      `
`
    )
    .replace(bg, '');
}
function fo(e, t, n) {
  if (((t = la(t)), la(e) !== t && n)) throw Error(_(425));
}
function ns() {}
var Gi = null,
  Qi = null;
function Ki(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Xi = typeof setTimeout == 'function' ? setTimeout : void 0,
  _g = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ca = typeof Promise == 'function' ? Promise : void 0,
  Ng =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ca < 'u'
      ? function (e) {
          return ca.resolve(null).then(e).catch(Cg);
        }
      : Xi;
function Cg(e) {
  setTimeout(function () {
    throw e;
  });
}
function ui(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Rr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Rr(t);
}
function mt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function aa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kn = Math.random().toString(36).slice(2),
  it = '__reactFiber$' + Kn,
  Or = '__reactProps$' + Kn,
  Et = '__reactContainer$' + Kn,
  Ji = '__reactEvents$' + Kn,
  Lg = '__reactListeners$' + Kn,
  Ag = '__reactHandles$' + Kn;
function Jt(e) {
  var t = e[it];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Et] || n[it])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = aa(e); e !== null; ) {
          if ((n = e[it])) return n;
          e = aa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Xr(e) {
  return (
    (e = e[it] || e[Et]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function En(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(_(33));
}
function As(e) {
  return e[Or] || null;
}
var Yi = [],
  xn = -1;
function Bt(e) {
  return { current: e };
}
function j(e) {
  0 > xn || ((e.current = Yi[xn]), (Yi[xn] = null), xn--);
}
function z(e, t) {
  xn++, (Yi[xn] = e.current), (e.current = t);
}
var Ft = {},
  we = Bt(Ft),
  $e = Bt(!1),
  nn = Ft;
function zn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    s;
  for (s in n) o[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function qe(e) {
  return (e = e.childContextTypes), e != null;
}
function rs() {
  j($e), j(we);
}
function ua(e, t, n) {
  if (we.current !== Ft) throw Error(_(168));
  z(we, t), z($e, n);
}
function Uf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(_(108, pm(e) || 'Unknown', o));
  return K({}, n, r);
}
function os(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ft),
    (nn = we.current),
    z(we, e),
    z($e, $e.current),
    !0
  );
}
function fa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(_(169));
  n
    ? ((e = Uf(e, t, nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      j($e),
      j(we),
      z(we, e))
    : j($e),
    z($e, n);
}
var pt = null,
  $s = !1,
  fi = !1;
function Ff(e) {
  pt === null ? (pt = [e]) : pt.push(e);
}
function $g(e) {
  ($s = !0), Ff(e);
}
function jt() {
  if (!fi && pt !== null) {
    fi = !0;
    var e = 0,
      t = F;
    try {
      var n = pt;
      for (F = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (pt = null), ($s = !1);
    } catch (o) {
      throw (pt !== null && (pt = pt.slice(e + 1)), ff(Hl, jt), o);
    } finally {
      (F = t), (fi = !1);
    }
  }
  return null;
}
var qg = kt.ReactCurrentBatchConfig;
function Ye(e, t) {
  if (e && e.defaultProps) {
    (t = K({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ss = Bt(null),
  is = null,
  kn = null,
  Jl = null;
function Yl() {
  Jl = kn = is = null;
}
function Zl(e) {
  var t = ss.current;
  j(ss), (e._currentValue = t);
}
function Zi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Dn(e, t) {
  (is = e),
    (Jl = kn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function Ge(e) {
  var t = e._currentValue;
  if (Jl !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), kn === null)) {
      if (is === null) throw Error(_(308));
      (kn = e), (is.dependencies = { lanes: 0, firstContext: e });
    } else kn = kn.next = e;
  return t;
}
var tt = null,
  Nt = !1;
function ec(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function zf(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function yt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Pt(e, t) {
  var n = e.updateQueue;
  n !== null &&
    ((n = n.shared),
    Ad(e)
      ? ((e = n.interleaved),
        e === null
          ? ((t.next = t), tt === null ? (tt = [n]) : tt.push(n))
          : ((t.next = e.next), (e.next = t)),
        (n.interleaved = t))
      : ((e = n.pending),
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (n.pending = t)));
}
function Ro(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bl(e, n);
  }
}
function da(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (o = s = i) : (s = s.next = i), (n = n.next);
      } while (n !== null);
      s === null ? (o = s = t) : (s = s.next = t);
    } else o = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ls(e, t, n, r) {
  var o = e.updateQueue;
  Nt = !1;
  var s = o.firstBaseUpdate,
    i = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var c = l,
      a = c.next;
    (c.next = null), i === null ? (s = a) : (i.next = a), (i = c);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (l = u.lastBaseUpdate),
      l !== i &&
        (l === null ? (u.firstBaseUpdate = a) : (l.next = a),
        (u.lastBaseUpdate = c)));
  }
  if (s !== null) {
    var h = o.baseState;
    (i = 0), (u = a = c = null), (l = s);
    do {
      var d = l.lane,
        v = l.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: v,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var m = e,
            E = l;
          switch (((d = t), (v = n), E.tag)) {
            case 1:
              if (((m = E.payload), typeof m == 'function')) {
                h = m.call(v, h, d);
                break e;
              }
              h = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = E.payload),
                (d = typeof m == 'function' ? m.call(v, h, d) : m),
                d == null)
              )
                break e;
              h = K({}, h, d);
              break e;
            case 2:
              Nt = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [l]) : d.push(l));
      } else
        (v = {
          eventTime: v,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          u === null ? ((a = u = v), (c = h)) : (u = u.next = v),
          (i |= d);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (c = h),
      (o.baseState = c),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = u),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (i |= o.lane), (o = o.next);
      while (o !== t);
    } else s === null && (o.shared.lanes = 0);
    (sn |= i), (e.lanes = i), (e.memoizedState = h);
  }
}
function ha(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(_(191, o));
        o.call(r);
      }
    }
}
var Hf = new Bu.Component().refs;
function el(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : K({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      o = Ot(e),
      s = yt(r, o);
    (s.payload = t),
      n != null && (s.callback = n),
      Pt(e, s),
      (t = We(e, o, r)),
      t !== null && Ro(t, e, o);
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      o = Ot(e),
      s = yt(r, o);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      Pt(e, s),
      (t = We(e, o, r)),
      t !== null && Ro(t, e, o);
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Ot(e),
      o = yt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      Pt(e, o),
      (t = We(e, r, n)),
      t !== null && Ro(t, e, r);
  },
};
function pa(e, t, n, r, o, s, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, s, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Dr(n, r) || !Dr(o, s)
      : !0
  );
}
function Bf(e, t, n) {
  var r = !1,
    o = Ft,
    s = t.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = Ge(s))
      : ((o = qe(t) ? nn : we.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? zn(e, o) : Ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function ma(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qs.enqueueReplaceState(t, t.state, null);
}
function tl(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Hf), ec(e);
  var s = t.contextType;
  typeof s == 'object' && s !== null
    ? (o.context = Ge(s))
    : ((s = qe(t) ? nn : we.current), (o.context = zn(e, s))),
    (o.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == 'function' && (el(e, t, s, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && qs.enqueueReplaceState(o, o.state, null),
      ls(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
var Tn = [],
  bn = 0,
  cs = null,
  as = 0,
  He = [],
  Be = 0,
  rn = null,
  gt = 1,
  vt = '';
function Qt(e, t) {
  (Tn[bn++] = as), (Tn[bn++] = cs), (cs = e), (as = t);
}
function jf(e, t, n) {
  (He[Be++] = gt), (He[Be++] = vt), (He[Be++] = rn), (rn = e);
  var r = gt;
  e = vt;
  var o = 32 - nt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var s = 32 - nt(t) + o;
  if (30 < s) {
    var i = o - (o % 5);
    (s = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (o -= i),
      (gt = (1 << (32 - nt(t) + o)) | (n << o) | r),
      (vt = s + e);
  } else (gt = (1 << s) | (n << o) | r), (vt = e);
}
function tc(e) {
  e.return !== null && (Qt(e, 1), jf(e, 1, 0));
}
function nc(e) {
  for (; e === cs; )
    (cs = Tn[--bn]), (Tn[bn] = null), (as = Tn[--bn]), (Tn[bn] = null);
  for (; e === rn; )
    (rn = He[--Be]),
      (He[Be] = null),
      (vt = He[--Be]),
      (He[Be] = null),
      (gt = He[--Be]),
      (He[Be] = null);
}
var Oe = null,
  Ce = null,
  W = !1,
  et = null;
function Vf(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ga(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Oe = e), (Ce = mt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Oe = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rn !== null ? { id: gt, overflow: vt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Oe = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function nl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function rl(e) {
  if (W) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!ga(e, t)) {
        if (nl(e)) throw Error(_(418));
        t = mt(n.nextSibling);
        var r = Oe;
        t && ga(e, t)
          ? Vf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (W = !1), (Oe = e));
      }
    } else {
      if (nl(e)) throw Error(_(418));
      (e.flags = (e.flags & -4097) | 2), (W = !1), (Oe = e);
    }
  }
}
function va(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Oe = e;
}
function or(e) {
  if (e !== Oe) return !1;
  if (!W) return va(e), (W = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ki(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (nl(e)) {
      for (e = Ce; e; ) e = mt(e.nextSibling);
      throw Error(_(418));
    }
    for (; t; ) Vf(e, t), (t = mt(t.nextSibling));
  }
  if ((va(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(_(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ce = mt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Oe ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Hn() {
  (Ce = Oe = null), (W = !1);
}
function rc(e) {
  et === null ? (et = [e]) : et.push(e);
}
function sr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(_(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(_(147, e));
      var o = r,
        s = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (i) {
            var l = o.refs;
            l === Hf && (l = o.refs = {}),
              i === null ? delete l[s] : (l[s] = i);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != 'string') throw Error(_(284));
    if (!n._owner) throw Error(_(290, e));
  }
  return e;
}
function ho(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      _(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ya(e) {
  var t = e._init;
  return t(e._payload);
}
function Wf(e) {
  function t(p, f) {
    if (e) {
      var g = p.deletions;
      g === null ? ((p.deletions = [f]), (p.flags |= 16)) : g.push(f);
    }
  }
  function n(p, f) {
    if (!e) return null;
    for (; f !== null; ) t(p, f), (f = f.sibling);
    return null;
  }
  function r(p, f) {
    for (p = new Map(); f !== null; )
      f.key !== null ? p.set(f.key, f) : p.set(f.index, f), (f = f.sibling);
    return p;
  }
  function o(p, f) {
    return (p = zt(p, f)), (p.index = 0), (p.sibling = null), p;
  }
  function s(p, f, g) {
    return (
      (p.index = g),
      e
        ? ((g = p.alternate),
          g !== null
            ? ((g = g.index), g < f ? ((p.flags |= 2), f) : g)
            : ((p.flags |= 2), f))
        : ((p.flags |= 1048576), f)
    );
  }
  function i(p) {
    return e && p.alternate === null && (p.flags |= 2), p;
  }
  function l(p, f, g, w) {
    return f === null || f.tag !== 6
      ? ((f = vi(g, p.mode, w)), (f.return = p), f)
      : ((f = o(f, g)), (f.return = p), f);
  }
  function c(p, f, g, w) {
    var k = g.type;
    return k === vn
      ? u(p, f, g.props.children, w, g.key)
      : f !== null &&
        (f.elementType === k ||
          (typeof k == 'object' &&
            k !== null &&
            k.$$typeof === _t &&
            ya(k) === f.type))
      ? ((w = o(f, g.props)), (w.ref = sr(p, f, g)), (w.return = p), w)
      : ((w = Oo(g.type, g.key, g.props, null, p.mode, w)),
        (w.ref = sr(p, f, g)),
        (w.return = p),
        w);
  }
  function a(p, f, g, w) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== g.containerInfo ||
      f.stateNode.implementation !== g.implementation
      ? ((f = yi(g, p.mode, w)), (f.return = p), f)
      : ((f = o(f, g.children || [])), (f.return = p), f);
  }
  function u(p, f, g, w, k) {
    return f === null || f.tag !== 7
      ? ((f = en(g, p.mode, w, k)), (f.return = p), f)
      : ((f = o(f, g)), (f.return = p), f);
  }
  function h(p, f, g) {
    if ((typeof f == 'string' && f !== '') || typeof f == 'number')
      return (f = vi('' + f, p.mode, g)), (f.return = p), f;
    if (typeof f == 'object' && f !== null) {
      switch (f.$$typeof) {
        case no:
          return (
            (g = Oo(f.type, f.key, f.props, null, p.mode, g)),
            (g.ref = sr(p, null, f)),
            (g.return = p),
            g
          );
        case gn:
          return (f = yi(f, p.mode, g)), (f.return = p), f;
        case _t:
          var w = f._init;
          return h(p, w(f._payload), g);
      }
      if (hr(f) || Zn(f))
        return (f = en(f, p.mode, g, null)), (f.return = p), f;
      ho(p, f);
    }
    return null;
  }
  function d(p, f, g, w) {
    var k = f !== null ? f.key : null;
    if ((typeof g == 'string' && g !== '') || typeof g == 'number')
      return k !== null ? null : l(p, f, '' + g, w);
    if (typeof g == 'object' && g !== null) {
      switch (g.$$typeof) {
        case no:
          return g.key === k ? c(p, f, g, w) : null;
        case gn:
          return g.key === k ? a(p, f, g, w) : null;
        case _t:
          return (k = g._init), d(p, f, k(g._payload), w);
      }
      if (hr(g) || Zn(g)) return k !== null ? null : u(p, f, g, w, null);
      ho(p, g);
    }
    return null;
  }
  function v(p, f, g, w, k) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (p = p.get(g) || null), l(f, p, '' + w, k);
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case no:
          return (p = p.get(w.key === null ? g : w.key) || null), c(f, p, w, k);
        case gn:
          return (p = p.get(w.key === null ? g : w.key) || null), a(f, p, w, k);
        case _t:
          var b = w._init;
          return v(p, f, g, b(w._payload), k);
      }
      if (hr(w) || Zn(w)) return (p = p.get(g) || null), u(f, p, w, k, null);
      ho(f, w);
    }
    return null;
  }
  function m(p, f, g, w) {
    for (
      var k = null, b = null, x = f, N = (f = 0), R = null;
      x !== null && N < g.length;
      N++
    ) {
      x.index > N ? ((R = x), (x = null)) : (R = x.sibling);
      var I = d(p, x, g[N], w);
      if (I === null) {
        x === null && (x = R);
        break;
      }
      e && x && I.alternate === null && t(p, x),
        (f = s(I, f, N)),
        b === null ? (k = I) : (b.sibling = I),
        (b = I),
        (x = R);
    }
    if (N === g.length) return n(p, x), W && Qt(p, N), k;
    if (x === null) {
      for (; N < g.length; N++)
        (x = h(p, g[N], w)),
          x !== null &&
            ((f = s(x, f, N)), b === null ? (k = x) : (b.sibling = x), (b = x));
      return W && Qt(p, N), k;
    }
    for (x = r(p, x); N < g.length; N++)
      (R = v(x, p, N, g[N], w)),
        R !== null &&
          (e && R.alternate !== null && x.delete(R.key === null ? N : R.key),
          (f = s(R, f, N)),
          b === null ? (k = R) : (b.sibling = R),
          (b = R));
    return (
      e &&
        x.forEach(function (H) {
          return t(p, H);
        }),
      W && Qt(p, N),
      k
    );
  }
  function E(p, f, g, w) {
    var k = Zn(g);
    if (typeof k != 'function') throw Error(_(150));
    if (((g = k.call(g)), g == null)) throw Error(_(151));
    for (
      var b = (k = null), x = f, N = (f = 0), R = null, I = g.next();
      x !== null && !I.done;
      N++, I = g.next()
    ) {
      x.index > N ? ((R = x), (x = null)) : (R = x.sibling);
      var H = d(p, x, I.value, w);
      if (H === null) {
        x === null && (x = R);
        break;
      }
      e && x && H.alternate === null && t(p, x),
        (f = s(H, f, N)),
        b === null ? (k = H) : (b.sibling = H),
        (b = H),
        (x = R);
    }
    if (I.done) return n(p, x), W && Qt(p, N), k;
    if (x === null) {
      for (; !I.done; N++, I = g.next())
        (I = h(p, I.value, w)),
          I !== null &&
            ((f = s(I, f, N)), b === null ? (k = I) : (b.sibling = I), (b = I));
      return W && Qt(p, N), k;
    }
    for (x = r(p, x); !I.done; N++, I = g.next())
      (I = v(x, p, N, I.value, w)),
        I !== null &&
          (e && I.alternate !== null && x.delete(I.key === null ? N : I.key),
          (f = s(I, f, N)),
          b === null ? (k = I) : (b.sibling = I),
          (b = I));
    return (
      e &&
        x.forEach(function (T) {
          return t(p, T);
        }),
      W && Qt(p, N),
      k
    );
  }
  function S(p, f, g, w) {
    if (
      (typeof g == 'object' &&
        g !== null &&
        g.type === vn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == 'object' && g !== null)
    ) {
      switch (g.$$typeof) {
        case no:
          e: {
            for (var k = g.key, b = f; b !== null; ) {
              if (b.key === k) {
                if (((k = g.type), k === vn)) {
                  if (b.tag === 7) {
                    n(p, b.sibling),
                      (f = o(b, g.props.children)),
                      (f.return = p),
                      (p = f);
                    break e;
                  }
                } else if (
                  b.elementType === k ||
                  (typeof k == 'object' &&
                    k !== null &&
                    k.$$typeof === _t &&
                    ya(k) === b.type)
                ) {
                  n(p, b.sibling),
                    (f = o(b, g.props)),
                    (f.ref = sr(p, b, g)),
                    (f.return = p),
                    (p = f);
                  break e;
                }
                n(p, b);
                break;
              } else t(p, b);
              b = b.sibling;
            }
            g.type === vn
              ? ((f = en(g.props.children, p.mode, w, g.key)),
                (f.return = p),
                (p = f))
              : ((w = Oo(g.type, g.key, g.props, null, p.mode, w)),
                (w.ref = sr(p, f, g)),
                (w.return = p),
                (p = w));
          }
          return i(p);
        case gn:
          e: {
            for (b = g.key; f !== null; ) {
              if (f.key === b)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === g.containerInfo &&
                  f.stateNode.implementation === g.implementation
                ) {
                  n(p, f.sibling),
                    (f = o(f, g.children || [])),
                    (f.return = p),
                    (p = f);
                  break e;
                } else {
                  n(p, f);
                  break;
                }
              else t(p, f);
              f = f.sibling;
            }
            (f = yi(g, p.mode, w)), (f.return = p), (p = f);
          }
          return i(p);
        case _t:
          return (b = g._init), S(p, f, b(g._payload), w);
      }
      if (hr(g)) return m(p, f, g, w);
      if (Zn(g)) return E(p, f, g, w);
      ho(p, g);
    }
    return (typeof g == 'string' && g !== '') || typeof g == 'number'
      ? ((g = '' + g),
        f !== null && f.tag === 6
          ? (n(p, f.sibling), (f = o(f, g)), (f.return = p), (p = f))
          : (n(p, f), (f = vi(g, p.mode, w)), (f.return = p), (p = f)),
        i(p))
      : n(p, f);
  }
  return S;
}
var Bn = Wf(!0),
  Gf = Wf(!1),
  Jr = {},
  ut = Bt(Jr),
  Ur = Bt(Jr),
  Fr = Bt(Jr);
function Yt(e) {
  if (e === Jr) throw Error(_(174));
  return e;
}
function oc(e, t) {
  switch ((z(Fr, t), z(Ur, e), z(ut, Jr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Di(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Di(t, e));
  }
  j(ut), z(ut, t);
}
function jn() {
  j(ut), j(Ur), j(Fr);
}
function Qf(e) {
  Yt(Fr.current);
  var t = Yt(ut.current),
    n = Di(t, e.type);
  t !== n && (z(Ur, e), z(ut, n));
}
function sc(e) {
  Ur.current === e && (j(ut), j(Ur));
}
var G = Bt(0);
function us(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var di = [];
function ic() {
  for (var e = 0; e < di.length; e++)
    di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var Io = kt.ReactCurrentDispatcher,
  hi = kt.ReactCurrentBatchConfig,
  on = 0,
  Q = null,
  oe = null,
  ce = null,
  fs = !1,
  kr = !1,
  zr = 0,
  Rg = 0;
function pe() {
  throw Error(_(321));
}
function lc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!rt(e[n], t[n])) return !1;
  return !0;
}
function cc(e, t, n, r, o, s) {
  if (
    ((on = s),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Io.current = e === null || e.memoizedState === null ? Mg : Og),
    (e = n(r, o)),
    kr)
  ) {
    s = 0;
    do {
      if (((kr = !1), (zr = 0), 25 <= s)) throw Error(_(301));
      (s += 1),
        (ce = oe = null),
        (t.updateQueue = null),
        (Io.current = Ug),
        (e = n(r, o));
    } while (kr);
  }
  if (
    ((Io.current = ds),
    (t = oe !== null && oe.next !== null),
    (on = 0),
    (ce = oe = Q = null),
    (fs = !1),
    t)
  )
    throw Error(_(300));
  return e;
}
function ac() {
  var e = zr !== 0;
  return (zr = 0), e;
}
function st() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (Q.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Qe() {
  if (oe === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = oe.next;
  var t = ce === null ? Q.memoizedState : ce.next;
  if (t !== null) (ce = t), (oe = e);
  else {
    if (e === null) throw Error(_(310));
    (oe = e),
      (e = {
        memoizedState: oe.memoizedState,
        baseState: oe.baseState,
        baseQueue: oe.baseQueue,
        queue: oe.queue,
        next: null,
      }),
      ce === null ? (Q.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Hr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function pi(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = oe,
    o = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (o !== null) {
      var i = o.next;
      (o.next = s.next), (s.next = i);
    }
    (r.baseQueue = o = s), (n.pending = null);
  }
  if (o !== null) {
    (s = o.next), (r = r.baseState);
    var l = (i = null),
      c = null,
      a = s;
    do {
      var u = a.lane;
      if ((on & u) === u)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: u,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        c === null ? ((l = c = h), (i = r)) : (c = c.next = h),
          (Q.lanes |= u),
          (sn |= u);
      }
      a = a.next;
    } while (a !== null && a !== s);
    c === null ? (i = r) : (c.next = l),
      rt(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (s = o.lane), (Q.lanes |= s), (sn |= s), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function mi(e) {
  var t = Qe(),
    n = t.queue;
  if (n === null) throw Error(_(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    s = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var i = (o = o.next);
    do (s = e(s, i.action)), (i = i.next);
    while (i !== o);
    rt(s, t.memoizedState) || (Le = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Kf() {}
function Xf(e, t) {
  var n = Q,
    r = Qe(),
    o = t(),
    s = !rt(r.memoizedState, o);
  if (
    (s && ((r.memoizedState = o), (Le = !0)),
    (r = r.queue),
    uc(Zf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Br(9, Yf.bind(null, n, r, o, t), void 0, null),
      ie === null)
    )
      throw Error(_(349));
    on & 30 || Jf(n, t, o);
  }
  return o;
}
function Jf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Yf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ed(t) && We(e, 1, -1);
}
function Zf(e, t, n) {
  return n(function () {
    ed(t) && We(e, 1, -1);
  });
}
function ed(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !rt(e, n);
  } catch {
    return !0;
  }
}
function wa(e) {
  var t = st();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Hr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Pg.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Br(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function td() {
  return Qe().memoizedState;
}
function Do(e, t, n, r) {
  var o = st();
  (Q.flags |= e),
    (o.memoizedState = Br(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rs(e, t, n, r) {
  var o = Qe();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (oe !== null) {
    var i = oe.memoizedState;
    if (((s = i.destroy), r !== null && lc(r, i.deps))) {
      o.memoizedState = Br(t, n, s, r);
      return;
    }
  }
  (Q.flags |= e), (o.memoizedState = Br(1 | t, n, s, r));
}
function Sa(e, t) {
  return Do(8390656, 8, e, t);
}
function uc(e, t) {
  return Rs(2048, 8, e, t);
}
function nd(e, t) {
  return Rs(4, 2, e, t);
}
function rd(e, t) {
  return Rs(4, 4, e, t);
}
function od(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rs(4, 4, od.bind(null, t, e), n)
  );
}
function fc() {}
function id(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ld(e, t) {
  var n = Qe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && lc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cd(e, t, n) {
  return on & 21
    ? (rt(n, t) || ((n = pf()), (Q.lanes |= n), (sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Ig(e, t) {
  var n = F;
  (F = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = hi.transition;
  hi.transition = {};
  try {
    e(!1), t();
  } finally {
    (F = n), (hi.transition = r);
  }
}
function ad() {
  return Qe().memoizedState;
}
function Dg(e, t, n) {
  var r = Ot(e);
  (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }),
    ud(e)
      ? fd(t, n)
      : (dd(e, t, n), (n = ke()), (e = We(e, r, n)), e !== null && hd(e, t, r));
}
function Pg(e, t, n) {
  var r = Ot(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ud(e)) fd(t, o);
  else {
    dd(e, t, o);
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var i = t.lastRenderedState,
          l = s(i, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), rt(l, i))) return;
      } catch {
      } finally {
      }
    (n = ke()), (e = We(e, r, n)), e !== null && hd(e, t, r);
  }
}
function ud(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function fd(e, t) {
  kr = fs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function dd(e, t, n) {
  Ad(e)
    ? ((e = t.interleaved),
      e === null
        ? ((n.next = n), tt === null ? (tt = [t]) : tt.push(t))
        : ((n.next = e.next), (e.next = n)),
      (t.interleaved = n))
    : ((e = t.pending),
      e === null ? (n.next = n) : ((n.next = e.next), (e.next = n)),
      (t.pending = n));
}
function hd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bl(e, n);
  }
}
var ds = {
    readContext: Ge,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Mg = {
    readContext: Ge,
    useCallback: function (e, t) {
      return (st().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ge,
    useEffect: Sa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Do(4194308, 4, od.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Do(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Do(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = st();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = st();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Dg.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = st();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wa,
    useDebugValue: fc,
    useDeferredValue: function (e) {
      return (st().memoizedState = e);
    },
    useTransition: function () {
      var e = wa(!1),
        t = e[0];
      return (e = Ig.bind(null, e[1])), (st().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        o = st();
      if (W) {
        if (n === void 0) throw Error(_(407));
        n = n();
      } else {
        if (((n = t()), ie === null)) throw Error(_(349));
        on & 30 || Jf(r, t, n);
      }
      o.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (o.queue = s),
        Sa(Zf.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Br(9, Yf.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = st(),
        t = ie.identifierPrefix;
      if (W) {
        var n = vt,
          r = gt;
        (n = (r & ~(1 << (32 - nt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = zr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Rg++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Og = {
    readContext: Ge,
    useCallback: id,
    useContext: Ge,
    useEffect: uc,
    useImperativeHandle: sd,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: ld,
    useReducer: pi,
    useRef: td,
    useState: function () {
      return pi(Hr);
    },
    useDebugValue: fc,
    useDeferredValue: function (e) {
      var t = Qe();
      return cd(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(Hr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Kf,
    useSyncExternalStore: Xf,
    useId: ad,
    unstable_isNewReconciler: !1,
  },
  Ug = {
    readContext: Ge,
    useCallback: id,
    useContext: Ge,
    useEffect: uc,
    useImperativeHandle: sd,
    useInsertionEffect: nd,
    useLayoutEffect: rd,
    useMemo: ld,
    useReducer: mi,
    useRef: td,
    useState: function () {
      return mi(Hr);
    },
    useDebugValue: fc,
    useDeferredValue: function (e) {
      var t = Qe();
      return oe === null ? (t.memoizedState = e) : cd(t, oe.memoizedState, e);
    },
    useTransition: function () {
      var e = mi(Hr)[0],
        t = Qe().memoizedState;
      return [e, t];
    },
    useMutableSource: Kf,
    useSyncExternalStore: Xf,
    useId: ad,
    unstable_isNewReconciler: !1,
  };
function dc(e, t) {
  try {
    var n = '',
      r = t;
    do (n += hm(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (s) {
    o =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: o };
}
function ol(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Fg = typeof WeakMap == 'function' ? WeakMap : Map;
function pd(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ps || ((ps = !0), (hl = r)), ol(e, t);
    }),
    n
  );
}
function md(e, t, n) {
  (n = yt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        ol(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        ol(e, t),
          typeof r != 'function' &&
            (Mt === null ? (Mt = new Set([this])) : Mt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Fg();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Zg.bind(null, e, t, n)), t.then(e, e));
}
function xa(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ka(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = yt(-1, 1)), (t.tag = 2), Pt(n, t))),
          (n.lanes |= 1)),
      e);
}
var gd, sl, vd, yd;
gd = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
sl = function () {};
vd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Yt(ut.current);
    var s = null;
    switch (n) {
      case 'input':
        (o = $i(e, o)), (r = $i(e, r)), (s = []);
        break;
      case 'select':
        (o = K({}, o, { value: void 0 })),
          (r = K({}, r, { value: void 0 })),
          (s = []);
        break;
      case 'textarea':
        (o = Ii(e, o)), (r = Ii(e, r)), (s = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ns);
    }
    Pi(n, r);
    var i;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var l = o[a];
          for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Cr.hasOwnProperty(a)
              ? s || (s = [])
              : (s = s || []).push(a, null));
    for (a in r) {
      var c = r[a];
      if (
        ((l = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && c !== l && (c != null || l != null))
      )
        if (a === 'style')
          if (l) {
            for (i in l)
              !l.hasOwnProperty(i) ||
                (c && c.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ''));
            for (i in c)
              c.hasOwnProperty(i) &&
                l[i] !== c[i] &&
                (n || (n = {}), (n[i] = c[i]));
          } else n || (s || (s = []), s.push(a, n)), (n = c);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((c = c ? c.__html : void 0),
              (l = l ? l.__html : void 0),
              c != null && l !== c && (s = s || []).push(a, c))
            : a === 'children'
            ? (typeof c != 'string' && typeof c != 'number') ||
              (s = s || []).push(a, '' + c)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Cr.hasOwnProperty(a)
                ? (c != null && a === 'onScroll' && B('scroll', e),
                  s || l === c || (s = []))
                : (s = s || []).push(a, c));
    }
    n && (s = s || []).push('style', n);
    var a = s;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
yd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!W)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function zg(e, t, n) {
  var r = t.pendingProps;
  switch ((nc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return qe(t.type) && rs(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        jn(),
        j($e),
        j(we),
        ic(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (or(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), et !== null && (gl(et), (et = null)))),
        sl(e, t),
        me(t),
        null
      );
    case 5:
      sc(t);
      var o = Yt(Fr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(_(166));
          return me(t), null;
        }
        if (((e = Yt(ut.current)), or(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[it] = t), (r[Or] = s), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              B('cancel', r), B('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              B('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < mr.length; o++) B(mr[o], r);
              break;
            case 'source':
              B('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              B('error', r), B('load', r);
              break;
            case 'details':
              B('toggle', r);
              break;
            case 'input':
              Mc(r, s), B('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                B('invalid', r);
              break;
            case 'textarea':
              Uc(r, s), B('invalid', r);
          }
          Pi(n, s), (o = null);
          for (var i in s)
            if (s.hasOwnProperty(i)) {
              var l = s[i];
              i === 'children'
                ? typeof l == 'string'
                  ? r.textContent !== l &&
                    (s.suppressHydrationWarning !== !0 &&
                      fo(r.textContent, l, e),
                    (o = ['children', l]))
                  : typeof l == 'number' &&
                    r.textContent !== '' + l &&
                    (s.suppressHydrationWarning !== !0 &&
                      fo(r.textContent, l, e),
                    (o = ['children', '' + l]))
                : Cr.hasOwnProperty(i) &&
                  l != null &&
                  i === 'onScroll' &&
                  B('scroll', r);
            }
          switch (n) {
            case 'input':
              ro(r), Oc(r, s, !0);
              break;
            case 'textarea':
              ro(r), Fc(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (r.onclick = ns);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Yu(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === 'select' &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[it] = t),
            (e[Or] = r),
            gd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = Mi(n, r)), n)) {
              case 'dialog':
                B('cancel', e), B('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                B('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < mr.length; o++) B(mr[o], e);
                o = r;
                break;
              case 'source':
                B('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                B('error', e), B('load', e), (o = r);
                break;
              case 'details':
                B('toggle', e), (o = r);
                break;
              case 'input':
                Mc(e, r), (o = $i(e, r)), B('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = K({}, r, { value: void 0 })),
                  B('invalid', e);
                break;
              case 'textarea':
                Uc(e, r), (o = Ii(e, r)), B('invalid', e);
                break;
              default:
                o = r;
            }
            Pi(n, o), (l = o);
            for (s in l)
              if (l.hasOwnProperty(s)) {
                var c = l[s];
                s === 'style'
                  ? tf(e, c)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((c = c ? c.__html : void 0), c != null && Zu(e, c))
                  : s === 'children'
                  ? typeof c == 'string'
                    ? (n !== 'textarea' || c !== '') && Lr(e, c)
                    : typeof c == 'number' && Lr(e, '' + c)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (Cr.hasOwnProperty(s)
                      ? c != null && s === 'onScroll' && B('scroll', e)
                      : c != null && Ml(e, s, c, i));
              }
            switch (n) {
              case 'input':
                ro(e), Oc(e, r, !1);
                break;
              case 'textarea':
                ro(e), Fc(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Ut(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? $n(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      $n(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ns);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) yd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(_(166));
        if (((n = Yt(Fr.current)), Yt(ut.current), or(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[it] = t),
            (s = r.nodeValue !== n) && ((e = Oe), e !== null))
          )
            switch (e.tag) {
              case 3:
                fo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[it] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (j(G),
        (r = t.memoizedState),
        W && Ce !== null && t.mode & 1 && !(t.flags & 128))
      ) {
        for (r = Ce; r; ) r = mt(r.nextSibling);
        return Hn(), (t.flags |= 98560), t;
      }
      if (r !== null && r.dehydrated !== null) {
        if (((r = or(t)), e === null)) {
          if (!r) throw Error(_(318));
          if (
            ((r = t.memoizedState), (r = r !== null ? r.dehydrated : null), !r)
          )
            throw Error(_(317));
          r[it] = t;
        } else
          Hn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
        return me(t), null;
      }
      return (
        et !== null && (gl(et), (et = null)),
        t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            (n = !1),
            e === null ? or(t) : (n = e.memoizedState !== null),
            r !== n &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || G.current & 1 ? se === 0 && (se = 3) : yc())),
            t.updateQueue !== null && (t.flags |= 4),
            me(t),
            null)
      );
    case 4:
      return (
        jn(), sl(e, t), e === null && Pr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Zl(t.type._context), me(t), null;
    case 17:
      return qe(t.type) && rs(), me(t), null;
    case 19:
      if ((j(G), (s = t.memoizedState), s === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (i = s.rendering), i === null))
        if (r) ir(s, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = us(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    ir(s, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (i = s.alternate),
                    i === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = i.childLanes),
                        (s.lanes = i.lanes),
                        (s.child = i.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = i.memoizedProps),
                        (s.memoizedState = i.memoizedState),
                        (s.updateQueue = i.updateQueue),
                        (s.type = i.type),
                        (e = i.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Y() > Vn &&
            ((t.flags |= 128), (r = !0), ir(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = us(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !i.alternate && !W)
            )
              return me(t), null;
          } else
            2 * Y() - s.renderingStartTime > Vn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = s.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (s.last = i));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Y()),
          (t.sibling = null),
          (n = G.current),
          z(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        vc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? De & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(_(156, t.tag));
}
var Hg = kt.ReactCurrentOwner,
  Le = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Gf(t, null, n, r) : Bn(t, e.child, n, r);
}
function Ta(e, t, n, r, o) {
  n = n.render;
  var s = t.ref;
  return (
    Dn(t, o),
    (r = cc(e, t, n, r, s, o)),
    (n = ac()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xt(e, t, o))
      : (W && n && tc(t), (t.flags |= 1), xe(e, t, r, o), t.child)
  );
}
function ba(e, t, n, r, o) {
  if (e === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !wc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), wd(e, t, s, r, o))
      : ((e = Oo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & o))) {
    var i = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Dr), n(i, r) && e.ref === t.ref)
    )
      return xt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = zt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function wd(e, t, n, r, o) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Dr(s, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = s), (e.lanes & o) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), xt(e, t, o);
  }
  return il(e, t, n, r, o);
}
function Sd(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(Nn, De),
        (De |= n);
    else if (n & 1073741824)
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        z(Nn, De),
        (De |= r);
    else
      return (
        (e = s !== null ? s.baseLanes | n : n),
        (t.lanes = t.childLanes = 1073741824),
        (t.memoizedState = {
          baseLanes: e,
          cachePool: null,
          transitions: null,
        }),
        (t.updateQueue = null),
        z(Nn, De),
        (De |= e),
        null
      );
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(Nn, De),
      (De |= r);
  return xe(e, t, o, n), t.child;
}
function Ed(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function il(e, t, n, r, o) {
  var s = qe(n) ? nn : we.current;
  return (
    (s = zn(t, s)),
    Dn(t, o),
    (n = cc(e, t, n, r, s, o)),
    (r = ac()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        xt(e, t, o))
      : (W && r && tc(t), (t.flags |= 1), xe(e, t, n, o), t.child)
  );
}
function _a(e, t, n, r, o) {
  if (qe(n)) {
    var s = !0;
    os(t);
  } else s = !1;
  if ((Dn(t, o), t.stateNode === null))
    e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
      Bf(t, n, r),
      tl(t, n, r, o),
      (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      l = t.memoizedProps;
    i.props = l;
    var c = i.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = Ge(a))
      : ((a = qe(n) ? nn : we.current), (a = zn(t, a)));
    var u = n.getDerivedStateFromProps,
      h =
        typeof u == 'function' ||
        typeof i.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== r || c !== a) && ma(t, i, r, a)),
      (Nt = !1);
    var d = t.memoizedState;
    (i.state = d),
      ls(t, r, i, o),
      (c = t.memoizedState),
      l !== r || d !== c || $e.current || Nt
        ? (typeof u == 'function' && (el(t, n, u, r), (c = t.memoizedState)),
          (l = Nt || pa(t, n, l, r, d, c, a))
            ? (h ||
                (typeof i.UNSAFE_componentWillMount != 'function' &&
                  typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (i.props = r),
          (i.state = c),
          (i.context = a),
          (r = l))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      zf(e, t),
      (l = t.memoizedProps),
      (a = t.type === t.elementType ? l : Ye(t.type, l)),
      (i.props = a),
      (h = t.pendingProps),
      (d = i.context),
      (c = n.contextType),
      typeof c == 'object' && c !== null
        ? (c = Ge(c))
        : ((c = qe(n) ? nn : we.current), (c = zn(t, c)));
    var v = n.getDerivedStateFromProps;
    (u =
      typeof v == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof i.componentWillReceiveProps != 'function') ||
      ((l !== h || d !== c) && ma(t, i, r, c)),
      (Nt = !1),
      (d = t.memoizedState),
      (i.state = d),
      ls(t, r, i, o);
    var m = t.memoizedState;
    l !== h || d !== m || $e.current || Nt
      ? (typeof v == 'function' && (el(t, n, v, r), (m = t.memoizedState)),
        (a = Nt || pa(t, n, a, r, d, m, c) || !1)
          ? (u ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' &&
                i.componentWillUpdate(r, m, c),
              typeof i.UNSAFE_componentWillUpdate == 'function' &&
                i.UNSAFE_componentWillUpdate(r, m, c)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
        (i.context = c),
        (r = a))
      : (typeof i.componentDidUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ll(e, t, n, r, s, o);
}
function ll(e, t, n, r, o, s) {
  Ed(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return o && fa(t, n, !1), xt(e, t, s);
  (r = t.stateNode), (Hg.current = t);
  var l =
    i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Bn(t, e.child, null, s)), (t.child = Bn(t, null, l, s)))
      : xe(e, t, l, s),
    (t.memoizedState = r.state),
    o && fa(t, n, !0),
    t.child
  );
}
function xd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? ua(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && ua(e, t.context, !1),
    oc(e, t.containerInfo);
}
function Na(e, t, n, r, o) {
  return Hn(), rc(o), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var po = { dehydrated: null, treeContext: null, retryLane: 0 };
function mo(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ca(e, t) {
  return {
    baseLanes: e.baseLanes | t,
    cachePool: null,
    transitions: e.transitions,
  };
}
function kd(e, t, n) {
  var r = t.pendingProps,
    o = G.current,
    s = !1,
    i = (t.flags & 128) !== 0,
    l;
  if (
    ((l = i) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    z(G, o & 1),
    e === null)
  )
    return (
      rl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: 'hidden', children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = vs(o, r, 0, null)),
              (e = en(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = mo(n)),
              (t.memoizedState = po),
              e)
            : cl(t, o))
    );
  if (((o = e.memoizedState), o !== null)) {
    if (((l = o.dehydrated), l !== null)) {
      if (i)
        return t.flags & 256
          ? ((t.flags &= -257), go(e, t, n, Error(_(422))))
          : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = r.fallback),
            (o = t.mode),
            (r = vs({ mode: 'visible', children: r.children }, o, 0, null)),
            (s = en(s, o, n, null)),
            (s.flags |= 2),
            (r.return = t),
            (s.return = t),
            (r.sibling = s),
            (t.child = r),
            t.mode & 1 && Bn(t, e.child, null, n),
            (t.child.memoizedState = mo(n)),
            (t.memoizedState = po),
            s);
      if (!(t.mode & 1)) t = go(e, t, n, null);
      else if (l.data === '$!') t = go(e, t, n, Error(_(419)));
      else if (((r = (n & e.childLanes) !== 0), Le || r)) {
        if (((r = ie), r !== null)) {
          switch (n & -n) {
            case 4:
              s = 2;
              break;
            case 16:
              s = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              s = 32;
              break;
            case 536870912:
              s = 268435456;
              break;
            default:
              s = 0;
          }
          (r = s & (r.suspendedLanes | n) ? 0 : s),
            r !== 0 && r !== o.retryLane && ((o.retryLane = r), We(e, r, -1));
        }
        yc(), (t = go(e, t, n, Error(_(421))));
      } else
        l.data === '$?'
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = ev.bind(null, e)),
            (l._reactRetry = t),
            (t = null))
          : ((n = o.treeContext),
            (Ce = mt(l.nextSibling)),
            (Oe = t),
            (W = !0),
            (et = null),
            n !== null &&
              ((He[Be++] = gt),
              (He[Be++] = vt),
              (He[Be++] = rn),
              (gt = n.id),
              (vt = n.overflow),
              (rn = t)),
            (t = cl(t, t.pendingProps.children)),
            (t.flags |= 4096));
      return t;
    }
    return s
      ? ((r = Aa(e, t, r.children, r.fallback, n)),
        (s = t.child),
        (o = e.child.memoizedState),
        (s.memoizedState = o === null ? mo(n) : Ca(o, n)),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = po),
        r)
      : ((n = La(e, t, r.children, n)), (t.memoizedState = null), n);
  }
  return s
    ? ((r = Aa(e, t, r.children, r.fallback, n)),
      (s = t.child),
      (o = e.child.memoizedState),
      (s.memoizedState = o === null ? mo(n) : Ca(o, n)),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = po),
      r)
    : ((n = La(e, t, r.children, n)), (t.memoizedState = null), n);
}
function cl(e, t) {
  return (
    (t = vs({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function La(e, t, n, r) {
  var o = e.child;
  return (
    (e = o.sibling),
    (n = zt(o, { mode: 'visible', children: n })),
    !(t.mode & 1) && (n.lanes = r),
    (n.return = t),
    (n.sibling = null),
    e !== null &&
      ((r = t.deletions),
      r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
    (t.child = n)
  );
}
function Aa(e, t, n, r, o) {
  var s = t.mode;
  e = e.child;
  var i = e.sibling,
    l = { mode: 'hidden', children: n };
  return (
    !(s & 1) && t.child !== e
      ? ((n = t.child),
        (n.childLanes = 0),
        (n.pendingProps = l),
        (t.deletions = null))
      : ((n = zt(e, l)), (n.subtreeFlags = e.subtreeFlags & 14680064)),
    i !== null ? (r = zt(i, r)) : ((r = en(r, s, o, null)), (r.flags |= 2)),
    (r.return = t),
    (n.return = t),
    (n.sibling = r),
    (t.child = n),
    r
  );
}
function go(e, t, n, r) {
  return (
    r !== null && rc(r),
    Bn(t, e.child, null, n),
    (e = cl(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $a(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zi(e.return, t, n);
}
function gi(e, t, n, r, o) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = o));
}
function Td(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    s = r.tail;
  if ((xe(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && $a(e, n, t);
        else if (e.tag === 19) $a(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && us(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          gi(t, !1, o, n, s);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && us(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        gi(t, !0, n, null, s);
        break;
      case 'together':
        gi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function xt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(_(153));
  if (t.child !== null) {
    for (
      e = t.child, n = zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bg(e, t, n) {
  switch (t.tag) {
    case 3:
      xd(t), Hn();
      break;
    case 5:
      Qf(t);
      break;
    case 1:
      qe(t.type) && os(t);
      break;
    case 4:
      oc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      z(ss, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? kd(e, t, n)
          : (z(G, G.current & 1),
            (e = xt(e, t, n)),
            e !== null ? e.sibling : null);
      z(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Td(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        z(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Sd(e, t, n);
  }
  return xt(e, t, n);
}
function jg(e, t) {
  switch ((nc(t), t.tag)) {
    case 1:
      return (
        qe(t.type) && rs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        jn(),
        j($e),
        j(we),
        ic(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return sc(t), null;
    case 13:
      if ((j(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(_(340));
        Hn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return j(G), null;
    case 4:
      return jn(), null;
    case 10:
      return Zl(t.type._context), null;
    case 22:
    case 23:
      return vc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vo = !1,
  ve = !1,
  Vg = typeof WeakSet == 'function' ? WeakSet : Set,
  $ = null;
function _n(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        J(e, t, r);
      }
    else n.current = null;
}
function al(e, t, n) {
  try {
    n();
  } catch (r) {
    J(e, t, r);
  }
}
var qa = !1;
function Wg(e, t) {
  if (((Gi = Zo), (e = Af()), Xl(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            l = -1,
            c = -1,
            a = 0,
            u = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var v;
              h !== n || (o !== 0 && h.nodeType !== 3) || (l = i + o),
                h !== s || (r !== 0 && h.nodeType !== 3) || (c = i + r),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (v = h.firstChild) !== null;

            )
              (d = h), (h = v);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++a === o && (l = i),
                d === s && ++u === r && (c = i),
                (v = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = v;
          }
          n = l === -1 || c === -1 ? null : { start: l, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Qi = { focusedElem: e, selectionRange: n }, Zo = !1, $ = t; $ !== null; )
    if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), ($ = e);
    else
      for (; $ !== null; ) {
        t = $;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var E = m.memoizedProps,
                    S = m.memoizedState,
                    p = t.stateNode,
                    f = p.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? E : Ye(t.type, E),
                      S
                    );
                  p.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                if (g.nodeType === 1) g.textContent = '';
                else if (g.nodeType === 9) {
                  var w = g.body;
                  w != null && (w.textContent = '');
                }
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(_(163));
            }
        } catch (k) {
          J(t, t.return, k);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), ($ = e);
          break;
        }
        $ = t.return;
      }
  return (m = qa), (qa = !1), m;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var s = o.destroy;
        (o.destroy = void 0), s !== void 0 && al(t, n, s);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Is(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ul(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[it], delete t[Or], delete t[Ji], delete t[Lg], delete t[Ag])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function _d(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ra(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || _d(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function fl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ns));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fl(e, t, n), e = e.sibling; e !== null; ) fl(e, t, n), (e = e.sibling);
}
function dl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (dl(e, t, n), e = e.sibling; e !== null; ) dl(e, t, n), (e = e.sibling);
}
var ae = null,
  Ze = !1;
function Tt(e, t, n) {
  for (n = n.child; n !== null; ) Nd(e, t, n), (n = n.sibling);
}
function Nd(e, t, n) {
  if (at && typeof at.onCommitFiberUnmount == 'function')
    try {
      at.onCommitFiberUnmount(_s, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ve || _n(n, t);
    case 6:
      var r = ae,
        o = Ze;
      (ae = null),
        Tt(e, t, n),
        (ae = r),
        (Ze = o),
        ae !== null &&
          (Ze
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Ze
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? ui(e.parentNode, n)
              : e.nodeType === 1 && ui(e, n),
            Rr(e))
          : ui(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (o = Ze),
        (ae = n.stateNode.containerInfo),
        (Ze = !0),
        Tt(e, t, n),
        (ae = r),
        (Ze = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ve &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var s = o,
            i = s.destroy;
          (s = s.tag),
            i !== void 0 && (s & 2 || s & 4) && al(n, t, i),
            (o = o.next);
        } while (o !== r);
      }
      Tt(e, t, n);
      break;
    case 1:
      if (
        !ve &&
        (_n(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          J(n, t, l);
        }
      Tt(e, t, n);
      break;
    case 21:
      Tt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ve = (r = ve) || n.memoizedState !== null), Tt(e, t, n), (ve = r))
        : Tt(e, t, n);
      break;
    default:
      Tt(e, t, n);
  }
}
function Ia(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Vg()),
      t.forEach(function (r) {
        var o = tv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var s = e,
          i = t,
          l = i;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Ze = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Ze = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Ze = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(_(160));
        Nd(s, i, o), (ae = null), (Ze = !1);
        var c = o.alternate;
        c !== null && (c.return = null), (o.return = null);
      } catch (a) {
        J(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Cd(t, e), (t = t.sibling);
}
function Cd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), ot(e), r & 4)) {
        try {
          Tr(3, e, e.return), Is(3, e);
        } catch (m) {
          J(e, e.return, m);
        }
        try {
          Tr(5, e, e.return);
        } catch (m) {
          J(e, e.return, m);
        }
      }
      break;
    case 1:
      Ke(t, e), ot(e), r & 512 && n !== null && _n(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        ot(e),
        r & 512 && n !== null && _n(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Lr(o, '');
        } catch (m) {
          J(e, e.return, m);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var s = e.memoizedProps,
          i = n !== null ? n.memoizedProps : s,
          l = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            l === 'input' && s.type === 'radio' && s.name != null && Xu(o, s),
              Mi(l, i);
            var a = Mi(l, s);
            for (i = 0; i < c.length; i += 2) {
              var u = c[i],
                h = c[i + 1];
              u === 'style'
                ? tf(o, h)
                : u === 'dangerouslySetInnerHTML'
                ? Zu(o, h)
                : u === 'children'
                ? Lr(o, h)
                : Ml(o, u, h, a);
            }
            switch (l) {
              case 'input':
                qi(o, s);
                break;
              case 'textarea':
                Ju(o, s);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!s.multiple;
                var v = s.value;
                v != null
                  ? $n(o, !!s.multiple, v, !1)
                  : d !== !!s.multiple &&
                    (s.defaultValue != null
                      ? $n(o, !!s.multiple, s.defaultValue, !0)
                      : $n(o, !!s.multiple, s.multiple ? [] : '', !1));
            }
            o[Or] = s;
          } catch (m) {
            J(e, e.return, m);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(_(162));
        (a = e.stateNode), (u = e.memoizedProps);
        try {
          a.nodeValue = u;
        } catch (m) {
          J(e, e.return, m);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (m) {
          J(e, e.return, m);
        }
      break;
    case 4:
      Ke(t, e), ot(e);
      break;
    case 13:
      Ke(t, e),
        ot(e),
        (a = e.child),
        a.flags & 8192 &&
          a.memoizedState !== null &&
          (a.alternate === null || a.alternate.memoizedState === null) &&
          (mc = Y()),
        r & 4 && Ia(e);
      break;
    case 22:
      if (
        ((a = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ve = (u = ve) || a), Ke(t, e), (ve = u)) : Ke(t, e),
        ot(e),
        r & 8192)
      ) {
        u = e.memoizedState !== null;
        e: for (h = null, d = e; ; ) {
          if (d.tag === 5) {
            if (h === null) {
              h = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((s = o.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((l = d.stateNode),
                      (c = d.memoizedProps.style),
                      (i =
                        c != null && c.hasOwnProperty('display')
                          ? c.display
                          : null),
                      (l.style.display = ef('display', i)));
              } catch (m) {
                J(e, e.return, m);
              }
            }
          } else if (d.tag === 6) {
            if (h === null)
              try {
                d.stateNode.nodeValue = u ? '' : d.memoizedProps;
              } catch (m) {
                J(e, e.return, m);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            h === d && (h = null), (d = d.return);
          }
          h === d && (h = null), (d.sibling.return = d.return), (d = d.sibling);
        }
        if (u && !a && e.mode & 1)
          for ($ = e, e = e.child; e !== null; ) {
            for (a = $ = e; $ !== null; ) {
              switch (((u = $), (h = u.child), u.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, u, u.return);
                  break;
                case 1:
                  if (
                    (_n(u, u.return),
                    (s = u.stateNode),
                    typeof s.componentWillUnmount == 'function')
                  ) {
                    (d = u), (v = u.return);
                    try {
                      (o = d),
                        (s.props = o.memoizedProps),
                        (s.state = o.memoizedState),
                        s.componentWillUnmount();
                    } catch (m) {
                      J(d, v, m);
                    }
                  }
                  break;
                case 5:
                  _n(u, u.return);
                  break;
                case 22:
                  if (u.memoizedState !== null) {
                    Pa(a);
                    continue;
                  }
              }
              h !== null ? ((h.return = u), ($ = h)) : Pa(a);
            }
            e = e.sibling;
          }
      }
      break;
    case 19:
      Ke(t, e), ot(e), r & 4 && Ia(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), ot(e);
  }
}
function ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (_d(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(_(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Lr(o, ''), (r.flags &= -33));
          var s = Ra(e);
          dl(e, s, o);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            l = Ra(e);
          fl(e, l, i);
          break;
        default:
          throw Error(_(161));
      }
    } catch (c) {
      J(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gg(e, t, n) {
  ($ = e), Ld(e);
}
function Ld(e, t, n) {
  for (var r = (e.mode & 1) !== 0; $ !== null; ) {
    var o = $,
      s = o.child;
    if (o.tag === 22 && r) {
      var i = o.memoizedState !== null || vo;
      if (!i) {
        var l = o.alternate,
          c = (l !== null && l.memoizedState !== null) || ve;
        l = vo;
        var a = ve;
        if (((vo = i), (ve = c) && !a))
          for ($ = o; $ !== null; )
            (i = $),
              (c = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ma(o)
                : c !== null
                ? ((c.return = i), ($ = c))
                : Ma(o);
        for (; s !== null; ) ($ = s), Ld(s), (s = s.sibling);
        ($ = o), (vo = l), (ve = a);
      }
      Da(e);
    } else
      o.subtreeFlags & 8772 && s !== null ? ((s.return = o), ($ = s)) : Da(e);
  }
}
function Da(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ve || Is(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ve)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ye(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && ha(t, s, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ha(t, i, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var c = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    c.autoFocus && n.focus();
                    break;
                  case 'img':
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var u = a.memoizedState;
                  if (u !== null) {
                    var h = u.dehydrated;
                    h !== null && Rr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;
            default:
              throw Error(_(163));
          }
        ve || (t.flags & 512 && ul(t));
      } catch (d) {
        J(t, t.return, d);
      }
    }
    if (t === e) {
      $ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Pa(e) {
  for (; $ !== null; ) {
    var t = $;
    if (t === e) {
      $ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), ($ = n);
      break;
    }
    $ = t.return;
  }
}
function Ma(e) {
  for (; $ !== null; ) {
    var t = $;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Is(4, t);
          } catch (c) {
            J(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              J(t, o, c);
            }
          }
          var s = t.return;
          try {
            ul(t);
          } catch (c) {
            J(t, s, c);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ul(t);
          } catch (c) {
            J(t, i, c);
          }
      }
    } catch (c) {
      J(t, t.return, c);
    }
    if (t === e) {
      $ = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), ($ = l);
      break;
    }
    $ = t.return;
  }
}
var Qg = Math.ceil,
  hs = kt.ReactCurrentDispatcher,
  hc = kt.ReactCurrentOwner,
  Ve = kt.ReactCurrentBatchConfig,
  O = 0,
  ie = null,
  ne = null,
  de = 0,
  De = 0,
  Nn = Bt(0),
  se = 0,
  jr = null,
  sn = 0,
  Ds = 0,
  pc = 0,
  br = null,
  Ne = null,
  mc = 0,
  Vn = 1 / 0,
  ht = null,
  ps = !1,
  hl = null,
  Mt = null,
  yo = !1,
  qt = null,
  ms = 0,
  _r = 0,
  pl = null,
  Po = -1,
  Mo = 0;
function ke() {
  return O & 6 ? Y() : Po !== -1 ? Po : (Po = Y());
}
function Ot(e) {
  return e.mode & 1
    ? O & 2 && de !== 0
      ? de & -de
      : qg.transition !== null
      ? (Mo === 0 && (Mo = pf()), Mo)
      : ((e = F),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ef(e.type))),
        e)
    : 1;
}
function We(e, t, n) {
  if (50 < _r) throw ((_r = 0), (pl = null), Error(_(185)));
  var r = Ps(e, t);
  return r === null
    ? null
    : (Qr(r, t, n),
      (!(O & 2) || r !== ie) &&
        (r === ie && (!(O & 2) && (Ds |= t), se === 4 && Lt(r, de)),
        Re(r, n),
        t === 1 && O === 0 && !(e.mode & 1) && ((Vn = Y() + 500), $s && jt())),
      r);
}
function Ps(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
function Ad(e) {
  return (ie !== null || tt !== null) && (e.mode & 1) !== 0 && (O & 2) === 0;
}
function Re(e, t) {
  var n = e.callbackNode;
  qm(e, t);
  var r = Yo(e, e === ie ? de : 0);
  if (r === 0)
    n !== null && Bc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Bc(n), t === 1))
      e.tag === 0 ? $g(Oa.bind(null, e)) : Ff(Oa.bind(null, e)),
        Ng(function () {
          O === 0 && jt();
        }),
        (n = null);
    else {
      switch (mf(r)) {
        case 1:
          n = Hl;
          break;
        case 4:
          n = df;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = hf;
          break;
        default:
          n = Jo;
      }
      n = Od(n, $d.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function $d(e, t) {
  if (((Po = -1), (Mo = 0), O & 6)) throw Error(_(327));
  var n = e.callbackNode;
  if (Pn() && e.callbackNode !== n) return null;
  var r = Yo(e, e === ie ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = gs(e, r);
  else {
    t = r;
    var o = O;
    O |= 2;
    var s = Rd();
    (ie !== e || de !== t) && ((ht = null), (Vn = Y() + 500), Zt(e, t));
    do
      try {
        Jg();
        break;
      } catch (l) {
        qd(e, l);
      }
    while (1);
    Yl(),
      (hs.current = s),
      (O = o),
      ne !== null ? (t = 0) : ((ie = null), (de = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = Hi(e)), o !== 0 && ((r = o), (t = ml(e, o)))), t === 1)
    )
      throw ((n = jr), Zt(e, 0), Lt(e, r), Re(e, Y()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Kg(o) &&
          ((t = gs(e, r)),
          t === 2 && ((s = Hi(e)), s !== 0 && ((r = s), (t = ml(e, s)))),
          t === 1))
      )
        throw ((n = jr), Zt(e, 0), Lt(e, r), Re(e, Y()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(_(345));
        case 2:
          Kt(e, Ne, ht);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = mc + 500 - Y()), 10 < t))
          ) {
            if (Yo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Xi(Kt.bind(null, e, Ne, ht), t);
            break;
          }
          Kt(e, Ne, ht);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var i = 31 - nt(r);
            (s = 1 << i), (i = t[i]), i > o && (o = i), (r &= ~s);
          }
          if (
            ((r = o),
            (r = Y() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qg(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Xi(Kt.bind(null, e, Ne, ht), r);
            break;
          }
          Kt(e, Ne, ht);
          break;
        case 5:
          Kt(e, Ne, ht);
          break;
        default:
          throw Error(_(329));
      }
    }
  }
  return Re(e, Y()), e.callbackNode === n ? $d.bind(null, e) : null;
}
function ml(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (Zt(e, t).flags |= 256),
    (e = gs(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && gl(t)),
    e
  );
}
function gl(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Kg(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            s = o.getSnapshot;
          o = o.value;
          try {
            if (!rt(s(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Lt(e, t) {
  for (
    t &= ~pc,
      t &= ~Ds,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - nt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Oa(e) {
  if (O & 6) throw Error(_(327));
  Pn();
  var t = Yo(e, 0);
  if (!(t & 1)) return Re(e, Y()), null;
  var n = gs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Hi(e);
    r !== 0 && ((t = r), (n = ml(e, r)));
  }
  if (n === 1) throw ((n = jr), Zt(e, 0), Lt(e, t), Re(e, Y()), n);
  if (n === 6) throw Error(_(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Kt(e, Ne, ht),
    Re(e, Y()),
    null
  );
}
function gc(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Vn = Y() + 500), $s && jt());
  }
}
function ln(e) {
  qt !== null && qt.tag === 0 && !(O & 6) && Pn();
  var t = O;
  O |= 1;
  var n = Ve.transition,
    r = F;
  try {
    if (((Ve.transition = null), (F = 1), e)) return e();
  } finally {
    (F = r), (Ve.transition = n), (O = t), !(O & 6) && jt();
  }
}
function vc() {
  (De = Nn.current), j(Nn);
}
function Zt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _g(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((nc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && rs();
          break;
        case 3:
          jn(), j($e), j(we), ic();
          break;
        case 5:
          sc(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          j(G);
          break;
        case 19:
          j(G);
          break;
        case 10:
          Zl(r.type._context);
          break;
        case 22:
        case 23:
          vc();
      }
      n = n.return;
    }
  if (
    ((ie = e),
    (ne = e = zt(e.current, null)),
    (de = De = t),
    (se = 0),
    (jr = null),
    (pc = Ds = sn = 0),
    (Ne = br = null),
    tt !== null)
  ) {
    for (t = 0; t < tt.length; t++)
      if (((n = tt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          s = n.pending;
        if (s !== null) {
          var i = s.next;
          (s.next = o), (r.next = i);
        }
        n.pending = r;
      }
    tt = null;
  }
  return e;
}
function qd(e, t) {
  do {
    var n = ne;
    try {
      if ((Yl(), (Io.current = ds), fs)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        fs = !1;
      }
      if (
        ((on = 0),
        (ce = oe = Q = null),
        (kr = !1),
        (zr = 0),
        (hc.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (jr = t), (ne = null);
        break;
      }
      e: {
        var s = e,
          i = n.return,
          l = n,
          c = t;
        if (
          ((t = de),
          (l.flags |= 32768),
          c !== null && typeof c == 'object' && typeof c.then == 'function')
        ) {
          var a = c,
            u = l,
            h = u.tag;
          if (!(u.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var v = xa(i);
          if (v !== null) {
            (v.flags &= -257),
              ka(v, i, l, s, t),
              v.mode & 1 && Ea(s, a, t),
              (t = v),
              (c = a);
            var m = t.updateQueue;
            if (m === null) {
              var E = new Set();
              E.add(c), (t.updateQueue = E);
            } else m.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              Ea(s, a, t), yc();
              break e;
            }
            c = Error(_(426));
          }
        } else if (W && l.mode & 1) {
          var S = xa(i);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256), ka(S, i, l, s, t), rc(c);
            break e;
          }
        }
        (s = c),
          se !== 4 && (se = 2),
          br === null ? (br = [s]) : br.push(s),
          (c = dc(c, l)),
          (l = i);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var p = pd(l, c, t);
              da(l, p);
              break e;
            case 1:
              s = c;
              var f = l.type,
                g = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof f.getDerivedStateFromError == 'function' ||
                  (g !== null &&
                    typeof g.componentDidCatch == 'function' &&
                    (Mt === null || !Mt.has(g))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var w = md(l, s, t);
                da(l, w);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Dd(n);
    } catch (k) {
      (t = k), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Rd() {
  var e = hs.current;
  return (hs.current = ds), e === null ? ds : e;
}
function yc() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ie === null || (!(sn & 268435455) && !(Ds & 268435455)) || Lt(ie, de);
}
function gs(e, t) {
  var n = O;
  O |= 2;
  var r = Rd();
  (ie !== e || de !== t) && ((ht = null), Zt(e, t));
  do
    try {
      Xg();
      break;
    } catch (o) {
      qd(e, o);
    }
  while (1);
  if ((Yl(), (O = n), (hs.current = r), ne !== null)) throw Error(_(261));
  return (ie = null), (de = 0), se;
}
function Xg() {
  for (; ne !== null; ) Id(ne);
}
function Jg() {
  for (; ne !== null && !km(); ) Id(ne);
}
function Id(e) {
  var t = Md(e.alternate, e, De);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dd(e) : (ne = t),
    (hc.current = null);
}
function Dd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = jg(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (ne = null);
        return;
      }
    } else if (((n = zg(n, t, De)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function Kt(e, t, n) {
  var r = F,
    o = Ve.transition;
  try {
    (Ve.transition = null), (F = 1), Yg(e, t, n, r);
  } finally {
    (Ve.transition = o), (F = r);
  }
  return null;
}
function Yg(e, t, n, r) {
  do Pn();
  while (qt !== null);
  if (O & 6) throw Error(_(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(_(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Rm(e, s),
    e === ie && ((ne = ie = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yo ||
      ((yo = !0),
      Od(Jo, function () {
        return Pn(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Ve.transition), (Ve.transition = null);
    var i = F;
    F = 1;
    var l = O;
    (O |= 4),
      (hc.current = null),
      Wg(e, n),
      Cd(n, e),
      wg(Qi),
      (Zo = !!Gi),
      (Qi = Gi = null),
      (e.current = n),
      Gg(n),
      Tm(),
      (O = l),
      (F = i),
      (Ve.transition = s);
  } else e.current = n;
  if (
    (yo && ((yo = !1), (qt = e), (ms = o)),
    (s = e.pendingLanes),
    s === 0 && (Mt = null),
    Nm(n.stateNode),
    Re(e, Y()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++) r(t[n]);
  if (ps) throw ((ps = !1), (e = hl), (hl = null), e);
  return (
    ms & 1 && e.tag !== 0 && Pn(),
    (s = e.pendingLanes),
    s & 1 ? (e === pl ? _r++ : ((_r = 0), (pl = e))) : (_r = 0),
    jt(),
    null
  );
}
function Pn() {
  if (qt !== null) {
    var e = mf(ms),
      t = Ve.transition,
      n = F;
    try {
      if (((Ve.transition = null), (F = 16 > e ? 16 : e), qt === null))
        var r = !1;
      else {
        if (((e = qt), (qt = null), (ms = 0), O & 6)) throw Error(_(331));
        var o = O;
        for (O |= 4, $ = e.current; $ !== null; ) {
          var s = $,
            i = s.child;
          if ($.flags & 16) {
            var l = s.deletions;
            if (l !== null) {
              for (var c = 0; c < l.length; c++) {
                var a = l[c];
                for ($ = a; $ !== null; ) {
                  var u = $;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, u, s);
                  }
                  var h = u.child;
                  if (h !== null) (h.return = u), ($ = h);
                  else
                    for (; $ !== null; ) {
                      u = $;
                      var d = u.sibling,
                        v = u.return;
                      if ((bd(u), u === a)) {
                        $ = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = v), ($ = d);
                        break;
                      }
                      $ = v;
                    }
                }
              }
              var m = s.alternate;
              if (m !== null) {
                var E = m.child;
                if (E !== null) {
                  m.child = null;
                  do {
                    var S = E.sibling;
                    (E.sibling = null), (E = S);
                  } while (E !== null);
                }
              }
              $ = s;
            }
          }
          if (s.subtreeFlags & 2064 && i !== null) (i.return = s), ($ = i);
          else
            e: for (; $ !== null; ) {
              if (((s = $), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, s, s.return);
                }
              var p = s.sibling;
              if (p !== null) {
                (p.return = s.return), ($ = p);
                break e;
              }
              $ = s.return;
            }
        }
        var f = e.current;
        for ($ = f; $ !== null; ) {
          i = $;
          var g = i.child;
          if (i.subtreeFlags & 2064 && g !== null) (g.return = i), ($ = g);
          else
            e: for (i = f; $ !== null; ) {
              if (((l = $), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Is(9, l);
                  }
                } catch (k) {
                  J(l, l.return, k);
                }
              if (l === i) {
                $ = null;
                break e;
              }
              var w = l.sibling;
              if (w !== null) {
                (w.return = l.return), ($ = w);
                break e;
              }
              $ = l.return;
            }
        }
        if (
          ((O = o), jt(), at && typeof at.onPostCommitFiberRoot == 'function')
        )
          try {
            at.onPostCommitFiberRoot(_s, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (F = n), (Ve.transition = t);
    }
  }
  return !1;
}
function Ua(e, t, n) {
  (t = dc(n, t)),
    (t = pd(e, t, 1)),
    Pt(e, t),
    (t = ke()),
    (e = Ps(e, 1)),
    e !== null && (Qr(e, 1, t), Re(e, t));
}
function J(e, t, n) {
  if (e.tag === 3) Ua(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ua(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Mt === null || !Mt.has(r)))
        ) {
          (e = dc(n, e)),
            (e = md(t, e, 1)),
            Pt(t, e),
            (e = ke()),
            (t = Ps(t, 1)),
            t !== null && (Qr(t, 1, e), Re(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zg(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ie === e &&
      (de & n) === n &&
      (se === 4 || (se === 3 && (de & 130023424) === de && 500 > Y() - mc)
        ? Zt(e, 0)
        : (pc |= n)),
    Re(e, t);
}
function Pd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = io), (io <<= 1), !(io & 130023424) && (io = 4194304))
      : (t = 1));
  var n = ke();
  (e = Ps(e, t)), e !== null && (Qr(e, t, n), Re(e, n));
}
function ev(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pd(e, n);
}
function tv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(_(314));
  }
  r !== null && r.delete(t), Pd(e, n);
}
var Md;
Md = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Bg(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), W && t.flags & 1048576 && jf(t, as, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (e = t.pendingProps);
      var o = zn(t, we.current);
      Dn(t, n), (o = cc(null, t, r, e, o, n));
      var s = ac();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            qe(r) ? ((s = !0), os(t)) : (s = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            ec(t),
            (o.updater = qs),
            (t.stateNode = o),
            (o._reactInternals = t),
            tl(t, r, e, n),
            (t = ll(null, t, r, !0, s, n)))
          : ((t.tag = 0), W && s && tc(t), xe(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (e !== null &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = rv(r)),
          (e = Ye(r, e)),
          o)
        ) {
          case 0:
            t = il(null, t, r, e, n);
            break e;
          case 1:
            t = _a(null, t, r, e, n);
            break e;
          case 11:
            t = Ta(null, t, r, e, n);
            break e;
          case 14:
            t = ba(null, t, r, Ye(r.type, e), n);
            break e;
        }
        throw Error(_(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        il(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        _a(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((xd(t), e === null)) throw Error(_(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (o = s.element),
          zf(e, t),
          ls(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (o = Error(_(423))), (t = Na(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Error(_(424))), (t = Na(e, t, r, n, o));
            break e;
          } else
            for (
              Ce = mt(t.stateNode.containerInfo.firstChild),
                Oe = t,
                W = !0,
                et = null,
                n = Gf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Hn(), r === o)) {
            t = xt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Qf(t),
        e === null && rl(t),
        (r = t.type),
        (o = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (i = o.children),
        Ki(r, o) ? (i = null) : s !== null && Ki(r, s) && (t.flags |= 32),
        Ed(e, t),
        xe(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && rl(t), null;
    case 13:
      return kd(e, t, n);
    case 4:
      return (
        oc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        Ta(e, t, r, o, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (s = t.memoizedProps),
          (i = o.value),
          z(ss, r._currentValue),
          (r._currentValue = i),
          s !== null)
        )
          if (rt(s.value, i)) {
            if (s.children === o.children && !$e.current) {
              t = xt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var l = s.dependencies;
              if (l !== null) {
                i = s.child;
                for (var c = l.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (s.tag === 1) {
                      (c = yt(-1, n & -n)), (c.tag = 2);
                      var a = s.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var u = a.pending;
                        u === null
                          ? (c.next = c)
                          : ((c.next = u.next), (u.next = c)),
                          (a.pending = c);
                      }
                    }
                    (s.lanes |= n),
                      (c = s.alternate),
                      c !== null && (c.lanes |= n),
                      Zi(s.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (s.tag === 10) i = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((i = s.return), i === null)) throw Error(_(341));
                (i.lanes |= n),
                  (l = i.alternate),
                  l !== null && (l.lanes |= n),
                  Zi(i, n, t),
                  (i = s.sibling);
              } else i = s.child;
              if (i !== null) i.return = s;
              else
                for (i = s; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((s = i.sibling), s !== null)) {
                    (s.return = i.return), (i = s);
                    break;
                  }
                  i = i.return;
                }
              s = i;
            }
        xe(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Dn(t, n),
        (o = Ge(o)),
        (r = r(o)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = Ye(r, t.pendingProps)),
        (o = Ye(r.type, o)),
        ba(e, t, r, o, n)
      );
    case 15:
      return wd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : Ye(r, o)),
        e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
        (t.tag = 1),
        qe(r) ? ((e = !0), os(t)) : (e = !1),
        Dn(t, n),
        Bf(t, r, o),
        tl(t, r, o, n),
        ll(null, t, r, !0, e, n)
      );
    case 19:
      return Td(e, t, n);
    case 22:
      return Sd(e, t, n);
  }
  throw Error(_(156, t.tag));
};
function Od(e, t) {
  return ff(e, t);
}
function nv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function je(e, t, n, r) {
  return new nv(e, t, n, r);
}
function wc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rv(e) {
  if (typeof e == 'function') return wc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ul)) return 11;
    if (e === Fl) return 14;
  }
  return 2;
}
function zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Oo(e, t, n, r, o, s) {
  var i = 2;
  if (((r = e), typeof e == 'function')) wc(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case vn:
        return en(n.children, o, s, t);
      case Ol:
        (i = 8), (o |= 8);
        break;
      case Ni:
        return (
          (e = je(12, n, t, o | 2)), (e.elementType = Ni), (e.lanes = s), e
        );
      case Ci:
        return (e = je(13, n, t, o)), (e.elementType = Ci), (e.lanes = s), e;
      case Li:
        return (e = je(19, n, t, o)), (e.elementType = Li), (e.lanes = s), e;
      case Gu:
        return vs(n, o, s, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Vu:
              i = 10;
              break e;
            case Wu:
              i = 9;
              break e;
            case Ul:
              i = 11;
              break e;
            case Fl:
              i = 14;
              break e;
            case _t:
              (i = 16), (r = null);
              break e;
          }
        throw Error(_(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = je(i, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function en(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function vs(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Gu),
    (e.lanes = n),
    (e.stateNode = {}),
    e
  );
}
function vi(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function yi(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ov(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zs(0)),
    (this.expirationTimes = Zs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Sc(e, t, n, r, o, s, i, l, c) {
  return (
    (e = new ov(e, t, n, l, c)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = je(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ec(s),
    e
  );
}
function sv(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ud(e) {
  if (!e) return Ft;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(_(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(_(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (qe(n)) return Uf(e, n, t);
  }
  return t;
}
function Fd(e, t, n, r, o, s, i, l, c) {
  return (
    (e = Sc(n, r, !0, e, o, s, i, l, c)),
    (e.context = Ud(null)),
    (n = e.current),
    (r = ke()),
    (o = Ot(n)),
    (s = yt(r, o)),
    (s.callback = t ?? null),
    Pt(n, s),
    (e.current.lanes = o),
    Qr(e, o, r),
    Re(e, r),
    e
  );
}
function Ms(e, t, n, r) {
  var o = t.current,
    s = ke(),
    i = Ot(o);
  return (
    (n = Ud(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = yt(s, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    Pt(o, t),
    (e = We(o, i, s)),
    e !== null && Ro(e, o, i),
    i
  );
}
function ys(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Fa(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ec(e, t) {
  Fa(e, t), (e = e.alternate) && Fa(e, t);
}
function iv() {
  return null;
}
var zd =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function xc(e) {
  this._internalRoot = e;
}
Os.prototype.render = xc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(_(409));
  Ms(e, t, null, null);
};
Os.prototype.unmount = xc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ln(function () {
      Ms(null, e, null, null);
    }),
      (t[Et] = null);
  }
};
function Os(e) {
  this._internalRoot = e;
}
Os.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ct.length && t !== 0 && t < Ct[n].priority; n++);
    Ct.splice(n, 0, e), n === 0 && Sf(e);
  }
};
function kc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Us(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function za() {}
function lv(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var s = r;
      r = function () {
        var a = ys(i);
        s.call(a);
      };
    }
    var i = Fd(t, r, e, 0, null, !1, !1, '', za);
    return (
      (e._reactRootContainer = i),
      (e[Et] = i.current),
      Pr(e.nodeType === 8 ? e.parentNode : e),
      ln(),
      i
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var l = r;
    r = function () {
      var a = ys(c);
      l.call(a);
    };
  }
  var c = Sc(e, 0, !1, null, null, !1, !1, '', za);
  return (
    (e._reactRootContainer = c),
    (e[Et] = c.current),
    Pr(e.nodeType === 8 ? e.parentNode : e),
    ln(function () {
      Ms(t, c, n, r);
    }),
    c
  );
}
function Fs(e, t, n, r, o) {
  var s = n._reactRootContainer;
  if (s) {
    var i = s;
    if (typeof o == 'function') {
      var l = o;
      o = function () {
        var c = ys(i);
        l.call(c);
      };
    }
    Ms(t, i, e, o);
  } else i = lv(n, t, e, o, r);
  return ys(i);
}
gf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = pr(t.pendingLanes);
        n !== 0 &&
          (Bl(t, n | 1), Re(t, Y()), !(O & 6) && ((Vn = Y() + 500), jt()));
      }
      break;
    case 13:
      var r = ke();
      ln(function () {
        return We(e, 1, r);
      }),
        Ec(e, 1);
  }
};
jl = function (e) {
  if (e.tag === 13) {
    var t = ke();
    We(e, 134217728, t), Ec(e, 134217728);
  }
};
vf = function (e) {
  if (e.tag === 13) {
    var t = ke(),
      n = Ot(e);
    We(e, n, t), Ec(e, n);
  }
};
yf = function () {
  return F;
};
wf = function (e, t) {
  var n = F;
  try {
    return (F = e), t();
  } finally {
    F = n;
  }
};
Ui = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((qi(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = As(r);
            if (!o) throw Error(_(90));
            Ku(r), qi(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Ju(e, n);
      break;
    case 'select':
      (t = n.value), t != null && $n(e, !!n.multiple, t, !1);
  }
};
of = gc;
sf = ln;
var cv = { usingClientEntryPoint: !1, Events: [Xr, En, As, nf, rf, gc] },
  lr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: '18.1.0',
    rendererPackageName: 'react-dom',
  },
  av = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: kt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = af(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || iv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.1.0-next-22edb9f77-20220426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wo.isDisabled && wo.supportsFiber)
    try {
      (_s = wo.inject(av)), (at = wo);
    } catch {}
}
Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cv;
Fe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!kc(t)) throw Error(_(200));
  return sv(e, t, null, n);
};
Fe.createRoot = function (e, t) {
  if (!kc(e)) throw Error(_(299));
  var n = !1,
    r = '',
    o = zd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Sc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Et] = t.current),
    Pr(e.nodeType === 8 ? e.parentNode : e),
    new xc(t)
  );
};
Fe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(_(188))
      : ((e = Object.keys(e).join(',')), Error(_(268, e)));
  return (e = af(t)), (e = e === null ? null : e.stateNode), e;
};
Fe.flushSync = function (e) {
  return ln(e);
};
Fe.hydrate = function (e, t, n) {
  if (!Us(t)) throw Error(_(200));
  return Fs(null, e, t, !0, n);
};
Fe.hydrateRoot = function (e, t, n) {
  if (!kc(e)) throw Error(_(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    s = '',
    i = zd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Fd(t, null, e, 1, n ?? null, o, !1, s, i)),
    (e[Et] = t.current),
    Pr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Os(t);
};
Fe.render = function (e, t, n) {
  if (!Us(t)) throw Error(_(200));
  return Fs(null, e, t, !1, n);
};
Fe.unmountComponentAtNode = function (e) {
  if (!Us(e)) throw Error(_(40));
  return e._reactRootContainer
    ? (ln(function () {
        Fs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Et] = null);
        });
      }),
      !0)
    : !1;
};
Fe.unstable_batchedUpdates = gc;
Fe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Us(n)) throw Error(_(200));
  if (e == null || e._reactInternals === void 0) throw Error(_(38));
  return Fs(e, t, n, !1, r);
};
Fe.version = '18.1.0-next-22edb9f77-20220426';
function Hd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hd);
    } catch (e) {
      console.error(e);
    }
}
Hd(), (Fu.exports = Fe);
var rY = Fu.exports;
const So = ({
    children: e,
    title: t = '',
    icon: n,
    disabled: r = !1,
    toggled: o = !1,
    onClick: s = () => {},
    style: i,
  }) => {
    let l = `toolbar-button ${n}`;
    return (
      o && (l += ' toggled'),
      A('button', {
        className: l,
        onMouseDown: Ha,
        onClick: s,
        onDoubleClick: Ha,
        title: t,
        disabled: !!r,
        style: i,
        children: [
          n &&
            y('span', {
              className: `codicon codicon-${n}`,
              style: e ? { marginRight: 5 } : {},
            }),
          e,
        ],
      })
    );
  },
  Ha = (e) => {
    e.stopPropagation(), e.preventDefault();
  },
  Uo = Symbol('context'),
  Bd = Symbol('next'),
  jd = Symbol('prev'),
  Ba = Symbol('events'),
  ja = Symbol('resources');
class oY {
  constructor(t) {
    Ee(this, 'startTime');
    Ee(this, 'endTime');
    Ee(this, 'browserName');
    Ee(this, 'platform');
    Ee(this, 'wallTime');
    Ee(this, 'title');
    Ee(this, 'options');
    Ee(this, 'pages');
    Ee(this, 'actions');
    Ee(this, 'events');
    Ee(this, 'hasSource');
    Ee(this, 'sdkLanguage');
    Ee(this, 'testIdAttributeName');
    Ee(this, 'sources');
    var n, r, o, s, i, l;
    t.forEach((c) => uv(c)),
      (this.browserName = ((n = t[0]) == null ? void 0 : n.browserName) || ''),
      (this.sdkLanguage = (r = t[0]) == null ? void 0 : r.sdkLanguage),
      (this.testIdAttributeName =
        (o = t[0]) == null ? void 0 : o.testIdAttributeName),
      (this.platform = ((s = t[0]) == null ? void 0 : s.platform) || ''),
      (this.title = ((i = t[0]) == null ? void 0 : i.title) || ''),
      (this.options = ((l = t[0]) == null ? void 0 : l.options) || {}),
      (this.wallTime = t
        .map((c) => c.wallTime)
        .reduce(
          (c, a) => Math.min(c || Number.MAX_VALUE, a),
          Number.MAX_VALUE
        )),
      (this.startTime = t
        .map((c) => c.startTime)
        .reduce((c, a) => Math.min(c, a), Number.MAX_VALUE)),
      (this.endTime = t
        .map((c) => c.endTime)
        .reduce((c, a) => Math.max(c, a), Number.MIN_VALUE)),
      (this.pages = [].concat(...t.map((c) => c.pages))),
      (this.actions = fv(t)),
      (this.events = [].concat(...t.map((c) => c.events))),
      (this.hasSource = t.some((c) => c.hasSource)),
      this.events.sort((c, a) => c.time - a.time),
      (this.sources = hv(this.actions));
  }
}
function uv(e) {
  for (const n of e.pages) n[Uo] = e;
  for (let n = 0; n < e.actions.length; ++n) {
    const r = e.actions[n];
    r[Uo] = e;
  }
  let t;
  for (let n = e.actions.length - 1; n >= 0; n--) {
    const r = e.actions[n];
    (r[Bd] = t), r.apiName.includes('route.') || (t = r);
  }
  for (const n of e.events) n[Uo] = e;
}
function fv(e) {
  const t = new Map();
  let n = 0;
  const r = e.filter((l) => l.isPrimary),
    o = e.filter((l) => !l.isPrimary);
  for (const l of r) {
    for (const c of l.actions)
      t.set(`${c.apiName}@${c.wallTime}`, { ...c, context: l });
    !n &&
      l.actions.length &&
      (n = l.actions[0].startTime - l.actions[0].wallTime);
  }
  const s = new Map();
  for (const l of o)
    for (const c of l.actions) {
      if (n) {
        const h = c.endTime - c.startTime;
        c.startTime && (c.startTime = c.wallTime + n),
          c.endTime && (c.endTime = c.startTime + h);
      }
      const a = `${c.apiName}@${c.wallTime}`,
        u = t.get(a);
      if (u && u.apiName === c.apiName) {
        s.set(c.callId, u.callId),
          c.error && (u.error = c.error),
          c.attachments && (u.attachments = c.attachments),
          c.parentId && (u.parentId = s.get(c.parentId) ?? c.parentId);
        continue;
      }
      t.set(a, { ...c, context: l });
    }
  const i = [...t.values()];
  i.sort((l, c) =>
    c.parentId === l.callId
      ? -1
      : l.parentId === c.callId
      ? 1
      : l.wallTime - c.wallTime || l.startTime - c.startTime
  );
  for (let l = 1; l < i.length; ++l) i[l][jd] = i[l - 1];
  return i;
}
function sY(e) {
  return `${e.pageId || 'none'}:${e.callId}`;
}
function Wn(e) {
  return e[Uo];
}
function Vd(e) {
  return e[Bd];
}
function dv(e) {
  return e[jd];
}
function Wd(e) {
  var o;
  let t = 0,
    n = 0;
  const r = Wn(e);
  for (const s of Gd(e)) {
    if (s.method === 'console') {
      const { guid: i } = s.params.message,
        l = (o = r.initializers[i]) == null ? void 0 : o.type;
      l === 'warning' ? ++n : l === 'error' && ++t;
    }
    s.method === 'pageError' && ++t;
  }
  return { errors: t, warnings: n };
}
function Gd(e) {
  let t = e[Ba];
  if (t) return t;
  const n = Vd(e);
  return (
    (t = Wn(e).events.filter(
      (r) => r.time >= e.startTime && (!n || r.time < n.startTime)
    )),
    (e[Ba] = t),
    t
  );
}
function Qd(e) {
  let t = e[ja];
  if (t) return t;
  const n = Vd(e);
  return (
    (t = Wn(e).resources.filter(
      (r) =>
        typeof r._monotonicTime == 'number' &&
        r._monotonicTime > e.startTime &&
        (!n || r._monotonicTime < n.startTime)
    )),
    (e[ja] = t),
    t
  );
}
function hv(e) {
  var n, r;
  const t = new Map();
  for (const o of e) {
    for (const s of o.stack || []) {
      let i = t.get(s.file);
      i || ((i = { errors: [], content: void 0 }), t.set(s.file, i));
    }
    o.error &&
      (n = o.stack) != null &&
      n[0] &&
      t
        .get(o.stack[0].file)
        .errors.push({
          line: ((r = o.stack) == null ? void 0 : r[0].line) || 0,
          message: o.error.message,
        });
  }
  return t;
}
const wi = 50,
  vl = ({
    sidebarSize: e,
    sidebarHidden: t = !1,
    sidebarIsFirst: n = !1,
    orientation: r = 'vertical',
    children: o,
  }) => {
    const [s, i] = q.useState(Math.max(wi, e)),
      [l, c] = q.useState(null),
      a = q.Children.toArray(o);
    document.body.style.userSelect = l ? 'none' : 'inherit';
    let u = {};
    return (
      r === 'vertical'
        ? n
          ? (u = {
              top: l ? 0 : s - 4,
              bottom: l ? 0 : void 0,
              height: l ? 'initial' : 8,
            })
          : (u = {
              bottom: l ? 0 : s - 4,
              top: l ? 0 : void 0,
              height: l ? 'initial' : 8,
            })
        : n
        ? (u = {
            left: l ? 0 : s - 4,
            right: l ? 0 : void 0,
            width: l ? 'initial' : 8,
          })
        : (u = {
            right: l ? 0 : s - 4,
            left: l ? 0 : void 0,
            width: l ? 'initial' : 8,
          }),
      A('div', {
        className: 'split-view ' + r + (n ? ' sidebar-first' : ''),
        children: [
          y('div', { className: 'split-view-main', children: a[0] }),
          !t &&
            y('div', {
              style: { flexBasis: s },
              className: 'split-view-sidebar',
              children: a[1],
            }),
          !t &&
            y('div', {
              style: u,
              className: 'split-view-resizer',
              onMouseDown: (h) =>
                c({
                  offset: r === 'vertical' ? h.clientY : h.clientX,
                  size: s,
                }),
              onMouseUp: () => c(null),
              onMouseMove: (h) => {
                if (!h.buttons) c(null);
                else if (l) {
                  const v =
                      (r === 'vertical' ? h.clientY : h.clientX) - l.offset,
                    m = n ? l.size + v : l.size - v,
                    S = h.target.parentElement.getBoundingClientRect(),
                    p = Math.min(
                      Math.max(wi, m),
                      (r === 'vertical' ? S.height : S.width) - wi
                    );
                  i(p);
                }
              },
            }),
        ],
      })
    );
  };
function zs(e, t = "'") {
  const n = JSON.stringify(e),
    r = n.substring(1, n.length - 1).replace(/\\"/g, '"');
  if (t === "'") return t + r.replace(/[']/g, "\\'") + t;
  if (t === '"') return t + r.replace(/["]/g, '\\"') + t;
  if (t === '`') return t + r.replace(/[`]/g, '`') + t;
  throw new Error('Invalid escape char');
}
function Tc(e) {
  return typeof e == 'string' || e instanceof String;
}
function ws(e) {
  return e.charAt(0).toUpperCase() + e.substring(1);
}
function Kd(e) {
  return e
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1_$2')
    .toLowerCase();
}
function lt(e) {
  let t = '';
  for (let n = 0; n < e.length; n++) t += pv(e, n);
  return t;
}
function pv(e, t) {
  const n = e.charCodeAt(t);
  return n === 0
    ? '�'
    : (n >= 1 && n <= 31) ||
      (n >= 48 && n <= 57 && (t === 0 || (t === 1 && e.charCodeAt(0) === 45)))
    ? '\\' + n.toString(16) + ' '
    : t === 0 && n === 45 && e.length === 1
    ? '\\' + e.charAt(t)
    : n >= 128 ||
      n === 45 ||
      n === 95 ||
      (n >= 48 && n <= 57) ||
      (n >= 65 && n <= 90) ||
      (n >= 97 && n <= 122)
    ? e.charAt(t)
    : '\\' + e.charAt(t);
}
function Ae(e) {
  return e
    .replace(/\u200b/g, '')
    .trim()
    .replace(/\s+/g, ' ');
}
function ft(e, t) {
  return typeof e != 'string'
    ? String(e)
    : `${JSON.stringify(e)}${t ? 's' : 'i'}`;
}
function ue(e, t) {
  return `"${e.replace(/\\/g, '\\\\').replace(/["]/g, '\\"')}"${t ? 's' : 'i'}`;
}
const te = function (e, t, n) {
  return e >= t && e <= n;
};
function _e(e) {
  return te(e, 48, 57);
}
function Va(e) {
  return _e(e) || te(e, 65, 70) || te(e, 97, 102);
}
function mv(e) {
  return te(e, 65, 90);
}
function gv(e) {
  return te(e, 97, 122);
}
function vv(e) {
  return mv(e) || gv(e);
}
function yv(e) {
  return e >= 128;
}
function Fo(e) {
  return vv(e) || yv(e) || e === 95;
}
function Wa(e) {
  return Fo(e) || _e(e) || e === 45;
}
function wv(e) {
  return te(e, 0, 8) || e === 11 || te(e, 14, 31) || e === 127;
}
function zo(e) {
  return e === 10;
}
function dt(e) {
  return zo(e) || e === 9 || e === 32;
}
const Sv = 1114111;
class bc extends Error {
  constructor(t) {
    super(t), (this.name = 'InvalidCharacterError');
  }
}
function Ev(e) {
  const t = [];
  for (let n = 0; n < e.length; n++) {
    let r = e.charCodeAt(n);
    if (
      (r === 13 && e.charCodeAt(n + 1) === 10 && ((r = 10), n++),
      (r === 13 || r === 12) && (r = 10),
      r === 0 && (r = 65533),
      te(r, 55296, 56319) && te(e.charCodeAt(n + 1), 56320, 57343))
    ) {
      const o = r - 55296,
        s = e.charCodeAt(n + 1) - 56320;
      (r = Math.pow(2, 16) + o * Math.pow(2, 10) + s), n++;
    }
    t.push(r);
  }
  return t;
}
function re(e) {
  if (e <= 65535) return String.fromCharCode(e);
  e -= Math.pow(2, 16);
  const t = Math.floor(e / Math.pow(2, 10)) + 55296,
    n = (e % Math.pow(2, 10)) + 56320;
  return String.fromCharCode(t) + String.fromCharCode(n);
}
function xv(e) {
  const t = Ev(e);
  let n = -1;
  const r = [];
  let o;
  const s = function (T) {
      return T >= t.length ? -1 : t[T];
    },
    i = function (T) {
      if ((T === void 0 && (T = 1), T > 3))
        throw 'Spec Error: no more than three codepoints of lookahead.';
      return s(n + T);
    },
    l = function (T) {
      return T === void 0 && (T = 1), (n += T), (o = s(n)), !0;
    },
    c = function () {
      return (n -= 1), !0;
    },
    a = function (T) {
      return T === void 0 && (T = o), T === -1;
    },
    u = function () {
      if ((h(), l(), dt(o))) {
        for (; dt(i()); ) l();
        return new yl();
      } else {
        if (o === 34) return m();
        if (o === 35)
          if (Wa(i()) || p(i(1), i(2))) {
            const T = new ah('');
            return g(i(1), i(2), i(3)) && (T.type = 'id'), (T.value = x()), T;
          } else return new ge(o);
        else
          return o === 36
            ? i() === 61
              ? (l(), new Nv())
              : new ge(o)
            : o === 39
            ? m()
            : o === 40
            ? new kv()
            : o === 41
            ? new sh()
            : o === 42
            ? i() === 61
              ? (l(), new Cv())
              : new ge(o)
            : o === 43
            ? b()
              ? (c(), d())
              : new ge(o)
            : o === 44
            ? new th()
            : o === 45
            ? b()
              ? (c(), d())
              : i(1) === 45 && i(2) === 62
              ? (l(2), new Yd())
              : w()
              ? (c(), v())
              : new ge(o)
            : o === 46
            ? b()
              ? (c(), d())
              : new ge(o)
            : o === 58
            ? new Zd()
            : o === 59
            ? new eh()
            : o === 60
            ? i(1) === 33 && i(2) === 45 && i(3) === 45
              ? (l(3), new Jd())
              : new ge(o)
            : o === 64
            ? g(i(1), i(2), i(3))
              ? new ch(x())
              : new ge(o)
            : o === 91
            ? new oh()
            : o === 92
            ? f()
              ? (c(), v())
              : new ge(o)
            : o === 93
            ? new wl()
            : o === 94
            ? i() === 61
              ? (l(), new _v())
              : new ge(o)
            : o === 123
            ? new nh()
            : o === 124
            ? i() === 61
              ? (l(), new bv())
              : i() === 124
              ? (l(), new ih())
              : new ge(o)
            : o === 125
            ? new rh()
            : o === 126
            ? i() === 61
              ? (l(), new Tv())
              : new ge(o)
            : _e(o)
            ? (c(), d())
            : Fo(o)
            ? (c(), v())
            : a()
            ? new Bo()
            : new ge(o);
      }
    },
    h = function () {
      for (; i(1) === 47 && i(2) === 42; )
        for (l(2); ; )
          if ((l(), o === 42 && i() === 47)) {
            l();
            break;
          } else if (a()) return;
    },
    d = function () {
      const T = N();
      if (g(i(1), i(2), i(3))) {
        const L = new Lv();
        return (
          (L.value = T.value),
          (L.repr = T.repr),
          (L.type = T.type),
          (L.unit = x()),
          L
        );
      } else if (i() === 37) {
        l();
        const L = new hh();
        return (L.value = T.value), (L.repr = T.repr), L;
      } else {
        const L = new dh();
        return (L.value = T.value), (L.repr = T.repr), (L.type = T.type), L;
      }
    },
    v = function () {
      const T = x();
      if (T.toLowerCase() === 'url' && i() === 40) {
        for (l(); dt(i(1)) && dt(i(2)); ) l();
        return i() === 34 || i() === 39
          ? new jo(T)
          : dt(i()) && (i(2) === 34 || i(2) === 39)
          ? new jo(T)
          : E();
      } else return i() === 40 ? (l(), new jo(T)) : new lh(T);
    },
    m = function (T) {
      T === void 0 && (T = o);
      let L = '';
      for (; l(); ) {
        if (o === T || a()) return new uh(L);
        if (zo(o)) return c(), new Xd();
        o === 92 ? a(i()) || (zo(i()) ? l() : (L += re(S()))) : (L += re(o));
      }
      throw new Error('Internal error');
    },
    E = function () {
      const T = new fh('');
      for (; dt(i()); ) l();
      if (a(i())) return T;
      for (; l(); ) {
        if (o === 41 || a()) return T;
        if (dt(o)) {
          for (; dt(i()); ) l();
          return i() === 41 || a(i()) ? (l(), T) : (I(), new Ho());
        } else {
          if (o === 34 || o === 39 || o === 40 || wv(o)) return I(), new Ho();
          if (o === 92)
            if (f()) T.value += re(S());
            else return I(), new Ho();
          else T.value += re(o);
        }
      }
      throw new Error('Internal error');
    },
    S = function () {
      if ((l(), Va(o))) {
        const T = [o];
        for (let U = 0; U < 5 && Va(i()); U++) l(), T.push(o);
        dt(i()) && l();
        let L = parseInt(
          T.map(function (U) {
            return String.fromCharCode(U);
          }).join(''),
          16
        );
        return L > Sv && (L = 65533), L;
      } else return a() ? 65533 : o;
    },
    p = function (T, L) {
      return !(T !== 92 || zo(L));
    },
    f = function () {
      return p(o, i());
    },
    g = function (T, L, U) {
      return T === 45
        ? Fo(L) || L === 45 || p(L, U)
        : Fo(T)
        ? !0
        : T === 92
        ? p(T, L)
        : !1;
    },
    w = function () {
      return g(o, i(1), i(2));
    },
    k = function (T, L, U) {
      return T === 43 || T === 45
        ? !!(_e(L) || (L === 46 && _e(U)))
        : T === 46
        ? !!_e(L)
        : !!_e(T);
    },
    b = function () {
      return k(o, i(1), i(2));
    },
    x = function () {
      let T = '';
      for (; l(); )
        if (Wa(o)) T += re(o);
        else if (f()) T += re(S());
        else return c(), T;
      throw new Error('Internal parse error');
    },
    N = function () {
      let T = '',
        L = 'integer';
      for ((i() === 43 || i() === 45) && (l(), (T += re(o))); _e(i()); )
        l(), (T += re(o));
      if (i(1) === 46 && _e(i(2)))
        for (l(), T += re(o), l(), T += re(o), L = 'number'; _e(i()); )
          l(), (T += re(o));
      const U = i(1),
        X = i(2),
        ee = i(3);
      if ((U === 69 || U === 101) && _e(X))
        for (l(), T += re(o), l(), T += re(o), L = 'number'; _e(i()); )
          l(), (T += re(o));
      else if ((U === 69 || U === 101) && (X === 43 || X === 45) && _e(ee))
        for (
          l(), T += re(o), l(), T += re(o), l(), T += re(o), L = 'number';
          _e(i());

        )
          l(), (T += re(o));
      const Se = R(T);
      return { type: L, value: Se, repr: T };
    },
    R = function (T) {
      return +T;
    },
    I = function () {
      for (; l(); ) {
        if (o === 41 || a()) return;
        f() && S();
      }
    };
  let H = 0;
  for (; !a(i()); )
    if ((r.push(u()), H++, H > t.length * 2))
      throw new Error("I'm infinite-looping!");
  return r;
}
class Z {
  constructor() {
    this.tokenType = '';
  }
  toJSON() {
    return { token: this.tokenType };
  }
  toString() {
    return this.tokenType;
  }
  toSource() {
    return '' + this;
  }
}
class Xd extends Z {
  constructor() {
    super(...arguments), (this.tokenType = 'BADSTRING');
  }
}
class Ho extends Z {
  constructor() {
    super(...arguments), (this.tokenType = 'BADURL');
  }
}
class yl extends Z {
  constructor() {
    super(...arguments), (this.tokenType = 'WHITESPACE');
  }
  toString() {
    return 'WS';
  }
  toSource() {
    return ' ';
  }
}
class Jd extends Z {
  constructor() {
    super(...arguments), (this.tokenType = 'CDO');
  }
  toSource() {
    return '<!--';
  }
}
class Yd extends Z {
  constructor() {
    super(...arguments), (this.tokenType = 'CDC');
  }
  toSource() {
    return '-->';
  }
}
class Zd extends Z {
  constructor() {
    super(...arguments), (this.tokenType = ':');
  }
}
class eh extends Z {
  constructor() {
    super(...arguments), (this.tokenType = ';');
  }
}
class th extends Z {
  constructor() {
    super(...arguments), (this.tokenType = ',');
  }
}
class Xn extends Z {
  constructor() {
    super(...arguments), (this.value = ''), (this.mirror = '');
  }
}
class nh extends Xn {
  constructor() {
    super(), (this.tokenType = '{'), (this.value = '{'), (this.mirror = '}');
  }
}
class rh extends Xn {
  constructor() {
    super(), (this.tokenType = '}'), (this.value = '}'), (this.mirror = '{');
  }
}
class oh extends Xn {
  constructor() {
    super(), (this.tokenType = '['), (this.value = '['), (this.mirror = ']');
  }
}
class wl extends Xn {
  constructor() {
    super(), (this.tokenType = ']'), (this.value = ']'), (this.mirror = '[');
  }
}
class kv extends Xn {
  constructor() {
    super(), (this.tokenType = '('), (this.value = '('), (this.mirror = ')');
  }
}
class sh extends Xn {
  constructor() {
    super(), (this.tokenType = ')'), (this.value = ')'), (this.mirror = '(');
  }
}
class Tv extends Z {
  constructor() {
    super(...arguments), (this.tokenType = '~=');
  }
}
class bv extends Z {
  constructor() {
    super(...arguments), (this.tokenType = '|=');
  }
}
class _v extends Z {
  constructor() {
    super(...arguments), (this.tokenType = '^=');
  }
}
class Nv extends Z {
  constructor() {
    super(...arguments), (this.tokenType = '$=');
  }
}
class Cv extends Z {
  constructor() {
    super(...arguments), (this.tokenType = '*=');
  }
}
class ih extends Z {
  constructor() {
    super(...arguments), (this.tokenType = '||');
  }
}
class Bo extends Z {
  constructor() {
    super(...arguments), (this.tokenType = 'EOF');
  }
  toSource() {
    return '';
  }
}
class ge extends Z {
  constructor(t) {
    super(),
      (this.tokenType = 'DELIM'),
      (this.value = ''),
      (this.value = re(t));
  }
  toString() {
    return 'DELIM(' + this.value + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
  toSource() {
    return this.value === '\\'
      ? `\\
`
      : this.value;
  }
}
class Jn extends Z {
  constructor() {
    super(...arguments), (this.value = '');
  }
  ASCIIMatch(t) {
    return this.value.toLowerCase() === t.toLowerCase();
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), t;
  }
}
class lh extends Jn {
  constructor(t) {
    super(), (this.tokenType = 'IDENT'), (this.value = t);
  }
  toString() {
    return 'IDENT(' + this.value + ')';
  }
  toSource() {
    return Yr(this.value);
  }
}
class jo extends Jn {
  constructor(t) {
    super(),
      (this.tokenType = 'FUNCTION'),
      (this.value = t),
      (this.mirror = ')');
  }
  toString() {
    return 'FUNCTION(' + this.value + ')';
  }
  toSource() {
    return Yr(this.value) + '(';
  }
}
class ch extends Jn {
  constructor(t) {
    super(), (this.tokenType = 'AT-KEYWORD'), (this.value = t);
  }
  toString() {
    return 'AT(' + this.value + ')';
  }
  toSource() {
    return '@' + Yr(this.value);
  }
}
class ah extends Jn {
  constructor(t) {
    super(),
      (this.tokenType = 'HASH'),
      (this.value = t),
      (this.type = 'unrestricted');
  }
  toString() {
    return 'HASH(' + this.value + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.type = this.type), t;
  }
  toSource() {
    return this.type === 'id' ? '#' + Yr(this.value) : '#' + Av(this.value);
  }
}
class uh extends Jn {
  constructor(t) {
    super(), (this.tokenType = 'STRING'), (this.value = t);
  }
  toString() {
    return '"' + ph(this.value) + '"';
  }
}
class fh extends Jn {
  constructor(t) {
    super(), (this.tokenType = 'URL'), (this.value = t);
  }
  toString() {
    return 'URL(' + this.value + ')';
  }
  toSource() {
    return 'url("' + ph(this.value) + '")';
  }
}
class dh extends Z {
  constructor() {
    super(),
      (this.tokenType = 'NUMBER'),
      (this.type = 'integer'),
      (this.repr = '');
  }
  toString() {
    return this.type === 'integer'
      ? 'INT(' + this.value + ')'
      : 'NUMBER(' + this.value + ')';
  }
  toJSON() {
    const t = super.toJSON();
    return (
      (t.value = this.value), (t.type = this.type), (t.repr = this.repr), t
    );
  }
  toSource() {
    return this.repr;
  }
}
class hh extends Z {
  constructor() {
    super(), (this.tokenType = 'PERCENTAGE'), (this.repr = '');
  }
  toString() {
    return 'PERCENTAGE(' + this.value + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (t.value = this.value), (t.repr = this.repr), t;
  }
  toSource() {
    return this.repr + '%';
  }
}
class Lv extends Z {
  constructor() {
    super(),
      (this.tokenType = 'DIMENSION'),
      (this.type = 'integer'),
      (this.repr = ''),
      (this.unit = '');
  }
  toString() {
    return 'DIM(' + this.value + ',' + this.unit + ')';
  }
  toJSON() {
    const t =
      this.constructor.prototype.constructor.prototype.toJSON.call(this);
    return (
      (t.value = this.value),
      (t.type = this.type),
      (t.repr = this.repr),
      (t.unit = this.unit),
      t
    );
  }
  toSource() {
    const t = this.repr;
    let n = Yr(this.unit);
    return (
      n[0].toLowerCase() === 'e' &&
        (n[1] === '-' || te(n.charCodeAt(1), 48, 57)) &&
        (n = '\\65 ' + n.slice(1, n.length)),
      t + n
    );
  }
}
function Yr(e) {
  e = '' + e;
  let t = '';
  const n = e.charCodeAt(0);
  for (let r = 0; r < e.length; r++) {
    const o = e.charCodeAt(r);
    if (o === 0) throw new bc('Invalid character: the input contains U+0000.');
    te(o, 1, 31) ||
    o === 127 ||
    (r === 0 && te(o, 48, 57)) ||
    (r === 1 && te(o, 48, 57) && n === 45)
      ? (t += '\\' + o.toString(16) + ' ')
      : o >= 128 ||
        o === 45 ||
        o === 95 ||
        te(o, 48, 57) ||
        te(o, 65, 90) ||
        te(o, 97, 122)
      ? (t += e[r])
      : (t += '\\' + e[r]);
  }
  return t;
}
function Av(e) {
  e = '' + e;
  let t = '';
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new bc('Invalid character: the input contains U+0000.');
    r >= 128 ||
    r === 45 ||
    r === 95 ||
    te(r, 48, 57) ||
    te(r, 65, 90) ||
    te(r, 97, 122)
      ? (t += e[n])
      : (t += '\\' + r.toString(16) + ' ');
  }
  return t;
}
function ph(e) {
  e = '' + e;
  let t = '';
  for (let n = 0; n < e.length; n++) {
    const r = e.charCodeAt(n);
    if (r === 0) throw new bc('Invalid character: the input contains U+0000.');
    te(r, 1, 31) || r === 127
      ? (t += '\\' + r.toString(16) + ' ')
      : r === 34 || r === 92
      ? (t += '\\' + e[n])
      : (t += e[n]);
  }
  return t;
}
class ye extends Error {}
function $v(e, t) {
  let n;
  try {
    (n = xv(e)), n[n.length - 1] instanceof Bo || n.push(new Bo());
  } catch (x) {
    const N = x.message + ` while parsing selector "${e}"`,
      R = (x.stack || '').indexOf(x.message);
    throw (
      (R !== -1 &&
        (x.stack =
          x.stack.substring(0, R) +
          N +
          x.stack.substring(R + x.message.length)),
      (x.message = N),
      x)
    );
  }
  const r = n.find(
    (x) =>
      x instanceof ch ||
      x instanceof Xd ||
      x instanceof Ho ||
      x instanceof ih ||
      x instanceof Jd ||
      x instanceof Yd ||
      x instanceof eh ||
      x instanceof nh ||
      x instanceof rh ||
      x instanceof fh ||
      x instanceof hh
  );
  if (r)
    throw new ye(
      `Unsupported token "${r.toSource()}" while parsing selector "${e}"`
    );
  let o = 0;
  const s = new Set();
  function i() {
    return new ye(
      `Unexpected token "${n[o].toSource()}" while parsing selector "${e}"`
    );
  }
  function l() {
    for (; n[o] instanceof yl; ) o++;
  }
  function c(x = o) {
    return n[x] instanceof lh;
  }
  function a(x = o) {
    return n[x] instanceof uh;
  }
  function u(x = o) {
    return n[x] instanceof dh;
  }
  function h(x = o) {
    return n[x] instanceof th;
  }
  function d(x = o) {
    return n[x] instanceof sh;
  }
  function v(x = o) {
    return n[x] instanceof ge && n[x].value === '*';
  }
  function m(x = o) {
    return n[x] instanceof Bo;
  }
  function E(x = o) {
    return n[x] instanceof ge && ['>', '+', '~'].includes(n[x].value);
  }
  function S(x = o) {
    return h(x) || d(x) || m(x) || E(x) || n[x] instanceof yl;
  }
  function p() {
    const x = [f()];
    for (; l(), !!h(); ) o++, x.push(f());
    return x;
  }
  function f() {
    return l(), u() || a() ? n[o++].value : g();
  }
  function g() {
    const x = { simples: [] };
    for (
      l(),
        E()
          ? x.simples.push({
              selector: { functions: [{ name: 'scope', args: [] }] },
              combinator: '',
            })
          : x.simples.push({ selector: w(), combinator: '' });
      ;

    ) {
      if ((l(), E()))
        (x.simples[x.simples.length - 1].combinator = n[o++].value), l();
      else if (S()) break;
      x.simples.push({ combinator: '', selector: w() });
    }
    return x;
  }
  function w() {
    let x = '';
    const N = [];
    for (; !S(); )
      if (c() || v()) x += n[o++].toSource();
      else if (n[o] instanceof ah) x += n[o++].toSource();
      else if (n[o] instanceof ge && n[o].value === '.')
        if ((o++, c())) x += '.' + n[o++].toSource();
        else throw i();
      else if (n[o] instanceof Zd)
        if ((o++, c()))
          if (!t.has(n[o].value.toLowerCase())) x += ':' + n[o++].toSource();
          else {
            const R = n[o++].value.toLowerCase();
            N.push({ name: R, args: [] }), s.add(R);
          }
        else if (n[o] instanceof jo) {
          const R = n[o++].value.toLowerCase();
          if (
            (t.has(R)
              ? (N.push({ name: R, args: p() }), s.add(R))
              : (x += `:${R}(${k()})`),
            l(),
            !d())
          )
            throw i();
          o++;
        } else throw i();
      else if (n[o] instanceof oh) {
        for (x += '[', o++; !(n[o] instanceof wl) && !m(); )
          x += n[o++].toSource();
        if (!(n[o] instanceof wl)) throw i();
        (x += ']'), o++;
      } else throw i();
    if (!x && !N.length) throw i();
    return { css: x || void 0, functions: N };
  }
  function k() {
    let x = '';
    for (; !d() && !m(); ) x += n[o++].toSource();
    return x;
  }
  const b = p();
  if (!m()) throw new ye(`Error while parsing selector "${e}"`);
  if (b.some((x) => typeof x != 'object' || !('simples' in x)))
    throw new ye(`Error while parsing selector "${e}"`);
  return { selector: b, names: Array.from(s) };
}
const Sl = new Set([
    'internal:has',
    'internal:has-not',
    'internal:and',
    'internal:or',
    'left-of',
    'right-of',
    'above',
    'below',
    'near',
  ]),
  qv = new Set(['left-of', 'right-of', 'above', 'below', 'near']),
  mh = new Set([
    'not',
    'is',
    'where',
    'has',
    'scope',
    'light',
    'visible',
    'text',
    'text-matches',
    'text-is',
    'has-text',
    'above',
    'below',
    'right-of',
    'left-of',
    'near',
    'nth-match',
  ]);
function Vr(e) {
  const t = Iv(e),
    n = t.parts.map((r) => {
      if (r.name === 'css' || r.name === 'css:light')
        return (
          r.name === 'css:light' && (r.body = ':light(' + r.body + ')'),
          { name: 'css', body: $v(r.body, mh).selector, source: r.body }
        );
      if (Sl.has(r.name)) {
        let o, s;
        try {
          const l = JSON.parse('[' + r.body + ']');
          if (
            !Array.isArray(l) ||
            l.length < 1 ||
            l.length > 2 ||
            typeof l[0] != 'string'
          )
            throw new ye(`Malformed selector: ${r.name}=` + r.body);
          if (((o = l[0]), l.length === 2)) {
            if (typeof l[1] != 'number' || !qv.has(r.name))
              throw new ye(`Malformed selector: ${r.name}=` + r.body);
            s = l[1];
          }
        } catch {
          throw new ye(`Malformed selector: ${r.name}=` + r.body);
        }
        const i = {
          name: r.name,
          source: r.body,
          body: { parsed: Vr(o), distance: s },
        };
        if (
          i.body.parsed.parts.some(
            (l) => l.name === 'internal:control' && l.body === 'enter-frame'
          )
        )
          throw new ye(`Frames are not allowed inside "${r.name}" selectors`);
        return i;
      }
      return { ...r, source: r.body };
    });
  if (Sl.has(n[0].name))
    throw new ye(`"${n[0].name}" selector cannot be first`);
  return { capture: t.capture, parts: n };
}
function Ss(e) {
  return typeof e == 'string'
    ? e
    : e.parts
        .map((t, n) => {
          const r = t.name === 'css' ? '' : t.name + '=';
          return `${n === e.capture ? '*' : ''}${r}${t.source}`;
        })
        .join(' >> ');
}
function Rv(e) {
  const t = new Set(),
    n = (r) => {
      for (const o of r.parts)
        t.add(o.name), Sl.has(o.name) && n(o.body.parsed);
    };
  return n(e), t;
}
function Iv(e) {
  let t = 0,
    n,
    r = 0;
  const o = { parts: [] },
    s = () => {
      const l = e.substring(r, t).trim(),
        c = l.indexOf('=');
      let a, u;
      c !== -1 &&
      l
        .substring(0, c)
        .trim()
        .match(/^[a-zA-Z_0-9-+:*]+$/)
        ? ((a = l.substring(0, c).trim()), (u = l.substring(c + 1)))
        : (l.length > 1 && l[0] === '"' && l[l.length - 1] === '"') ||
          (l.length > 1 && l[0] === "'" && l[l.length - 1] === "'")
        ? ((a = 'text'), (u = l))
        : /^\(*\/\//.test(l) || l.startsWith('..')
        ? ((a = 'xpath'), (u = l))
        : ((a = 'css'), (u = l));
      let h = !1;
      if (
        (a[0] === '*' && ((h = !0), (a = a.substring(1))),
        o.parts.push({ name: a, body: u }),
        h)
      ) {
        if (o.capture !== void 0)
          throw new ye(
            'Only one of the selectors can capture using * modifier'
          );
        o.capture = o.parts.length - 1;
      }
    };
  if (!e.includes('>>')) return (t = e.length), s(), o;
  const i = () => {
    const c = e.substring(r, t).match(/^\s*text\s*=(.*)$/);
    return !!c && !!c[1];
  };
  for (; t < e.length; ) {
    const l = e[t];
    l === '\\' && t + 1 < e.length
      ? (t += 2)
      : l === n
      ? ((n = void 0), t++)
      : !n && (l === '"' || l === "'" || l === '`') && !i()
      ? ((n = l), t++)
      : !n && l === '>' && e[t + 1] === '>'
      ? (s(), (t += 2), (r = t))
      : t++;
  }
  return s(), o;
}
function tn(e, t) {
  let n = 0,
    r = e.length === 0;
  const o = () => e[n] || '',
    s = () => {
      const S = o();
      return ++n, (r = n >= e.length), S;
    },
    i = (S) => {
      throw r
        ? new ye(`Unexpected end of selector while parsing selector \`${e}\``)
        : new ye(
            `Error while parsing selector \`${e}\` - unexpected symbol "${o()}" at position ${n}` +
              (S ? ' during ' + S : '')
          );
    };
  function l() {
    for (; !r && /\s/.test(o()); ) s();
  }
  function c(S) {
    return (
      S >= '' ||
      (S >= '0' && S <= '9') ||
      (S >= 'A' && S <= 'Z') ||
      (S >= 'a' && S <= 'z') ||
      (S >= '0' && S <= '9') ||
      S === '_' ||
      S === '-'
    );
  }
  function a() {
    let S = '';
    for (l(); !r && c(o()); ) S += s();
    return S;
  }
  function u(S) {
    let p = s();
    for (p !== S && i('parsing quoted string'); !r && o() !== S; )
      o() === '\\' && s(), (p += s());
    return o() !== S && i('parsing quoted string'), (p += s()), p;
  }
  function h() {
    s() !== '/' && i('parsing regular expression');
    let S = '',
      p = !1;
    for (; !r; ) {
      if (o() === '\\') (S += s()), r && i('parsing regular expressiion');
      else if (p && o() === ']') p = !1;
      else if (!p && o() === '[') p = !0;
      else if (!p && o() === '/') break;
      S += s();
    }
    s() !== '/' && i('parsing regular expression');
    let f = '';
    for (; !r && o().match(/[dgimsuy]/); ) f += s();
    try {
      return new RegExp(S, f);
    } catch (g) {
      throw new ye(`Error while parsing selector \`${e}\`: ${g.message}`);
    }
  }
  function d() {
    let S = '';
    return (
      l(),
      o() === "'" || o() === '"' ? (S = u(o()).slice(1, -1)) : (S = a()),
      S || i('parsing property path'),
      S
    );
  }
  function v() {
    l();
    let S = '';
    return (
      r || (S += s()),
      !r && S !== '=' && (S += s()),
      ['=', '*=', '^=', '$=', '|=', '~='].includes(S) || i('parsing operator'),
      S
    );
  }
  function m() {
    s();
    const S = [];
    for (S.push(d()), l(); o() === '.'; ) s(), S.push(d()), l();
    if (o() === ']')
      return (
        s(),
        {
          name: S.join('.'),
          jsonPath: S,
          op: '<truthy>',
          value: null,
          caseSensitive: !1,
        }
      );
    const p = v();
    let f,
      g = !0;
    if ((l(), o() === '/')) {
      if (p !== '=')
        throw new ye(
          `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with regular expression`
        );
      f = h();
    } else if (o() === "'" || o() === '"')
      (f = u(o()).slice(1, -1)),
        l(),
        o() === 'i' || o() === 'I'
          ? ((g = !1), s())
          : (o() === 's' || o() === 'S') && ((g = !0), s());
    else {
      for (f = ''; !r && (c(o()) || o() === '+' || o() === '.'); ) f += s();
      f === 'true'
        ? (f = !0)
        : f === 'false'
        ? (f = !1)
        : t || ((f = +f), Number.isNaN(f) && i('parsing attribute value'));
    }
    if (
      (l(),
      o() !== ']' && i('parsing attribute value'),
      s(),
      p !== '=' && typeof f != 'string')
    )
      throw new ye(
        `Error while parsing selector \`${e}\` - cannot use ${p} in attribute with non-string matching value - ${f}`
      );
    return {
      name: S.join('.'),
      jsonPath: S,
      op: p,
      value: f,
      caseSensitive: g,
    };
  }
  const E = { name: '', attributes: [] };
  for (E.name = a(), l(); o() === '['; ) E.attributes.push(m()), l();
  if ((r || i(void 0), !E.name && !E.attributes.length))
    throw new ye(
      `Error while parsing selector \`${e}\` - selector cannot be empty`
    );
  return E;
}
function cn(e, t, n = !1, r = !1) {
  return gh(e, t, n, r)[0];
}
function gh(e, t, n = !1, r = !1, o = 20) {
  if (r)
    try {
      return Cn(Ga[e], Vr(t), n, o);
    } catch {
      return [t];
    }
  else return Cn(Ga[e], Vr(t), n, o);
}
function Cn(e, t, n = !1, r = 20) {
  const o = [...t.parts];
  for (let l = 0; l < o.length - 1; l++)
    if (
      o[l].name === 'nth' &&
      o[l + 1].name === 'internal:control' &&
      o[l + 1].body === 'enter-frame'
    ) {
      const [c] = o.splice(l, 1);
      o.splice(l + 1, 0, c);
    }
  const s = [];
  let i = n ? 'frame-locator' : 'page';
  for (let l = 0; l < o.length; l++) {
    const c = o[l],
      a = i;
    if (((i = 'locator'), c.name === 'nth')) {
      c.body === '0'
        ? s.push([
            e.generateLocator(a, 'first', ''),
            e.generateLocator(a, 'nth', '0'),
          ])
        : c.body === '-1'
        ? s.push([
            e.generateLocator(a, 'last', ''),
            e.generateLocator(a, 'nth', '-1'),
          ])
        : s.push([e.generateLocator(a, 'nth', c.body)]);
      continue;
    }
    if (c.name === 'internal:text') {
      const { exact: m, text: E } = cr(c.body);
      s.push([e.generateLocator(a, 'text', E, { exact: m })]);
      continue;
    }
    if (c.name === 'internal:has-text') {
      const { exact: m, text: E } = cr(c.body);
      if (!m) {
        s.push([e.generateLocator(a, 'has-text', E, { exact: m })]);
        continue;
      }
    }
    if (c.name === 'internal:has-not-text') {
      const { exact: m, text: E } = cr(c.body);
      if (!m) {
        s.push([e.generateLocator(a, 'has-not-text', E, { exact: m })]);
        continue;
      }
    }
    if (c.name === 'internal:has') {
      const m = Cn(e, c.body.parsed, !1, r);
      s.push(m.map((E) => e.generateLocator(a, 'has', E)));
      continue;
    }
    if (c.name === 'internal:has-not') {
      const m = Cn(e, c.body.parsed, !1, r);
      s.push(m.map((E) => e.generateLocator(a, 'hasNot', E)));
      continue;
    }
    if (c.name === 'internal:and') {
      const m = Cn(e, c.body.parsed, !1, r);
      s.push(m.map((E) => e.generateLocator(a, 'and', E)));
      continue;
    }
    if (c.name === 'internal:or') {
      const m = Cn(e, c.body.parsed, !1, r);
      s.push(m.map((E) => e.generateLocator(a, 'or', E)));
      continue;
    }
    if (c.name === 'internal:label') {
      const { exact: m, text: E } = cr(c.body);
      s.push([e.generateLocator(a, 'label', E, { exact: m })]);
      continue;
    }
    if (c.name === 'internal:role') {
      const m = tn(c.body, !0),
        E = { attrs: [] };
      for (const S of m.attributes)
        S.name === 'name'
          ? ((E.exact = S.caseSensitive), (E.name = S.value))
          : (S.name === 'level' &&
              typeof S.value == 'string' &&
              (S.value = +S.value),
            E.attrs.push({
              name: S.name === 'include-hidden' ? 'includeHidden' : S.name,
              value: S.value,
            }));
      s.push([e.generateLocator(a, 'role', m.name, E)]);
      continue;
    }
    if (c.name === 'internal:testid') {
      const m = tn(c.body, !0),
        { value: E } = m.attributes[0];
      s.push([e.generateLocator(a, 'test-id', E)]);
      continue;
    }
    if (c.name === 'internal:attr') {
      const m = tn(c.body, !0),
        { name: E, value: S, caseSensitive: p } = m.attributes[0],
        f = S,
        g = !!p;
      if (E === 'placeholder') {
        s.push([e.generateLocator(a, 'placeholder', f, { exact: g })]);
        continue;
      }
      if (E === 'alt') {
        s.push([e.generateLocator(a, 'alt', f, { exact: g })]);
        continue;
      }
      if (E === 'title') {
        s.push([e.generateLocator(a, 'title', f, { exact: g })]);
        continue;
      }
    }
    let u = 'default';
    const h = o[l + 1];
    h &&
      h.name === 'internal:control' &&
      h.body === 'enter-frame' &&
      ((u = 'frame'), (i = 'frame-locator'), l++);
    const d = Ss({ parts: [c] }),
      v = e.generateLocator(a, u, d);
    if (
      u === 'default' &&
      h &&
      ['internal:has-text', 'internal:has-not-text'].includes(h.name)
    ) {
      const { exact: m, text: E } = cr(h.body);
      if (!m) {
        const S = e.generateLocator(
            'locator',
            h.name === 'internal:has-text' ? 'has-text' : 'has-not-text',
            E,
            { exact: m }
          ),
          p = {};
        h.name === 'internal:has-text' ? (p.hasText = E) : (p.hasNotText = E);
        const f = e.generateLocator(a, 'default', d, p);
        s.push([e.chainLocators([v, S]), f]), l++;
        continue;
      }
    }
    s.push([v]);
  }
  return Dv(e, s, r);
}
function Dv(e, t, n) {
  const r = t.map(() => ''),
    o = [],
    s = (i) => {
      if (i === t.length) return o.push(e.chainLocators(r)), r.length < n;
      for (const l of t[i]) if (((r[i] = l), !s(i + 1))) return !1;
      return !0;
    };
  return s(0), o;
}
function cr(e) {
  let t = !1;
  const n = e.match(/^\/(.*)\/([igm]*)$/);
  return n
    ? { text: new RegExp(n[1], n[2]) }
    : (e.endsWith('"')
        ? ((e = JSON.parse(e)), (t = !0))
        : e.endsWith('"s')
        ? ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !0))
        : e.endsWith('"i') &&
          ((e = JSON.parse(e.substring(0, e.length - 1))), (t = !1)),
      { exact: t, text: e });
}
class Pv {
  generateLocator(t, n, r, o = {}) {
    switch (n) {
      case 'default':
        return o.hasText !== void 0
          ? `locator(${this.quote(r)}, { hasText: ${this.toHasText(
              o.hasText
            )} })`
          : o.hasNotText !== void 0
          ? `locator(${this.quote(r)}, { hasNotText: ${this.toHasText(
              o.hasNotText
            )} })`
          : `locator(${this.quote(r)})`;
      case 'frame':
        return `frameLocator(${this.quote(r)})`;
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first()';
      case 'last':
        return 'last()';
      case 'role':
        const s = [];
        fe(o.name)
          ? s.push(`name: ${o.name}`)
          : typeof o.name == 'string' &&
            (s.push(`name: ${this.quote(o.name)}`),
            o.exact && s.push('exact: true'));
        for (const { name: l, value: c } of o.attrs)
          s.push(`${l}: ${typeof c == 'string' ? this.quote(c) : c}`);
        const i = s.length ? `, { ${s.join(', ')} }` : '';
        return `getByRole(${this.quote(r)}${i})`;
      case 'has-text':
        return `filter({ hasText: ${this.toHasText(r)} })`;
      case 'has-not-text':
        return `filter({ hasNotText: ${this.toHasText(r)} })`;
      case 'has':
        return `filter({ has: ${r} })`;
      case 'hasNot':
        return `filter({ hasNot: ${r} })`;
      case 'and':
        return `and(${r})`;
      case 'or':
        return `or(${r})`;
      case 'test-id':
        return `getByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('getByText', r, !!o.exact);
      case 'alt':
        return this.toCallWithExact('getByAltText', r, !!o.exact);
      case 'placeholder':
        return this.toCallWithExact('getByPlaceholder', r, !!o.exact);
      case 'label':
        return this.toCallWithExact('getByLabel', r, !!o.exact);
      case 'title':
        return this.toCallWithExact('getByTitle', r, !!o.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  toCallWithExact(t, n, r) {
    return fe(n)
      ? `${t}(${n})`
      : r
      ? `${t}(${this.quote(n)}, { exact: true })`
      : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return fe(t) ? String(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return fe(t) ? String(t) : this.quote(t);
  }
  quote(t) {
    return zs(t, "'");
  }
}
class Mv {
  generateLocator(t, n, r, o = {}) {
    switch (n) {
      case 'default':
        return o.hasText !== void 0
          ? `locator(${this.quote(r)}, has_text=${this.toHasText(o.hasText)})`
          : o.hasNotText !== void 0
          ? `locator(${this.quote(r)}, has_not_text=${this.toHasText(
              o.hasNotText
            )})`
          : `locator(${this.quote(r)})`;
      case 'frame':
        return `frame_locator(${this.quote(r)})`;
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first';
      case 'last':
        return 'last';
      case 'role':
        const s = [];
        fe(o.name)
          ? s.push(`name=${this.regexToString(o.name)}`)
          : typeof o.name == 'string' &&
            (s.push(`name=${this.quote(o.name)}`),
            o.exact && s.push('exact=True'));
        for (const { name: l, value: c } of o.attrs) {
          let a = typeof c == 'string' ? this.quote(c) : c;
          typeof c == 'boolean' && (a = c ? 'True' : 'False'),
            s.push(`${Kd(l)}=${a}`);
        }
        const i = s.length ? `, ${s.join(', ')}` : '';
        return `get_by_role(${this.quote(r)}${i})`;
      case 'has-text':
        return `filter(has_text=${this.toHasText(r)})`;
      case 'has-not-text':
        return `filter(has_not_text=${this.toHasText(r)})`;
      case 'has':
        return `filter(has=${r})`;
      case 'hasNot':
        return `filter(has_not=${r})`;
      case 'and':
        return `and_(${r})`;
      case 'or':
        return `or_(${r})`;
      case 'test-id':
        return `get_by_test_id(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('get_by_text', r, !!o.exact);
      case 'alt':
        return this.toCallWithExact('get_by_alt_text', r, !!o.exact);
      case 'placeholder':
        return this.toCallWithExact('get_by_placeholder', r, !!o.exact);
      case 'label':
        return this.toCallWithExact('get_by_label', r, !!o.exact);
      case 'title':
        return this.toCallWithExact('get_by_title', r, !!o.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', re.IGNORECASE' : '';
    return `re.compile(r"${t.source
      .replace(/\\\//, '/')
      .replace(/"/g, '\\"')}"${n})`;
  }
  toCallWithExact(t, n, r) {
    return fe(n)
      ? `${t}(${this.regexToString(n)})`
      : r
      ? `${t}(${this.quote(n)}, exact=True)`
      : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return fe(t) ? this.regexToString(t) : `${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return zs(t, '"');
  }
}
class Ov {
  generateLocator(t, n, r, o = {}) {
    let s;
    switch (t) {
      case 'page':
        s = 'Page';
        break;
      case 'frame-locator':
        s = 'FrameLocator';
        break;
      case 'locator':
        s = 'Locator';
        break;
    }
    switch (n) {
      case 'default':
        return o.hasText !== void 0
          ? `locator(${this.quote(
              r
            )}, new ${s}.LocatorOptions().setHasText(${this.toHasText(
              o.hasText
            )}))`
          : o.hasNotText !== void 0
          ? `locator(${this.quote(
              r
            )}, new ${s}.LocatorOptions().setHasNotText(${this.toHasText(
              o.hasNotText
            )}))`
          : `locator(${this.quote(r)})`;
      case 'frame':
        return `frameLocator(${this.quote(r)})`;
      case 'nth':
        return `nth(${r})`;
      case 'first':
        return 'first()';
      case 'last':
        return 'last()';
      case 'role':
        const i = [];
        fe(o.name)
          ? i.push(`.setName(${this.regexToString(o.name)})`)
          : typeof o.name == 'string' &&
            (i.push(`.setName(${this.quote(o.name)})`),
            o.exact && i.push('.setExact(true)'));
        for (const { name: c, value: a } of o.attrs)
          i.push(`.set${ws(c)}(${typeof a == 'string' ? this.quote(a) : a})`);
        const l = i.length ? `, new ${s}.GetByRoleOptions()${i.join('')}` : '';
        return `getByRole(AriaRole.${Kd(r).toUpperCase()}${l})`;
      case 'has-text':
        return `filter(new ${s}.FilterOptions().setHasText(${this.toHasText(
          r
        )}))`;
      case 'has-not-text':
        return `filter(new ${s}.FilterOptions().setHasNotText(${this.toHasText(
          r
        )}))`;
      case 'has':
        return `filter(new ${s}.FilterOptions().setHas(${r}))`;
      case 'hasNot':
        return `filter(new ${s}.FilterOptions().setHasNot(${r}))`;
      case 'and':
        return `and(${r})`;
      case 'or':
        return `or(${r})`;
      case 'test-id':
        return `getByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact(s, 'getByText', r, !!o.exact);
      case 'alt':
        return this.toCallWithExact(s, 'getByAltText', r, !!o.exact);
      case 'placeholder':
        return this.toCallWithExact(s, 'getByPlaceholder', r, !!o.exact);
      case 'label':
        return this.toCallWithExact(s, 'getByLabel', r, !!o.exact);
      case 'title':
        return this.toCallWithExact(s, 'getByTitle', r, !!o.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', Pattern.CASE_INSENSITIVE' : '';
    return `Pattern.compile(${this.quote(t.source)}${n})`;
  }
  toCallWithExact(t, n, r, o) {
    return fe(r)
      ? `${n}(${this.regexToString(r)})`
      : o
      ? `${n}(${this.quote(r)}, new ${t}.${ws(n)}Options().setExact(true))`
      : `${n}(${this.quote(r)})`;
  }
  toHasText(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  quote(t) {
    return zs(t, '"');
  }
}
class Uv {
  generateLocator(t, n, r, o = {}) {
    switch (n) {
      case 'default':
        return o.hasText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasText(o.hasText)} })`
          : o.hasNotText !== void 0
          ? `Locator(${this.quote(r)}, new() { ${this.toHasNotText(
              o.hasNotText
            )} })`
          : `Locator(${this.quote(r)})`;
      case 'frame':
        return `FrameLocator(${this.quote(r)})`;
      case 'nth':
        return `Nth(${r})`;
      case 'first':
        return 'First';
      case 'last':
        return 'Last';
      case 'role':
        const s = [];
        fe(o.name)
          ? s.push(`NameRegex = ${this.regexToString(o.name)}`)
          : typeof o.name == 'string' &&
            (s.push(`Name = ${this.quote(o.name)}`),
            o.exact && s.push('Exact = true'));
        for (const { name: l, value: c } of o.attrs)
          s.push(`${ws(l)} = ${typeof c == 'string' ? this.quote(c) : c}`);
        const i = s.length ? `, new() { ${s.join(', ')} }` : '';
        return `GetByRole(AriaRole.${ws(r)}${i})`;
      case 'has-text':
        return `Filter(new() { ${this.toHasText(r)} })`;
      case 'has-not-text':
        return `Filter(new() { ${this.toHasNotText(r)} })`;
      case 'has':
        return `Filter(new() { Has = ${r} })`;
      case 'hasNot':
        return `Filter(new() { HasNot = ${r} })`;
      case 'and':
        return `And(${r})`;
      case 'or':
        return `Or(${r})`;
      case 'test-id':
        return `GetByTestId(${this.toTestIdValue(r)})`;
      case 'text':
        return this.toCallWithExact('GetByText', r, !!o.exact);
      case 'alt':
        return this.toCallWithExact('GetByAltText', r, !!o.exact);
      case 'placeholder':
        return this.toCallWithExact('GetByPlaceholder', r, !!o.exact);
      case 'label':
        return this.toCallWithExact('GetByLabel', r, !!o.exact);
      case 'title':
        return this.toCallWithExact('GetByTitle', r, !!o.exact);
      default:
        throw new Error('Unknown selector kind ' + n);
    }
  }
  chainLocators(t) {
    return t.join('.');
  }
  regexToString(t) {
    const n = t.flags.includes('i') ? ', RegexOptions.IgnoreCase' : '';
    return `new Regex(${this.quote(t.source)}${n})`;
  }
  toCallWithExact(t, n, r) {
    return fe(n)
      ? `${t}(${this.regexToString(n)})`
      : r
      ? `${t}(${this.quote(n)}, new() { Exact = true })`
      : `${t}(${this.quote(n)})`;
  }
  toHasText(t) {
    return fe(t)
      ? `HasTextRegex = ${this.regexToString(t)}`
      : `HasText = ${this.quote(t)}`;
  }
  toTestIdValue(t) {
    return fe(t) ? this.regexToString(t) : this.quote(t);
  }
  toHasNotText(t) {
    return fe(t)
      ? `HasNotTextRegex = ${this.regexToString(t)}`
      : `HasNotText = ${this.quote(t)}`;
  }
  quote(t) {
    return zs(t, '"');
  }
}
class Fv {
  generateLocator(t, n, r, o = {}) {
    return JSON.stringify({ kind: n, body: r, options: o });
  }
  chainLocators(t) {
    const n = t.map((r) => JSON.parse(r));
    for (let r = 0; r < n.length - 1; ++r) n[r].next = n[r + 1];
    return JSON.stringify(n[0]);
  }
}
const Ga = {
  javascript: new Pv(),
  python: new Mv(),
  java: new Ov(),
  csharp: new Uv(),
  jsonl: new Fv(),
};
function fe(e) {
  return e instanceof RegExp;
}
function vh({
  items: e = [],
  id: t,
  render: n,
  icon: r,
  isError: o,
  indent: s,
  selectedItem: i,
  onAccepted: l,
  onSelected: c,
  onLeftArrow: a,
  onRightArrow: u,
  onHighlighted: h,
  onIconClicked: d,
  noItemsMessage: v,
  dataTestId: m,
}) {
  const E = q.useRef(null),
    [S, p] = q.useState();
  return (
    q.useEffect(() => {
      h == null || h(S);
    }, [h, S]),
    y('div', {
      className: 'list-view vbox',
      role: 'list',
      'data-testid': m,
      children: A('div', {
        className: 'list-view-content',
        tabIndex: 0,
        onDoubleClick: () => i && (l == null ? void 0 : l(i)),
        onKeyDown: (f) => {
          var b;
          if (i && f.key === 'Enter') {
            l == null || l(i);
            return;
          }
          if (
            f.key !== 'ArrowDown' &&
            f.key !== 'ArrowUp' &&
            f.key !== 'ArrowLeft' &&
            f.key !== 'ArrowRight'
          )
            return;
          if (
            (f.stopPropagation(),
            f.preventDefault(),
            i && f.key === 'ArrowLeft')
          ) {
            a == null || a(i);
            return;
          }
          if (i && f.key === 'ArrowRight') {
            u == null || u(i);
            return;
          }
          const g = i ? e.indexOf(i) : -1;
          let w = g;
          f.key === 'ArrowDown' &&
            (g === -1 ? (w = 0) : (w = Math.min(g + 1, e.length - 1))),
            f.key === 'ArrowUp' &&
              (g === -1 ? (w = e.length - 1) : (w = Math.max(g - 1, 0)));
          const k = (b = E.current) == null ? void 0 : b.children.item(w);
          zv(k || void 0), h == null || h(void 0), c == null || c(e[w]);
        },
        ref: E,
        children: [
          v &&
            e.length === 0 &&
            y('div', { className: 'list-view-empty', children: v }),
          e.map((f, g) => {
            const w = i === f ? ' selected' : '',
              k = S === f ? ' highlighted' : '',
              b = o != null && o(f) ? ' error' : '',
              x = (s == null ? void 0 : s(f)) || 0,
              N = n(f);
            return A(
              'div',
              {
                role: 'listitem',
                className: 'list-view-entry' + w + k + b,
                onClick: () => (c == null ? void 0 : c(f)),
                onMouseEnter: () => p(f),
                onMouseLeave: () => p(void 0),
                children: [
                  x
                    ? new Array(x)
                        .fill(0)
                        .map(() => y('div', { className: 'list-view-indent' }))
                    : void 0,
                  r &&
                    y('div', {
                      className: 'codicon ' + (r(f) || 'codicon-blank'),
                      style: { minWidth: 16, marginRight: 4 },
                      onDoubleClick: (R) => {
                        R.preventDefault(), R.stopPropagation();
                      },
                      onClick: (R) => {
                        R.stopPropagation(),
                          R.preventDefault(),
                          d == null || d(f);
                      },
                    }),
                  typeof N == 'string'
                    ? y('div', {
                        style: { textOverflow: 'ellipsis', overflow: 'hidden' },
                        children: N,
                      })
                    : N,
                ],
              },
              (t == null ? void 0 : t(f)) || g
            );
          }),
        ],
      }),
    })
  );
}
function zv(e) {
  e &&
    (e != null && e.scrollIntoViewIfNeeded
      ? e.scrollIntoViewIfNeeded(!1)
      : e == null || e.scrollIntoView());
}
const Hv = vh;
function Bv({
  rootItem: e,
  render: t,
  icon: n,
  isError: r,
  selectedItem: o,
  onAccepted: s,
  onSelected: i,
  onHighlighted: l,
  treeState: c,
  setTreeState: a,
  noItemsMessage: u,
  dataTestId: h,
  autoExpandDepth: d,
}) {
  const v = q.useMemo(() => {
    for (let m = o == null ? void 0 : o.parent; m; m = m.parent)
      c.expandedItems.set(m.id, !0);
    return jv(e, c.expandedItems, d || 0);
  }, [e, o, c, d]);
  return y(Hv, {
    items: [...v.keys()],
    id: (m) => m.id,
    dataTestId: h,
    render: (m) => {
      const E = t(m);
      return A(an, {
        children: [
          n &&
            y('div', {
              className: 'codicon ' + (n(m) || 'blank'),
              style: { minWidth: 16, marginRight: 4 },
            }),
          typeof E == 'string'
            ? y('div', {
                style: { textOverflow: 'ellipsis', overflow: 'hidden' },
                children: E,
              })
            : E,
        ],
      });
    },
    icon: (m) => {
      const E = v.get(m).expanded;
      if (typeof E == 'boolean')
        return E ? 'codicon-chevron-down' : 'codicon-chevron-right';
    },
    isError: (m) => (r == null ? void 0 : r(m)) || !1,
    indent: (m) => v.get(m).depth,
    selectedItem: o,
    onAccepted: (m) => (s == null ? void 0 : s(m)),
    onSelected: (m) => (i == null ? void 0 : i(m)),
    onHighlighted: (m) => (l == null ? void 0 : l(m)),
    onLeftArrow: (m) => {
      const { expanded: E, parent: S } = v.get(m);
      E
        ? (c.expandedItems.set(m.id, !1), a({ ...c }))
        : S && (i == null || i(S));
    },
    onRightArrow: (m) => {
      m.children.length && (c.expandedItems.set(m.id, !0), a({ ...c }));
    },
    onIconClicked: (m) => {
      const { expanded: E } = v.get(m);
      if (E) {
        for (let S = o; S; S = S.parent)
          if (S === m) {
            i == null || i(m);
            break;
          }
        c.expandedItems.set(m.id, !1);
      } else c.expandedItems.set(m.id, !0);
      a({ ...c });
    },
    noItemsMessage: u,
  });
}
function jv(e, t, n) {
  const r = new Map(),
    o = (s, i) => {
      for (const l of s.children) {
        const c = t.get(l.id),
          a = n > i && r.size < 25 && c !== !1,
          u = l.children.length ? c || a : void 0;
        r.set(l, { depth: i, expanded: u, parent: e === s ? null : s }),
          u && o(l, i + 1);
      }
    };
  return o(e, 0), r;
}
const Vv = Bv,
  Wv = ({
    actions: e,
    selectedAction: t,
    sdkLanguage: n,
    onSelected: r,
    onHighlighted: o,
    revealConsole: s,
    isLive: i,
  }) => {
    const [l, c] = q.useState({ expandedItems: new Map() }),
      { rootItem: a, itemMap: u } = q.useMemo(() => {
        const d = new Map();
        for (const m of e)
          d.set(m.callId, {
            id: m.callId,
            parent: void 0,
            children: [],
            action: m,
          });
        const v = { id: '', parent: void 0, children: [] };
        for (const m of d.values()) {
          const E = (m.action.parentId && d.get(m.action.parentId)) || v;
          E.children.push(m), (m.parent = E);
        }
        return { rootItem: v, itemMap: d };
      }, [e]),
      { selectedItem: h } = q.useMemo(
        () => ({ selectedItem: t ? u.get(t.callId) : void 0 }),
        [u, t]
      );
    return y(Vv, {
      dataTestId: 'action-list',
      rootItem: a,
      treeState: l,
      setTreeState: c,
      selectedItem: h,
      onSelected: (d) => r(d.action),
      onHighlighted: (d) => o(d == null ? void 0 : d.action),
      isError: (d) => {
        var v, m;
        return !!(
          (m = (v = d.action) == null ? void 0 : v.error) != null && m.message
        );
      },
      render: (d) => Gv(d.action, n, s, i || !1),
    });
  },
  Gv = (e, t, n, r) => {
    const { errors: o, warnings: s } = Wd(e),
      i = e.params.selector
        ? cn(t || 'javascript', e.params.selector, !1, !0)
        : void 0;
    let l = '';
    return (
      e.endTime
        ? (l = Un(e.endTime - e.startTime))
        : e.error
        ? (l = 'Timed out')
        : r || (l = '-'),
      A(an, {
        children: [
          A('div', {
            className: 'action-title',
            children: [
              y('span', { children: e.apiName }),
              i &&
                y('div', {
                  className: 'action-selector',
                  title: i,
                  children: i,
                }),
              e.method === 'goto' &&
                e.params.url &&
                y('div', {
                  className: 'action-url',
                  title: e.params.url,
                  children: e.params.url,
                }),
            ],
          }),
          y('div', {
            className: 'action-duration',
            style: { flex: 'none' },
            children: l || y('span', { className: 'codicon codicon-loading' }),
          }),
          A('div', {
            className: 'action-icons',
            onClick: () => n(),
            children: [
              !!o &&
                A('div', {
                  className: 'action-icon',
                  children: [
                    y('span', { className: 'codicon codicon-error' }),
                    y('span', { className: 'action-icon-value', children: o }),
                  ],
                }),
              !!s &&
                A('div', {
                  className: 'action-icon',
                  children: [
                    y('span', { className: 'codicon codicon-warning' }),
                    y('span', { className: 'action-icon-value', children: s }),
                  ],
                }),
            ],
          }),
        ],
      })
    );
  };
const Qv = ({ value: e }) => {
  const [t, n] = q.useState('codicon-clippy'),
    r = q.useCallback(() => {
      navigator.clipboard.writeText(e).then(
        () => {
          n('codicon-check'),
            setTimeout(() => {
              n('codicon-clippy');
            }, 3e3);
        },
        () => {
          n('codicon-close');
        }
      );
    }, [e]);
  return y('span', { className: `copy-icon codicon ${t}`, onClick: r });
};
var yh = {},
  wt = {};
const Kv = 'Á',
  Xv = 'á',
  Jv = 'Ă',
  Yv = 'ă',
  Zv = '∾',
  ey = '∿',
  ty = '∾̳',
  ny = 'Â',
  ry = 'â',
  oy = '´',
  sy = 'А',
  iy = 'а',
  ly = 'Æ',
  cy = 'æ',
  ay = '⁡',
  uy = '𝔄',
  fy = '𝔞',
  dy = 'À',
  hy = 'à',
  py = 'ℵ',
  my = 'ℵ',
  gy = 'Α',
  vy = 'α',
  yy = 'Ā',
  wy = 'ā',
  Sy = '⨿',
  Ey = '&',
  xy = '&',
  ky = '⩕',
  Ty = '⩓',
  by = '∧',
  _y = '⩜',
  Ny = '⩘',
  Cy = '⩚',
  Ly = '∠',
  Ay = '⦤',
  $y = '∠',
  qy = '⦨',
  Ry = '⦩',
  Iy = '⦪',
  Dy = '⦫',
  Py = '⦬',
  My = '⦭',
  Oy = '⦮',
  Uy = '⦯',
  Fy = '∡',
  zy = '∟',
  Hy = '⊾',
  By = '⦝',
  jy = '∢',
  Vy = 'Å',
  Wy = '⍼',
  Gy = 'Ą',
  Qy = 'ą',
  Ky = '𝔸',
  Xy = '𝕒',
  Jy = '⩯',
  Yy = '≈',
  Zy = '⩰',
  ew = '≊',
  tw = '≋',
  nw = "'",
  rw = '⁡',
  ow = '≈',
  sw = '≊',
  iw = 'Å',
  lw = 'å',
  cw = '𝒜',
  aw = '𝒶',
  uw = '≔',
  fw = '*',
  dw = '≈',
  hw = '≍',
  pw = 'Ã',
  mw = 'ã',
  gw = 'Ä',
  vw = 'ä',
  yw = '∳',
  ww = '⨑',
  Sw = '≌',
  Ew = '϶',
  xw = '‵',
  kw = '∽',
  Tw = '⋍',
  bw = '∖',
  _w = '⫧',
  Nw = '⊽',
  Cw = '⌅',
  Lw = '⌆',
  Aw = '⌅',
  $w = '⎵',
  qw = '⎶',
  Rw = '≌',
  Iw = 'Б',
  Dw = 'б',
  Pw = '„',
  Mw = '∵',
  Ow = '∵',
  Uw = '∵',
  Fw = '⦰',
  zw = '϶',
  Hw = 'ℬ',
  Bw = 'ℬ',
  jw = 'Β',
  Vw = 'β',
  Ww = 'ℶ',
  Gw = '≬',
  Qw = '𝔅',
  Kw = '𝔟',
  Xw = '⋂',
  Jw = '◯',
  Yw = '⋃',
  Zw = '⨀',
  e0 = '⨁',
  t0 = '⨂',
  n0 = '⨆',
  r0 = '★',
  o0 = '▽',
  s0 = '△',
  i0 = '⨄',
  l0 = '⋁',
  c0 = '⋀',
  a0 = '⤍',
  u0 = '⧫',
  f0 = '▪',
  d0 = '▴',
  h0 = '▾',
  p0 = '◂',
  m0 = '▸',
  g0 = '␣',
  v0 = '▒',
  y0 = '░',
  w0 = '▓',
  S0 = '█',
  E0 = '=⃥',
  x0 = '≡⃥',
  k0 = '⫭',
  T0 = '⌐',
  b0 = '𝔹',
  _0 = '𝕓',
  N0 = '⊥',
  C0 = '⊥',
  L0 = '⋈',
  A0 = '⧉',
  $0 = '┐',
  q0 = '╕',
  R0 = '╖',
  I0 = '╗',
  D0 = '┌',
  P0 = '╒',
  M0 = '╓',
  O0 = '╔',
  U0 = '─',
  F0 = '═',
  z0 = '┬',
  H0 = '╤',
  B0 = '╥',
  j0 = '╦',
  V0 = '┴',
  W0 = '╧',
  G0 = '╨',
  Q0 = '╩',
  K0 = '⊟',
  X0 = '⊞',
  J0 = '⊠',
  Y0 = '┘',
  Z0 = '╛',
  e1 = '╜',
  t1 = '╝',
  n1 = '└',
  r1 = '╘',
  o1 = '╙',
  s1 = '╚',
  i1 = '│',
  l1 = '║',
  c1 = '┼',
  a1 = '╪',
  u1 = '╫',
  f1 = '╬',
  d1 = '┤',
  h1 = '╡',
  p1 = '╢',
  m1 = '╣',
  g1 = '├',
  v1 = '╞',
  y1 = '╟',
  w1 = '╠',
  S1 = '‵',
  E1 = '˘',
  x1 = '˘',
  k1 = '¦',
  T1 = '𝒷',
  b1 = 'ℬ',
  _1 = '⁏',
  N1 = '∽',
  C1 = '⋍',
  L1 = '⧅',
  A1 = '\\',
  $1 = '⟈',
  q1 = '•',
  R1 = '•',
  I1 = '≎',
  D1 = '⪮',
  P1 = '≏',
  M1 = '≎',
  O1 = '≏',
  U1 = 'Ć',
  F1 = 'ć',
  z1 = '⩄',
  H1 = '⩉',
  B1 = '⩋',
  j1 = '∩',
  V1 = '⋒',
  W1 = '⩇',
  G1 = '⩀',
  Q1 = 'ⅅ',
  K1 = '∩︀',
  X1 = '⁁',
  J1 = 'ˇ',
  Y1 = 'ℭ',
  Z1 = '⩍',
  eS = 'Č',
  tS = 'č',
  nS = 'Ç',
  rS = 'ç',
  oS = 'Ĉ',
  sS = 'ĉ',
  iS = '∰',
  lS = '⩌',
  cS = '⩐',
  aS = 'Ċ',
  uS = 'ċ',
  fS = '¸',
  dS = '¸',
  hS = '⦲',
  pS = '¢',
  mS = '·',
  gS = '·',
  vS = '𝔠',
  yS = 'ℭ',
  wS = 'Ч',
  SS = 'ч',
  ES = '✓',
  xS = '✓',
  kS = 'Χ',
  TS = 'χ',
  bS = 'ˆ',
  _S = '≗',
  NS = '↺',
  CS = '↻',
  LS = '⊛',
  AS = '⊚',
  $S = '⊝',
  qS = '⊙',
  RS = '®',
  IS = 'Ⓢ',
  DS = '⊖',
  PS = '⊕',
  MS = '⊗',
  OS = '○',
  US = '⧃',
  FS = '≗',
  zS = '⨐',
  HS = '⫯',
  BS = '⧂',
  jS = '∲',
  VS = '”',
  WS = '’',
  GS = '♣',
  QS = '♣',
  KS = ':',
  XS = '∷',
  JS = '⩴',
  YS = '≔',
  ZS = '≔',
  eE = ',',
  tE = '@',
  nE = '∁',
  rE = '∘',
  oE = '∁',
  sE = 'ℂ',
  iE = '≅',
  lE = '⩭',
  cE = '≡',
  aE = '∮',
  uE = '∯',
  fE = '∮',
  dE = '𝕔',
  hE = 'ℂ',
  pE = '∐',
  mE = '∐',
  gE = '©',
  vE = '©',
  yE = '℗',
  wE = '∳',
  SE = '↵',
  EE = '✗',
  xE = '⨯',
  kE = '𝒞',
  TE = '𝒸',
  bE = '⫏',
  _E = '⫑',
  NE = '⫐',
  CE = '⫒',
  LE = '⋯',
  AE = '⤸',
  $E = '⤵',
  qE = '⋞',
  RE = '⋟',
  IE = '↶',
  DE = '⤽',
  PE = '⩈',
  ME = '⩆',
  OE = '≍',
  UE = '∪',
  FE = '⋓',
  zE = '⩊',
  HE = '⊍',
  BE = '⩅',
  jE = '∪︀',
  VE = '↷',
  WE = '⤼',
  GE = '⋞',
  QE = '⋟',
  KE = '⋎',
  XE = '⋏',
  JE = '¤',
  YE = '↶',
  ZE = '↷',
  ex = '⋎',
  tx = '⋏',
  nx = '∲',
  rx = '∱',
  ox = '⌭',
  sx = '†',
  ix = '‡',
  lx = 'ℸ',
  cx = '↓',
  ax = '↡',
  ux = '⇓',
  fx = '‐',
  dx = '⫤',
  hx = '⊣',
  px = '⤏',
  mx = '˝',
  gx = 'Ď',
  vx = 'ď',
  yx = 'Д',
  wx = 'д',
  Sx = '‡',
  Ex = '⇊',
  xx = 'ⅅ',
  kx = 'ⅆ',
  Tx = '⤑',
  bx = '⩷',
  _x = '°',
  Nx = '∇',
  Cx = 'Δ',
  Lx = 'δ',
  Ax = '⦱',
  $x = '⥿',
  qx = '𝔇',
  Rx = '𝔡',
  Ix = '⥥',
  Dx = '⇃',
  Px = '⇂',
  Mx = '´',
  Ox = '˙',
  Ux = '˝',
  Fx = '`',
  zx = '˜',
  Hx = '⋄',
  Bx = '⋄',
  jx = '⋄',
  Vx = '♦',
  Wx = '♦',
  Gx = '¨',
  Qx = 'ⅆ',
  Kx = 'ϝ',
  Xx = '⋲',
  Jx = '÷',
  Yx = '÷',
  Zx = '⋇',
  ek = '⋇',
  tk = 'Ђ',
  nk = 'ђ',
  rk = '⌞',
  ok = '⌍',
  sk = '$',
  ik = '𝔻',
  lk = '𝕕',
  ck = '¨',
  ak = '˙',
  uk = '⃜',
  fk = '≐',
  dk = '≑',
  hk = '≐',
  pk = '∸',
  mk = '∔',
  gk = '⊡',
  vk = '⌆',
  yk = '∯',
  wk = '¨',
  Sk = '⇓',
  Ek = '⇐',
  xk = '⇔',
  kk = '⫤',
  Tk = '⟸',
  bk = '⟺',
  _k = '⟹',
  Nk = '⇒',
  Ck = '⊨',
  Lk = '⇑',
  Ak = '⇕',
  $k = '∥',
  qk = '⤓',
  Rk = '↓',
  Ik = '↓',
  Dk = '⇓',
  Pk = '⇵',
  Mk = '̑',
  Ok = '⇊',
  Uk = '⇃',
  Fk = '⇂',
  zk = '⥐',
  Hk = '⥞',
  Bk = '⥖',
  jk = '↽',
  Vk = '⥟',
  Wk = '⥗',
  Gk = '⇁',
  Qk = '↧',
  Kk = '⊤',
  Xk = '⤐',
  Jk = '⌟',
  Yk = '⌌',
  Zk = '𝒟',
  eT = '𝒹',
  tT = 'Ѕ',
  nT = 'ѕ',
  rT = '⧶',
  oT = 'Đ',
  sT = 'đ',
  iT = '⋱',
  lT = '▿',
  cT = '▾',
  aT = '⇵',
  uT = '⥯',
  fT = '⦦',
  dT = 'Џ',
  hT = 'џ',
  pT = '⟿',
  mT = 'É',
  gT = 'é',
  vT = '⩮',
  yT = 'Ě',
  wT = 'ě',
  ST = 'Ê',
  ET = 'ê',
  xT = '≖',
  kT = '≕',
  TT = 'Э',
  bT = 'э',
  _T = '⩷',
  NT = 'Ė',
  CT = 'ė',
  LT = '≑',
  AT = 'ⅇ',
  $T = '≒',
  qT = '𝔈',
  RT = '𝔢',
  IT = '⪚',
  DT = 'È',
  PT = 'è',
  MT = '⪖',
  OT = '⪘',
  UT = '⪙',
  FT = '∈',
  zT = '⏧',
  HT = 'ℓ',
  BT = '⪕',
  jT = '⪗',
  VT = 'Ē',
  WT = 'ē',
  GT = '∅',
  QT = '∅',
  KT = '◻',
  XT = '∅',
  JT = '▫',
  YT = ' ',
  ZT = ' ',
  eb = ' ',
  tb = 'Ŋ',
  nb = 'ŋ',
  rb = ' ',
  ob = 'Ę',
  sb = 'ę',
  ib = '𝔼',
  lb = '𝕖',
  cb = '⋕',
  ab = '⧣',
  ub = '⩱',
  fb = 'ε',
  db = 'Ε',
  hb = 'ε',
  pb = 'ϵ',
  mb = '≖',
  gb = '≕',
  vb = '≂',
  yb = '⪖',
  wb = '⪕',
  Sb = '⩵',
  Eb = '=',
  xb = '≂',
  kb = '≟',
  Tb = '⇌',
  bb = '≡',
  _b = '⩸',
  Nb = '⧥',
  Cb = '⥱',
  Lb = '≓',
  Ab = 'ℯ',
  $b = 'ℰ',
  qb = '≐',
  Rb = '⩳',
  Ib = '≂',
  Db = 'Η',
  Pb = 'η',
  Mb = 'Ð',
  Ob = 'ð',
  Ub = 'Ë',
  Fb = 'ë',
  zb = '€',
  Hb = '!',
  Bb = '∃',
  jb = '∃',
  Vb = 'ℰ',
  Wb = 'ⅇ',
  Gb = 'ⅇ',
  Qb = '≒',
  Kb = 'Ф',
  Xb = 'ф',
  Jb = '♀',
  Yb = 'ﬃ',
  Zb = 'ﬀ',
  e_ = 'ﬄ',
  t_ = '𝔉',
  n_ = '𝔣',
  r_ = 'ﬁ',
  o_ = '◼',
  s_ = '▪',
  i_ = 'fj',
  l_ = '♭',
  c_ = 'ﬂ',
  a_ = '▱',
  u_ = 'ƒ',
  f_ = '𝔽',
  d_ = '𝕗',
  h_ = '∀',
  p_ = '∀',
  m_ = '⋔',
  g_ = '⫙',
  v_ = 'ℱ',
  y_ = '⨍',
  w_ = '½',
  S_ = '⅓',
  E_ = '¼',
  x_ = '⅕',
  k_ = '⅙',
  T_ = '⅛',
  b_ = '⅔',
  __ = '⅖',
  N_ = '¾',
  C_ = '⅗',
  L_ = '⅜',
  A_ = '⅘',
  $_ = '⅚',
  q_ = '⅝',
  R_ = '⅞',
  I_ = '⁄',
  D_ = '⌢',
  P_ = '𝒻',
  M_ = 'ℱ',
  O_ = 'ǵ',
  U_ = 'Γ',
  F_ = 'γ',
  z_ = 'Ϝ',
  H_ = 'ϝ',
  B_ = '⪆',
  j_ = 'Ğ',
  V_ = 'ğ',
  W_ = 'Ģ',
  G_ = 'Ĝ',
  Q_ = 'ĝ',
  K_ = 'Г',
  X_ = 'г',
  J_ = 'Ġ',
  Y_ = 'ġ',
  Z_ = '≥',
  eN = '≧',
  tN = '⪌',
  nN = '⋛',
  rN = '≥',
  oN = '≧',
  sN = '⩾',
  iN = '⪩',
  lN = '⩾',
  cN = '⪀',
  aN = '⪂',
  uN = '⪄',
  fN = '⋛︀',
  dN = '⪔',
  hN = '𝔊',
  pN = '𝔤',
  mN = '≫',
  gN = '⋙',
  vN = '⋙',
  yN = 'ℷ',
  wN = 'Ѓ',
  SN = 'ѓ',
  EN = '⪥',
  xN = '≷',
  kN = '⪒',
  TN = '⪤',
  bN = '⪊',
  _N = '⪊',
  NN = '⪈',
  CN = '≩',
  LN = '⪈',
  AN = '≩',
  $N = '⋧',
  qN = '𝔾',
  RN = '𝕘',
  IN = '`',
  DN = '≥',
  PN = '⋛',
  MN = '≧',
  ON = '⪢',
  UN = '≷',
  FN = '⩾',
  zN = '≳',
  HN = '𝒢',
  BN = 'ℊ',
  jN = '≳',
  VN = '⪎',
  WN = '⪐',
  GN = '⪧',
  QN = '⩺',
  KN = '>',
  XN = '>',
  JN = '≫',
  YN = '⋗',
  ZN = '⦕',
  eC = '⩼',
  tC = '⪆',
  nC = '⥸',
  rC = '⋗',
  oC = '⋛',
  sC = '⪌',
  iC = '≷',
  lC = '≳',
  cC = '≩︀',
  aC = '≩︀',
  uC = 'ˇ',
  fC = ' ',
  dC = '½',
  hC = 'ℋ',
  pC = 'Ъ',
  mC = 'ъ',
  gC = '⥈',
  vC = '↔',
  yC = '⇔',
  wC = '↭',
  SC = '^',
  EC = 'ℏ',
  xC = 'Ĥ',
  kC = 'ĥ',
  TC = '♥',
  bC = '♥',
  _C = '…',
  NC = '⊹',
  CC = '𝔥',
  LC = 'ℌ',
  AC = 'ℋ',
  $C = '⤥',
  qC = '⤦',
  RC = '⇿',
  IC = '∻',
  DC = '↩',
  PC = '↪',
  MC = '𝕙',
  OC = 'ℍ',
  UC = '―',
  FC = '─',
  zC = '𝒽',
  HC = 'ℋ',
  BC = 'ℏ',
  jC = 'Ħ',
  VC = 'ħ',
  WC = '≎',
  GC = '≏',
  QC = '⁃',
  KC = '‐',
  XC = 'Í',
  JC = 'í',
  YC = '⁣',
  ZC = 'Î',
  eL = 'î',
  tL = 'И',
  nL = 'и',
  rL = 'İ',
  oL = 'Е',
  sL = 'е',
  iL = '¡',
  lL = '⇔',
  cL = '𝔦',
  aL = 'ℑ',
  uL = 'Ì',
  fL = 'ì',
  dL = 'ⅈ',
  hL = '⨌',
  pL = '∭',
  mL = '⧜',
  gL = '℩',
  vL = 'Ĳ',
  yL = 'ĳ',
  wL = 'Ī',
  SL = 'ī',
  EL = 'ℑ',
  xL = 'ⅈ',
  kL = 'ℐ',
  TL = 'ℑ',
  bL = 'ı',
  _L = 'ℑ',
  NL = '⊷',
  CL = 'Ƶ',
  LL = '⇒',
  AL = '℅',
  $L = '∞',
  qL = '⧝',
  RL = 'ı',
  IL = '⊺',
  DL = '∫',
  PL = '∬',
  ML = 'ℤ',
  OL = '∫',
  UL = '⊺',
  FL = '⋂',
  zL = '⨗',
  HL = '⨼',
  BL = '⁣',
  jL = '⁢',
  VL = 'Ё',
  WL = 'ё',
  GL = 'Į',
  QL = 'į',
  KL = '𝕀',
  XL = '𝕚',
  JL = 'Ι',
  YL = 'ι',
  ZL = '⨼',
  eA = '¿',
  tA = '𝒾',
  nA = 'ℐ',
  rA = '∈',
  oA = '⋵',
  sA = '⋹',
  iA = '⋴',
  lA = '⋳',
  cA = '∈',
  aA = '⁢',
  uA = 'Ĩ',
  fA = 'ĩ',
  dA = 'І',
  hA = 'і',
  pA = 'Ï',
  mA = 'ï',
  gA = 'Ĵ',
  vA = 'ĵ',
  yA = 'Й',
  wA = 'й',
  SA = '𝔍',
  EA = '𝔧',
  xA = 'ȷ',
  kA = '𝕁',
  TA = '𝕛',
  bA = '𝒥',
  _A = '𝒿',
  NA = 'Ј',
  CA = 'ј',
  LA = 'Є',
  AA = 'є',
  $A = 'Κ',
  qA = 'κ',
  RA = 'ϰ',
  IA = 'Ķ',
  DA = 'ķ',
  PA = 'К',
  MA = 'к',
  OA = '𝔎',
  UA = '𝔨',
  FA = 'ĸ',
  zA = 'Х',
  HA = 'х',
  BA = 'Ќ',
  jA = 'ќ',
  VA = '𝕂',
  WA = '𝕜',
  GA = '𝒦',
  QA = '𝓀',
  KA = '⇚',
  XA = 'Ĺ',
  JA = 'ĺ',
  YA = '⦴',
  ZA = 'ℒ',
  e$ = 'Λ',
  t$ = 'λ',
  n$ = '⟨',
  r$ = '⟪',
  o$ = '⦑',
  s$ = '⟨',
  i$ = '⪅',
  l$ = 'ℒ',
  c$ = '«',
  a$ = '⇤',
  u$ = '⤟',
  f$ = '←',
  d$ = '↞',
  h$ = '⇐',
  p$ = '⤝',
  m$ = '↩',
  g$ = '↫',
  v$ = '⤹',
  y$ = '⥳',
  w$ = '↢',
  S$ = '⤙',
  E$ = '⤛',
  x$ = '⪫',
  k$ = '⪭',
  T$ = '⪭︀',
  b$ = '⤌',
  _$ = '⤎',
  N$ = '❲',
  C$ = '{',
  L$ = '[',
  A$ = '⦋',
  $$ = '⦏',
  q$ = '⦍',
  R$ = 'Ľ',
  I$ = 'ľ',
  D$ = 'Ļ',
  P$ = 'ļ',
  M$ = '⌈',
  O$ = '{',
  U$ = 'Л',
  F$ = 'л',
  z$ = '⤶',
  H$ = '“',
  B$ = '„',
  j$ = '⥧',
  V$ = '⥋',
  W$ = '↲',
  G$ = '≤',
  Q$ = '≦',
  K$ = '⟨',
  X$ = '⇤',
  J$ = '←',
  Y$ = '←',
  Z$ = '⇐',
  eq = '⇆',
  tq = '↢',
  nq = '⌈',
  rq = '⟦',
  oq = '⥡',
  sq = '⥙',
  iq = '⇃',
  lq = '⌊',
  cq = '↽',
  aq = '↼',
  uq = '⇇',
  fq = '↔',
  dq = '↔',
  hq = '⇔',
  pq = '⇆',
  mq = '⇋',
  gq = '↭',
  vq = '⥎',
  yq = '↤',
  wq = '⊣',
  Sq = '⥚',
  Eq = '⋋',
  xq = '⧏',
  kq = '⊲',
  Tq = '⊴',
  bq = '⥑',
  _q = '⥠',
  Nq = '⥘',
  Cq = '↿',
  Lq = '⥒',
  Aq = '↼',
  $q = '⪋',
  qq = '⋚',
  Rq = '≤',
  Iq = '≦',
  Dq = '⩽',
  Pq = '⪨',
  Mq = '⩽',
  Oq = '⩿',
  Uq = '⪁',
  Fq = '⪃',
  zq = '⋚︀',
  Hq = '⪓',
  Bq = '⪅',
  jq = '⋖',
  Vq = '⋚',
  Wq = '⪋',
  Gq = '⋚',
  Qq = '≦',
  Kq = '≶',
  Xq = '≶',
  Jq = '⪡',
  Yq = '≲',
  Zq = '⩽',
  eR = '≲',
  tR = '⥼',
  nR = '⌊',
  rR = '𝔏',
  oR = '𝔩',
  sR = '≶',
  iR = '⪑',
  lR = '⥢',
  cR = '↽',
  aR = '↼',
  uR = '⥪',
  fR = '▄',
  dR = 'Љ',
  hR = 'љ',
  pR = '⇇',
  mR = '≪',
  gR = '⋘',
  vR = '⌞',
  yR = '⇚',
  wR = '⥫',
  SR = '◺',
  ER = 'Ŀ',
  xR = 'ŀ',
  kR = '⎰',
  TR = '⎰',
  bR = '⪉',
  _R = '⪉',
  NR = '⪇',
  CR = '≨',
  LR = '⪇',
  AR = '≨',
  $R = '⋦',
  qR = '⟬',
  RR = '⇽',
  IR = '⟦',
  DR = '⟵',
  PR = '⟵',
  MR = '⟸',
  OR = '⟷',
  UR = '⟷',
  FR = '⟺',
  zR = '⟼',
  HR = '⟶',
  BR = '⟶',
  jR = '⟹',
  VR = '↫',
  WR = '↬',
  GR = '⦅',
  QR = '𝕃',
  KR = '𝕝',
  XR = '⨭',
  JR = '⨴',
  YR = '∗',
  ZR = '_',
  e2 = '↙',
  t2 = '↘',
  n2 = '◊',
  r2 = '◊',
  o2 = '⧫',
  s2 = '(',
  i2 = '⦓',
  l2 = '⇆',
  c2 = '⌟',
  a2 = '⇋',
  u2 = '⥭',
  f2 = '‎',
  d2 = '⊿',
  h2 = '‹',
  p2 = '𝓁',
  m2 = 'ℒ',
  g2 = '↰',
  v2 = '↰',
  y2 = '≲',
  w2 = '⪍',
  S2 = '⪏',
  E2 = '[',
  x2 = '‘',
  k2 = '‚',
  T2 = 'Ł',
  b2 = 'ł',
  _2 = '⪦',
  N2 = '⩹',
  C2 = '<',
  L2 = '<',
  A2 = '≪',
  $2 = '⋖',
  q2 = '⋋',
  R2 = '⋉',
  I2 = '⥶',
  D2 = '⩻',
  P2 = '◃',
  M2 = '⊴',
  O2 = '◂',
  U2 = '⦖',
  F2 = '⥊',
  z2 = '⥦',
  H2 = '≨︀',
  B2 = '≨︀',
  j2 = '¯',
  V2 = '♂',
  W2 = '✠',
  G2 = '✠',
  Q2 = '↦',
  K2 = '↦',
  X2 = '↧',
  J2 = '↤',
  Y2 = '↥',
  Z2 = '▮',
  eI = '⨩',
  tI = 'М',
  nI = 'м',
  rI = '—',
  oI = '∺',
  sI = '∡',
  iI = ' ',
  lI = 'ℳ',
  cI = '𝔐',
  aI = '𝔪',
  uI = '℧',
  fI = 'µ',
  dI = '*',
  hI = '⫰',
  pI = '∣',
  mI = '·',
  gI = '⊟',
  vI = '−',
  yI = '∸',
  wI = '⨪',
  SI = '∓',
  EI = '⫛',
  xI = '…',
  kI = '∓',
  TI = '⊧',
  bI = '𝕄',
  _I = '𝕞',
  NI = '∓',
  CI = '𝓂',
  LI = 'ℳ',
  AI = '∾',
  $I = 'Μ',
  qI = 'μ',
  RI = '⊸',
  II = '⊸',
  DI = '∇',
  PI = 'Ń',
  MI = 'ń',
  OI = '∠⃒',
  UI = '≉',
  FI = '⩰̸',
  zI = '≋̸',
  HI = 'ŉ',
  BI = '≉',
  jI = '♮',
  VI = 'ℕ',
  WI = '♮',
  GI = ' ',
  QI = '≎̸',
  KI = '≏̸',
  XI = '⩃',
  JI = 'Ň',
  YI = 'ň',
  ZI = 'Ņ',
  eD = 'ņ',
  tD = '≇',
  nD = '⩭̸',
  rD = '⩂',
  oD = 'Н',
  sD = 'н',
  iD = '–',
  lD = '⤤',
  cD = '↗',
  aD = '⇗',
  uD = '↗',
  fD = '≠',
  dD = '≐̸',
  hD = '​',
  pD = '​',
  mD = '​',
  gD = '​',
  vD = '≢',
  yD = '⤨',
  wD = '≂̸',
  SD = '≫',
  ED = '≪',
  xD = `
`,
  kD = '∄',
  TD = '∄',
  bD = '𝔑',
  _D = '𝔫',
  ND = '≧̸',
  CD = '≱',
  LD = '≱',
  AD = '≧̸',
  $D = '⩾̸',
  qD = '⩾̸',
  RD = '⋙̸',
  ID = '≵',
  DD = '≫⃒',
  PD = '≯',
  MD = '≯',
  OD = '≫̸',
  UD = '↮',
  FD = '⇎',
  zD = '⫲',
  HD = '∋',
  BD = '⋼',
  jD = '⋺',
  VD = '∋',
  WD = 'Њ',
  GD = 'њ',
  QD = '↚',
  KD = '⇍',
  XD = '‥',
  JD = '≦̸',
  YD = '≰',
  ZD = '↚',
  eP = '⇍',
  tP = '↮',
  nP = '⇎',
  rP = '≰',
  oP = '≦̸',
  sP = '⩽̸',
  iP = '⩽̸',
  lP = '≮',
  cP = '⋘̸',
  aP = '≴',
  uP = '≪⃒',
  fP = '≮',
  dP = '⋪',
  hP = '⋬',
  pP = '≪̸',
  mP = '∤',
  gP = '⁠',
  vP = ' ',
  yP = '𝕟',
  wP = 'ℕ',
  SP = '⫬',
  EP = '¬',
  xP = '≢',
  kP = '≭',
  TP = '∦',
  bP = '∉',
  _P = '≠',
  NP = '≂̸',
  CP = '∄',
  LP = '≯',
  AP = '≱',
  $P = '≧̸',
  qP = '≫̸',
  RP = '≹',
  IP = '⩾̸',
  DP = '≵',
  PP = '≎̸',
  MP = '≏̸',
  OP = '∉',
  UP = '⋵̸',
  FP = '⋹̸',
  zP = '∉',
  HP = '⋷',
  BP = '⋶',
  jP = '⧏̸',
  VP = '⋪',
  WP = '⋬',
  GP = '≮',
  QP = '≰',
  KP = '≸',
  XP = '≪̸',
  JP = '⩽̸',
  YP = '≴',
  ZP = '⪢̸',
  eM = '⪡̸',
  tM = '∌',
  nM = '∌',
  rM = '⋾',
  oM = '⋽',
  sM = '⊀',
  iM = '⪯̸',
  lM = '⋠',
  cM = '∌',
  aM = '⧐̸',
  uM = '⋫',
  fM = '⋭',
  dM = '⊏̸',
  hM = '⋢',
  pM = '⊐̸',
  mM = '⋣',
  gM = '⊂⃒',
  vM = '⊈',
  yM = '⊁',
  wM = '⪰̸',
  SM = '⋡',
  EM = '≿̸',
  xM = '⊃⃒',
  kM = '⊉',
  TM = '≁',
  bM = '≄',
  _M = '≇',
  NM = '≉',
  CM = '∤',
  LM = '∦',
  AM = '∦',
  $M = '⫽⃥',
  qM = '∂̸',
  RM = '⨔',
  IM = '⊀',
  DM = '⋠',
  PM = '⊀',
  MM = '⪯̸',
  OM = '⪯̸',
  UM = '⤳̸',
  FM = '↛',
  zM = '⇏',
  HM = '↝̸',
  BM = '↛',
  jM = '⇏',
  VM = '⋫',
  WM = '⋭',
  GM = '⊁',
  QM = '⋡',
  KM = '⪰̸',
  XM = '𝒩',
  JM = '𝓃',
  YM = '∤',
  ZM = '∦',
  eO = '≁',
  tO = '≄',
  nO = '≄',
  rO = '∤',
  oO = '∦',
  sO = '⋢',
  iO = '⋣',
  lO = '⊄',
  cO = '⫅̸',
  aO = '⊈',
  uO = '⊂⃒',
  fO = '⊈',
  dO = '⫅̸',
  hO = '⊁',
  pO = '⪰̸',
  mO = '⊅',
  gO = '⫆̸',
  vO = '⊉',
  yO = '⊃⃒',
  wO = '⊉',
  SO = '⫆̸',
  EO = '≹',
  xO = 'Ñ',
  kO = 'ñ',
  TO = '≸',
  bO = '⋪',
  _O = '⋬',
  NO = '⋫',
  CO = '⋭',
  LO = 'Ν',
  AO = 'ν',
  $O = '#',
  qO = '№',
  RO = ' ',
  IO = '≍⃒',
  DO = '⊬',
  PO = '⊭',
  MO = '⊮',
  OO = '⊯',
  UO = '≥⃒',
  FO = '>⃒',
  zO = '⤄',
  HO = '⧞',
  BO = '⤂',
  jO = '≤⃒',
  VO = '<⃒',
  WO = '⊴⃒',
  GO = '⤃',
  QO = '⊵⃒',
  KO = '∼⃒',
  XO = '⤣',
  JO = '↖',
  YO = '⇖',
  ZO = '↖',
  e3 = '⤧',
  t3 = 'Ó',
  n3 = 'ó',
  r3 = '⊛',
  o3 = 'Ô',
  s3 = 'ô',
  i3 = '⊚',
  l3 = 'О',
  c3 = 'о',
  a3 = '⊝',
  u3 = 'Ő',
  f3 = 'ő',
  d3 = '⨸',
  h3 = '⊙',
  p3 = '⦼',
  m3 = 'Œ',
  g3 = 'œ',
  v3 = '⦿',
  y3 = '𝔒',
  w3 = '𝔬',
  S3 = '˛',
  E3 = 'Ò',
  x3 = 'ò',
  k3 = '⧁',
  T3 = '⦵',
  b3 = 'Ω',
  _3 = '∮',
  N3 = '↺',
  C3 = '⦾',
  L3 = '⦻',
  A3 = '‾',
  $3 = '⧀',
  q3 = 'Ō',
  R3 = 'ō',
  I3 = 'Ω',
  D3 = 'ω',
  P3 = 'Ο',
  M3 = 'ο',
  O3 = '⦶',
  U3 = '⊖',
  F3 = '𝕆',
  z3 = '𝕠',
  H3 = '⦷',
  B3 = '“',
  j3 = '‘',
  V3 = '⦹',
  W3 = '⊕',
  G3 = '↻',
  Q3 = '⩔',
  K3 = '∨',
  X3 = '⩝',
  J3 = 'ℴ',
  Y3 = 'ℴ',
  Z3 = 'ª',
  e4 = 'º',
  t4 = '⊶',
  n4 = '⩖',
  r4 = '⩗',
  o4 = '⩛',
  s4 = 'Ⓢ',
  i4 = '𝒪',
  l4 = 'ℴ',
  c4 = 'Ø',
  a4 = 'ø',
  u4 = '⊘',
  f4 = 'Õ',
  d4 = 'õ',
  h4 = '⨶',
  p4 = '⨷',
  m4 = '⊗',
  g4 = 'Ö',
  v4 = 'ö',
  y4 = '⌽',
  w4 = '‾',
  S4 = '⏞',
  E4 = '⎴',
  x4 = '⏜',
  k4 = '¶',
  T4 = '∥',
  b4 = '∥',
  _4 = '⫳',
  N4 = '⫽',
  C4 = '∂',
  L4 = '∂',
  A4 = 'П',
  $4 = 'п',
  q4 = '%',
  R4 = '.',
  I4 = '‰',
  D4 = '⊥',
  P4 = '‱',
  M4 = '𝔓',
  O4 = '𝔭',
  U4 = 'Φ',
  F4 = 'φ',
  z4 = 'ϕ',
  H4 = 'ℳ',
  B4 = '☎',
  j4 = 'Π',
  V4 = 'π',
  W4 = '⋔',
  G4 = 'ϖ',
  Q4 = 'ℏ',
  K4 = 'ℎ',
  X4 = 'ℏ',
  J4 = '⨣',
  Y4 = '⊞',
  Z4 = '⨢',
  eU = '+',
  tU = '∔',
  nU = '⨥',
  rU = '⩲',
  oU = '±',
  sU = '±',
  iU = '⨦',
  lU = '⨧',
  cU = '±',
  aU = 'ℌ',
  uU = '⨕',
  fU = '𝕡',
  dU = 'ℙ',
  hU = '£',
  pU = '⪷',
  mU = '⪻',
  gU = '≺',
  vU = '≼',
  yU = '⪷',
  wU = '≺',
  SU = '≼',
  EU = '≺',
  xU = '⪯',
  kU = '≼',
  TU = '≾',
  bU = '⪯',
  _U = '⪹',
  NU = '⪵',
  CU = '⋨',
  LU = '⪯',
  AU = '⪳',
  $U = '≾',
  qU = '′',
  RU = '″',
  IU = 'ℙ',
  DU = '⪹',
  PU = '⪵',
  MU = '⋨',
  OU = '∏',
  UU = '∏',
  FU = '⌮',
  zU = '⌒',
  HU = '⌓',
  BU = '∝',
  jU = '∝',
  VU = '∷',
  WU = '∝',
  GU = '≾',
  QU = '⊰',
  KU = '𝒫',
  XU = '𝓅',
  JU = 'Ψ',
  YU = 'ψ',
  ZU = ' ',
  e5 = '𝔔',
  t5 = '𝔮',
  n5 = '⨌',
  r5 = '𝕢',
  o5 = 'ℚ',
  s5 = '⁗',
  i5 = '𝒬',
  l5 = '𝓆',
  c5 = 'ℍ',
  a5 = '⨖',
  u5 = '?',
  f5 = '≟',
  d5 = '"',
  h5 = '"',
  p5 = '⇛',
  m5 = '∽̱',
  g5 = 'Ŕ',
  v5 = 'ŕ',
  y5 = '√',
  w5 = '⦳',
  S5 = '⟩',
  E5 = '⟫',
  x5 = '⦒',
  k5 = '⦥',
  T5 = '⟩',
  b5 = '»',
  _5 = '⥵',
  N5 = '⇥',
  C5 = '⤠',
  L5 = '⤳',
  A5 = '→',
  $5 = '↠',
  q5 = '⇒',
  R5 = '⤞',
  I5 = '↪',
  D5 = '↬',
  P5 = '⥅',
  M5 = '⥴',
  O5 = '⤖',
  U5 = '↣',
  F5 = '↝',
  z5 = '⤚',
  H5 = '⤜',
  B5 = '∶',
  j5 = 'ℚ',
  V5 = '⤍',
  W5 = '⤏',
  G5 = '⤐',
  Q5 = '❳',
  K5 = '}',
  X5 = ']',
  J5 = '⦌',
  Y5 = '⦎',
  Z5 = '⦐',
  eF = 'Ř',
  tF = 'ř',
  nF = 'Ŗ',
  rF = 'ŗ',
  oF = '⌉',
  sF = '}',
  iF = 'Р',
  lF = 'р',
  cF = '⤷',
  aF = '⥩',
  uF = '”',
  fF = '”',
  dF = '↳',
  hF = 'ℜ',
  pF = 'ℛ',
  mF = 'ℜ',
  gF = 'ℝ',
  vF = 'ℜ',
  yF = '▭',
  wF = '®',
  SF = '®',
  EF = '∋',
  xF = '⇋',
  kF = '⥯',
  TF = '⥽',
  bF = '⌋',
  _F = '𝔯',
  NF = 'ℜ',
  CF = '⥤',
  LF = '⇁',
  AF = '⇀',
  $F = '⥬',
  qF = 'Ρ',
  RF = 'ρ',
  IF = 'ϱ',
  DF = '⟩',
  PF = '⇥',
  MF = '→',
  OF = '→',
  UF = '⇒',
  FF = '⇄',
  zF = '↣',
  HF = '⌉',
  BF = '⟧',
  jF = '⥝',
  VF = '⥕',
  WF = '⇂',
  GF = '⌋',
  QF = '⇁',
  KF = '⇀',
  XF = '⇄',
  JF = '⇌',
  YF = '⇉',
  ZF = '↝',
  ez = '↦',
  tz = '⊢',
  nz = '⥛',
  rz = '⋌',
  oz = '⧐',
  sz = '⊳',
  iz = '⊵',
  lz = '⥏',
  cz = '⥜',
  az = '⥔',
  uz = '↾',
  fz = '⥓',
  dz = '⇀',
  hz = '˚',
  pz = '≓',
  mz = '⇄',
  gz = '⇌',
  vz = '‏',
  yz = '⎱',
  wz = '⎱',
  Sz = '⫮',
  Ez = '⟭',
  xz = '⇾',
  kz = '⟧',
  Tz = '⦆',
  bz = '𝕣',
  _z = 'ℝ',
  Nz = '⨮',
  Cz = '⨵',
  Lz = '⥰',
  Az = ')',
  $z = '⦔',
  qz = '⨒',
  Rz = '⇉',
  Iz = '⇛',
  Dz = '›',
  Pz = '𝓇',
  Mz = 'ℛ',
  Oz = '↱',
  Uz = '↱',
  Fz = ']',
  zz = '’',
  Hz = '’',
  Bz = '⋌',
  jz = '⋊',
  Vz = '▹',
  Wz = '⊵',
  Gz = '▸',
  Qz = '⧎',
  Kz = '⧴',
  Xz = '⥨',
  Jz = '℞',
  Yz = 'Ś',
  Zz = 'ś',
  eH = '‚',
  tH = '⪸',
  nH = 'Š',
  rH = 'š',
  oH = '⪼',
  sH = '≻',
  iH = '≽',
  lH = '⪰',
  cH = '⪴',
  aH = 'Ş',
  uH = 'ş',
  fH = 'Ŝ',
  dH = 'ŝ',
  hH = '⪺',
  pH = '⪶',
  mH = '⋩',
  gH = '⨓',
  vH = '≿',
  yH = 'С',
  wH = 'с',
  SH = '⊡',
  EH = '⋅',
  xH = '⩦',
  kH = '⤥',
  TH = '↘',
  bH = '⇘',
  _H = '↘',
  NH = '§',
  CH = ';',
  LH = '⤩',
  AH = '∖',
  $H = '∖',
  qH = '✶',
  RH = '𝔖',
  IH = '𝔰',
  DH = '⌢',
  PH = '♯',
  MH = 'Щ',
  OH = 'щ',
  UH = 'Ш',
  FH = 'ш',
  zH = '↓',
  HH = '←',
  BH = '∣',
  jH = '∥',
  VH = '→',
  WH = '↑',
  GH = '­',
  QH = 'Σ',
  KH = 'σ',
  XH = 'ς',
  JH = 'ς',
  YH = '∼',
  ZH = '⩪',
  e8 = '≃',
  t8 = '≃',
  n8 = '⪞',
  r8 = '⪠',
  o8 = '⪝',
  s8 = '⪟',
  i8 = '≆',
  l8 = '⨤',
  c8 = '⥲',
  a8 = '←',
  u8 = '∘',
  f8 = '∖',
  d8 = '⨳',
  h8 = '⧤',
  p8 = '∣',
  m8 = '⌣',
  g8 = '⪪',
  v8 = '⪬',
  y8 = '⪬︀',
  w8 = 'Ь',
  S8 = 'ь',
  E8 = '⌿',
  x8 = '⧄',
  k8 = '/',
  T8 = '𝕊',
  b8 = '𝕤',
  _8 = '♠',
  N8 = '♠',
  C8 = '∥',
  L8 = '⊓',
  A8 = '⊓︀',
  $8 = '⊔',
  q8 = '⊔︀',
  R8 = '√',
  I8 = '⊏',
  D8 = '⊑',
  P8 = '⊏',
  M8 = '⊑',
  O8 = '⊐',
  U8 = '⊒',
  F8 = '⊐',
  z8 = '⊒',
  H8 = '□',
  B8 = '□',
  j8 = '⊓',
  V8 = '⊏',
  W8 = '⊑',
  G8 = '⊐',
  Q8 = '⊒',
  K8 = '⊔',
  X8 = '▪',
  J8 = '□',
  Y8 = '▪',
  Z8 = '→',
  eB = '𝒮',
  tB = '𝓈',
  nB = '∖',
  rB = '⌣',
  oB = '⋆',
  sB = '⋆',
  iB = '☆',
  lB = '★',
  cB = 'ϵ',
  aB = 'ϕ',
  uB = '¯',
  fB = '⊂',
  dB = '⋐',
  hB = '⪽',
  pB = '⫅',
  mB = '⊆',
  gB = '⫃',
  vB = '⫁',
  yB = '⫋',
  wB = '⊊',
  SB = '⪿',
  EB = '⥹',
  xB = '⊂',
  kB = '⋐',
  TB = '⊆',
  bB = '⫅',
  _B = '⊆',
  NB = '⊊',
  CB = '⫋',
  LB = '⫇',
  AB = '⫕',
  $B = '⫓',
  qB = '⪸',
  RB = '≻',
  IB = '≽',
  DB = '≻',
  PB = '⪰',
  MB = '≽',
  OB = '≿',
  UB = '⪰',
  FB = '⪺',
  zB = '⪶',
  HB = '⋩',
  BB = '≿',
  jB = '∋',
  VB = '∑',
  WB = '∑',
  GB = '♪',
  QB = '¹',
  KB = '²',
  XB = '³',
  JB = '⊃',
  YB = '⋑',
  ZB = '⪾',
  ej = '⫘',
  tj = '⫆',
  nj = '⊇',
  rj = '⫄',
  oj = '⊃',
  sj = '⊇',
  ij = '⟉',
  lj = '⫗',
  cj = '⥻',
  aj = '⫂',
  uj = '⫌',
  fj = '⊋',
  dj = '⫀',
  hj = '⊃',
  pj = '⋑',
  mj = '⊇',
  gj = '⫆',
  vj = '⊋',
  yj = '⫌',
  wj = '⫈',
  Sj = '⫔',
  Ej = '⫖',
  xj = '⤦',
  kj = '↙',
  Tj = '⇙',
  bj = '↙',
  _j = '⤪',
  Nj = 'ß',
  Cj = '	',
  Lj = '⌖',
  Aj = 'Τ',
  $j = 'τ',
  qj = '⎴',
  Rj = 'Ť',
  Ij = 'ť',
  Dj = 'Ţ',
  Pj = 'ţ',
  Mj = 'Т',
  Oj = 'т',
  Uj = '⃛',
  Fj = '⌕',
  zj = '𝔗',
  Hj = '𝔱',
  Bj = '∴',
  jj = '∴',
  Vj = '∴',
  Wj = 'Θ',
  Gj = 'θ',
  Qj = 'ϑ',
  Kj = 'ϑ',
  Xj = '≈',
  Jj = '∼',
  Yj = '  ',
  Zj = ' ',
  e6 = ' ',
  t6 = '≈',
  n6 = '∼',
  r6 = 'Þ',
  o6 = 'þ',
  s6 = '˜',
  i6 = '∼',
  l6 = '≃',
  c6 = '≅',
  a6 = '≈',
  u6 = '⨱',
  f6 = '⊠',
  d6 = '×',
  h6 = '⨰',
  p6 = '∭',
  m6 = '⤨',
  g6 = '⌶',
  v6 = '⫱',
  y6 = '⊤',
  w6 = '𝕋',
  S6 = '𝕥',
  E6 = '⫚',
  x6 = '⤩',
  k6 = '‴',
  T6 = '™',
  b6 = '™',
  _6 = '▵',
  N6 = '▿',
  C6 = '◃',
  L6 = '⊴',
  A6 = '≜',
  $6 = '▹',
  q6 = '⊵',
  R6 = '◬',
  I6 = '≜',
  D6 = '⨺',
  P6 = '⃛',
  M6 = '⨹',
  O6 = '⧍',
  U6 = '⨻',
  F6 = '⏢',
  z6 = '𝒯',
  H6 = '𝓉',
  B6 = 'Ц',
  j6 = 'ц',
  V6 = 'Ћ',
  W6 = 'ћ',
  G6 = 'Ŧ',
  Q6 = 'ŧ',
  K6 = '≬',
  X6 = '↞',
  J6 = '↠',
  Y6 = 'Ú',
  Z6 = 'ú',
  eV = '↑',
  tV = '↟',
  nV = '⇑',
  rV = '⥉',
  oV = 'Ў',
  sV = 'ў',
  iV = 'Ŭ',
  lV = 'ŭ',
  cV = 'Û',
  aV = 'û',
  uV = 'У',
  fV = 'у',
  dV = '⇅',
  hV = 'Ű',
  pV = 'ű',
  mV = '⥮',
  gV = '⥾',
  vV = '𝔘',
  yV = '𝔲',
  wV = 'Ù',
  SV = 'ù',
  EV = '⥣',
  xV = '↿',
  kV = '↾',
  TV = '▀',
  bV = '⌜',
  _V = '⌜',
  NV = '⌏',
  CV = '◸',
  LV = 'Ū',
  AV = 'ū',
  $V = '¨',
  qV = '_',
  RV = '⏟',
  IV = '⎵',
  DV = '⏝',
  PV = '⋃',
  MV = '⊎',
  OV = 'Ų',
  UV = 'ų',
  FV = '𝕌',
  zV = '𝕦',
  HV = '⤒',
  BV = '↑',
  jV = '↑',
  VV = '⇑',
  WV = '⇅',
  GV = '↕',
  QV = '↕',
  KV = '⇕',
  XV = '⥮',
  JV = '↿',
  YV = '↾',
  ZV = '⊎',
  e9 = '↖',
  t9 = '↗',
  n9 = 'υ',
  r9 = 'ϒ',
  o9 = 'ϒ',
  s9 = 'Υ',
  i9 = 'υ',
  l9 = '↥',
  c9 = '⊥',
  a9 = '⇈',
  u9 = '⌝',
  f9 = '⌝',
  d9 = '⌎',
  h9 = 'Ů',
  p9 = 'ů',
  m9 = '◹',
  g9 = '𝒰',
  v9 = '𝓊',
  y9 = '⋰',
  w9 = 'Ũ',
  S9 = 'ũ',
  E9 = '▵',
  x9 = '▴',
  k9 = '⇈',
  T9 = 'Ü',
  b9 = 'ü',
  _9 = '⦧',
  N9 = '⦜',
  C9 = 'ϵ',
  L9 = 'ϰ',
  A9 = '∅',
  $9 = 'ϕ',
  q9 = 'ϖ',
  R9 = '∝',
  I9 = '↕',
  D9 = '⇕',
  P9 = 'ϱ',
  M9 = 'ς',
  O9 = '⊊︀',
  U9 = '⫋︀',
  F9 = '⊋︀',
  z9 = '⫌︀',
  H9 = 'ϑ',
  B9 = '⊲',
  j9 = '⊳',
  V9 = '⫨',
  W9 = '⫫',
  G9 = '⫩',
  Q9 = 'В',
  K9 = 'в',
  X9 = '⊢',
  J9 = '⊨',
  Y9 = '⊩',
  Z9 = '⊫',
  eW = '⫦',
  tW = '⊻',
  nW = '∨',
  rW = '⋁',
  oW = '≚',
  sW = '⋮',
  iW = '|',
  lW = '‖',
  cW = '|',
  aW = '‖',
  uW = '∣',
  fW = '|',
  dW = '❘',
  hW = '≀',
  pW = ' ',
  mW = '𝔙',
  gW = '𝔳',
  vW = '⊲',
  yW = '⊂⃒',
  wW = '⊃⃒',
  SW = '𝕍',
  EW = '𝕧',
  xW = '∝',
  kW = '⊳',
  TW = '𝒱',
  bW = '𝓋',
  _W = '⫋︀',
  NW = '⊊︀',
  CW = '⫌︀',
  LW = '⊋︀',
  AW = '⊪',
  $W = '⦚',
  qW = 'Ŵ',
  RW = 'ŵ',
  IW = '⩟',
  DW = '∧',
  PW = '⋀',
  MW = '≙',
  OW = '℘',
  UW = '𝔚',
  FW = '𝔴',
  zW = '𝕎',
  HW = '𝕨',
  BW = '℘',
  jW = '≀',
  VW = '≀',
  WW = '𝒲',
  GW = '𝓌',
  QW = '⋂',
  KW = '◯',
  XW = '⋃',
  JW = '▽',
  YW = '𝔛',
  ZW = '𝔵',
  e7 = '⟷',
  t7 = '⟺',
  n7 = 'Ξ',
  r7 = 'ξ',
  o7 = '⟵',
  s7 = '⟸',
  i7 = '⟼',
  l7 = '⋻',
  c7 = '⨀',
  a7 = '𝕏',
  u7 = '𝕩',
  f7 = '⨁',
  d7 = '⨂',
  h7 = '⟶',
  p7 = '⟹',
  m7 = '𝒳',
  g7 = '𝓍',
  v7 = '⨆',
  y7 = '⨄',
  w7 = '△',
  S7 = '⋁',
  E7 = '⋀',
  x7 = 'Ý',
  k7 = 'ý',
  T7 = 'Я',
  b7 = 'я',
  _7 = 'Ŷ',
  N7 = 'ŷ',
  C7 = 'Ы',
  L7 = 'ы',
  A7 = '¥',
  $7 = '𝔜',
  q7 = '𝔶',
  R7 = 'Ї',
  I7 = 'ї',
  D7 = '𝕐',
  P7 = '𝕪',
  M7 = '𝒴',
  O7 = '𝓎',
  U7 = 'Ю',
  F7 = 'ю',
  z7 = 'ÿ',
  H7 = 'Ÿ',
  B7 = 'Ź',
  j7 = 'ź',
  V7 = 'Ž',
  W7 = 'ž',
  G7 = 'З',
  Q7 = 'з',
  K7 = 'Ż',
  X7 = 'ż',
  J7 = 'ℨ',
  Y7 = '​',
  Z7 = 'Ζ',
  eG = 'ζ',
  tG = '𝔷',
  nG = 'ℨ',
  rG = 'Ж',
  oG = 'ж',
  sG = '⇝',
  iG = '𝕫',
  lG = 'ℤ',
  cG = '𝒵',
  aG = '𝓏',
  uG = '‍',
  fG = '‌',
  wh = {
    Aacute: Kv,
    aacute: Xv,
    Abreve: Jv,
    abreve: Yv,
    ac: Zv,
    acd: ey,
    acE: ty,
    Acirc: ny,
    acirc: ry,
    acute: oy,
    Acy: sy,
    acy: iy,
    AElig: ly,
    aelig: cy,
    af: ay,
    Afr: uy,
    afr: fy,
    Agrave: dy,
    agrave: hy,
    alefsym: py,
    aleph: my,
    Alpha: gy,
    alpha: vy,
    Amacr: yy,
    amacr: wy,
    amalg: Sy,
    amp: Ey,
    AMP: xy,
    andand: ky,
    And: Ty,
    and: by,
    andd: _y,
    andslope: Ny,
    andv: Cy,
    ang: Ly,
    ange: Ay,
    angle: $y,
    angmsdaa: qy,
    angmsdab: Ry,
    angmsdac: Iy,
    angmsdad: Dy,
    angmsdae: Py,
    angmsdaf: My,
    angmsdag: Oy,
    angmsdah: Uy,
    angmsd: Fy,
    angrt: zy,
    angrtvb: Hy,
    angrtvbd: By,
    angsph: jy,
    angst: Vy,
    angzarr: Wy,
    Aogon: Gy,
    aogon: Qy,
    Aopf: Ky,
    aopf: Xy,
    apacir: Jy,
    ap: Yy,
    apE: Zy,
    ape: ew,
    apid: tw,
    apos: nw,
    ApplyFunction: rw,
    approx: ow,
    approxeq: sw,
    Aring: iw,
    aring: lw,
    Ascr: cw,
    ascr: aw,
    Assign: uw,
    ast: fw,
    asymp: dw,
    asympeq: hw,
    Atilde: pw,
    atilde: mw,
    Auml: gw,
    auml: vw,
    awconint: yw,
    awint: ww,
    backcong: Sw,
    backepsilon: Ew,
    backprime: xw,
    backsim: kw,
    backsimeq: Tw,
    Backslash: bw,
    Barv: _w,
    barvee: Nw,
    barwed: Cw,
    Barwed: Lw,
    barwedge: Aw,
    bbrk: $w,
    bbrktbrk: qw,
    bcong: Rw,
    Bcy: Iw,
    bcy: Dw,
    bdquo: Pw,
    becaus: Mw,
    because: Ow,
    Because: Uw,
    bemptyv: Fw,
    bepsi: zw,
    bernou: Hw,
    Bernoullis: Bw,
    Beta: jw,
    beta: Vw,
    beth: Ww,
    between: Gw,
    Bfr: Qw,
    bfr: Kw,
    bigcap: Xw,
    bigcirc: Jw,
    bigcup: Yw,
    bigodot: Zw,
    bigoplus: e0,
    bigotimes: t0,
    bigsqcup: n0,
    bigstar: r0,
    bigtriangledown: o0,
    bigtriangleup: s0,
    biguplus: i0,
    bigvee: l0,
    bigwedge: c0,
    bkarow: a0,
    blacklozenge: u0,
    blacksquare: f0,
    blacktriangle: d0,
    blacktriangledown: h0,
    blacktriangleleft: p0,
    blacktriangleright: m0,
    blank: g0,
    blk12: v0,
    blk14: y0,
    blk34: w0,
    block: S0,
    bne: E0,
    bnequiv: x0,
    bNot: k0,
    bnot: T0,
    Bopf: b0,
    bopf: _0,
    bot: N0,
    bottom: C0,
    bowtie: L0,
    boxbox: A0,
    boxdl: $0,
    boxdL: q0,
    boxDl: R0,
    boxDL: I0,
    boxdr: D0,
    boxdR: P0,
    boxDr: M0,
    boxDR: O0,
    boxh: U0,
    boxH: F0,
    boxhd: z0,
    boxHd: H0,
    boxhD: B0,
    boxHD: j0,
    boxhu: V0,
    boxHu: W0,
    boxhU: G0,
    boxHU: Q0,
    boxminus: K0,
    boxplus: X0,
    boxtimes: J0,
    boxul: Y0,
    boxuL: Z0,
    boxUl: e1,
    boxUL: t1,
    boxur: n1,
    boxuR: r1,
    boxUr: o1,
    boxUR: s1,
    boxv: i1,
    boxV: l1,
    boxvh: c1,
    boxvH: a1,
    boxVh: u1,
    boxVH: f1,
    boxvl: d1,
    boxvL: h1,
    boxVl: p1,
    boxVL: m1,
    boxvr: g1,
    boxvR: v1,
    boxVr: y1,
    boxVR: w1,
    bprime: S1,
    breve: E1,
    Breve: x1,
    brvbar: k1,
    bscr: T1,
    Bscr: b1,
    bsemi: _1,
    bsim: N1,
    bsime: C1,
    bsolb: L1,
    bsol: A1,
    bsolhsub: $1,
    bull: q1,
    bullet: R1,
    bump: I1,
    bumpE: D1,
    bumpe: P1,
    Bumpeq: M1,
    bumpeq: O1,
    Cacute: U1,
    cacute: F1,
    capand: z1,
    capbrcup: H1,
    capcap: B1,
    cap: j1,
    Cap: V1,
    capcup: W1,
    capdot: G1,
    CapitalDifferentialD: Q1,
    caps: K1,
    caret: X1,
    caron: J1,
    Cayleys: Y1,
    ccaps: Z1,
    Ccaron: eS,
    ccaron: tS,
    Ccedil: nS,
    ccedil: rS,
    Ccirc: oS,
    ccirc: sS,
    Cconint: iS,
    ccups: lS,
    ccupssm: cS,
    Cdot: aS,
    cdot: uS,
    cedil: fS,
    Cedilla: dS,
    cemptyv: hS,
    cent: pS,
    centerdot: mS,
    CenterDot: gS,
    cfr: vS,
    Cfr: yS,
    CHcy: wS,
    chcy: SS,
    check: ES,
    checkmark: xS,
    Chi: kS,
    chi: TS,
    circ: bS,
    circeq: _S,
    circlearrowleft: NS,
    circlearrowright: CS,
    circledast: LS,
    circledcirc: AS,
    circleddash: $S,
    CircleDot: qS,
    circledR: RS,
    circledS: IS,
    CircleMinus: DS,
    CirclePlus: PS,
    CircleTimes: MS,
    cir: OS,
    cirE: US,
    cire: FS,
    cirfnint: zS,
    cirmid: HS,
    cirscir: BS,
    ClockwiseContourIntegral: jS,
    CloseCurlyDoubleQuote: VS,
    CloseCurlyQuote: WS,
    clubs: GS,
    clubsuit: QS,
    colon: KS,
    Colon: XS,
    Colone: JS,
    colone: YS,
    coloneq: ZS,
    comma: eE,
    commat: tE,
    comp: nE,
    compfn: rE,
    complement: oE,
    complexes: sE,
    cong: iE,
    congdot: lE,
    Congruent: cE,
    conint: aE,
    Conint: uE,
    ContourIntegral: fE,
    copf: dE,
    Copf: hE,
    coprod: pE,
    Coproduct: mE,
    copy: gE,
    COPY: vE,
    copysr: yE,
    CounterClockwiseContourIntegral: wE,
    crarr: SE,
    cross: EE,
    Cross: xE,
    Cscr: kE,
    cscr: TE,
    csub: bE,
    csube: _E,
    csup: NE,
    csupe: CE,
    ctdot: LE,
    cudarrl: AE,
    cudarrr: $E,
    cuepr: qE,
    cuesc: RE,
    cularr: IE,
    cularrp: DE,
    cupbrcap: PE,
    cupcap: ME,
    CupCap: OE,
    cup: UE,
    Cup: FE,
    cupcup: zE,
    cupdot: HE,
    cupor: BE,
    cups: jE,
    curarr: VE,
    curarrm: WE,
    curlyeqprec: GE,
    curlyeqsucc: QE,
    curlyvee: KE,
    curlywedge: XE,
    curren: JE,
    curvearrowleft: YE,
    curvearrowright: ZE,
    cuvee: ex,
    cuwed: tx,
    cwconint: nx,
    cwint: rx,
    cylcty: ox,
    dagger: sx,
    Dagger: ix,
    daleth: lx,
    darr: cx,
    Darr: ax,
    dArr: ux,
    dash: fx,
    Dashv: dx,
    dashv: hx,
    dbkarow: px,
    dblac: mx,
    Dcaron: gx,
    dcaron: vx,
    Dcy: yx,
    dcy: wx,
    ddagger: Sx,
    ddarr: Ex,
    DD: xx,
    dd: kx,
    DDotrahd: Tx,
    ddotseq: bx,
    deg: _x,
    Del: Nx,
    Delta: Cx,
    delta: Lx,
    demptyv: Ax,
    dfisht: $x,
    Dfr: qx,
    dfr: Rx,
    dHar: Ix,
    dharl: Dx,
    dharr: Px,
    DiacriticalAcute: Mx,
    DiacriticalDot: Ox,
    DiacriticalDoubleAcute: Ux,
    DiacriticalGrave: Fx,
    DiacriticalTilde: zx,
    diam: Hx,
    diamond: Bx,
    Diamond: jx,
    diamondsuit: Vx,
    diams: Wx,
    die: Gx,
    DifferentialD: Qx,
    digamma: Kx,
    disin: Xx,
    div: Jx,
    divide: Yx,
    divideontimes: Zx,
    divonx: ek,
    DJcy: tk,
    djcy: nk,
    dlcorn: rk,
    dlcrop: ok,
    dollar: sk,
    Dopf: ik,
    dopf: lk,
    Dot: ck,
    dot: ak,
    DotDot: uk,
    doteq: fk,
    doteqdot: dk,
    DotEqual: hk,
    dotminus: pk,
    dotplus: mk,
    dotsquare: gk,
    doublebarwedge: vk,
    DoubleContourIntegral: yk,
    DoubleDot: wk,
    DoubleDownArrow: Sk,
    DoubleLeftArrow: Ek,
    DoubleLeftRightArrow: xk,
    DoubleLeftTee: kk,
    DoubleLongLeftArrow: Tk,
    DoubleLongLeftRightArrow: bk,
    DoubleLongRightArrow: _k,
    DoubleRightArrow: Nk,
    DoubleRightTee: Ck,
    DoubleUpArrow: Lk,
    DoubleUpDownArrow: Ak,
    DoubleVerticalBar: $k,
    DownArrowBar: qk,
    downarrow: Rk,
    DownArrow: Ik,
    Downarrow: Dk,
    DownArrowUpArrow: Pk,
    DownBreve: Mk,
    downdownarrows: Ok,
    downharpoonleft: Uk,
    downharpoonright: Fk,
    DownLeftRightVector: zk,
    DownLeftTeeVector: Hk,
    DownLeftVectorBar: Bk,
    DownLeftVector: jk,
    DownRightTeeVector: Vk,
    DownRightVectorBar: Wk,
    DownRightVector: Gk,
    DownTeeArrow: Qk,
    DownTee: Kk,
    drbkarow: Xk,
    drcorn: Jk,
    drcrop: Yk,
    Dscr: Zk,
    dscr: eT,
    DScy: tT,
    dscy: nT,
    dsol: rT,
    Dstrok: oT,
    dstrok: sT,
    dtdot: iT,
    dtri: lT,
    dtrif: cT,
    duarr: aT,
    duhar: uT,
    dwangle: fT,
    DZcy: dT,
    dzcy: hT,
    dzigrarr: pT,
    Eacute: mT,
    eacute: gT,
    easter: vT,
    Ecaron: yT,
    ecaron: wT,
    Ecirc: ST,
    ecirc: ET,
    ecir: xT,
    ecolon: kT,
    Ecy: TT,
    ecy: bT,
    eDDot: _T,
    Edot: NT,
    edot: CT,
    eDot: LT,
    ee: AT,
    efDot: $T,
    Efr: qT,
    efr: RT,
    eg: IT,
    Egrave: DT,
    egrave: PT,
    egs: MT,
    egsdot: OT,
    el: UT,
    Element: FT,
    elinters: zT,
    ell: HT,
    els: BT,
    elsdot: jT,
    Emacr: VT,
    emacr: WT,
    empty: GT,
    emptyset: QT,
    EmptySmallSquare: KT,
    emptyv: XT,
    EmptyVerySmallSquare: JT,
    emsp13: YT,
    emsp14: ZT,
    emsp: eb,
    ENG: tb,
    eng: nb,
    ensp: rb,
    Eogon: ob,
    eogon: sb,
    Eopf: ib,
    eopf: lb,
    epar: cb,
    eparsl: ab,
    eplus: ub,
    epsi: fb,
    Epsilon: db,
    epsilon: hb,
    epsiv: pb,
    eqcirc: mb,
    eqcolon: gb,
    eqsim: vb,
    eqslantgtr: yb,
    eqslantless: wb,
    Equal: Sb,
    equals: Eb,
    EqualTilde: xb,
    equest: kb,
    Equilibrium: Tb,
    equiv: bb,
    equivDD: _b,
    eqvparsl: Nb,
    erarr: Cb,
    erDot: Lb,
    escr: Ab,
    Escr: $b,
    esdot: qb,
    Esim: Rb,
    esim: Ib,
    Eta: Db,
    eta: Pb,
    ETH: Mb,
    eth: Ob,
    Euml: Ub,
    euml: Fb,
    euro: zb,
    excl: Hb,
    exist: Bb,
    Exists: jb,
    expectation: Vb,
    exponentiale: Wb,
    ExponentialE: Gb,
    fallingdotseq: Qb,
    Fcy: Kb,
    fcy: Xb,
    female: Jb,
    ffilig: Yb,
    fflig: Zb,
    ffllig: e_,
    Ffr: t_,
    ffr: n_,
    filig: r_,
    FilledSmallSquare: o_,
    FilledVerySmallSquare: s_,
    fjlig: i_,
    flat: l_,
    fllig: c_,
    fltns: a_,
    fnof: u_,
    Fopf: f_,
    fopf: d_,
    forall: h_,
    ForAll: p_,
    fork: m_,
    forkv: g_,
    Fouriertrf: v_,
    fpartint: y_,
    frac12: w_,
    frac13: S_,
    frac14: E_,
    frac15: x_,
    frac16: k_,
    frac18: T_,
    frac23: b_,
    frac25: __,
    frac34: N_,
    frac35: C_,
    frac38: L_,
    frac45: A_,
    frac56: $_,
    frac58: q_,
    frac78: R_,
    frasl: I_,
    frown: D_,
    fscr: P_,
    Fscr: M_,
    gacute: O_,
    Gamma: U_,
    gamma: F_,
    Gammad: z_,
    gammad: H_,
    gap: B_,
    Gbreve: j_,
    gbreve: V_,
    Gcedil: W_,
    Gcirc: G_,
    gcirc: Q_,
    Gcy: K_,
    gcy: X_,
    Gdot: J_,
    gdot: Y_,
    ge: Z_,
    gE: eN,
    gEl: tN,
    gel: nN,
    geq: rN,
    geqq: oN,
    geqslant: sN,
    gescc: iN,
    ges: lN,
    gesdot: cN,
    gesdoto: aN,
    gesdotol: uN,
    gesl: fN,
    gesles: dN,
    Gfr: hN,
    gfr: pN,
    gg: mN,
    Gg: gN,
    ggg: vN,
    gimel: yN,
    GJcy: wN,
    gjcy: SN,
    gla: EN,
    gl: xN,
    glE: kN,
    glj: TN,
    gnap: bN,
    gnapprox: _N,
    gne: NN,
    gnE: CN,
    gneq: LN,
    gneqq: AN,
    gnsim: $N,
    Gopf: qN,
    gopf: RN,
    grave: IN,
    GreaterEqual: DN,
    GreaterEqualLess: PN,
    GreaterFullEqual: MN,
    GreaterGreater: ON,
    GreaterLess: UN,
    GreaterSlantEqual: FN,
    GreaterTilde: zN,
    Gscr: HN,
    gscr: BN,
    gsim: jN,
    gsime: VN,
    gsiml: WN,
    gtcc: GN,
    gtcir: QN,
    gt: KN,
    GT: XN,
    Gt: JN,
    gtdot: YN,
    gtlPar: ZN,
    gtquest: eC,
    gtrapprox: tC,
    gtrarr: nC,
    gtrdot: rC,
    gtreqless: oC,
    gtreqqless: sC,
    gtrless: iC,
    gtrsim: lC,
    gvertneqq: cC,
    gvnE: aC,
    Hacek: uC,
    hairsp: fC,
    half: dC,
    hamilt: hC,
    HARDcy: pC,
    hardcy: mC,
    harrcir: gC,
    harr: vC,
    hArr: yC,
    harrw: wC,
    Hat: SC,
    hbar: EC,
    Hcirc: xC,
    hcirc: kC,
    hearts: TC,
    heartsuit: bC,
    hellip: _C,
    hercon: NC,
    hfr: CC,
    Hfr: LC,
    HilbertSpace: AC,
    hksearow: $C,
    hkswarow: qC,
    hoarr: RC,
    homtht: IC,
    hookleftarrow: DC,
    hookrightarrow: PC,
    hopf: MC,
    Hopf: OC,
    horbar: UC,
    HorizontalLine: FC,
    hscr: zC,
    Hscr: HC,
    hslash: BC,
    Hstrok: jC,
    hstrok: VC,
    HumpDownHump: WC,
    HumpEqual: GC,
    hybull: QC,
    hyphen: KC,
    Iacute: XC,
    iacute: JC,
    ic: YC,
    Icirc: ZC,
    icirc: eL,
    Icy: tL,
    icy: nL,
    Idot: rL,
    IEcy: oL,
    iecy: sL,
    iexcl: iL,
    iff: lL,
    ifr: cL,
    Ifr: aL,
    Igrave: uL,
    igrave: fL,
    ii: dL,
    iiiint: hL,
    iiint: pL,
    iinfin: mL,
    iiota: gL,
    IJlig: vL,
    ijlig: yL,
    Imacr: wL,
    imacr: SL,
    image: EL,
    ImaginaryI: xL,
    imagline: kL,
    imagpart: TL,
    imath: bL,
    Im: _L,
    imof: NL,
    imped: CL,
    Implies: LL,
    incare: AL,
    in: '∈',
    infin: $L,
    infintie: qL,
    inodot: RL,
    intcal: IL,
    int: DL,
    Int: PL,
    integers: ML,
    Integral: OL,
    intercal: UL,
    Intersection: FL,
    intlarhk: zL,
    intprod: HL,
    InvisibleComma: BL,
    InvisibleTimes: jL,
    IOcy: VL,
    iocy: WL,
    Iogon: GL,
    iogon: QL,
    Iopf: KL,
    iopf: XL,
    Iota: JL,
    iota: YL,
    iprod: ZL,
    iquest: eA,
    iscr: tA,
    Iscr: nA,
    isin: rA,
    isindot: oA,
    isinE: sA,
    isins: iA,
    isinsv: lA,
    isinv: cA,
    it: aA,
    Itilde: uA,
    itilde: fA,
    Iukcy: dA,
    iukcy: hA,
    Iuml: pA,
    iuml: mA,
    Jcirc: gA,
    jcirc: vA,
    Jcy: yA,
    jcy: wA,
    Jfr: SA,
    jfr: EA,
    jmath: xA,
    Jopf: kA,
    jopf: TA,
    Jscr: bA,
    jscr: _A,
    Jsercy: NA,
    jsercy: CA,
    Jukcy: LA,
    jukcy: AA,
    Kappa: $A,
    kappa: qA,
    kappav: RA,
    Kcedil: IA,
    kcedil: DA,
    Kcy: PA,
    kcy: MA,
    Kfr: OA,
    kfr: UA,
    kgreen: FA,
    KHcy: zA,
    khcy: HA,
    KJcy: BA,
    kjcy: jA,
    Kopf: VA,
    kopf: WA,
    Kscr: GA,
    kscr: QA,
    lAarr: KA,
    Lacute: XA,
    lacute: JA,
    laemptyv: YA,
    lagran: ZA,
    Lambda: e$,
    lambda: t$,
    lang: n$,
    Lang: r$,
    langd: o$,
    langle: s$,
    lap: i$,
    Laplacetrf: l$,
    laquo: c$,
    larrb: a$,
    larrbfs: u$,
    larr: f$,
    Larr: d$,
    lArr: h$,
    larrfs: p$,
    larrhk: m$,
    larrlp: g$,
    larrpl: v$,
    larrsim: y$,
    larrtl: w$,
    latail: S$,
    lAtail: E$,
    lat: x$,
    late: k$,
    lates: T$,
    lbarr: b$,
    lBarr: _$,
    lbbrk: N$,
    lbrace: C$,
    lbrack: L$,
    lbrke: A$,
    lbrksld: $$,
    lbrkslu: q$,
    Lcaron: R$,
    lcaron: I$,
    Lcedil: D$,
    lcedil: P$,
    lceil: M$,
    lcub: O$,
    Lcy: U$,
    lcy: F$,
    ldca: z$,
    ldquo: H$,
    ldquor: B$,
    ldrdhar: j$,
    ldrushar: V$,
    ldsh: W$,
    le: G$,
    lE: Q$,
    LeftAngleBracket: K$,
    LeftArrowBar: X$,
    leftarrow: J$,
    LeftArrow: Y$,
    Leftarrow: Z$,
    LeftArrowRightArrow: eq,
    leftarrowtail: tq,
    LeftCeiling: nq,
    LeftDoubleBracket: rq,
    LeftDownTeeVector: oq,
    LeftDownVectorBar: sq,
    LeftDownVector: iq,
    LeftFloor: lq,
    leftharpoondown: cq,
    leftharpoonup: aq,
    leftleftarrows: uq,
    leftrightarrow: fq,
    LeftRightArrow: dq,
    Leftrightarrow: hq,
    leftrightarrows: pq,
    leftrightharpoons: mq,
    leftrightsquigarrow: gq,
    LeftRightVector: vq,
    LeftTeeArrow: yq,
    LeftTee: wq,
    LeftTeeVector: Sq,
    leftthreetimes: Eq,
    LeftTriangleBar: xq,
    LeftTriangle: kq,
    LeftTriangleEqual: Tq,
    LeftUpDownVector: bq,
    LeftUpTeeVector: _q,
    LeftUpVectorBar: Nq,
    LeftUpVector: Cq,
    LeftVectorBar: Lq,
    LeftVector: Aq,
    lEg: $q,
    leg: qq,
    leq: Rq,
    leqq: Iq,
    leqslant: Dq,
    lescc: Pq,
    les: Mq,
    lesdot: Oq,
    lesdoto: Uq,
    lesdotor: Fq,
    lesg: zq,
    lesges: Hq,
    lessapprox: Bq,
    lessdot: jq,
    lesseqgtr: Vq,
    lesseqqgtr: Wq,
    LessEqualGreater: Gq,
    LessFullEqual: Qq,
    LessGreater: Kq,
    lessgtr: Xq,
    LessLess: Jq,
    lesssim: Yq,
    LessSlantEqual: Zq,
    LessTilde: eR,
    lfisht: tR,
    lfloor: nR,
    Lfr: rR,
    lfr: oR,
    lg: sR,
    lgE: iR,
    lHar: lR,
    lhard: cR,
    lharu: aR,
    lharul: uR,
    lhblk: fR,
    LJcy: dR,
    ljcy: hR,
    llarr: pR,
    ll: mR,
    Ll: gR,
    llcorner: vR,
    Lleftarrow: yR,
    llhard: wR,
    lltri: SR,
    Lmidot: ER,
    lmidot: xR,
    lmoustache: kR,
    lmoust: TR,
    lnap: bR,
    lnapprox: _R,
    lne: NR,
    lnE: CR,
    lneq: LR,
    lneqq: AR,
    lnsim: $R,
    loang: qR,
    loarr: RR,
    lobrk: IR,
    longleftarrow: DR,
    LongLeftArrow: PR,
    Longleftarrow: MR,
    longleftrightarrow: OR,
    LongLeftRightArrow: UR,
    Longleftrightarrow: FR,
    longmapsto: zR,
    longrightarrow: HR,
    LongRightArrow: BR,
    Longrightarrow: jR,
    looparrowleft: VR,
    looparrowright: WR,
    lopar: GR,
    Lopf: QR,
    lopf: KR,
    loplus: XR,
    lotimes: JR,
    lowast: YR,
    lowbar: ZR,
    LowerLeftArrow: e2,
    LowerRightArrow: t2,
    loz: n2,
    lozenge: r2,
    lozf: o2,
    lpar: s2,
    lparlt: i2,
    lrarr: l2,
    lrcorner: c2,
    lrhar: a2,
    lrhard: u2,
    lrm: f2,
    lrtri: d2,
    lsaquo: h2,
    lscr: p2,
    Lscr: m2,
    lsh: g2,
    Lsh: v2,
    lsim: y2,
    lsime: w2,
    lsimg: S2,
    lsqb: E2,
    lsquo: x2,
    lsquor: k2,
    Lstrok: T2,
    lstrok: b2,
    ltcc: _2,
    ltcir: N2,
    lt: C2,
    LT: L2,
    Lt: A2,
    ltdot: $2,
    lthree: q2,
    ltimes: R2,
    ltlarr: I2,
    ltquest: D2,
    ltri: P2,
    ltrie: M2,
    ltrif: O2,
    ltrPar: U2,
    lurdshar: F2,
    luruhar: z2,
    lvertneqq: H2,
    lvnE: B2,
    macr: j2,
    male: V2,
    malt: W2,
    maltese: G2,
    Map: '⤅',
    map: Q2,
    mapsto: K2,
    mapstodown: X2,
    mapstoleft: J2,
    mapstoup: Y2,
    marker: Z2,
    mcomma: eI,
    Mcy: tI,
    mcy: nI,
    mdash: rI,
    mDDot: oI,
    measuredangle: sI,
    MediumSpace: iI,
    Mellintrf: lI,
    Mfr: cI,
    mfr: aI,
    mho: uI,
    micro: fI,
    midast: dI,
    midcir: hI,
    mid: pI,
    middot: mI,
    minusb: gI,
    minus: vI,
    minusd: yI,
    minusdu: wI,
    MinusPlus: SI,
    mlcp: EI,
    mldr: xI,
    mnplus: kI,
    models: TI,
    Mopf: bI,
    mopf: _I,
    mp: NI,
    mscr: CI,
    Mscr: LI,
    mstpos: AI,
    Mu: $I,
    mu: qI,
    multimap: RI,
    mumap: II,
    nabla: DI,
    Nacute: PI,
    nacute: MI,
    nang: OI,
    nap: UI,
    napE: FI,
    napid: zI,
    napos: HI,
    napprox: BI,
    natural: jI,
    naturals: VI,
    natur: WI,
    nbsp: GI,
    nbump: QI,
    nbumpe: KI,
    ncap: XI,
    Ncaron: JI,
    ncaron: YI,
    Ncedil: ZI,
    ncedil: eD,
    ncong: tD,
    ncongdot: nD,
    ncup: rD,
    Ncy: oD,
    ncy: sD,
    ndash: iD,
    nearhk: lD,
    nearr: cD,
    neArr: aD,
    nearrow: uD,
    ne: fD,
    nedot: dD,
    NegativeMediumSpace: hD,
    NegativeThickSpace: pD,
    NegativeThinSpace: mD,
    NegativeVeryThinSpace: gD,
    nequiv: vD,
    nesear: yD,
    nesim: wD,
    NestedGreaterGreater: SD,
    NestedLessLess: ED,
    NewLine: xD,
    nexist: kD,
    nexists: TD,
    Nfr: bD,
    nfr: _D,
    ngE: ND,
    nge: CD,
    ngeq: LD,
    ngeqq: AD,
    ngeqslant: $D,
    nges: qD,
    nGg: RD,
    ngsim: ID,
    nGt: DD,
    ngt: PD,
    ngtr: MD,
    nGtv: OD,
    nharr: UD,
    nhArr: FD,
    nhpar: zD,
    ni: HD,
    nis: BD,
    nisd: jD,
    niv: VD,
    NJcy: WD,
    njcy: GD,
    nlarr: QD,
    nlArr: KD,
    nldr: XD,
    nlE: JD,
    nle: YD,
    nleftarrow: ZD,
    nLeftarrow: eP,
    nleftrightarrow: tP,
    nLeftrightarrow: nP,
    nleq: rP,
    nleqq: oP,
    nleqslant: sP,
    nles: iP,
    nless: lP,
    nLl: cP,
    nlsim: aP,
    nLt: uP,
    nlt: fP,
    nltri: dP,
    nltrie: hP,
    nLtv: pP,
    nmid: mP,
    NoBreak: gP,
    NonBreakingSpace: vP,
    nopf: yP,
    Nopf: wP,
    Not: SP,
    not: EP,
    NotCongruent: xP,
    NotCupCap: kP,
    NotDoubleVerticalBar: TP,
    NotElement: bP,
    NotEqual: _P,
    NotEqualTilde: NP,
    NotExists: CP,
    NotGreater: LP,
    NotGreaterEqual: AP,
    NotGreaterFullEqual: $P,
    NotGreaterGreater: qP,
    NotGreaterLess: RP,
    NotGreaterSlantEqual: IP,
    NotGreaterTilde: DP,
    NotHumpDownHump: PP,
    NotHumpEqual: MP,
    notin: OP,
    notindot: UP,
    notinE: FP,
    notinva: zP,
    notinvb: HP,
    notinvc: BP,
    NotLeftTriangleBar: jP,
    NotLeftTriangle: VP,
    NotLeftTriangleEqual: WP,
    NotLess: GP,
    NotLessEqual: QP,
    NotLessGreater: KP,
    NotLessLess: XP,
    NotLessSlantEqual: JP,
    NotLessTilde: YP,
    NotNestedGreaterGreater: ZP,
    NotNestedLessLess: eM,
    notni: tM,
    notniva: nM,
    notnivb: rM,
    notnivc: oM,
    NotPrecedes: sM,
    NotPrecedesEqual: iM,
    NotPrecedesSlantEqual: lM,
    NotReverseElement: cM,
    NotRightTriangleBar: aM,
    NotRightTriangle: uM,
    NotRightTriangleEqual: fM,
    NotSquareSubset: dM,
    NotSquareSubsetEqual: hM,
    NotSquareSuperset: pM,
    NotSquareSupersetEqual: mM,
    NotSubset: gM,
    NotSubsetEqual: vM,
    NotSucceeds: yM,
    NotSucceedsEqual: wM,
    NotSucceedsSlantEqual: SM,
    NotSucceedsTilde: EM,
    NotSuperset: xM,
    NotSupersetEqual: kM,
    NotTilde: TM,
    NotTildeEqual: bM,
    NotTildeFullEqual: _M,
    NotTildeTilde: NM,
    NotVerticalBar: CM,
    nparallel: LM,
    npar: AM,
    nparsl: $M,
    npart: qM,
    npolint: RM,
    npr: IM,
    nprcue: DM,
    nprec: PM,
    npreceq: MM,
    npre: OM,
    nrarrc: UM,
    nrarr: FM,
    nrArr: zM,
    nrarrw: HM,
    nrightarrow: BM,
    nRightarrow: jM,
    nrtri: VM,
    nrtrie: WM,
    nsc: GM,
    nsccue: QM,
    nsce: KM,
    Nscr: XM,
    nscr: JM,
    nshortmid: YM,
    nshortparallel: ZM,
    nsim: eO,
    nsime: tO,
    nsimeq: nO,
    nsmid: rO,
    nspar: oO,
    nsqsube: sO,
    nsqsupe: iO,
    nsub: lO,
    nsubE: cO,
    nsube: aO,
    nsubset: uO,
    nsubseteq: fO,
    nsubseteqq: dO,
    nsucc: hO,
    nsucceq: pO,
    nsup: mO,
    nsupE: gO,
    nsupe: vO,
    nsupset: yO,
    nsupseteq: wO,
    nsupseteqq: SO,
    ntgl: EO,
    Ntilde: xO,
    ntilde: kO,
    ntlg: TO,
    ntriangleleft: bO,
    ntrianglelefteq: _O,
    ntriangleright: NO,
    ntrianglerighteq: CO,
    Nu: LO,
    nu: AO,
    num: $O,
    numero: qO,
    numsp: RO,
    nvap: IO,
    nvdash: DO,
    nvDash: PO,
    nVdash: MO,
    nVDash: OO,
    nvge: UO,
    nvgt: FO,
    nvHarr: zO,
    nvinfin: HO,
    nvlArr: BO,
    nvle: jO,
    nvlt: VO,
    nvltrie: WO,
    nvrArr: GO,
    nvrtrie: QO,
    nvsim: KO,
    nwarhk: XO,
    nwarr: JO,
    nwArr: YO,
    nwarrow: ZO,
    nwnear: e3,
    Oacute: t3,
    oacute: n3,
    oast: r3,
    Ocirc: o3,
    ocirc: s3,
    ocir: i3,
    Ocy: l3,
    ocy: c3,
    odash: a3,
    Odblac: u3,
    odblac: f3,
    odiv: d3,
    odot: h3,
    odsold: p3,
    OElig: m3,
    oelig: g3,
    ofcir: v3,
    Ofr: y3,
    ofr: w3,
    ogon: S3,
    Ograve: E3,
    ograve: x3,
    ogt: k3,
    ohbar: T3,
    ohm: b3,
    oint: _3,
    olarr: N3,
    olcir: C3,
    olcross: L3,
    oline: A3,
    olt: $3,
    Omacr: q3,
    omacr: R3,
    Omega: I3,
    omega: D3,
    Omicron: P3,
    omicron: M3,
    omid: O3,
    ominus: U3,
    Oopf: F3,
    oopf: z3,
    opar: H3,
    OpenCurlyDoubleQuote: B3,
    OpenCurlyQuote: j3,
    operp: V3,
    oplus: W3,
    orarr: G3,
    Or: Q3,
    or: K3,
    ord: X3,
    order: J3,
    orderof: Y3,
    ordf: Z3,
    ordm: e4,
    origof: t4,
    oror: n4,
    orslope: r4,
    orv: o4,
    oS: s4,
    Oscr: i4,
    oscr: l4,
    Oslash: c4,
    oslash: a4,
    osol: u4,
    Otilde: f4,
    otilde: d4,
    otimesas: h4,
    Otimes: p4,
    otimes: m4,
    Ouml: g4,
    ouml: v4,
    ovbar: y4,
    OverBar: w4,
    OverBrace: S4,
    OverBracket: E4,
    OverParenthesis: x4,
    para: k4,
    parallel: T4,
    par: b4,
    parsim: _4,
    parsl: N4,
    part: C4,
    PartialD: L4,
    Pcy: A4,
    pcy: $4,
    percnt: q4,
    period: R4,
    permil: I4,
    perp: D4,
    pertenk: P4,
    Pfr: M4,
    pfr: O4,
    Phi: U4,
    phi: F4,
    phiv: z4,
    phmmat: H4,
    phone: B4,
    Pi: j4,
    pi: V4,
    pitchfork: W4,
    piv: G4,
    planck: Q4,
    planckh: K4,
    plankv: X4,
    plusacir: J4,
    plusb: Y4,
    pluscir: Z4,
    plus: eU,
    plusdo: tU,
    plusdu: nU,
    pluse: rU,
    PlusMinus: oU,
    plusmn: sU,
    plussim: iU,
    plustwo: lU,
    pm: cU,
    Poincareplane: aU,
    pointint: uU,
    popf: fU,
    Popf: dU,
    pound: hU,
    prap: pU,
    Pr: mU,
    pr: gU,
    prcue: vU,
    precapprox: yU,
    prec: wU,
    preccurlyeq: SU,
    Precedes: EU,
    PrecedesEqual: xU,
    PrecedesSlantEqual: kU,
    PrecedesTilde: TU,
    preceq: bU,
    precnapprox: _U,
    precneqq: NU,
    precnsim: CU,
    pre: LU,
    prE: AU,
    precsim: $U,
    prime: qU,
    Prime: RU,
    primes: IU,
    prnap: DU,
    prnE: PU,
    prnsim: MU,
    prod: OU,
    Product: UU,
    profalar: FU,
    profline: zU,
    profsurf: HU,
    prop: BU,
    Proportional: jU,
    Proportion: VU,
    propto: WU,
    prsim: GU,
    prurel: QU,
    Pscr: KU,
    pscr: XU,
    Psi: JU,
    psi: YU,
    puncsp: ZU,
    Qfr: e5,
    qfr: t5,
    qint: n5,
    qopf: r5,
    Qopf: o5,
    qprime: s5,
    Qscr: i5,
    qscr: l5,
    quaternions: c5,
    quatint: a5,
    quest: u5,
    questeq: f5,
    quot: d5,
    QUOT: h5,
    rAarr: p5,
    race: m5,
    Racute: g5,
    racute: v5,
    radic: y5,
    raemptyv: w5,
    rang: S5,
    Rang: E5,
    rangd: x5,
    range: k5,
    rangle: T5,
    raquo: b5,
    rarrap: _5,
    rarrb: N5,
    rarrbfs: C5,
    rarrc: L5,
    rarr: A5,
    Rarr: $5,
    rArr: q5,
    rarrfs: R5,
    rarrhk: I5,
    rarrlp: D5,
    rarrpl: P5,
    rarrsim: M5,
    Rarrtl: O5,
    rarrtl: U5,
    rarrw: F5,
    ratail: z5,
    rAtail: H5,
    ratio: B5,
    rationals: j5,
    rbarr: V5,
    rBarr: W5,
    RBarr: G5,
    rbbrk: Q5,
    rbrace: K5,
    rbrack: X5,
    rbrke: J5,
    rbrksld: Y5,
    rbrkslu: Z5,
    Rcaron: eF,
    rcaron: tF,
    Rcedil: nF,
    rcedil: rF,
    rceil: oF,
    rcub: sF,
    Rcy: iF,
    rcy: lF,
    rdca: cF,
    rdldhar: aF,
    rdquo: uF,
    rdquor: fF,
    rdsh: dF,
    real: hF,
    realine: pF,
    realpart: mF,
    reals: gF,
    Re: vF,
    rect: yF,
    reg: wF,
    REG: SF,
    ReverseElement: EF,
    ReverseEquilibrium: xF,
    ReverseUpEquilibrium: kF,
    rfisht: TF,
    rfloor: bF,
    rfr: _F,
    Rfr: NF,
    rHar: CF,
    rhard: LF,
    rharu: AF,
    rharul: $F,
    Rho: qF,
    rho: RF,
    rhov: IF,
    RightAngleBracket: DF,
    RightArrowBar: PF,
    rightarrow: MF,
    RightArrow: OF,
    Rightarrow: UF,
    RightArrowLeftArrow: FF,
    rightarrowtail: zF,
    RightCeiling: HF,
    RightDoubleBracket: BF,
    RightDownTeeVector: jF,
    RightDownVectorBar: VF,
    RightDownVector: WF,
    RightFloor: GF,
    rightharpoondown: QF,
    rightharpoonup: KF,
    rightleftarrows: XF,
    rightleftharpoons: JF,
    rightrightarrows: YF,
    rightsquigarrow: ZF,
    RightTeeArrow: ez,
    RightTee: tz,
    RightTeeVector: nz,
    rightthreetimes: rz,
    RightTriangleBar: oz,
    RightTriangle: sz,
    RightTriangleEqual: iz,
    RightUpDownVector: lz,
    RightUpTeeVector: cz,
    RightUpVectorBar: az,
    RightUpVector: uz,
    RightVectorBar: fz,
    RightVector: dz,
    ring: hz,
    risingdotseq: pz,
    rlarr: mz,
    rlhar: gz,
    rlm: vz,
    rmoustache: yz,
    rmoust: wz,
    rnmid: Sz,
    roang: Ez,
    roarr: xz,
    robrk: kz,
    ropar: Tz,
    ropf: bz,
    Ropf: _z,
    roplus: Nz,
    rotimes: Cz,
    RoundImplies: Lz,
    rpar: Az,
    rpargt: $z,
    rppolint: qz,
    rrarr: Rz,
    Rrightarrow: Iz,
    rsaquo: Dz,
    rscr: Pz,
    Rscr: Mz,
    rsh: Oz,
    Rsh: Uz,
    rsqb: Fz,
    rsquo: zz,
    rsquor: Hz,
    rthree: Bz,
    rtimes: jz,
    rtri: Vz,
    rtrie: Wz,
    rtrif: Gz,
    rtriltri: Qz,
    RuleDelayed: Kz,
    ruluhar: Xz,
    rx: Jz,
    Sacute: Yz,
    sacute: Zz,
    sbquo: eH,
    scap: tH,
    Scaron: nH,
    scaron: rH,
    Sc: oH,
    sc: sH,
    sccue: iH,
    sce: lH,
    scE: cH,
    Scedil: aH,
    scedil: uH,
    Scirc: fH,
    scirc: dH,
    scnap: hH,
    scnE: pH,
    scnsim: mH,
    scpolint: gH,
    scsim: vH,
    Scy: yH,
    scy: wH,
    sdotb: SH,
    sdot: EH,
    sdote: xH,
    searhk: kH,
    searr: TH,
    seArr: bH,
    searrow: _H,
    sect: NH,
    semi: CH,
    seswar: LH,
    setminus: AH,
    setmn: $H,
    sext: qH,
    Sfr: RH,
    sfr: IH,
    sfrown: DH,
    sharp: PH,
    SHCHcy: MH,
    shchcy: OH,
    SHcy: UH,
    shcy: FH,
    ShortDownArrow: zH,
    ShortLeftArrow: HH,
    shortmid: BH,
    shortparallel: jH,
    ShortRightArrow: VH,
    ShortUpArrow: WH,
    shy: GH,
    Sigma: QH,
    sigma: KH,
    sigmaf: XH,
    sigmav: JH,
    sim: YH,
    simdot: ZH,
    sime: e8,
    simeq: t8,
    simg: n8,
    simgE: r8,
    siml: o8,
    simlE: s8,
    simne: i8,
    simplus: l8,
    simrarr: c8,
    slarr: a8,
    SmallCircle: u8,
    smallsetminus: f8,
    smashp: d8,
    smeparsl: h8,
    smid: p8,
    smile: m8,
    smt: g8,
    smte: v8,
    smtes: y8,
    SOFTcy: w8,
    softcy: S8,
    solbar: E8,
    solb: x8,
    sol: k8,
    Sopf: T8,
    sopf: b8,
    spades: _8,
    spadesuit: N8,
    spar: C8,
    sqcap: L8,
    sqcaps: A8,
    sqcup: $8,
    sqcups: q8,
    Sqrt: R8,
    sqsub: I8,
    sqsube: D8,
    sqsubset: P8,
    sqsubseteq: M8,
    sqsup: O8,
    sqsupe: U8,
    sqsupset: F8,
    sqsupseteq: z8,
    square: H8,
    Square: B8,
    SquareIntersection: j8,
    SquareSubset: V8,
    SquareSubsetEqual: W8,
    SquareSuperset: G8,
    SquareSupersetEqual: Q8,
    SquareUnion: K8,
    squarf: X8,
    squ: J8,
    squf: Y8,
    srarr: Z8,
    Sscr: eB,
    sscr: tB,
    ssetmn: nB,
    ssmile: rB,
    sstarf: oB,
    Star: sB,
    star: iB,
    starf: lB,
    straightepsilon: cB,
    straightphi: aB,
    strns: uB,
    sub: fB,
    Sub: dB,
    subdot: hB,
    subE: pB,
    sube: mB,
    subedot: gB,
    submult: vB,
    subnE: yB,
    subne: wB,
    subplus: SB,
    subrarr: EB,
    subset: xB,
    Subset: kB,
    subseteq: TB,
    subseteqq: bB,
    SubsetEqual: _B,
    subsetneq: NB,
    subsetneqq: CB,
    subsim: LB,
    subsub: AB,
    subsup: $B,
    succapprox: qB,
    succ: RB,
    succcurlyeq: IB,
    Succeeds: DB,
    SucceedsEqual: PB,
    SucceedsSlantEqual: MB,
    SucceedsTilde: OB,
    succeq: UB,
    succnapprox: FB,
    succneqq: zB,
    succnsim: HB,
    succsim: BB,
    SuchThat: jB,
    sum: VB,
    Sum: WB,
    sung: GB,
    sup1: QB,
    sup2: KB,
    sup3: XB,
    sup: JB,
    Sup: YB,
    supdot: ZB,
    supdsub: ej,
    supE: tj,
    supe: nj,
    supedot: rj,
    Superset: oj,
    SupersetEqual: sj,
    suphsol: ij,
    suphsub: lj,
    suplarr: cj,
    supmult: aj,
    supnE: uj,
    supne: fj,
    supplus: dj,
    supset: hj,
    Supset: pj,
    supseteq: mj,
    supseteqq: gj,
    supsetneq: vj,
    supsetneqq: yj,
    supsim: wj,
    supsub: Sj,
    supsup: Ej,
    swarhk: xj,
    swarr: kj,
    swArr: Tj,
    swarrow: bj,
    swnwar: _j,
    szlig: Nj,
    Tab: Cj,
    target: Lj,
    Tau: Aj,
    tau: $j,
    tbrk: qj,
    Tcaron: Rj,
    tcaron: Ij,
    Tcedil: Dj,
    tcedil: Pj,
    Tcy: Mj,
    tcy: Oj,
    tdot: Uj,
    telrec: Fj,
    Tfr: zj,
    tfr: Hj,
    there4: Bj,
    therefore: jj,
    Therefore: Vj,
    Theta: Wj,
    theta: Gj,
    thetasym: Qj,
    thetav: Kj,
    thickapprox: Xj,
    thicksim: Jj,
    ThickSpace: Yj,
    ThinSpace: Zj,
    thinsp: e6,
    thkap: t6,
    thksim: n6,
    THORN: r6,
    thorn: o6,
    tilde: s6,
    Tilde: i6,
    TildeEqual: l6,
    TildeFullEqual: c6,
    TildeTilde: a6,
    timesbar: u6,
    timesb: f6,
    times: d6,
    timesd: h6,
    tint: p6,
    toea: m6,
    topbot: g6,
    topcir: v6,
    top: y6,
    Topf: w6,
    topf: S6,
    topfork: E6,
    tosa: x6,
    tprime: k6,
    trade: T6,
    TRADE: b6,
    triangle: _6,
    triangledown: N6,
    triangleleft: C6,
    trianglelefteq: L6,
    triangleq: A6,
    triangleright: $6,
    trianglerighteq: q6,
    tridot: R6,
    trie: I6,
    triminus: D6,
    TripleDot: P6,
    triplus: M6,
    trisb: O6,
    tritime: U6,
    trpezium: F6,
    Tscr: z6,
    tscr: H6,
    TScy: B6,
    tscy: j6,
    TSHcy: V6,
    tshcy: W6,
    Tstrok: G6,
    tstrok: Q6,
    twixt: K6,
    twoheadleftarrow: X6,
    twoheadrightarrow: J6,
    Uacute: Y6,
    uacute: Z6,
    uarr: eV,
    Uarr: tV,
    uArr: nV,
    Uarrocir: rV,
    Ubrcy: oV,
    ubrcy: sV,
    Ubreve: iV,
    ubreve: lV,
    Ucirc: cV,
    ucirc: aV,
    Ucy: uV,
    ucy: fV,
    udarr: dV,
    Udblac: hV,
    udblac: pV,
    udhar: mV,
    ufisht: gV,
    Ufr: vV,
    ufr: yV,
    Ugrave: wV,
    ugrave: SV,
    uHar: EV,
    uharl: xV,
    uharr: kV,
    uhblk: TV,
    ulcorn: bV,
    ulcorner: _V,
    ulcrop: NV,
    ultri: CV,
    Umacr: LV,
    umacr: AV,
    uml: $V,
    UnderBar: qV,
    UnderBrace: RV,
    UnderBracket: IV,
    UnderParenthesis: DV,
    Union: PV,
    UnionPlus: MV,
    Uogon: OV,
    uogon: UV,
    Uopf: FV,
    uopf: zV,
    UpArrowBar: HV,
    uparrow: BV,
    UpArrow: jV,
    Uparrow: VV,
    UpArrowDownArrow: WV,
    updownarrow: GV,
    UpDownArrow: QV,
    Updownarrow: KV,
    UpEquilibrium: XV,
    upharpoonleft: JV,
    upharpoonright: YV,
    uplus: ZV,
    UpperLeftArrow: e9,
    UpperRightArrow: t9,
    upsi: n9,
    Upsi: r9,
    upsih: o9,
    Upsilon: s9,
    upsilon: i9,
    UpTeeArrow: l9,
    UpTee: c9,
    upuparrows: a9,
    urcorn: u9,
    urcorner: f9,
    urcrop: d9,
    Uring: h9,
    uring: p9,
    urtri: m9,
    Uscr: g9,
    uscr: v9,
    utdot: y9,
    Utilde: w9,
    utilde: S9,
    utri: E9,
    utrif: x9,
    uuarr: k9,
    Uuml: T9,
    uuml: b9,
    uwangle: _9,
    vangrt: N9,
    varepsilon: C9,
    varkappa: L9,
    varnothing: A9,
    varphi: $9,
    varpi: q9,
    varpropto: R9,
    varr: I9,
    vArr: D9,
    varrho: P9,
    varsigma: M9,
    varsubsetneq: O9,
    varsubsetneqq: U9,
    varsupsetneq: F9,
    varsupsetneqq: z9,
    vartheta: H9,
    vartriangleleft: B9,
    vartriangleright: j9,
    vBar: V9,
    Vbar: W9,
    vBarv: G9,
    Vcy: Q9,
    vcy: K9,
    vdash: X9,
    vDash: J9,
    Vdash: Y9,
    VDash: Z9,
    Vdashl: eW,
    veebar: tW,
    vee: nW,
    Vee: rW,
    veeeq: oW,
    vellip: sW,
    verbar: iW,
    Verbar: lW,
    vert: cW,
    Vert: aW,
    VerticalBar: uW,
    VerticalLine: fW,
    VerticalSeparator: dW,
    VerticalTilde: hW,
    VeryThinSpace: pW,
    Vfr: mW,
    vfr: gW,
    vltri: vW,
    vnsub: yW,
    vnsup: wW,
    Vopf: SW,
    vopf: EW,
    vprop: xW,
    vrtri: kW,
    Vscr: TW,
    vscr: bW,
    vsubnE: _W,
    vsubne: NW,
    vsupnE: CW,
    vsupne: LW,
    Vvdash: AW,
    vzigzag: $W,
    Wcirc: qW,
    wcirc: RW,
    wedbar: IW,
    wedge: DW,
    Wedge: PW,
    wedgeq: MW,
    weierp: OW,
    Wfr: UW,
    wfr: FW,
    Wopf: zW,
    wopf: HW,
    wp: BW,
    wr: jW,
    wreath: VW,
    Wscr: WW,
    wscr: GW,
    xcap: QW,
    xcirc: KW,
    xcup: XW,
    xdtri: JW,
    Xfr: YW,
    xfr: ZW,
    xharr: e7,
    xhArr: t7,
    Xi: n7,
    xi: r7,
    xlarr: o7,
    xlArr: s7,
    xmap: i7,
    xnis: l7,
    xodot: c7,
    Xopf: a7,
    xopf: u7,
    xoplus: f7,
    xotime: d7,
    xrarr: h7,
    xrArr: p7,
    Xscr: m7,
    xscr: g7,
    xsqcup: v7,
    xuplus: y7,
    xutri: w7,
    xvee: S7,
    xwedge: E7,
    Yacute: x7,
    yacute: k7,
    YAcy: T7,
    yacy: b7,
    Ycirc: _7,
    ycirc: N7,
    Ycy: C7,
    ycy: L7,
    yen: A7,
    Yfr: $7,
    yfr: q7,
    YIcy: R7,
    yicy: I7,
    Yopf: D7,
    yopf: P7,
    Yscr: M7,
    yscr: O7,
    YUcy: U7,
    yucy: F7,
    yuml: z7,
    Yuml: H7,
    Zacute: B7,
    zacute: j7,
    Zcaron: V7,
    zcaron: W7,
    Zcy: G7,
    zcy: Q7,
    Zdot: K7,
    zdot: X7,
    zeetrf: J7,
    ZeroWidthSpace: Y7,
    Zeta: Z7,
    zeta: eG,
    zfr: tG,
    Zfr: nG,
    ZHcy: rG,
    zhcy: oG,
    zigrarr: sG,
    zopf: iG,
    Zopf: lG,
    Zscr: cG,
    zscr: aG,
    zwj: uG,
    zwnj: fG,
  },
  dG = 'Á',
  hG = 'á',
  pG = 'Â',
  mG = 'â',
  gG = '´',
  vG = 'Æ',
  yG = 'æ',
  wG = 'À',
  SG = 'à',
  EG = '&',
  xG = '&',
  kG = 'Å',
  TG = 'å',
  bG = 'Ã',
  _G = 'ã',
  NG = 'Ä',
  CG = 'ä',
  LG = '¦',
  AG = 'Ç',
  $G = 'ç',
  qG = '¸',
  RG = '¢',
  IG = '©',
  DG = '©',
  PG = '¤',
  MG = '°',
  OG = '÷',
  UG = 'É',
  FG = 'é',
  zG = 'Ê',
  HG = 'ê',
  BG = 'È',
  jG = 'è',
  VG = 'Ð',
  WG = 'ð',
  GG = 'Ë',
  QG = 'ë',
  KG = '½',
  XG = '¼',
  JG = '¾',
  YG = '>',
  ZG = '>',
  eQ = 'Í',
  tQ = 'í',
  nQ = 'Î',
  rQ = 'î',
  oQ = '¡',
  sQ = 'Ì',
  iQ = 'ì',
  lQ = '¿',
  cQ = 'Ï',
  aQ = 'ï',
  uQ = '«',
  fQ = '<',
  dQ = '<',
  hQ = '¯',
  pQ = 'µ',
  mQ = '·',
  gQ = ' ',
  vQ = '¬',
  yQ = 'Ñ',
  wQ = 'ñ',
  SQ = 'Ó',
  EQ = 'ó',
  xQ = 'Ô',
  kQ = 'ô',
  TQ = 'Ò',
  bQ = 'ò',
  _Q = 'ª',
  NQ = 'º',
  CQ = 'Ø',
  LQ = 'ø',
  AQ = 'Õ',
  $Q = 'õ',
  qQ = 'Ö',
  RQ = 'ö',
  IQ = '¶',
  DQ = '±',
  PQ = '£',
  MQ = '"',
  OQ = '"',
  UQ = '»',
  FQ = '®',
  zQ = '®',
  HQ = '§',
  BQ = '­',
  jQ = '¹',
  VQ = '²',
  WQ = '³',
  GQ = 'ß',
  QQ = 'Þ',
  KQ = 'þ',
  XQ = '×',
  JQ = 'Ú',
  YQ = 'ú',
  ZQ = 'Û',
  eK = 'û',
  tK = 'Ù',
  nK = 'ù',
  rK = '¨',
  oK = 'Ü',
  sK = 'ü',
  iK = 'Ý',
  lK = 'ý',
  cK = '¥',
  aK = 'ÿ',
  uK = {
    Aacute: dG,
    aacute: hG,
    Acirc: pG,
    acirc: mG,
    acute: gG,
    AElig: vG,
    aelig: yG,
    Agrave: wG,
    agrave: SG,
    amp: EG,
    AMP: xG,
    Aring: kG,
    aring: TG,
    Atilde: bG,
    atilde: _G,
    Auml: NG,
    auml: CG,
    brvbar: LG,
    Ccedil: AG,
    ccedil: $G,
    cedil: qG,
    cent: RG,
    copy: IG,
    COPY: DG,
    curren: PG,
    deg: MG,
    divide: OG,
    Eacute: UG,
    eacute: FG,
    Ecirc: zG,
    ecirc: HG,
    Egrave: BG,
    egrave: jG,
    ETH: VG,
    eth: WG,
    Euml: GG,
    euml: QG,
    frac12: KG,
    frac14: XG,
    frac34: JG,
    gt: YG,
    GT: ZG,
    Iacute: eQ,
    iacute: tQ,
    Icirc: nQ,
    icirc: rQ,
    iexcl: oQ,
    Igrave: sQ,
    igrave: iQ,
    iquest: lQ,
    Iuml: cQ,
    iuml: aQ,
    laquo: uQ,
    lt: fQ,
    LT: dQ,
    macr: hQ,
    micro: pQ,
    middot: mQ,
    nbsp: gQ,
    not: vQ,
    Ntilde: yQ,
    ntilde: wQ,
    Oacute: SQ,
    oacute: EQ,
    Ocirc: xQ,
    ocirc: kQ,
    Ograve: TQ,
    ograve: bQ,
    ordf: _Q,
    ordm: NQ,
    Oslash: CQ,
    oslash: LQ,
    Otilde: AQ,
    otilde: $Q,
    Ouml: qQ,
    ouml: RQ,
    para: IQ,
    plusmn: DQ,
    pound: PQ,
    quot: MQ,
    QUOT: OQ,
    raquo: UQ,
    reg: FQ,
    REG: zQ,
    sect: HQ,
    shy: BQ,
    sup1: jQ,
    sup2: VQ,
    sup3: WQ,
    szlig: GQ,
    THORN: QQ,
    thorn: KQ,
    times: XQ,
    Uacute: JQ,
    uacute: YQ,
    Ucirc: ZQ,
    ucirc: eK,
    Ugrave: tK,
    ugrave: nK,
    uml: rK,
    Uuml: oK,
    uuml: sK,
    Yacute: iK,
    yacute: lK,
    yen: cK,
    yuml: aK,
  },
  fK = '&',
  dK = "'",
  hK = '>',
  pK = '<',
  mK = '"',
  Sh = { amp: fK, apos: dK, gt: hK, lt: pK, quot: mK };
var _c = {};
const gK = {
  0: 65533,
  128: 8364,
  130: 8218,
  131: 402,
  132: 8222,
  133: 8230,
  134: 8224,
  135: 8225,
  136: 710,
  137: 8240,
  138: 352,
  139: 8249,
  140: 338,
  142: 381,
  145: 8216,
  146: 8217,
  147: 8220,
  148: 8221,
  149: 8226,
  150: 8211,
  151: 8212,
  152: 732,
  153: 8482,
  154: 353,
  155: 8250,
  156: 339,
  158: 382,
  159: 376,
};
var vK =
  (On && On.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(_c, '__esModule', { value: !0 });
var Qa = vK(gK),
  yK =
    String.fromCodePoint ||
    function (e) {
      var t = '';
      return (
        e > 65535 &&
          ((e -= 65536),
          (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
          (e = 56320 | (e & 1023))),
        (t += String.fromCharCode(e)),
        t
      );
    };
function wK(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111
    ? '�'
    : (e in Qa.default && (e = Qa.default[e]), yK(e));
}
_c.default = wK;
var Hs =
  (On && On.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(wt, '__esModule', { value: !0 });
wt.decodeHTML = wt.decodeHTMLStrict = wt.decodeXML = void 0;
var El = Hs(wh),
  SK = Hs(uK),
  EK = Hs(Sh),
  Ka = Hs(_c),
  xK = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
wt.decodeXML = Eh(EK.default);
wt.decodeHTMLStrict = Eh(El.default);
function Eh(e) {
  var t = xh(e);
  return function (n) {
    return String(n).replace(xK, t);
  };
}
var Xa = function (e, t) {
  return e < t ? 1 : -1;
};
wt.decodeHTML = (function () {
  for (
    var e = Object.keys(SK.default).sort(Xa),
      t = Object.keys(El.default).sort(Xa),
      n = 0,
      r = 0;
    n < t.length;
    n++
  )
    e[r] === t[n] ? ((t[n] += ';?'), r++) : (t[n] += ';');
  var o = new RegExp(
      '&(?:' + t.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
      'g'
    ),
    s = xh(El.default);
  function i(l) {
    return l.substr(-1) !== ';' && (l += ';'), s(l);
  }
  return function (l) {
    return String(l).replace(o, i);
  };
})();
function xh(e) {
  return function (n) {
    if (n.charAt(1) === '#') {
      var r = n.charAt(2);
      return r === 'X' || r === 'x'
        ? Ka.default(parseInt(n.substr(3), 16))
        : Ka.default(parseInt(n.substr(2), 10));
    }
    return e[n.slice(1, -1)] || n;
  };
}
var Pe = {},
  kh =
    (On && On.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(Pe, '__esModule', { value: !0 });
Pe.escapeUTF8 =
  Pe.escape =
  Pe.encodeNonAsciiHTML =
  Pe.encodeHTML =
  Pe.encodeXML =
    void 0;
var kK = kh(Sh),
  Th = _h(kK.default),
  bh = Nh(Th);
Pe.encodeXML = Ah(Th);
var TK = kh(wh),
  Nc = _h(TK.default),
  bK = Nh(Nc);
Pe.encodeHTML = NK(Nc, bK);
Pe.encodeNonAsciiHTML = Ah(Nc);
function _h(e) {
  return Object.keys(e)
    .sort()
    .reduce(function (t, n) {
      return (t[e[n]] = '&' + n + ';'), t;
    }, {});
}
function Nh(e) {
  for (var t = [], n = [], r = 0, o = Object.keys(e); r < o.length; r++) {
    var s = o[r];
    s.length === 1 ? t.push('\\' + s) : n.push(s);
  }
  t.sort();
  for (var i = 0; i < t.length - 1; i++) {
    for (
      var l = i;
      l < t.length - 1 && t[l].charCodeAt(1) + 1 === t[l + 1].charCodeAt(1);

    )
      l += 1;
    var c = 1 + l - i;
    c < 3 || t.splice(i, c, t[i] + '-' + t[l]);
  }
  return n.unshift('[' + t.join('') + ']'), new RegExp(n.join('|'), 'g');
}
var Ch =
    /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  _K =
    String.prototype.codePointAt != null
      ? function (e) {
          return e.codePointAt(0);
        }
      : function (e) {
          return (
            (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536
          );
        };
function Bs(e) {
  return (
    '&#x' +
    (e.length > 1 ? _K(e) : e.charCodeAt(0)).toString(16).toUpperCase() +
    ';'
  );
}
function NK(e, t) {
  return function (n) {
    return n
      .replace(t, function (r) {
        return e[r];
      })
      .replace(Ch, Bs);
  };
}
var Lh = new RegExp(bh.source + '|' + Ch.source, 'g');
function CK(e) {
  return e.replace(Lh, Bs);
}
Pe.escape = CK;
function LK(e) {
  return e.replace(bh, Bs);
}
Pe.escapeUTF8 = LK;
function Ah(e) {
  return function (t) {
    return t.replace(Lh, function (n) {
      return e[n] || Bs(n);
    });
  };
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.decodeXMLStrict =
      e.decodeHTML5Strict =
      e.decodeHTML4Strict =
      e.decodeHTML5 =
      e.decodeHTML4 =
      e.decodeHTMLStrict =
      e.decodeHTML =
      e.decodeXML =
      e.encodeHTML5 =
      e.encodeHTML4 =
      e.escapeUTF8 =
      e.escape =
      e.encodeNonAsciiHTML =
      e.encodeHTML =
      e.encodeXML =
      e.encode =
      e.decodeStrict =
      e.decode =
        void 0);
  var t = wt,
    n = Pe;
  function r(c, a) {
    return (!a || a <= 0 ? t.decodeXML : t.decodeHTML)(c);
  }
  e.decode = r;
  function o(c, a) {
    return (!a || a <= 0 ? t.decodeXML : t.decodeHTMLStrict)(c);
  }
  e.decodeStrict = o;
  function s(c, a) {
    return (!a || a <= 0 ? n.encodeXML : n.encodeHTML)(c);
  }
  e.encode = s;
  var i = Pe;
  Object.defineProperty(e, 'encodeXML', {
    enumerable: !0,
    get: function () {
      return i.encodeXML;
    },
  }),
    Object.defineProperty(e, 'encodeHTML', {
      enumerable: !0,
      get: function () {
        return i.encodeHTML;
      },
    }),
    Object.defineProperty(e, 'encodeNonAsciiHTML', {
      enumerable: !0,
      get: function () {
        return i.encodeNonAsciiHTML;
      },
    }),
    Object.defineProperty(e, 'escape', {
      enumerable: !0,
      get: function () {
        return i.escape;
      },
    }),
    Object.defineProperty(e, 'escapeUTF8', {
      enumerable: !0,
      get: function () {
        return i.escapeUTF8;
      },
    }),
    Object.defineProperty(e, 'encodeHTML4', {
      enumerable: !0,
      get: function () {
        return i.encodeHTML;
      },
    }),
    Object.defineProperty(e, 'encodeHTML5', {
      enumerable: !0,
      get: function () {
        return i.encodeHTML;
      },
    });
  var l = wt;
  Object.defineProperty(e, 'decodeXML', {
    enumerable: !0,
    get: function () {
      return l.decodeXML;
    },
  }),
    Object.defineProperty(e, 'decodeHTML', {
      enumerable: !0,
      get: function () {
        return l.decodeHTML;
      },
    }),
    Object.defineProperty(e, 'decodeHTMLStrict', {
      enumerable: !0,
      get: function () {
        return l.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, 'decodeHTML4', {
      enumerable: !0,
      get: function () {
        return l.decodeHTML;
      },
    }),
    Object.defineProperty(e, 'decodeHTML5', {
      enumerable: !0,
      get: function () {
        return l.decodeHTML;
      },
    }),
    Object.defineProperty(e, 'decodeHTML4Strict', {
      enumerable: !0,
      get: function () {
        return l.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, 'decodeHTML5Strict', {
      enumerable: !0,
      get: function () {
        return l.decodeHTMLStrict;
      },
    }),
    Object.defineProperty(e, 'decodeXMLStrict', {
      enumerable: !0,
      get: function () {
        return l.decodeXML;
      },
    });
})(yh);
function AK(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function Ja(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function $K(e, t, n) {
  return t && Ja(e.prototype, t), n && Ja(e, n), e;
}
function $h(e, t) {
  var n = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator'];
  if (!n) {
    if (
      Array.isArray(e) ||
      (n = qK(e)) ||
      (t && e && typeof e.length == 'number')
    ) {
      n && (e = n);
      var r = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (a) {
          throw a;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var s = !0,
    i = !1,
    l;
  return {
    s: function () {
      n = n.call(e);
    },
    n: function () {
      var a = n.next();
      return (s = a.done), a;
    },
    e: function (a) {
      (i = !0), (l = a);
    },
    f: function () {
      try {
        !s && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    },
  };
}
function qK(e, t) {
  if (e) {
    if (typeof e == 'string') return Ya(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set')
    )
      return Array.from(e);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ya(e, t);
  }
}
function Ya(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
var RK = yh,
  Za = {
    fg: '#FFF',
    bg: '#000',
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: IK(),
  };
function IK() {
  var e = {
    0: '#000',
    1: '#A00',
    2: '#0A0',
    3: '#A50',
    4: '#00A',
    5: '#A0A',
    6: '#0AA',
    7: '#AAA',
    8: '#555',
    9: '#F55',
    10: '#5F5',
    11: '#FF5',
    12: '#55F',
    13: '#F5F',
    14: '#5FF',
    15: '#FFF',
  };
  return (
    Eo(0, 5).forEach(function (t) {
      Eo(0, 5).forEach(function (n) {
        Eo(0, 5).forEach(function (r) {
          return DK(t, n, r, e);
        });
      });
    }),
    Eo(0, 23).forEach(function (t) {
      var n = t + 232,
        r = qh(t * 10 + 8);
      e[n] = '#' + r + r + r;
    }),
    e
  );
}
function DK(e, t, n, r) {
  var o = 16 + e * 36 + t * 6 + n,
    s = e > 0 ? e * 40 + 55 : 0,
    i = t > 0 ? t * 40 + 55 : 0,
    l = n > 0 ? n * 40 + 55 : 0;
  r[o] = PK([s, i, l]);
}
function qh(e) {
  for (var t = e.toString(16); t.length < 2; ) t = '0' + t;
  return t;
}
function PK(e) {
  var t = [],
    n = $h(e),
    r;
  try {
    for (n.s(); !(r = n.n()).done; ) {
      var o = r.value;
      t.push(qh(o));
    }
  } catch (s) {
    n.e(s);
  } finally {
    n.f();
  }
  return '#' + t.join('');
}
function eu(e, t, n, r) {
  var o;
  return (
    t === 'text'
      ? (o = FK(n, r))
      : t === 'display'
      ? (o = OK(e, n, r))
      : t === 'xterm256Foreground'
      ? (o = Wo(e, r.colors[n]))
      : t === 'xterm256Background'
      ? (o = Go(e, r.colors[n]))
      : t === 'rgb' && (o = MK(e, n)),
    o
  );
}
function MK(e, t) {
  t = t.substring(2).slice(0, -1);
  var n = +t.substr(0, 2),
    r = t.substring(5).split(';'),
    o = r
      .map(function (s) {
        return ('0' + Number(s).toString(16)).substr(-2);
      })
      .join('');
  return Vo(e, (n === 38 ? 'color:#' : 'background-color:#') + o);
}
function OK(e, t, n) {
  t = parseInt(t, 10);
  var r = {
      '-1': function () {
        return '<br/>';
      },
      0: function () {
        return e.length && Rh(e);
      },
      1: function () {
        return At(e, 'b');
      },
      3: function () {
        return At(e, 'i');
      },
      4: function () {
        return At(e, 'u');
      },
      8: function () {
        return Vo(e, 'display:none');
      },
      9: function () {
        return At(e, 'strike');
      },
      22: function () {
        return Vo(
          e,
          'font-weight:normal;text-decoration:none;font-style:normal'
        );
      },
      23: function () {
        return nu(e, 'i');
      },
      24: function () {
        return nu(e, 'u');
      },
      39: function () {
        return Wo(e, n.fg);
      },
      49: function () {
        return Go(e, n.bg);
      },
      53: function () {
        return Vo(e, 'text-decoration:overline');
      },
    },
    o;
  return (
    r[t]
      ? (o = r[t]())
      : 4 < t && t < 7
      ? (o = At(e, 'blink'))
      : 29 < t && t < 38
      ? (o = Wo(e, n.colors[t - 30]))
      : 39 < t && t < 48
      ? (o = Go(e, n.colors[t - 40]))
      : 89 < t && t < 98
      ? (o = Wo(e, n.colors[8 + (t - 90)]))
      : 99 < t && t < 108 && (o = Go(e, n.colors[8 + (t - 100)])),
    o
  );
}
function Rh(e) {
  var t = e.slice(0);
  return (
    (e.length = 0),
    t
      .reverse()
      .map(function (n) {
        return '</' + n + '>';
      })
      .join('')
  );
}
function Eo(e, t) {
  for (var n = [], r = e; r <= t; r++) n.push(r);
  return n;
}
function UK(e) {
  return function (t) {
    return (e === null || t.category !== e) && e !== 'all';
  };
}
function tu(e) {
  e = parseInt(e, 10);
  var t = null;
  return (
    e === 0
      ? (t = 'all')
      : e === 1
      ? (t = 'bold')
      : 2 < e && e < 5
      ? (t = 'underline')
      : 4 < e && e < 7
      ? (t = 'blink')
      : e === 8
      ? (t = 'hide')
      : e === 9
      ? (t = 'strike')
      : (29 < e && e < 38) || e === 39 || (89 < e && e < 98)
      ? (t = 'foreground-color')
      : ((39 < e && e < 48) || e === 49 || (99 < e && e < 108)) &&
        (t = 'background-color'),
    t
  );
}
function FK(e, t) {
  return t.escapeXML ? RK.encodeXML(e) : e;
}
function At(e, t, n) {
  return (
    n || (n = ''),
    e.push(t),
    '<'.concat(t).concat(n ? ' style="'.concat(n, '"') : '', '>')
  );
}
function Vo(e, t) {
  return At(e, 'span', t);
}
function Wo(e, t) {
  return At(e, 'span', 'color:' + t);
}
function Go(e, t) {
  return At(e, 'span', 'background-color:' + t);
}
function nu(e, t) {
  var n;
  if ((e.slice(-1)[0] === t && (n = e.pop()), n)) return '</' + t + '>';
}
function zK(e, t, n) {
  var r = !1,
    o = 3;
  function s() {
    return '';
  }
  function i(k, b) {
    return n('xterm256Foreground', b), '';
  }
  function l(k, b) {
    return n('xterm256Background', b), '';
  }
  function c(k) {
    return t.newline ? n('display', -1) : n('text', k), '';
  }
  function a(k, b) {
    (r = !0),
      b.trim().length === 0 && (b = '0'),
      (b = b.trimRight(';').split(';'));
    var x = $h(b),
      N;
    try {
      for (x.s(); !(N = x.n()).done; ) {
        var R = N.value;
        n('display', R);
      }
    } catch (I) {
      x.e(I);
    } finally {
      x.f();
    }
    return '';
  }
  function u(k) {
    return n('text', k), '';
  }
  function h(k) {
    return n('rgb', k), '';
  }
  var d = [
    { pattern: /^\x08+/, sub: s },
    { pattern: /^\x1b\[[012]?K/, sub: s },
    { pattern: /^\x1b\[\(B/, sub: s },
    { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: h },
    { pattern: /^\x1b\[38;5;(\d+)m/, sub: i },
    { pattern: /^\x1b\[48;5;(\d+)m/, sub: l },
    { pattern: /^\n/, sub: c },
    { pattern: /^\r+\n/, sub: c },
    { pattern: /^\r/, sub: c },
    { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: a },
    { pattern: /^\x1b\[\d?J/, sub: s },
    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: s },
    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: s },
    { pattern: /^(([^\x1b\x08\r\n])+)/, sub: u },
  ];
  function v(k, b) {
    (b > o && r) || ((r = !1), (e = e.replace(k.pattern, k.sub)));
  }
  var m = [],
    E = e,
    S = E.length;
  e: for (; S > 0; ) {
    for (var p = 0, f = 0, g = d.length; f < g; p = ++f) {
      var w = d[p];
      if ((v(w, p), e.length !== S)) {
        S = e.length;
        continue e;
      }
    }
    if (e.length === S) break;
    m.push(0), (S = e.length);
  }
  return m;
}
function HK(e, t, n) {
  return (
    t !== 'text' &&
      ((e = e.filter(UK(tu(n)))),
      e.push({ token: t, data: n, category: tu(n) })),
    e
  );
}
var BK = (function () {
    function e(t) {
      AK(this, e),
        (t = t || {}),
        t.colors && (t.colors = Object.assign({}, Za.colors, t.colors)),
        (this.options = Object.assign({}, Za, t)),
        (this.stack = []),
        (this.stickyStack = []);
    }
    return (
      $K(e, [
        {
          key: 'toHtml',
          value: function (n) {
            var r = this;
            n = typeof n == 'string' ? [n] : n;
            var o = this.stack,
              s = this.options,
              i = [];
            return (
              this.stickyStack.forEach(function (l) {
                var c = eu(o, l.token, l.data, s);
                c && i.push(c);
              }),
              zK(n.join(''), s, function (l, c) {
                var a = eu(o, l, c, s);
                a && i.push(a),
                  s.stream && (r.stickyStack = HK(r.stickyStack, l, c));
              }),
              o.length && i.push(Rh(o)),
              i.join('')
            );
          },
        },
      ]),
      e
    );
  })(),
  jK = BK;
const VK = Cu(jK);
const WK = ({ error: e }) => {
  const t = q.useMemo(() => Ih(e), [e]);
  return y('div', {
    className: 'error-message',
    dangerouslySetInnerHTML: { __html: t || '' },
  });
};
function Ih(e) {
  const t = {
    bg: 'var(--vscode-panel-background)',
    fg: 'var(--vscode-foreground)',
  };
  return (t.colors = GK), new VK(t).toHtml(QK(e));
}
const GK = {
  0: '#000',
  1: '#C00',
  2: '#0C0',
  3: '#C50',
  4: '#00C',
  5: '#C0C',
  6: '#0CC',
  7: '#CCC',
  8: '#555',
  9: '#F55',
  10: '#5F5',
  11: '#FF5',
  12: '#55F',
  13: '#F5F',
  14: '#5FF',
  15: '#FFF',
};
function QK(e) {
  return e.replace(
    /[&"<>]/g,
    (t) => ({ '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' }[t])
  );
}
const KK = ({ action: e, sdkLanguage: t }) => {
  var c;
  if (!e) return null;
  const n = e.log,
    r = (c = e.error) == null ? void 0 : c.message,
    o = { ...e.params };
  delete o.info;
  const s = Object.keys(o),
    i = e.wallTime ? new Date(e.wallTime).toLocaleString() : null,
    l = e.endTime ? Un(e.endTime - e.startTime) : 'Timed Out';
  return A('div', {
    className: 'call-tab',
    children: [
      !!r && y(WK, { error: r }),
      !!r && y('div', { className: 'call-section', children: 'Call' }),
      y('div', { className: 'call-line', children: e.apiName }),
      A(an, {
        children: [
          y('div', { className: 'call-section', children: 'Time' }),
          i &&
            A('div', {
              className: 'call-line',
              children: [
                'wall time:',
                y('span', {
                  className: 'call-value datetime',
                  title: i,
                  children: i,
                }),
              ],
            }),
          A('div', {
            className: 'call-line',
            children: [
              'duration:',
              y('span', {
                className: 'call-value datetime',
                title: l,
                children: l,
              }),
            ],
          }),
        ],
      }),
      !!s.length &&
        y('div', { className: 'call-section', children: 'Parameters' }),
      !!s.length && s.map((a, u) => ru(ou(e, a, o[a], t), 'param-' + u)),
      !!e.result &&
        y('div', { className: 'call-section', children: 'Return value' }),
      !!e.result &&
        Object.keys(e.result).map((a, u) =>
          ru(ou(e, a, e.result[a], t), 'result-' + u)
        ),
      y('div', { className: 'call-section', children: 'Log' }),
      n.map((a, u) => y('div', { className: 'call-line', children: a }, u)),
    ],
  });
};
function ru(e, t) {
  let n = e.text.replace(/\n/g, '↵');
  return (
    e.type === 'string' && (n = `"${n}"`),
    A(
      'div',
      {
        className: 'call-line',
        children: [
          e.name,
          ':',
          y('span', {
            className: `call-value ${e.type}`,
            title: e.text,
            children: n,
          }),
          ['string', 'number', 'object', 'locator'].includes(e.type) &&
            y(Qv, { value: e.text }),
        ],
      },
      t
    )
  );
}
function ou(e, t, n, r) {
  const o = e.method.includes('eval') || e.method === 'waitForFunction';
  if (t === 'files') return { text: '<files>', type: 'string', name: t };
  if (
    ((t === 'eventInit' || t === 'expectedValue' || (t === 'arg' && o)) &&
      (n = Es(n.value, new Array(10).fill({ handle: '<handle>' }))),
    ((t === 'value' && o) || (t === 'received' && e.method === 'expect')) &&
      (n = Es(n, new Array(10).fill({ handle: '<handle>' }))),
    t === 'selector')
  )
    return {
      text: cn(r || 'javascript', e.params.selector, !1, !0),
      type: 'locator',
      name: 'locator',
    };
  const s = typeof n;
  return s !== 'object' || n === null
    ? { text: String(n), type: s, name: t }
    : n.guid
    ? { text: '<handle>', type: 'handle', name: t }
    : { text: JSON.stringify(n).slice(0, 1e3), type: 'object', name: t };
}
function Es(e, t) {
  if (e.n !== void 0) return e.n;
  if (e.s !== void 0) return e.s;
  if (e.b !== void 0) return e.b;
  if (e.v !== void 0) {
    if (e.v === 'undefined') return;
    if (e.v === 'null') return null;
    if (e.v === 'NaN') return NaN;
    if (e.v === 'Infinity') return 1 / 0;
    if (e.v === '-Infinity') return -1 / 0;
    if (e.v === '-0') return -0;
  }
  if (e.d !== void 0) return new Date(e.d);
  if (e.r !== void 0) return new RegExp(e.r.p, e.r.f);
  if (e.a !== void 0) return e.a.map((n) => Es(n, t));
  if (e.o !== void 0) {
    const n = {};
    for (const { k: r, v: o } of e.o) n[r] = Es(o, t);
    return n;
  }
  return e.h !== void 0 ? (t === void 0 ? '<object>' : t[e.h]) : '<object>';
}
const XK = ({ action: e }) => {
  const t = q.useMemo(() => {
    if (!e) return [];
    const n = [],
      r = Wn(e);
    for (const o of Gd(e))
      if (!(o.method !== 'console' && o.method !== 'pageError')) {
        if (o.method === 'console') {
          const { guid: s } = o.params.message;
          n.push({ message: r.initializers[s] });
        }
        o.method === 'pageError' && n.push({ error: o.params.error });
      }
    return n;
  }, [e]);
  return y('div', {
    className: 'console-tab',
    children: t.map((n, r) => {
      const { message: o, error: s } = n;
      if (o) {
        const i = o.location.url,
          l = i ? i.substring(i.lastIndexOf('/') + 1) : '<anonymous>';
        return A(
          'div',
          {
            className: 'console-line ' + o.type,
            children: [
              A('span', {
                className: 'console-location',
                children: [l, ':', o.location.lineNumber],
              }),
              y('span', { className: 'codicon codicon-' + JK(o) }),
              y('span', {
                className: 'console-line-message',
                children: o.text,
              }),
            ],
          },
          r
        );
      }
      if (s) {
        const { error: i, value: l } = s;
        return i
          ? A(
              'div',
              {
                className: 'console-line error',
                children: [
                  y('span', { className: 'codicon codicon-error' }),
                  y('span', {
                    className: 'console-line-message',
                    children: i.message,
                  }),
                  y('div', { className: 'console-stack', children: i.stack }),
                ],
              },
              r
            )
          : A(
              'div',
              {
                className: 'console-line error',
                children: [
                  y('span', { className: 'codicon codicon-error' }),
                  y('span', {
                    className: 'console-line-message',
                    children: String(l),
                  }),
                ],
              },
              r
            );
      }
      return null;
    }),
  });
};
function JK(e) {
  switch (e.type) {
    case 'error':
      return 'error';
    case 'warning':
      return 'warning';
  }
  return 'blank';
}
const YK = ({ title: e, children: t, setExpanded: n, expanded: r }) =>
  A('div', {
    className: 'expandable' + (r ? ' expanded' : ''),
    children: [
      A('div', {
        className: 'expandable-title',
        children: [
          y('div', {
            className:
              'codicon codicon-' + (r ? 'chevron-down' : 'chevron-right'),
            style: {
              cursor: 'pointer',
              color: 'var(--vscode-foreground)',
              marginLeft: '5px',
            },
            onClick: () => n(!r),
          }),
          e,
        ],
      }),
      r && y('div', { style: { marginLeft: 25 }, children: t }),
    ],
  });
const ZK = ({ resource: e, index: t, selected: n, setSelected: r }) => {
  const [o, s] = q.useState(!1),
    [i, l] = q.useState(null),
    [c, a] = q.useState(null);
  q.useEffect(() => {
    s(!1), r(-1);
  }, [e, r]),
    q.useEffect(() => {
      (async () => {
        if (e.request.postData)
          if (e.request.postData._sha1) {
            const p = await (
              await fetch(`sha1/${e.request.postData._sha1}`)
            ).text();
            l(p);
          } else l(e.request.postData.text);
        if (e.response.content._sha1) {
          const S = e.response.content.mimeType.includes('image'),
            p = await fetch(`sha1/${e.response.content._sha1}`);
          if (S) {
            const f = await p.blob(),
              g = new FileReader(),
              w = new Promise((k) => (g.onload = k));
            g.readAsDataURL(f), a({ dataUrl: (await w).target.result });
          } else a({ text: await p.text() });
        }
      })();
    }, [o, e]);
  const {
      routeStatus: u,
      requestContentType: h,
      resourceName: d,
      contentType: v,
    } = q.useMemo(() => {
      const E = tX(e),
        S = e.request.headers.find((k) => k.name === 'Content-Type'),
        p = S ? S.value : '',
        f = e.request.url.substring(e.request.url.lastIndexOf('/'));
      let g = e.response.content.mimeType;
      const w = g.match(/^(.*);\s*charset=.*$/);
      return (
        w && (g = w[1]),
        {
          routeStatus: E,
          requestContentType: p,
          resourceName: f,
          contentType: g,
        }
      );
    }, [e]),
    m = q.useCallback(
      () =>
        A('div', {
          className: 'network-request-title',
          children: [
            u &&
              y('div', {
                className: `network-request-title-status status-route ${u}`,
                children: u,
              }),
            e.response._failureText &&
              y('div', {
                className: 'network-request-title-status status-failure',
                children: e.response._failureText,
              }),
            !e.response._failureText &&
              y('div', {
                className:
                  'network-request-title-status ' + eX(e.response.status),
                children: e.response.status,
              }),
            y('div', {
              className: 'network-request-title-status',
              children: e.request.method,
            }),
            y('div', { className: 'network-request-title-url', children: d }),
            y('div', {
              className: 'network-request-title-content-type',
              children: v,
            }),
          ],
        }),
      [v, e, d, u]
    );
  return y('div', {
    className: 'network-request ' + (n ? 'selected' : ''),
    onClick: () => r(t),
    children: y(YK, {
      expanded: o,
      setExpanded: s,
      title: m(),
      children: A('div', {
        className: 'network-request-details',
        children: [
          A('div', {
            className: 'network-request-details-time',
            children: [e.time, 'ms'],
          }),
          y('div', {
            className: 'network-request-details-header',
            children: 'URL',
          }),
          y('div', {
            className: 'network-request-details-url',
            children: e.request.url,
          }),
          y('div', {
            className: 'network-request-details-header',
            children: 'Request Headers',
          }),
          y('div', {
            className: 'network-request-headers',
            children: e.request.headers.map((E) => `${E.name}: ${E.value}`)
              .join(`
`),
          }),
          y('div', {
            className: 'network-request-details-header',
            children: 'Response Headers',
          }),
          y('div', {
            className: 'network-request-headers',
            children: e.response.headers.map((E) => `${E.name}: ${E.value}`)
              .join(`
`),
          }),
          e.request.postData
            ? y('div', {
                className: 'network-request-details-header',
                children: 'Request Body',
              })
            : '',
          e.request.postData
            ? y('div', {
                className: 'network-request-body',
                children: su(i, h),
              })
            : '',
          y('div', {
            className: 'network-request-details-header',
            children: 'Response Body',
          }),
          e.response.content._sha1
            ? ''
            : y('div', {
                className: 'network-request-response-body',
                children: 'Response body is not available for this request.',
              }),
          c !== null && c.dataUrl ? y('img', { src: c.dataUrl }) : '',
          c !== null && c.text
            ? y('div', {
                className: 'network-request-response-body',
                children: su(c.text, e.response.content.mimeType),
              })
            : '',
        ],
      }),
    }),
  });
};
function eX(e) {
  return e >= 200 && e < 400
    ? 'status-success'
    : e >= 400
    ? 'status-failure'
    : '';
}
function su(e, t) {
  if (e === null) return 'Loading...';
  const n = e;
  if (n === '') return '<Empty>';
  if (t.includes('application/json'))
    try {
      return JSON.stringify(JSON.parse(n), null, 2);
    } catch {
      return n;
    }
  return t.includes('application/x-www-form-urlencoded')
    ? decodeURIComponent(n)
    : n;
}
function tX(e) {
  return e._wasAborted
    ? 'aborted'
    : e._wasContinued
    ? 'continued'
    : e._wasFulfilled
    ? 'fulfilled'
    : e._apiRequest
    ? 'api'
    : '';
}
const nX = ({ action: e }) => {
  const [t, n] = q.useState(0),
    r = e ? Qd(e) : [];
  return y('div', {
    className: 'network-tab',
    children: r.map((o, s) =>
      y(ZK, { resource: o, index: s, selected: t === s, setSelected: n }, s)
    ),
  });
};
const rX = 'modulepreload',
  oX = function (e, t) {
    return new URL(e, t).href;
  },
  iu = {},
  sX = function (t, n, r) {
    if (!n || n.length === 0) return t();
    const o = document.getElementsByTagName('link');
    return Promise.all(
      n.map((s) => {
        if (((s = oX(s, r)), s in iu)) return;
        iu[s] = !0;
        const i = s.endsWith('.css'),
          l = i ? '[rel="stylesheet"]' : '';
        if (!!r)
          for (let u = o.length - 1; u >= 0; u--) {
            const h = o[u];
            if (h.href === s && (!i || h.rel === 'stylesheet')) return;
          }
        else if (document.querySelector(`link[href="${s}"]${l}`)) return;
        const a = document.createElement('link');
        if (
          ((a.rel = i ? 'stylesheet' : rX),
          i || ((a.as = 'script'), (a.crossOrigin = '')),
          (a.href = s),
          document.head.appendChild(a),
          i)
        )
          return new Promise((u, h) => {
            a.addEventListener('load', u),
              a.addEventListener('error', () =>
                h(new Error(`Unable to preload CSS for ${s}`))
              );
          });
      })
    ).then(() => t());
  };
const Dh = ({
  text: e,
  language: t,
  readOnly: n,
  highlight: r,
  revealLine: o,
  lineNumbers: s,
  focusOnChange: i,
  wrapLines: l,
  onChange: c,
}) => {
  const [a, u] = bs(),
    [h] = q.useState(
      sX(
        () => import('./codeMirrorModule-aea9c42f.js'),
        ['./codeMirrorModule-aea9c42f.js', '../codeMirrorModule.5d0f417c.css'],
        import.meta.url
      ).then((E) => E.default)
    ),
    d = q.useRef(null),
    [v, m] = q.useState();
  return (
    q.useEffect(() => {
      (async () => {
        var g, w;
        const E = await h,
          S = u.current;
        if (!S) return;
        let p = 'javascript';
        if (
          (t === 'python' && (p = 'python'),
          t === 'java' && (p = 'text/x-java'),
          t === 'csharp' && (p = 'text/x-csharp'),
          d.current &&
            p === d.current.cm.getOption('mode') &&
            !!n === d.current.cm.getOption('readOnly') &&
            s === d.current.cm.getOption('lineNumbers') &&
            l === d.current.cm.getOption('lineWrapping'))
        )
          return;
        (w = (g = d.current) == null ? void 0 : g.cm) == null ||
          w.getWrapperElement().remove();
        const f = E(S, {
          value: '',
          mode: p,
          readOnly: !!n,
          lineNumbers: s,
          lineWrapping: l,
        });
        return (d.current = { cm: f }), m(f), f;
      })();
    }, [h, v, u, t, s, l, n]),
    q.useEffect(() => {
      d.current && d.current.cm.setSize(a.width, a.height);
    }, [a]),
    q.useLayoutEffect(() => {
      var p;
      if (!v) return;
      let E = !1;
      if (
        (v.getValue() !== e &&
          (v.setValue(e),
          (E = !0),
          i && (v.execCommand('selectAll'), v.focus())),
        E || JSON.stringify(r) !== JSON.stringify(d.current.highlight))
      ) {
        for (const g of d.current.highlight || [])
          v.removeLineClass(g.line - 1, 'wrap');
        for (const g of r || [])
          v.addLineClass(g.line - 1, 'wrap', `source-line-${g.type}`);
        for (const g of d.current.widgets || []) v.removeLineWidget(g);
        const f = [];
        for (const g of r || []) {
          if (g.type !== 'error') continue;
          const w = (p = d.current) == null ? void 0 : p.cm.getLine(g.line - 1);
          if (w) {
            const b = document.createElement('div');
            (b.className = 'source-line-error-underline'),
              (b.innerHTML = '&nbsp;'.repeat(w.length || 1)),
              f.push(
                v.addLineWidget(g.line, b, { above: !0, coverGutter: !1 })
              );
          }
          const k = document.createElement('div');
          (k.innerHTML = Ih(g.message || '')),
            (k.className = 'source-line-error-widget'),
            f.push(v.addLineWidget(g.line, k, { above: !0, coverGutter: !1 }));
        }
        (d.current.highlight = r), (d.current.widgets = f);
      }
      typeof o == 'number' &&
        d.current.cm.lineCount() >= o &&
        v.scrollIntoView({ line: Math.max(0, o - 1), ch: 0 }, 50);
      let S;
      return (
        c && ((S = () => c(v.getValue())), v.on('change', S)),
        () => {
          S && v.off('change', S);
        }
      );
    }, [v, e, r, o, i, c]),
    y('div', { className: 'cm-wrapper', ref: u })
  );
};
const xl = ({ noShadow: e, children: t, noMinHeight: n }) =>
    y('div', {
      className:
        'toolbar' + (e ? ' no-shadow' : '') + (n ? ' no-min-height' : ''),
      children: t,
    }),
  lu = {
    queryAll(e, t) {
      t.startsWith('/') && (t = '.' + t);
      const n = [],
        r = e.ownerDocument || e;
      if (!r) return n;
      const o = r.evaluate(t, e, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE);
      for (let s = o.iterateNext(); s; s = o.iterateNext())
        s.nodeType === Node.ELEMENT_NODE && n.push(s);
      return n;
    },
  };
function Ph(e, t) {
  for (; t; ) {
    if (e.contains(t)) return !0;
    t = Oh(t);
  }
  return !1;
}
function ct(e) {
  if (e.parentElement) return e.parentElement;
  if (e.parentNode && e.parentNode.nodeType === 11 && e.parentNode.host)
    return e.parentNode.host;
}
function Mh(e) {
  let t = e;
  for (; t.parentNode; ) t = t.parentNode;
  if (t.nodeType === 11 || t.nodeType === 9) return t;
}
function Oh(e) {
  for (; e.parentElement; ) e = e.parentElement;
  return ct(e);
}
function xo(e, t) {
  for (; e; ) {
    const n = e.closest(t);
    if (n) return n;
    e = Oh(e);
  }
}
function Mn(e, t) {
  return e.ownerDocument && e.ownerDocument.defaultView
    ? e.ownerDocument.defaultView.getComputedStyle(e, t)
    : void 0;
}
function Uh(e, t) {
  if (((t = t ?? Mn(e)), !t)) return !0;
  if (Element.prototype.checkVisibility) {
    if (!e.checkVisibility({ checkOpacity: !1, checkVisibilityCSS: !1 }))
      return !1;
  } else {
    const n = e.closest('details,summary');
    if (n !== e && (n == null ? void 0 : n.nodeName) === 'DETAILS' && !n.open)
      return !1;
  }
  return t.visibility === 'visible';
}
function xs(e) {
  const t = Mn(e);
  if (!t) return !0;
  if (t.display === 'contents') {
    for (let r = e.firstChild; r; r = r.nextSibling)
      if ((r.nodeType === 1 && xs(r)) || (r.nodeType === 3 && iX(r))) return !0;
    return !1;
  }
  if (!Uh(e, t)) return !1;
  const n = e.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function iX(e) {
  const t = e.ownerDocument.createRange();
  t.selectNode(e);
  const n = t.getBoundingClientRect();
  return n.width > 0 && n.height > 0;
}
function Fh(e, t) {
  for (const n of t.jsonPath) e != null && (e = e[n]);
  return zh(e, t);
}
function zh(e, t) {
  const n = typeof e == 'string' && !t.caseSensitive ? e.toUpperCase() : e,
    r =
      typeof t.value == 'string' && !t.caseSensitive
        ? t.value.toUpperCase()
        : t.value;
  return t.op === '<truthy>'
    ? !!n
    : t.op === '='
    ? r instanceof RegExp
      ? typeof n == 'string' && !!n.match(r)
      : n === r
    : typeof n != 'string' || typeof r != 'string'
    ? !1
    : t.op === '*='
    ? n.includes(r)
    : t.op === '^='
    ? n.startsWith(r)
    : t.op === '$='
    ? n.endsWith(r)
    : t.op === '|='
    ? n === r || n.startsWith(r + '-')
    : t.op === '~='
    ? n.split(' ').includes(r)
    : !1;
}
function Cc(e) {
  const t = e.ownerDocument;
  return (
    e.nodeName === 'SCRIPT' ||
    e.nodeName === 'NOSCRIPT' ||
    e.nodeName === 'STYLE' ||
    (t.head && t.head.contains(e))
  );
}
function Me(e, t) {
  let n = e.get(t);
  if (n === void 0) {
    if (((n = { full: '', immediate: [] }), !Cc(t))) {
      let r = '';
      if (
        t instanceof HTMLInputElement &&
        (t.type === 'submit' || t.type === 'button')
      )
        n = { full: t.value, immediate: [t.value] };
      else {
        for (let o = t.firstChild; o; o = o.nextSibling)
          o.nodeType === Node.TEXT_NODE
            ? ((n.full += o.nodeValue || ''), (r += o.nodeValue || ''))
            : (r && n.immediate.push(r),
              (r = ''),
              o.nodeType === Node.ELEMENT_NODE && (n.full += Me(e, o).full));
        r && n.immediate.push(r),
          t.shadowRoot && (n.full += Me(e, t.shadowRoot).full);
      }
    }
    e.set(t, n);
  }
  return n;
}
function js(e, t, n) {
  if (Cc(t) || !n(Me(e, t))) return 'none';
  for (let r = t.firstChild; r; r = r.nextSibling)
    if (r.nodeType === Node.ELEMENT_NODE && n(Me(e, r)))
      return 'selfAndChildren';
  return t.shadowRoot && n(Me(e, t.shadowRoot)) ? 'selfAndChildren' : 'self';
}
function cu(e) {
  return e.displayName || e.name || 'Anonymous';
}
function lX(e) {
  if (e.type)
    switch (typeof e.type) {
      case 'function':
        return cu(e.type);
      case 'string':
        return e.type;
      case 'object':
        return e.type.displayName || (e.type.render ? cu(e.type.render) : '');
    }
  if (e._currentElement) {
    const t = e._currentElement.type;
    if (typeof t == 'string') return t;
    if (typeof t == 'function') return t.displayName || t.name || 'Anonymous';
  }
  return '';
}
function cX(e) {
  var t;
  return e.key ?? ((t = e._currentElement) == null ? void 0 : t.key);
}
function aX(e) {
  if (e.child) {
    const n = [];
    for (let r = e.child; r; r = r.sibling) n.push(r);
    return n;
  }
  if (!e._currentElement) return [];
  const t = (n) => {
    var o;
    const r = (o = n._currentElement) == null ? void 0 : o.type;
    return typeof r == 'function' || typeof r == 'string';
  };
  if (e._renderedComponent) {
    const n = e._renderedComponent;
    return t(n) ? [n] : [];
  }
  return e._renderedChildren
    ? [...Object.values(e._renderedChildren)].filter(t)
    : [];
}
function uX(e) {
  var r;
  const t =
    e.memoizedProps || ((r = e._currentElement) == null ? void 0 : r.props);
  if (!t || typeof t == 'string') return t;
  const n = { ...t };
  return delete n.children, n;
}
function Hh(e) {
  var r;
  const t = {
      key: cX(e),
      name: lX(e),
      children: aX(e).map(Hh),
      rootElements: [],
      props: uX(e),
    },
    n =
      e.stateNode ||
      e._hostNode ||
      ((r = e._renderedComponent) == null ? void 0 : r._hostNode);
  if (n instanceof Element) t.rootElements.push(n);
  else for (const o of t.children) t.rootElements.push(...o.rootElements);
  return t;
}
function Bh(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) Bh(r, t, n);
  return n;
}
function jh(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
  do {
    const o = r.currentNode,
      s = o,
      i = Object.keys(s).find(
        (c) => c.startsWith('__reactContainer') && s[c] !== null
      );
    if (i) t.push(s[i].stateNode.current);
    else {
      const c = '_reactRootContainer';
      s.hasOwnProperty(c) &&
        s[c] !== null &&
        t.push(s[c]._internalRoot.current);
    }
    if (o instanceof Element && o.hasAttribute('data-reactroot'))
      for (const c of Object.keys(o))
        (c.startsWith('__reactInternalInstance') ||
          c.startsWith('__reactFiber')) &&
          t.push(o[c]);
    const l = o instanceof Element ? o.shadowRoot : null;
    l && jh(l, t);
  } while (r.nextNode());
  return t;
}
const fX = {
  queryAll(e, t) {
    const { name: n, attributes: r } = tn(t, !1),
      i = jh(e.ownerDocument || e)
        .map((c) => Hh(c))
        .map((c) =>
          Bh(c, (a) => {
            const u = a.props ?? {};
            if (
              (a.key !== void 0 && (u.key = a.key),
              (n && a.name !== n) || a.rootElements.some((h) => !Ph(e, h)))
            )
              return !1;
            for (const h of r) if (!Fh(u, h)) return !1;
            return !0;
          })
        )
        .flat(),
      l = new Set();
    for (const c of i) for (const a of c.rootElements) l.add(a);
    return [...l];
  },
};
function Vh(e, t) {
  const n = e.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/');
  let r = n.substring(n.lastIndexOf('/') + 1);
  return t && r.endsWith(t) && (r = r.substring(0, r.length - t.length)), r;
}
function dX(e, t) {
  return t ? t.toUpperCase() : '';
}
const hX = /(?:^|[-_/])(\w)/g,
  Wh = (e) => e && e.replace(hX, dX);
function pX(e) {
  function t(u) {
    const h = u.name || u._componentTag || u.__playwright_guessedName;
    if (h) return h;
    const d = u.__file;
    if (d) return Wh(Vh(d, '.vue'));
  }
  function n(u, h) {
    return (u.type.__playwright_guessedName = h), h;
  }
  function r(u) {
    var d, v, m, E;
    const h = t(u.type || {});
    if (h) return h;
    if (u.root === u) return 'Root';
    for (const S in (v = (d = u.parent) == null ? void 0 : d.type) == null
      ? void 0
      : v.components)
      if (((m = u.parent) == null ? void 0 : m.type.components[S]) === u.type)
        return n(u, S);
    for (const S in (E = u.appContext) == null ? void 0 : E.components)
      if (u.appContext.components[S] === u.type) return n(u, S);
    return 'Anonymous Component';
  }
  function o(u) {
    return u._isBeingDestroyed || u.isUnmounted;
  }
  function s(u) {
    return u.subTree.type.toString() === 'Symbol(Fragment)';
  }
  function i(u) {
    const h = [];
    return (
      u.component && h.push(u.component),
      u.suspense && h.push(...i(u.suspense.activeBranch)),
      Array.isArray(u.children) &&
        u.children.forEach((d) => {
          d.component ? h.push(d.component) : h.push(...i(d));
        }),
      h.filter((d) => {
        var v;
        return !o(d) && !((v = d.type.devtools) != null && v.hide);
      })
    );
  }
  function l(u) {
    return s(u) ? c(u.subTree) : [u.subTree.el];
  }
  function c(u) {
    if (!u.children) return [];
    const h = [];
    for (let d = 0, v = u.children.length; d < v; d++) {
      const m = u.children[d];
      m.component ? h.push(...l(m.component)) : m.el && h.push(m.el);
    }
    return h;
  }
  function a(u) {
    return {
      name: r(u),
      children: i(u.subTree).map(a),
      rootElements: l(u),
      props: u.props,
    };
  }
  return a(e);
}
function mX(e) {
  function t(s) {
    const i = s.displayName || s.name || s._componentTag;
    if (i) return i;
    const l = s.__file;
    if (l) return Wh(Vh(l, '.vue'));
  }
  function n(s) {
    const i = t(s.$options || s.fnOptions || {});
    return i || (s.$root === s ? 'Root' : 'Anonymous Component');
  }
  function r(s) {
    return s.$children
      ? s.$children
      : Array.isArray(s.subTree.children)
      ? s.subTree.children.filter((i) => !!i.component).map((i) => i.component)
      : [];
  }
  function o(s) {
    return {
      name: n(s),
      children: r(s).map(o),
      rootElements: [s.$el],
      props: s._props,
    };
  }
  return o(e);
}
function Gh(e, t, n = []) {
  t(e) && n.push(e);
  for (const r of e.children) Gh(r, t, n);
  return n;
}
function Qh(e, t = []) {
  const r = (e.ownerDocument || e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT),
    o = new Set();
  do {
    const s = r.currentNode;
    s.__vue__ && o.add(s.__vue__.$root),
      s.__vue_app__ &&
        s._vnode &&
        s._vnode.component &&
        t.push({ root: s._vnode.component, version: 3 });
    const i = s instanceof Element ? s.shadowRoot : null;
    i && Qh(i, t);
  } while (r.nextNode());
  for (const s of o) t.push({ version: 2, root: s });
  return t;
}
const gX = {
  queryAll(e, t) {
    const n = e.ownerDocument || e,
      { name: r, attributes: o } = tn(t, !1),
      l = Qh(n)
        .map((a) => (a.version === 3 ? pX(a.root) : mX(a.root)))
        .map((a) =>
          Gh(a, (u) => {
            if ((r && u.name !== r) || u.rootElements.some((h) => !Ph(e, h)))
              return !1;
            for (const h of o) if (!Fh(u.props, h)) return !1;
            return !0;
          })
        )
        .flat(),
      c = new Set();
    for (const a of l) for (const u of a.rootElements) c.add(u);
    return [...c];
  },
};
function au(e) {
  return e.hasAttribute('aria-label') || e.hasAttribute('aria-labelledby');
}
const uu =
    'article:not([role]), aside:not([role]), main:not([role]), nav:not([role]), section:not([role]), [role=article], [role=complementary], [role=main], [role=navigation], [role=region]',
  vX = [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-disabled',
    'aria-dropeffect',
    'aria-errormessage',
    'aria-flowto',
    'aria-grabbed',
    'aria-haspopup',
    'aria-hidden',
    'aria-invalid',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ];
function Kh(e) {
  return vX.some((t) => e.hasAttribute(t));
}
const Si = {
    A: (e) => (e.hasAttribute('href') ? 'link' : null),
    AREA: (e) => (e.hasAttribute('href') ? 'link' : null),
    ARTICLE: () => 'article',
    ASIDE: () => 'complementary',
    BLOCKQUOTE: () => 'blockquote',
    BUTTON: () => 'button',
    CAPTION: () => 'caption',
    CODE: () => 'code',
    DATALIST: () => 'listbox',
    DD: () => 'definition',
    DEL: () => 'deletion',
    DETAILS: () => 'group',
    DFN: () => 'term',
    DIALOG: () => 'dialog',
    DT: () => 'term',
    EM: () => 'emphasis',
    FIELDSET: () => 'group',
    FIGURE: () => 'figure',
    FOOTER: (e) => (xo(e, uu) ? null : 'contentinfo'),
    FORM: (e) => (au(e) ? 'form' : null),
    H1: () => 'heading',
    H2: () => 'heading',
    H3: () => 'heading',
    H4: () => 'heading',
    H5: () => 'heading',
    H6: () => 'heading',
    HEADER: (e) => (xo(e, uu) ? null : 'banner'),
    HR: () => 'separator',
    HTML: () => 'document',
    IMG: (e) =>
      e.getAttribute('alt') === '' &&
      !Kh(e) &&
      Number.isNaN(Number(String(e.getAttribute('tabindex'))))
        ? 'presentation'
        : 'img',
    INPUT: (e) => {
      const t = e.type.toLowerCase();
      if (t === 'search')
        return e.hasAttribute('list') ? 'combobox' : 'searchbox';
      if (['email', 'tel', 'text', 'url', ''].includes(t)) {
        const n = Vs(e, e.getAttribute('list'))[0];
        return n && n.tagName === 'DATALIST' ? 'combobox' : 'textbox';
      }
      return t === 'hidden'
        ? ''
        : {
            button: 'button',
            checkbox: 'checkbox',
            image: 'button',
            number: 'spinbutton',
            radio: 'radio',
            range: 'slider',
            reset: 'button',
            submit: 'button',
          }[t] || 'textbox';
    },
    INS: () => 'insertion',
    LI: () => 'listitem',
    MAIN: () => 'main',
    MARK: () => 'mark',
    MATH: () => 'math',
    MENU: () => 'list',
    METER: () => 'meter',
    NAV: () => 'navigation',
    OL: () => 'list',
    OPTGROUP: () => 'group',
    OPTION: () => 'option',
    OUTPUT: () => 'status',
    P: () => 'paragraph',
    PROGRESS: () => 'progressbar',
    SECTION: (e) => (au(e) ? 'region' : null),
    SELECT: (e) =>
      e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox',
    STRONG: () => 'strong',
    SUB: () => 'subscript',
    SUP: () => 'superscript',
    SVG: () => 'img',
    TABLE: () => 'table',
    TBODY: () => 'rowgroup',
    TD: (e) => {
      const t = xo(e, 'table'),
        n = t ? ks(t) : '';
      return n === 'grid' || n === 'treegrid' ? 'gridcell' : 'cell';
    },
    TEXTAREA: () => 'textbox',
    TFOOT: () => 'rowgroup',
    TH: (e) => {
      if (e.getAttribute('scope') === 'col') return 'columnheader';
      if (e.getAttribute('scope') === 'row') return 'rowheader';
      const t = xo(e, 'table'),
        n = t ? ks(t) : '';
      return n === 'grid' || n === 'treegrid' ? 'gridcell' : 'cell';
    },
    THEAD: () => 'rowgroup',
    TIME: () => 'time',
    TR: () => 'row',
    UL: () => 'list',
  },
  yX = {
    DD: ['DL', 'DIV'],
    DIV: ['DL'],
    DT: ['DL', 'DIV'],
    LI: ['OL', 'UL'],
    TBODY: ['TABLE'],
    TD: ['TR'],
    TFOOT: ['TABLE'],
    TH: ['TR'],
    THEAD: ['TABLE'],
    TR: ['THEAD', 'TBODY', 'TFOOT', 'TABLE'],
  };
function fu(e) {
  var r;
  const t =
    ((r = Si[e.tagName.toUpperCase()]) == null ? void 0 : r.call(Si, e)) || '';
  if (!t) return null;
  let n = e;
  for (; n; ) {
    const o = ct(n),
      s = yX[n.tagName];
    if (!s || !o || !s.includes(o.tagName)) break;
    const i = ks(o);
    if ((i === 'none' || i === 'presentation') && !Xh(o)) return i;
    n = o;
  }
  return t;
}
const wX = [
    'alert',
    'alertdialog',
    'application',
    'article',
    'banner',
    'blockquote',
    'button',
    'caption',
    'cell',
    'checkbox',
    'code',
    'columnheader',
    'combobox',
    'command',
    'complementary',
    'composite',
    'contentinfo',
    'definition',
    'deletion',
    'dialog',
    'directory',
    'document',
    'emphasis',
    'feed',
    'figure',
    'form',
    'generic',
    'grid',
    'gridcell',
    'group',
    'heading',
    'img',
    'input',
    'insertion',
    'landmark',
    'link',
    'list',
    'listbox',
    'listitem',
    'log',
    'main',
    'marquee',
    'math',
    'meter',
    'menu',
    'menubar',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'navigation',
    'none',
    'note',
    'option',
    'paragraph',
    'presentation',
    'progressbar',
    'radio',
    'radiogroup',
    'range',
    'region',
    'roletype',
    'row',
    'rowgroup',
    'rowheader',
    'scrollbar',
    'search',
    'searchbox',
    'section',
    'sectionhead',
    'select',
    'separator',
    'slider',
    'spinbutton',
    'status',
    'strong',
    'structure',
    'subscript',
    'superscript',
    'switch',
    'tab',
    'table',
    'tablist',
    'tabpanel',
    'term',
    'textbox',
    'time',
    'timer',
    'toolbar',
    'tooltip',
    'tree',
    'treegrid',
    'treeitem',
    'widget',
    'window',
  ],
  SX = [
    'command',
    'composite',
    'input',
    'landmark',
    'range',
    'roletype',
    'section',
    'sectionhead',
    'select',
    'structure',
    'widget',
    'window',
  ],
  EX = wX.filter((e) => !SX.includes(e));
function ks(e) {
  return (
    (e.getAttribute('role') || '')
      .split(' ')
      .map((n) => n.trim())
      .find((n) => EX.includes(n)) || null
  );
}
function Xh(e) {
  return !Kh(e);
}
function Ie(e) {
  const t = ks(e);
  return !t || ((t === 'none' || t === 'presentation') && Xh(e)) ? fu(e) : t;
}
function Jh(e) {
  return e === null ? void 0 : e.toLowerCase() === 'true';
}
function Yh(e, t) {
  if (['STYLE', 'SCRIPT', 'NOSCRIPT', 'TEMPLATE'].includes(e.tagName))
    return !0;
  const n = e.nodeName === 'OPTION' && !!e.closest('select'),
    r = e.nodeName === 'SLOT';
  return !n && !r && !Uh(e) ? !0 : Zh(e, t);
}
function Zh(e, t) {
  if (!t.has(e)) {
    let n = !1;
    if (
      (e.parentElement &&
        e.parentElement.shadowRoot &&
        !e.assignedSlot &&
        (n = !0),
      !n)
    ) {
      const r = Mn(e);
      n =
        !r || r.display === 'none' || Jh(e.getAttribute('aria-hidden')) === !0;
    }
    if (!n) {
      const r = ct(e);
      r && (n = Zh(r, t));
    }
    t.set(e, n);
  }
  return t.get(e);
}
function Vs(e, t) {
  if (!t) return [];
  const n = Mh(e);
  if (!n) return [];
  try {
    const r = t.split(' ').filter((s) => !!s),
      o = new Set();
    for (const s of r) {
      const i = n.querySelector('#' + CSS.escape(s));
      i && o.add(i);
    }
    return [...o];
  } catch {
    return [];
  }
}
function xX(e) {
  return e
    .replace(
      /\r\n/g,
      `
`
    )
    .replace(/\u00A0/g, ' ')
    .replace(/\s\s+/g, ' ')
    .trim();
}
function du(e, t) {
  const n = [...e.querySelectorAll(t)];
  for (const r of Vs(e, e.getAttribute('aria-owns')))
    r.matches(t) && n.push(r), n.push(...r.querySelectorAll(t));
  return n;
}
function hu(e) {
  if (!e) return '';
  const t = e.getPropertyValue('content');
  if (
    (t[0] === "'" && t[t.length - 1] === "'") ||
    (t[0] === '"' && t[t.length - 1] === '"')
  ) {
    const n = t.substring(1, t.length - 1);
    return (e.getPropertyValue('display') || 'inline') !== 'inline'
      ? ' ' + n + ' '
      : n;
  }
  return '';
}
function ep(e) {
  const t = e.getAttribute('aria-labelledby');
  return t === null ? null : Vs(e, t);
}
function kX(e, t) {
  const n = [
      'button',
      'cell',
      'checkbox',
      'columnheader',
      'gridcell',
      'heading',
      'link',
      'menuitem',
      'menuitemcheckbox',
      'menuitemradio',
      'option',
      'radio',
      'row',
      'rowheader',
      'switch',
      'tab',
      'tooltip',
      'treeitem',
    ].includes(e),
    r =
      t &&
      [
        '',
        'caption',
        'code',
        'contentinfo',
        'definition',
        'deletion',
        'emphasis',
        'insertion',
        'list',
        'listitem',
        'mark',
        'none',
        'paragraph',
        'presentation',
        'region',
        'row',
        'rowgroup',
        'section',
        'strong',
        'subscript',
        'superscript',
        'table',
        'term',
        'time',
      ].includes(e);
  return n || r;
}
function Ws(e, t, n) {
  return [
    'caption',
    'code',
    'definition',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'mark',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'suggestion',
    'superscript',
    'term',
    'time',
  ].includes(Ie(e) || '')
    ? ''
    : xX(
        Je(e, {
          includeHidden: t,
          hiddenCache: n,
          visitedElements: new Set(),
          embeddedInLabelledBy: 'none',
          embeddedInLabel: 'none',
          embeddedInTextAlternativeElement: !1,
          embeddedInTargetElement: 'self',
        })
      );
}
function Je(e, t) {
  if (t.visitedElements.has(e)) return '';
  const n = {
    ...t,
    embeddedInLabel:
      t.embeddedInLabel === 'self' ? 'descendant' : t.embeddedInLabel,
    embeddedInLabelledBy:
      t.embeddedInLabelledBy === 'self' ? 'descendant' : t.embeddedInLabelledBy,
    embeddedInTargetElement:
      t.embeddedInTargetElement === 'self'
        ? 'descendant'
        : t.embeddedInTargetElement,
  };
  if (
    !t.includeHidden &&
    t.embeddedInLabelledBy !== 'self' &&
    Yh(e, t.hiddenCache)
  )
    return t.visitedElements.add(e), '';
  const r = ep(e);
  if (t.embeddedInLabelledBy === 'none') {
    const i = (r || [])
      .map((l) =>
        Je(l, {
          ...t,
          embeddedInLabelledBy: 'self',
          embeddedInTargetElement: 'none',
          embeddedInLabel: 'none',
          embeddedInTextAlternativeElement: !1,
        })
      )
      .join(' ');
    if (i) return i;
  }
  const o = Ie(e) || '';
  if (t.embeddedInLabel !== 'none' || t.embeddedInLabelledBy !== 'none') {
    const i = [...(e.labels || [])].includes(e),
      l = (r || []).includes(e);
    if (!i && !l) {
      if (o === 'textbox')
        return (
          t.visitedElements.add(e),
          e.tagName === 'INPUT' || e.tagName === 'TEXTAREA'
            ? e.value
            : e.textContent || ''
        );
      if (['combobox', 'listbox'].includes(o)) {
        t.visitedElements.add(e);
        let c;
        if (e.tagName === 'SELECT')
          (c = [...e.selectedOptions]),
            !c.length && e.options.length && c.push(e.options[0]);
        else {
          const a =
            o === 'combobox' ? du(e, '*').find((u) => Ie(u) === 'listbox') : e;
          c = a
            ? du(a, '[aria-selected="true"]').filter((u) => Ie(u) === 'option')
            : [];
        }
        return c.map((a) => Je(a, n)).join(' ');
      }
      if (
        ['progressbar', 'scrollbar', 'slider', 'spinbutton', 'meter'].includes(
          o
        )
      )
        return (
          t.visitedElements.add(e),
          e.hasAttribute('aria-valuetext')
            ? e.getAttribute('aria-valuetext') || ''
            : e.hasAttribute('aria-valuenow')
            ? e.getAttribute('aria-valuenow') || ''
            : e.getAttribute('value') || ''
        );
      if (['menu'].includes(o)) return t.visitedElements.add(e), '';
    }
  }
  const s = e.getAttribute('aria-label') || '';
  if (s.trim()) return t.visitedElements.add(e), s;
  if (!['presentation', 'none'].includes(o)) {
    if (
      e.tagName === 'INPUT' &&
      ['button', 'submit', 'reset'].includes(e.type)
    ) {
      t.visitedElements.add(e);
      const i = e.value || '';
      return i.trim()
        ? i
        : e.type === 'submit'
        ? 'Submit'
        : e.type === 'reset'
        ? 'Reset'
        : e.getAttribute('title') || '';
    }
    if (e.tagName === 'INPUT' && e.type === 'image') {
      t.visitedElements.add(e);
      const i = e.labels || [];
      if (i.length && t.embeddedInLabelledBy === 'none')
        return [...i]
          .map((a) =>
            Je(a, {
              ...t,
              embeddedInLabel: 'self',
              embeddedInTextAlternativeElement: !1,
              embeddedInLabelledBy: 'none',
              embeddedInTargetElement: 'none',
            })
          )
          .filter((a) => !!a)
          .join(' ');
      const l = e.getAttribute('alt') || '';
      if (l.trim()) return l;
      const c = e.getAttribute('title') || '';
      return c.trim() ? c : 'Submit';
    }
    if (!r && e.tagName === 'BUTTON') {
      t.visitedElements.add(e);
      const i = e.labels || [];
      if (i.length)
        return [...i]
          .map((l) =>
            Je(l, {
              ...t,
              embeddedInLabel: 'self',
              embeddedInTextAlternativeElement: !1,
              embeddedInLabelledBy: 'none',
              embeddedInTargetElement: 'none',
            })
          )
          .filter((l) => !!l)
          .join(' ');
    }
    if (
      !r &&
      (e.tagName === 'TEXTAREA' ||
        e.tagName === 'SELECT' ||
        e.tagName === 'INPUT')
    ) {
      t.visitedElements.add(e);
      const i = e.labels || [];
      if (i.length)
        return [...i]
          .map((u) =>
            Je(u, {
              ...t,
              embeddedInLabel: 'self',
              embeddedInTextAlternativeElement: !1,
              embeddedInLabelledBy: 'none',
              embeddedInTargetElement: 'none',
            })
          )
          .filter((u) => !!u)
          .join(' ');
      const l =
          (e.tagName === 'INPUT' &&
            ['text', 'password', 'search', 'tel', 'email', 'url'].includes(
              e.type
            )) ||
          e.tagName === 'TEXTAREA',
        c = e.getAttribute('placeholder') || '',
        a = e.getAttribute('title') || '';
      return !l || a ? a : c;
    }
    if (!r && e.tagName === 'FIELDSET') {
      t.visitedElements.add(e);
      for (let l = e.firstElementChild; l; l = l.nextElementSibling)
        if (l.tagName === 'LEGEND')
          return Je(l, { ...n, embeddedInTextAlternativeElement: !0 });
      return e.getAttribute('title') || '';
    }
    if (!r && e.tagName === 'FIGURE') {
      t.visitedElements.add(e);
      for (let l = e.firstElementChild; l; l = l.nextElementSibling)
        if (l.tagName === 'FIGCAPTION')
          return Je(l, { ...n, embeddedInTextAlternativeElement: !0 });
      return e.getAttribute('title') || '';
    }
    if (e.tagName === 'IMG') {
      t.visitedElements.add(e);
      const i = e.getAttribute('alt') || '';
      return i.trim() ? i : e.getAttribute('title') || '';
    }
    if (e.tagName === 'TABLE') {
      t.visitedElements.add(e);
      for (let l = e.firstElementChild; l; l = l.nextElementSibling)
        if (l.tagName === 'CAPTION')
          return Je(l, { ...n, embeddedInTextAlternativeElement: !0 });
      const i = e.getAttribute('summary') || '';
      if (i) return i;
    }
    if (e.tagName === 'AREA') {
      t.visitedElements.add(e);
      const i = e.getAttribute('alt') || '';
      return i.trim() ? i : e.getAttribute('title') || '';
    }
    if (e.tagName.toUpperCase() === 'SVG' || e.ownerSVGElement) {
      t.visitedElements.add(e);
      for (let i = e.firstElementChild; i; i = i.nextElementSibling)
        if (i.tagName.toUpperCase() === 'TITLE' && i.ownerSVGElement)
          return Je(i, { ...n, embeddedInLabelledBy: 'self' });
    }
    if (e.ownerSVGElement && e.tagName.toUpperCase() === 'A') {
      const i = e.getAttribute('xlink:title') || '';
      if (i.trim()) return t.visitedElements.add(e), i;
    }
  }
  if (
    kX(o, t.embeddedInTargetElement === 'descendant') ||
    t.embeddedInLabelledBy !== 'none' ||
    t.embeddedInLabel !== 'none' ||
    t.embeddedInTextAlternativeElement
  ) {
    t.visitedElements.add(e);
    const i = [],
      l = (u, h) => {
        var d;
        if (!(h && u.assignedSlot))
          if (u.nodeType === 1) {
            const v =
              ((d = Mn(u)) == null ? void 0 : d.getPropertyValue('display')) ||
              'inline';
            let m = Je(u, n);
            (v !== 'inline' || u.nodeName === 'BR') && (m = ' ' + m + ' '),
              i.push(m);
          } else u.nodeType === 3 && i.push(u.textContent || '');
      };
    i.push(hu(Mn(e, '::before')));
    const c = e.nodeName === 'SLOT' ? e.assignedNodes() : [];
    if (c.length) for (const u of c) l(u, !1);
    else {
      for (let u = e.firstChild; u; u = u.nextSibling) l(u, !0);
      if (e.shadowRoot)
        for (let u = e.shadowRoot.firstChild; u; u = u.nextSibling) l(u, !0);
      for (const u of Vs(e, e.getAttribute('aria-owns'))) l(u, !0);
    }
    i.push(hu(Mn(e, '::after')));
    const a = i.join('');
    if (a.trim()) return a;
  }
  if (!['presentation', 'none'].includes(o) || e.tagName === 'IFRAME') {
    t.visitedElements.add(e);
    const i = e.getAttribute('title') || '';
    if (i.trim()) return i;
  }
  return t.visitedElements.add(e), '';
}
const tp = [
  'gridcell',
  'option',
  'row',
  'tab',
  'rowheader',
  'columnheader',
  'treeitem',
];
function TX(e) {
  return e.tagName === 'OPTION'
    ? e.selected
    : tp.includes(Ie(e) || '')
    ? Jh(e.getAttribute('aria-selected')) === !0
    : !1;
}
const np = [
  'checkbox',
  'menuitemcheckbox',
  'option',
  'radio',
  'switch',
  'menuitemradio',
  'treeitem',
];
function bX(e) {
  const t = rp(e, !0);
  return t === 'error' ? !1 : t;
}
function rp(e, t) {
  if (t && e.tagName === 'INPUT' && e.indeterminate) return 'mixed';
  if (e.tagName === 'INPUT' && ['checkbox', 'radio'].includes(e.type))
    return e.checked;
  if (np.includes(Ie(e) || '')) {
    const n = e.getAttribute('aria-checked');
    return n === 'true' ? !0 : t && n === 'mixed' ? 'mixed' : !1;
  }
  return 'error';
}
const op = ['button'];
function _X(e) {
  if (op.includes(Ie(e) || '')) {
    const t = e.getAttribute('aria-pressed');
    if (t === 'true') return !0;
    if (t === 'mixed') return 'mixed';
  }
  return !1;
}
const sp = [
  'application',
  'button',
  'checkbox',
  'combobox',
  'gridcell',
  'link',
  'listbox',
  'menuitem',
  'row',
  'rowheader',
  'tab',
  'treeitem',
  'columnheader',
  'menuitemcheckbox',
  'menuitemradio',
  'rowheader',
  'switch',
];
function NX(e) {
  if (e.tagName === 'DETAILS') return e.open;
  if (sp.includes(Ie(e) || '')) {
    const t = e.getAttribute('aria-expanded');
    return t === null ? 'none' : t === 'true';
  }
  return 'none';
}
const ip = ['heading', 'listitem', 'row', 'treeitem'];
function CX(e) {
  const t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 }[e.tagName];
  if (t) return t;
  if (ip.includes(Ie(e) || '')) {
    const n = e.getAttribute('aria-level'),
      r = n === null ? Number.NaN : Number(n);
    if (Number.isInteger(r) && r >= 1) return r;
  }
  return 0;
}
const LX = [
  'application',
  'button',
  'composite',
  'gridcell',
  'group',
  'input',
  'link',
  'menuitem',
  'scrollbar',
  'separator',
  'tab',
  'checkbox',
  'columnheader',
  'combobox',
  'grid',
  'listbox',
  'menu',
  'menubar',
  'menuitemcheckbox',
  'menuitemradio',
  'option',
  'radio',
  'radiogroup',
  'row',
  'rowheader',
  'searchbox',
  'select',
  'slider',
  'spinbutton',
  'switch',
  'tablist',
  'textbox',
  'toolbar',
  'tree',
  'treegrid',
  'treeitem',
];
function lp(e) {
  return [
    'BUTTON',
    'INPUT',
    'SELECT',
    'TEXTAREA',
    'OPTION',
    'OPTGROUP',
  ].includes(e.tagName) &&
    (e.hasAttribute('disabled') || cp(e))
    ? !0
    : ap(e);
}
function cp(e) {
  return e
    ? e.tagName === 'FIELDSET' && e.hasAttribute('disabled')
      ? !0
      : cp(e.parentElement)
    : !1;
}
function ap(e) {
  if (!e) return !1;
  if (LX.includes(Ie(e) || '')) {
    const t = (e.getAttribute('aria-disabled') || '').toLowerCase();
    if (t === 'true') return !0;
    if (t === 'false') return !1;
  }
  return ap(ct(e));
}
const up = [
  'selected',
  'checked',
  'pressed',
  'expanded',
  'level',
  'disabled',
  'name',
  'include-hidden',
];
up.sort();
function ar(e, t, n) {
  if (!t.includes(n))
    throw new Error(
      `"${e}" attribute is only supported for roles: ${t
        .slice()
        .sort()
        .map((r) => `"${r}"`)
        .join(', ')}`
    );
}
function hn(e, t) {
  if (e.op !== '<truthy>' && !t.includes(e.value))
    throw new Error(
      `"${e.name}" must be one of ${t.map((n) => JSON.stringify(n)).join(', ')}`
    );
}
function pn(e, t) {
  if (!t.includes(e.op))
    throw new Error(`"${e.name}" does not support "${e.op}" matcher`);
}
function AX(e, t) {
  const n = { role: t };
  for (const r of e)
    switch (r.name) {
      case 'checked': {
        ar(r.name, np, t),
          hn(r, [!0, !1, 'mixed']),
          pn(r, ['<truthy>', '=']),
          (n.checked = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'pressed': {
        ar(r.name, op, t),
          hn(r, [!0, !1, 'mixed']),
          pn(r, ['<truthy>', '=']),
          (n.pressed = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'selected': {
        ar(r.name, tp, t),
          hn(r, [!0, !1]),
          pn(r, ['<truthy>', '=']),
          (n.selected = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'expanded': {
        ar(r.name, sp, t),
          hn(r, [!0, !1]),
          pn(r, ['<truthy>', '=']),
          (n.expanded = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'level': {
        if (
          (ar(r.name, ip, t),
          typeof r.value == 'string' && (r.value = +r.value),
          r.op !== '=' || typeof r.value != 'number' || Number.isNaN(r.value))
        )
          throw new Error('"level" attribute must be compared to a number');
        n.level = r.value;
        break;
      }
      case 'disabled': {
        hn(r, [!0, !1]),
          pn(r, ['<truthy>', '=']),
          (n.disabled = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      case 'name': {
        if (r.op === '<truthy>')
          throw new Error('"name" attribute must have a value');
        if (typeof r.value != 'string' && !(r.value instanceof RegExp))
          throw new Error(
            '"name" attribute must be a string or a regular expression'
          );
        (n.name = r.value), (n.nameOp = r.op), (n.exact = r.caseSensitive);
        break;
      }
      case 'include-hidden': {
        hn(r, [!0, !1]),
          pn(r, ['<truthy>', '=']),
          (n.includeHidden = r.op === '<truthy>' ? !0 : r.value);
        break;
      }
      default:
        throw new Error(
          `Unknown attribute "${r.name}", must be one of ${up
            .map((o) => `"${o}"`)
            .join(', ')}.`
        );
    }
  return n;
}
function $X(e, t, n) {
  const r = new Map(),
    o = [],
    s = (l) => {
      if (
        Ie(l) === t.role &&
        !(t.selected !== void 0 && TX(l) !== t.selected) &&
        !(t.checked !== void 0 && bX(l) !== t.checked) &&
        !(t.pressed !== void 0 && _X(l) !== t.pressed) &&
        !(t.expanded !== void 0 && NX(l) !== t.expanded) &&
        !(t.level !== void 0 && CX(l) !== t.level) &&
        !(t.disabled !== void 0 && lp(l) !== t.disabled) &&
        !(!t.includeHidden && Yh(l, r))
      ) {
        if (t.name !== void 0) {
          const c = Ae(Ws(l, !!t.includeHidden, r));
          if (
            (typeof t.name == 'string' && (t.name = Ae(t.name)),
            n && !t.exact && t.nameOp === '=' && (t.nameOp = '*='),
            !zh(c, {
              name: '',
              jsonPath: [],
              op: t.nameOp || '=',
              value: t.name,
              caseSensitive: !!t.exact,
            }))
          )
            return;
        }
        o.push(l);
      }
    },
    i = (l) => {
      const c = [];
      l.shadowRoot && c.push(l.shadowRoot);
      for (const a of l.querySelectorAll('*'))
        s(a), a.shadowRoot && c.push(a.shadowRoot);
      c.forEach(i);
    };
  return i(e), o;
}
function pu(e) {
  return {
    queryAll: (t, n) => {
      const r = tn(n, !0),
        o = r.name.toLowerCase();
      if (!o) throw new Error('Role must not be empty');
      const s = AX(r.attributes, o);
      return $X(t, s, e);
    },
  };
}
function qX(e, t, n) {
  const r = e.left - t.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function RX(e, t, n) {
  const r = t.left - e.right;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(t.bottom - e.bottom, 0) + Math.max(e.top - t.top, 0);
}
function IX(e, t, n) {
  const r = t.top - e.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function DX(e, t, n) {
  const r = e.top - t.bottom;
  if (!(r < 0 || (n !== void 0 && r > n)))
    return r + Math.max(e.left - t.left, 0) + Math.max(t.right - e.right, 0);
}
function PX(e, t, n) {
  const r = n === void 0 ? 50 : n;
  let o = 0;
  return (
    e.left - t.right >= 0 && (o += e.left - t.right),
    t.left - e.right >= 0 && (o += t.left - e.right),
    t.top - e.bottom >= 0 && (o += t.top - e.bottom),
    e.top - t.bottom >= 0 && (o += e.top - t.bottom),
    o > r ? void 0 : o
  );
}
const MX = ['left-of', 'right-of', 'above', 'below', 'near'];
function fp(e, t, n, r) {
  const o = t.getBoundingClientRect(),
    s = { 'left-of': RX, 'right-of': qX, above: IX, below: DX, near: PX }[e];
  let i;
  for (const l of n) {
    if (l === t) continue;
    const c = s(o, l.getBoundingClientRect(), r);
    c !== void 0 && (i === void 0 || c < i) && (i = c);
  }
  return i;
}
class OX {
  constructor(t) {
    (this._engines = new Map()),
      (this._cacheQueryCSS = new Map()),
      (this._cacheMatches = new Map()),
      (this._cacheQuery = new Map()),
      (this._cacheMatchesSimple = new Map()),
      (this._cacheMatchesParents = new Map()),
      (this._cacheCallMatches = new Map()),
      (this._cacheCallQuery = new Map()),
      (this._cacheQuerySimple = new Map()),
      (this._cacheText = new Map()),
      (this._retainCacheCounter = 0);
    for (const [o, s] of t) this._engines.set(o, s);
    this._engines.set('not', zX),
      this._engines.set('is', gr),
      this._engines.set('where', gr),
      this._engines.set('has', UX),
      this._engines.set('scope', FX),
      this._engines.set('light', HX),
      this._engines.set('visible', BX),
      this._engines.set('text', jX),
      this._engines.set('text-is', VX),
      this._engines.set('text-matches', WX),
      this._engines.set('has-text', GX),
      this._engines.set('right-of', ur('right-of')),
      this._engines.set('left-of', ur('left-of')),
      this._engines.set('above', ur('above')),
      this._engines.set('below', ur('below')),
      this._engines.set('near', ur('near')),
      this._engines.set('nth-match', QX);
    const n = [...this._engines.keys()];
    n.sort();
    const r = [...mh];
    if ((r.sort(), n.join('|') !== r.join('|')))
      throw new Error(
        `Please keep customCSSNames in sync with evaluator engines: ${n.join(
          '|'
        )} vs ${r.join('|')}`
      );
  }
  begin() {
    ++this._retainCacheCounter;
  }
  end() {
    --this._retainCacheCounter,
      this._retainCacheCounter ||
        (this._cacheQueryCSS.clear(),
        this._cacheMatches.clear(),
        this._cacheQuery.clear(),
        this._cacheMatchesSimple.clear(),
        this._cacheMatchesParents.clear(),
        this._cacheCallMatches.clear(),
        this._cacheCallQuery.clear(),
        this._cacheQuerySimple.clear(),
        this._cacheText.clear());
  }
  _cached(t, n, r, o) {
    t.has(n) || t.set(n, []);
    const s = t.get(n),
      i = s.find((c) => r.every((a, u) => c.rest[u] === a));
    if (i) return i.result;
    const l = o();
    return s.push({ rest: r, result: l }), l;
  }
  _checkSelector(t) {
    if (
      !(
        typeof t == 'object' &&
        t &&
        (Array.isArray(t) || ('simples' in t && t.simples.length))
      )
    )
      throw new Error(`Malformed selector "${t}"`);
    return t;
  }
  matches(t, n, r) {
    const o = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheMatches,
        t,
        [o, r.scope, r.pierceShadow],
        () =>
          Array.isArray(o)
            ? this._matchesEngine(gr, t, o, r)
            : this._matchesSimple(
                t,
                o.simples[o.simples.length - 1].selector,
                r
              )
            ? this._matchesParents(t, o, o.simples.length - 2, r)
            : !1
      );
    } finally {
      this.end();
    }
  }
  query(t, n) {
    const r = this._checkSelector(n);
    this.begin();
    try {
      return this._cached(
        this._cacheQuery,
        r,
        [t.scope, t.pierceShadow],
        () => {
          if (Array.isArray(r)) return this._queryEngine(gr, t, r);
          const o = this._scoreMap;
          this._scoreMap = new Map();
          let s = this._querySimple(
            t,
            r.simples[r.simples.length - 1].selector
          );
          return (
            (s = s.filter((i) =>
              this._matchesParents(i, r, r.simples.length - 2, t)
            )),
            this._scoreMap.size &&
              s.sort((i, l) => {
                const c = this._scoreMap.get(i),
                  a = this._scoreMap.get(l);
                return c === a
                  ? 0
                  : c === void 0
                  ? 1
                  : a === void 0
                  ? -1
                  : c - a;
              }),
            (this._scoreMap = o),
            s
          );
        }
      );
    } finally {
      this.end();
    }
  }
  _markScore(t, n) {
    this._scoreMap && this._scoreMap.set(t, n);
  }
  _matchesSimple(t, n, r) {
    return this._cached(
      this._cacheMatchesSimple,
      t,
      [n, r.scope, r.pierceShadow],
      () => {
        if (
          (!n.functions.some((s) => s.name === 'scope' || s.name === 'is') &&
            t === r.scope) ||
          (n.css && !this._matchesCSS(t, n.css))
        )
          return !1;
        for (const s of n.functions)
          if (!this._matchesEngine(this._getEngine(s.name), t, s.args, r))
            return !1;
        return !0;
      }
    );
  }
  _querySimple(t, n) {
    return n.functions.length
      ? this._cached(
          this._cacheQuerySimple,
          n,
          [t.scope, t.pierceShadow],
          () => {
            let r = n.css;
            const o = n.functions;
            r === '*' && o.length && (r = void 0);
            let s,
              i = -1;
            r !== void 0
              ? ((s = this._queryCSS(t, r)),
                o.some((c) => c.name === 'scope') &&
                  t.scope.nodeType === 1 &&
                  this._matchesCSS(t.scope, r) &&
                  s.unshift(t.scope))
              : ((i = o.findIndex(
                  (l) => this._getEngine(l.name).query !== void 0
                )),
                i === -1 && (i = 0),
                (s = this._queryEngine(
                  this._getEngine(o[i].name),
                  t,
                  o[i].args
                )));
            for (let l = 0; l < o.length; l++) {
              if (l === i) continue;
              const c = this._getEngine(o[l].name);
              c.matches !== void 0 &&
                (s = s.filter((a) => this._matchesEngine(c, a, o[l].args, t)));
            }
            for (let l = 0; l < o.length; l++) {
              if (l === i) continue;
              const c = this._getEngine(o[l].name);
              c.matches === void 0 &&
                (s = s.filter((a) => this._matchesEngine(c, a, o[l].args, t)));
            }
            return s;
          }
        )
      : this._queryCSS(t, n.css || '*');
  }
  _matchesParents(t, n, r, o) {
    return r < 0
      ? !0
      : this._cached(
          this._cacheMatchesParents,
          t,
          [n, r, o.scope, o.pierceShadow],
          () => {
            const { selector: s, combinator: i } = n.simples[r];
            if (i === '>') {
              const l = ko(t, o);
              return !l || !this._matchesSimple(l, s, o)
                ? !1
                : this._matchesParents(l, n, r - 1, o);
            }
            if (i === '+') {
              const l = Ei(t, o);
              return !l || !this._matchesSimple(l, s, o)
                ? !1
                : this._matchesParents(l, n, r - 1, o);
            }
            if (i === '') {
              let l = ko(t, o);
              for (; l; ) {
                if (this._matchesSimple(l, s, o)) {
                  if (this._matchesParents(l, n, r - 1, o)) return !0;
                  if (n.simples[r - 1].combinator === '') break;
                }
                l = ko(l, o);
              }
              return !1;
            }
            if (i === '~') {
              let l = Ei(t, o);
              for (; l; ) {
                if (this._matchesSimple(l, s, o)) {
                  if (this._matchesParents(l, n, r - 1, o)) return !0;
                  if (n.simples[r - 1].combinator === '~') break;
                }
                l = Ei(l, o);
              }
              return !1;
            }
            if (i === '>=') {
              let l = t;
              for (; l; ) {
                if (this._matchesSimple(l, s, o)) {
                  if (this._matchesParents(l, n, r - 1, o)) return !0;
                  if (n.simples[r - 1].combinator === '') break;
                }
                l = ko(l, o);
              }
              return !1;
            }
            throw new Error(`Unsupported combinator "${i}"`);
          }
        );
  }
  _matchesEngine(t, n, r, o) {
    if (t.matches) return this._callMatches(t, n, r, o);
    if (t.query) return this._callQuery(t, r, o).includes(n);
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _queryEngine(t, n, r) {
    if (t.query) return this._callQuery(t, r, n);
    if (t.matches)
      return this._queryCSS(n, '*').filter((o) =>
        this._callMatches(t, o, r, n)
      );
    throw new Error('Selector engine should implement "matches" or "query"');
  }
  _callMatches(t, n, r, o) {
    return this._cached(
      this._cacheCallMatches,
      n,
      [t, o.scope, o.pierceShadow, ...r],
      () => t.matches(n, r, o, this)
    );
  }
  _callQuery(t, n, r) {
    return this._cached(
      this._cacheCallQuery,
      t,
      [r.scope, r.pierceShadow, ...n],
      () => t.query(r, n, this)
    );
  }
  _matchesCSS(t, n) {
    return t.matches(n);
  }
  _queryCSS(t, n) {
    return this._cached(
      this._cacheQueryCSS,
      n,
      [t.scope, t.pierceShadow],
      () => {
        let r = [];
        function o(s) {
          if (((r = r.concat([...s.querySelectorAll(n)])), !!t.pierceShadow)) {
            s.shadowRoot && o(s.shadowRoot);
            for (const i of s.querySelectorAll('*'))
              i.shadowRoot && o(i.shadowRoot);
          }
        }
        return o(t.scope), r;
      }
    );
  }
  _getEngine(t) {
    const n = this._engines.get(t);
    if (!n) throw new Error(`Unknown selector engine "${t}"`);
    return n;
  }
}
const gr = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      return t.some((o) => r.matches(e, o, n));
    },
    query(e, t, n) {
      if (t.length === 0)
        throw new Error('"is" engine expects non-empty selector list');
      let r = [];
      for (const o of t) r = r.concat(n.query(e, o));
      return t.length === 1 ? r : dp(r);
    },
  },
  UX = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"has" engine expects non-empty selector list');
      return r.query({ ...n, scope: e }, t).length > 0;
    },
  },
  FX = {
    matches(e, t, n, r) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      return n.scope.nodeType === 9
        ? e === n.scope.documentElement
        : e === n.scope;
    },
    query(e, t, n) {
      if (t.length !== 0)
        throw new Error('"scope" engine expects no arguments');
      if (e.scope.nodeType === 9) {
        const r = e.scope.documentElement;
        return r ? [r] : [];
      }
      return e.scope.nodeType === 1 ? [e.scope] : [];
    },
  },
  zX = {
    matches(e, t, n, r) {
      if (t.length === 0)
        throw new Error('"not" engine expects non-empty selector list');
      return !r.matches(e, t, n);
    },
  },
  HX = {
    query(e, t, n) {
      return n.query({ ...e, pierceShadow: !1 }, t);
    },
    matches(e, t, n, r) {
      return r.matches(e, t, { ...n, pierceShadow: !1 });
    },
  },
  BX = {
    matches(e, t, n, r) {
      if (t.length) throw new Error('"visible" engine expects no arguments');
      return xs(e);
    },
  },
  jX = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"text" engine expects a single string');
      const o = Ae(t[0]).toLowerCase(),
        s = (i) => Ae(i.full).toLowerCase().includes(o);
      return js(r._cacheText, e, s) === 'self';
    },
  },
  VX = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"text-is" engine expects a single string');
      const o = Ae(t[0]),
        s = (i) =>
          !o && !i.immediate.length ? !0 : i.immediate.some((l) => Ae(l) === o);
      return js(r._cacheText, e, s) !== 'none';
    },
  },
  WX = {
    matches(e, t, n, r) {
      if (
        t.length === 0 ||
        typeof t[0] != 'string' ||
        t.length > 2 ||
        (t.length === 2 && typeof t[1] != 'string')
      )
        throw new Error(
          '"text-matches" engine expects a regexp body and optional regexp flags'
        );
      const o = new RegExp(t[0], t.length === 2 ? t[1] : void 0),
        s = (i) => o.test(i.full);
      return js(r._cacheText, e, s) === 'self';
    },
  },
  GX = {
    matches(e, t, n, r) {
      if (t.length !== 1 || typeof t[0] != 'string')
        throw new Error('"has-text" engine expects a single string');
      if (Cc(e)) return !1;
      const o = Ae(t[0]).toLowerCase();
      return ((i) => Ae(i.full).toLowerCase().includes(o))(Me(r._cacheText, e));
    },
  };
function ur(e) {
  return {
    matches(t, n, r, o) {
      const s =
          n.length && typeof n[n.length - 1] == 'number'
            ? n[n.length - 1]
            : void 0,
        i = s === void 0 ? n : n.slice(0, n.length - 1);
      if (n.length < 1 + (s === void 0 ? 0 : 1))
        throw new Error(
          `"${e}" engine expects a selector list and optional maximum distance in pixels`
        );
      const l = o.query(r, i),
        c = fp(e, t, l, s);
      return c === void 0 ? !1 : (o._markScore(t, c), !0);
    },
  };
}
const QX = {
  query(e, t, n) {
    let r = t[t.length - 1];
    if (t.length < 2)
      throw new Error(
        '"nth-match" engine expects non-empty selector list and an index argument'
      );
    if (typeof r != 'number' || r < 1)
      throw new Error(
        '"nth-match" engine expects a one-based index as the last argument'
      );
    const o = gr.query(e, t.slice(0, t.length - 1), n);
    return r--, r < o.length ? [o[r]] : [];
  },
};
function ko(e, t) {
  if (e !== t.scope) return t.pierceShadow ? ct(e) : e.parentElement || void 0;
}
function Ei(e, t) {
  if (e !== t.scope) return e.previousElementSibling || void 0;
}
function dp(e) {
  const t = new Map(),
    n = [],
    r = [];
  function o(i) {
    let l = t.get(i);
    if (l) return l;
    const c = ct(i);
    return (
      c ? o(c).children.push(i) : n.push(i),
      (l = { children: [], taken: !1 }),
      t.set(i, l),
      l
    );
  }
  for (const i of e) o(i).taken = !0;
  function s(i) {
    const l = t.get(i);
    if ((l.taken && r.push(i), l.children.length > 1)) {
      const c = new Set(l.children);
      l.children = [];
      let a = i.firstElementChild;
      for (; a && l.children.length < c.size; )
        c.has(a) && l.children.push(a), (a = a.nextElementSibling);
      for (
        a = i.shadowRoot ? i.shadowRoot.firstElementChild : null;
        a && l.children.length < c.size;

      )
        c.has(a) && l.children.push(a), (a = a.nextElementSibling);
    }
    l.children.forEach(s);
  }
  return n.forEach(s), r;
}
const hp = new Map(),
  pp = new Map(),
  mp = 10,
  Yn = mp / 2,
  mu = 1,
  KX = 2,
  XX = 10,
  JX = 50,
  gp = 100,
  vp = 120,
  Lc = 140,
  yp = 160,
  kl = 180,
  wp = 200,
  YX = 250,
  ZX = gp + Yn,
  eJ = vp + Yn,
  Sp = Lc + Yn,
  tJ = yp + Yn,
  nJ = kl + Yn,
  rJ = wp + Yn,
  oJ = 300,
  sJ = 500,
  Ep = 510,
  xi = 520,
  xp = 530,
  kp = 1e4,
  iJ = 1e7;
function lJ(e, t, n) {
  try {
    const r = e.parseSelector(t);
    return { selector: t, elements: e.querySelectorAll(r, n) };
  } catch {
    return { selector: t, elements: [] };
  }
}
function Wr(e, t, n, r) {
  e._evaluator.begin();
  try {
    t =
      t.closest(
        'button,select,input,[role=button],[role=checkbox],[role=radio],a,[role=link]'
      ) || t;
    const s = cJ(e, t, n, r) || fJ(e, t),
      i = bp(s),
      l = e.parseSelector(i);
    return { selector: i, elements: e.querySelectorAll(l, t.ownerDocument) };
  } finally {
    hp.clear(), pp.clear(), e._evaluator.end();
  }
}
function gu(e) {
  return e.filter((t) => t[0].selector[0] !== '/');
}
function cJ(e, t, n, r) {
  if (t.ownerDocument.documentElement === t)
    return [{ engine: 'css', selector: 'html', score: 1 }];
  const o = new Map(),
    s = (l, c) => {
      const a = l === t;
      let u = c ? uJ(e, l, l === t, o) : [];
      l !== t && (u = gu(u));
      const h = aJ(e, l, n, o)
        .filter((m) => !r || !m.engine.startsWith('internal:'))
        .map((m) => [m]);
      let d = vu(e, t.ownerDocument, l, [...u, ...h], a);
      u = gu(u);
      const v = (m) => {
        const E = c && !m.length,
          S = [...m, ...h].filter((f) => (d ? Xt(f) < Xt(d) : !0));
        let p = S[0];
        if (p)
          for (let f = Tl(l); f; f = Tl(f)) {
            const g = i(f, E);
            if (!g || (d && Xt([...g, ...p]) >= Xt(d))) continue;
            if (((p = vu(e, f, l, S, a)), !p)) return;
            const w = [...g, ...p];
            (!d || Xt(w) < Xt(d)) && (d = w);
          }
      };
      return v(u), l === t && u.length && v([]), d;
    },
    i = (l, c) => {
      const a = c ? hp : pp;
      let u = a.get(l);
      return u === void 0 && ((u = s(l, c)), a.set(l, u)), u;
    };
  return i(t, !0);
}
function aJ(e, t, n, r) {
  var l;
  const o = [];
  for (const c of ['data-testid', 'data-test-id', 'data-test'])
    c !== n &&
      t.getAttribute(c) &&
      o.push({
        engine: 'css',
        selector: `[${c}=${To(t.getAttribute(c))}]`,
        score: KX,
      });
  const s = t.getAttribute('id');
  if (
    (s && !dJ(s) && o.push({ engine: 'css', selector: Tp(s), score: sJ }),
    o.push({
      engine: 'css',
      selector: lt(t.nodeName.toLowerCase()),
      score: xp,
    }),
    t.nodeName === 'IFRAME')
  ) {
    for (const c of ['name', 'title'])
      t.getAttribute(c) &&
        o.push({
          engine: 'css',
          selector: `${lt(t.nodeName.toLowerCase())}[${c}=${To(
            t.getAttribute(c)
          )}]`,
          score: XX,
        });
    return (
      t.getAttribute(n) &&
        o.push({
          engine: 'css',
          selector: `[${n}=${ue(t.getAttribute(n), !0)}]`,
          score: mu,
        }),
      bl([o]),
      o
    );
  }
  if (
    (t.getAttribute(n) &&
      o.push({
        engine: 'internal:testid',
        selector: `[${n}=${ue(t.getAttribute(n), !0)}]`,
        score: mu,
      }),
    t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA')
  ) {
    const c = t;
    c.placeholder &&
      (o.push({
        engine: 'internal:attr',
        selector: `[placeholder=${ue(c.placeholder, !1)}]`,
        score: gp,
      }),
      o.push({
        engine: 'internal:attr',
        selector: `[placeholder=${ue(c.placeholder, !0)}]`,
        score: ZX,
      }));
    const a = (l = c.labels) == null ? void 0 : l[0];
    if (a) {
      const u = Me(e._evaluator._cacheText, a).full.trim();
      o.push({ engine: 'internal:label', selector: ft(u, !1), score: vp }),
        o.push({ engine: 'internal:label', selector: ft(u, !0), score: eJ });
    }
  }
  const i = Ie(t);
  if (i && !['none', 'presentation'].includes(i)) {
    const c = Ws(t, !1, r);
    c
      ? (o.push({
          engine: 'internal:role',
          selector: `${i}[name=${ue(c, !1)}]`,
          score: Lc,
        }),
        o.push({
          engine: 'internal:role',
          selector: `${i}[name=${ue(c, !0)}]`,
          score: Sp,
        }))
      : o.push({ engine: 'internal:role', selector: i, score: Ep });
  }
  return (
    t.getAttribute('alt') &&
      ['APPLET', 'AREA', 'IMG', 'INPUT'].includes(t.nodeName) &&
      (o.push({
        engine: 'internal:attr',
        selector: `[alt=${ue(t.getAttribute('alt'), !1)}]`,
        score: yp,
      }),
      o.push({
        engine: 'internal:attr',
        selector: `[alt=${ue(t.getAttribute('alt'), !0)}]`,
        score: tJ,
      })),
    t.getAttribute('name') &&
      [
        'BUTTON',
        'FORM',
        'FIELDSET',
        'FRAME',
        'IFRAME',
        'INPUT',
        'KEYGEN',
        'OBJECT',
        'OUTPUT',
        'SELECT',
        'TEXTAREA',
        'MAP',
        'META',
        'PARAM',
      ].includes(t.nodeName) &&
      o.push({
        engine: 'css',
        selector: `${lt(t.nodeName.toLowerCase())}[name=${To(
          t.getAttribute('name')
        )}]`,
        score: xi,
      }),
    t.getAttribute('title') &&
      (o.push({
        engine: 'internal:attr',
        selector: `[title=${ue(t.getAttribute('title'), !1)}]`,
        score: wp,
      }),
      o.push({
        engine: 'internal:attr',
        selector: `[title=${ue(t.getAttribute('title'), !0)}]`,
        score: rJ,
      })),
    ['INPUT', 'TEXTAREA'].includes(t.nodeName) &&
      t.getAttribute('type') !== 'hidden' &&
      t.getAttribute('type') &&
      o.push({
        engine: 'css',
        selector: `${lt(t.nodeName.toLowerCase())}[type=${To(
          t.getAttribute('type')
        )}]`,
        score: xi,
      }),
    ['INPUT', 'TEXTAREA', 'SELECT'].includes(t.nodeName) &&
      t.getAttribute('type') !== 'hidden' &&
      o.push({
        engine: 'css',
        selector: lt(t.nodeName.toLowerCase()),
        score: xi + 1,
      }),
    bl([o]),
    o
  );
}
function uJ(e, t, n, r) {
  if (t.nodeName === 'SELECT') return [];
  const o = Ae(Me(e._evaluator._cacheText, t).full).substring(0, 80);
  if (!o) return [];
  const s = [],
    i = ft(o, !1);
  n &&
    (s.push([{ engine: 'internal:text', selector: i, score: kl }]),
    s.push([{ engine: 'internal:text', selector: ft(o, !0), score: nJ }]));
  const l = Ie(t),
    c = [];
  if (l && !['none', 'presentation'].includes(l)) {
    const a = Ws(t, !1, r);
    a
      ? (c.push({
          engine: 'internal:role',
          selector: `${l}[name=${ue(a, !1)}]`,
          score: Lc,
        }),
        c.push({
          engine: 'internal:role',
          selector: `${l}[name=${ue(a, !0)}]`,
          score: Sp,
        }))
      : c.push({ engine: 'internal:role', selector: l, score: Ep });
  } else
    c.push({ engine: 'css', selector: t.nodeName.toLowerCase(), score: xp });
  return (
    s.push([...c, { engine: 'internal:has-text', selector: i, score: kl }]),
    o.length <= 80 &&
      s.push([
        ...c,
        {
          engine: 'internal:has-text',
          selector: '/^' + hJ(o) + '$/',
          score: YX,
        },
      ]),
    bl(s),
    s
  );
}
function Tl(e) {
  return e.parentElement
    ? e.parentElement
    : e.parentNode &&
      e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
      e.parentNode.host
    ? e.parentNode.host
    : null;
}
function Tp(e) {
  return /^[a-zA-Z][a-zA-Z0-9\-\_]+$/.test(e) ? '#' + e : `[id="${lt(e)}"]`;
}
function fJ(e, t) {
  const n = t.ownerDocument,
    r = [];
  function o(i) {
    const l = r.slice();
    i && l.unshift(i);
    const c = l.join(' > '),
      a = e.parseSelector(c);
    return e.querySelector(a, t.ownerDocument, !1) === t ? c : void 0;
  }
  function s(i) {
    const l = { engine: 'css', selector: i, score: iJ },
      c = e.parseSelector(i),
      a = e.querySelectorAll(c, t.ownerDocument);
    if (a.length === 1) return [l];
    const u = { engine: 'nth', selector: String(a.indexOf(t)), score: kp };
    return [l, u];
  }
  for (let i = t; i && i !== n; i = Tl(i)) {
    const l = i.nodeName.toLowerCase();
    let c = '';
    if (i.id) {
      const h = Tp(i.id),
        d = o(h);
      if (d) return s(d);
      c = h;
    }
    const a = i.parentNode,
      u = [...i.classList];
    for (let h = 0; h < u.length; ++h) {
      const d = '.' + lt(u.slice(0, h + 1).join('.')),
        v = o(d);
      if (v) return s(v);
      !c && a && a.querySelectorAll(d).length === 1 && (c = d);
    }
    if (a) {
      const h = [...a.children],
        v =
          h.filter((E) => E.nodeName.toLowerCase() === l).indexOf(i) === 0
            ? lt(l)
            : `${lt(l)}:nth-child(${1 + h.indexOf(i)})`,
        m = o(v);
      if (m) return s(m);
      c || (c = v);
    } else c || (c = l);
    r.unshift(c);
  }
  return s(o());
}
function To(e) {
  return `"${lt(e).replace(/\\ /g, ' ')}"`;
}
function bl(e) {
  for (const t of e)
    for (const n of t)
      n.score > JX &&
        n.score < oJ &&
        (n.score += Math.min(mp, (n.selector.length / 10) | 0));
}
function bp(e) {
  const t = [];
  let n = '';
  for (const { engine: r, selector: o } of e)
    t.length &&
      (n !== 'css' || r !== 'css' || o.startsWith(':nth-match(')) &&
      t.push('>>'),
      (n = r),
      r === 'css' ? t.push(o) : t.push(`${r}=${o}`);
  return t.join(' ');
}
function Xt(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t += e[n].score * (e.length - n);
  return t;
}
function vu(e, t, n, r, o) {
  const s = r.map((l) => ({ tokens: l, score: Xt(l) }));
  s.sort((l, c) => l.score - c.score);
  let i = null;
  for (const { tokens: l } of s) {
    const c = e.parseSelector(bp(l)),
      a = e.querySelectorAll(c, t);
    if (a[0] === n && a.length === 1) return l;
    const u = a.indexOf(n);
    if (!o || i || u === -1 || a.length > 5) continue;
    const h = { engine: 'nth', selector: String(u), score: kp };
    i = [...l, h];
  }
  return i;
}
function dJ(e) {
  let t,
    n = 0;
  for (let r = 0; r < e.length; ++r) {
    const o = e[r];
    let s;
    if (!(o === '-' || o === '_')) {
      if (
        (o >= 'a' && o <= 'z'
          ? (s = 'lower')
          : o >= 'A' && o <= 'Z'
          ? (s = 'upper')
          : o >= '0' && o <= '9'
          ? (s = 'digit')
          : (s = 'other'),
        s === 'lower' && t === 'upper')
      ) {
        t = s;
        continue;
      }
      t && t !== s && ++n, (t = s);
    }
  }
  return n >= e.length / 4;
}
function hJ(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
class _l {
  constructor(t) {
    (this._highlightEntries = []),
      (this._language = 'javascript'),
      (this._injectedScript = t);
    const n = t.document;
    (this._isUnderTest = t.isUnderTest),
      (this._glassPaneElement = n.createElement('x-pw-glass')),
      (this._glassPaneElement.style.position = 'fixed'),
      (this._glassPaneElement.style.top = '0'),
      (this._glassPaneElement.style.right = '0'),
      (this._glassPaneElement.style.bottom = '0'),
      (this._glassPaneElement.style.left = '0'),
      (this._glassPaneElement.style.zIndex = '2147483647'),
      (this._glassPaneElement.style.pointerEvents = 'none'),
      (this._glassPaneElement.style.display = 'flex'),
      (this._glassPaneElement.style.backgroundColor = 'transparent'),
      (this._actionPointElement = n.createElement('x-pw-action-point')),
      this._actionPointElement.setAttribute('hidden', 'true'),
      (this._glassPaneShadow = this._glassPaneElement.attachShadow({
        mode: this._isUnderTest ? 'open' : 'closed',
      })),
      this._glassPaneShadow.appendChild(this._actionPointElement);
    const r = n.createElement('style');
    (r.textContent = `
        x-pw-tooltip {
          align-items: center;
          backdrop-filter: blur(5px);
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 2px;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 3.6px 3.7px,
                      rgba(0, 0, 0, 0.15) 0px 12.1px 12.3px,
                      rgba(0, 0, 0, 0.1) 0px -2px 4px,
                      rgba(0, 0, 0, 0.15) 0px -12.1px 24px,
                      rgba(0, 0, 0, 0.25) 0px 54px 55px;
          color: rgb(204, 204, 204);
          display: none;
          font-family: 'Dank Mono', 'Operator Mono', Inconsolata, 'Fira Mono',
                      'SF Mono', Monaco, 'Droid Sans Mono', 'Source Code Pro', monospace;
          font-size: 12.8px;
          font-weight: normal;
          left: 0;
          line-height: 1.5;
          max-width: 600px;
          padding: 3.2px 5.12px 3.2px;
          position: absolute;
          top: 0;
        }
        x-pw-action-point {
          position: absolute;
          width: 20px;
          height: 20px;
          background: red;
          border-radius: 10px;
          pointer-events: none;
          margin: -10px 0 0 -10px;
          z-index: 2;
        }
        *[hidden] {
          display: none !important;
        }
    `),
      this._glassPaneShadow.appendChild(r);
  }
  install() {
    this._injectedScript.document.documentElement.appendChild(
      this._glassPaneElement
    );
  }
  setLanguage(t) {
    this._language = t;
  }
  runHighlightOnRaf(t) {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this.updateHighlight(
        this._injectedScript.querySelectorAll(
          t,
          this._injectedScript.document.documentElement
        ),
        Ss(t),
        !1
      ),
      (this._rafRequest = requestAnimationFrame(() =>
        this.runHighlightOnRaf(t)
      ));
  }
  uninstall() {
    this._rafRequest && cancelAnimationFrame(this._rafRequest),
      this._glassPaneElement.remove();
  }
  isInstalled() {
    return (
      this._glassPaneElement.parentElement ===
        this._injectedScript.document.documentElement &&
      !this._glassPaneElement.nextElementSibling
    );
  }
  showActionPoint(t, n) {
    (this._actionPointElement.style.top = n + 'px'),
      (this._actionPointElement.style.left = t + 'px'),
      (this._actionPointElement.hidden = !1),
      this._isUnderTest &&
        console.error(
          'Action point for test: ' + JSON.stringify({ x: t, y: n })
        );
  }
  hideActionPoint() {
    this._actionPointElement.hidden = !0;
  }
  clearHighlight() {
    var t, n;
    for (const r of this._highlightEntries)
      (t = r.highlightElement) == null || t.remove(),
        (n = r.tooltipElement) == null || n.remove();
    this._highlightEntries = [];
  }
  updateHighlight(t, n, r) {
    let o;
    r ? (o = '#dc6f6f7f') : (o = t.length > 1 ? '#f6b26b7f' : '#6fa8dc7f'),
      this._innerUpdateHighlight(t, {
        color: o,
        tooltipText: n ? cn(this._language, n) : '',
      });
  }
  maskElements(t, n) {
    this._innerUpdateHighlight(t, { color: n || '#F0F' });
  }
  _innerUpdateHighlight(t, n) {
    if (!this._highlightIsUpToDate(t, n.tooltipText)) {
      this.clearHighlight();
      for (let r = 0; r < t.length; ++r) {
        const o = this._createHighlightElement();
        this._glassPaneShadow.appendChild(o);
        let s;
        if (n.tooltipText) {
          (s = this._injectedScript.document.createElement('x-pw-tooltip')),
            this._glassPaneShadow.appendChild(s);
          const i = t.length > 1 ? ` [${r + 1} of ${t.length}]` : '';
          (s.textContent = n.tooltipText + i),
            (s.style.top = '0'),
            (s.style.left = '0'),
            (s.style.display = 'flex');
        }
        this._highlightEntries.push({
          targetElement: t[r],
          tooltipElement: s,
          highlightElement: o,
          tooltipText: n.tooltipText,
        });
      }
      for (const r of this._highlightEntries) {
        if (
          ((r.box = r.targetElement.getBoundingClientRect()), !r.tooltipElement)
        )
          continue;
        const o = r.tooltipElement.offsetWidth,
          s = r.tooltipElement.offsetHeight,
          i = this._glassPaneElement.offsetWidth,
          l = this._glassPaneElement.offsetHeight;
        let c = r.box.left;
        c + o > i - 5 && (c = i - o - 5);
        let a = r.box.bottom + 5;
        a + s > l - 5 &&
          (r.box.top > s + 5 ? (a = r.box.top - s - 5) : (a = l - 5 - s)),
          (r.tooltipTop = a),
          (r.tooltipLeft = c);
      }
      for (const r of this._highlightEntries) {
        r.tooltipElement &&
          ((r.tooltipElement.style.top = r.tooltipTop + 'px'),
          (r.tooltipElement.style.left = r.tooltipLeft + 'px'));
        const o = r.box;
        (r.highlightElement.style.backgroundColor = n.color),
          (r.highlightElement.style.left = o.x + 'px'),
          (r.highlightElement.style.top = o.y + 'px'),
          (r.highlightElement.style.width = o.width + 'px'),
          (r.highlightElement.style.height = o.height + 'px'),
          (r.highlightElement.style.display = 'block'),
          this._isUnderTest &&
            console.error(
              'Highlight box for test: ' +
                JSON.stringify({
                  x: o.x,
                  y: o.y,
                  width: o.width,
                  height: o.height,
                })
            );
      }
    }
  }
  _highlightIsUpToDate(t, n) {
    if (t.length !== this._highlightEntries.length) return !1;
    for (let r = 0; r < this._highlightEntries.length; ++r) {
      if (
        n !== this._highlightEntries[r].tooltipText ||
        t[r] !== this._highlightEntries[r].targetElement
      )
        return !1;
      const o = this._highlightEntries[r].box;
      if (!o) return !1;
      const s = t[r].getBoundingClientRect();
      if (
        s.top !== o.top ||
        s.right !== o.right ||
        s.bottom !== o.bottom ||
        s.left !== o.left
      )
        return !1;
    }
    return !0;
  }
  _createHighlightElement() {
    const t = this._injectedScript.document.createElement('x-pw-highlight');
    return (
      (t.style.position = 'absolute'),
      (t.style.top = '0'),
      (t.style.left = '0'),
      (t.style.width = '0'),
      (t.style.height = '0'),
      (t.style.boxSizing = 'border-box'),
      t
    );
  }
}
class _p {
  constructor(t, n, r, o, s, i, l) {
    (this.onGlobalListenersRemoved = new Set()),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen =
        'data-testid'),
      (this.window = t),
      (this.document = t.document),
      (this.isUnderTest = n),
      (this._sdkLanguage = r),
      (this._testIdAttributeNameForStrictErrorAndConsoleCodegen = o),
      (this._evaluator = new OX(new Map())),
      (this._engines = new Map()),
      this._engines.set('xpath', lu),
      this._engines.set('xpath:light', lu),
      this._engines.set('_react', fX),
      this._engines.set('_vue', gX),
      this._engines.set('role', pu(!1)),
      this._engines.set('text', this._createTextEngine(!0, !1)),
      this._engines.set('text:light', this._createTextEngine(!1, !1)),
      this._engines.set('id', this._createAttributeEngine('id', !0)),
      this._engines.set('id:light', this._createAttributeEngine('id', !1)),
      this._engines.set(
        'data-testid',
        this._createAttributeEngine('data-testid', !0)
      ),
      this._engines.set(
        'data-testid:light',
        this._createAttributeEngine('data-testid', !1)
      ),
      this._engines.set(
        'data-test-id',
        this._createAttributeEngine('data-test-id', !0)
      ),
      this._engines.set(
        'data-test-id:light',
        this._createAttributeEngine('data-test-id', !1)
      ),
      this._engines.set(
        'data-test',
        this._createAttributeEngine('data-test', !0)
      ),
      this._engines.set(
        'data-test:light',
        this._createAttributeEngine('data-test', !1)
      ),
      this._engines.set('css', this._createCSSEngine()),
      this._engines.set('nth', { queryAll: () => [] }),
      this._engines.set('visible', this._createVisibleEngine()),
      this._engines.set('internal:control', this._createControlEngine()),
      this._engines.set('internal:has', this._createHasEngine()),
      this._engines.set('internal:has-not', this._createHasNotEngine()),
      this._engines.set('internal:and', { queryAll: () => [] }),
      this._engines.set('internal:or', { queryAll: () => [] }),
      this._engines.set('internal:label', this._createInternalLabelEngine()),
      this._engines.set('internal:text', this._createTextEngine(!0, !0)),
      this._engines.set(
        'internal:has-text',
        this._createInternalHasTextEngine()
      ),
      this._engines.set(
        'internal:has-not-text',
        this._createInternalHasNotTextEngine()
      ),
      this._engines.set('internal:attr', this._createNamedAttributeEngine()),
      this._engines.set('internal:testid', this._createNamedAttributeEngine()),
      this._engines.set('internal:role', pu(!0));
    for (const { name: c, engine: a } of l) this._engines.set(c, a);
    (this._stableRafCount = s),
      (this._browserName = i),
      this._setupGlobalListenersRemovalDetection(),
      this._setupHitTargetInterceptors(),
      n && (this.window.__injectedScript = this);
  }
  eval(t) {
    return this.window.eval(t);
  }
  testIdAttributeNameForStrictErrorAndConsoleCodegen() {
    return this._testIdAttributeNameForStrictErrorAndConsoleCodegen;
  }
  parseSelector(t) {
    const n = Vr(t);
    for (const r of Rv(n))
      if (!this._engines.has(r))
        throw this.createStacklessError(
          `Unknown engine "${r}" while parsing selector ${t}`
        );
    return n;
  }
  generateSelector(t, n, r) {
    return Wr(this, t, n).selector;
  }
  querySelector(t, n, r) {
    const o = this.querySelectorAll(t, n);
    if (r && o.length > 1) throw this.strictModeViolationError(t, o);
    return o[0];
  }
  _queryNth(t, n) {
    const r = [...t];
    let o = +n.body;
    return o === -1 && (o = r.length - 1), new Set(r.slice(o, o + 1));
  }
  _queryLayoutSelector(t, n, r) {
    const o = n.name,
      s = n.body,
      i = [],
      l = this.querySelectorAll(s.parsed, r);
    for (const c of t) {
      const a = fp(o, c, l, s.distance);
      a !== void 0 && i.push({ element: c, score: a });
    }
    return (
      i.sort((c, a) => c.score - a.score), new Set(i.map((c) => c.element))
    );
  }
  querySelectorAll(t, n) {
    if (t.capture !== void 0) {
      if (t.parts.some((o) => o.name === 'nth'))
        throw this.createStacklessError(
          "Can't query n-th element in a request with the capture."
        );
      const r = { parts: t.parts.slice(0, t.capture + 1) };
      if (t.capture < t.parts.length - 1) {
        const o = { parts: t.parts.slice(t.capture + 1) },
          s = { name: 'internal:has', body: { parsed: o }, source: Ss(o) };
        r.parts.push(s);
      }
      return this.querySelectorAll(r, n);
    }
    if (!n.querySelectorAll)
      throw this.createStacklessError('Node is not queryable.');
    if (t.capture !== void 0)
      throw this.createStacklessError(
        'Internal error: there should not be a capture in the selector.'
      );
    this._evaluator.begin();
    try {
      let r = new Set([n]);
      for (const o of t.parts)
        if (o.name === 'nth') r = this._queryNth(r, o);
        else if (o.name === 'internal:and') {
          const s = this.querySelectorAll(o.body.parsed, n);
          r = new Set(s.filter((i) => r.has(i)));
        } else if (o.name === 'internal:or') {
          const s = this.querySelectorAll(o.body.parsed, n);
          r = new Set(dp(new Set([...r, ...s])));
        } else if (MX.includes(o.name)) r = this._queryLayoutSelector(r, o, n);
        else {
          const s = new Set();
          for (const i of r) {
            const l = this._queryEngineAll(o, i);
            for (const c of l) s.add(c);
          }
          r = s;
        }
      return [...r];
    } finally {
      this._evaluator.end();
    }
  }
  _queryEngineAll(t, n) {
    const r = this._engines.get(t.name).queryAll(n, t.body);
    for (const o of r)
      if (!('nodeName' in o))
        throw this.createStacklessError(
          `Expected a Node but got ${Object.prototype.toString.call(o)}`
        );
    return r;
  }
  _createAttributeEngine(t, n) {
    const r = (o) => [
      {
        simples: [
          {
            selector: { css: `[${t}=${JSON.stringify(o)}]`, functions: [] },
            combinator: '',
          },
        ],
      },
    ];
    return {
      queryAll: (o, s) =>
        this._evaluator.query({ scope: o, pierceShadow: n }, r(s)),
    };
  }
  _createCSSEngine() {
    return {
      queryAll: (t, n) =>
        this._evaluator.query({ scope: t, pierceShadow: !0 }, n),
    };
  }
  _createTextEngine(t, n) {
    return {
      queryAll: (o, s) => {
        const { matcher: i, kind: l } = _o(s, n),
          c = [];
        let a = null;
        const u = (d) => {
          if (l === 'lax' && a && a.contains(d)) return !1;
          const v = js(this._evaluator._cacheText, d, i);
          v === 'none' && (a = d),
            (v === 'self' ||
              (v === 'selfAndChildren' && l === 'strict' && !n)) &&
              c.push(d);
        };
        o.nodeType === Node.ELEMENT_NODE && u(o);
        const h = this._evaluator._queryCSS({ scope: o, pierceShadow: t }, '*');
        for (const d of h) u(d);
        return c;
      },
    };
  }
  _createInternalHasTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          o = Me(this._evaluator._cacheText, r),
          { matcher: s } = _o(n, !0);
        return s(o) ? [r] : [];
      },
    };
  }
  _createInternalHasNotTextEngine() {
    return {
      queryAll: (t, n) => {
        if (t.nodeType !== 1) return [];
        const r = t,
          o = Me(this._evaluator._cacheText, r),
          { matcher: s } = _o(n, !0);
        return s(o) ? [] : [r];
      },
    };
  }
  _createInternalLabelEngine() {
    return {
      queryAll: (t, n) => {
        const { matcher: r } = _o(n, !0);
        return this._evaluator
          ._queryCSS({ scope: t, pierceShadow: !0 }, '*')
          .filter((s) => {
            let i = ep(s);
            if (i === null) {
              const l = s.getAttribute('aria-label');
              if (l !== null && l.trim()) return r({ full: l, immediate: [l] });
            }
            return (
              i === null && (i = s.labels),
              !!i && [...i].some((l) => r(Me(this._evaluator._cacheText, l)))
            );
          });
      },
    };
  }
  _createNamedAttributeEngine() {
    return {
      queryAll: (n, r) => {
        const o = tn(r, !0);
        if (o.name || o.attributes.length !== 1)
          throw new Error('Malformed attribute selector: ' + r);
        const { name: s, value: i, caseSensitive: l } = o.attributes[0],
          c = l ? null : i.toLowerCase();
        let a;
        return (
          i instanceof RegExp
            ? (a = (h) => !!h.match(i))
            : l
            ? (a = (h) => h === i)
            : (a = (h) => h.toLowerCase().includes(c)),
          this._evaluator
            ._queryCSS({ scope: n, pierceShadow: !0 }, `[${s}]`)
            .filter((h) => a(h.getAttribute(s)))
        );
      },
    };
  }
  _createControlEngine() {
    return {
      queryAll(t, n) {
        if (n === 'enter-frame') return [];
        if (n === 'return-empty') return [];
        if (n === 'component')
          return t.nodeType !== 1
            ? []
            : [t.childElementCount === 1 ? t.firstElementChild : t];
        throw new Error(
          `Internal error, unknown internal:control selector ${n}`
        );
      },
    };
  }
  _createHasEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(r.parsed, n, !1)
          ? [n]
          : [],
    };
  }
  _createHasNotEngine() {
    return {
      queryAll: (n, r) =>
        n.nodeType !== 1
          ? []
          : !!this.querySelector(r.parsed, n, !1)
          ? []
          : [n],
    };
  }
  _createVisibleEngine() {
    return {
      queryAll: (n, r) => (n.nodeType !== 1 ? [] : xs(n) === !!r ? [n] : []),
    };
  }
  extend(t, n) {
    const r = this.window.eval(`
    (() => {
      const module = {};
      ${t}
      return module.exports.default();
    })()`);
    return new r(this, n);
  }
  isVisible(t) {
    return xs(t);
  }
  async viewportRatio(t) {
    return await new Promise((n) => {
      const r = new IntersectionObserver((o) => {
        n(o[0].intersectionRatio), r.disconnect();
      });
      r.observe(t), requestAnimationFrame(() => {});
    });
  }
  pollRaf(t) {
    return this.poll(t, (n) => requestAnimationFrame(n));
  }
  poll(t, n) {
    return this._runAbortableTask((r) => {
      let o, s;
      const i = new Promise((c, a) => {
          (o = c), (s = a);
        }),
        l = () => {
          if (!r.aborted)
            try {
              const c = t(r);
              c !== r.continuePolling ? o(c) : n(l);
            } catch (c) {
              r.log('  ' + c.message), s(c);
            }
        };
      return l(), i;
    });
  }
  _runAbortableTask(t) {
    let n = [],
      r,
      o = !1;
    const s = () => {
        r && (r(n), (n = []), (r = void 0));
      },
      i = () =>
        new Promise((u) => {
          (r = u), (n.length || o) && s();
        });
    let l = '';
    const c = {
      injectedScript: this,
      aborted: !1,
      continuePolling: Symbol('continuePolling'),
      log: (u) => {
        (l = u), n.push({ message: u }), s();
      },
      logRepeating: (u) => {
        u !== l && c.log(u);
      },
    };
    return {
      takeNextLogs: i,
      run: () => {
        const u = t(c);
        return (
          u.finally(() => {
            (o = !0), s();
          }),
          u
        );
      },
      cancel: () => {
        c.aborted = !0;
      },
      takeLastLogs: () => n,
    };
  }
  getElementBorderWidth(t) {
    if (
      t.nodeType !== Node.ELEMENT_NODE ||
      !t.ownerDocument ||
      !t.ownerDocument.defaultView
    )
      return { left: 0, top: 0 };
    const n = t.ownerDocument.defaultView.getComputedStyle(t);
    return {
      left: parseInt(n.borderLeftWidth || '', 10),
      top: parseInt(n.borderTopWidth || '', 10),
    };
  }
  describeIFrameStyle(t) {
    if (!t.ownerDocument || !t.ownerDocument.defaultView)
      return 'error:notconnected';
    const n = t.ownerDocument.defaultView;
    for (let o = t; o; o = ct(o))
      if (n.getComputedStyle(o).transform !== 'none') return 'transformed';
    const r = n.getComputedStyle(t);
    return {
      left:
        parseInt(r.borderLeftWidth || '', 10) +
        parseInt(r.paddingLeft || '', 10),
      top:
        parseInt(r.borderTopWidth || '', 10) + parseInt(r.paddingTop || '', 10),
    };
  }
  retarget(t, n) {
    let r = t.nodeType === Node.ELEMENT_NODE ? t : t.parentElement;
    return r
      ? (n === 'none' ||
          (r.matches('input, textarea, select') ||
            (n === 'button-link'
              ? (r = r.closest('button, [role=button], a, [role=link]') || r)
              : (r =
                  r.closest(
                    'button, [role=button], [role=checkbox], [role=radio]'
                  ) || r)),
          n === 'follow-label' &&
            (!r.matches(
              'input, textarea, button, select, [role=button], [role=checkbox], [role=radio]'
            ) &&
              !r.isContentEditable &&
              (r = r.closest('label') || r),
            r.nodeName === 'LABEL' && (r = r.control || r))),
        r)
      : null;
  }
  waitForElementStatesAndPerformAction(t, n, r, o) {
    let s,
      i = 0,
      l = 0,
      c = 0;
    return this.pollRaf((a) => {
      if (r) return a.log('    forcing action'), o(t, a);
      for (const u of n) {
        if (u !== 'stable') {
          const f = this.elementState(t, u);
          if (typeof f != 'boolean') return f;
          if (!f)
            return (
              a.logRepeating(`    element is not ${u} - waiting...`),
              a.continuePolling
            );
          continue;
        }
        const h = this.retarget(t, 'no-follow-label');
        if (!h) return 'error:notconnected';
        if (++i === 1) return a.continuePolling;
        const d = performance.now();
        if (this._stableRafCount > 1 && d - c < 15) return a.continuePolling;
        c = d;
        const v = h.getBoundingClientRect(),
          m = { x: v.top, y: v.left, width: v.width, height: v.height };
        s &&
        m.x === s.x &&
        m.y === s.y &&
        m.width === s.width &&
        m.height === s.height
          ? ++l
          : (l = 0);
        const S = l >= this._stableRafCount,
          p = S || !s;
        if (
          ((s = m),
          p || a.logRepeating('    element is not stable - waiting...'),
          !S)
        )
          return a.continuePolling;
      }
      return o(t, a);
    });
  }
  elementState(t, n) {
    const r = this.retarget(
      t,
      ['stable', 'visible', 'hidden'].includes(n) ? 'none' : 'follow-label'
    );
    if (!r || !r.isConnected) return n === 'hidden' ? !0 : 'error:notconnected';
    if (n === 'visible') return this.isVisible(r);
    if (n === 'hidden') return !this.isVisible(r);
    const o = lp(r);
    if (n === 'disabled') return o;
    if (n === 'enabled') return !o;
    const s = !(
      ['INPUT', 'TEXTAREA', 'SELECT'].includes(r.nodeName) &&
      r.hasAttribute('readonly')
    );
    if (n === 'editable') return !o && s;
    if (n === 'checked' || n === 'unchecked') {
      const i = n === 'checked',
        l = rp(r, !1);
      if (l === 'error')
        throw this.createStacklessError('Not a checkbox or radio button');
      return i === l;
    }
    throw this.createStacklessError(`Unexpected element state "${n}"`);
  }
  selectOptions(t, n, r) {
    const o = this.retarget(n, 'follow-label');
    if (!o) return 'error:notconnected';
    if (o.nodeName.toLowerCase() !== 'select')
      throw this.createStacklessError('Element is not a <select> element');
    const s = o,
      i = [...s.options],
      l = [];
    let c = t.slice();
    for (let a = 0; a < i.length; a++) {
      const u = i[a],
        h = (d) => {
          if (d instanceof Node) return u === d;
          let v = !0;
          return (
            d.valueOrLabel !== void 0 &&
              (v =
                v &&
                (d.valueOrLabel === u.value || d.valueOrLabel === u.label)),
            d.value !== void 0 && (v = v && d.value === u.value),
            d.label !== void 0 && (v = v && d.label === u.label),
            d.index !== void 0 && (v = v && d.index === a),
            v
          );
        };
      if (c.some(h))
        if ((l.push(u), s.multiple)) c = c.filter((d) => !h(d));
        else {
          c = [];
          break;
        }
    }
    return c.length
      ? (r.logRepeating('    did not find some options - waiting... '),
        r.continuePolling)
      : ((s.value = void 0),
        l.forEach((a) => (a.selected = !0)),
        r.log('    selected specified option(s)'),
        s.dispatchEvent(new Event('input', { bubbles: !0 })),
        s.dispatchEvent(new Event('change', { bubbles: !0 })),
        l.map((a) => a.value));
  }
  fill(t, n, r) {
    const o = this.retarget(n, 'follow-label');
    if (!o) return 'error:notconnected';
    if (o.nodeName.toLowerCase() === 'input') {
      const s = o,
        i = s.type.toLowerCase(),
        l = new Set([
          'color',
          'date',
          'time',
          'datetime',
          'datetime-local',
          'month',
          'range',
          'week',
        ]);
      if (
        !new Set([
          '',
          'email',
          'number',
          'password',
          'search',
          'tel',
          'text',
          'url',
        ]).has(i) &&
        !l.has(i)
      )
        throw (
          (r.log(`    input of type "${i}" cannot be filled`),
          this.createStacklessError(`Input of type "${i}" cannot be filled`))
        );
      if (i === 'number' && ((t = t.trim()), isNaN(Number(t))))
        throw this.createStacklessError(
          'Cannot type text into input[type=number]'
        );
      if (l.has(i)) {
        if (((t = t.trim()), s.focus(), (s.value = t), s.value !== t))
          throw this.createStacklessError('Malformed value');
        return (
          o.dispatchEvent(new Event('input', { bubbles: !0 })),
          o.dispatchEvent(new Event('change', { bubbles: !0 })),
          'done'
        );
      }
    } else if (o.nodeName.toLowerCase() !== 'textarea') {
      if (!o.isContentEditable)
        throw this.createStacklessError(
          'Element is not an <input>, <textarea> or [contenteditable] element'
        );
    }
    return this.selectText(o), 'needsinput';
  }
  selectText(t) {
    const n = this.retarget(t, 'follow-label');
    if (!n) return 'error:notconnected';
    if (n.nodeName.toLowerCase() === 'input') {
      const s = n;
      return s.select(), s.focus(), 'done';
    }
    if (n.nodeName.toLowerCase() === 'textarea') {
      const s = n;
      return (
        (s.selectionStart = 0),
        (s.selectionEnd = s.value.length),
        s.focus(),
        'done'
      );
    }
    const r = n.ownerDocument.createRange();
    r.selectNodeContents(n);
    const o = n.ownerDocument.defaultView.getSelection();
    return o && (o.removeAllRanges(), o.addRange(r)), n.focus(), 'done';
  }
  _activelyFocused(t) {
    const n = t.getRootNode().activeElement,
      r = n === t && !!t.ownerDocument && t.ownerDocument.hasFocus();
    return { activeElement: n, isFocused: r };
  }
  focusNode(t, n) {
    if (!t.isConnected) return 'error:notconnected';
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError('Node is not an element');
    const { activeElement: r, isFocused: o } = this._activelyFocused(t);
    if (
      (t.isContentEditable && !o && r && r.blur && r.blur(),
      t.focus(),
      t.focus(),
      n && !o && t.nodeName.toLowerCase() === 'input')
    )
      try {
        t.setSelectionRange(0, 0);
      } catch {}
    return 'done';
  }
  blurNode(t) {
    if (!t.isConnected) return 'error:notconnected';
    if (t.nodeType !== Node.ELEMENT_NODE)
      throw this.createStacklessError('Node is not an element');
    return t.blur(), 'done';
  }
  setInputFiles(t, n) {
    if (t.nodeType !== Node.ELEMENT_NODE)
      return 'Node is not of type HTMLElement';
    const r = t;
    if (r.nodeName !== 'INPUT') return 'Not an <input> element';
    const o = r;
    if ((o.getAttribute('type') || '').toLowerCase() !== 'file')
      return 'Not an input[type=file] element';
    const i = n.map((c) => {
        const a = Uint8Array.from(atob(c.buffer), (u) => u.charCodeAt(0));
        return new File([a], c.name, { type: c.mimeType });
      }),
      l = new DataTransfer();
    for (const c of i) l.items.add(c);
    (o.files = l.files),
      o.dispatchEvent(new Event('input', { bubbles: !0 })),
      o.dispatchEvent(new Event('change', { bubbles: !0 }));
  }
  expectHitTarget(t, n) {
    const r = [];
    let o = n;
    for (; o; ) {
      const u = Mh(o);
      if (!u || (r.push(u), u.nodeType === 9)) break;
      o = u.host;
    }
    let s;
    for (let u = r.length - 1; u >= 0; u--) {
      const h = r[u],
        d = h.elementsFromPoint(t.x, t.y),
        v = h.elementFromPoint(t.x, t.y);
      if (v && d[0] && ct(v) === d[0]) {
        const E = this.window.getComputedStyle(v);
        (E == null ? void 0 : E.display) === 'contents' && d.unshift(v);
      }
      d[0] && d[0].shadowRoot === h && d[1] === v && d.shift();
      const m = d[0];
      if (!m || ((s = m), u && m !== r[u - 1].host)) break;
    }
    const i = [];
    for (; s && s !== n; ) i.push(s), (s = ct(s));
    if (s === n) return 'done';
    const l = this.previewNode(i[0] || this.document.documentElement);
    let c,
      a = n;
    for (; a; ) {
      const u = i.indexOf(a);
      if (u !== -1) {
        u > 1 && (c = this.previewNode(i[u - 1]));
        break;
      }
      a = ct(a);
    }
    return c
      ? { hitTargetDescription: `${l} from ${c} subtree` }
      : { hitTargetDescription: l };
  }
  setupHitTargetInterceptor(t, n, r, o) {
    const s = this.retarget(t, 'button-link');
    if (!s || !s.isConnected) return 'error:notconnected';
    if (r) {
      const u = this.expectHitTarget(r, s);
      if (u !== 'done') return u.hitTargetDescription;
    }
    if (n === 'drag') return { stop: () => 'done' };
    const i = { hover: Np, tap: Cp, mouse: Lp }[n];
    let l;
    const c = (u) => {
        if (!i.has(u.type) || !u.isTrusted) return;
        const h =
          this.window.TouchEvent && u instanceof this.window.TouchEvent
            ? u.touches[0]
            : u;
        l === void 0 &&
          h &&
          (l = this.expectHitTarget({ x: h.clientX, y: h.clientY }, s)),
          (o || (l !== 'done' && l !== void 0)) &&
            (u.preventDefault(),
            u.stopPropagation(),
            u.stopImmediatePropagation());
      },
      a = () => (
        this._hitTargetInterceptor === c &&
          (this._hitTargetInterceptor = void 0),
        l || 'done'
      );
    return (this._hitTargetInterceptor = c), { stop: a };
  }
  dispatchEvent(t, n, r) {
    let o;
    switch (
      ((r = { bubbles: !0, cancelable: !0, composed: !0, ...r }), gJ.get(n))
    ) {
      case 'mouse':
        o = new MouseEvent(n, r);
        break;
      case 'keyboard':
        o = new KeyboardEvent(n, r);
        break;
      case 'touch':
        o = new TouchEvent(n, r);
        break;
      case 'pointer':
        o = new PointerEvent(n, r);
        break;
      case 'focus':
        o = new FocusEvent(n, r);
        break;
      case 'drag':
        o = new DragEvent(n, r);
        break;
      case 'wheel':
        o = new WheelEvent(n, r);
        break;
      default:
        o = new Event(n, r);
        break;
    }
    t.dispatchEvent(o);
  }
  previewNode(t) {
    if (t.nodeType === Node.TEXT_NODE) return bo(`#text=${t.nodeValue || ''}`);
    if (t.nodeType !== Node.ELEMENT_NODE)
      return bo(`<${t.nodeName.toLowerCase()} />`);
    const n = t,
      r = [];
    for (let c = 0; c < n.attributes.length; c++) {
      const { name: a, value: u } = n.attributes[c];
      a !== 'style' &&
        (!u && mJ.has(a) ? r.push(` ${a}`) : r.push(` ${a}="${u}"`));
    }
    r.sort((c, a) => c.length - a.length);
    let o = r.join('');
    if ((o.length > 50 && (o = o.substring(0, 49) + '…'), pJ.has(n.nodeName)))
      return bo(`<${n.nodeName.toLowerCase()}${o}/>`);
    const s = n.childNodes;
    let i = !1;
    if (s.length <= 5) {
      i = !0;
      for (let c = 0; c < s.length; c++)
        i = i && s[c].nodeType === Node.TEXT_NODE;
    }
    let l = i ? n.textContent || '' : s.length ? '…' : '';
    return (
      l.length > 50 && (l = l.substring(0, 49) + '…'),
      bo(`<${n.nodeName.toLowerCase()}${o}>${l}</${n.nodeName.toLowerCase()}>`)
    );
  }
  strictModeViolationError(t, n) {
    const r = n
        .slice(0, 10)
        .map((s) => ({
          preview: this.previewNode(s),
          selector: this.generateSelector(
            s,
            this._testIdAttributeNameForStrictErrorAndConsoleCodegen
          ),
        })),
      o = r.map(
        (s, i) => `
    ${i + 1}) ${s.preview} aka ${cn(this._sdkLanguage, s.selector)}`
      );
    return (
      r.length < n.length &&
        o.push(`
    ...`),
      this.createStacklessError(`strict mode violation: ${cn(
        this._sdkLanguage,
        Ss(t)
      )} resolved to ${n.length} elements:${o.join('')}
`)
    );
  }
  createStacklessError(t) {
    if (this._browserName === 'firefox') {
      const r = new Error('Error: ' + t);
      return (r.stack = ''), r;
    }
    const n = new Error(t);
    return delete n.stack, n;
  }
  maskSelectors(t, n) {
    this._highlight && this.hideHighlight(),
      (this._highlight = new _l(this)),
      this._highlight.install();
    const r = [];
    for (const o of t)
      r.push(this.querySelectorAll(o, this.document.documentElement));
    this._highlight.maskElements(r.flat(), n);
  }
  highlight(t) {
    this._highlight ||
      ((this._highlight = new _l(this)), this._highlight.install()),
      this._highlight.runHighlightOnRaf(t);
  }
  hideHighlight() {
    this._highlight && (this._highlight.uninstall(), delete this._highlight);
  }
  markTargetElements(t, n) {
    const r = new CustomEvent('__playwright_target__', {
      bubbles: !0,
      cancelable: !0,
      detail: n,
      composed: !1,
    });
    for (const o of t) o.dispatchEvent(r);
  }
  _setupGlobalListenersRemovalDetection() {
    const t = '__playwright_global_listeners_check__';
    let n = !1;
    const r = () => (n = !0);
    this.window.addEventListener(t, r),
      new MutationObserver((o) => {
        if (
          o.some((i) =>
            Array.from(i.addedNodes).includes(this.document.documentElement)
          ) &&
          ((n = !1), this.window.dispatchEvent(new CustomEvent(t)), !n)
        ) {
          this.window.addEventListener(t, r);
          for (const i of this.onGlobalListenersRemoved) i();
        }
      }).observe(this.document, { childList: !0 });
  }
  _setupHitTargetInterceptors() {
    const t = (r) => {
        var o;
        return (o = this._hitTargetInterceptor) == null
          ? void 0
          : o.call(this, r);
      },
      n = () => {
        for (const r of vJ)
          this.window.addEventListener(r, t, { capture: !0, passive: !1 });
      };
    n(), this.onGlobalListenersRemoved.add(n);
  }
  async expect(t, n, r) {
    return n.expression === 'to.have.count' || n.expression.endsWith('.array')
      ? this.expectArray(r, n)
      : t
      ? await this.expectSingleElement(t, n)
      : !n.isNot && n.expression === 'to.be.hidden'
      ? { matches: !0 }
      : n.isNot && n.expression === 'to.be.visible'
      ? { matches: !1 }
      : !n.isNot && n.expression === 'to.be.detached'
      ? { matches: !0 }
      : n.isNot && n.expression === 'to.be.attached'
      ? { matches: !1 }
      : n.isNot && n.expression === 'to.be.in.viewport'
      ? { matches: !1 }
      : { matches: n.isNot, missingRecevied: !0 };
  }
  async expectSingleElement(t, n) {
    var o;
    const r = n.expression;
    {
      let s;
      if (
        (r === 'to.be.checked'
          ? (s = this.elementState(t, 'checked'))
          : r === 'to.be.unchecked'
          ? (s = this.elementState(t, 'unchecked'))
          : r === 'to.be.disabled'
          ? (s = this.elementState(t, 'disabled'))
          : r === 'to.be.editable'
          ? (s = this.elementState(t, 'editable'))
          : r === 'to.be.readonly'
          ? (s = !this.elementState(t, 'editable'))
          : r === 'to.be.empty'
          ? t.nodeName === 'INPUT' || t.nodeName === 'TEXTAREA'
            ? (s = !t.value)
            : (s = !((o = t.textContent) != null && o.trim()))
          : r === 'to.be.enabled'
          ? (s = this.elementState(t, 'enabled'))
          : r === 'to.be.focused'
          ? (s = this._activelyFocused(t).isFocused)
          : r === 'to.be.hidden'
          ? (s = this.elementState(t, 'hidden'))
          : r === 'to.be.visible'
          ? (s = this.elementState(t, 'visible'))
          : r === 'to.be.attached'
          ? (s = !0)
          : r === 'to.be.detached' && (s = !1),
        s !== void 0)
      ) {
        if (s === 'error:notcheckbox')
          throw this.createStacklessError('Element is not a checkbox');
        if (s === 'error:notconnected')
          throw this.createStacklessError('Element is not connected');
        return { received: s, matches: s };
      }
    }
    if (r === 'to.have.property') {
      const s = t[n.expressionArg],
        i = Nl(s, n.expectedValue);
      return { received: s, matches: i };
    }
    if (r === 'to.be.in.viewport') {
      const s = await this.viewportRatio(t);
      return {
        received: `viewport ratio ${s}`,
        matches: s > 0 && s > (n.expectedNumber ?? 0) - 1e-9,
      };
    }
    if (r === 'to.have.values') {
      if (
        ((t = this.retarget(t, 'follow-label')),
        t.nodeName !== 'SELECT' || !t.multiple)
      )
        throw this.createStacklessError(
          'Not a select element with a multiple attribute'
        );
      const s = [...t.selectedOptions].map((i) => i.value);
      return s.length !== n.expectedText.length
        ? { received: s, matches: !1 }
        : {
            received: s,
            matches: s
              .map((i, l) => new ki(n.expectedText[l]).matches(i))
              .every(Boolean),
          };
    }
    {
      let s;
      if (r === 'to.have.attribute') {
        const i = t.getAttribute(n.expressionArg);
        if (i === null) return { received: null, matches: !1 };
        s = i;
      } else if (r === 'to.have.class') s = t.classList.toString();
      else if (r === 'to.have.css')
        s = this.window.getComputedStyle(t).getPropertyValue(n.expressionArg);
      else if (r === 'to.have.id') s = t.id;
      else if (r === 'to.have.text')
        s = n.useInnerText ? t.innerText : Me(new Map(), t).full;
      else if (r === 'to.have.title') s = this.document.title;
      else if (r === 'to.have.url') s = this.document.location.href;
      else if (r === 'to.have.value') {
        if (
          ((t = this.retarget(t, 'follow-label')),
          t.nodeName !== 'INPUT' &&
            t.nodeName !== 'TEXTAREA' &&
            t.nodeName !== 'SELECT')
        )
          throw this.createStacklessError('Not an input element');
        s = t.value;
      }
      if (s !== void 0 && n.expectedText) {
        const i = new ki(n.expectedText[0]);
        return { received: s, matches: i.matches(s) };
      }
    }
    throw this.createStacklessError('Unknown expect matcher: ' + r);
  }
  expectArray(t, n) {
    const r = n.expression;
    if (r === 'to.have.count') {
      const s = t.length,
        i = s === n.expectedNumber;
      return { received: s, matches: i };
    }
    let o;
    if (
      (r === 'to.have.text.array' || r === 'to.contain.text.array'
        ? (o = t.map((s) =>
            n.useInnerText ? s.innerText : Me(new Map(), s).full
          ))
        : r === 'to.have.class.array' &&
          (o = t.map((s) => s.classList.toString())),
      o && n.expectedText)
    ) {
      const s = r !== 'to.contain.text.array';
      if (!(o.length === n.expectedText.length || !s))
        return { received: o, matches: !1 };
      const l = n.expectedText.map((u) => new ki(u));
      let c = 0,
        a = 0;
      for (; c < l.length && a < o.length; ) l[c].matches(o[a]) && ++c, ++a;
      return { received: o, matches: c === l.length };
    }
    throw this.createStacklessError('Unknown expect matcher: ' + r);
  }
  getElementAccessibleName(t, n) {
    return Ws(t, !!n, new Map());
  }
  getAriaRole(t) {
    return Ie(t);
  }
}
const pJ = new Set([
    'AREA',
    'BASE',
    'BR',
    'COL',
    'COMMAND',
    'EMBED',
    'HR',
    'IMG',
    'INPUT',
    'KEYGEN',
    'LINK',
    'MENUITEM',
    'META',
    'PARAM',
    'SOURCE',
    'TRACK',
    'WBR',
  ]),
  mJ = new Set(['checked', 'selected', 'disabled', 'readonly', 'multiple']);
function bo(e) {
  return e.replace(/\n/g, '↵').replace(/\t/g, '⇆');
}
const gJ = new Map([
    ['auxclick', 'mouse'],
    ['click', 'mouse'],
    ['dblclick', 'mouse'],
    ['mousedown', 'mouse'],
    ['mouseeenter', 'mouse'],
    ['mouseleave', 'mouse'],
    ['mousemove', 'mouse'],
    ['mouseout', 'mouse'],
    ['mouseover', 'mouse'],
    ['mouseup', 'mouse'],
    ['mouseleave', 'mouse'],
    ['mousewheel', 'mouse'],
    ['keydown', 'keyboard'],
    ['keyup', 'keyboard'],
    ['keypress', 'keyboard'],
    ['textInput', 'keyboard'],
    ['touchstart', 'touch'],
    ['touchmove', 'touch'],
    ['touchend', 'touch'],
    ['touchcancel', 'touch'],
    ['pointerover', 'pointer'],
    ['pointerout', 'pointer'],
    ['pointerenter', 'pointer'],
    ['pointerleave', 'pointer'],
    ['pointerdown', 'pointer'],
    ['pointerup', 'pointer'],
    ['pointermove', 'pointer'],
    ['pointercancel', 'pointer'],
    ['gotpointercapture', 'pointer'],
    ['lostpointercapture', 'pointer'],
    ['focus', 'focus'],
    ['blur', 'focus'],
    ['drag', 'drag'],
    ['dragstart', 'drag'],
    ['dragend', 'drag'],
    ['dragover', 'drag'],
    ['dragenter', 'drag'],
    ['dragleave', 'drag'],
    ['dragexit', 'drag'],
    ['drop', 'drag'],
    ['wheel', 'wheel'],
  ]),
  Np = new Set(['mousemove']),
  Cp = new Set([
    'pointerdown',
    'pointerup',
    'touchstart',
    'touchend',
    'touchcancel',
  ]),
  Lp = new Set([
    'mousedown',
    'mouseup',
    'pointerdown',
    'pointerup',
    'click',
    'auxclick',
    'dblclick',
    'contextmenu',
  ]),
  vJ = new Set([...Np, ...Cp, ...Lp]);
function yJ(e) {
  if (((e = e.substring(1, e.length - 1)), !e.includes('\\'))) return e;
  const t = [];
  let n = 0;
  for (; n < e.length; )
    e[n] === '\\' && n + 1 < e.length && n++, t.push(e[n++]);
  return t.join('');
}
function _o(e, t) {
  if (e[0] === '/' && e.lastIndexOf('/') > 0) {
    const o = e.lastIndexOf('/'),
      s = new RegExp(e.substring(1, o), e.substring(o + 1));
    return { matcher: (i) => s.test(i.full), kind: 'regex' };
  }
  const n = t ? JSON.parse.bind(JSON) : yJ;
  let r = !1;
  return (
    e.length > 1 && e[0] === '"' && e[e.length - 1] === '"'
      ? ((e = n(e)), (r = !0))
      : t &&
        e.length > 1 &&
        e[0] === '"' &&
        e[e.length - 2] === '"' &&
        e[e.length - 1] === 'i'
      ? ((e = n(e.substring(0, e.length - 1))), (r = !1))
      : t &&
        e.length > 1 &&
        e[0] === '"' &&
        e[e.length - 2] === '"' &&
        e[e.length - 1] === 's'
      ? ((e = n(e.substring(0, e.length - 1))), (r = !0))
      : e.length > 1 &&
        e[0] === "'" &&
        e[e.length - 1] === "'" &&
        ((e = n(e)), (r = !0)),
    (e = Ae(e)),
    r
      ? t
        ? { kind: 'strict', matcher: (s) => Ae(s.full) === e }
        : {
            matcher: (s) =>
              !e && !s.immediate.length
                ? !0
                : s.immediate.some((i) => Ae(i) === e),
            kind: 'strict',
          }
      : ((e = e.toLowerCase()),
        { kind: 'lax', matcher: (o) => Ae(o.full).toLowerCase().includes(e) })
  );
}
class ki {
  constructor(t) {
    if (
      ((this._normalizeWhiteSpace = t.normalizeWhiteSpace),
      (this._ignoreCase = t.ignoreCase),
      (this._string = t.matchSubstring ? void 0 : this.normalize(t.string)),
      (this._substring = t.matchSubstring ? this.normalize(t.string) : void 0),
      t.regexSource)
    ) {
      const n = new Set((t.regexFlags || '').split(''));
      t.ignoreCase === !1 && n.delete('i'),
        t.ignoreCase === !0 && n.add('i'),
        (this._regex = new RegExp(t.regexSource, [...n].join('')));
    }
  }
  matches(t) {
    return (
      this._regex || (t = this.normalize(t)),
      this._string !== void 0
        ? t === this._string
        : this._substring !== void 0
        ? t.includes(this._substring)
        : this._regex
        ? !!this._regex.test(t)
        : !1
    );
  }
  normalize(t) {
    return (
      t &&
      (this._normalizeWhiteSpace && (t = Ae(t)),
      this._ignoreCase && (t = t.toLocaleLowerCase()),
      t)
    );
  }
}
function Nl(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1;
    if (Array.isArray(e)) {
      if (e.length !== t.length) return !1;
      for (let r = 0; r < e.length; ++r) if (!Nl(e[r], t[r])) return !1;
      return !0;
    }
    if (e instanceof RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    const n = Object.keys(e);
    if (n.length !== Object.keys(t).length) return !1;
    for (let r = 0; r < n.length; ++r) if (!t.hasOwnProperty(n[r])) return !1;
    for (const r of n) if (!Nl(e[r], t[r])) return !1;
    return !0;
  }
  return typeof e == 'number' && typeof t == 'number'
    ? isNaN(e) && isNaN(t)
    : !1;
}
class wJ {
  constructor(t, n) {
    (this._performingAction = !1),
      (this._listeners = []),
      (this._hoveredModel = null),
      (this._hoveredElement = null),
      (this._activeModel = null),
      (this._expectProgrammaticKeyUp = !1),
      (this._mode = 'none'),
      (this._testIdAttributeName = 'data-testid'),
      (this.document = t.document),
      (this._injectedScript = t),
      (this._delegate = n),
      (this._highlight = new _l(t)),
      this.refreshListenersIfNeeded(),
      t.isUnderTest && console.error('Recorder script ready for test');
  }
  refreshListenersIfNeeded() {
    this._highlight.isInstalled() ||
      (xJ(this._listeners),
      (this._listeners = [
        Xe(this.document, 'click', (t) => this._onClick(t), !0),
        Xe(this.document, 'auxclick', (t) => this._onClick(t), !0),
        Xe(this.document, 'input', (t) => this._onInput(t), !0),
        Xe(this.document, 'keydown', (t) => this._onKeyDown(t), !0),
        Xe(this.document, 'keyup', (t) => this._onKeyUp(t), !0),
        Xe(this.document, 'mousedown', (t) => this._onMouseDown(t), !0),
        Xe(this.document, 'mouseup', (t) => this._onMouseUp(t), !0),
        Xe(this.document, 'mousemove', (t) => this._onMouseMove(t), !0),
        Xe(this.document, 'mouseleave', (t) => this._onMouseLeave(t), !0),
        Xe(this.document, 'focus', (t) => t.isTrusted && this._onFocus(!0), !0),
        Xe(
          this.document,
          'scroll',
          (t) => {
            t.isTrusted &&
              ((this._hoveredModel = null),
              this._highlight.hideActionPoint(),
              this._updateHighlight());
          },
          !0
        ),
      ]),
      this._highlight.install());
  }
  setUIState(t) {
    var l;
    const {
      mode: n,
      actionPoint: r,
      actionSelector: o,
      language: s,
      testIdAttributeName: i,
    } = t;
    (this._testIdAttributeName = i),
      this._highlight.setLanguage(s),
      n !== this._mode && ((this._mode = n), this._clearHighlight()),
      (r &&
        this._actionPoint &&
        r.x === this._actionPoint.x &&
        r.y === this._actionPoint.y) ||
        (!r && !this._actionPoint) ||
        (r
          ? this._highlight.showActionPoint(r.x, r.y)
          : this._highlight.hideActionPoint(),
        (this._actionPoint = r)),
      this._actionSelector &&
        !((l = this._hoveredModel) != null && l.elements.length) &&
        (this._actionSelector = void 0),
      o !== this._actionSelector &&
        ((this._hoveredModel = o
          ? lJ(this._injectedScript, o, this.document)
          : null),
        this._updateHighlight(),
        (this._actionSelector = o));
  }
  _clearHighlight() {
    (this._hoveredModel = null),
      (this._activeModel = null),
      this._updateHighlight();
  }
  _actionInProgress(t) {
    return this._performingAction ? !0 : (bt(t), !1);
  }
  _consumedDueToNoModel(t, n) {
    return n ? !1 : (bt(t), !0);
  }
  _consumedDueWrongTarget(t) {
    return this._activeModel &&
      this._activeModel.elements[0] === this._deepEventTarget(t)
      ? !1
      : (bt(t), !0);
  }
  _onClick(t) {
    var r, o;
    if (
      !t.isTrusted ||
      (this._mode === 'inspecting' &&
        ((o = (r = this._delegate).setSelector) == null ||
          o.call(r, this._hoveredModel ? this._hoveredModel.selector : '')),
      this._shouldIgnoreMouseEvent(t)) ||
      this._actionInProgress(t) ||
      this._consumedDueToNoModel(t, this._hoveredModel)
    )
      return;
    const n = Ti(this._deepEventTarget(t));
    if (n) {
      this._performAction({
        name: n.checked ? 'check' : 'uncheck',
        selector: this._hoveredModel.selector,
        signals: [],
      });
      return;
    }
    this._performAction({
      name: 'click',
      selector: this._hoveredModel.selector,
      position: EJ(t),
      signals: [],
      button: SJ(t),
      modifiers: yu(t),
      clickCount: t.detail,
    });
  }
  _shouldIgnoreMouseEvent(t) {
    const n = this._deepEventTarget(t);
    if (this._mode === 'none') return !0;
    if (this._mode === 'inspecting') return bt(t), !0;
    const r = n.nodeName;
    return !!(
      r === 'SELECT' ||
      r === 'OPTION' ||
      (r === 'INPUT' && ['date'].includes(n.type))
    );
  }
  _onMouseDown(t) {
    t.isTrusted &&
      (this._shouldIgnoreMouseEvent(t) ||
        (this._performingAction || bt(t),
        (this._activeModel = this._hoveredModel)));
  }
  _onMouseUp(t) {
    t.isTrusted &&
      (this._shouldIgnoreMouseEvent(t) || this._performingAction || bt(t));
  }
  _onMouseMove(t) {
    if (!t.isTrusted || this._mode === 'none') return;
    const n = this._deepEventTarget(t);
    this._hoveredElement !== n &&
      ((this._hoveredElement = n), this._updateModelForHoveredElement());
  }
  _onMouseLeave(t) {
    t.isTrusted &&
      this._injectedScript.window.top !== this._injectedScript.window &&
      this._deepEventTarget(t).nodeType === Node.DOCUMENT_NODE &&
      ((this._hoveredElement = null), this._updateModelForHoveredElement());
  }
  _onFocus(t) {
    if (this._mode === 'none') return;
    const n = this._deepActiveElement(this.document);
    if (t && n === this.document.body) return;
    const r = n ? Wr(this._injectedScript, n, this._testIdAttributeName) : null;
    (this._activeModel = r && r.selector ? r : null),
      t && (this._hoveredElement = n),
      this._updateModelForHoveredElement();
  }
  _updateModelForHoveredElement() {
    if (!this._hoveredElement || !this._hoveredElement.isConnected) {
      (this._hoveredModel = null),
        (this._hoveredElement = null),
        this._updateHighlight();
      return;
    }
    const t = this._hoveredElement,
      { selector: n, elements: r } = Wr(
        this._injectedScript,
        t,
        this._testIdAttributeName
      );
    (this._hoveredModel && this._hoveredModel.selector === n) ||
      ((this._hoveredModel = n ? { selector: n, elements: r } : null),
      this._updateHighlight());
  }
  _updateHighlight() {
    const t = this._hoveredModel ? this._hoveredModel.elements : [],
      n = this._hoveredModel ? this._hoveredModel.selector : '';
    this._highlight.updateHighlight(t, n, this._mode === 'recording');
  }
  _onInput(t) {
    var r, o, s, i;
    if (this._mode !== 'recording') return !0;
    const n = this._deepEventTarget(t);
    if (n.nodeName === 'INPUT' && n.type.toLowerCase() === 'file') {
      (o = (r = this._delegate).recordAction) == null ||
        o.call(r, {
          name: 'setInputFiles',
          selector: this._activeModel.selector,
          signals: [],
          files: [...(n.files || [])].map((l) => l.name),
        });
      return;
    }
    if (['INPUT', 'TEXTAREA'].includes(n.nodeName) || n.isContentEditable) {
      if (
        (n.nodeName === 'INPUT' &&
          ['checkbox', 'radio'].includes(n.type.toLowerCase())) ||
        this._consumedDueWrongTarget(t)
      )
        return;
      (i = (s = this._delegate).recordAction) == null ||
        i.call(s, {
          name: 'fill',
          selector: this._activeModel.selector,
          signals: [],
          text: n.isContentEditable ? n.innerText : n.value,
        });
    }
    if (n.nodeName === 'SELECT') {
      const l = n;
      if (this._actionInProgress(t)) return;
      this._performAction({
        name: 'select',
        selector: this._hoveredModel.selector,
        options: [...l.selectedOptions].map((c) => c.value),
        signals: [],
      });
    }
  }
  _shouldGenerateKeyPressFor(t) {
    if (
      ['Backspace', 'Delete', 'AltGraph'].includes(t.key) ||
      (t.key === '@' && t.code === 'KeyL')
    )
      return !1;
    if (navigator.platform.includes('Mac')) {
      if (t.key === 'v' && t.metaKey) return !1;
    } else if (
      (t.key === 'v' && t.ctrlKey) ||
      (t.key === 'Insert' && t.shiftKey)
    )
      return !1;
    if (['Shift', 'Control', 'Meta', 'Alt', 'Process'].includes(t.key))
      return !1;
    const n = t.ctrlKey || t.altKey || t.metaKey;
    return t.key.length === 1 && !n ? !!Ti(this._deepEventTarget(t)) : !0;
  }
  _onKeyDown(t) {
    if (t.isTrusted) {
      if (this._mode === 'inspecting') {
        bt(t);
        return;
      }
      if (this._mode === 'recording' && this._shouldGenerateKeyPressFor(t)) {
        if (this._actionInProgress(t)) {
          this._expectProgrammaticKeyUp = !0;
          return;
        }
        if (!this._consumedDueWrongTarget(t)) {
          if (t.key === ' ') {
            const n = Ti(this._deepEventTarget(t));
            if (n) {
              this._performAction({
                name: n.checked ? 'uncheck' : 'check',
                selector: this._activeModel.selector,
                signals: [],
              });
              return;
            }
          }
          this._performAction({
            name: 'press',
            selector: this._activeModel.selector,
            signals: [],
            key: t.key,
            modifiers: yu(t),
          });
        }
      }
    }
  }
  _onKeyUp(t) {
    if (
      t.isTrusted &&
      this._mode !== 'none' &&
      this._shouldGenerateKeyPressFor(t)
    ) {
      if (!this._expectProgrammaticKeyUp) {
        bt(t);
        return;
      }
      this._expectProgrammaticKeyUp = !1;
    }
  }
  async _performAction(t) {
    var n, r;
    this._clearHighlight(),
      (this._performingAction = !0),
      await ((r = (n = this._delegate).performAction) == null
        ? void 0
        : r.call(n, t).catch(() => {})),
      (this._performingAction = !1),
      this._onFocus(!1),
      this._injectedScript.isUnderTest &&
        console.error(
          'Action performed for test: ' +
            JSON.stringify({
              hovered: this._hoveredModel ? this._hoveredModel.selector : null,
              active: this._activeModel ? this._activeModel.selector : null,
            })
        );
  }
  _deepEventTarget(t) {
    return t.composedPath()[0];
  }
  _deepActiveElement(t) {
    let n = t.activeElement;
    for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
      n = n.shadowRoot.activeElement;
    return n;
  }
}
function yu(e) {
  return (
    (e.altKey ? 1 : 0) |
    (e.ctrlKey ? 2 : 0) |
    (e.metaKey ? 4 : 0) |
    (e.shiftKey ? 8 : 0)
  );
}
function SJ(e) {
  switch (e.which) {
    case 1:
      return 'left';
    case 2:
      return 'middle';
    case 3:
      return 'right';
  }
  return 'left';
}
function EJ(e) {
  if (e.target.nodeName === 'CANVAS') return { x: e.offsetX, y: e.offsetY };
}
function bt(e) {
  e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation();
}
function Ti(e) {
  if (!e || e.nodeName !== 'INPUT') return null;
  const t = e;
  return ['checkbox', 'radio'].includes(t.type) ? t : null;
}
function Xe(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    () => {
      e.removeEventListener(t, n, r);
    }
  );
}
function xJ(e) {
  for (const t of e) t();
  e.splice(0, e.length);
}
function Ac(e, t, n) {
  return Tc(t)
    ? `internal:attr=[${e}=${ue(t, (n == null ? void 0 : n.exact) || !1)}]`
    : `internal:attr=[${e}=${t}]`;
}
function kJ(e, t) {
  return Tc(t)
    ? `internal:testid=[${e}=${ue(t, !0)}]`
    : `internal:testid=[${e}=${t}]`;
}
function TJ(e, t) {
  return 'internal:label=' + ft(e, !!(t != null && t.exact));
}
function bJ(e, t) {
  return Ac('alt', e, t);
}
function _J(e, t) {
  return Ac('title', e, t);
}
function NJ(e, t) {
  return Ac('placeholder', e, t);
}
function CJ(e, t) {
  return 'internal:text=' + ft(e, !!(t != null && t.exact));
}
function LJ(e, t = {}) {
  const n = [];
  return (
    t.checked !== void 0 && n.push(['checked', String(t.checked)]),
    t.disabled !== void 0 && n.push(['disabled', String(t.disabled)]),
    t.selected !== void 0 && n.push(['selected', String(t.selected)]),
    t.expanded !== void 0 && n.push(['expanded', String(t.expanded)]),
    t.includeHidden !== void 0 &&
      n.push(['include-hidden', String(t.includeHidden)]),
    t.level !== void 0 && n.push(['level', String(t.level)]),
    t.name !== void 0 &&
      n.push(['name', Tc(t.name) ? ue(t.name, !!t.exact) : String(t.name)]),
    t.pressed !== void 0 && n.push(['pressed', String(t.pressed)]),
    `internal:role=${e}${n.map(([r, o]) => `[${r}=${o}]`).join('')}`
  );
}
const fr = Symbol('selector'),
  AJ = Symbol('injectedScript');
class Ln {
  constructor(t, n, r) {
    if (
      ((this[fr] = n),
      (this[AJ] = t),
      r != null &&
        r.hasText &&
        (n += ` >> internal:has-text=${ft(r.hasText, !1)}`),
      r != null &&
        r.hasNotText &&
        (n += ` >> internal:has-not-text=${ft(r.hasNotText, !1)}`),
      r != null &&
        r.has &&
        (n += ' >> internal:has=' + JSON.stringify(r.has[fr])),
      r != null &&
        r.hasNot &&
        (n += ' >> internal:has-not=' + JSON.stringify(r.hasNot[fr])),
      n)
    ) {
      const i = t.parseSelector(n);
      (this.element = t.querySelector(i, t.document, !1)),
        (this.elements = t.querySelectorAll(i, t.document));
    }
    const o = n,
      s = this;
    (s.locator = (i, l) => new Ln(t, o ? o + ' >> ' + i : i, l)),
      (s.getByTestId = (i) =>
        s.locator(
          kJ(t.testIdAttributeNameForStrictErrorAndConsoleCodegen(), i)
        )),
      (s.getByAltText = (i, l) => s.locator(bJ(i, l))),
      (s.getByLabel = (i, l) => s.locator(TJ(i, l))),
      (s.getByPlaceholder = (i, l) => s.locator(NJ(i, l))),
      (s.getByText = (i, l) => s.locator(CJ(i, l))),
      (s.getByTitle = (i, l) => s.locator(_J(i, l))),
      (s.getByRole = (i, l = {}) => s.locator(LJ(i, l))),
      (s.filter = (i) => new Ln(t, n, i)),
      (s.first = () => s.locator('nth=0')),
      (s.last = () => s.locator('nth=-1')),
      (s.nth = (i) => s.locator(`nth=${i}`)),
      (s.and = (i) =>
        new Ln(t, o + ' >> internal:and=' + JSON.stringify(i[fr]))),
      (s.or = (i) => new Ln(t, o + ' >> internal:or=' + JSON.stringify(i[fr])));
  }
}
class $J {
  constructor(t) {
    (this._injectedScript = t),
      !this._injectedScript.window.playwright &&
        ((this._injectedScript.window.playwright = {
          $: (n, r) => this._querySelector(n, !!r),
          $$: (n) => this._querySelectorAll(n),
          inspect: (n) => this._inspect(n),
          selector: (n) => this._selector(n),
          generateLocator: (n, r) => this._generateLocator(n, r),
          resume: () => this._resume(),
          ...new Ln(t, ''),
        }),
        delete this._injectedScript.window.playwright.filter,
        delete this._injectedScript.window.playwright.first,
        delete this._injectedScript.window.playwright.last,
        delete this._injectedScript.window.playwright.nth,
        delete this._injectedScript.window.playwright.and,
        delete this._injectedScript.window.playwright.or);
  }
  _querySelector(t, n) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.query('Playwright >> selector').");
    const r = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelector(
      r,
      this._injectedScript.document,
      n
    );
  }
  _querySelectorAll(t) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.$$('Playwright >> selector').");
    const n = this._injectedScript.parseSelector(t);
    return this._injectedScript.querySelectorAll(
      n,
      this._injectedScript.document
    );
  }
  _inspect(t) {
    if (typeof t != 'string')
      throw new Error("Usage: playwright.inspect('Playwright >> selector').");
    this._injectedScript.window.inspect(this._querySelector(t, !1));
  }
  _selector(t) {
    if (!(t instanceof Element))
      throw new Error('Usage: playwright.selector(element).');
    return Wr(
      this._injectedScript,
      t,
      this._injectedScript.testIdAttributeNameForStrictErrorAndConsoleCodegen()
    ).selector;
  }
  _generateLocator(t, n) {
    if (!(t instanceof Element))
      throw new Error('Usage: playwright.locator(element).');
    const r = Wr(
      this._injectedScript,
      t,
      this._injectedScript.testIdAttributeNameForStrictErrorAndConsoleCodegen()
    ).selector;
    return cn(n || 'javascript', r);
  }
  _resume() {
    this._injectedScript.window.__pw_resume().catch(() => {});
  }
}
function qJ(e, t) {
  e = e
    .replace(/AriaRole\s*\.\s*([\w]+)/g, (o, s) => s.toLowerCase())
    .replace(
      /(get_by_role|getByRole)\s*\(\s*(?:["'`])([^'"`]+)['"`]/g,
      (o, s, i) => `${s}(${i.toLowerCase()}`
    );
  const n = [];
  let r = '';
  for (let o = 0; o < e.length; ++o) {
    const s = e[o];
    if (s !== '"' && s !== "'" && s !== '`' && s !== '/') {
      r += s;
      continue;
    }
    const i = e[o - 1] === 'r' || e[o] === '/';
    ++o;
    let l = '';
    for (; o < e.length; ) {
      if (e[o] === '\\') {
        i
          ? (e[o + 1] !== s && (l += e[o]), ++o, (l += e[o]))
          : (++o,
            e[o] === 'n'
              ? (l += `
`)
              : e[o] === 'r'
              ? (l += '\r')
              : e[o] === 't'
              ? (l += '	')
              : (l += e[o])),
          ++o;
        continue;
      }
      if (e[o] !== s) {
        l += e[o++];
        continue;
      }
      break;
    }
    n.push({ quote: s, text: l }),
      (r += (s === '/' ? 'r' : '') + '$' + n.length);
  }
  return (
    (r = r
      .toLowerCase()
      .replace(/get_by_alt_text/g, 'getbyalttext')
      .replace(/get_by_test_id/g, 'getbytestid')
      .replace(/get_by_([\w]+)/g, 'getby$1')
      .replace(/has_not_text/g, 'hasnottext')
      .replace(/has_text/g, 'hastext')
      .replace(/has_not/g, 'hasnot')
      .replace(/frame_locator/g, 'framelocator')
      .replace(/[{}\s]/g, '')
      .replace(/new\(\)/g, '')
      .replace(/new[\w]+\.[\w]+options\(\)/g, '')
      .replace(/\.set/g, ',set')
      .replace(/\.or_\(/g, 'or(')
      .replace(/\.and_\(/g, 'and(')
      .replace(/:/g, '=')
      .replace(/,re\.ignorecase/g, 'i')
      .replace(/,pattern.case_insensitive/g, 'i')
      .replace(/,regexoptions.ignorecase/g, 'i')
      .replace(/re.compile\(([^)]+)\)/g, '$1')
      .replace(/pattern.compile\(([^)]+)\)/g, 'r$1')
      .replace(/newregex\(([^)]+)\)/g, 'r$1')
      .replace(/string=/g, '=')
      .replace(/regex=/g, '=')
      .replace(/,,/g, ',')),
    Ap(r, n, t)
  );
}
function wu(e) {
  return [...e.matchAll(/\$\d+/g)].length;
}
function Su(e, t) {
  return e.replace(/\$(\d+)/g, (n, r) => `$${r - t}`);
}
function Ap(e, t, n) {
  for (;;) {
    const o = e.match(/filter\(,?(has=|hasnot=|sethas\(|sethasnot\()/);
    if (!o) break;
    const s = o.index + o[0].length;
    let i = 0,
      l = s;
    for (
      ;
      l < e.length && (e[l] === '(' ? i++ : e[l] === ')' && i--, !(i < 0));
      l++
    );
    let c = e.substring(0, s),
      a = 0;
    ['sethas(', 'sethasnot('].includes(o[1]) &&
      ((a = 1),
      (c = c.replace(/sethas\($/, 'has=').replace(/sethasnot\($/, 'hasnot=')));
    const u = wu(e.substring(0, s)),
      h = Su(e.substring(s, l), u),
      d = wu(h),
      v = t.slice(u, u + d),
      m = JSON.stringify(Ap(h, v, n));
    e = c.replace(/=$/, '2=') + `$${u + 1}` + Su(e.substring(l + a), d - 1);
    const E = t.slice(0, u),
      S = t.slice(u + d);
    t = E.concat([{ quote: '"', text: m }]).concat(S);
  }
  e = e
    .replace(
      /\,set([\w]+)\(([^)]+)\)/g,
      (o, s, i) => ',' + s.toLowerCase() + '=' + i.toLowerCase()
    )
    .replace(/framelocator\(([^)]+)\)/g, '$1.internal:control=enter-frame')
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      'locator($1).internal:has-text=$2'
    )
    .replace(
      /locator\(([^)]+),hasnottext=([^),]+)\)/g,
      'locator($1).internal:has-not-text=$2'
    )
    .replace(
      /locator\(([^)]+),hastext=([^),]+)\)/g,
      'locator($1).internal:has-text=$2'
    )
    .replace(/locator\(([^)]+)\)/g, '$1')
    .replace(/getbyrole\(([^)]+)\)/g, 'internal:role=$1')
    .replace(/getbytext\(([^)]+)\)/g, 'internal:text=$1')
    .replace(/getbylabel\(([^)]+)\)/g, 'internal:label=$1')
    .replace(/getbytestid\(([^)]+)\)/g, `internal:testid=[${n}=$1]`)
    .replace(
      /getby(placeholder|alt|title)(?:text)?\(([^)]+)\)/g,
      'internal:attr=[$1=$2]'
    )
    .replace(/first(\(\))?/g, 'nth=0')
    .replace(/last(\(\))?/g, 'nth=-1')
    .replace(/nth\(([^)]+)\)/g, 'nth=$1')
    .replace(/filter\(,?hastext=([^)]+)\)/g, 'internal:has-text=$1')
    .replace(/filter\(,?hasnottext=([^)]+)\)/g, 'internal:has-not-text=$1')
    .replace(/filter\(,?has2=([^)]+)\)/g, 'internal:has=$1')
    .replace(/filter\(,?hasnot2=([^)]+)\)/g, 'internal:has-not=$1')
    .replace(/,exact=false/g, '')
    .replace(/,exact=true/g, 's')
    .replace(/\,/g, '][');
  const r = e.split('.');
  for (let o = 0; o < r.length - 1; o++)
    if (
      r[o] === 'internal:control=enter-frame' &&
      r[o + 1].startsWith('nth=')
    ) {
      const [s] = r.splice(o, 1);
      r.splice(o + 1, 0, s);
    }
  return r
    .map((o) =>
      !o.startsWith('internal:') || o === 'internal:control'
        ? o.replace(/\$(\d+)/g, (s, i) => t[+i - 1].text)
        : ((o = o.includes('[') ? o.replace(/\]/, '') + ']' : o),
          (o = o
            .replace(/(?:r)\$(\d+)(i)?/g, (s, i, l) => {
              const c = t[+i - 1];
              return o.startsWith('internal:attr') ||
                o.startsWith('internal:testid') ||
                o.startsWith('internal:role')
                ? new RegExp(c.text) + (l || '')
                : ft(new RegExp(c.text, l), !1);
            })
            .replace(/\$(\d+)(i|s)?/g, (s, i, l) => {
              const c = t[+i - 1];
              return o.startsWith('internal:has=') ||
                o.startsWith('internal:has-not=')
                ? c.text
                : o.startsWith('internal:testid')
                ? ue(c.text, !0)
                : o.startsWith('internal:attr') || o.startsWith('internal:role')
                ? ue(c.text, l === 's')
                : ft(c.text, l === 's');
            })),
          o)
    )
    .join(' >> ');
}
function RJ(e, t, n) {
  try {
    return Vr(t), t;
  } catch {}
  try {
    const r = qJ(t, n),
      o = gh(e, r),
      s = Eu(t);
    if (o.some((i) => Eu(i) === s)) return r;
  } catch {}
  return '';
}
function Eu(e) {
  return e.replace(/\s/g, '').replace(/["`]/g, "'");
}
const xu = ({
    tabs: e,
    selectedTab: t,
    setSelectedTab: n,
    leftToolbar: r,
    rightToolbar: o,
  }) =>
    y('div', {
      className: 'tabbed-pane',
      children: A('div', {
        className: 'vbox',
        children: [
          y(xl, {
            children: [
              ...(r || []),
              ...e.map((s) =>
                y($p, {
                  id: s.id,
                  title: s.title,
                  count: s.count,
                  selected: t === s.id,
                  onSelect: n,
                })
              ),
              y('div', { className: 'spacer' }),
              ...(o || []),
            ],
          }),
          e.map((s) => {
            if (s.component)
              return y(
                'div',
                {
                  className: 'tab-content',
                  style: { display: t === s.id ? 'inherit' : 'none' },
                  children: s.component,
                },
                s.id
              );
            if (t === s.id)
              return y(
                'div',
                { className: 'tab-content', children: s.render() },
                s.id
              );
          }),
        ],
      }),
    }),
  $p = ({ id: e, title: t, count: n, selected: r, onSelect: o }) =>
    A(
      'div',
      {
        className: 'tabbed-pane-tab ' + (r ? 'selected' : ''),
        onClick: () => o(e),
        children: [
          y('div', { className: 'tabbed-pane-tab-label', children: t }),
          y('div', { className: 'tabbed-pane-tab-count', children: n || '' }),
        ],
      },
      e
    ),
  IJ = ({ action: e, sdkLanguage: t, testIdAttributeName: n }) => {
    const [r, o] = bs(),
      [s, i] = q.useState('action'),
      [l, c] = q.useState(!1),
      [a, u] = q.useState(''),
      [h, d] = q.useState(!1),
      { snapshots: v } = q.useMemo(() => {
        if (!e) return { snapshots: {} };
        let T = e.beforeSnapshot
            ? { action: e, snapshotName: e.beforeSnapshot }
            : void 0,
          L = e;
        for (; !T && L; )
          (L = dv(L)),
            (T =
              L != null && L.afterSnapshot
                ? {
                    action: L,
                    snapshotName: L == null ? void 0 : L.afterSnapshot,
                  }
                : void 0);
        const U = e.afterSnapshot
          ? { action: e, snapshotName: e.afterSnapshot }
          : T;
        return {
          snapshots: {
            action: e.inputSnapshot
              ? { action: e, snapshotName: e.inputSnapshot }
              : U,
            before: T,
            after: U,
          },
        };
      }, [e]),
      {
        snapshotInfoUrl: m,
        snapshotUrl: E,
        pointX: S,
        pointY: p,
        popoutUrl: f,
      } = q.useMemo(() => {
        var P, V;
        const T = v[s];
        if (!T) return { snapshotUrl: PJ };
        const L = new URLSearchParams();
        L.set('trace', Wn(T.action).traceUrl), L.set('name', T.snapshotName);
        const U = new URL(
            `snapshot/${T.action.pageId}?${L.toString()}`,
            window.location.href
          ).toString(),
          X = new URL(
            `snapshotInfo/${T.action.pageId}?${L.toString()}`,
            window.location.href
          ).toString(),
          ee =
            s === 'action'
              ? (P = T.action.point) == null
                ? void 0
                : P.x
              : void 0,
          Se =
            s === 'action'
              ? (V = T.action.point) == null
                ? void 0
                : V.y
              : void 0,
          C = new URLSearchParams();
        C.set('r', U), C.set('trace', Wn(T.action).traceUrl);
        const D = new URL(
          `popout.html?${C.toString()}`,
          window.location.href
        ).toString();
        return {
          snapshots: v,
          snapshotInfoUrl: X,
          snapshotUrl: U,
          pointX: ee,
          pointY: Se,
          popoutUrl: D,
        };
      }, [v, s]),
      g = q.useRef(null),
      w = q.useRef(null),
      [k, b] = q.useState({ viewport: Tu, url: '' }),
      x = q.useRef({ iteration: 0, visibleIframe: 0 });
    q.useEffect(() => {
      (async () => {
        const T = x.current.iteration + 1,
          L = 1 - x.current.visibleIframe;
        x.current.iteration = T;
        const U = { url: '', viewport: Tu };
        if (m) {
          const Se = await (await fetch(m)).json();
          Se.error || ((U.url = Se.url), (U.viewport = Se.viewport));
        }
        if (x.current.iteration !== T) return;
        const X = [g, w][L].current;
        if (X) {
          let ee = () => {};
          const Se = new Promise((C) => (ee = C));
          try {
            X.addEventListener('load', ee), X.addEventListener('error', ee);
            const C = E + (S === void 0 ? '' : `&pointX=${S}&pointY=${p}`);
            X.contentWindow ? X.contentWindow.location.replace(C) : (X.src = C),
              await Se;
          } catch {
          } finally {
            X.removeEventListener('load', ee),
              X.removeEventListener('error', ee);
          }
        }
        x.current.iteration === T && ((x.current.visibleIframe = L), b(U));
      })();
    }, [E, m, S, p]);
    const N = 40,
      R = { width: k.viewport.width, height: k.viewport.height + N },
      I = Math.min(r.width / R.width, r.height / R.height, 1),
      H = { x: (r.width - R.width) / 2, y: (r.height - R.height) / 2 };
    return A('div', {
      className: 'snapshot-tab',
      tabIndex: 0,
      onKeyDown: (T) => {
        T.key === 'Escape' && l && c(!1);
      },
      children: [
        y(ku, {
          isInspecting: l,
          sdkLanguage: t,
          testIdAttributeName: n,
          highlightedLocator: a,
          setHighlightedLocator: u,
          iframe: g.current,
        }),
        y(ku, {
          isInspecting: l,
          sdkLanguage: t,
          testIdAttributeName: n,
          highlightedLocator: a,
          setHighlightedLocator: u,
          iframe: w.current,
        }),
        A(xl, {
          children: [
            y(So, {
              title: 'Pick locator',
              disabled: !f,
              toggled: h,
              onClick: () => {
                d(!h), u(''), c(!h);
              },
              children: 'Pick locator',
            }),
            ['action', 'before', 'after'].map((T) =>
              y($p, {
                id: T,
                title: DJ(T),
                selected: s === T,
                onSelect: () => i(T),
              })
            ),
            y('div', { style: { flex: 'auto' } }),
            y(So, {
              icon: 'link-external',
              title: 'Open snapshot in a new tab',
              disabled: !f,
              onClick: () => {
                const T = window.open(f || '', '_blank');
                T == null ||
                  T.addEventListener('DOMContentLoaded', () => {
                    const L = new _p(T, !1, t, n, 1, 'chromium', []);
                    new $J(L);
                  });
              },
            }),
          ],
        }),
        h &&
          A(xl, {
            noMinHeight: !0,
            children: [
              y(So, {
                icon: 'microscope',
                title: 'Pick locator',
                disabled: !f,
                toggled: l,
                onClick: () => {
                  c(!l);
                },
              }),
              y(Dh, {
                text: a,
                language: t,
                readOnly: !f,
                focusOnChange: !0,
                wrapLines: !0,
                onChange: (T) => {
                  u(T), c(!1);
                },
              }),
              y(So, {
                icon: 'files',
                title: 'Copy locator',
                disabled: !f,
                onClick: () => {
                  im(a);
                },
              }),
            ],
          }),
        y('div', {
          ref: o,
          className: 'snapshot-wrapper',
          children: A('div', {
            className: 'snapshot-container',
            style: {
              width: R.width + 'px',
              height: R.height + 'px',
              transform: `translate(${H.x}px, ${H.y}px) scale(${I})`,
            },
            children: [
              A('div', {
                className: 'window-header',
                children: [
                  A('div', {
                    style: { whiteSpace: 'nowrap' },
                    children: [
                      y('span', {
                        className: 'window-dot',
                        style: { backgroundColor: 'rgb(242, 95, 88)' },
                      }),
                      y('span', {
                        className: 'window-dot',
                        style: { backgroundColor: 'rgb(251, 190, 60)' },
                      }),
                      y('span', {
                        className: 'window-dot',
                        style: { backgroundColor: 'rgb(88, 203, 66)' },
                      }),
                    ],
                  }),
                  y('div', {
                    className: 'window-address-bar',
                    title: k.url || 'about:blank',
                    children: k.url || 'about:blank',
                  }),
                  y('div', {
                    style: { marginLeft: 'auto' },
                    children: A('div', {
                      children: [
                        y('span', { className: 'window-menu-bar' }),
                        y('span', { className: 'window-menu-bar' }),
                        y('span', { className: 'window-menu-bar' }),
                      ],
                    }),
                  }),
                ],
              }),
              A('div', {
                className: 'snapshot-switcher',
                children: [
                  y('iframe', {
                    ref: g,
                    name: 'snapshot',
                    className:
                      x.current.visibleIframe === 0 ? 'snapshot-visible' : '',
                  }),
                  y('iframe', {
                    ref: w,
                    name: 'snapshot',
                    className:
                      x.current.visibleIframe === 1 ? 'snapshot-visible' : '',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  };
function DJ(e) {
  return e === 'before'
    ? 'Before'
    : e === 'after'
    ? 'After'
    : e === 'action'
    ? 'Action'
    : e;
}
const ku = ({
    iframe: e,
    isInspecting: t,
    sdkLanguage: n,
    testIdAttributeName: r,
    highlightedLocator: o,
    setHighlightedLocator: s,
  }) => (
    q.useEffect(() => {
      const i = e == null ? void 0 : e.contentWindow;
      let l;
      try {
        if (!i || ((l = i._recorder), !l && !t && !o)) return;
      } catch {
        return;
      }
      if (!l) {
        const a = new _p(i, !1, n, r, 1, 'chromium', []);
        (l = new wJ(a, {
          async setSelector(u) {
            l.setUIState({ mode: 'none', language: n, testIdAttributeName: r }),
              s(cn('javascript', u, !1, !0));
          },
        })),
          (i._recorder = l);
      }
      const c = RJ(n, o, r);
      l.setUIState({
        mode: t ? 'inspecting' : 'none',
        actionSelector: c,
        language: n,
        testIdAttributeName: r,
      });
    }, [e, t, o, s, n, r]),
    y(an, {})
  ),
  Tu = { width: 1280, height: 720 },
  PJ = 'data:text/html,<body style="background: #ddd"></body>';
const MJ = vh,
  OJ = ({ action: e, setSelectedFrame: t, selectedFrame: n }) => {
    const r = (e == null ? void 0 : e.stack) || [];
    return y(MJ, {
      dataTestId: 'stack-trace',
      items: r,
      selectedItem: r[n],
      render: (o) => {
        const s = o.file[1] === ':' ? '\\' : '/';
        return A(an, {
          children: [
            y('span', {
              className: 'stack-trace-frame-function',
              children: o.function || '(anonymous)',
            }),
            y('span', {
              className: 'stack-trace-frame-location',
              children: o.file.split(s).pop(),
            }),
            y('span', {
              className: 'stack-trace-frame-line',
              children: ':' + o.line,
            }),
          ],
        });
      },
      onSelected: (o) => t(r.indexOf(o)),
    });
  },
  UJ = ({
    action: e,
    sources: t,
    hideStackFrames: n,
    rootDir: r,
    fallbackLocation: o,
  }) => {
    const [s, i] = q.useState(),
      [l, c] = q.useState(0);
    q.useEffect(() => {
      s !== e && (i(e), c(0));
    }, [e, s, i, c]);
    const {
      source: a,
      highlight: u,
      targetLine: h,
      fileName: d,
    } = sm(
      async () => {
        var w, k, b;
        const v = (w = e == null ? void 0 : e.stack) == null ? void 0 : w[l],
          m = !(v != null && v.file);
        if (m && !o)
          return {
            source: { file: '', errors: [], content: void 0 },
            targetLine: 0,
            highlight: [],
          };
        const E = m ? o.file : v.file;
        let S = t.get(E);
        S ||
          ((S = {
            errors:
              ((k = o == null ? void 0 : o.source) == null
                ? void 0
                : k.errors) || [],
            content: void 0,
          }),
          t.set(E, S));
        const p = m
            ? (o == null ? void 0 : o.line) ||
              ((b = S.errors[0]) == null ? void 0 : b.line) ||
              0
            : v.line,
          f = r && E.startsWith(r) ? E.substring(r.length + 1) : E,
          g = S.errors.map((x) => ({
            type: 'error',
            line: x.line,
            message: x.message,
          }));
        if ((g.push({ line: p, type: 'running' }), S.content === void 0 || m)) {
          const x = await FJ(E);
          try {
            let N = await fetch(`sha1/src@${x}.txt`);
            N.status === 404 && (N = await fetch(`file?path=${E}`)),
              (S.content = await N.text());
          } catch {
            S.content = `<Unable to read "${E}">`;
          }
        }
        return { source: S, highlight: g, targetLine: p, fileName: f };
      },
      [e, l, r, o],
      { source: { errors: [], content: 'Loading…' }, highlight: [] }
    );
    return A(vl, {
      sidebarSize: 200,
      orientation: 'vertical',
      sidebarHidden: n,
      children: [
        A('div', {
          className: 'vbox',
          'data-testid': 'source-code',
          children: [
            d && y('div', { className: 'source-tab-file-name', children: d }),
            y(Dh, {
              text: a.content || '',
              language: 'javascript',
              highlight: u,
              revealLine: h,
              readOnly: !0,
              lineNumbers: !0,
            }),
          ],
        }),
        y(OJ, { action: e, selectedFrame: l, setSelectedFrame: c }),
      ],
    });
  };
async function FJ(e) {
  const t = new TextEncoder().encode(e),
    n = await crypto.subtle.digest('SHA-1', t),
    r = [],
    o = new DataView(n);
  for (let s = 0; s < o.byteLength; s += 1) {
    const i = o.getUint8(s).toString(16).padStart(2, '0');
    r.push(i);
  }
  return r.join('');
}
const qp = { width: 200, height: 45 },
  zJ = ({ model: e, boundaries: t, previewPoint: n }) => {
    var a, u;
    const [r, o] = bs();
    let s = 0;
    if (o.current && n) {
      const h = o.current.getBoundingClientRect();
      s = ((n.clientY - h.top) / qp.height) | 0;
    }
    const i =
      (u = (a = e == null ? void 0 : e.pages) == null ? void 0 : a[s]) == null
        ? void 0
        : u.screencastFrames;
    let l, c;
    if (n !== void 0 && i) {
      const h = t.minimum + ((t.maximum - t.minimum) * n.x) / r.width;
      (l = i[Uu(i, h, Rp) - 1]),
        (c = l
          ? Ip(
              { width: l.width, height: l.height },
              {
                width: ((window.innerWidth * 3) / 4) | 0,
                height: ((window.innerHeight * 3) / 4) | 0,
              }
            )
          : void 0);
    }
    return A('div', {
      className: 'film-strip',
      ref: o,
      children: [
        e == null
          ? void 0
          : e.pages
              .filter((h) => h.screencastFrames.length)
              .map((h, d) =>
                y(HJ, { boundaries: t, page: h, width: r.width }, d)
              ),
        l &&
          c &&
          (n == null ? void 0 : n.x) !== void 0 &&
          y('div', {
            className: 'film-strip-hover',
            style: {
              width: c.width,
              height: c.height,
              top: r.bottom + 5,
              left: Math.min(n.x, r.width - c.width - 10),
            },
            children: y('img', {
              src: `sha1/${l.sha1}`,
              width: c.width,
              height: c.height,
            }),
          }),
      ],
    });
  },
  HJ = ({ boundaries: e, page: t, width: n }) => {
    const r = { width: 0, height: 0 },
      o = t.screencastFrames;
    for (const S of o)
      (r.width = Math.max(r.width, S.width)),
        (r.height = Math.max(r.height, S.height));
    const s = Ip(r, qp),
      i = 2.5,
      l = o[0].timestamp,
      c = o[o.length - 1].timestamp,
      a = e.maximum - e.minimum,
      u = ((l - e.minimum) / a) * n,
      h = ((e.maximum - c) / a) * n,
      v = ((((c - l) / a) * n) / (s.width + 2 * i)) | 0,
      m = (c - l) / v,
      E = [];
    for (let S = 0; l && m && S < v; ++S) {
      const p = l + m * S,
        f = Uu(o, p, Rp) - 1;
      E.push(
        y(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: s.width,
              height: s.height,
              backgroundImage: `url(sha1/${o[f].sha1})`,
              backgroundSize: `${s.width}px ${s.height}px`,
              margin: i,
              marginRight: i,
            },
          },
          S
        )
      );
    }
    return (
      E.push(
        y(
          'div',
          {
            className: 'film-strip-frame',
            style: {
              width: s.width,
              height: s.height,
              backgroundImage: `url(sha1/${o[o.length - 1].sha1})`,
              backgroundSize: `${s.width}px ${s.height}px`,
              margin: i,
              marginRight: i,
            },
          },
          E.length
        )
      ),
      y('div', {
        className: 'film-strip-lane',
        style: { marginLeft: u + 'px', marginRight: h + 'px' },
        children: E,
      })
    );
  };
function Rp(e, t) {
  return e - t.timestamp;
}
function Ip(e, t) {
  const n = Math.max(e.width / t.width, e.height / t.height);
  return { width: (e.width / n) | 0, height: (e.height / n) | 0 };
}
const BJ = ({
  model: e,
  selectedAction: t,
  onSelected: n,
  hideTimelineBars: r,
}) => {
  const [o, s] = bs(),
    i = q.useRef(null),
    [l, c] = q.useState(),
    [a, u] = q.useState(),
    { boundaries: h, offsets: d } = q.useMemo(() => {
      const w = {
        minimum: (e == null ? void 0 : e.startTime) || 0,
        maximum: (e == null ? void 0 : e.endTime) || 3e4,
      };
      return (
        w.minimum > w.maximum && ((w.minimum = 0), (w.maximum = 3e4)),
        (w.maximum += (w.maximum - w.minimum) / 20),
        { boundaries: w, offsets: jJ(o.width, w) }
      );
    }, [o.width, e]),
    v = q.useMemo(() => {
      const w = [];
      for (const k of (e == null ? void 0 : e.actions) || []) {
        let b = bu(k.params.selector || '', 50);
        k.method === 'goto' && (b = bu(k.params.url || '', 50)),
          w.push({
            action: k,
            leftTime: k.startTime,
            rightTime: k.endTime,
            leftPosition: vr(o.width, h, k.startTime),
            rightPosition: vr(o.width, h, k.endTime),
            label: k.apiName + ' ' + b,
            title: k.endTime ? Un(k.endTime - k.startTime) : 'Timed Out',
            type: k.type + '.' + k.method,
            className: `${k.type}_${k.method}`.toLowerCase(),
          });
      }
      for (const k of (e == null ? void 0 : e.events) || []) {
        const b = k.time;
        w.push({
          event: k,
          leftTime: b,
          rightTime: b,
          leftPosition: vr(o.width, h, b),
          rightPosition: vr(o.width, h, b),
          label: k.method,
          title: void 0,
          type: k.class + '.' + k.method,
          className: `${k.class}_${k.method}`.toLowerCase(),
        });
      }
      return w;
    }, [e, h, o.width]),
    m = a !== void 0 ? v[a] : void 0;
  let E = v.find((w) => w.action === t);
  E = m || E;
  const S = (w) => {
      const k = bi(o.width, h, w),
        b = bi(o.width, h, w - 5),
        x = bi(o.width, h, w + 5);
      let N, R;
      for (let I = 0; I < v.length; I++) {
        const H = v[I],
          T = Math.max(H.leftTime, b),
          L = Math.min(H.rightTime, x),
          U = (H.leftTime + H.rightTime) / 2,
          X = Math.abs(k - U);
        T > L || ((N === void 0 || X < R) && ((N = I), (R = X)));
      }
      return N;
    },
    p = (w) => {
      if (!s.current) return;
      const k = w.clientX - s.current.getBoundingClientRect().left,
        b = S(k);
      c({ x: k, clientY: w.clientY }), u(b);
    };
  return y('div', {
    style: {
      flex: 'none',
      borderBottom: '1px solid var(--vscode-panel-border)',
    },
    children: A('div', {
      ref: s,
      className: 'timeline-view',
      onMouseMove: p,
      onMouseOver: p,
      onMouseLeave: () => {
        c(void 0), u(void 0);
      },
      onClick: (w) => {
        if ((c(void 0), !s.current)) return;
        const k = w.clientX - s.current.getBoundingClientRect().left,
          b = S(k);
        if (b === void 0) return;
        const x = v[b].action;
        x && n(x);
      },
      children: [
        y('div', {
          className: 'timeline-grid',
          children: d.map((w, k) =>
            y(
              'div',
              {
                className: 'timeline-divider',
                style: { left: w.position + 'px' },
                children: y('div', {
                  className: 'timeline-time',
                  children: Un(w.time - h.minimum),
                }),
              },
              k
            )
          ),
        }),
        !r &&
          y('div', {
            className: 'timeline-lane timeline-labels',
            children: v.map((w, k) =>
              y(
                'div',
                {
                  className:
                    'timeline-label ' +
                    w.className +
                    (E === w ? ' selected' : ''),
                  style: { left: w.leftPosition, maxWidth: 100 },
                  children: w.label,
                },
                k
              )
            ),
          }),
        !r &&
          y('div', {
            className: 'timeline-lane timeline-bars',
            ref: i,
            children: v.map((w, k) =>
              y(
                'div',
                {
                  className:
                    'timeline-bar ' +
                    (w.action ? 'action ' : '') +
                    (w.event ? 'event ' : '') +
                    w.className +
                    (E === w ? ' selected' : ''),
                  style: {
                    left: w.leftPosition + 'px',
                    width: Math.max(1, w.rightPosition - w.leftPosition) + 'px',
                    top: VJ(w) + 'px',
                  },
                  title: w.title,
                },
                k
              )
            ),
          }),
        y(zJ, { model: e, boundaries: h, previewPoint: l }),
        y('div', {
          className: 'timeline-marker timeline-marker-hover',
          style: {
            display: l !== void 0 ? 'block' : 'none',
            left: ((l == null ? void 0 : l.x) || 0) + 'px',
          },
        }),
      ],
    }),
  });
};
function jJ(e, t) {
  let r = e / 64;
  const o = t.maximum - t.minimum,
    s = e / o;
  let i = o / r;
  const l = Math.ceil(Math.log(i) / Math.LN10);
  (i = Math.pow(10, l)),
    i * s >= 5 * 64 && (i = i / 5),
    i * s >= 2 * 64 && (i = i / 2);
  const c = t.minimum;
  let a = t.maximum;
  (a += 64 / s), (r = Math.ceil((a - c) / i)), i || (r = 0);
  const u = [];
  for (let h = 0; h < r; ++h) {
    const d = c + i * h;
    u.push({ position: vr(e, t, d), time: d });
  }
  return u;
}
function vr(e, t, n) {
  return ((n - t.minimum) / (t.maximum - t.minimum)) * e;
}
function bi(e, t, n) {
  return (n / e) * (t.maximum - t.minimum) + t.minimum;
}
function bu(e, t) {
  return e.length <= t ? e : e.substring(0, t - 1) + '…';
}
function VJ(e) {
  var t;
  return e.event
    ? 22
    : ((t = e.action) == null ? void 0 : t.method) === 'waitForEventInfo'
    ? 0
    : 11;
}
const WJ = ({ model: e }) => {
  var t, n;
  return e
    ? A('div', {
        className: 'metadata-view vbox',
        children: [
          y('div', {
            className: 'call-section',
            style: { paddingTop: 2 },
            children: 'Time',
          }),
          !!e.wallTime &&
            A('div', {
              className: 'call-line',
              children: [
                'start time:',
                y('span', {
                  className: 'call-value datetime',
                  title: new Date(e.wallTime).toLocaleString(),
                  children: new Date(e.wallTime).toLocaleString(),
                }),
              ],
            }),
          A('div', {
            className: 'call-line',
            children: [
              'duration:',
              y('span', {
                className: 'call-value number',
                title: Un(e.endTime - e.startTime),
                children: Un(e.endTime - e.startTime),
              }),
            ],
          }),
          y('div', { className: 'call-section', children: 'Browser' }),
          A('div', {
            className: 'call-line',
            children: [
              'engine:',
              y('span', {
                className: 'call-value string',
                title: e.browserName,
                children: e.browserName,
              }),
            ],
          }),
          e.platform &&
            A('div', {
              className: 'call-line',
              children: [
                'platform:',
                y('span', {
                  className: 'call-value string',
                  title: e.platform,
                  children: e.platform,
                }),
              ],
            }),
          e.options.userAgent &&
            A('div', {
              className: 'call-line',
              children: [
                'user agent:',
                y('span', {
                  className: 'call-value datetime',
                  title: e.options.userAgent,
                  children: e.options.userAgent,
                }),
              ],
            }),
          y('div', { className: 'call-section', children: 'Viewport' }),
          e.options.viewport &&
            A('div', {
              className: 'call-line',
              children: [
                'width:',
                y('span', {
                  className: 'call-value number',
                  title: String(
                    !!((t = e.options.viewport) != null && t.width)
                  ),
                  children: e.options.viewport.width,
                }),
              ],
            }),
          e.options.viewport &&
            A('div', {
              className: 'call-line',
              children: [
                'height:',
                y('span', {
                  className: 'call-value number',
                  title: String(
                    !!((n = e.options.viewport) != null && n.height)
                  ),
                  children: e.options.viewport.height,
                }),
              ],
            }),
          A('div', {
            className: 'call-line',
            children: [
              'is mobile:',
              y('span', {
                className: 'call-value boolean',
                title: String(!!e.options.isMobile),
                children: String(!!e.options.isMobile),
              }),
            ],
          }),
          e.options.deviceScaleFactor &&
            A('div', {
              className: 'call-line',
              children: [
                'device scale:',
                y('span', {
                  className: 'call-value number',
                  title: String(e.options.deviceScaleFactor),
                  children: String(e.options.deviceScaleFactor),
                }),
              ],
            }),
          y('div', { className: 'call-section', children: 'Counts' }),
          A('div', {
            className: 'call-line',
            children: [
              'pages:',
              y('span', {
                className: 'call-value number',
                children: e.pages.length,
              }),
            ],
          }),
          A('div', {
            className: 'call-line',
            children: [
              'actions:',
              y('span', {
                className: 'call-value number',
                children: e.actions.length,
              }),
            ],
          }),
          A('div', {
            className: 'call-line',
            children: [
              'events:',
              y('span', {
                className: 'call-value number',
                children: e.events.length,
              }),
            ],
          }),
        ],
      })
    : y(an, {});
};
const GJ = ({ imageDiff: e }) => {
    const [t, n] = q.useState(e.diff ? 'diff' : 'actual'),
      r = q.useRef(null),
      o = q.useRef(null),
      [s, i] = q.useState(0),
      l = (c) => {
        if (
          (r.current &&
            (r.current.style.minHeight = r.current.offsetHeight + 'px'),
          c && r.current && o.current)
        ) {
          const a = Math.max(
            0,
            (r.current.offsetWidth - o.current.offsetWidth) / 2 - 20
          );
          c === 'left' ? i(a) : c === 'right' && i(r.current.offsetWidth - a);
        }
      };
    return A('div', {
      className: 'vbox image-diff-view',
      children: [
        A('div', {
          className: 'hbox modes',
          children: [
            e.diff && y('div', { onClick: () => n('diff'), children: 'Diff' }),
            y('div', { onClick: () => n('actual'), children: 'Actual' }),
            y('div', { onClick: () => n('expected'), children: 'Expected' }),
          ],
        }),
        A('div', {
          style: { position: 'relative' },
          ref: r,
          children: [
            e.diff &&
              t === 'diff' &&
              y(Gt, { src: e.diff.attachment.path, onLoad: () => l() }),
            e.diff &&
              t === 'actual' &&
              A(_u, {
                sliderPosition: s,
                setSliderPosition: i,
                children: [
                  y(Gt, {
                    src: e.expected.attachment.path,
                    onLoad: () => l('right'),
                    imageRef: o,
                    style: { boxShadow: 'none' },
                  }),
                  y(Gt, { src: e.actual.attachment.path }),
                ],
              }),
            e.diff &&
              t === 'expected' &&
              A(_u, {
                sliderPosition: s,
                setSliderPosition: i,
                children: [
                  y(Gt, {
                    src: e.expected.attachment.path,
                    onLoad: () => l('left'),
                    imageRef: o,
                  }),
                  y(Gt, {
                    src: e.actual.attachment.path,
                    style: { boxShadow: 'none' },
                  }),
                ],
              }),
            !e.diff &&
              t === 'actual' &&
              y(Gt, { src: e.actual.attachment.path, onLoad: () => l() }),
            !e.diff &&
              t === 'expected' &&
              y(Gt, { src: e.expected.attachment.path, onLoad: () => l() }),
          ],
        }),
      ],
    });
  },
  _u = ({ children: e, sliderPosition: t, setSliderPosition: n }) => {
    const [r, o] = q.useState(null),
      s = t,
      i = q.Children.toArray(e);
    document.body.style.userSelect = r ? 'none' : 'inherit';
    const l = {
      ...No,
      zIndex: 100,
      cursor: 'ew-resize',
      left: r ? 0 : s - 4,
      right: r ? 0 : void 0,
      width: r ? 'initial' : 8,
    };
    return A(an, {
      children: [
        i[0],
        A('div', {
          style: { ...No },
          children: [
            y('div', {
              style: {
                ...No,
                display: 'flex',
                zIndex: 50,
                clip: `rect(0, ${s}px, auto, 0)`,
                backgroundColor: 'var(--vscode-panel-background)',
              },
              children: i[1],
            }),
            y('div', {
              style: l,
              onMouseDown: (c) => o({ offset: c.clientX, size: s }),
              onMouseUp: () => o(null),
              onMouseMove: (c) => {
                if (!c.buttons) o(null);
                else if (r) {
                  const u = c.clientX - r.offset,
                    h = r.size + u,
                    v = c.target.parentElement.getBoundingClientRect(),
                    m = Math.min(Math.max(0, h), v.width);
                  n(m);
                }
              },
            }),
            A('div', {
              'data-testid': 'test-result-image-mismatch-grip',
              style: {
                ...No,
                left: s - 1,
                width: 20,
                zIndex: 80,
                margin: '10px -10px',
                pointerEvents: 'none',
                display: 'flex',
              },
              children: [
                y('div', {
                  style: {
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 9,
                    width: 2,
                    backgroundColor: 'var(--vscode-panel-border)',
                  },
                }),
                A('svg', {
                  style: { fill: 'var(--vscode-panel-border)' },
                  viewBox: '0 0 27 20',
                  children: [
                    y('path', { d: 'M9.6 0L0 9.6l9.6 9.6z' }),
                    y('path', { d: 'M17 19.2l9.5-9.6L16.9 0z' }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Gt = ({ src: e, onLoad: t, imageRef: n, style: r }) => {
    const o = q.useRef(null),
      s = n ?? o,
      [i, l] = q.useState(null);
    return A('div', {
      className: 'image-wrapper',
      children: [
        A('div', {
          children: [
            y('span', {
              style: { flex: '1 1 0', textAlign: 'end' },
              children: i ? i.width : '',
            }),
            y('span', {
              style: { flex: 'none', margin: '0 5px' },
              children: 'x',
            }),
            y('span', {
              style: { flex: '1 1 0', textAlign: 'start' },
              children: i ? i.height : '',
            }),
          ],
        }),
        y('img', {
          src: e,
          onLoad: () => {
            t == null || t(),
              s.current &&
                l({
                  width: s.current.naturalWidth,
                  height: s.current.naturalHeight,
                });
          },
          ref: s,
          style: r,
        }),
      ],
    });
  },
  No = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 },
  QJ = ({ action: e }) => {
    var l, c, a, u;
    if (!e) return null;
    const t =
        (l = e.attachments) == null
          ? void 0
          : l.find(
              (h) => h.name.endsWith('-expected.png') && (h.path || h.sha1)
            ),
      n =
        (c = e.attachments) == null
          ? void 0
          : c.find((h) => h.name.endsWith('-actual.png') && (h.path || h.sha1)),
      r =
        (a = e.attachments) == null
          ? void 0
          : a.find((h) => h.name.endsWith('-diff.png') && (h.path || h.sha1)),
      o = new Set(
        (u = e.attachments) == null
          ? void 0
          : u.filter((h) => h.contentType.startsWith('image/'))
      ),
      s = new Set(e.attachments || []);
    o.forEach((h) => s.delete(h));
    const i = e.context.traceUrl;
    return A('div', {
      className: 'attachments-tab',
      children: [
        t &&
          n &&
          y('div', {
            className: 'attachments-section',
            children: 'Image diff',
          }),
        t &&
          n &&
          y(GJ, {
            imageDiff: {
              name: 'Image diff',
              expected: {
                attachment: { ...t, path: mn(i, t) },
                title: 'Expected',
              },
              actual: { attachment: { ...n, path: mn(i, n) } },
              diff: r ? { attachment: { ...r, path: mn(i, r) } } : void 0,
            },
          }),
        o.size
          ? y('div', {
              className: 'attachments-section',
              children: 'Screenshots',
            })
          : void 0,
        [...o].map((h, d) =>
          A(
            'div',
            {
              className: 'attachment-item',
              children: [
                y('div', { children: y('img', { src: mn(i, h) }) }),
                y('div', {
                  children: y('a', {
                    target: '_blank',
                    href: mn(i, h),
                    children: h.name,
                  }),
                }),
              ],
            },
            `screenshot-${d}`
          )
        ),
        s.size
          ? y('div', {
              className: 'attachments-section',
              children: 'Attachments',
            })
          : void 0,
        [...s].map((h, d) =>
          y(
            'div',
            {
              className: 'attachment-item',
              children: y('a', {
                target: '_blank',
                href: mn(i, h),
                children: h.name,
              }),
            },
            `attachment-${d}`
          )
        ),
      ],
    });
  };
function mn(e, t) {
  return t.sha1 ? 'sha1/' + t.sha1 + '?trace=' + e : 'file?path=' + t.path;
}
const iY = ({
  model: e,
  hideTimelineBars: t,
  hideStackFrames: n,
  showSourcesFirst: r,
  rootDir: o,
  fallbackLocation: s,
  initialSelection: i,
  onSelectionChanged: l,
  isLive: c,
  drawer: a,
}) => {
  const [u, h] = q.useState(void 0),
    [d, v] = q.useState(),
    [m, E] = q.useState('actions'),
    [S, p] = q.useState(r ? 'source' : 'call'),
    f = e ? d || u : void 0,
    g = q.useMemo(() => (e == null ? void 0 : e.sources) || new Map(), [e]);
  q.useEffect(() => {
    if (u && e != null && e.actions.includes(u)) return;
    const ee = e == null ? void 0 : e.actions.find((Se) => Se.error);
    i && e != null && e.actions.includes(i)
      ? h(i)
      : ee
      ? h(ee)
      : e != null && e.actions.length && h(e.actions[e.actions.length - 1]);
  }, [e, u, h, p, i]);
  const w = q.useCallback(
      (ee) => {
        h(ee), l == null || l(ee);
      },
      [h, l]
    ),
    { errors: k, warnings: b } = f ? Wd(f) : { errors: 0, warnings: 0 },
    x = k + b,
    N = f ? Qd(f).length : 0,
    R = (e == null ? void 0 : e.sdkLanguage) || 'javascript',
    I = {
      id: 'call',
      title: 'Call',
      render: () => y(KK, { action: f, sdkLanguage: R }),
    },
    H = {
      id: 'source',
      title: 'Source',
      render: () =>
        y(UJ, {
          action: f,
          sources: g,
          hideStackFrames: n,
          rootDir: o,
          fallbackLocation: s,
        }),
    },
    T = {
      id: 'console',
      title: 'Console',
      count: x,
      render: () => y(XK, { action: f }),
    },
    L = {
      id: 'network',
      title: 'Network',
      count: N,
      render: () => y(nX, { action: f }),
    },
    U = {
      id: 'attachments',
      title: 'Attachments',
      render: () => y(QJ, { action: f }),
    },
    X = r ? [H, T, L, I, U] : [I, T, L, H, U];
  return A('div', {
    className: 'vbox',
    children: [
      y(BJ, {
        model: e,
        selectedAction: f,
        onSelected: w,
        hideTimelineBars: t,
      }),
      A(vl, {
        sidebarSize: 250,
        orientation: a === 'bottom' ? 'vertical' : 'horizontal',
        children: [
          A(vl, {
            sidebarSize: 250,
            orientation: 'horizontal',
            sidebarIsFirst: !0,
            children: [
              y(IJ, {
                action: f,
                sdkLanguage: R,
                testIdAttributeName:
                  (e == null ? void 0 : e.testIdAttributeName) || 'data-testid',
              }),
              y(xu, {
                tabs: [
                  {
                    id: 'actions',
                    title: 'Actions',
                    count: 0,
                    component: y(Wv, {
                      sdkLanguage: R,
                      actions: (e == null ? void 0 : e.actions) || [],
                      selectedAction: e ? u : void 0,
                      onSelected: w,
                      onHighlighted: v,
                      revealConsole: () => p('console'),
                      isLive: c,
                    }),
                  },
                  {
                    id: 'metadata',
                    title: 'Metadata',
                    count: 0,
                    component: y(WJ, { model: e }),
                  },
                ],
                selectedTab: m,
                setSelectedTab: E,
              }),
            ],
          }),
          y(xu, { tabs: X, selectedTab: S, setSelectedTab: p }),
        ],
      }),
    ],
  });
};
let KJ = 0,
  Dp;
const Cl = new Map();
async function lY(e) {
  const t = new URLSearchParams(window.location.search).get('ws'),
    n = new WebSocket(
      `${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${
        window.location.hostname
      }:${window.location.port}/${t}`
    );
  return (
    await new Promise((r) => n.addEventListener('open', r)),
    n.addEventListener('close', e.onClose),
    n.addEventListener('message', (r) => {
      const o = JSON.parse(r.data),
        { id: s, result: i, error: l, method: c, params: a } = o;
      if (s) {
        const u = Cl.get(s);
        if (!u) return;
        Cl.delete(s), l ? u.reject(new Error(l)) : u.resolve(i);
      } else e.onEvent(c, a);
    }),
    (Dp = n),
    setInterval(() => Nu('ping').catch(() => {}), 3e4),
    Nu
  );
}
const Nu = async (e, t) => {
  const n = ++KJ,
    r = { id: n, method: e, params: t };
  return (
    Dp.send(JSON.stringify(r)),
    new Promise((o, s) => {
      Cl.set(n, { resolve: o, reject: s });
    })
  );
};
export {
  YK as E,
  oY as M,
  An as R,
  vl as S,
  So as T,
  iY as W,
  sX as _,
  y as a,
  YJ as b,
  lY as c,
  rY as d,
  nY as e,
  eY as f,
  tY as g,
  JJ as h,
  xl as i,
  A as j,
  sY as k,
  Bv as l,
  Un as m,
  Cu as n,
  On as o,
  q as r,
  Nr as s,
  ZJ as t,
  bs as u,
};
