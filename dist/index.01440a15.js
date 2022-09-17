// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aZNBS":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "abe7572201440a15";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1Mbvr":[function(require,module,exports) {
var _mutationState = require("../rooms/schema/MutationState");
var _colyseusJs = require("colyseus.js");
var _movement = require("../messages/movement");
const queryBoardElement = ()=>document.querySelector("#board");
const queryPreviewElement = ()=>document.querySelector("#preview");
const queryLevelElement = ()=>document.querySelector("#level");
const queryScoreElement = ()=>document.querySelector("#score");
const clearBoard = ()=>{
    const boardElement = queryBoardElement();
    removeChildren(boardElement);
};
const clearPreview = ()=>{
    const previewElement = queryPreviewElement();
    removeChildren(previewElement);
};
const removeChildren = (parentElement)=>{
    while(parentElement.childNodes.length)parentElement.removeChild(parentElement.lastChild);
};
const drawBoard = (board)=>{
    const boardElement = queryBoardElement();
    const elementRect = boardElement.getBoundingClientRect();
    const blockHeight = Math.floor((elementRect.height - 32) / board.rows);
    boardElement.style.gridTemplateColumns = `repeat(${board.cols}, ${blockHeight}px)`;
    boardElement.style.gridTemplateRows = `repeat(${board.rows}, ${blockHeight}px)`;
    boardElement.style.height = "fit-content";
    boardElement.style.width = "fit-content";
    const boardPosition = (0, _mutationState.queryByRowAndColumn)(board);
    for(let row = 0; row < board.rows; ++row)for(let col = 0; col < board.cols; ++col){
        const cellDiv = document.createElement("div");
        cellDiv.id = `cell-r${row}-c${col}`;
        cellDiv.style.background = `#${boardPosition(row, col).toString(16)}`;
        boardElement.append(cellDiv);
    }
};
const drawPreview = (preview)=>{
    const previewElement = queryPreviewElement();
    previewElement.style.gridTemplateColumns = `repeat(5, 20px)`;
    previewElement.style.gridTemplateRows = `repeat(5, 20px)`;
    previewElement.style.height = "fit-content";
    previewElement.style.width = "fit-content";
    const blockPosition = (0, _mutationState.queryByRowAndColumn)(preview);
    for(let row = 0; row < 5; ++row)for(let col = 0; col < 5; ++col){
        const cellDiv = document.createElement("div");
        cellDiv.id = `preview-r${row}-c${col}`;
        previewElement.append(cellDiv);
    }
    for(let row1 = 0; row1 < preview.rows; ++row1){
        for(let col1 = 0; col1 < preview.cols; ++col1)if (blockPosition(row1, col1) !== 0) {
            const boardSquare = document.querySelector(`#preview-r${row1 + 1}-c${col1 + 1}`);
            boardSquare.style.background = `#${preview.color.toString(16)}`;
            boardSquare.style.border = `1px solid black`;
        }
    }
};
const drawTetromino = (currentBlock, currentPosition)=>{
    const blockPosition = (0, _mutationState.queryByRowAndColumn)(currentBlock);
    for(let row = currentPosition.row; row < currentPosition.row + currentBlock.rows; ++row){
        for(let col = currentPosition.col; col < currentPosition.col + currentBlock.cols; ++col)if (blockPosition(row - currentPosition.row, col - currentPosition.col) !== 0) {
            const boardSquare = document.querySelector(`#cell-r${row}-c${col}`);
            boardSquare.style.background = `#${currentBlock.color.toString(16)}`;
            boardSquare.style.border = `1px solid black`;
        }
    }
};
const drawLevel = (level)=>{
    const levelElement = queryLevelElement();
    levelElement.textContent = `${level}`;
};
const drawScore = (score)=>{
    const scoreElement = queryScoreElement();
    scoreElement.textContent = `${score}`;
};
document.addEventListener("DOMContentLoaded", async ()=>{
    const client = new (0, _colyseusJs.Client)("ws://localhost:2567");
    const room = await client.joinOrCreate("game").then((room)=>{
        document.addEventListener("keydown", (ev)=>{
            if (ev.code === "Space") room.send("rotate", {});
            else if (ev.code === "ArrowLeft") room.send("move", (0, _movement.LEFT));
            else if (ev.code === "ArrowRight") room.send("move", (0, _movement.RIGHT));
            else if (ev.code === "ArrowDown") room.send("move", (0, _movement.DOWN));
        });
        return room;
    });
    room.onStateChange((newState)=>{
        clearBoard();
        clearPreview();
        drawBoard(newState.board);
        drawPreview(newState.nextBlock);
        drawTetromino(newState.currentBlock, newState.currentPosition);
        drawScore(newState.totalPoints);
        drawLevel(newState.level);
    });
});

},{"../rooms/schema/MutationState":"7HGhp","colyseus.js":"1QKAp","../messages/movement":"3vlCd"}],"7HGhp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queryByRowAndColumn", ()=>queryByRowAndColumn);
parcelHelpers.export(exports, "setValueAtRowAndColumn", ()=>setValueAtRowAndColumn);
parcelHelpers.export(exports, "addEmptyRowToBoard", ()=>addEmptyRowToBoard);
parcelHelpers.export(exports, "deleteRowsFromBoard", ()=>deleteRowsFromBoard);
parcelHelpers.export(exports, "freezeCurrentTetromino", ()=>freezeCurrentTetromino);
var _tetrominoState = require("./TetrominoState");
const queryByRowAndColumn = (board)=>(row, col)=>{
        return board.values[row * board.cols + col];
    };
const setValueAtRowAndColumn = (board)=>(row, col, value)=>{
        board.values[row * board.cols + col] = value;
    };
