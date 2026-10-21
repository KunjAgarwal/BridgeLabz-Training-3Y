const userData = [
    { label: "String", value: "JavaScript", type: typeof "JavaScript" },
    { label: "Number", value: 42, type: typeof 42 },
    { label: "Boolean", value: true, type: typeof true },
    { label: "Array", value: [1, 2, 3], type: Array.isArray([1, 2, 3]) ? "array" : typeof [1, 2, 3] },
    { label: "Object", value: { name: "Kunj" }, type: typeof { name: "Kunj" } },
    { label: "Null", value: null, type: "null" },
    { label: "Undefined", value: undefined, type: typeof undefined }
];
console.table(userData.map(({ label, value, type }) => ({
    label,
    value: value === undefined ? "undefined" : value === null ? "null" : JSON.stringify(value),
    type
})));
