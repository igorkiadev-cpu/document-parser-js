
// Document Parser - JavaScript
// Simple simulation of document data extraction and CSV generation

const documentText = `
Delivery Note
Date: 2025-01-10
Product: Sample Product
Quantity: 10
Reference: REF-001
`;

// Simple parser function
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

// Convert parsed data to CSV format
function convertToCSV(data) {
  const header = "date,product,quantity,reference";
  const row = `${data.date},${data.product},${data.quantity},${data.reference}`;
  return `${header}\n${row}`;
}

// Run parser
const parsedData = parseDocument(documentText);
const csvOutput = convertToCSV(parsedData);

// Output result
console.log(csvOutput);