const addEmptyRowToBoard = (board)=>{
    const emptyRow = new Array(board.cols).fill(0);
    addRowToBoard(board, emptyRow);
};
const addRowToBoard = (board, newRow)=>{
    board.values.unshift(...newRow);
};
const deleteRowsFromBoard = (board, rowToDelete, amountOfRowsToDelete = 1)=>{
    board.values.splice(rowToDelete * board.cols, board.cols * amountOfRowsToDelete);
};
const freezeCurrentTetromino = (board, Tetromino, position)=>{
    const setBoardValue = setValueAtRowAndColumn(board);
    const TetrominoElement = queryByRowAndColumn(Tetromino);
    for(let TetrominoRow = 0; TetrominoRow < Tetromino.rows; ++TetrominoRow){
        for(let TetrominoCol = 0; TetrominoCol < Tetromino.cols; ++TetrominoCol)if (TetrominoElement(TetrominoRow, TetrominoCol) !== 0) setBoardValue(position.row + TetrominoRow, position.col + TetrominoCol, Tetromino.color);
    }
};

},{"./TetrominoState":"8LOAD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8LOAD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Tetromino", ()=>Tetromino);
parcelHelpers.export(exports, "getRandomBlock", ()=>getRandomBlock);
var _tsDecorateMjs = require("@swc/helpers/src/_ts_decorate.mjs");
var _tsDecorateMjsDefault = parcelHelpers.interopDefault(_tsDecorateMjs);
var _schema = require("@colyseus/schema");
var _boardState = require("./BoardState");
class Tetromino extends (0, _boardState.Board) {
    constructor(){
        super();
        this.currentOrientation = 0;
    }
    _rotate(orientation) {
        this.currentOrientation = orientation;
        this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
    }
}
(0, _tsDecorateMjsDefault.default)([
    (0, _schema.type)("number")
], Tetromino.prototype, "color", void 0);
const BLOCKS = [
    class O extends Tetromino {
        orientations = [
            [
                1,
                1,
                1,
                1
            ], 
        ];
        constructor(){
            super();
            this.rows = 2;
            this.cols = 2;
            this.color = 0xCCCC00;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
        }
        rotate() {
            const newBlock = new O();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    },
    class T extends Tetromino {
        orientations = [
            [
                0,
                1,
                0,
                1,
                1,
                1,
                0,
                0,
                0
            ],
            [
                0,
                1,
                0,
                0,
                1,
                1,
                0,
                1,
                0
            ],
            [
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                1,
                0
            ],
            [
                0,
                1,
                0,
                1,
                1,
                0,
                0,
                1,
                0
            ], 
        ];
        constructor(){
            super();
            this.rows = 3;
            this.cols = 3;
            this.color = 0xFF00FF;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
        }
        rotate() {
            const newBlock = new T();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    },
    class I extends Tetromino {
        orientations = [
            [
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            [
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0,
                0,
                0,
                1,
                0
            ], 
        ];
        constructor(){
            super();
            this.rows = 4;
            this.cols = 4;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
            this.color = 0x00ffff;
        }
        rotate() {
            const newBlock = new I();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    },
    class Z extends Tetromino {
        orientations = [
            [
                1,
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                0
            ],
            [
                0,
                0,
                1,
                0,
                1,
                1,
                0,
                1,
                0
            ], 
        ];
        constructor(){
            super();
            this.rows = 3;
            this.cols = 3;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
            this.color = 0xFF4D4D;
        }
        rotate() {
            const newBlock = new Z();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    },
    class S extends Tetromino {
        orientations = [
            [
                0,
                1,
                1,
                1,
                1,
                0,
                0,
                0,
                0
            ],
            [
                1,
                0,
                0,
                1,
                1,
                0,
                0,
                1,
                0
            ], 
        ];
        constructor(){
            super();
            this.rows = 3;
            this.cols = 3;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
            this.color = 0x00FF00;
        }
        rotate() {
            const newBlock = new S();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    },
    class L extends Tetromino {
        orientations = [
            [
                0,
                0,
                1,
                1,
                1,
                1,
                0,
                0,
                0
            ],
            [
                0,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                1
            ],
            [
                0,
                0,
                0,
                1,
                1,
                1,
                1,
                0,
                0
            ],
            [
                1,
                1,
                0,
                0,
                1,
                0,
                0,
                1,
                0
            ], 
        ];
        constructor(){
            super();
            this.rows = 3;
            this.cols = 3;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
            this.color = 0xffc14d;
        }
        rotate() {
            const newBlock = new L();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    },
    class J extends Tetromino {
        orientations = [
            [
                1,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0
            ],
            [
                0,
                1,
                1,
                0,
                1,
                0,
                0,
                1,
                0
            ],
            [
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                1
            ],
            [
                0,
                1,
                0,
                0,
                1,
                0,
                1,
                1,
                0
            ]
        ];
        constructor(){
            super();
            this.rows = 3;
            this.cols = 3;
            this.values = new (0, _schema.ArraySchema)(...this.orientations[this.currentOrientation]);
            this.color = 0x8080ff;
        }
        rotate() {
            const newBlock = new J();
            const nextOrientation = (this.currentOrientation + 1) % this.orientations.length;
            newBlock._rotate(nextOrientation);
            return newBlock;
        }
    }, 
];
const getRandomBlock = ()=>{
    const _getRandomBlock = (type)=>{
        return new type();
    };
    const nextBlock = BLOCKS[Math.floor(Math.random() * BLOCKS.length)];
    return _getRandomBlock(nextBlock);
};

},{"@swc/helpers/src/_ts_decorate.mjs":"6yEaS","@colyseus/schema":"77vsq","./BoardState":"bJUbn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6yEaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"77vsq":[function(require,module,exports) {
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2) {
            for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
            }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    // export const SWITCH_TO_STRUCTURE = 193; (easily collides with DELETE_AND_ADD + fieldIndex = 2)
    var SWITCH_TO_STRUCTURE = 255; // (decoding collides with DELETE_AND_ADD + fieldIndex = 63)
    var TYPE_ID = 213;
    /**
     * Encoding Schema field operations.
     */ exports1.OPERATION = void 0;
    (function(OPERATION) {
        // add new structure/primitive
        OPERATION[OPERATION["ADD"] = 128] = "ADD";
        // replace structure/primitive
        OPERATION[OPERATION["REPLACE"] = 0] = "REPLACE";
        // delete field
        OPERATION[OPERATION["DELETE"] = 64] = "DELETE";
        // DELETE field, followed by an ADD
        OPERATION[OPERATION["DELETE_AND_ADD"] = 192] = "DELETE_AND_ADD";
        // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
        // touches are NOT encoded.
        OPERATION[OPERATION["TOUCH"] = 1] = "TOUCH";
        // MapSchema Operations
        OPERATION[OPERATION["CLEAR"] = 10] = "CLEAR";
    })(exports1.OPERATION || (exports1.OPERATION = {}));
    // export enum OPERATION {
    //     // add new structure/primitive
    //     // (128)
    //     ADD = 128, // 10000000,
    //     // replace structure/primitive
    //     REPLACE = 1,// 00000001
    //     // delete field
    //     DELETE = 192, // 11000000
    //     // DELETE field, followed by an ADD
    //     DELETE_AND_ADD = 224, // 11100000
    //     // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
    //     // touches are NOT encoded.
    //     TOUCH = 0, // 00000000
    //     // MapSchema Operations
    //     CLEAR = 10,
    // }
    //
    // Root holds all schema references by unique id
    //
    var Root = /** @class */ function() {
        function Root() {
            //
            // Relation of refId => Schema structure
            // For direct access of structures during decoding time.
            //
            this.refs = new Map();
            this.refCounts = {};
            this.deletedRefs = new Set();
            this.nextUniqueId = 0;
        }
        Root.prototype.getNextUniqueId = function() {
            return this.nextUniqueId++;
        };
        // for decoding
        Root.prototype.addRef = function(refId, ref, incrementCount) {
            if (incrementCount === void 0) incrementCount = true;
            this.refs.set(refId, ref);
            if (incrementCount) this.refCounts[refId] = (this.refCounts[refId] || 0) + 1;
        };
        // for decoding
        Root.prototype.removeRef = function(refId) {
            this.refCounts[refId] = this.refCounts[refId] - 1;
            this.deletedRefs.add(refId);
        };
        Root.prototype.clearRefs = function() {
            this.refs.clear();
            this.deletedRefs.clear();
            this.refCounts = {};
        };
        // for decoding
        Root.prototype.garbageCollectDeletedRefs = function() {
            var _this = this;
            this.deletedRefs.forEach(function(refId) {
                if (_this.refCounts[refId] <= 0) {
                    var ref = _this.refs.get(refId);
                    //
                    // Ensure child schema instances have their references removed as well.
                    //
                    if (ref instanceof Schema) {
                        for(var fieldName in ref["_definition"].schema)if (typeof ref["_definition"].schema[fieldName] !== "string" && ref[fieldName] && ref[fieldName]["$changes"]) _this.removeRef(ref[fieldName]["$changes"].refId);
                    } else {
                        var definition = ref["$changes"].parent._definition;
                        var type = definition.schema[definition.fieldsByIndex[ref["$changes"].parentIndex]];
                        if (typeof Object.values(type)[0] === "function") Array.from(ref.values()).forEach(function(child) {
                            return _this.removeRef(child["$changes"].refId);
                        });
                    }
                    _this.refs.delete(refId);
                    delete _this.refCounts[refId];
                }
            });
            // clear deleted refs.
            this.deletedRefs.clear();
        };
        return Root;
    }();
    var ChangeTree = /** @class */ function() {
        function ChangeTree(ref, parent, root) {
            this.changed = false;
            this.changes = new Map();
            this.allChanges = new Set();
            // cached indexes for filtering
            this.caches = {};
            this.currentCustomOperation = 0;
            this.ref = ref;
            this.setParent(parent, root);
        }
        ChangeTree.prototype.setParent = function(parent, root, parentIndex) {
            var _this = this;
            if (!this.indexes) this.indexes = this.ref instanceof Schema ? this.ref["_definition"].indexes : {};
            this.parent = parent;
            this.parentIndex = parentIndex;
            // avoid setting parents with empty `root`
            if (!root) return;
            this.root = root;
            //
            // assign same parent on child structures
            //
            if (this.ref instanceof Schema) {
                var definition = this.ref["_definition"];
                for(var field in definition.schema){
                    var value = this.ref[field];
                    if (value && value["$changes"]) {
                        var parentIndex_1 = definition.indexes[field];
                        value["$changes"].setParent(this.ref, root, parentIndex_1);
                    }
                }
            } else if (typeof this.ref === "object") this.ref.forEach(function(value, key) {
                if (value instanceof Schema) {
                    var changeTreee = value["$changes"];
                    var parentIndex_2 = _this.ref["$changes"].indexes[key];
                    changeTreee.setParent(_this.ref, _this.root, parentIndex_2);
                }
            });
        };
        ChangeTree.prototype.operation = function(op) {
            this.changes.set(--this.currentCustomOperation, op);
        };
        ChangeTree.prototype.change = function(fieldName, operation) {
            if (operation === void 0) operation = exports1.OPERATION.ADD;
            var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
            this.assertValidIndex(index, fieldName);
            var previousChange = this.changes.get(index);
            if (!previousChange || previousChange.op === exports1.OPERATION.DELETE || previousChange.op === exports1.OPERATION.TOUCH // (mazmorra.io's BattleAction issue)
            ) this.changes.set(index, {
                op: !previousChange ? operation : previousChange.op === exports1.OPERATION.DELETE ? exports1.OPERATION.DELETE_AND_ADD : operation,
                // : OPERATION.REPLACE,
                index: index
            });
            this.allChanges.add(index);
            this.changed = true;
            this.touchParents();
        };
        ChangeTree.prototype.touch = function(fieldName) {
            var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
            this.assertValidIndex(index, fieldName);
            if (!this.changes.has(index)) this.changes.set(index, {
                op: exports1.OPERATION.TOUCH,
                index: index
            });
            this.allChanges.add(index);
            // ensure touch is placed until the $root is found.
            this.touchParents();
        };
        ChangeTree.prototype.touchParents = function() {
            if (this.parent) this.parent["$changes"].touch(this.parentIndex);
        };
        ChangeTree.prototype.getType = function(index) {
            if (this.ref["_definition"]) {
                var definition = this.ref["_definition"];
                return definition.schema[definition.fieldsByIndex[index]];
            } else {
                var definition = this.parent["_definition"];
                var parentType = definition.schema[definition.fieldsByIndex[this.parentIndex]];
                //
                // Get the child type from parent structure.
                // - ["string"] => "string"
                // - { map: "string" } => "string"
                // - { set: "string" } => "string"
                //
                return Object.values(parentType)[0];
            }
        };
        ChangeTree.prototype.getChildrenFilter = function() {
            var childFilters = this.parent["_definition"].childFilters;
            return childFilters && childFilters[this.parentIndex];
        };
        //
        // used during `.encode()`
        //
        ChangeTree.prototype.getValue = function(index) {
            return this.ref["getByIndex"](index);
        };
        ChangeTree.prototype.delete = function(fieldName) {
            var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
            if (index === undefined) {
                console.warn("@colyseus/schema ".concat(this.ref.constructor.name, ": trying to delete non-existing index: ").concat(fieldName, " (").concat(index, ")"));
                return;
            }
            var previousValue = this.getValue(index);
            // console.log("$changes.delete =>", { fieldName, index, previousValue });
            this.changes.set(index, {
                op: exports1.OPERATION.DELETE,
                index: index
            });
            this.allChanges.delete(index);
            // delete cache
            delete this.caches[index];
            // remove `root` reference
            if (previousValue && previousValue["$changes"]) previousValue["$changes"].parent = undefined;
            this.changed = true;
            this.touchParents();
        };
        ChangeTree.prototype.discard = function(changed, discardAll) {
            var _this = this;
            if (changed === void 0) changed = false;
            if (discardAll === void 0) discardAll = false;
            //
            // Map, Array, etc:
            // Remove cached key to ensure ADD operations is unsed instead of
            // REPLACE in case same key is used on next patches.
            //
            // TODO: refactor this. this is not relevant for Collection and Set.
            //
            if (!(this.ref instanceof Schema)) this.changes.forEach(function(change) {
                if (change.op === exports1.OPERATION.DELETE) {
                    var index = _this.ref["getIndex"](change.index);
                    delete _this.indexes[index];
                }
            });
            this.changes.clear();
            this.changed = changed;
            if (discardAll) this.allChanges.clear();
            // re-set `currentCustomOperation`
            this.currentCustomOperation = 0;
        };
        /**
         * Recursively discard all changes from this, and child structures.
         */ ChangeTree.prototype.discardAll = function() {
            var _this = this;
            this.changes.forEach(function(change) {
                var value = _this.getValue(change.index);
                if (value && value["$changes"]) value["$changes"].discardAll();
            });
            this.discard();
        };
        // cache(field: number, beginIndex: number, endIndex: number) {
        ChangeTree.prototype.cache = function(field, cachedBytes) {
            this.caches[field] = cachedBytes;
        };
        ChangeTree.prototype.clone = function() {
            return new ChangeTree(this.ref, this.parent, this.root);
        };
        ChangeTree.prototype.ensureRefId = function() {
            // skip if refId is already set.
            if (this.refId !== undefined) return;
            this.refId = this.root.getNextUniqueId();
        };
        ChangeTree.prototype.assertValidIndex = function(index, fieldName) {
            if (index === undefined) throw new Error('ChangeTree: missing index for field "'.concat(fieldName, '"'));
        };
        return ChangeTree;
    }();
    //
    // Notes:
    // -----
    //
    // - The tsconfig.json of @colyseus/schema uses ES2018.
    // - ES2019 introduces `flatMap` / `flat`, which is not currently relevant, and caused other issues.
    //
    var DEFAULT_SORT = function(a, b) {
        var A = a.toString();
        var B = b.toString();
        if (A < B) return -1;
        else if (A > B) return 1;
        else return 0;
    };
    function getArrayProxy(value) {
        value["$proxy"] = true;
        //
        // compatibility with @colyseus/schema 0.5.x
        // - allow `map["key"]`
        // - allow `map["key"] = "xxx"`
        // - allow `delete map["key"]`
        //
        value = new Proxy(value, {
            get: function(obj, prop) {
                if (typeof prop !== "symbol" && !isNaN(prop) // https://stackoverflow.com/a/175787/892698
                ) return obj.at(prop);
                else return obj[prop];
            },
            set: function(obj, prop, setValue) {
                if (typeof prop !== "symbol" && !isNaN(prop)) {
                    var indexes = Array.from(obj["$items"].keys());
                    var key = parseInt(indexes[prop] || prop);
                    if (setValue === undefined || setValue === null) obj.deleteAt(key);
                    else obj.setAt(key, setValue);
                } else obj[prop] = setValue;
                return true;
            },
            deleteProperty: function(obj, prop) {
                if (typeof prop === "number") obj.deleteAt(prop);
                else delete obj[prop];
                return true;
            }
        });
        return value;
    }
    var ArraySchema = /** @class */ function() {
        function ArraySchema() {
            var items = [];
            for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
            this.$changes = new ChangeTree(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            this.push.apply(this, items);
        }
        ArraySchema.is = function(type) {
            return(// type format: ["string"]
            Array.isArray(type) || type["array"] !== undefined);
        };
        Object.defineProperty(ArraySchema.prototype, "length", {
            get: function() {
                return this.$items.size;
            },
            set: function(value) {
                if (value === 0) this.clear();
                else this.splice(value, this.length - value);
            },
            enumerable: false,
            configurable: true
        });
        ArraySchema.prototype.push = function() {
            var _this = this;
            var values = [];
            for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
            var lastIndex;
            values.forEach(function(value) {
                // set "index" for reference.
                lastIndex = _this.$refId++;
                _this.setAt(lastIndex, value);
            });
            return lastIndex;
        };
        /**
         * Removes the last element from an array and returns it.
         */ ArraySchema.prototype.pop = function() {
            var key = Array.from(this.$indexes.values()).pop();
            if (key === undefined) return undefined;
            this.$changes.delete(key);
            this.$indexes.delete(key);
            var value = this.$items.get(key);
            this.$items.delete(key);
            return value;
        };
        ArraySchema.prototype.at = function(index) {
            //
            // FIXME: this should be O(1)
            //
            var key = Array.from(this.$items.keys())[index];
            return this.$items.get(key);
        };
        ArraySchema.prototype.setAt = function(index, value) {
            var _a, _b;
            if (value["$changes"] !== undefined) value["$changes"].setParent(this, this.$changes.root, index);
            var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports1.OPERATION.ADD;
            this.$changes.indexes[index] = index;
            this.$indexes.set(index, index);
            this.$items.set(index, value);
            this.$changes.change(index, operation);
        };
        ArraySchema.prototype.deleteAt = function(index) {
            var key = Array.from(this.$items.keys())[index];
            if (key === undefined) return false;
            return this.$deleteAt(key);
        };
        ArraySchema.prototype.$deleteAt = function(index) {
            // delete at internal index
            this.$changes.delete(index);
            this.$indexes.delete(index);
            return this.$items.delete(index);
        };
        ArraySchema.prototype.clear = function(isDecoding) {
            var _this = this;
            // discard previous operations.
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            // clear previous indexes
            this.$indexes.clear();
            // flag child items for garbage collection.
            if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                _this.$changes.root.removeRef(item["$changes"].refId);
            });
            // clear items
            this.$items.clear();
            this.$changes.operation({
                index: 0,
                op: exports1.OPERATION.CLEAR
            });
            // touch all structures until reach root
            this.$changes.touchParents();
        };
        /**
         * Combines two or more arrays.
         * @param items Additional items to add to the end of array1.
         */ ArraySchema.prototype.concat = function() {
            var _a;
            var items = [];
            for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
            return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                void 0
            ], (_a = Array.from(this.$items.values())).concat.apply(_a, items), false)))();
        };
        /**
         * Adds all the elements of an array separated by the specified separator string.
         * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
         */ ArraySchema.prototype.join = function(separator) {
            return Array.from(this.$items.values()).join(separator);
        };
        /**
         * Reverses the elements in an Array.
         */ ArraySchema.prototype.reverse = function() {
            var _this = this;
            var indexes = Array.from(this.$items.keys());
            var reversedItems = Array.from(this.$items.values()).reverse();
            reversedItems.forEach(function(item, i) {
                _this.setAt(indexes[i], item);
            });
            return this;
        };
        /**
         * Removes the first element from an array and returns it.
         */ ArraySchema.prototype.shift = function() {
            var indexes = Array.from(this.$items.keys());
            var shiftAt = indexes.shift();
            if (shiftAt === undefined) return undefined;
            var value = this.$items.get(shiftAt);
            this.$deleteAt(shiftAt);
            return value;
        };
        /**
         * Returns a section of an array.
         * @param start The beginning of the specified portion of the array.
         * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
         */ ArraySchema.prototype.slice = function(start, end) {
            return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                void 0
            ], Array.from(this.$items.values()).slice(start, end), false)))();
        };
        /**
         * Sorts an array.
         * @param compareFn Function used to determine the order of the elements. It is expected to return
         * a negative value if first argument is less than second argument, zero if they're equal and a positive
         * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
         * ```ts
         * [11,2,22,1].sort((a, b) => a - b)
         * ```
         */ ArraySchema.prototype.sort = function(compareFn) {
            var _this = this;
            if (compareFn === void 0) compareFn = DEFAULT_SORT;
            var indexes = Array.from(this.$items.keys());
            var sortedItems = Array.from(this.$items.values()).sort(compareFn);
            sortedItems.forEach(function(item, i) {
                _this.setAt(indexes[i], item);
            });
            return this;
        };
        /**
         * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
         * @param start The zero-based location in the array from which to start removing elements.
         * @param deleteCount The number of elements to remove.
         * @param items Elements to insert into the array in place of the deleted elements.
         */ ArraySchema.prototype.splice = function(start, deleteCount) {
            if (deleteCount === void 0) deleteCount = this.length - start;
            var indexes = Array.from(this.$items.keys());
            var removedItems = [];
            for(var i = start; i < start + deleteCount; i++){
                removedItems.push(this.$items.get(indexes[i]));
                this.$deleteAt(indexes[i]);
            }
            return removedItems;
        };
        /**
         * Inserts new elements at the start of an array.
         * @param items  Elements to insert at the start of the Array.
         */ ArraySchema.prototype.unshift = function() {
            var _this = this;
            var items = [];
            for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
            var length = this.length;
            var addedLength = items.length;
            // const indexes = Array.from(this.$items.keys());
            var previousValues = Array.from(this.$items.values());
            items.forEach(function(item, i) {
                _this.setAt(i, item);
            });
            previousValues.forEach(function(previousValue, i) {
                _this.setAt(addedLength + i, previousValue);
            });
            return length + addedLength;
        };
        /**
         * Returns the index of the first occurrence of a value in an array.
         * @param searchElement The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
         */ ArraySchema.prototype.indexOf = function(searchElement, fromIndex) {
            return Array.from(this.$items.values()).indexOf(searchElement, fromIndex);
        };
        /**
         * Returns the index of the last occurrence of a specified value in an array.
         * @param searchElement The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
         */ ArraySchema.prototype.lastIndexOf = function(searchElement, fromIndex) {
            if (fromIndex === void 0) fromIndex = this.length - 1;
            return Array.from(this.$items.values()).lastIndexOf(searchElement, fromIndex);
        };
        /**
         * Determines whether all the members of an array satisfy the specified test.
         * @param callbackfn A function that accepts up to three arguments. The every method calls
         * the callbackfn function for each element in the array until the callbackfn returns a value
         * which is coercible to the Boolean value false, or until the end of the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function.
         * If thisArg is omitted, undefined is used as the this value.
         */ ArraySchema.prototype.every = function(callbackfn, thisArg) {
            return Array.from(this.$items.values()).every(callbackfn, thisArg);
        };
        /**
         * Determines whether the specified callback function returns true for any element of an array.
         * @param callbackfn A function that accepts up to three arguments. The some method calls
         * the callbackfn function for each element in the array until the callbackfn returns a value
         * which is coercible to the Boolean value true, or until the end of the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function.
         * If thisArg is omitted, undefined is used as the this value.
         */ ArraySchema.prototype.some = function(callbackfn, thisArg) {
            return Array.from(this.$items.values()).some(callbackfn, thisArg);
        };
        /**
         * Performs the specified action for each element in an array.
         * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
         * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */ ArraySchema.prototype.forEach = function(callbackfn, thisArg) {
            Array.from(this.$items.values()).forEach(callbackfn, thisArg);
        };
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results.
         * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */ ArraySchema.prototype.map = function(callbackfn, thisArg) {
            return Array.from(this.$items.values()).map(callbackfn, thisArg);
        };
        ArraySchema.prototype.filter = function(callbackfn, thisArg) {
            return Array.from(this.$items.values()).filter(callbackfn, thisArg);
        };
        /**
         * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */ ArraySchema.prototype.reduce = function(callbackfn, initialValue) {
            return Array.prototype.reduce.apply(Array.from(this.$items.values()), arguments);
        };
        /**
         * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
         * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */ ArraySchema.prototype.reduceRight = function(callbackfn, initialValue) {
            return Array.prototype.reduceRight.apply(Array.from(this.$items.values()), arguments);
        };
        /**
         * Returns the value of the first element in the array where predicate is true, and undefined
         * otherwise.
         * @param predicate find calls predicate once for each element of the array, in ascending
         * order, until it finds one where predicate returns true. If such an element is found, find
         * immediately returns that element value. Otherwise, find returns undefined.
         * @param thisArg If provided, it will be used as the this value for each invocation of
         * predicate. If it is not provided, undefined is used instead.
         */ ArraySchema.prototype.find = function(predicate, thisArg) {
            return Array.from(this.$items.values()).find(predicate, thisArg);
        };
        /**
         * Returns the index of the first element in the array where predicate is true, and -1
         * otherwise.
         * @param predicate find calls predicate once for each element of the array, in ascending
         * order, until it finds one where predicate returns true. If such an element is found,
         * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
         * @param thisArg If provided, it will be used as the this value for each invocation of
         * predicate. If it is not provided, undefined is used instead.
         */ ArraySchema.prototype.findIndex = function(predicate, thisArg) {
            return Array.from(this.$items.values()).findIndex(predicate, thisArg);
        };
        /**
         * Returns the this object after filling the section identified by start and end with value
         * @param value value to fill array section with
         * @param start index to start filling the array at. If start is negative, it is treated as
         * length+start where length is the length of the array.
         * @param end index to stop filling the array at. If end is negative, it is treated as
         * length+end.
         */ ArraySchema.prototype.fill = function(value, start, end) {
            //
            // TODO
            //
            throw new Error("ArraySchema#fill() not implemented");
        };
        /**
         * Returns the this object after copying a section of the array identified by start and end
         * to the same array starting at position target
         * @param target If target is negative, it is treated as length+target where length is the
         * length of the array.
         * @param start If start is negative, it is treated as length+start. If end is negative, it
         * is treated as length+end.
         * @param end If not specified, length of the this object is used as its default value.
         */ ArraySchema.prototype.copyWithin = function(target, start, end) {
            //
            // TODO
            //
            throw new Error("ArraySchema#copyWithin() not implemented");
        };
        /**
         * Returns a string representation of an array.
         */ ArraySchema.prototype.toString = function() {
            return this.$items.toString();
        };
        /**
         * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
         */ ArraySchema.prototype.toLocaleString = function() {
            return this.$items.toLocaleString();
        };
        /** Iterator */ ArraySchema.prototype[Symbol.iterator] = function() {
            return Array.from(this.$items.values())[Symbol.iterator]();
        };
        ArraySchema.prototype[Symbol.unscopables] = function() {
            return this.$items[Symbol.unscopables]();
        };
        /**
         * Returns an iterable of key, value pairs for every entry in the array
         */ ArraySchema.prototype.entries = function() {
            return this.$items.entries();
        };
        /**
         * Returns an iterable of keys in the array
         */ ArraySchema.prototype.keys = function() {
            return this.$items.keys();
        };
        /**
         * Returns an iterable of values in the array
         */ ArraySchema.prototype.values = function() {
            return this.$items.values();
        };
        /**
         * Determines whether an array includes a certain element, returning true or false as appropriate.
         * @param searchElement The element to search for.
         * @param fromIndex The position in this array at which to begin searching for searchElement.
         */ ArraySchema.prototype.includes = function(searchElement, fromIndex) {
            return Array.from(this.$items.values()).includes(searchElement, fromIndex);
        };
        /**
         * Calls a defined callback function on each element of an array. Then, flattens the result into
         * a new array.
         * This is identical to a map followed by flat with depth 1.
         *
         * @param callback A function that accepts up to three arguments. The flatMap method calls the
         * callback function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callback function. If
         * thisArg is omitted, undefined is used as the this value.
         */ // @ts-ignore
        ArraySchema.prototype.flatMap = function(callback, thisArg) {
            // @ts-ignore
            throw new Error("ArraySchema#flatMap() is not supported.");
        };
        /**
         * Returns a new array with all sub-array elements concatenated into it recursively up to the
         * specified depth.
         *
         * @param depth The maximum recursion depth
         */ // @ts-ignore
        ArraySchema.prototype.flat = function(depth) {
            // @ts-ignore
            throw new Error("ArraySchema#flat() is not supported.");
        };
        // get size () {
        //     return this.$items.size;
        // }
        ArraySchema.prototype.setIndex = function(index, key) {
            this.$indexes.set(index, key);
        };
        ArraySchema.prototype.getIndex = function(index) {
            return this.$indexes.get(index);
        };
        ArraySchema.prototype.getByIndex = function(index) {
            return this.$items.get(this.$indexes.get(index));
        };
        ArraySchema.prototype.deleteByIndex = function(index) {
            var key = this.$indexes.get(index);
            this.$items.delete(key);
            this.$indexes.delete(index);
        };
        ArraySchema.prototype.toArray = function() {
            return Array.from(this.$items.values());
        };
        ArraySchema.prototype.toJSON = function() {
            return this.toArray().map(function(value) {
                return typeof value["toJSON"] === "function" ? value["toJSON"]() : value;
            });
        };
        //
        // Decoding utilities
        //
        ArraySchema.prototype.clone = function(isDecoding) {
            var cloned;
            if (isDecoding) cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                void 0
            ], Array.from(this.$items.values()), false)))();
            else cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                void 0
            ], this.map(function(item) {
                return item["$changes"] ? item.clone() : item;
            }), false)))();
            return cloned;
        };
        ArraySchema.prototype.triggerAll = function() {
            Schema.prototype.triggerAll.apply(this);
        };
        return ArraySchema;
    }();
    function getMapProxy(value) {
        value["$proxy"] = true;
        value = new Proxy(value, {
            get: function(obj, prop) {
                if (typeof prop !== "symbol" && typeof obj[prop] === "undefined") return obj.get(prop);
                else return obj[prop];
            },
            set: function(obj, prop, setValue) {
                if (typeof prop !== "symbol" && prop.indexOf("$") === -1 && prop !== "onAdd" && prop !== "onRemove" && prop !== "onChange") obj.set(prop, setValue);
                else obj[prop] = setValue;
                return true;
            },
            deleteProperty: function(obj, prop) {
                obj.delete(prop);
                return true;
            }
        });
        return value;
    }
    var MapSchema = /** @class */ function() {
        function MapSchema(initialValues) {
            var _this = this;
            this.$changes = new ChangeTree(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (initialValues) {
                if (initialValues instanceof Map) initialValues.forEach(function(v, k) {
                    return _this.set(k, v);
                });
                else for(var k in initialValues)this.set(k, initialValues[k]);
            }
        }
        MapSchema.is = function(type) {
            return type["map"] !== undefined;
        };
        /** Iterator */ MapSchema.prototype[Symbol.iterator] = function() {
            return this.$items[Symbol.iterator]();
        };
        Object.defineProperty(MapSchema.prototype, Symbol.toStringTag, {
            get: function() {
                return this.$items[Symbol.toStringTag];
            },
            enumerable: false,
            configurable: true
        });
        MapSchema.prototype.set = function(key, value) {
            if (value === undefined || value === null) throw new Error("MapSchema#set('".concat(key, "', ").concat(value, "): trying to set ").concat(value, " value on '").concat(key, "'."));
            // get "index" for this value.
            var hasIndex = typeof this.$changes.indexes[key] !== "undefined";
            var index = hasIndex ? this.$changes.indexes[key] : this.$refId++;
            var operation = hasIndex ? exports1.OPERATION.REPLACE : exports1.OPERATION.ADD;
            var isRef = value["$changes"] !== undefined;
            if (isRef) value["$changes"].setParent(this, this.$changes.root, index);
            //
            // (encoding)
            // set a unique id to relate directly with this key/value.
            //
            if (!hasIndex) {
                this.$changes.indexes[key] = index;
                this.$indexes.set(index, key);
            } else if (isRef && this.$items.get(key) !== value) operation = exports1.OPERATION.ADD;
            this.$items.set(key, value);
            this.$changes.change(key, operation);
            return this;
        };
        MapSchema.prototype.get = function(key) {
            return this.$items.get(key);
        };
        MapSchema.prototype.delete = function(key) {
            //
            // TODO: add a "purge" method after .encode() runs, to cleanup removed `$indexes`
            //
            // We don't remove $indexes to allow setting the same key in the same patch
            // (See "should allow to remove and set an item in the same place" test)
            //
            // // const index = this.$changes.indexes[key];
            // // this.$indexes.delete(index);
            this.$changes.delete(key);
            return this.$items.delete(key);
        };
        MapSchema.prototype.clear = function(isDecoding) {
            var _this = this;
            // discard previous operations.
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            // clear previous indexes
            this.$indexes.clear();
            // flag child items for garbage collection.
            if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                _this.$changes.root.removeRef(item["$changes"].refId);
            });
            // clear items
            this.$items.clear();
            this.$changes.operation({
                index: 0,
                op: exports1.OPERATION.CLEAR
            });
            // touch all structures until reach root
            this.$changes.touchParents();
        };
        MapSchema.prototype.has = function(key) {
            return this.$items.has(key);
        };
        MapSchema.prototype.forEach = function(callbackfn) {
            this.$items.forEach(callbackfn);
        };
        MapSchema.prototype.entries = function() {
            return this.$items.entries();
        };
        MapSchema.prototype.keys = function() {
            return this.$items.keys();
        };
        MapSchema.prototype.values = function() {
            return this.$items.values();
        };
        Object.defineProperty(MapSchema.prototype, "size", {
            get: function() {
                return this.$items.size;
            },
            enumerable: false,
            configurable: true
        });
        MapSchema.prototype.setIndex = function(index, key) {
            this.$indexes.set(index, key);
        };
        MapSchema.prototype.getIndex = function(index) {
            return this.$indexes.get(index);
        };
        MapSchema.prototype.getByIndex = function(index) {
            return this.$items.get(this.$indexes.get(index));
        };
        MapSchema.prototype.deleteByIndex = function(index) {
            var key = this.$indexes.get(index);
            this.$items.delete(key);
            this.$indexes.delete(index);
        };
        MapSchema.prototype.toJSON = function() {
            var map = {};
            this.forEach(function(value, key) {
                map[key] = typeof value["toJSON"] === "function" ? value["toJSON"]() : value;
            });
            return map;
        };
        //
        // Decoding utilities
        //
        MapSchema.prototype.clone = function(isDecoding) {
            var cloned;
            if (isDecoding) // client-side
            cloned = Object.assign(new MapSchema(), this);
            else {
                // server-side
                cloned = new MapSchema();
                this.forEach(function(value, key) {
                    if (value["$changes"]) cloned.set(key, value["clone"]());
                    else cloned.set(key, value);
                });
            }
            return cloned;
        };
        MapSchema.prototype.triggerAll = function() {
            Schema.prototype.triggerAll.apply(this);
        };
        return MapSchema;
    }();
    var registeredTypes = {};
    function registerType(identifier, definition) {
        registeredTypes[identifier] = definition;
    }
    function getType(identifier) {
        return registeredTypes[identifier];
    }
    var SchemaDefinition = /** @class */ function() {
        function SchemaDefinition() {
            //
            // TODO: use a "field" structure combining all these properties per-field.
            //
            this.indexes = {};
            this.fieldsByIndex = {};
            this.deprecated = {};
            this.descriptors = {};
        }
        SchemaDefinition.create = function(parent) {
            var definition = new SchemaDefinition();
            // support inheritance
            definition.schema = Object.assign({}, parent && parent.schema || {});
            definition.indexes = Object.assign({}, parent && parent.indexes || {});
            definition.fieldsByIndex = Object.assign({}, parent && parent.fieldsByIndex || {});
            definition.descriptors = Object.assign({}, parent && parent.descriptors || {});
            definition.deprecated = Object.assign({}, parent && parent.deprecated || {});
            return definition;
        };
        SchemaDefinition.prototype.addField = function(field, type) {
            var index = this.getNextFieldIndex();
            this.fieldsByIndex[index] = field;
            this.indexes[field] = index;
            this.schema[field] = Array.isArray(type) ? {
                array: type[0]
            } : type;
        };
        SchemaDefinition.prototype.addFilter = function(field, cb) {
            if (!this.filters) {
                this.filters = {};
                this.indexesWithFilters = [];
            }
            this.filters[this.indexes[field]] = cb;
            this.indexesWithFilters.push(this.indexes[field]);
            return true;
        };
        SchemaDefinition.prototype.addChildrenFilter = function(field, cb) {
            var index = this.indexes[field];
            var type = this.schema[field];
            if (getType(Object.keys(type)[0])) {
                if (!this.childFilters) this.childFilters = {};
                this.childFilters[index] = cb;
                return true;
            } else console.warn("@filterChildren: field '".concat(field, "' can't have children. Ignoring filter."));
        };
        SchemaDefinition.prototype.getChildrenFilter = function(field) {
            return this.childFilters && this.childFilters[this.indexes[field]];
        };
        SchemaDefinition.prototype.getNextFieldIndex = function() {
            return Object.keys(this.schema || {}).length;
        };
        return SchemaDefinition;
    }();
    function hasFilter(klass) {
        return klass._context && klass._context.useFilters;
    }
    var Context = /** @class */ function() {
        function Context() {
            this.types = {};
            this.schemas = new Map();
            this.useFilters = false;
        }
        Context.prototype.has = function(schema) {
            return this.schemas.has(schema);
        };
        Context.prototype.get = function(typeid) {
            return this.types[typeid];
        };
        Context.prototype.add = function(schema, typeid) {
            if (typeid === void 0) typeid = this.schemas.size;
            // FIXME: move this to somewhere else?
            // support inheritance
            schema._definition = SchemaDefinition.create(schema._definition);
            schema._typeid = typeid;
            this.types[typeid] = schema;
            this.schemas.set(schema, typeid);
        };
        Context.create = function(context) {
            if (context === void 0) context = new Context;
            return function(definition) {
                return type(definition, context);
            };
        };
        return Context;
    }();
    var globalContext = new Context();
    /**
     * `@type()` decorator for proxies
     */ function type(type, context) {
        if (context === void 0) context = globalContext;
        return function(target, field) {
            if (!type) throw new Error("Type not found. Ensure your `@type` annotations are correct and that you don't have any circular dependencies.");
            var constructor = target.constructor;
            constructor._context = context;
            /*
             * static schema
             */ if (!context.has(constructor)) context.add(constructor);
            var definition = constructor._definition;
            definition.addField(field, type);
            /**
             * skip if descriptor already exists for this field (`@deprecated()`)
             */ if (definition.descriptors[field]) {
                if (definition.deprecated[field]) // do not create accessors for deprecated properties.
                return;
                else // trying to define same property multiple times across inheritance.
                // https://github.com/colyseus/colyseus-unity3d/issues/131#issuecomment-814308572
                try {
                    throw new Error("@colyseus/schema: Duplicate '".concat(field, "' definition on '").concat(constructor.name, "'.\nCheck @type() annotation"));
                } catch (e) {
                    var definitionAtLine = e.stack.split("\n")[4].trim();
                    throw new Error("".concat(e.message, " ").concat(definitionAtLine));
                }
            }
            var isArray = ArraySchema.is(type);
            var isMap = !isArray && MapSchema.is(type);
            // TODO: refactor me.
            // Allow abstract intermediary classes with no fields to be serialized
            // (See "should support an inheritance with a Schema type without fields" test)
            if (typeof type !== "string" && !Schema.is(type)) {
                var childType = Object.values(type)[0];
                if (typeof childType !== "string" && !context.has(childType)) context.add(childType);
            }
            var fieldCached = "_".concat(field);
            definition.descriptors[fieldCached] = {
                enumerable: false,
                configurable: false,
                writable: true
            };
            definition.descriptors[field] = {
                get: function() {
                    return this[fieldCached];
                },
                set: function(value) {
                    /**
                     * Create Proxy for array or map items
                     */ // skip if value is the same as cached.
                    if (value === this[fieldCached]) return;
                    if (value !== undefined && value !== null) {
                        // automaticallty transform Array into ArraySchema
                        if (isArray && !(value instanceof ArraySchema)) value = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                            void 0
                        ], value, false)))();
                        // automaticallty transform Map into MapSchema
                        if (isMap && !(value instanceof MapSchema)) value = new MapSchema(value);
                        // try to turn provided structure into a Proxy
                        if (value["$proxy"] === undefined) {
                            if (isMap) value = getMapProxy(value);
                            else if (isArray) value = getArrayProxy(value);
                        }
                        // flag the change for encoding.
                        this.$changes.change(field);
                        //
                        // call setParent() recursively for this and its child
                        // structures.
                        //
                        if (value["$changes"]) value["$changes"].setParent(this, this.$changes.root, this._definition.indexes[field]);
                    } else //
                    // Setting a field to `null` or `undefined` will delete it.
                    //
                    this.$changes.delete(field);
                    this[fieldCached] = value;
                },
                enumerable: true,
                configurable: true
            };
        };
    }
    /**
     * `@filter()` decorator for defining data filters per client
     */ function filter(cb) {
        return function(target, field) {
            var constructor = target.constructor;
            var definition = constructor._definition;
            if (definition.addFilter(field, cb)) constructor._context.useFilters = true;
        };
    }
    function filterChildren(cb) {
        return function(target, field) {
            var constructor = target.constructor;
            var definition = constructor._definition;
            if (definition.addChildrenFilter(field, cb)) constructor._context.useFilters = true;
        };
    }
    /**
     * `@deprecated()` flag a field as deprecated.
     * The previous `@type()` annotation should remain along with this one.
     */ function deprecated(throws, context) {
        if (throws === void 0) throws = true;
        return function(target, field) {
            var constructor = target.constructor;
            var definition = constructor._definition;
            definition.deprecated[field] = true;
            if (throws) definition.descriptors[field] = {
                get: function() {
                    throw new Error("".concat(field, " is deprecated."));
                },
                set: function(value) {},
                enumerable: false,
                configurable: true
            };
        };
    }
    function defineTypes(target, fields, context) {
        if (context === void 0) context = target._context || globalContext;
        for(var field in fields)type(fields[field], context)(target.prototype, field);
        return target;
    }
    /**
     * Copyright (c) 2018 Endel Dreyer
     * Copyright (c) 2014 Ion Drive Software Ltd.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE
     */ /**
     * msgpack implementation highly based on notepack.io
     * https://github.com/darrachequesne/notepack
     */ function utf8Length(str) {
        var c = 0, length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) length += 1;
            else if (c < 0x800) length += 2;
            else if (c < 0xd800 || c >= 0xe000) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length;
    }
    function utf8Write(view, offset, str) {
        var c = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) view[offset++] = c;
            else if (c < 0x800) {
                view[offset++] = 0xc0 | c >> 6;
                view[offset++] = 0x80 | c & 0x3f;
            } else if (c < 0xd800 || c >= 0xe000) {
                view[offset++] = 0xe0 | c >> 12;
                view[offset++] = 0x80 | c >> 6 & 0x3f;
                view[offset++] = 0x80 | c & 0x3f;
            } else {
                i++;
                c = 0x10000 + ((c & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                view[offset++] = 0xf0 | c >> 18;
                view[offset++] = 0x80 | c >> 12 & 0x3f;
                view[offset++] = 0x80 | c >> 6 & 0x3f;
                view[offset++] = 0x80 | c & 0x3f;
            }
        }
    }
    function int8$1(bytes, value) {
        bytes.push(value & 255);
    }
    function uint8$1(bytes, value) {
        bytes.push(value & 255);
    }
    function int16$1(bytes, value) {
        bytes.push(value & 255);
        bytes.push(value >> 8 & 255);
    }
    function uint16$1(bytes, value) {
        bytes.push(value & 255);
        bytes.push(value >> 8 & 255);
    }
    function int32$1(bytes, value) {
        bytes.push(value & 255);
        bytes.push(value >> 8 & 255);
        bytes.push(value >> 16 & 255);
        bytes.push(value >> 24 & 255);
    }
    function uint32$1(bytes, value) {
        var b4 = value >> 24;
        var b3 = value >> 16;
        var b2 = value >> 8;
        var b1 = value;
        bytes.push(b1 & 255);
        bytes.push(b2 & 255);
        bytes.push(b3 & 255);
        bytes.push(b4 & 255);
    }
    function int64$1(bytes, value) {
        var high = Math.floor(value / Math.pow(2, 32));
        var low = value >>> 0;
        uint32$1(bytes, low);
        uint32$1(bytes, high);
    }
    function uint64$1(bytes, value) {
        var high = value / Math.pow(2, 32) >> 0;
        var low = value >>> 0;
        uint32$1(bytes, low);
        uint32$1(bytes, high);
    }
    function float32$1(bytes, value) {
        writeFloat32(bytes, value);
    }
    function float64$1(bytes, value) {
        writeFloat64(bytes, value);
    }
    var _int32$1 = new Int32Array(2);
    var _float32$1 = new Float32Array(_int32$1.buffer);
    var _float64$1 = new Float64Array(_int32$1.buffer);
    function writeFloat32(bytes, value) {
        _float32$1[0] = value;
        int32$1(bytes, _int32$1[0]);
    }
    function writeFloat64(bytes, value) {
        _float64$1[0] = value;
        int32$1(bytes, _int32$1[0]);
        int32$1(bytes, _int32$1[1]);
    }
    function boolean$1(bytes, value) {
        return uint8$1(bytes, value ? 1 : 0);
    }
    function string$1(bytes, value) {
        // encode `null` strings as empty.
        if (!value) value = "";
        var length = utf8Length(value);
        var size = 0;
        // fixstr
        if (length < 0x20) {
            bytes.push(length | 0xa0);
            size = 1;
        } else if (length < 0x100) {
            bytes.push(0xd9);
            uint8$1(bytes, length);
            size = 2;
        } else if (length < 0x10000) {
            bytes.push(0xda);
            uint16$1(bytes, length);
            size = 3;
        } else if (length < 0x100000000) {
            bytes.push(0xdb);
            uint32$1(bytes, length);
            size = 5;
        } else throw new Error("String too long");
        utf8Write(bytes, bytes.length, value);
        return size + length;
    }
    function number$1(bytes, value) {
        if (isNaN(value)) return number$1(bytes, 0);
        else if (!isFinite(value)) return number$1(bytes, value > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
        else if (value !== (value | 0)) {
            bytes.push(0xcb);
            writeFloat64(bytes, value);
            return 9;
        // TODO: encode float 32?
        // is it possible to differentiate between float32 / float64 here?
        // // float 32
        // bytes.push(0xca);
        // writeFloat32(bytes, value);
        // return 5;
        }
        if (value >= 0) {
            // positive fixnum
            if (value < 0x80) {
                uint8$1(bytes, value);
                return 1;
            }
            // uint 8
            if (value < 0x100) {
                bytes.push(0xcc);
                uint8$1(bytes, value);
                return 2;
            }
            // uint 16
            if (value < 0x10000) {
                bytes.push(0xcd);
                uint16$1(bytes, value);
                return 3;
            }
            // uint 32
            if (value < 0x100000000) {
                bytes.push(0xce);
                uint32$1(bytes, value);
                return 5;
            }
            // uint 64
            bytes.push(0xcf);
            uint64$1(bytes, value);
            return 9;
        } else {
            // negative fixnum
            if (value >= -32) {
                bytes.push(0xe0 | value + 0x20);
                return 1;
            }
            // int 8
            if (value >= -128) {
                bytes.push(0xd0);
                int8$1(bytes, value);
                return 2;
            }
            // int 16
            if (value >= -32768) {
                bytes.push(0xd1);
                int16$1(bytes, value);
                return 3;
            }
            // int 32
            if (value >= -2147483648) {
                bytes.push(0xd2);
                int32$1(bytes, value);
                return 5;
            }
            // int 64
            bytes.push(0xd3);
            int64$1(bytes, value);
            return 9;
        }
    }
    var encode = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        utf8Write: utf8Write,
        int8: int8$1,
        uint8: uint8$1,
        int16: int16$1,
        uint16: uint16$1,
        int32: int32$1,
        uint32: uint32$1,
        int64: int64$1,
        uint64: uint64$1,
        float32: float32$1,
        float64: float64$1,
        writeFloat32: writeFloat32,
        writeFloat64: writeFloat64,
        boolean: boolean$1,
        string: string$1,
        number: number$1
    });
    /**
     * Copyright (c) 2018 Endel Dreyer
     * Copyright (c) 2014 Ion Drive Software Ltd.
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE
     */ function utf8Read(bytes, offset, length) {
        var string = "", chr = 0;
        for(var i = offset, end = offset + length; i < end; i++){
            var byte = bytes[i];
            if ((byte & 0x80) === 0x00) {
                string += String.fromCharCode(byte);
                continue;
            }
            if ((byte & 0xe0) === 0xc0) {
                string += String.fromCharCode((byte & 0x1f) << 6 | bytes[++i] & 0x3f);
                continue;
            }
            if ((byte & 0xf0) === 0xe0) {
                string += String.fromCharCode((byte & 0x0f) << 12 | (bytes[++i] & 0x3f) << 6 | (bytes[++i] & 0x3f) << 0);
                continue;
            }
            if ((byte & 0xf8) === 0xf0) {
                chr = (byte & 0x07) << 18 | (bytes[++i] & 0x3f) << 12 | (bytes[++i] & 0x3f) << 6 | (bytes[++i] & 0x3f) << 0;
                if (chr >= 0x010000) {
                    chr -= 0x010000;
                    string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                } else string += String.fromCharCode(chr);
                continue;
            }
            console.error("Invalid byte " + byte.toString(16));
        // (do not throw error to avoid server/client from crashing due to hack attemps)
        // throw new Error('Invalid byte ' + byte.toString(16));
        }
        return string;
    }
    function int8(bytes, it) {
        return uint8(bytes, it) << 24 >> 24;
    }
    function uint8(bytes, it) {
        return bytes[it.offset++];
    }
    function int16(bytes, it) {
        return uint16(bytes, it) << 16 >> 16;
    }
    function uint16(bytes, it) {
        return bytes[it.offset++] | bytes[it.offset++] << 8;
    }
    function int32(bytes, it) {
        return bytes[it.offset++] | bytes[it.offset++] << 8 | bytes[it.offset++] << 16 | bytes[it.offset++] << 24;
    }
    function uint32(bytes, it) {
        return int32(bytes, it) >>> 0;
    }
    function float32(bytes, it) {
        return readFloat32(bytes, it);
    }
    function float64(bytes, it) {
        return readFloat64(bytes, it);
    }
    function int64(bytes, it) {
        var low = uint32(bytes, it);
        var high = int32(bytes, it) * Math.pow(2, 32);
        return high + low;
    }
    function uint64(bytes, it) {
        var low = uint32(bytes, it);
        var high = uint32(bytes, it) * Math.pow(2, 32);
        return high + low;
    }
    var _int32 = new Int32Array(2);
    var _float32 = new Float32Array(_int32.buffer);
    var _float64 = new Float64Array(_int32.buffer);
    function readFloat32(bytes, it) {
        _int32[0] = int32(bytes, it);
        return _float32[0];
    }
    function readFloat64(bytes, it) {
        _int32[0] = int32(bytes, it);
        _int32[1] = int32(bytes, it);
        return _float64[0];
    }
    function boolean(bytes, it) {
        return uint8(bytes, it) > 0;
    }
    function string(bytes, it) {
        var prefix = bytes[it.offset++];
        var length;
        if (prefix < 0xc0) // fixstr
        length = prefix & 0x1f;
        else if (prefix === 0xd9) length = uint8(bytes, it);
        else if (prefix === 0xda) length = uint16(bytes, it);
        else if (prefix === 0xdb) length = uint32(bytes, it);
        var value = utf8Read(bytes, it.offset, length);
        it.offset += length;
        return value;
    }
    function stringCheck(bytes, it) {
        var prefix = bytes[it.offset];
        return(// fixstr
        prefix < 0xc0 && prefix > 0xa0 || // str 8
        prefix === 0xd9 || // str 16
        prefix === 0xda || // str 32
        prefix === 0xdb);
    }
    function number(bytes, it) {
        var prefix = bytes[it.offset++];
        if (prefix < 0x80) // positive fixint
        return prefix;
        else if (prefix === 0xca) // float 32
        return readFloat32(bytes, it);
        else if (prefix === 0xcb) // float 64
        return readFloat64(bytes, it);
        else if (prefix === 0xcc) // uint 8
        return uint8(bytes, it);
        else if (prefix === 0xcd) // uint 16
        return uint16(bytes, it);
        else if (prefix === 0xce) // uint 32
        return uint32(bytes, it);
        else if (prefix === 0xcf) // uint 64
        return uint64(bytes, it);
        else if (prefix === 0xd0) // int 8
        return int8(bytes, it);
        else if (prefix === 0xd1) // int 16
        return int16(bytes, it);
        else if (prefix === 0xd2) // int 32
        return int32(bytes, it);
        else if (prefix === 0xd3) // int 64
        return int64(bytes, it);
        else if (prefix > 0xdf) // negative fixint
        return (0xff - prefix + 1) * -1;
    }
    function numberCheck(bytes, it) {
        var prefix = bytes[it.offset];
        // positive fixint - 0x00 - 0x7f
        // float 32        - 0xca
        // float 64        - 0xcb
        // uint 8          - 0xcc
        // uint 16         - 0xcd
        // uint 32         - 0xce
        // uint 64         - 0xcf
        // int 8           - 0xd0
        // int 16          - 0xd1
        // int 32          - 0xd2
        // int 64          - 0xd3
        return prefix < 0x80 || prefix >= 0xca && prefix <= 0xd3;
    }
    function arrayCheck(bytes, it) {
        return bytes[it.offset] < 0xa0;
    // const prefix = bytes[it.offset] ;
    // if (prefix < 0xa0) {
    //   return prefix;
    // // array
    // } else if (prefix === 0xdc) {
    //   it.offset += 2;
    // } else if (0xdd) {
    //   it.offset += 4;
    // }
    // return prefix;
    }
    function switchStructureCheck(bytes, it) {
        return(// previous byte should be `SWITCH_TO_STRUCTURE`
        bytes[it.offset - 1] === SWITCH_TO_STRUCTURE && (bytes[it.offset] < 0x80 || bytes[it.offset] >= 0xca && bytes[it.offset] <= 0xd3));
    }
    var decode = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        int8: int8,
        uint8: uint8,
        int16: int16,
        uint16: uint16,
        int32: int32,
        uint32: uint32,
        float32: float32,
        float64: float64,
        int64: int64,
        uint64: uint64,
        readFloat32: readFloat32,
        readFloat64: readFloat64,
        boolean: boolean,
        string: string,
        stringCheck: stringCheck,
        number: number,
        numberCheck: numberCheck,
        arrayCheck: arrayCheck,
        switchStructureCheck: switchStructureCheck
    });
    var CollectionSchema = /** @class */ function() {
        function CollectionSchema(initialValues) {
            var _this = this;
            this.$changes = new ChangeTree(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (initialValues) initialValues.forEach(function(v) {
                return _this.add(v);
            });
        }
        CollectionSchema.is = function(type) {
            return type["collection"] !== undefined;
        };
        CollectionSchema.prototype.add = function(value) {
            // set "index" for reference.
            var index = this.$refId++;
            var isRef = value["$changes"] !== undefined;
            if (isRef) value["$changes"].setParent(this, this.$changes.root, index);
            this.$changes.indexes[index] = index;
            this.$indexes.set(index, index);
            this.$items.set(index, value);
            this.$changes.change(index);
            return index;
        };
        CollectionSchema.prototype.at = function(index) {
            var key = Array.from(this.$items.keys())[index];
            return this.$items.get(key);
        };
        CollectionSchema.prototype.entries = function() {
            return this.$items.entries();
        };
        CollectionSchema.prototype.delete = function(item) {
            var entries = this.$items.entries();
            var index;
            var entry;
            while(entry = entries.next()){
                if (entry.done) break;
                if (item === entry.value[1]) {
                    index = entry.value[0];
                    break;
                }
            }
            if (index === undefined) return false;
            this.$changes.delete(index);
            this.$indexes.delete(index);
            return this.$items.delete(index);
        };
        CollectionSchema.prototype.clear = function(isDecoding) {
            var _this = this;
            // discard previous operations.
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            // clear previous indexes
            this.$indexes.clear();
            // flag child items for garbage collection.
            if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                _this.$changes.root.removeRef(item["$changes"].refId);
            });
            // clear items
            this.$items.clear();
            this.$changes.operation({
                index: 0,
                op: exports1.OPERATION.CLEAR
            });
            // touch all structures until reach root
            this.$changes.touchParents();
        };
        CollectionSchema.prototype.has = function(value) {
            return Array.from(this.$items.values()).some(function(v) {
                return v === value;
            });
        };
        CollectionSchema.prototype.forEach = function(callbackfn) {
            var _this = this;
            this.$items.forEach(function(value, key, _) {
                return callbackfn(value, key, _this);
            });
        };
        CollectionSchema.prototype.values = function() {
            return this.$items.values();
        };
        Object.defineProperty(CollectionSchema.prototype, "size", {
            get: function() {
                return this.$items.size;
            },
            enumerable: false,
            configurable: true
        });
        CollectionSchema.prototype.setIndex = function(index, key) {
            this.$indexes.set(index, key);
        };
        CollectionSchema.prototype.getIndex = function(index) {
            return this.$indexes.get(index);
        };
        CollectionSchema.prototype.getByIndex = function(index) {
            return this.$items.get(this.$indexes.get(index));
        };
        CollectionSchema.prototype.deleteByIndex = function(index) {
            var key = this.$indexes.get(index);
            this.$items.delete(key);
            this.$indexes.delete(index);
        };
        CollectionSchema.prototype.toArray = function() {
            return Array.from(this.$items.values());
        };
        CollectionSchema.prototype.toJSON = function() {
            var values = [];
            this.forEach(function(value, key) {
                values.push(typeof value["toJSON"] === "function" ? value["toJSON"]() : value);
            });
            return values;
        };
        //
        // Decoding utilities
        //
        CollectionSchema.prototype.clone = function(isDecoding) {
            var cloned;
            if (isDecoding) // client-side
            cloned = Object.assign(new CollectionSchema(), this);
            else {
                // server-side
                cloned = new CollectionSchema();
                this.forEach(function(value) {
                    if (value["$changes"]) cloned.add(value["clone"]());
                    else cloned.add(value);
                });
            }
            return cloned;
        };
        CollectionSchema.prototype.triggerAll = function() {
            Schema.prototype.triggerAll.apply(this);
        };
        return CollectionSchema;
    }();
    var SetSchema = /** @class */ function() {
        function SetSchema(initialValues) {
            var _this = this;
            this.$changes = new ChangeTree(this);
            this.$items = new Map();
            this.$indexes = new Map();
            this.$refId = 0;
            if (initialValues) initialValues.forEach(function(v) {
                return _this.add(v);
            });
        }
        SetSchema.is = function(type) {
            return type["set"] !== undefined;
        };
        SetSchema.prototype.add = function(value) {
            var _a, _b;
            // immediatelly return false if value already added.
            if (this.has(value)) return false;
            // set "index" for reference.
            var index = this.$refId++;
            if (value["$changes"] !== undefined) value["$changes"].setParent(this, this.$changes.root, index);
            var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports1.OPERATION.ADD;
            this.$changes.indexes[index] = index;
            this.$indexes.set(index, index);
            this.$items.set(index, value);
            this.$changes.change(index, operation);
            return index;
        };
        SetSchema.prototype.entries = function() {
            return this.$items.entries();
        };
        SetSchema.prototype.delete = function(item) {
            var entries = this.$items.entries();
            var index;
            var entry;
            while(entry = entries.next()){
                if (entry.done) break;
                if (item === entry.value[1]) {
                    index = entry.value[0];
                    break;
                }
            }
            if (index === undefined) return false;
            this.$changes.delete(index);
            this.$indexes.delete(index);
            return this.$items.delete(index);
        };
        SetSchema.prototype.clear = function(isDecoding) {
            var _this = this;
            // discard previous operations.
            this.$changes.discard(true, true);
            this.$changes.indexes = {};
            // clear previous indexes
            this.$indexes.clear();
            // flag child items for garbage collection.
            if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                _this.$changes.root.removeRef(item["$changes"].refId);
            });
            // clear items
            this.$items.clear();
            this.$changes.operation({
                index: 0,
                op: exports1.OPERATION.CLEAR
            });
            // touch all structures until reach root
            this.$changes.touchParents();
        };
        SetSchema.prototype.has = function(value) {
            var values = this.$items.values();
            var has = false;
            var entry;
            while(entry = values.next()){
                if (entry.done) break;
                if (value === entry.value) {
                    has = true;
                    break;
                }
            }
            return has;
        };
        SetSchema.prototype.forEach = function(callbackfn) {
            var _this = this;
            this.$items.forEach(function(value, key, _) {
                return callbackfn(value, key, _this);
            });
        };
        SetSchema.prototype.values = function() {
            return this.$items.values();
        };
        Object.defineProperty(SetSchema.prototype, "size", {
            get: function() {
                return this.$items.size;
            },
            enumerable: false,
            configurable: true
        });
        SetSchema.prototype.setIndex = function(index, key) {
            this.$indexes.set(index, key);
        };
        SetSchema.prototype.getIndex = function(index) {
            return this.$indexes.get(index);
        };
        SetSchema.prototype.getByIndex = function(index) {
            return this.$items.get(this.$indexes.get(index));
        };
        SetSchema.prototype.deleteByIndex = function(index) {
            var key = this.$indexes.get(index);
            this.$items.delete(key);
            this.$indexes.delete(index);
        };
        SetSchema.prototype.toArray = function() {
            return Array.from(this.$items.values());
        };
        SetSchema.prototype.toJSON = function() {
            var values = [];
            this.forEach(function(value, key) {
                values.push(typeof value["toJSON"] === "function" ? value["toJSON"]() : value);
            });
            return values;
        };
        //
        // Decoding utilities
        //
        SetSchema.prototype.clone = function(isDecoding) {
            var cloned;
            if (isDecoding) // client-side
            cloned = Object.assign(new SetSchema(), this);
            else {
                // server-side
                cloned = new SetSchema();
                this.forEach(function(value) {
                    if (value["$changes"]) cloned.add(value["clone"]());
                    else cloned.add(value);
                });
            }
            return cloned;
        };
        SetSchema.prototype.triggerAll = function() {
            Schema.prototype.triggerAll.apply(this);
        };
        return SetSchema;
    }();
    /**
     * Extracted from https://www.npmjs.com/package/strong-events
     */ var EventEmitter_ = /** @class */ function() {
        function EventEmitter_() {
            this.handlers = [];
        }
        EventEmitter_.prototype.register = function(cb, once) {
            this.handlers.push(cb);
            return this;
        };
        EventEmitter_.prototype.invoke = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            this.handlers.forEach(function(handler) {
                return handler.apply(void 0, args);
            });
        };
        EventEmitter_.prototype.invokeAsync = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return Promise.all(this.handlers.map(function(handler) {
                return handler.apply(void 0, args);
            }));
        };
        EventEmitter_.prototype.remove = function(cb) {
            var index = this.handlers.indexOf(cb);
            this.handlers[index] = this.handlers[this.handlers.length - 1];
            this.handlers.pop();
        };
        EventEmitter_.prototype.clear = function() {
            this.handlers = [];
        };
        return EventEmitter_;
    }();
    var ClientState = /** @class */ function() {
        function ClientState() {
            this.refIds = new WeakSet();
            this.containerIndexes = new WeakMap();
        }
        // containerIndexes = new Map<ChangeTree, Set<number>>();
        ClientState.prototype.addRefId = function(changeTree) {
            if (!this.refIds.has(changeTree)) {
                this.refIds.add(changeTree);
                this.containerIndexes.set(changeTree, new Set());
            }
        };
        ClientState.get = function(client) {
            if (client.$filterState === undefined) client.$filterState = new ClientState();
            return client.$filterState;
        };
        return ClientState;
    }();
    var EncodeSchemaError = /** @class */ function(_super) {
        __extends(EncodeSchemaError, _super);
        function EncodeSchemaError() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return EncodeSchemaError;
    }(Error);
    function assertType(value, type, klass, field) {
        var typeofTarget;
        var allowNull = false;
        switch(type){
            case "number":
            case "int8":
            case "uint8":
            case "int16":
            case "uint16":
            case "int32":
            case "uint32":
            case "int64":
            case "uint64":
            case "float32":
            case "float64":
                typeofTarget = "number";
                if (isNaN(value)) console.log('trying to encode "NaN" in '.concat(klass.constructor.name, "#").concat(field));
                break;
            case "string":
                typeofTarget = "string";
                allowNull = true;
                break;
            case "boolean":
                // boolean is always encoded as true/false based on truthiness
                return;
        }
        if (typeof value !== typeofTarget && (!allowNull || allowNull && value !== null)) {
            var foundValue = "'".concat(JSON.stringify(value), "'").concat(value && value.constructor && " (".concat(value.constructor.name, ")") || "");
            throw new EncodeSchemaError("a '".concat(typeofTarget, "' was expected, but ").concat(foundValue, " was provided in ").concat(klass.constructor.name, "#").concat(field));
        }
    }
    function assertInstanceType(value, type, klass, field) {
        if (!(value instanceof type)) throw new EncodeSchemaError("a '".concat(type.name, "' was expected, but '").concat(value.constructor.name, "' was provided in ").concat(klass.constructor.name, "#").concat(field));
    }
    function encodePrimitiveType(type, bytes, value, klass, field) {
        assertType(value, type, klass, field);
        var encodeFunc = encode[type];
        if (encodeFunc) encodeFunc(bytes, value);
        else throw new EncodeSchemaError("a '".concat(type, "' was expected, but ").concat(value, " was provided in ").concat(klass.constructor.name, "#").concat(field));
    }
    function decodePrimitiveType(type, bytes, it) {
        return decode[type](bytes, it);
    }
    /**
     * Schema encoder / decoder
     */ var Schema = /** @class */ function() {
        // allow inherited classes to have a constructor
        function Schema() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            // fix enumerability of fields for end-user
            Object.defineProperties(this, {
                $changes: {
                    value: new ChangeTree(this, undefined, new Root()),
                    enumerable: false,
                    writable: true
                },
                $listeners: {
                    value: {},
                    enumerable: false,
                    writable: true
                }
            });
            var descriptors = this._definition.descriptors;
            if (descriptors) Object.defineProperties(this, descriptors);
            //
            // Assign initial values
            //
            if (args[0]) this.assign(args[0]);
        }
        Schema.onError = function(e) {
            console.error(e);
        };
        Schema.is = function(type) {
            return type["_definition"] && type["_definition"].schema !== undefined;
        };
        Schema.prototype.assign = function(props) {
            Object.assign(this, props);
            return this;
        };
        Object.defineProperty(Schema.prototype, "_definition", {
            get: function() {
                return this.constructor._definition;
            },
            enumerable: false,
            configurable: true
        });
        Schema.prototype.listen = function(attr, callback) {
            var _this = this;
            if (!this.$listeners[attr]) this.$listeners[attr] = new EventEmitter_();
            this.$listeners[attr].register(callback);
            // return un-register callback.
            return function() {
                return _this.$listeners[attr].remove(callback);
            };
        };
        Schema.prototype.decode = function(bytes, it, ref, allChanges) {
            if (it === void 0) it = {
                offset: 0
            };
            if (ref === void 0) ref = this;
            if (allChanges === void 0) allChanges = new Map();
            var $root = this.$changes.root;
            var totalBytes = bytes.length;
            var refId = 0;
            var changes = [];
            $root.refs.set(refId, this);
            allChanges.set(refId, changes);
            while(it.offset < totalBytes){
                var byte = bytes[it.offset++];
                if (byte == SWITCH_TO_STRUCTURE) {
                    refId = number(bytes, it);
                    var nextRef = $root.refs.get(refId);
                    //
                    // Trying to access a reference that haven't been decoded yet.
                    //
                    if (!nextRef) throw new Error('"refId" not found: '.concat(refId));
                    ref = nextRef;
                    // create empty list of changes for this refId.
                    changes = [];
                    allChanges.set(refId, changes);
                    continue;
                }
                var changeTree = ref["$changes"];
                var isSchema = ref["_definition"] !== undefined;
                var operation = isSchema ? byte >> 6 << 6 // "compressed" index + operation
                 : byte; // "uncompressed" index + operation (array/map items)
                if (operation === exports1.OPERATION.CLEAR) {
                    //
                    // TODO: refactor me!
                    // The `.clear()` method is calling `$root.removeRef(refId)` for
                    // each item inside this collection
                    //
                    ref.clear(true);
                    continue;
                }
                var fieldIndex = isSchema ? byte % (operation || 255 // if "REPLACE" operation (0), use 255
                ) : number(bytes, it);
                var fieldName = isSchema ? ref["_definition"].fieldsByIndex[fieldIndex] : "";
                var type = changeTree.getType(fieldIndex);
                var value = void 0;
                var previousValue = void 0;
                var dynamicIndex = void 0;
                if (!isSchema) {
                    previousValue = ref["getByIndex"](fieldIndex);
                    if ((operation & exports1.OPERATION.ADD) === exports1.OPERATION.ADD) {
                        dynamicIndex = ref instanceof MapSchema ? string(bytes, it) : fieldIndex;
                        ref["setIndex"](fieldIndex, dynamicIndex);
                    } else // here
                    dynamicIndex = ref["getIndex"](fieldIndex);
                } else previousValue = ref["_".concat(fieldName)];
                //
                // Delete operations
                //
                if ((operation & exports1.OPERATION.DELETE) === exports1.OPERATION.DELETE) {
                    if (operation !== exports1.OPERATION.DELETE_AND_ADD) ref["deleteByIndex"](fieldIndex);
                    // Flag `refId` for garbage collection.
                    if (previousValue && previousValue["$changes"]) $root.removeRef(previousValue["$changes"].refId);
                    value = null;
                }
                if (fieldName === undefined) {
                    console.warn("@colyseus/schema: definition mismatch");
                    //
                    // keep skipping next bytes until reaches a known structure
                    // by local decoder.
                    //
                    var nextIterator = {
                        offset: it.offset
                    };
                    while(it.offset < totalBytes){
                        if (switchStructureCheck(bytes, it)) {
                            nextIterator.offset = it.offset + 1;
                            if ($root.refs.has(number(bytes, nextIterator))) break;
                        }
                        it.offset++;
                    }
                    continue;
                } else if (operation === exports1.OPERATION.DELETE) ;
                else if (Schema.is(type)) {
                    var refId_1 = number(bytes, it);
                    value = $root.refs.get(refId_1);
                    if (operation !== exports1.OPERATION.REPLACE) {
                        var childType = this.getSchemaType(bytes, it, type);
                        if (!value) {
                            value = this.createTypeInstance(childType);
                            value.$changes.refId = refId_1;
                            if (previousValue) {
                                value.onChange = previousValue.onChange;
                                value.onRemove = previousValue.onRemove;
                                value.$listeners = previousValue.$listeners;
                                if (previousValue["$changes"].refId && refId_1 !== previousValue["$changes"].refId) $root.removeRef(previousValue["$changes"].refId);
                            }
                        }
                        $root.addRef(refId_1, value, value !== previousValue);
                    }
                } else if (typeof type === "string") //
                // primitive value (number, string, boolean, etc)
                //
                value = decodePrimitiveType(type, bytes, it);
                else {
                    var typeDef = getType(Object.keys(type)[0]);
                    var refId_2 = number(bytes, it);
                    var valueRef = $root.refs.has(refId_2) ? previousValue || $root.refs.get(refId_2) : new typeDef.constructor();
                    value = valueRef.clone(true);
                    value.$changes.refId = refId_2;
                    // preserve schema callbacks
                    if (previousValue) {
                        value.onAdd = previousValue.onAdd;
                        value.onRemove = previousValue.onRemove;
                        value.onChange = previousValue.onChange;
                        if (previousValue["$changes"].refId && refId_2 !== previousValue["$changes"].refId) {
                            $root.removeRef(previousValue["$changes"].refId);
                            //
                            // Trigger onRemove if structure has been replaced.
                            //
                            var deletes = [];
                            var entries = previousValue.entries();
                            var iter = void 0;
                            while((iter = entries.next()) && !iter.done){
                                var _a = iter.value, key = _a[0], value_1 = _a[1];
                                deletes.push({
                                    op: exports1.OPERATION.DELETE,
                                    field: key,
                                    value: undefined,
                                    previousValue: value_1
                                });
                            }
                            allChanges.set(previousValue["$changes"].refId, deletes);
                        }
                    }
                    $root.addRef(refId_2, value, valueRef !== previousValue);
                    //
                    // TODO: deprecate proxies on next version.
                    // get proxy to target value.
                    //
                    if (typeDef.getProxy) value = typeDef.getProxy(value);
                }
                var hasChange = previousValue !== value;
                if (value !== null && value !== undefined) {
                    if (value["$changes"]) value["$changes"].setParent(changeTree.ref, changeTree.root, fieldIndex);
                    if (ref instanceof Schema) ref[fieldName] = value;
                    else if (ref instanceof MapSchema) {
                        // const key = ref['$indexes'].get(field);
                        var key = dynamicIndex;
                        // ref.set(key, value);
                        ref["$items"].set(key, value);
                        ref["$changes"].allChanges.add(fieldIndex);
                    } else if (ref instanceof ArraySchema) // const key = ref['$indexes'][field];
                    // console.log("SETTING FOR ArraySchema =>", { field, key, value });
                    // ref[key] = value;
                    ref.setAt(fieldIndex, value);
                    else if (ref instanceof CollectionSchema) {
                        var index = ref.add(value);
                        ref["setIndex"](fieldIndex, index);
                    } else if (ref instanceof SetSchema) {
                        var index = ref.add(value);
                        if (index !== false) ref["setIndex"](fieldIndex, index);
                    }
                }
                if (hasChange) changes.push({
                    op: operation,
                    field: fieldName,
                    dynamicIndex: dynamicIndex,
                    value: value,
                    previousValue: previousValue
                });
            }
            this._triggerChanges(allChanges);
            // drop references of unused schemas
            $root.garbageCollectDeletedRefs();
            return allChanges;
        };
        Schema.prototype.encode = function(encodeAll, bytes, useFilters) {
            if (encodeAll === void 0) encodeAll = false;
            if (bytes === void 0) bytes = [];
            if (useFilters === void 0) useFilters = false;
            var rootChangeTree = this.$changes;
            var refIdsVisited = new WeakSet();
            var changeTrees = [
                rootChangeTree
            ];
            var numChangeTrees = 1;
            for(var i = 0; i < numChangeTrees; i++){
                var changeTree = changeTrees[i];
                var ref = changeTree.ref;
                var isSchema = ref instanceof Schema;
                // Generate unique refId for the ChangeTree.
                changeTree.ensureRefId();
                // mark this ChangeTree as visited.
                refIdsVisited.add(changeTree);
                // root `refId` is skipped.
                if (changeTree !== rootChangeTree && (changeTree.changed || encodeAll)) {
                    uint8$1(bytes, SWITCH_TO_STRUCTURE);
                    number$1(bytes, changeTree.refId);
                }
                var changes = encodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());
                for(var j = 0, cl = changes.length; j < cl; j++){
                    var operation = encodeAll ? {
                        op: exports1.OPERATION.ADD,
                        index: changes[j]
                    } : changes[j];
                    var fieldIndex = operation.index;
                    var field = isSchema ? ref["_definition"].fieldsByIndex && ref["_definition"].fieldsByIndex[fieldIndex] : fieldIndex;
                    // cache begin index if `useFilters`
                    var beginIndex = bytes.length;
                    // encode field index + operation
                    if (operation.op !== exports1.OPERATION.TOUCH) {
                        if (isSchema) //
                        // Compress `fieldIndex` + `operation` into a single byte.
                        // This adds a limitaion of 64 fields per Schema structure
                        //
                        uint8$1(bytes, fieldIndex | operation.op);
                        else {
                            uint8$1(bytes, operation.op);
                            // custom operations
                            if (operation.op === exports1.OPERATION.CLEAR) continue;
                            // indexed operations
                            number$1(bytes, fieldIndex);
                        }
                    }
                    //
                    // encode "alias" for dynamic fields (maps)
                    //
                    if (!isSchema && (operation.op & exports1.OPERATION.ADD) == exports1.OPERATION.ADD // ADD or DELETE_AND_ADD
                    ) {
                        if (ref instanceof MapSchema) {
                            //
                            // MapSchema dynamic key
                            //
                            var dynamicIndex = changeTree.ref["$indexes"].get(fieldIndex);
                            string$1(bytes, dynamicIndex);
                        }
                    }
                    if (operation.op === exports1.OPERATION.DELETE) continue;
                    // const type = changeTree.childType || ref._schema[field];
                    var type = changeTree.getType(fieldIndex);
                    // const type = changeTree.getType(fieldIndex);
                    var value = changeTree.getValue(fieldIndex);
                    // Enqueue ChangeTree to be visited
                    if (value && value["$changes"] && !refIdsVisited.has(value["$changes"])) {
                        changeTrees.push(value["$changes"]);
                        value["$changes"].ensureRefId();
                        numChangeTrees++;
                    }
                    if (operation.op === exports1.OPERATION.TOUCH) continue;
                    if (Schema.is(type)) {
                        assertInstanceType(value, type, ref, field);
                        //
                        // Encode refId for this instance.
                        // The actual instance is going to be encoded on next `changeTree` iteration.
                        //
                        number$1(bytes, value.$changes.refId);
                        // Try to encode inherited TYPE_ID if it's an ADD operation.
                        if ((operation.op & exports1.OPERATION.ADD) === exports1.OPERATION.ADD) this.tryEncodeTypeId(bytes, type, value.constructor);
                    } else if (typeof type === "string") //
                    // Primitive values
                    //
                    encodePrimitiveType(type, bytes, value, ref, field);
                    else {
                        //
                        // Custom type (MapSchema, ArraySchema, etc)
                        //
                        var definition = getType(Object.keys(type)[0]);
                        //
                        // ensure a ArraySchema has been provided
                        //
                        assertInstanceType(ref["_".concat(field)], definition.constructor, ref, field);
                        //
                        // Encode refId for this instance.
                        // The actual instance is going to be encoded on next `changeTree` iteration.
                        //
                        number$1(bytes, value.$changes.refId);
                    }
                    if (useFilters) // cache begin / end index
                    changeTree.cache(fieldIndex, bytes.slice(beginIndex));
                }
                if (!encodeAll && !useFilters) changeTree.discard();
            }
            return bytes;
        };
        Schema.prototype.encodeAll = function(useFilters) {
            return this.encode(true, [], useFilters);
        };
        Schema.prototype.applyFilters = function(client, encodeAll) {
            var _a, _b;
            if (encodeAll === void 0) encodeAll = false;
            var root = this;
            var refIdsDissallowed = new Set();
            var $filterState = ClientState.get(client);
            var changeTrees = [
                this.$changes
            ];
            var numChangeTrees = 1;
            var filteredBytes = [];
            var _loop_1 = function(i) {
                var changeTree = changeTrees[i];
                if (refIdsDissallowed.has(changeTree.refId)) return "continue";
                var ref = changeTree.ref;
                var isSchema = ref instanceof Schema;
                uint8$1(filteredBytes, SWITCH_TO_STRUCTURE);
                number$1(filteredBytes, changeTree.refId);
                var clientHasRefId = $filterState.refIds.has(changeTree);
                var isEncodeAll = encodeAll || !clientHasRefId;
                // console.log("REF:", ref.constructor.name);
                // console.log("Encode all?", isEncodeAll);
                //
                // include `changeTree` on list of known refIds by this client.
                //
                $filterState.addRefId(changeTree);
                var containerIndexes = $filterState.containerIndexes.get(changeTree);
                var changes = isEncodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());
                //
                // WORKAROUND: tries to re-evaluate previously not included @filter() attributes
                // - see "DELETE a field of Schema" test case.
                //
                if (!encodeAll && isSchema && ref._definition.indexesWithFilters) {
                    var indexesWithFilters = ref._definition.indexesWithFilters;
                    indexesWithFilters.forEach(function(indexWithFilter) {
                        if (!containerIndexes.has(indexWithFilter) && changeTree.allChanges.has(indexWithFilter)) {
                            if (isEncodeAll) changes.push(indexWithFilter);
                            else changes.push({
                                op: exports1.OPERATION.ADD,
                                index: indexWithFilter
                            });
                        }
                    });
                }
                for(var j = 0, cl = changes.length; j < cl; j++){
                    var change = isEncodeAll ? {
                        op: exports1.OPERATION.ADD,
                        index: changes[j]
                    } : changes[j];
                    // custom operations
                    if (change.op === exports1.OPERATION.CLEAR) {
                        uint8$1(filteredBytes, change.op);
                        continue;
                    }
                    var fieldIndex = change.index;
                    //
                    // Deleting fields: encode the operation + field index
                    //
                    if (change.op === exports1.OPERATION.DELETE) {
                        //
                        // DELETE operations also need to go through filtering.
                        //
                        // TODO: cache the previous value so we can access the value (primitive or `refId`)
                        // (check against `$filterState.refIds`)
                        //
                        if (isSchema) uint8$1(filteredBytes, change.op | fieldIndex);
                        else {
                            uint8$1(filteredBytes, change.op);
                            number$1(filteredBytes, fieldIndex);
                        }
                        continue;
                    }
                    // indexed operation
                    var value = changeTree.getValue(fieldIndex);
                    var type = changeTree.getType(fieldIndex);
                    if (isSchema) {
                        // Is a Schema!
                        var filter = ref._definition.filters && ref._definition.filters[fieldIndex];
                        if (filter && !filter.call(ref, client, value, root)) {
                            if (value && value["$changes"]) refIdsDissallowed.add(value["$changes"].refId);
                            continue;
                        }
                    } else {
                        // Is a collection! (map, array, etc.)
                        var parent = changeTree.parent;
                        var filter = changeTree.getChildrenFilter();
                        if (filter && !filter.call(parent, client, ref["$indexes"].get(fieldIndex), value, root)) {
                            if (value && value["$changes"]) refIdsDissallowed.add(value["$changes"].refId);
                            continue;
                        }
                    }
                    // visit child ChangeTree on further iteration.
                    if (value["$changes"]) {
                        changeTrees.push(value["$changes"]);
                        numChangeTrees++;
                    }
                    //
                    // Copy cached bytes
                    //
                    if (change.op !== exports1.OPERATION.TOUCH) {
                        //
                        // TODO: refactor me!
                        //
                        if (change.op === exports1.OPERATION.ADD || isSchema) {
                            //
                            // use cached bytes directly if is from Schema type.
                            //
                            filteredBytes.push.apply(filteredBytes, (_a = changeTree.caches[fieldIndex]) !== null && _a !== void 0 ? _a : []);
                            containerIndexes.add(fieldIndex);
                        } else if (containerIndexes.has(fieldIndex)) //
                        // use cached bytes if already has the field
                        //
                        filteredBytes.push.apply(filteredBytes, (_b = changeTree.caches[fieldIndex]) !== null && _b !== void 0 ? _b : []);
                        else {
                            //
                            // force ADD operation if field is not known by this client.
                            //
                            containerIndexes.add(fieldIndex);
                            uint8$1(filteredBytes, exports1.OPERATION.ADD);
                            number$1(filteredBytes, fieldIndex);
                            if (ref instanceof MapSchema) {
                                //
                                // MapSchema dynamic key
                                //
                                var dynamicIndex = changeTree.ref["$indexes"].get(fieldIndex);
                                string$1(filteredBytes, dynamicIndex);
                            }
                            if (value["$changes"]) number$1(filteredBytes, value["$changes"].refId);
                            else // "encodePrimitiveType" without type checking.
                            // the type checking has been done on the first .encode() call.
                            encode[type](filteredBytes, value);
                        }
                    } else if (value["$changes"] && !isSchema) {
                        //
                        // TODO:
                        // - track ADD/REPLACE/DELETE instances on `$filterState`
                        // - do NOT always encode dynamicIndex for MapSchema.
                        //   (If client already has that key, only the first index is necessary.)
                        //
                        uint8$1(filteredBytes, exports1.OPERATION.ADD);
                        number$1(filteredBytes, fieldIndex);
                        if (ref instanceof MapSchema) {
                            //
                            // MapSchema dynamic key
                            //
                            var dynamicIndex = changeTree.ref["$indexes"].get(fieldIndex);
                            string$1(filteredBytes, dynamicIndex);
                        }
                        number$1(filteredBytes, value["$changes"].refId);
                    }
                }
            };
            for(var i = 0; i < numChangeTrees; i++)_loop_1(i);
            return filteredBytes;
        };
        Schema.prototype.clone = function() {
            var _a;
            var cloned = new this.constructor;
            var schema = this._definition.schema;
            for(var field in schema)if (typeof this[field] === "object" && typeof ((_a = this[field]) === null || _a === void 0 ? void 0 : _a.clone) === "function") // deep clone
            cloned[field] = this[field].clone();
            else // primitive values
            cloned[field] = this[field];
            return cloned;
        };
        Schema.prototype.triggerAll = function() {
            // skip if haven't received any remote refs yet.
            if (this.$changes.root.refs.size === 0) return;
            var allChanges = new Map();
            Schema.prototype._triggerAllFillChanges.call(this, this, allChanges);
            try {
                Schema.prototype._triggerChanges.call(this, allChanges);
            } catch (e) {
                Schema.onError(e);
            }
        };
        Schema.prototype.toJSON = function() {
            var schema = this._definition.schema;
            var deprecated = this._definition.deprecated;
            var obj = {};
            for(var field in schema)if (!deprecated[field] && this[field] !== null && typeof this[field] !== "undefined") obj[field] = typeof this[field]["toJSON"] === "function" ? this[field]["toJSON"]() : this["_".concat(field)];
            return obj;
        };
        Schema.prototype.discardAllChanges = function() {
            this.$changes.discardAll();
        };
        Schema.prototype.getByIndex = function(index) {
            return this[this._definition.fieldsByIndex[index]];
        };
        Schema.prototype.deleteByIndex = function(index) {
            this[this._definition.fieldsByIndex[index]] = undefined;
        };
        Schema.prototype.tryEncodeTypeId = function(bytes, type, targetType) {
            if (type._typeid !== targetType._typeid) {
                uint8$1(bytes, TYPE_ID);
                number$1(bytes, targetType._typeid);
            }
        };
        Schema.prototype.getSchemaType = function(bytes, it, defaultType) {
            var type;
            if (bytes[it.offset] === TYPE_ID) {
                it.offset++;
                type = this.constructor._context.get(number(bytes, it));
            }
            return type || defaultType;
        };
        Schema.prototype.createTypeInstance = function(type) {
            var instance = new type();
            // assign root on $changes
            instance.$changes.root = this.$changes.root;
            return instance;
        };
        Schema.prototype._triggerAllFillChanges = function(ref, allChanges) {
            if (allChanges.has(ref["$changes"].refId)) return;
            var changes = [];
            allChanges.set(ref["$changes"].refId || 0, changes);
            if (ref instanceof Schema) {
                var schema = ref._definition.schema;
                for(var fieldName in schema){
                    var _field = "_".concat(fieldName);
                    var value = ref[_field];
                    if (value !== undefined) {
                        changes.push({
                            op: exports1.OPERATION.ADD,
                            field: fieldName,
                            value: value,
                            previousValue: undefined
                        });
                        if (value["$changes"] !== undefined) Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                    }
                }
            } else {
                var entries = ref.entries();
                var iter = void 0;
                while((iter = entries.next()) && !iter.done){
                    var _a = iter.value, key = _a[0], value = _a[1];
                    changes.push({
                        op: exports1.OPERATION.ADD,
                        field: key,
                        dynamicIndex: key,
                        value: value,
                        previousValue: undefined
                    });
                    if (value["$changes"] !== undefined) Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                }
            }
        };
        Schema.prototype._triggerChanges = function(allChanges) {
            var _this = this;
            allChanges.forEach(function(changes, refId) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                if (changes.length > 0) {
                    var ref = _this.$changes.root.refs.get(refId);
                    var isSchema = ref instanceof Schema;
                    for(var i = 0; i < changes.length; i++){
                        var change = changes[i];
                        var listener = ref["$listeners"] && ref["$listeners"][change.field];
                        if (!isSchema) {
                            if (change.op === exports1.OPERATION.ADD && change.previousValue === undefined) (_b = (_a = ref).onAdd) === null || _b === void 0 || _b.call(_a, change.value, (_c = change.dynamicIndex) !== null && _c !== void 0 ? _c : change.field);
                            else if (change.op === exports1.OPERATION.DELETE) //
                            // FIXME: `previousValue` should always be avaiiable.
                            // ADD + DELETE operations are still encoding DELETE operation.
                            //
                            {
                                if (change.previousValue !== undefined) (_e = (_d = ref).onRemove) === null || _e === void 0 || _e.call(_d, change.previousValue, (_f = change.dynamicIndex) !== null && _f !== void 0 ? _f : change.field);
                            } else if (change.op === exports1.OPERATION.DELETE_AND_ADD) {
                                if (change.previousValue !== undefined) (_h = (_g = ref).onRemove) === null || _h === void 0 || _h.call(_g, change.previousValue, change.dynamicIndex);
                                (_k = (_j = ref).onAdd) === null || _k === void 0 || _k.call(_j, change.value, change.dynamicIndex);
                            } else if (change.op === exports1.OPERATION.REPLACE || change.value !== change.previousValue) (_m = (_l = ref).onChange) === null || _m === void 0 || _m.call(_l, change.value, change.dynamicIndex);
                        }
                        //
                        // trigger onRemove on child structure.
                        //
                        if ((change.op & exports1.OPERATION.DELETE) === exports1.OPERATION.DELETE && change.previousValue instanceof Schema && change.previousValue.onRemove) change.previousValue.onRemove();
                        if (listener) try {
                            listener.invoke(change.value, change.previousValue);
                        } catch (e) {
                            Schema.onError(e);
                        }
                    }
                    if (isSchema) {
                        if (ref.onChange) try {
                            ref.onChange(changes);
                        } catch (e1) {
                            Schema.onError(e1);
                        }
                    }
                }
            });
        };
        Schema._definition = SchemaDefinition.create();
        return Schema;
    }();
    function dumpChanges(schema) {
        var changeTrees = [
            schema["$changes"]
        ];
        var numChangeTrees = 1;
        var dump = {};
        var currentStructure = dump;
        var _loop_1 = function(i) {
            var changeTree = changeTrees[i];
            changeTree.changes.forEach(function(change) {
                var ref = changeTree.ref;
                var fieldIndex = change.index;
                var field = ref["_definition"] ? ref["_definition"].fieldsByIndex[fieldIndex] : ref["$indexes"].get(fieldIndex);
                currentStructure[field] = changeTree.getValue(fieldIndex);
            });
        };
        for(var i = 0; i < numChangeTrees; i++)_loop_1(i);
        return dump;
    }
    var reflectionContext = new Context();
    /**
     * Reflection
     */ var ReflectionField = /** @class */ function(_super) {
        __extends(ReflectionField, _super);
        function ReflectionField() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        __decorate([
            type("string", reflectionContext)
        ], ReflectionField.prototype, "name", void 0);
        __decorate([
            type("string", reflectionContext)
        ], ReflectionField.prototype, "type", void 0);
        __decorate([
            type("number", reflectionContext)
        ], ReflectionField.prototype, "referencedType", void 0);
        return ReflectionField;
    }(Schema);
    var ReflectionType = /** @class */ function(_super) {
        __extends(ReflectionType, _super);
        function ReflectionType() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fields = new ArraySchema();
            return _this;
        }
        __decorate([
            type("number", reflectionContext)
        ], ReflectionType.prototype, "id", void 0);
        __decorate([
            type([
                ReflectionField
            ], reflectionContext)
        ], ReflectionType.prototype, "fields", void 0);
        return ReflectionType;
    }(Schema);
    var Reflection = /** @class */ function(_super) {
        __extends(Reflection, _super);
        function Reflection() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.types = new ArraySchema();
            return _this;
        }
        Reflection.encode = function(instance) {
            var rootSchemaType = instance.constructor;
            var reflection = new Reflection();
            reflection.rootType = rootSchemaType._typeid;
            var buildType = function(currentType, schema) {
                for(var fieldName in schema){
                    var field = new ReflectionField();
                    field.name = fieldName;
                    var fieldType = void 0;
                    if (typeof schema[fieldName] === "string") fieldType = schema[fieldName];
                    else {
                        var type_1 = schema[fieldName];
                        var childTypeSchema = void 0;
                        //
                        // TODO: refactor below.
                        //
                        if (Schema.is(type_1)) {
                            fieldType = "ref";
                            childTypeSchema = schema[fieldName];
                        } else {
                            fieldType = Object.keys(type_1)[0];
                            if (typeof type_1[fieldType] === "string") fieldType += ":" + type_1[fieldType]; // array:string
                            else childTypeSchema = type_1[fieldType];
                        }
                        field.referencedType = childTypeSchema ? childTypeSchema._typeid : -1;
                    }
                    field.type = fieldType;
                    currentType.fields.push(field);
                }
                reflection.types.push(currentType);
            };
            var types = rootSchemaType._context.types;
            for(var typeid in types){
                var type_2 = new ReflectionType();
                type_2.id = Number(typeid);
                buildType(type_2, types[typeid]._definition.schema);
            }
            return reflection.encodeAll();
        };
        Reflection.decode = function(bytes, it) {
            var context = new Context();
            var reflection = new Reflection();
            reflection.decode(bytes, it);
            var schemaTypes = reflection.types.reduce(function(types, reflectionType) {
                var schema = /** @class */ function(_super) {
                    __extends(_, _super);
                    function _() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return _;
                }(Schema);
                var typeid = reflectionType.id;
                types[typeid] = schema;
                context.add(schema, typeid);
                return types;
            }, {});
            reflection.types.forEach(function(reflectionType) {
                var schemaType = schemaTypes[reflectionType.id];
                reflectionType.fields.forEach(function(field) {
                    var _a;
                    if (field.referencedType !== undefined) {
                        var fieldType = field.type;
                        var refType = schemaTypes[field.referencedType];
                        // map or array of primitive type (-1)
                        if (!refType) {
                            var typeInfo = field.type.split(":");
                            fieldType = typeInfo[0];
                            refType = typeInfo[1];
                        }
                        if (fieldType === "ref") type(refType, context)(schemaType.prototype, field.name);
                        else type((_a = {}, _a[fieldType] = refType, _a), context)(schemaType.prototype, field.name);
                    } else type(field.type, context)(schemaType.prototype, field.name);
                });
            });
            var rootType = schemaTypes[reflection.rootType];
            var rootInstance = new rootType();
            /**
             * auto-initialize referenced types on root type
             * to allow registering listeners immediatelly on client-side
             */ for(var fieldName in rootType._definition.schema){
                var fieldType = rootType._definition.schema[fieldName];
                if (typeof fieldType !== "string") rootInstance[fieldName] = typeof fieldType === "function" ? new fieldType() // is a schema reference
                 : new (getType(Object.keys(fieldType)[0])).constructor(); // is a "collection"
            }
            return rootInstance;
        };
        __decorate([
            type([
                ReflectionType
            ], reflectionContext)
        ], Reflection.prototype, "types", void 0);
        __decorate([
            type("number", reflectionContext)
        ], Reflection.prototype, "rootType", void 0);
        return Reflection;
    }(Schema);
    registerType("map", {
        constructor: MapSchema,
        getProxy: getMapProxy
    });
    registerType("array", {
        constructor: ArraySchema,
        getProxy: getArrayProxy
    });
    registerType("set", {
        constructor: SetSchema
    });
    registerType("collection", {
        constructor: CollectionSchema
    });
    exports1.ArraySchema = ArraySchema;
    exports1.CollectionSchema = CollectionSchema;
    exports1.Context = Context;
    exports1.MapSchema = MapSchema;
    exports1.Reflection = Reflection;
    exports1.ReflectionField = ReflectionField;
    exports1.ReflectionType = ReflectionType;
    exports1.Schema = Schema;
    exports1.SchemaDefinition = SchemaDefinition;
    exports1.SetSchema = SetSchema;
    exports1.decode = decode;
    exports1.defineTypes = defineTypes;
    exports1.deprecated = deprecated;
    exports1.dumpChanges = dumpChanges;
    exports1.encode = encode;
    exports1.filter = filter;
    exports1.filterChildren = filterChildren;
    exports1.hasFilter = hasFilter;
    exports1.registerType = registerType;
    exports1.type = type;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
});

},{}],"bJUbn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Board", ()=>Board);
var _tsDecorateMjs = require("@swc/helpers/src/_ts_decorate.mjs");
var _tsDecorateMjsDefault = parcelHelpers.interopDefault(_tsDecorateMjs);
var _schema = require("@colyseus/schema");
class Board extends (0, _schema.Schema) {
    constructor(rows = 20, cols = 10){
        super();
        this.rows = rows;
        this.cols = cols;
        this.values = new (0, _schema.ArraySchema)(...new Array(rows * cols).fill(0));
    }
}
(0, _tsDecorateMjsDefault.default)([
    (0, _schema.type)([
        "number"
    ])
], Board.prototype, "values", void 0);
(0, _tsDecorateMjsDefault.default)([
    (0, _schema.type)("number")
], Board.prototype, "rows", void 0);
(0, _tsDecorateMjsDefault.default)([
    (0, _schema.type)("number")
], Board.prototype, "cols", void 0);

},{"@swc/helpers/src/_ts_decorate.mjs":"6yEaS","@colyseus/schema":"77vsq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1QKAp":[function(require,module,exports) {
var global = arguments[3];
// colyseus.js@0.14.13 (@colyseus/schema 1.0.25)
(function(global, factory) {
    factory(exports);
})(this, function(exports1) {
    "use strict";
    //
    // Polyfills for legacy environments
    //
    /*
     * Support Android 4.4.x
     */ if (!ArrayBuffer.isView) ArrayBuffer.isView = function(a) {
        return a !== null && typeof a === "object" && a.buffer instanceof ArrayBuffer;
    };
    // Define globalThis if not available.
    // https://github.com/colyseus/colyseus.js/issues/86
    if (typeof globalThis === "undefined" && typeof window !== "undefined") // @ts-ignore
    window["globalThis"] = window;
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function apply(src, tar) {
        tar.headers = src.headers || {};
        tar.statusMessage = src.statusText;
        tar.statusCode = src.status;
        tar.data = src.response;
    }
    function send(method, uri, opts) {
        return new Promise(function(res, rej) {
            opts = opts || {};
            var req = new XMLHttpRequest;
            var k, tmp, arr, str = opts.body;
            var headers = opts.headers || {};
            // IE compatible
            if (opts.timeout) req.timeout = opts.timeout;
            req.ontimeout = req.onerror = function(err) {
                err.timeout = err.type == "timeout";
                rej(err);
            };
            req.open(method, uri.href || uri);
            req.onload = function() {
                arr = req.getAllResponseHeaders().trim().split(/[\r\n]+/);
                apply(req, req); //=> req.headers
                while(tmp = arr.shift()){
                    tmp = tmp.split(": ");
                    req.headers[tmp.shift().toLowerCase()] = tmp.join(": ");
                }
                tmp = req.headers["content-type"];
                if (tmp && !!~tmp.indexOf("application/json")) try {
                    req.data = JSON.parse(req.data, opts.reviver);
                } catch (err) {
                    apply(req, err);
                    return rej(err);
                }
                (req.status >= 400 ? rej : res)(req);
            };
            if (typeof FormData < "u" && str instanceof FormData) ;
            else if (str && typeof str == "object") {
                headers["content-type"] = "application/json";
                str = JSON.stringify(str);
            }
            req.withCredentials = !!opts.withCredentials;
            for(k in headers)req.setRequestHeader(k, headers[k]);
            req.send(str);
        });
    }
    var get = /*#__PURE__*/ send.bind(send, "GET");
    var post = /*#__PURE__*/ send.bind(send, "POST");
    var patch = /*#__PURE__*/ send.bind(send, "PATCH");
    var del = /*#__PURE__*/ send.bind(send, "DELETE");
    var put = /*#__PURE__*/ send.bind(send, "PUT");
    var del_1 = del;
    var get_1 = get;
    var patch_1 = patch;
    var post_1 = post;
    var put_1 = put;
    var send_1 = send;
    var xhr = {
        del: del_1,
        get: get_1,
        patch: patch_1,
        post: post_1,
        put: put_1,
        send: send_1
    };
    var http = /*#__PURE__*/ Object.freeze(/*#__PURE__*/ Object.assign(/*#__PURE__*/ Object.create(null), xhr, {
        "default": xhr,
        del: del_1,
        get: get_1,
        patch: patch_1,
        post: post_1,
        put: put_1,
        send: send_1
    }));
    var ServerError = /** @class */ function(_super) {
        __extends(ServerError, _super);
        function ServerError(code, message) {
            var _this = _super.call(this, message) || this;
            _this.name = "ServerError";
            _this.code = code;
            return _this;
        }
        return ServerError;
    }(Error);
    /**
     * Copyright (c) 2014 Ion Drive Software Ltd.
     * https://github.com/darrachequesne/notepack/
     *
     * Permission is hereby granted, free of charge, to any person obtaining a copy
     * of this software and associated documentation files (the "Software"), to deal
     * in the Software without restriction, including without limitation the rights
     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     * copies of the Software, and to permit persons to whom the Software is
     * furnished to do so, subject to the following conditions:
     *
     * The above copyright notice and this permission notice shall be included in all
     * copies or substantial portions of the Software.
     *
     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
     * SOFTWARE.
     */ /**
     * Patch for Colyseus:
     * -------------------
     *
     * added `offset` on Decoder constructor, for messages arriving with a code
     * before actual msgpack data
     */ // 
    // DECODER
    // 
    function Decoder(buffer, offset) {
        this._offset = offset;
        if (buffer instanceof ArrayBuffer) {
            this._buffer = buffer;
            this._view = new DataView(this._buffer);
        } else if (ArrayBuffer.isView(buffer)) {
            this._buffer = buffer.buffer;
            this._view = new DataView(this._buffer, buffer.byteOffset, buffer.byteLength);
        } else throw new Error("Invalid argument");
    }
    function utf8Read$1(view, offset, length) {
        var string = "", chr = 0;
        for(var i = offset, end = offset + length; i < end; i++){
            var byte = view.getUint8(i);
            if ((byte & 0x80) === 0x00) {
                string += String.fromCharCode(byte);
                continue;
            }
            if ((byte & 0xe0) === 0xc0) {
                string += String.fromCharCode((byte & 0x1f) << 6 | view.getUint8(++i) & 0x3f);
                continue;
            }
            if ((byte & 0xf0) === 0xe0) {
                string += String.fromCharCode((byte & 0x0f) << 12 | (view.getUint8(++i) & 0x3f) << 6 | (view.getUint8(++i) & 0x3f) << 0);
                continue;
            }
            if ((byte & 0xf8) === 0xf0) {
                chr = (byte & 0x07) << 18 | (view.getUint8(++i) & 0x3f) << 12 | (view.getUint8(++i) & 0x3f) << 6 | (view.getUint8(++i) & 0x3f) << 0;
                if (chr >= 0x010000) {
                    chr -= 0x010000;
                    string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                } else string += String.fromCharCode(chr);
                continue;
            }
            throw new Error("Invalid byte " + byte.toString(16));
        }
        return string;
    }
    Decoder.prototype._array = function(length) {
        var value = new Array(length);
        for(var i = 0; i < length; i++)value[i] = this._parse();
        return value;
    };
    Decoder.prototype._map = function(length) {
        var key = "", value = {};
        for(var i = 0; i < length; i++){
            key = this._parse();
            value[key] = this._parse();
        }
        return value;
    };
    Decoder.prototype._str = function(length) {
        var value = utf8Read$1(this._view, this._offset, length);
        this._offset += length;
        return value;
    };
    Decoder.prototype._bin = function(length) {
        var value = this._buffer.slice(this._offset, this._offset + length);
        this._offset += length;
        return value;
    };
    Decoder.prototype._parse = function() {
        var prefix = this._view.getUint8(this._offset++);
        var value, length = 0, type = 0, hi = 0, lo = 0;
        if (prefix < 0xc0) {
            // positive fixint
            if (prefix < 0x80) return prefix;
            // fixmap
            if (prefix < 0x90) return this._map(prefix & 0x0f);
            // fixarray
            if (prefix < 0xa0) return this._array(prefix & 0x0f);
            // fixstr
            return this._str(prefix & 0x1f);
        }
        // negative fixint
        if (prefix > 0xdf) return (0xff - prefix + 1) * -1;
        switch(prefix){
            // nil
            case 0xc0:
                return null;
            // false
            case 0xc2:
                return false;
            // true
            case 0xc3:
                return true;
            // bin
            case 0xc4:
                length = this._view.getUint8(this._offset);
                this._offset += 1;
                return this._bin(length);
            case 0xc5:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._bin(length);
            case 0xc6:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._bin(length);
            // ext
            case 0xc7:
                length = this._view.getUint8(this._offset);
                type = this._view.getInt8(this._offset + 1);
                this._offset += 2;
                return [
                    type,
                    this._bin(length)
                ];
            case 0xc8:
                length = this._view.getUint16(this._offset);
                type = this._view.getInt8(this._offset + 2);
                this._offset += 3;
                return [
                    type,
                    this._bin(length)
                ];
            case 0xc9:
                length = this._view.getUint32(this._offset);
                type = this._view.getInt8(this._offset + 4);
                this._offset += 5;
                return [
                    type,
                    this._bin(length)
                ];
            // float
            case 0xca:
                value = this._view.getFloat32(this._offset);
                this._offset += 4;
                return value;
            case 0xcb:
                value = this._view.getFloat64(this._offset);
                this._offset += 8;
                return value;
            // uint
            case 0xcc:
                value = this._view.getUint8(this._offset);
                this._offset += 1;
                return value;
            case 0xcd:
                value = this._view.getUint16(this._offset);
                this._offset += 2;
                return value;
            case 0xce:
                value = this._view.getUint32(this._offset);
                this._offset += 4;
                return value;
            case 0xcf:
                hi = this._view.getUint32(this._offset) * Math.pow(2, 32);
                lo = this._view.getUint32(this._offset + 4);
                this._offset += 8;
                return hi + lo;
            // int
            case 0xd0:
                value = this._view.getInt8(this._offset);
                this._offset += 1;
                return value;
            case 0xd1:
                value = this._view.getInt16(this._offset);
                this._offset += 2;
                return value;
            case 0xd2:
                value = this._view.getInt32(this._offset);
                this._offset += 4;
                return value;
            case 0xd3:
                hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                lo = this._view.getUint32(this._offset + 4);
                this._offset += 8;
                return hi + lo;
            // fixext
            case 0xd4:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                if (type === 0x00) {
                    this._offset += 1;
                    return void 0;
                }
                return [
                    type,
                    this._bin(1)
                ];
            case 0xd5:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                return [
                    type,
                    this._bin(2)
                ];
            case 0xd6:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                return [
                    type,
                    this._bin(4)
                ];
            case 0xd7:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                if (type === 0x00) {
                    hi = this._view.getInt32(this._offset) * Math.pow(2, 32);
                    lo = this._view.getUint32(this._offset + 4);
                    this._offset += 8;
                    return new Date(hi + lo);
                }
                return [
                    type,
                    this._bin(8)
                ];
            case 0xd8:
                type = this._view.getInt8(this._offset);
                this._offset += 1;
                return [
                    type,
                    this._bin(16)
                ];
            // str
            case 0xd9:
                length = this._view.getUint8(this._offset);
                this._offset += 1;
                return this._str(length);
            case 0xda:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._str(length);
            case 0xdb:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._str(length);
            // array
            case 0xdc:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._array(length);
            case 0xdd:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._array(length);
            // map
            case 0xde:
                length = this._view.getUint16(this._offset);
                this._offset += 2;
                return this._map(length);
            case 0xdf:
                length = this._view.getUint32(this._offset);
                this._offset += 4;
                return this._map(length);
        }
        throw new Error("Could not parse");
    };
    function decode(buffer, offset) {
        if (offset === void 0) offset = 0;
        var decoder = new Decoder(buffer, offset);
        var value = decoder._parse();
        if (decoder._offset !== buffer.byteLength) throw new Error(buffer.byteLength - decoder._offset + " trailing bytes");
        return value;
    }
    // 
    // ENCODER
    // 
    function utf8Write(view, offset, str) {
        var c = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) view.setUint8(offset++, c);
            else if (c < 0x800) {
                view.setUint8(offset++, 0xc0 | c >> 6);
                view.setUint8(offset++, 0x80 | c & 0x3f);
            } else if (c < 0xd800 || c >= 0xe000) {
                view.setUint8(offset++, 0xe0 | c >> 12);
                view.setUint8(offset++, 0x80 | c >> 6 & 0x3f);
                view.setUint8(offset++, 0x80 | c & 0x3f);
            } else {
                i++;
                c = 0x10000 + ((c & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                view.setUint8(offset++, 0xf0 | c >> 18);
                view.setUint8(offset++, 0x80 | c >> 12 & 0x3f);
                view.setUint8(offset++, 0x80 | c >> 6 & 0x3f);
                view.setUint8(offset++, 0x80 | c & 0x3f);
            }
        }
    }
    function utf8Length$1(str) {
        var c = 0, length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) length += 1;
            else if (c < 0x800) length += 2;
            else if (c < 0xd800 || c >= 0xe000) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length;
    }
    function _encode(bytes, defers, value) {
        var type = typeof value, i = 0, l = 0, hi = 0, lo = 0, length = 0, size = 0;
        if (type === "string") {
            length = utf8Length$1(value);
            // fixstr
            if (length < 0x20) {
                bytes.push(length | 0xa0);
                size = 1;
            } else if (length < 0x100) {
                bytes.push(0xd9, length);
                size = 2;
            } else if (length < 0x10000) {
                bytes.push(0xda, length >> 8, length);
                size = 3;
            } else if (length < 0x100000000) {
                bytes.push(0xdb, length >> 24, length >> 16, length >> 8, length);
                size = 5;
            } else throw new Error("String too long");
            defers.push({
                _str: value,
                _length: length,
                _offset: bytes.length
            });
            return size + length;
        }
        if (type === "number") {
            // TODO: encode to float 32?
            // float 64
            if (Math.floor(value) !== value || !isFinite(value)) {
                bytes.push(0xcb);
                defers.push({
                    _float: value,
                    _length: 8,
                    _offset: bytes.length
                });
                return 9;
            }
            if (value >= 0) {
                // positive fixnum
                if (value < 0x80) {
                    bytes.push(value);
                    return 1;
                }
                // uint 8
                if (value < 0x100) {
                    bytes.push(0xcc, value);
                    return 2;
                }
                // uint 16
                if (value < 0x10000) {
                    bytes.push(0xcd, value >> 8, value);
                    return 3;
                }
                // uint 32
                if (value < 0x100000000) {
                    bytes.push(0xce, value >> 24, value >> 16, value >> 8, value);
                    return 5;
                }
                // uint 64
                hi = value / Math.pow(2, 32) >> 0;
                lo = value >>> 0;
                bytes.push(0xcf, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                return 9;
            } else {
                // negative fixnum
                if (value >= -32) {
                    bytes.push(value);
                    return 1;
                }
                // int 8
                if (value >= -128) {
                    bytes.push(0xd0, value);
                    return 2;
                }
                // int 16
                if (value >= -32768) {
                    bytes.push(0xd1, value >> 8, value);
                    return 3;
                }
                // int 32
                if (value >= -2147483648) {
                    bytes.push(0xd2, value >> 24, value >> 16, value >> 8, value);
                    return 5;
                }
                // int 64
                hi = Math.floor(value / Math.pow(2, 32));
                lo = value >>> 0;
                bytes.push(0xd3, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                return 9;
            }
        }
        if (type === "object") {
            // nil
            if (value === null) {
                bytes.push(0xc0);
                return 1;
            }
            if (Array.isArray(value)) {
                length = value.length;
                // fixarray
                if (length < 0x10) {
                    bytes.push(length | 0x90);
                    size = 1;
                } else if (length < 0x10000) {
                    bytes.push(0xdc, length >> 8, length);
                    size = 3;
                } else if (length < 0x100000000) {
                    bytes.push(0xdd, length >> 24, length >> 16, length >> 8, length);
                    size = 5;
                } else throw new Error("Array too large");
                for(i = 0; i < length; i++)size += _encode(bytes, defers, value[i]);
                return size;
            }
            // fixext 8 / Date
            if (value instanceof Date) {
                var time = value.getTime();
                hi = Math.floor(time / Math.pow(2, 32));
                lo = time >>> 0;
                bytes.push(0xd7, 0, hi >> 24, hi >> 16, hi >> 8, hi, lo >> 24, lo >> 16, lo >> 8, lo);
                return 10;
            }
            if (value instanceof ArrayBuffer) {
                length = value.byteLength;
                // bin 8
                if (length < 0x100) {
                    bytes.push(0xc4, length);
                    size = 2;
                } else // bin 16
                if (length < 0x10000) {
                    bytes.push(0xc5, length >> 8, length);
                    size = 3;
                } else // bin 32
                if (length < 0x100000000) {
                    bytes.push(0xc6, length >> 24, length >> 16, length >> 8, length);
                    size = 5;
                } else throw new Error("Buffer too large");
                defers.push({
                    _bin: value,
                    _length: length,
                    _offset: bytes.length
                });
                return size + length;
            }
            if (typeof value.toJSON === "function") return _encode(bytes, defers, value.toJSON());
            var keys = [], key = "";
            var allKeys = Object.keys(value);
            for(i = 0, l = allKeys.length; i < l; i++){
                key = allKeys[i];
                if (typeof value[key] !== "function") keys.push(key);
            }
            length = keys.length;
            // fixmap
            if (length < 0x10) {
                bytes.push(length | 0x80);
                size = 1;
            } else if (length < 0x10000) {
                bytes.push(0xde, length >> 8, length);
                size = 3;
            } else if (length < 0x100000000) {
                bytes.push(0xdf, length >> 24, length >> 16, length >> 8, length);
                size = 5;
            } else throw new Error("Object too large");
            for(i = 0; i < length; i++){
                key = keys[i];
                size += _encode(bytes, defers, key);
                size += _encode(bytes, defers, value[key]);
            }
            return size;
        }
        // false/true
        if (type === "boolean") {
            bytes.push(value ? 0xc3 : 0xc2);
            return 1;
        }
        // fixext 1 / undefined
        if (type === "undefined") {
            bytes.push(0xd4, 0, 0);
            return 3;
        }
        throw new Error("Could not encode");
    }
    function encode(value) {
        var bytes = [];
        var defers = [];
        var size = _encode(bytes, defers, value);
        var buf = new ArrayBuffer(size);
        var view = new DataView(buf);
        var deferIndex = 0;
        var deferWritten = 0;
        var nextOffset = -1;
        if (defers.length > 0) nextOffset = defers[0]._offset;
        var defer, deferLength = 0, offset = 0;
        for(var i = 0, l = bytes.length; i < l; i++){
            view.setUint8(deferWritten + i, bytes[i]);
            if (i + 1 !== nextOffset) continue;
            defer = defers[deferIndex];
            deferLength = defer._length;
            offset = deferWritten + nextOffset;
            if (defer._bin) {
                var bin = new Uint8Array(defer._bin);
                for(var j = 0; j < deferLength; j++)view.setUint8(offset + j, bin[j]);
            } else if (defer._str) utf8Write(view, offset, defer._str);
            else if (defer._float !== undefined) view.setFloat64(offset, defer._float);
            deferIndex++;
            deferWritten += deferLength;
            if (defers[deferIndex]) nextOffset = defers[deferIndex]._offset;
        }
        return buf;
    }
    var browser = function() {
        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object");
    };
    var WebSocket = globalThis.WebSocket || browser;
    var WebSocketTransport = /** @class */ function() {
        function WebSocketTransport(events) {
            this.events = events;
        }
        WebSocketTransport.prototype.send = function(data) {
            if (data instanceof ArrayBuffer) this.ws.send(data);
            else if (Array.isArray(data)) this.ws.send(new Uint8Array(data).buffer);
        };
        WebSocketTransport.prototype.connect = function(url) {
            this.ws = new WebSocket(url, this.protocols);
            this.ws.binaryType = "arraybuffer";
            this.ws.onopen = this.events.onopen;
            this.ws.onmessage = this.events.onmessage;
            this.ws.onclose = this.events.onclose;
            this.ws.onerror = this.events.onerror;
        };
        WebSocketTransport.prototype.close = function(code, reason) {
            this.ws.close(code, reason);
        };
        return WebSocketTransport;
    }();
    var Connection = /** @class */ function() {
        function Connection() {
            this.events = {};
            this.transport = new WebSocketTransport(this.events);
        }
        Connection.prototype.send = function(data) {
            this.transport.send(data);
        };
        Connection.prototype.connect = function(url) {
            this.transport.connect(url);
        };
        Connection.prototype.close = function(code, reason) {
            this.transport.close(code, reason);
        };
        return Connection;
    }();
    var serializers = {};
    function registerSerializer(id, serializer) {
        serializers[id] = serializer;
    }
    function getSerializer(id) {
        var serializer = serializers[id];
        if (!serializer) throw new Error("missing serializer: " + id);
        return serializer;
    }
    // Use codes between 0~127 for lesser throughput (1 byte)
    exports1.Protocol = void 0;
    (function(Protocol) {
        // Room-related (10~19)
        Protocol[Protocol["HANDSHAKE"] = 9] = "HANDSHAKE";
        Protocol[Protocol["JOIN_ROOM"] = 10] = "JOIN_ROOM";
        Protocol[Protocol["ERROR"] = 11] = "ERROR";
        Protocol[Protocol["LEAVE_ROOM"] = 12] = "LEAVE_ROOM";
        Protocol[Protocol["ROOM_DATA"] = 13] = "ROOM_DATA";
        Protocol[Protocol["ROOM_STATE"] = 14] = "ROOM_STATE";
        Protocol[Protocol["ROOM_STATE_PATCH"] = 15] = "ROOM_STATE_PATCH";
        Protocol[Protocol["ROOM_DATA_SCHEMA"] = 16] = "ROOM_DATA_SCHEMA";
    })(exports1.Protocol || (exports1.Protocol = {}));
    exports1.ErrorCode = void 0;
    (function(ErrorCode) {
        ErrorCode[ErrorCode["MATCHMAKE_NO_HANDLER"] = 4210] = "MATCHMAKE_NO_HANDLER";
        ErrorCode[ErrorCode["MATCHMAKE_INVALID_CRITERIA"] = 4211] = "MATCHMAKE_INVALID_CRITERIA";
        ErrorCode[ErrorCode["MATCHMAKE_INVALID_ROOM_ID"] = 4212] = "MATCHMAKE_INVALID_ROOM_ID";
        ErrorCode[ErrorCode["MATCHMAKE_UNHANDLED"] = 4213] = "MATCHMAKE_UNHANDLED";
        ErrorCode[ErrorCode["MATCHMAKE_EXPIRED"] = 4214] = "MATCHMAKE_EXPIRED";
        ErrorCode[ErrorCode["AUTH_FAILED"] = 4215] = "AUTH_FAILED";
        ErrorCode[ErrorCode["APPLICATION_ERROR"] = 4216] = "APPLICATION_ERROR";
    })(exports1.ErrorCode || (exports1.ErrorCode = {}));
    function utf8Read(view, offset) {
        var length = view[offset++];
        var string = "", chr = 0;
        for(var i = offset, end = offset + length; i < end; i++){
            var byte = view[i];
            if ((byte & 0x80) === 0x00) {
                string += String.fromCharCode(byte);
                continue;
            }
            if ((byte & 0xe0) === 0xc0) {
                string += String.fromCharCode((byte & 0x1f) << 6 | view[++i] & 0x3f);
                continue;
            }
            if ((byte & 0xf0) === 0xe0) {
                string += String.fromCharCode((byte & 0x0f) << 12 | (view[++i] & 0x3f) << 6 | (view[++i] & 0x3f) << 0);
                continue;
            }
            if ((byte & 0xf8) === 0xf0) {
                chr = (byte & 0x07) << 18 | (view[++i] & 0x3f) << 12 | (view[++i] & 0x3f) << 6 | (view[++i] & 0x3f) << 0;
                if (chr >= 0x010000) {
                    chr -= 0x010000;
                    string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                } else string += String.fromCharCode(chr);
                continue;
            }
            throw new Error("Invalid byte " + byte.toString(16));
        }
        return string;
    }
    // Faster for short strings than Buffer.byteLength
    function utf8Length(str) {
        if (str === void 0) str = "";
        var c = 0;
        var length = 0;
        for(var i = 0, l = str.length; i < l; i++){
            c = str.charCodeAt(i);
            if (c < 0x80) length += 1;
            else if (c < 0x800) length += 2;
            else if (c < 0xd800 || c >= 0xe000) length += 3;
            else {
                i++;
                length += 4;
            }
        }
        return length + 1;
    }
    let createNanoEvents = ()=>({
            events: {},
            emit (event, ...args) {
                (this.events[event] || []).forEach((i)=>i(...args));
            },
            on (event, cb) {
                (this.events[event] = this.events[event] || []).push(cb);
                return ()=>this.events[event] = (this.events[event] || []).filter((i)=>i !== cb);
            }
        });
    var EventEmitter = /** @class */ function() {
        function EventEmitter() {
            this.handlers = [];
        }
        EventEmitter.prototype.register = function(cb, once) {
            this.handlers.push(cb);
            return this;
        };
        EventEmitter.prototype.invoke = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            this.handlers.forEach(function(handler) {
                return handler.apply(_this, args);
            });
        };
        EventEmitter.prototype.invokeAsync = function() {
            var _this = this;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return Promise.all(this.handlers.map(function(handler) {
                return handler.apply(_this, args);
            }));
        };
        EventEmitter.prototype.remove = function(cb) {
            var index = this.handlers.indexOf(cb);
            this.handlers[index] = this.handlers[this.handlers.length - 1];
            this.handlers.pop();
        };
        EventEmitter.prototype.clear = function() {
            this.handlers = [];
        };
        return EventEmitter;
    }();
    function createSignal() {
        var emitter = new EventEmitter();
        function register(cb) {
            return emitter.register(cb, this === null);
        }
        register.once = function(cb) {
            var callback = function() {
                var args = [];
                for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                cb.apply(this, args);
                emitter.remove(callback);
            };
            emitter.register(callback);
        };
        register.remove = function(cb) {
            return emitter.remove(cb);
        };
        register.invoke = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return emitter.invoke.apply(emitter, args);
        };
        register.invokeAsync = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return emitter.invokeAsync.apply(emitter, args);
        };
        register.clear = function() {
            return emitter.clear();
        };
        return register;
    }
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function createCommonjsModule(fn) {
        var module = {
            exports: {}
        };
        return fn(module, module.exports), module.exports;
    }
    var umd = createCommonjsModule(function(module, exports1) {
        (function(global, factory) {
            factory(exports1);
        })(commonjsGlobal, function(exports1) {
            /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.

        Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.

        THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(d, b) {
                    d.__proto__ = b;
                } || function(d, b) {
                    for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                extendStatics(d, b);
                function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __spreadArray(to, from) {
                for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
                return to;
            }
            // export const SWITCH_TO_STRUCTURE = 193; (easily collides with DELETE_AND_ADD + fieldIndex = 2)
            var SWITCH_TO_STRUCTURE = 255; // (decoding collides with DELETE_AND_ADD + fieldIndex = 63)
            var TYPE_ID = 213;
            /**
         * Encoding Schema field operations.
         */ exports1.OPERATION = void 0;
            (function(OPERATION) {
                // add new structure/primitive
                OPERATION[OPERATION["ADD"] = 128] = "ADD";
                // replace structure/primitive
                OPERATION[OPERATION["REPLACE"] = 0] = "REPLACE";
                // delete field
                OPERATION[OPERATION["DELETE"] = 64] = "DELETE";
                // DELETE field, followed by an ADD
                OPERATION[OPERATION["DELETE_AND_ADD"] = 192] = "DELETE_AND_ADD";
                // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
                // touches are NOT encoded.
                OPERATION[OPERATION["TOUCH"] = 1] = "TOUCH";
                // MapSchema Operations
                OPERATION[OPERATION["CLEAR"] = 10] = "CLEAR";
            })(exports1.OPERATION || (exports1.OPERATION = {}));
            // export enum OPERATION {
            //     // add new structure/primitive
            //     // (128)
            //     ADD = 128, // 10000000,
            //     // replace structure/primitive
            //     REPLACE = 1,// 00000001
            //     // delete field
            //     DELETE = 192, // 11000000
            //     // DELETE field, followed by an ADD
            //     DELETE_AND_ADD = 224, // 11100000
            //     // TOUCH is used to determine hierarchy of nested Schema structures during serialization.
            //     // touches are NOT encoded.
            //     TOUCH = 0, // 00000000
            //     // MapSchema Operations
            //     CLEAR = 10,
            // }
            //
            // Root holds all schema references by unique id
            //
            var Root = /** @class */ function() {
                function Root() {
                    //
                    // Relation of refId => Schema structure
                    // For direct access of structures during decoding time.
                    //
                    this.refs = new Map();
                    this.refCounts = {};
                    this.deletedRefs = new Set();
                    this.nextUniqueId = 0;
                }
                Root.prototype.getNextUniqueId = function() {
                    return this.nextUniqueId++;
                };
                // for decoding
                Root.prototype.addRef = function(refId, ref, incrementCount) {
                    if (incrementCount === void 0) incrementCount = true;
                    this.refs.set(refId, ref);
                    if (incrementCount) this.refCounts[refId] = (this.refCounts[refId] || 0) + 1;
                };
                // for decoding
                Root.prototype.removeRef = function(refId) {
                    this.refCounts[refId] = this.refCounts[refId] - 1;
                    this.deletedRefs.add(refId);
                };
                Root.prototype.clearRefs = function() {
                    this.refs.clear();
                    this.deletedRefs.clear();
                    this.refCounts = {};
                };
                // for decoding
                Root.prototype.garbageCollectDeletedRefs = function() {
                    var _this = this;
                    this.deletedRefs.forEach(function(refId) {
                        if (_this.refCounts[refId] <= 0) {
                            var ref = _this.refs.get(refId);
                            //
                            // Ensure child schema instances have their references removed as well.
                            //
                            if (ref instanceof Schema) {
                                for(var fieldName in ref["_definition"].schema)if (typeof ref["_definition"].schema[fieldName] !== "string" && ref[fieldName] && ref[fieldName]["$changes"]) _this.removeRef(ref[fieldName]["$changes"].refId);
                            } else {
                                var definition = ref["$changes"].parent._definition;
                                var type = definition.schema[definition.fieldsByIndex[ref["$changes"].parentIndex]];
                                if (typeof Object.values(type)[0] === "function") Array.from(ref.values()).forEach(function(child) {
                                    return _this.removeRef(child["$changes"].refId);
                                });
                            }
                            _this.refs.delete(refId);
                            delete _this.refCounts[refId];
                        }
                    });
                    // clear deleted refs.
                    this.deletedRefs.clear();
                };
                return Root;
            }();
            var ChangeTree = /** @class */ function() {
                function ChangeTree(ref, parent, root) {
                    this.changed = false;
                    this.changes = new Map();
                    this.allChanges = new Set();
                    // cached indexes for filtering
                    this.caches = {};
                    this.currentCustomOperation = 0;
                    this.ref = ref;
                    this.setParent(parent, root);
                }
                ChangeTree.prototype.setParent = function(parent, root, parentIndex) {
                    var _this = this;
                    if (!this.indexes) this.indexes = this.ref instanceof Schema ? this.ref["_definition"].indexes : {};
                    this.parent = parent;
                    this.parentIndex = parentIndex;
                    // avoid setting parents with empty `root`
                    if (!root) return;
                    this.root = root;
                    //
                    // assign same parent on child structures
                    //
                    if (this.ref instanceof Schema) {
                        var definition = this.ref["_definition"];
                        for(var field in definition.schema){
                            var value = this.ref[field];
                            if (value && value["$changes"]) {
                                var parentIndex_1 = definition.indexes[field];
                                value["$changes"].setParent(this.ref, root, parentIndex_1);
                            }
                        }
                    } else if (typeof this.ref === "object") this.ref.forEach(function(value, key) {
                        if (value instanceof Schema) {
                            var changeTreee = value["$changes"];
                            var parentIndex_2 = _this.ref["$changes"].indexes[key];
                            changeTreee.setParent(_this.ref, _this.root, parentIndex_2);
                        }
                    });
                };
                ChangeTree.prototype.operation = function(op) {
                    this.changes.set(--this.currentCustomOperation, op);
                };
                ChangeTree.prototype.change = function(fieldName, operation) {
                    if (operation === void 0) operation = exports1.OPERATION.ADD;
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    this.assertValidIndex(index, fieldName);
                    var previousChange = this.changes.get(index);
                    if (!previousChange || previousChange.op === exports1.OPERATION.DELETE || previousChange.op === exports1.OPERATION.TOUCH // (mazmorra.io's BattleAction issue)
                    ) this.changes.set(index, {
                        op: !previousChange ? operation : previousChange.op === exports1.OPERATION.DELETE ? exports1.OPERATION.DELETE_AND_ADD : operation,
                        // : OPERATION.REPLACE,
                        index: index
                    });
                    this.allChanges.add(index);
                    this.changed = true;
                    this.touchParents();
                };
                ChangeTree.prototype.touch = function(fieldName) {
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    this.assertValidIndex(index, fieldName);
                    if (!this.changes.has(index)) this.changes.set(index, {
                        op: exports1.OPERATION.TOUCH,
                        index: index
                    });
                    this.allChanges.add(index);
                    // ensure touch is placed until the $root is found.
                    this.touchParents();
                };
                ChangeTree.prototype.touchParents = function() {
                    if (this.parent) this.parent["$changes"].touch(this.parentIndex);
                };
                ChangeTree.prototype.getType = function(index) {
                    if (this.ref["_definition"]) {
                        var definition = this.ref["_definition"];
                        return definition.schema[definition.fieldsByIndex[index]];
                    } else {
                        var definition = this.parent["_definition"];
                        var parentType = definition.schema[definition.fieldsByIndex[this.parentIndex]];
                        //
                        // Get the child type from parent structure.
                        // - ["string"] => "string"
                        // - { map: "string" } => "string"
                        // - { set: "string" } => "string"
                        //
                        return Object.values(parentType)[0];
                    }
                };
                ChangeTree.prototype.getChildrenFilter = function() {
                    var childFilters = this.parent["_definition"].childFilters;
                    return childFilters && childFilters[this.parentIndex];
                };
                //
                // used during `.encode()`
                //
                ChangeTree.prototype.getValue = function(index) {
                    return this.ref["getByIndex"](index);
                };
                ChangeTree.prototype.delete = function(fieldName) {
                    var index = typeof fieldName === "number" ? fieldName : this.indexes[fieldName];
                    if (index === undefined) {
                        console.warn("@colyseus/schema " + this.ref.constructor.name + ": trying to delete non-existing index: " + fieldName + " (" + index + ")");
                        return;
                    }
                    var previousValue = this.getValue(index);
                    // console.log("$changes.delete =>", { fieldName, index, previousValue });
                    this.changes.set(index, {
                        op: exports1.OPERATION.DELETE,
                        index: index
                    });
                    this.allChanges.delete(index);
                    // delete cache
                    delete this.caches[index];
                    // remove `root` reference
                    if (previousValue && previousValue["$changes"]) previousValue["$changes"].parent = undefined;
                    this.changed = true;
                    this.touchParents();
                };
                ChangeTree.prototype.discard = function(changed, discardAll) {
                    var _this = this;
                    if (changed === void 0) changed = false;
                    if (discardAll === void 0) discardAll = false;
                    //
                    // Map, Array, etc:
                    // Remove cached key to ensure ADD operations is unsed instead of
                    // REPLACE in case same key is used on next patches.
                    //
                    // TODO: refactor this. this is not relevant for Collection and Set.
                    //
                    if (!(this.ref instanceof Schema)) this.changes.forEach(function(change) {
                        if (change.op === exports1.OPERATION.DELETE) {
                            var index = _this.ref["getIndex"](change.index);
                            delete _this.indexes[index];
                        }
                    });
                    this.changes.clear();
                    this.changed = changed;
                    if (discardAll) this.allChanges.clear();
                    // re-set `currentCustomOperation`
                    this.currentCustomOperation = 0;
                };
                /**
             * Recursively discard all changes from this, and child structures.
             */ ChangeTree.prototype.discardAll = function() {
                    var _this = this;
                    this.changes.forEach(function(change) {
                        var value = _this.getValue(change.index);
                        if (value && value["$changes"]) value["$changes"].discardAll();
                    });
                    this.discard();
                };
                // cache(field: number, beginIndex: number, endIndex: number) {
                ChangeTree.prototype.cache = function(field, cachedBytes) {
                    this.caches[field] = cachedBytes;
                };
                ChangeTree.prototype.clone = function() {
                    return new ChangeTree(this.ref, this.parent, this.root);
                };
                ChangeTree.prototype.ensureRefId = function() {
                    // skip if refId is already set.
                    if (this.refId !== undefined) return;
                    this.refId = this.root.getNextUniqueId();
                };
                ChangeTree.prototype.assertValidIndex = function(index, fieldName) {
                    if (index === undefined) throw new Error('ChangeTree: missing index for field "' + fieldName + '"');
                };
                return ChangeTree;
            }();
            //
            // Notes:
            // -----
            //
            // - The tsconfig.json of @colyseus/schema uses ES2018.
            // - ES2019 introduces `flatMap` / `flat`, which is not currently relevant, and caused other issues.
            //
            var DEFAULT_SORT = function(a, b) {
                var A = a.toString();
                var B = b.toString();
                if (A < B) return -1;
                else if (A > B) return 1;
                else return 0;
            };
            function getArrayProxy(value) {
                value["$proxy"] = true;
                //
                // compatibility with @colyseus/schema 0.5.x
                // - allow `map["key"]`
                // - allow `map["key"] = "xxx"`
                // - allow `delete map["key"]`
                //
                value = new Proxy(value, {
                    get: function(obj, prop) {
                        if (typeof prop !== "symbol" && !isNaN(prop) // https://stackoverflow.com/a/175787/892698
                        ) return obj.at(prop);
                        else return obj[prop];
                    },
                    set: function(obj, prop, setValue) {
                        if (typeof prop !== "symbol" && !isNaN(prop)) {
                            var indexes = Array.from(obj["$items"].keys());
                            var key = parseInt(indexes[prop] || prop);
                            if (setValue === undefined || setValue === null) obj.deleteAt(key);
                            else obj.setAt(key, setValue);
                        } else obj[prop] = setValue;
                        return true;
                    },
                    deleteProperty: function(obj, prop) {
                        if (typeof prop === "number") obj.deleteAt(prop);
                        else delete obj[prop];
                        return true;
                    }
                });
                return value;
            }
            var ArraySchema = /** @class */ function() {
                function ArraySchema() {
                    var items = [];
                    for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    this.push.apply(this, items);
                }
                ArraySchema.is = function(type) {
                    return(// type format: ["string"]
                    Array.isArray(type) || type["array"] !== undefined);
                };
                Object.defineProperty(ArraySchema.prototype, "length", {
                    get: function() {
                        return this.$items.size;
                    },
                    set: function(value) {
                        if (value === 0) this.clear();
                        else this.splice(value, this.length - value);
                    },
                    enumerable: false,
                    configurable: true
                });
                ArraySchema.prototype.push = function() {
                    var _this = this;
                    var values = [];
                    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
                    var lastIndex;
                    values.forEach(function(value) {
                        // set "index" for reference.
                        lastIndex = _this.$refId++;
                        _this.setAt(lastIndex, value);
                    });
                    return lastIndex;
                };
                /**
             * Removes the last element from an array and returns it.
             */ ArraySchema.prototype.pop = function() {
                    var key = Array.from(this.$indexes.values()).pop();
                    if (key === undefined) return undefined;
                    this.$changes.delete(key);
                    this.$indexes.delete(key);
                    var value = this.$items.get(key);
                    this.$items.delete(key);
                    return value;
                };
                ArraySchema.prototype.at = function(index) {
                    //
                    // FIXME: this should be O(1)
                    //
                    var key = Array.from(this.$items.keys())[index];
                    return this.$items.get(key);
                };
                ArraySchema.prototype.setAt = function(index, value) {
                    var _a, _b;
                    if (value["$changes"] !== undefined) value["$changes"].setParent(this, this.$changes.root, index);
                    var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports1.OPERATION.ADD;
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index, operation);
                };
                ArraySchema.prototype.deleteAt = function(index) {
                    var key = Array.from(this.$items.keys())[index];
                    if (key === undefined) return false;
                    return this.$deleteAt(key);
                };
                ArraySchema.prototype.$deleteAt = function(index) {
                    // delete at internal index
                    this.$changes.delete(index);
                    this.$indexes.delete(index);
                    return this.$items.delete(index);
                };
                ArraySchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item["$changes"].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports1.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                /**
             * Combines two or more arrays.
             * @param items Additional items to add to the end of array1.
             */ ArraySchema.prototype.concat = function() {
                    var _a;
                    var items = [];
                    for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
                    return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], (_a = Array.from(this.$items.values())).concat.apply(_a, items))))();
                };
                /**
             * Adds all the elements of an array separated by the specified separator string.
             * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
             */ ArraySchema.prototype.join = function(separator) {
                    return Array.from(this.$items.values()).join(separator);
                };
                /**
             * Reverses the elements in an Array.
             */ ArraySchema.prototype.reverse = function() {
                    var _this = this;
                    var indexes = Array.from(this.$items.keys());
                    var reversedItems = Array.from(this.$items.values()).reverse();
                    reversedItems.forEach(function(item, i) {
                        _this.setAt(indexes[i], item);
                    });
                    return this;
                };
                /**
             * Removes the first element from an array and returns it.
             */ ArraySchema.prototype.shift = function() {
                    var indexes = Array.from(this.$items.keys());
                    var shiftAt = indexes.shift();
                    if (shiftAt === undefined) return undefined;
                    var value = this.$items.get(shiftAt);
                    this.$deleteAt(shiftAt);
                    return value;
                };
                /**
             * Returns a section of an array.
             * @param start The beginning of the specified portion of the array.
             * @param end The end of the specified portion of the array. This is exclusive of the element at the index 'end'.
             */ ArraySchema.prototype.slice = function(start, end) {
                    return new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], Array.from(this.$items.values()).slice(start, end))))();
                };
                /**
             * Sorts an array.
             * @param compareFn Function used to determine the order of the elements. It is expected to return
             * a negative value if first argument is less than second argument, zero if they're equal and a positive
             * value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
             * ```ts
             * [11,2,22,1].sort((a, b) => a - b)
             * ```
             */ ArraySchema.prototype.sort = function(compareFn) {
                    var _this = this;
                    if (compareFn === void 0) compareFn = DEFAULT_SORT;
                    var indexes = Array.from(this.$items.keys());
                    var sortedItems = Array.from(this.$items.values()).sort(compareFn);
                    sortedItems.forEach(function(item, i) {
                        _this.setAt(indexes[i], item);
                    });
                    return this;
                };
                /**
             * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
             * @param start The zero-based location in the array from which to start removing elements.
             * @param deleteCount The number of elements to remove.
             * @param items Elements to insert into the array in place of the deleted elements.
             */ ArraySchema.prototype.splice = function(start, deleteCount) {
                    if (deleteCount === void 0) deleteCount = this.length - start;
                    var items = [];
                    for(var _i = 2; _i < arguments.length; _i++)items[_i - 2] = arguments[_i];
                    var indexes = Array.from(this.$items.keys());
                    var removedItems = [];
                    for(var i = start; i < start + deleteCount; i++){
                        removedItems.push(this.$items.get(indexes[i]));
                        this.$deleteAt(indexes[i]);
                    }
                    return removedItems;
                };
                /**
             * Inserts new elements at the start of an array.
             * @param items  Elements to insert at the start of the Array.
             */ ArraySchema.prototype.unshift = function() {
                    var _this = this;
                    var items = [];
                    for(var _i = 0; _i < arguments.length; _i++)items[_i] = arguments[_i];
                    var length = this.length;
                    var addedLength = items.length;
                    // const indexes = Array.from(this.$items.keys());
                    var previousValues = Array.from(this.$items.values());
                    items.forEach(function(item, i) {
                        _this.setAt(i, item);
                    });
                    previousValues.forEach(function(previousValue, i) {
                        _this.setAt(addedLength + i, previousValue);
                    });
                    return length + addedLength;
                };
                /**
             * Returns the index of the first occurrence of a value in an array.
             * @param searchElement The value to locate in the array.
             * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
             */ ArraySchema.prototype.indexOf = function(searchElement, fromIndex) {
                    return Array.from(this.$items.values()).indexOf(searchElement, fromIndex);
                };
                /**
             * Returns the index of the last occurrence of a specified value in an array.
             * @param searchElement The value to locate in the array.
             * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
             */ ArraySchema.prototype.lastIndexOf = function(searchElement, fromIndex) {
                    if (fromIndex === void 0) fromIndex = this.length - 1;
                    return Array.from(this.$items.values()).lastIndexOf(searchElement, fromIndex);
                };
                /**
             * Determines whether all the members of an array satisfy the specified test.
             * @param callbackfn A function that accepts up to three arguments. The every method calls
             * the callbackfn function for each element in the array until the callbackfn returns a value
             * which is coercible to the Boolean value false, or until the end of the array.
             * @param thisArg An object to which the this keyword can refer in the callbackfn function.
             * If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.every = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).every(callbackfn, thisArg);
                };
                /**
             * Determines whether the specified callback function returns true for any element of an array.
             * @param callbackfn A function that accepts up to three arguments. The some method calls
             * the callbackfn function for each element in the array until the callbackfn returns a value
             * which is coercible to the Boolean value true, or until the end of the array.
             * @param thisArg An object to which the this keyword can refer in the callbackfn function.
             * If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.some = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).some(callbackfn, thisArg);
                };
                /**
             * Performs the specified action for each element in an array.
             * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
             * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.forEach = function(callbackfn, thisArg) {
                    Array.from(this.$items.values()).forEach(callbackfn, thisArg);
                };
                /**
             * Calls a defined callback function on each element of an array, and returns an array that contains the results.
             * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
             * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
             */ ArraySchema.prototype.map = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).map(callbackfn, thisArg);
                };
                ArraySchema.prototype.filter = function(callbackfn, thisArg) {
                    return Array.from(this.$items.values()).filter(callbackfn, thisArg);
                };
                /**
             * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
             * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
             * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
             */ ArraySchema.prototype.reduce = function(callbackfn, initialValue) {
                    return Array.from(this.$items.values()).reduce(callbackfn, initialValue);
                };
                /**
             * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
             * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.
             * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
             */ ArraySchema.prototype.reduceRight = function(callbackfn, initialValue) {
                    return Array.from(this.$items.values()).reduceRight(callbackfn, initialValue);
                };
                /**
             * Returns the value of the first element in the array where predicate is true, and undefined
             * otherwise.
             * @param predicate find calls predicate once for each element of the array, in ascending
             * order, until it finds one where predicate returns true. If such an element is found, find
             * immediately returns that element value. Otherwise, find returns undefined.
             * @param thisArg If provided, it will be used as the this value for each invocation of
             * predicate. If it is not provided, undefined is used instead.
             */ ArraySchema.prototype.find = function(predicate, thisArg) {
                    return Array.from(this.$items.values()).find(predicate, thisArg);
                };
                /**
             * Returns the index of the first element in the array where predicate is true, and -1
             * otherwise.
             * @param predicate find calls predicate once for each element of the array, in ascending
             * order, until it finds one where predicate returns true. If such an element is found,
             * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
             * @param thisArg If provided, it will be used as the this value for each invocation of
             * predicate. If it is not provided, undefined is used instead.
             */ ArraySchema.prototype.findIndex = function(predicate, thisArg) {
                    return Array.from(this.$items.values()).findIndex(predicate, thisArg);
                };
                /**
             * Returns the this object after filling the section identified by start and end with value
             * @param value value to fill array section with
             * @param start index to start filling the array at. If start is negative, it is treated as
             * length+start where length is the length of the array.
             * @param end index to stop filling the array at. If end is negative, it is treated as
             * length+end.
             */ ArraySchema.prototype.fill = function(value, start, end) {
                    //
                    // TODO
                    //
                    throw new Error("ArraySchema#fill() not implemented");
                };
                /**
             * Returns the this object after copying a section of the array identified by start and end
             * to the same array starting at position target
             * @param target If target is negative, it is treated as length+target where length is the
             * length of the array.
             * @param start If start is negative, it is treated as length+start. If end is negative, it
             * is treated as length+end.
             * @param end If not specified, length of the this object is used as its default value.
             */ ArraySchema.prototype.copyWithin = function(target, start, end) {
                    //
                    // TODO
                    //
                    throw new Error("ArraySchema#copyWithin() not implemented");
                };
                /**
             * Returns a string representation of an array.
             */ ArraySchema.prototype.toString = function() {
                    return this.$items.toString();
                };
                /**
             * Returns a string representation of an array. The elements are converted to string using their toLocalString methods.
             */ ArraySchema.prototype.toLocaleString = function() {
                    return this.$items.toLocaleString();
                };
                /** Iterator */ ArraySchema.prototype[Symbol.iterator] = function() {
                    return Array.from(this.$items.values())[Symbol.iterator]();
                };
                ArraySchema.prototype[Symbol.unscopables] = function() {
                    return this.$items[Symbol.unscopables]();
                };
                /**
             * Returns an iterable of key, value pairs for every entry in the array
             */ ArraySchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                /**
             * Returns an iterable of keys in the array
             */ ArraySchema.prototype.keys = function() {
                    return this.$items.keys();
                };
                /**
             * Returns an iterable of values in the array
             */ ArraySchema.prototype.values = function() {
                    return this.$items.values();
                };
                /**
             * Determines whether an array includes a certain element, returning true or false as appropriate.
             * @param searchElement The element to search for.
             * @param fromIndex The position in this array at which to begin searching for searchElement.
             */ ArraySchema.prototype.includes = function(searchElement, fromIndex) {
                    return Array.from(this.$items.values()).includes(searchElement, fromIndex);
                };
                /**
             * Calls a defined callback function on each element of an array. Then, flattens the result into
             * a new array.
             * This is identical to a map followed by flat with depth 1.
             *
             * @param callback A function that accepts up to three arguments. The flatMap method calls the
             * callback function one time for each element in the array.
             * @param thisArg An object to which the this keyword can refer in the callback function. If
             * thisArg is omitted, undefined is used as the this value.
             */ // @ts-ignore
                ArraySchema.prototype.flatMap = function(callback, thisArg) {
                    // @ts-ignore
                    throw new Error("ArraySchema#flatMap() is not supported.");
                };
                /**
             * Returns a new array with all sub-array elements concatenated into it recursively up to the
             * specified depth.
             *
             * @param depth The maximum recursion depth
             */ // @ts-ignore
                ArraySchema.prototype.flat = function(depth) {
                    // @ts-ignore
                    throw new Error("ArraySchema#flat() is not supported.");
                };
                // get size () {
                //     return this.$items.size;
                // }
                ArraySchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                ArraySchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                ArraySchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                ArraySchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                ArraySchema.prototype.toArray = function() {
                    return Array.from(this.$items.values());
                };
                ArraySchema.prototype.toJSON = function() {
                    return this.toArray().map(function(value) {
                        return typeof value["toJSON"] === "function" ? value["toJSON"]() : value;
                    });
                };
                //
                // Decoding utilities
                //
                ArraySchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], Array.from(this.$items.values()))))();
                    else cloned = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                        void 0
                    ], this.map(function(item) {
                        return item["$changes"] ? item.clone() : item;
                    }))))();
                    return cloned;
                };
                ArraySchema.prototype.triggerAll = function() {
                    Schema.prototype.triggerAll.apply(this);
                };
                return ArraySchema;
            }();
            function getMapProxy(value) {
                value["$proxy"] = true;
                value = new Proxy(value, {
                    get: function(obj, prop) {
                        if (typeof prop !== "symbol" && typeof obj[prop] === "undefined") return obj.get(prop);
                        else return obj[prop];
                    },
                    set: function(obj, prop, setValue) {
                        if (typeof prop !== "symbol" && prop.indexOf("$") === -1 && prop !== "onAdd" && prop !== "onRemove" && prop !== "onChange") obj.set(prop, setValue);
                        else obj[prop] = setValue;
                        return true;
                    },
                    deleteProperty: function(obj, prop) {
                        obj.delete(prop);
                        return true;
                    }
                });
                return value;
            }
            var MapSchema = /** @class */ function() {
                function MapSchema(initialValues) {
                    var _this = this;
                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    if (initialValues) {
                        if (initialValues instanceof Map) initialValues.forEach(function(v, k) {
                            return _this.set(k, v);
                        });
                        else for(var k in initialValues)this.set(k, initialValues[k]);
                    }
                }
                MapSchema.is = function(type) {
                    return type["map"] !== undefined;
                };
                /** Iterator */ MapSchema.prototype[Symbol.iterator] = function() {
                    return this.$items[Symbol.iterator]();
                };
                Object.defineProperty(MapSchema.prototype, Symbol.toStringTag, {
                    get: function() {
                        return this.$items[Symbol.toStringTag];
                    },
                    enumerable: false,
                    configurable: true
                });
                MapSchema.prototype.set = function(key, value) {
                    if (value === undefined || value === null) throw new Error("MapSchema#set('" + key + "', " + value + "): trying to set " + value + " value on '" + key + "'.");
                    // get "index" for this value.
                    var hasIndex = typeof this.$changes.indexes[key] !== "undefined";
                    var index = hasIndex ? this.$changes.indexes[key] : this.$refId++;
                    var operation = hasIndex ? exports1.OPERATION.REPLACE : exports1.OPERATION.ADD;
                    var isRef = value["$changes"] !== undefined;
                    if (isRef) value["$changes"].setParent(this, this.$changes.root, index);
                    //
                    // (encoding)
                    // set a unique id to relate directly with this key/value.
                    //
                    if (!hasIndex) {
                        this.$changes.indexes[key] = index;
                        this.$indexes.set(index, key);
                    } else if (isRef && this.$items.get(key) !== value) operation = exports1.OPERATION.ADD;
                    this.$items.set(key, value);
                    this.$changes.change(key, operation);
                    return this;
                };
                MapSchema.prototype.get = function(key) {
                    return this.$items.get(key);
                };
                MapSchema.prototype.delete = function(key) {
                    //
                    // TODO: add a "purge" method after .encode() runs, to cleanup removed `$indexes`
                    //
                    // We don't remove $indexes to allow setting the same key in the same patch
                    // (See "should allow to remove and set an item in the same place" test)
                    //
                    // // const index = this.$changes.indexes[key];
                    // // this.$indexes.delete(index);
                    this.$changes.delete(key);
                    return this.$items.delete(key);
                };
                MapSchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item["$changes"].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports1.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                MapSchema.prototype.has = function(key) {
                    return this.$items.has(key);
                };
                MapSchema.prototype.forEach = function(callbackfn) {
                    this.$items.forEach(callbackfn);
                };
                MapSchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                MapSchema.prototype.keys = function() {
                    return this.$items.keys();
                };
                MapSchema.prototype.values = function() {
                    return this.$items.values();
                };
                Object.defineProperty(MapSchema.prototype, "size", {
                    get: function() {
                        return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                MapSchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                MapSchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                MapSchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                MapSchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                MapSchema.prototype.toJSON = function() {
                    var map = {};
                    this.forEach(function(value, key) {
                        map[key] = typeof value["toJSON"] === "function" ? value["toJSON"]() : value;
                    });
                    return map;
                };
                //
                // Decoding utilities
                //
                MapSchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) // client-side
                    cloned = Object.assign(new MapSchema(), this);
                    else {
                        // server-side
                        cloned = new MapSchema();
                        this.forEach(function(value, key) {
                            if (value["$changes"]) cloned.set(key, value["clone"]());
                            else cloned.set(key, value);
                        });
                    }
                    return cloned;
                };
                MapSchema.prototype.triggerAll = function() {
                    Schema.prototype.triggerAll.apply(this);
                };
                return MapSchema;
            }();
            var registeredTypes = {};
            function registerType(identifier, definition) {
                registeredTypes[identifier] = definition;
            }
            function getType(identifier) {
                return registeredTypes[identifier];
            }
            var SchemaDefinition = /** @class */ function() {
                function SchemaDefinition() {
                    //
                    // TODO: use a "field" structure combining all these properties per-field.
                    //
                    this.indexes = {};
                    this.fieldsByIndex = {};
                    this.deprecated = {};
                    this.descriptors = {};
                }
                SchemaDefinition.create = function(parent) {
                    var definition = new SchemaDefinition();
                    // support inheritance
                    definition.schema = Object.assign({}, parent && parent.schema || {});
                    definition.indexes = Object.assign({}, parent && parent.indexes || {});
                    definition.fieldsByIndex = Object.assign({}, parent && parent.fieldsByIndex || {});
                    definition.descriptors = Object.assign({}, parent && parent.descriptors || {});
                    definition.deprecated = Object.assign({}, parent && parent.deprecated || {});
                    return definition;
                };
                SchemaDefinition.prototype.addField = function(field, type) {
                    var index = this.getNextFieldIndex();
                    this.fieldsByIndex[index] = field;
                    this.indexes[field] = index;
                    this.schema[field] = Array.isArray(type) ? {
                        array: type[0]
                    } : type;
                };
                SchemaDefinition.prototype.addFilter = function(field, cb) {
                    if (!this.filters) {
                        this.filters = {};
                        this.indexesWithFilters = [];
                    }
                    this.filters[this.indexes[field]] = cb;
                    this.indexesWithFilters.push(this.indexes[field]);
                    return true;
                };
                SchemaDefinition.prototype.addChildrenFilter = function(field, cb) {
                    var index = this.indexes[field];
                    var type = this.schema[field];
                    if (getType(Object.keys(type)[0])) {
                        if (!this.childFilters) this.childFilters = {};
                        this.childFilters[index] = cb;
                        return true;
                    } else console.warn("@filterChildren: field '" + field + "' can't have children. Ignoring filter.");
                };
                SchemaDefinition.prototype.getChildrenFilter = function(field) {
                    return this.childFilters && this.childFilters[this.indexes[field]];
                };
                SchemaDefinition.prototype.getNextFieldIndex = function() {
                    return Object.keys(this.schema || {}).length;
                };
                return SchemaDefinition;
            }();
            function hasFilter(klass) {
                return klass._context && klass._context.useFilters;
            }
            var Context = /** @class */ function() {
                function Context() {
                    this.types = {};
                    this.schemas = new Map();
                    this.useFilters = false;
                }
                Context.prototype.has = function(schema) {
                    return this.schemas.has(schema);
                };
                Context.prototype.get = function(typeid) {
                    return this.types[typeid];
                };
                Context.prototype.add = function(schema, typeid) {
                    if (typeid === void 0) typeid = this.schemas.size;
                    // FIXME: move this to somewhere else?
                    // support inheritance
                    schema._definition = SchemaDefinition.create(schema._definition);
                    schema._typeid = typeid;
                    this.types[typeid] = schema;
                    this.schemas.set(schema, typeid);
                };
                Context.create = function(context) {
                    if (context === void 0) context = new Context;
                    return function(definition) {
                        return type(definition, context);
                    };
                };
                return Context;
            }();
            var globalContext = new Context();
            /**
         * `@type()` decorator for proxies
         */ function type(type, context) {
                if (context === void 0) context = globalContext;
                return function(target, field) {
                    var constructor = target.constructor;
                    constructor._context = context;
                    /*
                 * static schema
                 */ if (!context.has(constructor)) context.add(constructor);
                    var definition = constructor._definition;
                    definition.addField(field, type);
                    /**
                 * skip if descriptor already exists for this field (`@deprecated()`)
                 */ if (definition.descriptors[field]) {
                        if (definition.deprecated[field]) // do not create accessors for deprecated properties.
                        return;
                        else // trying to define same property multiple times across inheritance.
                        // https://github.com/colyseus/colyseus-unity3d/issues/131#issuecomment-814308572
                        try {
                            throw new Error("@colyseus/schema: Duplicate '" + field + "' definition on '" + constructor.name + "'.\nCheck @type() annotation");
                        } catch (e) {
                            var definitionAtLine = e.stack.split("\n")[4].trim();
                            throw new Error(e.message + " " + definitionAtLine);
                        }
                    }
                    var isArray = ArraySchema.is(type);
                    var isMap = !isArray && MapSchema.is(type);
                    // TODO: refactor me.
                    // Allow abstract intermediary classes with no fields to be serialized
                    // (See "should support an inheritance with a Schema type without fields" test)
                    if (typeof type !== "string" && !Schema.is(type)) {
                        var childType = Object.values(type)[0];
                        if (typeof childType !== "string" && !context.has(childType)) context.add(childType);
                    }
                    var fieldCached = "_" + field;
                    definition.descriptors[fieldCached] = {
                        enumerable: false,
                        configurable: false,
                        writable: true
                    };
                    definition.descriptors[field] = {
                        get: function() {
                            return this[fieldCached];
                        },
                        set: function(value) {
                            /**
                         * Create Proxy for array or map items
                         */ // skip if value is the same as cached.
                            if (value === this[fieldCached]) return;
                            if (value !== undefined && value !== null) {
                                // automaticallty transform Array into ArraySchema
                                if (isArray && !(value instanceof ArraySchema)) value = new (ArraySchema.bind.apply(ArraySchema, __spreadArray([
                                    void 0
                                ], value)))();
                                // automaticallty transform Map into MapSchema
                                if (isMap && !(value instanceof MapSchema)) value = new MapSchema(value);
                                // try to turn provided structure into a Proxy
                                if (value["$proxy"] === undefined) {
                                    if (isMap) value = getMapProxy(value);
                                    else if (isArray) value = getArrayProxy(value);
                                }
                                // flag the change for encoding.
                                this.$changes.change(field);
                                //
                                // call setParent() recursively for this and its child
                                // structures.
                                //
                                if (value["$changes"]) value["$changes"].setParent(this, this.$changes.root, this._definition.indexes[field]);
                            } else //
                            // Setting a field to `null` or `undefined` will delete it.
                            //
                            this.$changes.delete(field);
                            this[fieldCached] = value;
                        },
                        enumerable: true,
                        configurable: true
                    };
                };
            }
            /**
         * `@filter()` decorator for defining data filters per client
         */ function filter(cb) {
                return function(target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    if (definition.addFilter(field, cb)) constructor._context.useFilters = true;
                };
            }
            function filterChildren(cb) {
                return function(target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    if (definition.addChildrenFilter(field, cb)) constructor._context.useFilters = true;
                };
            }
            /**
         * `@deprecated()` flag a field as deprecated.
         * The previous `@type()` annotation should remain along with this one.
         */ function deprecated(throws, context) {
                if (throws === void 0) throws = true;
                return function(target, field) {
                    var constructor = target.constructor;
                    var definition = constructor._definition;
                    definition.deprecated[field] = true;
                    if (throws) definition.descriptors[field] = {
                        get: function() {
                            throw new Error(field + " is deprecated.");
                        },
                        set: function(value) {},
                        enumerable: false,
                        configurable: true
                    };
                };
            }
            function defineTypes(target, fields, context) {
                if (context === void 0) context = target._context || globalContext;
                for(var field in fields)type(fields[field], context)(target.prototype, field);
                return target;
            }
            /**
         * Copyright (c) 2018 Endel Dreyer
         * Copyright (c) 2014 Ion Drive Software Ltd.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE
         */ /**
         * msgpack implementation highly based on notepack.io
         * https://github.com/darrachequesne/notepack
         */ function utf8Length(str) {
                var c = 0, length = 0;
                for(var i = 0, l = str.length; i < l; i++){
                    c = str.charCodeAt(i);
                    if (c < 0x80) length += 1;
                    else if (c < 0x800) length += 2;
                    else if (c < 0xd800 || c >= 0xe000) length += 3;
                    else {
                        i++;
                        length += 4;
                    }
                }
                return length;
            }
            function utf8Write(view, offset, str) {
                var c = 0;
                for(var i = 0, l = str.length; i < l; i++){
                    c = str.charCodeAt(i);
                    if (c < 0x80) view[offset++] = c;
                    else if (c < 0x800) {
                        view[offset++] = 0xc0 | c >> 6;
                        view[offset++] = 0x80 | c & 0x3f;
                    } else if (c < 0xd800 || c >= 0xe000) {
                        view[offset++] = 0xe0 | c >> 12;
                        view[offset++] = 0x80 | c >> 6 & 0x3f;
                        view[offset++] = 0x80 | c & 0x3f;
                    } else {
                        i++;
                        c = 0x10000 + ((c & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
                        view[offset++] = 0xf0 | c >> 18;
                        view[offset++] = 0x80 | c >> 12 & 0x3f;
                        view[offset++] = 0x80 | c >> 6 & 0x3f;
                        view[offset++] = 0x80 | c & 0x3f;
                    }
                }
            }
            function int8$1(bytes, value) {
                bytes.push(value & 255);
            }
            function uint8$1(bytes, value) {
                bytes.push(value & 255);
            }
            function int16$1(bytes, value) {
                bytes.push(value & 255);
                bytes.push(value >> 8 & 255);
            }
            function uint16$1(bytes, value) {
                bytes.push(value & 255);
                bytes.push(value >> 8 & 255);
            }
            function int32$1(bytes, value) {
                bytes.push(value & 255);
                bytes.push(value >> 8 & 255);
                bytes.push(value >> 16 & 255);
                bytes.push(value >> 24 & 255);
            }
            function uint32$1(bytes, value) {
                var b4 = value >> 24;
                var b3 = value >> 16;
                var b2 = value >> 8;
                var b1 = value;
                bytes.push(b1 & 255);
                bytes.push(b2 & 255);
                bytes.push(b3 & 255);
                bytes.push(b4 & 255);
            }
            function int64$1(bytes, value) {
                var high = Math.floor(value / Math.pow(2, 32));
                var low = value >>> 0;
                uint32$1(bytes, low);
                uint32$1(bytes, high);
            }
            function uint64$1(bytes, value) {
                var high = value / Math.pow(2, 32) >> 0;
                var low = value >>> 0;
                uint32$1(bytes, low);
                uint32$1(bytes, high);
            }
            function float32$1(bytes, value) {
                writeFloat32(bytes, value);
            }
            function float64$1(bytes, value) {
                writeFloat64(bytes, value);
            }
            var _int32$1 = new Int32Array(2);
            var _float32$1 = new Float32Array(_int32$1.buffer);
            var _float64$1 = new Float64Array(_int32$1.buffer);
            function writeFloat32(bytes, value) {
                _float32$1[0] = value;
                int32$1(bytes, _int32$1[0]);
            }
            function writeFloat64(bytes, value) {
                _float64$1[0] = value;
                int32$1(bytes, _int32$1[0]);
                int32$1(bytes, _int32$1[1]);
            }
            function boolean$1(bytes, value) {
                return uint8$1(bytes, value ? 1 : 0);
            }
            function string$1(bytes, value) {
                // encode `null` strings as empty.
                if (!value) value = "";
                var length = utf8Length(value);
                var size = 0;
                // fixstr
                if (length < 0x20) {
                    bytes.push(length | 0xa0);
                    size = 1;
                } else if (length < 0x100) {
                    bytes.push(0xd9);
                    uint8$1(bytes, length);
                    size = 2;
                } else if (length < 0x10000) {
                    bytes.push(0xda);
                    uint16$1(bytes, length);
                    size = 3;
                } else if (length < 0x100000000) {
                    bytes.push(0xdb);
                    uint32$1(bytes, length);
                    size = 5;
                } else throw new Error("String too long");
                utf8Write(bytes, bytes.length, value);
                return size + length;
            }
            function number$1(bytes, value) {
                if (isNaN(value)) return number$1(bytes, 0);
                else if (!isFinite(value)) return number$1(bytes, value > 0 ? Number.MAX_SAFE_INTEGER : -Number.MAX_SAFE_INTEGER);
                else if (value !== (value | 0)) {
                    bytes.push(0xcb);
                    writeFloat64(bytes, value);
                    return 9;
                // TODO: encode float 32?
                // is it possible to differentiate between float32 / float64 here?
                // // float 32
                // bytes.push(0xca);
                // writeFloat32(bytes, value);
                // return 5;
                }
                if (value >= 0) {
                    // positive fixnum
                    if (value < 0x80) {
                        uint8$1(bytes, value);
                        return 1;
                    }
                    // uint 8
                    if (value < 0x100) {
                        bytes.push(0xcc);
                        uint8$1(bytes, value);
                        return 2;
                    }
                    // uint 16
                    if (value < 0x10000) {
                        bytes.push(0xcd);
                        uint16$1(bytes, value);
                        return 3;
                    }
                    // uint 32
                    if (value < 0x100000000) {
                        bytes.push(0xce);
                        uint32$1(bytes, value);
                        return 5;
                    }
                    // uint 64
                    bytes.push(0xcf);
                    uint64$1(bytes, value);
                    return 9;
                } else {
                    // negative fixnum
                    if (value >= -32) {
                        bytes.push(0xe0 | value + 0x20);
                        return 1;
                    }
                    // int 8
                    if (value >= -128) {
                        bytes.push(0xd0);
                        int8$1(bytes, value);
                        return 2;
                    }
                    // int 16
                    if (value >= -32768) {
                        bytes.push(0xd1);
                        int16$1(bytes, value);
                        return 3;
                    }
                    // int 32
                    if (value >= -2147483648) {
                        bytes.push(0xd2);
                        int32$1(bytes, value);
                        return 5;
                    }
                    // int 64
                    bytes.push(0xd3);
                    int64$1(bytes, value);
                    return 9;
                }
            }
            var encode = /*#__PURE__*/ Object.freeze({
                __proto__: null,
                utf8Write: utf8Write,
                int8: int8$1,
                uint8: uint8$1,
                int16: int16$1,
                uint16: uint16$1,
                int32: int32$1,
                uint32: uint32$1,
                int64: int64$1,
                uint64: uint64$1,
                float32: float32$1,
                float64: float64$1,
                writeFloat32: writeFloat32,
                writeFloat64: writeFloat64,
                boolean: boolean$1,
                string: string$1,
                number: number$1
            });
            /**
         * Copyright (c) 2018 Endel Dreyer
         * Copyright (c) 2014 Ion Drive Software Ltd.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in all
         * copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
         * SOFTWARE
         */ function utf8Read(bytes, offset, length) {
                var string = "", chr = 0;
                for(var i = offset, end = offset + length; i < end; i++){
                    var byte = bytes[i];
                    if ((byte & 0x80) === 0x00) {
                        string += String.fromCharCode(byte);
                        continue;
                    }
                    if ((byte & 0xe0) === 0xc0) {
                        string += String.fromCharCode((byte & 0x1f) << 6 | bytes[++i] & 0x3f);
                        continue;
                    }
                    if ((byte & 0xf0) === 0xe0) {
                        string += String.fromCharCode((byte & 0x0f) << 12 | (bytes[++i] & 0x3f) << 6 | (bytes[++i] & 0x3f) << 0);
                        continue;
                    }
                    if ((byte & 0xf8) === 0xf0) {
                        chr = (byte & 0x07) << 18 | (bytes[++i] & 0x3f) << 12 | (bytes[++i] & 0x3f) << 6 | (bytes[++i] & 0x3f) << 0;
                        if (chr >= 0x010000) {
                            chr -= 0x010000;
                            string += String.fromCharCode((chr >>> 10) + 0xD800, (chr & 0x3FF) + 0xDC00);
                        } else string += String.fromCharCode(chr);
                        continue;
                    }
                    console.error("Invalid byte " + byte.toString(16));
                // (do not throw error to avoid server/client from crashing due to hack attemps)
                // throw new Error('Invalid byte ' + byte.toString(16));
                }
                return string;
            }
            function int8(bytes, it) {
                return uint8(bytes, it) << 24 >> 24;
            }
            function uint8(bytes, it) {
                return bytes[it.offset++];
            }
            function int16(bytes, it) {
                return uint16(bytes, it) << 16 >> 16;
            }
            function uint16(bytes, it) {
                return bytes[it.offset++] | bytes[it.offset++] << 8;
            }
            function int32(bytes, it) {
                return bytes[it.offset++] | bytes[it.offset++] << 8 | bytes[it.offset++] << 16 | bytes[it.offset++] << 24;
            }
            function uint32(bytes, it) {
                return int32(bytes, it) >>> 0;
            }
            function float32(bytes, it) {
                return readFloat32(bytes, it);
            }
            function float64(bytes, it) {
                return readFloat64(bytes, it);
            }
            function int64(bytes, it) {
                var low = uint32(bytes, it);
                var high = int32(bytes, it) * Math.pow(2, 32);
                return high + low;
            }
            function uint64(bytes, it) {
                var low = uint32(bytes, it);
                var high = uint32(bytes, it) * Math.pow(2, 32);
                return high + low;
            }
            var _int32 = new Int32Array(2);
            var _float32 = new Float32Array(_int32.buffer);
            var _float64 = new Float64Array(_int32.buffer);
            function readFloat32(bytes, it) {
                _int32[0] = int32(bytes, it);
                return _float32[0];
            }
            function readFloat64(bytes, it) {
                _int32[0] = int32(bytes, it);
                _int32[1] = int32(bytes, it);
                return _float64[0];
            }
            function boolean(bytes, it) {
                return uint8(bytes, it) > 0;
            }
            function string(bytes, it) {
                var prefix = bytes[it.offset++];
                var length;
                if (prefix < 0xc0) // fixstr
                length = prefix & 0x1f;
                else if (prefix === 0xd9) length = uint8(bytes, it);
                else if (prefix === 0xda) length = uint16(bytes, it);
                else if (prefix === 0xdb) length = uint32(bytes, it);
                var value = utf8Read(bytes, it.offset, length);
                it.offset += length;
                return value;
            }
            function stringCheck(bytes, it) {
                var prefix = bytes[it.offset];
                return(// fixstr
                prefix < 0xc0 && prefix > 0xa0 || // str 8
                prefix === 0xd9 || // str 16
                prefix === 0xda || // str 32
                prefix === 0xdb);
            }
            function number(bytes, it) {
                var prefix = bytes[it.offset++];
                if (prefix < 0x80) // positive fixint
                return prefix;
                else if (prefix === 0xca) // float 32
                return readFloat32(bytes, it);
                else if (prefix === 0xcb) // float 64
                return readFloat64(bytes, it);
                else if (prefix === 0xcc) // uint 8
                return uint8(bytes, it);
                else if (prefix === 0xcd) // uint 16
                return uint16(bytes, it);
                else if (prefix === 0xce) // uint 32
                return uint32(bytes, it);
                else if (prefix === 0xcf) // uint 64
                return uint64(bytes, it);
                else if (prefix === 0xd0) // int 8
                return int8(bytes, it);
                else if (prefix === 0xd1) // int 16
                return int16(bytes, it);
                else if (prefix === 0xd2) // int 32
                return int32(bytes, it);
                else if (prefix === 0xd3) // int 64
                return int64(bytes, it);
                else if (prefix > 0xdf) // negative fixint
                return (0xff - prefix + 1) * -1;
            }
            function numberCheck(bytes, it) {
                var prefix = bytes[it.offset];
                // positive fixint - 0x00 - 0x7f
                // float 32        - 0xca
                // float 64        - 0xcb
                // uint 8          - 0xcc
                // uint 16         - 0xcd
                // uint 32         - 0xce
                // uint 64         - 0xcf
                // int 8           - 0xd0
                // int 16          - 0xd1
                // int 32          - 0xd2
                // int 64          - 0xd3
                return prefix < 0x80 || prefix >= 0xca && prefix <= 0xd3;
            }
            function arrayCheck(bytes, it) {
                return bytes[it.offset] < 0xa0;
            // const prefix = bytes[it.offset] ;
            // if (prefix < 0xa0) {
            //   return prefix;
            // // array
            // } else if (prefix === 0xdc) {
            //   it.offset += 2;
            // } else if (0xdd) {
            //   it.offset += 4;
            // }
            // return prefix;
            }
            function switchStructureCheck(bytes, it) {
                return(// previous byte should be `SWITCH_TO_STRUCTURE`
                bytes[it.offset - 1] === SWITCH_TO_STRUCTURE && (bytes[it.offset] < 0x80 || bytes[it.offset] >= 0xca && bytes[it.offset] <= 0xd3));
            }
            var decode = /*#__PURE__*/ Object.freeze({
                __proto__: null,
                int8: int8,
                uint8: uint8,
                int16: int16,
                uint16: uint16,
                int32: int32,
                uint32: uint32,
                float32: float32,
                float64: float64,
                int64: int64,
                uint64: uint64,
                readFloat32: readFloat32,
                readFloat64: readFloat64,
                boolean: boolean,
                string: string,
                stringCheck: stringCheck,
                number: number,
                numberCheck: numberCheck,
                arrayCheck: arrayCheck,
                switchStructureCheck: switchStructureCheck
            });
            var CollectionSchema = /** @class */ function() {
                function CollectionSchema(initialValues) {
                    var _this = this;
                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    if (initialValues) initialValues.forEach(function(v) {
                        return _this.add(v);
                    });
                }
                CollectionSchema.is = function(type) {
                    return type["collection"] !== undefined;
                };
                CollectionSchema.prototype.add = function(value) {
                    // set "index" for reference.
                    var index = this.$refId++;
                    var isRef = value["$changes"] !== undefined;
                    if (isRef) value["$changes"].setParent(this, this.$changes.root, index);
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index);
                    return index;
                };
                CollectionSchema.prototype.at = function(index) {
                    var key = Array.from(this.$items.keys())[index];
                    return this.$items.get(key);
                };
                CollectionSchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                CollectionSchema.prototype.delete = function(item) {
                    var entries = this.$items.entries();
                    var index;
                    var entry;
                    while(entry = entries.next()){
                        if (entry.done) break;
                        if (item === entry.value[1]) {
                            index = entry.value[0];
                            break;
                        }
                    }
                    if (index === undefined) return false;
                    this.$changes.delete(index);
                    this.$indexes.delete(index);
                    return this.$items.delete(index);
                };
                CollectionSchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item["$changes"].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports1.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                CollectionSchema.prototype.has = function(value) {
                    return Array.from(this.$items.values()).some(function(v) {
                        return v === value;
                    });
                };
                CollectionSchema.prototype.forEach = function(callbackfn) {
                    var _this = this;
                    this.$items.forEach(function(value, key, _) {
                        return callbackfn(value, key, _this);
                    });
                };
                CollectionSchema.prototype.values = function() {
                    return this.$items.values();
                };
                Object.defineProperty(CollectionSchema.prototype, "size", {
                    get: function() {
                        return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                CollectionSchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                CollectionSchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                CollectionSchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                CollectionSchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                CollectionSchema.prototype.toArray = function() {
                    return Array.from(this.$items.values());
                };
                CollectionSchema.prototype.toJSON = function() {
                    var values = [];
                    this.forEach(function(value, key) {
                        values.push(typeof value["toJSON"] === "function" ? value["toJSON"]() : value);
                    });
                    return values;
                };
                //
                // Decoding utilities
                //
                CollectionSchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) // client-side
                    cloned = Object.assign(new CollectionSchema(), this);
                    else {
                        // server-side
                        cloned = new CollectionSchema();
                        this.forEach(function(value) {
                            if (value["$changes"]) cloned.add(value["clone"]());
                            else cloned.add(value);
                        });
                    }
                    return cloned;
                };
                CollectionSchema.prototype.triggerAll = function() {
                    Schema.prototype.triggerAll.apply(this);
                };
                return CollectionSchema;
            }();
            var SetSchema = /** @class */ function() {
                function SetSchema(initialValues) {
                    var _this = this;
                    this.$changes = new ChangeTree(this);
                    this.$items = new Map();
                    this.$indexes = new Map();
                    this.$refId = 0;
                    if (initialValues) initialValues.forEach(function(v) {
                        return _this.add(v);
                    });
                }
                SetSchema.is = function(type) {
                    return type["set"] !== undefined;
                };
                SetSchema.prototype.add = function(value) {
                    var _a, _b;
                    // immediatelly return false if value already added.
                    if (this.has(value)) return false;
                    // set "index" for reference.
                    var index = this.$refId++;
                    if (value["$changes"] !== undefined) value["$changes"].setParent(this, this.$changes.root, index);
                    var operation = (_b = (_a = this.$changes.indexes[index]) === null || _a === void 0 ? void 0 : _a.op) !== null && _b !== void 0 ? _b : exports1.OPERATION.ADD;
                    this.$changes.indexes[index] = index;
                    this.$indexes.set(index, index);
                    this.$items.set(index, value);
                    this.$changes.change(index, operation);
                    return index;
                };
                SetSchema.prototype.entries = function() {
                    return this.$items.entries();
                };
                SetSchema.prototype.delete = function(item) {
                    var entries = this.$items.entries();
                    var index;
                    var entry;
                    while(entry = entries.next()){
                        if (entry.done) break;
                        if (item === entry.value[1]) {
                            index = entry.value[0];
                            break;
                        }
                    }
                    if (index === undefined) return false;
                    this.$changes.delete(index);
                    this.$indexes.delete(index);
                    return this.$items.delete(index);
                };
                SetSchema.prototype.clear = function(isDecoding) {
                    var _this = this;
                    // discard previous operations.
                    this.$changes.discard(true, true);
                    this.$changes.indexes = {};
                    // clear previous indexes
                    this.$indexes.clear();
                    // flag child items for garbage collection.
                    if (isDecoding && typeof this.$changes.getType() !== "string") this.$items.forEach(function(item) {
                        _this.$changes.root.removeRef(item["$changes"].refId);
                    });
                    // clear items
                    this.$items.clear();
                    this.$changes.operation({
                        index: 0,
                        op: exports1.OPERATION.CLEAR
                    });
                    // touch all structures until reach root
                    this.$changes.touchParents();
                };
                SetSchema.prototype.has = function(value) {
                    var values = this.$items.values();
                    var has = false;
                    var entry;
                    while(entry = values.next()){
                        if (entry.done) break;
                        if (value === entry.value) {
                            has = true;
                            break;
                        }
                    }
                    return has;
                };
                SetSchema.prototype.forEach = function(callbackfn) {
                    var _this = this;
                    this.$items.forEach(function(value, key, _) {
                        return callbackfn(value, key, _this);
                    });
                };
                SetSchema.prototype.values = function() {
                    return this.$items.values();
                };
                Object.defineProperty(SetSchema.prototype, "size", {
                    get: function() {
                        return this.$items.size;
                    },
                    enumerable: false,
                    configurable: true
                });
                SetSchema.prototype.setIndex = function(index, key) {
                    this.$indexes.set(index, key);
                };
                SetSchema.prototype.getIndex = function(index) {
                    return this.$indexes.get(index);
                };
                SetSchema.prototype.getByIndex = function(index) {
                    return this.$items.get(this.$indexes.get(index));
                };
                SetSchema.prototype.deleteByIndex = function(index) {
                    var key = this.$indexes.get(index);
                    this.$items.delete(key);
                    this.$indexes.delete(index);
                };
                SetSchema.prototype.toArray = function() {
                    return Array.from(this.$items.values());
                };
                SetSchema.prototype.toJSON = function() {
                    var values = [];
                    this.forEach(function(value, key) {
                        values.push(typeof value["toJSON"] === "function" ? value["toJSON"]() : value);
                    });
                    return values;
                };
                //
                // Decoding utilities
                //
                SetSchema.prototype.clone = function(isDecoding) {
                    var cloned;
                    if (isDecoding) // client-side
                    cloned = Object.assign(new SetSchema(), this);
                    else {
                        // server-side
                        cloned = new SetSchema();
                        this.forEach(function(value) {
                            if (value["$changes"]) cloned.add(value["clone"]());
                            else cloned.add(value);
                        });
                    }
                    return cloned;
                };
                SetSchema.prototype.triggerAll = function() {
                    Schema.prototype.triggerAll.apply(this);
                };
                return SetSchema;
            }();
            /**
         * Extracted from https://www.npmjs.com/package/strong-events
         */ var EventEmitter_ = /** @class */ function() {
                function EventEmitter_() {
                    this.handlers = [];
                }
                EventEmitter_.prototype.register = function(cb, once) {
                    this.handlers.push(cb);
                    return this;
                };
                EventEmitter_.prototype.invoke = function() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    this.handlers.forEach(function(handler) {
                        return handler.apply(void 0, args);
                    });
                };
                EventEmitter_.prototype.invokeAsync = function() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    return Promise.all(this.handlers.map(function(handler) {
                        return handler.apply(void 0, args);
                    }));
                };
                EventEmitter_.prototype.remove = function(cb) {
                    var index = this.handlers.indexOf(cb);
                    this.handlers[index] = this.handlers[this.handlers.length - 1];
                    this.handlers.pop();
                };
                EventEmitter_.prototype.clear = function() {
                    this.handlers = [];
                };
                return EventEmitter_;
            }();
            var ClientState = /** @class */ function() {
                function ClientState() {
                    this.refIds = new WeakSet();
                    this.containerIndexes = new WeakMap();
                }
                // containerIndexes = new Map<ChangeTree, Set<number>>();
                ClientState.prototype.addRefId = function(changeTree) {
                    if (!this.refIds.has(changeTree)) {
                        this.refIds.add(changeTree);
                        this.containerIndexes.set(changeTree, new Set());
                    }
                };
                ClientState.get = function(client) {
                    if (client.$filterState === undefined) client.$filterState = new ClientState();
                    return client.$filterState;
                };
                return ClientState;
            }();
            var EncodeSchemaError = /** @class */ function(_super) {
                __extends(EncodeSchemaError, _super);
                function EncodeSchemaError() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                return EncodeSchemaError;
            }(Error);
            function assertType(value, type, klass, field) {
                var typeofTarget;
                var allowNull = false;
                switch(type){
                    case "number":
                    case "int8":
                    case "uint8":
                    case "int16":
                    case "uint16":
                    case "int32":
                    case "uint32":
                    case "int64":
                    case "uint64":
                    case "float32":
                    case "float64":
                        typeofTarget = "number";
                        if (isNaN(value)) console.log('trying to encode "NaN" in ' + klass.constructor.name + "#" + field);
                        break;
                    case "string":
                        typeofTarget = "string";
                        allowNull = true;
                        break;
                    case "boolean":
                        // boolean is always encoded as true/false based on truthiness
                        return;
                }
                if (typeof value !== typeofTarget && (!allowNull || allowNull && value !== null)) {
                    var foundValue = "'" + JSON.stringify(value) + "'" + (value && value.constructor && " (" + value.constructor.name + ")" || "");
                    throw new EncodeSchemaError("a '" + typeofTarget + "' was expected, but " + foundValue + " was provided in " + klass.constructor.name + "#" + field);
                }
            }
            function assertInstanceType(value, type, klass, field) {
                if (!(value instanceof type)) throw new EncodeSchemaError("a '" + type.name + "' was expected, but '" + value.constructor.name + "' was provided in " + klass.constructor.name + "#" + field);
            }
            function encodePrimitiveType(type, bytes, value, klass, field) {
                assertType(value, type, klass, field);
                var encodeFunc = encode[type];
                if (encodeFunc) encodeFunc(bytes, value);
                else throw new EncodeSchemaError("a '" + type + "' was expected, but " + value + " was provided in " + klass.constructor.name + "#" + field);
            }
            function decodePrimitiveType(type, bytes, it) {
                return decode[type](bytes, it);
            }
            /**
         * Schema encoder / decoder
         */ var Schema = /** @class */ function() {
                // allow inherited classes to have a constructor
                function Schema() {
                    var args = [];
                    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
                    // fix enumerability of fields for end-user
                    Object.defineProperties(this, {
                        $changes: {
                            value: new ChangeTree(this, undefined, new Root()),
                            enumerable: false,
                            writable: true
                        },
                        $listeners: {
                            value: {},
                            enumerable: false,
                            writable: true
                        }
                    });
                    var descriptors = this._definition.descriptors;
                    if (descriptors) Object.defineProperties(this, descriptors);
                    //
                    // Assign initial values
                    //
                    if (args[0]) this.assign(args[0]);
                }
                Schema.onError = function(e) {
                    console.error(e);
                };
                Schema.is = function(type) {
                    return type["_definition"] && type["_definition"].schema !== undefined;
                };
                Schema.prototype.assign = function(props) {
                    Object.assign(this, props);
                    return this;
                };
                Object.defineProperty(Schema.prototype, "_definition", {
                    get: function() {
                        return this.constructor._definition;
                    },
                    enumerable: false,
                    configurable: true
                });
                Schema.prototype.listen = function(attr, callback) {
                    var _this = this;
                    if (!this.$listeners[attr]) this.$listeners[attr] = new EventEmitter_();
                    this.$listeners[attr].register(callback);
                    // return un-register callback.
                    return function() {
                        return _this.$listeners[attr].remove(callback);
                    };
                };
                Schema.prototype.decode = function(bytes, it, ref, allChanges) {
                    if (it === void 0) it = {
                        offset: 0
                    };
                    if (ref === void 0) ref = this;
                    if (allChanges === void 0) allChanges = new Map();
                    var $root = this.$changes.root;
                    var totalBytes = bytes.length;
                    var refId = 0;
                    var changes = [];
                    $root.refs.set(refId, this);
                    allChanges.set(refId, changes);
                    while(it.offset < totalBytes){
                        var byte = bytes[it.offset++];
                        if (byte == SWITCH_TO_STRUCTURE) {
                            refId = number(bytes, it);
                            var nextRef = $root.refs.get(refId);
                            //
                            // Trying to access a reference that haven't been decoded yet.
                            //
                            if (!nextRef) throw new Error('"refId" not found: ' + refId);
                            ref = nextRef;
                            // create empty list of changes for this refId.
                            changes = [];
                            allChanges.set(refId, changes);
                            continue;
                        }
                        var changeTree = ref["$changes"];
                        var isSchema = ref["_definition"] !== undefined;
                        var operation = isSchema ? byte >> 6 << 6 // "compressed" index + operation
                         : byte; // "uncompressed" index + operation (array/map items)
                        if (operation === exports1.OPERATION.CLEAR) {
                            //
                            // TODO: refactor me!
                            // The `.clear()` method is calling `$root.removeRef(refId)` for
                            // each item inside this collection
                            //
                            ref.clear(true);
                            continue;
                        }
                        var fieldIndex = isSchema ? byte % (operation || 255 // if "REPLACE" operation (0), use 255
                        ) : number(bytes, it);
                        var fieldName = isSchema ? ref["_definition"].fieldsByIndex[fieldIndex] : "";
                        var type = changeTree.getType(fieldIndex);
                        var value = void 0;
                        var previousValue = void 0;
                        var dynamicIndex = void 0;
                        if (!isSchema) {
                            previousValue = ref["getByIndex"](fieldIndex);
                            if ((operation & exports1.OPERATION.ADD) === exports1.OPERATION.ADD) {
                                dynamicIndex = ref instanceof MapSchema ? string(bytes, it) : fieldIndex;
                                ref["setIndex"](fieldIndex, dynamicIndex);
                            } else // here
                            dynamicIndex = ref["getIndex"](fieldIndex);
                        } else previousValue = ref["_" + fieldName];
                        //
                        // Delete operations
                        //
                        if ((operation & exports1.OPERATION.DELETE) === exports1.OPERATION.DELETE) {
                            if (operation !== exports1.OPERATION.DELETE_AND_ADD) ref["deleteByIndex"](fieldIndex);
                            // Flag `refId` for garbage collection.
                            if (previousValue && previousValue["$changes"]) $root.removeRef(previousValue["$changes"].refId);
                            value = null;
                        }
                        if (fieldName === undefined) {
                            console.warn("@colyseus/schema: definition mismatch");
                            //
                            // keep skipping next bytes until reaches a known structure
                            // by local decoder.
                            //
                            var nextIterator = {
                                offset: it.offset
                            };
                            while(it.offset < totalBytes){
                                if (switchStructureCheck(bytes, it)) {
                                    nextIterator.offset = it.offset + 1;
                                    if ($root.refs.has(number(bytes, nextIterator))) break;
                                }
                                it.offset++;
                            }
                            continue;
                        } else if (operation === exports1.OPERATION.DELETE) ;
                        else if (Schema.is(type)) {
                            var refId_1 = number(bytes, it);
                            value = $root.refs.get(refId_1);
                            if (operation !== exports1.OPERATION.REPLACE) {
                                var childType = this.getSchemaType(bytes, it, type);
                                if (!value) {
                                    value = this.createTypeInstance(childType);
                                    value.$changes.refId = refId_1;
                                    if (previousValue) {
                                        value.onChange = previousValue.onChange;
                                        value.onRemove = previousValue.onRemove;
                                        value.$listeners = previousValue.$listeners;
                                        if (previousValue["$changes"].refId && refId_1 !== previousValue["$changes"].refId) $root.removeRef(previousValue["$changes"].refId);
                                    }
                                }
                                $root.addRef(refId_1, value, value !== previousValue);
                            }
                        } else if (typeof type === "string") //
                        // primitive value (number, string, boolean, etc)
                        //
                        value = decodePrimitiveType(type, bytes, it);
                        else {
                            var typeDef = getType(Object.keys(type)[0]);
                            var refId_2 = number(bytes, it);
                            var valueRef = $root.refs.has(refId_2) ? previousValue || $root.refs.get(refId_2) : new typeDef.constructor();
                            value = valueRef.clone(true);
                            value.$changes.refId = refId_2;
                            // preserve schema callbacks
                            if (previousValue) {
                                value.onAdd = previousValue.onAdd;
                                value.onRemove = previousValue.onRemove;
                                value.onChange = previousValue.onChange;
                                if (previousValue["$changes"].refId && refId_2 !== previousValue["$changes"].refId) {
                                    $root.removeRef(previousValue["$changes"].refId);
                                    //
                                    // Trigger onRemove if structure has been replaced.
                                    //
                                    var deletes = [];
                                    var entries = previousValue.entries();
                                    var iter = void 0;
                                    while((iter = entries.next()) && !iter.done){
                                        var _a = iter.value, key = _a[0], value_1 = _a[1];
                                        deletes.push({
                                            op: exports1.OPERATION.DELETE,
                                            field: key,
                                            value: undefined,
                                            previousValue: value_1
                                        });
                                    }
                                    allChanges.set(previousValue["$changes"].refId, deletes);
                                }
                            }
                            $root.addRef(refId_2, value, valueRef !== previousValue);
                            //
                            // TODO: deprecate proxies on next version.
                            // get proxy to target value.
                            //
                            if (typeDef.getProxy) value = typeDef.getProxy(value);
                        }
                        var hasChange = previousValue !== value;
                        if (value !== null && value !== undefined) {
                            if (value["$changes"]) value["$changes"].setParent(changeTree.ref, changeTree.root, fieldIndex);
                            if (ref instanceof Schema) ref[fieldName] = value;
                            else if (ref instanceof MapSchema) {
                                // const key = ref['$indexes'].get(field);
                                var key = dynamicIndex;
                                // ref.set(key, value);
                                ref["$items"].set(key, value);
                            } else if (ref instanceof ArraySchema) // const key = ref['$indexes'][field];
                            // console.log("SETTING FOR ArraySchema =>", { field, key, value });
                            // ref[key] = value;
                            ref.setAt(fieldIndex, value);
                            else if (ref instanceof CollectionSchema) {
                                var index = ref.add(value);
                                ref["setIndex"](fieldIndex, index);
                            } else if (ref instanceof SetSchema) {
                                var index = ref.add(value);
                                if (index !== false) ref["setIndex"](fieldIndex, index);
                            }
                        }
                        if (hasChange) changes.push({
                            op: operation,
                            field: fieldName,
                            dynamicIndex: dynamicIndex,
                            value: value,
                            previousValue: previousValue
                        });
                    }
                    this._triggerChanges(allChanges);
                    // drop references of unused schemas
                    $root.garbageCollectDeletedRefs();
                    return allChanges;
                };
                Schema.prototype.encode = function(encodeAll, bytes, useFilters) {
                    if (encodeAll === void 0) encodeAll = false;
                    if (bytes === void 0) bytes = [];
                    if (useFilters === void 0) useFilters = false;
                    var rootChangeTree = this.$changes;
                    var refIdsVisited = new WeakSet();
                    var changeTrees = [
                        rootChangeTree
                    ];
                    var numChangeTrees = 1;
                    for(var i = 0; i < numChangeTrees; i++){
                        var changeTree = changeTrees[i];
                        var ref = changeTree.ref;
                        var isSchema = ref instanceof Schema;
                        // Generate unique refId for the ChangeTree.
                        changeTree.ensureRefId();
                        // mark this ChangeTree as visited.
                        refIdsVisited.add(changeTree);
                        // root `refId` is skipped.
                        if (changeTree !== rootChangeTree && (changeTree.changed || encodeAll)) {
                            uint8$1(bytes, SWITCH_TO_STRUCTURE);
                            number$1(bytes, changeTree.refId);
                        }
                        var changes = encodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());
                        for(var j = 0, cl = changes.length; j < cl; j++){
                            var operation = encodeAll ? {
                                op: exports1.OPERATION.ADD,
                                index: changes[j]
                            } : changes[j];
                            var fieldIndex = operation.index;
                            var field = isSchema ? ref["_definition"].fieldsByIndex && ref["_definition"].fieldsByIndex[fieldIndex] : fieldIndex;
                            // cache begin index if `useFilters`
                            var beginIndex = bytes.length;
                            // encode field index + operation
                            if (operation.op !== exports1.OPERATION.TOUCH) {
                                if (isSchema) //
                                // Compress `fieldIndex` + `operation` into a single byte.
                                // This adds a limitaion of 64 fields per Schema structure
                                //
                                uint8$1(bytes, fieldIndex | operation.op);
                                else {
                                    uint8$1(bytes, operation.op);
                                    // custom operations
                                    if (operation.op === exports1.OPERATION.CLEAR) continue;
                                    // indexed operations
                                    number$1(bytes, fieldIndex);
                                }
                            }
                            //
                            // encode "alias" for dynamic fields (maps)
                            //
                            if (!isSchema && (operation.op & exports1.OPERATION.ADD) == exports1.OPERATION.ADD // ADD or DELETE_AND_ADD
                            ) {
                                if (ref instanceof MapSchema) {
                                    //
                                    // MapSchema dynamic key
                                    //
                                    var dynamicIndex = changeTree.ref["$indexes"].get(fieldIndex);
                                    string$1(bytes, dynamicIndex);
                                }
                            }
                            if (operation.op === exports1.OPERATION.DELETE) continue;
                            // const type = changeTree.childType || ref._schema[field];
                            var type = changeTree.getType(fieldIndex);
                            // const type = changeTree.getType(fieldIndex);
                            var value = changeTree.getValue(fieldIndex);
                            // Enqueue ChangeTree to be visited
                            if (value && value["$changes"] && !refIdsVisited.has(value["$changes"])) {
                                changeTrees.push(value["$changes"]);
                                value["$changes"].ensureRefId();
                                numChangeTrees++;
                            }
                            if (operation.op === exports1.OPERATION.TOUCH) continue;
                            if (Schema.is(type)) {
                                assertInstanceType(value, type, ref, field);
                                //
                                // Encode refId for this instance.
                                // The actual instance is going to be encoded on next `changeTree` iteration.
                                //
                                number$1(bytes, value.$changes.refId);
                                // Try to encode inherited TYPE_ID if it's an ADD operation.
                                if ((operation.op & exports1.OPERATION.ADD) === exports1.OPERATION.ADD) this.tryEncodeTypeId(bytes, type, value.constructor);
                            } else if (typeof type === "string") //
                            // Primitive values
                            //
                            encodePrimitiveType(type, bytes, value, ref, field);
                            else {
                                //
                                // Custom type (MapSchema, ArraySchema, etc)
                                //
                                var definition = getType(Object.keys(type)[0]);
                                //
                                // ensure a ArraySchema has been provided
                                //
                                assertInstanceType(ref["_" + field], definition.constructor, ref, field);
                                //
                                // Encode refId for this instance.
                                // The actual instance is going to be encoded on next `changeTree` iteration.
                                //
                                number$1(bytes, value.$changes.refId);
                            }
                            if (useFilters) // cache begin / end index
                            changeTree.cache(fieldIndex, bytes.slice(beginIndex));
                        }
                        if (!encodeAll && !useFilters) changeTree.discard();
                    }
                    return bytes;
                };
                Schema.prototype.encodeAll = function(useFilters) {
                    return this.encode(true, [], useFilters);
                };
                Schema.prototype.applyFilters = function(client, encodeAll) {
                    var _a, _b;
                    if (encodeAll === void 0) encodeAll = false;
                    var root = this;
                    var refIdsDissallowed = new Set();
                    var $filterState = ClientState.get(client);
                    var changeTrees = [
                        this.$changes
                    ];
                    var numChangeTrees = 1;
                    var filteredBytes = [];
                    var _loop_1 = function(i) {
                        var changeTree = changeTrees[i];
                        if (refIdsDissallowed.has(changeTree.refId)) return "continue";
                        var ref = changeTree.ref;
                        var isSchema = ref instanceof Schema;
                        uint8$1(filteredBytes, SWITCH_TO_STRUCTURE);
                        number$1(filteredBytes, changeTree.refId);
                        var clientHasRefId = $filterState.refIds.has(changeTree);
                        var isEncodeAll = encodeAll || !clientHasRefId;
                        // console.log("REF:", ref.constructor.name);
                        // console.log("Encode all?", isEncodeAll);
                        //
                        // include `changeTree` on list of known refIds by this client.
                        //
                        $filterState.addRefId(changeTree);
                        var containerIndexes = $filterState.containerIndexes.get(changeTree);
                        var changes = isEncodeAll ? Array.from(changeTree.allChanges) : Array.from(changeTree.changes.values());
                        //
                        // WORKAROUND: tries to re-evaluate previously not included @filter() attributes
                        // - see "DELETE a field of Schema" test case.
                        //
                        if (!encodeAll && isSchema && ref._definition.indexesWithFilters) {
                            var indexesWithFilters = ref._definition.indexesWithFilters;
                            indexesWithFilters.forEach(function(indexWithFilter) {
                                if (!containerIndexes.has(indexWithFilter) && changeTree.allChanges.has(indexWithFilter)) {
                                    if (isEncodeAll) changes.push(indexWithFilter);
                                    else changes.push({
                                        op: exports1.OPERATION.ADD,
                                        index: indexWithFilter
                                    });
                                }
                            });
                        }
                        for(var j = 0, cl = changes.length; j < cl; j++){
                            var change = isEncodeAll ? {
                                op: exports1.OPERATION.ADD,
                                index: changes[j]
                            } : changes[j];
                            // custom operations
                            if (change.op === exports1.OPERATION.CLEAR) {
                                uint8$1(filteredBytes, change.op);
                                continue;
                            }
                            var fieldIndex = change.index;
                            //
                            // Deleting fields: encode the operation + field index
                            //
                            if (change.op === exports1.OPERATION.DELETE) {
                                //
                                // DELETE operations also need to go through filtering.
                                //
                                // TODO: cache the previous value so we can access the value (primitive or `refId`)
                                // (check against `$filterState.refIds`)
                                //
                                if (isSchema) uint8$1(filteredBytes, change.op | fieldIndex);
                                else {
                                    uint8$1(filteredBytes, change.op);
                                    number$1(filteredBytes, fieldIndex);
                                }
                                continue;
                            }
                            // indexed operation
                            var value = changeTree.getValue(fieldIndex);
                            var type = changeTree.getType(fieldIndex);
                            if (isSchema) {
                                // Is a Schema!
                                var filter = ref._definition.filters && ref._definition.filters[fieldIndex];
                                if (filter && !filter.call(ref, client, value, root)) {
                                    if (value && value["$changes"]) refIdsDissallowed.add(value["$changes"].refId);
                                    continue;
                                }
                            } else {
                                // Is a collection! (map, array, etc.)
                                var parent = changeTree.parent;
                                var filter = changeTree.getChildrenFilter();
                                if (filter && !filter.call(parent, client, ref["$indexes"].get(fieldIndex), value, root)) {
                                    if (value && value["$changes"]) refIdsDissallowed.add(value["$changes"].refId);
                                    continue;
                                }
                            }
                            // visit child ChangeTree on further iteration.
                            if (value["$changes"]) {
                                changeTrees.push(value["$changes"]);
                                numChangeTrees++;
                            }
                            //
                            // Copy cached bytes
                            //
                            if (change.op !== exports1.OPERATION.TOUCH) {
                                //
                                // TODO: refactor me!
                                //
                                if (change.op === exports1.OPERATION.ADD || isSchema) {
                                    //
                                    // use cached bytes directly if is from Schema type.
                                    //
                                    filteredBytes.push.apply(filteredBytes, (_a = changeTree.caches[fieldIndex]) !== null && _a !== void 0 ? _a : []);
                                    containerIndexes.add(fieldIndex);
                                } else if (containerIndexes.has(fieldIndex)) //
                                // use cached bytes if already has the field
                                //
                                filteredBytes.push.apply(filteredBytes, (_b = changeTree.caches[fieldIndex]) !== null && _b !== void 0 ? _b : []);
                                else {
                                    //
                                    // force ADD operation if field is not known by this client.
                                    //
                                    containerIndexes.add(fieldIndex);
                                    uint8$1(filteredBytes, exports1.OPERATION.ADD);
                                    number$1(filteredBytes, fieldIndex);
                                    if (ref instanceof MapSchema) {
                                        //
                                        // MapSchema dynamic key
                                        //
                                        var dynamicIndex = changeTree.ref["$indexes"].get(fieldIndex);
                                        string$1(filteredBytes, dynamicIndex);
                                    }
                                    if (value["$changes"]) number$1(filteredBytes, value["$changes"].refId);
                                    else // "encodePrimitiveType" without type checking.
                                    // the type checking has been done on the first .encode() call.
                                    encode[type](filteredBytes, value);
                                }
                            } else if (value["$changes"] && !isSchema) {
                                //
                                // TODO:
                                // - track ADD/REPLACE/DELETE instances on `$filterState`
                                // - do NOT always encode dynamicIndex for MapSchema.
                                //   (If client already has that key, only the first index is necessary.)
                                //
                                uint8$1(filteredBytes, exports1.OPERATION.ADD);
                                number$1(filteredBytes, fieldIndex);
                                if (ref instanceof MapSchema) {
                                    //
                                    // MapSchema dynamic key
                                    //
                                    var dynamicIndex = changeTree.ref["$indexes"].get(fieldIndex);
                                    string$1(filteredBytes, dynamicIndex);
                                }
                                number$1(filteredBytes, value["$changes"].refId);
                            }
                        }
                    };
                    for(var i = 0; i < numChangeTrees; i++)_loop_1(i);
                    return filteredBytes;
                };
                Schema.prototype.clone = function() {
                    var cloned = new this.constructor;
                    var schema = this._definition.schema;
                    for(var field in schema)if (typeof this[field] === "object" && typeof this[field].clone === "function") // deep clone
                    cloned[field] = this[field].clone();
                    else // primitive values
                    cloned[field] = this[field];
                    return cloned;
                };
                Schema.prototype.triggerAll = function() {
                    // skip if haven't received any remote refs yet.
                    if (this.$changes.root.refs.size === 0) return;
                    var allChanges = new Map();
                    Schema.prototype._triggerAllFillChanges.call(this, this, allChanges);
                    try {
                        Schema.prototype._triggerChanges.call(this, allChanges);
                    } catch (e) {
                        Schema.onError(e);
                    }
                };
                Schema.prototype.toJSON = function() {
                    var schema = this._definition.schema;
                    var deprecated = this._definition.deprecated;
                    var obj = {};
                    for(var field in schema)if (!deprecated[field] && this[field] !== null && typeof this[field] !== "undefined") obj[field] = typeof this[field]["toJSON"] === "function" ? this[field]["toJSON"]() : this["_" + field];
                    return obj;
                };
                Schema.prototype.discardAllChanges = function() {
                    this.$changes.discardAll();
                };
                Schema.prototype.getByIndex = function(index) {
                    return this[this._definition.fieldsByIndex[index]];
                };
                Schema.prototype.deleteByIndex = function(index) {
                    this[this._definition.fieldsByIndex[index]] = undefined;
                };
                Schema.prototype.tryEncodeTypeId = function(bytes, type, targetType) {
                    if (type._typeid !== targetType._typeid) {
                        uint8$1(bytes, TYPE_ID);
                        number$1(bytes, targetType._typeid);
                    }
                };
                Schema.prototype.getSchemaType = function(bytes, it, defaultType) {
                    var type;
                    if (bytes[it.offset] === TYPE_ID) {
                        it.offset++;
                        type = this.constructor._context.get(number(bytes, it));
                    }
                    return type || defaultType;
                };
                Schema.prototype.createTypeInstance = function(type) {
                    var instance = new type();
                    // assign root on $changes
                    instance.$changes.root = this.$changes.root;
                    return instance;
                };
                Schema.prototype._triggerAllFillChanges = function(ref, allChanges) {
                    if (allChanges.has(ref["$changes"].refId)) return;
                    var changes = [];
                    allChanges.set(ref["$changes"].refId || 0, changes);
                    if (ref instanceof Schema) {
                        var schema = ref._definition.schema;
                        for(var fieldName in schema){
                            var _field = "_" + fieldName;
                            var value = ref[_field];
                            if (value !== undefined) {
                                changes.push({
                                    op: exports1.OPERATION.ADD,
                                    field: fieldName,
                                    value: value,
                                    previousValue: undefined
                                });
                                if (value["$changes"] !== undefined) Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                            }
                        }
                    } else {
                        var entries = ref.entries();
                        var iter = void 0;
                        while((iter = entries.next()) && !iter.done){
                            var _a = iter.value, key = _a[0], value = _a[1];
                            changes.push({
                                op: exports1.OPERATION.ADD,
                                field: key,
                                dynamicIndex: key,
                                value: value,
                                previousValue: undefined
                            });
                            if (value["$changes"] !== undefined) Schema.prototype._triggerAllFillChanges.call(this, value, allChanges);
                        }
                    }
                };
                Schema.prototype._triggerChanges = function(allChanges) {
                    var _this = this;
                    allChanges.forEach(function(changes, refId) {
                        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                        if (changes.length > 0) {
                            var ref = _this.$changes.root.refs.get(refId);
                            var isSchema = ref instanceof Schema;
                            for(var i = 0; i < changes.length; i++){
                                var change = changes[i];
                                var listener = ref["$listeners"] && ref["$listeners"][change.field];
                                if (!isSchema) {
                                    if (change.op === exports1.OPERATION.ADD && change.previousValue === undefined) (_b = (_a = ref).onAdd) === null || _b === void 0 || _b.call(_a, change.value, (_c = change.dynamicIndex) !== null && _c !== void 0 ? _c : change.field);
                                    else if (change.op === exports1.OPERATION.DELETE) //
                                    // FIXME: `previousValue` should always be avaiiable.
                                    // ADD + DELETE operations are still encoding DELETE operation.
                                    //
                                    {
                                        if (change.previousValue !== undefined) (_e = (_d = ref).onRemove) === null || _e === void 0 || _e.call(_d, change.previousValue, (_f = change.dynamicIndex) !== null && _f !== void 0 ? _f : change.field);
                                    } else if (change.op === exports1.OPERATION.DELETE_AND_ADD) {
                                        if (change.previousValue !== undefined) (_h = (_g = ref).onRemove) === null || _h === void 0 || _h.call(_g, change.previousValue, change.dynamicIndex);
                                        (_k = (_j = ref).onAdd) === null || _k === void 0 || _k.call(_j, change.value, change.dynamicIndex);
                                    } else if (change.op === exports1.OPERATION.REPLACE || change.value !== change.previousValue) (_m = (_l = ref).onChange) === null || _m === void 0 || _m.call(_l, change.value, change.dynamicIndex);
                                }
                                //
                                // trigger onRemove on child structure.
                                //
                                if ((change.op & exports1.OPERATION.DELETE) === exports1.OPERATION.DELETE && change.previousValue instanceof Schema && change.previousValue.onRemove) change.previousValue.onRemove();
                                if (listener) try {
                                    listener.invoke(change.value, change.previousValue);
                                } catch (e) {
                                    Schema.onError(e);
                                }
                            }
                            if (isSchema) {
                                if (ref.onChange) try {
                                    ref.onChange(changes);
                                } catch (e1) {
                                    Schema.onError(e1);
                                }
                            }
                        }
                    });
                };
                Schema._definition = SchemaDefinition.create();
                return Schema;
            }();
            function dumpChanges(schema) {
                var changeTrees = [
                    schema["$changes"]
                ];
                var numChangeTrees = 1;
                var dump = {};
                var currentStructure = dump;
                var _loop_1 = function(i) {
                    var changeTree = changeTrees[i];
                    changeTree.changes.forEach(function(change) {
                        var ref = changeTree.ref;
                        var fieldIndex = change.index;
                        var field = ref["_definition"] ? ref["_definition"].fieldsByIndex[fieldIndex] : ref["$indexes"].get(fieldIndex);
                        currentStructure[field] = changeTree.getValue(fieldIndex);
                    });
                };
                for(var i = 0; i < numChangeTrees; i++)_loop_1(i);
                return dump;
            }
            var reflectionContext = new Context();
            /**
         * Reflection
         */ var ReflectionField = /** @class */ function(_super) {
                __extends(ReflectionField, _super);
                function ReflectionField() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                __decorate([
                    type("string", reflectionContext)
                ], ReflectionField.prototype, "name", void 0);
                __decorate([
                    type("string", reflectionContext)
                ], ReflectionField.prototype, "type", void 0);
                __decorate([
                    type("number", reflectionContext)
                ], ReflectionField.prototype, "referencedType", void 0);
                return ReflectionField;
            }(Schema);
            var ReflectionType = /** @class */ function(_super) {
                __extends(ReflectionType, _super);
                function ReflectionType() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.fields = new ArraySchema();
                    return _this;
                }
                __decorate([
                    type("number", reflectionContext)
                ], ReflectionType.prototype, "id", void 0);
                __decorate([
                    type([
                        ReflectionField
                    ], reflectionContext)
                ], ReflectionType.prototype, "fields", void 0);
                return ReflectionType;
            }(Schema);
            var Reflection = /** @class */ function(_super) {
                __extends(Reflection, _super);
                function Reflection() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.types = new ArraySchema();
                    return _this;
                }
                Reflection.encode = function(instance) {
                    var rootSchemaType = instance.constructor;
                    var reflection = new Reflection();
                    reflection.rootType = rootSchemaType._typeid;
                    var buildType = function(currentType, schema) {
                        for(var fieldName in schema){
                            var field = new ReflectionField();
                            field.name = fieldName;
                            var fieldType = void 0;
                            if (typeof schema[fieldName] === "string") fieldType = schema[fieldName];
                            else {
                                var type_1 = schema[fieldName];
                                var childTypeSchema = void 0;
                                //
                                // TODO: refactor below.
                                //
                                if (Schema.is(type_1)) {
                                    fieldType = "ref";
                                    childTypeSchema = schema[fieldName];
                                } else {
                                    fieldType = Object.keys(type_1)[0];
                                    if (typeof type_1[fieldType] === "string") fieldType += ":" + type_1[fieldType]; // array:string
                                    else childTypeSchema = type_1[fieldType];
                                }
                                field.referencedType = childTypeSchema ? childTypeSchema._typeid : -1;
                            }
                            field.type = fieldType;
                            currentType.fields.push(field);
                        }
                        reflection.types.push(currentType);
                    };
                    var types = rootSchemaType._context.types;
                    for(var typeid in types){
                        var type_2 = new ReflectionType();
                        type_2.id = Number(typeid);
                        buildType(type_2, types[typeid]._definition.schema);
                    }
                    return reflection.encodeAll();
                };
                Reflection.decode = function(bytes, it) {
                    var context = new Context();
                    var reflection = new Reflection();
                    reflection.decode(bytes, it);
                    var schemaTypes = reflection.types.reduce(function(types, reflectionType) {
                        var schema = /** @class */ function(_super) {
                            __extends(_, _super);
                            function _() {
                                return _super !== null && _super.apply(this, arguments) || this;
                            }
                            return _;
                        }(Schema);
                        var typeid = reflectionType.id;
                        types[typeid] = schema;
                        context.add(schema, typeid);
                        return types;
                    }, {});
                    reflection.types.forEach(function(reflectionType) {
                        var schemaType = schemaTypes[reflectionType.id];
                        reflectionType.fields.forEach(function(field) {
                            var _a;
                            if (field.referencedType !== undefined) {
                                var fieldType = field.type;
                                var refType = schemaTypes[field.referencedType];
                                // map or array of primitive type (-1)
                                if (!refType) {
                                    var typeInfo = field.type.split(":");
                                    fieldType = typeInfo[0];
                                    refType = typeInfo[1];
                                }
                                if (fieldType === "ref") type(refType, context)(schemaType.prototype, field.name);
                                else type((_a = {}, _a[fieldType] = refType, _a), context)(schemaType.prototype, field.name);
                            } else type(field.type, context)(schemaType.prototype, field.name);
                        });
                    });
                    var rootType = schemaTypes[reflection.rootType];
                    var rootInstance = new rootType();
                    /**
                 * auto-initialize referenced types on root type
                 * to allow registering listeners immediatelly on client-side
                 */ for(var fieldName in rootType._definition.schema){
                        var fieldType = rootType._definition.schema[fieldName];
                        if (typeof fieldType !== "string") rootInstance[fieldName] = typeof fieldType === "function" ? new fieldType() // is a schema reference
                         : new (getType(Object.keys(fieldType)[0])).constructor(); // is a "collection"
                    }
                    return rootInstance;
                };
                __decorate([
                    type([
                        ReflectionType
                    ], reflectionContext)
                ], Reflection.prototype, "types", void 0);
                __decorate([
                    type("number", reflectionContext)
                ], Reflection.prototype, "rootType", void 0);
                return Reflection;
            }(Schema);
            registerType("map", {
                constructor: MapSchema,
                getProxy: getMapProxy
            });
            registerType("array", {
                constructor: ArraySchema,
                getProxy: getArrayProxy
            });
            registerType("set", {
                constructor: SetSchema
            });
            registerType("collection", {
                constructor: CollectionSchema
            });
            exports1.ArraySchema = ArraySchema;
            exports1.CollectionSchema = CollectionSchema;
            exports1.Context = Context;
            exports1.MapSchema = MapSchema;
            exports1.Reflection = Reflection;
            exports1.ReflectionField = ReflectionField;
            exports1.ReflectionType = ReflectionType;
            exports1.Schema = Schema;
            exports1.SchemaDefinition = SchemaDefinition;
            exports1.SetSchema = SetSchema;
            exports1.decode = decode;
            exports1.defineTypes = defineTypes;
            exports1.deprecated = deprecated;
            exports1.dumpChanges = dumpChanges;
            exports1.encode = encode;
            exports1.filter = filter;
            exports1.filterChildren = filterChildren;
            exports1.hasFilter = hasFilter;
            exports1.registerType = registerType;
            exports1.type = type;
            Object.defineProperty(exports1, "__esModule", {
                value: true
            });
        });
    });
    var Room = /** @class */ function() {
        function Room(name, rootSchema) {
            var _this = this;
            // Public signals
            this.onStateChange = createSignal();
            this.onError = createSignal();
            this.onLeave = createSignal();
            this.onJoin = createSignal();
            this.hasJoined = false;
            this.onMessageHandlers = createNanoEvents();
            this.id = null;
            this.name = name;
            if (rootSchema) {
                this.serializer = new (getSerializer("schema"));
                this.rootSchema = rootSchema;
                this.serializer.state = new rootSchema();
            }
            this.onError(function(code, message) {
                return console.warn("colyseus.js - onError => (" + code + ") " + message);
            });
            this.onLeave(function() {
                return _this.removeAllListeners();
            });
        }
        Room.prototype.connect = function(endpoint) {
            var _this = this;
            this.connection = new Connection();
            this.connection.events.onmessage = this.onMessageCallback.bind(this);
            this.connection.events.onclose = function(e) {
                if (!_this.hasJoined) {
                    console.warn("Room connection was closed unexpectedly (" + e.code + "): " + e.reason);
                    _this.onError.invoke(e.code, e.reason);
                    return;
                }
                _this.onLeave.invoke(e.code);
                _this.destroy();
            };
            this.connection.events.onerror = function(e) {
                console.warn("Room, onError (" + e.code + "): " + e.reason);
                _this.onError.invoke(e.code, e.reason);
            };
            this.connection.connect(endpoint);
        };
        Room.prototype.leave = function(consented) {
            var _this = this;
            if (consented === void 0) consented = true;
            return new Promise(function(resolve) {
                _this.onLeave(function(code) {
                    return resolve(code);
                });
                if (_this.connection) {
                    if (consented) _this.connection.send([
                        exports1.Protocol.LEAVE_ROOM
                    ]);
                    else _this.connection.close();
                } else _this.onLeave.invoke(4000); // "consented" code
            });
        };
        Room.prototype.onMessage = function(type, callback) {
            return this.onMessageHandlers.on(this.getMessageHandlerKey(type), callback);
        };
        Room.prototype.send = function(type, message) {
            var initialBytes = [
                exports1.Protocol.ROOM_DATA
            ];
            if (typeof type === "string") umd.encode.string(initialBytes, type);
            else umd.encode.number(initialBytes, type);
            var arr;
            if (message !== undefined) {
                var encoded = encode(message);
                arr = new Uint8Array(initialBytes.length + encoded.byteLength);
                arr.set(new Uint8Array(initialBytes), 0);
                arr.set(new Uint8Array(encoded), initialBytes.length);
            } else arr = new Uint8Array(initialBytes);
            this.connection.send(arr.buffer);
        };
        Object.defineProperty(Room.prototype, "state", {
            get: function() {
                return this.serializer.getState();
            },
            enumerable: false,
            configurable: true
        });
        Room.prototype.removeAllListeners = function() {
            this.onJoin.clear();
            this.onStateChange.clear();
            this.onError.clear();
            this.onLeave.clear();
            this.onMessageHandlers.events = {};
        };
        Room.prototype.onMessageCallback = function(event) {
            var bytes = Array.from(new Uint8Array(event.data));
            var code = bytes[0];
            if (code === exports1.Protocol.JOIN_ROOM) {
                var offset = 1;
                this.serializerId = utf8Read(bytes, offset);
                offset += utf8Length(this.serializerId);
                // Instantiate serializer if not locally available.
                if (!this.serializer) {
                    var serializer = getSerializer(this.serializerId);
                    this.serializer = new serializer();
                }
                if (bytes.length > offset && this.serializer.handshake) this.serializer.handshake(bytes, {
                    offset: offset
                });
                this.hasJoined = true;
                this.onJoin.invoke();
                // acknowledge successfull JOIN_ROOM
                this.connection.send([
                    exports1.Protocol.JOIN_ROOM
                ]);
            } else if (code === exports1.Protocol.ERROR) {
                var it_1 = {
                    offset: 1
                };
                var code_1 = umd.decode.number(bytes, it_1);
                var message = umd.decode.string(bytes, it_1);
                this.onError.invoke(code_1, message);
            } else if (code === exports1.Protocol.LEAVE_ROOM) this.leave();
            else if (code === exports1.Protocol.ROOM_DATA_SCHEMA) {
                var it_2 = {
                    offset: 1
                };
                var context_1 = this.serializer.getState().constructor._context;
                var type = context_1.get(umd.decode.number(bytes, it_2));
                var message = new type();
                message.decode(bytes, it_2);
                this.dispatchMessage(type, message);
            } else if (code === exports1.Protocol.ROOM_STATE) {
                bytes.shift(); // drop `code` byte
                this.setState(bytes);
            } else if (code === exports1.Protocol.ROOM_STATE_PATCH) {
                bytes.shift(); // drop `code` byte
                this.patch(bytes);
            } else if (code === exports1.Protocol.ROOM_DATA) {
                var it_3 = {
                    offset: 1
                };
                var type = umd.decode.stringCheck(bytes, it_3) ? umd.decode.string(bytes, it_3) : umd.decode.number(bytes, it_3);
                var message = bytes.length > it_3.offset ? decode(event.data, it_3.offset) : undefined;
                this.dispatchMessage(type, message);
            }
        };
        Room.prototype.setState = function(encodedState) {
            this.serializer.setState(encodedState);
            this.onStateChange.invoke(this.serializer.getState());
        };
        Room.prototype.patch = function(binaryPatch) {
            this.serializer.patch(binaryPatch);
            this.onStateChange.invoke(this.serializer.getState());
        };
        Room.prototype.dispatchMessage = function(type, message) {
            var messageType = this.getMessageHandlerKey(type);
            if (this.onMessageHandlers.events[messageType]) this.onMessageHandlers.emit(messageType, message);
            else if (this.onMessageHandlers.events["*"]) this.onMessageHandlers.emit("*", type, message);
            else console.warn("colyseus.js: onMessage() not registered for type '" + type + "'.");
        };
        Room.prototype.destroy = function() {
            if (this.serializer) this.serializer.teardown();
        };
        Room.prototype.getMessageHandlerKey = function(type) {
            switch(typeof type){
                // typeof Schema
                case "function":
                    return "$" + type._typeid;
                // string
                case "string":
                    return type;
                // number
                case "number":
                    return "i" + type;
                default:
                    throw new Error("invalid message type.");
            }
        };
        return Room;
    }();
    /// <reference path="../typings/cocos-creator.d.ts" />
    /**
     * We do not assign 'storage' to window.localStorage immediatelly for React
     * Native compatibility. window.localStorage is not present when this module is
     * loaded.
     */ var storage;
    function getStorage() {
        if (!storage) storage = typeof cc !== "undefined" && cc.sys && cc.sys.localStorage ? cc.sys.localStorage // compatibility with cocos creator
         : typeof window !== "undefined" && window.localStorage //RN does have window object at this point, but localStorage is not defined
         ? window.localStorage // regular browser environment
         : {
            cache: {},
            setItem: function(key, value) {
                this.cache[key] = value;
            },
            getItem: function(key) {
                this.cache[key];
            },
            removeItem: function(key) {
                delete this.cache[key];
            }
        };
        return storage;
    }
    function setItem(key, value) {
        getStorage().setItem(key, value);
    }
    function removeItem(key) {
        getStorage().removeItem(key);
    }
    function getItem(key, callback) {
        var value = getStorage().getItem(key);
        if (typeof Promise === "undefined" || !(value instanceof Promise)) // browser has synchronous return
        callback(value);
        else // react-native is asynchronous
        value.then(function(id) {
            return callback(id);
        });
    }
    var TOKEN_STORAGE = "colyseus-auth-token";
    exports1.Platform = void 0;
    (function(Platform) {
        Platform["ios"] = "ios";
        Platform["android"] = "android";
    })(exports1.Platform || (exports1.Platform = {}));
    var Auth = /** @class */ function() {
        function Auth(endpoint) {
            var _this = this;
            this._id = undefined;
            this.username = undefined;
            this.displayName = undefined;
            this.avatarUrl = undefined;
            this.isAnonymous = undefined;
            this.email = undefined;
            this.lang = undefined;
            this.location = undefined;
            this.timezone = undefined;
            this.metadata = undefined;
            this.devices = undefined;
            this.facebookId = undefined;
            this.twitterId = undefined;
            this.googleId = undefined;
            this.gameCenterId = undefined;
            this.steamId = undefined;
            this.friendIds = undefined;
            this.blockedUserIds = undefined;
            this.createdAt = undefined;
            this.updatedAt = undefined;
            // auth token
            this.token = undefined;
            this.endpoint = endpoint.replace("ws", "http");
            getItem(TOKEN_STORAGE, function(token) {
                return _this.token = token;
            });
        }
        Object.defineProperty(Auth.prototype, "hasToken", {
            get: function() {
                return !!this.token;
            },
            enumerable: false,
            configurable: true
        });
        Auth.prototype.login = function(options) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                var queryParams, data, attr;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            queryParams = Object.assign({}, options);
                            if (this.hasToken) queryParams.token = this.token;
                            return [
                                4 /*yield*/ ,
                                this.request("post", "/auth", queryParams)
                            ];
                        case 1:
                            data = _a.sent();
                            // set & cache token
                            this.token = data.token;
                            setItem(TOKEN_STORAGE, this.token);
                            for(attr in data)if (this.hasOwnProperty(attr)) this[attr] = data[attr];
                            this.registerPingService();
                            return [
                                2 /*return*/ ,
                                this
                            ];
                    }
                });
            });
        };
        Auth.prototype.save = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("put", "/auth", {}, {
                                    username: this.username,
                                    displayName: this.displayName,
                                    avatarUrl: this.avatarUrl,
                                    lang: this.lang,
                                    location: this.location,
                                    timezone: this.timezone
                                })
                            ];
                        case 1:
                            _a.sent();
                            return [
                                2 /*return*/ ,
                                this
                            ];
                    }
                });
            });
        };
        Auth.prototype.getFriends = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("get", "/friends/all")
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.getOnlineFriends = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("get", "/friends/online")
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.getFriendRequests = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("get", "/friends/requests")
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.sendFriendRequest = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("post", "/friends/requests", {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.acceptFriendRequest = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("put", "/friends/requests", {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.declineFriendRequest = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("del", "/friends/requests", {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.blockUser = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("post", "/friends/block", {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.unblockUser = function(friendId) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.request("put", "/friends/block", {
                                    userId: friendId
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Auth.prototype.request = function(method, segments, query, body, headers) {
            if (query === void 0) query = {};
            if (headers === void 0) headers = {};
            return __awaiter(this, void 0, void 0, function() {
                var queryParams, name_1, queryString, opts;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            headers["Accept"] = "application/json";
                            if (this.hasToken) headers["Authorization"] = "Bearer " + this.token;
                            queryParams = [];
                            for(name_1 in query)queryParams.push(name_1 + "=" + query[name_1]);
                            queryString = queryParams.length > 0 ? "?" + queryParams.join("&") : "";
                            opts = {
                                headers: headers
                            };
                            if (body) opts.body = body;
                            return [
                                4 /*yield*/ ,
                                http[method]("" + this.endpoint + segments + queryString, opts)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent().data
                            ];
                    }
                });
            });
        };
        Auth.prototype.logout = function() {
            this.token = undefined;
            removeItem(TOKEN_STORAGE);
            this.unregisterPingService();
        };
        Auth.prototype.registerPingService = function(timeout) {
            var _this = this;
            if (timeout === void 0) timeout = 15000;
            this.unregisterPingService();
            this.keepOnlineInterval = setInterval(function() {
                return _this.request("get", "/auth");
            }, timeout);
        };
        Auth.prototype.unregisterPingService = function() {
            clearInterval(this.keepOnlineInterval);
        };
        return Auth;
    }();
    var _a;
    var MatchMakeError = /** @class */ function(_super) {
        __extends(MatchMakeError, _super);
        function MatchMakeError(message, code) {
            var _this = _super.call(this, message) || this;
            _this.code = code;
            Object.setPrototypeOf(_this, MatchMakeError.prototype);
            return _this;
        }
        return MatchMakeError;
    }(Error);
    // - React Native does not provide `window.location`
    // - Cocos Creator (Native) does not provide `window.location.hostname` 
    var DEFAULT_ENDPOINT = typeof window !== "undefined" && typeof ((_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.hostname) !== "undefined" ? window.location.protocol.replace("http", "ws") + "//" + window.location.hostname + (window.location.port && ":" + window.location.port) : "ws://127.0.0.1:2567";
    var Client = /** @class */ function() {
        function Client(endpoint) {
            if (endpoint === void 0) endpoint = DEFAULT_ENDPOINT;
            this.endpoint = endpoint;
        }
        Object.defineProperty(Client.prototype, "auth", {
            get: function() {
                if (!this._auth) this._auth = new Auth(this.endpoint);
                return this._auth;
            },
            enumerable: false,
            configurable: true
        });
        Client.prototype.joinOrCreate = function(roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest("joinOrCreate", roomName, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.create = function(roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest("create", roomName, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.join = function(roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest("join", roomName, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.joinById = function(roomId, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest("joinById", roomId, options, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.reconnect = function(roomId, sessionId, rootSchema) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.createMatchMakeRequest("joinById", roomId, {
                                    sessionId: sessionId
                                }, rootSchema)
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                    }
                });
            });
        };
        Client.prototype.getAvailableRooms = function(roomName) {
            if (roomName === void 0) roomName = "";
            return __awaiter(this, void 0, void 0, function() {
                var url;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            url = this.endpoint.replace("ws", "http") + "/matchmake/" + roomName;
                            return [
                                4 /*yield*/ ,
                                get_1(url, {
                                    headers: {
                                        "Accept": "application/json"
                                    }
                                })
                            ];
                        case 1:
                            return [
                                2 /*return*/ ,
                                _a.sent().data
                            ];
                    }
                });
            });
        };
        Client.prototype.consumeSeatReservation = function(response, rootSchema) {
            return __awaiter(this, void 0, void 0, function() {
                var room;
                return __generator(this, function(_a) {
                    room = this.createRoom(response.room.name, rootSchema);
                    room.id = response.room.roomId;
                    room.sessionId = response.sessionId;
                    room.connect(this.buildEndpoint(response.room, {
                        sessionId: room.sessionId
                    }));
                    return [
                        2 /*return*/ ,
                        new Promise(function(resolve, reject) {
                            var onError = function(code, message) {
                                return reject(new ServerError(code, message));
                            };
                            room.onError.once(onError);
                            room["onJoin"].once(function() {
                                room.onError.remove(onError);
                                resolve(room);
                            });
                        })
                    ];
                });
            });
        };
        Client.prototype.createMatchMakeRequest = function(method, roomName, options, rootSchema) {
            if (options === void 0) options = {};
            return __awaiter(this, void 0, void 0, function() {
                var url, response;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            url = this.endpoint.replace("ws", "http") + "/matchmake/" + method + "/" + roomName;
                            // automatically forward auth token, if present
                            if (this._auth && this._auth.hasToken) options.token = this._auth.token;
                            return [
                                4 /*yield*/ ,
                                post_1(url, {
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(options)
                                })
                            ];
                        case 1:
                            response = _a.sent().data;
                            if (response.error) throw new MatchMakeError(response.error, response.code);
                            return [
                                2 /*return*/ ,
                                this.consumeSeatReservation(response, rootSchema)
                            ];
                    }
                });
            });
        };
        Client.prototype.createRoom = function(roomName, rootSchema) {
            return new Room(roomName, rootSchema);
        };
        Client.prototype.buildEndpoint = function(room, options) {
            if (options === void 0) options = {};
            var params = [];
            for(var name_1 in options){
                if (!options.hasOwnProperty(name_1)) continue;
                params.push(name_1 + "=" + options[name_1]);
            }
            return this.endpoint + "/" + room.processId + "/" + room.roomId + "?" + params.join("&");
        };
        return Client;
    }();
    var SchemaSerializer = /** @class */ function() {
        function SchemaSerializer() {}
        SchemaSerializer.prototype.setState = function(rawState) {
            this.state.decode(rawState);
        };
        SchemaSerializer.prototype.getState = function() {
            return this.state;
        };
        SchemaSerializer.prototype.patch = function(patches) {
            this.state.decode(patches);
        };
        SchemaSerializer.prototype.teardown = function() {
            var _a, _b;
            (_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a["$changes"]) === null || _b === void 0 || _b.root.clearRefs();
        };
        SchemaSerializer.prototype.handshake = function(bytes, it) {
            if (this.state) {
                // validate client/server definitinos
                var reflection = new umd.Reflection();
                reflection.decode(bytes, it);
            } else // initialize reflected state from server
            this.state = umd.Reflection.decode(bytes, it);
        };
        return SchemaSerializer;
    }();
    var NoneSerializer = /** @class */ function() {
        function NoneSerializer() {}
        NoneSerializer.prototype.setState = function(rawState) {};
        NoneSerializer.prototype.getState = function() {
            return null;
        };
        NoneSerializer.prototype.patch = function(patches) {};
        NoneSerializer.prototype.teardown = function() {};
        NoneSerializer.prototype.handshake = function(bytes) {};
        return NoneSerializer;
    }();
    registerSerializer("schema", SchemaSerializer);
    registerSerializer("none", NoneSerializer);
    exports1.Auth = Auth;
    exports1.Client = Client;
    exports1.Room = Room;
    exports1.SchemaSerializer = SchemaSerializer;
    exports1.registerSerializer = registerSerializer;
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
});

},{}],"3vlCd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LEFT", ()=>LEFT);
parcelHelpers.export(exports, "RIGHT", ()=>RIGHT);
parcelHelpers.export(exports, "DOWN", ()=>DOWN);
const LEFT = {
    row: 0,
    col: -1
};
const RIGHT = {
    row: 0,
    col: 1
};
const DOWN = {
    row: 1,
    col: 0
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aZNBS","1Mbvr"], "1Mbvr", "parcelRequire2bed")

//# sourceMappingURL=index.01440a15.js.map
