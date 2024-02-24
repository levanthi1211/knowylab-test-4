export type CategoryItem = {
  logo: React.ReactElement;
  title: string;
  subtitle: string;
};

export type CategoryProps = {
  header: string;
  items: CategoryItem[];
};
