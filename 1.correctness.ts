/*
Question #1: Correctness

In TypeScript, write a function called "scriptAt". Prove that it's correct by providing a set of test cases. 
The function will do as follows.

Given a string as an input, find the index of the string "Script" within the input string. 

You can use Google to look up the method calls.

Questions:
1) How to ensure that the input is a string at compile time?
2) What did you learn from this exercise?
*/



/*
1: ระบุType ตอนกำหนดหนดType สำหรับ parameter และ return 
2: เรียนรู้ว่าการระบุtype ช่วยให้ เป็นตัวเช็คค่าที่รับเข้ามาType มันต้องถูกต้อง
*/
function scriptAt(data: string): number {
    return data.indexOf('Script');
}

console.log(scriptAt('type is not Script'));