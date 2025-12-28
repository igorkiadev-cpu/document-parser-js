// Document Parser - JavaScript
// Reads a text file, extracts fields, and exports CSV

const fs = require("fs");
const path = require("path");

// Path to input document
const filePath = path.join(__dirname, "sample-document.txt");

// Read document file
const documentText = fs.readFileSync(filePath, "utf-8");

// Parse document fields
function parseDocument(text) {
  const date = text.match(/Date:\s(.+)/)?.[1];
  const product = text.match(/Product:\s(.+)/)?.[1];
  const quantity = text.match(/Quantity:\s(.+)/)?.[1];
  const reference = text.match(/Reference:\s(.+)/)?.[1];

  return {
    date,
    product,
    quantity,
    reference
  };
}

// Convert parsed data to CSV
function convertToCSV(data) {
  const header = "date,product,quantity,reference";
  const row = `${data.date},${data.product},${data.quantity},${data.reference}`;
  return `${header}\n${row}`;
}

// Run process
const parsedData = parseDocument(documentText);
const csvOutput = convertToCSV(parsedData);

// Output result
console.log(csvOutput);

