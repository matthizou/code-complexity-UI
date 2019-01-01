const pathLib = require('path')
const { getComplexityData } = require('code-complexity-evaluator')
const chalk = require('chalk')
const fs = require('fs')

const cwd = process.cwd()
const inputPath = pathLib.resolve(cwd, process.argv[2])

let now = new Date()
const offset = now.getTimezoneOffset()
now = new Date(now.getTime() + offset * 60 * 1000)
const formattedNow = now.toISOString().split('T')[0]

const outputPath = pathLib.resolve(cwd, `./data/${formattedNow}.json`)

console.log(chalk.cyan(`Target path: ${inputPath}`))

const complexityData = getComplexityData(inputPath, {
  extensions: ['.coffee', '.haml'],
  withDetails: true,
})

try {
  fs.writeFileSync(outputPath, complexityData)
} catch (err) {
  console.error(chalk.red(`Error while creating output file: ${outputPath}`))
  console.error(`  Details: ${err}`)
}

//   /** Create POT file at the specified location */
//  function toFile(fileName) {
//     try {
//       // Create PO file content
//       const poContent = Object.keys(this.data).map(key => {
//         const { path, text } = this.data[key];
//         return `#: ${path}\n` +
//           `msgctxt "${key}"\n` +
//           `msgid "${text}"\n` +
//           `msgstr ""\n`;
//       }).join('\n');
//       // Write in file
//       fs.writeFileSync(fileName, poContent);
//     } catch (err) {
//       console.error(`Error while creating output file: ${fileName}`);
//       console.error(`  Details: ${err}`);
//     }
//   }
// }

// const exec = require('child_process').exec
// const child = exec(`eval-complexity -p ${path}`, (error, stdout, stderr) => {
//   console.log(`stdout: ${stdout}`)
//   console.log(`stderr: ${stderr}`)
//   if (error !== null) {
//     console.log(`exec error: ${error}`)
//   }
// })
