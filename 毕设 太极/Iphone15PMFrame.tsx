import type { PropsWithChildren } from 'react';

type StatusBarTone = 'light' | 'dark';

type Iphone15PMFrameProps = PropsWithChildren<{
  className?: string;
  /** light: 白色状态栏内容；dark: 黑色状态栏内容 */
  statusBarTone?: StatusBarTone;
  /** 顶栏时间，默认 9:41 */
  timeText?: string;
}>;

function StatusBarRightIcons({ tone }: { tone: StatusBarTone }) {
  const color = tone === 'dark' ? '#111111' : '#FFFFFF';

  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <svg width="19" height="12" viewBox="0 0 19 12" fill="none">
        <path d="M1 11V7.75" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 11V5.75" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M11 11V3.75" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 11V1.75" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      </svg>

      <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
        <path d="M1.5 4.75C3.1 3.1 5.35 2 8 2C10.65 2 12.9 3.1 14.5 4.75" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 7C5.05 5.95 6.4 5.25 8 5.25C9.6 5.25 10.95 5.95 12 7" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M6.8 9.25C7.15 8.9 7.55 8.75 8 8.75C8.45 8.75 8.85 8.9 9.2 9.25" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="8" cy="10" r="1" fill={color} />
      </svg>

      <svg width="28" height="13" viewBox="0 0 28 13" fill="none">
        <rect x="1" y="1" width="22" height="11" rx="3" stroke={color} strokeWidth="1.5" />
        <rect x="3.5" y="3.5" width="15" height="6" rx="1.8" fill={color} />
        <rect x="24.5" y="4.25" width="2.5" height="4.5" rx="1" fill={color} opacity="0.95" />
      </svg>
    </div>
  );
}

export default function Iphone15PMFrame({
  children,
  className = '',
  statusBarTone = 'light',
  timeText = '9:41',
}: Iphone15PMFrameProps) {
  const statusTextColor = statusBarTone === 'dark' ? 'text-[#111111]' : 'text-white';

  return (
    <div className={`relative w-[430px] h-[932px] rounded-[55px] bg-black p-[10px] ${className}`.trim()}>
      <div className="relative w-full h-full rounded-[45px] overflow-hidden bg-white">
        <div
          className={`absolute top-0 left-0 right-0 h-[59px] px-6 flex items-center justify-between z-30 pointer-events-none ${statusTextColor}`}
        >
          <span
            className="text-[17px] leading-none font-semibold tracking-[0.01em]"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}
          >
            {timeText}
          </span>
          <StatusBarRightIcons tone={statusBarTone} />
        </div>

        <div
          className="absolute left-1/2 top-[11px] -translate-x-1/2 w-[126px] h-[37px] rounded-[999px] bg-black z-40 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative w-full h-full pt-[59px] overflow-hidden">{children}</div>
      </div>
    </div>
  );
}

