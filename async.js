(function () {
    'use strict';

    function _async(generator) {
        let iterator = generator();
        return function _await(yieldValue) {
            let next = iterator.next(yieldValue);

            if (!next.done) {
                next.value.then(
                    result => _await(result),
                    err => iterator.throw(err)
                );
            } else {
                return Promise.resolve(next.value);
            }
        }
    }




})();