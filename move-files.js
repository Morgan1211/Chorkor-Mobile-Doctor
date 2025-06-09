const fs = require('fs');
const path = require('path');

// Create public directory if it doesn't exist
if (!fs.existsSync('public')) {
    fs.mkdirSync('public');
}

// Create images directory in public if it doesn't exist
if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images');
}

// Files to move
const filesToMove = [
    'index.html',
    'about.html',
    'health-tips.html',
    'creator.html'
];

// Move HTML files
filesToMove.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('public', file));
        console.log(`Moved ${file} to public directory`);
    }
});

// Move images directory
if (fs.existsSync('images')) {
    const copyDir = (src, dest) => {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest, { recursive: true });
        }
        
        const entries = fs.readdirSync(src, { withFileTypes: true });
        
        for (const entry of entries) {
            const srcPath = path.join(src, entry.name);
            const destPath = path.join(dest, entry.name);
            
            if (entry.isDirectory()) {
                copyDir(srcPath, destPath);
            } else {
                fs.copyFileSync(srcPath, destPath);
            }
        }
    };
    
    copyDir('images', 'public/images');
    console.log('Moved images directory to public');
} 