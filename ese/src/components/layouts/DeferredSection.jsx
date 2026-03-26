import React, { Suspense } from 'react'

const SectionPlaceholder = ({ minHeight = '60vh' }) => (
  <div
    aria-hidden='true'
    className='deferred-section w-full animate-pulse rounded-3xl bg-white/[0.02]'
    style={{ minHeight }}
  />
)

const DeferredSection = ({
  component: Component,
  minHeight = '60vh',
  rootMargin = '350px 0px',
}) => {
  const [shouldRender, setShouldRender] = React.useState(false)
  const sectionRef = React.useRef(null)

  React.useEffect(() => {
    if (shouldRender) return undefined

    const currentElement = sectionRef.current
    if (!currentElement) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin,
        threshold: 0.01,
      },
    )

    observer.observe(currentElement)

    return () => {
      observer.disconnect()
    }
  }, [rootMargin, shouldRender])

  return (
    <div ref={sectionRef} className='deferred-section'>
      {shouldRender ? (
        <Suspense fallback={<SectionPlaceholder minHeight={minHeight} />}>
          <Component />
        </Suspense>
      ) : (
        <SectionPlaceholder minHeight={minHeight} />
      )}
    </div>
  )
}

export default DeferredSection