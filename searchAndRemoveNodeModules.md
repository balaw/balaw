```js
const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const desktopPath = '/Users/DELL/OneDrive/Desktop'; // Change this to your desktop path

// Function to search for node_modules directories recursively
function searchAndRemoveNodeModules(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(directory, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error('Error stating file:', err);
                    return;
                }

                if (stats.isDirectory()) {
                    if (file === 'node_modules') {
                        console.log('Removing:', filePath);
                        fse.remove(filePath, err => {
                            if (err) {
                                console.error('Error removing directory:', err);
                                return;
                            }
                            console.log('Directory removed:', filePath);
                        });
                    } else {
                        searchAndRemoveNodeModules(filePath); // Recursively search
                    }
                }
            });
        });
    });
}

// Start the search from the desktop
searchAndRemoveNodeModules(desktopPath);
```

