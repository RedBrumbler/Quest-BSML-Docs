import * as Examples from './BSMLExamples';

const TagExamples: { [key: string]: { exampleString: string, exampleImage: string} } = {
    "action-button": Examples.ActionButton,
    "background": Examples.Background,
    "button": Examples.Button,
    "button-with-icon": Examples.ButtonWithIcon,
    "clickable-image": Examples.ClickableImage,
    "clickable-text": Examples.ClickableText,
    "color-setting": Examples.ColorSetting,
    "custom-list": Examples.CustomList,
    "dropdown-list-setting": Examples.DropdownListSetting,
    "grid": Examples.Grid,
    "horizontal": Examples.Horizontal,
    "icon-segments": Examples.IconSegments,
    "image": Examples.Image,
    "increment-setting": Examples.IncrementSetting,
    "leaderboard": Examples.LeaderBoard,
    "list": Examples.List,
    "list-setting": Examples.ListSetting,
    "list-slider-setting": Examples.ListSliderSetting,
    "loading": Examples.Loading,
    "modal": Examples.Modal,
    "modal-color-picker": Examples.ModalColorPicker,
    "modal-keyboard": Examples.ModalKeyboard,
    "modifier": Examples.Modifier,
    "modifier-container": Examples.ModifierContainer,
    "page-button": Examples.PageButton,
    "raw-image": Examples.RawImage,
    "scroll-indicator": Examples.ScrollIndicator,
    "scroll-view": Examples.ScrollView,
    "scrollable-container": Examples.ScrollableContainer,
    "settings-scroll-view": Examples.SettingsScrollView,
    "slider-setting": Examples.SliderSetting,
    "stack": Examples.Stack,
    "string-setting": Examples.StringSetting,
    "tab": Examples.Tab,
    "tab-select": Examples.TabSelect,
    "text": Examples.Text,
    "text-page": Examples.TextPage,
    "text-segments": Examples.TextSegments,
    "toggle-setting": Examples.ToggleSetting,
    "vertical": Examples.Vertical,
    "vertical-icon-segments": Examples.VerticalIconSegments,
};

const MacroExamples: { [key: string]: string } = {
};

export { TagExamples, MacroExamples }