import React from 'react';
import './App.scss';
import { createStyles, makeStyles, Theme, WithStyles } from "@material-ui/core";
import PersistentDrawerLeft from "./Components/PersistentDrawerLeft";
import Blog from "./blog/Blog";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

function App() {
    const classes = useStyles();

    return Blog;
}

export default App;
