import React, { useState } from 'react';
import {  Outlet , useNavigate } from 'react-router-dom';
import { AppShell, Drawer, MantineProvider, Text, useMantineTheme,NavLink } from '@mantine/core';
import { menus } from './pages/menus';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { IconFingerprint, IconGauge } from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';
import './app.css';

export default function App() {
	const theme = useMantineTheme();
	const navigate = useNavigate();
	const [opened, setDrawerOpened] = useState(false);
	const [drawerOpened,{open,close}] = useDisclosure(false);

	return (
		<AppShell
			styles={{
				main: {
					background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			// navbar={<Navbar opened={opened} menus={menus} />}
			footer={<Footer />}
			header={<Header opened={opened} setDrawerOpened={open} />}
		>
      <Drawer
        opened={drawerOpened}
        onClose={close}
        title="Side Menu"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
		overlayProps={{ opacity: 0 }}
		shadow='xl'
      >
		<NavLink label="Dashboard" 
			variant='light'
			onClick={()=>{navigate("/"); close()}}
			icon={<IconGauge size="1rem" stroke={1.5} />}  />
		<NavLink 
			label="Record Details" 
			variant="light" 
			onClick={()=>{navigate("/RecordDetails");close()}}
			icon={<IconGauge size="1rem" stroke={1.5} />}  />

		 <NavLink
        label="Reports"
        icon={<IconGauge size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
		<NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Nested parent link" childrenOffset={28}>
          <NavLink label="First child link" />
          <NavLink label="Second child link" />
          <NavLink label="Third child link" />
        </NavLink>
      </NavLink>

      <NavLink
        label="Second parent link"
        icon={<IconFingerprint size="1rem" stroke={1.5} />}
        childrenOffset={28}
        defaultOpened
      >
        <NavLink label="First child link" />
        <NavLink label="Second child link" />
        <NavLink label="Third child link" />
      </NavLink>
        
      </Drawer>


			<Outlet />
		</AppShell>	
	);
}
