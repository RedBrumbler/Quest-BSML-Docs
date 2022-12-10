export const ActionButton = {
exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' vertical-fit='PreferredSize'>
    <text text='Click to reload textures:' align='Center'/>
    <action-button label='Reload Textures' on-click='ReloadTextures'/>
</vertical>`,
exampleImage: `ActionButton.jpg`
};

export const Background = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' vertical-fit='PreferredSize'>
    <bg bg='round-rect-panel' bg-color='#ff0505'>
        <text text='Click to reload textures:' align='Center'/>
    </bg>
    <action-button label='Reload Textures' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `Background.jpg`
};

export const Button = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' vertical-fit='PreferredSize'>
    <text text='Click to reload textures:' align='Center'/>
    <button label='Reload Textures' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `Button.jpg`
};

export const ButtonWithIcon = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' vertical-fit='PreferredSize'>
    <text text='Click to reload textures:' align='Center'/>
    <button-with-icon src='#ReloadIcon' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `ButtonWithIcon.jpg`
};

export const ClickableImage = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' vertical-fit='PreferredSize'>
    <text text='Click to reload textures:' align='Center'/>
    <stack pref-width='10' pref-height='10' 
        vertical-fit='PreferredSize' horizontal-fit='PreferredSize'>
        <clickable-image src='#ReloadIcon' on-click='ReloadTextures'/>
    </stack>
</vertical>`,
    exampleImage: `ClickableImage.jpg`
}

export const ClickableText = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' vertical-fit='PreferredSize'>
    <clickable-text text='Click to reload textures:' on-click='ReloadTextures'/>
</vertical>`,
    exampleImage: `ClickableText.jpg`
}

export const ColorSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <color-setting label='Saber Color' on-change='SaberColorPicked' apply-on-change='true'/>
</vertical>`,
    exampleImage: `ColorSetting.jpg`
}

export const CustomList = {
    exampleString: 
`<bg size-delta-x="65" size-delta-y="65" anchor-pos-x="0" anchor-pos-y="10">
    <vertical horizontal-fit='PreferredSize' 
        vertical-fit='PreferredSize' anchor-pos-x='-3' size-delta-y='0'>
        <custom-list data="customListData" pref-height='55' pref-width='55' show-scrollbar="true">
            <stack vertical-fit='Unconstrained'>
                <horizontal pref-height="8.5" vertical-fit='Unconstrained' bg="round-rect-panel">
                    <image src="#ClockIcon" pref-width="5" pref-height="5"/>
                    <text text="This is a cell" tags="cellText" />
                </horizontal>
            </stack>
        </custom-list>
    </vertical>
</bg>`,
    exampleImage: `CustomList.jpg`
}

export const DropdownListSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <dropdown-list-setting label='TrailType' options='trailTypes' on-change='TrailTypeChosen'/>
</vertical>`,
    exampleImage: `DropdownListSetting.jpg`
}

export const Grid = {
    exampleString: 
`<grid  cell-size-x='20' 
        cell-size-y='10' 
        pref-width='60' 
        pref-height='30' 
        bg='round-rect-panel' 
        horizontal-fit='PreferredSize' 
        vertical-fit='PreferredSize'>
    <macro.repeat count='10'>
        <text text='cell' align='Center'/>
    </macro.repeat>
</grid>`,
    exampleImage: `Grid.jpg`
}

export const GradientText = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <gradient-text 
        text="Be Gay Do Crime" 
        gradient='red;yellow;green;cyan;blue;magenta;red' 
        gradient-repeat='2' 
        align='Center' 
        font-size='8'/>
    <gradient-text 
        text="Trans Rights" 
        gradient='#5bcefa;#f5a9b8;#ffffff;#f5a9b8;#5bcefa' 
        gradient-repeat='1' 
        align='Center' 
        font-size='8'/>
</vertical>`,
    exampleImage: `GradientText.jpg`
}

