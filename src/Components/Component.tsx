import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import Title from './Title'
import Aliases from './Aliases'
import Property from './Property'

export default function Component() {
    let { component } = useParams();
    let docComponent = docs.components.find(c => c.typename === component);

    if (component == null || docComponent == null) {
        return (
            <div className='main-body'>
                <div className='main-content'>
                    <Title title={"Component '" + component + "' not found"}/>
                    <div className='spacer'/>
                </div>
            </div>
        )
    }
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title={component} description={docComponent.description}/>
                {
                    docComponent.properties.map(p => (
                        <Property 
                                aliases={p.aliases} 
                                type={p.type} 
                                description={p.description}/>
                    ))
                }
                <div>
                    <Title title='Used in the following tags:'/>
                    {
                        docs.tags.sort((a, b) => a.name.localeCompare(b.name)).filter(t => {
                            return t.components.find(c => c === component) != null;
                        }).map(t => {
                            return (
                                <Aliases aliases={t.aliases}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}