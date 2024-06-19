interface IconMapping {
  HomeStack: 'home';
  SearchStack: 'search';
}

const ICON_MAPPING: IconMapping = {
  HomeStack: 'home',
  SearchStack: 'search',
};

export type IconName = IconMapping[keyof IconMapping];
