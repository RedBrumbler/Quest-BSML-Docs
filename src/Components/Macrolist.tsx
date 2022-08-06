import docs from '../assets/docs.json'
import { Link } from 'react-router-dom'
import Title from './Title'

export default function MacroList() {
    let macros = docs.macros.sort((a, b) => a.name.localeCompare(b.name))
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title="All Macros" description={macros.length + " Macros"}/>
                {
                    macros.map(m => {
                        return (
                            <div className='tag-item'>
                                <div className='alias'>
                                    <Link className='link' to={'/macros/' + m.name}>
                                        {m.name}
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