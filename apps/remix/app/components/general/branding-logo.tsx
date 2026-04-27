import type { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" {...props}>
      <rect x="0" y="0" width="50" height="50" rx="11" fill="#7B5CF5"/>
      <text x="25" y="35" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="22" fill="white">Px</text>
      <text x="62" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="26" fill="currentColor">Sign</text>
      <text x="62" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="400" fontSize="8" fill="currentColor" opacity="0.5" letterSpacing="1.5">BY PIXEL DESIGN</text>
    </svg>
  );
};
