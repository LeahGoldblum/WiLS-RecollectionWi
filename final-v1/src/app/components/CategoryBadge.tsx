import { ReactNode } from 'react';

type CategoryBadgeVariant = 'primary' | 'sage' | 'warm' | 'neutral';

interface CategoryBadgeProps {
  children: ReactNode;
  variant?: CategoryBadgeVariant;
  size?: 'sm' | 'md';
}

const variantStyles: Record<CategoryBadgeVariant, string> = {
  primary: 'bg-[var(--primary-light)] text-[var(--primary)]',
  sage: 'bg-[var(--accent-sage-light)] text-[var(--accent-sage)]',
  warm: 'bg-[var(--accent-warm-light)] text-[var(--accent-warm)]',
  neutral: 'bg-[var(--muted)] text-[var(--muted-foreground)]',
};

const sizeStyles = {
  sm: 'text-xs px-2.5 py-1',
  md: 'text-xs px-3 py-1.5',
};

export function CategoryBadge({ children, variant = 'primary', size = 'sm' }: CategoryBadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-semibold uppercase tracking-wide ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}
