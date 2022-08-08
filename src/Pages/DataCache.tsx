import Title from '../Components/Title';
import CodeBlock from '../Components/CodeBlock';
import { DataCacheExample, DataCacheUsage, DataCacheDefine } from '../assets/DataCacheExample';

export default function DataCache() {
    return (
        <div className='main-body'>
            <div className='main-content'>
                <Title title='BSML DataCache' description='Providing data to BSML for images'/>
                <p>
                    In the PC version of BSML, you're able to provide resource paths to BSML for images. Sadly on the quest version this is a bit harder to do effectively, as these resource paths are not really a thing on quest, and there's no current proper way to access the included assets from other mods.<br/>
                    The solution I've provided for this can be found in the BSMLDataCache header, included like so:

                    <CodeBlock value='#include "bsml/shared/BSMLDataCache.hpp"'/>

                    In this header you'll find a class definition, a register method, and a macro. The macro is what we will be focusing on. The macro is pasted here for convenience:

                    <CodeBlock value={DataCacheDefine}/>

                    This macro functions similarly to a hook, where you define a method right after using it. This method lets you return an {'ArrayW<uint8_t>'} as data for BSML to use for images in your mod.<br/>
                </p>
                <p>
                    The macro defined in the DataCache header is used like follows:

                    <CodeBlock value={DataCacheExample}/>

                    It is then important to know your MOD_ID. If you are using the conventional tooling this will probably be your mod name, without any spaces (e.g. your mod is named Qosmetics Whackers, then your MOD_ID will be QosmeticsWhackers). The BSML DataCache saves your data as {'MOD_ID "_" #identifier'}. The following src should then be used to access that image in BSML: {'QosmeticsWhackers_examlpeImage'}.<br/>
                    This will let BSML load the image from your mod's registered data. <br/>
                </p>
                <p>
                    Here is an example of how registered data will be used within BSML:
                    <CodeBlock value={DataCacheUsage} language='xml'/>

                    BSML will now just load that image when you ask for it to be used.

                    Keen observers will notice that there is no limitation on cross referencing other mods images. If you really want that then we can add it, but I think it's better not to have that as that lets us make icons packs or similiar things possibly.

                    Advanced users may make their own register macros, but I think it's best to stick with the one provided.
                </p>
            </div>
        </div>
    )
}