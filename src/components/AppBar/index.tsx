import {
  AppBar as MUIAppBar,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

export interface AppBarProps {
  isAdmin?: boolean;
}

export const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  const { isAdmin = false } = props;
  return (
    <MUIAppBar>
      <Toolbar>
        <Typography variant="h6" className={styles.title}>
          ICTSC
        </Typography>
        <Button color="inherit">問題</Button>
        <Button color="inherit">質問</Button>
        {isAdmin && <Button color="inherit">解答</Button>}
        <Button color="inherit">ガイド</Button>
        <Button color="inherit">チーム</Button>
        <Button color="inherit" variant="outlined">
          ログアウト
        </Button>
      </Toolbar>
    </MUIAppBar>
  );
};
