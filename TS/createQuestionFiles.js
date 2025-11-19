// create-files.js
const fs = require("fs");
const path = require("path");

const s = process.argv[2];

if (!s) {
  console.error("Usage: node create-files.js <name>");
  process.exit(1);
}

const dir = path.join(process.cwd(), s);

// Create directory
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  console.log(`Created directory: ${dir}`);
}

// Create .ts file
const filePath = path.join(dir, `${s}.ts`);
fs.writeFileSync(
  filePath,
  `function ${s}() {};
  
  export default ${s};
`,
);
console.log(`Created: ${filePath}`);

// Create test .ts file
const testPath = path.join(dir, `${s}.test.ts`);
fs.writeFileSync(
  testPath,
  `import ${s} from "./${s}";
  
  describe(${s}, () => {
    test('Case 1', () => {
      const input = 0;
      const output = 0;
      expect(${s}(input)).toEqual(output);
    });
    
    test('Case 2', () => {
      const input = 0;
      const output = 0;
      expect(${s}(input)).toEqual(output);
    });
  });
`,
);
console.log(`Created: ${testPath}`);
