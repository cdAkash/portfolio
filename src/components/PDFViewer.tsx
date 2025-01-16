import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set the workerSrc property
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  return (
    <div className="pdf-viewer" style={{ width: '100%', height: '120vh', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Document
        file="/cvdoc.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={() => setError(true)}
        loading={
          <div className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        }
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1.5} />
        ))}
      </Document>
      
      {error && (
        <div className="text-center text-red-500">
          Failed to load PDF.
        </div>
      )}
    </div>
  );
};

export default PDFViewer;