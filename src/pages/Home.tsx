import {useState} from "react";
import {Container, Grid,} from "@mui/material";
import {BudgetInputs} from "@/components/BudgetInputs.tsx";
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
                    <BudgetInputs
                        income={income}
                        savingsGoal={savingsGoal}
                        onIncomeChange={setIncome}
                        onSavingsGoalChange={setSavingsGoal}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};
