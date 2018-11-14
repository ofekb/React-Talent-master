export const user = [
    {
        type: "number",
        name: "age",
        isValid: val => val <= 120 && val >= 0,
        errMsg:"age must be 0-120"

    },
    {
        type: "text",
        name: "firstName",
        isValid: val => val.length>2,
        errMsg:"firstName min 2 digits"
    },
    {
        type: "text",
        name: "lastName",
        isValid: val => val.length>4,
        errMsg:"lastName min 4 digits"
    },
    {
        type: "password",
        name: "password",
        isValid: val => val.length>8,
        errMsg:"password min 8 digits"
    },
]