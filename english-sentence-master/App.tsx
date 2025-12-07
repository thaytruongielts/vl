import React, { useState, useEffect, useRef } from 'react';
import { BookOpen, CheckCircle, XCircle, HelpCircle, ArrowRight, RefreshCw, Trophy } from 'lucide-react';
import { QUESTION_DATA } from './constants';
import { GameStatus } from './types';

// Utility function to clean text for comparison
const cleanText = (text: string): string => {
  return text.trim().replace(/\.$/, '').toLowerCase().replace(/\s+/g, ' ');
};

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showHintDetail, setShowHintDetail] = useState(false);
  const [status, setStatus] = useState<GameStatus>("idle");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const currentQ = QUESTION_DATA[currentIdx];

  useEffect(() => {
    // Focus input on new question
    if (inputRef.current && !isFinished) {
      inputRef.current.focus();
    }
    // Reset state for new question
    setUserInput(currentQ?.start ? currentQ.start + " " : "");
    setAttempts(0);
    setShowHintDetail(false);
    setStatus("idle");
    setFeedbackMsg("");
  }, [currentIdx, isFinished, currentQ]);

  const checkAnswer = () => {
    if (!userInput.trim()) return;

    const userClean = cleanText(userInput);
    const isMatch = currentQ.acceptableAnswers.some(ans => cleanText(ans) === userClean);

    if (isMatch) {
      setStatus("correct");
      setFeedbackMsg("Chính xác! Bạn làm rất tốt.");
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setStatus("wrong");
      if (newAttempts < 2) {
        setFeedbackMsg("Chưa đúng, hãy kiểm tra lại ngữ pháp hoặc chính tả nhé!");
      } else {
        setFeedbackMsg("Sai quá 2 lần. Bạn có thể xem gợi ý.");
      }
    }
  };

  const nextQuestion = () => {
    if (currentIdx < QUESTION_DATA.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const restart = () => {
    setCurrentIdx(0);
    setIsFinished(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (status === 'correct') {
        nextQuestion();
      } else {
        checkAnswer();
      }
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-sans">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-10 h-10 text-yellow-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Chúc mừng!</h2>
          <p className="text-gray-600 mb-8">
            Bạn đã hoàn thành xuất sắc tất cả {QUESTION_DATA.length} câu hỏi ôn tập. 
            Bạn đã sẵn sàng cho kỳ thi rồi đấy!
          </p>
          <button 
            onClick={restart}
            className="flex items-center justify-center w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            <RefreshCw className="w-5 h-5 mr-2" /> Làm lại từ đầu
          </button>
        </div>
      </div>
    );
  }

  const progressPercentage = ((currentIdx + 1) / QUESTION_DATA.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 font-sans text-gray-800">
      
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 flex items-center justify-center gap-2">
          <BookOpen className="w-8 h-8" />
          Luyện Viết Lại Câu Tiếng Anh
        </h1>
        <p className="text-indigo-600 mt-2 font-medium">Ôn thi vào lớp 10</p>
      </header>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between text-sm font-semibold text-gray-500 mb-2">
          <span>Câu hỏi {currentIdx + 1}</span>
          <span>Tổng {QUESTION_DATA.length}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        
        {/* Question Area */}
        <div className="p-6 md:p-8">
          <div className="mb-2 text-sm text-gray-400 font-bold uppercase tracking-wider">Câu gốc:</div>
          <div className="text-lg md:text-xl font-medium text-gray-800 bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-6">
            {currentQ.original}
          </div>

          <div className="mb-2 text-sm text-gray-400 font-bold uppercase tracking-wider">Viết lại câu sao cho nghĩa không đổi:</div>
          
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={(e) => {
                setUserInput(e.target.value);
                if(status === 'wrong') setStatus('idle'); // Reset status when typing
              }}
              onKeyDown={handleKeyDown}
              disabled={status === 'correct'}
              className={`w-full p-4 text-lg border-2 rounded-xl focus:outline-none transition-colors shadow-sm
                ${status === 'correct' ? 'border-green-500 bg-green-50 text-green-900' : 
                  status === 'wrong' ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-indigo-500'}`}
              placeholder="Nhập đáp án của bạn..."
            />
            
            {/* Status Icons in Input */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              {status === 'correct' && <CheckCircle className="w-6 h-6 text-green-600 animate-bounce" />}
              {status === 'wrong' && <XCircle className="w-6 h-6 text-red-500" />}
            </div>
          </div>

          {/* Feedback & Actions */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 h-auto min-h-[3rem]">
            
            <div className="flex-1 text-center md:text-left">
              {status === 'wrong' && (
                <p className="text-red-600 font-medium animate-pulse">{feedbackMsg}</p>
              )}
              {status === 'correct' && (
                <p className="text-green-700 font-bold text-lg">{feedbackMsg}</p>
              )}
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              {/* Hint Button (Only show if wrong >= 2 times and not yet correct) */}
              {attempts >= 2 && status !== 'correct' && (
                <button
                  onClick={() => setShowHintDetail(!showHintDetail)}
                  className="flex-1 md:flex-none flex items-center justify-center px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors font-semibold"
                >
                  <HelpCircle className="w-5 h-5 mr-2" />
                  {showHintDetail ? "Ẩn gợi ý" : "Gợi ý"}
                </button>
              )}

              {/* Check or Next Button */}
              {status === 'correct' ? (
                <button
                  onClick={nextQuestion}
                  className="flex-1 md:flex-none flex items-center justify-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 shadow-md font-bold"
                >
                  Câu tiếp theo <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  onClick={checkAnswer}
                  className="flex-1 md:flex-none px-8 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md font-bold"
                >
                  Kiểm tra
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Hint Area */}
        {showHintDetail && status !== 'correct' && (
          <div className="bg-yellow-50 p-6 border-t border-yellow-100 animate-fadeIn">
            <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              Cấu trúc ngữ pháp cần nhớ:
            </h3>
            <p className="text-yellow-900 text-lg font-medium">{currentQ.hint}</p>
          </div>
        )}
      </div>

      <div className="mt-8 text-gray-400 text-sm">
        Ấn <strong>Enter</strong> để kiểm tra hoặc chuyển câu.
      </div>

    </div>
  );
}