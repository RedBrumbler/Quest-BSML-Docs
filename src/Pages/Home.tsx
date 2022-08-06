import Title from '../Components/Title'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title='Quest BSML Docs'/>
                <p className='homepage'>
                    Welcome to the BSML Docs for the quest version!
                    If you're new here, you should start by taking a look at <Link className='link' to='/getting-started'> Getting started </Link>.
                    If you are just looking to use the libary, you can take a look at <Link className='link' to='/tags'> the tags </Link> available in the library.
                </p>
            </div>
        </div>
    )
}