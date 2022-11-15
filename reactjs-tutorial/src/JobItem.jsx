// destructring
import './JobItem.css'
function JobItem(props) {
  return <li className="job-item">{props.job}</li>;
}

export default JobItem;
