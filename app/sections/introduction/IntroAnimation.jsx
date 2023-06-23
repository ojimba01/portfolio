import { useRef } from "react";
import { useInView } from "framer-motion";
export function WelcomeAnimation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateX(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
			}}
		>

<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="none"
    stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="#3c9642">
    <animateMotion
      dur="10s"
      repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
			</svg>
			
		</div>
	);
}