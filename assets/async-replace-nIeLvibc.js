import{a2 as h,a3 as u,a4 as d,a5 as C,a6 as o,a7 as _}from"./vendor-rBQtTwS9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends u{constructor(){super(...arguments),this._$Cq=new d(this),this._$CK=new C}render(e,t){return o}update(e,[t,r]){if(this.isConnected||this.disconnected(),t===this._$CX)return;this._$CX=t;let s=0;const{_$Cq:c,_$CK:a}=this;return _(t,async i=>{for(;a.get();)await a.get();const n=c.deref();if(n!==void 0){if(n._$CX!==t)return!1;r!==void 0&&(i=r(i,s)),n.commitValue(i,s),s++}return!0}),o}commitValue(e,t){this.setValue(e)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const l=h($);export{l as h};
