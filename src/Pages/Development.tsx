import Title from '../Components/Title';
import SubTitle from '../Components/SubTitle';
import CodeBlock from '../Components/CodeBlock';

const BSMLExample = 
`<bg xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xsi:schemaLocation='https://redbrumbler.github.io/BSML-Docs/ https://raw.githubusercontent.com/RedBrumbler/Quest-BSML-Docs/gh-pages/schema.xsd'>
    <!-- Your BSML Code here -->
</bg>`;

const OptionsBSML =
`<bg>
    <dropdown data='identifier'/>
</bg>`;

const OptionsExample =
`DECLARE_CLASS_CODEGEN(MyMod, MyClass, Il2CppObject,
    BSML_OPTIONS_LIST_OBJECT(identifier, "Option1", "Option2", "Option3");
)`;

const PropertyExample =
`// .hpp code:
DECLARE_CLASS_CODEGEN(MyMod, MyClass, Il2CppObject,
    DECLARE_BSML_PROPERTY(int, number);
    // The above line is essentially equivalent to these macros combined:
    // DECLARE_INSTANCE_FIELD(int, _number);
    // DECLARE_INSTANCE_METHOD(int, get_number);
    // DECLARE_INSTANCE_METHOD(void, set_number, int value);
)

// .cpp code:
DEFINE_TYPE(MyMod, MyClass);

namespace MyMod {
    // the backing field already exists, so we will not have to worry about that
    int MyClass::get_number() { return _number; }
    void MyClass::set_number(int value) { _number = value; }
}`;

const PropertyExampleSource =
``;
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
                <SubTitle title='Useful macros'/>
                <p>
                    If you have a dropdown, list-setting or list-slider-setting in BSML like this:
                    <CodeBlock value={OptionsBSML} language='xml'/>
                    
                    And want to use a list of strings for the data in that dropdown, then you should be able to provide this list using the macros in "bsml/shared/macros.hpp". The specific macro to use is BSML_OPTIONS_LIST_OBJECT, which is used like this:
                    <CodeBlock value={OptionsExample} language='cpp'/>
                    <br/>
                    Another macro contained in this header is DECLARE_BSML_PROPERTY(_type, _name); which automatically declares a backing field, getter and setter for you. It should be used as follows:
                    <CodeBlock value={PropertyExample} language='cpp'/>
                    
                </p>
            </div>
        </div>
    )
}