"use client";

interface TimepickerProps {
  timeState: string;
  setTimeState: (time: string) => void;
  errorTerm: boolean;
  errorMessage: string;
}

export const Timepicker: React.FC<TimepickerProps> = ({ errorTerm, timeState, setTimeState, errorMessage }) => {
  const showError = () => {
    if (errorTerm) {
      return (
        <p className="text-red-500 text-sm p-1">
          {errorMessage}
        </p>
      );
    }
  }

  return (
    <div className="relative">
      <input
        type="time"
        id="time"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm leading-none text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        required
        value={timeState}
        onChange={(e) => setTimeState(e.target.value)}
      />
      {showError()}
    </div>
  );
}
