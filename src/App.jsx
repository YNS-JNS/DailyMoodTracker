import { useState } from "react";

function App() {
  // Global States:
  const [selectedMood, setSelectedMood] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);

  // Moods
  const moods = ['😺', '😿', '😾', '😎'];

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = () => {
    // setLoading(true);
    switch (selectedMood) {
      case '😺':
        setMessage("You're feeling happy!");
        break;
      case '😿':
        setMessage("You're feeling sad.");
        break;
      case '😾':
        setMessage("You're feeling angry!");
        break;
      case '😎':
        setMessage("You're feeling cool.");
        break;
      default:
        setMessage('');
        break;
    }
    setSubmitted(true);
    // setLoading(false);
  };

  const handleReturn = () => {
    setSelectedMood('');
    setSubmitted(false);
    setMessage('');
    // setLoading(false);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Mood Tracker</h1>
      {!submitted ? (
        <div className="flex gap-4">
          {moods.map((mood, index) => (
            <div
              className={`${selectedMood === mood ? 'bg-blue-500' : 'bg-white'} transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-sky-500 cursor-pointer`}
              onClick={() => handleMoodSelect(mood)}
              key={index}
            >
              <div className="flex h-full justify-center items-center">
                <span className="text-6xl p-2 rounded-full">
                  {mood}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="flex flex-col w-1/2 my-4">
              <div className="flex flex-col rounded-full sm:flex-row border border-gray-700 py-1 px-1 w-full text-center sm:text-left">
                <div className="flex-shrink-0  m-4 w-16 h-16 rounded-full bg-gray-400 self-center">
                  {selectedMood}
                </div>
                <div className="flex flex-col py-2 pr-2">
                  <h4 className="text-lg font-light">Hi!</h4>
                  <p className="text-2xl font-hairline">
                    {message}
                  </p>
                </div>
              </div>
          </div>
          <button
            onClick={handleReturn}
            className="px-4 py-2 rounded hover:bg-blue-600 border border-blue-500"
          >
            Back
          </button>
        </>
      )}
      {!submitted && selectedMood && (
        <button
          onClick={handleSubmit}
          className="px-4 py-2 my-4 rounded hover:bg-blue-600 border border-blue-500"
        >
          Choose
        </button>
      )}
    </div>
  );
}

export default App;