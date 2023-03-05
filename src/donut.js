

function setup (){
    var a = 0;
    var b = 0;



}

function draw (){
    for (var i = 0; i < 6.28; i += 0.07){
        for (var j = 0; j < 6.28; j += 0.02){
            var c = sin(i);
            var d = cos(j);
            var e = sin(a);
            var f = sin(j);
            var g = cos(a);
            var h = d + 2;
            var d = 1 / (c*h*e+f*g+5);
            var l = cos(i);
            var m = cos(b);
            var n = sin(b);
            var t = c*h*g-f*e;
            
            var x = 40 + 30 * d * (l*h*m-t*n);
            var y = 12 + 15 * d * (l * h * n + t * m);
            var o = x + 80 * y;
            var n = 8*((f*e-c*d*g)*m-c*d*f-e*g-l*d*n);

            if (22 > y && y > 0 && x > 0 && 80 > x && z[o] < d){
                z[o] = d;
                b = ".,-~:;=!*#$@"[n > 0 ? n : 0];
                a.fillStyle = b;
                a.fillText(b, x, y);
            }
        }
    }

}