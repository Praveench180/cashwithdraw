import './index.css'

const DenominationItem = props => {
  const {Details, denominate} = props
  const {value} = Details
  const denom = () => {
    denominate(value)
  }
  return (
    <li className="li">
      <button type="button" className="list" onClick={denom}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
