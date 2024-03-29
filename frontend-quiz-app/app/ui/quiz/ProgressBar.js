export default function ProgressBar({ currentStep, totalSteps }) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div>
      <progress value={progress} max="100" className="w-full mt-10 md:mt-32" />
    </div>
  );
}
