var setup;

try {
   var autobahn = require('autobahn');
} catch (e) {
   // when running in browser, AutobahnJS will
   // be included without a module system
}

var connection = new autobahn.Connection({
   url: 'ws://127.0.0.1:8080/ws',
   realm: 'realm1'}
);

connection.onopen = function (session) {

   function onevent1(args) {
        for (var key in args[0]) { // for all values
            if (setup[key] != null) { // if it's associated to a frontend tag
                window[setup[key]['tag']]["refresh"](args[0][key]);
            }
        }
   }

    session.call("setup").then(
        function (res) {
            setup = res;
            for (var key in setup) {
                try {
                    window[setup[key]['tag']]["setLabel"](setup[key]['label']);
                }
                catch (e) {}
                try {
                    window[setup[key]['tag']]["setCustomSectors"](setup[key]['sectors']);
                }
                catch (e) {}
                try {
                    window[setup[key]['tag']]["setMax"](setup[key]['max']);
                }
                catch (e) {}
                try {
                    window[setup[key]['tag']]["setDecimals"](setup[key]['decimals']);
                }
                catch (e) {}
            }
        },
        function (err) {
            console.log("error:",  setup[key]['tag'], err);
        }
    );

   session.subscribe('data', onevent1);

};



connection.open();
