function earth_circumference() {
    var arg1 = prompt('');

    if (/^[0-9]*$/.test(arg1)){
        parseFloat(arg1); //Circumference
        var diameter = 1000000.0 / Math.PI;
        var app = (diameter + arg1) * Math.PI;

        $('.test').append('app');
    }
}