import Card from '@mui/material/Card';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function LogComponent({ log }) {

    return (
        <div style={{ padding: 40 }}>
            <Card style={{ backgroundColor: log.result['line.data.status'] === "200" ? 'green' : 'red', padding: 30 }}>
                <p><b>Timestamp:</b>:{log.result['line.time']}</p>
                <p><b>res_code</b>:{log.result['line.data.status']}</p>
                <p><b>host</b>:{log.result['line.data.host']}</p>

                <Accordion>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography>View more about this log</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                <pre>{JSON.stringify(log.result)}</pre>
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>


            </Card>
        </div>

    )
}


export default LogComponent