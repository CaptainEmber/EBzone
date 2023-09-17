AFRAME.registerComponent('teleport', {
init: function () {
this.el.addEventListener('teleportstart', function (evt) {
var teleportEl = evt.detail.target;
if (teleportEl) {
teleportEl.setAttribute('visible', false);
}
});
this.el.addEventListener('teleportend', function (evt) {
var teleportEl = evt.detail.target;
if (teleportEl) {
teleportEl.setAttribute('visible', true);
}
});
}
});