function Col({ children, span: spanProp, smSpan: smSpanProp }) {
  const span = spanProp ? `col-span-${spanProp}` : ''
  const smSpan = smSpanProp ? `sm:col-span-${smSpanProp}` : ''

  return <div className={`${span} ${smSpan}`}>{children}</div>
}

export default function Grid({ cols: colsProp, gap: gapProp, children }) {
  const cols = colsProp ? `grid-cols-${colsProp}` : ''
  const gap = gapProp ? `gap-${gapProp}` : ''

  return <div className={`grid ${cols} ${gap} `}>{children}</div>
}

Grid.Col = Col
