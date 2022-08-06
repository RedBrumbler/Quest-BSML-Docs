import docs from '../assets/docs.json'
import { useParams, Link } from 'react-router-dom'
import Title from './Title';
export default function Argument() {  
    let { argument } = useParams();
    let docArg = docs.arguments.find(a => a.name === argument);
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
                Possible Values:
                {
                    docArg.possibleValues.map(v => 
                        <div className='argument'>
                            <span className='argumentName'>{v}</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}