import docs from '../assets/docs.json'
import { TagExamples } from '../assets/Examples'

import { useParams, Link } from 'react-router-dom'
import '../styles/App.scss'
import Title from '../Components/Title'
import SubTitle from '../Components/SubTitle'
import Aliases from '../Components/Aliases'
import Property from '../Components/Property'
import CodeBlock from '../Components/CodeBlock'

export default function Tag() {
    let { tag } = useParams();
    let docTag = docs.tags.find(t => {
        return t.aliases.find(t2 => t2 === tag) != null;
    });
    
    if (docTag === null || docTag === undefined) {
        return (
            <div className='main-body'>
                <div className='main-content'>
                    <Title title={"Tag '" + tag + "' not found"}/>
                </div>
            </div>
        )
    }
    let theName = docTag.name;
    let example = TagExamples[theName];

    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title={tag} description={docTag.description}/>
                {docTag.aliases.length > 1 ? <Aliases aliases={docTag.aliases.filter(t => t !== tag)} prefix='Aliases:'/> : <></>}
                <div className='components'>
                    {
                        docTag.components.sort().map(
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
                                        <div className='componentDescription'>
                                            {component.description}
                                        </div>
                                        { component.properties.map(
                                            p => {
                                                let linkedType = docs.arguments.find(a => a.name === p.type);
                                                return (
                                                    linkedType != null ? 
                                                    <Property aliases={p.aliases} type={p.type} description={p.description} typelink={'/arguments/' + linkedType.name}/> :
                                                    <Property aliases={p.aliases} type={p.type} description={p.description}/>
                                                )
                                            }
                                        )}
                                    </div>
                                )
                            }
                        )
                    }
                </div>
                { example != null ? 
                    <div className='usage-example'>
                        <SubTitle title="Usage Example"> Using <div className='alias'>{docTag.name}</div> </SubTitle>
                        <CodeBlock value={example.exampleString} language='xml'/>
                        {example.exampleImage != null ? <div className='example-image-wrapper'><img className='example-image' src={'/img/' + example.exampleImage} alt={docTag.name + ' In Game Result'}/></div> : <></>}
                    </div>
                    : <></>
                }

                <div style={{margin: '0 0 50vh 0'}}/>
            </div>
        </div>
    )
}