'use client'

import { useState } from 'react'

export default function CVUploader() {
  const [file, setFile] = useState<File | null>(null)
  const [extractedText, setExtractedText] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (selectedFile) {
      // Verifică tipul fișierului
      const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!validTypes.includes(selectedFile.type)) {
        setError('Doar PDF și DOCX sunt acceptate')
        return
      }
      setFile(selectedFile)
      setError('')
      setExtractedText('')
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setLoading(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/parse-cv', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Eroare la procesare')
      }

      setExtractedText(data.text)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Eroare necunoscută')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        
        {/* Upload Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload CV (PDF sau DOCX)
          </label>
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100
              cursor-pointer"
          />
          {file && (
            <p className="mt-2 text-sm text-gray-600">
              Selectat: <span className="font-medium">{file.name}</span>
            </p>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold
            hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed
            transition duration-200"
        >
          {loading ? 'Procesez...' : 'Extrage Text din CV'}
        </button>

        {/* Results Section */}
        {extractedText && (
          <><div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Text Extras:</h3>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 max-h-96 overflow-y-auto">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                {extractedText}
              </pre>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Caractere: {extractedText.length}
            </p>
          </div><div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-700">
                💡 Demo data - Mâine integrăm Claude AI pentru parsing real + scoring automat
              </p>
            </div></>
        )}

      </div>
    </div>
  )
}