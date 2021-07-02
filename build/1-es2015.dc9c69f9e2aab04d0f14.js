(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    '6Ke5': function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return jr;
      });
      var t = r('mrSG'),
        a = function () {
          return (a =
            Object.assign ||
            function (e) {
              for (var n, r = 1, t = arguments.length; r < t; r++)
                for (var a in (n = arguments[r]))
                  Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
              return e;
            }).apply(this, arguments);
        };
      function m() {
        for (var e = 0, n = 0, r = arguments.length; n < r; n++)
          e += arguments[n].length;
        var t = Array(e),
          a = 0;
        for (n = 0; n < r; n++)
          for (var m = arguments[n], o = 0, i = m.length; o < i; o++, a++)
            t[a] = m[o];
        return t;
      }
      var o = Object.keys,
        i = Array.isArray,
        u =
          'undefined' != typeof self
            ? self
            : 'undefined' != typeof window
            ? window
            : global;
      function b(e, n) {
        return (
          'object' != typeof n ||
            o(n).forEach(function (r) {
              e[r] = n[r];
            }),
          e
        );
      }
      'undefined' == typeof Promise || u.Promise || (u.Promise = Promise);
      var y = Object.getPrototypeOf,
        s = {}.hasOwnProperty;
      function N(e, n) {
        return s.call(e, n);
      }
      function l(e, n) {
        'function' == typeof n && (n = n(y(e))),
          o(n).forEach(function (r) {
            d(e, r, n[r]);
          });
      }
      var p = Object.defineProperty;
      function d(e, n, r, t) {
        p(
          e,
          n,
          b(
            r && N(r, 'get') && 'function' == typeof r.get
              ? { get: r.get, set: r.set, configurable: !0 }
              : { value: r, configurable: !0, writable: !0 },
            t
          )
        );
      }
      function c(e) {
        return {
          from: function (n) {
            return (
              (e.prototype = Object.create(n.prototype)),
              d(e.prototype, 'constructor', e),
              { extend: l.bind(null, e.prototype) }
            );
          }
        };
      }
      var h = Object.getOwnPropertyDescriptor;
      function f(e, n) {
        var r;
        return h(e, n) || ((r = y(e)) && f(r, n));
      }
      var g = [].slice;
      function v(e, n, r) {
        return g.call(e, n, r);
      }
      function I(e, n) {
        return n(e);
      }
      function k(e) {
        if (!e) throw new Error('Assertion Failed');
      }
      function x(e) {
        u.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function C(e, n) {
        return e.reduce(function (e, r, t) {
          var a = n(r, t);
          return a && (e[a[0]] = a[1]), e;
        }, {});
      }
      function G(e, n) {
        if (N(e, n)) return e[n];
        if (!n) return e;
        if ('string' != typeof n) {
          for (var r = [], t = 0, a = n.length; t < a; ++t) {
            var m = G(e, n[t]);
            r.push(m);
          }
          return r;
        }
        var o = n.indexOf('.');
        if (-1 !== o) {
          var i = e[n.substr(0, o)];
          return void 0 === i ? void 0 : G(i, n.substr(o + 1));
        }
      }
      function _(e, n, r) {
        if (
          e &&
          void 0 !== n &&
          (!('isFrozen' in Object) || !Object.isFrozen(e))
        )
          if ('string' != typeof n && 'length' in n) {
            k('string' != typeof r && 'length' in r);
            for (var t = 0, a = n.length; t < a; ++t) _(e, n[t], r[t]);
          } else {
            var m = n.indexOf('.');
            if (-1 !== m) {
              var o = n.substr(0, m),
                u = n.substr(m + 1);
              if ('' === u)
                void 0 === r
                  ? i(e) && !isNaN(parseInt(o))
                    ? e.splice(o, 1)
                    : delete e[o]
                  : (e[o] = r);
              else {
                var b = e[o];
                b || (b = e[o] = {}), _(b, u, r);
              }
            } else
              void 0 === r
                ? i(e) && !isNaN(parseInt(n))
                  ? e.splice(n, 1)
                  : delete e[n]
                : (e[n] = r);
          }
      }
      function w(e, n) {
        'string' == typeof n
          ? _(e, n, void 0)
          : 'length' in n &&
            [].map.call(n, function (n) {
              _(e, n, void 0);
            });
      }
      function V(e) {
        var n = {};
        for (var r in e) N(e, r) && (n[r] = e[r]);
        return n;
      }
      var S = [].concat;
      function A(e) {
        return S.apply([], e);
      }
      var R = 'Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set'
          .split(',')
          .concat(
            A(
              [8, 16, 32, 64].map(function (e) {
                return ['Int', 'Uint', 'Float'].map(function (n) {
                  return n + e + 'Array';
                });
              })
            )
          )
          .filter(function (e) {
            return u[e];
          }),
        O = R.map(function (e) {
          return u[e];
        }),
        E = C(R, function (e) {
          return [e, !0];
        });
      function P(e) {
        if (!e || 'object' != typeof e) return e;
        var n;
        if (i(e)) {
          n = [];
          for (var r = 0, t = e.length; r < t; ++r) n.push(P(e[r]));
        } else if (O.indexOf(e.constructor) >= 0) n = e;
        else
          for (var a in ((n = e.constructor
            ? Object.create(e.constructor.prototype)
            : {}),
          e))
            N(e, a) && (n[a] = P(e[a]));
        return n;
      }
      var F = {}.toString;
      function j(e) {
        return F.call(e).slice(8, -1);
      }
      var D = function (e, n) {
        return 'Array' === n
          ? '' +
              e.map(function (e) {
                return D(e, j(e));
              })
          : 'ArrayBuffer' === n
          ? '' + new Uint8Array(e)
          : 'Date' === n
          ? e.getTime()
          : ArrayBuffer.isView(e)
          ? '' + new Uint8Array(e.buffer)
          : e;
      };
      function L(e, n, r, t) {
        return (
          (r = r || {}),
          (t = t || ''),
          o(e).forEach(function (a) {
            if (N(n, a)) {
              var m = e[a],
                o = n[a];
              if ('object' == typeof m && 'object' == typeof o && m && o) {
                var i = j(m),
                  u = j(o);
                i === u
                  ? E[i]
                    ? D(m, i) !== D(o, u) && (r[t + a] = n[a])
                    : L(m, o, r, t + a + '.')
                  : (r[t + a] = n[a]);
              } else m !== o && (r[t + a] = n[a]);
            } else r[t + a] = void 0;
          }),
          o(n).forEach(function (a) {
            N(e, a) || (r[t + a] = n[a]);
          }),
          r
        );
      }
      var T = 'undefined' != typeof Symbol && Symbol.iterator,
        z = T
          ? function (e) {
              var n;
              return null != e && (n = e[T]) && n.apply(e);
            }
          : function () {
              return null;
            },
        K = {};
      function M(e) {
        var n, r, t, a;
        if (1 === arguments.length) {
          if (i(e)) return e.slice();
          if (this === K && 'string' == typeof e) return [e];
          if ((a = z(e))) {
            for (r = []; !(t = a.next()).done; ) r.push(t.value);
            return r;
          }
          if (null == e) return [e];
          if ('number' == typeof (n = e.length)) {
            for (r = new Array(n); n--; ) r[n] = e[n];
            return r;
          }
          return [e];
        }
        for (n = arguments.length, r = new Array(n); n--; ) r[n] = arguments[n];
        return r;
      }
      var B =
          'undefined' != typeof Symbol
            ? function (e) {
                return 'AsyncFunction' === e[Symbol.toStringTag];
              }
            : function () {
                return !1;
              },
        q =
          'undefined' != typeof location &&
          /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function U(e, n) {
        (q = e), (H = n);
      }
      var H = function () {
          return !0;
        },
        W = !new Error('').stack;
      function X() {
        if (W)
          try {
            throw new Error();
          } catch (e) {
            return e;
          }
        return new Error();
      }
      function Y(e, n) {
        var r = e.stack;
        return r
          ? ((n = n || 0),
            0 === r.indexOf(e.name) &&
              (n += (e.name + e.message).split('\n').length),
            r
              .split('\n')
              .slice(n)
              .filter(H)
              .map(function (e) {
                return '\n' + e;
              })
              .join(''))
          : '';
      }
      var Q = [
          'Unknown',
          'Constraint',
          'Data',
          'TransactionInactive',
          'ReadOnly',
          'Version',
          'NotFound',
          'InvalidState',
          'InvalidAccess',
          'Abort',
          'Timeout',
          'QuotaExceeded',
          'Syntax',
          'DataClone'
        ],
        J = [
          'Modify',
          'Bulk',
          'OpenFailed',
          'VersionChange',
          'Schema',
          'Upgrade',
          'InvalidTable',
          'MissingAPI',
          'NoSuchDatabase',
          'InvalidArgument',
          'SubTransaction',
          'Unsupported',
          'Internal',
          'DatabaseClosed',
          'PrematureCommit',
          'ForeignAwait'
        ].concat(Q),
        $ = {
          VersionChanged:
            'Database version changed by other database connection',
          DatabaseClosed: 'Database has been closed',
          Abort: 'Transaction aborted',
          TransactionInactive: 'Transaction has already completed or failed'
        };
      function Z(e, n) {
        (this._e = X()), (this.name = e), (this.message = n);
      }
      function ee(e, n) {
        return (
          e +
          '. Errors: ' +
          Object.keys(n)
            .map(function (e) {
              return n[e].toString();
            })
            .filter(function (e, n, r) {
              return r.indexOf(e) === n;
            })
            .join('\n')
        );
      }
      function ne(e, n, r, t) {
        (this._e = X()),
          (this.failures = n),
          (this.failedKeys = t),
          (this.successCount = r),
          (this.message = ee(e, n));
      }
      function re(e, n) {
        (this._e = X()),
          (this.name = 'BulkError'),
          (this.failures = n),
          (this.message = ee(e, n));
      }
      c(Z)
        .from(Error)
        .extend({
          stack: {
            get: function () {
              return (
                this._stack ||
                (this._stack = this.name + ': ' + this.message + Y(this._e, 2))
              );
            }
          },
          toString: function () {
            return this.name + ': ' + this.message;
          }
        }),
        c(ne).from(Z),
        c(re).from(Z);
      var te = J.reduce(function (e, n) {
          return (e[n] = n + 'Error'), e;
        }, {}),
        ae = Z,
        me = J.reduce(function (e, n) {
          var r = n + 'Error';
          function t(e, t) {
            (this._e = X()),
              (this.name = r),
              e
                ? 'string' == typeof e
                  ? ((this.message = e + (t ? '\n ' + t : '')),
                    (this.inner = t || null))
                  : 'object' == typeof e &&
                    ((this.message = e.name + ' ' + e.message),
                    (this.inner = e))
                : ((this.message = $[n] || r), (this.inner = null));
          }
          return c(t).from(ae), (e[n] = t), e;
        }, {});
      (me.Syntax = SyntaxError), (me.Type = TypeError), (me.Range = RangeError);
      var oe = Q.reduce(function (e, n) {
          return (e[n + 'Error'] = me[n]), e;
        }, {}),
        ie = J.reduce(function (e, n) {
          return (
            -1 === ['Syntax', 'Type', 'Range'].indexOf(n) &&
              (e[n + 'Error'] = me[n]),
            e
          );
        }, {});
      function ue() {}
      function be(e) {
        return e;
      }
      function ye(e, n) {
        return null == e || e === be
          ? n
          : function (r) {
              return n(e(r));
            };
      }
      function se(e, n) {
        return function () {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function Ne(e, n) {
        return e === ue
          ? n
          : function () {
              var r = e.apply(this, arguments);
              void 0 !== r && (arguments[0] = r);
              var t = this.onsuccess,
                a = this.onerror;
              (this.onsuccess = null), (this.onerror = null);
              var m = n.apply(this, arguments);
              return (
                t &&
                  (this.onsuccess = this.onsuccess ? se(t, this.onsuccess) : t),
                a && (this.onerror = this.onerror ? se(a, this.onerror) : a),
                void 0 !== m ? m : r
              );
            };
      }
      function le(e, n) {
        return e === ue
          ? n
          : function () {
              e.apply(this, arguments);
              var r = this.onsuccess,
                t = this.onerror;
              (this.onsuccess = this.onerror = null),
                n.apply(this, arguments),
                r &&
                  (this.onsuccess = this.onsuccess ? se(r, this.onsuccess) : r),
                t && (this.onerror = this.onerror ? se(t, this.onerror) : t);
            };
      }
      function pe(e, n) {
        return e === ue
          ? n
          : function (r) {
              var t = e.apply(this, arguments);
              b(r, t);
              var a = this.onsuccess,
                m = this.onerror;
              (this.onsuccess = null), (this.onerror = null);
              var o = n.apply(this, arguments);
              return (
                a &&
                  (this.onsuccess = this.onsuccess ? se(a, this.onsuccess) : a),
                m && (this.onerror = this.onerror ? se(m, this.onerror) : m),
                void 0 === t ? (void 0 === o ? void 0 : o) : b(t, o)
              );
            };
      }
      function de(e, n) {
        return e === ue
          ? n
          : function () {
              return (
                !1 !== n.apply(this, arguments) && e.apply(this, arguments)
              );
            };
      }
      function ce(e, n) {
        return e === ue
          ? n
          : function () {
              var r = e.apply(this, arguments);
              if (r && 'function' == typeof r.then) {
                for (
                  var t = this, a = arguments.length, m = new Array(a);
                  a--;

                )
                  m[a] = arguments[a];
                return r.then(function () {
                  return n.apply(t, m);
                });
              }
              return n.apply(this, arguments);
            };
      }
      (ie.ModifyError = ne), (ie.DexieError = Z), (ie.BulkError = re);
      var he = {},
        fe =
          'undefined' == typeof Promise
            ? []
            : (function () {
                var e = Promise.resolve();
                if ('undefined' == typeof crypto || !crypto.subtle)
                  return [e, e.__proto__, e];
                var n = crypto.subtle.digest('SHA-512', new Uint8Array([0]));
                return [n, n.__proto__, e];
              })(),
        ge = fe[0],
        ve = fe[1],
        Ie = fe[2],
        ke = ve && ve.then,
        xe = ge && ge.constructor,
        Ce = !!Ie,
        Ge = !1,
        _e = Ie
          ? function () {
              Ie.then(Ye);
            }
          : u.setImmediate
          ? setImmediate.bind(null, Ye)
          : u.MutationObserver
          ? function () {
              var e = document.createElement('div');
              new MutationObserver(function () {
                Ye(), (e = null);
              }).observe(e, { attributes: !0 }),
                e.setAttribute('i', '1');
            }
          : function () {
              setTimeout(Ye, 0);
            },
        we = function (e, n) {
          je.push([e, n]), Se && (_e(), (Se = !1));
        },
        Ve = !0,
        Se = !0,
        Ae = [],
        Re = [],
        Oe = null,
        Ee = be,
        Pe = {
          id: 'global',
          global: !0,
          ref: 0,
          unhandleds: [],
          onunhandled: vn,
          pgp: !1,
          env: {},
          finalize: function () {
            this.unhandleds.forEach(function (e) {
              try {
                vn(e[0], e[1]);
              } catch (n) {}
            });
          }
        },
        Fe = Pe,
        je = [],
        De = 0,
        Le = [];
      function Te(e) {
        if ('object' != typeof this)
          throw new TypeError('Promises must be constructed via new');
        (this._listeners = []), (this.onuncatched = ue), (this._lib = !1);
        var n = (this._PSD = Fe);
        if (
          (q &&
            ((this._stackHolder = X()),
            (this._prev = null),
            (this._numPrev = 0)),
          'function' != typeof e)
        ) {
          if (e !== he) throw new TypeError('Not a function');
          return (
            (this._state = arguments[1]),
            (this._value = arguments[2]),
            void (!1 === this._state && Be(this, this._value))
          );
        }
        (this._state = null), (this._value = null), ++n.ref, Me(this, e);
      }
      var ze = {
        get: function () {
          var e = Fe,
            n = mn;
          function r(r, t) {
            var a = this,
              m = !e.global && (e !== Fe || n !== mn),
              o = m && !yn(),
              i = new Te(function (n, i) {
                Ue(a, new Ke(fn(r, e, m, o), fn(t, e, m, o), n, i, e));
              });
            return q && Xe(i, this), i;
          }
          return (r.prototype = he), r;
        },
        set: function (e) {
          d(
            this,
            'then',
            e && e.prototype === he
              ? ze
              : {
                  get: function () {
                    return e;
                  },
                  set: ze.set
                }
          );
        }
      };
      function Ke(e, n, r, t, a) {
        (this.onFulfilled = 'function' == typeof e ? e : null),
          (this.onRejected = 'function' == typeof n ? n : null),
          (this.resolve = r),
          (this.reject = t),
          (this.psd = a);
      }
      function Me(e, n) {
        try {
          n(function (n) {
            if (null === e._state) {
              if (n === e)
                throw new TypeError(
                  'A promise cannot be resolved with itself.'
                );
              var r = e._lib && Qe();
              n && 'function' == typeof n.then
                ? Me(e, function (e, r) {
                    n instanceof Te ? n._then(e, r) : n.then(e, r);
                  })
                : ((e._state = !0), (e._value = n), qe(e)),
                r && Je();
            }
          }, Be.bind(null, e));
        } catch (r) {
          Be(e, r);
        }
      }
      function Be(e, n) {
        if ((Re.push(n), null === e._state)) {
          var r = e._lib && Qe();
          (n = Ee(n)),
            (e._state = !1),
            (e._value = n),
            q &&
              null !== n &&
              'object' == typeof n &&
              !n._promise &&
              (function (r, t, a) {
                try {
                  (function () {
                    var r = f(n, 'stack');
                    (n._promise = e),
                      d(n, 'stack', {
                        get: function () {
                          return Ge
                            ? r && (r.get ? r.get.apply(n) : r.value)
                            : e.stack;
                        }
                      });
                  }.apply(null, void 0));
                } catch (m) {}
              })(),
            (function (e) {
              Ae.some(function (n) {
                return n._value === e._value;
              }) || Ae.push(e);
            })(e),
            qe(e),
            r && Je();
        }
      }
      function qe(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var r = 0, t = n.length; r < t; ++r) Ue(e, n[r]);
        var a = e._PSD;
        --a.ref || a.finalize(),
          0 === De &&
            (++De,
            we(function () {
              0 == --De && $e();
            }, []));
      }
      function Ue(e, n) {
        if (null !== e._state) {
          var r = e._state ? n.onFulfilled : n.onRejected;
          if (null === r) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++De, we(He, [r, e, n]);
        } else e._listeners.push(n);
      }
      function He(e, n, r) {
        try {
          Oe = n;
          var t,
            a = n._value;
          n._state
            ? (t = e(a))
            : (Re.length && (Re = []),
              (t = e(a)),
              -1 === Re.indexOf(a) &&
                (function (e) {
                  for (var n = Ae.length; n; )
                    if (Ae[--n]._value === e._value)
                      return void Ae.splice(n, 1);
                })(n)),
            r.resolve(t);
        } catch (m) {
          r.reject(m);
        } finally {
          (Oe = null), 0 == --De && $e(), --r.psd.ref || r.psd.finalize();
        }
      }
      function We(e, n, r) {
        if (n.length === r) return n;
        var t = '';
        if (!1 === e._state) {
          var a,
            m,
            o = e._value;
          null != o
            ? ((a = o.name || 'Error'), (m = o.message || o), (t = Y(o, 0)))
            : ((a = o), (m = '')),
            n.push(a + (m ? ': ' + m : '') + t);
        }
        return (
          q &&
            ((t = Y(e._stackHolder, 2)) && -1 === n.indexOf(t) && n.push(t),
            e._prev && We(e._prev, n, r)),
          n
        );
      }
      function Xe(e, n) {
        var r = n ? n._numPrev + 1 : 0;
        r < 100 && ((e._prev = n), (e._numPrev = r));
      }
      function Ye() {
        Qe() && Je();
      }
      function Qe() {
        var e = Ve;
        return (Ve = !1), (Se = !1), e;
      }
      function Je() {
        var e, n, r;
        do {
          for (; je.length > 0; )
            for (e = je, je = [], r = e.length, n = 0; n < r; ++n) {
              var t = e[n];
              t[0].apply(null, t[1]);
            }
        } while (je.length > 0);
        (Ve = !0), (Se = !0);
      }
      function $e() {
        var e = Ae;
        (Ae = []),
          e.forEach(function (e) {
            e._PSD.onunhandled.call(null, e._value, e);
          });
        for (var n = Le.slice(0), r = n.length; r; ) n[--r]();
      }
      function Ze(e) {
        return new Te(he, !1, e);
      }
      function en(e, n) {
        var r = Fe;
        return function () {
          var t = Qe(),
            a = Fe;
          try {
            return pn(r, !0), e.apply(this, arguments);
          } catch (m) {
            n && n(m);
          } finally {
            pn(a, !1), t && Je();
          }
        };
      }
      l(Te.prototype, {
        then: ze,
        _then: function (e, n) {
          Ue(this, new Ke(null, null, e, n, Fe));
        },
        catch: function (e) {
          if (1 === arguments.length) return this.then(null, e);
          var n = arguments[0],
            r = arguments[1];
          return this.then(
            null,
            'function' == typeof n
              ? function (e) {
                  return e instanceof n ? r(e) : Ze(e);
                }
              : function (e) {
                  return e && e.name === n ? r(e) : Ze(e);
                }
          );
        },
        finally: function (e) {
          return this.then(
            function (n) {
              return e(), n;
            },
            function (n) {
              return e(), Ze(n);
            }
          );
        },
        stack: {
          get: function () {
            if (this._stack) return this._stack;
            try {
              Ge = !0;
              var e = We(this, [], 20).join('\nFrom previous: ');
              return null !== this._state && (this._stack = e), e;
            } finally {
              Ge = !1;
            }
          }
        },
        timeout: function (e, n) {
          var r = this;
          return e < 1 / 0
            ? new Te(function (t, a) {
                var m = setTimeout(function () {
                  return a(new me.Timeout(n));
                }, e);
                r.then(t, a).finally(clearTimeout.bind(null, m));
              })
            : this;
        }
      }),
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          d(Te.prototype, Symbol.toStringTag, 'Dexie.Promise'),
        (Pe.env = dn()),
        l(Te, {
          all: function () {
            var e = M.apply(null, arguments).map(sn);
            return new Te(function (n, r) {
              0 === e.length && n([]);
              var t = e.length;
              e.forEach(function (a, m) {
                return Te.resolve(a).then(function (r) {
                  (e[m] = r), --t || n(e);
                }, r);
              });
            });
          },
          resolve: function (e) {
            if (e instanceof Te) return e;
            if (e && 'function' == typeof e.then)
              return new Te(function (n, r) {
                e.then(n, r);
              });
            var n = new Te(he, !0, e);
            return Xe(n, Oe), n;
          },
          reject: Ze,
          race: function () {
            var e = M.apply(null, arguments).map(sn);
            return new Te(function (n, r) {
              e.map(function (e) {
                return Te.resolve(e).then(n, r);
              });
            });
          },
          PSD: {
            get: function () {
              return Fe;
            },
            set: function (e) {
              return (Fe = e);
            }
          },
          totalEchoes: {
            get: function () {
              return mn;
            }
          },
          newPSD: un,
          usePSD: cn,
          scheduler: {
            get: function () {
              return we;
            },
            set: function (e) {
              we = e;
            }
          },
          rejectionMapper: {
            get: function () {
              return Ee;
            },
            set: function (e) {
              Ee = e;
            }
          },
          follow: function (e, n) {
            return new Te(function (r, t) {
              return un(
                function (n, r) {
                  var t = Fe;
                  (t.unhandleds = []),
                    (t.onunhandled = r),
                    (t.finalize = se(function () {
                      var e = this;
                      Le.push(function t() {
                        0 === e.unhandleds.length ? n() : r(e.unhandleds[0]),
                          Le.splice(Le.indexOf(t), 1);
                      }),
                        ++De,
                        we(function () {
                          0 == --De && $e();
                        }, []);
                    }, t.finalize)),
                    e();
                },
                n,
                r,
                t
              );
            });
          }
        }),
        xe &&
          (xe.allSettled &&
            d(Te, 'allSettled', function () {
              var e = M.apply(null, arguments).map(sn);
              return new Te(function (n) {
                0 === e.length && n([]);
                var r = e.length,
                  t = new Array(r);
                e.forEach(function (e, a) {
                  return Te.resolve(e)
                    .then(
                      function (e) {
                        return (t[a] = { status: 'fulfilled', value: e });
                      },
                      function (e) {
                        return (t[a] = { status: 'rejected', reason: e });
                      }
                    )
                    .then(function () {
                      return --r || n(t);
                    });
                });
              });
            }),
          xe.any &&
            'undefined' != typeof AggregateError &&
            d(Te, 'any', function () {
              var e = M.apply(null, arguments).map(sn);
              return new Te(function (n, r) {
                0 === e.length && r(new AggregateError([]));
                var t = e.length,
                  a = new Array(t);
                e.forEach(function (e, m) {
                  return Te.resolve(e).then(
                    function (e) {
                      return n(e);
                    },
                    function (e) {
                      (a[m] = e), --t || r(new AggregateError(a));
                    }
                  );
                });
              });
            }));
      var nn = { awaits: 0, echoes: 0, id: 0 },
        rn = 0,
        tn = [],
        an = 0,
        mn = 0,
        on = 0;
      function un(e, n, r, t) {
        var a = Fe,
          m = Object.create(a);
        (m.parent = a), (m.ref = 0), (m.global = !1), (m.id = ++on);
        var o = Pe.env;
        (m.env = Ce
          ? {
              Promise: Te,
              PromiseProp: { value: Te, configurable: !0, writable: !0 },
              all: Te.all,
              race: Te.race,
              allSettled: Te.allSettled,
              any: Te.any,
              resolve: Te.resolve,
              reject: Te.reject,
              nthen: gn(o.nthen, m),
              gthen: gn(o.gthen, m)
            }
          : {}),
          n && b(m, n),
          ++a.ref,
          (m.finalize = function () {
            --this.parent.ref || this.parent.finalize();
          });
        var i = cn(m, e, r, t);
        return 0 === m.ref && m.finalize(), i;
      }
      function bn() {
        return nn.id || (nn.id = ++rn), ++nn.awaits, (nn.echoes += 100), nn.id;
      }
      function yn() {
        return (
          !!nn.awaits &&
          (0 == --nn.awaits && (nn.id = 0), (nn.echoes = 100 * nn.awaits), !0)
        );
      }
      function sn(e) {
        return nn.echoes && e && e.constructor === xe
          ? (bn(),
            e.then(
              function (e) {
                return yn(), e;
              },
              function (e) {
                return yn(), In(e);
              }
            ))
          : e;
      }
      function Nn(e) {
        ++mn,
          (nn.echoes && 0 != --nn.echoes) || (nn.echoes = nn.id = 0),
          tn.push(Fe),
          pn(e, !0);
      }
      function ln() {
        var e = tn[tn.length - 1];
        tn.pop(), pn(e, !1);
      }
      function pn(e, n) {
        var r = Fe;
        if (
          ((n ? !nn.echoes || (an++ && e === Fe) : !an || (--an && e === Fe)) ||
            hn(n ? Nn.bind(null, e) : ln),
          e !== Fe && ((Fe = e), r === Pe && (Pe.env = dn()), Ce))
        ) {
          var t = Pe.env.Promise,
            a = e.env;
          (ve.then = a.nthen),
            (t.prototype.then = a.gthen),
            (r.global || e.global) &&
              (Object.defineProperty(u, 'Promise', a.PromiseProp),
              (t.all = a.all),
              (t.race = a.race),
              (t.resolve = a.resolve),
              (t.reject = a.reject),
              a.allSettled && (t.allSettled = a.allSettled),
              a.any && (t.any = a.any));
        }
      }
      function dn() {
        var e = u.Promise;
        return Ce
          ? {
              Promise: e,
              PromiseProp: Object.getOwnPropertyDescriptor(u, 'Promise'),
              all: e.all,
              race: e.race,
              allSettled: e.allSettled,
              any: e.any,
              resolve: e.resolve,
              reject: e.reject,
              nthen: ve.then,
              gthen: e.prototype.then
            }
          : {};
      }
      function cn(e, n, r, t, a) {
        var m = Fe;
        try {
          return pn(e, !0), n(r, t, a);
        } finally {
          pn(m, !1);
        }
      }
      function hn(e) {
        ke.call(ge, e);
      }
      function fn(e, n, r, t) {
        return 'function' != typeof e
          ? e
          : function () {
              var a = Fe;
              r && bn(), pn(n, !0);
              try {
                return e.apply(this, arguments);
              } finally {
                pn(a, !1), t && hn(yn);
              }
            };
      }
      function gn(e, n) {
        return function (r, t) {
          return e.call(this, fn(r, n), fn(t, n));
        };
      }
      function vn(e, n) {
        var r;
        try {
          r = n.onuncatched(e);
        } catch (m) {}
        if (!1 !== r)
          try {
            var t,
              a = { promise: n, reason: e };
            if (
              (u.document && document.createEvent
                ? ((t = document.createEvent('Event')).initEvent(
                    'unhandledrejection',
                    !0,
                    !0
                  ),
                  b(t, a))
                : u.CustomEvent &&
                  b(
                    (t = new CustomEvent('unhandledrejection', { detail: a })),
                    a
                  ),
              t &&
                u.dispatchEvent &&
                (dispatchEvent(t),
                !u.PromiseRejectionEvent && u.onunhandledrejection))
            )
              try {
                u.onunhandledrejection(t);
              } catch (o) {}
            q &&
              t &&
              !t.defaultPrevented &&
              console.warn('Unhandled rejection: ' + (e.stack || e));
          } catch (m) {}
      }
      -1 === ('' + ke).indexOf('[native code]') && (bn = yn = ue);
      var In = Te.reject;
      function kn(e, n, r, t) {
        if (e._state.openComplete || Fe.letThrough) {
          var a = e._createTransaction(n, r, e._dbSchema);
          try {
            a.create();
          } catch (m) {
            return In(m);
          }
          return a
            ._promise(n, function (e, n) {
              return un(function () {
                return (Fe.trans = a), t(e, n, a);
              });
            })
            .then(function (e) {
              return a._completion.then(function () {
                return e;
              });
            });
        }
        if (!e._state.isBeingOpened) {
          if (!e._options.autoOpen) return In(new me.DatabaseClosed());
          e.open().catch(ue);
        }
        return e._state.dbReadyPromise.then(function () {
          return kn(e, n, r, t);
        });
      }
      var xn = String.fromCharCode(65535),
        Cn =
          'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
        Gn = [],
        _n =
          'undefined' != typeof navigator &&
          /(MSIE|Trident|Edge)/.test(navigator.userAgent),
        wn = _n,
        Vn = _n,
        Sn = function (e) {
          return !/(dexie\.js|dexie\.min\.js)/.test(e);
        };
      function An(e, n) {
        return e
          ? n
            ? function () {
                return e.apply(this, arguments) && n.apply(this, arguments);
              }
            : e
          : n;
      }
      var Rn = {
        type: 3,
        lower: -1 / 0,
        lowerOpen: !1,
        upper: [[]],
        upperOpen: !1
      };
      function On(e) {
        return function (n) {
          return void 0 === G(n, e) && w((n = P(n)), e), n;
        };
      }
      var En = (function () {
        function e() {}
        return (
          (e.prototype._trans = function (e, n, r) {
            var t = this._tx || Fe.trans,
              a = this.name;
            function m(e, r, t) {
              if (!t.schema[a])
                throw new me.NotFound(
                  'Table ' + a + ' not part of transaction'
                );
              return n(t.idbtrans, t);
            }
            var o = Qe();
            try {
              return t && t.db === this.db
                ? t === Fe.trans
                  ? t._promise(e, m, r)
                  : un(
                      function () {
                        return t._promise(e, m, r);
                      },
                      { trans: t, transless: Fe.transless || Fe }
                    )
                : kn(this.db, e, [this.name], m);
            } finally {
              o && Je();
            }
          }),
          (e.prototype.get = function (e, n) {
            var r = this;
            return e && e.constructor === Object
              ? this.where(e).first(n)
              : this._trans('readonly', function (n) {
                  return r.core.get({ trans: n, key: e }).then(function (e) {
                    return r.hook.reading.fire(e);
                  });
                }).then(n);
          }),
          (e.prototype.where = function (e) {
            if ('string' == typeof e) return new this.db.WhereClause(this, e);
            if (i(e))
              return new this.db.WhereClause(this, '[' + e.join('+') + ']');
            var n = o(e);
            if (1 === n.length) return this.where(n[0]).equals(e[n[0]]);
            var r = this.schema.indexes
              .concat(this.schema.primKey)
              .filter(function (e) {
                return (
                  e.compound &&
                  n.every(function (n) {
                    return e.keyPath.indexOf(n) >= 0;
                  }) &&
                  e.keyPath.every(function (e) {
                    return n.indexOf(e) >= 0;
                  })
                );
              })[0];
            if (r && this.db._maxKey !== xn)
              return this.where(r.name).equals(
                r.keyPath.map(function (n) {
                  return e[n];
                })
              );
            !r &&
              q &&
              console.warn(
                'The query ' +
                  JSON.stringify(e) +
                  ' on ' +
                  this.name +
                  ' would benefit of a compound index [' +
                  n.join('+') +
                  ']'
              );
            var t = this.schema.idxByName,
              a = this.db._deps.indexedDB;
            function m(e, n) {
              try {
                return 0 === a.cmp(e, n);
              } catch (r) {
                return !1;
              }
            }
            var u = n.reduce(
                function (n, r) {
                  var a = n[0],
                    o = n[1],
                    u = t[r],
                    b = e[r];
                  return [
                    a || u,
                    a || !u
                      ? An(
                          o,
                          u && u.multi
                            ? function (e) {
                                var n = G(e, r);
                                return (
                                  i(n) &&
                                  n.some(function (e) {
                                    return m(b, e);
                                  })
                                );
                              }
                            : function (e) {
                                return m(b, G(e, r));
                              }
                        )
                      : o
                  ];
                },
                [null, null]
              ),
              b = u[0],
              y = u[1];
            return b
              ? this.where(b.name).equals(e[b.keyPath]).filter(y)
              : r
              ? this.filter(y)
              : this.where(n).equals('');
          }),
          (e.prototype.filter = function (e) {
            return this.toCollection().and(e);
          }),
          (e.prototype.count = function (e) {
            return this.toCollection().count(e);
          }),
          (e.prototype.offset = function (e) {
            return this.toCollection().offset(e);
          }),
          (e.prototype.limit = function (e) {
            return this.toCollection().limit(e);
          }),
          (e.prototype.each = function (e) {
            return this.toCollection().each(e);
          }),
          (e.prototype.toArray = function (e) {
            return this.toCollection().toArray(e);
          }),
          (e.prototype.toCollection = function () {
            return new this.db.Collection(new this.db.WhereClause(this));
          }),
          (e.prototype.orderBy = function (e) {
            return new this.db.Collection(
              new this.db.WhereClause(this, i(e) ? '[' + e.join('+') + ']' : e)
            );
          }),
          (e.prototype.reverse = function () {
            return this.toCollection().reverse();
          }),
          (e.prototype.mapToClass = function (e) {
            this.schema.mappedClass = e;
            var n = function (n) {
              if (!n) return n;
              var r = Object.create(e.prototype);
              for (var t in n)
                if (N(n, t))
                  try {
                    r[t] = n[t];
                  } catch (a) {}
              return r;
            };
            return (
              this.schema.readHook &&
                this.hook.reading.unsubscribe(this.schema.readHook),
              (this.schema.readHook = n),
              this.hook('reading', n),
              e
            );
          }),
          (e.prototype.defineClass = function () {
            return this.mapToClass(function (e) {
              b(this, e);
            });
          }),
          (e.prototype.add = function (e, n) {
            var r = this,
              t = this.schema.primKey,
              a = t.keyPath,
              m = e;
            return (
              a && t.auto && (m = On(a)(e)),
              this._trans('readwrite', function (e) {
                return r.core.mutate({
                  trans: e,
                  type: 'add',
                  keys: null != n ? [n] : null,
                  values: [m]
                });
              })
                .then(function (e) {
                  return e.numFailures
                    ? Te.reject(e.failures[0])
                    : e.lastResult;
                })
                .then(function (n) {
                  if (a)
                    try {
                      _(e, a, n);
                    } catch (r) {}
                  return n;
                })
            );
          }),
          (e.prototype.update = function (e, n) {
            if ('object' != typeof n || i(n))
              throw new me.InvalidArgument('Modifications must be an object.');
            if ('object' != typeof e || i(e))
              return this.where(':id').equals(e).modify(n);
            o(n).forEach(function (r) {
              _(e, r, n[r]);
            });
            var r = G(e, this.schema.primKey.keyPath);
            return void 0 === r
              ? In(
                  new me.InvalidArgument(
                    'Given object does not contain its primary key'
                  )
                )
              : this.where(':id').equals(r).modify(n);
          }),
          (e.prototype.put = function (e, n) {
            var r = this,
              t = this.schema.primKey,
              a = t.keyPath,
              m = e;
            return (
              a && t.auto && (m = On(a)(e)),
              this._trans('readwrite', function (e) {
                return r.core.mutate({
                  trans: e,
                  type: 'put',
                  values: [m],
                  keys: null != n ? [n] : null
                });
              })
                .then(function (e) {
                  return e.numFailures
                    ? Te.reject(e.failures[0])
                    : e.lastResult;
                })
                .then(function (n) {
                  if (a)
                    try {
                      _(e, a, n);
                    } catch (r) {}
                  return n;
                })
            );
          }),
          (e.prototype.delete = function (e) {
            var n = this;
            return this._trans('readwrite', function (r) {
              return n.core.mutate({ trans: r, type: 'delete', keys: [e] });
            }).then(function (e) {
              return e.numFailures ? Te.reject(e.failures[0]) : void 0;
            });
          }),
          (e.prototype.clear = function () {
            var e = this;
            return this._trans('readwrite', function (n) {
              return e.core.mutate({
                trans: n,
                type: 'deleteRange',
                range: Rn
              });
            }).then(function (e) {
              return e.numFailures ? Te.reject(e.failures[0]) : void 0;
            });
          }),
          (e.prototype.bulkGet = function (e) {
            var n = this;
            return this._trans('readonly', function (r) {
              return n.core.getMany({ keys: e, trans: r }).then(function (e) {
                return e.map(function (e) {
                  return n.hook.reading.fire(e);
                });
              });
            });
          }),
          (e.prototype.bulkAdd = function (e, n, r) {
            var t = this,
              a = Array.isArray(n) ? n : void 0,
              m = (r = r || (a ? void 0 : n)) ? r.allKeys : void 0;
            return this._trans('readwrite', function (n) {
              var r = t.schema.primKey,
                o = r.auto,
                i = r.keyPath;
              if (i && a)
                throw new me.InvalidArgument(
                  'bulkAdd(): keys argument invalid on tables with inbound keys'
                );
              if (a && a.length !== e.length)
                throw new me.InvalidArgument(
                  'Arguments objects and keys must have the same length'
                );
              var u = e.length,
                b = i && o ? e.map(On(i)) : e;
              return t.core
                .mutate({
                  trans: n,
                  type: 'add',
                  keys: a,
                  values: b,
                  wantResults: m
                })
                .then(function (e) {
                  var n = e.numFailures,
                    r = e.failures;
                  if (0 === n) return m ? e.results : e.lastResult;
                  throw new re(
                    t.name +
                      '.bulkAdd(): ' +
                      n +
                      ' of ' +
                      u +
                      ' operations failed',
                    Object.keys(r).map(function (e) {
                      return r[e];
                    })
                  );
                });
            });
          }),
          (e.prototype.bulkPut = function (e, n, r) {
            var t = this,
              a = Array.isArray(n) ? n : void 0,
              m = (r = r || (a ? void 0 : n)) ? r.allKeys : void 0;
            return this._trans('readwrite', function (n) {
              var r = t.schema.primKey,
                o = r.auto,
                i = r.keyPath;
              if (i && a)
                throw new me.InvalidArgument(
                  'bulkPut(): keys argument invalid on tables with inbound keys'
                );
              if (a && a.length !== e.length)
                throw new me.InvalidArgument(
                  'Arguments objects and keys must have the same length'
                );
              var u = e.length,
                b = i && o ? e.map(On(i)) : e;
              return t.core
                .mutate({
                  trans: n,
                  type: 'put',
                  keys: a,
                  values: b,
                  wantResults: m
                })
                .then(function (e) {
                  var n = e.numFailures,
                    r = e.failures;
                  if (0 === n) return m ? e.results : e.lastResult;
                  throw new re(
                    t.name +
                      '.bulkPut(): ' +
                      n +
                      ' of ' +
                      u +
                      ' operations failed',
                    Object.keys(r).map(function (e) {
                      return r[e];
                    })
                  );
                });
            });
          }),
          (e.prototype.bulkDelete = function (e) {
            var n = this,
              r = e.length;
            return this._trans('readwrite', function (r) {
              return n.core.mutate({ trans: r, type: 'delete', keys: e });
            }).then(function (e) {
              var t = e.numFailures;
              if (0 === t) return e.lastResult;
              throw new re(
                n.name +
                  '.bulkDelete(): ' +
                  t +
                  ' of ' +
                  r +
                  ' operations failed',
                e.failures
              );
            });
          }),
          e
        );
      })();
      function Pn(e) {
        var n = {},
          r = function (r, t) {
            if (t) {
              for (var a = arguments.length, m = new Array(a - 1); --a; )
                m[a - 1] = arguments[a];
              return n[r].subscribe.apply(null, m), e;
            }
            if ('string' == typeof r) return n[r];
          };
        r.addEventType = m;
        for (var t = 1, a = arguments.length; t < a; ++t) m(arguments[t]);
        return r;
        function m(e, t, a) {
          if ('object' == typeof e) return u(e);
          t || (t = de), a || (a = ue);
          var m = {
            subscribers: [],
            fire: a,
            subscribe: function (e) {
              -1 === m.subscribers.indexOf(e) &&
                (m.subscribers.push(e), (m.fire = t(m.fire, e)));
            },
            unsubscribe: function (e) {
              (m.subscribers = m.subscribers.filter(function (n) {
                return n !== e;
              })),
                (m.fire = m.subscribers.reduce(t, a));
            }
          };
          return (n[e] = r[e] = m), m;
        }
        function u(e) {
          o(e).forEach(function (n) {
            var r = e[n];
            if (i(r)) m(n, e[n][0], e[n][1]);
            else {
              if ('asap' !== r)
                throw new me.InvalidArgument('Invalid event config');
              var t = m(n, be, function () {
                for (var e = arguments.length, n = new Array(e); e--; )
                  n[e] = arguments[e];
                t.subscribers.forEach(function (e) {
                  x(function () {
                    e.apply(null, n);
                  });
                });
              });
            }
          });
        }
      }
      function Fn(e, n) {
        return c(n).from({ prototype: e }), n;
      }
      function jn(e, n) {
        return (
          !(e.filter || e.algorithm || e.or) &&
          (n ? e.justLimit : !e.replayFilter)
        );
      }
      function Dn(e, n) {
        e.filter = An(e.filter, n);
      }
      function Ln(e, n, r) {
        var t = e.replayFilter;
        (e.replayFilter = t
          ? function () {
              return An(t(), n());
            }
          : n),
          (e.justLimit = r && !t);
      }
      function Tn(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var r = n.getIndexByKeyPath(e.index);
        if (!r)
          throw new me.Schema(
            'KeyPath ' +
              e.index +
              ' on object store ' +
              n.name +
              ' is not indexed'
          );
        return r;
      }
      function zn(e, n, r) {
        var t = Tn(e, n.schema);
        return n.openCursor({
          trans: r,
          values: !e.keysOnly,
          reverse: 'prev' === e.dir,
          unique: !!e.unique,
          query: { index: t, range: e.range }
        });
      }
      function Kn(e, n, r, t) {
        var a = e.replayFilter ? An(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var m = {},
            o = function (e, r, t) {
              if (
                !a ||
                a(
                  r,
                  t,
                  function (e) {
                    return r.stop(e);
                  },
                  function (e) {
                    return r.fail(e);
                  }
                )
              ) {
                var o = r.primaryKey,
                  i = '' + o;
                '[object ArrayBuffer]' === i && (i = '' + new Uint8Array(o)),
                  N(m, i) || ((m[i] = !0), n(e, r, t));
              }
            };
          return Promise.all([
            e.or._iterate(o, r),
            Mn(zn(e, t, r), e.algorithm, o, !e.keysOnly && e.valueMapper)
          ]);
        }
        return Mn(
          zn(e, t, r),
          An(e.algorithm, a),
          n,
          !e.keysOnly && e.valueMapper
        );
      }
      function Mn(e, n, r, t) {
        var a = en(
          t
            ? function (e, n, a) {
                return r(t(e), n, a);
              }
            : r
        );
        return e.then(function (e) {
          if (e)
            return e.start(function () {
              var r = function () {
                return e.continue();
              };
              (n &&
                !n(
                  e,
                  function (e) {
                    return (r = e);
                  },
                  function (n) {
                    e.stop(n), (r = ue);
                  },
                  function (n) {
                    e.fail(n), (r = ue);
                  }
                )) ||
                a(e.value, e, function (e) {
                  return (r = e);
                }),
                r();
            });
        });
      }
      var Bn = (function () {
        function e() {}
        return (
          (e.prototype._read = function (e, n) {
            var r = this._ctx;
            return r.error
              ? r.table._trans(null, In.bind(null, r.error))
              : r.table._trans('readonly', e).then(n);
          }),
          (e.prototype._write = function (e) {
            var n = this._ctx;
            return n.error
              ? n.table._trans(null, In.bind(null, n.error))
              : n.table._trans('readwrite', e, 'locked');
          }),
          (e.prototype._addAlgorithm = function (e) {
            var n = this._ctx;
            n.algorithm = An(n.algorithm, e);
          }),
          (e.prototype._iterate = function (e, n) {
            return Kn(this._ctx, e, n, this._ctx.table.core);
          }),
          (e.prototype.clone = function (e) {
            var n = Object.create(this.constructor.prototype),
              r = Object.create(this._ctx);
            return e && b(r, e), (n._ctx = r), n;
          }),
          (e.prototype.raw = function () {
            return (this._ctx.valueMapper = null), this;
          }),
          (e.prototype.each = function (e) {
            var n = this._ctx;
            return this._read(function (r) {
              return Kn(n, e, r, n.table.core);
            });
          }),
          (e.prototype.count = function (e) {
            var n = this;
            return this._read(function (e) {
              var r = n._ctx,
                t = r.table.core;
              if (jn(r, !0))
                return t
                  .count({
                    trans: e,
                    query: { index: Tn(r, t.schema), range: r.range }
                  })
                  .then(function (e) {
                    return Math.min(e, r.limit);
                  });
              var a = 0;
              return Kn(
                r,
                function () {
                  return ++a, !1;
                },
                e,
                t
              ).then(function () {
                return a;
              });
            }).then(e);
          }),
          (e.prototype.sortBy = function (e, n) {
            var r = e.split('.').reverse(),
              t = r[0],
              a = r.length - 1;
            function m(e, n) {
              return n ? m(e[r[n]], n - 1) : e[t];
            }
            var o = 'next' === this._ctx.dir ? 1 : -1;
            function i(e, n) {
              var r = m(e, a),
                t = m(n, a);
              return r < t ? -o : r > t ? o : 0;
            }
            return this.toArray(function (e) {
              return e.sort(i);
            }).then(n);
          }),
          (e.prototype.toArray = function (e) {
            var n = this;
            return this._read(function (e) {
              var r = n._ctx;
              if ('next' === r.dir && jn(r, !0) && r.limit > 0) {
                var t = r.valueMapper,
                  a = Tn(r, r.table.core.schema);
                return r.table.core
                  .query({
                    trans: e,
                    limit: r.limit,
                    values: !0,
                    query: { index: a, range: r.range }
                  })
                  .then(function (e) {
                    var n = e.result;
                    return t ? n.map(t) : n;
                  });
              }
              var m = [];
              return Kn(
                r,
                function (e) {
                  return m.push(e);
                },
                e,
                r.table.core
              ).then(function () {
                return m;
              });
            }, e);
          }),
          (e.prototype.offset = function (e) {
            var n = this._ctx;
            return (
              e <= 0 ||
                ((n.offset += e),
                jn(n)
                  ? Ln(n, function () {
                      var n = e;
                      return function (e, r) {
                        return (
                          0 === n ||
                          (1 === n
                            ? (--n, !1)
                            : (r(function () {
                                e.advance(n), (n = 0);
                              }),
                              !1))
                        );
                      };
                    })
                  : Ln(n, function () {
                      var n = e;
                      return function () {
                        return --n < 0;
                      };
                    })),
              this
            );
          }),
          (e.prototype.limit = function (e) {
            return (
              (this._ctx.limit = Math.min(this._ctx.limit, e)),
              Ln(
                this._ctx,
                function () {
                  var n = e;
                  return function (e, r, t) {
                    return --n <= 0 && r(t), n >= 0;
                  };
                },
                !0
              ),
              this
            );
          }),
          (e.prototype.until = function (e, n) {
            return (
              Dn(this._ctx, function (r, t, a) {
                return !e(r.value) || (t(a), n);
              }),
              this
            );
          }),
          (e.prototype.first = function (e) {
            return this.limit(1)
              .toArray(function (e) {
                return e[0];
              })
              .then(e);
          }),
          (e.prototype.last = function (e) {
            return this.reverse().first(e);
          }),
          (e.prototype.filter = function (e) {
            var n;
            return (
              Dn(this._ctx, function (n) {
                return e(n.value);
              }),
              ((n = this._ctx).isMatch = An(n.isMatch, e)),
              this
            );
          }),
          (e.prototype.and = function (e) {
            return this.filter(e);
          }),
          (e.prototype.or = function (e) {
            return new this.db.WhereClause(this._ctx.table, e, this);
          }),
          (e.prototype.reverse = function () {
            return (
              (this._ctx.dir = 'prev' === this._ctx.dir ? 'next' : 'prev'),
              this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
              this
            );
          }),
          (e.prototype.desc = function () {
            return this.reverse();
          }),
          (e.prototype.eachKey = function (e) {
            var n = this._ctx;
            return (
              (n.keysOnly = !n.isMatch),
              this.each(function (n, r) {
                e(r.key, r);
              })
            );
          }),
          (e.prototype.eachUniqueKey = function (e) {
            return (this._ctx.unique = 'unique'), this.eachKey(e);
          }),
          (e.prototype.eachPrimaryKey = function (e) {
            var n = this._ctx;
            return (
              (n.keysOnly = !n.isMatch),
              this.each(function (n, r) {
                e(r.primaryKey, r);
              })
            );
          }),
          (e.prototype.keys = function (e) {
            var n = this._ctx;
            n.keysOnly = !n.isMatch;
            var r = [];
            return this.each(function (e, n) {
              r.push(n.key);
            })
              .then(function () {
                return r;
              })
              .then(e);
          }),
          (e.prototype.primaryKeys = function (e) {
            var n = this._ctx;
            if ('next' === n.dir && jn(n, !0) && n.limit > 0)
              return this._read(function (e) {
                var r = Tn(n, n.table.core.schema);
                return n.table.core.query({
                  trans: e,
                  values: !1,
                  limit: n.limit,
                  query: { index: r, range: n.range }
                });
              })
                .then(function (e) {
                  return e.result;
                })
                .then(e);
            n.keysOnly = !n.isMatch;
            var r = [];
            return this.each(function (e, n) {
              r.push(n.primaryKey);
            })
              .then(function () {
                return r;
              })
              .then(e);
          }),
          (e.prototype.uniqueKeys = function (e) {
            return (this._ctx.unique = 'unique'), this.keys(e);
          }),
          (e.prototype.firstKey = function (e) {
            return this.limit(1)
              .keys(function (e) {
                return e[0];
              })
              .then(e);
          }),
          (e.prototype.lastKey = function (e) {
            return this.reverse().firstKey(e);
          }),
          (e.prototype.distinct = function () {
            var e = this._ctx,
              n = e.index && e.table.schema.idxByName[e.index];
            if (!n || !n.multi) return this;
            var r = {};
            return (
              Dn(this._ctx, function (e) {
                var n = e.primaryKey.toString(),
                  t = N(r, n);
                return (r[n] = !0), !t;
              }),
              this
            );
          }),
          (e.prototype.modify = function (e) {
            var n = this,
              r = this._ctx;
            return this._write(function (t) {
              var a;
              if ('function' == typeof e) a = e;
              else {
                var m = o(e),
                  i = m.length;
                a = function (n) {
                  for (var r = !1, t = 0; t < i; ++t) {
                    var a = m[t],
                      o = e[a];
                    G(n, a) !== o && (_(n, a, o), (r = !0));
                  }
                  return r;
                };
              }
              var u = r.table.core,
                b = u.schema.primaryKey,
                y = b.outbound,
                s = b.extractKey,
                N = 'testmode' in Rr ? 1 : 2e3,
                l = n.db.core.cmp,
                p = [],
                d = 0,
                c = [],
                h = function (e, n) {
                  var r = n.failures;
                  d += e - n.numFailures;
                  for (var t = 0, a = o(r); t < a.length; t++) p.push(r[a[t]]);
                };
              return n
                .clone()
                .primaryKeys()
                .then(function (e) {
                  var n = function (r) {
                    var m = Math.min(N, e.length - r);
                    return u
                      .getMany({ trans: t, keys: e.slice(r, r + m) })
                      .then(function (o) {
                        for (
                          var i = [], b = [], p = y ? [] : null, d = [], c = 0;
                          c < m;
                          ++c
                        ) {
                          var f = o[c],
                            g = { value: P(f), primKey: e[r + c] };
                          !1 !== a.call(g, g.value, g) &&
                            (null == g.value
                              ? d.push(e[r + c])
                              : y || 0 === l(s(f), s(g.value))
                              ? (b.push(g.value), y && p.push(e[r + c]))
                              : (d.push(e[r + c]), i.push(g.value)));
                        }
                        return Promise.resolve(
                          i.length > 0 &&
                            u
                              .mutate({ trans: t, type: 'add', values: i })
                              .then(function (e) {
                                for (var n in e.failures)
                                  d.splice(parseInt(n), 1);
                                h(i.length, e);
                              })
                        )
                          .then(function (e) {
                            return (
                              b.length > 0 &&
                              u
                                .mutate({
                                  trans: t,
                                  type: 'put',
                                  keys: p,
                                  values: b
                                })
                                .then(function (e) {
                                  return h(b.length, e);
                                })
                            );
                          })
                          .then(function () {
                            return (
                              d.length > 0 &&
                              u
                                .mutate({ trans: t, type: 'delete', keys: d })
                                .then(function (e) {
                                  return h(d.length, e);
                                })
                            );
                          })
                          .then(function () {
                            return e.length > r + m && n(r + N);
                          });
                      });
                  };
                  return n(0).then(function () {
                    if (p.length > 0)
                      throw new ne(
                        'Error modifying one or more objects',
                        p,
                        d,
                        c
                      );
                    return e.length;
                  });
                });
            });
          }),
          (e.prototype.delete = function () {
            var e = this._ctx,
              n = e.range;
            return jn(e) && ((e.isPrimKey && !Vn) || 3 === n.type)
              ? this._write(function (r) {
                  var t = n;
                  return e.table.core
                    .count({
                      trans: r,
                      query: { index: e.table.core.schema.primaryKey, range: t }
                    })
                    .then(function (n) {
                      return e.table.core
                        .mutate({ trans: r, type: 'deleteRange', range: t })
                        .then(function (e) {
                          var r = e.failures,
                            t = e.numFailures;
                          if (t)
                            throw new ne(
                              'Could not delete some values',
                              Object.keys(r).map(function (e) {
                                return r[e];
                              }),
                              n - t
                            );
                          return n - t;
                        });
                    });
                })
              : this.modify(function (e, n) {
                  return (n.value = null);
                });
          }),
          e
        );
      })();
      function qn(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function Un(e, n) {
        return e > n ? -1 : e === n ? 0 : 1;
      }
      function Hn(e, n, r) {
        var t = e instanceof $n ? new e.Collection(e) : e;
        return (t._ctx.error = r ? new r(n) : new TypeError(n)), t;
      }
      function Wn(e) {
        return new e.Collection(e, function () {
          return Jn('');
        }).limit(0);
      }
      function Xn(e, n, r, t, a, m) {
        for (var o = Math.min(e.length, t.length), i = -1, u = 0; u < o; ++u) {
          var b = n[u];
          if (b !== t[u])
            return a(e[u], r[u]) < 0
              ? e.substr(0, u) + r[u] + r.substr(u + 1)
              : a(e[u], t[u]) < 0
              ? e.substr(0, u) + t[u] + r.substr(u + 1)
              : i >= 0
              ? e.substr(0, i) + n[i] + r.substr(i + 1)
              : null;
          a(e[u], b) < 0 && (i = u);
        }
        return o < t.length && 'next' === m
          ? e + r.substr(e.length)
          : o < e.length && 'prev' === m
          ? e.substr(0, r.length)
          : i < 0
          ? null
          : e.substr(0, i) + t[i] + r.substr(i + 1);
      }
      function Yn(e, n, r, t) {
        var a,
          m,
          o,
          i,
          u,
          b,
          y,
          s = r.length;
        if (
          !r.every(function (e) {
            return 'string' == typeof e;
          })
        )
          return Hn(e, 'String expected.');
        function N(e) {
          (a = (function (e) {
            return 'next' === e
              ? function (e) {
                  return e.toUpperCase();
                }
              : function (e) {
                  return e.toLowerCase();
                };
          })(e)),
            (m = (function (e) {
              return 'next' === e
                ? function (e) {
                    return e.toLowerCase();
                  }
                : function (e) {
                    return e.toUpperCase();
                  };
            })(e)),
            (o = 'next' === e ? qn : Un);
          var n = r
            .map(function (e) {
              return { lower: m(e), upper: a(e) };
            })
            .sort(function (e, n) {
              return o(e.lower, n.lower);
            });
          (i = n.map(function (e) {
            return e.upper;
          })),
            (u = n.map(function (e) {
              return e.lower;
            })),
            (b = e),
            (y = 'next' === e ? '' : t);
        }
        N('next');
        var l = new e.Collection(e, function () {
          return Qn(i[0], u[s - 1] + t);
        });
        l._ondirectionchange = function (e) {
          N(e);
        };
        var p = 0;
        return (
          l._addAlgorithm(function (e, r, t) {
            var a = e.key;
            if ('string' != typeof a) return !1;
            var N = m(a);
            if (n(N, u, p)) return !0;
            for (var l = null, d = p; d < s; ++d) {
              var c = Xn(a, N, i[d], u[d], o, b);
              null === c && null === l
                ? (p = d + 1)
                : (null === l || o(l, c) > 0) && (l = c);
            }
            return (
              r(
                null !== l
                  ? function () {
                      e.continue(l + y);
                    }
                  : t
              ),
              !1
            );
          }),
          l
        );
      }
      function Qn(e, n, r, t) {
        return { type: 2, lower: e, upper: n, lowerOpen: r, upperOpen: t };
      }
      function Jn(e) {
        return { type: 1, lower: e, upper: e };
      }
      var $n = (function () {
        function e() {}
        return (
          Object.defineProperty(e.prototype, 'Collection', {
            get: function () {
              return this._ctx.table.db.Collection;
            },
            enumerable: !0,
            configurable: !0
          }),
          (e.prototype.between = function (e, n, r, t) {
            (r = !1 !== r), (t = !0 === t);
            try {
              return this._cmp(e, n) > 0 ||
                (0 === this._cmp(e, n) && (r || t) && (!r || !t))
                ? Wn(this)
                : new this.Collection(this, function () {
                    return Qn(e, n, !r, !t);
                  });
            } catch (a) {
              return Hn(this, Cn);
            }
          }),
          (e.prototype.equals = function (e) {
            return null == e
              ? Hn(this, Cn)
              : new this.Collection(this, function () {
                  return Jn(e);
                });
          }),
          (e.prototype.above = function (e) {
            return null == e
              ? Hn(this, Cn)
              : new this.Collection(this, function () {
                  return Qn(e, void 0, !0);
                });
          }),
          (e.prototype.aboveOrEqual = function (e) {
            return null == e
              ? Hn(this, Cn)
              : new this.Collection(this, function () {
                  return Qn(e, void 0, !1);
                });
          }),
          (e.prototype.below = function (e) {
            return null == e
              ? Hn(this, Cn)
              : new this.Collection(this, function () {
                  return Qn(void 0, e, !1, !0);
                });
          }),
          (e.prototype.belowOrEqual = function (e) {
            return null == e
              ? Hn(this, Cn)
              : new this.Collection(this, function () {
                  return Qn(void 0, e);
                });
          }),
          (e.prototype.startsWith = function (e) {
            return 'string' != typeof e
              ? Hn(this, 'String expected.')
              : this.between(e, e + xn, !0, !0);
          }),
          (e.prototype.startsWithIgnoreCase = function (e) {
            return '' === e
              ? this.startsWith(e)
              : Yn(
                  this,
                  function (e, n) {
                    return 0 === e.indexOf(n[0]);
                  },
                  [e],
                  xn
                );
          }),
          (e.prototype.equalsIgnoreCase = function (e) {
            return Yn(
              this,
              function (e, n) {
                return e === n[0];
              },
              [e],
              ''
            );
          }),
          (e.prototype.anyOfIgnoreCase = function () {
            var e = M.apply(K, arguments);
            return 0 === e.length
              ? Wn(this)
              : Yn(
                  this,
                  function (e, n) {
                    return -1 !== n.indexOf(e);
                  },
                  e,
                  ''
                );
          }),
          (e.prototype.startsWithAnyOfIgnoreCase = function () {
            var e = M.apply(K, arguments);
            return 0 === e.length
              ? Wn(this)
              : Yn(
                  this,
                  function (e, n) {
                    return n.some(function (n) {
                      return 0 === e.indexOf(n);
                    });
                  },
                  e,
                  xn
                );
          }),
          (e.prototype.anyOf = function () {
            var e = this,
              n = M.apply(K, arguments),
              r = this._cmp;
            try {
              n.sort(r);
            } catch (m) {
              return Hn(this, Cn);
            }
            if (0 === n.length) return Wn(this);
            var t = new this.Collection(this, function () {
              return Qn(n[0], n[n.length - 1]);
            });
            t._ondirectionchange = function (t) {
              n.sort((r = 'next' === t ? e._ascending : e._descending));
            };
            var a = 0;
            return (
              t._addAlgorithm(function (e, t, m) {
                for (var o = e.key; r(o, n[a]) > 0; )
                  if (++a === n.length) return t(m), !1;
                return (
                  0 === r(o, n[a]) ||
                  (t(function () {
                    e.continue(n[a]);
                  }),
                  !1)
                );
              }),
              t
            );
          }),
          (e.prototype.notEqual = function (e) {
            return this.inAnyRange(
              [
                [-1 / 0, e],
                [e, this.db._maxKey]
              ],
              { includeLowers: !1, includeUppers: !1 }
            );
          }),
          (e.prototype.noneOf = function () {
            var e = M.apply(K, arguments);
            if (0 === e.length) return new this.Collection(this);
            try {
              e.sort(this._ascending);
            } catch (r) {
              return Hn(this, Cn);
            }
            var n = e.reduce(function (e, n) {
              return e ? e.concat([[e[e.length - 1][1], n]]) : [[-1 / 0, n]];
            }, null);
            return (
              n.push([e[e.length - 1], this.db._maxKey]),
              this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 })
            );
          }),
          (e.prototype.inAnyRange = function (e, n) {
            var r = this,
              t = this._cmp,
              a = this._ascending,
              m = this._descending,
              o = this._min,
              i = this._max;
            if (0 === e.length) return Wn(this);
            if (
              !e.every(function (e) {
                return void 0 !== e[0] && void 0 !== e[1] && a(e[0], e[1]) <= 0;
              })
            )
              return Hn(
                this,
                'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
                me.InvalidArgument
              );
            var u,
              b = !n || !1 !== n.includeLowers,
              y = n && !0 === n.includeUppers,
              s = a;
            function N(e, n) {
              return s(e[0], n[0]);
            }
            try {
              (u = e.reduce(function (e, n) {
                for (var r = 0, a = e.length; r < a; ++r) {
                  var m = e[r];
                  if (t(n[0], m[1]) < 0 && t(n[1], m[0]) > 0) {
                    (m[0] = o(m[0], n[0])), (m[1] = i(m[1], n[1]));
                    break;
                  }
                }
                return r === a && e.push(n), e;
              }, [])).sort(N);
            } catch (f) {
              return Hn(this, Cn);
            }
            var l = 0,
              p = y
                ? function (e) {
                    return a(e, u[l][1]) > 0;
                  }
                : function (e) {
                    return a(e, u[l][1]) >= 0;
                  },
              d = b
                ? function (e) {
                    return m(e, u[l][0]) > 0;
                  }
                : function (e) {
                    return m(e, u[l][0]) >= 0;
                  },
              c = p,
              h = new this.Collection(this, function () {
                return Qn(u[0][0], u[u.length - 1][1], !b, !y);
              });
            return (
              (h._ondirectionchange = function (e) {
                'next' === e ? ((c = p), (s = a)) : ((c = d), (s = m)),
                  u.sort(N);
              }),
              h._addAlgorithm(function (e, n, t) {
                for (var m = e.key; c(m); )
                  if (++l === u.length) return n(t), !1;
                return (
                  !!(function (e) {
                    return !p(e) && !d(e);
                  })(m) ||
                  (0 === r._cmp(m, u[l][1]) ||
                    0 === r._cmp(m, u[l][0]) ||
                    n(function () {
                      e.continue(s === a ? u[l][0] : u[l][1]);
                    }),
                  !1)
                );
              }),
              h
            );
          }),
          (e.prototype.startsWithAnyOf = function () {
            var e = M.apply(K, arguments);
            return e.every(function (e) {
              return 'string' == typeof e;
            })
              ? 0 === e.length
                ? Wn(this)
                : this.inAnyRange(
                    e.map(function (e) {
                      return [e, e + xn];
                    })
                  )
              : Hn(this, 'startsWithAnyOf() only works with strings');
          }),
          e
        );
      })();
      function Zn(e) {
        return 1 === e.length ? e[0] : e;
      }
      function er(e) {
        try {
          return e.only([[]]), [[]];
        } catch (n) {
          return xn;
        }
      }
      function nr(e) {
        return en(function (n) {
          return rr(n), e(n.target.error), !1;
        });
      }
      function rr(e) {
        e.stopPropagation && e.stopPropagation(),
          e.preventDefault && e.preventDefault();
      }
      var tr = (function () {
        function e() {}
        return (
          (e.prototype._lock = function () {
            return (
              k(!Fe.global),
              ++this._reculock,
              1 !== this._reculock || Fe.global || (Fe.lockOwnerFor = this),
              this
            );
          }),
          (e.prototype._unlock = function () {
            if ((k(!Fe.global), 0 == --this._reculock))
              for (
                Fe.global || (Fe.lockOwnerFor = null);
                this._blockedFuncs.length > 0 && !this._locked();

              ) {
                var e = this._blockedFuncs.shift();
                try {
                  cn(e[1], e[0]);
                } catch (n) {}
              }
            return this;
          }),
          (e.prototype._locked = function () {
            return this._reculock && Fe.lockOwnerFor !== this;
          }),
          (e.prototype.create = function (e) {
            var n = this;
            if (!this.mode) return this;
            var r = this.db.idbdb,
              t = this.db._state.dbOpenError;
            if ((k(!this.idbtrans), !e && !r))
              switch (t && t.name) {
                case 'DatabaseClosedError':
                  throw new me.DatabaseClosed(t);
                case 'MissingAPIError':
                  throw new me.MissingAPI(t.message, t);
                default:
                  throw new me.OpenFailed(t);
              }
            if (!this.active) throw new me.TransactionInactive();
            return (
              k(null === this._completion._state),
              ((e = this.idbtrans =
                e ||
                r.transaction(Zn(this.storeNames), this.mode)).onerror = en(
                function (r) {
                  rr(r), n._reject(e.error);
                }
              )),
              (e.onabort = en(function (r) {
                rr(r),
                  n.active && n._reject(new me.Abort(e.error)),
                  (n.active = !1),
                  n.on('abort').fire(r);
              })),
              (e.oncomplete = en(function () {
                (n.active = !1), n._resolve();
              })),
              this
            );
          }),
          (e.prototype._promise = function (e, n, r) {
            var t = this;
            if ('readwrite' === e && 'readwrite' !== this.mode)
              return In(new me.ReadOnly('Transaction is readonly'));
            if (!this.active) return In(new me.TransactionInactive());
            if (this._locked())
              return new Te(function (a, m) {
                t._blockedFuncs.push([
                  function () {
                    t._promise(e, n, r).then(a, m);
                  },
                  Fe
                ]);
              });
            if (r)
              return un(function () {
                var e = new Te(function (e, r) {
                  t._lock();
                  var a = n(e, r, t);
                  a && a.then && a.then(e, r);
                });
                return (
                  e.finally(function () {
                    return t._unlock();
                  }),
                  (e._lib = !0),
                  e
                );
              });
            var a = new Te(function (e, r) {
              var a = n(e, r, t);
              a && a.then && a.then(e, r);
            });
            return (a._lib = !0), a;
          }),
          (e.prototype._root = function () {
            return this.parent ? this.parent._root() : this;
          }),
          (e.prototype.waitFor = function (e) {
            var n = this._root(),
              r = Te.resolve(e);
            if (n._waitingFor)
              n._waitingFor = n._waitingFor.then(function () {
                return r;
              });
            else {
              (n._waitingFor = r), (n._waitingQueue = []);
              var t = n.idbtrans.objectStore(n.storeNames[0]);
              !(function e() {
                for (++n._spinCount; n._waitingQueue.length; )
                  n._waitingQueue.shift()();
                n._waitingFor && (t.get(-1 / 0).onsuccess = e);
              })();
            }
            var a = n._waitingFor;
            return new Te(function (e, t) {
              r.then(
                function (r) {
                  return n._waitingQueue.push(en(e.bind(null, r)));
                },
                function (e) {
                  return n._waitingQueue.push(en(t.bind(null, e)));
                }
              ).finally(function () {
                n._waitingFor === a && (n._waitingFor = null);
              });
            });
          }),
          (e.prototype.abort = function () {
            this.active && this._reject(new me.Abort()), (this.active = !1);
          }),
          (e.prototype.table = function (e) {
            var n = this._memoizedTables || (this._memoizedTables = {});
            if (N(n, e)) return n[e];
            var r = this.schema[e];
            if (!r)
              throw new me.NotFound('Table ' + e + ' not part of transaction');
            var t = new this.db.Table(e, r, this);
            return (t.core = this.db.core.table(e)), (n[e] = t), t;
          }),
          e
        );
      })();
      function ar(e, n, r, t, a, m, o) {
        return {
          name: e,
          keyPath: n,
          unique: r,
          multi: t,
          auto: a,
          compound: m,
          src: (r && !o ? '&' : '') + (t ? '*' : '') + (a ? '++' : '') + mr(n)
        };
      }
      function mr(e) {
        return 'string' == typeof e
          ? e
          : e
          ? '[' + [].join.call(e, '+') + ']'
          : '';
      }
      function or(e, n, r) {
        return {
          name: e,
          primKey: n,
          indexes: r,
          mappedClass: null,
          idxByName: C(r, function (e) {
            return [e.name, e];
          })
        };
      }
      function ir(e) {
        return null == e
          ? function () {}
          : 'string' == typeof e
          ? (function (e) {
              return 1 === e.split('.').length
                ? function (n) {
                    return n[e];
                  }
                : function (n) {
                    return G(n, e);
                  };
            })(e)
          : function (n) {
              return G(n, e);
            };
      }
      function ur(e, n) {
        return 'delete' === n.type
          ? n.keys
          : n.keys || n.values.map(e.extractKey);
      }
      function br(e) {
        return [].slice.call(e);
      }
      var yr = 0;
      function sr(e) {
        return null == e
          ? ':id'
          : 'string' == typeof e
          ? e
          : '[' + e.join('+') + ']';
      }
      function Nr(e, n, r, t) {
        var a = n.cmp.bind(n);
        function o(e) {
          if (3 === e.type) return null;
          if (4 === e.type)
            throw new Error('Cannot convert never type to IDBKeyRange');
          var n = e.lower,
            t = e.upper,
            a = e.lowerOpen,
            m = e.upperOpen;
          return void 0 === n
            ? void 0 === t
              ? null
              : r.upperBound(t, !!m)
            : void 0 === t
            ? r.lowerBound(n, !!a)
            : r.bound(n, t, !!a, !!m);
        }
        var u = (function (e, n) {
            var r = br(e.objectStoreNames);
            return {
              schema: {
                name: e.name,
                tables: r
                  .map(function (e) {
                    return n.objectStore(e);
                  })
                  .map(function (e) {
                    var n = e.keyPath,
                      r = e.autoIncrement,
                      t = i(n),
                      a = {},
                      m = {
                        name: e.name,
                        primaryKey: {
                          name: null,
                          isPrimaryKey: !0,
                          outbound: null == n,
                          compound: t,
                          keyPath: n,
                          autoIncrement: r,
                          unique: !0,
                          extractKey: ir(n)
                        },
                        indexes: br(e.indexNames)
                          .map(function (n) {
                            return e.index(n);
                          })
                          .map(function (e) {
                            var n = e.unique,
                              r = e.multiEntry,
                              t = e.keyPath,
                              m = {
                                name: e.name,
                                compound: i(t),
                                keyPath: t,
                                unique: n,
                                multiEntry: r,
                                extractKey: ir(t)
                              };
                            return (a[sr(t)] = m), m;
                          }),
                        getIndexByKeyPath: function (e) {
                          return a[sr(e)];
                        }
                      };
                    return (
                      (a[':id'] = m.primaryKey),
                      null != n && (a[sr(n)] = m.primaryKey),
                      m
                    );
                  })
              },
              hasGetAll:
                r.length > 0 &&
                'getAll' in n.objectStore(r[0]) &&
                !(
                  'undefined' != typeof navigator &&
                  /Safari/.test(navigator.userAgent) &&
                  !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                  [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
                )
            };
          })(e, t),
          b = u.schema,
          y = u.hasGetAll,
          s = b.tables.map(function (e) {
            return (function (e) {
              var n = e.name;
              return {
                name: n,
                schema: e,
                mutate: function (r) {
                  var t = r.trans,
                    a = r.type,
                    i = r.keys,
                    u = r.values,
                    b = r.range,
                    y = r.wantResults;
                  return new Promise(function (r, s) {
                    r = en(r);
                    var N = t.objectStore(n),
                      l = null == N.keyPath,
                      p = 'put' === a || 'add' === a;
                    if (!p && 'delete' !== a && 'deleteRange' !== a)
                      throw new Error('Invalid operation type: ' + a);
                    var d = (i || u || { length: 1 }).length;
                    if (i && u && i.length !== u.length)
                      throw new Error(
                        'Given keys array must have same length as given values array.'
                      );
                    if (0 === d)
                      return r({
                        numFailures: 0,
                        failures: {},
                        results: [],
                        lastResult: void 0
                      });
                    var c,
                      h =
                        y &&
                        m(
                          i || ur(e.primaryKey, { type: a, keys: i, values: u })
                        ),
                      f = [],
                      g = 0,
                      v = function (e) {
                        ++g,
                          rr(e),
                          h && (h[e.target._reqno] = void 0),
                          (f[e.target._reqno] = e.target.error);
                      },
                      I = function (e) {
                        var n = e.target;
                        h[n._reqno] = n.result;
                      };
                    if ('deleteRange' === a) {
                      if (4 === b.type)
                        return r({
                          numFailures: g,
                          failures: f,
                          results: h,
                          lastResult: void 0
                        });
                      c = 3 === b.type ? N.clear() : N.delete(o(b));
                    } else {
                      var k = p ? (l ? [u, i] : [u, null]) : [i, null],
                        x = k[0],
                        C = k[1];
                      if (p)
                        for (var G = 0; G < d; ++G)
                          ((c =
                            C && void 0 !== C[G]
                              ? N[a](x[G], C[G])
                              : N[a](x[G]))._reqno = G),
                            h && void 0 === h[G] && (c.onsuccess = I),
                            (c.onerror = v);
                      else
                        for (G = 0; G < d; ++G)
                          ((c = N[a](x[G]))._reqno = G), (c.onerror = v);
                    }
                    var _ = function (e) {
                      var n = e.target.result;
                      h && (h[d - 1] = n),
                        r({
                          numFailures: g,
                          failures: f,
                          results: h,
                          lastResult: n
                        });
                    };
                    (c.onerror = function (e) {
                      v(e), _(e);
                    }),
                      (c.onsuccess = _);
                  });
                },
                getMany: function (e) {
                  var r = e.trans,
                    t = e.keys;
                  return new Promise(function (e, a) {
                    e = en(e);
                    for (
                      var m,
                        o = r.objectStore(n),
                        i = t.length,
                        u = new Array(i),
                        b = 0,
                        y = 0,
                        s = function (n) {
                          var r = n.target;
                          (u[r._pos] = r.result), ++y === b && e(u);
                        },
                        N = nr(a),
                        l = 0;
                      l < i;
                      ++l
                    )
                      null != t[l] &&
                        (((m = o.get(t[l]))._pos = l),
                        (m.onsuccess = s),
                        (m.onerror = N),
                        ++b);
                    0 === b && e(u);
                  });
                },
                get: function (e) {
                  var r = e.trans,
                    t = e.key;
                  return new Promise(function (e, a) {
                    e = en(e);
                    var m = r.objectStore(n).get(t);
                    (m.onsuccess = function (n) {
                      return e(n.target.result);
                    }),
                      (m.onerror = nr(a));
                  });
                },
                query: (function (e) {
                  return function (r) {
                    return new Promise(function (t, a) {
                      t = en(t);
                      var m = r.values,
                        i = r.limit,
                        u = r.query,
                        b = i === 1 / 0 ? void 0 : i,
                        y = u.index,
                        s = u.range,
                        N = r.trans.objectStore(n),
                        l = y.isPrimaryKey ? N : N.index(y.name),
                        p = o(s);
                      if (0 === i) return t({ result: [] });
                      if (e) {
                        var d = m ? l.getAll(p, b) : l.getAllKeys(p, b);
                        (d.onsuccess = function (e) {
                          return t({ result: e.target.result });
                        }),
                          (d.onerror = nr(a));
                      } else {
                        var c = 0,
                          h =
                            m || !('openKeyCursor' in l)
                              ? l.openCursor(p)
                              : l.openKeyCursor(p),
                          f = [];
                        (h.onsuccess = function (e) {
                          var n = h.result;
                          return n
                            ? (f.push(m ? n.value : n.primaryKey),
                              ++c === i ? t({ result: f }) : void n.continue())
                            : t({ result: f });
                        }),
                          (h.onerror = nr(a));
                      }
                    });
                  };
                })(y),
                openCursor: function (e) {
                  var r = e.trans,
                    t = e.values,
                    a = e.query,
                    m = e.reverse,
                    i = e.unique;
                  return new Promise(function (e, u) {
                    e = en(e);
                    var b = a.index,
                      y = a.range,
                      s = r.objectStore(n),
                      N = b.isPrimaryKey ? s : s.index(b.name),
                      l = m
                        ? i
                          ? 'prevunique'
                          : 'prev'
                        : i
                        ? 'nextunique'
                        : 'next',
                      p =
                        t || !('openKeyCursor' in N)
                          ? N.openCursor(o(y), l)
                          : N.openKeyCursor(o(y), l);
                    (p.onerror = nr(u)),
                      (p.onsuccess = en(function (n) {
                        var t = p.result;
                        if (t) {
                          (t.___id = ++yr), (t.done = !1);
                          var a = t.continue.bind(t),
                            m = t.continuePrimaryKey;
                          m && (m = m.bind(t));
                          var o = t.advance.bind(t),
                            i = function () {
                              throw new Error('Cursor not stopped');
                            };
                          (t.trans = r),
                            (t.stop = t.continue = t.continuePrimaryKey = t.advance = function () {
                              throw new Error('Cursor not started');
                            }),
                            (t.fail = en(u)),
                            (t.next = function () {
                              var e = this,
                                n = 1;
                              return this.start(function () {
                                return n-- ? e.continue() : e.stop();
                              }).then(function () {
                                return e;
                              });
                            }),
                            (t.start = function (e) {
                              var n = new Promise(function (e, n) {
                                  (e = en(e)),
                                    (p.onerror = nr(n)),
                                    (t.fail = n),
                                    (t.stop = function (n) {
                                      (t.stop = t.continue = t.continuePrimaryKey = t.advance = i),
                                        e(n);
                                    });
                                }),
                                r = function () {
                                  if (p.result)
                                    try {
                                      e();
                                    } catch (n) {
                                      t.fail(n);
                                    }
                                  else
                                    (t.done = !0),
                                      (t.start = function () {
                                        throw new Error(
                                          'Cursor behind last entry'
                                        );
                                      }),
                                      t.stop();
                                };
                              return (
                                (p.onsuccess = en(function (e) {
                                  (p.onsuccess = r), r();
                                })),
                                (t.continue = a),
                                (t.continuePrimaryKey = m),
                                (t.advance = o),
                                r(),
                                n
                              );
                            }),
                            e(t);
                        } else e(null);
                      }, u));
                  });
                },
                count: function (e) {
                  var r = e.query,
                    t = e.trans,
                    a = r.index,
                    m = r.range;
                  return new Promise(function (e, r) {
                    var i = t.objectStore(n),
                      u = a.isPrimaryKey ? i : i.index(a.name),
                      b = o(m),
                      y = b ? u.count(b) : u.count();
                    (y.onsuccess = en(function (n) {
                      return e(n.target.result);
                    })),
                      (y.onerror = nr(r));
                  });
                }
              };
            })(e);
          }),
          N = {};
        return (
          s.forEach(function (e) {
            return (N[e.name] = e);
          }),
          {
            stack: 'dbcore',
            transaction: e.transaction.bind(e),
            table: function (e) {
              if (!N[e]) throw new Error("Table '" + e + "' not found");
              return N[e];
            },
            cmp: a,
            MIN_KEY: -1 / 0,
            MAX_KEY: er(r),
            schema: b
          }
        );
      }
      function lr(e, n) {
        var r = (function (e, n, r, t) {
          return {
            dbcore: (function (e, n) {
              return n.reduce(function (e, n) {
                var r = n.create;
                return a(a({}, e), r(e));
              }, e);
            })(Nr(n, r.indexedDB, r.IDBKeyRange, t), e.dbcore)
          };
        })(e._middlewares, n.db, e._deps, n);
        (e.core = r.dbcore),
          e.tables.forEach(function (n) {
            var r = n.name;
            e.core.schema.tables.some(function (e) {
              return e.name === r;
            }) &&
              ((n.core = e.core.table(r)),
              e[r] instanceof e.Table && (e[r].core = n.core));
          });
      }
      function pr(e, n, r, t) {
        r.forEach(function (r) {
          var a = t[r];
          n.forEach(function (n) {
            var t = f(n, r);
            (!t || ('value' in t && void 0 === t.value)) &&
              (n === e.Transaction.prototype || n instanceof e.Transaction
                ? d(n, r, {
                    get: function () {
                      return this.table(r);
                    },
                    set: function (e) {
                      p(this, r, {
                        value: e,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                      });
                    }
                  })
                : (n[r] = new e.Table(r, a)));
          });
        });
      }
      function dr(e, n) {
        n.forEach(function (n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function cr(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function hr(e, n) {
        var r,
          t = { del: [], add: [], change: [] };
        for (r in e) n[r] || t.del.push(r);
        for (r in n) {
          var a = e[r],
            m = n[r];
          if (a) {
            var o = {
              name: r,
              def: m,
              recreate: !1,
              del: [],
              add: [],
              change: []
            };
            if (
              '' + (a.primKey.keyPath || '') !=
                '' + (m.primKey.keyPath || '') ||
              (a.primKey.auto !== m.primKey.auto && !_n)
            )
              (o.recreate = !0), t.change.push(o);
            else {
              var i = a.idxByName,
                u = m.idxByName,
                b = void 0;
              for (b in i) u[b] || o.del.push(b);
              for (b in u) {
                var y = i[b],
                  s = u[b];
                y ? y.src !== s.src && o.change.push(s) : o.add.push(s);
              }
              (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) &&
                t.change.push(o);
            }
          } else t.add.push([r, m]);
        }
        return t;
      }
      function fr(e, n, r, t) {
        var a = e.db.createObjectStore(
          n,
          r.keyPath
            ? { keyPath: r.keyPath, autoIncrement: r.auto }
            : { autoIncrement: r.auto }
        );
        return (
          t.forEach(function (e) {
            return gr(a, e);
          }),
          a
        );
      }
      function gr(e, n) {
        e.createIndex(n.name, n.keyPath, {
          unique: n.unique,
          multiEntry: n.multi
        });
      }
      function vr(e, n, r) {
        var t = {};
        return (
          v(n.objectStoreNames, 0).forEach(function (e) {
            for (
              var n = r.objectStore(e),
                a = n.keyPath,
                m = ar(
                  mr(a),
                  a || '',
                  !1,
                  !1,
                  !!n.autoIncrement,
                  a && 'string' != typeof a,
                  !0
                ),
                o = [],
                i = 0;
              i < n.indexNames.length;
              ++i
            ) {
              var u = n.index(n.indexNames[i]),
                b = ar(
                  u.name,
                  (a = u.keyPath),
                  !!u.unique,
                  !!u.multiEntry,
                  !1,
                  a && 'string' != typeof a,
                  !1
                );
              o.push(b);
            }
            t[e] = or(e, m, o);
          }),
          t
        );
      }
      function Ir(e, n, r) {
        for (var t = r.db.objectStoreNames, a = 0; a < t.length; ++a) {
          var m = t[a],
            o = r.objectStore(m);
          e._hasGetAll = 'getAll' in o;
          for (var i = 0; i < o.indexNames.length; ++i) {
            var b = o.indexNames[i],
              y = o.index(b).keyPath,
              s = 'string' == typeof y ? y : '[' + v(y).join('+') + ']';
            if (n[m]) {
              var N = n[m].idxByName[s];
              N &&
                ((N.name = b),
                delete n[m].idxByName[s],
                (n[m].idxByName[b] = N));
            }
          }
        }
        'undefined' != typeof navigator &&
          /Safari/.test(navigator.userAgent) &&
          !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
          u.WorkerGlobalScope &&
          u instanceof u.WorkerGlobalScope &&
          [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
          (e._hasGetAll = !1);
      }
      var kr,
        xr = (function () {
          function e() {}
          return (
            (e.prototype._parseStoresSpec = function (e, n) {
              o(e).forEach(function (r) {
                if (null !== e[r]) {
                  var t = e[r].split(',').map(function (e, n) {
                      var r = (e = e.trim()).replace(/([&*]|\+\+)/g, ''),
                        t = /^\[/.test(r)
                          ? r.match(/^\[(.*)\]$/)[1].split('+')
                          : r;
                      return ar(
                        r,
                        t || null,
                        /\&/.test(e),
                        /\*/.test(e),
                        /\+\+/.test(e),
                        i(t),
                        0 === n
                      );
                    }),
                    a = t.shift();
                  if (a.multi)
                    throw new me.Schema('Primary key cannot be multi-valued');
                  t.forEach(function (e) {
                    if (e.auto)
                      throw new me.Schema(
                        'Only primary key can be marked as autoIncrement (++)'
                      );
                    if (!e.keyPath)
                      throw new me.Schema(
                        'Index must have a name and cannot be an empty string'
                      );
                  }),
                    (n[r] = or(r, a, t));
                }
              });
            }),
            (e.prototype.stores = function (e) {
              var n = this.db;
              this._cfg.storesSource = this._cfg.storesSource
                ? b(this._cfg.storesSource, e)
                : e;
              var r = {},
                t = {};
              return (
                n._versions.forEach(function (e) {
                  b(r, e._cfg.storesSource),
                    (t = e._cfg.dbschema = {}),
                    e._parseStoresSpec(r, t);
                }),
                (n._dbSchema = t),
                dr(n, [n._allTables, n, n.Transaction.prototype]),
                pr(
                  n,
                  [n._allTables, n, n.Transaction.prototype, this._cfg.tables],
                  o(t),
                  t
                ),
                (n._storeNames = o(t)),
                this
              );
            }),
            (e.prototype.upgrade = function (e) {
              return (this._cfg.contentUpgrade = e), this;
            }),
            e
          );
        })();
      function Cr(e) {
        return un(function () {
          return (Fe.letThrough = !0), e();
        });
      }
      function Gr(e) {
        var n = function (n) {
            return e.next(n);
          },
          r = a(n),
          t = a(function (n) {
            return e.throw(n);
          });
        function a(e) {
          return function (n) {
            var a = e(n),
              m = a.value;
            return a.done
              ? m
              : m && 'function' == typeof m.then
              ? m.then(r, t)
              : i(m)
              ? Promise.all(m).then(r, t)
              : r(m);
          };
        }
        return a(n)();
      }
      function _r(e, n, r) {
        var t = arguments.length;
        if (t < 2) throw new me.InvalidArgument('Too few arguments');
        for (var a = new Array(t - 1); --t; ) a[t - 1] = arguments[t];
        r = a.pop();
        var m = A(a);
        return [e, m, r];
      }
      function wr(e, n, r, t, a) {
        return Te.resolve().then(function () {
          var m = Fe.transless || Fe,
            o = e._createTransaction(n, r, e._dbSchema, t),
            i = { trans: o, transless: m };
          t ? (o.idbtrans = t.idbtrans) : o.create();
          var u,
            b = B(a);
          b && bn();
          var y = Te.follow(function () {
            if ((u = a.call(o, o)))
              if (b) {
                var e = yn.bind(null, null);
                u.then(e, e);
              } else
                'function' == typeof u.next &&
                  'function' == typeof u.throw &&
                  (u = Gr(u));
          }, i);
          return (u && 'function' == typeof u.then
            ? Te.resolve(u).then(function (e) {
                return o.active
                  ? e
                  : In(
                      new me.PrematureCommit(
                        'Transaction committed too early. See http://bit.ly/2kdckMn'
                      )
                    );
              })
            : y.then(function () {
                return u;
              })
          )
            .then(function (e) {
              return (
                t && o._resolve(),
                o._completion.then(function () {
                  return e;
                })
              );
            })
            .catch(function (e) {
              return o._reject(e), In(e);
            });
        });
      }
      function Vr(e, n, r) {
        for (var t = i(e) ? e.slice() : [e], a = 0; a < r; ++a) t.push(n);
        return t;
      }
      var Sr = {
          stack: 'dbcore',
          name: 'VirtualIndexMiddleware',
          level: 1,
          create: function (e) {
            return a(a({}, e), {
              table: function (n) {
                var r = e.table(n),
                  t = r.schema,
                  m = {},
                  o = [];
                function i(e, n, r) {
                  var t = sr(e),
                    u = (m[t] = m[t] || []),
                    b = null == e ? 0 : 'string' == typeof e ? 1 : e.length,
                    y = n > 0,
                    s = a(a({}, r), {
                      isVirtual: y,
                      isPrimaryKey: !y && r.isPrimaryKey,
                      keyTail: n,
                      keyLength: b,
                      extractKey: ir(e),
                      unique: !y && r.unique
                    });
                  return (
                    u.push(s),
                    s.isPrimaryKey || o.push(s),
                    b > 1 && i(2 === b ? e[0] : e.slice(0, b - 1), n + 1, r),
                    u.sort(function (e, n) {
                      return e.keyTail - n.keyTail;
                    }),
                    s
                  );
                }
                var u = i(t.primaryKey.keyPath, 0, t.primaryKey);
                m[':id'] = [u];
                for (var b = 0, y = t.indexes; b < y.length; b++) {
                  var s = y[b];
                  i(s.keyPath, 0, s);
                }
                function N(n) {
                  var r,
                    t,
                    m = n.query.index;
                  return m.isVirtual
                    ? a(a({}, n), {
                        query: {
                          index: m,
                          range:
                            ((r = n.query.range),
                            (t = m.keyTail),
                            {
                              type: 1 === r.type ? 2 : r.type,
                              lower: Vr(
                                r.lower,
                                r.lowerOpen ? e.MAX_KEY : e.MIN_KEY,
                                t
                              ),
                              lowerOpen: !0,
                              upper: Vr(
                                r.upper,
                                r.upperOpen ? e.MIN_KEY : e.MAX_KEY,
                                t
                              ),
                              upperOpen: !0
                            })
                        }
                      })
                    : n;
                }
                return a(a({}, r), {
                  schema: a(a({}, t), {
                    primaryKey: u,
                    indexes: o,
                    getIndexByKeyPath: function (e) {
                      var n = m[sr(e)];
                      return n && n[0];
                    }
                  }),
                  count: function (e) {
                    return r.count(N(e));
                  },
                  query: function (e) {
                    return r.query(N(e));
                  },
                  openCursor: function (n) {
                    var t = n.query.index,
                      a = t.keyTail,
                      m = t.keyLength;
                    return t.isVirtual
                      ? r.openCursor(N(n)).then(function (r) {
                          return (
                            r &&
                            (function (r) {
                              return Object.create(r, {
                                continue: {
                                  value: function (t) {
                                    null != t
                                      ? r.continue(
                                          Vr(
                                            t,
                                            n.reverse ? e.MAX_KEY : e.MIN_KEY,
                                            a
                                          )
                                        )
                                      : n.unique
                                      ? r.continue(
                                          Vr(
                                            r.key,
                                            n.reverse ? e.MIN_KEY : e.MAX_KEY,
                                            a
                                          )
                                        )
                                      : r.continue();
                                  }
                                },
                                continuePrimaryKey: {
                                  value: function (n, t) {
                                    r.continuePrimaryKey(
                                      Vr(n, e.MAX_KEY, a),
                                      t
                                    );
                                  }
                                },
                                key: {
                                  get: function () {
                                    var e = r.key;
                                    return 1 === m ? e[0] : e.slice(0, m);
                                  }
                                },
                                value: {
                                  get: function () {
                                    return r.value;
                                  }
                                }
                              });
                            })(r)
                          );
                        })
                      : r.openCursor(n);
                  }
                });
              }
            });
          }
        },
        Ar = {
          stack: 'dbcore',
          name: 'HooksMiddleware',
          level: 2,
          create: function (e) {
            return a(a({}, e), {
              table: function (n) {
                var r = e.table(n),
                  t = r.schema.primaryKey;
                return a(a({}, r), {
                  mutate: function (e) {
                    var o = Fe.trans,
                      i = o.table(n).hook,
                      u = i.deleting,
                      b = i.creating,
                      y = i.updating;
                    switch (e.type) {
                      case 'add':
                        if (b.fire === ue) break;
                        return o._promise(
                          'readwrite',
                          function () {
                            return s(e);
                          },
                          !0
                        );
                      case 'put':
                        if (b.fire === ue && y.fire === ue) break;
                        return o._promise(
                          'readwrite',
                          function () {
                            return s(e);
                          },
                          !0
                        );
                      case 'delete':
                        if (u.fire === ue) break;
                        return o._promise(
                          'readwrite',
                          function () {
                            return s(e);
                          },
                          !0
                        );
                      case 'deleteRange':
                        if (u.fire === ue) break;
                        return o._promise(
                          'readwrite',
                          function () {
                            return (function (e) {
                              return l(e.trans, e.range, 1e4);
                            })(e);
                          },
                          !0
                        );
                    }
                    return r.mutate(e);
                    function s(e) {
                      var n = Fe.trans,
                        o = e.keys || ur(t, e);
                      if (!o) throw new Error('Keys missing');
                      return (
                        'delete' !==
                          (e =
                            'add' === e.type || 'put' === e.type
                              ? a(a({}, e), { keys: o, wantResults: !0 })
                              : a({}, e)).type && (e.values = m(e.values)),
                        e.keys && (e.keys = m(e.keys)),
                        (function (e, n, r) {
                          return 'add' === n.type
                            ? Promise.resolve(new Array(n.values.length))
                            : e.getMany({ trans: n.trans, keys: r });
                        })(r, e, o).then(function (a) {
                          var m = o.map(function (r, m) {
                            var o = a[m],
                              i = { onerror: null, onsuccess: null };
                            if ('delete' === e.type) u.fire.call(i, r, o, n);
                            else if ('add' === e.type || void 0 === o) {
                              var s = b.fire.call(i, r, e.values[m], n);
                              null == r &&
                                null != s &&
                                ((e.keys[m] = r = s),
                                t.outbound || _(e.values[m], t.keyPath, r));
                            } else {
                              var l = L(o, e.values[m]),
                                p = y.fire.call(i, l, r, o, n);
                              if (p) {
                                var d = e.values[m];
                                Object.keys(p).forEach(function (e) {
                                  N(d, e) ? (d[e] = p[e]) : _(d, e, p[e]);
                                });
                              }
                            }
                            return i;
                          });
                          return r
                            .mutate(e)
                            .then(function (n) {
                              for (
                                var r = n.failures,
                                  t = n.results,
                                  i = n.numFailures,
                                  u = n.lastResult,
                                  b = 0;
                                b < o.length;
                                ++b
                              ) {
                                var y = t ? t[b] : o[b],
                                  s = m[b];
                                null == y
                                  ? s.onerror && s.onerror(r[b])
                                  : s.onsuccess &&
                                    s.onsuccess(
                                      'put' === e.type && a[b] ? e.values[b] : y
                                    );
                              }
                              return {
                                failures: r,
                                results: t,
                                numFailures: i,
                                lastResult: u
                              };
                            })
                            .catch(function (e) {
                              return (
                                m.forEach(function (n) {
                                  return n.onerror && n.onerror(e);
                                }),
                                Promise.reject(e)
                              );
                            });
                        })
                      );
                    }
                    function l(e, n, m) {
                      return r
                        .query({
                          trans: e,
                          values: !1,
                          query: { index: t, range: n },
                          limit: m
                        })
                        .then(function (r) {
                          var t = r.result;
                          return s({ type: 'delete', keys: t, trans: e }).then(
                            function (r) {
                              return r.numFailures > 0
                                ? Promise.reject(r.failures[0])
                                : t.length < m
                                ? {
                                    failures: [],
                                    numFailures: 0,
                                    lastResult: void 0
                                  }
                                : l(
                                    e,
                                    a(a({}, n), {
                                      lower: t[t.length - 1],
                                      lowerOpen: !0
                                    }),
                                    m
                                  );
                            }
                          );
                        });
                    }
                  }
                });
              }
            });
          }
        },
        Rr = (function () {
          function e(n, r) {
            var t = this;
            (this._middlewares = {}), (this.verno = 0);
            var m = e.dependencies;
            (this._options = r = a(
              {
                addons: e.addons,
                autoOpen: !0,
                indexedDB: m.indexedDB,
                IDBKeyRange: m.IDBKeyRange
              },
              r
            )),
              (this._deps = {
                indexedDB: r.indexedDB,
                IDBKeyRange: r.IDBKeyRange
              });
            var o = r.addons;
            (this._dbSchema = {}),
              (this._versions = []),
              (this._storeNames = []),
              (this._allTables = {}),
              (this.idbdb = null);
            var i,
              u = {
                dbOpenError: null,
                isBeingOpened: !1,
                onReadyBeingFired: null,
                openComplete: !1,
                dbReadyResolve: ue,
                dbReadyPromise: null,
                cancelOpen: ue,
                openCanceller: null,
                autoSchema: !0
              };
            (u.dbReadyPromise = new Te(function (e) {
              u.dbReadyResolve = e;
            })),
              (u.openCanceller = new Te(function (e, n) {
                u.cancelOpen = n;
              })),
              (this._state = u),
              (this.name = n),
              (this.on = Pn(this, 'populate', 'blocked', 'versionchange', {
                ready: [ce, ue]
              })),
              (this.on.ready.subscribe = I(
                this.on.ready.subscribe,
                function (n) {
                  return function (r, a) {
                    e.vip(function () {
                      var e = t._state;
                      if (e.openComplete)
                        e.dbOpenError || Te.resolve().then(r), a && n(r);
                      else if (e.onReadyBeingFired)
                        e.onReadyBeingFired.push(r), a && n(r);
                      else {
                        n(r);
                        var m = t;
                        a ||
                          n(function e() {
                            m.on.ready.unsubscribe(r),
                              m.on.ready.unsubscribe(e);
                          });
                      }
                    });
                  };
                }
              )),
              (this.Collection =
                ((i = this),
                Fn(Bn.prototype, function (e, n) {
                  this.db = i;
                  var r = Rn,
                    t = null;
                  if (n)
                    try {
                      r = n();
                    } catch (u) {
                      t = u;
                    }
                  var a = e._ctx,
                    m = a.table,
                    o = m.hook.reading.fire;
                  this._ctx = {
                    table: m,
                    index: a.index,
                    isPrimKey:
                      !a.index ||
                      (m.schema.primKey.keyPath &&
                        a.index === m.schema.primKey.name),
                    range: r,
                    keysOnly: !1,
                    dir: 'next',
                    unique: '',
                    algorithm: null,
                    filter: null,
                    replayFilter: null,
                    justLimit: !0,
                    isMatch: null,
                    offset: 0,
                    limit: 1 / 0,
                    error: t,
                    or: a.or,
                    valueMapper: o !== be ? o : null
                  };
                }))),
              (this.Table = (function (e) {
                return Fn(En.prototype, function (n, r, t) {
                  (this.db = e),
                    (this._tx = t),
                    (this.name = n),
                    (this.schema = r),
                    (this.hook = e._allTables[n]
                      ? e._allTables[n].hook
                      : Pn(null, {
                          creating: [Ne, ue],
                          reading: [ye, be],
                          updating: [pe, ue],
                          deleting: [le, ue]
                        }));
                });
              })(this)),
              (this.Transaction = (function (e) {
                return Fn(tr.prototype, function (n, r, t, a) {
                  var m = this;
                  (this.db = e),
                    (this.mode = n),
                    (this.storeNames = r),
                    (this.schema = t),
                    (this.idbtrans = null),
                    (this.on = Pn(this, 'complete', 'error', 'abort')),
                    (this.parent = a || null),
                    (this.active = !0),
                    (this._reculock = 0),
                    (this._blockedFuncs = []),
                    (this._resolve = null),
                    (this._reject = null),
                    (this._waitingFor = null),
                    (this._waitingQueue = null),
                    (this._spinCount = 0),
                    (this._completion = new Te(function (e, n) {
                      (m._resolve = e), (m._reject = n);
                    })),
                    this._completion.then(
                      function () {
                        (m.active = !1), m.on.complete.fire();
                      },
                      function (e) {
                        var n = m.active;
                        return (
                          (m.active = !1),
                          m.on.error.fire(e),
                          m.parent
                            ? m.parent._reject(e)
                            : n && m.idbtrans && m.idbtrans.abort(),
                          In(e)
                        );
                      }
                    );
                });
              })(this)),
              (this.Version = (function (e) {
                return Fn(xr.prototype, function (n) {
                  (this.db = e),
                    (this._cfg = {
                      version: n,
                      storesSource: null,
                      dbschema: {},
                      tables: {},
                      contentUpgrade: null
                    });
                });
              })(this)),
              (this.WhereClause = (function (e) {
                return Fn($n.prototype, function (n, r, t) {
                  (this.db = e),
                    (this._ctx = {
                      table: n,
                      index: ':id' === r ? null : r,
                      or: t
                    });
                  var a = e._deps.indexedDB;
                  if (!a) throw new me.MissingAPI('indexedDB API missing');
                  (this._cmp = this._ascending = a.cmp.bind(a)),
                    (this._descending = function (e, n) {
                      return a.cmp(n, e);
                    }),
                    (this._max = function (e, n) {
                      return a.cmp(e, n) > 0 ? e : n;
                    }),
                    (this._min = function (e, n) {
                      return a.cmp(e, n) < 0 ? e : n;
                    }),
                    (this._IDBKeyRange = e._deps.IDBKeyRange);
                });
              })(this)),
              this.on('versionchange', function (e) {
                e.newVersion > 0
                  ? console.warn(
                      "Another connection wants to upgrade database '" +
                        t.name +
                        "'. Closing db now to resume the upgrade."
                    )
                  : console.warn(
                      "Another connection wants to delete database '" +
                        t.name +
                        "'. Closing db now to resume the delete request."
                    ),
                  t.close();
              }),
              this.on('blocked', function (e) {
                !e.newVersion || e.newVersion < e.oldVersion
                  ? console.warn("Dexie.delete('" + t.name + "') was blocked")
                  : console.warn(
                      "Upgrade '" +
                        t.name +
                        "' blocked by other connection holding version " +
                        e.oldVersion / 10
                    );
              }),
              (this._maxKey = er(r.IDBKeyRange)),
              (this._createTransaction = function (e, n, r, a) {
                return new t.Transaction(e, n, r, a);
              }),
              (this._fireOnBlocked = function (e) {
                t.on('blocked').fire(e),
                  Gn.filter(function (e) {
                    return e.name === t.name && e !== t && !e._state.vcFired;
                  }).map(function (n) {
                    return n.on('versionchange').fire(e);
                  });
              }),
              this.use(Sr),
              this.use(Ar),
              o.forEach(function (e) {
                return e(t);
              });
          }
          return (
            (e.prototype.version = function (e) {
              if (isNaN(e) || e < 0.1)
                throw new me.Type('Given version is not a positive number');
              if (
                ((e = Math.round(10 * e) / 10),
                this.idbdb || this._state.isBeingOpened)
              )
                throw new me.Schema('Cannot add version when database is open');
              this.verno = Math.max(this.verno, e);
              var n = this._versions,
                r = n.filter(function (n) {
                  return n._cfg.version === e;
                })[0];
              return (
                r ||
                ((r = new this.Version(e)),
                n.push(r),
                n.sort(cr),
                r.stores({}),
                (this._state.autoSchema = !1),
                r)
              );
            }),
            (e.prototype._whenReady = function (e) {
              var n = this;
              return this._state.openComplete || Fe.letThrough
                ? e()
                : new Te(function (e, r) {
                    if (!n._state.isBeingOpened) {
                      if (!n._options.autoOpen)
                        return void r(new me.DatabaseClosed());
                      n.open().catch(ue);
                    }
                    n._state.dbReadyPromise.then(e, r);
                  }).then(e);
            }),
            (e.prototype.use = function (e) {
              var n = e.stack,
                r = e.create,
                t = e.level,
                a = e.name;
              a && this.unuse({ stack: n, name: a });
              var m = this._middlewares[n] || (this._middlewares[n] = []);
              return (
                m.push({
                  stack: n,
                  create: r,
                  level: null == t ? 10 : t,
                  name: a
                }),
                m.sort(function (e, n) {
                  return e.level - n.level;
                }),
                this
              );
            }),
            (e.prototype.unuse = function (e) {
              var n = e.stack,
                r = e.name,
                t = e.create;
              return (
                n &&
                  this._middlewares[n] &&
                  (this._middlewares[n] = this._middlewares[n].filter(function (
                    e
                  ) {
                    return t ? e.create !== t : !!r && e.name !== r;
                  })),
                this
              );
            }),
            (e.prototype.open = function () {
              return (function (e) {
                var n = e._state,
                  r = e._deps.indexedDB;
                if (n.isBeingOpened || e.idbdb)
                  return n.dbReadyPromise.then(function () {
                    return n.dbOpenError ? In(n.dbOpenError) : e;
                  });
                q && (n.openCanceller._stackHolder = X()),
                  (n.isBeingOpened = !0),
                  (n.dbOpenError = null),
                  (n.openComplete = !1);
                var t = n.dbReadyResolve,
                  a = null;
                return Te.race([
                  n.openCanceller,
                  new Te(function (t, m) {
                    if (!r)
                      throw new me.MissingAPI(
                        'indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.'
                      );
                    var i = e.name,
                      u = n.autoSchema
                        ? r.open(i)
                        : r.open(i, Math.round(10 * e.verno));
                    if (!u)
                      throw new me.MissingAPI('IndexedDB API not available');
                    (u.onerror = nr(m)),
                      (u.onblocked = en(e._fireOnBlocked)),
                      (u.onupgradeneeded = en(function (t) {
                        if (
                          ((a = u.transaction),
                          n.autoSchema && !e._options.allowEmptyDB)
                        ) {
                          (u.onerror = rr), a.abort(), u.result.close();
                          var b = r.deleteDatabase(i);
                          b.onsuccess = b.onerror = en(function () {
                            m(
                              new me.NoSuchDatabase(
                                'Database ' + i + ' doesnt exist'
                              )
                            );
                          });
                        } else {
                          a.onerror = nr(m);
                          var y =
                            t.oldVersion > Math.pow(2, 62) ? 0 : t.oldVersion;
                          (e.idbdb = u.result),
                            (function (e, n, r, t) {
                              var a = e._dbSchema,
                                m = e._createTransaction(
                                  'readwrite',
                                  e._storeNames,
                                  a
                                );
                              m.create(r), m._completion.catch(t);
                              var i = m._reject.bind(m),
                                u = Fe.transless || Fe;
                              un(function () {
                                (Fe.trans = m),
                                  (Fe.transless = u),
                                  0 === n
                                    ? (o(a).forEach(function (e) {
                                        fr(r, e, a[e].primKey, a[e].indexes);
                                      }),
                                      lr(e, r),
                                      Te.follow(function () {
                                        return e.on.populate.fire(m);
                                      }).catch(i))
                                    : (function (e, n, r, t) {
                                        var a = [],
                                          m = e._versions,
                                          i = (e._dbSchema = vr(0, e.idbdb, t)),
                                          u = !1;
                                        return (
                                          m
                                            .filter(function (e) {
                                              return e._cfg.version >= n;
                                            })
                                            .forEach(function (m) {
                                              a.push(function () {
                                                var a = i,
                                                  b = m._cfg.dbschema;
                                                Ir(e, a, t),
                                                  Ir(e, b, t),
                                                  (i = e._dbSchema = b);
                                                var y = hr(a, b);
                                                y.add.forEach(function (e) {
                                                  fr(
                                                    t,
                                                    e[0],
                                                    e[1].primKey,
                                                    e[1].indexes
                                                  );
                                                }),
                                                  y.change.forEach(function (
                                                    e
                                                  ) {
                                                    if (e.recreate)
                                                      throw new me.Upgrade(
                                                        'Not yet support for changing primary key'
                                                      );
                                                    var n = t.objectStore(
                                                      e.name
                                                    );
                                                    e.add.forEach(function (e) {
                                                      return gr(n, e);
                                                    }),
                                                      e.change.forEach(
                                                        function (e) {
                                                          n.deleteIndex(e.name),
                                                            gr(n, e);
                                                        }
                                                      ),
                                                      e.del.forEach(function (
                                                        e
                                                      ) {
                                                        return n.deleteIndex(e);
                                                      });
                                                  });
                                                var s = m._cfg.contentUpgrade;
                                                if (s && m._cfg.version > n) {
                                                  lr(e, t),
                                                    (r._memoizedTables = {}),
                                                    (u = !0);
                                                  var N = V(b);
                                                  y.del.forEach(function (e) {
                                                    N[e] = a[e];
                                                  }),
                                                    dr(e, [
                                                      e.Transaction.prototype
                                                    ]),
                                                    pr(
                                                      e,
                                                      [e.Transaction.prototype],
                                                      o(N),
                                                      N
                                                    ),
                                                    (r.schema = N);
                                                  var l,
                                                    p = B(s);
                                                  p && bn();
                                                  var d = Te.follow(
                                                    function () {
                                                      if ((l = s(r)) && p) {
                                                        var e = yn.bind(
                                                          null,
                                                          null
                                                        );
                                                        l.then(e, e);
                                                      }
                                                    }
                                                  );
                                                  return l &&
                                                    'function' == typeof l.then
                                                    ? Te.resolve(l)
                                                    : d.then(function () {
                                                        return l;
                                                      });
                                                }
                                              }),
                                                a.push(function (n) {
                                                  (u && wn) ||
                                                    (function (e, n) {
                                                      for (
                                                        var r = 0;
                                                        r <
                                                        n.db.objectStoreNames
                                                          .length;
                                                        ++r
                                                      ) {
                                                        var t =
                                                          n.db.objectStoreNames[
                                                            r
                                                          ];
                                                        null == e[t] &&
                                                          n.db.deleteObjectStore(
                                                            t
                                                          );
                                                      }
                                                    })(m._cfg.dbschema, n),
                                                    dr(e, [
                                                      e.Transaction.prototype
                                                    ]),
                                                    pr(
                                                      e,
                                                      [e.Transaction.prototype],
                                                      e._storeNames,
                                                      e._dbSchema
                                                    ),
                                                    (r.schema = e._dbSchema);
                                                });
                                            }),
                                          (function e() {
                                            return a.length
                                              ? Te.resolve(
                                                  a.shift()(r.idbtrans)
                                                ).then(e)
                                              : Te.resolve();
                                          })().then(function () {
                                            var e, n;
                                            (n = t),
                                              o((e = i)).forEach(function (r) {
                                                n.db.objectStoreNames.contains(
                                                  r
                                                ) ||
                                                  fr(
                                                    n,
                                                    r,
                                                    e[r].primKey,
                                                    e[r].indexes
                                                  );
                                              });
                                          })
                                        );
                                      })(e, n, m, r).catch(i);
                              });
                            })(e, y / 10, a, m);
                        }
                      }, m)),
                      (u.onsuccess = en(function () {
                        a = null;
                        var r = (e.idbdb = u.result),
                          m = v(r.objectStoreNames);
                        if (m.length > 0)
                          try {
                            var b = r.transaction(Zn(m), 'readonly');
                            n.autoSchema
                              ? (function (e, n, r) {
                                  e.verno = n.version / 10;
                                  var t = (e._dbSchema = vr(0, n, r));
                                  (e._storeNames = v(n.objectStoreNames, 0)),
                                    pr(e, [e._allTables], o(t), t);
                                })(e, r, b)
                              : (Ir(e, e._dbSchema, b),
                                (function (e, n) {
                                  var r = hr(vr(0, e.idbdb, n), e._dbSchema);
                                  return !(
                                    r.add.length ||
                                    r.change.some(function (e) {
                                      return e.add.length || e.change.length;
                                    })
                                  );
                                })(e, b) ||
                                  console.warn(
                                    'Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.'
                                  )),
                              lr(e, b);
                          } catch (y) {}
                        Gn.push(e),
                          (r.onversionchange = en(function (r) {
                            (n.vcFired = !0), e.on('versionchange').fire(r);
                          })),
                          kr.add(i),
                          t();
                      }, m));
                  })
                ])
                  .then(function () {
                    return (
                      (n.onReadyBeingFired = []),
                      Te.resolve(Cr(e.on.ready.fire)).then(function e() {
                        if (n.onReadyBeingFired.length > 0) {
                          var r = n.onReadyBeingFired.reduce(ce, ue);
                          return (
                            (n.onReadyBeingFired = []),
                            Te.resolve(Cr(r)).then(e)
                          );
                        }
                      })
                    );
                  })
                  .finally(function () {
                    n.onReadyBeingFired = null;
                  })
                  .then(function () {
                    return (n.isBeingOpened = !1), e;
                  })
                  .catch(function (r) {
                    try {
                      a && a.abort();
                    } catch (t) {}
                    return (
                      (n.isBeingOpened = !1),
                      e.close(),
                      (n.dbOpenError = r),
                      In(n.dbOpenError)
                    );
                  })
                  .finally(function () {
                    (n.openComplete = !0), t();
                  });
              })(this);
            }),
            (e.prototype.close = function () {
              var e = Gn.indexOf(this),
                n = this._state;
              if ((e >= 0 && Gn.splice(e, 1), this.idbdb)) {
                try {
                  this.idbdb.close();
                } catch (r) {}
                this.idbdb = null;
              }
              (this._options.autoOpen = !1),
                (n.dbOpenError = new me.DatabaseClosed()),
                n.isBeingOpened && n.cancelOpen(n.dbOpenError),
                (n.dbReadyPromise = new Te(function (e) {
                  n.dbReadyResolve = e;
                })),
                (n.openCanceller = new Te(function (e, r) {
                  n.cancelOpen = r;
                }));
            }),
            (e.prototype.delete = function () {
              var e = this,
                n = arguments.length > 0,
                r = this._state;
              return new Te(function (t, a) {
                var m = function () {
                  e.close();
                  var n = e._deps.indexedDB.deleteDatabase(e.name);
                  (n.onsuccess = en(function () {
                    kr.remove(e.name), t();
                  })),
                    (n.onerror = nr(a)),
                    (n.onblocked = e._fireOnBlocked);
                };
                if (n)
                  throw new me.InvalidArgument(
                    'Arguments not allowed in db.delete()'
                  );
                r.isBeingOpened ? r.dbReadyPromise.then(m) : m();
              });
            }),
            (e.prototype.backendDB = function () {
              return this.idbdb;
            }),
            (e.prototype.isOpen = function () {
              return null !== this.idbdb;
            }),
            (e.prototype.hasBeenClosed = function () {
              var e = this._state.dbOpenError;
              return e && 'DatabaseClosed' === e.name;
            }),
            (e.prototype.hasFailed = function () {
              return null !== this._state.dbOpenError;
            }),
            (e.prototype.dynamicallyOpened = function () {
              return this._state.autoSchema;
            }),
            Object.defineProperty(e.prototype, 'tables', {
              get: function () {
                var e = this;
                return o(this._allTables).map(function (n) {
                  return e._allTables[n];
                });
              },
              enumerable: !0,
              configurable: !0
            }),
            (e.prototype.transaction = function () {
              var e = _r.apply(this, arguments);
              return this._transaction.apply(this, e);
            }),
            (e.prototype._transaction = function (e, n, r) {
              var t = this,
                a = Fe.trans;
              (a && a.db === this && -1 === e.indexOf('!')) || (a = null);
              var m,
                o,
                i = -1 !== e.indexOf('?');
              e = e.replace('!', '').replace('?', '');
              try {
                if (
                  ((o = n.map(function (e) {
                    var n = e instanceof t.Table ? e.name : e;
                    if ('string' != typeof n)
                      throw new TypeError(
                        'Invalid table argument to Dexie.transaction(). Only Table or String are allowed'
                      );
                    return n;
                  })),
                  'r' == e || 'readonly' === e)
                )
                  m = 'readonly';
                else {
                  if ('rw' != e && 'readwrite' != e)
                    throw new me.InvalidArgument(
                      'Invalid transaction mode: ' + e
                    );
                  m = 'readwrite';
                }
                if (a) {
                  if ('readonly' === a.mode && 'readwrite' === m) {
                    if (!i)
                      throw new me.SubTransaction(
                        'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY'
                      );
                    a = null;
                  }
                  a &&
                    o.forEach(function (e) {
                      if (a && -1 === a.storeNames.indexOf(e)) {
                        if (!i)
                          throw new me.SubTransaction(
                            'Table ' +
                              e +
                              ' not included in parent transaction.'
                          );
                        a = null;
                      }
                    }),
                    i && a && !a.active && (a = null);
                }
              } catch (b) {
                return a
                  ? a._promise(null, function (e, n) {
                      n(b);
                    })
                  : In(b);
              }
              var u = wr.bind(null, this, m, o, a, r);
              return a
                ? a._promise(m, u, 'lock')
                : Fe.trans
                ? cn(Fe.transless, function () {
                    return t._whenReady(u);
                  })
                : this._whenReady(u);
            }),
            (e.prototype.table = function (e) {
              if (!N(this._allTables, e))
                throw new me.InvalidTable('Table ' + e + ' does not exist');
              return this._allTables[e];
            }),
            e
          );
        })(),
        Or = Rr;
      l(
        Or,
        a(a({}, ie), {
          delete: function (e) {
            return new Or(e).delete();
          },
          exists: function (e) {
            return new Or(e, { addons: [] })
              .open()
              .then(function (e) {
                return e.close(), !0;
              })
              .catch('NoSuchDatabaseError', function () {
                return !1;
              });
          },
          getDatabaseNames: function (e) {
            return kr ? kr.getDatabaseNames().then(e) : Te.resolve([]);
          },
          defineClass: function () {
            return function (e) {
              b(this, e);
            };
          },
          ignoreTransaction: function (e) {
            return Fe.trans ? cn(Fe.transless, e) : e();
          },
          vip: Cr,
          async: function (e) {
            return function () {
              try {
                var n = Gr(e.apply(this, arguments));
                return n && 'function' == typeof n.then ? n : Te.resolve(n);
              } catch (r) {
                return In(r);
              }
            };
          },
          spawn: function (e, n, r) {
            try {
              var t = Gr(e.apply(r, n || []));
              return t && 'function' == typeof t.then ? t : Te.resolve(t);
            } catch (a) {
              return In(a);
            }
          },
          currentTransaction: {
            get: function () {
              return Fe.trans || null;
            }
          },
          waitFor: function (e, n) {
            var r = Te.resolve(
              'function' == typeof e ? Or.ignoreTransaction(e) : e
            ).timeout(n || 6e4);
            return Fe.trans ? Fe.trans.waitFor(r) : r;
          },
          Promise: Te,
          debug: {
            get: function () {
              return q;
            },
            set: function (e) {
              U(
                e,
                'dexie' === e
                  ? function () {
                      return !0;
                    }
                  : Sn
              );
            }
          },
          derive: c,
          extend: b,
          props: l,
          override: I,
          Events: Pn,
          getByKeyPath: G,
          setByKeyPath: _,
          delByKeyPath: w,
          shallowClone: V,
          deepClone: P,
          getObjectDiff: L,
          asap: x,
          minKey: -1 / 0,
          addons: [],
          connections: Gn,
          errnames: te,
          dependencies: (function () {
            try {
              return {
                indexedDB:
                  u.indexedDB ||
                  u.mozIndexedDB ||
                  u.webkitIndexedDB ||
                  u.msIndexedDB,
                IDBKeyRange: u.IDBKeyRange || u.webkitIDBKeyRange
              };
            } catch (e) {
              return { indexedDB: null, IDBKeyRange: null };
            }
          })(),
          semVer: '3.0.3',
          version: '3.0.3'
            .split('.')
            .map(function (e) {
              return parseInt(e);
            })
            .reduce(function (e, n, r) {
              return e + n / Math.pow(10, 2 * r);
            }),
          default: Or,
          Dexie: Or
        })
      ),
        (Or.maxKey = er(Or.dependencies.IDBKeyRange)),
        (function (e) {
          try {
            kr = (function (e) {
              var n,
                r = e && 'function' == typeof e.databases;
              if (!r) {
                var t = new Rr('__dbnames', { addons: [] });
                t.version(1).stores({ dbnames: 'name' }),
                  (n = t.table('dbnames'));
              }
              return {
                getDatabaseNames: function () {
                  return r
                    ? Te.resolve(e.databases()).then(function (e) {
                        return e
                          .map(function (e) {
                            return e.name;
                          })
                          .filter(function (e) {
                            return '__dbnames' !== e;
                          });
                      })
                    : n.toCollection().primaryKeys();
                },
                add: function (e) {
                  return (
                    !r && '__dbnames' !== e && n.put({ name: e }).catch(ue)
                  );
                },
                remove: function (e) {
                  return !r && '__dbnames' !== e && n.delete(e).catch(ue);
                }
              };
            })(e);
          } catch (n) {}
        })(Rr.dependencies.indexedDB),
        (Te.rejectionMapper = function (e, n) {
          if (
            !e ||
            e instanceof Z ||
            e instanceof TypeError ||
            e instanceof SyntaxError ||
            !e.name ||
            !oe[e.name]
          )
            return e;
          var r = new oe[e.name](n || e.message, e);
          return (
            'stack' in e &&
              d(r, 'stack', {
                get: function () {
                  return this.inner.stack;
                }
              }),
            r
          );
        }),
        U(q, Sn);
      var Er = Rr,
        Pr = r('AfiK'),
        Fr = r('fXoL');
      let jr = (() => {
        class e extends Er {
          constructor() {
            super('PokemonDatabase'),
              this.version(1).stores({
                filters: '++id, filter, enabled, value',
                pokemon: '++id, name, generation',
                routes: '++id, location, type, game',
                nuzlockes: '++id, runName, game, random, status'
              }),
              this.version(2).stores({
                filters: '++id, filter, enabled, value',
                pokemon: '++id, name, generation, evolutionChain',
                routes: '++id, location, type, game',
                nuzlockes: '++id, runName, game, random, status'
              });
          }
          getFilter(e) {
            return Object(t.a)(this, void 0, void 0, function* () {
              const n = yield this.filters.get(e);
              return null != n ? n : Pr.b;
            });
          }
          countRoutesInGame(e) {
            return this.routes.where({ game: e }).count();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Fr.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    },
    '9PoT': function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return a;
      }),
        r.d(n, 'c', function () {
          return m;
        }),
        r.d(n, 'b', function () {
          return o;
        });
      var t = r('fJC1'),
        a = (function (e) {
          return (
            (e[(e.Normal = 0)] = 'Normal'),
            (e[(e.Fire = 1)] = 'Fire'),
            (e[(e.Fighting = 2)] = 'Fighting'),
            (e[(e.Water = 3)] = 'Water'),
            (e[(e.Flying = 4)] = 'Flying'),
            (e[(e.Grass = 5)] = 'Grass'),
            (e[(e.Poison = 6)] = 'Poison'),
            (e[(e.Electric = 7)] = 'Electric'),
            (e[(e.Ground = 8)] = 'Ground'),
            (e[(e.Psychic = 9)] = 'Psychic'),
            (e[(e.Rock = 10)] = 'Rock'),
            (e[(e.Ice = 11)] = 'Ice'),
            (e[(e.Bug = 12)] = 'Bug'),
            (e[(e.Dragon = 13)] = 'Dragon'),
            (e[(e.Ghost = 14)] = 'Ghost'),
            (e[(e.Dark = 15)] = 'Dark'),
            (e[(e.Steel = 16)] = 'Steel'),
            (e[(e.Fairy = 17)] = 'Fairy'),
            (e[(e.Unknown = 18)] = 'Unknown'),
            e
          );
        })({});
      const m = Object(t.a)(a),
        o = Object(t.b)(a).filter((e) => 'Unknown' !== e);
    },
    AfiK: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return t;
      }),
        r.d(n, 'b', function () {
          return a;
        });
      var t = (function (e) {
        return (
          (e[(e.Coverage = 0)] = 'Coverage'),
          (e[(e.Search = 1)] = 'Search'),
          (e[(e.Types = 2)] = 'Types'),
          (e[(e.Regions = 3)] = 'Regions'),
          (e[(e.Generations = 4)] = 'Generations'),
          (e[(e.Extras = 5)] = 'Extras'),
          e
        );
      })({});
      const a = { filter: t.Coverage, value: '', id: -1 };
    },
    GJmQ: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return a;
      });
      var t = r('7o/Q');
      function a(e, n = !1) {
        return (r) => r.lift(new m(e, n));
      }
      class m {
        constructor(e, n) {
          (this.predicate = e), (this.inclusive = n);
        }
        call(e, n) {
          return n.subscribe(new o(e, this.predicate, this.inclusive));
        }
      }
      class o extends t.a {
        constructor(e, n, r) {
          super(e),
            (this.predicate = n),
            (this.inclusive = r),
            (this.index = 0);
        }
        _next(e) {
          const n = this.destination;
          let r;
          try {
            r = this.predicate(e, this.index++);
          } catch (t) {
            return void n.error(t);
          }
          this.nextOrComplete(e, r);
        }
        nextOrComplete(e, n) {
          const r = this.destination;
          Boolean(n) ? r.next(e) : (this.inclusive && r.next(e), r.complete());
        }
      }
    },
    HCsY: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return h;
      });
      var t = r('mrSG'),
        a = r('NptF'),
        m = r('XNiG'),
        o = r('2Vo4'),
        i = r('fXoL'),
        u = r('jeMW'),
        b = r('xBi6'),
        y = r('req1'),
        s = r('9PoT'),
        N = r('AfiK'),
        l = r('zsLg');
      let p = (() => {
          class e {
            constructor() {
              this.typeEffectivenessMap = this.addAll();
            }
            addNormal(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Rock, s.a.Steel]),
                this.addNot(s.a.Ghost, n),
                this.addRest(n),
                e.set(s.a.Normal, n);
            }
            addFire(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Fire, s.a.Water, s.a.Rock, s.a.Dragon]),
                this.addDouble(n, [s.a.Grass, s.a.Ice, s.a.Bug, s.a.Steel]),
                this.addRest(n),
                e.set(s.a.Fire, n);
            }
            addWater(e) {
              const n = new Map();
              this.addDouble(n, [s.a.Fire, s.a.Ground, s.a.Rock]),
                this.addHalf(n, [s.a.Water, s.a.Grass, s.a.Dragon]),
                this.addRest(n),
                e.set(s.a.Water, n);
            }
            addElectric(e) {
              const n = new Map();
              this.addDouble(n, [s.a.Water, s.a.Flying]),
                this.addHalf(n, [s.a.Electric, s.a.Grass, s.a.Dragon]),
                this.addNot(s.a.Ground, n),
                this.addRest(n),
                e.set(s.a.Electric, n);
            }
            addGrass(e) {
              const n = new Map();
              this.addHalf(n, [
                s.a.Fire,
                s.a.Grass,
                s.a.Poison,
                s.a.Flying,
                s.a.Bug,
                s.a.Dragon,
                s.a.Steel
              ]),
                this.addDouble(n, [s.a.Water, s.a.Ground, s.a.Rock]),
                this.addRest(n),
                e.set(s.a.Grass, n);
            }
            addIce(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Fire, s.a.Water, s.a.Ice, s.a.Steel]),
                this.addDouble(n, [
                  s.a.Grass,
                  s.a.Ground,
                  s.a.Flying,
                  s.a.Dragon
                ]),
                this.addRest(n),
                e.set(s.a.Ice, n);
            }
            addFighting(e) {
              const n = new Map();
              this.addDouble(n, [
                s.a.Normal,
                s.a.Ice,
                s.a.Rock,
                s.a.Dark,
                s.a.Steel
              ]),
                this.addHalf(n, [
                  s.a.Poison,
                  s.a.Flying,
                  s.a.Psychic,
                  s.a.Bug,
                  s.a.Fairy
                ]),
                this.addNot(s.a.Ghost, n),
                this.addRest(n),
                e.set(s.a.Fighting, n);
            }
            addPoison(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Poison, s.a.Ground, s.a.Rock, s.a.Ghost]),
                this.addDouble(n, [s.a.Grass, s.a.Fairy]),
                this.addNot(s.a.Steel, n),
                this.addRest(n),
                e.set(s.a.Poison, n);
            }
            addGround(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Grass, s.a.Bug]),
                this.addDouble(n, [
                  s.a.Fire,
                  s.a.Electric,
                  s.a.Poison,
                  s.a.Rock,
                  s.a.Steel
                ]),
                this.addNot(s.a.Flying, n),
                this.addRest(n),
                e.set(s.a.Ground, n);
            }
            addFlying(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Electric, s.a.Rock, s.a.Steel]),
                this.addDouble(n, [s.a.Grass, s.a.Fighting, s.a.Bug]),
                this.addRest(n),
                e.set(s.a.Flying, n);
            }
            addPsychic(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Psychic, s.a.Steel]),
                this.addDouble(n, [s.a.Fighting, s.a.Poison]),
                this.addNot(s.a.Dark, n),
                this.addRest(n),
                e.set(s.a.Psychic, n);
            }
            addBug(e) {
              const n = new Map();
              this.addHalf(n, [
                s.a.Fire,
                s.a.Fighting,
                s.a.Poison,
                s.a.Flying,
                s.a.Ghost,
                s.a.Steel,
                s.a.Fairy
              ]),
                this.addDouble(n, [s.a.Grass, s.a.Psychic, s.a.Dark]),
                this.addRest(n),
                e.set(s.a.Bug, n);
            }
            addRock(e) {
              const n = new Map();
              this.addDouble(n, [s.a.Fire, s.a.Ice, s.a.Flying, s.a.Bug]),
                this.addHalf(n, [s.a.Fighting, s.a.Ground, s.a.Steel]),
                this.addRest(n),
                e.set(s.a.Rock, n);
            }
            addGhost(e) {
              const n = new Map();
              this.addNot(s.a.Normal, n),
                this.addHalf(n, [s.a.Dark]),
                this.addDouble(n, [s.a.Ghost, s.a.Psychic]),
                this.addRest(n),
                e.set(s.a.Ghost, n);
            }
            addDragon(e) {
              const n = new Map();
              this.addDouble(n, [s.a.Dragon]),
                this.addHalf(n, [s.a.Steel]),
                this.addNot(s.a.Fairy, n),
                this.addRest(n),
                e.set(s.a.Dragon, n);
            }
            addDark(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Fighting, s.a.Dragon, s.a.Fairy]),
                this.addDouble(n, [s.a.Psychic, s.a.Ghost]),
                this.addRest(n),
                e.set(s.a.Dark, n);
            }
            addSteel(e) {
              const n = new Map();
              this.addHalf(n, [s.a.Fire, s.a.Water, s.a.Electric, s.a.Steel]),
                this.addDouble(n, [s.a.Ice, s.a.Fairy]),
                this.addRest(n),
                e.set(s.a.Steel, n);
            }
            addFairy(e) {
              const n = new Map();
              this.addDouble(n, [s.a.Fighting, s.a.Dragon, s.a.Dark]),
                this.addHalf(n, [s.a.Fire, s.a.Poison, s.a.Steel]),
                this.addRest(n),
                e.set(s.a.Fairy, n);
            }
            addAll() {
              const e = new Map();
              return (
                this.addNormal(e),
                this.addFire(e),
                this.addWater(e),
                this.addElectric(e),
                this.addGrass(e),
                this.addIce(e),
                this.addFighting(e),
                this.addPoison(e),
                this.addGround(e),
                this.addFlying(e),
                this.addPsychic(e),
                this.addBug(e),
                this.addRock(e),
                this.addGhost(e),
                this.addDragon(e),
                this.addDark(e),
                this.addSteel(e),
                this.addFairy(e),
                e
              );
            }
            addHalf(e, n) {
              for (const r of n) e.set(r, 0.5);
            }
            addDouble(e, n) {
              for (const r of n) e.set(r, 2);
            }
            addNot(e, n) {
              n.set(e, 0);
            }
            addRest(e) {
              const n = Array.from(e.keys()),
                r = s.c.filter((e) => !n.includes(e));
              for (const t of r) e.set(t, 1);
            }
            isCovered(e, n) {
              var r, t, a;
              if (1 === n.length) {
                for (const t of e)
                  if (
                    2 ===
                    (null === (r = this.typeEffectivenessMap.get(t)) ||
                    void 0 === r
                      ? void 0
                      : r.get(n[0]))
                  )
                    return !0;
                return !1;
              }
              for (const m of e) {
                const e = this.typeEffectivenessMap.get(m);
                if (
                  (null !== (t = null == e ? void 0 : e.get(n[0])) &&
                  void 0 !== t
                    ? t
                    : 1) *
                    (null !== (a = null == e ? void 0 : e.get(n[1])) &&
                    void 0 !== a
                      ? a
                      : 1) >
                  1
                )
                  return !0;
              }
              return !1;
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        d = (() => {
          class e {
            removeHide(e) {
              return e.replace(/(hide|Hide)/, '').trim();
            }
            removeForms(e) {
              return e.replace(/(forms|Forms)/, '').trim();
            }
            trimRegionName(e) {
              return this.removeHide(this.removeForms(e))
                .replace(/(mega|Mega)s/, '$1')
                .replace(/(alola|Alola)n/, '$1')
                .replace(/(galar|Galar)ian/, '$1')
                .trim();
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        c = (() => {
          class e {
            constructor(e, n, r, t) {
              (this.pokemonImageService = e),
                (this.coverageService = n),
                (this.filterNameService = r),
                (this.filterService = t),
                (this.pokemon = []),
                (this.filteredPokemon = []),
                (this.alive = !1);
            }
            callFilters(e, n, r) {
              return (
                (e = this.updateFilters(r, e)),
                (this.filteredPokemon = this.pokemon.filter((e) =>
                  n.every((n) => !n.equals(e))
                )),
                this.filterSearch(e),
                this.filterTypes(e),
                this.filterRegions(e),
                this.filterGenerations(e),
                this.filterExtras(e),
                this.filterCoverage(e),
                this.filteredPokemon
              );
            }
            setPokemon(e) {
              (this.pokemon = e), (this.alive = !0);
            }
            updateFilters(e, n) {
              return (
                e && this.filterService.addSearchFilter(''),
                n.filter((n) =>
                  e ? n.filter !== N.a.Search && n.enabled : n.enabled
                )
              );
            }
            getTypes(e) {
              const n = [];
              for (const r of e.map((e) => e.types))
                for (const e of r) n.push(e);
              return n;
            }
            filterSearch(e) {
              const n = e.filter((e) => e.filter === N.a.Search);
              n.length &&
                (this.filteredPokemon = this.filteredPokemon.filter((e) =>
                  n.some(({ value: n }) =>
                    this.pokemonImageService
                      .characterReplace(e.name)
                      .toLowerCase()
                      .includes(n.trim().toLowerCase())
                  )
                ));
            }
            filterRegions(e) {
              const n = e.filter((e) => e.filter === N.a.Regions);
              if (n.length) {
                const e = n.map((e) => Object(y.b)(e.value));
                (this.filteredPokemon = this.filteredPokemon.filter((n) =>
                  n.pokedexNumbers.some(({ name: n }) => e.includes(n))
                )),
                  this.sortFilterByRegions(e);
              }
            }
            filterTypes(e) {
              const n = e.filter((e) => e.filter === N.a.Types);
              if (n.length) {
                const e = n.map((e) => s.a[e.value]);
                this.filteredPokemon = this.filteredPokemon.filter((n) =>
                  e.some((e) => n.types.includes(e))
                );
              }
            }
            filterGenerations(e) {
              const n = e.filter((e) => e.filter === N.a.Generations);
              n.length && this.filterByGeneration(n.map((e) => e.value));
            }
            filterExtras(e) {
              const n = e.filter((e) => e.filter === N.a.Extras);
              n.length &&
                (this.filteredPokemon = this.filteredPokemon.filter(
                  ({ name: e }) =>
                    n
                      .map((e) =>
                        this.filterNameService.trimRegionName(e.value)
                      )
                      .every((n) => !e.includes(n.toLowerCase()))
                ));
            }
            filterCoverage(e) {
              const n = e.find((e) => e.filter === N.a.Coverage);
              if (n) {
                const e = JSON.parse(n.value).filter(
                    ({ name: e }) => 'Empty Team Member' !== e
                  ),
                  r = Array.from(new Set(this.getTypes(e)));
                this.filteredPokemon = this.filteredPokemon.filter(
                  ({ types: e }) => !this.coverageService.isCovered(r, e)
                );
              }
            }
            sortFilterByRegions(e) {
              this.filteredPokemon = this.filteredPokemon.sort((n, r) => {
                if (e.length > 1) {
                  const e = n.getNationalPokedex(),
                    t = r.getNationalPokedex();
                  return this.compareNumbers(e, t);
                }
                {
                  const t = n.pokedexNumbers.find(({ name: n }) =>
                      e.includes(n)
                    ),
                    a = r.pokedexNumbers.find(({ name: n }) => e.includes(n));
                  return this.compareNumbers(t, a);
                }
              });
            }
            compareNumbers(e, n) {
              var r, t;
              return e && !n
                ? 1
                : !e && n
                ? -1
                : (null !== (r = null == e ? void 0 : e.entryNumber) &&
                  void 0 !== r
                    ? r
                    : -1) -
                  (null !== (t = null == n ? void 0 : n.entryNumber) &&
                  void 0 !== t
                    ? t
                    : -1);
            }
            filterByGeneration(e) {
              this.filteredPokemon = this.filteredPokemon.filter(
                ({ generation: n }) => e.some((e) => n === e)
              );
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(i.Ub(l.a), i.Ub(p), i.Ub(d), i.Ub(u.a));
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        h = (() => {
          class e {
            constructor(e, n, r) {
              (this.filterService = e),
                (this.pokemonService = n),
                (this.pokemonFilterService = r),
                (this.team = this.loadTeam()),
                (this.pokemon = []),
                (this.pokemonChange = new m.a()),
                (this.teamChange = new o.a(this.loadTeam()));
            }
            fetchPokemon() {
              return Object(t.a)(this, void 0, void 0, function* () {
                yield this.pokemonService.createDatabase();
                const e = yield this.pokemonService.getPokemon();
                this.pokemonFilterService.setPokemon(e);
              });
            }
            fetchFilters() {
              return Object(t.a)(this, void 0, void 0, function* () {
                yield this.fetchPokemon(), yield this.sendTeamChange();
              });
            }
            loadTeam() {
              const e = JSON.parse(localStorage.getItem('team') || '[]');
              return (this.team = e.map((e) => new a.a(e))), this.team;
            }
            updateTeam(e = !1) {
              this.teamChange.next(this.team),
                this.filterService.checkingCoverage &&
                  this.filterService.checkCoverage(this.team),
                this.setLocalStorage(),
                this.sendTeamChange(e);
            }
            sendTeamChange(e = !1) {
              return Object(t.a)(this, void 0, void 0, function* () {
                if (this.pokemonFilterService.alive) {
                  const n = yield this.filterService.getFilters();
                  this.pokemonChange.next(
                    this.pokemonFilterService.callFilters(n, this.team, e)
                  );
                }
              });
            }
            addToTeam(e, n = !0) {
              this.team.length < 6 &&
                e &&
                (this.team.unshift(),
                this.team.push(e),
                n && this.updateTeam(!0));
            }
            setLocalStorage() {
              localStorage.setItem('team', JSON.stringify(this.team));
            }
            exportToTeamBuilder(e) {
              return Object(t.a)(this, void 0, void 0, function* () {
                (this.team = []), yield this.pokemonService.createDatabase();
                const n = yield this.pokemonService.getPokemon();
                for (const r of e) {
                  const e = n.find(
                    (e) => e.name.toLowerCase() === r.toLowerCase()
                  );
                  this.addToTeam(e, !1);
                }
                this.setLocalStorage();
              });
            }
            removeFromTeam(e) {
              this.team.length > 0 &&
                ((this.team = this.team.filter(({ name: n }) => e.name !== n)),
                this.updateTeam());
            }
            requestUpdate() {
              this.loadTeam(), this.teamChange.next(this.team);
            }
            get teamChange$() {
              return this.teamChange.asObservable();
            }
            get pokemonChange$() {
              return this.pokemonChange.asObservable();
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(i.Ub(u.a), i.Ub(b.a), i.Ub(c));
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
    },
    HN8I: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return m;
      });
      var t = r('fXoL'),
        a = r('ioxi');
      let m = (() => {
        class e {
          constructor(e) {
            (this.titleCaseService = e),
              (this.isMegaRegex = /(\s|\-)(M|m)ega/),
              (this.isAlolaRegex = /-?(A|a)lola(n)?/),
              (this.isGalarRegex = /-?(G|g)alar(ian)?/),
              (this.megaReplaceRegex = /-?(m|M)ega-?(\w+)?/),
              (this.formRegex = /(\w{3,})-(\w{2,})(-\w{2,})?/);
          }
          transform(e) {
            return this.isMega(e)
              ? this.titleCaseService.titlecase(
                  'mega ' +
                    e
                      .replace(this.megaReplaceRegex, ' $2')
                      .replace(this.isAlolaRegex, '')
                      .replace(this.isGalarRegex, '')
                      .trim()
                )
              : this.isGalar(e)
              ? this.titleCaseService.titlecase(
                  'Galarian ' + e.replace(this.isGalarRegex, '')
                )
              : this.isAlola(e)
              ? this.titleCaseService.titlecase(
                  'Alolan ' + e.replace(this.isAlolaRegex, '')
                )
              : this.isFormed(e) && !e.toLowerCase().includes('tapu')
              ? this.titleCaseService.titlecase(this.formatForm(e))
              : e.toLowerCase().includes('tapu')
              ? this.titleCaseService.titlecase(e.replace('-', ' '))
              : this.titleCaseService.titlecase(e.replace(':-', ': '));
          }
          formatForm(e) {
            return e.replace(this.formRegex, '$2$3 $1');
          }
          isFormed(e) {
            return this.matchesRegex(e, this.formRegex);
          }
          isMega(e) {
            return this.matchesRegex(e, this.isMegaRegex);
          }
          matchesRegex(e, n) {
            var r, t;
            return (
              null !==
                (t = !!(null === (r = e.match(n)) || void 0 === r
                  ? void 0
                  : r.length)) &&
              void 0 !== t &&
              t
            );
          }
          isGalar(e) {
            return this.matchesRegex(e, this.isGalarRegex);
          }
          isAlola(e) {
            return this.matchesRegex(e, this.isAlolaRegex);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Ub(a.a));
          }),
          (e.ɵprov = t.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    },
    NptF: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return m;
      });
      var t = r('req1'),
        a = r('9PoT');
      class m extends class {
        constructor(e) {
          e
            ? ((this.name = e.name),
              (this.pokedexNumbers = e.pokedexNumbers),
              (this.types = e.types),
              (this.generation = e.generation),
              (this.evolutionChain = e.evolutionChain))
            : ((this.name = ''),
              (this.pokedexNumbers = []),
              (this.evolutionChain = -1),
              (this.types = []),
              (this.generation = ''));
        }
        getNationalPokedex() {
          return this.pokedexNumbers.find((e) => e.name === t.a.National);
        }
      } {
        constructor(e) {
          if (e) {
            super(e);
            const n = this.types.map((e) => a.a[e].toLowerCase());
            this.cssClasses =
              1 === this.types.length
                ? 'circle ' + n[0]
                : `circle ${n[0]}-primary ${n[1]}-secondary`;
          } else
            super(),
              (this.name = 'Empty Team Member'),
              (this.types = [a.a.Unknown, a.a.Unknown]),
              (this.cssClasses = 'empty-team-member');
        }
        equals(e) {
          return this.name === e.name;
        }
      }
    },
    Xa2L: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return g;
      }),
        r.d(n, 'b', function () {
          return f;
        });
      var t = r('fXoL'),
        a = r('ofXK'),
        m = r('FKr1'),
        o = r('8LU1'),
        i = r('nLfN'),
        u = r('R1ws');
      function b(e, n) {
        if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
          const e = t.bc();
          t.wc(
            'animation-name',
            'mat-progress-spinner-stroke-rotate-' + e._spinnerAnimationLabel
          )('stroke-dashoffset', e._getStrokeDashOffset(), 'px')(
            'stroke-dasharray',
            e._getStrokeCircumference(),
            'px'
          )('stroke-width', e._getCircleStrokeWidth(), '%'),
            t.Ab('r', e._getCircleRadius());
        }
      }
      function y(e, n) {
        if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
          const e = t.bc();
          t.wc('stroke-dashoffset', e._getStrokeDashOffset(), 'px')(
            'stroke-dasharray',
            e._getStrokeCircumference(),
            'px'
          )('stroke-width', e._getCircleStrokeWidth(), '%'),
            t.Ab('r', e._getCircleRadius());
        }
      }
      function s(e, n) {
        if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
          const e = t.bc();
          t.wc(
            'animation-name',
            'mat-progress-spinner-stroke-rotate-' + e._spinnerAnimationLabel
          )('stroke-dashoffset', e._getStrokeDashOffset(), 'px')(
            'stroke-dasharray',
            e._getStrokeCircumference(),
            'px'
          )('stroke-width', e._getCircleStrokeWidth(), '%'),
            t.Ab('r', e._getCircleRadius());
        }
      }
      function N(e, n) {
        if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
          const e = t.bc();
          t.wc('stroke-dashoffset', e._getStrokeDashOffset(), 'px')(
            'stroke-dasharray',
            e._getStrokeCircumference(),
            'px'
          )('stroke-width', e._getCircleStrokeWidth(), '%'),
            t.Ab('r', e._getCircleRadius());
        }
      }
      const l =
        '.mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n';
      class p {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const d = Object(m.r)(p, 'primary'),
        c = new t.q('mat-progress-spinner-default-options', {
          providedIn: 'root',
          factory: function () {
            return { diameter: 100 };
          }
        });
      let h = (() => {
          class e extends d {
            constructor(n, r, t, a, m) {
              super(n),
                (this._elementRef = n),
                (this._document = t),
                (this._diameter = 100),
                (this._value = 0),
                (this._fallbackAnimation = !1),
                (this.mode = 'determinate');
              const o = e._diameters;
              (this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
                o.has(t.head) || o.set(t.head, new Set([100])),
                (this._fallbackAnimation = r.EDGE || r.TRIDENT),
                (this._noopAnimations =
                  'NoopAnimations' === a && !!m && !m._forceAnimations),
                m &&
                  (m.diameter && (this.diameter = m.diameter),
                  m.strokeWidth && (this.strokeWidth = m.strokeWidth));
            }
            get diameter() {
              return this._diameter;
            }
            set diameter(e) {
              (this._diameter = Object(o.e)(e)),
                (this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
                !this._fallbackAnimation &&
                  this._styleRoot &&
                  this._attachStyleNode();
            }
            get strokeWidth() {
              return this._strokeWidth || this.diameter / 10;
            }
            set strokeWidth(e) {
              this._strokeWidth = Object(o.e)(e);
            }
            get value() {
              return 'determinate' === this.mode ? this._value : 0;
            }
            set value(e) {
              this._value = Math.max(0, Math.min(100, Object(o.e)(e)));
            }
            ngOnInit() {
              const e = this._elementRef.nativeElement;
              (this._styleRoot = Object(i.c)(e) || this._document.head),
                this._attachStyleNode(),
                e.classList.add(
                  `mat-progress-spinner-indeterminate${
                    this._fallbackAnimation ? '-fallback' : ''
                  }-animation`
                );
            }
            _getCircleRadius() {
              return (this.diameter - 10) / 2;
            }
            _getViewBox() {
              const e = 2 * this._getCircleRadius() + this.strokeWidth;
              return `0 0 ${e} ${e}`;
            }
            _getStrokeCircumference() {
              return 2 * Math.PI * this._getCircleRadius();
            }
            _getStrokeDashOffset() {
              return 'determinate' === this.mode
                ? (this._getStrokeCircumference() * (100 - this._value)) / 100
                : this._fallbackAnimation && 'indeterminate' === this.mode
                ? 0.2 * this._getStrokeCircumference()
                : null;
            }
            _getCircleStrokeWidth() {
              return (this.strokeWidth / this.diameter) * 100;
            }
            _attachStyleNode() {
              const n = this._styleRoot,
                r = this._diameter,
                t = e._diameters;
              let a = t.get(n);
              if (!a || !a.has(r)) {
                const e = this._document.createElement('style');
                e.setAttribute(
                  'mat-spinner-animation',
                  this._spinnerAnimationLabel
                ),
                  (e.textContent = this._getAnimationText()),
                  n.appendChild(e),
                  a || ((a = new Set()), t.set(n, a)),
                  a.add(r);
              }
            }
            _getAnimationText() {
              const e = this._getStrokeCircumference();
              return '\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n'
                .replace(/START_VALUE/g, '' + 0.95 * e)
                .replace(/END_VALUE/g, '' + 0.2 * e)
                .replace(/DIAMETER/g, '' + this._spinnerAnimationLabel);
            }
            _getSpinnerAnimationLabel() {
              return this.diameter.toString().replace('.', '_');
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(
                t.Kb(t.l),
                t.Kb(i.a),
                t.Kb(a.d, 8),
                t.Kb(u.a, 8),
                t.Kb(c)
              );
            }),
            (e.ɵcmp = t.Eb({
              type: e,
              selectors: [['mat-progress-spinner']],
              hostAttrs: ['role', 'progressbar', 1, 'mat-progress-spinner'],
              hostVars: 10,
              hostBindings: function (e, n) {
                2 & e &&
                  (t.Ab('aria-valuemin', 'determinate' === n.mode ? 0 : null)(
                    'aria-valuemax',
                    'determinate' === n.mode ? 100 : null
                  )('aria-valuenow', 'determinate' === n.mode ? n.value : null)(
                    'mode',
                    n.mode
                  ),
                  t.wc('width', n.diameter, 'px')('height', n.diameter, 'px'),
                  t.Cb('_mat-animation-noopable', n._noopAnimations));
              },
              inputs: {
                color: 'color',
                mode: 'mode',
                diameter: 'diameter',
                strokeWidth: 'strokeWidth',
                value: 'value'
              },
              exportAs: ['matProgressSpinner'],
              features: [t.wb],
              decls: 3,
              vars: 8,
              consts: [
                [
                  'preserveAspectRatio',
                  'xMidYMid meet',
                  'focusable',
                  'false',
                  3,
                  'ngSwitch'
                ],
                [
                  'cx',
                  '50%',
                  'cy',
                  '50%',
                  3,
                  'animation-name',
                  'stroke-dashoffset',
                  'stroke-dasharray',
                  'stroke-width',
                  4,
                  'ngSwitchCase'
                ],
                [
                  'cx',
                  '50%',
                  'cy',
                  '50%',
                  3,
                  'stroke-dashoffset',
                  'stroke-dasharray',
                  'stroke-width',
                  4,
                  'ngSwitchCase'
                ],
                ['cx', '50%', 'cy', '50%']
              ],
              template: function (e, n) {
                1 & e &&
                  (t.ac(),
                  t.Qb(0, 'svg', 0),
                  t.zc(1, b, 1, 9, 'circle', 1),
                  t.zc(2, y, 1, 7, 'circle', 2),
                  t.Pb()),
                  2 & e &&
                    (t.wc('width', n.diameter, 'px')(
                      'height',
                      n.diameter,
                      'px'
                    ),
                    t.ic('ngSwitch', 'indeterminate' === n.mode),
                    t.Ab('viewBox', n._getViewBox()),
                    t.zb(1),
                    t.ic('ngSwitchCase', !0),
                    t.zb(1),
                    t.ic('ngSwitchCase', !1));
              },
              directives: [a.n, a.o],
              styles: [l],
              encapsulation: 2,
              changeDetection: 0
            })),
            (e._diameters = new WeakMap()),
            e
          );
        })(),
        f = (() => {
          class e extends h {
            constructor(e, n, r, t, a) {
              super(e, n, r, t, a), (this.mode = 'indeterminate');
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(
                t.Kb(t.l),
                t.Kb(i.a),
                t.Kb(a.d, 8),
                t.Kb(u.a, 8),
                t.Kb(c)
              );
            }),
            (e.ɵcmp = t.Eb({
              type: e,
              selectors: [['mat-spinner']],
              hostAttrs: [
                'role',
                'progressbar',
                'mode',
                'indeterminate',
                1,
                'mat-spinner',
                'mat-progress-spinner'
              ],
              hostVars: 6,
              hostBindings: function (e, n) {
                2 & e &&
                  (t.wc('width', n.diameter, 'px')('height', n.diameter, 'px'),
                  t.Cb('_mat-animation-noopable', n._noopAnimations));
              },
              inputs: { color: 'color' },
              features: [t.wb],
              decls: 3,
              vars: 8,
              consts: [
                [
                  'preserveAspectRatio',
                  'xMidYMid meet',
                  'focusable',
                  'false',
                  3,
                  'ngSwitch'
                ],
                [
                  'cx',
                  '50%',
                  'cy',
                  '50%',
                  3,
                  'animation-name',
                  'stroke-dashoffset',
                  'stroke-dasharray',
                  'stroke-width',
                  4,
                  'ngSwitchCase'
                ],
                [
                  'cx',
                  '50%',
                  'cy',
                  '50%',
                  3,
                  'stroke-dashoffset',
                  'stroke-dasharray',
                  'stroke-width',
                  4,
                  'ngSwitchCase'
                ],
                ['cx', '50%', 'cy', '50%']
              ],
              template: function (e, n) {
                1 & e &&
                  (t.ac(),
                  t.Qb(0, 'svg', 0),
                  t.zc(1, s, 1, 9, 'circle', 1),
                  t.zc(2, N, 1, 7, 'circle', 2),
                  t.Pb()),
                  2 & e &&
                    (t.wc('width', n.diameter, 'px')(
                      'height',
                      n.diameter,
                      'px'
                    ),
                    t.ic('ngSwitch', 'indeterminate' === n.mode),
                    t.Ab('viewBox', n._getViewBox()),
                    t.zb(1),
                    t.ic('ngSwitchCase', !0),
                    t.zb(1),
                    t.ic('ngSwitchCase', !1));
              },
              directives: [a.n, a.o],
              styles: [l],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })(),
        g = (() => {
          class e {}
          return (
            (e.ɵmod = t.Ib({ type: e })),
            (e.ɵinj = t.Hb({
              factory: function (n) {
                return new (n || e)();
              },
              imports: [[m.e, a.c], m.e]
            })),
            e
          );
        })();
    },
    fJC1: function (e, n, r) {
      'use strict';
      function t(e) {
        return Object.keys(e)
          .filter((n) => 'number' != typeof e[n])
          .map((e) => Number(e));
      }
      function a(e) {
        return Object.keys(e).filter((n) => 'number' == typeof e[n]);
      }
      r.d(n, 'a', function () {
        return t;
      }),
        r.d(n, 'b', function () {
          return a;
        });
    },
    jeMW: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return p;
      });
      var t = r('mrSG'),
        a = r('req1'),
        m = r('9PoT'),
        o = r('fJC1');
      function i(e) {
        const n = [10, 9, 5, 4, 1],
          r = ['X', 'IX', 'V', 'IV', 'I'];
        for (let t = 0; t < n.length; t++)
          if (e >= n[t]) return r[t] + i(e - n[t]);
        return '';
      }
      var u = r('AfiK');
      const b = Object(o.b)(a.a);
      let y = 0;
      var s = [
          { filter: u.a.Coverage, value: '', enabled: 0, id: y++ },
          { filter: u.a.Search, value: '', enabled: 0, id: y++ },
          ...[
            'Hide Megas',
            'Hide Alolan Forms',
            'Hide Galarian Forms'
          ].map((e) => ({ filter: u.a.Extras, value: e, enabled: 1, id: y++ })),
          ...b.map((e) => ({
            filter: u.a.Regions,
            value: e,
            enabled: 0,
            id: y++
          })),
          ...Array.from(Array(8).keys()).map((e) => ({
            filter: u.a.Generations,
            value: 'Generation ' + i(e + 1),
            enabled: 0,
            id: y++
          })),
          ...m.b.map((e) => ({
            filter: u.a.Types,
            value: e,
            enabled: 0,
            id: y++
          }))
        ],
        N = r('fXoL'),
        l = r('6Ke5');
      let p = (() => {
        class e {
          constructor(e) {
            (this.databaseService = e), (this.checkingCoverage = !1);
          }
          setDefaultFilters() {
            return Object(t.a)(this, void 0, void 0, function* () {
              0 === (yield this.databaseService.filters.count()) &&
                (yield this.databaseService.filters.bulkAdd(s));
            });
          }
          createDatabase() {
            return Object(t.a)(this, void 0, void 0, function* () {
              yield this.setDefaultFilters(),
                this.getCoverageFilter().then((e) => {
                  this.checkingCoverage =
                    1 === (null == e ? void 0 : e.enabled);
                });
            });
          }
          resetFilters() {
            return Object(t.a)(this, void 0, void 0, function* () {
              yield this.databaseService.filters.clear();
            });
          }
          getAllFilters() {
            return Object(t.a)(this, void 0, void 0, function* () {
              return (yield this.databaseService.filters
                .filter(
                  ({ filter: e, value: n }) =>
                    e !== u.a.Coverage &&
                    e !== u.a.Search &&
                    !(e === u.a.Regions && n === a.a[a.a.National])
                )
                .toArray()).sort((e, n) => e.filter - n.filter);
            });
          }
          getFilters() {
            return Object(t.a)(this, void 0, void 0, function* () {
              return (
                yield this.setDefaultFilters(),
                this.databaseService.filters.where({ enabled: 1 }).toArray()
              );
            });
          }
          getSearchFilter() {
            return Object(t.a)(this, void 0, void 0, function* () {
              return this.databaseService.getFilter(u.a.Search);
            });
          }
          addSearchFilter(e) {
            return Object(t.a)(this, void 0, void 0, function* () {
              const n = yield this.getSearchFilter();
              this.databaseService.filters.update(n.id, {
                value: e.trim(),
                enabled: e.trim().length > 0 ? 1 : 0
              });
            });
          }
          getCoverageFilter() {
            return Object(t.a)(this, void 0, void 0, function* () {
              return this.databaseService.getFilter(u.a.Coverage);
            });
          }
          changeCoverageDocument(e) {
            return Object(t.a)(this, void 0, void 0, function* () {
              const n = yield this.getCoverageFilter();
              this.databaseService.filters.update(n.id, {
                value: e,
                enabled: e ? 1 : 0
              });
            });
          }
          checkCoverage(e) {
            (this.checkingCoverage = !this.checkingCoverage),
              this.changeCoverageDocument(
                this.checkingCoverage && e.length ? JSON.stringify(e) : ''
              );
          }
          updateFilter(e) {
            return Object(t.a)(this, void 0, void 0, function* () {
              this.databaseService.filters.update(e.id, { enabled: e.enabled });
            });
          }
          updateFilters(e) {
            return Object(t.a)(this, void 0, void 0, function* () {
              return yield this.databaseService.filters.bulkPut(e), e;
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(N.Ub(l.a));
          }),
          (e.ɵprov = N.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    },
    kmnG: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return W;
      }),
        r.d(n, 'b', function () {
          return X;
        }),
        r.d(n, 'c', function () {
          return D;
        }),
        r.d(n, 'd', function () {
          return Y;
        }),
        r.d(n, 'e', function () {
          return T;
        });
      var t = r('GU7r'),
        a = r('ofXK'),
        m = r('fXoL'),
        o = r('FKr1'),
        i = r('8LU1'),
        u = r('XNiG'),
        b = r('VRyK'),
        y = r('xgIS'),
        s = r('JX91'),
        N = r('1G5W'),
        l = r('IzEk'),
        p = r('R0Ic'),
        d = r('R1ws'),
        c = r('cH1L'),
        h = r('nLfN');
      const f = ['underline'],
        g = ['connectionContainer'],
        v = ['inputContainer'],
        I = ['label'];
      function k(e, n) {
        1 & e &&
          (m.Ob(0),
          m.Qb(1, 'div', 14),
          m.Lb(2, 'div', 15),
          m.Lb(3, 'div', 16),
          m.Lb(4, 'div', 17),
          m.Pb(),
          m.Qb(5, 'div', 18),
          m.Lb(6, 'div', 15),
          m.Lb(7, 'div', 16),
          m.Lb(8, 'div', 17),
          m.Pb(),
          m.Nb());
      }
      function x(e, n) {
        1 & e && (m.Qb(0, 'div', 19), m.gc(1, 1), m.Pb());
      }
      function C(e, n) {
        if (
          (1 & e &&
            (m.Ob(0), m.gc(1, 2), m.Qb(2, 'span'), m.Ac(3), m.Pb(), m.Nb()),
          2 & e)
        ) {
          const e = m.bc(2);
          m.zb(3), m.Bc(e._control.placeholder);
        }
      }
      function G(e, n) {
        1 & e && m.gc(0, 3, ['*ngSwitchCase', 'true']);
      }
      function _(e, n) {
        1 & e && (m.Qb(0, 'span', 23), m.Ac(1, ' *'), m.Pb());
      }
      function w(e, n) {
        if (1 & e) {
          const e = m.Rb();
          m.Qb(0, 'label', 20, 21),
            m.Xb('cdkObserveContent', function () {
              return m.qc(e), m.bc().updateOutlineGap();
            }),
            m.zc(2, C, 4, 1, 'ng-container', 12),
            m.zc(3, G, 1, 0, 'ng-content', 12),
            m.zc(4, _, 2, 0, 'span', 22),
            m.Pb();
        }
        if (2 & e) {
          const e = m.bc();
          m.Cb('mat-empty', e._control.empty && !e._shouldAlwaysFloat())(
            'mat-form-field-empty',
            e._control.empty && !e._shouldAlwaysFloat()
          )('mat-accent', 'accent' == e.color)('mat-warn', 'warn' == e.color),
            m.ic('cdkObserveContentDisabled', 'outline' != e.appearance)(
              'id',
              e._labelId
            )('ngSwitch', e._hasLabel()),
            m.Ab('for', e._control.id)('aria-owns', e._control.id),
            m.zb(2),
            m.ic('ngSwitchCase', !1),
            m.zb(1),
            m.ic('ngSwitchCase', !0),
            m.zb(1),
            m.ic(
              'ngIf',
              !e.hideRequiredMarker &&
                e._control.required &&
                !e._control.disabled
            );
        }
      }
      function V(e, n) {
        1 & e && (m.Qb(0, 'div', 24), m.gc(1, 4), m.Pb());
      }
      function S(e, n) {
        if (
          (1 & e && (m.Qb(0, 'div', 25, 26), m.Lb(2, 'span', 27), m.Pb()),
          2 & e)
        ) {
          const e = m.bc();
          m.zb(2),
            m.Cb('mat-accent', 'accent' == e.color)(
              'mat-warn',
              'warn' == e.color
            );
        }
      }
      function A(e, n) {
        if ((1 & e && (m.Qb(0, 'div'), m.gc(1, 5), m.Pb()), 2 & e)) {
          const e = m.bc();
          m.ic('@transitionMessages', e._subscriptAnimationState);
        }
      }
      function R(e, n) {
        if ((1 & e && (m.Qb(0, 'div', 31), m.Ac(1), m.Pb()), 2 & e)) {
          const e = m.bc(2);
          m.ic('id', e._hintLabelId), m.zb(1), m.Bc(e.hintLabel);
        }
      }
      function O(e, n) {
        if (
          (1 & e &&
            (m.Qb(0, 'div', 28),
            m.zc(1, R, 2, 2, 'div', 29),
            m.gc(2, 6),
            m.Lb(3, 'div', 30),
            m.gc(4, 7),
            m.Pb()),
          2 & e)
        ) {
          const e = m.bc();
          m.ic('@transitionMessages', e._subscriptAnimationState),
            m.zb(1),
            m.ic('ngIf', e.hintLabel);
        }
      }
      const E = [
          '*',
          [['', 'matPrefix', '']],
          [['mat-placeholder']],
          [['mat-label']],
          [['', 'matSuffix', '']],
          [['mat-error']],
          [['mat-hint', 3, 'align', 'end']],
          [['mat-hint', 'align', 'end']]
        ],
        P = [
          '*',
          '[matPrefix]',
          'mat-placeholder',
          'mat-label',
          '[matSuffix]',
          'mat-error',
          "mat-hint:not([align='end'])",
          "mat-hint[align='end']"
        ],
        F = new m.q('MatError'),
        j = {
          transitionMessages: Object(p.l)('transitionMessages', [
            Object(p.i)(
              'enter',
              Object(p.j)({ opacity: 1, transform: 'translateY(0%)' })
            ),
            Object(p.k)('void => enter', [
              Object(p.j)({ opacity: 0, transform: 'translateY(-100%)' }),
              Object(p.e)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')
            ])
          ])
        };
      let D = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵdir = m.Fb({ type: e })),
          e
        );
      })();
      const L = new m.q('MatHint');
      let T = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵdir = m.Fb({ type: e, selectors: [['mat-label']] })),
            e
          );
        })(),
        z = (() => {
          class e {}
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵdir = m.Fb({ type: e, selectors: [['mat-placeholder']] })),
            e
          );
        })();
      const K = new m.q('MatPrefix'),
        M = new m.q('MatSuffix');
      let B = 0;
      class q {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const U = Object(o.r)(q, 'primary'),
        H = new m.q('MAT_FORM_FIELD_DEFAULT_OPTIONS'),
        W = new m.q('MatFormField');
      let X = (() => {
          class e extends U {
            constructor(e, n, r, t, a, m, o, i) {
              super(e),
                (this._elementRef = e),
                (this._changeDetectorRef = n),
                (this._dir = t),
                (this._defaults = a),
                (this._platform = m),
                (this._ngZone = o),
                (this._outlineGapCalculationNeededImmediately = !1),
                (this._outlineGapCalculationNeededOnStable = !1),
                (this._destroyed = new u.a()),
                (this._showAlwaysAnimate = !1),
                (this._subscriptAnimationState = ''),
                (this._hintLabel = ''),
                (this._hintLabelId = 'mat-hint-' + B++),
                (this._labelId = 'mat-form-field-label-' + B++),
                (this.floatLabel = this._getDefaultFloatLabelState()),
                (this._animationsEnabled = 'NoopAnimations' !== i),
                (this.appearance = a && a.appearance ? a.appearance : 'legacy'),
                (this._hideRequiredMarker =
                  !(!a || null == a.hideRequiredMarker) &&
                  a.hideRequiredMarker);
            }
            get appearance() {
              return this._appearance;
            }
            set appearance(e) {
              const n = this._appearance;
              (this._appearance =
                e || (this._defaults && this._defaults.appearance) || 'legacy'),
                'outline' === this._appearance &&
                  n !== e &&
                  (this._outlineGapCalculationNeededOnStable = !0);
            }
            get hideRequiredMarker() {
              return this._hideRequiredMarker;
            }
            set hideRequiredMarker(e) {
              this._hideRequiredMarker = Object(i.b)(e);
            }
            _shouldAlwaysFloat() {
              return 'always' === this.floatLabel && !this._showAlwaysAnimate;
            }
            _canLabelFloat() {
              return 'never' !== this.floatLabel;
            }
            get hintLabel() {
              return this._hintLabel;
            }
            set hintLabel(e) {
              (this._hintLabel = e), this._processHints();
            }
            get floatLabel() {
              return 'legacy' !== this.appearance &&
                'never' === this._floatLabel
                ? 'auto'
                : this._floatLabel;
            }
            set floatLabel(e) {
              e !== this._floatLabel &&
                ((this._floatLabel = e || this._getDefaultFloatLabelState()),
                this._changeDetectorRef.markForCheck());
            }
            get _control() {
              return (
                this._explicitFormFieldControl ||
                this._controlNonStatic ||
                this._controlStatic
              );
            }
            set _control(e) {
              this._explicitFormFieldControl = e;
            }
            getLabelId() {
              return this._hasFloatingLabel() ? this._labelId : null;
            }
            getConnectedOverlayOrigin() {
              return this._connectionContainerRef || this._elementRef;
            }
            ngAfterContentInit() {
              this._validateControlChild();
              const e = this._control;
              e.controlType &&
                this._elementRef.nativeElement.classList.add(
                  'mat-form-field-type-' + e.controlType
                ),
                e.stateChanges.pipe(Object(s.a)(null)).subscribe(() => {
                  this._validatePlaceholders(),
                    this._syncDescribedByIds(),
                    this._changeDetectorRef.markForCheck();
                }),
                e.ngControl &&
                  e.ngControl.valueChanges &&
                  e.ngControl.valueChanges
                    .pipe(Object(N.a)(this._destroyed))
                    .subscribe(() => this._changeDetectorRef.markForCheck()),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable
                    .pipe(Object(N.a)(this._destroyed))
                    .subscribe(() => {
                      this._outlineGapCalculationNeededOnStable &&
                        this.updateOutlineGap();
                    });
                }),
                Object(b.a)(
                  this._prefixChildren.changes,
                  this._suffixChildren.changes
                ).subscribe(() => {
                  (this._outlineGapCalculationNeededOnStable = !0),
                    this._changeDetectorRef.markForCheck();
                }),
                this._hintChildren.changes
                  .pipe(Object(s.a)(null))
                  .subscribe(() => {
                    this._processHints(),
                      this._changeDetectorRef.markForCheck();
                  }),
                this._errorChildren.changes
                  .pipe(Object(s.a)(null))
                  .subscribe(() => {
                    this._syncDescribedByIds(),
                      this._changeDetectorRef.markForCheck();
                  }),
                this._dir &&
                  this._dir.change
                    .pipe(Object(N.a)(this._destroyed))
                    .subscribe(() => {
                      'function' == typeof requestAnimationFrame
                        ? this._ngZone.runOutsideAngular(() => {
                            requestAnimationFrame(() =>
                              this.updateOutlineGap()
                            );
                          })
                        : this.updateOutlineGap();
                    });
            }
            ngAfterContentChecked() {
              this._validateControlChild(),
                this._outlineGapCalculationNeededImmediately &&
                  this.updateOutlineGap();
            }
            ngAfterViewInit() {
              (this._subscriptAnimationState = 'enter'),
                this._changeDetectorRef.detectChanges();
            }
            ngOnDestroy() {
              this._destroyed.next(), this._destroyed.complete();
            }
            _shouldForward(e) {
              const n = this._control ? this._control.ngControl : null;
              return n && n[e];
            }
            _hasPlaceholder() {
              return !!(
                (this._control && this._control.placeholder) ||
                this._placeholderChild
              );
            }
            _hasLabel() {
              return !(!this._labelChildNonStatic && !this._labelChildStatic);
            }
            _shouldLabelFloat() {
              return (
                this._canLabelFloat() &&
                ((this._control && this._control.shouldLabelFloat) ||
                  this._shouldAlwaysFloat())
              );
            }
            _hideControlPlaceholder() {
              return (
                ('legacy' === this.appearance && !this._hasLabel()) ||
                (this._hasLabel() && !this._shouldLabelFloat())
              );
            }
            _hasFloatingLabel() {
              return (
                this._hasLabel() ||
                ('legacy' === this.appearance && this._hasPlaceholder())
              );
            }
            _getDisplayedMessages() {
              return this._errorChildren &&
                this._errorChildren.length > 0 &&
                this._control.errorState
                ? 'error'
                : 'hint';
            }
            _animateAndLockLabel() {
              this._hasFloatingLabel() &&
                this._canLabelFloat() &&
                (this._animationsEnabled &&
                  this._label &&
                  ((this._showAlwaysAnimate = !0),
                  Object(y.a)(this._label.nativeElement, 'transitionend')
                    .pipe(Object(l.a)(1))
                    .subscribe(() => {
                      this._showAlwaysAnimate = !1;
                    })),
                (this.floatLabel = 'always'),
                this._changeDetectorRef.markForCheck());
            }
            _validatePlaceholders() {}
            _processHints() {
              this._validateHints(), this._syncDescribedByIds();
            }
            _validateHints() {}
            _getDefaultFloatLabelState() {
              return (this._defaults && this._defaults.floatLabel) || 'auto';
            }
            _syncDescribedByIds() {
              if (this._control) {
                let e = [];
                if (
                  (this._control.userAriaDescribedBy &&
                    'string' == typeof this._control.userAriaDescribedBy &&
                    e.push(...this._control.userAriaDescribedBy.split(' ')),
                  'hint' === this._getDisplayedMessages())
                ) {
                  const n = this._hintChildren
                      ? this._hintChildren.find((e) => 'start' === e.align)
                      : null,
                    r = this._hintChildren
                      ? this._hintChildren.find((e) => 'end' === e.align)
                      : null;
                  n
                    ? e.push(n.id)
                    : this._hintLabel && e.push(this._hintLabelId),
                    r && e.push(r.id);
                } else
                  this._errorChildren &&
                    e.push(...this._errorChildren.map((e) => e.id));
                this._control.setDescribedByIds(e);
              }
            }
            _validateControlChild() {}
            updateOutlineGap() {
              const e = this._label ? this._label.nativeElement : null;
              if (
                'outline' !== this.appearance ||
                !e ||
                !e.children.length ||
                !e.textContent.trim()
              )
                return;
              if (!this._platform.isBrowser) return;
              if (!this._isAttachedToDOM())
                return void (this._outlineGapCalculationNeededImmediately = !0);
              let n = 0,
                r = 0;
              const t = this._connectionContainerRef.nativeElement,
                a = t.querySelectorAll('.mat-form-field-outline-start'),
                m = t.querySelectorAll('.mat-form-field-outline-gap');
              if (this._label && this._label.nativeElement.children.length) {
                const a = t.getBoundingClientRect();
                if (0 === a.width && 0 === a.height)
                  return (
                    (this._outlineGapCalculationNeededOnStable = !0),
                    void (this._outlineGapCalculationNeededImmediately = !1)
                  );
                const m = this._getStartEnd(a),
                  o = e.children,
                  i = this._getStartEnd(o[0].getBoundingClientRect());
                let u = 0;
                for (let e = 0; e < o.length; e++) u += o[e].offsetWidth;
                (n = Math.abs(i - m) - 5), (r = u > 0 ? 0.75 * u + 10 : 0);
              }
              for (let o = 0; o < a.length; o++) a[o].style.width = n + 'px';
              for (let o = 0; o < m.length; o++) m[o].style.width = r + 'px';
              this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1;
            }
            _getStartEnd(e) {
              return this._dir && 'rtl' === this._dir.value ? e.right : e.left;
            }
            _isAttachedToDOM() {
              const e = this._elementRef.nativeElement;
              if (e.getRootNode) {
                const n = e.getRootNode();
                return n && n !== e;
              }
              return document.documentElement.contains(e);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(
                m.Kb(m.l),
                m.Kb(m.h),
                m.Kb(m.l),
                m.Kb(c.b, 8),
                m.Kb(H, 8),
                m.Kb(h.a),
                m.Kb(m.z),
                m.Kb(d.a, 8)
              );
            }),
            (e.ɵcmp = m.Eb({
              type: e,
              selectors: [['mat-form-field']],
              contentQueries: function (e, n, r) {
                if (
                  (1 & e &&
                    (m.Db(r, D, !0),
                    m.uc(r, D, !0),
                    m.Db(r, T, !0),
                    m.uc(r, T, !0),
                    m.Db(r, z, !0),
                    m.Db(r, F, !0),
                    m.Db(r, L, !0),
                    m.Db(r, K, !0),
                    m.Db(r, M, !0)),
                  2 & e)
                ) {
                  let e;
                  m.nc((e = m.Yb())) && (n._controlNonStatic = e.first),
                    m.nc((e = m.Yb())) && (n._controlStatic = e.first),
                    m.nc((e = m.Yb())) && (n._labelChildNonStatic = e.first),
                    m.nc((e = m.Yb())) && (n._labelChildStatic = e.first),
                    m.nc((e = m.Yb())) && (n._placeholderChild = e.first),
                    m.nc((e = m.Yb())) && (n._errorChildren = e),
                    m.nc((e = m.Yb())) && (n._hintChildren = e),
                    m.nc((e = m.Yb())) && (n._prefixChildren = e),
                    m.nc((e = m.Yb())) && (n._suffixChildren = e);
                }
              },
              viewQuery: function (e, n) {
                if (
                  (1 & e &&
                    (m.Ec(f, !0), m.vc(g, !0), m.Ec(v, !0), m.Ec(I, !0)),
                  2 & e)
                ) {
                  let e;
                  m.nc((e = m.Yb())) && (n.underlineRef = e.first),
                    m.nc((e = m.Yb())) && (n._connectionContainerRef = e.first),
                    m.nc((e = m.Yb())) && (n._inputContainerRef = e.first),
                    m.nc((e = m.Yb())) && (n._label = e.first);
                }
              },
              hostAttrs: [1, 'mat-form-field'],
              hostVars: 44,
              hostBindings: function (e, n) {
                2 & e &&
                  m.Cb(
                    'mat-form-field-appearance-standard',
                    'standard' == n.appearance
                  )('mat-form-field-appearance-fill', 'fill' == n.appearance)(
                    'mat-form-field-appearance-outline',
                    'outline' == n.appearance
                  )(
                    'mat-form-field-appearance-legacy',
                    'legacy' == n.appearance
                  )('mat-form-field-invalid', n._control.errorState)(
                    'mat-form-field-can-float',
                    n._canLabelFloat()
                  )('mat-form-field-should-float', n._shouldLabelFloat())(
                    'mat-form-field-has-label',
                    n._hasFloatingLabel()
                  )(
                    'mat-form-field-hide-placeholder',
                    n._hideControlPlaceholder()
                  )('mat-form-field-disabled', n._control.disabled)(
                    'mat-form-field-autofilled',
                    n._control.autofilled
                  )('mat-focused', n._control.focused)(
                    'mat-accent',
                    'accent' == n.color
                  )('mat-warn', 'warn' == n.color)(
                    'ng-untouched',
                    n._shouldForward('untouched')
                  )('ng-touched', n._shouldForward('touched'))(
                    'ng-pristine',
                    n._shouldForward('pristine')
                  )('ng-dirty', n._shouldForward('dirty'))(
                    'ng-valid',
                    n._shouldForward('valid')
                  )('ng-invalid', n._shouldForward('invalid'))(
                    'ng-pending',
                    n._shouldForward('pending')
                  )('_mat-animation-noopable', !n._animationsEnabled);
              },
              inputs: {
                color: 'color',
                floatLabel: 'floatLabel',
                appearance: 'appearance',
                hideRequiredMarker: 'hideRequiredMarker',
                hintLabel: 'hintLabel'
              },
              exportAs: ['matFormField'],
              features: [m.yb([{ provide: W, useExisting: e }]), m.wb],
              ngContentSelectors: P,
              decls: 15,
              vars: 8,
              consts: [
                [1, 'mat-form-field-wrapper'],
                [1, 'mat-form-field-flex', 3, 'click'],
                ['connectionContainer', ''],
                [4, 'ngIf'],
                ['class', 'mat-form-field-prefix', 4, 'ngIf'],
                [1, 'mat-form-field-infix'],
                ['inputContainer', ''],
                [1, 'mat-form-field-label-wrapper'],
                [
                  'class',
                  'mat-form-field-label',
                  3,
                  'cdkObserveContentDisabled',
                  'id',
                  'mat-empty',
                  'mat-form-field-empty',
                  'mat-accent',
                  'mat-warn',
                  'ngSwitch',
                  'cdkObserveContent',
                  4,
                  'ngIf'
                ],
                ['class', 'mat-form-field-suffix', 4, 'ngIf'],
                ['class', 'mat-form-field-underline', 4, 'ngIf'],
                [1, 'mat-form-field-subscript-wrapper', 3, 'ngSwitch'],
                [4, 'ngSwitchCase'],
                ['class', 'mat-form-field-hint-wrapper', 4, 'ngSwitchCase'],
                [1, 'mat-form-field-outline'],
                [1, 'mat-form-field-outline-start'],
                [1, 'mat-form-field-outline-gap'],
                [1, 'mat-form-field-outline-end'],
                [1, 'mat-form-field-outline', 'mat-form-field-outline-thick'],
                [1, 'mat-form-field-prefix'],
                [
                  1,
                  'mat-form-field-label',
                  3,
                  'cdkObserveContentDisabled',
                  'id',
                  'ngSwitch',
                  'cdkObserveContent'
                ],
                ['label', ''],
                [
                  'class',
                  'mat-placeholder-required mat-form-field-required-marker',
                  'aria-hidden',
                  'true',
                  4,
                  'ngIf'
                ],
                [
                  'aria-hidden',
                  'true',
                  1,
                  'mat-placeholder-required',
                  'mat-form-field-required-marker'
                ],
                [1, 'mat-form-field-suffix'],
                [1, 'mat-form-field-underline'],
                ['underline', ''],
                [1, 'mat-form-field-ripple'],
                [1, 'mat-form-field-hint-wrapper'],
                ['class', 'mat-hint', 3, 'id', 4, 'ngIf'],
                [1, 'mat-form-field-hint-spacer'],
                [1, 'mat-hint', 3, 'id']
              ],
              template: function (e, n) {
                1 & e &&
                  (m.hc(E),
                  m.Qb(0, 'div', 0),
                  m.Qb(1, 'div', 1, 2),
                  m.Xb('click', function (e) {
                    return (
                      n._control.onContainerClick &&
                      n._control.onContainerClick(e)
                    );
                  }),
                  m.zc(3, k, 9, 0, 'ng-container', 3),
                  m.zc(4, x, 2, 0, 'div', 4),
                  m.Qb(5, 'div', 5, 6),
                  m.gc(7),
                  m.Qb(8, 'span', 7),
                  m.zc(9, w, 5, 16, 'label', 8),
                  m.Pb(),
                  m.Pb(),
                  m.zc(10, V, 2, 0, 'div', 9),
                  m.Pb(),
                  m.zc(11, S, 3, 4, 'div', 10),
                  m.Qb(12, 'div', 11),
                  m.zc(13, A, 2, 1, 'div', 12),
                  m.zc(14, O, 5, 2, 'div', 13),
                  m.Pb(),
                  m.Pb()),
                  2 & e &&
                    (m.zb(3),
                    m.ic('ngIf', 'outline' == n.appearance),
                    m.zb(1),
                    m.ic('ngIf', n._prefixChildren.length),
                    m.zb(5),
                    m.ic('ngIf', n._hasFloatingLabel()),
                    m.zb(1),
                    m.ic('ngIf', n._suffixChildren.length),
                    m.zb(1),
                    m.ic('ngIf', 'outline' != n.appearance),
                    m.zb(1),
                    m.ic('ngSwitch', n._getDisplayedMessages()),
                    m.zb(1),
                    m.ic('ngSwitchCase', 'error'),
                    m.zb(1),
                    m.ic('ngSwitchCase', 'hint'));
              },
              directives: [a.m, a.n, a.o, t.a],
              styles: [
                '.mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n',
                '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n',
                '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n',
                '.mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n',
                '.mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n',
                '.mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n'
              ],
              encapsulation: 2,
              data: { animation: [j.transitionMessages] },
              changeDetection: 0
            })),
            e
          );
        })(),
        Y = (() => {
          class e {}
          return (
            (e.ɵmod = m.Ib({ type: e })),
            (e.ɵinj = m.Hb({
              factory: function (n) {
                return new (n || e)();
              },
              imports: [[a.c, o.e, t.c], o.e]
            })),
            e
          );
        })();
    },
    mrSG: function (e, n, r) {
      'use strict';
      function t(e, n, r, t) {
        var a,
          m = arguments.length,
          o =
            m < 3
              ? n
              : null === t
              ? (t = Object.getOwnPropertyDescriptor(n, r))
              : t;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          o = Reflect.decorate(e, n, r, t);
        else
          for (var i = e.length - 1; i >= 0; i--)
            (a = e[i]) &&
              (o = (m < 3 ? a(o) : m > 3 ? a(n, r, o) : a(n, r)) || o);
        return m > 3 && o && Object.defineProperty(n, r, o), o;
      }
      function a(e, n) {
        return function (r, t) {
          n(r, t, e);
        };
      }
      function m(e, n, r, t) {
        return new (r || (r = Promise))(function (a, m) {
          function o(e) {
            try {
              u(t.next(e));
            } catch (n) {
              m(n);
            }
          }
          function i(e) {
            try {
              u(t.throw(e));
            } catch (n) {
              m(n);
            }
          }
          function u(e) {
            var n;
            e.done
              ? a(e.value)
              : ((n = e.value),
                n instanceof r
                  ? n
                  : new r(function (e) {
                      e(n);
                    })).then(o, i);
          }
          u((t = t.apply(e, n || [])).next());
        });
      }
      r.d(n, 'b', function () {
        return t;
      }),
        r.d(n, 'c', function () {
          return a;
        }),
        r.d(n, 'a', function () {
          return m;
        });
    },
    nRuA: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return m;
      });
      var t = r('fXoL'),
        a = r('zsLg');
      let m = (() => {
        class e {
          constructor(e) {
            this.pokemonImageService = e;
          }
          transform(e) {
            return e && 'Empty-Team Member' !== e
              ? `assets/pokemon/${this.pokemonImageService.transform(e)}.png`
              : '';
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Kb(a.a));
          }),
          (e.ɵpipe = t.Jb({ name: 'image', type: e, pure: !0 })),
          e
        );
      })();
    },
    qFsG: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return g;
      }),
        r.d(n, 'b', function () {
          return v;
        });
      var t = r('nLfN'),
        a = r('fXoL'),
        m = r('8LU1'),
        o = r('EY2u'),
        i = r('XNiG');
      r('xgIS'), r('3UWI'), r('1G5W'), r('ofXK');
      const u = Object(t.f)({ passive: !0 });
      let b = (() => {
          class e {
            constructor(e, n) {
              (this._platform = e),
                (this._ngZone = n),
                (this._monitoredElements = new Map());
            }
            monitor(e) {
              if (!this._platform.isBrowser) return o.a;
              const n = Object(m.d)(e),
                r = this._monitoredElements.get(n);
              if (r) return r.subject;
              const t = new i.a(),
                a = 'cdk-text-field-autofilled',
                b = (e) => {
                  'cdk-text-field-autofill-start' !== e.animationName ||
                  n.classList.contains(a)
                    ? 'cdk-text-field-autofill-end' === e.animationName &&
                      n.classList.contains(a) &&
                      (n.classList.remove(a),
                      this._ngZone.run(() =>
                        t.next({ target: e.target, isAutofilled: !1 })
                      ))
                    : (n.classList.add(a),
                      this._ngZone.run(() =>
                        t.next({ target: e.target, isAutofilled: !0 })
                      ));
                };
              return (
                this._ngZone.runOutsideAngular(() => {
                  n.addEventListener('animationstart', b, u),
                    n.classList.add('cdk-text-field-autofill-monitored');
                }),
                this._monitoredElements.set(n, {
                  subject: t,
                  unlisten: () => {
                    n.removeEventListener('animationstart', b, u);
                  }
                }),
                t
              );
            }
            stopMonitoring(e) {
              const n = Object(m.d)(e),
                r = this._monitoredElements.get(n);
              r &&
                (r.unlisten(),
                r.subject.complete(),
                n.classList.remove('cdk-text-field-autofill-monitored'),
                n.classList.remove('cdk-text-field-autofilled'),
                this._monitoredElements.delete(n));
            }
            ngOnDestroy() {
              this._monitoredElements.forEach((e, n) => this.stopMonitoring(n));
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(a.Ub(t.a), a.Ub(a.z));
            }),
            (e.ɵprov = Object(a.Gb)({
              factory: function () {
                return new e(Object(a.Ub)(t.a), Object(a.Ub)(a.z));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        y = (() => {
          class e {}
          return (
            (e.ɵmod = a.Ib({ type: e })),
            (e.ɵinj = a.Hb({
              factory: function (n) {
                return new (n || e)();
              },
              imports: [[t.b]]
            })),
            e
          );
        })();
      var s = r('FKr1'),
        N = r('kmnG'),
        l = r('3Pt+');
      const p = new a.q('MAT_INPUT_VALUE_ACCESSOR'),
        d = [
          'button',
          'checkbox',
          'file',
          'hidden',
          'image',
          'radio',
          'range',
          'reset',
          'submit'
        ];
      let c = 0;
      class h {
        constructor(e, n, r, t) {
          (this._defaultErrorStateMatcher = e),
            (this._parentForm = n),
            (this._parentFormGroup = r),
            (this.ngControl = t);
        }
      }
      const f = Object(s.u)(h);
      let g = (() => {
          class e extends f {
            constructor(e, n, r, a, m, o, u, b, y, s) {
              super(o, a, m, r),
                (this._elementRef = e),
                (this._platform = n),
                (this.ngControl = r),
                (this._autofillMonitor = b),
                (this._formField = s),
                (this._uid = 'mat-input-' + c++),
                (this.focused = !1),
                (this.stateChanges = new i.a()),
                (this.controlType = 'mat-input'),
                (this.autofilled = !1),
                (this._disabled = !1),
                (this._required = !1),
                (this._type = 'text'),
                (this._readonly = !1),
                (this._neverEmptyInputTypes = [
                  'date',
                  'datetime',
                  'datetime-local',
                  'month',
                  'time',
                  'week'
                ].filter((e) => Object(t.e)().has(e)));
              const N = this._elementRef.nativeElement,
                l = N.nodeName.toLowerCase();
              (this._inputValueAccessor = u || N),
                (this._previousNativeValue = this.value),
                (this.id = this.id),
                n.IOS &&
                  y.runOutsideAngular(() => {
                    e.nativeElement.addEventListener('keyup', (e) => {
                      let n = e.target;
                      n.value ||
                        n.selectionStart ||
                        n.selectionEnd ||
                        (n.setSelectionRange(1, 1), n.setSelectionRange(0, 0));
                    });
                  }),
                (this._isServer = !this._platform.isBrowser),
                (this._isNativeSelect = 'select' === l),
                (this._isTextarea = 'textarea' === l),
                this._isNativeSelect &&
                  (this.controlType = N.multiple
                    ? 'mat-native-select-multiple'
                    : 'mat-native-select');
            }
            get disabled() {
              return this.ngControl && null !== this.ngControl.disabled
                ? this.ngControl.disabled
                : this._disabled;
            }
            set disabled(e) {
              (this._disabled = Object(m.b)(e)),
                this.focused && ((this.focused = !1), this.stateChanges.next());
            }
            get id() {
              return this._id;
            }
            set id(e) {
              this._id = e || this._uid;
            }
            get required() {
              return this._required;
            }
            set required(e) {
              this._required = Object(m.b)(e);
            }
            get type() {
              return this._type;
            }
            set type(e) {
              (this._type = e || 'text'),
                this._validateType(),
                !this._isTextarea &&
                  Object(t.e)().has(this._type) &&
                  (this._elementRef.nativeElement.type = this._type);
            }
            get value() {
              return this._inputValueAccessor.value;
            }
            set value(e) {
              e !== this.value &&
                ((this._inputValueAccessor.value = e),
                this.stateChanges.next());
            }
            get readonly() {
              return this._readonly;
            }
            set readonly(e) {
              this._readonly = Object(m.b)(e);
            }
            ngAfterViewInit() {
              this._platform.isBrowser &&
                this._autofillMonitor
                  .monitor(this._elementRef.nativeElement)
                  .subscribe((e) => {
                    (this.autofilled = e.isAutofilled),
                      this.stateChanges.next();
                  });
            }
            ngOnChanges() {
              this.stateChanges.next();
            }
            ngOnDestroy() {
              this.stateChanges.complete(),
                this._platform.isBrowser &&
                  this._autofillMonitor.stopMonitoring(
                    this._elementRef.nativeElement
                  );
            }
            ngDoCheck() {
              this.ngControl && this.updateErrorState(),
                this._dirtyCheckNativeValue(),
                this._dirtyCheckPlaceholder();
            }
            focus(e) {
              this._elementRef.nativeElement.focus(e);
            }
            _focusChanged(e) {
              e === this.focused ||
                (this.readonly && e) ||
                ((this.focused = e), this.stateChanges.next());
            }
            _onInput() {}
            _dirtyCheckPlaceholder() {
              var e, n;
              const r = (
                null ===
                  (n =
                    null === (e = this._formField) || void 0 === e
                      ? void 0
                      : e._hideControlPlaceholder) || void 0 === n
                  ? void 0
                  : n.call(e)
              )
                ? null
                : this.placeholder;
              if (r !== this._previousPlaceholder) {
                const e = this._elementRef.nativeElement;
                (this._previousPlaceholder = r),
                  r
                    ? e.setAttribute('placeholder', r)
                    : e.removeAttribute('placeholder');
              }
            }
            _dirtyCheckNativeValue() {
              const e = this._elementRef.nativeElement.value;
              this._previousNativeValue !== e &&
                ((this._previousNativeValue = e), this.stateChanges.next());
            }
            _validateType() {
              d.indexOf(this._type);
            }
            _isNeverEmpty() {
              return this._neverEmptyInputTypes.indexOf(this._type) > -1;
            }
            _isBadInput() {
              let e = this._elementRef.nativeElement.validity;
              return e && e.badInput;
            }
            get empty() {
              return !(
                this._isNeverEmpty() ||
                this._elementRef.nativeElement.value ||
                this._isBadInput() ||
                this.autofilled
              );
            }
            get shouldLabelFloat() {
              if (this._isNativeSelect) {
                const e = this._elementRef.nativeElement,
                  n = e.options[0];
                return (
                  this.focused ||
                  e.multiple ||
                  !this.empty ||
                  !!(e.selectedIndex > -1 && n && n.label)
                );
              }
              return this.focused || !this.empty;
            }
            setDescribedByIds(e) {
              e.length
                ? this._elementRef.nativeElement.setAttribute(
                    'aria-describedby',
                    e.join(' ')
                  )
                : this._elementRef.nativeElement.removeAttribute(
                    'aria-describedby'
                  );
            }
            onContainerClick() {
              this.focused || this.focus();
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(
                a.Kb(a.l),
                a.Kb(t.a),
                a.Kb(l.j, 10),
                a.Kb(l.m, 8),
                a.Kb(l.f, 8),
                a.Kb(s.a),
                a.Kb(p, 10),
                a.Kb(b),
                a.Kb(a.z),
                a.Kb(N.a, 8)
              );
            }),
            (e.ɵdir = a.Fb({
              type: e,
              selectors: [
                ['input', 'matInput', ''],
                ['textarea', 'matInput', ''],
                ['select', 'matNativeControl', ''],
                ['input', 'matNativeControl', ''],
                ['textarea', 'matNativeControl', '']
              ],
              hostAttrs: [
                1,
                'mat-input-element',
                'mat-form-field-autofill-control'
              ],
              hostVars: 9,
              hostBindings: function (e, n) {
                1 & e &&
                  a.Xb('focus', function () {
                    return n._focusChanged(!0);
                  })('blur', function () {
                    return n._focusChanged(!1);
                  })('input', function () {
                    return n._onInput();
                  }),
                  2 & e &&
                    (a.Tb('disabled', n.disabled)('required', n.required),
                    a.Ab('id', n.id)('data-placeholder', n.placeholder)(
                      'readonly',
                      (n.readonly && !n._isNativeSelect) || null
                    )('aria-invalid', n.errorState)(
                      'aria-required',
                      n.required.toString()
                    ),
                    a.Cb('mat-input-server', n._isServer));
              },
              inputs: {
                id: 'id',
                disabled: 'disabled',
                required: 'required',
                type: 'type',
                value: 'value',
                readonly: 'readonly',
                placeholder: 'placeholder',
                errorStateMatcher: 'errorStateMatcher',
                userAriaDescribedBy: ['aria-describedby', 'userAriaDescribedBy']
              },
              exportAs: ['matInput'],
              features: [a.yb([{ provide: N.c, useExisting: e }]), a.wb, a.xb]
            })),
            e
          );
        })(),
        v = (() => {
          class e {}
          return (
            (e.ɵmod = a.Ib({ type: e })),
            (e.ɵinj = a.Hb({
              factory: function (n) {
                return new (n || e)();
              },
              providers: [s.a],
              imports: [[y, N.d, s.e], y, N.d]
            })),
            e
          );
        })();
    },
    req1: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return a;
      }),
        r.d(n, 'c', function () {
          return m;
        }),
        r.d(n, 'b', function () {
          return o;
        });
      var t = r('fJC1'),
        a = (function (e) {
          return (
            (e[(e.Kanto = 0)] = 'Kanto'),
            (e[(e.Johto = 1)] = 'Johto'),
            (e[(e.Hoenn = 2)] = 'Hoenn'),
            (e[(e.Sinnoh = 3)] = 'Sinnoh'),
            (e[(e.UpdatedJohto = 4)] = 'UpdatedJohto'),
            (e[(e.ExtendedSinnoh = 5)] = 'ExtendedSinnoh'),
            (e[(e.Unova = 6)] = 'Unova'),
            (e[(e.UpdatedUnova = 7)] = 'UpdatedUnova'),
            (e[(e.Kalos = 8)] = 'Kalos'),
            (e[(e.UpdatedHoenn = 9)] = 'UpdatedHoenn'),
            (e[(e.Alola = 10)] = 'Alola'),
            (e[(e.UpdatedAlola = 11)] = 'UpdatedAlola'),
            (e[(e.Galar = 12)] = 'Galar'),
            (e[(e.National = 13)] = 'National'),
            e
          );
        })({});
      Object(t.a)(a), Object(t.b)(a);
      const m = (e) => {
          switch (e) {
            case 'Johto':
              return 'Johto (Gold, Silver, Crystal)';
            case 'Sinnoh':
              return 'Sinnoh (Diamond and Pearl)';
            case 'ExtendedSinnoh':
              return 'Sinnoh (Platinum)';
            case 'UpdatedJohto':
              return 'Johto (HeartGold and SoulSilver)';
            case 'UpdatedUnova':
              return 'Unova (Black 2 and White 2)';
            case 'Unova':
              return 'Unova (Black and White)';
            case 'UpdatedHoenn':
              return 'Hoenn (Omega Ruby and Alpha Sapphire)';
            case 'UpdatedAlola':
              return 'Alola (Ultra Sun and Ultra Moon)';
            default:
              return e;
          }
        },
        o = (e) => {
          switch (e) {
            case 'Alola (Ultra Sun and Ultra Moon)':
              return a.UpdatedAlola;
            case 'Hoenn (Omega Ruby and Alpha Sapphire)':
              return a.UpdatedHoenn;
            case 'Johto (Gold, Silver, Crystal)':
              return a.Johto;
            case 'Johto (HeartGold and SoulSilver)':
              return a.UpdatedJohto;
            case 'Sinnoh (Diamond and Pearl)':
              return a.Sinnoh;
            case 'Sinnoh (Platinum)':
              return a.ExtendedSinnoh;
            case 'Unova (Black 2 and White 2)':
              return a.UpdatedUnova;
            case 'Unova (Black and White)':
              return a.Unova;
            default:
              return a[e];
          }
        };
    },
    vZ4y: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return m;
      });
      var t = r('fXoL'),
        a = r('HN8I');
      let m = (() => {
        class e {
          constructor(e) {
            this.nameService = e;
          }
          transform(e) {
            return 'Empty Team Member' === e
              ? ''
              : this.nameService.transform(e);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(t.Kb(a.a));
          }),
          (e.ɵpipe = t.Jb({ name: 'hideForm', type: e, pure: !0 })),
          e
        );
      })();
    },
    xBi6: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return y;
      });
      var t = r('mrSG'),
        a = [
          {
            name: 'bulbasaur',
            pokedexNumbers: [
              { entryNumber: 80, name: 8 },
              { entryNumber: 231, name: 4 },
              { entryNumber: 226, name: 1 },
              { entryNumber: 1, name: 0 },
              { entryNumber: 1, name: 13 }
            ],
            evolutionChain: 1,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'ivysaur',
            pokedexNumbers: [
              { entryNumber: 81, name: 8 },
              { entryNumber: 232, name: 4 },
              { entryNumber: 227, name: 1 },
              { entryNumber: 2, name: 0 },
              { entryNumber: 2, name: 13 }
            ],
            evolutionChain: 1,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'venusaur',
            pokedexNumbers: [
              { entryNumber: 82, name: 8 },
              { entryNumber: 233, name: 4 },
              { entryNumber: 228, name: 1 },
              { entryNumber: 3, name: 0 },
              { entryNumber: 3, name: 13 }
            ],
            evolutionChain: 1,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'venusaur-mega',
            pokedexNumbers: [
              { entryNumber: 82, name: 8 },
              { entryNumber: 233, name: 4 },
              { entryNumber: 228, name: 1 },
              { entryNumber: 3, name: 0 },
              { entryNumber: 3, name: 13 }
            ],
            evolutionChain: 1,
            types: [5, 6],
            generation: 'Generation VII'
          },
          {
            name: 'charmander',
            pokedexNumbers: [
              { entryNumber: 83, name: 8 },
              { entryNumber: 234, name: 4 },
              { entryNumber: 229, name: 1 },
              { entryNumber: 4, name: 0 },
              { entryNumber: 4, name: 13 },
              { entryNumber: 378, name: 12 }
            ],
            evolutionChain: 2,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'charmeleon',
            pokedexNumbers: [
              { entryNumber: 84, name: 8 },
              { entryNumber: 235, name: 4 },
              { entryNumber: 230, name: 1 },
              { entryNumber: 5, name: 0 },
              { entryNumber: 5, name: 13 },
              { entryNumber: 379, name: 12 }
            ],
            evolutionChain: 2,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'charizard',
            pokedexNumbers: [
              { entryNumber: 85, name: 8 },
              { entryNumber: 236, name: 4 },
              { entryNumber: 231, name: 1 },
              { entryNumber: 6, name: 0 },
              { entryNumber: 6, name: 13 },
              { entryNumber: 380, name: 12 }
            ],
            evolutionChain: 2,
            types: [1, 4],
            generation: 'Generation I'
          },
          {
            name: 'charizard-mega-x',
            pokedexNumbers: [
              { entryNumber: 85, name: 8 },
              { entryNumber: 236, name: 4 },
              { entryNumber: 231, name: 1 },
              { entryNumber: 6, name: 0 },
              { entryNumber: 6, name: 13 }
            ],
            evolutionChain: 2,
            types: [1, 13],
            generation: 'Generation VII'
          },
          {
            name: 'charizard-mega-y',
            pokedexNumbers: [
              { entryNumber: 85, name: 8 },
              { entryNumber: 236, name: 4 },
              { entryNumber: 231, name: 1 },
              { entryNumber: 6, name: 0 },
              { entryNumber: 6, name: 13 }
            ],
            evolutionChain: 2,
            types: [1, 4],
            generation: 'Generation VII'
          },
          {
            name: 'squirtle',
            pokedexNumbers: [
              { entryNumber: 86, name: 8 },
              { entryNumber: 237, name: 4 },
              { entryNumber: 232, name: 1 },
              { entryNumber: 7, name: 0 },
              { entryNumber: 7, name: 13 }
            ],
            evolutionChain: 3,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'wartortle',
            pokedexNumbers: [
              { entryNumber: 87, name: 8 },
              { entryNumber: 238, name: 4 },
              { entryNumber: 233, name: 1 },
              { entryNumber: 8, name: 0 },
              { entryNumber: 8, name: 13 }
            ],
            evolutionChain: 3,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'blastoise',
            pokedexNumbers: [
              { entryNumber: 88, name: 8 },
              { entryNumber: 239, name: 4 },
              { entryNumber: 234, name: 1 },
              { entryNumber: 9, name: 0 },
              { entryNumber: 9, name: 13 }
            ],
            evolutionChain: 3,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'blastoise-mega',
            pokedexNumbers: [
              { entryNumber: 88, name: 8 },
              { entryNumber: 239, name: 4 },
              { entryNumber: 234, name: 1 },
              { entryNumber: 9, name: 0 },
              { entryNumber: 9, name: 13 }
            ],
            evolutionChain: 3,
            types: [3],
            generation: 'Generation VII'
          },
          {
            name: 'caterpie',
            pokedexNumbers: [
              { entryNumber: 23, name: 8 },
              { entryNumber: 24, name: 4 },
              { entryNumber: 24, name: 1 },
              { entryNumber: 10, name: 0 },
              { entryNumber: 10, name: 13 },
              { entryNumber: 17, name: 11 },
              { entryNumber: 17, name: 10 },
              { entryNumber: 13, name: 12 }
            ],
            evolutionChain: 4,
            types: [12],
            generation: 'Generation I'
          },
          {
            name: 'metapod',
            pokedexNumbers: [
              { entryNumber: 24, name: 8 },
              { entryNumber: 25, name: 4 },
              { entryNumber: 25, name: 1 },
              { entryNumber: 11, name: 0 },
              { entryNumber: 11, name: 13 },
              { entryNumber: 18, name: 11 },
              { entryNumber: 18, name: 10 },
              { entryNumber: 14, name: 12 }
            ],
            evolutionChain: 4,
            types: [12],
            generation: 'Generation I'
          },
          {
            name: 'butterfree',
            pokedexNumbers: [
              { entryNumber: 25, name: 8 },
              { entryNumber: 26, name: 4 },
              { entryNumber: 26, name: 1 },
              { entryNumber: 12, name: 0 },
              { entryNumber: 12, name: 13 },
              { entryNumber: 19, name: 11 },
              { entryNumber: 19, name: 10 },
              { entryNumber: 15, name: 12 }
            ],
            evolutionChain: 4,
            types: [12, 4],
            generation: 'Generation I'
          },
          {
            name: 'weedle',
            pokedexNumbers: [
              { entryNumber: 26, name: 8 },
              { entryNumber: 27, name: 4 },
              { entryNumber: 27, name: 1 },
              { entryNumber: 13, name: 0 },
              { entryNumber: 13, name: 13 }
            ],
            evolutionChain: 5,
            types: [12, 6],
            generation: 'Generation I'
          },
          {
            name: 'kakuna',
            pokedexNumbers: [
              { entryNumber: 27, name: 8 },
              { entryNumber: 28, name: 4 },
              { entryNumber: 28, name: 1 },
              { entryNumber: 14, name: 0 },
              { entryNumber: 14, name: 13 }
            ],
            evolutionChain: 5,
            types: [12, 6],
            generation: 'Generation I'
          },
          {
            name: 'beedrill',
            pokedexNumbers: [
              { entryNumber: 28, name: 8 },
              { entryNumber: 29, name: 4 },
              { entryNumber: 29, name: 1 },
              { entryNumber: 15, name: 0 },
              { entryNumber: 15, name: 13 }
            ],
            evolutionChain: 5,
            types: [12, 6],
            generation: 'Generation I'
          },
          {
            name: 'beedrill-mega',
            pokedexNumbers: [
              { entryNumber: 28, name: 8 },
              { entryNumber: 29, name: 4 },
              { entryNumber: 29, name: 1 },
              { entryNumber: 15, name: 0 },
              { entryNumber: 15, name: 13 }
            ],
            evolutionChain: 5,
            types: [12, 6],
            generation: 'Generation VII'
          },
          {
            name: 'pidgey',
            pokedexNumbers: [
              { entryNumber: 17, name: 8 },
              { entryNumber: 10, name: 4 },
              { entryNumber: 10, name: 1 },
              { entryNumber: 16, name: 0 },
              { entryNumber: 16, name: 13 }
            ],
            evolutionChain: 6,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'pidgeotto',
            pokedexNumbers: [
              { entryNumber: 18, name: 8 },
              { entryNumber: 11, name: 4 },
              { entryNumber: 11, name: 1 },
              { entryNumber: 17, name: 0 },
              { entryNumber: 17, name: 13 }
            ],
            evolutionChain: 6,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'pidgeot',
            pokedexNumbers: [
              { entryNumber: 19, name: 8 },
              { entryNumber: 12, name: 4 },
              { entryNumber: 12, name: 1 },
              { entryNumber: 18, name: 0 },
              { entryNumber: 18, name: 13 }
            ],
            evolutionChain: 6,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'pidgeot-mega',
            pokedexNumbers: [
              { entryNumber: 19, name: 8 },
              { entryNumber: 12, name: 4 },
              { entryNumber: 12, name: 1 },
              { entryNumber: 18, name: 0 },
              { entryNumber: 18, name: 13 }
            ],
            evolutionChain: 6,
            types: [0, 4],
            generation: 'Generation VII'
          },
          {
            name: 'rattata',
            pokedexNumbers: [
              { entryNumber: 59, name: 7 },
              { entryNumber: 17, name: 4 },
              { entryNumber: 17, name: 1 },
              { entryNumber: 19, name: 0 },
              { entryNumber: 19, name: 13 }
            ],
            evolutionChain: 7,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'rattata-alola',
            pokedexNumbers: [
              { entryNumber: 15, name: 10 },
              { entryNumber: 15, name: 11 },
              { entryNumber: 19, name: 13 }
            ],
            evolutionChain: 7,
            types: [15, 0],
            generation: 'Generation VII'
          },
          {
            name: 'raticate',
            pokedexNumbers: [
              { entryNumber: 60, name: 7 },
              { entryNumber: 18, name: 4 },
              { entryNumber: 18, name: 1 },
              { entryNumber: 20, name: 0 },
              { entryNumber: 20, name: 13 }
            ],
            evolutionChain: 7,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'raticate-alola',
            pokedexNumbers: [
              { entryNumber: 16, name: 10 },
              { entryNumber: 16, name: 11 },
              { entryNumber: 20, name: 13 }
            ],
            evolutionChain: 7,
            types: [15, 0],
            generation: 'Generation VII'
          },
          {
            name: 'spearow',
            pokedexNumbers: [
              { entryNumber: 412, name: 8 },
              { entryNumber: 13, name: 4 },
              { entryNumber: 13, name: 1 },
              { entryNumber: 21, name: 0 },
              { entryNumber: 21, name: 13 },
              { entryNumber: 87, name: 11 },
              { entryNumber: 73, name: 10 }
            ],
            evolutionChain: 8,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'fearow',
            pokedexNumbers: [
              { entryNumber: 413, name: 8 },
              { entryNumber: 14, name: 4 },
              { entryNumber: 14, name: 1 },
              { entryNumber: 22, name: 0 },
              { entryNumber: 22, name: 13 },
              { entryNumber: 88, name: 11 },
              { entryNumber: 74, name: 10 }
            ],
            evolutionChain: 8,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'ekans',
            pokedexNumbers: [
              { entryNumber: 340, name: 8 },
              { entryNumber: 50, name: 4 },
              { entryNumber: 50, name: 1 },
              { entryNumber: 23, name: 0 },
              { entryNumber: 23, name: 13 },
              { entryNumber: 61, name: 11 }
            ],
            evolutionChain: 9,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'arbok',
            pokedexNumbers: [
              { entryNumber: 341, name: 8 },
              { entryNumber: 51, name: 4 },
              { entryNumber: 51, name: 1 },
              { entryNumber: 24, name: 0 },
              { entryNumber: 24, name: 13 },
              { entryNumber: 62, name: 11 }
            ],
            evolutionChain: 9,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'pikachu',
            pokedexNumbers: [
              { entryNumber: 163, name: 9 },
              { entryNumber: 36, name: 8 },
              { entryNumber: 22, name: 4 },
              { entryNumber: 104, name: 5 },
              { entryNumber: 104, name: 3 },
              { entryNumber: 156, name: 2 },
              { entryNumber: 22, name: 1 },
              { entryNumber: 25, name: 0 },
              { entryNumber: 25, name: 13 },
              { entryNumber: 32, name: 11 },
              { entryNumber: 25, name: 10 },
              { entryNumber: 194, name: 12 }
            ],
            evolutionChain: 10,
            types: [7],
            generation: 'Generation I'
          },
          {
            name: 'raichu',
            pokedexNumbers: [
              { entryNumber: 164, name: 9 },
              { entryNumber: 37, name: 8 },
              { entryNumber: 23, name: 4 },
              { entryNumber: 105, name: 5 },
              { entryNumber: 105, name: 3 },
              { entryNumber: 157, name: 2 },
              { entryNumber: 23, name: 1 },
              { entryNumber: 26, name: 0 },
              { entryNumber: 26, name: 13 },
              { entryNumber: 195, name: 12 }
            ],
            evolutionChain: 10,
            types: [7],
            generation: 'Generation I'
          },
          {
            name: 'raichu-alola',
            pokedexNumbers: [
              { entryNumber: 26, name: 10 },
              { entryNumber: 33, name: 11 },
              { entryNumber: 26, name: 13 }
            ],
            evolutionChain: 10,
            types: [7, 9],
            generation: 'Generation VII'
          },
          {
            name: 'sandshrew',
            pokedexNumbers: [
              { entryNumber: 117, name: 9 },
              { entryNumber: 400, name: 8 },
              { entryNumber: 113, name: 7 },
              { entryNumber: 48, name: 4 },
              { entryNumber: 112, name: 2 },
              { entryNumber: 48, name: 1 },
              { entryNumber: 27, name: 0 },
              { entryNumber: 27, name: 13 }
            ],
            evolutionChain: 11,
            types: [8],
            generation: 'Generation I'
          },
          {
            name: 'sandshrew-alola',
            pokedexNumbers: [
              { entryNumber: 251, name: 10 },
              { entryNumber: 328, name: 11 },
              { entryNumber: 27, name: 13 }
            ],
            evolutionChain: 11,
            types: [11, 16],
            generation: 'Generation VII'
          },
          {
            name: 'sandslash',
            pokedexNumbers: [
              { entryNumber: 118, name: 9 },
              { entryNumber: 401, name: 8 },
              { entryNumber: 114, name: 7 },
              { entryNumber: 49, name: 4 },
              { entryNumber: 113, name: 2 },
              { entryNumber: 49, name: 1 },
              { entryNumber: 28, name: 0 },
              { entryNumber: 28, name: 13 }
            ],
            evolutionChain: 11,
            types: [8],
            generation: 'Generation I'
          },
          {
            name: 'sandslash-alola',
            pokedexNumbers: [
              { entryNumber: 252, name: 10 },
              { entryNumber: 329, name: 11 },
              { entryNumber: 28, name: 13 }
            ],
            evolutionChain: 11,
            types: [11, 16],
            generation: 'Generation VII'
          },
          {
            name: 'nidoran-\u2640',
            pokedexNumbers: [
              { entryNumber: 404, name: 8 },
              { entryNumber: 95, name: 4 },
              { entryNumber: 95, name: 1 },
              { entryNumber: 29, name: 0 },
              { entryNumber: 29, name: 13 }
            ],
            evolutionChain: 12,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'nidorina',
            pokedexNumbers: [
              { entryNumber: 405, name: 8 },
              { entryNumber: 96, name: 4 },
              { entryNumber: 96, name: 1 },
              { entryNumber: 30, name: 0 },
              { entryNumber: 30, name: 13 }
            ],
            evolutionChain: 12,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'nidoqueen',
            pokedexNumbers: [
              { entryNumber: 406, name: 8 },
              { entryNumber: 97, name: 4 },
              { entryNumber: 97, name: 1 },
              { entryNumber: 31, name: 0 },
              { entryNumber: 31, name: 13 }
            ],
            evolutionChain: 12,
            types: [6, 8],
            generation: 'Generation I'
          },
          {
            name: 'nidoran-\u2642',
            pokedexNumbers: [
              { entryNumber: 407, name: 8 },
              { entryNumber: 98, name: 4 },
              { entryNumber: 98, name: 1 },
              { entryNumber: 32, name: 0 },
              { entryNumber: 32, name: 13 }
            ],
            evolutionChain: 13,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'nidorino',
            pokedexNumbers: [
              { entryNumber: 408, name: 8 },
              { entryNumber: 99, name: 4 },
              { entryNumber: 99, name: 1 },
              { entryNumber: 33, name: 0 },
              { entryNumber: 33, name: 13 }
            ],
            evolutionChain: 13,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'nidoking',
            pokedexNumbers: [
              { entryNumber: 409, name: 8 },
              { entryNumber: 100, name: 4 },
              { entryNumber: 100, name: 1 },
              { entryNumber: 34, name: 0 },
              { entryNumber: 34, name: 13 }
            ],
            evolutionChain: 13,
            types: [6, 8],
            generation: 'Generation I'
          },
          {
            name: 'clefairy',
            pokedexNumbers: [
              { entryNumber: 89, name: 7 },
              { entryNumber: 41, name: 4 },
              { entryNumber: 100, name: 5 },
              { entryNumber: 100, name: 3 },
              { entryNumber: 41, name: 1 },
              { entryNumber: 35, name: 0 },
              { entryNumber: 35, name: 13 },
              { entryNumber: 273, name: 11 },
              { entryNumber: 211, name: 10 },
              { entryNumber: 255, name: 12 }
            ],
            evolutionChain: 14,
            types: [17],
            generation: 'Generation I'
          },
          {
            name: 'clefable',
            pokedexNumbers: [
              { entryNumber: 90, name: 7 },
              { entryNumber: 42, name: 4 },
              { entryNumber: 101, name: 5 },
              { entryNumber: 101, name: 3 },
              { entryNumber: 42, name: 1 },
              { entryNumber: 36, name: 0 },
              { entryNumber: 36, name: 13 },
              { entryNumber: 274, name: 11 },
              { entryNumber: 212, name: 10 },
              { entryNumber: 256, name: 12 }
            ],
            evolutionChain: 14,
            types: [17],
            generation: 'Generation I'
          },
          {
            name: 'vulpix',
            pokedexNumbers: [
              { entryNumber: 160, name: 9 },
              { entryNumber: 248, name: 7 },
              { entryNumber: 127, name: 4 },
              { entryNumber: 153, name: 2 },
              { entryNumber: 125, name: 1 },
              { entryNumber: 37, name: 0 },
              { entryNumber: 37, name: 13 },
              { entryNumber: 68, name: 12 }
            ],
            evolutionChain: 15,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'vulpix-alola',
            pokedexNumbers: [
              { entryNumber: 253, name: 10 },
              { entryNumber: 330, name: 11 },
              { entryNumber: 37, name: 13 }
            ],
            evolutionChain: 15,
            types: [11],
            generation: 'Generation VII'
          },
          {
            name: 'ninetales',
            pokedexNumbers: [
              { entryNumber: 161, name: 9 },
              { entryNumber: 249, name: 7 },
              { entryNumber: 128, name: 4 },
              { entryNumber: 154, name: 2 },
              { entryNumber: 126, name: 1 },
              { entryNumber: 38, name: 0 },
              { entryNumber: 38, name: 13 },
              { entryNumber: 69, name: 12 }
            ],
            evolutionChain: 15,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'ninetales-alola',
            pokedexNumbers: [
              { entryNumber: 254, name: 10 },
              { entryNumber: 331, name: 11 },
              { entryNumber: 38, name: 13 }
            ],
            evolutionChain: 15,
            types: [11, 17],
            generation: 'Generation VII'
          },
          {
            name: 'jigglypuff',
            pokedexNumbers: [
              { entryNumber: 143, name: 9 },
              { entryNumber: 423, name: 8 },
              { entryNumber: 282, name: 7 },
              { entryNumber: 44, name: 4 },
              { entryNumber: 138, name: 2 },
              { entryNumber: 44, name: 1 },
              { entryNumber: 39, name: 0 },
              { entryNumber: 39, name: 13 },
              { entryNumber: 168, name: 11 },
              { entryNumber: 135, name: 10 }
            ],
            evolutionChain: 16,
            types: [0, 17],
            generation: 'Generation I'
          },
          {
            name: 'wigglytuff',
            pokedexNumbers: [
              { entryNumber: 144, name: 9 },
              { entryNumber: 424, name: 8 },
              { entryNumber: 283, name: 7 },
              { entryNumber: 45, name: 4 },
              { entryNumber: 139, name: 2 },
              { entryNumber: 45, name: 1 },
              { entryNumber: 40, name: 0 },
              { entryNumber: 40, name: 13 },
              { entryNumber: 169, name: 11 },
              { entryNumber: 136, name: 10 }
            ],
            evolutionChain: 16,
            types: [0, 17],
            generation: 'Generation I'
          },
          {
            name: 'zubat',
            pokedexNumbers: [
              { entryNumber: 65, name: 9 },
              { entryNumber: 145, name: 8 },
              { entryNumber: 61, name: 7 },
              { entryNumber: 37, name: 4 },
              { entryNumber: 28, name: 5 },
              { entryNumber: 28, name: 3 },
              { entryNumber: 63, name: 2 },
              { entryNumber: 37, name: 1 },
              { entryNumber: 41, name: 0 },
              { entryNumber: 41, name: 13 },
              { entryNumber: 80, name: 11 },
              { entryNumber: 68, name: 10 }
            ],
            evolutionChain: 17,
            types: [6, 4],
            generation: 'Generation I'
          },
          {
            name: 'golbat',
            pokedexNumbers: [
              { entryNumber: 66, name: 9 },
              { entryNumber: 146, name: 8 },
              { entryNumber: 62, name: 7 },
              { entryNumber: 38, name: 4 },
              { entryNumber: 29, name: 5 },
              { entryNumber: 29, name: 3 },
              { entryNumber: 64, name: 2 },
              { entryNumber: 38, name: 1 },
              { entryNumber: 42, name: 0 },
              { entryNumber: 42, name: 13 },
              { entryNumber: 81, name: 11 },
              { entryNumber: 69, name: 10 }
            ],
            evolutionChain: 17,
            types: [6, 4],
            generation: 'Generation I'
          },
          {
            name: 'oddish',
            pokedexNumbers: [
              { entryNumber: 91, name: 9 },
              { entryNumber: 105, name: 8 },
              { entryNumber: 83, name: 4 },
              { entryNumber: 88, name: 2 },
              { entryNumber: 83, name: 1 },
              { entryNumber: 43, name: 0 },
              { entryNumber: 43, name: 13 },
              { entryNumber: 55, name: 12 }
            ],
            evolutionChain: 18,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'gloom',
            pokedexNumbers: [
              { entryNumber: 92, name: 9 },
              { entryNumber: 106, name: 8 },
              { entryNumber: 84, name: 4 },
              { entryNumber: 89, name: 2 },
              { entryNumber: 84, name: 1 },
              { entryNumber: 44, name: 0 },
              { entryNumber: 44, name: 13 },
              { entryNumber: 56, name: 12 }
            ],
            evolutionChain: 18,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'vileplume',
            pokedexNumbers: [
              { entryNumber: 93, name: 9 },
              { entryNumber: 107, name: 8 },
              { entryNumber: 85, name: 4 },
              { entryNumber: 90, name: 2 },
              { entryNumber: 85, name: 1 },
              { entryNumber: 45, name: 0 },
              { entryNumber: 45, name: 13 },
              { entryNumber: 57, name: 12 }
            ],
            evolutionChain: 18,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'paras',
            pokedexNumbers: [
              { entryNumber: 70, name: 4 },
              { entryNumber: 70, name: 1 },
              { entryNumber: 46, name: 0 },
              { entryNumber: 46, name: 13 },
              { entryNumber: 180, name: 11 },
              { entryNumber: 147, name: 10 }
            ],
            evolutionChain: 19,
            types: [12, 5],
            generation: 'Generation I'
          },
          {
            name: 'parasect',
            pokedexNumbers: [
              { entryNumber: 71, name: 4 },
              { entryNumber: 71, name: 1 },
              { entryNumber: 47, name: 0 },
              { entryNumber: 47, name: 13 },
              { entryNumber: 181, name: 11 },
              { entryNumber: 148, name: 10 }
            ],
            evolutionChain: 19,
            types: [12, 5],
            generation: 'Generation I'
          },
          {
            name: 'venonat',
            pokedexNumbers: [
              { entryNumber: 109, name: 4 },
              { entryNumber: 108, name: 1 },
              { entryNumber: 48, name: 0 },
              { entryNumber: 48, name: 13 }
            ],
            evolutionChain: 20,
            types: [12, 6],
            generation: 'Generation I'
          },
          {
            name: 'venomoth',
            pokedexNumbers: [
              { entryNumber: 110, name: 4 },
              { entryNumber: 109, name: 1 },
              { entryNumber: 49, name: 0 },
              { entryNumber: 49, name: 13 }
            ],
            evolutionChain: 20,
            types: [12, 6],
            generation: 'Generation I'
          },
          {
            name: 'diglett',
            pokedexNumbers: [
              { entryNumber: 304, name: 8 },
              { entryNumber: 134, name: 4 },
              { entryNumber: 132, name: 1 },
              { entryNumber: 50, name: 0 },
              { entryNumber: 50, name: 13 },
              { entryNumber: 164, name: 12 }
            ],
            evolutionChain: 21,
            types: [8],
            generation: 'Generation I'
          },
          {
            name: 'diglett-alola',
            pokedexNumbers: [
              { entryNumber: 71, name: 10 },
              { entryNumber: 85, name: 11 },
              { entryNumber: 50, name: 13 }
            ],
            evolutionChain: 21,
            types: [8, 16],
            generation: 'Generation VII'
          },
          {
            name: 'dugtrio',
            pokedexNumbers: [
              { entryNumber: 305, name: 8 },
              { entryNumber: 135, name: 4 },
              { entryNumber: 133, name: 1 },
              { entryNumber: 51, name: 0 },
              { entryNumber: 51, name: 13 },
              { entryNumber: 165, name: 12 }
            ],
            evolutionChain: 21,
            types: [8],
            generation: 'Generation I'
          },
          {
            name: 'dugtrio-alola',
            pokedexNumbers: [
              { entryNumber: 72, name: 10 },
              { entryNumber: 86, name: 11 },
              { entryNumber: 51, name: 13 }
            ],
            evolutionChain: 21,
            types: [8, 16],
            generation: 'Generation VII'
          },
          {
            name: 'meowth',
            pokedexNumbers: [
              { entryNumber: 138, name: 4 },
              { entryNumber: 136, name: 1 },
              { entryNumber: 52, name: 0 },
              { entryNumber: 52, name: 13 }
            ],
            evolutionChain: 22,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'meowth-alola',
            pokedexNumbers: [
              { entryNumber: 45, name: 10 },
              { entryNumber: 52, name: 11 },
              { entryNumber: 52, name: 13 }
            ],
            evolutionChain: 22,
            types: [15],
            generation: 'Generation VII'
          },
          {
            name: 'meowth-galar',
            pokedexNumbers: [
              { entryNumber: 182, name: 12 },
              { entryNumber: 52, name: 13 }
            ],
            evolutionChain: 22,
            types: [16],
            generation: 'Generation VIII'
          },
          {
            name: 'persian',
            pokedexNumbers: [
              { entryNumber: 139, name: 4 },
              { entryNumber: 137, name: 1 },
              { entryNumber: 53, name: 0 },
              { entryNumber: 53, name: 13 },
              { entryNumber: 184, name: 12 }
            ],
            evolutionChain: 22,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'persian-alola',
            pokedexNumbers: [
              { entryNumber: 46, name: 10 },
              { entryNumber: 53, name: 11 },
              { entryNumber: 53, name: 13 }
            ],
            evolutionChain: 22,
            types: [15],
            generation: 'Generation VII'
          },
          {
            name: 'psyduck',
            pokedexNumbers: [
              { entryNumber: 165, name: 9 },
              { entryNumber: 59, name: 8 },
              { entryNumber: 28, name: 7 },
              { entryNumber: 140, name: 4 },
              { entryNumber: 43, name: 5 },
              { entryNumber: 43, name: 3 },
              { entryNumber: 158, name: 2 },
              { entryNumber: 138, name: 1 },
              { entryNumber: 54, name: 0 },
              { entryNumber: 54, name: 13 },
              { entryNumber: 107, name: 11 },
              { entryNumber: 89, name: 10 }
            ],
            evolutionChain: 23,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'golduck',
            pokedexNumbers: [
              { entryNumber: 166, name: 9 },
              { entryNumber: 60, name: 8 },
              { entryNumber: 29, name: 7 },
              { entryNumber: 141, name: 4 },
              { entryNumber: 44, name: 5 },
              { entryNumber: 44, name: 3 },
              { entryNumber: 159, name: 2 },
              { entryNumber: 139, name: 1 },
              { entryNumber: 55, name: 0 },
              { entryNumber: 55, name: 13 },
              { entryNumber: 108, name: 11 },
              { entryNumber: 90, name: 10 }
            ],
            evolutionChain: 23,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'mankey',
            pokedexNumbers: [
              { entryNumber: 136, name: 4 },
              { entryNumber: 134, name: 1 },
              { entryNumber: 56, name: 0 },
              { entryNumber: 56, name: 13 },
              { entryNumber: 93, name: 11 },
              { entryNumber: 79, name: 10 }
            ],
            evolutionChain: 24,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'primeape',
            pokedexNumbers: [
              { entryNumber: 137, name: 4 },
              { entryNumber: 135, name: 1 },
              { entryNumber: 57, name: 0 },
              { entryNumber: 57, name: 13 },
              { entryNumber: 94, name: 11 },
              { entryNumber: 80, name: 10 }
            ],
            evolutionChain: 24,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'growlithe',
            pokedexNumbers: [
              { entryNumber: 51, name: 7 },
              { entryNumber: 129, name: 4 },
              { entryNumber: 127, name: 1 },
              { entryNumber: 58, name: 0 },
              { entryNumber: 58, name: 13 },
              { entryNumber: 64, name: 11 },
              { entryNumber: 52, name: 10 },
              { entryNumber: 70, name: 12 }
            ],
            evolutionChain: 25,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'arcanine',
            pokedexNumbers: [
              { entryNumber: 52, name: 7 },
              { entryNumber: 130, name: 4 },
              { entryNumber: 128, name: 1 },
              { entryNumber: 59, name: 0 },
              { entryNumber: 59, name: 13 },
              { entryNumber: 65, name: 11 },
              { entryNumber: 53, name: 10 },
              { entryNumber: 71, name: 12 }
            ],
            evolutionChain: 25,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'poliwag',
            pokedexNumbers: [
              { entryNumber: 336, name: 8 },
              { entryNumber: 72, name: 4 },
              { entryNumber: 72, name: 1 },
              { entryNumber: 60, name: 0 },
              { entryNumber: 60, name: 13 },
              { entryNumber: 182, name: 11 },
              { entryNumber: 149, name: 10 }
            ],
            evolutionChain: 26,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'poliwhirl',
            pokedexNumbers: [
              { entryNumber: 337, name: 8 },
              { entryNumber: 73, name: 4 },
              { entryNumber: 73, name: 1 },
              { entryNumber: 61, name: 0 },
              { entryNumber: 61, name: 13 },
              { entryNumber: 183, name: 11 },
              { entryNumber: 150, name: 10 }
            ],
            evolutionChain: 26,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'poliwrath',
            pokedexNumbers: [
              { entryNumber: 338, name: 8 },
              { entryNumber: 74, name: 4 },
              { entryNumber: 74, name: 1 },
              { entryNumber: 62, name: 0 },
              { entryNumber: 62, name: 13 },
              { entryNumber: 184, name: 11 },
              { entryNumber: 151, name: 10 }
            ],
            evolutionChain: 26,
            types: [3, 2],
            generation: 'Generation I'
          },
          {
            name: 'abra',
            pokedexNumbers: [
              { entryNumber: 40, name: 9 },
              { entryNumber: 102, name: 8 },
              { entryNumber: 89, name: 4 },
              { entryNumber: 20, name: 5 },
              { entryNumber: 20, name: 3 },
              { entryNumber: 39, name: 2 },
              { entryNumber: 89, name: 1 },
              { entryNumber: 63, name: 0 },
              { entryNumber: 63, name: 13 },
              { entryNumber: 49, name: 11 },
              { entryNumber: 42, name: 10 }
            ],
            evolutionChain: 27,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'kadabra',
            pokedexNumbers: [
              { entryNumber: 41, name: 9 },
              { entryNumber: 103, name: 8 },
              { entryNumber: 90, name: 4 },
              { entryNumber: 21, name: 5 },
              { entryNumber: 21, name: 3 },
              { entryNumber: 40, name: 2 },
              { entryNumber: 90, name: 1 },
              { entryNumber: 64, name: 0 },
              { entryNumber: 64, name: 13 },
              { entryNumber: 50, name: 11 },
              { entryNumber: 43, name: 10 }
            ],
            evolutionChain: 27,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'alakazam',
            pokedexNumbers: [
              { entryNumber: 42, name: 9 },
              { entryNumber: 104, name: 8 },
              { entryNumber: 91, name: 4 },
              { entryNumber: 22, name: 5 },
              { entryNumber: 22, name: 3 },
              { entryNumber: 41, name: 2 },
              { entryNumber: 91, name: 1 },
              { entryNumber: 65, name: 0 },
              { entryNumber: 65, name: 13 },
              { entryNumber: 51, name: 11 },
              { entryNumber: 44, name: 10 }
            ],
            evolutionChain: 27,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'alakazam-mega',
            pokedexNumbers: [
              { entryNumber: 42, name: 9 },
              { entryNumber: 104, name: 8 },
              { entryNumber: 91, name: 4 },
              { entryNumber: 22, name: 5 },
              { entryNumber: 22, name: 3 },
              { entryNumber: 41, name: 2 },
              { entryNumber: 91, name: 1 },
              { entryNumber: 65, name: 0 },
              { entryNumber: 65, name: 13 }
            ],
            evolutionChain: 27,
            types: [9],
            generation: 'Generation VII'
          },
          {
            name: 'machop',
            pokedexNumbers: [
              { entryNumber: 75, name: 9 },
              { entryNumber: 207, name: 8 },
              { entryNumber: 142, name: 4 },
              { entryNumber: 40, name: 5 },
              { entryNumber: 40, name: 3 },
              { entryNumber: 73, name: 2 },
              { entryNumber: 140, name: 1 },
              { entryNumber: 66, name: 0 },
              { entryNumber: 66, name: 13 },
              { entryNumber: 117, name: 11 },
              { entryNumber: 95, name: 10 },
              { entryNumber: 138, name: 12 }
            ],
            evolutionChain: 28,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'machoke',
            pokedexNumbers: [
              { entryNumber: 76, name: 9 },
              { entryNumber: 208, name: 8 },
              { entryNumber: 143, name: 4 },
              { entryNumber: 41, name: 5 },
              { entryNumber: 41, name: 3 },
              { entryNumber: 74, name: 2 },
              { entryNumber: 141, name: 1 },
              { entryNumber: 67, name: 0 },
              { entryNumber: 67, name: 13 },
              { entryNumber: 118, name: 11 },
              { entryNumber: 96, name: 10 },
              { entryNumber: 139, name: 12 }
            ],
            evolutionChain: 28,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'machamp',
            pokedexNumbers: [
              { entryNumber: 77, name: 9 },
              { entryNumber: 209, name: 8 },
              { entryNumber: 144, name: 4 },
              { entryNumber: 42, name: 5 },
              { entryNumber: 42, name: 3 },
              { entryNumber: 75, name: 2 },
              { entryNumber: 142, name: 1 },
              { entryNumber: 68, name: 0 },
              { entryNumber: 68, name: 13 },
              { entryNumber: 119, name: 11 },
              { entryNumber: 97, name: 10 },
              { entryNumber: 140, name: 12 }
            ],
            evolutionChain: 28,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'bellsprout',
            pokedexNumbers: [
              { entryNumber: 329, name: 8 },
              { entryNumber: 64, name: 4 },
              { entryNumber: 64, name: 1 },
              { entryNumber: 69, name: 0 },
              { entryNumber: 69, name: 13 }
            ],
            evolutionChain: 29,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'weepinbell',
            pokedexNumbers: [
              { entryNumber: 330, name: 8 },
              { entryNumber: 65, name: 4 },
              { entryNumber: 65, name: 1 },
              { entryNumber: 70, name: 0 },
              { entryNumber: 70, name: 13 }
            ],
            evolutionChain: 29,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'victreebel',
            pokedexNumbers: [
              { entryNumber: 331, name: 8 },
              { entryNumber: 66, name: 4 },
              { entryNumber: 66, name: 1 },
              { entryNumber: 71, name: 0 },
              { entryNumber: 71, name: 13 }
            ],
            evolutionChain: 29,
            types: [5, 6],
            generation: 'Generation I'
          },
          {
            name: 'tentacool',
            pokedexNumbers: [
              { entryNumber: 68, name: 9 },
              { entryNumber: 175, name: 8 },
              { entryNumber: 164, name: 4 },
              { entryNumber: 136, name: 5 },
              { entryNumber: 136, name: 3 },
              { entryNumber: 66, name: 2 },
              { entryNumber: 162, name: 1 },
              { entryNumber: 72, name: 0 },
              { entryNumber: 72, name: 13 },
              { entryNumber: 129, name: 11 },
              { entryNumber: 106, name: 10 }
            ],
            evolutionChain: 30,
            types: [3, 6],
            generation: 'Generation I'
          },
          {
            name: 'tentacruel',
            pokedexNumbers: [
              { entryNumber: 69, name: 9 },
              { entryNumber: 176, name: 8 },
              { entryNumber: 165, name: 4 },
              { entryNumber: 137, name: 5 },
              { entryNumber: 137, name: 3 },
              { entryNumber: 67, name: 2 },
              { entryNumber: 163, name: 1 },
              { entryNumber: 73, name: 0 },
              { entryNumber: 73, name: 13 },
              { entryNumber: 130, name: 11 },
              { entryNumber: 107, name: 10 }
            ],
            evolutionChain: 30,
            types: [3, 6],
            generation: 'Generation I'
          },
          {
            name: 'geodude',
            pokedexNumbers: [
              { entryNumber: 58, name: 9 },
              { entryNumber: 312, name: 8 },
              { entryNumber: 34, name: 4 },
              { entryNumber: 31, name: 5 },
              { entryNumber: 31, name: 3 },
              { entryNumber: 57, name: 2 },
              { entryNumber: 34, name: 1 },
              { entryNumber: 74, name: 0 },
              { entryNumber: 74, name: 13 }
            ],
            evolutionChain: 31,
            types: [10, 8],
            generation: 'Generation I'
          },
          {
            name: 'geodude-alola',
            pokedexNumbers: [
              { entryNumber: 229, name: 10 },
              { entryNumber: 298, name: 11 },
              { entryNumber: 74, name: 13 }
            ],
            evolutionChain: 31,
            types: [10, 7],
            generation: 'Generation VII'
          },
          {
            name: 'graveler',
            pokedexNumbers: [
              { entryNumber: 59, name: 9 },
              { entryNumber: 313, name: 8 },
              { entryNumber: 35, name: 4 },
              { entryNumber: 32, name: 5 },
              { entryNumber: 32, name: 3 },
              { entryNumber: 58, name: 2 },
              { entryNumber: 35, name: 1 },
              { entryNumber: 75, name: 0 },
              { entryNumber: 75, name: 13 }
            ],
            evolutionChain: 31,
            types: [10, 8],
            generation: 'Generation I'
          },
          {
            name: 'graveler-alola',
            pokedexNumbers: [
              { entryNumber: 230, name: 10 },
              { entryNumber: 299, name: 11 },
              { entryNumber: 75, name: 13 }
            ],
            evolutionChain: 31,
            types: [10, 7],
            generation: 'Generation VII'
          },
          {
            name: 'golem',
            pokedexNumbers: [
              { entryNumber: 60, name: 9 },
              { entryNumber: 314, name: 8 },
              { entryNumber: 36, name: 4 },
              { entryNumber: 33, name: 5 },
              { entryNumber: 33, name: 3 },
              { entryNumber: 59, name: 2 },
              { entryNumber: 36, name: 1 },
              { entryNumber: 76, name: 0 },
              { entryNumber: 76, name: 13 }
            ],
            evolutionChain: 31,
            types: [10, 8],
            generation: 'Generation I'
          },
          {
            name: 'golem-alola',
            pokedexNumbers: [
              { entryNumber: 231, name: 10 },
              { entryNumber: 300, name: 11 },
              { entryNumber: 76, name: 13 }
            ],
            evolutionChain: 31,
            types: [10, 7],
            generation: 'Generation VII'
          },
          {
            name: 'ponyta',
            pokedexNumbers: [
              { entryNumber: 206, name: 4 },
              { entryNumber: 90, name: 5 },
              { entryNumber: 90, name: 3 },
              { entryNumber: 201, name: 1 },
              { entryNumber: 77, name: 0 },
              { entryNumber: 77, name: 13 }
            ],
            evolutionChain: 32,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'ponyta-galar',
            pokedexNumbers: [
              { entryNumber: 206, name: 4 },
              { entryNumber: 90, name: 5 },
              { entryNumber: 90, name: 3 },
              { entryNumber: 201, name: 1 },
              { entryNumber: 77, name: 0 },
              { entryNumber: 77, name: 13 },
              { entryNumber: 333, name: 12 }
            ],
            evolutionChain: 32,
            types: [9],
            generation: 'Generation VIII'
          },
          {
            name: 'rapidash',
            pokedexNumbers: [
              { entryNumber: 207, name: 4 },
              { entryNumber: 91, name: 5 },
              { entryNumber: 91, name: 3 },
              { entryNumber: 202, name: 1 },
              { entryNumber: 78, name: 0 },
              { entryNumber: 78, name: 13 },
              { entryNumber: 333, name: 12 }
            ],
            evolutionChain: 32,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'rapidash-galar',
            pokedexNumbers: [
              { entryNumber: 207, name: 4 },
              { entryNumber: 91, name: 5 },
              { entryNumber: 91, name: 3 },
              { entryNumber: 202, name: 1 },
              { entryNumber: 78, name: 0 },
              { entryNumber: 78, name: 13 },
              { entryNumber: 333, name: 12 }
            ],
            evolutionChain: 32,
            types: [9, 17],
            generation: 'Generation VIII'
          },
          {
            name: 'slowpoke',
            pokedexNumbers: [
              { entryNumber: 283, name: 8 },
              { entryNumber: 80, name: 4 },
              { entryNumber: 80, name: 1 },
              { entryNumber: 79, name: 0 },
              { entryNumber: 79, name: 13 },
              { entryNumber: 44, name: 11 },
              { entryNumber: 37, name: 10 }
            ],
            evolutionChain: 33,
            types: [3, 9],
            generation: 'Generation I'
          },
          {
            name: 'slowbro',
            pokedexNumbers: [
              { entryNumber: 284, name: 8 },
              { entryNumber: 81, name: 4 },
              { entryNumber: 81, name: 1 },
              { entryNumber: 80, name: 0 },
              { entryNumber: 80, name: 13 },
              { entryNumber: 45, name: 11 },
              { entryNumber: 38, name: 10 }
            ],
            evolutionChain: 33,
            types: [3, 9],
            generation: 'Generation I'
          },
          {
            name: 'slowbro-mega',
            pokedexNumbers: [
              { entryNumber: 284, name: 8 },
              { entryNumber: 81, name: 4 },
              { entryNumber: 81, name: 1 },
              { entryNumber: 80, name: 0 },
              { entryNumber: 80, name: 13 }
            ],
            evolutionChain: 33,
            types: [3, 9],
            generation: 'Generation VII'
          },
          {
            name: 'magnemite',
            pokedexNumbers: [
              { entryNumber: 84, name: 9 },
              { entryNumber: 372, name: 8 },
              { entryNumber: 48, name: 7 },
              { entryNumber: 119, name: 4 },
              { entryNumber: 178, name: 5 },
              { entryNumber: 82, name: 2 },
              { entryNumber: 118, name: 1 },
              { entryNumber: 81, name: 0 },
              { entryNumber: 81, name: 13 },
              { entryNumber: 54, name: 11 },
              { entryNumber: 47, name: 10 }
            ],
            evolutionChain: 34,
            types: [7, 16],
            generation: 'Generation I'
          },
          {
            name: 'magneton',
            pokedexNumbers: [
              { entryNumber: 85, name: 9 },
              { entryNumber: 373, name: 8 },
              { entryNumber: 49, name: 7 },
              { entryNumber: 120, name: 4 },
              { entryNumber: 179, name: 5 },
              { entryNumber: 83, name: 2 },
              { entryNumber: 119, name: 1 },
              { entryNumber: 82, name: 0 },
              { entryNumber: 82, name: 13 },
              { entryNumber: 55, name: 11 },
              { entryNumber: 48, name: 10 }
            ],
            evolutionChain: 34,
            types: [7, 16],
            generation: 'Generation I'
          },
          {
            name: "farfetch'd",
            pokedexNumbers: [
              { entryNumber: 61, name: 8 },
              { entryNumber: 160, name: 4 },
              { entryNumber: 158, name: 1 },
              { entryNumber: 83, name: 0 },
              { entryNumber: 83, name: 13 }
            ],
            evolutionChain: 35,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: "farfetch'd-galar",
            pokedexNumbers: [
              { entryNumber: 61, name: 8 },
              { entryNumber: 160, name: 4 },
              { entryNumber: 158, name: 1 },
              { entryNumber: 83, name: 0 },
              { entryNumber: 83, name: 13 },
              { entryNumber: 218, name: 12 }
            ],
            evolutionChain: 35,
            types: [2],
            generation: 'Generation VIII'
          },
          {
            name: 'doduo',
            pokedexNumbers: [
              { entryNumber: 95, name: 9 },
              { entryNumber: 94, name: 8 },
              { entryNumber: 204, name: 4 },
              { entryNumber: 92, name: 2 },
              { entryNumber: 199, name: 1 },
              { entryNumber: 84, name: 0 },
              { entryNumber: 84, name: 13 }
            ],
            evolutionChain: 36,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'dodrio',
            pokedexNumbers: [
              { entryNumber: 96, name: 9 },
              { entryNumber: 95, name: 8 },
              { entryNumber: 205, name: 4 },
              { entryNumber: 93, name: 2 },
              { entryNumber: 200, name: 1 },
              { entryNumber: 85, name: 0 },
              { entryNumber: 85, name: 13 }
            ],
            evolutionChain: 36,
            types: [0, 4],
            generation: 'Generation I'
          },
          {
            name: 'seel',
            pokedexNumbers: [
              { entryNumber: 265, name: 7 },
              { entryNumber: 178, name: 4 },
              { entryNumber: 176, name: 1 },
              { entryNumber: 86, name: 0 },
              { entryNumber: 86, name: 13 },
              { entryNumber: 115, name: 11 }
            ],
            evolutionChain: 37,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'dewgong',
            pokedexNumbers: [
              { entryNumber: 266, name: 7 },
              { entryNumber: 179, name: 4 },
              { entryNumber: 177, name: 1 },
              { entryNumber: 87, name: 0 },
              { entryNumber: 87, name: 13 },
              { entryNumber: 116, name: 11 }
            ],
            evolutionChain: 37,
            types: [3, 11],
            generation: 'Generation I'
          },
          {
            name: 'grimer',
            pokedexNumbers: [
              { entryNumber: 111, name: 9 },
              { entryNumber: 64, name: 7 },
              { entryNumber: 117, name: 4 },
              { entryNumber: 106, name: 2 },
              { entryNumber: 116, name: 1 },
              { entryNumber: 88, name: 0 },
              { entryNumber: 88, name: 13 }
            ],
            evolutionChain: 38,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'grimer-alola',
            pokedexNumbers: [
              { entryNumber: 50, name: 10 },
              { entryNumber: 57, name: 11 },
              { entryNumber: 88, name: 13 }
            ],
            evolutionChain: 38,
            types: [6, 15],
            generation: 'Generation VII'
          },
          {
            name: 'muk',
            pokedexNumbers: [
              { entryNumber: 112, name: 9 },
              { entryNumber: 65, name: 7 },
              { entryNumber: 118, name: 4 },
              { entryNumber: 107, name: 2 },
              { entryNumber: 117, name: 1 },
              { entryNumber: 89, name: 0 },
              { entryNumber: 89, name: 13 }
            ],
            evolutionChain: 38,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'muk-alola',
            pokedexNumbers: [
              { entryNumber: 51, name: 10 },
              { entryNumber: 58, name: 11 },
              { entryNumber: 89, name: 13 }
            ],
            evolutionChain: 38,
            types: [6, 15],
            generation: 'Generation VII'
          },
          {
            name: 'shellder',
            pokedexNumbers: [
              { entryNumber: 186, name: 8 },
              { entryNumber: 171, name: 4 },
              { entryNumber: 169, name: 1 },
              { entryNumber: 90, name: 0 },
              { entryNumber: 90, name: 13 },
              { entryNumber: 138, name: 11 },
              { entryNumber: 115, name: 10 },
              { entryNumber: 150, name: 12 }
            ],
            evolutionChain: 39,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'cloyster',
            pokedexNumbers: [
              { entryNumber: 187, name: 8 },
              { entryNumber: 172, name: 4 },
              { entryNumber: 170, name: 1 },
              { entryNumber: 91, name: 0 },
              { entryNumber: 91, name: 13 },
              { entryNumber: 139, name: 11 },
              { entryNumber: 116, name: 10 },
              { entryNumber: 151, name: 12 }
            ],
            evolutionChain: 39,
            types: [3, 11],
            generation: 'Generation I'
          },
          {
            name: 'gastly',
            pokedexNumbers: [
              { entryNumber: 333, name: 8 },
              { entryNumber: 58, name: 4 },
              { entryNumber: 69, name: 5 },
              { entryNumber: 69, name: 3 },
              { entryNumber: 58, name: 1 },
              { entryNumber: 92, name: 0 },
              { entryNumber: 92, name: 13 },
              { entryNumber: 73, name: 11 },
              { entryNumber: 61, name: 10 },
              { entryNumber: 141, name: 12 }
            ],
            evolutionChain: 40,
            types: [14, 6],
            generation: 'Generation I'
          },
          {
            name: 'haunter',
            pokedexNumbers: [
              { entryNumber: 334, name: 8 },
              { entryNumber: 59, name: 4 },
              { entryNumber: 70, name: 5 },
              { entryNumber: 70, name: 3 },
              { entryNumber: 59, name: 1 },
              { entryNumber: 93, name: 0 },
              { entryNumber: 93, name: 13 },
              { entryNumber: 74, name: 11 },
              { entryNumber: 62, name: 10 },
              { entryNumber: 142, name: 12 }
            ],
            evolutionChain: 40,
            types: [14, 6],
            generation: 'Generation I'
          },
          {
            name: 'gengar',
            pokedexNumbers: [
              { entryNumber: 335, name: 8 },
              { entryNumber: 60, name: 4 },
              { entryNumber: 71, name: 5 },
              { entryNumber: 71, name: 3 },
              { entryNumber: 60, name: 1 },
              { entryNumber: 94, name: 0 },
              { entryNumber: 94, name: 13 },
              { entryNumber: 75, name: 11 },
              { entryNumber: 63, name: 10 },
              { entryNumber: 143, name: 12 }
            ],
            evolutionChain: 40,
            types: [14, 6],
            generation: 'Generation I'
          },
          {
            name: 'gengar-mega',
            pokedexNumbers: [
              { entryNumber: 335, name: 8 },
              { entryNumber: 60, name: 4 },
              { entryNumber: 71, name: 5 },
              { entryNumber: 71, name: 3 },
              { entryNumber: 60, name: 1 },
              { entryNumber: 94, name: 0 },
              { entryNumber: 94, name: 13 }
            ],
            evolutionChain: 40,
            types: [14, 6],
            generation: 'Generation VII'
          },
          {
            name: 'onix',
            pokedexNumbers: [
              { entryNumber: 203, name: 8 },
              { entryNumber: 71, name: 7 },
              { entryNumber: 62, name: 4 },
              { entryNumber: 34, name: 5 },
              { entryNumber: 34, name: 3 },
              { entryNumber: 62, name: 1 },
              { entryNumber: 95, name: 0 },
              { entryNumber: 95, name: 13 },
              { entryNumber: 178, name: 12 }
            ],
            evolutionChain: 41,
            types: [10, 8],
            generation: 'Generation I'
          },
          {
            name: 'drowzee',
            pokedexNumbers: [
              { entryNumber: 87, name: 4 },
              { entryNumber: 87, name: 1 },
              { entryNumber: 96, name: 0 },
              { entryNumber: 96, name: 13 },
              { entryNumber: 66, name: 11 },
              { entryNumber: 54, name: 10 }
            ],
            evolutionChain: 42,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'hypno',
            pokedexNumbers: [
              { entryNumber: 88, name: 4 },
              { entryNumber: 88, name: 1 },
              { entryNumber: 97, name: 0 },
              { entryNumber: 97, name: 13 },
              { entryNumber: 67, name: 11 },
              { entryNumber: 55, name: 10 }
            ],
            evolutionChain: 42,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'krabby',
            pokedexNumbers: [
              { entryNumber: 166, name: 4 },
              { entryNumber: 164, name: 1 },
              { entryNumber: 98, name: 0 },
              { entryNumber: 98, name: 13 },
              { entryNumber: 98, name: 12 }
            ],
            evolutionChain: 43,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'kingler',
            pokedexNumbers: [
              { entryNumber: 167, name: 4 },
              { entryNumber: 165, name: 1 },
              { entryNumber: 99, name: 0 },
              { entryNumber: 99, name: 13 },
              { entryNumber: 99, name: 12 }
            ],
            evolutionChain: 43,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'voltorb',
            pokedexNumbers: [
              { entryNumber: 87, name: 9 },
              { entryNumber: 375, name: 8 },
              { entryNumber: 121, name: 4 },
              { entryNumber: 84, name: 2 },
              { entryNumber: 120, name: 1 },
              { entryNumber: 100, name: 0 },
              { entryNumber: 100, name: 13 }
            ],
            evolutionChain: 44,
            types: [7],
            generation: 'Generation I'
          },
          {
            name: 'electrode',
            pokedexNumbers: [
              { entryNumber: 88, name: 9 },
              { entryNumber: 376, name: 8 },
              { entryNumber: 122, name: 4 },
              { entryNumber: 85, name: 2 },
              { entryNumber: 121, name: 1 },
              { entryNumber: 101, name: 0 },
              { entryNumber: 101, name: 13 }
            ],
            evolutionChain: 44,
            types: [7],
            generation: 'Generation I'
          },
          {
            name: 'exeggcute',
            pokedexNumbers: [
              { entryNumber: 286, name: 8 },
              { entryNumber: 105, name: 4 },
              { entryNumber: 104, name: 1 },
              { entryNumber: 102, name: 0 },
              { entryNumber: 102, name: 13 },
              { entryNumber: 355, name: 11 },
              { entryNumber: 269, name: 10 }
            ],
            evolutionChain: 45,
            types: [5, 9],
            generation: 'Generation I'
          },
          {
            name: 'exeggutor',
            pokedexNumbers: [
              { entryNumber: 287, name: 8 },
              { entryNumber: 106, name: 4 },
              { entryNumber: 105, name: 1 },
              { entryNumber: 103, name: 0 },
              { entryNumber: 103, name: 13 }
            ],
            evolutionChain: 45,
            types: [5, 9],
            generation: 'Generation I'
          },
          {
            name: 'exeggutor-alola',
            pokedexNumbers: [
              { entryNumber: 270, name: 10 },
              { entryNumber: 356, name: 11 },
              { entryNumber: 103, name: 13 }
            ],
            evolutionChain: 45,
            types: [5, 13],
            generation: 'Generation VII'
          },
          {
            name: 'cubone',
            pokedexNumbers: [
              { entryNumber: 210, name: 8 },
              { entryNumber: 208, name: 4 },
              { entryNumber: 203, name: 1 },
              { entryNumber: 104, name: 0 },
              { entryNumber: 104, name: 13 },
              { entryNumber: 197, name: 11 },
              { entryNumber: 163, name: 10 }
            ],
            evolutionChain: 46,
            types: [8],
            generation: 'Generation I'
          },
          {
            name: 'marowak',
            pokedexNumbers: [
              { entryNumber: 211, name: 8 },
              { entryNumber: 209, name: 4 },
              { entryNumber: 204, name: 1 },
              { entryNumber: 105, name: 0 },
              { entryNumber: 105, name: 13 }
            ],
            evolutionChain: 46,
            types: [8],
            generation: 'Generation I'
          },
          {
            name: 'marowak-alola',
            pokedexNumbers: [
              { entryNumber: 164, name: 10 },
              { entryNumber: 198, name: 11 },
              { entryNumber: 105, name: 13 }
            ],
            evolutionChain: 46,
            types: [1, 14],
            generation: 'Generation VII'
          },
          {
            name: 'hitmonlee',
            pokedexNumbers: [
              { entryNumber: 146, name: 4 },
              { entryNumber: 144, name: 1 },
              { entryNumber: 106, name: 0 },
              { entryNumber: 106, name: 13 },
              { entryNumber: 108, name: 12 }
            ],
            evolutionChain: 47,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'hitmonchan',
            pokedexNumbers: [
              { entryNumber: 147, name: 4 },
              { entryNumber: 145, name: 1 },
              { entryNumber: 107, name: 0 },
              { entryNumber: 107, name: 13 },
              { entryNumber: 109, name: 12 }
            ],
            evolutionChain: 47,
            types: [2],
            generation: 'Generation I'
          },
          {
            name: 'lickitung',
            pokedexNumbers: [
              { entryNumber: 437, name: 8 },
              { entryNumber: 284, name: 7 },
              { entryNumber: 180, name: 4 },
              { entryNumber: 161, name: 5 },
              { entryNumber: 178, name: 1 },
              { entryNumber: 108, name: 0 },
              { entryNumber: 108, name: 13 },
              { entryNumber: 375, name: 11 }
            ],
            evolutionChain: 48,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'koffing',
            pokedexNumbers: [
              { entryNumber: 113, name: 9 },
              { entryNumber: 46, name: 7 },
              { entryNumber: 115, name: 4 },
              { entryNumber: 108, name: 2 },
              { entryNumber: 114, name: 1 },
              { entryNumber: 109, name: 0 },
              { entryNumber: 109, name: 13 },
              { entryNumber: 250, name: 12 }
            ],
            evolutionChain: 49,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'weezing',
            pokedexNumbers: [
              { entryNumber: 114, name: 9 },
              { entryNumber: 47, name: 7 },
              { entryNumber: 116, name: 4 },
              { entryNumber: 109, name: 2 },
              { entryNumber: 115, name: 1 },
              { entryNumber: 110, name: 0 },
              { entryNumber: 110, name: 13 }
            ],
            evolutionChain: 49,
            types: [6],
            generation: 'Generation I'
          },
          {
            name: 'weezing-galar',
            pokedexNumbers: [
              { entryNumber: 114, name: 9 },
              { entryNumber: 47, name: 7 },
              { entryNumber: 116, name: 4 },
              { entryNumber: 109, name: 2 },
              { entryNumber: 115, name: 1 },
              { entryNumber: 110, name: 0 },
              { entryNumber: 110, name: 13 },
              { entryNumber: 251, name: 12 }
            ],
            evolutionChain: 49,
            types: [6, 17],
            generation: 'Generation VIII'
          },
          {
            name: 'rhyhorn',
            pokedexNumbers: [
              { entryNumber: 176, name: 9 },
              { entryNumber: 200, name: 8 },
              { entryNumber: 211, name: 4 },
              { entryNumber: 186, name: 5 },
              { entryNumber: 169, name: 2 },
              { entryNumber: 206, name: 1 },
              { entryNumber: 111, name: 0 },
              { entryNumber: 111, name: 13 },
              { entryNumber: 264, name: 12 }
            ],
            evolutionChain: 50,
            types: [8, 10],
            generation: 'Generation I'
          },
          {
            name: 'rhydon',
            pokedexNumbers: [
              { entryNumber: 177, name: 9 },
              { entryNumber: 201, name: 8 },
              { entryNumber: 212, name: 4 },
              { entryNumber: 187, name: 5 },
              { entryNumber: 170, name: 2 },
              { entryNumber: 207, name: 1 },
              { entryNumber: 112, name: 0 },
              { entryNumber: 112, name: 13 },
              { entryNumber: 165, name: 12 }
            ],
            evolutionChain: 50,
            types: [8, 10],
            generation: 'Generation I'
          },
          {
            name: 'chansey',
            pokedexNumbers: [
              { entryNumber: 222, name: 4 },
              { entryNumber: 97, name: 5 },
              { entryNumber: 97, name: 3 },
              { entryNumber: 217, name: 1 },
              { entryNumber: 113, name: 0 },
              { entryNumber: 113, name: 13 },
              { entryNumber: 40, name: 11 },
              { entryNumber: 33, name: 10 }
            ],
            evolutionChain: 51,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'tangela',
            pokedexNumbers: [
              { entryNumber: 217, name: 7 },
              { entryNumber: 182, name: 4 },
              { entryNumber: 181, name: 5 },
              { entryNumber: 179, name: 1 },
              { entryNumber: 114, name: 0 },
              { entryNumber: 114, name: 13 }
            ],
            evolutionChain: 52,
            types: [5],
            generation: 'Generation I'
          },
          {
            name: 'kangaskhan',
            pokedexNumbers: [
              { entryNumber: 212, name: 8 },
              { entryNumber: 210, name: 4 },
              { entryNumber: 205, name: 1 },
              { entryNumber: 115, name: 0 },
              { entryNumber: 115, name: 13 },
              { entryNumber: 199, name: 11 },
              { entryNumber: 165, name: 10 }
            ],
            evolutionChain: 53,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'kangaskhan-mega',
            pokedexNumbers: [
              { entryNumber: 212, name: 8 },
              { entryNumber: 210, name: 4 },
              { entryNumber: 205, name: 1 },
              { entryNumber: 115, name: 0 },
              { entryNumber: 115, name: 13 }
            ],
            evolutionChain: 53,
            types: [0],
            generation: 'Generation VII'
          },
          {
            name: 'horsea',
            pokedexNumbers: [
              { entryNumber: 193, name: 9 },
              { entryNumber: 189, name: 8 },
              { entryNumber: 190, name: 4 },
              { entryNumber: 184, name: 2 },
              { entryNumber: 186, name: 1 },
              { entryNumber: 116, name: 0 },
              { entryNumber: 116, name: 13 }
            ],
            evolutionChain: 54,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'seadra',
            pokedexNumbers: [
              { entryNumber: 194, name: 9 },
              { entryNumber: 190, name: 8 },
              { entryNumber: 191, name: 4 },
              { entryNumber: 185, name: 2 },
              { entryNumber: 187, name: 1 },
              { entryNumber: 117, name: 0 },
              { entryNumber: 117, name: 13 }
            ],
            evolutionChain: 54,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'goldeen',
            pokedexNumbers: [
              { entryNumber: 51, name: 9 },
              { entryNumber: 53, name: 8 },
              { entryNumber: 78, name: 4 },
              { entryNumber: 78, name: 5 },
              { entryNumber: 78, name: 3 },
              { entryNumber: 50, name: 2 },
              { entryNumber: 78, name: 1 },
              { entryNumber: 118, name: 0 },
              { entryNumber: 118, name: 13 },
              { entryNumber: 186, name: 11 },
              { entryNumber: 153, name: 10 },
              { entryNumber: 146, name: 12 }
            ],
            evolutionChain: 55,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'seaking',
            pokedexNumbers: [
              { entryNumber: 52, name: 9 },
              { entryNumber: 54, name: 8 },
              { entryNumber: 79, name: 4 },
              { entryNumber: 79, name: 5 },
              { entryNumber: 79, name: 3 },
              { entryNumber: 51, name: 2 },
              { entryNumber: 79, name: 1 },
              { entryNumber: 119, name: 0 },
              { entryNumber: 119, name: 13 },
              { entryNumber: 187, name: 11 },
              { entryNumber: 154, name: 10 },
              { entryNumber: 147, name: 12 }
            ],
            evolutionChain: 55,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'staryu',
            pokedexNumbers: [
              { entryNumber: 148, name: 9 },
              { entryNumber: 184, name: 8 },
              { entryNumber: 238, name: 7 },
              { entryNumber: 169, name: 4 },
              { entryNumber: 143, name: 2 },
              { entryNumber: 167, name: 1 },
              { entryNumber: 120, name: 0 },
              { entryNumber: 120, name: 13 },
              { entryNumber: 223, name: 11 },
              { entryNumber: 184, name: 10 }
            ],
            evolutionChain: 56,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'starmie',
            pokedexNumbers: [
              { entryNumber: 149, name: 9 },
              { entryNumber: 185, name: 8 },
              { entryNumber: 239, name: 7 },
              { entryNumber: 170, name: 4 },
              { entryNumber: 144, name: 2 },
              { entryNumber: 168, name: 1 },
              { entryNumber: 121, name: 0 },
              { entryNumber: 121, name: 13 },
              { entryNumber: 224, name: 11 },
              { entryNumber: 185, name: 10 }
            ],
            evolutionChain: 56,
            types: [3, 9],
            generation: 'Generation I'
          },
          {
            name: 'mr. mime',
            pokedexNumbers: [
              { entryNumber: 264, name: 8 },
              { entryNumber: 158, name: 4 },
              { entryNumber: 95, name: 5 },
              { entryNumber: 95, name: 3 },
              { entryNumber: 156, name: 1 },
              { entryNumber: 122, name: 0 },
              { entryNumber: 122, name: 13 },
              { entryNumber: 60, name: 11 },
              { entryNumber: 365, name: 12 }
            ],
            evolutionChain: 57,
            types: [9, 17],
            generation: 'Generation I'
          },
          {
            name: 'mr. mime-galar',
            pokedexNumbers: [
              { entryNumber: 264, name: 8 },
              { entryNumber: 158, name: 4 },
              { entryNumber: 95, name: 5 },
              { entryNumber: 95, name: 3 },
              { entryNumber: 156, name: 1 },
              { entryNumber: 122, name: 0 },
              { entryNumber: 122, name: 13 },
              { entryNumber: 60, name: 11 },
              { entryNumber: 358, name: 12 }
            ],
            evolutionChain: 57,
            types: [9, 11],
            generation: 'Generation VIII'
          },
          {
            name: 'scyther',
            pokedexNumbers: [
              { entryNumber: 439, name: 8 },
              { entryNumber: 111, name: 4 },
              { entryNumber: 195, name: 5 },
              { entryNumber: 110, name: 1 },
              { entryNumber: 123, name: 0 },
              { entryNumber: 123, name: 13 },
              { entryNumber: 365, name: 11 },
              { entryNumber: 275, name: 10 }
            ],
            evolutionChain: 58,
            types: [12, 4],
            generation: 'Generation I'
          },
          {
            name: 'jynx',
            pokedexNumbers: [
              { entryNumber: 387, name: 8 },
              { entryNumber: 155, name: 4 },
              { entryNumber: 153, name: 1 },
              { entryNumber: 124, name: 0 },
              { entryNumber: 124, name: 13 },
              { entryNumber: 110, name: 11 }
            ],
            evolutionChain: 59,
            types: [11, 9],
            generation: 'Generation I'
          },
          {
            name: 'electabuzz',
            pokedexNumbers: [
              { entryNumber: 57, name: 7 },
              { entryNumber: 157, name: 4 },
              { entryNumber: 198, name: 5 },
              { entryNumber: 155, name: 1 },
              { entryNumber: 125, name: 0 },
              { entryNumber: 125, name: 13 },
              { entryNumber: 296, name: 11 },
              { entryNumber: 227, name: 10 }
            ],
            evolutionChain: 60,
            types: [7],
            generation: 'Generation I'
          },
          {
            name: 'magmar',
            pokedexNumbers: [
              { entryNumber: 54, name: 7 },
              { entryNumber: 153, name: 4 },
              { entryNumber: 201, name: 5 },
              { entryNumber: 151, name: 1 },
              { entryNumber: 126, name: 0 },
              { entryNumber: 126, name: 13 },
              { entryNumber: 201, name: 11 },
              { entryNumber: 167, name: 10 }
            ],
            evolutionChain: 61,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'pinsir',
            pokedexNumbers: [
              { entryNumber: 174, name: 9 },
              { entryNumber: 280, name: 8 },
              { entryNumber: 146, name: 7 },
              { entryNumber: 113, name: 4 },
              { entryNumber: 167, name: 2 },
              { entryNumber: 112, name: 1 },
              { entryNumber: 127, name: 0 },
              { entryNumber: 127, name: 13 },
              { entryNumber: 211, name: 11 },
              { entryNumber: 175, name: 10 }
            ],
            evolutionChain: 62,
            types: [12],
            generation: 'Generation I'
          },
          {
            name: 'pinsir-mega',
            pokedexNumbers: [
              { entryNumber: 174, name: 9 },
              { entryNumber: 280, name: 8 },
              { entryNumber: 146, name: 7 },
              { entryNumber: 113, name: 4 },
              { entryNumber: 167, name: 2 },
              { entryNumber: 112, name: 1 },
              { entryNumber: 127, name: 0 },
              { entryNumber: 127, name: 13 }
            ],
            evolutionChain: 62,
            types: [12, 4],
            generation: 'Generation VII'
          },
          {
            name: 'tauros',
            pokedexNumbers: [
              { entryNumber: 275, name: 8 },
              { entryNumber: 150, name: 4 },
              { entryNumber: 148, name: 1 },
              { entryNumber: 128, name: 0 },
              { entryNumber: 128, name: 13 },
              { entryNumber: 170, name: 11 },
              { entryNumber: 137, name: 10 }
            ],
            evolutionChain: 63,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'magikarp',
            pokedexNumbers: [
              { entryNumber: 53, name: 9 },
              { entryNumber: 49, name: 8 },
              { entryNumber: 76, name: 4 },
              { entryNumber: 23, name: 5 },
              { entryNumber: 23, name: 3 },
              { entryNumber: 52, name: 2 },
              { entryNumber: 76, name: 1 },
              { entryNumber: 129, name: 0 },
              { entryNumber: 129, name: 13 },
              { entryNumber: 111, name: 11 },
              { entryNumber: 91, name: 10 },
              { entryNumber: 144, name: 12 }
            ],
            evolutionChain: 64,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'gyarados',
            pokedexNumbers: [
              { entryNumber: 54, name: 9 },
              { entryNumber: 50, name: 8 },
              { entryNumber: 77, name: 4 },
              { entryNumber: 24, name: 5 },
              { entryNumber: 24, name: 3 },
              { entryNumber: 53, name: 2 },
              { entryNumber: 77, name: 1 },
              { entryNumber: 130, name: 0 },
              { entryNumber: 130, name: 13 },
              { entryNumber: 112, name: 11 },
              { entryNumber: 92, name: 10 },
              { entryNumber: 145, name: 12 }
            ],
            evolutionChain: 64,
            types: [3, 4],
            generation: 'Generation I'
          },
          {
            name: 'gyarados-mega',
            pokedexNumbers: [
              { entryNumber: 54, name: 9 },
              { entryNumber: 50, name: 8 },
              { entryNumber: 77, name: 4 },
              { entryNumber: 24, name: 5 },
              { entryNumber: 24, name: 3 },
              { entryNumber: 53, name: 2 },
              { entryNumber: 77, name: 1 },
              { entryNumber: 130, name: 0 },
              { entryNumber: 130, name: 13 }
            ],
            evolutionChain: 64,
            types: [3, 15],
            generation: 'Generation VII'
          },
          {
            name: 'lapras',
            pokedexNumbers: [
              { entryNumber: 300, name: 8 },
              { entryNumber: 242, name: 7 },
              { entryNumber: 224, name: 4 },
              { entryNumber: 219, name: 1 },
              { entryNumber: 131, name: 0 },
              { entryNumber: 131, name: 13 },
              { entryNumber: 353, name: 11 },
              { entryNumber: 268, name: 10 },
              { entryNumber: 361, name: 12 }
            ],
            evolutionChain: 65,
            types: [3, 11],
            generation: 'Generation I'
          },
          {
            name: 'ditto',
            pokedexNumbers: [
              { entryNumber: 441, name: 8 },
              { entryNumber: 261, name: 7 },
              { entryNumber: 92, name: 4 },
              { entryNumber: 92, name: 1 },
              { entryNumber: 132, name: 0 },
              { entryNumber: 132, name: 13 },
              { entryNumber: 271, name: 11 },
              { entryNumber: 209, name: 10 },
              { entryNumber: 373, name: 12 }
            ],
            evolutionChain: 66,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'eevee',
            pokedexNumbers: [
              { entryNumber: 227, name: 8 },
              { entryNumber: 91, name: 7 },
              { entryNumber: 184, name: 4 },
              { entryNumber: 163, name: 5 },
              { entryNumber: 180, name: 1 },
              { entryNumber: 133, name: 0 },
              { entryNumber: 133, name: 13 },
              { entryNumber: 153, name: 11 },
              { entryNumber: 123, name: 10 },
              { entryNumber: 196, name: 12 }
            ],
            evolutionChain: 67,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'vaporeon',
            pokedexNumbers: [
              { entryNumber: 228, name: 8 },
              { entryNumber: 92, name: 7 },
              { entryNumber: 185, name: 4 },
              { entryNumber: 164, name: 5 },
              { entryNumber: 181, name: 1 },
              { entryNumber: 134, name: 0 },
              { entryNumber: 134, name: 13 },
              { entryNumber: 154, name: 11 },
              { entryNumber: 124, name: 10 },
              { entryNumber: 197, name: 12 }
            ],
            evolutionChain: 67,
            types: [3],
            generation: 'Generation I'
          },
          {
            name: 'jolteon',
            pokedexNumbers: [
              { entryNumber: 229, name: 8 },
              { entryNumber: 93, name: 7 },
              { entryNumber: 186, name: 4 },
              { entryNumber: 165, name: 5 },
              { entryNumber: 182, name: 1 },
              { entryNumber: 135, name: 0 },
              { entryNumber: 135, name: 13 },
              { entryNumber: 155, name: 11 },
              { entryNumber: 125, name: 10 },
              { entryNumber: 198, name: 12 }
            ],
            evolutionChain: 67,
            types: [7],
            generation: 'Generation I'
          },
          {
            name: 'flareon',
            pokedexNumbers: [
              { entryNumber: 230, name: 8 },
              { entryNumber: 94, name: 7 },
              { entryNumber: 187, name: 4 },
              { entryNumber: 166, name: 5 },
              { entryNumber: 183, name: 1 },
              { entryNumber: 136, name: 0 },
              { entryNumber: 136, name: 13 },
              { entryNumber: 156, name: 11 },
              { entryNumber: 126, name: 10 },
              { entryNumber: 199, name: 12 }
            ],
            evolutionChain: 67,
            types: [1],
            generation: 'Generation I'
          },
          {
            name: 'porygon',
            pokedexNumbers: [
              { entryNumber: 220, name: 4 },
              { entryNumber: 192, name: 5 },
              { entryNumber: 215, name: 1 },
              { entryNumber: 137, name: 0 },
              { entryNumber: 137, name: 13 },
              { entryNumber: 281, name: 11 },
              { entryNumber: 217, name: 10 }
            ],
            evolutionChain: 68,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'omanyte',
            pokedexNumbers: [
              { entryNumber: 225, name: 4 },
              { entryNumber: 220, name: 1 },
              { entryNumber: 138, name: 0 },
              { entryNumber: 138, name: 13 },
              { entryNumber: 227, name: 11 }
            ],
            evolutionChain: 69,
            types: [10, 3],
            generation: 'Generation I'
          },
          {
            name: 'omastar',
            pokedexNumbers: [
              { entryNumber: 226, name: 4 },
              { entryNumber: 221, name: 1 },
              { entryNumber: 139, name: 0 },
              { entryNumber: 139, name: 13 },
              { entryNumber: 228, name: 11 }
            ],
            evolutionChain: 69,
            types: [10, 3],
            generation: 'Generation I'
          },
          {
            name: 'kabuto',
            pokedexNumbers: [
              { entryNumber: 227, name: 4 },
              { entryNumber: 222, name: 1 },
              { entryNumber: 140, name: 0 },
              { entryNumber: 140, name: 13 },
              { entryNumber: 229, name: 11 }
            ],
            evolutionChain: 70,
            types: [10, 3],
            generation: 'Generation I'
          },
          {
            name: 'kabutops',
            pokedexNumbers: [
              { entryNumber: 228, name: 4 },
              { entryNumber: 223, name: 1 },
              { entryNumber: 141, name: 0 },
              { entryNumber: 141, name: 13 },
              { entryNumber: 230, name: 11 }
            ],
            evolutionChain: 70,
            types: [10, 3],
            generation: 'Generation I'
          },
          {
            name: 'aerodactyl',
            pokedexNumbers: [
              { entryNumber: 218, name: 8 },
              { entryNumber: 229, name: 4 },
              { entryNumber: 224, name: 1 },
              { entryNumber: 142, name: 0 },
              { entryNumber: 142, name: 13 },
              { entryNumber: 382, name: 11 },
              { entryNumber: 284, name: 10 }
            ],
            evolutionChain: 71,
            types: [10, 4],
            generation: 'Generation I'
          },
          {
            name: 'aerodactyl-mega',
            pokedexNumbers: [
              { entryNumber: 218, name: 8 },
              { entryNumber: 229, name: 4 },
              { entryNumber: 224, name: 1 },
              { entryNumber: 142, name: 0 },
              { entryNumber: 142, name: 13 }
            ],
            evolutionChain: 71,
            types: [10, 4],
            generation: 'Generation VII'
          },
          {
            name: 'snorlax',
            pokedexNumbers: [
              { entryNumber: 139, name: 8 },
              { entryNumber: 230, name: 4 },
              { entryNumber: 113, name: 5 },
              { entryNumber: 113, name: 3 },
              { entryNumber: 225, name: 1 },
              { entryNumber: 143, name: 0 },
              { entryNumber: 143, name: 13 },
              { entryNumber: 43, name: 11 },
              { entryNumber: 36, name: 10 },
              { entryNumber: 261, name: 12 }
            ],
            evolutionChain: 72,
            types: [0],
            generation: 'Generation I'
          },
          {
            name: 'articuno',
            pokedexNumbers: [
              { entryNumber: 301, name: 8 },
              { entryNumber: 240, name: 4 },
              { entryNumber: 235, name: 1 },
              { entryNumber: 144, name: 0 },
              { entryNumber: 144, name: 13 }
            ],
            evolutionChain: 73,
            types: [11, 4],
            generation: 'Generation I'
          },
          {
            name: 'zapdos',
            pokedexNumbers: [
              { entryNumber: 302, name: 8 },
              { entryNumber: 241, name: 4 },
              { entryNumber: 236, name: 1 },
              { entryNumber: 145, name: 0 },
              { entryNumber: 145, name: 13 }
            ],
            evolutionChain: 74,
            types: [7, 4],
            generation: 'Generation I'
          },
          {
            name: 'moltres',
            pokedexNumbers: [
              { entryNumber: 303, name: 8 },
              { entryNumber: 242, name: 4 },
              { entryNumber: 237, name: 1 },
              { entryNumber: 146, name: 0 },
              { entryNumber: 146, name: 13 }
            ],
            evolutionChain: 75,
            types: [1, 4],
            generation: 'Generation I'
          },
          {
            name: 'dratini',
            pokedexNumbers: [
              { entryNumber: 448, name: 8 },
              { entryNumber: 246, name: 4 },
              { entryNumber: 241, name: 1 },
              { entryNumber: 147, name: 0 },
              { entryNumber: 147, name: 13 },
              { entryNumber: 379, name: 11 },
              { entryNumber: 281, name: 10 }
            ],
            evolutionChain: 76,
            types: [13],
            generation: 'Generation I'
          },
          {
            name: 'dragonair',
            pokedexNumbers: [
              { entryNumber: 449, name: 8 },
              { entryNumber: 247, name: 4 },
              { entryNumber: 242, name: 1 },
              { entryNumber: 148, name: 0 },
              { entryNumber: 148, name: 13 },
              { entryNumber: 380, name: 11 },
              { entryNumber: 282, name: 10 }
            ],
            evolutionChain: 76,
            types: [13],
            generation: 'Generation I'
          },
          {
            name: 'dragonite',
            pokedexNumbers: [
              { entryNumber: 450, name: 8 },
              { entryNumber: 248, name: 4 },
              { entryNumber: 243, name: 1 },
              { entryNumber: 149, name: 0 },
              { entryNumber: 149, name: 13 },
              { entryNumber: 381, name: 11 },
              { entryNumber: 283, name: 10 }
            ],
            evolutionChain: 76,
            types: [13, 4],
            generation: 'Generation I'
          },
          {
            name: 'mewtwo',
            pokedexNumbers: [
              { entryNumber: 454, name: 8 },
              { entryNumber: 254, name: 4 },
              { entryNumber: 249, name: 1 },
              { entryNumber: 150, name: 0 },
              { entryNumber: 150, name: 13 }
            ],
            evolutionChain: 77,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'mewtwo-mega-x',
            pokedexNumbers: [
              { entryNumber: 454, name: 8 },
              { entryNumber: 254, name: 4 },
              { entryNumber: 249, name: 1 },
              { entryNumber: 150, name: 0 },
              { entryNumber: 150, name: 13 }
            ],
            evolutionChain: 77,
            types: [9, 2],
            generation: 'Generation VII'
          },
          {
            name: 'mewtwo-mega-y',
            pokedexNumbers: [
              { entryNumber: 454, name: 8 },
              { entryNumber: 254, name: 4 },
              { entryNumber: 249, name: 1 },
              { entryNumber: 150, name: 0 },
              { entryNumber: 150, name: 13 }
            ],
            evolutionChain: 77,
            types: [9],
            generation: 'Generation VII'
          },
          {
            name: 'mew',
            pokedexNumbers: [
              { entryNumber: 255, name: 4 },
              { entryNumber: 250, name: 1 },
              { entryNumber: 151, name: 0 },
              { entryNumber: 151, name: 13 }
            ],
            evolutionChain: 78,
            types: [9],
            generation: 'Generation I'
          },
          {
            name: 'chikorita',
            pokedexNumbers: [
              { entryNumber: 1, name: 4 },
              { entryNumber: 1, name: 1 },
              { entryNumber: 152, name: 13 }
            ],
            evolutionChain: 79,
            types: [5],
            generation: 'Generation II'
          },
          {
            name: 'bayleef',
            pokedexNumbers: [
              { entryNumber: 2, name: 4 },
              { entryNumber: 2, name: 1 },
              { entryNumber: 153, name: 13 }
            ],
            evolutionChain: 79,
            types: [5],
            generation: 'Generation II'
          },
          {
            name: 'meganium',
            pokedexNumbers: [
              { entryNumber: 3, name: 4 },
              { entryNumber: 3, name: 1 },
              { entryNumber: 154, name: 13 }
            ],
            evolutionChain: 79,
            types: [5],
            generation: 'Generation II'
          },
          {
            name: 'cyndaquil',
            pokedexNumbers: [
              { entryNumber: 4, name: 4 },
              { entryNumber: 4, name: 1 },
              { entryNumber: 155, name: 13 }
            ],
            evolutionChain: 80,
            types: [1],
            generation: 'Generation II'
          },
          {
            name: 'quilava',
            pokedexNumbers: [
              { entryNumber: 5, name: 4 },
              { entryNumber: 5, name: 1 },
              { entryNumber: 156, name: 13 }
            ],
            evolutionChain: 80,
            types: [1],
            generation: 'Generation II'
          },
          {
            name: 'typhlosion',
            pokedexNumbers: [
              { entryNumber: 6, name: 4 },
              { entryNumber: 6, name: 1 },
              { entryNumber: 157, name: 13 }
            ],
            evolutionChain: 80,
            types: [1],
            generation: 'Generation II'
          },
          {
            name: 'totodile',
            pokedexNumbers: [
              { entryNumber: 7, name: 4 },
              { entryNumber: 7, name: 1 },
              { entryNumber: 158, name: 13 }
            ],
            evolutionChain: 81,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'croconaw',
            pokedexNumbers: [
              { entryNumber: 8, name: 4 },
              { entryNumber: 8, name: 1 },
              { entryNumber: 159, name: 13 }
            ],
            evolutionChain: 81,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'feraligatr',
            pokedexNumbers: [
              { entryNumber: 9, name: 4 },
              { entryNumber: 9, name: 1 },
              { entryNumber: 160, name: 13 }
            ],
            evolutionChain: 81,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'sentret',
            pokedexNumbers: [
              { entryNumber: 109, name: 8 },
              { entryNumber: 19, name: 4 },
              { entryNumber: 19, name: 1 },
              { entryNumber: 161, name: 13 }
            ],
            evolutionChain: 82,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'furret',
            pokedexNumbers: [
              { entryNumber: 110, name: 8 },
              { entryNumber: 20, name: 4 },
              { entryNumber: 20, name: 1 },
              { entryNumber: 162, name: 13 }
            ],
            evolutionChain: 82,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'hoothoot',
            pokedexNumbers: [
              { entryNumber: 420, name: 8 },
              { entryNumber: 15, name: 4 },
              { entryNumber: 106, name: 5 },
              { entryNumber: 106, name: 3 },
              { entryNumber: 15, name: 1 },
              { entryNumber: 163, name: 13 },
              { entryNumber: 212, name: 11 },
              { entryNumber: 19, name: 12 }
            ],
            evolutionChain: 83,
            types: [0, 4],
            generation: 'Generation II'
          },
          {
            name: 'noctowl',
            pokedexNumbers: [
              { entryNumber: 421, name: 8 },
              { entryNumber: 16, name: 4 },
              { entryNumber: 107, name: 5 },
              { entryNumber: 107, name: 3 },
              { entryNumber: 16, name: 1 },
              { entryNumber: 164, name: 13 },
              { entryNumber: 213, name: 11 },
              { entryNumber: 20, name: 12 }
            ],
            evolutionChain: 83,
            types: [0, 4],
            generation: 'Generation II'
          },
          {
            name: 'ledyba',
            pokedexNumbers: [
              { entryNumber: 74, name: 8 },
              { entryNumber: 30, name: 4 },
              { entryNumber: 30, name: 1 },
              { entryNumber: 165, name: 13 },
              { entryNumber: 20, name: 11 },
              { entryNumber: 20, name: 10 }
            ],
            evolutionChain: 84,
            types: [12, 4],
            generation: 'Generation II'
          },
          {
            name: 'ledian',
            pokedexNumbers: [
              { entryNumber: 75, name: 8 },
              { entryNumber: 31, name: 4 },
              { entryNumber: 31, name: 1 },
              { entryNumber: 166, name: 13 },
              { entryNumber: 21, name: 11 },
              { entryNumber: 21, name: 10 }
            ],
            evolutionChain: 84,
            types: [12, 4],
            generation: 'Generation II'
          },
          {
            name: 'spinarak',
            pokedexNumbers: [
              { entryNumber: 410, name: 8 },
              { entryNumber: 32, name: 4 },
              { entryNumber: 32, name: 1 },
              { entryNumber: 167, name: 13 },
              { entryNumber: 22, name: 11 },
              { entryNumber: 22, name: 10 }
            ],
            evolutionChain: 85,
            types: [12, 6],
            generation: 'Generation II'
          },
          {
            name: 'ariados',
            pokedexNumbers: [
              { entryNumber: 411, name: 8 },
              { entryNumber: 33, name: 4 },
              { entryNumber: 33, name: 1 },
              { entryNumber: 168, name: 13 },
              { entryNumber: 23, name: 11 },
              { entryNumber: 23, name: 10 }
            ],
            evolutionChain: 85,
            types: [12, 6],
            generation: 'Generation II'
          },
          {
            name: 'crobat',
            pokedexNumbers: [
              { entryNumber: 67, name: 9 },
              { entryNumber: 147, name: 8 },
              { entryNumber: 63, name: 7 },
              { entryNumber: 39, name: 4 },
              { entryNumber: 30, name: 5 },
              { entryNumber: 30, name: 3 },
              { entryNumber: 65, name: 2 },
              { entryNumber: 39, name: 1 },
              { entryNumber: 169, name: 13 },
              { entryNumber: 82, name: 11 },
              { entryNumber: 70, name: 10 }
            ],
            evolutionChain: 17,
            types: [6, 4],
            generation: 'Generation II'
          },
          {
            name: 'chinchou',
            pokedexNumbers: [
              { entryNumber: 190, name: 9 },
              { entryNumber: 297, name: 8 },
              { entryNumber: 176, name: 4 },
              { entryNumber: 181, name: 2 },
              { entryNumber: 174, name: 1 },
              { entryNumber: 170, name: 13 },
              { entryNumber: 257, name: 11 },
              { entryNumber: 201, name: 10 },
              { entryNumber: 220, name: 12 }
            ],
            evolutionChain: 86,
            types: [3, 7],
            generation: 'Generation II'
          },
          {
            name: 'lanturn',
            pokedexNumbers: [
              { entryNumber: 191, name: 9 },
              { entryNumber: 298, name: 8 },
              { entryNumber: 177, name: 4 },
              { entryNumber: 182, name: 2 },
              { entryNumber: 175, name: 1 },
              { entryNumber: 171, name: 13 },
              { entryNumber: 258, name: 11 },
              { entryNumber: 202, name: 10 },
              { entryNumber: 221, name: 12 }
            ],
            evolutionChain: 86,
            types: [3, 7],
            generation: 'Generation II'
          },
          {
            name: 'pichu',
            pokedexNumbers: [
              { entryNumber: 162, name: 9 },
              { entryNumber: 35, name: 8 },
              { entryNumber: 21, name: 4 },
              { entryNumber: 103, name: 5 },
              { entryNumber: 103, name: 3 },
              { entryNumber: 155, name: 2 },
              { entryNumber: 21, name: 1 },
              { entryNumber: 172, name: 13 },
              { entryNumber: 31, name: 11 },
              { entryNumber: 24, name: 10 },
              { entryNumber: 193, name: 12 }
            ],
            evolutionChain: 10,
            types: [7],
            generation: 'Generation II'
          },
          {
            name: 'cleffa',
            pokedexNumbers: [
              { entryNumber: 88, name: 7 },
              { entryNumber: 40, name: 4 },
              { entryNumber: 99, name: 5 },
              { entryNumber: 99, name: 3 },
              { entryNumber: 40, name: 1 },
              { entryNumber: 173, name: 13 },
              { entryNumber: 272, name: 11 },
              { entryNumber: 210, name: 10 },
              { entryNumber: 254, name: 12 }
            ],
            evolutionChain: 14,
            types: [17],
            generation: 'Generation II'
          },
          {
            name: 'igglybuff',
            pokedexNumbers: [
              { entryNumber: 142, name: 9 },
              { entryNumber: 422, name: 8 },
              { entryNumber: 281, name: 7 },
              { entryNumber: 43, name: 4 },
              { entryNumber: 137, name: 2 },
              { entryNumber: 43, name: 1 },
              { entryNumber: 174, name: 13 },
              { entryNumber: 167, name: 11 },
              { entryNumber: 134, name: 10 }
            ],
            evolutionChain: 16,
            types: [0, 17],
            generation: 'Generation II'
          },
          {
            name: 'togepi',
            pokedexNumbers: [
              { entryNumber: 46, name: 4 },
              { entryNumber: 173, name: 5 },
              { entryNumber: 46, name: 1 },
              { entryNumber: 175, name: 13 },
              { entryNumber: 257, name: 12 }
            ],
            evolutionChain: 87,
            types: [17],
            generation: 'Generation II'
          },
          {
            name: 'togetic',
            pokedexNumbers: [
              { entryNumber: 47, name: 4 },
              { entryNumber: 174, name: 5 },
              { entryNumber: 47, name: 1 },
              { entryNumber: 176, name: 13 },
              { entryNumber: 258, name: 12 }
            ],
            evolutionChain: 87,
            types: [17, 4],
            generation: 'Generation II'
          },
          {
            name: 'natu',
            pokedexNumbers: [
              { entryNumber: 169, name: 9 },
              { entryNumber: 161, name: 4 },
              { entryNumber: 162, name: 2 },
              { entryNumber: 159, name: 1 },
              { entryNumber: 177, name: 13 },
              { entryNumber: 252, name: 11 },
              { entryNumber: 92, name: 12 }
            ],
            evolutionChain: 88,
            types: [9, 4],
            generation: 'Generation II'
          },
          {
            name: 'xatu',
            pokedexNumbers: [
              { entryNumber: 170, name: 9 },
              { entryNumber: 162, name: 4 },
              { entryNumber: 163, name: 2 },
              { entryNumber: 160, name: 1 },
              { entryNumber: 178, name: 13 },
              { entryNumber: 253, name: 11 },
              { entryNumber: 93, name: 12 }
            ],
            evolutionChain: 88,
            types: [9, 4],
            generation: 'Generation II'
          },
          {
            name: 'mareep',
            pokedexNumbers: [
              { entryNumber: 277, name: 8 },
              { entryNumber: 25, name: 7 },
              { entryNumber: 53, name: 4 },
              { entryNumber: 53, name: 1 },
              { entryNumber: 179, name: 13 },
              { entryNumber: 162, name: 11 }
            ],
            evolutionChain: 89,
            types: [7],
            generation: 'Generation II'
          },
          {
            name: 'flaaffy',
            pokedexNumbers: [
              { entryNumber: 278, name: 8 },
              { entryNumber: 26, name: 7 },
              { entryNumber: 54, name: 4 },
              { entryNumber: 54, name: 1 },
              { entryNumber: 180, name: 13 },
              { entryNumber: 163, name: 11 }
            ],
            evolutionChain: 89,
            types: [7],
            generation: 'Generation II'
          },
          {
            name: 'ampharos',
            pokedexNumbers: [
              { entryNumber: 279, name: 8 },
              { entryNumber: 27, name: 7 },
              { entryNumber: 55, name: 4 },
              { entryNumber: 55, name: 1 },
              { entryNumber: 181, name: 13 },
              { entryNumber: 164, name: 11 }
            ],
            evolutionChain: 89,
            types: [7],
            generation: 'Generation II'
          },
          {
            name: 'ampharos-mega',
            pokedexNumbers: [
              { entryNumber: 279, name: 8 },
              { entryNumber: 27, name: 7 },
              { entryNumber: 55, name: 4 },
              { entryNumber: 55, name: 1 },
              { entryNumber: 181, name: 13 }
            ],
            evolutionChain: 89,
            types: [7, 13],
            generation: 'Generation VII'
          },
          {
            name: 'bellossom',
            pokedexNumbers: [
              { entryNumber: 94, name: 9 },
              { entryNumber: 108, name: 8 },
              { entryNumber: 86, name: 4 },
              { entryNumber: 91, name: 2 },
              { entryNumber: 86, name: 1 },
              { entryNumber: 182, name: 13 },
              { entryNumber: 58, name: 12 }
            ],
            evolutionChain: 18,
            types: [5],
            generation: 'Generation II'
          },
          {
            name: 'marill',
            pokedexNumbers: [
              { entryNumber: 56, name: 9 },
              { entryNumber: 42, name: 8 },
              { entryNumber: 31, name: 7 },
              { entryNumber: 132, name: 4 },
              { entryNumber: 125, name: 5 },
              { entryNumber: 125, name: 3 },
              { entryNumber: 55, name: 2 },
              { entryNumber: 130, name: 1 },
              { entryNumber: 183, name: 13 }
            ],
            evolutionChain: 90,
            types: [3, 17],
            generation: 'Generation II'
          },
          {
            name: 'azumarill',
            pokedexNumbers: [
              { entryNumber: 57, name: 9 },
              { entryNumber: 43, name: 8 },
              { entryNumber: 32, name: 7 },
              { entryNumber: 133, name: 4 },
              { entryNumber: 126, name: 5 },
              { entryNumber: 126, name: 3 },
              { entryNumber: 56, name: 2 },
              { entryNumber: 131, name: 1 },
              { entryNumber: 184, name: 13 }
            ],
            evolutionChain: 90,
            types: [3, 17],
            generation: 'Generation II'
          },
          {
            name: 'sudowoodo',
            pokedexNumbers: [
              { entryNumber: 433, name: 8 },
              { entryNumber: 107, name: 4 },
              { entryNumber: 93, name: 5 },
              { entryNumber: 93, name: 3 },
              { entryNumber: 106, name: 1 },
              { entryNumber: 185, name: 13 },
              { entryNumber: 38, name: 11 },
              { entryNumber: 31, name: 10 },
              { entryNumber: 253, name: 12 }
            ],
            evolutionChain: 91,
            types: [10],
            generation: 'Generation II'
          },
          {
            name: 'politoed',
            pokedexNumbers: [
              { entryNumber: 339, name: 8 },
              { entryNumber: 75, name: 4 },
              { entryNumber: 75, name: 1 },
              { entryNumber: 186, name: 13 },
              { entryNumber: 185, name: 11 },
              { entryNumber: 152, name: 10 }
            ],
            evolutionChain: 26,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'hoppip',
            pokedexNumbers: [
              { entryNumber: 135, name: 8 },
              { entryNumber: 67, name: 4 },
              { entryNumber: 67, name: 1 },
              { entryNumber: 187, name: 13 }
            ],
            evolutionChain: 92,
            types: [5, 4],
            generation: 'Generation II'
          },
          {
            name: 'skiploom',
            pokedexNumbers: [
              { entryNumber: 136, name: 8 },
              { entryNumber: 68, name: 4 },
              { entryNumber: 68, name: 1 },
              { entryNumber: 188, name: 13 }
            ],
            evolutionChain: 92,
            types: [5, 4],
            generation: 'Generation II'
          },
          {
            name: 'jumpluff',
            pokedexNumbers: [
              { entryNumber: 137, name: 8 },
              { entryNumber: 69, name: 4 },
              { entryNumber: 69, name: 1 },
              { entryNumber: 189, name: 13 }
            ],
            evolutionChain: 92,
            types: [5, 4],
            generation: 'Generation II'
          },
          {
            name: 'aipom',
            pokedexNumbers: [
              { entryNumber: 123, name: 4 },
              { entryNumber: 63, name: 5 },
              { entryNumber: 63, name: 3 },
              { entryNumber: 122, name: 1 },
              { entryNumber: 190, name: 13 },
              { entryNumber: 368, name: 11 }
            ],
            evolutionChain: 93,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'sunkern',
            pokedexNumbers: [
              { entryNumber: 20, name: 7 },
              { entryNumber: 103, name: 4 },
              { entryNumber: 102, name: 1 },
              { entryNumber: 191, name: 13 }
            ],
            evolutionChain: 94,
            types: [5],
            generation: 'Generation II'
          },
          {
            name: 'sunflora',
            pokedexNumbers: [
              { entryNumber: 21, name: 7 },
              { entryNumber: 104, name: 4 },
              { entryNumber: 103, name: 1 },
              { entryNumber: 192, name: 13 }
            ],
            evolutionChain: 94,
            types: [5],
            generation: 'Generation II'
          },
          {
            name: 'yanma',
            pokedexNumbers: [
              { entryNumber: 237, name: 8 },
              { entryNumber: 286, name: 7 },
              { entryNumber: 101, name: 4 },
              { entryNumber: 183, name: 5 },
              { entryNumber: 101, name: 1 },
              { entryNumber: 193, name: 13 }
            ],
            evolutionChain: 95,
            types: [12, 4],
            generation: 'Generation II'
          },
          {
            name: 'wooper',
            pokedexNumbers: [
              { entryNumber: 320, name: 8 },
              { entryNumber: 56, name: 4 },
              { entryNumber: 117, name: 5 },
              { entryNumber: 117, name: 3 },
              { entryNumber: 56, name: 1 },
              { entryNumber: 194, name: 13 },
              { entryNumber: 100, name: 12 }
            ],
            evolutionChain: 96,
            types: [3, 8],
            generation: 'Generation II'
          },
          {
            name: 'quagsire',
            pokedexNumbers: [
              { entryNumber: 321, name: 8 },
              { entryNumber: 57, name: 4 },
              { entryNumber: 118, name: 5 },
              { entryNumber: 118, name: 3 },
              { entryNumber: 57, name: 1 },
              { entryNumber: 195, name: 13 },
              { entryNumber: 101, name: 12 }
            ],
            evolutionChain: 96,
            types: [3, 8],
            generation: 'Generation II'
          },
          {
            name: 'espeon',
            pokedexNumbers: [
              { entryNumber: 231, name: 8 },
              { entryNumber: 95, name: 7 },
              { entryNumber: 188, name: 4 },
              { entryNumber: 167, name: 5 },
              { entryNumber: 184, name: 1 },
              { entryNumber: 196, name: 13 },
              { entryNumber: 157, name: 11 },
              { entryNumber: 127, name: 10 },
              { entryNumber: 200, name: 12 }
            ],
            evolutionChain: 67,
            types: [9],
            generation: 'Generation II'
          },
          {
            name: 'umbreon',
            pokedexNumbers: [
              { entryNumber: 232, name: 8 },
              { entryNumber: 96, name: 7 },
              { entryNumber: 189, name: 4 },
              { entryNumber: 168, name: 5 },
              { entryNumber: 185, name: 1 },
              { entryNumber: 197, name: 13 },
              { entryNumber: 158, name: 11 },
              { entryNumber: 128, name: 10 },
              { entryNumber: 201, name: 12 }
            ],
            evolutionChain: 67,
            types: [15],
            generation: 'Generation II'
          },
          {
            name: 'murkrow',
            pokedexNumbers: [
              { entryNumber: 354, name: 8 },
              { entryNumber: 213, name: 4 },
              { entryNumber: 74, name: 5 },
              { entryNumber: 74, name: 3 },
              { entryNumber: 208, name: 1 },
              { entryNumber: 198, name: 13 },
              { entryNumber: 78, name: 11 },
              { entryNumber: 277, name: 10 }
            ],
            evolutionChain: 97,
            types: [15, 4],
            generation: 'Generation II'
          },
          {
            name: 'slowking',
            pokedexNumbers: [
              { entryNumber: 285, name: 8 },
              { entryNumber: 82, name: 4 },
              { entryNumber: 82, name: 1 },
              { entryNumber: 199, name: 13 },
              { entryNumber: 46, name: 11 },
              { entryNumber: 39, name: 10 }
            ],
            evolutionChain: 33,
            types: [3, 9],
            generation: 'Generation II'
          },
          {
            name: 'misdreavus',
            pokedexNumbers: [
              { entryNumber: 219, name: 4 },
              { entryNumber: 72, name: 5 },
              { entryNumber: 72, name: 3 },
              { entryNumber: 214, name: 1 },
              { entryNumber: 200, name: 13 },
              { entryNumber: 371, name: 11 },
              { entryNumber: 66, name: 10 }
            ],
            evolutionChain: 98,
            types: [14],
            generation: 'Generation II'
          },
          {
            name: 'unown',
            pokedexNumbers: [
              { entryNumber: 61, name: 4 },
              { entryNumber: 114, name: 5 },
              { entryNumber: 114, name: 3 },
              { entryNumber: 61, name: 1 },
              { entryNumber: 201, name: 13 }
            ],
            evolutionChain: 99,
            types: [9],
            generation: 'Generation II'
          },
          {
            name: 'wobbuffet',
            pokedexNumbers: [
              { entryNumber: 168, name: 9 },
              { entryNumber: 269, name: 8 },
              { entryNumber: 108, name: 4 },
              { entryNumber: 161, name: 2 },
              { entryNumber: 107, name: 1 },
              { entryNumber: 202, name: 13 },
              { entryNumber: 217, name: 12 }
            ],
            evolutionChain: 100,
            types: [9],
            generation: 'Generation II'
          },
          {
            name: 'girafarig',
            pokedexNumbers: [
              { entryNumber: 171, name: 9 },
              { entryNumber: 149, name: 4 },
              { entryNumber: 121, name: 5 },
              { entryNumber: 121, name: 3 },
              { entryNumber: 164, name: 2 },
              { entryNumber: 147, name: 1 },
              { entryNumber: 203, name: 13 }
            ],
            evolutionChain: 101,
            types: [0, 9],
            generation: 'Generation II'
          },
          {
            name: 'pineco',
            pokedexNumbers: [
              { entryNumber: 93, name: 4 },
              { entryNumber: 93, name: 1 },
              { entryNumber: 204, name: 13 },
              { entryNumber: 268, name: 11 }
            ],
            evolutionChain: 102,
            types: [12],
            generation: 'Generation II'
          },
          {
            name: 'forretress',
            pokedexNumbers: [
              { entryNumber: 94, name: 4 },
              { entryNumber: 94, name: 1 },
              { entryNumber: 205, name: 13 },
              { entryNumber: 269, name: 11 }
            ],
            evolutionChain: 102,
            types: [12, 16],
            generation: 'Generation II'
          },
          {
            name: 'dunsparce',
            pokedexNumbers: [
              { entryNumber: 40, name: 8 },
              { entryNumber: 35, name: 7 },
              { entryNumber: 52, name: 4 },
              { entryNumber: 52, name: 1 },
              { entryNumber: 206, name: 13 },
              { entryNumber: 63, name: 11 }
            ],
            evolutionChain: 103,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'gligar',
            pokedexNumbers: [
              { entryNumber: 418, name: 8 },
              { entryNumber: 221, name: 7 },
              { entryNumber: 193, name: 4 },
              { entryNumber: 153, name: 5 },
              { entryNumber: 189, name: 1 },
              { entryNumber: 207, name: 13 }
            ],
            evolutionChain: 104,
            types: [8, 4],
            generation: 'Generation II'
          },
          {
            name: 'steelix',
            pokedexNumbers: [
              { entryNumber: 204, name: 8 },
              { entryNumber: 72, name: 7 },
              { entryNumber: 63, name: 4 },
              { entryNumber: 35, name: 5 },
              { entryNumber: 35, name: 3 },
              { entryNumber: 63, name: 1 },
              { entryNumber: 208, name: 13 },
              { entryNumber: 179, name: 12 }
            ],
            evolutionChain: 41,
            types: [16, 8],
            generation: 'Generation II'
          },
          {
            name: 'steelix-mega',
            pokedexNumbers: [
              { entryNumber: 204, name: 8 },
              { entryNumber: 72, name: 7 },
              { entryNumber: 63, name: 4 },
              { entryNumber: 35, name: 5 },
              { entryNumber: 35, name: 3 },
              { entryNumber: 63, name: 1 },
              { entryNumber: 208, name: 13 }
            ],
            evolutionChain: 41,
            types: [16, 8],
            generation: 'Generation VII'
          },
          {
            name: 'snubbull',
            pokedexNumbers: [
              { entryNumber: 221, name: 8 },
              { entryNumber: 125, name: 4 },
              { entryNumber: 123, name: 1 },
              { entryNumber: 209, name: 13 },
              { entryNumber: 339, name: 11 },
              { entryNumber: 258, name: 10 }
            ],
            evolutionChain: 105,
            types: [17],
            generation: 'Generation II'
          },
          {
            name: 'granbull',
            pokedexNumbers: [
              { entryNumber: 222, name: 8 },
              { entryNumber: 126, name: 4 },
              { entryNumber: 124, name: 1 },
              { entryNumber: 210, name: 13 },
              { entryNumber: 340, name: 11 },
              { entryNumber: 259, name: 10 }
            ],
            evolutionChain: 105,
            types: [17],
            generation: 'Generation II'
          },
          {
            name: 'qwilfish',
            pokedexNumbers: [
              { entryNumber: 188, name: 8 },
              { entryNumber: 163, name: 4 },
              { entryNumber: 161, name: 1 },
              { entryNumber: 211, name: 13 },
              { entryNumber: 304, name: 12 }
            ],
            evolutionChain: 106,
            types: [3, 6],
            generation: 'Generation II'
          },
          {
            name: 'scizor',
            pokedexNumbers: [
              { entryNumber: 440, name: 8 },
              { entryNumber: 112, name: 4 },
              { entryNumber: 196, name: 5 },
              { entryNumber: 111, name: 1 },
              { entryNumber: 212, name: 13 },
              { entryNumber: 366, name: 11 },
              { entryNumber: 276, name: 10 }
            ],
            evolutionChain: 58,
            types: [12, 16],
            generation: 'Generation II'
          },
          {
            name: 'scizor-mega',
            pokedexNumbers: [
              { entryNumber: 440, name: 8 },
              { entryNumber: 112, name: 4 },
              { entryNumber: 196, name: 5 },
              { entryNumber: 111, name: 1 },
              { entryNumber: 212, name: 13 }
            ],
            evolutionChain: 58,
            types: [12, 16],
            generation: 'Generation VII'
          },
          {
            name: 'shuckle',
            pokedexNumbers: [
              { entryNumber: 317, name: 8 },
              { entryNumber: 232, name: 7 },
              { entryNumber: 168, name: 4 },
              { entryNumber: 166, name: 1 },
              { entryNumber: 213, name: 13 },
              { entryNumber: 227, name: 12 }
            ],
            evolutionChain: 107,
            types: [12, 10],
            generation: 'Generation II'
          },
          {
            name: 'heracross',
            pokedexNumbers: [
              { entryNumber: 175, name: 9 },
              { entryNumber: 281, name: 8 },
              { entryNumber: 145, name: 7 },
              { entryNumber: 114, name: 4 },
              { entryNumber: 62, name: 5 },
              { entryNumber: 62, name: 3 },
              { entryNumber: 168, name: 2 },
              { entryNumber: 113, name: 1 },
              { entryNumber: 214, name: 13 },
              { entryNumber: 367, name: 11 }
            ],
            evolutionChain: 108,
            types: [12, 2],
            generation: 'Generation II'
          },
          {
            name: 'heracross-mega',
            pokedexNumbers: [
              { entryNumber: 175, name: 9 },
              { entryNumber: 281, name: 8 },
              { entryNumber: 145, name: 7 },
              { entryNumber: 114, name: 4 },
              { entryNumber: 62, name: 5 },
              { entryNumber: 62, name: 3 },
              { entryNumber: 168, name: 2 },
              { entryNumber: 113, name: 1 },
              { entryNumber: 214, name: 13 }
            ],
            evolutionChain: 108,
            types: [12, 2],
            generation: 'Generation VII'
          },
          {
            name: 'sneasel',
            pokedexNumbers: [
              { entryNumber: 394, name: 8 },
              { entryNumber: 252, name: 7 },
              { entryNumber: 218, name: 4 },
              { entryNumber: 144, name: 5 },
              { entryNumber: 144, name: 3 },
              { entryNumber: 213, name: 1 },
              { entryNumber: 215, name: 13 },
              { entryNumber: 325, name: 11 },
              { entryNumber: 249, name: 10 },
              { entryNumber: 292, name: 12 }
            ],
            evolutionChain: 109,
            types: [15, 11],
            generation: 'Generation II'
          },
          {
            name: 'teddiursa',
            pokedexNumbers: [
              { entryNumber: 435, name: 8 },
              { entryNumber: 198, name: 4 },
              { entryNumber: 193, name: 1 },
              { entryNumber: 216, name: 13 }
            ],
            evolutionChain: 110,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'ursaring',
            pokedexNumbers: [
              { entryNumber: 436, name: 8 },
              { entryNumber: 199, name: 4 },
              { entryNumber: 194, name: 1 },
              { entryNumber: 217, name: 13 }
            ],
            evolutionChain: 110,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'slugma',
            pokedexNumbers: [
              { entryNumber: 108, name: 9 },
              { entryNumber: 315, name: 8 },
              { entryNumber: 216, name: 4 },
              { entryNumber: 103, name: 2 },
              { entryNumber: 211, name: 1 },
              { entryNumber: 218, name: 13 }
            ],
            evolutionChain: 111,
            types: [1],
            generation: 'Generation II'
          },
          {
            name: 'magcargo',
            pokedexNumbers: [
              { entryNumber: 109, name: 9 },
              { entryNumber: 316, name: 8 },
              { entryNumber: 217, name: 4 },
              { entryNumber: 104, name: 2 },
              { entryNumber: 212, name: 1 },
              { entryNumber: 219, name: 13 }
            ],
            evolutionChain: 111,
            types: [1, 10],
            generation: 'Generation II'
          },
          {
            name: 'swinub',
            pokedexNumbers: [
              { entryNumber: 379, name: 8 },
              { entryNumber: 258, name: 7 },
              { entryNumber: 195, name: 4 },
              { entryNumber: 203, name: 5 },
              { entryNumber: 191, name: 1 },
              { entryNumber: 220, name: 13 },
              { entryNumber: 75, name: 12 }
            ],
            evolutionChain: 112,
            types: [11, 8],
            generation: 'Generation II'
          },
          {
            name: 'piloswine',
            pokedexNumbers: [
              { entryNumber: 380, name: 8 },
              { entryNumber: 259, name: 7 },
              { entryNumber: 196, name: 4 },
              { entryNumber: 204, name: 5 },
              { entryNumber: 192, name: 1 },
              { entryNumber: 221, name: 13 },
              { entryNumber: 76, name: 12 }
            ],
            evolutionChain: 112,
            types: [11, 8],
            generation: 'Generation II'
          },
          {
            name: 'corsola',
            pokedexNumbers: [
              { entryNumber: 189, name: 9 },
              { entryNumber: 296, name: 8 },
              { entryNumber: 237, name: 7 },
              { entryNumber: 173, name: 4 },
              { entryNumber: 180, name: 2 },
              { entryNumber: 171, name: 1 },
              { entryNumber: 222, name: 13 },
              { entryNumber: 135, name: 11 },
              { entryNumber: 112, name: 10 }
            ],
            evolutionChain: 113,
            types: [3, 10],
            generation: 'Generation II'
          },
          {
            name: 'corsola-galar',
            pokedexNumbers: [
              { entryNumber: 189, name: 9 },
              { entryNumber: 296, name: 8 },
              { entryNumber: 237, name: 7 },
              { entryNumber: 173, name: 4 },
              { entryNumber: 180, name: 2 },
              { entryNumber: 171, name: 1 },
              { entryNumber: 222, name: 13 },
              { entryNumber: 135, name: 11 },
              { entryNumber: 112, name: 10 },
              { entryNumber: 236, name: 12 }
            ],
            evolutionChain: 113,
            types: [14],
            generation: 'Generation VIII'
          },
          {
            name: 'remoraid',
            pokedexNumbers: [
              { entryNumber: 294, name: 8 },
              { entryNumber: 235, name: 7 },
              { entryNumber: 174, name: 4 },
              { entryNumber: 132, name: 5 },
              { entryNumber: 132, name: 3 },
              { entryNumber: 172, name: 1 },
              { entryNumber: 223, name: 13 },
              { entryNumber: 143, name: 11 },
              { entryNumber: 148, name: 12 }
            ],
            evolutionChain: 114,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'octillery',
            pokedexNumbers: [
              { entryNumber: 295, name: 8 },
              { entryNumber: 236, name: 7 },
              { entryNumber: 175, name: 4 },
              { entryNumber: 133, name: 5 },
              { entryNumber: 133, name: 3 },
              { entryNumber: 173, name: 1 },
              { entryNumber: 224, name: 13 },
              { entryNumber: 144, name: 11 },
              { entryNumber: 149, name: 12 }
            ],
            evolutionChain: 114,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'delibird',
            pokedexNumbers: [
              { entryNumber: 393, name: 8 },
              { entryNumber: 254, name: 7 },
              { entryNumber: 194, name: 4 },
              { entryNumber: 190, name: 1 },
              { entryNumber: 225, name: 13 },
              { entryNumber: 95, name: 11 },
              { entryNumber: 81, name: 10 },
              { entryNumber: 78, name: 12 }
            ],
            evolutionChain: 115,
            types: [11, 4],
            generation: 'Generation II'
          },
          {
            name: 'mantine',
            pokedexNumbers: [
              { entryNumber: 290, name: 8 },
              { entryNumber: 234, name: 7 },
              { entryNumber: 202, name: 4 },
              { entryNumber: 141, name: 5 },
              { entryNumber: 141, name: 3 },
              { entryNumber: 197, name: 1 },
              { entryNumber: 226, name: 13 },
              { entryNumber: 146, name: 11 },
              { entryNumber: 355, name: 12 }
            ],
            evolutionChain: 116,
            types: [3, 4],
            generation: 'Generation II'
          },
          {
            name: 'skarmory',
            pokedexNumbers: [
              { entryNumber: 120, name: 9 },
              { entryNumber: 415, name: 8 },
              { entryNumber: 203, name: 7 },
              { entryNumber: 203, name: 4 },
              { entryNumber: 115, name: 2 },
              { entryNumber: 198, name: 1 },
              { entryNumber: 227, name: 13 },
              { entryNumber: 270, name: 11 },
              { entryNumber: 208, name: 10 }
            ],
            evolutionChain: 117,
            types: [16, 4],
            generation: 'Generation II'
          },
          {
            name: 'houndour',
            pokedexNumbers: [
              { entryNumber: 225, name: 8 },
              { entryNumber: 214, name: 4 },
              { entryNumber: 176, name: 5 },
              { entryNumber: 209, name: 1 },
              { entryNumber: 228, name: 13 },
              { entryNumber: 289, name: 11 }
            ],
            evolutionChain: 118,
            types: [15, 1],
            generation: 'Generation II'
          },
          {
            name: 'houndoom',
            pokedexNumbers: [
              { entryNumber: 226, name: 8 },
              { entryNumber: 215, name: 4 },
              { entryNumber: 177, name: 5 },
              { entryNumber: 210, name: 1 },
              { entryNumber: 229, name: 13 },
              { entryNumber: 290, name: 11 }
            ],
            evolutionChain: 118,
            types: [15, 1],
            generation: 'Generation II'
          },
          {
            name: 'houndoom-mega',
            pokedexNumbers: [
              { entryNumber: 226, name: 8 },
              { entryNumber: 215, name: 4 },
              { entryNumber: 177, name: 5 },
              { entryNumber: 210, name: 1 },
              { entryNumber: 229, name: 13 }
            ],
            evolutionChain: 118,
            types: [15, 1],
            generation: 'Generation VII'
          },
          {
            name: 'kingdra',
            pokedexNumbers: [
              { entryNumber: 195, name: 9 },
              { entryNumber: 191, name: 8 },
              { entryNumber: 192, name: 4 },
              { entryNumber: 186, name: 2 },
              { entryNumber: 188, name: 1 },
              { entryNumber: 230, name: 13 }
            ],
            evolutionChain: 54,
            types: [3, 13],
            generation: 'Generation II'
          },
          {
            name: 'phanpy',
            pokedexNumbers: [
              { entryNumber: 172, name: 9 },
              { entryNumber: 200, name: 4 },
              { entryNumber: 165, name: 2 },
              { entryNumber: 195, name: 1 },
              { entryNumber: 231, name: 13 }
            ],
            evolutionChain: 119,
            types: [8],
            generation: 'Generation II'
          },
          {
            name: 'donphan',
            pokedexNumbers: [
              { entryNumber: 173, name: 9 },
              { entryNumber: 201, name: 4 },
              { entryNumber: 166, name: 2 },
              { entryNumber: 196, name: 1 },
              { entryNumber: 232, name: 13 }
            ],
            evolutionChain: 119,
            types: [8],
            generation: 'Generation II'
          },
          {
            name: 'porygon2',
            pokedexNumbers: [
              { entryNumber: 221, name: 4 },
              { entryNumber: 193, name: 5 },
              { entryNumber: 216, name: 1 },
              { entryNumber: 233, name: 13 },
              { entryNumber: 282, name: 11 },
              { entryNumber: 218, name: 10 }
            ],
            evolutionChain: 68,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'stantler',
            pokedexNumbers: [
              { entryNumber: 131, name: 4 },
              { entryNumber: 129, name: 1 },
              { entryNumber: 234, name: 13 }
            ],
            evolutionChain: 120,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'smeargle',
            pokedexNumbers: [
              { entryNumber: 124, name: 8 },
              { entryNumber: 159, name: 4 },
              { entryNumber: 157, name: 1 },
              { entryNumber: 235, name: 13 },
              { entryNumber: 70, name: 11 },
              { entryNumber: 58, name: 10 }
            ],
            evolutionChain: 121,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'tyrogue',
            pokedexNumbers: [
              { entryNumber: 145, name: 4 },
              { entryNumber: 143, name: 1 },
              { entryNumber: 236, name: 13 },
              { entryNumber: 107, name: 12 }
            ],
            evolutionChain: 47,
            types: [2],
            generation: 'Generation II'
          },
          {
            name: 'hitmontop',
            pokedexNumbers: [
              { entryNumber: 148, name: 4 },
              { entryNumber: 146, name: 1 },
              { entryNumber: 237, name: 13 },
              { entryNumber: 110, name: 12 }
            ],
            evolutionChain: 47,
            types: [2],
            generation: 'Generation II'
          },
          {
            name: 'smoochum',
            pokedexNumbers: [
              { entryNumber: 386, name: 8 },
              { entryNumber: 154, name: 4 },
              { entryNumber: 152, name: 1 },
              { entryNumber: 238, name: 13 },
              { entryNumber: 109, name: 11 }
            ],
            evolutionChain: 59,
            types: [11, 9],
            generation: 'Generation II'
          },
          {
            name: 'elekid',
            pokedexNumbers: [
              { entryNumber: 56, name: 7 },
              { entryNumber: 156, name: 4 },
              { entryNumber: 197, name: 5 },
              { entryNumber: 154, name: 1 },
              { entryNumber: 239, name: 13 },
              { entryNumber: 295, name: 11 },
              { entryNumber: 226, name: 10 }
            ],
            evolutionChain: 60,
            types: [7],
            generation: 'Generation II'
          },
          {
            name: 'magby',
            pokedexNumbers: [
              { entryNumber: 53, name: 7 },
              { entryNumber: 152, name: 4 },
              { entryNumber: 200, name: 5 },
              { entryNumber: 150, name: 1 },
              { entryNumber: 240, name: 13 },
              { entryNumber: 200, name: 11 },
              { entryNumber: 166, name: 10 }
            ],
            evolutionChain: 61,
            types: [1],
            generation: 'Generation II'
          },
          {
            name: 'miltank',
            pokedexNumbers: [
              { entryNumber: 276, name: 8 },
              { entryNumber: 151, name: 4 },
              { entryNumber: 149, name: 1 },
              { entryNumber: 241, name: 13 },
              { entryNumber: 171, name: 11 },
              { entryNumber: 138, name: 10 }
            ],
            evolutionChain: 122,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'blissey',
            pokedexNumbers: [
              { entryNumber: 223, name: 4 },
              { entryNumber: 98, name: 5 },
              { entryNumber: 98, name: 3 },
              { entryNumber: 218, name: 1 },
              { entryNumber: 242, name: 13 },
              { entryNumber: 41, name: 11 },
              { entryNumber: 34, name: 10 }
            ],
            evolutionChain: 51,
            types: [0],
            generation: 'Generation II'
          },
          {
            name: 'raikou',
            pokedexNumbers: [
              { entryNumber: 243, name: 4 },
              { entryNumber: 238, name: 1 },
              { entryNumber: 243, name: 13 }
            ],
            evolutionChain: 123,
            types: [7],
            generation: 'Generation II'
          },
          {
            name: 'entei',
            pokedexNumbers: [
              { entryNumber: 244, name: 4 },
              { entryNumber: 239, name: 1 },
              { entryNumber: 244, name: 13 }
            ],
            evolutionChain: 124,
            types: [1],
            generation: 'Generation II'
          },
          {
            name: 'suicune',
            pokedexNumbers: [
              { entryNumber: 245, name: 4 },
              { entryNumber: 240, name: 1 },
              { entryNumber: 245, name: 13 }
            ],
            evolutionChain: 125,
            types: [3],
            generation: 'Generation II'
          },
          {
            name: 'larvitar',
            pokedexNumbers: [
              { entryNumber: 405, name: 8 },
              { entryNumber: 292, name: 7 },
              { entryNumber: 249, name: 4 },
              { entryNumber: 244, name: 1 },
              { entryNumber: 246, name: 13 },
              { entryNumber: 247, name: 11 },
              { entryNumber: 383, name: 12 }
            ],
            evolutionChain: 126,
            types: [10, 8],
            generation: 'Generation II'
          },
          {
            name: 'pupitar',
            pokedexNumbers: [
              { entryNumber: 406, name: 8 },
              { entryNumber: 293, name: 7 },
              { entryNumber: 250, name: 4 },
              { entryNumber: 245, name: 1 },
              { entryNumber: 247, name: 13 },
              { entryNumber: 248, name: 11 },
              { entryNumber: 384, name: 12 }
            ],
            evolutionChain: 126,
            types: [10, 8],
            generation: 'Generation II'
          },
          {
            name: 'tyranitar',
            pokedexNumbers: [
              { entryNumber: 407, name: 8 },
              { entryNumber: 294, name: 7 },
              { entryNumber: 251, name: 4 },
              { entryNumber: 246, name: 1 },
              { entryNumber: 248, name: 13 },
              { entryNumber: 249, name: 11 },
              { entryNumber: 385, name: 12 }
            ],
            evolutionChain: 126,
            types: [10, 15],
            generation: 'Generation II'
          },
          {
            name: 'tyranitar-mega',
            pokedexNumbers: [
              { entryNumber: 407, name: 8 },
              { entryNumber: 294, name: 7 },
              { entryNumber: 251, name: 4 },
              { entryNumber: 246, name: 1 },
              { entryNumber: 248, name: 13 }
            ],
            evolutionChain: 126,
            types: [10, 15],
            generation: 'Generation VII'
          },
          {
            name: 'lugia',
            pokedexNumbers: [
              { entryNumber: 252, name: 4 },
              { entryNumber: 247, name: 1 },
              { entryNumber: 249, name: 13 }
            ],
            evolutionChain: 127,
            types: [9, 4],
            generation: 'Generation II'
          },
          {
            name: 'ho-oh',
            pokedexNumbers: [
              { entryNumber: 253, name: 4 },
              { entryNumber: 248, name: 1 },
              { entryNumber: 250, name: 13 }
            ],
            evolutionChain: 128,
            types: [1, 4],
            generation: 'Generation II'
          },
          {
            name: 'celebi',
            pokedexNumbers: [
              { entryNumber: 256, name: 4 },
              { entryNumber: 251, name: 1 },
              { entryNumber: 251, name: 13 }
            ],
            evolutionChain: 129,
            types: [9, 5],
            generation: 'Generation II'
          },
          {
            name: 'treecko',
            pokedexNumbers: [
              { entryNumber: 1, name: 9 },
              { entryNumber: 1, name: 2 },
              { entryNumber: 252, name: 13 }
            ],
            evolutionChain: 130,
            types: [5],
            generation: 'Generation III'
          },
          {
            name: 'grovyle',
            pokedexNumbers: [
              { entryNumber: 2, name: 9 },
              { entryNumber: 2, name: 2 },
              { entryNumber: 253, name: 13 }
            ],
            evolutionChain: 130,
            types: [5],
            generation: 'Generation III'
          },
          {
            name: 'sceptile',
            pokedexNumbers: [
              { entryNumber: 3, name: 9 },
              { entryNumber: 3, name: 2 },
              { entryNumber: 254, name: 13 }
            ],
            evolutionChain: 130,
            types: [5],
            generation: 'Generation III'
          },
          {
            name: 'sceptile-mega',
            pokedexNumbers: [
              { entryNumber: 3, name: 9 },
              { entryNumber: 3, name: 2 },
              { entryNumber: 254, name: 13 }
            ],
            evolutionChain: 130,
            types: [5, 13],
            generation: 'Generation VII'
          },
          {
            name: 'torchic',
            pokedexNumbers: [
              { entryNumber: 4, name: 9 },
              { entryNumber: 4, name: 2 },
              { entryNumber: 255, name: 13 }
            ],
            evolutionChain: 131,
            types: [1],
            generation: 'Generation III'
          },
          {
            name: 'combusken',
            pokedexNumbers: [
              { entryNumber: 5, name: 9 },
              { entryNumber: 5, name: 2 },
              { entryNumber: 256, name: 13 }
            ],
            evolutionChain: 131,
            types: [1, 2],
            generation: 'Generation III'
          },
          {
            name: 'blaziken',
            pokedexNumbers: [
              { entryNumber: 6, name: 9 },
              { entryNumber: 6, name: 2 },
              { entryNumber: 257, name: 13 }
            ],
            evolutionChain: 131,
            types: [1, 2],
            generation: 'Generation III'
          },
          {
            name: 'blaziken-mega',
            pokedexNumbers: [
              { entryNumber: 6, name: 9 },
              { entryNumber: 6, name: 2 },
              { entryNumber: 257, name: 13 }
            ],
            evolutionChain: 131,
            types: [1, 2],
            generation: 'Generation VII'
          },
          {
            name: 'mudkip',
            pokedexNumbers: [
              { entryNumber: 7, name: 9 },
              { entryNumber: 7, name: 2 },
              { entryNumber: 258, name: 13 }
            ],
            evolutionChain: 132,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'marshtomp',
            pokedexNumbers: [
              { entryNumber: 8, name: 9 },
              { entryNumber: 8, name: 2 },
              { entryNumber: 259, name: 13 }
            ],
            evolutionChain: 132,
            types: [3, 8],
            generation: 'Generation III'
          },
          {
            name: 'swampert',
            pokedexNumbers: [
              { entryNumber: 9, name: 9 },
              { entryNumber: 9, name: 2 },
              { entryNumber: 260, name: 13 }
            ],
            evolutionChain: 132,
            types: [3, 8],
            generation: 'Generation III'
          },
          {
            name: 'swampert-mega',
            pokedexNumbers: [
              { entryNumber: 9, name: 9 },
              { entryNumber: 9, name: 2 },
              { entryNumber: 260, name: 13 }
            ],
            evolutionChain: 132,
            types: [3, 8],
            generation: 'Generation VII'
          },
          {
            name: 'poochyena',
            pokedexNumbers: [
              { entryNumber: 10, name: 9 },
              { entryNumber: 347, name: 8 },
              { entryNumber: 10, name: 2 },
              { entryNumber: 261, name: 13 }
            ],
            evolutionChain: 133,
            types: [15],
            generation: 'Generation III'
          },
          {
            name: 'mightyena',
            pokedexNumbers: [
              { entryNumber: 11, name: 9 },
              { entryNumber: 348, name: 8 },
              { entryNumber: 11, name: 2 },
              { entryNumber: 262, name: 13 }
            ],
            evolutionChain: 133,
            types: [15],
            generation: 'Generation III'
          },
          {
            name: 'zigzagoon',
            pokedexNumbers: [
              { entryNumber: 12, name: 9 },
              { entryNumber: 12, name: 8 },
              { entryNumber: 12, name: 2 },
              { entryNumber: 263, name: 13 }
            ],
            evolutionChain: 134,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'zigzagoon-galar',
            pokedexNumbers: [
              { entryNumber: 31, name: 12 },
              { entryNumber: 263, name: 13 }
            ],
            evolutionChain: 134,
            types: [0, 15],
            generation: 'Generation VIII'
          },
          {
            name: 'linoone',
            pokedexNumbers: [
              { entryNumber: 13, name: 9 },
              { entryNumber: 13, name: 8 },
              { entryNumber: 13, name: 2 },
              { entryNumber: 264, name: 13 }
            ],
            evolutionChain: 134,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'linoone-galar',
            pokedexNumbers: [
              { entryNumber: 32, name: 12 },
              { entryNumber: 264, name: 13 }
            ],
            evolutionChain: 134,
            types: [0, 15],
            generation: 'Generation VIII'
          },
          {
            name: 'wurmple',
            pokedexNumbers: [
              { entryNumber: 14, name: 9 },
              { entryNumber: 48, name: 5 },
              { entryNumber: 48, name: 3 },
              { entryNumber: 14, name: 2 },
              { entryNumber: 265, name: 13 }
            ],
            evolutionChain: 135,
            types: [12],
            generation: 'Generation III'
          },
          {
            name: 'silcoon',
            pokedexNumbers: [
              { entryNumber: 15, name: 9 },
              { entryNumber: 49, name: 5 },
              { entryNumber: 49, name: 3 },
              { entryNumber: 15, name: 2 },
              { entryNumber: 266, name: 13 }
            ],
            evolutionChain: 135,
            types: [12],
            generation: 'Generation III'
          },
          {
            name: 'beautifly',
            pokedexNumbers: [
              { entryNumber: 16, name: 9 },
              { entryNumber: 50, name: 5 },
              { entryNumber: 50, name: 3 },
              { entryNumber: 16, name: 2 },
              { entryNumber: 267, name: 13 }
            ],
            evolutionChain: 135,
            types: [12, 4],
            generation: 'Generation III'
          },
          {
            name: 'cascoon',
            pokedexNumbers: [
              { entryNumber: 17, name: 9 },
              { entryNumber: 51, name: 5 },
              { entryNumber: 51, name: 3 },
              { entryNumber: 17, name: 2 },
              { entryNumber: 268, name: 13 }
            ],
            evolutionChain: 135,
            types: [12],
            generation: 'Generation III'
          },
          {
            name: 'dustox',
            pokedexNumbers: [
              { entryNumber: 18, name: 9 },
              { entryNumber: 52, name: 5 },
              { entryNumber: 52, name: 3 },
              { entryNumber: 18, name: 2 },
              { entryNumber: 269, name: 13 }
            ],
            evolutionChain: 135,
            types: [12, 6],
            generation: 'Generation III'
          },
          {
            name: 'lotad',
            pokedexNumbers: [
              { entryNumber: 19, name: 9 },
              { entryNumber: 358, name: 8 },
              { entryNumber: 19, name: 2 },
              { entryNumber: 270, name: 13 },
              { entryNumber: 36, name: 12 }
            ],
            evolutionChain: 136,
            types: [3, 5],
            generation: 'Generation III'
          },
          {
            name: 'lombre',
            pokedexNumbers: [
              { entryNumber: 20, name: 9 },
              { entryNumber: 359, name: 8 },
              { entryNumber: 20, name: 2 },
              { entryNumber: 271, name: 13 },
              { entryNumber: 37, name: 12 }
            ],
            evolutionChain: 136,
            types: [3, 5],
            generation: 'Generation III'
          },
          {
            name: 'ludicolo',
            pokedexNumbers: [
              { entryNumber: 21, name: 9 },
              { entryNumber: 360, name: 8 },
              { entryNumber: 21, name: 2 },
              { entryNumber: 272, name: 13 },
              { entryNumber: 38, name: 12 }
            ],
            evolutionChain: 136,
            types: [3, 5],
            generation: 'Generation III'
          },
          {
            name: 'seedot',
            pokedexNumbers: [
              { entryNumber: 22, name: 9 },
              { entryNumber: 22, name: 2 },
              { entryNumber: 273, name: 13 },
              { entryNumber: 39, name: 12 }
            ],
            evolutionChain: 137,
            types: [5],
            generation: 'Generation III'
          },
          {
            name: 'nuzleaf',
            pokedexNumbers: [
              { entryNumber: 23, name: 9 },
              { entryNumber: 23, name: 2 },
              { entryNumber: 274, name: 13 },
              { entryNumber: 40, name: 12 }
            ],
            evolutionChain: 137,
            types: [5, 15],
            generation: 'Generation III'
          },
          {
            name: 'shiftry',
            pokedexNumbers: [
              { entryNumber: 24, name: 9 },
              { entryNumber: 24, name: 2 },
              { entryNumber: 275, name: 13 },
              { entryNumber: 41, name: 12 }
            ],
            evolutionChain: 137,
            types: [5, 15],
            generation: 'Generation III'
          },
          {
            name: 'taillow',
            pokedexNumbers: [
              { entryNumber: 25, name: 9 },
              { entryNumber: 169, name: 8 },
              { entryNumber: 25, name: 2 },
              { entryNumber: 276, name: 13 }
            ],
            evolutionChain: 138,
            types: [0, 4],
            generation: 'Generation III'
          },
          {
            name: 'swellow',
            pokedexNumbers: [
              { entryNumber: 26, name: 9 },
              { entryNumber: 170, name: 8 },
              { entryNumber: 26, name: 2 },
              { entryNumber: 277, name: 13 }
            ],
            evolutionChain: 138,
            types: [0, 4],
            generation: 'Generation III'
          },
          {
            name: 'wingull',
            pokedexNumbers: [
              { entryNumber: 27, name: 9 },
              { entryNumber: 167, name: 8 },
              { entryNumber: 212, name: 7 },
              { entryNumber: 119, name: 5 },
              { entryNumber: 119, name: 3 },
              { entryNumber: 27, name: 2 },
              { entryNumber: 278, name: 13 },
              { entryNumber: 47, name: 11 },
              { entryNumber: 40, name: 10 },
              { entryNumber: 62, name: 12 }
            ],
            evolutionChain: 139,
            types: [3, 4],
            generation: 'Generation III'
          },
          {
            name: 'pelipper',
            pokedexNumbers: [
              { entryNumber: 28, name: 9 },
              { entryNumber: 168, name: 8 },
              { entryNumber: 213, name: 7 },
              { entryNumber: 120, name: 5 },
              { entryNumber: 120, name: 3 },
              { entryNumber: 28, name: 2 },
              { entryNumber: 279, name: 13 },
              { entryNumber: 48, name: 11 },
              { entryNumber: 41, name: 10 },
              { entryNumber: 63, name: 12 }
            ],
            evolutionChain: 139,
            types: [3, 4],
            generation: 'Generation III'
          },
          {
            name: 'ralts',
            pokedexNumbers: [
              { entryNumber: 29, name: 9 },
              { entryNumber: 64, name: 8 },
              { entryNumber: 157, name: 5 },
              { entryNumber: 29, name: 2 },
              { entryNumber: 280, name: 13 },
              { entryNumber: 120, name: 12 }
            ],
            evolutionChain: 140,
            types: [9, 17],
            generation: 'Generation III'
          },
          {
            name: 'kirlia',
            pokedexNumbers: [
              { entryNumber: 30, name: 9 },
              { entryNumber: 65, name: 8 },
              { entryNumber: 158, name: 5 },
              { entryNumber: 30, name: 2 },
              { entryNumber: 281, name: 13 },
              { entryNumber: 121, name: 12 }
            ],
            evolutionChain: 140,
            types: [9, 17],
            generation: 'Generation III'
          },
          {
            name: 'gardevoir',
            pokedexNumbers: [
              { entryNumber: 31, name: 9 },
              { entryNumber: 66, name: 8 },
              { entryNumber: 159, name: 5 },
              { entryNumber: 31, name: 2 },
              { entryNumber: 282, name: 13 },
              { entryNumber: 122, name: 12 }
            ],
            evolutionChain: 140,
            types: [9, 17],
            generation: 'Generation III'
          },
          {
            name: 'gardevoir-mega',
            pokedexNumbers: [
              { entryNumber: 31, name: 9 },
              { entryNumber: 66, name: 8 },
              { entryNumber: 159, name: 5 },
              { entryNumber: 31, name: 2 },
              { entryNumber: 282, name: 13 }
            ],
            evolutionChain: 140,
            types: [9, 17],
            generation: 'Generation VII'
          },
          {
            name: 'surskit',
            pokedexNumbers: [
              { entryNumber: 33, name: 9 },
              { entryNumber: 47, name: 8 },
              { entryNumber: 32, name: 2 },
              { entryNumber: 283, name: 13 },
              { entryNumber: 172, name: 11 },
              { entryNumber: 139, name: 10 }
            ],
            evolutionChain: 141,
            types: [12, 3],
            generation: 'Generation III'
          },
          {
            name: 'masquerain',
            pokedexNumbers: [
              { entryNumber: 34, name: 9 },
              { entryNumber: 48, name: 8 },
              { entryNumber: 33, name: 2 },
              { entryNumber: 284, name: 13 },
              { entryNumber: 173, name: 11 },
              { entryNumber: 140, name: 10 }
            ],
            evolutionChain: 141,
            types: [12, 4],
            generation: 'Generation III'
          },
          {
            name: 'shroomish',
            pokedexNumbers: [
              { entryNumber: 35, name: 9 },
              { entryNumber: 34, name: 2 },
              { entryNumber: 285, name: 13 }
            ],
            evolutionChain: 142,
            types: [5],
            generation: 'Generation III'
          },
          {
            name: 'breloom',
            pokedexNumbers: [
              { entryNumber: 36, name: 9 },
              { entryNumber: 35, name: 2 },
              { entryNumber: 286, name: 13 }
            ],
            evolutionChain: 142,
            types: [5, 2],
            generation: 'Generation III'
          },
          {
            name: 'slakoth',
            pokedexNumbers: [
              { entryNumber: 37, name: 9 },
              { entryNumber: 276, name: 7 },
              { entryNumber: 36, name: 2 },
              { entryNumber: 287, name: 13 }
            ],
            evolutionChain: 143,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'vigoroth',
            pokedexNumbers: [
              { entryNumber: 38, name: 9 },
              { entryNumber: 277, name: 7 },
              { entryNumber: 37, name: 2 },
              { entryNumber: 288, name: 13 }
            ],
            evolutionChain: 143,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'slaking',
            pokedexNumbers: [
              { entryNumber: 39, name: 9 },
              { entryNumber: 278, name: 7 },
              { entryNumber: 38, name: 2 },
              { entryNumber: 289, name: 13 }
            ],
            evolutionChain: 143,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'nincada',
            pokedexNumbers: [
              { entryNumber: 43, name: 9 },
              { entryNumber: 111, name: 8 },
              { entryNumber: 42, name: 2 },
              { entryNumber: 290, name: 13 },
              { entryNumber: 104, name: 12 }
            ],
            evolutionChain: 144,
            types: [12, 8],
            generation: 'Generation III'
          },
          {
            name: 'ninjask',
            pokedexNumbers: [
              { entryNumber: 44, name: 9 },
              { entryNumber: 112, name: 8 },
              { entryNumber: 43, name: 2 },
              { entryNumber: 291, name: 13 },
              { entryNumber: 105, name: 12 }
            ],
            evolutionChain: 144,
            types: [12, 4],
            generation: 'Generation III'
          },
          {
            name: 'shedinja',
            pokedexNumbers: [
              { entryNumber: 45, name: 9 },
              { entryNumber: 113, name: 8 },
              { entryNumber: 44, name: 2 },
              { entryNumber: 292, name: 13 },
              { entryNumber: 106, name: 12 }
            ],
            evolutionChain: 144,
            types: [12, 14],
            generation: 'Generation III'
          },
          {
            name: 'whismur',
            pokedexNumbers: [
              { entryNumber: 46, name: 9 },
              { entryNumber: 140, name: 8 },
              { entryNumber: 45, name: 2 },
              { entryNumber: 293, name: 13 }
            ],
            evolutionChain: 145,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'loudred',
            pokedexNumbers: [
              { entryNumber: 47, name: 9 },
              { entryNumber: 141, name: 8 },
              { entryNumber: 46, name: 2 },
              { entryNumber: 294, name: 13 }
            ],
            evolutionChain: 145,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'exploud',
            pokedexNumbers: [
              { entryNumber: 48, name: 9 },
              { entryNumber: 142, name: 8 },
              { entryNumber: 47, name: 2 },
              { entryNumber: 295, name: 13 }
            ],
            evolutionChain: 145,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'makuhita',
            pokedexNumbers: [
              { entryNumber: 49, name: 9 },
              { entryNumber: 245, name: 8 },
              { entryNumber: 48, name: 2 },
              { entryNumber: 296, name: 13 },
              { entryNumber: 68, name: 11 },
              { entryNumber: 56, name: 10 }
            ],
            evolutionChain: 146,
            types: [2],
            generation: 'Generation III'
          },
          {
            name: 'hariyama',
            pokedexNumbers: [
              { entryNumber: 50, name: 9 },
              { entryNumber: 246, name: 8 },
              { entryNumber: 49, name: 2 },
              { entryNumber: 297, name: 13 },
              { entryNumber: 69, name: 11 },
              { entryNumber: 57, name: 10 }
            ],
            evolutionChain: 146,
            types: [2],
            generation: 'Generation III'
          },
          {
            name: 'azurill',
            pokedexNumbers: [
              { entryNumber: 55, name: 9 },
              { entryNumber: 41, name: 8 },
              { entryNumber: 30, name: 7 },
              { entryNumber: 124, name: 5 },
              { entryNumber: 124, name: 3 },
              { entryNumber: 54, name: 2 },
              { entryNumber: 298, name: 13 }
            ],
            evolutionChain: 90,
            types: [0, 17],
            generation: 'Generation III'
          },
          {
            name: 'nosepass',
            pokedexNumbers: [
              { entryNumber: 61, name: 9 },
              { entryNumber: 243, name: 8 },
              { entryNumber: 164, name: 7 },
              { entryNumber: 155, name: 5 },
              { entryNumber: 60, name: 2 },
              { entryNumber: 299, name: 13 },
              { entryNumber: 254, name: 11 },
              { entryNumber: 198, name: 10 }
            ],
            evolutionChain: 147,
            types: [10],
            generation: 'Generation III'
          },
          {
            name: 'skitty',
            pokedexNumbers: [
              { entryNumber: 63, name: 9 },
              { entryNumber: 78, name: 8 },
              { entryNumber: 78, name: 7 },
              { entryNumber: 61, name: 2 },
              { entryNumber: 300, name: 13 }
            ],
            evolutionChain: 148,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'delcatty',
            pokedexNumbers: [
              { entryNumber: 64, name: 9 },
              { entryNumber: 79, name: 8 },
              { entryNumber: 79, name: 7 },
              { entryNumber: 62, name: 2 },
              { entryNumber: 301, name: 13 }
            ],
            evolutionChain: 148,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'sableye',
            pokedexNumbers: [
              { entryNumber: 70, name: 9 },
              { entryNumber: 273, name: 8 },
              { entryNumber: 68, name: 2 },
              { entryNumber: 302, name: 13 },
              { entryNumber: 124, name: 11 },
              { entryNumber: 102, name: 10 },
              { entryNumber: 294, name: 12 }
            ],
            evolutionChain: 149,
            types: [15, 14],
            generation: 'Generation III'
          },
          {
            name: 'sableye-mega',
            pokedexNumbers: [
              { entryNumber: 70, name: 9 },
              { entryNumber: 273, name: 8 },
              { entryNumber: 68, name: 2 },
              { entryNumber: 302, name: 13 }
            ],
            evolutionChain: 149,
            types: [15, 14],
            generation: 'Generation VII'
          },
          {
            name: 'mawile',
            pokedexNumbers: [
              { entryNumber: 71, name: 9 },
              { entryNumber: 213, name: 8 },
              { entryNumber: 69, name: 2 },
              { entryNumber: 303, name: 13 },
              { entryNumber: 125, name: 11 },
              { entryNumber: 295, name: 12 }
            ],
            evolutionChain: 150,
            types: [16, 17],
            generation: 'Generation III'
          },
          {
            name: 'mawile-mega',
            pokedexNumbers: [
              { entryNumber: 71, name: 9 },
              { entryNumber: 213, name: 8 },
              { entryNumber: 69, name: 2 },
              { entryNumber: 303, name: 13 }
            ],
            evolutionChain: 150,
            types: [16, 17],
            generation: 'Generation VII'
          },
          {
            name: 'aron',
            pokedexNumbers: [
              { entryNumber: 72, name: 9 },
              { entryNumber: 402, name: 8 },
              { entryNumber: 166, name: 7 },
              { entryNumber: 70, name: 2 },
              { entryNumber: 304, name: 13 }
            ],
            evolutionChain: 151,
            types: [16, 10],
            generation: 'Generation III'
          },
          {
            name: 'lairon',
            pokedexNumbers: [
              { entryNumber: 73, name: 9 },
              { entryNumber: 403, name: 8 },
              { entryNumber: 167, name: 7 },
              { entryNumber: 71, name: 2 },
              { entryNumber: 305, name: 13 }
            ],
            evolutionChain: 151,
            types: [16, 10],
            generation: 'Generation III'
          },
          {
            name: 'aggron',
            pokedexNumbers: [
              { entryNumber: 74, name: 9 },
              { entryNumber: 404, name: 8 },
              { entryNumber: 168, name: 7 },
              { entryNumber: 72, name: 2 },
              { entryNumber: 306, name: 13 }
            ],
            evolutionChain: 151,
            types: [16, 10],
            generation: 'Generation III'
          },
          {
            name: 'aggron-mega',
            pokedexNumbers: [
              { entryNumber: 74, name: 9 },
              { entryNumber: 404, name: 8 },
              { entryNumber: 168, name: 7 },
              { entryNumber: 72, name: 2 },
              { entryNumber: 306, name: 13 }
            ],
            evolutionChain: 151,
            types: [16],
            generation: 'Generation VII'
          },
          {
            name: 'meditite',
            pokedexNumbers: [
              { entryNumber: 78, name: 9 },
              { entryNumber: 143, name: 8 },
              { entryNumber: 86, name: 5 },
              { entryNumber: 86, name: 3 },
              { entryNumber: 76, name: 2 },
              { entryNumber: 307, name: 13 }
            ],
            evolutionChain: 152,
            types: [2, 9],
            generation: 'Generation III'
          },
          {
            name: 'medicham',
            pokedexNumbers: [
              { entryNumber: 79, name: 9 },
              { entryNumber: 144, name: 8 },
              { entryNumber: 87, name: 5 },
              { entryNumber: 87, name: 3 },
              { entryNumber: 77, name: 2 },
              { entryNumber: 308, name: 13 }
            ],
            evolutionChain: 152,
            types: [2, 9],
            generation: 'Generation III'
          },
          {
            name: 'medicham-mega',
            pokedexNumbers: [
              { entryNumber: 79, name: 9 },
              { entryNumber: 144, name: 8 },
              { entryNumber: 87, name: 5 },
              { entryNumber: 87, name: 3 },
              { entryNumber: 77, name: 2 },
              { entryNumber: 308, name: 13 }
            ],
            evolutionChain: 152,
            types: [2, 9],
            generation: 'Generation VII'
          },
          {
            name: 'electrike',
            pokedexNumbers: [
              { entryNumber: 80, name: 9 },
              { entryNumber: 223, name: 8 },
              { entryNumber: 78, name: 2 },
              { entryNumber: 309, name: 13 },
              { entryNumber: 293, name: 11 },
              { entryNumber: 66, name: 12 }
            ],
            evolutionChain: 153,
            types: [7],
            generation: 'Generation III'
          },
          {
            name: 'manectric',
            pokedexNumbers: [
              { entryNumber: 81, name: 9 },
              { entryNumber: 224, name: 8 },
              { entryNumber: 79, name: 2 },
              { entryNumber: 310, name: 13 },
              { entryNumber: 294, name: 11 },
              { entryNumber: 67, name: 12 }
            ],
            evolutionChain: 153,
            types: [7],
            generation: 'Generation III'
          },
          {
            name: 'manectric-mega',
            pokedexNumbers: [
              { entryNumber: 81, name: 9 },
              { entryNumber: 224, name: 8 },
              { entryNumber: 79, name: 2 },
              { entryNumber: 310, name: 13 }
            ],
            evolutionChain: 153,
            types: [7],
            generation: 'Generation VII'
          },
          {
            name: 'plusle',
            pokedexNumbers: [
              { entryNumber: 82, name: 9 },
              { entryNumber: 96, name: 8 },
              { entryNumber: 80, name: 2 },
              { entryNumber: 311, name: 13 }
            ],
            evolutionChain: 154,
            types: [7],
            generation: 'Generation III'
          },
          {
            name: 'minun',
            pokedexNumbers: [
              { entryNumber: 83, name: 9 },
              { entryNumber: 97, name: 8 },
              { entryNumber: 81, name: 2 },
              { entryNumber: 312, name: 13 }
            ],
            evolutionChain: 155,
            types: [7],
            generation: 'Generation III'
          },
          {
            name: 'volbeat',
            pokedexNumbers: [
              { entryNumber: 89, name: 9 },
              { entryNumber: 133, name: 8 },
              { entryNumber: 86, name: 2 },
              { entryNumber: 313, name: 13 }
            ],
            evolutionChain: 156,
            types: [12],
            generation: 'Generation III'
          },
          {
            name: 'illumise',
            pokedexNumbers: [
              { entryNumber: 90, name: 9 },
              { entryNumber: 134, name: 8 },
              { entryNumber: 87, name: 2 },
              { entryNumber: 314, name: 13 }
            ],
            evolutionChain: 157,
            types: [12],
            generation: 'Generation III'
          },
          {
            name: 'roselia',
            pokedexNumbers: [
              { entryNumber: 98, name: 9 },
              { entryNumber: 72, name: 8 },
              { entryNumber: 134, name: 7 },
              { entryNumber: 26, name: 5 },
              { entryNumber: 26, name: 3 },
              { entryNumber: 94, name: 2 },
              { entryNumber: 315, name: 13 },
              { entryNumber: 60, name: 12 }
            ],
            evolutionChain: 158,
            types: [5, 6],
            generation: 'Generation III'
          },
          {
            name: 'gulpin',
            pokedexNumbers: [
              { entryNumber: 100, name: 9 },
              { entryNumber: 98, name: 8 },
              { entryNumber: 95, name: 2 },
              { entryNumber: 316, name: 13 }
            ],
            evolutionChain: 159,
            types: [6],
            generation: 'Generation III'
          },
          {
            name: 'swalot',
            pokedexNumbers: [
              { entryNumber: 101, name: 9 },
              { entryNumber: 99, name: 8 },
              { entryNumber: 96, name: 2 },
              { entryNumber: 317, name: 13 }
            ],
            evolutionChain: 159,
            types: [6],
            generation: 'Generation III'
          },
          {
            name: 'carvanha',
            pokedexNumbers: [
              { entryNumber: 102, name: 9 },
              { entryNumber: 55, name: 8 },
              { entryNumber: 97, name: 2 },
              { entryNumber: 318, name: 13 },
              { entryNumber: 345, name: 11 },
              { entryNumber: 264, name: 10 }
            ],
            evolutionChain: 160,
            types: [3, 15],
            generation: 'Generation III'
          },
          {
            name: 'sharpedo',
            pokedexNumbers: [
              { entryNumber: 103, name: 9 },
              { entryNumber: 56, name: 8 },
              { entryNumber: 98, name: 2 },
              { entryNumber: 319, name: 13 },
              { entryNumber: 346, name: 11 },
              { entryNumber: 265, name: 10 }
            ],
            evolutionChain: 160,
            types: [3, 15],
            generation: 'Generation III'
          },
          {
            name: 'sharpedo-mega',
            pokedexNumbers: [
              { entryNumber: 103, name: 9 },
              { entryNumber: 56, name: 8 },
              { entryNumber: 98, name: 2 },
              { entryNumber: 319, name: 13 }
            ],
            evolutionChain: 160,
            types: [3, 15],
            generation: 'Generation VII'
          },
          {
            name: 'wailmer',
            pokedexNumbers: [
              { entryNumber: 104, name: 9 },
              { entryNumber: 177, name: 8 },
              { entryNumber: 240, name: 7 },
              { entryNumber: 99, name: 2 },
              { entryNumber: 320, name: 13 },
              { entryNumber: 351, name: 11 },
              { entryNumber: 266, name: 10 },
              { entryNumber: 356, name: 12 }
            ],
            evolutionChain: 161,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'wailord',
            pokedexNumbers: [
              { entryNumber: 105, name: 9 },
              { entryNumber: 178, name: 8 },
              { entryNumber: 241, name: 7 },
              { entryNumber: 100, name: 2 },
              { entryNumber: 321, name: 13 },
              { entryNumber: 352, name: 11 },
              { entryNumber: 267, name: 10 },
              { entryNumber: 357, name: 12 }
            ],
            evolutionChain: 161,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'numel',
            pokedexNumbers: [
              { entryNumber: 106, name: 9 },
              { entryNumber: 204, name: 7 },
              { entryNumber: 101, name: 2 },
              { entryNumber: 322, name: 13 }
            ],
            evolutionChain: 162,
            types: [1, 8],
            generation: 'Generation III'
          },
          {
            name: 'camerupt',
            pokedexNumbers: [
              { entryNumber: 107, name: 9 },
              { entryNumber: 205, name: 7 },
              { entryNumber: 102, name: 2 },
              { entryNumber: 323, name: 13 }
            ],
            evolutionChain: 162,
            types: [1, 8],
            generation: 'Generation III'
          },
          {
            name: 'camerupt-mega',
            pokedexNumbers: [
              { entryNumber: 107, name: 9 },
              { entryNumber: 205, name: 7 },
              { entryNumber: 102, name: 2 },
              { entryNumber: 323, name: 13 }
            ],
            evolutionChain: 162,
            types: [1, 8],
            generation: 'Generation VII'
          },
          {
            name: 'torkoal',
            pokedexNumbers: [
              { entryNumber: 110, name: 9 },
              { entryNumber: 399, name: 8 },
              { entryNumber: 105, name: 2 },
              { entryNumber: 324, name: 13 },
              { entryNumber: 287, name: 11 },
              { entryNumber: 223, name: 10 },
              { entryNumber: 300, name: 12 }
            ],
            evolutionChain: 163,
            types: [1],
            generation: 'Generation III'
          },
          {
            name: 'spoink',
            pokedexNumbers: [
              { entryNumber: 115, name: 9 },
              { entryNumber: 157, name: 8 },
              { entryNumber: 206, name: 7 },
              { entryNumber: 110, name: 2 },
              { entryNumber: 325, name: 13 }
            ],
            evolutionChain: 164,
            types: [9],
            generation: 'Generation III'
          },
          {
            name: 'grumpig',
            pokedexNumbers: [
              { entryNumber: 116, name: 9 },
              { entryNumber: 158, name: 8 },
              { entryNumber: 207, name: 7 },
              { entryNumber: 111, name: 2 },
              { entryNumber: 326, name: 13 }
            ],
            evolutionChain: 164,
            types: [9],
            generation: 'Generation III'
          },
          {
            name: 'spinda',
            pokedexNumbers: [
              { entryNumber: 119, name: 9 },
              { entryNumber: 434, name: 8 },
              { entryNumber: 114, name: 2 },
              { entryNumber: 327, name: 13 },
              { entryNumber: 128, name: 11 },
              { entryNumber: 105, name: 10 }
            ],
            evolutionChain: 165,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'trapinch',
            pokedexNumbers: [
              { entryNumber: 121, name: 9 },
              { entryNumber: 306, name: 8 },
              { entryNumber: 121, name: 7 },
              { entryNumber: 116, name: 2 },
              { entryNumber: 328, name: 13 },
              { entryNumber: 304, name: 11 },
              { entryNumber: 235, name: 10 },
              { entryNumber: 321, name: 12 }
            ],
            evolutionChain: 166,
            types: [8],
            generation: 'Generation III'
          },
          {
            name: 'vibrava',
            pokedexNumbers: [
              { entryNumber: 122, name: 9 },
              { entryNumber: 307, name: 8 },
              { entryNumber: 122, name: 7 },
              { entryNumber: 117, name: 2 },
              { entryNumber: 329, name: 13 },
              { entryNumber: 305, name: 11 },
              { entryNumber: 236, name: 10 },
              { entryNumber: 322, name: 12 }
            ],
            evolutionChain: 166,
            types: [8, 13],
            generation: 'Generation III'
          },
          {
            name: 'flygon',
            pokedexNumbers: [
              { entryNumber: 123, name: 9 },
              { entryNumber: 308, name: 8 },
              { entryNumber: 123, name: 7 },
              { entryNumber: 118, name: 2 },
              { entryNumber: 330, name: 13 },
              { entryNumber: 306, name: 11 },
              { entryNumber: 237, name: 10 },
              { entryNumber: 323, name: 12 }
            ],
            evolutionChain: 166,
            types: [8, 13],
            generation: 'Generation III'
          },
          {
            name: 'cacnea',
            pokedexNumbers: [
              { entryNumber: 124, name: 9 },
              { entryNumber: 119, name: 2 },
              { entryNumber: 331, name: 13 }
            ],
            evolutionChain: 167,
            types: [5],
            generation: 'Generation III'
          },
          {
            name: 'cacturne',
            pokedexNumbers: [
              { entryNumber: 125, name: 9 },
              { entryNumber: 120, name: 2 },
              { entryNumber: 332, name: 13 }
            ],
            evolutionChain: 167,
            types: [5, 15],
            generation: 'Generation III'
          },
          {
            name: 'swablu',
            pokedexNumbers: [
              { entryNumber: 126, name: 9 },
              { entryNumber: 442, name: 8 },
              { entryNumber: 246, name: 7 },
              { entryNumber: 171, name: 5 },
              { entryNumber: 121, name: 2 },
              { entryNumber: 333, name: 13 }
            ],
            evolutionChain: 168,
            types: [0, 4],
            generation: 'Generation III'
          },
          {
            name: 'altaria',
            pokedexNumbers: [
              { entryNumber: 127, name: 9 },
              { entryNumber: 443, name: 8 },
              { entryNumber: 247, name: 7 },
              { entryNumber: 172, name: 5 },
              { entryNumber: 122, name: 2 },
              { entryNumber: 334, name: 13 }
            ],
            evolutionChain: 168,
            types: [13, 4],
            generation: 'Generation III'
          },
          {
            name: 'altaria-mega',
            pokedexNumbers: [
              { entryNumber: 127, name: 9 },
              { entryNumber: 443, name: 8 },
              { entryNumber: 247, name: 7 },
              { entryNumber: 172, name: 5 },
              { entryNumber: 122, name: 2 },
              { entryNumber: 334, name: 13 }
            ],
            evolutionChain: 168,
            types: [13, 17],
            generation: 'Generation VII'
          },
          {
            name: 'zangoose',
            pokedexNumbers: [
              { entryNumber: 128, name: 9 },
              { entryNumber: 155, name: 8 },
              { entryNumber: 186, name: 7 },
              { entryNumber: 123, name: 2 },
              { entryNumber: 335, name: 13 }
            ],
            evolutionChain: 169,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'seviper',
            pokedexNumbers: [
              { entryNumber: 129, name: 9 },
              { entryNumber: 156, name: 8 },
              { entryNumber: 187, name: 7 },
              { entryNumber: 124, name: 2 },
              { entryNumber: 336, name: 13 }
            ],
            evolutionChain: 170,
            types: [6],
            generation: 'Generation III'
          },
          {
            name: 'lunatone',
            pokedexNumbers: [
              { entryNumber: 130, name: 9 },
              { entryNumber: 162, name: 8 },
              { entryNumber: 214, name: 7 },
              { entryNumber: 125, name: 2 },
              { entryNumber: 337, name: 13 },
              { entryNumber: 362, name: 12 }
            ],
            evolutionChain: 171,
            types: [10, 9],
            generation: 'Generation III'
          },
          {
            name: 'solrock',
            pokedexNumbers: [
              { entryNumber: 131, name: 9 },
              { entryNumber: 163, name: 8 },
              { entryNumber: 215, name: 7 },
              { entryNumber: 126, name: 2 },
              { entryNumber: 338, name: 13 },
              { entryNumber: 363, name: 12 }
            ],
            evolutionChain: 172,
            types: [10, 9],
            generation: 'Generation III'
          },
          {
            name: 'barboach',
            pokedexNumbers: [
              { entryNumber: 132, name: 9 },
              { entryNumber: 343, name: 8 },
              { entryNumber: 80, name: 5 },
              { entryNumber: 80, name: 3 },
              { entryNumber: 127, name: 2 },
              { entryNumber: 339, name: 13 },
              { entryNumber: 113, name: 11 },
              { entryNumber: 93, name: 10 },
              { entryNumber: 228, name: 12 }
            ],
            evolutionChain: 173,
            types: [3, 8],
            generation: 'Generation III'
          },
          {
            name: 'whiscash',
            pokedexNumbers: [
              { entryNumber: 133, name: 9 },
              { entryNumber: 344, name: 8 },
              { entryNumber: 81, name: 5 },
              { entryNumber: 81, name: 3 },
              { entryNumber: 128, name: 2 },
              { entryNumber: 340, name: 13 },
              { entryNumber: 114, name: 11 },
              { entryNumber: 94, name: 10 },
              { entryNumber: 229, name: 12 }
            ],
            evolutionChain: 173,
            types: [3, 8],
            generation: 'Generation III'
          },
          {
            name: 'corphish',
            pokedexNumbers: [
              { entryNumber: 134, name: 9 },
              { entryNumber: 51, name: 8 },
              { entryNumber: 279, name: 7 },
              { entryNumber: 129, name: 2 },
              { entryNumber: 341, name: 13 },
              { entryNumber: 357, name: 11 },
              { entryNumber: 102, name: 12 }
            ],
            evolutionChain: 174,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'crawdaunt',
            pokedexNumbers: [
              { entryNumber: 135, name: 9 },
              { entryNumber: 52, name: 8 },
              { entryNumber: 280, name: 7 },
              { entryNumber: 130, name: 2 },
              { entryNumber: 342, name: 13 },
              { entryNumber: 358, name: 11 },
              { entryNumber: 103, name: 12 }
            ],
            evolutionChain: 174,
            types: [3, 15],
            generation: 'Generation III'
          },
          {
            name: 'baltoy',
            pokedexNumbers: [
              { entryNumber: 136, name: 9 },
              { entryNumber: 169, name: 7 },
              { entryNumber: 131, name: 2 },
              { entryNumber: 343, name: 13 },
              { entryNumber: 310, name: 11 },
              { entryNumber: 82, name: 12 }
            ],
            evolutionChain: 175,
            types: [8, 9],
            generation: 'Generation III'
          },
          {
            name: 'claydol',
            pokedexNumbers: [
              { entryNumber: 137, name: 9 },
              { entryNumber: 170, name: 7 },
              { entryNumber: 132, name: 2 },
              { entryNumber: 344, name: 13 },
              { entryNumber: 311, name: 11 },
              { entryNumber: 83, name: 12 }
            ],
            evolutionChain: 175,
            types: [8, 9],
            generation: 'Generation III'
          },
          {
            name: 'lileep',
            pokedexNumbers: [
              { entryNumber: 138, name: 9 },
              { entryNumber: 133, name: 2 },
              { entryNumber: 345, name: 13 },
              { entryNumber: 231, name: 11 }
            ],
            evolutionChain: 176,
            types: [10, 5],
            generation: 'Generation III'
          },
          {
            name: 'cradily',
            pokedexNumbers: [
              { entryNumber: 139, name: 9 },
              { entryNumber: 134, name: 2 },
              { entryNumber: 346, name: 13 },
              { entryNumber: 232, name: 11 }
            ],
            evolutionChain: 176,
            types: [10, 5],
            generation: 'Generation III'
          },
          {
            name: 'anorith',
            pokedexNumbers: [
              { entryNumber: 140, name: 9 },
              { entryNumber: 135, name: 2 },
              { entryNumber: 347, name: 13 },
              { entryNumber: 233, name: 11 }
            ],
            evolutionChain: 177,
            types: [10, 12],
            generation: 'Generation III'
          },
          {
            name: 'armaldo',
            pokedexNumbers: [
              { entryNumber: 141, name: 9 },
              { entryNumber: 136, name: 2 },
              { entryNumber: 348, name: 13 },
              { entryNumber: 234, name: 11 }
            ],
            evolutionChain: 177,
            types: [10, 12],
            generation: 'Generation III'
          },
          {
            name: 'feebas',
            pokedexNumbers: [
              { entryNumber: 145, name: 9 },
              { entryNumber: 138, name: 5 },
              { entryNumber: 138, name: 3 },
              { entryNumber: 140, name: 2 },
              { entryNumber: 349, name: 13 },
              { entryNumber: 189, name: 11 },
              { entryNumber: 155, name: 10 },
              { entryNumber: 152, name: 12 }
            ],
            evolutionChain: 178,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'milotic',
            pokedexNumbers: [
              { entryNumber: 146, name: 9 },
              { entryNumber: 139, name: 5 },
              { entryNumber: 139, name: 3 },
              { entryNumber: 141, name: 2 },
              { entryNumber: 350, name: 13 },
              { entryNumber: 190, name: 11 },
              { entryNumber: 156, name: 10 },
              { entryNumber: 153, name: 12 }
            ],
            evolutionChain: 178,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'castform',
            pokedexNumbers: [
              { entryNumber: 147, name: 9 },
              { entryNumber: 163, name: 7 },
              { entryNumber: 142, name: 2 },
              { entryNumber: 351, name: 13 },
              { entryNumber: 220, name: 11 },
              { entryNumber: 181, name: 10 }
            ],
            evolutionChain: 179,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'castform-sunny',
            pokedexNumbers: [
              { entryNumber: 147, name: 9 },
              { entryNumber: 163, name: 7 },
              { entryNumber: 142, name: 2 },
              { entryNumber: 351, name: 13 }
            ],
            evolutionChain: 179,
            types: [1],
            generation: 'Generation III'
          },
          {
            name: 'castform-rainy',
            pokedexNumbers: [
              { entryNumber: 147, name: 9 },
              { entryNumber: 163, name: 7 },
              { entryNumber: 142, name: 2 },
              { entryNumber: 351, name: 13 }
            ],
            evolutionChain: 179,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'castform-snowy',
            pokedexNumbers: [
              { entryNumber: 147, name: 9 },
              { entryNumber: 163, name: 7 },
              { entryNumber: 142, name: 2 },
              { entryNumber: 351, name: 13 }
            ],
            evolutionChain: 179,
            types: [11],
            generation: 'Generation III'
          },
          {
            name: 'kecleon',
            pokedexNumbers: [
              { entryNumber: 150, name: 9 },
              { entryNumber: 116, name: 8 },
              { entryNumber: 145, name: 2 },
              { entryNumber: 352, name: 13 },
              { entryNumber: 214, name: 11 }
            ],
            evolutionChain: 180,
            types: [0],
            generation: 'Generation III'
          },
          {
            name: 'shuppet',
            pokedexNumbers: [
              { entryNumber: 151, name: 9 },
              { entryNumber: 425, name: 8 },
              { entryNumber: 210, name: 7 },
              { entryNumber: 146, name: 2 },
              { entryNumber: 353, name: 13 },
              { entryNumber: 316, name: 11 }
            ],
            evolutionChain: 181,
            types: [14],
            generation: 'Generation III'
          },
          {
            name: 'banette',
            pokedexNumbers: [
              { entryNumber: 152, name: 9 },
              { entryNumber: 426, name: 8 },
              { entryNumber: 211, name: 7 },
              { entryNumber: 147, name: 2 },
              { entryNumber: 354, name: 13 },
              { entryNumber: 317, name: 11 }
            ],
            evolutionChain: 181,
            types: [14],
            generation: 'Generation III'
          },
          {
            name: 'banette-mega',
            pokedexNumbers: [
              { entryNumber: 152, name: 9 },
              { entryNumber: 426, name: 8 },
              { entryNumber: 211, name: 7 },
              { entryNumber: 147, name: 2 },
              { entryNumber: 354, name: 13 }
            ],
            evolutionChain: 181,
            types: [14],
            generation: 'Generation VII'
          },
          {
            name: 'duskull',
            pokedexNumbers: [
              { entryNumber: 153, name: 9 },
              { entryNumber: 189, name: 5 },
              { entryNumber: 148, name: 2 },
              { entryNumber: 355, name: 13 },
              { entryNumber: 135, name: 12 }
            ],
            evolutionChain: 182,
            types: [14],
            generation: 'Generation III'
          },
          {
            name: 'dusclops',
            pokedexNumbers: [
              { entryNumber: 154, name: 9 },
              { entryNumber: 190, name: 5 },
              { entryNumber: 149, name: 2 },
              { entryNumber: 356, name: 13 },
              { entryNumber: 136, name: 12 }
            ],
            evolutionChain: 182,
            types: [14],
            generation: 'Generation III'
          },
          {
            name: 'tropius',
            pokedexNumbers: [
              { entryNumber: 156, name: 9 },
              { entryNumber: 288, name: 7 },
              { entryNumber: 185, name: 5 },
              { entryNumber: 150, name: 2 },
              { entryNumber: 357, name: 13 },
              { entryNumber: 354, name: 11 }
            ],
            evolutionChain: 183,
            types: [5, 4],
            generation: 'Generation III'
          },
          {
            name: 'chimecho',
            pokedexNumbers: [
              { entryNumber: 158, name: 9 },
              { entryNumber: 262, name: 8 },
              { entryNumber: 83, name: 5 },
              { entryNumber: 83, name: 3 },
              { entryNumber: 151, name: 2 },
              { entryNumber: 358, name: 13 }
            ],
            evolutionChain: 184,
            types: [9],
            generation: 'Generation III'
          },
          {
            name: 'absol',
            pokedexNumbers: [
              { entryNumber: 159, name: 9 },
              { entryNumber: 159, name: 8 },
              { entryNumber: 216, name: 7 },
              { entryNumber: 209, name: 5 },
              { entryNumber: 152, name: 2 },
              { entryNumber: 359, name: 13 },
              { entryNumber: 322, name: 11 },
              { entryNumber: 245, name: 10 }
            ],
            evolutionChain: 185,
            types: [15],
            generation: 'Generation III'
          },
          {
            name: 'absol-mega',
            pokedexNumbers: [
              { entryNumber: 159, name: 9 },
              { entryNumber: 159, name: 8 },
              { entryNumber: 216, name: 7 },
              { entryNumber: 209, name: 5 },
              { entryNumber: 152, name: 2 },
              { entryNumber: 359, name: 13 }
            ],
            evolutionChain: 185,
            types: [15],
            generation: 'Generation VII'
          },
          {
            name: 'wynaut',
            pokedexNumbers: [
              { entryNumber: 167, name: 9 },
              { entryNumber: 268, name: 8 },
              { entryNumber: 160, name: 2 },
              { entryNumber: 360, name: 13 },
              { entryNumber: 216, name: 12 }
            ],
            evolutionChain: 100,
            types: [9],
            generation: 'Generation III'
          },
          {
            name: 'snorunt',
            pokedexNumbers: [
              { entryNumber: 179, name: 9 },
              { entryNumber: 206, name: 5 },
              { entryNumber: 171, name: 2 },
              { entryNumber: 361, name: 13 },
              { entryNumber: 323, name: 11 },
              { entryNumber: 246, name: 10 },
              { entryNumber: 79, name: 12 }
            ],
            evolutionChain: 186,
            types: [11],
            generation: 'Generation III'
          },
          {
            name: 'glalie',
            pokedexNumbers: [
              { entryNumber: 180, name: 9 },
              { entryNumber: 207, name: 5 },
              { entryNumber: 172, name: 2 },
              { entryNumber: 362, name: 13 },
              { entryNumber: 247, name: 10 },
              { entryNumber: 324, name: 11 },
              { entryNumber: 80, name: 12 }
            ],
            evolutionChain: 186,
            types: [11],
            generation: 'Generation III'
          },
          {
            name: 'glalie-mega',
            pokedexNumbers: [
              { entryNumber: 180, name: 9 },
              { entryNumber: 207, name: 5 },
              { entryNumber: 172, name: 2 },
              { entryNumber: 362, name: 13 }
            ],
            evolutionChain: 186,
            types: [11],
            generation: 'Generation VII'
          },
          {
            name: 'spheal',
            pokedexNumbers: [
              { entryNumber: 182, name: 9 },
              { entryNumber: 243, name: 7 },
              { entryNumber: 173, name: 2 },
              { entryNumber: 363, name: 13 }
            ],
            evolutionChain: 187,
            types: [11, 3],
            generation: 'Generation III'
          },
          {
            name: 'sealeo',
            pokedexNumbers: [
              { entryNumber: 183, name: 9 },
              { entryNumber: 244, name: 7 },
              { entryNumber: 174, name: 2 },
              { entryNumber: 364, name: 13 }
            ],
            evolutionChain: 187,
            types: [11, 3],
            generation: 'Generation III'
          },
          {
            name: 'walrein',
            pokedexNumbers: [
              { entryNumber: 184, name: 9 },
              { entryNumber: 245, name: 7 },
              { entryNumber: 175, name: 2 },
              { entryNumber: 365, name: 13 }
            ],
            evolutionChain: 187,
            types: [11, 3],
            generation: 'Generation III'
          },
          {
            name: 'clamperl',
            pokedexNumbers: [
              { entryNumber: 185, name: 9 },
              { entryNumber: 291, name: 8 },
              { entryNumber: 176, name: 2 },
              { entryNumber: 366, name: 13 },
              { entryNumber: 140, name: 11 }
            ],
            evolutionChain: 188,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'huntail',
            pokedexNumbers: [
              { entryNumber: 186, name: 9 },
              { entryNumber: 292, name: 8 },
              { entryNumber: 177, name: 2 },
              { entryNumber: 367, name: 13 },
              { entryNumber: 141, name: 11 }
            ],
            evolutionChain: 188,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'gorebyss',
            pokedexNumbers: [
              { entryNumber: 187, name: 9 },
              { entryNumber: 293, name: 8 },
              { entryNumber: 178, name: 2 },
              { entryNumber: 368, name: 13 },
              { entryNumber: 142, name: 11 }
            ],
            evolutionChain: 188,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'relicanth',
            pokedexNumbers: [
              { entryNumber: 188, name: 9 },
              { entryNumber: 192, name: 8 },
              { entryNumber: 179, name: 2 },
              { entryNumber: 369, name: 13 },
              { entryNumber: 343, name: 11 },
              { entryNumber: 262, name: 10 }
            ],
            evolutionChain: 189,
            types: [3, 10],
            generation: 'Generation III'
          },
          {
            name: 'luvdisc',
            pokedexNumbers: [
              { entryNumber: 192, name: 9 },
              { entryNumber: 179, name: 8 },
              { entryNumber: 183, name: 2 },
              { entryNumber: 370, name: 13 },
              { entryNumber: 134, name: 11 },
              { entryNumber: 111, name: 10 }
            ],
            evolutionChain: 190,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'bagon',
            pokedexNumbers: [
              { entryNumber: 196, name: 9 },
              { entryNumber: 164, name: 8 },
              { entryNumber: 187, name: 2 },
              { entryNumber: 371, name: 13 },
              { entryNumber: 147, name: 11 },
              { entryNumber: 117, name: 10 }
            ],
            evolutionChain: 191,
            types: [13],
            generation: 'Generation III'
          },
          {
            name: 'shelgon',
            pokedexNumbers: [
              { entryNumber: 197, name: 9 },
              { entryNumber: 165, name: 8 },
              { entryNumber: 188, name: 2 },
              { entryNumber: 372, name: 13 },
              { entryNumber: 148, name: 11 },
              { entryNumber: 118, name: 10 }
            ],
            evolutionChain: 191,
            types: [13],
            generation: 'Generation III'
          },
          {
            name: 'salamence',
            pokedexNumbers: [
              { entryNumber: 198, name: 9 },
              { entryNumber: 166, name: 8 },
              { entryNumber: 189, name: 2 },
              { entryNumber: 373, name: 13 },
              { entryNumber: 149, name: 11 },
              { entryNumber: 119, name: 10 }
            ],
            evolutionChain: 191,
            types: [13, 4],
            generation: 'Generation III'
          },
          {
            name: 'salamence-mega',
            pokedexNumbers: [
              { entryNumber: 198, name: 9 },
              { entryNumber: 166, name: 8 },
              { entryNumber: 189, name: 2 },
              { entryNumber: 373, name: 13 }
            ],
            evolutionChain: 191,
            types: [13, 4],
            generation: 'Generation VII'
          },
          {
            name: 'beldum',
            pokedexNumbers: [
              { entryNumber: 199, name: 9 },
              { entryNumber: 262, name: 7 },
              { entryNumber: 190, name: 2 },
              { entryNumber: 374, name: 13 },
              { entryNumber: 278, name: 11 },
              { entryNumber: 214, name: 10 }
            ],
            evolutionChain: 192,
            types: [16, 9],
            generation: 'Generation III'
          },
          {
            name: 'metang',
            pokedexNumbers: [
              { entryNumber: 200, name: 9 },
              { entryNumber: 263, name: 7 },
              { entryNumber: 191, name: 2 },
              { entryNumber: 375, name: 13 },
              { entryNumber: 279, name: 11 },
              { entryNumber: 215, name: 10 }
            ],
            evolutionChain: 192,
            types: [16, 9],
            generation: 'Generation III'
          },
          {
            name: 'metagross',
            pokedexNumbers: [
              { entryNumber: 201, name: 9 },
              { entryNumber: 264, name: 7 },
              { entryNumber: 192, name: 2 },
              { entryNumber: 376, name: 13 },
              { entryNumber: 280, name: 11 },
              { entryNumber: 216, name: 10 }
            ],
            evolutionChain: 192,
            types: [16, 9],
            generation: 'Generation III'
          },
          {
            name: 'metagross-mega',
            pokedexNumbers: [
              { entryNumber: 201, name: 9 },
              { entryNumber: 264, name: 7 },
              { entryNumber: 192, name: 2 },
              { entryNumber: 376, name: 13 }
            ],
            evolutionChain: 192,
            types: [16, 9],
            generation: 'Generation VII'
          },
          {
            name: 'regirock',
            pokedexNumbers: [
              { entryNumber: 202, name: 9 },
              { entryNumber: 193, name: 2 },
              { entryNumber: 377, name: 13 }
            ],
            evolutionChain: 193,
            types: [10],
            generation: 'Generation III'
          },
          {
            name: 'regice',
            pokedexNumbers: [
              { entryNumber: 203, name: 9 },
              { entryNumber: 194, name: 2 },
              { entryNumber: 378, name: 13 }
            ],
            evolutionChain: 194,
            types: [11],
            generation: 'Generation III'
          },
          {
            name: 'registeel',
            pokedexNumbers: [
              { entryNumber: 204, name: 9 },
              { entryNumber: 195, name: 2 },
              { entryNumber: 379, name: 13 }
            ],
            evolutionChain: 195,
            types: [16],
            generation: 'Generation III'
          },
          {
            name: 'latias',
            pokedexNumbers: [
              { entryNumber: 205, name: 9 },
              { entryNumber: 196, name: 2 },
              { entryNumber: 380, name: 13 }
            ],
            evolutionChain: 196,
            types: [13, 9],
            generation: 'Generation III'
          },
          {
            name: 'latias-mega',
            pokedexNumbers: [
              { entryNumber: 205, name: 9 },
              { entryNumber: 196, name: 2 },
              { entryNumber: 380, name: 13 }
            ],
            evolutionChain: 196,
            types: [13, 9],
            generation: 'Generation VII'
          },
          {
            name: 'latios',
            pokedexNumbers: [
              { entryNumber: 206, name: 9 },
              { entryNumber: 197, name: 2 },
              { entryNumber: 381, name: 13 }
            ],
            evolutionChain: 197,
            types: [13, 9],
            generation: 'Generation III'
          },
          {
            name: 'latios-mega',
            pokedexNumbers: [
              { entryNumber: 206, name: 9 },
              { entryNumber: 197, name: 2 },
              { entryNumber: 381, name: 13 }
            ],
            evolutionChain: 197,
            types: [13, 9],
            generation: 'Generation VII'
          },
          {
            name: 'kyogre',
            pokedexNumbers: [
              { entryNumber: 207, name: 9 },
              { entryNumber: 198, name: 2 },
              { entryNumber: 382, name: 13 }
            ],
            evolutionChain: 198,
            types: [3],
            generation: 'Generation III'
          },
          {
            name: 'groudon',
            pokedexNumbers: [
              { entryNumber: 208, name: 9 },
              { entryNumber: 199, name: 2 },
              { entryNumber: 383, name: 13 }
            ],
            evolutionChain: 199,
            types: [8],
            generation: 'Generation III'
          },
          {
            name: 'rayquaza',
            pokedexNumbers: [
              { entryNumber: 209, name: 9 },
              { entryNumber: 200, name: 2 },
              { entryNumber: 384, name: 13 }
            ],
            evolutionChain: 200,
            types: [13, 4],
            generation: 'Generation III'
          },
          {
            name: 'rayquaza-mega',
            pokedexNumbers: [
              { entryNumber: 209, name: 9 },
              { entryNumber: 200, name: 2 },
              { entryNumber: 384, name: 13 }
            ],
            evolutionChain: 200,
            types: [13, 4],
            generation: 'Generation VII'
          },
          {
            name: 'jirachi',
            pokedexNumbers: [
              { entryNumber: 210, name: 9 },
              { entryNumber: 201, name: 2 },
              { entryNumber: 385, name: 13 }
            ],
            evolutionChain: 201,
            types: [16, 9],
            generation: 'Generation III'
          },
          {
            name: 'deoxys',
            pokedexNumbers: [
              { entryNumber: 211, name: 9 },
              { entryNumber: 202, name: 2 },
              { entryNumber: 386, name: 13 }
            ],
            evolutionChain: 202,
            types: [9],
            generation: 'Generation III'
          },
          {
            name: 'turtwig',
            pokedexNumbers: [
              { entryNumber: 1, name: 5 },
              { entryNumber: 1, name: 3 },
              { entryNumber: 387, name: 13 }
            ],
            evolutionChain: 203,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'grotle',
            pokedexNumbers: [
              { entryNumber: 2, name: 5 },
              { entryNumber: 2, name: 3 },
              { entryNumber: 388, name: 13 }
            ],
            evolutionChain: 203,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'torterra',
            pokedexNumbers: [
              { entryNumber: 3, name: 5 },
              { entryNumber: 3, name: 3 },
              { entryNumber: 389, name: 13 }
            ],
            evolutionChain: 203,
            types: [5, 8],
            generation: 'Generation IV'
          },
          {
            name: 'chimchar',
            pokedexNumbers: [
              { entryNumber: 4, name: 5 },
              { entryNumber: 4, name: 3 },
              { entryNumber: 390, name: 13 }
            ],
            evolutionChain: 204,
            types: [1],
            generation: 'Generation IV'
          },
          {
            name: 'monferno',
            pokedexNumbers: [
              { entryNumber: 5, name: 5 },
              { entryNumber: 5, name: 3 },
              { entryNumber: 391, name: 13 }
            ],
            evolutionChain: 204,
            types: [1, 2],
            generation: 'Generation IV'
          },
          {
            name: 'infernape',
            pokedexNumbers: [
              { entryNumber: 6, name: 5 },
              { entryNumber: 6, name: 3 },
              { entryNumber: 392, name: 13 }
            ],
            evolutionChain: 204,
            types: [1, 2],
            generation: 'Generation IV'
          },
          {
            name: 'piplup',
            pokedexNumbers: [
              { entryNumber: 7, name: 5 },
              { entryNumber: 7, name: 3 },
              { entryNumber: 393, name: 13 }
            ],
            evolutionChain: 205,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'prinplup',
            pokedexNumbers: [
              { entryNumber: 8, name: 5 },
              { entryNumber: 8, name: 3 },
              { entryNumber: 394, name: 13 }
            ],
            evolutionChain: 205,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'empoleon',
            pokedexNumbers: [
              { entryNumber: 9, name: 5 },
              { entryNumber: 9, name: 3 },
              { entryNumber: 395, name: 13 }
            ],
            evolutionChain: 205,
            types: [3, 16],
            generation: 'Generation IV'
          },
          {
            name: 'starly',
            pokedexNumbers: [
              { entryNumber: 249, name: 8 },
              { entryNumber: 10, name: 5 },
              { entryNumber: 10, name: 3 },
              { entryNumber: 396, name: 13 }
            ],
            evolutionChain: 206,
            types: [0, 4],
            generation: 'Generation IV'
          },
          {
            name: 'staravia',
            pokedexNumbers: [
              { entryNumber: 250, name: 8 },
              { entryNumber: 11, name: 5 },
              { entryNumber: 11, name: 3 },
              { entryNumber: 397, name: 13 }
            ],
            evolutionChain: 206,
            types: [0, 4],
            generation: 'Generation IV'
          },
          {
            name: 'staraptor',
            pokedexNumbers: [
              { entryNumber: 251, name: 8 },
              { entryNumber: 12, name: 5 },
              { entryNumber: 12, name: 3 },
              { entryNumber: 398, name: 13 }
            ],
            evolutionChain: 206,
            types: [0, 4],
            generation: 'Generation IV'
          },
          {
            name: 'bidoof',
            pokedexNumbers: [
              { entryNumber: 38, name: 8 },
              { entryNumber: 13, name: 5 },
              { entryNumber: 13, name: 3 },
              { entryNumber: 399, name: 13 }
            ],
            evolutionChain: 207,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'bibarel',
            pokedexNumbers: [
              { entryNumber: 39, name: 8 },
              { entryNumber: 14, name: 5 },
              { entryNumber: 14, name: 3 },
              { entryNumber: 400, name: 13 }
            ],
            evolutionChain: 207,
            types: [0, 3],
            generation: 'Generation IV'
          },
          {
            name: 'kricketot',
            pokedexNumbers: [
              { entryNumber: 15, name: 5 },
              { entryNumber: 15, name: 3 },
              { entryNumber: 401, name: 13 }
            ],
            evolutionChain: 208,
            types: [12],
            generation: 'Generation IV'
          },
          {
            name: 'kricketune',
            pokedexNumbers: [
              { entryNumber: 16, name: 5 },
              { entryNumber: 16, name: 3 },
              { entryNumber: 402, name: 13 }
            ],
            evolutionChain: 208,
            types: [12],
            generation: 'Generation IV'
          },
          {
            name: 'shinx',
            pokedexNumbers: [
              { entryNumber: 17, name: 5 },
              { entryNumber: 17, name: 3 },
              { entryNumber: 403, name: 13 }
            ],
            evolutionChain: 209,
            types: [7],
            generation: 'Generation IV'
          },
          {
            name: 'luxio',
            pokedexNumbers: [
              { entryNumber: 18, name: 5 },
              { entryNumber: 18, name: 3 },
              { entryNumber: 404, name: 13 }
            ],
            evolutionChain: 209,
            types: [7],
            generation: 'Generation IV'
          },
          {
            name: 'luxray',
            pokedexNumbers: [
              { entryNumber: 19, name: 5 },
              { entryNumber: 19, name: 3 },
              { entryNumber: 405, name: 13 }
            ],
            evolutionChain: 209,
            types: [7],
            generation: 'Generation IV'
          },
          {
            name: 'budew',
            pokedexNumbers: [
              { entryNumber: 97, name: 9 },
              { entryNumber: 71, name: 8 },
              { entryNumber: 133, name: 7 },
              { entryNumber: 25, name: 5 },
              { entryNumber: 25, name: 3 },
              { entryNumber: 406, name: 13 },
              { entryNumber: 59, name: 12 }
            ],
            evolutionChain: 158,
            types: [5, 6],
            generation: 'Generation IV'
          },
          {
            name: 'roserade',
            pokedexNumbers: [
              { entryNumber: 99, name: 9 },
              { entryNumber: 72, name: 8 },
              { entryNumber: 135, name: 7 },
              { entryNumber: 27, name: 5 },
              { entryNumber: 27, name: 3 },
              { entryNumber: 407, name: 13 },
              { entryNumber: 61, name: 12 }
            ],
            evolutionChain: 158,
            types: [5, 6],
            generation: 'Generation IV'
          },
          {
            name: 'cranidos',
            pokedexNumbers: [
              { entryNumber: 36, name: 5 },
              { entryNumber: 36, name: 3 },
              { entryNumber: 408, name: 13 },
              { entryNumber: 235, name: 11 },
              { entryNumber: 188, name: 10 }
            ],
            evolutionChain: 211,
            types: [10],
            generation: 'Generation IV'
          },
          {
            name: 'rampardos',
            pokedexNumbers: [
              { entryNumber: 37, name: 5 },
              { entryNumber: 37, name: 3 },
              { entryNumber: 409, name: 13 },
              { entryNumber: 236, name: 11 },
              { entryNumber: 189, name: 10 }
            ],
            evolutionChain: 211,
            types: [10],
            generation: 'Generation IV'
          },
          {
            name: 'shieldon',
            pokedexNumbers: [
              { entryNumber: 38, name: 5 },
              { entryNumber: 38, name: 3 },
              { entryNumber: 410, name: 13 },
              { entryNumber: 237, name: 11 },
              { entryNumber: 190, name: 10 }
            ],
            evolutionChain: 212,
            types: [10, 16],
            generation: 'Generation IV'
          },
          {
            name: 'bastiodon',
            pokedexNumbers: [
              { entryNumber: 39, name: 5 },
              { entryNumber: 39, name: 3 },
              { entryNumber: 411, name: 13 },
              { entryNumber: 238, name: 11 },
              { entryNumber: 191, name: 10 }
            ],
            evolutionChain: 212,
            types: [10, 16],
            generation: 'Generation IV'
          },
          {
            name: 'burmy',
            pokedexNumbers: [
              { entryNumber: 44, name: 8 },
              { entryNumber: 45, name: 5 },
              { entryNumber: 45, name: 3 },
              { entryNumber: 412, name: 13 }
            ],
            evolutionChain: 213,
            types: [12],
            generation: 'Generation IV'
          },
          {
            name: 'wormadam-plant',
            pokedexNumbers: [
              { entryNumber: 45, name: 8 },
              { entryNumber: 46, name: 5 },
              { entryNumber: 46, name: 3 },
              { entryNumber: 413, name: 13 }
            ],
            evolutionChain: 213,
            types: [12, 5],
            generation: 'Generation IV'
          },
          {
            name: 'wormadam-sandy',
            pokedexNumbers: [
              { entryNumber: 45, name: 8 },
              { entryNumber: 46, name: 5 },
              { entryNumber: 46, name: 3 },
              { entryNumber: 413, name: 13 }
            ],
            evolutionChain: 213,
            types: [12, 8],
            generation: 'Generation IV'
          },
          {
            name: 'wormadam-trash',
            pokedexNumbers: [
              { entryNumber: 45, name: 8 },
              { entryNumber: 46, name: 5 },
              { entryNumber: 46, name: 3 },
              { entryNumber: 413, name: 13 }
            ],
            evolutionChain: 213,
            types: [12, 16],
            generation: 'Generation IV'
          },
          {
            name: 'mothim',
            pokedexNumbers: [
              { entryNumber: 46, name: 8 },
              { entryNumber: 47, name: 5 },
              { entryNumber: 47, name: 3 },
              { entryNumber: 414, name: 13 }
            ],
            evolutionChain: 213,
            types: [12, 4],
            generation: 'Generation IV'
          },
          {
            name: 'combee',
            pokedexNumbers: [
              { entryNumber: 76, name: 8 },
              { entryNumber: 142, name: 7 },
              { entryNumber: 53, name: 5 },
              { entryNumber: 53, name: 3 },
              { entryNumber: 415, name: 13 },
              { entryNumber: 116, name: 12 }
            ],
            evolutionChain: 214,
            types: [12, 4],
            generation: 'Generation IV'
          },
          {
            name: 'vespiquen',
            pokedexNumbers: [
              { entryNumber: 77, name: 8 },
              { entryNumber: 143, name: 7 },
              { entryNumber: 54, name: 5 },
              { entryNumber: 54, name: 3 },
              { entryNumber: 416, name: 13 },
              { entryNumber: 117, name: 12 }
            ],
            evolutionChain: 214,
            types: [12, 4],
            generation: 'Generation IV'
          },
          {
            name: 'pachirisu',
            pokedexNumbers: [
              { entryNumber: 282, name: 8 },
              { entryNumber: 55, name: 5 },
              { entryNumber: 55, name: 3 },
              { entryNumber: 417, name: 13 }
            ],
            evolutionChain: 215,
            types: [7],
            generation: 'Generation IV'
          },
          {
            name: 'buizel',
            pokedexNumbers: [
              { entryNumber: 361, name: 8 },
              { entryNumber: 149, name: 7 },
              { entryNumber: 56, name: 5 },
              { entryNumber: 56, name: 3 },
              { entryNumber: 418, name: 13 }
            ],
            evolutionChain: 216,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'floatzel',
            pokedexNumbers: [
              { entryNumber: 362, name: 8 },
              { entryNumber: 150, name: 7 },
              { entryNumber: 57, name: 5 },
              { entryNumber: 57, name: 3 },
              { entryNumber: 419, name: 13 }
            ],
            evolutionChain: 216,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'cherubi',
            pokedexNumbers: [
              { entryNumber: 58, name: 5 },
              { entryNumber: 58, name: 3 },
              { entryNumber: 420, name: 13 },
              { entryNumber: 128, name: 12 }
            ],
            evolutionChain: 217,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'cherrim',
            pokedexNumbers: [
              { entryNumber: 59, name: 5 },
              { entryNumber: 59, name: 3 },
              { entryNumber: 421, name: 13 },
              { entryNumber: 129, name: 12 }
            ],
            evolutionChain: 217,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'shellos',
            pokedexNumbers: [
              { entryNumber: 60, name: 5 },
              { entryNumber: 60, name: 3 },
              { entryNumber: 422, name: 13 },
              { entryNumber: 341, name: 11 },
              { entryNumber: 260, name: 10 },
              { entryNumber: 230, name: 12 }
            ],
            evolutionChain: 218,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'gastrodon',
            pokedexNumbers: [
              { entryNumber: 61, name: 5 },
              { entryNumber: 61, name: 3 },
              { entryNumber: 423, name: 13 },
              { entryNumber: 342, name: 11 },
              { entryNumber: 261, name: 10 },
              { entryNumber: 231, name: 12 }
            ],
            evolutionChain: 218,
            types: [3, 8],
            generation: 'Generation IV'
          },
          {
            name: 'ambipom',
            pokedexNumbers: [
              { entryNumber: 124, name: 4 },
              { entryNumber: 64, name: 5 },
              { entryNumber: 64, name: 3 },
              { entryNumber: 424, name: 13 },
              { entryNumber: 369, name: 11 }
            ],
            evolutionChain: 93,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'drifloon',
            pokedexNumbers: [
              { entryNumber: 151, name: 8 },
              { entryNumber: 208, name: 7 },
              { entryNumber: 65, name: 5 },
              { entryNumber: 65, name: 3 },
              { entryNumber: 425, name: 13 },
              { entryNumber: 76, name: 11 },
              { entryNumber: 64, name: 10 },
              { entryNumber: 124, name: 12 }
            ],
            evolutionChain: 219,
            types: [14, 4],
            generation: 'Generation IV'
          },
          {
            name: 'drifblim',
            pokedexNumbers: [
              { entryNumber: 152, name: 8 },
              { entryNumber: 209, name: 7 },
              { entryNumber: 66, name: 5 },
              { entryNumber: 66, name: 3 },
              { entryNumber: 426, name: 13 },
              { entryNumber: 77, name: 11 },
              { entryNumber: 65, name: 10 },
              { entryNumber: 125, name: 12 }
            ],
            evolutionChain: 219,
            types: [14, 4],
            generation: 'Generation IV'
          },
          {
            name: 'buneary',
            pokedexNumbers: [
              { entryNumber: 80, name: 7 },
              { entryNumber: 67, name: 5 },
              { entryNumber: 67, name: 3 },
              { entryNumber: 427, name: 13 },
              { entryNumber: 24, name: 11 }
            ],
            evolutionChain: 220,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'lopunny',
            pokedexNumbers: [
              { entryNumber: 81, name: 7 },
              { entryNumber: 68, name: 5 },
              { entryNumber: 68, name: 3 },
              { entryNumber: 428, name: 13 },
              { entryNumber: 25, name: 11 }
            ],
            evolutionChain: 220,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'lopunny-mega',
            pokedexNumbers: [
              { entryNumber: 81, name: 7 },
              { entryNumber: 68, name: 5 },
              { entryNumber: 68, name: 3 },
              { entryNumber: 428, name: 13 }
            ],
            evolutionChain: 220,
            types: [0, 2],
            generation: 'Generation VII'
          },
          {
            name: 'mismagius',
            pokedexNumbers: [
              { entryNumber: 73, name: 5 },
              { entryNumber: 73, name: 3 },
              { entryNumber: 429, name: 13 },
              { entryNumber: 372, name: 11 },
              { entryNumber: 67, name: 10 }
            ],
            evolutionChain: 98,
            types: [14],
            generation: 'Generation IV'
          },
          {
            name: 'honchkrow',
            pokedexNumbers: [
              { entryNumber: 355, name: 8 },
              { entryNumber: 75, name: 5 },
              { entryNumber: 75, name: 3 },
              { entryNumber: 430, name: 13 },
              { entryNumber: 79, name: 11 },
              { entryNumber: 278, name: 10 }
            ],
            evolutionChain: 97,
            types: [15, 4],
            generation: 'Generation IV'
          },
          {
            name: 'glameow',
            pokedexNumbers: [
              { entryNumber: 76, name: 5 },
              { entryNumber: 76, name: 3 },
              { entryNumber: 431, name: 13 }
            ],
            evolutionChain: 221,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'purugly',
            pokedexNumbers: [
              { entryNumber: 77, name: 5 },
              { entryNumber: 77, name: 3 },
              { entryNumber: 432, name: 13 }
            ],
            evolutionChain: 221,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'chingling',
            pokedexNumbers: [
              { entryNumber: 157, name: 9 },
              { entryNumber: 261, name: 8 },
              { entryNumber: 82, name: 5 },
              { entryNumber: 82, name: 3 },
              { entryNumber: 433, name: 13 }
            ],
            evolutionChain: 184,
            types: [9],
            generation: 'Generation IV'
          },
          {
            name: 'stunky',
            pokedexNumbers: [
              { entryNumber: 252, name: 8 },
              { entryNumber: 84, name: 5 },
              { entryNumber: 84, name: 3 },
              { entryNumber: 434, name: 13 },
              { entryNumber: 130, name: 12 }
            ],
            evolutionChain: 223,
            types: [6, 15],
            generation: 'Generation IV'
          },
          {
            name: 'skuntank',
            pokedexNumbers: [
              { entryNumber: 253, name: 8 },
              { entryNumber: 85, name: 5 },
              { entryNumber: 85, name: 3 },
              { entryNumber: 435, name: 13 },
              { entryNumber: 131, name: 12 }
            ],
            evolutionChain: 223,
            types: [6, 15],
            generation: 'Generation IV'
          },
          {
            name: 'bronzor',
            pokedexNumbers: [
              { entryNumber: 250, name: 7 },
              { entryNumber: 88, name: 5 },
              { entryNumber: 88, name: 3 },
              { entryNumber: 436, name: 13 },
              { entryNumber: 118, name: 12 }
            ],
            evolutionChain: 224,
            types: [16, 9],
            generation: 'Generation IV'
          },
          {
            name: 'bronzong',
            pokedexNumbers: [
              { entryNumber: 251, name: 7 },
              { entryNumber: 89, name: 5 },
              { entryNumber: 89, name: 3 },
              { entryNumber: 437, name: 13 },
              { entryNumber: 119, name: 12 }
            ],
            evolutionChain: 224,
            types: [16, 9],
            generation: 'Generation IV'
          },
          {
            name: 'bonsly',
            pokedexNumbers: [
              { entryNumber: 432, name: 8 },
              { entryNumber: 92, name: 5 },
              { entryNumber: 92, name: 3 },
              { entryNumber: 438, name: 13 },
              { entryNumber: 37, name: 11 },
              { entryNumber: 30, name: 10 },
              { entryNumber: 252, name: 12 }
            ],
            evolutionChain: 91,
            types: [10],
            generation: 'Generation IV'
          },
          {
            name: 'mime jr.',
            pokedexNumbers: [
              { entryNumber: 263, name: 8 },
              { entryNumber: 94, name: 5 },
              { entryNumber: 94, name: 3 },
              { entryNumber: 439, name: 13 },
              { entryNumber: 59, name: 11 },
              { entryNumber: 364, name: 12 }
            ],
            evolutionChain: 57,
            types: [9, 17],
            generation: 'Generation IV'
          },
          {
            name: 'happiny',
            pokedexNumbers: [
              { entryNumber: 96, name: 5 },
              { entryNumber: 96, name: 3 },
              { entryNumber: 440, name: 13 },
              { entryNumber: 39, name: 11 },
              { entryNumber: 32, name: 10 }
            ],
            evolutionChain: 51,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'chatot',
            pokedexNumbers: [
              { entryNumber: 288, name: 8 },
              { entryNumber: 102, name: 5 },
              { entryNumber: 102, name: 3 },
              { entryNumber: 441, name: 13 }
            ],
            evolutionChain: 228,
            types: [0, 4],
            generation: 'Generation IV'
          },
          {
            name: 'spiritomb',
            pokedexNumbers: [
              { entryNumber: 108, name: 5 },
              { entryNumber: 108, name: 3 },
              { entryNumber: 442, name: 13 }
            ],
            evolutionChain: 229,
            types: [14, 15],
            generation: 'Generation IV'
          },
          {
            name: 'gible',
            pokedexNumbers: [
              { entryNumber: 309, name: 8 },
              { entryNumber: 109, name: 5 },
              { entryNumber: 109, name: 3 },
              { entryNumber: 443, name: 13 },
              { entryNumber: 307, name: 11 },
              { entryNumber: 238, name: 10 }
            ],
            evolutionChain: 230,
            types: [13, 8],
            generation: 'Generation IV'
          },
          {
            name: 'gabite',
            pokedexNumbers: [
              { entryNumber: 310, name: 8 },
              { entryNumber: 110, name: 5 },
              { entryNumber: 110, name: 3 },
              { entryNumber: 444, name: 13 },
              { entryNumber: 308, name: 11 },
              { entryNumber: 239, name: 10 }
            ],
            evolutionChain: 230,
            types: [13, 8],
            generation: 'Generation IV'
          },
          {
            name: 'garchomp',
            pokedexNumbers: [
              { entryNumber: 311, name: 8 },
              { entryNumber: 111, name: 5 },
              { entryNumber: 111, name: 3 },
              { entryNumber: 445, name: 13 },
              { entryNumber: 309, name: 11 },
              { entryNumber: 240, name: 10 }
            ],
            evolutionChain: 230,
            types: [13, 8],
            generation: 'Generation IV'
          },
          {
            name: 'garchomp-mega',
            pokedexNumbers: [
              { entryNumber: 311, name: 8 },
              { entryNumber: 111, name: 5 },
              { entryNumber: 111, name: 3 },
              { entryNumber: 445, name: 13 }
            ],
            evolutionChain: 230,
            types: [13, 8],
            generation: 'Generation VII'
          },
          {
            name: 'munchlax',
            pokedexNumbers: [
              { entryNumber: 138, name: 8 },
              { entryNumber: 112, name: 5 },
              { entryNumber: 112, name: 3 },
              { entryNumber: 446, name: 13 },
              { entryNumber: 42, name: 11 },
              { entryNumber: 35, name: 10 },
              { entryNumber: 260, name: 12 }
            ],
            evolutionChain: 72,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'riolu',
            pokedexNumbers: [
              { entryNumber: 62, name: 8 },
              { entryNumber: 33, name: 7 },
              { entryNumber: 115, name: 5 },
              { entryNumber: 115, name: 3 },
              { entryNumber: 447, name: 13 },
              { entryNumber: 377, name: 11 },
              { entryNumber: 279, name: 10 },
              { entryNumber: 298, name: 12 }
            ],
            evolutionChain: 232,
            types: [2],
            generation: 'Generation IV'
          },
          {
            name: 'lucario',
            pokedexNumbers: [
              { entryNumber: 63, name: 8 },
              { entryNumber: 34, name: 7 },
              { entryNumber: 116, name: 5 },
              { entryNumber: 116, name: 3 },
              { entryNumber: 448, name: 13 },
              { entryNumber: 378, name: 11 },
              { entryNumber: 280, name: 10 },
              { entryNumber: 299, name: 12 }
            ],
            evolutionChain: 232,
            types: [2, 16],
            generation: 'Generation IV'
          },
          {
            name: 'lucario-mega',
            pokedexNumbers: [
              { entryNumber: 63, name: 8 },
              { entryNumber: 34, name: 7 },
              { entryNumber: 116, name: 5 },
              { entryNumber: 116, name: 3 },
              { entryNumber: 448, name: 13 }
            ],
            evolutionChain: 232,
            types: [2, 16],
            generation: 'Generation VII'
          },
          {
            name: 'hippopotas',
            pokedexNumbers: [
              { entryNumber: 198, name: 8 },
              { entryNumber: 122, name: 5 },
              { entryNumber: 122, name: 3 },
              { entryNumber: 449, name: 13 },
              { entryNumber: 314, name: 12 }
            ],
            evolutionChain: 233,
            types: [8],
            generation: 'Generation IV'
          },
          {
            name: 'hippowdon',
            pokedexNumbers: [
              { entryNumber: 199, name: 8 },
              { entryNumber: 123, name: 5 },
              { entryNumber: 123, name: 3 },
              { entryNumber: 450, name: 13 },
              { entryNumber: 315, name: 12 }
            ],
            evolutionChain: 233,
            types: [8],
            generation: 'Generation IV'
          },
          {
            name: 'skorupi',
            pokedexNumbers: [
              { entryNumber: 318, name: 8 },
              { entryNumber: 201, name: 7 },
              { entryNumber: 127, name: 5 },
              { entryNumber: 127, name: 3 },
              { entryNumber: 451, name: 13 },
              { entryNumber: 285, name: 12 }
            ],
            evolutionChain: 234,
            types: [6, 12],
            generation: 'Generation IV'
          },
          {
            name: 'drapion',
            pokedexNumbers: [
              { entryNumber: 319, name: 8 },
              { entryNumber: 202, name: 7 },
              { entryNumber: 128, name: 5 },
              { entryNumber: 128, name: 3 },
              { entryNumber: 452, name: 13 },
              { entryNumber: 286, name: 12 }
            ],
            evolutionChain: 234,
            types: [6, 15],
            generation: 'Generation IV'
          },
          {
            name: 'croagunk',
            pokedexNumbers: [
              { entryNumber: 125, name: 8 },
              { entryNumber: 290, name: 7 },
              { entryNumber: 129, name: 5 },
              { entryNumber: 129, name: 3 },
              { entryNumber: 453, name: 13 },
              { entryNumber: 222, name: 12 }
            ],
            evolutionChain: 235,
            types: [6, 2],
            generation: 'Generation IV'
          },
          {
            name: 'toxicroak',
            pokedexNumbers: [
              { entryNumber: 126, name: 8 },
              { entryNumber: 291, name: 7 },
              { entryNumber: 130, name: 5 },
              { entryNumber: 130, name: 3 },
              { entryNumber: 454, name: 13 },
              { entryNumber: 223, name: 12 }
            ],
            evolutionChain: 235,
            types: [6, 2],
            generation: 'Generation IV'
          },
          {
            name: 'carnivine',
            pokedexNumbers: [
              { entryNumber: 332, name: 8 },
              { entryNumber: 289, name: 7 },
              { entryNumber: 131, name: 5 },
              { entryNumber: 131, name: 3 },
              { entryNumber: 455, name: 13 }
            ],
            evolutionChain: 236,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'finneon',
            pokedexNumbers: [
              { entryNumber: 134, name: 5 },
              { entryNumber: 134, name: 3 },
              { entryNumber: 456, name: 13 },
              { entryNumber: 131, name: 11 },
              { entryNumber: 108, name: 10 }
            ],
            evolutionChain: 237,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'lumineon',
            pokedexNumbers: [
              { entryNumber: 135, name: 5 },
              { entryNumber: 135, name: 3 },
              { entryNumber: 457, name: 13 },
              { entryNumber: 132, name: 11 },
              { entryNumber: 109, name: 10 }
            ],
            evolutionChain: 237,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'mantyke',
            pokedexNumbers: [
              { entryNumber: 289, name: 8 },
              { entryNumber: 233, name: 7 },
              { entryNumber: 140, name: 5 },
              { entryNumber: 140, name: 3 },
              { entryNumber: 458, name: 13 },
              { entryNumber: 145, name: 11 },
              { entryNumber: 354, name: 12 }
            ],
            evolutionChain: 116,
            types: [3, 4],
            generation: 'Generation IV'
          },
          {
            name: 'snover',
            pokedexNumbers: [
              { entryNumber: 391, name: 8 },
              { entryNumber: 142, name: 5 },
              { entryNumber: 142, name: 3 },
              { entryNumber: 459, name: 13 },
              { entryNumber: 96, name: 12 }
            ],
            evolutionChain: 239,
            types: [5, 11],
            generation: 'Generation IV'
          },
          {
            name: 'abomasnow',
            pokedexNumbers: [
              { entryNumber: 392, name: 8 },
              { entryNumber: 143, name: 5 },
              { entryNumber: 143, name: 3 },
              { entryNumber: 460, name: 13 },
              { entryNumber: 97, name: 12 }
            ],
            evolutionChain: 239,
            types: [5, 11],
            generation: 'Generation IV'
          },
          {
            name: 'abomasnow-mega',
            pokedexNumbers: [
              { entryNumber: 392, name: 8 },
              { entryNumber: 143, name: 5 },
              { entryNumber: 143, name: 3 },
              { entryNumber: 460, name: 13 }
            ],
            evolutionChain: 239,
            types: [5, 11],
            generation: 'Generation VII'
          },
          {
            name: 'weavile',
            pokedexNumbers: [
              { entryNumber: 395, name: 8 },
              { entryNumber: 253, name: 7 },
              { entryNumber: 145, name: 5 },
              { entryNumber: 145, name: 3 },
              { entryNumber: 461, name: 13 },
              { entryNumber: 327, name: 11 },
              { entryNumber: 250, name: 10 },
              { entryNumber: 293, name: 12 }
            ],
            evolutionChain: 109,
            types: [15, 11],
            generation: 'Generation IV'
          },
          {
            name: 'magnezone',
            pokedexNumbers: [
              { entryNumber: 86, name: 9 },
              { entryNumber: 374, name: 8 },
              { entryNumber: 50, name: 7 },
              { entryNumber: 180, name: 5 },
              { entryNumber: 462, name: 13 },
              { entryNumber: 56, name: 11 },
              { entryNumber: 49, name: 10 }
            ],
            evolutionChain: 34,
            types: [7, 16],
            generation: 'Generation IV'
          },
          {
            name: 'lickilicky',
            pokedexNumbers: [
              { entryNumber: 438, name: 8 },
              { entryNumber: 285, name: 7 },
              { entryNumber: 181, name: 4 },
              { entryNumber: 162, name: 5 },
              { entryNumber: 463, name: 13 },
              { entryNumber: 376, name: 11 }
            ],
            evolutionChain: 48,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'rhyperior',
            pokedexNumbers: [
              { entryNumber: 178, name: 9 },
              { entryNumber: 202, name: 8 },
              { entryNumber: 188, name: 5 },
              { entryNumber: 464, name: 13 },
              { entryNumber: 266, name: 12 }
            ],
            evolutionChain: 50,
            types: [8, 10],
            generation: 'Generation IV'
          },
          {
            name: 'tangrowth',
            pokedexNumbers: [
              { entryNumber: 218, name: 7 },
              { entryNumber: 183, name: 4 },
              { entryNumber: 182, name: 5 },
              { entryNumber: 465, name: 13 }
            ],
            evolutionChain: 52,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'electivire',
            pokedexNumbers: [
              { entryNumber: 58, name: 7 },
              { entryNumber: 199, name: 5 },
              { entryNumber: 466, name: 13 },
              { entryNumber: 297, name: 11 },
              { entryNumber: 228, name: 10 }
            ],
            evolutionChain: 60,
            types: [7],
            generation: 'Generation IV'
          },
          {
            name: 'magmortar',
            pokedexNumbers: [
              { entryNumber: 55, name: 7 },
              { entryNumber: 202, name: 5 },
              { entryNumber: 467, name: 13 },
              { entryNumber: 202, name: 11 },
              { entryNumber: 168, name: 10 }
            ],
            evolutionChain: 61,
            types: [1],
            generation: 'Generation IV'
          },
          {
            name: 'togekiss',
            pokedexNumbers: [
              { entryNumber: 175, name: 5 },
              { entryNumber: 468, name: 13 },
              { entryNumber: 259, name: 12 }
            ],
            evolutionChain: 87,
            types: [17, 4],
            generation: 'Generation IV'
          },
          {
            name: 'yanmega',
            pokedexNumbers: [
              { entryNumber: 238, name: 8 },
              { entryNumber: 287, name: 7 },
              { entryNumber: 102, name: 4 },
              { entryNumber: 184, name: 5 },
              { entryNumber: 469, name: 13 }
            ],
            evolutionChain: 95,
            types: [12, 4],
            generation: 'Generation VII'
          },
          {
            name: 'leafeon',
            pokedexNumbers: [
              { entryNumber: 233, name: 8 },
              { entryNumber: 97, name: 7 },
              { entryNumber: 169, name: 5 },
              { entryNumber: 470, name: 13 },
              { entryNumber: 159, name: 11 },
              { entryNumber: 129, name: 10 },
              { entryNumber: 202, name: 12 }
            ],
            evolutionChain: 67,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'glaceon',
            pokedexNumbers: [
              { entryNumber: 234, name: 8 },
              { entryNumber: 98, name: 7 },
              { entryNumber: 170, name: 5 },
              { entryNumber: 471, name: 13 },
              { entryNumber: 160, name: 11 },
              { entryNumber: 130, name: 10 },
              { entryNumber: 203, name: 12 }
            ],
            evolutionChain: 67,
            types: [11],
            generation: 'Generation IV'
          },
          {
            name: 'gliscor',
            pokedexNumbers: [
              { entryNumber: 419, name: 8 },
              { entryNumber: 222, name: 7 },
              { entryNumber: 154, name: 5 },
              { entryNumber: 472, name: 13 }
            ],
            evolutionChain: 104,
            types: [8, 4],
            generation: 'Generation IV'
          },
          {
            name: 'mamoswine',
            pokedexNumbers: [
              { entryNumber: 381, name: 8 },
              { entryNumber: 260, name: 7 },
              { entryNumber: 197, name: 4 },
              { entryNumber: 205, name: 5 },
              { entryNumber: 473, name: 13 },
              { entryNumber: 77, name: 12 }
            ],
            evolutionChain: 112,
            types: [11, 8],
            generation: 'Generation IV'
          },
          {
            name: 'porygon-z',
            pokedexNumbers: [
              { entryNumber: 194, name: 5 },
              { entryNumber: 474, name: 13 },
              { entryNumber: 283, name: 11 },
              { entryNumber: 219, name: 10 }
            ],
            evolutionChain: 68,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'gallade',
            pokedexNumbers: [
              { entryNumber: 32, name: 9 },
              { entryNumber: 67, name: 8 },
              { entryNumber: 160, name: 5 },
              { entryNumber: 475, name: 13 },
              { entryNumber: 123, name: 12 }
            ],
            evolutionChain: 140,
            types: [9, 2],
            generation: 'Generation IV'
          },
          {
            name: 'gallade-mega',
            pokedexNumbers: [
              { entryNumber: 32, name: 9 },
              { entryNumber: 67, name: 8 },
              { entryNumber: 160, name: 5 },
              { entryNumber: 475, name: 13 }
            ],
            evolutionChain: 140,
            types: [9, 2],
            generation: 'Generation VII'
          },
          {
            name: 'probopass',
            pokedexNumbers: [
              { entryNumber: 62, name: 9 },
              { entryNumber: 244, name: 8 },
              { entryNumber: 165, name: 7 },
              { entryNumber: 156, name: 5 },
              { entryNumber: 476, name: 13 },
              { entryNumber: 255, name: 11 },
              { entryNumber: 199, name: 10 }
            ],
            evolutionChain: 147,
            types: [10, 16],
            generation: 'Generation IV'
          },
          {
            name: 'dusknoir',
            pokedexNumbers: [
              { entryNumber: 155, name: 9 },
              { entryNumber: 191, name: 5 },
              { entryNumber: 477, name: 13 },
              { entryNumber: 137, name: 12 }
            ],
            evolutionChain: 182,
            types: [14],
            generation: 'Generation IV'
          },
          {
            name: 'froslass',
            pokedexNumbers: [
              { entryNumber: 181, name: 9 },
              { entryNumber: 208, name: 5 },
              { entryNumber: 478, name: 13 },
              { entryNumber: 325, name: 11 },
              { entryNumber: 248, name: 10 },
              { entryNumber: 81, name: 12 }
            ],
            evolutionChain: 186,
            types: [11, 14],
            generation: 'Generation IV'
          },
          {
            name: 'rotom',
            pokedexNumbers: [
              { entryNumber: 371, name: 8 },
              { entryNumber: 152, name: 5 },
              { entryNumber: 479, name: 13 },
              { entryNumber: 372, name: 12 }
            ],
            evolutionChain: 240,
            types: [7, 14],
            generation: 'Generation IV'
          },
          {
            name: 'rotom-heat',
            pokedexNumbers: [
              { entryNumber: 371, name: 8 },
              { entryNumber: 152, name: 5 },
              { entryNumber: 479, name: 13 }
            ],
            evolutionChain: 240,
            types: [7, 1],
            generation: 'Generation IV'
          },
          {
            name: 'rotom-wash',
            pokedexNumbers: [
              { entryNumber: 371, name: 8 },
              { entryNumber: 152, name: 5 },
              { entryNumber: 479, name: 13 }
            ],
            evolutionChain: 240,
            types: [7, 3],
            generation: 'Generation IV'
          },
          {
            name: 'rotom-frost',
            pokedexNumbers: [
              { entryNumber: 371, name: 8 },
              { entryNumber: 152, name: 5 },
              { entryNumber: 479, name: 13 }
            ],
            evolutionChain: 240,
            types: [7, 11],
            generation: 'Generation IV'
          },
          {
            name: 'rotom-fan',
            pokedexNumbers: [
              { entryNumber: 371, name: 8 },
              { entryNumber: 152, name: 5 },
              { entryNumber: 479, name: 13 }
            ],
            evolutionChain: 240,
            types: [7, 4],
            generation: 'Generation IV'
          },
          {
            name: 'rotom-mow',
            pokedexNumbers: [
              { entryNumber: 371, name: 8 },
              { entryNumber: 152, name: 5 },
              { entryNumber: 479, name: 13 }
            ],
            evolutionChain: 240,
            types: [7, 5],
            generation: 'Generation IV'
          },
          {
            name: 'uxie',
            pokedexNumbers: [
              { entryNumber: 146, name: 5 },
              { entryNumber: 146, name: 3 },
              { entryNumber: 480, name: 13 }
            ],
            evolutionChain: 241,
            types: [9],
            generation: 'Generation IV'
          },
          {
            name: 'mesprit',
            pokedexNumbers: [
              { entryNumber: 147, name: 5 },
              { entryNumber: 147, name: 3 },
              { entryNumber: 481, name: 13 }
            ],
            evolutionChain: 242,
            types: [9],
            generation: 'Generation IV'
          },
          {
            name: 'azelf',
            pokedexNumbers: [
              { entryNumber: 148, name: 5 },
              { entryNumber: 148, name: 3 },
              { entryNumber: 482, name: 13 }
            ],
            evolutionChain: 243,
            types: [9],
            generation: 'Generation IV'
          },
          {
            name: 'dialga',
            pokedexNumbers: [
              { entryNumber: 149, name: 5 },
              { entryNumber: 149, name: 3 },
              { entryNumber: 483, name: 13 }
            ],
            evolutionChain: 244,
            types: [16, 13],
            generation: 'Generation IV'
          },
          {
            name: 'palkia',
            pokedexNumbers: [
              { entryNumber: 150, name: 5 },
              { entryNumber: 150, name: 3 },
              { entryNumber: 484, name: 13 }
            ],
            evolutionChain: 245,
            types: [3, 13],
            generation: 'Generation IV'
          },
          {
            name: 'heatran',
            pokedexNumbers: [{ entryNumber: 485, name: 13 }],
            evolutionChain: 246,
            types: [1, 16],
            generation: 'Generation IV'
          },
          {
            name: 'regigigas',
            pokedexNumbers: [{ entryNumber: 486, name: 13 }],
            evolutionChain: 247,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'giratina',
            pokedexNumbers: [
              { entryNumber: 210, name: 5 },
              { entryNumber: 487, name: 13 }
            ],
            evolutionChain: 248,
            types: [14, 13],
            generation: 'Generation IV'
          },
          {
            name: 'cresselia',
            pokedexNumbers: [{ entryNumber: 488, name: 13 }],
            evolutionChain: 249,
            types: [9],
            generation: 'Generation IV'
          },
          {
            name: 'phione',
            pokedexNumbers: [{ entryNumber: 489, name: 13 }],
            evolutionChain: 250,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'manaphy',
            pokedexNumbers: [
              { entryNumber: 151, name: 5 },
              { entryNumber: 151, name: 3 },
              { entryNumber: 490, name: 13 }
            ],
            evolutionChain: 250,
            types: [3],
            generation: 'Generation IV'
          },
          {
            name: 'darkrai',
            pokedexNumbers: [{ entryNumber: 491, name: 13 }],
            evolutionChain: 252,
            types: [15],
            generation: 'Generation IV'
          },
          {
            name: 'shaymin-land',
            pokedexNumbers: [{ entryNumber: 492, name: 13 }],
            evolutionChain: 253,
            types: [5],
            generation: 'Generation IV'
          },
          {
            name: 'shaymin-sky',
            pokedexNumbers: [{ entryNumber: 492, name: 13 }],
            evolutionChain: 253,
            types: [5, 4],
            generation: 'Generation IV'
          },
          {
            name: 'arceus',
            pokedexNumbers: [{ entryNumber: 493, name: 13 }],
            evolutionChain: 254,
            types: [0],
            generation: 'Generation IV'
          },
          {
            name: 'victini',
            pokedexNumbers: [
              { entryNumber: 0, name: 7 },
              { entryNumber: 0, name: 6 },
              { entryNumber: 494, name: 13 }
            ],
            evolutionChain: 255,
            types: [9, 1],
            generation: 'Generation V'
          },
          {
            name: 'snivy',
            pokedexNumbers: [
              { entryNumber: 1, name: 7 },
              { entryNumber: 1, name: 6 },
              { entryNumber: 495, name: 13 }
            ],
            evolutionChain: 256,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'servine',
            pokedexNumbers: [
              { entryNumber: 2, name: 7 },
              { entryNumber: 2, name: 6 },
              { entryNumber: 496, name: 13 }
            ],
            evolutionChain: 256,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'serperior',
            pokedexNumbers: [
              { entryNumber: 3, name: 7 },
              { entryNumber: 3, name: 6 },
              { entryNumber: 497, name: 13 }
            ],
            evolutionChain: 256,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'tepig',
            pokedexNumbers: [
              { entryNumber: 4, name: 7 },
              { entryNumber: 4, name: 6 },
              { entryNumber: 498, name: 13 }
            ],
            evolutionChain: 257,
            types: [1],
            generation: 'Generation V'
          },
          {
            name: 'pignite',
            pokedexNumbers: [
              { entryNumber: 5, name: 7 },
              { entryNumber: 5, name: 6 },
              { entryNumber: 499, name: 13 }
            ],
            evolutionChain: 257,
            types: [1, 2],
            generation: 'Generation V'
          },
          {
            name: 'emboar',
            pokedexNumbers: [
              { entryNumber: 6, name: 7 },
              { entryNumber: 6, name: 6 },
              { entryNumber: 500, name: 13 }
            ],
            evolutionChain: 257,
            types: [1, 2],
            generation: 'Generation V'
          },
          {
            name: 'oshawott',
            pokedexNumbers: [
              { entryNumber: 7, name: 7 },
              { entryNumber: 7, name: 6 },
              { entryNumber: 501, name: 13 }
            ],
            evolutionChain: 258,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'dewott',
            pokedexNumbers: [
              { entryNumber: 8, name: 7 },
              { entryNumber: 8, name: 6 },
              { entryNumber: 502, name: 13 }
            ],
            evolutionChain: 258,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'samurott',
            pokedexNumbers: [
              { entryNumber: 9, name: 7 },
              { entryNumber: 9, name: 6 },
              { entryNumber: 503, name: 13 }
            ],
            evolutionChain: 258,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'patrat',
            pokedexNumbers: [
              { entryNumber: 349, name: 8 },
              { entryNumber: 10, name: 7 },
              { entryNumber: 10, name: 6 },
              { entryNumber: 504, name: 13 }
            ],
            evolutionChain: 259,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'watchog',
            pokedexNumbers: [
              { entryNumber: 350, name: 8 },
              { entryNumber: 11, name: 7 },
              { entryNumber: 11, name: 6 },
              { entryNumber: 505, name: 13 }
            ],
            evolutionChain: 259,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'lillipup',
            pokedexNumbers: [
              { entryNumber: 22, name: 7 },
              { entryNumber: 12, name: 6 },
              { entryNumber: 506, name: 13 },
              { entryNumber: 150, name: 11 },
              { entryNumber: 120, name: 10 }
            ],
            evolutionChain: 260,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'herdier',
            pokedexNumbers: [
              { entryNumber: 23, name: 7 },
              { entryNumber: 13, name: 6 },
              { entryNumber: 507, name: 13 },
              { entryNumber: 151, name: 11 },
              { entryNumber: 121, name: 10 }
            ],
            evolutionChain: 260,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'stoutland',
            pokedexNumbers: [
              { entryNumber: 24, name: 7 },
              { entryNumber: 14, name: 6 },
              { entryNumber: 508, name: 13 },
              { entryNumber: 152, name: 11 },
              { entryNumber: 122, name: 10 }
            ],
            evolutionChain: 260,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'purrloin',
            pokedexNumbers: [
              { entryNumber: 345, name: 8 },
              { entryNumber: 12, name: 7 },
              { entryNumber: 15, name: 6 },
              { entryNumber: 509, name: 13 },
              { entryNumber: 44, name: 12 }
            ],
            evolutionChain: 261,
            types: [15],
            generation: 'Generation V'
          },
          {
            name: 'liepard',
            pokedexNumbers: [
              { entryNumber: 346, name: 8 },
              { entryNumber: 13, name: 7 },
              { entryNumber: 16, name: 6 },
              { entryNumber: 510, name: 13 },
              { entryNumber: 45, name: 12 }
            ],
            evolutionChain: 261,
            types: [15],
            generation: 'Generation V'
          },
          {
            name: 'pansage',
            pokedexNumbers: [
              { entryNumber: 29, name: 8 },
              { entryNumber: 37, name: 7 },
              { entryNumber: 17, name: 6 },
              { entryNumber: 511, name: 13 }
            ],
            evolutionChain: 262,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'simisage',
            pokedexNumbers: [
              { entryNumber: 30, name: 8 },
              { entryNumber: 38, name: 7 },
              { entryNumber: 18, name: 6 },
              { entryNumber: 512, name: 13 }
            ],
            evolutionChain: 262,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'pansear',
            pokedexNumbers: [
              { entryNumber: 31, name: 8 },
              { entryNumber: 39, name: 7 },
              { entryNumber: 19, name: 6 },
              { entryNumber: 513, name: 13 }
            ],
            evolutionChain: 263,
            types: [1],
            generation: 'Generation V'
          },
          {
            name: 'simisear',
            pokedexNumbers: [
              { entryNumber: 32, name: 8 },
              { entryNumber: 40, name: 7 },
              { entryNumber: 20, name: 6 },
              { entryNumber: 514, name: 13 }
            ],
            evolutionChain: 263,
            types: [1],
            generation: 'Generation V'
          },
          {
            name: 'panpour',
            pokedexNumbers: [
              { entryNumber: 33, name: 8 },
              { entryNumber: 41, name: 7 },
              { entryNumber: 21, name: 6 },
              { entryNumber: 515, name: 13 }
            ],
            evolutionChain: 264,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'simipour',
            pokedexNumbers: [
              { entryNumber: 34, name: 8 },
              { entryNumber: 42, name: 7 },
              { entryNumber: 22, name: 6 },
              { entryNumber: 516, name: 13 }
            ],
            evolutionChain: 264,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'munna',
            pokedexNumbers: [
              { entryNumber: 86, name: 7 },
              { entryNumber: 23, name: 6 },
              { entryNumber: 517, name: 13 },
              { entryNumber: 90, name: 12 }
            ],
            evolutionChain: 265,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'musharna',
            pokedexNumbers: [
              { entryNumber: 87, name: 7 },
              { entryNumber: 24, name: 6 },
              { entryNumber: 518, name: 13 },
              { entryNumber: 91, name: 12 }
            ],
            evolutionChain: 265,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'pidove',
            pokedexNumbers: [
              { entryNumber: 14, name: 7 },
              { entryNumber: 25, name: 6 },
              { entryNumber: 519, name: 13 },
              { entryNumber: 26, name: 12 }
            ],
            evolutionChain: 266,
            types: [0, 4],
            generation: 'Generation V'
          },
          {
            name: 'tranquill',
            pokedexNumbers: [
              { entryNumber: 15, name: 7 },
              { entryNumber: 26, name: 6 },
              { entryNumber: 520, name: 13 },
              { entryNumber: 27, name: 12 }
            ],
            evolutionChain: 266,
            types: [0, 4],
            generation: 'Generation V'
          },
          {
            name: 'unfezant',
            pokedexNumbers: [
              { entryNumber: 16, name: 7 },
              { entryNumber: 27, name: 6 },
              { entryNumber: 521, name: 13 },
              { entryNumber: 28, name: 12 }
            ],
            evolutionChain: 266,
            types: [0, 4],
            generation: 'Generation V'
          },
          {
            name: 'blitzle',
            pokedexNumbers: [
              { entryNumber: 147, name: 7 },
              { entryNumber: 28, name: 6 },
              { entryNumber: 522, name: 13 }
            ],
            evolutionChain: 267,
            types: [7],
            generation: 'Generation V'
          },
          {
            name: 'zebstrika',
            pokedexNumbers: [
              { entryNumber: 148, name: 7 },
              { entryNumber: 29, name: 6 },
              { entryNumber: 523, name: 13 }
            ],
            evolutionChain: 267,
            types: [7],
            generation: 'Generation V'
          },
          {
            name: 'roggenrola',
            pokedexNumbers: [
              { entryNumber: 270, name: 8 },
              { entryNumber: 68, name: 7 },
              { entryNumber: 30, name: 6 },
              { entryNumber: 524, name: 13 },
              { entryNumber: 120, name: 11 },
              { entryNumber: 98, name: 10 },
              { entryNumber: 168, name: 12 }
            ],
            evolutionChain: 268,
            types: [10],
            generation: 'Generation V'
          },
          {
            name: 'boldore',
            pokedexNumbers: [
              { entryNumber: 271, name: 8 },
              { entryNumber: 69, name: 7 },
              { entryNumber: 31, name: 6 },
              { entryNumber: 525, name: 13 },
              { entryNumber: 121, name: 11 },
              { entryNumber: 99, name: 10 },
              { entryNumber: 169, name: 12 }
            ],
            evolutionChain: 268,
            types: [10],
            generation: 'Generation V'
          },
          {
            name: 'gigalith',
            pokedexNumbers: [
              { entryNumber: 272, name: 8 },
              { entryNumber: 70, name: 7 },
              { entryNumber: 32, name: 6 },
              { entryNumber: 526, name: 13 },
              { entryNumber: 122, name: 11 },
              { entryNumber: 100, name: 10 },
              { entryNumber: 170, name: 12 }
            ],
            evolutionChain: 268,
            types: [10],
            generation: 'Generation V'
          },
          {
            name: 'woobat',
            pokedexNumbers: [
              { entryNumber: 205, name: 8 },
              { entryNumber: 66, name: 7 },
              { entryNumber: 33, name: 6 },
              { entryNumber: 527, name: 13 },
              { entryNumber: 174, name: 12 }
            ],
            evolutionChain: 269,
            types: [9, 4],
            generation: 'Generation V'
          },
          {
            name: 'swoobat',
            pokedexNumbers: [
              { entryNumber: 206, name: 8 },
              { entryNumber: 67, name: 7 },
              { entryNumber: 34, name: 6 },
              { entryNumber: 528, name: 13 },
              { entryNumber: 175, name: 12 }
            ],
            evolutionChain: 269,
            types: [9, 4],
            generation: 'Generation V'
          },
          {
            name: 'drilbur',
            pokedexNumbers: [
              { entryNumber: 76, name: 7 },
              { entryNumber: 35, name: 6 },
              { entryNumber: 529, name: 13 },
              { entryNumber: 166, name: 12 }
            ],
            evolutionChain: 270,
            types: [8],
            generation: 'Generation V'
          },
          {
            name: 'excadrill',
            pokedexNumbers: [
              { entryNumber: 77, name: 7 },
              { entryNumber: 36, name: 6 },
              { entryNumber: 530, name: 13 },
              { entryNumber: 167, name: 12 }
            ],
            evolutionChain: 270,
            types: [8, 16],
            generation: 'Generation V'
          },
          {
            name: 'audino',
            pokedexNumbers: [
              { entryNumber: 123, name: 8 },
              { entryNumber: 36, name: 7 },
              { entryNumber: 37, name: 6 },
              { entryNumber: 531, name: 13 }
            ],
            evolutionChain: 271,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'audino-mega',
            pokedexNumbers: [
              { entryNumber: 123, name: 8 },
              { entryNumber: 36, name: 7 },
              { entryNumber: 37, name: 6 },
              { entryNumber: 531, name: 13 }
            ],
            evolutionChain: 271,
            types: [0, 17],
            generation: 'Generation VII'
          },
          {
            name: 'timburr',
            pokedexNumbers: [
              { entryNumber: 396, name: 8 },
              { entryNumber: 73, name: 7 },
              { entryNumber: 38, name: 6 },
              { entryNumber: 532, name: 13 },
              { entryNumber: 171, name: 12 }
            ],
            evolutionChain: 272,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'gurdurr',
            pokedexNumbers: [
              { entryNumber: 397, name: 8 },
              { entryNumber: 74, name: 7 },
              { entryNumber: 39, name: 6 },
              { entryNumber: 533, name: 13 },
              { entryNumber: 172, name: 12 }
            ],
            evolutionChain: 272,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'conkeldurr',
            pokedexNumbers: [
              { entryNumber: 398, name: 8 },
              { entryNumber: 75, name: 7 },
              { entryNumber: 40, name: 6 },
              { entryNumber: 534, name: 13 },
              { entryNumber: 173, name: 12 }
            ],
            evolutionChain: 272,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'tympole',
            pokedexNumbers: [
              { entryNumber: 228, name: 7 },
              { entryNumber: 41, name: 6 },
              { entryNumber: 535, name: 13 },
              { entryNumber: 132, name: 12 }
            ],
            evolutionChain: 273,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'palpitoad',
            pokedexNumbers: [
              { entryNumber: 229, name: 7 },
              { entryNumber: 42, name: 6 },
              { entryNumber: 536, name: 13 },
              { entryNumber: 133, name: 12 }
            ],
            evolutionChain: 273,
            types: [3, 8],
            generation: 'Generation V'
          },
          {
            name: 'seismitoad',
            pokedexNumbers: [
              { entryNumber: 230, name: 7 },
              { entryNumber: 43, name: 6 },
              { entryNumber: 537, name: 13 },
              { entryNumber: 134, name: 12 }
            ],
            evolutionChain: 273,
            types: [3, 8],
            generation: 'Generation V'
          },
          {
            name: 'throh',
            pokedexNumbers: [
              { entryNumber: 247, name: 8 },
              { entryNumber: 267, name: 7 },
              { entryNumber: 44, name: 6 },
              { entryNumber: 538, name: 13 },
              { entryNumber: 248, name: 12 }
            ],
            evolutionChain: 274,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'sawk',
            pokedexNumbers: [
              { entryNumber: 248, name: 8 },
              { entryNumber: 268, name: 7 },
              { entryNumber: 45, name: 6 },
              { entryNumber: 539, name: 13 },
              { entryNumber: 249, name: 12 }
            ],
            evolutionChain: 275,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'sewaddle',
            pokedexNumbers: [
              { entryNumber: 17, name: 7 },
              { entryNumber: 46, name: 6 },
              { entryNumber: 540, name: 13 }
            ],
            evolutionChain: 276,
            types: [12, 5],
            generation: 'Generation V'
          },
          {
            name: 'swadloon',
            pokedexNumbers: [
              { entryNumber: 18, name: 7 },
              { entryNumber: 47, name: 6 },
              { entryNumber: 541, name: 13 }
            ],
            evolutionChain: 276,
            types: [12, 5],
            generation: 'Generation V'
          },
          {
            name: 'leavanny',
            pokedexNumbers: [
              { entryNumber: 19, name: 7 },
              { entryNumber: 48, name: 6 },
              { entryNumber: 542, name: 13 }
            ],
            evolutionChain: 276,
            types: [12, 5],
            generation: 'Generation V'
          },
          {
            name: 'venipede',
            pokedexNumbers: [
              { entryNumber: 120, name: 8 },
              { entryNumber: 43, name: 7 },
              { entryNumber: 49, name: 6 },
              { entryNumber: 543, name: 13 }
            ],
            evolutionChain: 277,
            types: [12, 6],
            generation: 'Generation V'
          },
          {
            name: 'whirlipede',
            pokedexNumbers: [
              { entryNumber: 121, name: 8 },
              { entryNumber: 44, name: 7 },
              { entryNumber: 50, name: 6 },
              { entryNumber: 544, name: 13 }
            ],
            evolutionChain: 277,
            types: [12, 6],
            generation: 'Generation V'
          },
          {
            name: 'scolipede',
            pokedexNumbers: [
              { entryNumber: 122, name: 8 },
              { entryNumber: 45, name: 7 },
              { entryNumber: 51, name: 6 },
              { entryNumber: 545, name: 13 }
            ],
            evolutionChain: 277,
            types: [12, 6],
            generation: 'Generation V'
          },
          {
            name: 'cottonee',
            pokedexNumbers: [
              { entryNumber: 82, name: 7 },
              { entryNumber: 52, name: 6 },
              { entryNumber: 546, name: 13 },
              { entryNumber: 105, name: 11 },
              { entryNumber: 87, name: 10 },
              { entryNumber: 262, name: 12 }
            ],
            evolutionChain: 278,
            types: [5, 17],
            generation: 'Generation V'
          },
          {
            name: 'whimsicott',
            pokedexNumbers: [
              { entryNumber: 83, name: 7 },
              { entryNumber: 53, name: 6 },
              { entryNumber: 547, name: 13 },
              { entryNumber: 106, name: 11 },
              { entryNumber: 88, name: 10 },
              { entryNumber: 263, name: 12 }
            ],
            evolutionChain: 278,
            types: [5, 17],
            generation: 'Generation V'
          },
          {
            name: 'petilil',
            pokedexNumbers: [
              { entryNumber: 84, name: 7 },
              { entryNumber: 54, name: 6 },
              { entryNumber: 548, name: 13 },
              { entryNumber: 103, name: 11 },
              { entryNumber: 85, name: 10 }
            ],
            evolutionChain: 279,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'lilligant',
            pokedexNumbers: [
              { entryNumber: 85, name: 7 },
              { entryNumber: 55, name: 6 },
              { entryNumber: 549, name: 13 },
              { entryNumber: 104, name: 11 },
              { entryNumber: 86, name: 10 }
            ],
            evolutionChain: 279,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'basculin',
            pokedexNumbers: [
              { entryNumber: 363, name: 8 },
              { entryNumber: 104, name: 7 },
              { entryNumber: 56, name: 6 },
              { entryNumber: 550, name: 13 },
              { entryNumber: 154, name: 12 }
            ],
            evolutionChain: 280,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'sandile',
            pokedexNumbers: [
              { entryNumber: 193, name: 8 },
              { entryNumber: 99, name: 7 },
              { entryNumber: 57, name: 6 },
              { entryNumber: 551, name: 13 },
              { entryNumber: 301, name: 11 },
              { entryNumber: 232, name: 10 }
            ],
            evolutionChain: 281,
            types: [8, 15],
            generation: 'Generation V'
          },
          {
            name: 'krokorok',
            pokedexNumbers: [
              { entryNumber: 194, name: 8 },
              { entryNumber: 100, name: 7 },
              { entryNumber: 58, name: 6 },
              { entryNumber: 552, name: 13 },
              { entryNumber: 302, name: 11 },
              { entryNumber: 233, name: 10 }
            ],
            evolutionChain: 281,
            types: [8, 15],
            generation: 'Generation V'
          },
          {
            name: 'krookodile',
            pokedexNumbers: [
              { entryNumber: 195, name: 8 },
              { entryNumber: 101, name: 7 },
              { entryNumber: 59, name: 6 },
              { entryNumber: 553, name: 13 },
              { entryNumber: 303, name: 11 },
              { entryNumber: 234, name: 10 }
            ],
            evolutionChain: 281,
            types: [8, 15],
            generation: 'Generation V'
          },
          {
            name: 'darumaka',
            pokedexNumbers: [
              { entryNumber: 102, name: 7 },
              { entryNumber: 60, name: 6 },
              { entryNumber: 554, name: 13 },
              { entryNumber: 367, name: 12 }
            ],
            evolutionChain: 282,
            types: [1],
            generation: 'Generation V'
          },
          {
            name: 'darumaka-galar',
            pokedexNumbers: [
              { entryNumber: 102, name: 7 },
              { entryNumber: 60, name: 6 },
              { entryNumber: 554, name: 13 },
              { entryNumber: 367, name: 12 }
            ],
            evolutionChain: 282,
            types: [11],
            generation: 'Generation VIII'
          },
          {
            name: 'darmanitan-standard',
            pokedexNumbers: [
              { entryNumber: 103, name: 7 },
              { entryNumber: 61, name: 6 },
              { entryNumber: 555, name: 13 },
              { entryNumber: 368, name: 12 }
            ],
            evolutionChain: 282,
            types: [1],
            generation: 'Generation V'
          },
          {
            name: 'darmanitan-zen',
            pokedexNumbers: [
              { entryNumber: 103, name: 7 },
              { entryNumber: 61, name: 6 },
              { entryNumber: 555, name: 13 },
              { entryNumber: 368, name: 12 }
            ],
            evolutionChain: 282,
            types: [1, 9],
            generation: 'Generation V'
          },
          {
            name: 'darmanitan-galar',
            pokedexNumbers: [
              { entryNumber: 103, name: 7 },
              { entryNumber: 61, name: 6 },
              { entryNumber: 555, name: 13 },
              { entryNumber: 368, name: 12 }
            ],
            evolutionChain: 282,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'maractus',
            pokedexNumbers: [
              { entryNumber: 119, name: 7 },
              { entryNumber: 62, name: 6 },
              { entryNumber: 556, name: 13 },
              { entryNumber: 296, name: 12 }
            ],
            evolutionChain: 283,
            types: [5],
            generation: 'Generation V'
          },
          {
            name: 'dwebble',
            pokedexNumbers: [
              { entryNumber: 173, name: 8 },
              { entryNumber: 115, name: 7 },
              { entryNumber: 63, name: 6 },
              { entryNumber: 557, name: 13 },
              { entryNumber: 86, name: 12 }
            ],
            evolutionChain: 284,
            types: [12, 10],
            generation: 'Generation V'
          },
          {
            name: 'crustle',
            pokedexNumbers: [
              { entryNumber: 174, name: 8 },
              { entryNumber: 116, name: 7 },
              { entryNumber: 64, name: 6 },
              { entryNumber: 558, name: 13 },
              { entryNumber: 87, name: 12 }
            ],
            evolutionChain: 284,
            types: [12, 10],
            generation: 'Generation V'
          },
          {
            name: 'scraggy',
            pokedexNumbers: [
              { entryNumber: 100, name: 8 },
              { entryNumber: 117, name: 7 },
              { entryNumber: 65, name: 6 },
              { entryNumber: 559, name: 13 },
              { entryNumber: 335, name: 11 },
              { entryNumber: 224, name: 12 }
            ],
            evolutionChain: 285,
            types: [15, 2],
            generation: 'Generation V'
          },
          {
            name: 'scrafty',
            pokedexNumbers: [
              { entryNumber: 101, name: 8 },
              { entryNumber: 118, name: 7 },
              { entryNumber: 66, name: 6 },
              { entryNumber: 560, name: 13 },
              { entryNumber: 336, name: 11 },
              { entryNumber: 225, name: 12 }
            ],
            evolutionChain: 285,
            types: [15, 2],
            generation: 'Generation V'
          },
          {
            name: 'sigilyph',
            pokedexNumbers: [
              { entryNumber: 240, name: 8 },
              { entryNumber: 120, name: 7 },
              { entryNumber: 67, name: 6 },
              { entryNumber: 561, name: 13 },
              { entryNumber: 297, name: 12 }
            ],
            evolutionChain: 286,
            types: [9, 4],
            generation: 'Generation V'
          },
          {
            name: 'yamask',
            pokedexNumbers: [
              { entryNumber: 124, name: 7 },
              { entryNumber: 68, name: 6 },
              { entryNumber: 562, name: 13 }
            ],
            evolutionChain: 287,
            types: [14],
            generation: 'Generation V'
          },
          {
            name: 'yamask-galar',
            pokedexNumbers: [
              { entryNumber: 124, name: 7 },
              { entryNumber: 68, name: 6 },
              { entryNumber: 562, name: 13 },
              { entryNumber: 327, name: 12 }
            ],
            evolutionChain: 287,
            types: [14, 8],
            generation: 'Generation VIII'
          },
          {
            name: 'cofagrigus',
            pokedexNumbers: [
              { entryNumber: 125, name: 7 },
              { entryNumber: 69, name: 6 },
              { entryNumber: 563, name: 13 },
              { entryNumber: 329, name: 12 }
            ],
            evolutionChain: 287,
            types: [14],
            generation: 'Generation V'
          },
          {
            name: 'tirtouga',
            pokedexNumbers: [
              { entryNumber: 126, name: 7 },
              { entryNumber: 70, name: 6 },
              { entryNumber: 564, name: 13 },
              { entryNumber: 241, name: 11 },
              { entryNumber: 194, name: 10 }
            ],
            evolutionChain: 288,
            types: [3, 10],
            generation: 'Generation V'
          },
          {
            name: 'carracosta',
            pokedexNumbers: [
              { entryNumber: 127, name: 7 },
              { entryNumber: 71, name: 6 },
              { entryNumber: 565, name: 13 },
              { entryNumber: 242, name: 11 },
              { entryNumber: 195, name: 10 }
            ],
            evolutionChain: 288,
            types: [3, 10],
            generation: 'Generation V'
          },
          {
            name: 'archen',
            pokedexNumbers: [
              { entryNumber: 128, name: 7 },
              { entryNumber: 72, name: 6 },
              { entryNumber: 566, name: 13 },
              { entryNumber: 239, name: 11 },
              { entryNumber: 192, name: 10 }
            ],
            evolutionChain: 289,
            types: [10, 4],
            generation: 'Generation V'
          },
          {
            name: 'archeops',
            pokedexNumbers: [
              { entryNumber: 129, name: 7 },
              { entryNumber: 73, name: 6 },
              { entryNumber: 567, name: 13 },
              { entryNumber: 240, name: 11 },
              { entryNumber: 193, name: 10 }
            ],
            evolutionChain: 289,
            types: [10, 4],
            generation: 'Generation V'
          },
          {
            name: 'trubbish',
            pokedexNumbers: [
              { entryNumber: 377, name: 8 },
              { entryNumber: 105, name: 7 },
              { entryNumber: 74, name: 6 },
              { entryNumber: 568, name: 13 },
              { entryNumber: 264, name: 11 },
              { entryNumber: 206, name: 10 },
              { entryNumber: 157, name: 12 }
            ],
            evolutionChain: 290,
            types: [6],
            generation: 'Generation V'
          },
          {
            name: 'garbodor',
            pokedexNumbers: [
              { entryNumber: 378, name: 8 },
              { entryNumber: 106, name: 7 },
              { entryNumber: 75, name: 6 },
              { entryNumber: 569, name: 13 },
              { entryNumber: 265, name: 11 },
              { entryNumber: 207, name: 10 },
              { entryNumber: 158, name: 12 }
            ],
            evolutionChain: 290,
            types: [6],
            generation: 'Generation V'
          },
          {
            name: 'zorua',
            pokedexNumbers: [
              { entryNumber: 427, name: 8 },
              { entryNumber: 151, name: 7 },
              { entryNumber: 76, name: 6 },
              { entryNumber: 570, name: 13 },
              { entryNumber: 28, name: 11 }
            ],
            evolutionChain: 291,
            types: [15],
            generation: 'Generation V'
          },
          {
            name: 'zoroark',
            pokedexNumbers: [
              { entryNumber: 428, name: 8 },
              { entryNumber: 152, name: 7 },
              { entryNumber: 77, name: 6 },
              { entryNumber: 571, name: 13 },
              { entryNumber: 29, name: 11 }
            ],
            evolutionChain: 291,
            types: [15],
            generation: 'Generation V'
          },
          {
            name: 'minccino',
            pokedexNumbers: [
              { entryNumber: 107, name: 7 },
              { entryNumber: 78, name: 6 },
              { entryNumber: 572, name: 13 },
              { entryNumber: 266, name: 11 },
              { entryNumber: 50, name: 12 }
            ],
            evolutionChain: 292,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'cinccino',
            pokedexNumbers: [
              { entryNumber: 108, name: 7 },
              { entryNumber: 79, name: 6 },
              { entryNumber: 573, name: 13 },
              { entryNumber: 267, name: 11 },
              { entryNumber: 51, name: 12 }
            ],
            evolutionChain: 292,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'gothita',
            pokedexNumbers: [
              { entryNumber: 429, name: 8 },
              { entryNumber: 136, name: 7 },
              { entryNumber: 80, name: 6 },
              { entryNumber: 574, name: 13 },
              { entryNumber: 267, name: 12 }
            ],
            evolutionChain: 293,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'gothorita',
            pokedexNumbers: [
              { entryNumber: 430, name: 8 },
              { entryNumber: 137, name: 7 },
              { entryNumber: 81, name: 6 },
              { entryNumber: 575, name: 13 },
              { entryNumber: 268, name: 12 }
            ],
            evolutionChain: 293,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'gothitelle',
            pokedexNumbers: [
              { entryNumber: 431, name: 8 },
              { entryNumber: 138, name: 7 },
              { entryNumber: 82, name: 6 },
              { entryNumber: 576, name: 13 },
              { entryNumber: 269, name: 12 }
            ],
            evolutionChain: 293,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'solosis',
            pokedexNumbers: [
              { entryNumber: 265, name: 8 },
              { entryNumber: 139, name: 7 },
              { entryNumber: 83, name: 6 },
              { entryNumber: 577, name: 13 },
              { entryNumber: 270, name: 12 }
            ],
            evolutionChain: 294,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'duosion',
            pokedexNumbers: [
              { entryNumber: 266, name: 8 },
              { entryNumber: 140, name: 7 },
              { entryNumber: 84, name: 6 },
              { entryNumber: 578, name: 13 },
              { entryNumber: 271, name: 12 }
            ],
            evolutionChain: 294,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'reuniclus',
            pokedexNumbers: [
              { entryNumber: 267, name: 8 },
              { entryNumber: 141, name: 7 },
              { entryNumber: 85, name: 6 },
              { entryNumber: 579, name: 13 },
              { entryNumber: 272, name: 12 }
            ],
            evolutionChain: 294,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'ducklett',
            pokedexNumbers: [
              { entryNumber: 127, name: 8 },
              { entryNumber: 153, name: 7 },
              { entryNumber: 86, name: 6 },
              { entryNumber: 580, name: 13 }
            ],
            evolutionChain: 295,
            types: [3, 4],
            generation: 'Generation V'
          },
          {
            name: 'swanna',
            pokedexNumbers: [
              { entryNumber: 128, name: 8 },
              { entryNumber: 154, name: 7 },
              { entryNumber: 87, name: 6 },
              { entryNumber: 581, name: 13 }
            ],
            evolutionChain: 295,
            types: [3, 4],
            generation: 'Generation V'
          },
          {
            name: 'vanillite',
            pokedexNumbers: [
              { entryNumber: 388, name: 8 },
              { entryNumber: 255, name: 7 },
              { entryNumber: 88, name: 6 },
              { entryNumber: 582, name: 13 },
              { entryNumber: 332, name: 11 },
              { entryNumber: 255, name: 10 },
              { entryNumber: 72, name: 12 }
            ],
            evolutionChain: 296,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'vanillish',
            pokedexNumbers: [
              { entryNumber: 389, name: 8 },
              { entryNumber: 256, name: 7 },
              { entryNumber: 89, name: 6 },
              { entryNumber: 583, name: 13 },
              { entryNumber: 333, name: 11 },
              { entryNumber: 256, name: 10 },
              { entryNumber: 73, name: 12 }
            ],
            evolutionChain: 296,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'vanilluxe',
            pokedexNumbers: [
              { entryNumber: 390, name: 8 },
              { entryNumber: 257, name: 7 },
              { entryNumber: 90, name: 6 },
              { entryNumber: 584, name: 13 },
              { entryNumber: 334, name: 11 },
              { entryNumber: 257, name: 10 },
              { entryNumber: 74, name: 12 }
            ],
            evolutionChain: 296,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'deerling',
            pokedexNumbers: [
              { entryNumber: 159, name: 7 },
              { entryNumber: 91, name: 6 },
              { entryNumber: 585, name: 13 }
            ],
            evolutionChain: 297,
            types: [0, 5],
            generation: 'Generation V'
          },
          {
            name: 'sawsbuck',
            pokedexNumbers: [
              { entryNumber: 160, name: 7 },
              { entryNumber: 92, name: 6 },
              { entryNumber: 586, name: 13 }
            ],
            evolutionChain: 297,
            types: [0, 5],
            generation: 'Generation V'
          },
          {
            name: 'emolga',
            pokedexNumbers: [
              { entryNumber: 236, name: 8 },
              { entryNumber: 144, name: 7 },
              { entryNumber: 93, name: 6 },
              { entryNumber: 587, name: 13 },
              { entryNumber: 364, name: 11 },
              { entryNumber: 274, name: 10 }
            ],
            evolutionChain: 298,
            types: [7, 4],
            generation: 'Generation V'
          },
          {
            name: 'karrablast',
            pokedexNumbers: [
              { entryNumber: 325, name: 8 },
              { entryNumber: 155, name: 7 },
              { entryNumber: 94, name: 6 },
              { entryNumber: 588, name: 13 },
              { entryNumber: 273, name: 12 }
            ],
            evolutionChain: 299,
            types: [12],
            generation: 'Generation V'
          },
          {
            name: 'escavalier',
            pokedexNumbers: [
              { entryNumber: 326, name: 8 },
              { entryNumber: 156, name: 7 },
              { entryNumber: 95, name: 6 },
              { entryNumber: 589, name: 13 },
              { entryNumber: 274, name: 12 }
            ],
            evolutionChain: 299,
            types: [12, 16],
            generation: 'Generation V'
          },
          {
            name: 'foongus',
            pokedexNumbers: [
              { entryNumber: 356, name: 8 },
              { entryNumber: 161, name: 7 },
              { entryNumber: 96, name: 6 },
              { entryNumber: 590, name: 13 }
            ],
            evolutionChain: 300,
            types: [5, 6],
            generation: 'Generation V'
          },
          {
            name: 'amoonguss',
            pokedexNumbers: [
              { entryNumber: 357, name: 8 },
              { entryNumber: 162, name: 7 },
              { entryNumber: 97, name: 6 },
              { entryNumber: 591, name: 13 }
            ],
            evolutionChain: 300,
            types: [5, 6],
            generation: 'Generation V'
          },
          {
            name: 'frillish',
            pokedexNumbers: [
              { entryNumber: 180, name: 7 },
              { entryNumber: 98, name: 6 },
              { entryNumber: 592, name: 13 },
              { entryNumber: 318, name: 11 },
              { entryNumber: 305, name: 12 }
            ],
            evolutionChain: 301,
            types: [3, 14],
            generation: 'Generation V'
          },
          {
            name: 'jellicent',
            pokedexNumbers: [
              { entryNumber: 181, name: 7 },
              { entryNumber: 99, name: 6 },
              { entryNumber: 593, name: 13 },
              { entryNumber: 319, name: 11 },
              { entryNumber: 306, name: 12 }
            ],
            evolutionChain: 301,
            types: [3, 14],
            generation: 'Generation V'
          },
          {
            name: 'alomomola',
            pokedexNumbers: [
              { entryNumber: 299, name: 8 },
              { entryNumber: 182, name: 7 },
              { entryNumber: 100, name: 6 },
              { entryNumber: 594, name: 13 },
              { entryNumber: 191, name: 11 },
              { entryNumber: 157, name: 10 }
            ],
            evolutionChain: 302,
            types: [3],
            generation: 'Generation V'
          },
          {
            name: 'joltik',
            pokedexNumbers: [
              { entryNumber: 173, name: 7 },
              { entryNumber: 101, name: 6 },
              { entryNumber: 595, name: 13 },
              { entryNumber: 64, name: 12 }
            ],
            evolutionChain: 303,
            types: [12, 7],
            generation: 'Generation V'
          },
          {
            name: 'galvantula',
            pokedexNumbers: [
              { entryNumber: 174, name: 7 },
              { entryNumber: 102, name: 6 },
              { entryNumber: 596, name: 13 },
              { entryNumber: 65, name: 12 }
            ],
            evolutionChain: 303,
            types: [12, 7],
            generation: 'Generation V'
          },
          {
            name: 'ferroseed',
            pokedexNumbers: [
              { entryNumber: 219, name: 8 },
              { entryNumber: 175, name: 7 },
              { entryNumber: 103, name: 6 },
              { entryNumber: 597, name: 13 },
              { entryNumber: 189, name: 12 }
            ],
            evolutionChain: 304,
            types: [5, 16],
            generation: 'Generation V'
          },
          {
            name: 'ferrothorn',
            pokedexNumbers: [
              { entryNumber: 220, name: 8 },
              { entryNumber: 176, name: 7 },
              { entryNumber: 104, name: 6 },
              { entryNumber: 598, name: 13 },
              { entryNumber: 190, name: 12 }
            ],
            evolutionChain: 304,
            types: [5, 16],
            generation: 'Generation V'
          },
          {
            name: 'klink',
            pokedexNumbers: [
              { entryNumber: 130, name: 7 },
              { entryNumber: 105, name: 6 },
              { entryNumber: 599, name: 13 },
              { entryNumber: 113, name: 12 }
            ],
            evolutionChain: 305,
            types: [16],
            generation: 'Generation V'
          },
          {
            name: 'klang',
            pokedexNumbers: [
              { entryNumber: 131, name: 7 },
              { entryNumber: 106, name: 6 },
              { entryNumber: 600, name: 13 },
              { entryNumber: 114, name: 12 }
            ],
            evolutionChain: 305,
            types: [16],
            generation: 'Generation V'
          },
          {
            name: 'klinklang',
            pokedexNumbers: [
              { entryNumber: 132, name: 7 },
              { entryNumber: 107, name: 6 },
              { entryNumber: 601, name: 13 },
              { entryNumber: 115, name: 12 }
            ],
            evolutionChain: 305,
            types: [16],
            generation: 'Generation V'
          },
          {
            name: 'tynamo',
            pokedexNumbers: [
              { entryNumber: 177, name: 7 },
              { entryNumber: 108, name: 6 },
              { entryNumber: 602, name: 13 }
            ],
            evolutionChain: 306,
            types: [7],
            generation: 'Generation V'
          },
          {
            name: 'eelektrik',
            pokedexNumbers: [
              { entryNumber: 178, name: 7 },
              { entryNumber: 109, name: 6 },
              { entryNumber: 603, name: 13 }
            ],
            evolutionChain: 306,
            types: [7],
            generation: 'Generation V'
          },
          {
            name: 'eelektross',
            pokedexNumbers: [
              { entryNumber: 179, name: 7 },
              { entryNumber: 110, name: 6 },
              { entryNumber: 604, name: 13 }
            ],
            evolutionChain: 306,
            types: [7],
            generation: 'Generation V'
          },
          {
            name: 'elgyem',
            pokedexNumbers: [
              { entryNumber: 188, name: 7 },
              { entryNumber: 111, name: 6 },
              { entryNumber: 605, name: 13 },
              { entryNumber: 275, name: 11 },
              { entryNumber: 277, name: 12 }
            ],
            evolutionChain: 307,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'beheeyem',
            pokedexNumbers: [
              { entryNumber: 189, name: 7 },
              { entryNumber: 112, name: 6 },
              { entryNumber: 606, name: 13 },
              { entryNumber: 276, name: 11 },
              { entryNumber: 278, name: 12 }
            ],
            evolutionChain: 307,
            types: [9],
            generation: 'Generation V'
          },
          {
            name: 'litwick',
            pokedexNumbers: [
              { entryNumber: 368, name: 8 },
              { entryNumber: 190, name: 7 },
              { entryNumber: 113, name: 6 },
              { entryNumber: 607, name: 13 },
              { entryNumber: 287, name: 12 }
            ],
            evolutionChain: 308,
            types: [14, 1],
            generation: 'Generation V'
          },
          {
            name: 'lampent',
            pokedexNumbers: [
              { entryNumber: 369, name: 8 },
              { entryNumber: 191, name: 7 },
              { entryNumber: 114, name: 6 },
              { entryNumber: 608, name: 13 },
              { entryNumber: 288, name: 12 }
            ],
            evolutionChain: 308,
            types: [14, 1],
            generation: 'Generation V'
          },
          {
            name: 'chandelure',
            pokedexNumbers: [
              { entryNumber: 370, name: 8 },
              { entryNumber: 192, name: 7 },
              { entryNumber: 115, name: 6 },
              { entryNumber: 609, name: 13 },
              { entryNumber: 289, name: 12 }
            ],
            evolutionChain: 308,
            types: [14, 1],
            generation: 'Generation V'
          },
          {
            name: 'axew',
            pokedexNumbers: [
              { entryNumber: 148, name: 8 },
              { entryNumber: 183, name: 7 },
              { entryNumber: 116, name: 6 },
              { entryNumber: 610, name: 13 },
              { entryNumber: 324, name: 12 }
            ],
            evolutionChain: 309,
            types: [13],
            generation: 'Generation V'
          },
          {
            name: 'fraxure',
            pokedexNumbers: [
              { entryNumber: 149, name: 8 },
              { entryNumber: 184, name: 7 },
              { entryNumber: 117, name: 6 },
              { entryNumber: 611, name: 13 },
              { entryNumber: 325, name: 12 }
            ],
            evolutionChain: 309,
            types: [13],
            generation: 'Generation V'
          },
          {
            name: 'haxorus',
            pokedexNumbers: [
              { entryNumber: 150, name: 8 },
              { entryNumber: 185, name: 7 },
              { entryNumber: 118, name: 6 },
              { entryNumber: 612, name: 13 },
              { entryNumber: 326, name: 12 }
            ],
            evolutionChain: 309,
            types: [13],
            generation: 'Generation V'
          },
          {
            name: 'cubchoo',
            pokedexNumbers: [
              { entryNumber: 384, name: 8 },
              { entryNumber: 195, name: 7 },
              { entryNumber: 119, name: 6 },
              { entryNumber: 613, name: 13 },
              { entryNumber: 279, name: 12 }
            ],
            evolutionChain: 310,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'beartic',
            pokedexNumbers: [
              { entryNumber: 385, name: 8 },
              { entryNumber: 196, name: 7 },
              { entryNumber: 120, name: 6 },
              { entryNumber: 614, name: 13 },
              { entryNumber: 280, name: 12 }
            ],
            evolutionChain: 310,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'cryogonal',
            pokedexNumbers: [
              { entryNumber: 414, name: 8 },
              { entryNumber: 197, name: 7 },
              { entryNumber: 121, name: 6 },
              { entryNumber: 615, name: 13 }
            ],
            evolutionChain: 311,
            types: [11],
            generation: 'Generation V'
          },
          {
            name: 'shelmet',
            pokedexNumbers: [
              { entryNumber: 327, name: 8 },
              { entryNumber: 157, name: 7 },
              { entryNumber: 122, name: 6 },
              { entryNumber: 616, name: 13 },
              { entryNumber: 275, name: 12 }
            ],
            evolutionChain: 312,
            types: [12],
            generation: 'Generation V'
          },
          {
            name: 'accelgor',
            pokedexNumbers: [
              { entryNumber: 328, name: 8 },
              { entryNumber: 158, name: 7 },
              { entryNumber: 123, name: 6 },
              { entryNumber: 617, name: 13 },
              { entryNumber: 276, name: 12 }
            ],
            evolutionChain: 312,
            types: [12],
            generation: 'Generation V'
          },
          {
            name: 'stunfisk',
            pokedexNumbers: [
              { entryNumber: 342, name: 8 },
              { entryNumber: 231, name: 7 },
              { entryNumber: 124, name: 6 },
              { entryNumber: 618, name: 13 }
            ],
            evolutionChain: 313,
            types: [8, 7],
            generation: 'Generation V'
          },
          {
            name: 'stunfisk-galar',
            pokedexNumbers: [
              { entryNumber: 342, name: 8 },
              { entryNumber: 231, name: 7 },
              { entryNumber: 124, name: 6 },
              { entryNumber: 618, name: 13 },
              { entryNumber: 226, name: 12 }
            ],
            evolutionChain: 313,
            types: [8, 16],
            generation: 'Generation VIII'
          },
          {
            name: 'mienfoo',
            pokedexNumbers: [
              { entryNumber: 153, name: 8 },
              { entryNumber: 219, name: 7 },
              { entryNumber: 125, name: 6 },
              { entryNumber: 619, name: 13 },
              { entryNumber: 359, name: 11 }
            ],
            evolutionChain: 314,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'mienshao',
            pokedexNumbers: [
              { entryNumber: 154, name: 8 },
              { entryNumber: 220, name: 7 },
              { entryNumber: 126, name: 6 },
              { entryNumber: 620, name: 13 },
              { entryNumber: 360, name: 11 }
            ],
            evolutionChain: 314,
            types: [2],
            generation: 'Generation V'
          },
          {
            name: 'druddigon',
            pokedexNumbers: [
              { entryNumber: 444, name: 8 },
              { entryNumber: 270, name: 7 },
              { entryNumber: 127, name: 6 },
              { entryNumber: 621, name: 13 },
              { entryNumber: 374, name: 11 }
            ],
            evolutionChain: 315,
            types: [13],
            generation: 'Generation V'
          },
          {
            name: 'golett',
            pokedexNumbers: [
              { entryNumber: 241, name: 8 },
              { entryNumber: 271, name: 7 },
              { entryNumber: 128, name: 6 },
              { entryNumber: 622, name: 13 },
              { entryNumber: 312, name: 11 },
              { entryNumber: 88, name: 12 }
            ],
            evolutionChain: 316,
            types: [8, 14],
            generation: 'Generation V'
          },
          {
            name: 'golurk',
            pokedexNumbers: [
              { entryNumber: 242, name: 8 },
              { entryNumber: 272, name: 7 },
              { entryNumber: 129, name: 6 },
              { entryNumber: 623, name: 13 },
              { entryNumber: 313, name: 11 },
              { entryNumber: 89, name: 12 }
            ],
            evolutionChain: 316,
            types: [8, 14],
            generation: 'Generation V'
          },
          {
            name: 'pawniard',
            pokedexNumbers: [
              { entryNumber: 351, name: 8 },
              { entryNumber: 223, name: 7 },
              { entryNumber: 130, name: 6 },
              { entryNumber: 624, name: 13 },
              { entryNumber: 337, name: 11 },
              { entryNumber: 246, name: 12 }
            ],
            evolutionChain: 317,
            types: [15, 16],
            generation: 'Generation V'
          },
          {
            name: 'bisharp',
            pokedexNumbers: [
              { entryNumber: 352, name: 8 },
              { entryNumber: 224, name: 7 },
              { entryNumber: 131, name: 6 },
              { entryNumber: 625, name: 13 },
              { entryNumber: 338, name: 11 },
              { entryNumber: 247, name: 12 }
            ],
            evolutionChain: 317,
            types: [15, 16],
            generation: 'Generation V'
          },
          {
            name: 'bouffalant',
            pokedexNumbers: [
              { entryNumber: 269, name: 7 },
              { entryNumber: 132, name: 6 },
              { entryNumber: 626, name: 13 }
            ],
            evolutionChain: 318,
            types: [0],
            generation: 'Generation V'
          },
          {
            name: 'rufflet',
            pokedexNumbers: [
              { entryNumber: 109, name: 7 },
              { entryNumber: 133, name: 6 },
              { entryNumber: 627, name: 13 },
              { entryNumber: 89, name: 11 },
              { entryNumber: 75, name: 10 },
              { entryNumber: 281, name: 12 }
            ],
            evolutionChain: 319,
            types: [0, 4],
            generation: 'Generation V'
          },
          {
            name: 'braviary',
            pokedexNumbers: [
              { entryNumber: 110, name: 7 },
              { entryNumber: 134, name: 6 },
              { entryNumber: 628, name: 13 },
              { entryNumber: 90, name: 11 },
              { entryNumber: 76, name: 10 },
              { entryNumber: 282, name: 12 }
            ],
            evolutionChain: 319,
            types: [0, 4],
            generation: 'Generation V'
          },
          {
            name: 'vullaby',
            pokedexNumbers: [
              { entryNumber: 111, name: 7 },
              { entryNumber: 135, name: 6 },
              { entryNumber: 629, name: 13 },
              { entryNumber: 91, name: 11 },
              { entryNumber: 77, name: 10 },
              { entryNumber: 283, name: 12 }
            ],
            evolutionChain: 320,
            types: [15, 4],
            generation: 'Generation V'
          },
          {
            name: 'mandibuzz',
            pokedexNumbers: [
              { entryNumber: 112, name: 7 },
              { entryNumber: 136, name: 6 },
              { entryNumber: 630, name: 13 },
              { entryNumber: 92, name: 11 },
              { entryNumber: 78, name: 10 },
              { entryNumber: 284, name: 12 }
            ],
            evolutionChain: 320,
            types: [15, 4],
            generation: 'Generation V'
          },
          {
            name: 'heatmor',
            pokedexNumbers: [
              { entryNumber: 408, name: 8 },
              { entryNumber: 193, name: 7 },
              { entryNumber: 137, name: 6 },
              { entryNumber: 631, name: 13 },
              { entryNumber: 317, name: 12 }
            ],
            evolutionChain: 321,
            types: [1],
            generation: 'Generation V'
          },
          {
            name: 'durant',
            pokedexNumbers: [
              { entryNumber: 409, name: 8 },
              { entryNumber: 194, name: 7 },
              { entryNumber: 138, name: 6 },
              { entryNumber: 632, name: 13 },
              { entryNumber: 316, name: 12 }
            ],
            evolutionChain: 322,
            types: [12, 16],
            generation: 'Generation V'
          },
          {
            name: 'deino',
            pokedexNumbers: [
              { entryNumber: 445, name: 8 },
              { entryNumber: 273, name: 7 },
              { entryNumber: 139, name: 6 },
              { entryNumber: 633, name: 13 },
              { entryNumber: 386, name: 12 }
            ],
            evolutionChain: 323,
            types: [15, 13],
            generation: 'Generation V'
          },
          {
            name: 'zweilous',
            pokedexNumbers: [
              { entryNumber: 446, name: 8 },
              { entryNumber: 274, name: 7 },
              { entryNumber: 140, name: 6 },
              { entryNumber: 634, name: 13 },
              { entryNumber: 387, name: 12 }
            ],
            evolutionChain: 323,
            types: [15, 13],
            generation: 'Generation V'
          },
          {
            name: 'hydreigon',
            pokedexNumbers: [
              { entryNumber: 447, name: 8 },
              { entryNumber: 275, name: 7 },
              { entryNumber: 141, name: 6 },
              { entryNumber: 635, name: 13 },
              { entryNumber: 388, name: 12 }
            ],
            evolutionChain: 323,
            types: [15, 13],
            generation: 'Generation V'
          },
          {
            name: 'larvesta',
            pokedexNumbers: [
              { entryNumber: 171, name: 7 },
              { entryNumber: 142, name: 6 },
              { entryNumber: 636, name: 13 },
              { entryNumber: 203, name: 11 }
            ],
            evolutionChain: 324,
            types: [12, 1],
            generation: 'Generation V'
          },
          {
            name: 'volcarona',
            pokedexNumbers: [
              { entryNumber: 172, name: 7 },
              { entryNumber: 143, name: 6 },
              { entryNumber: 637, name: 13 },
              { entryNumber: 204, name: 11 }
            ],
            evolutionChain: 324,
            types: [12, 1],
            generation: 'Generation V'
          },
          {
            name: 'cobalion',
            pokedexNumbers: [
              { entryNumber: 225, name: 7 },
              { entryNumber: 144, name: 6 },
              { entryNumber: 638, name: 13 }
            ],
            evolutionChain: 325,
            types: [16, 2],
            generation: 'Generation V'
          },
          {
            name: 'terrakion',
            pokedexNumbers: [
              { entryNumber: 226, name: 7 },
              { entryNumber: 145, name: 6 },
              { entryNumber: 639, name: 13 }
            ],
            evolutionChain: 326,
            types: [10, 2],
            generation: 'Generation V'
          },
          {
            name: 'virizion',
            pokedexNumbers: [
              { entryNumber: 227, name: 7 },
              { entryNumber: 146, name: 6 },
              { entryNumber: 640, name: 13 }
            ],
            evolutionChain: 327,
            types: [5, 2],
            generation: 'Generation V'
          },
          {
            name: 'tornadus',
            pokedexNumbers: [
              { entryNumber: 198, name: 7 },
              { entryNumber: 147, name: 6 },
              { entryNumber: 641, name: 13 }
            ],
            evolutionChain: 328,
            types: [4],
            generation: 'Generation V'
          },
          {
            name: 'thundurus',
            pokedexNumbers: [
              { entryNumber: 199, name: 7 },
              { entryNumber: 148, name: 6 },
              { entryNumber: 642, name: 13 }
            ],
            evolutionChain: 329,
            types: [7, 4],
            generation: 'Generation V'
          },
          {
            name: 'reshiram',
            pokedexNumbers: [
              { entryNumber: 295, name: 7 },
              { entryNumber: 149, name: 6 },
              { entryNumber: 643, name: 13 }
            ],
            evolutionChain: 330,
            types: [13, 1],
            generation: 'Generation V'
          },
          {
            name: 'zekrom',
            pokedexNumbers: [
              { entryNumber: 296, name: 7 },
              { entryNumber: 150, name: 6 },
              { entryNumber: 644, name: 13 }
            ],
            evolutionChain: 331,
            types: [13, 7],
            generation: 'Generation V'
          },
          {
            name: 'landorus',
            pokedexNumbers: [
              { entryNumber: 200, name: 7 },
              { entryNumber: 151, name: 6 },
              { entryNumber: 645, name: 13 }
            ],
            evolutionChain: 332,
            types: [8, 4],
            generation: 'Generation V'
          },
          {
            name: 'kyurem',
            pokedexNumbers: [
              { entryNumber: 297, name: 7 },
              { entryNumber: 152, name: 6 },
              { entryNumber: 646, name: 13 }
            ],
            evolutionChain: 333,
            types: [13, 11],
            generation: 'Generation V'
          },
          {
            name: 'keldeo',
            pokedexNumbers: [
              { entryNumber: 298, name: 7 },
              { entryNumber: 153, name: 6 },
              { entryNumber: 647, name: 13 }
            ],
            evolutionChain: 334,
            types: [3, 2],
            generation: 'Generation V'
          },
          {
            name: 'meloetta',
            pokedexNumbers: [
              { entryNumber: 299, name: 7 },
              { entryNumber: 154, name: 6 },
              { entryNumber: 648, name: 13 }
            ],
            evolutionChain: 335,
            types: [0, 9],
            generation: 'Generation V'
          },
          {
            name: 'genesect',
            pokedexNumbers: [
              { entryNumber: 300, name: 7 },
              { entryNumber: 155, name: 6 },
              { entryNumber: 649, name: 13 }
            ],
            evolutionChain: 336,
            types: [12, 16],
            generation: 'Generation V'
          },
          {
            name: 'chespin',
            pokedexNumbers: [
              { entryNumber: 1, name: 8 },
              { entryNumber: 650, name: 13 }
            ],
            evolutionChain: 337,
            types: [5],
            generation: 'Generation VI'
          },
          {
            name: 'quilladin',
            pokedexNumbers: [
              { entryNumber: 2, name: 8 },
              { entryNumber: 651, name: 13 }
            ],
            evolutionChain: 337,
            types: [5],
            generation: 'Generation VI'
          },
          {
            name: 'chesnaught',
            pokedexNumbers: [
              { entryNumber: 3, name: 8 },
              { entryNumber: 652, name: 13 }
            ],
            evolutionChain: 337,
            types: [5, 2],
            generation: 'Generation VI'
          },
          {
            name: 'fennekin',
            pokedexNumbers: [
              { entryNumber: 4, name: 8 },
              { entryNumber: 653, name: 13 }
            ],
            evolutionChain: 338,
            types: [1],
            generation: 'Generation VI'
          },
          {
            name: 'braixen',
            pokedexNumbers: [
              { entryNumber: 5, name: 8 },
              { entryNumber: 654, name: 13 }
            ],
            evolutionChain: 338,
            types: [1],
            generation: 'Generation VI'
          },
          {
            name: 'delphox',
            pokedexNumbers: [
              { entryNumber: 6, name: 8 },
              { entryNumber: 655, name: 13 }
            ],
            evolutionChain: 338,
            types: [1, 9],
            generation: 'Generation VI'
          },
          {
            name: 'froakie',
            pokedexNumbers: [
              { entryNumber: 7, name: 8 },
              { entryNumber: 656, name: 13 }
            ],
            evolutionChain: 339,
            types: [3],
            generation: 'Generation VI'
          },
          {
            name: 'frogadier',
            pokedexNumbers: [
              { entryNumber: 8, name: 8 },
              { entryNumber: 657, name: 13 }
            ],
            evolutionChain: 339,
            types: [3],
            generation: 'Generation VI'
          },
          {
            name: 'greninja',
            pokedexNumbers: [
              { entryNumber: 9, name: 8 },
              { entryNumber: 658, name: 13 }
            ],
            evolutionChain: 339,
            types: [3, 15],
            generation: 'Generation VI'
          },
          {
            name: 'bunnelby',
            pokedexNumbers: [
              { entryNumber: 10, name: 8 },
              { entryNumber: 659, name: 13 },
              { entryNumber: 48, name: 12 }
            ],
            evolutionChain: 340,
            types: [0],
            generation: 'Generation VI'
          },
          {
            name: 'diggersby',
            pokedexNumbers: [
              { entryNumber: 11, name: 8 },
              { entryNumber: 660, name: 13 },
              { entryNumber: 49, name: 12 }
            ],
            evolutionChain: 340,
            types: [0, 8],
            generation: 'Generation VI'
          },
          {
            name: 'fletchling',
            pokedexNumbers: [
              { entryNumber: 14, name: 8 },
              { entryNumber: 661, name: 13 },
              { entryNumber: 192, name: 11 },
              { entryNumber: 158, name: 10 }
            ],
            evolutionChain: 341,
            types: [0, 4],
            generation: 'Generation VI'
          },
          {
            name: 'fletchinder',
            pokedexNumbers: [
              { entryNumber: 15, name: 8 },
              { entryNumber: 662, name: 13 },
              { entryNumber: 193, name: 11 },
              { entryNumber: 159, name: 10 }
            ],
            evolutionChain: 341,
            types: [1, 4],
            generation: 'Generation VI'
          },
          {
            name: 'talonflame',
            pokedexNumbers: [
              { entryNumber: 16, name: 8 },
              { entryNumber: 663, name: 13 },
              { entryNumber: 194, name: 11 },
              { entryNumber: 160, name: 10 }
            ],
            evolutionChain: 341,
            types: [1, 4],
            generation: 'Generation VI'
          },
          {
            name: 'scatterbug',
            pokedexNumbers: [
              { entryNumber: 20, name: 8 },
              { entryNumber: 664, name: 13 }
            ],
            evolutionChain: 342,
            types: [12],
            generation: 'Generation VI'
          },
          {
            name: 'spewpa',
            pokedexNumbers: [
              { entryNumber: 21, name: 8 },
              { entryNumber: 665, name: 13 }
            ],
            evolutionChain: 342,
            types: [12],
            generation: 'Generation VI'
          },
          {
            name: 'vivillon',
            pokedexNumbers: [
              { entryNumber: 22, name: 8 },
              { entryNumber: 666, name: 13 }
            ],
            evolutionChain: 342,
            types: [12, 4],
            generation: 'Generation VI'
          },
          {
            name: 'litleo',
            pokedexNumbers: [
              { entryNumber: 57, name: 8 },
              { entryNumber: 667, name: 13 },
              { entryNumber: 370, name: 11 }
            ],
            evolutionChain: 343,
            types: [1, 0],
            generation: 'Generation VI'
          },
          {
            name: 'pyroar',
            pokedexNumbers: [
              { entryNumber: 58, name: 8 },
              { entryNumber: 668, name: 13 },
              { entryNumber: 371, name: 11 }
            ],
            evolutionChain: 343,
            types: [1, 0],
            generation: 'Generation VI'
          },
          {
            name: 'flab\xe9b\xe9',
            pokedexNumbers: [
              { entryNumber: 68, name: 8 },
              { entryNumber: 669, name: 13 },
              { entryNumber: 100, name: 11 }
            ],
            evolutionChain: 344,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'floette',
            pokedexNumbers: [
              { entryNumber: 69, name: 8 },
              { entryNumber: 670, name: 13 },
              { entryNumber: 101, name: 11 }
            ],
            evolutionChain: 344,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'florges',
            pokedexNumbers: [
              { entryNumber: 70, name: 8 },
              { entryNumber: 671, name: 13 },
              { entryNumber: 102, name: 11 }
            ],
            evolutionChain: 344,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'skiddo',
            pokedexNumbers: [
              { entryNumber: 89, name: 8 },
              { entryNumber: 672, name: 13 }
            ],
            evolutionChain: 345,
            types: [5],
            generation: 'Generation VI'
          },
          {
            name: 'gogoat',
            pokedexNumbers: [
              { entryNumber: 90, name: 8 },
              { entryNumber: 673, name: 13 }
            ],
            evolutionChain: 345,
            types: [5],
            generation: 'Generation VI'
          },
          {
            name: 'pancham',
            pokedexNumbers: [
              { entryNumber: 91, name: 8 },
              { entryNumber: 674, name: 13 },
              { entryNumber: 284, name: 11 },
              { entryNumber: 220, name: 10 },
              { entryNumber: 111, name: 12 }
            ],
            evolutionChain: 346,
            types: [2],
            generation: 'Generation VI'
          },
          {
            name: 'pangoro',
            pokedexNumbers: [
              { entryNumber: 92, name: 8 },
              { entryNumber: 675, name: 13 },
              { entryNumber: 285, name: 11 },
              { entryNumber: 221, name: 10 },
              { entryNumber: 112, name: 12 }
            ],
            evolutionChain: 346,
            types: [2, 15],
            generation: 'Generation VI'
          },
          {
            name: 'furfrou',
            pokedexNumbers: [
              { entryNumber: 93, name: 8 },
              { entryNumber: 676, name: 13 },
              { entryNumber: 30, name: 11 }
            ],
            evolutionChain: 347,
            types: [0],
            generation: 'Generation VI'
          },
          {
            name: 'espurr',
            pokedexNumbers: [
              { entryNumber: 114, name: 8 },
              { entryNumber: 677, name: 13 },
              { entryNumber: 208, name: 12 }
            ],
            evolutionChain: 348,
            types: [9],
            generation: 'Generation VI'
          },
          {
            name: 'meowstic',
            pokedexNumbers: [
              { entryNumber: 115, name: 8 },
              { entryNumber: 678, name: 13 },
              { entryNumber: 209, name: 12 }
            ],
            evolutionChain: 348,
            types: [9],
            generation: 'Generation VI'
          },
          {
            name: 'honedge',
            pokedexNumbers: [
              { entryNumber: 117, name: 8 },
              { entryNumber: 679, name: 13 },
              { entryNumber: 330, name: 12 }
            ],
            evolutionChain: 349,
            types: [16, 14],
            generation: 'Generation VI'
          },
          {
            name: 'doublade',
            pokedexNumbers: [
              { entryNumber: 118, name: 8 },
              { entryNumber: 680, name: 13 },
              { entryNumber: 331, name: 12 }
            ],
            evolutionChain: 349,
            types: [16, 14],
            generation: 'Generation VI'
          },
          {
            name: 'aegislash',
            pokedexNumbers: [
              { entryNumber: 119, name: 8 },
              { entryNumber: 681, name: 13 },
              { entryNumber: 332, name: 12 }
            ],
            evolutionChain: 349,
            types: [16, 14],
            generation: 'Generation VI'
          },
          {
            name: 'spritzee',
            pokedexNumbers: [
              { entryNumber: 129, name: 8 },
              { entryNumber: 682, name: 13 },
              { entryNumber: 212, name: 12 }
            ],
            evolutionChain: 350,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'aromatisse',
            pokedexNumbers: [
              { entryNumber: 130, name: 8 },
              { entryNumber: 683, name: 13 },
              { entryNumber: 213, name: 12 }
            ],
            evolutionChain: 350,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'swirlix',
            pokedexNumbers: [
              { entryNumber: 131, name: 8 },
              { entryNumber: 684, name: 13 },
              { entryNumber: 210, name: 12 }
            ],
            evolutionChain: 351,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'slurpuff',
            pokedexNumbers: [
              { entryNumber: 132, name: 8 },
              { entryNumber: 685, name: 13 },
              { entryNumber: 211, name: 12 }
            ],
            evolutionChain: 351,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'inkay',
            pokedexNumbers: [
              { entryNumber: 160, name: 8 },
              { entryNumber: 686, name: 13 },
              { entryNumber: 26, name: 11 },
              { entryNumber: 290, name: 12 }
            ],
            evolutionChain: 352,
            types: [15, 9],
            generation: 'Generation VI'
          },
          {
            name: 'malamar',
            pokedexNumbers: [
              { entryNumber: 161, name: 8 },
              { entryNumber: 687, name: 13 },
              { entryNumber: 27, name: 11 },
              { entryNumber: 291, name: 12 }
            ],
            evolutionChain: 352,
            types: [15, 9],
            generation: 'Generation VI'
          },
          {
            name: 'binacle',
            pokedexNumbers: [
              { entryNumber: 171, name: 8 },
              { entryNumber: 688, name: 13 },
              { entryNumber: 234, name: 12 }
            ],
            evolutionChain: 353,
            types: [10, 3],
            generation: 'Generation VI'
          },
          {
            name: 'barbaracle',
            pokedexNumbers: [
              { entryNumber: 172, name: 8 },
              { entryNumber: 689, name: 13 },
              { entryNumber: 235, name: 12 }
            ],
            evolutionChain: 353,
            types: [10, 3],
            generation: 'Generation VI'
          },
          {
            name: 'skrelp',
            pokedexNumbers: [
              { entryNumber: 180, name: 8 },
              { entryNumber: 690, name: 13 },
              { entryNumber: 347, name: 11 }
            ],
            evolutionChain: 354,
            types: [6, 3],
            generation: 'Generation VI'
          },
          {
            name: 'dragalge',
            pokedexNumbers: [
              { entryNumber: 181, name: 8 },
              { entryNumber: 691, name: 13 },
              { entryNumber: 348, name: 11 }
            ],
            evolutionChain: 354,
            types: [6, 13],
            generation: 'Generation VI'
          },
          {
            name: 'clauncher',
            pokedexNumbers: [
              { entryNumber: 182, name: 8 },
              { entryNumber: 692, name: 13 },
              { entryNumber: 349, name: 11 }
            ],
            evolutionChain: 355,
            types: [3],
            generation: 'Generation VI'
          },
          {
            name: 'clawitzer',
            pokedexNumbers: [
              { entryNumber: 183, name: 8 },
              { entryNumber: 693, name: 13 },
              { entryNumber: 350, name: 11 }
            ],
            evolutionChain: 355,
            types: [3],
            generation: 'Generation VI'
          },
          {
            name: 'helioptile',
            pokedexNumbers: [
              { entryNumber: 196, name: 8 },
              { entryNumber: 694, name: 13 },
              { entryNumber: 318, name: 12 }
            ],
            evolutionChain: 356,
            types: [7, 0],
            generation: 'Generation VI'
          },
          {
            name: 'heliolisk',
            pokedexNumbers: [
              { entryNumber: 197, name: 8 },
              { entryNumber: 695, name: 13 },
              { entryNumber: 319, name: 12 }
            ],
            evolutionChain: 356,
            types: [7, 0],
            generation: 'Generation VI'
          },
          {
            name: 'tyrunt',
            pokedexNumbers: [
              { entryNumber: 214, name: 8 },
              { entryNumber: 696, name: 13 },
              { entryNumber: 243, name: 11 }
            ],
            evolutionChain: 357,
            types: [10, 13],
            generation: 'Generation VI'
          },
          {
            name: 'tyrantrum',
            pokedexNumbers: [
              { entryNumber: 215, name: 8 },
              { entryNumber: 697, name: 13 },
              { entryNumber: 244, name: 11 }
            ],
            evolutionChain: 357,
            types: [10, 13],
            generation: 'Generation VI'
          },
          {
            name: 'amaura',
            pokedexNumbers: [
              { entryNumber: 216, name: 8 },
              { entryNumber: 698, name: 13 },
              { entryNumber: 245, name: 11 }
            ],
            evolutionChain: 358,
            types: [10, 11],
            generation: 'Generation VI'
          },
          {
            name: 'aurorus',
            pokedexNumbers: [
              { entryNumber: 217, name: 8 },
              { entryNumber: 699, name: 13 },
              { entryNumber: 246, name: 11 }
            ],
            evolutionChain: 358,
            types: [10, 11],
            generation: 'Generation VI'
          },
          {
            name: 'sylveon',
            pokedexNumbers: [
              { entryNumber: 235, name: 8 },
              { entryNumber: 700, name: 13 },
              { entryNumber: 161, name: 11 },
              { entryNumber: 131, name: 10 },
              { entryNumber: 204, name: 12 }
            ],
            evolutionChain: 67,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'hawlucha',
            pokedexNumbers: [
              { entryNumber: 239, name: 8 },
              { entryNumber: 701, name: 13 },
              { entryNumber: 96, name: 11 },
              { entryNumber: 320, name: 12 }
            ],
            evolutionChain: 359,
            types: [2, 4],
            generation: 'Generation VI'
          },
          {
            name: 'dedenne',
            pokedexNumbers: [
              { entryNumber: 260, name: 8 },
              { entryNumber: 702, name: 13 },
              { entryNumber: 291, name: 11 }
            ],
            evolutionChain: 360,
            types: [7, 17],
            generation: 'Generation VI'
          },
          {
            name: 'carbink',
            pokedexNumbers: [
              { entryNumber: 274, name: 8 },
              { entryNumber: 703, name: 13 },
              { entryNumber: 123, name: 11 },
              { entryNumber: 101, name: 10 }
            ],
            evolutionChain: 361,
            types: [10, 17],
            generation: 'Generation VI'
          },
          {
            name: 'goomy',
            pokedexNumbers: [
              { entryNumber: 322, name: 8 },
              { entryNumber: 704, name: 13 },
              { entryNumber: 217, name: 11 },
              { entryNumber: 178, name: 10 },
              { entryNumber: 389, name: 12 }
            ],
            evolutionChain: 362,
            types: [13],
            generation: 'Generation VI'
          },
          {
            name: 'sliggoo',
            pokedexNumbers: [
              { entryNumber: 323, name: 8 },
              { entryNumber: 705, name: 13 },
              { entryNumber: 218, name: 11 },
              { entryNumber: 179, name: 10 },
              { entryNumber: 390, name: 12 }
            ],
            evolutionChain: 362,
            types: [13],
            generation: 'Generation VI'
          },
          {
            name: 'goodra',
            pokedexNumbers: [
              { entryNumber: 324, name: 8 },
              { entryNumber: 706, name: 13 },
              { entryNumber: 219, name: 11 },
              { entryNumber: 180, name: 10 },
              { entryNumber: 391, name: 12 }
            ],
            evolutionChain: 362,
            types: [13],
            generation: 'Generation VI'
          },
          {
            name: 'klefki',
            pokedexNumbers: [
              { entryNumber: 353, name: 8 },
              { entryNumber: 707, name: 13 },
              { entryNumber: 314, name: 11 },
              { entryNumber: 241, name: 10 }
            ],
            evolutionChain: 363,
            types: [16, 17],
            generation: 'Generation VI'
          },
          {
            name: 'phantump',
            pokedexNumbers: [
              { entryNumber: 364, name: 8 },
              { entryNumber: 708, name: 13 },
              { entryNumber: 250, name: 11 },
              { entryNumber: 196, name: 10 },
              { entryNumber: 338, name: 12 }
            ],
            evolutionChain: 364,
            types: [14, 5],
            generation: 'Generation VI'
          },
          {
            name: 'trevenant',
            pokedexNumbers: [
              { entryNumber: 365, name: 8 },
              { entryNumber: 709, name: 13 },
              { entryNumber: 251, name: 11 },
              { entryNumber: 197, name: 10 },
              { entryNumber: 339, name: 12 }
            ],
            evolutionChain: 364,
            types: [14, 5],
            generation: 'Generation VI'
          },
          {
            name: 'pumpkaboo',
            pokedexNumbers: [
              { entryNumber: 366, name: 8 },
              { entryNumber: 710, name: 13 },
              { entryNumber: 191, name: 12 }
            ],
            evolutionChain: 365,
            types: [14, 5],
            generation: 'Generation VI'
          },
          {
            name: 'gourgeist',
            pokedexNumbers: [
              { entryNumber: 367, name: 8 },
              { entryNumber: 711, name: 13 },
              { entryNumber: 192, name: 12 }
            ],
            evolutionChain: 365,
            types: [14, 5],
            generation: 'Generation VI'
          },
          {
            name: 'bergmite',
            pokedexNumbers: [
              { entryNumber: 382, name: 8 },
              { entryNumber: 712, name: 13 },
              { entryNumber: 358, name: 12 }
            ],
            evolutionChain: 366,
            types: [11],
            generation: 'Generation VI'
          },
          {
            name: 'avalugg',
            pokedexNumbers: [
              { entryNumber: 383, name: 8 },
              { entryNumber: 713, name: 13 },
              { entryNumber: 359, name: 12 }
            ],
            evolutionChain: 366,
            types: [11],
            generation: 'Generation VI'
          },
          {
            name: 'noibat',
            pokedexNumbers: [
              { entryNumber: 416, name: 8 },
              { entryNumber: 714, name: 13 },
              { entryNumber: 83, name: 11 },
              { entryNumber: 176, name: 12 }
            ],
            evolutionChain: 367,
            types: [4, 13],
            generation: 'Generation VI'
          },
          {
            name: 'noivern',
            pokedexNumbers: [
              { entryNumber: 417, name: 8 },
              { entryNumber: 715, name: 13 },
              { entryNumber: 84, name: 11 },
              { entryNumber: 177, name: 12 }
            ],
            evolutionChain: 367,
            types: [4, 13],
            generation: 'Generation VI'
          },
          {
            name: 'xerneas',
            pokedexNumbers: [
              { entryNumber: 451, name: 8 },
              { entryNumber: 716, name: 13 }
            ],
            evolutionChain: 368,
            types: [17],
            generation: 'Generation VI'
          },
          {
            name: 'yveltal',
            pokedexNumbers: [
              { entryNumber: 452, name: 8 },
              { entryNumber: 717, name: 13 }
            ],
            evolutionChain: 369,
            types: [15, 4],
            generation: 'Generation VI'
          },
          {
            name: 'zygarde',
            pokedexNumbers: [
              { entryNumber: 453, name: 8 },
              { entryNumber: 718, name: 13 },
              { entryNumber: 263, name: 11 },
              { entryNumber: 205, name: 10 }
            ],
            evolutionChain: 370,
            types: [13, 8],
            generation: 'Generation VI'
          },
          {
            name: 'diancie',
            pokedexNumbers: [{ entryNumber: 719, name: 13 }],
            evolutionChain: 371,
            types: [10, 17],
            generation: 'Generation VI'
          },
          {
            name: 'diancie-mega',
            pokedexNumbers: [{ entryNumber: 719, name: 13 }],
            evolutionChain: 371,
            types: [10, 17],
            generation: 'Generation VII'
          },
          {
            name: 'hoopa',
            pokedexNumbers: [{ entryNumber: 720, name: 13 }],
            evolutionChain: 372,
            types: [9, 14],
            generation: 'Generation VI'
          },
          {
            name: 'volcanion',
            pokedexNumbers: [{ entryNumber: 721, name: 13 }],
            evolutionChain: 373,
            types: [1, 3],
            generation: 'Generation VI'
          },
          {
            name: 'rowlet',
            pokedexNumbers: [
              { entryNumber: 1, name: 11 },
              { entryNumber: 1, name: 10 },
              { entryNumber: 721, name: 13 }
            ],
            evolutionChain: 374,
            types: [5, 4],
            generation: 'Generation VII'
          },
          {
            name: 'dartrix',
            pokedexNumbers: [
              { entryNumber: 2, name: 11 },
              { entryNumber: 2, name: 10 },
              { entryNumber: 722, name: 13 }
            ],
            evolutionChain: 374,
            types: [5, 4],
            generation: 'Generation VII'
          },
          {
            name: 'decidueye',
            pokedexNumbers: [
              { entryNumber: 3, name: 11 },
              { entryNumber: 3, name: 10 },
              { entryNumber: 723, name: 13 }
            ],
            evolutionChain: 374,
            types: [5, 14],
            generation: 'Generation VII'
          },
          {
            name: 'litten',
            pokedexNumbers: [
              { entryNumber: 4, name: 11 },
              { entryNumber: 4, name: 10 },
              { entryNumber: 724, name: 13 }
            ],
            evolutionChain: 375,
            types: [1],
            generation: 'Generation VII'
          },
          {
            name: 'torracat',
            pokedexNumbers: [
              { entryNumber: 5, name: 11 },
              { entryNumber: 5, name: 10 },
              { entryNumber: 725, name: 13 }
            ],
            evolutionChain: 375,
            types: [1],
            generation: 'Generation VII'
          },
          {
            name: 'incineroar',
            pokedexNumbers: [
              { entryNumber: 6, name: 11 },
              { entryNumber: 6, name: 10 },
              { entryNumber: 726, name: 13 }
            ],
            evolutionChain: 375,
            types: [1, 15],
            generation: 'Generation VII'
          },
          {
            name: 'popplio',
            pokedexNumbers: [
              { entryNumber: 7, name: 11 },
              { entryNumber: 7, name: 10 },
              { entryNumber: 727, name: 13 }
            ],
            evolutionChain: 376,
            types: [3],
            generation: 'Generation VII'
          },
          {
            name: 'brionne',
            pokedexNumbers: [
              { entryNumber: 8, name: 11 },
              { entryNumber: 8, name: 10 },
              { entryNumber: 728, name: 13 }
            ],
            evolutionChain: 376,
            types: [3],
            generation: 'Generation VII'
          },
          {
            name: 'primarina',
            pokedexNumbers: [
              { entryNumber: 9, name: 11 },
              { entryNumber: 9, name: 10 },
              { entryNumber: 729, name: 13 }
            ],
            evolutionChain: 376,
            types: [3, 17],
            generation: 'Generation VII'
          },
          {
            name: 'pikipek',
            pokedexNumbers: [
              { entryNumber: 10, name: 11 },
              { entryNumber: 10, name: 10 },
              { entryNumber: 730, name: 13 }
            ],
            evolutionChain: 377,
            types: [0, 4],
            generation: 'Generation VII'
          },
          {
            name: 'trumbeak',
            pokedexNumbers: [
              { entryNumber: 11, name: 11 },
              { entryNumber: 11, name: 10 },
              { entryNumber: 731, name: 13 }
            ],
            evolutionChain: 377,
            types: [0, 4],
            generation: 'Generation VII'
          },
          {
            name: 'toucannon',
            pokedexNumbers: [
              { entryNumber: 12, name: 11 },
              { entryNumber: 12, name: 10 },
              { entryNumber: 732, name: 13 }
            ],
            evolutionChain: 377,
            types: [0, 4],
            generation: 'Generation VII'
          },
          {
            name: 'yungoos',
            pokedexNumbers: [
              { entryNumber: 13, name: 11 },
              { entryNumber: 13, name: 10 },
              { entryNumber: 733, name: 13 }
            ],
            evolutionChain: 378,
            types: [0],
            generation: 'Generation VII'
          },
          {
            name: 'gumshoos',
            pokedexNumbers: [
              { entryNumber: 14, name: 11 },
              { entryNumber: 14, name: 10 },
              { entryNumber: 734, name: 13 }
            ],
            evolutionChain: 378,
            types: [0],
            generation: 'Generation VII'
          },
          {
            name: 'grubbin',
            pokedexNumbers: [
              { entryNumber: 34, name: 11 },
              { entryNumber: 27, name: 10 },
              { entryNumber: 16, name: 12 },
              { entryNumber: 735, name: 13 }
            ],
            evolutionChain: 379,
            types: [12],
            generation: 'Generation VII'
          },
          {
            name: 'charjabug',
            pokedexNumbers: [
              { entryNumber: 35, name: 11 },
              { entryNumber: 28, name: 10 },
              { entryNumber: 17, name: 12 },
              { entryNumber: 736, name: 13 }
            ],
            evolutionChain: 379,
            types: [12, 7],
            generation: 'Generation VII'
          },
          {
            name: 'vikavolt',
            pokedexNumbers: [
              { entryNumber: 36, name: 11 },
              { entryNumber: 29, name: 10 },
              { entryNumber: 18, name: 12 },
              { entryNumber: 737, name: 13 }
            ],
            evolutionChain: 379,
            types: [12, 7],
            generation: 'Generation VII'
          },
          {
            name: 'crabrawler',
            pokedexNumbers: [
              { entryNumber: 71, name: 11 },
              { entryNumber: 59, name: 10 },
              { entryNumber: 738, name: 13 }
            ],
            evolutionChain: 380,
            types: [2],
            generation: 'Generation VII'
          },
          {
            name: 'crabominable',
            pokedexNumbers: [
              { entryNumber: 72, name: 11 },
              { entryNumber: 60, name: 10 },
              { entryNumber: 739, name: 13 }
            ],
            evolutionChain: 380,
            types: [2, 11],
            generation: 'Generation VII'
          },
          {
            name: 'oricorio-baile',
            pokedexNumbers: [
              { entryNumber: 97, name: 11 },
              { entryNumber: 82, name: 10 },
              { entryNumber: 740, name: 13 }
            ],
            evolutionChain: 381,
            types: [1, 4],
            generation: 'Generation VII'
          },
          {
            name: 'oricorio-pom-pom',
            pokedexNumbers: [
              { entryNumber: 97, name: 11 },
              { entryNumber: 82, name: 10 },
              { entryNumber: 741, name: 13 }
            ],
            evolutionChain: 381,
            types: [7, 4],
            generation: 'Generation VII'
          },
          {
            name: 'oricorio-pau',
            pokedexNumbers: [
              { entryNumber: 97, name: 11 },
              { entryNumber: 82, name: 10 },
              { entryNumber: 742, name: 13 }
            ],
            evolutionChain: 381,
            types: [9, 4],
            generation: 'Generation VII'
          },
          {
            name: 'oricorio-sensu',
            pokedexNumbers: [
              { entryNumber: 97, name: 11 },
              { entryNumber: 82, name: 10 },
              { entryNumber: 743, name: 13 }
            ],
            evolutionChain: 381,
            types: [14, 4],
            generation: 'Generation VII'
          },
          {
            name: 'cutiefly',
            pokedexNumbers: [
              { entryNumber: 98, name: 11 },
              { entryNumber: 83, name: 10 },
              { entryNumber: 187, name: 12 },
              { entryNumber: 744, name: 13 }
            ],
            evolutionChain: 382,
            types: [12, 17],
            generation: 'Generation VII'
          },
          {
            name: 'ribombee',
            pokedexNumbers: [
              { entryNumber: 99, name: 11 },
              { entryNumber: 84, name: 10 },
              { entryNumber: 188, name: 12 },
              { entryNumber: 745, name: 13 }
            ],
            evolutionChain: 382,
            types: [12, 17],
            generation: 'Generation VII'
          },
          {
            name: 'rockruff',
            pokedexNumbers: [
              { entryNumber: 126, name: 11 },
              { entryNumber: 103, name: 10 },
              { entryNumber: 746, name: 13 }
            ],
            evolutionChain: 383,
            types: [10],
            generation: 'Generation VII'
          },
          {
            name: 'lycanroc',
            pokedexNumbers: [
              { entryNumber: 127, name: 11 },
              { entryNumber: 104, name: 10 },
              { entryNumber: 747, name: 13 }
            ],
            evolutionChain: 383,
            types: [10],
            generation: 'Generation VII'
          },
          {
            name: 'wishiwashi',
            pokedexNumbers: [
              { entryNumber: 110, name: 10 },
              { entryNumber: 133, name: 11 },
              { entryNumber: 155, name: 12 },
              { entryNumber: 748, name: 13 }
            ],
            evolutionChain: 384,
            types: [3],
            generation: 'Generation VII'
          },
          {
            name: 'mareanie',
            pokedexNumbers: [
              { entryNumber: 136, name: 11 },
              { entryNumber: 113, name: 10 },
              { entryNumber: 307, name: 12 },
              { entryNumber: 749, name: 13 }
            ],
            evolutionChain: 385,
            types: [6, 3],
            generation: 'Generation VII'
          },
          {
            name: 'toxapex',
            pokedexNumbers: [
              { entryNumber: 137, name: 11 },
              { entryNumber: 114, name: 10 },
              { entryNumber: 308, name: 12 },
              { entryNumber: 750, name: 13 }
            ],
            evolutionChain: 385,
            types: [6, 3],
            generation: 'Generation VII'
          },
          {
            name: 'mudbray',
            pokedexNumbers: [
              { entryNumber: 165, name: 11 },
              { entryNumber: 132, name: 10 },
              { entryNumber: 84, name: 12 },
              { entryNumber: 751, name: 13 }
            ],
            evolutionChain: 386,
            types: [8],
            generation: 'Generation VII'
          },
          {
            name: 'mudsdale',
            pokedexNumbers: [
              { entryNumber: 166, name: 11 },
              { entryNumber: 133, name: 10 },
              { entryNumber: 85, name: 12 },
              { entryNumber: 752, name: 13 }
            ],
            evolutionChain: 386,
            types: [8],
            generation: 'Generation VII'
          },
          {
            name: 'dewpider',
            pokedexNumbers: [
              { entryNumber: 174, name: 11 },
              { entryNumber: 141, name: 10 },
              { entryNumber: 214, name: 12 },
              { entryNumber: 753, name: 13 }
            ],
            evolutionChain: 387,
            types: [3, 12],
            generation: 'Generation VII'
          },
          {
            name: 'araquanid',
            pokedexNumbers: [
              { entryNumber: 175, name: 11 },
              { entryNumber: 142, name: 10 },
              { entryNumber: 215, name: 12 },
              { entryNumber: 754, name: 13 }
            ],
            evolutionChain: 387,
            types: [3, 12],
            generation: 'Generation VII'
          },
          {
            name: 'fomantis',
            pokedexNumbers: [
              { entryNumber: 176, name: 11 },
              { entryNumber: 143, name: 10 },
              { entryNumber: 755, name: 13 }
            ],
            evolutionChain: 388,
            types: [5],
            generation: 'Generation VII'
          },
          {
            name: 'lurantis',
            pokedexNumbers: [
              { entryNumber: 177, name: 11 },
              { entryNumber: 144, name: 10 },
              { entryNumber: 756, name: 13 }
            ],
            evolutionChain: 388,
            types: [5],
            generation: 'Generation VII'
          },
          {
            name: 'morelull',
            pokedexNumbers: [
              { entryNumber: 178, name: 11 },
              { entryNumber: 145, name: 10 },
              { entryNumber: 340, name: 12 },
              { entryNumber: 757, name: 13 }
            ],
            evolutionChain: 389,
            types: [5, 17],
            generation: 'Generation VII'
          },
          {
            name: 'shiinotic',
            pokedexNumbers: [
              { entryNumber: 179, name: 11 },
              { entryNumber: 146, name: 10 },
              { entryNumber: 341, name: 12 },
              { entryNumber: 758, name: 13 }
            ],
            evolutionChain: 389,
            types: [5, 17],
            generation: 'Generation VII'
          },
          {
            name: 'salandit',
            pokedexNumbers: [
              { entryNumber: 195, name: 11 },
              { entryNumber: 161, name: 10 },
              { entryNumber: 244, name: 12 },
              { entryNumber: 759, name: 13 }
            ],
            evolutionChain: 390,
            types: [6, 1],
            generation: 'Generation VII'
          },
          {
            name: 'salazzle',
            pokedexNumbers: [
              { entryNumber: 196, name: 11 },
              { entryNumber: 162, name: 10 },
              { entryNumber: 245, name: 12 },
              { entryNumber: 760, name: 13 }
            ],
            evolutionChain: 390,
            types: [6, 1],
            generation: 'Generation VII'
          },
          {
            name: 'stufful',
            pokedexNumbers: [
              { entryNumber: 205, name: 11 },
              { entryNumber: 169, name: 10 },
              { entryNumber: 94, name: 12 },
              { entryNumber: 761, name: 13 }
            ],
            evolutionChain: 391,
            types: [0, 2],
            generation: 'Generation VII'
          },
          {
            name: 'bewear',
            pokedexNumbers: [
              { entryNumber: 206, name: 11 },
              { entryNumber: 170, name: 10 },
              { entryNumber: 95, name: 12 },
              { entryNumber: 762, name: 13 }
            ],
            evolutionChain: 391,
            types: [0, 2],
            generation: 'Generation VII'
          },
          {
            name: 'bounsweet',
            pokedexNumbers: [
              { entryNumber: 207, name: 11 },
              { entryNumber: 171, name: 10 },
              { entryNumber: 52, name: 12 },
              { entryNumber: 763, name: 13 }
            ],
            evolutionChain: 392,
            types: [5],
            generation: 'Generation VII'
          },
          {
            name: 'steenee',
            pokedexNumbers: [
              { entryNumber: 208, name: 11 },
              { entryNumber: 172, name: 10 },
              { entryNumber: 53, name: 12 },
              { entryNumber: 764, name: 13 }
            ],
            evolutionChain: 392,
            types: [5],
            generation: 'Generation VII'
          },
          {
            name: 'tsareena',
            pokedexNumbers: [
              { entryNumber: 209, name: 11 },
              { entryNumber: 173, name: 10 },
              { entryNumber: 54, name: 12 },
              { entryNumber: 765, name: 13 }
            ],
            evolutionChain: 392,
            types: [5],
            generation: 'Generation VII'
          },
          {
            name: 'comfey',
            pokedexNumbers: [
              { entryNumber: 210, name: 11 },
              { entryNumber: 174, name: 10 },
              { entryNumber: 766, name: 13 }
            ],
            evolutionChain: 393,
            types: [17],
            generation: 'Generation VII'
          },
          {
            name: 'oranguru',
            pokedexNumbers: [
              { entryNumber: 215, name: 11 },
              { entryNumber: 176, name: 10 },
              { entryNumber: 342, name: 12 },
              { entryNumber: 767, name: 13 }
            ],
            evolutionChain: 394,
            types: [0, 9],
            generation: 'Generation VII'
          },
          {
            name: 'passimian',
            pokedexNumbers: [
              { entryNumber: 216, name: 11 },
              { entryNumber: 177, name: 10 },
              { entryNumber: 343, name: 12 },
              { entryNumber: 768, name: 13 }
            ],
            evolutionChain: 395,
            types: [2],
            generation: 'Generation VII'
          },
          {
            name: 'wimpod',
            pokedexNumbers: [
              { entryNumber: 221, name: 11 },
              { entryNumber: 182, name: 10 },
              { entryNumber: 232, name: 12 },
              { entryNumber: 769, name: 13 }
            ],
            evolutionChain: 396,
            types: [12, 3],
            generation: 'Generation VII'
          },
          {
            name: 'golisopod',
            pokedexNumbers: [
              { entryNumber: 222, name: 11 },
              { entryNumber: 183, name: 10 },
              { entryNumber: 233, name: 12 },
              { entryNumber: 770, name: 13 }
            ],
            evolutionChain: 396,
            types: [12, 3],
            generation: 'Generation VII'
          },
          {
            name: 'sandygast',
            pokedexNumbers: [
              { entryNumber: 225, name: 11 },
              { entryNumber: 186, name: 10 },
              { entryNumber: 771, name: 13 }
            ],
            evolutionChain: 397,
            types: [14, 8],
            generation: 'Generation VII'
          },
          {
            name: 'palossand',
            pokedexNumbers: [
              { entryNumber: 226, name: 11 },
              { entryNumber: 187, name: 10 },
              { entryNumber: 772, name: 13 }
            ],
            evolutionChain: 397,
            types: [14, 8],
            generation: 'Generation VII'
          },
          {
            name: 'pyukumuku',
            pokedexNumbers: [
              { entryNumber: 256, name: 11 },
              { entryNumber: 200, name: 10 },
              { entryNumber: 156, name: 12 },
              { entryNumber: 773, name: 13 }
            ],
            evolutionChain: 398,
            types: [3],
            generation: 'Generation VII'
          },
          {
            name: 'type:-null',
            pokedexNumbers: [
              { entryNumber: 259, name: 11 },
              { entryNumber: 203, name: 10 },
              { entryNumber: 381, name: 12 },
              { entryNumber: 774, name: 13 }
            ],
            evolutionChain: 399,
            types: [0],
            generation: 'Generation VII'
          },
          {
            name: 'silvally',
            pokedexNumbers: [
              { entryNumber: 260, name: 11 },
              { entryNumber: 204, name: 10 },
              { entryNumber: 381, name: 12 },
              { entryNumber: 775, name: 13 }
            ],
            evolutionChain: 399,
            types: [0],
            generation: 'Generation VII'
          },
          {
            name: 'minior',
            pokedexNumbers: [
              { entryNumber: 213, name: 10 },
              { entryNumber: 277, name: 11 },
              { entryNumber: 776, name: 13 }
            ],
            evolutionChain: 400,
            types: [10, 4],
            generation: 'Generation VII'
          },
          {
            name: 'komala',
            pokedexNumbers: [
              { entryNumber: 286, name: 11 },
              { entryNumber: 222, name: 10 },
              { entryNumber: 777, name: 13 }
            ],
            evolutionChain: 401,
            types: [0],
            generation: 'Generation VII'
          },
          {
            name: 'turtonator',
            pokedexNumbers: [
              { entryNumber: 288, name: 11 },
              { entryNumber: 224, name: 10 },
              { entryNumber: 347, name: 12 },
              { entryNumber: 778, name: 13 }
            ],
            evolutionChain: 402,
            types: [1, 13],
            generation: 'Generation VII'
          },
          {
            name: 'togedemaru',
            pokedexNumbers: [
              { entryNumber: 292, name: 11 },
              { entryNumber: 225, name: 10 },
              { entryNumber: 348, name: 12 },
              { entryNumber: 779, name: 13 }
            ],
            evolutionChain: 403,
            types: [7, 16],
            generation: 'Generation VII'
          },
          {
            name: 'mimikyu',
            pokedexNumbers: [
              { entryNumber: 242, name: 10 },
              { entryNumber: 315, name: 11 },
              { entryNumber: 301, name: 12 },
              { entryNumber: 780, name: 13 }
            ],
            evolutionChain: 404,
            types: [14, 17],
            generation: 'Generation VII'
          },
          {
            name: 'bruxish',
            pokedexNumbers: [
              { entryNumber: 320, name: 11 },
              { entryNumber: 243, name: 10 },
              { entryNumber: 781, name: 13 }
            ],
            evolutionChain: 405,
            types: [3, 9],
            generation: 'Generation VII'
          },
          {
            name: 'drampa',
            pokedexNumbers: [
              { entryNumber: 321, name: 11 },
              { entryNumber: 244, name: 10 },
              { entryNumber: 346, name: 12 },
              { entryNumber: 782, name: 13 }
            ],
            evolutionChain: 406,
            types: [0, 13],
            generation: 'Generation VII'
          },
          {
            name: 'dhelmise',
            pokedexNumbers: [
              { entryNumber: 344, name: 11 },
              { entryNumber: 263, name: 10 },
              { entryNumber: 360, name: 12 },
              { entryNumber: 783, name: 13 }
            ],
            evolutionChain: 407,
            types: [14, 5],
            generation: 'Generation VII'
          },
          {
            name: 'jangmo-o',
            pokedexNumbers: [
              { entryNumber: 361, name: 11 },
              { entryNumber: 271, name: 10 },
              { entryNumber: 392, name: 12 },
              { entryNumber: 784, name: 13 }
            ],
            evolutionChain: 408,
            types: [13],
            generation: 'Generation VII'
          },
          {
            name: 'hakamo-o',
            pokedexNumbers: [
              { entryNumber: 362, name: 11 },
              { entryNumber: 272, name: 10 },
              { entryNumber: 393, name: 12 },
              { entryNumber: 785, name: 13 }
            ],
            evolutionChain: 408,
            types: [13, 2],
            generation: 'Generation VII'
          },
          {
            name: 'kommo-o',
            pokedexNumbers: [
              { entryNumber: 363, name: 11 },
              { entryNumber: 273, name: 10 },
              { entryNumber: 394, name: 12 },
              { entryNumber: 786, name: 13 }
            ],
            evolutionChain: 408,
            types: [13, 2],
            generation: 'Generation VII'
          },
          {
            name: 'tapu-koko',
            pokedexNumbers: [
              { entryNumber: 383, name: 11 },
              { entryNumber: 285, name: 10 },
              { entryNumber: 787, name: 13 }
            ],
            evolutionChain: 409,
            types: [7, 17],
            generation: 'Generation VII'
          },
          {
            name: 'tapu-lele',
            pokedexNumbers: [
              { entryNumber: 384, name: 11 },
              { entryNumber: 286, name: 10 },
              { entryNumber: 788, name: 13 }
            ],
            evolutionChain: 410,
            types: [9, 17],
            generation: 'Generation VII'
          },
          {
            name: 'tapu-bulu',
            pokedexNumbers: [
              { entryNumber: 385, name: 11 },
              { entryNumber: 287, name: 10 },
              { entryNumber: 789, name: 13 }
            ],
            evolutionChain: 411,
            types: [5, 17],
            generation: 'Generation VII'
          },
          {
            name: 'tapu-fini',
            pokedexNumbers: [
              { entryNumber: 386, name: 11 },
              { entryNumber: 288, name: 10 },
              { entryNumber: 790, name: 13 }
            ],
            evolutionChain: 412,
            types: [3, 17],
            generation: 'Generation VII'
          },
          {
            name: 'cosmog',
            pokedexNumbers: [
              { entryNumber: 387, name: 11 },
              { entryNumber: 289, name: 10 },
              { entryNumber: 791, name: 13 }
            ],
            evolutionChain: 413,
            types: [9],
            generation: 'Generation VII'
          },
          {
            name: 'cosmoem',
            pokedexNumbers: [
              { entryNumber: 388, name: 11 },
              { entryNumber: 290, name: 10 },
              { entryNumber: 792, name: 13 }
            ],
            evolutionChain: 413,
            types: [9],
            generation: 'Generation VII'
          },
          {
            name: 'solgaleo',
            pokedexNumbers: [
              { entryNumber: 389, name: 11 },
              { entryNumber: 291, name: 10 },
              { entryNumber: 793, name: 13 }
            ],
            evolutionChain: 413,
            types: [9, 16],
            generation: 'Generation VII'
          },
          {
            name: 'lunala',
            pokedexNumbers: [
              { entryNumber: 390, name: 11 },
              { entryNumber: 292, name: 10 },
              { entryNumber: 794, name: 13 }
            ],
            evolutionChain: 413,
            types: [9, 14],
            generation: 'Generation VII'
          },
          {
            name: 'nihilego',
            pokedexNumbers: [
              { entryNumber: 393, name: 11 },
              { entryNumber: 293, name: 10 },
              { entryNumber: 795, name: 13 }
            ],
            evolutionChain: 414,
            types: [10, 6],
            generation: 'Generation VII'
          },
          {
            name: 'buzzwole',
            pokedexNumbers: [
              { entryNumber: 394, name: 11 },
              { entryNumber: 294, name: 10 },
              { entryNumber: 796, name: 13 }
            ],
            evolutionChain: 415,
            types: [12, 2],
            generation: 'Generation VII'
          },
          {
            name: 'pheromosa',
            pokedexNumbers: [
              { entryNumber: 395, name: 11 },
              { entryNumber: 295, name: 10 },
              { entryNumber: 797, name: 13 }
            ],
            evolutionChain: 416,
            types: [12, 2],
            generation: 'Generation VII'
          },
          {
            name: 'xurkitree',
            pokedexNumbers: [
              { entryNumber: 396, name: 11 },
              { entryNumber: 296, name: 10 },
              { entryNumber: 798, name: 13 }
            ],
            evolutionChain: 417,
            types: [7],
            generation: 'Generation VII'
          },
          {
            name: 'celesteela',
            pokedexNumbers: [
              { entryNumber: 397, name: 11 },
              { entryNumber: 297, name: 10 },
              { entryNumber: 799, name: 13 }
            ],
            evolutionChain: 418,
            types: [16, 4],
            generation: 'Generation VII'
          },
          {
            name: 'kartana',
            pokedexNumbers: [
              { entryNumber: 398, name: 11 },
              { entryNumber: 298, name: 10 },
              { entryNumber: 800, name: 13 }
            ],
            evolutionChain: 419,
            types: [5, 16],
            generation: 'Generation VII'
          },
          {
            name: 'guzzlord',
            pokedexNumbers: [
              { entryNumber: 399, name: 11 },
              { entryNumber: 299, name: 10 },
              { entryNumber: 801, name: 13 }
            ],
            evolutionChain: 420,
            types: [15, 13],
            generation: 'Generation VII'
          },
          {
            name: 'necrozma',
            pokedexNumbers: [
              { entryNumber: 400, name: 11 },
              { entryNumber: 300, name: 10 },
              { entryNumber: 802, name: 13 }
            ],
            evolutionChain: 421,
            types: [9],
            generation: 'Generation VII'
          },
          {
            name: 'magearna',
            pokedexNumbers: [
              { entryNumber: 401, name: 11 },
              { entryNumber: 301, name: 10 },
              { entryNumber: 803, name: 13 }
            ],
            evolutionChain: 422,
            types: [16, 17],
            generation: 'Generation VII'
          },
          {
            name: 'marshadow',
            pokedexNumbers: [
              { entryNumber: 402, name: 11 },
              { entryNumber: 302, name: 10 },
              { entryNumber: 804, name: 13 }
            ],
            evolutionChain: 423,
            types: [2, 14],
            generation: 'Generation VII'
          },
          {
            name: 'poipole',
            pokedexNumbers: [
              { entryNumber: 261, name: 11 },
              { entryNumber: 805, name: 13 }
            ],
            evolutionChain: 424,
            types: [6],
            generation: 'Generation VII'
          },
          {
            name: 'naganadel',
            pokedexNumbers: [
              { entryNumber: 262, name: 11 },
              { entryNumber: 806, name: 13 }
            ],
            evolutionChain: 424,
            types: [6, 13],
            generation: 'Generation VII'
          },
          {
            name: 'stakataka',
            pokedexNumbers: [
              { entryNumber: 391, name: 11 },
              { entryNumber: 807, name: 13 }
            ],
            evolutionChain: 425,
            types: [10, 16],
            generation: 'Generation VII'
          },
          {
            name: 'blacephalon',
            pokedexNumbers: [
              { entryNumber: 392, name: 11 },
              { entryNumber: 808, name: 13 }
            ],
            evolutionChain: 426,
            types: [1, 14],
            generation: 'Generation VII'
          },
          {
            name: 'zeraora',
            pokedexNumbers: [
              { entryNumber: 403, name: 11 },
              { entryNumber: 809, name: 13 }
            ],
            evolutionChain: 427,
            types: [7],
            generation: 'Generation VII'
          },
          {
            name: 'grookey',
            pokedexNumbers: [
              { entryNumber: 1, name: 12 },
              { entryNumber: 810, name: 13 }
            ],
            evolutionChain: 428,
            types: [5],
            generation: 'Generation VIII'
          },
          {
            name: 'thwackey',
            pokedexNumbers: [
              { entryNumber: 2, name: 12 },
              { entryNumber: 811, name: 13 }
            ],
            evolutionChain: 428,
            types: [5],
            generation: 'Generation VIII'
          },
          {
            name: 'rillaboom',
            pokedexNumbers: [
              { entryNumber: 3, name: 12 },
              { entryNumber: 812, name: 13 }
            ],
            evolutionChain: 428,
            types: [5],
            generation: 'Generation VIII'
          },
          {
            name: 'scorbunny',
            pokedexNumbers: [
              { entryNumber: 4, name: 12 },
              { entryNumber: 813, name: 13 }
            ],
            evolutionChain: 429,
            types: [1],
            generation: 'Generation VIII'
          },
          {
            name: 'raboot',
            pokedexNumbers: [
              { entryNumber: 5, name: 12 },
              { entryNumber: 814, name: 13 }
            ],
            evolutionChain: 429,
            types: [1],
            generation: 'Generation VIII'
          },
          {
            name: 'cinderace',
            pokedexNumbers: [
              { entryNumber: 6, name: 12 },
              { entryNumber: 815, name: 13 }
            ],
            evolutionChain: 429,
            types: [1],
            generation: 'Generation VIII'
          },
          {
            name: 'sobble',
            pokedexNumbers: [
              { entryNumber: 7, name: 12 },
              { entryNumber: 816, name: 13 }
            ],
            evolutionChain: 430,
            types: [3],
            generation: 'Generation VIII'
          },
          {
            name: 'drizzile',
            pokedexNumbers: [
              { entryNumber: 8, name: 12 },
              { entryNumber: 817, name: 13 }
            ],
            evolutionChain: 430,
            types: [3],
            generation: 'Generation VIII'
          },
          {
            name: 'inteleon',
            pokedexNumbers: [
              { entryNumber: 9, name: 12 },
              { entryNumber: 818, name: 13 }
            ],
            evolutionChain: 430,
            types: [3],
            generation: 'Generation VIII'
          },
          {
            name: 'blipbug',
            pokedexNumbers: [
              { entryNumber: 10, name: 12 },
              { entryNumber: 819, name: 13 }
            ],
            evolutionChain: 431,
            types: [12, 9],
            generation: 'Generation VIII'
          },
          {
            name: 'dottler',
            pokedexNumbers: [
              { entryNumber: 11, name: 12 },
              { entryNumber: 820, name: 13 }
            ],
            evolutionChain: 431,
            types: [12, 9],
            generation: 'Generation VIII'
          },
          {
            name: 'orbeetle',
            pokedexNumbers: [
              { entryNumber: 12, name: 12 },
              { entryNumber: 821, name: 13 }
            ],
            evolutionChain: 431,
            types: [12, 9],
            generation: 'Generation VIII'
          },
          {
            name: 'rookidee',
            pokedexNumbers: [
              { entryNumber: 21, name: 12 },
              { entryNumber: 822, name: 13 }
            ],
            evolutionChain: 432,
            types: [4],
            generation: 'Generation VIII'
          },
          {
            name: 'corvisquire',
            pokedexNumbers: [
              { entryNumber: 22, name: 12 },
              { entryNumber: 823, name: 13 }
            ],
            evolutionChain: 432,
            types: [4],
            generation: 'Generation VIII'
          },
          {
            name: 'corviknight',
            pokedexNumbers: [
              { entryNumber: 23, name: 12 },
              { entryNumber: 824, name: 13 }
            ],
            evolutionChain: 432,
            types: [4, 16],
            generation: 'Generation VIII'
          },
          {
            name: 'skwovet',
            pokedexNumbers: [
              { entryNumber: 24, name: 12 },
              { entryNumber: 825, name: 13 }
            ],
            evolutionChain: 433,
            types: [0],
            generation: 'Generation VIII'
          },
          {
            name: 'greedent',
            pokedexNumbers: [
              { entryNumber: 25, name: 12 },
              { entryNumber: 826, name: 13 }
            ],
            evolutionChain: 433,
            types: [0],
            generation: 'Generation VIII'
          },
          {
            name: 'nickit',
            pokedexNumbers: [
              { entryNumber: 29, name: 12 },
              { entryNumber: 827, name: 13 }
            ],
            evolutionChain: 434,
            types: [15],
            generation: 'Generation VIII'
          },
          {
            name: 'thievul',
            pokedexNumbers: [
              { entryNumber: 30, name: 12 },
              { entryNumber: 828, name: 13 }
            ],
            evolutionChain: 434,
            types: [15],
            generation: 'Generation VIII'
          },
          {
            name: 'obstagoon',
            pokedexNumbers: [
              { entryNumber: 33, name: 12 },
              { entryNumber: 829, name: 13 }
            ],
            evolutionChain: 134,
            types: [0, 15],
            generation: 'Generation VIII'
          },
          {
            name: 'wooloo',
            pokedexNumbers: [
              { entryNumber: 34, name: 12 },
              { entryNumber: 830, name: 13 }
            ],
            evolutionChain: 435,
            types: [0],
            generation: 'Generation VIII'
          },
          {
            name: 'dubwool',
            pokedexNumbers: [
              { entryNumber: 35, name: 12 },
              { entryNumber: 831, name: 13 }
            ],
            evolutionChain: 435,
            types: [0],
            generation: 'Generation VIII'
          },
          {
            name: 'chewtle',
            pokedexNumbers: [
              { entryNumber: 42, name: 12 },
              { entryNumber: 832, name: 13 }
            ],
            evolutionChain: 436,
            types: [3],
            generation: 'Generation VIII'
          },
          {
            name: 'drednaw',
            pokedexNumbers: [
              { entryNumber: 43, name: 12 },
              { entryNumber: 833, name: 13 }
            ],
            evolutionChain: 436,
            types: [3, 10],
            generation: 'Generation VIII'
          },
          {
            name: 'yamper',
            pokedexNumbers: [
              { entryNumber: 46, name: 12 },
              { entryNumber: 834, name: 13 }
            ],
            evolutionChain: 437,
            types: [7],
            generation: 'Generation VIII'
          },
          {
            name: 'boltund',
            pokedexNumbers: [
              { entryNumber: 47, name: 12 },
              { entryNumber: 835, name: 13 }
            ],
            evolutionChain: 437,
            types: [7],
            generation: 'Generation VIII'
          },
          {
            name: 'gossifleur',
            pokedexNumbers: [
              { entryNumber: 126, name: 12 },
              { entryNumber: 836, name: 13 }
            ],
            evolutionChain: 438,
            types: [5],
            generation: 'Generation VIII'
          },
          {
            name: 'eldegoss',
            pokedexNumbers: [
              { entryNumber: 127, name: 12 },
              { entryNumber: 837, name: 13 }
            ],
            evolutionChain: 438,
            types: [5],
            generation: 'Generation VIII'
          },
          {
            name: 'sizzlipede',
            pokedexNumbers: [
              { entryNumber: 159, name: 12 },
              { entryNumber: 838, name: 13 }
            ],
            evolutionChain: 439,
            types: [1, 12],
            generation: 'Generation VIII'
          },
          {
            name: 'centiskorch',
            pokedexNumbers: [
              { entryNumber: 160, name: 12 },
              { entryNumber: 839, name: 13 }
            ],
            evolutionChain: 439,
            types: [1, 12],
            generation: 'Generation VIII'
          },
          {
            name: 'rolycoly',
            pokedexNumbers: [
              { entryNumber: 161, name: 12 },
              { entryNumber: 840, name: 13 }
            ],
            evolutionChain: 440,
            types: [10],
            generation: 'Generation VIII'
          },
          {
            name: 'carkol',
            pokedexNumbers: [
              { entryNumber: 162, name: 12 },
              { entryNumber: 841, name: 13 }
            ],
            evolutionChain: 440,
            types: [10, 1],
            generation: 'Generation VIII'
          },
          {
            name: 'coalossal',
            pokedexNumbers: [
              { entryNumber: 163, name: 12 },
              { entryNumber: 842, name: 13 }
            ],
            evolutionChain: 440,
            types: [10, 1],
            generation: 'Generation VIII'
          },
          {
            name: 'arrokuda',
            pokedexNumbers: [
              { entryNumber: 180, name: 12 },
              { entryNumber: 843, name: 13 }
            ],
            evolutionChain: 441,
            types: [3],
            generation: 'Generation VIII'
          },
          {
            name: 'barraskewda',
            pokedexNumbers: [
              { entryNumber: 181, name: 12 },
              { entryNumber: 844, name: 13 }
            ],
            evolutionChain: 441,
            types: [3],
            generation: 'Generation VIII'
          },
          {
            name: 'perrserker',
            pokedexNumbers: [
              { entryNumber: 183, name: 12 },
              { entryNumber: 845, name: 13 }
            ],
            evolutionChain: 22,
            types: [16],
            generation: 'Generation VIII'
          },
          {
            name: 'milcery',
            pokedexNumbers: [
              { entryNumber: 185, name: 12 },
              { entryNumber: 846, name: 13 }
            ],
            evolutionChain: 442,
            types: [17],
            generation: 'Generation VIII'
          },
          {
            name: 'alcremie',
            pokedexNumbers: [
              { entryNumber: 186, name: 12 },
              { entryNumber: 847, name: 13 }
            ],
            evolutionChain: 442,
            types: [17],
            generation: 'Generation VIII'
          },
          {
            name: 'applin',
            pokedexNumbers: [
              { entryNumber: 205, name: 12 },
              { entryNumber: 848, name: 13 }
            ],
            evolutionChain: 443,
            types: [5, 13],
            generation: 'Generation VIII'
          },
          {
            name: 'flapple',
            pokedexNumbers: [
              { entryNumber: 206, name: 12 },
              { entryNumber: 849, name: 13 }
            ],
            evolutionChain: 443,
            types: [5, 13],
            generation: 'Generation VIII'
          },
          {
            name: 'appletun',
            pokedexNumbers: [
              { entryNumber: 207, name: 12 },
              { entryNumber: 850, name: 13 }
            ],
            evolutionChain: 443,
            types: [5, 13],
            generation: 'Generation VIII'
          },
          {
            name: "sirfetch'd",
            pokedexNumbers: [
              { entryNumber: 219, name: 12 },
              { entryNumber: 851, name: 13 }
            ],
            evolutionChain: 35,
            types: [2],
            generation: 'Generation VIII'
          },
          {
            name: 'cursola',
            pokedexNumbers: [
              { entryNumber: 237, name: 12 },
              { entryNumber: 852, name: 13 }
            ],
            evolutionChain: 113,
            types: [14],
            generation: 'Generation VIII'
          },
          {
            name: 'impidimp',
            pokedexNumbers: [
              { entryNumber: 238, name: 12 },
              { entryNumber: 853, name: 13 }
            ],
            evolutionChain: 444,
            types: [15, 17],
            generation: 'Generation VIII'
          },
          {
            name: 'morgrem',
            pokedexNumbers: [
              { entryNumber: 239, name: 12 },
              { entryNumber: 854, name: 13 }
            ],
            evolutionChain: 444,
            types: [15, 17],
            generation: 'Generation VIII'
          },
          {
            name: 'grimmsnarl',
            pokedexNumbers: [
              { entryNumber: 240, name: 12 },
              { entryNumber: 855, name: 13 }
            ],
            evolutionChain: 444,
            types: [15, 17],
            generation: 'Generation VIII'
          },
          {
            name: 'hatenna',
            pokedexNumbers: [
              { entryNumber: 241, name: 12 },
              { entryNumber: 856, name: 13 }
            ],
            evolutionChain: 445,
            types: [9],
            generation: 'Generation VIII'
          },
          {
            name: 'hattrem',
            pokedexNumbers: [
              { entryNumber: 242, name: 12 },
              { entryNumber: 857, name: 13 }
            ],
            evolutionChain: 445,
            types: [9],
            generation: 'Generation VIII'
          },
          {
            name: 'hatterene',
            pokedexNumbers: [
              { entryNumber: 243, name: 12 },
              { entryNumber: 858, name: 13 }
            ],
            evolutionChain: 445,
            types: [9, 17],
            generation: 'Generation VIII'
          },
          {
            name: 'cufant',
            pokedexNumbers: [
              { entryNumber: 302, name: 12 },
              { entryNumber: 859, name: 13 }
            ],
            evolutionChain: 446,
            types: [16],
            generation: 'Generation VIII'
          },
          {
            name: 'copperajah',
            pokedexNumbers: [
              { entryNumber: 303, name: 12 },
              { entryNumber: 860, name: 13 }
            ],
            evolutionChain: 446,
            types: [16],
            generation: 'Generation VIII'
          },
          {
            name: 'cramorant',
            pokedexNumbers: [
              { entryNumber: 309, name: 12 },
              { entryNumber: 861, name: 13 }
            ],
            evolutionChain: 447,
            types: [3, 4],
            generation: 'Generation VIII'
          },
          {
            name: 'toxel',
            pokedexNumbers: [
              { entryNumber: 310, name: 12 },
              { entryNumber: 862, name: 13 }
            ],
            evolutionChain: 448,
            types: [6, 7],
            generation: 'Generation VIII'
          },
          {
            name: 'toxricity',
            pokedexNumbers: [
              { entryNumber: 311, name: 12 },
              { entryNumber: 863, name: 13 }
            ],
            evolutionChain: 448,
            types: [6, 7],
            generation: 'Generation VIII'
          },
          {
            name: 'silicobra',
            pokedexNumbers: [
              { entryNumber: 312, name: 12 },
              { entryNumber: 864, name: 13 }
            ],
            evolutionChain: 449,
            types: [8],
            generation: 'Generation VIII'
          },
          {
            name: 'sandaconda',
            pokedexNumbers: [
              { entryNumber: 313, name: 12 },
              { entryNumber: 865, name: 13 }
            ],
            evolutionChain: 449,
            types: [8],
            generation: 'Generation VIII'
          },
          {
            name: 'runerigus',
            pokedexNumbers: [
              { entryNumber: 328, name: 12 },
              { entryNumber: 866, name: 13 }
            ],
            evolutionChain: 287,
            types: [14, 8],
            generation: 'Generation VIII'
          },
          {
            name: 'sinistea',
            pokedexNumbers: [
              { entryNumber: 335, name: 12 },
              { entryNumber: 867, name: 13 }
            ],
            evolutionChain: 450,
            types: [14],
            generation: 'Generation VIII'
          },
          {
            name: 'polteageist',
            pokedexNumbers: [
              { entryNumber: 336, name: 12 },
              { entryNumber: 868, name: 13 }
            ],
            evolutionChain: 450,
            types: [14],
            generation: 'Generation VIII'
          },
          {
            name: 'indeedee',
            pokedexNumbers: [
              { entryNumber: 337, name: 12 },
              { entryNumber: 869, name: 13 }
            ],
            evolutionChain: 451,
            types: [9, 0],
            generation: 'Generation VIII'
          },
          {
            name: 'morpeko',
            pokedexNumbers: [
              { entryNumber: 344, name: 12 },
              { entryNumber: 870, name: 13 }
            ],
            evolutionChain: 452,
            types: [7, 15],
            generation: 'Generation VIII'
          },
          {
            name: 'falinks',
            pokedexNumbers: [
              { entryNumber: 345, name: 12 },
              { entryNumber: 871, name: 13 }
            ],
            evolutionChain: 453,
            types: [2],
            generation: 'Generation VIII'
          },
          {
            name: 'snom',
            pokedexNumbers: [
              { entryNumber: 349, name: 12 },
              { entryNumber: 872, name: 13 }
            ],
            evolutionChain: 454,
            types: [11, 12],
            generation: 'Generation VIII'
          },
          {
            name: 'frosmoth',
            pokedexNumbers: [
              { entryNumber: 350, name: 12 },
              { entryNumber: 873, name: 13 }
            ],
            evolutionChain: 454,
            types: [11, 12],
            generation: 'Generation VIII'
          },
          {
            name: 'clobbopus',
            pokedexNumbers: [
              { entryNumber: 351, name: 12 },
              { entryNumber: 874, name: 13 }
            ],
            evolutionChain: 455,
            types: [2],
            generation: 'Generation VIII'
          },
          {
            name: 'grapploct',
            pokedexNumbers: [
              { entryNumber: 352, name: 12 },
              { entryNumber: 875, name: 13 }
            ],
            evolutionChain: 455,
            types: [2],
            generation: 'Generation VIII'
          },
          {
            name: 'pincurchin',
            pokedexNumbers: [
              { entryNumber: 353, name: 12 },
              { entryNumber: 876, name: 13 }
            ],
            evolutionChain: 456,
            types: [7],
            generation: 'Generation VIII'
          },
          {
            name: 'mr. rime',
            pokedexNumbers: [
              { entryNumber: 366, name: 12 },
              { entryNumber: 877, name: 13 }
            ],
            evolutionChain: 57,
            types: [9, 11],
            generation: 'Generation VIII'
          },
          {
            name: 'stonjourner',
            pokedexNumbers: [
              { entryNumber: 369, name: 12 },
              { entryNumber: 878, name: 13 }
            ],
            evolutionChain: 457,
            types: [8],
            generation: 'Generation VIII'
          },
          {
            name: 'eiscue',
            pokedexNumbers: [
              { entryNumber: 370, name: 12 },
              { entryNumber: 879, name: 13 }
            ],
            evolutionChain: 458,
            types: [11],
            generation: 'Generation VIII'
          },
          {
            name: 'duraludon',
            pokedexNumbers: [
              { entryNumber: 371, name: 12 },
              { entryNumber: 880, name: 13 }
            ],
            evolutionChain: 459,
            types: [16, 13],
            generation: 'Generation VIII'
          },
          {
            name: 'dracozolt',
            pokedexNumbers: [
              { entryNumber: 374, name: 12 },
              { entryNumber: 881, name: 13 }
            ],
            evolutionChain: 460,
            types: [7, 13],
            generation: 'Generation VIII'
          },
          {
            name: 'arctozolt',
            pokedexNumbers: [
              { entryNumber: 375, name: 12 },
              { entryNumber: 882, name: 13 }
            ],
            evolutionChain: 461,
            types: [7, 11],
            generation: 'Generation VIII'
          },
          {
            name: 'dracovish',
            pokedexNumbers: [
              { entryNumber: 376, name: 12 },
              { entryNumber: 883, name: 13 }
            ],
            evolutionChain: 462,
            types: [3, 13],
            generation: 'Generation VIII'
          },
          {
            name: 'arctovish',
            pokedexNumbers: [
              { entryNumber: 377, name: 12 },
              { entryNumber: 884, name: 13 }
            ],
            evolutionChain: 463,
            types: [3, 11],
            generation: 'Generation VIII'
          },
          {
            name: 'dreepy',
            pokedexNumbers: [
              { entryNumber: 395, name: 12 },
              { entryNumber: 885, name: 13 }
            ],
            evolutionChain: 464,
            types: [13, 14],
            generation: 'Generation VIII'
          },
          {
            name: 'drakloak',
            pokedexNumbers: [
              { entryNumber: 396, name: 12 },
              { entryNumber: 886, name: 13 }
            ],
            evolutionChain: 464,
            types: [13, 14],
            generation: 'Generation VIII'
          },
          {
            name: 'dragapult',
            pokedexNumbers: [
              { entryNumber: 397, name: 12 },
              { entryNumber: 887, name: 13 }
            ],
            evolutionChain: 464,
            types: [13, 14],
            generation: 'Generation VIII'
          },
          {
            name: 'zacian',
            pokedexNumbers: [
              { entryNumber: 398, name: 12 },
              { entryNumber: 888, name: 13 }
            ],
            evolutionChain: 465,
            types: [17, 16],
            generation: 'Generation VIII'
          },
          {
            name: 'zamazenta',
            pokedexNumbers: [
              { entryNumber: 399, name: 12 },
              { entryNumber: 889, name: 13 }
            ],
            evolutionChain: 466,
            types: [2, 16],
            generation: 'Generation VIII'
          },
          {
            name: 'eternatus',
            pokedexNumbers: [
              { entryNumber: 400, name: 12 },
              { entryNumber: 890, name: 13 }
            ],
            evolutionChain: 467,
            types: [14, 13],
            generation: 'Generation VIII'
          }
        ],
        m = r('NptF'),
        o = r('fXoL'),
        i = r('6Ke5'),
        u = r('zsLg'),
        b = r('ioxi');
      let y = (() => {
        class e {
          constructor(e, n, r) {
            (this.databaseService = e),
              (this.pokemonImageService = n),
              (this.titleCaseService = r);
          }
          createDatabase() {
            return Object(t.a)(this, void 0, void 0, function* () {
              0 === (yield this.databaseService.pokemon.count()) &&
                (yield this.databaseService.pokemon.bulkAdd(
                  a.map((e, n) =>
                    Object.assign(Object.assign({}, e), { id: n })
                  )
                ));
            });
          }
          getPokemon() {
            return Object(t.a)(this, void 0, void 0, function* () {
              return this.databaseService.pokemon
                .toArray()
                .then((e) => e.map((e) => new m.a(e)));
            });
          }
          getPokemonNames() {
            return Object(t.a)(this, void 0, void 0, function* () {
              return this.databaseService.pokemon
                .toArray()
                .then((e) =>
                  e.map((e) => this.titleCaseService.titlecase(e.name))
                );
            });
          }
          find(e) {
            return Object(t.a)(this, void 0, void 0, function* () {
              return this.getPokemon().then((n) =>
                n.filter((n) =>
                  e.some((e) =>
                    this.pokemonImageService
                      .transform(n.name)
                      .toLowerCase()
                      .includes(e.toLowerCase())
                  )
                )
              );
            });
          }
          findEvolutionNames(e) {
            var n;
            return Object(t.a)(this, void 0, void 0, function* () {
              const r = yield this.databaseService.pokemon
                .where({
                  name: this.pokemonImageService.reverseImageReplace(
                    e.toLowerCase()
                  )
                })
                .toArray();
              return (yield this.databaseService.pokemon
                .where({
                  evolutionChain:
                    (null === (n = r[0]) || void 0 === n
                      ? void 0
                      : n.evolutionChain) || -1
                })
                .toArray())
                .map((e) => e && this.titleCaseService.titlecase(e.name))
                .filter(
                  (n) =>
                    n &&
                    n !==
                      this.titleCaseService.titlecase(
                        this.pokemonImageService.reverseImageReplace(
                          e.toLowerCase()
                        )
                      )
                );
            });
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(o.Ub(i.a), o.Ub(u.a), o.Ub(b.a));
          }),
          (e.ɵprov = o.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    },
    zsLg: function (e, n, r) {
      'use strict';
      r.d(n, 'a', function () {
        return a;
      });
      var t = r('fXoL');
      let a = (() => {
        class e {
          constructor() {
            this.formRegex = /(\w{2,}) (\w{3,})$/;
          }
          transform(e) {
            return this.imageReplace(this.characterReplace(e.toLowerCase()));
          }
          handleSearch(e, n) {
            var r;
            const t = this.characterReplace(e.toLowerCase());
            return n.toLowerCase().includes('mega ')
              ? t.includes(n.toLowerCase().replace('mega ', '')) &&
                  t.includes('-mega')
              : n.toLowerCase().match(/alola(n)?/)
              ? t.includes(
                  n
                    .toLowerCase()
                    .replace(/alola(n)?/, '')
                    .trim()
                ) && t.includes('-alola')
              : (
                  null === (r = n.toLowerCase().match(/galar(i|ia|ian)?/)) ||
                  void 0 === r
                    ? void 0
                    : r.length
                )
              ? t.includes(
                  n
                    .toLowerCase()
                    .replace(/galar(ian|ia|i)?/, '')
                    .trim()
                ) && t.includes('-galar')
              : t.includes(n.toLowerCase());
          }
          characterReplace(e) {
            return e
              .replace(/\xe9/g, 'e')
              .replace(/\u2642/, 'm')
              .replace(/\u2640/, 'f');
          }
          imageReplace(e) {
            return (e = this.reverseImageReplace(e))
              .replace(' ', '-')
              .replace(':', '')
              .replace('.', '')
              .replace("'", '')
              .trim();
          }
          formReverse(e) {
            var n;
            return (
              null === (n = e.match(this.formRegex)) || void 0 === n
                ? void 0
                : n.length
            )
              ? e.replace(this.formRegex, '$2-$1')
              : e;
          }
          reverseAlolaReplace(e) {
            var n;
            return (
              null === (n = e.match(/(Alolan|alolan)(- |\s)/)) || void 0 === n
                ? void 0
                : n.length
            )
              ? e.replace(/(Alolan|alolan)(- |\s)/, '') + '-alola'
              : e;
          }
          reverseGalarReplace(e) {
            var n;
            return (
              null === (n = e.match(/(galarian|Galarian)(- |\s)/)) ||
              void 0 === n
                ? void 0
                : n.length
            )
              ? e.replace(/(galarian|Galarian)(- |\s)/, '') + '-galar'
              : e;
          }
          reverseMegaReplace(e) {
            var n;
            return (
              null === (n = e.match(/(mega|Mega)(- |\s)/)) || void 0 === n
                ? void 0
                : n.length
            )
              ? e.replace(/(mega|Mega)(- |\s)/, '') + '-mega'
              : e;
          }
          reverseImageReplace(e) {
            var n, r;
            if (
              null === (n = e.match(/(mega|Mega) (\w+) (\w)$/)) || void 0 === n
                ? void 0
                : n.length
            ) {
              const n = e.replace(/(Mega|mega) (\w+) (\w)$/, '$2-$1-$3');
              return n.slice(0, n.length - 1) + n[n.length - 1].toLowerCase();
            }
            return (
              null === (r = e.match(/(\w+) (\w)-(mega)/)) || void 0 === r
                ? void 0
                : r.length
            )
              ? e.replace(/(\w+) (\w)-(mega)/, '$1-$3-$2')
              : e.includes('\u2642') || e.includes('\u2640')
              ? e.replace(' ', '-')
              : this.formReverse(
                  this.reverseMegaReplace(
                    this.reverseAlolaReplace(this.reverseGalarReplace(e))
                  )
                );
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = t.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
    }
  }
]);
