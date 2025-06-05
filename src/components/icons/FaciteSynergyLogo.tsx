interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const FaciteSynergyLogo = ({ className = "", width = 40, height = 40 }: LogoProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle background */}
      <circle
        cx="20"
        cy="20"
        r="19"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blue-50 stroke-blue-200"
      />
      
      {/* House/Building with roof - representing real estate */}
      <path
        d="M20 8 L30 16 L30 30 L27 30 L27 19 L13 19 L13 30 L10 30 L10 16 Z"
        fill="currentColor"
        className="text-blue-600"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      
      {/* Roof lines showing roofing expertise */}
      <path
        d="M20 8 L30 16 L10 16 Z"
        fill="currentColor"
        className="text-blue-800"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      
      {/* Survey/measurement elements - compass */}
      <circle
        cx="20"
        cy="24"
        r="4"
        stroke="currentColor"
        strokeWidth="1"
        className="text-green-600"
        fill="none"
      />
      
      {/* Compass needle */}
      <path
        d="M20 21.5 L20 26.5 M17.5 24 L22.5 24"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        className="text-green-700"
      />
      
      {/* Center dot */}
      <circle
        cx="20"
        cy="24"
        r="0.8"
        fill="currentColor"
        className="text-green-700"
      />
    </svg>
  );
};

export default FaciteSynergyLogo;