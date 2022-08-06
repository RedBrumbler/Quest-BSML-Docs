import docs from '../assets/docs.json'
import { Link } from 'react-router-dom'
import Title from '../Components/Title';

export default function TagList() {
    let tags = docs.tags.sort((a, b) => a.name.localeCompare(b.name))
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title="All Tags" description={tags.length + " Tags"}/>
                {
                    tags.map(t => {
                        return (
                            <div className='tag-item'>
                                <div className='alias'>
                                    <Link className='link' to={'/tags/' + t.name}>
                                        {t.name}
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