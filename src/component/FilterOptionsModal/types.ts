export type OptionItemType = {name:string  ,id: number; label: string; value: string | number};


type SingleOrMulti = {
  multiple: true;
  selectedItem?: OptionItemType[];
  onItemPress: (item: OptionItemType[]) => void;
} | {
  multiple?: false,
  selectedItem?: OptionItemType;
  onItemPress: (item: OptionItemType) => void;
}

export type FilterOptionsModalProps = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  data: OptionItemType[];
  mode: "sheet" | "modal";
  searchable?: boolean;
} & SingleOrMulti;
