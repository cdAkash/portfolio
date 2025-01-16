import React from 'react';
import PDFViewer from '../components/PDFViewer';

const Resume = () => {
  // Using a more reliable sample PDF URL
  const pdfUrl = "https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf";

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Resume</h2>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <PDFViewer pdfUrl={pdfUrl} />
        </div>
      </div>
    </section>
  );
};

export default Resume;