export const Horizontal = {
    exampleString: 
`<horizontal pref-width='60' pref-height='30' bg='round-rect-panel'>
    <macro.repeat count='3'>
        <text text='cell' align='Center'/>
    </macro.repeat>
</horizontal>`,
    exampleImage: `Horizontal.jpg`
}

export const IconSegments = {
    exampleString: 
`<vertical pref-width='40' pref-height='10' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <icon-segments contents='segmentedIconData' select-cell='SelectedIcon'/>
</vertical>`,
    exampleImage: `IconSegments.jpg`
}

export const Image = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' vertical-fit='PreferredSize'>
    <stack pref-width='10' pref-height='10' vertical-fit='PreferredSize' 
        horizontal-fit='PreferredSize'>
        <image src='#ReloadIcon' on-click='ReloadTextures'/>
    </stack>
</vertical>`,
    exampleImage: `Image.jpg`
}

export const IncrementSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <increment-setting label="Note Size" min='0.05' max='2' 
        increment='0.05' digits='2' on-change='SetSize'/>
</vertical>`,
    exampleImage: `IncrementSetting.jpg`
}

export const LeaderBoard = {
    exampleString: 
`<vertical  bg='round-rect-panel' pref-width='90' pref-height='65' 
    vertical-fit='PreferredSize' pad='2'>
    <leaderboard id='lb'/>
</vertical>`,
    exampleImage: `LeaderBoard.jpg`
}

export const List = {
    exampleString: 
`<bg size-delta-x="65" size-delta-y="65" anchor-pos-x="0" anchor-pos-y="10">
    <vertical bg='round-rect-panel' horizontal-fit='PreferredSize' vertical-fit='PreferredSize' 
        anchor-pos-x='-3' size-delta-y='0' pad='2'>
        <list content='listData' on-select='ItemSelected' show-scrollbar='true'/>
    </vertical>
</bg>`,
    exampleImage: `List.jpg`
}

export const ListSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <list-setting label='Text' choices='lyrics' on-select='SelectedChoice'/>
</vertical>`,
    exampleImage: `ListSetting.jpg`
}

export const ListSliderSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <list-slider-setting label='Text' choices='lyrics' on-select='SelectedChoice'/>
</vertical>`,
    exampleImage: `ListSliderSetting.jpg`
}

export const Loading = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <stack pref-width='20' pref-height='20'>
        <loading pref-width='20' pref-height='20' preserve-aspect='true'/>
    </stack>
</vertical>`,
    exampleImage: `Loading.jpg`
}

export const Modal = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <button label='Show Modal' on-click='myModal#Show'/>
    <modal id='myModal' pref-height='10' pref-width='30' click-off-closes='true' 
        move-to-center='false' anchor-pos-x='-40' anchor-pos-y='20'>
        <vertical pref-width='40' pref-height='20' bg='round-rect-panel' 
            vertical-fit='PreferredSize' pad='2'>
            <text text='Hello' align='Center'/>
        </vertical>
    </modal>
</vertical>`,
    exampleImage: `Modal.jpg`
}

export const ModalColorPicker = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <button on-click='PickAColor'/>
    <modal-color-picker id='colorPicker'/>
</vertical>`,
    exampleImage: undefined
}

export const ModalKeyboard = {
    exampleString: 
`<bg>
    <button on-click='EnterAString'/>
    <modal-keyboard id='keyboard'/>
</bg>`,
    exampleImage: undefined
}

export const Modifier = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <modifier label='Custom Modifier' on-chang='ModifierToggled'/>
</vertical>`,
    exampleImage: `Modifier.jpg`
}

