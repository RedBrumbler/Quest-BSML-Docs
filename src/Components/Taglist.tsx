import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import '../styles/App.scss'

export default function Taglist() {
    let { tag } = useParams();
    let docTag = docs.tags.find(t => {
        return t.aliases.find(t2 => t2 === tag) != null;
    });

    if (docTag == null) {
        return (
            <div className='main-body'>
                <div className='main-content'>
                    <h1>Tag not found</h1>
                    <div className='spacer'/>
                </div>
            </div>
        )
    }

    return (
        <div className='main-body'>
            <div className='main-content'>
                <header>
                    <h1>
                        { tag }
                    </h1>
                    <p>{ docTag.description }</p>
                </header>
                <div className='spacer'/>
                <div className='property'>
                    <span className='aliasesTitle'> Aliases: </span>
                    <span className='aliases'>{ docTag.aliases.map(alias => { return (<div className='alias'><Link className='link' to={'/tags/' + alias}>{alias} </Link></div>)}) }</span>
                    <div className='spacer'/>
                </div>
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
                                            p => {
                                                return (
                                                <div className='property'>
                                                    <div className="aliases">{ p.aliases.map(alias => { return (<div className="alias">{alias}</div>)}) }</div>
                                                    <span className="type">{p.type}</span>
                                                    <div className="description">{p.description}</div>
                                                    <div className='spacer'/>
                                                </div>
                                                )
                                            }
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