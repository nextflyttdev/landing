export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  className?:string;
  items?: MenuItem[];
  hastwoCols?:boolean;
}