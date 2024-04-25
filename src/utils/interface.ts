import { IconCoin, IconDiscount2, IconReceipt2, IconUserPlus } from "@tabler/icons-react";

export interface NavbarProps {
	opened: boolean;
	menus: Menu[];
}
export interface HeaderProps {
	opened: boolean;
	// setOpened: React.Dispatch<React.SetStateAction<boolean>>;
	setDrawerOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface Menu {
	label: string;
	icon: React.FC<any>;
	link?: string;
	initiallyOpened?: boolean;
	children?: ChildMenu[];
}

const icons = {
	user: IconUserPlus,
	discount: IconDiscount2,
	receipt: IconReceipt2,
	coin: IconCoin,
  };
export interface StatsGridProps {
	data: { title: string; icon: keyof typeof icons; value: string; diff: number }[];
  }

export interface ChildMenu {
	label: string;
	link: string;
}
