    /**
     * Function to work out if user is intending to hover over an element
     * @param {any} element
     * @param {any} delay
     * @param {any} callback
     */
    function hoverIntent(element, delay, callback) {
        var timer;

        if ($(element).is(':hover')) {
            timer = setTimeout(function () {
                return callback();
            }, delay);

            $(element).on({
                mouseleave: function () {
                    clearTimeout(timer);
                }
            });
        }
    }

    /**
     * Function that does the opposite of hoverIntent. Makes sure that an element is NOT hovered intently.
     * @param {any} element
     * @param {any} delay
     * @param {any} callback
     */
    function unhoverIntent(element, delay, callback) {
        var timer;

        if ($(element).not(':hover')) {
            timer = setTimeout(function () {
                return callback();
            }, delay);

            $(element).on({
                mouseenter: function () {
                    clearTimeout(timer);
                }
            });
        }
    }