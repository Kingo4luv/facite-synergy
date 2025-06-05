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
      {/* Outer circle representing unity/synergy */}
      <circle
        cx="20"
        cy="20"
        r="18"
        stroke="currentColor"
        strokeWidth="2"
        className="text-blue-600"
      />
      
      {/* Building/Construction elements */}
      <rect
        x="8"
        y="12"
        width="6"
        height="16"
        fill="currentColor"
        className="text-blue-600"
        rx="1"
      />
      <rect
        x="16"
        y="8"
        width="6"
        height="20"
        fill="currentColor"
        className="text-blue-800"
        rx="1"
      />
      <rect
        x="24"
        y="14"
        width="6"
        height="14"
        fill="currentColor"
        className="text-blue-600"
        rx="1"
      />
      
      {/* Roof/Peak elements */}
      <polygon
        points="11,12 11,8 8,12"
        fill="currentColor"
        className="text-blue-800"
      />
      <polygon
        points="19,8 19,4 16,8"
        fill="currentColor"
        className="text-blue-900"
      />
      <polygon
        points="27,14 27,10 24,14"
        fill="currentColor"
        className="text-blue-800"
      />
      
      {/* Connection lines showing synergy */}
      <path
        d="M14 20 L22 16 L30 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-green-500"
        opacity="0.7"
      />
      
      {/* Central focal point */}
      <circle
        cx="20"
        cy="20"
        r="2"
        fill="currentColor"
        className="text-green-600"
      />
    </svg>
  );
};

export default FaciteSynergyLogo;