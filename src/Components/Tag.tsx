import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import '../styles/App.scss'
import Title from './Title'
import Aliases from './Aliases'
import Property from './Property'

export default function Tag() {
    let { tag } = useParams();
    let docTag = docs.tags.find(t => {
        return t.aliases.find(t2 => t2 === tag) != null;
    });

    if (docTag == null) {
        return (
            <div className='main-body'>
                <div className='main-content'>
                    <Title title={"Tag '" + tag + "' not found"}/>
                </div>
            </div>
        )
    }

    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title={tag} description={docTag.description}/>
                {docTag.aliases.length > 1 ? <Aliases aliases={docTag.aliases.filter(t => t !== tag)} prefix='Aliases:'/> : <></>}
                <div className='components'>
                    {
                        docTag.components.map(
                            c => {
                                let component = docs.components.find(comp => comp.typename === c)
                                if (component == null) {
                                    return (<div> Invalid component: { c } </div>);
                                }

                                return (
                                    <div className='component'>
                                        <div className='componentName'>
                                            <Link className='link' to={'/components/' + component.typename}>
                                                { component.typename }
                                            </Link>
                                        </div>
                                        { component.properties.map(
                                            p => <Property aliases={p.aliases} type={p.type} description={p.description}/>
                                        )}
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </div>
    )
}