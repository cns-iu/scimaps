// icon will need updated when new icons are used, but this way it ensures you use an actual icon name and allows
// autocompleting names.
export interface IconLink {
  icon: 'videocam' | 'insert_photo';
  url: string;
}

export interface TableField {
  label: string;
  type: string;
  url?: string;
  icon?: string;
  links?: IconLink[];
}

export interface TableData {
  [key: string]: TableField;
}
