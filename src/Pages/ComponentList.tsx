import docs from '../assets/docs.json'
import { Link } from 'react-router-dom'
import Title from '../Components/Title';

export default function ComponentList() {
    let components = docs.components.sort((a, b) => a.typename.localeCompare(b.typename))
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title="All Components" description={components.length + " Components"}/>
                {
                    components.map(c => {
                        return (
                            <div className='tag-item'>
                                <div className='alias'>
                                    <Link className='link' to={'/components/' + c.typename}>
                                        {c.typename}
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}