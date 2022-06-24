import { IoBarChartSharp } from 'react-icons/io5'
import {FaRegStar} from 'react-icons/fa'
import {BiMessageSquareAdd} from 'react-icons/bi'
import { AiOutlineShareAlt} from 'react-icons/ai'

const links = [
    {
      id: 1,
      text: 'dashboard',
      path: '/',
    icon: <IoBarChartSharp />,
    },
    {
      id: 2,
      text: 'New Journal',
      path: 'add-journals',
      icon: <BiMessageSquareAdd />,
    },
    {
      id: 3,
      text: 'favorites',
      path: 'favorites',
      icon: <FaRegStar />,
    },
    {
        id: 4,
        text: 'shared with me',
        path: 'shared-with-me',
        icon: <AiOutlineShareAlt />,
      }
  ]

  
  
  export default links