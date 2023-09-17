AFRAME.registerComponent('physics-objects', {
init: function () {
this.el.addEventListener('click', function (evt) {
var clickedEl = evt.detail.target;
if (clickedEl) {
clickedEl.setAttribute('dynamic-body', 'mass', 0);
}
});
this.el.addEventListener('secondary-action', function (evt) {
var clickedEl = evt.detail.target;
if (clickedEl) {
clickedEl.setAttribute('dynamic-body', 'mass', 1);
}
});
}
});