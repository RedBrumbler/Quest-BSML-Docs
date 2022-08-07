import Title from '../Components/Title';
import SubTitle from '../Components/SubTitle';
import Command from '../Components/Command';
import Code from '../Components/Code';
import ReactMarkdown from 'react-markdown';

const codeblock = `~~~
namespace BSML {
    void Init();
}
~~~`;

export default function GettingStarted() {
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title='Getting Started'/>
                <p>
                    This page assumes you already know how to work with custom types, and how to compile a mod for quest. It will not be explaining the process of creating a mod.
                    Make sure that you are able to compile a mod and put it on your quest.

                    It also assumes you are working with questui for registering elements to the correct places.

                    With that out of the way, let's get started.
                </p>
                <SubTitle title='Adding the dependency'/>
                <p>
                    Obviously, this is one of the steps you likely already know how to do, but I'll go over it anyways.
                    To add the dependency, you simply run the following command in your project: <Command command='qpm-rust' args={['dependency', 'add', '"bsml"']}/>

                    This will add the dependency to your project, don't forget to restore so your dependencies are updated!
                </p>

                <SubTitle title='Using the library'/>
                <p>
                    Now that you have the library usable in your mod, you can start using it.
                    It's as easy as adding the include to your view controller:
                    <Code>
                        #include "bsml/shared/BSML.hpp"
                    </Code>

                    Within this header, you will find a few methods that will prove useful for you.
                    These methods are as follows:

                    <ReactMarkdown>
                        {codeblock}
                    </ReactMarkdown>

                    The Init method just initializes BSML so that hooks it needs are installed and types are registered, though the other methods implicitly call this too.

                    The parse method parses a given string view of a BSML file, and returns the BSMLParser generated from this. The UI has not been built yet at this point! To build the UI at this point, you still need to call Construct on the given parser, and pass it your host object and parent transform.

                    The parse_and_construct method does nearly the same thing as the parse method, except it also constructs the UI. It'll still return the created BSMLParser though, meaning you can afterwards do whatever you want still.
                </p>
                
                <SubTitle title='HotReloadViewController'/>
                <p>
                    Like the PC library, the quest version has the hot reload view controller base type. This base class can be used to create a view controller that watches a file path for changes, and if you change the file, it will regenerate the UI. This is especially useful if you quickly need to iterate your UI design and want to test out a bunch of changes. It's not quite recommended to keep using this base type as it does cause some performance overhead, but it's better than not having it.

                    To use this, when declaring your View Controller for use with quest ui, you need to change a few things, most notably, you need to declare your class as inheriting a custom type, as well as defining the <code>Awake</code> method.

                    <div className='code-block'>
                        <pre><code>
                            DECLARE_CLASS_CUSTOM(MyNamespace, ExampleViewController, BSML::HotReloadViewController,
                                DECLARE_INSTANCE_METHOD(void, Awake);
                            )
                        </code></pre>
                    </div>

                    In the source Awake method, you can then set the filepath for the file that contains your BSML layout:

                    <div className='code-block'>
                        <pre><code>
                        {/* I HATE IT HERE WHY CAN I NOT JUST EMBED SOME CODE AIDBGSDGBSFDIGHIWSGH */}
                        {'void MyNamespace::ExampleViewController::Awake() {'}
                            {'fileWatcher->filePath = "/sdcard/testview.bsml";'}
                        {'}'}
                        </code></pre>
                    </div>

                    Then updating the view is as simple as pushing the file to your quest and waiting a bit. The file checker checks every 10 seconds for changes in the file, though this is configurable via {'fileWatcher->checkInterval'}
                    
                    Just run the following command to change the view on your quest, and the view should update with your new layout:
                    <Command command='adb' args={['push', './testview.bsml', '/sdcard/testview.bsml']}/>
                    Obviously this file and location is an example, you can change it for yourself.
                </p>

                <SubTitle title='Creating a View'/>
                <p>
                    To create a view I recommend using your favourite XML editor (or just installing a VSCode extension for it) and using the asset include cmake script to automatically include your view in your mod .so file when you compile.
                    This way you can immediately just pass the value to BSML when you need it by just including the assets header and passing the value to the parse method from BSML.hpp

                    The first tag in a view can just be a <code>&lt;bg&gt;</code> tag, and the others can be whatever you want. Though you can also use any other tag as a root tag.

                    If you add the xml schema from the docs here to your XML it should also auto complete all the values for you, making usage extremely simple and easy to understand as usable values should be auto completed for you.

                    Here is a simple example of a view:
                    <Code>
                        {/* I still hate it here how I can't show proper code :) */}
                        {"<vertical child-control-height='false'>"}
                            {"<horizontal bg='panel-top' pad-left='10' pad-right='10' horizontal-fit='PreferredSize'>"}
                                {"<text text='Example' align='Center' font-size='10'></text>"}
                            {"</horizontal>"}
                            {"<horizontal bg='round-rect-panel' pad='8'>"}
                                {"<text text='Looks at this fancy text.'></text>"}
                            {"</horizontal>"}
                            {"<button text='Test Button'></button>"}
                        {"</vertical>"}
                    </Code>

                    Here's how this would look in game:
                    {/* TODO */}
                    <img src='example.png' alt='Built view from example'/>
                </p>
            </div>
        </div>
    )
}