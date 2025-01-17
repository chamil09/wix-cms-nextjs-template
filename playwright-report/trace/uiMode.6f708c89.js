import {
  u as ve,
  r as A,
  e as Se,
  _ as be,
  f as we,
  g as _e,
  a as p,
  R as g,
  h as ke,
  c as Te,
  s as de,
  j as E,
  S as Ee,
  i as Q,
  T as M,
  t as xe,
  E as Ce,
  m as ye,
  k as ae,
  W as Me,
  M as Re,
  l as Ne,
  b as Be,
  d as De,
} from './assets/wsPort-fb5048bf.js';
class Fe {
  constructor(e, t, s) {
    (this._tests = new Map()),
      (this._clearPreviousResultsWhenTestBegins = !1),
      (this._rootSuite = new I('', 'root')),
      (this._pathSeparator = e),
      (this._reporter = t),
      (this._reportConfig = s);
  }
  dispatch(e) {
    const { method: t, params: s } = e;
    if (t === 'onBegin') {
      this._onBegin(s.config, s.projects);
      return;
    }
    if (t === 'onTestBegin') {
      this._onTestBegin(s.testId, s.result);
      return;
    }
    if (t === 'onTestEnd') {
      this._onTestEnd(s.test, s.result);
      return;
    }
    if (t === 'onStepBegin') {
      this._onStepBegin(s.testId, s.resultId, s.step);
      return;
    }
    if (t === 'onStepEnd') {
      this._onStepEnd(s.testId, s.resultId, s.step);
      return;
    }
    if (t === 'onError') {
      this._onError(s.error);
      return;
    }
    if (t === 'onStdIO') {
      this._onStdIO(s.type, s.testId, s.resultId, s.data, s.isBase64);
      return;
    }
    if (t === 'onEnd') return this._onEnd(s.result);
    if (t === 'onExit') return this._onExit();
  }
  _setClearPreviousResultsWhenTestBegins() {
    this._clearPreviousResultsWhenTestBegins = !0;
  }
  _onBegin(e, t) {
    var s, n, r;
    this._rootDir =
      ((s = this._reportConfig) == null ? void 0 : s.rootDir) || e.rootDir;
    for (const o of t) {
      let c = this._rootSuite.suites.find((h) => h.project().id === o.id);
      c ||
        ((c = new I(o.name, 'project')),
        this._rootSuite.suites.push(c),
        (c.parent = this._rootSuite));
      const d = this._parseProject(o);
      if (
        ((c.project = () => d), this._mergeSuitesInto(o.suites, c), e.listOnly)
      ) {
        const h = new Set(),
          u = (f) => {
            f.tests.map((a) => a.testId).forEach((a) => h.add(a)),
              f.suites.forEach(u);
          };
        o.suites.forEach(u);
        const m = (f) => {
          (f.tests = f.tests.filter((a) => h.has(a.id))), f.suites.forEach(m);
        };
        m(c);
      }
    }
    (r = (n = this._reporter).onBegin) == null ||
      r.call(n, this._parseConfig(e), this._rootSuite);
  }
  _onTestBegin(e, t) {
    var r, o;
    const s = this._tests.get(e);
    this._clearPreviousResultsWhenTestBegins && s._clearResults();
    const n = s._createTestResult(t.id);
    (n.retry = t.retry),
      (n.workerIndex = t.workerIndex),
      (n.parallelIndex = t.parallelIndex),
      (n.startTime = new Date(t.startTime)),
      (n.statusEx = 'running'),
      (o = (r = this._reporter).onTestBegin) == null || o.call(r, s, n);
  }
  _onTestEnd(e, t) {
    var r, o;
    const s = this._tests.get(e.testId);
    (s.timeout = e.timeout),
      (s.expectedStatus = e.expectedStatus),
      (s.annotations = e.annotations);
    const n = s.resultsMap.get(t.id);
    (n.duration = t.duration),
      (n.status = t.status),
      (n.statusEx = t.status),
      (n.errors = t.errors),
      (n.attachments = t.attachments),
      (o = (r = this._reporter).onTestEnd) == null || o.call(r, s, n);
  }
  _onStepBegin(e, t, s) {
    var d, h;
    const n = this._tests.get(e),
      r = n.resultsMap.get(t),
      o = s.parentStepId ? r.stepMap.get(s.parentStepId) : void 0,
      c = {
        titlePath: () => [],
        title: s.title,
        category: s.category,
        location: this._absoluteLocation(s.location),
        parent: o,
        startTime: new Date(s.startTime),
        duration: 0,
        steps: [],
      };
    o ? o.steps.push(c) : r.steps.push(c),
      r.stepMap.set(s.id, c),
      (h = (d = this._reporter).onStepBegin) == null || h.call(d, n, r, c);
  }
  _onStepEnd(e, t, s) {
    var c, d;
    const n = this._tests.get(e),
      r = n.resultsMap.get(t),
      o = r.stepMap.get(s.id);
    (o.duration = s.duration),
      (o.error = s.error),
      (d = (c = this._reporter).onStepEnd) == null || d.call(c, n, r, o);
  }
  _onError(e) {
    var t, s;
    (s = (t = this._reporter).onError) == null || s.call(t, e);
  }
  _onStdIO(e, t, s, n, r) {
    var h, u, m, f;
    const o = r ? (globalThis.Buffer ? Buffer.from(n, 'base64') : atob(n)) : n,
      c = t ? this._tests.get(t) : void 0,
      d = c && s ? c.resultsMap.get(s) : void 0;
    e === 'stdout'
      ? (u = (h = this._reporter).onStdOut) == null || u.call(h, o, c, d)
      : (f = (m = this._reporter).onStdErr) == null || f.call(m, o, c, d);
  }
  _onEnd(e) {
    var t, s;
    return (
      ((s = (t = this._reporter).onEnd) == null ? void 0 : s.call(t, e)) ||
      void 0
    );
  }
  _onExit() {
    var e, t;
    return (t = (e = this._reporter).onExit) == null ? void 0 : t.call(e);
  }
  _parseConfig(e) {
    const t = { ...fe, ...e };
    return (
      this._reportConfig &&
        ((t.configFile = this._reportConfig.configFile),
        (t.rootDir = this._reportConfig.rootDir),
        (t.reportSlowTests = this._reportConfig.reportSlowTests),
        (t.quiet = this._reportConfig.quiet)),
      t
    );
  }
  _parseProject(e) {
    return {
      id: e.id,
      metadata: e.metadata,
      name: e.name,
      outputDir: this._absolutePath(e.outputDir),
      repeatEach: e.repeatEach,
      retries: e.retries,
      testDir: this._absolutePath(e.testDir),
      testIgnore: J(e.testIgnore),
      testMatch: J(e.testMatch),
      timeout: e.timeout,
      grep: J(e.grep),
      grepInvert: J(e.grepInvert),
      dependencies: e.dependencies,
      teardown: e.teardown,
      snapshotDir: this._absolutePath(e.snapshotDir),
      use: {},
    };
  }
  _mergeSuitesInto(e, t) {
    for (const s of e) {
      let n = t.suites.find((r) => r.title === s.title);
      n || ((n = new I(s.title, s.type)), (n.parent = t), t.suites.push(n)),
        (n.location = this._absoluteLocation(s.location)),
        (n._fileId = s.fileId),
        (n._parallelMode = s.parallelMode),
        this._mergeSuitesInto(s.suites, n),
        this._mergeTestsInto(s.tests, n);
    }
  }
  _mergeTestsInto(e, t) {
    for (const s of e) {
      let n = t.tests.find((r) => r.title === s.title);
      n ||
        ((n = new Le(s.testId, s.title, this._absoluteLocation(s.location))),
        (n.parent = t),
        t.tests.push(n),
        this._tests.set(n.id, n)),
        this._updateTest(s, n);
    }
  }
  _updateTest(e, t) {
    return (
      (t.id = e.testId),
      (t.location = this._absoluteLocation(e.location)),
      (t.retries = e.retries),
      t
    );
  }
  _absoluteLocation(e) {
    return e && { ...e, file: this._absolutePath(e.file) };
  }
  _absolutePath(e) {
    return e && this._rootDir + this._pathSeparator + e;
  }
}
class I {
  constructor(e, t) {
    (this._requireFile = ''),
      (this.suites = []),
      (this.tests = []),
      (this._parallelMode = 'none'),
      (this.title = e),
      (this._type = t);
  }
  allTests() {
    const e = [],
      t = (s) => {
        for (const n of [...s.suites, ...s.tests])
          n instanceof I ? t(n) : e.push(n);
      };
    return t(this), e;
  }
  titlePath() {
    const e = this.parent ? this.parent.titlePath() : [];
    return (this.title || this._type !== 'describe') && e.push(this.title), e;
  }
  project() {}
}
class Le {
  constructor(e, t, s) {
    (this.fn = () => {}),
      (this.results = []),
      (this.expectedStatus = 'passed'),
      (this.timeout = 0),
      (this.annotations = []),
      (this.retries = 0),
      (this.repeatEachIndex = 0),
      (this.resultsMap = new Map()),
      (this.id = e),
      (this.title = t),
      (this.location = s);
  }
  titlePath() {
    const e = this.parent ? this.parent.titlePath() : [];
    return e.push(this.title), e;
  }
  outcome() {
    const e = this.results.filter(
      (t) => t.status !== 'skipped' && t.status !== 'interrupted'
    );
    return e.length
      ? e.every((t) => t.status === this.expectedStatus)
        ? 'expected'
        : e.some((t) => t.status === this.expectedStatus)
        ? 'flaky'
        : 'unexpected'
      : 'skipped';
  }
  ok() {
    const e = this.outcome();
    return e === 'expected' || e === 'flaky' || e === 'skipped';
  }
  _clearResults() {
    (this.results = []), this.resultsMap.clear();
  }
  _createTestResult(e) {
    const t = {
      retry: this.results.length,
      parallelIndex: -1,
      workerIndex: -1,
      duration: -1,
      startTime: new Date(),
      stdout: [],
      stderr: [],
      attachments: [],
      status: 'skipped',
      statusEx: 'scheduled',
      steps: [],
      errors: [],
      stepMap: new Map(),
    };
    return this.results.push(t), this.resultsMap.set(e, t), t;
  }
}
const fe = {
  forbidOnly: !1,
  fullyParallel: !1,
  globalSetup: null,
  globalTeardown: null,
  globalTimeout: 0,
  grep: /.*/,
  grepInvert: null,
  maxFailures: 0,
  metadata: {},
  preserveOutput: 'always',
  projects: [],
  reporter: [[{}.CI ? 'dot' : 'list']],
  reportSlowTests: { max: 5, threshold: 15e3 },
  configFile: '',
  rootDir: '',
  quiet: !1,
  shard: null,
  updateSnapshots: 'missing',
  version: '',
  workers: 0,
  webServer: null,
};
function J(i) {
  return i.map((e) => (e.s ? e.s : new RegExp(e.r.source, e.r.flags)));
}
const Pe = ({ source: i }) => {
    const [e, t] = ve(),
      [s, n] = A.useState(Se()),
      [r] = A.useState(
        be(
          () => import('./assets/xtermModule-443332e6.js'),
          ['./assets/xtermModule-443332e6.js', './xtermModule.6428296b.css'],
          import.meta.url
        ).then((c) => c.default)
      ),
      o = A.useRef(null);
    return (
      A.useEffect(() => (we(n), () => _e(n)), []),
      A.useEffect(() => {
        const c = i.write,
          d = i.clear;
        return (
          (async () => {
            const { Terminal: h, FitAddon: u } = await r,
              m = t.current;
            if (!m) return;
            const f = s === 'dark-mode' ? Oe : We;
            if (o.current && o.current.terminal.options.theme === f) return;
            o.current && (m.textContent = '');
            const a = new h({
                convertEol: !0,
                fontSize: 13,
                scrollback: 1e4,
                fontFamily: 'var(--vscode-editor-font-family)',
                theme: f,
              }),
              v = new u();
            a.loadAddon(v);
            for (const b of i.pending) a.write(b);
            (i.write = (b) => {
              i.pending.push(b), a.write(b);
            }),
              (i.clear = () => {
                (i.pending = []), a.clear();
              }),
              a.open(m),
              v.fit(),
              (o.current = { terminal: a, fitAddon: v });
          })(),
          () => {
            (i.clear = d), (i.write = c);
          }
        );
      }, [r, o, t, i, s]),
      A.useEffect(() => {
        setTimeout(() => {
          o.current &&
            (o.current.fitAddon.fit(),
            i.resize(o.current.terminal.cols, o.current.terminal.rows));
        }, 250);
      }, [e, i]),
      p('div', {
        'data-testid': 'output',
        className: 'xterm-wrapper',
        style: { flex: 'auto' },
        ref: t,
      })
    );
  },
  We = {
    foreground: '#383a42',
    background: '#fafafa',
    cursor: '#383a42',
    black: '#000000',
    red: '#e45649',
    green: '#50a14f',
    yellow: '#c18401',
    blue: '#4078f2',
    magenta: '#a626a4',
    cyan: '#0184bc',
    white: '#a0a0a0',
    brightBlack: '#000000',
    brightRed: '#e06c75',
    brightGreen: '#98c379',
    brightYellow: '#d19a66',
    brightBlue: '#4078f2',
    brightMagenta: '#a626a4',
    brightCyan: '#0184bc',
    brightWhite: '#383a42',
    selectionBackground: '#d7d7d7',
    selectionForeground: '#383a42',
  },
  Oe = {
    foreground: '#f8f8f2',
    background: '#1e1e1e',
    cursor: '#f8f8f0',
    black: '#000000',
    red: '#ff5555',
    green: '#50fa7b',
    yellow: '#f1fa8c',
    blue: '#bd93f9',
    magenta: '#ff79c6',
    cyan: '#8be9fd',
    white: '#bfbfbf',
    brightBlack: '#4d4d4d',
    brightRed: '#ff6e6e',
    brightGreen: '#69ff94',
    brightYellow: '#ffffa5',
    brightBlue: '#d6acff',
    brightMagenta: '#ff92df',
    brightCyan: '#a4ffff',
    brightWhite: '#e6e6e6',
    selectionBackground: '#44475a',
    selectionForeground: '#f8f8f2',
  };
