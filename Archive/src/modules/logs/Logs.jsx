import React, { useState } from 'react';
import LogComponent from '../../components/log.component';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import './Logs'
import { useEffect } from 'react';


function Logs() {
    const [logs, setLogs] = useState([]);


    useEffect(() => {
        fetchLogs().then(logs => setLogs(logs));
    }, [])

    const fetchLogs = async () => await (await fetch('/logs.json')).json()


    return (
        <Stack spacing={2}   divider={<Divider orientation="vertical" flexItem />}
        >
            {
                logs.map((l, i) => <LogComponent key={i} log={l}/>)
            }
        </Stack>
    );
}

export default Logs;