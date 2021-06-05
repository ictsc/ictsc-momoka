import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import styles from './styles.module.scss';

export const LoginForm: React.FC = () => {
  return (
    <Card className={styles.card}>
      <CardContent>
        <Typography className={styles.card__title}>ICTSC</Typography>
      </CardContent>
    </Card>
  );
};
