const BSML = 
`#pragma once

#include "UnityEngine/Transform.hpp"
#include "BSML/Parsing/BSMLParser.hpp"

namespace BSML {
    void Init();
    
    std::shared_ptr<BSMLParser> parse(std::string_view str);
    std::shared_ptr<BSMLParser> parse_and_construct(std::string_view str, UnityEngine::Transform* parent, Il2CppObject* host);
}`;

export { BSML };