export const ModifierContainer = {
    exampleString: 
`<modifier-container label='Custom Modifier' on-chang='ModifierToggled' 
    ref-width='80' pref-height='50' size-delta-x='89'>
    <grid bg='round-rect-panel' cell-size-x='25' spacing-x='2' cell-size-y='10' 
        spacing-y='2' pref-width='80' pref-height='50' pad='2'>
        <macro.repeat count='12'>
            <modifier label='Custom Modifier'/>
        </macro.repeat>
    </grid>
</modifier-container>`,
    exampleImage: `ModifierContainer.jpg`
}

export const PageButton = {
    exampleString: 
`<bg>
    <vertical anchor-pos-x="60" pref-height="80" pref-width="10" 
        vertical-fit="PreferredSize">
        <horizontal>
            <page-button text="Up" tags="PageUpFor:cont" direction="Up" 
                pref-height="7.5" pref-width="7.5"/>
        </horizontal>
        <horizontal vertical-fit="Unconstrained" horizontal-fit="MinSize" 
            min-width="1.5" pref-width="1.5" pref-height="65">
            <scroll-indicator tags="IndicatorFor:cont"/>
        </horizontal>
        <horizontal>
            <page-button tags="PageDownFor:cont" direction="Down" 
                pref-height="7.5" pref-width="7.5"/>
        </horizontal>
    </vertical>
    <scrollable-container size-delta-x="-54" horizontal-fit="PreferredSize" 
        id="cont">
        <macro.repeat count='10'>
            <button label='A Button'/>
        </macro.repeat>
    </scrollable-container>
</bg>`,
    exampleImage: `PageButton.jpg`
}

export const RawImage = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <stack pref-width='10' pref-height='10' horizontal-fit='PreferredSize' 
        vertical-fit='PreferredSize'>
        <raw-image src='#BillieEilishCover'/>
    </stack>
</vertical>`,
    exampleImage: `RawImage.jpg`
}

export const ScrollIndicator = {
    exampleString: 
`<bg>
    <vertical anchor-pos-x="60" pref-height="80" pref-width="10" 
        vertical-fit="PreferredSize">
        <horizontal>
            <page-button text="Up" tags="PageUpFor:cont" direction="Up" 
                pref-height="7.5" pref-width="7.5"/>
        </horizontal>
        <horizontal vertical-fit="Unconstrained" horizontal-fit="MinSize" 
            min-width="1.5" pref-width="1.5" pref-height="65">
            <scroll-indicator tags="IndicatorFor:cont"/>
        </horizontal>
        <horizontal>
            <page-button tags="PageDownFor:cont" direction="Down" 
                pref-height="7.5" pref-width="7.5"/>
        </horizontal>
    </vertical>
    <scrollable-container size-delta-x="-54" horizontal-fit="PreferredSize" 
        id="cont">
        <macro.repeat count='10'>
            <button label='A Button'/>
        </macro.repeat>
    </scrollable-container>
</bg>`,
    exampleImage: `ScrollIndicator.jpg`
}

export const ScrollView = {
    exampleString: 
`<bg>
    <scroll-view>
        <macro.repeat count='20'>
            <button label='A Button'/>
        </macro.repeat>
    </scroll-view>
</bg>`,
    exampleImage: `ScrollView.jpg`
}

export const ScrollableContainer = {
    exampleString: 
`<bg>
    <vertical anchor-pos-x="60" pref-height="80" pref-width="10" 
        vertical-fit="PreferredSize">
        <horizontal>
            <page-button text="Up" tags="PageUpFor:cont" direction="Up" 
                pref-height="7.5" pref-width="7.5"/>
        </horizontal>
        <horizontal vertical-fit="Unconstrained" horizontal-fit="MinSize" 
            min-width="1.5" pref-width="1.5" pref-height="65">
            <scroll-indicator tags="IndicatorFor:cont"/>
        </horizontal>
        <horizontal>
            <page-button tags="PageDownFor:cont" direction="Down" 
                pref-height="7.5" pref-width="7.5"/>
        </horizontal>
    </vertical>
    <scrollable-container size-delta-x="-54" horizontal-fit="PreferredSize" 
        id="cont">
        <macro.repeat count='10'>
            <button label='A Button'/>
        </macro.repeat>
    </scrollable-container>
