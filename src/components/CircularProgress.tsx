import React, { useEffect, useState } from "react"

interface CircularProgressProps {
  value: number
  size?: number
  strokeWidth?: number
  color?: string // Tailwind stroke class e.g. "stroke-green-500"
  label: string
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  value,
  size = 100,
  strokeWidth = 8,
  color = "stroke-indigo-500",
  label,
}) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let start = 0
    const step = () => {
      start += 1
      if (start <= value) {
        setProgress(start)
        requestAnimationFrame(step)
      }
    }
    step()
  }, [value])

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="flex flex-col items-center relative">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          stroke="currentColor"
          className="text-gray-200"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          stroke="currentColor"
          className={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{ transition: "stroke-dashoffset 0.35s" }}
        />
      </svg>

      {/* Number inside circle */}
      <div
        className="absolute flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <span className="text-sm font-bold">{progress}%</span>
      </div>

      {/* Label below */}
      <span className="mt-2 text-sm text-gray-600">{label}</span>
    </div>
  )
}

export default CircularProgress
