import "./LoadingModal.scss";

type LoadingModalProps = {
  isLoading: boolean;
};

export default function LoadingModal({
  isLoading,
}: LoadingModalProps) {

  if (!isLoading) return null;

  return (

    <div className="loading-overlay">

      <div className="loading-box">

        <div className="loading-spinner"></div>

        <h2>
          Finding Your Perfect Destinations
        </h2>

        <p>
          Analyzing your travel vibe,
          preferences and budget...
        </p>

      </div>

    </div>
  );
}