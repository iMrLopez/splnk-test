import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

function LogComponent({ log }) {

    return (
        <div style={{ padding: 40 }}>
            <Card style={{ backgroundColor: log.result['line.data.status'] === "200" ? 'green' : 'red' }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Timestamp
                                    </Typography>

                                    <Typography variant="body2">
                                        {log.result['line.time']}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Method // Result Code
                                    </Typography>

                                    <Typography variant="body2">
                                    {log.result['line.data.method']} // {log.result['line.data.status']}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                        Server
                                    </Typography>

                                    <Typography variant="body2">
                                        {log.result['splunk_server']}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                    <p>&nbsp;</p>

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
                                    <pre>
                                        <code>
                                            {JSON.stringify(log.result, null, 4)}
                                        </code>
                                    </pre>
                                </p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </CardContent>



            </Card>
        </div>

    )
}


export default LogComponent