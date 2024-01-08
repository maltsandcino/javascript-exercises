const sumAll = function(a, b) {
    if (a < 0 || b < 0 || Number.isInteger(a) == false || Number.isInteger(b) == false){
        return "ERROR";
    }
        else {
            if (a < b) {
                var sum = 0;
                while (a <= b) {
                    sum = sum + a;
                    a++;
                }
                return sum;
                }
            
            else if (b < a) {
                var sum = 0;
                while (b <= a) {
                    sum = sum + b;
                    b++;
                }
                return sum;
            }
            else {
                return "ERROR";
            }
        }
};

// Do not edit below this line
module.exports = sumAll;
