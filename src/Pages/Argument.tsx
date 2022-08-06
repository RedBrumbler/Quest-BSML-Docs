import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import Title from '../Components/Title';
import Aliases from '../Components/Aliases';
export default function Argument() {  
    let { argument } = useParams();
    let docArg = docs.arguments.find(a => a.name === argument);

    let filteredComponents = docs.components.filter(c => {
        return c.properties.find(p => p.type === argument) != null;
    });
    let filteredMacros = docs.macros.filter(m => {
        return m.properties.find(p => p.type === argument) != null;
    })

    if (docArg == null) {
        return (
            <div className='main-body'>
                <div className='main-content'>
                    <Title title={"Argument '" + argument + "' not found"}/>
                </div>
            </div>
        )
    }
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title={argument} description={docArg.description}/>
                {
                    docArg.possibleValues.length > 0 ? 
                        (<>Possible Values: {
                                docArg.possibleValues.sort((a, b) => a.localeCompare(b)).map(v => 
                                    <div className='argument'>
                                        <span className='argumentName'>{v}</span>
                                    </div>
                                )
                        }</>) :
                        <></>
                }

                {filteredMacros.length > 0 ? <Title title='Used in the following Macros:'/> : <></>}
                {filteredMacros.map(m => <Aliases aliases={m.aliases} to={'/macros/' + m.name}/>) }
                {filteredComponents.length > 0 ? <Title title='Used in the following Components:'/> : <></>}
                {filteredComponents.map(c => <Aliases aliases={[c.typename]} to={'/components/' + c.typename}/>) }
            </div>
        </div>
    )
}