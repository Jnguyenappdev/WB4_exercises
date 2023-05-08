//parsing string. Extract three parts of product code

const partCode1 = "XYZ:1234-L";

const part1 = parsePartCode(partCode1)

console.log("Part Code: " + partCode1)
console.log("Supplier Code: " + part1.supplierCode);
console.log("Product Number: " + part1.productNum);
console.log("Product Size: " + part1.productSize)

function parsePartCode(partCode){
    const colonPos = partCode.indexOf(':');
    const supplierCode = partCode.substring(0,colonPos);
    const dashPos = partCode.indexOf('-');
    const productNum = partCode.substring(colonPos + 1, dashPos);
    const productSize = partCode.substring(dashPos + 1 );

    // can define and return object
    return{
        supplierCode: supplierCode,
        productNum: productNum,
        productSize: productSize,
    }
}
