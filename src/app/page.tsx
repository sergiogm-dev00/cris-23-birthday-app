'use client';

import { useState } from 'react';

// Password Hint Component
const PasswordHint = () => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowHint(!showHint)}
        className="flex items-center justify-center w-5 h-5 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-xs font-bold transition-colors duration-200"
      >
        i
      </button>
      {showHint && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap z-10">
          Tu calle de Madrid
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

// Adventure Hint Component
const AdventureHint = ({ hintText }: { hintText: string }) => {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowHint(!showHint)}
        className="flex items-center justify-center w-6 h-6 bg-pink-500 hover:bg-pink-600 text-white rounded-full text-xs font-bold transition-colors duration-200"
      >
        💡
      </button>
      {showHint && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-3 rounded-lg shadow-lg text-sm max-w-xs text-center z-10">
          {hintText}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
        </div>
      )}
    </div>
  );
};

// Chapter Screen Component (Reusable for chapters 1, 2, 3)
const ChapterScreen = ({ 
  chapterNumber, 
  coordinates, 
  hintText, 
  onBack, 
  onNext 
}: { 
  chapterNumber: string;
  coordinates: string;
  hintText: string;
  onBack: () => void;
  onNext?: () => void;
}) => (
  <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 flex flex-col items-center justify-center px-6 py-8">
    {/* Main Content */}
    <div className="flex flex-col items-center justify-center text-center w-full max-w-sm">
      {/* Chapter Message */}
      <div className="mb-6">
        <h1 className="text-6xl mb-4">🗺️</h1>
        <h2 className="text-3xl font-bold text-white mb-4">{chapterNumber}</h2>
      </div>
      
      {/* Coordinates Card */}
      <div className="w-full bg-pink-100/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-6 border border-pink-200">
        <div className="text-center">
          <div className="text-6xl mb-4">📍</div>
          <h3 className="text-lg font-bold text-pink-600 mb-4">{coordinates}</h3>
          <div className="flex justify-center">
            <AdventureHint hintText={hintText} />
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full">
        {onNext && (
          <button
            onClick={onNext}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 border border-pink-500"
          >
            Siguiente
          </button>
        )}
        <button
          onClick={onBack}
          className="bg-pink-500/80 hover:bg-pink-600/80 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 backdrop-blur-sm border border-pink-300"
        >
          Volver
        </button>
      </div>
    </div>
  </div>
);

// Final Birthday Screen Component
const FinalBirthdayScreen = ({ onBack }: { onBack: () => void }) => (
  <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 flex flex-col items-center justify-center px-6 py-8">
    {/* Main Content */}
    <div className="flex flex-col items-center justify-center text-center w-full max-w-sm">
      {/* Final Message */}
      <div className="mb-8">
        <h2 className="text-5xl font-bold text-white mb-8">Felices 23 Cris💗</h2>
      </div>
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="bg-pink-500/80 hover:bg-pink-600/80 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 backdrop-blur-sm border border-pink-300"
      >
        Volver al inicio
      </button>
    </div>
  </div>
);

// Birthday Screen Component
const BirthdayScreen = ({ onLogout, onStartAdventure }: { onLogout: () => void; onStartAdventure: () => void }) => (
  <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 flex flex-col items-center justify-center px-6 py-8">
    {/* Main Content */}
    <div className="flex flex-col items-center justify-center text-center w-full max-w-sm">
      {/* Birthday Message */}
      <div className="mb-6">
        <h2 className="text-4xl font-bold text-white mb-4">🎂 Bienvenida a tu aventura 🎂</h2>
        <p className="text-xl text-white/90 mb-8">
          Instrucciones 📖
        </p>
      </div>
      
      {/* Adventure Instructions Card */}
      <div className="w-full bg-pink-100/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl mb-6 border border-pink-200">
        <div className="text-center">
          <div className="text-6xl mb-4">🎈</div>
          <p className="text-pink-700 mb-6 leading-relaxed">
            Cada pista te llevará a un lugar,<br/>
            en cada parada encontrarás un detalle,<br/>
            y un trocito de nosotros.💗
          </p>
          <div className="flex justify-center gap-2 text-2xl">
            <span>🎂</span>
            <span>🎁</span>
            <span>🎊</span>
            <span>🎉</span>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-col gap-3 w-full">
        <button
          onClick={onStartAdventure}
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 border border-pink-500"
        >
          Empezar
        </button>
        <button
          onClick={onLogout}
          className="bg-pink-500/80 hover:bg-pink-600/80 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 backdrop-blur-sm border border-pink-300"
        >
          Volver
        </button>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0); // 0 = not started, 1-3 = chapters, 4 = final
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const validPassword = 'albendiego';
    
    if (password === validPassword) {
      setIsAuthenticated(true);
    } else {
      setError('Contraseña incorrecta. Prueba: albendiego');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentChapter(0);
    setPassword('');
    setError('');
  };

  const handleStartAdventure = () => {
    setCurrentChapter(1);
  };

  const handleBackToInstructions = () => {
    setCurrentChapter(0);
  };

  const handleNextChapter = () => {
    if (currentChapter === 3) {
      setCurrentChapter(4); // Go to final screen
    } else {
      setCurrentChapter(currentChapter + 1);
    }
  };

  const handlePrevChapter = () => {
    setCurrentChapter(currentChapter - 1);
  };

  const handleBackToStart = () => {
    setCurrentChapter(0);
  };

  // Chapter data
  const chapters = [
    {
      number: "Capítulo 1",
      coordinates: "39°28'52.8\"N 0°21'20.7\"W",
      hint: "Persigue la luz💡"
    },
    {
      number: "Capítulo 2", 
      coordinates: "39°28'50.5\"N 0°22'03.8\"W",
      hint: "Nos cerraron las puertas y... 🚪"
    },
    {
      number: "Capítulo 3",
      coordinates: "39°27'59.3\"N 0°22'51.8\"W", 
      hint: "Soy el chico más feliz del mundo desde ese día"
    }
  ];

  // Render current screen
  if (currentChapter === 4) {
    return <FinalBirthdayScreen onBack={handleBackToStart} />;
  }

  if (currentChapter > 0) {
    const chapterData = chapters[currentChapter - 1];
    return (
      <ChapterScreen
        chapterNumber={chapterData.number}
        coordinates={chapterData.coordinates}
        hintText={chapterData.hint}
        onBack={currentChapter === 1 ? handleBackToInstructions : handlePrevChapter}
        onNext={currentChapter <= 3 ? handleNextChapter : undefined}
      />
    );
  }

  if (isAuthenticated) {
    return <BirthdayScreen onLogout={handleLogout} onStartAdventure={handleStartAdventure} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 flex flex-col items-center justify-center px-6">
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white text-center">🎂 CRIS BIRTHDAY💗</h1>
        </div>
        
        {/* Tagline */}
        <p className="text-white text-lg font-medium mb-8 text-center">
          It's your birthday!
        </p>
        
        {/* Login Form */}
        <div className="w-full max-w-sm bg-pink-100/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-pink-200">
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Password Input */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-800 placeholder-gray-500 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-400"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <PasswordHint />
              </div>
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="text-red-600 text-sm text-center bg-red-100/80 p-2 rounded-lg border border-red-200">
                {error}
              </div>
            )}
            
            {/* Log In Button */}
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 border border-pink-500"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
