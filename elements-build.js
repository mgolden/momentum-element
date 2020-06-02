const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files_es5 = [
    './dist/momentum-element/runtime-es5.js',
    './dist/momentum-element/polyfills-es5.js',
//    './dist/momentum-element/scripts-es5.js',
    './dist/momentum-element/main-es5.js'
  ];
  const files_es2015 = [
    './dist/momentum-element/runtime-es2015.js',
    './dist/momentum-element/polyfills-es2015.js',
//    './dist/momentum-element/scripts-es2015.js',
    './dist/momentum-element/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files_es5, 'elements/momentum-element-es5.js');
  await concat(files_es2015, 'elements/momentum-element-es2015.js');
  await fs.copyFile(
    './dist/momentum-element/styles.css',
    'elements/styles.css'
  );
})();