function je(i) {
  return `.playwright-artifacts-${i}`;
}
let oe = () => {},
  he = (i) => {},
  pe = { cols: 80, rows: 24 },
  H = async () => {};
const W = {
    pending: [],
    clear: () => {},
    write: (i) => W.pending.push(i),
    resize: (i, e) => {
      (pe = { cols: i, rows: e }), q('resizeTerminal', { cols: i, rows: e });
    },
  },
  ze = ({}) => {
    var le;
    const [i, e] = g.useState(''),
      [t, s] = g.useState(!1),
      [n, r] = g.useState(
        new Map([
          ['passed', !1],
          ['failed', !1],
          ['skipped', !1],
        ])
      ),
      [o, c] = g.useState(new Map()),
      [d, h] = g.useState({
        config: void 0,
        rootSuite: void 0,
        loadErrors: [],
      }),
      [u, m] = g.useState(),
      [f, a] = g.useState({}),
      [v, b] = g.useState(new Set()),
      [k, C] = g.useState(!1),
      [y, N] = g.useState(),
      [R, Y] = ke('watch-all', !1),
      [ee, V] = g.useState({ value: new Set() }),
      l = g.useRef(Promise.resolve()),
      _ = g.useRef(new Set()),
      [S, w] = g.useState(0),
      [T, x] = g.useState(!1),
      te = g.useRef(null),
      se = g.useCallback(() => {
        C(!0),
          V({ value: new Set() }),
          oe(fe, new I('', 'root'), [], void 0),
          ge(!0).then(() => {
            C(!1);
          });
      }, []);
    g.useEffect(() => {
      var D;
      (D = te.current) == null || D.focus(),
        C(!0),
        Te({ onEvent: Ue, onClose: () => x(!0) }).then((F) => {
          (H = F), se();
        });
    }, [se]),
      (oe = g.useCallback(
        (D, F, L, j) => {
          const P = D.configFile
            ? de.getObject(D.configFile + ':projects', void 0)
            : void 0;
          for (const B of o.keys())
            F.suites.find((X) => X.title === B) || o.delete(B);
          for (const B of F.suites)
            o.has(B.title) ||
              o.set(B.title, !!(P != null && P.includes(B.title)));
          !P &&
            o.size &&
            ![...o.values()].includes(!0) &&
            o.set(o.entries().next().value[0], !0),
            h({ config: D, rootSuite: F, loadErrors: L }),
            c(new Map(o)),
            y && j ? m({ ...j, total: y.testIds.size }) : j || m(void 0);
        },
        [o, y]
      ));
    const ie = g.useCallback(
        (D, F) => {
          (D === 'bounce-if-busy' && y) ||
            ((_.current = new Set([..._.current, ...F])),
            (l.current = l.current.then(async () => {
              var P, B, X;
              const L = _.current;
              if (((_.current = new Set()), !L.size)) return;
              {
                for (const z of ((P = d.rootSuite) == null
                  ? void 0
                  : P.allTests()) || [])
                  L.has(z.id) &&
                    (z._clearResults(), z._createTestResult('pending'));
                h({ ...d });
              }
              const j = '  [' + new Date().toLocaleTimeString() + ']';
              W.write(
                '\x1B[2m—'.repeat(Math.max(0, pe.cols - j.length)) +
                  j +
                  '\x1B[22m'
              ),
                m({ total: L.size, passed: 0, failed: 0, skipped: 0 }),
                N({ testIds: L }),
                await H('run', { testIds: [...L] });
              for (const z of ((B = d.rootSuite) == null
                ? void 0
                : B.allTests()) || [])
                ((X = z.results[0]) == null ? void 0 : X.duration) === -1 &&
                  z._clearResults();
              h({ ...d }), N(void 0);
            })));
        },
        [y, d]
      ),
      O = !!y;
    return E('div', {
      className: 'vbox ui-mode',
      children: [
        T &&
          p('div', {
            className: 'drop-target',
            children: p('div', {
              className: 'title',
              children: 'Process disconnected',
            }),
          }),
        E(Ee, {
          sidebarSize: 250,
          orientation: 'horizontal',
          sidebarIsFirst: !0,
          children: [
            E('div', {
              className: 'vbox',
              children: [
                E('div', {
                  className: 'vbox' + (t ? '' : ' hidden'),
                  children: [
                    E(Q, {
                      children: [
                        p('div', {
                          className: 'section-title',
                          style: { flex: 'none' },
                          children: 'Output',
                        }),
                        p(M, {
                          icon: 'circle-slash',
                          title: 'Clear output',
                          onClick: () => W.clear(),
                        }),
                        p('div', { className: 'spacer' }),
                        p(M, {
                          icon: 'close',
                          title: 'Close',
                          onClick: () => s(!1),
                        }),
                      ],
                    }),
                    p(Pe, { source: W }),
                  ],
                }),
                p('div', {
                  className: 'vbox' + (t ? ' hidden' : ''),
                  children: p(Ke, {
                    item: f,
                    rootDir: (le = d.config) == null ? void 0 : le.rootDir,
                  }),
                }),
              ],
            }),
            E('div', {
              className: 'vbox ui-mode-sidebar',
              children: [
                E(Q, {
                  noShadow: !0,
                  noMinHeight: !0,
                  children: [
                    p('img', { src: 'icon-32x32.png' }),
                    p('div', {
                      className: 'section-title',
                      children: 'Playwright',
                    }),
                    p(M, {
                      icon: 'color-mode',
                      title: 'Toggle color mode',
                      onClick: () => xe(),
                    }),
                    p(M, {
                      icon: 'refresh',
                      title: 'Reload',
                      onClick: () => se(),
                      disabled: O || k,
                    }),
                    p(M, {
                      icon: 'terminal',
                      title: 'Toggle output',
                      toggled: t,
                      onClick: () => {
                        s(!t);
                      },
                    }),
                  ],
                }),
                p(Ae, {
                  filterText: i,
                  setFilterText: e,
                  statusFilters: n,
                  setStatusFilters: r,
                  projectFilters: o,
                  setProjectFilters: c,
                  testModel: d,
                  runTests: () => ie('bounce-if-busy', v),
                }),
                E(Q, {
                  noMinHeight: !0,
                  children: [
                    !O &&
                      !u &&
                      p('div', {
                        className: 'section-title',
                        children: 'Tests',
                      }),
                    !O &&
                      u &&
                      p('div', {
                        'data-testid': 'status-line',
                        className: 'status-line',
                        children: E('div', {
                          children: [
                            u.passed,
                            '/',
                            u.total,
                            ' passed (',
                            ((u.passed / u.total) * 100) | 0,
                            '%)',
                          ],
                        }),
                      }),
                    O &&
                      u &&
                      p('div', {
                        'data-testid': 'status-line',
                        className: 'status-line',
                        children: E('div', {
                          children: [
                            'Running ',
                            u.passed,
                            '/',
                            y.testIds.size,
                            ' passed (',
                            ((u.passed / y.testIds.size) * 100) | 0,
                            '%)',
                          ],
                        }),
                      }),
                    p(M, {
                      icon: 'play',
                      title: 'Run all',
                      onClick: () => ie('bounce-if-busy', v),
                      disabled: O || k,
                    }),
                    p(M, {
                      icon: 'debug-stop',
                      title: 'Stop',
                      onClick: () => q('stop'),
                      disabled: !O || k,
                    }),
                    p(M, {
                      icon: 'eye',
                      title: 'Watch all',
                      toggled: R,
                      onClick: () => Y(!R),
                    }),
                    p(M, {
                      icon: 'collapse-all',
                      title: 'Collapse all',
                      onClick: () => {
                        w(S + 1);
                      },
                    }),
                  ],
                }),
                p(Ve, {
                  statusFilters: n,
                  projectFilters: o,
                  filterText: i,
                  testModel: d,
                  runningState: y,
                  runTests: ie,
                  onItemSelected: a,
                  setVisibleTestIds: b,
                  watchAll: R,
                  watchedTreeIds: ee,
                  setWatchedTreeIds: V,
                  isLoading: k,
                  requestedCollapseAllCount: S,
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Ae = ({
    filterText: i,
    setFilterText: e,
    statusFilters: t,
    setStatusFilters: s,
    projectFilters: n,
    setProjectFilters: r,
    testModel: o,
    runTests: c,
  }) => {
    const [d, h] = g.useState(!1),
      u = g.useRef(null);
    g.useEffect(() => {
      var a;
      (a = u.current) == null || a.focus();
    }, []);
    const m =
        [...t.entries()]
          .filter(([a, v]) => v)
          .map(([a]) => a)
          .join(' ') || 'all',
      f =
        [...n.entries()]
          .filter(([a, v]) => v)
          .map(([a]) => a)
          .join(' ') || 'all';
    return E('div', {
      className: 'filters',
      children: [
        p(Ce, {
          expanded: d,
          setExpanded: h,
          title: p('input', {
            ref: u,
            type: 'search',
            placeholder: 'Filter (e.g. text, @tag)',
            spellCheck: !1,
            value: i,
            onChange: (a) => {
              e(a.target.value);
            },
            onKeyDown: (a) => {
              a.key === 'Enter' && c();
            },
          }),
        }),
        E('div', {
          className: 'filter-summary',
          title:
            'Status: ' +
            m +
            `
Projects: ` +
            f,
          onClick: () => h(!d),
          children: [
            p('span', { className: 'filter-label', children: 'Status:' }),
            ' ',
            m,
            p('span', { className: 'filter-label', children: 'Projects:' }),
            ' ',
            f,
          ],
        }),
        d &&
          E('div', {
            className: 'hbox',
            style: { marginLeft: 14 },
            children: [
              p('div', {
                className: 'filter-list',
                children: [...t.entries()].map(([a, v]) =>
                  p('div', {
                    className: 'filter-entry',
                    children: E('label', {
                      children: [
                        p('input', {
                          type: 'checkbox',
                          checked: v,
                          onClick: () => {
                            const b = new Map(t);
                            b.set(a, !b.get(a)), s(b);
                          },
                        }),
                        p('div', { children: a }),
                      ],
                    }),
                  })
                ),
              }),
              p('div', {
                className: 'filter-list',
                children: [...n.entries()].map(([a, v]) =>
                  p('div', {
                    className: 'filter-entry',
                    children: E('label', {
                      children: [
                        p('input', {
                          type: 'checkbox',
                          checked: v,
                          onClick: () => {
                            var C;
                            const b = new Map(n);
                            b.set(a, !b.get(a)), r(b);
                            const k =
                              (C = o == null ? void 0 : o.config) == null
                                ? void 0
                                : C.configFile;
                            k &&
                              de.setObject(
                                k + ':projects',
                                [...b.entries()]
                                  .filter(([y, N]) => N)
                                  .map(([y]) => y)
                              );
                          },
                        }),
                        p('div', { children: a }),
                      ],
                    }),
                  })
                ),
              }),
            ],
          }),
      ],
    });
  },
  Ie = Ne,
  Ve = ({
    statusFilters: i,
    projectFilters: e,
    filterText: t,
    testModel: s,
    runTests: n,
    runningState: r,
    watchAll: o,
    watchedTreeIds: c,
    setWatchedTreeIds: d,
    isLoading: h,
    onItemSelected: u,
    setVisibleTestIds: m,
    requestedCollapseAllCount: f,
  }) => {
    const [a, v] = g.useState({ expandedItems: new Map() }),
      [b, k] = g.useState(),
      [C, y] = g.useState(f),
      {
        rootItem: N,
        treeItemMap: R,
        fileNames: Y,
      } = g.useMemo(() => {
        let l = He(s.rootSuite, s.loadErrors, e);
        Ye(l, t, i, r == null ? void 0 : r.testIds), me(l), (l = Xe(l)), Je(l);
        const _ = new Map(),
          S = new Set(),
          w = new Set(),
          T = (x) => {
            x.kind === 'group' && x.location.file && w.add(x.location.file),
              x.kind === 'case' && x.tests.forEach((te) => S.add(te.id)),
              x.children.forEach(T),
              _.set(x.id, x);
          };
        return T(l), m(S), { rootItem: l, treeItemMap: _, fileNames: w };
      }, [t, s, i, e, m, r]);
    g.useEffect(() => {
      if (C !== f) {
        a.expandedItems.clear();
        for (const S of R.keys()) a.expandedItems.set(S, !1);
        y(f), k(void 0), v({ ...a });
        return;
      }
      if (!r || r.itemSelectedByUser) return;
      let l;
      const _ = (S) => {
        var w;
        S.children.forEach(_),
          !l &&
            S.status === 'failed' &&
            ((S.kind === 'test' && r.testIds.has(S.test.id)) ||
              (S.kind === 'case' &&
                r.testIds.has((w = S.tests[0]) == null ? void 0 : w.id))) &&
            (l = S);
      };
      _(N), l && k(l.id);
    }, [r, k, N, C, y, f, a, v, R]);
    const { selectedTreeItem: ee } = g.useMemo(() => {
      const l = b ? R.get(b) : void 0;
      let _;
      l &&
        (_ = {
          file: l.location.file,
          line: l.location.line,
          source: {
            errors: s.loadErrors
              .filter((w) => {
                var T;
                return (
                  ((T = w.location) == null ? void 0 : T.file) ===
                  l.location.file
                );
              })
              .map((w) => ({ line: w.location.line, message: w.message })),
            content: void 0,
          },
        });
      let S;
      return (
        (l == null ? void 0 : l.kind) === 'test'
          ? (S = l.test)
          : (l == null ? void 0 : l.kind) === 'case' &&
            l.tests.length === 1 &&
            (S = l.tests[0]),
        u({ testCase: S, testFile: _ }),
        { selectedTreeItem: l }
      );
    }, [u, b, s, R]);
    g.useEffect(() => {
      if (!h)
        if (o) q('watch', { fileNames: [...Y] });
        else {
          const l = new Set();
          for (const _ of c.value) {
            const S = R.get(_),
              w = S == null ? void 0 : S.location.file;
            w && l.add(w);
          }
          q('watch', { fileNames: [...l] });
        }
    }, [h, N, Y, o, c, R]);
    const V = (l) => {
      k(l.id), n('bounce-if-busy', ne(l));
    };
    return (
      (he = (l) => {
        const _ = [],
          S = new Set(l);
        if (o) {
          const w = (T) => {
            const x = T.location.file;
            x && S.has(x) && _.push(...ne(T)),
              T.kind === 'group' &&
                T.subKind === 'folder' &&
                T.children.forEach(w);
          };
          w(N);
        } else
          for (const w of c.value) {
            const T = R.get(w),
              x = T == null ? void 0 : T.location.file;
            x && S.has(x) && _.push(...ne(T));
          }
        n('queue-if-busy', new Set(_));
      }),
      p(Ie, {
        treeState: a,
        setTreeState: v,
        rootItem: N,
        dataTestId: 'test-tree',
        render: (l) =>
          E('div', {
            className: 'hbox ui-mode-list-item',
            children: [
              p('div', {
                className: 'ui-mode-list-item-title',
                children: l.title,
              }),
              !!l.duration &&
                l.status !== 'skipped' &&
                p('div', {
                  className: 'ui-mode-list-item-time',
                  children: ye(l.duration),
                }),
              E(Q, {
                noMinHeight: !0,
                noShadow: !0,
                children: [
                  p(M, {
                    icon: 'play',
                    title: 'Run',
                    onClick: () => V(l),
                    disabled: !!r,
                  }),
                  p(M, {
                    icon: 'go-to-file',
                    title: 'Open in VS Code',
                    onClick: () => q('open', { location: qe(l) }),
                    style:
                      l.kind === 'group' && l.subKind === 'folder'
                        ? { visibility: 'hidden' }
                        : {},
                  }),
                  !o &&
                    p(M, {
                      icon: 'eye',
                      title: 'Watch',
                      onClick: () => {
                        c.value.has(l.id)
                          ? c.value.delete(l.id)
                          : c.value.add(l.id),
                          d({ ...c });
                      },
                      toggled: c.value.has(l.id),
                    }),
                ],
              }),
            ],
          }),
        icon: (l) =>
          l.status === 'scheduled'
            ? 'codicon-clock'
            : l.status === 'running'
            ? 'codicon-loading'
            : l.status === 'failed'
            ? 'codicon-error'
            : l.status === 'passed'
            ? 'codicon-check'
            : l.status === 'skipped'
            ? 'codicon-circle-slash'
            : 'codicon-circle-outline',
        selectedItem: ee,
        onAccepted: V,
        onSelected: (l) => {
          r && (r.itemSelectedByUser = !0), k(l.id);
        },
        isError: (l) => (l.kind === 'group' ? l.hasLoadErrors : !1),
        autoExpandDepth: t ? 5 : 1,
        noItemsMessage: h ? 'Loading…' : 'No tests',
      })
    );
  },
  Ke = ({ item: i, rootDir: e }) => {
    const [t, s] = g.useState(),
      [n, r] = g.useState(0),
      o = g.useRef(null),
      { outputDir: c } = g.useMemo(
        () => ({ outputDir: i.testCase ? $e(i.testCase) : void 0 }),
        [i]
      ),
      [d, h] = g.useState(),
      u = g.useCallback((f) => h(ae(f)), [h]),
      m = d
        ? t == null
          ? void 0
          : t.model.actions.find((f) => ae(f) === d)
        : void 0;
    return (
      g.useEffect(() => {
        var b, k;
        o.current && clearTimeout(o.current);
        const f = (b = i.testCase) == null ? void 0 : b.results[0];
        if (!f) {
          s(void 0);
          return;
        }
        const a =
          f && f.duration >= 0 && f.attachments.find((C) => C.name === 'trace');
        if (a && a.path) {
          ue(a.path).then((C) => s({ model: C, isLive: !1 }));
          return;
        }
        if (!c) {
          s(void 0);
          return;
        }
        const v = `${c}/${je(f.workerIndex)}/traces/${
          (k = i.testCase) == null ? void 0 : k.id
        }.json`;
        return (
          (o.current = setTimeout(async () => {
            try {
              const C = await ue(v);
              s({ model: C, isLive: !0 });
            } catch {
              s(void 0);
            } finally {
              r(n + 1);
            }
          }, 500)),
          () => {
            o.current && clearTimeout(o.current);
          }
        );
      }, [c, i, s, n, r]),
      p(
        Me,
        {
          model: t == null ? void 0 : t.model,
          hideTimelineBars: !0,
          hideStackFrames: !0,
          showSourcesFirst: !0,
          rootDir: e,
          initialSelection: m,
          onSelectionChanged: u,
          fallbackLocation: i.testFile,
          isLive: t == null ? void 0 : t.isLive,
          drawer: 'bottom',
        },
        'workbench'
      )
    );
  };
let $, Z, U;
const ce = () => {
    clearTimeout(Z),
      (Z = void 0),
      oe(U.config, U.rootSuite, U.loadErrors, U.progress);
  },
  K = (i, e, t, s, n = !1) => {
    (U = { config: i, rootSuite: e, loadErrors: t, progress: s }),
      n ? ce() : Z || (Z = setTimeout(ce, 250));
  },
  ge = (i) => {
    if (!i) return H('list', {});
    let e, t;
    const s = { passed: 0, failed: 0, skipped: 0 };
    let n;
    return (
      ($ = new Fe(G, {
        onBegin: (r, o) => {
          e || ((e = o), (t = [])),
            (n = r),
            (s.passed = 0),
            (s.failed = 0),
            (s.skipped = 0),
            K(n, e, t, s, !0);
        },
        onEnd: () => {
          K(n, e, t, s, !0);
        },
        onTestBegin: () => {
          K(n, e, t, s);
        },
        onTestEnd: (r) => {
          r.outcome() === 'skipped'
            ? ++s.skipped
            : r.outcome() === 'unexpected'
            ? ++s.failed
            : ++s.passed,
            K(n, e, t, s);
        },
        onError: (r) => {
          W.write(
            (r.stack || r.value || '') +
              `
`
          ),
            t.push(r),
            K(n, e, t, s);
        },
      })),
      $._setClearPreviousResultsWhenTestBegins(),
      H('list', {})
    );
  },
  q = (i, e) => {
    if (window._overrideProtocolForTest) {
      window._overrideProtocolForTest({ method: i, params: e }).catch(() => {});
      return;
    }
    H(i, e).catch((t) => {
      console.error(t);
    });
  },
  Ue = (i, e) => {
    var t;
    if (i === 'listChanged') {
      ge(!1).catch(() => {});
      return;
    }
    if (i === 'testFilesChanged') {
      he(e.testFileNames);
      return;
    }
    if (i === 'stdio') {
      if (e.buffer) {
        const s = atob(e.buffer);
        W.write(s);
      } else W.write(e.text);
      return;
    }
    (t = $ == null ? void 0 : $.dispatch({ method: i, params: e })) == null ||
      t.catch(() => {});
  },
  $e = (i) => {
    var e;
    for (let t = i.parent; t; t = t.parent)
      if (t.project()) return (e = t.project()) == null ? void 0 : e.outputDir;
  },
  qe = (i) => {
    if (i) return i.location.file + ':' + i.location.line;
  },
  ne = (i) => {
    const e = new Set();
    if (!i) return e;
    const t = (s) => {
      var n;
      s.kind === 'case'
        ? s.tests.map((r) => r.id).forEach((r) => e.add(r))
        : s.kind === 'test'
        ? e.add(s.id)
        : (n = s.children) == null || n.forEach(t);
    };
    return t(i), e;
  };
function re(i, e, t, s) {
  if (e.length === 0) return i;
  const n = e.join(G),
    r = s.get(n);
  if (r) return r;
  const o = re(i, e.slice(0, e.length - 1), !1, s),
    c = {
      kind: 'group',
      subKind: t ? 'file' : 'folder',
      id: n,
      title: e[e.length - 1],
      location: { file: n, line: 0, column: 0 },
      duration: 0,
      parent: o,
      children: [],
      status: 'none',
      hasLoadErrors: !1,
    };
  return o.children.push(c), s.set(n, c), c;
}
function He(i, e, t) {
  const s = [...t.values()].some(Boolean),
    n = {
      kind: 'group',
      subKind: 'folder',
      id: 'root',
      title: '',
      location: { file: '', line: 0, column: 0 },
      duration: 0,
      parent: void 0,
      children: [],
      status: 'none',
      hasLoadErrors: !1,
    },
    r = (c, d, h) => {
      for (const u of d.suites) {
        const m = u.title || '<anonymous>';
        let f = h.children.find((a) => a.title === m);
        f ||
          ((f = {
            kind: 'group',
            subKind: 'describe',
            id: h.id + '' + m,
            title: m,
            location: u.location,
            duration: 0,
            parent: h,
            children: [],
            status: 'none',
            hasLoadErrors: !1,
          }),
          h.children.push(f)),
          r(c, u, f);
      }
      for (const u of d.tests) {
        const m = u.title;
        let f = h.children.find((b) => b.title === m);
        f ||
          ((f = {
            kind: 'case',
            id: h.id + '' + m,
            title: m,
            parent: h,
            children: [],
            tests: [],
            location: u.location,
            duration: 0,
            status: 'none',
          }),
          h.children.push(f));
        const a = u.results[0];
        let v = 'none';
        (a == null ? void 0 : a.statusEx) === 'scheduled'
          ? (v = 'scheduled')
          : (a == null ? void 0 : a.statusEx) === 'running'
          ? (v = 'running')
          : (a == null ? void 0 : a.status) === 'skipped'
          ? (v = 'skipped')
          : (a == null ? void 0 : a.status) === 'interrupted'
          ? (v = 'none')
          : a && u.outcome() !== 'expected'
          ? (v = 'failed')
          : a && u.outcome() === 'expected' && (v = 'passed'),
          f.tests.push(u),
          f.children.push({
            kind: 'test',
            id: u.id,
            title: c,
            location: u.location,
            test: u,
            parent: f,
            children: [],
            status: v,
            duration: u.results.length ? Math.max(0, u.results[0].duration) : 0,
            project: c,
          }),
          (f.duration = f.children.reduce((b, k) => b + k.duration, 0));
      }
    },
    o = new Map();
  for (const c of (i == null ? void 0 : i.suites) || [])
    if (!(s && !t.get(c.title))) {
      for (const d of c.suites) {
        const h = re(n, d.location.file.split(G), !0, o);
        r(c.title, d, h);
      }
      for (const d of e) {
        if (!d.location) continue;
        const h = re(n, d.location.file.split(G), !0, o);
        h.hasLoadErrors = !0;
      }
    }
  return n;
}
function Ye(i, e, t, s) {
  const n = e.trim().toLowerCase().split(' '),
    r = [...t.values()].some(Boolean),
    o = (d) => {
      const h = d.tests[0].titlePath().join(' ').toLowerCase();
      return !n.every((u) => h.includes(u)) &&
        !d.tests.some((u) => (s == null ? void 0 : s.has(u.id)))
        ? !1
        : ((d.children = d.children.filter(
            (u) => !r || (s == null ? void 0 : s.has(u.id)) || t.get(u.status)
          )),
          (d.tests = d.children.map((u) => u.test)),
          !!d.children.length);
    },
    c = (d) => {
      const h = [];
      for (const u of d.children)
        u.kind === 'case'
          ? o(u) && h.push(u)
          : (c(u), (u.children.length || u.hasLoadErrors) && h.push(u));
      d.children = h;
    };
  c(i);
}
function me(i) {
  for (const o of i.children) me(o);
  i.kind === 'group' &&
    i.children.sort(
      (o, c) =>
        o.location.file.localeCompare(c.location.file) ||
        o.location.line - c.location.line
    );
  let e = i.children.length > 0,
    t = i.children.length > 0,
    s = !1,
    n = !1,
    r = !1;
  for (const o of i.children)
    (t = t && o.status === 'skipped'),
      (e = e && (o.status === 'passed' || o.status === 'skipped')),
      (s = s || o.status === 'failed'),
      (n = n || o.status === 'running'),
      (r = r || o.status === 'scheduled');
  n
    ? (i.status = 'running')
    : r
    ? (i.status = 'scheduled')
    : s
    ? (i.status = 'failed')
    : t
    ? (i.status = 'skipped')
    : e && (i.status = 'passed');
}
function Xe(i) {
  let e = i;
  for (
    ;
    e.children.length === 1 &&
    e.children[0].kind === 'group' &&
    e.children[0].subKind === 'folder';

  )
    e = e.children[0];
  return (e.location = i.location), e;
}
function Je(i) {
  const e = (t) => {
    t.kind === 'case' && t.children.length === 1
      ? (t.children = [])
      : t.children.forEach(e);
  };
  e(i);
}
async function ue(i) {
  const e = new URLSearchParams();
  e.set('trace', i);
  const s = await (await fetch(`contexts?${e.toString()}`)).json();
  return new Re(s);
}
const G = navigator.userAgent.toLowerCase().includes('windows') ? '\\' : '/';
(async () => (
  Be(),
  window.location.protocol !== 'file:' &&
    (window.location.href.includes('isUnderTest=true') &&
      (await new Promise((i) => setTimeout(i, 1e3))),
    navigator.serviceWorker.register('sw.bundle.js'),
    navigator.serviceWorker.controller ||
      (await new Promise((i) => {
        navigator.serviceWorker.oncontrollerchange = () => i();
      })),
    setInterval(function () {
      fetch('ping');
    }, 1e4)),
  De.render(p(ze, {}), document.querySelector('#root'))
))();
