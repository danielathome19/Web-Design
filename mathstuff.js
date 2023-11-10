function doMath() {
    var num1 = document.getElementById("num1").value;
    num1 = Number(num1);
    var num2 = document.getElementById("num2").value;
    num2 = Number(num2);

    var add = num1 + num2;
    var sub = num1 - num2;
    var mul = num1 * num2;
    var div = num1 / num2;
    var mod = num1 % num2;   // Modulus
    var pow = num1 ** num2;  // Exponent (x^y)
    var sqn1 = Math.sqrt(num1);
    var sqn2 = Math.sqrt(num2);

    var p = document.getElementById("output");
    var out = "";
    out += "Add: "      + add + "<br/>";
    out += "Subtract: " + sub + "<br/>";
    out += "Multiply: " + mul + "<br/>";
    out += "Divide: "   + div + "<br/>";
    out += "Modulus: "  + mod + "<br/>";
    out += "Pow: "      + pow + "<br/>";
    out += "sqrt(num1): " + sqn1.toFixed(6) + "<br/>";
    out += "sqrt(num2): " + sqn2.toFixed(6) + "<br/>";
    p.innerHTML = out;
}