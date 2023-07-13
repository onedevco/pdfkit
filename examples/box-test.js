var PDFDocument = require('../js/pdfkit');
var fs = require('fs');

const mm2pt = mm => mm * 2.83465;

// Create a new PDFDocument
var doc = new PDFDocument({
  trimBox: [mm2pt(15), mm2pt(15), mm2pt(-5), mm2pt(-5)]
});

doc.pipe(fs.createWriteStream('box-test.pdf'));

// Set some meta data
doc.info['Title'] = 'Box Test Document';
doc.info['Author'] = 'Nigel Watson';

// Draw a triangle and a circle
doc
  .save()
  .moveTo(100, 150)
  .lineTo(100, 250)
  .lineTo(200, 250)
  .fill('#FF3300');

doc
  .moveTo(0, 0)
  .lineTo(200, 200)
  .stroke('black');

doc.circle(280, 200, 50).fill('#6600FF');

doc
  .addPage({
    trimBox: mm2pt(10)
  })
  .moveTo(0, 0)
  .lineTo(200, 200)
  .stroke('black')
  .circle(280, 200, 50)
  .fill('#6600FF');

doc.end();
