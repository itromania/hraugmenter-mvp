import CVUploader from '@/components/CVUploader'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Header */}
          <div className="container mx-auto px-4 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                AI HR Screening Agent
              </h1>
              <p className="text-gray-600">
                Demo: Upload CV → Extrage text automat
              </p>
            </div>
          </div>

          {/* CV Uploader */}
          <CVUploader />
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="font-bold text-lg mb-2">CV Screening</h3>
              <p className="text-gray-600">Upload CV + Job Description → Scoring automat 0-100</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-lg mb-2">Pre-interviuri</h3>
              <p className="text-gray-600">Întrebări personalizate → Evaluare automată răspunsuri</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">85% mai rapid</h3>
              <p className="text-gray-600">De la 30 min → 4 min per candidat procesat</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Beta Launch - Ianuarie 2025</h2>
            <p className="text-lg mb-6">
              Primii 20 clienți: <span className="font-bold">50% discount pe 12 luni</span>
            </p>
            <p className="text-xl mb-6">€24.5/lună (normal €49)</p>
            
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="email@company.com"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 text-lg"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
            
            <p className="text-sm mt-6 opacity-90">
              🚀 Powered by <span className="font-semibold">AugmenterOS</span>
            </p>
          </div>

           {/* Footer */}
          <div className="mt-12 text-center text-gray-500 text-sm">
            <p>Building in public • Day 2/30 • Powered by AugmenterOS</p>
          </div>

        </div>
      </div>
    </main>
  )
}