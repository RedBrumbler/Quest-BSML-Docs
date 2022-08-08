export const ActionButton = {
exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel'>
    <text text='Click to reload textures:' underlined='true'/>
    <action-button label='Reload Textures' on-click='ReloadTextures'/>
</vertical>`,
exampleImage: `Examples/ActionButton.png`
};

export const Background = {
    exampleString: 
`<bg background='round-rect-panel' bg-alpha='0.8'>
    <stack pref-width='30' pref-height='10'>
        <text text='Some Text here!' font-size='2'/>
    </stack>
</bg>`,
    exampleImage: `Examples/Background.png`
};

export const Button = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <text text='Click to reload textures:' underlined='true'/>
    <button label='Reload Textures' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `Examples/Button.png`
};

export const ButtonWithIcon = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <text text='Click to reload textures:' underlined='true'/>
    <button src='BeatSaberMarkupLanguage_reload' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `Examples/ButtonWithIcon.png`
};

export const ClickableImage = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <text text='Click to reload textures:' underlined='true'/>
    <stack pref-width='10' pref-height=10>
        <clickable-image src='BeatSaberMarkupLanguage_reload' on-click='ReloadTextures'/>
    </stack>
</vertical>`,
    exampleImage: `Examples/ClickableImage.png`
}

export const ClickableText = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <clickable-text text='Click to reload textures:' underlined='true' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `Examples/ClickableText.png`
}

export const ColorSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <color-setting label='Saber Color' on-change='SaberColorPicked' apply-on-change='true'/>
</vertical>`,
    exampleImage: `Examples/ColorSetting.png`
}

export const CustomList = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <custom-list label='TrailType' options='trailTypes' on-change='TrailTypeChosen'/>
</vertical>`,
    exampleImage: `Examples/DropdownListSetting.png`
}

export const DropdownListSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <dropdown-list-setting label='TrailType' options='trailTypes' on-change='TrailTypeChosen'/>
</vertical>`,
    exampleImage: `Examples/DropdownListSetting.png`
}

export const Grid = {
    exampleString: 
`<grid cell-size-x='20' cell-size-y='10' pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <macro.repeat count='10'>
        <text text='cell'/>
    </macro.repeat>
</grid>`,
    exampleImage: `Examples/Grid.png`
}

export const Horizontal = {
    exampleString: 
`<horizontal pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <macro.repeat count='3'>
        <text text='cell'/>
    </macro.repeat>
</horizontal>`,
    exampleImage: `Examples/Horizontal.png`
}

export const IconSegments = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <icon-segments contents='SegmentedIconData' select-cell='SelectedIcon'/>
</vertical>`,
    exampleImage: `Examples/IconSegments.png`
}

export const Image = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <stack pref-width='10' pref-height=10>
        <image src='BeatSaberMarkupLanguage_reload'/>
    </stack>
</vertical>`,
    exampleImage: `Examples/Image.png`
}

export const IncrementSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <increment-setting label="Note Size" min='0.05' max='2' increment='0.05' digits='2' on-change='SetSize'/>
</vertical>`,
    exampleImage: `Examples/IncrementSetting.png`
}

export const LeaderBoard = {
    exampleString: 
`<bg bg='rount-rect-panel'>
    <leaderboard/>
</bg>`,
    exampleImage: `Examples/LeaderBoard.png`
}

export const List = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <list content='TextureListCellInfo' on-select='ItemSelected'/>
</vertical>`,
    exampleImage: `Examples/List.png`
}

export const ListSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <list-setting choices='listOptionChoices' on-select='SelectedChoice'/>
</vertical>`,
    exampleImage: `Examples/ListSetting.png`
}

export const ListSliderSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <list-slider-setting choices='listOptionChoices' on-select='SelectedChoice'/>
</vertical>`,
    exampleImage: `Examples/ListSliderSetting.png`
}

export const Loading = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <stack pref-width='20' pref-height='20'>
        <loading pref-width='20' pref-height='20' preserve-aspect='true'/>
    </stack>
</vertical>`,
    exampleImage: `Examples/Loading.png`
}

