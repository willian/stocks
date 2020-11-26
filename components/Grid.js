function Col({ children, span: spanProp, smSpan: smSpanProp }) {
  const span = `col-span-${spanProp}`
  const smSpan = `sm:col-span-${smSpanProp}`

  return <div className={`${span} ${smSpan}`}>{children}</div>
}

export default function Grid({ cols: colsProp, gap: gapProp, children }) {
  const cols = `grid-cols-${colsProp}`
  const gap = `gap-${gapProp}`

  return <div className={`grid ${cols} ${gap} `}>{children}</div>
}

Grid.Col = Col
