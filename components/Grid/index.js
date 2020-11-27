import { GRID_COLS, COL_SPANS, GAPS } from './constants'

function Col({ children, span, smSpan: smSpanProp }) {
  const smSpan = smSpanProp ? `sm${smSpanProp}` : ''

  return <div className={`${COL_SPANS[span]} ${COL_SPANS[smSpan]}`}>{children}</div>
}

export default function Grid({ cols, gap, children }) {
  return <div className={`grid ${GRID_COLS[cols]} ${GAPS[gap]}`}>{children}</div>
}

Grid.Col = Col
