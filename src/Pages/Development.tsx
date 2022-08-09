import Title from '../Components/Title';
import SubTitle from '../Components/SubTitle';
import CodeBlock from '../Components/CodeBlock';

const BSMLExample = 
`<bg xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='https://redbrumbler.github.io/BSML-Docs/ https://raw.githubusercontent.com/RedBrumbler/Quest-BSML-Docs/gh-pages/schema.xsd'>
    <!-- Your BSML Code here -->
</bg>`;

export default function Development() {
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title='Development' description='Creating your very own BSML files'/>
                <p>
                    This page will have information about creating .bsml files for your mods, and how to setup your development environment for them.
                    It assumes you know how to edit files in your favourite code editor.
                </p>
                <p>
                    To effectively use the BSML library, you should use the BSML xml schema, so that values will be auto completed for you and properly validated. Most code editors with support for XML editing will automatically download the schema if your XML file defines this schema.<br/>
                    For this purpose here's a code example of a BSML file that should have the schema location embedded, causing your code editor to check the bsml file for syntax and proper tags.

                    <CodeBlock value={BSMLExample} language='xml'/>

                    Just copy the code here and put it in your .bsml file as a base, and then develop your UI from there.
                </p>
                <SubTitle title='Extra step for VScode'/>
                <p>
                    An extra step you should take in VScode is to add an xml xml tools extension (the ones by red hat or josh johnson should suffice). You should also go into your settings and enter the search query "files: associations" into the search bar, and add an alias for "*.bsml" to "xml". This way VScode will use bsml files as if they are xml files.<br/>
                    If you are using a different code editor then it's an excersize for the reader to do this.
                </p>
            </div>
        </div>
    )
}