var Contact = Contact || {};

Contact = ( function (self) {
    "use strict";

    self.ProxyCache = function (_List) {
        var List = [];
        var cache = {};


        this.search = function (strategy) {

            if(this.inCache(strategy)) {

                return cache[strategy];
            }

            var inCache = null;

            for(var i=0; i < List.length; i++) {

                inCache = List[i].search(strategy);
                console.log(inCache);

                if(inCache !== null) {
                    cache[strategy] = inCache;
                    break;
                }
            }

            return inCache;


        };

        this.inCache = function (strategy) {

            return cache.hasOwnProperty(strategy);

        };



        var init = function (_List) {

            List = _List;
        };

        init(_List);
    };


    return self;
}(Contact || {}) );