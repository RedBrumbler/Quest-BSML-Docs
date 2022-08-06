import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import Title from '../Components/Title';

export default function ArgumentList() {
    let args = docs.arguments.sort((a, b) => a.name.localeCompare(b.name))
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title='All Arguments' description={args.length + ' Arguments'}/>
                {
                    args.map(a => {
                        return (
                            <div className='tag-item'>
                                <div className='type'>
                                    <Link className='link' to={'/arguments/' + a.name}>
                                    {a.name}
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
