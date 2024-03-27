import{a7 as h,a8 as u,a9 as d,aa as C,ab as c,ac as _}from"./vendor-AsFy8gcr.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $ extends u{constructor(){super(...arguments),this._$Cq=new d(this),this._$CK=new C}render(e,t){return c}update(e,[t,a]){if(this.isConnected||this.disconnected(),t===this._$CX)return;this._$CX=t;let s=0;const{_$Cq:o,_$CK:r}=this;return _(t,async i=>{for(;r.get();)await r.get();const n=o.deref();if(n!==void 0){if(n._$CX!==t)return!1;a!==void 0&&(i=a(i,s)),n.commitValue(i,s),s++}return!0}),c}commitValue(e,t){this.setValue(e)}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}const l=h($);export{l as h};
