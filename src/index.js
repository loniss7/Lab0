alert("Lab0");

function f1(x) { return x ** 2 - Math.cos(x); }

function leftRiemann(f, a, b, n) {
    let h = (b - a) / n, sum = 0;
    for (let i = 0; i < n; i++) sum += f(a + i * h);
    return sum * h;
}

let a = parseFloat(prompt("Введите начало интервала (a):"));
let b = parseFloat(prompt("Введите конец интервала (b):"));
let n = 10;
let result = leftRiemann(f1, a, b, n);

alert("Приближённое значение интеграла: F(x) = x ** 2 - cos(x) на [" + a + ", " + b + "] равно " + result.toFixed(6));