'use client'

import { useState } from 'react'
import InlineIcon from '@/components/InlineIcon'
import type { FlowNode } from '@/lib/subsystems'

type SubsystemFlowchartProps = {
  nodes: FlowNode[]
}

export default function SubsystemFlowchart({ nodes }: SubsystemFlowchartProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeNode = nodes[activeIndex] ?? nodes[0]

  return (
    <div className="rounded-2xl border border-outline-variant/30 bg-white p-5 shadow-[0_18px_48px_rgba(11,61,91,0.08)] md:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px] lg:items-stretch">
        <div className="relative overflow-hidden rounded-2xl border border-outline-variant/25 bg-surface-container-lowest p-5 md:p-7">
          <div className="absolute inset-0 data-stream-bg opacity-70" />
          <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-outline-variant/50 md:block" />
          <div className="subsystem-flow-line absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 md:block" />

          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-3">
            {nodes.map((node, index) => {
              const isActive = activeIndex === index

              return (
                <button
                  key={node.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`subsystem-node group flex min-h-[140px] flex-col items-start justify-between rounded-2xl border p-4 text-left transition-all duration-300 md:min-h-[190px] ${
                    isActive
                      ? 'border-primary/35 bg-white shadow-[0_18px_36px_rgba(11,61,91,0.12)]'
                      : 'border-outline-variant/25 bg-white/80 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-sm'
                  }`}
                >
                  <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    isActive ? 'bg-primary text-white' : 'bg-primary-fixed text-primary'
                  }`}>
                    <InlineIcon name={index === nodes.length - 1 ? 'check_circle' : 'arrow_forward'} className="h-5 w-5" />
                  </span>
                  <span className="mt-5 font-label-md text-[0.82rem] uppercase tracking-[0.12em] text-outline">
                    Step {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-headline-md text-[1.05rem] leading-tight text-primary">
                    {node.title}
                  </h3>
                </button>
              )
            })}
          </div>
        </div>

        <aside className="flex min-h-[260px] flex-col justify-between rounded-2xl border border-outline-variant/25 bg-primary p-6 text-on-primary shadow-sm">
          <div>
            <span className="font-caption text-caption uppercase tracking-[0.18em] text-primary-fixed">
              Active Node
            </span>
            <h3 className="mt-4 font-headline-md text-headline-md text-white">
              {activeNode.title}
            </h3>
            <p className="mt-4 font-body-md text-body-md text-primary-fixed">
              {activeNode.description}
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between border-t border-white/15 pt-5">
            <span className="font-caption text-caption uppercase tracking-[0.16em] text-primary-fixed">
              Workflow Signal
            </span>
            <span className="subsystem-signal inline-flex h-3 w-3 rounded-full bg-vibrant-red" />
          </div>
        </aside>
      </div>
    </div>
  )
}
