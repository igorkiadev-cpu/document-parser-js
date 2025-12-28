// Document Parser - JavaScript
// Simulates extracting structured data from a document and exporting to CSV

function parseDocument(text) {
  const data = {
    date: "2025-01-10",
    product: "Sample Product",
    quantity: 10,
    reference: "REF-001"
  };

  return data;
}

function convertToCSV(data) {
  const headers = Object.keys(data).join(",");
  const values = Object.values(data).join(",");
  return `${headers}\n${values}`;
}

// Simulated input document
const documentText = `
Delivery Date: 2025-01-10
Product: Sample Product
Quantity: 10
Reference: REF-001
`;

const parsedData = parseDocument(documentText);
const csvOutput = convertToCSV(parsedData);

console.log("Generated CSV:");
console.log(csvOutput);
