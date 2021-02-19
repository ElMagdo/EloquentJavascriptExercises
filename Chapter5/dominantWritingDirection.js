function characterScript(code) {
for (let script of SCRIPTS) {
if (script.ranges.some(([from, to]) => {
return code >= from && code < to;
})) {
return script;
}
}
return null;
}

function countBy(items, groupName) {
let counts = [];
for (let item of items) {
let name = groupName(item);
let known = counts.findIndex(c => c.name == name);
if (known == -1) {
counts.push({name, count: 1});
} else {
counts[known].count++;
}
}
return counts;
}