import React from 'react';
import {
	Header as MantineHeader,
	MediaQuery,
	Burger,
	Text,
	Switch,
	Group,
	useMantineColorScheme,
	useMantineTheme,
	Container,
	Avatar,
	createStyles,
} from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

import { HeaderProps } from '../utils/interface';
import { Form } from 'react-router-dom';

export default function Header({ opened, setDrawerOpened }: HeaderProps) { 
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const theme = useMantineTheme();
	const useStyles = createStyles((theme)=> ({
		headerSection:{
			boxShadow:theme.colorScheme==="dark"? "1px 1px 10px #726d6d":"0px 0px 8px lightblue",
		},
	}));

	const {classes} = useStyles();

	return (
		<MantineHeader className={classes.headerSection} height={{ base: 45, md: 45 }} p="md">
			<div style={{ display: 'flex', alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
				<Group placeholder='S - Next Generation App'>
					{/* <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
						<Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" /> 
					</MediaQuery> */}
					<Burger opened={opened} onClick={() => setDrawerOpened((o) => !o)} size="sm" mr="lg" />
					{/* <Text>Application Logo</Text> */}
					<Text>SoftTest</Text>
				</Group>
				<Group position="right">
					<Group position="center" my={30}>
						<Switch
							checked={colorScheme === 'dark'}
							onChange={() => toggleColorScheme()}
							size="lg"
							onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
							offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
						/>
						<Avatar variant='gradient' gradient={theme.colorScheme==="dark"? {from:"blue",to:"darkgrey"}:{from:"cyan",to:"indigo"}} radius="xl" size="sm" >SR</Avatar>
					</Group>
				</Group>
			</div>
		</MantineHeader>
	);
}