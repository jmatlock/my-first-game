// Run: node validate-questions.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const context = vm.createContext({});
vm.runInContext(fs.readFileSync('questions.js','utf8') + '\nthis.bank = questionBank;', context);
const bank = context.bank;
const errors=[];
const ids=new Set(), prompts=new Set();
if (!Array.isArray(bank) || bank.length < 5) errors.push('Bank requires at least five questions');
for(const [i,q] of bank.entries()){
 if(!q || typeof q !== 'object'){errors.push(`Record ${i} is invalid`);continue;}
 for(const f of ['id','film','prompt','explanation','sourceUrl']) if(typeof q[f] !== 'string'||!q[f].trim()) errors.push(`${i}: missing ${f}`);
 if(ids.has(q.id)) errors.push(`${i}: duplicate ID`); ids.add(q.id);
 const norm = String(q.prompt).trim().toLowerCase(); if(prompts.has(norm)) errors.push(`${i}: duplicate prompt`); prompts.add(norm);
 if(!Array.isArray(q.choices)||q.choices.length!==3||q.choices.some(c=>typeof c!=='string'||!c.trim())||new Set(q.choices).size!==3) errors.push(`${i}: invalid choices`);
 if(!Number.isInteger(q.correctIndex)||q.correctIndex<0||q.correctIndex>2) errors.push(`${i}: invalid correctIndex`);
 if(typeof q.sourceUrl !== 'string'||!q.sourceUrl.startsWith('https://')) errors.push(`${i}: invalid source URL`);
}
console.log(`${bank.length} question(s); ${errors.length} structural issue(s)`);
if(errors.length) { console.error(errors.join('\n')); process.exitCode=1; }
else { const counts={}; for(const q of bank) counts[q.film]=(counts[q.film]||0)+1; console.log(counts); }
