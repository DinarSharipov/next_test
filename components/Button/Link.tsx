import React from 'react';
import Link from 'next/link';
import type { LinkButtonProps } from './types';

const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  className,
  icon,
  onClick,
  href,
}) => (
  <Link
    className={className}
    href={href}
    onClick={onClick}
  >
    <span>{title}</span>
    {icon && (
      <img
        alt="linkIcon"
        src={icon}
      />
    )}
  </Link>
);

export default React.memo(LinkButton);
