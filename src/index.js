// import { lookupService } from 'node:dns/promises';
// import fs from 'node:fs/promises';

/* ===Sync method=== */

// const content = fs.readFileSync('./src/files/data.json');
// fs.writeFileSync('./src/files/output.txt', content);

// const entry = JSON.parse(content.toString());
// const entry = content.toString();

// console.log(entry);

// console.log(content.toString());

/* ===Callback method=== */

// fs.readFile('./src/files/data.json', (err, content) => {
//     fs.writeFile('./src/files/output.txt', content, (err) => {
//         console.log('write');
//     });
//     console.log('read');
// });
// console.log('finish');

/* ===Async await method=== */

// const content = await fs.readFile('./src/files/data.json');
// await fs.writeFile('./src/files/output.txt',content);

// console.log(content.toString());

/* ============================ */

// import fs from 'node:fs/promises';

// const filePath = './src/files/data.txt';

// const fileOperation = async ({ action, data, path }) => {
//   switch (action) {
//     case 'read': {
//       const result = await fs.readFile(filePath, 'utf8');
//       console.log(JSON.parse(result).message);
//       break;
//     }
//     case 'add': {
//       const append = await fs.appendFile(filePath, data);
//       console.log(append);
//       break;
//     }

//     case 'replace': {
//       const replace = await fs.writeFile(filePath, data);
//       console.log(replace);
//       break;
//     }
//     case 'rename': {
//       //  fs.rename(filePath, `${filePath}smth`);
//       fs.rename('text.txt', 'newtext.txt');
//     }
//     case 'delete': {
//       fs.unlink(path);
//     }

//     default:
//       console.log('Unknown action');
//       break;
//   }
// };

// fileOperation({ action: 'read' });
// fileOperation({ action: 'add', data: '\n Aleksandr' });
// fileOperation({ action: 'replace', data: 'New data'});
// fileOperation({ action: 'rename'});
// fileOperation({ action: 'delete', path: './src/files/data.txtsmth' });
