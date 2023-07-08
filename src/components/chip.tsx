import React from 'react'

interface ChipProps {
  children: React.ReactNode
}

export const Chip: React.FC<ChipProps> = (props) => (
  <div className="mx-1 items-center justify-between rounded-full border-2 border-slate-800 bg-slate-600 py-0.5 px-1.5 text-xs text-white first:ml-0 last:mr-0">
    {props.children}
  </div>
)

export const InvertedChip: React.FC<ChipProps> = (props) => (
  <div className="mx-1 items-center justify-between rounded-full border-2 border-slate-800 bg-white py-0.5 px-1.5 text-xs text-slate-600 first:ml-0 last:mr-0">
    {props.children}
  </div>
)
