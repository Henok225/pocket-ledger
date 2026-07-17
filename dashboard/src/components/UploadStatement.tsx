import { useState } from "react";

interface Props {
  onUpload: (file: File) => Promise<void>;
}

export default function UploadStatement({ onUpload }: Props) {

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);


  async function handleUpload() {

    if (!file) return;

    try {
      setUploading(true);

      await onUpload(file);

      setFile(null);

    } finally {
      setUploading(false);
    }
  }


 return (
  <div className="bg-white shadow rounded-lg p-6 space-y-4">

    <h2 className="text-xl font-semibold">
      Upload Statement
    </h2>


    <input
      className="border rounded px-3 py-2"
      type="file"
      accept=".csv,.pdf"
      onChange={(e) =>
        setFile(e.target.files?.[0] ?? null)
      }
    />


    {file && (
      <p className="text-sm text-gray-600">
        Selected: {file.name}
      </p>
    )}


    <button
      className="bg-green-600 relative left-[10px] text-white px-5 py-3 cursor-pointer rounded hover:bg-green-700 disabled:bg-gray-400"
      onClick={handleUpload}
      disabled={!file || uploading}
    >
      {uploading ? "Uploading..." : "Upload"}
    </button>

  </div>
);
}