export const Modal = {
    exampleString: 
`<bg>
    <button label='Show Modal' on-click='myModal#Show'/>
    <modal id='myModal' pref-height='10' pref-width='30'>
        <text text='Hello'/>
    </modal>
</bg>`,
    exampleImage: `Examples/Modal.png`
}

export const ModalColorPicker = {
    exampleString: 
`<bg>
    <button on-click='PickAColor'/>
    <modal-color-picker id='colorPicker'/>
</bg>`,
    exampleImage: `Examples/ModalColorPicker.png`
}

export const ModalKeyboard = {
    exampleString: 
`<bg>
    <button on-click='EnterAString'/>
    <modal-keyboard id='keyboard'/>
</bg>`,
    exampleImage: `Examples/ModalKeyboard.png`
}

export const Modifier = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <modifier label='Custom Modifier' on-chang='ModifierToggled'/>
</vertical>`,
    exampleImage: `Examples/Modifier.png`
}

export const ModifierContainer = {
    exampleString: 
`<bg>
    <modifier-container label='Custom Modifier' on-chang='ModifierToggled'>
        <grid cell-size-x='25' cell-size-y='15' pref-width='75' pref-height='80'>
            <macro.repeat count='10'>
                <modifier label='Custom Modifier'/>
            </macro.repeat>
        </grid>
    </modifier-container>
</bg>`,
    exampleImage: `Examples/ModifierContainer.png`
}

export const PageButton = {
    exampleString: 
`<bg>
    <vertical anchor-pos-x="60" pref-height="80" pref-width="10" vertical-fit="PreferredSize">
        <horizontal>
            <page-button text="Up" tags="PageUpFor:cont" direction="Up" pref-height="7.5" pref-width="7.5"/>
        </horizontal>
        <horizontal vertical-fit="Unconstrained" horizontal-fit="MinSize" min-width="1.5" pref-width="1.5" pref-height="65">
            <scroll-indicator tags="IndicatorFor:cont"/>
        </horizontal>
        <horizontal>
            <page-button tags="PageDownFor:cont" direction="Down" pref-height="7.5" pref-width="7.5"/>
        </horizontal>
    </vertical>
    <scrollable-container size-delta-x="-54" horizontal-fit="PreferredSize" id="cont">
        <macro.repeat count='10'>
            <button label='A Button'/>
        </macro.repeat>
    </scrollable-container>
</bg>`,
    exampleImage: `Examples/PageButton.png`
}

export const RawImage = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <stack pref-width='10' pref-height=10>
        <raw-image src='#ClockIcon'/>
    </stack>
</vertical>`,
    exampleImage: `Examples/RawImage.png`
}

export const ScrollIndicator = {
    exampleString: 
`<bg>
    <vertical anchor-pos-x="60" pref-height="80" pref-width="10" vertical-fit="PreferredSize">
        <horizontal>
            <page-button text="Up" tags="PageUpFor:cont" direction="Up" pref-height="7.5" pref-width="7.5"/>
        </horizontal>
        <horizontal vertical-fit="Unconstrained" horizontal-fit="MinSize" min-width="1.5" pref-width="1.5" pref-height="65">
            <scroll-indicator tags="IndicatorFor:cont"/>
        </horizontal>
        <horizontal>
            <page-button tags="PageDownFor:cont" direction="Down" pref-height="7.5" pref-width="7.5"/>
        </horizontal>
    </vertical>
    <scrollable-container size-delta-x="-54" horizontal-fit="PreferredSize" id="cont">
        <macro.repeat count='10'>
            <button label='A Button'/>
        </macro.repeat>
    </scrollable-container>
</bg>`,
    exampleImage: `Examples/ScrollIndicator.png`
}

export const ScrollView = {
    exampleString: 
`<bg>
    <scroll-view>
        <macro.repeat count='20'>
            <button label='A Button'/>
        <macro.repeat/>
    </scroll-view>
</bg>`,
    exampleImage: `Examples/ScrollView.png`
}

