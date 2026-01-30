export default function VoiceInput({ onCommand, language }) {
  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = language === "hi" ? "hi-IN" : "en-IN"
    recognition.start()

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript
      onCommand(text, language)
    }
  }

  return <button onClick={startListening}>Click and Speak</button>
}