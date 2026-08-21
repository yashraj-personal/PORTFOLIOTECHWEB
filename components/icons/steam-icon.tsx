export function SteamIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 11.5a4.5 4.5 0 1 1-6.36-4.1L9.9 9.86a3.2 3.2 0 1 1-2.53-1.4l3.3-1.34A5.5 5.5 0 1 1 15.62 11l-2.36 3.34a3.2 3.2 0 1 1-4.75 2.02L2 14.5" />
      <circle cx="17.5" cy="11.5" r="1.6" />
      <circle cx="6.6" cy="15.9" r="1.6" />
    </svg>
  )
}
