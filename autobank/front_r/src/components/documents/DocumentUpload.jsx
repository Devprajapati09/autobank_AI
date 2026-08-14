import { UploadCloud } from "lucide-react";
import { useState } from "react";
import Button from "../common/Button.jsx";

export default function DocumentUpload({ onUpload }) {
  const [fileName, setFileName] = useState(null);

  return (
    <div className="doc-upload-zone">
      <UploadCloud size={28} style={{ marginBottom: 10 }} />
      <p style={{ fontSize: 13.5, fontWeight: 600 }}>{fileName || "Drag & drop a document, or browse"}</p>
      <p className="text-faint" style={{ fontSize: 11.5, margin: "4px 0 14px" }}>PDF, JPG or PNG — up to 10MB</p>
      <input
        type="file"
        id="doc-upload-input"
        style={{ display: "none" }}
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) {
            setFileName(f.name);
            onUpload?.(f);
          }
        }}
      />
      <Button variant="ghost" size="sm" onClick={() => document.getElementById("doc-upload-input").click()}>
        Browse files
      </Button>
    </div>
  );
}