export const ScrollableContainer = {
    exampleString: 
`<bg>
    <vertical anchor-pos-x="60" pref-height="80" pref-width="10" vertical-fit="PreferredSize">
        <horizontal>
            <page-button text="Up" tags="PageUpFor:cont" direction="Up" pref-height="7.5" pref-width="7.5"/>
        </horizontal>
        <horizontal vertical-fit="Unconstrained" horizontal-fit="MinSize" min-width="1.5" pref-width="1.5" pref-height="65">
            <scroll-indicator tags="IndicatorFor:cont"/>
        </horizontal>
        <horizontal>
            <page-button tags="PageDownFor:cont" direction="Down" pref-height="7.5" pref-width="7.5"/>
        </horizontal>
    </vertical>
    <scrollable-container size-delta-x="-54" horizontal-fit="PreferredSize" id="cont">
        <macro.repeat count='10'>
            <button label='A Button'/>
        </macro.repeat>
    </scrollable-container>
</bg>`,
    exampleImage: `Examples/ScrollableContainer.png`
}

export const SettingsScrollView = {
    exampleString: 
`<bg>
    <settings-scroll-view>
        <macro.repeat count='10'>
            <increment-setting label='Numeric Value'/>
        </macro.repeat>
    </settings-scroll-view>
</bg>`,
    exampleImage: `Examples/SettingsScrollView.png`
}

export const SliderSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <slider-setting label="Note Size" min='0.05' max='2' increment='0.05' digits='2' on-change='SetSize'/>
</vertical>`,
    exampleImage: `Examples/SliderSetting.png`
}

export const Stack = {
    exampleString: 
`<stack pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <macro.repeat count='3'>
        <text text='cell'/>
    </macro.repeat>
</stack>`,
    exampleImage: `Examples/Stack.png`
}

export const StringSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <string-setting label="User name" on-change='SetUserName'/>
</vertical>`,
    exampleImage: `Examples/StringSetting.png`
}

export const Tab = {
    exampleString: 
`<bg>
    <tab-selector tab-tag="main" anchor-pos-y='0' size-delta-y='6' size-delta-x='-60' child-expand-width='true' child-control-width='true'/>
    <tab tags="main" tab-name="first">
        <text text='First Tab'/>
    </tab>
    <tab tags="main" tab-name="second">
        <text text='Second Tab'/>
    </tab>
    <tab tags="main" tab-name="third">
        <text text='Third Tab'/>
    </tab>
</bg>`,
    exampleImage: `Examples/Tab.png`
}

export const TabSelect = {
    exampleString: 
`<bg>
    <tab-selector tab-tag="main" anchor-pos-y='0' size-delta-y='6' size-delta-x='-60' child-expand-width='true' child-control-width='true'/>
    <tab tags="main" tab-name="first">
        <text text='First Tab'/>
    </tab>
    <tab tags="main" tab-name="second">
        <text text='Second Tab'/>
    </tab>
    <tab tags="main" tab-name="third">
        <text text='Third Tab'/>
    </tab>
</bg>`,
    exampleImage: `Examples/TabSelect.png`
}

export const Text = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <text text='Some Text' underlined='true'/>
</vertical>`,
    exampleImage: `Examples/Text.png`
}

export const TextPage = {
    exampleString: 
`<vertical horizontal-fit="Unconstrained">
    <horizontal vertical-fit="Unconstrained">
        <text-page text='Some large amount of text I do not have right now that I want people to scroll through' />
    </horizontal>
</vertical>`,
    exampleImage: `Examples/TextPage.png`
}

export const TextSegments = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <icon-segments contents='TextSegmentedItemList' select-cell='SelectedCell'/>
</vertical>`,
    exampleImage: `Examples/TextSegments.png`
}

export const ToggleSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <toggle-setting label="Enable Mod" on-change='SetEnabled'/>
</vertical>`,
    exampleImage: `Examples/ToggleSetting.png`
}

export const Vertical = {
    exampleString: 
`<vertical pref-width='30' pref-height='60' bg='rount-rect-panel'>
    <macro.repeat count='3'>
        <text text='cell'/>
    </macro.repeat>
</vertical>`,
    exampleImage: `Examples/Vertical.png`
}

export const VerticalIconSegments = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='rount-rect-panel'>
    <vertical-icon-segments contents='SegmentedIconData' select-cell='SelectedIcon'/>
</vertical>`,
    exampleImage: `Examples/VerticalIconSegments.png`
}