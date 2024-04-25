import React from 'react';
import { Navbar as MantineNavbar, Text, ScrollArea, createStyles, rem } from '@mantine/core';
import { LinksGroup } from './NavbarLinksGroup';
import { NavbarProps } from '../utils/interface';
import { IconLogout } from '@tabler/icons-react';
import { IconLogout2 } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
	navbar: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
		paddingBottom: 0,
		paddingTop: 0,
	},

	header: {
		padding: theme.spacing.md,
		paddingTop: 0,
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
		borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},

	links: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		paddingTop: 0,
	},

	linksInner: {
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
	},

	footer: {
		marginLeft: `calc(${theme.spacing.md} * -1)`,
		marginRight: `calc(${theme.spacing.md} * -1)`,
		borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]}`,
	},
}));

export default function Navbar({ opened, menus }: NavbarProps) {
	const { classes } = useStyles();
	const links = menus.map((item) => <LinksGroup {...item} key={item.label} />);
	return (
		<MantineNavbar
			width={{ sm: 200, lg: 240 }}
			hidden={!opened}
			p="md"
			className={classes.navbar}
			hiddenBreakpoint="sm"
		>
			{/* <MantineNavbar.Section className={classes.header}>
				<Group position="apart">
					<Logo width={rem(120)} />
					<Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
				</Group>
			</MantineNavbar.Section> */}

			<MantineNavbar.Section grow className={classes.links} component={ScrollArea}>
				<div className={classes.linksInner}>{links}</div>
			</MantineNavbar.Section>

			<MantineNavbar.Section className={classes.footer}>
				<Text>Logout Button</Text>
				{/* <Text mt="xs" color="dimmed" size="sm">
        				sample text
      			</Text> */}
				{/* <div className={classes.linksInner}>{links}</div>
				  <IconLogout2 style={{margin :"5px"}} size={rem(20)} xlinkTitle='Logout' />	   */}
			</MantineNavbar.Section>
			
        	
		</MantineNavbar>
	);
}
