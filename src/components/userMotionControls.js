AFRAME.registerComponent('user-motion-controls', {
init: function () {
this.el.addEventListener('grab-start', function (evt) {
var grabbedEl = evt.detail.hand.components['super-hands'].grabbedEls[0];
if (grabbedEl) {
grabbedEl.setAttribute('dynamic-body', 'mass', 0);
}
});
this.el.addEventListener('grab-end', function (evt) {
var grabbedEl = evt.detail.hand.components['super-hands'].grabbedEls[0];
if (grabbedEl) {
grabbedEl.setAttribute('dynamic-body', 'mass', 1);
}
});
}
});