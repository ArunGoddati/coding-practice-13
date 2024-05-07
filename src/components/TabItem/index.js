import './index.css'
const TabItem = props => {
  const {tabItem, key, clickTabItem, isActive} = props
  const {tabId, displayText} = tabItem
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeTabItemClassName = isActive ? 'tab-item' : ''
  return (
    <li className="list-type">
      <button
        className={`button ${activeTabItemClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
