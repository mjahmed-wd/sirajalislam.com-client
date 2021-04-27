import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

export default function SubHeader({children}) {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
     <li  className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>{`I'm sticky`}</ListSubheader>
            
              <ListItem>
                <div>
                {
                    children
                }
                </div>
              </ListItem>
          </ul>
        </li>
    </List>
  );
}
