import { Link } from 'react-router-dom'
import ErrorImage from '../../assets/images/error.svg'
import Wrapper from '../../assets/wrappers/Error'

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={ErrorImage} alt='not found' />
        <h3>Ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error