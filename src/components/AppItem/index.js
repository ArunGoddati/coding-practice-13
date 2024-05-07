import './index.css'
const AppItem = props => {
  const {eachAppItem, key} = props
  const {appId, appName, imageUrl, category} = eachAppItem
  return (
    <li className="list-item">
      <div className="app-container">
        <img src={imageUrl} className="app-image" alt={imageUrl} />
        <p className="app-name" alt={appName}>
          {appName}
        </p>
      </div>
    </li>
  )
}
export default AppItem
