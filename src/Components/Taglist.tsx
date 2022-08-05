import docs from '../assets/docs.json';
import { useParams } from 'react-router-dom'
import '../styles/App.scss'

export default function Taglist() {
    let { tag } = useParams();
    let docTag = docs.tags.find(t => {
        return t.aliases.find(t2 => t2 === tag) != null;
    });
    if (docTag == null) {
        return (
            <main>
                <h1>Tag not found</h1>
            </main>
        )
    }

    return (
        <main>
            <header>
                <h1>
                    { tag }
                </h1>
                <p>{ docTag.description }</p>
            </header>

            <div className='aliases'>
                <h3>
                    Aliases
                </h3>
                { docTag.aliases }
            </div>
            <div className='component'>
                {
                    docTag.components.map(
                        c => {
                            let component = docs.components.find(comp => comp.typename == c)
                            if (component == null) {
                                return (<div> Invalid component: { c } </div>);
                            }

                            return (
                                <div>
                                    <h3>
                                        { component.typename }
                                    </h3>
                                    { component.properties.map(
                                        p => {
                                            return (<div>
                                                { p.key }
                                            </div>)
                                        }
                                    )}
                                </div>
                            )
                        }
                    )
                }
            </div>
        </main>
    )
}