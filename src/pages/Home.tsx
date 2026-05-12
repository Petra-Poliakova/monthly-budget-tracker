import {useState} from "react";
import {Container, Grid, Stack, Typography, Paper, TextField,} from "@mui/material";
import {HeroIntro} from "@/components/HeroIntro.tsx";

import "./Home.scss";

export const Home = () => {
    const [income, setIncome] = useState<number | null>(null);
    const [savingsGoal, setSavingsGoal] = useState<number | null>(null);

    return (
        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 6}}>
                    <HeroIntro/>
                </Grid>

                <Grid size={{xs: 12, md: 6}}>
                    <Paper sx={{p: 2, borderRadius: 3, boxShadow: 'var(--shadow)'}}>
                        <Grid container spacing={2}>
                            <Grid size={{xs: 12, sm: 6}}>
                                <Stack spacing={1}>
                                    <Typography component="label" htmlFor="monthly-income"
                                                sx={{fontSize: 14, fontWeight: 500, color: "text.primary",}}
                                    >
                                        Monthly income
                                    </Typography>
                                    <TextField id="monthly-income" variant="outlined" type='number' size="small"
                                               value={income} fullWidth
                                               onChange={(e) => setIncome(Number(e.target.value))}/>
                                </Stack>
                            </Grid>
                            <Grid size={{xs: 12, sm: 6}}>
                                <Stack spacing={1}>
                                    <Typography component="label" htmlFor="savings-goal"
                                                sx={{fontSize: 14, fontWeight: 500, color: "text.primary",}}
                                    >
                                        Savings goal
                                    </Typography>
                                    <TextField id="savings-goal" variant="outlined" type='number' size="small"
                                               value={savingsGoal} fullWidth
                                               onChange={(e) => setSavingsGoal(Number(e.target.value))}/>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};
