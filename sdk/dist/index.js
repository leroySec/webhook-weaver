import je, { useState as J } from "react";
var re = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  if (Ce)
    return U;
  Ce = 1;
  var F = je, C = Symbol.for("react.element"), D = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, w = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(m, l, x) {
    var f, g = {}, T = null, d = null;
    x !== void 0 && (T = "" + x), l.key !== void 0 && (T = "" + l.key), l.ref !== void 0 && (d = l.ref);
    for (f in l)
      E.call(l, f) && !S.hasOwnProperty(f) && (g[f] = l[f]);
    if (m && m.defaultProps)
      for (f in l = m.defaultProps, l)
        g[f] === void 0 && (g[f] = l[f]);
    return { $$typeof: C, type: m, key: T, ref: d, props: g, _owner: w.current };
  }
  return U.Fragment = D, U.jsx = _, U.jsxs = _, U;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function vr() {
  return Se || (Se = 1, process.env.NODE_ENV !== "production" && function() {
    var F = je, C = Symbol.for("react.element"), D = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), m = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), L = Symbol.iterator, Oe = "@@iterator";
    function Pe(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var P = F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var s = t.map(function(o) {
          return String(o);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Ae = !1, Fe = !1, De = !1, We = !1, Ie = !1, te;
    te = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === E || e === S || Ie || e === w || e === x || e === f || We || e === d || Ae || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === g || e.$$typeof === _ || e.$$typeof === m || e.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case E:
          return "Fragment";
        case D:
          return "Portal";
        case S:
          return "Profiler";
        case w:
          return "StrictMode";
        case x:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ne(r) + ".Consumer";
          case _:
            var t = e;
            return ne(t._context) + ".Provider";
          case l:
            return Ue(e, e.render, "ForwardRef");
          case g:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case T: {
            var i = e, s = i._payload, o = i._init;
            try {
              return R(o(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, W = 0, ae, oe, ie, se, ue, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ye() {
      {
        if (W === 0) {
          ae = console.log, oe = console.info, ie = console.warn, se = console.error, ue = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function Le() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ae
            }),
            info: j({}, e, {
              value: oe
            }),
            warn: j({}, e, {
              value: ie
            }),
            error: j({}, e, {
              value: se
            }),
            group: j({}, e, {
              value: ue
            }),
            groupCollapsed: j({}, e, {
              value: le
            }),
            groupEnd: j({}, e, {
              value: ce
            })
          });
        }
        W < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = P.ReactCurrentDispatcher, q;
    function M(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var z = !1, V;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Me();
    }
    function de(e, r) {
      if (!e || z)
        return "";
      {
        var t = V.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      z = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = K.current, K.current = null, Ye();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (h) {
              n = h;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (h) {
              n = h;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (h) {
            n = h;
          }
          e();
        }
      } catch (h) {
        if (h && n && typeof h.stack == "string") {
          for (var a = h.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, c = p.length - 1; u >= 1 && c >= 0 && a[u] !== p[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (a[u] !== p[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || a[u] !== p[c]) {
                    var b = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, b), b;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        z = !1, K.current = s, Le(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", O = A ? M(A) : "";
      return typeof e == "function" && V.set(e, O), O;
    }
    function Ve(e, r, t) {
      return de(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function N(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return de(e, Ne(e));
      if (typeof e == "string")
        return M(e);
      switch (e) {
        case x:
          return M("Suspense");
        case f:
          return M("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            return Ve(e.render);
          case g:
            return N(e.type, r, t);
          case T: {
            var n = e, i = n._payload, s = n._init;
            try {
              return N(s(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, pe = P.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, t, n, i) {
      {
        var s = Function.call.bind(I);
        for (var o in e)
          if (s(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (B(i), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), B(null)), a instanceof Error && !(a.message in ve) && (ve[a.message] = !0, B(i), v("Failed %s type: %s", t, a.message), B(null));
          }
      }
    }
    var Je = Array.isArray;
    function G(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function he(e) {
      if (qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), ge(e);
    }
    var $ = P.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye, X;
    X = {};
    function Ge(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && $.current && r && $.current.stateNode !== r) {
        var t = R($.current.type);
        X[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R($.current.type), e.ref), X[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ye || (ye = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, i, s, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: C,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, i) {
      {
        var s, o = {}, a = null, p = null;
        t !== void 0 && (he(t), a = "" + t), Xe(r) && (he(r.key), a = "" + r.key), Ge(r) && (p = r.ref, He(r, i));
        for (s in r)
          I.call(r, s) && !ze.hasOwnProperty(s) && (o[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            o[s] === void 0 && (o[s] = u[s]);
        }
        if (a || p) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(o, c), p && Qe(o, c);
        }
        return er(e, a, p, i, n, $.current, o);
      }
    }
    var H = P.ReactCurrentOwner, me = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = N(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === C;
    }
    function Re() {
      {
        if (H.current) {
          var e = R(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function nr(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== H.current && (n = " It was passed a child from " + R(e._owner.type) + "."), k(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Q(n) && _e(n, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Pe(e);
          if (typeof i == "function" && i !== e.entries)
            for (var s = i.call(e), o; !(o = s.next()).done; )
              Q(o.value) && _e(o.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Be(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var i = R(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Te = {};
    function we(e, r, t, n, i, s) {
      {
        var o = $e(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = tr(i);
          p ? a += p : a += Re();
          var u;
          e === null ? u = "null" : G(e) ? u = "array" : e !== void 0 && e.$$typeof === C ? (u = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var c = rr(e, r, t, i, s);
        if (c == null)
          return c;
        if (o) {
          var b = r.children;
          if (b !== void 0)
            if (n)
              if (G(b)) {
                for (var A = 0; A < b.length; A++)
                  xe(b[A], e);
                Object.freeze && Object.freeze(b);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(b, e);
        }
        if (I.call(r, "key")) {
          var O = R(e), h = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), ee = h.length > 0 ? "{key: someKey, " + h.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + ee]) {
            var cr = h.length > 0 ? "{" + h.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ee, O, cr, O), Te[O + ee] = !0;
          }
        }
        return e === E ? or(c) : ar(c), c;
      }
    }
    function ir(e, r, t) {
      return we(e, r, t, !0);
    }
    function sr(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = sr, lr = ir;
    Y.Fragment = E, Y.jsx = ur, Y.jsxs = lr;
  }()), Y;
}
process.env.NODE_ENV === "production" ? re.exports = dr() : re.exports = vr();
var y = re.exports;
const gr = ({
  apiKey: F,
  apiUrl: C = "http://localhost:3001",
  availableActions: D,
  theme: E = "light"
}) => {
  const [w, S] = J(""), [_, m] = J(""), [l, x] = J(!1), [f, g] = J(""), T = async () => {
    if (!w || !_) {
      g("Please select an action and enter target URL");
      return;
    }
    x(!0), g("");
    try {
      const d = await fetch(`${C}/automations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": F
        },
        body: JSON.stringify({
          targetUrl: _,
          actionType: w
        })
      });
      if (!d.ok)
        throw new Error("Failed to create automation");
      const L = await d.json();
      g(`✅ Automation created! Webhook URL: ${L.webhookUrl}`), S(""), m("");
    } catch (d) {
      g(`❌ Error: ${d instanceof Error ? d.message : "Unknown error"}`);
    } finally {
      x(!1);
    }
  };
  return /* @__PURE__ */ y.jsxs("div", { style: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: E === "light" ? "#ffffff" : "#f5f5f5",
    maxWidth: "500px"
  }, children: [
    /* @__PURE__ */ y.jsx("h3", { style: { margin: "0 0 15px 0", color: E === "light" ? "#333" : "#fff" }, children: "Webhook Weaver" }),
    /* @__PURE__ */ y.jsxs("div", { style: { marginBottom: "15px" }, children: [
      /* @__PURE__ */ y.jsx("label", { style: { display: "block", marginBottom: "5px", fontWeight: "bold" }, children: "Action Type:" }),
      /* @__PURE__ */ y.jsxs(
        "select",
        {
          value: w,
          onChange: (d) => S(d.target.value),
          style: {
            width: "100%",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px"
          },
          children: [
            /* @__PURE__ */ y.jsx("option", { value: "", children: "Select an action" }),
            D.map((d) => /* @__PURE__ */ y.jsx("option", { value: d.value, children: d.label }, d.value))
          ]
        }
      )
    ] }),
    /* @__PURE__ */ y.jsxs("div", { style: { marginBottom: "15px" }, children: [
      /* @__PURE__ */ y.jsx("label", { style: { display: "block", marginBottom: "5px", fontWeight: "bold" }, children: "Target URL:" }),
      /* @__PURE__ */ y.jsx(
        "input",
        {
          type: "url",
          value: _,
          onChange: (d) => m(d.target.value),
          placeholder: "https://yourapp.com/webhook-receiver",
          style: {
            width: "100%",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px"
          }
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: T,
        disabled: l,
        style: {
          width: "100%",
          padding: "10px",
          backgroundColor: l ? "#ccc" : "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: l ? "not-allowed" : "pointer"
        },
        children: l ? "Creating..." : "Create Automation"
      }
    ),
    f && /* @__PURE__ */ y.jsx("div", { style: {
      marginTop: "15px",
      padding: "10px",
      borderRadius: "4px",
      backgroundColor: f.includes("✅") ? "#d4edda" : "#f8d7da",
      color: f.includes("✅") ? "#155724" : "#721c24",
      fontSize: "14px"
    }, children: f })
  ] });
};
export {
  gr as WebhookWeaver
};
