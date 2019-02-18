// lit-html v0.10.0 | © Polymer team
!(function(e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports)
    : 'function' == typeof define && define.amd
    ? define(['exports'], t)
    : t((e.lithtml = {}));
})(this, function(e) {
  'use strict';
  var t =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          },
    n = function e(t, n, r) {
      null === t && (t = Function.prototype);
      var i = Object.getOwnPropertyDescriptor(t, n);
      if (void 0 === i) {
        var o = Object.getPrototypeOf(t);
        return null === o ? void 0 : e(o, n, r);
      }
      if ('value' in i) return i.value;
      var a = i.get;
      return void 0 !== a ? a.call(r) : void 0;
    },
    r = (function() {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
      };
    })();
  function i(e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  var o = new Map(),
    a = (function() {
      function e(t, n, r) {
        var o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : x;
        i(this, e),
          (this.strings = t),
          (this.values = n),
          (this.type = r),
          (this.partCallback = o);
      }
      return (
        r(e, [
          {
            key: 'getHTML',
            value: function() {
              for (
                var e, t, n = this.strings.length - 1, r = '', i = !0, o = 0;
                o < n;
                o++
              ) {
                var a = this.strings[o];
                r += a;
                var s = (void 0,
                void 0,
                (t = (e = a).lastIndexOf('>')),
                e.indexOf('<', t + 1) > -1 ? e.length : t);
                r += (i = s > -1 ? s < a.length : i) ? c : u;
              }
              return (r += this.strings[n]);
            }
          },
          {
            key: 'getTemplateElement',
            value: function() {
              var e = document.createElement('template');
              return (e.innerHTML = this.getHTML()), e;
            }
          }
        ]),
        e
      );
    })(),
    s = (function(e) {
      function t() {
        return (
          i(this, t),
          (function(e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ('object' != typeof t && 'function' != typeof t)
              ? e
              : t;
          })(
            this,
            (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
          )
        );
      }
      return (
        (function(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function, not ' +
                typeof t
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })),
            t &&
              (Object.setPrototypeOf
                ? Object.setPrototypeOf(e, t)
                : (e.__proto__ = t));
        })(t, a),
        r(t, [
          {
            key: 'getHTML',
            value: function() {
              return (
                '<svg>' +
                n(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  'getHTML',
                  this
                ).call(this) +
                '</svg>'
              );
            }
          },
          {
            key: 'getTemplateElement',
            value: function() {
              var e = n(
                  t.prototype.__proto__ || Object.getPrototypeOf(t.prototype),
                  'getTemplateElement',
                  this
                ).call(this),
                r = e.content,
                i = r.firstChild;
              return r.removeChild(i), T(r, i.firstChild), e;
            }
          }
        ]),
        t
      );
    })();
  function l(e) {
    var t = o.get(e.type);
    void 0 === t && ((t = new Map()), o.set(e.type, t));
    var n = t.get(e.strings);
    return (
      void 0 === n &&
        ((n = new v(e, e.getTemplateElement())), t.set(e.strings, n)),
      n
    );
  }
  var u = '{{lit-' + String(Math.random()).slice(2) + '}}',
    c = '\x3c!--' + u + '--\x3e',
    h = new RegExp(u + '|' + c),
    f = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
  var p = function e(t, n, r, o, a) {
      i(this, e),
        (this.type = t),
        (this.index = n),
        (this.name = r),
        (this.rawName = o),
        (this.strings = a);
    },
    v = function e(t, n) {
      i(this, e), (this.parts = []), (this.element = n);
      for (
        var r = this.element.content,
          o = document.createTreeWalker(r, 133, null, !1),
          a = -1,
          s = 0,
          l = [],
          c = void 0,
          v = void 0;
        o.nextNode();

      ) {
        a++, (c = v);
        var d = (v = o.currentNode);
        if (1 === d.nodeType) {
          if (!d.hasAttributes()) continue;
          for (var y = d.attributes, m = 0, _ = 0; _ < y.length; _++)
            y[_].value.indexOf(u) >= 0 && m++;
          for (; m-- > 0; ) {
            var g = t.strings[s],
              b = f.exec(g)[1],
              x = y.getNamedItem(b),
              N = x.value.split(h);
            this.parts.push(new p('attribute', a, x.name, b, N)),
              d.removeAttribute(x.name),
              (s += N.length - 1);
          }
        } else if (3 === d.nodeType) {
          var T = d.nodeValue;
          if (T.indexOf(u) < 0) continue;
          var w = d.parentNode,
            V = T.split(h),
            k = V.length - 1;
          s += k;
          for (var O = 0; O < k; O++)
            w.insertBefore(
              '' === V[O]
                ? document.createComment('')
                : document.createTextNode(V[O]),
              d
            ),
              this.parts.push(new p('node', a++));
          w.insertBefore(
            '' === V[k]
              ? document.createComment('')
              : document.createTextNode(V[k]),
            d
          ),
            l.push(d);
        } else if (8 === d.nodeType && d.nodeValue === u) {
          var S = d.parentNode,
            C = d.previousSibling;
          null === C || C !== c || C.nodeType !== Node.TEXT_NODE
            ? S.insertBefore(document.createComment(''), d)
            : a--,
            this.parts.push(new p('node', a++)),
            l.push(d),
            null === d.nextSibling
              ? S.insertBefore(document.createComment(''), d)
              : a--,
            (v = c),
            s++;
        }
      }
      var P = !0,
        j = !1,
        A = void 0;
      try {
        for (
          var E, M = l[Symbol.iterator]();
          !(P = (E = M.next()).done);
          P = !0
        ) {
          var I = E.value;
          I.parentNode.removeChild(I);
        }
      } catch (e) {
        (j = !0), (A = e);
      } finally {
        try {
          !P && M.return && M.return();
        } finally {
          if (j) throw A;
        }
      }
    },
    d = function(e, t) {
      return y(t) ? ((t = t(e)), m) : null === t ? void 0 : t;
    },
    y = function(e) {
      return 'function' == typeof e && !0 === e.__litDirective;
    },
    m = {},
    _ = function(e) {
      return (
        null === e ||
        !(
          'object' === (void 0 === e ? 'undefined' : t(e)) ||
          'function' == typeof e
        )
      );
    },
    g = (function() {
      function e(t, n, r, o) {
        i(this, e),
          (this.instance = t),
          (this.element = n),
          (this.name = r),
          (this.strings = o),
          (this.size = o.length - 1),
          (this._previousValues = []);
      }
      return (
        r(e, [
          {
            key: '_interpolate',
            value: function(e, t) {
              for (
                var n = this.strings, r = n.length - 1, i = '', o = 0;
                o < r;
                o++
              ) {
                i += n[o];
                var a = d(this, e[t + o]);
                if (
                  a &&
                  a !== m &&
                  (Array.isArray(a) ||
                    ('string' != typeof a && a[Symbol.iterator]))
                ) {
                  var s = !0,
                    l = !1,
                    u = void 0;
                  try {
                    for (
                      var c, h = a[Symbol.iterator]();
                      !(s = (c = h.next()).done);
                      s = !0
                    ) {
                      i += c.value;
                    }
                  } catch (e) {
                    (l = !0), (u = e);
                  } finally {
                    try {
                      !s && h.return && h.return();
                    } finally {
                      if (l) throw u;
                    }
                  }
                } else i += a;
              }
              return i + n[r];
            }
          },
          {
            key: '_equalToPreviousValues',
            value: function(e, t) {
              for (var n = t; n < t + this.size; n++)
                if (this._previousValues[n] !== e[n] || !_(e[n])) return !1;
              return !0;
            }
          },
          {
            key: 'setValue',
            value: function(e, t) {
              if (!this._equalToPreviousValues(e, t)) {
                var n = this.strings,
                  r = void 0;
                2 === n.length && '' === n[0] && '' === n[1]
                  ? ((r = d(this, e[t])), Array.isArray(r) && (r = r.join('')))
                  : (r = this._interpolate(e, t)),
                  r !== m && this.element.setAttribute(this.name, r),
                  (this._previousValues = e);
              }
            }
          }
        ]),
        e
      );
    })(),
    b = (function() {
      function e(t, n, r) {
        i(this, e),
          (this.instance = t),
          (this.startNode = n),
          (this.endNode = r),
          (this._previousValue = void 0);
      }
      return (
        r(e, [
          {
            key: 'setValue',
            value: function(e) {
              if ((e = d(this, e)) !== m)
                if (_(e)) {
                  if (e === this._previousValue) return;
                  this._setText(e);
                } else
                  e instanceof a
                    ? this._setTemplateResult(e)
                    : Array.isArray(e) || e[Symbol.iterator]
                    ? this._setIterable(e)
                    : e instanceof Node
                    ? this._setNode(e)
                    : void 0 !== e.then
                    ? this._setPromise(e)
                    : this._setText(e);
            }
          },
          {
            key: '_insert',
            value: function(e) {
              this.endNode.parentNode.insertBefore(e, this.endNode);
            }
          },
          {
            key: '_setNode',
            value: function(e) {
              this._previousValue !== e &&
                (this.clear(), this._insert(e), (this._previousValue = e));
            }
          },
          {
            key: '_setText',
            value: function(e) {
              var t = this.startNode.nextSibling;
              (e = void 0 === e ? '' : e),
                t === this.endNode.previousSibling &&
                t.nodeType === Node.TEXT_NODE
                  ? (t.textContent = e)
                  : this._setNode(document.createTextNode(e)),
                (this._previousValue = e);
            }
          },
          {
            key: '_setTemplateResult',
            value: function(e) {
              var t = this.instance._getTemplate(e),
                n = void 0;
              this._previousValue && this._previousValue.template === t
                ? (n = this._previousValue)
                : ((n = new N(
                    t,
                    this.instance._partCallback,
                    this.instance._getTemplate
                  )),
                  this._setNode(n._clone()),
                  (this._previousValue = n)),
                n.update(e.values);
            }
          },
          {
            key: '_setIterable',
            value: function(t) {
              Array.isArray(this._previousValue) ||
                (this.clear(), (this._previousValue = []));
              var n = this._previousValue,
                r = 0,
                i = !0,
                o = !1,
                a = void 0;
              try {
                for (
                  var s, l = t[Symbol.iterator]();
                  !(i = (s = l.next()).done);
                  i = !0
                ) {
                  var u = s.value,
                    c = n[r];
                  if (void 0 === c) {
                    var h = this.startNode;
                    if (r > 0)
                      (h = n[r - 1].endNode = document.createTextNode('')),
                        this._insert(h);
                    (c = new e(this.instance, h, this.endNode)), n.push(c);
                  }
                  c.setValue(u), r++;
                }
              } catch (e) {
                (o = !0), (a = e);
              } finally {
                try {
                  !i && l.return && l.return();
                } finally {
                  if (o) throw a;
                }
              }
              if (0 === r) this.clear(), (this._previousValue = void 0);
              else if (r < n.length) {
                var f = n[r - 1];
                (n.length = r),
                  this.clear(f.endNode.previousSibling),
                  (f.endNode = this.endNode);
              }
            }
          },
          {
            key: '_setPromise',
            value: function(e) {
              var t = this;
              (this._previousValue = e),
                e.then(function(n) {
                  t._previousValue === e && t.setValue(n);
                });
            }
          },
          {
            key: 'clear',
            value: function() {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : this.startNode;
              w(this.startNode.parentNode, e.nextSibling, this.endNode);
            }
          }
        ]),
        e
      );
    })(),
    x = function(e, t, n) {
      if ('attribute' === t.type) return new g(e, n, t.name, t.strings);
      if ('node' === t.type) return new b(e, n, n.nextSibling);
      throw new Error('Unknown part type ' + t.type);
    },
    N = (function() {
      function e(t, n, r) {
        i(this, e),
          (this._parts = []),
          (this.template = t),
          (this._partCallback = n),
          (this._getTemplate = r);
      }
      return (
        r(e, [
          {
            key: 'update',
            value: function(e) {
              var t = 0,
                n = !0,
                r = !1,
                i = void 0;
              try {
                for (
                  var o, a = this._parts[Symbol.iterator]();
                  !(n = (o = a.next()).done);
                  n = !0
                ) {
                  var s = o.value;
                  void 0 === s.size
                    ? (s.setValue(e[t]), t++)
                    : (s.setValue(e, t), (t += s.size));
                }
              } catch (e) {
                (r = !0), (i = e);
              } finally {
                try {
                  !n && a.return && a.return();
                } finally {
                  if (r) throw i;
                }
              }
            }
          },
          {
            key: '_clone',
            value: function() {
              var e = document.importNode(this.template.element.content, !0),
                t = this.template.parts;
              if (t.length > 0)
                for (
                  var n = document.createTreeWalker(e, 133, null, !1),
                    r = -1,
                    i = 0;
                  i < t.length;
                  i++
                ) {
                  for (var o = t[i]; r < o.index; ) r++, n.nextNode();
                  this._parts.push(this._partCallback(this, o, n.currentNode));
                }
              return e;
            }
          }
        ]),
        e
      );
    })(),
    T = function(e, t) {
      for (
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r =
            arguments.length > 3 && void 0 !== arguments[3]
              ? arguments[3]
              : null,
          i = t;
        i !== n;

      ) {
        var o = i.nextSibling;
        e.insertBefore(i, r), (i = o);
      }
    },
    w = function(e, t) {
      for (
        var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : null,
          r = t;
        r !== n;

      ) {
        var i = r.nextSibling;
        e.removeChild(r), (r = i);
      }
    };
  (e.templateCaches = o),
    (e.html = function(e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return new a(e, n, 'html');
    }),
    (e.svg = function(e) {
      for (
        var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return new s(e, n, 'svg');
    }),
    (e.TemplateResult = a),
    (e.SVGTemplateResult = s),
    (e.defaultTemplateFactory = l),
    (e.render = function(e, t) {
      var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l,
        r = n(e),
        i = t.__templateInstance;
      if (
        void 0 === i ||
        i.template !== r ||
        i._partCallback !== e.partCallback
      ) {
        (i = new N(r, e.partCallback, n)), (t.__templateInstance = i);
        var o = i._clone();
        i.update(e.values), w(t, t.firstChild), t.appendChild(o);
      } else i.update(e.values);
    }),
    (e.TemplatePart = p),
    (e.Template = v),
    (e.getValue = d),
    (e.directive = function(e) {
      return (e.__litDirective = !0), e;
    }),
    (e.directiveValue = m),
    (e.AttributePart = g),
    (e.NodePart = b),
    (e.defaultPartCallback = x),
    (e.TemplateInstance = N),
    (e.reparentNodes = T),
    (e.removeNodes = w),
    Object.defineProperty(e, '__esModule', { value: !0 });
});
