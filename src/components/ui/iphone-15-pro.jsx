export function Iphone15Pro({
  width = 453,
  height = 902,
  src,
  videoSrc,
  frameColor = "#C0C0C0",   // metallic frame
  bodyColor = "#1a1a1a",    // inner body shell
  bezelColor = "#1a1a1a",   // thin ring around screen
  notchColor = "#1a1a1a",   // notch
  ...props
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Outer frame (rim) */}
      <path
        d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
        fill={frameColor}
      />

      {/* Side buttons */}
      <path d="M0 171H3V204H1C0.4 204 0 203.5 0 203V171Z" fill={frameColor} />
      <path d="M1 234H3.5V300H2C1.4 300 1 299.5 1 299V234Z" fill={frameColor} />
      <path d="M1 319H3.5V385H2C1.4 385 1 384.5 1 384V319Z" fill={frameColor} />
      <path d="M430 279H433V385H430V279Z" fill={frameColor} />

      {/* Inner body shell */}
      <path
        d="M6 74C6 35.3 37.3 4 76 4H356C394.7 4 426 35.3 426 74V808C426 846.7 394.7 878 356 878H76C37.3 878 6 846.7 6 808V74Z"
        fill={bodyColor}
      />

      {/* Bezel (ring around screen) */}
      <path
        d="M21.25 75C21.25 44.2 46.2 19.25 77 19.25H355C385.8 19.25 410.75 44.2 410.75 75V807C410.75 837.8 385.8 862.75 355 862.75H77C46.2 862.75 21.25 837.8 21.25 807V75Z"
        fill={bezelColor}
        stroke={bezelColor}
        strokeWidth="0.5"
      />

      {/* Screen image or video */}
      {src && (
        <image
          href={src}
          x="21.25"
          y="19.25"
          width="389.5"
          height="843.5"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedCorners)"
        />
      )}
      {videoSrc && (
        <foreignObject x="21.25" y="19.25" width="389.5" height="843.5">
          <video
            className="size-full overflow-hidden rounded-[55.75px] object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />
        </foreignObject>
      )}

      {/* Notch */}
      <path
        d="M154 48.5C154 38.3 162.3 30 172.5 30H259.5C269.7 30 278 38.3 278 48.5C278 58.7 269.7 67 259.5 67H172.5C162.3 67 154 58.7 154 48.5Z"
        fill={notchColor}
      />

      <defs>
        <clipPath id="roundedCorners">
          <rect
            x="21.25"
            y="19.25"
            width="389.5"
            height="843.5"
            rx="55.75"
            ry="55.75"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
