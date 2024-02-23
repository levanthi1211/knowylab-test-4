export type User = {
  ranking: number;
  avatar?: string | false;
  online?: boolean | undefined;
  avatarAlt?: string;
  avatarAltBg?: string;
  name: string;
  change: number;
};

export type LeaderboardProps = {
  header: string;
  badges: boolean;
  subtitle: string;
  ranking: number;
  users: User[];
};
