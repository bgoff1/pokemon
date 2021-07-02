!(function () {
  function e(t, n, i) {
    return (e =
      'undefined' != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (e, t, n) {
            var i = (function (e, t) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(e, t) &&
                null !== (e = u(e));

              );
              return e;
            })(e, t);
            if (i) {
              var r = Object.getOwnPropertyDescriptor(i, t);
              return r.get ? r.get.call(n) : r.value;
            }
          })(t, n, i || t);
  }
  function t(e, t) {
    var n;
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
      if (
        Array.isArray(e) ||
        (n = i(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        n && (e = n);
        var r = 0,
          a = function () {};
        return {
          s: a,
          n: function () {
            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
          },
          e: function (e) {
            throw e;
          },
          f: a
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    var o,
      s = !0,
      c = !1;
    return {
      s: function () {
        n = e[Symbol.iterator]();
      },
      n: function () {
        var e = n.next();
        return (s = e.done), e;
      },
      e: function (e) {
        (c = !0), (o = e);
      },
      f: function () {
        try {
          s || null == n.return || n.return();
        } finally {
          if (c) throw o;
        }
      }
    };
  }
  function n(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return r(e);
      })(e) ||
      (function (e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      })(e) ||
      i(e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function i(e, t) {
    if (e) {
      if ('string' == typeof e) return r(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        'Object' === n && e.constructor && (n = e.constructor.name),
        'Map' === n || 'Set' === n
          ? Array.from(e)
          : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? r(e, t)
          : void 0
      );
    }
  }
  function r(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
    return i;
  }
  function a(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(e, i.key, i);
    }
  }
  function o(e, t, n) {
    return t && a(e.prototype, t), n && a(e, n), e;
  }
  function s(e, t) {
    if ('function' != typeof t && null !== t)
      throw new TypeError('Super expression must either be null or a function');
    (e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, writable: !0, configurable: !0 }
    })),
      t && c(e, t);
  }
  function c(e, t) {
    return (c =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function l(e) {
    var t = (function () {
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
      var n,
        i = u(e);
      if (t) {
        var r = u(this).constructor;
        n = Reflect.construct(i, arguments, r);
      } else n = i.apply(this, arguments);
      return h(this, n);
    };
  }
  function h(e, t) {
    return !t || ('object' != typeof t && 'function' != typeof t)
      ? (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e)
      : t;
  }
  function u(e) {
    return (u = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function d(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [6],
    {
      '3Qrf': function (i, r, a) {
        'use strict';
        a.r(r),
          a.d(r, 'TeamBuilderModule', function () {
            return jt;
          });
        var c,
          h,
          m,
          f = a('ofXK'),
          p = a('bTqV'),
          b = a('R1ws'),
          v = a('FKr1'),
          g = a('fXoL'),
          k = ['*', [['mat-card-footer']]],
          y = ['*', 'mat-card-footer'],
          _ =
            (((m = function e() {
              d(this, e);
            }).ɵfac = function (e) {
              return new (e || m)();
            }),
            (m.ɵdir = g.Fb({
              type: m,
              selectors: [
                ['mat-card-content'],
                ['', 'mat-card-content', ''],
                ['', 'matCardContent', '']
              ],
              hostAttrs: [1, 'mat-card-content']
            })),
            m),
          x =
            (((h = function e(t) {
              d(this, e), (this._animationMode = t);
            }).ɵfac = function (e) {
              return new (e || h)(g.Kb(b.a, 8));
            }),
            (h.ɵcmp = g.Eb({
              type: h,
              selectors: [['mat-card']],
              hostAttrs: [1, 'mat-card', 'mat-focus-indicator'],
              hostVars: 2,
              hostBindings: function (e, t) {
                2 & e &&
                  g.Cb(
                    '_mat-animation-noopable',
                    'NoopAnimations' === t._animationMode
                  );
              },
              exportAs: ['matCard'],
              ngContentSelectors: y,
              decls: 2,
              vars: 0,
              template: function (e, t) {
                1 & e && (g.hc(k), g.gc(0), g.gc(1, 1));
              },
              styles: [
                '.mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions .mat-button:first-child,.mat-card-actions .mat-raised-button:first-child,.mat-card-actions .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            h),
          w =
            (((c = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: c })),
            (c.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || c)();
              },
              imports: [[v.e], v.e]
            })),
            c),
          C = a('8LU1'),
          S = a('3Pt+'),
          P = a('GU7r'),
          O = a('u47x'),
          T = ['input'],
          I = function () {
            return { enterDuration: 150 };
          },
          M = ['*'],
          E = new g.q('mat-checkbox-default-options', {
            providedIn: 'root',
            factory: z
          });
        function z() {
          return { color: 'accent', clickAction: 'check-indeterminate' };
        }
        var D,
          R,
          A,
          W = 0,
          F = { color: 'accent', clickAction: 'check-indeterminate' },
          G = {
            provide: S.i,
            useExisting: Object(g.T)(function () {
              return j;
            }),
            multi: !0
          },
          L = function e() {
            d(this, e);
          },
          N = Object(v.v)(
            Object(v.r)(
              Object(v.s)(
                Object(v.t)(function e(t) {
                  d(this, e), (this._elementRef = t);
                })
              )
            )
          ),
          j =
            (((A = (function (e) {
              s(n, e);
              var t = l(n);
              function n(e, i, r, a, o, s, c) {
                var l;
                return (
                  d(this, n),
                  ((l = t.call(this, e))._changeDetectorRef = i),
                  (l._focusMonitor = r),
                  (l._ngZone = a),
                  (l._animationMode = s),
                  (l._options = c),
                  (l.ariaLabel = ''),
                  (l.ariaLabelledby = null),
                  (l._uniqueId = 'mat-checkbox-' + ++W),
                  (l.id = l._uniqueId),
                  (l.labelPosition = 'after'),
                  (l.name = null),
                  (l.change = new g.n()),
                  (l.indeterminateChange = new g.n()),
                  (l._onTouched = function () {}),
                  (l._currentAnimationClass = ''),
                  (l._currentCheckState = 0),
                  (l._controlValueAccessorChangeFn = function () {}),
                  (l._checked = !1),
                  (l._disabled = !1),
                  (l._indeterminate = !1),
                  (l._options = l._options || F),
                  (l.color = l.defaultColor = l._options.color || F.color),
                  (l.tabIndex = parseInt(o) || 0),
                  l
                );
              }
              return (
                o(n, [
                  {
                    key: 'ngAfterViewInit',
                    value: function () {
                      var e = this;
                      this._focusMonitor
                        .monitor(this._elementRef, !0)
                        .subscribe(function (t) {
                          t ||
                            Promise.resolve().then(function () {
                              e._onTouched(),
                                e._changeDetectorRef.markForCheck();
                            });
                        }),
                        this._syncIndeterminate(this._indeterminate);
                    }
                  },
                  { key: 'ngAfterViewChecked', value: function () {} },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this._focusMonitor.stopMonitoring(this._elementRef);
                    }
                  },
                  {
                    key: '_isRippleDisabled',
                    value: function () {
                      return this.disableRipple || this.disabled;
                    }
                  },
                  {
                    key: '_onLabelTextChange',
                    value: function () {
                      this._changeDetectorRef.detectChanges();
                    }
                  },
                  {
                    key: 'writeValue',
                    value: function (e) {
                      this.checked = !!e;
                    }
                  },
                  {
                    key: 'registerOnChange',
                    value: function (e) {
                      this._controlValueAccessorChangeFn = e;
                    }
                  },
                  {
                    key: 'registerOnTouched',
                    value: function (e) {
                      this._onTouched = e;
                    }
                  },
                  {
                    key: 'setDisabledState',
                    value: function (e) {
                      this.disabled = e;
                    }
                  },
                  {
                    key: '_getAriaChecked',
                    value: function () {
                      return this.checked
                        ? 'true'
                        : this.indeterminate
                        ? 'mixed'
                        : 'false';
                    }
                  },
                  {
                    key: '_transitionCheckState',
                    value: function (e) {
                      var t = this._currentCheckState,
                        n = this._elementRef.nativeElement;
                      if (
                        t !== e &&
                        (this._currentAnimationClass.length > 0 &&
                          n.classList.remove(this._currentAnimationClass),
                        (this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(
                          t,
                          e
                        )),
                        (this._currentCheckState = e),
                        this._currentAnimationClass.length > 0)
                      ) {
                        n.classList.add(this._currentAnimationClass);
                        var i = this._currentAnimationClass;
                        this._ngZone.runOutsideAngular(function () {
                          setTimeout(function () {
                            n.classList.remove(i);
                          }, 1e3);
                        });
                      }
                    }
                  },
                  {
                    key: '_emitChangeEvent',
                    value: function () {
                      var e = new L();
                      (e.source = this),
                        (e.checked = this.checked),
                        this._controlValueAccessorChangeFn(this.checked),
                        this.change.emit(e);
                    }
                  },
                  {
                    key: 'toggle',
                    value: function () {
                      this.checked = !this.checked;
                    }
                  },
                  {
                    key: '_onInputClick',
                    value: function (e) {
                      var t,
                        n = this,
                        i =
                          null === (t = this._options) || void 0 === t
                            ? void 0
                            : t.clickAction;
                      e.stopPropagation(),
                        this.disabled || 'noop' === i
                          ? this.disabled ||
                            'noop' !== i ||
                            ((this._inputElement.nativeElement.checked = this.checked),
                            (this._inputElement.nativeElement.indeterminate = this.indeterminate))
                          : (this.indeterminate &&
                              'check' !== i &&
                              Promise.resolve().then(function () {
                                (n._indeterminate = !1),
                                  n.indeterminateChange.emit(n._indeterminate);
                              }),
                            this.toggle(),
                            this._transitionCheckState(this._checked ? 1 : 2),
                            this._emitChangeEvent());
                    }
                  },
                  {
                    key: 'focus',
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'keyboard',
                        t = arguments.length > 1 ? arguments[1] : void 0;
                      this._focusMonitor.focusVia(this._inputElement, e, t);
                    }
                  },
                  {
                    key: '_onInteractionEvent',
                    value: function (e) {
                      e.stopPropagation();
                    }
                  },
                  {
                    key: '_getAnimationClassForCheckStateTransition',
                    value: function (e, t) {
                      if ('NoopAnimations' === this._animationMode) return '';
                      var n = '';
                      switch (e) {
                        case 0:
                          if (1 === t) n = 'unchecked-checked';
                          else {
                            if (3 != t) return '';
                            n = 'unchecked-indeterminate';
                          }
                          break;
                        case 2:
                          n =
                            1 === t
                              ? 'unchecked-checked'
                              : 'unchecked-indeterminate';
                          break;
                        case 1:
                          n =
                            2 === t
                              ? 'checked-unchecked'
                              : 'checked-indeterminate';
                          break;
                        case 3:
                          n =
                            1 === t
                              ? 'indeterminate-checked'
                              : 'indeterminate-unchecked';
                      }
                      return 'mat-checkbox-anim-' + n;
                    }
                  },
                  {
                    key: '_syncIndeterminate',
                    value: function (e) {
                      var t = this._inputElement;
                      t && (t.nativeElement.indeterminate = e);
                    }
                  },
                  {
                    key: 'inputId',
                    get: function () {
                      return (this.id || this._uniqueId) + '-input';
                    }
                  },
                  {
                    key: 'required',
                    get: function () {
                      return this._required;
                    },
                    set: function (e) {
                      this._required = Object(C.b)(e);
                    }
                  },
                  {
                    key: 'checked',
                    get: function () {
                      return this._checked;
                    },
                    set: function (e) {
                      e != this.checked &&
                        ((this._checked = e),
                        this._changeDetectorRef.markForCheck());
                    }
                  },
                  {
                    key: 'disabled',
                    get: function () {
                      return this._disabled;
                    },
                    set: function (e) {
                      var t = Object(C.b)(e);
                      t !== this.disabled &&
                        ((this._disabled = t),
                        this._changeDetectorRef.markForCheck());
                    }
                  },
                  {
                    key: 'indeterminate',
                    get: function () {
                      return this._indeterminate;
                    },
                    set: function (e) {
                      var t = e != this._indeterminate;
                      (this._indeterminate = Object(C.b)(e)),
                        t &&
                          (this._transitionCheckState(
                            this._indeterminate ? 3 : this.checked ? 1 : 2
                          ),
                          this.indeterminateChange.emit(this._indeterminate)),
                        this._syncIndeterminate(this._indeterminate);
                    }
                  }
                ]),
                n
              );
            })(N)).ɵfac = function (e) {
              return new (e || A)(
                g.Kb(g.l),
                g.Kb(g.h),
                g.Kb(O.e),
                g.Kb(g.z),
                g.Vb('tabindex'),
                g.Kb(b.a, 8),
                g.Kb(E, 8)
              );
            }),
            (A.ɵcmp = g.Eb({
              type: A,
              selectors: [['mat-checkbox']],
              viewQuery: function (e, t) {
                var n;
                1 & e && (g.Ec(T, !0), g.Ec(v.m, !0)),
                  2 & e &&
                    (g.nc((n = g.Yb())) && (t._inputElement = n.first),
                    g.nc((n = g.Yb())) && (t.ripple = n.first));
              },
              hostAttrs: [1, 'mat-checkbox'],
              hostVars: 12,
              hostBindings: function (e, t) {
                2 & e &&
                  (g.Tb('id', t.id),
                  g.Ab('tabindex', null),
                  g.Cb('mat-checkbox-indeterminate', t.indeterminate)(
                    'mat-checkbox-checked',
                    t.checked
                  )('mat-checkbox-disabled', t.disabled)(
                    'mat-checkbox-label-before',
                    'before' == t.labelPosition
                  )(
                    '_mat-animation-noopable',
                    'NoopAnimations' === t._animationMode
                  ));
              },
              inputs: {
                disableRipple: 'disableRipple',
                color: 'color',
                tabIndex: 'tabIndex',
                ariaLabel: ['aria-label', 'ariaLabel'],
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                id: 'id',
                labelPosition: 'labelPosition',
                name: 'name',
                required: 'required',
                checked: 'checked',
                disabled: 'disabled',
                indeterminate: 'indeterminate',
                ariaDescribedby: ['aria-describedby', 'ariaDescribedby'],
                value: 'value'
              },
              outputs: {
                change: 'change',
                indeterminateChange: 'indeterminateChange'
              },
              exportAs: ['matCheckbox'],
              features: [g.yb([G]), g.wb],
              ngContentSelectors: M,
              decls: 17,
              vars: 20,
              consts: [
                [1, 'mat-checkbox-layout'],
                ['label', ''],
                [1, 'mat-checkbox-inner-container'],
                [
                  'type',
                  'checkbox',
                  1,
                  'mat-checkbox-input',
                  'cdk-visually-hidden',
                  3,
                  'id',
                  'required',
                  'checked',
                  'disabled',
                  'tabIndex',
                  'change',
                  'click'
                ],
                ['input', ''],
                [
                  'matRipple',
                  '',
                  1,
                  'mat-checkbox-ripple',
                  'mat-focus-indicator',
                  3,
                  'matRippleTrigger',
                  'matRippleDisabled',
                  'matRippleRadius',
                  'matRippleCentered',
                  'matRippleAnimation'
                ],
                [1, 'mat-ripple-element', 'mat-checkbox-persistent-ripple'],
                [1, 'mat-checkbox-frame'],
                [1, 'mat-checkbox-background'],
                [
                  'version',
                  '1.1',
                  'focusable',
                  'false',
                  'viewBox',
                  '0 0 24 24',
                  0,
                  'xml',
                  'space',
                  'preserve',
                  1,
                  'mat-checkbox-checkmark'
                ],
                [
                  'fill',
                  'none',
                  'stroke',
                  'white',
                  'd',
                  'M4.1,12.7 9,17.6 20.3,6.3',
                  1,
                  'mat-checkbox-checkmark-path'
                ],
                [1, 'mat-checkbox-mixedmark'],
                [1, 'mat-checkbox-label', 3, 'cdkObserveContent'],
                ['checkboxLabel', ''],
                [2, 'display', 'none']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (g.hc(),
                    g.Qb(0, 'label', 0, 1),
                    g.Qb(2, 'span', 2),
                    g.Qb(3, 'input', 3, 4),
                    g.Xb('change', function (e) {
                      return t._onInteractionEvent(e);
                    })('click', function (e) {
                      return t._onInputClick(e);
                    }),
                    g.Pb(),
                    g.Qb(5, 'span', 5),
                    g.Lb(6, 'span', 6),
                    g.Pb(),
                    g.Lb(7, 'span', 7),
                    g.Qb(8, 'span', 8),
                    g.ac(),
                    g.Qb(9, 'svg', 9),
                    g.Lb(10, 'path', 10),
                    g.Pb(),
                    g.Zb(),
                    g.Lb(11, 'span', 11),
                    g.Pb(),
                    g.Pb(),
                    g.Qb(12, 'span', 12, 13),
                    g.Xb('cdkObserveContent', function () {
                      return t._onLabelTextChange();
                    }),
                    g.Qb(14, 'span', 14),
                    g.Ac(15, '\xa0'),
                    g.Pb(),
                    g.gc(16),
                    g.Pb(),
                    g.Pb()),
                  2 & e)
                ) {
                  var n = g.oc(1),
                    i = g.oc(13);
                  g.Ab('for', t.inputId),
                    g.zb(2),
                    g.Cb(
                      'mat-checkbox-inner-container-no-side-margin',
                      !i.textContent || !i.textContent.trim()
                    ),
                    g.zb(1),
                    g.ic('id', t.inputId)('required', t.required)(
                      'checked',
                      t.checked
                    )('disabled', t.disabled)('tabIndex', t.tabIndex),
                    g.Ab('value', t.value)('name', t.name)(
                      'aria-label',
                      t.ariaLabel || null
                    )('aria-labelledby', t.ariaLabelledby)(
                      'aria-checked',
                      t._getAriaChecked()
                    )('aria-describedby', t.ariaDescribedby),
                    g.zb(2),
                    g.ic('matRippleTrigger', n)(
                      'matRippleDisabled',
                      t._isRippleDisabled()
                    )('matRippleRadius', 20)('matRippleCentered', !0)(
                      'matRippleAnimation',
                      g.kc(19, I)
                    );
                }
              },
              directives: [v.m, P.a],
              styles: [
                '@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            A),
          H =
            (((R = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: R })),
            (R.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || R)();
              }
            })),
            R),
          B =
            (((D = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: D })),
            (D.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || D)();
              },
              imports: [[v.n, v.e, P.c, H], v.e, H]
            })),
            D),
          Q = a('kmnG'),
          K = a('NFeN'),
          V = a('qFsG'),
          U = a('Xa2L'),
          q = a('0EQZ'),
          X = a('7+OI'),
          $ = a('XNiG'),
          Y = a('2Vo4'),
          Z = a('LRne'),
          J = a('IzEk'),
          ee = a('pLZG'),
          te = a('1G5W');
        a('cH1L');
        var ne,
          ie,
          re,
          ae,
          oe = (function (e) {
            s(r, e);
            var i = l(r);
            function r(e, t) {
              var n;
              return (
                d(this, r),
                ((n = i.call(this)).getChildren = e),
                (n.options = t),
                n.options && (n.trackBy = n.options.trackBy),
                n
              );
            }
            return (
              o(r, [
                {
                  key: 'expandAll',
                  value: function () {
                    var e,
                      t = this;
                    this.expansionModel.clear();
                    var i = this.dataNodes.reduce(function (e, i) {
                      return [].concat(n(e), n(t.getDescendants(i)), [i]);
                    }, []);
                    (e = this.expansionModel).select.apply(
                      e,
                      n(
                        i.map(function (e) {
                          return t._trackByValue(e);
                        })
                      )
                    );
                  }
                },
                {
                  key: 'getDescendants',
                  value: function (e) {
                    var t = [];
                    return this._getDescendants(t, e), t.splice(1);
                  }
                },
                {
                  key: '_getDescendants',
                  value: function (e, n) {
                    var i = this;
                    e.push(n);
                    var r = this.getChildren(n);
                    Array.isArray(r)
                      ? r.forEach(function (t) {
                          return i._getDescendants(e, t);
                        })
                      : Object(X.a)(r) &&
                        r
                          .pipe(Object(J.a)(1), Object(ee.a)(Boolean))
                          .subscribe(function (n) {
                            var r,
                              a = t(n);
                            try {
                              for (a.s(); !(r = a.n()).done; ) {
                                var o = r.value;
                                i._getDescendants(e, o);
                              }
                            } catch (s) {
                              a.e(s);
                            } finally {
                              a.f();
                            }
                          });
                  }
                }
              ]),
              r
            );
          })(
            (function () {
              function e() {
                d(this, e), (this.expansionModel = new q.c(!0));
              }
              return (
                o(e, [
                  {
                    key: 'toggle',
                    value: function (e) {
                      this.expansionModel.toggle(this._trackByValue(e));
                    }
                  },
                  {
                    key: 'expand',
                    value: function (e) {
                      this.expansionModel.select(this._trackByValue(e));
                    }
                  },
                  {
                    key: 'collapse',
                    value: function (e) {
                      this.expansionModel.deselect(this._trackByValue(e));
                    }
                  },
                  {
                    key: 'isExpanded',
                    value: function (e) {
                      return this.expansionModel.isSelected(
                        this._trackByValue(e)
                      );
                    }
                  },
                  {
                    key: 'toggleDescendants',
                    value: function (e) {
                      this.expansionModel.isSelected(this._trackByValue(e))
                        ? this.collapseDescendants(e)
                        : this.expandDescendants(e);
                    }
                  },
                  {
                    key: 'collapseAll',
                    value: function () {
                      this.expansionModel.clear();
                    }
                  },
                  {
                    key: 'expandDescendants',
                    value: function (e) {
                      var t,
                        i = this,
                        r = [e];
                      r.push.apply(r, n(this.getDescendants(e))),
                        (t = this.expansionModel).select.apply(
                          t,
                          n(
                            r.map(function (e) {
                              return i._trackByValue(e);
                            })
                          )
                        );
                    }
                  },
                  {
                    key: 'collapseDescendants',
                    value: function (e) {
                      var t,
                        i = this,
                        r = [e];
                      r.push.apply(r, n(this.getDescendants(e))),
                        (t = this.expansionModel).deselect.apply(
                          t,
                          n(
                            r.map(function (e) {
                              return i._trackByValue(e);
                            })
                          )
                        );
                    }
                  },
                  {
                    key: '_trackByValue',
                    value: function (e) {
                      return this.trackBy ? this.trackBy(e) : e;
                    }
                  }
                ]),
                e
              );
            })()
          ),
          se = new g.q('CDK_TREE_NODE_OUTLET_NODE'),
          ce =
            (((ne = function e(t, n) {
              d(this, e), (this.viewContainer = t), (this._node = n);
            }).ɵfac = function (e) {
              return new (e || ne)(g.Kb(g.P), g.Kb(se, 8));
            }),
            (ne.ɵdir = g.Fb({
              type: ne,
              selectors: [['', 'cdkTreeNodeOutlet', '']]
            })),
            ne),
          le = function e(t) {
            d(this, e), (this.$implicit = t);
          },
          he =
            (((ae = function e(t) {
              d(this, e), (this.template = t);
            }).ɵfac = function (e) {
              return new (e || ae)(g.Kb(g.L));
            }),
            (ae.ɵdir = g.Fb({
              type: ae,
              selectors: [['', 'cdkTreeNodeDef', '']],
              inputs: { when: ['cdkTreeNodeDefWhen', 'when'] }
            })),
            ae),
          ue =
            (((re = (function () {
              function e(t, n) {
                d(this, e),
                  (this._differs = t),
                  (this._changeDetectorRef = n),
                  (this._onDestroy = new $.a()),
                  (this._levels = new Map()),
                  (this.viewChange = new Y.a({
                    start: 0,
                    end: Number.MAX_VALUE
                  }));
              }
              return (
                o(e, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      this._dataDiffer = this._differs
                        .find([])
                        .create(this.trackBy);
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this._nodeOutlet.viewContainer.clear(),
                        this.viewChange.complete(),
                        this._onDestroy.next(),
                        this._onDestroy.complete(),
                        this._dataSource &&
                          'function' == typeof this._dataSource.disconnect &&
                          this.dataSource.disconnect(this),
                        this._dataSubscription &&
                          (this._dataSubscription.unsubscribe(),
                          (this._dataSubscription = null));
                    }
                  },
                  {
                    key: 'ngAfterContentChecked',
                    value: function () {
                      var e = this._nodeDefs.filter(function (e) {
                        return !e.when;
                      });
                      (this._defaultNodeDef = e[0]),
                        this.dataSource &&
                          this._nodeDefs &&
                          !this._dataSubscription &&
                          this._observeRenderChanges();
                    }
                  },
                  {
                    key: '_switchDataSource',
                    value: function (e) {
                      this._dataSource &&
                        'function' == typeof this._dataSource.disconnect &&
                        this.dataSource.disconnect(this),
                        this._dataSubscription &&
                          (this._dataSubscription.unsubscribe(),
                          (this._dataSubscription = null)),
                        e || this._nodeOutlet.viewContainer.clear(),
                        (this._dataSource = e),
                        this._nodeDefs && this._observeRenderChanges();
                    }
                  },
                  {
                    key: '_observeRenderChanges',
                    value: function () {
                      var e,
                        t = this;
                      Object(q.f)(this._dataSource)
                        ? (e = this._dataSource.connect(this))
                        : Object(X.a)(this._dataSource)
                        ? (e = this._dataSource)
                        : Array.isArray(this._dataSource) &&
                          (e = Object(Z.a)(this._dataSource)),
                        e &&
                          (this._dataSubscription = e
                            .pipe(Object(te.a)(this._onDestroy))
                            .subscribe(function (e) {
                              return t.renderNodeChanges(e);
                            }));
                    }
                  },
                  {
                    key: 'renderNodeChanges',
                    value: function (e) {
                      var t = this,
                        n =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : this._dataDiffer,
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : this._nodeOutlet.viewContainer,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        a = n.diff(e);
                      a &&
                        (a.forEachOperation(function (n, a, o) {
                          if (null == n.previousIndex)
                            t.insertNode(e[o], o, i, r);
                          else if (null == o)
                            i.remove(a), t._levels.delete(n.item);
                          else {
                            var s = i.get(a);
                            i.move(s, o);
                          }
                        }),
                        this._changeDetectorRef.detectChanges());
                    }
                  },
                  {
                    key: '_getNodeDef',
                    value: function (e, t) {
                      return 1 === this._nodeDefs.length
                        ? this._nodeDefs.first
                        : this._nodeDefs.find(function (n) {
                            return n.when && n.when(t, e);
                          }) || this._defaultNodeDef;
                    }
                  },
                  {
                    key: 'insertNode',
                    value: function (e, t, n, i) {
                      var r = this._getNodeDef(e, t),
                        a = new le(e);
                      (a.level = this.treeControl.getLevel
                        ? this.treeControl.getLevel(e)
                        : void 0 !== i && this._levels.has(i)
                        ? this._levels.get(i) + 1
                        : 0),
                        this._levels.set(e, a.level),
                        (
                          n || this._nodeOutlet.viewContainer
                        ).createEmbeddedView(r.template, a, t),
                        de.mostRecentTreeNode &&
                          (de.mostRecentTreeNode.data = e);
                    }
                  },
                  {
                    key: 'dataSource',
                    get: function () {
                      return this._dataSource;
                    },
                    set: function (e) {
                      this._dataSource !== e && this._switchDataSource(e);
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || re)(g.Kb(g.s), g.Kb(g.h));
            }),
            (re.ɵcmp = g.Eb({
              type: re,
              selectors: [['cdk-tree']],
              contentQueries: function (e, t, n) {
                var i;
                1 & e && g.Db(n, he, !0),
                  2 & e && g.nc((i = g.Yb())) && (t._nodeDefs = i);
              },
              viewQuery: function (e, t) {
                var n;
                1 & e && g.vc(ce, !0),
                  2 & e && g.nc((n = g.Yb())) && (t._nodeOutlet = n.first);
              },
              hostAttrs: ['role', 'tree', 1, 'cdk-tree'],
              inputs: {
                dataSource: 'dataSource',
                treeControl: 'treeControl',
                trackBy: 'trackBy'
              },
              exportAs: ['cdkTree'],
              decls: 1,
              vars: 0,
              consts: [['cdkTreeNodeOutlet', '']],
              template: function (e, t) {
                1 & e && g.Mb(0, 0);
              },
              directives: [ce],
              encapsulation: 2
            })),
            re),
          de =
            (((ie = (function () {
              function e(t, n) {
                d(this, e),
                  (this._elementRef = t),
                  (this._tree = n),
                  (this._destroyed = new $.a()),
                  (this._dataChanges = new $.a()),
                  (e.mostRecentTreeNode = this),
                  this._elementRef.nativeElement.classList.add('cdk-tree-node'),
                  (this.role = 'treeitem');
              }
              return (
                o(e, [
                  {
                    key: '_setExpanded',
                    value: function (e) {
                      (this._isAriaExpanded = e),
                        this._elementRef.nativeElement.setAttribute(
                          'aria-expanded',
                          '' + e
                        );
                    }
                  },
                  {
                    key: 'ngOnInit',
                    value: function () {
                      (this._parentNodeAriaLevel = (function (e) {
                        for (
                          var t, n = e.parentElement;
                          n &&
                          ((t = void 0),
                          !(null == (t = n.classList)
                            ? void 0
                            : t.contains('cdk-nested-tree-node')) &&
                            !(null == t ? void 0 : t.contains('cdk-tree')));

                        )
                          n = n.parentElement;
                        return n
                          ? n.classList.contains('cdk-nested-tree-node')
                            ? Object(C.e)(n.getAttribute('aria-level'))
                            : 0
                          : -1;
                      })(this._elementRef.nativeElement)),
                        this._elementRef.nativeElement.setAttribute(
                          'aria-level',
                          '' + (this.level + 1)
                        );
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function () {
                      this.isExpanded != this._isAriaExpanded &&
                        this._setExpanded(this.isExpanded);
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      e.mostRecentTreeNode === this &&
                        (e.mostRecentTreeNode = null),
                        this._dataChanges.complete(),
                        this._destroyed.next(),
                        this._destroyed.complete();
                    }
                  },
                  {
                    key: 'focus',
                    value: function () {
                      this._elementRef.nativeElement.focus();
                    }
                  },
                  {
                    key: '_setRoleFromData',
                    value: function () {
                      this.role = 'treeitem';
                    }
                  },
                  {
                    key: 'role',
                    get: function () {
                      return 'treeitem';
                    },
                    set: function (e) {
                      this._elementRef.nativeElement.setAttribute('role', e);
                    }
                  },
                  {
                    key: 'data',
                    get: function () {
                      return this._data;
                    },
                    set: function (e) {
                      e !== this._data &&
                        ((this._data = e),
                        this._setRoleFromData(),
                        this._dataChanges.next());
                    }
                  },
                  {
                    key: 'isExpanded',
                    get: function () {
                      return this._tree.treeControl.isExpanded(this._data);
                    }
                  },
                  {
                    key: 'level',
                    get: function () {
                      return this._tree.treeControl.getLevel
                        ? this._tree.treeControl.getLevel(this._data)
                        : this._parentNodeAriaLevel;
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || ie)(g.Kb(g.l), g.Kb(ue));
            }),
            (ie.ɵdir = g.Fb({
              type: ie,
              selectors: [['cdk-tree-node']],
              inputs: { role: 'role' },
              exportAs: ['cdkTreeNode']
            })),
            (ie.mostRecentTreeNode = null),
            ie);
        var me,
          fe,
          pe,
          be,
          ve,
          ge,
          ke,
          ye,
          _e,
          xe,
          we =
            (((pe = (function (t) {
              s(i, t);
              var n = l(i);
              function i(e, t, r) {
                var a;
                return (
                  d(this, i),
                  ((a = n.call(this, e, t))._elementRef = e),
                  (a._tree = t),
                  (a._differs = r),
                  a._elementRef.nativeElement.classList.add(
                    'cdk-nested-tree-node'
                  ),
                  a
                );
              }
              return (
                o(i, [
                  {
                    key: 'ngAfterContentInit',
                    value: function () {
                      var e = this;
                      this._dataDiffer = this._differs
                        .find([])
                        .create(this._tree.trackBy);
                      var t = this._tree.treeControl.getChildren(this.data);
                      Array.isArray(t)
                        ? this.updateChildrenNodes(t)
                        : Object(X.a)(t) &&
                          t
                            .pipe(Object(te.a)(this._destroyed))
                            .subscribe(function (t) {
                              return e.updateChildrenNodes(t);
                            }),
                        this.nodeOutlet.changes
                          .pipe(Object(te.a)(this._destroyed))
                          .subscribe(function () {
                            return e.updateChildrenNodes();
                          });
                    }
                  },
                  {
                    key: 'ngOnInit',
                    value: function () {
                      e(u(i.prototype), 'ngOnInit', this).call(this);
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function () {
                      e(u(i.prototype), 'ngDoCheck', this).call(this);
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this._clear(),
                        e(u(i.prototype), 'ngOnDestroy', this).call(this);
                    }
                  },
                  {
                    key: 'updateChildrenNodes',
                    value: function (e) {
                      var t = this._getNodeOutlet();
                      e && (this._children = e),
                        t && this._children
                          ? this._tree.renderNodeChanges(
                              this._children,
                              this._dataDiffer,
                              t.viewContainer,
                              this._data
                            )
                          : this._dataDiffer.diff([]);
                    }
                  },
                  {
                    key: '_clear',
                    value: function () {
                      var e = this._getNodeOutlet();
                      e && (e.viewContainer.clear(), this._dataDiffer.diff([]));
                    }
                  },
                  {
                    key: '_getNodeOutlet',
                    value: function () {
                      var e = this,
                        t = this.nodeOutlet;
                      return (
                        t &&
                        t.find(function (t) {
                          return !t._node || t._node === e;
                        })
                      );
                    }
                  }
                ]),
                i
              );
            })(de)).ɵfac = function (e) {
              return new (e || pe)(g.Kb(g.l), g.Kb(ue), g.Kb(g.s));
            }),
            (pe.ɵdir = g.Fb({
              type: pe,
              selectors: [['cdk-nested-tree-node']],
              contentQueries: function (e, t, n) {
                var i;
                1 & e && g.Db(n, ce, !0),
                  2 & e && g.nc((i = g.Yb())) && (t.nodeOutlet = i);
              },
              inputs: {
                role: 'role',
                disabled: 'disabled',
                tabIndex: 'tabIndex'
              },
              exportAs: ['cdkNestedTreeNode'],
              features: [
                g.yb([
                  { provide: de, useExisting: pe },
                  { provide: se, useExisting: pe }
                ]),
                g.wb
              ]
            })),
            pe),
          Ce =
            (((fe = (function () {
              function e(t, n) {
                d(this, e),
                  (this._tree = t),
                  (this._treeNode = n),
                  (this._recursive = !1);
              }
              return (
                o(e, [
                  {
                    key: '_toggle',
                    value: function (e) {
                      this.recursive
                        ? this._tree.treeControl.toggleDescendants(
                            this._treeNode.data
                          )
                        : this._tree.treeControl.toggle(this._treeNode.data),
                        e.stopPropagation();
                    }
                  },
                  {
                    key: 'recursive',
                    get: function () {
                      return this._recursive;
                    },
                    set: function (e) {
                      this._recursive = Object(C.b)(e);
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || fe)(g.Kb(ue), g.Kb(de));
            }),
            (fe.ɵdir = g.Fb({
              type: fe,
              selectors: [['', 'cdkTreeNodeToggle', '']],
              hostBindings: function (e, t) {
                1 & e &&
                  g.Xb('click', function (e) {
                    return t._toggle(e);
                  });
              },
              inputs: { recursive: ['cdkTreeNodeToggleRecursive', 'recursive'] }
            })),
            fe),
          Se =
            (((me = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: me })),
            (me.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || me)();
              }
            })),
            me),
          Pe = a('VRyK'),
          Oe = a('lJxs'),
          Te = Object(v.v)(Object(v.t)(de)),
          Ie =
            (((ve = (function (t) {
              s(i, t);
              var n = l(i);
              function i(e, t, r) {
                var a;
                return (
                  d(this, i),
                  ((a = n.call(this, e, t))._elementRef = e),
                  (a._tree = t),
                  (a.tabIndex = Number(r) || 0),
                  a._elementRef.nativeElement.classList.add('mat-tree-node'),
                  a
                );
              }
              return (
                o(i, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      e(u(i.prototype), 'ngOnInit', this).call(this);
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function () {
                      e(u(i.prototype), 'ngDoCheck', this).call(this);
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      e(u(i.prototype), 'ngOnDestroy', this).call(this);
                    }
                  }
                ]),
                i
              );
            })(Te)).ɵfac = function (e) {
              return new (e || ve)(g.Kb(g.l), g.Kb(ue), g.Vb('tabindex'));
            }),
            (ve.ɵdir = g.Fb({
              type: ve,
              selectors: [['mat-tree-node']],
              inputs: {
                role: 'role',
                disabled: 'disabled',
                tabIndex: 'tabIndex'
              },
              exportAs: ['matTreeNode'],
              features: [g.yb([{ provide: de, useExisting: ve }]), g.wb]
            })),
            ve),
          Me =
            (((be = (function (e) {
              s(n, e);
              var t = l(n);
              function n() {
                return d(this, n), t.apply(this, arguments);
              }
              return n;
            })(he)).ɵfac = function (e) {
              return Ee(e || be);
            }),
            (be.ɵdir = g.Fb({
              type: be,
              selectors: [['', 'matTreeNodeDef', '']],
              inputs: {
                when: ['matTreeNodeDefWhen', 'when'],
                data: ['matTreeNode', 'data']
              },
              features: [g.yb([{ provide: he, useExisting: be }]), g.wb]
            })),
            be),
          Ee = g.Sb(Me),
          ze =
            (((ye = (function (t) {
              s(i, t);
              var n = l(i);
              function i(e, t, r, a) {
                var o;
                return (
                  d(this, i),
                  ((o = n.call(this, e, t, r))._elementRef = e),
                  (o._tree = t),
                  (o._differs = r),
                  (o._disabled = !1),
                  (o.tabIndex = Number(a) || 0),
                  o._elementRef.nativeElement.classList.add(
                    'mat-nested-tree-node'
                  ),
                  o
                );
              }
              return (
                o(i, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      e(u(i.prototype), 'ngOnInit', this).call(this);
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function () {
                      e(u(i.prototype), 'ngDoCheck', this).call(this);
                    }
                  },
                  {
                    key: 'ngAfterContentInit',
                    value: function () {
                      e(u(i.prototype), 'ngAfterContentInit', this).call(this);
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      e(u(i.prototype), 'ngOnDestroy', this).call(this);
                    }
                  },
                  {
                    key: 'disabled',
                    get: function () {
                      return this._disabled;
                    },
                    set: function (e) {
                      this._disabled = Object(C.b)(e);
                    }
                  },
                  {
                    key: 'tabIndex',
                    get: function () {
                      return this.disabled ? -1 : this._tabIndex;
                    },
                    set: function (e) {
                      this._tabIndex = null != e ? e : 0;
                    }
                  }
                ]),
                i
              );
            })(we)).ɵfac = function (e) {
              return new (e || ye)(
                g.Kb(g.l),
                g.Kb(ue),
                g.Kb(g.s),
                g.Vb('tabindex')
              );
            }),
            (ye.ɵdir = g.Fb({
              type: ye,
              selectors: [['mat-nested-tree-node']],
              inputs: {
                role: 'role',
                disabled: 'disabled',
                tabIndex: 'tabIndex',
                node: ['matNestedTreeNode', 'node']
              },
              exportAs: ['matNestedTreeNode'],
              features: [
                g.yb([
                  { provide: we, useExisting: ye },
                  { provide: de, useExisting: ye },
                  { provide: se, useExisting: ye }
                ]),
                g.wb
              ]
            })),
            ye),
          De =
            (((ke = function e(t, n) {
              d(this, e), (this.viewContainer = t), (this._node = n);
            }).ɵfac = function (e) {
              return new (e || ke)(g.Kb(g.P), g.Kb(se, 8));
            }),
            (ke.ɵdir = g.Fb({
              type: ke,
              selectors: [['', 'matTreeNodeOutlet', '']],
              features: [g.yb([{ provide: ce, useExisting: ke }])]
            })),
            ke),
          Re =
            (((ge = (function (e) {
              s(n, e);
              var t = l(n);
              function n() {
                return d(this, n), t.apply(this, arguments);
              }
              return n;
            })(ue)).ɵfac = function (e) {
              return Ae(e || ge);
            }),
            (ge.ɵcmp = g.Eb({
              type: ge,
              selectors: [['mat-tree']],
              viewQuery: function (e, t) {
                var n;
                1 & e && g.vc(De, !0),
                  2 & e && g.nc((n = g.Yb())) && (t._nodeOutlet = n.first);
              },
              hostAttrs: ['role', 'tree', 1, 'mat-tree', 'cdk-tree'],
              exportAs: ['matTree'],
              features: [g.yb([{ provide: ue, useExisting: ge }]), g.wb],
              decls: 1,
              vars: 0,
              consts: [['matTreeNodeOutlet', '']],
              template: function (e, t) {
                1 & e && g.Mb(0, 0);
              },
              directives: [De],
              styles: [
                '.mat-tree{display:block}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word}.mat-nested-tree-node{border-bottom-width:0}\n'
              ],
              encapsulation: 2
            })),
            ge),
          Ae = g.Sb(Re),
          We =
            (((_e = (function (e) {
              s(n, e);
              var t = l(n);
              function n() {
                return d(this, n), t.apply(this, arguments);
              }
              return (
                o(n, [
                  {
                    key: 'recursive',
                    get: function () {
                      return this._recursive;
                    },
                    set: function (e) {
                      this._recursive = Object(C.b)(e);
                    }
                  }
                ]),
                n
              );
            })(Ce)).ɵfac = function (e) {
              return Fe(e || _e);
            }),
            (_e.ɵdir = g.Fb({
              type: _e,
              selectors: [['', 'matTreeNodeToggle', '']],
              inputs: {
                recursive: ['matTreeNodeToggleRecursive', 'recursive']
              },
              features: [g.yb([{ provide: Ce, useExisting: _e }]), g.wb]
            })),
            _e),
          Fe = g.Sb(We),
          Ge =
            (((xe = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: xe })),
            (xe.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || xe)();
              },
              imports: [[Se, v.e], v.e]
            })),
            xe),
          Le = (function (e) {
            s(n, e);
            var t = l(n);
            function n() {
              var e;
              return (
                d(this, n),
                ((e = t.apply(this, arguments))._data = new Y.a([])),
                e
              );
            }
            return (
              o(n, [
                {
                  key: 'connect',
                  value: function (e) {
                    var t = this;
                    return Object(Pe.a)(e.viewChange, this._data).pipe(
                      Object(Oe.a)(function () {
                        return t.data;
                      })
                    );
                  }
                },
                { key: 'disconnect', value: function () {} },
                {
                  key: 'data',
                  get: function () {
                    return this._data.value;
                  },
                  set: function (e) {
                    this._data.next(e);
                  }
                }
              ]),
              n
            );
          })(q.b),
          Ne = a('tyNb'),
          je = a('9Xeq'),
          He = a('mrSG'),
          Be = a('aCrv'),
          Qe = ['header'],
          Ke = ['container'],
          Ve = ['content'],
          Ue = ['invisiblePadding'],
          qe = ['*'];
        function Xe() {
          return {
            checkResizeInterval: 1e3,
            modifyOverflowStyleOfParentScroll: !0,
            resizeBypassRefreshThreshold: 5,
            scrollAnimationTime: 750,
            scrollDebounceTime: 0,
            scrollThrottlingTime: 0,
            stripedTable: !1
          };
        }
        var $e,
          Ye,
          Ze =
            (((Ye = (function () {
              function e(t, n, i, r, a, o) {
                d(this, e),
                  (this.element = t),
                  (this.renderer = n),
                  (this.zone = i),
                  (this.changeDetectorRef = r),
                  (this.window = window),
                  (this.executeRefreshOutsideAngularZone = !1),
                  (this._enableUnequalChildrenSizes = !1),
                  (this.RTL = !1),
                  (this.useMarginInsteadOfTranslate = !1),
                  (this.ssrViewportWidth = 1920),
                  (this.ssrViewportHeight = 1080),
                  (this._items = []),
                  (this.compareItems = function (e, t) {
                    return e === t;
                  }),
                  (this.vsUpdate = new g.n()),
                  (this.vsChange = new g.n()),
                  (this.vsStart = new g.n()),
                  (this.vsEnd = new g.n()),
                  (this.calculatedScrollbarWidth = 0),
                  (this.calculatedScrollbarHeight = 0),
                  (this.padding = 0),
                  (this.previousViewPort = {}),
                  (this.cachedPageSize = 0),
                  (this.previousScrollNumberElements = 0),
                  (this.isAngularUniversalSSR = Object(f.w)(a)),
                  (this.checkResizeInterval = o.checkResizeInterval),
                  (this.modifyOverflowStyleOfParentScroll =
                    o.modifyOverflowStyleOfParentScroll),
                  (this.resizeBypassRefreshThreshold =
                    o.resizeBypassRefreshThreshold),
                  (this.scrollAnimationTime = o.scrollAnimationTime),
                  (this.scrollDebounceTime = o.scrollDebounceTime),
                  (this.scrollThrottlingTime = o.scrollThrottlingTime),
                  (this.scrollbarHeight = o.scrollbarHeight),
                  (this.scrollbarWidth = o.scrollbarWidth),
                  (this.stripedTable = o.stripedTable),
                  (this.horizontal = !1),
                  this.resetWrapGroupDimensions();
              }
              return (
                o(e, [
                  {
                    key: 'updateOnScrollFunction',
                    value: function () {
                      var e = this;
                      this.onScroll = this.scrollDebounceTime
                        ? this.debounce(function () {
                            e.refresh_internal(!1);
                          }, this.scrollDebounceTime)
                        : this.scrollThrottlingTime
                        ? this.throttleTrailing(function () {
                            e.refresh_internal(!1);
                          }, this.scrollThrottlingTime)
                        : function () {
                            e.refresh_internal(!1);
                          };
                    }
                  },
                  {
                    key: 'revertParentOverscroll',
                    value: function () {
                      var e = this.getScrollElement();
                      e &&
                        this.oldParentScrollOverflow &&
                        ((e.style[
                          'overflow-y'
                        ] = this.oldParentScrollOverflow.y),
                        (e.style[
                          'overflow-x'
                        ] = this.oldParentScrollOverflow.x)),
                        (this.oldParentScrollOverflow = void 0);
                    }
                  },
                  {
                    key: 'ngOnInit',
                    value: function () {
                      this.addScrollEventHandlers();
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this.removeScrollEventHandlers(),
                        this.revertParentOverscroll();
                    }
                  },
                  {
                    key: 'ngOnChanges',
                    value: function (e) {
                      var t = this.cachedItemsLength !== this.items.length;
                      (this.cachedItemsLength = this.items.length),
                        this.refresh_internal(
                          t ||
                            !e.items ||
                            !e.items.previousValue ||
                            0 === e.items.previousValue.length
                        );
                    }
                  },
                  {
                    key: 'ngDoCheck',
                    value: function () {
                      if (this.cachedItemsLength !== this.items.length)
                        return (
                          (this.cachedItemsLength = this.items.length),
                          void this.refresh_internal(!0)
                        );
                      if (
                        this.previousViewPort &&
                        this.viewPortItems &&
                        this.viewPortItems.length > 0
                      ) {
                        for (
                          var e = !1, t = 0;
                          t < this.viewPortItems.length;
                          ++t
                        )
                          if (
                            !this.compareItems(
                              this.items[
                                this.previousViewPort.startIndexWithBuffer + t
                              ],
                              this.viewPortItems[t]
                            )
                          ) {
                            e = !0;
                            break;
                          }
                        e && this.refresh_internal(!0);
                      }
                    }
                  },
                  {
                    key: 'refresh',
                    value: function () {
                      this.refresh_internal(!0);
                    }
                  },
                  {
                    key: 'invalidateAllCachedMeasurements',
                    value: function () {
                      (this.wrapGroupDimensions = {
                        maxChildSizePerWrapGroup: [],
                        numberOfKnownWrapGroupChildSizes: 0,
                        sumOfKnownWrapGroupChildWidths: 0,
                        sumOfKnownWrapGroupChildHeights: 0
                      }),
                        (this.minMeasuredChildWidth = void 0),
                        (this.minMeasuredChildHeight = void 0),
                        this.refresh_internal(!1);
                    }
                  },
                  {
                    key: 'invalidateCachedMeasurementForItem',
                    value: function (e) {
                      if (this.enableUnequalChildrenSizes) {
                        var t = this.items && this.items.indexOf(e);
                        t >= 0 && this.invalidateCachedMeasurementAtIndex(t);
                      } else
                        (this.minMeasuredChildWidth = void 0),
                          (this.minMeasuredChildHeight = void 0);
                      this.refresh_internal(!1);
                    }
                  },
                  {
                    key: 'invalidateCachedMeasurementAtIndex',
                    value: function (e) {
                      if (this.enableUnequalChildrenSizes) {
                        var t = this.wrapGroupDimensions
                          .maxChildSizePerWrapGroup[e];
                        t &&
                          ((this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                            e
                          ] = void 0),
                          --this.wrapGroupDimensions
                            .numberOfKnownWrapGroupChildSizes,
                          (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -=
                            t.childWidth || 0),
                          (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -=
                            t.childHeight || 0));
                      } else
                        (this.minMeasuredChildWidth = void 0),
                          (this.minMeasuredChildHeight = void 0);
                      this.refresh_internal(!1);
                    }
                  },
                  {
                    key: 'scrollInto',
                    value: function (e) {
                      var t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        a = this.items.indexOf(e);
                      -1 !== a && this.scrollToIndex(a, t, n, i, r);
                    }
                  },
                  {
                    key: 'scrollToIndex',
                    value: function (e) {
                      var t = this,
                        n =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        a = arguments.length > 4 ? arguments[4] : void 0,
                        o = 5,
                        s = function r() {
                          if (--o <= 0) a && a();
                          else {
                            var s = t.calculateDimensions(),
                              c = Math.min(Math.max(e, 0), s.itemCount - 1);
                            t.previousViewPort.startIndex !== c
                              ? t.scrollToIndex_internal(e, n, i, 0, r)
                              : a && a();
                          }
                        };
                      this.scrollToIndex_internal(e, n, i, r, s);
                    }
                  },
                  {
                    key: 'scrollToIndex_internal',
                    value: function (e) {
                      var t =
                          !(arguments.length > 1 && void 0 !== arguments[1]) ||
                          arguments[1],
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        r = arguments.length > 4 ? arguments[4] : void 0;
                      i = void 0 === i ? this.scrollAnimationTime : i;
                      var a = this.calculateDimensions(),
                        o = this.calculatePadding(e, a) + n;
                      t || (o -= a.wrapGroupsPerPage * a[this._childScrollDim]),
                        this.scrollToPosition(o, i, r);
                    }
                  },
                  {
                    key: 'scrollToPosition',
                    value: function (e, t, n) {
                      var i = this;
                      (e += this.getElementsOffset()),
                        (t = void 0 === t ? this.scrollAnimationTime : t);
                      var r,
                        a = this.getScrollElement();
                      if (
                        (this.currentTween &&
                          (this.currentTween.stop(),
                          (this.currentTween = void 0)),
                        !t)
                      )
                        return (
                          this.renderer.setProperty(a, this._scrollType, e),
                          void this.refresh_internal(!1, n)
                        );
                      var o = { scrollPosition: a[this._scrollType] },
                        s = new Be.Tween(o)
                          .to({ scrollPosition: e }, t)
                          .easing(Be.Easing.Quadratic.Out)
                          .onUpdate(function (e) {
                            isNaN(e.scrollPosition) ||
                              (i.renderer.setProperty(
                                a,
                                i._scrollType,
                                e.scrollPosition
                              ),
                              i.refresh_internal(!1));
                          })
                          .onStop(function () {
                            cancelAnimationFrame(r);
                          })
                          .start();
                      (function t(a) {
                        s.isPlaying() &&
                          (s.update(a),
                          o.scrollPosition !== e
                            ? i.zone.runOutsideAngular(function () {
                                r = requestAnimationFrame(t);
                              })
                            : i.refresh_internal(!1, n));
                      })(),
                        (this.currentTween = s);
                    }
                  },
                  {
                    key: 'getElementSize',
                    value: function (e) {
                      var t = e.getBoundingClientRect(),
                        n = getComputedStyle(e),
                        i = parseInt(n['margin-top'], 10) || 0,
                        r = parseInt(n['margin-bottom'], 10) || 0,
                        a = parseInt(n['margin-left'], 10) || 0,
                        o = parseInt(n['margin-right'], 10) || 0;
                      return {
                        top: t.top + i,
                        bottom: t.bottom + r,
                        left: t.left + a,
                        right: t.right + o,
                        width: t.width + a + o,
                        height: t.height + i + r
                      };
                    }
                  },
                  {
                    key: 'checkScrollElementResized',
                    value: function () {
                      var e,
                        t = this.getElementSize(this.getScrollElement());
                      if (this.previousScrollBoundingRect) {
                        var n = Math.abs(
                            t.width - this.previousScrollBoundingRect.width
                          ),
                          i = Math.abs(
                            t.height - this.previousScrollBoundingRect.height
                          );
                        e =
                          n > this.resizeBypassRefreshThreshold ||
                          i > this.resizeBypassRefreshThreshold;
                      } else e = !0;
                      e &&
                        ((this.previousScrollBoundingRect = t),
                        t.width > 0 &&
                          t.height > 0 &&
                          this.refresh_internal(!1));
                    }
                  },
                  {
                    key: 'updateDirection',
                    value: function () {
                      this.horizontal
                        ? ((this._childScrollDim = 'childWidth'),
                          (this._invisiblePaddingProperty = 'scaleX'),
                          (this._marginDir = 'margin-left'),
                          (this._offsetType = 'offsetLeft'),
                          (this._pageOffsetType = 'pageXOffset'),
                          (this._scrollType = 'scrollLeft'),
                          (this._translateDir = 'translateX'))
                        : ((this._childScrollDim = 'childHeight'),
                          (this._invisiblePaddingProperty = 'scaleY'),
                          (this._marginDir = 'margin-top'),
                          (this._offsetType = 'offsetTop'),
                          (this._pageOffsetType = 'pageYOffset'),
                          (this._scrollType = 'scrollTop'),
                          (this._translateDir = 'translateY'));
                    }
                  },
                  {
                    key: 'debounce',
                    value: function (e, t) {
                      var n = this.throttleTrailing(e, t),
                        i = function () {
                          n.cancel(), n.apply(this, arguments);
                        };
                      return (
                        (i.cancel = function () {
                          n.cancel();
                        }),
                        i
                      );
                    }
                  },
                  {
                    key: 'throttleTrailing',
                    value: function (e, t) {
                      var n = void 0,
                        i = arguments,
                        r = function () {
                          var r = this;
                          (i = arguments),
                            n ||
                              (t <= 0
                                ? e.apply(r, i)
                                : (n = setTimeout(function () {
                                    (n = void 0), e.apply(r, i);
                                  }, t)));
                        };
                      return (
                        (r.cancel = function () {
                          n && (clearTimeout(n), (n = void 0));
                        }),
                        r
                      );
                    }
                  },
                  {
                    key: 'refresh_internal',
                    value: function (e, t) {
                      var n = this,
                        i =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 2;
                      if (
                        e &&
                        this.previousViewPort &&
                        this.previousViewPort.scrollStartPosition > 0
                      ) {
                        var r = this.previousViewPort,
                          a = this.viewPortItems,
                          o = t;
                        t = function () {
                          var e =
                            n.previousViewPort.scrollLength - r.scrollLength;
                          if (e > 0 && n.viewPortItems) {
                            var t = a[0],
                              i = n.items.findIndex(function (e) {
                                return n.compareItems(t, e);
                              });
                            if (i > n.previousViewPort.startIndexWithBuffer) {
                              for (
                                var s = !1, c = 1;
                                c < n.viewPortItems.length;
                                ++c
                              )
                                if (!n.compareItems(n.items[i + c], a[c])) {
                                  s = !0;
                                  break;
                                }
                              if (!s)
                                return void n.scrollToPosition(
                                  n.previousViewPort.scrollStartPosition + e,
                                  0,
                                  o
                                );
                            }
                          }
                          o && o();
                        };
                      }
                      this.zone.runOutsideAngular(function () {
                        requestAnimationFrame(function () {
                          e && n.resetWrapGroupDimensions();
                          var r = n.calculateViewport(),
                            a =
                              e ||
                              r.startIndex !== n.previousViewPort.startIndex,
                            o = e || r.endIndex !== n.previousViewPort.endIndex,
                            s =
                              r.scrollLength !==
                              n.previousViewPort.scrollLength,
                            c = r.padding !== n.previousViewPort.padding,
                            l =
                              r.scrollStartPosition !==
                                n.previousViewPort.scrollStartPosition ||
                              r.scrollEndPosition !==
                                n.previousViewPort.scrollEndPosition ||
                              r.maxScrollPosition !==
                                n.previousViewPort.maxScrollPosition;
                          if (
                            ((n.previousViewPort = r),
                            s &&
                              (n.renderer.setStyle(
                                n.invisiblePaddingElementRef.nativeElement,
                                'transform',
                                ''
                                  .concat(n._invisiblePaddingProperty, '(')
                                  .concat(r.scrollLength, ')')
                              ),
                              n.renderer.setStyle(
                                n.invisiblePaddingElementRef.nativeElement,
                                'webkitTransform',
                                ''
                                  .concat(n._invisiblePaddingProperty, '(')
                                  .concat(r.scrollLength, ')')
                              )),
                            c &&
                              (n.useMarginInsteadOfTranslate
                                ? n.renderer.setStyle(
                                    n.contentElementRef.nativeElement,
                                    n._marginDir,
                                    r.padding + 'px'
                                  )
                                : (n.renderer.setStyle(
                                    n.contentElementRef.nativeElement,
                                    'transform',
                                    ''
                                      .concat(n._translateDir, '(')
                                      .concat(r.padding, 'px)')
                                  ),
                                  n.renderer.setStyle(
                                    n.contentElementRef.nativeElement,
                                    'webkitTransform',
                                    ''
                                      .concat(n._translateDir, '(')
                                      .concat(r.padding, 'px)')
                                  ))),
                            n.headerElementRef)
                          ) {
                            var h = n.getScrollElement()[n._scrollType],
                              u = n.getElementsOffset(),
                              d = Math.max(
                                h -
                                  r.padding -
                                  u +
                                  n.headerElementRef.nativeElement.clientHeight,
                                0
                              );
                            n.renderer.setStyle(
                              n.headerElementRef.nativeElement,
                              'transform',
                              ''.concat(n._translateDir, '(').concat(d, 'px)')
                            ),
                              n.renderer.setStyle(
                                n.headerElementRef.nativeElement,
                                'webkitTransform',
                                ''.concat(n._translateDir, '(').concat(d, 'px)')
                              );
                          }
                          var m =
                            a || o
                              ? {
                                  startIndex: r.startIndex,
                                  endIndex: r.endIndex,
                                  scrollStartPosition: r.scrollStartPosition,
                                  scrollEndPosition: r.scrollEndPosition,
                                  startIndexWithBuffer: r.startIndexWithBuffer,
                                  endIndexWithBuffer: r.endIndexWithBuffer,
                                  maxScrollPosition: r.maxScrollPosition
                                }
                              : void 0;
                          if (a || o || l) {
                            var f = function () {
                              (n.viewPortItems =
                                r.startIndexWithBuffer >= 0 &&
                                r.endIndexWithBuffer >= 0
                                  ? n.items.slice(
                                      r.startIndexWithBuffer,
                                      r.endIndexWithBuffer + 1
                                    )
                                  : []),
                                n.vsUpdate.emit(n.viewPortItems),
                                a && n.vsStart.emit(m),
                                o && n.vsEnd.emit(m),
                                (a || o) &&
                                  (n.changeDetectorRef.markForCheck(),
                                  n.vsChange.emit(m)),
                                i > 0
                                  ? n.refresh_internal(!1, t, i - 1)
                                  : t && t();
                            };
                            n.executeRefreshOutsideAngularZone
                              ? f()
                              : n.zone.run(f);
                          } else {
                            if (i > 0 && (s || c))
                              return void n.refresh_internal(!1, t, i - 1);
                            t && t();
                          }
                        });
                      });
                    }
                  },
                  {
                    key: 'getScrollElement',
                    value: function () {
                      return this.parentScroll instanceof Window
                        ? document.scrollingElement ||
                            document.documentElement ||
                            document.body
                        : this.parentScroll || this.element.nativeElement;
                    }
                  },
                  {
                    key: 'addScrollEventHandlers',
                    value: function () {
                      var e = this;
                      if (!this.isAngularUniversalSSR) {
                        var t = this.getScrollElement();
                        this.removeScrollEventHandlers(),
                          this.zone.runOutsideAngular(function () {
                            e.parentScroll instanceof Window
                              ? ((e.disposeScrollHandler = e.renderer.listen(
                                  'window',
                                  'scroll',
                                  e.onScroll
                                )),
                                (e.disposeResizeHandler = e.renderer.listen(
                                  'window',
                                  'resize',
                                  e.onScroll
                                )))
                              : ((e.disposeScrollHandler = e.renderer.listen(
                                  t,
                                  'scroll',
                                  e.onScroll
                                )),
                                e._checkResizeInterval > 0 &&
                                  (e.checkScrollElementResizedTimer = setInterval(
                                    function () {
                                      e.checkScrollElementResized();
                                    },
                                    e._checkResizeInterval
                                  )));
                          });
                      }
                    }
                  },
                  {
                    key: 'removeScrollEventHandlers',
                    value: function () {
                      this.checkScrollElementResizedTimer &&
                        clearInterval(this.checkScrollElementResizedTimer),
                        this.disposeScrollHandler &&
                          (this.disposeScrollHandler(),
                          (this.disposeScrollHandler = void 0)),
                        this.disposeResizeHandler &&
                          (this.disposeResizeHandler(),
                          (this.disposeResizeHandler = void 0));
                    }
                  },
                  {
                    key: 'getElementsOffset',
                    value: function () {
                      if (this.isAngularUniversalSSR) return 0;
                      var e = 0;
                      if (
                        (this.containerElementRef &&
                          this.containerElementRef.nativeElement &&
                          (e += this.containerElementRef.nativeElement[
                            this._offsetType
                          ]),
                        this.parentScroll)
                      ) {
                        var t = this.getScrollElement(),
                          n = this.getElementSize(this.element.nativeElement),
                          i = this.getElementSize(t);
                        (e += this.horizontal
                          ? n.left - i.left
                          : n.top - i.top),
                          this.parentScroll instanceof Window ||
                            (e += t[this._scrollType]);
                      }
                      return e;
                    }
                  },
                  {
                    key: 'countItemsPerWrapGroup',
                    value: function () {
                      if (this.isAngularUniversalSSR)
                        return Math.round(
                          this.horizontal
                            ? this.ssrViewportHeight / this.ssrChildHeight
                            : this.ssrViewportWidth / this.ssrChildWidth
                        );
                      var e = this.horizontal ? 'offsetLeft' : 'offsetTop',
                        t = (
                          (this.containerElementRef &&
                            this.containerElementRef.nativeElement) ||
                          this.contentElementRef.nativeElement
                        ).children,
                        n = t ? t.length : 0;
                      if (0 === n) return 1;
                      for (var i = t[0][e], r = 1; r < n && i === t[r][e]; )
                        ++r;
                      return r;
                    }
                  },
                  {
                    key: 'getScrollStartPosition',
                    value: function () {
                      var e = void 0;
                      return (
                        this.parentScroll instanceof Window &&
                          (e = window[this._pageOffsetType]),
                        e || this.getScrollElement()[this._scrollType] || 0
                      );
                    }
                  },
                  {
                    key: 'resetWrapGroupDimensions',
                    value: function () {
                      var e = this.wrapGroupDimensions;
                      if (
                        (this.invalidateAllCachedMeasurements(),
                        this.enableUnequalChildrenSizes &&
                          e &&
                          0 !== e.numberOfKnownWrapGroupChildSizes)
                      )
                        for (
                          var t = this.countItemsPerWrapGroup(), n = 0;
                          n < e.maxChildSizePerWrapGroup.length;
                          ++n
                        ) {
                          var i = e.maxChildSizePerWrapGroup[n];
                          if (i && i.items && i.items.length) {
                            if (i.items.length !== t) return;
                            for (var r = !1, a = t * n, o = 0; o < t; ++o)
                              if (
                                !this.compareItems(
                                  i.items[o],
                                  this.items[a + o]
                                )
                              ) {
                                r = !0;
                                break;
                              }
                            r ||
                              (++this.wrapGroupDimensions
                                .numberOfKnownWrapGroupChildSizes,
                              (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths +=
                                i.childWidth || 0),
                              (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights +=
                                i.childHeight || 0),
                              (this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                                n
                              ] = i));
                          }
                        }
                    }
                  },
                  {
                    key: 'calculateDimensions',
                    value: function () {
                      var e = this.getScrollElement();
                      (this.calculatedScrollbarHeight = Math.max(
                        Math.min(e.offsetHeight - e.clientHeight, 25),
                        this.calculatedScrollbarHeight
                      )),
                        (this.calculatedScrollbarWidth = Math.max(
                          Math.min(e.offsetWidth - e.clientWidth, 25),
                          this.calculatedScrollbarWidth
                        ));
                      var t,
                        n,
                        i,
                        r =
                          e.offsetWidth -
                          (this.scrollbarWidth ||
                            this.calculatedScrollbarWidth ||
                            (this.horizontal ? 0 : 25)),
                        a =
                          e.offsetHeight -
                          (this.scrollbarHeight ||
                            this.calculatedScrollbarHeight ||
                            (this.horizontal ? 25 : 0)),
                        o =
                          (this.containerElementRef &&
                            this.containerElementRef.nativeElement) ||
                          this.contentElementRef.nativeElement,
                        s = this.countItemsPerWrapGroup();
                      if (this.isAngularUniversalSSR) {
                        (r = this.ssrViewportWidth),
                          (a = this.ssrViewportHeight),
                          (n = this.ssrChildWidth),
                          (i = this.ssrChildHeight);
                        var c = Math.max(Math.ceil(r / n), 1),
                          l = Math.max(Math.ceil(a / i), 1);
                        t = this.horizontal ? c : l;
                      } else if (this.enableUnequalChildrenSizes) {
                        var h =
                            e[this._scrollType] -
                            (this.previousViewPort
                              ? this.previousViewPort.padding
                              : 0),
                          u = this.previousViewPort.startIndexWithBuffer || 0,
                          d = Math.ceil(u / s),
                          m = 0,
                          f = 0,
                          p = 0,
                          b = 0;
                        t = 0;
                        for (var v = 0; v < o.children.length; ++v) {
                          ++u;
                          var g = this.getElementSize(o.children[v]);
                          if (
                            ((m = Math.max(m, g.width)),
                            (f = Math.max(f, g.height)),
                            u % s == 0)
                          ) {
                            var k = this.wrapGroupDimensions
                              .maxChildSizePerWrapGroup[d];
                            k &&
                              (--this.wrapGroupDimensions
                                .numberOfKnownWrapGroupChildSizes,
                              (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths -=
                                k.childWidth || 0),
                              (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights -=
                                k.childHeight || 0)),
                              ++this.wrapGroupDimensions
                                .numberOfKnownWrapGroupChildSizes;
                            var y = this.items.slice(u - s, u);
                            if (
                              ((this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                                d
                              ] = { childWidth: m, childHeight: f, items: y }),
                              (this.wrapGroupDimensions.sumOfKnownWrapGroupChildWidths += m),
                              (this.wrapGroupDimensions.sumOfKnownWrapGroupChildHeights += f),
                              this.horizontal)
                            ) {
                              var _ = Math.min(m, Math.max(r - p, 0));
                              if (h > 0) {
                                var x = Math.min(h, _);
                                (_ -= x), (h -= x);
                              }
                              (p += _), _ > 0 && r >= p && ++t;
                            } else {
                              var w = Math.min(f, Math.max(a - b, 0));
                              if (h > 0) {
                                var C = Math.min(h, w);
                                (w -= C), (h -= C);
                              }
                              (b += w), w > 0 && a >= b && ++t;
                            }
                            ++d, (m = 0), (f = 0);
                          }
                        }
                        var S =
                            this.wrapGroupDimensions
                              .sumOfKnownWrapGroupChildWidths /
                            this.wrapGroupDimensions
                              .numberOfKnownWrapGroupChildSizes,
                          P =
                            this.wrapGroupDimensions
                              .sumOfKnownWrapGroupChildHeights /
                            this.wrapGroupDimensions
                              .numberOfKnownWrapGroupChildSizes;
                        (n = this.childWidth || S || r),
                          (i = this.childHeight || P || a),
                          this.horizontal
                            ? r > p && (t += Math.ceil((r - p) / n))
                            : a > b && (t += Math.ceil((a - b) / i));
                      } else {
                        if (o.children.length > 0) {
                          (this.childWidth && this.childHeight) ||
                            (!this.minMeasuredChildWidth &&
                              r > 0 &&
                              (this.minMeasuredChildWidth = r),
                            !this.minMeasuredChildHeight &&
                              a > 0 &&
                              (this.minMeasuredChildHeight = a));
                          var O = this.getElementSize(o.children[0]);
                          (this.minMeasuredChildWidth = Math.min(
                            this.minMeasuredChildWidth,
                            O.width
                          )),
                            (this.minMeasuredChildHeight = Math.min(
                              this.minMeasuredChildHeight,
                              O.height
                            ));
                        }
                        (n =
                          this.childWidth || this.minMeasuredChildWidth || r),
                          (i =
                            this.childHeight ||
                            this.minMeasuredChildHeight ||
                            a);
                        var T = Math.max(Math.ceil(r / n), 1),
                          I = Math.max(Math.ceil(a / i), 1);
                        t = this.horizontal ? T : I;
                      }
                      var M = this.items.length,
                        E = s * t,
                        z = M / E,
                        D = Math.ceil(M / s),
                        R = 0,
                        A = this.horizontal ? n : i;
                      if (this.enableUnequalChildrenSizes) {
                        for (var W = 0, F = 0; F < D; ++F) {
                          var G =
                            this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                              F
                            ] &&
                            this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                              F
                            ][this._childScrollDim];
                          G ? (R += G) : ++W;
                        }
                        R += Math.round(W * A);
                      } else R = D * A;
                      this.headerElementRef &&
                        (R += this.headerElementRef.nativeElement.clientHeight);
                      var L = this.horizontal ? r : a;
                      return {
                        childHeight: i,
                        childWidth: n,
                        itemCount: M,
                        itemsPerPage: E,
                        itemsPerWrapGroup: s,
                        maxScrollPosition: Math.max(R - L, 0),
                        pageCount_fractional: z,
                        scrollLength: R,
                        viewportLength: L,
                        wrapGroupsPerPage: t
                      };
                    }
                  },
                  {
                    key: 'calculatePadding',
                    value: function (e, t) {
                      if (0 === t.itemCount) return 0;
                      var n = t[this._childScrollDim],
                        i = Math.floor(e / t.itemsPerWrapGroup) || 0;
                      if (!this.enableUnequalChildrenSizes) return n * i;
                      for (var r = 0, a = 0, o = 0; o < i; ++o) {
                        var s =
                          this.wrapGroupDimensions.maxChildSizePerWrapGroup[
                            o
                          ] &&
                          this.wrapGroupDimensions.maxChildSizePerWrapGroup[o][
                            this._childScrollDim
                          ];
                        s ? (a += s) : ++r;
                      }
                      return (a += Math.round(r * n));
                    }
                  },
                  {
                    key: 'calculatePageInfo',
                    value: function (e, t) {
                      var n = 0;
                      if (this.enableUnequalChildrenSizes) {
                        for (
                          var i = Math.ceil(t.itemCount / t.itemsPerWrapGroup),
                            r = 0,
                            a = t[this._childScrollDim],
                            o = 0;
                          o < i;
                          ++o
                        )
                          if (
                            e <
                            (r +=
                              (this.wrapGroupDimensions
                                .maxChildSizePerWrapGroup[o] &&
                                this.wrapGroupDimensions
                                  .maxChildSizePerWrapGroup[o][
                                  this._childScrollDim
                                ]) ||
                              a)
                          ) {
                            n = o / i;
                            break;
                          }
                      } else n = e / t.scrollLength;
                      var s =
                          Math.min(
                            Math.max(n * t.pageCount_fractional, 0),
                            t.pageCount_fractional
                          ) * t.itemsPerPage,
                        c = t.itemCount - t.itemsPerPage - 1,
                        l = Math.min(Math.floor(s), c);
                      if (((l -= l % t.itemsPerWrapGroup), this.stripedTable)) {
                        var h = 2 * t.itemsPerWrapGroup;
                        l % h != 0 && (l = Math.max(l - (l % h), 0));
                      }
                      var u = Math.ceil(s) + t.itemsPerPage - 1,
                        d = (u + 1) % t.itemsPerWrapGroup;
                      d > 0 && (u += t.itemsPerWrapGroup - d),
                        isNaN(l) && (l = 0),
                        isNaN(u) && (u = 0),
                        (l = Math.min(Math.max(l, 0), t.itemCount - 1)),
                        (u = Math.min(Math.max(u, 0), t.itemCount - 1));
                      var m = this.bufferAmount * t.itemsPerWrapGroup;
                      return {
                        startIndex: l,
                        endIndex: u,
                        startIndexWithBuffer: Math.min(
                          Math.max(l - m, 0),
                          t.itemCount - 1
                        ),
                        endIndexWithBuffer: Math.min(
                          Math.max(u + m, 0),
                          t.itemCount - 1
                        ),
                        scrollStartPosition: e,
                        scrollEndPosition: e + t.viewportLength,
                        maxScrollPosition: t.maxScrollPosition
                      };
                    }
                  },
                  {
                    key: 'calculateViewport',
                    value: function () {
                      var e = this.calculateDimensions(),
                        t = this.getElementsOffset(),
                        n = this.getScrollStartPosition();
                      n > e.scrollLength + t &&
                      !(this.parentScroll instanceof Window)
                        ? (n = e.scrollLength)
                        : (n -= t),
                        (n = Math.max(0, n));
                      var i = this.calculatePageInfo(n, e),
                        r = this.calculatePadding(i.startIndexWithBuffer, e),
                        a = e.scrollLength;
                      return {
                        startIndex: i.startIndex,
                        endIndex: i.endIndex,
                        startIndexWithBuffer: i.startIndexWithBuffer,
                        endIndexWithBuffer: i.endIndexWithBuffer,
                        padding: Math.round(r),
                        scrollLength: Math.round(a),
                        scrollStartPosition: i.scrollStartPosition,
                        scrollEndPosition: i.scrollEndPosition,
                        maxScrollPosition: i.maxScrollPosition
                      };
                    }
                  },
                  {
                    key: 'viewPortInfo',
                    get: function () {
                      var e = this.previousViewPort || {};
                      return {
                        startIndex: e.startIndex || 0,
                        endIndex: e.endIndex || 0,
                        scrollStartPosition: e.scrollStartPosition || 0,
                        scrollEndPosition: e.scrollEndPosition || 0,
                        maxScrollPosition: e.maxScrollPosition || 0,
                        startIndexWithBuffer: e.startIndexWithBuffer || 0,
                        endIndexWithBuffer: e.endIndexWithBuffer || 0
                      };
                    }
                  },
                  {
                    key: 'enableUnequalChildrenSizes',
                    get: function () {
                      return this._enableUnequalChildrenSizes;
                    },
                    set: function (e) {
                      this._enableUnequalChildrenSizes !== e &&
                        ((this._enableUnequalChildrenSizes = e),
                        (this.minMeasuredChildWidth = void 0),
                        (this.minMeasuredChildHeight = void 0));
                    }
                  },
                  {
                    key: 'bufferAmount',
                    get: function () {
                      return 'number' == typeof this._bufferAmount &&
                        this._bufferAmount >= 0
                        ? this._bufferAmount
                        : this.enableUnequalChildrenSizes
                        ? 5
                        : 0;
                    },
                    set: function (e) {
                      this._bufferAmount = e;
                    }
                  },
                  {
                    key: 'scrollThrottlingTime',
                    get: function () {
                      return this._scrollThrottlingTime;
                    },
                    set: function (e) {
                      (this._scrollThrottlingTime = e),
                        this.updateOnScrollFunction();
                    }
                  },
                  {
                    key: 'scrollDebounceTime',
                    get: function () {
                      return this._scrollDebounceTime;
                    },
                    set: function (e) {
                      (this._scrollDebounceTime = e),
                        this.updateOnScrollFunction();
                    }
                  },
                  {
                    key: 'checkResizeInterval',
                    get: function () {
                      return this._checkResizeInterval;
                    },
                    set: function (e) {
                      this._checkResizeInterval !== e &&
                        ((this._checkResizeInterval = e),
                        this.addScrollEventHandlers());
                    }
                  },
                  {
                    key: 'items',
                    get: function () {
                      return this._items;
                    },
                    set: function (e) {
                      e !== this._items &&
                        ((this._items = e || []), this.refresh_internal(!0));
                    }
                  },
                  {
                    key: 'horizontal',
                    get: function () {
                      return this._horizontal;
                    },
                    set: function (e) {
                      (this._horizontal = e), this.updateDirection();
                    }
                  },
                  {
                    key: 'parentScroll',
                    get: function () {
                      return this._parentScroll;
                    },
                    set: function (e) {
                      if (this._parentScroll !== e) {
                        this.revertParentOverscroll(),
                          (this._parentScroll = e),
                          this.addScrollEventHandlers();
                        var t = this.getScrollElement();
                        this.modifyOverflowStyleOfParentScroll &&
                          t !== this.element.nativeElement &&
                          ((this.oldParentScrollOverflow = {
                            x: t.style['overflow-x'],
                            y: t.style['overflow-y']
                          }),
                          (t.style['overflow-y'] = this.horizontal
                            ? 'visible'
                            : 'auto'),
                          (t.style['overflow-x'] = this.horizontal
                            ? 'auto'
                            : 'visible'));
                      }
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Ye)(
                g.Kb(g.l),
                g.Kb(g.E),
                g.Kb(g.z),
                g.Kb(g.h),
                g.Kb(g.B),
                g.Kb('virtual-scroller-default-options', 8)
              );
            }),
            (Ye.ɵcmp = g.Eb({
              type: Ye,
              selectors: [['virtual-scroller'], ['', 'virtualScroller', '']],
              contentQueries: function (e, t, n) {
                var i;
                1 & e && (g.Db(n, Qe, !0, g.l), g.Db(n, Ke, !0, g.l)),
                  2 & e &&
                    (g.nc((i = g.Yb())) && (t.headerElementRef = i.first),
                    g.nc((i = g.Yb())) && (t.containerElementRef = i.first));
              },
              viewQuery: function (e, t) {
                var n;
                1 & e && (g.vc(Ve, !0, g.l), g.vc(Ue, !0, g.l)),
                  2 & e &&
                    (g.nc((n = g.Yb())) && (t.contentElementRef = n.first),
                    g.nc((n = g.Yb())) &&
                      (t.invisiblePaddingElementRef = n.first));
              },
              hostVars: 8,
              hostBindings: function (e, t) {
                2 & e &&
                  g.Cb('horizontal', t.horizontal)('vertical', !t.horizontal)(
                    'selfScroll',
                    !t.parentScroll
                  )('rtl', t.RTL);
              },
              inputs: {
                executeRefreshOutsideAngularZone:
                  'executeRefreshOutsideAngularZone',
                RTL: 'RTL',
                useMarginInsteadOfTranslate: 'useMarginInsteadOfTranslate',
                ssrViewportWidth: 'ssrViewportWidth',
                ssrViewportHeight: 'ssrViewportHeight',
                compareItems: 'compareItems',
                checkResizeInterval: 'checkResizeInterval',
                modifyOverflowStyleOfParentScroll:
                  'modifyOverflowStyleOfParentScroll',
                resizeBypassRefreshThreshold: 'resizeBypassRefreshThreshold',
                scrollAnimationTime: 'scrollAnimationTime',
                scrollDebounceTime: 'scrollDebounceTime',
                scrollThrottlingTime: 'scrollThrottlingTime',
                scrollbarHeight: 'scrollbarHeight',
                scrollbarWidth: 'scrollbarWidth',
                stripedTable: 'stripedTable',
                horizontal: 'horizontal',
                enableUnequalChildrenSizes: 'enableUnequalChildrenSizes',
                bufferAmount: 'bufferAmount',
                items: 'items',
                parentScroll: 'parentScroll',
                childWidth: 'childWidth',
                childHeight: 'childHeight',
                ssrChildWidth: 'ssrChildWidth',
                ssrChildHeight: 'ssrChildHeight'
              },
              outputs: {
                vsUpdate: 'vsUpdate',
                vsChange: 'vsChange',
                vsStart: 'vsStart',
                vsEnd: 'vsEnd'
              },
              exportAs: ['virtualScroller'],
              features: [g.xb],
              ngContentSelectors: qe,
              decls: 5,
              vars: 0,
              consts: [
                [1, 'total-padding'],
                ['invisiblePadding', ''],
                [1, 'scrollable-content'],
                ['content', '']
              ],
              template: function (e, t) {
                1 & e &&
                  (g.hc(),
                  g.Lb(0, 'div', 0, 1),
                  g.Qb(2, 'div', 2, 3),
                  g.gc(4),
                  g.Pb());
              },
              styles: [
                '[_nghost-%COMP%] {\n      position: relative;\n\t  \tdisplay: block;\n      -webkit-overflow-scrolling: touch;\n    }\n\n\t\t.horizontal.selfScroll[_nghost-%COMP%] {\n      overflow-y: visible;\n      overflow-x: auto;\n\t\t}\n\n\t\t.horizontal.selfScroll.rtl[_nghost-%COMP%] {\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\n\t\t.vertical.selfScroll[_nghost-%COMP%] {\n      overflow-y: auto;\n      overflow-x: visible;\n\t\t}\n\n    .scrollable-content[_ngcontent-%COMP%] {\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      max-width: 100vw;\n      max-height: 100vh;\n      position: absolute;\n    }\n\n\t\t.scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%] {\n\t\t\twhite-space: nowrap;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%] {\n\t\t\tdisplay: flex;\n\t\t}\n\n\t\t.horizontal[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\tflex-shrink: 0;\n\t\t\tflex-grow: 0;\n\t\t\twhite-space: initial;\n\t\t}\n\n\t\t.horizontal.rtl[_nghost-%COMP%]   .scrollable-content[_ngcontent-%COMP%]     > * {\n\t\t\ttransform:scaleX(-1);\n\t\t}\n\n    .total-padding[_ngcontent-%COMP%] {\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 1px;\n      width: 1px;\n      transform-origin: 0 0;\n      opacity: 0;\n    }\n\n    .horizontal[_nghost-%COMP%]   .total-padding[_ngcontent-%COMP%] {\n      height: 100%;\n    }'
              ]
            })),
            (Ye = Object(He.b)(
              [
                Object(He.c)(4, Object(g.p)(g.B)),
                Object(He.c)(5, Object(g.A)()),
                Object(He.c)(5, Object(g.p)('virtual-scroller-default-options'))
              ],
              Ye
            ))),
          Je =
            ((($e = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: $e })),
            ($e.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || $e)();
              },
              providers: [
                { provide: 'virtual-scroller-default-options', useFactory: Xe }
              ],
              imports: [[f.c]]
            })),
            $e),
          et = a('NptF'),
          tt = a('9PoT');
        function nt(e, t, n) {
          for (var i = [], r = n ? n + t : t, a = n ? n + 0 : 0; a < r; ++a)
            i.push(e[a]);
          return i;
        }
        var it = a('GJmQ'),
          rt = a('HCsY'),
          at = a('nRuA');
        function ot(e, t) {
          if ((1 & e && (g.Lb(0, 'img', 4), g.cc(1, 'image')), 2 & e)) {
            var n = g.bc(2);
            g.jc('src', g.dc(1, 2, n.pokemon.name), g.rc),
              g.ic('alt', n.imageAlt);
          }
        }
        function st(e, t) {
          1 & e && g.Lb(0, 'span', 5);
        }
        function ct(e, t) {
          if (
            (1 & e &&
              (g.Qb(0, 'div', 1),
              g.cc(1, 'titlecase'),
              g.zc(2, ot, 2, 4, 'img', 2),
              g.zc(3, st, 1, 0, 'span', 3),
              g.Pb()),
            2 & e)
          ) {
            var n = g.bc();
            g.Bb('sprite inline-block ', n.pokemon.cssClasses, ''),
              g.jc('title', g.dc(1, 6, n.pokemon.name)),
              g.zb(2),
              g.ic('ngIf', !n.empty),
              g.zb(1),
              g.ic('ngIf', n.empty);
          }
        }
        var lt,
          ht =
            (((lt = (function () {
              function e() {
                d(this, e);
              }
              return (
                o(e, [
                  {
                    key: 'imageUrl',
                    get: function () {
                      return this.empty ? '' : this.pokemon.name;
                    }
                  },
                  {
                    key: 'imageAlt',
                    get: function () {
                      return this.empty ? '' : this.pokemon.name;
                    }
                  },
                  {
                    key: 'rowOne',
                    get: function () {
                      return 1 === this.row;
                    }
                  },
                  {
                    key: 'empty',
                    get: function () {
                      return 'Empty Team Member' === this.pokemon.name;
                    }
                  },
                  {
                    key: 'types',
                    get: function () {
                      return this.pokemon.types.map(function (e) {
                        return tt.a[e].toLowerCase();
                      });
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || lt)();
            }),
            (lt.ɵcmp = g.Eb({
              type: lt,
              selectors: [['app-pokemon']],
              inputs: { pokemon: 'pokemon', row: 'row' },
              decls: 1,
              vars: 1,
              consts: [
                [3, 'class', 'title', 4, 'ngIf'],
                [3, 'title'],
                [3, 'src', 'alt', 4, 'ngIf'],
                ['class', 'empty-item', 4, 'ngIf'],
                [3, 'src', 'alt'],
                [1, 'empty-item']
              ],
              template: function (e, t) {
                1 & e && g.zc(0, ct, 4, 8, 'div', 0),
                  2 & e && g.ic('ngIf', t.pokemon);
              },
              directives: [f.m],
              pipes: [f.t, at.a],
              styles: [
                '.empty-item[_ngcontent-%COMP%], img[_ngcontent-%COMP%]{width:70px;height:70px}.empty-item[_ngcontent-%COMP%]{display:inline-block}'
              ]
            })),
            lt),
          ut = a('vZ4y');
        function dt(e, t) {
          1 & e && (g.Qb(0, 'div'), g.Ac(1, ' \xa0 '), g.Pb()),
            2 & e && g.Bb('', t.$implicit, '-type type inline-block');
        }
        function mt(e, t) {
          if (
            (1 & e && (g.Qb(0, 'div'), g.zc(1, dt, 2, 3, 'div', 9), g.Pb()),
            2 & e)
          ) {
            var n = t.$implicit;
            g.zb(1), g.ic('ngForOf', n);
          }
        }
        function ft(e, t) {
          if (1 & e) {
            var n = g.Rb();
            g.Qb(0, 'span', 10),
              g.Xb('click', function () {
                g.qc(n);
                var e = t.$implicit;
                return g.bc().removeFromTeam(e);
              }),
              g.Lb(1, 'app-pokemon', 11),
              g.Pb();
          }
          if (2 & e) {
            var i = t.$implicit,
              r = g.bc();
            g.zb(1), g.ic('pokemon', i)('row', r.getRow(i));
          }
        }
        function pt(e, t) {
          if (
            (1 & e &&
              (g.Qb(0, 'span', 12), g.Ac(1), g.cc(2, 'hideForm'), g.Pb()),
            2 & e)
          ) {
            var n = t.$implicit;
            g.zb(1), g.Cc(' ', g.dc(2, 1, n), ' ');
          }
        }
        function bt(e, t) {
          if (1 & e) {
            var n = g.Rb();
            g.Qb(0, 'span', 10),
              g.Xb('click', function () {
                g.qc(n);
                var e = t.$implicit;
                return g.bc().removeFromTeam(e);
              }),
              g.Lb(1, 'app-pokemon', 11),
              g.Pb();
          }
          if (2 & e) {
            var i = t.$implicit,
              r = g.bc();
            g.zb(1), g.ic('pokemon', i)('row', r.getRow(i));
          }
        }
        function vt(e, t) {
          if (
            (1 & e &&
              (g.Qb(0, 'span', 12), g.Ac(1), g.cc(2, 'hideForm'), g.Pb()),
            2 & e)
          ) {
            var n = t.$implicit;
            g.zb(1), g.Cc(' ', g.dc(2, 1, n), ' ');
          }
        }
        function gt(e, t) {
          1 & e && (g.Qb(0, 'div'), g.Ac(1, ' \xa0 '), g.Pb()),
            2 & e && g.Bb('', t.$implicit, '-type type inline-block');
        }
        function kt(e, t) {
          if (
            (1 & e && (g.Qb(0, 'span'), g.zc(1, gt, 2, 3, 'div', 9), g.Pb()),
            2 & e)
          ) {
            var n = t.$implicit;
            g.zb(1), g.ic('ngForOf', n);
          }
        }
        var yt,
          _t =
            (((yt = (function () {
              function e(t) {
                d(this, e),
                  (this.teamService = t),
                  (this.team = []),
                  (this.alive = !0);
              }
              return (
                o(e, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      var e = this;
                      (this.alive = !0),
                        this.teamService.requestUpdate(),
                        this.teamService.teamChange$
                          .pipe(
                            Object(it.a)(function () {
                              return e.alive;
                            })
                          )
                          .subscribe(function (t) {
                            for (
                              e.team = t.filter(function (e) {
                                return 'Empty Team Member' !== e.name;
                              });
                              e.team.length < 6;

                            )
                              e.team.push(new et.a());
                          });
                    }
                  },
                  {
                    key: 'removeFromTeam',
                    value: function (e) {
                      this.teamService.removeFromTeam(e);
                    }
                  },
                  {
                    key: 'getTypes',
                    value: function (e) {
                      return e
                        .filter(function (e) {
                          return null == e ? void 0 : e.types;
                        })
                        .map(function (e) {
                          return e.types.map(function (e) {
                            return tt.a[e].toLowerCase();
                          });
                        });
                    }
                  },
                  {
                    key: 'getNames',
                    value: function (e) {
                      return e
                        .filter(function (e) {
                          return null == e ? void 0 : e.name;
                        })
                        .map(function (e) {
                          return e.name;
                        });
                    }
                  },
                  {
                    key: 'getRow',
                    value: function (e) {
                      return this.team.indexOf(e) < 3 ? 1 : 2;
                    }
                  },
                  {
                    key: 'ngOnDestroy',
                    value: function () {
                      this.alive = !1;
                    }
                  },
                  {
                    key: 'firstThree',
                    get: function () {
                      return nt(this.team, 3);
                    }
                  },
                  {
                    key: 'firstThreeTypes',
                    get: function () {
                      return this.getTypes(this.firstThree);
                    }
                  },
                  {
                    key: 'firstThreeNames',
                    get: function () {
                      return this.getNames(this.firstThree);
                    }
                  },
                  {
                    key: 'lastThree',
                    get: function () {
                      return nt(this.team, 3, 3);
                    }
                  },
                  {
                    key: 'lastThreeTypes',
                    get: function () {
                      return this.getTypes(this.lastThree);
                    }
                  },
                  {
                    key: 'lastThreeNames',
                    get: function () {
                      return this.getNames(this.lastThree);
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || yt)(g.Kb(rt.a));
            }),
            (yt.ɵcmp = g.Eb({
              type: yt,
              selectors: [['app-team']],
              decls: 13,
              vars: 6,
              consts: [
                [1, 'card'],
                [1, 'container'],
                [1, 'text-center', 'first-types', 'type-display'],
                [4, 'ngFor', 'ngForOf'],
                [1, 'first-three', 'text-center', 'pokemon-display', 'mt-1'],
                [3, 'click', 4, 'ngFor', 'ngForOf'],
                ['class', 'pokemon-name', 4, 'ngFor', 'ngForOf'],
                [1, 'last-three', 'text-center', 'pokemon-display'],
                [1, 'text-center', 'last-types', 'type-display'],
                [3, 'class', 4, 'ngFor', 'ngForOf'],
                [3, 'click'],
                [3, 'pokemon', 'row'],
                [1, 'pokemon-name']
              ],
              template: function (e, t) {
                1 & e &&
                  (g.Qb(0, 'mat-card', 0),
                  g.Qb(1, 'mat-card-content'),
                  g.Qb(2, 'div', 1),
                  g.Qb(3, 'div', 2),
                  g.zc(4, mt, 2, 1, 'div', 3),
                  g.Pb(),
                  g.Qb(5, 'div', 4),
                  g.zc(6, ft, 2, 2, 'span', 5),
                  g.zc(7, pt, 3, 3, 'span', 6),
                  g.Pb(),
                  g.Qb(8, 'div', 7),
                  g.zc(9, bt, 2, 2, 'span', 5),
                  g.zc(10, vt, 3, 3, 'span', 6),
                  g.Pb(),
                  g.Qb(11, 'div', 8),
                  g.zc(12, kt, 2, 1, 'span', 3),
                  g.Pb(),
                  g.Pb(),
                  g.Pb(),
                  g.Pb()),
                  2 & e &&
                    (g.zb(4),
                    g.ic('ngForOf', t.firstThreeTypes),
                    g.zb(2),
                    g.ic('ngForOf', t.firstThree),
                    g.zb(1),
                    g.ic('ngForOf', t.firstThreeNames),
                    g.zb(2),
                    g.ic('ngForOf', t.lastThree),
                    g.zb(1),
                    g.ic('ngForOf', t.lastThreeNames),
                    g.zb(2),
                    g.ic('ngForOf', t.lastThreeTypes));
              },
              directives: [x, _, f.l, ht],
              pipes: [ut.a],
              styles: [
                '.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;grid-template-rows:2.5% 47.5% 47.5% 2.5%;height:100%}@media screen and (min-width:700px){.container[_ngcontent-%COMP%]{width:33.3%;margin-left:33.3%}}mat-card-content[_ngcontent-%COMP%]{width:100%;height:100%}.card[_ngcontent-%COMP%]{margin:1.5vh 7.5vw;height:35vh}.type[_ngcontent-%COMP%]{border-radius:10%;margin:0 1px;text-shadow:1px 1px #000;background-size:100%;background-position:50%;width:32px;height:16px}.pokemon-display[_ngcontent-%COMP%]{grid-template-rows:70% 30%}.pokemon-display[_ngcontent-%COMP%], .type-display[_ngcontent-%COMP%]{display:grid;grid-template-columns:33% 33% 33%}.type-display[_ngcontent-%COMP%]{grid-template-rows:auto}.pokemon-name[_ngcontent-%COMP%]{max-width:75px;padding-left:calc(calc(100% - 75px) / 2)}'
              ]
            })),
            yt);
        function xt(e, t) {
          if (1 & e) {
            var n = g.Rb();
            g.Qb(0, 'span', 3),
              g.Xb('click', function () {
                g.qc(n);
                var e = t.$implicit;
                return g.bc().addPokemon(e);
              }),
              g.Lb(1, 'app-pokemon', 4),
              g.Pb();
          }
          if (2 & e) {
            var i = t.$implicit;
            g.zb(1), g.ic('pokemon', i);
          }
        }
        var wt,
          Ct,
          St,
          Pt,
          Ot =
            (((Ct = (function () {
              function e(t) {
                d(this, e),
                  (this.teamService = t),
                  (this.filtersLoading = !0),
                  (this.pokemon = []);
              }
              return (
                o(e, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      var e = this;
                      this.teamService.fetchFilters(),
                        this.teamService.pokemonChange$.subscribe(function (t) {
                          (e.filtersLoading = !1), (e.pokemon = t);
                        });
                    }
                  },
                  {
                    key: 'addPokemon',
                    value: function (e) {
                      this.teamService.addToTeam(e);
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Ct)(g.Kb(rt.a));
            }),
            (Ct.ɵcmp = g.Eb({
              type: Ct,
              selectors: [['app-picker']],
              decls: 5,
              vars: 4,
              consts: [
                [1, 'virtual-scroller', 3, 'items'],
                ['scroll', ''],
                [
                  'class',
                  'pokemon-container',
                  3,
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'pokemon-container', 3, 'click'],
                [3, 'pokemon']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (g.Qb(0, 'div'),
                    g.Lb(1, 'mat-spinner'),
                    g.Pb(),
                    g.Qb(2, 'virtual-scroller', 0, 1),
                    g.zc(4, xt, 2, 1, 'span', 2),
                    g.Pb()),
                  2 & e)
                ) {
                  var n = g.oc(3);
                  g.Cb('hidden', !t.filtersLoading),
                    g.zb(2),
                    g.ic('items', t.pokemon),
                    g.zb(2),
                    g.ic('ngForOf', n.viewPortItems);
                }
              },
              directives: [U.b, Ze, f.l, ht],
              styles: [
                '.virtual-scroller[_ngcontent-%COMP%]{height:44vh;width:100%;text-align:center;overflow-x:hidden!important}@media (max-height:700px){.virtual-scroller[_ngcontent-%COMP%]{height:41.5vh}}.pokemon-container[_ngcontent-%COMP%]{display:inline-block;width:90px;height:90px}'
              ]
            })),
            Ct),
          Tt =
            (((wt = function e() {
              d(this, e);
            }).ɵfac = function (e) {
              return new (e || wt)();
            }),
            (wt.ɵcmp = g.Eb({
              type: wt,
              selectors: [['app-team-builder-container']],
              decls: 6,
              vars: 0,
              consts: [[1, 'text-center']],
              template: function (e, t) {
                1 & e &&
                  (g.Lb(0, 'app-team'),
                  g.Qb(1, 'div'),
                  g.Lb(2, 'div'),
                  g.Qb(3, 'div', 0),
                  g.Lb(4, 'app-picker'),
                  g.Pb(),
                  g.Lb(5, 'div'),
                  g.Pb());
              },
              directives: [_t, Ot],
              encapsulation: 2
            })),
            wt),
          It = a('AfiK'),
          Mt = a('jeMW'),
          Et = a('req1'),
          zt =
            (((St = (function () {
              function e() {
                d(this, e);
              }
              return (
                o(e, [
                  {
                    key: 'generateTree',
                    value: function (e) {
                      if (0 === e.length) return [];
                      var n,
                        i = this.getFilterType(e[0]),
                        r = [],
                        a = [],
                        o = t(e);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var s = n.value;
                          i !== It.a[s.filter]
                            ? (r.push({
                                checked: !1,
                                children: a,
                                value: i,
                                name: i,
                                expanded: !1
                              }),
                              (i = this.getFilterType(s)),
                              (a = [this.createChild(s, i)]))
                            : a.push(this.createChild(s, i));
                        }
                      } catch (c) {
                        o.e(c);
                      } finally {
                        o.f();
                      }
                      return (
                        r.push({
                          checked: !1,
                          children: a,
                          value: i,
                          name: i,
                          expanded: !1
                        }),
                        r
                      );
                    }
                  },
                  {
                    key: 'createChild',
                    value: function (e, t) {
                      return {
                        id: e.id,
                        checked: !!e.enabled,
                        value: Object(Et.c)(e.value),
                        name: t,
                        children: []
                      };
                    }
                  },
                  {
                    key: 'getFilterType',
                    value: function (e) {
                      return It.a[e.filter];
                    }
                  },
                  {
                    key: 'getChild',
                    value: function (e) {
                      var t;
                      return null !== (t = e.children) && void 0 !== t ? t : [];
                    }
                  },
                  {
                    key: 'descendantsAllChecked',
                    value: function (e) {
                      var t;
                      return (null !== (t = e.children) && void 0 !== t
                        ? t
                        : []
                      ).every(function (e) {
                        return e.checked;
                      });
                    }
                  },
                  {
                    key: 'descendantsPartiallyChecked',
                    value: function (e) {
                      return (
                        e.children.some(function (e) {
                          return e.checked;
                        }) &&
                        !e.children.every(function (e) {
                          return e.checked;
                        })
                      );
                    }
                  },
                  {
                    key: 'hasChild',
                    value: function (e, t) {
                      return !!t.children && t.children.length > 0;
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || St)();
            }),
            (St.ɵprov = g.Gb({
              token: St,
              factory: St.ɵfac,
              providedIn: 'root'
            })),
            St),
          Dt = a('Kj3r'),
          Rt =
            (((Pt = (function () {
              function e() {
                d(this, e),
                  (this.searchSubject = new $.a()),
                  (this.search = new g.n());
              }
              return (
                o(e, [
                  {
                    key: 'ngOnInit',
                    value: function () {
                      var e = this;
                      this.searchSubject
                        .pipe(Object(Dt.a)(500))
                        .subscribe(function (t) {
                          return e.search.emit(t);
                        });
                    }
                  },
                  {
                    key: 'onKeyUp',
                    value: function (e) {
                      var t,
                        n =
                          null === (t = e.target) || void 0 === t
                            ? void 0
                            : t.value;
                      void 0 !== n && this.searchSubject.next(n);
                    }
                  }
                ]),
                e
              );
            })()).ɵfac = function (e) {
              return new (e || Pt)();
            }),
            (Pt.ɵcmp = g.Eb({
              type: Pt,
              selectors: [['app-search']],
              inputs: { filter: 'filter' },
              outputs: { search: 'search' },
              decls: 3,
              vars: 1,
              consts: [
                [1, 'text-center'],
                [
                  'autocomplete',
                  'off',
                  'type',
                  'text',
                  'placeholder',
                  'Search Pokemon...',
                  'matInput',
                  '',
                  3,
                  'value',
                  'keyup'
                ]
              ],
              template: function (e, t) {
                1 & e &&
                  (g.Qb(0, 'div', 0),
                  g.Qb(1, 'mat-form-field'),
                  g.Qb(2, 'input', 1),
                  g.Xb('keyup', function (e) {
                    return t.onKeyUp(e);
                  }),
                  g.Pb(),
                  g.Pb(),
                  g.Pb()),
                  2 & e &&
                    (g.zb(2),
                    g.ic('value', null == t.filter ? null : t.filter.value));
              },
              directives: [Q.b, V.a],
              styles: [
                'input[type=text][_ngcontent-%COMP%]{border-radius:5px}mat-form-field[_ngcontent-%COMP%]{width:80%}div[_ngcontent-%COMP%]{width:100%}'
              ]
            })),
            Pt);
        function At(e, t) {
          if (1 & e) {
            var n = g.Rb();
            g.Qb(0, 'mat-tree-node', 8),
              g.Qb(1, 'li', 9),
              g.Lb(2, 'button', 10),
              g.Qb(3, 'mat-checkbox', 11),
              g.Xb('change', function () {
                g.qc(n);
                var e = t.$implicit;
                return g.bc().handleNodeChange(e);
              }),
              g.Ac(4),
              g.Pb(),
              g.Pb(),
              g.Pb();
          }
          if (2 & e) {
            var i = t.$implicit;
            g.zb(3),
              g.ic('checked', i.checked),
              g.zb(1),
              g.Cc(' ', i.value, ' ');
          }
        }
        function Wt(e, t) {
          if (1 & e) {
            var n = g.Rb();
            g.Qb(0, 'mat-nested-tree-node'),
              g.Qb(1, 'li'),
              g.Qb(2, 'div', 9),
              g.Qb(3, 'button', 12),
              g.Qb(4, 'mat-icon'),
              g.Ac(5),
              g.Pb(),
              g.Pb(),
              g.Qb(6, 'mat-checkbox', 13),
              g.Xb('change', function (e) {
                g.qc(n);
                var i = t.$implicit;
                return g.bc().selectionToggle(i, e);
              }),
              g.Ac(7),
              g.Pb(),
              g.Pb(),
              g.Qb(8, 'ul'),
              g.Mb(9, 14),
              g.Pb(),
              g.Pb(),
              g.Pb();
          }
          if (2 & e) {
            var i = t.$implicit,
              r = g.bc();
            g.zb(3),
              g.Ab('aria-label', 'toggle ' + i.name),
              g.zb(2),
              g.Cc(' ', i.expanded ? 'expand_more' : 'chevron_right', ' '),
              g.zb(1),
              g.ic('checked', r.descendantsAllChecked(i))(
                'indeterminate',
                r.descendantsPartiallyChecked(i)
              ),
              g.zb(1),
              g.Cc(' ', i.name, ' '),
              g.zb(1),
              g.Cb('hidden', !r.treeControl.isExpanded(i));
          }
        }
        var Ft,
          Gt,
          Lt = [
            { path: '', pathMatch: 'full', redirectTo: 'home' },
            { path: 'home', component: Tt },
            {
              path: 'options',
              component:
                ((Ft = (function () {
                  function e(t, n, i) {
                    d(this, e),
                      (this.filterService = t),
                      (this.optionsService = n),
                      (this.teamService = i),
                      (this.treeControl = new oe(this.optionsService.getChild)),
                      (this.descendantsAllChecked = this.optionsService.descendantsAllChecked),
                      (this.descendantsPartiallyChecked = this.optionsService.descendantsPartiallyChecked),
                      (this.hasChild = this.optionsService.hasChild),
                      (this.treeData = new Le()),
                      (this.checkingCoverage = !1);
                  }
                  return (
                    o(e, [
                      {
                        key: 'ngOnInit',
                        value: function () {
                          var e = this;
                          this.filterService.createDatabase().then(function () {
                            return e.initializeFilters();
                          });
                        }
                      },
                      {
                        key: 'initializeFilters',
                        value: function () {
                          return Object(He.a)(
                            this,
                            void 0,
                            void 0,
                            regeneratorRuntime.mark(function e() {
                              var t;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (this.searchFilter = this.filterService.getSearchFilter()),
                                          (this.checkingCoverage = this.filterService.checkingCoverage),
                                          (e.next = 3),
                                          this.filterService.getAllFilters()
                                        );
                                      case 3:
                                        (t = e.sent),
                                          (this.treeData.data = this.optionsService.generateTree(
                                            t
                                          ));
                                      case 5:
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
                        key: 'selectionToggle',
                        value: function (e, n) {
                          if (this.descendantsPartiallyChecked(e)) {
                            var i,
                              r = t(e.children);
                            try {
                              for (r.s(); !(i = r.n()).done; )
                                i.value.checked = !1;
                            } catch (c) {
                              r.e(c);
                            } finally {
                              r.f();
                            }
                            n.source.toggle();
                          } else {
                            var a,
                              o = t(e.children);
                            try {
                              for (o.s(); !(a = o.n()).done; ) {
                                var s = a.value;
                                s.checked = !s.checked;
                              }
                            } catch (c) {
                              o.e(c);
                            } finally {
                              o.f();
                            }
                          }
                          this.filterService.updateFilters(
                            e.children.map(function (e) {
                              var t;
                              return {
                                id:
                                  null !== (t = e.id) && void 0 !== t ? t : -1,
                                filter: It.a[e.name],
                                value: e.value,
                                enabled: e.checked ? 1 : 0
                              };
                            })
                          );
                        }
                      },
                      {
                        key: 'handleNodeChange',
                        value: function (e) {
                          var t;
                          (e.checked = !e.checked),
                            this.filterService.updateFilter({
                              id: null !== (t = e.id) && void 0 !== t ? t : -1,
                              filter: It.a[e.name],
                              value: e.value,
                              enabled: e.checked ? 1 : 0
                            });
                        }
                      },
                      {
                        key: 'handleCoverage',
                        value: function () {
                          this.filterService.checkCoverage(
                            this.teamService.team
                          ),
                            (this.checkingCoverage = !this.checkingCoverage);
                        }
                      },
                      {
                        key: 'resetFilters',
                        value: function () {
                          return Object(He.a)(
                            this,
                            void 0,
                            void 0,
                            regeneratorRuntime.mark(function e() {
                              var t = this;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2),
                                          this.filterService.resetFilters()
                                        );
                                      case 2:
                                        this.filterService
                                          .createDatabase()
                                          .then(function () {
                                            return t.initializeFilters();
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
                        key: 'handleSearch',
                        value: function (e) {
                          return this.filterService.addSearchFilter(e);
                        }
                      },
                      {
                        key: 'treeHasData',
                        get: function () {
                          return !!this.treeData.data.length;
                        }
                      },
                      {
                        key: 'coverageText',
                        get: function () {
                          return this.checkingCoverage
                            ? 'Showing Pokemon with Coverage'
                            : 'Check Coverage';
                        }
                      },
                      {
                        key: 'hasTeamMembers',
                        get: function () {
                          return !!this.teamService.team.length;
                        }
                      }
                    ]),
                    e
                  );
                })()),
                (Ft.ɵfac = function (e) {
                  return new (e || Ft)(g.Kb(Mt.a), g.Kb(zt), g.Kb(rt.a));
                }),
                (Ft.ɵcmp = g.Eb({
                  type: Ft,
                  selectors: [['app-filter']],
                  decls: 15,
                  vars: 10,
                  consts: [
                    [1, 'options-tree', 3, 'dataSource', 'treeControl'],
                    ['matTreeNodeToggle', '', 4, 'matTreeNodeDef'],
                    [4, 'matTreeNodeDef', 'matTreeNodeDefWhen'],
                    [1, 'search'],
                    [3, 'filter', 'search'],
                    [1, 'text-center'],
                    [
                      'mat-raised-button',
                      '',
                      1,
                      'w-80',
                      3,
                      'disabled',
                      'click'
                    ],
                    ['mat-raised-button', '', 1, 'w-80', 3, 'click'],
                    ['matTreeNodeToggle', ''],
                    [1, 'mat-tree-node'],
                    ['mat-icon-button', '', 'disabled', ''],
                    [3, 'checked', 'change'],
                    ['mat-icon-button', '', 'matTreeNodeToggle', ''],
                    [3, 'checked', 'indeterminate', 'change'],
                    ['matTreeNodeOutlet', '']
                  ],
                  template: function (e, t) {
                    1 & e &&
                      (g.Qb(0, 'div'),
                      g.Lb(1, 'mat-spinner'),
                      g.Pb(),
                      g.Qb(2, 'mat-tree', 0),
                      g.zc(3, At, 5, 2, 'mat-tree-node', 1),
                      g.zc(4, Wt, 10, 7, 'mat-nested-tree-node', 2),
                      g.Pb(),
                      g.Qb(5, 'div', 3),
                      g.Qb(6, 'app-search', 4),
                      g.Xb('search', function (e) {
                        return t.handleSearch(e);
                      }),
                      g.cc(7, 'async'),
                      g.Pb(),
                      g.Pb(),
                      g.Qb(8, 'div'),
                      g.Qb(9, 'div', 5),
                      g.Qb(10, 'button', 6),
                      g.Xb('click', function () {
                        return t.handleCoverage();
                      }),
                      g.Ac(11),
                      g.Pb(),
                      g.Pb(),
                      g.Pb(),
                      g.Qb(12, 'div', 5),
                      g.Qb(13, 'button', 7),
                      g.Xb('click', function () {
                        return t.resetFilters();
                      }),
                      g.Ac(14, ' Reset Filters '),
                      g.Pb(),
                      g.Pb()),
                      2 & e &&
                        (g.Cb('hidden', t.treeHasData),
                        g.zb(2),
                        g.ic('dataSource', t.treeData)(
                          'treeControl',
                          t.treeControl
                        ),
                        g.zb(2),
                        g.ic('matTreeNodeDefWhen', t.hasChild),
                        g.zb(2),
                        g.ic('filter', g.dc(7, 8, t.searchFilter)),
                        g.zb(4),
                        g.ic('disabled', !t.hasTeamMembers),
                        g.zb(1),
                        g.Cc(' ', t.coverageText, ' '));
                  },
                  directives: [U.b, Re, Me, Rt, p.a, Ie, We, j, ze, K.a, De],
                  pipes: [f.b],
                  styles: [
                    '.options-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .options-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;list-style-type:none}.w-80[_ngcontent-%COMP%]{width:80vw}.search[_ngcontent-%COMP%]{margin:1vh 0}div.text-center[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{margin:1vh 0}.spinner[_ngcontent-%COMP%]{width:100%}.mat-icon-button[disabled][_ngcontent-%COMP%]{width:25px}'
                  ]
                })),
                Ft)
            }
          ],
          Nt = [Ge, B, Q.d, K.b, V.b, p.b, U.a, w, Je],
          jt =
            (((Gt = function e() {
              d(this, e);
            }).ɵmod = g.Ib({ type: Gt })),
            (Gt.ɵinj = g.Hb({
              factory: function (e) {
                return new (e || Gt)();
              },
              imports: [[f.c, je.a].concat(Nt, [Ne.e.forChild(Lt)])]
            })),
            Gt);
      },
      aCrv: function (e, t, n) {
        var i,
          r = function () {
            (this._tweens = {}), (this._tweensAddedDuringUpdate = {});
          };
        r.prototype = {
          getAll: function () {
            return Object.keys(this._tweens).map(
              function (e) {
                return this._tweens[e];
              }.bind(this)
            );
          },
          removeAll: function () {
            this._tweens = {};
          },
          add: function (e) {
            (this._tweens[e.getId()] = e),
              (this._tweensAddedDuringUpdate[e.getId()] = e);
          },
          remove: function (e) {
            delete this._tweens[e.getId()],
              delete this._tweensAddedDuringUpdate[e.getId()];
          },
          update: function (e, t) {
            var n = Object.keys(this._tweens);
            if (0 === n.length) return !1;
            for (e = void 0 !== e ? e : o.now(); n.length > 0; ) {
              this._tweensAddedDuringUpdate = {};
              for (var i = 0; i < n.length; i++) {
                var r = this._tweens[n[i]];
                r &&
                  !1 === r.update(e) &&
                  ((r._isPlaying = !1), t || delete this._tweens[n[i]]);
              }
              n = Object.keys(this._tweensAddedDuringUpdate);
            }
            return !0;
          }
        };
        var a,
          o = new r();
        (o.Group = r),
          (o._nextId = 0),
          (o.nextId = function () {
            return o._nextId++;
          }),
          (o.now =
            'undefined' == typeof self &&
            'undefined' != typeof process &&
            process.hrtime
              ? function () {
                  var e = process.hrtime();
                  return 1e3 * e[0] + e[1] / 1e6;
                }
              : 'undefined' != typeof self &&
                void 0 !== self.performance &&
                void 0 !== self.performance.now
              ? self.performance.now.bind(self.performance)
              : void 0 !== Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                }),
          (o.Tween = function (e, t) {
            (this._object = e),
              (this._valuesStart = {}),
              (this._valuesEnd = {}),
              (this._valuesStartRepeat = {}),
              (this._duration = 1e3),
              (this._repeat = 0),
              (this._repeatDelayTime = void 0),
              (this._yoyo = !1),
              (this._isPlaying = !1),
              (this._reversed = !1),
              (this._delayTime = 0),
              (this._startTime = null),
              (this._easingFunction = o.Easing.Linear.None),
              (this._interpolationFunction = o.Interpolation.Linear),
              (this._chainedTweens = []),
              (this._onStartCallback = null),
              (this._onStartCallbackFired = !1),
              (this._onUpdateCallback = null),
              (this._onRepeatCallback = null),
              (this._onCompleteCallback = null),
              (this._onStopCallback = null),
              (this._group = t || o),
              (this._id = o.nextId());
          }),
          (o.Tween.prototype = {
            getId: function () {
              return this._id;
            },
            isPlaying: function () {
              return this._isPlaying;
            },
            to: function (e, t) {
              return (
                (this._valuesEnd = Object.create(e)),
                void 0 !== t && (this._duration = t),
                this
              );
            },
            duration: function (e) {
              return (this._duration = e), this;
            },
            start: function (e) {
              for (var t in (this._group.add(this),
              (this._isPlaying = !0),
              (this._onStartCallbackFired = !1),
              (this._startTime =
                void 0 !== e
                  ? 'string' == typeof e
                    ? o.now() + parseFloat(e)
                    : e
                  : o.now()),
              (this._startTime += this._delayTime),
              this._valuesEnd)) {
                if (this._valuesEnd[t] instanceof Array) {
                  if (0 === this._valuesEnd[t].length) continue;
                  this._valuesEnd[t] = [this._object[t]].concat(
                    this._valuesEnd[t]
                  );
                }
                void 0 !== this._object[t] &&
                  ((this._valuesStart[t] = this._object[t]),
                  this._valuesStart[t] instanceof Array == 0 &&
                    (this._valuesStart[t] *= 1),
                  (this._valuesStartRepeat[t] = this._valuesStart[t] || 0));
              }
              return this;
            },
            stop: function () {
              return this._isPlaying
                ? (this._group.remove(this),
                  (this._isPlaying = !1),
                  null !== this._onStopCallback &&
                    this._onStopCallback(this._object),
                  this.stopChainedTweens(),
                  this)
                : this;
            },
            end: function () {
              return this.update(1 / 0), this;
            },
            stopChainedTweens: function () {
              for (var e = 0, t = this._chainedTweens.length; e < t; e++)
                this._chainedTweens[e].stop();
            },
            group: function (e) {
              return (this._group = e), this;
            },
            delay: function (e) {
              return (this._delayTime = e), this;
            },
            repeat: function (e) {
              return (this._repeat = e), this;
            },
            repeatDelay: function (e) {
              return (this._repeatDelayTime = e), this;
            },
            yoyo: function (e) {
              return (this._yoyo = e), this;
            },
            easing: function (e) {
              return (this._easingFunction = e), this;
            },
            interpolation: function (e) {
              return (this._interpolationFunction = e), this;
            },
            chain: function () {
              return (this._chainedTweens = arguments), this;
            },
            onStart: function (e) {
              return (this._onStartCallback = e), this;
            },
            onUpdate: function (e) {
              return (this._onUpdateCallback = e), this;
            },
            onRepeat: function (e) {
              return (this._onRepeatCallback = e), this;
            },
            onComplete: function (e) {
              return (this._onCompleteCallback = e), this;
            },
            onStop: function (e) {
              return (this._onStopCallback = e), this;
            },
            update: function (e) {
              var t, n, i;
              if (e < this._startTime) return !0;
              for (t in (!1 === this._onStartCallbackFired &&
                (null !== this._onStartCallback &&
                  this._onStartCallback(this._object),
                (this._onStartCallbackFired = !0)),
              (n = (e - this._startTime) / this._duration),
              (i = this._easingFunction(
                (n = 0 === this._duration || n > 1 ? 1 : n)
              )),
              this._valuesEnd))
                if (void 0 !== this._valuesStart[t]) {
                  var r = this._valuesStart[t] || 0,
                    a = this._valuesEnd[t];
                  a instanceof Array
                    ? (this._object[t] = this._interpolationFunction(a, i))
                    : ('string' == typeof a &&
                        (a =
                          '+' === a.charAt(0) || '-' === a.charAt(0)
                            ? r + parseFloat(a)
                            : parseFloat(a)),
                      'number' == typeof a &&
                        (this._object[t] = r + (a - r) * i));
                }
              if (
                (null !== this._onUpdateCallback &&
                  this._onUpdateCallback(this._object, n),
                1 === n)
              ) {
                if (this._repeat > 0) {
                  for (t in (isFinite(this._repeat) && this._repeat--,
                  this._valuesStartRepeat)) {
                    if (
                      ('string' == typeof this._valuesEnd[t] &&
                        (this._valuesStartRepeat[t] =
                          this._valuesStartRepeat[t] +
                          parseFloat(this._valuesEnd[t])),
                      this._yoyo)
                    ) {
                      var o = this._valuesStartRepeat[t];
                      (this._valuesStartRepeat[t] = this._valuesEnd[t]),
                        (this._valuesEnd[t] = o);
                    }
                    this._valuesStart[t] = this._valuesStartRepeat[t];
                  }
                  return (
                    this._yoyo && (this._reversed = !this._reversed),
                    (this._startTime =
                      void 0 !== this._repeatDelayTime
                        ? e + this._repeatDelayTime
                        : e + this._delayTime),
                    null !== this._onRepeatCallback &&
                      this._onRepeatCallback(this._object),
                    !0
                  );
                }
                null !== this._onCompleteCallback &&
                  this._onCompleteCallback(this._object);
                for (var s = 0, c = this._chainedTweens.length; s < c; s++)
                  this._chainedTweens[s].start(
                    this._startTime + this._duration
                  );
                return !1;
              }
              return !0;
            }
          }),
          (o.Easing = {
            Linear: {
              None: function (e) {
                return e;
              }
            },
            Quadratic: {
              In: function (e) {
                return e * e;
              },
              Out: function (e) {
                return e * (2 - e);
              },
              InOut: function (e) {
                return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
              }
            },
            Cubic: {
              In: function (e) {
                return e * e * e;
              },
              Out: function (e) {
                return --e * e * e + 1;
              },
              InOut: function (e) {
                return (e *= 2) < 1
                  ? 0.5 * e * e * e
                  : 0.5 * ((e -= 2) * e * e + 2);
              }
            },
            Quartic: {
              In: function (e) {
                return e * e * e * e;
              },
              Out: function (e) {
                return 1 - --e * e * e * e;
              },
              InOut: function (e) {
                return (e *= 2) < 1
                  ? 0.5 * e * e * e * e
                  : -0.5 * ((e -= 2) * e * e * e - 2);
              }
            },
            Quintic: {
              In: function (e) {
                return e * e * e * e * e;
              },
              Out: function (e) {
                return --e * e * e * e * e + 1;
              },
              InOut: function (e) {
                return (e *= 2) < 1
                  ? 0.5 * e * e * e * e * e
                  : 0.5 * ((e -= 2) * e * e * e * e + 2);
              }
            },
            Sinusoidal: {
              In: function (e) {
                return 1 - Math.cos((e * Math.PI) / 2);
              },
              Out: function (e) {
                return Math.sin((e * Math.PI) / 2);
              },
              InOut: function (e) {
                return 0.5 * (1 - Math.cos(Math.PI * e));
              }
            },
            Exponential: {
              In: function (e) {
                return 0 === e ? 0 : Math.pow(1024, e - 1);
              },
              Out: function (e) {
                return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
              },
              InOut: function (e) {
                return 0 === e
                  ? 0
                  : 1 === e
                  ? 1
                  : (e *= 2) < 1
                  ? 0.5 * Math.pow(1024, e - 1)
                  : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
              }
            },
            Circular: {
              In: function (e) {
                return 1 - Math.sqrt(1 - e * e);
              },
              Out: function (e) {
                return Math.sqrt(1 - --e * e);
              },
              InOut: function (e) {
                return (e *= 2) < 1
                  ? -0.5 * (Math.sqrt(1 - e * e) - 1)
                  : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
              }
            },
            Elastic: {
              In: function (e) {
                return 0 === e
                  ? 0
                  : 1 === e
                  ? 1
                  : -Math.pow(2, 10 * (e - 1)) *
                    Math.sin(5 * (e - 1.1) * Math.PI);
              },
              Out: function (e) {
                return 0 === e
                  ? 0
                  : 1 === e
                  ? 1
                  : Math.pow(2, -10 * e) * Math.sin(5 * (e - 0.1) * Math.PI) +
                    1;
              },
              InOut: function (e) {
                return 0 === e
                  ? 0
                  : 1 === e
                  ? 1
                  : (e *= 2) < 1
                  ? -0.5 *
                    Math.pow(2, 10 * (e - 1)) *
                    Math.sin(5 * (e - 1.1) * Math.PI)
                  : 0.5 *
                      Math.pow(2, -10 * (e - 1)) *
                      Math.sin(5 * (e - 1.1) * Math.PI) +
                    1;
              }
            },
            Back: {
              In: function (e) {
                var t = 1.70158;
                return e * e * ((t + 1) * e - t);
              },
              Out: function (e) {
                var t = 1.70158;
                return --e * e * ((t + 1) * e + t) + 1;
              },
              InOut: function (e) {
                var t = 2.5949095;
                return (e *= 2) < 1
                  ? e * e * ((t + 1) * e - t) * 0.5
                  : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
              }
            },
            Bounce: {
              In: function (e) {
                return 1 - o.Easing.Bounce.Out(1 - e);
              },
              Out: function (e) {
                return e < 1 / 2.75
                  ? 7.5625 * e * e
                  : e < 2 / 2.75
                  ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                  : e < 2.5 / 2.75
                  ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                  : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
              },
              InOut: function (e) {
                return e < 0.5
                  ? 0.5 * o.Easing.Bounce.In(2 * e)
                  : 0.5 * o.Easing.Bounce.Out(2 * e - 1) + 0.5;
              }
            }
          }),
          (o.Interpolation = {
            Linear: function (e, t) {
              var n = e.length - 1,
                i = n * t,
                r = Math.floor(i),
                a = o.Interpolation.Utils.Linear;
              return t < 0
                ? a(e[0], e[1], i)
                : t > 1
                ? a(e[n], e[n - 1], n - i)
                : a(e[r], e[r + 1 > n ? n : r + 1], i - r);
            },
            Bezier: function (e, t) {
              for (
                var n = 0,
                  i = e.length - 1,
                  r = Math.pow,
                  a = o.Interpolation.Utils.Bernstein,
                  s = 0;
                s <= i;
                s++
              )
                n += r(1 - t, i - s) * r(t, s) * e[s] * a(i, s);
              return n;
            },
            CatmullRom: function (e, t) {
              var n = e.length - 1,
                i = n * t,
                r = Math.floor(i),
                a = o.Interpolation.Utils.CatmullRom;
              return e[0] === e[n]
                ? (t < 0 && (r = Math.floor((i = n * (1 + t)))),
                  a(
                    e[(r - 1 + n) % n],
                    e[r],
                    e[(r + 1) % n],
                    e[(r + 2) % n],
                    i - r
                  ))
                : t < 0
                ? e[0] - (a(e[0], e[0], e[1], e[1], -i) - e[0])
                : t > 1
                ? e[n] - (a(e[n], e[n], e[n - 1], e[n - 1], i - n) - e[n])
                : a(
                    e[r ? r - 1 : 0],
                    e[r],
                    e[n < r + 1 ? n : r + 1],
                    e[n < r + 2 ? n : r + 2],
                    i - r
                  );
            },
            Utils: {
              Linear: function (e, t, n) {
                return (t - e) * n + e;
              },
              Bernstein: function (e, t) {
                var n = o.Interpolation.Utils.Factorial;
                return n(e) / n(t) / n(e - t);
              },
              Factorial:
                ((a = [1]),
                function (e) {
                  var t = 1;
                  if (a[e]) return a[e];
                  for (var n = e; n > 1; n--) t *= n;
                  return (a[e] = t), t;
                }),
              CatmullRom: function (e, t, n, i, r) {
                var a = 0.5 * (n - e),
                  o = 0.5 * (i - t),
                  s = r * r;
                return (
                  (2 * t - 2 * n + a + o) * (r * s) +
                  (-3 * t + 3 * n - 2 * a - o) * s +
                  a * r +
                  t
                );
              }
            }
          }),
          void 0 ===
            (i = function () {
              return o;
            }.apply(t, [])) || (e.exports = i);
      }
    }
  ]);
})();
