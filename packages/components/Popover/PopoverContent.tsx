'use client'
import React, { forwardRef } from 'react'
import { usePopoverContext } from './PopoverContext'
import {
  useMergeRefs,
  FloatingPortal,
  FloatingOverlay,
  FloatingFocusManager
} from '@floating-ui/react'
import { tv } from 'tailwind-variants'
import themes from '../../themes/index'
const { scrim } = themes()

const variants = tv({
  base: 'relative overflow-x-hidden p-2 bg-surface rounded-lg focus-visible:outline-none'
})

export interface PopoverContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PopoverContent: React.FC<PopoverContentProps> = forwardRef(
  ({ style, ...props }, propRef?: React.MutableRefObject<any>) => {
    // @ts-ignore
    const { context: floatingContext, ...context } = usePopoverContext()
    // @ts-ignore
    const ref = useMergeRefs([context.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    return (
      <FloatingPortal>
        <FloatingOverlay
          lockScroll
          className={scrim({ className: 'grid place-items-center' })}
        >
          {/* @ts-ignore */}
          <FloatingFocusManager context={floatingContext} modal={context.modal}>
            <div
              ref={ref}
              // @ts-ignore
              aria-labelledby={context.labelId}
              // @ts-ignore
              {...context.getFloatingProps(props)}
              // @ts-ignore
              aria-describedby={context.descriptionId}
              // @ts-ignore
              style={{ ...context.floatingStyles, ...style }}
              className={variants({ className: props.className })}
            >
              {props.children}
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      </FloatingPortal>
    )
  }
)

export { PopoverContent }
