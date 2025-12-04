import React from 'react'

const CircularProgress = ({
  percentage = 75,
  size = 128,
  strokeWidth = 8,
  color = '#ED0331',
  showPercentage = true,
  moduleIndex = 0,
}) => {
  // Calculate the radius (accounting for stroke width)
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  // Color mapping for Tailwind classes
  const colorClasses = {
    blue: 'text-blue-500',
    green: 'text-green-500',
    red: 'text-red-500',
    purple: 'text-purple-500',
    orange: 'text-orange-500',
  }

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-200"
        />

        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={`${
            colorClasses[color] || colorClasses.blue
          } transition-all duration-500 ease-in-out`}
        />
      </svg>

      {/* Percentage text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-700">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      {/* {moduleIndex && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-bold text-xs text-[#2F2F2F]">
            {moduleIndex}
          </span>
        </div>
      )} */}
    </div>
  )
}

export default CircularProgress
