"use script";
const names = ['Pierre', 'Julie',  'Grégory', 'Grégoire','Appoline', 'Philippa', 'Christophe',
'Aline'];

const includeAP = names.filter((name) => name.includes("p") || name.includes("P"));

console.log(includeAP);

