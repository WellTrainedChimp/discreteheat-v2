const { execSync } = require('child_process');

try {
    execSync('npx eslint "app/**/*.tsx" --format json', { encoding: 'utf8' });
    console.log("No errors found!");
} catch (error) {
    const data = JSON.parse(error.stdout);
    data.forEach(result => {
        result.messages.forEach(msg => {
            if (msg.severity === 2) {
                console.log(`${result.filePath}:${msg.line}:${msg.column} - ${msg.message}`);
            }
        });
    });
}
