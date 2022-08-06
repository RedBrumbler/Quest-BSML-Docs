import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import Title from './Title'
import Aliases from './Aliases'
import Property from './Property'

export default function Macro() {
    let { macro } = useParams();
    let docMacro = docs.macros.find(m => {
        return m.aliases.find(m2 => m2 === macro) != null;
    });

    if (macro == null || docMacro == null) {
        return (
            <div className='main-body'>
                <div className='main-content'>
                    <Title title={"Macro '" + macro + "' not found"}/>
                    <div className='spacer'/>
                </div>
            </div>
        )
    }
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title={macro} description={docMacro.description}/>
                <Aliases aliases={docMacro.aliases}/>
                {
                    docMacro.properties.map(
                        p => <Property aliases={p.aliases} type={p.type} description={p.description}/>
                    )
                }
            </div>
        </div>
    )
}