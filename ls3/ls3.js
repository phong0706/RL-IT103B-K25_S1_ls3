const testDataSet = [
    { label: "Trường hợp chuẩn 1 (Số nguyên)", value: "150000" },
    { label: "Trường hợp chuẩn 2 (Số thực)", value: "3.75" },
    { label: "Trường hợp biên 1 (Chuỗi rỗng)", value: "" },
    { label: "Trường hợp biên 2 (Chuỗi chứa chữ cái)", value: "100k" },
    { label: "Trường hợp đặc biệt 1 (Giá trị null)", value: null },
    { label: "Trường hợp đặc biệt 2 (Giá trị undefined)", value: undefined }
];

console.log("========================================================================");
console.log("           BẢNG THỰC NGHIỆM ĐỐI CHỨNG: Number() vs Unary Plus (+)");
console.log("========================================================================");
console.log("Dữ liệu đầu vào                         | Number()         | Unary Plus (+)");
console.log("------------------------------------------------------------------------");

// Test 1
{
    const item = testDataSet[0];
    const resNum = Number(item.value);
    const resUnary = +item.value;
    console.log(`"${item.value}" (${item.label.padEnd(30, ' ')}) | ${resNum} (${typeof resNum})    | ${resUnary} (${typeof resUnary})`);
}

// Test 2
{
    const item = testDataSet[1];
    const resNum = Number(item.value);
    const resUnary = +item.value;
    console.log(`"${item.value}" (${item.label.padEnd(30, ' ')}) | ${resNum} (${typeof resNum})    | ${resUnary} (${typeof resUnary})`);
}

// Test 3
{
    const item = testDataSet[2];
    const resNum = Number(item.value);
    const resUnary = +item.value;
    console.log(`""     (${item.label.padEnd(30, ' ')}) | ${resNum} (${typeof resNum})       | ${resUnary} (${typeof resUnary})`);
}

// Test 4
{
    const item = testDataSet[3];
    const resNum = Number(item.value);
    const resUnary = +item.value;
    console.log(`"${item.value}"  (${item.label.padEnd(30, ' ')}) | ${resNum} (${typeof resNum})        | ${resUnary} (${typeof resUnary})`);
}

// Test 5
{
    const item = testDataSet[4];
    const resNum = Number(item.value);
    const resUnary = +item.value;
    console.log(`null   (${item.label.padEnd(30, ' ')}) | ${resNum} (${typeof resNum})       | ${resUnary} (${typeof resUnary})`);
}

// Test 6
{
    const item = testDataSet[5];
    const resNum = Number(item.value);
    const resUnary = +item.value;
    console.log(`undef  (${item.label.padEnd(30, ' ')}) | ${resNum} (${typeof resNum})      | ${resUnary} (${typeof resUnary})`);
}

console.log("========================================================================");