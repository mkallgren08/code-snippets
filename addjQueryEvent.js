// This is a generic function to add a new event listner to jQuery

let addEvent = function(object, type, callback) {
    if (object == null || typeof(object) == 'undefined') return;
    if (object.addEventListener) {
        object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
        object.attachEvent("on" + type, callback);
    } else {
        object["on"+type] = callback;
    }
  };

// Example: adding a window resize listner

addEvent(window, "resize", function(event) {
    console.log('resized');
  });