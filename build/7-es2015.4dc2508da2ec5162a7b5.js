(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    '/LoN': function (e, t, o) {
      'use strict';
      o.r(t),
        o.d(t, 'NuzlockeModule', function () {
          return Aa;
        });
      var i = o('fXoL'),
        a = o('ofXK'),
        n = o('vxfF'),
        r = o('nLfN'),
        s = o('8LU1'),
        l = o('XNiG'),
        c = o('quSY'),
        d = o('HDdC'),
        p = o('D0XW'),
        h = o('Y7HM');
      function u(e) {
        const { subscriber: t, counter: o, period: i } = e;
        t.next(o),
          this.schedule({ subscriber: t, counter: o + 1, period: i }, i);
      }
      var m = o('eNwd'),
        g = o('VRyK'),
        b = o('1G5W'),
        k = o('JX91'),
        f = o('lJxs'),
        y = o('IzEk'),
        _ = o('vkgz'),
        v = o('eIep'),
        w = o('cH1L');
      function R(e, t) {
        for (let o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        return e;
      }
      function C(e, t) {
        const o = t ? '' : 'none';
        R(e.style, {
          touchAction: t ? '' : 'none',
          webkitUserDrag: t ? '' : 'none',
          webkitTapHighlightColor: t ? '' : 'transparent',
          userSelect: o,
          msUserSelect: o,
          webkitUserSelect: o,
          MozUserSelect: o
        });
      }
      function x(e, t) {
        const o = e.style;
        (o.position = t ? '' : 'fixed'),
          (o.top = o.opacity = t ? '' : '0'),
          (o.left = t ? '' : '-999em');
      }
      function O(e) {
        const t = e.toLowerCase().indexOf('ms') > -1 ? 1 : 1e3;
        return parseFloat(e) * t;
      }
      function S(e, t) {
        return e
          .getPropertyValue(t)
          .split(',')
          .map((e) => e.trim());
      }
      function P(e) {
        const t = e.getBoundingClientRect();
        return {
          top: t.top,
          right: t.right,
          bottom: t.bottom,
          left: t.left,
          width: t.width,
          height: t.height
        };
      }
      function z(e, t, o) {
        const { top: i, bottom: a, left: n, right: r } = e;
        return o >= i && o <= a && t >= n && t <= r;
      }
      function D(e, t, o) {
        (e.top += t),
          (e.bottom = e.top + e.height),
          (e.left += o),
          (e.right = e.left + e.width);
      }
      function E(e, t, o, i) {
        const { top: a, right: n, bottom: r, left: s, width: l, height: c } = e,
          d = l * t,
          p = c * t;
        return i > a - p && i < r + p && o > s - d && o < n + d;
      }
      class I {
        constructor(e, t) {
          (this._document = e),
            (this._viewportRuler = t),
            (this.positions = new Map());
        }
        clear() {
          this.positions.clear();
        }
        cache(e) {
          this.clear(),
            this.positions.set(this._document, {
              scrollPosition: this._viewportRuler.getViewportScrollPosition()
            }),
            e.forEach((e) => {
              this.positions.set(e, {
                scrollPosition: { top: e.scrollTop, left: e.scrollLeft },
                clientRect: P(e)
              });
            });
        }
        handleScroll(e) {
          const t = e.target,
            o = this.positions.get(t);
          if (!o) return null;
          const i = t === this._document ? t.documentElement : t,
            a = o.scrollPosition;
          let n, r;
          if (t === this._document) {
            const e = this._viewportRuler.getViewportScrollPosition();
            (n = e.top), (r = e.left);
          } else (n = t.scrollTop), (r = t.scrollLeft);
          const s = a.top - n,
            l = a.left - r;
          return (
            this.positions.forEach((e, o) => {
              e.clientRect && t !== o && i.contains(o) && D(e.clientRect, s, l);
            }),
            (a.top = n),
            (a.left = r),
            { top: s, left: l }
          );
        }
      }
      function M(e) {
        const t = e.cloneNode(!0),
          o = t.querySelectorAll('[id]'),
          i = e.nodeName.toLowerCase();
        t.removeAttribute('id');
        for (let a = 0; a < o.length; a++) o[a].removeAttribute('id');
        return (
          'canvas' === i
            ? L(e, t)
            : ('input' !== i && 'select' !== i && 'textarea' !== i) || T(e, t),
          A('canvas', e, t, L),
          A('input, textarea, select', e, t, T),
          t
        );
      }
      function A(e, t, o, i) {
        const a = t.querySelectorAll(e);
        if (a.length) {
          const t = o.querySelectorAll(e);
          for (let e = 0; e < a.length; e++) i(a[e], t[e]);
        }
      }
      let j = 0;
      function T(e, t) {
        'file' !== t.type && (t.value = e.value),
          'radio' === t.type &&
            t.name &&
            (t.name = `mat-clone-${t.name}-${j++}`);
      }
      function L(e, t) {
        const o = t.getContext('2d');
        if (o)
          try {
            o.drawImage(e, 0, 0);
          } catch (i) {}
      }
      const F = Object(r.f)({ passive: !0 }),
        B = Object(r.f)({ passive: !1 });
      class V {
        constructor(e, t, o, i, a, n) {
          (this._config = t),
            (this._document = o),
            (this._ngZone = i),
            (this._viewportRuler = a),
            (this._dragDropRegistry = n),
            (this._passiveTransform = { x: 0, y: 0 }),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._moveEvents = new l.a()),
            (this._pointerMoveSubscription = c.a.EMPTY),
            (this._pointerUpSubscription = c.a.EMPTY),
            (this._scrollSubscription = c.a.EMPTY),
            (this._resizeSubscription = c.a.EMPTY),
            (this._boundaryElement = null),
            (this._nativeInteractionsEnabled = !0),
            (this._handles = []),
            (this._disabledHandles = new Set()),
            (this._direction = 'ltr'),
            (this.dragStartDelay = 0),
            (this._disabled = !1),
            (this.beforeStarted = new l.a()),
            (this.started = new l.a()),
            (this.released = new l.a()),
            (this.ended = new l.a()),
            (this.entered = new l.a()),
            (this.exited = new l.a()),
            (this.dropped = new l.a()),
            (this.moved = this._moveEvents),
            (this._pointerDown = (e) => {
              if ((this.beforeStarted.next(), this._handles.length)) {
                const t = this._handles.find((t) => {
                  const o = e.target;
                  return !!o && (o === t || t.contains(o));
                });
                !t ||
                  this._disabledHandles.has(t) ||
                  this.disabled ||
                  this._initializeDragSequence(t, e);
              } else
                this.disabled ||
                  this._initializeDragSequence(this._rootElement, e);
            }),
            (this._pointerMove = (e) => {
              const t = this._getPointerPositionOnPage(e);
              if (!this._hasStartedDragging) {
                if (
                  Math.abs(t.x - this._pickupPositionOnPage.x) +
                    Math.abs(t.y - this._pickupPositionOnPage.y) >=
                  this._config.dragStartThreshold
                ) {
                  const t =
                      Date.now() >=
                      this._dragStartTime + this._getDragStartDelay(e),
                    o = this._dropContainer;
                  if (!t) return void this._endDragSequence(e);
                  (o && (o.isDragging() || o.isReceiving())) ||
                    ((this._hasStartedDragging = !0),
                    this._ngZone.run(() => this._startDragSequence(e)));
                }
                return;
              }
              this._boundaryElement &&
                ((this._previewRect &&
                  (this._previewRect.width || this._previewRect.height)) ||
                  (this._previewRect = (
                    this._preview || this._rootElement
                  ).getBoundingClientRect())),
                e.preventDefault();
              const o = this._getConstrainedPointerPosition(t);
              if (
                ((this._hasMoved = !0),
                (this._lastKnownPointerPosition = t),
                this._updatePointerDirectionDelta(o),
                this._dropContainer)
              )
                this._updateActiveDropContainer(o, t);
              else {
                const e = this._activeTransform;
                (e.x =
                  o.x -
                  this._pickupPositionOnPage.x +
                  this._passiveTransform.x),
                  (e.y =
                    o.y -
                    this._pickupPositionOnPage.y +
                    this._passiveTransform.y),
                  this._applyRootElementTransform(e.x, e.y),
                  'undefined' != typeof SVGElement &&
                    this._rootElement instanceof SVGElement &&
                    this._rootElement.setAttribute(
                      'transform',
                      `translate(${e.x} ${e.y})`
                    );
              }
              this._moveEvents.observers.length &&
                this._ngZone.run(() => {
                  this._moveEvents.next({
                    source: this,
                    pointerPosition: o,
                    event: e,
                    distance: this._getDragDistance(o),
                    delta: this._pointerDirectionDelta
                  });
                });
            }),
            (this._pointerUp = (e) => {
              this._endDragSequence(e);
            }),
            this.withRootElement(e),
            (this._parentPositions = new I(o, a)),
            n.registerDragItem(this);
        }
        get disabled() {
          return (
            this._disabled ||
            !(!this._dropContainer || !this._dropContainer.disabled)
          );
        }
        set disabled(e) {
          const t = Object(s.b)(e);
          t !== this._disabled &&
            ((this._disabled = t),
            this._toggleNativeDragInteractions(),
            this._handles.forEach((e) => C(e, t)));
        }
        getPlaceholderElement() {
          return this._placeholder;
        }
        getRootElement() {
          return this._rootElement;
        }
        getVisibleElement() {
          return this.isDragging()
            ? this.getPlaceholderElement()
            : this.getRootElement();
        }
        withHandles(e) {
          (this._handles = e.map((e) => Object(s.d)(e))),
            this._handles.forEach((e) => C(e, this.disabled)),
            this._toggleNativeDragInteractions();
          const t = new Set();
          return (
            this._disabledHandles.forEach((e) => {
              this._handles.indexOf(e) > -1 && t.add(e);
            }),
            (this._disabledHandles = t),
            this
          );
        }
        withPreviewTemplate(e) {
          return (this._previewTemplate = e), this;
        }
        withPlaceholderTemplate(e) {
          return (this._placeholderTemplate = e), this;
        }
        withRootElement(e) {
          const t = Object(s.d)(e);
          return (
            t !== this._rootElement &&
              (this._rootElement &&
                this._removeRootElementListeners(this._rootElement),
              this._ngZone.runOutsideAngular(() => {
                t.addEventListener('mousedown', this._pointerDown, B),
                  t.addEventListener('touchstart', this._pointerDown, F);
              }),
              (this._initialTransform = void 0),
              (this._rootElement = t)),
            'undefined' != typeof SVGElement &&
              this._rootElement instanceof SVGElement &&
              (this._ownerSVGElement = this._rootElement.ownerSVGElement),
            this
          );
        }
        withBoundaryElement(e) {
          return (
            (this._boundaryElement = e ? Object(s.d)(e) : null),
            this._resizeSubscription.unsubscribe(),
            e &&
              (this._resizeSubscription = this._viewportRuler
                .change(10)
                .subscribe(() => this._containInsideBoundaryOnResize())),
            this
          );
        }
        dispose() {
          this._removeRootElementListeners(this._rootElement),
            this.isDragging() && N(this._rootElement),
            N(this._anchor),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            this._dragDropRegistry.removeDragItem(this),
            this._removeSubscriptions(),
            this.beforeStarted.complete(),
            this.started.complete(),
            this.released.complete(),
            this.ended.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this._moveEvents.complete(),
            (this._handles = []),
            this._disabledHandles.clear(),
            (this._dropContainer = void 0),
            this._resizeSubscription.unsubscribe(),
            this._parentPositions.clear(),
            (this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = null);
        }
        isDragging() {
          return (
            this._hasStartedDragging && this._dragDropRegistry.isDragging(this)
          );
        }
        reset() {
          (this._rootElement.style.transform = this._initialTransform || ''),
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform = { x: 0, y: 0 });
        }
        disableHandle(e) {
          !this._disabledHandles.has(e) &&
            this._handles.indexOf(e) > -1 &&
            (this._disabledHandles.add(e), C(e, !0));
        }
        enableHandle(e) {
          this._disabledHandles.has(e) &&
            (this._disabledHandles.delete(e), C(e, this.disabled));
        }
        withDirection(e) {
          return (this._direction = e), this;
        }
        _withDropContainer(e) {
          this._dropContainer = e;
        }
        getFreeDragPosition() {
          const e = this.isDragging()
            ? this._activeTransform
            : this._passiveTransform;
          return { x: e.x, y: e.y };
        }
        setFreeDragPosition(e) {
          return (
            (this._activeTransform = { x: 0, y: 0 }),
            (this._passiveTransform.x = e.x),
            (this._passiveTransform.y = e.y),
            this._dropContainer || this._applyRootElementTransform(e.x, e.y),
            this
          );
        }
        _sortFromLastPointerPosition() {
          const e = this._lastKnownPointerPosition;
          e &&
            this._dropContainer &&
            this._updateActiveDropContainer(
              this._getConstrainedPointerPosition(e),
              e
            );
        }
        _removeSubscriptions() {
          this._pointerMoveSubscription.unsubscribe(),
            this._pointerUpSubscription.unsubscribe(),
            this._scrollSubscription.unsubscribe();
        }
        _destroyPreview() {
          this._preview && N(this._preview),
            this._previewRef && this._previewRef.destroy(),
            (this._preview = this._previewRef = null);
        }
        _destroyPlaceholder() {
          this._placeholder && N(this._placeholder),
            this._placeholderRef && this._placeholderRef.destroy(),
            (this._placeholder = this._placeholderRef = null);
        }
        _endDragSequence(e) {
          this._dragDropRegistry.isDragging(this) &&
            (this._removeSubscriptions(),
            this._dragDropRegistry.stopDragging(this),
            this._toggleNativeDragInteractions(),
            this._handles &&
              (this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight),
            this._hasStartedDragging &&
              (this.released.next({ source: this }),
              this._dropContainer
                ? (this._dropContainer._stopScrolling(),
                  this._animatePreviewToPlaceholder().then(() => {
                    this._cleanupDragArtifacts(e),
                      this._cleanupCachedDimensions(),
                      this._dragDropRegistry.stopDragging(this);
                  }))
                : ((this._passiveTransform.x = this._activeTransform.x),
                  (this._passiveTransform.y = this._activeTransform.y),
                  this._ngZone.run(() => {
                    this.ended.next({
                      source: this,
                      distance: this._getDragDistance(
                        this._getPointerPositionOnPage(e)
                      )
                    });
                  }),
                  this._cleanupCachedDimensions(),
                  this._dragDropRegistry.stopDragging(this))));
        }
        _startDragSequence(e) {
          H(e) && (this._lastTouchEventTime = Date.now()),
            this._toggleNativeDragInteractions();
          const t = this._dropContainer;
          if (t) {
            const e = this._rootElement,
              o = e.parentNode,
              i = (this._preview = this._createPreviewElement()),
              a = (this._placeholder = this._createPlaceholderElement()),
              n = (this._anchor =
                this._anchor || this._document.createComment('')),
              r = this._getShadowRoot();
            o.insertBefore(n, e),
              x(e, !1),
              this._document.body.appendChild(o.replaceChild(a, e)),
              (function (e, t) {
                return (
                  t ||
                  e.fullscreenElement ||
                  e.webkitFullscreenElement ||
                  e.mozFullScreenElement ||
                  e.msFullscreenElement ||
                  e.body
                );
              })(this._document, r).appendChild(i),
              this.started.next({ source: this }),
              t.start(),
              (this._initialContainer = t),
              (this._initialIndex = t.getItemIndex(this));
          } else
            this.started.next({ source: this }),
              (this._initialContainer = this._initialIndex = void 0);
          this._parentPositions.cache(t ? t.getScrollableParents() : []);
        }
        _initializeDragSequence(e, t) {
          this._config.parentDragRef && t.stopPropagation();
          const o = this.isDragging(),
            i = H(t),
            a = !i && 0 !== t.button,
            n = this._rootElement,
            r =
              !i &&
              this._lastTouchEventTime &&
              this._lastTouchEventTime + 800 > Date.now();
          if (
            (t.target &&
              t.target.draggable &&
              'mousedown' === t.type &&
              t.preventDefault(),
            o || a || r)
          )
            return;
          this._handles.length &&
            ((this._rootElementTapHighlight =
              n.style.webkitTapHighlightColor || ''),
            (n.style.webkitTapHighlightColor = 'transparent')),
            (this._hasStartedDragging = this._hasMoved = !1),
            this._removeSubscriptions(),
            (this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(
              this._pointerMove
            )),
            (this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(
              this._pointerUp
            )),
            (this._scrollSubscription = this._dragDropRegistry.scroll.subscribe(
              (e) => {
                this._updateOnScroll(e);
              }
            )),
            this._boundaryElement &&
              (this._boundaryRect = P(this._boundaryElement));
          const s = this._previewTemplate;
          this._pickupPositionInElement =
            s && s.template && !s.matchSize
              ? { x: 0, y: 0 }
              : this._getPointerPositionInElement(e, t);
          const l = (this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(
            t
          ));
          (this._pointerDirectionDelta = { x: 0, y: 0 }),
            (this._pointerPositionAtLastDirectionChange = { x: l.x, y: l.y }),
            (this._dragStartTime = Date.now()),
            this._dragDropRegistry.startDragging(this, t);
        }
        _cleanupDragArtifacts(e) {
          x(this._rootElement, !0),
            this._anchor.parentNode.replaceChild(
              this._rootElement,
              this._anchor
            ),
            this._destroyPreview(),
            this._destroyPlaceholder(),
            (this._boundaryRect = this._previewRect = void 0),
            this._ngZone.run(() => {
              const t = this._dropContainer,
                o = t.getItemIndex(this),
                i = this._getPointerPositionOnPage(e),
                a = this._getDragDistance(this._getPointerPositionOnPage(e)),
                n = t._isOverContainer(i.x, i.y);
              this.ended.next({ source: this, distance: a }),
                this.dropped.next({
                  item: this,
                  currentIndex: o,
                  previousIndex: this._initialIndex,
                  container: t,
                  previousContainer: this._initialContainer,
                  isPointerOverContainer: n,
                  distance: a
                }),
                t.drop(
                  this,
                  o,
                  this._initialIndex,
                  this._initialContainer,
                  n,
                  a
                ),
                (this._dropContainer = this._initialContainer);
            });
        }
        _updateActiveDropContainer({ x: e, y: t }, { x: o, y: i }) {
          let a = this._initialContainer._getSiblingContainerFromPosition(
            this,
            e,
            t
          );
          !a &&
            this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(e, t) &&
            (a = this._initialContainer),
            a &&
              a !== this._dropContainer &&
              this._ngZone.run(() => {
                this.exited.next({
                  item: this,
                  container: this._dropContainer
                }),
                  this._dropContainer.exit(this),
                  (this._dropContainer = a),
                  this._dropContainer.enter(
                    this,
                    e,
                    t,
                    a === this._initialContainer && a.sortingDisabled
                      ? this._initialIndex
                      : void 0
                  ),
                  this.entered.next({
                    item: this,
                    container: a,
                    currentIndex: a.getItemIndex(this)
                  });
              }),
            this._dropContainer._startScrollingIfNecessary(o, i),
            this._dropContainer._sortItem(
              this,
              e,
              t,
              this._pointerDirectionDelta
            ),
            (this._preview.style.transform = K(
              e - this._pickupPositionInElement.x,
              t - this._pickupPositionInElement.y
            ));
        }
        _createPreviewElement() {
          const e = this._previewTemplate,
            t = this.previewClass,
            o = e ? e.template : null;
          let i;
          if (o && e) {
            const t = e.matchSize
                ? this._rootElement.getBoundingClientRect()
                : null,
              a = e.viewContainer.createEmbeddedView(o, e.context);
            a.detectChanges(),
              (i = Y(a, this._document)),
              (this._previewRef = a),
              e.matchSize
                ? Q(i, t)
                : (i.style.transform = K(
                    this._pickupPositionOnPage.x,
                    this._pickupPositionOnPage.y
                  ));
          } else {
            const e = this._rootElement;
            (i = M(e)), Q(i, e.getBoundingClientRect());
          }
          return (
            R(i.style, {
              pointerEvents: 'none',
              margin: '0',
              position: 'fixed',
              top: '0',
              left: '0',
              zIndex: '' + (this._config.zIndex || 1e3)
            }),
            C(i, !1),
            i.classList.add('cdk-drag-preview'),
            i.setAttribute('dir', this._direction),
            t &&
              (Array.isArray(t)
                ? t.forEach((e) => i.classList.add(e))
                : i.classList.add(t)),
            i
          );
        }
        _animatePreviewToPlaceholder() {
          if (!this._hasMoved) return Promise.resolve();
          const e = this._placeholder.getBoundingClientRect();
          this._preview.classList.add('cdk-drag-animating'),
            (this._preview.style.transform = K(e.left, e.top));
          const t = (function (e) {
            const t = getComputedStyle(e),
              o = S(t, 'transition-property'),
              i = o.find((e) => 'transform' === e || 'all' === e);
            if (!i) return 0;
            const a = o.indexOf(i),
              n = S(t, 'transition-duration'),
              r = S(t, 'transition-delay');
            return O(n[a]) + O(r[a]);
          })(this._preview);
          return 0 === t
            ? Promise.resolve()
            : this._ngZone.runOutsideAngular(
                () =>
                  new Promise((e) => {
                    const o = (t) => {
                        (!t ||
                          (t.target === this._preview &&
                            'transform' === t.propertyName)) &&
                          (this._preview.removeEventListener(
                            'transitionend',
                            o
                          ),
                          e(),
                          clearTimeout(i));
                      },
                      i = setTimeout(o, 1.5 * t);
                    this._preview.addEventListener('transitionend', o);
                  })
              );
        }
        _createPlaceholderElement() {
          const e = this._placeholderTemplate,
            t = e ? e.template : null;
          let o;
          return (
            t
              ? ((this._placeholderRef = e.viewContainer.createEmbeddedView(
                  t,
                  e.context
                )),
                this._placeholderRef.detectChanges(),
                (o = Y(this._placeholderRef, this._document)))
              : (o = M(this._rootElement)),
            o.classList.add('cdk-drag-placeholder'),
            o
          );
        }
        _getPointerPositionInElement(e, t) {
          const o = this._rootElement.getBoundingClientRect(),
            i = e === this._rootElement ? null : e,
            a = i ? i.getBoundingClientRect() : o,
            n = H(t) ? t.targetTouches[0] : t,
            r = this._getViewportScrollPosition();
          return {
            x: a.left - o.left + (n.pageX - a.left - r.left),
            y: a.top - o.top + (n.pageY - a.top - r.top)
          };
        }
        _getPointerPositionOnPage(e) {
          const t = this._getViewportScrollPosition(),
            o = H(e)
              ? e.touches[0] || e.changedTouches[0] || { pageX: 0, pageY: 0 }
              : e,
            i = o.pageX - t.left,
            a = o.pageY - t.top;
          if (this._ownerSVGElement) {
            const e = this._ownerSVGElement.getScreenCTM();
            if (e) {
              const t = this._ownerSVGElement.createSVGPoint();
              return (t.x = i), (t.y = a), t.matrixTransform(e.inverse());
            }
          }
          return { x: i, y: a };
        }
        _getConstrainedPointerPosition(e) {
          const t = this._dropContainer ? this._dropContainer.lockAxis : null;
          let { x: o, y: i } = this.constrainPosition
            ? this.constrainPosition(e, this)
            : e;
          if (
            ('x' === this.lockAxis || 'x' === t
              ? (i = this._pickupPositionOnPage.y)
              : ('y' !== this.lockAxis && 'y' !== t) ||
                (o = this._pickupPositionOnPage.x),
            this._boundaryRect)
          ) {
            const { x: e, y: t } = this._pickupPositionInElement,
              a = this._boundaryRect,
              n = this._previewRect,
              r = a.top + t,
              s = a.bottom - (n.height - t);
            (o = q(o, a.left + e, a.right - (n.width - e))), (i = q(i, r, s));
          }
          return { x: o, y: i };
        }
        _updatePointerDirectionDelta(e) {
          const { x: t, y: o } = e,
            i = this._pointerDirectionDelta,
            a = this._pointerPositionAtLastDirectionChange,
            n = Math.abs(t - a.x),
            r = Math.abs(o - a.y);
          return (
            n > this._config.pointerDirectionChangeThreshold &&
              ((i.x = t > a.x ? 1 : -1), (a.x = t)),
            r > this._config.pointerDirectionChangeThreshold &&
              ((i.y = o > a.y ? 1 : -1), (a.y = o)),
            i
          );
        }
        _toggleNativeDragInteractions() {
          if (!this._rootElement || !this._handles) return;
          const e = this._handles.length > 0 || !this.isDragging();
          e !== this._nativeInteractionsEnabled &&
            ((this._nativeInteractionsEnabled = e), C(this._rootElement, e));
        }
        _removeRootElementListeners(e) {
          e.removeEventListener('mousedown', this._pointerDown, B),
            e.removeEventListener('touchstart', this._pointerDown, F);
        }
        _applyRootElementTransform(e, t) {
          const o = K(e, t);
          null == this._initialTransform &&
            (this._initialTransform = this._rootElement.style.transform || ''),
            (this._rootElement.style.transform = this._initialTransform
              ? o + ' ' + this._initialTransform
              : o);
        }
        _getDragDistance(e) {
          const t = this._pickupPositionOnPage;
          return t ? { x: e.x - t.x, y: e.y - t.y } : { x: 0, y: 0 };
        }
        _cleanupCachedDimensions() {
          (this._boundaryRect = this._previewRect = void 0),
            this._parentPositions.clear();
        }
        _containInsideBoundaryOnResize() {
          let { x: e, y: t } = this._passiveTransform;
          if (
            (0 === e && 0 === t) ||
            this.isDragging() ||
            !this._boundaryElement
          )
            return;
          const o = this._boundaryElement.getBoundingClientRect(),
            i = this._rootElement.getBoundingClientRect();
          if (
            (0 === o.width && 0 === o.height) ||
            (0 === i.width && 0 === i.height)
          )
            return;
          const a = o.left - i.left,
            n = i.right - o.right,
            r = o.top - i.top,
            s = i.bottom - o.bottom;
          o.width > i.width ? (a > 0 && (e += a), n > 0 && (e -= n)) : (e = 0),
            o.height > i.height
              ? (r > 0 && (t += r), s > 0 && (t -= s))
              : (t = 0),
            (e === this._passiveTransform.x &&
              t === this._passiveTransform.y) ||
              this.setFreeDragPosition({ y: t, x: e });
        }
        _getDragStartDelay(e) {
          const t = this.dragStartDelay;
          return 'number' == typeof t ? t : H(e) ? t.touch : t ? t.mouse : 0;
        }
        _updateOnScroll(e) {
          const t = this._parentPositions.handleScroll(e);
          if (t) {
            const o = e.target;
            this._boundaryRect &&
              (o === this._document ||
                (o !== this._boundaryElement &&
                  o.contains(this._boundaryElement))) &&
              D(this._boundaryRect, t.top, t.left),
              (this._pickupPositionOnPage.x += t.left),
              (this._pickupPositionOnPage.y += t.top),
              this._dropContainer ||
                ((this._activeTransform.x -= t.left),
                (this._activeTransform.y -= t.top),
                this._applyRootElementTransform(
                  this._activeTransform.x,
                  this._activeTransform.y
                ));
          }
        }
        _getViewportScrollPosition() {
          const e = this._parentPositions.positions.get(this._document);
          return e
            ? e.scrollPosition
            : this._viewportRuler.getViewportScrollPosition();
        }
        _getShadowRoot() {
          return (
            void 0 === this._cachedShadowRoot &&
              (this._cachedShadowRoot = Object(r.c)(this._rootElement)),
            this._cachedShadowRoot
          );
        }
      }
      function K(e, t) {
        return `translate3d(${Math.round(e)}px, ${Math.round(t)}px, 0)`;
      }
      function q(e, t, o) {
        return Math.max(t, Math.min(o, e));
      }
      function N(e) {
        e && e.parentNode && e.parentNode.removeChild(e);
      }
      function H(e) {
        return 't' === e.type[0];
      }
      function Y(e, t) {
        const o = e.rootNodes;
        if (1 === o.length && o[0].nodeType === t.ELEMENT_NODE) return o[0];
        const i = t.createElement('div');
        return o.forEach((e) => i.appendChild(e)), i;
      }
      function Q(e, t) {
        (e.style.width = t.width + 'px'),
          (e.style.height = t.height + 'px'),
          (e.style.transform = K(t.left, t.top));
      }
      function G(e, t) {
        return Math.max(0, Math.min(t, e));
      }
      class W {
        constructor(e, t, o, i, a) {
          (this._dragDropRegistry = t),
            (this._ngZone = i),
            (this._viewportRuler = a),
            (this.disabled = !1),
            (this.sortingDisabled = !1),
            (this.autoScrollDisabled = !1),
            (this.enterPredicate = () => !0),
            (this.sortPredicate = () => !0),
            (this.beforeStarted = new l.a()),
            (this.entered = new l.a()),
            (this.exited = new l.a()),
            (this.dropped = new l.a()),
            (this.sorted = new l.a()),
            (this._isDragging = !1),
            (this._itemPositions = []),
            (this._previousSwap = { drag: null, delta: 0, overlaps: !1 }),
            (this._draggables = []),
            (this._siblings = []),
            (this._orientation = 'vertical'),
            (this._activeSiblings = new Set()),
            (this._direction = 'ltr'),
            (this._viewportScrollSubscription = c.a.EMPTY),
            (this._verticalScrollDirection = 0),
            (this._horizontalScrollDirection = 0),
            (this._stopScrollTimers = new l.a()),
            (this._cachedShadowRoot = null),
            (this._startScrollInterval = () => {
              this._stopScrolling(),
                (function (e = 0, t = p.a) {
                  return (
                    (!Object(h.a)(e) || e < 0) && (e = 0),
                    (t && 'function' == typeof t.schedule) || (t = p.a),
                    new d.a(
                      (o) => (
                        o.add(
                          t.schedule(u, e, {
                            subscriber: o,
                            counter: 0,
                            period: e
                          })
                        ),
                        o
                      )
                    )
                  );
                })(0, m.a)
                  .pipe(Object(b.a)(this._stopScrollTimers))
                  .subscribe(() => {
                    const e = this._scrollNode;
                    1 === this._verticalScrollDirection
                      ? U(e, -2)
                      : 2 === this._verticalScrollDirection && U(e, 2),
                      1 === this._horizontalScrollDirection
                        ? Z(e, -2)
                        : 2 === this._horizontalScrollDirection && Z(e, 2);
                  });
            }),
            (this.element = Object(s.d)(e)),
            (this._document = o),
            this.withScrollableParents([this.element]),
            t.registerDropContainer(this),
            (this._parentPositions = new I(o, a));
        }
        dispose() {
          this._stopScrolling(),
            this._stopScrollTimers.complete(),
            this._viewportScrollSubscription.unsubscribe(),
            this.beforeStarted.complete(),
            this.entered.complete(),
            this.exited.complete(),
            this.dropped.complete(),
            this.sorted.complete(),
            this._activeSiblings.clear(),
            (this._scrollNode = null),
            this._parentPositions.clear(),
            this._dragDropRegistry.removeDropContainer(this);
        }
        isDragging() {
          return this._isDragging;
        }
        start() {
          this._draggingStarted(), this._notifyReceivingSiblings();
        }
        enter(e, t, o, i) {
          let a;
          this._draggingStarted(),
            null == i
              ? ((a = this.sortingDisabled ? this._draggables.indexOf(e) : -1),
                -1 === a &&
                  (a = this._getItemIndexFromPointerPosition(e, t, o)))
              : (a = i);
          const n = this._activeDraggables,
            r = n.indexOf(e),
            l = e.getPlaceholderElement();
          let c = n[a];
          if (
            (c === e && (c = n[a + 1]),
            r > -1 && n.splice(r, 1),
            c && !this._dragDropRegistry.isDragging(c))
          ) {
            const t = c.getRootElement();
            t.parentElement.insertBefore(l, t), n.splice(a, 0, e);
          } else if (this._shouldEnterAsFirstChild(t, o)) {
            const t = n[0].getRootElement();
            t.parentNode.insertBefore(l, t), n.unshift(e);
          } else Object(s.d)(this.element).appendChild(l), n.push(e);
          (l.style.transform = ''),
            this._cacheItemPositions(),
            this._cacheParentPositions(),
            this._notifyReceivingSiblings(),
            this.entered.next({
              item: e,
              container: this,
              currentIndex: this.getItemIndex(e)
            });
        }
        exit(e) {
          this._reset(), this.exited.next({ item: e, container: this });
        }
        drop(e, t, o, i, a, n) {
          this._reset(),
            this.dropped.next({
              item: e,
              currentIndex: t,
              previousIndex: o,
              container: this,
              previousContainer: i,
              isPointerOverContainer: a,
              distance: n
            });
        }
        withItems(e) {
          const t = this._draggables;
          return (
            (this._draggables = e),
            e.forEach((e) => e._withDropContainer(this)),
            this.isDragging() &&
              (t.filter((e) => e.isDragging()).every((t) => -1 === e.indexOf(t))
                ? this._reset()
                : this._cacheItems()),
            this
          );
        }
        withDirection(e) {
          return (this._direction = e), this;
        }
        connectedTo(e) {
          return (this._siblings = e.slice()), this;
        }
        withOrientation(e) {
          return (this._orientation = e), this;
        }
        withScrollableParents(e) {
          const t = Object(s.d)(this.element);
          return (
            (this._scrollableElements =
              -1 === e.indexOf(t) ? [t, ...e] : e.slice()),
            this
          );
        }
        getScrollableParents() {
          return this._scrollableElements;
        }
        getItemIndex(e) {
          return this._isDragging
            ? X(
                'horizontal' === this._orientation && 'rtl' === this._direction
                  ? this._itemPositions.slice().reverse()
                  : this._itemPositions,
                (t) => t.drag === e
              )
            : this._draggables.indexOf(e);
        }
        isReceiving() {
          return this._activeSiblings.size > 0;
        }
        _sortItem(e, t, o, i) {
          if (
            this.sortingDisabled ||
            !this._clientRect ||
            !E(this._clientRect, 0.05, t, o)
          )
            return;
          const a = this._itemPositions,
            n = this._getItemIndexFromPointerPosition(e, t, o, i);
          if (-1 === n && a.length > 0) return;
          const r = 'horizontal' === this._orientation,
            s = X(a, (t) => t.drag === e),
            l = a[n],
            c = l.clientRect,
            d = s > n ? 1 : -1,
            p = this._getItemOffsetPx(a[s].clientRect, c, d),
            h = this._getSiblingOffsetPx(s, a, d),
            u = a.slice();
          !(function (e, t, o) {
            const i = G(t, e.length - 1),
              a = G(o, e.length - 1);
            if (i === a) return;
            const n = e[i],
              r = a < i ? -1 : 1;
            for (let s = i; s !== a; s += r) e[s] = e[s + r];
            e[a] = n;
          })(a, s, n),
            this.sorted.next({
              previousIndex: s,
              currentIndex: n,
              container: this,
              item: e
            }),
            a.forEach((t, o) => {
              if (u[o] === t) return;
              const i = t.drag === e,
                a = i ? p : h,
                n = i ? e.getPlaceholderElement() : t.drag.getRootElement();
              (t.offset += a),
                r
                  ? ((n.style.transform = `translate3d(${Math.round(
                      t.offset
                    )}px, 0, 0)`),
                    D(t.clientRect, 0, a))
                  : ((n.style.transform = `translate3d(0, ${Math.round(
                      t.offset
                    )}px, 0)`),
                    D(t.clientRect, a, 0));
            }),
            (this._previousSwap.overlaps = z(c, t, o)),
            (this._previousSwap.drag = l.drag),
            (this._previousSwap.delta = r ? i.x : i.y);
        }
        _startScrollingIfNecessary(e, t) {
          if (this.autoScrollDisabled) return;
          let o,
            i = 0,
            a = 0;
          if (
            (this._parentPositions.positions.forEach((n, r) => {
              r !== this._document &&
                n.clientRect &&
                !o &&
                E(n.clientRect, 0.05, e, t) &&
                (([i, a] = (function (e, t, o, i) {
                  const a = $(t, i),
                    n = J(t, o);
                  let r = 0,
                    s = 0;
                  if (a) {
                    const t = e.scrollTop;
                    1 === a
                      ? t > 0 && (r = 1)
                      : e.scrollHeight - t > e.clientHeight && (r = 2);
                  }
                  if (n) {
                    const t = e.scrollLeft;
                    1 === n
                      ? t > 0 && (s = 1)
                      : e.scrollWidth - t > e.clientWidth && (s = 2);
                  }
                  return [r, s];
                })(r, n.clientRect, e, t)),
                (i || a) && (o = r));
            }),
            !i && !a)
          ) {
            const {
                width: n,
                height: r
              } = this._viewportRuler.getViewportSize(),
              s = { width: n, height: r, top: 0, right: n, bottom: r, left: 0 };
            (i = $(s, t)), (a = J(s, e)), (o = window);
          }
          !o ||
            (i === this._verticalScrollDirection &&
              a === this._horizontalScrollDirection &&
              o === this._scrollNode) ||
            ((this._verticalScrollDirection = i),
            (this._horizontalScrollDirection = a),
            (this._scrollNode = o),
            (i || a) && o
              ? this._ngZone.runOutsideAngular(this._startScrollInterval)
              : this._stopScrolling());
        }
        _stopScrolling() {
          this._stopScrollTimers.next();
        }
        _draggingStarted() {
          const e = Object(s.d)(this.element).style;
          this.beforeStarted.next(),
            (this._isDragging = !0),
            (this._initialScrollSnap =
              e.msScrollSnapType || e.scrollSnapType || ''),
            (e.scrollSnapType = e.msScrollSnapType = 'none'),
            this._cacheItems(),
            this._viewportScrollSubscription.unsubscribe(),
            this._listenToScrollEvents();
        }
        _cacheParentPositions() {
          const e = Object(s.d)(this.element);
          this._parentPositions.cache(this._scrollableElements),
            (this._clientRect = this._parentPositions.positions.get(
              e
            ).clientRect);
        }
        _cacheItemPositions() {
          const e = 'horizontal' === this._orientation;
          this._itemPositions = this._activeDraggables
            .map((e) => {
              const t = e.getVisibleElement();
              return { drag: e, offset: 0, clientRect: P(t) };
            })
            .sort((t, o) =>
              e
                ? t.clientRect.left - o.clientRect.left
                : t.clientRect.top - o.clientRect.top
            );
        }
        _reset() {
          this._isDragging = !1;
          const e = Object(s.d)(this.element).style;
          (e.scrollSnapType = e.msScrollSnapType = this._initialScrollSnap),
            this._activeDraggables.forEach((e) => {
              const t = e.getRootElement();
              t && (t.style.transform = '');
            }),
            this._siblings.forEach((e) => e._stopReceiving(this)),
            (this._activeDraggables = []),
            (this._itemPositions = []),
            (this._previousSwap.drag = null),
            (this._previousSwap.delta = 0),
            (this._previousSwap.overlaps = !1),
            this._stopScrolling(),
            this._viewportScrollSubscription.unsubscribe(),
            this._parentPositions.clear();
        }
        _getSiblingOffsetPx(e, t, o) {
          const i = 'horizontal' === this._orientation,
            a = t[e].clientRect,
            n = t[e + -1 * o];
          let r = a[i ? 'width' : 'height'] * o;
          if (n) {
            const e = i ? 'left' : 'top',
              t = i ? 'right' : 'bottom';
            -1 === o
              ? (r -= n.clientRect[e] - a[t])
              : (r += a[e] - n.clientRect[t]);
          }
          return r;
        }
        _getItemOffsetPx(e, t, o) {
          const i = 'horizontal' === this._orientation;
          let a = i ? t.left - e.left : t.top - e.top;
          return (
            -1 === o && (a += i ? t.width - e.width : t.height - e.height), a
          );
        }
        _shouldEnterAsFirstChild(e, t) {
          if (!this._activeDraggables.length) return !1;
          const o = this._itemPositions,
            i = 'horizontal' === this._orientation;
          if (o[0].drag !== this._activeDraggables[0]) {
            const a = o[o.length - 1].clientRect;
            return i ? e >= a.right : t >= a.bottom;
          }
          {
            const a = o[0].clientRect;
            return i ? e <= a.left : t <= a.top;
          }
        }
        _getItemIndexFromPointerPosition(e, t, o, i) {
          const a = 'horizontal' === this._orientation,
            n = X(this._itemPositions, ({ drag: n, clientRect: r }, s, l) => {
              if (n === e) return l.length < 2;
              if (i) {
                const e = a ? i.x : i.y;
                if (
                  n === this._previousSwap.drag &&
                  this._previousSwap.overlaps &&
                  e === this._previousSwap.delta
                )
                  return !1;
              }
              return a
                ? t >= Math.floor(r.left) && t < Math.floor(r.right)
                : o >= Math.floor(r.top) && o < Math.floor(r.bottom);
            });
          return -1 !== n && this.sortPredicate(n, e, this) ? n : -1;
        }
        _cacheItems() {
          (this._activeDraggables = this._draggables.slice()),
            this._cacheItemPositions(),
            this._cacheParentPositions();
        }
        _isOverContainer(e, t) {
          return null != this._clientRect && z(this._clientRect, e, t);
        }
        _getSiblingContainerFromPosition(e, t, o) {
          return this._siblings.find((i) => i._canReceive(e, t, o));
        }
        _canReceive(e, t, o) {
          if (
            !this._clientRect ||
            !z(this._clientRect, t, o) ||
            !this.enterPredicate(e, this)
          )
            return !1;
          const i = this._getShadowRoot().elementFromPoint(t, o);
          if (!i) return !1;
          const a = Object(s.d)(this.element);
          return i === a || a.contains(i);
        }
        _startReceiving(e, t) {
          const o = this._activeSiblings;
          !o.has(e) &&
            t.every(
              (e) =>
                this.enterPredicate(e, this) || this._draggables.indexOf(e) > -1
            ) &&
            (o.add(e),
            this._cacheParentPositions(),
            this._listenToScrollEvents());
        }
        _stopReceiving(e) {
          this._activeSiblings.delete(e),
            this._viewportScrollSubscription.unsubscribe();
        }
        _listenToScrollEvents() {
          this._viewportScrollSubscription = this._dragDropRegistry.scroll.subscribe(
            (e) => {
              if (this.isDragging()) {
                const t = this._parentPositions.handleScroll(e);
                t &&
                  (this._itemPositions.forEach(({ clientRect: e }) => {
                    D(e, t.top, t.left);
                  }),
                  this._itemPositions.forEach(({ drag: e }) => {
                    this._dragDropRegistry.isDragging(e) &&
                      e._sortFromLastPointerPosition();
                  }));
              } else this.isReceiving() && this._cacheParentPositions();
            }
          );
        }
        _getShadowRoot() {
          if (!this._cachedShadowRoot) {
            const e = Object(r.c)(Object(s.d)(this.element));
            this._cachedShadowRoot = e || this._document;
          }
          return this._cachedShadowRoot;
        }
        _notifyReceivingSiblings() {
          const e = this._activeDraggables.filter((e) => e.isDragging());
          this._siblings.forEach((t) => t._startReceiving(this, e));
        }
      }
      function X(e, t) {
        for (let o = 0; o < e.length; o++) if (t(e[o], o, e)) return o;
        return -1;
      }
      function U(e, t) {
        e === window ? e.scrollBy(0, t) : (e.scrollTop += t);
      }
      function Z(e, t) {
        e === window ? e.scrollBy(t, 0) : (e.scrollLeft += t);
      }
      function $(e, t) {
        const { top: o, bottom: i, height: a } = e,
          n = 0.05 * a;
        return t >= o - n && t <= o + n ? 1 : t >= i - n && t <= i + n ? 2 : 0;
      }
      function J(e, t) {
        const { left: o, right: i, width: a } = e,
          n = 0.05 * a;
        return t >= o - n && t <= o + n ? 1 : t >= i - n && t <= i + n ? 2 : 0;
      }
      const ee = Object(r.f)({ passive: !1, capture: !0 });
      let te = (() => {
        class e {
          constructor(e, t) {
            (this._ngZone = e),
              (this._dropInstances = new Set()),
              (this._dragInstances = new Set()),
              (this._activeDragInstances = []),
              (this._globalListeners = new Map()),
              (this._draggingPredicate = (e) => e.isDragging()),
              (this.pointerMove = new l.a()),
              (this.pointerUp = new l.a()),
              (this.scroll = new l.a()),
              (this._preventDefaultWhileDragging = (e) => {
                this._activeDragInstances.length > 0 && e.preventDefault();
              }),
              (this._persistentTouchmoveListener = (e) => {
                this._activeDragInstances.length > 0 &&
                  (this._activeDragInstances.some(this._draggingPredicate) &&
                    e.preventDefault(),
                  this.pointerMove.next(e));
              }),
              (this._document = t);
          }
          registerDropContainer(e) {
            this._dropInstances.has(e) || this._dropInstances.add(e);
          }
          registerDragItem(e) {
            this._dragInstances.add(e),
              1 === this._dragInstances.size &&
                this._ngZone.runOutsideAngular(() => {
                  this._document.addEventListener(
                    'touchmove',
                    this._persistentTouchmoveListener,
                    ee
                  );
                });
          }
          removeDropContainer(e) {
            this._dropInstances.delete(e);
          }
          removeDragItem(e) {
            this._dragInstances.delete(e),
              this.stopDragging(e),
              0 === this._dragInstances.size &&
                this._document.removeEventListener(
                  'touchmove',
                  this._persistentTouchmoveListener,
                  ee
                );
          }
          startDragging(e, t) {
            if (
              !(this._activeDragInstances.indexOf(e) > -1) &&
              (this._activeDragInstances.push(e),
              1 === this._activeDragInstances.length)
            ) {
              const e = t.type.startsWith('touch');
              this._globalListeners
                .set(e ? 'touchend' : 'mouseup', {
                  handler: (e) => this.pointerUp.next(e),
                  options: !0
                })
                .set('scroll', {
                  handler: (e) => this.scroll.next(e),
                  options: !0
                })
                .set('selectstart', {
                  handler: this._preventDefaultWhileDragging,
                  options: ee
                }),
                e ||
                  this._globalListeners.set('mousemove', {
                    handler: (e) => this.pointerMove.next(e),
                    options: ee
                  }),
                this._ngZone.runOutsideAngular(() => {
                  this._globalListeners.forEach((e, t) => {
                    this._document.addEventListener(t, e.handler, e.options);
                  });
                });
            }
          }
          stopDragging(e) {
            const t = this._activeDragInstances.indexOf(e);
            t > -1 &&
              (this._activeDragInstances.splice(t, 1),
              0 === this._activeDragInstances.length &&
                this._clearGlobalListeners());
          }
          isDragging(e) {
            return this._activeDragInstances.indexOf(e) > -1;
          }
          ngOnDestroy() {
            this._dragInstances.forEach((e) => this.removeDragItem(e)),
              this._dropInstances.forEach((e) => this.removeDropContainer(e)),
              this._clearGlobalListeners(),
              this.pointerMove.complete(),
              this.pointerUp.complete();
          }
          _clearGlobalListeners() {
            this._globalListeners.forEach((e, t) => {
              this._document.removeEventListener(t, e.handler, e.options);
            }),
              this._globalListeners.clear();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(i.z), i.Ub(a.d));
          }),
          (e.ɵprov = Object(i.Gb)({
            factory: function () {
              return new e(Object(i.Ub)(i.z), Object(i.Ub)(a.d));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      const oe = { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
      let ie = (() => {
        class e {
          constructor(e, t, o, i) {
            (this._document = e),
              (this._ngZone = t),
              (this._viewportRuler = o),
              (this._dragDropRegistry = i);
          }
          createDrag(e, t = oe) {
            return new V(
              e,
              t,
              this._document,
              this._ngZone,
              this._viewportRuler,
              this._dragDropRegistry
            );
          }
          createDropList(e) {
            return new W(
              e,
              this._dragDropRegistry,
              this._document,
              this._ngZone,
              this._viewportRuler
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(a.d), i.Ub(i.z), i.Ub(n.e), i.Ub(te));
          }),
          (e.ɵprov = Object(i.Gb)({
            factory: function () {
              return new e(
                Object(i.Ub)(a.d),
                Object(i.Ub)(i.z),
                Object(i.Ub)(n.e),
                Object(i.Ub)(te)
              );
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      const ae = new i.q('CDK_DRAG_PARENT'),
        ne = new i.q('CdkDropListGroup');
      let re = (() => {
        class e {
          constructor() {
            (this._items = new Set()), (this._disabled = !1);
          }
          get disabled() {
            return this._disabled;
          }
          set disabled(e) {
            this._disabled = Object(s.b)(e);
          }
          ngOnDestroy() {
            this._items.clear();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵdir = i.Fb({
            type: e,
            selectors: [['', 'cdkDropListGroup', '']],
            inputs: { disabled: ['cdkDropListGroupDisabled', 'disabled'] },
            exportAs: ['cdkDropListGroup'],
            features: [i.yb([{ provide: ne, useExisting: e }])]
          })),
          e
        );
      })();
      const se = new i.q('CDK_DRAG_CONFIG');
      let le = 0;
      const ce = new i.q('CdkDropList');
      let de = (() => {
        class e {
          constructor(t, o, a, n, r, s, c) {
            (this.element = t),
              (this._changeDetectorRef = a),
              (this._scrollDispatcher = n),
              (this._dir = r),
              (this._group = s),
              (this._destroyed = new l.a()),
              (this.connectedTo = []),
              (this.id = 'cdk-drop-list-' + le++),
              (this.enterPredicate = () => !0),
              (this.sortPredicate = () => !0),
              (this.dropped = new i.n()),
              (this.entered = new i.n()),
              (this.exited = new i.n()),
              (this.sorted = new i.n()),
              (this._unsortedItems = new Set()),
              (this._dropListRef = o.createDropList(t)),
              (this._dropListRef.data = this),
              c && this._assignDefaults(c),
              (this._dropListRef.enterPredicate = (e, t) =>
                this.enterPredicate(e.data, t.data)),
              (this._dropListRef.sortPredicate = (e, t, o) =>
                this.sortPredicate(e, t.data, o.data)),
              this._setupInputSyncSubscription(this._dropListRef),
              this._handleEvents(this._dropListRef),
              e._dropLists.push(this),
              s && s._items.add(this);
          }
          get disabled() {
            return this._disabled || (!!this._group && this._group.disabled);
          }
          set disabled(e) {
            this._dropListRef.disabled = this._disabled = Object(s.b)(e);
          }
          addItem(e) {
            this._unsortedItems.add(e),
              this._dropListRef.isDragging() && this._syncItemsWithRef();
          }
          removeItem(e) {
            this._unsortedItems.delete(e),
              this._dropListRef.isDragging() && this._syncItemsWithRef();
          }
          getSortedItems() {
            return Array.from(this._unsortedItems).sort((e, t) =>
              e._dragRef
                .getVisibleElement()
                .compareDocumentPosition(t._dragRef.getVisibleElement()) &
              Node.DOCUMENT_POSITION_FOLLOWING
                ? -1
                : 1
            );
          }
          ngOnDestroy() {
            const t = e._dropLists.indexOf(this);
            t > -1 && e._dropLists.splice(t, 1),
              this._group && this._group._items.delete(this),
              this._unsortedItems.clear(),
              this._dropListRef.dispose(),
              this._destroyed.next(),
              this._destroyed.complete();
          }
          _setupInputSyncSubscription(t) {
            this._dir &&
              this._dir.change
                .pipe(
                  Object(k.a)(this._dir.value),
                  Object(b.a)(this._destroyed)
                )
                .subscribe((e) => t.withDirection(e)),
              t.beforeStarted.subscribe(() => {
                const o = Object(s.a)(this.connectedTo).map((t) =>
                  'string' == typeof t
                    ? e._dropLists.find((e) => e.id === t)
                    : t
                );
                if (
                  (this._group &&
                    this._group._items.forEach((e) => {
                      -1 === o.indexOf(e) && o.push(e);
                    }),
                  !this._scrollableParentsResolved)
                ) {
                  const e = this._scrollDispatcher
                    .getAncestorScrollContainers(this.element)
                    .map((e) => e.getElementRef().nativeElement);
                  this._dropListRef.withScrollableParents(e),
                    (this._scrollableParentsResolved = !0);
                }
                (t.disabled = this.disabled),
                  (t.lockAxis = this.lockAxis),
                  (t.sortingDisabled = Object(s.b)(this.sortingDisabled)),
                  (t.autoScrollDisabled = Object(s.b)(this.autoScrollDisabled)),
                  t
                    .connectedTo(
                      o
                        .filter((e) => e && e !== this)
                        .map((e) => e._dropListRef)
                    )
                    .withOrientation(this.orientation);
              });
          }
          _handleEvents(e) {
            e.beforeStarted.subscribe(() => {
              this._syncItemsWithRef(), this._changeDetectorRef.markForCheck();
            }),
              e.entered.subscribe((e) => {
                this.entered.emit({
                  container: this,
                  item: e.item.data,
                  currentIndex: e.currentIndex
                });
              }),
              e.exited.subscribe((e) => {
                this.exited.emit({ container: this, item: e.item.data }),
                  this._changeDetectorRef.markForCheck();
              }),
              e.sorted.subscribe((e) => {
                this.sorted.emit({
                  previousIndex: e.previousIndex,
                  currentIndex: e.currentIndex,
                  container: this,
                  item: e.item.data
                });
              }),
              e.dropped.subscribe((e) => {
                this.dropped.emit({
                  previousIndex: e.previousIndex,
                  currentIndex: e.currentIndex,
                  previousContainer: e.previousContainer.data,
                  container: e.container.data,
                  item: e.item.data,
                  isPointerOverContainer: e.isPointerOverContainer,
                  distance: e.distance
                }),
                  this._changeDetectorRef.markForCheck();
              });
          }
          _assignDefaults(e) {
            const {
              lockAxis: t,
              draggingDisabled: o,
              sortingDisabled: i,
              listAutoScrollDisabled: a,
              listOrientation: n
            } = e;
            (this.disabled = null != o && o),
              (this.sortingDisabled = null != i && i),
              (this.autoScrollDisabled = null != a && a),
              (this.orientation = n || 'vertical'),
              t && (this.lockAxis = t);
          }
          _syncItemsWithRef() {
            this._dropListRef.withItems(
              this.getSortedItems().map((e) => e._dragRef)
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.Kb(i.l),
              i.Kb(ie),
              i.Kb(i.h),
              i.Kb(n.c),
              i.Kb(w.b, 8),
              i.Kb(ne, 12),
              i.Kb(se, 8)
            );
          }),
          (e.ɵdir = i.Fb({
            type: e,
            selectors: [['', 'cdkDropList', ''], ['cdk-drop-list']],
            hostAttrs: [1, 'cdk-drop-list'],
            hostVars: 7,
            hostBindings: function (e, t) {
              2 & e &&
                (i.Ab('id', t.id),
                i.Cb('cdk-drop-list-disabled', t.disabled)(
                  'cdk-drop-list-dragging',
                  t._dropListRef.isDragging()
                )('cdk-drop-list-receiving', t._dropListRef.isReceiving()));
            },
            inputs: {
              connectedTo: ['cdkDropListConnectedTo', 'connectedTo'],
              id: 'id',
              enterPredicate: ['cdkDropListEnterPredicate', 'enterPredicate'],
              sortPredicate: ['cdkDropListSortPredicate', 'sortPredicate'],
              disabled: ['cdkDropListDisabled', 'disabled'],
              sortingDisabled: [
                'cdkDropListSortingDisabled',
                'sortingDisabled'
              ],
              autoScrollDisabled: [
                'cdkDropListAutoScrollDisabled',
                'autoScrollDisabled'
              ],
              orientation: ['cdkDropListOrientation', 'orientation'],
              lockAxis: ['cdkDropListLockAxis', 'lockAxis'],
              data: ['cdkDropListData', 'data']
            },
            outputs: {
              dropped: 'cdkDropListDropped',
              entered: 'cdkDropListEntered',
              exited: 'cdkDropListExited',
              sorted: 'cdkDropListSorted'
            },
            exportAs: ['cdkDropList'],
            features: [
              i.yb([
                { provide: ne, useValue: void 0 },
                { provide: ce, useExisting: e }
              ])
            ]
          })),
          (e._dropLists = []),
          e
        );
      })();
      const pe = new i.q('CdkDragHandle'),
        he = new i.q('CdkDragPlaceholder'),
        ue = new i.q('CdkDragPreview');
      let me = (() => {
        class e {
          constructor(e, t, o, a, n, r, s, c, p, h, u) {
            (this.element = e),
              (this.dropContainer = t),
              (this._ngZone = a),
              (this._viewContainerRef = n),
              (this._dir = s),
              (this._changeDetectorRef = p),
              (this._selfHandle = h),
              (this._destroyed = new l.a()),
              (this.started = new i.n()),
              (this.released = new i.n()),
              (this.ended = new i.n()),
              (this.entered = new i.n()),
              (this.exited = new i.n()),
              (this.dropped = new i.n()),
              (this.moved = new d.a((e) => {
                const t = this._dragRef.moved
                  .pipe(
                    Object(f.a)((e) => ({
                      source: this,
                      pointerPosition: e.pointerPosition,
                      event: e.event,
                      delta: e.delta,
                      distance: e.distance
                    }))
                  )
                  .subscribe(e);
                return () => {
                  t.unsubscribe();
                };
              })),
              (this._dragRef = c.createDrag(e, {
                dragStartThreshold:
                  r && null != r.dragStartThreshold ? r.dragStartThreshold : 5,
                pointerDirectionChangeThreshold:
                  r && null != r.pointerDirectionChangeThreshold
                    ? r.pointerDirectionChangeThreshold
                    : 5,
                zIndex: null == r ? void 0 : r.zIndex,
                parentDragRef: null == u ? void 0 : u._dragRef
              })),
              (this._dragRef.data = this),
              r && this._assignDefaults(r),
              t &&
                (this._dragRef._withDropContainer(t._dropListRef),
                t.addItem(this)),
              this._syncInputs(this._dragRef),
              this._handleEvents(this._dragRef);
          }
          get disabled() {
            return (
              this._disabled ||
              (this.dropContainer && this.dropContainer.disabled)
            );
          }
          set disabled(e) {
            (this._disabled = Object(s.b)(e)),
              (this._dragRef.disabled = this._disabled);
          }
          getPlaceholderElement() {
            return this._dragRef.getPlaceholderElement();
          }
          getRootElement() {
            return this._dragRef.getRootElement();
          }
          reset() {
            this._dragRef.reset();
          }
          getFreeDragPosition() {
            return this._dragRef.getFreeDragPosition();
          }
          ngAfterViewInit() {
            this._ngZone.onStable
              .pipe(Object(y.a)(1), Object(b.a)(this._destroyed))
              .subscribe(() => {
                this._updateRootElement(),
                  this._handles.changes
                    .pipe(
                      Object(k.a)(this._handles),
                      Object(_.a)((e) => {
                        const t = e
                          .filter((e) => e._parentDrag === this)
                          .map((e) => e.element);
                        this._selfHandle &&
                          this.rootElementSelector &&
                          t.push(this.element),
                          this._dragRef.withHandles(t);
                      }),
                      Object(v.a)((e) =>
                        Object(g.a)(
                          ...e.map((e) => e._stateChanges.pipe(Object(k.a)(e)))
                        )
                      ),
                      Object(b.a)(this._destroyed)
                    )
                    .subscribe((e) => {
                      const t = this._dragRef,
                        o = e.element.nativeElement;
                      e.disabled ? t.disableHandle(o) : t.enableHandle(o);
                    }),
                  this.freeDragPosition &&
                    this._dragRef.setFreeDragPosition(this.freeDragPosition);
              });
          }
          ngOnChanges(e) {
            const t = e.rootElementSelector,
              o = e.freeDragPosition;
            t && !t.firstChange && this._updateRootElement(),
              o &&
                !o.firstChange &&
                this.freeDragPosition &&
                this._dragRef.setFreeDragPosition(this.freeDragPosition);
          }
          ngOnDestroy() {
            this.dropContainer && this.dropContainer.removeItem(this),
              this._destroyed.next(),
              this._destroyed.complete(),
              this._dragRef.dispose();
          }
          _updateRootElement() {
            const e = this.element.nativeElement,
              t = this.rootElementSelector
                ? ge(e, this.rootElementSelector)
                : e;
            this._dragRef.withRootElement(t || e);
          }
          _getBoundaryElement() {
            const e = this.boundaryElement;
            return e
              ? 'string' == typeof e
                ? ge(this.element.nativeElement, e)
                : Object(s.d)(e)
              : null;
          }
          _syncInputs(e) {
            e.beforeStarted.subscribe(() => {
              if (!e.isDragging()) {
                const t = this._dir,
                  o = this.dragStartDelay,
                  i = this._placeholderTemplate
                    ? {
                        template: this._placeholderTemplate.templateRef,
                        context: this._placeholderTemplate.data,
                        viewContainer: this._viewContainerRef
                      }
                    : null,
                  a = this._previewTemplate
                    ? {
                        template: this._previewTemplate.templateRef,
                        context: this._previewTemplate.data,
                        matchSize: this._previewTemplate.matchSize,
                        viewContainer: this._viewContainerRef
                      }
                    : null;
                (e.disabled = this.disabled),
                  (e.lockAxis = this.lockAxis),
                  (e.dragStartDelay =
                    'object' == typeof o && o ? o : Object(s.e)(o)),
                  (e.constrainPosition = this.constrainPosition),
                  (e.previewClass = this.previewClass),
                  e
                    .withBoundaryElement(this._getBoundaryElement())
                    .withPlaceholderTemplate(i)
                    .withPreviewTemplate(a),
                  t && e.withDirection(t.value);
              }
            });
          }
          _handleEvents(e) {
            e.started.subscribe(() => {
              this.started.emit({ source: this }),
                this._changeDetectorRef.markForCheck();
            }),
              e.released.subscribe(() => {
                this.released.emit({ source: this });
              }),
              e.ended.subscribe((e) => {
                this.ended.emit({ source: this, distance: e.distance }),
                  this._changeDetectorRef.markForCheck();
              }),
              e.entered.subscribe((e) => {
                this.entered.emit({
                  container: e.container.data,
                  item: this,
                  currentIndex: e.currentIndex
                });
              }),
              e.exited.subscribe((e) => {
                this.exited.emit({ container: e.container.data, item: this });
              }),
              e.dropped.subscribe((e) => {
                this.dropped.emit({
                  previousIndex: e.previousIndex,
                  currentIndex: e.currentIndex,
                  previousContainer: e.previousContainer.data,
                  container: e.container.data,
                  isPointerOverContainer: e.isPointerOverContainer,
                  item: this,
                  distance: e.distance
                });
              });
          }
          _assignDefaults(e) {
            const {
              lockAxis: t,
              dragStartDelay: o,
              constrainPosition: i,
              previewClass: a,
              boundaryElement: n,
              draggingDisabled: r,
              rootElementSelector: s
            } = e;
            (this.disabled = null != r && r),
              (this.dragStartDelay = o || 0),
              t && (this.lockAxis = t),
              i && (this.constrainPosition = i),
              a && (this.previewClass = a),
              n && (this.boundaryElement = n),
              s && (this.rootElementSelector = s);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              i.Kb(i.l),
              i.Kb(ce, 12),
              i.Kb(a.d),
              i.Kb(i.z),
              i.Kb(i.P),
              i.Kb(se, 8),
              i.Kb(w.b, 8),
              i.Kb(ie),
              i.Kb(i.h),
              i.Kb(pe, 10),
              i.Kb(ae, 12)
            );
          }),
          (e.ɵdir = i.Fb({
            type: e,
            selectors: [['', 'cdkDrag', '']],
            contentQueries: function (e, t, o) {
              if (
                (1 & e && (i.Db(o, ue, !0), i.Db(o, he, !0), i.Db(o, pe, !0)),
                2 & e)
              ) {
                let e;
                i.nc((e = i.Yb())) && (t._previewTemplate = e.first),
                  i.nc((e = i.Yb())) && (t._placeholderTemplate = e.first),
                  i.nc((e = i.Yb())) && (t._handles = e);
              }
            },
            hostAttrs: [1, 'cdk-drag'],
            hostVars: 4,
            hostBindings: function (e, t) {
              2 & e &&
                i.Cb('cdk-drag-disabled', t.disabled)(
                  'cdk-drag-dragging',
                  t._dragRef.isDragging()
                );
            },
            inputs: {
              disabled: ['cdkDragDisabled', 'disabled'],
              dragStartDelay: ['cdkDragStartDelay', 'dragStartDelay'],
              lockAxis: ['cdkDragLockAxis', 'lockAxis'],
              constrainPosition: [
                'cdkDragConstrainPosition',
                'constrainPosition'
              ],
              previewClass: ['cdkDragPreviewClass', 'previewClass'],
              boundaryElement: ['cdkDragBoundary', 'boundaryElement'],
              rootElementSelector: [
                'cdkDragRootElement',
                'rootElementSelector'
              ],
              data: ['cdkDragData', 'data'],
              freeDragPosition: ['cdkDragFreeDragPosition', 'freeDragPosition']
            },
            outputs: {
              started: 'cdkDragStarted',
              released: 'cdkDragReleased',
              ended: 'cdkDragEnded',
              entered: 'cdkDragEntered',
              exited: 'cdkDragExited',
              dropped: 'cdkDragDropped',
              moved: 'cdkDragMoved'
            },
            exportAs: ['cdkDrag'],
            features: [i.yb([{ provide: ae, useExisting: e }]), i.xb]
          })),
          e
        );
      })();
      function ge(e, t) {
        let o = e.parentElement;
        for (; o; ) {
          if (o.matches ? o.matches(t) : o.msMatchesSelector(t)) return o;
          o = o.parentElement;
        }
        return null;
      }
      let be = (() => {
        class e {}
        return (
          (e.ɵmod = i.Ib({ type: e })),
          (e.ɵinj = i.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [ie],
            imports: [n.b]
          })),
          e
        );
      })();
      var ke = o('3Pt+'),
        fe = o('u47x'),
        ye = o('FKr1'),
        _e = o('NXyV'),
        ve = o('LRne'),
        we = o('xgIS'),
        Re = o('+rOU'),
        Ce = o('GJmQ'),
        xe = o('FtGj');
      const Oe = Object(r.g)();
      class Se {
        constructor(e, t) {
          (this._viewportRuler = e),
            (this._previousHTMLStyles = { top: '', left: '' }),
            (this._isEnabled = !1),
            (this._document = t);
        }
        attach() {}
        enable() {
          if (this._canBeEnabled()) {
            const e = this._document.documentElement;
            (this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition()),
              (this._previousHTMLStyles.left = e.style.left || ''),
              (this._previousHTMLStyles.top = e.style.top || ''),
              (e.style.left = Object(s.c)(-this._previousScrollPosition.left)),
              (e.style.top = Object(s.c)(-this._previousScrollPosition.top)),
              e.classList.add('cdk-global-scrollblock'),
              (this._isEnabled = !0);
          }
        }
        disable() {
          if (this._isEnabled) {
            const e = this._document.documentElement,
              t = e.style,
              o = this._document.body.style,
              i = t.scrollBehavior || '',
              a = o.scrollBehavior || '';
            (this._isEnabled = !1),
              (t.left = this._previousHTMLStyles.left),
              (t.top = this._previousHTMLStyles.top),
              e.classList.remove('cdk-global-scrollblock'),
              Oe && (t.scrollBehavior = o.scrollBehavior = 'auto'),
              window.scroll(
                this._previousScrollPosition.left,
                this._previousScrollPosition.top
              ),
              Oe && ((t.scrollBehavior = i), (o.scrollBehavior = a));
          }
        }
        _canBeEnabled() {
          if (
            this._document.documentElement.classList.contains(
              'cdk-global-scrollblock'
            ) ||
            this._isEnabled
          )
            return !1;
          const e = this._document.body,
            t = this._viewportRuler.getViewportSize();
          return e.scrollHeight > t.height || e.scrollWidth > t.width;
        }
      }
      class Pe {
        constructor(e, t, o, i) {
          (this._scrollDispatcher = e),
            (this._ngZone = t),
            (this._viewportRuler = o),
            (this._config = i),
            (this._scrollSubscription = null),
            (this._detach = () => {
              this.disable(),
                this._overlayRef.hasAttached() &&
                  this._ngZone.run(() => this._overlayRef.detach());
            });
        }
        attach(e) {
          this._overlayRef = e;
        }
        enable() {
          if (this._scrollSubscription) return;
          const e = this._scrollDispatcher.scrolled(0);
          this._config && this._config.threshold && this._config.threshold > 1
            ? ((this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top),
              (this._scrollSubscription = e.subscribe(() => {
                const e = this._viewportRuler.getViewportScrollPosition().top;
                Math.abs(e - this._initialScrollPosition) >
                this._config.threshold
                  ? this._detach()
                  : this._overlayRef.updatePosition();
              })))
            : (this._scrollSubscription = e.subscribe(this._detach));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      class ze {
        enable() {}
        disable() {}
        attach() {}
      }
      function De(e, t) {
        return t.some(
          (t) =>
            e.bottom < t.top ||
            e.top > t.bottom ||
            e.right < t.left ||
            e.left > t.right
        );
      }
      function Ee(e, t) {
        return t.some(
          (t) =>
            e.top < t.top ||
            e.bottom > t.bottom ||
            e.left < t.left ||
            e.right > t.right
        );
      }
      class Ie {
        constructor(e, t, o, i) {
          (this._scrollDispatcher = e),
            (this._viewportRuler = t),
            (this._ngZone = o),
            (this._config = i),
            (this._scrollSubscription = null);
        }
        attach(e) {
          this._overlayRef = e;
        }
        enable() {
          this._scrollSubscription ||
            (this._scrollSubscription = this._scrollDispatcher
              .scrolled(this._config ? this._config.scrollThrottle : 0)
              .subscribe(() => {
                if (
                  (this._overlayRef.updatePosition(),
                  this._config && this._config.autoClose)
                ) {
                  const e = this._overlayRef.overlayElement.getBoundingClientRect(),
                    {
                      width: t,
                      height: o
                    } = this._viewportRuler.getViewportSize();
                  De(e, [
                    {
                      width: t,
                      height: o,
                      bottom: o,
                      right: t,
                      top: 0,
                      left: 0
                    }
                  ]) &&
                    (this.disable(),
                    this._ngZone.run(() => this._overlayRef.detach()));
                }
              }));
        }
        disable() {
          this._scrollSubscription &&
            (this._scrollSubscription.unsubscribe(),
            (this._scrollSubscription = null));
        }
        detach() {
          this.disable(), (this._overlayRef = null);
        }
      }
      let Me = (() => {
        class e {
          constructor(e, t, o, i) {
            (this._scrollDispatcher = e),
              (this._viewportRuler = t),
              (this._ngZone = o),
              (this.noop = () => new ze()),
              (this.close = (e) =>
                new Pe(
                  this._scrollDispatcher,
                  this._ngZone,
                  this._viewportRuler,
                  e
                )),
              (this.block = () => new Se(this._viewportRuler, this._document)),
              (this.reposition = (e) =>
                new Ie(
                  this._scrollDispatcher,
                  this._viewportRuler,
                  this._ngZone,
                  e
                )),
              (this._document = i);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(n.c), i.Ub(n.e), i.Ub(i.z), i.Ub(a.d));
          }),
          (e.ɵprov = Object(i.Gb)({
            factory: function () {
              return new e(
                Object(i.Ub)(n.c),
                Object(i.Ub)(n.e),
                Object(i.Ub)(i.z),
                Object(i.Ub)(a.d)
              );
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      class Ae {
        constructor(e) {
          if (
            ((this.scrollStrategy = new ze()),
            (this.panelClass = ''),
            (this.hasBackdrop = !1),
            (this.backdropClass = 'cdk-overlay-dark-backdrop'),
            (this.disposeOnNavigation = !1),
            e)
          ) {
            const t = Object.keys(e);
            for (const o of t) void 0 !== e[o] && (this[o] = e[o]);
          }
        }
      }
      class je {
        constructor(e, t, o, i, a) {
          (this.offsetX = o),
            (this.offsetY = i),
            (this.panelClass = a),
            (this.originX = e.originX),
            (this.originY = e.originY),
            (this.overlayX = t.overlayX),
            (this.overlayY = t.overlayY);
        }
      }
      class Te {
        constructor(e, t) {
          (this.connectionPair = e), (this.scrollableViewProperties = t);
        }
      }
      let Le = (() => {
          class e {
            constructor(e) {
              (this._attachedOverlays = []), (this._document = e);
            }
            ngOnDestroy() {
              this.detach();
            }
            add(e) {
              this.remove(e), this._attachedOverlays.push(e);
            }
            remove(e) {
              const t = this._attachedOverlays.indexOf(e);
              t > -1 && this._attachedOverlays.splice(t, 1),
                0 === this._attachedOverlays.length && this.detach();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(a.d));
            }),
            (e.ɵprov = Object(i.Gb)({
              factory: function () {
                return new e(Object(i.Ub)(a.d));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        Fe = (() => {
          class e extends Le {
            constructor(e) {
              super(e),
                (this._keydownListener = (e) => {
                  const t = this._attachedOverlays;
                  for (let o = t.length - 1; o > -1; o--)
                    if (t[o]._keydownEvents.observers.length > 0) {
                      t[o]._keydownEvents.next(e);
                      break;
                    }
                });
            }
            add(e) {
              super.add(e),
                this._isAttached ||
                  (this._document.body.addEventListener(
                    'keydown',
                    this._keydownListener
                  ),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  'keydown',
                  this._keydownListener
                ),
                (this._isAttached = !1));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(a.d));
            }),
            (e.ɵprov = Object(i.Gb)({
              factory: function () {
                return new e(Object(i.Ub)(a.d));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        Be = (() => {
          class e extends Le {
            constructor(e, t) {
              super(e),
                (this._platform = t),
                (this._cursorStyleIsSet = !1),
                (this._clickListener = (e) => {
                  const t = e.composedPath ? e.composedPath()[0] : e.target,
                    o = this._attachedOverlays.slice();
                  for (let i = o.length - 1; i > -1; i--) {
                    const a = o[i];
                    if (
                      !(a._outsidePointerEvents.observers.length < 1) &&
                      a.hasAttached()
                    ) {
                      if (a.overlayElement.contains(t)) break;
                      a._outsidePointerEvents.next(e);
                    }
                  }
                });
            }
            add(e) {
              super.add(e),
                this._isAttached ||
                  (this._document.body.addEventListener(
                    'click',
                    this._clickListener,
                    !0
                  ),
                  this._document.body.addEventListener(
                    'contextmenu',
                    this._clickListener,
                    !0
                  ),
                  this._platform.IOS &&
                    !this._cursorStyleIsSet &&
                    ((this._cursorOriginalValue = this._document.body.style.cursor),
                    (this._document.body.style.cursor = 'pointer'),
                    (this._cursorStyleIsSet = !0)),
                  (this._isAttached = !0));
            }
            detach() {
              this._isAttached &&
                (this._document.body.removeEventListener(
                  'click',
                  this._clickListener,
                  !0
                ),
                this._document.body.removeEventListener(
                  'contextmenu',
                  this._clickListener,
                  !0
                ),
                this._platform.IOS &&
                  this._cursorStyleIsSet &&
                  ((this._document.body.style.cursor = this._cursorOriginalValue),
                  (this._cursorStyleIsSet = !1)),
                (this._isAttached = !1));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(a.d), i.Ub(r.a));
            }),
            (e.ɵprov = Object(i.Gb)({
              factory: function () {
                return new e(Object(i.Ub)(a.d), Object(i.Ub)(r.a));
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })();
      const Ve = !(
        'undefined' == typeof window ||
        !window ||
        (!window.__karma__ && !window.jasmine)
      );
      let Ke = (() => {
        class e {
          constructor(e, t) {
            (this._platform = t), (this._document = e);
          }
          ngOnDestroy() {
            const e = this._containerElement;
            e && e.parentNode && e.parentNode.removeChild(e);
          }
          getContainerElement() {
            return (
              this._containerElement || this._createContainer(),
              this._containerElement
            );
          }
          _createContainer() {
            if (this._platform.isBrowser || Ve) {
              const e = this._document.querySelectorAll(
                '.cdk-overlay-container[platform="server"], .cdk-overlay-container[platform="test"]'
              );
              for (let t = 0; t < e.length; t++)
                e[t].parentNode.removeChild(e[t]);
            }
            const e = this._document.createElement('div');
            e.classList.add('cdk-overlay-container'),
              Ve
                ? e.setAttribute('platform', 'test')
                : this._platform.isBrowser ||
                  e.setAttribute('platform', 'server'),
              this._document.body.appendChild(e),
              (this._containerElement = e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(a.d), i.Ub(r.a));
          }),
          (e.ɵprov = Object(i.Gb)({
            factory: function () {
              return new e(Object(i.Ub)(a.d), Object(i.Ub)(r.a));
            },
            token: e,
            providedIn: 'root'
          })),
          e
        );
      })();
      class qe {
        constructor(e, t, o, i, a, n, r, s, d) {
          (this._portalOutlet = e),
            (this._host = t),
            (this._pane = o),
            (this._config = i),
            (this._ngZone = a),
            (this._keyboardDispatcher = n),
            (this._document = r),
            (this._location = s),
            (this._outsideClickDispatcher = d),
            (this._backdropElement = null),
            (this._backdropClick = new l.a()),
            (this._attachments = new l.a()),
            (this._detachments = new l.a()),
            (this._locationChanges = c.a.EMPTY),
            (this._backdropClickHandler = (e) => this._backdropClick.next(e)),
            (this._keydownEvents = new l.a()),
            (this._outsidePointerEvents = new l.a()),
            i.scrollStrategy &&
              ((this._scrollStrategy = i.scrollStrategy),
              this._scrollStrategy.attach(this)),
            (this._positionStrategy = i.positionStrategy);
        }
        get overlayElement() {
          return this._pane;
        }
        get backdropElement() {
          return this._backdropElement;
        }
        get hostElement() {
          return this._host;
        }
        attach(e) {
          let t = this._portalOutlet.attach(e);
          return (
            !this._host.parentElement &&
              this._previousHostParent &&
              this._previousHostParent.appendChild(this._host),
            this._positionStrategy && this._positionStrategy.attach(this),
            this._updateStackingOrder(),
            this._updateElementSize(),
            this._updateElementDirection(),
            this._scrollStrategy && this._scrollStrategy.enable(),
            this._ngZone.onStable.pipe(Object(y.a)(1)).subscribe(() => {
              this.hasAttached() && this.updatePosition();
            }),
            this._togglePointerEvents(!0),
            this._config.hasBackdrop && this._attachBackdrop(),
            this._config.panelClass &&
              this._toggleClasses(this._pane, this._config.panelClass, !0),
            this._attachments.next(),
            this._keyboardDispatcher.add(this),
            this._config.disposeOnNavigation &&
              (this._locationChanges = this._location.subscribe(() =>
                this.dispose()
              )),
            this._outsideClickDispatcher.add(this),
            t
          );
        }
        detach() {
          if (!this.hasAttached()) return;
          this.detachBackdrop(),
            this._togglePointerEvents(!1),
            this._positionStrategy &&
              this._positionStrategy.detach &&
              this._positionStrategy.detach(),
            this._scrollStrategy && this._scrollStrategy.disable();
          const e = this._portalOutlet.detach();
          return (
            this._detachments.next(),
            this._keyboardDispatcher.remove(this),
            this._detachContentWhenStable(),
            this._locationChanges.unsubscribe(),
            this._outsideClickDispatcher.remove(this),
            e
          );
        }
        dispose() {
          const e = this.hasAttached();
          this._positionStrategy && this._positionStrategy.dispose(),
            this._disposeScrollStrategy(),
            this.detachBackdrop(),
            this._locationChanges.unsubscribe(),
            this._keyboardDispatcher.remove(this),
            this._portalOutlet.dispose(),
            this._attachments.complete(),
            this._backdropClick.complete(),
            this._keydownEvents.complete(),
            this._outsidePointerEvents.complete(),
            this._outsideClickDispatcher.remove(this),
            this._host &&
              this._host.parentNode &&
              (this._host.parentNode.removeChild(this._host),
              (this._host = null)),
            (this._previousHostParent = this._pane = null),
            e && this._detachments.next(),
            this._detachments.complete();
        }
        hasAttached() {
          return this._portalOutlet.hasAttached();
        }
        backdropClick() {
          return this._backdropClick;
        }
        attachments() {
          return this._attachments;
        }
        detachments() {
          return this._detachments;
        }
        keydownEvents() {
          return this._keydownEvents;
        }
        outsidePointerEvents() {
          return this._outsidePointerEvents;
        }
        getConfig() {
          return this._config;
        }
        updatePosition() {
          this._positionStrategy && this._positionStrategy.apply();
        }
        updatePositionStrategy(e) {
          e !== this._positionStrategy &&
            (this._positionStrategy && this._positionStrategy.dispose(),
            (this._positionStrategy = e),
            this.hasAttached() && (e.attach(this), this.updatePosition()));
        }
        updateSize(e) {
          (this._config = Object.assign(Object.assign({}, this._config), e)),
            this._updateElementSize();
        }
        setDirection(e) {
          (this._config = Object.assign(Object.assign({}, this._config), {
            direction: e
          })),
            this._updateElementDirection();
        }
        addPanelClass(e) {
          this._pane && this._toggleClasses(this._pane, e, !0);
        }
        removePanelClass(e) {
          this._pane && this._toggleClasses(this._pane, e, !1);
        }
        getDirection() {
          const e = this._config.direction;
          return e ? ('string' == typeof e ? e : e.value) : 'ltr';
        }
        updateScrollStrategy(e) {
          e !== this._scrollStrategy &&
            (this._disposeScrollStrategy(),
            (this._scrollStrategy = e),
            this.hasAttached() && (e.attach(this), e.enable()));
        }
        _updateElementDirection() {
          this._host.setAttribute('dir', this.getDirection());
        }
        _updateElementSize() {
          if (!this._pane) return;
          const e = this._pane.style;
          (e.width = Object(s.c)(this._config.width)),
            (e.height = Object(s.c)(this._config.height)),
            (e.minWidth = Object(s.c)(this._config.minWidth)),
            (e.minHeight = Object(s.c)(this._config.minHeight)),
            (e.maxWidth = Object(s.c)(this._config.maxWidth)),
            (e.maxHeight = Object(s.c)(this._config.maxHeight));
        }
        _togglePointerEvents(e) {
          this._pane.style.pointerEvents = e ? 'auto' : 'none';
        }
        _attachBackdrop() {
          (this._backdropElement = this._document.createElement('div')),
            this._backdropElement.classList.add('cdk-overlay-backdrop'),
            this._config.backdropClass &&
              this._toggleClasses(
                this._backdropElement,
                this._config.backdropClass,
                !0
              ),
            this._host.parentElement.insertBefore(
              this._backdropElement,
              this._host
            ),
            this._backdropElement.addEventListener(
              'click',
              this._backdropClickHandler
            ),
            'undefined' != typeof requestAnimationFrame
              ? this._ngZone.runOutsideAngular(() => {
                  requestAnimationFrame(() => {
                    this._backdropElement &&
                      this._backdropElement.classList.add(
                        'cdk-overlay-backdrop-showing'
                      );
                  });
                })
              : this._backdropElement.classList.add(
                  'cdk-overlay-backdrop-showing'
                );
        }
        _updateStackingOrder() {
          this._host.nextSibling &&
            this._host.parentNode.appendChild(this._host);
        }
        detachBackdrop() {
          let e,
            t = this._backdropElement;
          if (!t) return;
          let o = () => {
            t &&
              (t.removeEventListener('click', this._backdropClickHandler),
              t.removeEventListener('transitionend', o),
              t.parentNode && t.parentNode.removeChild(t)),
              this._backdropElement == t && (this._backdropElement = null),
              this._config.backdropClass &&
                this._toggleClasses(t, this._config.backdropClass, !1),
              clearTimeout(e);
          };
          t.classList.remove('cdk-overlay-backdrop-showing'),
            this._ngZone.runOutsideAngular(() => {
              t.addEventListener('transitionend', o);
            }),
            (t.style.pointerEvents = 'none'),
            (e = this._ngZone.runOutsideAngular(() => setTimeout(o, 500)));
        }
        _toggleClasses(e, t, o) {
          const i = e.classList;
          Object(s.a)(t).forEach((e) => {
            e && (o ? i.add(e) : i.remove(e));
          });
        }
        _detachContentWhenStable() {
          this._ngZone.runOutsideAngular(() => {
            const e = this._ngZone.onStable
              .pipe(
                Object(b.a)(Object(g.a)(this._attachments, this._detachments))
              )
              .subscribe(() => {
                (this._pane &&
                  this._host &&
                  0 !== this._pane.children.length) ||
                  (this._pane &&
                    this._config.panelClass &&
                    this._toggleClasses(
                      this._pane,
                      this._config.panelClass,
                      !1
                    ),
                  this._host &&
                    this._host.parentElement &&
                    ((this._previousHostParent = this._host.parentElement),
                    this._previousHostParent.removeChild(this._host)),
                  e.unsubscribe());
              });
          });
        }
        _disposeScrollStrategy() {
          const e = this._scrollStrategy;
          e && (e.disable(), e.detach && e.detach());
        }
      }
      const Ne = /([A-Za-z%]+)$/;
      class He {
        constructor(e, t, o, i, a) {
          (this._viewportRuler = t),
            (this._document = o),
            (this._platform = i),
            (this._overlayContainer = a),
            (this._lastBoundingBoxSize = { width: 0, height: 0 }),
            (this._isPushed = !1),
            (this._canPush = !0),
            (this._growAfterOpen = !1),
            (this._hasFlexibleDimensions = !0),
            (this._positionLocked = !1),
            (this._viewportMargin = 0),
            (this._scrollables = []),
            (this._preferredPositions = []),
            (this._positionChanges = new l.a()),
            (this._resizeSubscription = c.a.EMPTY),
            (this._offsetX = 0),
            (this._offsetY = 0),
            (this._appliedPanelClasses = []),
            (this.positionChanges = this._positionChanges),
            this.setOrigin(e);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(e) {
          this._validatePositions(),
            e.hostElement.classList.add(
              'cdk-overlay-connected-position-bounding-box'
            ),
            (this._overlayRef = e),
            (this._boundingBox = e.hostElement),
            (this._pane = e.overlayElement),
            (this._isDisposed = !1),
            (this._isInitialRender = !0),
            (this._lastPosition = null),
            this._resizeSubscription.unsubscribe(),
            (this._resizeSubscription = this._viewportRuler
              .change()
              .subscribe(() => {
                (this._isInitialRender = !0), this.apply();
              }));
        }
        apply() {
          if (this._isDisposed || !this._platform.isBrowser) return;
          if (
            !this._isInitialRender &&
            this._positionLocked &&
            this._lastPosition
          )
            return void this.reapplyLastPosition();
          this._clearPanelClasses(),
            this._resetOverlayElementStyles(),
            this._resetBoundingBoxStyles(),
            (this._viewportRect = this._getNarrowedViewportRect()),
            (this._originRect = this._getOriginRect()),
            (this._overlayRect = this._pane.getBoundingClientRect());
          const e = this._originRect,
            t = this._overlayRect,
            o = this._viewportRect,
            i = [];
          let a;
          for (let n of this._preferredPositions) {
            let r = this._getOriginPoint(e, n),
              s = this._getOverlayPoint(r, t, n),
              l = this._getOverlayFit(s, t, o, n);
            if (l.isCompletelyWithinViewport)
              return (this._isPushed = !1), void this._applyPosition(n, r);
            this._canFitWithFlexibleDimensions(l, s, o)
              ? i.push({
                  position: n,
                  origin: r,
                  overlayRect: t,
                  boundingBoxRect: this._calculateBoundingBoxRect(r, n)
                })
              : (!a || a.overlayFit.visibleArea < l.visibleArea) &&
                (a = {
                  overlayFit: l,
                  overlayPoint: s,
                  originPoint: r,
                  position: n,
                  overlayRect: t
                });
          }
          if (i.length) {
            let e = null,
              t = -1;
            for (const o of i) {
              const i =
                o.boundingBoxRect.width *
                o.boundingBoxRect.height *
                (o.position.weight || 1);
              i > t && ((t = i), (e = o));
            }
            return (
              (this._isPushed = !1),
              void this._applyPosition(e.position, e.origin)
            );
          }
          if (this._canPush)
            return (
              (this._isPushed = !0),
              void this._applyPosition(a.position, a.originPoint)
            );
          this._applyPosition(a.position, a.originPoint);
        }
        detach() {
          this._clearPanelClasses(),
            (this._lastPosition = null),
            (this._previousPushAmount = null),
            this._resizeSubscription.unsubscribe();
        }
        dispose() {
          this._isDisposed ||
            (this._boundingBox &&
              Ye(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: ''
              }),
            this._pane && this._resetOverlayElementStyles(),
            this._overlayRef &&
              this._overlayRef.hostElement.classList.remove(
                'cdk-overlay-connected-position-bounding-box'
              ),
            this.detach(),
            this._positionChanges.complete(),
            (this._overlayRef = this._boundingBox = null),
            (this._isDisposed = !0));
        }
        reapplyLastPosition() {
          if (
            !this._isDisposed &&
            (!this._platform || this._platform.isBrowser)
          ) {
            (this._originRect = this._getOriginRect()),
              (this._overlayRect = this._pane.getBoundingClientRect()),
              (this._viewportRect = this._getNarrowedViewportRect());
            const e = this._lastPosition || this._preferredPositions[0],
              t = this._getOriginPoint(this._originRect, e);
            this._applyPosition(e, t);
          }
        }
        withScrollableContainers(e) {
          return (this._scrollables = e), this;
        }
        withPositions(e) {
          return (
            (this._preferredPositions = e),
            -1 === e.indexOf(this._lastPosition) && (this._lastPosition = null),
            this._validatePositions(),
            this
          );
        }
        withViewportMargin(e) {
          return (this._viewportMargin = e), this;
        }
        withFlexibleDimensions(e = !0) {
          return (this._hasFlexibleDimensions = e), this;
        }
        withGrowAfterOpen(e = !0) {
          return (this._growAfterOpen = e), this;
        }
        withPush(e = !0) {
          return (this._canPush = e), this;
        }
        withLockedPosition(e = !0) {
          return (this._positionLocked = e), this;
        }
        setOrigin(e) {
          return (this._origin = e), this;
        }
        withDefaultOffsetX(e) {
          return (this._offsetX = e), this;
        }
        withDefaultOffsetY(e) {
          return (this._offsetY = e), this;
        }
        withTransformOriginOn(e) {
          return (this._transformOriginSelector = e), this;
        }
        _getOriginPoint(e, t) {
          let o, i;
          if ('center' == t.originX) o = e.left + e.width / 2;
          else {
            const i = this._isRtl() ? e.right : e.left,
              a = this._isRtl() ? e.left : e.right;
            o = 'start' == t.originX ? i : a;
          }
          return (
            (i =
              'center' == t.originY
                ? e.top + e.height / 2
                : 'top' == t.originY
                ? e.top
                : e.bottom),
            { x: o, y: i }
          );
        }
        _getOverlayPoint(e, t, o) {
          let i, a;
          return (
            (i =
              'center' == o.overlayX
                ? -t.width / 2
                : 'start' === o.overlayX
                ? this._isRtl()
                  ? -t.width
                  : 0
                : this._isRtl()
                ? 0
                : -t.width),
            (a =
              'center' == o.overlayY
                ? -t.height / 2
                : 'top' == o.overlayY
                ? 0
                : -t.height),
            { x: e.x + i, y: e.y + a }
          );
        }
        _getOverlayFit(e, t, o, i) {
          let { x: a, y: n } = e,
            r = this._getOffset(i, 'x'),
            s = this._getOffset(i, 'y');
          r && (a += r), s && (n += s);
          let l = 0 - n,
            c = n + t.height - o.height,
            d = this._subtractOverflows(t.width, 0 - a, a + t.width - o.width),
            p = this._subtractOverflows(t.height, l, c),
            h = d * p;
          return {
            visibleArea: h,
            isCompletelyWithinViewport: t.width * t.height === h,
            fitsInViewportVertically: p === t.height,
            fitsInViewportHorizontally: d == t.width
          };
        }
        _canFitWithFlexibleDimensions(e, t, o) {
          if (this._hasFlexibleDimensions) {
            const i = o.bottom - t.y,
              a = o.right - t.x,
              n = Qe(this._overlayRef.getConfig().minHeight),
              r = Qe(this._overlayRef.getConfig().minWidth),
              s = e.fitsInViewportHorizontally || (null != r && r <= a);
            return (e.fitsInViewportVertically || (null != n && n <= i)) && s;
          }
          return !1;
        }
        _pushOverlayOnScreen(e, t, o) {
          if (this._previousPushAmount && this._positionLocked)
            return {
              x: e.x + this._previousPushAmount.x,
              y: e.y + this._previousPushAmount.y
            };
          const i = this._viewportRect,
            a = Math.max(e.x + t.width - i.width, 0),
            n = Math.max(e.y + t.height - i.height, 0),
            r = Math.max(i.top - o.top - e.y, 0),
            s = Math.max(i.left - o.left - e.x, 0);
          let l = 0,
            c = 0;
          return (
            (l =
              t.width <= i.width
                ? s || -a
                : e.x < this._viewportMargin
                ? i.left - o.left - e.x
                : 0),
            (c =
              t.height <= i.height
                ? r || -n
                : e.y < this._viewportMargin
                ? i.top - o.top - e.y
                : 0),
            (this._previousPushAmount = { x: l, y: c }),
            { x: e.x + l, y: e.y + c }
          );
        }
        _applyPosition(e, t) {
          if (
            (this._setTransformOrigin(e),
            this._setOverlayElementStyles(t, e),
            this._setBoundingBoxStyles(t, e),
            e.panelClass && this._addPanelClasses(e.panelClass),
            (this._lastPosition = e),
            this._positionChanges.observers.length)
          ) {
            const t = this._getScrollVisibility(),
              o = new Te(e, t);
            this._positionChanges.next(o);
          }
          this._isInitialRender = !1;
        }
        _setTransformOrigin(e) {
          if (!this._transformOriginSelector) return;
          const t = this._boundingBox.querySelectorAll(
            this._transformOriginSelector
          );
          let o,
            i = e.overlayY;
          o =
            'center' === e.overlayX
              ? 'center'
              : this._isRtl()
              ? 'start' === e.overlayX
                ? 'right'
                : 'left'
              : 'start' === e.overlayX
              ? 'left'
              : 'right';
          for (let a = 0; a < t.length; a++)
            t[a].style.transformOrigin = `${o} ${i}`;
        }
        _calculateBoundingBoxRect(e, t) {
          const o = this._viewportRect,
            i = this._isRtl();
          let a, n, r, s, l, c;
          if ('top' === t.overlayY)
            (n = e.y), (a = o.height - n + this._viewportMargin);
          else if ('bottom' === t.overlayY)
            (r = o.height - e.y + 2 * this._viewportMargin),
              (a = o.height - r + this._viewportMargin);
          else {
            const t = Math.min(o.bottom - e.y + o.top, e.y),
              i = this._lastBoundingBoxSize.height;
            (a = 2 * t),
              (n = e.y - t),
              a > i &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (n = e.y - i / 2);
          }
          if (('end' === t.overlayX && !i) || ('start' === t.overlayX && i))
            (c = o.width - e.x + this._viewportMargin),
              (s = e.x - this._viewportMargin);
          else if (
            ('start' === t.overlayX && !i) ||
            ('end' === t.overlayX && i)
          )
            (l = e.x), (s = o.right - e.x);
          else {
            const t = Math.min(o.right - e.x + o.left, e.x),
              i = this._lastBoundingBoxSize.width;
            (s = 2 * t),
              (l = e.x - t),
              s > i &&
                !this._isInitialRender &&
                !this._growAfterOpen &&
                (l = e.x - i / 2);
          }
          return { top: n, left: l, bottom: r, right: c, width: s, height: a };
        }
        _setBoundingBoxStyles(e, t) {
          const o = this._calculateBoundingBoxRect(e, t);
          this._isInitialRender ||
            this._growAfterOpen ||
            ((o.height = Math.min(o.height, this._lastBoundingBoxSize.height)),
            (o.width = Math.min(o.width, this._lastBoundingBoxSize.width)));
          const i = {};
          if (this._hasExactPosition())
            (i.top = i.left = '0'),
              (i.bottom = i.right = i.maxHeight = i.maxWidth = ''),
              (i.width = i.height = '100%');
          else {
            const e = this._overlayRef.getConfig().maxHeight,
              a = this._overlayRef.getConfig().maxWidth;
            (i.height = Object(s.c)(o.height)),
              (i.top = Object(s.c)(o.top)),
              (i.bottom = Object(s.c)(o.bottom)),
              (i.width = Object(s.c)(o.width)),
              (i.left = Object(s.c)(o.left)),
              (i.right = Object(s.c)(o.right)),
              (i.alignItems =
                'center' === t.overlayX
                  ? 'center'
                  : 'end' === t.overlayX
                  ? 'flex-end'
                  : 'flex-start'),
              (i.justifyContent =
                'center' === t.overlayY
                  ? 'center'
                  : 'bottom' === t.overlayY
                  ? 'flex-end'
                  : 'flex-start'),
              e && (i.maxHeight = Object(s.c)(e)),
              a && (i.maxWidth = Object(s.c)(a));
          }
          (this._lastBoundingBoxSize = o), Ye(this._boundingBox.style, i);
        }
        _resetBoundingBoxStyles() {
          Ye(this._boundingBox.style, {
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            height: '',
            width: '',
            alignItems: '',
            justifyContent: ''
          });
        }
        _resetOverlayElementStyles() {
          Ye(this._pane.style, {
            top: '',
            left: '',
            bottom: '',
            right: '',
            position: '',
            transform: ''
          });
        }
        _setOverlayElementStyles(e, t) {
          const o = {},
            i = this._hasExactPosition(),
            a = this._hasFlexibleDimensions,
            n = this._overlayRef.getConfig();
          if (i) {
            const i = this._viewportRuler.getViewportScrollPosition();
            Ye(o, this._getExactOverlayY(t, e, i)),
              Ye(o, this._getExactOverlayX(t, e, i));
          } else o.position = 'static';
          let r = '',
            l = this._getOffset(t, 'x'),
            c = this._getOffset(t, 'y');
          l && (r += `translateX(${l}px) `),
            c && (r += `translateY(${c}px)`),
            (o.transform = r.trim()),
            n.maxHeight &&
              (i
                ? (o.maxHeight = Object(s.c)(n.maxHeight))
                : a && (o.maxHeight = '')),
            n.maxWidth &&
              (i
                ? (o.maxWidth = Object(s.c)(n.maxWidth))
                : a && (o.maxWidth = '')),
            Ye(this._pane.style, o);
        }
        _getExactOverlayY(e, t, o) {
          let i = { top: '', bottom: '' },
            a = this._getOverlayPoint(t, this._overlayRect, e);
          this._isPushed &&
            (a = this._pushOverlayOnScreen(a, this._overlayRect, o));
          let n = this._overlayContainer
            .getContainerElement()
            .getBoundingClientRect().top;
          return (
            (a.y -= n),
            'bottom' === e.overlayY
              ? (i.bottom =
                  this._document.documentElement.clientHeight -
                  (a.y + this._overlayRect.height) +
                  'px')
              : (i.top = Object(s.c)(a.y)),
            i
          );
        }
        _getExactOverlayX(e, t, o) {
          let i,
            a = { left: '', right: '' },
            n = this._getOverlayPoint(t, this._overlayRect, e);
          return (
            this._isPushed &&
              (n = this._pushOverlayOnScreen(n, this._overlayRect, o)),
            (i = this._isRtl()
              ? 'end' === e.overlayX
                ? 'left'
                : 'right'
              : 'end' === e.overlayX
              ? 'right'
              : 'left'),
            'right' === i
              ? (a.right =
                  this._document.documentElement.clientWidth -
                  (n.x + this._overlayRect.width) +
                  'px')
              : (a.left = Object(s.c)(n.x)),
            a
          );
        }
        _getScrollVisibility() {
          const e = this._getOriginRect(),
            t = this._pane.getBoundingClientRect(),
            o = this._scrollables.map((e) =>
              e.getElementRef().nativeElement.getBoundingClientRect()
            );
          return {
            isOriginClipped: Ee(e, o),
            isOriginOutsideView: De(e, o),
            isOverlayClipped: Ee(t, o),
            isOverlayOutsideView: De(t, o)
          };
        }
        _subtractOverflows(e, ...t) {
          return t.reduce((e, t) => e - Math.max(t, 0), e);
        }
        _getNarrowedViewportRect() {
          const e = this._document.documentElement.clientWidth,
            t = this._document.documentElement.clientHeight,
            o = this._viewportRuler.getViewportScrollPosition();
          return {
            top: o.top + this._viewportMargin,
            left: o.left + this._viewportMargin,
            right: o.left + e - this._viewportMargin,
            bottom: o.top + t - this._viewportMargin,
            width: e - 2 * this._viewportMargin,
            height: t - 2 * this._viewportMargin
          };
        }
        _isRtl() {
          return 'rtl' === this._overlayRef.getDirection();
        }
        _hasExactPosition() {
          return !this._hasFlexibleDimensions || this._isPushed;
        }
        _getOffset(e, t) {
          return 'x' === t
            ? null == e.offsetX
              ? this._offsetX
              : e.offsetX
            : null == e.offsetY
            ? this._offsetY
            : e.offsetY;
        }
        _validatePositions() {}
        _addPanelClasses(e) {
          this._pane &&
            Object(s.a)(e).forEach((e) => {
              '' !== e &&
                -1 === this._appliedPanelClasses.indexOf(e) &&
                (this._appliedPanelClasses.push(e),
                this._pane.classList.add(e));
            });
        }
        _clearPanelClasses() {
          this._pane &&
            (this._appliedPanelClasses.forEach((e) => {
              this._pane.classList.remove(e);
            }),
            (this._appliedPanelClasses = []));
        }
        _getOriginRect() {
          const e = this._origin;
          if (e instanceof i.l) return e.nativeElement.getBoundingClientRect();
          if (e instanceof Element) return e.getBoundingClientRect();
          const t = e.width || 0,
            o = e.height || 0;
          return {
            top: e.y,
            bottom: e.y + o,
            left: e.x,
            right: e.x + t,
            height: o,
            width: t
          };
        }
      }
      function Ye(e, t) {
        for (let o in t) t.hasOwnProperty(o) && (e[o] = t[o]);
        return e;
      }
      function Qe(e) {
        if ('number' != typeof e && null != e) {
          const [t, o] = e.split(Ne);
          return o && 'px' !== o ? null : parseFloat(t);
        }
        return e || null;
      }
      class Ge {
        constructor(e, t, o, i, a, n, r) {
          (this._preferredPositions = []),
            (this._positionStrategy = new He(o, i, a, n, r)
              .withFlexibleDimensions(!1)
              .withPush(!1)
              .withViewportMargin(0)),
            this.withFallbackPosition(e, t),
            (this.onPositionChange = this._positionStrategy.positionChanges);
        }
        get positions() {
          return this._preferredPositions;
        }
        attach(e) {
          (this._overlayRef = e),
            this._positionStrategy.attach(e),
            this._direction &&
              (e.setDirection(this._direction), (this._direction = null));
        }
        dispose() {
          this._positionStrategy.dispose();
        }
        detach() {
          this._positionStrategy.detach();
        }
        apply() {
          this._positionStrategy.apply();
        }
        recalculateLastPosition() {
          this._positionStrategy.reapplyLastPosition();
        }
        withScrollableContainers(e) {
          this._positionStrategy.withScrollableContainers(e);
        }
        withFallbackPosition(e, t, o, i) {
          const a = new je(e, t, o, i);
          return (
            this._preferredPositions.push(a),
            this._positionStrategy.withPositions(this._preferredPositions),
            this
          );
        }
        withDirection(e) {
          return (
            this._overlayRef
              ? this._overlayRef.setDirection(e)
              : (this._direction = e),
            this
          );
        }
        withOffsetX(e) {
          return this._positionStrategy.withDefaultOffsetX(e), this;
        }
        withOffsetY(e) {
          return this._positionStrategy.withDefaultOffsetY(e), this;
        }
        withLockedPosition(e) {
          return this._positionStrategy.withLockedPosition(e), this;
        }
        withPositions(e) {
          return (
            (this._preferredPositions = e.slice()),
            this._positionStrategy.withPositions(this._preferredPositions),
            this
          );
        }
        setOrigin(e) {
          return this._positionStrategy.setOrigin(e), this;
        }
      }
      class We {
        constructor() {
          (this._cssPosition = 'static'),
            (this._topOffset = ''),
            (this._bottomOffset = ''),
            (this._leftOffset = ''),
            (this._rightOffset = ''),
            (this._alignItems = ''),
            (this._justifyContent = ''),
            (this._width = ''),
            (this._height = '');
        }
        attach(e) {
          const t = e.getConfig();
          (this._overlayRef = e),
            this._width && !t.width && e.updateSize({ width: this._width }),
            this._height && !t.height && e.updateSize({ height: this._height }),
            e.hostElement.classList.add('cdk-global-overlay-wrapper'),
            (this._isDisposed = !1);
        }
        top(e = '') {
          return (
            (this._bottomOffset = ''),
            (this._topOffset = e),
            (this._alignItems = 'flex-start'),
            this
          );
        }
        left(e = '') {
          return (
            (this._rightOffset = ''),
            (this._leftOffset = e),
            (this._justifyContent = 'flex-start'),
            this
          );
        }
        bottom(e = '') {
          return (
            (this._topOffset = ''),
            (this._bottomOffset = e),
            (this._alignItems = 'flex-end'),
            this
          );
        }
        right(e = '') {
          return (
            (this._leftOffset = ''),
            (this._rightOffset = e),
            (this._justifyContent = 'flex-end'),
            this
          );
        }
        width(e = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ width: e })
              : (this._width = e),
            this
          );
        }
        height(e = '') {
          return (
            this._overlayRef
              ? this._overlayRef.updateSize({ height: e })
              : (this._height = e),
            this
          );
        }
        centerHorizontally(e = '') {
          return this.left(e), (this._justifyContent = 'center'), this;
        }
        centerVertically(e = '') {
          return this.top(e), (this._alignItems = 'center'), this;
        }
        apply() {
          if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
          const e = this._overlayRef.overlayElement.style,
            t = this._overlayRef.hostElement.style,
            o = this._overlayRef.getConfig(),
            { width: i, height: a, maxWidth: n, maxHeight: r } = o,
            s = !(
              ('100%' !== i && '100vw' !== i) ||
              (n && '100%' !== n && '100vw' !== n)
            ),
            l = !(
              ('100%' !== a && '100vh' !== a) ||
              (r && '100%' !== r && '100vh' !== r)
            );
          (e.position = this._cssPosition),
            (e.marginLeft = s ? '0' : this._leftOffset),
            (e.marginTop = l ? '0' : this._topOffset),
            (e.marginBottom = this._bottomOffset),
            (e.marginRight = this._rightOffset),
            s
              ? (t.justifyContent = 'flex-start')
              : 'center' === this._justifyContent
              ? (t.justifyContent = 'center')
              : 'rtl' === this._overlayRef.getConfig().direction
              ? 'flex-start' === this._justifyContent
                ? (t.justifyContent = 'flex-end')
                : 'flex-end' === this._justifyContent &&
                  (t.justifyContent = 'flex-start')
              : (t.justifyContent = this._justifyContent),
            (t.alignItems = l ? 'flex-start' : this._alignItems);
        }
        dispose() {
          if (this._isDisposed || !this._overlayRef) return;
          const e = this._overlayRef.overlayElement.style,
            t = this._overlayRef.hostElement,
            o = t.style;
          t.classList.remove('cdk-global-overlay-wrapper'),
            (o.justifyContent = o.alignItems = e.marginTop = e.marginBottom = e.marginLeft = e.marginRight = e.position =
              ''),
            (this._overlayRef = null),
            (this._isDisposed = !0);
        }
      }
      let Xe = (() => {
          class e {
            constructor(e, t, o, i) {
              (this._viewportRuler = e),
                (this._document = t),
                (this._platform = o),
                (this._overlayContainer = i);
            }
            global() {
              return new We();
            }
            connectedTo(e, t, o) {
              return new Ge(
                t,
                o,
                e,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
            flexibleConnectedTo(e) {
              return new He(
                e,
                this._viewportRuler,
                this._document,
                this._platform,
                this._overlayContainer
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(n.e), i.Ub(a.d), i.Ub(r.a), i.Ub(Ke));
            }),
            (e.ɵprov = Object(i.Gb)({
              factory: function () {
                return new e(
                  Object(i.Ub)(n.e),
                  Object(i.Ub)(a.d),
                  Object(i.Ub)(r.a),
                  Object(i.Ub)(Ke)
                );
              },
              token: e,
              providedIn: 'root'
            })),
            e
          );
        })(),
        Ue = 0,
        Ze = (() => {
          class e {
            constructor(e, t, o, i, a, n, r, s, l, c, d) {
              (this.scrollStrategies = e),
                (this._overlayContainer = t),
                (this._componentFactoryResolver = o),
                (this._positionBuilder = i),
                (this._keyboardDispatcher = a),
                (this._injector = n),
                (this._ngZone = r),
                (this._document = s),
                (this._directionality = l),
                (this._location = c),
                (this._outsideClickDispatcher = d);
            }
            create(e) {
              const t = this._createHostElement(),
                o = this._createPaneElement(t),
                i = this._createPortalOutlet(o),
                a = new Ae(e);
              return (
                (a.direction = a.direction || this._directionality.value),
                new qe(
                  i,
                  t,
                  o,
                  a,
                  this._ngZone,
                  this._keyboardDispatcher,
                  this._document,
                  this._location,
                  this._outsideClickDispatcher
                )
              );
            }
            position() {
              return this._positionBuilder;
            }
            _createPaneElement(e) {
              const t = this._document.createElement('div');
              return (
                (t.id = 'cdk-overlay-' + Ue++),
                t.classList.add('cdk-overlay-pane'),
                e.appendChild(t),
                t
              );
            }
            _createHostElement() {
              const e = this._document.createElement('div');
              return (
                this._overlayContainer.getContainerElement().appendChild(e), e
              );
            }
            _createPortalOutlet(e) {
              return (
                this._appRef || (this._appRef = this._injector.get(i.g)),
                new Re.e(
                  e,
                  this._componentFactoryResolver,
                  this._appRef,
                  this._injector,
                  this._document
                )
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Ub(Me),
                i.Ub(Ke),
                i.Ub(i.j),
                i.Ub(Xe),
                i.Ub(Fe),
                i.Ub(i.r),
                i.Ub(i.z),
                i.Ub(a.d),
                i.Ub(w.b),
                i.Ub(a.h),
                i.Ub(Be)
              );
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const $e = [
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }
        ],
        Je = new i.q('cdk-connected-overlay-scroll-strategy');
      let et = (() => {
          class e {
            constructor(e) {
              this.elementRef = e;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(i.l));
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'cdk-overlay-origin', ''],
                ['', 'overlay-origin', ''],
                ['', 'cdkOverlayOrigin', '']
              ],
              exportAs: ['cdkOverlayOrigin']
            })),
            e
          );
        })(),
        tt = (() => {
          class e {
            constructor(e, t, o, a, n) {
              (this._overlay = e),
                (this._dir = n),
                (this._hasBackdrop = !1),
                (this._lockPosition = !1),
                (this._growAfterOpen = !1),
                (this._flexibleDimensions = !1),
                (this._push = !1),
                (this._backdropSubscription = c.a.EMPTY),
                (this._attachSubscription = c.a.EMPTY),
                (this._detachSubscription = c.a.EMPTY),
                (this._positionSubscription = c.a.EMPTY),
                (this.viewportMargin = 0),
                (this.open = !1),
                (this.disableClose = !1),
                (this.backdropClick = new i.n()),
                (this.positionChange = new i.n()),
                (this.attach = new i.n()),
                (this.detach = new i.n()),
                (this.overlayKeydown = new i.n()),
                (this.overlayOutsideClick = new i.n()),
                (this._templatePortal = new Re.h(t, o)),
                (this._scrollStrategyFactory = a),
                (this.scrollStrategy = this._scrollStrategyFactory());
            }
            get offsetX() {
              return this._offsetX;
            }
            set offsetX(e) {
              (this._offsetX = e),
                this._position && this._updatePositionStrategy(this._position);
            }
            get offsetY() {
              return this._offsetY;
            }
            set offsetY(e) {
              (this._offsetY = e),
                this._position && this._updatePositionStrategy(this._position);
            }
            get hasBackdrop() {
              return this._hasBackdrop;
            }
            set hasBackdrop(e) {
              this._hasBackdrop = Object(s.b)(e);
            }
            get lockPosition() {
              return this._lockPosition;
            }
            set lockPosition(e) {
              this._lockPosition = Object(s.b)(e);
            }
            get flexibleDimensions() {
              return this._flexibleDimensions;
            }
            set flexibleDimensions(e) {
              this._flexibleDimensions = Object(s.b)(e);
            }
            get growAfterOpen() {
              return this._growAfterOpen;
            }
            set growAfterOpen(e) {
              this._growAfterOpen = Object(s.b)(e);
            }
            get push() {
              return this._push;
            }
            set push(e) {
              this._push = Object(s.b)(e);
            }
            get overlayRef() {
              return this._overlayRef;
            }
            get dir() {
              return this._dir ? this._dir.value : 'ltr';
            }
            ngOnDestroy() {
              this._attachSubscription.unsubscribe(),
                this._detachSubscription.unsubscribe(),
                this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe(),
                this._overlayRef && this._overlayRef.dispose();
            }
            ngOnChanges(e) {
              this._position &&
                (this._updatePositionStrategy(this._position),
                this._overlayRef.updateSize({
                  width: this.width,
                  minWidth: this.minWidth,
                  height: this.height,
                  minHeight: this.minHeight
                }),
                e.origin && this.open && this._position.apply()),
                e.open &&
                  (this.open ? this._attachOverlay() : this._detachOverlay());
            }
            _createOverlay() {
              (this.positions && this.positions.length) ||
                (this.positions = $e);
              const e = (this._overlayRef = this._overlay.create(
                this._buildConfig()
              ));
              (this._attachSubscription = e
                .attachments()
                .subscribe(() => this.attach.emit())),
                (this._detachSubscription = e
                  .detachments()
                  .subscribe(() => this.detach.emit())),
                e.keydownEvents().subscribe((e) => {
                  this.overlayKeydown.next(e),
                    e.keyCode !== xe.e ||
                      this.disableClose ||
                      Object(xe.o)(e) ||
                      (e.preventDefault(), this._detachOverlay());
                }),
                this._overlayRef.outsidePointerEvents().subscribe((e) => {
                  this.overlayOutsideClick.next(e);
                });
            }
            _buildConfig() {
              const e = (this._position =
                  this.positionStrategy || this._createPositionStrategy()),
                t = new Ae({
                  direction: this._dir,
                  positionStrategy: e,
                  scrollStrategy: this.scrollStrategy,
                  hasBackdrop: this.hasBackdrop
                });
              return (
                (this.width || 0 === this.width) && (t.width = this.width),
                (this.height || 0 === this.height) && (t.height = this.height),
                (this.minWidth || 0 === this.minWidth) &&
                  (t.minWidth = this.minWidth),
                (this.minHeight || 0 === this.minHeight) &&
                  (t.minHeight = this.minHeight),
                this.backdropClass && (t.backdropClass = this.backdropClass),
                this.panelClass && (t.panelClass = this.panelClass),
                t
              );
            }
            _updatePositionStrategy(e) {
              const t = this.positions.map((e) => ({
                originX: e.originX,
                originY: e.originY,
                overlayX: e.overlayX,
                overlayY: e.overlayY,
                offsetX: e.offsetX || this.offsetX,
                offsetY: e.offsetY || this.offsetY,
                panelClass: e.panelClass || void 0
              }));
              return e
                .setOrigin(this.origin.elementRef)
                .withPositions(t)
                .withFlexibleDimensions(this.flexibleDimensions)
                .withPush(this.push)
                .withGrowAfterOpen(this.growAfterOpen)
                .withViewportMargin(this.viewportMargin)
                .withLockedPosition(this.lockPosition)
                .withTransformOriginOn(this.transformOriginSelector);
            }
            _createPositionStrategy() {
              const e = this._overlay
                .position()
                .flexibleConnectedTo(this.origin.elementRef);
              return this._updatePositionStrategy(e), e;
            }
            _attachOverlay() {
              this._overlayRef
                ? (this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop)
                : this._createOverlay(),
                this._overlayRef.hasAttached() ||
                  this._overlayRef.attach(this._templatePortal),
                this.hasBackdrop
                  ? (this._backdropSubscription = this._overlayRef
                      .backdropClick()
                      .subscribe((e) => {
                        this.backdropClick.emit(e);
                      }))
                  : this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe(),
                this.positionChange.observers.length > 0 &&
                  (this._positionSubscription = this._position.positionChanges
                    .pipe(
                      Object(Ce.a)(
                        () => this.positionChange.observers.length > 0
                      )
                    )
                    .subscribe((e) => {
                      this.positionChange.emit(e),
                        0 === this.positionChange.observers.length &&
                          this._positionSubscription.unsubscribe();
                    }));
            }
            _detachOverlay() {
              this._overlayRef && this._overlayRef.detach(),
                this._backdropSubscription.unsubscribe(),
                this._positionSubscription.unsubscribe();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(Ze),
                i.Kb(i.L),
                i.Kb(i.P),
                i.Kb(Je),
                i.Kb(w.b, 8)
              );
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'cdk-connected-overlay', ''],
                ['', 'connected-overlay', ''],
                ['', 'cdkConnectedOverlay', '']
              ],
              inputs: {
                viewportMargin: [
                  'cdkConnectedOverlayViewportMargin',
                  'viewportMargin'
                ],
                open: ['cdkConnectedOverlayOpen', 'open'],
                disableClose: [
                  'cdkConnectedOverlayDisableClose',
                  'disableClose'
                ],
                scrollStrategy: [
                  'cdkConnectedOverlayScrollStrategy',
                  'scrollStrategy'
                ],
                offsetX: ['cdkConnectedOverlayOffsetX', 'offsetX'],
                offsetY: ['cdkConnectedOverlayOffsetY', 'offsetY'],
                hasBackdrop: ['cdkConnectedOverlayHasBackdrop', 'hasBackdrop'],
                lockPosition: [
                  'cdkConnectedOverlayLockPosition',
                  'lockPosition'
                ],
                flexibleDimensions: [
                  'cdkConnectedOverlayFlexibleDimensions',
                  'flexibleDimensions'
                ],
                growAfterOpen: [
                  'cdkConnectedOverlayGrowAfterOpen',
                  'growAfterOpen'
                ],
                push: ['cdkConnectedOverlayPush', 'push'],
                positions: ['cdkConnectedOverlayPositions', 'positions'],
                origin: ['cdkConnectedOverlayOrigin', 'origin'],
                positionStrategy: [
                  'cdkConnectedOverlayPositionStrategy',
                  'positionStrategy'
                ],
                width: ['cdkConnectedOverlayWidth', 'width'],
                height: ['cdkConnectedOverlayHeight', 'height'],
                minWidth: ['cdkConnectedOverlayMinWidth', 'minWidth'],
                minHeight: ['cdkConnectedOverlayMinHeight', 'minHeight'],
                backdropClass: [
                  'cdkConnectedOverlayBackdropClass',
                  'backdropClass'
                ],
                panelClass: ['cdkConnectedOverlayPanelClass', 'panelClass'],
                transformOriginSelector: [
                  'cdkConnectedOverlayTransformOriginOn',
                  'transformOriginSelector'
                ]
              },
              outputs: {
                backdropClick: 'backdropClick',
                positionChange: 'positionChange',
                attach: 'attach',
                detach: 'detach',
                overlayKeydown: 'overlayKeydown',
                overlayOutsideClick: 'overlayOutsideClick'
              },
              exportAs: ['cdkConnectedOverlay'],
              features: [i.xb]
            })),
            e
          );
        })();
      const ot = {
        provide: Je,
        deps: [Ze],
        useFactory: function (e) {
          return () => e.scrollStrategies.reposition();
        }
      };
      let it = (() => {
        class e {}
        return (
          (e.ɵmod = i.Ib({ type: e })),
          (e.ɵinj = i.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [Ze, ot],
            imports: [[w.a, Re.g, n.d], n.d]
          })),
          e
        );
      })();
      var at = o('kmnG'),
        nt = o('pLZG'),
        rt = o('3E0/');
      const st = ['panel'];
      function lt(e, t) {
        if ((1 & e && (i.Qb(0, 'div', 0, 1), i.gc(2), i.Pb()), 2 & e)) {
          const e = t.id,
            o = i.bc();
          i.ic('id', o.id)('ngClass', o._classList),
            i.Ab('aria-label', o.ariaLabel || null)(
              'aria-labelledby',
              o._getPanelAriaLabelledby(e)
            );
        }
      }
      const ct = ['*'];
      let dt = 0;
      class pt {
        constructor(e, t) {
          (this.source = e), (this.option = t);
        }
      }
      class ht {}
      const ut = Object(ye.s)(ht),
        mt = new i.q('mat-autocomplete-default-options', {
          providedIn: 'root',
          factory: function () {
            return { autoActiveFirstOption: !1 };
          }
        });
      let gt = (() => {
          class e extends ut {
            constructor(e, t, o) {
              super(),
                (this._changeDetectorRef = e),
                (this._elementRef = t),
                (this._activeOptionChanges = c.a.EMPTY),
                (this.showPanel = !1),
                (this._isOpen = !1),
                (this.displayWith = null),
                (this.optionSelected = new i.n()),
                (this.opened = new i.n()),
                (this.closed = new i.n()),
                (this.optionActivated = new i.n()),
                (this._classList = {}),
                (this.id = 'mat-autocomplete-' + dt++),
                (this._autoActiveFirstOption = !!o.autoActiveFirstOption);
            }
            get isOpen() {
              return this._isOpen && this.showPanel;
            }
            get autoActiveFirstOption() {
              return this._autoActiveFirstOption;
            }
            set autoActiveFirstOption(e) {
              this._autoActiveFirstOption = Object(s.b)(e);
            }
            set classList(e) {
              (this._classList =
                e && e.length
                  ? Object(s.f)(e).reduce((e, t) => ((e[t] = !0), e), {})
                  : {}),
                this._setVisibilityClasses(this._classList),
                (this._elementRef.nativeElement.className = '');
            }
            ngAfterContentInit() {
              (this._keyManager = new fe.b(this.options).withWrap()),
                (this._activeOptionChanges = this._keyManager.change.subscribe(
                  (e) => {
                    this.optionActivated.emit({
                      source: this,
                      option: this.options.toArray()[e] || null
                    });
                  }
                )),
                this._setVisibility();
            }
            ngOnDestroy() {
              this._activeOptionChanges.unsubscribe();
            }
            _setScrollTop(e) {
              this.panel && (this.panel.nativeElement.scrollTop = e);
            }
            _getScrollTop() {
              return this.panel ? this.panel.nativeElement.scrollTop : 0;
            }
            _setVisibility() {
              (this.showPanel = !!this.options.length),
                this._setVisibilityClasses(this._classList),
                this._changeDetectorRef.markForCheck();
            }
            _emitSelectEvent(e) {
              const t = new pt(this, e);
              this.optionSelected.emit(t);
            }
            _getPanelAriaLabelledby(e) {
              return this.ariaLabel
                ? null
                : this.ariaLabelledby
                ? e + ' ' + this.ariaLabelledby
                : e;
            }
            _setVisibilityClasses(e) {
              (e[this._visibleClass] = this.showPanel),
                (e[this._hiddenClass] = !this.showPanel);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(i.h), i.Kb(i.l), i.Kb(mt));
            }),
            (e.ɵdir = i.Fb({
              type: e,
              viewQuery: function (e, t) {
                if ((1 & e && (i.vc(i.L, !0), i.Ec(st, !0)), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t.template = e.first),
                    i.nc((e = i.Yb())) && (t.panel = e.first);
                }
              },
              inputs: {
                displayWith: 'displayWith',
                autoActiveFirstOption: 'autoActiveFirstOption',
                classList: ['class', 'classList'],
                ariaLabel: ['aria-label', 'ariaLabel'],
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                panelWidth: 'panelWidth'
              },
              outputs: {
                optionSelected: 'optionSelected',
                opened: 'opened',
                closed: 'closed',
                optionActivated: 'optionActivated'
              },
              features: [i.wb]
            })),
            e
          );
        })(),
        bt = (() => {
          class e extends gt {
            constructor() {
              super(...arguments),
                (this._visibleClass = 'mat-autocomplete-visible'),
                (this._hiddenClass = 'mat-autocomplete-hidden');
            }
          }
          return (
            (e.ɵfac = function (t) {
              return kt(t || e);
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['mat-autocomplete']],
              contentQueries: function (e, t, o) {
                if ((1 & e && (i.Db(o, ye.b, !0), i.Db(o, ye.h, !0)), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t.optionGroups = e),
                    i.nc((e = i.Yb())) && (t.options = e);
                }
              },
              hostAttrs: [1, 'mat-autocomplete'],
              inputs: { disableRipple: 'disableRipple' },
              exportAs: ['matAutocomplete'],
              features: [i.yb([{ provide: ye.c, useExisting: e }]), i.wb],
              ngContentSelectors: ct,
              decls: 1,
              vars: 0,
              consts: [
                [
                  'role',
                  'listbox',
                  1,
                  'mat-autocomplete-panel',
                  3,
                  'id',
                  'ngClass'
                ],
                ['panel', '']
              ],
              template: function (e, t) {
                1 & e && (i.hc(), i.zc(0, lt, 3, 4, 'ng-template'));
              },
              directives: [a.k],
              styles: [
                '.mat-autocomplete-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;visibility:hidden;max-width:none;max-height:256px;position:relative;width:100%;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.mat-autocomplete-panel.mat-autocomplete-visible{visibility:visible}.mat-autocomplete-panel.mat-autocomplete-hidden{visibility:hidden}.mat-autocomplete-panel-above .mat-autocomplete-panel{border-radius:0;border-top-left-radius:4px;border-top-right-radius:4px}.mat-autocomplete-panel .mat-divider-horizontal{margin-top:-1px}.cdk-high-contrast-active .mat-autocomplete-panel{outline:solid 1px}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })();
      const kt = i.Sb(bt),
        ft = new i.q('mat-autocomplete-scroll-strategy'),
        yt = {
          provide: ft,
          deps: [Ze],
          useFactory: function (e) {
            return () => e.scrollStrategies.reposition();
          }
        },
        _t = { provide: ke.i, useExisting: Object(i.T)(() => wt), multi: !0 };
      let vt = (() => {
          class e {
            constructor(e, t, o, i, a, n, r, s, d, p, h) {
              (this._element = e),
                (this._overlay = t),
                (this._viewContainerRef = o),
                (this._zone = i),
                (this._changeDetectorRef = a),
                (this._dir = r),
                (this._formField = s),
                (this._document = d),
                (this._viewportRuler = p),
                (this._defaults = h),
                (this._componentDestroyed = !1),
                (this._autocompleteDisabled = !1),
                (this._manuallyFloatingLabel = !1),
                (this._viewportSubscription = c.a.EMPTY),
                (this._canOpenOnNextFocus = !0),
                (this._closeKeyEventStream = new l.a()),
                (this._windowBlurHandler = () => {
                  this._canOpenOnNextFocus =
                    this._document.activeElement !==
                      this._element.nativeElement || this.panelOpen;
                }),
                (this._onChange = () => {}),
                (this._onTouched = () => {}),
                (this.position = 'auto'),
                (this.autocompleteAttribute = 'off'),
                (this._overlayAttached = !1),
                (this.optionSelections = Object(_e.a)(() =>
                  this.autocomplete && this.autocomplete.options
                    ? Object(g.a)(
                        ...this.autocomplete.options.map(
                          (e) => e.onSelectionChange
                        )
                      )
                    : this._zone.onStable.pipe(
                        Object(y.a)(1),
                        Object(v.a)(() => this.optionSelections)
                      )
                )),
                (this._scrollStrategy = n);
            }
            get autocompleteDisabled() {
              return this._autocompleteDisabled;
            }
            set autocompleteDisabled(e) {
              this._autocompleteDisabled = Object(s.b)(e);
            }
            ngAfterViewInit() {
              const e = this._getWindow();
              void 0 !== e &&
                this._zone.runOutsideAngular(() =>
                  e.addEventListener('blur', this._windowBlurHandler)
                );
            }
            ngOnChanges(e) {
              e.position &&
                this._positionStrategy &&
                (this._setStrategyPositions(this._positionStrategy),
                this.panelOpen && this._overlayRef.updatePosition());
            }
            ngOnDestroy() {
              const e = this._getWindow();
              void 0 !== e &&
                e.removeEventListener('blur', this._windowBlurHandler),
                this._viewportSubscription.unsubscribe(),
                (this._componentDestroyed = !0),
                this._destroyPanel(),
                this._closeKeyEventStream.complete();
            }
            get panelOpen() {
              return this._overlayAttached && this.autocomplete.showPanel;
            }
            openPanel() {
              this._attachOverlay(), this._floatLabel();
            }
            closePanel() {
              this._resetLabel(),
                this._overlayAttached &&
                  (this.panelOpen && this.autocomplete.closed.emit(),
                  (this.autocomplete._isOpen = this._overlayAttached = !1),
                  this._overlayRef &&
                    this._overlayRef.hasAttached() &&
                    (this._overlayRef.detach(),
                    this._closingActionsSubscription.unsubscribe()),
                  this._componentDestroyed ||
                    this._changeDetectorRef.detectChanges());
            }
            updatePosition() {
              this._overlayAttached && this._overlayRef.updatePosition();
            }
            get panelClosingActions() {
              return Object(g.a)(
                this.optionSelections,
                this.autocomplete._keyManager.tabOut.pipe(
                  Object(nt.a)(() => this._overlayAttached)
                ),
                this._closeKeyEventStream,
                this._getOutsideClickStream(),
                this._overlayRef
                  ? this._overlayRef
                      .detachments()
                      .pipe(Object(nt.a)(() => this._overlayAttached))
                  : Object(ve.a)()
              ).pipe(Object(f.a)((e) => (e instanceof ye.j ? e : null)));
            }
            get activeOption() {
              return this.autocomplete && this.autocomplete._keyManager
                ? this.autocomplete._keyManager.activeItem
                : null;
            }
            _getOutsideClickStream() {
              return Object(g.a)(
                Object(we.a)(this._document, 'click'),
                Object(we.a)(this._document, 'auxclick'),
                Object(we.a)(this._document, 'touchend')
              ).pipe(
                Object(nt.a)((e) => {
                  const t =
                      this._isInsideShadowRoot && e.composedPath
                        ? e.composedPath()[0]
                        : e.target,
                    o = this._formField
                      ? this._formField._elementRef.nativeElement
                      : null,
                    i = this.connectedTo
                      ? this.connectedTo.elementRef.nativeElement
                      : null;
                  return (
                    this._overlayAttached &&
                    t !== this._element.nativeElement &&
                    (!o || !o.contains(t)) &&
                    (!i || !i.contains(t)) &&
                    !!this._overlayRef &&
                    !this._overlayRef.overlayElement.contains(t)
                  );
                })
              );
            }
            writeValue(e) {
              Promise.resolve(null).then(() => this._setTriggerValue(e));
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              this._element.nativeElement.disabled = e;
            }
            _handleKeydown(e) {
              const t = e.keyCode;
              if (
                (t !== xe.e || Object(xe.o)(e) || e.preventDefault(),
                this.activeOption && t === xe.d && this.panelOpen)
              )
                this.activeOption._selectViaInteraction(),
                  this._resetActiveItem(),
                  e.preventDefault();
              else if (this.autocomplete) {
                const o = this.autocomplete._keyManager.activeItem,
                  i = t === xe.l || t === xe.b;
                this.panelOpen || t === xe.k
                  ? this.autocomplete._keyManager.onKeydown(e)
                  : i && this._canOpen() && this.openPanel(),
                  (i || this.autocomplete._keyManager.activeItem !== o) &&
                    this._scrollToOption(
                      this.autocomplete._keyManager.activeItemIndex || 0
                    );
              }
            }
            _handleInput(e) {
              let t = e.target,
                o = t.value;
              'number' === t.type && (o = '' == o ? null : parseFloat(o)),
                this._previousValue !== o &&
                  ((this._previousValue = o),
                  this._onChange(o),
                  this._canOpen() &&
                    this._document.activeElement === e.target &&
                    this.openPanel());
            }
            _handleFocus() {
              this._canOpenOnNextFocus
                ? this._canOpen() &&
                  ((this._previousValue = this._element.nativeElement.value),
                  this._attachOverlay(),
                  this._floatLabel(!0))
                : (this._canOpenOnNextFocus = !0);
            }
            _floatLabel(e = !1) {
              this._formField &&
                'auto' === this._formField.floatLabel &&
                (e
                  ? this._formField._animateAndLockLabel()
                  : (this._formField.floatLabel = 'always'),
                (this._manuallyFloatingLabel = !0));
            }
            _resetLabel() {
              this._manuallyFloatingLabel &&
                ((this._formField.floatLabel = 'auto'),
                (this._manuallyFloatingLabel = !1));
            }
            _subscribeToClosingActions() {
              const e = this._zone.onStable.pipe(Object(y.a)(1)),
                t = this.autocomplete.options.changes.pipe(
                  Object(_.a)(() =>
                    this._positionStrategy.reapplyLastPosition()
                  ),
                  Object(rt.a)(0)
                );
              return Object(g.a)(e, t)
                .pipe(
                  Object(v.a)(() => {
                    const e = this.panelOpen;
                    return (
                      this._resetActiveItem(),
                      this.autocomplete._setVisibility(),
                      this.panelOpen &&
                        (this._overlayRef.updatePosition(),
                        e !== this.panelOpen &&
                          this.autocomplete.opened.emit()),
                      this.panelClosingActions
                    );
                  }),
                  Object(y.a)(1)
                )
                .subscribe((e) => this._setValueAndClose(e));
            }
            _destroyPanel() {
              this._overlayRef &&
                (this.closePanel(),
                this._overlayRef.dispose(),
                (this._overlayRef = null));
            }
            _setTriggerValue(e) {
              const t =
                  this.autocomplete && this.autocomplete.displayWith
                    ? this.autocomplete.displayWith(e)
                    : e,
                o = null != t ? t : '';
              this._formField
                ? (this._formField._control.value = o)
                : (this._element.nativeElement.value = o),
                (this._previousValue = o);
            }
            _setValueAndClose(e) {
              e &&
                e.source &&
                (this._clearPreviousSelectedOption(e.source),
                this._setTriggerValue(e.source.value),
                this._onChange(e.source.value),
                this._element.nativeElement.focus(),
                this.autocomplete._emitSelectEvent(e.source)),
                this.closePanel();
            }
            _clearPreviousSelectedOption(e) {
              this.autocomplete.options.forEach((t) => {
                t !== e && t.selected && t.deselect();
              });
            }
            _attachOverlay() {
              var e;
              null == this._isInsideShadowRoot &&
                (this._isInsideShadowRoot = !!Object(r.c)(
                  this._element.nativeElement
                ));
              let t = this._overlayRef;
              t
                ? (this._positionStrategy.setOrigin(
                    this._getConnectedElement()
                  ),
                  t.updateSize({ width: this._getPanelWidth() }))
                : ((this._portal = new Re.h(
                    this.autocomplete.template,
                    this._viewContainerRef,
                    {
                      id:
                        null === (e = this._formField) || void 0 === e
                          ? void 0
                          : e._labelId
                    }
                  )),
                  (t = this._overlay.create(this._getOverlayConfig())),
                  (this._overlayRef = t),
                  t.keydownEvents().subscribe((e) => {
                    ((e.keyCode === xe.e && !Object(xe.o)(e)) ||
                      (e.keyCode === xe.l && Object(xe.o)(e, 'altKey'))) &&
                      (this._resetActiveItem(),
                      this._closeKeyEventStream.next(),
                      e.stopPropagation(),
                      e.preventDefault());
                  }),
                  (this._viewportSubscription = this._viewportRuler
                    .change()
                    .subscribe(() => {
                      this.panelOpen &&
                        t &&
                        t.updateSize({ width: this._getPanelWidth() });
                    }))),
                t &&
                  !t.hasAttached() &&
                  (t.attach(this._portal),
                  (this._closingActionsSubscription = this._subscribeToClosingActions()));
              const o = this.panelOpen;
              this.autocomplete._setVisibility(),
                (this.autocomplete._isOpen = this._overlayAttached = !0),
                this.panelOpen &&
                  o !== this.panelOpen &&
                  this.autocomplete.opened.emit();
            }
            _getOverlayConfig() {
              var e;
              return new Ae({
                positionStrategy: this._getOverlayPosition(),
                scrollStrategy: this._scrollStrategy(),
                width: this._getPanelWidth(),
                direction: this._dir,
                panelClass:
                  null === (e = this._defaults) || void 0 === e
                    ? void 0
                    : e.overlayPanelClass
              });
            }
            _getOverlayPosition() {
              const e = this._overlay
                .position()
                .flexibleConnectedTo(this._getConnectedElement())
                .withFlexibleDimensions(!1)
                .withPush(!1);
              return (
                this._setStrategyPositions(e), (this._positionStrategy = e), e
              );
            }
            _setStrategyPositions(e) {
              const t = [
                  {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                  },
                  {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'top'
                  }
                ],
                o = this._aboveClass,
                i = [
                  {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'bottom',
                    panelClass: o
                  },
                  {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'bottom',
                    panelClass: o
                  }
                ];
              let a;
              (a =
                'above' === this.position
                  ? i
                  : 'below' === this.position
                  ? t
                  : [...t, ...i]),
                e.withPositions(a);
            }
            _getConnectedElement() {
              return this.connectedTo
                ? this.connectedTo.elementRef
                : this._formField
                ? this._formField.getConnectedOverlayOrigin()
                : this._element;
            }
            _getPanelWidth() {
              return this.autocomplete.panelWidth || this._getHostWidth();
            }
            _getHostWidth() {
              return this._getConnectedElement().nativeElement.getBoundingClientRect()
                .width;
            }
            _resetActiveItem() {
              this.autocomplete._keyManager.setActiveItem(
                this.autocomplete.autoActiveFirstOption ? 0 : -1
              );
            }
            _canOpen() {
              const e = this._element.nativeElement;
              return !e.readOnly && !e.disabled && !this._autocompleteDisabled;
            }
            _getWindow() {
              var e;
              return (
                (null === (e = this._document) || void 0 === e
                  ? void 0
                  : e.defaultView) || window
              );
            }
            _scrollToOption(e) {
              const t = this.autocomplete,
                o = Object(ye.p)(e, t.options, t.optionGroups);
              if (0 === e && 1 === o) t._setScrollTop(0);
              else {
                const o = t.options.toArray()[e];
                if (o) {
                  const e = o._getHostElement(),
                    i = Object(ye.q)(
                      e.offsetTop,
                      e.offsetHeight,
                      t._getScrollTop(),
                      t.panel.nativeElement.offsetHeight
                    );
                  t._setScrollTop(i);
                }
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(i.l),
                i.Kb(Ze),
                i.Kb(i.P),
                i.Kb(i.z),
                i.Kb(i.h),
                i.Kb(ft),
                i.Kb(w.b, 8),
                i.Kb(at.a, 9),
                i.Kb(a.d, 8),
                i.Kb(n.e),
                i.Kb(mt, 8)
              );
            }),
            (e.ɵdir = i.Fb({
              type: e,
              inputs: {
                position: ['matAutocompletePosition', 'position'],
                autocompleteAttribute: [
                  'autocomplete',
                  'autocompleteAttribute'
                ],
                autocompleteDisabled: [
                  'matAutocompleteDisabled',
                  'autocompleteDisabled'
                ],
                autocomplete: ['matAutocomplete', 'autocomplete'],
                connectedTo: ['matAutocompleteConnectedTo', 'connectedTo']
              },
              features: [i.xb]
            })),
            e
          );
        })(),
        wt = (() => {
          class e extends vt {
            constructor() {
              super(...arguments),
                (this._aboveClass = 'mat-autocomplete-panel-above');
            }
          }
          return (
            (e.ɵfac = function (t) {
              return Rt(t || e);
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['input', 'matAutocomplete', ''],
                ['textarea', 'matAutocomplete', '']
              ],
              hostAttrs: [1, 'mat-autocomplete-trigger'],
              hostVars: 7,
              hostBindings: function (e, t) {
                1 & e &&
                  i.Xb('focusin', function () {
                    return t._handleFocus();
                  })('blur', function () {
                    return t._onTouched();
                  })('input', function (e) {
                    return t._handleInput(e);
                  })('keydown', function (e) {
                    return t._handleKeydown(e);
                  }),
                  2 & e &&
                    i.Ab('autocomplete', t.autocompleteAttribute)(
                      'role',
                      t.autocompleteDisabled ? null : 'combobox'
                    )(
                      'aria-autocomplete',
                      t.autocompleteDisabled ? null : 'list'
                    )(
                      'aria-activedescendant',
                      t.panelOpen && t.activeOption ? t.activeOption.id : null
                    )(
                      'aria-expanded',
                      t.autocompleteDisabled ? null : t.panelOpen.toString()
                    )(
                      'aria-owns',
                      t.autocompleteDisabled ||
                        !t.panelOpen ||
                        null == t.autocomplete
                        ? null
                        : t.autocomplete.id
                    )('aria-haspopup', !t.autocompleteDisabled);
              },
              exportAs: ['matAutocompleteTrigger'],
              features: [i.yb([_t]), i.wb]
            })),
            e
          );
        })();
      const Rt = i.Sb(wt);
      let Ct = (() => {
        class e {}
        return (
          (e.ɵmod = i.Ib({ type: e })),
          (e.ɵinj = i.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [yt],
            imports: [[it, ye.i, ye.e, a.c], n.b, ye.i, ye.e]
          })),
          e
        );
      })();
      var xt = o('bTqV'),
        Ot = o('R0Ic');
      function St(e, t) {}
      class Pt {
        constructor() {
          (this.role = 'dialog'),
            (this.panelClass = ''),
            (this.hasBackdrop = !0),
            (this.backdropClass = ''),
            (this.disableClose = !1),
            (this.width = ''),
            (this.height = ''),
            (this.maxWidth = '80vw'),
            (this.data = null),
            (this.ariaDescribedBy = null),
            (this.ariaLabelledBy = null),
            (this.ariaLabel = null),
            (this.autoFocus = !0),
            (this.restoreFocus = !0),
            (this.closeOnNavigation = !0);
        }
      }
      const zt = {
        dialogContainer: Object(Ot.l)('dialogContainer', [
          Object(Ot.i)(
            'void, exit',
            Object(Ot.j)({ opacity: 0, transform: 'scale(0.7)' })
          ),
          Object(Ot.i)('enter', Object(Ot.j)({ transform: 'none' })),
          Object(Ot.k)(
            '* => enter',
            Object(Ot.e)(
              '150ms cubic-bezier(0, 0, 0.2, 1)',
              Object(Ot.j)({ transform: 'none', opacity: 1 })
            )
          ),
          Object(Ot.k)(
            '* => void, * => exit',
            Object(Ot.e)(
              '75ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              Object(Ot.j)({ opacity: 0 })
            )
          )
        ])
      };
      let Dt = (() => {
          class e extends Re.a {
            constructor(e, t, o, a, n, r) {
              super(),
                (this._elementRef = e),
                (this._focusTrapFactory = t),
                (this._changeDetectorRef = o),
                (this._config = n),
                (this._focusMonitor = r),
                (this._animationStateChanged = new i.n()),
                (this._elementFocusedBeforeDialogWasOpened = null),
                (this._closeInteractionType = null),
                (this.attachDomPortal = (e) => (
                  this._portalOutlet.hasAttached(),
                  this._portalOutlet.attachDomPortal(e)
                )),
                (this._ariaLabelledBy = n.ariaLabelledBy || null),
                (this._document = a);
            }
            _initializeWithAttachedContent() {
              this._setupFocusTrap(),
                this._capturePreviouslyFocusedElement(),
                this._focusDialogContainer();
            }
            attachComponentPortal(e) {
              return (
                this._portalOutlet.hasAttached(),
                this._portalOutlet.attachComponentPortal(e)
              );
            }
            attachTemplatePortal(e) {
              return (
                this._portalOutlet.hasAttached(),
                this._portalOutlet.attachTemplatePortal(e)
              );
            }
            _recaptureFocus() {
              this._containsFocus() ||
                ((!this._config.autoFocus ||
                  !this._focusTrap.focusInitialElement()) &&
                  this._elementRef.nativeElement.focus());
            }
            _trapFocus() {
              this._config.autoFocus
                ? this._focusTrap.focusInitialElementWhenReady()
                : this._containsFocus() ||
                  this._elementRef.nativeElement.focus();
            }
            _restoreFocus() {
              const e = this._elementFocusedBeforeDialogWasOpened;
              if (
                this._config.restoreFocus &&
                e &&
                'function' == typeof e.focus
              ) {
                const t = this._document.activeElement,
                  o = this._elementRef.nativeElement;
                (t && t !== this._document.body && t !== o && !o.contains(t)) ||
                  (this._focusMonitor
                    ? (this._focusMonitor.focusVia(
                        e,
                        this._closeInteractionType
                      ),
                      (this._closeInteractionType = null))
                    : e.focus());
              }
              this._focusTrap && this._focusTrap.destroy();
            }
            _setupFocusTrap() {
              this._focusTrap = this._focusTrapFactory.create(
                this._elementRef.nativeElement
              );
            }
            _capturePreviouslyFocusedElement() {
              this._document &&
                (this._elementFocusedBeforeDialogWasOpened = this._document.activeElement);
            }
            _focusDialogContainer() {
              this._elementRef.nativeElement.focus &&
                this._elementRef.nativeElement.focus();
            }
            _containsFocus() {
              const e = this._elementRef.nativeElement,
                t = this._document.activeElement;
              return e === t || e.contains(t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(i.l),
                i.Kb(fe.f),
                i.Kb(i.h),
                i.Kb(a.d, 8),
                i.Kb(Pt),
                i.Kb(fe.e)
              );
            }),
            (e.ɵdir = i.Fb({
              type: e,
              viewQuery: function (e, t) {
                if ((1 & e && i.vc(Re.c, !0), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t._portalOutlet = e.first);
                }
              },
              features: [i.wb]
            })),
            e
          );
        })(),
        Et = (() => {
          class e extends Dt {
            constructor() {
              super(...arguments), (this._state = 'enter');
            }
            _onAnimationDone({ toState: e, totalTime: t }) {
              'enter' === e
                ? (this._trapFocus(),
                  this._animationStateChanged.next({
                    state: 'opened',
                    totalTime: t
                  }))
                : 'exit' === e &&
                  (this._restoreFocus(),
                  this._animationStateChanged.next({
                    state: 'closed',
                    totalTime: t
                  }));
            }
            _onAnimationStart({ toState: e, totalTime: t }) {
              'enter' === e
                ? this._animationStateChanged.next({
                    state: 'opening',
                    totalTime: t
                  })
                : ('exit' !== e && 'void' !== e) ||
                  this._animationStateChanged.next({
                    state: 'closing',
                    totalTime: t
                  });
            }
            _startExitAnimation() {
              (this._state = 'exit'), this._changeDetectorRef.markForCheck();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return It(t || e);
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['mat-dialog-container']],
              hostAttrs: [
                'tabindex',
                '-1',
                'aria-modal',
                'true',
                1,
                'mat-dialog-container'
              ],
              hostVars: 6,
              hostBindings: function (e, t) {
                1 & e &&
                  i.xc('@dialogContainer.start', function (e) {
                    return t._onAnimationStart(e);
                  })('@dialogContainer.done', function (e) {
                    return t._onAnimationDone(e);
                  }),
                  2 & e &&
                    (i.Tb('id', t._id),
                    i.Ab('role', t._config.role)(
                      'aria-labelledby',
                      t._config.ariaLabel ? null : t._ariaLabelledBy
                    )('aria-label', t._config.ariaLabel)(
                      'aria-describedby',
                      t._config.ariaDescribedBy || null
                    ),
                    i.yc('@dialogContainer', t._state));
              },
              features: [i.wb],
              decls: 1,
              vars: 0,
              consts: [['cdkPortalOutlet', '']],
              template: function (e, t) {
                1 & e && i.zc(0, St, 0, 0, 'ng-template', 0);
              },
              directives: [Re.c],
              styles: [
                '.mat-dialog-container{display:block;padding:24px;border-radius:4px;box-sizing:border-box;overflow:auto;outline:0;width:100%;height:100%;min-height:inherit;max-height:inherit}.cdk-high-contrast-active .mat-dialog-container{outline:solid 1px}.mat-dialog-content{display:block;margin:0 -24px;padding:0 24px;max-height:65vh;overflow:auto;-webkit-overflow-scrolling:touch}.mat-dialog-title{margin:0 0 20px;display:block}.mat-dialog-actions{padding:8px 0;display:flex;flex-wrap:wrap;min-height:52px;align-items:center;box-sizing:content-box;margin-bottom:-24px}.mat-dialog-actions[align=end]{justify-content:flex-end}.mat-dialog-actions[align=center]{justify-content:center}.mat-dialog-actions .mat-button-base+.mat-button-base,.mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-dialog-actions .mat-button-base+.mat-button-base,[dir=rtl] .mat-dialog-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n'
              ],
              encapsulation: 2,
              data: { animation: [zt.dialogContainer] }
            })),
            e
          );
        })();
      const It = i.Sb(Et);
      let Mt = 0;
      class At {
        constructor(e, t, o = 'mat-dialog-' + Mt++) {
          (this._overlayRef = e),
            (this._containerInstance = t),
            (this.id = o),
            (this.disableClose = this._containerInstance._config.disableClose),
            (this._afterOpened = new l.a()),
            (this._afterClosed = new l.a()),
            (this._beforeClosed = new l.a()),
            (this._state = 0),
            (t._id = o),
            t._animationStateChanged
              .pipe(
                Object(nt.a)((e) => 'opened' === e.state),
                Object(y.a)(1)
              )
              .subscribe(() => {
                this._afterOpened.next(), this._afterOpened.complete();
              }),
            t._animationStateChanged
              .pipe(
                Object(nt.a)((e) => 'closed' === e.state),
                Object(y.a)(1)
              )
              .subscribe(() => {
                clearTimeout(this._closeFallbackTimeout),
                  this._finishDialogClose();
              }),
            e.detachments().subscribe(() => {
              this._beforeClosed.next(this._result),
                this._beforeClosed.complete(),
                this._afterClosed.next(this._result),
                this._afterClosed.complete(),
                (this.componentInstance = null),
                this._overlayRef.dispose();
            }),
            e
              .keydownEvents()
              .pipe(
                Object(nt.a)(
                  (e) =>
                    e.keyCode === xe.e && !this.disableClose && !Object(xe.o)(e)
                )
              )
              .subscribe((e) => {
                e.preventDefault(), jt(this, 'keyboard');
              }),
            e.backdropClick().subscribe(() => {
              this.disableClose
                ? this._containerInstance._recaptureFocus()
                : jt(this, 'mouse');
            });
        }
        close(e) {
          (this._result = e),
            this._containerInstance._animationStateChanged
              .pipe(
                Object(nt.a)((e) => 'closing' === e.state),
                Object(y.a)(1)
              )
              .subscribe((t) => {
                this._beforeClosed.next(e),
                  this._beforeClosed.complete(),
                  this._overlayRef.detachBackdrop(),
                  (this._closeFallbackTimeout = setTimeout(
                    () => this._finishDialogClose(),
                    t.totalTime + 100
                  ));
              }),
            (this._state = 1),
            this._containerInstance._startExitAnimation();
        }
        afterOpened() {
          return this._afterOpened;
        }
        afterClosed() {
          return this._afterClosed;
        }
        beforeClosed() {
          return this._beforeClosed;
        }
        backdropClick() {
          return this._overlayRef.backdropClick();
        }
        keydownEvents() {
          return this._overlayRef.keydownEvents();
        }
        updatePosition(e) {
          let t = this._getPositionStrategy();
          return (
            e && (e.left || e.right)
              ? e.left
                ? t.left(e.left)
                : t.right(e.right)
              : t.centerHorizontally(),
            e && (e.top || e.bottom)
              ? e.top
                ? t.top(e.top)
                : t.bottom(e.bottom)
              : t.centerVertically(),
            this._overlayRef.updatePosition(),
            this
          );
        }
        updateSize(e = '', t = '') {
          return (
            this._getPositionStrategy().width(e).height(t),
            this._overlayRef.updatePosition(),
            this
          );
        }
        addPanelClass(e) {
          return this._overlayRef.addPanelClass(e), this;
        }
        removePanelClass(e) {
          return this._overlayRef.removePanelClass(e), this;
        }
        getState() {
          return this._state;
        }
        _finishDialogClose() {
          (this._state = 2), this._overlayRef.dispose();
        }
        _getPositionStrategy() {
          return this._overlayRef.getConfig().positionStrategy;
        }
      }
      function jt(e, t, o) {
        return (
          void 0 !== e._containerInstance &&
            (e._containerInstance._closeInteractionType = t),
          e.close(o)
        );
      }
      const Tt = new i.q('MatDialogData'),
        Lt = new i.q('mat-dialog-default-options'),
        Ft = new i.q('mat-dialog-scroll-strategy'),
        Bt = {
          provide: Ft,
          deps: [Ze],
          useFactory: function (e) {
            return () => e.scrollStrategies.block();
          }
        };
      let Vt = (() => {
          class e {
            constructor(e, t, o, i, a, n, r, s, c) {
              (this._overlay = e),
                (this._injector = t),
                (this._defaultOptions = o),
                (this._parentDialog = i),
                (this._overlayContainer = a),
                (this._dialogRefConstructor = r),
                (this._dialogContainerType = s),
                (this._dialogDataToken = c),
                (this._openDialogsAtThisLevel = []),
                (this._afterAllClosedAtThisLevel = new l.a()),
                (this._afterOpenedAtThisLevel = new l.a()),
                (this._ariaHiddenElements = new Map()),
                (this.afterAllClosed = Object(_e.a)(() =>
                  this.openDialogs.length
                    ? this._getAfterAllClosed()
                    : this._getAfterAllClosed().pipe(Object(k.a)(void 0))
                )),
                (this._scrollStrategy = n);
            }
            get openDialogs() {
              return this._parentDialog
                ? this._parentDialog.openDialogs
                : this._openDialogsAtThisLevel;
            }
            get afterOpened() {
              return this._parentDialog
                ? this._parentDialog.afterOpened
                : this._afterOpenedAtThisLevel;
            }
            _getAfterAllClosed() {
              const e = this._parentDialog;
              return e
                ? e._getAfterAllClosed()
                : this._afterAllClosedAtThisLevel;
            }
            open(e, t) {
              (t = (function (e, t) {
                return Object.assign(Object.assign({}, t), e);
              })(t, this._defaultOptions || new Pt())).id &&
                this.getDialogById(t.id);
              const o = this._createOverlay(t),
                i = this._attachDialogContainer(o, t),
                a = this._attachDialogContent(e, i, o, t);
              return (
                this.openDialogs.length ||
                  this._hideNonDialogContentFromAssistiveTechnology(),
                this.openDialogs.push(a),
                a.afterClosed().subscribe(() => this._removeOpenDialog(a)),
                this.afterOpened.next(a),
                i._initializeWithAttachedContent(),
                a
              );
            }
            closeAll() {
              this._closeDialogs(this.openDialogs);
            }
            getDialogById(e) {
              return this.openDialogs.find((t) => t.id === e);
            }
            ngOnDestroy() {
              this._closeDialogs(this._openDialogsAtThisLevel),
                this._afterAllClosedAtThisLevel.complete(),
                this._afterOpenedAtThisLevel.complete();
            }
            _createOverlay(e) {
              const t = this._getOverlayConfig(e);
              return this._overlay.create(t);
            }
            _getOverlayConfig(e) {
              const t = new Ae({
                positionStrategy: this._overlay.position().global(),
                scrollStrategy: e.scrollStrategy || this._scrollStrategy(),
                panelClass: e.panelClass,
                hasBackdrop: e.hasBackdrop,
                direction: e.direction,
                minWidth: e.minWidth,
                minHeight: e.minHeight,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                disposeOnNavigation: e.closeOnNavigation
              });
              return e.backdropClass && (t.backdropClass = e.backdropClass), t;
            }
            _attachDialogContainer(e, t) {
              const o = i.r.create({
                  parent:
                    (t && t.viewContainerRef && t.viewContainerRef.injector) ||
                    this._injector,
                  providers: [{ provide: Pt, useValue: t }]
                }),
                a = new Re.d(
                  this._dialogContainerType,
                  t.viewContainerRef,
                  o,
                  t.componentFactoryResolver
                );
              return e.attach(a).instance;
            }
            _attachDialogContent(e, t, o, a) {
              const n = new this._dialogRefConstructor(o, t, a.id);
              if (e instanceof i.L)
                t.attachTemplatePortal(
                  new Re.h(e, null, { $implicit: a.data, dialogRef: n })
                );
              else {
                const o = this._createInjector(a, n, t),
                  i = t.attachComponentPortal(
                    new Re.d(e, a.viewContainerRef, o)
                  );
                n.componentInstance = i.instance;
              }
              return (
                n.updateSize(a.width, a.height).updatePosition(a.position), n
              );
            }
            _createInjector(e, t, o) {
              const a = e && e.viewContainerRef && e.viewContainerRef.injector,
                n = [
                  { provide: this._dialogContainerType, useValue: o },
                  { provide: this._dialogDataToken, useValue: e.data },
                  { provide: this._dialogRefConstructor, useValue: t }
                ];
              return (
                !e.direction ||
                  (a && a.get(w.b, null)) ||
                  n.push({
                    provide: w.b,
                    useValue: { value: e.direction, change: Object(ve.a)() }
                  }),
                i.r.create({ parent: a || this._injector, providers: n })
              );
            }
            _removeOpenDialog(e) {
              const t = this.openDialogs.indexOf(e);
              t > -1 &&
                (this.openDialogs.splice(t, 1),
                this.openDialogs.length ||
                  (this._ariaHiddenElements.forEach((e, t) => {
                    e
                      ? t.setAttribute('aria-hidden', e)
                      : t.removeAttribute('aria-hidden');
                  }),
                  this._ariaHiddenElements.clear(),
                  this._getAfterAllClosed().next()));
            }
            _hideNonDialogContentFromAssistiveTechnology() {
              const e = this._overlayContainer.getContainerElement();
              if (e.parentElement) {
                const t = e.parentElement.children;
                for (let o = t.length - 1; o > -1; o--) {
                  let i = t[o];
                  i === e ||
                    'SCRIPT' === i.nodeName ||
                    'STYLE' === i.nodeName ||
                    i.hasAttribute('aria-live') ||
                    (this._ariaHiddenElements.set(
                      i,
                      i.getAttribute('aria-hidden')
                    ),
                    i.setAttribute('aria-hidden', 'true'));
                }
              }
            }
            _closeDialogs(e) {
              let t = e.length;
              for (; t--; ) e[t].close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(Ze),
                i.Kb(i.r),
                i.Kb(void 0),
                i.Kb(void 0),
                i.Kb(Ke),
                i.Kb(void 0),
                i.Kb(i.N),
                i.Kb(i.N),
                i.Kb(i.q)
              );
            }),
            (e.ɵdir = i.Fb({ type: e })),
            e
          );
        })(),
        Kt = (() => {
          class e extends Vt {
            constructor(e, t, o, i, a, n, r) {
              super(e, t, i, n, r, a, At, Et, Tt);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Ub(Ze),
                i.Ub(i.r),
                i.Ub(a.h, 8),
                i.Ub(Lt, 8),
                i.Ub(Ft),
                i.Ub(e, 12),
                i.Ub(Ke)
              );
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        qt = 0,
        Nt = (() => {
          class e {
            constructor(e, t, o) {
              (this._dialogRef = e),
                (this._elementRef = t),
                (this._dialog = o),
                (this.id = 'mat-dialog-title-' + qt++);
            }
            ngOnInit() {
              this._dialogRef ||
                (this._dialogRef = (function (e, t) {
                  let o = e.nativeElement.parentElement;
                  for (; o && !o.classList.contains('mat-dialog-container'); )
                    o = o.parentElement;
                  return o ? t.find((e) => e.id === o.id) : null;
                })(this._elementRef, this._dialog.openDialogs)),
                this._dialogRef &&
                  Promise.resolve().then(() => {
                    const e = this._dialogRef._containerInstance;
                    e && !e._ariaLabelledBy && (e._ariaLabelledBy = this.id);
                  });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(At, 8), i.Kb(i.l), i.Kb(Kt));
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'mat-dialog-title', ''],
                ['', 'matDialogTitle', '']
              ],
              hostAttrs: [1, 'mat-dialog-title'],
              hostVars: 1,
              hostBindings: function (e, t) {
                2 & e && i.Tb('id', t.id);
              },
              inputs: { id: 'id' },
              exportAs: ['matDialogTitle']
            })),
            e
          );
        })(),
        Ht = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'mat-dialog-content', ''],
                ['mat-dialog-content'],
                ['', 'matDialogContent', '']
              ],
              hostAttrs: [1, 'mat-dialog-content']
            })),
            e
          );
        })(),
        Yt = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'mat-dialog-actions', ''],
                ['mat-dialog-actions'],
                ['', 'matDialogActions', '']
              ],
              hostAttrs: [1, 'mat-dialog-actions']
            })),
            e
          );
        })(),
        Qt = (() => {
          class e {}
          return (
            (e.ɵmod = i.Ib({ type: e })),
            (e.ɵinj = i.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [Kt, Bt],
              imports: [[it, Re.g, ye.e], ye.e]
            })),
            e
          );
        })();
      var Gt = o('f0Cb'),
        Wt = o('NFeN'),
        Xt = o('qFsG'),
        Ut = o('0EQZ');
      const Zt = ['*'],
        $t = [
          [
            ['', 'mat-list-avatar', ''],
            ['', 'mat-list-icon', ''],
            ['', 'matListAvatar', ''],
            ['', 'matListIcon', '']
          ],
          [
            ['', 'mat-line', ''],
            ['', 'matLine', '']
          ],
          '*'
        ],
        Jt = [
          '[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]',
          '[mat-line], [matLine]',
          '*'
        ];
      class eo {}
      const to = Object(ye.t)(Object(ye.s)(eo));
      class oo {}
      const io = Object(ye.s)(oo),
        ao = new i.q('MatList'),
        no = new i.q('MatNavList');
      let ro = (() => {
          class e extends to {
            constructor(e) {
              super(),
                (this._elementRef = e),
                (this._stateChanges = new l.a()),
                'action-list' === this._getListType() &&
                  e.nativeElement.classList.add('mat-action-list');
            }
            _getListType() {
              const e = this._elementRef.nativeElement.nodeName.toLowerCase();
              return 'mat-list' === e
                ? 'list'
                : 'mat-action-list' === e
                ? 'action-list'
                : null;
            }
            ngOnChanges() {
              this._stateChanges.next();
            }
            ngOnDestroy() {
              this._stateChanges.complete();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(i.l));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['mat-list'], ['mat-action-list']],
              hostAttrs: [1, 'mat-list', 'mat-list-base'],
              inputs: { disableRipple: 'disableRipple', disabled: 'disabled' },
              exportAs: ['matList'],
              features: [i.yb([{ provide: ao, useExisting: e }]), i.wb, i.xb],
              ngContentSelectors: Zt,
              decls: 1,
              vars: 0,
              template: function (e, t) {
                1 & e && (i.hc(), i.gc(0));
              },
              styles: [
                '.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list-base .mat-subheader{margin:0}.mat-list-base{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list-base .mat-subheader{height:48px;line-height:16px}.mat-list-base .mat-subheader:first-child{margin-top:-8px}.mat-list-base .mat-list-item,.mat-list-base .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base .mat-list-item .mat-list-item-content,.mat-list-base .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base .mat-list-item .mat-list-item-content-reverse,.mat-list-base .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base .mat-list-item .mat-list-item-ripple,.mat-list-base .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar,.mat-list-base .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list-base .mat-list-item.mat-2-line,.mat-list-base .mat-list-option.mat-2-line{height:72px}.mat-list-base .mat-list-item.mat-3-line,.mat-list-base .mat-list-option.mat-3-line{height:88px}.mat-list-base .mat-list-item.mat-multi-line,.mat-list-base .mat-list-option.mat-multi-line{height:auto}.mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base .mat-list-item .mat-list-text,.mat-list-base .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base .mat-list-item .mat-list-text>*,.mat-list-base .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base .mat-list-item .mat-list-text:empty,.mat-list-base .mat-list-option .mat-list-text:empty{display:none}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base .mat-list-item .mat-list-avatar,.mat-list-base .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list-base .mat-list-item .mat-list-icon,.mat-list-base .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list-base .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list-base .mat-list-item .mat-divider,.mat-list-base .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base .mat-list-item .mat-divider,[dir=rtl] .mat-list-base .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list-base[dense]{padding-top:4px;display:block}.mat-list-base[dense] .mat-subheader{height:40px;line-height:8px}.mat-list-base[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list-base[dense] .mat-list-item,.mat-list-base[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent;width:100%;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-item-content,.mat-list-base[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list-base[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list-base[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list-base[dense] .mat-list-item .mat-list-item-ripple,.mat-list-base[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list-base[dense] .mat-list-item.mat-2-line,.mat-list-base[dense] .mat-list-option.mat-2-line{height:60px}.mat-list-base[dense] .mat-list-item.mat-3-line,.mat-list-base[dense] .mat-list-option.mat-3-line{height:76px}.mat-list-base[dense] .mat-list-item.mat-multi-line,.mat-list-base[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list-base[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list-base[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list-base[dense] .mat-list-item .mat-list-text,.mat-list-base[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden;padding:0}.mat-list-base[dense] .mat-list-item .mat-list-text>*,.mat-list-base[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-list-base[dense] .mat-list-item .mat-list-text:empty,.mat-list-base[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list-base[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list-base[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:16px}.mat-list-base[dense] .mat-list-item .mat-list-avatar,.mat-list-base[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list-base[dense] .mat-list-item .mat-list-icon,.mat-list-base[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list-base[dense] .mat-list-item .mat-divider,.mat-list-base[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list-base[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list-base[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list-base[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list-base[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:none}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:transparent;text-align:left}[dir=rtl] mat-action-list button{text-align:right}mat-action-list button::-moz-focus-inner{border:0}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:none}.mat-list-item-disabled{pointer-events:none}.cdk-high-contrast-active .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active :host .mat-list-item-disabled{opacity:.5}.cdk-high-contrast-active .mat-selection-list:focus{outline-style:dotted}.cdk-high-contrast-active .mat-list-option:hover,.cdk-high-contrast-active .mat-list-option:focus,.cdk-high-contrast-active .mat-nav-list .mat-list-item:hover,.cdk-high-contrast-active .mat-nav-list .mat-list-item:focus,.cdk-high-contrast-active mat-action-list .mat-list-item:hover,.cdk-high-contrast-active mat-action-list .mat-list-item:focus{outline:dotted 1px}.cdk-high-contrast-active .mat-list-single-selected-option::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active [dir=rtl] .mat-list-single-selected-option::after{right:auto;left:16px}@media(hover: none){.mat-list-option:not(.mat-list-single-selected-option):not(.mat-list-item-disabled):hover,.mat-nav-list .mat-list-item:not(.mat-list-item-disabled):hover,.mat-action-list .mat-list-item:not(.mat-list-item-disabled):hover{background:none}}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })(),
        so = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'mat-list-avatar', ''],
                ['', 'matListAvatar', '']
              ],
              hostAttrs: [1, 'mat-list-avatar']
            })),
            e
          );
        })(),
        lo = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'mat-list-icon', ''],
                ['', 'matListIcon', '']
              ],
              hostAttrs: [1, 'mat-list-icon']
            })),
            e
          );
        })(),
        co = (() => {
          class e extends io {
            constructor(e, t, o, i) {
              super(),
                (this._element = e),
                (this._isInteractiveList = !1),
                (this._destroyed = new l.a()),
                (this._disabled = !1),
                (this._isInteractiveList = !!(
                  o ||
                  (i && 'action-list' === i._getListType())
                )),
                (this._list = o || i);
              const a = this._getHostElement();
              'button' !== a.nodeName.toLowerCase() ||
                a.hasAttribute('type') ||
                a.setAttribute('type', 'button'),
                this._list &&
                  this._list._stateChanges
                    .pipe(Object(b.a)(this._destroyed))
                    .subscribe(() => {
                      t.markForCheck();
                    });
            }
            get disabled() {
              return this._disabled || !(!this._list || !this._list.disabled);
            }
            set disabled(e) {
              this._disabled = Object(s.b)(e);
            }
            ngAfterContentInit() {
              Object(ye.w)(this._lines, this._element);
            }
            ngOnDestroy() {
              this._destroyed.next(), this._destroyed.complete();
            }
            _isRippleDisabled() {
              return (
                !this._isInteractiveList ||
                this.disableRipple ||
                !(!this._list || !this._list.disableRipple)
              );
            }
            _getHostElement() {
              return this._element.nativeElement;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(i.l),
                i.Kb(i.h),
                i.Kb(no, 8),
                i.Kb(ao, 8)
              );
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [
                ['mat-list-item'],
                ['a', 'mat-list-item', ''],
                ['button', 'mat-list-item', '']
              ],
              contentQueries: function (e, t, o) {
                if (
                  (1 & e &&
                    (i.Db(o, so, !0), i.Db(o, lo, !0), i.Db(o, ye.f, !0)),
                  2 & e)
                ) {
                  let e;
                  i.nc((e = i.Yb())) && (t._avatar = e.first),
                    i.nc((e = i.Yb())) && (t._icon = e.first),
                    i.nc((e = i.Yb())) && (t._lines = e);
                }
              },
              hostAttrs: [1, 'mat-list-item', 'mat-focus-indicator'],
              hostVars: 6,
              hostBindings: function (e, t) {
                2 & e &&
                  i.Cb('mat-list-item-disabled', t.disabled)(
                    'mat-list-item-avatar',
                    t._avatar || t._icon
                  )('mat-list-item-with-avatar', t._avatar || t._icon);
              },
              inputs: { disableRipple: 'disableRipple', disabled: 'disabled' },
              exportAs: ['matListItem'],
              features: [i.wb],
              ngContentSelectors: Jt,
              decls: 6,
              vars: 2,
              consts: [
                [1, 'mat-list-item-content'],
                [
                  'mat-ripple',
                  '',
                  1,
                  'mat-list-item-ripple',
                  3,
                  'matRippleTrigger',
                  'matRippleDisabled'
                ],
                [1, 'mat-list-text']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.hc($t),
                  i.Qb(0, 'div', 0),
                  i.Lb(1, 'div', 1),
                  i.gc(2),
                  i.Qb(3, 'div', 2),
                  i.gc(4, 1),
                  i.Pb(),
                  i.gc(5, 2),
                  i.Pb()),
                  2 & e &&
                    (i.zb(1),
                    i.ic('matRippleTrigger', t._getHostElement())(
                      'matRippleDisabled',
                      t._isRippleDisabled()
                    ));
              },
              directives: [ye.m],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })(),
        po = (() => {
          class e {}
          return (
            (e.ɵmod = i.Ib({ type: e })),
            (e.ɵinj = i.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[ye.g, ye.n, ye.e, ye.l, a.c], ye.g, ye.e, ye.l, Gt.b]
            })),
            e
          );
        })();
      var ho = o('7Hc7');
      const uo = ['mat-menu-item', ''],
        mo = ['*'];
      function go(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'div', 0),
            i.Xb('keydown', function (t) {
              return i.qc(e), i.bc()._handleKeydown(t);
            })('click', function () {
              return i.qc(e), i.bc().closed.emit('click');
            })('@transformMenu.start', function (t) {
              return i.qc(e), i.bc()._onAnimationStart(t);
            })('@transformMenu.done', function (t) {
              return i.qc(e), i.bc()._onAnimationDone(t);
            }),
            i.Qb(1, 'div', 1),
            i.gc(2),
            i.Pb(),
            i.Pb();
        }
        if (2 & e) {
          const e = i.bc();
          i.ic('id', e.panelId)('ngClass', e._classList)(
            '@transformMenu',
            e._panelAnimationState
          ),
            i.Ab('aria-label', e.ariaLabel || null)(
              'aria-labelledby',
              e.ariaLabelledby || null
            )('aria-describedby', e.ariaDescribedby || null);
        }
      }
      const bo = {
          transformMenu: Object(Ot.l)('transformMenu', [
            Object(Ot.i)(
              'void',
              Object(Ot.j)({ opacity: 0, transform: 'scale(0.8)' })
            ),
            Object(Ot.k)(
              'void => enter',
              Object(Ot.e)(
                '120ms cubic-bezier(0, 0, 0.2, 1)',
                Object(Ot.j)({ opacity: 1, transform: 'scale(1)' })
              )
            ),
            Object(Ot.k)(
              '* => void',
              Object(Ot.e)('100ms 25ms linear', Object(Ot.j)({ opacity: 0 }))
            )
          ]),
          fadeInItems: Object(Ot.l)('fadeInItems', [
            Object(Ot.i)('showing', Object(Ot.j)({ opacity: 1 })),
            Object(Ot.k)('void => *', [
              Object(Ot.j)({ opacity: 0 }),
              Object(Ot.e)('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
            ])
          ])
        },
        ko = new i.q('MatMenuContent'),
        fo = new i.q('MAT_MENU_PANEL');
      class yo {}
      const _o = Object(ye.s)(Object(ye.t)(yo));
      let vo = (() => {
        class e extends _o {
          constructor(e, t, o, i) {
            super(),
              (this._elementRef = e),
              (this._focusMonitor = o),
              (this._parentMenu = i),
              (this.role = 'menuitem'),
              (this._hovered = new l.a()),
              (this._focused = new l.a()),
              (this._highlighted = !1),
              (this._triggersSubmenu = !1),
              i && i.addItem && i.addItem(this);
          }
          focus(e = 'program', t) {
            this._focusMonitor
              ? this._focusMonitor.focusVia(this._getHostElement(), e, t)
              : this._getHostElement().focus(t),
              this._focused.next(this);
          }
          ngAfterViewInit() {
            this._focusMonitor &&
              this._focusMonitor.monitor(this._elementRef, !1);
          }
          ngOnDestroy() {
            this._focusMonitor &&
              this._focusMonitor.stopMonitoring(this._elementRef),
              this._parentMenu &&
                this._parentMenu.removeItem &&
                this._parentMenu.removeItem(this),
              this._hovered.complete(),
              this._focused.complete();
          }
          _getTabIndex() {
            return this.disabled ? '-1' : '0';
          }
          _getHostElement() {
            return this._elementRef.nativeElement;
          }
          _checkDisabled(e) {
            this.disabled && (e.preventDefault(), e.stopPropagation());
          }
          _handleMouseEnter() {
            this._hovered.next(this);
          }
          getLabel() {
            var e, t;
            const o = this._elementRef.nativeElement.cloneNode(!0),
              i = o.querySelectorAll('mat-icon, .material-icons');
            for (let a = 0; a < i.length; a++) {
              const t = i[a];
              null === (e = t.parentNode) || void 0 === e || e.removeChild(t);
            }
            return (
              (null === (t = o.textContent) || void 0 === t
                ? void 0
                : t.trim()) || ''
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Kb(i.l), i.Kb(a.d), i.Kb(fe.e), i.Kb(fo, 8));
          }),
          (e.ɵcmp = i.Eb({
            type: e,
            selectors: [['', 'mat-menu-item', '']],
            hostAttrs: [1, 'mat-focus-indicator'],
            hostVars: 10,
            hostBindings: function (e, t) {
              1 & e &&
                i.Xb('click', function (e) {
                  return t._checkDisabled(e);
                })('mouseenter', function () {
                  return t._handleMouseEnter();
                }),
                2 & e &&
                  (i.Ab('role', t.role)('tabindex', t._getTabIndex())(
                    'aria-disabled',
                    t.disabled.toString()
                  )('disabled', t.disabled || null),
                  i.Cb('mat-menu-item', !0)(
                    'mat-menu-item-highlighted',
                    t._highlighted
                  )('mat-menu-item-submenu-trigger', t._triggersSubmenu));
            },
            inputs: {
              disabled: 'disabled',
              disableRipple: 'disableRipple',
              role: 'role'
            },
            exportAs: ['matMenuItem'],
            features: [i.wb],
            attrs: uo,
            ngContentSelectors: mo,
            decls: 2,
            vars: 2,
            consts: [
              [
                'matRipple',
                '',
                1,
                'mat-menu-ripple',
                3,
                'matRippleDisabled',
                'matRippleTrigger'
              ]
            ],
            template: function (e, t) {
              1 & e && (i.hc(), i.gc(0), i.Lb(1, 'div', 0)),
                2 & e &&
                  (i.zb(1),
                  i.ic('matRippleDisabled', t.disableRipple || t.disabled)(
                    'matRippleTrigger',
                    t._getHostElement()
                  ));
            },
            directives: [ye.m],
            encapsulation: 2,
            changeDetection: 0
          })),
          e
        );
      })();
      const wo = new i.q('mat-menu-default-options', {
        providedIn: 'root',
        factory: function () {
          return {
            overlapTrigger: !1,
            xPosition: 'after',
            yPosition: 'below',
            backdropClass: 'cdk-overlay-transparent-backdrop'
          };
        }
      });
      let Ro = 0,
        Co = (() => {
          class e {
            constructor(e, t, o) {
              (this._elementRef = e),
                (this._ngZone = t),
                (this._defaultOptions = o),
                (this._xPosition = this._defaultOptions.xPosition),
                (this._yPosition = this._defaultOptions.yPosition),
                (this._directDescendantItems = new i.D()),
                (this._tabSubscription = c.a.EMPTY),
                (this._classList = {}),
                (this._panelAnimationState = 'void'),
                (this._animationDone = new l.a()),
                (this.overlayPanelClass =
                  this._defaultOptions.overlayPanelClass || ''),
                (this.backdropClass = this._defaultOptions.backdropClass),
                (this._overlapTrigger = this._defaultOptions.overlapTrigger),
                (this._hasBackdrop = this._defaultOptions.hasBackdrop),
                (this.closed = new i.n()),
                (this.close = this.closed),
                (this.panelId = 'mat-menu-panel-' + Ro++);
            }
            get xPosition() {
              return this._xPosition;
            }
            set xPosition(e) {
              (this._xPosition = e), this.setPositionClasses();
            }
            get yPosition() {
              return this._yPosition;
            }
            set yPosition(e) {
              (this._yPosition = e), this.setPositionClasses();
            }
            get overlapTrigger() {
              return this._overlapTrigger;
            }
            set overlapTrigger(e) {
              this._overlapTrigger = Object(s.b)(e);
            }
            get hasBackdrop() {
              return this._hasBackdrop;
            }
            set hasBackdrop(e) {
              this._hasBackdrop = Object(s.b)(e);
            }
            set panelClass(e) {
              const t = this._previousPanelClass;
              t &&
                t.length &&
                t.split(' ').forEach((e) => {
                  this._classList[e] = !1;
                }),
                (this._previousPanelClass = e),
                e &&
                  e.length &&
                  (e.split(' ').forEach((e) => {
                    this._classList[e] = !0;
                  }),
                  (this._elementRef.nativeElement.className = ''));
            }
            get classList() {
              return this.panelClass;
            }
            set classList(e) {
              this.panelClass = e;
            }
            ngOnInit() {
              this.setPositionClasses();
            }
            ngAfterContentInit() {
              this._updateDirectDescendants(),
                (this._keyManager = new fe.d(this._directDescendantItems)
                  .withWrap()
                  .withTypeAhead()
                  .withHomeAndEnd()),
                (this._tabSubscription = this._keyManager.tabOut.subscribe(() =>
                  this.closed.emit('tab')
                )),
                this._directDescendantItems.changes
                  .pipe(
                    Object(k.a)(this._directDescendantItems),
                    Object(v.a)((e) => Object(g.a)(...e.map((e) => e._focused)))
                  )
                  .subscribe((e) => this._keyManager.updateActiveItem(e));
            }
            ngOnDestroy() {
              this._directDescendantItems.destroy(),
                this._tabSubscription.unsubscribe(),
                this.closed.complete();
            }
            _hovered() {
              return this._directDescendantItems.changes.pipe(
                Object(k.a)(this._directDescendantItems),
                Object(v.a)((e) => Object(g.a)(...e.map((e) => e._hovered)))
              );
            }
            addItem(e) {}
            removeItem(e) {}
            _handleKeydown(e) {
              const t = e.keyCode,
                o = this._keyManager;
              switch (t) {
                case xe.e:
                  Object(xe.o)(e) ||
                    (e.preventDefault(), this.closed.emit('keydown'));
                  break;
                case xe.g:
                  this.parentMenu &&
                    'ltr' === this.direction &&
                    this.closed.emit('keydown');
                  break;
                case xe.i:
                  this.parentMenu &&
                    'rtl' === this.direction &&
                    this.closed.emit('keydown');
                  break;
                default:
                  (t !== xe.l && t !== xe.b) || o.setFocusOrigin('keyboard'),
                    o.onKeydown(e);
              }
            }
            focusFirstItem(e = 'program') {
              this.lazyContent
                ? this._ngZone.onStable
                    .pipe(Object(y.a)(1))
                    .subscribe(() => this._focusFirstItem(e))
                : this._focusFirstItem(e);
            }
            _focusFirstItem(e) {
              const t = this._keyManager;
              if (
                (t.setFocusOrigin(e).setFirstItemActive(),
                !t.activeItem && this._directDescendantItems.length)
              ) {
                let e = this._directDescendantItems.first._getHostElement()
                  .parentElement;
                for (; e; ) {
                  if ('menu' === e.getAttribute('role')) {
                    e.focus();
                    break;
                  }
                  e = e.parentElement;
                }
              }
            }
            resetActiveItem() {
              this._keyManager.setActiveItem(-1);
            }
            setElevation(e) {
              const t = 'mat-elevation-z' + Math.min(4 + e, 24),
                o = Object.keys(this._classList).find((e) =>
                  e.startsWith('mat-elevation-z')
                );
              (o && o !== this._previousElevation) ||
                (this._previousElevation &&
                  (this._classList[this._previousElevation] = !1),
                (this._classList[t] = !0),
                (this._previousElevation = t));
            }
            setPositionClasses(e = this.xPosition, t = this.yPosition) {
              const o = this._classList;
              (o['mat-menu-before'] = 'before' === e),
                (o['mat-menu-after'] = 'after' === e),
                (o['mat-menu-above'] = 'above' === t),
                (o['mat-menu-below'] = 'below' === t);
            }
            _startAnimation() {
              this._panelAnimationState = 'enter';
            }
            _resetAnimation() {
              this._panelAnimationState = 'void';
            }
            _onAnimationDone(e) {
              this._animationDone.next(e), (this._isAnimating = !1);
            }
            _onAnimationStart(e) {
              (this._isAnimating = !0),
                'enter' === e.toState &&
                  0 === this._keyManager.activeItemIndex &&
                  (e.element.scrollTop = 0);
            }
            _updateDirectDescendants() {
              this._allItems.changes
                .pipe(Object(k.a)(this._allItems))
                .subscribe((e) => {
                  this._directDescendantItems.reset(
                    e.filter((e) => e._parentMenu === this)
                  ),
                    this._directDescendantItems.notifyOnChanges();
                });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(i.l), i.Kb(i.z), i.Kb(wo));
            }),
            (e.ɵdir = i.Fb({
              type: e,
              contentQueries: function (e, t, o) {
                if (
                  (1 & e && (i.Db(o, ko, !0), i.Db(o, vo, !0), i.Db(o, vo, !1)),
                  2 & e)
                ) {
                  let e;
                  i.nc((e = i.Yb())) && (t.lazyContent = e.first),
                    i.nc((e = i.Yb())) && (t._allItems = e),
                    i.nc((e = i.Yb())) && (t.items = e);
                }
              },
              viewQuery: function (e, t) {
                if ((1 & e && i.Ec(i.L, !0), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t.templateRef = e.first);
                }
              },
              inputs: {
                backdropClass: 'backdropClass',
                xPosition: 'xPosition',
                yPosition: 'yPosition',
                overlapTrigger: 'overlapTrigger',
                hasBackdrop: 'hasBackdrop',
                panelClass: ['class', 'panelClass'],
                classList: 'classList',
                ariaLabel: ['aria-label', 'ariaLabel'],
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                ariaDescribedby: ['aria-describedby', 'ariaDescribedby']
              },
              outputs: { closed: 'closed', close: 'close' }
            })),
            e
          );
        })(),
        xo = (() => {
          class e extends Co {
            constructor(e, t, o) {
              super(e, t, o);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(i.l), i.Kb(i.z), i.Kb(wo));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['mat-menu']],
              hostVars: 3,
              hostBindings: function (e, t) {
                2 & e &&
                  i.Ab('aria-label', null)('aria-labelledby', null)(
                    'aria-describedby',
                    null
                  );
              },
              exportAs: ['matMenu'],
              features: [i.yb([{ provide: fo, useExisting: e }]), i.wb],
              ngContentSelectors: mo,
              decls: 1,
              vars: 0,
              consts: [
                [
                  'tabindex',
                  '-1',
                  'role',
                  'menu',
                  1,
                  'mat-menu-panel',
                  3,
                  'id',
                  'ngClass',
                  'keydown',
                  'click'
                ],
                [1, 'mat-menu-content']
              ],
              template: function (e, t) {
                1 & e && (i.hc(), i.zc(0, go, 3, 6, 'ng-template'));
              },
              directives: [a.k],
              styles: [
                '.mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0;min-height:64px}.mat-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-menu-panel{outline:solid 1px}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}.mat-menu-item[disabled]{pointer-events:none}.cdk-high-contrast-active .mat-menu-item.cdk-program-focused,.cdk-high-contrast-active .mat-menu-item.cdk-keyboard-focused,.cdk-high-contrast-active .mat-menu-item-highlighted{outline:dotted 1px}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:"";display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}\n'
              ],
              encapsulation: 2,
              data: { animation: [bo.transformMenu, bo.fadeInItems] },
              changeDetection: 0
            })),
            e
          );
        })();
      const Oo = new i.q('mat-menu-scroll-strategy'),
        So = {
          provide: Oo,
          deps: [Ze],
          useFactory: function (e) {
            return () => e.scrollStrategies.reposition();
          }
        },
        Po = Object(r.f)({ passive: !0 });
      let zo = (() => {
          class e {
            constructor(e, t, o, a, n, r, s, l) {
              (this._overlay = e),
                (this._element = t),
                (this._viewContainerRef = o),
                (this._menuItemInstance = r),
                (this._dir = s),
                (this._focusMonitor = l),
                (this._overlayRef = null),
                (this._menuOpen = !1),
                (this._closingActionsSubscription = c.a.EMPTY),
                (this._hoverSubscription = c.a.EMPTY),
                (this._menuCloseSubscription = c.a.EMPTY),
                (this._handleTouchStart = () => (this._openedBy = 'touch')),
                (this._openedBy = null),
                (this.restoreFocus = !0),
                (this.menuOpened = new i.n()),
                (this.onMenuOpen = this.menuOpened),
                (this.menuClosed = new i.n()),
                (this.onMenuClose = this.menuClosed),
                (this._scrollStrategy = a),
                (this._parentMaterialMenu = n instanceof Co ? n : void 0),
                t.nativeElement.addEventListener(
                  'touchstart',
                  this._handleTouchStart,
                  Po
                ),
                r && (r._triggersSubmenu = this.triggersSubmenu());
            }
            get _deprecatedMatMenuTriggerFor() {
              return this.menu;
            }
            set _deprecatedMatMenuTriggerFor(e) {
              this.menu = e;
            }
            get menu() {
              return this._menu;
            }
            set menu(e) {
              e !== this._menu &&
                ((this._menu = e),
                this._menuCloseSubscription.unsubscribe(),
                e &&
                  (this._menuCloseSubscription = e.close.subscribe((e) => {
                    this._destroyMenu(),
                      ('click' !== e && 'tab' !== e) ||
                        !this._parentMaterialMenu ||
                        this._parentMaterialMenu.closed.emit(e);
                  })));
            }
            ngAfterContentInit() {
              this._checkMenu(), this._handleHover();
            }
            ngOnDestroy() {
              this._overlayRef &&
                (this._overlayRef.dispose(), (this._overlayRef = null)),
                this._element.nativeElement.removeEventListener(
                  'touchstart',
                  this._handleTouchStart,
                  Po
                ),
                this._menuCloseSubscription.unsubscribe(),
                this._closingActionsSubscription.unsubscribe(),
                this._hoverSubscription.unsubscribe();
            }
            get menuOpen() {
              return this._menuOpen;
            }
            get dir() {
              return this._dir && 'rtl' === this._dir.value ? 'rtl' : 'ltr';
            }
            triggersSubmenu() {
              return !(!this._menuItemInstance || !this._parentMaterialMenu);
            }
            toggleMenu() {
              return this._menuOpen ? this.closeMenu() : this.openMenu();
            }
            openMenu() {
              if (this._menuOpen) return;
              this._checkMenu();
              const e = this._createOverlay(),
                t = e.getConfig();
              this._setPosition(t.positionStrategy),
                (t.hasBackdrop =
                  null == this.menu.hasBackdrop
                    ? !this.triggersSubmenu()
                    : this.menu.hasBackdrop),
                e.attach(this._getPortal()),
                this.menu.lazyContent &&
                  this.menu.lazyContent.attach(this.menuData),
                (this._closingActionsSubscription = this._menuClosingActions().subscribe(
                  () => this.closeMenu()
                )),
                this._initMenu(),
                this.menu instanceof Co && this.menu._startAnimation();
            }
            closeMenu() {
              this.menu.close.emit();
            }
            focus(e = 'program', t) {
              this._focusMonitor
                ? this._focusMonitor.focusVia(this._element, e, t)
                : this._element.nativeElement.focus(t);
            }
            _destroyMenu() {
              if (!this._overlayRef || !this.menuOpen) return;
              const e = this.menu;
              this._closingActionsSubscription.unsubscribe(),
                this._overlayRef.detach(),
                this._restoreFocus(),
                e instanceof Co
                  ? (e._resetAnimation(),
                    e.lazyContent
                      ? e._animationDone
                          .pipe(
                            Object(nt.a)((e) => 'void' === e.toState),
                            Object(y.a)(1),
                            Object(b.a)(e.lazyContent._attached)
                          )
                          .subscribe({
                            next: () => e.lazyContent.detach(),
                            complete: () => this._setIsMenuOpen(!1)
                          })
                      : this._setIsMenuOpen(!1))
                  : (this._setIsMenuOpen(!1),
                    e.lazyContent && e.lazyContent.detach());
            }
            _initMenu() {
              (this.menu.parentMenu = this.triggersSubmenu()
                ? this._parentMaterialMenu
                : void 0),
                (this.menu.direction = this.dir),
                this._setMenuElevation(),
                this._setIsMenuOpen(!0),
                this.menu.focusFirstItem(this._openedBy || 'program');
            }
            _setMenuElevation() {
              if (this.menu.setElevation) {
                let e = 0,
                  t = this.menu.parentMenu;
                for (; t; ) e++, (t = t.parentMenu);
                this.menu.setElevation(e);
              }
            }
            _restoreFocus() {
              this.restoreFocus &&
                (this._openedBy
                  ? this.triggersSubmenu() || this.focus(this._openedBy)
                  : this.focus()),
                (this._openedBy = null);
            }
            _setIsMenuOpen(e) {
              (this._menuOpen = e),
                this._menuOpen
                  ? this.menuOpened.emit()
                  : this.menuClosed.emit(),
                this.triggersSubmenu() &&
                  (this._menuItemInstance._highlighted = e);
            }
            _checkMenu() {}
            _createOverlay() {
              if (!this._overlayRef) {
                const e = this._getOverlayConfig();
                this._subscribeToPositions(e.positionStrategy),
                  (this._overlayRef = this._overlay.create(e)),
                  this._overlayRef.keydownEvents().subscribe();
              }
              return this._overlayRef;
            }
            _getOverlayConfig() {
              return new Ae({
                positionStrategy: this._overlay
                  .position()
                  .flexibleConnectedTo(this._element)
                  .withLockedPosition()
                  .withGrowAfterOpen()
                  .withTransformOriginOn(
                    '.mat-menu-panel, .mat-mdc-menu-panel'
                  ),
                backdropClass:
                  this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
                panelClass: this.menu.overlayPanelClass,
                scrollStrategy: this._scrollStrategy(),
                direction: this._dir
              });
            }
            _subscribeToPositions(e) {
              this.menu.setPositionClasses &&
                e.positionChanges.subscribe((e) => {
                  this.menu.setPositionClasses(
                    'start' === e.connectionPair.overlayX ? 'after' : 'before',
                    'top' === e.connectionPair.overlayY ? 'below' : 'above'
                  );
                });
            }
            _setPosition(e) {
              let [t, o] =
                  'before' === this.menu.xPosition
                    ? ['end', 'start']
                    : ['start', 'end'],
                [i, a] =
                  'above' === this.menu.yPosition
                    ? ['bottom', 'top']
                    : ['top', 'bottom'],
                [n, r] = [i, a],
                [s, l] = [t, o],
                c = 0;
              this.triggersSubmenu()
                ? ((l = t = 'before' === this.menu.xPosition ? 'start' : 'end'),
                  (o = s = 'end' === t ? 'start' : 'end'),
                  (c = 'bottom' === i ? 8 : -8))
                : this.menu.overlapTrigger ||
                  ((n = 'top' === i ? 'bottom' : 'top'),
                  (r = 'top' === a ? 'bottom' : 'top')),
                e.withPositions([
                  {
                    originX: t,
                    originY: n,
                    overlayX: s,
                    overlayY: i,
                    offsetY: c
                  },
                  {
                    originX: o,
                    originY: n,
                    overlayX: l,
                    overlayY: i,
                    offsetY: c
                  },
                  {
                    originX: t,
                    originY: r,
                    overlayX: s,
                    overlayY: a,
                    offsetY: -c
                  },
                  {
                    originX: o,
                    originY: r,
                    overlayX: l,
                    overlayY: a,
                    offsetY: -c
                  }
                ]);
            }
            _menuClosingActions() {
              const e = this._overlayRef.backdropClick(),
                t = this._overlayRef.detachments(),
                o = this._parentMaterialMenu
                  ? this._parentMaterialMenu.closed
                  : Object(ve.a)(),
                i = this._parentMaterialMenu
                  ? this._parentMaterialMenu._hovered().pipe(
                      Object(nt.a)((e) => e !== this._menuItemInstance),
                      Object(nt.a)(() => this._menuOpen)
                    )
                  : Object(ve.a)();
              return Object(g.a)(e, o, i, t);
            }
            _handleMousedown(e) {
              Object(fe.i)(e) ||
                ((this._openedBy = 0 === e.button ? 'mouse' : null),
                this.triggersSubmenu() && e.preventDefault());
            }
            _handleKeydown(e) {
              const t = e.keyCode;
              (t !== xe.d && t !== xe.j) || (this._openedBy = 'keyboard'),
                this.triggersSubmenu() &&
                  ((t === xe.i && 'ltr' === this.dir) ||
                    (t === xe.g && 'rtl' === this.dir)) &&
                  ((this._openedBy = 'keyboard'), this.openMenu());
            }
            _handleClick(e) {
              this.triggersSubmenu()
                ? (e.stopPropagation(), this.openMenu())
                : this.toggleMenu();
            }
            _handleHover() {
              this.triggersSubmenu() &&
                this._parentMaterialMenu &&
                (this._hoverSubscription = this._parentMaterialMenu
                  ._hovered()
                  .pipe(
                    Object(nt.a)(
                      (e) => e === this._menuItemInstance && !e.disabled
                    ),
                    Object(rt.a)(0, ho.a)
                  )
                  .subscribe(() => {
                    (this._openedBy = 'mouse'),
                      this.menu instanceof Co && this.menu._isAnimating
                        ? this.menu._animationDone
                            .pipe(
                              Object(y.a)(1),
                              Object(rt.a)(0, ho.a),
                              Object(b.a)(this._parentMaterialMenu._hovered())
                            )
                            .subscribe(() => this.openMenu())
                        : this.openMenu();
                  }));
            }
            _getPortal() {
              return (
                (this._portal &&
                  this._portal.templateRef === this.menu.templateRef) ||
                  (this._portal = new Re.h(
                    this.menu.templateRef,
                    this._viewContainerRef
                  )),
                this._portal
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(Ze),
                i.Kb(i.l),
                i.Kb(i.P),
                i.Kb(Oo),
                i.Kb(fo, 8),
                i.Kb(vo, 10),
                i.Kb(w.b, 8),
                i.Kb(fe.e)
              );
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [
                ['', 'mat-menu-trigger-for', ''],
                ['', 'matMenuTriggerFor', '']
              ],
              hostAttrs: ['aria-haspopup', 'true', 1, 'mat-menu-trigger'],
              hostVars: 2,
              hostBindings: function (e, t) {
                1 & e &&
                  i.Xb('mousedown', function (e) {
                    return t._handleMousedown(e);
                  })('keydown', function (e) {
                    return t._handleKeydown(e);
                  })('click', function (e) {
                    return t._handleClick(e);
                  }),
                  2 & e &&
                    i.Ab('aria-expanded', t.menuOpen || null)(
                      'aria-controls',
                      t.menuOpen ? t.menu.panelId : null
                    );
              },
              inputs: {
                restoreFocus: ['matMenuTriggerRestoreFocus', 'restoreFocus'],
                _deprecatedMatMenuTriggerFor: [
                  'mat-menu-trigger-for',
                  '_deprecatedMatMenuTriggerFor'
                ],
                menu: ['matMenuTriggerFor', 'menu'],
                menuData: ['matMenuTriggerData', 'menuData']
              },
              outputs: {
                menuOpened: 'menuOpened',
                onMenuOpen: 'onMenuOpen',
                menuClosed: 'menuClosed',
                onMenuClose: 'onMenuClose'
              },
              exportAs: ['matMenuTrigger']
            })),
            e
          );
        })(),
        Do = (() => {
          class e {}
          return (
            (e.ɵmod = i.Ib({ type: e })),
            (e.ɵinj = i.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [So],
              imports: [ye.e]
            })),
            e
          );
        })(),
        Eo = (() => {
          class e {}
          return (
            (e.ɵmod = i.Ib({ type: e })),
            (e.ɵinj = i.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              providers: [So],
              imports: [[a.c, ye.e, ye.n, it, Do], n.b, ye.e, Do]
            })),
            e
          );
        })();
      var Io = o('Xa2L'),
        Mo = o('/uUt');
      const Ao = ['trigger'],
        jo = ['panel'];
      function To(e, t) {
        if ((1 & e && (i.Qb(0, 'span', 8), i.Ac(1), i.Pb()), 2 & e)) {
          const e = i.bc();
          i.zb(1), i.Bc(e.placeholder || '\xa0');
        }
      }
      function Lo(e, t) {
        if ((1 & e && (i.Qb(0, 'span'), i.Ac(1), i.Pb()), 2 & e)) {
          const e = i.bc(2);
          i.zb(1), i.Bc(e.triggerValue || '\xa0');
        }
      }
      function Fo(e, t) {
        1 & e && i.gc(0, 0, ['*ngSwitchCase', 'true']);
      }
      function Bo(e, t) {
        if (
          (1 & e &&
            (i.Qb(0, 'span', 9),
            i.zc(1, Lo, 2, 1, 'span', 10),
            i.zc(2, Fo, 1, 0, 'ng-content', 11),
            i.Pb()),
          2 & e)
        ) {
          const e = i.bc();
          i.ic('ngSwitch', !!e.customTrigger),
            i.zb(2),
            i.ic('ngSwitchCase', !0);
        }
      }
      function Vo(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'div', 12),
            i.Qb(1, 'div', 13, 14),
            i.Xb('@transformPanel.done', function (t) {
              return i.qc(e), i.bc()._panelDoneAnimatingStream.next(t.toState);
            })('keydown', function (t) {
              return i.qc(e), i.bc()._handleKeydown(t);
            }),
            i.gc(3, 1),
            i.Pb(),
            i.Pb();
        }
        if (2 & e) {
          const e = i.bc();
          i.ic('@transformPanelWrap', void 0),
            i.zb(1),
            i.Bb('mat-select-panel ', e._getPanelTheme(), ''),
            i.wc('transform-origin', e._transformOrigin)(
              'font-size',
              e._triggerFontSize,
              'px'
            ),
            i.ic('ngClass', e.panelClass)(
              '@transformPanel',
              e.multiple ? 'showing-multiple' : 'showing'
            ),
            i.Ab('id', e.id + '-panel')('aria-multiselectable', e.multiple)(
              'aria-label',
              e.ariaLabel || null
            )('aria-labelledby', e._getPanelAriaLabelledby());
        }
      }
      const Ko = [[['mat-select-trigger']], '*'],
        qo = ['mat-select-trigger', '*'],
        No = {
          transformPanelWrap: Object(Ot.l)('transformPanelWrap', [
            Object(Ot.k)(
              '* => void',
              Object(Ot.g)('@transformPanel', [Object(Ot.f)()], {
                optional: !0
              })
            )
          ]),
          transformPanel: Object(Ot.l)('transformPanel', [
            Object(Ot.i)(
              'void',
              Object(Ot.j)({
                transform: 'scaleY(0.8)',
                minWidth: '100%',
                opacity: 0
              })
            ),
            Object(Ot.i)(
              'showing',
              Object(Ot.j)({
                opacity: 1,
                minWidth: 'calc(100% + 32px)',
                transform: 'scaleY(1)'
              })
            ),
            Object(Ot.i)(
              'showing-multiple',
              Object(Ot.j)({
                opacity: 1,
                minWidth: 'calc(100% + 64px)',
                transform: 'scaleY(1)'
              })
            ),
            Object(Ot.k)(
              'void => *',
              Object(Ot.e)('120ms cubic-bezier(0, 0, 0.2, 1)')
            ),
            Object(Ot.k)(
              '* => void',
              Object(Ot.e)('100ms 25ms linear', Object(Ot.j)({ opacity: 0 }))
            )
          ])
        };
      let Ho = 0;
      const Yo = new i.q('mat-select-scroll-strategy'),
        Qo = new i.q('MAT_SELECT_CONFIG'),
        Go = {
          provide: Yo,
          deps: [Ze],
          useFactory: function (e) {
            return () => e.scrollStrategies.reposition();
          }
        };
      class Wo {
        constructor(e, t) {
          (this.source = e), (this.value = t);
        }
      }
      class Xo {
        constructor(e, t, o, i, a) {
          (this._elementRef = e),
            (this._defaultErrorStateMatcher = t),
            (this._parentForm = o),
            (this._parentFormGroup = i),
            (this.ngControl = a);
        }
      }
      const Uo = Object(ye.s)(Object(ye.v)(Object(ye.t)(Object(ye.u)(Xo)))),
        Zo = new i.q('MatSelectTrigger');
      let $o = (() => {
          class e extends Uo {
            constructor(e, t, o, a, n, r, s, c, d, p, h, u, m, b) {
              var _, w, R;
              super(n, a, s, c, p),
                (this._viewportRuler = e),
                (this._changeDetectorRef = t),
                (this._ngZone = o),
                (this._dir = r),
                (this._parentFormField = d),
                (this.ngControl = p),
                (this._liveAnnouncer = m),
                (this._defaultOptions = b),
                (this._panelOpen = !1),
                (this._compareWith = (e, t) => e === t),
                (this._uid = 'mat-select-' + Ho++),
                (this._triggerAriaLabelledBy = null),
                (this._destroy = new l.a()),
                (this._onChange = () => {}),
                (this._onTouched = () => {}),
                (this._valueId = 'mat-select-value-' + Ho++),
                (this._panelDoneAnimatingStream = new l.a()),
                (this._overlayPanelClass =
                  (null === (_ = this._defaultOptions) || void 0 === _
                    ? void 0
                    : _.overlayPanelClass) || ''),
                (this._focused = !1),
                (this.controlType = 'mat-select'),
                (this._required = !1),
                (this._multiple = !1),
                (this._disableOptionCentering =
                  null !==
                    (R =
                      null === (w = this._defaultOptions) || void 0 === w
                        ? void 0
                        : w.disableOptionCentering) &&
                  void 0 !== R &&
                  R),
                (this.ariaLabel = ''),
                (this.optionSelectionChanges = Object(_e.a)(() => {
                  const e = this.options;
                  return e
                    ? e.changes.pipe(
                        Object(k.a)(e),
                        Object(v.a)(() =>
                          Object(g.a)(...e.map((e) => e.onSelectionChange))
                        )
                      )
                    : this._ngZone.onStable.pipe(
                        Object(y.a)(1),
                        Object(v.a)(() => this.optionSelectionChanges)
                      );
                })),
                (this.openedChange = new i.n()),
                (this._openedStream = this.openedChange.pipe(
                  Object(nt.a)((e) => e),
                  Object(f.a)(() => {})
                )),
                (this._closedStream = this.openedChange.pipe(
                  Object(nt.a)((e) => !e),
                  Object(f.a)(() => {})
                )),
                (this.selectionChange = new i.n()),
                (this.valueChange = new i.n()),
                this.ngControl && (this.ngControl.valueAccessor = this),
                null != (null == b ? void 0 : b.typeaheadDebounceInterval) &&
                  (this._typeaheadDebounceInterval =
                    b.typeaheadDebounceInterval),
                (this._scrollStrategyFactory = u),
                (this._scrollStrategy = this._scrollStrategyFactory()),
                (this.tabIndex = parseInt(h) || 0),
                (this.id = this.id);
            }
            get focused() {
              return this._focused || this._panelOpen;
            }
            get placeholder() {
              return this._placeholder;
            }
            set placeholder(e) {
              (this._placeholder = e), this.stateChanges.next();
            }
            get required() {
              return this._required;
            }
            set required(e) {
              (this._required = Object(s.b)(e)), this.stateChanges.next();
            }
            get multiple() {
              return this._multiple;
            }
            set multiple(e) {
              this._multiple = Object(s.b)(e);
            }
            get disableOptionCentering() {
              return this._disableOptionCentering;
            }
            set disableOptionCentering(e) {
              this._disableOptionCentering = Object(s.b)(e);
            }
            get compareWith() {
              return this._compareWith;
            }
            set compareWith(e) {
              (this._compareWith = e),
                this._selectionModel && this._initializeSelection();
            }
            get value() {
              return this._value;
            }
            set value(e) {
              e !== this._value &&
                (this.options && this._setSelectionByValue(e),
                (this._value = e));
            }
            get typeaheadDebounceInterval() {
              return this._typeaheadDebounceInterval;
            }
            set typeaheadDebounceInterval(e) {
              this._typeaheadDebounceInterval = Object(s.e)(e);
            }
            get id() {
              return this._id;
            }
            set id(e) {
              (this._id = e || this._uid), this.stateChanges.next();
            }
            ngOnInit() {
              (this._selectionModel = new Ut.c(this.multiple)),
                this.stateChanges.next(),
                this._panelDoneAnimatingStream
                  .pipe(Object(Mo.a)(), Object(b.a)(this._destroy))
                  .subscribe(() => this._panelDoneAnimating(this.panelOpen));
            }
            ngAfterContentInit() {
              this._initKeyManager(),
                this._selectionModel.changed
                  .pipe(Object(b.a)(this._destroy))
                  .subscribe((e) => {
                    e.added.forEach((e) => e.select()),
                      e.removed.forEach((e) => e.deselect());
                  }),
                this.options.changes
                  .pipe(Object(k.a)(null), Object(b.a)(this._destroy))
                  .subscribe(() => {
                    this._resetOptions(), this._initializeSelection();
                  });
            }
            ngDoCheck() {
              const e = this._getTriggerAriaLabelledby();
              if (e !== this._triggerAriaLabelledBy) {
                const t = this._elementRef.nativeElement;
                (this._triggerAriaLabelledBy = e),
                  e
                    ? t.setAttribute('aria-labelledby', e)
                    : t.removeAttribute('aria-labelledby');
              }
              this.ngControl && this.updateErrorState();
            }
            ngOnChanges(e) {
              e.disabled && this.stateChanges.next(),
                e.typeaheadDebounceInterval &&
                  this._keyManager &&
                  this._keyManager.withTypeAhead(
                    this._typeaheadDebounceInterval
                  );
            }
            ngOnDestroy() {
              this._destroy.next(),
                this._destroy.complete(),
                this.stateChanges.complete();
            }
            toggle() {
              this.panelOpen ? this.close() : this.open();
            }
            open() {
              this._canOpen() &&
                ((this._panelOpen = !0),
                this._keyManager.withHorizontalOrientation(null),
                this._highlightCorrectOption(),
                this._changeDetectorRef.markForCheck());
            }
            close() {
              this._panelOpen &&
                ((this._panelOpen = !1),
                this._keyManager.withHorizontalOrientation(
                  this._isRtl() ? 'rtl' : 'ltr'
                ),
                this._changeDetectorRef.markForCheck(),
                this._onTouched());
            }
            writeValue(e) {
              this.value = e;
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              (this.disabled = e),
                this._changeDetectorRef.markForCheck(),
                this.stateChanges.next();
            }
            get panelOpen() {
              return this._panelOpen;
            }
            get selected() {
              return this.multiple
                ? this._selectionModel.selected
                : this._selectionModel.selected[0];
            }
            get triggerValue() {
              if (this.empty) return '';
              if (this._multiple) {
                const e = this._selectionModel.selected.map((e) => e.viewValue);
                return this._isRtl() && e.reverse(), e.join(', ');
              }
              return this._selectionModel.selected[0].viewValue;
            }
            _isRtl() {
              return !!this._dir && 'rtl' === this._dir.value;
            }
            _handleKeydown(e) {
              this.disabled ||
                (this.panelOpen
                  ? this._handleOpenKeydown(e)
                  : this._handleClosedKeydown(e));
            }
            _handleClosedKeydown(e) {
              const t = e.keyCode,
                o = t === xe.b || t === xe.l || t === xe.g || t === xe.i,
                i = t === xe.d || t === xe.j,
                a = this._keyManager;
              if (
                (!a.isTyping() && i && !Object(xe.o)(e)) ||
                ((this.multiple || e.altKey) && o)
              )
                e.preventDefault(), this.open();
              else if (!this.multiple) {
                const t = this.selected;
                a.onKeydown(e);
                const o = this.selected;
                o && t !== o && this._liveAnnouncer.announce(o.viewValue, 1e4);
              }
            }
            _handleOpenKeydown(e) {
              const t = this._keyManager,
                o = e.keyCode,
                i = o === xe.b || o === xe.l,
                a = t.isTyping();
              if (i && e.altKey) e.preventDefault(), this.close();
              else if (
                a ||
                (o !== xe.d && o !== xe.j) ||
                !t.activeItem ||
                Object(xe.o)(e)
              )
                if (!a && this._multiple && o === xe.a && e.ctrlKey) {
                  e.preventDefault();
                  const t = this.options.some(
                    (e) => !e.disabled && !e.selected
                  );
                  this.options.forEach((e) => {
                    e.disabled || (t ? e.select() : e.deselect());
                  });
                } else {
                  const o = t.activeItemIndex;
                  t.onKeydown(e),
                    this._multiple &&
                      i &&
                      e.shiftKey &&
                      t.activeItem &&
                      t.activeItemIndex !== o &&
                      t.activeItem._selectViaInteraction();
                }
              else e.preventDefault(), t.activeItem._selectViaInteraction();
            }
            _onFocus() {
              this.disabled || ((this._focused = !0), this.stateChanges.next());
            }
            _onBlur() {
              (this._focused = !1),
                this.disabled ||
                  this.panelOpen ||
                  (this._onTouched(),
                  this._changeDetectorRef.markForCheck(),
                  this.stateChanges.next());
            }
            _onAttached() {
              this.overlayDir.positionChange
                .pipe(Object(y.a)(1))
                .subscribe(() => {
                  this._changeDetectorRef.detectChanges(),
                    this._positioningSettled();
                });
            }
            _getPanelTheme() {
              return this._parentFormField
                ? 'mat-' + this._parentFormField.color
                : '';
            }
            get empty() {
              return !this._selectionModel || this._selectionModel.isEmpty();
            }
            _initializeSelection() {
              Promise.resolve().then(() => {
                this._setSelectionByValue(
                  this.ngControl ? this.ngControl.value : this._value
                ),
                  this.stateChanges.next();
              });
            }
            _setSelectionByValue(e) {
              if (
                (this._selectionModel.selected.forEach((e) =>
                  e.setInactiveStyles()
                ),
                this._selectionModel.clear(),
                this.multiple && e)
              )
                Array.isArray(e),
                  e.forEach((e) => this._selectValue(e)),
                  this._sortValues();
              else {
                const t = this._selectValue(e);
                t
                  ? this._keyManager.updateActiveItem(t)
                  : this.panelOpen || this._keyManager.updateActiveItem(-1);
              }
              this._changeDetectorRef.markForCheck();
            }
            _selectValue(e) {
              const t = this.options.find((t) => {
                try {
                  return null != t.value && this._compareWith(t.value, e);
                } catch (o) {
                  return !1;
                }
              });
              return t && this._selectionModel.select(t), t;
            }
            _initKeyManager() {
              (this._keyManager = new fe.b(this.options)
                .withTypeAhead(this._typeaheadDebounceInterval)
                .withVerticalOrientation()
                .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
                .withHomeAndEnd()
                .withAllowedModifierKeys(['shiftKey'])),
                this._keyManager.tabOut
                  .pipe(Object(b.a)(this._destroy))
                  .subscribe(() => {
                    this.panelOpen &&
                      (!this.multiple &&
                        this._keyManager.activeItem &&
                        this._keyManager.activeItem._selectViaInteraction(),
                      this.focus(),
                      this.close());
                  }),
                this._keyManager.change
                  .pipe(Object(b.a)(this._destroy))
                  .subscribe(() => {
                    this._panelOpen && this.panel
                      ? this._scrollOptionIntoView(
                          this._keyManager.activeItemIndex || 0
                        )
                      : this._panelOpen ||
                        this.multiple ||
                        !this._keyManager.activeItem ||
                        this._keyManager.activeItem._selectViaInteraction();
                  });
            }
            _resetOptions() {
              const e = Object(g.a)(this.options.changes, this._destroy);
              this.optionSelectionChanges
                .pipe(Object(b.a)(e))
                .subscribe((e) => {
                  this._onSelect(e.source, e.isUserInput),
                    e.isUserInput &&
                      !this.multiple &&
                      this._panelOpen &&
                      (this.close(), this.focus());
                }),
                Object(g.a)(...this.options.map((e) => e._stateChanges))
                  .pipe(Object(b.a)(e))
                  .subscribe(() => {
                    this._changeDetectorRef.markForCheck(),
                      this.stateChanges.next();
                  });
            }
            _onSelect(e, t) {
              const o = this._selectionModel.isSelected(e);
              null != e.value || this._multiple
                ? (o !== e.selected &&
                    (e.selected
                      ? this._selectionModel.select(e)
                      : this._selectionModel.deselect(e)),
                  t && this._keyManager.setActiveItem(e),
                  this.multiple && (this._sortValues(), t && this.focus()))
                : (e.deselect(),
                  this._selectionModel.clear(),
                  null != this.value && this._propagateChanges(e.value)),
                o !== this._selectionModel.isSelected(e) &&
                  this._propagateChanges(),
                this.stateChanges.next();
            }
            _sortValues() {
              if (this.multiple) {
                const e = this.options.toArray();
                this._selectionModel.sort((t, o) =>
                  this.sortComparator
                    ? this.sortComparator(t, o, e)
                    : e.indexOf(t) - e.indexOf(o)
                ),
                  this.stateChanges.next();
              }
            }
            _propagateChanges(e) {
              let t = null;
              (t = this.multiple
                ? this.selected.map((e) => e.value)
                : this.selected
                ? this.selected.value
                : e),
                (this._value = t),
                this.valueChange.emit(t),
                this._onChange(t),
                this.selectionChange.emit(this._getChangeEvent(t)),
                this._changeDetectorRef.markForCheck();
            }
            _highlightCorrectOption() {
              this._keyManager &&
                (this.empty
                  ? this._keyManager.setFirstItemActive()
                  : this._keyManager.setActiveItem(
                      this._selectionModel.selected[0]
                    ));
            }
            _canOpen() {
              var e;
              return (
                !this._panelOpen &&
                !this.disabled &&
                (null === (e = this.options) || void 0 === e
                  ? void 0
                  : e.length) > 0
              );
            }
            focus(e) {
              this._elementRef.nativeElement.focus(e);
            }
            _getPanelAriaLabelledby() {
              if (this.ariaLabel) return null;
              const e = this._getLabelId();
              return this.ariaLabelledby ? e + ' ' + this.ariaLabelledby : e;
            }
            _getAriaActiveDescendant() {
              return this.panelOpen &&
                this._keyManager &&
                this._keyManager.activeItem
                ? this._keyManager.activeItem.id
                : null;
            }
            _getLabelId() {
              var e;
              return (
                (null === (e = this._parentFormField) || void 0 === e
                  ? void 0
                  : e.getLabelId()) || ''
              );
            }
            _getTriggerAriaLabelledby() {
              if (this.ariaLabel) return null;
              let e = this._getLabelId() + ' ' + this._valueId;
              return this.ariaLabelledby && (e += ' ' + this.ariaLabelledby), e;
            }
            _panelDoneAnimating(e) {
              this.openedChange.emit(e);
            }
            setDescribedByIds(e) {
              this._ariaDescribedby = e.join(' ');
            }
            onContainerClick() {
              this.focus(), this.open();
            }
            get shouldLabelFloat() {
              return this._panelOpen || !this.empty;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(n.e),
                i.Kb(i.h),
                i.Kb(i.z),
                i.Kb(ye.a),
                i.Kb(i.l),
                i.Kb(w.b, 8),
                i.Kb(ke.m, 8),
                i.Kb(ke.f, 8),
                i.Kb(at.a, 8),
                i.Kb(ke.j, 10),
                i.Vb('tabindex'),
                i.Kb(Yo),
                i.Kb(fe.h),
                i.Kb(Qo, 8)
              );
            }),
            (e.ɵdir = i.Fb({
              type: e,
              viewQuery: function (e, t) {
                if (
                  (1 & e && (i.Ec(Ao, !0), i.Ec(jo, !0), i.Ec(tt, !0)), 2 & e)
                ) {
                  let e;
                  i.nc((e = i.Yb())) && (t.trigger = e.first),
                    i.nc((e = i.Yb())) && (t.panel = e.first),
                    i.nc((e = i.Yb())) && (t.overlayDir = e.first);
                }
              },
              inputs: {
                ariaLabel: ['aria-label', 'ariaLabel'],
                id: 'id',
                placeholder: 'placeholder',
                required: 'required',
                multiple: 'multiple',
                disableOptionCentering: 'disableOptionCentering',
                compareWith: 'compareWith',
                value: 'value',
                typeaheadDebounceInterval: 'typeaheadDebounceInterval',
                panelClass: 'panelClass',
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                errorStateMatcher: 'errorStateMatcher',
                sortComparator: 'sortComparator'
              },
              outputs: {
                openedChange: 'openedChange',
                _openedStream: 'opened',
                _closedStream: 'closed',
                selectionChange: 'selectionChange',
                valueChange: 'valueChange'
              },
              features: [i.wb, i.xb]
            })),
            e
          );
        })(),
        Jo = (() => {
          class e extends $o {
            constructor() {
              super(...arguments),
                (this._scrollTop = 0),
                (this._triggerFontSize = 0),
                (this._transformOrigin = 'top'),
                (this._offsetY = 0),
                (this._positions = [
                  {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top'
                  },
                  {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'bottom'
                  }
                ]);
            }
            _calculateOverlayScroll(e, t, o) {
              const i = this._getItemHeight();
              return Math.min(Math.max(0, i * e - t + i / 2), o);
            }
            ngOnInit() {
              super.ngOnInit(),
                this._viewportRuler
                  .change()
                  .pipe(Object(b.a)(this._destroy))
                  .subscribe(() => {
                    this.panelOpen &&
                      ((this._triggerRect = this.trigger.nativeElement.getBoundingClientRect()),
                      this._changeDetectorRef.markForCheck());
                  });
            }
            open() {
              super._canOpen() &&
                (super.open(),
                (this._triggerRect = this.trigger.nativeElement.getBoundingClientRect()),
                (this._triggerFontSize = parseInt(
                  getComputedStyle(this.trigger.nativeElement).fontSize || '0'
                )),
                this._calculateOverlayPosition(),
                this._ngZone.onStable.pipe(Object(y.a)(1)).subscribe(() => {
                  this._triggerFontSize &&
                    this.overlayDir.overlayRef &&
                    this.overlayDir.overlayRef.overlayElement &&
                    (this.overlayDir.overlayRef.overlayElement.style.fontSize =
                      this._triggerFontSize + 'px');
                }));
            }
            _scrollOptionIntoView(e) {
              const t = Object(ye.p)(e, this.options, this.optionGroups),
                o = this._getItemHeight();
              this.panel.nativeElement.scrollTop = Object(ye.q)(
                (e + t) * o,
                o,
                this.panel.nativeElement.scrollTop,
                256
              );
            }
            _positioningSettled() {
              this._calculateOverlayOffsetX(),
                (this.panel.nativeElement.scrollTop = this._scrollTop);
            }
            _panelDoneAnimating(e) {
              this.panelOpen
                ? (this._scrollTop = 0)
                : ((this.overlayDir.offsetX = 0),
                  this._changeDetectorRef.markForCheck()),
                super._panelDoneAnimating(e);
            }
            _getChangeEvent(e) {
              return new Wo(this, e);
            }
            _calculateOverlayOffsetX() {
              const e = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect(),
                t = this._viewportRuler.getViewportSize(),
                o = this._isRtl(),
                i = this.multiple ? 56 : 32;
              let a;
              if (this.multiple) a = 40;
              else {
                let e = this._selectionModel.selected[0] || this.options.first;
                a = e && e.group ? 32 : 16;
              }
              o || (a *= -1);
              const n = 0 - (e.left + a - (o ? i : 0)),
                r = e.right + a - t.width + (o ? 0 : i);
              n > 0 ? (a += n + 8) : r > 0 && (a -= r + 8),
                (this.overlayDir.offsetX = Math.round(a)),
                this.overlayDir.overlayRef.updatePosition();
            }
            _calculateOverlayOffsetY(e, t, o) {
              const i = this._getItemHeight(),
                a = (i - this._triggerRect.height) / 2,
                n = Math.floor(256 / i);
              let r;
              return this.disableOptionCentering
                ? 0
                : ((r =
                    0 === this._scrollTop
                      ? e * i
                      : this._scrollTop === o
                      ? (e - (this._getItemCount() - n)) * i +
                        (i - ((this._getItemCount() * i - 256) % i))
                      : t - i / 2),
                  Math.round(-1 * r - a));
            }
            _checkOverlayWithinViewport(e) {
              const t = this._getItemHeight(),
                o = this._viewportRuler.getViewportSize(),
                i = this._triggerRect.top - 8,
                a = o.height - this._triggerRect.bottom - 8,
                n = Math.abs(this._offsetY),
                r =
                  Math.min(this._getItemCount() * t, 256) -
                  n -
                  this._triggerRect.height;
              r > a
                ? this._adjustPanelUp(r, a)
                : n > i
                ? this._adjustPanelDown(n, i, e)
                : (this._transformOrigin = this._getOriginBasedOnOption());
            }
            _adjustPanelUp(e, t) {
              const o = Math.round(e - t);
              (this._scrollTop -= o),
                (this._offsetY -= o),
                (this._transformOrigin = this._getOriginBasedOnOption()),
                this._scrollTop <= 0 &&
                  ((this._scrollTop = 0),
                  (this._offsetY = 0),
                  (this._transformOrigin = '50% bottom 0px'));
            }
            _adjustPanelDown(e, t, o) {
              const i = Math.round(e - t);
              if (
                ((this._scrollTop += i),
                (this._offsetY += i),
                (this._transformOrigin = this._getOriginBasedOnOption()),
                this._scrollTop >= o)
              )
                return (
                  (this._scrollTop = o),
                  (this._offsetY = 0),
                  void (this._transformOrigin = '50% top 0px')
                );
            }
            _calculateOverlayPosition() {
              const e = this._getItemHeight(),
                t = this._getItemCount(),
                o = Math.min(t * e, 256),
                i = t * e - o;
              let a;
              (a = this.empty
                ? 0
                : Math.max(
                    this.options
                      .toArray()
                      .indexOf(this._selectionModel.selected[0]),
                    0
                  )),
                (a += Object(ye.p)(a, this.options, this.optionGroups));
              const n = o / 2;
              (this._scrollTop = this._calculateOverlayScroll(a, n, i)),
                (this._offsetY = this._calculateOverlayOffsetY(a, n, i)),
                this._checkOverlayWithinViewport(i);
            }
            _getOriginBasedOnOption() {
              const e = this._getItemHeight(),
                t = (e - this._triggerRect.height) / 2;
              return `50% ${Math.abs(this._offsetY) - t + e / 2}px 0px`;
            }
            _getItemHeight() {
              return 3 * this._triggerFontSize;
            }
            _getItemCount() {
              return this.options.length + this.optionGroups.length;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return ei(t || e);
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['mat-select']],
              contentQueries: function (e, t, o) {
                if (
                  (1 & e &&
                    (i.Db(o, Zo, !0), i.Db(o, ye.h, !0), i.Db(o, ye.b, !0)),
                  2 & e)
                ) {
                  let e;
                  i.nc((e = i.Yb())) && (t.customTrigger = e.first),
                    i.nc((e = i.Yb())) && (t.options = e),
                    i.nc((e = i.Yb())) && (t.optionGroups = e);
                }
              },
              hostAttrs: [
                'role',
                'combobox',
                'aria-autocomplete',
                'none',
                'aria-haspopup',
                'true',
                1,
                'mat-select'
              ],
              hostVars: 20,
              hostBindings: function (e, t) {
                1 & e &&
                  i.Xb('keydown', function (e) {
                    return t._handleKeydown(e);
                  })('focus', function () {
                    return t._onFocus();
                  })('blur', function () {
                    return t._onBlur();
                  }),
                  2 & e &&
                    (i.Ab('id', t.id)('tabindex', t.tabIndex)(
                      'aria-controls',
                      t.panelOpen ? t.id + '-panel' : null
                    )('aria-expanded', t.panelOpen)(
                      'aria-label',
                      t.ariaLabel || null
                    )('aria-required', t.required.toString())(
                      'aria-disabled',
                      t.disabled.toString()
                    )('aria-invalid', t.errorState)(
                      'aria-describedby',
                      t._ariaDescribedby || null
                    )('aria-activedescendant', t._getAriaActiveDescendant()),
                    i.Cb('mat-select-disabled', t.disabled)(
                      'mat-select-invalid',
                      t.errorState
                    )('mat-select-required', t.required)(
                      'mat-select-empty',
                      t.empty
                    )('mat-select-multiple', t.multiple));
              },
              inputs: {
                disabled: 'disabled',
                disableRipple: 'disableRipple',
                tabIndex: 'tabIndex'
              },
              exportAs: ['matSelect'],
              features: [
                i.yb([
                  { provide: at.c, useExisting: e },
                  { provide: ye.c, useExisting: e }
                ]),
                i.wb
              ],
              ngContentSelectors: qo,
              decls: 9,
              vars: 12,
              consts: [
                ['cdk-overlay-origin', '', 1, 'mat-select-trigger', 3, 'click'],
                ['origin', 'cdkOverlayOrigin', 'trigger', ''],
                [1, 'mat-select-value', 3, 'ngSwitch'],
                ['class', 'mat-select-placeholder', 4, 'ngSwitchCase'],
                [
                  'class',
                  'mat-select-value-text',
                  3,
                  'ngSwitch',
                  4,
                  'ngSwitchCase'
                ],
                [1, 'mat-select-arrow-wrapper'],
                [1, 'mat-select-arrow'],
                [
                  'cdk-connected-overlay',
                  '',
                  'cdkConnectedOverlayLockPosition',
                  '',
                  'cdkConnectedOverlayHasBackdrop',
                  '',
                  'cdkConnectedOverlayBackdropClass',
                  'cdk-overlay-transparent-backdrop',
                  3,
                  'cdkConnectedOverlayPanelClass',
                  'cdkConnectedOverlayScrollStrategy',
                  'cdkConnectedOverlayOrigin',
                  'cdkConnectedOverlayOpen',
                  'cdkConnectedOverlayPositions',
                  'cdkConnectedOverlayMinWidth',
                  'cdkConnectedOverlayOffsetY',
                  'backdropClick',
                  'attach',
                  'detach'
                ],
                [1, 'mat-select-placeholder'],
                [1, 'mat-select-value-text', 3, 'ngSwitch'],
                [4, 'ngSwitchDefault'],
                [4, 'ngSwitchCase'],
                [1, 'mat-select-panel-wrap'],
                ['role', 'listbox', 'tabindex', '-1', 3, 'ngClass', 'keydown'],
                ['panel', '']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (i.hc(Ko),
                    i.Qb(0, 'div', 0, 1),
                    i.Xb('click', function () {
                      return t.toggle();
                    }),
                    i.Qb(3, 'div', 2),
                    i.zc(4, To, 2, 1, 'span', 3),
                    i.zc(5, Bo, 3, 2, 'span', 4),
                    i.Pb(),
                    i.Qb(6, 'div', 5),
                    i.Lb(7, 'div', 6),
                    i.Pb(),
                    i.Pb(),
                    i.zc(8, Vo, 4, 14, 'ng-template', 7),
                    i.Xb('backdropClick', function () {
                      return t.close();
                    })('attach', function () {
                      return t._onAttached();
                    })('detach', function () {
                      return t.close();
                    })),
                  2 & e)
                ) {
                  const e = i.oc(1);
                  i.Ab('aria-owns', t.panelOpen ? t.id + '-panel' : null),
                    i.zb(3),
                    i.ic('ngSwitch', t.empty),
                    i.Ab('id', t._valueId),
                    i.zb(1),
                    i.ic('ngSwitchCase', !0),
                    i.zb(1),
                    i.ic('ngSwitchCase', !1),
                    i.zb(3),
                    i.ic('cdkConnectedOverlayPanelClass', t._overlayPanelClass)(
                      'cdkConnectedOverlayScrollStrategy',
                      t._scrollStrategy
                    )('cdkConnectedOverlayOrigin', e)(
                      'cdkConnectedOverlayOpen',
                      t.panelOpen
                    )('cdkConnectedOverlayPositions', t._positions)(
                      'cdkConnectedOverlayMinWidth',
                      null == t._triggerRect ? null : t._triggerRect.width
                    )('cdkConnectedOverlayOffsetY', t._offsetY);
                }
              },
              directives: [et, a.n, a.o, tt, a.p, a.k],
              styles: [
                '.mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}\n'
              ],
              encapsulation: 2,
              data: { animation: [No.transformPanelWrap, No.transformPanel] },
              changeDetection: 0
            })),
            e
          );
        })();
      const ei = i.Sb(Jo);
      let ti = (() => {
        class e {}
        return (
          (e.ɵmod = i.Ib({ type: e })),
          (e.ɵinj = i.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [Go],
            imports: [[a.c, it, ye.i, ye.e], n.b, at.d, ye.i, ye.e]
          })),
          e
        );
      })();
      var oi = o('GU7r'),
        ii = o('R1ws');
      const ai = ['thumbContainer'],
        ni = ['toggleBar'],
        ri = ['input'],
        si = function () {
          return { enterDuration: 150 };
        },
        li = ['*'],
        ci = new i.q('mat-slide-toggle-default-options', {
          providedIn: 'root',
          factory: () => ({ disableToggleValue: !1 })
        });
      let di = 0;
      const pi = {
        provide: ke.i,
        useExisting: Object(i.T)(() => gi),
        multi: !0
      };
      class hi {
        constructor(e, t) {
          (this.source = e), (this.checked = t);
        }
      }
      class ui {
        constructor(e) {
          this._elementRef = e;
        }
      }
      const mi = Object(ye.v)(
        Object(ye.r)(Object(ye.s)(Object(ye.t)(ui)), 'accent')
      );
      let gi = (() => {
          class e extends mi {
            constructor(e, t, o, a, n, r) {
              super(e),
                (this._focusMonitor = t),
                (this._changeDetectorRef = o),
                (this.defaults = n),
                (this._animationMode = r),
                (this._onChange = (e) => {}),
                (this._onTouched = () => {}),
                (this._uniqueId = 'mat-slide-toggle-' + ++di),
                (this._required = !1),
                (this._checked = !1),
                (this.name = null),
                (this.id = this._uniqueId),
                (this.labelPosition = 'after'),
                (this.ariaLabel = null),
                (this.ariaLabelledby = null),
                (this.change = new i.n()),
                (this.toggleChange = new i.n()),
                (this.tabIndex = parseInt(a) || 0);
            }
            get required() {
              return this._required;
            }
            set required(e) {
              this._required = Object(s.b)(e);
            }
            get checked() {
              return this._checked;
            }
            set checked(e) {
              (this._checked = Object(s.b)(e)),
                this._changeDetectorRef.markForCheck();
            }
            get inputId() {
              return (this.id || this._uniqueId) + '-input';
            }
            ngAfterContentInit() {
              this._focusMonitor
                .monitor(this._elementRef, !0)
                .subscribe((e) => {
                  'keyboard' === e || 'program' === e
                    ? this._inputElement.nativeElement.focus()
                    : e || Promise.resolve().then(() => this._onTouched());
                });
            }
            ngOnDestroy() {
              this._focusMonitor.stopMonitoring(this._elementRef);
            }
            _onChangeEvent(e) {
              e.stopPropagation(),
                this.toggleChange.emit(),
                this.defaults.disableToggleValue
                  ? (this._inputElement.nativeElement.checked = this.checked)
                  : ((this.checked = this._inputElement.nativeElement.checked),
                    this._emitChangeEvent());
            }
            _onInputClick(e) {
              e.stopPropagation();
            }
            writeValue(e) {
              this.checked = !!e;
            }
            registerOnChange(e) {
              this._onChange = e;
            }
            registerOnTouched(e) {
              this._onTouched = e;
            }
            setDisabledState(e) {
              (this.disabled = e), this._changeDetectorRef.markForCheck();
            }
            focus(e) {
              this._focusMonitor.focusVia(this._inputElement, 'keyboard', e);
            }
            toggle() {
              (this.checked = !this.checked), this._onChange(this.checked);
            }
            _emitChangeEvent() {
              this._onChange(this.checked),
                this.change.emit(new hi(this, this.checked));
            }
            _onLabelTextChange() {
              this._changeDetectorRef.detectChanges();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(i.l),
                i.Kb(fe.e),
                i.Kb(i.h),
                i.Vb('tabindex'),
                i.Kb(ci),
                i.Kb(ii.a, 8)
              );
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['mat-slide-toggle']],
              viewQuery: function (e, t) {
                if (
                  (1 & e && (i.Ec(ai, !0), i.Ec(ni, !0), i.Ec(ri, !0)), 2 & e)
                ) {
                  let e;
                  i.nc((e = i.Yb())) && (t._thumbEl = e.first),
                    i.nc((e = i.Yb())) && (t._thumbBarEl = e.first),
                    i.nc((e = i.Yb())) && (t._inputElement = e.first);
                }
              },
              hostAttrs: [1, 'mat-slide-toggle'],
              hostVars: 12,
              hostBindings: function (e, t) {
                2 & e &&
                  (i.Tb('id', t.id),
                  i.Ab('tabindex', t.disabled ? null : -1)('aria-label', null)(
                    'aria-labelledby',
                    null
                  ),
                  i.Cb('mat-checked', t.checked)('mat-disabled', t.disabled)(
                    'mat-slide-toggle-label-before',
                    'before' == t.labelPosition
                  )(
                    '_mat-animation-noopable',
                    'NoopAnimations' === t._animationMode
                  ));
              },
              inputs: {
                disabled: 'disabled',
                disableRipple: 'disableRipple',
                color: 'color',
                tabIndex: 'tabIndex',
                name: 'name',
                id: 'id',
                labelPosition: 'labelPosition',
                ariaLabel: ['aria-label', 'ariaLabel'],
                ariaLabelledby: ['aria-labelledby', 'ariaLabelledby'],
                required: 'required',
                checked: 'checked'
              },
              outputs: { change: 'change', toggleChange: 'toggleChange' },
              exportAs: ['matSlideToggle'],
              features: [i.yb([pi]), i.wb],
              ngContentSelectors: li,
              decls: 16,
              vars: 18,
              consts: [
                [1, 'mat-slide-toggle-label'],
                ['label', ''],
                [1, 'mat-slide-toggle-bar'],
                ['toggleBar', ''],
                [
                  'type',
                  'checkbox',
                  'role',
                  'switch',
                  1,
                  'mat-slide-toggle-input',
                  'cdk-visually-hidden',
                  3,
                  'id',
                  'required',
                  'tabIndex',
                  'checked',
                  'disabled',
                  'change',
                  'click'
                ],
                ['input', ''],
                [1, 'mat-slide-toggle-thumb-container'],
                ['thumbContainer', ''],
                [1, 'mat-slide-toggle-thumb'],
                [
                  'mat-ripple',
                  '',
                  1,
                  'mat-slide-toggle-ripple',
                  'mat-focus-indicator',
                  3,
                  'matRippleTrigger',
                  'matRippleDisabled',
                  'matRippleCentered',
                  'matRippleRadius',
                  'matRippleAnimation'
                ],
                [1, 'mat-ripple-element', 'mat-slide-toggle-persistent-ripple'],
                [1, 'mat-slide-toggle-content', 3, 'cdkObserveContent'],
                ['labelContent', ''],
                [2, 'display', 'none']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (i.hc(),
                    i.Qb(0, 'label', 0, 1),
                    i.Qb(2, 'div', 2, 3),
                    i.Qb(4, 'input', 4, 5),
                    i.Xb('change', function (e) {
                      return t._onChangeEvent(e);
                    })('click', function (e) {
                      return t._onInputClick(e);
                    }),
                    i.Pb(),
                    i.Qb(6, 'div', 6, 7),
                    i.Lb(8, 'div', 8),
                    i.Qb(9, 'div', 9),
                    i.Lb(10, 'div', 10),
                    i.Pb(),
                    i.Pb(),
                    i.Pb(),
                    i.Qb(11, 'span', 11, 12),
                    i.Xb('cdkObserveContent', function () {
                      return t._onLabelTextChange();
                    }),
                    i.Qb(13, 'span', 13),
                    i.Ac(14, '\xa0'),
                    i.Pb(),
                    i.gc(15),
                    i.Pb(),
                    i.Pb()),
                  2 & e)
                ) {
                  const e = i.oc(1),
                    o = i.oc(12);
                  i.Ab('for', t.inputId),
                    i.zb(2),
                    i.Cb(
                      'mat-slide-toggle-bar-no-side-margin',
                      !o.textContent || !o.textContent.trim()
                    ),
                    i.zb(2),
                    i.ic('id', t.inputId)('required', t.required)(
                      'tabIndex',
                      t.tabIndex
                    )('checked', t.checked)('disabled', t.disabled),
                    i.Ab('name', t.name)('aria-checked', t.checked.toString())(
                      'aria-label',
                      t.ariaLabel
                    )('aria-labelledby', t.ariaLabelledby),
                    i.zb(5),
                    i.ic('matRippleTrigger', e)(
                      'matRippleDisabled',
                      t.disableRipple || t.disabled
                    )('matRippleCentered', !0)('matRippleRadius', 20)(
                      'matRippleAnimation',
                      i.kc(17, si)
                    );
                }
              },
              directives: [ye.m, oi.a],
              styles: [
                '.mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n'
              ],
              encapsulation: 2,
              changeDetection: 0
            })),
            e
          );
        })(),
        bi = (() => {
          class e {}
          return (
            (e.ɵmod = i.Ib({ type: e })),
            (e.ɵinj = i.Hb({
              factory: function (t) {
                return new (t || e)();
              }
            })),
            e
          );
        })(),
        ki = (() => {
          class e {}
          return (
            (e.ɵmod = i.Ib({ type: e })),
            (e.ɵinj = i.Hb({
              factory: function (t) {
                return new (t || e)();
              },
              imports: [[bi, ye.n, ye.e, oi.c], bi, ye.e]
            })),
            e
          );
        })();
      var fi = o('tyNb'),
        yi = o('9Xeq');
      let _i = (() => {
        class e {}
        return (
          (e.ɵmod = i.Ib({ type: e })),
          (e.ɵinj = i.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            imports: [[a.c]]
          })),
          e
        );
      })();
      var vi = o('mrSG'),
        wi = o('fJC1'),
        Ri = o('req1'),
        Ci = (function (e) {
          return (
            (e[(e.Red = 0)] = 'Red'),
            (e[(e.Blue = 1)] = 'Blue'),
            (e[(e.Yellow = 2)] = 'Yellow'),
            (e[(e.Gold = 3)] = 'Gold'),
            (e[(e.Silver = 4)] = 'Silver'),
            (e[(e.Crystal = 5)] = 'Crystal'),
            (e[(e.Ruby = 6)] = 'Ruby'),
            (e[(e.Sapphire = 7)] = 'Sapphire'),
            (e[(e.Emerald = 8)] = 'Emerald'),
            (e[(e.FireRed = 9)] = 'FireRed'),
            (e[(e.LeafGreen = 10)] = 'LeafGreen'),
            (e[(e.Diamond = 11)] = 'Diamond'),
            (e[(e.Pearl = 12)] = 'Pearl'),
            (e[(e.Platinum = 13)] = 'Platinum'),
            (e[(e.HeartGold = 14)] = 'HeartGold'),
            (e[(e.SoulSilver = 15)] = 'SoulSilver'),
            (e[(e.Black = 16)] = 'Black'),
            (e[(e.White = 17)] = 'White'),
            (e[(e.Black2 = 18)] = 'Black2'),
            (e[(e.White2 = 19)] = 'White2'),
            (e[(e.X = 20)] = 'X'),
            (e[(e.Y = 21)] = 'Y'),
            (e[(e.OmegaRuby = 22)] = 'OmegaRuby'),
            (e[(e.AlphaSapphire = 23)] = 'AlphaSapphire'),
            (e[(e.Sun = 24)] = 'Sun'),
            (e[(e.Moon = 25)] = 'Moon'),
            (e[(e.UltraSun = 26)] = 'UltraSun'),
            (e[(e.UltraMoon = 27)] = 'UltraMoon'),
            (e[(e.Sword = 28)] = 'Sword'),
            (e[(e.Shield = 29)] = 'Shield'),
            e
          );
        })({});
      function xi(e) {
        return (
          'string' != typeof e && (e = Ci[e]),
          e
            .split(/(Ultra|Alpha|Omega|\d)/)
            .join(' ')
            .trim()
        );
      }
      const Oi = Object(wi.b)(Ci).map((e) => ({
        game: Ci[e],
        displayName: xi(e)
      }));
      var Si = (function (e) {
          return (
            (e[(e.Party = 0)] = 'Party'),
            (e[(e.Boxed = 1)] = 'Boxed'),
            (e[(e.Heaven = 2)] = 'Heaven'),
            (e[(e.Missed = 3)] = 'Missed'),
            e
          );
        })({}),
        Pi = (function (e) {
          return (
            (e[(e.Gift = 0)] = 'Gift'),
            (e[(e.Static = 1)] = 'Static'),
            (e[(e.Encounter = 2)] = 'Encounter'),
            e
          );
        })({}),
        zi = (function (e) {
          return (
            (e[(e.Started = 0)] = 'Started'),
            (e[(e.Failed = 1)] = 'Failed'),
            (e[(e.Success = 2)] = 'Success'),
            e
          );
        })({}),
        Di = o('6Ke5');
      let Ei = (() => {
        class e {
          constructor(e) {
            (this.databaseService = e), (this.update = new l.a());
          }
          get update$() {
            return this.update.asObservable();
          }
          hasNuzlockeSaved() {
            return Object(vi.a)(this, void 0, void 0, function* () {
              return (yield this.databaseService.nuzlockes.count()) > 0;
            });
          }
          getSaves() {
            return Object(vi.a)(this, void 0, void 0, function* () {
              return this.databaseService.nuzlockes.toArray();
            });
          }
          createNuzlocke(e) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              const t = this.startGame(e);
              if (
                (yield this.databaseService.nuzlockes.add(t).then((e) => {
                  t.id = e;
                }),
                this.dataForNextRun)
              ) {
                this.currentRun = t;
                for (const e of this.dataForNextRun.pokemon) {
                  const t = `Import from ${
                    Ci[this.dataForNextRun.previousRun]
                  } - ${e.routeName}`;
                  yield this.addRouteToCurrentGame({ route: t, current: !0 }),
                    (e.routeName = t),
                    yield this.addEncounter(e, !0);
                }
                this.dataForNextRun = void 0;
              }
              return t;
            });
          }
          deleteNuzlocke(e) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              e.id && (yield this.databaseService.nuzlockes.delete(e.id));
            });
          }
          updateNuzlocke(e, t) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              e.id &&
                (yield this.databaseService.nuzlockes.update(e.id, {
                  runName: t.name,
                  random: t.random
                }));
            });
          }
          completeNuzlocke(e, t = !1, o = []) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              e.id &&
                (yield this.databaseService.nuzlockes.update(e.id, {
                  status: t ? zi.Success : zi.Failed
                }),
                (this.dataForNextRun = { pokemon: o, previousRun: e.game }));
            });
          }
          startGame(e) {
            return {
              runName: e.runName,
              game: e.game,
              random: e.random,
              badgesEarned: [],
              extraRoutes: [],
              ignoreRoutes: [],
              pokemon: [],
              startDate: new Date(),
              status: zi.Started
            };
          }
          generateTestSaves() {
            return Object(vi.a)(this, void 0, void 0, function* () {
              for (const e of Object(wi.b)(Ci))
                yield this.createNuzlocke({
                  runName: xi(e),
                  game: Ci[e],
                  random: !1
                });
            });
          }
          convertDialogToRoute(e) {
            var t;
            return Object(vi.a)(this, void 0, void 0, function* () {
              if (this.currentRun)
                return {
                  type: Pi.Encounter,
                  order: yield this.databaseService.countRoutesInGame(
                    null === (t = this.currentRun) || void 0 === t
                      ? void 0
                      : t.game
                  ),
                  pokemon: [],
                  game: this.currentRun.game,
                  location: e.route
                };
              throw new Error();
            });
          }
          addRouteToCurrentGame(e) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              const t = yield this.convertDialogToRoute(e);
              return (
                this.currentRun &&
                  (this.currentRun.extraRoutes.push(t),
                  yield this.databaseService.nuzlockes.put(this.currentRun)),
                t
              );
            });
          }
          removeRouteFromRun(e) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              this.currentRun &&
                (this.currentRun.ignoreRoutes.push(e),
                yield this.databaseService.nuzlockes.put(this.currentRun));
            });
          }
          addEncounter(e, t = !1) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              this.currentRun &&
                (t ||
                  (this.currentRun.pokemon.filter((e) => e.status === Si.Party)
                    .length < 6 &&
                    e.status !== Si.Missed &&
                    (e.status = Si.Party)),
                (this.currentRun.pokemon = [
                  ...this.currentRun.pokemon.filter(
                    (t) => t.routeName !== e.routeName
                  ),
                  e
                ]),
                yield this.databaseService.nuzlockes.put(this.currentRun));
            });
          }
          updateEncounter(e, t) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              if (this.currentRun) {
                const o = this.currentRun.pokemon.find(
                  (t) =>
                    t.name === e.name &&
                    t.nickname === e.nickname &&
                    t.routeName === e.routeName
                );
                if ((console.log(e, o, t), o)) {
                  let i = !1;
                  void 0 !== t.status &&
                    t.status !== (null == o ? void 0 : o.status) &&
                    ((i = !0), (o.status = e.status)),
                    t.name &&
                      t.name !== (null == o ? void 0 : o.name) &&
                      ((i = !0), (o.name = t.name)),
                    (!t.nickname && '' !== t.nickname) ||
                      t.nickname === (null == o ? void 0 : o.nickname) ||
                      ((i = !0), (o.nickname = t.nickname)),
                    i &&
                      (yield this.databaseService.nuzlockes.put(
                        this.currentRun
                      ));
                }
              }
            });
          }
          earnBadge(e) {
            return Object(vi.a)(this, void 0, void 0, function* () {
              this.currentRun &&
                (this.currentRun.badgesEarned.includes(e)
                  ? (this.currentRun.badgesEarned = this.currentRun.badgesEarned.filter(
                      (t) => e !== t
                    ))
                  : this.currentRun.badgesEarned.push(e),
                yield this.databaseService.nuzlockes.put(this.currentRun),
                this.update.next(this.currentRun));
            });
          }
          get gameNames() {
            return Oi;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(Di.a));
          }),
          (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      var Ii = o('WPX1');
      function Mi(e, t) {
        if ((1 & e && (i.Qb(0, 'mat-option', 9), i.Ac(1), i.Pb()), 2 & e)) {
          const e = t.$implicit;
          i.ic('value', e.game), i.zb(1), i.Cc(' ', e.displayName, ' ');
        }
      }
      let Ai = (() => {
        class e {
          constructor(e, t) {
            (this.nuzlockeService = e),
              (this.routerService = t),
              (this.games = []),
              (this.games = e.gameNames),
              (this.formGroup = new ke.e({
                runName: new ke.c('', ke.o.required),
                game: new ke.c(this.games[0].game, ke.o.required),
                random: new ke.c(!1, ke.o.required)
              }));
          }
          submit() {
            return Object(vi.a)(this, void 0, void 0, function* () {
              this.formGroup.invalid ||
                (yield this.nuzlockeService
                  .createNuzlocke({
                    runName: this.runName,
                    game: this.game,
                    random: this.random
                  })
                  .then((e) => {
                    this.routerService.changeTab('routes', e.id);
                  }));
            });
          }
          get runName() {
            return this.formGroup.controls.runName.value;
          }
          get game() {
            return this.formGroup.controls.game.value;
          }
          get random() {
            return this.formGroup.controls.random.value;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Kb(Ei), i.Kb(Ii.a));
          }),
          (e.ɵcmp = i.Eb({
            type: e,
            selectors: [['app-create']],
            decls: 18,
            vars: 2,
            consts: [
              [1, 'container', 'text-center'],
              [1, 'header'],
              [3, 'formGroup'],
              [
                'autocomplete',
                'off',
                'type',
                'text',
                'placeholder',
                'Name',
                'matInput',
                '',
                'formControlName',
                'runName'
              ],
              ['formControlName', 'game'],
              [3, 'value', 4, 'ngFor', 'ngForOf'],
              [1, 'my-3'],
              ['formControlName', 'random'],
              ['mat-raised-button', '', 3, 'click'],
              [3, 'value']
            ],
            template: function (e, t) {
              1 & e &&
                (i.Qb(0, 'div', 0),
                i.Qb(1, 'div', 1),
                i.Ac(2, 'Create your Nuzlocke'),
                i.Pb(),
                i.Qb(3, 'form', 2),
                i.Qb(4, 'div'),
                i.Qb(5, 'mat-form-field'),
                i.Lb(6, 'input', 3),
                i.Pb(),
                i.Pb(),
                i.Qb(7, 'div'),
                i.Qb(8, 'mat-form-field'),
                i.Qb(9, 'mat-label'),
                i.Ac(10, 'Game'),
                i.Pb(),
                i.Qb(11, 'mat-select', 4),
                i.zc(12, Mi, 2, 2, 'mat-option', 5),
                i.Pb(),
                i.Pb(),
                i.Pb(),
                i.Qb(13, 'div', 6),
                i.Qb(14, 'mat-slide-toggle', 7),
                i.Ac(15, 'Randomized Run?'),
                i.Pb(),
                i.Pb(),
                i.Qb(16, 'button', 8),
                i.Xb('click', function () {
                  return t.submit();
                }),
                i.Ac(17, ' Submit! '),
                i.Pb(),
                i.Pb(),
                i.Pb()),
                2 & e &&
                  (i.zb(3),
                  i.ic('formGroup', t.formGroup),
                  i.zb(9),
                  i.ic('ngForOf', t.games));
            },
            directives: [
              ke.p,
              ke.l,
              ke.f,
              at.b,
              Xt.a,
              ke.b,
              ke.k,
              ke.d,
              at.e,
              Jo,
              a.l,
              gi,
              xt.a,
              ye.h
            ],
            styles: [
              '.container[_ngcontent-%COMP%]{height:75%;margin-top:3vh}@media (max-width:700px){.container[_ngcontent-%COMP%]{margin-top:25%}}.header[_ngcontent-%COMP%]{font-size:x-large}@media (max-width:700px){.header[_ngcontent-%COMP%]{margin-bottom:25%}}mat-form-field[_ngcontent-%COMP%]{width:80%}'
            ]
          })),
          e
        );
      })();
      var ji = (function (e) {
        return (
          (e[(e.Started = 0)] = 'Started'),
          (e[(e.Failed = 1)] = 'Failed'),
          (e[(e.Success = 2)] = 'Success'),
          e
        );
      })({});
      function Ti(e, t) {
        1 & e &&
          (i.Qb(0, 'div'),
          i.Qb(1, 'h3'),
          i.Ac(2, 'Nuzlocke Complete! Congratulations!'),
          i.Pb(),
          i.Ac(
            3,
            ' Would you like to breed your party and continue into another run? '
          ),
          i.Pb());
      }
      function Li(e, t) {
        1 & e &&
          (i.Qb(0, 'div'),
          i.Qb(1, 'h3'),
          i.Ac(2, 'Nuzlocke Failed!'),
          i.Pb(),
          i.Ac(3, ' Would you like to move this run to a failed state? '),
          i.Pb());
      }
      function Fi(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'button', 8),
            i.Xb('click', function () {
              return i.qc(e), i.bc().onlyFinish();
            }),
            i.Ac(1, ' Only Finish '),
            i.Pb();
        }
      }
      let Bi = (() => {
        class e {
          constructor(e, t) {
            (this.dialogRef = e),
              console.log(t),
              (this.finished = t.finished),
              (this.name = t.name),
              (this.finishedBefore = t.alreadyFinished);
          }
          onClose(e) {
            if ('ok' === e) return this.dialogRef.close(e);
            this.dialogRef.close();
          }
          onlyFinish() {
            this.dialogRef.close('finish-only');
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Kb(At), i.Kb(Tt));
          }),
          (e.ɵcmp = i.Eb({
            type: e,
            selectors: [['app-complete-dialog']],
            decls: 12,
            vars: 4,
            consts: [
              [1, 'text-center'],
              ['mat-dialog-title', ''],
              ['mat-dialog-content', ''],
              [4, 'ngIf'],
              ['mat-dialog-actions', '', 1, 'center-buttons'],
              ['mat-raised-button', '', 'color', 'warn', 3, 'click'],
              [
                'mat-raised-button',
                '',
                'color',
                'primary',
                3,
                'click',
                4,
                'ngIf'
              ],
              ['mat-raised-button', '', 'color', 'accent', 3, 'click'],
              ['mat-raised-button', '', 'color', 'primary', 3, 'click']
            ],
            template: function (e, t) {
              1 & e &&
                (i.Qb(0, 'div', 0),
                i.Qb(1, 'h1', 1),
                i.Ac(2),
                i.Pb(),
                i.Qb(3, 'div', 2),
                i.zc(4, Ti, 4, 0, 'div', 3),
                i.zc(5, Li, 4, 0, 'div', 3),
                i.Pb(),
                i.Qb(6, 'div', 4),
                i.Qb(7, 'button', 5),
                i.Xb('click', function () {
                  return t.onClose('cancel');
                }),
                i.Ac(8, ' No '),
                i.Pb(),
                i.zc(9, Fi, 2, 0, 'button', 6),
                i.Qb(10, 'button', 7),
                i.Xb('click', function () {
                  return t.onClose('ok');
                }),
                i.Ac(11, ' Yes '),
                i.Pb(),
                i.Pb(),
                i.Pb()),
                2 & e &&
                  (i.zb(2),
                  i.Cc('Complete Run - ', t.name, ''),
                  i.zb(2),
                  i.ic('ngIf', t.finished),
                  i.zb(1),
                  i.ic('ngIf', !t.finished),
                  i.zb(4),
                  i.ic('ngIf', t.finished && !t.finishedBefore));
            },
            directives: [Nt, Ht, a.m, Yt, xt.a],
            styles: ['']
          })),
          e
        );
      })();
      var Vi = o('zsLg');
      let Ki = (() => {
        class e {
          constructor(e) {
            this.nuzlockeService = e;
          }
          getBadges(e) {
            this.nuzlockeService.currentRun = e;
            const t = Ri.a[
              (function (e) {
                switch (e) {
                  case Ci.Red:
                  case Ci.Blue:
                  case Ci.Yellow:
                  case Ci.FireRed:
                  case Ci.LeafGreen:
                    return Ri.a.Kanto;
                  case Ci.Crystal:
                  case Ci.Gold:
                  case Ci.Silver:
                  case Ci.HeartGold:
                  case Ci.SoulSilver:
                    return Ri.a.Johto;
                  case Ci.Ruby:
                  case Ci.Sapphire:
                  case Ci.OmegaRuby:
                  case Ci.AlphaSapphire:
                  case Ci.Emerald:
                    return Ri.a.Hoenn;
                  case Ci.Diamond:
                  case Ci.Pearl:
                  case Ci.Platinum:
                    return Ri.a.Sinnoh;
                  case Ci.Black:
                  case Ci.White:
                    return Ri.a.Unova;
                  case Ci.Black2:
                  case Ci.White2:
                    return Ri.a.UpdatedUnova;
                  case Ci.X:
                  case Ci.Y:
                    return Ri.a.Kalos;
                  case Ci.Sun:
                  case Ci.Moon:
                  case Ci.UltraSun:
                  case Ci.UltraMoon:
                    return Ri.a.Alola;
                  case Ci.Sword:
                  case Ci.Shield:
                    return Ri.a.Galar;
                }
              })(e.game)
            ].toLowerCase();
            return this.getUpdatedBadges(
              e,
              [...Array('johto' === t ? 16 : 8).keys()].map((o) => {
                var i;
                return {
                  url: `assets/badges/${this.getUrl(o, t)}.png`,
                  earned: !!(null === (i = e.badgesEarned) || void 0 === i
                    ? void 0
                    : i.includes(o))
                };
              })
            );
          }
          getUpdatedBadges(e, t) {
            switch (e.game) {
              case Ci.Platinum:
                [t[2], t[3], t[4]] = [t[4], t[2], t[3]];
                break;
              case Ci.Sun:
              case Ci.Moon:
                t.pop();
                break;
              case Ci.Sword:
              case Ci.Shield:
                this.updateURL(3, t, e.game), this.updateURL(5, t, e.game);
            }
            return t;
          }
          updateURL(e, t, o) {
            t[e].url = t[e].url.replace(
              '.png',
              this.getImageCodeFromGame(o) + '.png'
            );
          }
          getImageCodeFromGame(e) {
            return e === Ci.Sword ? 'a' : e === Ci.Shield ? 'b' : '';
          }
          getUrl(e, t) {
            return e >= 8 ? 'kanto/' + (e - 8) : `${t}/${e}`;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(Ei));
          }),
          (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      var qi = o('HCsY'),
        Ni = o('xBi6'),
        Hi = o('HN8I'),
        Yi = o('ioxi');
      let Qi = (() => {
        class e {
          constructor(e) {
            this.pokemonImageService = e;
          }
          validate(e, t) {
            return t
              .map((e) => e.toLowerCase())
              .includes(
                this.pokemonImageService
                  .reverseImageReplace(e.value)
                  .toLowerCase()
              )
              ? null
              : { invalidPokemon: !0 };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Ub(Vi.a));
          }),
          (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
          e
        );
      })();
      var Gi = o('nRuA'),
        Wi = o('vZ4y');
      const Xi = ['pokemon'];
      function Ui(e, t) {
        if ((1 & e && (i.Lb(0, 'img', 8), i.cc(1, 'image')), 2 & e)) {
          const e = i.bc();
          i.ic('src', i.dc(1, 2, e.imageValue), i.rc)('alt', e.imageValue);
        }
      }
      function Zi(e, t) {
        1 & e && (i.Qb(0, 'mat-form-field'), i.Lb(1, 'input', 9, 10), i.Pb());
      }
      function $i(e, t) {
        if (
          (1 & e &&
            (i.Qb(0, 'mat-option', 11),
            i.Ac(1),
            i.cc(2, 'hideForm'),
            i.Lb(3, 'img', 12),
            i.cc(4, 'image'),
            i.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          i.ic('value', e),
            i.zb(1),
            i.Cc(' ', i.dc(2, 4, e), ' '),
            i.zb(2),
            i.ic('src', i.dc(4, 6, e), i.rc)('alt', e);
        }
      }
      let Ji = (() => {
          class e {
            constructor(e, t, o, i, a, n) {
              (this.pokemonService = e),
                (this.nameService = t),
                (this.nuzlockeService = o),
                (this.pokemonImageService = i),
                (this.titleCaseService = a),
                (this.pickerValidationService = n),
                (this.allNames = []),
                (this.previouslyFocusedElement = null),
                (this.formGroup = new ke.e({
                  pokemon: new ke.c('', [
                    ke.o.required,
                    (e) =>
                      this.pickerValidationService.validate(e, this.allNames)
                  ]),
                  nickname: new ke.c('')
                }));
            }
            ngOnInit() {
              return Object(vi.a)(this, void 0, void 0, function* () {
                (this.allNames = yield this.pokemonService.getPokemonNames()),
                  this.nickname &&
                    this.formGroup.controls.nickname.setValue(this.nickname),
                  yield this.setAutoCompleteOptions(),
                  (this.filteredOptions = this.pokemonControl.valueChanges.pipe(
                    Object(k.a)(this.pokemonControl.value),
                    Object(f.a)((e) => this.filterOptions(e))
                  ));
              });
            }
            setAutoCompleteOptions() {
              var e, t;
              return Object(vi.a)(this, void 0, void 0, function* () {
                if (
                  this.limitOptionsByEvolution &&
                  (null === (e = this.pokemon) || void 0 === e
                    ? void 0
                    : e.name)
                )
                  this.autoCompleteOptions = yield this.pokemonService.findEvolutionNames(
                    this.pokemon.name
                  );
                else if (
                  (null === (t = this.pokemonOptions) || void 0 === t
                    ? void 0
                    : t.length) &&
                  !this.random
                ) {
                  const e = this.pokemonOptions.filter((e) => {
                    var t;
                    return !(null === (t = this.nuzlockeService.currentRun) ||
                    void 0 === t
                      ? void 0
                      : t.pokemon.map((e) => e.name).includes(e));
                  });
                  this.autoCompleteOptions =
                    0 === e.length
                      ? this.pokemonOptions.map((e) =>
                          this.titleCaseService.titlecase(e)
                        )
                      : e.map((e) => this.titleCaseService.titlecase(e));
                } else this.autoCompleteOptions = this.allNames;
              });
            }
            filterOptions(e) {
              const t = this.autoCompleteOptions.filter((t) =>
                t.toLowerCase().includes(e.toLowerCase())
              );
              return 0 === t.length
                ? this.allNames
                    .filter((t) => this.pokemonImageService.handleSearch(t, e))
                    .slice(0, 15)
                : t;
            }
            onInputClick() {
              this.pokemonControl.value &&
                this.pokemonInputElement.nativeElement !==
                  this.previouslyFocusedElement &&
                this.pokemonControl.setValue('');
            }
            selectPokemon() {
              this.pokemonControl.setValue(
                this.nameService.transform(this.pokemonControl.value)
              );
            }
            click() {
              this.previouslyFocusedElement = document.activeElement;
            }
            get pokemonControl() {
              return this.formGroup.controls.pokemon;
            }
            get formValue() {
              return this.formGroup.value;
            }
            get showImage() {
              var e, t;
              return (
                this.pokemonControl.valid ||
                !(
                  null ===
                    (t =
                      null === (e = this.pokemon) || void 0 === e
                        ? void 0
                        : e.name) ||
                  void 0 === t ||
                  !t
                )
              );
            }
            get imageValue() {
              var e, t;
              return this.pokemonImageService.reverseImageReplace(
                this.pokemonControl.valid
                  ? this.pokemonControl.value.toLowerCase()
                  : null !==
                      (t =
                        null === (e = this.pokemon) || void 0 === e
                          ? void 0
                          : e.name.toLowerCase()) && void 0 !== t
                  ? t
                  : ''
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(Ni.a),
                i.Kb(Hi.a),
                i.Kb(Ei),
                i.Kb(Vi.a),
                i.Kb(Yi.a),
                i.Kb(Qi)
              );
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-picker-dialog']],
              viewQuery: function (e, t) {
                if ((1 & e && i.Ec(Xi, !0), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t.pokemonInputElement = e.first);
                }
              },
              hostBindings: function (e, t) {
                1 & e &&
                  i.Xb(
                    'click',
                    function () {
                      return t.click();
                    },
                    !1,
                    i.pc
                  );
              },
              inputs: {
                nickname: 'nickname',
                random: 'random',
                limitOptionsByEvolution: 'limitOptionsByEvolution',
                pokemon: 'pokemon',
                pokemonOptions: 'pokemonOptions',
                hideNickname: 'hideNickname'
              },
              decls: 12,
              vars: 13,
              consts: [
                ['class', 'pokemon-big', 3, 'src', 'alt', 4, 'ngIf'],
                [3, 'formGroup'],
                [4, 'ngIf'],
                [
                  'matInput',
                  '',
                  'formControlName',
                  'pokemon',
                  'placeholder',
                  'Pokemon',
                  3,
                  'matAutocomplete',
                  'click'
                ],
                ['pokemon', ''],
                [3, 'optionSelected'],
                ['auto', 'matAutocomplete'],
                [3, 'value', 4, 'ngFor', 'ngForOf'],
                [1, 'pokemon-big', 3, 'src', 'alt'],
                [
                  'autocomplete',
                  'off',
                  'matInput',
                  '',
                  'formControlName',
                  'nickname',
                  'placeholder',
                  'Nickname'
                ],
                ['nickname', ''],
                [3, 'value'],
                [1, 'pokemon', 3, 'src', 'alt']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (i.zc(0, Ui, 2, 4, 'img', 0),
                    i.Qb(1, 'form', 1),
                    i.zc(2, Zi, 3, 0, 'mat-form-field', 2),
                    i.Qb(3, 'mat-form-field'),
                    i.Qb(4, 'input', 3, 4),
                    i.Xb('click', function () {
                      return t.onInputClick();
                    }),
                    i.Pb(),
                    i.Pb(),
                    i.Qb(6, 'mat-autocomplete', 5, 6),
                    i.Xb('optionSelected', function () {
                      return t.selectPokemon();
                    }),
                    i.zc(8, $i, 5, 8, 'mat-option', 7),
                    i.cc(9, 'slice'),
                    i.cc(10, 'async'),
                    i.cc(11, 'async'),
                    i.Pb(),
                    i.Pb()),
                  2 & e)
                ) {
                  const e = i.oc(7);
                  i.ic('ngIf', t.showImage),
                    i.zb(1),
                    i.ic('formGroup', t.formGroup),
                    i.zb(1),
                    i.ic('ngIf', !t.hideNickname),
                    i.zb(2),
                    i.ic('matAutocomplete', e),
                    i.zb(4),
                    i.ic(
                      'ngForOf',
                      t.random
                        ? i.fc(9, 5, i.dc(10, 9, t.filteredOptions), 0, 5)
                        : i.dc(11, 11, t.filteredOptions)
                    );
                }
              },
              directives: [
                a.m,
                ke.p,
                ke.l,
                ke.f,
                at.b,
                Xt.a,
                ke.b,
                wt,
                ke.k,
                ke.d,
                bt,
                a.l,
                ye.h
              ],
              pipes: [a.s, a.b, Gi.a, Wi.a],
              styles: [
                '.pokemon[_ngcontent-%COMP%]{width:48px;height:48px;float:right}mat-form-field[_ngcontent-%COMP%]{width:100%}.pokemon-big[_ngcontent-%COMP%]{width:50%;height:50%;max-width:150px}'
              ]
            })),
            e
          );
        })(),
        ea = (() => {
          class e {
            constructor(e, t, o) {
              (this.dialogRef = e),
                (this.titleCaseService = o),
                (this.pokemon = t.pokemon);
            }
            onClose(e) {
              'ok' === e
                ? this.dialogRef.close(this.pickerComponent.formValue)
                : this.dialogRef.close();
            }
            get nickname() {
              var e, t;
              return null !==
                (t =
                  null === (e = this.pokemon.nickname) || void 0 === e
                    ? void 0
                    : e.trim()) && void 0 !== t
                ? t
                : '';
            }
            get evolutionName() {
              var e;
              return (
                (null === (e = this.pokemon.nickname) || void 0 === e
                  ? void 0
                  : e.trim()) ||
                this.titleCaseService.titlecase(this.pokemon.name)
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(At), i.Kb(Tt), i.Kb(Yi.a));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-evolve-dialog']],
              viewQuery: function (e, t) {
                if ((1 & e && i.Ec(Ji, !0), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t.pickerComponent = e.first);
                }
              },
              decls: 11,
              vars: 7,
              consts: [
                [1, 'text-center'],
                ['mat-dialog-title', ''],
                ['mat-dialog-content', ''],
                [3, 'random', 'nickname', 'limitOptionsByEvolution', 'pokemon'],
                ['mat-dialog-actions', '', 1, 'center-buttons'],
                ['mat-raised-button', '', 'color', 'warn', 3, 'click'],
                ['mat-raised-button', '', 'color', 'accent', 3, 'click']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'div', 0),
                  i.Qb(1, 'h1', 1),
                  i.Ac(2),
                  i.cc(3, 'hideForm'),
                  i.Pb(),
                  i.Qb(4, 'div', 2),
                  i.Lb(5, 'app-picker-dialog', 3),
                  i.Pb(),
                  i.Qb(6, 'div', 4),
                  i.Qb(7, 'button', 5),
                  i.Xb('click', function () {
                    return t.onClose('cancel');
                  }),
                  i.Ac(8, ' Cancel '),
                  i.Pb(),
                  i.Qb(9, 'button', 6),
                  i.Xb('click', function () {
                    return t.onClose('ok');
                  }),
                  i.Ac(10, ' Ok '),
                  i.Pb(),
                  i.Pb(),
                  i.Pb()),
                  2 & e &&
                    (i.zb(2),
                    i.Cc('Evolution of ', i.dc(3, 5, t.evolutionName), ''),
                    i.zb(3),
                    i.ic('random', !1)('nickname', t.nickname)(
                      'limitOptionsByEvolution',
                      !0
                    )('pokemon', t.pokemon));
              },
              directives: [Nt, Ht, Ji, Yt, xt.a],
              pipes: [Wi.a],
              encapsulation: 2
            })),
            e
          );
        })(),
        ta = (() => {
          class e {
            constructor() {
              this.isDragging = !1;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
      function oa(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'img', 5),
            i.Xb('click', function () {
              i.qc(e);
              const o = t.$implicit;
              return i.bc(2).selectPokemon(o);
            })('cdkDragStarted', function () {
              return i.qc(e), i.bc(2).startDragging();
            })('cdkDragEnded', function () {
              return i.qc(e), i.bc(2).stopDragging();
            }),
            i.cc(1, 'image'),
            i.Pb();
        }
        if (2 & e) {
          const e = t.$implicit;
          i.ic('src', i.dc(1, 1, null == e ? null : e.name), i.rc);
        }
      }
      function ia(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'div', 2),
            i.Xb('cdkDropListDropped', function (t) {
              return i.qc(e), i.bc().drop(t);
            }),
            i.cc(1, 'lowercase'),
            i.Qb(2, 'div'),
            i.Ac(3),
            i.cc(4, 'titlecase'),
            i.Pb(),
            i.Qb(5, 'div', 3),
            i.Qb(6, 'span'),
            i.zc(7, oa, 2, 3, 'img', 4),
            i.Pb(),
            i.Pb(),
            i.Pb();
        }
        if (2 & e) {
          const e = i.bc();
          i.Bb('', i.dc(1, 6, e.title), '-container pb-2 text-center'),
            i.ic('cdkDropListData', e.data),
            i.zb(3),
            i.Bc(i.dc(4, 8, e.title)),
            i.zb(4),
            i.ic('ngForOf', e.data);
        }
      }
      function aa(e, t) {
        if ((1 & e && (i.Lb(0, 'img', 7), i.cc(1, 'image')), 2 & e)) {
          const e = t.$implicit;
          i.ic('src', i.dc(1, 1, null == e ? null : e.name), i.rc);
        }
      }
      function na(e, t) {
        if (
          (1 & e &&
            (i.Qb(0, 'div'),
            i.cc(1, 'lowercase'),
            i.Qb(2, 'div'),
            i.Ac(3),
            i.cc(4, 'titlecase'),
            i.Pb(),
            i.Qb(5, 'div', 3),
            i.Qb(6, 'span'),
            i.zc(7, aa, 2, 3, 'img', 6),
            i.Pb(),
            i.Pb(),
            i.Pb()),
          2 & e)
        ) {
          const e = i.bc();
          i.Bb('', i.dc(1, 5, e.title), '-container pb-2 text-center'),
            i.zb(3),
            i.Bc(i.dc(4, 7, e.title)),
            i.zb(4),
            i.ic('ngForOf', e.data);
        }
      }
      let ra = (() => {
        class e {
          constructor(e, t, o) {
            (this.dialog = e),
              (this.draggingService = t),
              (this.nuzlockeService = o),
              (this.update = new i.n());
          }
          drop(e) {
            if (e.previousContainer !== e.container) {
              if (
                e.container.data[0] &&
                e.container.data[0].status === Si.Party &&
                6 === e.container.data.length
              )
                return;
              !(function (e, t, o, i) {
                const a = G(o, e.length - 1),
                  n = G(i, t.length);
                e.length && t.splice(n, 0, e.splice(a, 1)[0]);
              })(
                e.previousContainer.data,
                e.container.data,
                e.previousIndex,
                e.currentIndex
              ),
                this.update.next(
                  Object.assign(
                    Object.assign({}, e.container.data[e.currentIndex]),
                    { status: Si[this.title] }
                  )
                );
            }
          }
          startDragging() {
            this.draggingService.isDragging = !0;
          }
          stopDragging() {
            this.draggingService.isDragging = !1;
          }
          selectPokemon(e) {
            this.dialog
              .open(ea, { data: { pokemon: e }, width: '80%' })
              .afterClosed()
              .subscribe((t) => {
                t &&
                  this.nuzlockeService.updateEncounter(e, {
                    name: t.pokemon.toLowerCase(),
                    nickname: t.nickname
                  });
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(i.Kb(Kt), i.Kb(ta), i.Kb(Ei));
          }),
          (e.ɵcmp = i.Eb({
            type: e,
            selectors: [['app-drag-drop']],
            inputs: { title: 'title', data: 'data', active: 'active' },
            outputs: { update: 'update' },
            decls: 2,
            vars: 2,
            consts: [
              [
                'cdkDropList',
                '',
                3,
                'cdkDropListData',
                'class',
                'cdkDropListDropped',
                4,
                'ngIf'
              ],
              [3, 'class', 4, 'ngIf'],
              ['cdkDropList', '', 3, 'cdkDropListData', 'cdkDropListDropped'],
              [1, 'container'],
              [
                'class',
                'pokemon',
                'cdkDrag',
                '',
                3,
                'src',
                'click',
                'cdkDragStarted',
                'cdkDragEnded',
                4,
                'ngFor',
                'ngForOf'
              ],
              [
                'cdkDrag',
                '',
                1,
                'pokemon',
                3,
                'src',
                'click',
                'cdkDragStarted',
                'cdkDragEnded'
              ],
              ['class', 'pokemon', 3, 'src', 4, 'ngFor', 'ngForOf'],
              [1, 'pokemon', 3, 'src']
            ],
            template: function (e, t) {
              1 & e &&
                (i.zc(0, ia, 8, 10, 'div', 0), i.zc(1, na, 8, 9, 'div', 1)),
                2 & e &&
                  (i.ic('ngIf', t.active), i.zb(1), i.ic('ngIf', !t.active));
            },
            directives: [a.m, de, a.l, me],
            pipes: [a.j, a.t, Gi.a],
            styles: [
              '.party-container[_ngcontent-%COMP%]{background-color:#3f51b5;min-height:13vh}.boxed-container[_ngcontent-%COMP%]{background-color:#689f38;min-height:13vh}.heaven-container[_ngcontent-%COMP%]{background-color:#6d4c41;min-height:13vh}.missed-container[_ngcontent-%COMP%]{background-color:#ff8a65;min-height:13vh}.pokemon[_ngcontent-%COMP%]{width:66px;height:66px;cursor:pointer}.container[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}'
            ]
          })),
          e
        );
      })();
      function sa(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'img', 11),
            i.Xb('click', function () {
              i.qc(e);
              const o = t.$implicit,
                a = t.index,
                n = i.bc().index;
              return i.bc().earnBadge(o, a, !!n);
            }),
            i.Pb();
        }
        if (2 & e) {
          const e = t.$implicit;
          i.Cb('unearned', !(null != e && e.earned)),
            i.ic('src', null == e ? null : e.url, i.rc);
        }
      }
      function la(e, t) {
        if (
          (1 & e && (i.Qb(0, 'div', 9), i.zc(1, sa, 1, 3, 'img', 10), i.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          i.zb(1), i.ic('ngForOf', e);
        }
      }
      function ca(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'button', 12),
            i.Xb('click', function () {
              return i.qc(e), i.bc().exportToTeamBuilder();
            }),
            i.Ac(1, ' Export to Team Builder '),
            i.Pb();
        }
      }
      function da(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'app-drag-drop', 14),
            i.Xb('update', function (t) {
              return i.qc(e), i.bc(2).dragDropChange(t);
            }),
            i.Pb();
        }
        if (2 & e) {
          const e = i.bc().$implicit,
            t = i.bc();
          i.ic('active', t.active)('title', e.title)('data', e.data);
        }
      }
      function pa(e, t) {
        if (
          (1 & e &&
            (i.Qb(0, 'div'), i.zc(1, da, 1, 3, 'app-drag-drop', 13), i.Pb()),
          2 & e)
        ) {
          const e = t.$implicit;
          i.zb(1), i.ic('ngIf', e);
        }
      }
      function ha(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'button', 15),
            i.Xb('click', function () {
              return i.qc(e), i.bc().completeRun();
            }),
            i.Qb(1, 'mat-icon'),
            i.Ac(2, 'done'),
            i.Pb(),
            i.Pb();
        }
      }
      let ua = (() => {
          class e {
            constructor(e, t, o, i, a, n, r) {
              (this.route = e),
                (this.router = t),
                (this.pokemonImageService = o),
                (this.badgeService = i),
                (this.nuzlockeService = a),
                (this.teamService = n),
                (this.dialog = r),
                (this.badges = []),
                (this.groups = []);
            }
            ngOnInit() {
              this.route.data.subscribe(({ nuzlocke: e }) => {
                (this.nuzlocke = e),
                  (this.badges = this.badgeService.getBadges(e)),
                  (this.groups = []);
                for (const t of Object(wi.b)(Si))
                  this.groups.push({
                    title: t,
                    data: e.pokemon.filter(({ status: e }) => e === Si[t])
                  });
              });
            }
            dragDropChange(e) {
              this.nuzlockeService.updateEncounter(e, { status: e.status });
            }
            earnBadge(e, t, o) {
              this.active &&
                ((e.earned = !e.earned),
                this.nuzlockeService.earnBadge(o ? t + 8 : t));
            }
            exportToTeamBuilder() {
              return Object(vi.a)(this, void 0, void 0, function* () {
                const e = this.party.map((e) =>
                  this.pokemonImageService.transform(e.name)
                );
                yield this.teamService.exportToTeamBuilder(e),
                  this.router.redirect('/team-builder');
              });
            }
            completeRun() {
              this.dialog
                .open(Bi, {
                  width: '80%',
                  data: {
                    finished: this.hasAllBadges() && this.alive > 0,
                    name: this.nuzlocke.runName,
                    alreadyFinished: this.finished
                  }
                })
                .afterClosed()
                .subscribe((e) => {
                  if (e) {
                    const t = this.hasAllBadges() && this.alive > 0;
                    t
                      ? this.nuzlockeService.completeNuzlocke(
                          this.nuzlocke,
                          t,
                          'ok' === e ? this.nuzlocke.pokemon : []
                        )
                      : this.nuzlockeService.completeNuzlocke(this.nuzlocke),
                      this.router.redirect(
                        'ok' === e ? '/nuzlocke/create' : '/nuzlocke/saves'
                      );
                  }
                });
            }
            get active() {
              return this.nuzlocke.status === ji.Started;
            }
            get finished() {
              return this.nuzlocke.status === ji.Success;
            }
            hasAllBadges() {
              return this.earnedBadges === this.badges.length;
            }
            get canComplete() {
              return (
                this.groupData.length > 0 &&
                (this.hasAllBadges() || 0 === this.alive)
              );
            }
            get earnedBadges() {
              return this.badges.filter((e) => e.earned).length;
            }
            get rows() {
              return 8 === this.badges.length
                ? [this.badges.slice(0, 8)]
                : [this.badges.slice(0, 8), this.badges.slice(8)];
            }
            get groupData() {
              const e = [];
              for (const t of this.groups) for (const o of t.data) e.push(o);
              return e;
            }
            count(e) {
              let t = 0;
              for (const o of this.groupData) o.status === e && ++t;
              return t;
            }
            get party() {
              var e;
              return (
                (null ===
                  (e = this.groups.find(
                    (e) => (null == e ? void 0 : e.title) === Si[Si.Party]
                  )) || void 0 === e
                  ? void 0
                  : e.data) || []
              );
            }
            get alive() {
              return this.count(Si.Boxed) + this.count(Si.Party);
            }
            get dead() {
              return this.count(Si.Heaven);
            }
            get boxed() {
              return this.count(Si.Boxed);
            }
            get missed() {
              return this.count(Si.Missed);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                i.Kb(fi.a),
                i.Kb(Ii.a),
                i.Kb(Vi.a),
                i.Kb(Ki),
                i.Kb(Ei),
                i.Kb(qi.a),
                i.Kb(Kt)
              );
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-nuzlocke-overview']],
              decls: 21,
              vars: 8,
              consts: [
                [1, 'container'],
                [1, 'badge-container', 'py-2'],
                ['class', 'py-1 badges', 4, 'ngFor', 'ngForOf'],
                [1, 'right-align'],
                [1, 'text-center'],
                ['mat-raised-button', '', 3, 'click', 4, 'ngIf'],
                ['cdkDropListGroup', ''],
                [4, 'ngFor', 'ngForOf'],
                ['mat-fab', '', 'class', 'add-button', 3, 'click', 4, 'ngIf'],
                [1, 'py-1', 'badges'],
                [
                  'class',
                  'badge',
                  3,
                  'src',
                  'unearned',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                [1, 'badge', 3, 'src', 'click'],
                ['mat-raised-button', '', 3, 'click'],
                [3, 'active', 'title', 'data', 'update', 4, 'ngIf'],
                [3, 'active', 'title', 'data', 'update'],
                ['mat-fab', '', 1, 'add-button', 3, 'click']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'div', 0),
                  i.Qb(1, 'div', 1),
                  i.zc(2, la, 2, 1, 'div', 2),
                  i.Qb(3, 'table'),
                  i.Qb(4, 'tbody'),
                  i.Qb(5, 'tr'),
                  i.Qb(6, 'td'),
                  i.Ac(7),
                  i.Pb(),
                  i.Lb(8, 'td'),
                  i.Qb(9, 'td', 3),
                  i.Ac(10),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(11, 'tr'),
                  i.Qb(12, 'td'),
                  i.Ac(13),
                  i.Pb(),
                  i.Qb(14, 'td', 4),
                  i.zc(15, ca, 2, 0, 'button', 5),
                  i.Pb(),
                  i.Qb(16, 'td', 3),
                  i.Ac(17),
                  i.Pb(),
                  i.Pb(),
                  i.Pb(),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(18, 'div', 6),
                  i.zc(19, pa, 2, 1, 'div', 7),
                  i.Pb(),
                  i.zc(20, ha, 3, 0, 'button', 8),
                  i.Pb()),
                  2 & e &&
                    (i.zb(2),
                    i.ic('ngForOf', t.rows),
                    i.zb(5),
                    i.Cc('Alive: ', t.alive, ''),
                    i.zb(3),
                    i.Cc('Boxed: ', t.boxed, ''),
                    i.zb(3),
                    i.Cc('Dead: ', t.dead, ''),
                    i.zb(2),
                    i.ic('ngIf', null == t.party ? null : t.party.length),
                    i.zb(2),
                    i.Cc('Missed: ', t.missed, ''),
                    i.zb(2),
                    i.ic('ngForOf', t.groups),
                    i.zb(1),
                    i.ic('ngIf', (t.canComplete && t.active) || t.finished));
              },
              directives: [a.l, a.m, re, xt.a, ra, Wt.a],
              styles: [
                '.badge[_ngcontent-%COMP%]{width:32px;height:32px;cursor:pointer}.badges[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly}.unearned[_ngcontent-%COMP%]{filter:grayscale(1) brightness(.1)}.badge-container[_ngcontent-%COMP%]{background-color:#313131}table[_ngcontent-%COMP%]{width:100%}.right-align[_ngcontent-%COMP%]{text-align:right}td[_ngcontent-%COMP%]{line-height:36px;padding:0 10px}'
              ]
            })),
            e
          );
        })(),
        ma = (() => {
          class e {
            constructor(e) {
              (this.dialogRef = e),
                (this.routeFormControl = new ke.e({
                  route: new ke.c('', ke.o.required),
                  current: new ke.c(!1)
                }));
            }
            onClose(e) {
              'ok' === e
                ? this.routeFormControl.valid &&
                  this.dialogRef.close(this.routeFormControl.value)
                : this.dialogRef.close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(At));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-create-route-dialog']],
              decls: 14,
              vars: 1,
              consts: [
                [1, 'text-center', 3, 'formGroup'],
                ['mat-dialog-title', ''],
                ['mat-dialog-content', ''],
                [
                  'autocomplete',
                  'off',
                  'matInput',
                  '',
                  'formControlName',
                  'route',
                  'placeholder',
                  'Route Name'
                ],
                ['formControlName', 'current'],
                ['mat-dialog-actions', '', 1, 'center-buttons'],
                ['color', 'warn', 'mat-raised-button', '', 3, 'click'],
                ['color', 'accent', 'mat-raised-button', '', 3, 'click']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'form', 0),
                  i.Qb(1, 'h1', 1),
                  i.Ac(2, 'Add Route'),
                  i.Pb(),
                  i.Qb(3, 'div', 2),
                  i.Qb(4, 'div'),
                  i.Qb(5, 'mat-form-field'),
                  i.Lb(6, 'input', 3),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(7, 'mat-slide-toggle', 4),
                  i.Ac(8, 'Save for this run?'),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(9, 'div', 5),
                  i.Qb(10, 'button', 6),
                  i.Xb('click', function () {
                    return t.onClose('cancel');
                  }),
                  i.Ac(11, ' Cancel '),
                  i.Pb(),
                  i.Qb(12, 'button', 7),
                  i.Xb('click', function () {
                    return t.onClose('ok');
                  }),
                  i.Ac(13, ' Ok '),
                  i.Pb(),
                  i.Pb(),
                  i.Pb()),
                  2 & e && i.ic('formGroup', t.routeFormControl);
              },
              directives: [
                ke.p,
                ke.l,
                ke.f,
                Nt,
                Ht,
                at.b,
                Xt.a,
                ke.b,
                ke.k,
                ke.d,
                gi,
                Yt,
                xt.a
              ],
              styles: [
                '.mat-dialog-content[_ngcontent-%COMP%]{overflow-y:hidden}mat-form-field[_ngcontent-%COMP%]{width:100%}'
              ]
            })),
            e
          );
        })(),
        ga = (() => {
          class e {
            constructor(e, t) {
              (this.dialogRef = e),
                (this.routeName = t.name),
                (this.routeFormControl = new ke.e({ current: new ke.c(!0) }));
            }
            onClose(e) {
              'ok' === e
                ? this.dialogRef.close({
                    onlyFromCurrent: this.routeFormControl.controls.current
                      .value
                  })
                : this.dialogRef.close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(At), i.Kb(Tt));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-delete-route-dialog']],
              decls: 13,
              vars: 2,
              consts: [
                [3, 'formGroup'],
                ['mat-dialog-title', ''],
                ['mat-dialog-content', ''],
                ['formControlName', 'current'],
                ['mat-dialog-actions', '', 1, 'center-buttons'],
                ['mat-raised-button', '', 'color', 'warn', 3, 'click'],
                ['color', 'accent', 'mat-raised-button', '', 3, 'click']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'form', 0),
                  i.Qb(1, 'h1', 1),
                  i.Ac(2, 'Delete Route'),
                  i.Pb(),
                  i.Qb(3, 'div', 2),
                  i.Qb(4, 'div'),
                  i.Ac(5),
                  i.Pb(),
                  i.Qb(6, 'mat-slide-toggle', 3),
                  i.Ac(7, 'Delete for this run?'),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(8, 'div', 4),
                  i.Qb(9, 'button', 5),
                  i.Xb('click', function () {
                    return t.onClose('cancel');
                  }),
                  i.Ac(10, ' Cancel '),
                  i.Pb(),
                  i.Qb(11, 'button', 6),
                  i.Xb('click', function () {
                    return t.onClose('ok');
                  }),
                  i.Ac(12, ' Ok '),
                  i.Pb(),
                  i.Pb(),
                  i.Pb()),
                  2 & e &&
                    (i.ic('formGroup', t.routeFormControl),
                    i.zb(5),
                    i.Cc(
                      ' Would you like to delete the encounter for ',
                      t.routeName,
                      '? '
                    ));
              },
              directives: [ke.p, ke.l, ke.f, Nt, Ht, gi, ke.k, ke.d, Yt, xt.a],
              encapsulation: 2
            })),
            e
          );
        })(),
        ba = (() => {
          class e {
            constructor(e, t) {
              (this.dialogRef = e),
                (this.data = t),
                (this.allNames = []),
                (this.previouslyFocusedElement = null),
                (this.routeFormControl = new ke.e({
                  page: new ke.c(t.visited ? 2 : 1)
                })),
                (this.caught = !!t.capturedPokemon),
                (this.random = t.random),
                (this.encounter = t.location);
            }
            ngOnInit() {
              this.encounter.includes('Gift') && this.obtained('yes');
            }
            onClose(e) {
              'ok' === e && this.pickerComponent.formGroup.valid
                ? this.dialogRef.close(
                    Object.assign(
                      Object.assign({}, this.pickerComponent.formValue),
                      { caught: this.caught }
                    )
                  )
                : this.dialogRef.close();
            }
            goBack() {
              this.routeFormControl.patchValue({ page: 1 }),
                this.routeFormControl.markAsPristine();
            }
            obtained(e) {
              this.routeFormControl.patchValue({ page: 2 }),
                (this.caught = 'yes' === e);
            }
            get pokemonOptions() {
              return this.data.pokemon;
            }
            get page() {
              return this.routeFormControl.controls.page.value;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(At), i.Kb(Tt));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-select-route-dialog']],
              viewQuery: function (e, t) {
                if ((1 & e && i.Ec(Ji, !0), 2 & e)) {
                  let e;
                  i.nc((e = i.Yb())) && (t.pickerComponent = e.first);
                }
              },
              decls: 20,
              vars: 18,
              consts: [
                [1, 'text-center'],
                ['mat-dialog-title', ''],
                ['mat-dialog-content', ''],
                [
                  3,
                  'random',
                  'hideNickname',
                  'limitOptionsByEvolution',
                  'pokemonOptions'
                ],
                ['mat-dialog-actions', '', 1, 'center-buttons'],
                ['mat-raised-button', '', 'color', 'warn', 3, 'click'],
                [
                  'mat-raised-button',
                  '',
                  'color',
                  'accent',
                  3,
                  'disabled',
                  'click'
                ],
                [1, 'center-buttons', 'mb-2'],
                ['mat-raised-button', '', 'color', 'accent', 3, 'click']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'div', 0),
                  i.Qb(1, 'h1', 1),
                  i.Ac(2),
                  i.Pb(),
                  i.Qb(3, 'div', 2),
                  i.Qb(4, 'h3'),
                  i.Ac(5, 'Did you obtain a pokemon?'),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(6, 'div', 2),
                  i.Lb(7, 'app-picker-dialog', 3),
                  i.Pb(),
                  i.Qb(8, 'div', 4),
                  i.Qb(9, 'div'),
                  i.Qb(10, 'button', 5),
                  i.Xb('click', function () {
                    return t.onClose('cancel');
                  }),
                  i.Ac(11, ' Cancel '),
                  i.Pb(),
                  i.Qb(12, 'button', 6),
                  i.Xb('click', function () {
                    return t.onClose('ok');
                  }),
                  i.Ac(13, ' Ok '),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(14, 'div'),
                  i.Qb(15, 'div', 7),
                  i.Qb(16, 'button', 5),
                  i.Xb('click', function () {
                    return t.obtained('no');
                  }),
                  i.Ac(17, ' No '),
                  i.Pb(),
                  i.Qb(18, 'button', 8),
                  i.Xb('click', function () {
                    return t.obtained('yes');
                  }),
                  i.Ac(19, ' Yes '),
                  i.Pb(),
                  i.Pb(),
                  i.Pb(),
                  i.Pb(),
                  i.Pb()),
                  2 & e &&
                    (i.zb(2),
                    i.Bc(t.encounter),
                    i.zb(2),
                    i.Cb('hidden', 2 === t.page),
                    i.zb(2),
                    i.Cb('hidden', 1 === t.page),
                    i.zb(1),
                    i.ic('random', t.random)('hideNickname', !t.caught)(
                      'limitOptionsByEvolution',
                      !1
                    )('pokemonOptions', t.pokemonOptions),
                    i.zb(2),
                    i.Cb('hidden', 1 === t.page),
                    i.zb(1),
                    i.Cb('hidden', 1 === t.page),
                    i.zb(2),
                    i.Cb('hidden', 1 === t.page),
                    i.ic('disabled', !t.routeFormControl.valid),
                    i.zb(2),
                    i.Cb('hidden', 2 === t.page));
              },
              encapsulation: 2
            })),
            e
          );
        })();
      function ka(e, t, o, i) {
        return e.length > 1
          ? (function (e, t, o) {
              return t.filter(
                e ? (e) => !o[1].includes(e) : (e) => !o[0].includes(e)
              );
            })(t === e[0], o, i)
          : o;
      }
      function fa(e, t, o) {
        return t.map((i) => [
          ...e.gifts.map((e) => ({
            location: 'Gift - ' + e.location,
            pokemon: e.pokemon,
            order: e.order,
            game: i,
            type: Pi.Gift
          })),
          ...e.statics.map((e) => ({
            location: 'Static - ' + e.location,
            pokemon: ka(t, i, e.pokemon, o),
            order: e.order,
            game: i,
            type: Pi.Static
          })),
          ...e.encounters.map((e) => ({
            location: e.location,
            pokemon: ka(t, i, e.pokemon, o),
            order: e.order,
            game: i,
            type: Pi.Encounter
          }))
        ]);
      }
      var ya = (function (e) {
        return (
          (e[(e.RedBlue = 0)] = 'RedBlue'),
          (e[(e.Yellow = 1)] = 'Yellow'),
          (e[(e.GoldSilver = 2)] = 'GoldSilver'),
          (e[(e.Crystal = 3)] = 'Crystal'),
          (e[(e.RubySapphire = 4)] = 'RubySapphire'),
          (e[(e.Emerald = 5)] = 'Emerald'),
          (e[(e.FireRedLeafGreen = 6)] = 'FireRedLeafGreen'),
          (e[(e.DiamondPearl = 7)] = 'DiamondPearl'),
          (e[(e.Platinum = 8)] = 'Platinum'),
          (e[(e.HeartGoldSoulSilver = 9)] = 'HeartGoldSoulSilver'),
          (e[(e.BlackWhite = 10)] = 'BlackWhite'),
          (e[(e.Black2White2 = 11)] = 'Black2White2'),
          (e[(e.XY = 12)] = 'XY'),
          (e[(e.OmegaRubyAlphaSapphire = 13)] = 'OmegaRubyAlphaSapphire'),
          (e[(e.SunMoon = 14)] = 'SunMoon'),
          (e[(e.UltraSunUltraMoon = 15)] = 'UltraSunUltraMoon'),
          (e[(e.SwordShield = 16)] = 'SwordShield'),
          (e[(e.Custom = 17)] = 'Custom'),
          e
        );
      })({});
      function _a(e) {
        switch (e) {
          case ya.RedBlue:
            return [Ci.Red, Ci.Blue];
          case ya.Yellow:
            return [Ci.Yellow];
          case ya.GoldSilver:
            return [Ci.Gold, Ci.Silver];
          case ya.Crystal:
            return [Ci.Crystal];
          case ya.RubySapphire:
            return [Ci.Ruby, Ci.Sapphire];
          case ya.Emerald:
            return [Ci.Emerald];
          case ya.FireRedLeafGreen:
            return [Ci.FireRed, Ci.LeafGreen];
          case ya.DiamondPearl:
            return [Ci.Diamond, Ci.Pearl];
          case ya.Platinum:
            return [Ci.Platinum];
          case ya.HeartGoldSoulSilver:
            return [Ci.HeartGold, Ci.SoulSilver];
          case ya.BlackWhite:
            return [Ci.Black, Ci.White];
          case ya.Black2White2:
            return [Ci.Black2, Ci.White2];
          case ya.XY:
            return [Ci.X, Ci.Y];
          case ya.OmegaRubyAlphaSapphire:
            return [Ci.OmegaRuby, Ci.AlphaSapphire];
          case ya.SunMoon:
            return [Ci.Sun, Ci.Moon];
          case ya.UltraSunUltraMoon:
            return [Ci.UltraSun, Ci.UltraMoon];
          case ya.SwordShield:
            return [Ci.Sword, Ci.Shield];
          case ya.Custom:
            return [Ci.Red];
        }
      }
      const va = [
        ...fa(
          {
            game: ya.BlackWhite,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['snivy', 'oshawott', 'tepig'],
                order: 0
              },
              {
                location: 'Dreamyard',
                pokemon: ['pansage', 'panpour', 'pansear'],
                order: 3
              },
              {
                location: 'Fossil',
                pokemon: ['tirtouga', 'archen'],
                order: 11
              },
              { location: 'Route 18 Egg', pokemon: ['larvesta'], order: 20 }
            ],
            statics: [
              { location: 'Relic Castle', pokemon: ['darmanitan'], order: 12 },
              {
                location: "N's Castle",
                pokemon: ['reshiram', 'zekrom'],
                order: 35
              },
              { location: 'Mistralton Cave', pokemon: ['cobalion'], order: 23 },
              { location: 'Trial Chamber', pokemon: ['terrakion'], order: 34 },
              {
                location: 'Rumination Field',
                pokemon: ['virizion'],
                order: 24
              },
              {
                location: 'Roaming Storm',
                pokemon: ['tornadus', 'thundurus'],
                order: 31
              }
            ],
            encounters: [
              {
                location: 'Route 1',
                pokemon: ['patrat', 'lillipup'],
                order: 1
              },
              {
                location: 'Route 2',
                pokemon: ['patrat', 'lillipup', 'purrloin'],
                order: 2
              },
              {
                location: 'Dreamyard',
                pokemon: ['patrat', 'purrloin', 'munna', 'audino', 'musharna'],
                order: 4
              },
              {
                location: 'Route 3',
                pokemon: [
                  'pidove',
                  'patrat',
                  'blitzle',
                  'lillipup',
                  'purrloin',
                  'audino'
                ],
                order: 5
              },
              {
                location: 'Wellspring Cave',
                pokemon: ['roggenrola', 'woobat', 'drilbur'],
                order: 6
              },
              {
                location: 'Pinwheel Forest',
                pokemon: [
                  'tympole',
                  'pidove',
                  'timburr',
                  'sawk',
                  'throh',
                  'audino',
                  'sewaddle',
                  'cottonee',
                  'petilil',
                  'venipede',
                  'pidove',
                  'pansage',
                  'pansear',
                  'panpour',
                  'whimsicott',
                  'lilligant',
                  'swadloon',
                  'tranquill',
                  'whirlipede'
                ],
                order: 7
              },
              {
                location: 'Route 4',
                pokemon: ['sandile', 'darumaka', 'scraggy'],
                order: 8
              },
              {
                location: 'Desert Resort',
                pokemon: [
                  'sandile',
                  'darumaka',
                  'scraggy',
                  'maractus',
                  'dwebble',
                  'sigilyph'
                ],
                order: 9
              },
              {
                location: 'Relic Castle',
                pokemon: ['sandile', 'yamask'],
                order: 10
              },
              {
                location: 'Route 5',
                pokemon: [
                  'minccino',
                  'gothita',
                  'solosis',
                  'liepard',
                  'trubbish',
                  'audino',
                  'emolga',
                  'cinccino'
                ],
                order: 12
              },
              {
                location: 'Cold Storage',
                pokemon: [
                  'herdier',
                  'vanillite',
                  'timburr',
                  'minccino',
                  'audino',
                  'cinccino',
                  'stoutland'
                ],
                order: 13
              },
              {
                location: 'Route 6',
                pokemon: [
                  'deerling',
                  'karrablast',
                  'foongus',
                  'tranquill',
                  'vanillite',
                  'swadloon',
                  'audino',
                  'emolga',
                  'unfezant',
                  'leavanny'
                ],
                order: 14
              },
              {
                location: 'Chargestone Cave',
                pokemon: [
                  'joltik',
                  'klink',
                  'ferroseed',
                  'boldore',
                  'tynamo',
                  'drilbur'
                ],
                order: 15
              },
              {
                location: 'Route 7',
                pokemon: [
                  'tranquill',
                  'cubchoo',
                  'watchog',
                  'zebstrika',
                  'deerling',
                  'foongus',
                  'audino',
                  'unfezant',
                  'emolga'
                ],
                order: 16
              },
              {
                location: 'Celestial Tower',
                pokemon: ['litwick', 'elgyem'],
                order: 17
              },
              {
                location: 'Route 17',
                pokemon: ['frillish', 'alomomola', 'jellicent'],
                order: 18
              },
              {
                location: 'Route 18',
                pokemon: [
                  'scraggy',
                  'dwebble',
                  'watchog',
                  'sawk',
                  'throh',
                  'crustle',
                  'audino',
                  'frillish',
                  'alomomola',
                  'jellicent'
                ],
                order: 19
              },
              {
                location: 'P2 Laboratory',
                pokemon: [
                  'watchog',
                  'herdier',
                  'scraggy',
                  'klink',
                  'audino',
                  'stoutland',
                  'frillish',
                  'alomomola',
                  'jellicent'
                ],
                order: 21
              },
              {
                location: 'Mistralton Cave',
                pokemon: ['boldore', 'woobat', 'axew', 'drilbur'],
                order: 22
              },
              {
                location: 'Twist Mountain',
                pokemon: [
                  'boldore',
                  'woobat',
                  'gurdurr',
                  'cubchoo',
                  'cryogonal',
                  'drilbur'
                ],
                order: 25
              },
              {
                location: 'Icirrus City',
                pokemon: ['palpitoad', 'shelmet', 'stunfisk', 'seismitoad'],
                order: 26
              },
              {
                location: 'Dragonspiral Tower',
                pokemon: [
                  'tranquill',
                  'vanillite',
                  'deerling',
                  'mienfoo',
                  'druddigon',
                  'cubchoo',
                  'audino',
                  'emolga',
                  'unfezant',
                  'sawsbuck',
                  'beartic',
                  'basculin',
                  'golett'
                ],
                order: 27
              },
              {
                location: 'Route 8',
                pokemon: ['palpitoad', 'shelmet', 'stunfisk', 'seismitoad'],
                order: 28
              },
              {
                location: 'Moor of Icirrus',
                pokemon: ['palpitoad', 'shelmet', 'stunfisk', 'seismitoad'],
                order: 29
              },
              {
                location: 'Route 9',
                pokemon: [
                  'gothorita',
                  'duosion',
                  'garbodor',
                  'minccino',
                  'pawniard',
                  'liepard',
                  'audino',
                  'emolga',
                  'cinccino',
                  'gothitelle',
                  'reuniclus'
                ],
                order: 30
              },
              {
                location: 'Route 10',
                pokemon: [
                  'herdier',
                  'rufflet',
                  'vullaby',
                  'bouffalant',
                  'throh',
                  'sawk',
                  'foongus',
                  'amoonguss',
                  'audino',
                  'emolga',
                  'stoutland'
                ],
                order: 32
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'heatmor',
                  'vullaby',
                  'rufflet',
                  'fraxure',
                  'mienfoo',
                  'durant',
                  'deino',
                  'boldore',
                  'woobat',
                  'excadrill',
                  'basculin'
                ],
                order: 33
              }
            ]
          },
          _a(ya.BlackWhite),
          [
            [
              'weedle',
              'kakuna',
              'beedrill',
              'murkrow',
              'houndour',
              'houndoom',
              'shroomish',
              'breloom',
              'plusle',
              'volbeat',
              'honchkrow',
              'cottonee',
              'whimsicott',
              'gothita',
              'gothorita',
              'gothitelle',
              'vullaby',
              'mandibuzz',
              'tornadus',
              'reshiram'
            ],
            [
              'caterpie',
              'metapod',
              'butterfree',
              'paras',
              'parasect',
              'misdreavus',
              'poochyena',
              'mightyena',
              'minun',
              'illumise',
              'mismagius',
              'petilil',
              'lilligant',
              'solosis',
              'duosion',
              'reuniclus',
              'rufflet',
              'braviary',
              'thundurus',
              'zekrom'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.Black2White2,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['snivy', 'oshawott', 'tepig'],
                order: 0
              },
              { location: 'Driftveil City', pokemon: ['Zorua'], order: 13 },
              {
                location: 'Route 6 Weather Institute',
                pokemon: ['deerling'],
                order: 17
              }
            ],
            statics: [
              { location: 'Seaside Cave', pokemon: ['crustle'], order: 37 },
              { location: 'Relic Castle', pokemon: ['volcarona'], order: 15 },
              {
                location: 'Route 13 Roaming',
                pokemon: ['cobalion'],
                order: 26
              },
              {
                location: 'Route 22 Roaming',
                pokemon: ['terrakion'],
                order: 34
              },
              { location: 'Route 11 Roaming', pokemon: ['virizion'], order: 30 }
            ],
            encounters: [
              {
                location: 'Route 19',
                pokemon: ['patrat', 'purrloin'],
                order: 1
              },
              {
                location: 'Route 20',
                pokemon: [
                  'sewaddle',
                  'pidove',
                  'sunkern',
                  'patrat',
                  'purrloin',
                  'audino',
                  'dunsparce',
                  'venipede'
                ],
                order: 2
              },
              {
                location: 'Floccesy Ranch',
                pokemon: [
                  'patrat',
                  'lillipup',
                  'psyduck',
                  'azurill',
                  'pidove',
                  'mareep',
                  'riolu'
                ],
                order: 3
              },
              {
                location: 'Virbank Complex',
                pokemon: [
                  'patrat',
                  'pidove',
                  'magnemite',
                  'elekid',
                  'magby',
                  'audino',
                  'growlithe',
                  'koffing'
                ],
                order: 4
              },
              {
                location: 'Castelia Sewers',
                pokemon: ['rattata', 'zubat', 'grimer'],
                order: 5
              },
              {
                location: 'Castelia Park',
                pokemon: [
                  'cottonee',
                  'petilil',
                  'rattata',
                  'skitty',
                  'buneary',
                  'pidove',
                  'eevee',
                  'audino',
                  'lopunny',
                  'delcatty',
                  'whimsicott',
                  'lilligant'
                ],
                order: 6
              },
              {
                location: 'Route 4',
                pokemon: [
                  'sandile',
                  'darumaka',
                  'minccino',
                  'trubbish',
                  'scraggy',
                  'mandibuzz',
                  'braviary'
                ],
                order: 7
              },
              {
                location: 'Desert Resort',
                pokemon: [
                  'sandshrew',
                  'sandile',
                  'darumaka',
                  'maractus',
                  'dwebble',
                  'scraggy',
                  'trapinch',
                  'sigilyph'
                ],
                order: 8
              },
              {
                location: 'Relic Castle',
                pokemon: [
                  'sandile',
                  'yamask',
                  'sandshrew',
                  'sandslash',
                  'krokorok',
                  'baltoy'
                ],
                order: 9
              },
              {
                location: 'Route 16',
                pokemon: [
                  'minccino',
                  'gothita',
                  'solosis',
                  'liepard',
                  'trubbish',
                  'audino',
                  'emolga',
                  'cinccino'
                ],
                order: 10
              },
              {
                location: 'Lostlorn Forest',
                pokemon: [
                  'swadloon',
                  'cottonee',
                  'petilil',
                  'venipede',
                  'roselia',
                  'combee',
                  'heracross',
                  'pinsir',
                  'audino',
                  'emolga',
                  'pansage',
                  'pansear',
                  'panpour',
                  'vespiquen',
                  'roserade',
                  'leavanny',
                  'whimsicott',
                  'lilligant'
                ],
                order: 11
              },
              {
                location: 'Route 5',
                pokemon: [
                  'minccino',
                  'gothita',
                  'solosis',
                  'liepard',
                  'trubbish',
                  'audino',
                  'emolga',
                  'cinccino',
                  'foongus'
                ],
                order: 12
              },
              {
                location: 'Relic Passage',
                pokemon: [
                  'boldore',
                  'woobat',
                  'gurdurr',
                  'raticate',
                  'onix',
                  'drilbur',
                  'roggenrola',
                  'timburr',
                  'rattata'
                ],
                order: 14
              },
              {
                location: 'Route 6',
                pokemon: [
                  'deerling',
                  'shelmet',
                  'karrablast',
                  'tranquill',
                  'swadloon',
                  'foongus',
                  'marill',
                  'audino',
                  'emolga',
                  'dunsparce',
                  'azumarill',
                  'castform',
                  'unfezant',
                  'leavanny',
                  'basculin'
                ],
                order: 16
              },
              {
                location: 'Mistralton Cave',
                pokemon: ['boldore', 'woobat', 'aron', 'axew', 'drilbur'],
                order: 18
              },
              {
                location: 'Chargestone Cave',
                pokemon: [
                  'joltik',
                  'klink',
                  'ferroseed',
                  'nosepass',
                  'boldore',
                  'tynamo',
                  'drilbur'
                ],
                order: 19
              },
              {
                location: 'Route 7',
                pokemon: [
                  'tranquill',
                  'cubchoo',
                  'zebstrika',
                  'deerling',
                  'watchog',
                  'zangoose',
                  'seviper',
                  'foongus',
                  'audino',
                  'emolga',
                  'unfezant'
                ],
                order: 20
              },
              {
                location: 'Celestial Tower',
                pokemon: ['litwick', 'elgyem', 'golbat'],
                order: 21
              },
              {
                location: 'Strange House',
                pokemon: [
                  'litwick',
                  'gothita',
                  'solosis',
                  'raticate',
                  'golbat',
                  'banette',
                  'gothorita',
                  'duosion'
                ],
                order: 22
              },
              {
                location: 'Reversal Mountain',
                pokemon: [
                  'skorupi',
                  'spoink',
                  'numel',
                  'drifblim',
                  'trapinch',
                  'camerupt',
                  'grumpig',
                  'skarmory',
                  'audino',
                  'vibrava',
                  'woobat',
                  'boldore',
                  'excadrill'
                ],
                order: 23
              },
              {
                location: 'Undella Town',
                pokemon: ['frillish', 'staryu', 'basculin', 'starmie'],
                order: 24
              },
              {
                location: 'Undella Bay',
                pokemon: [
                  'frillish',
                  'mantyke',
                  'spheal',
                  'remoraid',
                  'wailmer',
                  'jellicent',
                  'sealeo',
                  'wailord',
                  'mantine',
                  'walrein'
                ],
                order: 24
              },
              {
                location: 'Route 13',
                pokemon: [
                  'tangela',
                  'pelipper',
                  'drifblim',
                  'absol',
                  'lunatone',
                  'solrock',
                  'audino',
                  'emolga',
                  'tangrowth',
                  'frillish',
                  'staryu',
                  'basculin',
                  'jellicent',
                  'starmie',
                  'foongus',
                  'drifloon',
                  'spheal'
                ],
                order: 25
              },
              {
                location: 'Route 12',
                pokemon: [
                  'roselia',
                  'tranquill',
                  'combee',
                  'heracross',
                  'pinsir',
                  'sewaddle',
                  'audino',
                  'dunsparce',
                  'emolga',
                  'roserade',
                  'vespiquen',
                  'unfezant',
                  'leavanny'
                ],
                order: 27
              },
              {
                location: 'Village Bridge',
                pokemon: [
                  'golduck',
                  'marill',
                  'zangoose',
                  'seviper',
                  'audino',
                  'dunsparce',
                  'emolga',
                  'azumarill',
                  'basculin',
                  'lapras'
                ],
                order: 28
              },
              {
                location: 'Route 11',
                pokemon: [
                  'shelmet',
                  'karrablast',
                  'golduck',
                  'gligar',
                  'marill',
                  'zangoose',
                  'seviper',
                  'amoonguss',
                  'audino',
                  'emolga',
                  'azumarill',
                  'gliscor',
                  'basculin',
                  'buizel',
                  'floatzel'
                ],
                order: 29
              },
              {
                location: 'Route 9',
                pokemon: [
                  'minccino',
                  'gothorita',
                  'duosion',
                  'garbodor',
                  'pawniard',
                  'liepard',
                  'muk',
                  'audino',
                  'emolga',
                  'cinccino',
                  'gothitelle',
                  'reuniclus',
                  'bouffalant'
                ],
                order: 31
              },
              {
                location: 'Humilau City',
                pokemon: [
                  'frillish',
                  'staryu',
                  'basculin',
                  'corsola',
                  'starmie'
                ],
                order: 32
              },
              {
                location: 'Route 22',
                pokemon: [
                  'mienfoo',
                  'amoonguss',
                  'golduck',
                  'marill',
                  'pelipper',
                  'lunatone',
                  'solrock',
                  'delibird',
                  'audino',
                  'emolga',
                  'azumarill',
                  'basculin'
                ],
                order: 33
              },
              {
                location: 'Route 21',
                pokemon: [
                  'frillish',
                  'mantyke',
                  'remoraid',
                  'jellicent',
                  'alomomola',
                  'mantine'
                ],
                order: 35
              },
              {
                location: 'Seaside Cave',
                pokemon: [
                  'golduck',
                  'woobat',
                  'boldore',
                  'seel',
                  'tynamo',
                  'excadrill',
                  'shuckle',
                  'eelektrik',
                  'frillish',
                  'seel',
                  'jellicent',
                  'dewgong'
                ],
                order: 36
              },
              {
                location: 'Giant Chasm',
                pokemon: [
                  'tangela',
                  'pelipper',
                  'clefairy',
                  'lunatone',
                  'solrock',
                  'vanillish',
                  'delibird',
                  'audino',
                  'clefable',
                  'tangrowth',
                  'vanilluxe',
                  'piloswine',
                  'sneasel',
                  'excadrill',
                  'basculin',
                  'seel',
                  'dewgong',
                  'ditto',
                  'metang',
                  'metagross',
                  'mamoswine'
                ],
                order: 38
              },
              {
                location: 'Route 23',
                pokemon: [
                  'sawk',
                  'throh',
                  'bouffalant',
                  'mienfoo',
                  'golduck',
                  'gligar',
                  'amoonguss',
                  'vullaby',
                  'rufflet',
                  'mienshao',
                  'audino',
                  'emolga',
                  'gliscor',
                  'basculin',
                  'buizel',
                  'floatzel',
                  'zangoose',
                  'seviper',
                  'absol'
                ],
                order: 39
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'banette',
                  'golurk',
                  'basculin',
                  'marill',
                  'azumarill',
                  'cottonee',
                  'petilil',
                  'roselia',
                  'audino',
                  'dunsparce',
                  'roserade',
                  'whimsicott',
                  'lilligant',
                  'tranquill',
                  'altaria',
                  'unfezant',
                  'buizel',
                  'floatzel',
                  'boldore',
                  'onix',
                  'excadrill',
                  'druddigon',
                  'zweilous',
                  'gurdurr',
                  'throh',
                  'sawk'
                ],
                order: 40
              }
            ]
          },
          _a(ya.Black2White2),
          [
            [
              'weedle',
              'kakuna',
              'beedrill',
              'magmar',
              'spinarak',
              'ariados',
              'sudowoodo',
              'heracross',
              'magby',
              'plusle',
              'volbeat',
              'spoink',
              'grumpig',
              'registeel',
              'latios',
              'buneary',
              'lopunny',
              'stunky',
              'skuntank',
              'bonsly',
              'gible',
              'gabite',
              'garchomp',
              'magmortar',
              'cottonee',
              'whimsicott',
              'gothita',
              'gothorita',
              'gothitelle',
              'vullaby',
              'manidbuzz',
              'zekrom'
            ],
            [
              'caterpie',
              'metapod',
              'butterfree',
              'mr. mime',
              'electabuzz',
              'pinsir',
              'ledyba',
              'ledian',
              'elekid',
              'skitty',
              'delcatty',
              'minun',
              'illumise',
              'numel',
              'camerupt',
              'regice',
              'latias',
              'glameow',
              'purugly',
              'mime jr.',
              'electivire',
              'petilil',
              'lilligant',
              'solosis',
              'duosion',
              'reuniclus',
              'rufflet',
              'braviary',
              'reshiram'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.Crystal,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['chikorita', 'cyndaquil', 'totodile'],
                order: 0
              },
              { location: 'Violet City Egg', pokemon: ['togepi'], order: 8 },
              {
                location: 'Odd Egg',
                pokemon: [
                  'pichu',
                  'cleffa',
                  'igglybuff',
                  'tyrogue',
                  'smoochum',
                  'elekid',
                  'magby'
                ],
                order: 18
              },
              { location: 'Goldenrod City', pokemon: ['eevee'], order: 19 },
              { location: 'Route 35', pokemon: ['spearow'], order: 21 },
              { location: 'Cianwood City', pokemon: ['shuckle'], order: 36 },
              { location: 'Mt. Mortar', pokemon: ['tyrogue'], order: 50 },
              { location: "Dragon's Den", pokemon: ['dratini'], order: 48 }
            ],
            statics: [
              { location: 'Union Cave', pokemon: ['lapras'], order: 13 },
              { location: 'Route 36', pokemon: ['sudowoodo'], order: 24 },
              { location: 'Lake of Rage', pokemon: ['gyarados'], order: 43 },
              { location: 'Vermilion City', pokemon: ['snorlax'], order: 80 },
              { location: 'Roaming Raikou', pokemon: ['raikou'], order: 28 },
              { location: 'Roaming Entei', pokemon: ['entei'], order: 29 },
              { location: 'Whirl Islands', pokemon: ['lugia'], order: 52 },
              { location: 'Tin Tower - Ho-Oh', pokemon: ['ho-oh'], order: 40 },
              {
                location: 'Tin Tower - Suicune',
                pokemon: ['suicune'],
                order: 39
              }
            ],
            encounters: [
              {
                location: 'Celadon City',
                pokemon: ['grimer', 'muk'],
                order: 70
              },
              {
                location: 'Cerulean City',
                pokemon: ['goldeen', 'seaking', 'magikarp'],
                order: 66
              },
              {
                location: 'Cinnabar Island',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 90
              },
              {
                location: "Diglett's Cave",
                pokemon: ['diglett', 'dugtrio'],
                order: 81
              },
              {
                location: 'Fuchsia City',
                pokemon: ['magikarp', 'gyarados'],
                order: 74
              },
              {
                location: 'Mt. Moon',
                pokemon: ['sandshrew', 'clefairy', 'zubat', 'paras', 'geodude'],
                order: 84
              },
              {
                location: 'Pallet Town',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 88
              },
              {
                location: 'Rock Tunnel',
                pokemon: [
                  'zubat',
                  'machop',
                  'machoke',
                  'geodude',
                  'haunter',
                  'onix',
                  'cubone',
                  'marowak',
                  'golbat',
                  'kangaskhan'
                ],
                order: 64
              },
              {
                location: 'Route 1',
                pokemon: [
                  'pidgey',
                  'rattata',
                  'raticate',
                  'sentret',
                  'furret',
                  'hoothoot'
                ],
                order: 87
              },
              {
                location: 'Route 10',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'zubat',
                  'venonat',
                  'venomoth',
                  'voltorb',
                  'marowak',
                  'goldeen',
                  'seaking',
                  'electabuzz',
                  'magikarp'
                ],
                order: 63
              },
              {
                location: 'Route 11',
                pokemon: [
                  'pidgeotto',
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'drowzee',
                  'hypno',
                  'noctowl',
                  'hoppip'
                ],
                order: 79
              },
              {
                location: 'Route 12',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'quagsire',
                  'qwilfish'
                ],
                order: 78
              },
              {
                location: 'Route 13',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'venonat',
                  'venomoth',
                  'tentacool',
                  'tentacruel',
                  'chansey',
                  'magikarp',
                  'noctowl',
                  'hoppip',
                  'quagsire',
                  'qwilfish'
                ],
                order: 77
              },
              {
                location: 'Route 14',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'venonat',
                  'venomoth',
                  'chansey',
                  'noctowl',
                  'hoppip',
                  'skiploom',
                  'quagsire'
                ],
                order: 76
              },
              {
                location: 'Route 15',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'venonat',
                  'venomoth',
                  'chansey',
                  'noctowl',
                  'hoppip',
                  'quagsire'
                ],
                order: 75
              },
              {
                location: 'Route 16',
                pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma'],
                order: 71
              },
              {
                location: 'Route 17',
                pokemon: ['fearow', 'grimer', 'muk', 'slugma'],
                order: 72
              },
              {
                location: 'Route 18',
                pokemon: ['fearow', 'grimer', 'muk', 'slugma'],
                order: 73
              },
              {
                location: 'Route 2',
                pokemon: [
                  'caterpie',
                  'butterfree',
                  'pidgey',
                  'pidgeotto',
                  'pikachu',
                  'hoothoot',
                  'noctowl',
                  'ledyba',
                  'ledian',
                  'spinarak',
                  'ariados'
                ],
                order: 82
              },
              {
                location: 'Route 22',
                pokemon: [
                  'rattata',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'doduo',
                  'magikarp'
                ],
                order: 93
              },
              {
                location: 'Route 24',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'oddish',
                  'gloom',
                  'venonat',
                  'abra',
                  'bellsprout',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'sunkern'
                ],
                order: 67
              },
              {
                location: 'Route 25',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'venonat',
                  'bellsprout',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'hoothoot',
                  'noctowl'
                ],
                order: 68
              },
              {
                location: 'Route 26',
                pokemon: [
                  'raticate',
                  'arbok',
                  'sandslash',
                  'tentacool',
                  'tentacruel',
                  'ponyta',
                  'doduo',
                  'shellder',
                  'magikarp',
                  'noctowl',
                  'chinchou',
                  'lanturn',
                  'quagsire'
                ],
                order: 57
              },
              {
                location: 'Route 27',
                pokemon: [
                  'raticate',
                  'arbok',
                  'tentacool',
                  'tentacruel',
                  'ponyta',
                  'doduo',
                  'dodrio',
                  'shellder',
                  'magikarp',
                  'noctowl',
                  'chinchou',
                  'lanturn',
                  'quagsire'
                ],
                order: 55
              },
              {
                location: 'Route 28',
                pokemon: [
                  'arbok',
                  'golbat',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'rapidash',
                  'doduo',
                  'dodrio',
                  'tangela',
                  'magikarp'
                ],
                order: 94
              },
              {
                location: 'Route 3',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'ekans',
                  'arbok',
                  'clefairy',
                  'zubat'
                ],
                order: 83
              },
              {
                location: 'Route 4',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'ekans',
                  'arbok',
                  'clefairy',
                  'zubat',
                  'goldeen',
                  'seaking'
                ],
                order: 85
              },
              {
                location: 'Route 5',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'jigglypuff',
                  'meowth',
                  'abra',
                  'hoothoot',
                  'noctowl',
                  'snubbull'
                ],
                order: 69
              },
              {
                location: 'Route 6',
                pokemon: [
                  'rattata',
                  'raticate',
                  'jigglypuff',
                  'meowth',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'magnemite',
                  'drowzee',
                  'magikarp',
                  'snubbull',
                  'granbull'
                ],
                order: 60
              },
              {
                location: 'Route 7',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'jigglypuff',
                  'meowth',
                  'persian',
                  'abra',
                  'murkrow',
                  'snubbull',
                  'houndour'
                ],
                order: 61
              },
              {
                location: 'Route 8',
                pokemon: [
                  'pidgeotto',
                  'jigglypuff',
                  'meowth',
                  'growlithe',
                  'abra',
                  'kadabra',
                  'haunter',
                  'noctowl',
                  'snubbull'
                ],
                order: 62
              },
              {
                location: 'Route 9',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'fearow',
                  'zubat',
                  'venonat',
                  'venomoth',
                  'marowak',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 65
              },
              {
                location: 'Route 19',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 92
              },
              {
                location: 'Route 20',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 91
              },
              {
                location: 'Route 21',
                pokemon: [
                  'rattata',
                  'raticate',
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'tangela',
                  'mr. mime',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 89
              },
              {
                location: 'Vermilion City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 59
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'sandslash',
                  'golbat',
                  'graveler',
                  'onix',
                  'rhyhorn',
                  'rhydon'
                ],
                order: 58
              },
              {
                location: 'Viridian City',
                pokemon: ['poliwag', 'poliwhirl'],
                order: 86
              },
              {
                location: 'Bell Tower',
                pokemon: ['rattata', 'gastly'],
                order: 38
              },
              {
                location: 'Blackthorn City',
                pokemon: ['poliwag', 'magikarp'],
                order: 46
              },
              {
                location: 'Burned Tower',
                pokemon: ['rattata', 'raticate', 'zubat', 'koffing', 'weezing'],
                order: 27
              },
              {
                location: 'Cherrygrove City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 3
              },
              {
                location: 'Cianwood City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'shuckle',
                  'corsola'
                ],
                order: 35
              },
              {
                location: 'Dark Cave',
                pokemon: [
                  'zubat',
                  'geodude',
                  'krabby',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'dunsparce',
                  'shuckle',
                  'teddiursa',
                  'golbat',
                  'graveler',
                  'wobbuffet',
                  'ursaring'
                ],
                order: 6
              },
              {
                location: "Dragon's Den",
                pokemon: ['magikarp', 'dratini', 'dragonair'],
                order: 47
              },
              {
                location: 'Ecruteak City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
                order: 26
              },
              {
                location: 'Ice Path',
                pokemon: ['golbat', 'jynx', 'swinub', 'delibird', 'sneasel'],
                order: 45
              },
              {
                location: 'Ilex Forest',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'oddish',
                  'paras',
                  'venonat',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'magikarp',
                  'hoothoot'
                ],
                order: 16
              },
              {
                location: 'Lake of Rage',
                pokemon: ['magikarp', 'gyarados'],
                order: 42
              },
              {
                location: 'Mt. Mortar',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'golbat',
                  'machop',
                  'geodude',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'marill',
                  'machoke',
                  'graveler'
                ],
                order: 49
              },
              {
                location: 'Mt. Silver',
                pokemon: [
                  'golbat',
                  'parasect',
                  'golduck',
                  'machoke',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'quagsire',
                  'misdreavus',
                  'ursaring',
                  'larvitar',
                  'arbok',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'rapidash',
                  'doduo',
                  'dodrio',
                  'tangela',
                  'graveler',
                  'onix',
                  'magmar',
                  'pupitar'
                ],
                order: 95
              },
              {
                location: 'National Park',
                pokemon: [
                  'caterpie',
                  'weedle',
                  'pidgey',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'venonat',
                  'psyduck',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'sunkern'
                ],
                order: 22
              },
              {
                location: 'New Bark Town',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 1
              },
              {
                location: 'Olivine City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 32
              },
              {
                location: 'Route 29',
                pokemon: ['pidgey', 'rattata', 'sentret', 'hoothoot', 'hoppip'],
                order: 2
              },
              {
                location: 'Route 30',
                pokemon: [
                  'caterpie',
                  'weedle',
                  'pidgey',
                  'zubat',
                  'poliwag',
                  'poliwhirl',
                  'magikarp',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'hoppip'
                ],
                order: 4
              },
              {
                location: 'Route 31',
                pokemon: [
                  'caterpie',
                  'weedle',
                  'pidgey',
                  'zubat',
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'gastly',
                  'magikarp',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'hoppip'
                ],
                order: 5
              },
              {
                location: 'Route 32',
                pokemon: [
                  'pidgey',
                  'rattata',
                  'ekans',
                  'zubat',
                  'bellsprout',
                  'tentacool',
                  'tentacruel',
                  'gastly',
                  'magikarp',
                  'hoothoot',
                  'hoppip',
                  'wooper',
                  'quagsire',
                  'qwilfish'
                ],
                order: 10
              },
              {
                location: 'Route 33',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'zubat',
                  'geodude',
                  'hoppip'
                ],
                order: 14
              },
              {
                location: 'Route 34',
                pokemon: [
                  'pidgey',
                  'rattata',
                  'jigglypuff',
                  'abra',
                  'tentacool',
                  'tentacruel',
                  'drowzee',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'ditto',
                  'hoothoot',
                  'snubbull',
                  'corsola'
                ],
                order: 17
              },
              {
                location: 'Route 35',
                pokemon: [
                  'pidgey',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'jigglypuff',
                  'meowth',
                  'psyduck',
                  'golduck',
                  'growlithe',
                  'poliwag',
                  'abra',
                  'drowzee',
                  'magikarp',
                  'ditto',
                  'hoothoot',
                  'yanma',
                  'snubbull'
                ],
                order: 20
              },
              {
                location: 'Route 36',
                pokemon: [
                  'pidgey',
                  'growlithe',
                  'bellsprout',
                  'gastly',
                  'hoothoot',
                  'ledyba',
                  'spinarak'
                ],
                order: 23
              },
              {
                location: 'Route 37',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'growlithe',
                  'hoothoot',
                  'noctowl',
                  'spinarak',
                  'ariados',
                  'stantler'
                ],
                order: 25
              },
              {
                location: 'Route 38',
                pokemon: [
                  'pidgeotto',
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'tauros',
                  'noctowl',
                  'miltank'
                ],
                order: 30
              },
              {
                location: 'Route 39',
                pokemon: [
                  'pidgeotto',
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'tauros',
                  'noctowl',
                  'miltank'
                ],
                order: 31
              },
              {
                location: 'Route 42',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'fearow',
                  'ekans',
                  'arbok',
                  'zubat',
                  'golbat',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'marill'
                ],
                order: 37
              },
              {
                location: 'Route 43',
                pokemon: [
                  'pidgeotto',
                  'raticate',
                  'venonat',
                  'venomoth',
                  'poliwag',
                  'farfetchd',
                  'magikarp',
                  'sentret',
                  'furret',
                  'hoothoot'
                ],
                order: 41
              },
              {
                location: 'Route 44',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'weepinbell',
                  'lickitung',
                  'tangela',
                  'magikarp'
                ],
                order: 44
              },
              {
                location: 'Route 45',
                pokemon: [
                  'geodude',
                  'graveler',
                  'magikarp',
                  'dratini',
                  'dragonair',
                  'gligar',
                  'skarmory',
                  'phanpy',
                  'donphan'
                ],
                order: 53
              },
              {
                location: 'Route 46',
                pokemon: ['rattata', 'spearow', 'geodude', 'phanpy'],
                order: 54
              },
              {
                location: 'Ruins of Alph',
                pokemon: [
                  'poliwag',
                  'magikarp',
                  'natu',
                  'wooper',
                  'quagsire',
                  'smeargle',
                  'unown'
                ],
                order: 11
              },
              {
                location: 'Route 40',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'shuckle',
                  'corsola'
                ],
                order: 33
              },
              {
                location: 'Route 41',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'mantine'
                ],
                order: 34
              },
              {
                location: 'Slowpoke Well',
                pokemon: [
                  'zubat',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'golbat',
                  'slowbro'
                ],
                order: 15
              },
              {
                location: 'Sprout Tower',
                pokemon: ['rattata', 'gastly'],
                order: 9
              },
              {
                location: 'Tohjo Falls',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'golbat',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 56
              },
              {
                location: 'Union Cave',
                pokemon: [
                  'rattata',
                  'sandshrew',
                  'zubat',
                  'geodude',
                  'onix',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'wooper',
                  'quagsire',
                  'raticate',
                  'golbat',
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'corsola'
                ],
                order: 12
              },
              {
                location: 'Violet City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
                order: 7
              },
              {
                location: 'Whirl Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'tentacruel',
                  'seel',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp'
                ],
                order: 51
              }
            ]
          },
          _a(ya.Crystal),
          [[], []]
        ),
        ...fa(
          {
            game: ya.DiamondPearl,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['turtwig', 'piplup', 'chimchar'],
                order: 0
              },
              {
                location: 'Hearthome City Egg',
                pokemon: ['happiny'],
                order: 25
              },
              { location: 'Iron Island Egg', pokemon: ['riolu'], order: 44 }
            ],
            statics: [
              {
                location: 'Valley Windworks',
                pokemon: ['drifloon'],
                order: 15
              },
              { location: 'Hallowed Tower', pokemon: ['spiritomb'], order: 61 },
              { location: 'Lake Acuity', pokemon: ['uxie'], order: 54 },
              { location: 'Lake Valor', pokemon: ['azelf'], order: 55 },
              {
                location: 'Roaming Lake Guardian',
                pokemon: ['mesprit'],
                order: 56
              },
              {
                location: 'Spear Pillar',
                pokemon: ['dialga', 'palkia'],
                order: 49
              }
            ],
            encounters: [
              {
                location: 'Acuity Lakefront',
                pokemon: [
                  'zubat',
                  'machoke',
                  'noctowl',
                  'sneasel',
                  'teddiursa',
                  'meditite',
                  'medicham',
                  'snorunt',
                  'snover'
                ],
                order: 47
              },
              {
                location: 'Canalave City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'staryu',
                  'magikarp',
                  'gyarados',
                  'wingull',
                  'pelipper',
                  'finneon',
                  'lumineon'
                ],
                order: 42
              },
              {
                location: 'Celestic Town',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash',
                  'corphish',
                  'crawdaunt'
                ],
                order: 40
              },
              {
                location: 'Eterna City',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash',
                  'togepi'
                ],
                order: 18
              },
              {
                location: 'Eterna Forest',
                pokemon: [
                  'metapod',
                  'kakuna',
                  'murkrow',
                  'misdreavus',
                  'pineco',
                  'wurmple',
                  'silcoon',
                  'beautifly',
                  'cascoon',
                  'dustox',
                  'seedot',
                  'slakoth',
                  'nincada',
                  'budew',
                  'buneary'
                ],
                order: 17
              },
              {
                location: 'Fuego Ironworks',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magnemite',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'hoppip',
                  'skiploom',
                  'wingull',
                  'pelipper',
                  'aron',
                  'shinx',
                  'luxio',
                  'pachirisu',
                  'floatzel',
                  'shellos',
                  'gastrodon',
                  'finneon',
                  'lumineon'
                ],
                order: 41
              },
              {
                location: 'Great Marsh',
                pokemon: [
                  'arbok',
                  'psyduck',
                  'magikarp',
                  'gyarados',
                  'hoothoot',
                  'noctowl',
                  'marill',
                  'wooper',
                  'quagsire',
                  'azurill',
                  'carvanha',
                  'barboach',
                  'whiscash',
                  'starly',
                  'bidoof',
                  'bibarel',
                  'budew'
                ],
                order: 37
              },
              {
                location: 'Iron Island',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'qwilfish',
                  'wingull',
                  'pelipper',
                  'finneon',
                  'lumineon',
                  'zubat',
                  'golbat',
                  'geodude',
                  'graveler',
                  'onix',
                  'sableye',
                  'mawile',
                  'steelix'
                ],
                order: 43
              },
              {
                location: 'Lake Acuity',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'noctowl',
                  'wobbuffet',
                  'sneasel',
                  'ursaring',
                  'smoochum',
                  'lunatone',
                  'solrock',
                  'bibarel',
                  'chingling'
                ],
                order: 48
              },
              {
                location: 'Lake Valor',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'lickitung',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'noctowl',
                  'wobbuffet',
                  'lunatone',
                  'solrock',
                  'staravia',
                  'bibarel',
                  'chingling'
                ],
                order: 34
              },
              {
                location: 'Lake Verity',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'wobbuffet',
                  'surskit',
                  'lunatone',
                  'solrock',
                  'starly',
                  'staravia',
                  'bidoof',
                  'bibarel'
                ],
                order: 3
              },
              {
                location: 'Lost Tower',
                pokemon: ['zubat', 'gastly', 'murkrow', 'misdreavus', 'golbat'],
                order: 27
              },
              {
                location: 'Mt. Coronet',
                pokemon: [
                  'clefairy',
                  'zubat',
                  'golbat',
                  'machop',
                  'geodude',
                  'magikarp',
                  'gyarados',
                  'cleffa',
                  'meditite',
                  'barboach',
                  'whiscash',
                  'chingling',
                  'bronzor',
                  'machoke',
                  'graveler',
                  'medicham',
                  'lunatone',
                  'solrock',
                  'bronzong',
                  'noctowl',
                  'loudred',
                  'snover',
                  'abomasnow',
                  'dratini',
                  'dragonair',
                  'chimecho'
                ],
                order: 23
              },
              {
                location: 'Old Chateau',
                pokemon: ['gastly', 'haunter', 'gengar'],
                order: 19
              },
              {
                location: 'Oreburgh Gate',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'geodude',
                  'golbat',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash'
                ],
                order: 10
              },
              {
                location: 'Oreburgh Mine',
                pokemon: ['zubat', 'geodude', 'onix'],
                order: 12
              },
              {
                location: 'Pastoria City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'wingull',
                  'pelipper'
                ],
                order: 36
              },
              {
                location: 'Pok\xe9mon League',
                pokemon: [
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'pelipper',
                  'luvdisc'
                ],
                order: 60
              },
              {
                location: 'Ravaged Path',
                pokemon: [
                  'zubat',
                  'golbat',
                  'psyduck',
                  'golduck',
                  'geodude',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash'
                ],
                order: 8
              },
              {
                location: 'Route 201',
                pokemon: [
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'growlithe',
                  'doduo',
                  'starly',
                  'bidoof'
                ],
                order: 2
              },
              {
                location: 'Route 202',
                pokemon: [
                  'growlithe',
                  'sentret',
                  'zigzagoon',
                  'starly',
                  'bidoof',
                  'kricketot',
                  'shinx'
                ],
                order: 4
              },
              {
                location: 'Route 203',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'golduck',
                  'abra',
                  'cubone',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'pineco',
                  'lotad',
                  'seedot',
                  'ralts',
                  'kirlia',
                  'starly',
                  'bidoof',
                  'kricketot',
                  'shinx'
                ],
                order: 9
              },
              {
                location: 'Route 204',
                pokemon: [
                  'caterpie',
                  'weedle',
                  'zubat',
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'pineco',
                  'lotad',
                  'seedot',
                  'ralts',
                  'kirlia',
                  'starly',
                  'bidoof',
                  'kricketot',
                  'shinx',
                  'budew',
                  'sunkern'
                ],
                order: 7
              },
              {
                location: 'Route 205',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'hoppip',
                  'elekid',
                  'wingull',
                  'pelipper',
                  'bidoof',
                  'pachirisu',
                  'buizel',
                  'shellos',
                  'finneon',
                  'lumineon',
                  'psyduck',
                  'golduck',
                  'slowpoke',
                  'skiploom',
                  'lotad',
                  'barboach',
                  'whiscash'
                ],
                order: 16
              },
              {
                location: 'Route 206',
                pokemon: [
                  'zubat',
                  'geodude',
                  'ponyta',
                  'gligar',
                  'nosepass',
                  'baltoy',
                  'kricketot',
                  'kricketune',
                  'stunky',
                  'bronzor'
                ],
                order: 21
              },
              {
                location: 'Route 207',
                pokemon: [
                  'zubat',
                  'machop',
                  'geodude',
                  'gligar',
                  'phanpy',
                  'stantler',
                  'larvitar',
                  'kricketot'
                ],
                order: 11
              },
              {
                location: 'Route 208',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'golduck',
                  'machop',
                  'magikarp',
                  'gyarados',
                  'dunsparce',
                  'tyrogue',
                  'meditite',
                  'zangoose',
                  'seviper',
                  'barboach',
                  'whiscash',
                  'bidoof',
                  'bibarel'
                ],
                order: 24
              },
              {
                location: 'Route 209',
                pokemon: [
                  'vulpix',
                  'zubat',
                  'psyduck',
                  'golduck',
                  'gastly',
                  'chansey',
                  'goldeen',
                  'seaking',
                  'tauros',
                  'magikarp',
                  'gyarados',
                  'snubbull',
                  'miltank',
                  'starly',
                  'staravia',
                  'bibarel',
                  'bonsly',
                  'mime jr.'
                ],
                order: 26
              },
              {
                location: 'Route 210',
                pokemon: [
                  'geodude',
                  'ponyta',
                  'chansey',
                  'tauros',
                  'hoothoot',
                  'noctowl',
                  'pineco',
                  'miltank',
                  'seedot',
                  'nuzleaf',
                  'kricketune',
                  'bonsly',
                  'mime jr.',
                  'psyduck',
                  'golduck',
                  'machop',
                  'machoke',
                  'magikarp',
                  'gyarados',
                  'meditite',
                  'zangoose',
                  'seviper',
                  'barboach',
                  'whiscash',
                  'kecleon',
                  'bagon',
                  'bibarel'
                ],
                order: 29
              },
              {
                location: 'Route 211',
                pokemon: [
                  'zubat',
                  'geodude',
                  'ponyta',
                  'hoothoot',
                  'teddiursa',
                  'tyrogue',
                  'meditite',
                  'bidoof',
                  'chingling',
                  'machoke',
                  'graveler',
                  'noctowl',
                  'swablu'
                ],
                order: 20
              },
              {
                location: 'Route 212',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'smeargle',
                  'roselia',
                  'starly',
                  'staravia',
                  'kricketune',
                  'budew',
                  'ekans',
                  'grimer',
                  'wooper',
                  'quagsire',
                  'lotad',
                  'lombre',
                  'barboach',
                  'whiscash',
                  'bibarel'
                ],
                order: 38
              },
              {
                location: 'Route 213',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'swellow',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'absol',
                  'buizel',
                  'floatzel',
                  'shellos'
                ],
                order: 35
              },
              {
                location: 'Route 214',
                pokemon: [
                  'vulpix',
                  'psyduck',
                  'golduck',
                  'geodude',
                  'graveler',
                  'ponyta',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'sudowoodo',
                  'girafarig',
                  'gligar',
                  'houndoom',
                  'mightyena',
                  'spoink',
                  'kricketune',
                  'stunky'
                ],
                order: 31
              },
              {
                location: 'Route 215',
                pokemon: [
                  'abra',
                  'kadabra',
                  'geodude',
                  'ponyta',
                  'drowzee',
                  'gligar',
                  'houndoom',
                  'mightyena',
                  'kricketune'
                ],
                order: 30
              },
              {
                location: 'Route 216',
                pokemon: [
                  'zubat',
                  'machoke',
                  'graveler',
                  'noctowl',
                  'sneasel',
                  'ursaring',
                  'delibird',
                  'meditite',
                  'snorunt',
                  'snover'
                ],
                order: 45
              },
              {
                location: 'Route 217',
                pokemon: [
                  'zubat',
                  'machoke',
                  'noctowl',
                  'sneasel',
                  'ursaring',
                  'swinub',
                  'meditite',
                  'medicham',
                  'snorunt',
                  'snover'
                ],
                order: 46
              },
              {
                location: 'Route 218',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'voltorb',
                  'mr. mime',
                  'magikarp',
                  'gyarados',
                  'ditto',
                  'wingull',
                  'pelipper',
                  'floatzel',
                  'shellos',
                  'gastrodon',
                  'glameow',
                  'finneon',
                  'lumineon'
                ],
                order: 6
              },
              {
                location: 'Route 219',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'wingull',
                  'pelipper',
                  'clamperl',
                  'finneon',
                  'lumineon'
                ],
                order: 5
              },
              {
                location: 'Route 221',
                pokemon: [
                  'nidorina',
                  'nidorino',
                  'tentacool',
                  'tentacruel',
                  'farfetchd',
                  'magikarp',
                  'gyarados',
                  'sudowoodo',
                  'wingull',
                  'pelipper',
                  'roselia',
                  'clamperl',
                  'floatzel',
                  'shellos',
                  'gastrodon',
                  'stunky',
                  'skuntank',
                  'finneon',
                  'lumineon'
                ],
                order: 51
              },
              {
                location: 'Route 222',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'mr. mime',
                  'magikarp',
                  'gyarados',
                  'flaaffy',
                  'remoraid',
                  'octillery',
                  'wingull',
                  'pelipper',
                  'skitty',
                  'sharpedo',
                  'floatzel',
                  'gastrodon',
                  'glameow',
                  'purugly',
                  'chatot'
                ],
                order: 52
              },
              {
                location: 'Route 224',
                pokemon: [
                  'gloom',
                  'weepinbell',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'natu',
                  'shuckle',
                  'remoraid',
                  'octillery',
                  'beautifly',
                  'pelipper',
                  'roselia',
                  'duskull',
                  'dusclops',
                  'luvdisc',
                  'buizel',
                  'floatzel',
                  'shellos',
                  'gastrodon',
                  'chatot'
                ],
                order: 59
              },
              {
                location: 'Ruin Maniac Cave',
                pokemon: ['geodude', 'hippopotas'],
                order: 32
              },
              {
                location: 'Route 220',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'chinchou',
                  'lanturn',
                  'wingull',
                  'pelipper',
                  'finneon',
                  'lumineon'
                ],
                order: 50
              },
              {
                location: 'Route 223',
                pokemon: [
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'pelipper',
                  'wailmer',
                  'wailord',
                  'mantyke'
                ],
                order: 57
              },
              { location: 'Solaceon Ruins', pokemon: ['unown'], order: 28 },
              {
                location: 'Sunyshore City',
                pokemon: [
                  'tentacruel',
                  'staryu',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'pelipper',
                  'mantyke'
                ],
                order: 53
              },
              {
                location: 'Trophy Garden',
                pokemon: [
                  'pikachu',
                  'pichu',
                  'roselia',
                  'staravia',
                  'kricketune'
                ],
                order: 39
              },
              {
                location: 'Twinleaf Town',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados'
                ],
                order: 1
              },
              {
                location: 'Valley Windworks',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'mareep',
                  'elekid',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'bidoof',
                  'pachirisu',
                  'buizel',
                  'shellos',
                  'finneon',
                  'lumineon'
                ],
                order: 14
              },
              {
                location: 'Valor Lakefront',
                pokemon: [
                  'nidorina',
                  'nidorino',
                  'geodude',
                  'graveler',
                  'girafarig',
                  'staravia',
                  'bibarel',
                  'kricketune'
                ],
                order: 33
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'golbat',
                  'machoke',
                  'graveler',
                  'onix',
                  'steelix',
                  'medicham',
                  'kadabra',
                  'magikarp',
                  'gyarados',
                  'floatzel',
                  'lapras'
                ],
                order: 58
              },
              {
                location: 'Wayward Cave',
                pokemon: ['sandshrew', 'zubat', 'geodude', 'bronzor', 'gible'],
                order: 22
              }
            ]
          },
          _a(ya.DiamondPearl),
          [
            [
              'seel',
              'dewgong',
              'scyther',
              'murkrow',
              'scizor',
              'larvitar',
              'pupitar',
              'tyranitar',
              'poochyena',
              'mightyena',
              'aron',
              'lairon',
              'aggron',
              'kecleon',
              'cranidos',
              'rampardos',
              'honchkrow',
              'stunky',
              'skuntank',
              'dialga'
            ],
            [
              'slowpoke',
              'slowbro',
              'pinsir',
              'slowking',
              'misdreavus',
              'houndour',
              'houndoom',
              'stantler',
              'spheal',
              'sealeo',
              'walrein',
              'bagon',
              'shelgon',
              'salamence',
              'sheildon',
              'bastiodon',
              'mismagius',
              'glameow',
              'purugly',
              'palkia'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.Emerald,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['treecko', 'torchic', 'mudkip'],
                order: 0
              },
              { location: 'Lavaridge Town', pokemon: ['wynaut'], order: 27 },
              {
                location: 'Weather Institute',
                pokemon: ['castform'],
                order: 36
              },
              {
                location: 'Route 111 Fossil',
                pokemon: ['lileep', 'anorith'],
                order: 29
              }
            ],
            statics: [
              { location: 'Devon Scope', pokemon: ['kecleon'], order: 38 },
              { location: 'Team Hideout', pokemon: ['electrode'], order: 46 },
              { location: 'Sky Pillar', pokemon: ['rayquaza'], order: 62 },
              { location: 'Ancient Tomb', pokemon: ['registeel'], order: 66 },
              { location: 'Desert Ruins', pokemon: ['regirock'], order: 67 },
              { location: 'Island Cave', pokemon: ['regice'], order: 68 }
            ],
            encounters: [
              {
                location: 'Abandoned Ship',
                pokemon: ['tentacool', 'tentacruel', 'magikarp'],
                order: 34
              },
              {
                location: 'Cave of Origin',
                pokemon: ['zubat', 'golbat', 'sableye'],
                order: 56
              },
              {
                location: 'Dewford Town',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 9
              },
              {
                location: 'Ever Grande City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'corsola',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'luvdisc'
                ],
                order: 69
              },
              {
                location: 'Fiery Path',
                pokemon: [
                  'machop',
                  'grimer',
                  'koffing',
                  'slugma',
                  'numel',
                  'torkoal'
                ],
                order: 21
              },
              {
                location: 'Granite Cave',
                pokemon: [
                  'zubat',
                  'abra',
                  'geodude',
                  'makuhita',
                  'sableye',
                  'aron',
                  'nosepass'
                ],
                order: 11
              },
              {
                location: 'Jagged Pass',
                pokemon: ['machop', 'numel', 'spoink'],
                order: 26
              },
              {
                location: 'Lilycove City',
                pokemon: [
                  'tentacool',
                  'staryu',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 41
              },
              {
                location: 'Magma Hideout',
                pokemon: ['geodude', 'graveler', 'torkoal'],
                order: 45
              },
              {
                location: 'Meteor Falls',
                pokemon: [
                  'zubat',
                  'goldeen',
                  'magikarp',
                  'solrock',
                  'barboach',
                  'golbat',
                  'whiscash',
                  'bagon'
                ],
                order: 24
              },
              {
                location: 'Mirage Tower',
                pokemon: ['sandshrew', 'trapinch'],
                order: 19
              },
              {
                location: 'Mossdeep City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 48
              },
              {
                location: 'Mt. Pyre',
                pokemon: [
                  'shuppet',
                  'duskull',
                  'vulpix',
                  'wingull',
                  'chimecho'
                ],
                order: 43
              },
              {
                location: 'New Mauville',
                pokemon: ['magnemite', 'voltorb', 'magneton', 'electrode'],
                order: 30
              },
              {
                location: 'Pacifidlog Town',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 60
              },
              {
                location: 'Petalburg City',
                pokemon: ['goldeen', 'magikarp', 'marill', 'corphish'],
                order: 4
              },
              {
                location: 'Petalburg Woods',
                pokemon: [
                  'poochyena',
                  'wurmple',
                  'silcoon',
                  'cascoon',
                  'taillow',
                  'shroomish',
                  'slakoth'
                ],
                order: 6
              },
              {
                location: 'Route 101',
                pokemon: ['poochyena', 'zigzagoon', 'wurmple'],
                order: 1
              },
              {
                location: 'Route 102',
                pokemon: [
                  'goldeen',
                  'magikarp',
                  'marill',
                  'poochyena',
                  'zigzagoon',
                  'wurmple',
                  'lotad',
                  'seedot',
                  'ralts',
                  'corphish'
                ],
                order: 3
              },
              {
                location: 'Route 103',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'poochyena',
                  'zigzagoon',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 2
              },
              {
                location: 'Route 104',
                pokemon: [
                  'magikarp',
                  'marill',
                  'poochyena',
                  'wurmple',
                  'taillow',
                  'wingull',
                  'pelipper'
                ],
                order: 31
              },
              {
                location: 'Route 105',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 32
              },
              {
                location: 'Route 106',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 10
              },
              {
                location: 'Route 107',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 12
              },
              {
                location: 'Route 108',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 33
              },
              {
                location: 'Route 109',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 13
              },
              {
                location: 'Route 110',
                pokemon: [
                  'oddish',
                  'tentacool',
                  'magikarp',
                  'poochyena',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'plusle',
                  'minun',
                  'gulpin',
                  'wailmer'
                ],
                order: 15
              },
              {
                location: 'Route 111',
                pokemon: [
                  'sandshrew',
                  'geodude',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'trapinch',
                  'cacnea',
                  'barboach',
                  'baltoy'
                ],
                order: 28
              },
              {
                location: 'Route 112',
                pokemon: ['marill', 'numel'],
                order: 20
              },
              {
                location: 'Route 113',
                pokemon: ['slugma', 'skarmory', 'spinda'],
                order: 22
              },
              {
                location: 'Route 114',
                pokemon: [
                  'geodude',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'lotad',
                  'lombre',
                  'nuzleaf',
                  'swablu',
                  'seviper',
                  'barboach'
                ],
                order: 23
              },
              {
                location: 'Route 115',
                pokemon: [
                  'jigglypuff',
                  'tentacool',
                  'magikarp',
                  'taillow',
                  'swellow',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'swablu'
                ],
                order: 25
              },
              {
                location: 'Route 116',
                pokemon: [
                  'abra',
                  'poochyena',
                  'taillow',
                  'nincada',
                  'whismur',
                  'skitty'
                ],
                order: 7
              },
              {
                location: 'Route 117',
                pokemon: [
                  'oddish',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'poochyena',
                  'seedot',
                  'volbeat',
                  'illumise',
                  'corphish'
                ],
                order: 16
              },
              {
                location: 'Route 118',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'manectric',
                  'carvanha',
                  'sharpedo',
                  'kecleon'
                ],
                order: 17
              },
              {
                location: 'Route 119',
                pokemon: [
                  'oddish',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'carvanha',
                  'kecleon',
                  'tropius'
                ],
                order: 35
              },
              {
                location: 'Route 120',
                pokemon: [
                  'oddish',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'poochyena',
                  'mightyena',
                  'seedot',
                  'barboach',
                  'kecleon',
                  'absol'
                ],
                order: 37
              },
              {
                location: 'Route 121',
                pokemon: [
                  'oddish',
                  'gloom',
                  'tentacool',
                  'magikarp',
                  'poochyena',
                  'mightyena',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'kecleon',
                  'shuppet'
                ],
                order: 39
              },
              {
                location: 'Route 122',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 42
              },
              {
                location: 'Route 123',
                pokemon: [
                  'oddish',
                  'gloom',
                  'tentacool',
                  'magikarp',
                  'poochyena',
                  'mightyena',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'kecleon',
                  'shuppet'
                ],
                order: 44
              },
              {
                location: 'Route 124',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'chinchou',
                  'clamperl',
                  'relicanth'
                ],
                order: 47
              },
              {
                location: 'Route 125',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 49
              },
              {
                location: 'Route 126',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'chinchou',
                  'clamperl',
                  'relicanth'
                ],
                order: 51
              },
              {
                location: 'Route 127',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 52
              },
              {
                location: 'Route 128',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'corsola',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'luvdisc'
                ],
                order: 53
              },
              {
                location: 'Route 129',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'wailord'
                ],
                order: 57
              },
              {
                location: 'Route 130',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'wynaut'
                ],
                order: 58
              },
              {
                location: 'Route 131',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 59
              },
              {
                location: 'Route 132',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 63
              },
              {
                location: 'Route 133',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 64
              },
              {
                location: 'Route 134',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 65
              },
              { location: 'Rusturf Tunnel', pokemon: ['whismur'], order: 8 },
              {
                location: 'Safari Zone',
                pokemon: [
                  'oddish',
                  'gloom',
                  'psyduck',
                  'golduck',
                  'doduo',
                  'dodrio',
                  'rhyhorn',
                  'goldeen',
                  'seaking',
                  'pinsir',
                  'magikarp',
                  'geodude',
                  'natu',
                  'xatu',
                  'heracross',
                  'phanpy',
                  'pikachu',
                  'wobbuffet',
                  'girafarig',
                  'hoothoot',
                  'spinarak',
                  'mareep',
                  'marill',
                  'aipom',
                  'sunkern',
                  'wooper',
                  'quagsire',
                  'gligar',
                  'snubbull',
                  'remoraid',
                  'octillery',
                  'stantler',
                  'ledyba',
                  'pineco',
                  'shuckle',
                  'teddiursa',
                  'houndour',
                  'miltank'
                ],
                order: 40
              },
              {
                location: 'Seafloor Cavern',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'magikarp',
                  'wailmer'
                ],
                order: 54
              },
              {
                location: 'Shoal Cave',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'magikarp',
                  'wailmer',
                  'spheal',
                  'snorunt'
                ],
                order: 50
              },
              {
                location: 'Sky Pillar',
                pokemon: ['golbat', 'sableye', 'claydol', 'banette', 'altaria'],
                order: 61
              },
              {
                location: 'Slateport City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 14
              },
              {
                location: 'Sootopolis City',
                pokemon: ['tentacool', 'magikarp', 'gyarados'],
                order: 55
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'zubat',
                  'golbat',
                  'whismur',
                  'loudred',
                  'makuhita',
                  'hariyama',
                  'aron',
                  'lairon',
                  'geodude',
                  'graveler',
                  'mawile',
                  'goldeen',
                  'magikarp',
                  'sableye',
                  'barboach',
                  'whiscash'
                ],
                order: 70
              }
            ]
          },
          _a(ya.Emerald),
          [[], []]
        ),
        ...fa(
          {
            game: ya.FireRedLeafGreen,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['bulbasaur', 'charmander', 'squirtle'],
                order: 0
              },
              { location: 'Route 4', pokemon: ['magikarp'], order: 9 },
              { location: 'Celadon City', pokemon: ['eevee'], order: 26 },
              {
                location: 'Saffron City',
                pokemon: ['hitmonchan', 'hitmonlee'],
                order: 28
              },
              { location: 'Silph Co.', pokemon: ['lapras'], order: 29 },
              {
                location: 'Mt. Moon Fossil',
                pokemon: ['omanyte', 'kabuto'],
                order: 46
              },
              {
                location: 'Old Amber Fossil',
                pokemon: ['aerodactyl'],
                order: 47
              }
            ],
            statics: [
              { location: 'Route 12', pokemon: ['snorlax'], order: 40 },
              { location: 'Route 16', pokemon: ['snorlax'], order: 30 },
              { location: 'Berry Forest', pokemon: ['hypno'], order: 56 },
              { location: 'Seafoam Islands', pokemon: ['articuno'], order: 42 },
              { location: 'Power Plant', pokemon: ['zapdos'], order: 59 },
              { location: 'Mt. Ember', pokemon: ['moltres'], order: 52 }
            ],
            encounters: [
              {
                location: 'Berry Forest',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'venomoth',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'bellsprout',
                  'weepinbell',
                  'slowpoke',
                  'slowbro',
                  'drowzee',
                  'hypno',
                  'exeggcute',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados'
                ],
                order: 55
              },
              {
                location: 'Bond Bridge',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'meowth',
                  'persian',
                  'psyduck',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'tentacruel',
                  'slowpoke',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'gyarados'
                ],
                order: 54
              },
              {
                location: 'Cape Brink',
                pokemon: [
                  'spearow',
                  'fearow',
                  'oddish',
                  'gloom',
                  'meowth',
                  'persian',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'weepinbell',
                  'slowpoke',
                  'slowbro',
                  'goldeen',
                  'magikarp',
                  'gyarados'
                ],
                order: 53
              },
              {
                location: 'Celadon City',
                pokemon: [
                  'psyduck',
                  'slowpoke',
                  'grimer',
                  'koffing',
                  'magikarp'
                ],
                order: 25
              },
              {
                location: 'Cerulean City',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'horsea',
                  'magikarp',
                  'gyarados'
                ],
                order: 11
              },
              {
                location: 'Cinnabar Island',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'slowbro',
                  'shellder',
                  'krabby',
                  'horsea',
                  'seadra',
                  'staryu',
                  'magikarp',
                  'gyarados'
                ],
                order: 44
              },
              {
                location: "Diglett's Cave",
                pokemon: ['diglett', 'dugtrio'],
                order: 18
              },
              {
                location: 'Fuchsia City',
                pokemon: [
                  'psyduck',
                  'poliwag',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados'
                ],
                order: 33
              },
              {
                location: 'Kindle Road',
                pokemon: [
                  'spearow',
                  'fearow',
                  'meowth',
                  'persian',
                  'psyduck',
                  'tentacool',
                  'tentacruel',
                  'geodude',
                  'graveler',
                  'ponyta',
                  'rapidash',
                  'slowpoke',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'gyarados'
                ],
                order: 50
              },
              {
                location: 'Mt. Ember',
                pokemon: [
                  'spearow',
                  'fearow',
                  'machop',
                  'geodude',
                  'graveler',
                  'ponyta',
                  'rapidash',
                  'magmar',
                  'machoke',
                  'slugma',
                  'magcargo'
                ],
                order: 51
              },
              {
                location: 'Mt. Moon',
                pokemon: ['clefairy', 'zubat', 'paras', 'geodude'],
                order: 10
              },
              {
                location: 'One Island',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'tentacruel',
                  'slowpoke',
                  'shellder',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'staryu',
                  'magikarp',
                  'gyarados'
                ],
                order: 48
              },
              {
                location: 'Pallet Town',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'shellder',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'staryu',
                  'magikarp',
                  'gyarados'
                ],
                order: 1
              },
              {
                location: 'Pok\xe9mon Mansion',
                pokemon: [
                  'rattata',
                  'raticate',
                  'vulpix',
                  'growlithe',
                  'grimer',
                  'muk',
                  'koffing',
                  'weezing',
                  'ditto'
                ],
                order: 45
              },
              {
                location: 'Pok\xe9mon Tower',
                pokemon: ['gastly', 'haunter', 'cubone'],
                order: 22
              },
              {
                location: 'Power Plant',
                pokemon: [
                  'pikachu',
                  'magnemite',
                  'magneton',
                  'voltorb',
                  'electabuzz'
                ],
                order: 49
              },
              {
                location: 'Rock Tunnel',
                pokemon: [
                  'zubat',
                  'mankey',
                  'machop',
                  'geodude',
                  'onix',
                  'graveler'
                ],
                order: 21
              },
              { location: 'Route 1', pokemon: ['pidgey', 'rattata'], order: 2 },
              {
                location: 'Route 2',
                pokemon: ['caterpie', 'weedle', 'pidgey', 'rattata'],
                order: 4
              },
              {
                location: 'Route 3',
                pokemon: [
                  'pidgey',
                  'spearow',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'jigglypuff',
                  'mankey'
                ],
                order: 3
              },
              {
                location: 'Route 4',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'sandshrew',
                  'psyduck',
                  'mankey',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'horsea',
                  'magikarp',
                  'gyarados'
                ],
                order: 8
              },
              {
                location: 'Route 5',
                pokemon: ['pidgey', 'oddish', 'meowth', 'bellsprout'],
                order: 14
              },
              {
                location: 'Route 6',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'meowth',
                  'psyduck',
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'slowpoke',
                  'goldeen',
                  'magikarp',
                  'gyarados'
                ],
                order: 15
              },
              {
                location: 'Route 7',
                pokemon: [
                  'pidgey',
                  'vulpix',
                  'oddish',
                  'meowth',
                  'growlithe',
                  'bellsprout'
                ],
                order: 23
              },
              {
                location: 'Route 8',
                pokemon: [
                  'pidgey',
                  'ekans',
                  'sandshrew',
                  'vulpix',
                  'meowth',
                  'growlithe'
                ],
                order: 24
              },
              {
                location: 'Route 9',
                pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew'],
                order: 19
              },
              {
                location: 'Route 10',
                pokemon: [
                  'spearow',
                  'ekans',
                  'sandshrew',
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'voltorb',
                  'horsea',
                  'magikarp',
                  'gyarados'
                ],
                order: 20
              },
              {
                location: 'Route 11',
                pokemon: [
                  'spearow',
                  'ekans',
                  'sandshrew',
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'drowzee',
                  'krabby',
                  'horsea',
                  'magikarp',
                  'gyarados'
                ],
                order: 17
              },
              {
                location: 'Route 12',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'gloom',
                  'venonat',
                  'psyduck',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'horsea',
                  'magikarp',
                  'gyarados'
                ],
                order: 39
              },
              {
                location: 'Route 13',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'psyduck',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'horsea',
                  'magikarp',
                  'gyarados',
                  'ditto'
                ],
                order: 38
              },
              {
                location: 'Route 14',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'bellsprout',
                  'weepinbell',
                  'ditto'
                ],
                order: 37
              },
              {
                location: 'Route 15',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'bellsprout',
                  'weepinbell',
                  'ditto'
                ],
                order: 36
              },
              {
                location: 'Route 16',
                pokemon: ['rattata', 'raticate', 'spearow', 'doduo'],
                order: 27
              },
              {
                location: 'Route 17',
                pokemon: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo'],
                order: 31
              },
              {
                location: 'Route 18',
                pokemon: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo'],
                order: 32
              },
              {
                location: 'Route 19',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'gyarados'
                ],
                order: 35
              },
              {
                location: 'Route 20',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'gyarados'
                ],
                order: 43
              },
              {
                location: 'Route 21',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'kingler',
                  'tangela',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'gyarados'
                ],
                order: 57
              },
              {
                location: 'Route 22',
                pokemon: [
                  'rattata',
                  'spearow',
                  'psyduck',
                  'mankey',
                  'poliwag',
                  'poliwhirl',
                  'slowpoke',
                  'goldeen',
                  'magikarp',
                  'gyarados'
                ],
                order: 5
              },
              {
                location: 'Route 23',
                pokemon: [
                  'spearow',
                  'fearow',
                  'ekans',
                  'arbok',
                  'sandshrew',
                  'sandslash',
                  'psyduck',
                  'mankey',
                  'primeape',
                  'poliwag',
                  'poliwhirl',
                  'slowpoke',
                  'goldeen',
                  'magikarp',
                  'gyarados'
                ],
                order: 60
              },
              {
                location: 'Route 24',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'oddish',
                  'psyduck',
                  'abra',
                  'bellsprout',
                  'tentacool',
                  'slowpoke',
                  'krabby',
                  'horsea',
                  'magikarp',
                  'gyarados'
                ],
                order: 12
              },
              {
                location: 'Route 25',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'oddish',
                  'psyduck',
                  'poliwag',
                  'poliwhirl',
                  'abra',
                  'bellsprout',
                  'slowpoke',
                  'goldeen',
                  'magikarp',
                  'gyarados'
                ],
                order: 13
              },
              {
                location: 'Safari Zone',
                pokemon: [
                  'nidoran \u2640',
                  'nidorina',
                  'nidoran \u2642',
                  'nidorino',
                  'paras',
                  'parasect',
                  'venonat',
                  'psyduck',
                  'poliwag',
                  'slowpoke',
                  'exeggcute',
                  'rhyhorn',
                  'chansey',
                  'goldeen',
                  'seaking',
                  'scyther',
                  'pinsir',
                  'magikarp',
                  'dratini',
                  'dragonair',
                  'doduo',
                  'kangaskhan',
                  'tauros',
                  'venomoth'
                ],
                order: 34
              },
              {
                location: 'Seafoam Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'psyduck',
                  'golduck',
                  'slowpoke',
                  'slowbro',
                  'seel',
                  'krabby',
                  'horsea',
                  'dewgong',
                  'magikarp',
                  'gyarados'
                ],
                order: 41
              },
              {
                location: 'Treasure Beach',
                pokemon: [
                  'spearow',
                  'fearow',
                  'meowth',
                  'persian',
                  'psyduck',
                  'tentacool',
                  'tentacruel',
                  'slowpoke',
                  'krabby',
                  'kingler',
                  'tangela',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'gyarados'
                ],
                order: 49
              },
              {
                location: 'Vermilion City',
                pokemon: [
                  'psyduck',
                  'tentacool',
                  'slowpoke',
                  'shellder',
                  'krabby',
                  'horsea',
                  'staryu',
                  'magikarp',
                  'gyarados'
                ],
                order: 16
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'arbok',
                  'sandslash',
                  'zubat',
                  'golbat',
                  'machop',
                  'machoke',
                  'geodude',
                  'onix',
                  'marowak',
                  'primeape'
                ],
                order: 61
              },
              {
                location: 'Viridian City',
                pokemon: [
                  'psyduck',
                  'poliwag',
                  'poliwhirl',
                  'slowpoke',
                  'goldeen',
                  'magikarp',
                  'gyarados'
                ],
                order: 3
              },
              {
                location: 'Viridian Forest',
                pokemon: ['caterpie', 'metapod', 'weedle', 'kakuna', 'pikachu'],
                order: 6
              }
            ]
          },
          _a(ya.FireRedLeafGreen),
          [
            [
              'ekans',
              'arbok',
              'oddish',
              'gloom',
              'vileplume',
              'bellossom',
              'psyduck',
              'golduck',
              'growlithe',
              'arcanine',
              'shellder',
              'cloyster',
              'electabuzz',
              'elekid',
              'scyther',
              'scizor',
              'wooper',
              'quagsire',
              'murkrow',
              'qwilfish',
              'delibird',
              'skarmory',
              'deoxys'
            ],
            [
              'sandshrew',
              'sandslash',
              'vulpix',
              'ninetales',
              'bellsprout',
              'weepinbell',
              'victreebel',
              'slowpoke',
              'slowbro',
              'slowking',
              'staryu',
              'starmie',
              'magmar',
              'magby',
              'pinsir',
              'azurill',
              'marill',
              'azumarill',
              'misdreavus',
              'sneasel',
              'remoraid',
              'octillery',
              'mantine'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.GoldSilver,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['chikorita', 'cyndaquil', 'totodile'],
                order: 0
              },
              { location: 'Violet City Egg', pokemon: ['togepi'], order: 8 },
              { location: 'Goldenrod City', pokemon: ['eevee'], order: 18 },
              { location: 'Route 35', pokemon: ['spearow'], order: 20 },
              { location: 'Cianwood City', pokemon: ['shuckle'], order: 36 },
              { location: 'Mt. Mortar', pokemon: ['tyrogue'], order: 48 }
            ],
            statics: [
              { location: 'Union Cave', pokemon: ['lapras'], order: 13 },
              { location: 'Route 36', pokemon: ['sudowoodo'], order: 23 },
              { location: 'Lake of Rage', pokemon: ['gyarados'], order: 42 },
              { location: 'Vermilion City', pokemon: ['snorlax'], order: 78 },
              { location: 'Roaming Raikou', pokemon: ['raikou'], order: 27 },
              { location: 'Roaming Entei', pokemon: ['entei'], order: 28 },
              { location: 'Roaming Suicune', pokemon: ['suicune'], order: 29 },
              { location: 'Whirl Islands', pokemon: ['lugia'], order: 50 },
              { location: 'Tin Tower', pokemon: ['ho-oh'], order: 39 }
            ],
            encounters: [
              {
                location: 'Bell Tower',
                pokemon: ['rattata', 'gastly'],
                order: 38
              },
              {
                location: 'Blackthorn City',
                pokemon: ['poliwag', 'magikarp'],
                order: 45
              },
              {
                location: 'Burned Tower',
                pokemon: ['rattata', 'raticate', 'zubat', 'koffing', 'magmar'],
                order: 26
              },
              {
                location: 'Cherrygrove City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 3
              },
              {
                location: 'Cianwood City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'shuckle',
                  'corsola'
                ],
                order: 35
              },
              {
                location: 'Dark Cave',
                pokemon: [
                  'zubat',
                  'geodude',
                  'krabby',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'dunsparce',
                  'shuckle',
                  'golbat',
                  'graveler',
                  'wobbuffet'
                ],
                order: 6
              },
              {
                location: "Dragon's Den",
                pokemon: ['magikarp', 'dratini', 'dragonair'],
                order: 46
              },
              {
                location: 'Ecruteak City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
                order: 25
              },
              {
                location: 'Ice Path',
                pokemon: ['zubat', 'golbat', 'jynx', 'swinub', 'delibird'],
                order: 44
              },
              {
                location: 'Ilex Forest',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'zubat',
                  'oddish',
                  'paras',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'magikarp'
                ],
                order: 16
              },
              {
                location: 'Lake of Rage',
                pokemon: ['magikarp', 'gyarados'],
                order: 41
              },
              {
                location: 'Mt. Mortar',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'golbat',
                  'machop',
                  'geodude',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'marill',
                  'machoke',
                  'graveler'
                ],
                order: 47
              },
              {
                location: 'Mt. Silver',
                pokemon: [
                  'golbat',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'quagsire',
                  'misdreavus',
                  'ursaring',
                  'donphan',
                  'larvitar',
                  'sneasel',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'rapidash',
                  'doduo',
                  'dodrio',
                  'tangela',
                  'graveler',
                  'onix'
                ],
                order: 93
              },
              {
                location: 'National Park',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'hoothoot',
                  'sunkern'
                ],
                order: 21
              },
              {
                location: 'New Bark Town',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 1
              },
              {
                location: 'Olivine City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 32
              },
              {
                location: 'Route 29',
                pokemon: ['pidgey', 'rattata', 'sentret', 'hoothoot'],
                order: 2
              },
              {
                location: 'Route 30',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'rattata',
                  'poliwag',
                  'poliwhirl',
                  'magikarp',
                  'hoothoot',
                  'ledyba',
                  'spinarak'
                ],
                order: 4
              },
              {
                location: 'Route 31',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'rattata',
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'magikarp',
                  'hoothoot',
                  'ledyba',
                  'spinarak'
                ],
                order: 5
              },
              {
                location: 'Route 32',
                pokemon: [
                  'rattata',
                  'ekans',
                  'zubat',
                  'bellsprout',
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'mareep',
                  'hoppip',
                  'wooper',
                  'quagsire',
                  'qwilfish'
                ],
                order: 10
              },
              {
                location: 'Route 33',
                pokemon: ['rattata', 'spearow', 'ekans', 'zubat', 'hoppip'],
                order: 14
              },
              {
                location: 'Route 34',
                pokemon: [
                  'rattata',
                  'abra',
                  'tentacool',
                  'tentacruel',
                  'drowzee',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'ditto',
                  'corsola'
                ],
                order: 17
              },
              {
                location: 'Route 35',
                pokemon: [
                  'pidgey',
                  'nidoran\u2640',
                  'nidoran\u2642',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'abra',
                  'drowzee',
                  'magikarp',
                  'ditto',
                  'hoothoot',
                  'yanma'
                ],
                order: 19
              },
              {
                location: 'Route 36',
                pokemon: [
                  'pidgey',
                  'nidoran\u2640',
                  'nidoran\u2642',
                  'vulpix',
                  'growlithe',
                  'hoothoot',
                  'stantler'
                ],
                order: 22
              },
              {
                location: 'Route 37',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'vulpix',
                  'growlithe',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'stantler'
                ],
                order: 24
              },
              {
                location: 'Route 38',
                pokemon: [
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'farfetchd',
                  'tauros',
                  'snubbull',
                  'miltank'
                ],
                order: 30
              },
              {
                location: 'Route 39',
                pokemon: [
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'farfetchd',
                  'tauros',
                  'miltank'
                ],
                order: 31
              },
              {
                location: 'Route 42',
                pokemon: [
                  'spearow',
                  'zubat',
                  'mankey',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'mareep',
                  'flaaffy'
                ],
                order: 37
              },
              {
                location: 'Route 43',
                pokemon: [
                  'pidgeotto',
                  'venonat',
                  'poliwag',
                  'magikarp',
                  'noctowl',
                  'mareep',
                  'flaaffy',
                  'girafarig'
                ],
                order: 40
              },
              {
                location: 'Route 44',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'weepinbell',
                  'lickitung',
                  'tangela',
                  'magikarp',
                  'remoraid'
                ],
                order: 43
              },
              {
                location: 'Route 45',
                pokemon: [
                  'geodude',
                  'graveler',
                  'magikarp',
                  'dratini',
                  'dragonair',
                  'gligar',
                  'teddiursa',
                  'skarmory',
                  'phanpy'
                ],
                order: 51
              },
              {
                location: 'Route 46',
                pokemon: ['rattata', 'spearow', 'jigglypuff', 'geodude'],
                order: 52
              },
              {
                location: 'Ruins of Alph',
                pokemon: [
                  'poliwag',
                  'magikarp',
                  'natu',
                  'wooper',
                  'quagsire',
                  'smeargle',
                  'unown'
                ],
                order: 11
              },
              {
                location: 'Route 40',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'shuckle',
                  'corsola'
                ],
                order: 33
              },
              {
                location: 'Route 41',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'mantine'
                ],
                order: 34
              },
              {
                location: 'Slowpoke Well',
                pokemon: [
                  'zubat',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'golbat',
                  'slowbro'
                ],
                order: 15
              },
              {
                location: 'Sprout Tower',
                pokemon: ['rattata', 'gastly'],
                order: 9
              },
              {
                location: 'Tohjo Falls',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'golbat',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 54
              },
              {
                location: 'Union Cave',
                pokemon: [
                  'rattata',
                  'sandshrew',
                  'zubat',
                  'geodude',
                  'onix',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'wooper',
                  'quagsire',
                  'raticate',
                  'golbat',
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'corsola'
                ],
                order: 12
              },
              {
                location: 'Violet City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
                order: 7
              },
              {
                location: 'Whirl Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'tentacruel',
                  'seel',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp'
                ],
                order: 49
              },
              {
                location: 'Celadon City',
                pokemon: ['grimer', 'muk'],
                order: 68
              },
              {
                location: 'Cerulean City',
                pokemon: ['goldeen', 'seaking', 'magikarp'],
                order: 64
              },
              {
                location: 'Cinnabar Island',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 88
              },
              {
                location: "Diglett's Cave",
                pokemon: ['diglett', 'dugtrio'],
                order: 79
              },
              {
                location: 'Fuchsia City',
                pokemon: ['magikarp', 'gyarados'],
                order: 72
              },
              {
                location: 'Mt. Moon',
                pokemon: [
                  'sandshrew',
                  'sandslash',
                  'clefairy',
                  'zubat',
                  'paras',
                  'geodude'
                ],
                order: 82
              },
              {
                location: 'Pallet Town',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 86
              },
              {
                location: 'Rock Tunnel',
                pokemon: [
                  'zubat',
                  'machop',
                  'machoke',
                  'geodude',
                  'onix',
                  'cubone',
                  'marowak',
                  'kangaskhan'
                ],
                order: 62
              },
              {
                location: 'Route 1',
                pokemon: ['pidgey', 'rattata', 'sentret', 'furret', 'hoothoot'],
                order: 85
              },
              {
                location: 'Route 10',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'voltorb',
                  'goldeen',
                  'seaking',
                  'electabuzz',
                  'magikarp',
                  'quagsire'
                ],
                order: 61
              },
              {
                location: 'Route 11',
                pokemon: ['rattata', 'magnemite', 'drowzee', 'hypno'],
                order: 77
              },
              {
                location: 'Route 12',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'quagsire',
                  'qwilfish'
                ],
                order: 76
              },
              {
                location: 'Route 13',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'tentacool',
                  'tentacruel',
                  'chansey',
                  'magikarp',
                  'noctowl',
                  'hoppip',
                  'quagsire',
                  'qwilfish'
                ],
                order: 75
              },
              {
                location: 'Route 14',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'chansey',
                  'noctowl',
                  'hoppip',
                  'skiploom',
                  'quagsire'
                ],
                order: 74
              },
              {
                location: 'Route 15',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'chansey',
                  'noctowl',
                  'hoppip',
                  'quagsire'
                ],
                order: 73
              },
              {
                location: 'Route 16',
                pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma'],
                order: 69
              },
              {
                location: 'Route 17',
                pokemon: ['fearow', 'grimer', 'muk', 'slugma'],
                order: 70
              },
              {
                location: 'Route 18',
                pokemon: ['fearow', 'grimer', 'muk', 'murkrow', 'slugma'],
                order: 71
              },
              {
                location: 'Route 19',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 90
              },
              {
                location: 'Route 2',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'weedle',
                  'kakuna',
                  'beedrill',
                  'pidgey',
                  'pidgeotto',
                  'pikachu',
                  'hoothoot',
                  'noctowl',
                  'ledyba',
                  'ledian',
                  'spinarak',
                  'ariados'
                ],
                order: 80
              },
              {
                location: 'Route 20',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 89
              },
              {
                location: 'Route 21',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'tangela',
                  'mr. mime',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 87
              },
              {
                location: 'Route 22',
                pokemon: [
                  'rattata',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'doduo',
                  'magikarp'
                ],
                order: 91
              },
              {
                location: 'Route 24',
                pokemon: [
                  'oddish',
                  'venonat',
                  'venomoth',
                  'abra',
                  'bellsprout',
                  'weepinbell',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'sunkern'
                ],
                order: 65
              },
              {
                location: 'Route 25',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'venonat',
                  'venomoth',
                  'abra',
                  'bellsprout',
                  'weepinbell',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 66
              },
              {
                location: 'Route 26',
                pokemon: [
                  'raticate',
                  'arbok',
                  'sandslash',
                  'tentacool',
                  'tentacruel',
                  'ponyta',
                  'doduo',
                  'dodrio',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'quagsire'
                ],
                order: 55
              },
              {
                location: 'Route 27',
                pokemon: [
                  'raticate',
                  'arbok',
                  'sandslash',
                  'tentacool',
                  'tentacruel',
                  'ponyta',
                  'doduo',
                  'dodrio',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'quagsire'
                ],
                order: 53
              },
              {
                location: 'Route 28',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'rapidash',
                  'doduo',
                  'dodrio',
                  'tangela',
                  'magikarp',
                  'sneasel',
                  'ursaring',
                  'donphan'
                ],
                order: 92
              },
              {
                location: 'Route 3',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'arbok',
                  'jigglypuff',
                  'zubat'
                ],
                order: 81
              },
              {
                location: 'Route 4',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'arbok',
                  'jigglypuff',
                  'zubat',
                  'goldeen',
                  'seaking'
                ],
                order: 83
              },
              {
                location: 'Route 5',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'gloom',
                  'meowth',
                  'abra',
                  'bellsprout'
                ],
                order: 67
              },
              {
                location: 'Route 6',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'meowth',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'abra',
                  'bellsprout',
                  'magnemite',
                  'magikarp'
                ],
                order: 58
              },
              {
                location: 'Route 7',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'vulpix',
                  'meowth',
                  'persian',
                  'growlithe',
                  'murkrow',
                  'houndour'
                ],
                order: 59
              },
              {
                location: 'Route 8',
                pokemon: [
                  'pidgeotto',
                  'rattata',
                  'vulpix',
                  'meowth',
                  'growlithe',
                  'abra',
                  'kadabra',
                  'haunter',
                  'noctowl'
                ],
                order: 60
              },
              {
                location: 'Route 9',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'fearow',
                  'mankey',
                  'primeape',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 63
              },
              {
                location: 'Vermilion City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 57
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'golbat',
                  'graveler',
                  'onix',
                  'rhyhorn',
                  'ursaring',
                  'donphan'
                ],
                order: 56
              },
              {
                location: 'Viridian City',
                pokemon: ['poliwag', 'poliwhirl'],
                order: 84
              }
            ]
          },
          _a(ya.GoldSilver),
          [
            [
              'mankey',
              'primeape',
              'growlithe',
              'arcanine',
              'spinarak',
              'ariados',
              'gligar',
              'teddiursa',
              'ursaring',
              'mantine'
            ],
            [
              'vulpix',
              'ninetales',
              'meowth',
              'persian',
              'ledyba',
              'ledian',
              'delibird',
              'skarmory',
              'phanpy',
              'donphan'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.HeartGoldSoulSilver,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['chikorita', 'cyndaquil', 'totodile'],
                order: 0
              },
              { location: 'Goldenrod City', pokemon: ['eevee'], order: 21 },
              { location: 'Violet City Egg', pokemon: ['togepi'], order: 11 },
              { location: 'Primo Egg - Mareep', pokemon: ['mareep'], order: 8 },
              {
                location: 'Primo Egg - Wooper',
                pokemon: ['wooper'],
                order: 10
              },
              { location: 'Primo Egg - Slugma', pokemon: ['slugma'], order: 9 },
              { location: 'Cianwood City', pokemon: ['shuckle'], order: 38 },
              { location: 'Mt. Mortar', pokemon: ['tyrogue'], order: 53 },
              { location: "Dragon's Den", pokemon: ['dratini'], order: 51 }
            ],
            statics: [
              { location: 'Lake of Rage', pokemon: ['gyarados'], order: 46 },
              { location: 'Union Cave', pokemon: ['lapras'], order: 16 },
              {
                location: 'Seafoam Islands',
                pokemon: ['articuno'],
                order: 103
              },
              { location: 'Route 10', pokemon: ['zapdos'], order: 104 },
              { location: 'Mt. Silver', pokemon: ['moltres'], order: 102 },
              { location: 'Route 11', pokemon: ['snorlax'], order: 84 },
              { location: 'Route 36', pokemon: ['sudowoodo'], order: 26 },
              { location: 'Roaming Raikou', pokemon: ['raikou'], order: 30 },
              { location: 'Roaming Entei', pokemon: ['entei'], order: 31 },
              { location: 'Route 25', pokemon: ['suicune'], order: 72 },
              { location: 'Whirl Islands', pokemon: ['lugia'], order: 55 },
              { location: 'Bell Tower', pokemon: ['ho-oh'], order: 43 }
            ],
            encounters: [
              {
                location: 'Celadon City',
                pokemon: ['grimer', 'muk'],
                order: 74
              },
              {
                location: 'Cerulean City',
                pokemon: ['goldeen', 'seaking', 'magikarp'],
                order: 69
              },
              {
                location: 'Cinnabar Island',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 95
              },
              {
                location: "Diglett's Cave",
                pokemon: [
                  'diglett',
                  'dugtrio',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor'
                ],
                order: 85
              },
              {
                location: 'Fuchsia City',
                pokemon: ['magikarp', 'gyarados'],
                order: 78
              },
              {
                location: 'Mt. Moon',
                pokemon: [
                  'poliwag',
                  'magikarp',
                  'sandshrew',
                  'sandslash',
                  'clefairy',
                  'zubat',
                  'paras',
                  'geodude',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor'
                ],
                order: 88
              },
              {
                location: 'Pallet Town',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 93
              },
              {
                location: 'Rock Tunnel',
                pokemon: [
                  'zubat',
                  'machop',
                  'machoke',
                  'geodude',
                  'onix',
                  'cubone',
                  'marowak',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'kangaskhan'
                ],
                order: 67
              },
              {
                location: 'Route 1',
                pokemon: [
                  'pidgey',
                  'rattata',
                  'sentret',
                  'furret',
                  'hoothoot',
                  'poochyena',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 92
              },
              {
                location: 'Route 10',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'voltorb',
                  'goldeen',
                  'seaking',
                  'electabuzz',
                  'magikarp',
                  'quagsire',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 66
              },
              {
                location: 'Route 11',
                pokemon: [
                  'rattata',
                  'magnemite',
                  'drowzee',
                  'hypno',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 83
              },
              {
                location: 'Route 12',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'quagsire',
                  'qwilfish',
                  'relicanth'
                ],
                order: 82
              },
              {
                location: 'Route 13',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'tentacool',
                  'tentacruel',
                  'chansey',
                  'magikarp',
                  'noctowl',
                  'hoppip',
                  'quagsire',
                  'qwilfish',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 81
              },
              {
                location: 'Route 14',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'chansey',
                  'noctowl',
                  'hoppip',
                  'skiploom',
                  'quagsire',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 80
              },
              {
                location: 'Route 15',
                pokemon: [
                  'pidgeotto',
                  'nidorina',
                  'nidorino',
                  'chansey',
                  'noctowl',
                  'hoppip',
                  'quagsire',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 79
              },
              {
                location: 'Route 16',
                pokemon: [
                  'fearow',
                  'grimer',
                  'muk',
                  'murkrow',
                  'slugma',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 75
              },
              {
                location: 'Route 17',
                pokemon: [
                  'fearow',
                  'grimer',
                  'muk',
                  'slugma',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 76
              },
              {
                location: 'Route 18',
                pokemon: [
                  'fearow',
                  'grimer',
                  'muk',
                  'slugma',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 77
              },
              {
                location: 'Route 2',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'weedle',
                  'kakuna',
                  'beedrill',
                  'pidgey',
                  'pidgeotto',
                  'hoothoot',
                  'noctowl',
                  'ledyba',
                  'ledian',
                  'spinarak',
                  'ariados',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 86
              },
              {
                location: 'Route 22',
                pokemon: [
                  'rattata',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'doduo',
                  'magikarp',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 99
              },
              {
                location: 'Route 24',
                pokemon: [
                  'oddish',
                  'venonat',
                  'venomoth',
                  'abra',
                  'bellsprout',
                  'weepinbell',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'sunkern',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 70
              },
              {
                location: 'Route 25',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'venonat',
                  'venomoth',
                  'abra',
                  'bellsprout',
                  'weepinbell',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel',
                  'buneary'
                ],
                order: 71
              },
              {
                location: 'Route 26',
                pokemon: [
                  'raticate',
                  'arbok',
                  'sandslash',
                  'tentacool',
                  'tentacruel',
                  'ponyta',
                  'doduo',
                  'dodrio',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'quagsire',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 60
              },
              {
                location: 'Route 27',
                pokemon: [
                  'raticate',
                  'arbok',
                  'sandslash',
                  'tentacool',
                  'tentacruel',
                  'ponyta',
                  'doduo',
                  'dodrio',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'quagsire',
                  'linoone',
                  'whismur',
                  'luvdisc',
                  'bidoof',
                  'buizel'
                ],
                order: 58
              },
              {
                location: 'Route 28',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'rapidash',
                  'doduo',
                  'dodrio',
                  'tangela',
                  'magikarp',
                  'sneasel',
                  'ursaring',
                  'donphan',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 100
              },
              {
                location: 'Route 3',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'arbok',
                  'jigglypuff',
                  'zubat',
                  'plusle',
                  'minun',
                  'gulpin',
                  'baltoy',
                  'shinx'
                ],
                order: 87
              },
              {
                location: 'Route 4',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'arbok',
                  'jigglypuff',
                  'zubat',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 89
              },
              {
                location: 'Route 5',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'gloom',
                  'meowth',
                  'abra',
                  'bellsprout',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 73
              },
              {
                location: 'Route 6',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'meowth',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'abra',
                  'bellsprout',
                  'magnemite',
                  'magikarp',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 63
              },
              {
                location: 'Route 7',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'vulpix',
                  'meowth',
                  'persian',
                  'growlithe',
                  'murkrow',
                  'houndour',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 64
              },
              {
                location: 'Route 8',
                pokemon: [
                  'pidgeotto',
                  'vulpix',
                  'meowth',
                  'growlithe',
                  'abra',
                  'kadabra',
                  'haunter',
                  'noctowl',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 65
              },
              {
                location: 'Route 9',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'fearow',
                  'mankey',
                  'primeape',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'linoone',
                  'whismur',
                  'sableye',
                  'mawile',
                  'bidoof',
                  'buizel'
                ],
                order: 68
              },
              {
                location: 'Route 19',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola',
                  'clamperl'
                ],
                order: 98
              },
              {
                location: 'Route 20',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 96
              },
              {
                location: 'Route 21',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'tangela',
                  'mr. mime',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 94
              },
              {
                location: 'Seafoam Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'psyduck',
                  'golduck',
                  'slowbro',
                  'seel',
                  'krabby',
                  'horsea',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'dewgong',
                  'kingler',
                  'seadra',
                  'magikarp',
                  'gyarados',
                  'jynx'
                ],
                order: 97
              },
              {
                location: 'Vermilion City',
                pokemon: [
                  'diglett',
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'shuckle',
                  'wingull'
                ],
                order: 62
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'golbat',
                  'graveler',
                  'onix',
                  'rhyhorn',
                  'ursaring',
                  'donphan',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'geodude'
                ],
                order: 61
              },
              {
                location: 'Viridian City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
                order: 91
              },
              {
                location: 'Viridian Forest',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'weedle',
                  'kakuna',
                  'beedrill',
                  'pidgey',
                  'pidgeotto',
                  'pikachu',
                  'hoothoot',
                  'noctowl',
                  'numel',
                  'spoink',
                  'kricketot',
                  'budew',
                  'carnivine'
                ],
                order: 90
              },
              {
                location: 'Bell Tower',
                pokemon: [
                  'rattata',
                  'gastly',
                  'zigzagoon',
                  'meditite',
                  'spinda',
                  'chatot'
                ],
                order: 42
              },
              {
                location: 'Blackthorn City',
                pokemon: ['poliwag', 'magikarp'],
                order: 49
              },
              {
                location: 'Burned Tower',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'koffing',
                  'zigzagoon',
                  'meditite',
                  'spinda',
                  'chatot',
                  'magmar'
                ],
                order: 29
              },
              {
                location: 'Cherrygrove City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 3
              },
              {
                location: 'Cianwood City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'shuckle',
                  'corsola'
                ],
                order: 37
              },
              {
                location: 'Dark Cave',
                pokemon: [
                  'zubat',
                  'geodude',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'dunsparce',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'golbat',
                  'graveler',
                  'wobbuffet'
                ],
                order: 6
              },
              {
                location: "Dragon's Den",
                pokemon: ['magikarp', 'dratini', 'dragonair'],
                order: 50
              },
              {
                location: 'Ecruteak City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp'],
                order: 28
              },
              {
                location: 'Ice Path',
                pokemon: [
                  'zubat',
                  'golbat',
                  'jynx',
                  'swinub',
                  'delibird',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor'
                ],
                order: 48
              },
              {
                location: 'Ilex Forest',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'zubat',
                  'oddish',
                  'paras',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'magikarp',
                  'numel',
                  'spoink',
                  'budew',
                  'carnivine'
                ],
                order: 19
              },
              {
                location: 'Lake of Rage',
                pokemon: ['magikarp', 'gyarados'],
                order: 45
              },
              {
                location: 'Mt. Mortar',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'golbat',
                  'machop',
                  'geodude',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'marill',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'machoke',
                  'graveler'
                ],
                order: 52
              },
              {
                location: 'Mt. Silver',
                pokemon: [
                  'golbat',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'quagsire',
                  'misdreavus',
                  'steelix',
                  'ursaring',
                  'donphan',
                  'larvitar',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'sneasel',
                  'teddiursa',
                  'phanpy',
                  'poliwag',
                  'poliwhirl',
                  'ponyta',
                  'rapidash',
                  'doduo',
                  'dodrio',
                  'tangela',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel',
                  'graveler',
                  'onix',
                  'gyarados',
                  'pupitar'
                ],
                order: 101
              },
              {
                location: 'National Park',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'hoothoot',
                  'sunkern',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 24
              },
              {
                location: 'New Bark Town',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn'
                ],
                order: 1
              },
              {
                location: 'Olivine City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 34
              },
              {
                location: 'Route 29',
                pokemon: [
                  'pidgey',
                  'rattata',
                  'sentret',
                  'hoothoot',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 2
              },
              {
                location: 'Route 30',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'rattata',
                  'poliwag',
                  'poliwhirl',
                  'magikarp',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 4
              },
              {
                location: 'Route 31',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'rattata',
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'magikarp',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 5
              },
              {
                location: 'Route 32',
                pokemon: [
                  'rattata',
                  'ekans',
                  'zubat',
                  'bellsprout',
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'mareep',
                  'hoppip',
                  'wooper',
                  'quagsire',
                  'qwilfish',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 13
              },
              {
                location: 'Route 33',
                pokemon: [
                  'rattata',
                  'spearow',
                  'ekans',
                  'zubat',
                  'hoppip',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 17
              },
              {
                location: 'Route 34',
                pokemon: [
                  'rattata',
                  'abra',
                  'tentacool',
                  'tentacruel',
                  'drowzee',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'ditto',
                  'corsola',
                  'linoone',
                  'ralts',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 20
              },
              {
                location: 'Route 35',
                pokemon: [
                  'pidgey',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'psyduck',
                  'golduck',
                  'poliwag',
                  'abra',
                  'drowzee',
                  'magikarp',
                  'ditto',
                  'hoothoot',
                  'yanma',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 22
              },
              {
                location: 'Route 36',
                pokemon: [
                  'pidgey',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'vulpix',
                  'growlithe',
                  'hoothoot',
                  'stantler',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 25
              },
              {
                location: 'Route 37',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'vulpix',
                  'growlithe',
                  'hoothoot',
                  'ledyba',
                  'spinarak',
                  'stantler',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 27
              },
              {
                location: 'Route 38',
                pokemon: [
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'farfetchd',
                  'tauros',
                  'snubbull',
                  'miltank',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 32
              },
              {
                location: 'Route 39',
                pokemon: [
                  'rattata',
                  'raticate',
                  'meowth',
                  'magnemite',
                  'farfetchd',
                  'tauros',
                  'miltank',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 33
              },
              {
                location: 'Route 42',
                pokemon: [
                  'spearow',
                  'zubat',
                  'mankey',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'mareep',
                  'flaaffy',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 41
              },
              {
                location: 'Route 43',
                pokemon: [
                  'pidgeotto',
                  'venonat',
                  'poliwag',
                  'magikarp',
                  'noctowl',
                  'mareep',
                  'flaaffy',
                  'girafarig',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 44
              },
              {
                location: 'Route 44',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'bellsprout',
                  'weepinbell',
                  'lickitung',
                  'tangela',
                  'magikarp',
                  'remoraid',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel'
                ],
                order: 47
              },
              {
                location: 'Route 45',
                pokemon: [
                  'poliwag',
                  'geodude',
                  'graveler',
                  'magikarp',
                  'gligar',
                  'teddiursa',
                  'skarmory',
                  'phanpy',
                  'linoone',
                  'whismur',
                  'swablu',
                  'bidoof',
                  'buizel'
                ],
                order: 56
              },
              {
                location: 'Route 46',
                pokemon: [
                  'rattata',
                  'spearow',
                  'geodude',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 57
              },
              {
                location: 'Route 47',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'gloom',
                  'tentacool',
                  'tentacruel',
                  'farfetchd',
                  'seel',
                  'shellder',
                  'staryu',
                  'magikarp',
                  'ditto',
                  'noctowl',
                  'chinchou',
                  'lanturn',
                  'miltank',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel',
                  'poliwag',
                  'wooper',
                  'quagsire',
                  'zubat',
                  'golbat',
                  'machop',
                  'machoke',
                  'geodude',
                  'graveler',
                  'onix',
                  'krabby',
                  'kingler',
                  'misdreavus',
                  'steelix',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor'
                ],
                order: 39
              },
              {
                location: 'Route 48',
                pokemon: [
                  'fearow',
                  'vulpix',
                  'gloom',
                  'diglett',
                  'growlithe',
                  'farfetchd',
                  'tauros',
                  'hoppip',
                  'girafarig',
                  'plusle',
                  'minun',
                  'shinx'
                ],
                order: 40
              },
              {
                location: 'Ruins of Alph',
                pokemon: [
                  'poliwag',
                  'geodude',
                  'magikarp',
                  'natu',
                  'wooper',
                  'quagsire',
                  'smeargle',
                  'linoone',
                  'whismur',
                  'bidoof',
                  'buizel',
                  'unown'
                ],
                order: 14
              },
              {
                location: 'Route 40',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'magikarp',
                  'corsola'
                ],
                order: 35
              },
              {
                location: 'Route 41',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'chinchou',
                  'lanturn',
                  'mantine'
                ],
                order: 36
              },
              {
                location: 'Slowpoke Well',
                pokemon: [
                  'zubat',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'golbat',
                  'slowbro'
                ],
                order: 18
              },
              {
                location: 'Sprout Tower',
                pokemon: [
                  'rattata',
                  'gastly',
                  'zigzagoon',
                  'meditite',
                  'spinda',
                  'chatot'
                ],
                order: 12
              },
              {
                location: 'Tohjo Falls',
                pokemon: [
                  'rattata',
                  'raticate',
                  'zubat',
                  'golbat',
                  'slowpoke',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor'
                ],
                order: 59
              },
              {
                location: 'Union Cave',
                pokemon: [
                  'rattata',
                  'sandshrew',
                  'zubat',
                  'geodude',
                  'onix',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'wooper',
                  'quagsire',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor',
                  'raticate',
                  'golbat',
                  'tentacool',
                  'tentacruel',
                  'krabby',
                  'kingler',
                  'staryu',
                  'corsola'
                ],
                order: 15
              },
              {
                location: 'Violet City',
                pokemon: ['poliwag', 'poliwhirl', 'magikarp', 'whiscash'],
                order: 7
              },
              {
                location: 'Whirl Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'tentacruel',
                  'seel',
                  'krabby',
                  'kingler',
                  'horsea',
                  'seadra',
                  'magikarp',
                  'makuhita',
                  'absol',
                  'chingling',
                  'bronzor'
                ],
                order: 54
              }
            ]
          },
          _a(ya.HeartGoldSoulSilver),
          [
            [
              'mankey',
              'primeape',
              'growlithe',
              'arcanine',
              'spinarak',
              'ariados',
              'gligar',
              'mantine',
              'phanpy',
              'donphan',
              'sableye',
              'baltoy',
              'claydol',
              'kyogre',
              'mantyke',
              'gliscor'
            ],
            [
              'vulpix',
              'ninetales',
              'meowth',
              'persian',
              'ledyba',
              'ledian',
              'teddiursa',
              'ursaring',
              'delibird',
              'skarmory',
              'mawile',
              'gulpin',
              'swalot',
              'groudon'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.OmegaRubyAlphaSapphire,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['treecko', 'torchic', 'mudkip'],
                order: 0
              },
              { location: 'Lavaridge Town', pokemon: ['wynaut'], order: 26 },
              {
                location: 'Weather Institute',
                pokemon: ['castform'],
                order: 35
              },
              {
                location: 'Route 111 Fossil',
                pokemon: ['lileep', 'anorith'],
                order: 28
              }
            ],
            statics: [
              { location: 'Devon Scope', pokemon: ['kecleon'], order: 37 },
              {
                location: 'Cave of Origin',
                pokemon: ['kyogre', 'groudon'],
                order: 55
              },
              { location: 'Team Hideout', pokemon: ['electrode'], order: 44 },
              { location: 'Ancient Tomb', pokemon: ['registeel'], order: 63 },
              { location: 'Desert Ruins', pokemon: ['regirock'], order: 64 },
              { location: 'Island Cave', pokemon: ['regice'], order: 65 }
            ],
            encounters: [
              {
                location: 'Abandoned Ship',
                pokemon: ['tentacool', 'tentacruel', 'magikarp'],
                order: 33
              },
              {
                location: 'Cave of Origin',
                pokemon: ['zubat', 'golbat', 'sableye', 'mawile'],
                order: 54
              },
              {
                location: 'Dewford Town',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 9
              },
              {
                location: 'Ever Grande City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'corsola',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'luvdisc'
                ],
                order: 66
              },
              {
                location: 'Fiery Path',
                pokemon: [
                  'machop',
                  'grimer',
                  'koffing',
                  'slugma',
                  'numel',
                  'torkoal'
                ],
                order: 20
              },
              {
                location: 'Granite Cave',
                pokemon: [
                  'zubat',
                  'abra',
                  'geodude',
                  'makuhita',
                  'sableye',
                  'mawile',
                  'aron',
                  'nosepass'
                ],
                order: 11
              },
              {
                location: 'Jagged Pass',
                pokemon: ['machop', 'numel', 'spoink'],
                order: 25
              },
              {
                location: 'Lilycove City',
                pokemon: [
                  'tentacool',
                  'staryu',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 40
              },
              {
                location: 'Meteor Falls',
                pokemon: [
                  'zubat',
                  'goldeen',
                  'magikarp',
                  'lunatone',
                  'solrock',
                  'barboach',
                  'golbat',
                  'whiscash',
                  'bagon'
                ],
                order: 23
              },
              {
                location: 'Mossdeep City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 46
              },
              {
                location: 'Mt. Pyre',
                pokemon: [
                  'shuppet',
                  'duskull',
                  'vulpix',
                  'wingull',
                  'meditite',
                  'chimecho'
                ],
                order: 42
              },
              {
                location: 'New Mauville',
                pokemon: ['magnemite', 'voltorb', 'magneton', 'electrode'],
                order: 29
              },
              {
                location: 'Pacifidlog Town',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 59
              },
              {
                location: 'Petalburg City',
                pokemon: ['goldeen', 'magikarp', 'marill', 'corphish'],
                order: 4
              },
              {
                location: 'Petalburg Woods',
                pokemon: [
                  'zigzagoon',
                  'wurmple',
                  'silcoon',
                  'cascoon',
                  'taillow',
                  'shroomish',
                  'slakoth'
                ],
                order: 6
              },
              {
                location: 'Route 101',
                pokemon: ['poochyena', 'zigzagoon', 'wurmple'],
                order: 1
              },
              {
                location: 'Route 102',
                pokemon: [
                  'goldeen',
                  'magikarp',
                  'marill',
                  'poochyena',
                  'zigzagoon',
                  'wurmple',
                  'lotad',
                  'seedot',
                  'ralts',
                  'surskit',
                  'corphish'
                ],
                order: 3
              },
              {
                location: 'Route 103',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'poochyena',
                  'zigzagoon',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 2
              },
              {
                location: 'Route 104',
                pokemon: [
                  'magikarp',
                  'zigzagoon',
                  'wurmple',
                  'taillow',
                  'wingull',
                  'pelipper'
                ],
                order: 30
              },
              {
                location: 'Route 105',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 31
              },
              {
                location: 'Route 106',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 10
              },
              {
                location: 'Route 107',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 12
              },
              {
                location: 'Route 108',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 32
              },
              {
                location: 'Route 109',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 13
              },
              {
                location: 'Route 110',
                pokemon: [
                  'oddish',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'plusle',
                  'minun',
                  'gulpin',
                  'wailmer'
                ],
                order: 15
              },
              {
                location: 'Route 111',
                pokemon: [
                  'sandshrew',
                  'geodude',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'surskit',
                  'trapinch',
                  'cacnea',
                  'barboach',
                  'baltoy'
                ],
                order: 27
              },
              {
                location: 'Route 112',
                pokemon: ['machop', 'numel'],
                order: 19
              },
              {
                location: 'Route 113',
                pokemon: ['sandshrew', 'skarmory', 'spinda'],
                order: 21
              },
              {
                location: 'Route 114',
                pokemon: [
                  'geodude',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'lotad',
                  'lombre',
                  'seedot',
                  'nuzleaf',
                  'surskit',
                  'swablu',
                  'zangoose',
                  'seviper',
                  'barboach'
                ],
                order: 22
              },
              {
                location: 'Route 115',
                pokemon: [
                  'jigglypuff',
                  'tentacool',
                  'magikarp',
                  'taillow',
                  'swellow',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'swablu'
                ],
                order: 24
              },
              {
                location: 'Route 116',
                pokemon: [
                  'zigzagoon',
                  'taillow',
                  'nincada',
                  'whismur',
                  'skitty'
                ],
                order: 7
              },
              {
                location: 'Route 117',
                pokemon: [
                  'oddish',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'zigzagoon',
                  'surskit',
                  'volbeat',
                  'illumise',
                  'roselia',
                  'corphish'
                ],
                order: 16
              },
              {
                location: 'Route 118',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'manectric',
                  'carvanha',
                  'sharpedo',
                  'kecleon'
                ],
                order: 17
              },
              {
                location: 'Route 119',
                pokemon: [
                  'oddish',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'carvanha',
                  'kecleon',
                  'tropius'
                ],
                order: 34
              },
              {
                location: 'Route 120',
                pokemon: [
                  'oddish',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'zigzagoon',
                  'linoone',
                  'surskit',
                  'barboach',
                  'kecleon',
                  'absol'
                ],
                order: 36
              },
              {
                location: 'Route 121',
                pokemon: [
                  'oddish',
                  'gloom',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'kecleon',
                  'shuppet',
                  'duskull'
                ],
                order: 38
              },
              {
                location: 'Route 122',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 41
              },
              {
                location: 'Route 123',
                pokemon: [
                  'oddish',
                  'gloom',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'kecleon',
                  'shuppet',
                  'duskull'
                ],
                order: 43
              },
              {
                location: 'Route 124',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'chinchou',
                  'clamperl',
                  'relicanth'
                ],
                order: 45
              },
              {
                location: 'Route 125',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 47
              },
              {
                location: 'Route 126',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'chinchou',
                  'clamperl',
                  'relicanth'
                ],
                order: 49
              },
              {
                location: 'Route 127',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 50
              },
              {
                location: 'Route 128',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'corsola',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'luvdisc'
                ],
                order: 51
              },
              {
                location: 'Route 129',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'wailord'
                ],
                order: 56
              },
              {
                location: 'Route 130',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'wynaut'
                ],
                order: 57
              },
              {
                location: 'Route 131',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 58
              },
              {
                location: 'Route 132',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 60
              },
              {
                location: 'Route 133',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 61
              },
              {
                location: 'Route 134',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 62
              },
              { location: 'Rusturf Tunnel', pokemon: ['whismur'], order: 8 },
              {
                location: 'Safari Zone',
                pokemon: [
                  'oddish',
                  'gloom',
                  'psyduck',
                  'golduck',
                  'doduo',
                  'dodrio',
                  'rhyhorn',
                  'goldeen',
                  'seaking',
                  'pinsir',
                  'magikarp',
                  'geodude',
                  'natu',
                  'xatu',
                  'heracross',
                  'phanpy',
                  'pikachu',
                  'wobbuffet',
                  'girafarig'
                ],
                order: 39
              },
              {
                location: 'Seafloor Cavern',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'magikarp',
                  'wailmer'
                ],
                order: 52
              },
              {
                location: 'Shoal Cave',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'magikarp',
                  'wailmer',
                  'spheal',
                  'snorunt'
                ],
                order: 48
              },
              {
                location: 'Slateport City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 14
              },
              {
                location: 'Sootopolis City',
                pokemon: ['tentacool', 'magikarp', 'gyarados'],
                order: 53
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'zubat',
                  'golbat',
                  'whismur',
                  'loudred',
                  'makuhita',
                  'hariyama',
                  'aron',
                  'lairon',
                  'geodude',
                  'graveler',
                  'mawile',
                  'meditite',
                  'medicham',
                  'goldeen',
                  'magikarp',
                  'sableye',
                  'barboach',
                  'whiscash'
                ],
                order: 67
              }
            ]
          },
          _a(ya.OmegaRubyAlphaSapphire),
          [
            [
              'kabuto',
              'kabutops',
              'ho-oh',
              'seedot',
              'nuzleaf',
              'shiftry',
              'mawile',
              'zangoose',
              'solrock',
              'groudon',
              'shieldon',
              'bastiodon',
              'palkia',
              'throh',
              'archen',
              'archeops',
              'tornadus',
              'reshiram',
              'skrelp',
              'dragalge'
            ],
            [
              'omanyte',
              'omastar',
              'lugia',
              'lotad',
              'lombre',
              'ludicolo',
              'sableye',
              'seviper',
              'lunatone',
              'kyogre',
              'cranidos',
              'rampardos',
              'dialga',
              'sawk',
              'tirtouga',
              'carracosta',
              'thundurus',
              'zekrom',
              'clauncher',
              'clawitzer'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.Platinum,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['turtwig', 'piplup', 'chimchar'],
                order: 0
              },
              { location: 'Hearthome City', pokemon: ['eevee'], order: 27 },
              { location: 'Veilstone City', pokemon: ['porygon'], order: 33 },
              { location: 'Eterna City Egg', pokemon: ['togepi'], order: 19 },
              { location: 'Iron Island Egg', pokemon: ['riolu'], order: 47 }
            ],
            statics: [
              {
                location: 'Valley Windworks',
                pokemon: ['drifloon'],
                order: 15
              },
              { location: 'Hallowed Tower', pokemon: ['spiritomb'], order: 65 },
              { location: 'Old Chateau', pokemon: ['rotom'], order: 21 },
              { location: 'Lake Acuity', pokemon: ['uxie'], order: 58 },
              { location: 'Lake Valor', pokemon: ['azelf'], order: 59 },
              {
                location: 'Roaming Lake Guardian',
                pokemon: ['mesprit'],
                order: 60
              },
              { location: 'Distortion World', pokemon: ['giratina'], order: 52 }
            ],
            encounters: [
              {
                location: 'Acuity Lakefront',
                pokemon: ['sneasel', 'ursaring', 'swinub', 'snorunt', 'snover'],
                order: 50
              },
              {
                location: 'Canalave City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'staryu',
                  'magikarp',
                  'gyarados',
                  'shellos',
                  'gastrodon',
                  'finneon',
                  'lumineon'
                ],
                order: 45
              },
              {
                location: 'Celestic Town',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'corphish',
                  'crawdaunt'
                ],
                order: 43
              },
              {
                location: 'Eterna City',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash'
                ],
                order: 18
              },
              {
                location: 'Eterna Forest',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'gastly',
                  'hoothoot',
                  'pineco',
                  'wurmple',
                  'silcoon',
                  'beautifly',
                  'cascoon',
                  'dustox',
                  'seedot',
                  'slakoth',
                  'nincada',
                  'bidoof',
                  'kricketot',
                  'budew',
                  'buneary'
                ],
                order: 17
              },
              {
                location: 'Fuego Ironworks',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magnemite',
                  'shellder',
                  'magmar',
                  'magikarp',
                  'gyarados',
                  'aron',
                  'floatzel',
                  'shellos',
                  'gastrodon',
                  'finneon',
                  'lumineon'
                ],
                order: 44
              },
              {
                location: 'Great Marsh',
                pokemon: [
                  'arbok',
                  'tangela',
                  'magikarp',
                  'gyarados',
                  'hoothoot',
                  'noctowl',
                  'yanma',
                  'wooper',
                  'quagsire',
                  'carvanha',
                  'barboach',
                  'whiscash',
                  'tropius',
                  'bibarel'
                ],
                order: 40
              },
              {
                location: 'Iron Island',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'qwilfish',
                  'wingull',
                  'pelipper',
                  'finneon',
                  'lumineon',
                  'zubat',
                  'golbat',
                  'geodude',
                  'graveler',
                  'onix',
                  'sableye',
                  'mawile',
                  'steelix'
                ],
                order: 46
              },
              {
                location: 'Lake Acuity',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'sneasel',
                  'teddiursa',
                  'lunatone',
                  'solrock',
                  'snorunt',
                  'bibarel',
                  'snover'
                ],
                order: 51
              },
              {
                location: 'Lake Valor',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'wobbuffet',
                  'lunatone',
                  'solrock',
                  'staravia',
                  'bibarel'
                ],
                order: 37
              },
              {
                location: 'Lake Verity',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'wobbuffet',
                  'lunatone',
                  'solrock',
                  'starly',
                  'bidoof'
                ],
                order: 3
              },
              {
                location: 'Lost Tower',
                pokemon: ['zubat', 'gastly', 'duskull', 'golbat'],
                order: 29
              },
              {
                location: 'Mt. Coronet',
                pokemon: [
                  'clefairy',
                  'zubat',
                  'golbat',
                  'machop',
                  'geodude',
                  'magikarp',
                  'gyarados',
                  'cleffa',
                  'nosepass',
                  'meditite',
                  'barboach',
                  'whiscash',
                  'chingling',
                  'bronzor',
                  'machoke',
                  'graveler',
                  'medicham',
                  'lunatone',
                  'solrock',
                  'bronzong',
                  'noctowl',
                  'loudred',
                  'absol',
                  'snover',
                  'abomasnow',
                  'dratini',
                  'dragonair',
                  'chimecho'
                ],
                order: 25
              },
              {
                location: 'Old Chateau',
                pokemon: ['gastly', 'gengar'],
                order: 20
              },
              {
                location: 'Oreburgh Gate',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'geodude',
                  'golbat',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash'
                ],
                order: 10
              },
              {
                location: 'Oreburgh Mine',
                pokemon: ['zubat', 'geodude', 'onix'],
                order: 12
              },
              {
                location: 'Pastoria City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'wingull',
                  'shellos',
                  'gastrodon'
                ],
                order: 39
              },
              {
                location: 'Pok\xe9mon League',
                pokemon: [
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'wingull',
                  'pelipper',
                  'luvdisc'
                ],
                order: 64
              },
              {
                location: 'Ravaged Path',
                pokemon: [
                  'zubat',
                  'golbat',
                  'psyduck',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash'
                ],
                order: 8
              },
              {
                location: 'Route 201',
                pokemon: [
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'growlithe',
                  'doduo',
                  'starly',
                  'bidoof',
                  'kricketot'
                ],
                order: 2
              },
              {
                location: 'Route 202',
                pokemon: [
                  'growlithe',
                  'sentret',
                  'zigzagoon',
                  'starly',
                  'bidoof',
                  'kricketot',
                  'shinx'
                ],
                order: 4
              },
              {
                location: 'Route 203',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'golduck',
                  'abra',
                  'cubone',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'pineco',
                  'lotad',
                  'seedot',
                  'starly',
                  'bidoof',
                  'kricketot',
                  'shinx'
                ],
                order: 9
              },
              {
                location: 'Route 204',
                pokemon: [
                  'caterpie',
                  'weedle',
                  'zubat',
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'pineco',
                  'wurmple',
                  'lotad',
                  'seedot',
                  'starly',
                  'bidoof',
                  'kricketot',
                  'shinx',
                  'budew',
                  'sunkern'
                ],
                order: 7
              },
              {
                location: 'Route 205',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'hoppip',
                  'bidoof',
                  'pachirisu',
                  'buizel',
                  'shellos',
                  'gastrodon',
                  'finneon',
                  'lumineon',
                  'psyduck',
                  'golduck',
                  'slowpoke',
                  'hoothoot',
                  'wurmple',
                  'silcoon',
                  'beautifly',
                  'cascoon',
                  'dustox',
                  'lotad',
                  'barboach',
                  'whiscash',
                  'kricketot',
                  'budew'
                ],
                order: 16
              },
              {
                location: 'Route 206',
                pokemon: [
                  'zubat',
                  'machop',
                  'geodude',
                  'ponyta',
                  'gligar',
                  'larvitar',
                  'baltoy',
                  'kricketune'
                ],
                order: 23
              },
              {
                location: 'Route 207',
                pokemon: [
                  'zubat',
                  'machop',
                  'geodude',
                  'ponyta',
                  'phanpy',
                  'stantler',
                  'kricketot'
                ],
                order: 11
              },
              {
                location: 'Route 208',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'dunsparce',
                  'smeargle',
                  'ralts',
                  'roselia',
                  'zangoose',
                  'seviper',
                  'bidoof',
                  'bibarel',
                  'budew'
                ],
                order: 26
              },
              {
                location: 'Route 209',
                pokemon: [
                  'vulpix',
                  'zubat',
                  'psyduck',
                  'golduck',
                  'chansey',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'snubbull',
                  'ralts',
                  'kirlia',
                  'roselia',
                  'duskull',
                  'staravia',
                  'bibarel'
                ],
                order: 28
              },
              {
                location: 'Route 210',
                pokemon: [
                  'geodude',
                  'ponyta',
                  'chansey',
                  'scyther',
                  'tauros',
                  'hoothoot',
                  'noctowl',
                  'pineco',
                  'miltank',
                  'seedot',
                  'nuzleaf',
                  'roselia',
                  'staravia',
                  'psyduck',
                  'golduck',
                  'machop',
                  'machoke',
                  'magikarp',
                  'gyarados',
                  'meditite',
                  'swablu',
                  'zangoose',
                  'seviper',
                  'barboach',
                  'whiscash',
                  'bagon',
                  'bibarel'
                ],
                order: 31
              },
              {
                location: 'Route 211',
                pokemon: [
                  'zubat',
                  'machop',
                  'hoothoot',
                  'teddiursa',
                  'tyrogue',
                  'meditite',
                  'bidoof',
                  'chingling',
                  'bronzor',
                  'machoke',
                  'graveler',
                  'noctowl'
                ],
                order: 22
              },
              {
                location: 'Route 212',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'marill',
                  'smeargle',
                  'ralts',
                  'kirlia',
                  'roselia',
                  'staravia',
                  'ekans',
                  'tentacool',
                  'tentacruel',
                  'grimer',
                  'quagsire',
                  'remoraid',
                  'octillery',
                  'lotad',
                  'lombre',
                  'buizel',
                  'shellos',
                  'gastrodon',
                  'croagunk'
                ],
                order: 41
              },
              {
                location: 'Route 213',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'swellow',
                  'wingull',
                  'buizel',
                  'shellos',
                  'gastrodon',
                  'chatot'
                ],
                order: 38
              },
              {
                location: 'Route 214',
                pokemon: [
                  'vulpix',
                  'zubat',
                  'psyduck',
                  'golduck',
                  'geodude',
                  'graveler',
                  'rhyhorn',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'houndour',
                  'poochyena',
                  'spoink'
                ],
                order: 34
              },
              {
                location: 'Route 215',
                pokemon: [
                  'abra',
                  'kadabra',
                  'drowzee',
                  'lickitung',
                  'scyther',
                  'marill',
                  'staravia'
                ],
                order: 32
              },
              {
                location: 'Route 216',
                pokemon: [
                  'zubat',
                  'graveler',
                  'sneasel',
                  'ursaring',
                  'meditite',
                  'snorunt',
                  'snover'
                ],
                order: 48
              },
              {
                location: 'Route 217',
                pokemon: [
                  'sneasel',
                  'ursaring',
                  'swinub',
                  'piloswine',
                  'delibird',
                  'snorunt',
                  'snover'
                ],
                order: 49
              },
              {
                location: 'Route 218',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'voltorb',
                  'mr. mime',
                  'magikarp',
                  'gyarados',
                  'floatzel',
                  'shellos',
                  'gastrodon',
                  'chatot',
                  'finneon',
                  'lumineon'
                ],
                order: 6
              },
              {
                location: 'Route 219',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'wingull',
                  'pelipper',
                  'finneon',
                  'lumineon'
                ],
                order: 5
              },
              {
                location: 'Route 221',
                pokemon: [
                  'nidorina',
                  'nidorino',
                  'tentacool',
                  'tentacruel',
                  'farfetchd',
                  'magikarp',
                  'gyarados',
                  'sudowoodo',
                  'girafarig',
                  'wingull',
                  'pelipper',
                  'roselia',
                  'floatzel',
                  'finneon',
                  'lumineon'
                ],
                order: 55
              },
              {
                location: 'Route 222',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magnemite',
                  'magneton',
                  'electabuzz',
                  'magikarp',
                  'gyarados',
                  'flaaffy',
                  'remoraid',
                  'octillery',
                  'wingull',
                  'pelipper',
                  'skitty',
                  'luxio',
                  'floatzel',
                  'chatot'
                ],
                order: 56
              },
              {
                location: 'Route 224',
                pokemon: [
                  'oddish',
                  'gloom',
                  'bellsprout',
                  'weepinbell',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'natu',
                  'shuckle',
                  'remoraid',
                  'octillery',
                  'beautifly',
                  'dustox',
                  'pelipper',
                  'roselia',
                  'luvdisc',
                  'floatzel',
                  'gastrodon'
                ],
                order: 63
              },
              {
                location: 'Ruin Maniac Cave',
                pokemon: ['geodude', 'hippopotas'],
                order: 35
              },
              {
                location: 'Route 220',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'chinchou',
                  'wingull',
                  'pelipper',
                  'finneon',
                  'lumineon'
                ],
                order: 54
              },
              {
                location: 'Route 223',
                pokemon: [
                  'tentacruel',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'pelipper',
                  'wailmer',
                  'wailord',
                  'mantyke'
                ],
                order: 61
              },
              {
                location: 'Sendoff Spring',
                pokemon: [
                  'golbat',
                  'golduck',
                  'graveler',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'lunatone',
                  'solrock',
                  'dusclops',
                  'staravia',
                  'bibarel',
                  'chingling'
                ],
                order: 53
              },
              { location: 'Solaceon Ruins', pokemon: ['unown'], order: 30 },
              {
                location: 'Sunyshore City',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'staryu',
                  'magikarp',
                  'gyarados',
                  'remoraid',
                  'octillery',
                  'wingull',
                  'pelipper'
                ],
                order: 57
              },
              {
                location: 'Trophy Garden',
                pokemon: [
                  'pikachu',
                  'pichu',
                  'roselia',
                  'staravia',
                  'kricketune'
                ],
                order: 42
              },
              {
                location: 'Twinleaf Town',
                pokemon: [
                  'psyduck',
                  'golduck',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados'
                ],
                order: 1
              },
              {
                location: 'Valley Windworks',
                pokemon: [
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'mareep',
                  'electrike',
                  'shinx',
                  'pachirisu',
                  'buizel',
                  'shellos',
                  'gastrodon',
                  'finneon',
                  'lumineon'
                ],
                order: 14
              },
              {
                location: 'Valor Lakefront',
                pokemon: [
                  'nidorina',
                  'nidorino',
                  'girafarig',
                  'houndour',
                  'staravia',
                  'bibarel',
                  'kricketune'
                ],
                order: 36
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'golbat',
                  'graveler',
                  'onix',
                  'rhyhorn',
                  'rhydon',
                  'steelix',
                  'gabite',
                  'magneton',
                  'magikarp',
                  'gyarados',
                  'azumarill',
                  'floatzel',
                  'dewgong',
                  'lapras'
                ],
                order: 62
              },
              {
                location: 'Wayward Cave',
                pokemon: [
                  'sandshrew',
                  'zubat',
                  'geodude',
                  'onix',
                  'bronzor',
                  'gible'
                ],
                order: 24
              }
            ]
          },
          _a(ya.Platinum),
          [[], []]
        ),
        ...fa(
          {
            game: ya.RedBlue,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['bulbasaur', 'charmander', 'squirtle'],
                order: 0
              },
              { location: 'Route 4', pokemon: ['magikarp'], order: 9 },
              { location: 'Celadon City', pokemon: ['eevee'], order: 26 },
              {
                location: 'Saffron City',
                pokemon: ['hitmonchan', 'hitmonlee'],
                order: 28
              },
              { location: 'Silph Co.', pokemon: ['lapras'], order: 29 },
              {
                location: 'Mt. Moon Fossil',
                pokemon: ['omanyte', 'kabuto'],
                order: 46
              },
              {
                location: 'Old Amber Fossil',
                pokemon: ['aerodactyl'],
                order: 47
              }
            ],
            statics: [
              { location: 'Route 12', pokemon: ['snorlax'], order: 40 },
              { location: 'Route 16', pokemon: ['snorlax'], order: 30 },
              { location: 'Seafoam Islands', pokemon: ['articuno'], order: 42 },
              { location: 'Power Plant', pokemon: ['zapdos'], order: 50 },
              { location: 'Victory Road', pokemon: ['moltres'], order: 53 }
            ],
            encounters: [
              {
                location: 'Celadon City',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'slowpoke',
                  'goldeen',
                  'magikarp'
                ],
                order: 25
              },
              {
                location: 'Cerulean City',
                pokemon: [
                  'psyduck',
                  'poliwag',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 11
              },
              {
                location: 'Cinnabar Island',
                pokemon: [
                  'poliwag',
                  'shellder',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 44
              },
              {
                location: "Diglett's Cave",
                pokemon: ['diglett', 'dugtrio'],
                order: 18
              },
              {
                location: 'Fuchsia City',
                pokemon: [
                  'poliwag',
                  'krabby',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 33
              },
              {
                location: 'Mt. Moon',
                pokemon: ['clefairy', 'zubat', 'paras', 'geodude'],
                order: 10
              },
              {
                location: 'Pallet Town',
                pokemon: ['poliwag', 'tentacool', 'goldeen', 'magikarp'],
                order: 1
              },
              {
                location: 'Pok\xe9mon Mansion',
                pokemon: [
                  'vulpix',
                  'growlithe',
                  'ponyta',
                  'grimer',
                  'muk',
                  'koffing',
                  'weezing',
                  'magmar'
                ],
                order: 45
              },
              {
                location: 'Pok\xe9mon Tower',
                pokemon: ['gastly', 'haunter', 'cubone'],
                order: 22
              },
              {
                location: 'Power Plant',
                pokemon: [
                  'pikachu',
                  'raichu',
                  'magnemite',
                  'magneton',
                  'voltorb',
                  'electabuzz'
                ],
                order: 49
              },
              {
                location: 'Rock Tunnel',
                pokemon: ['zubat', 'machop', 'geodude', 'onix'],
                order: 21
              },
              { location: 'Route 1', pokemon: ['pidgey', 'rattata'], order: 2 },
              {
                location: 'Route 2',
                pokemon: ['caterpie', 'weedle', 'pidgey', 'rattata'],
                order: 4
              },
              {
                location: 'Route 3',
                pokemon: ['pidgey', 'spearow', 'jigglypuff'],
                order: 7
              },
              {
                location: 'Route 4',
                pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew'],
                order: 8
              },
              {
                location: 'Route 5',
                pokemon: ['pidgey', 'oddish', 'meowth', 'mankey', 'bellsprout'],
                order: 14
              },
              {
                location: 'Route 6',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'meowth',
                  'mankey',
                  'poliwag',
                  'bellsprout',
                  'shellder',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 15
              },
              {
                location: 'Route 7',
                pokemon: [
                  'pidgey',
                  'vulpix',
                  'oddish',
                  'meowth',
                  'mankey',
                  'growlithe',
                  'bellsprout'
                ],
                order: 23
              },
              {
                location: 'Route 8',
                pokemon: [
                  'pidgey',
                  'ekans',
                  'sandshrew',
                  'vulpix',
                  'meowth',
                  'mankey',
                  'growlithe'
                ],
                order: 24
              },
              {
                location: 'Route 9',
                pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew'],
                order: 19
              },
              {
                location: 'Route 10',
                pokemon: [
                  'spearow',
                  'ekans',
                  'sandshrew',
                  'poliwag',
                  'poliwhirl',
                  'slowpoke',
                  'voltorb',
                  'goldeen',
                  'magikarp'
                ],
                order: 20
              },
              {
                location: 'Route 11',
                pokemon: [
                  'spearow',
                  'ekans',
                  'sandshrew',
                  'poliwag',
                  'shellder',
                  'drowzee',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 17
              },
              {
                location: 'Route 12',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'gloom',
                  'venonat',
                  'poliwag',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 39
              },
              {
                location: 'Route 13',
                pokemon: [
                  'pidgey',
                  'oddish',
                  'gloom',
                  'venonat',
                  'poliwag',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'krabby',
                  'goldeen',
                  'magikarp',
                  'ditto'
                ],
                order: 38
              },
              {
                location: 'Route 14',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'bellsprout',
                  'weepinbell',
                  'ditto'
                ],
                order: 37
              },
              {
                location: 'Route 15',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'bellsprout',
                  'weepinbell',
                  'ditto'
                ],
                order: 36
              },
              {
                location: 'Route 16',
                pokemon: ['rattata', 'raticate', 'spearow', 'doduo'],
                order: 27
              },
              {
                location: 'Route 17',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'tentacool',
                  'doduo',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 31
              },
              {
                location: 'Route 18',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'tentacool',
                  'doduo',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 32
              },
              {
                location: 'Route 19',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'shellder',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 35
              },
              {
                location: 'Route 20',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'shellder',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 43
              },
              {
                location: 'Route 21',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'raticate',
                  'poliwag',
                  'tentacool',
                  'shellder',
                  'tangela',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 48
              },
              {
                location: 'Route 22',
                pokemon: [
                  'rattata',
                  'spearow',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'poliwag',
                  'goldeen',
                  'magikarp'
                ],
                order: 5
              },
              {
                location: 'Route 23',
                pokemon: [
                  'spearow',
                  'fearow',
                  'ekans',
                  'arbok',
                  'sandshrew',
                  'sandslash',
                  'poliwag',
                  'slowbro',
                  'kingler',
                  'seadra',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'ditto'
                ],
                order: 51
              },
              {
                location: 'Route 24',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'oddish',
                  'psyduck',
                  'poliwag',
                  'abra',
                  'bellsprout',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 12
              },
              {
                location: 'Route 25',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'oddish',
                  'psyduck',
                  'poliwag',
                  'abra',
                  'bellsprout',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 13
              },
              {
                location: 'Safari Zone',
                pokemon: [
                  'nidoran \u2640',
                  'nidorina',
                  'nidoran \u2642',
                  'nidorino',
                  'paras',
                  'parasect',
                  'venonat',
                  'psyduck',
                  'poliwag',
                  'slowpoke',
                  'krabby',
                  'exeggcute',
                  'rhyhorn',
                  'chansey',
                  'goldeen',
                  'scyther',
                  'pinsir',
                  'magikarp',
                  'dratini',
                  'doduo',
                  'kangaskhan',
                  'tauros',
                  'venomoth'
                ],
                order: 34
              },
              {
                location: 'Seafoam Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'psyduck',
                  'golduck',
                  'slowpoke',
                  'slowbro',
                  'seel',
                  'shellder',
                  'krabby',
                  'horsea',
                  'staryu',
                  'dewgong',
                  'kingler',
                  'seadra',
                  'poliwag',
                  'goldeen',
                  'magikarp'
                ],
                order: 41
              },
              {
                location: 'Vermilion City',
                pokemon: [
                  'poliwag',
                  'shellder',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 16
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'zubat',
                  'golbat',
                  'machop',
                  'machoke',
                  'geodude',
                  'graveler',
                  'onix',
                  'marowak',
                  'venomoth'
                ],
                order: 52
              },
              {
                location: 'Viridian City',
                pokemon: ['poliwag', 'tentacool', 'goldeen', 'magikarp'],
                order: 3
              },
              {
                location: 'Viridian Forest',
                pokemon: ['caterpie', 'metapod', 'weedle', 'kakuna', 'pikachu'],
                order: 6
              }
            ]
          },
          _a(ya.RedBlue),
          [
            [
              'ekans',
              'arbok',
              'oddish',
              'gloom',
              'vileplume',
              'mankey',
              'primeape',
              'growlithe',
              'arcanine',
              'scyther',
              'electabuzz'
            ],
            [
              'sandshrew',
              'sandslash',
              'vulpix',
              'ninetales',
              'meowth',
              'persian',
              'bellsprout',
              'weepinbell',
              'victreebel',
              'magmar',
              'pinsir'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.RubySapphire,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['treecko', 'torchic', 'mudkip'],
                order: 0
              },
              { location: 'Lavaridge Town', pokemon: ['wynaut'], order: 26 },
              {
                location: 'Weather Institute',
                pokemon: ['castform'],
                order: 35
              },
              {
                location: 'Route 111 Fossil',
                pokemon: ['lileep', 'anorith'],
                order: 28
              }
            ],
            statics: [
              { location: 'Devon Scope', pokemon: ['kecleon'], order: 37 },
              {
                location: 'Cave of Origin',
                pokemon: ['kyogre', 'groudon'],
                order: 55
              },
              { location: 'Team Hideout', pokemon: ['electrode'], order: 44 },
              { location: 'Ancient Tomb', pokemon: ['registeel'], order: 63 },
              { location: 'Desert Ruins', pokemon: ['regirock'], order: 64 },
              { location: 'Island Cave', pokemon: ['regice'], order: 65 }
            ],
            encounters: [
              {
                location: 'Abandoned Ship',
                pokemon: ['tentacool', 'tentacruel', 'magikarp'],
                order: 33
              },
              {
                location: 'Cave of Origin',
                pokemon: ['zubat', 'golbat', 'sableye', 'mawile'],
                order: 54
              },
              {
                location: 'Dewford Town',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 9
              },
              {
                location: 'Ever Grande City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'corsola',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'luvdisc'
                ],
                order: 66
              },
              {
                location: 'Fiery Path',
                pokemon: [
                  'machop',
                  'grimer',
                  'koffing',
                  'slugma',
                  'numel',
                  'torkoal'
                ],
                order: 20
              },
              {
                location: 'Granite Cave',
                pokemon: [
                  'zubat',
                  'abra',
                  'geodude',
                  'makuhita',
                  'sableye',
                  'mawile',
                  'aron',
                  'nosepass'
                ],
                order: 11
              },
              {
                location: 'Jagged Pass',
                pokemon: ['machop', 'numel', 'spoink'],
                order: 25
              },
              {
                location: 'Lilycove City',
                pokemon: [
                  'tentacool',
                  'staryu',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 40
              },
              {
                location: 'Meteor Falls',
                pokemon: [
                  'zubat',
                  'goldeen',
                  'magikarp',
                  'lunatone',
                  'solrock',
                  'barboach',
                  'golbat',
                  'whiscash',
                  'bagon'
                ],
                order: 23
              },
              {
                location: 'Mossdeep City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 46
              },
              {
                location: 'Mt. Pyre',
                pokemon: [
                  'shuppet',
                  'duskull',
                  'vulpix',
                  'wingull',
                  'meditite',
                  'chimecho'
                ],
                order: 42
              },
              {
                location: 'New Mauville',
                pokemon: ['magnemite', 'voltorb', 'magneton', 'electrode'],
                order: 29
              },
              {
                location: 'Pacifidlog Town',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 59
              },
              {
                location: 'Petalburg City',
                pokemon: ['goldeen', 'magikarp', 'marill', 'corphish'],
                order: 4
              },
              {
                location: 'Petalburg Woods',
                pokemon: [
                  'zigzagoon',
                  'wurmple',
                  'silcoon',
                  'cascoon',
                  'taillow',
                  'shroomish',
                  'slakoth'
                ],
                order: 6
              },
              {
                location: 'Route 101',
                pokemon: ['poochyena', 'zigzagoon', 'wurmple'],
                order: 1
              },
              {
                location: 'Route 102',
                pokemon: [
                  'goldeen',
                  'magikarp',
                  'marill',
                  'poochyena',
                  'zigzagoon',
                  'wurmple',
                  'lotad',
                  'seedot',
                  'ralts',
                  'surskit',
                  'corphish'
                ],
                order: 3
              },
              {
                location: 'Route 103',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'poochyena',
                  'zigzagoon',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 2
              },
              {
                location: 'Route 104',
                pokemon: [
                  'magikarp',
                  'zigzagoon',
                  'wurmple',
                  'taillow',
                  'wingull',
                  'pelipper'
                ],
                order: 30
              },
              {
                location: 'Route 105',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 31
              },
              {
                location: 'Route 106',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 10
              },
              {
                location: 'Route 107',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 12
              },
              {
                location: 'Route 108',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 32
              },
              {
                location: 'Route 109',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 13
              },
              {
                location: 'Route 110',
                pokemon: [
                  'oddish',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'plusle',
                  'minun',
                  'gulpin',
                  'wailmer'
                ],
                order: 15
              },
              {
                location: 'Route 111',
                pokemon: [
                  'sandshrew',
                  'geodude',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'surskit',
                  'trapinch',
                  'cacnea',
                  'barboach',
                  'baltoy'
                ],
                order: 27
              },
              {
                location: 'Route 112',
                pokemon: ['machop', 'numel'],
                order: 19
              },
              {
                location: 'Route 113',
                pokemon: ['sandshrew', 'skarmory', 'spinda'],
                order: 21
              },
              {
                location: 'Route 114',
                pokemon: [
                  'geodude',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'lotad',
                  'lombre',
                  'seedot',
                  'nuzleaf',
                  'surskit',
                  'swablu',
                  'zangoose',
                  'seviper',
                  'barboach'
                ],
                order: 22
              },
              {
                location: 'Route 115',
                pokemon: [
                  'jigglypuff',
                  'tentacool',
                  'magikarp',
                  'taillow',
                  'swellow',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'swablu'
                ],
                order: 24
              },
              {
                location: 'Route 116',
                pokemon: [
                  'zigzagoon',
                  'taillow',
                  'nincada',
                  'whismur',
                  'skitty'
                ],
                order: 7
              },
              {
                location: 'Route 117',
                pokemon: [
                  'oddish',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'zigzagoon',
                  'surskit',
                  'volbeat',
                  'illumise',
                  'roselia',
                  'corphish'
                ],
                order: 16
              },
              {
                location: 'Route 118',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'electrike',
                  'manectric',
                  'carvanha',
                  'sharpedo',
                  'kecleon'
                ],
                order: 17
              },
              {
                location: 'Route 119',
                pokemon: [
                  'oddish',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'carvanha',
                  'kecleon',
                  'tropius'
                ],
                order: 34
              },
              {
                location: 'Route 120',
                pokemon: [
                  'oddish',
                  'goldeen',
                  'magikarp',
                  'marill',
                  'zigzagoon',
                  'linoone',
                  'surskit',
                  'barboach',
                  'kecleon',
                  'absol'
                ],
                order: 36
              },
              {
                location: 'Route 121',
                pokemon: [
                  'oddish',
                  'gloom',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'kecleon',
                  'shuppet',
                  'duskull'
                ],
                order: 38
              },
              {
                location: 'Route 122',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 41
              },
              {
                location: 'Route 123',
                pokemon: [
                  'oddish',
                  'gloom',
                  'tentacool',
                  'magikarp',
                  'zigzagoon',
                  'linoone',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'kecleon',
                  'shuppet',
                  'duskull'
                ],
                order: 43
              },
              {
                location: 'Route 124',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'chinchou',
                  'clamperl',
                  'relicanth'
                ],
                order: 45
              },
              {
                location: 'Route 125',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 47
              },
              {
                location: 'Route 126',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'chinchou',
                  'clamperl',
                  'relicanth'
                ],
                order: 49
              },
              {
                location: 'Route 127',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 50
              },
              {
                location: 'Route 128',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'corsola',
                  'wingull',
                  'pelipper',
                  'wailmer',
                  'luvdisc'
                ],
                order: 51
              },
              {
                location: 'Route 129',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'wailord'
                ],
                order: 56
              },
              {
                location: 'Route 130',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer',
                  'wynaut'
                ],
                order: 57
              },
              {
                location: 'Route 131',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 58
              },
              {
                location: 'Route 132',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 60
              },
              {
                location: 'Route 133',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 61
              },
              {
                location: 'Route 134',
                pokemon: [
                  'tentacool',
                  'horsea',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'sharpedo',
                  'wailmer'
                ],
                order: 62
              },
              { location: 'Rusturf Tunnel', pokemon: ['whismur'], order: 8 },
              {
                location: 'Safari Zone',
                pokemon: [
                  'oddish',
                  'gloom',
                  'psyduck',
                  'golduck',
                  'doduo',
                  'dodrio',
                  'rhyhorn',
                  'goldeen',
                  'seaking',
                  'pinsir',
                  'magikarp',
                  'geodude',
                  'natu',
                  'xatu',
                  'heracross',
                  'phanpy',
                  'pikachu',
                  'wobbuffet',
                  'girafarig'
                ],
                order: 39
              },
              {
                location: 'Seafloor Cavern',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'magikarp',
                  'wailmer'
                ],
                order: 52
              },
              {
                location: 'Shoal Cave',
                pokemon: [
                  'zubat',
                  'golbat',
                  'tentacool',
                  'magikarp',
                  'wailmer',
                  'spheal',
                  'snorunt'
                ],
                order: 48
              },
              {
                location: 'Slateport City',
                pokemon: [
                  'tentacool',
                  'magikarp',
                  'wingull',
                  'pelipper',
                  'wailmer'
                ],
                order: 14
              },
              {
                location: 'Sootopolis City',
                pokemon: ['tentacool', 'magikarp', 'gyarados'],
                order: 53
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'zubat',
                  'golbat',
                  'whismur',
                  'loudred',
                  'makuhita',
                  'hariyama',
                  'aron',
                  'lairon',
                  'geodude',
                  'graveler',
                  'mawile',
                  'meditite',
                  'medicham',
                  'goldeen',
                  'magikarp',
                  'sableye',
                  'barboach',
                  'whiscash'
                ],
                order: 67
              }
            ]
          },
          _a(ya.RubySapphire),
          [
            [
              'seedot',
              'nuzleaf',
              'shiftry',
              'mawile',
              'zangoose',
              'solrock',
              'groudon'
            ],
            [
              'lotad',
              'lombre',
              'ludicolo',
              'sableye',
              'seviper',
              'lunatone',
              'kyogre'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.SunMoon,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['rowlet', 'litten', 'popplio'],
                order: 0
              },
              { location: 'Paniola Ranch Egg', pokemon: ['eevee'], order: 15 },
              {
                location: 'Seafolk Village',
                pokemon: ['aerodactyl'],
                order: 48
              }
            ],
            statics: [
              {
                location: 'Exeggutor Island',
                pokemon: ['exeggutor-alola'],
                order: 53
              },
              {
                location: 'Cell Collection',
                pokemon: ['zygarde'],
                order: 9999
              },
              {
                location: 'Title Legendary',
                pokemon: ['solgaleo', 'lunala'],
                order: 55
              }
            ],
            encounters: [
              {
                location: 'Route 1',
                pokemon: [
                  'caterpie',
                  'rattata-alola',
                  'ledyba',
                  'spinarak',
                  'pikipek',
                  'yungoos',
                  'metapod',
                  'pichu',
                  'pikachu',
                  'happiny',
                  'grubbin',
                  'bonsly',
                  'sudowoodo',
                  'munchlax',
                  'snorlax'
                ],
                order: 1
              },
              {
                location: "Hau'oli Outskirts",
                pokemon: ['rattata-alola', 'slowpoke', 'wingull', 'yungoos'],
                order: 2
              },
              {
                location: 'Trainers School',
                pokemon: ['meowth-alola', 'magnemite', 'grimer-alola'],
                order: 3
              },
              {
                location: "Hau'oli City",
                pokemon: [
                  'rattata-alola',
                  'meowth-alola',
                  'abra',
                  'magnemite',
                  'grimer-alola',
                  'pichu',
                  'pikachu',
                  'happiny',
                  'wingull',
                  'yungoos',
                  'klink'
                ],
                order: 4
              },
              {
                location: 'Route 2',
                pokemon: [
                  'rattata-alola',
                  'meowth-alola',
                  'abra',
                  'drowzee',
                  'smeargle',
                  'yungoos',
                  'spearow',
                  'growlithe',
                  'cutiefly',
                  'makuhita',
                  'crabrawler',
                  'chikorita'
                ],
                order: 5
              },
              {
                location: "Hau'oli Cemetary",
                pokemon: [
                  'zubat',
                  'gastly',
                  'misdreavus',
                  'drifloon',
                  'litwick'
                ],
                order: 6
              },
              { location: 'Berry Fields', pokemon: ['crabrawler'], order: 7 },
              {
                location: 'Verdant Cavern',
                pokemon: ['zubat', 'diglett-alola', 'rattata-alola', 'yungoos'],
                order: 8
              },
              {
                location: 'Route 3',
                pokemon: [
                  'rattata-alola',
                  'spearow',
                  'mankey',
                  'delibird',
                  'yungoos',
                  'cutiefly',
                  'bagon',
                  'salamence',
                  'rufflet',
                  'vullaby',
                  'crabrawler',
                  'cyndaquil'
                ],
                order: 9
              },
              {
                location: 'Melemele Meadow',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'cottonee',
                  'petilil',
                  'oricorio',
                  'cutiefly'
                ],
                order: 10
              },
              {
                location: 'Seaward Cave',
                pokemon: ['zubat', 'diglett-alola', 'totodile'],
                order: 11
              },
              {
                location: 'Ten Carat Hill',
                pokemon: [
                  'zubat',
                  'diglett-alola',
                  'roggenrola',
                  'carbink',
                  'deino',
                  'machop',
                  'spinda',
                  'rockruff'
                ],
                order: 12
              },
              {
                location: 'Route 4',
                pokemon: [
                  'rattata-alola',
                  'eevee',
                  'espeon',
                  'umbreon',
                  'igglybuff',
                  'jigglypuff',
                  'happiny',
                  'lillipup',
                  ' pikipek',
                  'yungoos',
                  'grubbin',
                  'mudbray',
                  'crabrawler',
                  'venipede'
                ],
                order: 13
              },
              {
                location: 'Paniola Ranch',
                pokemon: ['tauros', 'miltank', 'lillipup', 'mudbray'],
                order: 14
              },
              {
                location: 'Route 5',
                pokemon: [
                  'caterpie',
                  'butterfree',
                  'metapod',
                  'lillipup',
                  'pikipek',
                  'trumbeak',
                  'bonsly',
                  'sudowoodo',
                  'happiny',
                  'diglett-alola',
                  'grubbin',
                  'fomantis',
                  'crabrawler',
                  'bellsprout'
                ],
                order: 16
              },
              {
                location: 'Brooklet Hill',
                pokemon: [
                  'paras',
                  'psyduck',
                  'poliwag',
                  'wingull',
                  'surskit',
                  'lillipup',
                  'dewpider',
                  'morelull',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'feebas',
                  'marill'
                ],
                order: 17
              },
              {
                location: 'Route 6',
                pokemon: [
                  'rattata-alola',
                  'eevee',
                  'espeon',
                  'umbreon',
                  'igglybuff',
                  'lillipup',
                  'pikipek',
                  'yungoos',
                  'grubbin',
                  'mudbray',
                  'oricorio',
                  'gothita'
                ],
                order: 18
              },
              {
                location: 'Route 7',
                pokemon: [
                  'diglett-alola',
                  'staryu',
                  'starmie',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'spheal'
                ],
                order: 19
              },
              {
                location: 'Wela Volcano Park',
                pokemon: [
                  'cubone',
                  'kangaskhan',
                  'magby',
                  'magmar',
                  'fletchling',
                  'salandit'
                ],
                order: 20
              },
              {
                location: 'Melemele Sea',
                pokemon: [
                  'tentacool',
                  'wingull',
                  'finneon',
                  'magikarp',
                  'gyarados',
                  'corsola',
                  'mareanie',
                  'luvdisc',
                  'wishiwashi'
                ],
                order: 21
              },
              {
                location: "Kala'e Bay",
                pokemon: [
                  'rattata-alola',
                  'slowpoke',
                  'slowbro',
                  'wingull',
                  'bagon',
                  'shelgon',
                  'yungoos',
                  'tentacool',
                  'finneon',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'horsea'
                ],
                order: 22
              },
              {
                location: 'Route 8',
                pokemon: [
                  'rattata-alola',
                  'fletchinder',
                  'trumbeak',
                  'pikipek',
                  'yungoos',
                  'salandit',
                  'stufful',
                  'crabrawler',
                  'tentacool',
                  'wingull',
                  'finneon',
                  'magikarp',
                  'gyarados',
                  'chinchou',
                  'wishiwashi',
                  'wimpod',
                  'luxio'
                ],
                order: 23
              },
              {
                location: 'Lush Jungle',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'paras',
                  'bonsly',
                  'sudowoodo',
                  'happiny',
                  'trumbeak',
                  'fomantis',
                  'morelull',
                  'comfey',
                  'oranguru',
                  'passimian',
                  'bounsweet',
                  'pinsir',
                  'goomy',
                  'castform',
                  'zubat',
                  'diglett-alola'
                ],
                order: 24
              },
              {
                location: "Diglett's Tunnel",
                pokemon: ['zubat', 'diglett-alola'],
                order: 25
              },
              {
                location: 'Route 9',
                pokemon: [
                  'magikarp',
                  'gyarados',
                  'corsola',
                  'mareanie',
                  'luvdisc',
                  'wishiwashi'
                ],
                order: 26
              },
              {
                location: 'Memorial Hill',
                pokemon: ['zubat', 'gastly', 'phantump'],
                order: 27
              },
              {
                location: 'Akala Outskirts',
                pokemon: [
                  'raticate-alola',
                  'wingull',
                  'nosepass',
                  'gumshoos',
                  'stufful',
                  'magikarp',
                  'gyarados',
                  'chinchou',
                  'wishiwashi',
                  'honedge'
                ],
                order: 28
              },
              {
                location: 'Hano Beach',
                pokemon: [
                  'staryu',
                  'sandygast',
                  'tentacool',
                  'wingull',
                  'finneon',
                  'pyukumuku'
                ],
                order: 29
              },
              {
                location: 'Malie Garden',
                pokemon: [
                  'meowth-alola',
                  'psyduck',
                  'poliwag',
                  'ledian',
                  'ariados',
                  'masquerain',
                  'cottonee',
                  'petilil',
                  'araquanid',
                  'poliwhirl',
                  'poliwrath',
                  'politoed',
                  'castform',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados'
                ],
                order: 30
              },
              {
                location: 'Outer Cape',
                pokemon: [
                  'raticate-alola',
                  'magnemite',
                  'grimer-alola',
                  'trubbish',
                  'garbodor',
                  'gumshoos'
                ],
                order: 31
              },
              {
                location: 'Route 10',
                pokemon: [
                  'raticate-alola',
                  'fearow',
                  'ledian',
                  'ariados',
                  'skarmory',
                  'pancham',
                  'pangoro',
                  'gumshoos',
                  'crabrawler',
                  'staravia'
                ],
                order: 32
              },
              {
                location: 'Mount Hokulani',
                pokemon: [
                  'fearow',
                  'ditto',
                  'cleffa',
                  'clefairy',
                  'chansey',
                  'skarmory',
                  'beldum',
                  'minior',
                  'axew'
                ],
                order: 33
              },
              {
                location: 'Route 11',
                pokemon: [
                  'raticate-alola',
                  'paras',
                  'ledian',
                  'ariados',
                  'pancham',
                  'pangoro',
                  'trumbeak',
                  'gumshoos',
                  'morelull',
                  'komala',
                  'vigoroth'
                ],
                order: 34
              },
              {
                location: 'Route 12',
                pokemon: [
                  'geodude-alola',
                  'elekid',
                  'electabuzz',
                  'chansey',
                  'torkoal',
                  'mudbray'
                ],
                order: 35
              },
              {
                location: 'Blush Mountain',
                pokemon: [
                  'geodude-alola',
                  'elekid',
                  'electabuzz',
                  'chansey',
                  'torkoal',
                  'charjabug',
                  'mudbray',
                  'turtonator',
                  'togedemaru',
                  'rhyhorn'
                ],
                order: 36
              },
              {
                location: 'Secluded Shore',
                pokemon: [
                  'crabrawler',
                  'tentacool',
                  'pelipper',
                  'finneon',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'bruxish'
                ],
                order: 37
              },
              {
                location: 'Route 13',
                pokemon: ['magikarp', 'gyarados', 'wishiwashi', 'bruxish'],
                order: 38
              },
              {
                location: 'Tapu Village',
                pokemon: [
                  'raticate-alola',
                  'sandshrew-alola',
                  'vulpix-alola',
                  'pelipper',
                  'absol',
                  'snorunt',
                  'gumshoos',
                  'vanillite',
                  'castform',
                  'swinub'
                ],
                order: 39
              },
              {
                location: 'Route 14',
                pokemon: [
                  'tentacool',
                  'pelipper',
                  'finneon',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'bruxish'
                ],
                order: 40
              },
              {
                location: 'Thrifty Megamart (Abandoned Site)',
                pokemon: ['golbat', 'haunter', 'gengar', 'klefki', 'mimikyu'],
                order: 41
              },
              {
                location: 'Route 15',
                pokemon: [
                  'raticate-alola',
                  'slowpoke',
                  'pelipper',
                  'gumshoos',
                  'tentacool',
                  'finneon',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'bruxish'
                ],
                order: 42
              },
              {
                location: 'Route 16',
                pokemon: [
                  'raticate-alola',
                  'slowpoke',
                  'pelipper',
                  'gumshoos',
                  'crabrawler',
                  'duosion'
                ],
                order: 43
              },
              {
                location: "Ula'ula Meadow",
                pokemon: [
                  'ledian',
                  'ariados',
                  'cottonee',
                  'petilil',
                  'oricorio',
                  'ribombee',
                  'roselia'
                ],
                order: 44
              },
              {
                location: 'Route 17',
                pokemon: [
                  'raticate-alola',
                  'fearow',
                  'ledian',
                  'ariados',
                  'pancham',
                  'pangoro',
                  'gumshoos',
                  'graveler-alola',
                  'skarmory',
                  'goomy',
                  'castform',
                  'crabrawler'
                ],
                order: 45
              },
              {
                location: 'Haina Desert',
                pokemon: [
                  'dugtrio-alola',
                  'sandile',
                  'trapinch',
                  'gabite',
                  'castform'
                ],
                order: 46
              },
              {
                location: 'Seafolk Village',
                pokemon: [
                  'magikarp',
                  'gyarados',
                  'wailmer',
                  'wailord',
                  'dhelmise'
                ],
                order: 47
              },
              {
                location: 'Poni Wilds',
                pokemon: [
                  'raticate-alola',
                  'exeggcute',
                  'granbull',
                  'pelipper',
                  'gastrodon',
                  'gumshoos',
                  'crabrawler',
                  'wimpod',
                  'tentacruel',
                  'lumineon',
                  'lapras',
                  'pelipper',
                  'wailmer',
                  'wailord',
                  'relicanth',
                  'samurott'
                ],
                order: 49
              },
              {
                location: 'Ancient Poni Path',
                pokemon: [
                  'raticate-alola',
                  'exeggcute',
                  'granbull',
                  'pelipper',
                  'gastrodon',
                  'gumshoos',
                  'emboar'
                ],
                order: 50
              },
              {
                location: 'Poni Breaker Coast',
                pokemon: [
                  'wimpod',
                  'magikarp',
                  'gyarados',
                  'sharpedo',
                  'wailmer',
                  'wailord'
                ],
                order: 51
              },
              {
                location: 'Exeggutor Island',
                pokemon: [
                  'exeggcute',
                  'exeggutor-alola',
                  'pelipper',
                  'gastrodon',
                  'sliggoo',
                  'castform',
                  'serperior'
                ],
                order: 52
              },
              {
                location: 'Vast Poni Canyon',
                pokemon: [
                  'machoke',
                  'murkrow',
                  'skarmory',
                  'boldore',
                  'carbink',
                  'lycanroc',
                  'jangmo-o',
                  'kommo-o',
                  'golbat',
                  'dugtrio-alola',
                  'sableye',
                  'golduck',
                  'dratini',
                  'dragonair',
                  'barboach',
                  'whiscash'
                ],
                order: 54
              },
              {
                location: 'Mount Lanakila',
                pokemon: [
                  'sandshrew-alola',
                  'vulpix-alola',
                  'sneasel',
                  'absol',
                  'snorunt',
                  'glalie',
                  'vanillish',
                  'castform',
                  'golbat',
                  'drampa'
                ],
                order: 56
              }
            ]
          },
          _a(ya.SunMoon),
          [
            [
              'vulpix',
              'ninetales',
              'cranidos',
              'rampardos',
              'tirtouga',
              'carracosta',
              'cottonee',
              'whimsicott',
              'rufflet',
              'braviary',
              'passimian',
              'turtonator',
              'solgaleo',
              'buzzwole',
              'kartana'
            ],
            [
              'sandshrew',
              'sandslash',
              'shieldon',
              'bastiodon',
              'archen',
              'archeops',
              'petilil',
              'lilligant',
              'vullaby',
              'mandibuzz',
              'oranguru',
              'drampa',
              'lunala',
              'pheromosa',
              'celesteela'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.SwordShield,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['grookey', 'scorbunny', 'sobble'],
                order: 0
              },
              {
                location: 'Gigantamax Pikachu',
                pokemon: ['pikachu'],
                order: 4
              },
              { location: 'Gigantamax Eevee', pokemon: ['eevee'], order: 5 },
              { location: 'Day Care Egg', pokemon: ['toxel'], order: 11 },
              {
                location: 'Mismatched Fossil',
                pokemon: ['dracozolt', 'arctozolt', 'dracovish', 'arctovish'],
                order: 16
              }
            ],
            statics: [
              { location: 'Energy Plant', pokemon: ['eternatus'], order: 23 }
            ],
            encounters: [
              {
                location: 'Slumbering Weald',
                pokemon: [
                  'skwovet',
                  'rookidee',
                  'blipbug',
                  'grubbin',
                  'hoothoot'
                ],
                order: 1
              },
              {
                location: 'Route 1',
                pokemon: [
                  'skwovet',
                  'rookidee',
                  'wooloo',
                  'nickit',
                  'blipbug',
                  'caterpie',
                  'grubbin',
                  'hoothoot'
                ],
                order: 2
              },
              {
                location: 'Route 2',
                pokemon: [
                  'skwovet',
                  'rookidee',
                  'nickit',
                  'chewtle',
                  'yamper',
                  'zigzagoon-galar',
                  'blipbug',
                  'seedot',
                  'hoothoot',
                  'magikarp',
                  'arrokuda',
                  'barraskewda',
                  'gyarados'
                ],
                order: 3
              },
              { location: 'Wild Area', pokemon: [], order: 6 },
              {
                location: 'Route 3',
                pokemon: [
                  'zigzagoon-galar',
                  'gossifleur',
                  'vulpix',
                  'growlithe',
                  'stunky',
                  'trubbish',
                  'tyrogue',
                  'rookidee',
                  'machop',
                  'pancham',
                  'mudbray',
                  'klink',
                  'sizzlipede',
                  'skwovet',
                  'cherubi'
                ],
                order: 7
              },
              {
                location: 'Galar Mine',
                pokemon: [
                  'rolycoly',
                  'timburr',
                  'woobat',
                  'diglett',
                  'drilbur',
                  'roggenrola',
                  'carkol'
                ],
                order: 8
              },
              {
                location: 'Route 4',
                pokemon: [
                  'electrike',
                  'meowth-galar',
                  'yamper',
                  'pumpkaboo',
                  'pikachu',
                  'eevee',
                  'diglett',
                  'wooloo',
                  'milcery',
                  'joltik',
                  'cutiefly',
                  'budew',
                  'ferroseed',
                  'skwovet',
                  'magikarp',
                  'chewtle',
                  'goldeen'
                ],
                order: 9
              },
              {
                location: 'Route 5',
                pokemon: [
                  'stufful',
                  'swirlix',
                  'spritzee',
                  'minccino',
                  'wobbuffet',
                  "farfetch'd-galar",
                  'drifloon',
                  'dottler',
                  'espurr',
                  'nuzleaf',
                  'lombre',
                  'applin',
                  'dewpider',
                  'nincada',
                  'skwovet',
                  'magikarp',
                  'chewtle',
                  'goldeen'
                ],
                order: 10
              },
              {
                location: 'Hulbery',
                pokemon: ['arrokuda', 'chinchou', 'basculin', 'chewtle'],
                order: 12
              },
              {
                location: 'Galar Mine No. 2',
                pokemon: [
                  'shellos',
                  'wimpod',
                  'binacle',
                  'scraggy',
                  'croagunk',
                  'noibat',
                  'chewtle',
                  'shuckle',
                  'stunfisk-galar',
                  'barboach',
                  'corphish'
                ],
                order: 13
              },
              {
                location: 'Motostoke Outskirts',
                pokemon: ['arrokuda', 'chinchou', 'basculin', 'chewtle'],
                order: 14
              },
              {
                location: 'Route 6',
                pokemon: [
                  'yamask-galar',
                  'helioptile',
                  'dugtrio',
                  'maractus',
                  'axew',
                  'trapinch',
                  'silicobra',
                  'durant',
                  'duskull',
                  'skorupi',
                  'hippopotas',
                  'heatmor',
                  'torkoal',
                  'hawlucha',
                  'greedent',
                  'magikarp',
                  'drednaw',
                  'goldeen'
                ],
                order: 15
              },
              {
                location: 'Glimwood Tangle',
                pokemon: [
                  'morgrem',
                  'shiinotic',
                  'hattrem',
                  'sinistea',
                  'phantump',
                  'swirlix',
                  'spritzee',
                  'indeedee',
                  'ponyta-galar',
                  'passimian',
                  'oranguru',
                  'impidimp'
                ],
                order: 16
              },
              {
                location: 'Route 7',
                pokemon: [
                  'perrserker',
                  'thievul',
                  'galvantula',
                  'liepard',
                  'inkay',
                  'morpeko',
                  'toxel',
                  'karrablast',
                  'corviknight',
                  'meowstic',
                  'seismitoad',
                  'shelmet',
                  'greedent'
                ],
                order: 17
              },
              {
                location: 'Route 8',
                pokemon: [
                  'golett',
                  'golurk',
                  'pawniard',
                  'boldore',
                  'rufflet',
                  'togedemaru',
                  'solrock',
                  'sandaconda',
                  'rhyhorn',
                  'dusclops',
                  'haunter',
                  'bronzong',
                  'hippowdon',
                  'drapion',
                  'falinks',
                  'crustle'
                ],
                order: 18
              },
              {
                location: 'Route 9',
                pokemon: [
                  'pelipper',
                  'mareanie',
                  'gastrodon',
                  'jellicent',
                  'pyukumuku',
                  'cramorant',
                  'octillery',
                  'kingler',
                  'pincurchin',
                  'wishiwashi',
                  'qwilfish',
                  'mantyke'
                ],
                order: 19
              },
              {
                location: 'Circhester Bay',
                pokemon: [
                  'clobbopus',
                  'octillery',
                  'barbaracle',
                  'bergmite',
                  'toxapex',
                  'dhelmise',
                  'remoraid',
                  'cramorant',
                  'gastrodon',
                  'inkay',
                  'pincurchin',
                  'mantyke',
                  'wailmer',
                  'mantine',
                  'wailord',
                  'lapras',
                  'greedent',
                  'grapploct'
                ],
                order: 20
              },
              {
                location: 'Outer Spikemuth',
                pokemon: [
                  'bergmite',
                  'clobbopus',
                  'mareanie',
                  'toxapex',
                  'dhelmise',
                  'perrserker',
                  'thievul',
                  'liepard',
                  'morpeko',
                  'greedent'
                ],
                order: 21
              },
              {
                location: 'Route 10',
                pokemon: [
                  'mr. mime-galar',
                  'snover',
                  'cubchoo',
                  'sneasel',
                  'duraludon',
                  'vanillish',
                  'abomasnow',
                  'beartic',
                  'snom',
                  'darumaka-galar',
                  'eiscue',
                  'stonjourner',
                  'glalie',
                  'vanilluxe',
                  'klang',
                  'rhydon'
                ],
                order: 22
              }
            ]
          },
          _a(ya.SwordShield),
          [
            [
              'farfetchd-galar',
              'pinsir',
              'omanyte',
              'omastar',
              'ho-oh',
              'seedot',
              'nuzleaf',
              'shiftry',
              'mawile',
              'solrock',
              'bagon',
              'shelgon',
              'salamence',
              'latios',
              'groudon',
              'dialga',
              'darumaka-galar',
              'darmanitan-galar',
              'scraggy',
              'scrafty',
              'gothita',
              'gothorita',
              'gothitelle',
              'rufflet',
              'braviary',
              'deino',
              'zweilous',
              'hydreigon',
              'tornadus',
              'reshiram',
              'swirlix',
              'slurpuff',
              'clauncher',
              'clawitzer',
              'xerneas',
              'passimian',
              'turtonator',
              'jangmo-o',
              'hakamo-o',
              'kommo-o',
              'solgaleo',
              'sirfetchd',
              'stonjourner',
              'zacian'
            ],
            [
              'ponyta-galar',
              'rapidash-galar',
              'kabuto',
              'kabutops',
              'heracross',
              'corsola-galar',
              'larvitar',
              'pupitar',
              'tyranitar',
              'lugia',
              'lotad',
              'lombre',
              'ludicolo',
              'sableye',
              'lunatone',
              'latias',
              'kyogre',
              'gible',
              'gabite',
              'garchomp',
              'croagunk',
              'toxicroak',
              'palkia',
              'solosis',
              'duosion',
              'reuniclus',
              'vullaby',
              'mandibuzz',
              'thundurus',
              'zekrom',
              'spritzee',
              'aromatisse',
              'skrelp',
              'dragalge',
              'goomy',
              'sliggoo',
              'goodra',
              'yveltal',
              'oranguru',
              'drampa',
              'lunala',
              'cursola',
              'zamazenta'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.UltraSunUltraMoon,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['rowlet', 'litten', 'popplio'],
                order: 0
              },
              {
                location: 'Purchased Konikoni City Fossil',
                pokemon: [
                  'omanyte',
                  'kabuto',
                  'lileep',
                  'anorith',
                  'cranidos',
                  'shieldon',
                  'tirtouga',
                  'archen',
                  'tyrunt',
                  'amaura'
                ],
                order: 27
              },
              { location: 'Ultra Beast Gift', pokemon: ['poipole'], order: 54 },
              {
                location: '20 Totem Stickers',
                pokemon: ['gumshoos', 'raticate-alola'],
                order: 1e3
              },
              {
                location: '40 Totem Stickers',
                pokemon: ['araquanid', 'marowak-alola'],
                order: 1001
              },
              {
                location: '50 Totem Stickers',
                pokemon: ['lurantis', 'salazzle'],
                order: 1002
              },
              {
                location: '70 Totem Stickers',
                pokemon: ['togedemaru', 'vikavolt'],
                order: 1003
              },
              {
                location: '80 Totem Stickers',
                pokemon: ['mimikyu'],
                order: 1004
              },
              {
                location: '100 Totem Stickers',
                pokemon: ['ribombee', 'kommo-o'],
                order: 1005
              }
            ],
            statics: [
              {
                location: 'Mount Lanakila Legendary',
                pokemon: ['necrozma'],
                order: 56
              },
              {
                location: 'Title Legendary',
                pokemon: ['solgaleo', 'lunala'],
                order: 57
              }
            ],
            encounters: [
              {
                location: 'Route 1',
                pokemon: [
                  'caterpie',
                  'rattata-alola',
                  'ledyba',
                  'spinarak',
                  'pichu',
                  'pikachu',
                  'happiny',
                  'buneary',
                  'pikipek',
                  'yungoos',
                  'grubbin',
                  'bonsly',
                  'sudowoodo',
                  'munchlax',
                  'snorlax',
                  'rockruff'
                ],
                order: 1
              },
              {
                location: "Hau'oli Outskirts",
                pokemon: [
                  'slowpoke',
                  'wingull',
                  'inkay',
                  'tentacool',
                  'mantyke',
                  'remoraid',
                  'finneon'
                ],
                order: 2
              },
              {
                location: "Trainers' School",
                pokemon: ['meowth-alola', 'magnemite', 'grimer-alola', 'zorua'],
                order: 3
              },
              {
                location: "Hau'oli City",
                pokemon: [
                  'tentacool',
                  'wingull',
                  'finneon',
                  'mantyke',
                  'remoraid',
                  'meowth-alola',
                  'abra',
                  'magnemite',
                  'grimer-alola',
                  'mime jr.',
                  'mr. mime',
                  'happiny',
                  'furfrou',
                  'scatterbug'
                ],
                order: 4
              },
              {
                location: 'Route 2',
                pokemon: [
                  'rattata-alola',
                  'ekans',
                  'meowth-alola',
                  'abra',
                  'drowzee',
                  'smeargle',
                  'makuhita',
                  'furfrou',
                  'yungoos',
                  'spearow',
                  'growlithe',
                  'cutiefly',
                  'dunsparce',
                  'crabrawler'
                ],
                order: 5
              },
              {
                location: "Hau'oli Cemetary",
                pokemon: ['zubat', 'gastly', 'murkrow', 'drifloon', 'litwick'],
                order: 6
              },
              {
                location: 'Verdant Cavern',
                pokemon: [
                  'zubat',
                  'diglett-alola',
                  'noibat',
                  'rattata-alola',
                  'yungoos'
                ],
                order: 7
              },
              {
                location: 'Route 3',
                pokemon: [
                  'spearow',
                  'mankey',
                  'hawlucha',
                  'cutiefly',
                  'bagon',
                  'salamence',
                  'rufflet',
                  'vullaby',
                  'crabrawler'
                ],
                order: 8
              },
              {
                location: 'Melemele Meadow',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'cottonee',
                  'petilil',
                  'flab\xe9b\xe9',
                  'oricorio',
                  'cutiefly'
                ],
                order: 9
              },
              {
                location: 'Seaward Cave',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'delibird',
                  'smoochum',
                  'jynx',
                  'happiny',
                  'seel',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash'
                ],
                order: 10
              },
              {
                location: 'Ten Carat Hill',
                pokemon: [
                  'zubat',
                  'psyduck',
                  'mawile',
                  'roggenrola',
                  'carbink',
                  'sableye',
                  'machop',
                  'spinda',
                  'rockruff',
                  'onix'
                ],
                order: 11
              },
              {
                location: 'Route 4',
                pokemon: [
                  'rattata-alola',
                  'eevee',
                  'espeon',
                  'umbreon',
                  'igglybuff',
                  'jigglypuff',
                  'happiny',
                  'lillipup',
                  'pikipek',
                  'yungoos',
                  'grubbin',
                  'mudbray',
                  'crabrawler',
                  'beedrill'
                ],
                order: 12
              },
              {
                location: 'Paniola Town',
                pokemon: ['magikarp', 'gyarados', 'barboach', 'whiscash'],
                order: 16
              },
              {
                location: 'Paniola Ranch',
                pokemon: ['tauros', 'miltank', 'mareep', 'lillipup', 'mudbray'],
                order: 13
              },
              {
                location: 'Route 5',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'lillipup',
                  'pikipek',
                  'grubbin',
                  'fomantis',
                  'crabrawler',
                  'grovyle'
                ],
                order: 14
              },
              {
                location: 'Brooklet Hill',
                pokemon: [
                  'paras',
                  'psyduck',
                  'poliwag',
                  'wingull',
                  'surskit',
                  'dewpider',
                  'morelull',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'feebas',
                  'basculin',
                  'tentacool',
                  'finneon',
                  'alomomola',
                  'wishiwashi',
                  'marshtomp'
                ],
                order: 15
              },
              {
                location: 'Route 6',
                pokemon: [
                  'rattata-alola',
                  'eevee',
                  'espeon',
                  'umbreon',
                  'igglybuff',
                  'jigglypuff',
                  'happiny',
                  'lillipup',
                  'pikipek',
                  'yungoos',
                  'grubbin',
                  'mudbray',
                  'oricorio',
                  'ralts'
                ],
                order: 17
              },
              {
                location: 'Route 7',
                pokemon: [
                  'diglett-alola',
                  'tentacool',
                  'wingull',
                  'finneon',
                  'pyukumuku',
                  'staryu',
                  'starmie',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'spheal'
                ],
                order: 18
              },
              {
                location: 'Wela Volcano Park',
                pokemon: [
                  'cubone',
                  'kangaskhan',
                  'magby',
                  'magmar',
                  'happiny',
                  'fletchling',
                  'fletchinder',
                  'salandit',
                  'salazzle'
                ],
                order: 19
              },
              {
                location: 'Melemele Sea',
                pokemon: [
                  'tentacool',
                  'wingull',
                  'mantyke',
                  'remoraid',
                  'finneon',
                  'magikarp',
                  'gyarados',
                  'corsola',
                  'mareanie',
                  'octillery',
                  'clamperl',
                  'gorebyss',
                  'huntail',
                  'luvdisc',
                  'wishiwashi'
                ],
                order: 20
              },
              {
                location: "Kala'e Bay",
                pokemon: [
                  'rattata-alola',
                  'slowpoke',
                  'slowbro',
                  'slowking',
                  'wingull',
                  'bagon',
                  'shelgon',
                  'yungoos',
                  'tentacool',
                  'finneon',
                  'mantyke',
                  'remoraid',
                  'shellder',
                  'magikarp',
                  'gyarados',
                  'octillery',
                  'wishiwashi',
                  'horsea'
                ],
                order: 21
              },
              {
                location: 'Dividing Peak Tunnel',
                pokemon: ['kecleon', 'wimpod'],
                order: 22
              },
              {
                location: 'Route 8',
                pokemon: [
                  'rattata-alola',
                  'raticate-alola',
                  'fletchling',
                  'fletchinder',
                  'trumbeak',
                  'yungoos',
                  'gumshoos',
                  'salandit',
                  'stufful',
                  'crabrawler',
                  'wimpod',
                  'tentacool',
                  'wingull',
                  'finneon',
                  'mantyke',
                  'remoraid',
                  'magikarp',
                  'gyarados',
                  'chinchou',
                  'octillery',
                  'wishiwashi',
                  'combusken'
                ],
                order: 23
              },
              {
                location: 'Lush Jungle',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'butterfree',
                  'paras',
                  'pinsir',
                  'hoothoot',
                  'noctowl',
                  'bonsly',
                  'sudowoodo',
                  'happiny',
                  'trumbeak',
                  'fomantis',
                  'morelull',
                  'steenee',
                  'comfey',
                  'oranguru',
                  'passimian',
                  'goomy',
                  'castform',
                  'golbat',
                  'crobat',
                  'dugtrio-alola',
                  'larvesta',
                  'volcarona',
                  'salandit',
                  'salazzle'
                ],
                order: 24
              },
              {
                location: "Diglett's Tunnel",
                pokemon: ['zubat', 'golbat', 'diglett-alola', 'larvitar'],
                order: 25
              },
              {
                location: 'Route 9',
                pokemon: [
                  'magikarp',
                  'gyarados',
                  'corsola',
                  'mareanie',
                  'luvdisc',
                  'wishiwashi'
                ],
                order: 26
              },
              {
                location: 'Memorial Hill',
                pokemon: ['zubat', 'golbat', 'gastly', 'phantump'],
                order: 28
              },
              {
                location: 'Akala Outskirts',
                pokemon: [
                  'raticate-alola',
                  'natu',
                  'xatu',
                  'wingull',
                  'nosepass',
                  'gumshoos',
                  'stufful',
                  'magikarp',
                  'gyarados',
                  'chinchou',
                  'lanturn',
                  'wishiwashi',
                  'honedge'
                ],
                order: 29
              },
              {
                location: 'Hano Beach',
                pokemon: [
                  'staryu',
                  'starmie',
                  'sandygast',
                  'tentacool',
                  'wingull',
                  'finneon',
                  'pyukumuku'
                ],
                order: 30
              },
              {
                location: 'Malie Garden',
                pokemon: [
                  'meowth-alola',
                  'persian-alola',
                  'psyduck',
                  'poliwhirl',
                  'poliwrath',
                  'politoed',
                  'ledian',
                  'ariados',
                  'masquerain',
                  'cottonee',
                  'petilil',
                  'araquanid',
                  'castform',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados',
                  'basculin'
                ],
                order: 31
              },
              {
                location: 'Outer Cape',
                pokemon: ['magnemite', 'grimer-alola', 'trubbish', 'minccino'],
                order: 32
              },
              {
                location: 'Route 10',
                pokemon: [
                  'raticate-alola',
                  'fearow',
                  'ledian',
                  'ariados',
                  'skarmory',
                  'pancham',
                  'pangoro',
                  'gumshoos',
                  'pineco',
                  'crabrawler',
                  'pidgeot'
                ],
                order: 33
              },
              {
                location: 'Mount Hokulani',
                pokemon: [
                  'fearow',
                  'ditto',
                  'cleffa',
                  'clefairy',
                  'happiny',
                  'skarmory',
                  'elekid',
                  'electabuzz',
                  'beldum',
                  'elgyem',
                  'minior',
                  'axew'
                ],
                order: 34
              },
              {
                location: 'Route 11',
                pokemon: [
                  'parasect',
                  'ledian',
                  'ariados',
                  'pancham',
                  'pangoro',
                  'trumbeak',
                  'toucannon',
                  'shiinotic',
                  'komala',
                  'monferno'
                ],
                order: 35
              },
              {
                location: 'Route 12',
                pokemon: [
                  'graveler-alola',
                  'houndoom',
                  'manectric',
                  'torkoal',
                  'mudbray',
                  'mudsdale'
                ],
                order: 36
              },
              {
                location: 'Blush Mountain',
                pokemon: [
                  'graveler-alola',
                  'elekid',
                  'electabuzz',
                  'happiny',
                  'torkoal',
                  'dedenne',
                  'togedemaru',
                  'charjabug',
                  'vikavolt',
                  'mudbray',
                  'mudsdale',
                  'turtonator',
                  'rhyhorn'
                ],
                order: 37
              },
              { location: "Ula'ula Beach", pokemon: ['crabrawler'], order: 38 },
              {
                location: 'Route 13',
                pokemon: ['magikarp', 'gyarados', 'wishiwashi', 'bruxish'],
                order: 39
              },
              {
                location: 'Tapu Village',
                pokemon: [
                  'raticate-alola',
                  'sandshrew-alola',
                  'vulpix-alola',
                  'pelipper',
                  'absol',
                  'snorunt',
                  'gumshoos',
                  'vanillite',
                  'castform',
                  'phantump',
                  'swinub'
                ],
                order: 40
              },
              {
                location: 'Route 14',
                pokemon: [
                  'tentacruel',
                  'pelipper',
                  'finneon',
                  'frillish',
                  'magikarp',
                  'gyarados',
                  'wishiwashi',
                  'bruxish'
                ],
                order: 41
              },
              {
                location: 'Thrifty Megamart (Abandoned Site)',
                pokemon: [
                  'golbat',
                  'haunter',
                  'gengar',
                  'shuppet',
                  'klefki',
                  'mimikyu'
                ],
                order: 42
              },
              {
                location: 'Haina Desert',
                pokemon: [
                  'dugtrio-alola',
                  'golett',
                  'baltoy',
                  'krokorok',
                  'trapinch',
                  'gabite',
                  'castform'
                ],
                order: 43
              },
              {
                location: 'Route 15',
                pokemon: [
                  'raticate-alola',
                  'slowpoke',
                  'pelipper',
                  'gumshoos',
                  'tentacruel',
                  'finneon',
                  'lumineon',
                  'magikarp',
                  'gyarados',
                  'clamperl',
                  'gorebyss',
                  'huntail',
                  'wishiwashi',
                  'bruxish'
                ],
                order: 44
              },
              {
                location: 'Route 16',
                pokemon: [
                  'raticate-alola',
                  'slowpoke',
                  'pelipper',
                  'scraggy',
                  'gumshoos',
                  'crabrawler',
                  'prinplup'
                ],
                order: 45
              },
              {
                location: "Ula'ula Meadow",
                pokemon: [
                  'ledian',
                  'ariados',
                  'cottonee',
                  'petilil',
                  'floette',
                  'oricorio',
                  'ribombee',
                  'grotle'
                ],
                order: 46
              },
              {
                location: 'Route 17',
                pokemon: [
                  'raticate-alola',
                  'fearow',
                  'ledian',
                  'ariados',
                  'scraggy',
                  'gumshoos',
                  'graveler-alola',
                  'skarmory',
                  'bisharp',
                  'goomy',
                  'castform',
                  'crabrawler'
                ],
                order: 47
              },
              {
                location: 'Seafolk Village',
                pokemon: [
                  'magikarp',
                  'gyarados',
                  'wailmer',
                  'wailord',
                  'dhelmise'
                ],
                order: 48
              },
              {
                location: 'Poni Wilds',
                pokemon: [
                  'granbull',
                  'pelipper',
                  'gastrodon',
                  'furfrou',
                  'inkay',
                  'crabrawler',
                  'greninja'
                ],
                order: 49
              },
              {
                location: 'Ancient Poni Path',
                pokemon: [
                  'granbull',
                  'pelipper',
                  'gastrodon',
                  'furfrou',
                  'inkay',
                  'delphox'
                ],
                order: 50
              },
              {
                location: 'Poni Breaker Coast',
                pokemon: [
                  'tentacruel',
                  'lapras',
                  'pelipper',
                  'gastrodon',
                  'lumineon',
                  'magikarp',
                  'gyarados',
                  'carvanha',
                  'sharpedo',
                  'wailmer',
                  'wailord',
                  'relicanth',
                  'wimpod',
                  'dragalge',
                  'clawitzer'
                ],
                order: 51
              },
              {
                location: 'Exeggutor Island',
                pokemon: [
                  'exeggcute',
                  'exeggutor-alola',
                  'pinsir',
                  'pelipper',
                  'tropius',
                  'gastrodon',
                  'sliggoo',
                  'castform',
                  'chesnaught'
                ],
                order: 52
              },
              {
                location: 'Vast Poni Canyon',
                pokemon: [
                  'machoke',
                  'skarmory',
                  'boldore',
                  'mienfoo',
                  'carbink',
                  'lycanroc',
                  'jangmo-o',
                  'kommo-o',
                  'hakamo-o',
                  'golbat',
                  'dugtrio-alola',
                  'sableye',
                  'golduck',
                  'magikarp',
                  'gyarados',
                  'barboach',
                  'whiscash',
                  'corphish',
                  'crawdaunt',
                  'basculin'
                ],
                order: 53
              },
              {
                location: 'Mount Lanakila',
                pokemon: [
                  'raticate-alola',
                  'sandshrew-alola',
                  'vulpix-alola',
                  'absol',
                  'snorunt',
                  'gumshoos',
                  'sneasel',
                  'glalie',
                  'golbat',
                  'drampa',
                  'castform',
                  'vanillish',
                  'vanilluxe'
                ],
                order: 55
              }
            ]
          },
          _a(ya.UltraSunUltraMoon),
          [
            [
              'vulpix',
              'ninetales',
              'omanyte',
              'omastar',
              'houndour',
              'houndoom',
              'raikou',
              'ho-oh',
              'anorith',
              'armaldo',
              'latios',
              'groudon',
              'cranidos',
              'rampardos',
              'dialga',
              'heatran',
              'tirtouga',
              'carracosta',
              'cottonee',
              'whimsicott',
              'golett',
              'golurk',
              'tornadus',
              'reshiram',
              'clauncher',
              'clawitzer',
              'tyrunt',
              'tyrantrum',
              'xerneas',
              'rufflet',
              'braviary',
              'passimian',
              'turtonator',
              'solgaleo',
              'buzzwole',
              'blacephalon',
              'kartana'
            ],
            [
              'sandshrew',
              'sandslash',
              'kabuto',
              'kabutops',
              'entei',
              'lugia',
              'electrike',
              'manectric',
              'baltoy',
              'claydol',
              'lileep',
              'cradily',
              'latias',
              'kyogre',
              'shieldon',
              'bastiodon',
              'palkia',
              'regigigas',
              'archen',
              'archeops',
              'petilil',
              'lilligant',
              'vullaby',
              'mandibuzz',
              'thundurus',
              'zekrom',
              'skrelp',
              'dragalge',
              'amaura',
              'aurorus',
              'yveltal',
              'stakataka',
              'oranguru',
              'drampa',
              'lunala',
              'pheromosa',
              'celesteela'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.XY,
            gifts: [
              {
                location: 'Starter',
                pokemon: ['chespin', 'fennekin', 'froakie'],
                order: 0
              },
              {
                location: 'Kanto Starter',
                pokemon: ['bulbasaur', 'charmander', 'squirtle'],
                order: 6
              },
              {
                location: 'Glittering Cave Fossil',
                pokemon: ['tyrunt', 'amaura'],
                order: 16
              },
              { location: 'Tower of Mastery', pokemon: ['lucario'], order: 22 },
              { location: 'Route 12', pokemon: ['lapras'], order: 24 }
            ],
            statics: [
              { location: 'Route 7', pokemon: ['snorlax'], order: 10 },
              {
                location: 'Team Flare Secret HQ',
                pokemon: ['xerneas', 'yveltal'],
                order: 34
              }
            ],
            encounters: [
              {
                location: 'Route 2',
                pokemon: [
                  'bunnelby',
                  'fletchling',
                  'scatterbug',
                  'zigzagoon',
                  'pidgey',
                  'weedle',
                  'caterpie'
                ],
                order: 1
              },
              {
                location: 'Santalune Forest',
                pokemon: [
                  'scatterbug',
                  'weedle',
                  'caterpie',
                  'pansage',
                  'pansear',
                  'panpour',
                  'fletchling',
                  'caterpie',
                  'weedle',
                  'pikachu',
                  'kakuna',
                  'metapod'
                ],
                order: 2
              },
              {
                location: 'Route 3',
                pokemon: [
                  'bidoof',
                  'bunnelby',
                  'fletchling',
                  'pidgey',
                  'azurill',
                  'burmy',
                  'pikachu',
                  'dunsparce'
                ],
                order: 3
              },
              {
                location: 'Route 4',
                pokemon: [
                  'combee',
                  'flab\xe9b\xe9',
                  'ledyba',
                  'skitty',
                  'budew',
                  'ralts'
                ],
                order: 5
              },
              {
                location: 'Route 5',
                pokemon: [
                  'bunnelby',
                  'furfrou',
                  'skiddo',
                  'pancham',
                  'doduo',
                  'gulpin',
                  'abra',
                  'plusle',
                  'minun',
                  'scraggy'
                ],
                order: 7
              },
              {
                location: 'Route 7',
                pokemon: [
                  'smeargle',
                  'volbeat',
                  'illumise',
                  'roselia',
                  'croagunk',
                  'ducklett',
                  'flab\xe9b\xe9',
                  'spritzee',
                  'swirlix',
                  'psyduck',
                  'hoppip'
                ],
                order: 8
              },
              {
                location: 'Route 6',
                pokemon: [
                  'oddish',
                  'sentret',
                  'espurr',
                  'nincada',
                  'honedge',
                  'kecleon',
                  'venipede',
                  'audino'
                ],
                order: 9
              },
              {
                location: 'Connecting Cave',
                pokemon: ['zubat', 'whismur', 'meditite', 'axew'],
                order: 11
              },
              {
                location: 'Route 8',
                pokemon: [
                  'spoink',
                  'drifloon',
                  'zangoose',
                  'seviper',
                  'absol',
                  'mienfoo',
                  'inkay',
                  'bagon',
                  'wingull',
                  'taillow',
                  'dwebble',
                  'binacle',
                  'luvdisc'
                ],
                order: 12
              },
              {
                location: 'Ambrette Town',
                pokemon: ['dwebble', 'binacle'],
                order: 13
              },
              {
                location: 'Route 9',
                pokemon: ['hippopotas', 'sandile', 'helioptile'],
                order: 14
              },
              {
                location: 'Glittering Cave',
                pokemon: [
                  'machop',
                  'cubone',
                  'onix',
                  'rhyhorn',
                  'lunatone',
                  'solrock',
                  'kangaskhan',
                  'mawile',
                  'woobat',
                  'ferroseed',
                  'dwebble'
                ],
                order: 15
              },
              {
                location: 'Cyllage City',
                pokemon: ['onix', 'dwebble', 'binacle', 'luvdisc'],
                order: 17
              },
              {
                location: 'Route 10',
                pokemon: [
                  'sigilyph',
                  'golett',
                  'hawlucha',
                  'snubbull',
                  'houndour',
                  'electrike',
                  'eevee',
                  'emolga',
                  'nosepass',
                  'yanma'
                ],
                order: 18
              },
              {
                location: 'Route 11',
                pokemon: [
                  'hariyama',
                  'staravia',
                  'sawk',
                  'throh',
                  'nidorino',
                  'chingling',
                  'stunky',
                  'nidorina',
                  'dedenne',
                  'nidoran \u2642',
                  'nidoran \u2640',
                  'stunky',
                  'starly'
                ],
                order: 19
              },
              {
                location: 'Reflection Cave',
                pokemon: [
                  'mr. mime',
                  'roggenrola',
                  'solosis',
                  'wobbuffet',
                  'chingling',
                  'carbink',
                  'sableye',
                  'mime jr.',
                  'woobat',
                  'ferroseed'
                ],
                order: 20
              },
              {
                location: 'Shalour City',
                pokemon: ['tentacool', 'mantyke', 'luvdisc'],
                order: 21
              },
              {
                location: 'Route 12',
                pokemon: [
                  'slowpoke',
                  'chatot',
                  'exeggcute',
                  'tauros',
                  'miltank',
                  'pinsir',
                  'heracross',
                  'pachirisu',
                  'wingull',
                  'mareep',
                  'tentacool',
                  'mantyke',
                  'lapras',
                  'luvdisc',
                  'dwebble',
                  'binacle'
                ],
                order: 23
              },
              {
                location: 'Azure Bay',
                pokemon: [
                  'slowpoke',
                  'chatot',
                  'exeggcute',
                  'inkay',
                  'wingull',
                  'tentacool',
                  'mantyke',
                  'lapras',
                  'luvdisc',
                  'dwebble',
                  'binacle'
                ],
                order: 25
              },
              {
                location: 'Route 13',
                pokemon: ['dugtrio', 'trapinch', 'gible', 'graveler', 'slugma'],
                order: 26
              },
              {
                location: 'Route 14',
                pokemon: [
                  'weepinbell',
                  'skorupi',
                  'quagsire',
                  'carnivine',
                  'karrablast',
                  'shelmet',
                  'goomy',
                  'haunter',
                  'bellsprout',
                  'ekans',
                  'stunfisk',
                  'poliwag',
                  'poliwhirl',
                  'barboach'
                ],
                order: 27
              },
              {
                location: 'Laverre City',
                pokemon: ['poliwag', 'poliwhirl', 'basculin'],
                order: 28
              },
              {
                location: 'Route 15',
                pokemon: [
                  'mightyena',
                  'skorupi',
                  'liepard',
                  'foongus',
                  'watchog',
                  'pawniard',
                  'klefki',
                  'murkrow',
                  'lombre',
                  'floatzel',
                  'poliwag',
                  'basculin',
                  'poliwhirl'
                ],
                order: 29
              },
              {
                location: 'Lost Hotel',
                pokemon: [
                  'magneton',
                  'electrode',
                  'litwick',
                  'pawniard',
                  'klefki',
                  'trubbish',
                  'garbodor',
                  'rotom'
                ],
                order: 30
              },
              {
                location: 'Route 16',
                pokemon: [
                  'foongus',
                  'klefki',
                  'pumpkaboo',
                  'phantump',
                  'weepinbell',
                  'floatzel',
                  'skorupi',
                  'murkrow',
                  'lombre',
                  'poliwag',
                  'basculin',
                  'poliwhirl'
                ],
                order: 31
              },
              {
                location: 'Frost Cavern',
                pokemon: [
                  'jynx',
                  'piloswine',
                  'beartic',
                  'bergmite',
                  'haunter',
                  'cryogonal',
                  'vanillite',
                  'cubchoo',
                  'smoochum',
                  'poliwhirl',
                  'floatzel',
                  'poliwag',
                  'basculin'
                ],
                order: 32
              },
              {
                location: 'Route 17',
                pokemon: ['delibird', 'sneasel', 'snover', 'abomasnow'],
                order: 33
              },
              {
                location: 'Route 18',
                pokemon: [
                  'torkoal',
                  'gurdurr',
                  'sandslash',
                  'graveler',
                  'lairon',
                  'pupitar',
                  'durant',
                  'heatmor',
                  'shuckle'
                ],
                order: 35
              },
              {
                location: 'Couriway Town',
                pokemon: [
                  'lombre',
                  'floatzel',
                  'poliwag',
                  'basculin',
                  'poliwhirl'
                ],
                order: 36
              },
              {
                location: 'Route 19',
                pokemon: [
                  'weepinbell',
                  'drapion',
                  'quagsire',
                  'karrablast',
                  'shelmet',
                  'sliggoo',
                  'haunter',
                  'carnivine',
                  'gligar',
                  'arbok',
                  'stunfisk',
                  'poliwag',
                  'poliwhirl',
                  'barboach',
                  'whiscash',
                  'politoed'
                ],
                order: 37
              },
              {
                location: 'Route 20',
                pokemon: [
                  'jigglypuff',
                  'noctowl',
                  'amoonguss',
                  'gothorita',
                  'trevenant',
                  'zoroark',
                  'foongus',
                  'sudowoodo'
                ],
                order: 38
              },
              {
                location: 'Pokemon Village',
                pokemon: [
                  'ditto',
                  'gothorita',
                  'amoonguss',
                  'jigglypuff',
                  'noctowl',
                  'zoroark',
                  'poliwag',
                  'lombre',
                  'poliwhirl',
                  'basculin',
                  'garbodor',
                  'banette'
                ],
                order: 39
              },
              {
                location: 'Route 21',
                pokemon: [
                  'floatzel',
                  'spinda',
                  'altaria',
                  'scyther',
                  'ursaring',
                  'lombre',
                  'poliwag',
                  'basculin',
                  'poliwhirl',
                  'dratini',
                  'dragonair'
                ],
                order: 40
              },
              {
                location: 'Route 22',
                pokemon: [
                  'azurill',
                  'bunnelby',
                  'litleo',
                  'psyduck',
                  "farfetch'd",
                  'bidoof',
                  'dunsparce',
                  'riolu',
                  'azumarill',
                  'bibarel',
                  'diggersby',
                  'riolu',
                  'magikarp',
                  'goldeen',
                  'carvanha',
                  'gyarados',
                  'seaking',
                  'sharpedo'
                ],
                order: 4
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'graveler',
                  'gurdurr',
                  'haunter',
                  'lickitung',
                  'druddigon',
                  'zweilous',
                  'geodude',
                  'floatzel',
                  'shuckle',
                  'ariados',
                  'noibat',
                  'fearow',
                  'skarmory',
                  'hydreigon',
                  'lombre',
                  'poliwhirl',
                  'poliwag',
                  'basculin',
                  'poliwrath'
                ],
                order: 41
              }
            ]
          },
          _a(ya.XY),
          [
            [
              'staryu',
              'starmie',
              'pinsir',
              'houndour',
              'houndoom',
              'poochyena',
              'mightyena',
              'aron',
              'lairon',
              'aggron',
              'lileep',
              'cradily',
              'anorith',
              'armaldo',
              'sawk',
              'swirlix',
              'slurpuff',
              'clauncher',
              'clawitzer',
              'xerneas'
            ],
            [
              'shellder',
              'cloyster',
              'omanyte',
              'omastar',
              'kabuto',
              'kabutops',
              'heracross',
              'larvitar',
              'pupitar',
              'tyranitar',
              'electrike',
              'manectric',
              'purrloin',
              'liepard',
              'throh',
              'spritzee',
              'aromatisse',
              'skrelp',
              'dragalge',
              'yveltal'
            ]
          ]
        ),
        ...fa(
          {
            game: ya.Yellow,
            gifts: [
              { location: 'Starter', pokemon: ['pikachu'], order: 0 },
              { location: 'Route 4', pokemon: ['magikarp'], order: 9 },
              { location: 'Celadon City', pokemon: ['eevee'], order: 26 },
              {
                location: 'Saffron City',
                pokemon: ['hitmonchan', 'hitmonlee'],
                order: 28
              },
              { location: 'Silph Co.', pokemon: ['lapras'], order: 29 },
              {
                location: 'Mt. Moon Fossil',
                pokemon: ['omanyte', 'kabuto'],
                order: 46
              },
              {
                location: 'Old Amber Fossil',
                pokemon: ['aerodactyl'],
                order: 47
              },
              { location: 'Cerulean City', pokemon: ['bulbasaur'], order: 12 },
              { location: 'Route 24', pokemon: ['charmander'], order: 14 },
              { location: 'Vermillion City', pokemon: ['squirtle'], order: 19 }
            ],
            statics: [
              { location: 'Route 12', pokemon: ['snorlax'], order: 43 },
              { location: 'Route 16', pokemon: ['snorlax'], order: 33 },
              { location: 'Seafoam Islands', pokemon: ['articuno'], order: 45 },
              { location: 'Power Plant', pokemon: ['zapdos'], order: 53 },
              { location: 'Victory Road', pokemon: ['moltres'], order: 56 }
            ],
            encounters: [
              {
                location: 'Celadon City',
                pokemon: [
                  'poliwag',
                  'poliwhirl',
                  'slowpoke',
                  'goldeen',
                  'magikarp'
                ],
                order: 28
              },
              {
                location: 'Cerulean City',
                pokemon: [
                  'psyduck',
                  'poliwag',
                  'krabby',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 11
              },
              {
                location: 'Cinnabar Island',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'shellder',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 47
              },
              {
                location: "Diglett's Cave",
                pokemon: ['diglett', 'dugtrio'],
                order: 21
              },
              {
                location: 'Fuchsia City',
                pokemon: [
                  'poliwag',
                  'krabby',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'gyarados'
                ],
                order: 36
              },
              {
                location: 'Mt. Moon',
                pokemon: ['sandshrew', 'clefairy', 'zubat', 'paras', 'geodude'],
                order: 10
              },
              {
                location: 'Pallet Town',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 1
              },
              {
                location: 'Pok\xe9mon Mansion',
                pokemon: [
                  'rattata',
                  'raticate',
                  'growlithe',
                  'ponyta',
                  'grimer',
                  'muk',
                  'koffing',
                  'weezing',
                  'ditto'
                ],
                order: 48
              },
              {
                location: 'Pok\xe9mon Tower',
                pokemon: ['gastly', 'haunter', 'cubone'],
                order: 25
              },
              {
                location: 'Power Plant',
                pokemon: [
                  'pikachu',
                  'magnemite',
                  'magneton',
                  'grimer',
                  'muk',
                  'voltorb',
                  'electabuzz'
                ],
                order: 52
              },
              {
                location: 'Rock Tunnel',
                pokemon: ['zubat', 'machop', 'geodude', 'onix'],
                order: 24
              },
              { location: 'Route 1', pokemon: ['pidgey', 'rattata'], order: 2 },
              {
                location: 'Route 2',
                pokemon: [
                  'weedle',
                  'pidgey',
                  'rattata',
                  'nidoran \u2640',
                  'nidoran \u2642'
                ],
                order: 4
              },
              {
                location: 'Route 3',
                pokemon: [
                  'pidgey',
                  'rattata',
                  'spearow',
                  'sandshrew',
                  'jigglypuff',
                  'mankey'
                ],
                order: 7
              },
              {
                location: 'Route 4',
                pokemon: ['rattata', 'spearow', 'ekans', 'sandshrew', 'mankey'],
                order: 8
              },
              {
                location: 'Route 5',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'jigglypuff',
                  'oddish',
                  'mankey',
                  'abra'
                ],
                order: 16
              },
              {
                location: 'Route 6',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'jigglypuff',
                  'oddish',
                  'psyduck',
                  'golduck',
                  'mankey',
                  'poliwag',
                  'abra',
                  'shellder',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 17
              },
              {
                location: 'Route 7',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'jigglypuff',
                  'oddish',
                  'mankey',
                  'growlithe',
                  'abra'
                ],
                order: 26
              },
              {
                location: 'Route 8',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'ekans',
                  'jigglypuff',
                  'mankey',
                  'growlithe',
                  'abra',
                  'kadabra'
                ],
                order: 27
              },
              {
                location: 'Route 9',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'fearow',
                  'ekans',
                  'nidoran \u2640',
                  'nidorina',
                  'nidoran \u2642',
                  'nidorino'
                ],
                order: 22
              },
              {
                location: 'Route 10',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'ekans',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'poliwag',
                  'poliwhirl',
                  'machop',
                  'slowpoke',
                  'magnemite',
                  'krabby',
                  'kingler',
                  'voltorb',
                  'horsea',
                  'goldeen',
                  'magikarp'
                ],
                order: 23
              },
              {
                location: 'Route 11',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'raticate',
                  'spearow',
                  'ekans',
                  'poliwag',
                  'tentacool',
                  'shellder',
                  'drowzee',
                  'krabby',
                  'horsea',
                  'goldeen',
                  'magikarp'
                ],
                order: 20
              },
              {
                location: 'Route 12',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'poliwag',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'slowpoke',
                  'slowbro',
                  'farfetchd',
                  'krabby',
                  'horsea',
                  'seadra',
                  'goldeen',
                  'magikarp'
                ],
                order: 42
              },
              {
                location: 'Route 13',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'poliwag',
                  'bellsprout',
                  'weepinbell',
                  'tentacool',
                  'slowpoke',
                  'slowbro',
                  'farfetchd',
                  'krabby',
                  'horsea',
                  'seadra',
                  'goldeen',
                  'magikarp',
                  'ditto'
                ],
                order: 41
              },
              {
                location: 'Route 14',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'venomoth',
                  'bellsprout',
                  'weepinbell',
                  'ditto'
                ],
                order: 40
              },
              {
                location: 'Route 15',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'gloom',
                  'venonat',
                  'venomoth',
                  'bellsprout',
                  'weepinbell',
                  'ditto'
                ],
                order: 39
              },
              {
                location: 'Route 16',
                pokemon: ['rattata', 'raticate', 'spearow', 'fearow', 'doduo'],
                order: 30
              },
              {
                location: 'Route 17',
                pokemon: [
                  'raticate',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'tentacool',
                  'ponyta',
                  'doduo',
                  'dodrio',
                  'shellder',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 34
              },
              {
                location: 'Route 18',
                pokemon: [
                  'rattata',
                  'raticate',
                  'spearow',
                  'fearow',
                  'poliwag',
                  'tentacool',
                  'doduo',
                  'shellder',
                  'krabby',
                  'goldeen',
                  'magikarp'
                ],
                order: 35
              },
              {
                location: 'Route 19',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 38
              },
              {
                location: 'Route 20',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 46
              },
              {
                location: 'Route 21',
                pokemon: [
                  'pidgey',
                  'pidgeotto',
                  'rattata',
                  'raticate',
                  'poliwag',
                  'tentacool',
                  'tentacruel',
                  'shellder',
                  'tangela',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 51
              },
              {
                location: 'Route 22',
                pokemon: [
                  'rattata',
                  'spearow',
                  'nidoran \u2640',
                  'nidoran \u2642',
                  'mankey',
                  'poliwag',
                  'poliwhirl',
                  'goldeen',
                  'magikarp'
                ],
                order: 5
              },
              {
                location: 'Route 23',
                pokemon: [
                  'spearow',
                  'fearow',
                  'ekans',
                  'arbok',
                  'nidorina',
                  'nidorino',
                  'mankey',
                  'primeape',
                  'poliwag',
                  'poliwhirl',
                  'slowbro',
                  'kingler',
                  'seadra',
                  'goldeen',
                  'seaking',
                  'magikarp',
                  'ditto'
                ],
                order: 54
              },
              {
                location: 'Route 24',
                pokemon: [
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'venonat',
                  'psyduck',
                  'poliwag',
                  'abra',
                  'bellsprout',
                  'krabby',
                  'goldeen',
                  'seaking',
                  'magikarp'
                ],
                order: 13
              },
              {
                location: 'Route 25',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'pidgeotto',
                  'oddish',
                  'venonat',
                  'psyduck',
                  'poliwag',
                  'abra',
                  'bellsprout',
                  'krabby',
                  'kingler',
                  'goldeen',
                  'magikarp'
                ],
                order: 15
              },
              {
                location: 'Safari Zone',
                pokemon: [
                  'nidoran \u2640',
                  'nidorina',
                  'nidoran \u2642',
                  'nidorino',
                  'paras',
                  'parasect',
                  'venonat',
                  'psyduck',
                  'poliwag',
                  'slowpoke',
                  'krabby',
                  'exeggcute',
                  'rhyhorn',
                  'chansey',
                  'tangela',
                  'goldeen',
                  'scyther',
                  'pinsir',
                  'magikarp',
                  'dratini',
                  'dragonair',
                  'doduo',
                  'cubone',
                  'marowak',
                  'kangaskhan',
                  'tauros',
                  'venomoth'
                ],
                order: 37
              },
              {
                location: 'Seafoam Islands',
                pokemon: [
                  'zubat',
                  'golbat',
                  'psyduck',
                  'golduck',
                  'slowpoke',
                  'slowbro',
                  'seel',
                  'shellder',
                  'krabby',
                  'horsea',
                  'staryu',
                  'dewgong',
                  'kingler',
                  'seadra',
                  'poliwag',
                  'tentacool',
                  'goldeen',
                  'magikarp'
                ],
                order: 44
              },
              {
                location: 'Vermilion City',
                pokemon: [
                  'poliwag',
                  'tentacool',
                  'shellder',
                  'krabby',
                  'horsea',
                  'goldeen',
                  'staryu',
                  'magikarp'
                ],
                order: 18
              },
              {
                location: 'Victory Road',
                pokemon: [
                  'zubat',
                  'golbat',
                  'machop',
                  'machoke',
                  'geodude',
                  'graveler',
                  'onix',
                  'marowak',
                  'venomoth'
                ],
                order: 55
              },
              {
                location: 'Viridian City',
                pokemon: ['poliwag', 'tentacool', 'goldeen', 'magikarp'],
                order: 3
              },
              {
                location: 'Viridian Forest',
                pokemon: [
                  'caterpie',
                  'metapod',
                  'weedle',
                  'kakuna',
                  'pidgey',
                  'pidgeotto',
                  'pikachu'
                ],
                order: 6
              }
            ]
          },
          _a(ya.Yellow),
          [[], []]
        )
      ].flat();
      let wa = (() => {
          class e {
            constructor(e, t) {
              (this.nuzlockeService = e), (this.databaseService = t);
            }
            createDatabase() {
              return Object(vi.a)(this, void 0, void 0, function* () {
                0 === (yield this.databaseService.routes.count()) &&
                  (yield this.databaseService.routes.bulkAdd(va));
              });
            }
            getRoutes(e) {
              return Object(vi.a)(this, void 0, void 0, function* () {
                return (
                  (this.nuzlockeService.currentRun = e),
                  (yield this.databaseService.routes
                    .where({ game: e.game })
                    .toArray()).sort(
                    (e, t) => Number(e.order) - Number(t.order)
                  )
                );
              });
            }
            addRouteToGame(e) {
              return Object(vi.a)(this, void 0, void 0, function* () {
                const t = yield this.nuzlockeService.convertDialogToRoute(e);
                this.databaseService.routes.add(t);
              });
            }
            removeRouteFromGame(e) {
              return Object(vi.a)(this, void 0, void 0, function* () {
                e.id && (yield this.databaseService.routes.delete(e.id));
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(Ei), i.Ub(Di.a));
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        Ra = (() => {
          class e {
            constructor() {
              (this.longPress = 500), (this.release = new i.n());
            }
            startPress() {
              this.timeout = setTimeout(() => {
                this.release.emit();
              }, this.longPress);
            }
            endPress() {
              clearTimeout(this.timeout);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵdir = i.Fb({
              type: e,
              selectors: [['', 'appLongPress', '']],
              hostBindings: function (e, t) {
                1 & e &&
                  i.Xb('touchstart', function (e) {
                    return t.startPress(e);
                  })('mousedown', function (e) {
                    return t.startPress(e);
                  })('touchend', function () {
                    return t.endPress();
                  })('mouseup', function () {
                    return t.endPress();
                  })('mouseleave', function () {
                    return t.endPress();
                  });
              },
              inputs: { longPress: 'longPress' },
              outputs: { release: 'release' }
            })),
            e
          );
        })();
      function Ca(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'button', 5),
            i.Xb('release', function () {
              i.qc(e);
              const o = t.$implicit;
              return i.bc().showDelete(o);
            })('click', function () {
              i.qc(e);
              const o = t.$implicit;
              return i.bc().selectRoute(o);
            }),
            i.Qb(1, 'div'),
            i.Qb(2, 'span', 6),
            i.Ac(3),
            i.Pb(),
            i.Lb(4, 'span', 7),
            i.Lb(5, 'img', 8),
            i.cc(6, 'image'),
            i.Pb(),
            i.Lb(7, 'mat-divider'),
            i.Pb();
        }
        if (2 & e) {
          const e = t.$implicit;
          i.zb(1),
            i.Cb('strike-through', e.visited),
            i.zb(2),
            i.Bc(e.location),
            i.zb(2),
            i.Cb('hidden', !e.visited),
            i.jc(
              'src',
              i.dc(
                6,
                6,
                null == e.capturedPokemon ? null : e.capturedPokemon.name
              ),
              i.rc
            );
        }
      }
      function xa(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'button', 9),
            i.Xb('click', function () {
              return i.qc(e), i.bc().addRoute();
            }),
            i.Qb(1, 'mat-icon'),
            i.Ac(2, 'add'),
            i.Pb(),
            i.Pb();
        }
      }
      let Oa = (() => {
          class e {
            constructor(e, t, o, i) {
              (this.activatedRoute = e),
                (this.routesService = t),
                (this.nuzlockeService = o),
                (this.dialog = i),
                (this.routes = []),
                (this.loaded = !1);
            }
            ngOnInit() {
              return Object(vi.a)(this, void 0, void 0, function* () {
                yield this.routesService.createDatabase(),
                  this.activatedRoute.data.subscribe(({ nuzlocke: e }) => {
                    this.nuzlocke = e;
                    const t = localStorage.getItem('route filter');
                    this.updateAvailableRoutes(!t || 'true' === t);
                  });
              });
            }
            updateAvailableRoutes(e = !0) {
              return Object(vi.a)(this, void 0, void 0, function* () {
                const t = yield this.routesService.getRoutes(this.nuzlocke);
                (this.routes = [...t, ...this.nuzlocke.extraRoutes]
                  .filter(
                    (e) =>
                      !this.nuzlocke.ignoreRoutes
                        .map((e) => e.id)
                        .includes(e.id)
                  )
                  .map((e) =>
                    Object.assign(Object.assign({}, e), {
                      visited: this.nuzlocke.pokemon.some(
                        (t) => t.routeName === e.location
                      ),
                      capturedPokemon: this.nuzlocke.pokemon.find(
                        (t) => t.routeName === e.location
                      ),
                      random: this.nuzlocke.random
                    })
                  )),
                  localStorage.setItem('route filter', e ? 'true' : 'false'),
                  e && (this.routes = this.routes.filter((e) => !e.visited)),
                  this.setUpSorting();
              });
            }
            toggleAvailableRoutes() {
              const e = localStorage.getItem('route filter');
              this.updateAvailableRoutes(!!e && 'true' !== e);
            }
            setUpSorting() {
              null === localStorage.getItem('route sorting') &&
                localStorage.setItem('route sorting', 'true'),
                this.updateSortingMethod();
            }
            toggleSortingMethod() {
              localStorage.setItem(
                'route sorting',
                this.sortByOrder ? 'false' : 'true'
              ),
                this.updateSortingMethod();
            }
            updateSortingMethod() {
              if (this.sortByOrder)
                this.routes = this.routes.sort((e, t) => e.order - t.order);
              else {
                const e = /(Gift|Static) - /;
                this.routes = this.routes.sort((t, o) => {
                  const i = t.location.replace(e, '').trim(),
                    a = o.location.replace(e, '').trim();
                  return i.localeCompare(a);
                });
              }
              this.loaded = !0;
            }
            addRoute() {
              this.active &&
                this.dialog
                  .open(ma, { width: '80%' })
                  .afterClosed()
                  .subscribe((e) =>
                    Object(vi.a)(this, void 0, void 0, function* () {
                      e &&
                        (e.current
                          ? this.nuzlockeService.addRouteToCurrentGame(e)
                          : this.routesService.addRouteToGame(e),
                        this.updateAvailableRoutes());
                    })
                  );
            }
            addEncounter(e, t) {
              return Object(vi.a)(this, void 0, void 0, function* () {
                this.active &&
                  ((e.routeId = t.id),
                  yield this.nuzlockeService.addEncounter(e),
                  (this.routes = this.routes.filter(
                    ({ location: e }) => e !== t.location
                  )));
              });
            }
            selectRoute(e) {
              this.active &&
                !e.location.includes('Import from') &&
                this.dialog
                  .open(ba, {
                    data: Object.assign(Object.assign({}, e), {
                      random: this.nuzlocke.random,
                      ownedPokemon: this.nuzlocke.pokemon.map((e) =>
                        e.name.toLowerCase()
                      )
                    }),
                    width: '80%'
                  })
                  .afterClosed()
                  .subscribe((t) => {
                    t &&
                      this.addEncounter(
                        {
                          routeName: e.location,
                          name: t.pokemon,
                          nickname: t.nickname,
                          status: t.caught ? Si.Boxed : Si.Missed
                        },
                        e
                      );
                  });
            }
            showDelete(e) {
              this.active &&
                this.dialog
                  .open(ga, { data: { name: e.location }, width: '80%' })
                  .afterClosed()
                  .subscribe((t) =>
                    Object(vi.a)(this, void 0, void 0, function* () {
                      t &&
                        (t.onlyFromCurrent
                          ? this.nuzlockeService.removeRouteFromRun(e)
                          : this.routesService.removeRouteFromGame(e),
                        this.updateAvailableRoutes());
                    })
                  );
            }
            get sortByOrder() {
              const e = localStorage.getItem('route sorting');
              return !e || 'true' === e;
            }
            get filterAll() {
              const e = localStorage.getItem('route filter');
              return !!e && 'true' === e;
            }
            get opposingSortingMethod() {
              return this.sortByOrder ? 'Sort By Name' : 'Sort By Order';
            }
            get opposingFilterMethod() {
              return this.filterAll ? 'Show All' : 'Only Available';
            }
            get active() {
              var e;
              return (
                (null === (e = this.nuzlocke) || void 0 === e
                  ? void 0
                  : e.status) === ji.Started
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(fi.a), i.Kb(wa), i.Kb(Ei), i.Kb(Kt));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-routes']],
              decls: 14,
              vars: 7,
              consts: [
                [
                  'mat-list-item',
                  '',
                  'appLongPress',
                  '',
                  3,
                  'release',
                  'click',
                  4,
                  'ngFor',
                  'ngForOf'
                ],
                ['mat-fab', '', 'class', 'add-button', 3, 'click', 4, 'ngIf'],
                ['mat-fab', '', 1, 'filter', 3, 'matMenuTriggerFor'],
                ['routeMenu', 'matMenu'],
                ['mat-menu-item', '', 3, 'click'],
                [
                  'mat-list-item',
                  '',
                  'appLongPress',
                  '',
                  3,
                  'release',
                  'click'
                ],
                [1, 'route'],
                [1, 'text-right'],
                [3, 'src'],
                ['mat-fab', '', 1, 'add-button', 3, 'click']
              ],
              template: function (e, t) {
                if (
                  (1 & e &&
                    (i.Qb(0, 'div'),
                    i.Lb(1, 'mat-spinner'),
                    i.Pb(),
                    i.Qb(2, 'mat-action-list'),
                    i.zc(3, Ca, 8, 8, 'button', 0),
                    i.Pb(),
                    i.zc(4, xa, 3, 0, 'button', 1),
                    i.Qb(5, 'button', 2),
                    i.Qb(6, 'mat-icon'),
                    i.Ac(7, 'filter_list'),
                    i.Pb(),
                    i.Pb(),
                    i.Qb(8, 'mat-menu', null, 3),
                    i.Qb(10, 'button', 4),
                    i.Xb('click', function () {
                      return t.toggleAvailableRoutes();
                    }),
                    i.Ac(11),
                    i.Pb(),
                    i.Qb(12, 'button', 4),
                    i.Xb('click', function () {
                      return t.toggleSortingMethod();
                    }),
                    i.Ac(13),
                    i.Pb(),
                    i.Pb()),
                  2 & e)
                ) {
                  const e = i.oc(9);
                  i.Cb('hidden', t.loaded),
                    i.zb(3),
                    i.ic('ngForOf', t.routes),
                    i.zb(1),
                    i.ic('ngIf', t.active),
                    i.zb(1),
                    i.ic('matMenuTriggerFor', e),
                    i.zb(6),
                    i.Cc(' ', t.opposingFilterMethod, ' '),
                    i.zb(2),
                    i.Cc(' ', t.opposingSortingMethod, ' ');
                }
              },
              directives: [
                Io.b,
                ro,
                a.l,
                a.m,
                xt.a,
                zo,
                Wt.a,
                xo,
                vo,
                co,
                Ra,
                Gt.a
              ],
              pipes: [Gi.a],
              styles: [
                '.filter[_ngcontent-%COMP%]{position:fixed;bottom:7.5vh;left:5vw}.mat-menu-content[_ngcontent-%COMP%]{position:relative;bottom:1vh}.strike-through[_ngcontent-%COMP%]{text-decoration:line-through;width:100%;display:flex;flex:1 1 auto;justify-content:space-between}.route[_ngcontent-%COMP%]{justify-content:center;display:flex;align-content:center;flex-direction:column}img[_ngcontent-%COMP%]{height:48px;width:48px}'
              ]
            })),
            e
          );
        })(),
        Sa = (() => {
          class e {
            constructor(e, t) {
              (this.dialogRef = e),
                (this.confirmDelete = !1),
                (this.saveFormControl = new ke.e({
                  runName: new ke.c(t.name, ke.o.required),
                  random: new ke.c(t.random)
                }));
            }
            delete() {
              this.confirmDelete
                ? this.dialogRef.close({ delete: !0, name: '', random: !1 })
                : (this.confirmDelete = !0);
            }
            onClose(e) {
              'ok' === e
                ? this.saveFormControl.valid &&
                  this.dialogRef.close({
                    delete: !1,
                    name: this.saveFormControl.controls.runName.value,
                    random: this.saveFormControl.controls.random.value
                  })
                : this.dialogRef.close();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(At), i.Kb(Tt));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-save-dialog']],
              decls: 15,
              vars: 8,
              consts: [
                [3, 'formGroup'],
                ['mat-dialog-title', ''],
                ['mat-dialog-content', ''],
                [
                  'autocomplete',
                  'off',
                  'matInput',
                  '',
                  'formControlName',
                  'runName',
                  'placeholder',
                  'Nuzlocke Name'
                ],
                [1, 'my-3'],
                ['formControlName', 'random'],
                [1, 'pb-2'],
                [1, 'text-center'],
                ['color', 'warn', 'mat-raised-button', '', 3, 'click']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'form', 0),
                  i.Qb(1, 'h1', 1),
                  i.Ac(2),
                  i.Pb(),
                  i.Qb(3, 'div', 2),
                  i.Qb(4, 'div'),
                  i.Qb(5, 'mat-form-field'),
                  i.Lb(6, 'input', 3),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(7, 'div', 4),
                  i.Qb(8, 'mat-slide-toggle', 5),
                  i.Ac(9, 'Randomized Run?'),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(10, 'div', 6),
                  i.Ac(
                    11,
                    ' You cannot get this save back once you delete it. Are you sure you want to delete this save? '
                  ),
                  i.Pb(),
                  i.Qb(12, 'div', 7),
                  i.Qb(13, 'button', 8),
                  i.Xb('click', function () {
                    return t.delete();
                  }),
                  i.Ac(14, ' Delete Run '),
                  i.Pb(),
                  i.Pb(),
                  i.Pb(),
                  i.Pb()),
                  2 & e &&
                    (i.ic('formGroup', t.saveFormControl),
                    i.zb(2),
                    i.Cc(' ', t.confirmDelete ? 'Delete' : 'Edit', ' Save '),
                    i.zb(2),
                    i.Cb('hidden', t.confirmDelete),
                    i.zb(3),
                    i.Cb('hidden', t.confirmDelete),
                    i.zb(3),
                    i.Cb('hidden', !t.confirmDelete));
              },
              directives: [
                ke.p,
                ke.l,
                ke.f,
                Nt,
                Ht,
                at.b,
                Xt.a,
                ke.b,
                ke.k,
                ke.d,
                gi,
                xt.a
              ],
              styles: ['mat-form-field[_ngcontent-%COMP%]{width:100%}']
            })),
            e
          );
        })();
      function Pa(e, t) {
        if (1 & e) {
          const e = i.Rb();
          i.Qb(0, 'div'),
            i.Qb(1, 'button', 2),
            i.Xb('release', function () {
              i.qc(e);
              const o = t.$implicit;
              return i.bc().onLongPress(o);
            })('click', function () {
              i.qc(e);
              const o = t.$implicit;
              return i.bc().selectSave(o);
            }),
            i.Qb(2, 'table', 3),
            i.Qb(3, 'tbody'),
            i.Qb(4, 'tr'),
            i.Qb(5, 'td'),
            i.Ac(6),
            i.Pb(),
            i.Qb(7, 'td', 4),
            i.Ac(8),
            i.cc(9, 'date'),
            i.Pb(),
            i.Pb(),
            i.Qb(10, 'tr'),
            i.Qb(11, 'td', 5),
            i.Ac(12),
            i.Pb(),
            i.Qb(13, 'td', 4),
            i.Ac(14),
            i.Pb(),
            i.Pb(),
            i.Pb(),
            i.Pb(),
            i.Pb(),
            i.Lb(15, 'mat-divider'),
            i.Pb();
        }
        if (2 & e) {
          const e = t.$implicit,
            o = i.bc();
          i.zb(6),
            i.Bc(e.runName),
            i.zb(2),
            i.Cc(' ', i.ec(9, 5, e.startDate, 'MMMM dd, yyyy'), ' '),
            i.zb(4),
            i.Dc(' ', e.random ? 'Random' : '', ' ', o.getGame(e.game), ' '),
            i.zb(2),
            i.Bc(o.getStatus(e.status));
        }
      }
      let za = (() => {
          class e {
            constructor(e, t, o) {
              (this.dialog = e),
                (this.nuzlockeService = t),
                (this.routerService = o),
                (this.saves = []);
            }
            ngOnInit() {
              this.loadSaves();
            }
            loadSaves() {
              return Object(vi.a)(this, void 0, void 0, function* () {
                (this.saves = yield this.nuzlockeService.getSaves()),
                  1 === this.saves.length &&
                    this.saves[0].id &&
                    (this.routerService.id = this.saves[0].id);
              });
            }
            selectSave(e) {
              this.routerService.changeTab('overview', e.id);
            }
            getStatus(e) {
              return zi[e];
            }
            getGame(e) {
              return xi(e);
            }
            navigateToCreate() {
              this.routerService.changeTab('create');
            }
            onLongPress(e) {
              this.dialog
                .open(Sa, {
                  data: { name: e.runName, random: e.random },
                  width: '80%'
                })
                .afterClosed()
                .subscribe((t) =>
                  Object(vi.a)(this, void 0, void 0, function* () {
                    t &&
                      (t.delete
                        ? this.nuzlockeService.deleteNuzlocke(e)
                        : this.nuzlockeService.updateNuzlocke(e, t),
                      this.loadSaves());
                  })
                );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Kb(Kt), i.Kb(Ei), i.Kb(Ii.a));
            }),
            (e.ɵcmp = i.Eb({
              type: e,
              selectors: [['app-saves']],
              decls: 6,
              vars: 1,
              consts: [
                [4, 'ngFor', 'ngForOf'],
                ['mat-fab', '', 1, 'add-button', 3, 'click'],
                [
                  'mat-list-item',
                  '',
                  'appLongPress',
                  '',
                  1,
                  'each-save',
                  3,
                  'release',
                  'click'
                ],
                [1, 'w-100'],
                [1, 'text-right'],
                [1, 'font-small']
              ],
              template: function (e, t) {
                1 & e &&
                  (i.Qb(0, 'div'),
                  i.Qb(1, 'mat-action-list'),
                  i.zc(2, Pa, 16, 8, 'div', 0),
                  i.Pb(),
                  i.Pb(),
                  i.Qb(3, 'button', 1),
                  i.Xb('click', function () {
                    return t.navigateToCreate();
                  }),
                  i.Qb(4, 'mat-icon'),
                  i.Ac(5, 'add'),
                  i.Pb(),
                  i.Pb()),
                  2 & e && (i.zb(2), i.ic('ngForOf', t.saves));
              },
              directives: [ro, a.l, xt.a, Wt.a, co, Ra, Gt.a],
              pipes: [a.e],
              styles: [
                '.each-save[_ngcontent-%COMP%]{min-height:10vh}td[_ngcontent-%COMP%]{width:50%}'
              ]
            })),
            e
          );
        })(),
        Da = (() => {
          class e {
            constructor(e, t) {
              (this.nuzlockeService = e),
                (this.routerService = t),
                (this.hasNuzlockes = !1);
            }
            canActivate() {
              return (
                this.hasNuzlockes ||
                this.nuzlockeService
                  .hasNuzlockeSaved()
                  .then(
                    (e) => (
                      e
                        ? (this.routerService.canChangeTabs = !0)
                        : ((this.routerService.canChangeTabs = !1),
                          this.routerService.redirect('nuzlocke/create')),
                      (this.hasNuzlockes = e),
                      e
                    )
                  )
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(Ei), i.Ub(Ii.a));
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })(),
        Ea = (() => {
          class e {
            constructor(e, t) {
              (this.nuzlockeService = e),
                (this.routerService = t),
                this.nuzlockeService.update$.subscribe((e) => {
                  var t, o;
                  this.previous = {
                    id:
                      null !==
                        (o =
                          null === (t = this.previous) || void 0 === t
                            ? void 0
                            : t.id) && void 0 !== o
                        ? o
                        : 0,
                    nuzlocke: e
                  };
                });
            }
            resolve(e) {
              var t, o;
              const i = +(null !== (t = e.paramMap.get('id')) && void 0 !== t
                ? t
                : -1);
              return i ===
                (null === (o = this.previous) || void 0 === o ? void 0 : o.id)
                ? ((this.routerService.id = this.previous.id),
                  this.previous.nuzlocke)
                : this.nuzlockeService.getSaves().then((e) => {
                    const t = e.find((e) => e.id === i);
                    return t
                      ? ((this.previous = { id: i, nuzlocke: t }),
                        (this.routerService.id = this.previous.id),
                        t)
                      : (this.routerService.redirect('nuzlocke/saves'), null);
                  });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(i.Ub(Ei), i.Ub(Ii.a));
            }),
            (e.ɵprov = i.Gb({ token: e, factory: e.ɵfac, providedIn: 'root' })),
            e
          );
        })();
      const Ia = [
          { path: '', redirectTo: 'saves', pathMatch: 'full' },
          {
            path: 'overview/:id',
            component: ua,
            canActivate: [Da],
            resolve: { nuzlocke: Ea }
          },
          {
            path: 'routes/:id',
            component: Oa,
            canActivate: [Da],
            resolve: { nuzlocke: Ea }
          },
          { path: 'create', component: Ai },
          { path: 'saves', component: za, canActivate: [Da] }
        ],
        Ma = [ki, po, at.d, Qt, Gt.b, Xt.b, Io.a, Wt.b, xt.b, Ct, ti, be, Eo];
      let Aa = (() => {
        class e {}
        return (
          (e.ɵmod = i.Ib({ type: e })),
          (e.ɵinj = i.Hb({
            factory: function (t) {
              return new (t || e)();
            },
            providers: [Da],
            imports: [[a.c, ke.n, ke.g, yi.a, _i, ...Ma, fi.e.forChild(Ia)]]
          })),
          e
        );
      })();
      i.sc(ba, [Nt, Ht, Ji, Yt, xt.a], []);
    }
  }
]);
