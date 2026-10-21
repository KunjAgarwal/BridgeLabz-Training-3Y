const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

const isSecure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;

const isUnsafe = !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside;

console.log(`Door locked: ${isDoorLocked}`);
console.log(`Window closed: ${isWindowClosed}`);
console.log(`Alarm on: ${isAlarmOn}`);
console.log(`Owner inside: ${isOwnerInside}`);
console.log(`Status: ${isSecure && !isUnsafe ? "Secure" : "Unsafe"}`);

