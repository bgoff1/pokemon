!(function () {
  function e(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return t(e);
      })(e) ||
      (function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      r(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function n(e, n) {
    var t;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
      if (
        Array.isArray(e) ||
        (t = r(e)) ||
        (n && e && 'number' == typeof e.length)
      ) {
        t && (e = t);
        var a = 0,
          m = function () {};
        return {
          s: m,
          n: function () {
            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
          },
          e: function (e) {
            throw e;
          },
          f: m
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var o,
      u = !0,
      i = !1;
    return {
      s: function () {
        t = e[Symbol.iterator]();
      },
      n: function () {
        var e = t.next();
        return (u = e.done), e;
      },
      e: function (e) {
        (i = !0), (o = e);
      },
      f: function () {
        try {
          u || null == t.return || t.return();
        } finally {
          if (i) throw o;
        }
      }
    };
  }
  function r(e, n) {
    if (e) {
      if ('string' == typeof e) return t(e, n);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      return (
        'Object' === r && e.constructor && (r = e.constructor.name),
        'Map' === r || 'Set' === r
          ? Array.from(e)
          : 'Arguments' === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? t(e, n)
          : void 0
      );
    }
  }
  function t(e, n) {
    (null == n || n > e.length) && (n = e.length);
    for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
    return t;
  }
  function a(e, n) {
    if (!(e instanceof n))
      throw new TypeError('Cannot call a class as a function');
  }
  function m(e, n) {
    for (var r = 0; r < n.length; r++) {
      var t = n[r];
      (t.enumerable = t.enumerable || !1),
        (t.configurable = !0),
        'value' in t && (t.writable = !0),
        Object.defineProperty(e, t.key, t);
    }
  }
  function o(e, n, r) {
    return n && m(e.prototype, n), r && m(e, r), e;
  }
  function u(e, n) {
    if ('function' != typeof n && null !== n)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(n && n.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 }
    })),
      n && i(e, n);
  }
  function i(e, n) {
    return (i =
      Object.setPrototypeOf ||
      function (e, n) {
        return (e.__proto__ = n), e;
      })(e, n);
  }
  function y(e) {
    var n = (function () {
      if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ('function' == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    })();
    return function () {
      var r,
        t = s(e);
      if (n) {
        var a = s(this).constructor;
        r = Reflect.construct(t, arguments, a);
      } else r = t.apply(this, arguments);
      return b(this, r);
    };
  }
  function b(e, n) {
    return !n || ('object' != typeof n && 'function' != typeof n)
      ? (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e)
      : n;
  }
  function s(e) {
    return (s = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
      '6Ke5': function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return Kr;
        });
        var t = r('mrSG'),
          m = function () {
            return (m =
              Object.assign ||
              function (e) {
                for (var n, r = 1, t = arguments.length; r < t; r++)
                  for (var a in (n = arguments[r]))
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                return e;
              }).apply(this, arguments);
          };
        function i() {
          for (var e = 0, n = 0, r = arguments.length; n < r; n++)
            e += arguments[n].length;
          var t = Array(e),
            a = 0;
          for (n = 0; n < r; n++)
            for (var m = arguments[n], o = 0, u = m.length; o < u; o++, a++)
              t[a] = m[o];
          return t;
        }
        var b = Object.keys,
          s = Array.isArray,
          N =
            'undefined' != typeof self
              ? self
              : 'undefined' != typeof window
              ? window
              : global;
        function l(e, n) {
          return (
            'object' != typeof n ||
              b(n).forEach(function (r) {
                e[r] = n[r];
              }),
            e
          );
        }
        'undefined' == typeof Promise || N.Promise || (N.Promise = Promise);
        var p = Object.getPrototypeOf,
          c = {}.hasOwnProperty;
        function d(e, n) {
          return c.call(e, n);
        }
        function h(e, n) {
          'function' == typeof n && (n = n(p(e))),
            b(n).forEach(function (r) {
              v(e, r, n[r]);
            });
        }
        var f = Object.defineProperty;
        function v(e, n, r, t) {
          f(
            e,
            n,
            l(
              r && d(r, 'get') && 'function' == typeof r.get
                ? { get: r.get, set: r.set, configurable: !0 }
                : { value: r, configurable: !0, writable: !0 },
              t
            )
          );
        }
        function g(e) {
          return {
            from: function (n) {
              return (
                (e.prototype = Object.create(n.prototype)),
                v(e.prototype, 'constructor', e),
                { extend: h.bind(null, e.prototype) }
              );
            }
          };
        }
        var k = Object.getOwnPropertyDescriptor;
        function I(e, n) {
          var r;
          return k(e, n) || ((r = p(e)) && I(r, n));
        }
        var x = [].slice;
        function C(e, n, r) {
          return x.call(e, n, r);
        }
        function G(e, n) {
          return n(e);
        }
        function w(e) {
          if (!e) throw new Error('Assertion Failed');
        }
        function _(e) {
          N.setImmediate ? setImmediate(e) : setTimeout(e, 0);
        }
        function V(e, n) {
          return e.reduce(function (e, r, t) {
            var a = n(r, t);
            return a && (e[a[0]] = a[1]), e;
          }, {});
        }
        function S(e, n) {
          if (d(e, n)) return e[n];
          if (!n) return e;
          if ('string' != typeof n) {
            for (var r = [], t = 0, a = n.length; t < a; ++t) {
              var m = S(e, n[t]);
              r.push(m);
            }
            return r;
          }
          var o = n.indexOf('.');
          if (-1 !== o) {
            var u = e[n.substr(0, o)];
            return void 0 === u ? void 0 : S(u, n.substr(o + 1));
          }
        }
        function R(e, n, r) {
          if (
            e &&
            void 0 !== n &&
            (!('isFrozen' in Object) || !Object.isFrozen(e))
          )
            if ('string' != typeof n && 'length' in n) {
              w('string' != typeof r && 'length' in r);
              for (var t = 0, a = n.length; t < a; ++t) R(e, n[t], r[t]);
            } else {
              var m = n.indexOf('.');
              if (-1 !== m) {
                var o = n.substr(0, m),
                  u = n.substr(m + 1);
                if ('' === u)
                  void 0 === r
                    ? s(e) && !isNaN(parseInt(o))
                      ? e.splice(o, 1)
                      : delete e[o]
                    : (e[o] = r);
                else {
                  var i = e[o];
                  i || (i = e[o] = {}), R(i, u, r);
                }
              } else
                void 0 === r
                  ? s(e) && !isNaN(parseInt(n))
                    ? e.splice(n, 1)
                    : delete e[n]
                  : (e[n] = r);
            }
        }
        function A(e, n) {
          'string' == typeof n
            ? R(e, n, void 0)
            : 'length' in n &&
              [].map.call(n, function (n) {
                R(e, n, void 0);
              });
        }
        function O(e) {
          var n = {};
          for (var r in e) d(e, r) && (n[r] = e[r]);
          return n;
        }
        var E = [].concat;
        function P(e) {
          return E.apply([], e);
        }
        var j = 'Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set'
            .split(',')
            .concat(
              P(
                [8, 16, 32, 64].map(function (e) {
                  return ['Int', 'Uint', 'Float'].map(function (n) {
                    return n + e + 'Array';
                  });
                })
              )
            )
            .filter(function (e) {
              return N[e];
            }),
          F = j.map(function (e) {
            return N[e];
          }),
          D = V(j, function (e) {
            return [e, !0];
          });
        function T(e) {
          if (!e || 'object' != typeof e) return e;
          var n;
          if (s(e)) {
            n = [];
            for (var r = 0, t = e.length; r < t; ++r) n.push(T(e[r]));
          } else if (F.indexOf(e.constructor) >= 0) n = e;
          else
            for (var a in ((n = e.constructor
              ? Object.create(e.constructor.prototype)
              : {}),
            e))
              d(e, a) && (n[a] = T(e[a]));
          return n;
        }
        var L = {}.toString;
        function z(e) {
          return L.call(e).slice(8, -1);
        }
        var K = function e(n, r) {
          return 'Array' === r
            ? '' +
                n.map(function (n) {
                  return e(n, z(n));
                })
            : 'ArrayBuffer' === r
            ? '' + new Uint8Array(n)
            : 'Date' === r
            ? n.getTime()
            : ArrayBuffer.isView(n)
            ? '' + new Uint8Array(n.buffer)
            : n;
        };
        function M(e, n, r, t) {
          return (
            (r = r || {}),
            (t = t || ''),
            b(e).forEach(function (a) {
              if (d(n, a)) {
                var m = e[a],
                  o = n[a];
                if ('object' == typeof m && 'object' == typeof o && m && o) {
                  var u = z(m),
                    i = z(o);
                  u === i
                    ? D[u]
                      ? K(m, u) !== K(o, i) && (r[t + a] = n[a])
                      : M(m, o, r, t + a + '.')
                    : (r[t + a] = n[a]);
                } else m !== o && (r[t + a] = n[a]);
              } else r[t + a] = void 0;
            }),
            b(n).forEach(function (a) {
              d(e, a) || (r[t + a] = n[a]);
            }),
            r
          );
        }
        var B = 'undefined' != typeof Symbol && Symbol.iterator,
          q = B
            ? function (e) {
                var n;
                return null != e && (n = e[B]) && n.apply(e);
              }
            : function () {
                return null;
              },
          U = {};
        function H(e) {
          var n, r, t, a;
          if (1 === arguments.length) {
            if (s(e)) return e.slice();
            if (this === U && 'string' == typeof e) return [e];
            if ((a = q(e))) {
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
          for (n = arguments.length, r = new Array(n); n--; )
            r[n] = arguments[n];
          return r;
        }
        var W =
            'undefined' != typeof Symbol
              ? function (e) {
                  return 'AsyncFunction' === e[Symbol.toStringTag];
                }
              : function () {
                  return !1;
                },
          X =
            'undefined' != typeof location &&
            /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
        function Y(e, n) {
          (X = e), (Q = n);
        }
        var Q = function () {
            return !0;
          },
          J = !new Error('').stack;
        function $() {
          if (J)
            try {
              throw new Error();
            } catch (e) {
              return e;
            }
          return new Error();
        }
        function Z(e, n) {
          var r = e.stack;
          return r
            ? ((n = n || 0),
              0 === r.indexOf(e.name) &&
                (n += (e.name + e.message).split('\n').length),
              r
                .split('\n')
                .slice(n)
                .filter(Q)
                .map(function (e) {
                  return '\n' + e;
                })
                .join(''))
            : '';
        }
        var ee = [
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
          ne = [
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
          ].concat(ee),
          re = {
            VersionChanged:
              'Database version changed by other database connection',
            DatabaseClosed: 'Database has been closed',
            Abort: 'Transaction aborted',
            TransactionInactive: 'Transaction has already completed or failed'
          };
        function te(e, n) {
          (this._e = $()), (this.name = e), (this.message = n);
        }
        function ae(e, n) {
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
        function me(e, n, r, t) {
          (this._e = $()),
            (this.failures = n),
            (this.failedKeys = t),
            (this.successCount = r),
            (this.message = ae(e, n));
        }
        function oe(e, n) {
          (this._e = $()),
            (this.name = 'BulkError'),
            (this.failures = n),
            (this.message = ae(e, n));
        }
        g(te)
          .from(Error)
          .extend({
            stack: {
              get: function () {
                return (
                  this._stack ||
                  (this._stack =
                    this.name + ': ' + this.message + Z(this._e, 2))
                );
              }
            },
            toString: function () {
              return this.name + ': ' + this.message;
            }
          }),
          g(me).from(te),
          g(oe).from(te);
        var ue = ne.reduce(function (e, n) {
            return (e[n] = n + 'Error'), e;
          }, {}),
          ie = te,
          ye = ne.reduce(function (e, n) {
            var r = n + 'Error';
            function t(e, t) {
              (this._e = $()),
                (this.name = r),
                e
                  ? 'string' == typeof e
                    ? ((this.message = e + (t ? '\n ' + t : '')),
                      (this.inner = t || null))
                    : 'object' == typeof e &&
                      ((this.message = e.name + ' ' + e.message),
                      (this.inner = e))
                  : ((this.message = re[n] || r), (this.inner = null));
            }
            return g(t).from(ie), (e[n] = t), e;
          }, {});
        (ye.Syntax = SyntaxError),
          (ye.Type = TypeError),
          (ye.Range = RangeError);
        var be = ee.reduce(function (e, n) {
            return (e[n + 'Error'] = ye[n]), e;
          }, {}),
          se = ne.reduce(function (e, n) {
            return (
              -1 === ['Syntax', 'Type', 'Range'].indexOf(n) &&
                (e[n + 'Error'] = ye[n]),
              e
            );
          }, {});
        function Ne() {}
        function le(e) {
          return e;
        }
        function pe(e, n) {
          return null == e || e === le
            ? n
            : function (r) {
                return n(e(r));
              };
        }
        function ce(e, n) {
          return function () {
            e.apply(this, arguments), n.apply(this, arguments);
          };
        }
        function de(e, n) {
          return e === Ne
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
                    (this.onsuccess = this.onsuccess
                      ? ce(t, this.onsuccess)
                      : t),
                  a && (this.onerror = this.onerror ? ce(a, this.onerror) : a),
                  void 0 !== m ? m : r
                );
              };
        }
        function he(e, n) {
          return e === Ne
            ? n
            : function () {
                e.apply(this, arguments);
                var r = this.onsuccess,
                  t = this.onerror;
                (this.onsuccess = this.onerror = null),
                  n.apply(this, arguments),
                  r &&
                    (this.onsuccess = this.onsuccess
                      ? ce(r, this.onsuccess)
                      : r),
                  t && (this.onerror = this.onerror ? ce(t, this.onerror) : t);
              };
        }
        function fe(e, n) {
          return e === Ne
            ? n
            : function (r) {
                var t = e.apply(this, arguments);
                l(r, t);
                var a = this.onsuccess,
                  m = this.onerror;
                (this.onsuccess = null), (this.onerror = null);
                var o = n.apply(this, arguments);
                return (
                  a &&
                    (this.onsuccess = this.onsuccess
                      ? ce(a, this.onsuccess)
                      : a),
                  m && (this.onerror = this.onerror ? ce(m, this.onerror) : m),
                  void 0 === t ? (void 0 === o ? void 0 : o) : l(t, o)
                );
              };
        }
        function ve(e, n) {
          return e === Ne
            ? n
            : function () {
                return (
                  !1 !== n.apply(this, arguments) && e.apply(this, arguments)
                );
              };
        }
        function ge(e, n) {
          return e === Ne
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
        (se.ModifyError = me), (se.DexieError = te), (se.BulkError = oe);
        var ke = {},
          Ie =
            'undefined' == typeof Promise
              ? []
              : (function () {
                  var e = Promise.resolve();
                  if ('undefined' == typeof crypto || !crypto.subtle)
                    return [e, e.__proto__, e];
                  var n = crypto.subtle.digest('SHA-512', new Uint8Array([0]));
                  return [n, n.__proto__, e];
                })(),
          xe = Ie[0],
          Ce = Ie[1],
          Ge = Ie[2],
          we = Ce && Ce.then,
          _e = xe && xe.constructor,
          Ve = !!Ge,
          Se = !1,
          Re = Ge
            ? function () {
                Ge.then(Ze);
              }
            : N.setImmediate
            ? setImmediate.bind(null, Ze)
            : N.MutationObserver
            ? function () {
                var e = document.createElement('div');
                new MutationObserver(function () {
                  Ze(), (e = null);
                }).observe(e, { attributes: !0 }),
                  e.setAttribute('i', '1');
              }
            : function () {
                setTimeout(Ze, 0);
              },
          Ae = function (e, n) {
            ze.push([e, n]), Ee && (Re(), (Ee = !1));
          },
          Oe = !0,
          Ee = !0,
          Pe = [],
          je = [],
          Fe = null,
          De = le,
          Te = {
            id: 'global',
            global: !0,
            ref: 0,
            unhandleds: [],
            onunhandled: Cn,
            pgp: !1,
            env: {},
            finalize: function () {
              this.unhandleds.forEach(function (e) {
                try {
                  Cn(e[0], e[1]);
                } catch (n) {}
              });
            }
          },
          Le = Te,
          ze = [],
          Ke = 0,
          Me = [];
        function Be(e) {
          if ('object' != typeof this)
            throw new TypeError('Promises must be constructed via new');
          (this._listeners = []), (this.onuncatched = Ne), (this._lib = !1);
          var n = (this._PSD = Le);
          if (
            (X &&
              ((this._stackHolder = $()),
              (this._prev = null),
              (this._numPrev = 0)),
            'function' != typeof e)
          ) {
            if (e !== ke) throw new TypeError('Not a function');
            return (
              (this._state = arguments[1]),
              (this._value = arguments[2]),
              void (!1 === this._state && We(this, this._value))
            );
          }
          (this._state = null), (this._value = null), ++n.ref, He(this, e);
        }
        var qe = {
          get: function () {
            var e = Le,
              n = bn;
            function r(r, t) {
              var a = this,
                m = !e.global && (e !== Le || n !== bn),
                o = m && !pn(),
                u = new Be(function (n, u) {
                  Ye(a, new Ue(In(r, e, m, o), In(t, e, m, o), n, u, e));
                });
              return X && $e(u, this), u;
            }
            return (r.prototype = ke), r;
          },
          set: function (e) {
            v(
              this,
              'then',
              e && e.prototype === ke
                ? qe
                : {
                    get: function () {
                      return e;
                    },
                    set: qe.set
                  }
            );
          }
        };
        function Ue(e, n, r, t, a) {
          (this.onFulfilled = 'function' == typeof e ? e : null),
            (this.onRejected = 'function' == typeof n ? n : null),
            (this.resolve = r),
            (this.reject = t),
            (this.psd = a);
        }
        function He(e, n) {
          try {
            n(function (n) {
              if (null === e._state) {
                if (n === e)
                  throw new TypeError(
                    'A promise cannot be resolved with itself.'
                  );
                var r = e._lib && en();
                n && 'function' == typeof n.then
                  ? He(e, function (e, r) {
                      n instanceof Be ? n._then(e, r) : n.then(e, r);
                    })
                  : ((e._state = !0), (e._value = n), Xe(e)),
                  r && nn();
              }
            }, We.bind(null, e));
          } catch (r) {
            We(e, r);
          }
        }
        function We(e, n) {
          if ((je.push(n), null === e._state)) {
            var r = e._lib && en();
            (n = De(n)),
              (e._state = !1),
              (e._value = n),
              X &&
                null !== n &&
                'object' == typeof n &&
                !n._promise &&
                (function (r, t, a) {
                  try {
                    (function () {
                      var r = I(n, 'stack');
                      (n._promise = e),
                        v(n, 'stack', {
                          get: function () {
                            return Se
                              ? r && (r.get ? r.get.apply(n) : r.value)
                              : e.stack;
                          }
                        });
                    }.apply(null, void 0));
                  } catch (m) {}
                })(),
              (function (e) {
                Pe.some(function (n) {
                  return n._value === e._value;
                }) || Pe.push(e);
              })(e),
              Xe(e),
              r && nn();
          }
        }
        function Xe(e) {
          var n = e._listeners;
          e._listeners = [];
          for (var r = 0, t = n.length; r < t; ++r) Ye(e, n[r]);
          var a = e._PSD;
          --a.ref || a.finalize(),
            0 === Ke &&
              (++Ke,
              Ae(function () {
                0 == --Ke && rn();
              }, []));
        }
        function Ye(e, n) {
          if (null !== e._state) {
            var r = e._state ? n.onFulfilled : n.onRejected;
            if (null === r) return (e._state ? n.resolve : n.reject)(e._value);
            ++n.psd.ref, ++Ke, Ae(Qe, [r, e, n]);
          } else e._listeners.push(n);
        }
        function Qe(e, n, r) {
          try {
            Fe = n;
            var t,
              a = n._value;
            n._state
              ? (t = e(a))
              : (je.length && (je = []),
                (t = e(a)),
                -1 === je.indexOf(a) &&
                  (function (e) {
                    for (var n = Pe.length; n; )
                      if (Pe[--n]._value === e._value)
                        return void Pe.splice(n, 1);
                  })(n)),
              r.resolve(t);
          } catch (m) {
            r.reject(m);
          } finally {
            (Fe = null), 0 == --Ke && rn(), --r.psd.ref || r.psd.finalize();
          }
        }
        function Je(e, n, r) {
          if (n.length === r) return n;
          var t = '';
          if (!1 === e._state) {
            var a,
              m,
              o = e._value;
            null != o
              ? ((a = o.name || 'Error'), (m = o.message || o), (t = Z(o, 0)))
              : ((a = o), (m = '')),
              n.push(a + (m ? ': ' + m : '') + t);
          }
          return (
            X &&
              ((t = Z(e._stackHolder, 2)) && -1 === n.indexOf(t) && n.push(t),
              e._prev && Je(e._prev, n, r)),
            n
          );
        }
        function $e(e, n) {
          var r = n ? n._numPrev + 1 : 0;
          r < 100 && ((e._prev = n), (e._numPrev = r));
        }
        function Ze() {
          en() && nn();
        }
        function en() {
          var e = Oe;
          return (Oe = !1), (Ee = !1), e;
        }
        function nn() {
          var e, n, r;
          do {
            for (; ze.length > 0; )
              for (e = ze, ze = [], r = e.length, n = 0; n < r; ++n) {
                var t = e[n];
                t[0].apply(null, t[1]);
              }
          } while (ze.length > 0);
          (Oe = !0), (Ee = !0);
        }
        function rn() {
          var e = Pe;
          (Pe = []),
            e.forEach(function (e) {
              e._PSD.onunhandled.call(null, e._value, e);
            });
          for (var n = Me.slice(0), r = n.length; r; ) n[--r]();
        }
        function tn(e) {
          return new Be(ke, !1, e);
        }
        function an(e, n) {
          var r = Le;
          return function () {
            var t = en(),
              a = Le;
            try {
              return fn(r, !0), e.apply(this, arguments);
            } catch (m) {
              n && n(m);
            } finally {
              fn(a, !1), t && nn();
            }
          };
        }
        h(Be.prototype, {
          then: qe,
          _then: function (e, n) {
            Ye(this, new Ue(null, null, e, n, Le));
          },
          catch: function (e) {
            if (1 === arguments.length) return this.then(null, e);
            var n = arguments[0],
              r = arguments[1];
            return this.then(
              null,
              'function' == typeof n
                ? function (e) {
                    return e instanceof n ? r(e) : tn(e);
                  }
                : function (e) {
                    return e && e.name === n ? r(e) : tn(e);
                  }
            );
          },
          finally: function (e) {
            return this.then(
              function (n) {
                return e(), n;
              },
              function (n) {
                return e(), tn(n);
              }
            );
          },
          stack: {
            get: function () {
              if (this._stack) return this._stack;
              try {
                Se = !0;
                var e = Je(this, [], 20).join('\nFrom previous: ');
                return null !== this._state && (this._stack = e), e;
              } finally {
                Se = !1;
              }
            }
          },
          timeout: function (e, n) {
            var r = this;
            return e < 1 / 0
              ? new Be(function (t, a) {
                  var m = setTimeout(function () {
                    return a(new ye.Timeout(n));
                  }, e);
                  r.then(t, a).finally(clearTimeout.bind(null, m));
                })
              : this;
          }
        }),
          'undefined' != typeof Symbol &&
            Symbol.toStringTag &&
            v(Be.prototype, Symbol.toStringTag, 'Dexie.Promise'),
          (Te.env = vn()),
          h(Be, {
            all: function () {
              var e = H.apply(null, arguments).map(cn);
              return new Be(function (n, r) {
                0 === e.length && n([]);
                var t = e.length;
                e.forEach(function (a, m) {
                  return Be.resolve(a).then(function (r) {
                    (e[m] = r), --t || n(e);
                  }, r);
                });
              });
            },
            resolve: function (e) {
              if (e instanceof Be) return e;
              if (e && 'function' == typeof e.then)
                return new Be(function (n, r) {
                  e.then(n, r);
                });
              var n = new Be(ke, !0, e);
              return $e(n, Fe), n;
            },
            reject: tn,
            race: function () {
              var e = H.apply(null, arguments).map(cn);
              return new Be(function (n, r) {
                e.map(function (e) {
                  return Be.resolve(e).then(n, r);
                });
              });
            },
            PSD: {
              get: function () {
                return Le;
              },
              set: function (e) {
                return (Le = e);
              }
            },
            totalEchoes: {
              get: function () {
                return bn;
              }
            },
            newPSD: Nn,
            usePSD: gn,
            scheduler: {
              get: function () {
                return Ae;
              },
              set: function (e) {
                Ae = e;
              }
            },
            rejectionMapper: {
              get: function () {
                return De;
              },
              set: function (e) {
                De = e;
              }
            },
            follow: function (e, n) {
              return new Be(function (r, t) {
                return Nn(
                  function (n, r) {
                    var t = Le;
                    (t.unhandleds = []),
                      (t.onunhandled = r),
                      (t.finalize = ce(function () {
                        var e = this;
                        Me.push(function t() {
                          0 === e.unhandleds.length ? n() : r(e.unhandleds[0]),
                            Me.splice(Me.indexOf(t), 1);
                        }),
                          ++Ke,
                          Ae(function () {
                            0 == --Ke && rn();
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
          _e &&
            (_e.allSettled &&
              v(Be, 'allSettled', function () {
                var e = H.apply(null, arguments).map(cn);
                return new Be(function (n) {
                  0 === e.length && n([]);
                  var r = e.length,
                    t = new Array(r);
                  e.forEach(function (e, a) {
                    return Be.resolve(e)
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
            _e.any &&
              'undefined' != typeof AggregateError &&
              v(Be, 'any', function () {
                var e = H.apply(null, arguments).map(cn);
                return new Be(function (n, r) {
                  0 === e.length && r(new AggregateError([]));
                  var t = e.length,
                    a = new Array(t);
                  e.forEach(function (e, m) {
                    return Be.resolve(e).then(
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
        var mn = { awaits: 0, echoes: 0, id: 0 },
          on = 0,
          un = [],
          yn = 0,
          bn = 0,
          sn = 0;
        function Nn(e, n, r, t) {
          var a = Le,
            m = Object.create(a);
          (m.parent = a), (m.ref = 0), (m.global = !1), (m.id = ++sn);
          var o = Te.env;
          (m.env = Ve
            ? {
                Promise: Be,
                PromiseProp: { value: Be, configurable: !0, writable: !0 },
                all: Be.all,
                race: Be.race,
                allSettled: Be.allSettled,
                any: Be.any,
                resolve: Be.resolve,
                reject: Be.reject,
                nthen: xn(o.nthen, m),
                gthen: xn(o.gthen, m)
              }
            : {}),
            n && l(m, n),
            ++a.ref,
            (m.finalize = function () {
              --this.parent.ref || this.parent.finalize();
            });
          var u = gn(m, e, r, t);
          return 0 === m.ref && m.finalize(), u;
        }
        function ln() {
          return (
            mn.id || (mn.id = ++on), ++mn.awaits, (mn.echoes += 100), mn.id
          );
        }
        function pn() {
          return (
            !!mn.awaits &&
            (0 == --mn.awaits && (mn.id = 0), (mn.echoes = 100 * mn.awaits), !0)
          );
        }
        function cn(e) {
          return mn.echoes && e && e.constructor === _e
            ? (ln(),
              e.then(
                function (e) {
                  return pn(), e;
                },
                function (e) {
                  return pn(), Gn(e);
                }
              ))
            : e;
        }
        function dn(e) {
          ++bn,
            (mn.echoes && 0 != --mn.echoes) || (mn.echoes = mn.id = 0),
            un.push(Le),
            fn(e, !0);
        }
        function hn() {
          var e = un[un.length - 1];
          un.pop(), fn(e, !1);
        }
        function fn(e, n) {
          var r = Le;
          if (
            ((n
              ? !mn.echoes || (yn++ && e === Le)
              : !yn || (--yn && e === Le)) || kn(n ? dn.bind(null, e) : hn),
            e !== Le && ((Le = e), r === Te && (Te.env = vn()), Ve))
          ) {
            var t = Te.env.Promise,
              a = e.env;
            (Ce.then = a.nthen),
              (t.prototype.then = a.gthen),
              (r.global || e.global) &&
                (Object.defineProperty(N, 'Promise', a.PromiseProp),
                (t.all = a.all),
                (t.race = a.race),
                (t.resolve = a.resolve),
                (t.reject = a.reject),
                a.allSettled && (t.allSettled = a.allSettled),
                a.any && (t.any = a.any));
          }
        }
        function vn() {
          var e = N.Promise;
          return Ve
            ? {
                Promise: e,
                PromiseProp: Object.getOwnPropertyDescriptor(N, 'Promise'),
                all: e.all,
                race: e.race,
                allSettled: e.allSettled,
                any: e.any,
                resolve: e.resolve,
                reject: e.reject,
                nthen: Ce.then,
                gthen: e.prototype.then
              }
            : {};
        }
        function gn(e, n, r, t, a) {
          var m = Le;
          try {
            return fn(e, !0), n(r, t, a);
          } finally {
            fn(m, !1);
          }
        }
        function kn(e) {
          we.call(xe, e);
        }
        function In(e, n, r, t) {
          return 'function' != typeof e
            ? e
            : function () {
                var a = Le;
                r && ln(), fn(n, !0);
                try {
                  return e.apply(this, arguments);
                } finally {
                  fn(a, !1), t && kn(pn);
                }
              };
        }
        function xn(e, n) {
          return function (r, t) {
            return e.call(this, In(r, n), In(t, n));
          };
        }
        function Cn(e, n) {
          var r;
          try {
            r = n.onuncatched(e);
          } catch (m) {}
          if (!1 !== r)
            try {
              var t,
                a = { promise: n, reason: e };
              if (
                (N.document && document.createEvent
                  ? ((t = document.createEvent('Event')).initEvent(
                      'unhandledrejection',
                      !0,
                      !0
                    ),
                    l(t, a))
                  : N.CustomEvent &&
                    l(
                      (t = new CustomEvent('unhandledrejection', {
                        detail: a
                      })),
                      a
                    ),
                t &&
                  N.dispatchEvent &&
                  (dispatchEvent(t),
                  !N.PromiseRejectionEvent && N.onunhandledrejection))
              )
                try {
                  N.onunhandledrejection(t);
                } catch (o) {}
              X &&
                t &&
                !t.defaultPrevented &&
                console.warn('Unhandled rejection: ' + (e.stack || e));
            } catch (m) {}
        }
        -1 === ('' + we).indexOf('[native code]') && (ln = pn = Ne);
        var Gn = Be.reject;
        function wn(e, n, r, t) {
          if (e._state.openComplete || Le.letThrough) {
            var a = e._createTransaction(n, r, e._dbSchema);
            try {
              a.create();
            } catch (m) {
              return Gn(m);
            }
            return a
              ._promise(n, function (e, n) {
                return Nn(function () {
                  return (Le.trans = a), t(e, n, a);
                });
              })
              .then(function (e) {
                return a._completion.then(function () {
                  return e;
                });
              });
          }
          if (!e._state.isBeingOpened) {
            if (!e._options.autoOpen) return Gn(new ye.DatabaseClosed());
            e.open().catch(Ne);
          }
          return e._state.dbReadyPromise.then(function () {
            return wn(e, n, r, t);
          });
        }
        var _n = String.fromCharCode(65535),
          Vn =
            'Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.',
          Sn = [],
          Rn =
            'undefined' != typeof navigator &&
            /(MSIE|Trident|Edge)/.test(navigator.userAgent),
          An = Rn,
          On = Rn,
          En = function (e) {
            return !/(dexie\.js|dexie\.min\.js)/.test(e);
          };
        function Pn(e, n) {
          return e
            ? n
              ? function () {
                  return e.apply(this, arguments) && n.apply(this, arguments);
                }
              : e
            : n;
        }
        var jn = {
          type: 3,
          lower: -1 / 0,
          lowerOpen: !1,
          upper: [[]],
          upperOpen: !1
        };
        function Fn(e) {
          return function (n) {
            return void 0 === S(n, e) && A((n = T(n)), e), n;
          };
        }
        var Dn = (function () {
          function e() {}
          return (
            (e.prototype._trans = function (e, n, r) {
              var t = this._tx || Le.trans,
                a = this.name;
              function m(e, r, t) {
                if (!t.schema[a])
                  throw new ye.NotFound(
                    'Table ' + a + ' not part of transaction'
                  );
                return n(t.idbtrans, t);
              }
              var o = en();
              try {
                return t && t.db === this.db
                  ? t === Le.trans
                    ? t._promise(e, m, r)
                    : Nn(
                        function () {
                          return t._promise(e, m, r);
                        },
                        { trans: t, transless: Le.transless || Le }
                      )
                  : wn(this.db, e, [this.name], m);
              } finally {
                o && nn();
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
              if (s(e))
                return new this.db.WhereClause(this, '[' + e.join('+') + ']');
              var n = b(e);
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
              if (r && this.db._maxKey !== _n)
                return this.where(r.name).equals(
                  r.keyPath.map(function (n) {
                    return e[n];
                  })
                );
              !r &&
                X &&
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
              var o = n.reduce(
                  function (n, r) {
                    var a = n[0],
                      o = n[1],
                      u = t[r],
                      i = e[r];
                    return [
                      a || u,
                      a || !u
                        ? Pn(
                            o,
                            u && u.multi
                              ? function (e) {
                                  var n = S(e, r);
                                  return (
                                    s(n) &&
                                    n.some(function (e) {
                                      return m(i, e);
                                    })
                                  );
                                }
                              : function (e) {
                                  return m(i, S(e, r));
                                }
                          )
                        : o
                    ];
                  },
                  [null, null]
                ),
                u = o[0],
                i = o[1];
              return u
                ? this.where(u.name).equals(e[u.keyPath]).filter(i)
                : r
                ? this.filter(i)
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
                new this.db.WhereClause(
                  this,
                  s(e) ? '[' + e.join('+') + ']' : e
                )
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
                  if (d(n, t))
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
                l(this, e);
              });
            }),
            (e.prototype.add = function (e, n) {
              var r = this,
                t = this.schema.primKey,
                a = t.keyPath,
                m = e;
              return (
                a && t.auto && (m = Fn(a)(e)),
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
                      ? Be.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (n) {
                    if (a)
                      try {
                        R(e, a, n);
                      } catch (r) {}
                    return n;
                  })
              );
            }),
            (e.prototype.update = function (e, n) {
              if ('object' != typeof n || s(n))
                throw new ye.InvalidArgument(
                  'Modifications must be an object.'
                );
              if ('object' != typeof e || s(e))
                return this.where(':id').equals(e).modify(n);
              b(n).forEach(function (r) {
                R(e, r, n[r]);
              });
              var r = S(e, this.schema.primKey.keyPath);
              return void 0 === r
                ? Gn(
                    new ye.InvalidArgument(
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
                a && t.auto && (m = Fn(a)(e)),
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
                      ? Be.reject(e.failures[0])
                      : e.lastResult;
                  })
                  .then(function (n) {
                    if (a)
                      try {
                        R(e, a, n);
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
                return e.numFailures ? Be.reject(e.failures[0]) : void 0;
              });
            }),
            (e.prototype.clear = function () {
              var e = this;
              return this._trans('readwrite', function (n) {
                return e.core.mutate({
                  trans: n,
                  type: 'deleteRange',
                  range: jn
                });
              }).then(function (e) {
                return e.numFailures ? Be.reject(e.failures[0]) : void 0;
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
                  u = r.keyPath;
                if (u && a)
                  throw new ye.InvalidArgument(
                    'bulkAdd(): keys argument invalid on tables with inbound keys'
                  );
                if (a && a.length !== e.length)
                  throw new ye.InvalidArgument(
                    'Arguments objects and keys must have the same length'
                  );
                var i = e.length,
                  y = u && o ? e.map(Fn(u)) : e;
                return t.core
                  .mutate({
                    trans: n,
                    type: 'add',
                    keys: a,
                    values: y,
                    wantResults: m
                  })
                  .then(function (e) {
                    var n = e.numFailures,
                      r = e.failures;
                    if (0 === n) return m ? e.results : e.lastResult;
                    throw new oe(
                      t.name +
                        '.bulkAdd(): ' +
                        n +
                        ' of ' +
                        i +
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
                  u = r.keyPath;
                if (u && a)
                  throw new ye.InvalidArgument(
                    'bulkPut(): keys argument invalid on tables with inbound keys'
                  );
                if (a && a.length !== e.length)
                  throw new ye.InvalidArgument(
                    'Arguments objects and keys must have the same length'
                  );
                var i = e.length,
                  y = u && o ? e.map(Fn(u)) : e;
                return t.core
                  .mutate({
                    trans: n,
                    type: 'put',
                    keys: a,
                    values: y,
                    wantResults: m
                  })
                  .then(function (e) {
                    var n = e.numFailures,
                      r = e.failures;
                    if (0 === n) return m ? e.results : e.lastResult;
                    throw new oe(
                      t.name +
                        '.bulkPut(): ' +
                        n +
                        ' of ' +
                        i +
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
                throw new oe(
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
        function Tn(e) {
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
            if ('object' == typeof e) return o(e);
            t || (t = ve), a || (a = Ne);
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
          function o(e) {
            b(e).forEach(function (n) {
              var r = e[n];
              if (s(r)) m(n, e[n][0], e[n][1]);
              else {
                if ('asap' !== r)
                  throw new ye.InvalidArgument('Invalid event config');
                var t = m(n, le, function () {
                  for (var e = arguments.length, n = new Array(e); e--; )
                    n[e] = arguments[e];
                  t.subscribers.forEach(function (e) {
                    _(function () {
                      e.apply(null, n);
                    });
                  });
                });
              }
            });
          }
        }
        function Ln(e, n) {
          return g(n).from({ prototype: e }), n;
        }
        function zn(e, n) {
          return (
            !(e.filter || e.algorithm || e.or) &&
            (n ? e.justLimit : !e.replayFilter)
          );
        }
        function Kn(e, n) {
          e.filter = Pn(e.filter, n);
        }
        function Mn(e, n, r) {
          var t = e.replayFilter;
          (e.replayFilter = t
            ? function () {
                return Pn(t(), n());
              }
            : n),
            (e.justLimit = r && !t);
        }
        function Bn(e, n) {
          if (e.isPrimKey) return n.primaryKey;
          var r = n.getIndexByKeyPath(e.index);
          if (!r)
            throw new ye.Schema(
              'KeyPath ' +
                e.index +
                ' on object store ' +
                n.name +
                ' is not indexed'
            );
          return r;
        }
        function qn(e, n, r) {
          var t = Bn(e, n.schema);
          return n.openCursor({
            trans: r,
            values: !e.keysOnly,
            reverse: 'prev' === e.dir,
            unique: !!e.unique,
            query: { index: t, range: e.range }
          });
        }
        function Un(e, n, r, t) {
          var a = e.replayFilter ? Pn(e.filter, e.replayFilter()) : e.filter;
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
                    u = '' + o;
                  '[object ArrayBuffer]' === u && (u = '' + new Uint8Array(o)),
                    d(m, u) || ((m[u] = !0), n(e, r, t));
                }
              };
            return Promise.all([
              e.or._iterate(o, r),
              Hn(qn(e, t, r), e.algorithm, o, !e.keysOnly && e.valueMapper)
            ]);
          }
          return Hn(
            qn(e, t, r),
            Pn(e.algorithm, a),
            n,
            !e.keysOnly && e.valueMapper
          );
        }
        function Hn(e, n, r, t) {
          var a = an(
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
                      e.stop(n), (r = Ne);
                    },
                    function (n) {
                      e.fail(n), (r = Ne);
                    }
                  )) ||
                  a(e.value, e, function (e) {
                    return (r = e);
                  }),
                  r();
              });
          });
        }
        var Wn = (function () {
          function e() {}
          return (
            (e.prototype._read = function (e, n) {
              var r = this._ctx;
              return r.error
                ? r.table._trans(null, Gn.bind(null, r.error))
                : r.table._trans('readonly', e).then(n);
            }),
            (e.prototype._write = function (e) {
              var n = this._ctx;
              return n.error
                ? n.table._trans(null, Gn.bind(null, n.error))
                : n.table._trans('readwrite', e, 'locked');
            }),
            (e.prototype._addAlgorithm = function (e) {
              var n = this._ctx;
              n.algorithm = Pn(n.algorithm, e);
            }),
            (e.prototype._iterate = function (e, n) {
              return Un(this._ctx, e, n, this._ctx.table.core);
            }),
            (e.prototype.clone = function (e) {
              var n = Object.create(this.constructor.prototype),
                r = Object.create(this._ctx);
              return e && l(r, e), (n._ctx = r), n;
            }),
            (e.prototype.raw = function () {
              return (this._ctx.valueMapper = null), this;
            }),
            (e.prototype.each = function (e) {
              var n = this._ctx;
              return this._read(function (r) {
                return Un(n, e, r, n.table.core);
              });
            }),
            (e.prototype.count = function (e) {
              var n = this;
              return this._read(function (e) {
                var r = n._ctx,
                  t = r.table.core;
                if (zn(r, !0))
                  return t
                    .count({
                      trans: e,
                      query: { index: Bn(r, t.schema), range: r.range }
                    })
                    .then(function (e) {
                      return Math.min(e, r.limit);
                    });
                var a = 0;
                return Un(
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
              function u(e, n) {
                var r = m(e, a),
                  t = m(n, a);
                return r < t ? -o : r > t ? o : 0;
              }
              return this.toArray(function (e) {
                return e.sort(u);
              }).then(n);
            }),
            (e.prototype.toArray = function (e) {
              var n = this;
              return this._read(function (e) {
                var r = n._ctx;
                if ('next' === r.dir && zn(r, !0) && r.limit > 0) {
                  var t = r.valueMapper,
                    a = Bn(r, r.table.core.schema);
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
                return Un(
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
                  zn(n)
                    ? Mn(n, function () {
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
                    : Mn(n, function () {
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
                Mn(
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
                Kn(this._ctx, function (r, t, a) {
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
                Kn(this._ctx, function (n) {
                  return e(n.value);
                }),
                ((n = this._ctx).isMatch = Pn(n.isMatch, e)),
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
                this._ondirectionchange &&
                  this._ondirectionchange(this._ctx.dir),
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
              if ('next' === n.dir && zn(n, !0) && n.limit > 0)
                return this._read(function (e) {
                  var r = Bn(n, n.table.core.schema);
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
                Kn(this._ctx, function (e) {
                  var n = e.primaryKey.toString(),
                    t = d(r, n);
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
                  var m = b(e),
                    o = m.length;
                  a = function (n) {
                    for (var r = !1, t = 0; t < o; ++t) {
                      var a = m[t],
                        u = e[a];
                      S(n, a) !== u && (R(n, a, u), (r = !0));
                    }
                    return r;
                  };
                }
                var u = r.table.core,
                  i = u.schema.primaryKey,
                  y = i.outbound,
                  s = i.extractKey,
                  N = 'testmode' in jr ? 1 : 2e3,
                  l = n.db.core.cmp,
                  p = [],
                  c = 0,
                  d = [],
                  h = function (e, n) {
                    var r = n.failures;
                    c += e - n.numFailures;
                    for (var t = 0, a = b(r); t < a.length; t++)
                      p.push(r[a[t]]);
                  };
                return n
                  .clone()
                  .primaryKeys()
                  .then(function (e) {
                    return (function n(r) {
                      var m = Math.min(N, e.length - r);
                      return u
                        .getMany({ trans: t, keys: e.slice(r, r + m) })
                        .then(function (o) {
                          for (
                            var i = [],
                              b = [],
                              p = y ? [] : null,
                              c = [],
                              d = 0;
                            d < m;
                            ++d
                          ) {
                            var f = o[d],
                              v = { value: T(f), primKey: e[r + d] };
                            !1 !== a.call(v, v.value, v) &&
                              (null == v.value
                                ? c.push(e[r + d])
                                : y || 0 === l(s(f), s(v.value))
                                ? (b.push(v.value), y && p.push(e[r + d]))
                                : (c.push(e[r + d]), i.push(v.value)));
                          }
                          return Promise.resolve(
                            i.length > 0 &&
                              u
                                .mutate({ trans: t, type: 'add', values: i })
                                .then(function (e) {
                                  for (var n in e.failures)
                                    c.splice(parseInt(n), 1);
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
                                c.length > 0 &&
                                u
                                  .mutate({ trans: t, type: 'delete', keys: c })
                                  .then(function (e) {
                                    return h(c.length, e);
                                  })
                              );
                            })
                            .then(function () {
                              return e.length > r + m && n(r + N);
                            });
                        });
                    })(0).then(function () {
                      if (p.length > 0)
                        throw new me(
                          'Error modifying one or more objects',
                          p,
                          c,
                          d
                        );
                      return e.length;
                    });
                  });
              });
            }),
            (e.prototype.delete = function () {
              var e = this._ctx,
                n = e.range;
              return zn(e) && ((e.isPrimKey && !On) || 3 === n.type)
                ? this._write(function (r) {
                    var t = n;
                    return e.table.core
                      .count({
                        trans: r,
                        query: {
                          index: e.table.core.schema.primaryKey,
                          range: t
                        }
                      })
                      .then(function (n) {
                        return e.table.core
                          .mutate({ trans: r, type: 'deleteRange', range: t })
                          .then(function (e) {
                            var r = e.failures,
                              t = e.numFailures;
                            if (t)
                              throw new me(
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
        function Xn(e, n) {
          return e < n ? -1 : e === n ? 0 : 1;
        }
        function Yn(e, n) {
          return e > n ? -1 : e === n ? 0 : 1;
        }
        function Qn(e, n, r) {
          var t = e instanceof rr ? new e.Collection(e) : e;
          return (t._ctx.error = r ? new r(n) : new TypeError(n)), t;
        }
        function Jn(e) {
          return new e.Collection(e, function () {
            return nr('');
          }).limit(0);
        }
        function $n(e, n, r, t, a, m) {
          for (
            var o = Math.min(e.length, t.length), u = -1, i = 0;
            i < o;
            ++i
          ) {
            var y = n[i];
            if (y !== t[i])
              return a(e[i], r[i]) < 0
                ? e.substr(0, i) + r[i] + r.substr(i + 1)
                : a(e[i], t[i]) < 0
                ? e.substr(0, i) + t[i] + r.substr(i + 1)
                : u >= 0
                ? e.substr(0, u) + n[u] + r.substr(u + 1)
                : null;
            a(e[i], y) < 0 && (u = i);
          }
          return o < t.length && 'next' === m
            ? e + r.substr(e.length)
            : o < e.length && 'prev' === m
            ? e.substr(0, r.length)
            : u < 0
            ? null
            : e.substr(0, u) + t[u] + r.substr(u + 1);
        }
        function Zn(e, n, r, t) {
          var a,
            m,
            o,
            u,
            i,
            y,
            b,
            s = r.length;
          if (
            !r.every(function (e) {
              return 'string' == typeof e;
            })
          )
            return Qn(e, 'String expected.');
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
              (o = 'next' === e ? Xn : Yn);
            var n = r
              .map(function (e) {
                return { lower: m(e), upper: a(e) };
              })
              .sort(function (e, n) {
                return o(e.lower, n.lower);
              });
            (u = n.map(function (e) {
              return e.upper;
            })),
              (i = n.map(function (e) {
                return e.lower;
              })),
              (y = e),
              (b = 'next' === e ? '' : t);
          }
          N('next');
          var l = new e.Collection(e, function () {
            return er(u[0], i[s - 1] + t);
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
              if (n(N, i, p)) return !0;
              for (var l = null, c = p; c < s; ++c) {
                var d = $n(a, N, u[c], i[c], o, y);
                null === d && null === l
                  ? (p = c + 1)
                  : (null === l || o(l, d) > 0) && (l = d);
              }
              return (
                r(
                  null !== l
                    ? function () {
                        e.continue(l + b);
                      }
                    : t
                ),
                !1
              );
            }),
            l
          );
        }
        function er(e, n, r, t) {
          return { type: 2, lower: e, upper: n, lowerOpen: r, upperOpen: t };
        }
        function nr(e) {
          return { type: 1, lower: e, upper: e };
        }
        var rr = (function () {
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
                  ? Jn(this)
                  : new this.Collection(this, function () {
                      return er(e, n, !r, !t);
                    });
              } catch (a) {
                return Qn(this, Vn);
              }
            }),
            (e.prototype.equals = function (e) {
              return null == e
                ? Qn(this, Vn)
                : new this.Collection(this, function () {
                    return nr(e);
                  });
            }),
            (e.prototype.above = function (e) {
              return null == e
                ? Qn(this, Vn)
                : new this.Collection(this, function () {
                    return er(e, void 0, !0);
                  });
            }),
            (e.prototype.aboveOrEqual = function (e) {
              return null == e
                ? Qn(this, Vn)
                : new this.Collection(this, function () {
                    return er(e, void 0, !1);
                  });
            }),
            (e.prototype.below = function (e) {
              return null == e
                ? Qn(this, Vn)
                : new this.Collection(this, function () {
                    return er(void 0, e, !1, !0);
                  });
            }),
            (e.prototype.belowOrEqual = function (e) {
              return null == e
                ? Qn(this, Vn)
                : new this.Collection(this, function () {
                    return er(void 0, e);
                  });
            }),
            (e.prototype.startsWith = function (e) {
              return 'string' != typeof e
                ? Qn(this, 'String expected.')
                : this.between(e, e + _n, !0, !0);
            }),
            (e.prototype.startsWithIgnoreCase = function (e) {
              return '' === e
                ? this.startsWith(e)
                : Zn(
                    this,
                    function (e, n) {
                      return 0 === e.indexOf(n[0]);
                    },
                    [e],
                    _n
                  );
            }),
            (e.prototype.equalsIgnoreCase = function (e) {
              return Zn(
                this,
                function (e, n) {
                  return e === n[0];
                },
                [e],
                ''
              );
            }),
            (e.prototype.anyOfIgnoreCase = function () {
              var e = H.apply(U, arguments);
              return 0 === e.length
                ? Jn(this)
                : Zn(
                    this,
                    function (e, n) {
                      return -1 !== n.indexOf(e);
                    },
                    e,
                    ''
                  );
            }),
            (e.prototype.startsWithAnyOfIgnoreCase = function () {
              var e = H.apply(U, arguments);
              return 0 === e.length
                ? Jn(this)
                : Zn(
                    this,
                    function (e, n) {
                      return n.some(function (n) {
                        return 0 === e.indexOf(n);
                      });
                    },
                    e,
                    _n
                  );
            }),
            (e.prototype.anyOf = function () {
              var e = this,
                n = H.apply(U, arguments),
                r = this._cmp;
              try {
                n.sort(r);
              } catch (m) {
                return Qn(this, Vn);
              }
              if (0 === n.length) return Jn(this);
              var t = new this.Collection(this, function () {
                return er(n[0], n[n.length - 1]);
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
              var e = H.apply(U, arguments);
              if (0 === e.length) return new this.Collection(this);
              try {
                e.sort(this._ascending);
              } catch (r) {
                return Qn(this, Vn);
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
                u = this._max;
              if (0 === e.length) return Jn(this);
              if (
                !e.every(function (e) {
                  return (
                    void 0 !== e[0] && void 0 !== e[1] && a(e[0], e[1]) <= 0
                  );
                })
              )
                return Qn(
                  this,
                  'First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower',
                  ye.InvalidArgument
                );
              var i,
                y = !n || !1 !== n.includeLowers,
                b = n && !0 === n.includeUppers,
                s = a;
              function N(e, n) {
                return s(e[0], n[0]);
              }
              try {
                (i = e.reduce(function (e, n) {
                  for (var r = 0, a = e.length; r < a; ++r) {
                    var m = e[r];
                    if (t(n[0], m[1]) < 0 && t(n[1], m[0]) > 0) {
                      (m[0] = o(m[0], n[0])), (m[1] = u(m[1], n[1]));
                      break;
                    }
                  }
                  return r === a && e.push(n), e;
                }, [])).sort(N);
              } catch (f) {
                return Qn(this, Vn);
              }
              var l = 0,
                p = b
                  ? function (e) {
                      return a(e, i[l][1]) > 0;
                    }
                  : function (e) {
                      return a(e, i[l][1]) >= 0;
                    },
                c = y
                  ? function (e) {
                      return m(e, i[l][0]) > 0;
                    }
                  : function (e) {
                      return m(e, i[l][0]) >= 0;
                    },
                d = p,
                h = new this.Collection(this, function () {
                  return er(i[0][0], i[i.length - 1][1], !y, !b);
                });
              return (
                (h._ondirectionchange = function (e) {
                  'next' === e ? ((d = p), (s = a)) : ((d = c), (s = m)),
                    i.sort(N);
                }),
                h._addAlgorithm(function (e, n, t) {
                  for (var m = e.key; d(m); )
                    if (++l === i.length) return n(t), !1;
                  return (
                    !!(function (e) {
                      return !p(e) && !c(e);
                    })(m) ||
                    (0 === r._cmp(m, i[l][1]) ||
                      0 === r._cmp(m, i[l][0]) ||
                      n(function () {
                        e.continue(s === a ? i[l][0] : i[l][1]);
                      }),
                    !1)
                  );
                }),
                h
              );
            }),
            (e.prototype.startsWithAnyOf = function () {
              var e = H.apply(U, arguments);
              return e.every(function (e) {
                return 'string' == typeof e;
              })
                ? 0 === e.length
                  ? Jn(this)
                  : this.inAnyRange(
                      e.map(function (e) {
                        return [e, e + _n];
                      })
                    )
                : Qn(this, 'startsWithAnyOf() only works with strings');
            }),
            e
          );
        })();
        function tr(e) {
          return 1 === e.length ? e[0] : e;
        }
        function ar(e) {
          try {
            return e.only([[]]), [[]];
          } catch (n) {
            return _n;
          }
        }
        function mr(e) {
          return an(function (n) {
            return or(n), e(n.target.error), !1;
          });
        }
        function or(e) {
          e.stopPropagation && e.stopPropagation(),
            e.preventDefault && e.preventDefault();
        }
        var ur = (function () {
          function e() {}
          return (
            (e.prototype._lock = function () {
              return (
                w(!Le.global),
                ++this._reculock,
                1 !== this._reculock || Le.global || (Le.lockOwnerFor = this),
                this
              );
            }),
            (e.prototype._unlock = function () {
              if ((w(!Le.global), 0 == --this._reculock))
                for (
                  Le.global || (Le.lockOwnerFor = null);
                  this._blockedFuncs.length > 0 && !this._locked();

                ) {
                  var e = this._blockedFuncs.shift();
                  try {
                    gn(e[1], e[0]);
                  } catch (n) {}
                }
              return this;
            }),
            (e.prototype._locked = function () {
              return this._reculock && Le.lockOwnerFor !== this;
            }),
            (e.prototype.create = function (e) {
              var n = this;
              if (!this.mode) return this;
              var r = this.db.idbdb,
                t = this.db._state.dbOpenError;
              if ((w(!this.idbtrans), !e && !r))
                switch (t && t.name) {
                  case 'DatabaseClosedError':
                    throw new ye.DatabaseClosed(t);
                  case 'MissingAPIError':
                    throw new ye.MissingAPI(t.message, t);
                  default:
                    throw new ye.OpenFailed(t);
                }
              if (!this.active) throw new ye.TransactionInactive();
              return (
                w(null === this._completion._state),
                ((e = this.idbtrans =
                  e ||
                  r.transaction(tr(this.storeNames), this.mode)).onerror = an(
                  function (r) {
                    or(r), n._reject(e.error);
                  }
                )),
                (e.onabort = an(function (r) {
                  or(r),
                    n.active && n._reject(new ye.Abort(e.error)),
                    (n.active = !1),
                    n.on('abort').fire(r);
                })),
                (e.oncomplete = an(function () {
                  (n.active = !1), n._resolve();
                })),
                this
              );
            }),
            (e.prototype._promise = function (e, n, r) {
              var t = this;
              if ('readwrite' === e && 'readwrite' !== this.mode)
                return Gn(new ye.ReadOnly('Transaction is readonly'));
              if (!this.active) return Gn(new ye.TransactionInactive());
              if (this._locked())
                return new Be(function (a, m) {
                  t._blockedFuncs.push([
                    function () {
                      t._promise(e, n, r).then(a, m);
                    },
                    Le
                  ]);
                });
              if (r)
                return Nn(function () {
                  var e = new Be(function (e, r) {
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
              var a = new Be(function (e, r) {
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
                r = Be.resolve(e);
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
              return new Be(function (e, t) {
                r.then(
                  function (r) {
                    return n._waitingQueue.push(an(e.bind(null, r)));
                  },
                  function (e) {
                    return n._waitingQueue.push(an(t.bind(null, e)));
                  }
                ).finally(function () {
                  n._waitingFor === a && (n._waitingFor = null);
                });
              });
            }),
            (e.prototype.abort = function () {
              this.active && this._reject(new ye.Abort()), (this.active = !1);
            }),
            (e.prototype.table = function (e) {
              var n = this._memoizedTables || (this._memoizedTables = {});
              if (d(n, e)) return n[e];
              var r = this.schema[e];
              if (!r)
                throw new ye.NotFound(
                  'Table ' + e + ' not part of transaction'
                );
              var t = new this.db.Table(e, r, this);
              return (t.core = this.db.core.table(e)), (n[e] = t), t;
            }),
            e
          );
        })();
        function ir(e, n, r, t, a, m, o) {
          return {
            name: e,
            keyPath: n,
            unique: r,
            multi: t,
            auto: a,
            compound: m,
            src: (r && !o ? '&' : '') + (t ? '*' : '') + (a ? '++' : '') + yr(n)
          };
        }
        function yr(e) {
          return 'string' == typeof e
            ? e
            : e
            ? '[' + [].join.call(e, '+') + ']'
            : '';
        }
        function br(e, n, r) {
          return {
            name: e,
            primKey: n,
            indexes: r,
            mappedClass: null,
            idxByName: V(r, function (e) {
              return [e.name, e];
            })
          };
        }
        function sr(e) {
          return null == e
            ? function () {}
            : 'string' == typeof e
            ? (function (e) {
                return 1 === e.split('.').length
                  ? function (n) {
                      return n[e];
                    }
                  : function (n) {
                      return S(n, e);
                    };
              })(e)
            : function (n) {
                return S(n, e);
              };
        }
        function Nr(e, n) {
          return 'delete' === n.type
            ? n.keys
            : n.keys || n.values.map(e.extractKey);
        }
        function lr(e) {
          return [].slice.call(e);
        }
        var pr = 0;
        function cr(e) {
          return null == e
            ? ':id'
            : 'string' == typeof e
            ? e
            : '[' + e.join('+') + ']';
        }
        function dr(e, n, r, t) {
          var a = n.cmp.bind(n);
          function m(e) {
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
          var o = (function (e, n) {
              var r = lr(e.objectStoreNames);
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
                        t = s(n),
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
                            extractKey: sr(n)
                          },
                          indexes: lr(e.indexNames)
                            .map(function (n) {
                              return e.index(n);
                            })
                            .map(function (e) {
                              var n = e.unique,
                                r = e.multiEntry,
                                t = e.keyPath,
                                m = {
                                  name: e.name,
                                  compound: s(t),
                                  keyPath: t,
                                  unique: n,
                                  multiEntry: r,
                                  extractKey: sr(t)
                                };
                              return (a[cr(t)] = m), m;
                            }),
                          getIndexByKeyPath: function (e) {
                            return a[cr(e)];
                          }
                        };
                      return (
                        (a[':id'] = m.primaryKey),
                        null != n && (a[cr(n)] = m.primaryKey),
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
                    [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] <
                      604
                  )
              };
            })(e, t),
            u = o.schema,
            y = o.hasGetAll,
            b = u.tables.map(function (e) {
              return (function (e) {
                var n = e.name;
                return {
                  name: n,
                  schema: e,
                  mutate: function (r) {
                    var t = r.trans,
                      a = r.type,
                      o = r.keys,
                      u = r.values,
                      y = r.range,
                      b = r.wantResults;
                    return new Promise(function (r, s) {
                      r = an(r);
                      var N = t.objectStore(n),
                        l = null == N.keyPath,
                        p = 'put' === a || 'add' === a;
                      if (!p && 'delete' !== a && 'deleteRange' !== a)
                        throw new Error('Invalid operation type: ' + a);
                      var c = (o || u || { length: 1 }).length;
                      if (o && u && o.length !== u.length)
                        throw new Error(
                          'Given keys array must have same length as given values array.'
                        );
                      if (0 === c)
                        return r({
                          numFailures: 0,
                          failures: {},
                          results: [],
                          lastResult: void 0
                        });
                      var d,
                        h =
                          b &&
                          i(
                            o ||
                              Nr(e.primaryKey, { type: a, keys: o, values: u })
                          ),
                        f = [],
                        v = 0,
                        g = function (e) {
                          ++v,
                            or(e),
                            h && (h[e.target._reqno] = void 0),
                            (f[e.target._reqno] = e.target.error);
                        },
                        k = function (e) {
                          var n = e.target;
                          h[n._reqno] = n.result;
                        };
                      if ('deleteRange' === a) {
                        if (4 === y.type)
                          return r({
                            numFailures: v,
                            failures: f,
                            results: h,
                            lastResult: void 0
                          });
                        d = 3 === y.type ? N.clear() : N.delete(m(y));
                      } else {
                        var I = p ? (l ? [u, o] : [u, null]) : [o, null],
                          x = I[0],
                          C = I[1];
                        if (p)
                          for (var G = 0; G < c; ++G)
                            ((d =
                              C && void 0 !== C[G]
                                ? N[a](x[G], C[G])
                                : N[a](x[G]))._reqno = G),
                              h && void 0 === h[G] && (d.onsuccess = k),
                              (d.onerror = g);
                        else
                          for (G = 0; G < c; ++G)
                            ((d = N[a](x[G]))._reqno = G), (d.onerror = g);
                      }
                      var w = function (e) {
                        var n = e.target.result;
                        h && (h[c - 1] = n),
                          r({
                            numFailures: v,
                            failures: f,
                            results: h,
                            lastResult: n
                          });
                      };
                      (d.onerror = function (e) {
                        g(e), w(e);
                      }),
                        (d.onsuccess = w);
                    });
                  },
                  getMany: function (e) {
                    var r = e.trans,
                      t = e.keys;
                    return new Promise(function (e, a) {
                      e = an(e);
                      for (
                        var m,
                          o = r.objectStore(n),
                          u = t.length,
                          i = new Array(u),
                          y = 0,
                          b = 0,
                          s = function (n) {
                            var r = n.target;
                            (i[r._pos] = r.result), ++b === y && e(i);
                          },
                          N = mr(a),
                          l = 0;
                        l < u;
                        ++l
                      )
                        null != t[l] &&
                          (((m = o.get(t[l]))._pos = l),
                          (m.onsuccess = s),
                          (m.onerror = N),
                          ++y);
                      0 === y && e(i);
                    });
                  },
                  get: function (e) {
                    var r = e.trans,
                      t = e.key;
                    return new Promise(function (e, a) {
                      e = an(e);
                      var m = r.objectStore(n).get(t);
                      (m.onsuccess = function (n) {
                        return e(n.target.result);
                      }),
                        (m.onerror = mr(a));
                    });
                  },
                  query: (function (e) {
                    return function (r) {
                      return new Promise(function (t, a) {
                        t = an(t);
                        var o = r.values,
                          u = r.limit,
                          i = r.query,
                          y = u === 1 / 0 ? void 0 : u,
                          b = i.index,
                          s = i.range,
                          N = r.trans.objectStore(n),
                          l = b.isPrimaryKey ? N : N.index(b.name),
                          p = m(s);
                        if (0 === u) return t({ result: [] });
                        if (e) {
                          var c = o ? l.getAll(p, y) : l.getAllKeys(p, y);
                          (c.onsuccess = function (e) {
                            return t({ result: e.target.result });
                          }),
                            (c.onerror = mr(a));
                        } else {
                          var d = 0,
                            h =
                              o || !('openKeyCursor' in l)
                                ? l.openCursor(p)
                                : l.openKeyCursor(p),
                            f = [];
                          (h.onsuccess = function (e) {
                            var n = h.result;
                            return n
                              ? (f.push(o ? n.value : n.primaryKey),
                                ++d === u
                                  ? t({ result: f })
                                  : void n.continue())
                              : t({ result: f });
                          }),
                            (h.onerror = mr(a));
                        }
                      });
                    };
                  })(y),
                  openCursor: function (e) {
                    var r = e.trans,
                      t = e.values,
                      a = e.query,
                      o = e.reverse,
                      u = e.unique;
                    return new Promise(function (e, i) {
                      e = an(e);
                      var y = a.index,
                        b = a.range,
                        s = r.objectStore(n),
                        N = y.isPrimaryKey ? s : s.index(y.name),
                        l = o
                          ? u
                            ? 'prevunique'
                            : 'prev'
                          : u
                          ? 'nextunique'
                          : 'next',
                        p =
                          t || !('openKeyCursor' in N)
                            ? N.openCursor(m(b), l)
                            : N.openKeyCursor(m(b), l);
                      (p.onerror = mr(i)),
                        (p.onsuccess = an(function (n) {
                          var t = p.result;
                          if (t) {
                            (t.___id = ++pr), (t.done = !1);
                            var a = t.continue.bind(t),
                              m = t.continuePrimaryKey;
                            m && (m = m.bind(t));
                            var o = t.advance.bind(t),
                              u = function () {
                                throw new Error('Cursor not stopped');
                              };
                            (t.trans = r),
                              (t.stop = t.continue = t.continuePrimaryKey = t.advance = function () {
                                throw new Error('Cursor not started');
                              }),
                              (t.fail = an(i)),
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
                                    (e = an(e)),
                                      (p.onerror = mr(n)),
                                      (t.fail = n),
                                      (t.stop = function (n) {
                                        (t.stop = t.continue = t.continuePrimaryKey = t.advance = u),
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
                                  (p.onsuccess = an(function (e) {
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
                        }, i));
                    });
                  },
                  count: function (e) {
                    var r = e.query,
                      t = e.trans,
                      a = r.index,
                      o = r.range;
                    return new Promise(function (e, r) {
                      var u = t.objectStore(n),
                        i = a.isPrimaryKey ? u : u.index(a.name),
                        y = m(o),
                        b = y ? i.count(y) : i.count();
                      (b.onsuccess = an(function (n) {
                        return e(n.target.result);
                      })),
                        (b.onerror = mr(r));
                    });
                  }
                };
              })(e);
            }),
            N = {};
          return (
            b.forEach(function (e) {
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
              MAX_KEY: ar(r),
              schema: u
            }
          );
        }
        function hr(e, n) {
          var r = (function (e, n, r, t) {
            return {
              dbcore: (function (e, n) {
                return n.reduce(function (e, n) {
                  var r = n.create;
                  return m(m({}, e), r(e));
                }, e);
              })(dr(n, r.indexedDB, r.IDBKeyRange, t), e.dbcore)
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
        function fr(e, n, r, t) {
          r.forEach(function (r) {
            var a = t[r];
            n.forEach(function (n) {
              var t = I(n, r);
              (!t || ('value' in t && void 0 === t.value)) &&
                (n === e.Transaction.prototype || n instanceof e.Transaction
                  ? v(n, r, {
                      get: function () {
                        return this.table(r);
                      },
                      set: function (e) {
                        f(this, r, {
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
        function vr(e, n) {
          n.forEach(function (n) {
            for (var r in n) n[r] instanceof e.Table && delete n[r];
          });
        }
        function gr(e, n) {
          return e._cfg.version - n._cfg.version;
        }
        function kr(e, n) {
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
                (a.primKey.auto !== m.primKey.auto && !Rn)
              )
                (o.recreate = !0), t.change.push(o);
              else {
                var u = a.idxByName,
                  i = m.idxByName,
                  y = void 0;
                for (y in u) i[y] || o.del.push(y);
                for (y in i) {
                  var b = u[y],
                    s = i[y];
                  b ? b.src !== s.src && o.change.push(s) : o.add.push(s);
                }
                (o.del.length > 0 || o.add.length > 0 || o.change.length > 0) &&
                  t.change.push(o);
              }
            } else t.add.push([r, m]);
          }
          return t;
        }
        function Ir(e, n, r, t) {
          var a = e.db.createObjectStore(
            n,
            r.keyPath
              ? { keyPath: r.keyPath, autoIncrement: r.auto }
              : { autoIncrement: r.auto }
          );
          return (
            t.forEach(function (e) {
              return xr(a, e);
            }),
            a
          );
        }
        function xr(e, n) {
          e.createIndex(n.name, n.keyPath, {
            unique: n.unique,
            multiEntry: n.multi
          });
        }
        function Cr(e, n, r) {
          var t = {};
          return (
            C(n.objectStoreNames, 0).forEach(function (e) {
              for (
                var n = r.objectStore(e),
                  a = n.keyPath,
                  m = ir(
                    yr(a),
                    a || '',
                    !1,
                    !1,
                    !!n.autoIncrement,
                    a && 'string' != typeof a,
                    !0
                  ),
                  o = [],
                  u = 0;
                u < n.indexNames.length;
                ++u
              ) {
                var i = n.index(n.indexNames[u]),
                  y = ir(
                    i.name,
                    (a = i.keyPath),
                    !!i.unique,
                    !!i.multiEntry,
                    !1,
                    a && 'string' != typeof a,
                    !1
                  );
                o.push(y);
              }
              t[e] = br(e, m, o);
            }),
            t
          );
        }
        function Gr(e, n, r) {
          for (var t = r.db.objectStoreNames, a = 0; a < t.length; ++a) {
            var m = t[a],
              o = r.objectStore(m);
            e._hasGetAll = 'getAll' in o;
            for (var u = 0; u < o.indexNames.length; ++u) {
              var i = o.indexNames[u],
                y = o.index(i).keyPath,
                b = 'string' == typeof y ? y : '[' + C(y).join('+') + ']';
              if (n[m]) {
                var s = n[m].idxByName[b];
                s &&
                  ((s.name = i),
                  delete n[m].idxByName[b],
                  (n[m].idxByName[i] = s));
              }
            }
          }
          'undefined' != typeof navigator &&
            /Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            N.WorkerGlobalScope &&
            N instanceof N.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
            (e._hasGetAll = !1);
        }
        var wr,
          _r = (function () {
            function e() {}
            return (
              (e.prototype._parseStoresSpec = function (e, n) {
                b(e).forEach(function (r) {
                  if (null !== e[r]) {
                    var t = e[r].split(',').map(function (e, n) {
                        var r = (e = e.trim()).replace(/([&*]|\+\+)/g, ''),
                          t = /^\[/.test(r)
                            ? r.match(/^\[(.*)\]$/)[1].split('+')
                            : r;
                        return ir(
                          r,
                          t || null,
                          /\&/.test(e),
                          /\*/.test(e),
                          /\+\+/.test(e),
                          s(t),
                          0 === n
                        );
                      }),
                      a = t.shift();
                    if (a.multi)
                      throw new ye.Schema('Primary key cannot be multi-valued');
                    t.forEach(function (e) {
                      if (e.auto)
                        throw new ye.Schema(
                          'Only primary key can be marked as autoIncrement (++)'
                        );
                      if (!e.keyPath)
                        throw new ye.Schema(
                          'Index must have a name and cannot be an empty string'
                        );
                    }),
                      (n[r] = br(r, a, t));
                  }
                });
              }),
              (e.prototype.stores = function (e) {
                var n = this.db;
                this._cfg.storesSource = this._cfg.storesSource
                  ? l(this._cfg.storesSource, e)
                  : e;
                var r = {},
                  t = {};
                return (
                  n._versions.forEach(function (e) {
                    l(r, e._cfg.storesSource),
                      (t = e._cfg.dbschema = {}),
                      e._parseStoresSpec(r, t);
                  }),
                  (n._dbSchema = t),
                  vr(n, [n._allTables, n, n.Transaction.prototype]),
                  fr(
                    n,
                    [
                      n._allTables,
                      n,
                      n.Transaction.prototype,
                      this._cfg.tables
                    ],
                    b(t),
                    t
                  ),
                  (n._storeNames = b(t)),
                  this
                );
              }),
              (e.prototype.upgrade = function (e) {
                return (this._cfg.contentUpgrade = e), this;
              }),
              e
            );
          })();
        function Vr(e) {
          return Nn(function () {
            return (Le.letThrough = !0), e();
          });
        }
        function Sr(e) {
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
                : s(m)
                ? Promise.all(m).then(r, t)
                : r(m);
            };
          }
          return a(n)();
        }
        function Rr(e, n, r) {
          var t = arguments.length;
          if (t < 2) throw new ye.InvalidArgument('Too few arguments');
          for (var a = new Array(t - 1); --t; ) a[t - 1] = arguments[t];
          r = a.pop();
          var m = P(a);
          return [e, m, r];
        }
        function Ar(e, n, r, t, a) {
          return Be.resolve().then(function () {
            var m = Le.transless || Le,
              o = e._createTransaction(n, r, e._dbSchema, t),
              u = { trans: o, transless: m };
            t ? (o.idbtrans = t.idbtrans) : o.create();
            var i,
              y = W(a);
            y && ln();
            var b = Be.follow(function () {
              if ((i = a.call(o, o)))
                if (y) {
                  var e = pn.bind(null, null);
                  i.then(e, e);
                } else
                  'function' == typeof i.next &&
                    'function' == typeof i.throw &&
                    (i = Sr(i));
            }, u);
            return (i && 'function' == typeof i.then
              ? Be.resolve(i).then(function (e) {
                  return o.active
                    ? e
                    : Gn(
                        new ye.PrematureCommit(
                          'Transaction committed too early. See http://bit.ly/2kdckMn'
                        )
                      );
                })
              : b.then(function () {
                  return i;
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
                return o._reject(e), Gn(e);
              });
          });
        }
        function Or(e, n, r) {
          for (var t = s(e) ? e.slice() : [e], a = 0; a < r; ++a) t.push(n);
          return t;
        }
        var Er = {
            stack: 'dbcore',
            name: 'VirtualIndexMiddleware',
            level: 1,
            create: function (e) {
              return m(m({}, e), {
                table: function (n) {
                  var r = e.table(n),
                    t = r.schema,
                    a = {},
                    o = [];
                  function u(e, n, r) {
                    var t = cr(e),
                      i = (a[t] = a[t] || []),
                      y = null == e ? 0 : 'string' == typeof e ? 1 : e.length,
                      b = n > 0,
                      s = m(m({}, r), {
                        isVirtual: b,
                        isPrimaryKey: !b && r.isPrimaryKey,
                        keyTail: n,
                        keyLength: y,
                        extractKey: sr(e),
                        unique: !b && r.unique
                      });
                    return (
                      i.push(s),
                      s.isPrimaryKey || o.push(s),
                      y > 1 && u(2 === y ? e[0] : e.slice(0, y - 1), n + 1, r),
                      i.sort(function (e, n) {
                        return e.keyTail - n.keyTail;
                      }),
                      s
                    );
                  }
                  var i = u(t.primaryKey.keyPath, 0, t.primaryKey);
                  a[':id'] = [i];
                  for (var y = 0, b = t.indexes; y < b.length; y++) {
                    var s = b[y];
                    u(s.keyPath, 0, s);
                  }
                  function N(n) {
                    var r,
                      t,
                      a = n.query.index;
                    return a.isVirtual
                      ? m(m({}, n), {
                          query: {
                            index: a,
                            range:
                              ((r = n.query.range),
                              (t = a.keyTail),
                              {
                                type: 1 === r.type ? 2 : r.type,
                                lower: Or(
                                  r.lower,
                                  r.lowerOpen ? e.MAX_KEY : e.MIN_KEY,
                                  t
                                ),
                                lowerOpen: !0,
                                upper: Or(
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
                  return m(m({}, r), {
                    schema: m(m({}, t), {
                      primaryKey: i,
                      indexes: o,
                      getIndexByKeyPath: function (e) {
                        var n = a[cr(e)];
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
                                            Or(
                                              t,
                                              n.reverse ? e.MAX_KEY : e.MIN_KEY,
                                              a
                                            )
                                          )
                                        : n.unique
                                        ? r.continue(
                                            Or(
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
                                        Or(n, e.MAX_KEY, a),
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
          Pr = {
            stack: 'dbcore',
            name: 'HooksMiddleware',
            level: 2,
            create: function (e) {
              return m(m({}, e), {
                table: function (n) {
                  var r = e.table(n),
                    t = r.schema.primaryKey;
                  return m(m({}, r), {
                    mutate: function (e) {
                      var a = Le.trans,
                        o = a.table(n).hook,
                        u = o.deleting,
                        y = o.creating,
                        b = o.updating;
                      switch (e.type) {
                        case 'add':
                          if (y.fire === Ne) break;
                          return a._promise(
                            'readwrite',
                            function () {
                              return s(e);
                            },
                            !0
                          );
                        case 'put':
                          if (y.fire === Ne && b.fire === Ne) break;
                          return a._promise(
                            'readwrite',
                            function () {
                              return s(e);
                            },
                            !0
                          );
                        case 'delete':
                          if (u.fire === Ne) break;
                          return a._promise(
                            'readwrite',
                            function () {
                              return s(e);
                            },
                            !0
                          );
                        case 'deleteRange':
                          if (u.fire === Ne) break;
                          return a._promise(
                            'readwrite',
                            function () {
                              return (function (e) {
                                return N(e.trans, e.range, 1e4);
                              })(e);
                            },
                            !0
                          );
                      }
                      return r.mutate(e);
                      function s(e) {
                        var n = Le.trans,
                          a = e.keys || Nr(t, e);
                        if (!a) throw new Error('Keys missing');
                        return (
                          'delete' !==
                            (e =
                              'add' === e.type || 'put' === e.type
                                ? m(m({}, e), { keys: a, wantResults: !0 })
                                : m({}, e)).type && (e.values = i(e.values)),
                          e.keys && (e.keys = i(e.keys)),
                          (function (e, n, r) {
                            return 'add' === n.type
                              ? Promise.resolve(new Array(n.values.length))
                              : e.getMany({ trans: n.trans, keys: r });
                          })(r, e, a).then(function (m) {
                            var o = a.map(function (r, a) {
                              var o = m[a],
                                i = { onerror: null, onsuccess: null };
                              if ('delete' === e.type) u.fire.call(i, r, o, n);
                              else if ('add' === e.type || void 0 === o) {
                                var s = y.fire.call(i, r, e.values[a], n);
                                null == r &&
                                  null != s &&
                                  ((e.keys[a] = r = s),
                                  t.outbound || R(e.values[a], t.keyPath, r));
                              } else {
                                var N = M(o, e.values[a]),
                                  l = b.fire.call(i, N, r, o, n);
                                if (l) {
                                  var p = e.values[a];
                                  Object.keys(l).forEach(function (e) {
                                    d(p, e) ? (p[e] = l[e]) : R(p, e, l[e]);
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
                                    u = n.numFailures,
                                    i = n.lastResult,
                                    y = 0;
                                  y < a.length;
                                  ++y
                                ) {
                                  var b = t ? t[y] : a[y],
                                    s = o[y];
                                  null == b
                                    ? s.onerror && s.onerror(r[y])
                                    : s.onsuccess &&
                                      s.onsuccess(
                                        'put' === e.type && m[y]
                                          ? e.values[y]
                                          : b
                                      );
                                }
                                return {
                                  failures: r,
                                  results: t,
                                  numFailures: u,
                                  lastResult: i
                                };
                              })
                              .catch(function (e) {
                                return (
                                  o.forEach(function (n) {
                                    return n.onerror && n.onerror(e);
                                  }),
                                  Promise.reject(e)
                                );
                              });
                          })
                        );
                      }
                      function N(e, n, a) {
                        return r
                          .query({
                            trans: e,
                            values: !1,
                            query: { index: t, range: n },
                            limit: a
                          })
                          .then(function (r) {
                            var t = r.result;
                            return s({
                              type: 'delete',
                              keys: t,
                              trans: e
                            }).then(function (r) {
                              return r.numFailures > 0
                                ? Promise.reject(r.failures[0])
                                : t.length < a
                                ? {
                                    failures: [],
                                    numFailures: 0,
                                    lastResult: void 0
                                  }
                                : N(
                                    e,
                                    m(m({}, n), {
                                      lower: t[t.length - 1],
                                      lowerOpen: !0
                                    }),
                                    a
                                  );
                            });
                          });
                      }
                    }
                  });
                }
              });
            }
          },
          jr = (function () {
            function e(n, r) {
              var t = this;
              (this._middlewares = {}), (this.verno = 0);
              var a = e.dependencies;
              (this._options = r = m(
                {
                  addons: e.addons,
                  autoOpen: !0,
                  indexedDB: a.indexedDB,
                  IDBKeyRange: a.IDBKeyRange
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
              var u,
                i = {
                  dbOpenError: null,
                  isBeingOpened: !1,
                  onReadyBeingFired: null,
                  openComplete: !1,
                  dbReadyResolve: Ne,
                  dbReadyPromise: null,
                  cancelOpen: Ne,
                  openCanceller: null,
                  autoSchema: !0
                };
              (i.dbReadyPromise = new Be(function (e) {
                i.dbReadyResolve = e;
              })),
                (i.openCanceller = new Be(function (e, n) {
                  i.cancelOpen = n;
                })),
                (this._state = i),
                (this.name = n),
                (this.on = Tn(this, 'populate', 'blocked', 'versionchange', {
                  ready: [ge, Ne]
                })),
                (this.on.ready.subscribe = G(
                  this.on.ready.subscribe,
                  function (n) {
                    return function (r, a) {
                      e.vip(function () {
                        var e = t._state;
                        if (e.openComplete)
                          e.dbOpenError || Be.resolve().then(r), a && n(r);
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
                  ((u = this),
                  Ln(Wn.prototype, function (e, n) {
                    this.db = u;
                    var r = jn,
                      t = null;
                    if (n)
                      try {
                        r = n();
                      } catch (i) {
                        t = i;
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
                      valueMapper: o !== le ? o : null
                    };
                  }))),
                (this.Table = (function (e) {
                  return Ln(Dn.prototype, function (n, r, t) {
                    (this.db = e),
                      (this._tx = t),
                      (this.name = n),
                      (this.schema = r),
                      (this.hook = e._allTables[n]
                        ? e._allTables[n].hook
                        : Tn(null, {
                            creating: [de, Ne],
                            reading: [pe, le],
                            updating: [fe, Ne],
                            deleting: [he, Ne]
                          }));
                  });
                })(this)),
                (this.Transaction = (function (e) {
                  return Ln(ur.prototype, function (n, r, t, a) {
                    var m = this;
                    (this.db = e),
                      (this.mode = n),
                      (this.storeNames = r),
                      (this.schema = t),
                      (this.idbtrans = null),
                      (this.on = Tn(this, 'complete', 'error', 'abort')),
                      (this.parent = a || null),
                      (this.active = !0),
                      (this._reculock = 0),
                      (this._blockedFuncs = []),
                      (this._resolve = null),
                      (this._reject = null),
                      (this._waitingFor = null),
                      (this._waitingQueue = null),
                      (this._spinCount = 0),
                      (this._completion = new Be(function (e, n) {
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
                            Gn(e)
                          );
                        }
                      );
                  });
                })(this)),
                (this.Version = (function (e) {
                  return Ln(_r.prototype, function (n) {
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
                  return Ln(rr.prototype, function (n, r, t) {
                    (this.db = e),
                      (this._ctx = {
                        table: n,
                        index: ':id' === r ? null : r,
                        or: t
                      });
                    var a = e._deps.indexedDB;
                    if (!a) throw new ye.MissingAPI('indexedDB API missing');
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
                (this._maxKey = ar(r.IDBKeyRange)),
                (this._createTransaction = function (e, n, r, a) {
                  return new t.Transaction(e, n, r, a);
                }),
                (this._fireOnBlocked = function (e) {
                  t.on('blocked').fire(e),
                    Sn.filter(function (e) {
                      return e.name === t.name && e !== t && !e._state.vcFired;
                    }).map(function (n) {
                      return n.on('versionchange').fire(e);
                    });
                }),
                this.use(Er),
                this.use(Pr),
                o.forEach(function (e) {
                  return e(t);
                });
            }
            return (
              (e.prototype.version = function (e) {
                if (isNaN(e) || e < 0.1)
                  throw new ye.Type('Given version is not a positive number');
                if (
                  ((e = Math.round(10 * e) / 10),
                  this.idbdb || this._state.isBeingOpened)
                )
                  throw new ye.Schema(
                    'Cannot add version when database is open'
                  );
                this.verno = Math.max(this.verno, e);
                var n = this._versions,
                  r = n.filter(function (n) {
                    return n._cfg.version === e;
                  })[0];
                return (
                  r ||
                  ((r = new this.Version(e)),
                  n.push(r),
                  n.sort(gr),
                  r.stores({}),
                  (this._state.autoSchema = !1),
                  r)
                );
              }),
              (e.prototype._whenReady = function (e) {
                var n = this;
                return this._state.openComplete || Le.letThrough
                  ? e()
                  : new Be(function (e, r) {
                      if (!n._state.isBeingOpened) {
                        if (!n._options.autoOpen)
                          return void r(new ye.DatabaseClosed());
                        n.open().catch(Ne);
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
                    (this._middlewares[n] = this._middlewares[n].filter(
                      function (e) {
                        return t ? e.create !== t : !!r && e.name !== r;
                      }
                    )),
                  this
                );
              }),
              (e.prototype.open = function () {
                return (function (e) {
                  var n = e._state,
                    r = e._deps.indexedDB;
                  if (n.isBeingOpened || e.idbdb)
                    return n.dbReadyPromise.then(function () {
                      return n.dbOpenError ? Gn(n.dbOpenError) : e;
                    });
                  X && (n.openCanceller._stackHolder = $()),
                    (n.isBeingOpened = !0),
                    (n.dbOpenError = null),
                    (n.openComplete = !1);
                  var t = n.dbReadyResolve,
                    a = null;
                  return Be.race([
                    n.openCanceller,
                    new Be(function (t, m) {
                      if (!r)
                        throw new ye.MissingAPI(
                          'indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill.'
                        );
                      var o = e.name,
                        u = n.autoSchema
                          ? r.open(o)
                          : r.open(o, Math.round(10 * e.verno));
                      if (!u)
                        throw new ye.MissingAPI('IndexedDB API not available');
                      (u.onerror = mr(m)),
                        (u.onblocked = an(e._fireOnBlocked)),
                        (u.onupgradeneeded = an(function (t) {
                          if (
                            ((a = u.transaction),
                            n.autoSchema && !e._options.allowEmptyDB)
                          ) {
                            (u.onerror = or), a.abort(), u.result.close();
                            var i = r.deleteDatabase(o);
                            i.onsuccess = i.onerror = an(function () {
                              m(
                                new ye.NoSuchDatabase(
                                  'Database ' + o + ' doesnt exist'
                                )
                              );
                            });
                          } else {
                            a.onerror = mr(m);
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
                                var o = m._reject.bind(m),
                                  u = Le.transless || Le;
                                Nn(function () {
                                  (Le.trans = m),
                                    (Le.transless = u),
                                    0 === n
                                      ? (b(a).forEach(function (e) {
                                          Ir(r, e, a[e].primKey, a[e].indexes);
                                        }),
                                        hr(e, r),
                                        Be.follow(function () {
                                          return e.on.populate.fire(m);
                                        }).catch(o))
                                      : (function (e, n, r, t) {
                                          var a = [],
                                            m = e._versions,
                                            o = (e._dbSchema = Cr(
                                              0,
                                              e.idbdb,
                                              t
                                            )),
                                            u = !1;
                                          return (
                                            m
                                              .filter(function (e) {
                                                return e._cfg.version >= n;
                                              })
                                              .forEach(function (m) {
                                                a.push(function () {
                                                  var a = o,
                                                    i = m._cfg.dbschema;
                                                  Gr(e, a, t),
                                                    Gr(e, i, t),
                                                    (o = e._dbSchema = i);
                                                  var y = kr(a, i);
                                                  y.add.forEach(function (e) {
                                                    Ir(
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
                                                        throw new ye.Upgrade(
                                                          'Not yet support for changing primary key'
                                                        );
                                                      var n = t.objectStore(
                                                        e.name
                                                      );
                                                      e.add.forEach(function (
                                                        e
                                                      ) {
                                                        return xr(n, e);
                                                      }),
                                                        e.change.forEach(
                                                          function (e) {
                                                            n.deleteIndex(
                                                              e.name
                                                            ),
                                                              xr(n, e);
                                                          }
                                                        ),
                                                        e.del.forEach(function (
                                                          e
                                                        ) {
                                                          return n.deleteIndex(
                                                            e
                                                          );
                                                        });
                                                    });
                                                  var s = m._cfg.contentUpgrade;
                                                  if (s && m._cfg.version > n) {
                                                    hr(e, t),
                                                      (r._memoizedTables = {}),
                                                      (u = !0);
                                                    var N = O(i);
                                                    y.del.forEach(function (e) {
                                                      N[e] = a[e];
                                                    }),
                                                      vr(e, [
                                                        e.Transaction.prototype
                                                      ]),
                                                      fr(
                                                        e,
                                                        [
                                                          e.Transaction
                                                            .prototype
                                                        ],
                                                        b(N),
                                                        N
                                                      ),
                                                      (r.schema = N);
                                                    var l,
                                                      p = W(s);
                                                    p && ln();
                                                    var c = Be.follow(
                                                      function () {
                                                        if ((l = s(r)) && p) {
                                                          var e = pn.bind(
                                                            null,
                                                            null
                                                          );
                                                          l.then(e, e);
                                                        }
                                                      }
                                                    );
                                                    return l &&
                                                      'function' ==
                                                        typeof l.then
                                                      ? Be.resolve(l)
                                                      : c.then(function () {
                                                          return l;
                                                        });
                                                  }
                                                }),
                                                  a.push(function (n) {
                                                    (u && An) ||
                                                      (function (e, n) {
                                                        for (
                                                          var r = 0;
                                                          r <
                                                          n.db.objectStoreNames
                                                            .length;
                                                          ++r
                                                        ) {
                                                          var t =
                                                            n.db
                                                              .objectStoreNames[
                                                              r
                                                            ];
                                                          null == e[t] &&
                                                            n.db.deleteObjectStore(
                                                              t
                                                            );
                                                        }
                                                      })(m._cfg.dbschema, n),
                                                      vr(e, [
                                                        e.Transaction.prototype
                                                      ]),
                                                      fr(
                                                        e,
                                                        [
                                                          e.Transaction
                                                            .prototype
                                                        ],
                                                        e._storeNames,
                                                        e._dbSchema
                                                      ),
                                                      (r.schema = e._dbSchema);
                                                  });
                                              }),
                                            (function e() {
                                              return a.length
                                                ? Be.resolve(
                                                    a.shift()(r.idbtrans)
                                                  ).then(e)
                                                : Be.resolve();
                                            })().then(function () {
                                              var e, n;
                                              (n = t),
                                                b((e = o)).forEach(function (
                                                  r
                                                ) {
                                                  n.db.objectStoreNames.contains(
                                                    r
                                                  ) ||
                                                    Ir(
                                                      n,
                                                      r,
                                                      e[r].primKey,
                                                      e[r].indexes
                                                    );
                                                });
                                            })
                                          );
                                        })(e, n, m, r).catch(o);
                                });
                              })(e, y / 10, a, m);
                          }
                        }, m)),
                        (u.onsuccess = an(function () {
                          a = null;
                          var r = (e.idbdb = u.result),
                            m = C(r.objectStoreNames);
                          if (m.length > 0)
                            try {
                              var i = r.transaction(tr(m), 'readonly');
                              n.autoSchema
                                ? (function (e, n, r) {
                                    e.verno = n.version / 10;
                                    var t = (e._dbSchema = Cr(0, n, r));
                                    (e._storeNames = C(n.objectStoreNames, 0)),
                                      fr(e, [e._allTables], b(t), t);
                                  })(e, r, i)
                                : (Gr(e, e._dbSchema, i),
                                  (function (e, n) {
                                    var r = kr(Cr(0, e.idbdb, n), e._dbSchema);
                                    return !(
                                      r.add.length ||
                                      r.change.some(function (e) {
                                        return e.add.length || e.change.length;
                                      })
                                    );
                                  })(e, i) ||
                                    console.warn(
                                      'Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail.'
                                    )),
                                hr(e, i);
                            } catch (y) {}
                          Sn.push(e),
                            (r.onversionchange = an(function (r) {
                              (n.vcFired = !0), e.on('versionchange').fire(r);
                            })),
                            wr.add(o),
                            t();
                        }, m));
                    })
                  ])
                    .then(function () {
                      return (
                        (n.onReadyBeingFired = []),
                        Be.resolve(Vr(e.on.ready.fire)).then(function e() {
                          if (n.onReadyBeingFired.length > 0) {
                            var r = n.onReadyBeingFired.reduce(ge, Ne);
                            return (
                              (n.onReadyBeingFired = []),
                              Be.resolve(Vr(r)).then(e)
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
                        Gn(n.dbOpenError)
                      );
                    })
                    .finally(function () {
                      (n.openComplete = !0), t();
                    });
                })(this);
              }),
              (e.prototype.close = function () {
                var e = Sn.indexOf(this),
                  n = this._state;
                if ((e >= 0 && Sn.splice(e, 1), this.idbdb)) {
                  try {
                    this.idbdb.close();
                  } catch (r) {}
                  this.idbdb = null;
                }
                (this._options.autoOpen = !1),
                  (n.dbOpenError = new ye.DatabaseClosed()),
                  n.isBeingOpened && n.cancelOpen(n.dbOpenError),
                  (n.dbReadyPromise = new Be(function (e) {
                    n.dbReadyResolve = e;
                  })),
                  (n.openCanceller = new Be(function (e, r) {
                    n.cancelOpen = r;
                  }));
              }),
              (e.prototype.delete = function () {
                var e = this,
                  n = arguments.length > 0,
                  r = this._state;
                return new Be(function (t, a) {
                  var m = function () {
                    e.close();
                    var n = e._deps.indexedDB.deleteDatabase(e.name);
                    (n.onsuccess = an(function () {
                      wr.remove(e.name), t();
                    })),
                      (n.onerror = mr(a)),
                      (n.onblocked = e._fireOnBlocked);
                  };
                  if (n)
                    throw new ye.InvalidArgument(
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
                  return b(this._allTables).map(function (n) {
                    return e._allTables[n];
                  });
                },
                enumerable: !0,
                configurable: !0
              }),
              (e.prototype.transaction = function () {
                var e = Rr.apply(this, arguments);
                return this._transaction.apply(this, e);
              }),
              (e.prototype._transaction = function (e, n, r) {
                var t = this,
                  a = Le.trans;
                (a && a.db === this && -1 === e.indexOf('!')) || (a = null);
                var m,
                  o,
                  u = -1 !== e.indexOf('?');
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
                      throw new ye.InvalidArgument(
                        'Invalid transaction mode: ' + e
                      );
                    m = 'readwrite';
                  }
                  if (a) {
                    if ('readonly' === a.mode && 'readwrite' === m) {
                      if (!u)
                        throw new ye.SubTransaction(
                          'Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY'
                        );
                      a = null;
                    }
                    a &&
                      o.forEach(function (e) {
                        if (a && -1 === a.storeNames.indexOf(e)) {
                          if (!u)
                            throw new ye.SubTransaction(
                              'Table ' +
                                e +
                                ' not included in parent transaction.'
                            );
                          a = null;
                        }
                      }),
                      u && a && !a.active && (a = null);
                  }
                } catch (y) {
                  return a
                    ? a._promise(null, function (e, n) {
                        n(y);
                      })
                    : Gn(y);
                }
                var i = Ar.bind(null, this, m, o, a, r);
                return a
                  ? a._promise(m, i, 'lock')
                  : Le.trans
                  ? gn(Le.transless, function () {
                      return t._whenReady(i);
                    })
                  : this._whenReady(i);
              }),
              (e.prototype.table = function (e) {
                if (!d(this._allTables, e))
                  throw new ye.InvalidTable('Table ' + e + ' does not exist');
                return this._allTables[e];
              }),
              e
            );
          })(),
          Fr = jr;
        h(
          Fr,
          m(m({}, se), {
            delete: function (e) {
              return new Fr(e).delete();
            },
            exists: function (e) {
              return new Fr(e, { addons: [] })
                .open()
                .then(function (e) {
                  return e.close(), !0;
                })
                .catch('NoSuchDatabaseError', function () {
                  return !1;
                });
            },
            getDatabaseNames: function (e) {
              return wr ? wr.getDatabaseNames().then(e) : Be.resolve([]);
            },
            defineClass: function () {
              return function (e) {
                l(this, e);
              };
            },
            ignoreTransaction: function (e) {
              return Le.trans ? gn(Le.transless, e) : e();
            },
            vip: Vr,
            async: function (e) {
              return function () {
                try {
                  var n = Sr(e.apply(this, arguments));
                  return n && 'function' == typeof n.then ? n : Be.resolve(n);
                } catch (r) {
                  return Gn(r);
                }
              };
            },
            spawn: function (e, n, r) {
              try {
                var t = Sr(e.apply(r, n || []));
                return t && 'function' == typeof t.then ? t : Be.resolve(t);
              } catch (a) {
                return Gn(a);
              }
            },
            currentTransaction: {
              get: function () {
                return Le.trans || null;
              }
            },
            waitFor: function (e, n) {
              var r = Be.resolve(
                'function' == typeof e ? Fr.ignoreTransaction(e) : e
              ).timeout(n || 6e4);
              return Le.trans ? Le.trans.waitFor(r) : r;
            },
            Promise: Be,
            debug: {
              get: function () {
                return X;
              },
              set: function (e) {
                Y(
                  e,
                  'dexie' === e
                    ? function () {
                        return !0;
                      }
                    : En
                );
              }
            },
            derive: g,
            extend: l,
            props: h,
            override: G,
            Events: Tn,
            getByKeyPath: S,
            setByKeyPath: R,
            delByKeyPath: A,
            shallowClone: O,
            deepClone: T,
            getObjectDiff: M,
            asap: _,
            minKey: -1 / 0,
            addons: [],
            connections: Sn,
            errnames: ue,
            dependencies: (function () {
              try {
                return {
                  indexedDB:
                    N.indexedDB ||
                    N.mozIndexedDB ||
                    N.webkitIndexedDB ||
                    N.msIndexedDB,
                  IDBKeyRange: N.IDBKeyRange || N.webkitIDBKeyRange
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
            default: Fr,
            Dexie: Fr
          })
        ),
          (Fr.maxKey = ar(Fr.dependencies.IDBKeyRange)),
          (function (e) {
            try {
              wr = (function (e) {
                var n,
                  r = e && 'function' == typeof e.databases;
                if (!r) {
                  var t = new jr('__dbnames', { addons: [] });
                  t.version(1).stores({ dbnames: 'name' }),
                    (n = t.table('dbnames'));
                }
                return {
                  getDatabaseNames: function () {
                    return r
                      ? Be.resolve(e.databases()).then(function (e) {
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
                      !r && '__dbnames' !== e && n.put({ name: e }).catch(Ne)
                    );
                  },
                  remove: function (e) {
                    return !r && '__dbnames' !== e && n.delete(e).catch(Ne);
                  }
                };
              })(e);
            } catch (n) {}
          })(jr.dependencies.indexedDB),
          (Be.rejectionMapper = function (e, n) {
            if (
              !e ||
              e instanceof te ||
              e instanceof TypeError ||
              e instanceof SyntaxError ||
              !e.name ||
              !be[e.name]
            )
              return e;
            var r = new be[e.name](n || e.message, e);
            return (
              'stack' in e &&
                v(r, 'stack', {
                  get: function () {
                    return this.inner.stack;
                  }
                }),
              r
            );
          }),
          Y(X, En);
        var Dr,
          Tr = jr,
          Lr = r('AfiK'),
          zr = r('fXoL'),
          Kr =
            (((Dr = (function (e) {
              u(r, e);
              var n = y(r);
              function r() {
                var e;
                return (
                  a(this, r),
                  (e = n.call(this, 'PokemonDatabase'))
                    .version(1)
                    .stores({
                      filters: '++id, filter, enabled, value',
                      pokemon: '++id, name, generation',
                      routes: '++id, location, type, game',
                      nuzlockes: '++id, runName, game, random, status'
                    }),
                  e
                    .version(2)
                    .stores({
                      filters: '++id, filter, enabled, value',
                      pokemon: '++id, name, generation, evolutionChain',
                      routes: '++id, location, type, game',
                      nuzlockes: '++id, runName, game, random, status'
                    }),
                  e
                );
              }
              return (
                o(r, [
                  {
                    key: 'getFilter',
                    value: function (e) {
                      return Object(t.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          var r;
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), this.filters.get(e);
                                  case 2:
                                    return (
                                      (r = n.sent),
                                      n.abrupt('return', null != r ? r : Lr.b)
                                    );
                                  case 4:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'countRoutesInGame',
                    value: function (e) {
                      return this.routes.where({ game: e }).count();
                    }
                  }
                ]),
                r
              );
            })(Tr)).ɵfac = function (e) {
              return new (e || Dr)();
            }),
            (Dr.ɵprov = zr.Gb({
              token: Dr,
              factory: Dr.ɵfac,
              providedIn: 'root'
            })),
            Dr);
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
          })({}),
          m = Object(t.a)(a),
          o = Object(t.b)(a).filter(function (e) {
            return 'Unknown' !== e;
          });
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
          })({}),
          a = { filter: t.Coverage, value: '', id: -1 };
      },
      GJmQ: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return m;
        });
        var t = r('7o/Q');
        function m(e) {
          var n =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return function (r) {
            return r.lift(new i(e, n));
          };
        }
        var i = (function () {
            function e(n, r) {
              a(this, e), (this.predicate = n), (this.inclusive = r);
            }
            return (
              o(e, [
                {
                  key: 'call',
                  value: function (e, n) {
                    return n.subscribe(
                      new b(e, this.predicate, this.inclusive)
                    );
                  }
                }
              ]),
              e
            );
          })(),
          b = (function (e) {
            u(r, e);
            var n = y(r);
            function r(e, t, m) {
              var o;
              return (
                a(this, r),
                ((o = n.call(this, e)).predicate = t),
                (o.inclusive = m),
                (o.index = 0),
                o
              );
            }
            return (
              o(r, [
                {
                  key: '_next',
                  value: function (e) {
                    var n,
                      r = this.destination;
                    try {
                      n = this.predicate(e, this.index++);
                    } catch (t) {
                      return void r.error(t);
                    }
                    this.nextOrComplete(e, n);
                  }
                },
                {
                  key: 'nextOrComplete',
                  value: function (e, n) {
                    var r = this.destination;
                    Boolean(n)
                      ? r.next(e)
                      : (this.inclusive && r.next(e), r.complete());
                  }
                }
              ]),
              r
            );
          })(t.a);
      },
      HCsY: function (e, r, t) {
        'use strict';
        t.d(r, 'a', function () {
          return C;
        });
        var m,
          u,
          i,
          y,
          b = t('mrSG'),
          s = t('NptF'),
          N = t('XNiG'),
          l = t('2Vo4'),
          p = t('fXoL'),
          c = t('jeMW'),
          d = t('xBi6'),
          h = t('req1'),
          f = t('9PoT'),
          v = t('AfiK'),
          g = t('zsLg'),
          k =
            (((y = (function () {
              function e() {
                a(this, e), (this.typeEffectivenessMap = this.addAll());
              }
              return (
                o(e, [
                  {
                    key: 'addNormal',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [f.a.Rock, f.a.Steel]),
                        this.addNot(f.a.Ghost, n),
                        this.addRest(n),
                        e.set(f.a.Normal, n);
                    }
                  },
                  {
                    key: 'addFire',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [
                        f.a.Fire,
                        f.a.Water,
                        f.a.Rock,
                        f.a.Dragon
                      ]),
                        this.addDouble(n, [
                          f.a.Grass,
                          f.a.Ice,
                          f.a.Bug,
                          f.a.Steel
                        ]),
                        this.addRest(n),
                        e.set(f.a.Fire, n);
                    }
                  },
                  {
                    key: 'addWater',
                    value: function (e) {
                      var n = new Map();
                      this.addDouble(n, [f.a.Fire, f.a.Ground, f.a.Rock]),
                        this.addHalf(n, [f.a.Water, f.a.Grass, f.a.Dragon]),
                        this.addRest(n),
                        e.set(f.a.Water, n);
                    }
                  },
                  {
                    key: 'addElectric',
                    value: function (e) {
                      var n = new Map();
                      this.addDouble(n, [f.a.Water, f.a.Flying]),
                        this.addHalf(n, [f.a.Electric, f.a.Grass, f.a.Dragon]),
                        this.addNot(f.a.Ground, n),
                        this.addRest(n),
                        e.set(f.a.Electric, n);
                    }
                  },
                  {
                    key: 'addGrass',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [
                        f.a.Fire,
                        f.a.Grass,
                        f.a.Poison,
                        f.a.Flying,
                        f.a.Bug,
                        f.a.Dragon,
                        f.a.Steel
                      ]),
                        this.addDouble(n, [f.a.Water, f.a.Ground, f.a.Rock]),
                        this.addRest(n),
                        e.set(f.a.Grass, n);
                    }
                  },
                  {
                    key: 'addIce',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [
                        f.a.Fire,
                        f.a.Water,
                        f.a.Ice,
                        f.a.Steel
                      ]),
                        this.addDouble(n, [
                          f.a.Grass,
                          f.a.Ground,
                          f.a.Flying,
                          f.a.Dragon
                        ]),
                        this.addRest(n),
                        e.set(f.a.Ice, n);
                    }
                  },
                  {
                    key: 'addFighting',
                    value: function (e) {
                      var n = new Map();
                      this.addDouble(n, [
                        f.a.Normal,
                        f.a.Ice,
                        f.a.Rock,
                        f.a.Dark,
                        f.a.Steel
                      ]),
                        this.addHalf(n, [
                          f.a.Poison,
                          f.a.Flying,
                          f.a.Psychic,
                          f.a.Bug,
                          f.a.Fairy
                        ]),
                        this.addNot(f.a.Ghost, n),
                        this.addRest(n),
                        e.set(f.a.Fighting, n);
                    }
                  },
                  {
                    key: 'addPoison',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [
                        f.a.Poison,
                        f.a.Ground,
                        f.a.Rock,
                        f.a.Ghost
                      ]),
                        this.addDouble(n, [f.a.Grass, f.a.Fairy]),
                        this.addNot(f.a.Steel, n),
                        this.addRest(n),
                        e.set(f.a.Poison, n);
                    }
                  },
                  {
                    key: 'addGround',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [f.a.Grass, f.a.Bug]),
                        this.addDouble(n, [
                          f.a.Fire,
                          f.a.Electric,
                          f.a.Poison,
                          f.a.Rock,
                          f.a.Steel
                        ]),
                        this.addNot(f.a.Flying, n),
                        this.addRest(n),
                        e.set(f.a.Ground, n);
                    }
                  },
                  {
                    key: 'addFlying',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [f.a.Electric, f.a.Rock, f.a.Steel]),
                        this.addDouble(n, [f.a.Grass, f.a.Fighting, f.a.Bug]),
                        this.addRest(n),
                        e.set(f.a.Flying, n);
                    }
                  },
                  {
                    key: 'addPsychic',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [f.a.Psychic, f.a.Steel]),
                        this.addDouble(n, [f.a.Fighting, f.a.Poison]),
                        this.addNot(f.a.Dark, n),
                        this.addRest(n),
                        e.set(f.a.Psychic, n);
                    }
                  },
                  {
                    key: 'addBug',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [
                        f.a.Fire,
                        f.a.Fighting,
                        f.a.Poison,
                        f.a.Flying,
                        f.a.Ghost,
                        f.a.Steel,
                        f.a.Fairy
                      ]),
                        this.addDouble(n, [f.a.Grass, f.a.Psychic, f.a.Dark]),
                        this.addRest(n),
                        e.set(f.a.Bug, n);
                    }
                  },
                  {
                    key: 'addRock',
                    value: function (e) {
                      var n = new Map();
                      this.addDouble(n, [
                        f.a.Fire,
                        f.a.Ice,
                        f.a.Flying,
                        f.a.Bug
                      ]),
                        this.addHalf(n, [f.a.Fighting, f.a.Ground, f.a.Steel]),
                        this.addRest(n),
                        e.set(f.a.Rock, n);
                    }
                  },
                  {
                    key: 'addGhost',
                    value: function (e) {
                      var n = new Map();
                      this.addNot(f.a.Normal, n),
                        this.addHalf(n, [f.a.Dark]),
                        this.addDouble(n, [f.a.Ghost, f.a.Psychic]),
                        this.addRest(n),
                        e.set(f.a.Ghost, n);
                    }
                  },
                  {
                    key: 'addDragon',
                    value: function (e) {
                      var n = new Map();
                      this.addDouble(n, [f.a.Dragon]),
                        this.addHalf(n, [f.a.Steel]),
                        this.addNot(f.a.Fairy, n),
                        this.addRest(n),
                        e.set(f.a.Dragon, n);
                    }
                  },
                  {
                    key: 'addDark',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [f.a.Fighting, f.a.Dragon, f.a.Fairy]),
                        this.addDouble(n, [f.a.Psychic, f.a.Ghost]),
                        this.addRest(n),
                        e.set(f.a.Dark, n);
                    }
                  },
                  {
                    key: 'addSteel',
                    value: function (e) {
                      var n = new Map();
                      this.addHalf(n, [
                        f.a.Fire,
                        f.a.Water,
                        f.a.Electric,
                        f.a.Steel
                      ]),
                        this.addDouble(n, [f.a.Ice, f.a.Fairy]),
                        this.addRest(n),
                        e.set(f.a.Steel, n);
                    }
                  },
                  {
                    key: 'addFairy',
                    value: function (e) {
                      var n = new Map();
                      this.addDouble(n, [f.a.Fighting, f.a.Dragon, f.a.Dark]),
                        this.addHalf(n, [f.a.Fire, f.a.Poison, f.a.Steel]),
                        this.addRest(n),
                        e.set(f.a.Fairy, n);
                    }
                  },
                  {
                    key: 'addAll',
                    value: function () {
                      var e = new Map();
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
                  },
                  {
                    key: 'addHalf',
                    value: function (e, r) {
                      var t,
                        a = n(r);
                      try {
                        for (a.s(); !(t = a.n()).done; ) {
                          var m = t.value;
                          e.set(m, 0.5);
                        }
                      } catch (o) {
                        a.e(o);
                      } finally {
                        a.f();
                      }
                    }
                  },
                  {
                    key: 'addDouble',
                    value: function (e, r) {
                      var t,
                        a = n(r);
                      try {
                        for (a.s(); !(t = a.n()).done; ) {
                          var m = t.value;
                          e.set(m, 2);
                        }
                      } catch (o) {
                        a.e(o);
                      } finally {
                        a.f();
                      }
                    }
                  },
                  {
                    key: 'addNot',
                    value: function (e, n) {
                      n.set(e, 0);
                    }
                  },
                  {
                    key: 'addRest',
                    value: function (e) {
                      var r,
                        t = Array.from(e.keys()),
                        a = n(
                          f.c.filter(function (e) {
                            return !t.includes(e);
                          })
                        );
                      try {
                        for (a.s(); !(r = a.n()).done; ) {
                          var m = r.value;
                          e.set(m, 1);
                        }
                      } catch (o) {
                        a.e(o);
                      } finally {
                        a.f();
                      }
                    }
                  },
                  {
                    key: 'isCovered',
                    value: function (e, r) {
                      var t, a, m;
                      if (1 === r.length) {
                        var o,
                          u = n(e);
                        try {
                          for (u.s(); !(o = u.n()).done; ) {
                            var i = o.value;
                            if (
                              2 ===
                              (null ===
                                (t = this.typeEffectivenessMap.get(i)) ||
                              void 0 === t
                                ? void 0
                                : t.get(r[0]))
                            )
                              return !0;
                          }
                        } catch (l) {
                          u.e(l);
                        } finally {
                          u.f();
                        }
                        return !1;
                      }
                      var y,
                        b = n(e);
                      try {
                        for (b.s(); !(y = b.n()).done; ) {
                          var s = y.value,
                            N = this.typeEffectivenessMap.get(s);
                          if (
                            (null !== (a = null == N ? void 0 : N.get(r[0])) &&
                            void 0 !== a
                              ? a
                              : 1) *
                              (null !==
                                (m = null == N ? void 0 : N.get(r[1])) &&
                              void 0 !== m
                                ? m
                                : 1) >
                            1
                          )
                            return !0;
                        }
                      } catch (l) {
                        b.e(l);
                      } finally {
                        b.f();
                      }
                      return !1;
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || y)();
            }),
            (y.ɵprov = p.Gb({ token: y, factory: y.ɵfac, providedIn: 'root' })),
            y),
          I =
            (((i = (function () {
              function e() {
                a(this, e);
              }
              return (
                o(e, [
                  {
                    key: 'removeHide',
                    value: function (e) {
                      return e.replace(/(hide|Hide)/, '').trim();
                    }
                  },
                  {
                    key: 'removeForms',
                    value: function (e) {
                      return e.replace(/(forms|Forms)/, '').trim();
                    }
                  },
                  {
                    key: 'trimRegionName',
                    value: function (e) {
                      return this.removeHide(this.removeForms(e))
                        .replace(/(mega|Mega)s/, '$1')
                        .replace(/(alola|Alola)n/, '$1')
                        .replace(/(galar|Galar)ian/, '$1')
                        .trim();
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || i)();
            }),
            (i.ɵprov = p.Gb({ token: i, factory: i.ɵfac, providedIn: 'root' })),
            i),
          x =
            (((u = (function () {
              function e(n, r, t, m) {
                a(this, e),
                  (this.pokemonImageService = n),
                  (this.coverageService = r),
                  (this.filterNameService = t),
                  (this.filterService = m),
                  (this.pokemon = []),
                  (this.filteredPokemon = []),
                  (this.alive = !1);
              }
              return (
                o(e, [
                  {
                    key: 'callFilters',
                    value: function (e, n, r) {
                      return (
                        (e = this.updateFilters(r, e)),
                        (this.filteredPokemon = this.pokemon.filter(function (
                          e
                        ) {
                          return n.every(function (n) {
                            return !n.equals(e);
                          });
                        })),
                        this.filterSearch(e),
                        this.filterTypes(e),
                        this.filterRegions(e),
                        this.filterGenerations(e),
                        this.filterExtras(e),
                        this.filterCoverage(e),
                        this.filteredPokemon
                      );
                    }
                  },
                  {
                    key: 'setPokemon',
                    value: function (e) {
                      (this.pokemon = e), (this.alive = !0);
                    }
                  },
                  {
                    key: 'updateFilters',
                    value: function (e, n) {
                      return (
                        e && this.filterService.addSearchFilter(''),
                        n.filter(function (n) {
                          return e
                            ? n.filter !== v.a.Search && n.enabled
                            : n.enabled;
                        })
                      );
                    }
                  },
                  {
                    key: 'getTypes',
                    value: function (e) {
                      var r,
                        t = [],
                        a = n(
                          e.map(function (e) {
                            return e.types;
                          })
                        );
                      try {
                        for (a.s(); !(r = a.n()).done; ) {
                          var m,
                            o = n(r.value);
                          try {
                            for (o.s(); !(m = o.n()).done; ) {
                              var u = m.value;
                              t.push(u);
                            }
                          } catch (i) {
                            o.e(i);
                          } finally {
                            o.f();
                          }
                        }
                      } catch (i) {
                        a.e(i);
                      } finally {
                        a.f();
                      }
                      return t;
                    }
                  },
                  {
                    key: 'filterSearch',
                    value: function (e) {
                      var n = this,
                        r = e.filter(function (e) {
                          return e.filter === v.a.Search;
                        });
                      r.length &&
                        (this.filteredPokemon = this.filteredPokemon.filter(
                          function (e) {
                            return r.some(function (r) {
                              var t = r.value;
                              return n.pokemonImageService
                                .characterReplace(e.name)
                                .toLowerCase()
                                .includes(t.trim().toLowerCase());
                            });
                          }
                        ));
                    }
                  },
                  {
                    key: 'filterRegions',
                    value: function (e) {
                      var n = e.filter(function (e) {
                        return e.filter === v.a.Regions;
                      });
                      if (n.length) {
                        var r = n.map(function (e) {
                          return Object(h.b)(e.value);
                        });
                        (this.filteredPokemon = this.filteredPokemon.filter(
                          function (e) {
                            return e.pokedexNumbers.some(function (e) {
                              var n = e.name;
                              return r.includes(n);
                            });
                          }
                        )),
                          this.sortFilterByRegions(r);
                      }
                    }
                  },
                  {
                    key: 'filterTypes',
                    value: function (e) {
                      var n = e.filter(function (e) {
                        return e.filter === v.a.Types;
                      });
                      if (n.length) {
                        var r = n.map(function (e) {
                          return f.a[e.value];
                        });
                        this.filteredPokemon = this.filteredPokemon.filter(
                          function (e) {
                            return r.some(function (n) {
                              return e.types.includes(n);
                            });
                          }
                        );
                      }
                    }
                  },
                  {
                    key: 'filterGenerations',
                    value: function (e) {
                      var n = e.filter(function (e) {
                        return e.filter === v.a.Generations;
                      });
                      n.length &&
                        this.filterByGeneration(
                          n.map(function (e) {
                            return e.value;
                          })
                        );
                    }
                  },
                  {
                    key: 'filterExtras',
                    value: function (e) {
                      var n = this,
                        r = e.filter(function (e) {
                          return e.filter === v.a.Extras;
                        });
                      r.length &&
                        (this.filteredPokemon = this.filteredPokemon.filter(
                          function (e) {
                            var t = e.name;
                            return r
                              .map(function (e) {
                                return n.filterNameService.trimRegionName(
                                  e.value
                                );
                              })
                              .every(function (e) {
                                return !t.includes(e.toLowerCase());
                              });
                          }
                        ));
                    }
                  },
                  {
                    key: 'filterCoverage',
                    value: function (e) {
                      var n = this,
                        r = e.find(function (e) {
                          return e.filter === v.a.Coverage;
                        });
                      if (r) {
                        var t = JSON.parse(r.value).filter(function (e) {
                            return 'Empty Team Member' !== e.name;
                          }),
                          a = Array.from(new Set(this.getTypes(t)));
                        this.filteredPokemon = this.filteredPokemon.filter(
                          function (e) {
                            var r = e.types;
                            return !n.coverageService.isCovered(a, r);
                          }
                        );
                      }
                    }
                  },
                  {
                    key: 'sortFilterByRegions',
                    value: function (e) {
                      var n = this;
                      this.filteredPokemon = this.filteredPokemon.sort(
                        function (r, t) {
                          if (e.length > 1) {
                            var a = r.getNationalPokedex(),
                              m = t.getNationalPokedex();
                            return n.compareNumbers(a, m);
                          }
                          var o = r.pokedexNumbers.find(function (n) {
                              var r = n.name;
                              return e.includes(r);
                            }),
                            u = t.pokedexNumbers.find(function (n) {
                              var r = n.name;
                              return e.includes(r);
                            });
                          return n.compareNumbers(o, u);
                        }
                      );
                    }
                  },
                  {
                    key: 'compareNumbers',
                    value: function (e, n) {
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
                  },
                  {
                    key: 'filterByGeneration',
                    value: function (e) {
                      this.filteredPokemon = this.filteredPokemon.filter(
                        function (n) {
                          var r = n.generation;
                          return e.some(function (e) {
                            return r === e;
                          });
                        }
                      );
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || u)(p.Ub(g.a), p.Ub(k), p.Ub(I), p.Ub(c.a));
            }),
            (u.ɵprov = p.Gb({ token: u, factory: u.ɵfac, providedIn: 'root' })),
            u),
          C =
            (((m = (function () {
              function e(n, r, t) {
                a(this, e),
                  (this.filterService = n),
                  (this.pokemonService = r),
                  (this.pokemonFilterService = t),
                  (this.team = this.loadTeam()),
                  (this.pokemon = []),
                  (this.pokemonChange = new N.a()),
                  (this.teamChange = new l.a(this.loadTeam()));
              }
              return (
                o(e, [
                  {
                    key: 'fetchPokemon',
                    value: function () {
                      return Object(b.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          var n;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.pokemonService.createDatabase()
                                    );
                                  case 2:
                                    return (
                                      (e.next = 4),
                                      this.pokemonService.getPokemon()
                                    );
                                  case 4:
                                    (n = e.sent),
                                      this.pokemonFilterService.setPokemon(n);
                                  case 6:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'fetchFilters',
                    value: function () {
                      return Object(b.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), this.fetchPokemon();
                                  case 2:
                                    return (e.next = 4), this.sendTeamChange();
                                  case 4:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'loadTeam',
                    value: function () {
                      var e = JSON.parse(localStorage.getItem('team') || '[]');
                      return (
                        (this.team = e.map(function (e) {
                          return new s.a(e);
                        })),
                        this.team
                      );
                    }
                  },
                  {
                    key: 'updateTeam',
                    value: function () {
                      var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      this.teamChange.next(this.team),
                        this.filterService.checkingCoverage &&
                          this.filterService.checkCoverage(this.team),
                        this.setLocalStorage(),
                        this.sendTeamChange(e);
                    }
                  },
                  {
                    key: 'sendTeamChange',
                    value: function () {
                      var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                      return Object(b.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          var r;
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    if (!this.pokemonFilterService.alive) {
                                      n.next = 5;
                                      break;
                                    }
                                    return (
                                      (n.next = 3),
                                      this.filterService.getFilters()
                                    );
                                  case 3:
                                    (r = n.sent),
                                      this.pokemonChange.next(
                                        this.pokemonFilterService.callFilters(
                                          r,
                                          this.team,
                                          e
                                        )
                                      );
                                  case 5:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'addToTeam',
                    value: function (e) {
                      var n =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                      this.team.length < 6 &&
                        e &&
                        (this.team.unshift(),
                        this.team.push(e),
                        n && this.updateTeam(!0));
                    }
                  },
                  {
                    key: 'setLocalStorage',
                    value: function () {
                      localStorage.setItem('team', JSON.stringify(this.team));
                    }
                  },
                  {
                    key: 'exportToTeamBuilder',
                    value: function (e) {
                      return Object(b.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function r() {
                          var t,
                            a,
                            m,
                            o,
                            u = this;
                          return regeneratorRuntime.wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      (this.team = []),
                                      (r.next = 3),
                                      this.pokemonService.createDatabase()
                                    );
                                  case 3:
                                    return (
                                      (r.next = 5),
                                      this.pokemonService.getPokemon()
                                    );
                                  case 5:
                                    (t = r.sent), (a = n(e));
                                    try {
                                      for (
                                        o = function () {
                                          var e = m.value,
                                            n = t.find(function (n) {
                                              return (
                                                n.name.toLowerCase() ===
                                                e.toLowerCase()
                                              );
                                            });
                                          u.addToTeam(n, !1);
                                        },
                                          a.s();
                                        !(m = a.n()).done;

                                      )
                                        o();
                                    } catch (i) {
                                      a.e(i);
                                    } finally {
                                      a.f();
                                    }
                                    this.setLocalStorage();
                                  case 9:
                                  case 'end':
                                    return r.stop();
                                }
                            },
                            r,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'removeFromTeam',
                    value: function (e) {
                      this.team.length > 0 &&
                        ((this.team = this.team.filter(function (n) {
                          var r = n.name;
                          return e.name !== r;
                        })),
                        this.updateTeam());
                    }
                  },
                  {
                    key: 'requestUpdate',
                    value: function () {
                      this.loadTeam(), this.teamChange.next(this.team);
                    }
                  },
                  {
                    key: 'teamChange$',
                    get: function () {
                      return this.teamChange.asObservable();
                    }
                  },
                  {
                    key: 'pokemonChange$',
                    get: function () {
                      return this.pokemonChange.asObservable();
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || m)(p.Ub(c.a), p.Ub(d.a), p.Ub(x));
            }),
            (m.ɵprov = p.Gb({ token: m, factory: m.ɵfac, providedIn: 'root' })),
            m);
      },
      HN8I: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return u;
        });
        var t = r('fXoL'),
          m = r('ioxi'),
          u = (function () {
            var e = (function () {
              function e(n) {
                a(this, e),
                  (this.titleCaseService = n),
                  (this.isMegaRegex = /(\s|\-)(M|m)ega/),
                  (this.isAlolaRegex = /-?(A|a)lola(n)?/),
                  (this.isGalarRegex = /-?(G|g)alar(ian)?/),
                  (this.megaReplaceRegex = /-?(m|M)ega-?(\w+)?/),
                  (this.formRegex = /(\w{3,})-(\w{2,})(-\w{2,})?/);
              }
              return (
                o(e, [
                  {
                    key: 'transform',
                    value: function (e) {
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
                        : this.titleCaseService.titlecase(
                            e.replace(':-', ': ')
                          );
                    }
                  },
                  {
                    key: 'formatForm',
                    value: function (e) {
                      return e.replace(this.formRegex, '$2$3 $1');
                    }
                  },
                  {
                    key: 'isFormed',
                    value: function (e) {
                      return this.matchesRegex(e, this.formRegex);
                    }
                  },
                  {
                    key: 'isMega',
                    value: function (e) {
                      return this.matchesRegex(e, this.isMegaRegex);
                    }
                  },
                  {
                    key: 'matchesRegex',
                    value: function (e, n) {
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
                  },
                  {
                    key: 'isGalar',
                    value: function (e) {
                      return this.matchesRegex(e, this.isGalarRegex);
                    }
                  },
                  {
                    key: 'isAlola',
                    value: function (e) {
                      return this.matchesRegex(e, this.isAlolaRegex);
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(t.Ub(m.a));
              }),
              (e.ɵprov = t.Gb({
                token: e,
                factory: e.ɵfac,
                providedIn: 'root'
              })),
              e
            );
          })();
      },
      NptF: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return i;
        });
        var t = r('req1'),
          m = r('9PoT'),
          i = (function (e) {
            u(r, e);
            var n = y(r);
            function r(e) {
              var t;
              if ((a(this, r), e)) {
                var o = (t = n.call(this, e)).types.map(function (e) {
                  return m.a[e].toLowerCase();
                });
                t.cssClasses =
                  1 === t.types.length
                    ? 'circle ' + o[0]
                    : 'circle '
                        .concat(o[0], '-primary ')
                        .concat(o[1], '-secondary');
              } else
                ((t = n.call(this)).name = 'Empty Team Member'),
                  (t.types = [m.a.Unknown, m.a.Unknown]),
                  (t.cssClasses = 'empty-team-member');
              return b(t);
            }
            return (
              o(r, [
                {
                  key: 'equals',
                  value: function (e) {
                    return this.name === e.name;
                  }
                }
              ]),
              r
            );
          })(
            (function () {
              function e(n) {
                a(this, e),
                  n
                    ? ((this.name = n.name),
                      (this.pokedexNumbers = n.pokedexNumbers),
                      (this.types = n.types),
                      (this.generation = n.generation),
                      (this.evolutionChain = n.evolutionChain))
                    : ((this.name = ''),
                      (this.pokedexNumbers = []),
                      (this.evolutionChain = -1),
                      (this.types = []),
                      (this.generation = ''));
              }
              return (
                o(e, [
                  {
                    key: 'getNationalPokedex',
                    value: function () {
                      return this.pokedexNumbers.find(function (e) {
                        return e.name === t.a.National;
                      });
                    }
                  }
                ]),
                e
              );
            })()
          );
      },
      Xa2L: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return I;
        }),
          r.d(n, 'b', function () {
            return k;
          });
        var t = r('fXoL'),
          m = r('ofXK'),
          i = r('FKr1'),
          b = r('8LU1'),
          s = r('nLfN'),
          N = r('R1ws');
        function l(e, n) {
          if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
            var r = t.bc();
            t.wc(
              'animation-name',
              'mat-progress-spinner-stroke-rotate-' + r._spinnerAnimationLabel
            )('stroke-dashoffset', r._getStrokeDashOffset(), 'px')(
              'stroke-dasharray',
              r._getStrokeCircumference(),
              'px'
            )('stroke-width', r._getCircleStrokeWidth(), '%'),
              t.Ab('r', r._getCircleRadius());
          }
        }
        function p(e, n) {
          if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
            var r = t.bc();
            t.wc('stroke-dashoffset', r._getStrokeDashOffset(), 'px')(
              'stroke-dasharray',
              r._getStrokeCircumference(),
              'px'
            )('stroke-width', r._getCircleStrokeWidth(), '%'),
              t.Ab('r', r._getCircleRadius());
          }
        }
        function c(e, n) {
          if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
            var r = t.bc();
            t.wc(
              'animation-name',
              'mat-progress-spinner-stroke-rotate-' + r._spinnerAnimationLabel
            )('stroke-dashoffset', r._getStrokeDashOffset(), 'px')(
              'stroke-dasharray',
              r._getStrokeCircumference(),
              'px'
            )('stroke-width', r._getCircleStrokeWidth(), '%'),
              t.Ab('r', r._getCircleRadius());
          }
        }
        function d(e, n) {
          if ((1 & e && (t.ac(), t.Lb(0, 'circle', 3)), 2 & e)) {
            var r = t.bc();
            t.wc('stroke-dashoffset', r._getStrokeDashOffset(), 'px')(
              'stroke-dasharray',
              r._getStrokeCircumference(),
              'px'
            )('stroke-width', r._getCircleStrokeWidth(), '%'),
              t.Ab('r', r._getCircleRadius());
          }
        }
        var h =
            '.mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] svg{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n',
          f = Object(i.r)(function e(n) {
            a(this, e), (this._elementRef = n);
          }, 'primary'),
          v = new t.q('mat-progress-spinner-default-options', {
            providedIn: 'root',
            factory: function () {
              return { diameter: 100 };
            }
          }),
          g = (function () {
            var e = (function (e) {
              u(r, e);
              var n = y(r);
              function r(e, t, m, o, u) {
                var i;
                a(this, r),
                  ((i = n.call(this, e))._elementRef = e),
                  (i._document = m),
                  (i._diameter = 100),
                  (i._value = 0),
                  (i._fallbackAnimation = !1),
                  (i.mode = 'determinate');
                var y = r._diameters;
                return (
                  (i._spinnerAnimationLabel = i._getSpinnerAnimationLabel()),
                  y.has(m.head) || y.set(m.head, new Set([100])),
                  (i._fallbackAnimation = t.EDGE || t.TRIDENT),
                  (i._noopAnimations =
                    'NoopAnimations' === o && !!u && !u._forceAnimations),
                  u &&
                    (u.diameter && (i.diameter = u.diameter),
                    u.strokeWidth && (i.strokeWidth = u.strokeWidth)),
                  i
                );
              }
              return (
                o(r, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      var e = this._elementRef.nativeElement;
                      (this._styleRoot = Object(s.c)(e) || this._document.head),
                        this._attachStyleNode(),
                        e.classList.add(
                          'mat-progress-spinner-indeterminate'.concat(
                            this._fallbackAnimation ? '-fallback' : '',
                            '-animation'
                          )
                        );
                    }
                  },
                  {
                    key: '_getCircleRadius',
                    value: function () {
                      return (this.diameter - 10) / 2;
                    }
                  },
                  {
                    key: '_getViewBox',
                    value: function () {
                      var e = 2 * this._getCircleRadius() + this.strokeWidth;
                      return '0 0 '.concat(e, ' ').concat(e);
                    }
                  },
                  {
                    key: '_getStrokeCircumference',
                    value: function () {
                      return 2 * Math.PI * this._getCircleRadius();
                    }
                  },
                  {
                    key: '_getStrokeDashOffset',
                    value: function () {
                      return 'determinate' === this.mode
                        ? (this._getStrokeCircumference() *
                            (100 - this._value)) /
                            100
                        : this._fallbackAnimation &&
                          'indeterminate' === this.mode
                        ? 0.2 * this._getStrokeCircumference()
                        : null;
                    }
                  },
                  {
                    key: '_getCircleStrokeWidth',
                    value: function () {
                      return (this.strokeWidth / this.diameter) * 100;
                    }
                  },
                  {
                    key: '_attachStyleNode',
                    value: function () {
                      var e = this._styleRoot,
                        n = this._diameter,
                        t = r._diameters,
                        a = t.get(e);
                      if (!a || !a.has(n)) {
                        var m = this._document.createElement('style');
                        m.setAttribute(
                          'mat-spinner-animation',
                          this._spinnerAnimationLabel
                        ),
                          (m.textContent = this._getAnimationText()),
                          e.appendChild(m),
                          a || ((a = new Set()), t.set(e, a)),
                          a.add(n);
                      }
                    }
                  },
                  {
                    key: '_getAnimationText',
                    value: function () {
                      var e = this._getStrokeCircumference();
                      return '\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n'
                        .replace(/START_VALUE/g, '' + 0.95 * e)
                        .replace(/END_VALUE/g, '' + 0.2 * e)
                        .replace(/DIAMETER/g, '' + this._spinnerAnimationLabel);
                    }
                  },
                  {
                    key: '_getSpinnerAnimationLabel',
                    value: function () {
                      return this.diameter.toString().replace('.', '_');
                    }
                  },
                  {
                    key: 'diameter',
                    get: function () {
                      return this._diameter;
                    },
                    set: function (e) {
                      (this._diameter = Object(b.e)(e)),
                        (this._spinnerAnimationLabel = this._getSpinnerAnimationLabel()),
                        !this._fallbackAnimation &&
                          this._styleRoot &&
                          this._attachStyleNode();
                    }
                  },
                  {
                    key: 'strokeWidth',
                    get: function () {
                      return this._strokeWidth || this.diameter / 10;
                    },
                    set: function (e) {
                      this._strokeWidth = Object(b.e)(e);
                    }
                  },
                  {
                    key: 'value',
                    get: function () {
                      return 'determinate' === this.mode ? this._value : 0;
                    },
                    set: function (e) {
                      this._value = Math.max(0, Math.min(100, Object(b.e)(e)));
                    }
                  }
                ]),
                r
              );
            })(f);
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(
                  t.Kb(t.l),
                  t.Kb(s.a),
                  t.Kb(m.d, 8),
                  t.Kb(N.a, 8),
                  t.Kb(v)
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
                    )(
                      'aria-valuenow',
                      'determinate' === n.mode ? n.value : null
                    )('mode', n.mode),
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
                    t.zc(1, l, 1, 9, 'circle', 1),
                    t.zc(2, p, 1, 7, 'circle', 2),
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
                directives: [m.n, m.o],
                styles: [h],
                encapsulation: 2,
                changeDetection: 0
              })),
              (e._diameters = new WeakMap()),
              e
            );
          })(),
          k = (function () {
            var e = (function (e) {
              u(r, e);
              var n = y(r);
              function r(e, t, m, o, u) {
                var i;
                return (
                  a(this, r),
                  ((i = n.call(this, e, t, m, o, u)).mode = 'indeterminate'),
                  i
                );
              }
              return r;
            })(g);
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(
                  t.Kb(t.l),
                  t.Kb(s.a),
                  t.Kb(m.d, 8),
                  t.Kb(N.a, 8),
                  t.Kb(v)
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
                    (t.wc('width', n.diameter, 'px')(
                      'height',
                      n.diameter,
                      'px'
                    ),
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
                    t.zc(1, c, 1, 9, 'circle', 1),
                    t.zc(2, d, 1, 7, 'circle', 2),
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
                directives: [m.n, m.o],
                styles: [h],
                encapsulation: 2,
                changeDetection: 0
              })),
              e
            );
          })(),
          I = (function () {
            var e = function e() {
              a(this, e);
            };
            return (
              (e.ɵmod = t.Ib({ type: e })),
              (e.ɵinj = t.Hb({
                factory: function (n) {
                  return new (n || e)();
                },
                imports: [[i.e, m.c], i.e]
              })),
              e
            );
          })();
      },
      fJC1: function (e, n, r) {
        'use strict';
        function t(e) {
          return Object.keys(e)
            .filter(function (n) {
              return 'number' != typeof e[n];
            })
            .map(function (e) {
              return Number(e);
            });
        }
        function a(e) {
          return Object.keys(e).filter(function (n) {
            return 'number' == typeof e[n];
          });
        }
        r.d(n, 'a', function () {
          return t;
        }),
          r.d(n, 'b', function () {
            return a;
          });
      },
      jeMW: function (n, r, t) {
        'use strict';
        t.d(r, 'a', function () {
          return f;
        });
        var m = t('mrSG'),
          u = t('req1'),
          i = t('9PoT'),
          y = t('fJC1');
        function b(e) {
          for (
            var n = [10, 9, 5, 4, 1], r = ['X', 'IX', 'V', 'IV', 'I'], t = 0;
            t < n.length;
            t++
          )
            if (e >= n[t]) return r[t] + b(e - n[t]);
          return '';
        }
        var s,
          N = t('AfiK'),
          l = Object(y.b)(u.a),
          p = 0,
          c = [
            { filter: N.a.Coverage, value: '', enabled: 0, id: p++ },
            { filter: N.a.Search, value: '', enabled: 0, id: p++ }
          ].concat(
            e(
              ['Hide Megas', 'Hide Alolan Forms', 'Hide Galarian Forms'].map(
                function (e) {
                  return { filter: N.a.Extras, value: e, enabled: 1, id: p++ };
                }
              )
            ),
            e(
              l.map(function (e) {
                return { filter: N.a.Regions, value: e, enabled: 0, id: p++ };
              })
            ),
            e(
              Array.from(Array(8).keys()).map(function (e) {
                return {
                  filter: N.a.Generations,
                  value: 'Generation ' + b(e + 1),
                  enabled: 0,
                  id: p++
                };
              })
            ),
            e(
              i.b.map(function (e) {
                return { filter: N.a.Types, value: e, enabled: 0, id: p++ };
              })
            )
          ),
          d = t('fXoL'),
          h = t('6Ke5'),
          f =
            (((s = (function () {
              function e(n) {
                a(this, e),
                  (this.databaseService = n),
                  (this.checkingCoverage = !1);
              }
              return (
                o(e, [
                  {
                    key: 'setDefaultFilters',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.databaseService.filters.count()
                                    );
                                  case 2:
                                    if (
                                      ((e.t0 = e.sent),
                                      (e.t1 = 0 === e.t0),
                                      !e.t1)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      (e.next = 7),
                                      this.databaseService.filters.bulkAdd(c)
                                    );
                                  case 7:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'createDatabase',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          var n = this;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), this.setDefaultFilters()
                                    );
                                  case 2:
                                    this.getCoverageFilter().then(function (e) {
                                      n.checkingCoverage =
                                        1 === (null == e ? void 0 : e.enabled);
                                    });
                                  case 3:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'resetFilters',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.databaseService.filters.clear()
                                    );
                                  case 2:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'getAllFilters',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.databaseService.filters
                                        .filter(function (e) {
                                          var n = e.filter,
                                            r = e.value;
                                          return (
                                            n !== N.a.Coverage &&
                                            n !== N.a.Search &&
                                            !(
                                              n === N.a.Regions &&
                                              r === u.a[u.a.National]
                                            )
                                          );
                                        })
                                        .toArray()
                                    );
                                  case 2:
                                    return e.abrupt(
                                      'return',
                                      e.sent.sort(function (e, n) {
                                        return e.filter - n.filter;
                                      })
                                    );
                                  case 3:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'getFilters',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2), this.setDefaultFilters()
                                    );
                                  case 2:
                                    return e.abrupt(
                                      'return',
                                      this.databaseService.filters
                                        .where({ enabled: 1 })
                                        .toArray()
                                    );
                                  case 3:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'getSearchFilter',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      'return',
                                      this.databaseService.getFilter(N.a.Search)
                                    );
                                  case 1:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'addSearchFilter',
                    value: function (e) {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          var r;
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (n.next = 2), this.getSearchFilter();
                                  case 2:
                                    (r = n.sent),
                                      this.databaseService.filters.update(
                                        r.id,
                                        {
                                          value: e.trim(),
                                          enabled: e.trim().length > 0 ? 1 : 0
                                        }
                                      );
                                  case 4:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'getCoverageFilter',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      'return',
                                      this.databaseService.getFilter(
                                        N.a.Coverage
                                      )
                                    );
                                  case 1:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'changeCoverageDocument',
                    value: function (e) {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          var r;
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.next = 2), this.getCoverageFilter()
                                    );
                                  case 2:
                                    (r = n.sent),
                                      this.databaseService.filters.update(
                                        r.id,
                                        { value: e, enabled: e ? 1 : 0 }
                                      );
                                  case 4:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'checkCoverage',
                    value: function (e) {
                      (this.checkingCoverage = !this.checkingCoverage),
                        this.changeCoverageDocument(
                          this.checkingCoverage && e.length
                            ? JSON.stringify(e)
                            : ''
                        );
                    }
                  },
                  {
                    key: 'updateFilter',
                    value: function (e) {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    this.databaseService.filters.update(e.id, {
                                      enabled: e.enabled
                                    });
                                  case 1:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'updateFilters',
                    value: function (e) {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return (
                                      (n.next = 2),
                                      this.databaseService.filters.bulkPut(e)
                                    );
                                  case 2:
                                    return n.abrupt('return', e);
                                  case 3:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || s)(d.Ub(h.a));
            }),
            (s.ɵprov = d.Gb({ token: s, factory: s.ɵfac, providedIn: 'root' })),
            s);
      },
      kmnG: function (n, r, t) {
        'use strict';
        t.d(r, 'a', function () {
          return J;
        }),
          t.d(r, 'b', function () {
            return $;
          }),
          t.d(r, 'c', function () {
            return M;
          }),
          t.d(r, 'd', function () {
            return Z;
          }),
          t.d(r, 'e', function () {
            return q;
          });
        var m = t('GU7r'),
          i = t('ofXK'),
          b = t('fXoL'),
          s = t('FKr1'),
          N = t('8LU1'),
          l = t('XNiG'),
          p = t('VRyK'),
          c = t('xgIS'),
          d = t('JX91'),
          h = t('1G5W'),
          f = t('IzEk'),
          v = t('R0Ic'),
          g = t('R1ws'),
          k = t('cH1L'),
          I = t('nLfN'),
          x = ['underline'],
          C = ['connectionContainer'],
          G = ['inputContainer'],
          w = ['label'];
        function _(e, n) {
          1 & e &&
            (b.Ob(0),
            b.Qb(1, 'div', 14),
            b.Lb(2, 'div', 15),
            b.Lb(3, 'div', 16),
            b.Lb(4, 'div', 17),
            b.Pb(),
            b.Qb(5, 'div', 18),
            b.Lb(6, 'div', 15),
            b.Lb(7, 'div', 16),
            b.Lb(8, 'div', 17),
            b.Pb(),
            b.Nb());
        }
        function V(e, n) {
          1 & e && (b.Qb(0, 'div', 19), b.gc(1, 1), b.Pb());
        }
        function S(e, n) {
          if (
            (1 & e &&
              (b.Ob(0), b.gc(1, 2), b.Qb(2, 'span'), b.Ac(3), b.Pb(), b.Nb()),
            2 & e)
          ) {
            var r = b.bc(2);
            b.zb(3), b.Bc(r._control.placeholder);
          }
        }
        function R(e, n) {
          1 & e && b.gc(0, 3, ['*ngSwitchCase', 'true']);
        }
        function A(e, n) {
          1 & e && (b.Qb(0, 'span', 23), b.Ac(1, ' *'), b.Pb());
        }
        function O(e, n) {
          if (1 & e) {
            var r = b.Rb();
            b.Qb(0, 'label', 20, 21),
              b.Xb('cdkObserveContent', function () {
                return b.qc(r), b.bc().updateOutlineGap();
              }),
              b.zc(2, S, 4, 1, 'ng-container', 12),
              b.zc(3, R, 1, 0, 'ng-content', 12),
              b.zc(4, A, 2, 0, 'span', 22),
              b.Pb();
          }
          if (2 & e) {
            var t = b.bc();
            b.Cb('mat-empty', t._control.empty && !t._shouldAlwaysFloat())(
              'mat-form-field-empty',
              t._control.empty && !t._shouldAlwaysFloat()
            )('mat-accent', 'accent' == t.color)('mat-warn', 'warn' == t.color),
              b.ic('cdkObserveContentDisabled', 'outline' != t.appearance)(
                'id',
                t._labelId
              )('ngSwitch', t._hasLabel()),
              b.Ab('for', t._control.id)('aria-owns', t._control.id),
              b.zb(2),
              b.ic('ngSwitchCase', !1),
              b.zb(1),
              b.ic('ngSwitchCase', !0),
              b.zb(1),
              b.ic(
                'ngIf',
                !t.hideRequiredMarker &&
                  t._control.required &&
                  !t._control.disabled
              );
          }
        }
        function E(e, n) {
          1 & e && (b.Qb(0, 'div', 24), b.gc(1, 4), b.Pb());
        }
        function P(e, n) {
          if (
            (1 & e && (b.Qb(0, 'div', 25, 26), b.Lb(2, 'span', 27), b.Pb()),
            2 & e)
          ) {
            var r = b.bc();
            b.zb(2),
              b.Cb('mat-accent', 'accent' == r.color)(
                'mat-warn',
                'warn' == r.color
              );
          }
        }
        function j(e, n) {
          if ((1 & e && (b.Qb(0, 'div'), b.gc(1, 5), b.Pb()), 2 & e)) {
            var r = b.bc();
            b.ic('@transitionMessages', r._subscriptAnimationState);
          }
        }
        function F(e, n) {
          if ((1 & e && (b.Qb(0, 'div', 31), b.Ac(1), b.Pb()), 2 & e)) {
            var r = b.bc(2);
            b.ic('id', r._hintLabelId), b.zb(1), b.Bc(r.hintLabel);
          }
        }
        function D(e, n) {
          if (
            (1 & e &&
              (b.Qb(0, 'div', 28),
              b.zc(1, F, 2, 2, 'div', 29),
              b.gc(2, 6),
              b.Lb(3, 'div', 30),
              b.gc(4, 7),
              b.Pb()),
            2 & e)
          ) {
            var r = b.bc();
            b.ic('@transitionMessages', r._subscriptAnimationState),
              b.zb(1),
              b.ic('ngIf', r.hintLabel);
          }
        }
        var T = [
            '*',
            [['', 'matPrefix', '']],
            [['mat-placeholder']],
            [['mat-label']],
            [['', 'matSuffix', '']],
            [['mat-error']],
            [['mat-hint', 3, 'align', 'end']],
            [['mat-hint', 'align', 'end']]
          ],
          L = [
            '*',
            '[matPrefix]',
            'mat-placeholder',
            'mat-label',
            '[matSuffix]',
            'mat-error',
            "mat-hint:not([align='end'])",
            "mat-hint[align='end']"
          ],
          z = new b.q('MatError'),
          K = {
            transitionMessages: Object(v.l)('transitionMessages', [
              Object(v.i)(
                'enter',
                Object(v.j)({ opacity: 1, transform: 'translateY(0%)' })
              ),
              Object(v.k)('void => enter', [
                Object(v.j)({ opacity: 0, transform: 'translateY(-100%)' }),
                Object(v.e)('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')
              ])
            ])
          },
          M = (function () {
            var e = function e() {
              a(this, e);
            };
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵdir = b.Fb({ type: e })),
              e
            );
          })(),
          B = new b.q('MatHint'),
          q = (function () {
            var e = function e() {
              a(this, e);
            };
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵdir = b.Fb({ type: e, selectors: [['mat-label']] })),
              e
            );
          })(),
          U = (function () {
            var e = function e() {
              a(this, e);
            };
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵdir = b.Fb({ type: e, selectors: [['mat-placeholder']] })),
              e
            );
          })(),
          H = new b.q('MatPrefix'),
          W = new b.q('MatSuffix'),
          X = 0,
          Y = Object(s.r)(function e(n) {
            a(this, e), (this._elementRef = n);
          }, 'primary'),
          Q = new b.q('MAT_FORM_FIELD_DEFAULT_OPTIONS'),
          J = new b.q('MatFormField'),
          $ = (function () {
            var n = (function (n) {
              u(t, n);
              var r = y(t);
              function t(e, n, m, o, u, i, y, b) {
                var s;
                return (
                  a(this, t),
                  ((s = r.call(this, e))._elementRef = e),
                  (s._changeDetectorRef = n),
                  (s._dir = o),
                  (s._defaults = u),
                  (s._platform = i),
                  (s._ngZone = y),
                  (s._outlineGapCalculationNeededImmediately = !1),
                  (s._outlineGapCalculationNeededOnStable = !1),
                  (s._destroyed = new l.a()),
                  (s._showAlwaysAnimate = !1),
                  (s._subscriptAnimationState = ''),
                  (s._hintLabel = ''),
                  (s._hintLabelId = 'mat-hint-' + X++),
                  (s._labelId = 'mat-form-field-label-' + X++),
                  (s.floatLabel = s._getDefaultFloatLabelState()),
                  (s._animationsEnabled = 'NoopAnimations' !== b),
                  (s.appearance = u && u.appearance ? u.appearance : 'legacy'),
                  (s._hideRequiredMarker =
                    !(!u || null == u.hideRequiredMarker) &&
                    u.hideRequiredMarker),
                  s
                );
              }
              return (
                o(t, [
                  {
                    key: '_shouldAlwaysFloat',
                    value: function () {
                      return (
                        'always' === this.floatLabel && !this._showAlwaysAnimate
                      );
                    }
                  },
                  {
                    key: '_canLabelFloat',
                    value: function () {
                      return 'never' !== this.floatLabel;
                    }
                  },
                  {
                    key: 'getLabelId',
                    value: function () {
                      return this._hasFloatingLabel() ? this._labelId : null;
                    }
                  },
                  {
                    key: 'getConnectedOverlayOrigin',
                    value: function () {
                      return this._connectionContainerRef || this._elementRef;
                    }
                  },
                  {
                    key: 'ngAfterContentInit',
                    value: function () {
                      var e = this;
                      this._validateControlChild();
                      var n = this._control;
                      n.controlType &&
                        this._elementRef.nativeElement.classList.add(
                          'mat-form-field-type-' + n.controlType
                        ),
                        n.stateChanges
                          .pipe(Object(d.a)(null))
                          .subscribe(function () {
                            e._validatePlaceholders(),
                              e._syncDescribedByIds(),
                              e._changeDetectorRef.markForCheck();
                          }),
                        n.ngControl &&
                          n.ngControl.valueChanges &&
                          n.ngControl.valueChanges
                            .pipe(Object(h.a)(this._destroyed))
                            .subscribe(function () {
                              return e._changeDetectorRef.markForCheck();
                            }),
                        this._ngZone.runOutsideAngular(function () {
                          e._ngZone.onStable
                            .pipe(Object(h.a)(e._destroyed))
                            .subscribe(function () {
                              e._outlineGapCalculationNeededOnStable &&
                                e.updateOutlineGap();
                            });
                        }),
                        Object(p.a)(
                          this._prefixChildren.changes,
                          this._suffixChildren.changes
                        ).subscribe(function () {
                          (e._outlineGapCalculationNeededOnStable = !0),
                            e._changeDetectorRef.markForCheck();
                        }),
                        this._hintChildren.changes
                          .pipe(Object(d.a)(null))
                          .subscribe(function () {
                            e._processHints(),
                              e._changeDetectorRef.markForCheck();
                          }),
                        this._errorChildren.changes
                          .pipe(Object(d.a)(null))
                          .subscribe(function () {
                            e._syncDescribedByIds(),
                              e._changeDetectorRef.markForCheck();
                          }),
                        this._dir &&
                          this._dir.change
                            .pipe(Object(h.a)(this._destroyed))
                            .subscribe(function () {
                              'function' == typeof requestAnimationFrame
                                ? e._ngZone.runOutsideAngular(function () {
                                    requestAnimationFrame(function () {
                                      return e.updateOutlineGap();
                                    });
                                  })
                                : e.updateOutlineGap();
                            });
                    }
                  },
                  {
                    key: 'ngAfterContentChecked',
                    value: function () {
                      this._validateControlChild(),
                        this._outlineGapCalculationNeededImmediately &&
                          this.updateOutlineGap();
                    }
                  },
                  {
                    key: 'ngAfterViewInit',
                    value: function () {
                      (this._subscriptAnimationState = 'enter'),
                        this._changeDetectorRef.detectChanges();
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this._destroyed.next(), this._destroyed.complete();
                    }
                  },
                  {
                    key: '_shouldForward',
                    value: function (e) {
                      var n = this._control ? this._control.ngControl : null;
                      return n && n[e];
                    }
                  },
                  {
                    key: '_hasPlaceholder',
                    value: function () {
                      return !!(
                        (this._control && this._control.placeholder) ||
                        this._placeholderChild
                      );
                    }
                  },
                  {
                    key: '_hasLabel',
                    value: function () {
                      return !(
                        !this._labelChildNonStatic && !this._labelChildStatic
                      );
                    }
                  },
                  {
                    key: '_shouldLabelFloat',
                    value: function () {
                      return (
                        this._canLabelFloat() &&
                        ((this._control && this._control.shouldLabelFloat) ||
                          this._shouldAlwaysFloat())
                      );
                    }
                  },
                  {
                    key: '_hideControlPlaceholder',
                    value: function () {
                      return (
                        ('legacy' === this.appearance && !this._hasLabel()) ||
                        (this._hasLabel() && !this._shouldLabelFloat())
                      );
                    }
                  },
                  {
                    key: '_hasFloatingLabel',
                    value: function () {
                      return (
                        this._hasLabel() ||
                        ('legacy' === this.appearance && this._hasPlaceholder())
                      );
                    }
                  },
                  {
                    key: '_getDisplayedMessages',
                    value: function () {
                      return this._errorChildren &&
                        this._errorChildren.length > 0 &&
                        this._control.errorState
                        ? 'error'
                        : 'hint';
                    }
                  },
                  {
                    key: '_animateAndLockLabel',
                    value: function () {
                      var e = this;
                      this._hasFloatingLabel() &&
                        this._canLabelFloat() &&
                        (this._animationsEnabled &&
                          this._label &&
                          ((this._showAlwaysAnimate = !0),
                          Object(c.a)(
                            this._label.nativeElement,
                            'transitionend'
                          )
                            .pipe(Object(f.a)(1))
                            .subscribe(function () {
                              e._showAlwaysAnimate = !1;
                            })),
                        (this.floatLabel = 'always'),
                        this._changeDetectorRef.markForCheck());
                    }
                  },
                  { key: '_validatePlaceholders', value: function () {} },
                  {
                    key: '_processHints',
                    value: function () {
                      this._validateHints(), this._syncDescribedByIds();
                    }
                  },
                  { key: '_validateHints', value: function () {} },
                  {
                    key: '_getDefaultFloatLabelState',
                    value: function () {
                      return (
                        (this._defaults && this._defaults.floatLabel) || 'auto'
                      );
                    }
                  },
                  {
                    key: '_syncDescribedByIds',
                    value: function () {
                      if (this._control) {
                        var n = [];
                        if (
                          (this._control.userAriaDescribedBy &&
                            'string' ==
                              typeof this._control.userAriaDescribedBy &&
                            n.push.apply(
                              n,
                              e(this._control.userAriaDescribedBy.split(' '))
                            ),
                          'hint' === this._getDisplayedMessages())
                        ) {
                          var r = this._hintChildren
                              ? this._hintChildren.find(function (e) {
                                  return 'start' === e.align;
                                })
                              : null,
                            t = this._hintChildren
                              ? this._hintChildren.find(function (e) {
                                  return 'end' === e.align;
                                })
                              : null;
                          r
                            ? n.push(r.id)
                            : this._hintLabel && n.push(this._hintLabelId),
                            t && n.push(t.id);
                        } else
                          this._errorChildren &&
                            n.push.apply(
                              n,
                              e(
                                this._errorChildren.map(function (e) {
                                  return e.id;
                                })
                              )
                            );
                        this._control.setDescribedByIds(n);
                      }
                    }
                  },
                  { key: '_validateControlChild', value: function () {} },
                  {
                    key: 'updateOutlineGap',
                    value: function () {
                      var e = this._label ? this._label.nativeElement : null;
                      if (
                        'outline' === this.appearance &&
                        e &&
                        e.children.length &&
                        e.textContent.trim() &&
                        this._platform.isBrowser
                      )
                        if (this._isAttachedToDOM()) {
                          var n = 0,
                            r = 0,
                            t = this._connectionContainerRef.nativeElement,
                            a = t.querySelectorAll(
                              '.mat-form-field-outline-start'
                            ),
                            m = t.querySelectorAll(
                              '.mat-form-field-outline-gap'
                            );
                          if (
                            this._label &&
                            this._label.nativeElement.children.length
                          ) {
                            var o = t.getBoundingClientRect();
                            if (0 === o.width && 0 === o.height)
                              return (
                                (this._outlineGapCalculationNeededOnStable = !0),
                                void (this._outlineGapCalculationNeededImmediately = !1)
                              );
                            for (
                              var u = this._getStartEnd(o),
                                i = e.children,
                                y = this._getStartEnd(
                                  i[0].getBoundingClientRect()
                                ),
                                b = 0,
                                s = 0;
                              s < i.length;
                              s++
                            )
                              b += i[s].offsetWidth;
                            (n = Math.abs(y - u) - 5),
                              (r = b > 0 ? 0.75 * b + 10 : 0);
                          }
                          for (var N = 0; N < a.length; N++)
                            a[N].style.width = n + 'px';
                          for (var l = 0; l < m.length; l++)
                            m[l].style.width = r + 'px';
                          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = !1;
                        } else
                          this._outlineGapCalculationNeededImmediately = !0;
                    }
                  },
                  {
                    key: '_getStartEnd',
                    value: function (e) {
                      return this._dir && 'rtl' === this._dir.value
                        ? e.right
                        : e.left;
                    }
                  },
                  {
                    key: '_isAttachedToDOM',
                    value: function () {
                      var e = this._elementRef.nativeElement;
                      if (e.getRootNode) {
                        var n = e.getRootNode();
                        return n && n !== e;
                      }
                      return document.documentElement.contains(e);
                    }
                  },
                  {
                    key: 'appearance',
                    get: function () {
                      return this._appearance;
                    },
                    set: function (e) {
                      var n = this._appearance;
                      (this._appearance =
                        e ||
                        (this._defaults && this._defaults.appearance) ||
                        'legacy'),
                        'outline' === this._appearance &&
                          n !== e &&
                          (this._outlineGapCalculationNeededOnStable = !0);
                    }
                  },
                  {
                    key: 'hideRequiredMarker',
                    get: function () {
                      return this._hideRequiredMarker;
                    },
                    set: function (e) {
                      this._hideRequiredMarker = Object(N.b)(e);
                    }
                  },
                  {
                    key: 'hintLabel',
                    get: function () {
                      return this._hintLabel;
                    },
                    set: function (e) {
                      (this._hintLabel = e), this._processHints();
                    }
                  },
                  {
                    key: 'floatLabel',
                    get: function () {
                      return 'legacy' !== this.appearance &&
                        'never' === this._floatLabel
                        ? 'auto'
                        : this._floatLabel;
                    },
                    set: function (e) {
                      e !== this._floatLabel &&
                        ((this._floatLabel =
                          e || this._getDefaultFloatLabelState()),
                        this._changeDetectorRef.markForCheck());
                    }
                  },
                  {
                    key: '_control',
                    get: function () {
                      return (
                        this._explicitFormFieldControl ||
                        this._controlNonStatic ||
                        this._controlStatic
                      );
                    },
                    set: function (e) {
                      this._explicitFormFieldControl = e;
                    }
                  }
                ]),
                t
              );
            })(Y);
            return (
              (n.ɵfac = function (e) {
                return new (e || n)(
                  b.Kb(b.l),
                  b.Kb(b.h),
                  b.Kb(b.l),
                  b.Kb(k.b, 8),
                  b.Kb(Q, 8),
                  b.Kb(I.a),
                  b.Kb(b.z),
                  b.Kb(g.a, 8)
                );
              }),
              (n.ɵcmp = b.Eb({
                type: n,
                selectors: [['mat-form-field']],
                contentQueries: function (e, n, r) {
                  var t;
                  (1 & e &&
                    (b.Db(r, M, !0),
                    b.uc(r, M, !0),
                    b.Db(r, q, !0),
                    b.uc(r, q, !0),
                    b.Db(r, U, !0),
                    b.Db(r, z, !0),
                    b.Db(r, B, !0),
                    b.Db(r, H, !0),
                    b.Db(r, W, !0)),
                  2 & e) &&
                    (b.nc((t = b.Yb())) && (n._controlNonStatic = t.first),
                    b.nc((t = b.Yb())) && (n._controlStatic = t.first),
                    b.nc((t = b.Yb())) && (n._labelChildNonStatic = t.first),
                    b.nc((t = b.Yb())) && (n._labelChildStatic = t.first),
                    b.nc((t = b.Yb())) && (n._placeholderChild = t.first),
                    b.nc((t = b.Yb())) && (n._errorChildren = t),
                    b.nc((t = b.Yb())) && (n._hintChildren = t),
                    b.nc((t = b.Yb())) && (n._prefixChildren = t),
                    b.nc((t = b.Yb())) && (n._suffixChildren = t));
                },
                viewQuery: function (e, n) {
                  var r;
                  (1 & e &&
                    (b.Ec(x, !0), b.vc(C, !0), b.Ec(G, !0), b.Ec(w, !0)),
                  2 & e) &&
                    (b.nc((r = b.Yb())) && (n.underlineRef = r.first),
                    b.nc((r = b.Yb())) && (n._connectionContainerRef = r.first),
                    b.nc((r = b.Yb())) && (n._inputContainerRef = r.first),
                    b.nc((r = b.Yb())) && (n._label = r.first));
                },
                hostAttrs: [1, 'mat-form-field'],
                hostVars: 44,
                hostBindings: function (e, n) {
                  2 & e &&
                    b.Cb(
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
                features: [b.yb([{ provide: J, useExisting: n }]), b.wb],
                ngContentSelectors: L,
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
                    (b.hc(T),
                    b.Qb(0, 'div', 0),
                    b.Qb(1, 'div', 1, 2),
                    b.Xb('click', function (e) {
                      return (
                        n._control.onContainerClick &&
                        n._control.onContainerClick(e)
                      );
                    }),
                    b.zc(3, _, 9, 0, 'ng-container', 3),
                    b.zc(4, V, 2, 0, 'div', 4),
                    b.Qb(5, 'div', 5, 6),
                    b.gc(7),
                    b.Qb(8, 'span', 7),
                    b.zc(9, O, 5, 16, 'label', 8),
                    b.Pb(),
                    b.Pb(),
                    b.zc(10, E, 2, 0, 'div', 9),
                    b.Pb(),
                    b.zc(11, P, 3, 4, 'div', 10),
                    b.Qb(12, 'div', 11),
                    b.zc(13, j, 2, 1, 'div', 12),
                    b.zc(14, D, 5, 2, 'div', 13),
                    b.Pb(),
                    b.Pb()),
                    2 & e &&
                      (b.zb(3),
                      b.ic('ngIf', 'outline' == n.appearance),
                      b.zb(1),
                      b.ic('ngIf', n._prefixChildren.length),
                      b.zb(5),
                      b.ic('ngIf', n._hasFloatingLabel()),
                      b.zb(1),
                      b.ic('ngIf', n._suffixChildren.length),
                      b.zb(1),
                      b.ic('ngIf', 'outline' != n.appearance),
                      b.zb(1),
                      b.ic('ngSwitch', n._getDisplayedMessages()),
                      b.zb(1),
                      b.ic('ngSwitchCase', 'error'),
                      b.zb(1),
                      b.ic('ngSwitchCase', 'hint'));
                },
                directives: [i.m, i.n, i.o, m.a],
                styles: [
                  '.mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field-hint-end{order:1}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n',
                  '.mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:"";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n',
                  '.mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:" ";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:"";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n',
                  '.mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n',
                  '.mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n',
                  '.mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n'
                ],
                encapsulation: 2,
                data: { animation: [K.transitionMessages] },
                changeDetection: 0
              })),
              n
            );
          })(),
          Z = (function () {
            var e = function e() {
              a(this, e);
            };
            return (
              (e.ɵmod = b.Ib({ type: e })),
              (e.ɵinj = b.Hb({
                factory: function (n) {
                  return new (n || e)();
                },
                imports: [[i.c, s.e, m.c], s.e]
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
          if (
            'object' == typeof Reflect &&
            'function' == typeof Reflect.decorate
          )
            o = Reflect.decorate(e, n, r, t);
          else
            for (var u = e.length - 1; u >= 0; u--)
              (a = e[u]) &&
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
                i(t.next(e));
              } catch (n) {
                m(n);
              }
            }
            function u(e) {
              try {
                i(t.throw(e));
              } catch (n) {
                m(n);
              }
            }
            function i(e) {
              var n;
              e.done
                ? a(e.value)
                : ((n = e.value),
                  n instanceof r
                    ? n
                    : new r(function (e) {
                        e(n);
                      })).then(o, u);
            }
            i((t = t.apply(e, n || [])).next());
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
          return u;
        });
        var t = r('fXoL'),
          m = r('zsLg'),
          u = (function () {
            var e = (function () {
              function e(n) {
                a(this, e), (this.pokemonImageService = n);
              }
              return (
                o(e, [
                  {
                    key: 'transform',
                    value: function (e) {
                      return e && 'Empty-Team Member' !== e
                        ? 'assets/pokemon/'.concat(
                            this.pokemonImageService.transform(e),
                            '.png'
                          )
                        : '';
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(t.Kb(m.a));
              }),
              (e.ɵpipe = t.Jb({ name: 'image', type: e, pure: !0 })),
              e
            );
          })();
      },
      qFsG: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return w;
        }),
          r.d(n, 'b', function () {
            return _;
          });
        var t = r('nLfN'),
          m = r('fXoL'),
          i = r('8LU1'),
          b = r('EY2u'),
          s = r('XNiG');
        r('xgIS'), r('3UWI'), r('1G5W'), r('ofXK');
        var N,
          l,
          p,
          c,
          d = Object(t.f)({ passive: !0 }),
          h =
            (((l = (function () {
              function e(n, r) {
                a(this, e),
                  (this._platform = n),
                  (this._ngZone = r),
                  (this._monitoredElements = new Map());
              }
              return (
                o(e, [
                  {
                    key: 'monitor',
                    value: function (e) {
                      var n = this;
                      if (!this._platform.isBrowser) return b.a;
                      var r = Object(i.d)(e),
                        t = this._monitoredElements.get(r);
                      if (t) return t.subject;
                      var a = new s.a(),
                        m = 'cdk-text-field-autofilled',
                        o = function (e) {
                          'cdk-text-field-autofill-start' !== e.animationName ||
                          r.classList.contains(m)
                            ? 'cdk-text-field-autofill-end' ===
                                e.animationName &&
                              r.classList.contains(m) &&
                              (r.classList.remove(m),
                              n._ngZone.run(function () {
                                return a.next({
                                  target: e.target,
                                  isAutofilled: !1
                                });
                              }))
                            : (r.classList.add(m),
                              n._ngZone.run(function () {
                                return a.next({
                                  target: e.target,
                                  isAutofilled: !0
                                });
                              }));
                        };
                      return (
                        this._ngZone.runOutsideAngular(function () {
                          r.addEventListener('animationstart', o, d),
                            r.classList.add(
                              'cdk-text-field-autofill-monitored'
                            );
                        }),
                        this._monitoredElements.set(r, {
                          subject: a,
                          unlisten: function () {
                            r.removeEventListener('animationstart', o, d);
                          }
                        }),
                        a
                      );
                    }
                  },
                  {
                    key: 'stopMonitoring',
                    value: function (e) {
                      var n = Object(i.d)(e),
                        r = this._monitoredElements.get(n);
                      r &&
                        (r.unlisten(),
                        r.subject.complete(),
                        n.classList.remove('cdk-text-field-autofill-monitored'),
                        n.classList.remove('cdk-text-field-autofilled'),
                        this._monitoredElements.delete(n));
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      var e = this;
                      this._monitoredElements.forEach(function (n, r) {
                        return e.stopMonitoring(r);
                      });
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || l)(m.Ub(t.a), m.Ub(m.z));
            }),
            (l.ɵprov = Object(m.Gb)({
              factory: function () {
                return new l(Object(m.Ub)(t.a), Object(m.Ub)(m.z));
              },
              token: l,
              providedIn: 'root'
            })),
            l),
          f =
            (((N = function e() {
              a(this, e);
            }).ɵmod = m.Ib({ type: N })),
            (N.ɵinj = m.Hb({
              factory: function (e) {
                return new (e || N)();
              },
              imports: [[t.b]]
            })),
            N),
          v = r('FKr1'),
          g = r('kmnG'),
          k = r('3Pt+'),
          I = new m.q('MAT_INPUT_VALUE_ACCESSOR'),
          x = [
            'button',
            'checkbox',
            'file',
            'hidden',
            'image',
            'radio',
            'range',
            'reset',
            'submit'
          ],
          C = 0,
          G = Object(v.u)(function e(n, r, t, m) {
            a(this, e),
              (this._defaultErrorStateMatcher = n),
              (this._parentForm = r),
              (this._parentFormGroup = t),
              (this.ngControl = m);
          }),
          w =
            (((c = (function (e) {
              u(r, e);
              var n = y(r);
              function r(e, m, o, u, i, y, b, N, l, p) {
                var c;
                a(this, r),
                  ((c = n.call(this, y, u, i, o))._elementRef = e),
                  (c._platform = m),
                  (c.ngControl = o),
                  (c._autofillMonitor = N),
                  (c._formField = p),
                  (c._uid = 'mat-input-' + C++),
                  (c.focused = !1),
                  (c.stateChanges = new s.a()),
                  (c.controlType = 'mat-input'),
                  (c.autofilled = !1),
                  (c._disabled = !1),
                  (c._required = !1),
                  (c._type = 'text'),
                  (c._readonly = !1),
                  (c._neverEmptyInputTypes = [
                    'date',
                    'datetime',
                    'datetime-local',
                    'month',
                    'time',
                    'week'
                  ].filter(function (e) {
                    return Object(t.e)().has(e);
                  }));
                var d = c._elementRef.nativeElement,
                  h = d.nodeName.toLowerCase();
                return (
                  (c._inputValueAccessor = b || d),
                  (c._previousNativeValue = c.value),
                  (c.id = c.id),
                  m.IOS &&
                    l.runOutsideAngular(function () {
                      e.nativeElement.addEventListener('keyup', function (e) {
                        var n = e.target;
                        n.value ||
                          n.selectionStart ||
                          n.selectionEnd ||
                          (n.setSelectionRange(1, 1),
                          n.setSelectionRange(0, 0));
                      });
                    }),
                  (c._isServer = !c._platform.isBrowser),
                  (c._isNativeSelect = 'select' === h),
                  (c._isTextarea = 'textarea' === h),
                  c._isNativeSelect &&
                    (c.controlType = d.multiple
                      ? 'mat-native-select-multiple'
                      : 'mat-native-select'),
                  c
                );
              }
              return (
                o(r, [
                  {
                    key: 'ngAfterViewInit',
                    value: function () {
                      var e = this;
                      this._platform.isBrowser &&
                        this._autofillMonitor
                          .monitor(this._elementRef.nativeElement)
                          .subscribe(function (n) {
                            (e.autofilled = n.isAutofilled),
                              e.stateChanges.next();
                          });
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function () {
                      this.stateChanges.next();
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this.stateChanges.complete(),
                        this._platform.isBrowser &&
                          this._autofillMonitor.stopMonitoring(
                            this._elementRef.nativeElement
                          );
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function () {
                      this.ngControl && this.updateErrorState(),
                        this._dirtyCheckNativeValue(),
                        this._dirtyCheckPlaceholder();
                    }
                  },
                  {
                    key: 'focus',
                    value: function (e) {
                      this._elementRef.nativeElement.focus(e);
                    }
                  },
                  {
                    key: '_focusChanged',
                    value: function (e) {
                      e === this.focused ||
                        (this.readonly && e) ||
                        ((this.focused = e), this.stateChanges.next());
                    }
                  },
                  { key: '_onInput', value: function () {} },
                  {
                    key: '_dirtyCheckPlaceholder',
                    value: function () {
                      var e,
                        n,
                        r = (
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
                        var t = this._elementRef.nativeElement;
                        (this._previousPlaceholder = r),
                          r
                            ? t.setAttribute('placeholder', r)
                            : t.removeAttribute('placeholder');
                      }
                    }
                  },
                  {
                    key: '_dirtyCheckNativeValue',
                    value: function () {
                      var e = this._elementRef.nativeElement.value;
                      this._previousNativeValue !== e &&
                        ((this._previousNativeValue = e),
                        this.stateChanges.next());
                    }
                  },
                  {
                    key: '_validateType',
                    value: function () {
                      x.indexOf(this._type);
                    }
                  },
                  {
                    key: '_isNeverEmpty',
                    value: function () {
                      return (
                        this._neverEmptyInputTypes.indexOf(this._type) > -1
                      );
                    }
                  },
                  {
                    key: '_isBadInput',
                    value: function () {
                      var e = this._elementRef.nativeElement.validity;
                      return e && e.badInput;
                    }
                  },
                  {
                    key: 'setDescribedByIds',
                    value: function (e) {
                      e.length
                        ? this._elementRef.nativeElement.setAttribute(
                            'aria-describedby',
                            e.join(' ')
                          )
                        : this._elementRef.nativeElement.removeAttribute(
                            'aria-describedby'
                          );
                    }
                  },
                  {
                    key: 'onContainerClick',
                    value: function () {
                      this.focused || this.focus();
                    }
                  },
                  {
                    key: 'disabled',
                    get: function () {
                      return this.ngControl && null !== this.ngControl.disabled
                        ? this.ngControl.disabled
                        : this._disabled;
                    },
                    set: function (e) {
                      (this._disabled = Object(i.b)(e)),
                        this.focused &&
                          ((this.focused = !1), this.stateChanges.next());
                    }
                  },
                  {
                    key: 'id',
                    get: function () {
                      return this._id;
                    },
                    set: function (e) {
                      this._id = e || this._uid;
                    }
                  },
                  {
                    key: 'required',
                    get: function () {
                      return this._required;
                    },
                    set: function (e) {
                      this._required = Object(i.b)(e);
                    }
                  },
                  {
                    key: 'type',
                    get: function () {
                      return this._type;
                    },
                    set: function (e) {
                      (this._type = e || 'text'),
                        this._validateType(),
                        !this._isTextarea &&
                          Object(t.e)().has(this._type) &&
                          (this._elementRef.nativeElement.type = this._type);
                    }
                  },
                  {
                    key: 'value',
                    get: function () {
                      return this._inputValueAccessor.value;
                    },
                    set: function (e) {
                      e !== this.value &&
                        ((this._inputValueAccessor.value = e),
                        this.stateChanges.next());
                    }
                  },
                  {
                    key: 'readonly',
                    get: function () {
                      return this._readonly;
                    },
                    set: function (e) {
                      this._readonly = Object(i.b)(e);
                    }
                  },
                  {
                    key: 'empty',
                    get: function () {
                      return !(
                        this._isNeverEmpty() ||
                        this._elementRef.nativeElement.value ||
                        this._isBadInput() ||
                        this.autofilled
                      );
                    }
                  },
                  {
                    key: 'shouldLabelFloat',
                    get: function () {
                      if (this._isNativeSelect) {
                        var e = this._elementRef.nativeElement,
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
                  }
                ]),
                r
              );
            })(G)).ɵfac = function (e) {
              return new (e || c)(
                m.Kb(m.l),
                m.Kb(t.a),
                m.Kb(k.j, 10),
                m.Kb(k.m, 8),
                m.Kb(k.f, 8),
                m.Kb(v.a),
                m.Kb(I, 10),
                m.Kb(h),
                m.Kb(m.z),
                m.Kb(g.a, 8)
              );
            }),
            (c.ɵdir = m.Fb({
              type: c,
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
                  m.Xb('focus', function () {
                    return n._focusChanged(!0);
                  })('blur', function () {
                    return n._focusChanged(!1);
                  })('input', function () {
                    return n._onInput();
                  }),
                  2 & e &&
                    (m.Tb('disabled', n.disabled)('required', n.required),
                    m.Ab('id', n.id)('data-placeholder', n.placeholder)(
                      'readonly',
                      (n.readonly && !n._isNativeSelect) || null
                    )('aria-invalid', n.errorState)(
                      'aria-required',
                      n.required.toString()
                    ),
                    m.Cb('mat-input-server', n._isServer));
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
              features: [m.yb([{ provide: g.c, useExisting: c }]), m.wb, m.xb]
            })),
            c),
          _ =
            (((p = function e() {
              a(this, e);
            }).ɵmod = m.Ib({ type: p })),
            (p.ɵinj = m.Hb({
              factory: function (e) {
                return new (e || p)();
              },
              providers: [v.a],
              imports: [[f, g.d, v.e], f, g.d]
            })),
            p);
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
        var m = function (e) {
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
          o = function (e) {
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
          return u;
        });
        var t = r('fXoL'),
          m = r('HN8I'),
          u = (function () {
            var e = (function () {
              function e(n) {
                a(this, e), (this.nameService = n);
              }
              return (
                o(e, [
                  {
                    key: 'transform',
                    value: function (e) {
                      return 'Empty Team Member' === e
                        ? ''
                        : this.nameService.transform(e);
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (n) {
                return new (n || e)(t.Kb(m.a));
              }),
              (e.ɵpipe = t.Jb({ name: 'hideForm', type: e, pure: !0 })),
              e
            );
          })();
      },
      xBi6: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return l;
        });
        var t,
          m = r('mrSG'),
          u = [
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
          i = r('NptF'),
          y = r('fXoL'),
          b = r('6Ke5'),
          s = r('zsLg'),
          N = r('ioxi'),
          l =
            (((t = (function () {
              function e(n, r, t) {
                a(this, e),
                  (this.databaseService = n),
                  (this.pokemonImageService = r),
                  (this.titleCaseService = t);
              }
              return (
                o(e, [
                  {
                    key: 'createDatabase',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.next = 2),
                                      this.databaseService.pokemon.count()
                                    );
                                  case 2:
                                    if (
                                      ((e.t0 = e.sent),
                                      (e.t1 = 0 === e.t0),
                                      !e.t1)
                                    ) {
                                      e.next = 7;
                                      break;
                                    }
                                    return (
                                      (e.next = 7),
                                      this.databaseService.pokemon.bulkAdd(
                                        u.map(function (e, n) {
                                          return Object.assign(
                                            Object.assign({}, e),
                                            { id: n }
                                          );
                                        })
                                      )
                                    );
                                  case 7:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'getPokemon',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      'return',
                                      this.databaseService.pokemon
                                        .toArray()
                                        .then(function (e) {
                                          return e.map(function (e) {
                                            return new i.a(e);
                                          });
                                        })
                                    );
                                  case 1:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'getPokemonNames',
                    value: function () {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function e() {
                          var n = this;
                          return regeneratorRuntime.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return e.abrupt(
                                      'return',
                                      this.databaseService.pokemon
                                        .toArray()
                                        .then(function (e) {
                                          return e.map(function (e) {
                                            return n.titleCaseService.titlecase(
                                              e.name
                                            );
                                          });
                                        })
                                    );
                                  case 1:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'find',
                    value: function (e) {
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function n() {
                          var r = this;
                          return regeneratorRuntime.wrap(
                            function (n) {
                              for (;;)
                                switch ((n.prev = n.next)) {
                                  case 0:
                                    return n.abrupt(
                                      'return',
                                      this.getPokemon().then(function (n) {
                                        return n.filter(function (n) {
                                          return e.some(function (e) {
                                            return r.pokemonImageService
                                              .transform(n.name)
                                              .toLowerCase()
                                              .includes(e.toLowerCase());
                                          });
                                        });
                                      })
                                    );
                                  case 1:
                                  case 'end':
                                    return n.stop();
                                }
                            },
                            n,
                            this
                          );
                        })
                      );
                    }
                  },
                  {
                    key: 'findEvolutionNames',
                    value: function (e) {
                      var n;
                      return Object(m.a)(
                        this,
                        void 0,
                        void 0,
                        regeneratorRuntime.mark(function r() {
                          var t,
                            a = this;
                          return regeneratorRuntime.wrap(
                            function (r) {
                              for (;;)
                                switch ((r.prev = r.next)) {
                                  case 0:
                                    return (
                                      (r.next = 2),
                                      this.databaseService.pokemon
                                        .where({
                                          name: this.pokemonImageService.reverseImageReplace(
                                            e.toLowerCase()
                                          )
                                        })
                                        .toArray()
                                    );
                                  case 2:
                                    return (
                                      (t = r.sent),
                                      (r.next = 5),
                                      this.databaseService.pokemon
                                        .where({
                                          evolutionChain:
                                            (null === (n = t[0]) || void 0 === n
                                              ? void 0
                                              : n.evolutionChain) || -1
                                        })
                                        .toArray()
                                    );
                                  case 5:
                                    return r.abrupt(
                                      'return',
                                      r.sent
                                        .map(function (e) {
                                          return (
                                            e &&
                                            a.titleCaseService.titlecase(e.name)
                                          );
                                        })
                                        .filter(function (n) {
                                          return (
                                            n &&
                                            n !==
                                              a.titleCaseService.titlecase(
                                                a.pokemonImageService.reverseImageReplace(
                                                  e.toLowerCase()
                                                )
                                              )
                                          );
                                        })
                                    );
                                  case 6:
                                  case 'end':
                                    return r.stop();
                                }
                            },
                            r,
                            this
                          );
                        })
                      );
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || t)(y.Ub(b.a), y.Ub(s.a), y.Ub(N.a));
            }),
            (t.ɵprov = y.Gb({ token: t, factory: t.ɵfac, providedIn: 'root' })),
            t);
      },
      zsLg: function (e, n, r) {
        'use strict';
        r.d(n, 'a', function () {
          return m;
        });
        var t = r('fXoL'),
          m = (function () {
            var e = (function () {
              function e() {
                a(this, e), (this.formRegex = /(\w{2,}) (\w{3,})$/);
              }
              return (
                o(e, [
                  {
                    key: 'transform',
                    value: function (e) {
                      return this.imageReplace(
                        this.characterReplace(e.toLowerCase())
                      );
                    }
                  },
                  {
                    key: 'handleSearch',
                    value: function (e, n) {
                      var r,
                        t = this.characterReplace(e.toLowerCase());
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
                            null ===
                              (r = n.toLowerCase().match(/galar(i|ia|ian)?/)) ||
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
                  },
                  {
                    key: 'characterReplace',
                    value: function (e) {
                      return e
                        .replace(/\xe9/g, 'e')
                        .replace(/\u2642/, 'm')
                        .replace(/\u2640/, 'f');
                    }
                  },
                  {
                    key: 'imageReplace',
                    value: function (e) {
                      return (e = this.reverseImageReplace(e))
                        .replace(' ', '-')
                        .replace(':', '')
                        .replace('.', '')
                        .replace("'", '')
                        .trim();
                    }
                  },
                  {
                    key: 'formReverse',
                    value: function (e) {
                      var n;
                      return (
                        null === (n = e.match(this.formRegex)) || void 0 === n
                          ? void 0
                          : n.length
                      )
                        ? e.replace(this.formRegex, '$2-$1')
                        : e;
                    }
                  },
                  {
                    key: 'reverseAlolaReplace',
                    value: function (e) {
                      var n;
                      return (
                        null === (n = e.match(/(Alolan|alolan)(- |\s)/)) ||
                        void 0 === n
                          ? void 0
                          : n.length
                      )
                        ? e.replace(/(Alolan|alolan)(- |\s)/, '') + '-alola'
                        : e;
                    }
                  },
                  {
                    key: 'reverseGalarReplace',
                    value: function (e) {
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
                  },
                  {
                    key: 'reverseMegaReplace',
                    value: function (e) {
                      var n;
                      return (
                        null === (n = e.match(/(mega|Mega)(- |\s)/)) ||
                        void 0 === n
                          ? void 0
                          : n.length
                      )
                        ? e.replace(/(mega|Mega)(- |\s)/, '') + '-mega'
                        : e;
                    }
                  },
                  {
                    key: 'reverseImageReplace',
                    value: function (e) {
                      var n, r;
                      if (
                        null === (n = e.match(/(mega|Mega) (\w+) (\w)$/)) ||
                        void 0 === n
                          ? void 0
                          : n.length
                      ) {
                        var t = e.replace(
                          /(Mega|mega) (\w+) (\w)$/,
                          '$2-$1-$3'
                        );
                        return (
                          t.slice(0, t.length - 1) +
                          t[t.length - 1].toLowerCase()
                        );
                      }
                      return (
                        null === (r = e.match(/(\w+) (\w)-(mega)/)) ||
                        void 0 === r
                          ? void 0
                          : r.length
                      )
                        ? e.replace(/(\w+) (\w)-(mega)/, '$1-$3-$2')
                        : e.includes('\u2642') || e.includes('\u2640')
                        ? e.replace(' ', '-')
                        : this.formReverse(
                            this.reverseMegaReplace(
                              this.reverseAlolaReplace(
                                this.reverseGalarReplace(e)
                              )
                            )
                          );
                    }
                  }
                ]),
                e
              );
            })();
            return (
              (e.ɵfac = function (n) {
                return new (n || e)();
              }),
              (e.ɵprov = t.Gb({
                token: e,
                factory: e.ɵfac,
                providedIn: 'root'
              })),
              e
            );
          })();
      }
    }
  ]);
})();
