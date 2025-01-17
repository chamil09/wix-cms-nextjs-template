import {
  M as E,
  r as a,
  c as x,
  j as c,
  a as t,
  T as M,
  t as C,
  W as j,
  b as F,
  d as O,
} from './assets/wsPort-fb5048bf.js';
const I = () => {
    const [l, P] = a.useState(!1),
      [d, h] = a.useState([]),
      [p, W] = a.useState([]),
      [f, N] = a.useState(L),
      [m, v] = a.useState({ done: 0, total: 0 }),
      [b, u] = a.useState(!1),
      [S, w] = a.useState(null),
      [y, U] = a.useState(null),
      g = a.useCallback((e) => {
        const o = [],
          s = [],
          r = new URL(window.location.href);
        for (let i = 0; i < e.length; i++) {
          const n = e.item(i);
          if (!n) continue;
          const k = URL.createObjectURL(n);
          o.push(k),
            s.push(n.name),
            r.searchParams.append('trace', k),
            r.searchParams.append('traceFileName', n.name);
        }
        const T = r.toString();
        window.history.pushState({}, '', T), h(o), W(s), u(!1), w(null);
      }, []),
      D = a.useCallback(
        (e) => {
          e.preventDefault(), g(e.dataTransfer.files);
        },
        [g]
      ),
      R = a.useCallback(
        (e) => {
          e.preventDefault(), e.target.files && g(e.target.files);
        },
        [g]
      );
    return (
      a.useEffect(() => {
        const e = new URL(window.location.href).searchParams,
          o = e.getAll('trace');
        P(e.has('isServer'));
        for (const s of o)
          if (s.startsWith('file:')) {
            U(s || null);
            return;
          }
        e.has('isServer')
          ? x({
              onEvent(s, r) {
                s === 'loadTrace' && (h(r.url ? [r.url] : []), u(!1), w(null));
              },
              onClose() {},
            }).then((s) => {
              s('ready');
            })
          : o.some((s) => s.startsWith('blob:')) || h(o);
      }, []),
      a.useEffect(() => {
        (async () => {
          if (d.length) {
            const e = (r) => {
              r.data.method === 'progress' && v(r.data.params);
            };
            navigator.serviceWorker.addEventListener('message', e),
              v({ done: 0, total: 1 });
            const o = [];
            for (let r = 0; r < d.length; r++) {
              const T = d[r],
                i = new URLSearchParams();
              i.set('trace', T), p.length && i.set('traceFileName', p[r]);
              const n = await fetch(`contexts?${i.toString()}`);
              if (!n.ok) {
                l || h([]), w((await n.json()).error);
                return;
              }
              o.push(...(await n.json()));
            }
            navigator.serviceWorker.removeEventListener('message', e);
            const s = new E(o);
            v({ done: 0, total: 0 }), N(s);
          } else N(L);
        })();
      }, [l, d, p]),
      c('div', {
        className: 'vbox workbench',
        onDragOver: (e) => {
          e.preventDefault(), u(!0);
        },
        children: [
          c('div', {
            className: 'hbox header',
            children: [
              t('div', { className: 'logo', children: '🎭' }),
              t('div', { className: 'product', children: 'Playwright' }),
              f.title && t('div', { className: 'title', children: f.title }),
              t('div', { className: 'spacer' }),
              t(M, {
                icon: 'color-mode',
                title: 'Toggle color mode',
                toggled: !1,
                onClick: () => C(),
              }),
            ],
          }),
          t('div', {
            className: 'progress',
            children: t('div', {
              className: 'inner-progress',
              style: { width: m.total ? (100 * m.done) / m.total + '%' : 0 },
            }),
          }),
          t(j, { model: f }),
          y &&
            c('div', {
              className: 'drop-target',
              children: [
                t('div', {
                  children:
                    'Trace Viewer uses Service Workers to show traces. To view trace:',
                }),
                c('div', {
                  style: { paddingTop: 20 },
                  children: [
                    c('div', {
                      children: [
                        '1. Click ',
                        t('a', { href: y, children: 'here' }),
                        ' to put your trace into the download shelf',
                      ],
                    }),
                    c('div', {
                      children: [
                        '2. Go to ',
                        t('a', {
                          href: 'https://trace.playwright.dev',
                          children: 'trace.playwright.dev',
                        }),
                      ],
                    }),
                    t('div', {
                      children:
                        '3. Drop the trace from the download shelf into the page',
                    }),
                  ],
                }),
              ],
            }),
          !l &&
            !b &&
            !y &&
            (!d.length || S) &&
            c('div', {
              className: 'drop-target',
              children: [
                t('div', { className: 'processing-error', children: S }),
                t('div', {
                  className: 'title',
                  children: 'Drop Playwright Trace to load',
                }),
                t('div', { children: 'or' }),
                t('button', {
                  onClick: () => {
                    const e = document.createElement('input');
                    (e.type = 'file'),
                      (e.multiple = !0),
                      e.click(),
                      e.addEventListener('change', (o) => R(o));
                  },
                  children: 'Select file(s)',
                }),
                t('div', {
                  style: { maxWidth: 400 },
                  children:
                    'Playwright Trace Viewer is a Progressive Web App, it does not send your trace anywhere, it opens it locally.',
                }),
              ],
            }),
          l &&
            !d.length &&
            t('div', {
              className: 'drop-target',
              children: t('div', {
                className: 'title',
                children: 'Select test to see the trace',
              }),
            }),
          b &&
            t('div', {
              className: 'drop-target',
              onDragLeave: () => {
                u(!1);
              },
              onDrop: (e) => D(e),
              children: t('div', {
                className: 'title',
                children: 'Release to analyse the Playwright Trace',
              }),
            }),
        ],
      })
    );
  },
  L = new E([]);
(async () => (
  F(),
  window.location.protocol !== 'file:' &&
    (window.location.href.includes('isUnderTest=true') &&
      (await new Promise((l) => setTimeout(l, 1e3))),
    navigator.serviceWorker.register('sw.bundle.js'),
    navigator.serviceWorker.controller ||
      (await new Promise((l) => {
        navigator.serviceWorker.oncontrollerchange = () => l();
      })),
    setInterval(function () {
      fetch('ping');
    }, 1e4)),
  O.render(t(I, {}), document.querySelector('#root'))
))();
