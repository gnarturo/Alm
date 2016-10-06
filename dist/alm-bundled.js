var alm=function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r,o;r=[e,n,e(1),e(2),e(1),e(2)],o=function(t,n,e,r,o,i){"use strict";function u(t){for(var e in t)n.hasOwnProperty(e)||(n[e]=t[e])}function s(t){for(var n={},e=0;e<t.length;e++){var r=t[e];n[r]=new o.Signal(function(t){return new c(t)})}return n}function a(t){var n={outbound:{},inbound:{}};for(var e in t.outbound){var r=t.outbound[e];n.outbound[r]=o.Signal.make()}for(var i in t.inbound){var u=t.inbound[i];n.inbound[u]=o.Signal.make()}return n}u(e),n.el=r.el;var c=function(){function t(t){this.raw=t,this.classes=t.target.className.split(" "),this.id=t.target.id}return t.prototype.hasClass=function(t){return this.classes.indexOf(t)!==-1},t.prototype.getClasses=function(){return this.classes},t.prototype.getId=function(){return this.id},t.prototype.getValue=function(){return this.raw.target.value},t.prototype.getRaw=function(){return this.raw},t}();n.Event=c;var f=["click","dblclick","keyup","keydown","keypress","blur","focusout","input","change","load"],l=function(){function t(t){this.gui="undefined"==typeof t.gui||t.gui,this.eventRoot="string"==typeof t.eventRoot?document.getElementById(t.eventRoot):"undefined"==typeof t.eventRoot?document:t.eventRoot,this.domRoot="string"==typeof t.domRoot?document.getElementById(t.domRoot):"undefined"==typeof t.domRoot?document.body:t.domRoot;var n=f.concat("undefined"!=typeof t.extraEvents?t.extraEvents:[]);this.events=s(n),this.ports="undefined"!=typeof t.ports?a(t.ports):{outbound:null,inbound:null},this.main=t.main,this.state=t.state,this.update=t.update,this.render=this.gui?t.render:null}return t.prototype.registerEvent=function(t,n){var e=function(t){return n.send(t)};this.eventRoot.addEventListener(t,e,!0)},t.prototype.start=function(){var t=this,n=new o.Mailbox(null),e=n.reduce(this.state,function(n,e){return null===n?e:t.update(n,e)});this.main({events:this.events,ports:this.ports,actions:n,state:e});for(var r in this.events){var u=this.events[r];u.numListeners()>0&&this.registerEvent(r,u)}if(this.gui){var s=e.map(this.render);i.render(s,this.domRoot)}return{ports:this.ports,state:e}},t}();n.App=l}.apply(n,r),!(void 0!==o&&(t.exports=o))},function(t,n,e){var r,o,i=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)};r=[e,n],o=function(t,n){"use strict";function e(t,n){n.forEach(function(n){Object.getOwnPropertyNames(n.prototype).forEach(function(e){t.prototype[e]=n.prototype[e]})})}function r(t){setTimeout(t,0)}n.derive=e;var o=function(){function t(){}return t.pipe=function(t){for(var n=t[0],e=1;e<t.length;e++)n=n.flatMap(t[e]);return n},t.prototype.flatMap=function(t){return this.map(t).flatten()},t.prototype.pipe=function(t){for(var n=this,e=0;e<t.length;e++)n=n.flatMap(t[e]);return n},t}();n.FlatMap=o,n.async=r;var u=function(){function t(t){this.fn=t,this.listeners=[]}return t.prototype.connect=function(t){return this.listeners.push(t),t},t.prototype.send=function(t){var n=this.fn(t);if("undefined"!=typeof n)for(var e=0;e<this.listeners.length;e++){var r=this.listeners[e];r.send(n)}},t.make=function(){return new t(function(t){return t})},t.prototype.recv=function(n){this.connect(new t(function(t){return n(t)}))},t.prototype.filter=function(n){var e=new t(function(t){if(n(t))return t});return this.connect(e)},t.prototype.reduce=function(n,e){var r=n,o=new t(function(t){return r=e(t,r)});return this.connect(o)},t.prototype.map=function(n){return this.connect(new t(function(t){return n(t)}))},t.prototype.done=function(){return this},t.prototype.numListeners=function(){return this.listeners.length},t}();n.Signal=u;var s=function(t){function n(){t.call(this,function(t){return t}),this.value=null}return i(n,t),n.of=function(t){var e=new n;return e.send(t),e},n.pipe=function(t){return o.pipe(t)},n.prototype.recv=function(n){var e=this;return null!==this.value?r(function(){return n(e.value)}):t.prototype.recv.call(this,n),this},n.prototype.send=function(n){null===this.value&&(this.value=n,t.prototype.send.call(this,n),this.listeners=[])},n.prototype.map=function(t){var e=new n;return this.recv(function(n){return e.send(t(n))}),e},n.prototype.flatten=function(){var t=new n;return this.recv(function(n){n.recv(function(n){t.send(n)})}),t},n.prototype.flatMap=function(t){return null},n.prototype.pipe=function(t){return null},n}(u);n.Async=s,e(s,[o]);var a=function(t){function n(n){t.call(this,function(t){return t}),this.send(n)}return i(n,t),n.prototype.send=function(n){var e=this;r(function(){t.prototype.send.call(e,n)})},n.prototype.recv=function(n){t.prototype.recv.call(this,n)},n}(u);n.Mailbox=a}.apply(n,r),!(void 0!==o&&(t.exports=o))},function(t,n,e){var r,o;r=[e,n],o=function(t,n){"use strict";function e(t,n,e){if(!t.length)return n.map(function(t){return[a.Insert,null,t]});if(!n.length)return t.map(function(t){return[a.Delete,t,null]});for(var r=t.length+1,o=n.length+1,i=new Array(r*o),u=[],s=0;s<r;s++)i[s*o]=0;for(var c=0;c<o;c++)i[c]=0;for(var f=1;f<r;f++)for(var l=1;l<o;l++)e(t[f-1],n[l-1])?i[f*o+l]=i[(f-1)*o+(l-1)]+1:i[f*o+l]=Math.max(i[(f-1)*o+l],i[f*o+(l-1)]);for(var p=r-1,d=o-1;0!==p||0!==d;)e(t[p-1],n[d-1])?(p--,d--,u.unshift([a.Merge,t[p],n[d]])):i[p*o+(d-1)]>i[(p-1)*o+d]?(d--,u.unshift([a.Insert,null,n[d]])):(p--,u.unshift([a.Delete,t[p],null]));return u}function r(t,n,o,i){if(void 0===i&&(i=0),"undefined"==typeof o||null===o)return void t.removeChild(t.childNodes[i]);if("undefined"==typeof n||null===n)return void t.insertBefore(s.makeDOMNode(o),t.childNodes[i]);if(o.treeType===u.Node){if(n.treeType===u.Node&&n.content.tag===o.content.tag){var c=t.childNodes[i];for(var f in n.content.attrs)f in o.content.attrs||(c.removeAttribute(f),delete c[f]);for(var f in o.content.attrs){var l=o.content.attrs[f];f in n.content.attrs&&l===n.content.attrs[f]||(c[f]=l,c.setAttribute(f,l))}for(var p=e(n.children,o.children,function(t,n){return"undefined"!=typeof t&&t.eq(n)}),d=0,h=0;h<p.length;h++){var v=p[h];r(t.childNodes[i],v[1],v[2],d),v[0]!==a.Delete&&d++}}}else t.replaceChild(s.makeDOMNode(o),t.childNodes[i])}function o(t,n){t.reduce(null,function(t,e){return null===t.key&&(t.key="root"),null===e?s.initialDOM(t,n):r(n,e,t),t})}function i(t,n,e){var r="undefined"==typeof e?[]:e.map(function(t,n){return"string"==typeof t?new s(t,[],u.Text):t});return new s({tag:t,attrs:n},r,u.Node)}var u;!function(t){t[t.Text=0]="Text",t[t.Node=1]="Node"}(u||(u={}));var s=function(){function t(t,n,e){this.content=t,this.children=n,this.treeType=e,this.mailbox=null,e===u.Node?"key"in this.content.attrs?(this.key=this.content.attrs.key,delete this.content.attrs.key):"id"in this.content.attrs?this.key=this.content.attrs.id:this.key=this.content.tag:this.key=this.content}return t.prototype.subscribe=function(t){return this.mailbox=t,this},t.prototype.eq=function(t){var n=this;return!!t&&(null!==n.key&&null!==t.key&&n.key===t.key)},t.makeDOMNode=function(n){if(null===n)return null;if(n.treeType===u.Text)return document.createTextNode(n.content);var e=document.createElement(n.content.tag);for(var r in n.content.attrs)e.setAttribute(r,n.content.attrs[r]);for(var o=0;o<n.children.length;o++){var i=t.makeDOMNode(n.children[o]);e.appendChild(i)}return null!==n.mailbox&&n.mailbox.send(e),e},t.initialDOM=function(n,e){for(var r=e,o=t.makeDOMNode(n);r.firstChild;)r.removeChild(r.firstChild);r.appendChild(o)},t}();n.VTree=s;var a;!function(t){t[t.Merge=0]="Merge",t[t.Delete=1]="Delete",t[t.Insert=2]="Insert"}(a||(a={})),n.render=o,n.el=i}.apply(n,r),!(void 0!==o&&(t.exports=o))}]);