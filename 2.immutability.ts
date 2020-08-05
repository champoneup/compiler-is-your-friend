/*
Question #2: Immutability

The function below is a "safe divide" function. That is, it promises not to throw any "divide by zero" exceptions.

Questions:
1) Spot and describe the cause of the bug that causes the "divide by zero" to occur.
2) Now, make a *single* code change on line 14:
2.1) without changing the number 42;
2.2) such that cause of the bug can be spotted by the compiler at *compile time*.
3) What did you learn from this exercise?
*/
function safeDivide(): number {
    const x: number = 42;

    if (x == 0) throw new Error("x should not be 0");

    // x = x - 42;

    return 42 / x;
}

console.log(safeDivide());

/* 
1. line: 18 divide by zero เพราะ ค่า x มีการเปลี่ยนค่า  (mutable)
2. แก้ Line: 14 เปลี่ยน let เป็น const ทำให้ x ไม่เป็นรูปแบบได้ (immutable)
2.1 เปลี่ยนเป็น const 
2.2 compile error เมื่อ มันเป็น mutate
3. ที่มีconcept นี้ขึ้นมา เพราะ มันdebug ง่ายเพราะว่าจะรู้ว่า ค่าไหนมีการ เปลี่ยนค่าได้ (mutable) หรือ ไม่สามารถเปลี่ยนค่า (immuatable)
*/