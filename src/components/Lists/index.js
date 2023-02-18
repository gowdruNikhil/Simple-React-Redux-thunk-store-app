import Rect from 'react';
import './styles.css';

// This is a resuable functional component
const Lists = ({data}) => {

    return (
        <ul
        className="ulStyle"
      >
        {data?.length ? data?.map((item, index) => (
          <li
            key={index}
            className='listStyle'
          >
            {index + 1}.{item.title}
          </li>
        )) : 'No Data Found ....'}
      </ul>
    )
}

export default Lists