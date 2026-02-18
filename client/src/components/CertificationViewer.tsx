import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Set worker source outside the component to ensure it's ready as early as possible
if (typeof window !== "undefined") {
  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

export default function CertificationViewer() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const ro = new ResizeObserver(() => {
      const w = Math.max(200, Math.floor(el.clientWidth * 0.95));
      setPageWidth(w);
    });
    ro.observe(el);
    setPageWidth(Math.max(200, Math.floor(el.clientWidth * 0.95)));
    return () => ro.disconnect();
  }, [containerRef.current]);

  // Comprehensive security measures: Block right-click, Save, Print, and Inspect
  useEffect(() => {
    const blockContextMenu = (e: MouseEvent) => e.preventDefault();

    const blockDrag = (e: DragEvent) => e.preventDefault();

    const blockKeys = (e: KeyboardEvent) => {
      const isAlt = e.altKey;
      const isCtrl = e.ctrlKey || e.metaKey;
      const isShift = e.shiftKey;
      const key = e.key.toLowerCase();

      // Block Ctrl+S (Save), Ctrl+P (Print), Ctrl+C (Copy), Ctrl+U (Source)
      if (
        isCtrl &&
        (key === "s" || key === "p" || key === "c" || key === "u")
      ) {
        e.preventDefault();
        return false;
      }

      // Block Ctrl+Shift+I / J (DevTools), F12 (DevTools)
      if (
        (isCtrl && isShift && (key === "i" || key === "j" || key === "c")) ||
        key === "f12"
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeys);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setIsLoading(false);
    setLoadError(false);
  }

  function onDocumentLoadError(error: any) {
    console.error("PDF Load Error:", error);
    setLoadError(true);
    setIsLoading(false);
  }

  return (
    <>
      <style>{`
        /* Hide certificate completely during printing */
        @media print {
          body * {
            display: none !important;
          }
          .no-print-msg {
            display: block !important;
            text-align: center;
            padding: 50px;
            font-size: 20px;
          }
        }
        
        .no-print-msg {
          display: none;
        }

        .cert-viewer canvas {
          pointer-events: none !important;
          user-select: none !important;
          -webkit-user-select: none !important;
        }
        .cert-viewer * {
          user-select: none !important;
          -webkit-user-select: none !important;
          -webkit-touch-callout: none !important;
        }
        .cert-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 99;
          background: transparent;
          cursor: default;
        }
      `}</style>

      <div className="no-print-msg">
        <h1>Printing is disabled for this document.</h1>
        <p>
          This certificate is protected and cannot be printed or downloaded.
        </p>
      </div>

      <div
        ref={containerRef}
        className="cert-viewer relative w-full rounded-lg shadow-lg overflow-hidden border-2 border-accent bg-gradient-to-b from-gray-50 to-white"
        style={{
          minHeight: "320px",
          maxHeight: "80vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        onContextMenu={e => e.preventDefault()}
      >
        <div
          style={{
            flex: 1,
            overflow: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            backgroundColor: "#f9fafb",
            padding: "12px 0",
            touchAction: "pan-y",
            userSelect: "none",
            WebkitUserSelect: "none",
            position: "relative",
          }}
        >
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Loading certification...</p>
            </div>
          )}

          {loadError ? (
            <div className="flex flex-col items-center justify-center p-8 text-center h-full">
              <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <p className="text-red-500 font-semibold mb-2">
                Gagal memuat sertifikat
              </p>
              <p className="text-gray-500 text-sm">
                Gunakan browser modern seperti Chrome atau Edge untuk melihat
                sertifikat ini.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md text-sm"
              >
                Refresh Halaman
              </button>
            </div>
          ) : (
            <div style={{ position: "relative" }}>
              <Document
                file="/images/Certification.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading=""
              >
                <Page
                  pageNumber={pageNumber}
                  width={pageWidth || undefined}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>

              {/* Security Overlay Layer */}
              <div
                className="cert-overlay"
                onContextMenu={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onMouseDown={e => {
                  if (e.button === 2) e.preventDefault();
                }}
                draggable={false}
              />
            </div>
          )}
        </div>

        {numPages && (
          <div className="bg-white border-t border-accent px-6 py-3 flex items-center justify-center gap-4">
            <button
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-primary text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              ← Previous
            </button>

            <span className="text-gray-700 font-medium text-sm">
              Page <span className="text-accent font-bold">{pageNumber}</span>{" "}
              of <span className="text-accent font-bold">{numPages}</span>
            </span>

            <button
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-primary text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Next →
            </button>
          </div>
        )}

        <div className="bg-gray-50 py-2 border-t border-gray-100 italic">
          <p className="text-[10px] text-gray-400 text-center px-4">
            Dokumen ini dilindungi. Operasi download dan print dinonaktifkan
            untuk menjaga keaslian sertifikat.
          </p>
        </div>
      </div>
    </>
  );
}
