import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import Title from '../Components/Title'
import Aliases from '../Components/Aliases'
import Property from '../Components/Property'

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
                { docMacro.aliases.length > 1 ? <Aliases aliases={docMacro.aliases} prefix='Aliases: '/> : <></> }
                {
                    docMacro.properties.map(
                        p => {
                            let linkedType = docs.arguments.find(a => a.name === p.type);
                            return (
                                linkedType != null ? 
                                <Property aliases={p.aliases} type={p.type} description={p.description} typelink={'/arguments/' + linkedType.name}/> :
                                <Property aliases={p.aliases} type={p.type} description={p.description}/>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}