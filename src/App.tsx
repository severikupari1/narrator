import React from 'react';
import './App.scss';
import { Box, createStyles, makeStyles, Theme } from "@material-ui/core";
import PersistentDrawerLeft from "./Components/PersistentDrawerLeft";
import { Route, Switch } from 'react-router';
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

    return (
        <Box id={'base'}>
            <Box className={'base-container'}>

                <PersistentDrawerLeft children={
                    <Box>
                        asd
                    </Box>
                }/>
            </Box>
        </Box>
    );
}

export default App;
