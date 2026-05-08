export type MapControlsProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MapViewProps = {
  children: React.ReactNode;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MenuSidebarProps = {
  sidebarOpen: boolean;
};