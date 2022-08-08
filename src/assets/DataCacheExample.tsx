const DataCacheExample = 
`#include "assets.hpp"
#include "bsml/shared/BSMLDataCache.hpp"

BSML_DATACACHE(exampleImage) { 
    ArrayW<uint8_t> data = IncludedAssets::example_png;
    return data;
}`;

const DataCacheUsage = 
`<vertical pref-width='10' horizontal-fit='PreferredSize'>
    <horizontal pref-height='10' vertical-fit='PreferredSize'>
        <img src='QosmeticsWhackers_exampleImage'>
    </horizontal>
</vertical>`;

const DataCacheDefine = 
`#define BSML_DATACACHE(key)                                                     \\
class BSMLDataCacheEntry_##key : public BSML::DataCache::Entry {                \\
    public:                                                                     \\
        BSMLDataCacheEntry_##key() : BSML::DataCache::Entry(MOD_ID "_" #key) {} \\
        ArrayW<uint8_t> get_data() const override;                              \\
};                                                                              \\
static const BSMLDataCacheEntry_##key BSMLDataCacheEntry_##key##_instance{};    \\
ArrayW<uint8_t> BSMLDataCacheEntry_##key::get_data() const`;

export { DataCacheExample, DataCacheUsage, DataCacheDefine};