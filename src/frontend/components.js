// Bars
var bar1 = new Bar({
    id: "bar1",
    isVertical: true,
    fillColor: "#d64d8a",
    textEnding: "",
    textSize: 60
});

var bar2 = new Bar({
    id: "bar2",
    isVertical: true,
    fillColor: "#46877f",
    textSize: 30
});

// Text and numbers
var speed = new Text({ id: "speed", value: "0", size: 14 });

var speed_unit = new Text({ id: "speed_unit", value: "km/h", size: 3 });

var gear = new Text({ id: "gear", value: "N", size: 14 });

var time = new Text({
    id: "time",
    value: "00:00:00",
    size: 4,
    style: "italic",
});

var odo = new Text({
    id: "odo",
    value: "0",
    size: 3,
    style: "italic",
    suffix: " km"
});

// Icons
var icon1 = new Icon({
    id: "icon1",
    pathOff: "check_engine.svg",
    pathOn:  "check_engine_on.svg"
});

// Gauges
var gauge1 = new Gauge({id: "gauge1"});
var gauge2 = new Gauge({id: "gauge2"});
var gauge3 = new Gauge({id: "gauge3"});
var gauge4 = new Gauge({id: "gauge4"});
var gauge5 = new Gauge({id: "gauge5"});
var gauge6 = new Gauge({id: "gauge6"});
var gauge7 = new Gauge({id: "gauge7"});
var gauge8 = new Gauge({id: "gauge8"});
var gauge9 = new Gauge({id: "gauge9"});
var gauge10 = new Gauge({id: "gauge10"});