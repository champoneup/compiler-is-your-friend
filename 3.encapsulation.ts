/*
Question #3: Encapsulation

The class below, SafeDivisor, exists so that every `divide()` method call will
not cause the "divide by zero" exception to occur.

Someone wrote an `exploit()` function to test this class. He's intentionally
setting the `divisor` member variable with 0 so that the `divide()` method
will explode.

Make a *single* code change such that the compiler will prevent him from bypassing
the encapsulation. In other words, he will need to call the `setDivisor()` method 
to set the `divisor` member variable.

Questions:
1) What did you learn from this exercise?
*/
class SafeDivisor {
    private divisor: number = 1;

    setDivisor(value: number) {
        if (value == 0) {
            throw new Error("Value should not be 0");
        }
        this.divisor = value; 
    }

    divide(x: number): number { 
        return x / this.divisor;
    }
}

function exploit(): number {
    let sd = new SafeDivisor();

    sd.divisor = 0;
    return sd.divide(42); 
}

console.log(exploit());
 /* 
 1. รู้การใช้ ว่า type script default ค่าของclass จะเป็น publish ทำให้ ค่าตัวแปรที่ประกาศของ class ถูกเปลี่ยนค่า ได้ 
 เราเลยต้องใช้ private เพื่อป้องกันการเปลี่ยนค่าไม่ใช่ function
 */