</bg>`,
    exampleImage: `ScrollableContainer.jpg`
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
    exampleImage: `SettingsScrollView.jpg`
}

export const SliderSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <slider-setting label="Note Size" min='0.05' max='2' increment='0.05' 
        digits='2' on-change='SetSize'/>
</vertical>`,
    exampleImage: `SliderSetting.jpg`
}

export const Stack = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <stack pref-width='60' pref-height='30'>
        <image src='#ClockIcon' img-color='#ff0000' 
            preserve-aspect='true' skew='0.18'/>
        <text text='It is Time' align='Center'/>
    </stack>
</vertical>`,
    exampleImage: `Stack.jpg`
}

export const StringSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <string-setting label="User name" on-change='SetUserName'/>
</vertical>`,
    exampleImage: `StringSetting.jpg`
}

export const Tab = {
    exampleString: 
`<bg>
    <tab-selector tab-tag="main" anchor-pos-y='0' size-delta-y='6' size-delta-x='-60' 
        child-expand-width='true' child-control-width='true'/>
    <tab tags="main" tab-name="first">
        <text text='First Tab' align='Center'/>
    </tab>
    <tab tags="main" tab-name="second">
        <text text='Second Tab' align='Center'/>
    </tab>
    <tab tags="main" tab-name="third">
        <text text='Third Tab' align='Center'/>
    </tab>
</bg>`,
    exampleImage: `Tab.jpg`
}

export const TabSelect = {
    exampleString: 
`<bg>
    <tab-selector tab-tag="main" anchor-pos-y='0' size-delta-y='6' size-delta-x='-60' 
        child-expand-width='true' child-control-width='true'/>
    <tab tags="main" tab-name="first">
        <text text='First Tab' align='Center'/>
    </tab>
    <tab tags="main" tab-name="second">
        <text text='Second Tab' align='Center'/>
    </tab>
    <tab tags="main" tab-name="third">
        <text text='Third Tab' align='Center'/>
    </tab>
</bg>`,
    exampleImage: `TabSelect.jpg`
}

export const Text = {
    exampleString: 
`<vertical pref-width='60' pref-height='50' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <text text="Holy shit it's" align='Center' font-size='8'/>
    <img src='#CamelliaCover' preserve-aspect='true' 
        pref-width='40' pref-height='40'/>
    <text text="it's camellia" align='Center' font-size='8'/>
</vertical>`,
    exampleImage: `Text.jpg`
}

export const TextPage = {
    exampleString: 
`<vertical horizontal-fit="Unconstrained">
    <horizontal vertical-fit="Unconstrained">
        <text-page text='Some large amount of text I do not have right now that I want people to scroll through' />
    </horizontal>
</vertical>`,
    exampleImage: `TextPage.jpg`
}

export const TextSegments = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <text-segments contents='TextSegmentedItemList' select-cell='SelectedCell'/>
</vertical>`,
    exampleImage: `TextSegments.jpg`
}

export const ToggleSetting = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <toggle-setting label="Enable Mod" on-change='SetEnabled'/>
</vertical>`,
    exampleImage: `ToggleSetting.jpg`
}

export const Vertical = {
    exampleString: 
`<vertical pref-width='30' pref-height='60' bg='round-rect-panel'>
    <macro.repeat count='3'>
        <text text='cell' align='Center'/>
    </macro.repeat>
</vertical>`,
    exampleImage: `Vertical.jpg`
}

export const VerticalIconSegments = {
    exampleString: 
`<vertical pref-width='60' pref-height='30' bg='round-rect-panel' 
    vertical-fit='PreferredSize' pad='2'>
    <vertical-icon-segments contents='SegmentedIconData' select-cell='SelectedIcon'/>
</vertical>`,
    exampleImage: `VerticalIconSegments.jpg`
}