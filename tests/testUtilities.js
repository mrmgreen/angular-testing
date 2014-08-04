// override navigator's properties to enable navigator.userAgent (and any other property) to be changed at will
var changeNavigatorProperty = function(propName, propValue){
    // Mozilla and WebKit override
    if (navigator.__defineGetter__) {
        navigator.__defineGetter__(propName, function () {
            return propValue;
        });
    } else if (Object.defineProperty) {
        // IE override
        Object.defineProperty(navigator, propName, {
            get: function () {
                return propValue;
            }
        });
    }

};

