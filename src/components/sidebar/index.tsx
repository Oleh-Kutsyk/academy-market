import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { sidebarMenu, ISideBarMenuItem } from '../../constants/sidebarMenu';
import * as Styled from './styled';
import { Box } from '@mui/material';
import { Icon } from '../icon';
import { TIconsName } from '../../assets/icons';
import { useMst } from '../../stores';
import { AdminCard } from './components';
import { Button } from '../button';

interface ISidebar {
  open: boolean;
  onClose: () => void;
}

export const SideBar: React.FC<ISidebar> = observer(({ open, onClose }) => {
  const store = useMst();
  const [isOpen, setIsOpen] = useState(false);

  const selectedItemId = store.ui.sidebar.selectedItemId;
  const brands = store.app.brand.list;
  const currentBrand = store.app.brand.getCurrentBrandTitle();

  const handleSelectSideBarItem = (id: string) => () => {
    store.ui.sidebar.select(id);
  };

  const renderItem = (sidebarItems: Array<ISideBarMenuItem>) => {
    return sidebarItems.map(item => {
      const isActive = item.id === selectedItemId;
      return (
        <Styled.ListItem key={item.id}>
          {item.hasDropDown ? (
            <Styled.DropDownContainer>
              <Styled.ListItemButton onClick={handleSelectSideBarItem(item.id)}>
                {!!item.iconType && (
                  <Icon
                    iconType={item.iconType as TIconsName}
                    stroke={isActive ? '#FFF' : '#66A0FA'}
                  />
                )}
                <Styled.MenuItemTitle isActive={isActive}>
                  {item.title}
                </Styled.MenuItemTitle>
              </Styled.ListItemButton>
              {isActive && item.children?.length && renderItem(item.children)}
            </Styled.DropDownContainer>
          ) : (
            <Styled.NavLink to={item.link as string}>
              {!!item.iconType && (
                <Icon iconType={item.iconType as TIconsName} />
              )}
              {item.title}
            </Styled.NavLink>
          )}
        </Styled.ListItem>
      );
    });
  };

  return (
    <Styled.Drawer
      variant='persistent'
      anchor='left'
      open={open}
      onClose={onClose}
    >
      <Styled.DrawerHeader>
        <Box>
          <Styled.Title>AMPM</Styled.Title>
          <Styled.SubTitle>App Management & Parameters Mapping</Styled.SubTitle>
        </Box>
        <Styled.CloseSideMenu color='secondary' onClick={onClose}>
          <Icon iconType={'openSideBar'} />
        </Styled.CloseSideMenu>
      </Styled.DrawerHeader>
      <Styled.DrawerBrand>
        <Styled.Brand>{currentBrand}</Styled.Brand>
        <Styled.ChooseBrand
          color='secondary'
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Icon iconType='iconArrowDown' />
        </Styled.ChooseBrand>
      </Styled.DrawerBrand>
      {isOpen && (
        <Styled.Brands>
          {brands.map(b => (
            <Button
              color='inherit'
              key={b.title}
              onClick={() => {
                store.app.brand.changeBrand(b.value);
              }}
            >
              {b.title}
            </Button>
          ))}
        </Styled.Brands>
      )}
      <Styled.ListWrapper>
        <Styled.Box>
          <Styled.List>{renderItem(sidebarMenu)}</Styled.List>
        </Styled.Box>
      </Styled.ListWrapper>
      <AdminCard />
    </Styled.Drawer>
  );
});
