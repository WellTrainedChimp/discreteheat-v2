const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

try {
    // Run eslint and capture stdout
    const output = execSync('npx eslint "app/(hubs)/**/*.tsx" --format json', { encoding: 'utf8' });
} catch (error) {
    // eslint exits with 1 if there are errors, stdout holds the JSON
    const data = JSON.parse(error.stdout);
    let fixedCount = 0;

    data.forEach(result => {
        if (result.errorCount === 0 && result.warningCount === 0) return;

        let content = fs.readFileSync(result.filePath, 'utf8');
        let lines = content.split('\n');

        // Handle no-unescaped-entities
        let entityMessages = result.messages.filter(m => m.ruleId === 'react/no-unescaped-entities');
        // Sort ascending by line then column so replacing backwards works
        entityMessages.sort((a, b) => {
            if (a.line !== b.line) return b.line - a.line;
            return b.column - a.column;
        });

        entityMessages.forEach(msg => {
            const lineIdx = msg.line - 1;
            const colIdx = msg.column - 1;

            let line = lines[lineIdx];
            const char = line[colIdx];

            if (char === "'") {
                lines[lineIdx] = line.substring(0, colIdx) + '&apos;' + line.substring(colIdx + 1);
                fixedCount++;
            } else if (char === '"') {
                lines[lineIdx] = line.substring(0, colIdx) + '&quot;' + line.substring(colIdx + 1);
                fixedCount++;
            }
        });

        // Handle unused-vars warnings
        let warnings = result.messages.filter(m => m.ruleId === '@typescript-eslint/no-unused-vars');
        warnings.sort((a, b) => b.line - a.line);
        warnings.forEach(msg => {
            const lineIdx = msg.line - 1;
            // If it's a warning about an unused import, just remove the line
            // Only remove if it includes 'import '
            if (lines[lineIdx] && lines[lineIdx].includes('import ')) {
                lines.splice(lineIdx, 1);
                fixedCount++;
            }
        });

        fs.writeFileSync(result.filePath, lines.join('\n'), 'utf8');
    });

    console.log(`Fixed ${fixedCount} issues.`);
}
