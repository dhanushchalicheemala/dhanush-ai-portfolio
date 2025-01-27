import Hero from '@/components/Hero'
import NeuralScene from '@/components/Scene'

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <NeuralScene />
      <Hero />
      
      {/* Chatbot UI */}
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
        <h3 className="text-blue-600 font-bold mb-2">Dhanush AI Assistant</h3>
        <input 
          type="text" 
          placeholder="Ask about projects..." 
          className="border p-2 rounded w-64"
        />
        <div className="mt-2 text-sm text-gray-600">
          Try: "Tell me about COVID sentiment analysis"
        </div>
      </div>
    </main>
  )
}
